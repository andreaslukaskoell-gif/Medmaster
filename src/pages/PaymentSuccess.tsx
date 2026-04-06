import { useEffect, useState } from "react";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useAuth } from "@/hooks/useAuth";
import { track } from "@/lib/analytics";
import { trackConversion } from "@/lib/growthTracking";

const CONFETTI_COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#ec4899", "#8b5cf6", "#06b6d4"];

function Confetti() {
  const [pieces] = useState(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 1.5,
      duration: 2 + Math.random() * 2,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      size: 4 + Math.random() * 6,
      rotation: Math.random() * 360,
    }))
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden>
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${p.left}%`,
            top: -20,
            width: p.size,
            height: p.size * 0.6,
            backgroundColor: p.color,
            borderRadius: 1,
            transform: `rotate(${p.rotation}deg)`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes confetti-fall {
          0% { opacity: 1; transform: translateY(0) rotate(0deg); }
          100% { opacity: 0; transform: translateY(100vh) rotate(720deg); }
        }
        .animate-confetti-fall {
          animation: confetti-fall linear forwards;
        }
      `}</style>
    </div>
  );
}

export default function PaymentSuccess() {
  usePageTitle("Zahlung erfolgreich");
  const [searchParams] = useSearchParams();
  const { refreshProfile, isPremium } = useAuth();

  // Only show this page if redirected from Stripe (payment=success param) or already premium
  const hasPaymentParam = searchParams.get("payment") === "success";
  if (!hasPaymentParam && !isPremium) {
    return <Navigate to="/dashboard" replace />;
  }
  const [showConfetti, setShowConfetti] = useState(true);
  const [activating, setActivating] = useState(true);

  useEffect(() => {
    track("payment_success");
    trackConversion("purchase_completed", { value: 29.9, currency: "EUR" });
    const t = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(t);
  }, []);

  // Poll for premium status — webhook may take a few seconds
  const [activationFailed, setActivationFailed] = useState(false);
  useEffect(() => {
    if (isPremium) {
      setActivating(false);
      setActivationFailed(false);
      return;
    }
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (attempts > 30) {
        // 60s total — activation failed, show honest error
        clearInterval(interval);
        setActivating(false);
        setActivationFailed(true);
        track("activation_failed_timeout");
        return;
      }
      refreshProfile();
    }, 2000);
    return () => clearInterval(interval);
  }, [isPremium, refreshProfile]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      {showConfetti && <Confetti />}
      <Card className="max-w-md w-full border-2 border-emerald-500/30">
        <CardContent className="p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8 text-emerald-500" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-[var(--text-primary)]">
              {activating
                ? "Premium wird aktiviert …"
                : activationFailed
                  ? "Freischaltung dauert etwas länger"
                  : "Willkommen bei MedMaster Premium!"}
            </h1>
            <p className="text-[var(--muted)]">
              {activating
                ? "Deine Zahlung war erfolgreich. Dein Account wird gerade freigeschaltet — dauert nur einen Moment."
                : activationFailed
                  ? "Deine Zahlung ist eingegangen, aber die automatische Freischaltung dauert noch. Bitte lade die Seite in ein paar Minuten neu. Falls es dann noch nicht klappt, schreib uns an support@medmaster.at — wir schalten dich sofort frei."
                  : "Deine Zahlung war erfolgreich. Du hast jetzt vollen Zugang zu allen Features — 5.000+ BMS-Fragen, Simulationen, Lernplan und mehr."}
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

          {activationFailed ? (
            <div className="space-y-3">
              <Button className="w-full" size="lg" onClick={() => { setActivating(true); setActivationFailed(false); refreshProfile(); }}>
                Nochmal prüfen
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="w-full" size="lg" asChild>
                <a href="mailto:support@medmaster.at?subject=Premium%20Freischaltung&body=Meine%20Zahlung%20ist%20eingegangen%20aber%20Premium%20wurde%20nicht%20aktiviert.">
                  Support kontaktieren
                </a>
              </Button>
            </div>
          ) : (
            <Button className="w-full" size="lg" asChild>
              <Link to="/dashboard">
                Zum Dashboard
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          )}

          <p className="text-xs text-[var(--muted)]">
            Dein Kauf wird per E-Mail bestätigt. Bei Fragen:{" "}
            <a href="mailto:support@medmaster.at" className="text-[var(--accent)] hover:underline">
              support@medmaster.at
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
