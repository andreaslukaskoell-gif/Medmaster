/**
 * Content Quality Audit: Prüft dass vereinfachte Inhalte nicht zu dünn sind
 * und contentExtended korrekt gesetzt ist.
 *
 * Regeln:
 * - content (simplified): 300–700 Wörter (StudyMed+20%)
 * - contentExtended (original): muss existieren und länger als content sein
 * - content muss Merke-Blockquote enthalten
 * - content muss DIAGRAM-Marker enthalten (wenn contentExtended welche hat)
 * - content darf keine klinischen/Uni-Begriffe enthalten
 */

import { readFileSync, readdirSync } from "fs";
import { join } from "path";

const BASE = join(import.meta.dirname ?? ".", "../src/data/bmsKapitel");
const SUBJECTS = ["mathematik", "chemie", "physik", "biologie"];

// Klinische / Uni-Begriffe die im vereinfachten Content nicht vorkommen sollen
const FORBIDDEN_TERMS = [
  "Differentialgleichung",
  "Pharmakokinetik",
  "Michaelis-Menten",
  "Navier-Stokes",
  "Schrödinger",
  "Lineweaver-Burk",
  "Kaplan-Meier",
  "Gentamicin",
  "Fentanyl",
  "Noradrenalin",
  "Defibrillator",
  "Chemotherapie",
  "Hauttransplantation",
];

type Issue = {
  file: string;
  uk: string;
  severity: "WARN" | "ERROR";
  message: string;
};

const issues: Issue[] = [];
let totalUKs = 0;
let withExtended = 0;
let tooShort = 0;
let tooLong = 0;

