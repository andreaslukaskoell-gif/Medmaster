// === KFF Academy Types ===

/** Alle KFF-Untertest-Typen */
export type KFFSubtestType =
  | "implikationen"
  | "zahlenfolgen"
  | "wortflüssigkeit"
  | "merkfähigkeit"
  | "figuren"
  | "emotionen-regulieren"
  | "soziales-entscheiden"
  | "emotionen-erkennen"
  | "textverständnis";

/** Einzelne Übungsaufgabe */
export interface KFFExercise {
  id: string;
  type: KFFSubtestType;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: "leicht" | "mittel" | "schwer";
  hints?: string[];
}

/** Ergebnis einer einzelnen Aufgabe */
export interface KFFResult {
  exerciseId: string;
  userAnswer: string;
  correct: boolean;
  timeSpent: number; // Millisekunden
  date: string; // ISO-String
}

/** Ergebnis einer Simulation */
export interface SimulationResult {
  id: string;
  subtestType: KFFSubtestType;
  score: number;
  maxScore: number;
  timeUsed: number; // Sekunden
  timeLimit: number; // Sekunden
  date: string; // ISO-String
  details: KFFResult[];
}

/** Fortschritt pro Untertest */
export interface SubtestProgress {
  correct: number;
  total: number;
  lastPracticed: string | null; // ISO-String
}

/** Schwachstellen-Eintrag */
export interface WeaknessEntry {
  subtestType: KFFSubtestType;
  errorCount: number;
  lastError: string; // ISO-String
}

/** Metadaten für eine Untertest-Karte auf der Übersicht */
export interface KFFSubtestMeta {
  id: KFFSubtestType;
  name: string;
  path: string;
  icon: string;
  color: string;
  bgColor: string;
  exerciseCount: number;
  category: "kff" | "sek" | "tv";
}

/** Zeile aus Supabase-Tabelle kff_results (generierte Typen für DB-Zugriff) */
export interface KFFResultRow {
  id: string;
  user_id: string;
  result_type: "single" | "simulation";
  subtest_type: string;
  payload: KFFResult | SimulationResult;
  created_at: string;
}
