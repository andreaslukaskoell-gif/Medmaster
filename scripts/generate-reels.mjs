#!/usr/bin/env node
/**
 * MedMaster Reel Generator
 *
 * Creates high-quality 1080x1920 (9:16) reel frames showing the app in action.
 * Combines frames into MP4 videos using ffmpeg.
 *
 * Reel Types:
 *   1. "quiz-challenge"       — Interactive quiz with countdown + reveal
 *   2. "stats-urgency"        — Impressive numbers + urgency CTA
 *   3. "app-walkthrough"      — Screen recording style showing app features
 *   4. "richtig-oder-falsch"  — True/False quick-fire format
 *
 * Usage:
 *   node scripts/generate-reels.mjs                    # All reels
 *   node scripts/generate-reels.mjs --type quiz        # Just quiz reel
 *   node scripts/generate-reels.mjs --type stats       # Just stats reel
 *   node scripts/generate-reels.mjs --type walkthrough # App walkthrough
 *   node scripts/generate-reels.mjs --type rof         # Richtig oder Falsch
 */

import { chromium } from "playwright";
import { mkdirSync, existsSync, rmSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, "..", "marketing", "reels");
if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const BRAND = {
  primary: "#1b3ea7",
  primaryDark: "#0f2a80",
  accent: "#f59e0b",
  success: "#22c55e",
  white: "#ffffff",
  bg: "#0a1628",
};

// ── Frame Templates ──────────────────────────────────────────

function frameHTML(content) {
  const bg = `linear-gradient(180deg, ${BRAND.primaryDark}, ${BRAND.bg})`;
  return `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { width:1080px; height:1920px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; background:${bg}; overflow:hidden; }
  .frame { width:1080px; height:1920px; display:flex; flex-direction:column; }
</style></head><body><div class="frame">${content}</div></body></html>`;
}

// ── Reel 1: Quiz Challenge ───────────────────────────────────

