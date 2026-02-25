/**
 * Generator als Füller: generieren → validieren → nur bei Validität speichern.
 * Generatoren liefern nicht direkt an den User aus; sie füllen nur den Pool.
 */
import { validateTask, discardTask, logInvalidTask } from "./quality";
import { saveTask } from "./storage";
import type { Task, TaskDomain, TaskInsert } from "./types";
import { generateSequenceTask } from "@/data/kffZahlenfolgenMedAT";
import { generateFigurenTrainingTask } from "@/data/kffFigurenZusammensetzenMedAT";
import { generateImplicationTrainingTask, generateWordFluencyTask } from "@/data/kffGenerators";
import { sequenceToTask } from "./adapters";
import { figurenToTask } from "./adapters";
import { implikationToTask } from "./adapters";
import { wortflüssigkeitToTask } from "./adapters";

export type FillResult = { saved: number; discarded: number };

/**
 * Generiert eine Aufgabe für die Zielschwierigkeit (0–1000), validiert sie,
 * speichert nur bei Erfolg. Returns das gespeicherte Task oder null.
 */
export async function generateAndSaveOne(
  domain: TaskDomain,
  targetDifficulty: number,
  seed: number
): Promise<Task | null> {
  const diffLabel = targetDifficulty <= 333 ? "easy" : targetDifficulty <= 666 ? "medium" : "hard";
  let insert: TaskInsert | null = null;

  if (domain === "kff-zahlenfolgen") {
    const t = generateSequenceTask(diffLabel as "easy" | "medium" | "hard", seed);
    insert = sequenceToTask(t, "generated");
  } else if (domain === "kff-figuren") {
    const t = generateFigurenTrainingTask(diffLabel as "easy" | "medium" | "hard", seed);
    insert = figurenToTask(t, "generated");
  } else if (domain === "kff-implikationen") {
    const diffNum = targetDifficulty <= 333 ? 1 : targetDifficulty <= 666 ? 2 : 3;
    const t = generateImplicationTrainingTask(diffNum as 1 | 2 | 3);
    t.id = t.id ?? `imp-${seed}`;
    insert = implikationToTask(t, "generated");
  } else if (domain === "kff-wortflüssigkeit") {
    const diffNum = targetDifficulty <= 333 ? 1 : targetDifficulty <= 666 ? 2 : 3;
    const t = generateWordFluencyTask(diffNum as 1 | 2 | 3);
    insert = wortflüssigkeitToTask(t, "generated");
  } else {
    return null;
  }

  if (!insert) return null;
  const task: Task = { ...insert, createdAt: insert.createdAt ?? new Date().toISOString() };
  const result = validateTask(task);
  if (!result.ok) {
    discardTask(task, result.reason);
    logInvalidTask(task, result.reason);
    return null;
  }
  const toSave: TaskInsert = { ...insert, validated: true };
  await saveTask(toSave);
  return { ...toSave, createdAt: toSave.createdAt ?? new Date().toISOString() } as Task;
}

/**
 * Füllt den Pool für eine Domain: versucht `count` gültige Aufgaben zu erzeugen
 * und zu speichern. Gibt Anzahl gespeichert vs. verworfen zurück.
 */
export async function fillPool(
  domain: TaskDomain,
  count: number,
  baseSeed: number = Date.now()
): Promise<FillResult> {
  let saved = 0;
  let discarded = 0;
  const targets = [200, 500, 800]; // easy, medium, hard
  for (let i = 0; i < count; i++) {
    const targetDiff = targets[i % 3]!;
    const task = await generateAndSaveOne(domain, targetDiff, baseSeed + i * 7919);
    if (task) saved++;
    else discarded++;
  }
  return { saved, discarded };
}
