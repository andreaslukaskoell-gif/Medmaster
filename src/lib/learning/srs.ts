/**
 * SRS-Logik für die Today Engine.
 * quality 0–5: 0–2 = wiederholen, 3 = leicht verlängern, 4–5 = Intervall verlängern.
 */

import type { ProgressState } from "./types";

const MIN_EASE = 1.3;
const MAX_EASE = 3.5;
const BASE_INTERVAL_DAYS = 1;

export function scheduleNext(progress: ProgressState, quality: number): ProgressState {
  const now = new Date().toISOString().split("T")[0];
  let nextDue: string;
  let ease = Math.max(MIN_EASE, Math.min(MAX_EASE, progress.ease));
  let streakCorrect = progress.streakCorrect;
  let streakWrong = progress.streakWrong;
  let repetitions = progress.repetitions;
  let difficulty = progress.difficulty;

  if (quality >= 4) {
    streakCorrect += 1;
    streakWrong = 0;
    ease = Math.min(MAX_EASE, ease + 0.1);
    const interval =
      repetitions === 0 ? 1 : repetitions === 1 ? 3 : Math.round((repetitions + 1) * ease);
    const next = new Date(now);
    next.setDate(next.getDate() + Math.min(30, Math.max(1, interval)));
    nextDue = next.toISOString().split("T")[0];
    repetitions += 1;
  } else if (quality === 3) {
    streakCorrect += 1;
    streakWrong = 0;
    const next = new Date(now);
    next.setDate(next.getDate() + 2);
    nextDue = next.toISOString().split("T")[0];
    repetitions += 1;
  } else {
    streakWrong += 1;
    streakCorrect = 0;
    ease = Math.max(MIN_EASE, ease - 0.2);
    const next = new Date(now);
    next.setDate(next.getDate() + BASE_INTERVAL_DAYS);
    nextDue = next.toISOString().split("T")[0];
    repetitions = Math.max(0, repetitions - 1);
    difficulty = Math.min(3, difficulty + 1);
  }

  return {
    ...progress,
    lastSeen: now,
    nextDue,
    ease,
    streakCorrect,
    streakWrong,
    repetitions,
    difficulty,
  };
}

/** Liefert das Datum heute als YYYY-MM-DD. */
export function todayStr(): string {
  return new Date().toISOString().split("T")[0];
}
