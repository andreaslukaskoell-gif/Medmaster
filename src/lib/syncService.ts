import { supabase } from "./supabase";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import type { StichwortStat, FachStat } from "@/store/adaptiveLearning";

// ============================================================
// Push: localStorage → Supabase
// ============================================================

export async function pushStatsToSupabase(userId: string): Promise<{ ok: boolean; error?: string }> {
  try {
    const profile = useAdaptiveStore.getState().profile;

    // 1) Update user profile fields
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

    // 2) Upsert stichwort_stats
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
        updated_at: new Date().toISOString(),
      })
    );

    if (stichwortRows.length > 0) {
      // Batch in chunks of 200 to avoid payload limits
      for (let i = 0; i < stichwortRows.length; i += 200) {
        const chunk = stichwortRows.slice(i, i + 200);
        const { error: swErr } = await supabase
          .from("stichwort_stats")
          .upsert(chunk, { onConflict: "user_id,stichwort_id" });
        if (swErr) throw swErr;
      }
    }

    // 3) Upsert fach_stats
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
      const { error: fachErr } = await supabase
        .from("fach_stats")
        .upsert(fachRows, { onConflict: "user_id,fach" });
      if (fachErr) throw fachErr;
    }

    console.log("[sync] Pushed stats to Supabase:", {
      stichwortCount: stichwortRows.length,
      fachCount: fachRows.length,
    });
    return { ok: true };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[sync] Push failed:", msg);
    return { ok: false, error: msg };
  }
}

// ============================================================
// Pull: Supabase → localStorage
// ============================================================

export async function pullStatsFromSupabase(userId: string): Promise<{ ok: boolean; error?: string }> {
  try {
    // 1) Fetch profile fields
    const { data: profileData, error: profileErr } = await supabase
      .from("profiles")
      .select("learning_phase, exam_date, daily_challenge_streak, last_daily_challenge, total_questions_answered, total_correct")
      .eq("id", userId)
      .single();

    if (profileErr) throw profileErr;

    // 2) Fetch stichwort_stats
    const { data: swData, error: swErr } = await supabase
      .from("stichwort_stats")
      .select("*")
      .eq("user_id", userId);

    if (swErr) throw swErr;

    // 3) Fetch fach_stats
    const { data: fachData, error: fachErr } = await supabase
      .from("fach_stats")
      .select("*")
      .eq("user_id", userId);

    if (fachErr) throw fachErr;

    // Only overwrite local if Supabase actually has data
    const remoteHasData =
      (profileData?.total_questions_answered ?? 0) > 0 || (swData && swData.length > 0);

    if (!remoteHasData) {
      console.log("[sync] No remote data found, keeping localStorage");
      return { ok: true };
    }

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
        stichwortStats[row.stichwort_id] = {
          totalAttempts: row.total_attempts,
          correctAttempts: row.correct_attempts,
          successRate: row.success_rate,
          lastPracticed: row.last_practiced,
          confidence: row.confidence || "unbekannt",
          streak: row.streak,
          avgTimePerQuestion: row.avg_time_per_question,
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
  }
}

// ============================================================
// Auto-sync: call on login and periodically
// ============================================================

let syncInterval: ReturnType<typeof setInterval> | null = null;

export function startAutoSync(userId: string) {
  // Initial pull
  pullStatsFromSupabase(userId);

  // Push every 2 minutes
  stopAutoSync();
  syncInterval = setInterval(() => {
    pushStatsToSupabase(userId);
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
