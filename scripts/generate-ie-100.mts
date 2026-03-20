/**
 * Generate 100 Implikationen (logical implications) tasks using both generators.
 * Run: npx tsx scripts/generate-ie-100.mts
 */

// @ts-ignore - ESM resolve from project root
import { generateImplicationTask, validateImplikationTask } from "../src/data/kffImplikationen.ts";
// @ts-ignore
import type { ImplikationTask } from "../src/data/kffImplikationen.ts";

import * as fs from "node:fs";
import * as path from "node:path";

const TARGET = 100;
const EASY = 34;
const MEDIUM = 33;
const HARD = 33;
const MAX_ATTEMPTS_PER_TASK = 50;

function generateBatch(count: number, difficulty: 1 | 2 | 3): ImplikationTask[] {
  const tasks: ImplikationTask[] = [];
  const seenPremises = new Set<string>();
  let totalAttempts = 0;

  while (tasks.length < count && totalAttempts < count * MAX_ATTEMPTS_PER_TASK) {
    totalAttempts++;
    const task = generateImplicationTask(difficulty);
    if (!task) continue;

    // Deduplicate by premise pair
    const key = `${task.premise1}||${task.premise2}`;
    if (seenPremises.has(key)) continue;
    seenPremises.add(key);

    // Validate
    if (!validateImplikationTask(task)) continue;

    tasks.push(task);
  }

  return tasks;
}

console.log("Generating 100 Implikationen tasks...\n");

const easy = generateBatch(EASY, 1);
const medium = generateBatch(MEDIUM, 2);
const hard = generateBatch(HARD, 3);

const allTasks = [...easy, ...medium, ...hard];

// --- Statistics ---
const diffDist = { 1: easy.length, 2: medium.length, 3: hard.length };
const eCorrectCount = allTasks.filter((t) => t.correctAnswer === 4).length;
const eRate = ((eCorrectCount / allTasks.length) * 100).toFixed(1);

// Rule distribution
const ruleCounts: Record<number, number> = {};
for (const t of allTasks) {
  for (const r of t.rulesApplied) {
    ruleCounts[r] = (ruleCounts[r] || 0) + 1;
  }
}

// Unique premises
const uniquePremises = new Set<string>();
for (const t of allTasks) {
  uniquePremises.add(t.premise1);
  uniquePremises.add(t.premise2);
}

// Correct answer position distribution
const positionDist: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 };
for (const t of allTasks) {
  positionDist[t.correctAnswer]++;
}

console.log("=== RESULTS ===");
console.log(`Total generated: ${allTasks.length} / ${TARGET}`);
console.log(`\nDifficulty distribution:`);
console.log(`  Easy (1):   ${diffDist[1]} / ${EASY}`);
console.log(`  Medium (2): ${diffDist[2]} / ${MEDIUM}`);
console.log(`  Hard (3):   ${diffDist[3]} / ${HARD}`);
console.log(`\nE-correct rate: ${eCorrectCount}/${allTasks.length} (${eRate}%)`);
console.log(`\nRule distribution:`);
for (const [rule, count] of Object.entries(ruleCounts).sort(([a], [b]) => Number(a) - Number(b))) {
  console.log(`  Rule ${rule}: ${count} tasks`);
}
console.log(`\nUnique premises: ${uniquePremises.size}`);
console.log(`\nCorrect answer position distribution (A=0, B=1, C=2, D=3, E=4):`);
for (const [pos, count] of Object.entries(positionDist)) {
  const label = pos === "4" ? "E" : String.fromCharCode(65 + Number(pos));
  console.log(`  ${label}: ${count}`);
}

// Write output
const outPath = path.resolve(import.meta.dirname, "../docs/ie-100-test.json");
fs.writeFileSync(
  outPath,
  JSON.stringify(
    {
      generated: new Date().toISOString(),
      count: allTasks.length,
      stats: {
        difficultyDistribution: diffDist,
        eCorrectRate: `${eRate}%`,
        ruleDistribution: ruleCounts,
        uniquePremises: uniquePremises.size,
        positionDistribution: positionDist,
      },
      tasks: allTasks,
    },
    null,
    2
  )
);

console.log(`\nOutput written to: ${outPath}`);
