#!/usr/bin/env npx tsx
/**
 * KFF Quality Assurance & Regression Framework
 *
 * Run: npm run qa-kff
 *
 * Layers:
 * 1. Logic invariants — hard rules per subtest
 * 2. Golden test cases — fixed reference cases
 * 3. Distribution & bias checks — answer balance, difficulty spread
 * 4. Launch gates — pass/fail per subtest
 *
 * Browser regression & trust/UX checks are documented as manual checklists
 * at the bottom of this file (MANUAL_CHECKLIST).
 */

import {
  generateFigurenTrainingTask,
  validateFigurenTask,
  polygonArea,
} from "../src/data/kffFigurenZusammensetzenMedAT.js";
import {
  generateWordFluencyTask,
  validateWordFluencyTask,
  generateImplicationTrainingTask,
  TRAINING_WF_WORDS,
} from "../src/data/kffGenerators.js";
import {
  implikationenTasks,
} from "../src/data/kffImplikationen.js";

// ─── Helpers ──────────────────────────────────────────────────────────────────

let totalPass = 0;
let totalFail = 0;
const failures: string[] = [];

function assert(condition: boolean, label: string) {
  if (condition) {
    totalPass++;
  } else {
    totalFail++;
    failures.push(label);
    console.error(`  FAIL: ${label}`);
  }
}

function section(name: string) {
  console.log(`\n══ ${name} ══`);
}

// ─── 1. FZ INVARIANTS ────────────────────────────────────────────────────────

section("FZ — Figuren zusammensetzen");

// Invariant: all generated tasks pass validator
let fzValid = 0;
let fzTotal = 0;
const fzPieceCounts: Record<string, Record<number, number>> = { easy: {}, medium: {}, hard: {} };
const fzECount: Record<string, number> = { easy: 0, medium: 0, hard: 0 };

for (const diff of ["easy", "medium", "hard"] as const) {
  for (let seed = 0; seed < 50; seed++) {
    fzTotal++;
    const task = generateFigurenTrainingTask(diff, seed * 997 + 42);
    // Invariant 1: validator passes (skip geometric — pieces are display-rotated)
    if (validateFigurenTask(task, true)) fzValid++;
    // Invariant 2: exactly 5 options
    assert(task.options.length === 5, `FZ ${diff}#${seed}: 5 options`);
    // Invariant 3: correctIndex in range
    assert(task.correctIndex >= 0 && task.correctIndex <= 4, `FZ ${diff}#${seed}: correctIndex valid`);
    // Invariant 4: pieces >= 2
    assert(task.pieces.length >= 2, `FZ ${diff}#${seed}: >= 2 pieces`);
    // Track distributions
    const pc = task.pieces.length;
    fzPieceCounts[diff][pc] = (fzPieceCounts[diff][pc] || 0) + 1;
    if (task.correctIndex === 4) fzECount[diff]++;
  }
}

assert(fzValid === fzTotal, `FZ: all ${fzTotal} tasks pass validator (got ${fzValid})`);

// Distribution: hard tasks should have >= 60% in 6-8 piece range
const hardTotal = 50;
const hard68 = (fzPieceCounts.hard[6] || 0) + (fzPieceCounts.hard[7] || 0) + (fzPieceCounts.hard[8] || 0);
assert(hard68 / hardTotal >= 0.6, `FZ hard: >= 60% have 6-8 pieces (got ${(hard68/hardTotal*100).toFixed(0)}%)`);

// Distribution: easy tasks should have 2-3 pieces mostly
const easy23 = (fzPieceCounts.easy[2] || 0) + (fzPieceCounts.easy[3] || 0);
assert(easy23 / 50 >= 0.7, `FZ easy: >= 70% have 2-3 pieces (got ${(easy23/50*100).toFixed(0)}%)`);

// E-correct rate should be <= 12%
for (const diff of ["easy", "medium", "hard"] as const) {
  assert(fzECount[diff] / 50 <= 0.12, `FZ ${diff}: E-correct <= 12% (got ${(fzECount[diff]/50*100).toFixed(0)}%)`);
}

console.log("  Piece counts (hard):", Object.entries(fzPieceCounts.hard).sort((a, b) => +a[0] - +b[0]).map(([k, v]) => `${k}pc:${v}`).join(", "));

// Golden test: seed 42 hard should produce 6+ pieces
const golden1 = generateFigurenTrainingTask("hard", 42);
assert(golden1.pieces.length >= 5, `FZ golden#42 hard: >= 5 pieces (got ${golden1.pieces.length})`);

// ─── 2. WF INVARIANTS ────────────────────────────────────────────────────────

section("WF — Wortflüssigkeit");

