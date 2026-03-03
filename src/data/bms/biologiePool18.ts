/**
 * Biologie BMS Pool 18 — 60 Fragen im offiziellen MedAT-Stil (Typ A + FALSCH).
 * Stoff: Kap1–Kap5.
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
    options: options.map((t, i) => ({ id: ids[i], text: t })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags,
  };
}

export const biologiePool18: Question[] = [
  q(
    "bio-pool-18-003",
    "bio-kap4",
    "Wie viele Tochterzellen entstehen bei der Meiose?",
    ["1", "2", "4", "8", "46"],
    2,
    "Meiose: 1 diploide Zelle → 4 haploide Tochterzellen.",
    "leicht",
    ["Meiose", "Genetik"]
  ),
  q(
    "bio-pool-18-052",
    "bio-kap1",
    "Welches Organell ist für die Spindelbildung wichtig?",
    [
      "Lysosom (Verdauungsorganell mit sauren Hydrolasen im Zytoplasma)",
      "Centrosom",
      "Peroxisom",
      "Golgi-Apparat (Zisternenstapel für posttranslationale Modifikation)",
      "Ribosom (rRNA-Protein-Komplex im Zytoplasma oder am rER)",
    ],
    1,
    "Centrosomen organisieren die Teilungsspindel.",
    "mittel",
    ["Zelle", "Zellteilung"]
  ),
];
