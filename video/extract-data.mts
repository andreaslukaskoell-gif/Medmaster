/**
 * Extract BMS data from the app source and write JSON for Remotion.
 * Run via: npx tsx --tsconfig tsconfig.app.json video/extract-data.mts
 */
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, ".data");
if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

// Uses @/* alias resolved via tsconfig.app.json
const { allBmsQuestions } = await import("@/data/bms/index.js");

// Pick questions with explanation and 5 options
const good = allBmsQuestions.filter(
  (q: any) => q.explanation && q.explanation.length > 20 && q.options.length === 5
);

// Map subject from id prefix
function subjectFromId(id: string): string {
  if (id.startsWith("bio")) return "Biologie";
  if (id.startsWith("ch")) return "Chemie";
  if (id.startsWith("ph")) return "Physik";
  if (id.startsWith("ma")) return "Mathematik";
  return "BMS";
}

const subjectCounts: Record<string, number> = {};
for (const q of allBmsQuestions) {
  const s = subjectFromId((q as any).id);
  subjectCounts[s] = (subjectCounts[s] || 0) + 1;
}

const data = {
  questions: good.map((q: any) => ({
    id: q.id,
    subject: subjectFromId(q.id),
    text: q.text,
    options: q.options,
    correctOptionId: q.correctOptionId,
    explanation: q.explanation,
  })),
  stats: {
    total: allBmsQuestions.length,
    ...subjectCounts,
  },
};

writeFileSync(resolve(OUT, "bms.json"), JSON.stringify(data, null, 2));
console.log(`Extracted ${data.questions.length} questions from ${allBmsQuestions.length} total`);

// Extract Implikationen
const { implikationenTasks } = await import("@/data/kffImplikationen.js");
const impData = (implikationenTasks as any[]).map((t: any) => ({
  id: t.id,
  premise1: t.premise1,
  premise2: t.premise2,
  options: t.options,
  correctAnswer: t.correctAnswer,
  explanation: t.explanation,
  difficulty: t.difficulty,
}));
writeFileSync(resolve(OUT, "implikationen.json"), JSON.stringify(impData, null, 2));
console.log(`Extracted ${impData.length} Implikationen tasks`);

console.log(`Output: ${OUT}`);
