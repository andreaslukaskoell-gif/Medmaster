import type { BMSKnowledge } from "../types";

const chKap1Uk01Knowledge: BMSKnowledge = {
  ukId: "ch-1-01",
  chapterId: "ch-kap1",
  subject: "chemie",
  title: "Atombau und Atommodelle",
  terms: ["Ordnungszahl Z", "Massenzahl A", "Isotop", "Rutherford", "Bohr", "Orbital"],
  facts: [
    {
      id: "f1",
      text: "Der Rutherford-Streuversuch (1911) zeigte: Positive Ladung und Masse sind in einem winzigen Kern konzentriert; das Atom ist fast vollständig leerer Raum.",
      category: "definition",
      explanationHint: "Goldfolie + Alphateilchen; wenige stark abgelenkt → Kern sehr klein.",
    },
    {
      id: "f2",
      text: "Ordnungszahl Z = Protonenzahl und definiert das Element; Massenzahl A = Z + N (Protonen + Neutronen).",
      category: "definition",
      explanationHint: "Nuklidnotation ᴬ_Z X.",
    },
    {
      id: "f3",
      text: "Isotope sind Atome gleichen Elements (gleiche Z) mit unterschiedlicher Neutronenzahl N; chemisch fast identisch, physikalisch verschieden.",
      category: "definition",
      explanationHint: "z. B. ¹²C, ¹³C, ¹⁴C.",
    },
    {
      id: "f4",
      text: "Im Bohr-Modell (1913) haben Elektronen feste Schalen; maximal 2n² Elektronen pro Schale (K=2, L=8, M=18, N=32); Übergänge erklären Spektrallinien.",
      category: "mechanism",
      explanationHint: "Quantenmechanik: Orbitale ersetzen Bahnen.",
    },
    {
      id: "f5",
      text: "Ein Orbital ist ein Aufenthaltswahrscheinlichkeitsraum für Elektronen; maximal 2 Elektronen pro Orbital; s, p, d, f haben unterschiedliche Formen.",
      category: "definition",
      explanationHint: "Orbital ≠ Bahn; 90 % Aufenthaltswahrscheinlichkeit.",
    },
    {
      id: "f6",
      text: "Alle Elemente mit Z > 83 (Bismut) sind ausschließlich radioaktiv.",
      category: "comparison",
      explanationHint: "Stabilitätsgürtel der Nuklide.",
    },
  ],
  relations: [
    { id: "r1", a: "Rutherford", b: "Kernmodell", relation: "begründete", kind: "definition" },
    { id: "r2", a: "Ordnungszahl Z", b: "Element", relation: "definiert", kind: "definition" },
  ],
  numbers: [
    {
      id: "n1",
      label: "Max. Elektronen pro Schale (Bohr)",
      value: "2n²",
      context: "K=2, L=8, M=18, N=32",
    },
    {
      id: "n2",
      label: "Kerndurchmesser / Atomdurchmesser",
      value: "~1 : 100 000",
      context: "Rutherford",
    },
  ],
  contrasts: [
    {
      id: "c1",
      topic: "Atommodelle",
      optionA: "Thomson: positive Kugel mit eingebetteten Elektronen (Rosinenmodell).",
      optionB: "Rutherford: winziger positiver Kern, Atom größtenteils leerer Raum.",
      correctSide: "B",
    },
    {
      id: "c2",
      topic: "Isotope",
      optionA: "Isotope haben verschiedene Ordnungszahlen Z.",
      optionB: "Isotope haben gleiche Z, verschiedene Neutronenzahl N.",
      correctSide: "B",
    },
  ],
  learningObjectives: [
    "Atommodelle Thomson, Rutherford, Bohr zuordnen",
    "Z, A, N und Isotope definieren",
    "Orbital vs. Bahn unterscheiden",
  ],
};

const byUkId: Record<string, BMSKnowledge> = {
  [chKap1Uk01Knowledge.ukId]: chKap1Uk01Knowledge,
};

export function getKnowledgeByUkId(ukId: string): BMSKnowledge | undefined {
  return byUkId[ukId];
}

export function getAllChemieUkIds(): string[] {
  return Object.keys(byUkId);
}
