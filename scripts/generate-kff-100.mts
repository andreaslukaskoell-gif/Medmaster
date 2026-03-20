/**
 * Generiert je 100 Aufgaben für ZF, WF, IE, GM und schreibt Statistiken.
 * Ausführung: npx tsx scripts/generate-kff-100.mts
 */
import { writeFileSync } from "fs";
import { resolve } from "path";

import {
  generateSequenceTask,
  validateSequenceTask,
  type SequenceTask,
  type DifficultyLevel,
} from "../src/data/kffZahlenfolgenMedAT.js";

import {
  generateWordFluencyTask,
  generateAllergyPasses,
  generateGedaechtnisQuestionsFromPasses,
} from "../src/data/kffGenerators.js";

import {
  generateImplicationTaskSet,
} from "../src/data/kffImplikationen.js";

import {
  validateGedaechtnisQuestion,
} from "../src/data/kffGedaechtnisMedAT.js";

const OUT_DIR = resolve(process.cwd(), "docs");

// ─── ZAHLENFOLGEN ───────────────────────────────────────
function generateZF100() {
  console.log("\n═══ ZAHLENFOLGEN (ZF) ═══");
  const levels: DifficultyLevel[] = ["easy", "medium", "hard"];
  const targets = [34, 33, 33];
  const tasks: SequenceTask[] = [];
  let discarded = 0;
  let eCorrect = 0;

  for (let l = 0; l < 3; l++) {
    const diff = levels[l]!;
    let count = 0;
    for (let attempt = 0; attempt < 500 && count < targets[l]!; attempt++) {
      const seed = 12345 + l * 10000 + attempt * 7919;
      try {
        const task = generateSequenceTask(diff, seed);
        if (validateSequenceTask(task)) {
          task.id = `zf-test-${String(tasks.length + 1).padStart(3, "0")}`;
          tasks.push(task);
          count++;
          if (task.correctOptionId === "E") eCorrect++;
        } else {
          discarded++;
        }
      } catch {
        discarded++;
      }
    }
    console.log(`  ${diff}: ${count} generiert`);
  }

  // Collect pattern stats from rules
  const ruleStats: Record<string, number> = {};
  for (const t of tasks) {
    const key = t.rule?.substring(0, 30) || "unknown";
    ruleStats[key] = (ruleStats[key] || 0) + 1;
  }

  console.log(`  Total: ${tasks.length} | Verworfen: ${discarded}`);
  console.log(`  Option E korrekt: ${eCorrect} (${((eCorrect / tasks.length) * 100).toFixed(1)}%)`);
  console.log(`  Top-Regeln:`, Object.entries(ruleStats).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([k, v]) => `${k}: ${v}`).join(", "));

  writeFileSync(resolve(OUT_DIR, "zf-100-test.json"), JSON.stringify(tasks, null, 2));
  return tasks.length;
}

// ─── WORTFLÜSSIGKEIT ────────────────────────────────────
function generateWF100() {
  console.log("\n═══ WORTFLÜSSIGKEIT (WF) ═══");
  const tasks: any[] = [];
  const wordLengths: Record<number, number> = {};
  let eCorrect = 0;

  for (const diff of [1, 2, 3] as const) {
    const target = diff === 1 ? 34 : 33;
    let count = 0;
    for (let attempt = 0; attempt < 200 && count < target; attempt++) {
      try {
        const task = generateWordFluencyTask(diff);
        if (task && task.solutionWord) {
          // Check for duplicates
          if (!tasks.some(t => t.solutionWord === task.solutionWord)) {
            tasks.push({ ...task, id: `wf-test-${String(tasks.length + 1).padStart(3, "0")}` });
            count++;
            const len = task.solutionWord.length;
            wordLengths[len] = (wordLengths[len] || 0) + 1;
            if (task.correctIndex === 4) eCorrect++;
          }
        }
      } catch {
        // skip
      }
    }
    console.log(`  Diff ${diff}: ${count} generiert`);
  }

  const uniqueWords = new Set(tasks.map((t: any) => t.solutionWord)).size;
  console.log(`  Total: ${tasks.length} | Unique Wörter: ${uniqueWords}`);
  console.log(`  Option E korrekt: ${eCorrect} (${((eCorrect / Math.max(tasks.length, 1)) * 100).toFixed(1)}%)`);
  console.log(`  Wortlängen:`, Object.entries(wordLengths).sort((a, b) => Number(a[0]) - Number(b[0])).map(([k, v]) => `${k}:${v}`).join(", "));

  writeFileSync(resolve(OUT_DIR, "wf-100-test.json"), JSON.stringify(tasks, null, 2));
  return tasks.length;
}

