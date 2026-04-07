import { ArrowRight, TrendingUp, Target, Zap } from "lucide-react";
import { Button } from "./button";
import { usePermissions } from "@/hooks/usePermissions";
import { useAuth } from "@/hooks/useAuth";
import { trackEvent } from "@/lib/analyticsTracker";
import { startCheckout } from "@/lib/stripe";
import { useEffect, useRef } from "react";

type Props = {
  score: number;
  total: number;
  subject: string;
};

/**
 * Shows after quiz results for starter users.
 * Tailored message based on performance — directs to Stripe checkout.
 */
export function PostQuizUpgradePrompt({ score, total, subject }: Props) {
  const { isPremium } = usePermissions();
  const { user } = useAuth();
  const tracked = useRef(false);
  const pct = Math.round((score / total) * 100);

  useEffect(() => {
    if (!isPremium && !tracked.current) {
      tracked.current = true;
      trackEvent("post_quiz_upgrade_shown", { subject, score, total, pct });
    }
  }, [isPremium, subject, score, total, pct]);

  if (isPremium) return null;

  const message =
    pct >= 80
      ? `${pct}% richtig — stark! Mit Testsimulation und Schwachstellen-Trainer holst du die letzten Punkte.`
      : pct >= 50
        ? `${pct}% richtig — gute Basis! Die Schwachstellen-Analyse zeigt dir, wo du am schnellsten Punkte holst.`
        : `${pct}% richtig — da geht noch was! Mit dem Lernplan und 4.950+ weiteren Fragen wirst du schnell besser.`;

  const features =
    pct >= 50
      ? [
          { icon: Target, text: "Schwachstellen gezielt trainieren" },
          { icon: TrendingUp, text: "Testsimulation wie am Prüfungstag" },
        ]
      : [
          { icon: Zap, text: "Persönlicher Lernplan" },
          { icon: Target, text: "4.950+ weitere Fragen pro Fach" },
        ];

  const handleCheckout = () => {
    trackEvent("post_quiz_upgrade_clicked", { subject, pct });
    const started = startCheckout({ email: user?.email ?? undefined, userId: user?.id });
    if (!started) window.location.href = "/preise";
  };

  return (
    <div className="card-glass p-5 border border-[var(--accent)]/15">
      <p className="text-sm text-[var(--text-primary)] font-medium mb-3">
        {message}
      </p>
      <div className="space-y-2 mb-4">
        {features.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-2 text-xs text-[var(--muted)]">
            <Icon className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>{text}</span>
          </div>
        ))}
      </div>
      <Button size="sm" className="gap-1.5" onClick={handleCheckout}>
        Premium freischalten — €29,90
        <ArrowRight className="w-3.5 h-3.5" />
      </Button>
    </div>
  );
}