function quizFrames() {
  const question = "Welches Hormon senkt den Blutzuckerspiegel?";
  const options = [
    { letter: "A", text: "Glucagon" },
    { letter: "B", text: "Insulin" },
    { letter: "C", text: "Cortisol" },
    { letter: "D", text: "Adrenalin" },
    { letter: "E", text: "Somatostatin" },
  ];

  const f1 = frameHTML(`
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px;">
      <div style="font-size:100px;margin-bottom:40px;">🧠</div>
      <div style="font-size:64px;font-weight:800;color:white;text-align:center;line-height:1.3;">
        Schaffst du diese MedAT-Frage?
      </div>
      <div style="margin-top:60px;padding:20px 50px;border-radius:999px;background:${BRAND.accent};font-size:36px;font-weight:700;color:#1a1a1a;">
        Teste dich jetzt!
      </div>
    </div>
    <div style="padding:40px;text-align:center;">
      <div style="font-size:28px;color:rgba(255,255,255,0.4);font-weight:600;">@medmaster_medat</div>
    </div>
  `);

  const optionsHTML = options.map(o => `
    <div style="display:flex;align-items:center;gap:24px;padding:24px 32px;background:rgba(255,255,255,0.08);border-radius:20px;border:2px solid rgba(255,255,255,0.15);">
      <div style="min-width:64px;height:64px;border-radius:16px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:34px;color:${BRAND.accent};background:rgba(245,158,11,0.15);">${o.letter}</div>
      <div style="font-size:36px;color:white;font-weight:500;">${o.text}</div>
    </div>
  `).join("\n");

  const f2 = frameHTML(`
    <div style="padding:60px 50px 30px;">
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:40px;">
        <div style="font-size:36px;font-weight:800;color:white;">MedMaster</div>
        <div style="padding:10px 24px;border-radius:20px;background:#059669;color:white;font-size:22px;font-weight:700;">BMS Biologie</div>
      </div>
      <div style="font-size:48px;font-weight:700;color:white;line-height:1.3;margin-bottom:50px;">
        ${question}
      </div>
    </div>
    <div style="flex:1;padding:0 50px;display:flex;flex-direction:column;gap:16px;justify-content:center;">
      ${optionsHTML}
    </div>
    <div style="padding:40px 50px;text-align:center;">
      <div style="font-size:40px;font-weight:700;color:${BRAND.accent};">⏱ 30 Sekunden...</div>
    </div>
  `);

  const f3 = frameHTML(`
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;">
      <div style="font-size:200px;font-weight:900;color:${BRAND.accent};">3</div>
      <div style="font-size:40px;color:rgba(255,255,255,0.6);margin-top:20px;">Auflösung kommt...</div>
    </div>
  `);

  const revealOptions = options.map(o => {
    const isCorrect = o.letter === "B";
    const bg = isCorrect ? "rgba(34,197,94,0.2)" : "rgba(255,255,255,0.05)";
    const border = isCorrect ? "#22c55e" : "rgba(255,255,255,0.1)";
    const textColor = isCorrect ? "#4ade80" : "rgba(255,255,255,0.35)";
    const check = isCorrect ? '<div style="margin-left:auto;font-size:44px;">✅</div>' : "";
    return `
    <div style="display:flex;align-items:center;gap:24px;padding:24px 32px;background:${bg};border-radius:20px;border:2px solid ${border};">
      <div style="min-width:64px;height:64px;border-radius:16px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:34px;color:${isCorrect ? "#22c55e" : "rgba(255,255,255,0.3)"};background:${isCorrect ? "rgba(34,197,94,0.15)" : "rgba(255,255,255,0.05)"};">${o.letter}</div>
      <div style="font-size:36px;color:${textColor};font-weight:${isCorrect ? "700" : "400"};">${o.text}</div>
      ${check}
    </div>`;
  }).join("\n");

  const f4 = frameHTML(`
    <div style="padding:60px 50px 30px;">
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:40px;">
        <div style="font-size:36px;font-weight:800;color:white;">MedMaster</div>
        <div style="padding:10px 24px;border-radius:20px;background:#22c55e;color:white;font-size:22px;font-weight:700;">✅ Auflösung</div>
      </div>
      <div style="font-size:42px;font-weight:700;color:white;line-height:1.3;margin-bottom:30px;">
        ${question}
      </div>
    </div>
    <div style="flex:1;padding:0 50px;display:flex;flex-direction:column;gap:14px;justify-content:center;">
      ${revealOptions}
    </div>
    <div style="padding:30px 50px;">
      <div style="padding:24px 32px;background:rgba(34,197,94,0.1);border-radius:20px;border:1px solid rgba(34,197,94,0.3);">
        <div style="font-size:28px;color:#86efac;line-height:1.5;">Insulin wird in den β-Zellen der Langerhans-Inseln im Pankreas produziert und senkt den Blutzucker durch Förderung der Glukoseaufnahme.</div>
      </div>
    </div>
  `);

  const f5 = frameHTML(`
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px;">
      <div style="font-size:80px;margin-bottom:30px;">📱</div>
      <div style="font-size:56px;font-weight:800;color:white;text-align:center;line-height:1.3;margin-bottom:20px;">
        Tausende MedAT-Fragen
      </div>
      <div style="font-size:40px;color:${BRAND.accent};font-weight:700;text-align:center;margin-bottom:60px;">
        Bis Ende März komplett gratis!
      </div>
      <div style="padding:28px 60px;border-radius:999px;background:${BRAND.accent};font-size:40px;font-weight:800;color:#1a1a1a;">
        medmaster.at →
      </div>
      <div style="margin-top:30px;font-size:28px;color:rgba(255,255,255,0.5);">BMS · KFF · TV · SEK — alles drin</div>
    </div>
    <div style="padding:40px;text-align:center;">
      <div style="font-size:32px;color:rgba(255,255,255,0.3);">@medmaster_medat</div>
    </div>
  `);

  return [
    { html: f1, duration: 2 },
    { html: f2, duration: 5 },
    { html: f3, duration: 2 },
    { html: f4, duration: 4 },
    { html: f5, duration: 3 },
  ];
}

// ── Reel 2: Stats / Urgency ─────────────────────────────────

