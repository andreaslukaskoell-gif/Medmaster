#!/usr/bin/env node
/**
 * Quiz Card Screenshot Generator
 *
 * Takes screenshots of the /medat-uebungsfragen demo page for social media.
 * Uses Playwright to render real website components — no SVG generation needed.
 *
 * Usage:
 *   node scripts/generate-quiz-cards.mjs                  # All sections
 *   node scripts/generate-quiz-cards.mjs --section bms    # Only BMS
 *   node scripts/generate-quiz-cards.mjs --section kff    # Only KFF
 *   node scripts/generate-quiz-cards.mjs --full           # Full page screenshot
 *
 * Prerequisites:
 *   - Dev server running: npm run dev
 *   - Playwright installed: npx playwright install chromium
 */

import { chromium } from "playwright";
import { mkdirSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, "..", "marketing", "cards");
const BASE_URL = process.env.BASE_URL || "http://localhost:5173";

const args = process.argv.slice(2);
const section = args.includes("--section") ? args[args.indexOf("--section") + 1] : "all";
const fullPage = args.includes("--full");

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const date = new Date().toISOString().slice(0, 10);

async function main() {
  console.log("Launching browser...");
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1080, height: 1920 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  console.log(`Navigating to ${BASE_URL}/medat-uebungsfragen ...`);
  await page.goto(`${BASE_URL}/medat-uebungsfragen`, { waitUntil: "networkidle" });

  if (fullPage) {
    const path = resolve(OUT_DIR, `full-page-${date}.png`);
    await page.screenshot({ path, fullPage: true });
    console.log(`  Full page: ${path}`);
    await browser.close();
    return;
  }

  // ── BMS Screenshots ────────────────────────────────────────
  if (section === "all" || section === "bms") {
    const tabs = ["biologie", "chemie", "physik", "mathematik"];
    for (const tab of tabs) {
      // Click the tab
      const tabBtn = page.locator(`button:text("${tab.charAt(0).toUpperCase() + tab.slice(1)}")`);
      if (await tabBtn.count() > 0) {
        await tabBtn.first().click();
        await page.waitForTimeout(300);
      }

      // Screenshot each question card
      const cards = page.locator("section").first().locator("> div.space-y-4 > div");
      const cardCount = await cards.count();
      for (let i = 0; i < Math.min(cardCount, 5); i++) {
        const card = cards.nth(i);
        const path = resolve(OUT_DIR, `bms-${tab}-${i + 1}-${date}.png`);
        await card.screenshot({ path });
        console.log(`  ${path}`);
      }

      // Screenshot with answer revealed (click first question)
      const firstCard = cards.first();
      const revealBtn = firstCard.locator("button:has-text('Antwort anzeigen')");
      if (await revealBtn.count() > 0) {
        await revealBtn.click();
        await page.waitForTimeout(300);
        const path = resolve(OUT_DIR, `bms-${tab}-1-answer-${date}.png`);
        await firstCard.screenshot({ path });
        console.log(`  ${path} (with answer)`);

        // Collapse again
        const collapseBtn = firstCard.locator("button:has-text('Einklappen')");
        if (await collapseBtn.count() > 0) await collapseBtn.click();
      }
    }
  }

  // ── KFF Screenshots ────────────────────────────────────────
  if (section === "all" || section === "kff") {
    const kffSections = page.locator("section").filter({ has: page.locator("h2") });
    const sectionCount = await kffSections.count();

    for (let s = 0; s < sectionCount; s++) {
      const sec = kffSections.nth(s);
      const heading = await sec.locator("h2").first().textContent();
      if (!heading) continue;

      const slug = heading.toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

      // Skip BMS section
      if (slug.includes("bms") || slug.includes("basiskenntnistest")) continue;

      // Screenshot the full section
      const path = resolve(OUT_DIR, `kff-${slug}-${date}.png`);
      await sec.screenshot({ path });
      console.log(`  ${path}`);

      // Screenshot individual cards within section
      const cards = sec.locator("> div.space-y-4 > div");
      const cardCount = await cards.count();
      for (let i = 0; i < Math.min(cardCount, 3); i++) {
        const card = cards.nth(i);
        const cardPath = resolve(OUT_DIR, `kff-${slug}-${i + 1}-${date}.png`);
        await card.screenshot({ path: cardPath });
        console.log(`  ${cardPath}`);
      }
    }
  }

  // ── Hero + CTA Screenshots (for ads) ───────────────────────
  if (section === "all") {
    const hero = page.locator("header").first();
    if (await hero.count() > 0) {
      const path = resolve(OUT_DIR, `hero-${date}.png`);
      await hero.screenshot({ path });
      console.log(`  ${path}`);
    }

    // CTA section
    const cta = page.locator("text=Alle").locator("..").locator("..");
    if (await cta.count() > 0) {
      try {
        const path = resolve(OUT_DIR, `cta-${date}.png`);
        await cta.first().screenshot({ path });
        console.log(`  ${path}`);
      } catch { /* ignore if not found */ }
    }
  }

  await browser.close();
  console.log(`\nDone! Cards saved in marketing/cards/`);
}

main().catch((err) => {
  console.error("Error:", err.message);
  console.error("\nMake sure dev server is running: npm run dev");
  process.exit(1);
});
