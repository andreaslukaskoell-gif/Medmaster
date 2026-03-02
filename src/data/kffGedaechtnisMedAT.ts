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

/** Offizielle Instruktion aus IB GM 26.pdf */
export const OFFICIAL_GM_INSTRUCTION = `Bei dieser Aufgabe sollen Sie sich Informationen auf Allergiepässen merken. Auf jedem der Allergiepässe finden Sie Informationen zu: Name, Geburtstag, Medikamenteneinnahme, Blutgruppe, bekannte Allergien, Ausweisnummer und Ausstellungsland. Sie sollen sich dabei die Inhalte mehrerer Pässe möglichst gut einprägen.

Sie dürfen sich während der Lernphase keine Notizen machen und kein Schreibgerät (Textmarker etc. und andere Hilfsmittel) verwenden. Es ist auch untersagt, sich während der darauffolgenden zwei Untertests Notizen zu den Allergiepässen zu machen. Während der Prüfphase dürfen Sie sich wieder Notizen machen.

Aufnahmeverfahren: Lernphase: 8 Allergiepässe, 8 Minuten. Prüfphase: 25 Aufgaben, 15 Minuten (Papier-Bleistift-Test).

Bei einigen Aufgaben kann es auch vorkommen, dass keine der Antwortmöglichkeiten A bis D richtig ist. In diesem Fall müssen Sie Antwortmöglichkeit E (Keine der Antwortmöglichkeiten ist richtig.) ankreuzen.`;

/** @deprecated Official examples removed (copyright). Use generator-based training only. */
export const OFFICIAL_GM_EXAMPLES: OfficialGedaechtnisSet = {
  passes: [],
  questions: [],
};

/** @deprecated No longer needed since official examples were removed. */
export function validateOfficialGedaechtnisExamples(): boolean {
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
