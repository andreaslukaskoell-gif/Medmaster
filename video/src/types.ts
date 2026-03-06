export type QuizChallengeProps = {
  question: string;
  subject: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
};

export type TippDesTagesProps = {
  subject: string;
  tipp: string;
  source: string;
};

export type ZahlenfolgeProps = {
  sequence: number[];
  answer: number;
  rule: string;
};

export type WortRaetselProps = {
  letters: string[];
  word: string;
  hint: string;
};

export type StatsUrgencyProps = {
  applicants: number;
  spots: number;
  questions: number;
};

export type RichtigOderFalschProps = {
  statements: { text: string; correct: boolean }[];
};
