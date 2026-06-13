import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { getRequestHeader } from "@tanstack/react-start/server";

const PRICES: Record<string, number> = { certificate: 12, diploma: 18 };

function apiBase() {
  return process.env.PAYPAL_API_BASE || "https://api-m.paypal.com";
}

/**
 * Derive the app origin from the incoming request on the server.
 * Never trust a client-supplied origin: that enables an open-redirect /
 * phishing vector on the PayPal return URL.
 */
function appOrigin(): string {
  const host = getRequestHeader("host");
  const proto = getRequestHeader("x-forwarded-proto") ?? "https";
  if (host) return `${proto}://${host}`;
  return process.env.APP_ORIGIN ?? "";
}

async function getAccessToken(): Promise<string> {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const secret = process.env.PAYPAL_SECRET;
  if (!clientId || !secret) throw new Error("PayPal credentials not configured");
  const res = await fetch(`${apiBase()}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${clientId}:${secret}`).toString("base64")}`,
    },
    body: "grant_type=client_credentials",
  });
  if (!res.ok) throw new Error("Failed to get PayPal access token");
  const data = await res.json();
  return data.access_token as string;
}

function generateCertificateId(): string {
  const random = Math.random().toString(36).substring(2, 15).toUpperCase();
  return `CERT-${Date.now()}-${random}`;
}

/** Create a PayPal order and return the approval URL to redirect the buyer to. */
export const createPayPalOrder = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { courseId: string; courseName: string; level: string }) => {
    if (!input?.courseId || !input?.level) throw new Error("Missing required fields");
    if (input.level !== "certificate" && input.level !== "diploma") throw new Error("Invalid level");
    return input;
  })
  .handler(async ({ data }) => {
    const amount = PRICES[data.level];
    const token = await getAccessToken();
    const label = data.level === "diploma" ? "Diploma" : "Certificate";
    const origin = appOrigin();
    const success = `${origin}/certificate-success?courseId=${encodeURIComponent(data.courseId)}&level=${data.level}`;
    const cancel = `${origin}/certificate-payment?courseId=${encodeURIComponent(data.courseId)}&level=${data.level}&error=cancelled`;

    const res = await fetch(`${apiBase()}/v2/checkout/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: { currency_code: "USD", value: amount.toFixed(2) },
            description: `${label} for ${data.courseName}`,
            custom_id: data.courseId,
          },
        ],
        application_context: {
          brand_name: "Edusanna",
          user_action: "PAY_NOW",
          return_url: success,
          cancel_url: cancel,
        },
      }),
    });
    if (!res.ok) throw new Error("Failed to create PayPal order");
    const order = await res.json();
    const approveUrl = (order.links || []).find((l: { rel: string; href: string }) => l.rel === "approve")?.href;
    if (!approveUrl) throw new Error("PayPal approval link missing");
    return { orderId: order.id as string, approveUrl: approveUrl as string };
  });

/** Capture an approved PayPal order, verify it, and record the payment. */
export const capturePayPalOrder = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { orderId: string; courseId: string; courseName?: string; level: string }) => {
    if (!input?.orderId || !input?.courseId || !input?.level) throw new Error("Missing required fields");
    if (input.level !== "certificate" && input.level !== "diploma") throw new Error("Invalid level");
    return input;
  })
  .handler(async ({ data, context }) => {
    const { userId, supabase } = context;
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // Prevent double-charging for the same credential
    const { data: existing } = await supabaseAdmin
      .from("certificate_payments")
      .select("id")
      .eq("user_id", userId)
      .eq("course_id", data.courseId)
      .eq("certificate_type", data.level)
      .in("payment_status", ["paid_pending_admin", "noted", "certificate_sent"]);
    if (existing && existing.length > 0) {
      return { success: false, error: "You have already paid for this credential." as string };
    }

    const token = await getAccessToken();
    const res = await fetch(`${apiBase()}/v2/checkout/orders/${data.orderId}/capture`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Failed to capture payment");
    const captured = await res.json();
    const capture = captured?.purchase_units?.[0]?.payments?.captures?.[0];
    if (captured.status !== "COMPLETED" || capture?.status !== "COMPLETED") {
      return { success: false, error: "Payment verification failed." as string };
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("full_name, email")
      .eq("id", userId)
      .maybeSingle();

    const certificateId = generateCertificateId();
    const amount = parseFloat(capture.amount.value);

    await supabaseAdmin.from("certificate_payments").insert({
      user_id: userId,
      student_name: profile?.full_name ?? null,
      email: profile?.email ?? null,
      course_id: data.courseId,
      course_name: data.courseName ?? null,
      certificate_type: data.level,
      amount,
      paypal_order_id: data.orderId,
      certificate_id: certificateId,
      payment_status: "paid_pending_admin",
    });

    // Notify the admin on WhatsApp (non-blocking, fails silently if unconfigured)
    try {
      const { notifyAdminWhatsApp } = await import("@/lib/notify.server");
      const label = data.level === "diploma" ? "Diploma" : "Certificate";
      await notifyAdminWhatsApp(
        `New Edusanna payment: ${label} ($${amount.toFixed(2)}) for "${data.courseName ?? data.courseId}" by ${profile?.full_name ?? profile?.email ?? "a student"}. Cert ID: ${certificateId}`,
      );
    } catch {
      /* notification must never block payment confirmation */
    }

    return { success: true, certificateId, amount };
  });
