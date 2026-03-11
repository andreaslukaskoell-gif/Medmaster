import type { ReactNode } from "react";
import { Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./button";

interface Props {
  feature: string;
  requiredTier?: "standard" | "pro";
  children: ReactNode;
}

export function Paywall({ feature, requiredTier = "standard", children }: Props) {
  return (
    <div className="relative">
      <div className="blur-sm pointer-events-none select-none">{children}</div>
      <div className="absolute inset-0 bg-[var(--background)]/60 backdrop-blur-sm flex items-center justify-center rounded-xl">
        <div className="text-center p-6 max-w-sm">
          <div className="w-14 h-14 bg-[var(--surface)] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Lock className="w-7 h-7 text-[var(--muted)]" />
          </div>
          <h3 className="font-bold text-[var(--text-primary)] mb-2">
            {requiredTier === "pro" ? "Pro" : "Standard"}-Feature
          </h3>
          <p className="text-sm text-[var(--muted)] mb-4">
            Upgrade auf {requiredTier === "pro" ? "Pro" : "Standard"} für {feature}.
          </p>
          <Link to="/pricing">
            <Button>Upgrade ansehen</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function PaywallBanner({
  feature,
  requiredTier = "standard",
}: {
  feature: string;
  requiredTier?: "standard" | "pro";
}) {
  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4 flex items-center gap-4">
      <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center shrink-0">
        <Lock className="w-5 h-5 text-[var(--accent)]" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-[var(--text-primary)]">{feature}</p>
        <p className="text-xs text-[var(--muted)]">
          Verfügbar ab {requiredTier === "pro" ? "Pro" : "Standard"}-Abo
        </p>
      </div>
      <Link to="/pricing">
        <Button size="sm">Upgrade</Button>
      </Link>
    </div>
  );
}