function statsFrames() {
  const f1 = frameHTML(`
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px;">
      <div style="font-size:100px;margin-bottom:40px;">📊</div>
      <div style="font-size:56px;font-weight:800;color:white;text-align:center;line-height:1.4;">
        Warum 87% beim MedAT durchfallen
      </div>
    </div>
  `);

  const f2 = frameHTML(`
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px;gap:50px;">
      <div style="text-align:center;">
        <div style="font-size:120px;font-weight:900;color:${BRAND.accent};">16.000+</div>
        <div style="font-size:36px;color:rgba(255,255,255,0.6);margin-top:10px;">Bewerber pro Jahr</div>
      </div>
      <div style="text-align:center;">
        <div style="font-size:120px;font-weight:900;color:#ef4444;">1.850</div>
        <div style="font-size:36px;color:rgba(255,255,255,0.6);margin-top:10px;">Studienplätze</div>
      </div>
      <div style="text-align:center;">
        <div style="font-size:80px;font-weight:900;color:rgba(255,255,255,0.3);">= 11% Erfolgsquote</div>
      </div>
    </div>
  `);

  const f3 = frameHTML(`
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px;">
      <div style="font-size:56px;font-weight:800;color:white;text-align:center;line-height:1.4;margin-bottom:40px;">
        Der Unterschied?
      </div>
      <div style="font-size:48px;font-weight:700;color:${BRAND.accent};text-align:center;line-height:1.5;">
        Wer ÜBEN kann,<br>gewinnt.
      </div>
    </div>
  `);

  const features = ["BMS-Fragen alle Fächer", "KFF-Training mit Generator", "TV-Textsets zum Üben", "SEK-Aufgaben", "Alle MedAT-Bereiche"];
  const f4 = frameHTML(`
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px;gap:40px;">
      <div style="font-size:44px;font-weight:800;color:white;text-align:center;">MedMaster gibt dir:</div>
      ${features.map(t => `
        <div style="display:flex;align-items:center;gap:20px;">
          <div style="font-size:36px;">✅</div>
          <div style="font-size:38px;color:white;font-weight:600;">${t}</div>
        </div>
      `).join("")}
    </div>
  `);

  const f5 = frameHTML(`
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px;">
      <div style="padding:20px 40px;border-radius:16px;background:rgba(239,68,68,0.2);border:2px solid #ef4444;margin-bottom:40px;">
        <div style="font-size:36px;color:#ef4444;font-weight:700;">⏰ Nur noch bis Ende März gratis!</div>
      </div>
      <div style="font-size:56px;font-weight:800;color:white;text-align:center;line-height:1.3;margin-bottom:40px;">
        Jetzt starten.<br>Nicht morgen.
      </div>
      <div style="padding:28px 60px;border-radius:999px;background:${BRAND.accent};font-size:40px;font-weight:800;color:#1a1a1a;">
        medmaster.at →
      </div>
      <div style="margin-top:40px;font-size:28px;color:rgba(255,255,255,0.4);">@medmaster_medat · Link in Bio</div>
    </div>
  `);

  return [
    { html: f1, duration: 3 },
    { html: f2, duration: 4 },
    { html: f3, duration: 3 },
    { html: f4, duration: 4 },
    { html: f5, duration: 3 },
  ];
}

// ── Reel 3: App Walkthrough ──────────────────────────────────

