#!/usr/bin/env node
/**
 * MedMaster Reel Generator (Remotion)
 *
 * Wraps the Remotion render pipeline. Generates animated 1080x1920 reels
 * with spring animations, dynamic BMS data, and branded visuals.
 *
 * Reel Types:
 *   1. "quiz"  → QuizChallenge       (16s) — BMS-Frage mit animiertem Reveal
 *   2. "tipp"  → TippDesTages        (10s) — "Wusstest du?" Fakten
 *   3. "zf"    → ZahlenfolgeChallenge (12s) — KFF Zahlenfolge-Puzzle
 *   4. "wort"  → WortRaetsel         (12s) — Buchstaben-Rätsel
 *   5. "stats" → StatsUrgency        (17s) — Animierte Zähler + Urgency
 *   6. "rof"   → RichtigOderFalsch   (24s) — Richtig/Falsch-Karussell
 *
 * Usage:
 *   node scripts/generate-reels.mjs                # All 6 reels
 *   node scripts/generate-reels.mjs --type quiz    # Just quiz reel
 *   node scripts/generate-reels.mjs --type stats   # Just stats reel
 *   node scripts/generate-reels.mjs --type rof     # Richtig oder Falsch
 */

import { execFileSync } from "node:child_process";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const TYPE_TO_COMP = {
  quiz: "QuizChallenge",
  tipp: "TippDesTages",
  zf: "ZahlenfolgeChallenge",
  wort: "WortRaetsel",
  stats: "StatsUrgency",
  rof: "RichtigOderFalsch",
  walkthrough: "StatsUrgency", // legacy alias → stats
};

const REEL_CAPTIONS = {
  QuizChallenge: `Schaffst du diese MedAT-Frage? 🧠

Kommentiere deinen Buchstaben BEVOR du die Auflösung siehst!

📱 Bis Ende März komplett gratis → medmaster.at

#MedAT #MedAT2026 #Medizinstudium #BMS #MedUniWien`,

  TippDesTages: `Wusstest du das? 💡

Mehr MedAT-Wissen in der App — mit Erklärungen zu jeder Frage.

📱 Bis Ende März komplett gratis → medmaster.at

#MedAT #MedAT2026 #Medizin #Lerntipps #BMS`,

  ZahlenfolgeChallenge: `Welche Zahl fehlt? 🔢

Kommentiere deine Lösung!

📱 KFF-Training gratis → medmaster.at

#MedAT #MedAT2026 #KFF #Zahlenfolgen #Aufnahmeprüfung`,

  WortRaetsel: `Welches Wort ergibt sich? 🔤

Kommentiere deine Lösung!

📱 Wortflüssigkeit trainieren → medmaster.at

#MedAT #MedAT2026 #KFF #Wortflüssigkeit #BMS`,

  StatsUrgency: `87% fallen beim MedAT durch. Gehörst du zu den 13%? 📊

Der Unterschied: Wer übt, gewinnt.

📱 Bis Ende März komplett gratis → medmaster.at

#MedAT #MedAT2026 #Aufnahmeprüfung #Medizin #Lerntipps`,

  RichtigOderFalsch: `Richtig oder Falsch? 3 MedAT-Aussagen — schaffst du alle? 🧠

Kommentiere: 3/3, 2/3, 1/3 oder 0/3? 💬

📱 Gratis testen → medmaster.at

#MedAT #MedAT2026 #BMS #Prüfungsvorbereitung #MedUniInnsbruck`,
};

// ── Parse CLI ────────────────────────────────────────────────
const args = process.argv.slice(2);
const typeIdx = args.indexOf("--type");
const type = typeIdx >= 0 ? args[typeIdx + 1] : "all";

const compsToRender =
  type === "all"
    ? Object.values(TYPE_TO_COMP).filter((v, i, a) => a.indexOf(v) === i)
    : [TYPE_TO_COMP[type]];

if (!compsToRender[0]) {
  console.error(`Unknown type: ${type}`);
  console.error(`Valid: ${Object.keys(TYPE_TO_COMP).join(", ")}`);
  process.exit(1);
}

// ── Render via Remotion ──────────────────────────────────────
console.log(`🎬 Generating ${compsToRender.length} reel(s) via Remotion...\n`);

for (const comp of compsToRender) {
  try {
    execFileSync("node", [resolve(ROOT, "video/render.mjs"), "--comp", comp], {
      cwd: ROOT,
      stdio: "inherit",
    });

    console.log(`\n📋 Caption für "${comp}":\n---`);
    console.log(REEL_CAPTIONS[comp]);
    console.log("---\n");
  } catch (err) {
    console.error(`Failed to render ${comp}:`, err.message);
    process.exit(1);
  }
}

console.log("\n🎉 Alle Reels generiert!");
console.log("📁 Ordner: marketing/reels/");
