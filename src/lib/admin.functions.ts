import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const ALLOWED_STATUSES = ["paid_pending_admin", "noted", "certificate_sent"] as const;
type PaymentStatus = (typeof ALLOWED_STATUSES)[number];

/**
 * Public check for the hidden admin gate (footer logo tapped 7 times).
 * Returns whether an admin account already exists so the gate can show the
 * correct screen: sign up (no admin yet) or sign in (admin exists).
 */
export const adminGateState = createServerFn({ method: "GET" }).handler(async () => {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { count } = await supabaseAdmin
    .from("user_roles")
    .select("id", { count: "exact", head: true })
    .eq("role", "admin");
  return { adminExists: (count ?? 0) > 0 };
});

async function assertAdmin(context: { supabase: any; userId: string }) {
  const { data, error } = await context.supabase.rpc("has_role", {
    _user_id: context.userId,
    _role: "admin",
  });
  if (error || !data) throw new Error("Forbidden: admin access required");
}

/** Lightweight check used by the UI to decide whether to show admin controls. */
export const checkIsAdmin = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    return { isAdmin: Boolean(data) };
  });

/** Aggregate counts for the admin overview cards. */
export const getAdminStats = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const [users, payments, paid] = await Promise.all([
      supabaseAdmin.from("profiles").select("id", { count: "exact", head: true }),
      supabaseAdmin.from("certificate_payments").select("id", { count: "exact", head: true }),
      supabaseAdmin.from("certificate_payments").select("amount,certificate_type,payment_status"),
    ]);

    const rows = paid.data ?? [];
    const totalRevenue = rows.reduce((sum, r) => sum + Number(r.amount ?? 0), 0);
    const certificatesSent = rows.filter((r) => r.payment_status === "certificate_sent").length;
    const pending = rows.filter((r) => r.payment_status === "paid_pending_admin").length;

    return {
      totalUsers: users.count ?? 0,
      totalPayments: payments.count ?? 0,
      totalRevenue,
      certificatesSent,
      pending,
    };
  });

/** Full list of certificate/diploma payments for the admin payments table. */
export const listPayments = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data, error } = await supabaseAdmin
      .from("certificate_payments")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return { payments: data ?? [] };
  });

/** Update the workflow status of a payment (e.g. mark certificate as sent). */
export const updatePaymentStatus = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { id: string; status: PaymentStatus }) => {
    if (!input?.id) throw new Error("Missing payment id");
    if (!ALLOWED_STATUSES.includes(input.status)) throw new Error("Invalid status");
    return input;
  })
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin
      .from("certificate_payments")
      .update({ payment_status: data.status })
      .eq("id", data.id);
    if (error) throw error;
    return { success: true };
  });

/** List of registered users for the admin users table. */
export const listUsers = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data, error } = await supabaseAdmin
      .from("profiles")
      .select("id, full_name, email, country, city, signup_type, school_name, created_at")
      .order("created_at", { ascending: false })
      .limit(500);
    if (error) throw error;
    return { users: data ?? [] };
  });

const PRICES: Record<string, number> = { certificate: 12, diploma: 18 };

/**
 * Record a manual / cash payment for a learner who paid offline.
 * Admin-only. Creates a certificate_payments row via the service role so the
 * learner shows up in the payments table and can be issued a credential.
 */
export const createManualPayment = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator(
    (input: {
      userId: string;
      courseId: string;
      courseName: string;
      level: "certificate" | "diploma";
    }) => {
      if (!input?.userId) throw new Error("Select a learner");
      if (!input?.courseName?.trim()) throw new Error("Course name is required");
      if (input.level !== "certificate" && input.level !== "diploma")
        throw new Error("Invalid level");
      return input;
    },
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: profile } = await supabaseAdmin
      .from("profiles")
      .select("full_name, email")
      .eq("id", data.userId)
      .maybeSingle();

    const certificateId = `EDU-CASH-${Date.now().toString(36).toUpperCase()}`;
    const { error } = await supabaseAdmin.from("certificate_payments").insert({
      user_id: data.userId,
      student_name: profile?.full_name ?? null,
      email: profile?.email ?? null,
      course_id: data.courseId || data.courseName.toLowerCase().replace(/\s+/g, "-"),
      course_name: data.courseName,
      certificate_type: data.level,
      amount: PRICES[data.level],
      payment_status: "noted",
      certificate_id: certificateId,
  });

/**
 * Fetch all course_progress rows for a single learner and resolve them
 * into picker-friendly options (course id + title + level + completion).
 * Used by the smart cash payment form so the admin doesn't have to type
 * the course name - they pick from what the learner actually studied.
 */
export const getLearnerCourses = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { userId: string }) => {
    if (!input?.userId) throw new Error("Missing userId");
    return input;
  })
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { getCatalogItem, getCourseTitle } = await import("@/lib/courses");

    const { data: progress, error } = await supabaseAdmin
      .from("course_progress")
      .select("course_id, level, completed_modules, is_completed, updated_at")
      .eq("user_id", data.userId)
      .order("updated_at", { ascending: false });
    if (error) throw error;

    const { data: paid } = await supabaseAdmin
      .from("certificate_payments")
      .select("course_id, certificate_type")
      .eq("user_id", data.userId)
      .in("payment_status", ["paid_pending_admin", "noted", "certificate_sent"]);
    const paidKey = new Set((paid ?? []).map((p) => `${p.course_id}::${p.certificate_type}`));

    const courses = (progress ?? []).map((row) => {
      const item = getCatalogItem(row.course_id);
      const level = (row.level === "diploma" ? "diploma" : "certificate") as
        | "certificate"
        | "diploma";
      const title = item ? getCourseTitle(item, level) : row.course_id;
      return {
        courseId: row.course_id,
        title,
        level,
        completedModules: Array.isArray(row.completed_modules) ? row.completed_modules.length : 0,
        isCompleted: Boolean(row.is_completed),
        alreadyPaid: paidKey.has(`${row.course_id}::${level}`),
        updatedAt: row.updated_at,
      };
    });

    return { courses };
  });
    if (error) throw error;
    return { success: true, certificateId };
  });
