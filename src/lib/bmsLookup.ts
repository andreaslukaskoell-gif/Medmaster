import { allBmsQuestions } from "@/data/bms/index";
import { alleKapitel } from "@/data/bmsKapitel";

let questionSubjectMap: Map<string, string> | null = null;
let questionChapterMap: Map<string, string> | null = null;

function getSubjectMap(): Map<string, string> {
  if (!questionSubjectMap) {
    const qs = allBmsQuestions;
    if (qs.length === 0) return new Map(); // Don't cache empty — lazy load not ready yet
    questionSubjectMap = new Map(qs.map((q) => [q.id, q.subject]));
  }
  return questionSubjectMap;
}

function getChapterMap(): Map<string, string> {
  if (!questionChapterMap) {
    const qs = allBmsQuestions;
    if (qs.length === 0) return new Map();
    questionChapterMap = new Map(qs.map((q) => [q.id, q.chapter]));
  }
  return questionChapterMap;
}

export function getQuestionSubject(questionId: string): string | undefined {
  return getSubjectMap().get(questionId);
}

/** Returns a human-readable chapter title for a question ID (e.g. "Zellbiologie — Aufbau & Organellen"). */
export function getQuestionChapter(questionId: string): string | undefined {
  const chapterId = getChapterMap().get(questionId);
  if (!chapterId) return undefined;
  const kap = alleKapitel.find((k) => k.id === chapterId);
  return kap?.title ?? chapterId;
}

/** Returns the raw chapter ID (e.g. "bio-kap2") for a question. */
export function getQuestionChapterId(questionId: string): string | undefined {
  return getChapterMap().get(questionId);
}
