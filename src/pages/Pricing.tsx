import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";

const plans = [
  {
    name: "Gratis",
    price: "0",
    period: "für immer",
    description: "Perfekt zum Reinschnuppern",
    highlighted: false,
    features: [
      { text: "BMS-Theorie: alle Kapitel lesbar", included: true },
      { text: "5 Übungsfragen pro Fach", included: true },
      { text: "Strategie-Guides (KFF, TV, SEK)", included: true },
      { text: "Basis-Statistiken", included: true },
      { text: "Einstufungstest", included: true },
      { text: "Testsimulation", included: false },
      { text: "Erweiterte Fragendatenbank (500+)", included: false },
      { text: "Detaillierte Leistungsanalyse", included: false },
      { text: "Personalisierter Lernplan", included: false },
    ],
  },
  {
    name: "Premium",
    price: "14,99",
    period: "pro Monat",
    description: "Für ernsthaftes MedAT-Training",
    highlighted: true,
    features: [
      { text: "Alles aus Gratis", included: true },
      { text: "Erweiterte Fragendatenbank (500+)", included: true },
      { text: "Testsimulationen (unbegrenzt)", included: true },
      { text: "Spaced Repetition System", included: true },
      { text: "Detaillierte Leistungsanalyse", included: true },
      { text: "Personalisierter Lernplan", included: true },
      { text: "Community-Vergleich & Rangliste", included: true },
      { text: "Lernaktivitäts-Heatmap", included: true },
      { text: "Offline-Modus (App)", included: false },
    ],
  },
  {
    name: "Ultimate",
    price: "24,99",
    period: "pro Monat",
    description: "Maximum Vorbereitung",
    highlighted: false,
    features: [
      { text: "Alles aus Premium", included: true },
      { text: "1000+ Übungsfragen mit Erklärungen", included: true },
      { text: "Offline-Modus (App)", included: true },
      { text: "Frühzugang zu neuen Inhalten", included: true },
      { text: "Druckbare Zusammenfassungen (PDF)", included: true },
      { text: "Erweiterte Fehleranalyse", included: true },
      { text: "Lerngruppen-Feature", included: true },
      { text: "Prioritäts-Support per E-Mail", included: true },
      { text: "Geld-zurück-Garantie (30 Tage)", included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <Breadcrumb items={[{ label: "Dashboard", href: "/" }, { label: "Preise" }]} />

      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Wähle deinen Plan</h1>
        <p className="text-muted mt-2 max-w-lg mx-auto">Investiere in deine Zukunft. Alle Pläne sind jederzeit kündbar.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative ${plan.highlighted ? "border-2 border-primary-500 shadow-lg md:scale-105" : ""}`}
          >
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary-700 text-white px-3 py-1">Beliebteste Wahl</Badge>
              </div>
            )}
            <CardContent className="p-6 pt-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{plan.name}</h3>
              <p className="text-sm text-muted mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                  {plan.price === "0" ? "Gratis" : `${plan.price} EUR`}
                </span>
                {plan.price !== "0" && <span className="text-sm text-muted ml-1">/ {plan.period}</span>}
              </div>

              <Button variant={plan.highlighted ? "primary" : "outline"} className="w-full mb-6" size="lg">
                {plan.price === "0" ? "Kostenlos starten" : "Jetzt upgraden"}
              </Button>

              <div className="space-y-3">
                {plan.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2">
                    {f.included ? (
                      <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-gray-300 dark:text-gray-600 mt-0.5 shrink-0" />
                    )}
                    <span className={`text-sm ${f.included ? "text-gray-700 dark:text-gray-300" : "text-gray-400 dark:text-gray-500"}`}>
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center text-sm text-muted space-y-2">
        <p>Alle Preise inkl. MwSt. Jederzeit kündbar.</p>
        <p>Fragen? Schreib uns an <span className="text-primary-700 dark:text-primary-400 font-medium">support@medmaster.at</span></p>
      </div>
    </div>
  );
}
