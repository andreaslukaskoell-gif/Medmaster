import { alleKapitel } from "@/data/bmsKapitel/index";
import type { SelfTestQuestion } from "@/data/bmsKapitel/types";
import { biologiePoolQuestions } from "./biologiePool";
import { chemiePoolQuestions } from "./chemiePool";
import { physikPoolQuestions } from "./physikPool";
import { mathematikPoolQuestions } from "./mathematikPool";

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
  const rawQuestion = q.question != null ? String(q.question).trim() : "";
  return {
    id: `${chapter}__${ukId}-st-${qIdx}`,
    subject,
    chapter,
    text: rawQuestion || `[Fragetext fehlt: ${chapter} ${ukId}]`,
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

// Build allBmsQuestions from selfTest data embedded in all chapters + biology pool
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
  result.push(...biologiePoolQuestions);
  result.push(...chemiePoolQuestions);
  result.push(...physikPoolQuestions);
  result.push(...mathematikPoolQuestions);
  return result;
}

let _cache: Question[] | null = null;

/** Returns all BMS questions, building and caching on first call. */
export function getAllBmsQuestions(): Question[] {
  if (_cache === null) {
    _cache = buildAllBmsQuestions();
  }
  return _cache;
}

/**
 * Backward-compatible export — access triggers lazy build via Proxy.
 * Works with .length, .filter(), spread, for-of, etc.
 */
export const allBmsQuestions: Question[] = new Proxy([] as Question[], {
  get(_target, prop, receiver) {
    const data = getAllBmsQuestions();
    const value = Reflect.get(data, prop, receiver);
    return typeof value === "function" ? value.bind(data) : value;
  },
  has(_target, prop) {
    return prop in getAllBmsQuestions();
  },
  ownKeys() {
    return Reflect.ownKeys(getAllBmsQuestions());
  },
  getOwnPropertyDescriptor(_target, prop) {
    return Object.getOwnPropertyDescriptor(getAllBmsQuestions(), prop);
  },
});

export function getQuestionsBySubject(subject: string): Question[] {
  return getAllBmsQuestions().filter((q) => q.subject === subject);
}

export function getQuestionsByChapter(chapter: string): Question[] {
  return getAllBmsQuestions().filter((q) => q.chapter === chapter);
}

export function getQuestionsByDifficulty(difficulty: "leicht" | "mittel" | "schwer"): Question[] {
  return getAllBmsQuestions().filter((q) => q.difficulty === difficulty);
}

export function getQuestionsByTags(tags: string[]): Question[] {
  return getAllBmsQuestions().filter((q) => q.tags.some((t) => tags.includes(t)));
}

export function getQuestionById(id: string): Question | undefined {
  return getAllBmsQuestions().find((q) => q.id === id);
}
