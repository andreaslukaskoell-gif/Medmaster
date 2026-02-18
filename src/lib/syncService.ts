import { supabase } from "./supabase";
import { useSyncStatus } from "@/stores/syncStatus";

// Avoid circular dependency: useAuth → syncService → adaptiveLearning → data.
// Load adaptive store only when sync runs (after login).
type StichwortStat = import("@/store/adaptiveLearning").StichwortStat;
type FachStat = import("@/store/adaptiveLearning").FachStat;

/** Row shape from stichwort_stats (Supabase) */
interface StichwortStatRow {
  user_id: string;
  stichwort_id: string;
  total_attempts: number;
  correct_attempts: number;
  success_rate: number;
  last_practiced: string | null;
  confidence: string | null;
  streak: number;
  avg_time_per_question: number | null;
  status: "offen" | "meister";
  next_review_at: string;
  updated_at: string;
}

/** Vergessenskurve: nächster Wiederholungszeitpunkt ab jetzt (ISO-String). */
function calculateNextReview(streak: number): string {
  const now = Date.now();
  const dayMs = 86400000;
  let addMs = 0;
  if (streak >= 4) addMs = 14 * dayMs;
  else if (streak === 3) addMs = 7 * dayMs;
  else if (streak === 2) addMs = 3 * dayMs;
  else if (streak === 1) addMs = 1 * dayMs;
  // streak 0: +0 Stunden (bleibt fällig)
  return new Date(now + addMs).toISOString();
}

/** Row shape from fach_stats (Supabase) */
interface FachStatRow {
  fach: string;
  overall_success_rate: number;
  weak_topics: unknown;
  strong_topics: unknown;
  recommended_daily_questions: number | null;
}

// ============================================================
// Push: localStorage → Supabase
// ============================================================

