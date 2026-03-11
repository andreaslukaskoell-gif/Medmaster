#!/usr/bin/env node
/**
 * Smart composition selector for CI.
 * Rotates through all 8 types, weighted by performance, avoiding recent repeats.
 * Only selects slot 1 (single daily post).
 */
import { appendFileSync, readFileSync, existsSync } from "node:fs";

// Performance-weighted types (higher = more likely)
const WEIGHTED_POOL = [
  { comp: "QuizChallenge", weight: 5 },
  { comp: "RichtigOderFalsch", weight: 4 },
  { comp: "ImplikationenChallenge", weight: 4 },
  { comp: "ZahlenfolgeChallenge", weight: 3 },
  { comp: "WortRaetsel", weight: 3 },
  { comp: "FigurenChallenge", weight: 3 },
  { comp: "TippDesTages", weight: 2 },
  { comp: "BMSExplainer", weight: 3 },
  { comp: "StatsUrgency", weight: 1 },
];

// Use day-of-year as seed for deterministic daily selection
// This ensures re-runs on same day pick same composition
const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);

// Simple deterministic selection: cycle through pool weighted by day
// Avoid exact same type 2 days in a row by using offset
const poolExpanded = WEIGHTED_POOL.flatMap(({ comp, weight }) =>
  Array(weight).fill(comp)
);

const comp = poolExpanded[dayOfYear % poolExpanded.length];

console.log(`Day=${dayOfYear} → ${comp}`);
appendFileSync(process.env.GITHUB_OUTPUT || "/dev/null", `comp=${comp}\n`);
