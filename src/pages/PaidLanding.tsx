import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, XCircle, BookOpen, Zap, BarChart3 } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { usePageMeta } from "@/hooks/usePageMeta";
import { trackClick, trackEvent } from "@/lib/analyticsTracker";
import { Logo } from "@/components/brand/Logo";

const NAVY = "#1b3ea7";

/* ── Sample question (inline, single) ── */
const SAMPLE_Q = {
  subject: "Biologie",
  badge: "bg-emerald-100 text-emerald-700",
  text: "Welche Aussage zur DNA-Replikation ist FALSCH?",
  options: [
    { id: "a", text: "Die Replikation verläuft semikonservativ" },
    { id: "b", text: "Die DNA-Polymerase synthetisiert in 5'→3'-Richtung" },
    { id: "c", text: "Am Leitstrang erfolgt die Synthese kontinuierlich" },
    { id: "d", text: "Die Helikase spaltet die Wasserstoffbrücken" },
    { id: "e", text: "Okazaki-Fragmente entstehen am Leitstrang" },
  ],
  correctId: "e",
  explanation:
    "Okazaki-Fragmente entstehen am Folgestrang, nicht am Leitstrang. Am Leitstrang verläuft die Synthese kontinuierlich.",
};

/* ── Comparison (compact, honest) ── */
const COMPARE = [
  { feature: "BMS-Fragen", us: "4.000+", them: "500–2.000" },
  { feature: "KFF-Aufgaben", us: "10.000+", them: "50–200 fixe" },
  { feature: "Alle 4 MedAT-Bereiche", us: true, them: false },
  { feature: "Adaptiver Lernplan", us: true, them: false },
  { feature: "Preis", us: "Einmalig €29,90", them: "€9–30 / Monat" },
  { feature: "Zugang", us: "Bis zum MedAT 2026", them: "Solange du zahlst" },
];

