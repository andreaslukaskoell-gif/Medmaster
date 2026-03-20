import { useEffect } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useAuth } from "@/hooks/useAuth";
import { startCheckout, isPaymentEnabled, formatPrice } from "@/lib/stripe";
import { trackPricingView } from "@/lib/analytics";
import { useReferralReward } from "@/hooks/useReferralReward";
import { ReferralWidget } from "@/components/shared/ReferralWidget";

const features = [
  "5.000+ BMS-Fragen mit Erklärungen",
  "Alle 173 Lerneinheiten (Theorie)",
  "10.000+ KFF-Übungen (algorithmisch generiert)",
  "10 TV-Textsets mit MC-Fragen",
  "324 SEK-Aufgaben",
  "Realistische Prüfungssimulation im MedAT-Format",
  "KI-adaptives Lernsystem",
  "Spaced Repetition & Schwachstellen-Trainer",
  "Prüfungstag-Prognose",
  "Personalisierter Lernplan",
  "KI-Tutor Chat",
  "Updates bis zum MedAT 2026 inklusive",
];

export default function Pricing() {
  usePageTitle("Preise");
  const { user } = useAuth();
  const reward = useReferralReward();

  const isFreePromo = new Date() < new Date("2026-04-01T00:00:00+02:00");
  const personalPrice = reward.personalPriceCents;
  const hasDiscount = reward.hasReward;

  useEffect(() => {
    trackPricingView();
  }, []);

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <BreadcrumbNav items={[{ label: "Dashboard", href: "/" }, { label: "Preise" }]} />

      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold text-[var(--text-primary)]">
          Alles. Ein Preis. Kein Abo.
        </h1>
        <p className="text-[var(--muted)] max-w-lg mx-auto">
          Einmalzahlung — voller Zugang zu allen Inhalten und Updates.
        </p>
      </div>

      <Card className="border-2 border-[var(--accent)] shadow-lg">
        <CardContent className="p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-2xl font-bold text-[var(--text-primary)]">
                  MedMaster Komplett
                </h2>
                <Badge className="bg-[var(--accent)] text-white">Alle Features</Badge>
              </div>
              <p className="text-[var(--muted)]">Alles, was du für den MedAT 2026 brauchst</p>
            </div>
            <div className="text-right">
              {isFreePromo ? (
                <>
                  <div className="flex items-baseline gap-2 justify-end">
                    <span className="text-lg text-[var(--muted)] line-through">€29,90</span>
                    <span className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">
                      Gratis
                    </span>
                  </div>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                    Bis 31. März 2026
                  </p>
                </>
              ) : hasDiscount ? (
                <>
                  <div className="flex items-baseline gap-2 justify-end">
                    <span className="text-lg text-[var(--muted)] line-through">€29,90</span>
                    <span className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">
                      {formatPrice(personalPrice)}
                    </span>
                  </div>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                    Dein persönlicher Preis
                  </p>
                </>
              ) : (
                <>
                  <span className="text-4xl font-bold text-[var(--text-primary)]">€29,90</span>
                  <p className="text-sm text-[var(--muted)]">Einmalig — kein Abo</p>
                </>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-sm text-[var(--text-primary)]">{feature}</span>
              </div>
            ))}
          </div>

          {isFreePromo ? (
            <Button className="w-full py-6 text-base font-semibold" size="lg" asChild>
              <Link to="/login">
                Jetzt gratis starten
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          ) : isPaymentEnabled() ? (
            <Button
              className="w-full py-6 text-base font-semibold"
              size="lg"
              onClick={() => startCheckout({ email: user?.email ?? undefined, userId: user?.id })}
            >
              Jetzt kaufen — {formatPrice(personalPrice)}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button className="w-full py-6 text-base font-semibold" size="lg" asChild>
              <Link to="/login">
                Jetzt starten
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          )}

          <div className="mt-4 text-center space-y-1">
            <p className="text-xs text-[var(--muted)]">
              Keine Kreditkarte nötig{isFreePromo ? " — komplett gratis bis 31. März" : ""}.
            </p>
            <p className="text-xs text-[var(--muted)]">
              Fragen?{" "}
              <a
                href="mailto:support@medmaster.at"
                className="text-[var(--accent)] font-medium hover:underline"
              >
                support@medmaster.at
              </a>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Referral widget — earn 5€ off */}
      {user && !isFreePromo && (
        <div className="max-w-md mx-auto">
          <ReferralWidget />
        </div>
      )}

      <div className="text-center space-y-4 py-4">
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">
          Warum einmalig statt Abo?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-sm">
          <div className="space-y-1">
            <p className="font-medium text-[var(--text-primary)]">Kein Stress</p>
            <p className="text-[var(--muted)]">Kein monatliches Kündigen. Einmal zahlen, fertig.</p>
          </div>
          <div className="space-y-1">
            <p className="font-medium text-[var(--text-primary)]">Faire Preise</p>
            <p className="text-[var(--muted)]">
              Abo-Plattformen kosten €100+ im Jahr. MedMaster: einmalig €29,90.
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-medium text-[var(--text-primary)]">Updates inklusive</p>
            <p className="text-[var(--muted)]">Neue Fragen und Features kommen automatisch dazu.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
