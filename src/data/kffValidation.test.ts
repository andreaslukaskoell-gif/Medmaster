/**
 * Globale KFF-Validierungstests.
 * Prüft für jeden Aufgabentyp:
 * 1) Genau 1 richtige Lösung
 * 2) Keine Ambiguität
 * 3) Keine Wiederholung identischer Muster (wo anwendbar)
 *
 * Ausführen: npx tsx src/data/kffValidation.test.ts
 * Oder in Dev: import { runAllKFFValidationTests } from "@/data/kffValidation.test"
 */

import { validateKFFTask, filterValidSequenceTasks } from "./kffValidation";
import { OFFICIAL_ZF_EXAMPLES } from "./kffZahlenfolgenMedAT";
import { generateSequenceTask } from "./kffZahlenfolgenMedAT";
import { OFFICIAL_FZ_EXAMPLES } from "./kffFigurenZusammensetzenMedAT";
import { generateFigurenTrainingTask } from "./kffFigurenZusammensetzenMedAT";
import { OFFICIAL_WF_EXAMPLES } from "./kffWortfluessigkeitMedAT";
import { generateWordFluencyTask } from "./kffGenerators";
import { OFFICIAL_IMPLICATION_EXAMPLES } from "./kffImplikationen";
import { generateImplicationTrainingTask } from "./kffGenerators";
import { OFFICIAL_GM_EXAMPLES } from "./kffGedaechtnisMedAT";
import { generateAllergyPasses, generateGedaechtnisQuestionsFromPasses } from "./kffGenerators";

let passed = 0;
let failed = 0;

function ok(name: string): void {
  passed++;
  console.log(`  ✅ ${name}`);
}

function fail(name: string, reason: string): void {
  failed++;
  console.log(`  ❌ ${name}: ${reason}`);
}

// --- Zahlenfolgen ---
function testZahlenfolgen(): void {
  console.log("\n--- Zahlenfolgen ---");
  for (const task of OFFICIAL_ZF_EXAMPLES) {
    const r = validateKFFTask(task, "zahlenfolgen");
    if (r.ok) ok(`OFFICIAL ${task.id}`);
    else fail(`OFFICIAL ${task.id}`, r.reason);
  }
  for (let i = 0; i < 5; i++) {
    const task = generateSequenceTask("medium", 1000 + i);
    const r = validateKFFTask(task, "zahlenfolgen");
    if (r.ok) ok(`generated medium ${i}`);
    else fail(`generated medium ${i}`, r.reason);
  }
}

// --- Figuren ---
function testFiguren(): void {
  console.log("\n--- Figuren zusammensetzen ---");
  for (const task of OFFICIAL_FZ_EXAMPLES) {
    const r = validateKFFTask(task, "figuren");
    if (r.ok) ok(`OFFICIAL ${task.id}`);
    else fail(`OFFICIAL ${task.id}`, r.reason);
  }
  for (let i = 0; i < 5; i++) {
    const task = generateFigurenTrainingTask("medium", 2000 + i);
    const r = validateKFFTask(task, "figuren");
    if (!r.ok) {
      fail(`generated medium ${i}`, r.reason);
      continue;
    }
    // Duplikat-Guard liegt im Generator (taskFingerprint); hier nur Validierung
    ok(`generated medium ${i}`);
  }
}

// --- Wortflüssigkeit ---
function testWortfluessigkeit(): void {
  console.log("\n--- Wortflüssigkeit ---");
  for (const task of OFFICIAL_WF_EXAMPLES) {
    const r = validateKFFTask(task, "wortflüssigkeit");
    if (r.ok) ok(`OFFICIAL ${task.id ?? "wf"}`);
    else fail(`OFFICIAL ${task.id ?? "wf"}`, r.reason);
  }
  for (let i = 0; i < 5; i++) {
    let task = generateWordFluencyTask(2);
    let r = validateKFFTask(task, "wortflüssigkeit");
    let attempts = 0;
    while (!r.ok && attempts < 10) {
      task = generateWordFluencyTask(2);
      r = validateKFFTask(task, "wortflüssigkeit");
      attempts++;
    }
    if (r.ok) ok(`generated diff 2 #${i}`);
    else fail(`generated diff 2 #${i}`, r.reason);
  }
}

// --- Implikationen ---
function testImplikationen(): void {
  console.log("\n--- Implikationen ---");
  for (const task of OFFICIAL_IMPLICATION_EXAMPLES) {
    const r = validateKFFTask(task, "implikationen");
    if (r.ok) ok(`OFFICIAL ${task.id}`);
    else fail(`OFFICIAL ${task.id}`, r.reason);
  }
  for (let i = 0; i < 5; i++) {
    const task = generateImplicationTrainingTask(2);
    const r = validateKFFTask(task, "implikationen");
    if (r.ok) ok(`generated diff 2 #${i}`);
    else fail(`generated diff 2 #${i}`, r.reason);
  }
}

// --- Merkfähigkeit ---
function testMerkfaehigkeit(): void {
  console.log("\n--- Merkfähigkeit ---");
  if (OFFICIAL_GM_EXAMPLES.passes.length > 0 && OFFICIAL_GM_EXAMPLES.questions.length > 0) {
    for (const q of OFFICIAL_GM_EXAMPLES.questions) {
      const r = validateKFFTask(q, "gedaechtnis");
      if (r.ok) ok(`OFFICIAL ${q.id}`);
      else fail(`OFFICIAL ${q.id}`, r.reason);
    }
  } else {
    ok("OFFICIAL (keine Beispiele geladen – OK)");
  }
  const passes = generateAllergyPasses(6);
  const questions = generateGedaechtnisQuestionsFromPasses(passes, 10);
  for (let i = 0; i < Math.min(5, questions.length); i++) {
    const q = questions[i]!;
    const r = validateKFFTask(q, "gedaechtnis");
    if (r.ok) ok(`generated #${i}`);
    else fail(`generated #${i}`, r.reason);
  }
}

// --- filterValidKFFTasks ---
function testFilterValid(): void {
  console.log("\n--- filterValidKFFTasks ---");
  const mixed = [...OFFICIAL_ZF_EXAMPLES, generateSequenceTask("easy", 999)];
  const validZF = filterValidSequenceTasks(mixed);
  if (validZF.length >= OFFICIAL_ZF_EXAMPLES.length) ok("Zahlenfolgen Filter");
  else
    fail(
      "Zahlenfolgen Filter",
      `erwartet >= ${OFFICIAL_ZF_EXAMPLES.length}, got ${validZF.length}`
    );
}

export function runAllKFFValidationTests(): boolean {
  console.log("KFF globale Validierungstests");
  console.log("=============================");
  passed = 0;
  failed = 0;

  testZahlenfolgen();
  testFiguren();
  testWortfluessigkeit();
  testImplikationen();
  testMerkfaehigkeit();
  testFilterValid();

  console.log("\n=============================");
  console.log(`Ergebnis: ${passed} bestanden, ${failed} fehlgeschlagen`);
  return failed === 0;
}

// Ausführen, wenn Datei direkt ausgeführt wird
const isMain = typeof process !== "undefined" && process.argv[1]?.endsWith("kffValidation.test.ts");
if (isMain) {
  runAllKFFValidationTests();
}