// ─── IMPLIKATIONEN ──────────────────────────────────────
function generateIE100() {
  console.log("\n═══ IMPLIKATIONEN (IE) ═══");
  // Nutze generateImplicationTaskSet() — enthält E-Rate-Rebalancierung auf ~20%
  const tasks = generateImplicationTaskSet(100);
  let eCorrect = 0;
  const ruleStats: Record<string, number> = {};
  const diffStats: Record<number, number> = {};

  for (const task of tasks) {
    if (task.correctAnswer === 4) eCorrect++;
    for (const r of task.rulesApplied || []) {
      ruleStats[`R${r}`] = (ruleStats[`R${r}`] || 0) + 1;
    }
    diffStats[task.difficulty] = (diffStats[task.difficulty] || 0) + 1;
  }

  for (const d of [1, 2, 3]) {
    console.log(`  Diff ${d}: ${diffStats[d] || 0} generiert`);
  }

  console.log(`  Total: ${tasks.length}`);
  console.log(`  Option E korrekt: ${eCorrect} (${((eCorrect / Math.max(tasks.length, 1)) * 100).toFixed(1)}%)`);
  console.log(`  Regeln:`, Object.entries(ruleStats).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}:${v}`).join(", "));

  writeFileSync(resolve(OUT_DIR, "ie-100-test.json"), JSON.stringify(tasks, null, 2));
  return tasks.length;
}

// ─── GEDÄCHTNIS & MERKFÄHIGKEIT ─────────────────────────
function generateGM100() {
  console.log("\n═══ GEDÄCHTNIS & MERKFÄHIGKEIT (GM) ═══");
  const allQuestions: any[] = [];
  let eCorrect = 0;

  // Generate 4 sets of 25 questions = 100
  for (let setIdx = 0; setIdx < 4; setIdx++) {
    try {
      const passes = generateAllergyPasses(8);
      const questions = generateGedaechtnisQuestionsFromPasses(passes, 25);
      const valid = questions.filter(q => validateGedaechtnisQuestion(q));
      console.log(`  Set ${setIdx + 1}: ${valid.length}/25 valide Fragen (${passes.length} Pässe)`);

      for (const q of valid) {
        q.id = `gm-test-${String(allQuestions.length + 1).padStart(3, "0")}`;
        allQuestions.push(q);
        if (q.correctIndex === 4) eCorrect++;
      }
    } catch (e) {
      console.log(`  Set ${setIdx + 1}: FEHLER - ${e}`);
    }
  }

  console.log(`  Total: ${allQuestions.length}`);
  console.log(`  Option E korrekt: ${eCorrect} (${((eCorrect / Math.max(allQuestions.length, 1)) * 100).toFixed(1)}%)`);

  writeFileSync(resolve(OUT_DIR, "gm-100-test.json"), JSON.stringify(allQuestions, null, 2));
  return allQuestions.length;
}

// ─── MAIN ───────────────────────────────────────────────
console.log("🔬 KFF Task-Generator: 100 pro Subtest\n");

const zf = generateZF100();
const wf = generateWF100();
const ie = generateIE100();
const gm = generateGM100();

console.log("\n═══ ZUSAMMENFASSUNG ═══");
console.log(`  ZF: ${zf}/100`);
console.log(`  WF: ${wf}/100`);
console.log(`  IE: ${ie}/100`);
console.log(`  GM: ${gm}/100`);
console.log(`  Gesamt: ${zf + wf + ie + gm}/400`);
console.log(`\nDateien in docs/: zf-100-test.json, wf-100-test.json, ie-100-test.json, gm-100-test.json`);
