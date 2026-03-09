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
  ImplikationenChallenge: "implikationen-challenge",
  FigurenChallenge: "figuren-challenge",
};

// ── Caption rotation system ──────────────────────────────────
function pickRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

const CTA_BLOCKS = [
  "📩 Schick an deinen MedAT-Lernpartner!\n🔖 Speichern für die Vorbereitung!",
  "📩 Markiere jemanden der MedAT macht!\n🔖 Speichern & später nochmal anschauen!",
  "📩 Teilen mit deiner Lerngruppe!\n🔖 Speichern für die Wiederholung!",
];

const FOOTER = "\n\n📱 Gratis bis Ende März → medmaster.at";

function buildCaption(hooks, hashtags) {
  return `${pickRandom(hooks)}\n\n${pickRandom(CTA_BLOCKS)}${FOOTER}\n\n${hashtags}`;
}

const REEL_CAPTION_FNS = {
  QuizChallenge: () => buildCaption([
    "Schaffst du diese MedAT-Frage? 🧠\n\n98% antworten FALSCH — Kommentiere deinen Buchstaben!",
    "Diese BMS-Frage kostet die meisten 1 Punkt. 🧠\n\nKommentiere A–E bevor du die Lösung siehst!",
    "Hier verlieren die meisten ihren Studienplatz. 🧠\n\nWelche Antwort wählst du? Kommentiere!",
    "Traust du dich? Eine MedAT-Frage, 5 Optionen, 1 richtig. 🧠\n\nKommentiere deinen Buchstaben!",
    "So sieht eine echte BMS-Frage aus. 🧠\n\nWürdest du den Punkt holen? Kommentiere A–E!",
  ], "#MedAT #MedAT2026 #Medizinstudium #BMS #MedUniWien"),
  TippDesTages: () => buildCaption([
    "Wusstest du das? 💡\n\nDie meisten MedAT-Bewerber wissen es NICHT!",
    "Diesen Fakt vergessen 90% in der Prüfung. 💡\n\nSpeichere ihn dir JETZT!",
    "1 Fakt, der dir im MedAT Punkte bringt. 💡\n\nDie wenigsten kennen ihn.",
    "Hättest du das gewusst? 💡\n\nGenau sowas kommt im BMS-Teil dran.",
    "Merke dir DAS für den MedAT. 💡\n\nEin Detail, das den Unterschied macht.",
  ], "#MedAT #MedAT2026 #Medizin #Lerntipps #BMS"),
  ZahlenfolgeChallenge: () => buildCaption([
    "Findest du das Muster? 🔢\n\nKommentiere deine Lösung BEVOR du die Auflösung siehst!",
    "KFF-Zahlenfolge: Erkennst du die Regel? 🔢\n\nKommentiere die nächste Zahl!",
    "Diese Zahlenfolge ist im MedAT dran. 🔢\n\nSchaffst du sie unter 30 Sekunden?",
    "Zahlenfolgen = geschenkte Punkte im KFF. 🔢\n\nAber nur wenn du das Muster siehst!",
    "90% brauchen zu lange für diese Zahlenfolge. 🔢\n\nWie schnell findest du die Regel?",
  ], "#MedAT #MedAT2026 #KFF #Zahlenfolgen #Aufnahmeprüfung"),
  WortRaetsel: () => buildCaption([
    "Welches Wort ergibt sich? 🔤\n\nKommentiere deine Lösung!",
    "Ein Wort, 5 Buchstaben, wenige Sekunden Zeit. 🔤\n\nSchaffst du es?",
    "Wortflüssigkeit trainieren = KFF-Punkte sichern. 🔤\n\nFindest du das Wort?",
    "Wie schnell findest du das richtige Wort? 🔤\n\nDie meisten brauchen über 30 Sekunden.",
    "KFF-Wortflüssigkeit: Eines der Wörter passt. 🔤\n\nKommentiere es!",
  ], "#MedAT #MedAT2026 #KFF #Wortflüssigkeit #Aufnahmeprüfung"),
  StatsUrgency: () => buildCaption([
    "87% fallen beim MedAT durch. Gehörst du zu den 13%? 📊\n\nWer ÜBEN kann, gewinnt.",
    "16.000 Bewerber. 1.850 Plätze. Deine Vorbereitung entscheidet. 📊",
    "Noch ~12 Wochen bis zum MedAT. Was hast du schon geschafft? 📊",
    "Die Top 13% machen eine Sache anders: Sie üben GEZIELT. 📊",
    "Jeder 8. bekommt einen Platz. Die anderen 7 haben zu wenig geübt. 📊",
  ], "#MedAT #MedAT2026 #Aufnahmeprüfung #Medizin #Lerntipps"),
  RichtigOderFalsch: () => buildCaption([
    "Richtig oder Falsch? 3 MedAT-Aussagen 🧠\n\nKommentiere: 3/3, 2/3, 1/3 oder 0/3!",
    "3 Aussagen aus dem BMS. Wie viele kannst du? 🧠\n\nKommentiere dein Ergebnis!",
    "Teste dein BMS-Wissen: 3 Aussagen, richtig oder falsch? 🧠\n\nKommentiere deine Punktzahl!",
    "Die meisten schaffen nur 1/3. Und du? 🧠\n\nKommentiere ehrlich!",
    "Richtig oder Falsch — klingt einfach, oder? 🧠\n\nProbier's und kommentiere dein Ergebnis!",
  ], "#MedAT #MedAT2026 #BMS #Prüfungsvorbereitung #MedUniWien"),
  ImplikationenChallenge: () => buildCaption([
    "Welcher Schluss ist zwingend? 🧠\n\nKommentiere A–E!",
    "Logisches Denken im MedAT: Erkennst du den Schluss? 🧠\n\nKommentiere!",
    "Implikationen = der schwerste KFF-Untertest. 🧠\n\nSchaffst du diese Aufgabe?",
    "2 Prämissen, 5 Optionen, 1 zwingende Schlussfolgerung. 🧠\n\nWelche ist es?",
    "Hier scheitern die meisten im KFF. 🧠\n\nKommentiere deinen Buchstaben!",
  ], "#MedAT #MedAT2026 #KFF #Implikationen #Logik"),
  FigurenChallenge: () => buildCaption([
    "Welche Figur passt? 🧩\n\nKommentiere A–E!",
    "Figuren zusammensetzen: Siehst du es auf den ersten Blick? 🧩\n\nKommentiere!",
    "KFF-Figuren — einfach, wenn man's sieht. Schwer, wenn nicht. 🧩",
    "2 Teile, 1 richtige Figur. Welche? 🧩\n\nKommentiere A–E!",
    "Räumliches Denken im MedAT. 🧩\n\nFindest du die richtige Kombination?",
  ], "#MedAT #MedAT2026 #KFF #Figuren #Aufnahmeprüfung"),
};

