import type { QuizResult } from "@/store/useStore";
import { getQuestionSubject } from "@/lib/bmsLookup";
import { getStichwortForQuestion } from "@/store/adaptiveLearning";
import { getDirectStichwortId } from "@/data/questions/index";
import { getStichwortById } from "@/data/stichwortliste";

/** Pro Thema (Stichwort) oder Fach: Anzahl falscher Antworten */
export interface TopicErrorCount {
  subject: string;
  topicId: string | null;
  topicLabel: string;
  count: number;
}

/** Root-Cause: Heuristik, da wir keine echte Kategorisierung speichern */
export type ErrorType = "Wissenslücke" | "Flüchtigkeit";

const SUBJECT_LABELS: Record<string, string> = {
  biologie: "Biologie",
  chemie: "Chemie",
  physik: "Physik",
  mathematik: "Mathematik",
};

/**
 * Aggregiert falsche BMS-Antworten nach Fach und Thema (Stichwort).
 * Für Treemap: hierarchy subject -> topics mit size = Fehleranzahl.
 */
export function aggregateWrongAnswersByTopic(quizResults: QuizResult[]): {
  bySubjectTopic: Map<string, Map<string, number>>;
  totalWrong: number;
  totalAnswered: number;
} {
  const bySubjectTopic = new Map<string, Map<string, number>>();
  let totalWrong = 0;
  let totalAnswered = 0;

  for (const r of quizResults) {
    if (r.type !== "bms") continue;
    for (const a of r.answers || []) {
      totalAnswered += 1;
      if (a.correct) continue;
      totalWrong += 1;
      const subject = getQuestionSubject(a.questionId) || r.subject || "Sonstige";
      const topicId = getDirectStichwortId(a.questionId) || getStichwortForQuestion(a.questionId) || "unbekannt";
      const topicLabel = getStichwortById(topicId)?.thema ?? topicId;
      if (!bySubjectTopic.has(subject)) bySubjectTopic.set(subject, new Map());
      const topicMap = bySubjectTopic.get(subject)!;
      const key = topicLabel;
      topicMap.set(key, (topicMap.get(key) ?? 0) + 1);
    }
  }

  return { bySubjectTopic, totalWrong, totalAnswered };
}

/**
 * Heuristik: Anteil Wissenslücke vs. Flüchtigkeit.
 * Ohne echte Kategorisierung: z.B. 65% Wissenslücke, 35% Flüchtigkeit.
 * Später: pro Frage kategorisieren (z.B. "nah dran" = Flüchtigkeit).
 */
export function getRootCauseDistribution(totalWrong: number): { Wissenslücke: number; Flüchtigkeit: number } {
  if (totalWrong === 0) return { Wissenslücke: 0, Flüchtigkeit: 0 };
  const wissenslücke = Math.round(totalWrong * 0.65);
  const flüchtigkeit = totalWrong - wissenslücke;
  return { Wissenslücke: wissenslücke, Flüchtigkeit: flüchtigkeit };
}

/**
 * Treemap-Daten für Recharts: { name, value, children?: { name, value }[] }
 */
export function buildTreemapData(bySubjectTopic: Map<string, Map<string, number>>): { name: string; value: number; children?: { name: string; value: number }[] }[] {
  const result: { name: string; value: number; children?: { name: string; value: number }[] }[] = [];
  for (const [subject, topicMap] of bySubjectTopic) {
    const children = Array.from(topicMap.entries())
      .map(([name, value]) => ({ name, value }))
      .filter((c) => c.value > 0)
      .sort((a, b) => b.value - a.value);
    const value = children.reduce((s, c) => s + c.value, 0);
    if (value === 0) continue;
    result.push({
      name: SUBJECT_LABELS[subject] ?? subject,
      value,
      children: children.length > 0 ? children : undefined,
    });
  }
  return result.sort((a, b) => b.value - a.value);
}

/**
 * Donut-Daten: Root-Cause-Verteilung
 */
export function buildDonutData(rootCause: { Wissenslücke: number; Flüchtigkeit: number }): { name: string; value: number }[] {
  return [
    { name: "Wissenslücke", value: rootCause.Wissenslücke },
    { name: "Flüchtigkeit", value: rootCause.Flüchtigkeit },
  ].filter((d) => d.value > 0);
}

/**
 * Generiert Handlungsempfehlung: "Du verlierst X% durch Flüchtigkeit in [Fach]. Arbeite an Konzentration!"
 */
export function buildActionSentence(
  rootCause: { Wissenslücke: number; Flüchtigkeit: number },
  totalAnswered: number,
  bySubjectTopic: Map<string, Map<string, number>>
): string {
  if (totalAnswered === 0 || rootCause.Flüchtigkeit === 0) {
    if (totalAnswered === 0) return "Löse Quizze, damit wir deine Fehler analysieren können.";
    const topSubject = getTopSubjectByWrong(bySubjectTopic);
    if (topSubject) {
      return `Die meisten Fehler liegen in ${topSubject}. Fokussiere dich beim Lernen auf dieses Fach.`;
    }
    return "Weiter so – mit mehr Übung werden Fehlerquellen klarer.";
  }
  const pctLost = Math.round((rootCause.Flüchtigkeit / totalAnswered) * 100);
  const topSubject = getTopSubjectByWrong(bySubjectTopic);
  const fachLabel = topSubject ? SUBJECT_LABELS[topSubject] ?? topSubject : "einem Fach";
  return `Du verlierst etwa ${pctLost}% deiner Punkte durch Flüchtigkeitsfehler – besonders in ${fachLabel}. Arbeite an deiner Konzentration, nicht am Stoff!`;
}

function getTopSubjectByWrong(bySubjectTopic: Map<string, Map<string, number>>): string | null {
  let max = 0;
  let top: string | null = null;
  for (const [subject, topicMap] of bySubjectTopic) {
    const total = Array.from(topicMap.values()).reduce((s, v) => s + v, 0);
    if (total > max) {
      max = total;
      top = subject;
    }
  }
  return top;
}
