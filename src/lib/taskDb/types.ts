/**
 * Zentrale Task-Datenbank – einheitliches Datenmodell für BMS, KFF, SEK.
 * Generator = Füller, Datenbank = Wahrheit, UI = nur Leser.
 */

export type TaskDomain =
  | "bms-bio"
  | "bms-chem"
  | "bms-phys"
  | "bms-math"
  | "kff-zahlenfolgen"
  | "kff-figuren"
  | "kff-implikationen"
  | "kff-wortflüssigkeit"
  | "kff-merkfähigkeit"
  | "sek-erkennen"
  | "sek-regulieren"
  | "sek-entscheiden";

export type TaskSource = "official" | "generated" | "curated";

/** Aufgabentyp (mc = Multiple Choice, sequence = Zahlenfolge, etc.) */
export type TaskType =
  | "mc"
  | "multi"
  | "typk"
  | "figuren"
  | "implikationen"
  | "sequence"
  | "wortflüssigkeit"
  | "merkfähigkeit"
  | "erkennen"
  | "regulieren"
  | "entscheiden";

export type Task = {
  id: string;
  domain: TaskDomain;
  type: TaskType;
  /** 0–1000 (z.B. 100=leicht, 500=mittel, 900=schwer) */
  difficulty: number;
  /** Aufgabenspezifische Struktur (JSON-serialisierbar) */
  data: unknown;
  /** Korrekte Antwort (Format abhängig von type) */
  correctAnswer: unknown;
  explanation?: string;
  source: TaskSource;
  validated: boolean;
  createdAt: string;
  /** Wenn markiert als ungültig */
  invalidReason?: string | null;
};

export type TaskFilters = {
  domain: TaskDomain;
  type?: TaskType;
  source?: TaskSource;
  validated?: boolean;
  minDifficulty?: number;
  maxDifficulty?: number;
  limit?: number;
  offset?: number;
};

export type TaskInsert = Omit<Task, "createdAt"> & { createdAt?: string };

/** Für UI-Badges */
export const TASK_SOURCE_LABELS: Record<TaskSource, string> = {
  official: "🏛️ Offiziell",
  generated: "⚙️ Generiert",
  curated: "🧠 Kuratiert",
};
