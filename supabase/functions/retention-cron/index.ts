import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

/**
 * Retention Cron — runs daily via pg_cron or manual invoke.
 * Sends automated retention emails to inactive users:
 *
 * 1. d1-reminder: Signed up yesterday, 0 activity → "Du hast gestern angefangen!"
 * 2. streak-risk: Has streak ≥ 2, inactive today → "Dein Streak ist in Gefahr!"
 * 3. re-engagement: 3-7 days inactive → "Wir vermissen dich"
 *
 * Delegates actual email sending to the existing send-email function.
 */

function requireEnv(name: string): string {
  const v = Deno.env.get(name);
  if (!v) throw new Error(`Missing required env var: ${name}`);
  return v;
}

const supabase = createClient(
  requireEnv("SUPABASE_URL"),
  requireEnv("SUPABASE_SERVICE_ROLE_KEY")
);

const SUPABASE_URL = requireEnv("SUPABASE_URL");
const SERVICE_ROLE_KEY = requireEnv("SUPABASE_SERVICE_ROLE_KEY");

async function sendTemplateEmail(
  userId: string,
  templateId: string,
  templateData: { email: string; displayName: string; questionsAnswered?: number; correctRate?: number }
): Promise<boolean> {
  const resp = await fetch(`${SUPABASE_URL}/functions/v1/send-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
    },
    body: JSON.stringify({ action: "send", userId, templateId, templateData }),
  });
  const result = await resp.json();
  return result.sent === true;
}

async function wasRecentlySent(userId: string, templateId: string, withinDays: number): Promise<boolean> {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - withinDays);

  const { data } = await supabase
    .from("email_logs")
    .select("id")
    .eq("user_id", userId)
    .eq("template_id", templateId)
    .gte("sent_at", cutoff.toISOString())
    .limit(1);

  return (data?.length ?? 0) > 0;
}

// ── D1 Reminder: signed up 24-48h ago, 0 questions answered ──

async function processD1Reminders(): Promise<number> {
  const now = new Date();
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  const dayBefore = new Date(now);
  dayBefore.setDate(dayBefore.getDate() - 2);

  // Users created 24-48h ago
  const { data: recentUsers } = await supabase.auth.admin.listUsers({ perPage: 500 });
  if (!recentUsers?.users) return 0;

  const candidates = recentUsers.users.filter((u) => {
    const created = new Date(u.created_at);
    return created >= dayBefore && created <= yesterday && u.email;
  });

  let sent = 0;
  for (const user of candidates) {
    if (!user.email) continue;

    // Check if they have any activity (answers)
    const { count } = await supabase
      .from("answers")
      .select("id", { count: "exact", head: true })
      .eq("user_id", user.id);

    if ((count ?? 0) > 0) continue; // Has activity, skip

    // Don't re-send
    if (await wasRecentlySent(user.id, "d1-reminder", 7)) continue;

    const { data: profile } = await supabase
      .from("profiles")
      .select("display_name, email_opt_out")
      .eq("id", user.id)
      .single();

    if (profile?.email_opt_out) continue;

    const ok = await sendTemplateEmail(user.id, "d1-reminder", {
      email: user.email,
      displayName: profile?.display_name || "MedAT-Bewerber",
    });
    if (ok) sent++;

    await new Promise((r) => setTimeout(r, 1500)); // IONOS throttle
  }

  return sent;
}

// ── Streak-at-risk: has streak ≥ 2, last_active_date = yesterday ──

async function processStreakRisk(): Promise<number> {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split("T")[0];

  const { data: atRisk } = await supabase
    .from("user_streaks")
    .select("user_id, current_streak, last_active_date")
    .gte("current_streak", 2)
    .eq("last_active_date", yesterdayStr);

  if (!atRisk?.length) return 0;

  let sent = 0;
  for (const row of atRisk) {
    if (await wasRecentlySent(row.user_id, "streak-risk", 1)) continue;

    const { data: userData } = await supabase.auth.admin.getUserById(row.user_id);
    if (!userData?.user?.email) continue;

    const { data: profile } = await supabase
      .from("profiles")
      .select("display_name, email_opt_out")
      .eq("id", row.user_id)
      .single();

    if (profile?.email_opt_out) continue;

    const ok = await sendTemplateEmail(row.user_id, "streak-risk", {
      email: userData.user.email,
      displayName: profile?.display_name || "MedAT-Bewerber",
    });
    if (ok) sent++;

    await new Promise((r) => setTimeout(r, 1500));
  }

  return sent;
}

// ── Re-engagement: 3-7 days inactive ──

async function processReEngagement(): Promise<number> {
  const now = new Date();
  const threeDaysAgo = new Date(now);
  threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
  const sevenDaysAgo = new Date(now);
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  // Find users whose last answer was 3-7 days ago
  const { data: inactiveUsers } = await supabase.rpc("get_inactive_users", {
    inactive_since: threeDaysAgo.toISOString().split("T")[0],
    inactive_before: sevenDaysAgo.toISOString().split("T")[0],
  });

  // Fallback: query directly if RPC doesn't exist yet
  if (!inactiveUsers) {
    const { data: profiles } = await supabase
      .from("profiles")
      .select("id, display_name, last_active_date, email_opt_out")
      .lte("last_active_date", threeDaysAgo.toISOString().split("T")[0])
      .gte("last_active_date", sevenDaysAgo.toISOString().split("T")[0]);

    if (!profiles?.length) return 0;

    let sent = 0;
    for (const profile of profiles) {
      if (profile.email_opt_out) continue;
      if (await wasRecentlySent(profile.id, "re-engagement", 7)) continue;

      const { data: userData } = await supabase.auth.admin.getUserById(profile.id);
      if (!userData?.user?.email) continue;

      const { data: stats } = await supabase
        .from("answers")
        .select("is_correct")
        .eq("user_id", profile.id);

      const questionsAnswered = stats?.length || 0;
      const correctRate = questionsAnswered > 0
        ? Math.round((stats!.filter((a: { is_correct: boolean }) => a.is_correct).length / questionsAnswered) * 100)
        : 0;

      const ok = await sendTemplateEmail(profile.id, "re-engagement", {
        email: userData.user.email,
        displayName: profile.display_name || "MedAT-Bewerber",
        questionsAnswered,
        correctRate,
      });
      if (ok) sent++;

      await new Promise((r) => setTimeout(r, 1500));
    }

    return sent;
  }

  return 0;
}

// ── Main handler ──

serve(async (req) => {
  // Accept POST (from pg_cron via pg_net) or GET (manual trigger)
  const authHeader = req.headers.get("Authorization");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
  if (authHeader !== `Bearer ${serviceRoleKey}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  const results = {
    d1_reminders: 0,
    streak_risk: 0,
    re_engagement: 0,
    errors: [] as string[],
  };

  try {
    results.d1_reminders = await processD1Reminders();
  } catch (err) {
    results.errors.push(`d1: ${err instanceof Error ? err.message : String(err)}`);
  }

  try {
    results.streak_risk = await processStreakRisk();
  } catch (err) {
    results.errors.push(`streak: ${err instanceof Error ? err.message : String(err)}`);
  }

  try {
    results.re_engagement = await processReEngagement();
  } catch (err) {
    results.errors.push(`re-engage: ${err instanceof Error ? err.message : String(err)}`);
  }

  return new Response(JSON.stringify(results), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
});