// Generate fresh caption each call
const REEL_CAPTIONS = new Proxy({}, {
  get(_, key) { return REEL_CAPTION_FNS[key]?.(); },
});

// 3 reels per day, rotating through all 8 types across the week
// Mix: BMS quiz content + KFF challenges + urgency/tips
const DAILY_SCHEDULE = [
  // Monday:   BMS quiz, KFF logic, urgency
  ["QuizChallenge", "ImplikationenChallenge", "StatsUrgency"],
  // Tuesday:  KFF numbers, BMS quiz, BMS true/false
  ["ZahlenfolgeChallenge", "QuizChallenge", "RichtigOderFalsch"],
  // Wednesday: KFF words, KFF figures, BMS quiz
  ["WortRaetsel", "FigurenChallenge", "QuizChallenge"],
  // Thursday: KFF logic, KFF numbers, urgency
  ["ImplikationenChallenge", "ZahlenfolgeChallenge", "StatsUrgency"],
  // Friday:   BMS quiz, KFF words, tip
  ["QuizChallenge", "WortRaetsel", "TippDesTages"],
  // Saturday: KFF figures, BMS quiz, KFF numbers
  ["FigurenChallenge", "QuizChallenge", "ZahlenfolgeChallenge"],
  // Sunday:   tip, BMS true/false, KFF logic
  ["TippDesTages", "RichtigOderFalsch", "ImplikationenChallenge"],
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
