/**
 * Export der offiziellen MedAT-Angaben (BMS + KFF + SEK + TV) in eine Markdown-Datei.
 * Verwendet die gleichen Zahlen wie die App (FragenTrainer, Simulation, OFFICIAL_*).
 *
 * Ausführung: npx tsx scripts/export-offizielle-angaben.mts [--out docs/OFFIZIELLE_ANGABEN_MEDAT.md]
 */
import { writeFileSync } from "fs";
import { resolve } from "path";
import { alleStichworteListe } from "../src/data/stichworteData";
import { OFFICIAL_ZF_EXAMPLES } from "../src/data/kffZahlenfolgenMedAT";
import { OFFICIAL_WF_EXAMPLES } from "../src/data/kffWortfluessigkeitMedAT";
import { OFFICIAL_IMPLICATION_EXAMPLES } from "../src/data/kffImplikationen";
import { OFFICIAL_FZ_EXAMPLES } from "../src/data/kffFigurenZusammensetzenMedAT";
import { OFFICIAL_GM_EXAMPLES } from "../src/data/kffGedaechtnisMedAT";
import {
  emotionenErkennenTasks,
  emotionenRegulierenTasks,
  sozialesEntscheidenTasks,
} from "../src/data/sekDataNew";

// Offizielle Prüfungsangaben (1:1 wie in Simulation.tsx / FragenTrainer.tsx)
const BMS_OFFIZIELL = [
  { fach: "Biologie", fragen: 40, min: 30 },
  { fach: "Chemie", fragen: 24, min: 18 },
  { fach: "Physik", fragen: 18, min: 16 },
  { fach: "Mathematik", fragen: 12, min: 11 },
];

const KFF_OFFIZIELL = [
  { subtest: "Zahlenfolgen", fragen: 10, min: 25 },
  { subtest: "Gedächtnis & Merkfähigkeit — Lernphase", fragen: 0, min: 8 },
  { subtest: "Figuren zusammensetzen", fragen: 10, min: 15 },
  { subtest: "Gedächtnis & Merkfähigkeit — Abfrage", fragen: 25, min: 15 },
  { subtest: "Wortflüssigkeit", fragen: 20, min: 20 },
  { subtest: "Implikationen", fragen: 10, min: 10 },
];

const SEK_OFFIZIELL = [
  { subtest: "Emotionen erkennen", aufgaben: 10, min: 15 },
  { subtest: "Emotionen regulieren", aufgaben: 10, min: 15 },
  { subtest: "Soziales Entscheiden", aufgaben: 14, min: 21 },
];

const TV_OFFIZIELL = { label: "Textverständnis", fragen: 12, min: 35 };

