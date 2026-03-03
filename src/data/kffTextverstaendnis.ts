// === Textverständnis Data ===
// 10+ wissenschaftliche Texte mit MC-Fragen für den MedAT-H TV-Untertest

export interface TVQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // 0–4 für A–E (MedAT: 5 Optionen)
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
import { tvTextSets } from "./tvTextsExpanded";
import { tvTextSets2 } from "./tvTextsExpanded2";

const DIFFICULTY_MAP = { leicht: 1, mittel: 2, schwer: 3 } as const;

/** Convert Family B (tvTextsExpanded) sets into canonical TVText format */
function convertExpandedSets(): TVText[] {
  const allSets = [...tvTextSets, ...tvTextSets2];
  return allSets.flatMap((set) =>
    set.texts.map((t) => ({
      id: `tv-exp-${t.id}`,
      title: t.title,
      text: t.content,
      difficulty: DIFFICULTY_MAP[set.difficulty] ?? 2,
      topic: t.title,
      questions: t.questions.map((q) => ({
        question: q.question,
        options: q.options,
        correctAnswer: q.correctOption,
        explanation: q.explanation,
      })),
    }))
  ) as TVText[];
}

/** Core 10 texts (high quality, 5 questions each) */
export const tvTexte: TVText[] = [...tvTexte1bis5, ...tvTexte6bis10];

/** All TV texts including converted expanded sets (50 additional texts, ~229 questions) */
export const tvTexteAlle: TVText[] = [...tvTexte, ...convertExpandedSets()];
