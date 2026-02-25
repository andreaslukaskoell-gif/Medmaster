/**
 * BMS-Fragen Audit: Struktur, genau eine richtige Antwort, Kapitel-Referenzen, Fragentrainer.
 * In DEV wird das Ergebnis bei App-Start in der Konsole ausgegeben.
 */
import type { Question } from "@/data/bms/index";
import { alleKapitel } from "@/data/bmsKapitel/index";
import { questionToBMSFrage, getPoolBMSFragen } from "@/lib/bmsPoolForTrainer";
import { validateBMSFrage } from "@/lib/supabaseBMSFragen";

const VALID_OPTION_IDS = new Set(["a", "b", "c", "d", "e"]);

export type IssueKind =
  | "options_not_5"
  | "correctOptionId_missing"
  | "correctOptionId_not_in_options"
  | "chapter_unknown"
  | "duplicate_id"
  | "empty_text";

export interface AuditIssue {
  id: string;
  kind: IssueKind;
  message: string;
  subject?: string;
  chapter?: string;
}

export interface BmsAuditReport {
  total: number;
  bySubject: Record<string, number>;
  bySource: {
    selfTest: number;
    biologiePool: number;
    chemiePool: number;
    physikPool: number;
    mathematikPool: number;
  };
  issues: AuditIssue[];
  convertedValid: number;
  poolOnlyBiologie: boolean;
  poolTotal: number;
  summary: string[];
}

function isPoolId(id: string): "bio" | "chemie" | "physik" | "mathe" | null {
  if (id.startsWith("bio-pool-")) return "bio";
  if (id.startsWith("ch-pool-")) return "chemie";
  if (id.startsWith("ph-pool-")) return "physik";
  if (id.startsWith("ma-pool-") || /^mathe-pool-/.test(id)) return "mathe";
  return null;
}

export function runBmsAudit(questions: Question[]): BmsAuditReport {
  const chapterIds = new Set(alleKapitel.map((k) => k.id));
  const issues: AuditIssue[] = [];
  const bySubject: Record<string, number> = { biologie: 0, chemie: 0, physik: 0, mathematik: 0 };
  const bySource = {
    selfTest: 0,
    biologiePool: 0,
    chemiePool: 0,
    physikPool: 0,
    mathematikPool: 0,
  };
  const seenIds = new Set<string>();

  for (const q of questions) {
    bySubject[q.subject] = (bySubject[q.subject] ?? 0) + 1;
    const pool = isPoolId(q.id);
    if (pool === "bio") bySource.biologiePool++;
    else if (pool === "chemie") bySource.chemiePool++;
    else if (pool === "physik") bySource.physikPool++;
    else if (pool === "mathe") bySource.mathematikPool++;
    else bySource.selfTest++;

    if (seenIds.has(q.id))
      issues.push({ id: q.id, kind: "duplicate_id", message: "Doppelte Frage-ID" });
    seenIds.add(q.id);

    if (!q.text?.trim())
      issues.push({
        id: q.id,
        kind: "empty_text",
        message: "Leerer Fragetext",
        subject: q.subject,
        chapter: q.chapter,
      });

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
  for (const q of questions) {
    const bms = questionToBMSFrage(q, q.chapter);
    if (validateBMSFrage(bms)) convertedValid++;
  }

  const poolFragen = getPoolSnapshot();
  const poolOnlyBiologie = poolFragen.length > 0 && poolFragen.every((f) => f.fach === "biologie");

  const summary: string[] = [];
  summary.push(`Gesamt: ${questions.length} BMS-Fragen`);
  summary.push(`Nach Fach: ${JSON.stringify(bySubject)}`);
  summary.push(
    `Nach Quelle: SelfTest ${bySource.selfTest}, Bio ${bySource.biologiePool}, Chemie ${bySource.chemiePool}, Physik ${bySource.physikPool}, Mathe ${bySource.mathematikPool}`
  );
  summary.push(
    `Fragentrainer (nach Fach): Alle nutzbar. Konvertiert gültig: ${convertedValid}/${questions.length}`
  );
  summary.push(
    `Fragentrainer (Quelle "Pool"): ${poolOnlyBiologie ? "Nur Biologie (Chemie/Physik/Mathe fehlen)." : "Alle Fächer (Bio, Chemie, Physik, Mathe) enthalten."} (${poolFragen.length} Fragen)`
  );
  summary.push(`Fehler: ${issues.length}`);

  return {
    total: questions.length,
    bySubject,
    bySource,
    issues,
    convertedValid,
    poolOnlyBiologie,
    poolTotal: poolFragen.length,
    summary,
  };
}

function getPoolSnapshot(): { fach: string }[] {
  const allUkIds: string[] = [];
  for (const k of alleKapitel) {
    for (const u of k.unterkapitel ?? []) {
      if (u.id) allUkIds.push(u.id);
    }
  }
  const fragen = getPoolBMSFragen(allUkIds.slice(0, 500), 10000);
  return fragen.map((f) => ({ fach: f.fach }));
}

export function logAuditReport(report: BmsAuditReport): void {
  report.summary.forEach((s) => console.log("[BMS-Audit]", s));
  if (report.issues.length > 0) {
    console.warn("[BMS-Audit] Fehler (max. 30):", report.issues.slice(0, 30));
  }
}
