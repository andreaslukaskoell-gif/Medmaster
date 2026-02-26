/**
 * Generates FigureLabs briefs: 1–2 content-bound Text-to-Figure prompts per BMS Unterkapitel.
 * Prompts are derived from actual content (numbered lists, Merksätze, headings) so counts and terms are exact.
 * Run: npx tsx scripts/generate-figurelabs-briefs.mts
 * Output: docs/FIGURELABS_BRIEFS.md (+ quality check at end)
 */
// @ts-ignore - ESM resolve from project root
import { alleKapitel } from "../src/data/bmsKapitel/index.ts";
import type { Kapitel, Unterkapitel } from "../src/data/bmsKapitel/types.ts";
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const SUBJECTS: Record<string, string> = {
  biologie: "Biology",
  chemie: "Chemistry",
  physik: "Physics",
  mathematik: "Mathematics",
};

function slug(ukId: string): string {
  return ukId.replace(/[^a-z0-9-]/gi, "-").toLowerCase();
}

/** Extract numbered list items: "1. **Stoffwechsel** ..." -> list of labels (max 15). */
function extractNumberedList(content: string): { count: number; items: string[] } | null {
  const lines = content.split(/\n/);
  const items: string[] = [];
  let lastNum = 0;
  for (const line of lines) {
    const m = line.match(/^\s*(\d+)\.\s+(?:\*\*([^*]+)\*\*|(.+?))(?:\s*[:\.]|$|\s)/);
    if (m) {
      const num = parseInt(m[1], 10);
      const label = (m[2] || m[3] || "").trim().replace(/\s+/g, " ").slice(0, 80);
      if (num === lastNum + 1 && label) {
        items.push(label);
        lastNum = num;
        if (items.length >= 15) break;
      } else if (num !== lastNum + 1 && items.length > 0) break;
    }
  }
  if (items.length < 2) return null;
  return { count: items.length, items };
}

/** Extract Merksätze: "> **Merke:** ..." */
function extractMerksaetze(content: string): string[] {
  const out: string[] = [];
  const re = /^>\s*\*\*Merke:\*\*\s*(.+?)(?=\n\n|$)/gm;
  let m;
  while ((m = re.exec(content)) !== null) {
    const text = m[1].replace(/\s+/g, " ").trim().slice(0, 200);
    if (text) out.push(text);
  }
  return out;
}

/** Extract ## headings (skip Einleitung, MedAT-Fokus, Zusammenfassung). */
function extractHeadings(content: string): string[] {
  const skip = new Set(["Einleitung", "MedAT-Fokus", "Zusammenfassung (ultrakompakt)"]);
  const out: string[] = [];
  const re = /^##\s+(.+)$/gm;
  let m;
  while ((m = re.exec(content)) !== null) {
    const h = m[1].trim();
    if (!skip.has(h)) out.push(h);
  }
  return out.slice(0, 8);
}

/** Detect explicit count: "sieben Kennzeichen", "7 Schritte". */
function detectExplicitCount(content: string): { count: number; term: string } | null {
  const slice = content.slice(0, 4000);
  const m = slice.match(/(\d+)\s+(Kennzeichen|Schritte|Punkte|Regeln|Phasen|Schalen|Orbitale|Merkmale|Einheiten|Gesetze|Arten|Typen|Formen)/i)
    || slice.match(/(sieben|acht|fünf|sechs|vier|drei|zwei)\s+(Kennzeichen|Schritte|Regeln|Phasen|Merkmale|Schichten)/i);
  if (!m) return null;
  const term = m[2];
  let count: number;
  if (/\d+/.test(m[1])) count = parseInt(m[1], 10);
  else {
    const n: Record<string, number> = { sieben: 7, acht: 8, sechs: 6, fünf: 5, vier: 4, drei: 3, zwei: 2 };
    count = n[m[1].toLowerCase()] ?? 0;
  }
  if (count >= 2 && count <= 20) return { count, term };
  return null;
}

