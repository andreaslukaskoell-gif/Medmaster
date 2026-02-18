export interface Question {
  id: string;
  subject: "biologie" | "chemie" | "physik" | "mathematik";
  chapter: string;
  text: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
}

export const bmsQuestions: Question[] = [];

export function getQuestionsBySubject(subject: string): Question[] {
  return bmsQuestions.filter((q) => q.subject === subject);
}
