import { type ReactNode, useEffect, useRef } from "react";
import { Sparkles, BookOpen, Brain, Target, BarChart3, CheckCircle2 } from "lucide-react";
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

const PREMIUM_HIGHLIGHTS = [
  { icon: BookOpen, text: "5.000+ BMS-Fragen mit Erklärungen" },
  { icon: Brain, text: "Schwachstellen-Analyse & Lernplan" },
  { icon: Target, text: "Realistische Prüfungssimulation" },
  { icon: BarChart3, text: "Prognose & Fortschritts-Tracking" },
];

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
        <div className="text-center p-6 max-w-md">
          <div className="w-14 h-14 bg-[var(--accent)]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 ring-1 ring-[var(--accent)]/20">
            <Sparkles className="w-7 h-7 text-[var(--accent)]" />
          </div>
          <h3 className="font-bold text-lg text-[var(--text-primary)] mb-1">
            Voller Zugang zu {feature}
          </h3>
          <p className="text-sm text-[var(--muted)] mb-4">
            Einmalig €29,90 — günstiger als ein Lehrbuch, kein Abo.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 text-left">
            {PREMIUM_HIGHLIGHTS.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                <Icon className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {days > 0 && days <= 120 && (
            <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mb-4">
              Noch {days} Tage bis zum MedAT — jede Lernstunde zählt.
            </p>
          )}

          <Button onClick={handleCheckout} className="w-full gap-2 mb-3">
            <Sparkles className="w-4 h-4" />
            Jetzt freischalten — €29,90
          </Button>

          <div className="flex items-center justify-center gap-3 text-[10px] text-[var(--muted)]">
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Kein Abo</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Sofort freigeschaltet</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Inkl. Updates</span>
          </div>
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
    <div className="bg-[var(--surface)] border border-[var(--accent)]/20 rounded-xl p-4 flex items-center gap-4">
      <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center shrink-0">
        <Sparkles className="w-5 h-5 text-[var(--accent)]" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-[var(--text-primary)]">{feature}</p>
        <p className="text-xs text-[var(--muted)]">€29,90 einmalig — günstiger als ein Lehrbuch</p>
      </div>
      <Button size="sm" onClick={handleCheckout} className="gap-1.5">
        Freischalten
        <Sparkles className="w-3.5 h-3.5" />
      </Button>
    </div>
  );
}
