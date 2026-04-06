import type { QuizResult } from "@/store/useStore";
import { getQuestionSubject, getQuestionChapter, getQuestionChapterId } from "@/lib/bmsLookup";
import { getStichwortForQuestion } from "@/store/adaptiveLearning";
import { getDirectStichwortId } from "@/data/questions/index";
import { getStichwortById } from "@/data/stichwortliste";

const SUBJECT_LABELS: Record<string, string> = {
  biologie: "Biologie",
  chemie: "Chemie",
  physik: "Physik",
  mathematik: "Mathematik",
};

export type FachStats = {
  fach: string;
  label: string;
  answered: number;
  wrong: number;
  accuracy: number;
  topWeakTopics: { label: string; count: number }[];
};

export type AnalysisResult = {
  fachStats: FachStats[];
  topWeakTopics: { label: string; fach: string; fachLabel: string; count: number }[];
  totalWrong: number;
  totalAnswered: number;
  overallAccuracy: number;
  actionSentence: string;
};

/**
 * Resolve a readable topic label for a question.
 * Cascade: Stichwort thema → Chapter title → chapter ID prefix → Fach fallback
 */
function resolveTopicLabel(questionId: string, fachLabel: string): string {
  // 1. Try Stichwort
  const topicId = getDirectStichwortId(questionId) || getStichwortForQuestion(questionId);
  if (topicId) {
    const sw = getStichwortById(topicId);
    if (sw?.thema) return sw.thema;
  }

  // 2. Try chapter title
  const chapterTitle = getQuestionChapter(questionId);
  if (chapterTitle) return chapterTitle;

  // 3. Try chapter ID — make it human-readable
  const chapterId = getQuestionChapterId(questionId);
  if (chapterId) {
    // e.g. "bio-kap1" → "Kapitel 1", "ch-kap3" → "Kapitel 3"
    const kapMatch = chapterId.match(/kap(\d+)/);
    if (kapMatch) return `${fachLabel} Kap. ${kapMatch[1]}`;
    return chapterId;
  }

  // 4. Ultimate fallback — use Fach name (NOT "Allgemein")
  return `${fachLabel} (Sonstiges)`;
}

/**
 * Full analysis of wrong answers, grouped by Fach with per-topic breakdown.
 */
export function analyzeErrors(quizResults: QuizResult[]): AnalysisResult {
  const fachAnswered = new Map<string, number>();
  const fachWrong = new Map<string, number>();
  const fachTopics = new Map<string, Map<string, number>>();
  let totalWrong = 0;
  let totalAnswered = 0;

  for (const r of quizResults) {
    if (r.type !== "bms") continue;
    for (const a of r.answers || []) {
      const subject = getQuestionSubject(a.questionId) || r.subject || "sonstige";
      totalAnswered += 1;
      fachAnswered.set(subject, (fachAnswered.get(subject) ?? 0) + 1);

      if (!a.correct) {
        totalWrong += 1;
        fachWrong.set(subject, (fachWrong.get(subject) ?? 0) + 1);

        const fachLabel = SUBJECT_LABELS[subject] ?? subject;
        const topicLabel = resolveTopicLabel(a.questionId, fachLabel);

        if (!fachTopics.has(subject)) fachTopics.set(subject, new Map());
        const topicMap = fachTopics.get(subject)!;
        topicMap.set(topicLabel, (topicMap.get(topicLabel) ?? 0) + 1);
      }
    }
  }

  // Build per-Fach stats
  const fachOrder = ["biologie", "chemie", "physik", "mathematik"];
  const fachStats: FachStats[] = fachOrder
    .filter((f) => (fachAnswered.get(f) ?? 0) > 0)
    .map((fach) => {
      const answered = fachAnswered.get(fach) ?? 0;
      const wrong = fachWrong.get(fach) ?? 0;
      const accuracy = answered > 0 ? Math.round(((answered - wrong) / answered) * 100) : 0;
      const topicMap = fachTopics.get(fach) ?? new Map<string, number>();
      const topWeakTopics = Array.from(topicMap.entries())
        .map(([label, count]) => ({ label, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 3);

      return {
        fach,
        label: SUBJECT_LABELS[fach] ?? fach,
        answered,
        wrong,
        accuracy,
        topWeakTopics,
      };
    })
    .sort((a, b) => b.wrong - a.wrong);

  // Global top weak topics across all Fächer
  const allTopics: { label: string; fach: string; fachLabel: string; count: number }[] = [];
  for (const [fach, topicMap] of fachTopics) {
    for (const [label, count] of topicMap) {
      allTopics.push({ label, fach, fachLabel: SUBJECT_LABELS[fach] ?? fach, count });
    }
  }
  const topWeakTopics = allTopics.sort((a, b) => b.count - a.count).slice(0, 5);

  const overallAccuracy =
    totalAnswered > 0 ? Math.round(((totalAnswered - totalWrong) / totalAnswered) * 100) : 0;

  // Build action sentence
  let actionSentence: string;
  if (totalAnswered === 0) {
    actionSentence = "Löse BMS-Quizze, damit wir deine Fehler analysieren können.";
  } else if (totalWrong === 0) {
    actionSentence = "Perfekt — keine Fehler bisher! Weiter so.";
  } else {
    const worstFach = fachStats[0];
    if (worstFach && worstFach.wrong > 0) {
      const worstTopic = worstFach.topWeakTopics[0];
      if (worstTopic) {
        actionSentence = `Fokussiere dich auf ${worstTopic.label} in ${worstFach.label} — dort machst du die meisten Fehler (${worstTopic.count}×).`;
      } else {
        actionSentence = `${worstFach.label} ist dein schwächstes Fach (${worstFach.accuracy}% richtig). Arbeite gezielt daran.`;
      }
    } else {
      actionSentence = "Gute Basis — trainiere deine Schwachstellen gezielt weiter.";
    }
  }

  return { fachStats, topWeakTopics, totalWrong, totalAnswered, overallAccuracy, actionSentence };
}
