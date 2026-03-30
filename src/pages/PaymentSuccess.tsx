import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useAuth } from "@/hooks/useAuth";
import { track } from "@/lib/analytics";

export default function PaymentSuccess() {
  usePageTitle("Zahlung erfolgreich");
  const { refreshProfile } = useAuth();

  useEffect(() => {
    track("payment_success");
    // Re-fetch profile to pick up the premium tier set by webhook
    refreshProfile();
  }, [refreshProfile]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <Card className="max-w-md w-full border-2 border-emerald-500/30">
        <CardContent className="p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8 text-emerald-500" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-[var(--text-primary)]">
              Willkommen bei MedMaster Premium!
            </h1>
            <p className="text-[var(--muted)]">
              Deine Zahlung war erfolgreich. Du hast jetzt vollen Zugang zu allen
              Features — 5.000+ BMS-Fragen, Simulationen, Lernplan und mehr.
            </p>
          </div>

          <div className="bg-[var(--surface)] rounded-xl p-4 space-y-2 text-left">
            <div className="flex items-center gap-2 text-sm text-[var(--text-primary)]">
              <Sparkles className="w-4 h-4 text-[var(--accent)] shrink-0" />
              Alle BMS-Fragen & Lerneinheiten
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--text-primary)]">
              <Sparkles className="w-4 h-4 text-[var(--accent)] shrink-0" />
              Realistische Prüfungssimulation
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--text-primary)]">
              <Sparkles className="w-4 h-4 text-[var(--accent)] shrink-0" />
              Personalisierter Lernplan & Prognose
            </div>
          </div>

          <Button className="w-full" size="lg" asChild>
            <Link to="/dashboard">
              Zum Dashboard
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>

          <p className="text-xs text-[var(--muted)]">
            Dein Kauf wird per E-Mail bestätigt. Bei Fragen:{" "}
            <a
              href="mailto:support@medmaster.at"
              className="text-[var(--accent)] hover:underline"
            >
              support@medmaster.at
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
