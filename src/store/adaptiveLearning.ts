import { create } from "zustand";
import { persist } from "zustand/middleware";
import { alleStichworteListe } from "@/data/stichwortliste";
import type { Question } from "@/data/bms";
import { useStore } from "@/store/useStore";

// Lazy-load getDirectStichwortId to avoid pulling in 20 question part files
let _getDirectStichwortId: ((id: string) => string | undefined) | null = null;
export async function loadDirectStichwortId(): Promise<(id: string) => string | undefined> {
  if (!_getDirectStichwortId) {
    const mod = await import("@/data/questions/index");
    _getDirectStichwortId = mod.getDirectStichwortId;
  }
  return _getDirectStichwortId;
}
function getDirectStichwortIdSync(id: string): string | undefined {
  return _getDirectStichwortId?.(id);
}

// Lazy-load BMS questions to keep them out of the initial bundle
let _allBmsQuestions: Question[] | null = null;
let questionStichwortMap: Map<string, string> | null = null;

export async function loadBmsQuestions(): Promise<Question[]> {
  if (!_allBmsQuestions) {
    const { allBmsQuestions } = await import("@/data/bms");
    _allBmsQuestions = allBmsQuestions;
    // Invalidate cache so it rebuilds with actual questions
    questionStichwortMap = null;
  }
  return _allBmsQuestions;
}

function getBmsQuestionsSync(): Question[] {
  return _allBmsQuestions ?? [];
}

// Preload on idle so questions are ready when needed
if (typeof window !== "undefined") {
  const idle =
    typeof requestIdleCallback === "function"
      ? requestIdleCallback
      : (cb: () => void) => setTimeout(cb, 200);
  idle(() => {
    loadBmsQuestions();
    loadDirectStichwortId();
  });
}

// ============================================================
// Types
// ============================================================

export interface StichwortStat {
  totalAttempts: number;
  correctAttempts: number;
  successRate: number;
  lastPracticed: string | null;
  confidence: "sicher" | "unsicher" | "unbekannt";
  streak: number;
  avgTimePerQuestion: number;
}

export interface FachStat {
  overallSuccessRate: number;
  weakTopics: string[];
  strongTopics: string[];
  recommendedDailyQuestions: number;
}

export interface TimeToReadyResult {
  overallReadyDate: string | null;
  perFach: Record<string, { readiness: number; readyDate: string | null; daysNeeded: number }>;
  onTrack: boolean;
  weeklyHoursNeeded: number;
}

export interface DailyRecommendation {
  date: string;
  focusTopics: { stichwortId: string; thema: string; fach: string; successRate: number }[];
  totalQuestions: number;
  breakdown: Record<string, number>;
}

export interface LearnerProfile {
  stichwortStats: Record<string, StichwortStat>;
  fachStats: Record<string, FachStat>;
  learningPhase: "einstieg" | "vertiefung" | "pruefung";
  daysUntilExam: number;
  dailyChallengeStreak: number;
  lastDailyChallenge: string | null;
  totalQuestionsAnswered: number;
  totalCorrect: number;
}

export type TrendDirection = "up" | "stable" | "down";

export interface TrendData {
  direction: TrendDirection;
  delta: number;
  sparkline: number[];
}

export interface PerformanceTrend {
  overall: TrendData;
  perFach: Record<string, TrendData>;
}

const ADAPTIVE_FAST_SEC = 10;
const ADAPTIVE_SLOW_SEC = 60;
const ADAPTIVE_STREAK_LEN = 3;
const MAX_DIFFICULTY_LEVEL = 3;

interface AdaptiveState {
  profile: LearnerProfile;
  lastViewedUnterkapitelId: string | null;
  lastViewedKapitelId: string | null;
  resumeToUnterkapitelId: string | null;
  lastPath: string | null;

  /** Session: letzte Antworten für adaptive Schwierigkeit (nicht persistiert) */
  recentAnswers: { correct: boolean; timeSeconds: number }[];
  /** 1 = leicht, 2 = mittel, 3 = schwer; beeinflusst XP-Multiplikator */
  difficultyLevel: number;
  /** true wenn >60s oder falsch → Bridge (einfachere Erklärung) anbieten */
  offerBridge: boolean;

