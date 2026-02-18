import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, XCircle, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SUBJECT_ID_TO_SLUG } from "@/lib/bmsRoutes";
import { alleKapitel } from "@/data/bmsKapitel";
import type { Kapitel, Unterkapitel } from "@/data/bmsKapitel/types";

type Row = {
  kapitel: Kapitel;
  unterkapitel: Unterkapitel;
  ukIndex: number;
  href: string;
  textLen: number;
  hasQuiz: boolean;
  hasImage: boolean;
};

function textLength(uk: Unterkapitel): number {
  let len = (uk.content || "").trim().length;
  if (uk.sections && Array.isArray(uk.sections)) {
    for (const s of uk.sections) {
      len += (s.text || "").length;
      if (s.merksatz) len += s.merksatz.length;
    }
  }
  return len;
}

function hasQuiz(uk: Unterkapitel): boolean {
  const selfCount = (uk.selfTest && Array.isArray(uk.selfTest) && uk.selfTest.length) || 0;
  const optionalCount = (uk.quiz && uk.quiz.length) || 0;
  return selfCount > 0 || optionalCount > 0;
}

function buildRows(): Row[] {
  const rows: Row[] = [];
  const slug = (id: string) => SUBJECT_ID_TO_SLUG[id] ?? id;
  for (const k of alleKapitel) {
    if (!k || !k.id || !k.unterkapitel || !Array.isArray(k.unterkapitel)) continue;
    const subjectSlug = slug(k.subject);
    const base = `/bms/${subjectSlug}/${k.id}`;
    k.unterkapitel.forEach((uk, idx) => {
      if (!uk || !uk.id) return;
      rows.push({
        kapitel: k,
        unterkapitel: uk,
        ukIndex: idx,
        href: `${base}?uk=${idx}`,
        textLen: textLength(uk),
        hasQuiz: hasQuiz(uk),
        hasImage: !!(uk.imageUrl && uk.imageUrl.trim()),
      });
    });
  }
  return rows;
}

const subjectLabels: Record<string, string> = {
  biologie: "Biologie",
  chemie: "Chemie",
  physik: "Physik",
  mathematik: "Mathematik",
};

export default function AdminDashboard() {
  const navigate = useNavigate();
  const rows = useMemo(() => buildRows(), []);

  return (
    <div className="min-h-screen bg-(--color-soft-white) dark:bg-slate-900 text-midnight dark:text-slate-100">
      <header className="sticky top-0 z-10 border-b border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 backdrop-blur supports-backdrop-filter:bg-white/80">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate("/admin/audit")} className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Zurück
            </Button>
            <h1 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
              Content Command Center
            </h1>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {rows.length} Unterkapitel · Klick → direkt zum Kapitel
          </span>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/80">
                  <th className="text-left p-3 font-semibold text-slate-700 dark:text-slate-300">Fach</th>
                  <th className="text-left p-3 font-semibold text-slate-700 dark:text-slate-300">Kapitel</th>
                  <th className="text-left p-3 font-semibold text-slate-700 dark:text-slate-300">Unterkapitel</th>
                  <th className="text-left p-3 font-semibold text-slate-700 dark:text-slate-300 w-24">Text</th>
                  <th className="text-left p-3 font-semibold text-slate-700 dark:text-slate-300 w-24">Quiz</th>
                  <th className="text-left p-3 font-semibold text-slate-700 dark:text-slate-300 w-20">Image</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.unterkapitel.id}
                    className="border-b border-slate-100 dark:border-slate-700/80 hover:bg-primary-50/50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer"
                    onClick={() => navigate(row.href)}
                  >
                    <td className="p-3 text-slate-600 dark:text-slate-400">
                      {subjectLabels[row.kapitel.subject] ?? row.kapitel.subject}
                    </td>
                    <td className="p-3 font-medium text-slate-800 dark:text-slate-200">
                      {row.kapitel.title}
                    </td>
                    <td className="p-3 text-slate-700 dark:text-slate-300">
                      {row.unterkapitel.title}
                    </td>
                    <td className="p-3">
                      <span
                        className={
                          row.textLen > 500
                            ? "text-emerald-600 dark:text-emerald-400 font-medium"
                            : "text-amber-600 dark:text-amber-400 font-medium"
                        }
                      >
                        {row.textLen > 500 ? "OK" : row.textLen}
                      </span>
                    </td>
                    <td className="p-3">
                      {row.hasQuiz ? (
                        <span className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" /> Vorhanden
                        </span>
                      ) : (
                        <span className="text-red-600 dark:text-red-400 font-medium flex items-center gap-1">
                          <XCircle className="w-4 h-4" /> Fehlt
                        </span>
                      )}
                    </td>
                    <td className="p-3">
                      {row.hasImage ? (
                        <ImageIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <span className="text-slate-400 dark:text-slate-500">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {rows.length === 0 && (
          <p className="text-center text-slate-500 dark:text-slate-400 py-8">
            Keine Kapitel geladen. BMS-Daten prüfen.
          </p>
        )}
      </div>
    </div>
  );
}
