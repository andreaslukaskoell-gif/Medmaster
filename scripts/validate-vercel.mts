#!/usr/bin/env npx tsx
/**
 * Validates vercel.json before deploy to prevent production outages.
 * Run: npx tsx scripts/validate-vercel.mts
 *
 * Checks:
 * 1. buildCommand must be "npm run build" (no playwright, puppeteer, etc.)
 * 2. SPA fallback rewrite must exist and point to "/"
 * 3. outputDirectory must be "dist"
 * 4. No dangerous tools in buildCommand
 */
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const vercelPath = join(__dirname, "..", "vercel.json");

let errors: string[] = [];

try {
  const raw = readFileSync(vercelPath, "utf-8");
  const config = JSON.parse(raw);

  // 1. buildCommand check
  const ALLOWED_BUILD_COMMANDS = ["npm run build", "vite build"];
  const FORBIDDEN_KEYWORDS = ["playwright", "puppeteer", "chromium", "selenium", "cypress", "--with-deps"];

  if (!config.buildCommand) {
    errors.push("buildCommand fehlt in vercel.json");
  } else if (!ALLOWED_BUILD_COMMANDS.includes(config.buildCommand)) {
    errors.push(`buildCommand muss "${ALLOWED_BUILD_COMMANDS[0]}" sein, ist aber: "${config.buildCommand}"`);
  }

  if (config.buildCommand) {
    for (const kw of FORBIDDEN_KEYWORDS) {
      if (config.buildCommand.toLowerCase().includes(kw)) {
        errors.push(`buildCommand enthält verbotenes Keyword "${kw}" — das scheitert auf Vercel!`);
      }
    }
  }

  // 2. outputDirectory check
  if (config.outputDirectory && config.outputDirectory !== "dist") {
    errors.push(`outputDirectory muss "dist" sein, ist aber: "${config.outputDirectory}"`);
  }

  // 3. SPA fallback rewrite check
  const rewrites = config.rewrites || [];
  const spaFallback = rewrites.find(
    (r: { source: string; destination: string }) => r.source === "/(.*)"
  );

  if (!spaFallback) {
    errors.push('SPA-Fallback Rewrite fehlt: { "source": "/(.*)", "destination": "/" }');
  } else if (spaFallback.destination === "/index.html") {
    errors.push('SPA-Fallback destination darf NICHT "/index.html" sein (cleanUrls-Bug!) — muss "/" sein');
  } else if (spaFallback.destination !== "/") {
    errors.push(`SPA-Fallback destination muss "/" sein, ist aber: "${spaFallback.destination}"`);
  }

  // 4. SPA fallback must be LAST rewrite
  const lastRewrite = rewrites[rewrites.length - 1];
  if (lastRewrite && lastRewrite.source !== "/(.*)") {
    errors.push('SPA-Fallback "/(.*)" muss der LETZTE Rewrite sein');
  }

  // 5. cleanUrls + trailingSlash consistency
  if (config.cleanUrls !== true) {
    errors.push("cleanUrls muss true sein");
  }
  if (config.trailingSlash !== false) {
    errors.push("trailingSlash muss false sein");
  }

} catch (e) {
  errors.push(`vercel.json konnte nicht gelesen werden: ${(e as Error).message}`);
}

if (errors.length > 0) {
  console.error("\n  ❌ vercel.json Validierung FEHLGESCHLAGEN:\n");
  errors.forEach((e) => console.error(`  • ${e}`));
  console.error("");
  process.exit(1);
} else {
  console.log("  ✅ vercel.json OK — buildCommand, SPA-Fallback, outputDirectory validiert");
}
