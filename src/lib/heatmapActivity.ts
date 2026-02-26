/**
 * Einheitliche Aktivitäts-Aggregation für die Heatmap:
 * BMS (Quiz + Stichworte), KFF, TV, SEK, Simulation.
 * Pro Tag: Summe beantworteter Fragen/Sessions + geübte Stichwort-Themen.
 */

import type { QuizResult } from "@/store/useStore";

function toDateKey(isoOrDate: string | undefined): string | null {
  if (!isoOrDate || typeof isoOrDate !== "string") return null;
  const part = isoOrDate.split("T")[0];
  return /^\d{4}-\d{2}-\d{2}$/.test(part) ? part : null;
}

/** Aktivität pro Tag aus Quiz-Ergebnissen (BMS, KFF, TV, SEK, Simulation). */
function activityFromQuizResults(quizResults: QuizResult[]): Record<string, number> {
  const byDay: Record<string, number> = {};
  for (const r of quizResults) {
    const key = toDateKey(r.date) ?? toDateKey(r.timestamp);
    if (!key) continue;
    byDay[key] = (byDay[key] ?? 0) + r.total;
  }
  return byDay;
}

/** Aktivität pro Tag aus activityLog (Fragen, falls kein QuizResult für den Tag). */
function activityFromActivityLog(
  activityLog: Record<string, { minutes: number; questions: number }>
): Record<string, number> {
  const byDay: Record<string, number> = {};
  for (const [key, val] of Object.entries(activityLog)) {
    if (/^\d{4}-\d{2}-\d{2}$/.test(key) && val?.questions != null) {
      byDay[key] = val.questions;
    }
  }
  return byDay;
}

/** Aktivität pro Tag aus Stichwort-Stats (Anzahl Stichworte, die an dem Tag geübt wurden). */
function activityFromStichwortStats(
  stichwortStats: Record<string, { lastPracticed: string | null }>
): Record<string, number> {
  const byDay: Record<string, number> = {};
  for (const stat of Object.values(stichwortStats)) {
    const dateStr = stat?.lastPracticed;
    if (!dateStr || typeof dateStr !== "string") continue;
    const day = dateStr.split("T")[0];
    if (!/^\d{4}-\d{2}-\d{2}$/.test(day)) continue;
    byDay[day] = (byDay[day] ?? 0) + 1;
  }
  return byDay;
}

export type HeatmapActivitySources = {
  quizResults: QuizResult[];
  activityLog: Record<string, { minutes: number; questions: number }>;
  stichwortStats: Record<string, { lastPracticed: string | null }>;
};

/**
 * Einheitliche Aktivitäts-Map pro Tag (YYYY-MM-DD).
 * - Quiz (BMS, KFF, TV, SEK, Simulation): Summe der beantworteten Fragen pro Tag.
 * - activityLog: wird nur genutzt, wenn für den Tag kein QuizResult existiert (kein Doppelzählen).
 * - Stichworte: Anzahl der an dem Tag geübten Stichworte addiert.
 */
export function buildUnifiedActivityMap(sources: HeatmapActivitySources): Record<string, number> {
  const fromQuiz = activityFromQuizResults(sources.quizResults);
  const fromLog = activityFromActivityLog(sources.activityLog);
  const fromStichwort = activityFromStichwortStats(sources.stichwortStats);

  const allDays = new Set([
    ...Object.keys(fromQuiz),
    ...Object.keys(fromLog),
    ...Object.keys(fromStichwort),
  ]);

  const result: Record<string, number> = {};
  for (const day of allDays) {
    const quiz = fromQuiz[day] ?? 0;
    const log = fromLog[day] ?? 0;
    const stichwort = fromStichwort[day] ?? 0;
    result[day] = quiz + (quiz === 0 ? log : 0) + stichwort;
  }
  return result;
}
