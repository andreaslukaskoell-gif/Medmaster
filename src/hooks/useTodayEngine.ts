/**
 * Hook für die Today Engine: liefert fällige Reviews, Schwächen und gebaute Tasks.
 */

import { useMemo } from "react";
import { useStore } from "@/store/useStore";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import {
  getDueReviews,
  getTopWeaknesses,
  errorEventsFromQuizResults,
  buildTodayTasks,
  countDueReviews,
  countWeaknessRecommendations,
  todayStr,
} from "@/lib/learning";

const EMPTY_RESULT = {
  dueCount: 0,
  weaknessCount: 0,
  newCount: 0,
  tasks: [] as ReturnType<typeof buildTodayTasks>,
  dueItems: [] as ReturnType<typeof getDueReviews>,
  topWeaknesses: [] as ReturnType<typeof getTopWeaknesses>,
};

// Stable defaults to avoid infinite re-render loops.
// Zustand uses Object.is for equality; `?? {}` creates a NEW reference every render
// if the original value is nullish, causing Zustand to think state changed → re-render → loop.
const EMPTY_OBJ = {} as Record<string, never>;
const EMPTY_ARR = [] as never[];

export function useTodayEngine() {
  const spacedRepetition = useStore((s) => s.spacedRepetition ?? EMPTY_OBJ);
  const userProgress = useStore((s) => s.userProgress ?? EMPTY_OBJ);
  const errorEvents = useStore((s) => s.errorEvents ?? EMPTY_ARR);
  const quizResults = useStore((s) => s.quizResults ?? EMPTY_ARR);
  const lastPath = useAdaptiveStore((s) => s.lastPath);
  const lastViewedKapitelId = useAdaptiveStore((s) => s.lastViewedKapitelId);
  const lastViewedUnterkapitelId = useAdaptiveStore((s) => s.lastViewedUnterkapitelId);

  const dueItems = useMemo(() => {
    try {
      return getDueReviews(spacedRepetition, userProgress, todayStr());
    } catch {
      return [];
    }
  }, [spacedRepetition, userProgress]);

  const allErrorEvents = useMemo(() => {
    try {
      const validResults = quizResults.filter((r) => r != null && typeof r === "object");
      const fromQuiz = errorEventsFromQuizResults(
        validResults.map((r) => ({
          answers: (r?.answers ?? []).map((a) => ({ questionId: a?.questionId ?? "", correct: a?.correct ?? false })),
          timestamp: r?.timestamp ?? r?.date ?? "",
        }))
      );
      return [...fromQuiz, ...errorEvents];
    } catch {
      return [];
    }
  }, [errorEvents, quizResults]);

  const topWeaknesses = useMemo(() => {
    try {
      return getTopWeaknesses(allErrorEvents, 20);
    } catch {
      return [];
    }
  }, [allErrorEvents]);

  const tasks = useMemo(() => {
    try {
      return buildTodayTasks({
        dueItems,
        topWeaknesses,
        lastViewedChapterId: lastViewedKapitelId,
        lastViewedUnterkapitelId,
        lastPath,
        today: todayStr(),
        maxTasks: 25,
      });
    } catch {
      return [];
    }
  }, [dueItems, topWeaknesses, lastViewedKapitelId, lastViewedUnterkapitelId, lastPath]);

  try {
    return {
      dueCount: countDueReviews(dueItems),
      weaknessCount: countWeaknessRecommendations(topWeaknesses),
      newCount: Math.max(0, tasks.filter((t) => t.reason === "continue").length),
      tasks,
      dueItems,
      topWeaknesses,
    };
  } catch {
    return EMPTY_RESULT;
  }
}
