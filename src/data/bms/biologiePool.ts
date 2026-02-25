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
  ...biologieWasIstFalsch,
].filter((q) => !isPlaceholder(q));
