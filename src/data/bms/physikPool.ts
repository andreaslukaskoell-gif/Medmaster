/**
 * Physik BMS-Fragenpool (1000+ Fragen, MedAT Single Choice + Typ K + „Was ist falsch?“).
 * Nur Stoff aus bmsKapitel/physik.
 * Platzhalter („Welche der folgenden Aussagen zur Physik trifft zu?“) werden ausgefiltert.
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
import { physikPool11 } from "./physikPool11";
import { physikPool12 } from "./physikPool12";
import { physikPool13 } from "./physikPool13";
import { physikPool14 } from "./physikPool14";
import { physikPool15 } from "./physikPool15";
import { physikPool16 } from "./physikPool16";
import { physikPool17 } from "./physikPool17";
import { physikPool18 } from "./physikPool18";
import { physikPool19 } from "./physikPool19";
import { physikPool20 } from "./physikPool20";
import { physikPool21 } from "./physikPool21";
import { physikPoolOffiziellStyle } from "./physikPoolOffiziellStyle";
import { physikWasIstFalsch } from "./physikWasIstFalsch";

const PHYSIK_PLACEHOLDER = /^Welche der folgenden Aussagen zur Physik trifft zu\?$/;

function isPlaceholder(q: Question): boolean {
  return PHYSIK_PLACEHOLDER.test((q.text || "").trim());
}

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
  ...physikPool11,
  ...physikPool12,
  ...physikPool13,
  ...physikPool14,
  ...physikPool15,
  ...physikPool16,
  ...physikPool17,
  ...physikPool18,
  ...physikPool19,
  ...physikPool20,
  ...physikPool21,
  ...physikPoolOffiziellStyle,
  ...physikWasIstFalsch,
].filter((q) => !isPlaceholder(q));
