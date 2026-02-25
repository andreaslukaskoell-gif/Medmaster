/**
 * Adapter: Konvertierung von Generator-/Offizial-Formaten in das zentrale Task-Modell.
 * difficulty: 0–1000 (z.B. easy=200, medium=500, hard=800)
 */
import type { SequenceTask } from "@/data/kffZahlenfolgenMedAT";
import type { FigureAssembleTask } from "@/data/kffFigurenZusammensetzenMedAT";
import type { ImplikationTask } from "@/data/kffImplikationen";
import type { WordFluencyTask } from "@/data/kffWortfluessigkeitMedAT";
import type { GedaechtnisQuestion } from "@/data/kffGedaechtnisMedAT";
import type {
  EmotionenErkennenTask,
  EmotionenRegulierenTask,
  SozialesEntscheidenTask,
} from "@/data/sekDataNew";
import type { Task, TaskInsert, TaskSource } from "./types";

function difficultyToScore(d: "easy" | "medium" | "hard" | 1 | 2 | 3): number {
  if (typeof d === "number") return d === 1 ? 200 : d === 2 ? 500 : 800;
  return d === "easy" ? 200 : d === "hard" ? 800 : 500;
}

export function sequenceToTask(t: SequenceTask, source: TaskSource = "generated"): TaskInsert {
  return {
    id: t.id,
    domain: "kff-zahlenfolgen",
    type: "sequence",
    difficulty: difficultyToScore(t.difficulty),
    data: t,
    correctAnswer: t.correctOptionId,
    explanation: t.explanation,
    source,
    validated: false,
    createdAt: new Date().toISOString(),
  };
}

export function figurenToTask(t: FigureAssembleTask, source: TaskSource = "generated"): TaskInsert {
  return {
    id: t.id,
    domain: "kff-figuren",
    type: "figuren",
    difficulty: t.difficulty === "easy" ? 200 : t.difficulty === "hard" ? 800 : 500,
    data: t,
    correctAnswer: t.correctIndex,
    explanation: t.explanation,
    source,
    validated: false,
    createdAt: new Date().toISOString(),
  };
}

export function implikationToTask(
  t: ImplikationTask,
  source: TaskSource = "generated"
): TaskInsert {
  return {
    id: t.id,
    domain: "kff-implikationen",
    type: "implikationen",
    difficulty: difficultyToScore(t.difficulty),
    data: t,
    correctAnswer: t.correctAnswer,
    explanation: t.explanation,
    source,
    validated: false,
    createdAt: new Date().toISOString(),
  };
}

export function wortflüssigkeitToTask(
  t: WordFluencyTask,
  source: TaskSource = "generated"
): TaskInsert {
  return {
    id: t.id ?? `wf-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    domain: "kff-wortflüssigkeit",
    type: "wortflüssigkeit",
    difficulty: difficultyToScore(t.difficulty ?? 2),
    data: t,
    correctAnswer: { correctIndex: t.correctIndex, solutionWord: t.solutionWord },
    explanation: t.explanation,
    source,
    validated: false,
    createdAt: new Date().toISOString(),
  };
}

export function gedaechtnisToTask(
  t: GedaechtnisQuestion,
  source: TaskSource = "generated"
): TaskInsert {
  return {
    id: t.id,
    domain: "kff-merkfähigkeit",
    type: "merkfähigkeit",
    difficulty: 500,
    data: t,
    correctAnswer: t.correctIndex,
    explanation: "",
    source,
    validated: false,
    createdAt: new Date().toISOString(),
  };
}

export function erkennenToTask(
  t: EmotionenErkennenTask,
  source: TaskSource = "official"
): TaskInsert {
  return {
    id: t.id,
    domain: "sek-erkennen",
    type: "erkennen",
    difficulty: difficultyToScore(t.difficulty ?? 2),
    data: t,
    correctAnswer: t.emotionen.map((e) => ({ name: e.name, correct: e.correct })),
    source,
    validated: true,
    createdAt: new Date().toISOString(),
  };
}

export function regulierenToTask(
  t: EmotionenRegulierenTask,
  source: TaskSource = "official"
): TaskInsert {
  return {
    id: t.id,
    domain: "sek-regulieren",
    type: "regulieren",
    difficulty: difficultyToScore(t.difficulty ?? 2),
    data: t,
    correctAnswer: t.strategien,
    source,
    validated: true,
    createdAt: new Date().toISOString(),
  };
}

export function entscheidenToTask(
  t: SozialesEntscheidenTask,
  source: TaskSource = "official"
): TaskInsert {
  return {
    id: t.id,
    domain: "sek-entscheiden",
    type: "entscheiden",
    difficulty: difficultyToScore(t.difficulty ?? 2),
    data: t,
    correctAnswer: t.aussagen.map((a) => ({ text: a.text, idealRank: a.idealRank })),
    source,
    validated: true,
    createdAt: new Date().toISOString(),
  };
}

/** Task zurück ins domain-spezifische Format (für UI). */
export function taskToData<T>(task: Task): T {
  return task.data as T;
}
