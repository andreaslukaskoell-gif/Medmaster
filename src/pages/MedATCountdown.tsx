import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Logo } from "@/components/brand/Logo";

const NAVY = "#1b3ea7";
const MEDAT_DATE = new Date("2026-07-04T08:00:00+02:00");

/* ── Countdown hook ── */
function useCountdown(target: Date) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1_000);
  return { days, hours, minutes, seconds, expired: diff === 0 };
}

/* ── JSON-LD Event schema ── */
function useEventSchema() {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "Event",
      name: "MedAT 2026",
      description:
        "Aufnahmetest Humanmedizin und Zahnmedizin an den Medizinischen Universitaeten in Oesterreich.",
      startDate: "2026-07-04",
      endDate: "2026-07-04",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: [
        {
          "@type": "Place",
          name: "Medizinische Universitaet Wien",
          address: { "@type": "PostalAddress", addressLocality: "Wien", addressCountry: "AT" },
        },
        {
          "@type": "Place",
          name: "Medizinische Universitaet Graz",
          address: { "@type": "PostalAddress", addressLocality: "Graz", addressCountry: "AT" },
        },
        {
          "@type": "Place",
          name: "Medizinische Universitaet Innsbruck",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Innsbruck",
            addressCountry: "AT",
          },
        },
        {
          "@type": "Place",
          name: "Johannes Kepler Universitaet Linz",
          address: { "@type": "PostalAddress", addressLocality: "Linz", addressCountry: "AT" },
        },
      ],
      organizer: {
        "@type": "Organization",
        name: "Medizinische Universitaeten Oesterreich",
        url: "https://www.medizinstudieren.at",
      },
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
}

