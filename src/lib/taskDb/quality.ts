/**
 * Quality gates: validate before save, discard invalid, log errors.
 * Jede Aufgabe MUSS genau 1 korrekte Lösung haben und alle Validierer bestehen.
 */
import { validateKFFTask } from "@/data/kffValidation";
import type { SequenceTask } from "@/data/kffZahlenfolgenMedAT";
import type { FigureAssembleTask } from "@/data/kffFigurenZusammensetzenMedAT";
import type { ImplikationTask } from "@/data/kffImplikationen";
import type { WordFluencyTask } from "@/data/kffWortfluessigkeitMedAT";
import type { GedaechtnisQuestion } from "@/data/kffGedaechtnisMedAT";
import type { Task, TaskDomain } from "./types";

export type ValidationOutcome = { ok: true } | { ok: false; reason: string };

const DOMAIN_TO_KFF_TYPE = {
  "kff-zahlenfolgen": "zahlenfolgen" as const,
  "kff-figuren": "figuren" as const,
  "kff-implikationen": "implikationen" as const,
  "kff-wortflüssigkeit": "wortflüssigkeit" as const,
  "kff-merkfähigkeit": "gedaechtnis" as const,
};

/**
 * Validiert einen Task vor Speicherung.
 * KFF: nutzt bestehende validateKFFTask.
 * BMS/SEK: strukturelle Prüfung (id, correctAnswer, data vorhanden).
 */
export function validateTask(task: Task): ValidationOutcome {
  if (!task.id || task.domain == null || task.type == null) {
    return { ok: false, reason: "Fehlende Pflichtfelder (id, domain, type)" };
  }
  if (task.difficulty < 0 || task.difficulty > 1000) {
    return { ok: false, reason: "difficulty muss 0–1000 sein" };
  }
  if (task.correctAnswer == null) {
    return { ok: false, reason: "correctAnswer fehlt" };
  }

  const kffType = DOMAIN_TO_KFF_TYPE[task.domain as keyof typeof DOMAIN_TO_KFF_TYPE];
  if (kffType) {
    const result = validateKFFTask(
      task.data as
        | SequenceTask
        | FigureAssembleTask
        | ImplikationTask
        | WordFluencyTask
        | GedaechtnisQuestion,
      kffType
    );
    if (!result.ok) return result;
  }

  return { ok: true };
}

/** Ungültige Aufgabe verwerfen: nicht speichern, nur loggen. */
export function discardTask(task: Task, reason: string): void {
  if (typeof console !== "undefined" && import.meta.env?.DEV) {
    console.warn("[TaskDB] Invalid task discarded", { id: task.id, domain: task.domain, reason });
  }
}

/** Fehler protokollieren (für Admin/Review). */
export function logInvalidTask(task: Task, reason: string): void {
  if (typeof console !== "undefined") {
    console.error("[TaskDB] Invalid task", {
      id: task.id,
      domain: task.domain,
      type: task.type,
      reason,
    });
  }
}
