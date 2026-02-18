// === Textverständnis Data ===
// 10+ wissenschaftliche Texte mit MC-Fragen für den MedAT-H TV-Untertest

export interface TVQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // 0-3
  explanation: string;
  /** Relevante Textstelle für Highlighting bei Auflösung */
  relevantPassage?: string;
}

export interface TVText {
  id: string;
  title: string;
  text: string;
  questions: TVQuestion[];
  difficulty: 1 | 2 | 3;
  topic: string;
}

// Texts will be imported from split files and aggregated here
import { tvTexte1bis5 } from "./tvTexte1bis5";
import { tvTexte6bis10 } from "./tvTexte6bis10";

export const tvTexte: TVText[] = [...tvTexte1bis5, ...tvTexte6bis10];
