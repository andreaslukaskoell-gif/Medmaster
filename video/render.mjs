#!/usr/bin/env node
/**
 * Remotion render script for MedMaster reels.
 *
 * Usage:
 *   node video/render.mjs                    # All 6 reels
 *   node video/render.mjs --comp QuizChallenge
 *   node video/render.mjs --comp TippDesTages
 *   node video/render.mjs --comp ZahlenfolgeChallenge
 *   node video/render.mjs --comp WortRaetsel
 *   node video/render.mjs --comp StatsUrgency
 *   node video/render.mjs --comp RichtigOderFalsch
 */
import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";
import { readFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT_DIR = resolve(ROOT, "marketing", "reels");
if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

// ── Extract data first ──────────────────────────────────────
const dataFile = resolve(__dirname, ".data", "bms.json");
if (!existsSync(dataFile)) {
  console.log("Extracting BMS data...");
  execFileSync("npx", ["tsx", "--tsconfig", "tsconfig.app.json", "video/extract-data.mts"], {
    cwd: ROOT,
    stdio: "inherit",
  });
}

const data = JSON.parse(readFileSync(dataFile, "utf-8"));

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ── Build input props for each composition ──────────────────
function getProps(compId) {
  switch (compId) {
    case "QuizChallenge": {
      const q = pick(data.questions);
      return {
        question: q.text,
        subject: q.subject,
        options: q.options,
        correctOptionId: q.correctOptionId,
        explanation: q.explanation,
      };
    }
    case "TippDesTages": {
      const q = pick(data.questions);
      return {
        subject: q.subject,
        tipp: q.explanation,
        source: `MedMaster BMS ${q.subject}`,
      };
    }
    case "ZahlenfolgeChallenge":
      return {
        sequence: [2, 5, 11, 23, 47],
        answer: 47,
        rule: "×2 + 1",
      };
    case "WortRaetsel":
      return {
        letters: ["P", "L", "A", "S", "M", "A"],
        word: "PLASMA",
        hint: "Anfangsbuchstabe: P",
      };
    case "StatsUrgency":
      return {
        applicants: 16000,
        spots: 1850,
        questions: data.stats.total,
      };
    case "RichtigOderFalsch":
      return {
        statements: [
          { text: "DNA-Replikation verläuft semikonservativ", correct: true },
          { text: "Mitochondrien haben keine eigene DNA", correct: false },
          { text: "Enzyme werden bei Reaktionen verbraucht", correct: false },
        ],
      };
    default:
      return {};
  }
}

const ALL_COMPS = [
  "QuizChallenge",
  "TippDesTages",
  "ZahlenfolgeChallenge",
  "WortRaetsel",
  "StatsUrgency",
  "RichtigOderFalsch",
];

const COMP_TO_FILE = {
  QuizChallenge: "quiz-challenge",
  TippDesTages: "tipp-des-tages",
  ZahlenfolgeChallenge: "zahlenfolge-challenge",
  WortRaetsel: "wort-raetsel",
  StatsUrgency: "stats-urgency",
  RichtigOderFalsch: "richtig-oder-falsch",
};

// ── Parse CLI args ──────────────────────────────────────────
const args = process.argv.slice(2);
const compIdx = args.indexOf("--comp");
const requestedComp = compIdx >= 0 ? args[compIdx + 1] : null;
const compsToRender = requestedComp ? [requestedComp] : ALL_COMPS;

// ── Bundle + Render ─────────────────────────────────────────
console.log("Bundling Remotion project...");
const bundleLocation = await bundle({
  entryPoint: resolve(__dirname, "src/index.ts"),
  webpackOverride: (config) => config,
});
console.log("Bundle ready.\n");

for (const compId of compsToRender) {
  const inputProps = getProps(compId);
  const outputFile = resolve(OUT_DIR, `${COMP_TO_FILE[compId]}.mp4`);

  console.log(`🎬 Rendering ${compId}...`);

  const composition = await selectComposition({
    serveUrl: bundleLocation,
    id: compId,
    inputProps,
  });

  await renderMedia({
    composition,
    serveUrl: bundleLocation,
    codec: "h264",
    outputLocation: outputFile,
    inputProps,
    chromiumOptions: { disableWebSecurity: true },
    crf: 18,
  });

  console.log(`  ✅ ${COMP_TO_FILE[compId]}.mp4`);
}

console.log("\n🎉 Done! Output: marketing/reels/");
