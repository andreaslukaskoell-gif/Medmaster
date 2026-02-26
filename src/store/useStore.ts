import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { computeXP } from "@/lib/xp";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import type { ErrorEvent } from "@/lib/learning/types";

const STORAGE_KEY = "medmaster-storage";

/** Safe localStorage: bei korrupten Daten oder F5 bleibt initialer Zustand erhalten. */
function safeStorage() {
  return {
    getItem: (name: string): string | null => {
      try {
        if (typeof window === "undefined") return null;
        return window.localStorage.getItem(name);
      } catch {
        return null;
      }
    },
    setItem: (name: string, value: string): void => {
      try {
        if (typeof window === "undefined") return;
        window.localStorage.setItem(name, value);
      } catch {
        // QuotaExceeded oder Storage disabled
      }
    },
    removeItem: (name: string): void => {
      try {
        if (typeof window === "undefined") return;
        window.localStorage.removeItem(name);
      } catch {
        // ignore
      }
    },
  };
}

/** Migriert altes kffFailedTaskIds (string[]) zu kffFailedTasks (mit wrongCount/consecutiveCorrect). */
function sanitizeKffFailedTasks(
  newFormat: unknown,
  oldFormat: unknown
): Record<
  string,
  {
    taskIds: string[];
    wrongCount: Record<string, number>;
    consecutiveCorrect: Record<string, number>;
  }
> {
  if (newFormat && typeof newFormat === "object") {
    const out: Record<
      string,
      {
        taskIds: string[];
        wrongCount: Record<string, number>;
        consecutiveCorrect: Record<string, number>;
      }
    > = {};
    for (const [domain, val] of Object.entries(newFormat as Record<string, unknown>)) {
      if (val && typeof val === "object" && Array.isArray((val as { taskIds?: unknown }).taskIds)) {
        const v = val as {
          taskIds: string[];
          wrongCount?: Record<string, number>;
          consecutiveCorrect?: Record<string, number>;
        };
        out[domain] = {
          taskIds: Array.isArray(v.taskIds) ? v.taskIds : [],
          wrongCount: v.wrongCount && typeof v.wrongCount === "object" ? v.wrongCount : {},
          consecutiveCorrect:
            v.consecutiveCorrect && typeof v.consecutiveCorrect === "object"
              ? v.consecutiveCorrect
              : {},
        };
      }
    }
    return out;
  }
  if (oldFormat && typeof oldFormat === "object") {
    const out: Record<
      string,
      {
        taskIds: string[];
        wrongCount: Record<string, number>;
        consecutiveCorrect: Record<string, number>;
      }
    > = {};
    for (const [domain, ids] of Object.entries(oldFormat as Record<string, string[]>)) {
      if (Array.isArray(ids)) {
        const wrongCount: Record<string, number> = {};
        ids.forEach((id) => {
          wrongCount[id] = (wrongCount[id] ?? 0) + 1;
        });
        out[domain] = { taskIds: [...ids], wrongCount, consecutiveCorrect: {} };
      }
    }
    return out;
  }
  return {};
}

