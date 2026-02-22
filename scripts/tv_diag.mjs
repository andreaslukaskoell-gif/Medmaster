import { readFileSync } from "fs";
const src = readFileSync("/Users/Luki/medmaster/src/data/tvTextsExpanded.ts", "utf8");
const lines = src.split("\n");
// Show lines around 760 and 854
const targets = [760, 854, 931, 945];
for (const n of targets) {
  process.stdout.write("--- Lines " + (n-3) + "-" + (n+1) + " ---\n");
  for (let i = n-4; i <= n; i++) {
    process.stdout.write((i+1) + ": " + lines[i] + "\n");
  }
}
