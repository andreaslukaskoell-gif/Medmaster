import { create } from "zustand";
import { getRandomSurpriseMessage } from "@/data/medatFunFacts";
import { useStore } from "@/store/useStore";

const HOT_STREAK_DURATION_MS = 4500;
const RANDOM_REWARD_CHANCE = 0.1; // 10 % Chance pro richtiger Antwort

interface QuizSessionState {
  /** Anzahl richtiger Antworten in Folge (wird bei falsch auf 0 gesetzt) */
  consecutiveCorrect: number;
  /** Hot-Streak-Overlay anzeigen (5 in Folge) */
  hotStreakActive: boolean;
  /** Aktuelle Überraschungs-Botschaft (null = nicht anzeigen) */
  rewardMessage: string | null;
  rewardType: "motivation" | "funfact" | null;

  /** Bei jeder Quiz-Antwort aufrufen; bei 5 richtigen in Folge wird Hot-Streak getriggert, mit 10 % Chance Random Reward */
  recordQuizAnswer: (correct: boolean) => void;
  clearHotStreak: () => void;
  clearReward: () => void;
}

export const useQuizSessionStore = create<QuizSessionState>((set, get) => ({
  consecutiveCorrect: 0,
  hotStreakActive: false,
  rewardMessage: null,
  rewardType: null,

  recordQuizAnswer: (correct: boolean) => {
    if (correct) {
      const next = get().consecutiveCorrect + 1;
      set({ consecutiveCorrect: next });

      useStore.getState().setMaxConsecutiveCorrect(next);

      // Hot Streak: 5 in Folge
      if (next >= 5) {
        set({ hotStreakActive: true });
        setTimeout(() => {
          get().clearHotStreak();
        }, HOT_STREAK_DURATION_MS);
      }

      // Random Reward: ~10 % Chance
      if (Math.random() < RANDOM_REWARD_CHANCE) {
        const msg = getRandomSurpriseMessage();
        set({ rewardMessage: msg.text, rewardType: msg.type });
      }
    } else {
      set({ consecutiveCorrect: 0 });
    }
  },

  clearHotStreak: () => set({ hotStreakActive: false }),

  clearReward: () => set({ rewardMessage: null, rewardType: null }),
}));