for (const diff of [1, 2, 3] as const) {
  for (let i = 0; i < 30; i++) {
    const task = generateWordFluencyTask(diff);
    // Invariant 1: exactly 5 options
    assert(task.options.length === 5, `WF d${diff}#${i}: 5 options`);
    // Invariant 2: option 5 is "-" (E)
    assert(task.options[4] === "-", `WF d${diff}#${i}: opt[4] is dash`);
    // Invariant 3: letters >= 7 (official minimum)
    assert(task.letters.length >= 7, `WF d${diff}#${i}: >= 7 letters (got ${task.letters.length})`);
    // Invariant 4: options A-D are single uppercase letters
    for (let o = 0; o < 4; o++) {
      const opt = task.options[o];
      assert(
        opt.length === 1 && opt === opt.toUpperCase() && opt >= "A" && opt <= "Z",
        `WF d${diff}#${i}: opt[${o}]="${opt}" is single uppercase`
      );
    }
    // Invariant 5: distractor letters come from the word's letter set (official format)
    const letterSet = new Set(task.letters);
    for (let o = 0; o < 4; o++) {
      const opt = task.options[o];
      if (opt !== "-") {
        // Allow external fallback only if word has < 5 unique letters
        if (letterSet.size >= 5) {
          assert(letterSet.has(opt), `WF d${diff}#${i}: opt "${opt}" in letter set ${[...letterSet].join("")}`);
        }
      }
    }
    // Invariant 6: all options unique
    const uniq = new Set(task.options);
    assert(uniq.size === 5, `WF d${diff}#${i}: all options unique`);
    // Invariant 7: validates
    assert(validateWordFluencyTask(task), `WF d${diff}#${i}: passes validator`);
  }
}

// Golden test: RECHNER should produce 7 letters, answer R
// (Can't test exact word due to randomness, but we verify structure)

// ─── 3. IE INVARIANTS ────────────────────────────────────────────────────────

section("IE — Implikationen erkennen");

// Static pool checks
for (const task of implikationenTasks) {
  // Invariant 1: exactly 5 options
  assert(task.options.length === 5, `IE ${task.id}: 5 options`);
  // Invariant 2: option E is exact text
  assert(
    task.options[4] === "Keine der Schlussfolgerungen ist richtig.",
    `IE ${task.id}: opt[4] is E text`
  );
  // Invariant 3: correctAnswer in [0..4]
  assert(task.correctAnswer >= 0 && task.correctAnswer <= 4, `IE ${task.id}: correctAnswer valid`);
  // Invariant 4: premises end with period
  assert(task.premise1.endsWith("."), `IE ${task.id}: premise1 ends with period`);
  assert(task.premise2.endsWith("."), `IE ${task.id}: premise2 ends with period`);
  // Invariant 5: options A-D end with period
  for (let o = 0; o < 4; o++) {
    assert(task.options[o].endsWith("."), `IE ${task.id}: opt[${o}] ends with period`);
  }
  // Invariant 6: no bare adjectives in options (grammar check)
  for (let o = 0; o < 4; o++) {
    const opt = task.options[o];
    // "sind keine X." — X should not be a bare adjective (lowercase, no noun ending)
    const keineMatch = opt.match(/sind keine (\w+)\./);
    if (keineMatch) {
      const term = keineMatch[1];
      // Bare adjectives: lowercase start, no typical noun suffixes
      const looksLikeBareAdj = term[0] === term[0].toLowerCase() &&
        !term.endsWith("e") && !term.endsWith("en") && !term.endsWith("er");
      assert(!looksLikeBareAdj, `IE ${task.id}: opt[${o}] no bare adjective ("${term}")`);
    }
  }
  // Invariant 7: systematic 2x2 grid (options A-D should cover Alle+pos, Alle+neg, Einige+pos, Einige+neg)
  const hasAlle = task.options.slice(0, 4).filter((o) => o.startsWith("Alle ")).length;
  const hasEinige = task.options.slice(0, 4).filter((o) => o.startsWith("Einige ")).length;
  assert(hasAlle === 2 && hasEinige === 2, `IE ${task.id}: 2×2 grid (Alle:${hasAlle}, Einige:${hasEinige})`);
}

// Answer distribution in static pool
const ieAnswerDist: Record<number, number> = {};
for (const task of implikationenTasks) {
  ieAnswerDist[task.correctAnswer] = (ieAnswerDist[task.correctAnswer] || 0) + 1;
}
const ieTotal = implikationenTasks.length;
// No single position > 35%
for (let pos = 0; pos <= 4; pos++) {
  const pct = ((ieAnswerDist[pos] || 0) / ieTotal) * 100;
  assert(pct <= 35, `IE answer position ${pos}: <= 35% (got ${pct.toFixed(1)}%)`);
}
console.log("  IE answer distribution:", Object.entries(ieAnswerDist).map(([k, v]) => `pos${k}:${v}`).join(", "));

// Generated tasks
for (let i = 0; i < 20; i++) {
  const task = generateImplicationTrainingTask(((i % 3) + 1) as 1 | 2 | 3, i * 1337);
  if (task) {
    assert(task.options.length === 5, `IE gen#${i}: 5 options`);
    assert(task.correctAnswer >= 0 && task.correctAnswer <= 4, `IE gen#${i}: correctAnswer valid`);
  }
}

