import { useMemo } from "react";
import { Link } from "react-router-dom";
import { alleKapitel } from "@/data/bmsKapitel";
import type { Kapitel, Unterkapitel } from "@/data/bmsKapitel/types";
import { ArrowLeft, AlertCircle, AlertTriangle, CheckCircle2, FileText, HelpCircle, Quote } from "lucide-react";

const MIN_CHARS = 300;

type Status = "red" | "yellow" | "green";

interface UkAudit {
  uk: Unterkapitel;
  hasQuiz: boolean;
  hasEnoughText: boolean;
  hasMerksatz: boolean;
  charCount: number;
}

interface ChapterAudit {
  kapitel: Kapitel;
  status: Status;
  totalUk: number;
  noQuiz: number;
  shortText: number;
  noMerksatz: number;
  details: UkAudit[];
}

function auditUnterkapitel(uk: Unterkapitel): UkAudit {
  const content = (uk.content || "").trim();
  const charCount = content.length;
  const hasQuiz = Array.isArray(uk.selfTest) && uk.selfTest.length > 0;
  const hasEnoughText = charCount >= MIN_CHARS;
  const hasMerksatz = Array.isArray(uk.merksätze) && uk.merksätze.length > 0;
  return { uk, hasQuiz, hasEnoughText, hasMerksatz, charCount };
}

function getStatus(details: UkAudit[]): Status {
  if (details.length === 0) return "yellow";
  const noQuiz = details.filter((d) => !d.hasQuiz).length;
  const shortText = details.filter((d) => !d.hasEnoughText).length;
  const noMerksatz = details.filter((d) => !d.hasMerksatz).length;
  const total = details.length;
  const gapsPerUk = details.map((d) => [d.hasQuiz, d.hasEnoughText, d.hasMerksatz].filter(Boolean).length);
  const anyCritical = noQuiz > 0 || shortText > 0 || noMerksatz > 0;
  const manyGaps = noQuiz === total || noMerksatz === total || (noQuiz + shortText + noMerksatz) >= total * 2;
  if (manyGaps || (noQuiz > 0 && (shortText > 0 || noMerksatz > 0))) return "red";
  if (anyCritical) return "yellow";
  return "green";
}

function auditChapter(kapitel: Kapitel): ChapterAudit {
  const uks = (kapitel.unterkapitel && Array.isArray(kapitel.unterkapitel)) ? kapitel.unterkapitel : [];
  const details = uks.map((uk) => auditUnterkapitel(uk));
  const status = getStatus(details);
  const noQuiz = details.filter((d) => !d.hasQuiz).length;
  const shortText = details.filter((d) => !d.hasEnoughText).length;
  const noMerksatz = details.filter((d) => !d.hasMerksatz).length;
  return {
    kapitel,
    status,
    totalUk: details.length,
    noQuiz,
    shortText,
    noMerksatz,
    details,
  };
}

const subjectLabels: Record<string, string> = {
  biologie: "Biologie",
  chemie: "Chemie",
  physik: "Physik",
  mathematik: "Mathematik",
};

const statusStyles = {
  red: "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900/50",
  yellow: "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900/50",
  green: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900/50",
};

const statusIcon = {
  red: AlertCircle,
  yellow: AlertTriangle,
  green: CheckCircle2,
};

const statusLabel = {
  red: "Viele Lücken",
  yellow: "Unvollständig",
  green: "Finalisiert",
};

export default function ContentAudit() {
  const audits = useMemo(() => alleKapitel.map(auditChapter), []);

  const redCount = audits.filter((a) => a.status === "red").length;
  const yellowCount = audits.filter((a) => a.status === "yellow").length;
  const greenCount = audits.filter((a) => a.status === "green").length;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex items-center gap-4 flex-wrap">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary-500"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück
        </Link>
        <span className="text-slate-400 dark:text-slate-500">|</span>
        <h1 className="text-2xl font-bold text-midnight dark:text-slate-100">
          Content-Audit
        </h1>
      </div>

      <p className="text-slate-600 dark:text-slate-400 text-sm">
        Checkliste für Qualität: Alle Kapitel aus <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">bmsKapitel</code>.
        Pro Unterkapitel: Quizfragen vorhanden, mind. {MIN_CHARS} Zeichen Text, mind. ein Merksatz.
      </p>

      <div className="flex gap-4 flex-wrap text-sm">
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          Rot: {redCount} viele Lücken
        </span>
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          Gelb: {yellowCount} unvollständig
        </span>
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-emerald-400" />
          Grün: {greenCount} finalisiert
        </span>
      </div>

      <ul className="space-y-3">
        {audits.map((a) => {
          const Icon = statusIcon[a.status];
          return (
            <li
              key={a.kapitel.id}
              className={`rounded-xl border p-4 ${statusStyles[a.status]}`}
            >
              <div className="flex items-start gap-3">
                <Icon
                  className={`w-5 h-5 shrink-0 mt-0.5 ${
                    a.status === "red"
                      ? "text-red-600 dark:text-red-400"
                      : a.status === "yellow"
                        ? "text-amber-600 dark:text-amber-400"
                        : "text-emerald-600 dark:text-emerald-400"
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-midnight dark:text-slate-100">
                      {a.kapitel.title}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {subjectLabels[a.kapitel.subject] ?? a.kapitel.subject} · {a.kapitel.id}
                    </span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300">
                      {statusLabel[a.status]}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-2 text-xs text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <HelpCircle className="w-3.5 h-3.5" />
                      {a.noQuiz} ohne Quiz
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5" />
                      {a.shortText} &lt; {MIN_CHARS} Zeichen
                    </span>
                    <span className="flex items-center gap-1">
                      <Quote className="w-3.5 h-3.5" />
                      {a.noMerksatz} ohne Merksatz
                    </span>
                    {a.totalUk > 0 && (
                      <span>
                        {a.totalUk} Unterkapitel
                      </span>
                    )}
                  </div>
                  {a.details.length > 0 && (
                    <ul className="mt-3 space-y-1.5 pl-2 border-l-2 border-slate-200 dark:border-slate-700">
                      {a.details.map((d, i) => {
                        const issues: string[] = [];
                        if (!d.hasQuiz) issues.push("Kein Quiz");
                        if (!d.hasEnoughText) issues.push(`&lt;${MIN_CHARS} Zeichen (${d.charCount})`);
                        if (!d.hasMerksatz) issues.push("Kein Merksatz");
                        return (
                          <li key={d.uk.id} className="text-xs text-slate-600 dark:text-slate-400">
                            <span className="font-medium text-slate-700 dark:text-slate-300">
                              {d.uk.title || `UK ${i + 1}`}
                            </span>
                            {issues.length > 0 && (
                              <span className="ml-2 text-red-600 dark:text-red-400">
                                → {issues.join(", ")}
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