function buildMarkdown(): string {
  const lines: string[] = [];
  lines.push("# Offizielle Angaben MedAT (BMS & KFF)");
  lines.push("");
  lines.push(
    "Diese Übersicht entspricht den in der App verwendeten offiziellen Vorgaben (Informationsbroschüre / medizinstudieren.at). Stand: aus dem Code exportiert."
  );
  lines.push("");

  // --- BMS ---
  lines.push("## BMS – Basiskenntnistest für medizinische Studien");
  lines.push("");
  lines.push("| Fach | Anzahl Fragen | Zeit (Min) |");
  lines.push("|------|---------------|------------|");
  for (const row of BMS_OFFIZIELL) {
    lines.push(`| ${row.fach} | ${row.fragen} | ${row.min} |`);
  }
  lines.push("");
  const bioCount = alleStichworteListe.filter((s) => s.fach === "biologie").length;
  const chemCount = alleStichworteListe.filter((s) => s.fach === "chemie").length;
  const physCount = alleStichworteListe.filter((s) => s.fach === "physik").length;
  const mathCount = alleStichworteListe.filter((s) => s.fach === "mathematik").length;
  lines.push("### BMS-Stichworte (Gesamtübersicht)");
  lines.push("");
  lines.push(`- **Gesamt:** ${alleStichworteListe.length} Stichworte`);
  lines.push(`- Biologie: ${bioCount} | Chemie: ${chemCount} | Physik: ${physCount} | Mathematik: ${mathCount}`);
  lines.push("");

  // --- TV ---
  lines.push("## TV – Textverständnis");
  lines.push("");
  lines.push(`| ${TV_OFFIZIELL.label} | ${TV_OFFIZIELL.fragen} Fragen | ${TV_OFFIZIELL.min} Min |`);
  lines.push("");

  // --- KFF ---
  lines.push("## KFF – Kognitive Fähigkeiten und Fertigkeiten");
  lines.push("");
  lines.push("### Prüfungsformat (Simulation)");
  lines.push("");
  lines.push("| Subtest | Aufgaben | Zeit (Min) |");
  lines.push("|---------|----------|------------|");
  for (const row of KFF_OFFIZIELL) {
    const aufgaben = row.fragen > 0 ? String(row.fragen) : "—";
    lines.push(`| ${row.subtest} | ${aufgaben} | ${row.min} |`);
  }
  lines.push("");
  lines.push("### Offizielle Beispielaufgaben in der App");
  lines.push("");
  lines.push(
    "| Subtest | Anzahl offizielle Beispiele | Quelle (PDF/Vorgabe) |"
  );
  lines.push("|---------|-----------------------------|----------------------|");
  lines.push(
    `| Zahlenfolgen | ${OFFICIAL_ZF_EXAMPLES.length} | IB_ZF_26.pdf |`
  );
  lines.push(
    `| Wortflüssigkeit | ${OFFICIAL_WF_EXAMPLES.length} | MedAT 2026 Wortflüssigkeit |`
  );
  lines.push(
    `| Implikationen | ${OFFICIAL_IMPLICATION_EXAMPLES.length} | MedAT 2026 Implikationen |`
  );
  lines.push(
    `| Figuren zusammensetzen | ${OFFICIAL_FZ_EXAMPLES.length} | IB_FZ_26.pdf |`
  );
  const gmPasses = OFFICIAL_GM_EXAMPLES.passes.length;
  const gmFragen = OFFICIAL_GM_EXAMPLES.questions.length;
  lines.push(
    `| Gedächtnis & Merkfähigkeit | ${gmPasses} Pässe, ${gmFragen} Fragen | IB_GM_26.pdf (sofern eingepflegt) |`
  );
  lines.push("");

  // --- SEK ---
  lines.push("## SEK – Soziale und emotionale Kompetenzen");
  lines.push("");
  lines.push("### Prüfungsformat (Simulation)");
  lines.push("");
  lines.push("| Subtest | Aufgaben | Zeit (Min) |");
  lines.push("|---------|----------|------------|");
  for (const row of SEK_OFFIZIELL) {
    lines.push(`| ${row.subtest} | ${row.aufgaben} | ${row.min} |`);
  }
  lines.push("");
  lines.push("### Verfügbare Aufgaben in der App (offiziell/kuratiert)");
  lines.push("");
  lines.push(
    `- Emotionen erkennen: ${emotionenErkennenTasks.length} Aufgaben`
  );
  lines.push(
    `- Emotionen regulieren: ${emotionenRegulierenTasks.length} Aufgaben`
  );
  lines.push(
    `- Soziales Entscheiden: ${sozialesEntscheidenTasks.length} Situationen (14 Aufgaben à 5 Ränge)`
  );
  lines.push("");
  lines.push("---");
  lines.push("*Exportiert mit `npm run export-offizielle-angaben`*");
  return lines.join("\n");
}

function main() {
  const args = process.argv.slice(2);
  const outIdx = args.indexOf("--out");
  const outPath =
    outIdx >= 0
      ? args[outIdx + 1]!
      : resolve(process.cwd(), "docs/OFFIZIELLE_ANGABEN_MEDAT.md");

  const md = buildMarkdown();
  writeFileSync(outPath, md, "utf-8");
  console.log(`Offizielle Angaben geschrieben: ${outPath}`);
}

main();