/** Sanitized persisted state: verhindert NaN/undefined/korrupte Typen nach Reload. */
function sanitizePersisted(state: unknown): Partial<AppState> {
  try {
    if (state == null || typeof state !== "object") return {};
  } catch {
    return {};
  }
  const s = state as Record<string, unknown>;
  try {
    return {
      xp: Number.isFinite(s.xp) ? (s.xp as number) : 0,
      streak: Number.isFinite(s.streak) ? (s.streak as number) : 0,
      lastActiveDate: typeof s.lastActiveDate === "string" ? s.lastActiveDate : "",
      darkMode: Boolean(s.darkMode),
      completedChapters: Array.isArray(s.completedChapters) ? s.completedChapters : [],
      quizResults: Array.isArray(s.quizResults) ? s.quizResults : [],
      currentAnswers:
        s.currentAnswers && typeof s.currentAnswers === "object"
          ? (s.currentAnswers as Record<string, string>)
          : {},
      spacedRepetition:
        s.spacedRepetition && typeof s.spacedRepetition === "object"
          ? (s.spacedRepetition as Record<string, SpacedItem>)
          : {},
      userProgress:
        s.userProgress && typeof s.userProgress === "object"
          ? (s.userProgress as Record<string, ChapterProgress>)
          : {},
      onboardingCompleted: Boolean(s.onboardingCompleted),
      hasCompletedMedATOnboarding: Boolean(s.hasCompletedMedATOnboarding),
      einstufungsResult:
        s.einstufungsResult != null &&
        typeof s.einstufungsResult === "object" &&
        "scores" in s.einstufungsResult &&
        "recommendations" in s.einstufungsResult &&
        "level" in s.einstufungsResult &&
        "completedAt" in s.einstufungsResult
          ? (s.einstufungsResult as EinstufungsResult)
          : null,
      lernplanConfig:
        s.lernplanConfig && typeof s.lernplanConfig === "object"
          ? (s.lernplanConfig as LernplanConfig | null)
          : null,
      notes: s.notes && typeof s.notes === "object" ? (s.notes as Record<string, string>) : {},
      bookmarks:
        s.bookmarks && typeof s.bookmarks === "object"
          ? (s.bookmarks as { chapters: string[]; questions: string[] })
          : { chapters: [], questions: [] },
      recentActivity: Array.isArray(s.recentActivity) ? s.recentActivity : [],
      activityLog:
        s.activityLog && typeof s.activityLog === "object"
          ? (s.activityLog as Record<string, { minutes: number; questions: number }>)
          : {},
      flaggedQuestions: Array.isArray(s.flaggedQuestions) ? s.flaggedQuestions : [],
      unlockedFachMilestones: Array.isArray(s.unlockedFachMilestones)
        ? s.unlockedFachMilestones
        : [],
      earnedBadges: Array.isArray(s.earnedBadges) ? s.earnedBadges : [],
      firstActivityTimeByDay:
        s.firstActivityTimeByDay && typeof s.firstActivityTimeByDay === "object"
          ? (s.firstActivityTimeByDay as Record<string, string>)
          : {},
      maxConsecutiveCorrectEver: Number.isFinite(s.maxConsecutiveCorrectEver)
        ? (s.maxConsecutiveCorrectEver as number)
        : 0,
      smartRecoveryCount: Number.isFinite(s.smartRecoveryCount)
        ? (s.smartRecoveryCount as number)
        : 0,
      goalAchievedByDate:
        s.goalAchievedByDate && typeof s.goalAchievedByDate === "object"
          ? (s.goalAchievedByDate as Record<string, boolean>)
          : {},
      smartAdjustDismissedUntil:
        typeof s.smartAdjustDismissedUntil === "string" ? s.smartAdjustDismissedUntil : "",
      lastActiveAt: typeof s.lastActiveAt === "string" ? s.lastActiveAt : "",
      errorEvents: Array.isArray(s.errorEvents) ? s.errorEvents : [],
      skillRating: Number.isFinite(s.skillRating)
        ? Math.max(0, Math.min(1000, s.skillRating as number))
        : 500,
      kffFailedTasks: sanitizeKffFailedTasks(s.kffFailedTasks, s.kffFailedTaskIds),
      kffDomainIntroSeen:
        s.kffDomainIntroSeen && typeof s.kffDomainIntroSeen === "object"
          ? (s.kffDomainIntroSeen as Record<string, boolean>)
          : {},
    };
  } catch {
    return {};
  }
}

export interface QuizResult {
  id: string;
  type: "bms" | "kff" | "tv" | "sek" | "simulation";
  subject?: string;
  score: number;
  total: number;
  date: string;
  timestamp?: string;
  answers: { questionId: string; selectedAnswer: string; correct: boolean }[];
}

export interface SpacedItem {
  questionId: string;
  lastAnswered: string;
  nextDue: string;
  interval: number;
  easeFactor: number;
  repetitions: number;
}

