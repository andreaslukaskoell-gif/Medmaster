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

export type ImplikationenProps = {
  premise1: string;
  premise2: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

export type BlutgruppenExplainerProps = {
  audioSrc: string;
  subtitles: { text: string; startFrame: number; endFrame: number }[];
};

export type CheatSheetProps = {
  subject: string;
  topic: string;
  facts: string[];
};

export type MistakeRevealProps = {
  subject: string;
  mistake: string;
  correction: string;
  explanation: string;
};

export type SpeedRoundProps = {
  questions: {
    question: string;
    options: { id: string; text: string }[];
    correctOptionId: string;
  }[];
  subject: string;
};

export type FigurenPoint = { x: number; y: number };
export type FigurenPolygon = { points: FigurenPoint[] };

export type FigurenProps = {
  /** SVG path strings for each puzzle piece, pre-scaled to 200x200 viewBox */
  piecePaths: string[];
  /** Compact layout for pieces: viewBox + path data with transforms */
  piecesLayout: { viewBox: string; paths: { d: string; transform: string }[] };
  /** SVG path strings for options A-D, pre-scaled to 200x200 viewBox */
  optionPaths: (string | null)[]; // null = Option E (keine)
  /** Index of correct option (0-4) */
  correctIndex: number;
  /** Explanation text */
  explanation: string;
};
