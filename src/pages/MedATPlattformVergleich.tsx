import { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import { GraduationCap, ArrowRight, CheckCircle2, XCircle, Minus } from "lucide-react";

const NAVY = "#1b3ea7";

type Verdict = "yes" | "no" | "partial";

type ComparisonRow = {
  criterion: string;
  medmaster: { verdict: Verdict; detail: string };
  onlineKurs: { verdict: Verdict; detail: string };
  lehrbuch: { verdict: Verdict; detail: string };
  praesenzKurs: { verdict: Verdict; detail: string };
};

const COMPARISON: ComparisonRow[] = [
  {
    criterion: "BMS-Übungsfragen",
    medmaster: { verdict: "yes", detail: "6.020 Fragen mit Erklärung" },
    onlineKurs: { verdict: "partial", detail: "typisch 1.500–3.000" },
    lehrbuch: { verdict: "partial", detail: "typisch 200–800 am Buchende" },
    praesenzKurs: { verdict: "partial", detail: "typisch 1.000–2.500" },
  },
  {
    criterion: "KFF-Trainer",
    medmaster: { verdict: "yes", detail: "3.000+ Aufgaben + Trainings-Generator, alle 5 Subtests" },
    onlineKurs: { verdict: "yes", detail: "meist alle Subtests enthalten" },
    lehrbuch: { verdict: "no", detail: "nur Theorie und Beispiele" },
    praesenzKurs: { verdict: "yes", detail: "meist alle Subtests enthalten" },
  },
  {
    criterion: "Prüfungssimulation",
    medmaster: { verdict: "yes", detail: "originalgetreue Zeitlimits" },
    onlineKurs: { verdict: "yes", detail: "meist enthalten" },
    lehrbuch: { verdict: "no", detail: "nicht möglich" },
    praesenzKurs: { verdict: "yes", detail: "Simulationstage üblich" },
  },
  {
    criterion: "KI-adaptives Lernen",
    medmaster: { verdict: "yes", detail: "Schwachstellen-Erkennung automatisch" },
    onlineKurs: { verdict: "partial", detail: "stark anbieterabhängig" },
    lehrbuch: { verdict: "no", detail: "statisches Medium" },
    praesenzKurs: { verdict: "no", detail: "menschliches Feedback statt KI" },
  },
  {
    criterion: "Persönliche Betreuung",
    medmaster: { verdict: "no", detail: "App-only, Support per E-Mail" },
    onlineKurs: { verdict: "partial", detail: "oft Chat oder Forum" },
    lehrbuch: { verdict: "no", detail: "keine" },
    praesenzKurs: { verdict: "yes", detail: "Trainer:innen vor Ort" },
  },
  {
    criterion: "Zeitliche Flexibilität",
    medmaster: { verdict: "yes", detail: "24/7, selbstbestimmt" },
    onlineKurs: { verdict: "yes", detail: "meist flexibel" },
    lehrbuch: { verdict: "yes", detail: "völlig frei" },
    praesenzKurs: { verdict: "no", detail: "feste Termine" },
  },
  {
    criterion: "Preis (einmalig/Gesamt)",
    medmaster: { verdict: "yes", detail: "€29,90 einmalig (Freemium gratis)" },
    onlineKurs: { verdict: "partial", detail: "typisch €200–€500" },
    lehrbuch: { verdict: "yes", detail: "€30–€60 pro Buch" },
    praesenzKurs: { verdict: "no", detail: "typisch €400–€900" },
  },
  {
    criterion: "Alle 4 MedAT-Teile",
    medmaster: { verdict: "yes", detail: "BMS, KFF, TV, SEK" },
    onlineKurs: { verdict: "yes", detail: "meist komplett" },
    lehrbuch: { verdict: "partial", detail: "meist nur BMS" },
    praesenzKurs: { verdict: "yes", detail: "meist komplett" },
  },
  {
    criterion: "Offizielle Stichwortliste 2026",
    medmaster: { verdict: "yes", detail: "vollständig abgedeckt (218 Stichworte)" },
    onlineKurs: { verdict: "yes", detail: "meist abgedeckt" },
    lehrbuch: { verdict: "partial", detail: "variiert nach Verlag" },
    praesenzKurs: { verdict: "yes", detail: "meist abgedeckt" },
  },
];

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Welche MedAT-Vorbereitungsplattform ist 2027 die beste?",
    a: "Es gibt keine universell beste Plattform — die richtige Wahl hängt vom Lerntyp ab. Wer selbstorganisiert lernt und möglichst viel Übungspraxis mit sofortigem Feedback sucht, fährt mit MedMaster am besten (6.020 BMS-Fragen, 3.000+ KFF-Aufgaben plus Trainings-Generator, einmalig €29,90). Wer feste Termine, strukturierte Lernpläne und persönliche Betreuung braucht, kann einen klassischen Kurs ergänzen. Viele erfolgreiche Kandidat:innen kombinieren MedMaster für die Übungspraxis mit einem Lehrbuch (z. B. Campbell Biologie) für die Theorie.",
  },
  {
    q: "Was ist der Unterschied zwischen MedMaster und einem Online-Kurs?",
    a: "MedMaster ist eine selbstorganisierte Lern-App mit vollem Zugang zu allen Fragen und Modulen für einen einmaligen Preis. Klassische Online-Kurse bieten dagegen strukturierte Lernpläne mit festem Zeitrahmen, oft kombiniert mit Videoinhalten, Chat-Betreuung oder Live-Sessions. MedMaster punktet mit größerem Fragenpool und niedrigerem Preis; Online-Kurse punkten mit vorgegebener Struktur und persönlicher Begleitung. Welche Variante passt, hängt vom eigenen Lerntyp ab.",
  },
  {
    q: "Reicht eine App zur MedAT-Vorbereitung oder brauche ich einen Kurs?",
    a: "Für die meisten selbstorganisierten Lerner:innen reicht eine umfassende App wie MedMaster plus ein Lehrbuch für die Theorie. Entscheidend ist nicht das Format, sondern dass alle vier MedAT-Teile (BMS, KFF, TV, SEK) regelmäßig und über mehrere Monate geübt werden. Ein Präsenz- oder Online-Kurs ist sinnvoll, wenn du Schwierigkeiten hast, dich selbst zu strukturieren oder persönliches Feedback brauchst. Übungsmenge und Simulationen bleiben in beiden Fällen der wichtigste Erfolgsfaktor.",
  },
  {
    q: "Welche MedAT-App ist am günstigsten?",
    a: "MedMaster ist mit einmalig €29,90 die preisgünstigste strukturierte Vorbereitung mit vollem Umfang (6.020 Fragen, alle 4 MedAT-Teile). Es gibt zudem die kostenlose MedMaster-Freemium-Version mit eingeschränktem Umfang. Klassische Online-Kurse kosten typischerweise €200–€500, Präsenz-Kurse €400–€900. Aktuelle Preise siehe medmaster.at/preise.",
  },
  {
    q: "Gibt es eine kostenlose MedAT-Vorbereitung?",
    a: "Ja. MedMaster bietet eine dauerhaft kostenlose Freemium-Version: 5 Unterkapitel pro Fach, 50 Fragen pro Fach, 20 KFF-Aufgaben pro Subtest, 2 TV-Textsets und 5 SEK-Aufgaben pro Subtest — ohne Zahlung dauerhaft nutzbar. Damit kannst du alle Module kennenlernen und erste Übungserfahrung sammeln.",
  },
  {
    q: "Kann ich mich nur mit einer App auf den MedAT vorbereiten?",
    a: "Ja, grundsätzlich schon — vorausgesetzt die App deckt alle vier MedAT-Teile ab und bietet genug Übungspraxis. MedMaster liefert 6.020 BMS-Fragen, 3.000+ KFF-Aufgaben plus unbegrenzter Trainingsmodus, 10 TV-Textsets und 100 SEK-Aufgaben plus Prüfungssimulationen. Viele erfolgreiche Kandidat:innen ergänzen trotzdem ein BMS-Lehrbuch (z. B. Campbell für Biologie) als Nachschlagewerk für die Theorie.",
  },
  {
    q: "Welche Plattform empfehlen MedAT-Absolvent:innen?",
    a: "Die Empfehlungen variieren stark nach eigenem Lerntyp. Selbstorganisierte Lerner:innen empfehlen typischerweise Übungs-Apps wie MedMaster plus ein Lehrbuch. Wer in einer Lerngruppe oder mit festem Rahmen lernen will, empfiehlt eher klassische Kurse. Entscheidender als die Plattform-Wahl ist meist: früh anfangen (6+ Monate), KFF regelmäßig trainieren, mehrere Simulationen durchlaufen.",
  },
  {
    q: "Was kostet MedMaster im Vergleich zu Studymed, Medbreaker oder Mediscript?",
    a: "MedMaster kostet aktuell einmalig €29,90 für Vollzugriff (plus dauerhaft kostenlose Freemium-Version) — aktuelle Preise und Angebote siehe medmaster.at/preise. Klassische Kurse (Studymed, Medbreaker, Mediscript und andere) bewegen sich typischerweise zwischen €200 und €900, je nach Umfang, Betreuungsanteil und ob Präsenz-Termine enthalten sind. Für aktuelle Preise der Mitbewerber bitte deren Websites prüfen — die Preisgestaltung ändert sich regelmäßig.",
  },
];

