/**
 * BMS Question Knowledge — types for content-derived questions.
 * All generated questions use ONLY these defined terms, facts, relations, numbers, contrasts.
 * No free-text guessing, no hallucination.
 */

export type BMSSubject = "biologie" | "chemie" | "physik" | "mathematik";

export type FactCategory =
  | "definition"
  | "mechanism"
  | "clinical"
  | "comparison"
  | "number"
  | "other";

export type BMSTerm = string;

export type BMSFact = {
  id: string;
  text: string;
  category?: FactCategory;
  /** Optional short explanation for the question explanation field */
  explanationHint?: string;
};

export type BMSRelation = {
  id: string;
  a: string;
  b: string;
  relation: string;
  /** e.g. "structure–function", "cause–effect", "location" */
  kind?: string;
};

export type BMSNumber = {
  id: string;
  label: string;
  value: string;
  unit?: string;
  context?: string;
};

export type BMSContrast = {
  id: string;
  topic: string;
  optionA: string;
  optionB: string;
  /** Which is "correct" in the sense of the curriculum (for distractor logic) */
  correctSide?: "A" | "B";
};

/** Geordnete Abfolge für Reihenfolge-Fragen (z. B. „In welcher Reihenfolge?“). */
export type BMSSequence = {
  id: string;
  /** Kurze Bezeichnung der Reihenfolge (z. B. „Phasen der Mitose“). */
  label: string;
  /** Korrekte Reihenfolge von vorne nach hinten. */
  orderedItems: string[];
  context?: string;
};

/** Rechenfrage: Fragentext + korrekter Wert + 4 plausible Falschwerte (immer 5 Optionen A–E). */
export type BMSRechenfrage = {
  id: string;
  /** Fragetext (z. B. „Eine 0,9 %ige NaCl-Lösung hat etwa welche Osmolalität?“). */
  text: string;
  correctValue: string;
  unit?: string;
  /** Genau 4 falsche Optionen (gleiche Einheit wie correctValue). */
  wrongValues: string[];
  explanationHint: string;
};

export type BMSKnowledge = {
  ukId: string;
  chapterId: string;
  subject: BMSSubject;
  title: string;
  terms: BMSTerm[];
  facts: BMSFact[];
  relations: BMSRelation[];
  numbers: BMSNumber[];
  contrasts: BMSContrast[];
  /** Learning objectives from the chapter (for learningObjective field) */
  learningObjectives?: string[];
  /** Plausible false statements for Typ K (Aussage-Kombination) and Negativ-Fragen */
  plausibleFalse?: { id: string; text: string }[];
  /** Reihenfolge-Fragen: „In welcher Reihenfolge …?“ */
  sequences?: BMSSequence[];
  /** Rechenfragen: genau 5 Optionen (1 korrekt + 4 wrongValues) */
  rechenfragen?: BMSRechenfrage[];
};

export type GeneratedBMSQuestion = {
  id: string;
  sourceChapter: string;
  sourceUk: string;
  learningObjective: string;
  text: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
  /** Template type used */
  templateType: string;
};

/** Typ K (Aussage-Kombination): 3–4 nummerierte Aussagen, Antwort A–E = Kombination „1. und 3. sind richtig“ etc. */
export type GeneratedTypKQuestion = {
  id: string;
  sourceChapter: string;
  sourceUk: string;
  learningObjective: string;
  /** Fragetext z. B. „Welche der folgenden Aussagen sind richtig?“ */
  text: string;
  /** Nummerierte Aussagen (1–4), jeweils korrekt: true/false */
  aussagen: { nr: number; text: string; korrekt: boolean }[];
  /** Antwortoptionen A–E: welche Aussagen-Nummern sind richtig */
  kombinationen: { key: string; nummern: number[] }[];
  /** Welche Option (A–E) ist korrekt */
  correctOptionId: string;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
  templateType: "kombination";
};
