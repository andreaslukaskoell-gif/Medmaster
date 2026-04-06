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

// Extract Figuren zusammensetzen (generate a pool of 30 pre-rendered tasks)
const {
  generateFigurenTrainingTask,
  polygonToPathScaledToViewBox,
  layoutPiecesCompact,
  isOptionE,
} = await import("@/data/kffFigurenZusammensetzenMedAT.js");

const fzPool: any[] = [];
const difficulties = ["easy", "medium", "hard"] as const;
for (let i = 0; i < 30; i++) {
  try {
    const diff = difficulties[i % 3]!;
    const task = (generateFigurenTrainingTask as any)(diff, Date.now() + i * 7919);
    // Pre-render all SVG paths so the Remotion component doesn't need the generator
    const piecesLayout = (layoutPiecesCompact as any)(task.pieces);
    const optionPaths = task.options.map((opt: any) => {
      if ((isOptionE as any)(opt)) return null;
      return (polygonToPathScaledToViewBox as any)(opt, 200);
    });
    fzPool.push({
      piecePaths: task.pieces.map((p: any) => (polygonToPathScaledToViewBox as any)(p, 200)),
      piecesLayout,
      optionPaths,
      correctIndex: task.correctIndex,
      explanation: task.explanation,
    });
  } catch {}
}
writeFileSync(resolve(OUT, "figuren.json"), JSON.stringify(fzPool, null, 2));
console.log(`Generated ${fzPool.length} Figuren tasks`);

// Extract CheatSheet data — group BMS questions by chapter, pick key facts
const cheatsheetPool: any[] = [];
const byChapter: Record<string, any[]> = {};
for (const q of good) {
  const qAny = q as any;
  const chapter = qAny.chapter || "unknown";
  if (!byChapter[chapter]) byChapter[chapter] = [];
  byChapter[chapter].push(qAny);
}
for (const [chapter, questions] of Object.entries(byChapter)) {
  if (questions.length < 5) continue;
  // Pick 5 questions with good explanations as "facts"
  const picked = questions
    .filter((q: any) => q.explanation && q.explanation.length > 30)
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);
  if (picked.length === 5) {
    // Extract the core fact from the explanation (first sentence)
    const facts = picked.map((q: any) => {
      const firstSentence = q.explanation.split(/[.!]/)[0].trim();
      return firstSentence.length > 20 ? firstSentence : q.explanation.slice(0, 100);
    });
    cheatsheetPool.push({
      subject: subjectFromId(picked[0].id),
      topic: chapter,
      facts,
    });
  }
}
writeFileSync(resolve(OUT, "cheatsheets.json"), JSON.stringify(cheatsheetPool, null, 2));
console.log(`Generated ${cheatsheetPool.length} CheatSheet sets`);

// Extract MistakeReveal data — hard questions with clear wrong/right distinction
const mistakePool: any[] = [];
const hardQuestions = good.filter((q: any) => q.difficulty === 3 || q.difficulty === "schwer");
const mistakeCandidates = hardQuestions.length >= 20 ? hardQuestions : good;
for (const q of mistakeCandidates.sort(() => Math.random() - 0.5).slice(0, 30)) {
  const qAny = q as any;
  const correctOpt = qAny.options.find((o: any) => o.id === qAny.correctOptionId);
  const wrongOpt = qAny.options.find((o: any) => o.id !== qAny.correctOptionId);
  if (correctOpt && wrongOpt) {
    mistakePool.push({
      subject: subjectFromId(qAny.id),
      mistake: wrongOpt.text,
      correction: correctOpt.text,
      explanation: qAny.explanation?.slice(0, 150) || "",
    });
  }
}
writeFileSync(resolve(OUT, "mistakes.json"), JSON.stringify(mistakePool, null, 2));
console.log(`Generated ${mistakePool.length} MistakeReveal sets`);

// Extract SpeedRound data — groups of 3 easy questions
const speedPool: any[] = [];
const easyQuestions = good
  .filter((q: any) => q.difficulty === 1 || q.difficulty === "leicht")
  .sort(() => Math.random() - 0.5);
const fallbackQuestions = easyQuestions.length >= 30 ? easyQuestions : good.sort(() => Math.random() - 0.5);
for (let i = 0; i + 2 < fallbackQuestions.length && speedPool.length < 20; i += 3) {
  const qs = fallbackQuestions.slice(i, i + 3);
  speedPool.push({
    subject: subjectFromId((qs[0] as any).id),
    questions: qs.map((q: any) => ({
      question: q.text,
      options: q.options,
      correctOptionId: q.correctOptionId,
    })),
  });
}
writeFileSync(resolve(OUT, "speedrounds.json"), JSON.stringify(speedPool, null, 2));
console.log(`Generated ${speedPool.length} SpeedRound sets`);

console.log(`Output: ${OUT}`);
