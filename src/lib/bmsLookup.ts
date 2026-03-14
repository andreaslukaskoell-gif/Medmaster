import { allBmsQuestions } from "@/data/bms/index";

let questionSubjectMap: Map<string, string> | null = null;

function getMap(): Map<string, string> {
  if (!questionSubjectMap) {
    questionSubjectMap = new Map(allBmsQuestions.map((q) => [q.id, q.subject]));
  }
  return questionSubjectMap;
}

export function getQuestionSubject(questionId: string): string | undefined {
  return getMap().get(questionId);
}
