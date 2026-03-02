/**
 * Wortflüssigkeit – MedAT KFF.
 * Offizielle Beispielaufgaben: fix, unveränderlich, nicht generiert.
 * Training nutzt separaten Generator (kffGenerators).
 */

export type WordFluencyTask = {
  id?: string;
  /** Buchstabenreihe, z. B. ["E","R","N","H","E","C","R"] */
  letters: string[];
  /** 5 Optionen A–E; "-" = "Keine der Antworten ist richtig" (E) */
  options: string[];
  /** Index der richtigen Antwort (0–4) */
  correctIndex: number;
  /** Das Lösungswort, z. B. "RECHNER" */
  solutionWord: string;
  /** Kurze sachliche Erklärung */
  explanation: string;
  /** Nur bei offiziellen: z. B. "MedAT Wortflüssigkeit – Beispiel 1" */
  source?: string;
  /** Schwierigkeit 1–3 (optional, für Training) */
  difficulty?: 1 | 2 | 3;
};

/** Offizielle Instruktion aus IB WF 26.pdf */
export const OFFICIAL_WF_INSTRUCTION = `Bei den Aufgaben sehen Sie eine Reihe von Buchstaben. Diese Buchstaben lassen sich zu einem einzigen deutschen Hauptwort (1. Fall) zusammensetzen. Ihre Aufgabe besteht darin, herauszufinden, mit welchem Anfangsbuchstaben das Hauptwort beginnt, das sich aus den Buchstaben bilden lässt. Dabei müssen alle angeführten Buchstaben miteinbezogen werden. Die Wörter beinhalten keine Umlaute (Ä in Form von AE, Ö in Form von OE oder Ü in Form von UE) und kein scharfes S in Form von SZ. Bei den gesuchten Wörtern handelt es sich nie um Eigennamen oder regionale bzw. länderspezifische Begriffe. Es werden nur Wörter entsprechend dem deutschen Duden gesucht.

Aufnahmeverfahren: 15 Aufgaben, 20 Minuten (Papier-Bleistift-Test).

Bei einigen Aufgaben kann es vorkommen, dass das Hauptwort, das sich aus den Buchstaben erstellen lässt, mit keinem der Buchstaben beginnt, die als Antwortmöglichkeiten (A bis D) vorgeschlagen werden. In diesem Fall kreuzen Sie die Antwortmöglichkeit E (Keine der Antwortmöglichkeiten ist richtig.) an.`;

// =============================================================================
// SKRIPT: Mehr Wortflüssigkeit-Aufgaben generieren
// =============================================================================
// Wenn wir mehr Übungsaufgaben wollen: Format an OFFICIAL_WF_EXAMPLES anpassen;
// neue Aufgaben nur über kffGenerators.ts (generateWordFluencyTask, assertNotOfficialLikeWordFluency).
// Siehe auch CLAUDE.md Abschnitt „KFF: Mehr Aufgaben generieren“.
// =============================================================================
// OFFIZIELLE BEISPIELAUFGABEN – 1:1 aus MedAT-Material, niemals vom Generator verwendet
// =============================================================================

/** @deprecated Official examples removed (copyright). Use generator-based training only. */
export const OFFICIAL_WF_EXAMPLES: WordFluencyTask[] = [];

/** @deprecated No longer needed since official examples were removed. */
export function validateOfficialWFExamples(): void {}
