import type { BMSKnowledge } from "../types";

const phKap1Uk01Knowledge: BMSKnowledge = {
  ukId: "ph-1-01",
  chapterId: "ph-kap1",
  subject: "physik",
  title: "Größen, Einheiten und SI-System",
  terms: [
    "SI-Basisgrößen",
    "Newton",
    "Pascal",
    "Joule",
    "Watt",
    "Skalar",
    "Vektor",
    "intensiv",
    "extensiv",
  ],
  facts: [
    {
      id: "f1",
      text: "Es gibt 7 SI-Basisgrößen: Länge (m), Masse (kg), Zeit (s), Stromstärke (A), Temperatur (K), Stoffmenge (mol), Lichtstärke (cd).",
      category: "definition",
      explanationHint: "Newton ist keine Basiseinheit, sondern abgeleitet.",
    },
    {
      id: "f2",
      text: "Kraft hat die Einheit Newton: N = kg·m/s²; Druck: Pa = N/m² = kg·m⁻¹·s⁻²; 1 mmHg ≈ 133 Pa.",
      category: "definition",
      explanationHint: "Blutdruck 120 mmHg ≈ 16 kPa.",
    },
    {
      id: "f3",
      text: "Energie/Arbeit: J = N·m. Leistung: W = J/s. Joule und Watt sind nicht ineinander umrechenbar (verschiedene Größen).",
      category: "comparison",
      explanationHint: "Watt = Leistung, Joule = Energie.",
    },
    {
      id: "f4",
      text: "Skalar = nur Betrag (Temperatur, Druck, Masse). Vektor = Betrag + Richtung (Kraft, Geschwindigkeit).",
      category: "definition",
      explanationHint: "Kraft und Geschwindigkeit haben Richtung; Temperatur und Masse nicht.",
    },
    {
      id: "f5",
      text: "Intensiv = unabhängig von der Menge (Temperatur, Konzentration). Extensiv = proportional zur Menge (Masse, Volumen).",
      category: "comparison",
      explanationHint: "2 × 20°C Wasser ≠ 40°C.",
    },
    {
      id: "f6",
      text: "Masse (kg) ist ortsunabhängig; Gewichtskraft F_G = m·g (in N), g ≈ 9,81 m/s².",
      category: "definition",
      explanationHint: "Körpergewicht 70 kg = Masse; Gewichtskraft ≈ 687 N.",
    },
  ],
  relations: [
    { id: "r1", a: "Newton", b: "kg·m·s⁻²", relation: "entspricht", kind: "definition" },
    { id: "r2", a: "Watt", b: "J/s", relation: "Leistung =", kind: "definition" },
  ],
  numbers: [
    { id: "n1", label: "Anzahl SI-Basisgrößen", value: "7", context: "LaMZAKMC" },
    { id: "n2", label: "1 mmHg in Pa", value: "≈ 133", unit: "Pa", context: "Blutdruck" },
  ],
  contrasts: [
    {
      id: "c1",
      topic: "Einheiten",
      optionA: "Joule kann in Watt umgerechnet werden.",
      optionB:
        "Joule (Energie) und Watt (Leistung) sind verschiedene Größen; keine direkte Umrechnung.",
      correctSide: "B",
    },
    {
      id: "c2",
      topic: "Größen",
      optionA: "Kraft wird in m/s² angegeben.",
      optionB: "Kraft wird in N = kg·m/s² angegeben.",
      correctSide: "B",
    },
  ],
  learningObjectives: [
    "7 SI-Basisgrößen nennen",
    "N, Pa, J, W auf Basiseinheiten zurückführen",
    "Skalar vs. Vektor, intensiv vs. extensiv unterscheiden",
  ],
};

const byUkId: Record<string, BMSKnowledge> = {
  [phKap1Uk01Knowledge.ukId]: phKap1Uk01Knowledge,
};

export function getKnowledgeByUkId(ukId: string): BMSKnowledge | undefined {
  return byUkId[ukId];
}

export function getAllPhysikUkIds(): string[] {
  return Object.keys(byUkId);
}
