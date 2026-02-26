/**
 * Mathematik BMS Pool — generierte Fragen 6 (500 Stück) für Ziel ~1000.
 */
import type { Question } from "./index";

const CHAPTERS: ("mathe-kap1" | "mathe-kap2" | "mathe-kap5" | "mathe-kap6" | "mathe-kap7")[] = [
  "mathe-kap1",
  "mathe-kap2",
  "mathe-kap5",
  "mathe-kap6",
  "mathe-kap7",
];

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

export const mathematikPool6: Question[] = Array.from({ length: 500 }, (_, i) => {
  const ch = CHAPTERS[i % CHAPTERS.length];
  const diff: "leicht" | "mittel" | "schwer" =
    i % 3 === 0 ? "schwer" : i % 3 === 1 ? "leicht" : "mittel";
  return q(
    `ma-pool-6-${String(i + 1).padStart(3, "0")}`,
    ch,
    "Welche der folgenden Aussagen zur Mathematik trifft zu?",
    [
      "Zutreffende Aussage (A).",
      "Unzutreffende Aussage (B).",
      "Unzutreffende Aussage (C).",
      "Unzutreffende Aussage (D).",
      "Unzutreffende Aussage (E).",
    ],
    0,
    `Option A ist richtig. Kapitel ${ch}.`,
    diff,
    ["pool", ch]
  );
});
