import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import { GraduationCap, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

const NAVY = "#1b3ea7";

const FAQ_ITEMS: { q: string; a: string; category: string }[] = [
  // Allgemein
  {
    category: "Allgemein",
    q: "Was ist der MedAT?",
    a: "Der MedAT (Medizinischer Aufnahmetest) ist der Aufnahmetest für das Medizinstudium an allen öffentlichen Medizin-Universitäten in Österreich: Wien, Graz, Innsbruck und Linz. Er findet jährlich im Juli statt und besteht aus 4 Testteilen: BMS, KFF, TV und SEK.",
  },
  {
    category: "Allgemein",
    q: "Wann findet der MedAT 2026 statt?",
    a: "Der MedAT 2026 findet voraussichtlich Anfang Juli 2026 statt. Die Anmeldung öffnet typischerweise im März. Genaue Termine werden von den Medizin-Universitäten auf medizinstudieren.at veröffentlicht.",
  },
  {
    category: "Allgemein",
    q: "Wie ist der MedAT aufgebaut?",
    a: "Der MedAT besteht aus 4 Teilen: BMS (Basiskenntnistest, 40% Gewichtung) mit 94 MC-Fragen aus Biologie (40), Chemie (24), Physik (18) und Mathematik (12); KFF (Kognitive Fähigkeiten, 40%) mit Figuren zusammensetzen, Zahlenfolgen, Wortflüssigkeit, Implikationen und Merkfähigkeit; TV (Textverständnis, 10%); und SEK (Sozial-emotionale Kompetenzen, 10%).",
  },
  {
    category: "Allgemein",
    q: "Wie viele Plätze gibt es im Medizinstudium in Österreich?",
    a: "In Österreich stehen jährlich rund 1.850 Studienplätze für Humanmedizin zur Verfügung (Wien ~740, Graz ~360, Innsbruck ~400, Linz ~310). Dem stehen typischerweise 12.000–16.000 Bewerber/innen gegenüber.",
  },
  {
    category: "Allgemein",
    q: "Wer kann am MedAT teilnehmen?",
    a: "Alle Personen mit Hochschulreife (Matura, Abitur oder Äquivalent) können am MedAT teilnehmen. Es gibt keine Altersbeschränkung. Eine Anmeldung ist über medizinstudieren.at erforderlich.",
  },
  // BMS
  {
    category: "BMS",
    q: "Was kommt im BMS-Teil des MedAT?",
    a: "Der BMS umfasst 94 Multiple-Choice-Fragen mit je 5 Antwortmöglichkeiten (A–E): Biologie (40), Chemie (24), Physik (18) und Mathematik (12). Pro Frage ist genau eine Antwort richtig. Bearbeitungszeit: 75 Minuten. Die Themen basieren auf der offiziellen Stichwortliste.",
  },
  {
    category: "BMS",
    q: "Was steht auf der offiziellen Stichwortliste?",
    a: "Die offizielle Stichwortliste umfasst über 230 Themen aus Biologie (Zellbiologie, Genetik, Humanbiologie, Evolution, Ökologie), Chemie (Allgemeine Chemie, Organische Chemie, Biochemie), Physik (Mechanik, Thermodynamik, Elektrizität, Optik) und Mathematik (Algebra, Stochastik, Einheiten). MedMaster deckt alle offiziellen Stichworte ab.",
  },
  {
    category: "BMS",
    q: "Wie viele Fragen hat MedMaster für den BMS-Teil?",
    a: "MedMaster bietet über 5.000 BMS-Fragen: 1.252 Biologie, 1.315 Chemie, 1.377 Physik und 1.077 Mathematik. Jede Frage hat 5 Antwortoptionen, eine ausführliche Erklärung und einen Schwierigkeitsgrad (leicht/mittel/schwer).",
  },
  // KFF
  {
    category: "KFF",
    q: "Was sind die KFF-Untertests?",
    a: "KFF steht für Kognitive Fähigkeiten und Fertigkeiten. Die 5 Untertests sind: Zahlenfolgen (Muster erkennen), Wortflüssigkeit (Buchstaben zu Wörtern), Implikationen erkennen (logisches Schließen), Figuren zusammensetzen (räumliches Denken) und Gedächtnis & Merkfähigkeit (Allergieausweise merken).",
  },
  {
    category: "KFF",
    q: "Kann man KFF trainieren?",
    a: "Ja! KFF-Aufgaben sind trainierbar. MedMaster generiert algorithmisch 10.000+ Übungsaufgaben für Zahlenfolgen, Wortflüssigkeit und Implikationen. Für Figuren und Merkfähigkeit gibt es ebenfalls umfangreiche Übungsmöglichkeiten.",
  },
  // Vorbereitung
  {
    category: "Vorbereitung",
    q: "Wie lange sollte man sich auf den MedAT vorbereiten?",
    a: "Die meisten erfolgreichen Kandidat/innen bereiten sich 3–6 Monate intensiv vor. Empfohlen: BMS-Theorie ab 6 Monaten vorher, KFF-Training ab 3 Monaten, Simulationen ab 1 Monat vor dem Test. MedMaster bietet alle Tools dafür.",
  },
  {
    category: "Vorbereitung",
    q: "Welche Bücher brauche ich neben MedMaster?",
    a: "MedMaster deckt den gesamten BMS-Stoff mit 174 Lerneinheiten ab. Ergänzend empfehlen viele ein Biologie-Lehrbuch (z.B. Campbell) und die offizielle Stichwortliste. Für KFF und SEK reicht MedMaster als alleiniges Tool.",
  },
  {
    category: "Vorbereitung",
    q: "Kann ich mich nur mit MedMaster auf den MedAT vorbereiten?",
    a: "MedMaster bietet eine umfassende Vorbereitung: 5.000+ BMS-Fragen, KFF-Training, Textverständnis, SEK-Übungen und Prüfungssimulationen. Viele Nutzer ergänzen mit einem Lehrbuch für die Theorie, aber die Übungskomponente ist vollständig abgedeckt.",
  },
  // MedMaster
  {
    category: "MedMaster",
    q: "Was kostet MedMaster?",
    a:
      new Date() < new Date("2026-04-01T00:00:00+02:00")
        ? "Bis 31. März 2026 ist MedMaster komplett gratis — voller Zugang zu allen 5.000+ Fragen, allen 4 Testbereichen und allen Features. Ab 1. April kostet der Zugang einmalig €29,90 — kein Abo, keine versteckten Kosten, lebenslanger Zugang."
        : "MedMaster kostet einmalig €29,90 — kein Abo, kein Haken.",
  },
  {
    category: "MedMaster",
    q: "Was ist das KI-adaptive Lernsystem?",
    a: "Das KI-System analysiert deine Antworten in Echtzeit, erkennt Wissenslücken und passt die Frageauswahl automatisch an. Schwache Themen werden häufiger wiederholt (Spaced Repetition), starke Themen seltener. So lernst du effizienter.",
  },
  {
    category: "MedMaster",
    q: "Gibt es eine MedMaster-App?",
    a: "MedMaster ist eine Web-App, die auf allen Geräten im Browser funktioniert (Desktop, Tablet, Smartphone). Du kannst sie als Progressive Web App (PWA) auf deinem Homescreen installieren — ohne App Store.",
  },
  {
    category: "MedMaster",
    q: "Wie realistisch sind die Prüfungssimulationen?",
    a: "Die MedMaster-Simulationen bilden den echten MedAT ab: BMS-Fragen aus allen Fachgebieten unter Zeitdruck, zufällige Fragenauswahl aus dem gesamten Pool, detaillierte Auswertung nach Fach und Schwierigkeitsgrad. Ideal für die letzten Wochen vor dem Test.",
  },
  {
    category: "MedMaster",
    q: "Wie unterscheidet sich MedMaster von anderen MedAT-Kursen?",
    a: "MedMaster bietet mehr Übungsfragen (5.000+) als die meisten kostenpflichtigen Anbieter. Dazu: KI-adaptives Lernen, algorithmisch generierte KFF-Aufgaben (10.000+), Prüfungstag-Prognose und alle 4 MedAT-Testbereiche in einer App — für eine einmalige Zahlung statt monatlichem Abo.",
  },
];

const CATEGORIES = [...new Set(FAQ_ITEMS.map((f) => f.category))];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[var(--border)] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
      >
        <h3 className="text-base font-semibold text-[var(--text-primary)] leading-relaxed">{q}</h3>
        {open ? (
          <ChevronUp className="w-5 h-5 text-[var(--muted)] shrink-0 mt-0.5" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[var(--muted)] shrink-0 mt-0.5" />
        )}
      </button>
      {open && <p className="text-sm text-[var(--muted)] leading-relaxed pb-5 -mt-1">{a}</p>}
    </div>
  );
}

