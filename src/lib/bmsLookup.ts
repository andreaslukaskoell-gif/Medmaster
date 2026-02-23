import { allBmsQuestions } from "@/data/bms/index";

const questionSubjectMap = new Map<string, string>(allBmsQuestions.map((q) => [q.id, q.subject]));

export function getQuestionSubject(questionId: string): string | undefined {
  return questionSubjectMap.get(questionId);
}
