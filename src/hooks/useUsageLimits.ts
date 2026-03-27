import { useMemo } from "react";
import { useStore } from "@/store/useStore";
import { usePermissions } from "@/hooks/usePermissions";

/**
 * Counts usage per feature and checks against tier limits.
 * Returns whether each gated feature is exhausted.
 */
export function useUsageLimits() {
  const { permissions, isPremium, isFree, getLimit } = usePermissions();
  const quizResults = useStore((s) => s.quizResults) ?? [];

  return useMemo(() => {
    if (isPremium) {
      return {
        isPremium: true as const,
        isFree: false as const,
        bms: { used: 0, limit: null, exhausted: false },
        kff: { used: 0, limit: null, exhausted: false },
        tv: { used: 0, limit: null, exhausted: false },
        sek: { used: 0, limit: null, exhausted: false },
        simulations: { used: 0, limit: null, exhausted: false },

        schwachstellenLocked: false,
        srsLocked: false,
        lernplanLocked: false,
        analyticsLocked: false,
      };
    }

    // Count BMS questions answered (across all quiz results)
    const bmsUsed = quizResults
      .filter((r) => r.type === "bms")
      .reduce((sum, r) => sum + r.total, 0);

    // Count KFF exercises
    const kffUsed = quizResults
      .filter((r) => r.type === "kff")
      .reduce((sum, r) => sum + r.total, 0);

    // Count TV texts completed
    const tvUsed = quizResults.filter((r) => r.type === "tv").length;

    // Count SEK situations
    const sekUsed = quizResults
      .filter((r) => r.type === "sek")
      .reduce((sum, r) => sum + r.total, 0);

    // Count simulations
    const simUsed = quizResults.filter((r) => r.type === "simulation").length;

    const bmsLimit = getLimit("bms_questions");
    const kffLimit = getLimit("kff_exercises");
    const tvLimit = getLimit("tv_texts");
    const sekLimit = getLimit("sek_situations");
    const simLimit = getLimit("simulations");

    return {
      isPremium: false as const,
      isFree: true as const,
      bms: {
        used: bmsUsed,
        limit: bmsLimit,
        exhausted: bmsLimit !== null && bmsUsed >= bmsLimit,
      },
      kff: {
        used: kffUsed,
        limit: kffLimit,
        exhausted: kffLimit !== null && kffUsed >= kffLimit,
      },
      tv: {
        used: tvUsed,
        limit: tvLimit,
        exhausted: tvLimit !== null && tvUsed >= tvLimit,
      },
      sek: {
        used: sekUsed,
        limit: sekLimit,
        exhausted: sekLimit !== null && sekUsed >= sekLimit,
      },
      simulations: {
        used: simUsed,
        limit: simLimit,
        exhausted: simLimit !== null && simUsed >= simLimit,
      },

      schwachstellenLocked: permissions.weakness_analysis === false,
      srsLocked: permissions.spaced_repetition === false,
      lernplanLocked: permissions.lernplan === false,
      analyticsLocked: permissions.advanced_analytics === false,
    };
  }, [isPremium, quizResults, permissions, getLimit]);
}
