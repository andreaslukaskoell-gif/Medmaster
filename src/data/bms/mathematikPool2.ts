/**
 * Mathematik-Pool Teil 2 — Fragen 101–200 (MedAT-Style, Single Choice).
 * Stoff: Zahlen & Einheiten, Algebra & Geometrie, Funktionen (bmsKapitel/mathematik).
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

const CHAPTERS = ["mathe-kap1", "mathe-kap2", "mathe-kap5"] as const;

export const mathematikPool2: Question[] = [
  q(
    "ma-pool-101",
    CHAPTERS[101 % 3],
    "10⁵ / 10² = ?",
    ["10³", "10⁷", "10¹⁰", "10⁵/²", "10²"],
    0,
    "Division: Exponenten subtrahieren. 5−2 = 3.",
    "leicht",
    ["Zehnerpotenzen"]
  ),
  q(
    "ma-pool-102",
    CHAPTERS[102 % 3],
    "Nullstelle von f(x) = 4x − 12?",
    ["x = 3", "x = −3", "x = 12", "x = 4", "x = 0"],
    0,
    "4x−12 = 0 ⇒ x = 3.",
    "leicht",
    ["lineare Funktion"]
  ),
  q(
    "ma-pool-103",
    CHAPTERS[103 % 3],
    "Kreisumfang bei r = 7?",
    ["7π", "14π", "49π", "14", "2π"],
    1,
    "U = 2πr = 14π.",
    "leicht",
    ["Kreis"]
  ),
  q(
    "ma-pool-104",
    CHAPTERS[104 % 3],
    "log₁₀(10) = ?",
    ["0", "1", "10", "2", "−1"],
    1,
    "10¹ = 10, also log₁₀(10) = 1.",
    "leicht",
    ["Logarithmus"]
  ),
  q(
    "ma-pool-105",
    CHAPTERS[105 % 3],
    "Satz des Pythagoras: a² + b² = ?",
    ["(a+b)²", "c²", "2ab", "c", "a·b"],
    1,
    "Im rechtwinkligen Dreieck: a²+b² = c².",
    "leicht",
    ["Pythagoras"]
  ),
  q(
    "ma-pool-106",
    CHAPTERS[106 % 3],
    "2,5 · 10³ in Dezimal?",
    ["2500", "250", "0,0025", "25", "25000"],
    0,
    "2,5·10³ = 2500.",
    "leicht",
    ["Zehnerpotenzen"]
  ),
  q(
    "ma-pool-107",
    CHAPTERS[107 % 3],
    "Gerade y = −x + 4: y-Achsenabschnitt?",
    ["−1", "4", "0", "−4", "1"],
    1,
    "y-Achsenabschnitt = f(0) = 4.",
    "leicht",
    ["lineare Funktion"]
  ),
  q(
    "ma-pool-108",
    CHAPTERS[108 % 3],
    "Rechteck 6×9: Fläche?",
    ["15", "30", "54", "54π", "18"],
    2,
    "A = 6·9 = 54.",
    "leicht",
    ["Rechteck"]
  ),
  q(
    "ma-pool-109",
    CHAPTERS[109 % 3],
    "Milli (m) = ?",
    ["10⁻²", "10⁻³", "10⁻⁶", "10³", "10⁻⁹"],
    1,
    "Milli = 10⁻³.",
    "leicht",
    ["SI-Präfixe"]
  ),
  q(
    "ma-pool-110",
    CHAPTERS[110 % 3],
    "x² = 25 ⇒ x = ?",
    ["5", "5 oder −5", "25", "−5", "0"],
    1,
    "x² = 25 ⇒ x = ±5.",
    "leicht",
    ["Quadratische Gleichung"]
  ),
];
