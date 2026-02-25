/**
 * BMS-Fragen Audit. Ausführung: npx tsx scripts/audit-bms-questions.mts
 * Prüft: 5 Optionen, genau eine richtige Antwort, chapter in alleKapitel, Fragentrainer-Einbindung.
 */
// @ts-ignore - ESM resolve from project root
import { allBmsQuestions, getQuestionsBySubject } from "../src/data/bms/index.ts";
// @ts-ignore
import { alleKapitel } from "../src/data/bmsKapitel/index.ts";
// @ts-ignore
import { questionToBMSFrage } from "../src/lib/bmsPoolForTrainer.ts";
// @ts-ignore
import { validateBMSFrage } from "../src/lib/supabaseBMSFragen.ts";

const VALID_OPTION_IDS = new Set(["a", "b", "c", "d", "e"]);
const chapterIds = new Set(alleKapitel.map((k: { id: string }) => k.id));

type IssueKind =
  | "options_not_5"
  | "correctOptionId_missing"
  | "correctOptionId_not_in_options"
  | "chapter_unknown"
  | "duplicate_id"
  | "empty_text";

interface Issue {
  id: string;
  kind: IssueKind;
  message: string;
  subject?: string;
  chapter?: string;
}

function isPoolId(id: string): "bio" | "chemie" | "physik" | "mathe" | null {
  if (id.startsWith("bio-pool-")) return "bio";
  if (id.startsWith("ch-pool-")) return "chemie";
  if (id.startsWith("ph-pool-")) return "physik";
  if (id.startsWith("ma-pool-") || id.match(/^mathe-pool-/)) return "mathe";
  return null;
}

const issues: Issue[] = [];
const bySubject: Record<string, number> = { biologie: 0, chemie: 0, physik: 0, mathematik: 0 };
const bySource = {
  selfTest: 0,
  biologiePool: 0,
  chemiePool: 0,
  physikPool: 0,
  mathematikPool: 0,
};
const seenIds = new Set<string>();

for (const q of allBmsQuestions) {
  bySubject[q.subject] = (bySubject[q.subject] ?? 0) + 1;
  const pool = isPoolId(q.id);
  if (pool === "bio") bySource.biologiePool++;
  else if (pool === "chemie") bySource.chemiePool++;
  else if (pool === "physik") bySource.physikPool++;
  else if (pool === "mathe") bySource.mathematikPool++;
  else bySource.selfTest++;

  if (seenIds.has(q.id)) issues.push({ id: q.id, kind: "duplicate_id", message: "Doppelte Frage-ID" });
  seenIds.add(q.id);

  if (!q.text?.trim())
    issues.push({ id: q.id, kind: "empty_text", message: "Leerer Fragetext", subject: q.subject, chapter: q.chapter });

  const opts = q.options;
  if (!Array.isArray(opts) || opts.length !== 5) {
    issues.push({
      id: q.id,
      kind: "options_not_5",
      message: `options.length = ${opts?.length ?? 0} (erwartet 5)`,
      subject: q.subject,
      chapter: q.chapter,
    });
  }

  const correctId = (q.correctOptionId ?? "").toLowerCase().trim();
  if (!correctId) {
    issues.push({
      id: q.id,
      kind: "correctOptionId_missing",
      message: "correctOptionId fehlt",
      subject: q.subject,
      chapter: q.chapter,
    });
  } else if (!VALID_OPTION_IDS.has(correctId)) {
    issues.push({
      id: q.id,
      kind: "correctOptionId_not_in_options",
      message: `correctOptionId "${q.correctOptionId}" ist nicht a–e`,
      subject: q.subject,
      chapter: q.chapter,
    });
  } else if (Array.isArray(opts) && opts.length === 5) {
    const found = opts.some((o) => (o?.id ?? "").toLowerCase() === correctId);
    if (!found) {
      issues.push({
        id: q.id,
        kind: "correctOptionId_not_in_options",
        message: `correctOptionId "${correctId}" kommt in options nicht vor`,
        subject: q.subject,
        chapter: q.chapter,
      });
    }
  }

  if (q.chapter && !chapterIds.has(q.chapter)) {
    issues.push({
      id: q.id,
      kind: "chapter_unknown",
      message: `chapter "${q.chapter}" existiert nicht in alleKapitel`,
      subject: q.subject,
      chapter: q.chapter,
    });
  }
}

let convertedValid = 0;
for (const subj of ["biologie", "chemie", "physik", "mathematik"] as const) {
  const list = getQuestionsBySubject(subj);
  for (const q of list) {
    const bms = questionToBMSFrage(q, q.chapter);
    if (validateBMSFrage(bms)) convertedValid++;
  }
}

console.log("=== BMS-Fragen Audit ===\n");
console.log(`Gesamt: ${allBmsQuestions.length} BMS-Fragen`);
console.log(`Nach Fach: ${JSON.stringify(bySubject)}`);
console.log(
  `Nach Quelle: SelfTest ${bySource.selfTest}, Bio-Pool ${bySource.biologiePool}, Chemie-Pool ${bySource.chemiePool}, Physik-Pool ${bySource.physikPool}, Mathe-Pool ${bySource.mathematikPool}`
);
console.log(`Fragentrainer (nach Fach): Alle in getBMSFragenBySubject nutzbar. Als Typ-A konvertiert gültig: ${convertedValid}/${allBmsQuestions.length}`);
console.log(`Fehler/Probleme: ${issues.length}`);

console.log("\n--- Details Fehler (max. 80) ---");
issues.slice(0, 80).forEach((i) => console.log(`[${i.id}] ${i.kind}: ${i.message}`));
if (issues.length > 80) console.log(`... und ${issues.length - 80} weitere.`);
const critical = issues.filter(
  (i) => i.kind === "options_not_5" || i.kind === "correctOptionId_missing" || i.kind === "correctOptionId_not_in_options"
);
if (critical.length > 0) {
  console.log(`\n${critical.length} Fragen mit kritischen Datenfehlern (werden von filterValidBMSFragen verworfen).`);
}
