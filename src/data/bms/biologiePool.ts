/**
 * Biology BMS question pool (500+ Fragen) inkl. „Was ist falsch?“ pro Thema.
 */
import type { Question } from "./index";
import { biologiePool1 } from "./biologiePool1";
import { biologiePool2 } from "./biologiePool2";
import { biologiePool3 } from "./biologiePool3";
import { biologiePool4 } from "./biologiePool4";
import { biologiePool5 } from "./biologiePool5";
import { biologieWasIstFalsch } from "./biologieWasIstFalsch";

export const biologiePoolQuestions: Question[] = [
  ...biologiePool1,
  ...biologiePool2,
  ...biologiePool3,
  ...biologiePool4,
  ...biologiePool5,
  ...biologieWasIstFalsch,
];
