#!/usr/bin/env node
/**
 * MedMaster Social Media Card Generator
 *
 * Generates Instagram/TikTok-ready 1080x1080 PNG cards from BMS questions.
 * Self-contained HTML rendering — no dev server needed.
 *
 * Usage:
 *   node scripts/generate-social-cards.mjs                    # Today's daily cards
 *   node scripts/generate-social-cards.mjs --count 10         # Generate 10 card pairs
 *   node scripts/generate-social-cards.mjs --subject biologie # Only biologie
 *   node scripts/generate-social-cards.mjs --all              # One per subject (4 pairs)
 *
 * Output: marketing/cards/{date}/{subject}-{n}-question.png + answer.png
 */

import { chromium } from "playwright";
import { mkdirSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const MARKETING_DIR = resolve(__dirname, "..", "marketing", "cards");

const args = process.argv.slice(2);
const countIdx = args.indexOf("--count");
const count = countIdx !== -1 ? parseInt(args[countIdx + 1], 10) : 1;
const subjectIdx = args.indexOf("--subject");
const forceSubject = subjectIdx !== -1 ? args[subjectIdx + 1] : null;
const allSubjects = args.includes("--all");

const SUBJECTS = ["biologie", "chemie", "physik", "mathematik"];
const OPTION_LABELS = ["A", "B", "C", "D", "E"];
const SUBJECT_COLORS = {
  biologie: { bg: "#059669", light: "#d1fae5", text: "#065f46" },
  chemie: { bg: "#dc2626", light: "#fee2e2", text: "#991b1b" },
  physik: { bg: "#2563eb", light: "#dbeafe", text: "#1e40af" },
  mathematik: { bg: "#7c3aed", light: "#ede9fe", text: "#5b21b6" },
};

// ── Seeded random ─────────────────────────────────────────────
function dailySeed() {
  const d = new Date();
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

function seededShuffle(arr, seed) {
  const shuffled = [...arr];
  let s = seed;
  for (let i = shuffled.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0x7fffffff;
    const j = s % (i + 1);
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
  return [
    ...pools[0].biologiePoolQuestions,
    ...pools[1].chemiePoolQuestions,
    ...pools[2].physikPoolQuestions,
    ...pools[3].mathematikPoolQuestions,
  ];
}

// ── HTML template for question card ───────────────────────────
function questionCardHTML(q, index, total) {
  const c = SUBJECT_COLORS[q.subject];
  const label = q.subject.charAt(0).toUpperCase() + q.subject.slice(1);
  const options = q.options
    .map(
      (opt, i) => `
    <div style="display:flex;align-items:center;gap:20px;padding:20px 24px;background:#f8fafc;border-radius:20px;border:2px solid #e2e8f0;">
      <div style="min-width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:24px;color:${c.bg};background:${c.light};">${OPTION_LABELS[i]}</div>
      <div style="font-size:28px;color:#334155;line-height:1.35;">${opt.text}</div>
    </div>`
    )
    .join("\n");

  return `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { width:1080px; height:1080px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; }
</style></head><body>
<div style="width:1080px;height:1080px;background:linear-gradient(135deg,#1b3ea7,#0f2a80);display:flex;flex-direction:column;padding:40px;">
  <!-- Header -->
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:30px;">
    <div style="display:flex;align-items:center;gap:12px;">
      <div style="font-size:36px;font-weight:800;color:white;opacity:0.95;">MedMaster</div>
      <div style="padding:8px 20px;border-radius:20px;background:${c.bg};color:white;font-size:20px;font-weight:700;">${label}</div>
    </div>
    <div style="font-size:22px;color:rgba(255,255,255,0.5);font-weight:600;">Frage ${index}/${total}</div>
  </div>

  <!-- Card -->
  <div style="flex:1;background:white;border-radius:24px;padding:44px;display:flex;flex-direction:column;gap:20px;box-shadow:0 8px 32px rgba(0,0,0,0.15);">
    <div style="font-size:32px;font-weight:700;color:#1e293b;line-height:1.35;margin-bottom:8px;">${q.text}</div>
    <div style="display:flex;flex-direction:column;gap:14px;">
      ${options}
    </div>
  </div>

  <!-- Footer -->
  <div style="text-align:center;margin-top:24px;">
    <div style="font-size:26px;color:rgba(255,255,255,0.7);font-weight:600;">medmaster.at — Kostenlos üben</div>
  </div>
</div>
</body></html>`;
}

// ── HTML template for answer card ─────────────────────────────
function answerCardHTML(q) {
  const c = SUBJECT_COLORS[q.subject];
  const label = q.subject.charAt(0).toUpperCase() + q.subject.slice(1);
  const correctIdx = q.options.findIndex((o) => o.id === q.correctOptionId);

  const options = q.options
    .map((opt, i) => {
      const isCorrect = i === correctIdx;
      const bg = isCorrect ? "#dcfce7" : "#f8fafc";
      const border = isCorrect ? "#22c55e" : "#e2e8f0";
      const borderW = isCorrect ? 3 : 2;
      const labelColor = isCorrect ? "#166534" : c.bg;
      const labelBg = isCorrect ? "#bbf7d0" : c.light;
      const textColor = isCorrect ? "#166534" : "#334155";
      const check = isCorrect ? '<div style="margin-left:auto;font-size:24px;color:#22c55e;">✓</div>' : "";

      return `
    <div style="display:flex;align-items:center;gap:20px;padding:18px 24px;background:${bg};border-radius:20px;border:${borderW}px solid ${border};">
      <div style="min-width:48px;height:48px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:22px;color:${labelColor};background:${labelBg};">${OPTION_LABELS[i]}</div>
      <div style="font-size:26px;color:${textColor};line-height:1.35;">${opt.text}</div>
      ${check}
    </div>`;
    })
    .join("\n");

  // Strip markdown bold markers and truncate explanation to fit
  const rawExpl = q.explanation.replace(/\*\*(.*?)\*\*/g, "$1");
  const expl = rawExpl.length > 200 ? rawExpl.slice(0, 197) + "..." : rawExpl;

  return `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { width:1080px; height:1080px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; }
</style></head><body>
<div style="width:1080px;height:1080px;background:linear-gradient(135deg,#1b3ea7,#0f2a80);display:flex;flex-direction:column;padding:40px;">
  <!-- Header -->
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:30px;">
    <div style="display:flex;align-items:center;gap:12px;">
      <div style="font-size:28px;font-weight:800;color:white;opacity:0.95;">MedMaster</div>
      <div style="padding:6px 16px;border-radius:20px;background:${c.bg};color:white;font-size:16px;font-weight:700;">${label}</div>
    </div>
    <div style="font-size:18px;color:#22c55e;font-weight:700;">Auflösung</div>
  </div>

  <!-- Card -->
  <div style="flex:1;background:white;border-radius:24px;padding:36px;display:flex;flex-direction:column;gap:16px;box-shadow:0 8px 32px rgba(0,0,0,0.15);">
    <div style="font-size:24px;font-weight:700;color:#1e293b;line-height:1.4;margin-bottom:4px;">${q.text}</div>
    <div style="display:flex;flex-direction:column;gap:10px;">
      ${options}
    </div>
    <!-- Explanation -->
    <div style="margin-top:auto;padding:16px 20px;background:#f0fdf4;border-radius:16px;border:1.5px solid #bbf7d0;">
      <div style="font-size:17px;color:#166534;line-height:1.5;">${expl}</div>
    </div>
  </div>

  <!-- Footer -->
  <div style="text-align:center;margin-top:24px;">
    <div style="font-size:26px;color:rgba(255,255,255,0.7);font-weight:600;">medmaster.at — Kostenlos üben</div>
  </div>
</div>
</body></html>`;
}

// ── Main ──────────────────────────────────────────────────────
async function main() {
  const questions = await loadQuestions();
  const seed = dailySeed();
  const date = new Date().toISOString().slice(0, 10);
  const outDir = resolve(MARKETING_DIR, date);
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

  // Pick questions
  const picks = [];
  if (allSubjects) {
    for (const subject of SUBJECTS) {
      const pool = questions.filter((q) => q.subject === subject);
      const shuffled = seededShuffle(pool, seed + subject.length);
      picks.push(...shuffled.slice(0, count));
    }
  } else if (forceSubject) {
    const pool = questions.filter((q) => q.subject === forceSubject);
    const shuffled = seededShuffle(pool, seed);
    picks.push(...shuffled.slice(0, count));
  } else {
    // Daily: one per subject
    for (const subject of SUBJECTS) {
      const pool = questions.filter((q) => q.subject === subject);
      const shuffled = seededShuffle(pool, seed + subject.length);
      picks.push(shuffled[0]);
    }
  }

  console.log(`🎨 Generating ${picks.length} card pairs → ${outDir}`);

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1080, height: 1080 },
    deviceScaleFactor: 2, // Retina quality
  });

  const generated = [];

  for (let i = 0; i < picks.length; i++) {
    const q = picks[i];
    const prefix = `${q.subject}-${String(i + 1).padStart(2, "0")}`;

    // Question card
    const qPage = await context.newPage();
    await qPage.setContent(questionCardHTML(q, i + 1, picks.length), { waitUntil: "load" });
    const qPath = resolve(outDir, `${prefix}-question.png`);
    await qPage.screenshot({ path: qPath });
    await qPage.close();

    // Answer card
    const aPage = await context.newPage();
    await aPage.setContent(answerCardHTML(q), { waitUntil: "load" });
    const aPath = resolve(outDir, `${prefix}-answer.png`);
    await aPage.screenshot({ path: aPath });
    await aPage.close();

    console.log(`  ✅ ${prefix}: "${q.text.slice(0, 60)}..."`);
    generated.push({ id: q.id, subject: q.subject, question: qPath, answer: aPath });
  }

  await browser.close();

  console.log(`\n🎉 Generated ${generated.length} card pairs in marketing/cards/${date}/`);
  return generated;
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
