/**
 * BMS-UK Didaktik-Checker. Prüft alle Unterkapitel gegen die Qualitäts-Standards aus
 * .planning/BMS-UK-STANDARDS.md. Ausführung: npx tsx scripts/audit-uk-quality.mts
 *
 * Kein Prod-Risiko — reines Dev-Tool.
 */
// @ts-ignore - ESM resolve from project root
import { alleKapitel } from "../src/data/bmsKapitel/index.ts";

type Severity = "fail" | "warn" | "info";

type Check = {
  id: string;
  label: string;
  severity: Severity;
  pass: boolean;
  detail?: string;
};

type UKResult = {
  id: string;
  title: string;
  subject: string;
  chapter: string;
  wordCount: number;
  checks: Check[];
  score: number; // 0-100
};

const MIN_WORDS = 700;
const TARGET_MIN = 900;
const TARGET_MAX = 1800;
const MAX_WORDS = 2500;

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function count(re: RegExp, text: string): number {
  return (text.match(re) || []).length;
}

const AI_BOILERPLATE_PATTERNS = [
  /es ist wichtig zu beachten/i,
  /im folgenden werden wir/i,
  /wir werden nun/i,
  /dieses kapitel behandelt/i,
  /wie bereits erwähnt/i,
  /zusammenfassend lässt sich sagen/i,
];

