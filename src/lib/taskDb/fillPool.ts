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
import {
  generateAllergyPasses,
  generateGedaechtnisQuestionsFromPasses,
} from "@/data/kffGenerators";
import { filterValidGedaechtnisQuestions } from "@/data/kffValidation";
import { sequenceToTask } from "./adapters";
import { figurenToTask } from "./adapters";
import { implikationToTask } from "./adapters";
import { wortflüssigkeitToTask } from "./adapters";
import { gedaechtnisToTask } from "./adapters";

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
    // Use high-entropy seed variation + reject shape drift
    const SHAPES = [
      "triangle",
      "square",
      "rectangle",
      "rhombus",
      "parallelogram",
      "trapezoid",
      "pentagon",
      "hexagon",
      "heptagon",
      "octagon",
      "quarter-circle",
      "half-circle",
      "three-quarter-circle",
      "full-circle",
      "L-shape",
    ];
    const shapeIdx = seed % 15;
    const requestedShape = SHAPES[shapeIdx];
    const taskSeed = seed * 7 + Math.floor(seed / 14) * 31337;
    const t = generateFigurenTrainingTask(
      diffLabel as "easy" | "medium" | "hard",
      taskSeed,
      shapeIdx
    );
    // Reject if generator drifted to a different shape
    if (t.targetShapeId !== requestedShape) return null;
    insert = figurenToTask(t, "generated");
  } else if (domain === "kff-implikationen") {
    const diffNum = targetDifficulty <= 333 ? 1 : targetDifficulty <= 666 ? 2 : 3;
    const t = generateImplicationTrainingTask(diffNum as 1 | 2 | 3);
    t.id = t.id ?? `imp-${seed}`;
    insert = implikationToTask(t, "generated");
  } else if (domain === "kff-wortflüssigkeit") {
    const diffNum = targetDifficulty <= 333 ? 1 : targetDifficulty <= 666 ? 2 : 3;
    const t = generateWordFluencyTask(diffNum as 1 | 2 | 3);
    if (!t) return null;
    insert = wortflüssigkeitToTask(t, "generated");
  } else if (domain === "kff-merkfähigkeit") {
    // Einzelne Merkfähigkeit-Aufgabe wird nicht isoliert erzeugt; fillPool nutzt Chunk-Logik
    return null;
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
 * Füllt den Pool für eine Domain: generiert validierte Aufgaben bis `count` erreicht.
 * Verwendet hohe Seed-Entropie um Duplikate zu vermeiden. Max 50% Overhead-Versuche.
 * GM wird separat behandelt (Chunk-Logik mit Pässen + Fragen).
 */
export async function fillPool(
  domain: TaskDomain,
  count: number,
  baseSeed: number = Date.now()
): Promise<FillResult> {
  if (domain === "kff-merkfähigkeit") {
    return fillPoolMerkfahigkeit(count, baseSeed);
  }

  let saved = 0;
  let discarded = 0;
  const targets = [200, 500, 800]; // easy, medium, hard
  // Allow up to 50% extra attempts for validation failures
  const maxAttempts = Math.ceil(count * 1.5);

  for (let i = 0; i < maxAttempts; i++) {
    if (saved >= count) break;
    const targetDiff = targets[i % 3]!;
    // High-entropy seed: combine baseSeed + iteration with large prime to avoid collisions
    const seed = baseSeed + i * 7919 + Math.floor(baseSeed / 1000) * 31337;
    const task = await generateAndSaveOne(domain, targetDiff, seed);
    if (task) saved++;
    else discarded++;
  }
  return { saved, discarded };
}

/** Füllt Merkfähigkeit-Pool: pro Set 8 Pässe + 25 Fragen → bis zu 25 Tasks. Erzeugt weitere Sets bis count erreicht. */
async function fillPoolMerkfahigkeit(count: number, baseSeed: number): Promise<FillResult> {
  let saved = 0;
  let discarded = 0;
  let s = 0;
  const maxSets = Math.ceil(count / 25) + 2;

  while (saved < count && s < maxSets) {
    const seed = baseSeed + s * 7919;
    const setId = `gm-set-${seed}`;
    const passes = generateAllergyPasses(8);
    const raw = generateGedaechtnisQuestionsFromPasses(passes, 25);
    const questions = filterValidGedaechtnisQuestions(raw);
    for (let i = 0; i < questions.length && saved < count; i++) {
      const q = questions[i]!;
      const taskId = `gm-${s}-${i}-${seed}`;
      const taskInsert = gedaechtnisToTask({ ...q, id: taskId }, "generated", passes, setId);
      const task: Task = {
        ...taskInsert,
        createdAt: taskInsert.createdAt ?? new Date().toISOString(),
      };
      const result = validateTask(task);
      if (!result.ok) {
        discardTask(task, result.reason);
        logInvalidTask(task, result.reason);
        discarded++;
        continue;
      }
      await saveTask({ ...taskInsert, validated: true });
      saved++;
    }
    s++;
  }
  return { saved, discarded };
}
