/**
 * Generiert ca. 1000 Zahlenfolgen-Aufgaben (MedAT-Format) und schreibt sie in:
 *   - docs/zahlenfolgen-pool-1000.json (JSON)
 *   - src/data/kffZahlenfolgen1000.ts (TypeScript import)
 *
 * Validierung:
 *   - Jede Aufgabe wird über validateSequenceTask geprüft
 *   - ops.length >= 2 (keine Single-Operator-Aufgaben)
 *   - Sequence hat 7 Zahlen + 2 "?" = 9 Elemente
 *   - buildSequence reproduziert die Folge exakt
 *   - correctNext stimmt mit der korrekten Option überein
 *   - Alle Werte sind ganze Zahlen
 *   - 5 Optionen (A-E), E = "Keine der Antwortmöglichkeiten ist richtig"
 *   - Keine doppelten Sequenzen im finalen Pool
 *
 * Ausführung: npx tsx scripts/generate-zahlenfolgen-pool.mts [--count 1000]
 */
import { writeFileSync } from "fs";
import { resolve } from "path";
import {
  generateSequenceTask,
  validateSequenceTask,
  buildSequence,
  type SequenceTask,
  type DifficultyLevel,
} from "../src/data/kffZahlenfolgenMedAT";

const DEFAULT_COUNT = 1000;
const OVER_GENERATE = 1200; // generate extra to account for filtering
const LEVELS: DifficultyLevel[] = ["easy", "medium", "hard"];

/** Additional strict validation beyond validateSequenceTask */
function strictValidate(task: SequenceTask): { ok: boolean; reason?: string } {
  // 1. Sequence must have exactly 9 elements (7 numbers + 2 "?")
  if (task.sequence.length !== 9) {
    return { ok: false, reason: `sequence length ${task.sequence.length} !== 9` };
  }
  const numbers = task.sequence.filter((x): x is number => typeof x === "number");
  const gaps = task.sequence.filter((x) => x === "?");
  if (numbers.length !== 7) {
    return { ok: false, reason: `visible numbers ${numbers.length} !== 7` };
  }
  if (gaps.length !== 2) {
    return { ok: false, reason: `gaps ${gaps.length} !== 2` };
  }

  // 2. All values must be integers (visible + correctNext)
  for (const n of numbers) {
    if (!Number.isInteger(n)) {
      return { ok: false, reason: `non-integer in sequence: ${n}` };
    }
  }
  if (!Number.isInteger(task.correctNext[0]) || !Number.isInteger(task.correctNext[1])) {
    return { ok: false, reason: `non-integer in correctNext: ${task.correctNext}` };
  }

  // 3. Must have 5 options
  if (task.options.length !== 5) {
    return { ok: false, reason: `options count ${task.options.length} !== 5` };
  }

  // 4. Option E must be the "Keine..." text
  const optE = task.options.find((o) => o.key === "E");
  if (!optE || !optE.text || !optE.text.includes("Keine")) {
    return { ok: false, reason: `option E missing or wrong text` };
  }

  // 5. correctOptionId must be valid
  if (!["A", "B", "C", "D", "E"].includes(task.correctOptionId)) {
    return { ok: false, reason: `invalid correctOptionId: ${task.correctOptionId}` };
  }

  // 6. If correctOptionId is A-D, the pointed option must match correctNext
  if (task.correctOptionId !== "E") {
    const correctOpt = task.options.find((o) => o.key === task.correctOptionId);
    if (!correctOpt || !correctOpt.value) {
      return { ok: false, reason: `correct option ${task.correctOptionId} has no value` };
    }
    if (
      correctOpt.value[0] !== task.correctNext[0] ||
      correctOpt.value[1] !== task.correctNext[1]
    ) {
      return {
        ok: false,
        reason: `correctOptionId ${task.correctOptionId} value [${correctOpt.value}] !== correctNext [${task.correctNext}]`,
      };
    }
  }

  // 7. If correctOptionId is E, no A-D option should match correctNext
  if (task.correctOptionId === "E") {
    for (const opt of task.options) {
      if (opt.key === "E") continue;
      if (
        opt.value &&
        opt.value[0] === task.correctNext[0] &&
        opt.value[1] === task.correctNext[1]
      ) {
        return { ok: false, reason: `E is correct but option ${opt.key} matches correctNext` };
      }
    }
  }

  // 8. If ops exist, they must reproduce the sequence via buildSequence
  if (task.ops && task.ops.length > 0) {
    const full = buildSequence(numbers[0]!, task.ops, 9);
    // Check all 7 visible numbers match
    for (let i = 0; i < 7; i++) {
      if (full[i] !== numbers[i]) {
        return {
          ok: false,
          reason: `buildSequence mismatch at pos ${i}: got ${full[i]}, expected ${numbers[i]}`,
        };
      }
    }
    // Check correctNext matches
    if (full[7] !== task.correctNext[0] || full[8] !== task.correctNext[1]) {
      return {
        ok: false,
        reason: `buildSequence correctNext mismatch: [${full[7]},${full[8]}] vs [${task.correctNext}]`,
      };
    }
    // Check all values in full sequence are integers
    for (const v of full) {
      if (!Number.isInteger(v)) {
        return { ok: false, reason: `non-integer in built sequence: ${v}` };
      }
    }
  }

  // 9. ops must have length >= 2 (NO single-operator tasks)
  // For tasks without ops (non-periodic patterns), we accept them since they
  // are inherently multi-step (fibonacci, interleaved, growing-diff, quadratic)
  if (task.ops && task.ops.length < 2) {
    return { ok: false, reason: `single-operator task (ops.length=${task.ops.length})` };
  }

  // 10. Rule label must not contain "durchgehend" (single-op indicator)
  if (task.rule && task.rule.includes("durchgehend")) {
    return { ok: false, reason: `rule contains "durchgehend" (single-op): ${task.rule}` };
  }

  return { ok: true };
}

