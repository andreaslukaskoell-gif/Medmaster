#!/usr/bin/env node
/**
 * MedMaster Daily Marketing Orchestrator
 *
 * Runs the full daily marketing pipeline:
 *   1. Picks today's question (seeded, deterministic)
 *   2. Generates Instagram-ready PNG cards (1080x1080)
 *   3. Posts question to Discord webhook
 *   4. Schedules answer reveal (2h later or --reveal-now)
 *   5. Logs everything to marketing/log.json
 *
 * Usage:
 *   node scripts/marketing-daily.mjs                      # Full pipeline
 *   node scripts/marketing-daily.mjs --cards-only         # Only generate PNGs
 *   node scripts/marketing-daily.mjs --discord-only       # Only post to Discord
 *   node scripts/marketing-daily.mjs --reveal-now         # Post answer immediately
 *   node scripts/marketing-daily.mjs --all-subjects       # 4 cards (one per subject)
 *
 * Env vars:
 *   DISCORD_WEBHOOK_URL  - Discord webhook URL (optional, skips Discord if absent)
 *   IG_ACCESS_TOKEN      - Instagram long-lived token (optional, skips IG if absent)
 *   IG_USER_ID           - Instagram Business Account ID
 *   IMGBB_API_KEY        - For image hosting (free: api.imgbb.com)
 */

import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const LOG_FILE = resolve(ROOT, "marketing", "log.json");
const MARKETING_DIR = resolve(ROOT, "marketing");

const args = process.argv.slice(2);
const cardsOnly = args.includes("--cards-only");
const discordOnly = args.includes("--discord-only");
const revealNow = args.includes("--reveal-now");
const allSubjects = args.includes("--all-subjects");

const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;
const IG_TOKEN = process.env.IG_ACCESS_TOKEN;
const IG_USER = process.env.IG_USER_ID;

// ── Logging ───────────────────────────────────────────────────
function loadLog() {
  if (!existsSync(MARKETING_DIR)) mkdirSync(MARKETING_DIR, { recursive: true });
  if (!existsSync(LOG_FILE)) return [];
  return JSON.parse(readFileSync(LOG_FILE, "utf-8"));
}

function appendLog(entry) {
  const log = loadLog();
  log.push({ ...entry, timestamp: new Date().toISOString() });
  writeFileSync(LOG_FILE, JSON.stringify(log, null, 2));
}

// ── Run sub-scripts safely (no shell injection) ───────────────
function run(scriptArgs, env = {}) {
  const cmd = "npx";
  const fullArgs = ["tsx", ...scriptArgs];
  const label = fullArgs.join(" ");
  console.log(`\n▶ ${cmd} ${label}`);
  try {
    const output = execFileSync(cmd, fullArgs, {
      cwd: ROOT,
      encoding: "utf-8",
      stdio: "pipe",
      env: { ...process.env, ...env },
    });
    console.log(output);
    return { ok: true, output };
  } catch (err) {
    console.error(`❌ Failed: ${err.message}`);
    return { ok: false, output: err.stderr || err.message };
  }
}

// ── Main ──────────────────────────────────────────────────────
async function main() {
  const date = new Date().toISOString().slice(0, 10);
  console.log(`\n🚀 MedMaster Marketing Pipeline — ${date}`);
  console.log("=".repeat(50));

  const logEntry = { date, cards: false, discord: false, answer: false, instagram: false };

  // Check if already ran today
  const log = loadLog();
  const todayEntry = log.find((e) => e.date === date && e.discord);
  if (todayEntry && !cardsOnly) {
    console.log("⚠️  Already posted today. Use --cards-only to regenerate cards.");
    if (!revealNow) return;
    console.log("   (Continuing for --reveal-now)");
  }

  // Step 1: Generate cards
  if (!discordOnly) {
    console.log("\n📸 Step 1: Generate social media cards");
    const cardArgs = ["scripts/generate-social-cards.mjs"];
    if (allSubjects) cardArgs.push("--all");
    const result = run(cardArgs);
    logEntry.cards = result.ok;
  }

  // Step 2: Post question to Discord
  if (!cardsOnly && WEBHOOK_URL) {
    if (!todayEntry) {
      console.log("\n💬 Step 2: Post question to Discord");
      const result = run(
        ["scripts/post-discord-webhook.mjs"],
        { DISCORD_WEBHOOK_URL: WEBHOOK_URL }
      );
      logEntry.discord = result.ok;
    }

    // Step 3: Post answer (now or later)
    if (revealNow || todayEntry) {
      console.log("\n🎯 Step 3: Post answer to Discord");
      const result = run(
        ["scripts/post-discord-webhook.mjs", "--answer"],
        { DISCORD_WEBHOOK_URL: WEBHOOK_URL }
      );
      logEntry.answer = result.ok;
    } else {
      console.log("\n⏰ Step 3: Answer will be posted in 2 hours");
      console.log("   Run with --reveal-now to post answer immediately.");
      console.log(`   Or: DISCORD_WEBHOOK_URL=xxx node scripts/post-discord-webhook.mjs --answer`);
    }
  } else if (!cardsOnly && !WEBHOOK_URL) {
    console.log("\n⚠️  No DISCORD_WEBHOOK_URL set — skipping Discord posts.");
    console.log("   Set the env var to enable Discord posting.");
  }

  // Step 4: Post to Instagram
  if (!cardsOnly && !discordOnly && IG_TOKEN && IG_USER) {
    const todayIG = log.find((e) => e.date === date && e.instagram);
    if (!todayIG) {
      console.log("\n📸 Step 4: Post carousel to Instagram");
      const result = run(
        ["scripts/post-instagram.mjs"],
        {
          IG_ACCESS_TOKEN: IG_TOKEN,
          IG_USER_ID: IG_USER,
          IMGBB_API_KEY: process.env.IMGBB_API_KEY || "",
        }
      );
      logEntry.instagram = result.ok;
    } else {
      console.log("\n⏭️  Step 4: Instagram already posted today");
    }
  } else if (!cardsOnly && !discordOnly && !IG_TOKEN) {
    console.log("\n⚠️  No IG_ACCESS_TOKEN set — skipping Instagram.");
    console.log("   Setup: node scripts/refresh-ig-token.mjs");
  }

  appendLog(logEntry);

  console.log("\n" + "=".repeat(50));
  console.log("✅ Pipeline complete!");
  console.log(`   Cards: ${logEntry.cards ? "✅" : "⏭️"}`);
  console.log(`   Discord Question: ${logEntry.discord ? "✅" : todayEntry ? "⏭️ (already posted)" : "⏭️"}`);
  console.log(`   Discord Answer: ${logEntry.answer ? "✅" : "⏰ (scheduled)"}`);
  console.log(`   Instagram: ${logEntry.instagram ? "✅" : "⏭️"}`);
}

main().catch((err) => {
  console.error("Pipeline error:", err.message);
  process.exit(1);
});
