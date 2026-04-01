import { allBmsQuestions } from "@/data/bms/index";
import { alleKapitel } from "@/data/bmsKapitel";

let questionSubjectMap: Map<string, string> | null = null;
let questionChapterMap: Map<string, string> | null = null;

function getSubjectMap(): Map<string, string> {
  if (!questionSubjectMap) {
    questionSubjectMap = new Map(allBmsQuestions.map((q) => [q.id, q.subject]));
  }
  return questionSubjectMap;
}

function getChapterMap(): Map<string, string> {
  if (!questionChapterMap) {
    questionChapterMap = new Map(allBmsQuestions.map((q) => [q.id, q.chapter]));
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
