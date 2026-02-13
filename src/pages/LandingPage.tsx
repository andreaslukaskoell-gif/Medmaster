import { Link } from "react-router-dom";
import { Brain, ListChecks, BookOpen, Sparkles, Star, ArrowRight, GraduationCap, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "KI-Adaptives Lernen",
    description:
      "Unser System erkennt deine Schwächen und passt die Fragen automatisch an dein Niveau an. So lernst du gezielt, was du wirklich brauchst.",
    color: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
  },
  {
    icon: ListChecks,
    title: "Offizielle Stichwortliste abgedeckt",
    description:
      "Alle 106 offiziellen BMS-Stichworte für 2025/2026 sind abgedeckt. Verfolge deinen Fortschritt pro Stichwort in Echtzeit.",
    color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: BookOpen,
    title: "1.000+ Übungsfragen",
    description:
      "Über 1.000 BMS-Fragen in Biologie, Chemie, Physik & Mathematik — plus KFF, Textverständnis und Sozial-emotionale Kompetenzen.",
    color: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "Gratis",
    period: "",
    features: ["50 BMS-Fragen", "1 Simulationstest", "Grundstatistiken"],
    cta: "Kostenlos starten",
    highlight: false,
  },
  {
    name: "Standard",
    price: "€12.90",
    period: "/Monat",
    features: [
      "Alle 1.000+ BMS-Fragen",
      "KI-adaptives Lernsystem",
      "Unbegrenzte Simulationen",
      "Stichwortlisten-Tracking",
      "Schwachstellen-Trainer",
    ],
    cta: "Jetzt starten",
    highlight: true,
  },
  {
    name: "Pro",
    price: "€19.90",
    period: "/Monat",
    features: [
      "Alles aus Standard",
      "KI-Tutor Chat",
      "Prüfungstag-Prognose",
      "Prioritärer Support",
      "Lernplan-Generator",
    ],
    cta: "Pro wählen",
    highlight: false,
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    uni: "MedUni Wien 2025",
    text: "Dank MedMaster habe ich meine BMS-Schwachstellen erkannt und gezielt trainiert. Die adaptive Fragenauswahl hat den Unterschied gemacht!",
    rating: 5,
  },
  {
    name: "Lukas K.",
    uni: "MedUni Graz 2025",
    text: "Die Stichwortlisten-Abdeckung gibt mir die Sicherheit, dass ich wirklich alles Relevante gelernt habe. Beste MedAT-App!",
    rating: 5,
  },
  {
    name: "Anna T.",
    uni: "MedUni Innsbruck 2025",
    text: "Der KI-Tutor erklärt Fehler so, dass ich sie wirklich verstehe. Viel besser als nur eine Erklärung zu lesen.",
    rating: 5,
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xl font-bold text-gray-900 dark:text-gray-100">MedMaster</span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Anmelden
            </Link>
            <Link
              to="/register"
              className="text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Kostenlos starten
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-indigo-950/30 dark:via-gray-950 dark:to-emerald-950/20" />
        <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-24 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Neu: KI-Tutor jetzt verfügbar
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight mb-6">
            MedAT 2026 bestehen —<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">
              mit KI-Tutor ab €12.90/Monat
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Die smarteste MedAT-Vorbereitung Österreichs. Adaptives Lernen, offizielle Stichwortliste und
            über 1.000 Übungsfragen — alles in einer App.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg shadow-indigo-500/25"
            >
              Kostenlos registrieren
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#preise"
              className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold px-8 py-4 rounded-xl text-lg transition-colors border border-gray-200 dark:border-gray-700"
            >
              Preise ansehen
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16">
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">1.000+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Übungsfragen</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">106</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Stichworte</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">4</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">MedAT-Bereiche</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Warum MedMaster?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Entwickelt von MedAT-Absolventen, optimiert mit KI — damit du dich auf das konzentrierst, was zählt.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${f.color}`}>
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-14">
            So funktioniert's
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Registrieren", desc: "Erstelle dein Konto in unter 30 Sekunden. Kein Abo nötig für den Start.", icon: Shield },
              { step: "2", title: "Lernen & Üben", desc: "Beantworte Fragen, das KI-System erkennt deine Stärken und Schwächen automatisch.", icon: Brain },
              { step: "3", title: "MedAT bestehen", desc: "Mit gezielter Vorbereitung und Prüfungstag-Prognose gehst du optimal vorbereitet in den Test.", icon: Zap },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-2">SCHRITT {s.step}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{s.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="preise" className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Beste MedAT-Vorbereitung zum fairsten Preis
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Starte gratis und upgrade, wenn du bereit bist.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 ${
                  plan.highlight
                    ? "bg-indigo-600 text-white shadow-xl shadow-indigo-500/25 scale-105"
                    : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
                    Beliebteste Wahl
                  </div>
                )}
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    plan.highlight ? "text-white" : "text-gray-900 dark:text-gray-100"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span
                    className={`text-4xl font-extrabold ${
                      plan.highlight ? "text-white" : "text-gray-900 dark:text-gray-100"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={plan.highlight ? "text-indigo-200" : "text-gray-500 dark:text-gray-400"}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <svg
                        className={`w-5 h-5 shrink-0 mt-0.5 ${
                          plan.highlight ? "text-indigo-200" : "text-emerald-500"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={plan.highlight ? "text-indigo-100" : "text-gray-600 dark:text-gray-400"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/register"
                  className={`block w-full text-center font-semibold py-3 rounded-xl transition-colors ${
                    plan.highlight
                      ? "bg-white text-indigo-600 hover:bg-indigo-50"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-14">
            Das sagen unsere Nutzer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed italic">
                  "{t.text}"
                </p>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{t.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t.uni}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-700">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Bereit für den MedAT 2026?</h2>
          <p className="text-indigo-200 mb-8">
            Starte heute mit der smartesten MedAT-Vorbereitung. Kostenlos und unverbindlich.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 font-semibold px-8 py-4 rounded-xl text-lg hover:bg-indigo-50 transition-colors shadow-lg"
          >
            Jetzt kostenlos registrieren
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 dark:bg-gray-950 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-indigo-400" />
            <span className="text-sm font-semibold text-gray-300">MedMaster</span>
          </div>
          <p className="text-xs text-gray-500">© 2026 MedMaster. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
