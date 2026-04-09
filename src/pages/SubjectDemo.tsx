import { useState, useMemo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import {
  GraduationCap,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  XCircle,
  Mail,
} from "lucide-react";
import { allBmsQuestions } from "@/data/bms/index";
import type { Question } from "@/data/bms/index";

const NAVY = "#1b3ea7";

type SubjectKey = "biologie" | "chemie" | "physik" | "mathematik";

const SUBJECT_META: Record<
  SubjectKey,
  {
    label: string;
    emoji: string;
    color: string;
    badgeBg: string;
    badgeText: string;
    h1: string;
    desc: string;
    metaTitle: string;
    metaDesc: string;
    ogImage: string;
    topics: string[];
    faq: { q: string; a: string }[];
  }
> = {
  biologie: {
    label: "Biologie",
    emoji: "\uD83E\uDDEC",
    color: "bg-emerald-500",
    badgeBg: "bg-emerald-100 dark:bg-emerald-900/40",
    badgeText: "text-emerald-700 dark:text-emerald-400",
    h1: "MedAT Biologie \u00dcbungsfragen",
    desc: "Zellbiologie, Genetik, Humanbiologie, Evolution \u2014 teste dein BMS-Wissen mit echten Pr\u00fcfungsfragen.",
    metaTitle: "MedAT Biologie \u00dcbungsfragen kostenlos | MedMaster",
    metaDesc:
      "1.250+ MedAT Biologie Fragen: Zellbiologie, Genetik, Humanbiologie, Evolution. T\u00e4glich neue Aufgaben \u2014 kostenlos und ohne Anmeldung \u00fcben.",
    ogImage: "/og-biologie.png",
    topics: [
      "Zellbiologie",
      "Genetik",
      "Humanbiologie",
      "Evolution",
      "\u00d6kologie",
      "Mikrobiologie",
    ],
    faq: [
      {
        q: "Wie viele Biologie-Fragen kommen im MedAT?",
        a: "Im BMS-Teil des MedAT kommen 40 Fragen, davon ca. 10 aus Biologie. Themen: Zellbiologie, Genetik, Humanbiologie und Evolution.",
      },
      {
        q: "Welche Biologie-Themen sind am pr\u00fcfungsrelevantesten?",
        a: "Zellbiologie (Membrantransport, Organellen), Genetik (Vererbung, Mitose/Meiose) und Humanbiologie (Organsysteme, Blut) sind die h\u00e4ufigsten Pr\u00fcfungsthemen.",
      },
      {
        q: "Reichen 1.000 \u00dcbungsfragen f\u00fcr die Biologie-Vorbereitung?",
        a: "Ja \u2014 mit 1.250+ Fragen deckst du alle Kapitel mehrfach ab. MedMaster bietet Fragen in 3 Schwierigkeitsstufen mit Erkl\u00e4rungen.",
      },
    ],
  },
  chemie: {
    label: "Chemie",
    emoji: "\u2697\uFE0F",
    color: "bg-red-500",
    badgeBg: "bg-red-100 dark:bg-red-900/40",
    badgeText: "text-red-700 dark:text-red-400",
    h1: "MedAT Chemie \u00dcbungsfragen",
    desc: "Allgemeine Chemie, Organische Chemie, Biochemie \u2014 teste dein BMS-Wissen mit echten Pr\u00fcfungsfragen.",
    metaTitle: "MedAT Chemie \u00dcbungsfragen kostenlos | MedMaster",
    metaDesc:
      "1.300+ MedAT Chemie Fragen: Allgemeine Chemie, Organische Chemie, Biochemie. T\u00e4glich neue Aufgaben \u2014 kostenlos und ohne Anmeldung.",
    ogImage: "/og-chemie.png",
    topics: [
      "Allgemeine Chemie",
      "Organische Chemie",
      "Biochemie",
      "St\u00f6chiometrie",
      "S\u00e4uren & Basen",
      "Redoxreaktionen",
    ],
    faq: [
      {
        q: "Welche Chemie-Themen kommen im MedAT?",
        a: "Allgemeine Chemie (Atombau, PSE, Bindungen), Organische Chemie (funktionelle Gruppen, Reaktionstypen) und Biochemie (Aminos\u00e4uren, Enzyme, Stoffwechsel).",
      },
      {
        q: "Muss ich Rechenbeispiele in Chemie k\u00f6nnen?",
        a: "Ja \u2014 St\u00f6chiometrie, pH-Berechnung und Konzentrationsrechnungen sind pr\u00fcfungsrelevant. MedMaster enth\u00e4lt alle Typen.",
      },
      {
        q: "Wie unterscheidet sich MedAT-Chemie von Schulchemie?",
        a: "MedAT geht \u00fcber Schulniveau hinaus: Biochemie (Aminos\u00e4uren, Enzyme), Thermodynamik und Elektrochemie sind zus\u00e4tzliche Themen.",
      },
    ],
  },
  physik: {
    label: "Physik",
    emoji: "\u26A1",
    color: "bg-blue-500",
    badgeBg: "bg-blue-100 dark:bg-blue-900/40",
    badgeText: "text-blue-700 dark:text-blue-400",
    h1: "MedAT Physik \u00dcbungsfragen",
    desc: "Mechanik, Thermodynamik, Elektrizit\u00e4t, Optik \u2014 teste dein BMS-Wissen mit echten Pr\u00fcfungsfragen.",
    metaTitle: "MedAT Physik \u00dcbungsfragen kostenlos | MedMaster",
    metaDesc:
      "1.350+ MedAT Physik Fragen: Mechanik, Thermodynamik, Elektrizit\u00e4t, Optik, Akustik. T\u00e4glich neue Aufgaben \u2014 kostenlos \u00fcben.",
    ogImage: "/og-physik.png",
    topics: ["Mechanik", "Thermodynamik", "Elektrizit\u00e4t", "Optik", "Akustik", "Atomphysik"],
    faq: [
      {
        q: "Brauche ich einen Taschenrechner f\u00fcr MedAT-Physik?",
        a: "Nein \u2014 im MedAT sind keine Hilfsmittel erlaubt. Alle Rechnungen sind so gestaltet, dass sie im Kopf oder mit einfachem \u00dcberschlag l\u00f6sbar sind.",
      },
      {
        q: "Welche Physik-Formeln muss ich auswendig k\u00f6nnen?",
        a: "Kernformeln: F=ma, E=mc\u00b2, p=mv, W=Fs, P=W/t, Ohm\u2019sches Gesetz, Linsengleichung. MedMaster hat eine integrierte Formelsammlung.",
      },
      {
        q: "Ist MedAT-Physik schwer?",
        a: "Die Fragen testen Konzeptverst\u00e4ndnis, nicht komplexe Rechnungen. Mit gezielter \u00dcbung in allen Teilgebieten ist Physik gut machbar.",
      },
    ],
  },
  mathematik: {
    label: "Mathematik",
    emoji: "\uD83D\uDCCA",
    color: "bg-violet-500",
    badgeBg: "bg-violet-100 dark:bg-violet-900/40",
    badgeText: "text-violet-700 dark:text-violet-400",
    h1: "MedAT Mathematik \u00dcbungsfragen",
    desc: "Algebra, Stochastik, Gleichungen, Einheiten \u2014 teste dein BMS-Wissen mit echten Pr\u00fcfungsfragen.",
    metaTitle: "MedAT Mathematik \u00dcbungsfragen kostenlos | MedMaster",
    metaDesc:
      "1.050+ MedAT Mathematik Fragen: Algebra, Stochastik, Gleichungen, Einheiten. T\u00e4glich neue Aufgaben \u2014 kostenlos und ohne Anmeldung.",
    ogImage: "/og-mathematik.png",
    topics: [
      "Algebra",
      "Stochastik",
      "Gleichungen",
      "Einheiten & SI",
      "Bruchrechnung",
      "Trigonometrie",
    ],
    faq: [
      {
        q: "Wie wichtig ist Mathematik im MedAT?",
        a: "Mathematik hat ca. 6-8 Fragen im BMS. Die Themen sind grundlegend (Prozentrechnung, Wahrscheinlichkeit, Einheiten) \u2014 einfach Punkte zu holen.",
      },
      {
        q: "Welches Niveau hat MedAT-Mathematik?",
        a: "Oberstufen-Niveau: keine Analysis oder Differentialrechnung. Schwerpunkte sind Bruchrechnung, Prozente, Einheiten und Grundlagen der Stochastik.",
      },
      {
        q: "Werden im MedAT Textaufgaben gestellt?",
        a: "Ja \u2014 viele Mathe-Fragen sind als medizinische Textaufgaben formuliert (Dosisberechnung, Verd\u00fcnnungen, Wahrscheinlichkeiten).",
      },
    ],
  },
};

// ── Seeded random ─────────────────────────────────────────────
function seededPick<T>(arr: T[], count: number, seed: number): T[] {
  const shuffled = [...arr];
  let s = seed;
  for (let i = shuffled.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0x7fffffff;
    const j = s % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

// ── Question Card ─────────────────────────────────────────────
function QuestionCard({ q, index }: { q: Question; index: number }) {
  const [revealed, setRevealed] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (optionId: string) => {
    if (revealed) return;
    setSelected(optionId);
    setRevealed(true);
  };

  return (
    <div className="bg-[var(--surface)] rounded-2xl border border-[var(--border)] overflow-hidden">
      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-3 mb-4">
          <span
            className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold text-white"
            style={{ backgroundColor: NAVY }}
          >
            {index + 1}
          </span>
          <p className="text-[var(--text-primary)] font-medium leading-relaxed">{q.text}</p>
        </div>
        <div className="space-y-2">
          {q.options.map((opt) => {
            const isCorrect = opt.id === q.correctOptionId;
            const isSelected = opt.id === selected;
            let style = "border-[var(--border)] hover:border-[var(--border)] cursor-pointer";
            if (revealed) {
              if (isCorrect)
                style =
                  "border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-600";
              else if (isSelected)
                style = "border-red-400 bg-red-50 dark:bg-red-900/20 dark:border-red-600";
              else style = "border-[var(--border)]/50 opacity-60";
            }
            return (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                disabled={revealed}
                className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${style}`}
              >
                <span className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold bg-[var(--background)] text-[var(--text-secondary)]">
                  {opt.id.toUpperCase()}
                </span>
                <span className="text-sm text-[var(--text-primary)]">{opt.text}</span>
                {revealed && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 ml-auto shrink-0" />
                )}
                {revealed && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-red-500 ml-auto shrink-0" />
                )}
              </button>
            );
          })}
        </div>
        {revealed && (
          <div className="mt-4 p-4 rounded-xl bg-[var(--background)]/50 border border-[var(--border)]/50">
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              <span className="font-semibold">Erkl{"\u00e4"}rung: </span>
              {q.explanation}
            </p>
          </div>
        )}
        <button
          onClick={() => {
            setRevealed(!revealed);
            if (revealed) setSelected(null);
          }}
          className="mt-3 flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors"
        >
          {revealed ? (
            <>
              <ChevronUp className="w-4 h-4" /> Einklappen
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" /> Antwort anzeigen
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// ── Lead capture ──────────────────────────────────────────────
function LeadCapture({ subject }: { subject: string }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const trimmed = email.trim().toLowerCase();
    // Store in Supabase leads table (not localStorage — DSGVO)
    const { supabase } = await import("@/lib/supabase");
    if (supabase) {
      await supabase.from("leads").upsert(
        { email: trimmed, source: "subject-demo", created_at: new Date().toISOString() },
        { onConflict: "email" }
      ).then(() => {});
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-800">
        <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
        <p className="text-lg font-semibold text-emerald-800 dark:text-emerald-300">Danke!</p>
        <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-1">
          Registriere dich jetzt f{"\u00fc"}r vollen Zugang zu allen Fragen.
        </p>
        <Link
          to="/login"
          className="inline-flex items-center gap-2 mt-4 text-white font-semibold px-6 py-3 rounded-xl"
          style={{ backgroundColor: NAVY }}
        >
          Kostenlos starten <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[var(--surface)] rounded-2xl p-6 sm:p-8 border border-[var(--border)]">
      <div className="flex items-center gap-3 mb-3">
        <Mail className="w-5 h-5 text-[var(--muted)]" />
        <h3 className="text-lg font-bold text-[var(--text-primary)]">
          T{"\u00e4"}gliche MedAT-Frage per E-Mail
        </h3>
      </div>
      <p className="text-sm text-[var(--text-secondary)] mb-4">
        Jeden Morgen eine {subject}-Frage mit Erkl{"\u00e4"}rung — gratis und jederzeit
        abbestellbar.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="deine@email.at"
          className="flex-1 px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-xl text-white font-semibold text-sm shrink-0"
          style={{ backgroundColor: NAVY }}
        >
          Anmelden
        </button>
      </form>
      <p className="text-xs text-[var(--muted)] mt-2">
        Mit der Anmeldung stimmst du zu, Lerntipps per E-Mail zu erhalten. Abmeldung jederzeit möglich.{" "}
        <a href="/datenschutz" className="text-[var(--accent)] hover:underline">Datenschutzerklärung</a>
      </p>
    </div>
  );
}

// ── FAQ Schema (JSON-LD) — static data only, no user input ───
function FAQSchema({
  faqs,
  subjectLabel,
  subjectKey,
}: {
  faqs: { q: string; a: string }[];
  subjectLabel: string;
  subjectKey: string;
}) {
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://medmaster.at",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "\u00dcbungsfragen",
          item: "https://medmaster.at/medat-uebungsfragen",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: subjectLabel,
          item: `https://medmaster.at/medat-${subjectKey}-fragen`,
        },
      ],
    };

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    const breadcrumbScript = document.createElement("script");
    breadcrumbScript.type = "application/ld+json";
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    return () => {
      document.head.removeChild(faqScript);
      document.head.removeChild(breadcrumbScript);
    };
  }, [faqs, subjectLabel, subjectKey]);

  return null;
}

// ── Main Page ─────────────────────────────────────────────────
export default function SubjectDemo() {
  const { subject } = useParams<{ subject: string }>();
  const subjectKey = (subject || "biologie") as SubjectKey;
  const meta = SUBJECT_META[subjectKey];

  usePageMeta({
    title: meta?.metaTitle ?? "MedAT Übungsfragen",
    description: meta?.metaDesc ?? "MedAT Übungsfragen kostenlos üben auf MedMaster.",
    canonical: `https://medmaster.at/medat-${subjectKey}-fragen`,
    ogImage: meta ? `https://medmaster.at${meta.ogImage}` : undefined,
  });

  // FAQPage + Course JSON-LD for SEO
  useEffect(() => {
    if (!meta) return;
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: meta.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "Course",
        name: `MedAT ${meta.label} Vorbereitung`,
        description: meta.metaDesc,
        provider: { "@type": "Organization", name: "MedMaster", url: "https://medmaster.at" },
        educationalLevel: "Universität",
        inLanguage: "de",
        isAccessibleForFree: true,
        url: `https://medmaster.at/medat-${subjectKey}-fragen`,
      },
    ];
    const scripts = schemas.map((s) => {
      const el = document.createElement("script");
      el.type = "application/ld+json";
      el.textContent = JSON.stringify(s);
      document.head.appendChild(el);
      return el;
    });
    return () => scripts.forEach((el) => document.head.removeChild(el));
  }, [meta, subjectKey]);

  const dailySeed = useMemo(() => {
    const d = new Date();
    return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
  }, []);

  const pool = useMemo(() => allBmsQuestions.filter((q) => q.subject === subjectKey), [subjectKey]);
  const questions = useMemo(() => seededPick(pool, 10, dailySeed), [pool, dailySeed]);

  if (!meta) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Link to="/medat-uebungsfragen" className="text-blue-600 underline">
          Zur{"\u00fc"}ck zu allen {"\u00dc"}bungsfragen
        </Link>
      </div>
    );
  }

  const totalCount = pool.length.toLocaleString("de-AT");

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <FAQSchema faqs={meta.faq} subjectLabel={meta.label} subjectKey={subjectKey} />

      <nav className="sticky top-0 z-40 bg-[var(--surface)]/90 backdrop-blur-xl border-b border-[var(--border)]/50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center text-white"
              style={{ backgroundColor: NAVY }}
            >
              <GraduationCap className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold text-[var(--text-primary)]">MedMaster</span>
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white px-4 py-2 rounded-xl"
            style={{ backgroundColor: NAVY }}
          >
            Gratis testen <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      <header className="bg-[var(--surface)] border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <span
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg ${meta.badgeBg} ${meta.badgeText}`}
            >
              {meta.emoji} {meta.label}
            </span>
            <span className="text-xs text-[var(--muted)]">{totalCount} Fragen</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-4">
            {meta.h1}
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-2">{meta.desc}</p>
          <p className="text-sm text-[var(--muted)]">
            Jeden Tag 10 neue Fragen. {totalCount}+ insgesamt auf MedMaster.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <div className="flex flex-wrap gap-2">
          {meta.topics.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1.5 rounded-lg bg-[var(--background)] text-[var(--text-secondary)]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="space-y-4">
          {questions.slice(0, 5).map((q, i) => (
            <QuestionCard key={q.id} q={q} index={i} />
          ))}
        </div>

        <LeadCapture subject={meta.label} />

        <div className="space-y-4">
          {questions.slice(5).map((q, i) => (
            <QuestionCard key={q.id} q={q} index={i + 5} />
          ))}
        </div>

        <section className="bg-[var(--surface)] rounded-2xl p-6 sm:p-8 border border-[var(--border)]">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-6">
            H{"\u00e4"}ufige Fragen — MedAT {meta.label}
          </h2>
          <div className="space-y-6">
            {meta.faq.map((f, i) => (
              <div key={i}>
                <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">{f.q}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {(Object.entries(SUBJECT_META) as [SubjectKey, (typeof SUBJECT_META)[SubjectKey]][])
            .filter(([key]) => key !== subjectKey)
            .map(([key, m]) => (
              <Link
                key={key}
                to={`/medat-${key}-fragen`}
                className="flex items-center gap-2 p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/30 transition-colors"
              >
                <span className="text-lg">{m.emoji}</span>
                <span className="text-sm font-medium text-[var(--text-secondary)]">{m.label}</span>
              </Link>
            ))}
          <Link
            to="/medat-uebungsfragen"
            className="flex items-center gap-2 p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/30 transition-colors"
          >
            <span className="text-lg">{"\uD83D\uDCDA"}</span>
            <span className="text-sm font-medium text-[var(--text-secondary)]">
              Alle F{"\u00e4"}cher
            </span>
          </Link>
        </div>

        <div className="text-center bg-[var(--surface)] rounded-2xl p-8 sm:p-10 border border-[var(--border)]">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
            Alle {totalCount}+ {meta.label}-Fragen freischalten
          </h2>
          <p className="text-[var(--text-secondary)] mb-6 max-w-md mx-auto">
            {new Date() < new Date("2026-04-01T00:00:00+02:00")
              ? "Registriere dich jetzt — voller Zugang zu allen BMS-Fächern, KFF, Textverständnis und SEK. Gratis bis 31. März."
              : "Registriere dich jetzt — voller Zugang zu allen BMS-Fächern, KFF, Textverständnis und SEK. Einmalig €29,90 — kein Abo."}
          </p>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-2xl text-base shadow-sm"
            style={{ backgroundColor: NAVY }}
          >
            Jetzt gratis starten <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </main>

      <footer className="py-6 bg-[var(--surface)] border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-[var(--muted)]" />
            <span className="text-sm font-semibold text-[var(--muted)]">MedMaster</span>
          </div>
          <div className="flex gap-4 text-xs text-[var(--muted)]">
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