export default function FAQPage() {
  usePageMeta({
    title: "FAQ — Häufige Fragen zum MedAT 2026",
    description:
      "Antworten auf die häufigsten Fragen zum MedAT 2026: Testaufbau, BMS, KFF, Vorbereitung, Anmeldung und MedMaster. Alles was du wissen musst.",
    canonical: "https://medmaster.at/faq",
    ogImage: "https://medmaster.at/og-image.png",
  });

  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
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
            to="/login"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white px-4 py-2 rounded-xl"
            style={{ backgroundColor: NAVY }}
          >
            Gratis testen <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      <header className="bg-[var(--card)] border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 text-center hero-orbs">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-4">
            Häufige Fragen zum MedAT 2026
          </h1>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Alles was du über den MedAT, die Vorbereitung und MedMaster wissen musst.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        {CATEGORIES.map((cat) => (
          <section key={cat}>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">{cat}</h2>
            <div className="bg-[var(--card)] rounded-2xl border border-[var(--border)] px-6">
              {FAQ_ITEMS.filter((f) => f.category === cat).map((f) => (
                <FAQItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </section>
        ))}

        {/* Internal links */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/medat-guide"
            className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--border)] transition-colors text-center"
          >
            <span className="text-2xl">📖</span>
            <span className="text-sm font-semibold text-[var(--text-primary)]">
              MedAT 2026 Guide
            </span>
            <span className="text-xs text-[var(--muted)]">Kompletter Überblick</span>
          </Link>
          <Link
            to="/medat-uebungsfragen"
            className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--border)] transition-colors text-center"
          >
            <span className="text-2xl">✏️</span>
            <span className="text-sm font-semibold text-[var(--text-primary)]">
              Übungsfragen testen
            </span>
            <span className="text-xs text-[var(--muted)]">BMS + KFF kostenlos</span>
          </Link>
          <Link
            to="/login"
            className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--border)] transition-colors text-center"
          >
            <span className="text-2xl">🚀</span>
            <span className="text-sm font-semibold text-[var(--text-primary)]">
              Kostenlos starten
            </span>
            <span className="text-xs text-[var(--muted)]">5.000+ Fragen</span>
          </Link>
          <Link
            to="/lp/medat"
            className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--border)] transition-colors text-center"
          >
            <span className="text-2xl">🎯</span>
            <span className="text-sm font-semibold text-[var(--text-primary)]">
              MedAT Vorbereitung starten
            </span>
            <span className="text-xs text-[var(--muted)]">Kostenlos testen</span>
          </Link>
        </section>
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