function wordCount(text: string): number {
  return text
    .replace(/[#|>*\-`{}]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1).length;
}

function countDiagrams(text: string): number {
  return (text.match(/\{\{DIAGRAM:/g) || []).length;
}

function hasMerke(text: string): boolean {
  return text.includes("**Merke:**") || text.includes("> **Merke:");
}

for (const subject of SUBJECTS) {
  const dir = join(BASE, subject);
  let files: string[];
  try {
    files = readdirSync(dir).filter(
      (f) => f.startsWith("kap") && f.endsWith(".ts")
    );
  } catch {
    continue;
  }

  for (const file of files) {
    const path = join(dir, file);
    const src = readFileSync(path, "utf-8");

    // Extract UKs by finding id patterns
    const ukPattern =
      /id:\s*"([^"]+)"[\s\S]*?content:\s*`([\s\S]*?)`[\s\S]*?(?:contentExtended:\s*`([\s\S]*?)`)?\s*(?:,\s*(?:lernziele|stichworte|selfTest|altfrage|diagram|imageUrl|sections))/g;

    // Simpler approach: find all id + content pairs
    const idMatches = [...src.matchAll(/id:\s*"([^"]+)"/g)];

    for (const idMatch of idMatches) {
      const ukId = idMatch[1];
      // Skip non-content IDs (like question IDs in selfTest)
      if (
        !ukId.match(
          /^(ma|ph|ch|bio|chem|phys)-\d+-\d+$|^(ma-stoch|ma-trig|phys-kap|chem-kap)/
        )
      )
        continue;
      totalUKs++;

      // Find content and contentExtended after this id
      const afterId = src.slice(idMatch.index!);
      const contentMatch = afterId.match(/content:\s*`([\s\S]*?)`/);
      const extMatch = afterId.match(/contentExtended:\s*`([\s\S]*?)`/);

      if (!contentMatch) continue;

      const content = contentMatch[1];
      const contentWords = wordCount(content);

      if (extMatch) {
        withExtended++;
        const ext = extMatch[1];
        const extWords = wordCount(ext);

        // Check content isn't too short
        if (contentWords < 250) {
          tooShort++;
          issues.push({
            file: `${subject}/${file}`,
            uk: ukId,
            severity: "ERROR",
            message: `Content zu dünn: ${contentWords} Wörter (min 250)`,
          });
        } else if (contentWords < 350) {
          issues.push({
            file: `${subject}/${file}`,
            uk: ukId,
            severity: "WARN",
            message: `Content knapp: ${contentWords} Wörter (Ziel 400-600)`,
          });
        }

        // Check content isn't still too long (not simplified)
        if (contentWords > 800) {
          tooLong++;
          issues.push({
            file: `${subject}/${file}`,
            uk: ukId,
            severity: "WARN",
            message: `Content evtl. nicht vereinfacht: ${contentWords} Wörter (max 700)`,
          });
        }

        // Extended should be longer than simplified
        if (extWords < contentWords) {
          issues.push({
            file: `${subject}/${file}`,
            uk: ukId,
            severity: "ERROR",
            message: `contentExtended (${extWords}w) kürzer als content (${contentWords}w)!`,
          });
        }

        // Check DIAGRAM markers preserved
        const extDiagrams = countDiagrams(ext);
        const contentDiagrams = countDiagrams(content);
        if (extDiagrams > 0 && contentDiagrams === 0) {
          issues.push({
            file: `${subject}/${file}`,
            uk: ukId,
            severity: "ERROR",
            message: `DIAGRAM-Marker fehlen im vereinfachten Content (Extended hat ${extDiagrams})`,
          });
        }

        // Check Merke blockquote
        if (!hasMerke(content) && hasMerke(ext)) {
          issues.push({
            file: `${subject}/${file}`,
            uk: ukId,
            severity: "WARN",
            message: `Merke-Blockquote fehlt im vereinfachten Content`,
          });
        }

        // Check forbidden terms
        for (const term of FORBIDDEN_TERMS) {
          if (content.toLowerCase().includes(term.toLowerCase())) {
            issues.push({
              file: `${subject}/${file}`,
              uk: ukId,
              severity: "WARN",
              message: `Klinischer/Uni-Begriff im simplified content: "${term}"`,
            });
          }
        }
      }
    }
  }
}

// Summary
console.log("=== Content Quality Audit ===\n");
console.log(`Total UKs gefunden: ${totalUKs}`);
console.log(`Mit contentExtended: ${withExtended}/${totalUKs}`);
console.log(`Ohne contentExtended: ${totalUKs - withExtended}`);
console.log(`Zu dünn (<250w): ${tooShort}`);
console.log(`Zu lang (>800w): ${tooLong}`);
console.log(`Issues: ${issues.length}\n`);

// Group by severity
const errors = issues.filter((i) => i.severity === "ERROR");
const warns = issues.filter((i) => i.severity === "WARN");

if (errors.length > 0) {
  console.log(`\n❌ ERRORS (${errors.length}):`);
  for (const e of errors) {
    console.log(`  ${e.file} | ${e.uk}: ${e.message}`);
  }
}

if (warns.length > 0) {
  console.log(`\n⚠️  WARNINGS (${warns.length}):`);
  for (const w of warns) {
    console.log(`  ${w.file} | ${w.uk}: ${w.message}`);
  }
}

if (issues.length === 0) {
  console.log("✅ Keine Issues gefunden — Content-Qualität OK!");
}

// Per-subject stats
console.log("\n=== Wort-Statistik pro Fach ===");
for (const subject of SUBJECTS) {
  const dir = join(BASE, subject);
  let files: string[];
  try {
    files = readdirSync(dir).filter(
      (f) => f.startsWith("kap") && f.endsWith(".ts")
    );
  } catch {
    continue;
  }

  const wordCounts: number[] = [];
  const extWordCounts: number[] = [];

  for (const file of files) {
    const src = readFileSync(join(dir, file), "utf-8");
    const idMatches = [...src.matchAll(/id:\s*"([^"]+)"/g)];
    for (const idMatch of idMatches) {
      const ukId = idMatch[1];
      if (
        !ukId.match(
          /^(ma|ph|ch|bio|chem|phys)-\d+-\d+$|^(ma-stoch|ma-trig|phys-kap|chem-kap)/
        )
      )
        continue;
      const afterId = src.slice(idMatch.index!);
      const contentMatch = afterId.match(/content:\s*`([\s\S]*?)`/);
      const extMatch = afterId.match(/contentExtended:\s*`([\s\S]*?)`/);
      if (contentMatch) wordCounts.push(wordCount(contentMatch[1]));
      if (extMatch) extWordCounts.push(wordCount(extMatch[1]));
    }
  }

  if (wordCounts.length > 0) {
    const avg = Math.round(
      wordCounts.reduce((a, b) => a + b, 0) / wordCounts.length
    );
    const min = Math.min(...wordCounts);
    const max = Math.max(...wordCounts);
    const extAvg =
      extWordCounts.length > 0
        ? Math.round(
            extWordCounts.reduce((a, b) => a + b, 0) / extWordCounts.length
          )
        : "n/a";
    console.log(
      `${subject.padEnd(12)} content: avg=${avg}w, min=${min}w, max=${max}w | extended: avg=${extAvg}w (${extWordCounts.length} UKs)`
    );
  }
}

process.exit(errors.length > 0 ? 1 : 0);
