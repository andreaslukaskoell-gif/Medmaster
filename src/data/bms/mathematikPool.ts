/**
 * Mathematik-Pool — 500+ Fragen (MedAT-Style, Single Choice) inkl. „Was ist falsch?“.
 * Aggregiert aus mathematikPool1–5 und mathematikWasIstFalsch.
 */
import type { Question } from "./index";
import { mathematikPool1 } from "./mathematikPool1";
import { mathematikPool2 } from "./mathematikPool2";
import { mathematikPool3 } from "./mathematikPool3";
import { mathematikPool4 } from "./mathematikPool4";
import { mathematikPool5 } from "./mathematikPool5";
import { mathematikPool6 } from "./mathematikPool6";
import { mathematikWasIstFalsch } from "./mathematikWasIstFalsch";

export const mathematikPoolQuestions: Question[] = [
  ...mathematikPool1,
  ...mathematikPool2,
  ...mathematikPool3,
  ...mathematikPool4,
  ...mathematikPool5,
  ...mathematikPool6,
  ...mathematikWasIstFalsch,
];
