/**
 * Generates 100 validated Wortfluessigkeit tasks (MedAT format).
 * Distribution: 34 easy (diff 1), 33 medium (diff 2), 33 hard (diff 3).
 * Run: npx tsx scripts/generate-wf-100.mts
 * Output: docs/wf-100-test.json
 */
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

// @ts-expect-error - ESM relative import
import { wortfluessigkeitWords } from "../src/data/kffWortfluessigkeit.ts";
// @ts-expect-error - ESM relative import
import { OFFICIAL_WF_EXAMPLES } from "../src/data/kffWortfluessigkeitMedAT.ts";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type WordFluencyTask = {
  id: string;
  letters: string[];
  options: string[];
  correctIndex: number;
  solutionWord: string;
  explanation: string;
  difficulty: 1 | 2 | 3;
};

// ---------------------------------------------------------------------------
// Word pools (copied from generate-wortfluessigkeit-1000.mts)
// ---------------------------------------------------------------------------
const WORD_POOL_LEICHT = [
  "HAUSTIER", "GESCHENK", "BRUNNEN", "PFLASTER", "FENSTER", "GARTEN", "KUCHEN", "LAMPE", "TELLER",
  "ZIMMER", "DECKEL", "BEUTEL", "WOLKEN", "STEINE", "HERBST", "WINTER", "SOMMER", "STUHL", "REGEN",
  "WASSER", "FEUER", "STEIN", "BAUM", "WALD", "BERG", "SAND", "MEER", "STERN", "LICHT", "KRAFT",
  "TRAUM", "DIENST", "BRIEF", "FRUCHT", "GLOCKE", "KISSEN", "MANTEL", "PLATZ", "STROM", "TURM",
  "WURZEL", "BLATT", "FEDER", "GRUND", "INSEL", "KUGEL", "NEBEL", "BLUME", "TORTE", "SCHUH", "TISCH",
  "PFERD", "VOGEL", "KIRCHE", "HUND", "KATZE", "MAUS", "FISCH", "BROT", "MILCH", "BIRNE", "APFEL",
  "PILZ", "ROSE", "TULPE", "LILIE", "KERZE", "DORF", "STADT", "FLUSS", "TEICH", "WIESE", "HECKE",
  "ZAUN", "MAUER", "DACH", "WAND", "BODEN", "SEIL", "KETTE", "RING", "NAGEL", "DRAHT", "KNOPF",
  "NADEL", "GABEL", "MESSER", "SCHALE", "KANNE", "KORB", "EIMER", "TONNE", "DOSE", "GLAS", "TOPF",
  "OFEN", "HERD", "BANK", "REGAL", "SOFA", "BETT", "KISTE", "BILD", "RAHMEN", "STIFT", "FARBE",
  "PINSEL", "SCHERE", "PAPIER", "BLOCK", "HEFT", "BUCH", "SEITE", "PERLE", "HARFE", "GEIGE", "ORGEL",
  "KLEID", "HEMD", "ROCK", "JACKE", "HOSE", "HELM", "KAPPE", "SCHAL", "ANKER", "FLAGGE", "HAFEN",
  "DAMM", "DEICH", "BACH", "WELLE", "WOLKE", "BLITZ", "DONNER", "STURM", "FROST", "SCHNEE", "HAGEL",
];

const WORD_POOL_MITTEL = [
  "HANDWERK", "ERDBEERE", "SCHMETTERLING", "BERGSTEIGER", "ZEITGEIST", "STRASSENBAHN", "REGENSCHIRM",
  "SCHNEEFLOCKE", "FAHRSCHEIN", "BRIEFMARKE", "DACHBODEN", "KIRCHTURM", "SCHULRANZEN",
  "HALSKETTE", "LANDKARTE", "TRINKGLAS", "MAHLZEIT", "NACHRICHTEN", "SPIELPLATZ", "WERKSTATT",
  "FREIHEIT", "GLEICHGEWICHT", "BAUERNHOF", "NATURSCHUTZ", "HANDSCHRIFT", "LEBENSRAUM", "FREUNDSCHAFT",
  "APOTHEKE", "WASSERFALL", "AUTOBAHN", "FAHRKARTE", "RATHAUS", "FLUGHAFEN", "MARKTPLATZ", "TURNHALLE",
  "SCHWIMMBAD", "KRANKENHAUS", "GRUNDSCHULE", "HOCHSCHULE", "BUCHHANDEL", "SPIELKARTE", "BACKOFEN",
  "TAGESZEIT", "NACHTRUHE", "WANDUHR", "ZEITSCHRIFT", "BILDSCHIRM", "TASTATUR", "FERNSEHER",
  "STAUBSAUGER", "WASCHBECKEN", "BADEWANNE", "HANDTASCHE", "RUCKSACK",
  "KACHELOFEN", "TREPPENHAUS", "HAUSFLUR", "GARDEROBE", "KOCHBUCH", "BLUMENTOPF", "GIESSKANNE",
  "GARTENZAUN", "VOGELHAUS", "LICHTUNG", "BAUMSTAMM", "WURZELWERK", "LAUBWALD",
  "SONNENBLUME", "KORNBLUME", "SEEROSE", "FLUSSBETT", "BIENENSTOCK",
];

