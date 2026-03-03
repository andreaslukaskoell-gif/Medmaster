#!/usr/bin/env node
/**
 * MedMaster Discord Webhook Poster
 *
 * Posts daily MedAT quiz questions via Discord webhook — zero dependencies.
 *
 * Setup:
 *   1. Create webhook in Discord: Server Settings → Integrations → Webhooks
 *   2. Set env var: DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...
 *
 * Usage:
 *   DISCORD_WEBHOOK_URL=xxx node scripts/post-discord-webhook.mjs           # Post question
 *   DISCORD_WEBHOOK_URL=xxx node scripts/post-discord-webhook.mjs --answer  # Post answer
 *   node scripts/post-discord-webhook.mjs --dry-run                         # Preview JSON
 *   node scripts/post-discord-webhook.mjs --subject chemie                  # Force subject
 */

// ── Inline question data (avoids TS import issues) ────────────
// We read from the compiled BMS data via a dynamic import workaround
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Subject config ────────────────────────────────────────────
const SUBJECT_CONFIG = {
  biologie: { emoji: "🧬", color: 0x059669, label: "Biologie" },
  chemie: { emoji: "⚗️", color: 0xdc2626, label: "Chemie" },
  physik: { emoji: "⚡", color: 0x2563eb, label: "Physik" },
  mathematik: { emoji: "📊", color: 0x7c3aed, label: "Mathematik" },
};

const OPTION_LABELS = ["A", "B", "C", "D", "E"];
const SUBJECTS = ["biologie", "chemie", "physik", "mathematik"];

// ── Seeded random ─────────────────────────────────────────────
function dailySeed() {
  const d = new Date();
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

function seededRandom(seed) {
  return ((seed * 1664525 + 1013904223) & 0x7fffffff) / 0x7fffffff;
}

function seededPick(arr, seed) {
  let s = seed;
  s = (s * 1664525 + 1013904223) & 0x7fffffff;
  return arr[s % arr.length];
}

// ── Load questions via tsx ────────────────────────────────────
async function loadQuestions() {
  // Use tsx to import TS files directly
  try {
    const mod = await import("tsx/esm/api");
    const bms = await mod.tsImport("../src/data/bms/index.ts", import.meta.url);
    return bms.allBmsQuestions;
  } catch {
    // Fallback: try direct import (works if tsx is globally available)
    const bms = await import("../src/data/bms/index.ts");
    return bms.allBmsQuestions;
  }
}

// ── Pick today's question ─────────────────────────────────────
function pickDailyQuestion(questions, forceSubject) {
  const seed = dailySeed();
  const subject = forceSubject || SUBJECTS[seed % 4];
  const pool = questions.filter((q) => q.subject === subject);
  return seededPick(pool, seed);
}

// ── Format embeds ─────────────────────────────────────────────
function formatQuestionEmbed(q) {
  const cfg = SUBJECT_CONFIG[q.subject];
  const optionsText = q.options
    .map((opt, i) => `**${OPTION_LABELS[i]}.** ${opt.text}`)
    .join("\n");

  return {
    username: "MedMaster Quiz",
    avatar_url: "https://medmaster.at/favicon.svg",
    embeds: [
      {
        title: `${cfg.emoji} Tagesfrage — ${cfg.label}`,
        description: [
          `**${q.text}**`,
          "",
          optionsText,
          "",
          "Reagiere mit 🅰️ 🅱️ 🅲 🅳 🅴 — Auflösung in 2 Stunden!",
        ].join("\n"),
        color: cfg.color,
        footer: {
          text: "medmaster.at — 4.300+ MedAT-Übungsfragen kostenlos",
        },
        timestamp: new Date().toISOString(),
      },
    ],
  };
}

function formatAnswerEmbed(q) {
  const cfg = SUBJECT_CONFIG[q.subject];
  const correctIdx = q.options.findIndex((o) => o.id === q.correctOptionId);
  const correctLabel = OPTION_LABELS[correctIdx];
  const correctText = q.options[correctIdx]?.text;

  return {
    username: "MedMaster Quiz",
    avatar_url: "https://medmaster.at/favicon.svg",
    embeds: [
      {
        title: `${cfg.emoji} Auflösung — ${cfg.label}`,
        description: [
          `**${q.text}**`,
          "",
          `✅ **Richtig: ${correctLabel}. ${correctText}**`,
          "",
          `> ${q.explanation}`,
          "",
          "👉 Mehr üben auf **[medmaster.at](https://medmaster.at/medat-uebungsfragen)**",
        ].join("\n"),
        color: 0x22c55e,
        footer: {
          text: "medmaster.at — 14 Tage gratis testen",
        },
      },
    ],
  };
}

// ── Main ──────────────────────────────────────────────────────
const args = process.argv.slice(2);
const isAnswer = args.includes("--answer");
const isDryRun = args.includes("--dry-run");
const subjectIdx = args.indexOf("--subject");
const forceSubject = subjectIdx !== -1 ? args[subjectIdx + 1] : null;

const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

async function main() {
  const questions = await loadQuestions();
  const q = pickDailyQuestion(questions, forceSubject);
  const payload = isAnswer ? formatAnswerEmbed(q) : formatQuestionEmbed(q);

  console.log(`📋 ${isAnswer ? "Answer" : "Question"}: ${q.id} (${q.subject})`);
  console.log(`   "${q.text.slice(0, 80)}..."`);

  if (isDryRun || !WEBHOOK_URL) {
    console.log("\n" + (isDryRun ? "Dry run — " : "No DISCORD_WEBHOOK_URL set — ") + "preview:");
    console.log(JSON.stringify(payload, null, 2));
    if (!WEBHOOK_URL && !isDryRun) {
      console.log("\nSet DISCORD_WEBHOOK_URL to post to Discord.");
    }
    return;
  }

  const res = await fetch(`${WEBHOOK_URL}?wait=true`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(`❌ Discord error ${res.status}: ${text}`);
    process.exit(1);
  }

  const msg = await res.json();
  console.log(`✅ Posted to Discord (message ID: ${msg.id})`);
  return msg;
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
