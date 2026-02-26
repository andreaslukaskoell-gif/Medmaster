/**
 * Mathematik-Pool — 1000+ Fragen (MedAT-Style, Single Choice) inkl. offizielle Beispiele und „Was ist falsch?“.
 * Platzhalter aus Pool6 werden ausgefiltert.
 */
import type { Question } from "./index";
import { mathematikPool1 } from "./mathematikPool1";
import { mathematikPool2 } from "./mathematikPool2";
import { mathematikPool3 } from "./mathematikPool3";
import { mathematikPool4 } from "./mathematikPool4";
import { mathematikPool5 } from "./mathematikPool5";
import { mathematikPool6 } from "./mathematikPool6";
import { mathematikPool7 } from "./mathematikPool7";
import { mathematikPool8 } from "./mathematikPool8";
import { mathematikPool9 } from "./mathematikPool9";
import { mathematikPool10 } from "./mathematikPool10";
import { mathematikPool11 } from "./mathematikPool11";
import { mathematikPool12 } from "./mathematikPool12";
import { mathematikPool13 } from "./mathematikPool13";
import { mathematikPool14 } from "./mathematikPool14";
import { mathematikPool15 } from "./mathematikPool15";
import { mathematikPoolOffiziellStyle } from "./mathematikPoolOffiziellStyle";
import { mathematikWasIstFalsch } from "./mathematikWasIstFalsch";

const PLACEHOLDER_STEM = "Welche der folgenden Aussagen zur Mathematik trifft zu?";

function isPlaceholder(q: Question): boolean {
  return q.text.trim() === PLACEHOLDER_STEM;
}

export const mathematikPoolQuestions: Question[] = [
  ...mathematikPool1,
  ...mathematikPool2,
  ...mathematikPool3,
  ...mathematikPool4,
  ...mathematikPool5,
  ...mathematikPool6.filter((q) => !isPlaceholder(q)),
  ...mathematikPool7,
  ...mathematikPool8,
  ...mathematikPool9,
  ...mathematikPool10,
  ...mathematikPool11,
  ...mathematikPool12,
  ...mathematikPool13,
  ...mathematikPool14,
  ...mathematikPool15,
  ...mathematikPoolOffiziellStyle,
  ...mathematikWasIstFalsch,
];
