#!/usr/bin/env node
/**
 * Instagram Reel Poster via Graph API
 *
 * Posts pre-rendered Remotion reels to @medmaster_medat.
 * Reels must be publicly accessible via URL (deployed to medmaster.at).
 *
 * Usage:
 *   node scripts/post-reel-instagram.mjs --comp QuizChallenge
 *   node scripts/post-reel-instagram.mjs --comp QuizChallenge --dry
 *   node scripts/post-reel-instagram.mjs --schedule 1   # Post slot 1 of 3 for today
 *   node scripts/post-reel-instagram.mjs --schedule 2
 *   node scripts/post-reel-instagram.mjs --schedule 3
 */

import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const IG_USER_ID = "17841446757059213";
const FB_PAGE_ID = "990798194122764";
const API = "https://graph.facebook.com/v21.0";
// Reels served from GitHub raw or deployed site
const REEL_BASE_URL = "https://www.medmaster.at/marketing/reels";

// ── Reel definitions ─────────────────────────────────────────

const COMP_TO_FILE = {
  QuizChallenge: "quiz-challenge",
  TippDesTages: "tipp-des-tages",
  ZahlenfolgeChallenge: "zahlenfolge-challenge",
  WortRaetsel: "wort-raetsel",
  StatsUrgency: "stats-urgency",
  RichtigOderFalsch: "richtig-oder-falsch",
};

const REEL_CAPTIONS = {
  QuizChallenge: `Schaffst du diese MedAT-Frage? 🧠

98% antworten FALSCH — Kommentiere deinen Buchstaben!

📩 Schick an deinen MedAT-Lernpartner!
🔖 Speichern für die Vorbereitung!

📱 Gratis bis Ende März → medmaster.at

#MedAT #MedAT2026 #Medizinstudium #BMS #MedUniWien`,

  TippDesTages: `Wusstest du das? 💡

Die meisten wissen es NICHT — speichere dir diesen Fakt!

📩 Schick an jemanden der MedAT macht!
🔖 Speichern für die Vorbereitung!

📱 Gratis bis Ende März → medmaster.at

#MedAT #MedAT2026 #Medizin #Lerntipps #BMS`,

  ZahlenfolgeChallenge: `Findest du das Muster? 🔢

Kommentiere deine Lösung BEVOR du die Auflösung siehst!

📩 Schick an deinen MedAT-Lernpartner!
🔖 Speichern zum Üben!

📱 KFF-Training gratis → medmaster.at

#MedAT #MedAT2026 #KFF #Zahlenfolgen #Aufnahmeprüfung`,

  WortRaetsel: `Welches Wort ergibt sich? 🔤

Kommentiere deine Lösung!

📩 Wer aus deinen Freunden findet es?
🔖 Speichern zum Üben!

📱 Gratis bis Ende März → medmaster.at

#MedAT #MedAT2026 #KFF #Wortflüssigkeit #BMS`,

  StatsUrgency: `87% fallen beim MedAT durch. Gehörst du zu den 13%? 📊

Wer ÜBEN kann, gewinnt.

📩 Schick an deinen MedAT-Lernpartner!
🔖 Speichern als Reminder!

📱 Gratis bis Ende März → medmaster.at

#MedAT #MedAT2026 #Aufnahmeprüfung #Medizin #Lerntipps`,

  RichtigOderFalsch: `Richtig oder Falsch? 3 MedAT-Aussagen 🧠

Kommentiere: 3/3, 2/3, 1/3 oder 0/3! 💬

📩 Schick an deinen MedAT-Lernpartner!
🔖 Speichern für mehr Fragen!

📱 Gratis testen → medmaster.at

#MedAT #MedAT2026 #BMS #Prüfungsvorbereitung #MedUniInnsbruck`,
};

// 3 reels per day, rotating through all 6 types across the week
// Each day gets a mix of content types for variety
const DAILY_SCHEDULE = [
  // Monday
  ["QuizChallenge", "TippDesTages", "StatsUrgency"],
  // Tuesday
  ["ZahlenfolgeChallenge", "QuizChallenge", "RichtigOderFalsch"],
  // Wednesday
  ["WortRaetsel", "TippDesTages", "QuizChallenge"],
  // Thursday
  ["RichtigOderFalsch", "ZahlenfolgeChallenge", "StatsUrgency"],
  // Friday
  ["QuizChallenge", "WortRaetsel", "TippDesTages"],
  // Saturday
  ["StatsUrgency", "QuizChallenge", "ZahlenfolgeChallenge"],
  // Sunday
  ["TippDesTages", "RichtigOderFalsch", "WortRaetsel"],
];

// ── API helpers ──────────────────────────────────────────────

