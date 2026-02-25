/**
 * Physik BMS-Fragenpool (500 Fragen, MedAT-Typ K, Single Choice).
 * Nur Stoff aus bmsKapitel/physik (Mechanik, Wellen, Wärmelehre, E-Lehre & Optik, Atomphysik).
 */
import type { Question } from "./index";
import { physikPool1 } from "./physikPool1";
import { physikPool2 } from "./physikPool2";
import { physikPool3 } from "./physikPool3";
import { physikPool4 } from "./physikPool4";
import { physikPool5 } from "./physikPool5";
import { physikPool6 } from "./physikPool6";
import { physikPool7 } from "./physikPool7";
import { physikPool8 } from "./physikPool8";
import { physikPool9 } from "./physikPool9";
import { physikPool10 } from "./physikPool10";

export const physikPoolQuestions: Question[] = [
  ...physikPool1,
  ...physikPool2,
  ...physikPool3,
  ...physikPool4,
  ...physikPool5,
  ...physikPool6,
  ...physikPool7,
  ...physikPool8,
  ...physikPool9,
  ...physikPool10,
];
