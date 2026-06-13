import { createServerFn } from "@tanstack/react-start";

// Baseline so the displayed community size never starts from zero and grows
// as real users register. Keep in sync with the social-proof copy.
const USER_BASELINE = 6428;

export const getCommunityStats = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { count, error } = await supabaseAdmin
      .from("profiles")
      .select("id", { count: "exact", head: true });
    if (error) throw error;
    return { totalUsers: USER_BASELINE + (count ?? 0) };
  } catch {
    return { totalUsers: USER_BASELINE };
  }
});
