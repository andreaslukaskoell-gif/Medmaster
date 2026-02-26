/**
 * Biology BMS question pool (500+ Fragen) inkl. „Was ist falsch?“ pro Thema.
 * Platzhalter („Biologie Pool-Frage N: Welche Aussage ist zutreffend?“) werden
 * ausgefiltert, damit im Fragen-Trainer nur echte Fragen erscheinen.
 */
import type { Question } from "./index";
import { biologiePool1 } from "./biologiePool1";
import { biologiePool2 } from "./biologiePool2";
import { biologiePool3 } from "./biologiePool3";
import { biologiePool4 } from "./biologiePool4";
import { biologiePool5 } from "./biologiePool5";
import { biologiePool6 } from "./biologiePool6";
import { biologiePool7 } from "./biologiePool7";
import { biologiePool8 } from "./biologiePool8";
import { biologiePool9 } from "./biologiePool9";
import { biologiePool10 } from "./biologiePool10";
import { biologiePool11 } from "./biologiePool11";
import { biologiePool12 } from "./biologiePool12";
import { biologiePool13 } from "./biologiePool13";
import { biologiePool14 } from "./biologiePool14";
import { biologiePool15 } from "./biologiePool15";
import { biologiePool16 } from "./biologiePool16";
import { biologiePool17 } from "./biologiePool17";
import { biologiePool18 } from "./biologiePool18";
import { biologiePool19 } from "./biologiePool19";
import { biologiePool20 } from "./biologiePool20";
import { biologiePool21 } from "./biologiePool21";
import { biologiePoolOffiziellStyle } from "./biologiePoolOffiziellStyle";
import { biologieWasIstFalsch } from "./biologieWasIstFalsch";

const PLACEHOLDER_PATTERN = /^Biologie Pool-Frage \d+: Welche Aussage ist zutreffend\?$/;

function isPlaceholder(q: Question): boolean {
  return PLACEHOLDER_PATTERN.test((q.text || "").trim());
}

export const biologiePoolQuestions: Question[] = [
  ...biologiePool1,
  ...biologiePool2,
  ...biologiePool3,
  ...biologiePool4,
  ...biologiePool5,
  ...biologiePool6,
  ...biologiePool7,
  ...biologiePool8,
  ...biologiePool9,
  ...biologiePool10,
  ...biologiePool11,
  ...biologiePool12,
  ...biologiePool13,
  ...biologiePool14,
  ...biologiePool15,
  ...biologiePool16,
  ...biologiePool17,
  ...biologiePool18,
  ...biologiePool19,
  ...biologiePool20,
  ...biologiePool21,
  ...biologiePoolOffiziellStyle,
  ...biologieWasIstFalsch,
].filter((q) => !isPlaceholder(q));
