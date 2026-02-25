/**
 * Biology BMS question pool (500 questions, MedAT style).
 * Content based only on bmsKapitel/biologie (Kap1–Kap5). No material beyond or deeper.
 * Füllt ihr nacheinander: biologiePool1–5 mit Fragen; hier werden sie zusammengeführt.
 */
import type { Question } from "./index";
import { biologiePool1 } from "./biologiePool1";
import { biologiePool2 } from "./biologiePool2";
import { biologiePool3 } from "./biologiePool3";
import { biologiePool4 } from "./biologiePool4";
import { biologiePool5 } from "./biologiePool5";

export const biologiePoolQuestions: Question[] = [
  ...biologiePool1,
  ...biologiePool2,
  ...biologiePool3,
  ...biologiePool4,
  ...biologiePool5,
];
