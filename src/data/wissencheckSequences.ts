/**
 * Logic-Builder: Reihenfolge-Fragen für den Wissenscheck.
 * Der User tippt Fragmente in die richtige Reihenfolge (Kausalität/Prozess).
 */

export interface SequenceQuestion {
  id: string;
  subject: "biologie" | "chemie" | "physik" | "mathematik";
  /** Kurzer Kontext (z.B. "Blutfluss durch das Herz") */
  title: string;
  /** Fragmente in der korrekten Reihenfolge (4–5 Stück) */
  correctOrder: string[];
  /** Optionale Erklärung nach richtiger Lösung */
  explanation?: string;
}

export const sequenceQuestions: SequenceQuestion[] = [
  {
    id: "seq-bio-herz-1",
    subject: "biologie",
    title: "Blutfluss durch das linke Herz (von Vorhof zur Aorta)",
    correctOrder: ["Linker Vorhof", "Mitralklappe", "Linke Kammer", "Aortenklappe", "Aorta"],
    explanation: "Das sauerstoffreiche Blut kommt aus der Lunge in den linken Vorhof, passiert die Mitralklappe in die linke Kammer und wird über die Aortenklappe in die Aorta gepumpt.",
  },
  {
    id: "seq-bio-herz-2",
    subject: "biologie",
    title: "Blutfluss durch das rechte Herz",
    correctOrder: ["Rechter Vorhof", "Trikuspidalklappe", "Rechte Kammer", "Pulmonalklappe", "Lungenarterie"],
    explanation: "Sauerstoffarmes Blut aus dem Körper gelangt in den rechten Vorhof, durch die Trikuspidalklappe in die rechte Kammer und über die Pulmonalklappe in die Lungenarterie zur Lunge.",
  },
  {
    id: "seq-bio-zelle-1",
    subject: "biologie",
    title: "Ablauf der Proteinbiosynthese (vereinfacht)",
    correctOrder: ["DNA (Gen)", "Transkription", "mRNA", "Ribosom", "Protein"],
    explanation: "Die DNA wird abgelesen (Transkription), es entsteht mRNA, die zum Ribosom gelangt, wo die Translation zum Protein erfolgt.",
  },
  {
    id: "seq-bio-diffusion",
    subject: "biologie",
    title: "Konzentrationsausgleich durch Diffusion",
    correctOrder: ["Hohe Konzentration", "Konzentrationsgefälle", "Nettofluss zum niedrigen Bereich", "Gleichgewicht"],
    explanation: "Teilchen bewegen sich entlang des Konzentrationsgefälles von hoch nach niedrig, bis ein Gleichgewicht erreicht ist.",
  },
  {
    id: "seq-chem-reaktion",
    subject: "chemie",
    title: "Ablauf einer chemischen Reaktion",
    correctOrder: ["Edukte", "Aktivierungsenergie", "Übergangszustand", "Produkte"],
    explanation: "Edukte müssen die Aktivierungsenergie aufnehmen, durchlaufen den Übergangszustand und werden zu Produkten.",
  },
];

export function getSequenceQuestionsBySubject(subject: string): SequenceQuestion[] {
  return sequenceQuestions.filter((q) => q.subject === subject);
}