function runChecks(content: string): Check[] {
  const words = countWords(content);
  const h2Count = count(/^## /gm, content);
  const merkeCount = count(/>\s*\*\*Merke:/g, content);
  const diagramCount = count(/\{\{DIAGRAM:/g, content);
  const separatorCount = count(/^---$/gm, content);
  const bulletCount = count(/^\s*-\s/gm, content);
  const tableCount = count(/^\|.*\|$/gm, content) > 0 ? Math.ceil(count(/^\|[-\s|:]+\|$/gm, content)) : 0;
  const hasLernziele = />\s*\*\*Lernziele:/.test(content);
  const hasWorkedExample = />\s*\*\*Beispiel:/.test(content);
  const hasFehlerBox = />\s*\*\*(Achtung|Vorsicht)/.test(content);
  const hasMnemonic = />\s*\*\*(Eselsbrücke|Merkspruch|Mnemonic)/i.test(content);
  const hasMedATFokus = />\s*\*\*MedAT-Fokus:/.test(content);
  const hasZusammenfassung = /^##\s+Zusammenfassung/m.test(content);
  const hasHookOk = !/^(Dieses Kapitel|Hier (lernst|erfährst))/i.test(content.trim().slice(0, 100));

  // Übergangssätze — explizite Marker zwischen Sektionen
  const transitionPatterns = [
    /\bnachdem wir\b/i, /\bbisher haben wir\b/i, /\bum das zu verstehen\b/i,
    /\bauf dieser grundlage\b/i, /\bmit diesem wissen\b/i, /\bder nächste schritt\b/i,
    /\bim nächsten abschnitt\b/i, /\baufbauend darauf\b/i,
  ];
  const transitionHits = transitionPatterns.reduce((n, p) => n + (p.test(content) ? 1 : 0), 0);

  // KI-Boilerplate
  const boilerplateHits = AI_BOILERPLATE_PATTERNS.reduce((n, p) => n + (p.test(content) ? 1 : 0), 0);

  return [
    {
      id: "length",
      label: `Länge ${words}W`,
      severity: words < MIN_WORDS ? "fail" : (words > MAX_WORDS ? "fail" : (words < TARGET_MIN || words > TARGET_MAX ? "warn" : "info")),
      pass: words >= TARGET_MIN && words <= TARGET_MAX,
      detail: `Ziel ${TARGET_MIN}-${TARGET_MAX}W, hart ${MIN_WORDS}-${MAX_WORDS}W`,
    },
    {
      id: "hook",
      label: "Hook-Einstieg",
      severity: "warn",
      pass: hasHookOk,
      detail: hasHookOk ? "" : 'Beginnt mit "Dieses Kapitel..." o.ä. → Boilerplate',
    },
    {
      id: "lernziele",
      label: "Lernziele-Box",
      severity: "warn",
      pass: hasLernziele,
      detail: hasLernziele ? "" : 'Fehlt `> **Lernziele:**` Block',
    },
    {
      id: "diagram",
      label: `Diagramm (${diagramCount})`,
      severity: "warn",
      pass: diagramCount >= 1,
      detail: diagramCount === 0 ? "Mindestens 1 {{DIAGRAM:...}} empfohlen" : "",
    },
    {
      id: "h2",
      label: `H2 Sektionen (${h2Count})`,
      severity: "warn",
      pass: h2Count >= 3 && h2Count <= 7,
      detail: h2Count < 3 ? "Zu wenig H2 (<3)" : (h2Count > 7 ? "Zu viele H2 (>7) — splitten?" : ""),
    },
    {
      id: "separator",
      label: `Separatoren (${separatorCount})`,
      severity: "info",
      pass: separatorCount >= 2,
      detail: separatorCount < 2 ? "Weniger als 2 `---` Separatoren" : "",
    },
    {
      id: "merke",
      label: `Merksätze (${merkeCount})`,
      severity: "warn",
      pass: merkeCount >= 2,
      detail: merkeCount < 2 ? "Weniger als 2 Merke-Callouts" : "",
    },
    {
      id: "worked_example",
      label: "Worked Example",
      severity: "info",
      pass: hasWorkedExample,
      detail: hasWorkedExample ? "" : 'Kein `> **Beispiel:**` Block (bei rechenbaren Themen Pflicht)',
    },
    {
      id: "fehler_box",
      label: "Typische-Fehler-Box",
      severity: "info",
      pass: hasFehlerBox,
      detail: hasFehlerBox ? "" : 'Kein `> **Achtung`-Block',
    },
    {
      id: "mnemonic",
      label: "Eselsbrücke",
      severity: "info",
      pass: hasMnemonic,
      detail: hasMnemonic ? "" : 'Keine Eselsbrücke/Mnemonic',
    },
    {
      id: "medat_fokus",
      label: "MedAT-Fokus-Marker",
      severity: "warn",
      pass: hasMedATFokus,
      detail: hasMedATFokus ? "" : 'Fehlt `> **MedAT-Fokus:**` Block',
    },
    {
      id: "zusammenfassung",
      label: "Zusammenfassung",
      severity: "warn",
      pass: hasZusammenfassung,
      detail: hasZusammenfassung ? "" : "Kein `## Zusammenfassung` am Ende",
    },
    {
      id: "transitions",
      label: `Übergangssätze (${transitionHits})`,
      severity: "info",
      pass: transitionHits >= 2,
      detail: transitionHits < 2 ? "Content wirkt isoliert — Sektionen nicht verbunden" : "",
    },
    {
      id: "bullets",
      label: `Bullet-Listen (${bulletCount})`,
      severity: "info",
      pass: bulletCount <= 25,
      detail: bulletCount > 25 ? "Bullet-Overload — in Fließtext konvertieren" : "",
    },
    {
      id: "tables",
      label: `Tabellen (${tableCount})`,
      severity: "info",
      pass: tableCount <= 5,
      detail: tableCount > 5 ? "Tabellen-Overload (>5)" : "",
    },
    {
      id: "boilerplate",
      label: "KI-Boilerplate",
      severity: "warn",
      pass: boilerplateHits === 0,
      detail: boilerplateHits > 0 ? `${boilerplateHits}× KI-typische Floskeln gefunden` : "",
    },
  ];
}

function colorize(severity: Severity, pass: boolean): string {
  if (pass) return "✅";
  if (severity === "fail") return "❌";
  if (severity === "warn") return "⚠️ ";
  return "·  ";
}

function scoreOf(checks: Check[]): number {
  // Weight: fail=3, warn=2, info=1. Score = passed_weight / total_weight * 100
  let total = 0;
  let passed = 0;
  for (const c of checks) {
    const w = c.severity === "fail" ? 3 : c.severity === "warn" ? 2 : 1;
    total += w;
    if (c.pass) passed += w;
  }
  return Math.round((passed / total) * 100);
}

function auditAll(): UKResult[] {
  const results: UKResult[] = [];
  for (const kap of alleKapitel as any[]) {
    for (const uk of kap.unterkapitel || []) {
      const content = uk.content || "";
      const checks = runChecks(content);
      results.push({
        id: uk.id,
        title: uk.title,
        subject: kap.subject,
        chapter: kap.id,
        wordCount: countWords(content),
        checks,
        score: scoreOf(checks),
      });
    }
  }
  return results;
}

function printSummary(results: UKResult[]) {
  const total = results.length;
  const avgScore = Math.round(results.reduce((s, r) => s + r.score, 0) / total);
  const avgWords = Math.round(results.reduce((s, r) => s + r.wordCount, 0) / total);

  console.log("\n=== BMS-UK Didaktik-Audit ===\n");
  console.log(`Geprüft: ${total} Unterkapitel`);
  console.log(`Durchschnittlicher Score: ${avgScore}/100`);
  console.log(`Durchschnittliche Länge: ${avgWords} Wörter\n`);

  // Score-Verteilung
  const buckets = { excellent: 0, good: 0, okay: 0, poor: 0 };
  for (const r of results) {
    if (r.score >= 85) buckets.excellent++;
    else if (r.score >= 70) buckets.good++;
    else if (r.score >= 50) buckets.okay++;
    else buckets.poor++;
  }
  console.log("Score-Verteilung:");
  console.log(`  ★★★★ excellent (85+): ${buckets.excellent}`);
  console.log(`  ★★★  good (70-84):     ${buckets.good}`);
  console.log(`  ★★   okay (50-69):     ${buckets.okay}`);
  console.log(`  ★    poor (<50):       ${buckets.poor}\n`);

  // Längen-Verteilung
  const lengthBuckets = { tooShort: 0, short: 0, target: 0, long: 0, tooLong: 0 };
  for (const r of results) {
    if (r.wordCount < MIN_WORDS) lengthBuckets.tooShort++;
    else if (r.wordCount < TARGET_MIN) lengthBuckets.short++;
    else if (r.wordCount <= TARGET_MAX) lengthBuckets.target++;
    else if (r.wordCount <= MAX_WORDS) lengthBuckets.long++;
    else lengthBuckets.tooLong++;
  }
  console.log("Längen-Verteilung:");
  console.log(`  Zu kurz (<${MIN_WORDS}W):          ${lengthBuckets.tooShort}`);
  console.log(`  Kurz (${MIN_WORDS}-${TARGET_MIN - 1}W):          ${lengthBuckets.short}`);
  console.log(`  Ziel-Range (${TARGET_MIN}-${TARGET_MAX}W):   ${lengthBuckets.target}`);
  console.log(`  Lang (${TARGET_MAX + 1}-${MAX_WORDS}W):         ${lengthBuckets.long}`);
  console.log(`  Zu lang (>${MAX_WORDS}W):          ${lengthBuckets.tooLong}\n`);

  // Element-Coverage: wie viel % der UKs haben Pflicht-Elemente?
  const coverage: Record<string, number> = {};
  for (const checkId of ["hook", "lernziele", "diagram", "merke", "worked_example", "fehler_box", "mnemonic", "medat_fokus", "zusammenfassung", "boilerplate"]) {
    const n = results.filter((r) => r.checks.find((c) => c.id === checkId)?.pass).length;
    coverage[checkId] = Math.round((n / total) * 100);
  }
  console.log("Element-Coverage (% der UKs):");
  for (const [k, v] of Object.entries(coverage)) {
    const bar = "█".repeat(Math.floor(v / 5));
    console.log(`  ${k.padEnd(18)} ${String(v).padStart(3)}% ${bar}`);
  }
  console.log("");

  // Top 10 schlechteste UKs
  const worst = [...results].sort((a, b) => a.score - b.score).slice(0, 15);
  console.log("Top 15 verbesserungsbedürftige UKs:");
  for (const r of worst) {
    const fails = r.checks.filter((c) => !c.pass && c.severity !== "info").map((c) => c.id).join(", ");
    console.log(`  ${r.score.toString().padStart(3)} | ${r.id.padEnd(12)} | ${r.wordCount}W | ${r.title.slice(0, 50)}`);
    if (fails) console.log(`      → fehlt: ${fails}`);
  }
  console.log("");

  // Pro Fach Score
  const bySubject: Record<string, UKResult[]> = {};
  for (const r of results) {
    if (!bySubject[r.subject]) bySubject[r.subject] = [];
    bySubject[r.subject].push(r);
  }
  console.log("Score pro Fach:");
  for (const [subj, items] of Object.entries(bySubject)) {
    const avg = Math.round(items.reduce((s, r) => s + r.score, 0) / items.length);
    const w = Math.round(items.reduce((s, r) => s + r.wordCount, 0) / items.length);
    console.log(`  ${subj.padEnd(12)} Ø ${avg}/100, Ø ${w}W, N=${items.length}`);
  }
  console.log("");
}

function printSingleUK(ukId: string, results: UKResult[]) {
  const uk = results.find((r) => r.id === ukId);
  if (!uk) {
    console.error(`UK "${ukId}" nicht gefunden.`);
    process.exit(1);
  }
  console.log(`\n=== ${uk.id} — ${uk.title} ===`);
  console.log(`Fach: ${uk.subject} | Kapitel: ${uk.chapter}`);
  console.log(`Score: ${uk.score}/100 | Länge: ${uk.wordCount} Wörter\n`);
  for (const c of uk.checks) {
    const icon = colorize(c.severity, c.pass);
    console.log(`  ${icon} ${c.label.padEnd(28)} ${c.detail || ""}`);
  }
  console.log("");
}

// Main
const target = process.argv[2];
const results = auditAll();

if (target && target.startsWith("bio-") || (target && (target.startsWith("ch-") || target.startsWith("ph-") || target.startsWith("ma-")))) {
  printSingleUK(target, results);
} else {
  printSummary(results);
  if (target === "--all") {
    console.log("\n=== Alle UKs Detail ===");
    for (const r of results) printSingleUK(r.id, results);
  }
}
