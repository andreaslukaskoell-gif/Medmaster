import { create } from "zustand";
import { persist } from "zustand/middleware";
import { alleStichworteListe, type Stichwort } from "@/data/stichwortliste";
import { allBmsQuestions, type Question } from "@/data/bms";
import { getDirectStichwortId } from "@/data/questions/index";

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

interface AdaptiveState {
  profile: LearnerProfile;

  // Actions
  recordAnswer: (stichwortId: string, correct: boolean, timeSeconds: number) => void;
  getRecommendation: () => DailyRecommendation;
  getAdaptiveQuestions: (count: number, fach?: string) => Question[];
  getWeakestTopics: (limit?: number) => { stichwortId: string; thema: string; fach: string; rate: number }[];
  getStrongestTopics: (limit?: number) => { stichwortId: string; thema: string; fach: string; rate: number }[];
  getMedATReadiness: () => number;
  getFachReadiness: (fach: string) => number;
  completeDailyChallenge: () => void;
  setLearningPhase: (phase: LearnerProfile["learningPhase"]) => void;
  setDaysUntilExam: (days: number) => void;
  initializeFromQuizResults: (results: { answers: { questionId: string; correct: boolean }[] }[]) => void;
}

// ============================================================
// Helper: Map question to stichwort
// ============================================================

function questionToStichwortId(q: Question): string | null {
  // Fast path: direct mapping for new Stichwort-Fragen
  const direct = getDirectStichwortId(q.id);
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
let questionStichwortMap: Map<string, string> | null = null;

function getQuestionStichwortMap(): Map<string, string> {
  if (questionStichwortMap === null) {
    questionStichwortMap = new Map<string, string>();
    for (const q of allBmsQuestions) {
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
            confidence = successRate >= 80 ? "sicher" : successRate >= 50 ? "unsicher" : "unbekannt";
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
            const overallSuccessRate = totalAnswered > 0 ? Math.round((totalCorrectFach / totalAnswered) * 100) : 0;

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
        const breakdown: Record<string, number> = { biologie: 0, chemie: 0, physik: 0, mathematik: 0 };
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

      getAdaptiveQuestions: (count, fach) => {
        const { profile } = get();
        const pool = fach
          ? allBmsQuestions.filter((q) => q.subject === fach)
          : [...allBmsQuestions];

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
          if (!stat || stat.totalAttempts === 0) {
            unseen.push(q);
          } else if (stat.successRate < 60) {
            weak.push(q);
          } else if (stat.successRate < 80) {
            medium.push(q);
          } else {
            strong.push(q);
          }
        }

        // Shuffle each bucket
        const shuffle = <T,>(arr: T[]) => {
          const a = [...arr];
          for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
          }
          return a;
        };

        // 40% weak, 30% medium, 20% strong, 10% unseen
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
            return { stichwortId: sw.id, thema: sw.thema, fach: sw.fach, rate, attempts: stat?.totalAttempts ?? 0 };
          })
          .filter((x) => x.attempts >= 1)
          .sort((a, b) => a.rate - b.rate)
          .slice(0, limit);
      },

      getStrongestTopics: (limit = 5) => {
        const { profile } = get();
        return alleStichworteListe
          .map((sw) => {
            const stat = profile.stichwortStats[sw.id];
            const rate = stat ? stat.successRate : 0;
            return { stichwortId: sw.id, thema: sw.thema, fach: sw.fach, rate, attempts: stat?.totalAttempts ?? 0 };
          })
          .filter((x) => x.attempts >= 3)
          .sort((a, b) => b.rate - a.rate)
          .slice(0, limit);
      },

      getMedATReadiness: () => {
        const { profile } = get();
        // Weighted average: Bio 40%, Chemie 24%, Physik 18%, Mathe 12%
        const weights: Record<string, number> = { biologie: 0.43, chemie: 0.26, physik: 0.19, mathematik: 0.12 };
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

      initializeFromQuizResults: (results) => {
        const { recordAnswer } = get();
        for (const r of results) {
          for (const a of r.answers) {
            const swId = getQuestionStichwortMap().get(a.questionId);
            if (swId) {
              recordAnswer(swId, a.correct, 30); // Default 30s per question
            }
          }
        }
      },
    }),
    {
      name: "medmaster-adaptive",
    }
  )
);
