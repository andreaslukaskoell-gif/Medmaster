import { create } from "zustand";
import { persist } from "zustand/middleware";

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
  onboardingCompleted: boolean;
  einstufungsResult: EinstufungsResult | null;
  lernplanConfig: LernplanConfig | null;
  notes: Record<string, string>;
  bookmarks: { chapters: string[]; questions: string[] };
  recentActivity: RecentItem[];
  activityLog: Record<string, { minutes: number; questions: number }>;
  flaggedQuestions: string[];

  addXP: (amount: number) => void;
  checkStreak: () => void;
  toggleDarkMode: () => void;
  completeChapter: (chapterId: string) => void;
  setAnswer: (questionId: string, answer: string) => void;
  clearAnswers: () => void;
  saveQuizResult: (result: QuizResult) => void;
  updateSpacedRepetition: (questionId: string, correct: boolean) => void;
  getDueQuestions: () => string[];
  completeOnboarding: (result: EinstufungsResult | null) => void;
  setLernplanConfig: (config: LernplanConfig) => void;
  setNote: (chapterId: string, content: string) => void;
  toggleBookmarkChapter: (id: string) => void;
  toggleBookmarkQuestion: (id: string) => void;
  addRecentActivity: (item: RecentItem) => void;
  logActivity: (questions: number) => void;
  toggleFlagQuestion: (id: string) => void;
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
      onboardingCompleted: false,
      einstufungsResult: null,
      lernplanConfig: null,
      notes: {},
      bookmarks: { chapters: [], questions: [] },
      recentActivity: [],
      activityLog: {},
      flaggedQuestions: [],

      addXP: (amount) => set((s) => ({ xp: s.xp + amount })),

      checkStreak: () => {
        const today = new Date().toISOString().split("T")[0];
        const state = get();
        if (state.lastActiveDate === today) return;
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split("T")[0];
        if (state.lastActiveDate === yesterdayStr) {
          set({ streak: state.streak + 1, lastActiveDate: today });
        } else {
          set({ streak: 1, lastActiveDate: today });
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

      completeChapter: (chapterId) =>
        set((s) => ({
          completedChapters: s.completedChapters.includes(chapterId)
            ? s.completedChapters
            : [...s.completedChapters, chapterId],
        })),

      setAnswer: (questionId, answer) =>
        set((s) => ({
          currentAnswers: { ...s.currentAnswers, [questionId]: answer },
        })),

      clearAnswers: () => set({ currentAnswers: {} }),

      saveQuizResult: (result) =>
        set((s) => ({
          quizResults: [...s.quizResults, { ...result, timestamp: result.timestamp || new Date().toISOString() }],
        })),

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

      completeOnboarding: (result) =>
        set({ onboardingCompleted: true, einstufungsResult: result }),

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
          recentActivity: [item, ...s.recentActivity.filter((r) => r.path !== item.path)].slice(0, 10),
        })),

      logActivity: (questions) =>
        set((s) => {
          const today = new Date().toISOString().split("T")[0];
          const existing = s.activityLog[today] || { minutes: 0, questions: 0 };
          return {
            activityLog: {
              ...s.activityLog,
              [today]: {
                minutes: existing.minutes + 5,
                questions: existing.questions + questions,
              },
            },
          };
        }),

      toggleFlagQuestion: (id) =>
        set((s) => ({
          flaggedQuestions: s.flaggedQuestions.includes(id)
            ? s.flaggedQuestions.filter((q) => q !== id)
            : [...s.flaggedQuestions, id],
        })),
    }),
    {
      name: "medmaster-storage",
    }
  )
);

// Apply dark mode on rehydration
useStore.persist.onFinishHydration((state) => {
  if (state.darkMode) {
    document.documentElement.classList.add("dark");
  }
});
