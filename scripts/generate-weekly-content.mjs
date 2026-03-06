#!/usr/bin/env node
/**
 * MedMaster Weekly Content Generator
 *
 * Generates a full week of Instagram-ready content:
 * - 7 days × 1 carousel post (question + answer PNG)
 * - Ready-to-paste captions with hashtags
 * - Posting schedule markdown file
 *
 * Usage:
 *   node scripts/generate-weekly-content.mjs              # Next 7 days
 *   node scripts/generate-weekly-content.mjs --days 14    # Next 14 days
 *
 * Output: marketing/weekly/{startDate}/
 *   ├── schedule.md        (copy-paste captions + posting plan)
 *   ├── day-01-bio-question.png
 *   ├── day-01-bio-answer.png
 *   ├── day-02-chem-question.png
 *   └── ...
 */

import { chromium } from "playwright";
import { mkdirSync, existsSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const MARKETING_DIR = resolve(__dirname, "..", "marketing", "weekly");

const args = process.argv.slice(2);
const daysIdx = args.indexOf("--days");
const numDays = daysIdx !== -1 ? parseInt(args[daysIdx + 1], 10) : 7;

const SUBJECTS = ["biologie", "chemie", "physik", "mathematik"];
const SUBJECT_SHORT = { biologie: "bio", chemie: "chem", physik: "phys", mathematik: "mathe" };
const OPTION_LABELS = ["A", "B", "C", "D", "E"];
const SUBJECT_COLORS = {
  biologie: { bg: "#059669", light: "#d1fae5", text: "#065f46", emoji: "🧬", label: "Biologie" },
  chemie: { bg: "#dc2626", light: "#fee2e2", text: "#991b1b", emoji: "⚗️", label: "Chemie" },
  physik: { bg: "#2563eb", light: "#dbeafe", text: "#1e40af", emoji: "⚡", label: "Physik" },
  mathematik: { bg: "#7c3aed", light: "#ede9fe", text: "#5b21b6", emoji: "📐", label: "Mathematik" },
};

const HASHTAG_SETS = [
  "#MedAT #MedAT2026 #Medizinstudium #BMS #MedUniWien",
  "#MedAT #Aufnahmeprüfung #Medizin #MedAT2026 #Lerntipps",
  "#MedAT2026 #StudierenInÖsterreich #BMS #Medizinstudium #MedUniGraz",
  "#MedAT #Prüfungsvorbereitung #Medizin #BMS #MedUniInnsbruck",
  "#MedAT2026 #Medizinstudium #GratisLernen #BMS #JKULinz",
  "#MedAT #Aufnahmetest #Medizin #MedAT2026 #Lernmotivation",
  "#MedAT2026 #BMS #Medizinstudium #Aufnahmeprüfung #Wissenstest",
];

// Caption builder: hook → question → CTA → urgency → hashtags
function buildCaption(subj, questionText, hashtags) {
  const hooks = [
    "Diese Frage kommt JEDES JAHR beim MedAT 👇",
    "80% beantworten diese Frage falsch 👇",
    "Kannst du diese MedAT-Frage in 30 Sek lösen? 👇",
    "MedAT-Falle: Die meisten tippen auf C 👇",
    "Schaffst du diese BMS-Frage ohne nachzudenken? 👇",
    "Wenn du das weißt, bist du bereit für den MedAT 👇",
    "Die Antwort überrascht die meisten 👇",
  ];
  const hook = hooks[Math.floor(Math.random() * hooks.length)];
  return [
    hook,
    "",
    `${SUBJECT_COLORS[subj].emoji} ${questionText}`,
    "",
    "Kommentiere deinen Buchstaben! 💬",
    "Auflösung morgen in der Story 🔓",
    "",
    "📱 Bis Ende März komplett gratis → medmaster.at",
    "",
    hashtags,
  ].join("\n");
}

// ── Seeded random ─────────────────────────────────────────────
function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

function seededShuffle(arr, seed) {
  const shuffled = [...arr];
  const rand = seededRandom(seed);
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// ── Load questions ────────────────────────────────────────────
async function loadQuestions() {
  const mod = await import("tsx/esm/api");
  const pools = await Promise.all([
    mod.tsImport("../src/data/bms/biologiePool.ts", import.meta.url),
    mod.tsImport("../src/data/bms/chemiePool.ts", import.meta.url),
    mod.tsImport("../src/data/bms/physikPool.ts", import.meta.url),
    mod.tsImport("../src/data/bms/mathematikPool.ts", import.meta.url),
  ]);
  return {
    biologie: pools[0].biologiePoolQuestions,
    chemie: pools[1].chemiePoolQuestions,
    physik: pools[2].physikPoolQuestions,
    mathematik: pools[3].mathematikPoolQuestions,
  };
}

// ── Days until MedAT 2026 ────────────────────────────────────
function daysUntilMedAT(date) {
  const medat = new Date("2026-07-03"); // typical early July
  const diff = medat - date;
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

// ── HTML: Question card (große Schrift für Instagram) ────────
function questionCardHTML(q, dayNum, totalDays) {
  const c = SUBJECT_COLORS[q.subject];
  const options = q.options
    .map(
      (opt, i) => `
    <div style="display:flex;align-items:center;gap:24px;padding:22px 28px;background:#f8fafc;border-radius:20px;border:2px solid #e2e8f0;">
      <div style="min-width:60px;height:60px;border-radius:16px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:32px;color:${c.bg};background:${c.light};">${OPTION_LABELS[i]}</div>
      <div style="font-size:34px;color:#334155;line-height:1.3;font-weight:500;">${opt.text}</div>
    </div>`
    )
    .join("\n");

  return `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>* { margin:0; padding:0; box-sizing:border-box; } body { width:1080px; height:1080px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; }</style></head><body>
<div style="width:1080px;height:1080px;background:linear-gradient(135deg,#1b3ea7,#0f2a80);display:flex;flex-direction:column;padding:36px;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;">
    <div style="display:flex;align-items:center;gap:14px;">
      <div style="font-size:40px;font-weight:800;color:white;">MedMaster</div>
      <div style="padding:10px 22px;border-radius:20px;background:${c.bg};color:white;font-size:24px;font-weight:700;">${c.label}</div>
    </div>
    <div style="font-size:24px;color:rgba(255,255,255,0.5);font-weight:600;">Tag ${dayNum}/${totalDays}</div>
  </div>
  <div style="flex:1;background:white;border-radius:24px;padding:40px;display:flex;flex-direction:column;gap:18px;box-shadow:0 8px 32px rgba(0,0,0,0.15);">
    <div style="font-size:38px;font-weight:700;color:#1e293b;line-height:1.3;margin-bottom:6px;">${q.text}</div>
    <div style="display:flex;flex-direction:column;gap:12px;flex:1;justify-content:center;">${options}</div>
  </div>
  <div style="display:flex;justify-content:space-between;align-items:center;margin-top:20px;padding:0 8px;">
    <div style="font-size:28px;color:rgba(255,255,255,0.7);font-weight:600;">medmaster.at</div>
    <div style="font-size:24px;color:rgba(255,255,255,0.5);">A–D abstimmen · E kommentieren</div>
  </div>
</div></body></html>`;
}

// ── HTML: Answer card (große Schrift für Instagram) ──────────
function answerCardHTML(q) {
  const c = SUBJECT_COLORS[q.subject];
  const correctIdx = q.options.findIndex((o) => o.id === q.correctOptionId);

  const options = q.options
    .map((opt, i) => {
      const isCorrect = i === correctIdx;
      const bg = isCorrect ? "#dcfce7" : "#f8fafc";
      const border = isCorrect ? "#22c55e" : "#e2e8f0";
      const borderW = isCorrect ? 3 : 2;
      const labelColor = isCorrect ? "#166534" : c.bg;
      const labelBg = isCorrect ? "#bbf7d0" : c.light;
      const textColor = isCorrect ? "#166534" : "#94a3b8";
      const check = isCorrect ? '<div style="margin-left:auto;font-size:32px;color:#22c55e;">✓</div>' : "";

      return `
    <div style="display:flex;align-items:center;gap:24px;padding:20px 28px;background:${bg};border-radius:20px;border:${borderW}px solid ${border};">
      <div style="min-width:56px;height:56px;border-radius:16px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:28px;color:${labelColor};background:${labelBg};">${OPTION_LABELS[i]}</div>
      <div style="font-size:30px;color:${textColor};line-height:1.3;${isCorrect ? "font-weight:600;" : ""}">${opt.text}</div>
      ${check}
    </div>`;
    })
    .join("\n");

  const rawExpl = q.explanation.replace(/\*\*(.*?)\*\*/g, "$1");
  const expl = rawExpl.length > 200 ? rawExpl.slice(0, 197) + "..." : rawExpl;

  return `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>* { margin:0; padding:0; box-sizing:border-box; } body { width:1080px; height:1080px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; }</style></head><body>
<div style="width:1080px;height:1080px;background:linear-gradient(135deg,#1b3ea7,#0f2a80);display:flex;flex-direction:column;padding:36px;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;">
    <div style="display:flex;align-items:center;gap:14px;">
      <div style="font-size:36px;font-weight:800;color:white;">MedMaster</div>
      <div style="padding:8px 20px;border-radius:20px;background:${c.bg};color:white;font-size:22px;font-weight:700;">${c.label}</div>
    </div>
    <div style="font-size:24px;color:#22c55e;font-weight:700;">✅ Auflösung</div>
  </div>
  <div style="flex:1;background:white;border-radius:24px;padding:36px;display:flex;flex-direction:column;gap:12px;box-shadow:0 8px 32px rgba(0,0,0,0.15);">
    <div style="font-size:32px;font-weight:700;color:#1e293b;line-height:1.3;margin-bottom:4px;">${q.text}</div>
    <div style="display:flex;flex-direction:column;gap:10px;">${options}</div>
    <div style="margin-top:auto;padding:18px 24px;background:#f0fdf4;border-radius:16px;border:1.5px solid #bbf7d0;">
      <div style="font-size:22px;color:#166534;line-height:1.45;">${expl}</div>
    </div>
  </div>
  <div style="display:flex;justify-content:space-between;align-items:center;margin-top:20px;padding:0 8px;">
    <div style="font-size:28px;color:rgba(255,255,255,0.7);font-weight:600;">medmaster.at</div>
    <div style="font-size:22px;color:rgba(255,255,255,0.5);">Gratis testen bis Ende März</div>
  </div>
</div></body></html>`;
}

// ── Main ──────────────────────────────────────────────────────
async function main() {
  const questionPools = await loadQuestions();
  const startDate = new Date();
  const startStr = startDate.toISOString().slice(0, 10);
  const outDir = resolve(MARKETING_DIR, startStr);
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

  // Pick one question per day, cycling through subjects
  const picks = [];
  for (let day = 0; day < numDays; day++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + day);
    const subject = SUBJECTS[day % SUBJECTS.length];
    const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
    const pool = questionPools[subject];
    const shuffled = seededShuffle(pool, seed + day * 7);
    // Find a question with short enough text for the card
    const q = shuffled.find((q) => q.text.length <= 150 && q.options.every((o) => o.text.length <= 80)) || shuffled[0];
    picks.push({ day: day + 1, date, subject, question: q });
  }

  console.log(`📅 Generating ${numDays} days of content → ${outDir}\n`);

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1080, height: 1080 },
    deviceScaleFactor: 2,
  });

  const schedule = [];

  for (const pick of picks) {
    const { day, date, subject, question: q } = pick;
    const dateStr = date.toISOString().slice(0, 10);
    const dayName = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"][date.getDay()];
    const short = SUBJECT_SHORT[subject];
    const prefix = `day-${String(day).padStart(2, "0")}-${short}`;
    const daysLeft = daysUntilMedAT(date);

    // Generate question card (nur Frage, keine Antwort-Karte)
    const qPage = await context.newPage();
    await qPage.setContent(questionCardHTML(q, day, numDays), { waitUntil: "load" });
    const qPath = resolve(outDir, `${prefix}-question.png`);
    await qPage.screenshot({ path: qPath });
    await qPage.close();

    // Caption: Frage im Text, A–D Umfrage, E kommentieren
    const hashtags = HASHTAG_SETS[day % HASHTAG_SETS.length];
    const caption = buildCaption(subject, q.text, hashtags);
    const correctIdx = q.options.findIndex((o) => o.id === q.correctOptionId);
    const correctLetter = OPTION_LABELS[correctIdx];

    schedule.push({
      day,
      dateStr,
      dayName,
      subject,
      label: SUBJECT_COLORS[subject].label,
      emoji: SUBJECT_COLORS[subject].emoji,
      questionFile: `${prefix}-question.png`,
      caption,
      hashtags,
      correctLetter,
      questionText: q.text,
    });

    console.log(`  ✅ Tag ${day} (${dayName} ${dateStr}) — ${SUBJECT_COLORS[subject].label}: "${q.text.slice(0, 50)}..."`);
  }

  await browser.close();

  // ── Generate schedule markdown ───────────────────────────────
  let md = `# MedMaster Instagram Content Plan\n`;
  md += `**Generiert:** ${startStr}\n`;
  md += `**Zeitraum:** ${numDays} Tage\n\n`;
  md += `---\n\n`;
  md += `## So postest du (30 Sek. pro Post)\n\n`;
  md += `1. Öffne **Meta Business Suite** → [business.facebook.com](https://business.facebook.com)\n`;
  md += `2. Klick **"Beitrag erstellen"** → **Instagram**\n`;
  md += `3. Lade das Frage-Bild hoch\n`;
  md += `4. Kopiere die Caption unten → einfügen\n`;
  md += `5. Erstelle eine **Umfrage** mit A, B, C, D\n`;
  md += `6. **Planen** auf die angegebene Uhrzeit\n\n`;
  md += `---\n\n`;

  for (const entry of schedule) {
    md += `## Tag ${entry.day} — ${entry.dayName} ${entry.dateStr} — ${entry.emoji} ${entry.label}\n\n`;
    md += `**Bild:** \`${entry.questionFile}\`\n\n`;
    md += `**Richtige Antwort:** ${entry.correctLetter}\n\n`;
    md += `**Caption (Copy-Paste):**\n\`\`\`\n${entry.caption}\n\n${entry.hashtags}\n\`\`\`\n\n`;
    md += `---\n\n`;
  }

  const schedulePath = resolve(outDir, "schedule.md");
  writeFileSync(schedulePath, md);

  console.log(`\n🎉 Fertig! ${numDays} Tage Content in: marketing/weekly/${startStr}/`);
  console.log(`📋 Posting-Plan: marketing/weekly/${startStr}/schedule.md`);
  console.log(`\nÖffne schedule.md und kopiere die Captions in Meta Business Suite!`);
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
