import type { QuizResult } from "@/store/useStore";
import { getQuestionById } from "@/data/bms/index";

const MIN_WRONG_FOR_CRITICAL = 3;
const LAST_N_QUIZZES = 15;

/**
 * Sammelt alle BMS-Fragen-IDs, die der User falsch beantwortet hat
 * (aus den letzten N Quizzen, um aktuelle Schwachstellen zu priorisieren).
 */
export function getWrongBmsQuestionIds(quizResults: QuizResult[]): string[] {
  const bmsResults = quizResults.filter((r) => r.type === "bms").slice(-LAST_N_QUIZZES);
  const ids = new Set<string>();
  for (const r of bmsResults) {
    for (const a of r.answers || []) {
      if (!a.correct) ids.add(a.questionId);
    }
  }
  return Array.from(ids);
}

/**
 * Kritisches Fehlermuster: genug falsche BMS-Antworten in den letzten Quizzen.
 * Dann lohnt sich eine gezielte Recovery-Session.
 */
export function hasCriticalErrorPattern(quizResults: QuizResult[]): boolean {
  const wrongIds = getWrongBmsQuestionIds(quizResults);
  if (wrongIds.length < MIN_WRONG_FOR_CRITICAL) return false;
  const resolved = wrongIds.filter((id) => getQuestionById(id));
  return resolved.length >= MIN_WRONG_FOR_CRITICAL;
}

/**
 * Liefert die Recovery-Session: Fragen (mit Erklärung für Re-Entry),
 * nur solche die in allBmsQuestions existieren.
 */
export function getRecoverySession(
  quizResults: QuizResult[]
): { questionId: string; explanation: string }[] {
  const wrongIds = getWrongBmsQuestionIds(quizResults);
  const session: { questionId: string; explanation: string }[] = [];
  const seen = new Set<string>();
  for (const id of wrongIds) {
    if (seen.has(id)) continue;
    const q = getQuestionById(id);
    if (!q) continue;
    seen.add(id);
    session.push({
      questionId: q.id,
      explanation: q.explanation || "Keine Erklärung hinterlegt.",
    });
  }
  return session;
}
