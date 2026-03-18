import { useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { fetchWeaknessAnalysis, type WeaknessResult } from "@/lib/backendSync";

const SUBJECT_LABELS: Record<string, string> = {
  biologie: "Biologie",
  chemie: "Chemie",
  physik: "Physik",
  mathematik: "Mathematik",
};

const SUBJECT_COLORS: Record<string, string> = {
  biologie: "#10b981",
  chemie: "#6366f1",
  physik: "#f59e0b",
  mathematik: "#ef4444",
};

export function WeaknessCard() {
  const [data, setData] = useState<WeaknessResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeaknessAnalysis().then((result) => {
      setData(result);
      setLoading(false);
    });
  }, []);

  if (loading) return null;
  if (!data?.weakest_chapters?.length && !data?.subject_scores) return null;

  return (
    <div className="card-glass rounded-xl p-5 space-y-4">
      <div className="flex items-center gap-2">
        <AlertTriangle className="w-4 h-4 text-amber-500" />
        <h3 className="text-sm font-semibold text-[var(--foreground)]">Deine Schwachstellen</h3>
      </div>

      {/* Subject overview bars */}
      {data.subject_scores && (
        <div className="space-y-2">
          {Object.entries(data.subject_scores).map(([subject, scores]) => (
            <div key={subject} className="flex items-center gap-3">
              <span className="text-xs text-[var(--muted)] w-20 shrink-0">
                {SUBJECT_LABELS[subject] ?? subject}
              </span>
              <div className="flex-1 h-2 bg-[var(--border)] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${scores.pct}%`,
                    background: SUBJECT_COLORS[subject] ?? "var(--accent)",
                  }}
                />
              </div>
              <span className="text-xs font-medium text-[var(--text-secondary)] w-10 text-right">
                {scores.pct}%
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Weakest chapters */}
      {data.weakest_chapters && data.weakest_chapters.length > 0 && (
        <div className="space-y-1.5 pt-1">
          <p className="text-xs text-[var(--muted)]">Hier solltest du nacharbeiten:</p>
          {data.weakest_chapters.slice(0, 5).map((ch) => (
            <Link
              key={ch.chapter_id}
              to={`/bms/${ch.subject}/${ch.chapter_id}`}
              className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[var(--foreground)]/5 transition-colors"
            >
              <div className="flex items-center gap-2 min-w-0">
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: SUBJECT_COLORS[ch.subject] ?? "var(--accent)" }}
                />
                <span className="text-sm text-[var(--foreground)] truncate">{ch.chapter_id}</span>
              </div>
              <span
                className="text-xs font-medium shrink-0 ml-2"
                style={{ color: ch.pct < 50 ? "#ef4444" : "#f59e0b" }}
              >
                {ch.pct}%
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
