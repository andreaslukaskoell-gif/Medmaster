import { alleKapitel } from "@/data/bmsKapitel/index";
import type { SelfTestQuestion } from "@/data/bmsKapitel/types";

export interface Question {
  id: string;
  subject: "biologie" | "chemie" | "physik" | "mathematik";
  chapter: string;
  topic?: string;
  text: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  wrongExplanations?: Record<string, string>;
  difficulty: "leicht" | "mittel" | "schwer";
  tags: string[];
}

const OPTION_IDS = ["a", "b", "c", "d", "e"] as const;

function difficultyLabel(d?: 1 | 2 | 3): "leicht" | "mittel" | "schwer" {
  if (d === 3) return "schwer";
  if (d === 2) return "mittel";
  return "leicht";
}

function transformSelfTest(
  q: SelfTestQuestion,
  ukId: string,
  qIdx: number,
  subject: "biologie" | "chemie" | "physik" | "mathematik",
  chapter: string
): Question {
  return {
    id: `${ukId}-st-${qIdx}`,
    subject,
    chapter,
    text: q.question,
    options: q.options.map((opt, i) => ({
      id: OPTION_IDS[i] ?? String(i),
      text: opt,
    })),
    correctOptionId: OPTION_IDS[q.correctIndex] ?? String(q.correctIndex),
    explanation: q.explanation,
    difficulty: difficultyLabel(q.difficulty),
    tags: q.tags ?? [],
  };
}

// Build allBmsQuestions from selfTest data embedded in all chapters
function buildAllBmsQuestions(): Question[] {
  const result: Question[] = [];
  for (const kapitel of alleKapitel) {
    const uks = kapitel.unterkapitel ?? [];
    for (const uk of uks) {
      const questions = uk.selfTest ?? [];
      questions.forEach((q, idx) => {
        result.push(transformSelfTest(q, uk.id, idx, kapitel.subject, kapitel.id));
      });
    }
  }
  return result;
}

export const allBmsQuestions: Question[] = buildAllBmsQuestions();

export function getQuestionsBySubject(subject: string): Question[] {
  return allBmsQuestions.filter((q) => q.subject === subject);
}

export function getQuestionsByChapter(chapter: string): Question[] {
  return allBmsQuestions.filter((q) => q.chapter === chapter);
}

export function getQuestionsByDifficulty(difficulty: "leicht" | "mittel" | "schwer"): Question[] {
  return allBmsQuestions.filter((q) => q.difficulty === difficulty);
}

export function getQuestionsByTags(tags: string[]): Question[] {
  return allBmsQuestions.filter((q) => q.tags.some((t) => tags.includes(t)));
}

export function getQuestionById(id: string): Question | undefined {
  return allBmsQuestions.find((q) => q.id === id);
}
