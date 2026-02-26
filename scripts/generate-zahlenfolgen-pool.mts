/**
 * Generiert ca. 1000 Zahlenfolgen-Aufgaben (MedAT-Format) und schreibt sie in eine JSON-Datei.
 * Keine DB nötig. Nützlich für Referenz, Backup oder spätere Migration.
 *
 * Ausführung: npx tsx scripts/generate-zahlenfolgen-pool.mts [--count 1000] [--out docs/zahlenfolgen-pool-1000.json]
 */
import { writeFileSync } from "fs";
import { resolve } from "path";
import {
  generateSequenceTask,
  validateSequenceTask,
  type SequenceTask,
  type DifficultyLevel,
} from "../src/data/kffZahlenfolgenMedAT";

const DEFAULT_COUNT = 1000;
const LEVELS: DifficultyLevel[] = ["easy", "medium", "hard"];

function main() {
  const args = process.argv.slice(2);
  const countIdx = args.indexOf("--count");
  const count =
    countIdx >= 0 ? parseInt(args[countIdx + 1] ?? String(DEFAULT_COUNT), 10) : DEFAULT_COUNT;
  const outIdx = args.indexOf("--out");
  const outPath =
    outIdx >= 0 ? args[outIdx + 1]! : resolve(process.cwd(), "docs/zahlenfolgen-pool-1000.json");

  const baseSeed = 42;
  const tasks: SequenceTask[] = [];
  let discarded = 0;
  const maxAttempts = count + 200;

  for (let i = 0; i < maxAttempts && tasks.length < count; i++) {
    const diff = LEVELS[i % 3]!;
    const seed = baseSeed + i * 7919;
    const task = generateSequenceTask(diff, seed);
    if (validateSequenceTask(task)) {
      task.id = `zf-pool-${String(tasks.length + 1).padStart(4, "0")}`;
      tasks.push(task);
    } else {
      discarded++;
    }
  }

  const payload = JSON.stringify(tasks, null, 0);
  writeFileSync(outPath, payload, "utf-8");
  console.log(
    `Zahlenfolgen-Pool: ${tasks.length} Aufgaben geschrieben nach ${outPath} (${discarded} verworfen)`
  );
  const byDiff = { easy: 0, medium: 0, hard: 0 };
  for (const t of tasks) byDiff[t.difficulty]++;
  console.log(`  Verteilung: leicht ${byDiff.easy}, mittel ${byDiff.medium}, schwer ${byDiff.hard}`);
}

main();