function walkthroughFrames() {
  const f1 = frameHTML(`
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px;">
      <div style="font-size:56px;font-weight:800;color:white;text-align:center;line-height:1.3;">
        Die beste gratis<br>MedAT-App 2026
      </div>
      <div style="margin-top:40px;font-size:36px;color:${BRAND.accent};font-weight:600;">⬇️ Schau selbst</div>
    </div>
  `);

  const mockPhone = (screenContent, label) => frameHTML(`
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px;">
      <div style="font-size:32px;color:rgba(255,255,255,0.5);margin-bottom:30px;font-weight:600;">${label}</div>
      <div style="width:380px;height:760px;border-radius:40px;border:4px solid rgba(255,255,255,0.2);overflow:hidden;background:#0f172a;box-shadow:0 0 80px rgba(27,62,167,0.4);">
        <div style="height:40px;background:#1e293b;display:flex;align-items:center;justify-content:center;">
          <div style="width:80px;height:6px;border-radius:3px;background:rgba(255,255,255,0.2);"></div>
        </div>
        <div style="padding:20px;display:flex;flex-direction:column;gap:12px;">
          ${screenContent}
        </div>
      </div>
    </div>
  `);

  const f2 = mockPhone(`
    <div style="font-size:22px;font-weight:800;color:white;margin-bottom:8px;">📚 BMS Training</div>
    ${["🧬 Biologie", "⚗️ Chemie", "⚡ Physik", "📐 Mathematik"].map(s => `
      <div style="padding:16px;background:rgba(255,255,255,0.08);border-radius:14px;display:flex;align-items:center;justify-content:space-between;">
        <div style="font-size:20px;color:white;font-weight:600;">${s}</div>
        <div style="font-size:16px;color:${BRAND.accent};">Fragen →</div>
      </div>
    `).join("")}
    <div style="margin-top:12px;padding:16px;background:rgba(245,158,11,0.1);border-radius:14px;border:1px solid rgba(245,158,11,0.3);">
      <div style="font-size:18px;color:${BRAND.accent};font-weight:600;">🎯 Simulation starten</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.5);margin-top:4px;">Wie beim echten MedAT üben</div>
    </div>
  `, "📱 Dashboard");

  const f3 = mockPhone(`
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
      <div style="padding:6px 14px;border-radius:10px;background:#059669;color:white;font-size:14px;font-weight:700;">Biologie</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.4);">Frage 3/10</div>
    </div>
    <div style="font-size:18px;font-weight:700;color:white;line-height:1.4;margin-bottom:16px;">Welches Hormon senkt den Blutzuckerspiegel?</div>
    ${["A) Glucagon", "B) Insulin ✅", "C) Cortisol", "D) Adrenalin", "E) Somatostatin"].map((o, i) => `
      <div style="padding:12px 16px;background:${i === 1 ? "rgba(34,197,94,0.15)" : "rgba(255,255,255,0.06)"};border-radius:12px;border:${i === 1 ? "2px solid #22c55e" : "1px solid rgba(255,255,255,0.1)"};">
        <div style="font-size:16px;color:${i === 1 ? "#4ade80" : "white"};">${o}</div>
      </div>
    `).join("")}
  `, "🧠 BMS-Fragen");

  const f4 = mockPhone(`
    <div style="font-size:20px;font-weight:800;color:white;margin-bottom:16px;">📊 Dein Fortschritt</div>
    <div style="padding:16px;background:rgba(34,197,94,0.1);border-radius:14px;border:1px solid rgba(34,197,94,0.3);margin-bottom:12px;">
      <div style="font-size:32px;font-weight:900;color:#4ade80;">78%</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.5);">Richtig beantwortet</div>
    </div>
    <div style="display:flex;gap:10px;margin-bottom:12px;">
      <div style="flex:1;padding:14px;background:rgba(255,255,255,0.06);border-radius:12px;text-align:center;">
        <div style="font-size:24px;font-weight:800;color:white;">142</div>
        <div style="font-size:12px;color:rgba(255,255,255,0.4);">Fragen heute</div>
      </div>
      <div style="flex:1;padding:14px;background:rgba(255,255,255,0.06);border-radius:12px;text-align:center;">
        <div style="font-size:24px;font-weight:800;color:${BRAND.accent};">🔥 7</div>
        <div style="font-size:12px;color:rgba(255,255,255,0.4);">Tage Streak</div>
      </div>
    </div>
    ${["Biologie: 85%", "Chemie: 72%", "Physik: 78%", "Mathe: 65%"].map(s => {
      const [name, pct] = s.split(": ");
      return `
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
        <div style="font-size:14px;color:rgba(255,255,255,0.6);width:120px;">${name}</div>
        <div style="flex:1;height:10px;background:rgba(255,255,255,0.1);border-radius:5px;overflow:hidden;">
          <div style="height:100%;width:${pct};background:${BRAND.accent};border-radius:5px;"></div>
        </div>
        <div style="font-size:14px;color:${BRAND.accent};width:40px;">${pct}</div>
      </div>`;
    }).join("")}
  `, "📈 Statistiken");

  const f5 = frameHTML(`
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px;">
      <div style="font-size:52px;font-weight:800;color:white;text-align:center;line-height:1.3;margin-bottom:20px;">
        Bereit für den MedAT?
      </div>
      <div style="font-size:36px;color:rgba(255,255,255,0.6);text-align:center;margin-bottom:50px;">
        Starte jetzt — bis Ende März komplett gratis
      </div>
      <div style="padding:28px 60px;border-radius:999px;background:${BRAND.accent};font-size:40px;font-weight:800;color:#1a1a1a;">
        medmaster.at →
      </div>
      <div style="margin-top:40px;font-size:28px;color:rgba(255,255,255,0.4);">@medmaster_medat</div>
    </div>
  `);

  return [
    { html: f1, duration: 2 },
    { html: f2, duration: 3 },
    { html: f3, duration: 4 },
    { html: f4, duration: 3 },
    { html: f5, duration: 3 },
  ];
}

