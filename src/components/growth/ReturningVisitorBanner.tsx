import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { trackEvent } from "@/lib/analyticsTracker";

const VISIT_COUNT_KEY = "mm_visit_count";
const VISITOR_ID_KEY = "mm_vid";
const DISMISSED_KEY = "mm_returning_banner_dismissed";

export function ReturningVisitorBanner() {
  const { user, loading } = useAuth();
  const [visible, setVisible] = useState(false);
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    if (loading) return;
    if (user) return;

    const vid = localStorage.getItem(VISITOR_ID_KEY);
    if (!vid) return;

    if (sessionStorage.getItem(DISMISSED_KEY)) return;

    const prev = parseInt(localStorage.getItem(VISIT_COUNT_KEY) || "0", 10);
    const next = prev + 1;
    localStorage.setItem(VISIT_COUNT_KEY, String(next));

    if (next >= 2) {
      queueMicrotask(() => {
        setVisitCount(next);
        setVisible(true);
      });
      trackEvent("returning_visitor_banner_shown", { visit_count: next });
    }
  }, [loading, user]);

  if (!visible) return null;

  return (
    <div
      className="relative flex items-center justify-center gap-3 py-2 px-4 text-sm"
      style={{ background: "color-mix(in srgb, var(--accent) 5%, transparent)" }}
    >
      <span className="text-[var(--text-secondary)]">
        Willkommen zurück! Du hast MedMaster schon{" "}
        <strong className="text-[var(--text-primary)]">{visitCount} mal</strong> besucht — bereit
        loszulegen?
      </span>
      <Link
        to="/login"
        className="inline-flex items-center gap-1 rounded-lg px-3 py-1 text-sm font-medium text-white"
        style={{ background: "var(--accent)" }}
        onClick={() => trackEvent("returning_visitor_banner_click", { visit_count: visitCount })}
      >
        Jetzt starten
      </Link>
      <button
        onClick={() => {
          sessionStorage.setItem(DISMISSED_KEY, "1");
          setVisible(false);
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-[var(--muted)] hover:text-[var(--text-primary)] hover:bg-[var(--card)] transition-colors"
        aria-label="Banner schliessen"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