/** Leitner-SRS pro Kapitel: Stufe 1–5, nächste Wiederholung */
export interface ChapterProgress {
  lastReviewed: string;
  successCount: number;
  nextReviewDate: string;
}

export interface EinstufungsResult {
  scores: Record<string, { correct: number; total: number }>;
  recommendations: string[];
  level: string;
  completedAt: string;
}

export interface LernplanConfig {
  medatDate: string;
  hoursPerWeek: number;
  generatedAt: string;
  /** Optionale Eingaben: Tage pro Woche (3–7) und Stunden pro Lerntag */
  daysPerWeek?: number;
  hoursPerDay?: number;
}

export interface RecentItem {
  type: "chapter" | "quiz" | "kff" | "tv" | "sek";
  title: string;
  path: string;
  timestamp: string;
}

interface AppState {
  xp: number;
  streak: number;
  lastActiveDate: string;
  darkMode: boolean;
  completedChapters: string[];
  quizResults: QuizResult[];
  currentAnswers: Record<string, string>;
  spacedRepetition: Record<string, SpacedItem>;
  userProgress: Record<string, ChapterProgress>;
  onboardingCompleted: boolean;
  einstufungsResult: EinstufungsResult | null;
  lernplanConfig: LernplanConfig | null;
  notes: Record<string, string>;
  bookmarks: { chapters: string[]; questions: string[] };
  recentActivity: RecentItem[];
  activityLog: Record<string, { minutes: number; questions: number }>;
  flaggedQuestions: string[];
  /** Fach-IDs (z. B. "biologie") für die der 50%-Meilenstein bereits freigeschaltet wurde */
  unlockedFachMilestones: string[];
  /** XP-Multiplikator (z. B. 1.5 für Premium) – wird von Auth/App gesetzt */
  xpMultiplier: number;
  /** Badge-System */
  earnedBadges: string[];
  firstActivityTimeByDay: Record<string, string>;
  maxConsecutiveCorrectEver: number;
  smartRecoveryCount: number;
  /** Zeigt Badge-Unlock-Modal (wird von AppShell gelesen und zurückgesetzt) */
  pendingBadgeId: string | null;
  /** Tagesziel erreicht pro Datum (YYYY-MM-DD) – für Smart Adjust */
  goalAchievedByDate: Record<string, boolean>;
  /** Smart-Adjust-Dialog für 7 Tage unterdrückt bis zu diesem Datum (YYYY-MM-DD) */
  smartAdjustDismissedUntil: string;
  /** ISO timestamp der letzten Aktivität (für Streak-Protection) */
  lastActiveAt: string;
  /** Today Engine: Fehler-Events für Schwächen-Score */
  errorEvents: ErrorEvent[];
  logError: (objectId: string, objectType: ErrorEvent["objectType"], context?: string) => void;
  /** Premium subscription status (true = active subscription or beta access) */
  isPro: boolean;
  setIsPro: (value: boolean) => void;
  /** True nach Abschluss des MedAT-Onboardings (4 Info-Seiten). Vorher Redirect auf /onboarding/medat. */
  hasCompletedMedATOnboarding: boolean;
  setMedATOnboardingComplete: () => void;
  /** Skill-Rating 0–1000 für adaptives KFF/BMS-Training (Aufgabenauswahl aus Task-DB). */
  skillRating: number;
  setSkillRating: (updater: (prev: number) => number) => void;
  /** Pro Domain: falsch gelöste Tasks – wrongCount, nach 2× richtig entfernt. */
  kffFailedTasks: Record<
    string,
    {
      taskIds: string[];
      wrongCount: Record<string, number>;
      consecutiveCorrect: Record<string, number>;
    }
  >;
  addKffTaskFailed: (domain: string, taskId: string) => void;
  markKffTaskCorrect: (domain: string, taskId: string) => void;
  getKffFailedIdsForDomain: (domain: string) => string[];
  kffDomainIntroSeen: Record<string, boolean>;
  markKffDomainIntroSeen: (domain: string) => void;

