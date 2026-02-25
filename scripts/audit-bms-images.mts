/**
 * BMS Bilder-Audit: Mindestens 2 Bilder pro Unterkapitel in Biologie und Chemie.
 * Ausführung: npx tsx scripts/audit-bms-images.mts
 *
 * Zählt pro UK: Markdown-Bilder ![ ... ]( ... ), {{DIAGRAM}}, und uk.imageUrl.
 */
// @ts-ignore - ESM resolve from project root
import { alleKapitel } from "../src/data/bmsKapitel/index.ts";
import type { Kapitel, Unterkapitel } from "../src/data/bmsKapitel/types.ts";

const TARGET_SUBJECTS = ["biologie", "chemie", "physik", "mathematik"] as const;

function countImages(uk: Unterkapitel): { markdown: number; diagram: number; imageUrl: number; total: number } {
  const content = uk.content || "";
  const markdown = (content.match(/!\[/g) || []).length;
  const diagram = content.includes("{{DIAGRAM}}") ? 1 : 0;
  const imageUrl = uk.imageUrl ? 1 : 0;
  return { markdown, diagram, imageUrl, total: markdown + diagram + imageUrl };
}

interface Result {
  chapterId: string;
  chapterTitle: string;
  subject: string;
  ukId: string;
  ukTitle: string;
  markdown: number;
  diagram: number;
  imageUrl: number;
  total: number;
}

const chapters = alleKapitel.filter((k: Kapitel) =>
  TARGET_SUBJECTS.includes(k.subject as (typeof TARGET_SUBJECTS)[number])
) as Kapitel[];

const results: Result[] = [];
const below: Result[] = [];

for (const k of chapters) {
  const uks = k.unterkapitel || [];
  for (const uk of uks) {
    if (!uk?.id) continue;
    const c = countImages(uk);
    const r: Result = {
      chapterId: k.id,
      chapterTitle: k.title,
      subject: k.subject,
      ukId: uk.id,
      ukTitle: uk.title || uk.id,
      ...c,
    };
    results.push(r);
    if (c.total < 2) below.push(r);
  }
}

console.log("\n=== BMS Bilder-Audit: Bio, Chemie, Physik, Mathematik (min. 2 Bilder pro UK) ===\n");
console.log(`Geprüft: ${results.length} Unterkapitel in ${chapters.length} Kapiteln.\n`);

if (below.length === 0) {
  console.log("✅ Alle Unterkapitel haben mindestens 2 Bilder (Markdown + {{DIAGRAM}} + imageUrl).\n");
  process.exit(0);
}

console.log(`⚠️  ${below.length} Unterkapitel mit weniger als 2 Bildern:\n`);
below.forEach((r) => {
  console.log(`  ${r.ukId}  [${r.subject}] ${r.chapterId}`);
  console.log(`      "${r.ukTitle.slice(0, 60)}${r.ukTitle.length > 60 ? "…" : ""}"`);
  console.log(`      Bilder: markdown=${r.markdown}, diagram=${r.diagram}, imageUrl=${r.imageUrl} → total=${r.total}\n`);
});

console.log("\nHinweis: Pro UK zählen ![...](...), {{DIAGRAM}} und uk.imageUrl. Fehlende Bilder durch passende SVGs oder {{DIAGRAM}} + diagram ergänzen.\n");
process.exit(below.length > 0 ? 1 : 0);
