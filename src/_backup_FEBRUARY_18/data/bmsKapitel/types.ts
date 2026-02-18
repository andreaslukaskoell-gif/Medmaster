export interface SelfTestQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
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
}

export interface Kapitel {
  id: string;
  title: string;
  subject: 'biologie' | 'chemie' | 'physik' | 'mathematik';
  icon: string;
  unterkapitel: Unterkapitel[];
  estimatedTime: string;
}
