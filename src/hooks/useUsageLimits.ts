import { useMemo } from "react";
import { useStore } from "@/store/useStore";
import { usePermissions } from "./usePermissions";

/**
 * Tracks actual usage against starter limits.
 * Returns whether each feature's limit has been exceeded.
 */
export function useUsageLimits() {
  const { isPremium, getLimit } = usePermissions();
  const quizResults = useStore((s) => s.quizResults ?? []);

  return useMemo(() => {
    if (isPremium) {
      return {
        bmsQuestionsUsed: 0,
        bmsQuestionsLimit: null,
        bmsQuestionsExceeded: false,
        kffExercisesUsed: 0,
        kffExercisesLimit: null,
        kffExercisesExceeded: false,
        tvTextsUsed: 0,
        tvTextsLimit: null,
        tvTextsExceeded: false,
        sekSituationsUsed: 0,
        sekSituationsLimit: null,
        sekSituationsExceeded: false,
      };
    }

    const bmsTotal = quizResults.filter((r) => r.type === "bms").reduce((s, r) => s + r.total, 0);
    const kffTotal = quizResults.filter((r) => r.type === "kff").reduce((s, r) => s + r.total, 0);
    const tvTotal = quizResults.filter((r) => r.type === "tv").length;
    const sekTotal = quizResults.filter((r) => r.type === "sek").reduce((s, r) => s + r.total, 0);

    const bmsLimit = getLimit("bms_questions_per_subject");
    const kffLimit = getLimit("kff_exercises");
    const tvLimit = getLimit("tv_texts");
    const sekLimit = getLimit("sek_situations");

    return {
      bmsQuestionsUsed: bmsTotal,
      bmsQuestionsLimit: bmsLimit,
      bmsQuestionsExceeded: bmsLimit !== null && bmsTotal >= bmsLimit,
      kffExercisesUsed: kffTotal,
      kffExercisesLimit: kffLimit,
      kffExercisesExceeded: kffLimit !== null && kffTotal >= kffLimit,
      tvTextsUsed: tvTotal,
      tvTextsLimit: tvLimit,
      tvTextsExceeded: tvLimit !== null && tvTotal >= tvLimit,
      sekSituationsUsed: sekTotal,
      sekSituationsLimit: sekLimit,
      sekSituationsExceeded: sekLimit !== null && sekTotal >= sekLimit,
    };
  }, [isPremium, getLimit, quizResults]);
}
