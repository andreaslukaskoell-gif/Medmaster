/**
 * Chemie BMS-Fragenpool (1000+ Fragen, MedAT Single Choice + Typ K + „Was ist falsch?“).
 * Nur Stoff aus bmsKapitel/chemie.
 * Platzhalter („Chemie Pool-Frage N.“ / „Chemie-Frage N:“) werden ausgefiltert.
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
import { chemiePool11 } from "./chemiePool11";
import { chemiePool12 } from "./chemiePool12";
import { chemiePool13 } from "./chemiePool13";
import { chemiePool14 } from "./chemiePool14";
import { chemiePool15 } from "./chemiePool15";
import { chemiePool16 } from "./chemiePool16";
import { chemiePool17 } from "./chemiePool17";
import { chemiePool18 } from "./chemiePool18";
import { chemiePool19 } from "./chemiePool19";
import { chemiePool20 } from "./chemiePool20";
import { chemiePool21 } from "./chemiePool21";
import { chemiePool22 } from "./chemiePool22";
import { chemiePoolOffiziellStyle } from "./chemiePoolOffiziellStyle";
import { chemieWasIstFalsch } from "./chemieWasIstFalsch";

const CHEMIE_PLACEHOLDER = /^Chemie Pool-Frage \d+\.$/;
const CHEMIE_FRAGE_PLACEHOLDER = /^Chemie-Frage \d+: Welche Aussage trifft zu\?$/;

function isPlaceholder(q: Question): boolean {
  return (
    CHEMIE_PLACEHOLDER.test((q.text || "").trim()) ||
    CHEMIE_FRAGE_PLACEHOLDER.test((q.text || "").trim())
  );
}

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
  ...chemiePool11,
  ...chemiePool12,
  ...chemiePool13,
  ...chemiePool14,
  ...chemiePool15,
  ...chemiePool16,
  ...chemiePool17,
  ...chemiePool18,
  ...chemiePool19,
  ...chemiePool20,
  ...chemiePool21,
  ...chemiePool22,
  ...chemiePoolOffiziellStyle,
  ...chemieWasIstFalsch,
].filter((q) => !isPlaceholder(q));
