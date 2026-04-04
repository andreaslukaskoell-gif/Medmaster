import { Link } from "react-router-dom";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "./button";
import { trackEvent } from "@/lib/analyticsTracker";
import { useRef, useEffect } from "react";

type Props = {
  used: number;
  limit: number;
  label: string;
};

/**
 * Shows a warning banner when user is at 80%+ of their free limit.
 * Displays nothing if under threshold or if limit is null (unlimited).
 */
export function UsageLimitWarning({ used, limit, label }: Props) {
  const pct = Math.round((used / limit) * 100);
  const tracked = useRef(false);

  useEffect(() => {
    if (pct >= 80 && !tracked.current) {
      tracked.current = true;
      trackEvent("usage_limit_warning_shown", { label, used, limit, pct });
    }
  }, [pct, label, used, limit]);

  if (pct < 80) return null;

  const remaining = Math.max(0, limit - used);
  const isExhausted = remaining === 0;

  return (
    <div
      className={`rounded-lg border p-3 flex items-center gap-3 mb-4 ${
        isExhausted
          ? "border-red-500/30 bg-red-500/5"
          : "border-amber-500/30 bg-amber-500/5"
      }`}
    >
      <AlertTriangle
        className={`w-4 h-4 shrink-0 ${
          isExhausted ? "text-red-500" : "text-amber-500"
        }`}
      />
      <p
        className={`text-sm flex-1 ${
          isExhausted
            ? "text-red-700 dark:text-red-400"
            : "text-amber-700 dark:text-amber-400"
        }`}
      >
        {isExhausted
          ? `Du hast alle ${limit} kostenlosen ${label} aufgebraucht.`
          : `Noch ${remaining} von ${limit} kostenlosen ${label} übrig.`}
      </p>
      <Link
        to="/preise"
        onClick={() =>
          trackEvent("usage_limit_warning_clicked", { label, remaining })
        }
        className="shrink-0"
      >
        <Button size="sm" variant="ghost" className="gap-1 text-xs">
          {isExhausted ? "Freischalten" : "Upgrade"}
          <ArrowRight className="w-3 h-3" />
        </Button>
      </Link>
    </div>
  );
}
