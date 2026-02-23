import type { QuizResult } from "@/store/useStore";

/** Plan shape: nur weeklyPlan wird für das Tagesziel benötigt */
export interface PlanForDailyGoal {
  weeklyPlan: { module: string; minutesPerWeek: number }[];
}

export interface TodayTask {
  module: string;
  targetMinutes: number;
  doneMinutes: number;
  done: boolean;
}

/** Geschätzte Minuten pro Frage (für Zuordnung zu Modul-Zeit) */
const MINUTES_PER_QUESTION = 1.5;

export interface DailyGoalFromPlanResult {
  hasPlan: boolean;
  dailyMinutes: number;
  todayTasks: TodayTask[];
  /** 0–100: Anteil der geplanten Minuten, die heute erreicht wurden (Primary) */
  primaryProgressPct: number;
  /** true wenn alle Modul-Tagesziele (Primary) erfüllt sind */
  isPrimaryComplete: boolean;
  /** Anzahl Segmente (z. B. für Kreis-Markierungen) */
  totalSegments: number;
  completedSegments: number;
}

/**
 * Leitet aus dem Lernplan und heutigen Quiz-Ergebnissen das Tagesziel und
 * Primary-Fortschritt ab. Wird von Dashboard und Lernplan genutzt.
 */
export function getDailyGoalFromPlan(
  plan: PlanForDailyGoal | null,
  quizResults: QuizResult[],
  date: string
): DailyGoalFromPlanResult {
  if (!plan?.weeklyPlan?.length) {
    return {
      hasPlan: false,
      dailyMinutes: 0,
      todayTasks: [],
      primaryProgressPct: 0,
      isPrimaryComplete: false,
      totalSegments: 0,
      completedSegments: 0,
    };
  }

  const dayResults = quizResults.filter((r) => r.timestamp?.startsWith(date));
  const dailyMinutes = Math.round(plan.weeklyPlan.reduce((s, p) => s + p.minutesPerWeek, 0) / 7);

  const todayTasks: TodayTask[] = plan.weeklyPlan.map((item) => {
    const dailyMins = Math.round(item.minutesPerWeek / 7);
    const moduleResults = dayResults.filter((r) => (r.type || "").toUpperCase() === item.module);
    const moduleQuestions = moduleResults.reduce((s, r) => s + r.total, 0);
    const doneMinutes = Math.round(moduleQuestions * MINUTES_PER_QUESTION);
    return {
      module: item.module,
      targetMinutes: dailyMins,
      doneMinutes,
      done: doneMinutes >= dailyMins,
    };
  });

  const completedSegments = todayTasks.filter((t) => t.done).length;
  const totalSegments = todayTasks.length;
  const primaryMinutesDone = todayTasks.reduce(
    (sum, t) => sum + Math.min(t.doneMinutes, t.targetMinutes),
    0
  );
  const primaryProgressPct =
    dailyMinutes > 0 ? Math.min(100, Math.round((primaryMinutesDone / dailyMinutes) * 100)) : 0;
  const isPrimaryComplete = todayTasks.every((t) => t.done);

  return {
    hasPlan: true,
    dailyMinutes,
    todayTasks,
    primaryProgressPct,
    isPrimaryComplete,
    totalSegments,
    completedSegments,
  };
}

/** Zählt ab gestern rückwärts, wie viele Tage in Folge das Tagesziel verfehlt wurde */
export function getConsecutiveDaysGoalMissed(goalAchievedByDate: Record<string, boolean>): number {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  let count = 0;
  for (let i = 0; i < 14; i++) {
    const dateStr = d.toISOString().split("T")[0];
    if (goalAchievedByDate[dateStr]) break;
    count++;
    d.setDate(d.getDate() - 1);
  }
  return count;
}
