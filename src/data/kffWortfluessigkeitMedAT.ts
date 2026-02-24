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

// =============================================================================
// SKRIPT: Mehr Wortflüssigkeit-Aufgaben generieren
// =============================================================================
// Wenn wir mehr Übungsaufgaben wollen: Format an OFFICIAL_WF_EXAMPLES anpassen;
// neue Aufgaben nur über kffGenerators.ts (generateWordFluencyTask, assertNotOfficialLikeWordFluency).
// Siehe auch CLAUDE.md Abschnitt „KFF: Mehr Aufgaben generieren“.
// =============================================================================
// OFFIZIELLE BEISPIELAUFGABEN – 1:1 aus MedAT-Material, niemals vom Generator verwendet
// =============================================================================

export const OFFICIAL_WF_EXAMPLES: WordFluencyTask[] = [
  {
    id: "wf-off-0",
    letters: ["D", "U", "S", "K", "I", "C", "H", "N", "W", "N"],
    options: ["D", "W", "S", "N", "-"],
    correctIndex: 1,
    solutionWord: "WUNSCHKIND",
    explanation:
      "Diese Lösung ist richtig, da das gesuchte Wort WUNSCHKIND lautet und somit mit W beginnt.",
    source: "MedAT 2026 Wortflüssigkeit – Beispiel",
  },
  {
    id: "wf-off-1",
    letters: ["E", "R", "N", "H", "E", "C", "R"],
    options: ["E", "N", "R", "H", "-"],
    correctIndex: 2,
    solutionWord: "RECHNER",
    explanation: "Das Lösungswort lautet RECHNER und beginnt mit R.",
    source: "MedAT 2026 Wortflüssigkeit – Beispielaufgabe 1",
  },
  {
    id: "wf-off-2",
    letters: ["U", "E", "Z", "G", "L", "U", "F", "G"],
    options: ["L", "F", "G", "Z", "-"],
    correctIndex: 1,
    solutionWord: "FLUGZEUG",
    explanation: "Das Lösungswort lautet FLUGZEUG und beginnt mit F.",
    source: "MedAT 2026 Wortflüssigkeit – Beispielaufgabe 2",
  },
  {
    id: "wf-off-3",
    letters: ["Z", "E", "I", "T", "I", "R", "F", "E"],
    options: ["I", "Z", "F", "T", "-"],
    correctIndex: 2,
    solutionWord: "FREIZEIT",
    explanation: "Das Lösungswort lautet FREIZEIT und beginnt mit F.",
    source: "MedAT 2026 Wortflüssigkeit – Beispielaufgabe 3",
  },
  {
    id: "wf-off-4",
    letters: ["B", "G", "E", "U", "N", "G", "B", "A"],
    options: ["G", "B", "A", "N", "-"],
    correctIndex: 1,
    solutionWord: "BEGABUNG",
    explanation: "Das Lösungswort lautet BEGABUNG und beginnt mit B.",
    source: "MedAT 2026 Wortflüssigkeit – Beispielaufgabe 4",
  },
];

/**
 * Dev-Check: Stellt sicher, dass OFFICIAL_WF_EXAMPLES vollständig und konsistent sind.
 */
export function validateOfficialWFExamples(): void {
  if (OFFICIAL_WF_EXAMPLES.length === 0) {
    if (typeof import.meta !== "undefined" && import.meta.env?.DEV) {
      console.error("OFFICIAL_WF_EXAMPLES leer – offizielle Beispiele fehlen!");
    }
    return;
  }
  for (const ex of OFFICIAL_WF_EXAMPLES) {
    if (ex.letters.length < 5) {
      if (import.meta.env?.DEV) console.error("Zu wenige Buchstaben", ex);
    }
    if (ex.options.length !== 5) {
      if (import.meta.env?.DEV) console.error("Nicht 5 Optionen", ex);
    }
    if (ex.correctIndex < 0 || ex.correctIndex > 4) {
      if (import.meta.env?.DEV) console.error("Ungültige Lösung", ex);
    }
    if (!ex.solutionWord) {
      if (import.meta.env?.DEV) console.error("Kein Lösungswort", ex);
    }
  }
}

if (typeof import.meta !== "undefined" && import.meta.env?.DEV) {
  validateOfficialWFExamples();
}
