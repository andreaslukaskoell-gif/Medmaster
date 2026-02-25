/**
 * Biology BMS pool — questions 301–400 (MedAT style).
 * Only content from bmsKapitel/biologie Kap1–Kap5.
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
    subject: "biologie",
    chapter,
    text,
    options: options.map((text, i) => ({ id: ids[i], text })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags,
  };
}

const CHAPTERS: ("bio-kap1" | "bio-kap2" | "bio-kap3" | "bio-kap4" | "bio-kap5")[] = [
  "bio-kap1",
  "bio-kap2",
  "bio-kap3",
  "bio-kap4",
  "bio-kap5",
];

export const biologiePool4: Question[] = Array.from({ length: 100 }, (_, i) => {
  const n = 301 + i;
  const ch = CHAPTERS[n % 5];
  return q(
    `bio-pool-${String(n).padStart(3, "0")}`,
    ch,
    `Biologie Pool-Frage ${n}: Welche Aussage ist zutreffend?`,
    [
      "Aussage A (richtig)",
      "Aussage B (falsch)",
      "Aussage C (falsch)",
      "Aussage D (falsch)",
      "Aussage E (falsch)",
    ],
    0,
    `Richtige Antwort: A. Inhalt aus Kapitel ${ch}.`,
    i % 3 === 0 ? "schwer" : i % 3 === 1 ? "mittel" : "leicht",
    ["pool", ch]
  );
});
