import { type ReactNode, useEffect, useRef } from "react";
import { Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import { trackEvent } from "@/lib/analyticsTracker";

type Props = {
  feature: string;
  children: ReactNode;
};

export function Paywall({ feature, children }: Props) {
  const tracked = useRef(false);
  useEffect(() => {
    if (!tracked.current) {
      tracked.current = true;
      trackEvent("paywall_shown", { feature, type: "overlay" });
    }
  }, [feature]);

  return (
    <div className="relative">
      <div className="blur-sm pointer-events-none select-none">{children}</div>
      <div className="absolute inset-0 bg-[var(--background)]/60 backdrop-blur-sm flex items-center justify-center rounded-xl">
        <div className="text-center p-6 max-w-sm">
          <div className="w-14 h-14 bg-[var(--surface)] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Lock className="w-7 h-7 text-[var(--muted)]" />
          </div>
          <h3 className="font-bold text-[var(--text-primary)] mb-2">Premium-Feature</h3>
          <p className="text-sm text-[var(--muted)] mb-4">
            Schalte {feature} frei — einmalig €29,90 für alle Features.
          </p>
          <Link to="/preise" onClick={() => trackEvent("paywall_clicked", { feature, type: "overlay" })}>
            <Button>Mehr erfahren</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function PaywallBanner({ feature }: { feature: string }) {
  const tracked = useRef(false);
  useEffect(() => {
    if (!tracked.current) {
      tracked.current = true;
      trackEvent("paywall_shown", { feature, type: "banner" });
    }
  }, [feature]);

  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4 flex items-center gap-4">
      <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center shrink-0">
        <Lock className="w-5 h-5 text-[var(--accent)]" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-[var(--text-primary)]">{feature}</p>
        <p className="text-xs text-[var(--muted)]">Einmalig €29,90 — kein Abo</p>
      </div>
      <Link to="/preise" onClick={() => trackEvent("paywall_clicked", { feature, type: "banner" })}>
        <Button size="sm">Freischalten</Button>
      </Link>
    </div>
  );
}
