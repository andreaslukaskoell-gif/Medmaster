#!/usr/bin/env node
/**
 * Post-build prerender script.
 * Spins up a local server from dist/, visits each public route with Playwright,
 * waits for JS to render, then writes the resulting HTML back to dist/.
 * Googlebot will see fully rendered HTML instead of an empty <div id="root">.
 */
import { chromium } from "playwright-core";
import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");
const PORT = 4567;

// All public (non-auth-gated) routes to prerender
const ROUTES = [
  "/",
  "/medat-uebungsfragen",
  "/medat-biologie-fragen",
  "/medat-chemie-fragen",
  "/medat-physik-fragen",
  "/medat-mathematik-fragen",
  "/medat-guide",
  "/bms-stichwortliste-2026",
  "/faq",
  "/medat-punkte-rechner",
  "/medat-kff-ueben",
  "/preise",
  "/blog",
  "/blog/medat-bms-fehler",
  "/blog/kff-zahlenfolgen-tipps",
  "/blog/medat-lernplan-3-monate",
  "/blog/bms-biologie-wichtigste-themen",
  "/blog/medat-textverstaendnis-strategien",
  "/blog/medat-simulation-wichtig",
  "/blog/medat-punkte-berechnen",
  "/blog/medat-kff-tipps",
  "/blog/medat-schwierigkeitsgrad",
  "/blog/bms-chemie-lernen",
  "/blog/medat-2026-aenderungen",
  "/blog/medat-zeitmanagement",
  "/blog/medat-biologie-zellbiologie",
  "/blog/medat-physik-mechanik",
  "/blog/medat-motivation-durchhalten",
  "/blog/medat-vs-ham-nat",
  "/blog/medat-sek-tipps",
  "/blog/medat-lerngruppe",
  "/blog/medat-stressbewaeltigung",
  "/blog/medat-erfahrungsbericht",
  "/blog/medat-anmeldung-2026",
  "/blog/medat-biologie-genetik",
  "/blog/medat-mathematik-tipps",
  "/blog/medat-wortfluessigkeit-ueben",
  "/blog/medat-implikationen-tipps",
  "/blog/medat-figuren-zusammensetzen",
  "/blog/medat-gedaechtnis-merkfaehigkeit",
  "/blog/medizinstudium-oesterreich",
  "/blog/medat-buecher-empfehlungen",
  "/blog/wann-ist-medat-2026",
  "/blog/medat-bestehensgrenze",
  "/blog/medat-wie-oft-wiederholen",
  "/blog/medat-ohne-kurs-bestehen",
  "/blog/medat-welche-buecher",
  "/blog/medat-bms-gewichtung",
  "/medat-countdown",
  "/lp/medat",
  "/lp/bms",
  "/challenge",
  "/login",
  "/impressum",
  "/datenschutz",
  "/agb",
];

// Simple static file server for dist/
function startServer() {
  const mime = {
    ".html": "text/html",
    ".js": "application/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".woff2": "font/woff2",
  };

  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let url = req.url.split("?")[0];
      let filePath = join(DIST, url);

      // SPA fallback: if file doesn't exist, serve index.html
      if (!existsSync(filePath) || !filePath.includes(".")) {
        filePath = join(DIST, "index.html");
      }

      try {
        const content = readFileSync(filePath);
        const ext = filePath.match(/\.[^.]+$/)?.[0] || ".html";
        res.writeHead(200, { "Content-Type": mime[ext] || "application/octet-stream" });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end("Not found");
      }
    });

    server.listen(PORT, () => {
      console.log(`  Prerender server on http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function prerender() {
  console.log(`\n  Prerendering ${ROUTES.length} routes...\n`);

  const server = await startServer();
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: "MedMaster-Prerenderer",
    javaScriptEnabled: true,
  });

  let success = 0;
  let skipped = 0;

  for (const route of ROUTES) {
    const page = await context.newPage();
    try {
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: "domcontentloaded",
        timeout: 10000,
      });

      // Wait for React to render content
      await page.waitForTimeout(3000);

      // Get the rendered HTML
      const html = await page.content();

      // Check if React rendered real content (more than just the loader spinner)
      const hasContent = html.length > 5000 && (
        html.includes("<h1") || html.includes("<h2") || html.includes("<article") ||
        html.includes("class=\"") || html.includes('data-discover')
      );
      if (!hasContent) {
        console.log(`  SKIP ${route} (no content rendered, ${html.length} bytes)`);
        skipped++;
      } else {
        // Determine output path
        const outPath =
          route === "/"
            ? join(DIST, "index.html")
            : join(DIST, route, "index.html");

        const outDir = dirname(outPath);
        if (!existsSync(outDir)) {
          mkdirSync(outDir, { recursive: true });
        }

        writeFileSync(outPath, html, "utf-8");
        console.log(`  OK   ${route}`);
        success++;
      }
    } catch (err) {
      console.log(`  FAIL ${route}: ${err.message}`);
      skipped++;
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();

  console.log(`\n  Done: ${success} rendered, ${skipped} skipped\n`);
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
