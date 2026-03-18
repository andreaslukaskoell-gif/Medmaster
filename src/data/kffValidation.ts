/**
 * KFF Validierungs-Pipeline – verpflichtend für alle Aufgabentypen.
 *
 * Keine Aufgabe erscheint im UI ohne Validierung.
 * Garantien: genau 1 korrekte Antwort, alle anderen nachweislich falsch,
 * Aufgabe lösbar, keine Mehrdeutigkeit, MedAT-Regeln eingehalten.
 *
 * Quality-Gate: Nicht bestandene Aufgaben werden verworfen (beim Generieren
 * neu erzeugen / beim Laden nicht anzeigen). Generatoren müssen vor Return
 * validieren; bei Fehler verwerfen und neu generieren.
 * Dev-Statistiken: Pool-Größen, verworfene Anzahl, Konsolen-Warnungen.
 */

import type { SequenceTask } from "@/data/kffZahlenfolgenMedAT";
import { validateSequenceTask as validateSequenceTaskImpl } from "@/data/kffZahlenfolgenMedAT";
import type { FigureAssembleTask } from "@/data/kffFigurenZusammensetzenMedAT";
import { validateFigurenTask as validateFigurenTaskImpl } from "@/data/kffFigurenZusammensetzenMedAT";
import type { ImplikationTask } from "@/data/kffImplikationen";
import { validateImplikationTask as validateImplikationTaskImpl } from "@/data/kffImplikationen";
import type { WordFluencyTask } from "@/data/kffWortfluessigkeitMedAT";
import { validateWordFluencyTask as validateWordFluencyTaskImpl } from "@/data/kffGenerators";
import type { GedaechtnisQuestion } from "@/data/kffGedaechtnisMedAT";
import { validateGedaechtnisQuestion as validateGedaechtnisQuestionImpl } from "@/data/kffGedaechtnisMedAT";

export type KFFTaskType =
  | "zahlenfolgen"
  | "figuren"
  | "implikationen"
  | "wortflüssigkeit"
  | "gedaechtnis";

export type ValidationResult = { ok: true } | { ok: false; reason: string };

function validateZahlenfolgen(task: SequenceTask): ValidationResult {
  if (!validateSequenceTaskImpl(task))
    return {
      ok: false,
      reason: "Zahlenfolge: Regel nicht eindeutig oder mehrere/keine passende Option",
    };
  // Reject tasks with negative values or values > 5000 (not MedAT-realistic)
  const allNums = [...task.sequence.filter((x): x is number => x !== "?"), ...task.correctNext];
  if (allNums.some((n) => n < 0 || n > 5000))
    return { ok: false, reason: "Zahlenfolge: Wert außerhalb 0–5000 (nicht MedAT-konform)" };
  // Reject duplicate options (same value pair in A–D)
  const optVals = task.options.filter((o) => o.value).map((o) => `${o.value![0]},${o.value![1]}`);
  if (new Set(optVals).size < optVals.length)
    return { ok: false, reason: "Zahlenfolge: Doppelte Optionen" };
  return { ok: true };
}

function validateFiguren(task: FigureAssembleTask): ValidationResult {
  // Locally generated tasks have display-rotated pieces — skip geometric checks
  // (they were validated pre-rotation by the generator)
  const skipGeo = task.id.startsWith("fz-train-");
  if (!validateFigurenTaskImpl(task, skipGeo))
    return {
      ok: false,
      reason: "Figuren: Ziel nicht exakt aus Teilen rekonstruierbar oder Mehrdeutigkeit",
    };
  return { ok: true };
}

function validateImplikationen(task: ImplikationTask): ValidationResult {
  if (!validateImplikationTaskImpl(task))
    return {
      ok: false,
      reason:
        "Implikationen: Keine genau 5 Optionen, ungültige correctAnswer, inkonsistentes Relationsmodell oder unerlaubte Formulierung (z. B. könnte/manchmal/eventuell)",
    };
  return { ok: true };
}

function validateWortflüssigkeit(task: WordFluencyTask): ValidationResult {
  if (!validateWordFluencyTaskImpl(task))
    return {
      ok: false,
      reason: "Wortflüssigkeit: Kein eindeutiges Lösungswort oder Buchstabenverbrauch ungültig",
    };
  return { ok: true };
}

function validateGedaechtnis(task: GedaechtnisQuestion): ValidationResult {
  if (!validateGedaechtnisQuestionImpl(task))
    return {
      ok: false,
      reason: "Merkfähigkeit: Nicht genau 5 Optionen oder ungültiger correctIndex",
    };
  return { ok: true };
}

/**
 * Validiert eine einzelne KFF-Aufgabe je nach Typ.
 * Gibt strukturiertes Ergebnis zurück (ok + optional reason).
 */
export function validateKFFTask(
  task: SequenceTask | FigureAssembleTask | ImplikationTask | WordFluencyTask | GedaechtnisQuestion,
  type: KFFTaskType
): ValidationResult {
  switch (type) {
    case "zahlenfolgen":
      return validateZahlenfolgen(task as SequenceTask);
    case "figuren":
      return validateFiguren(task as FigureAssembleTask);
    case "implikationen":
      return validateImplikationen(task as ImplikationTask);
    case "wortflüssigkeit":
      return validateWortflüssigkeit(task as WordFluencyTask);
    case "gedaechtnis":
      return validateGedaechtnis(task as GedaechtnisQuestion);
    default:
      return { ok: false, reason: `Unbekannter Aufgabentyp: ${type}` };
  }
}

