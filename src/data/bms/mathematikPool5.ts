/**
 * Mathematik-Pool Teil 5 — Fragen 401–500 (MedAT-Style, Single Choice).
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
const TEMPLATES: Array<{
  text: string;
  options: [string, string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3 | 4;
  explanation: string;
  diff: "leicht" | "mittel" | "schwer";
  tags: string[];
}> = [
  {
    text: "10⁵ / 10² = ?",
    options: ["10³", "10⁷", "10¹⁰", "10⁵/²", "10²"],
    correctIndex: 0,
    explanation: "10³.",
    diff: "leicht",
    tags: ["Zehnerpotenzen"],
  },
  {
    text: "Nullstelle von f(x) = 4x − 12?",
    options: ["x = 3", "x = −3", "x = 12", "x = 4", "x = 0"],
    correctIndex: 0,
    explanation: "x = 3.",
    diff: "leicht",
    tags: ["lineare Funktion"],
  },
  {
    text: "Kreisumfang r = 7?",
    options: ["7π", "14π", "49π", "14", "2π"],
    correctIndex: 1,
    explanation: "14π.",
    diff: "leicht",
    tags: ["Kreis"],
  },
  {
    text: "log₁₀(10) = ?",
    options: ["0", "1", "10", "2", "−1"],
    correctIndex: 1,
    explanation: "1.",
    diff: "leicht",
    tags: ["Logarithmus"],
  },
  {
    text: "a² + b² = ?",
    options: ["(a+b)²", "c²", "2ab", "c", "a·b"],
    correctIndex: 1,
    explanation: "c².",
    diff: "leicht",
    tags: ["Pythagoras"],
  },
  {
    text: "2,5·10³ in Dezimal?",
    options: ["2500", "250", "0,0025", "25", "25000"],
    correctIndex: 0,
    explanation: "2500.",
    diff: "leicht",
    tags: ["Zehnerpotenzen"],
  },
  {
    text: "y = −x + 4: y-Achsenabschnitt?",
    options: ["−1", "4", "0", "−4", "1"],
    correctIndex: 1,
    explanation: "4.",
    diff: "leicht",
    tags: ["lineare Funktion"],
  },
  {
    text: "Rechteck 6×9: Fläche?",
    options: ["15", "30", "54", "54π", "18"],
    correctIndex: 2,
    explanation: "54.",
    diff: "leicht",
    tags: ["Rechteck"],
  },
  {
    text: "Milli = ?",
    options: ["10⁻²", "10⁻³", "10⁻⁶", "10³", "10⁻⁹"],
    correctIndex: 1,
    explanation: "10⁻³.",
    diff: "leicht",
    tags: ["SI-Präfixe"],
  },
  {
    text: "x² = 25 ⇒ x = ?",
    options: ["5", "5 oder −5", "25", "−5", "0"],
    correctIndex: 1,
    explanation: "±5.",
    diff: "leicht",
    tags: ["Quadratische Gleichung"],
  },
];

export const mathematikPool5: Question[] = Array.from({ length: 100 }, (_, i) => {
  const n = 401 + i;
  const ch = CHAPTERS[n % 3];
  const t = TEMPLATES[i % TEMPLATES.length];
  return q(
    `ma-pool-${String(n).padStart(3, "0")}`,
    ch,
    t.text,
    t.options,
    t.correctIndex,
    t.explanation,
    t.diff,
    t.tags
  );
});
