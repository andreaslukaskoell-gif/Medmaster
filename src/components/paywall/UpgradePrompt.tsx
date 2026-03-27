import { Link } from "react-router-dom";
import { Lock, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type UpgradePromptVariant = "inline" | "card" | "banner" | "overlay";

type UpgradePromptProps = {
  /** What the user tried to access */
  feature: string;
  /** Optional limit info e.g. "5 von 5 Kapiteln erreicht" */
  limitInfo?: string;
  /** Visual variant */
  variant?: UpgradePromptVariant;
  /** Optional className */
  className?: string;
};

/**
 * Shown when a free user hits a feature limit.
 * Links to /pricing for upgrade.
 */
export function UpgradePrompt({
  feature,
  limitInfo,
  variant = "card",
  className = "",
}: UpgradePromptProps) {
  if (variant === "banner") {
    return (
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20 ${className}`}
      >
        <Lock className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-[var(--text-primary)]">
            {feature} — nur mit Premium
          </p>
          {limitInfo && (
            <p className="text-xs text-[var(--muted)]">{limitInfo}</p>
          )}
        </div>
        <Link to="/pricing">
          <Button size="sm" className="gap-1.5 shrink-0">
            Upgraden <ArrowRight className="w-3 h-3" />
          </Button>
        </Link>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <Link
        to="/pricing"
        className={`inline-flex items-center gap-1.5 text-sm text-amber-600 dark:text-amber-400 hover:underline ${className}`}
      >
        <Lock className="w-3.5 h-3.5" />
        Premium freischalten
      </Link>
    );
  }

  if (variant === "overlay") {
    return (
      <div className={`absolute inset-0 z-10 flex items-center justify-center bg-[var(--background)]/80 backdrop-blur-sm rounded-xl ${className}`}>
        <div className="text-center p-6 max-w-sm">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4">
            <Lock className="w-7 h-7 text-amber-600 dark:text-amber-400" />
          </div>
          <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{feature}</h3>
          <p className="text-sm text-[var(--muted)] mb-4">
            {limitInfo || "Schalte alle Features frei mit MedMaster Premium."}
          </p>
          <Link to="/pricing">
            <Button className="gap-2">
              <Sparkles className="w-4 h-4" />
              Premium freischalten
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Default: card variant
  return (
    <Card className={`border-2 border-amber-300 dark:border-amber-700 ${className}`}>
      <CardContent className="p-6 text-center">
        <div className="w-12 h-12 mx-auto rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-3">
          <Lock className="w-6 h-6 text-amber-600 dark:text-amber-400" />
        </div>
        <h3 className="text-base font-bold text-[var(--text-primary)] mb-1">{feature}</h3>
        <p className="text-sm text-[var(--muted)] mb-4">
          {limitInfo || "Schalte alle Features frei mit MedMaster Premium — einmalig €29,90."}
        </p>
        <Link to="/pricing">
          <Button className="gap-2">
            <Sparkles className="w-4 h-4" />
            Jetzt upgraden — €29,90
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

/**
 * Wraps children and shows an overlay when the feature is locked.
 */
export function FeatureGate({
  locked,
  feature,
  limitInfo,
  children,
}: {
  locked: boolean;
  feature: string;
  limitInfo?: string;
  children: React.ReactNode;
}) {
  if (!locked) return <>{children}</>;
  return (
    <div className="relative">
      <div className="opacity-40 pointer-events-none select-none" aria-hidden>
        {children}
      </div>
      <UpgradePrompt feature={feature} limitInfo={limitInfo} variant="overlay" />
    </div>
  );
}
