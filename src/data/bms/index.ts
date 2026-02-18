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

export const allBmsQuestions: Question[] = [];

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