/* ── Countdown digit box ── */
function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-28 h-28 rounded-2xl flex items-center justify-center text-5xl font-extrabold text-white shadow-lg"
        style={{ backgroundColor: NAVY }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <span className="mt-3 text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export default function MedATCountdown() {
  const { days, hours, minutes, seconds, expired } = useCountdown(MEDAT_DATE);
  const { signInWithGoogle } = useAuth();
  const [googleError, setGoogleError] = useState("");

  usePageMeta({
    title: `MedAT 2026 Countdown \u2014 Noch ${days} Tage bis zum Test`,
    description:
      "Wann ist der MedAT 2026? Live-Countdown zum MedAT-Termin am 4. Juli 2026. Alle Fakten zu Anmeldung, Testorten und Vorbereitung.",
    canonical: "https://medmaster.at/medat-countdown",
    ogImage: "https://medmaster.at/og-image.png",
  });

  useEventSchema();

  const handleGoogle = async () => {
    setGoogleError("");
    const { error } = await signInWithGoogle();
    if (error) setGoogleError(error.message);
  };

  const fade = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  };

  const facts = [
    {
      icon: CalendarDays,
      title: "Anmeldung",
      value: "Marz\u2013April 2026",
      detail: "Online-Registrierung auf medizinstudieren.at",
    },
    {
      icon: MapPin,
      title: "Testorte",
      value: "Wien, Graz, Innsbruck, Linz",
      detail: "Gleichzeitig an allen 4 Standorten",
    },
    {
      icon: Clock,
      title: "Dauer",
      value: "~8 Stunden",
      detail: "BMS, TV, KFF, SEK \u2014 alle 4 Testteile an einem Tag",
    },
    {
      icon: Users,
      title: "Teilnehmer",
      value: "~16.000",
      detail: "Rund 1.900 Studienplatze \u2014 Quote ca. 12 %",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* ─── Header ─── */}
      <header className="sticky top-0 z-40 bg-[var(--surface)]/80 backdrop-blur-2xl border-b border-[var(--border)]/50">
        <div className="max-w-4xl mx-auto px-8 h-16 flex items-center justify-between">
          <Link to="/">
            <Logo variant="full" size={26} />
          </Link>
          <Link
            to="/login"
            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            Anmelden
          </Link>
        </div>
      </header>

      {/* ─── Hero / Countdown ─── */}
      <section className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <motion.p
            {...fade}
            className="text-sm font-semibold tracking-widest uppercase mb-6"
            style={{ color: NAVY }}
          >
            MedAT 2026 Termin
          </motion.p>

          <motion.h1
            {...fade}
            transition={{ ...fade.transition, delay: 0.1 }}
            className="text-5xl font-extrabold text-[var(--text-primary)] leading-tight tracking-tight mb-4"
          >
            Countdown zum MedAT 2026
          </motion.h1>

          <motion.p
            {...fade}
            transition={{ ...fade.transition, delay: 0.15 }}
            className="text-lg text-[var(--text-secondary)] mb-4"
          >
            Der MedAT 2026 findet voraussichtlich am{" "}
            <strong className="text-[var(--text-primary)]">4. Juli 2026</strong> statt.
          </motion.p>

          <motion.p
            {...fade}
            transition={{ ...fade.transition, delay: 0.2 }}
            className="text-base text-[var(--muted)] mb-14"
          >
            So viel Zeit hast du noch zur Vorbereitung:
          </motion.p>

          {/* Countdown boxes */}
          <motion.div
            {...fade}
            transition={{ ...fade.transition, delay: 0.25 }}
            className="flex justify-center gap-6 mb-6"
          >
            {expired ? (
              <p className="text-2xl font-bold text-[var(--text-primary)]">
                Der MedAT 2026 hat bereits stattgefunden.
              </p>
            ) : (
              <>
                <CountdownUnit value={days} label="Tage" />
                <CountdownUnit value={hours} label="Stunden" />
                <CountdownUnit value={minutes} label="Minuten" />
                <CountdownUnit value={seconds} label="Sekunden" />
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* ─── Key Facts ─── */}
      <section className="py-20 border-t border-[var(--border)]/50">
        <div className="max-w-4xl mx-auto px-8">
          <motion.h2
            {...fade}
            className="text-3xl font-bold text-[var(--text-primary)] text-center mb-14"
          >
            Die wichtigsten Fakten zum MedAT 2026
          </motion.h2>
          <motion.div {...fade} className="grid grid-cols-2 gap-6">
            {facts.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[var(--border)] p-8 hover:shadow-[var(--shadow-sm)] transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `color-mix(in srgb, ${NAVY} 8%, transparent)` }}
                >
                  <f.icon className="w-6 h-6" style={{ color: NAVY }} />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)] mb-1">
                  {f.title}
                </h3>
                <p className="text-xl font-bold text-[var(--text-primary)] mb-2">{f.value}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{f.detail}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 border-t border-[var(--border)]/50">
        <div className="max-w-3xl mx-auto px-8">
          <motion.div
            {...fade}
            className="rounded-2xl p-12 text-center"
            style={{
              background: `linear-gradient(135deg, color-mix(in srgb, ${NAVY} 4%, transparent), color-mix(in srgb, ${NAVY} 8%, transparent))`,
              border: `1px solid color-mix(in srgb, ${NAVY} 12%, transparent)`,
            }}
          >
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
              Starte jetzt mit der Vorbereitung
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-8 max-w-md mx-auto leading-relaxed">
              5.000+ BMS-Fragen, 10.000+ KFF-Aufgaben, Testsimulationen und adaptives Lernsystem
              \u2014 alles in einer App.
            </p>

            <button
              onClick={handleGoogle}
              className="btn-premium inline-flex items-center justify-center gap-3 font-semibold px-10 py-4.5 text-base cursor-pointer rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-200"
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
              Kostenlos starten
            </button>

            {googleError && <p className="text-sm text-red-500 mt-3">{googleError}</p>}

            <p className="text-xs text-[var(--muted)] mt-4">
              <Link to="/login" className="underline hover:text-[var(--text-secondary)]">
                Mit E-Mail anmelden
              </Link>
              {" \u00b7 "}Keine Kreditkarte{" \u00b7 "}Jederzeit k\u00fcndbar
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-8 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-8 flex items-center justify-between text-xs text-[var(--muted)]">
          <span>&copy; 2026 MedMaster</span>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-[var(--text-primary)] transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-[var(--text-primary)] transition-colors">
              Datenschutz
            </Link>
            <Link to="/agb" className="hover:text-[var(--text-primary)] transition-colors">
              AGB
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
