export interface SelfTestQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  /** Socratic Feedback: Hinweise, die nacheinander angezeigt werden („Gib mir einen Tipp"). Führen zum Aha-Moment, bevor die Lösung gezeigt wird. */
  hints?: string[];
  /**
   * Tags from linkedQuestionTags in Stichwortliste entry.
   * Example: bio-7-01 has linkedQuestionTags: ["pcr", "polymerase-kettenreaktion"]
   * Enables: getQuestionsByTags(["pcr"]) → all PCR-related questions
   */
  tags?: string[];
  /**
   * Question difficulty level (1 = easy, 2 = medium, 3 = hard)
   * Used for adaptive learning and progress tracking
   */
  difficulty?: 1 | 2 | 3;
}

/** Optional quiz items for chapter content (same shape as SelfTestQuestion for reuse). */
export interface QuizItem {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  hints?: string[];
  /**
   * Tags from linkedQuestionTags in Stichwortliste entry.
   */
  tags?: string[];
  /**
   * Question difficulty level (1 = easy, 2 = medium, 3 = hard)
   */
  difficulty?: 1 | 2 | 3;
}

export interface ContentSection {
  heading: string;
  text: string;
  merksatz?: string;
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface Unterkapitel {
  id: string;
  title: string;
  content: string;
  /** Themen/Stichworte, die in diesem Unterkapitel abgedeckt werden. Wird oben im Kapitel als Chips angezeigt. Wenn nicht gesetzt, werden automatisch die ## Überschriften aus dem Content extrahiert. */
  stichworte?: string[];
  lernziele?: string[];
  sections?: ContentSection[];
  diagram?: string;
  merksätze: string[];
  altfrage?: {
    question: string;
    answer: string;
  };
  klinischerBezug?: string;
  selfTest: SelfTestQuestion[];
  /** Optional image URL for this subchapter; render only if present. */
  imageUrl?: string;
  /** Optional quiz; render only if present and non-empty. */
  quiz?: QuizItem[];
  /** Optional additional notes block; render only if present. */
  additionalNotes?: string;
}

export interface Kapitel {
  id: string;
  title: string;
  subject: "biologie" | "chemie" | "physik" | "mathematik";
  icon: string;
  unterkapitel: Unterkapitel[];
  estimatedTime: string;
  /**
   * Learning sequence position within the subject (1 = first chapter).
   * Used for sorting chapters in lernlogische Abfolge (not alphabetically).
   * Example: Zelle (1) → Gewebe (2) → Organe (3) → ...
   */
  sequence?: number;
  /**
   * Short title for roadmap display.
   * Example: "Zelle" instead of "Die Zelle - Struktur und Funktion"
   */
  sequenceTitle?: string;
  /**
   * Array of chapter IDs for smart-links (related/prerequisite chapters).
   * Enables cross-chapter navigation for related topics.
   * Example: ['bio-kap7'] links to Methoden der Genetik
   */
  linkedChapters?: string[];
  /**
   * If true, renders this chapter with enhanced formatting:
   * larger text, more spacing, numbered section headings.
   * Set on bio-kap1 ("Die Zelle") as the flagship chapter.
   */
  enhancedFormatting?: boolean;
}
