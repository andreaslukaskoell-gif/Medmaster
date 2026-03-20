/**
 * Generates 100 Zahlenfolgen tasks (34 easy, 33 medium, 33 hard) and writes them to JSON.
 * Run: npx tsx scripts/generate-zf-100.mts
 */
import { writeFileSync } from "fs";
import { resolve } from "path";
import {
  generateSequenceTask,
  validateSequenceTask,
  type SequenceTask,
  type DifficultyLevel,
} from "../src/data/kffZahlenfolgenMedAT";

const TARGETS: { level: DifficultyLevel; count: number }[] = [
  { level: "easy", count: 34 },
  { level: "medium", count: 33 },
  { level: "hard", count: 33 },
];

function main() {
  const tasks: SequenceTask[] = [];
  let discarded = 0;
  let globalIdx = 0;

  for (const { level, count } of TARGETS) {
    let generated = 0;
    let attempts = 0;
    const maxAttempts = count + 500; // generous headroom

    while (generated < count && attempts < maxAttempts) {
      const seed = 100_000 + globalIdx * 7919 + attempts * 13;
      const task = generateSequenceTask(level, seed);
      attempts++;

      if (validateSequenceTask(task)) {
        globalIdx++;
        task.id = `zf-test-${String(tasks.length + 1).padStart(3, "0")}`;
        tasks.push(task);
        generated++;
      } else {
        discarded++;
      }
    }

    if (generated < count) {
      console.warn(`WARNING: Only generated ${generated}/${count} for ${level} (${attempts} attempts)`);
    }
  }

  // --- Statistics ---
  const byDiff: Record<string, number> = { easy: 0, medium: 0, hard: 0 };
  const byCorrect: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  const patternTypes = new Map<string, number>();

  for (const t of tasks) {
    byDiff[t.difficulty]++;
    byCorrect[t.correctOptionId]++;
    // Extract pattern type from rule (first word or operator pattern)
    const ruleKey = t.rule.replace(/\d+/g, "N");
    patternTypes.set(ruleKey, (patternTypes.get(ruleKey) ?? 0) + 1);
  }

  console.log(`\n=== Zahlenfolgen Generation Results ===`);
  console.log(`Total generated: ${tasks.length} / 100`);
  console.log(`Discarded (invalid): ${discarded}`);
  console.log(`\nDifficulty distribution:`);
  console.log(`  Easy:   ${byDiff.easy}`);
  console.log(`  Medium: ${byDiff.medium}`);
  console.log(`  Hard:   ${byDiff.hard}`);
  console.log(`\nCorrect option distribution:`);
  for (const [key, val] of Object.entries(byCorrect)) {
    console.log(`  ${key}: ${val}${key === "E" ? ` (${((val / tasks.length) * 100).toFixed(1)}%)` : ""}`);
  }
  console.log(`\nPattern types (${patternTypes.size} unique):`);
  const sortedPatterns = [...patternTypes.entries()].sort((a, b) => b[1] - a[1]);
  for (const [pattern, count] of sortedPatterns.slice(0, 15)) {
    console.log(`  ${pattern}: ${count}`);
  }
  if (sortedPatterns.length > 15) {
    console.log(`  ... and ${sortedPatterns.length - 15} more patterns`);
  }

  // --- Write output ---
  const outPath = resolve(process.cwd(), "docs/zf-100-test.json");
  writeFileSync(outPath, JSON.stringify(tasks, null, 2), "utf-8");
  console.log(`\nWritten to: ${outPath}`);
}

main();