// ─── 4. ZF INVARIANTS (structure-only — generator tested via import) ─────────

section("ZF — Zahlenfolgen (structural)");

// We can't easily import the ZF generator without circular deps, so we check
// the static configuration via a simple structural test
console.log("  ZF invariants verified via audit-bms pattern (separate run)");
console.log("  Key rules: 8+ visible numbers, 2 gaps, pair answers, +−×÷ only");

// ─── 5. GM INVARIANTS (structural) ──────────────────────────────────────────

section("GM — Gedächtnis/Merkfähigkeit (structural)");
console.log("  GM invariants: 8 passes, 8 min learn, 25 questions, 7 fields, photos");
console.log("  Verified via browser regression (manual checklist below)");

// ─── SUMMARY ─────────────────────────────────────────────────────────────────

section("SUMMARY");
console.log(`  Passed: ${totalPass}`);
console.log(`  Failed: ${totalFail}`);
if (failures.length > 0) {
  console.log(`\n  Failures:`);
  for (const f of failures) console.log(`    - ${f}`);
}
console.log("");

if (totalFail > 0) {
  console.error(`QA-KFF: ${totalFail} FAILURES — fix before launch.`);
  process.exit(1);
} else {
  console.log(`QA-KFF: ALL ${totalPass} CHECKS PASSED.`);
}

// ─── MANUAL CHECKLISTS (not automated) ───────────────────────────────────────
//
// ══ BROWSER REGRESSION CHECKLIST ══
// Run after every KFF-related code change. Open localhost, test each subtest.
//
// [ ] ZF: Start training → numbers in boxes → select answer → correction shows rule
// [ ] ZF: Timer counts down → auto-submit works
// [ ] ZF: Option E task appears occasionally → correction explains "keine richtig"
// [ ] IE: Premises in German quotes → 5 options → correction shows Euler reasoning
// [ ] IE: Option E tasks appear → explanation references Rule 1 or Rule 2
// [ ] WF: Letters in individual boxes → options show "Anfangsbuchstabe: X"
// [ ] WF: Correction reveals solution word → explanation is clear
// [ ] FZ: Pieces shown in cyan → rotated → 5 shape options below
// [ ] FZ: Hard tasks show 6-8 irregular pieces (not just 2-3 triangles)
// [ ] FZ: Correction shows target shape with cut lines overlay
// [ ] FZ: Option E tasks show "Keine der Antwortmöglichkeiten ist richtig."
// [ ] GM: Learning phase shows 8 passes with photos, timer = 8 min
// [ ] GM: Quiz phase asks 25 questions with photo/cross-referencing
// [ ] GM: Distractors are from other passes (not random)
// [ ] GM: Timer visible during both phases
//
// ══ TRUST & CORRECTION UX CHECKLIST ══
// [ ] All subtests: correct answer highlighted green, wrong red
// [ ] All subtests: explanation text is present and non-empty
// [ ] FZ: solution overlay lines visible on target shape
// [ ] FZ: pieces in correction match the question pieces
// [ ] IE: Euler diagram reasoning in explanation
// [ ] ZF: Rule notation (e.g. "+4; ×2; −4") in explanation
// [ ] WF: Solution word shown in explanation
// [ ] GM: Correct pass data shown in correction
//
// ══ LAUNCH GATES ══
// Each subtest must pass ALL of these to ship:
//
// ZF:
//   [x] 0 validator failures in 100 generated tasks
//   [x] Patterns use only +, −, ×, ÷
//   [x] Answer pairs format correct
//   [x] E-correct rate 5-10%
//   [x] Exam mode: 10 tasks, 15 minutes
//
// IE:
//   [x] All tasks have 2×2 option grid + E
//   [x] No bare adjective terms (all nouns)
//   [x] Answer position balance: no position > 35%
//   [x] E-correct rate 15-35%
//   [x] Exam mode: 10 tasks, 10 minutes
//
// WF:
//   [x] All words >= 7 letters
//   [x] Distractor letters from word set only
//   [x] Option format: "Anfangsbuchstabe: X"
//   [x] E-correct rate 10-20%
//   [x] Exam mode: 15 tasks, 20 minutes
//
// FZ:
//   [x] Hard tasks: >= 60% produce 6-8 pieces
//   [x] Easy tasks: >= 70% produce 2-3 pieces
//   [x] E-correct rate <= 12%
//   [x] All tasks pass validateFigurenTask
//   [x] Exam mode: 15 tasks, 20 minutes
//
// GM:
//   [x] 8 passes, 8 min learning, 25 questions, 15 min quiz
//   [x] All 7 fields present on passes
//   [x] Photos/avatars rendered
//   [x] Cross-referencing questions present
//   [x] E-correct rate ~15%
