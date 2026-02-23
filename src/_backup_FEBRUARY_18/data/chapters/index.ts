export type {
  Chapter,
  ChapterSection,
  VergleichsTabelleData,
  SelbstTestQuestion,
  KeyFact,
} from "./types";

// Biology
import { zellbiologieChapter } from "./zellbiologie";
import { genetikChapter } from "./genetik";
import { humanbiologieChapter } from "./humanbiologie";

// Chemistry
import { atombauChapter } from "./atombau";
import { spezialthemenChemieChapter } from "./spezialthemen-chemie";

// Physics
import { optikChapter } from "./optik";

// Mathematics
import { analysisChapter } from "./analysis";
import { geometrieChapter } from "./geometrie";

// Re-export individual chapters
export { zellbiologieChapter, genetikChapter, humanbiologieChapter };
export { atombauChapter, spezialthemenChemieChapter };
export { optikChapter };
export { analysisChapter, geometrieChapter };

// All biology chapters
export const biologieChapters = [zellbiologieChapter, genetikChapter, humanbiologieChapter];

// All chemistry chapters
export const chemieChapters = [atombauChapter, spezialthemenChemieChapter];

// All physics chapters
export const physikChapters = [optikChapter];

// All mathematics chapters
export const mathematikChapters = [analysisChapter, geometrieChapter];
