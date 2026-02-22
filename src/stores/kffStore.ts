import { create } from "zustand";
import { persist } from "zustand/middleware";
import type {
  KFFSubtestType,
  KFFResult,
  SimulationResult,
  SubtestProgress,
  WeaknessEntry,
} from "@/data/kffTypes";

interface KFFState {
  /** Fortschritt pro Untertest: richtig/gesamt */
  progress: Record<KFFSubtestType, SubtestProgress>;

  /** Letzte Übungsergebnisse (max. 50) */
  recentResults: KFFResult[];

  /** Schwachstellen-Tracking */
  weaknesses: WeaknessEntry[];

  /** Simulationsergebnisse mit Zeitstempeln */
  simulationResults: SimulationResult[];

  // --- Actions ---
  recordResult: (subtestType: KFFSubtestType, result: KFFResult) => void;
  recordSimulation: (result: SimulationResult) => void;
  getProgress: (subtestType: KFFSubtestType) => SubtestProgress;
  getWeakSubtests: () => WeaknessEntry[];
  resetProgress: (subtestType?: KFFSubtestType) => void;
}

const defaultProgress: SubtestProgress = {
  correct: 0,
  total: 0,
  lastPracticed: null,
};

const ALL_SUBTESTS: KFFSubtestType[] = [
  "implikationen",
  "zahlenfolgen",
  "wortflüssigkeit",
  "merkfähigkeit",
  "figuren",
  "emotionen-regulieren",
  "soziales-entscheiden",
  "emotionen-erkennen",
  "textverständnis",
];

function createDefaultProgress(): Record<KFFSubtestType, SubtestProgress> {
  const result = {} as Record<KFFSubtestType, SubtestProgress>;
  for (const subtest of ALL_SUBTESTS) {
    result[subtest] = { ...defaultProgress };
  }
  return result;
}

export const useKFFStore = create<KFFState>()(
  persist(
    (set, get) => ({
      progress: createDefaultProgress(),
      recentResults: [],
      weaknesses: [],
      simulationResults: [],

      recordResult: (subtestType, result) =>
        set((s) => {
          const prev = s.progress[subtestType] || { ...defaultProgress };
          const newProgress = {
            ...s.progress,
            [subtestType]: {
              correct: prev.correct + (result.correct ? 1 : 0),
              total: prev.total + 1,
              lastPracticed: result.date,
            },
          };

          // Update weaknesses
          const weaknesses = [...s.weaknesses];
          if (!result.correct) {
            const existing = weaknesses.find((w) => w.subtestType === subtestType);
            if (existing) {
              existing.errorCount += 1;
              existing.lastError = result.date;
            } else {
              weaknesses.push({
                subtestType,
                errorCount: 1,
                lastError: result.date,
              });
            }
          }

          return {
            progress: newProgress,
            recentResults: [result, ...s.recentResults].slice(0, 50),
            weaknesses,
          };
        }),

      recordSimulation: (result) =>
        set((s) => {
          // Also update progress from simulation details
          const prev = s.progress[result.subtestType] || { ...defaultProgress };
          const correctCount = result.details.filter((d) => d.correct).length;
          return {
            simulationResults: [result, ...s.simulationResults].slice(0, 100),
            progress: {
              ...s.progress,
              [result.subtestType]: {
                correct: prev.correct + correctCount,
                total: prev.total + result.details.length,
                lastPracticed: result.date,
              },
            },
          };
        }),

      getProgress: (subtestType) => {
        return get().progress[subtestType] || { ...defaultProgress };
      },

      getWeakSubtests: () => {
        return [...get().weaknesses].sort((a, b) => b.errorCount - a.errorCount);
      },

      resetProgress: (subtestType) =>
        set((s) => {
          if (subtestType) {
            return {
              progress: {
                ...s.progress,
                [subtestType]: { ...defaultProgress },
              },
            };
          }
          return {
            progress: createDefaultProgress(),
            recentResults: [],
            weaknesses: [],
            simulationResults: [],
          };
        }),
    }),
    {
      name: "medmaster-kff-storage",
    }
  )
);