  addXP: (amount: number) => void;
  /** XP aus Basis + Schwierigkeit + Zeit; Fallbacks wenn Daten fehlen. */
  addXPFromActivity: (params: {
    baseXP?: number;
    difficultyMultiplier?: number;
    timeSeconds?: number;
  }) => void;
  setXpMultiplier: (multiplier: number) => void;
  unlockFachMilestone: (fach: string) => void;
  recordFirstActivityOfDay: () => void;
  incrementSmartRecoveryCount: () => void;
  setMaxConsecutiveCorrect: (n: number) => void;
  /** Prüft alle Badges, vergibt neu verdiente, gibt neu verdientes Badge-ID zurück oder null */
  checkAndAwardBadges: () => Promise<string | null>;
  setPendingBadgeId: (id: string | null) => void;
  checkStreak: () => void;
  toggleDarkMode: () => void;
  completeChapter: (chapterId: string) => void;
  setAnswer: (questionId: string, answer: string) => void;
  clearAnswers: () => void;
  saveQuizResult: (result: QuizResult) => void;
  updateSpacedRepetition: (questionId: string, correct: boolean) => void;
  getDueQuestions: () => string[];
  updateChapterSRS: (chapterId: string, scorePct: number) => void;
  getDueChapterIds: () => string[];
  completeOnboarding: (result: EinstufungsResult | null) => void;
  setLernplanConfig: (config: LernplanConfig) => void;
  setNote: (chapterId: string, content: string) => void;
  toggleBookmarkChapter: (id: string) => void;
  toggleBookmarkQuestion: (id: string) => void;
  addRecentActivity: (item: RecentItem) => void;
  logActivity: (questions: number) => void;
  toggleFlagQuestion: (id: string) => void;
  setGoalAchievedToday: (date: string, achieved: boolean) => void;
  /** Smart Adjust für 7 Tage ausblenden; optional hoursPerWeek reduzieren */
  dismissSmartAdjust: (reducePlan?: boolean) => void;
  /** true wenn letzte Aktivität gestern war (Streak droht zu verfallen) */
  getStreakAtRisk: () => boolean;
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      xp: 0,
      streak: 0,
      lastActiveDate: "",
      darkMode: false,
      completedChapters: [],
      quizResults: [],
      currentAnswers: {},
      spacedRepetition: {},
      userProgress: {},
      onboardingCompleted: false,
      einstufungsResult: null,
      lernplanConfig: null,
      notes: {},
      bookmarks: { chapters: [], questions: [] },
      recentActivity: [],
      activityLog: {},
      flaggedQuestions: [],
      unlockedFachMilestones: [],
      xpMultiplier: 1,
      earnedBadges: [],
      firstActivityTimeByDay: {},
      maxConsecutiveCorrectEver: 0,
      smartRecoveryCount: 0,
      pendingBadgeId: null,
      goalAchievedByDate: {},
      smartAdjustDismissedUntil: "",
      lastActiveAt: "",
      errorEvents: [] as ErrorEvent[],
      isPro: false,
      hasCompletedMedATOnboarding: false,
      skillRating: 500,
      kffFailedTasks: {},
      kffDomainIntroSeen: {},

      logError: (objectId, objectType, context) =>
        set((s) => ({
          errorEvents: [
            ...s.errorEvents,
            {
              timestamp: new Date().toISOString(),
              objectId,
              objectType,
              context,
            },
          ].slice(-2000),
        })),

