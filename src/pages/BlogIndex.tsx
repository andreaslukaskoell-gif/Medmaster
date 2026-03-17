import { Link } from "react-router-dom";
import { ArrowRight, Clock, GraduationCap } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { trackEvent } from "@/lib/analyticsTracker";
import { blogArticles } from "@/data/blogArticles";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const NAVY = "#1b3ea7";

const TOPIC_COLORS: Record<string, string> = {
  BMS: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  KFF: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  TV: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  Strategie: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  Motivation: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
};

export default function BlogIndex() {
  usePageMeta({
    title: "MedAT Lerntipps & Strategien",
    ogTitle: "MedAT Lerntipps & Strategien | MedMaster Blog",
    description:
      "30+ Artikel zu MedAT-Vorbereitung, BMS-Tipps, KFF-Training und Prüfungsstrategien. Kostenlos.",
    canonical: "https://medmaster.at/blog",
    ogImage: "https://medmaster.at/og-image.png",
  });

  const [nlEmail, setNlEmail] = useState("");
  const [nlState, setNlState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [activeTopic, setActiveTopic] = useState<string>("Alle");

  const topicCounts = blogArticles.reduce<Record<string, number>>((acc, a) => {
    acc[a.topic] = (acc[a.topic] ?? 0) + 1;
    return acc;
  }, {});
  const topics = Object.keys(topicCounts).sort();

  const filteredArticles =
    activeTopic === "Alle" ? blogArticles : blogArticles.filter((a) => a.topic === activeTopic);

  useEffect(() => {
    trackEvent("blog_view", { page: "index" });
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = nlEmail.trim().toLowerCase();
    if (!trimmed || nlState === "loading") return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setNlState("error");
      return;
    }
    setNlState("loading");
    try {
      if (supabase) {
        await supabase.from("leads").upsert(
          {
            email: trimmed,
            source: "newsletter",
            utm_source: sessionStorage.getItem("mm_utm")
              ? JSON.parse(sessionStorage.getItem("mm_utm")!).utm_source
              : null,
            created_at: new Date().toISOString(),
          },
          { onConflict: "email" }
        );
      }
      trackEvent("newsletter_signup", { source: "blog_index" });
      setNlState("done");
    } catch {
      setNlState("error");
    }
  };

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

      {/* Newsletter signup */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8">
        <div className="bg-[var(--surface)] border border-[var(--border)] border-l-4 border-l-[var(--accent)] rounded-xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-sm backdrop-blur-sm">
          {nlState === "done" ? (
            <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
              Angemeldet — du bekommst bald Post!
            </p>
          ) : (
            <>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  MedAT-Lerntipps direkt in dein Postfach
                </p>
                <p className="text-xs text-[var(--muted)] mt-0.5">
                  Neue Artikel, Strategien und Übungstipps — kostenlos, kein Spam.
                </p>
              </div>
              <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2 shrink-0">
                <input
                  type="email"
                  placeholder="deine@email.at"
                  value={nlEmail}
                  onChange={(e) => {
                    setNlEmail(e.target.value);
                    if (nlState === "error") setNlState("idle");
                  }}
                  className={`w-52 text-sm px-3 py-2 rounded-lg border bg-[var(--background)] text-[var(--text-primary)] placeholder:text-[var(--muted)] outline-none focus:ring-2 focus:ring-[var(--accent)]/40 ${nlState === "error" ? "border-red-400" : "border-[var(--border)]"}`}
                />
                <button
                  type="submit"
                  disabled={nlState === "loading"}
                  className="text-sm font-semibold text-white px-4 py-2 rounded-lg transition-colors hover:opacity-90 disabled:opacity-60"
                  style={{ backgroundColor: NAVY }}
                >
                  {nlState === "loading" ? "..." : "Anmelden"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      {/* Topic filter */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-6">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveTopic("Alle")}
            className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
              activeTopic === "Alle"
                ? "text-white border-transparent"
                : "text-[var(--text-secondary)] border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/40"
            }`}
            style={activeTopic === "Alle" ? { backgroundColor: NAVY } : undefined}
          >
            Alle ({blogArticles.length})
          </button>
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => setActiveTopic(topic)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                activeTopic === topic
                  ? "text-white border-transparent"
                  : "text-[var(--text-secondary)] border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/40"
              }`}
              style={activeTopic === topic ? { backgroundColor: NAVY } : undefined}
            >
              {topic} ({topicCounts[topic]})
            </button>
          ))}
        </div>
      </div>

      {/* Article grid */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {activeTopic !== "Alle" && (
          <p className="text-sm text-[var(--muted)] mb-4">
            {filteredArticles.length} Artikel zu {activeTopic}
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredArticles.map((article) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="group bg-[var(--surface)] rounded-xl p-6 border border-[var(--border)] hover:shadow-[var(--shadow-sm)] transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-lg ${TOPIC_COLORS[article.topic] ?? "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"}`}
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

        {/* Internal Links */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/medat-uebungsfragen"
            className="group bg-[var(--surface)] rounded-xl p-6 border border-[var(--border)] hover:shadow-[var(--shadow-sm)] transition-shadow text-center"
          >
            <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
              MedAT Übungsfragen
            </span>
            <p className="text-xs text-[var(--muted)] mt-1">BMS + KFF kostenlos testen</p>
          </Link>
          <Link
            to="/medat-kff-ueben"
            className="group bg-[var(--surface)] rounded-xl p-6 border border-[var(--border)] hover:shadow-[var(--shadow-sm)] transition-shadow text-center"
          >
            <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
              KFF Training
            </span>
            <p className="text-xs text-[var(--muted)] mt-1">10.000+ Aufgaben</p>
          </Link>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center p-8 rounded-xl bg-[var(--accent)]/5 border border-[var(--accent)]/20">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">
            Bereit für den MedAT? Jetzt gratis starten
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mb-4 max-w-md mx-auto">
            5.000+ BMS-Fragen, 10.000+ KFF-Übungen, Prüfungssimulation — alles in einer Plattform.
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