// ── Reel 4: Richtig oder Falsch ──────────────────────────────

function richtigOderFalschFrames() {
  const statements = [
    { text: "DNA-Replikation verläuft semikonservativ", correct: true },
    { text: "Mitochondrien haben keine eigene DNA", correct: false },
    { text: "Enzyme werden bei Reaktionen verbraucht", correct: false },
  ];

  const frames = [];

  frames.push({ html: frameHTML(`
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px;">
      <div style="font-size:64px;font-weight:800;color:white;text-align:center;line-height:1.3;">
        Richtig oder Falsch?
      </div>
      <div style="margin-top:30px;font-size:40px;color:${BRAND.accent};">3 MedAT-Aussagen</div>
      <div style="margin-top:60px;display:flex;gap:30px;">
        <div style="padding:18px 40px;border-radius:20px;background:rgba(34,197,94,0.2);border:2px solid #22c55e;font-size:36px;color:#4ade80;font-weight:700;">✅ Richtig</div>
        <div style="padding:18px 40px;border-radius:20px;background:rgba(239,68,68,0.2);border:2px solid #ef4444;font-size:36px;color:#f87171;font-weight:700;">❌ Falsch</div>
      </div>
    </div>
  `), duration: 3 });

  for (const s of statements) {
    frames.push({ html: frameHTML(`
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px;">
        <div style="font-size:22px;color:rgba(255,255,255,0.4);font-weight:600;margin-bottom:30px;">RICHTIG ODER FALSCH?</div>
        <div style="padding:50px;background:rgba(255,255,255,0.06);border-radius:30px;border:2px solid rgba(255,255,255,0.15);max-width:900px;">
          <div style="font-size:48px;font-weight:700;color:white;text-align:center;line-height:1.4;">
            &bdquo;${s.text}&ldquo;
          </div>
        </div>
        <div style="margin-top:50px;font-size:36px;color:rgba(255,255,255,0.3);">🤔 Was denkst du?</div>
      </div>
    `), duration: 4 });

    const color = s.correct ? "#22c55e" : "#ef4444";
    const icon = s.correct ? "✅" : "❌";
    const label = s.correct ? "RICHTIG!" : "FALSCH!";
    frames.push({ html: frameHTML(`
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px;">
        <div style="font-size:100px;margin-bottom:30px;">${icon}</div>
        <div style="font-size:64px;font-weight:900;color:${color};margin-bottom:40px;">${label}</div>
        <div style="padding:40px;background:rgba(255,255,255,0.06);border-radius:24px;max-width:900px;">
          <div style="font-size:40px;color:white;text-align:center;line-height:1.4;">
            &bdquo;${s.text}&ldquo;
          </div>
        </div>
      </div>
    `), duration: 2.5 });
  }

  frames.push({ html: frameHTML(`
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px;">
      <div style="font-size:48px;font-weight:800;color:white;text-align:center;line-height:1.3;margin-bottom:20px;">
        Wie viele hattest du richtig?
      </div>
      <div style="font-size:36px;color:rgba(255,255,255,0.5);text-align:center;margin-bottom:50px;">
        Kommentiere dein Ergebnis! 💬
      </div>
      <div style="padding:24px 50px;border-radius:999px;background:${BRAND.accent};font-size:36px;font-weight:800;color:#1a1a1a;">
        Gratis testen → medmaster.at
      </div>
    </div>
  `), duration: 3 });

  return frames;
}

// ── Render + Compile ─────────────────────────────────────────

