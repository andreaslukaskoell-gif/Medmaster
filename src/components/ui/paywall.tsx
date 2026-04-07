import { type ReactNode, useEffect, useRef } from "react";
import { Lock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import { trackEvent } from "@/lib/analyticsTracker";
import { usePermissions } from "@/hooks/usePermissions";
import { useAuth } from "@/hooks/useAuth";
import { startCheckout } from "@/lib/stripe";

function daysUntilMedAT(): number {
  const medat = new Date("2026-07-04T00:00:00+02:00");
  const now = new Date();
  return Math.max(0, Math.ceil((medat.getTime() - now.getTime()) / 86_400_000));
}

type Props = {
  feature: string;
  children: ReactNode;
};

export function Paywall({ feature, children }: Props) {
  const { loading } = usePermissions();
  const { user } = useAuth();
  const tracked = useRef(false);
  const days = daysUntilMedAT();

  useEffect(() => {
    if (!loading && !tracked.current) {
      tracked.current = true;
      trackEvent("paywall_shown", { feature, type: "overlay" });
    }
  }, [feature, loading]);

  if (loading) return <>{children}</>;

  const handleCheckout = () => {
    trackEvent("paywall_clicked", { feature, type: "overlay" });
    const started = startCheckout({ email: user?.email ?? undefined, userId: user?.id });
    if (!started) window.location.href = "/preise";
  };

  return (
    <div className="relative">
      <div className="blur-sm pointer-events-none select-none">{children}</div>
      <div className="absolute inset-0 bg-[var(--background)]/60 backdrop-blur-sm flex items-center justify-center rounded-xl">
        <div className="text-center p-6 max-w-sm">
          <div className="w-14 h-14 bg-[var(--accent)]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 ring-1 ring-[var(--accent)]/20">
            <Lock className="w-7 h-7 text-[var(--accent)]" />
          </div>
          <h3 className="font-bold text-lg text-[var(--text-primary)] mb-1">{feature}</h3>
          <p className="text-sm text-[var(--muted)] mb-4">
            Einmalig €29,90 — kein Abo, alle Features sofort freigeschaltet.
          </p>

          {days > 0 && (
            <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mb-4">
              Noch {days} Tage bis zum MedAT — jede Lernstunde zählt.
            </p>
          )}

          <Button onClick={handleCheckout} className="w-full gap-2 mb-2">
            <Sparkles className="w-4 h-4" />
            Für €29,90 freischalten
          </Button>
          <Link
            to="/preise"
            className="text-xs text-[var(--muted)] hover:text-[var(--text-secondary)] transition-colors"
          >
            Alle Features vergleichen
          </Link>
        </div>
      </div>
    </div>
  );
}

export function PaywallBanner({ feature }: { feature: string }) {
  const { loading } = usePermissions();
  const { user } = useAuth();
  const tracked = useRef(false);

  useEffect(() => {
    if (!loading && !tracked.current) {
      tracked.current = true;
      trackEvent("paywall_shown", { feature, type: "banner" });
    }
  }, [feature, loading]);

  if (loading) return null;

  const handleCheckout = () => {
    trackEvent("paywall_clicked", { feature, type: "banner" });
    const started = startCheckout({ email: user?.email ?? undefined, userId: user?.id });
    if (!started) window.location.href = "/preise";
  };

  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4 flex items-center gap-4">
      <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center shrink-0">
        <Lock className="w-5 h-5 text-[var(--accent)]" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-[var(--text-primary)]">{feature}</p>
        <p className="text-xs text-[var(--muted)]">Einmalig €29,90 — kein Abo</p>
      </div>
      <Button size="sm" onClick={handleCheckout}>Freischalten</Button>
    </div>
  );
}