  setLastViewed: (kapitelId: string, unterkapitelId: string) => void;
  setResumeToUnterkapitelId: (id: string | null) => void;
  setLastPath: (path: string | null) => void;
  recordAnswer: (stichwortId: string, correct: boolean, timeSeconds: number) => void;
  getRecommendation: () => DailyRecommendation;
  getAdaptiveQuestions: (
    count: number,
    fach?: string,
    options?: { progressive?: boolean }
  ) => Question[];
  getWeakestTopics: (
    limit?: number
  ) => { stichwortId: string; thema: string; fach: string; rate: number }[];
  getStrongestTopics: (
    limit?: number
  ) => { stichwortId: string; thema: string; fach: string; rate: number }[];
  getMedATReadiness: () => number;
  getFachReadiness: (fach: string) => number;
  completeDailyChallenge: () => void;
  setLearningPhase: (phase: LearnerProfile["learningPhase"]) => void;
  setDaysUntilExam: (days: number) => void;
  initializeFromQuizResults: (
    results: { answers: { questionId: string; correct: boolean }[] }[]
  ) => void;
  getTimeToReady: () => TimeToReadyResult;
  getDifficultyMultiplier: () => number;
  getShouldOfferBridge: () => boolean;
  clearOfferBridge: () => void;
  getPerformanceTrend: () => PerformanceTrend;
}

// ============================================================
// Helper: Map question to stichwort
// ============================================================

function questionToStichwortId(q: Question): string | null {
  // Fast path: direct mapping for new Stichwort-Fragen
  const direct = getDirectStichwortIdSync(q.id);
  if (direct) return direct;

  // Fallback: tag matching for legacy questions
  for (const sw of alleStichworteListe) {
    if (sw.fach !== q.subject) continue;
    if (sw.linkedQuestionTags?.some((tag) => q.tags?.includes(tag))) {
      return sw.id;
    }
  }
  return null;
}

// Lazy-built cache to avoid running heavy loop at module load (breaks circular deps)

function getQuestionStichwortMap(): Map<string, string> {
  if (questionStichwortMap === null) {
    questionStichwortMap = new Map<string, string>();
    for (const q of getBmsQuestionsSync()) {
      const swId = questionToStichwortId(q);
      if (swId) questionStichwortMap.set(q.id, swId);
    }
  }
  return questionStichwortMap;
}

export function getStichwortForQuestion(questionId: string): string | null {
  return getQuestionStichwortMap().get(questionId) ?? null;
}

// ============================================================
// Store
// ============================================================

const defaultFachStat: FachStat = {
  overallSuccessRate: 0,
  weakTopics: [],
  strongTopics: [],
  recommendedDailyQuestions: 10,
};

