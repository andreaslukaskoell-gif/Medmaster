/**
 * Gemeinsame Prognose-Berechnung für Dashboard und Prognose-Seite.
 */

import type { QuizResult } from "@/store/useStore";

const MAX_TOTAL = 306;

const SECTION_META: { key: "bms" | "kff" | "tv" | "sek"; weight: number; maxPoints: number }[] = [
  { key: "bms", weight: 0.4, maxPoints: 122.4 },
  { key: "kff", weight: 0.4, maxPoints: 122.4 },
  { key: "tv", weight: 0.1, maxPoints: 30.6 },
  { key: "sek", weight: 0.1, maxPoints: 30.6 },
];

/** Exponential moving average — recent results weigh more */
function ema(results: QuizResult[], alpha = 0.3): number {
  if (results.length === 0) return 0;
  const sorted = [...results].sort(
    (a, b) =>
      new Date(a.date || a.timestamp || "").getTime() -
      new Date(b.date || b.timestamp || "").getTime()
  );
  let avg = sorted[0]!.score / sorted[0]!.total;
  for (let i = 1; i < sorted.length; i++) {
    const ratio = sorted[i]!.score / sorted[i]!.total;
    avg = alpha * ratio + (1 - alpha) * avg;
  }
  return avg * 100;
}

export interface PrognoseSummary {
  totalPct: number;
  totalScore: number;
  totalAnswered: number;
  hasEnoughData: boolean;
}

/**
 * Berechnet die gewichtete MedAT-Prognose aus Quiz-Ergebnissen.
 * hasEnoughData === true wenn totalAnswered >= 20 (wie auf der Prognose-Seite).
 */
export function getPrognoseSummary(quizResults: QuizResult[]): PrognoseSummary {
  const totalAnswered = quizResults.reduce((sum, r) => sum + r.total, 0);

  const sectionPts = SECTION_META.map((meta) => {
    const results = quizResults.filter((r) => r.type === meta.key);
    const pct = results.length > 0 ? ema(results) : 0;
    return (pct / 100) * meta.maxPoints;
  });

  const totalScore = sectionPts.reduce((s, p) => s + p, 0);
  const totalPct = (totalScore / MAX_TOTAL) * 100;

  return {
    totalPct,
    totalScore,
    totalAnswered,
    hasEnoughData: totalAnswered >= 20,
  };
}