/**
 * Generate 1–2 content-bound prompts. Uses exact numbered lists and Merksätze from content.
 */
function promptsForUk(uk: Unterkapitel, subject: string): { prompt1: string; prompt2: string; qualityNotes: string[] } {
  const title = uk.title || uk.id;
  const content = uk.content || "";
  const subjectEn = SUBJECTS[subject] || subject;
  const stichworte = uk.stichworte || [];
  const qualityNotes: string[] = [];

  const numbered = extractNumberedList(content);
  const merksaetze = extractMerksaetze(content);
  const headings = extractHeadings(content);
  const explicitCount = detectExplicitCount(content);

  let prompt1: string;
  if (numbered && numbered.count >= 3 && numbered.count <= 12) {
    const listStr = numbered.items.map((item, i) => `${i + 1}. ${item}`).join(", ");
    const countNote = explicitCount && explicitCount.count === numbered.count
      ? ` Exactly ${numbered.count} items as in the curriculum.`
      : "";
    prompt1 = `Scientific educational diagram for ${subjectEn}: "${title}". Show exactly these ${numbered.count} elements in order: ${listStr}.${countNote} Clean, didactic style, publication-ready, MedAT exam preparation. All labels in German.`;
    if (explicitCount && explicitCount.count !== numbered.count)
      qualityNotes.push(`Count mismatch: content says ${explicitCount.count} ${explicitCount.term}, but numbered list has ${numbered.count} items.`);
  } else if (merksaetze.length > 0) {
    const merke = merksaetze[0].slice(0, 300);
    const concepts = stichworte.slice(0, 8).join(", ");
    prompt1 = `Scientific diagram for ${subjectEn}: "${title}". Key concepts: ${concepts || title}. Include: "${merke}". Clean, didactic style, German labels, MedAT-ready.`;
  } else {
    const concepts = stichworte.slice(0, 10).join(", ");
    const headingHint = headings.length > 0 ? ` Main sections: ${headings.slice(0, 4).join("; ")}.` : "";
    prompt1 = `Scientific educational diagram for ${subjectEn}: "${title}". Key concepts (all must appear correctly): ${concepts || title}.${headingHint} Clean, didactic style, publication-ready, MedAT. Labels in German.`;
  }

  let prompt2: string;
  if (numbered && numbered.count >= 3 && merksaetze.length > 0) {
    const merke = merksaetze[0].slice(0, 150);
    prompt2 = `Schematic figure for ${subjectEn}: "${title}". Focus on mechanism or process: "${merke}". Clear arrows, annotations. Professional minimal style. German labels.`;
  } else if (headings.length >= 2) {
    prompt2 = `Second figure for ${subjectEn}: "${title}". Emphasise: ${headings.slice(0, 3).join("; ")}. Schematic, clear structure. MedAT prep. German labels.`;
  } else {
    prompt2 = `Schematic figure for ${subjectEn} (MedAT): ${title}. Main mechanism or structure. Clear arrows and annotations. Professional minimal style. German labels.`;
  }

  return { prompt1, prompt2, qualityNotes };
}

/** Quality check: count in content vs numbered list. */
function runQualityCheck(chapters: Kapitel[]): { ok: string[]; warnings: { ukId: string; ukTitle: string; msg: string }[] } {
  const ok: string[] = [];
  const warnings: { ukId: string; ukTitle: string; msg: string }[] = [];
  for (const k of chapters) {
    for (const uk of k.unterkapitel || []) {
      if (!uk?.id) continue;
      const content = uk.content || "";
      const numbered = extractNumberedList(content);
      const explicitCount = detectExplicitCount(content);
      const { qualityNotes } = promptsForUk(uk, k.subject);
      const hasCountMismatch = qualityNotes.some((n) => n.startsWith("Count mismatch"));
      for (const note of qualityNotes)
        if (!hasCountMismatch || !note.startsWith("Count mismatch")) warnings.push({ ukId: uk.id, ukTitle: uk.title || uk.id, msg: note });
      if (explicitCount && numbered) {
        if (explicitCount.count !== numbered.count)
          warnings.push({ ukId: uk.id, ukTitle: uk.title || "", msg: `Content: "${explicitCount.count} ${explicitCount.term}", list has ${numbered.count} items.` });
        else ok.push(`${uk.id}: ${explicitCount.count} ${explicitCount.term} ✓`);
      }
    }
  }
  return { ok, warnings };
}

