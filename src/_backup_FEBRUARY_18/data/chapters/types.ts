export interface VergleichsTabelleData {
  headers: string[];
  rows: string[][];
}

export interface SelbstTestQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface KeyFact {
  label: string;
  value: string;
}

export interface ChapterSection {
  heading: string;
  content: string;
  diagram?: string;
  merke?: string;
  altfrage?: string;
  klinik?: string;
  vergleichsTabelle?: VergleichsTabelleData;
}

export interface Chapter {
  id: string;
  subject: "biologie" | "chemie" | "physik" | "mathematik";
  title: string;
  subtitle?: string;
  icon?: string;
  chapterNumber?: string;
  readingTime?: string;
  level?: string;
  frequency?: string;
  overview?: string;
  learningObjectives?: string[];
  sections: ChapterSection[];
  keyFacts?: KeyFact[];
  selfTestQuestions?: SelbstTestQuestion[];
  summary?: string[];
  selfTestIds?: string[];
}
