/**
 * Generate 100 Gedächtnis & Merkfähigkeit questions using the existing generator.
 * 4 sets of 8 passes each, 25 questions per set = 100 questions.
 *
 * Usage: npx tsx scripts/generate-gm-100.mts
 */

import { writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import {
  generateAllergyPasses,
  generateGedaechtnisQuestionsFromPasses,
} from "../src/data/kffGenerators.js";
import {
  validateGedaechtnisQuestion,
  type GedaechtnisQuestion,
  type AllergyPass,
} from "../src/data/kffGedaechtnisMedAT.js";

const SETS = 4;
const PASSES_PER_SET = 8;
const QUESTIONS_PER_SET = 25;
const OUTPUT_PATH = resolve(
  dirname(new URL(import.meta.url).pathname),
  "../docs/gm-100-test.json"
);

type SetResult = {
  setIndex: number;
  passes: AllergyPass[];
  questions: GedaechtnisQuestion[];
};

const allSets: SetResult[] = [];
const allQuestions: GedaechtnisQuestion[] = [];
let validCount = 0;
let invalidCount = 0;

// Builder type distribution (extracted from question text patterns)
const builderTypeCount = new Map<string, number>();
let eCorrectCount = 0;

function classifyBuilderType(q: GedaechtnisQuestion): string {
  const text = q.question;
  if (q.photoUrl) {
    if (text.includes("heißt")) return "photo->name";
    if (text.includes("Blutgruppe")) return "photo->bloodGroup";
    if (text.includes("Geburtstag")) return "photo->birthdate";
    if (text.includes("Allergie")) return "photo->allergies";
    if (text.includes("Land")) return "photo->country";
    return "photo->other";
  }
  if (text.startsWith("Wann hat") && text.includes("Geburtstag")) return "name->birthdate";
  if (text.includes("Blutgruppe hat") && !text.includes("Person aus") && !text.includes("Person mit")) return "name->bloodGroup";
  if (text.includes("Ausweisnummer gehört")) return "name->passportNr";
  if (text.includes("Land stammt") && !text.includes("Person")) return "name->country";
  if (text.includes("Allergie/n hat") && text.includes("hat ")) {
    if (text.includes("Person aus")) return "country->allergies";
    if (text.includes("Person mit der Blutgruppe")) return "bloodGroup->allergies";
    return "name->allergies";
  }
  if (text.includes("gehört die Ausweisnummer")) return "passportNr->name";
  if (text.includes("allergisch gegen")) return "allergy->name";
  if (text.includes("kommt aus")) return "country->name";
  if (text.includes("Wer hat am")) return "birthdate->name";
  if (text.includes("Wer hat die Blutgruppe")) return "bloodGroup->name";
  if (text.includes("Blutgruppe hat die Person aus")) return "country->bloodGroup";
  if (text.includes("Wem gehört")) return "passportNr->name";
  return "other";
}

console.log(`Generating ${SETS} sets x ${QUESTIONS_PER_SET} questions = ${SETS * QUESTIONS_PER_SET} total...\n`);

for (let i = 0; i < SETS; i++) {
  const passes = generateAllergyPasses(PASSES_PER_SET);
  const questions = generateGedaechtnisQuestionsFromPasses(passes, QUESTIONS_PER_SET);

  for (const q of questions) {
    const valid = validateGedaechtnisQuestion(q);
    if (valid) validCount++;
    else invalidCount++;

    if (q.correctIndex === 4) eCorrectCount++;

    const bType = classifyBuilderType(q);
    builderTypeCount.set(bType, (builderTypeCount.get(bType) ?? 0) + 1);
  }

  allQuestions.push(...questions);
  allSets.push({ setIndex: i + 1, passes, questions });

  console.log(`  Set ${i + 1}: ${passes.length} passes, ${questions.length} questions generated`);
}

// Check uniqueness by question text
const uniqueTexts = new Set(allQuestions.map((q) => q.question));

// Write output
const output = {
  generatedAt: new Date().toISOString(),
  totalQuestions: allQuestions.length,
  sets: allSets.map((s) => ({
    setIndex: s.setIndex,
    passCount: s.passes.length,
    passes: s.passes,
    questionCount: s.questions.length,
    questions: s.questions,
  })),
};

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), "utf-8");

// Report
console.log(`\n========== RESULTS ==========`);
console.log(`Total questions generated: ${allQuestions.length}`);
console.log(`Valid questions:           ${validCount}`);
console.log(`Invalid questions:         ${invalidCount}`);
console.log(`Unique question texts:     ${uniqueTexts.size} / ${allQuestions.length}`);
console.log(`E-correct ("Keine..."):    ${eCorrectCount} / ${allQuestions.length} (${((eCorrectCount / allQuestions.length) * 100).toFixed(1)}%)`);

console.log(`\n--- Builder Type Distribution ---`);
const sorted = [...builderTypeCount.entries()].sort((a, b) => b[1] - a[1]);
for (const [type, count] of sorted) {
  console.log(`  ${type.padEnd(25)} ${count}`);
}

console.log(`\nOutput written to: ${OUTPUT_PATH}`);