async function getPageToken() {
  const userToken = process.env.IG_PAGE_TOKEN;
  if (!userToken) return null;
  try {
    const res = await fetch(`${API}/${FB_PAGE_ID}?fields=access_token&access_token=${userToken}`);
    const json = await res.json();
    if (json.access_token) return json.access_token;
  } catch {}
  return userToken;
}

let PAGE_TOKEN;

async function apiCall(url, params = {}) {
  const searchParams = new URLSearchParams({ access_token: PAGE_TOKEN, ...params });
  const res = await fetch(`${url}?${searchParams}`, { method: "POST" });
  const json = await res.json();
  if (json.error) throw new Error(`API Error: ${json.error.message}`);
  return json;
}

async function waitForMedia(containerId) {
  for (let i = 0; i < 60; i++) {
    const res = await fetch(`${API}/${containerId}?fields=status_code&access_token=${PAGE_TOKEN}`);
    const json = await res.json();
    if (json.status_code === "FINISHED") return;
    if (json.status_code === "ERROR") throw new Error(`Media processing failed: ${containerId}`);
    await new Promise((r) => setTimeout(r, 3000));
  }
  throw new Error(`Timeout waiting for media ${containerId}`);
}

// ── Render + Post ────────────────────────────────────────────

function ensureReelRendered(comp) {
  const file = COMP_TO_FILE[comp];
  const mp4 = resolve(ROOT, "marketing", "reels", `${file}.mp4`);
  if (!existsSync(mp4)) {
    console.log(`  Rendering ${comp}...`);
    execFileSync("node", [resolve(ROOT, "video/render.mjs"), "--comp", comp], {
      cwd: ROOT,
      stdio: "inherit",
    });
  }
  return mp4;
}

async function postReel(comp, dry = false) {
  const file = COMP_TO_FILE[comp];
  const videoUrl = `${REEL_BASE_URL}/${file}.mp4`;
  const caption = REEL_CAPTIONS[comp];

  console.log(`\n🎬 Posting ${comp} (${file}.mp4)`);

  if (dry) {
    console.log("  [DRY RUN]");
    console.log(`  Video: ${videoUrl}`);
    console.log(`  Caption:\n${caption}\n`);
    return { id: "dry-run" };
  }

  // Ensure rendered locally (for deploy)
  ensureReelRendered(comp);

  console.log("  Creating reel container...");
  const container = await apiCall(`${API}/${IG_USER_ID}/media`, {
    video_url: videoUrl,
    caption,
    media_type: "REELS",
    share_to_feed: "true",
  });

  console.log(`  Processing (container: ${container.id})...`);
  await waitForMedia(container.id);

  console.log("  Publishing...");
  const result = await apiCall(`${API}/${IG_USER_ID}/media_publish`, {
    creation_id: container.id,
  });

  console.log(`  ✅ Published! Post ID: ${result.id}`);
  return result;
}

// ── Main ─────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const dry = args.includes("--dry") || args.includes("--dry-run");

  PAGE_TOKEN = await getPageToken();
  if (!PAGE_TOKEN && !dry) {
    console.error("❌ Set IG_PAGE_TOKEN in .env.local");
    process.exit(1);
  }

  // --comp QuizChallenge → post single reel
  const compIdx = args.indexOf("--comp");
  if (compIdx >= 0) {
    const comp = args[compIdx + 1];
    if (!COMP_TO_FILE[comp]) {
      console.error(`Unknown comp: ${comp}`);
      console.error(`Valid: ${Object.keys(COMP_TO_FILE).join(", ")}`);
      process.exit(1);
    }
    await postReel(comp, dry);
    return;
  }

  // --schedule <1|2|3> → post Nth reel of today's schedule
  const schedIdx = args.indexOf("--schedule");
  if (schedIdx >= 0) {
    const slot = parseInt(args[schedIdx + 1], 10);
    if (slot < 1 || slot > 3) {
      console.error("Slot must be 1, 2, or 3");
      process.exit(1);
    }
    const dayOfWeek = new Date().getDay(); // 0=Sun
    const scheduleIdx = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Convert to Mon=0
    const comp = DAILY_SCHEDULE[scheduleIdx][slot - 1];
    console.log(`📅 ${["Mo","Di","Mi","Do","Fr","Sa","So"][scheduleIdx]} Slot ${slot}/3: ${comp}`);
    await postReel(comp, dry);
    return;
  }

  console.error("Usage:");
  console.error("  node scripts/post-reel-instagram.mjs --comp QuizChallenge [--dry]");
  console.error("  node scripts/post-reel-instagram.mjs --schedule <1|2|3> [--dry]");
  process.exit(1);
}

main().catch((e) => {
  console.error("❌", e.message);
  process.exit(1);
});
