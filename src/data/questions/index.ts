// ============================================================
// Stichwort-Fragen Index — 1.000 Fragen mit direkter Stichwort-Zuordnung
// ============================================================

import { fragenPart1 as bioPart1 } from "./biologie_part1";
import { fragenPart2 as bioPart2 } from "./biologie_part2";
import { fragenPart3 as bioPart3 } from "./biologie_part3";
import { fragenPart4 as bioPart4 } from "./biologie_part4";
import { fragenPart5 as bioPart5 } from "./biologie_part5";
import { fragenPart6 as bioPart6 } from "./biologie_part6";
import { fragenPart7 as bioPart7 } from "./biologie_part7";
import { fragenPart8 as bioPart8 } from "./biologie_part8";

import { fragenPart1 as chPart1 } from "./chemie_part1";
import { fragenPart2 as chPart2 } from "./chemie_part2";
import { fragenPart3 as chPart3 } from "./chemie_part3";
import { fragenPart4 as chPart4 } from "./chemie_part4";
import { fragenPart5 as chPart5 } from "./chemie_part5";

import { fragenPart1 as maPart1 } from "./mathe_part1";
import { fragenPart2 as maPart2 } from "./mathe_part2";
import { fragenPart3 as maPart3 } from "./mathe_part3";

import { fragenPart1 as phPart1 } from "./physik_part1";
import { fragenPart2 as phPart2 } from "./physik_part2";
import { fragenPart3 as phPart3 } from "./physik_part3";
import { fragenPart4 as phPart4 } from "./physik_part4";

import type { Question } from "../bms/index";
import { alleStichworteListe } from "../stichworteData";

// ============================================================
// Interface
// ============================================================

export interface StichwortFrage {
  id: string;
  stichwortId: string;
  fach: "biologie" | "chemie" | "physik" | "mathematik";
  schwierigkeit: "leicht" | "mittel" | "schwer";
  fragetext: string;
  optionen: string[];
  korrekteAntwort: number; // 0-based index
  erklärung: string;
  strategieTipp: string;
}

// ============================================================
// Per-Subject Aggregation
// ============================================================

export const fragenBiologie: StichwortFrage[] = [
  ...bioPart1,
  ...bioPart2,
  ...bioPart3,
  ...bioPart4,
  ...bioPart5,
  ...bioPart6,
  ...bioPart7,
  ...bioPart8,
];

export const fragenChemie: StichwortFrage[] = [
  ...chPart1,
  ...chPart2,
  ...chPart3,
  ...chPart4,
  ...chPart5,
];

export const fragenMathematik: StichwortFrage[] = [...maPart1, ...maPart2, ...maPart3];

export const fragenPhysik: StichwortFrage[] = [...phPart1, ...phPart2, ...phPart3, ...phPart4];

export const alleStichwortFragen: StichwortFrage[] = [
  ...fragenBiologie,
  ...fragenChemie,
  ...fragenMathematik,
  ...fragenPhysik,
];

// ============================================================
// Adapter: StichwortFrage → Question (für bestehende Komponenten)
// ============================================================

const optionLetters = ["a", "b", "c", "d", "e"];

// Cache: stichwortId → Stichwort-Daten
const stichwortMap = new Map(alleStichworteListe.map((sw) => [sw.id, sw]));

export function convertToQuestion(frage: StichwortFrage): Question {
  const sw = stichwortMap.get(frage.stichwortId);
  return {
    id: frage.id,
    subject: frage.fach,
    chapter: sw?.kapitel ?? frage.stichwortId,
    topic: sw?.thema,
    text: frage.fragetext,
    options: frage.optionen.map((text, i) => ({
      id: optionLetters[i],
      text,
    })),
    correctOptionId: optionLetters[frage.korrekteAntwort],
    explanation: frage.erklärung,
    difficulty: frage.schwierigkeit,
    tags: sw?.linkedQuestionTags ?? [],
  };
}

// Alle Stichwort-Fragen im Question-Format (für Integration in allBmsQuestions)
export const alleStichwortFragenConverted: Question[] = alleStichwortFragen.map(convertToQuestion);

// ============================================================
// Direktes Mapping: questionId → stichwortId
// ============================================================

const questionStichwortDirectMap = new Map<string, string>(
  alleStichwortFragen.map((f) => [f.id, f.stichwortId])
);

export function getDirectStichwortId(questionId: string): string | undefined {
  return questionStichwortDirectMap.get(questionId);
}

// ============================================================
// Helper
// ============================================================

export function getStichwortFragenByFach(fach: string): StichwortFrage[] {
  return alleStichwortFragen.filter((f) => f.fach === fach);
}

export function getStichwortFragenByStichwort(stichwortId: string): StichwortFrage[] {
  return alleStichwortFragen.filter((f) => f.stichwortId === stichwortId);
}

// StrategieTipp lookup by question ID
const strategieTippMap = new Map<string, string>(
  alleStichwortFragen.map((f) => [f.id, f.strategieTipp])
);

export function getStrategieTipp(questionId: string): string | undefined {
  return strategieTippMap.get(questionId);
}
