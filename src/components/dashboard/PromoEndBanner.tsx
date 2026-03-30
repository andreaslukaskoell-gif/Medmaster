import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { isPromoActive } from "@/lib/permissions";
import { isEarlyBirdDay } from "@/lib/stripe";

const PROMO_END = new Date("2026-04-01T00:00:00+02:00");

export function PromoEndBanner() {
  const { tier } = useAuth();
  const promo = isPromoActive();
  const actuallyPaid = tier === "premium";

  // Only show during promo for users who haven't paid yet, within last 7 days
  if (!promo || actuallyPaid) return null;
  const daysLeft = Math.ceil((PROMO_END.getTime() - Date.now()) / 86_400_000);
  if (daysLeft > 7 || daysLeft < 0) return null;

  const urgencyColor =
    daysLeft <= 1
      ? "border-red-500/40 bg-red-500/5"
      : daysLeft <= 3
        ? "border-amber-500/40 bg-amber-500/5"
        : "border-[var(--accent)]/30 bg-[var(--accent)]/5";

  const textColor =
    daysLeft <= 1
      ? "text-red-600 dark:text-red-400"
      : daysLeft <= 3
        ? "text-amber-600 dark:text-amber-400"
        : "text-[var(--accent)]";

  return (
    <div className={`rounded-xl border p-4 mb-6 flex items-center gap-4 ${urgencyColor}`}>
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${textColor} bg-white/50 dark:bg-white/5`}
      >
        <Clock className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-semibold ${textColor}`}>
          {daysLeft <= 0
            ? "Gratis-Zugang endet heute!"
            : daysLeft === 1
              ? "Noch 1 Tag gratis!"
              : `Noch ${daysLeft} Tage gratis`}
        </p>
        <p className="text-xs text-[var(--muted)]">
          {isEarlyBirdDay()
            ? "Heute noch upgraden und €5 sparen — nur €24,90 statt €29,90!"
            : "Ab 1. April kostet MedMaster einmalig €29,90. Sichere dir jetzt Premium."}
        </p>
      </div>
      <Link to="/preise" className="shrink-0">
        <Button size="sm" className="gap-1">
          Angebot sichern
          <ArrowRight className="w-3.5 h-3.5" />
        </Button>
      </Link>
    </div>
  );
}