export async function pushStatsToSupabase(userId: string): Promise<{ ok: boolean; error?: string }> {
  if (!supabase) return { ok: true };
  useSyncStatus.getState().setSyncing(true);
  const errors: string[] = [];
  try {
    const { useAdaptiveStore } = await import("@/store/adaptiveLearning");
    const profile = useAdaptiveStore.getState().profile;

    // 1) Update user profile fields (non-blocking: log and continue on error)
    try {
      const { error: profileErr } = await supabase
        .from("profiles")
        .update({
          learning_phase: profile.learningPhase,
          exam_date: profile.daysUntilExam
            ? new Date(Date.now() + profile.daysUntilExam * 86400000).toISOString().split("T")[0]
            : null,
          daily_challenge_streak: profile.dailyChallengeStreak,
          last_daily_challenge: profile.lastDailyChallenge,
          total_questions_answered: profile.totalQuestionsAnswered,
          total_correct: profile.totalCorrect,
        })
        .eq("id", userId);
      if (profileErr) throw profileErr;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.warn("[sync] Push profiles failed (continuing):", msg);
      errors.push(`profiles: ${msg}`);
    }

    // 2) Upsert stichwort_stats (non-blocking: empty table or error = skip)
    const stichwortRows = Object.entries(profile.stichwortStats).map(
      ([stichwortId, stat]: [string, StichwortStat]) => ({
        user_id: userId,
        stichwort_id: stichwortId,
        total_attempts: stat.totalAttempts,
        correct_attempts: stat.correctAttempts,
        success_rate: stat.successRate,
        last_practiced: stat.lastPracticed,
        confidence: stat.confidence,
        streak: stat.streak,
        avg_time_per_question: stat.avgTimePerQuestion,
        status: stat.streak >= 3 ? "meister" : "offen",
        next_review_at: calculateNextReview(stat.streak),
        updated_at: new Date().toISOString(),
      })
    );
    if (stichwortRows.length > 0) {
      try {
        for (let i = 0; i < stichwortRows.length; i += 200) {
          const chunk = stichwortRows.slice(i, i + 200);
          const { error: swErr } = await supabase
            .from("stichwort_stats")
            .upsert(chunk, { onConflict: "user_id,stichwort_id" });
          if (swErr) throw swErr;
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        console.warn("[sync] Push stichwort_stats failed (continuing):", msg);
        errors.push(`stichwort_stats: ${msg}`);
      }
    }

    // 3) Upsert fach_stats (non-blocking)
    const fachRows = Object.entries(profile.fachStats).map(
      ([fach, stat]: [string, FachStat]) => ({
        user_id: userId,
        fach,
        overall_success_rate: stat.overallSuccessRate,
        weak_topics: JSON.stringify(stat.weakTopics),
        strong_topics: JSON.stringify(stat.strongTopics),
        recommended_daily_questions: stat.recommendedDailyQuestions,
        updated_at: new Date().toISOString(),
      })
    );
    if (fachRows.length > 0) {
      try {
        const { error: fachErr } = await supabase
          .from("fach_stats")
          .upsert(fachRows, { onConflict: "user_id,fach" });
        if (fachErr) throw fachErr;
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        console.warn("[sync] Push fach_stats failed (continuing):", msg);
        errors.push(`fach_stats: ${msg}`);
      }
    }

    console.log("[sync] Pushed stats to Supabase:", {
      stichwortCount: stichwortRows.length,
      fachCount: fachRows.length,
      errors: errors.length > 0 ? errors : undefined,
    });
    useSyncStatus.getState().setLastSynced(new Date().toISOString());
    return {
      ok: true,
      ...(errors.length > 0 && { error: errors.join("; ") }),
    };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[sync] Push failed:", msg);
    return { ok: false, error: msg };
  } finally {
    useSyncStatus.getState().setSyncing(false);
  }
}

// ============================================================
// Pull: Supabase → localStorage
// ============================================================

export async function pullStatsFromSupabase(userId: string): Promise<{ ok: boolean; error?: string }> {
  if (!supabase) return { ok: true };
  useSyncStatus.getState().setSyncing(true);
  try {
    // 1) Fetch profile fields — use maybeSingle() so missing row is not an error
    const { data: profileData, error: profileErr } = await supabase
      .from("profiles")
      .select("learning_phase, exam_date, daily_challenge_streak, last_daily_challenge, total_questions_answered, total_correct")
      .eq("id", userId)
      .maybeSingle();

    if (profileErr) {
      console.warn("[sync] Pull profiles failed, treating as no remote data:", profileErr.message);
      return { ok: true };
    }
    if (!profileData) {
      console.log("[sync] No profile row yet, keeping local state");
      return { ok: true };
    }

    // 2) Fetch stichwort_stats — on error or empty table return empty array
    let swData: StichwortStatRow[] = [];
    try {
      const { data, error: swErr } = await supabase
        .from("stichwort_stats")
        .select("*")
        .eq("user_id", userId);
      if (swErr) throw swErr;
      swData = Array.isArray(data) ? (data as StichwortStatRow[]) : [];
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.warn("[sync] Pull stichwort_stats failed, using empty list:", msg);
      swData = [];
    }

    // 3) Fetch fach_stats — on error return empty and continue
    let fachData: FachStatRow[] = [];
    try {
      const { data, error: fachErr } = await supabase
        .from("fach_stats")
        .select("*")
        .eq("user_id", userId);
      if (fachErr) throw fachErr;
      fachData = Array.isArray(data) ? (data as FachStatRow[]) : [];
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.warn("[sync] Pull fach_stats failed, using empty list:", msg);
      fachData = [];
    }

    // Only overwrite local if Supabase actually has data
    const remoteHasData =
      (profileData?.total_questions_answered ?? 0) > 0 || swData.length > 0;

    if (!remoteHasData) {
      console.log("[sync] No remote data found, keeping localStorage");
      return { ok: true };
    }

    const { useAdaptiveStore } = await import("@/store/adaptiveLearning");
    const localProfile = useAdaptiveStore.getState().profile;

    // Merge: take whichever has more questions answered (local or remote)
    const remoteTotal = profileData?.total_questions_answered ?? 0;
    const localTotal = localProfile.totalQuestionsAnswered;

    if (remoteTotal <= localTotal && localTotal > 0) {
      console.log("[sync] Local data is newer, pushing to Supabase instead");
      await pushStatsToSupabase(userId);
      return { ok: true };
    }

    // Build stichwortStats record
    const stichwortStats: Record<string, StichwortStat> = {};
    if (swData) {
      for (const row of swData) {
        const confidence = (row.confidence === "sicher" || row.confidence === "unsicher" ? row.confidence : "unbekannt") as StichwortStat["confidence"];
        stichwortStats[row.stichwort_id] = {
          totalAttempts: row.total_attempts,
          correctAttempts: row.correct_attempts,
          successRate: row.success_rate,
          lastPracticed: row.last_practiced,
          confidence,
          streak: row.streak,
          avgTimePerQuestion: row.avg_time_per_question ?? 0,
        };
      }
    }

    // Build fachStats record
    const defaultFachStat: FachStat = {
      overallSuccessRate: 0,
      weakTopics: [],
      strongTopics: [],
      recommendedDailyQuestions: 10,
    };
    const fachStats: Record<string, FachStat> = {
      biologie: { ...defaultFachStat, recommendedDailyQuestions: 15 },
      chemie: { ...defaultFachStat, recommendedDailyQuestions: 10 },
      physik: { ...defaultFachStat, recommendedDailyQuestions: 8 },
      mathematik: { ...defaultFachStat, recommendedDailyQuestions: 5 },
    };
    if (fachData) {
      for (const row of fachData) {
        fachStats[row.fach] = {
          overallSuccessRate: row.overall_success_rate,
          weakTopics: Array.isArray(row.weak_topics) ? row.weak_topics : [],
          strongTopics: Array.isArray(row.strong_topics) ? row.strong_topics : [],
          recommendedDailyQuestions: row.recommended_daily_questions ?? 10,
        };
      }
    }

    // Calculate daysUntilExam from exam_date
    let daysUntilExam = localProfile.daysUntilExam;
    if (profileData?.exam_date) {
      const examDate = new Date(profileData.exam_date);
      const now = new Date();
      daysUntilExam = Math.max(0, Math.ceil((examDate.getTime() - now.getTime()) / 86400000));
    }

    // Apply to zustand store
    useAdaptiveStore.setState({
      profile: {
        stichwortStats,
        fachStats,
        learningPhase: profileData?.learning_phase || localProfile.learningPhase,
        daysUntilExam,
        dailyChallengeStreak: profileData?.daily_challenge_streak ?? 0,
        lastDailyChallenge: profileData?.last_daily_challenge ?? null,
        totalQuestionsAnswered: remoteTotal,
        totalCorrect: profileData?.total_correct ?? 0,
      },
    });

    console.log("[sync] Pulled stats from Supabase:", {
      stichwortCount: Object.keys(stichwortStats).length,
      totalAnswered: remoteTotal,
    });
    return { ok: true };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[sync] Pull failed:", msg);
    return { ok: false, error: msg };
  } finally {
    useSyncStatus.getState().setSyncing(false);
  }
}

// ============================================================
// Auto-sync: call on login and periodically
// ============================================================

let syncInterval: ReturnType<typeof setInterval> | null = null;

export function startAutoSync(userId: string) {
  // Initial pull — fire-and-forget; never block or throw (pull returns { ok }, no throw)
  void pullStatsFromSupabase(userId).catch((err) => {
    console.warn("[sync] Initial pull failed (non-blocking):", err);
  });

  // Push every 2 minutes
  stopAutoSync();
  syncInterval = setInterval(() => {
    void pushStatsToSupabase(userId);
  }, 2 * 60 * 1000);

  // Push on page unload
  window.addEventListener("beforeunload", () => {
    pushStatsToSupabase(userId);
  });
}

export function stopAutoSync() {
  if (syncInterval) {
    clearInterval(syncInterval);
    syncInterval = null;
  }
}
