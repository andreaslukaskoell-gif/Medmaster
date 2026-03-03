#!/usr/bin/env npx tsx
/**
 * MedMaster Discord Marketing Bot
 *
 * Posts daily BMS quiz questions from the existing question pool.
 * Reuses the same data, subject colors, and branding from the website.
 *
 * Setup:
 *   1. npm install discord.js
 *   2. Create Discord bot at https://discord.com/developers/applications
 *   3. Set env vars: DISCORD_BOT_TOKEN, DISCORD_CHANNEL_ID
 *   4. Invite bot to server with "Send Messages" + "Add Reactions" permissions
 *
 * Usage:
 *   # Post one question now (test mode):
 *   DISCORD_BOT_TOKEN=xxx DISCORD_CHANNEL_ID=yyy npx tsx scripts/discord-bot.mjs --once
 *
 *   # Run as daily bot (posts at 8:00 AM, reveals answer after 2h):
 *   DISCORD_BOT_TOKEN=xxx DISCORD_CHANNEL_ID=yyy npx tsx scripts/discord-bot.mjs
 *
 *   # Use cron instead (recommended for production):
 *   # 0 8 * * * cd /path/to/medmaster && DISCORD_BOT_TOKEN=xxx DISCORD_CHANNEL_ID=yyy npx tsx scripts/discord-bot.mjs --once
 */

import { allBmsQuestions } from "../src/data/bms/index.ts";

// ── Subject config (mirrors website colors) ───────────────────
const SUBJECT_CONFIG = {
  biologie: { emoji: "\uD83E\uDDEC", color: 0x059669, label: "Biologie" },
  chemie: { emoji: "\u2697\uFE0F", color: 0xdc2626, label: "Chemie" },
  physik: { emoji: "\u26A1", color: 0x2563eb, label: "Physik" },
  mathematik: { emoji: "\uD83D\uDCCA", color: 0x7c3aed, label: "Mathematik" },
};

const REACTION_EMOJIS = ["\uD83C\uDD70\uFE0F", "\uD83C\uDD71\uFE0F", "\uD83C\uDD72", "\uD83C\uDD73", "\uD83C\uDD74"];
const OPTION_LABELS = ["A", "B", "C", "D", "E"];

