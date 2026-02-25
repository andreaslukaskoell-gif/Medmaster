import type { BMSKnowledge } from "../types";

const maKap1Uk01Knowledge: BMSKnowledge = {
  ukId: "ma-1-01",
  chapterId: "ma-kap1",
  subject: "mathematik",
  title: "Zehnerpotenzen und Rechenregeln",
  terms: ["Zehnerpotenz", "Exponent", "Normalisierung", "Vorfaktor"],
  facts: [
    {
      id: "f1",
      text: "Bei Multiplikation von Zehnerpotenzen werden die Exponenten addiert: 10ᵃ × 10ᵇ = 10^(a+b).",
      category: "mechanism",
      explanationHint: "Vorfaktoren getrennt multiplizieren, dann normalisieren.",
    },
    {
      id: "f2",
      text: "Bei Division werden die Exponenten subtrahiert: 10ᵃ / 10ᵇ = 10^(a−b). Das Verhältnis zweier Größen ist 10^(Exponentendifferenz).",
      category: "mechanism",
      explanationHint:
        "Typische Falle: bei Multiplikation Exponenten addieren, nicht multiplizieren.",
    },
    {
      id: "f3",
      text: "10⁰ = 1. Negativer Exponent bedeutet Kehrbruch: 10⁻ⁿ = 1/10ⁿ (positiv, kleiner als 1).",
      category: "definition",
      explanationHint: "10⁻³ ≠ −10³.",
    },
    {
      id: "f4",
      text: "Normalisierte Form: Vorfaktor zwischen 1 und 10 (1 ≤ x < 10), z. B. 5,2 × 10³.",
      category: "definition",
      explanationHint: "Wissenschaftliche Notation.",
    },
    {
      id: "f5",
      text: "Erythrozytenzahl im Blut: ~5 × 10¹²/L; pH-Wert: eine Einheit weniger = zehnfache H⁺-Konzentration (log-Skala).",
      category: "clinical",
      explanationHint: "Größenordnungen klinisch.",
    },
    {
      id: "f6",
      text: "Bei Addition/Subtraktion von Zehnerpotenzen muss zuerst auf gleichen Exponenten gebracht werden; dann Vorfaktoren addieren.",
      category: "comparison",
      explanationHint: "Nicht Exponenten addieren.",
    },
  ],
  relations: [
    {
      id: "r1",
      a: "Exponentendifferenz",
      b: "Verhältnis (Faktor)",
      relation: "ergibt 10^",
      kind: "mechanism",
    },
  ],
  numbers: [
    { id: "n1", label: "10⁰", value: "1", context: "Neutrales Element" },
    { id: "n2", label: "Erythrozyten pro Liter", value: "~5 × 10¹²", unit: "/L", context: "Blut" },
  ],
  contrasts: [
    {
      id: "c1",
      topic: "Rechenregel",
      optionA: "10³ × 10⁴ = 10¹² (Exponenten multiplizieren).",
      optionB: "10³ × 10⁴ = 10⁷ (Exponenten addieren).",
      correctSide: "B",
    },
    {
      id: "c2",
      topic: "Negativer Exponent",
      optionA: "10⁻³ ist eine negative Zahl.",
      optionB: "10⁻³ = 1/10³ = 0,001 (positiv).",
      correctSide: "B",
    },
  ],
  learningObjectives: [
    "Zehnerpotenzen multiplizieren und dividieren",
    "Normalisierte Form anwenden",
    "Größenordnungen vergleichen",
  ],
};

const byUkId: Record<string, BMSKnowledge> = {
  [maKap1Uk01Knowledge.ukId]: maKap1Uk01Knowledge,
};

export function getKnowledgeByUkId(ukId: string): BMSKnowledge | undefined {
  return byUkId[ukId];
}

export function getAllMathematikUkIds(): string[] {
  return Object.keys(byUkId);
}
