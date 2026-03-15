import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, GraduationCap } from "lucide-react";
import { useEffect } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { trackEvent } from "@/lib/analyticsTracker";
import { blogArticles } from "@/data/blogArticles";

const NAVY = "#1b3ea7";

const TOPIC_COLORS: Record<string, string> = {
  BMS: "bg-emerald-100 text-emerald-700",
  KFF: "bg-blue-100 text-blue-700",
  TV: "bg-amber-100 text-amber-700",
  Strategie: "bg-purple-100 text-purple-700",
  Motivation: "bg-rose-100 text-rose-700",
};

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find((a) => a.slug === slug);

  usePageMeta({
    title: article?.title ?? "Artikel nicht gefunden",
    description: article?.excerpt ?? "",
    canonical: article ? `https://medmaster.at/blog/${article.slug}` : undefined,
    ogType: "article",
  });

  useEffect(() => {
    if (article) {
      trackEvent("blog_view", { slug: article.slug, topic: article.topic });
    }
  }, [article]);

  // JSON-LD structured data
  useEffect(() => {
    if (!article) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.excerpt,
      datePublished: article.publishDate,
      author: {
        "@type": "Organization",
        name: "MedMaster",
        url: "https://medmaster.at",
      },
      publisher: {
        "@type": "Organization",
        name: "MedMaster",
        url: "https://medmaster.at",
      },
      mainEntityOfPage: `https://medmaster.at/blog/${article.slug}`,
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [article]);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

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
              to="/blog"
              className="text-sm font-medium text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors px-3 py-2 rounded-xl hover:bg-[var(--card)]"
            >
              Alle Artikel
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

      {/* Article */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 pb-16">
        {/* Back link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Alle Artikel
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-lg ${TOPIC_COLORS[article.topic] ?? "bg-gray-100 text-gray-700"}`}
          >
            {article.topic}
          </span>
          <span className="flex items-center gap-1 text-xs text-[var(--muted)]">
            <Clock className="w-3 h-3" />
            {article.readingTime} Min Lesezeit
          </span>
          <span className="text-xs text-[var(--muted)]">
            {new Date(article.publishDate).toLocaleDateString("de-AT", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight mb-8">
          {article.title}
        </h1>

        {/* Content */}
        <div className="prose-medmaster">{article.content}</div>

        {/* Author */}
        <div className="mt-10 pt-6 border-t border-[var(--border)] flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-[var(--accent)]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--text-primary)]">MedMaster Redaktion</p>
            <p className="text-xs text-[var(--muted)]">
              Expertenwissen für deine MedAT-Vorbereitung
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 p-6 sm:p-8 rounded-xl border border-[var(--accent)]/20 bg-[var(--accent)]/5 text-center">
          <h2 className="text-lg font-bold text-[var(--text-primary)] mb-2">
            Teste dein Wissen — 4.300+ BMS-Fragen warten
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mb-4 max-w-md mx-auto">
            Alle 4 MedAT-Bereiche in einer Plattform. Adaptiver Lernplan, unbegrenzte KFF-Übungen,
            Prüfungssimulation.
          </p>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-xl transition-colors hover:opacity-90"
            style={{ backgroundColor: NAVY }}
          >
            Jetzt gratis starten
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
            <Link to="/blog" className="hover:text-white/80 transition-colors">
              Lerntipps
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
