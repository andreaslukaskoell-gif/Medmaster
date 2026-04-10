import { useEffect, useState } from "react";
import { Check, ArrowRight, Shield, Lock, RotateCcw, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useAuth } from "@/hooks/useAuth";
import { startCheckout, isPaymentEnabled, formatPrice } from "@/lib/stripe";
import { trackPricingView } from "@/lib/analytics";
import { useReferralReward } from "@/hooks/useReferralReward";
import { ReferralWidget } from "@/components/shared/ReferralWidget";

const features = [
  "5.000+ BMS-Fragen mit Erklärungen",
  "Alle 174 Lerneinheiten (Theorie)",
  "10.000+ KFF-Übungen",
  "10 TV-Textsets mit MC-Fragen",
  "230+ SEK-Aufgaben",
  "Realistische Prüfungssimulation im MedAT-Format",
  "Adaptives Lernsystem mit Schwächenanalyse",
  "Spaced Repetition & Schwachstellen-Trainer",
  "Prüfungstag-Prognose",
  "Personalisierter Lernplan",
  "Updates bis zum MedAT 2026 inklusive",
];

export default function Pricing() {
  usePageMeta({
    title: "Preise — MedAT Vorbereitung",
    description: "MedMaster kostet einmalig €29,90 — kein Abo. 5.000+ BMS-Fragen, alle KFF-Untertests, Prüfungssimulation und personalisierter Lernplan. Kostenloser Starter-Zugang verfügbar.",
    canonical: "https://medmaster.at/preise",
    ogImage: "https://medmaster.at/og-image.png",
  });
  const { user } = useAuth();
  const reward = useReferralReward();

  const [widerrufConsent, setWiderrufConsent] = useState(false);

  const isFreePromo = new Date() < new Date("2026-04-01T00:00:00+02:00");
  const personalPrice = reward.personalPriceCents;
  const hasDiscount = reward.hasReward;

  useEffect(() => {
    trackPricingView();
  }, []);

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <BreadcrumbNav items={[{ label: "Dashboard", href: "/" }, { label: "Preise" }]} />

      <div className="text-center space-y-3 hero-orbs py-8">
        <h1 className="heading-glow text-2xl sm:text-[3rem] sm:leading-tight font-bold text-[var(--text-primary)]">
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
                    Dein persönlicher Preis inkl. MwSt.
                  </p>
                </>
              ) : (
                <>
                  <span className="text-4xl font-bold text-[var(--text-primary)]">€29,90</span>
                  <p className="text-sm text-[var(--muted)]">Einmalig inkl. MwSt. — kein Abo</p>
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

          {/* FAGG §18 Widerrufsverzicht — Checkbox vor Kauf (nur wenn kostenpflichtig) */}
          {!isFreePromo && isPaymentEnabled() && user && (
            <label className="flex items-start gap-3 mb-4 cursor-pointer text-xs text-[var(--muted)] leading-relaxed">
              <input
                type="checkbox"
                checked={widerrufConsent}
                onChange={(e) => setWiderrufConsent(e.target.checked)}
                className="accent-[var(--accent)] mt-0.5 shrink-0"
              />
              <span>
                Ich stimme zu, dass die Bereitstellung der digitalen Inhalte sofort nach dem Kauf
                beginnt, und mir ist bekannt, dass ich damit mein{" "}
                <a href="/agb" className="text-[var(--accent)] hover:underline" target="_blank">
                  Widerrufsrecht
                </a>{" "}
                verliere (§ 18 Abs. 1 Z 11 FAGG).
              </span>
            </label>
          )}

          {isFreePromo ? (
            <Button className="w-full py-6 text-base font-semibold" size="lg" asChild>
              <Link to="/login">
                Jetzt gratis starten
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          ) : isPaymentEnabled() && user ? (
            <Button
              className="w-full py-6 text-base font-semibold"
              size="lg"
              disabled={!widerrufConsent}
              onClick={() => startCheckout({ email: user.email ?? undefined, userId: user.id })}
            >
              Jetzt kaufen — {formatPrice(personalPrice)} inkl. MwSt.
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : isPaymentEnabled() && !user ? (
            <Button className="w-full py-6 text-base font-semibold" size="lg" asChild>
              <Link to="/login?redirect=/preise">
                Anmelden & kaufen — {formatPrice(personalPrice)} inkl. MwSt.
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          ) : (
            <Button className="w-full py-6 text-base font-semibold" size="lg" asChild>
              <Link to="/login">
                Jetzt starten
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          )}

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" />
              <span>Sichere Zahlung via Stripe</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              <span>DSGVO-konform</span>
            </div>
            <div className="flex items-center gap-1.5">
              <RotateCcw className="w-3.5 h-3.5" />
              <span>14 Tage Widerrufsrecht (FAGG)</span>
            </div>
          </div>

          <div className="mt-3 text-center space-y-1">
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

      {/* Social proof */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--muted)] py-2">
        <div className="flex items-center gap-1.5">
          <Check className="w-4 h-4 text-emerald-500" />
          <span>5.230+ BMS-Fragen</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Check className="w-4 h-4 text-emerald-500" />
          <span>174 Lerneinheiten</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Check className="w-4 h-4 text-emerald-500" />
          <span>Von MedAT-Absolventen entwickelt</span>
        </div>
      </div>

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

      {/* Starter vs Premium comparison */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] text-center">
          Starter vs. Premium
        </h3>
        <div className="card-glass overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left px-4 py-3 text-[var(--muted)] font-medium">Feature</th>
                <th className="px-4 py-3 text-[var(--muted)] font-medium text-center">Starter</th>
                <th className="px-4 py-3 font-medium text-center text-[var(--accent)]">Premium</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {([
                ["BMS-Fragen", "50 / Fach", "5.230+"],
                ["Lerneinheiten (Theorie)", "5 / Fach", "Alle 174"],
                ["KFF-Übungen", "20 / Subtest", "Unbegrenzt"],
                ["TV-Textsets", "2", "Alle 10"],
                ["SEK-Aufgaben", "5 / Subtest", "230+"],
                ["Prüfungssimulation", "—", "Unbegrenzt"],
                ["Lernplan & Prognose", "—", "Voll"],
                ["Schwachstellen-Trainer", "—", "Voll"],
                ["Spaced Repetition", "—", "Voll"],
              ] as const).map(([feature, starter, premium]) => (
                <tr key={feature}>
                  <td className="px-4 py-2.5 text-[var(--text-primary)]">{feature}</td>
                  <td className="px-4 py-2.5 text-center text-[var(--muted)]">{starter}</td>
                  <td className="px-4 py-2.5 text-center font-medium text-[var(--text-primary)]">{premium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div className="space-y-4 pb-8">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] text-center">
          Häufige Fragen
        </h3>
        <div className="space-y-2">
          <FaqItem q="Kann ich MedMaster kostenlos testen?">
            Ja! Der Starter-Zugang ist kostenlos und enthält 50 BMS-Fragen pro Fach,
            20 KFF-Übungen pro Subtest und 2 TV-Textsets. Keine Kreditkarte nötig.
          </FaqItem>
          <FaqItem q="Kann ich vom Kauf zurücktreten?">
            Ja. Du hast ein gesetzliches Widerrufsrecht von 14 Tagen ab Vertragsschluss
            (gem. FAGG). Schreib einfach an support@medmaster.at. Details findest du in
            unseren <a href="/agb" className="text-[var(--accent)] hover:underline">AGB</a>.
          </FaqItem>
          <FaqItem q="Ist das ein Abo?">
            Nein. MedMaster ist eine Einmalzahlung von €29,90. Kein Abo, keine versteckten
            Kosten, kein automatisches Verlängern.
          </FaqItem>
          <FaqItem q="Wie aktuell sind die Fragen?">
            Alle Inhalte werden laufend aktualisiert und orientieren sich am MedAT 2026.
            Updates sind im Preis inklusive.
          </FaqItem>
          <FaqItem q="Wie sicher ist die Zahlung?">
            Die Zahlung wird über Stripe abgewickelt — den weltweit führenden Zahlungsanbieter.
            Deine Kartendaten werden nie auf unseren Servern gespeichert. Alles DSGVO-konform.
          </FaqItem>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ q, children }: { q: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-glass">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 w-full px-4 py-3.5 text-left"
      >
        <span className="flex-1 text-sm font-medium text-[var(--text-primary)]">{q}</span>
        <ChevronDown className={`w-4 h-4 text-[var(--muted)] transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-4 pb-3.5 text-sm text-[var(--muted)] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}