      setIsPro: (value) => set({ isPro: value }),
      setMedATOnboardingComplete: () => set({ hasCompletedMedATOnboarding: true }),
      setSkillRating: (updater) =>
        set((s) => {
          const next = Math.max(0, Math.min(1000, updater(s.skillRating ?? 500)));
          return { skillRating: next };
        }),
      addKffTaskFailed: (domain, taskId) =>
        set((s) => {
          const cur = s.kffFailedTasks[domain] ?? {
            taskIds: [],
            wrongCount: {} as Record<string, number>,
            consecutiveCorrect: {} as Record<string, number>,
          };
          if (cur.taskIds.includes(taskId)) {
            const wrongCount = { ...cur.wrongCount, [taskId]: (cur.wrongCount[taskId] ?? 0) + 1 };
            return {
              kffFailedTasks: {
                ...s.kffFailedTasks,
                [domain]: {
                  ...cur,
                  wrongCount,
                  consecutiveCorrect: { ...cur.consecutiveCorrect, [taskId]: 0 },
                },
              },
            };
          }
          const taskIds = [taskId, ...cur.taskIds].slice(0, 30);
          const wrongCount = { ...cur.wrongCount, [taskId]: (cur.wrongCount[taskId] ?? 0) + 1 };
          const consecutiveCorrect = { ...cur.consecutiveCorrect, [taskId]: 0 };
          return {
            kffFailedTasks: {
              ...s.kffFailedTasks,
              [domain]: { taskIds, wrongCount, consecutiveCorrect },
            },
          };
        }),
      markKffTaskCorrect: (domain, taskId) =>
        set((s) => {
          const cur = s.kffFailedTasks[domain];
          if (!cur || !cur.taskIds.includes(taskId)) return s;
          const nextConsec = (cur.consecutiveCorrect[taskId] ?? 0) + 1;
          if (nextConsec < 2) {
            return {
              kffFailedTasks: {
                ...s.kffFailedTasks,
                [domain]: {
                  ...cur,
                  consecutiveCorrect: { ...cur.consecutiveCorrect, [taskId]: nextConsec },
                },
              },
            };
          }
          const taskIds = cur.taskIds.filter((id) => id !== taskId);
          const wrongCount = { ...cur.wrongCount };
          delete wrongCount[taskId];
          const consecutiveCorrect = { ...cur.consecutiveCorrect };
          delete consecutiveCorrect[taskId];
          const nextTasks = { ...s.kffFailedTasks };
          if (taskIds.length === 0) delete nextTasks[domain];
          else nextTasks[domain] = { taskIds, wrongCount, consecutiveCorrect };
          return { kffFailedTasks: nextTasks };
        }),
      getKffFailedIdsForDomain: (domain) => {
        const cur = get().kffFailedTasks[domain];
        if (!cur?.taskIds.length) return [];
        return [...cur.taskIds].sort((a, b) => (cur.wrongCount[b] ?? 0) - (cur.wrongCount[a] ?? 0));
      },
      markKffDomainIntroSeen: (domain) =>
        set((s) => ({
          kffDomainIntroSeen: { ...s.kffDomainIntroSeen, [domain]: true },
        })),

      setPendingBadgeId: (id) => set({ pendingBadgeId: id }),

      setGoalAchievedToday: (date, achieved) =>
        set((s) => ({
          goalAchievedByDate: { ...s.goalAchievedByDate, [date]: achieved },
        })),

      dismissSmartAdjust: (reducePlan) => {
        const d = new Date();
        d.setDate(d.getDate() + 7);
        const until = d.toISOString().split("T")[0];
        set({ smartAdjustDismissedUntil: until });
        if (reducePlan && get().lernplanConfig) {
          const cfg = get().lernplanConfig!;
          set({
            lernplanConfig: {
              ...cfg,
              hoursPerWeek: Math.max(1, Math.round(cfg.hoursPerWeek * 0.9 * 10) / 10),
              generatedAt: new Date().toISOString(),
            },
          });
        }
      },

      recordFirstActivityOfDay: () => {
        const today = new Date().toISOString().split("T")[0];
        set((s) => {
          if (s.firstActivityTimeByDay[today]) return s;
          return {
            firstActivityTimeByDay: {
              ...s.firstActivityTimeByDay,
              [today]: new Date().toISOString(),
            },
          };
        });
        get()
          .checkAndAwardBadges()
          .then((newBadge) => {
            if (newBadge) set({ pendingBadgeId: newBadge });
          });
      },

