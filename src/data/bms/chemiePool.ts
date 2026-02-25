/**
 * Chemie BMS-Fragenpool (500+ Fragen, MedAT Single Choice + Typ K + „Was ist falsch?“).
 * Nur Stoff aus bmsKapitel/chemie.
 */
import type { Question } from "./index";
import { chemiePool1 } from "./chemiePool1";
import { chemiePool2 } from "./chemiePool2";
import { chemiePool3 } from "./chemiePool3";
import { chemiePool4 } from "./chemiePool4";
import { chemiePool5 } from "./chemiePool5";
import { chemiePool6 } from "./chemiePool6";
import { chemiePool7 } from "./chemiePool7";
import { chemiePool8 } from "./chemiePool8";
import { chemiePool9 } from "./chemiePool9";
import { chemiePool10 } from "./chemiePool10";
import { chemieWasIstFalsch } from "./chemieWasIstFalsch";

export const chemiePoolQuestions: Question[] = [
  ...chemiePool1,
  ...chemiePool2,
  ...chemiePool3,
  ...chemiePool4,
  ...chemiePool5,
  ...chemiePool6,
  ...chemiePool7,
  ...chemiePool8,
  ...chemiePool9,
  ...chemiePool10,
  ...chemieWasIstFalsch,
];