async function renderReel(name, frames) {
  const reelDir = resolve(OUT_DIR, name);
  if (!existsSync(reelDir)) mkdirSync(reelDir, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1080, height: 1920 },
    deviceScaleFactor: 1,
  });

  console.log(`\n🎬 Rendering "${name}" (${frames.length} frames)...`);

  let frameIdx = 0;
  for (let i = 0; i < frames.length; i++) {
    const { html, duration } = frames[i];
    const numFrames = Math.round(duration * 30);
    const page = await context.newPage();
    await page.setContent(html, { waitUntil: "load" });

    for (let f = 0; f < numFrames; f++) {
      const framePath = resolve(reelDir, `frame-${String(frameIdx).padStart(5, "0")}.png`);
      await page.screenshot({ path: framePath });
      frameIdx++;
    }
    await page.close();
    console.log(`  Frame ${i + 1}/${frames.length}: ${duration}s (${numFrames} frames)`);
  }

  await browser.close();

  // Compile to MP4 with ffmpeg
  const mp4Path = resolve(OUT_DIR, `${name}.mp4`);
  try {
    execFileSync("ffmpeg", [
      "-y", "-framerate", "30",
      "-i", `${reelDir}/frame-%05d.png`,
      "-c:v", "libx264", "-pix_fmt", "yuv420p",
      "-preset", "fast", "-crf", "18",
      mp4Path,
    ], { stdio: "pipe" });
    console.log(`  ✅ Video: marketing/reels/${name}.mp4`);

    // Clean up frame PNGs
    rmSync(reelDir, { recursive: true, force: true });
  } catch {
    console.log(`  ⚠️  ffmpeg not available — frames saved in marketing/reels/${name}/`);
    console.log(`  Install: brew install ffmpeg`);
  }

  return mp4Path;
}

// ── Caption Templates ────────────────────────────────────────

const REEL_CAPTIONS = {
  "quiz-challenge": `Schaffst du diese MedAT-Frage? 🧠

Kommentiere deinen Buchstaben BEVOR du die Auflösung siehst!

📱 Bis Ende März komplett gratis → medmaster.at

#MedAT #MedAT2026 #Medizinstudium #BMS #MedUniWien`,

  "stats-urgency": `87% fallen beim MedAT durch. Gehörst du zu den 13%? 📊

Der Unterschied: Wer übt, gewinnt.

📱 Bis Ende März komplett gratis → medmaster.at

#MedAT #MedAT2026 #Aufnahmeprüfung #Medizin #Lerntipps`,

  "app-walkthrough": `Die beste gratis MedAT-App 2026 📱

BMS · KFF · TV · SEK — alles drin.

📱 Bis Ende März komplett gratis → medmaster.at

#MedAT #MedAT2026 #Medizinstudium #BMS #MedUniGraz`,

  "richtig-oder-falsch": `Richtig oder Falsch? 3 MedAT-Aussagen — schaffst du alle? 🧠

Kommentiere: 3/3, 2/3, 1/3 oder 0/3? 💬

📱 Gratis testen → medmaster.at

#MedAT #MedAT2026 #BMS #Prüfungsvorbereitung #MedUniInnsbruck`,
};

// ── Main ─────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const typeIdx = args.indexOf("--type");
  const type = typeIdx >= 0 ? args[typeIdx + 1] : "all";

  const reels = [];

  if (type === "all" || type === "quiz") {
    reels.push({ name: "quiz-challenge", frames: quizFrames() });
  }
  if (type === "all" || type === "stats") {
    reels.push({ name: "stats-urgency", frames: statsFrames() });
  }
  if (type === "all" || type === "walkthrough") {
    reels.push({ name: "app-walkthrough", frames: walkthroughFrames() });
  }
  if (type === "all" || type === "rof") {
    reels.push({ name: "richtig-oder-falsch", frames: richtigOderFalschFrames() });
  }

  console.log(`🎬 Generating ${reels.length} reel(s)...\n`);

  for (const reel of reels) {
    await renderReel(reel.name, reel.frames);
    console.log(`\n📋 Caption für "${reel.name}":\n---`);
    console.log(REEL_CAPTIONS[reel.name]);
    console.log("---\n");
  }

  console.log("\n🎉 Alle Reels generiert!");
  console.log("📁 Ordner: marketing/reels/");
  console.log("\n💡 Upload: Meta Business Suite → Reel erstellen → MP4 hochladen");
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
