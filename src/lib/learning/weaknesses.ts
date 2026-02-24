/**
 * Schwächen-Modell: ErrorEvents sammeln und zu WeaknessScore aggregieren.
 */

import type { ErrorEvent, LearningObjectType } from "./types";
import { todayStr } from "./srs";

export type WeaknessEntry = {
  objectId: string;
  objectType: LearningObjectType;
  score: number;
  errorCount: number;
};

const DECAY_DAYS = 30;

/** Berechnet Schwächen-Score: Häufigkeit × Aktualität (neuer = höher). */
function scoreFromEvents(events: ErrorEvent[]): number {
  const now = new Date();
  let score = 0;
  for (const e of events) {
    const t = new Date(e.timestamp);
    const daysAgo = (now.getTime() - t.getTime()) / (86400 * 1000);
    const recency = Math.max(0, 1 - daysAgo / DECAY_DAYS);
    score += 1 + recency;
  }
  return Math.round(score * 100) / 100;
}

/** Aggregiert ErrorEvents pro objectId und liefert Top N nach Score. */
export function getTopWeaknesses(errorEvents: ErrorEvent[], limit: number = 20): WeaknessEntry[] {
  const byId = new Map<string, ErrorEvent[]>();
  for (const e of errorEvents) {
    const list = byId.get(e.objectId) ?? [];
    list.push(e);
    byId.set(e.objectId, list);
  }
  const entries: WeaknessEntry[] = [];
  for (const [objectId, events] of byId) {
    const first = events[0];
    entries.push({
      objectId,
      objectType: first?.objectType ?? "question",
      score: scoreFromEvents(events),
      errorCount: events.length,
    });
  }
  entries.sort((a, b) => b.score - a.score);
  return entries.slice(0, limit);
}

/** Erzeugt ErrorEvents aus QuizResult-Antworten (falsch beantwortet). */
export function errorEventsFromQuizResults(
  results: { answers: { questionId: string; correct: boolean }[]; timestamp?: string }[]
): ErrorEvent[] {
  const events: ErrorEvent[] = [];
  for (const r of results) {
    const ts = r.timestamp ?? new Date().toISOString();
    for (const a of r.answers) {
      if (!a.correct) {
        events.push({
          timestamp: ts,
          objectId: a.questionId,
          objectType: "question",
          context: "quiz",
        });
      }
    }
  }
  return events;
}
