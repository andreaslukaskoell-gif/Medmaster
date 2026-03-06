/**
 * Extract BMS + KFF data from the app source and write JSON for Remotion.
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

// Extract Zahlenfolgen (generate a pool of 50)
const { generateZahlenfolge } = await import("@/data/kffGenerators.js");
const zfPool: any[] = [];
for (let i = 0; i < 50; i++) {
  try {
    const diff = (["leicht", "mittel", "schwer"] as const)[i % 3];
    const zf = (generateZahlenfolge as any)(diff);
    zfPool.push({
      sequence: zf.sequence,
      answer: zf.correctPair[0],
      answerPair: zf.correctPair,
      rule: zf.explanation,
    });
  } catch {}
}
writeFileSync(resolve(OUT, "zahlenfolgen.json"), JSON.stringify(zfPool, null, 2));
console.log(`Generated ${zfPool.length} Zahlenfolgen`);

// Extract Wortfluessigkeit (generate a pool of 50)
const { generateWordFluencyTask } = await import("@/data/kffGenerators.js");
const wfPool: any[] = [];
for (let i = 0; i < 50; i++) {
  try {
    const diff = ([1, 2, 3] as const)[i % 3];
    const wf = (generateWordFluencyTask as any)(diff);
    if (wf) {
      wfPool.push({
        letters: wf.letters,
        word: wf.solutionWord,
        hint: `Anfangsbuchstabe: ${wf.solutionWord[0]}`,
      });
    }
  } catch {}
}
writeFileSync(resolve(OUT, "wortfluessigkeit.json"), JSON.stringify(wfPool, null, 2));
console.log(`Generated ${wfPool.length} Wortfluessigkeit tasks`);

// Extract RichtigOderFalsch from BMS (true/false statements from explanations)
const rofPool: any[] = [];
const shuffled = [...good].sort(() => Math.random() - 0.5);
for (let i = 0; i + 2 < shuffled.length && rofPool.length < 30; i += 3) {
  const stmts = shuffled.slice(i, i + 3).map((q: any) => {
    // Use the correct option text as a true statement, or a wrong one as false
    const correctOpt = q.options.find((o: any) => o.id === q.correctOptionId);
    const wrongOpt = q.options.find((o: any) => o.id !== q.correctOptionId);
    const useCorrect = Math.random() > 0.4;
    return {
      text: useCorrect ? correctOpt.text : wrongOpt.text,
      correct: useCorrect,
    };
  });
  rofPool.push({ statements: stmts });
}
writeFileSync(resolve(OUT, "rof.json"), JSON.stringify(rofPool, null, 2));
console.log(`Generated ${rofPool.length} RichtigOderFalsch sets`);

console.log(`Output: ${OUT}`);