function sequenceKey(task: SequenceTask): string {
  const numbers = task.sequence.filter((x): x is number => typeof x === "number");
  return numbers.join(",") + "|" + task.correctNext.join(",");
}

function main() {
  const args = process.argv.slice(2);
  const countIdx = args.indexOf("--count");
  const targetCount =
    countIdx >= 0 ? parseInt(args[countIdx + 1] ?? String(DEFAULT_COUNT), 10) : DEFAULT_COUNT;

  const baseSeed = 20260404; // today's date as seed for reproducibility
  const allTasks: SequenceTask[] = [];
  const seenSequences = new Set<string>();

  let totalGenerated = 0;
  let failedValidate = 0;
  let failedStrict = 0;
  let duplicates = 0;
  const strictReasons = new Map<string, number>();

  // Generate more than needed to account for filtering
  const maxAttempts = Math.max(OVER_GENERATE * 3, targetCount * 4);

  for (let i = 0; i < maxAttempts && allTasks.length < targetCount; i++) {
    const diff = LEVELS[i % 3]!;
    const seed = baseSeed + i * 7919;
    const task = generateSequenceTask(diff, seed);
    totalGenerated++;

    // Step 1: built-in validation
    if (!validateSequenceTask(task)) {
      failedValidate++;
      continue;
    }

    // Step 2: strict validation
    const strict = strictValidate(task);
    if (!strict.ok) {
      failedStrict++;
      const key = strict.reason?.split(":")[0] ?? "unknown";
      strictReasons.set(key, (strictReasons.get(key) ?? 0) + 1);
      continue;
    }

    // Step 3: deduplication by sequence content
    const key = sequenceKey(task);
    if (seenSequences.has(key)) {
      duplicates++;
      continue;
    }
    seenSequences.add(key);

    // Assign stable pool ID
    task.id = `zf-pool-${String(allTasks.length + 1).padStart(4, "0")}`;
    allTasks.push(task);
  }

  // --- Statistics ---
  const byDiff = { easy: 0, medium: 0, hard: 0 };
  const byPattern: Record<string, number> = {};
  let eCorrectCount = 0;
  for (const t of allTasks) {
    byDiff[t.difficulty]++;
    if (t.correctOptionId === "E") eCorrectCount++;
    // Categorize pattern type from rule label
    let pattern = "periodic";
    if (t.rule.includes("Verschachtelt")) pattern = "interleaved";
    else if (t.rule.includes("Differenz")) pattern = "growing-diff/quadratic";
    else if (t.rule.includes("Fibonacci") || t.rule.includes("nächste =")) pattern = "fibonacci";
    else if (t.ops && t.ops.length >= 2) pattern = "periodic";
    byPattern[pattern] = (byPattern[pattern] ?? 0) + 1;
  }

  console.log("\n=== Zahlenfolgen Pool Generation Summary ===");
  console.log(`Total generated:     ${totalGenerated}`);
  console.log(`Failed validation:   ${failedValidate}`);
  console.log(`Failed strict:       ${failedStrict}`);
  if (strictReasons.size > 0) {
    console.log("  Strict failure reasons:");
    for (const [reason, count] of [...strictReasons.entries()].sort((a, b) => b[1] - a[1])) {
      console.log(`    ${reason}: ${count}`);
    }
  }
  console.log(`Duplicates removed:  ${duplicates}`);
  console.log(`Final pool size:     ${allTasks.length}`);
  console.log(
    `Difficulty: easy=${byDiff.easy}, medium=${byDiff.medium}, hard=${byDiff.hard}`
  );
  console.log(`Pattern types: ${JSON.stringify(byPattern)}`);
  console.log(`E-correct tasks:     ${eCorrectCount}`);

  // --- Sample tasks ---
  for (const diff of LEVELS) {
    const samples = allTasks.filter((t) => t.difficulty === diff).slice(0, 3);
    console.log(`\n--- Sample ${diff} tasks ---`);
    for (const s of samples) {
      const nums = s.sequence.filter((x): x is number => typeof x === "number");
      console.log(
        `  ${s.id}: [${nums.join(", ")}, ?, ?] -> [${s.correctNext}] | ops=${s.ops ? s.ops.length : "none"} | correct=${s.correctOptionId} | rule="${s.rule}"`
      );
    }
  }

  if (allTasks.length < targetCount) {
    console.warn(
      `\nWARNING: Only ${allTasks.length} valid unique tasks (target was ${targetCount})`
    );
  }

  // --- Write JSON ---
  const jsonPath = resolve(process.cwd(), "docs/zahlenfolgen-pool-1000.json");
  writeFileSync(jsonPath, JSON.stringify(allTasks, null, 0), "utf-8");
  console.log(`\nJSON written to: ${jsonPath}`);

  // --- Write TypeScript ---
  const tsPath = resolve(process.cwd(), "src/data/kffZahlenfolgen1000.ts");
  const tsContent =
    `// Auto-generated — ${allTasks.length} validated unique Zahlenfolgen tasks.\n` +
    `// Generated: ${new Date().toISOString()}\n` +
    `// Validation: all tasks pass validateSequenceTask + strict checks.\n` +
    `// No single-operator tasks. No duplicate sequences.\n` +
    `\n` +
    `import type { SequenceTask } from "./kffZahlenfolgenMedAT";\n` +
    `\n` +
    `export const ZAHLENFOLGEN_POOL: SequenceTask[] = ${JSON.stringify(allTasks, null, 2)};\n`;
  writeFileSync(tsPath, tsContent, "utf-8");
  console.log(`TypeScript written to: ${tsPath}`);
}

main();
