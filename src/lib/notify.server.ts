// Server-only WhatsApp notifications via CallMeBot.
// Reads CALLMEBOT_APIKEY and CALLMEBOT_PHONE at call time (never at module scope).
const CALLMEBOT_URL = "https://api.callmebot.com/whatsapp.php";

/**
 * Sends a WhatsApp message to the configured admin phone via CallMeBot.
 * Fails silently (logs only) so it never blocks the payment flow.
 */
export async function notifyAdminWhatsApp(message: string): Promise<void> {
  try {
    const apikey = process.env.CALLMEBOT_APIKEY;
    const phone = process.env.CALLMEBOT_PHONE;
    if (!apikey || !phone) {
      console.warn("[notify] CallMeBot not configured; skipping WhatsApp notification");
      return;
    }
    const params = new URLSearchParams({ phone, text: message, apikey });
    const res = await fetch(`${CALLMEBOT_URL}?${params.toString()}`, { method: "GET" });
    if (!res.ok) console.error("[notify] CallMeBot returned", res.status);
  } catch (err) {
    console.error("[notify] Failed to send WhatsApp notification", err);
  }
}