const WORD_POOL_SCHWER = [
  "BLITZABLEITER", "KRANKENSCHWESTER", "VERSICHERUNG", "STRASSENKREUZUNG", "SCHNEELANDSCHAFT",
  "BUNDESKANZLER", "KRISTALLGITTER", "SCHWERPUNKT", "ZUSAMMENFASSUNG", "WETTBEWERB",
  "WELTMEISTERSCHAFT", "VERANTWORTUNG", "GESUNDHEITSWESEN", "FRIEDENSVERTRAG", "BERUFSERFAHRUNG",
  "FORTPFLANZUNG", "GEBIRGSLANDSCHAFT", "WERKZEUGKASTEN", "FERNBEDIENUNG", "WISSENSCHAFTLER",
  "REGIERUNGSSPRECHER", "BUNDESSTRASSE", "STRASSENSPERRUNG", "VERKEHRSZEICHEN", "KREISVERKEHR",
  "ARBEITGEBER", "ARBEITNEHMER", "SOZIALVERSICHERUNG",
  "RENTENVERSICHERUNG", "VOLKSHOCHSCHULE", "BERUFSAUSBILDUNG", "STUDIENABSCHLUSS", "FORSCHUNGSARBEIT",
  "NATURWISSENSCHAFT", "GEISTESWISSENSCHAFT", "WIRTSCHAFTSLEHRE", "INFORMATIONSTECHNIK",
  "DATENVERARBEITUNG", "BETRIEBSSYSTEM", "RECHTSANWALT", "VERWALTUNGSRECHT", "KRANKENHAUSAUFENTHALT",
  "NOTAUFNAHME", "REHABILITATIONSZENTRUM", "GESUNDHEITSMINISTER", "ORGANTRANSPLANTATION",
  "UMWELTVERSCHMUTZUNG", "ENERGIEVERSORGUNG", "SONNENKRAFTWERK", "WINDKRAFTANLAGE",
];

