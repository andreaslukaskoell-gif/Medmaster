import { Link } from "react-router-dom";
import { ArrowRight, Clock, GraduationCap } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { trackEvent } from "@/lib/analyticsTracker";
import { blogArticles } from "@/data/blogArticles";
import { useEffect } from "react";

const NAVY = "#1b3ea7";

const TOPIC_COLORS: Record<string, string> = {
  BMS: "bg-emerald-100 text-emerald-700",
  KFF: "bg-blue-100 text-blue-700",
  TV: "bg-amber-100 text-amber-700",
  Strategie: "bg-purple-100 text-purple-700",
  Motivation: "bg-rose-100 text-rose-700",
};

export default function BlogIndex() {
  usePageMeta({
    title: "MedAT 2026 Lerntipps & Strategien",
    description:
      "Lerntipps, Strategien und Expertenwissen für deine MedAT 2026 Vorbereitung. BMS-Fehler vermeiden, KFF trainieren, Lernplan erstellen.",
    canonical: "https://medmaster.at/blog",
  });

  useEffect(() => {
    trackEvent("blog_view", { page: "index" });
  }, []);

  return (
    <div className="min-h-screen bg-[var(--surface)] dark:bg-[var(--background)]">
      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-[var(--surface)]/90 dark:bg-[var(--background)]/90 backdrop-blur-xl border-b border-[var(--border)] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
            MedMaster
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/medat-uebungsfragen"
              className="text-sm font-medium text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors px-3 py-2 rounded-xl hover:bg-[var(--card)] hidden sm:inline-flex"
            >
              BMS Demo
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-xl shadow-[var(--shadow-sm)] transition-colors hover:opacity-90"
              style={{ backgroundColor: NAVY }}
            >
              Kostenlos testen
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight mb-3">
          MedAT 2026 Lerntipps & Strategien
        </h1>
        <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
          Expertenwissen, Lernstrategien und Praxistipps für deine MedAT-Vorbereitung — von BMS bis
          KFF.
        </p>
      </header>

      {/* Article grid */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {blogArticles.map((article) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="group bg-[var(--surface)] rounded-xl p-6 border border-[var(--border)] hover:shadow-[var(--shadow-sm)] transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-lg ${TOPIC_COLORS[article.topic] ?? "bg-gray-100 text-gray-700"}`}
                >
                  {article.topic}
                </span>
                <span className="flex items-center gap-1 text-xs text-[var(--muted)]">
                  <Clock className="w-3 h-3" />
                  {article.readingTime} Min
                </span>
              </div>
              <h2 className="text-base font-semibold text-[var(--text-primary)] leading-snug mb-2 group-hover:text-[var(--accent)] transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {article.excerpt}
              </p>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center p-8 rounded-xl bg-[var(--accent)]/5 border border-[var(--accent)]/20">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">
            Bereit für den MedAT? Jetzt gratis starten
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mb-4 max-w-md mx-auto">
            4.300+ BMS-Fragen, unbegrenzte KFF-Übungen, Prüfungssimulation — alles in einer
            Plattform.
          </p>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-xl transition-colors hover:opacity-90"
            style={{ backgroundColor: NAVY }}
          >
            Kostenlos starten
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-[var(--accent)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-white/70" />
            <span className="text-sm font-semibold text-white/80">MedMaster</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
            <Link to="/" className="hover:text-white/80 transition-colors">
              Startseite
            </Link>
            <Link to="/medat-uebungsfragen" className="hover:text-white/80 transition-colors">
              Übungsfragen
            </Link>
            <Link to="/impressum" className="hover:text-white/80 transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-white/80 transition-colors">
              Datenschutz
            </Link>
          </div>
          <p className="text-xs text-white/50">© 2026 MedMaster</p>
        </div>
      </footer>
    </div>
  );
}
