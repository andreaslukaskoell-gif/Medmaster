/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Mathematik BMS Pool 12 — 60 Fragen im MedAT-Stil (Typ A).
 * Stoff: mathe-kap1, mathe-kap2, mathe-kap5, mathe-kap6, mathe-kap7.
 */
import type { Question } from "./index";

function q(
  id: string,
  chapter: string,
  text: string,
  options: [string, string, string, string, string],
  correctIndex: 0 | 1 | 2 | 3 | 4,
  explanation: string,
  difficulty: "leicht" | "mittel" | "schwer" = "mittel",
  tags: string[] = []
): Question {
  const ids = ["a", "b", "c", "d", "e"] as const;
  return {
    id,
    subject: "mathematik",
    chapter,
    text,
    options: options.map((t, i) => ({ id: ids[i], text: t })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags,
  };
}

const KAP = ["mathe-kap1", "mathe-kap2", "mathe-kap5", "mathe-kap6", "mathe-kap7"] as const;

export const mathematikPool12: Question[] = [];
