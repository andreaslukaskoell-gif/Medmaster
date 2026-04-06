/**
 * Backend sync layer — bridges localStorage state with Supabase.
 * All functions are fire-and-forget (don't block UI) and fail silently.
 */

import { supabase } from "./supabase";

function skip() {
  // Only skip if supabase is not initialized — never skip due to schema errors,
  // as that blocks ALL writes (quiz results, streaks, etc.) for the entire session
  return !supabase;
}

// ── Quiz Results ──────────────────────────────────────────────

type QuizResultPayload = {
  quiz_type: "bms" | "kff" | "tv" | "sek" | "simulation";
  subject?: string;
  chapter_id?: string;
  score: number;
  total: number;
  duration_seconds?: number;
  answers?: { questionId: string; selectedAnswer: string; correct: boolean }[];
};

export async function syncQuizResult(payload: QuizResultPayload) {
  // Don't skip quiz results — they are critical for analytics and user progress
  if (!supabase) return;
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;
    const scorePct = payload.total > 0 ? (payload.score / payload.total) * 100 : 0;
    const { error } = await supabase.from("quiz_results").insert({
      user_id: user.id,
      score_pct: Math.round(scorePct * 10) / 10,
      ...payload,
    });
    if (error) {
      console.warn("[syncQuizResult] Insert failed:", error.message);
    }
  } catch (err) {
    console.warn("[syncQuizResult] Error:", err instanceof Error ? err.message : err);
  }
}

// ── SRS Review ────────────────────────────────────────────────

export async function syncSrsReview(questionId: string, correct: boolean) {
  if (skip()) return;
  try {
    const { error } = await supabase!.rpc("sync_srs_review", {
      p_question_id: questionId,
      p_correct: correct,
    });
    if (error) console.warn("[syncSrsReview]", error.message);
  } catch (err) {
    console.warn("[syncSrsReview]", err instanceof Error ? err.message : err);
  }
}

// ── Streak Sync ───────────────────────────────────────────────

export async function syncStreak(data: {
  current_streak: number;
  xp: number;
  daily_goal_minutes: number;
}) {
  if (skip()) return;
  try {
    const {
      data: { user },
    } = await supabase!.auth.getUser();
    if (!user) return;
    const { error } = await supabase!.from("user_streaks").upsert(
      {
        user_id: user.id,
        current_streak: data.current_streak,
        longest_streak: data.current_streak, // updated by trigger if higher
        last_active_date: new Date().toISOString().slice(0, 10),
        xp: data.xp,
        daily_goal_minutes: data.daily_goal_minutes,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id" }
    );
    if (error) console.warn("[syncStreak]", error.message);
  } catch (err) {
    console.warn("[syncStreak]", err instanceof Error ? err.message : err);
  }
}

// ── Simulation Results ────────────────────────────────────────

type SimulationPayload = {
  bms_score?: number;
  bms_total?: number;
  tv_score?: number;
  kff_score?: number;
  sek_score?: number;
  total_score?: number;
  duration_minutes?: number;
  details?: Record<string, unknown>;
};

export async function syncSimulationResult(payload: SimulationPayload) {
  if (skip()) return;
  try {
    const {
      data: { user },
    } = await supabase!.auth.getUser();
    if (!user) return;
    const { error } = await supabase!.from("simulation_results").insert({
      user_id: user.id,
      ...payload,
    });
    if (error) console.warn("[syncSimulation]", error.message);
  } catch (err) {
    console.warn("[syncSimulation]", err instanceof Error ? err.message : err);
  }
}

// ── Weakness Analysis ─────────────────────────────────────────

export type WeaknessResult = {
  weakest_chapters:
    | {
        subject: string;
        chapter_id: string;
        total: number;
        correct: number;
        pct: number;
      }[]
    | null;
  subject_scores: Record<string, { total: number; correct: number; pct: number }> | null;
  analyzed_at: string;
};

export async function fetchWeaknessAnalysis(): Promise<WeaknessResult | null> {
  if (skip()) return null;
  try {
    const {
      data: { user },
    } = await supabase!.auth.getUser();
    if (!user) return null;
    const { data, error } = await supabase!.rpc("get_weakness_analysis");
    if (error) throw error;
    return data as WeaknessResult;
  } catch (err) {
    console.warn("[fetchWeaknessAnalysis]", err instanceof Error ? err.message : err);
    return null;
  }
}

// ── Data Export (DSGVO Art. 20) ───────────────────────────────

export async function exportUserData(): Promise<Record<string, unknown> | null> {
  if (skip()) return null;
  try {
    const { data, error } = await supabase!.rpc("export_user_data");
    if (error) throw error;
    return data as Record<string, unknown>;
  } catch (err) {
    console.warn("[exportUserData]", err instanceof Error ? err.message : err);
    return null;
  }
}

// ── Leaderboard ───────────────────────────────────────────────

export async function syncLeaderboard(data: {
  nickname: string;
  xp: number;
  level: number;
  xp_this_week: number;
  subject_scores?: Record<string, number>;
  badge_ids?: string[];
}) {
  if (skip()) return;
  try {
    const {
      data: { user },
    } = await supabase!.auth.getUser();
    if (!user) return;
    const { error } = await supabase!.from("leaderboard_snapshots").upsert(
      {
        user_id: user.id,
        ...data,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id" }
    );
    if (error) console.warn("[syncLeaderboard]", error.message);
  } catch (err) {
    console.warn("[syncLeaderboard]", err instanceof Error ? err.message : err);
  }
}

export type LeaderboardEntry = {
  nickname: string;
  xp: number;
  level: number;
  xp_this_week: number;
  badge_ids: string[];
};

export async function fetchLeaderboard(
  mode: "alltime" | "weekly" = "weekly",
  limit = 20
): Promise<LeaderboardEntry[]> {
  if (skip()) return [];
  try {
    const orderCol = mode === "weekly" ? "xp_this_week" : "xp";
    const { data, error } = await supabase!
      .from("leaderboard_snapshots")
      .select("nickname, xp, level, xp_this_week, badge_ids")
      .order(orderCol, { ascending: false })
      .limit(limit);
    if (error) throw error;
    return (data ?? []) as LeaderboardEntry[];
  } catch (err) {
    console.warn("[fetchLeaderboard]", err instanceof Error ? err.message : err);
    return [];
  }
}
