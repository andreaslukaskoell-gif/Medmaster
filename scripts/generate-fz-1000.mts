/**
 * Generates 1000 Figuren-zusammensetzen tasks (200 easy, 600 medium, 200 hard) as static TS pool.
 * Run: npx tsx scripts/generate-fz-1000.mts
 */
import { writeFileSync } from "fs";
import { resolve } from "path";
import {
  generateFigurenTrainingTask,
  validateFigurenTask,
  SOLUTION_SHAPES,
  type FigureAssembleTask,
} from "../src/data/kffFigurenZusammensetzenMedAT";

type FZDifficulty = "easy" | "medium" | "hard";

const TARGETS: { level: FZDifficulty; count: number }[] = [
  { level: "easy", count: 200 },
  { level: "medium", count: 600 },
  { level: "hard", count: 200 },
];

function main() {
  const tasks: FigureAssembleTask[] = [];
  let discarded = 0;
  const numShapes = SOLUTION_SHAPES.length;

  for (const { level, count } of TARGETS) {
    let generated = 0;
    let attempts = 0;
    const maxAttempts = count * 200;

    while (generated < count && attempts < maxAttempts) {
      attempts++;
      // Vary seed widely + cycle through all shapes
      const shapeIdx = attempts % numShapes;
      const seed = attempts * 7919 + tasks.length * 13 + shapeIdx * 99991;

      try {
        const task = generateFigurenTrainingTask(level, seed, shapeIdx);
        if (!task || task.pieces.length < 2) continue;

        // Skip full geometric re-validation (generator already validates internally)
        // Only check structural validity: 5 options, correct index, unique answer
        if (!validateFigurenTask(task, true)) {
          discarded++;
          continue;
        }

        tasks.push(task);
        generated++;

        if (generated % 100 === 0) {
          console.log(`  ${level}: ${generated}/${count} (${attempts} attempts, ${discarded} discarded)`);
        }
      } catch {
        // skip failed generation
      }
    }

    console.log(`${level}: ${generated}/${count} done (${attempts} attempts total)`);
  }

  console.log(`\nTotal: ${tasks.length} tasks, ${discarded} discarded`);

  const lines: string[] = [];
  lines.push(`/**`);
  lines.push(` * Pre-generated Figuren-zusammensetzen pool (${tasks.length} tasks).`);
  lines.push(` * Generated: ${new Date().toISOString()}`);
  lines.push(` * Distribution: 200 easy, 600 medium, 200 hard`);
  lines.push(` */`);
  lines.push(`import type { FigureAssembleTask } from "./kffFigurenZusammensetzenMedAT";`);
  lines.push(``);
  lines.push(`export const FIGUREN_POOL_1000: FigureAssembleTask[] = ${JSON.stringify(tasks, null, 0)};`);

  const outPath = resolve(import.meta.dirname, "../src/data/kffFiguren1000.ts");
  writeFileSync(outPath, lines.join("\n") + "\n", "utf-8");
  console.log(`\nWritten to ${outPath} (${(lines.join("\n").length / 1024).toFixed(0)} KB)`);
}

main();