      incrementSmartRecoveryCount: () => {
        set((s) => ({ smartRecoveryCount: s.smartRecoveryCount + 1 }));
        get()
          .checkAndAwardBadges()
          .then((newBadge) => {
            if (newBadge) set({ pendingBadgeId: newBadge });
          });
      },

      setMaxConsecutiveCorrect: (n) => {
        set((s) => ({ maxConsecutiveCorrectEver: Math.max(s.maxConsecutiveCorrectEver, n) }));
        if (n >= 20) {
          get()
            .checkAndAwardBadges()
            .then((newBadge) => {
              if (newBadge) set({ pendingBadgeId: newBadge });
            });
        }
      },

      checkAndAwardBadges: async () => {
        const state = get();
        const totalQuestions = (state.quizResults ?? []).reduce((s, r) => s + r.total, 0);
        const goalAchievedCount = Object.values(state.goalAchievedByDate ?? {}).filter(
          Boolean
        ).length;
        const quizResultsByType = (state.quizResults ?? []).reduce(
          (acc, r) => {
            if (r.type === "bms" || r.type === "simulation") acc.bms += 1;
            else if (r.type === "kff") acc.kff += 1;
            else if (r.type === "tv") acc.tv += 1;
            else if (r.type === "sek") acc.sek += 1;
            return acc;
          },
          { bms: 0, kff: 0, tv: 0, sek: 0 }
        );
        let dailyChallengeStreak = 0;
        try {
          const ad = useAdaptiveStore.getState();
          dailyChallengeStreak = ad?.profile?.dailyChallengeStreak ?? 0;
        } catch {
          // ignore
        }
        const badgeState = {
          completedChapters: state.completedChapters,
          maxConsecutiveCorrectEver: state.maxConsecutiveCorrectEver,
          smartRecoveryCount: state.smartRecoveryCount,
          firstActivityTimeByDay: state.firstActivityTimeByDay,
          streak: state.streak ?? 0,
          totalQuestions,
          goalAchievedCount,
          dailyChallengeStreak,
          quizResultsByType,
        };
        const [{ BADGE_DEFINITIONS, getBadgeProgress }, { alleKapitel }] = await Promise.all([
          import("@/data/badges"),
          import("@/data/bmsKapitel"),
        ]);
        for (const badge of BADGE_DEFINITIONS) {
          if (state.earnedBadges.includes(badge.id)) continue;
          const { earned } = getBadgeProgress(badge.id, badgeState, alleKapitel);
          if (earned) {
            set((s) => ({ earnedBadges: [...s.earnedBadges, badge.id] }));
            return badge.id;
          }
        }
        return null;
      },

      addXP: (amount) =>
        set((s) => {
          const safeAmount = Number.isFinite(amount) ? amount : 0;
          const mult = Number.isFinite(s.xpMultiplier) ? s.xpMultiplier : 1;
          return { xp: (s.xp ?? 0) + Math.round(safeAmount * mult) };
        }),

      addXPFromActivity: (params) => {
        try {
          const ad = useAdaptiveStore.getState();
          const difficulty = params.difficultyMultiplier ?? ad.getDifficultyMultiplier?.() ?? 1;
          const xp = computeXP({
            baseXP: params.baseXP ?? 10,
            difficultyMultiplier: difficulty,
            timeSeconds: params.timeSeconds,
          });
          get().addXP(xp);
        } catch {
          get().addXP(params.baseXP ?? 10);
        }
      },

      setXpMultiplier: (multiplier) => set({ xpMultiplier: multiplier }),

      unlockFachMilestone: (fach) =>
        set((s) =>
          s.unlockedFachMilestones.includes(fach)
            ? s
            : { unlockedFachMilestones: [...s.unlockedFachMilestones, fach] }
        ),

      checkStreak: () => {
        const now = new Date();
        const today = now.toISOString().split("T")[0];
        const state = get();
        if (state.lastActiveDate === today) return;
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split("T")[0];
        if (state.lastActiveDate === yesterdayStr) {
          set({
            streak: (state.streak ?? 0) + 1,
            lastActiveDate: today,
            lastActiveAt: now.toISOString(),
          });
          get().addXP(100);
        } else {
          set({ streak: 1, lastActiveDate: today, lastActiveAt: now.toISOString() });
        }
      },

