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
import type { TodayEngineTask } from "@/lib/learning/types";

export function useTodayEngine() {
  const spacedRepetition = useStore((s) => s.spacedRepetition ?? {});
  const userProgress = useStore((s) => s.userProgress ?? {});
  const errorEvents = useStore((s) => s.errorEvents ?? []);
  const quizResults = useStore((s) => s.quizResults ?? []);
  const lastPath = useAdaptiveStore((s) => s.lastPath);
  const lastViewedKapitelId = useAdaptiveStore((s) => s.lastViewedKapitelId);
  const lastViewedUnterkapitelId = useAdaptiveStore((s) => s.lastViewedUnterkapitelId);

  const dueItems = useMemo(
    () => getDueReviews(spacedRepetition, userProgress, todayStr()),
    [spacedRepetition, userProgress]
  );

  const allErrorEvents = useMemo(() => {
    const fromQuiz = errorEventsFromQuizResults(
      quizResults.map((r) => ({
        answers: r.answers.map((a) => ({ questionId: a.questionId, correct: a.correct })),
        timestamp: r.timestamp ?? r.date,
      }))
    );
    return [...fromQuiz, ...errorEvents];
  }, [errorEvents, quizResults]);

  const topWeaknesses = useMemo(() => getTopWeaknesses(allErrorEvents, 20), [allErrorEvents]);

  const tasks = useMemo(
    () =>
      buildTodayTasks({
        dueItems,
        topWeaknesses,
        lastViewedChapterId: lastViewedKapitelId,
        lastViewedUnterkapitelId,
        lastPath,
        today: todayStr(),
        maxTasks: 25,
      }),
    [dueItems, topWeaknesses, lastViewedKapitelId, lastViewedUnterkapitelId, lastPath]
  );

  return {
    dueCount: countDueReviews(dueItems),
    weaknessCount: countWeaknessRecommendations(topWeaknesses),
    newCount: Math.max(0, tasks.filter((t) => t.reason === "continue").length),
    tasks,
    dueItems,
    topWeaknesses,
  };
}
