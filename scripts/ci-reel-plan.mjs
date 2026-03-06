#!/usr/bin/env node
/** Determines which composition to render based on day + slot. Used by CI. */
import { appendFileSync } from "node:fs";

const SCHEDULE = [
  ["QuizChallenge", "ImplikationenChallenge", "StatsUrgency"],
  ["ZahlenfolgeChallenge", "QuizChallenge", "RichtigOderFalsch"],
  ["WortRaetsel", "FigurenChallenge", "QuizChallenge"],
  ["ImplikationenChallenge", "ZahlenfolgeChallenge", "StatsUrgency"],
  ["QuizChallenge", "WortRaetsel", "TippDesTages"],
  ["FigurenChallenge", "QuizChallenge", "ZahlenfolgeChallenge"],
  ["TippDesTages", "RichtigOderFalsch", "ImplikationenChallenge"],
];

let slot;
if (process.env.EVENT_NAME === "workflow_dispatch") {
  slot = parseInt(process.env.INPUT_SLOT, 10);
} else {
  const hour = new Date().getUTCHours();
  slot = hour <= 9 ? 1 : hour <= 14 ? 2 : 3;
}

const dow = new Date().getDay(); // 0=Sun
const idx = dow === 0 ? 6 : dow - 1;
const comp = SCHEDULE[idx][slot - 1];

console.log(`Day=${idx} Slot=${slot} → ${comp}`);
appendFileSync(process.env.GITHUB_OUTPUT, `comp=${comp}\n`);
