/**
 * KFF Gedächtnis und Merkfähigkeit (Allergiepässe) – MedAT 1:1 Logik.
 * Lernphase: Allergieausweise einprägen → Prüfphase: Fragen A–E (E = „Keine der Antwortmöglichkeiten ist richtig“).
 */

export type BloodGroup = "A" | "B" | "AB" | "0";

export type AllergyPass = {
  id: string;
  name: string;
  birthdate: string; // z.B. "17.12.2003"
  bloodGroup: BloodGroup;
  medications: string[];
  allergies: string[];
  passportNumber: string;
  country: string;
  photo: string; // Platzhalter-Bild-URL
};

export type GedaechtnisQuestion = {
  id: string;
  question: string;
  options: string[]; // A–E, genau 5
  correctIndex: number; // 0–4 (A=0 … E=4)
  source?: string; // z.B. "IB_GM_26.pdf – Beispielaufgabe X"
};

export type OfficialGedaechtnisSet = {
  passes: AllergyPass[];
  questions: GedaechtnisQuestion[];
};

// =============================================================================
// OFFIZIELLE BEISPIELE – exakt aus MedAT-PDF übernehmen (nicht generieren!)
// =============================================================================
// Pflicht: PDF (z. B. IB_GM_26.pdf) öffnen, Allergiepässe + Fragen 1:1 abtippen.
// passes: alle gezeigten Ausweise in der Lernphase (Reihenfolge wie im PDF).
// questions: alle Prüffragen mit genau 5 Optionen (A–E), correctIndex 0–4.
// E-Option lautet: "Keine der Antwortmöglichkeiten ist richtig".

export const OFFICIAL_GM_EXAMPLES: OfficialGedaechtnisSet = {
  passes: [],
  questions: [],
};

/**
 * Dev-Check: Prüft, dass OFFICIAL_GM_EXAMPLES vollständig und konsistent sind.
 * Beim Modul-Load (oder App-Start) aufrufen. Bei Fehlern: console.error.
 */
export function validateOfficialGedaechtnisExamples(): boolean {
  const { passes, questions } = OFFICIAL_GM_EXAMPLES;
  if (passes.length === 0 || questions.length === 0) {
    if (import.meta.env?.DEV) {
      console.error(
        "OFFICIAL_GM_EXAMPLES fehlen – PDF nicht korrekt übernommen! Bitte Allergiepässe und Fragen aus IB_GM_26.pdf (oder aktuellem MedAT-Material) in src/data/kffGedaechtnisMedAT.ts eintragen."
      );
    }
    return false;
  }
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    if (!q.options || q.options.length !== 5) {
      if (import.meta.env?.DEV) {
        console.error(
          `OFFICIAL_GM_EXAMPLES: Frage ${i + 1} hat nicht genau 5 Optionen (A–E). options.length = ${q.options?.length ?? 0}`
        );
      }
      return false;
    }
    if (typeof q.correctIndex !== "number" || q.correctIndex < 0 || q.correctIndex > 4) {
      if (import.meta.env?.DEV) {
        console.error(
          `OFFICIAL_GM_EXAMPLES: Frage ${i + 1} hat ungültigen correctIndex (muss 0–4 sein). correctIndex = ${q.correctIndex}`
        );
      }
      return false;
    }
  }
  return true;
}

/**
 * Prüft eine einzelne Merkfähigkeit-Frage: genau 5 Optionen, genau 1 korrekte (correctIndex 0–4).
 * Garantiert: Aufgabe ist lösbar, keine Mehrdeutigkeit.
 */
export function validateGedaechtnisQuestion(q: GedaechtnisQuestion): boolean {
  if (!q.options || q.options.length !== 5) return false;
  if (typeof q.correctIndex !== "number" || q.correctIndex < 0 || q.correctIndex > 4) return false;
  return true;
}
