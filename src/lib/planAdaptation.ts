/**
 * Selbstanpassung des Lernplans: basierend auf Tempo und Qualität der letzten Tage
 * wird die effektive Wochenstundenzahl leicht angepasst (mehr wenn schnell/gut, weniger wenn überfordert).
 */

const DAYS_LOOKBACK_GOAL = 7;
const DAYS_LOOKBACK_QUALITY = 14;
const MIN_DAYS_FOR_ADAPTATION = 3;
const FACTOR_MIN = 0.85;
const FACTOR_MAX = 1.2;

export type PlanAdaptationInput = {
  hoursPerWeek: number;
  goalAchievedByDate: Record<string, boolean>;
  quizResults: { timestamp?: string; score: number; total: number }[];
};

export type PlanAdaptationResult = {
  /** Effektive Stunden pro Woche (angepasst) */
  effectiveHoursPerWeek: number;
  /** Faktor, der angewendet wurde (1 = keine Änderung) */
  factor: number;
  /** Begründung für UI/Debug */
  reason: "schnell_und_gut" | "überfordert" | "stabil" | "zu_wenig_daten";
};

/**
 * Berechnet aus den letzten Tagen, ob der Nutzer schneller/guter oder überfordert ist,
 * und passt die Wochenstunden entsprechend an.
 */
export function getPlanAdaptation(input: PlanAdaptationInput): PlanAdaptationResult {
  const { hoursPerWeek, goalAchievedByDate, quizResults } = input;
  const today = new Date().toISOString().split("T")[0];

  const goalDates: string[] = [];
  for (let i = 0; i < DAYS_LOOKBACK_GOAL; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    goalDates.push(d.toISOString().split("T")[0]);
  }
  const achievedCount = goalDates.filter((d) => goalAchievedByDate[d]).length;
  const daysWithData = goalDates.filter((d) => goalAchievedByDate[d] !== undefined).length;

  if (daysWithData < MIN_DAYS_FOR_ADAPTATION) {
    return {
      effectiveHoursPerWeek: hoursPerWeek,
      factor: 1,
      reason: "zu_wenig_daten",
    };
  }

  const achievementRate = achievedCount / Math.max(1, daysWithData);

  const cutoff = new Date(today);
  cutoff.setDate(cutoff.getDate() - DAYS_LOOKBACK_QUALITY);
  const cutoffStr = cutoff.toISOString().split("T")[0];
  const recentResults = quizResults.filter(
    (r) => r.timestamp && r.timestamp >= cutoffStr && r.total > 0
  );
  const totalScore = recentResults.reduce((s, r) => s + r.score, 0);
  const totalQuestions = recentResults.reduce((s, r) => s + r.total, 0);
  const qualityRate = totalQuestions > 0 ? totalScore / totalQuestions : 0.8;

  let factor = 1;
  let reason: PlanAdaptationResult["reason"] = "stabil";

  if (achievementRate >= 0.8 && qualityRate >= 0.75) {
    factor = Math.min(FACTOR_MAX, 1 + (achievementRate - 0.8) * 0.5 + (qualityRate - 0.75) * 0.3);
    reason = "schnell_und_gut";
  } else if (achievementRate < 0.5 || qualityRate < 0.6) {
    factor = Math.max(FACTOR_MIN, 1 - 0.1 * (1 - achievementRate) - 0.05 * (1 - qualityRate));
    reason = "überfordert";
  }

  factor = Math.round(factor * 100) / 100;
  const effectiveHoursPerWeek = Math.max(
    1,
    Math.min(60, Math.round(hoursPerWeek * factor * 10) / 10)
  );

  return {
    effectiveHoursPerWeek,
    factor,
    reason,
  };
}
