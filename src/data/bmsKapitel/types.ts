export interface SelfTestQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  /** Socratic Feedback: Hinweise, die nacheinander angezeigt werden („Gib mir einen Tipp“). Führen zum Aha-Moment, bevor die Lösung gezeigt wird. */
  hints?: string[];
}

/** Optional quiz items for chapter content (same shape as SelfTestQuestion for reuse). */
export interface QuizItem {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  hints?: string[];
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
  subject: 'biologie' | 'chemie' | 'physik' | 'mathematik';
  icon: string;
  unterkapitel: Unterkapitel[];
  estimatedTime: string;
}