export const useAdaptiveStore = create<AdaptiveState>()(
  persist(
    (set, get) => ({
      lastViewedUnterkapitelId: null,
      lastViewedKapitelId: null,
      resumeToUnterkapitelId: null,
      lastPath: null,
      recentAnswers: [],
      difficultyLevel: 1,
      offerBridge: false,

      setLastViewed: (kapitelId, unterkapitelId) =>
        set({ lastViewedKapitelId: kapitelId, lastViewedUnterkapitelId: unterkapitelId }),
      setResumeToUnterkapitelId: (id) => set({ resumeToUnterkapitelId: id }),
      setLastPath: (path) => set({ lastPath: path }),

      getDifficultyMultiplier: () => {
        const level = get().difficultyLevel ?? 1;
        return Math.min(MAX_DIFFICULTY_LEVEL, Math.max(1, level)) * 0.4 + 0.6;
      },
      getShouldOfferBridge: () => get().offerBridge === true,
      clearOfferBridge: () => set({ offerBridge: false }),

      profile: {
        stichwortStats: {},
        fachStats: {
          biologie: { ...defaultFachStat, recommendedDailyQuestions: 15 },
          chemie: { ...defaultFachStat, recommendedDailyQuestions: 10 },
          physik: { ...defaultFachStat, recommendedDailyQuestions: 8 },
          mathematik: { ...defaultFachStat, recommendedDailyQuestions: 5 },
        },
        learningPhase: "einstieg",
        daysUntilExam: 180,
        dailyChallengeStreak: 0,
        lastDailyChallenge: null,
        totalQuestionsAnswered: 0,
        totalCorrect: 0,
      },

      recordAnswer: (stichwortId, correct, timeSeconds) => {
        set((state) => {
          const recent = [...(state.recentAnswers ?? [])];
          recent.push({ correct, timeSeconds });
          if (recent.length > ADAPTIVE_STREAK_LEN) recent.shift();

          let newDifficulty = state.difficultyLevel ?? 1;
          let offerBridge = state.offerBridge;

          if (correct && timeSeconds < ADAPTIVE_FAST_SEC) {
            if (
              recent.length >= ADAPTIVE_STREAK_LEN &&
              recent.every((r) => r.correct && r.timeSeconds < ADAPTIVE_FAST_SEC)
            ) {
              newDifficulty = Math.min(MAX_DIFFICULTY_LEVEL, (state.difficultyLevel ?? 1) + 1);
              recent.length = 0;
            }
          } else {
            if (!correct || timeSeconds > ADAPTIVE_SLOW_SEC) offerBridge = true;
            recent.length = 0;
          }

          const stats = { ...state.profile.stichwortStats };
          const existing = stats[stichwortId] || {
            totalAttempts: 0,
            correctAttempts: 0,
            successRate: 0,
            lastPracticed: null,
            confidence: "unbekannt" as const,
            streak: 0,
            avgTimePerQuestion: 0,
          };

          const totalAttempts = existing.totalAttempts + 1;
          const correctAttempts = existing.correctAttempts + (correct ? 1 : 0);
          const successRate = Math.round((correctAttempts / totalAttempts) * 100);
          const streak = correct ? existing.streak + 1 : 0;
          const avgTimePerQuestion =
            (existing.avgTimePerQuestion * existing.totalAttempts + timeSeconds) / totalAttempts;

          let confidence: StichwortStat["confidence"] = "unbekannt";
          if (totalAttempts >= 3) {
            confidence =
              successRate >= 80 ? "sicher" : successRate >= 50 ? "unsicher" : "unbekannt";
          }

          stats[stichwortId] = {
            totalAttempts,
            correctAttempts,
            successRate,
            lastPracticed: new Date().toISOString().split("T")[0],
            confidence,
            streak,
            avgTimePerQuestion: Math.round(avgTimePerQuestion),
          };

          // Update fach stats
          const sw = alleStichworteListe.find((s) => s.id === stichwortId);
          const fachStats = { ...state.profile.fachStats };
          if (sw) {
            const fachStichworte = alleStichworteListe.filter((s) => s.fach === sw.fach);
            const fachData = fachStichworte.map((s) => stats[s.id]).filter(Boolean);
            const totalAnswered = fachData.reduce((sum, d) => sum + d.totalAttempts, 0);
            const totalCorrectFach = fachData.reduce((sum, d) => sum + d.correctAttempts, 0);
            const overallSuccessRate =
              totalAnswered > 0 ? Math.round((totalCorrectFach / totalAnswered) * 100) : 0;

            const weak = fachStichworte
              .filter((s) => {
                const st = stats[s.id];
                return st && st.totalAttempts >= 3 && st.successRate < 60;
              })
              .map((s) => s.id);

            const strong = fachStichworte
              .filter((s) => {
                const st = stats[s.id];
                return st && st.totalAttempts >= 3 && st.successRate >= 85;
              })
              .map((s) => s.id);

            fachStats[sw.fach] = {
              overallSuccessRate,
              weakTopics: weak,
              strongTopics: strong,
              recommendedDailyQuestions: fachStats[sw.fach]?.recommendedDailyQuestions ?? 10,
            };
          }

          return {
            recentAnswers: recent,
            difficultyLevel: newDifficulty,
            offerBridge,
            profile: {
              ...state.profile,
              stichwortStats: stats,
              fachStats,
              totalQuestionsAnswered: state.profile.totalQuestionsAnswered + 1,
              totalCorrect: state.profile.totalCorrect + (correct ? 1 : 0),
            },
          };
        });
      },

      getRecommendation: () => {
        const { profile } = get();
        const today = new Date().toISOString().split("T")[0];

        // Find weakest topics
        const weakest = get().getWeakestTopics(5);

        // Calculate per-fach breakdown
        const breakdown: Record<string, number> = {
          biologie: 0,
          chemie: 0,
          physik: 0,
          mathematik: 0,
        };
        let totalQ = 0;

        for (const [fach, fstat] of Object.entries(profile.fachStats)) {
          const count = fstat.recommendedDailyQuestions;
          breakdown[fach] = count;
          totalQ += count;
        }

        return {
          date: today,
          focusTopics: weakest.map((w) => ({
            stichwortId: w.stichwortId,
            thema: w.thema,
            fach: w.fach,
            successRate: w.rate,
          })),
          totalQuestions: totalQ,
          breakdown,
        };
      },

      getAdaptiveQuestions: (count, fach, options?: { progressive?: boolean }) => {
        const { profile } = get();
        const questions = getBmsQuestionsSync();
        const pool = fach ? questions.filter((q) => q.subject === fach) : [...questions];

        // Categorize questions
        const weak: Question[] = [];
        const medium: Question[] = [];
        const strong: Question[] = [];
        const unseen: Question[] = [];

        for (const q of pool) {
          const swId = getQuestionStichwortMap().get(q.id);
          if (!swId) {
            unseen.push(q);
            continue;
          }
          const stat = profile.stichwortStats[swId];
          // Erst nach 2+ Versuchen in weak/medium/strong einordnen
          if (!stat || stat.totalAttempts < 3) {
            unseen.push(q);
          } else if (stat.successRate < 60) {
            weak.push(q);
          } else if (stat.successRate < 80) {
            medium.push(q);
          } else {
            strong.push(q);
          }
        }

        const shuffle = <T>(arr: T[]) => {
          const a = [...arr];
          for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
          }
          return a;
        };

        const diffOrder = (d: Question["difficulty"]) =>
          d === "leicht" ? 0 : d === "mittel" ? 1 : 2;
        const sortUnseenByDifficulty = (arr: Question[]) =>
          [...arr].sort((a, b) => diffOrder(a.difficulty) - diffOrder(b.difficulty));

        if (options?.progressive) {
          // Sukzessive schwieriger: stark → medium → unseen (leicht zuerst) → weak
          const result: Question[] = [];
          result.push(...shuffle(strong));
          result.push(...shuffle(medium));
          result.push(...sortUnseenByDifficulty(unseen));
          result.push(...shuffle(weak));
          return result.slice(0, count);
        }

        // 40% weak, 30% medium, 20% strong, 10% unseen (mehr Wiederholung bei Schwächen)
        const result: Question[] = [];
        const weakCount = Math.ceil(count * 0.4);
        const mediumCount = Math.ceil(count * 0.3);
        const strongCount = Math.ceil(count * 0.2);
        const unseenCount = count - weakCount - mediumCount - strongCount;

        result.push(...shuffle(weak).slice(0, weakCount));
        result.push(...shuffle(medium).slice(0, mediumCount));
        result.push(...shuffle(strong).slice(0, strongCount));
        result.push(...shuffle(unseen).slice(0, unseenCount));

        // Fill remaining from any bucket
        while (result.length < count) {
          const remaining = pool.filter((q) => !result.includes(q));
          if (remaining.length === 0) break;
          result.push(remaining[Math.floor(Math.random() * remaining.length)]);
        }

        return shuffle(result).slice(0, count);
      },

      getWeakestTopics: (limit = 5) => {
        const { profile } = get();
        return alleStichworteListe
          .map((sw) => {
            const stat = profile.stichwortStats[sw.id];
            const rate = stat ? stat.successRate : -1;
            return {
              stichwortId: sw.id,
              thema: sw.thema,
              fach: sw.fach,
              rate,
              attempts: stat?.totalAttempts ?? 0,
            };
          })
          .filter((x) => x.attempts >= 3)
          .sort((a, b) => a.rate - b.rate)
          .slice(0, limit);
      },

      getStrongestTopics: (limit = 5) => {
        const { profile } = get();
        return alleStichworteListe
          .map((sw) => {
            const stat = profile.stichwortStats[sw.id];
            const rate = stat ? stat.successRate : 0;
            return {
              stichwortId: sw.id,
              thema: sw.thema,
              fach: sw.fach,
              rate,
              attempts: stat?.totalAttempts ?? 0,
            };
          })
          .filter((x) => x.attempts >= 3)
          .sort((a, b) => b.rate - a.rate)
          .slice(0, limit);
      },

      getMedATReadiness: () => {
        const { profile } = get();
        // Weighted average: Bio 40%, Chemie 24%, Physik 18%, Mathe 12%
        const weights: Record<string, number> = {
          biologie: 0.43,
          chemie: 0.26,
          physik: 0.19,
          mathematik: 0.12,
        };
        let readiness = 0;
        for (const [fach, weight] of Object.entries(weights)) {
          const stat = profile.fachStats[fach];
          if (stat) readiness += stat.overallSuccessRate * weight;
        }
        return Math.round(readiness);
      },

      getFachReadiness: (fach) => {
        const { profile } = get();
        return profile.fachStats[fach]?.overallSuccessRate ?? 0;
      },

      completeDailyChallenge: () => {
        set((state) => {
          const today = new Date().toISOString().split("T")[0];
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const yesterdayStr = yesterday.toISOString().split("T")[0];

          const streak =
            state.profile.lastDailyChallenge === yesterdayStr
              ? state.profile.dailyChallengeStreak + 1
              : 1;

          return {
            profile: {
              ...state.profile,
              dailyChallengeStreak: streak,
              lastDailyChallenge: today,
            },
          };
        });
      },

      setLearningPhase: (phase) => {
        set((state) => ({
          profile: { ...state.profile, learningPhase: phase },
        }));
      },

      setDaysUntilExam: (days) => {
        set((state) => ({
          profile: { ...state.profile, daysUntilExam: days },
        }));
      },

      getPerformanceTrend: () => {
        const quizResults = (useStore.getState().quizResults ?? []).filter(
          (r) => r != null && typeof r === "object"
        );
        const now = new Date();
        const days: string[] = [];
        for (let i = 13; i >= 0; i--) {
          const d = new Date(now);
          d.setDate(d.getDate() - i);
          days.push(d.toISOString().split("T")[0]);
        }

        const computeTrend = (
          results: { score: number; total: number; date: string }[]
        ): TrendData => {
          // Group by date
          const byDate = new Map<string, { totalScore: number; totalMax: number }>();
          for (const r of results) {
            const dateKey = r.date?.split("T")[0] ?? r.date;
            const entry = byDate.get(dateKey) ?? { totalScore: 0, totalMax: 0 };
            entry.totalScore += r.score;
            entry.totalMax += r.total;
            byDate.set(dateKey, entry);
          }

          // Build sparkline for the 14-day window
          const sparkline: number[] = days.map((day) => {
            const entry = byDate.get(day);
            if (!entry || entry.totalMax === 0) return 0;
            return Math.round((entry.totalScore / entry.totalMax) * 100);
          });

          // Compare last 7 days avg vs previous 7 days avg
          const prev7 = sparkline.slice(0, 7);
          const last7 = sparkline.slice(7, 14);

          const avg = (arr: number[]): number => {
            const nonZero = arr.filter((v) => v > 0);
            if (nonZero.length === 0) return 0;
            return nonZero.reduce((a, b) => a + b, 0) / nonZero.length;
          };

          const prev7Avg = avg(prev7);
          const last7Avg = avg(last7);
          const delta = Math.round((last7Avg - prev7Avg) * 10) / 10;

          let direction: TrendDirection = "stable";
          if (delta > 3) direction = "up";
          else if (delta < -3) direction = "down";

          return { direction, delta, sparkline };
        };

        // Filter to last 14 days only
        const cutoff = days[0];
        const recent = quizResults.filter((r) => {
          const dateKey = r.date?.split("T")[0] ?? r.date;
          return dateKey >= cutoff;
        });

        const overall = computeTrend(recent);

        // Per subject
        const subjects = new Set<string>();
        for (const r of recent) {
          if (r.subject) subjects.add(r.subject);
        }

        const perFach: Record<string, TrendData> = {};
        for (const fach of subjects) {
          perFach[fach] = computeTrend(recent.filter((r) => r.subject === fach));
        }

        return { overall, perFach };
      },

      initializeFromQuizResults: (results) => {
        // Count incoming answers
        let incomingTotal = 0;
        for (const r of results) incomingTotal += r.answers.length;

        // Skip if adaptive store already has >= this many answers (already hydrated)
        const currentTotal = get().profile.totalQuestionsAnswered;
        if (currentTotal >= incomingTotal) return;

        // Reset stats before replaying to avoid double-counting
        set((state) => ({
          profile: {
            ...state.profile,
            stichwortStats: {},
            totalQuestionsAnswered: 0,
            totalCorrect: 0,
            fachStats: {
              biologie: { ...defaultFachStat, recommendedDailyQuestions: 15 },
              chemie: { ...defaultFachStat, recommendedDailyQuestions: 10 },
              physik: { ...defaultFachStat, recommendedDailyQuestions: 8 },
              mathematik: { ...defaultFachStat, recommendedDailyQuestions: 5 },
            },
          },
        }));

        const { recordAnswer } = get();
        let totalAdded = 0;
        let correctAdded = 0;
        let mappedCount = 0;
        let mappedCorrect = 0;
        for (const r of results) {
          for (const a of r.answers) {
            totalAdded++;
            if (a.correct) correctAdded++;
            const swId = getQuestionStichwortMap().get(a.questionId);
            if (swId) {
              recordAnswer(swId, a.correct, 30);
              mappedCount++;
              if (a.correct) mappedCorrect++;
            }
          }
        }
        const unmappedTotal = totalAdded - mappedCount;
        const unmappedCorrect = correctAdded - mappedCorrect;
        if (unmappedTotal > 0) {
          set((state) => ({
            profile: {
              ...state.profile,
              totalQuestionsAnswered: state.profile.totalQuestionsAnswered + unmappedTotal,
              totalCorrect: state.profile.totalCorrect + unmappedCorrect,
            },
          }));
        }
      },

      getTimeToReady: (): TimeToReadyResult => {
        const TARGET_READINESS = 75;
        const TREND_WINDOW_DAYS = 14;
        const FAECHER = ["biologie", "chemie", "physik", "mathematik"];

        const today = new Date();
        const todayStr = today.toISOString().split("T")[0];

        // Access app store for quiz history and activity data
        const appState = useStore.getState();
        const quizResults = appState.quizResults ?? [];
        const activityLog = appState.activityLog ?? {};
        const examDateStr = appState.lernplanConfig?.medatDate ?? null;

        // Trend window
        const windowStart = new Date(today);
        windowStart.setDate(windowStart.getDate() - TREND_WINDOW_DAYS);
        const windowStartStr = windowStart.toISOString().split("T")[0];

        // Collect BMS results within window
        const bmsResults = quizResults
          .filter((r) => (r.type === "bms" || r.type === "simulation") && r.date >= windowStartStr)
          .sort((a, b) => a.date.localeCompare(b.date));

        // Build per-day, per-fach score maps
        type DayScore = { correct: number; total: number };
        const fachDailyScores: Record<string, Map<string, DayScore>> = {};
        const overallDailyScores = new Map<string, DayScore>();

        for (const fach of FAECHER) {
          fachDailyScores[fach] = new Map();
        }

        for (const r of bmsResults) {
          if (!r?.answers || !Array.isArray(r.answers)) continue;
          const day = r.date;
          const fach = r.subject ?? "";
          const correct = r.answers.filter((a) => a?.correct).length;
          const total = r.answers.length;

          const ov = overallDailyScores.get(day) ?? { correct: 0, total: 0 };
          ov.correct += correct;
          ov.total += total;
          overallDailyScores.set(day, ov);

          if (fachDailyScores[fach]) {
            const fv = fachDailyScores[fach]!.get(day) ?? { correct: 0, total: 0 };
            fv.correct += correct;
            fv.total += total;
            fachDailyScores[fach]!.set(day, fv);
          }
        }

        // Linear regression: slope = readiness % change per day
        function computeTrendPerDay(dailyScores: Map<string, DayScore>): number | null {
          const entries = [...dailyScores.entries()].sort(([a], [b]) => a.localeCompare(b));
          if (entries.length < 2) return null;

          const firstDate = new Date(entries[0]![0]);
          const points = entries.map(([dateStr, score]) => {
            const d = new Date(dateStr);
            const dayIndex = Math.round(
              (d.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24)
            );
            const rate = score.total > 0 ? (score.correct / score.total) * 100 : 0;
            return { x: dayIndex, y: rate };
          });

          const n = points.length;
          const sumX = points.reduce((s, p) => s + p.x, 0);
          const sumY = points.reduce((s, p) => s + p.y, 0);
          const sumXY = points.reduce((s, p) => s + p.x * p.y, 0);
          const sumX2 = points.reduce((s, p) => s + p.x * p.x, 0);
          const denom = n * sumX2 - sumX * sumX;
          if (denom === 0) return null;
          return (n * sumXY - sumX * sumY) / denom;
        }

        function extrapolateReadyDate(
          currentReadiness: number,
          trendPerDay: number | null
        ): { readyDate: string | null; daysNeeded: number } {
          if (currentReadiness >= TARGET_READINESS) {
            return { readyDate: todayStr, daysNeeded: 0 };
          }
          if (trendPerDay == null || trendPerDay <= 0) {
            return { readyDate: null, daysNeeded: Infinity };
          }
          const gap = TARGET_READINESS - currentReadiness;
          const daysNeeded = Math.ceil(gap / trendPerDay);
          const readyDate = new Date(today);
          readyDate.setDate(readyDate.getDate() + daysNeeded);
          return { readyDate: readyDate.toISOString().split("T")[0], daysNeeded };
        }

        // Overall readiness + extrapolation
        const overallReadiness = get().getMedATReadiness();
        const overallTrend = computeTrendPerDay(overallDailyScores);
        const overall = extrapolateReadyDate(overallReadiness, overallTrend);

        // Per fach
        const perFach: TimeToReadyResult["perFach"] = {};
        for (const fach of FAECHER) {
          const readiness = get().getFachReadiness(fach);
          const trend = computeTrendPerDay(fachDailyScores[fach]!);
          const result = extrapolateReadyDate(readiness, trend);
          perFach[fach] = {
            readiness,
            readyDate: result.readyDate,
            daysNeeded: Number.isFinite(result.daysNeeded) ? result.daysNeeded : -1,
          };
        }

        // onTrack: predicted ready date before exam date
        let onTrack = false;
        if (overall.readyDate && examDateStr) {
          onTrack = overall.readyDate <= examDateStr;
        } else if (overall.readyDate && !examDateStr) {
          onTrack = true;
        }

        // weeklyHoursNeeded from last 14 days of activity, scaled if behind schedule
        let totalMinutesLast14 = 0;
        for (let i = 0; i < TREND_WINDOW_DAYS; i++) {
          const d = new Date(today);
          d.setDate(d.getDate() - i);
          const key = d.toISOString().split("T")[0];
          totalMinutesLast14 += activityLog[key]?.minutes ?? 0;
        }
        const currentHoursPerWeek = ((totalMinutesLast14 / TREND_WINDOW_DAYS) * 7) / 60;

        let weeklyHoursNeeded = currentHoursPerWeek;
        if (
          overallReadiness < TARGET_READINESS &&
          overall.daysNeeded > 0 &&
          Number.isFinite(overall.daysNeeded) &&
          examDateStr
        ) {
          const examDate = new Date(examDateStr);
          const daysUntilExam = Math.max(
            1,
            Math.round((examDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
          );
          if (overall.daysNeeded > daysUntilExam && currentHoursPerWeek > 0) {
            weeklyHoursNeeded = currentHoursPerWeek * (overall.daysNeeded / daysUntilExam);
          }
        }

        return {
          overallReadyDate: overall.readyDate,
          perFach,
          onTrack,
          weeklyHoursNeeded: Math.round(weeklyHoursNeeded * 10) / 10,
        };
      },
    }),
    {
      name: "medmaster-adaptive",
      partialize: (state) => ({
        profile: state.profile,
        lastViewedUnterkapitelId: state.lastViewedUnterkapitelId,
        lastViewedKapitelId: state.lastViewedKapitelId,
        resumeToUnterkapitelId: state.resumeToUnterkapitelId,
        lastPath: state.lastPath,
        difficultyLevel: state.difficultyLevel,
      }),
      merge: (persisted, current) => {
        const p = persisted as Record<string, unknown> | undefined;
        if (!p) return current;
        return {
          ...current,
          ...p,
          // Deep-merge profile so missing keys fall back to defaults
          profile: { ...current.profile, ...(p.profile as Record<string, unknown> ?? {}) },
        };
      },
    }
  )
);
