/**
 * Default BMS question templates (MedAT style).
 * Each template is used by the generator with BMSKnowledge to produce exactly 5 options (A–E), 1 correct.
 */
import type { BMSQuestionTemplate } from "./types";

export const BMS_QUESTION_TEMPLATES: BMSQuestionTemplate[] = [
  {
    id: "aussage_richtig",
    type: "aussage_richtig",
    stem: "Welche der folgenden Aussagen ist richtig?",
    requiredPool: "facts",
    minPoolSize: 5,
    preferredCategory: "definition",
    difficultyHint: 1,
  },
  {
    id: "aussage_richtig_mechanism",
    type: "aussage_richtig",
    stem: "Welche Aussage zu den beschriebenen Mechanismen ist korrekt?",
    requiredPool: "facts",
    minPoolSize: 5,
    preferredCategory: "mechanism",
    difficultyHint: 2,
  },
  {
    id: "aussage_falsch",
    type: "aussage_falsch",
    stem: "Welche der folgenden Aussagen ist falsch?",
    requiredPool: "facts",
    minPoolSize: 4,
    preferredCategory: "comparison",
    difficultyHint: 2,
  },
  {
    id: "reihenfolge",
    type: "reihenfolge",
    stem: "In welcher Reihenfolge treten die folgenden Schritte bzw. Phasen korrekt auf?",
    requiredPool: "sequences",
    minPoolSize: 1,
    difficultyHint: 2,
  },
  {
    id: "rechenfrage",
    type: "rechenfrage",
    stem: "", // stem comes from rechenfrage.text
    requiredPool: "rechenfragen",
    minPoolSize: 1,
    difficultyHint: 2,
  },
  {
    id: "definition",
    type: "definition",
    stem: "Was versteht man unter „{{term}}“?",
    requiredPool: "facts",
    minPoolSize: 5,
    preferredCategory: "definition",
    difficultyHint: 1,
  },
  {
    id: "groessenordnung",
    type: "groessenordnung",
    stem: "Welche Aussage zu Größenordnungen bzw. Zahlen ist korrekt?",
    requiredPool: "numbers",
    minPoolSize: 3,
    difficultyHint: 2,
  },
  {
    id: "gegenueberstellung",
    type: "gegenueberstellung",
    stem: "Welche Gegenüberstellung ist zutreffend?",
    requiredPool: "contrasts",
    minPoolSize: 3,
    difficultyHint: 2,
  },
  {
    id: "struktur_funktion",
    type: "struktur_funktion",
    stem: "Welche Zuordnung (Struktur/Funktion – Beschreibung) ist richtig?",
    requiredPool: "relations",
    minPoolSize: 4,
    difficultyHint: 2,
  },
  {
    id: "wo_statt",
    type: "wo_statt",
    stem: "Wo bzw. wobei spielt „{{term}}“ eine zentrale Rolle?",
    requiredPool: "relations",
    minPoolSize: 3,
    difficultyHint: 2,
  },
];
