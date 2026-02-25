/**
 * BMS Question Templates — MedAT-style question types.
 * Templates define stem patterns and rules for correct + distractors; generator fills from BMSKnowledge.
 */

export type BMSQuestionTemplateType =
  | "aussage_richtig"
  | "aussage_falsch"
  | "struktur_funktion"
  | "kombination"
  | "groessenordnung"
  | "wo_statt"
  | "definition"
  | "gegenueberstellung"
  | "reihenfolge"
  | "rechenfrage";

export type BMSQuestionTemplate = {
  id: string;
  type: BMSQuestionTemplateType;
  /** Stem with placeholders, e.g. "Welche Aussage zu {{topic}} ist richtig?" */
  stem: string;
  /** Required knowledge: which pool must have enough items (e.g. "facts", "contrasts", "sequences", "rechenfragen") */
  requiredPool:
    | "facts"
    | "terms"
    | "relations"
    | "numbers"
    | "contrasts"
    | "sequences"
    | "rechenfragen";
  /** Minimum count in pool to use this template */
  minPoolSize: number;
  /** For "facts": prefer this category for correct answer */
  preferredCategory?: "definition" | "mechanism" | "clinical" | "comparison" | "number" | "other";
  /** Difficulty hint: 1 easy, 2 medium, 3 hard */
  difficultyHint: 1 | 2 | 3;
};