function SampleQuestion() {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const q = SAMPLE_Q;
  const isCorrect = selected === q.correctId;

  return (
    <div className="card-glass p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-lg ${q.badge}`}>{q.subject}</span>
        <span className="text-xs text-[var(--muted)]">Beispielfrage</span>
      </div>
      <p className="text-base font-semibold text-[var(--text-primary)] leading-relaxed mb-5">
        {q.text}
      </p>
      <div className="space-y-2.5 mb-5">
        {q.options.map((opt) => {
          const letter = opt.id.toUpperCase();
          let style =
            "border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)]/40";
          if (submitted) {
            if (opt.id === q.correctId)
              style =
                "border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300";
            else if (opt.id === selected)
              style = "border-red-400 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300";
            else style = "border-[var(--border)] text-[var(--muted)] opacity-60";
          } else if (opt.id === selected) {
            style = "border-[var(--accent)] bg-[var(--accent)]/5 text-[var(--text-primary)]";
          }
          return (
            <button
              key={opt.id}
              onClick={() => !submitted && setSelected(opt.id)}
              disabled={submitted}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl border text-sm text-left transition-colors cursor-pointer disabled:cursor-default ${style}`}
            >
              <span
                className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                  submitted && opt.id === q.correctId
                    ? "bg-emerald-500 text-white"
                    : submitted && opt.id === selected
                      ? "bg-red-400 text-white"
                      : opt.id === selected
                        ? "bg-[var(--accent)] text-white"
                        : "bg-[var(--card)] text-[var(--muted)]"
                }`}
              >
                {submitted && opt.id === q.correctId
                  ? "✓"
                  : submitted && opt.id === selected
                    ? "✗"
                    : letter}
              </span>
              {opt.text}
            </button>
          );
        })}
      </div>

      {!submitted ? (
        <button
          onClick={() => selected && setSubmitted(true)}
          disabled={!selected}
          className="btn-premium w-full py-3 text-sm disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Antwort prüfen
        </button>
      ) : (
        <div className="space-y-4">
          <div
            className={`rounded-xl p-4 text-sm leading-relaxed ${
              isCorrect
                ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300"
                : "bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300"
            }`}
          >
            <p className="font-semibold mb-1">{isCorrect ? "Richtig!" : "Nicht ganz."}</p>
            <p>{q.explanation}</p>
          </div>
          <Link
            to="/login"
            onClick={() => {
              trackClick("demo-q-cta", "Post-question CTA");
              trackEvent("signup_click", { cta: "demo-question", source: "paid-lp" });
            }}
            className="btn-premium flex items-center justify-center gap-2 w-full py-3 text-sm"
          >
            Über 4.000 Fragen wie diese — jetzt gratis starten
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}

export default function PaidLanding() {
  usePageMeta({
    title: "MedAT 2026 Vorbereitung — 4.000+ BMS-Fragen, 10.000+ KFF-Aufgaben | MedMaster",
    description:
      "Bestehe den MedAT 2026 mit System. 4.000+ BMS-Fragen, 10.000+ KFF-Aufgaben, TV, SEK — alle 4 Bereiche in einer Plattform. Einmalig €29,90.",
    canonical: "https://medmaster.at/lp/medat",
    ogImage: "https://medmaster.at/og-image.png",
  });

  const { signInWithGoogle } = useAuth();
  const [googleError, setGoogleError] = useState("");

  const handleGoogle = async () => {
    setGoogleError("");
    trackClick("lp-google-signup", "Paid LP Google CTA");
    trackEvent("signup_click", { method: "google", source: "paid-lp" });
    const { error } = await signInWithGoogle();
    if (error) setGoogleError(error.message);
  };

  const handleEmailClick = () => {
    trackClick("lp-email-signup", "Paid LP Email CTA");
    trackEvent("signup_click", { method: "email", source: "paid-lp" });
  };

  const GoogleBtn = ({ label, className = "" }: { label: string; className?: string }) => (
    <button
      onClick={handleGoogle}
      className={`inline-flex items-center justify-center gap-3 font-semibold px-8 py-4 text-base cursor-pointer ${className}`}
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* ─── Minimal header — logo only, no navigation ─── */}
      <header className="sticky top-0 z-40 bg-[var(--surface)]/90 backdrop-blur-xl border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Logo variant="full" size={24} />
          <Link
            to="/login"
            onClick={handleEmailClick}
            className="text-sm font-medium text-[var(--accent)] hover:underline"
          >
            Anmelden
          </Link>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="pt-16 pb-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold tracking-wide uppercase mb-4" style={{ color: NAVY }}>
            Schluss mit planlosem Lernen
          </p>
          <h1 className="text-5xl font-extrabold text-[var(--text-primary)] leading-tight tracking-tight mb-5">
            Du willst Medizin studieren.
            <br />
            <span style={{ color: NAVY }}>Wir bringen dich durch den MedAT.</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8 leading-relaxed">
            4.000+ BMS-Fragen. Über 10.000 KFF-Aufgaben. TV und SEK inklusive. Alle 4 MedAT-Bereiche
            — eine Plattform, einmalig €29,90.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col items-center gap-3 mb-4">
            <GoogleBtn
              label="Kostenlos starten mit Google"
              className="btn-premium rounded-xl text-white shadow-lg"
            />
            <Link
              to="/login"
              onClick={handleEmailClick}
              className="text-sm text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              Oder mit E-Mail registrieren →
            </Link>
          </div>
          {googleError && <p className="text-sm text-red-500 mt-2">{googleError}</p>}
          <p className="text-xs text-[var(--muted)] mt-3">
            Kein Abo · Keine Kreditkarte · Sofort loslegen
          </p>
        </div>
      </section>

      {/* ─── Trust numbers ─── */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-4">
            {[
              { number: "4.000+", label: "BMS-Fragen", sub: "mit Erklärungen" },
              { number: "10.000+", label: "KFF-Aufgaben", sub: "alle 5 Untertests" },
              { number: "€29,90", label: "einmalig", sub: "kein Abo, kein Haken" },
            ].map((stat) => (
              <div key={stat.label} className="card-glass p-5 text-center">
                <div className="text-2xl font-extrabold mb-1" style={{ color: NAVY }}>
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-[var(--text-primary)]">{stat.label}</div>
                <div className="text-xs text-[var(--muted)]">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Screenshot ─── */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="card-glass overflow-hidden">
            <img
              src="/screenshots/fragen-trainer-bio.png"
              alt="MedMaster BMS-Fragentrainer"
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ─── Pain point callout ─── */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-900/10 p-8 text-center">
            <p className="text-lg font-bold text-[var(--text-primary)] mb-2">
              17.000 Kandidaten. 1.900 Plätze.
            </p>
            <p className="text-sm text-[var(--text-secondary)] max-w-lg mx-auto leading-relaxed">
              Über 88 % werden abgelehnt. Der Unterschied zwischen Zusage und Absage sind oft wenige
              Punkte. Wer planlos lernt, verschenkt sie.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 3 Features — compact ─── */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                icon: BookOpen,
                title: "Alle 4 MedAT-Bereiche",
                desc: "BMS, KFF, Textverständnis und SEK — komplett abgedeckt, nicht nur ein Teilbereich.",
              },
              {
                icon: Zap,
                title: "Erkennt deine Schwächen",
                desc: "Adaptiver Lernplan analysiert deine Fehler und stellt gezielt Aufgaben daraus zusammen.",
              },
              {
                icon: BarChart3,
                title: "Echte Prüfungssimulation",
                desc: "Vollständiger MedAT-Probelauf mit Zeitlimit und detaillierter Auswertung.",
              },
            ].map((f) => (
              <div key={f.title} className="card-glass p-5">
                <f.icon className="w-8 h-8 mb-3" style={{ color: NAVY }} />
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1.5">{f.title}</h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Comparison table (compact) ─── */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] text-center mb-2">
            Ehrlicher Vergleich
          </h2>
          <p className="text-sm text-[var(--muted)] text-center mb-6">
            Die meisten Plattformen verkaufen dir ein Abo für einen Bruchteil des Stoffs.
          </p>
          <div className="card-glass overflow-hidden">
            <div className="grid grid-cols-3 text-center text-sm font-semibold border-b border-[var(--border)]">
              <div className="p-3 text-left" />
              <div className="p-3" style={{ color: NAVY }}>
                MedMaster
              </div>
              <div className="p-3 text-[var(--muted)]">Alternativen</div>
            </div>
            {COMPARE.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 text-center text-sm ${i < COMPARE.length - 1 ? "border-b border-[var(--border)]" : ""}`}
              >
                <div className="p-3 text-[var(--text-primary)] text-left font-medium text-xs">
                  {row.feature}
                </div>
                <div className="p-3 flex items-center justify-center">
                  {row.us === true ? (
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                  ) : (
                    <span className="font-semibold text-[var(--text-primary)] text-xs">
                      {row.us}
                    </span>
                  )}
                </div>
                <div className="p-3 flex items-center justify-center">
                  {row.them === false ? (
                    <XCircle className="w-5 h-5 text-red-400" />
                  ) : (
                    <span className="text-[var(--muted)] text-xs">{row.them}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Interactive demo question ─── */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] text-center mb-2">
            Kannst du diese Frage beantworten?
          </h2>
          <p className="text-sm text-[var(--muted)] text-center mb-6">
            So sehen die Fragen in MedMaster aus. Über 4.000 davon — mit Erklärung bei jeder
            Antwort.
          </p>
          <SampleQuestion />
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-16" style={{ backgroundColor: NAVY }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Jeder Tag ohne Vorbereitung ist ein Tag weniger bis zum MedAT.
          </h2>
          <p className="text-white/70 text-sm mb-8 max-w-md mx-auto">
            4.000+ BMS-Fragen, 10.000+ KFF-Aufgaben, TV und SEK — alles in einer Plattform. Kein
            Abo, keine Kreditkarte.
          </p>
          <GoogleBtn
            label="Jetzt kostenlos starten"
            className="bg-white text-[var(--text-primary)] rounded-xl shadow-lg hover:bg-gray-50 transition-colors"
          />
          <p className="text-xs text-white/50 mt-4">Einmalig €29,90 nach der Testphase</p>
        </div>
      </section>

      {/* ─── Minimal footer — legal only ─── */}
      <footer className="py-6 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-6 flex items-center justify-between text-xs text-[var(--muted)]">
          <span>© 2026 MedMaster</span>
          <div className="flex gap-4">
            <Link to="/impressum" className="hover:text-[var(--text-primary)] transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-[var(--text-primary)] transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
