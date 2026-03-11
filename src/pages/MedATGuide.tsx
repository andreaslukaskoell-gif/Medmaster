import { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import { GraduationCap, ArrowRight } from "lucide-react";

const NAVY = "#1b3ea7";

type ContentBlock = string | { bold: string; rest: string };

const SECTIONS: { id: string; title: string; content: ContentBlock[] }[] = [
  {
    id: "was-ist-medat",
    title: "Was ist der MedAT?",
    content: [
      "Der MedAT (Medizinischer Aufnahmetest) ist seit 2013 der einheitliche Aufnahmetest für das Humanmedizin- und Zahnmedizinstudium an allen öffentlichen Medizin-Universitäten in Österreich: der Medizinischen Universität Wien, der Medizinischen Universität Graz, der Medizinischen Universität Innsbruck und der Johannes Kepler Universität Linz.",
      "Jährlich bewerben sich 12.000 bis 16.000 Personen um rund 1.850 Studienplätze. Die Vergabe erfolgt ausschließlich über das MedAT-Ergebnis — Schulnoten spielen keine Rolle. 75% der Plätze gehen an Bewerber/innen mit österreichischem Reifezeugnis, 20% an EU-Bürger/innen und 5% an Nicht-EU-Bürger/innen.",
    ],
  },
  {
    id: "testaufbau",
    title: "Testaufbau des MedAT 2026",
    content: [
      "Der MedAT dauert einen ganzen Tag und besteht aus 4 Testteilen mit unterschiedlicher Gewichtung:",
      {
        bold: "BMS — Basiskenntnistest für Medizinische Studien (40%):",
        rest: " 94 Multiple-Choice-Fragen aus Biologie (40), Chemie (24), Physik (18) und Mathematik (12). Jede Frage hat 5 Antwortmöglichkeiten (A–E), genau eine ist richtig. Bearbeitungszeit: 75 Minuten. Die Themen basieren auf der offiziellen Stichwortliste.",
      },
      {
        bold: "KFF — Kognitive Fähigkeiten und Fertigkeiten (40%):",
        rest: " 5 Untertests: Figuren zusammensetzen (15 Aufgaben, 20 Min.), Zahlenfolgen (10 Aufgaben, 15 Min.), Wortflüssigkeit (15 Aufgaben, 20 Min.), Implikationen erkennen (10 Aufgaben, 10 Min.) und Gedächtnis & Merkfähigkeit (8 Allergieausweise merken, 25 Fragen beantworten).",
      },
      {
        bold: "TV — Textverständnis (10%):",
        rest: " 12 Aufgaben in 35 Minuten. Wissenschaftliche Texte lesen und Verständnisfragen beantworten. Texte stammen aus Naturwissenschaft und Medizin.",
      },
      {
        bold: "SEK — Sozial-emotionale Kompetenzen (10%):",
        rest: " 3 Untertests: Emotionen erkennen (Gesichtsausdrücke zuordnen), Emotionen regulieren (Bewältigungsstrategien bewerten) und Soziales Entscheiden (ethische Handlungsoptionen ranken).",
      },
    ],
  },
  {
    id: "bms",
    title: "BMS — Der Wissensteil",
    content: [
      "Der BMS ist der umfangreichste Teil des MedAT und macht 40% der Gesamtwertung aus. 94 Fragen verteilen sich auf 4 Fächer:",
      {
        bold: "Biologie (40 Fragen):",
        rest: " Zellbiologie (Organellen, Membrantransport, Zellteilung), Genetik (Mendelsche Regeln, Molekulargenetik, Mutationen), Humanbiologie (Organsysteme, Blut, Immunsystem, Nervensystem) und Evolution (Selektion, Artbildung, Stammesgeschichte).",
      },
      {
        bold: "Chemie (24 Fragen):",
        rest: " Allgemeine Chemie (Atombau, PSE, Bindungen, Stöchiometrie), Organische Chemie (funktionelle Gruppen, Reaktionstypen, Isomerie) und Biochemie (Aminosäuren, Enzyme, Stoffwechsel, DNA/RNA).",
      },
      {
        bold: "Physik (18 Fragen):",
        rest: " Mechanik (Kräfte, Energie, Impuls), Thermodynamik (Wärme, Aggregatzustände), Elektrizität (Strom, Spannung, Widerstand), Optik (Brechung, Linsen, Spiegel) und Akustik (Schallwellen, Dezibel).",
      },
      {
        bold: "Mathematik (12 Fragen):",
        rest: " Algebra (Gleichungen, Ungleichungen), Bruchrechnung, Prozentrechnung, Einheiten und SI-System, Stochastik (Wahrscheinlichkeit, Kombinatorik) und Grundlagen der Trigonometrie.",
      },
      "MedMaster bietet über 4.300 BMS-Fragen mit ausführlichen Erklärungen und deckt alle offiziellen Stichworte der BMS-Stichwortliste ab.",
    ],
  },
  {
    id: "kff",
    title: "KFF — Kognitive Fähigkeiten",
    content: [
      "KFF macht mit 40% gleich viel wie BMS und ist damit ein entscheidender Testteil. Gute Nachricht: Alle 5 Untertests sind trainierbar!",
      {
        bold: "Zahlenfolgen (10 Aufgaben, 15 Min.):",
        rest: " Eine Folge von 7 Zahlen — du ergänzt die 8. und 9. Zahl. Du musst das Muster erkennen (z.B. +3, ×2, Fibonacci-ähnlich).",
      },
      {
        bold: "Wortflüssigkeit (15 Aufgaben, 20 Min.):",
        rest: " Dir werden zufällige Buchstaben gezeigt. Du musst möglichst schnell ein sinnvolles deutsches Wort daraus bilden und den Anfangsbuchstaben angeben. 5 Antwortoptionen.",
      },
      {
        bold: "Implikationen erkennen (10 Aufgaben, 10 Min.):",
        rest: " Zwei Prämissen (z.B. \u201EAlle Ärzte sind Akademiker\u201C und \u201EEinige Akademiker sind Sportler\u201C) \u2014 welche Schlussfolgerung ist logisch zwingend? Nur im MedAT-H.",
      },
      {
        bold: "Figuren zusammensetzen (15 Aufgaben, 20 Min.):",
        rest: " Ein Polygon wird in Teile zerschnitten. Welche der 5 Optionen zeigt die korrekt zusammengesetzten Teile? Trainiert räumliches Vorstellungsvermögen.",
      },
      {
        bold: "Gedächtnis & Merkfähigkeit (8 Ausweise, 25 Fragen):",
        rest: " 8 Allergieausweise mit je 8 Fakten (Name, Geburtsdatum, Blutgruppe, Allergien, Medikamente) in 8 Minuten merken. Nach einer Ablenkphase werden 25 Detailfragen in 15 Minuten gestellt.",
      },
    ],
  },
  {
    id: "tv",
    title: "TV — Textverständnis",
    content: [
      "Im TV-Teil werden wissenschaftliche Texte mit medizinischem oder naturwissenschaftlichem Bezug vorgelegt. Pro Text folgen mehrere MC-Fragen, die das Verständnis prüfen — nicht auswendig gelerntes Wissen.",
      "Tipps: Erst die Fragen überfliegen, dann den Text gezielt lesen. Auf Schlüsselwörter achten. Antworten müssen im Text belegbar sein (nicht aus Vorwissen).",
    ],
  },
  {
    id: "sek",
    title: "SEK — Sozial-emotionale Kompetenzen",
    content: [
      "Der SEK-Teil macht 10% der Gesamtwertung aus und prüft sozial-emotionale Kompetenzen in 3 Untertests.",
      {
        bold: "Emotionen erkennen:",
        rest: " Fotos von Gesichtsausdrücken werden gezeigt. Du ordnest die dargestellte Emotion zu (Freude, Trauer, Angst, Wut, Ekel, Überraschung, Verachtung).",
      },
      {
        bold: "Emotionen regulieren:",
        rest: " Stresssituationen werden beschrieben. Du bewertest verschiedene Bew\u00e4ltigungsstrategien als \u201Egut\u201C, \u201Eeher gut\u201C, \u201Eeher schlecht\u201C oder \u201Eschlecht\u201C.",
      },
      {
        bold: "Soziales Entscheiden:",
        rest: " Ethische Dilemma-Situationen werden beschrieben. Du rankst 5 Handlungsoptionen (A–E) nach ihrer Angemessenheit von 1 (am besten) bis 5 (am schlechtesten).",
      },
    ],
  },
  {
    id: "vorbereitung",
    title: "Vorbereitungsstrategie",
    content: [
      "Eine strukturierte Vorbereitung über 3–6 Monate ist der Schlüssel zum Erfolg:",
      {
        bold: "6 Monate vorher:",
        rest: " BMS-Theorie lernen. Kapitel für Kapitel durcharbeiten. MedMaster bietet 174 Lerneinheiten mit Erklärungen und Diagrammen. Parallel leichte BMS-Fragen üben.",
      },
      {
        bold: "3 Monate vorher:",
        rest: " KFF-Training starten. Zahlenfolgen, Wortflüssigkeit und Implikationen täglich üben. MedMaster generiert unbegrenzt neue Aufgaben. SEK-Strategien lernen.",
      },
      {
        bold: "1 Monat vorher:",
        rest: " Prüfungssimulationen unter Zeitdruck. MedMaster bietet realistische MedAT-Simulationen. Schwachstellen gezielt nacharbeiten mit dem Schwachstellen-Trainer.",
      },
      {
        bold: "Letzte Woche:",
        rest: " Nur noch Wiederholung und leichte Übungen. Kein neuer Stoff. Formeln und Key Facts durchgehen. Ausgeschlafen und entspannt zum Test.",
      },
    ],
  },
  {
    id: "tipps",
    title: "10 Tipps für den MedAT",
    content: [
      {
        bold: "1. Früh anfangen:",
        rest: " 3–6 Monate Vorbereitungszeit einplanen. Lieber jeden Tag 2 Stunden als kurz vor dem Test 10 Stunden am Tag.",
      },
      {
        bold: "2. Stichwortliste abarbeiten:",
        rest: " Jedes offizielle Stichwort der BMS-Liste muss sitzen. MedMaster zeigt den Fortschritt pro Stichwort.",
      },
      {
        bold: "3. KFF täglich trainieren:",
        rest: " 15 Minuten Zahlenfolgen + Implikationen pro Tag bringen mehr als stundenlanges Üben am Wochenende.",
      },
      {
        bold: "4. Prüfungssimulationen machen:",
        rest: " Mindestens 3–5 komplette Simulationen vor dem Testtag. Zeitmanagement üben!",
      },
      {
        bold: "5. Schwächen gezielt angehen:",
        rest: " Das KI-System von MedMaster erkennt deine Schwachstellen automatisch. Nutze den Schwachstellen-Trainer.",
      },
      {
        bold: "6. Spaced Repetition nutzen:",
        rest: " Wiederhole Themen nach wissenschaftlich optimierten Intervallen. MedMaster macht das automatisch.",
      },
      {
        bold: "7. KFF nicht unterschätzen:",
        rest: " Mit 40% Gewichtung ist KFF gleichauf mit BMS der wichtigste Teil. Alle 5 Untertests sind trainierbar!",
      },
      {
        bold: "8. Formeln aktiv üben:",
        rest: " Nicht nur lesen, sondern anwenden. MedMaster hat Rechenaufgaben in allen BMS-Fächern.",
      },
      {
        bold: "9. Lerngruppe bilden:",
        rest: " Gegenseitiges Erklären festigt Wissen. MedMaster-Challenges eignen sich zum gemeinsamen Üben.",
      },
      {
        bold: "10. Auf sich selbst vertrauen:",
        rest: " Mit konsequenter Vorbereitung und MedMaster hast du alles, was du brauchst.",
      },
    ],
  },
];

function ContentParagraph({ block }: { block: ContentBlock }) {
  if (typeof block === "string") {
    return (
      <p className="text-sm sm:text-base text-[var(--text-primary)]/80 leading-relaxed">{block}</p>
    );
  }
  return (
    <p className="text-sm sm:text-base text-[var(--text-primary)]/80 leading-relaxed">
      <strong>{block.bold}</strong>
      {block.rest}
    </p>
  );
}

export default function MedATGuide() {
  usePageMeta({
    title: "MedAT 2026: Alles was du wissen musst",
    description:
      "Kompletter MedAT 2026 Guide: Testaufbau, BMS, KFF, TV, SEK erklärt. Vorbereitungsstrategie, Tipps und kostenlose Übungsfragen. Von MedAT-Absolventen.",
    canonical: "https://medmaster.at/medat-guide",
    ogImage: "https://medmaster.at/og-image.svg",
    ogType: "article",
  });

  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "MedAT 2026: Alles was du wissen musst",
      description: "Kompletter Guide zum MedAT 2026: Testaufbau, Vorbereitung, Tipps.",
      author: { "@type": "Organization", name: "MedMaster" },
      publisher: { "@type": "Organization", name: "MedMaster", url: "https://medmaster.at" },
      mainEntityOfPage: "https://medmaster.at/medat-guide",
    };
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "MedAT Vorbereitung — Schritt für Schritt",
      description: "So bereitest du dich optimal auf den MedAT 2026 vor.",
      step: [
        {
          "@type": "HowToStep",
          name: "BMS-Theorie lernen",
          text: "6 Monate vorher: Alle Kapitel aus Biologie, Chemie, Physik und Mathematik durcharbeiten.",
        },
        {
          "@type": "HowToStep",
          name: "KFF-Training starten",
          text: "3 Monate vorher: Täglich Zahlenfolgen, Wortflüssigkeit und Implikationen üben.",
        },
        {
          "@type": "HowToStep",
          name: "Prüfungssimulationen",
          text: "1 Monat vorher: Realistische MedAT-Simulationen unter Zeitdruck durchführen.",
        },
        {
          "@type": "HowToStep",
          name: "Letzte Wiederholung",
          text: "Letzte Woche: Nur Wiederholung, keine neuen Themen. Ausgeruht zum Test.",
        },
      ],
    };
    const s1 = document.createElement("script");
    s1.type = "application/ld+json";
    s1.textContent = JSON.stringify(articleSchema);
    document.head.appendChild(s1);
    const s2 = document.createElement("script");
    s2.type = "application/ld+json";
    s2.textContent = JSON.stringify(howToSchema);
    document.head.appendChild(s2);
    return () => {
      document.head.removeChild(s1);
      document.head.removeChild(s2);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <nav className="sticky top-0 z-40 bg-[var(--background)]/90 backdrop-blur-xl border-b border-[var(--border)]/50 shadow-sm">
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
            to="/register"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white px-4 py-2 rounded-xl"
            style={{ backgroundColor: NAVY }}
          >
            Gratis testen <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      <header className="bg-[var(--card)] border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium mb-6 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400">
            Aktualisiert für 2026
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-4">
            MedAT 2026: Alles was du wissen musst
          </h1>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Testaufbau, Vorbereitung, Tipps — der komplette Guide von MedAT-Absolventen.
          </p>
        </div>
      </header>

      {/* Table of Contents */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        <div className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-6">
          <h2 className="text-sm font-bold text-[var(--text-primary)] mb-3 uppercase tracking-wide">
            Inhalt
          </h2>
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline py-1"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pb-12 space-y-10">
        {SECTIONS.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-6 sm:p-8"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-5">
              {s.title}
            </h2>
            <div className="space-y-4">
              {s.content.map((block, i) => (
                <ContentParagraph key={i} block={block} />
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <div className="text-center bg-white dark:bg-gray-900 rounded-2xl p-8 sm:p-10 border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
            Bereit für die MedAT-Vorbereitung?
          </h2>
          <p className="text-[var(--muted)] mb-6 max-w-md mx-auto">
            Starte jetzt mit 4.300+ Übungsfragen, KI-adaptivem Lernen und Prüfungssimulationen —
            komplett kostenlos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-2xl text-base shadow-sm"
              style={{ backgroundColor: NAVY }}
            >
              Kostenlos starten <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/medat-uebungsfragen"
              className="inline-flex items-center justify-center gap-2 bg-surface text-[var(--text-primary)]/80 font-semibold px-8 py-4 rounded-2xl text-base"
            >
              Übungsfragen testen
            </Link>
          </div>
        </div>

        {/* Internal links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/faq"
            className="flex items-center gap-3 p-5 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--border)] transition-colors"
          >
            <span className="text-2xl">❓</span>
            <div>
              <span className="text-sm font-semibold text-[var(--text-primary)] block">FAQ</span>
              <span className="text-xs text-[var(--muted)]">Häufige Fragen zum MedAT</span>
            </div>
          </Link>
          <Link
            to="/medat-uebungsfragen"
            className="flex items-center gap-3 p-5 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--border)] transition-colors"
          >
            <span className="text-2xl">✏️</span>
            <div>
              <span className="text-sm font-semibold text-[var(--text-primary)] block">
                Übungsfragen
              </span>
              <span className="text-xs text-[var(--muted)]">BMS + KFF kostenlos testen</span>
            </div>
          </Link>
        </div>
      </main>

      <footer className="py-6 bg-surface border-t border-[var(--border)]">
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