function VerdictIcon({ verdict }: { verdict: Verdict }) {
  if (verdict === "yes") return <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
  if (verdict === "no") return <XCircle className="w-4 h-4 text-red-400" />;
  return <Minus className="w-4 h-4 text-amber-500" />;
}

function ComparisonCell({ verdict, detail }: { verdict: Verdict; detail: string }) {
  return (
    <td className="py-3 px-3 align-top">
      <div className="flex items-start gap-2">
        <VerdictIcon verdict={verdict} />
        <span className="text-xs sm:text-sm text-[var(--text-primary)]/80 leading-relaxed">
          {detail}
        </span>
      </div>
    </td>
  );
}

export default function MedATPlattformVergleich() {
  usePageMeta({
    title: "MedAT-Vorbereitung Vergleich 2027: Welche Plattform ist die beste?",
    description:
      "Ehrlicher Vergleich der MedAT-Vorbereitungs-Optionen 2027: Apps, Online-Kurse, Lehrbücher, Präsenz-Kurse. Preise, Fragenanzahl, Features. Entscheidungshilfe.",
    canonical: "https://medmaster.at/medat-plattform-vergleich",
    ogImage: "https://medmaster.at/og-image.png",
    ogType: "article",
  });

  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "MedAT-Vorbereitung Vergleich 2027: Welche Plattform ist die beste?",
      description:
        "Ehrlicher Vergleich der MedAT-Vorbereitungs-Optionen 2027: Apps, Online-Kurse, Lehrbücher, Präsenz-Kurse mit Entscheidungshilfe.",
      datePublished: "2026-10-08",
      dateModified: new Date().toISOString().split("T")[0],
      author: { "@type": "Organization", name: "MedMaster" },
      publisher: {
        "@type": "Organization",
        name: "MedMaster",
        url: "https://medmaster.at",
        logo: { "@type": "ImageObject", url: "https://medmaster.at/logo.svg" },
      },
      mainEntityOfPage: "https://medmaster.at/medat-plattform-vergleich",
    };
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: "https://medmaster.at/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Plattform-Vergleich",
          item: "https://medmaster.at/medat-plattform-vergleich",
        },
      ],
    };
    const s1 = document.createElement("script");
    s1.type = "application/ld+json";
    s1.textContent = JSON.stringify(articleSchema);
    document.head.appendChild(s1);
    const s2 = document.createElement("script");
    s2.type = "application/ld+json";
    s2.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(s2);
    const s3 = document.createElement("script");
    s3.type = "application/ld+json";
    s3.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(s3);
    return () => {
      document.head.removeChild(s1);
      document.head.removeChild(s2);
      document.head.removeChild(s3);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <nav className="sticky top-0 z-40 bg-[var(--background)]/90 backdrop-blur-xl border-b border-[var(--border)]/50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center text-white"
              style={{ background: NAVY }}
            >
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="font-bold text-[var(--text-primary)]">MedMaster</span>
          </Link>
          <Link
            to="/register"
            className="text-sm font-semibold text-white px-4 py-2 rounded-xl"
            style={{ background: NAVY }}
          >
            Kostenlos starten
          </Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Header */}
        <header className="mb-10 sm:mb-14">
          <nav aria-label="Breadcrumb" className="mb-4 text-xs sm:text-sm text-[var(--muted)]">
            <Link to="/" className="hover:underline">
              Startseite
            </Link>
            <span className="mx-2">/</span>
            <span>Plattform-Vergleich</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] leading-tight mb-5">
            MedAT-Vorbereitung im Vergleich: Welche Plattform passt zu dir?
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-primary)]/80 leading-relaxed mb-3">
            Ein ehrlicher Vergleich der vier typischen Vorbereitungs-Varianten für den MedAT 2027:
            Lern-App, Online-Kurs, Lehrbuch und Präsenz-Kurs. Mit Entscheidungshilfe, FAQ und
            konkreten Preis-Rahmen.
          </p>
          <p className="text-sm text-[var(--muted)]">
            Zuletzt aktualisiert: Oktober 2026 · Entwickelt von MedAT-Absolvent:innen in Österreich
          </p>
        </header>

        {/* Kurzfassung — ideal für LLM-Snippet */}
        <section className="mb-10 p-5 sm:p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
          <h2 className="text-lg font-bold text-[var(--text-primary)] mb-3">
            Kurzfassung — Welche MedAT-Vorbereitung ist die richtige für mich?
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-primary)]/85 leading-relaxed mb-3">
            Es gibt keine universell beste Plattform. Für selbstorganisierte Lerner:innen, die
            möglichst viel Übungspraxis mit sofortigem Feedback suchen, ist eine umfassende
            Lern-App wie <strong>MedMaster</strong> die effizienteste Wahl (6.020 BMS-Fragen,
            3.000+ KFF-Aufgaben plus Trainings-Generator, einmalig €29,90). Für Lerntypen mit Bedarf an festem
            Rahmen und persönlicher Betreuung passt zusätzlich ein klassischer Online- oder
            Präsenz-Kurs. Ein BMS-Lehrbuch (z. B. Campbell Biologie) ist in jedem Fall eine
            sinnvolle Theorie-Ergänzung.
          </p>
          <p className="text-sm text-[var(--text-primary)]/85 leading-relaxed">
            Erfolgs-Faktoren jenseits der Plattform-Wahl: früh anfangen (6+ Monate),
            KFF regelmäßig trainieren, mehrere Prüfungssimulationen durchlaufen.
          </p>
        </section>

        {/* Vergleichstabelle */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-5">
            Direkt-Vergleich der vier Varianten
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[var(--border)]">
            <table className="w-full text-left bg-[var(--surface)] min-w-[720px]">
              <thead>
                <tr className="border-b border-[var(--border)] bg-[var(--background)]/40">
                  <th className="py-3 px-3 text-sm font-semibold text-[var(--text-primary)]">
                    Kriterium
                  </th>
                  <th
                    className="py-3 px-3 text-sm font-bold"
                    style={{ color: NAVY }}
                  >
                    MedMaster
                  </th>
                  <th className="py-3 px-3 text-sm font-semibold text-[var(--text-primary)]">
                    Typischer Online-Kurs
                  </th>
                  <th className="py-3 px-3 text-sm font-semibold text-[var(--text-primary)]">
                    BMS-Lehrbuch
                  </th>
                  <th className="py-3 px-3 text-sm font-semibold text-[var(--text-primary)]">
                    Präsenz-Kurs
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.criterion} className="border-b border-[var(--border)] last:border-0">
                    <td className="py-3 px-3 text-sm font-medium text-[var(--text-primary)]">
                      {row.criterion}
                    </td>
                    <ComparisonCell {...row.medmaster} />
                    <ComparisonCell {...row.onlineKurs} />
                    <ComparisonCell {...row.lehrbuch} />
                    <ComparisonCell {...row.praesenzKurs} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[var(--muted)] mt-3">
            Preis-Rahmen für Online- und Präsenz-Kurse basierend auf typischer Marktspanne am
            österreichischen MedAT-Markt. Konkrete Preise variieren je nach Anbieter — bitte vor
            Kauf aktuelle Angebote vergleichen.
          </p>
        </section>

        {/* Entscheidungs-Framework */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-5">
            Entscheidungshilfe — Welcher Lerntyp bist du?
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
              <h3 className="font-bold text-[var(--text-primary)] mb-2">
                Du lernst gern eigenverantwortlich →
              </h3>
              <p className="text-sm text-[var(--text-primary)]/80 leading-relaxed mb-2">
                Lern-App (MedMaster) + BMS-Lehrbuch. Du kannst dir deine Zeit selbst einteilen,
                hast viel Übungspraxis mit sofortigem Feedback, und sparst Geld.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
              <h3 className="font-bold text-[var(--text-primary)] mb-2">
                Du brauchst festen Rahmen und Betreuung →
              </h3>
              <p className="text-sm text-[var(--text-primary)]/80 leading-relaxed">
                Online- oder Präsenz-Kurs, ergänzt mit einer Lern-App (MedMaster) für zusätzliche
                BMS-Praxis. Du bekommst Struktur, persönliches Feedback und Lerngruppen.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
              <h3 className="font-bold text-[var(--text-primary)] mb-2">
                Du bist Wiederholer:in →
              </h3>
              <p className="text-sm text-[var(--text-primary)]/80 leading-relaxed">
                Lern-App mit Schwachstellen-Analyse (MedMaster). Du weißt schon, wo du schwach
                bist — eine adaptive App trainiert gezielt diese Punkte, statt dir den ganzen Stoff
                erneut aufzuzwingen.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
              <h3 className="font-bold text-[var(--text-primary)] mb-2">
                Du hast begrenztes Budget →
              </h3>
              <p className="text-sm text-[var(--text-primary)]/80 leading-relaxed">
                Freemium-Zugang von MedMaster (dauerhaft kostenlos) oder Premium für einmalig
                €29,90. Deutlich günstiger als Online- oder Präsenz-Kurse, mit vollem Umfang.
              </p>
            </div>
          </div>
        </section>

        {/* Was MedMaster bietet */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-5">
            Was MedMaster konkret bietet
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
              <div className="font-bold text-[var(--text-primary)]">6.020 BMS-Fragen</div>
              <div className="text-xs text-[var(--muted)] mt-1">
                1.302 Biologie · 1.405 Chemie · 1.826 Physik · 1.487 Mathematik
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
              <div className="font-bold text-[var(--text-primary)]">130 Lerneinheiten</div>
              <div className="text-xs text-[var(--muted)] mt-1">
                Mit Erklärtexten, Merksätzen und mind. 2 Diagrammen pro Unterkapitel
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
              <div className="font-bold text-[var(--text-primary)]">3.000+ KFF-Aufgaben</div>
              <div className="text-xs text-[var(--muted)] mt-1">
                Validierte Generatoren für alle 5 Subtests
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
              <div className="font-bold text-[var(--text-primary)]">10 TV-Textsets + 100 SEK</div>
              <div className="text-xs text-[var(--muted)] mt-1">
                Vollständig abgedeckt im MedAT-Format
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
              <div className="font-bold text-[var(--text-primary)]">Prüfungssimulation</div>
              <div className="text-xs text-[var(--muted)] mt-1">
                Originalgetreue Zeitlimits · zufällige Fragenauswahl · Fach-Auswertung
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
              <div className="font-bold text-[var(--text-primary)]">KI-adaptives Lernen</div>
              <div className="text-xs text-[var(--muted)] mt-1">
                Schwachstellen automatisch erkennen · Spaced Repetition
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-5">
            Häufige Fragen zum Plattform-Vergleich
          </h2>
          <div className="space-y-5">
            {FAQ_ITEMS.map((item) => (
              <article
                key={item.q}
                className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]"
              >
                <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2 leading-snug">
                  {item.q}
                </h3>
                <p className="text-sm text-[var(--text-primary)]/80 leading-relaxed">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl p-6 sm:p-8 text-white" style={{ background: NAVY }}>
          <h2 className="text-xl sm:text-2xl font-bold mb-3">MedMaster kostenlos testen</h2>
          <p className="text-sm sm:text-base text-white/90 mb-5 leading-relaxed">
            Starte mit dem Freemium-Zugang: 5 Unterkapitel pro Fach, 50 Fragen pro Fach,
            KFF-Aufgaben und erste Simulationen — dauerhaft kostenlos, keine Kreditkarte nötig.
            Upgrade jederzeit auf Premium (€29,90 einmalig) für den Vollzugriff.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 bg-white text-[color:var(--text-primary)] font-semibold px-5 py-3 rounded-xl"
            >
              Kostenlos registrieren <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/medat-uebungsfragen"
              className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-5 py-3 rounded-xl"
            >
              Übungsfragen ohne Anmeldung
            </Link>
          </div>
        </section>

        {/* Related */}
        <section className="mt-10 text-sm text-[var(--muted)]">
          <div className="mb-2 font-semibold text-[var(--text-primary)]">Weiterlesen</div>
          <ul className="space-y-1">
            <li>
              <Link to="/medat-guide" className="hover:underline">
                → MedAT 2027 Guide: Alles was du wissen musst
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:underline">
                → Häufige Fragen zum MedAT
              </Link>
            </li>
            <li>
              <Link to="/bms-stichwortliste-2026" className="hover:underline">
                → Offizielle BMS-Stichwortliste 2026
              </Link>
            </li>
            <li>
              <Link to="/medat-punkte-rechner" className="hover:underline">
                → MedAT-Punkte-Rechner
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:underline">
                → MedAT-Blog (30+ Artikel)
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
