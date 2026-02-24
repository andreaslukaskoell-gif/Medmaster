/**
 * KFF Validierungs-Pipeline – verpflichtend für alle Aufgabentypen.
 *
 * Keine Aufgabe erscheint im UI ohne Validierung.
 * Garantien: genau 1 korrekte Antwort, alle anderen nachweislich falsch,
 * Aufgabe lösbar, keine Mehrdeutigkeit, MedAT-Regeln eingehalten.
 *
 * Quality-Gate: Nicht bestandene Aufgaben werden verworfen (beim Generieren
 * neu erzeugen / beim Laden nicht anzeigen).
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
  return { ok: true };
}

function validateFiguren(task: FigureAssembleTask): ValidationResult {
  if (!validateFigurenTaskImpl(task))
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
      reason: "Implikationen: Keine genau 5 Optionen oder ungültige correctAnswer",
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

export function filterValidImplikationTasks(tasks: ImplikationTask[]): ImplikationTask[] {
  return filterValidKFFTasks(tasks, "implikationen", (t) => validateImplikationen(t));
}

export function filterValidWordFluencyTasks(tasks: WordFluencyTask[]): WordFluencyTask[] {
  return filterValidKFFTasks(tasks, "wortflüssigkeit", (t) => validateWortflüssigkeit(t));
}

export function filterValidGedaechtnisQuestions(
  questions: GedaechtnisQuestion[]
): GedaechtnisQuestion[] {
  return filterValidKFFTasks(questions, "gedaechtnis", (t) => validateGedaechtnis(t));
}