// ── Seeded random (same algorithm as website) ─────────────────
function dailySeed() {
  const d = new Date();
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

function seededPick(arr, seed) {
  let s = seed;
  s = (s * 1664525 + 1013904223) & 0x7fffffff;
  return arr[s % arr.length];
}

// ── Pick today's question ─────────────────────────────────────
function pickDailyQuestion() {
  const seed = dailySeed();
  // Rotate through subjects daily
  const subjects = ["biologie", "chemie", "physik", "mathematik"];
  const todaySubject = subjects[seed % 4];
  const pool = allBmsQuestions.filter((q) => q.subject === todaySubject);
  return seededPick(pool, seed);
}

// ── Format question as Discord embed ──────────────────────────
function formatQuestionEmbed(q) {
  const cfg = SUBJECT_CONFIG[q.subject];
  const optionsText = q.options
    .map((opt, i) => `${REACTION_EMOJIS[i]}  **${OPTION_LABELS[i]}.**  ${opt.text}`)
    .join("\n\n");

  return {
    embeds: [
      {
        title: `${cfg.emoji} Tagesfrage \u2014 ${cfg.label}`,
        description: `**${q.text}**\n\n${optionsText}\n\n*Reagiere mit dem Buchstaben deiner Antwort! Aufl\u00f6sung in 2 Stunden.*`,
        color: cfg.color,
        footer: {
          text: "medmaster.at \u2014 4.300+ MedAT-\u00dcbungsfragen kostenlos testen",
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
    embeds: [
      {
        title: `${cfg.emoji} Aufl\u00f6sung \u2014 ${cfg.label}`,
        description: `**${q.text}**\n\n\u2705 **Richtig: ${correctLabel}. ${correctText}**\n\n> ${q.explanation}\n\n\uD83D\uDC49 Mehr \u00fcben auf **[medmaster.at](https://medmaster.at/medat-uebungsfragen)**`,
        color: 0x22c55e,
        footer: {
          text: "medmaster.at \u2014 14 Tage gratis testen",
        },
      },
    ],
  };
}

// ── Main ──────────────────────────────────────────────────────
const TOKEN = process.env.DISCORD_BOT_TOKEN;
const CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;
const isOnce = process.argv.includes("--once");

if (!TOKEN || !CHANNEL_ID) {
  console.log(`
MedMaster Discord Bot

Required env vars:
  DISCORD_BOT_TOKEN    - Bot token from Discord Developer Portal
  DISCORD_CHANNEL_ID   - Channel ID where questions are posted

Usage:
  DISCORD_BOT_TOKEN=xxx DISCORD_CHANNEL_ID=yyy npx tsx scripts/discord-bot.mjs --once

Without discord.js, here's the JSON payload for today's question:
  `);

  const q = pickDailyQuestion();
  console.log("Today's question:", q.id, `(${q.subject})`);
  console.log("\nQuestion embed:");
  console.log(JSON.stringify(formatQuestionEmbed(q), null, 2));
  console.log("\nAnswer embed:");
  console.log(JSON.stringify(formatAnswerEmbed(q), null, 2));
  console.log("\nYou can POST these to Discord via webhook URL:");
  console.log("  curl -H 'Content-Type: application/json' -d @question.json WEBHOOK_URL");
  process.exit(0);
}

// ── Discord.js integration ────────────────────────────────────
let Client, GatewayIntentBits;
try {
  const discord = await import("discord.js");
  Client = discord.Client;
  GatewayIntentBits = discord.GatewayIntentBits;
} catch {
  console.error("discord.js not installed. Run: npm install discord.js");
  console.error("Or use the webhook mode above (no dependency needed).");
  process.exit(1);
}

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessageReactions],
});

async function postQuestion() {
  const q = pickDailyQuestion();
  const channel = await client.channels.fetch(CHANNEL_ID);
  if (!channel?.isTextBased()) {
    console.error("Channel not found or not text-based");
    return;
  }

  console.log(`Posting question: ${q.id} (${q.subject})`);
  const msg = await channel.send(formatQuestionEmbed(q));

  // Add reaction options
  for (let i = 0; i < q.options.length; i++) {
    await msg.react(REACTION_EMOJIS[i]);
  }

  // Reveal answer after 2 hours
  const REVEAL_DELAY = 2 * 60 * 60 * 1000;
  setTimeout(async () => {
    try {
      // Count reactions
      const fetched = await msg.fetch();
      const counts = OPTION_LABELS.map((_, i) => {
        const reaction = fetched.reactions.cache.find((r) => r.emoji.name === REACTION_EMOJIS[i] || r.emoji.toString() === REACTION_EMOJIS[i]);
        return reaction ? reaction.count - 1 : 0; // -1 for bot's own reaction
      });
      const total = counts.reduce((a, b) => a + b, 0);
      const correctIdx = q.options.findIndex((o) => o.id === q.correctOptionId);
      const correctCount = counts[correctIdx] || 0;
      const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0;

      const answerEmbed = formatAnswerEmbed(q);
      answerEmbed.embeds[0].description += `\n\n\uD83D\uDCCA **${total} Antworten** \u2014 ${pct}% richtig`;

      await channel.send(answerEmbed);
      console.log(`Answer revealed: ${correctCount}/${total} correct (${pct}%)`);
    } catch (err) {
      console.error("Error revealing answer:", err);
    }

    if (isOnce) {
      client.destroy();
      process.exit(0);
    }
  }, isOnce ? 5000 : REVEAL_DELAY); // 5s in test mode, 2h in daily mode
}

client.once("ready", async () => {
  console.log(`Bot logged in as ${client.user?.tag}`);

  if (isOnce) {
    await postQuestion();
    return;
  }

  // Schedule daily at 8:00 AM
  function scheduleNext() {
    const now = new Date();
    const next = new Date(now);
    next.setHours(8, 0, 0, 0);
    if (next <= now) next.setDate(next.getDate() + 1);
    const delay = next.getTime() - now.getTime();
    console.log(`Next question in ${Math.round(delay / 60000)} minutes (${next.toLocaleString("de-AT")})`);
    setTimeout(async () => {
      await postQuestion();
      scheduleNext();
    }, delay);
  }

  // Post immediately if it's past 8 AM and we haven't posted today
  const hour = new Date().getHours();
  if (hour >= 8) {
    await postQuestion();
  }
  scheduleNext();
});

client.login(TOKEN);
