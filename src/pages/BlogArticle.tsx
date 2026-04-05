import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, GraduationCap } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
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

function ShareRow({ slug, title }: { slug: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const url = `https://medmaster.at/blog/${slug}`;
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    trackEvent("blog_share", { slug, method: "copy" });
    setTimeout(() => setCopied(false), 2000);
  };

  const btnClass =
    "inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-[var(--muted)] hover:text-[var(--text-primary)] hover:bg-[var(--card)] border border-[var(--border)] transition-colors";

  return (
    <div className="mt-10 pt-6 border-t border-[var(--border)]">
      <p className="text-sm font-semibold text-[var(--text-secondary)] mb-3">Artikel teilen</p>
      <div className="flex flex-wrap items-center gap-2">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={btnClass}
          onClick={() => trackEvent("blog_share", { slug, method: "whatsapp" })}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785c-1.735 0-3.44-.466-4.931-1.35l-.354-.21-3.666.961.978-3.572-.231-.367A9.712 9.712 0 012.25 12.05c0-5.385 4.383-9.768 9.77-9.768a9.71 9.71 0 016.908 2.864 9.71 9.71 0 012.862 6.904c-.003 5.385-4.386 9.768-9.77 9.768l-.02-.033zm8.326-18.088A11.707 11.707 0 0012.05.285C5.495.285.16 5.62.157 12.174a11.827 11.827 0 001.583 5.93L0 24l6.03-1.582a11.85 11.85 0 005.665 1.442h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413l.263.13z" />
          </svg>
          WhatsApp
        </a>

        {/* Twitter/X */}
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={btnClass}
          onClick={() => trackEvent("blog_share", { slug, method: "twitter" })}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          X
        </a>

        {/* Telegram */}
        <a
          href={`https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className={btnClass}
          onClick={() => trackEvent("blog_share", { slug, method: "telegram" })}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
          </svg>
          Telegram
        </a>

        {/* Copy link */}
        <button onClick={handleCopy} className={btnClass}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
          </svg>
          {copied ? "Kopiert!" : "Link kopieren"}
        </button>
      </div>
    </div>
  );
}

const TOPIC_PRODUCT_LINKS: Record<string, { label: string; to: string; desc: string }[]> = {
  BMS: [
    { label: "BMS-Übungsfragen", to: "/medat-uebungsfragen", desc: "5.000+ Fragen mit Erklärungen" },
    { label: "BMS-Stichwortliste 2026", to: "/bms-stichwortliste-2026", desc: "Alle offiziellen Themen" },
    { label: "MedAT-Punkterechner", to: "/medat-punkte-rechner", desc: "Ergebnis berechnen" },
  ],
  KFF: [
    { label: "KFF-Training starten", to: "/medat-kff-ueben", desc: "Alle 5 Subtests üben" },
    { label: "MedAT Guide", to: "/medat-guide", desc: "Alles über den MedAT" },
    { label: "MedAT-Punkterechner", to: "/medat-punkte-rechner", desc: "Ergebnis berechnen" },
  ],
  TV: [
    { label: "MedAT Guide", to: "/medat-guide", desc: "Aufbau & Strategie" },
    { label: "BMS-Übungsfragen", to: "/medat-uebungsfragen", desc: "Auch BMS trainieren" },
    { label: "MedAT-Punkterechner", to: "/medat-punkte-rechner", desc: "Ergebnis berechnen" },
  ],
  Strategie: [
    { label: "MedAT Guide", to: "/medat-guide", desc: "Der komplette Überblick" },
    { label: "BMS-Übungsfragen", to: "/medat-uebungsfragen", desc: "Direkt üben" },
    { label: "KFF-Training", to: "/medat-kff-ueben", desc: "Kognitive Fähigkeiten trainieren" },
  ],
  Motivation: [
    { label: "MedAT Guide", to: "/medat-guide", desc: "Dein Fahrplan zum MedAT" },
    { label: "MedAT-Countdown", to: "/medat-countdown", desc: "Wie viele Tage noch?" },
    { label: "BMS-Übungsfragen", to: "/medat-uebungsfragen", desc: "Jetzt loslegen" },
  ],
};

function TopicLinks({ topic }: { topic: string }) {
  const links = TOPIC_PRODUCT_LINKS[topic] ?? TOPIC_PRODUCT_LINKS.Strategie;
  return (
    <div className="mt-10 pt-6 border-t border-[var(--border)]">
      <p className="text-sm font-semibold text-[var(--text-secondary)] mb-3">Passend zum Thema</p>
      <div className="grid grid-cols-3 gap-3">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="group flex flex-col gap-1 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)]/40 transition-all"
          >
            <span className="text-sm font-semibold text-[var(--accent)] group-hover:underline">
              {link.label}
            </span>
            <span className="text-xs text-[var(--muted)]">{link.desc}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find((a) => a.slug === slug);

  usePageMeta({
    title: article?.title ?? "Artikel nicht gefunden",
    description: article?.excerpt ?? "",
    canonical: article ? `https://medmaster.at/blog/${article.slug}` : undefined,
    ogType: "article",
    ogImage: "https://medmaster.at/og-image.png",
    ogTitle: article ? `${article.title} | MedMaster` : undefined,
  });

  useEffect(() => {
    if (article) {
      trackEvent("blog_view", { slug: article.slug, topic: article.topic });
    }
  }, [article]);

  // JSON-LD structured data (Article + BreadcrumbList)
  useEffect(() => {
    if (!article) return;
    const articleScript = document.createElement("script");
    articleScript.type = "application/ld+json";
    articleScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.excerpt,
      datePublished: article.publishDate,
      dateModified: article.publishDate,
      image: "https://medmaster.at/og-image.png",
      author: {
        "@type": "Organization",
        name: "MedMaster",
        url: "https://medmaster.at",
      },
      publisher: {
        "@type": "Organization",
        name: "MedMaster",
        url: "https://medmaster.at",
        logo: {
          "@type": "ImageObject",
          url: "https://medmaster.at/logo.svg",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://medmaster.at/blog/${article.slug}`,
      },
      inLanguage: "de",
    });
    document.head.appendChild(articleScript);

    const breadcrumbScript = document.createElement("script");
    breadcrumbScript.type = "application/ld+json";
    breadcrumbScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "MedMaster", item: "https://medmaster.at" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://medmaster.at/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: article.title,
          item: `https://medmaster.at/blog/${article.slug}`,
        },
      ],
    });
    document.head.appendChild(breadcrumbScript);

    return () => {
      document.head.removeChild(articleScript);
      document.head.removeChild(breadcrumbScript);
    };
  }, [article]);

  const relatedArticles = useMemo(() => {
    if (!article) return [];
    const others = blogArticles.filter((a) => a.slug !== article.slug);
    const sameTopic = others.filter((a) => a.topic === article.topic);
    const rest = others.filter((a) => a.topic !== article.topic);
    return [...sameTopic, ...rest].slice(0, 3);
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
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-[var(--muted)]">
          <ol className="flex items-center gap-1">
            <li>
              <Link to="/" className="hover:text-[var(--text-primary)] transition-colors">
                MedMaster
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <Link to="/blog" className="hover:text-[var(--text-primary)] transition-colors">
                Blog
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li className="text-[var(--text-secondary)] truncate max-w-[300px]">{article.title}</li>
          </ol>
        </nav>

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

        {/* Relevant product links based on topic */}
        <TopicLinks topic={article.topic} />

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

        {/* Share buttons */}
        <ShareRow slug={article.slug} title={article.title} />

        {/* Bottom CTA */}
        <div className="mt-10 p-6 sm:p-8 rounded-xl border border-[var(--accent)]/20 bg-[var(--accent)]/5 text-center">
          <h2 className="text-lg font-bold text-[var(--text-primary)] mb-2">
            Teste dein Wissen — 5.000+ BMS-Fragen warten
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mb-4 max-w-md mx-auto">
            Alle 4 MedAT-Bereiche in einer Plattform. Adaptiver Lernplan, 10.000+ KFF-Übungen,
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

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-14">
            <h2 className="text-lg font-bold text-[var(--text-primary)] mb-6">
              Das könnte dich auch interessieren
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  to={`/blog/${related.slug}`}
                  className="group rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition-all hover:border-[var(--accent)]/40 hover:shadow-[var(--shadow-sm)]"
                >
                  <span
                    className={`inline-block text-xs font-medium px-2.5 py-1 rounded-lg mb-3 ${TOPIC_COLORS[related.topic] ?? "bg-gray-100 text-gray-700"}`}
                  >
                    {related.topic}
                  </span>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)] leading-snug mb-2 group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                    {related.title}
                  </h3>
                  <span className="flex items-center gap-1 text-xs text-[var(--muted)]">
                    <Clock className="w-3 h-3" />
                    {related.readingTime} Min
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
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
