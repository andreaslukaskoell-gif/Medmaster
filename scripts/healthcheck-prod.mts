#!/usr/bin/env npx tsx
/**
 * Production health check — verifies critical routes return 200.
 * Run after every deploy: npx tsx scripts/healthcheck-prod.mts
 */
const BASE = "https://www.medmaster.at";

const CRITICAL_ROUTES = [
  "/",
  "/login",
  "/dashboard",
  "/bms",
  "/kff",
  "/tv",
  "/sek",
  "/preise",
  "/blog",
  "/admin/stats",
  "/fragen-trainer",
  "/simulation",
  "/sitemap.xml",
  "/robots.txt",
];

async function check() {
  let failed = 0;
  let passed = 0;

  for (const route of CRITICAL_ROUTES) {
    try {
      const res = await fetch(`${BASE}${route}`, { method: "HEAD", redirect: "follow" });
      if (res.ok) {
        console.log(`  ✅ ${res.status} ${route}`);
        passed++;
      } else {
        console.error(`  ❌ ${res.status} ${route}`);
        failed++;
      }
    } catch (e) {
      console.error(`  ❌ FAIL ${route}: ${(e as Error).message}`);
      failed++;
    }
  }

  console.log(`\n  ${passed}/${CRITICAL_ROUTES.length} OK, ${failed} fehlgeschlagen\n`);

  if (failed > 0) {
    console.error("  🚨 PRODUCTION IST KAPUTT! Sofort fixen!\n");
    process.exit(1);
  }
}

check();
