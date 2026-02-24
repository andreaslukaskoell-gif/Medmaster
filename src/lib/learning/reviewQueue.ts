/**
 * Review-Queue: fällige SRS-Objekte aus dem bestehenden Store.
 * Nutzt spacedRepetition (Fragen) und userProgress (Kapitel).
 */

import type { SpacedItem } from "@/store/useStore";
import type { ChapterProgress } from "@/store/useStore";
import type { ProgressState } from "./types";
import { todayStr } from "./srs";

export type DueItem = {
  objectId: string;
  type: "question" | "chapter";
  nextDue: string;
  overdue: boolean;
  /** Für Sortierung: 0 = überfällig, 1 = heute */
  sortKey: number;
};

/** Fällige Fragen und Kapitel, sortiert: überfällig zuerst, dann nach nextDue. */
export function getDueReviews(
  spacedRepetition: Record<string, SpacedItem>,
  userProgress: Record<string, ChapterProgress>,
  now: string = todayStr()
): DueItem[] {
  const questionItems: DueItem[] = Object.entries(spacedRepetition)
    .filter(([, item]) => item.nextDue <= now)
    .map(([, item]) => ({
      objectId: item.questionId,
      type: "question" as const,
      nextDue: item.nextDue,
      overdue: item.nextDue < now,
      sortKey: item.nextDue < now ? 0 : 1,
    }));

  const chapterItems: DueItem[] = Object.entries(userProgress)
    .filter(([, p]) => p.nextReviewDate <= now)
    .map(([chapterId, p]) => ({
      objectId: chapterId,
      type: "chapter" as const,
      nextDue: p.nextReviewDate,
      overdue: p.nextReviewDate < now,
      sortKey: p.nextReviewDate < now ? 0 : 1,
    }));

  const all = [...questionItems, ...chapterItems];
  all.sort((a, b) => {
    if (a.sortKey !== b.sortKey) return a.sortKey - b.sortKey;
    return a.nextDue.localeCompare(b.nextDue);
  });
  return all;
}

/** Konvertiert SpacedItem → ProgressState (für scheduleNext). */
export function spacedItemToProgressState(item: SpacedItem): ProgressState {
  return {
    lastSeen: item.lastAnswered,
    nextDue: item.nextDue,
    ease: item.easeFactor,
    streakCorrect: 0,
    streakWrong: 0,
    difficulty: 0,
    repetitions: item.repetitions,
  };
}

/** Konvertiert ChapterProgress → ProgressState. */
export function chapterProgressToProgressState(
  chapterId: string,
  p: ChapterProgress
): ProgressState {
  return {
    lastSeen: p.lastReviewed,
    nextDue: p.nextReviewDate,
    ease: 2.5,
    streakCorrect: p.successCount,
    streakWrong: 0,
    difficulty: 0,
    repetitions: p.successCount,
  };
}