/** Prüft, ob eine Aufgabe valid ist (für Filter/Quality-Gate). */
export function isKFFTaskValid(
  task: SequenceTask | FigureAssembleTask | ImplikationTask | WordFluencyTask | GedaechtnisQuestion,
  type: KFFTaskType
): boolean {
  return validateKFFTask(task, type).ok;
}

// =============================================================================
// DEV-STATISTIKEN & QUALITY-GATE
// =============================================================================

const stats = {
  rejected: {
    zahlenfolgen: 0,
    figuren: 0,
    implikationen: 0,
    wortflüssigkeit: 0,
    gedaechtnis: 0,
  } as Record<KFFTaskType, number>,
};

export function getKFFValidationStats(): { rejected: Record<KFFTaskType, number> } {
  return { rejected: { ...stats.rejected } };
}

export function incrementRejected(type: KFFTaskType, reason?: string): void {
  stats.rejected[type]++;
  if (import.meta.env?.DEV && reason) {
    console.warn(`[KFF Validierung] Verworfen (${type}): ${reason}`);
  }
}

const MIN_POOL_WARN = 3;

/**
 * Sollte beim Laden/Anzeigen von Pools aufgerufen werden.
 * Warnt, wenn Pool leer oder sehr klein ist.
 */
export function logPoolWarning(type: KFFTaskType, poolSize: number, label?: string): void {
  if (!import.meta.env?.DEV) return;
  if (poolSize === 0) {
    console.warn(
      `[KFF] Pool leer${label ? ` (${label})` : ""}: ${type}. Keine Aufgaben verfügbar.`
    );
  } else if (poolSize < MIN_POOL_WARN) {
    console.warn(
      `[KFF] Pool sehr klein${label ? ` (${label})` : ""}: ${type} hat nur ${poolSize} Aufgabe(n).`
    );
  }
}

/**
 * Filtert ein Array von KFF-Aufgaben: nur validierte werden zurückgegeben.
 * Verworfenen werden in den Dev-Statistiken gezählt; bei Mehrdeutigkeit wird gewarnt.
 */
export function filterValidKFFTasks<T>(
  tasks: T[],
  type: KFFTaskType,
  validator: (t: T) => ValidationResult
): T[] {
  const valid: T[] = [];
  for (const task of tasks) {
    const result = validator(task);
    if (result.ok) {
      valid.push(task);
    } else {
      incrementRejected(type, result.reason);
      if (result.reason.includes("Mehrdeutigkeit") || result.reason.includes("mehrere"))
        console.warn(`[KFF] Mehrdeutigkeit erkannt (${type}):`, result.reason);
    }
  }
  return valid;
}

// =============================================================================
// TYP-SPEZIFISCHE FILTER (für KFF.tsx / Simulation)
// =============================================================================

export function filterValidSequenceTasks(tasks: SequenceTask[]): SequenceTask[] {
  return filterValidKFFTasks(tasks, "zahlenfolgen", (t) => validateZahlenfolgen(t));
}

export function filterValidFigurenTasks(tasks: FigureAssembleTask[]): FigureAssembleTask[] {
  return filterValidKFFTasks(tasks, "figuren", (t) => validateFiguren(t));
}

/**
 * Shuffles options A–D (indices 0–3) of an IE task to eliminate answer-position bias.
 * E (index 4) stays fixed. Returns a shallow copy with shuffled options and updated correctAnswer.
 */
function shuffleIEOptionPositions(task: ImplikationTask): ImplikationTask {
  const opts = [...task.options] as [string, string, string, string, string];
  // Build a permutation for indices 0–3 (Fisher-Yates)
  const perm = [0, 1, 2, 3];
  for (let i = 3; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [perm[i], perm[j]] = [perm[j], perm[i]];
  }
  const shuffled: [string, string, string, string, string] = [
    opts[perm[0]],
    opts[perm[1]],
    opts[perm[2]],
    opts[perm[3]],
    opts[4],
  ];
  // Map correctAnswer through the permutation
  let newCorrect = task.correctAnswer;
  if (task.correctAnswer >= 0 && task.correctAnswer <= 3) {
    newCorrect = perm.indexOf(task.correctAnswer);
  }
  return { ...task, options: shuffled, correctAnswer: newCorrect };
}

export function filterValidImplikationTasks(tasks: ImplikationTask[]): ImplikationTask[] {
  const valid = filterValidKFFTasks(tasks, "implikationen", (t) => validateImplikationen(t));
  // Shuffle A–D option positions to break generator/pool answer-position bias
  return valid.map(shuffleIEOptionPositions);
}

export function filterValidWordFluencyTasks(tasks: WordFluencyTask[]): WordFluencyTask[] {
  return filterValidKFFTasks(tasks, "wortflüssigkeit", (t) => validateWortflüssigkeit(t));
}

export function filterValidGedaechtnisQuestions(
  questions: GedaechtnisQuestion[]
): GedaechtnisQuestion[] {
  return filterValidKFFTasks(questions, "gedaechtnis", (t) => validateGedaechtnis(t));
}