      toggleDarkMode: () =>
        set((s) => {
          const newMode = !s.darkMode;
          if (newMode) {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
          return { darkMode: newMode };
        }),

      completeChapter: (chapterId) => {
        set((s) => ({
          completedChapters: s.completedChapters.includes(chapterId)
            ? s.completedChapters
            : [...s.completedChapters, chapterId],
        }));
        get()
          .checkAndAwardBadges()
          .then((newBadge) => {
            if (newBadge) set({ pendingBadgeId: newBadge });
          });
      },

      setAnswer: (questionId, answer) =>
        set((s) => ({
          currentAnswers: { ...s.currentAnswers, [questionId]: answer },
        })),

      clearAnswers: () => set({ currentAnswers: {} }),

      saveQuizResult: (result) =>
        set((s) => {
          const ts = result.timestamp || new Date().toISOString();
          const newResults = [...s.quizResults, { ...result, timestamp: ts }];
          const wrongAnswers =
            result.type === "bms" && Array.isArray(result.answers)
              ? result.answers.filter((a) => !a.correct)
              : [];
          const newErrorEvents: ErrorEvent[] =
            wrongAnswers.length > 0
              ? [
                  ...s.errorEvents,
                  ...wrongAnswers.map((a) => ({
                    timestamp: ts,
                    objectId: a.questionId,
                    objectType: "question" as const,
                    context: result.subject,
                  })),
                ].slice(-2000)
              : s.errorEvents;
          return {
            quizResults: newResults,
            ...(wrongAnswers.length > 0 ? { errorEvents: newErrorEvents } : {}),
          };
        }),

      updateSpacedRepetition: (questionId, correct) =>
        set((s) => {
          const existing = s.spacedRepetition[questionId];
          const now = new Date().toISOString().split("T")[0];
          let interval: number;
          let easeFactor: number;
          let repetitions: number;

          if (!existing) {
            interval = correct ? 1 : 0;
            easeFactor = 2.5;
            repetitions = correct ? 1 : 0;
          } else {
            easeFactor = existing.easeFactor + (correct ? 0.1 : -0.3);
            if (easeFactor < 1.3) easeFactor = 1.3;
            if (correct) {
              repetitions = existing.repetitions + 1;
              if (repetitions === 1) interval = 1;
              else if (repetitions === 2) interval = 3;
              else interval = Math.round(existing.interval * easeFactor);
              if (interval > 30) interval = 30;
            } else {
              repetitions = 0;
              interval = 1;
            }
          }

          const nextDue = new Date();
          nextDue.setDate(nextDue.getDate() + interval);

          return {
            spacedRepetition: {
              ...s.spacedRepetition,
              [questionId]: {
                questionId,
                lastAnswered: now,
                nextDue: nextDue.toISOString().split("T")[0],
                interval,
                easeFactor,
                repetitions,
              },
            },
          };
        }),

      getDueQuestions: () => {
        const today = new Date().toISOString().split("T")[0];
        return Object.values(get().spacedRepetition)
          .filter((item) => item.nextDue <= today)
          .map((item) => item.questionId);
      },

      updateChapterSRS: (chapterId, scorePct) =>
        set((s) => {
          const today = new Date().toISOString().split("T")[0];
          const existing = s.userProgress[chapterId];
          const currentLevel = existing?.successCount ?? 0;
          let nextLevel: number;
          let daysToAdd: number;
          if (scorePct >= 80) {
            nextLevel = Math.min(5, currentLevel + 1);
            const intervalByLevel = [0, 3, 7, 14, 21, 30];
            daysToAdd = intervalByLevel[nextLevel] ?? 30;
          } else if (scorePct < 50) {
            nextLevel = 1;
            daysToAdd = 1;
          } else {
            nextLevel = currentLevel;
            daysToAdd = currentLevel <= 0 ? 3 : ([0, 3, 7, 14, 21, 30][currentLevel] ?? 3);
          }
          const nextDate = new Date();
          nextDate.setDate(nextDate.getDate() + daysToAdd);
          const nextReviewDate = nextDate.toISOString().split("T")[0];
          return {
            userProgress: {
              ...s.userProgress,
              [chapterId]: {
                lastReviewed: today,
                successCount: nextLevel,
                nextReviewDate,
              },
            },
          };
        }),

      getDueChapterIds: () => {
        const today = new Date().toISOString().split("T")[0];
        return Object.entries(get().userProgress)
          .filter(([, p]) => p.nextReviewDate <= today)
          .map(([id]) => id);
      },

      completeOnboarding: (result) => set({ onboardingCompleted: true, einstufungsResult: result }),

      setLernplanConfig: (config) => set({ lernplanConfig: config }),

      setNote: (chapterId, content) =>
        set((s) => ({ notes: { ...s.notes, [chapterId]: content } })),

      toggleBookmarkChapter: (id) =>
        set((s) => ({
          bookmarks: {
            ...s.bookmarks,
            chapters: s.bookmarks.chapters.includes(id)
              ? s.bookmarks.chapters.filter((c) => c !== id)
              : [...s.bookmarks.chapters, id],
          },
        })),

      toggleBookmarkQuestion: (id) =>
        set((s) => ({
          bookmarks: {
            ...s.bookmarks,
            questions: s.bookmarks.questions.includes(id)
              ? s.bookmarks.questions.filter((q) => q !== id)
              : [...s.bookmarks.questions, id],
          },
        })),

      addRecentActivity: (item) =>
        set((s) => ({
          recentActivity: [item, ...s.recentActivity.filter((r) => r.path !== item.path)].slice(
            0,
            10
          ),
        })),

      logActivity: (questions) => {
        get().recordFirstActivityOfDay();
        const now = new Date();
        const today = now.toISOString().split("T")[0];
        set((s) => {
          const existing = s.activityLog[today] || { minutes: 0, questions: 0 };
          return {
            lastActiveDate: today,
            lastActiveAt: now.toISOString(),
            activityLog: {
              ...s.activityLog,
              [today]: {
                minutes: existing.minutes + 5,
                questions: existing.questions + questions,
              },
            },
          };
        });
      },

      toggleFlagQuestion: (id) =>
        set((s) => ({
          flaggedQuestions: s.flaggedQuestions.includes(id)
            ? s.flaggedQuestions.filter((q) => q !== id)
            : [...s.flaggedQuestions, id],
        })),

      getStreakAtRisk: () => {
        const today = new Date().toISOString().split("T")[0];
        const state = get();
        if (!state.lastActiveDate) return false;
        if (state.lastActiveDate === today) return false;
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split("T")[0];
        return state.lastActiveDate === yesterdayStr;
      },
    }),
    {
      name: STORAGE_KEY,
      partialize: (state) => {
        const { xpMultiplier: _xm, pendingBadgeId: _pid, ...rest } = state;
        void _xm;
        void _pid;
        return rest;
      },
      storage: createJSONStorage<Partial<AppState>>(() => ({
        getItem: (name: string): string | null => {
          const raw = safeStorage().getItem(name);
          if (raw == null) return null;
          try {
            JSON.parse(raw);
            return raw;
          } catch {
            return null;
          }
        },
        setItem: (name: string, value: string) => safeStorage().setItem(name, value),
        removeItem: (name: string) => safeStorage().removeItem(name),
      })),
      merge: (persisted, current) => {
        const next = { ...current, ...sanitizePersisted(persisted ?? undefined) };
        return next;
      },
    }
  )
);

// Hydration-Check: nach Reload (F5) Dark Mode anwenden; State ist bereits durch merge sanitized
useStore.persist.onFinishHydration((state) => {
  try {
    if (state?.darkMode) {
      document.documentElement.classList.add("dark");
    }
  } catch {
    // ignore
  }
});