function buildMarkdown(): string {
  const chapters = alleKapitel as Kapitel[];
  const lines: string[] = [
    "# FigureLabs – Grafiken für BMS Unterkapitel (inhaltgebunden)",
    "",
    "Pro Unterkapitel 1–2 **Text-to-Figure**-Prompts, **exakt am Kapitelinhalt** (nummerierte Listen, Merksätze, Stichworte). Export **SVG**, Format **1:1** oder **4:3**.",
    "",
    "---",
    "",
  ];

  for (const k of chapters) {
    const subjectEn = SUBJECTS[k.subject] || k.subject;
    lines.push(`## ${k.title} (${subjectEn})`);
    lines.push("");
    const uks = k.unterkapitel || [];
    for (const uk of uks) {
      if (!uk?.id) continue;
      const { prompt1, prompt2, qualityNotes } = promptsForUk(uk, k.subject);
      const base = `grafik-fl-${slug(uk.id)}`;
      lines.push(`### ${uk.title}`);
      lines.push(`- **UK-ID:** \`${uk.id}\``);
      lines.push(`- **Dateiname:** \`${base}-1.svg\`, \`${base}-2.svg\``);
      if (qualityNotes.length > 0) lines.push(`- **Hinweis:** ${qualityNotes.join(" ")}`);
      lines.push("");
      lines.push("**Prompt 1 (Hauptgrafik):**");
      lines.push("> " + prompt1.replace(/\n/g, " "));
      lines.push("");
      lines.push("**Prompt 2 (Zusatzgrafik):**");
      lines.push("> " + prompt2.replace(/\n/g, " "));
      lines.push("");
      lines.push("---");
      lines.push("");
    }
  }

  const { ok, warnings } = runQualityCheck(chapters);
  lines.push("");
  lines.push("## Qualitätscheck der Prompts");
  lines.push("");
  lines.push("### Abgleich nummerierte Liste ↔ Inhalt");
  if (ok.length > 0) {
    lines.push("Prompts mit korrekter Anzahl:");
    lines.push("");
    for (const s of ok.slice(0, 60)) lines.push(`- ${s}`);
    if (ok.length > 60) lines.push(`- … und ${ok.length - 60} weitere`);
    lines.push("");
  }
  if (warnings.length > 0) {
    lines.push("**Warnungen (manuell prüfen):**");
    lines.push("");
    for (const w of warnings) lines.push(`- \`${w.ukId}\` — ${w.ukTitle}: ${w.msg}`);
    lines.push("");
  }
  lines.push("### Hinweise");
  lines.push("");
  lines.push("- **Text-to-Figure** in FigureLabs; Export **SVG**, **1:1** oder **4:3**.");
  lines.push("- Bei Warnungen: Inhalt prüfen, Prompt anpassen (z.B. alle 7 Kennzeichen explizit nennen).");
  lines.push("");
  return lines.join("\n");
}

const outDir = join(process.cwd(), "docs");
const outPath = join(outDir, "FIGURELABS_BRIEFS.md");
try {
  mkdirSync(outDir, { recursive: true });
} catch {
  // ignore
}
writeFileSync(outPath, buildMarkdown(), "utf-8");
console.log(`Wrote ${outPath}`);
const { warnings } = runQualityCheck(alleKapitel as Kapitel[]);
if (warnings.length > 0) console.log(`Quality check: ${warnings.length} warning(s) – see end of file.`);
process.exit(0);
