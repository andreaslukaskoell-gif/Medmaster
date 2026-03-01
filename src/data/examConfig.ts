/** Exam mode: "exam" = official MedAT parameters, "practice" = free practice */
export type ExamMode = "exam" | "practice";

/** Official MedAT 2026 parameters per subtest (from IB PDFs) */
export const EXAM_CONFIG = {
  // KFF
  wortfluessigkeit: { questions: 15, timeSeconds: 20 * 60, label: "Wortflüssigkeit" },
  implikationen: { questions: 10, timeSeconds: 10 * 60, label: "Implikationen erkennen" },
  zahlenfolgen: { questions: 10, timeSeconds: 15 * 60, label: "Zahlenfolgen" },
  figuren: { questions: 15, timeSeconds: 20 * 60, label: "Figuren zusammensetzen" },
  gedaechtnis: {
    passes: 8,
    learnTimeSeconds: 8 * 60,
    questions: 25,
    quizTimeSeconds: 15 * 60,
    label: "Gedächtnis & Merkfähigkeit",
  },
  // SEK
  emotionenErkennen: { questions: 14, timeSeconds: 21 * 60, label: "Emotionen erkennen" },
  emotionenRegulieren: { questions: 12, timeSeconds: 18 * 60, label: "Emotionen regulieren" },
  sozialesEntscheiden: { questions: 14, timeSeconds: 21 * 60, label: "Soziales Entscheiden" },
} as const;