const TRAINING_WF_WORDS: Record<1 | 2 | 3, string[]> = {
  1: ["HAUS", "BAUM", "HUND", "TIER", "ARZT", "BLUT", "HERZ", "MOND", "BILD", "WAND", "DACH", "GELD", "RING", "BERG", "TUCH", "WORT", "SEIL", "HAND", "GOLD", "BALL", "MAUS", "REIS", "SALZ", "HAUT", "NASE", "OFEN", "TOPF", "BROT", "MILCH", "LAMPE", "STUHL", "TISCH", "STERN", "KRAFT", "BRIEF", "STEIN", "GABEL", "NADEL", "KERZE", "BIRNE", "WOLKE", "BLUME", "FARBE", "KARTE", "ORGAN", "LEBER", "LUNGE", "NIERE", "ZELLE", "GEIST", "SONNE", "REGEN", "FEDER", "DRAHT", "KOHLE", "SUPPE", "SAHNE", "KNOPF", "GRUND", "PFERD", "KATZE", "FLORA", "STURM", "VOGEL", "PILZ", "ROSE"],
  2: ["GARTEN", "SCHULE", "KIRCHE", "WASSER", "BRILLE", "PFLEGE", "FENSTER", "MESSER", "KISSEN", "BALKON", "KAFFEE", "ZUCKER", "FORMEN", "FLIEGE", "SOMMER", "WINTER", "FRUCHT", "KELLER", "FINGER", "MUTTER", "BRUDER", "STANGE", "MAGNET", "PLATTE", "FELSEN", "MANTEL", "TELLER", "DECKEL", "BREMSE", "BECHER", "SYMPTOM", "FIEBER", "RISIKO", "CHANCE", "FLASCHE", "PFLICHT", "KNOCHEN", "SKELETT", "TROPFEN", "SCHMERZ", "PATIENT", "THEORIE", "WIRKUNG", "URSACHE", "HEILUNG", "STEMPEL", "SCHRANK", "STIEFEL", "PROTEIN", "NAHRUNG", "RAHMEN", "BILDUNG", "AMPERE"],
  3: ["DIAGNOSE", "OPERATION", "KRANKHEIT", "THERAPIE", "ANATOMIE", "MATHEMATIK", "VERDAUUNG", "KREISLAUF", "CHROMOSOM", "BLUTDRUCK", "SAUERSTOFF", "STICKSTOFF", "KOHLENSTOFF", "MAGNETFELD", "SCHWERKRAFT", "EVOLUTION", "MUTATION", "INFEKTION", "MEDIKAMENT", "CHIRURGIE", "NEUROLOGIE", "KARDIOLOGIE", "BIOCHEMIE", "ORGANISMUS", "PATHOLOGIE", "PHARMAZIE", "ZELLKERN", "REAKTION", "GLEICHUNG", "SEHKRAFT", "BLUTZUCKER", "HYPOTHESE", "STATISTIK", "PARAMETER", "INSTRUMENT", "DIMENSION", "FREQUENZ", "AMPLITUDE", "FORSCHUNG", "BIBLIOTHEK", "UNIVERSUM", "TEMPERATUR", "EXPERIMENT", "BEHANDLUNG", "SPANNUNG", "KRANKENHAUS", "WISSENSCHAFT", "PHILOSOPHIE", "NERVENSYSTEM", "GLEICHGEWICHT"],
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function hasUmlautOrReplacement(word: string): boolean {
  if (/[ÄÖÜäöüß]/u.test(word)) return true;
  const w = word.toUpperCase();
  return w.includes("AE") || w.includes("OE") || w.includes("UE");
}

function onlyAZ(word: string): string {
  return word.toUpperCase().replace(/[^A-Z]/g, "");
}

function distinctLetters(word: string): number {
  return new Set(onlyAZ(word).split("")).size;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function difficultyFromLength(len: number): 1 | 2 | 3 {
  if (len <= 5) return 1;
  if (len <= 7) return 2;
  return 3;
}

function buildTask(word: string, index: number, targetDifficulty: 1 | 2 | 3): WordFluencyTask | null {
  const w = onlyAZ(word);
  if (w.length === 0) return null;
  const actualDiff = difficultyFromLength(w.length);
  if (actualDiff !== targetDifficulty) return null;

  const lettersInWord = [...new Set(w.split(""))];
  if (lettersInWord.length < 4) return null;

  const letters = shuffle(w.split(""));
  const correctFirst = w[0]!;
  const wrongPool = lettersInWord.filter((l) => l !== correctFirst);
  const wrongLetters = shuffle(wrongPool).slice(0, 3);

  if (wrongLetters.length < 3) return null;

  // ~15% chance of E-correct (keine der Antworten)
  const useNone = Math.random() < 0.15;
  let options: string[];
  let correctIndex: number;

  if (useNone) {
    const distractors = shuffle(wrongPool).slice(0, 4);
    if (distractors.length < 4) return null;
    options = [...distractors, "-"];
    correctIndex = 4;
  } else {
    const optionBase = [correctFirst, ...wrongLetters];
    options = [...shuffle(optionBase), "-"];
    correctIndex = options.indexOf(correctFirst);
    if (correctIndex === 4) return null; // correct must be A-D
  }

  const task: WordFluencyTask = {
    id: `wf-100-${index + 1}`,
    letters,
    options,
    correctIndex,
    solutionWord: w,
    explanation: useNone
      ? `Das Lösungswort lautet „${w}" und beginnt mit „${correctFirst}", der nicht als Option A–D angeboten wird. Daher ist E korrekt.`
      : `Das Lösungswort lautet „${w}" und beginnt mit „${correctFirst}".`,
    difficulty: targetDifficulty,
  };

  if (task.options.length !== 5 || task.options[4] !== "-") return null;
  return task;
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------
function validateTask(task: WordFluencyTask): boolean {
  // 5 options, last is "-"
  if (task.options.length !== 5) return false;
  if (task.options[4] !== "-") return false;
  // correctIndex 0-4
  if (task.correctIndex < 0 || task.correctIndex > 4) return false;
  // letters must form solutionWord
  const sorted1 = [...task.letters].sort().join("");
  const sorted2 = task.solutionWord.split("").sort().join("");
  if (sorted1 !== sorted2) return false;
  // correct option must match first letter of solution (or be E="-")
  if (task.correctIndex < 4) {
    if (task.options[task.correctIndex] !== task.solutionWord[0]) return false;
  }
  return true;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
function main() {
  const officialWords = new Set(
    (OFFICIAL_WF_EXAMPLES as WordFluencyTask[]).map((o) => o.solutionWord.toUpperCase())
  );

  // Collect all candidate words
  const allWords: string[] = [];
  const seen = new Set<string>();

  const add = (raw: string) => {
    if (hasUmlautOrReplacement(raw)) return;
    const w = onlyAZ(raw);
    if (w.length < 4) return;
    if (seen.has(w)) return;
    if (officialWords.has(w)) return;
    if (distinctLetters(w) < 4) return;
    seen.add(w);
    allWords.push(w);
  };

  for (const w of (wortfluessigkeitWords as { solution: string }[]).map((x) => x.solution)) add(w);
  for (const d of [1, 2, 3] as const) {
    for (const w of TRAINING_WF_WORDS[d]) add(w);
  }
  for (const w of WORD_POOL_LEICHT) add(w);
  for (const w of WORD_POOL_MITTEL) add(w);
  for (const w of WORD_POOL_SCHWER) add(w);

  console.log(`Total unique candidate words: ${allWords.length}`);

  // Group by difficulty
  const byDiffWords: Record<1 | 2 | 3, string[]> = { 1: [], 2: [], 3: [] };
  for (const w of allWords) {
    byDiffWords[difficultyFromLength(w.length)].push(w);
  }
  console.log(`Words by difficulty: easy=${byDiffWords[1].length}, medium=${byDiffWords[2].length}, hard=${byDiffWords[3].length}`);

  // Target: 34 easy, 33 medium, 33 hard
  const targets: [1 | 2 | 3, number][] = [[1, 34], [2, 33], [3, 33]];
  const tasks: WordFluencyTask[] = [];
  let taskIndex = 0;
  let validationFailures = 0;

  for (const [diff, count] of targets) {
    const pool = shuffle(byDiffWords[diff]);
    const diffTasks: WordFluencyTask[] = [];
    const usedWords = new Set<string>();
    let attempts = 0;
    const maxAttempts = pool.length * 10;

    while (diffTasks.length < count && attempts < maxAttempts) {
      attempts++;
      const word = pool[attempts % pool.length]!;
      if (usedWords.has(word)) continue;

      const t = buildTask(word, taskIndex, diff);
      if (!t) continue;
      if (!validateTask(t)) {
        validationFailures++;
        continue;
      }

      usedWords.add(word);
      diffTasks.push(t);
      taskIndex++;
    }

    if (diffTasks.length < count) {
      console.warn(`WARNING: Only generated ${diffTasks.length}/${count} tasks for difficulty ${diff}`);
    }
    tasks.push(...diffTasks);
  }

  // Shuffle final set
  const finalTasks = shuffle(tasks);
  // Re-assign IDs in order
  finalTasks.forEach((t, i) => { t.id = `wf-100-${i + 1}`; });

  // ---------------------------------------------------------------------------
  // Statistics
  // ---------------------------------------------------------------------------
  console.log("\n=== RESULTS ===");
  console.log(`Total tasks generated: ${finalTasks.length}`);
  console.log(`Validation failures: ${validationFailures}`);

  // Difficulty distribution
  const diffDist = { 1: 0, 2: 0, 3: 0 };
  for (const t of finalTasks) diffDist[t.difficulty]++;
  console.log(`\nDifficulty distribution:`);
  console.log(`  Easy (1):   ${diffDist[1]}`);
  console.log(`  Medium (2): ${diffDist[2]}`);
  console.log(`  Hard (3):   ${diffDist[3]}`);

  // Word length distribution
  const lenDist: Record<number, number> = {};
  for (const t of finalTasks) {
    const len = t.solutionWord.length;
    lenDist[len] = (lenDist[len] || 0) + 1;
  }
  console.log(`\nWord length distribution:`);
  for (const len of Object.keys(lenDist).map(Number).sort((a, b) => a - b)) {
    console.log(`  ${len} letters: ${lenDist[len]} tasks`);
  }

  // E-correct count (correctIndex === 4, i.e. "Keine der Antworten")
  const eCorrect = finalTasks.filter((t) => t.correctIndex === 4).length;
  console.log(`\nE-correct (Keine der Antworten): ${eCorrect} (${((eCorrect / finalTasks.length) * 100).toFixed(1)}%)`);

  // Unique words
  const uniqueWords = new Set(finalTasks.map((t) => t.solutionWord));
  console.log(`Unique words: ${uniqueWords.size}`);

  // Sample tasks
  console.log(`\nSample tasks:`);
  for (const t of finalTasks.slice(0, 3)) {
    console.log(`  [${t.id}] ${t.letters.join("")} -> ${t.solutionWord} (diff ${t.difficulty}, correct: ${t.options[t.correctIndex]})`);
  }

  // ---------------------------------------------------------------------------
  // Write output
  // ---------------------------------------------------------------------------
  const outDir = join(process.cwd(), "docs");
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "wf-100-test.json");
  writeFileSync(outPath, JSON.stringify(finalTasks, null, 2), "utf-8");
  console.log(`\nWrote ${finalTasks.length} tasks to ${outPath}`);
}

main();
