import { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import { GraduationCap, ArrowRight, BookOpen } from "lucide-react";

const NAVY = "#1b3ea7";

type Subject = {
  id: string;
  label: string;
  emoji: string;
  colorHeader: string;
  colorChip: string;
  colorChipText: string;
  colorBorder: string;
  route: string;
  questionCount: string;
  topics: { name: string; keywords: string[] }[];
};

const SUBJECTS: Subject[] = [
  {
    id: "biologie",
    label: "Biologie",
    emoji: "🧬",
    colorHeader: "bg-emerald-600",
    colorChip: "bg-emerald-50 dark:bg-emerald-900/30",
    colorChipText: "text-emerald-700 dark:text-emerald-300",
    colorBorder: "border-emerald-200 dark:border-emerald-800/50",
    route: "/medat-biologie-fragen",
    questionCount: "1.100+",
    topics: [
      {
        name: "Zellbiologie",
        keywords: [
          "Zellmembran & Membrantransport",
          "Organellen (Mitochondrien, Ribosom, ER)",
          "Zellkern & Chromatin",
          "Mitose & Meiose",
          "Apoptose",
          "Osmose & Diffusion",
          "Zytoskelett",
        ],
      },
      {
        name: "Histologie",
        keywords: [
          "Epithelgewebe",
          "Bindegewebe & Knorpel",
          "Knochengewebe",
          "Muskelgewebe",
          "Nervengewebe",
        ],
      },
      {
        name: "Genetik und Molekularbiologie",
        keywords: [
          "DNA-Struktur & Replikation",
          "Transkription & Translation",
          "Mendelsche Regeln",
          "Mutationen & Reparatur",
          "Genregulation",
          "Epigenetik",
          "Stammzellen",
          "Rekombinante DNA",
        ],
      },
      {
        name: "Humanbiologie (Organsysteme)",
        keywords: [
          "Herz-Kreislauf-System",
          "Blut & Blutgruppen",
          "Immunsystem & Antikörper",
          "Atmungssystem",
          "Verdauungssystem",
          "Niere & Harnwege",
          "Hormonsystem",
          "Nervensystem & Synapse",
          "Sinnesorgane",
          "Muskel & Bewegung",
        ],
      },
      {
        name: "Ökologie und Evolution",
        keywords: [
          "Selektion & Adaptation",
          "Artbildung",
          "Populationsgenetik (Hardy-Weinberg)",
          "Ökosysteme & Nahrungsnetze",
          "Stoffkreisläufe",
        ],
      },
      {
        name: "Mikrobiologie",
        keywords: [
          "Bakterien (Bau, Vermehrung)",
          "Viren & Virusreplikation",
          "Antibiotika & Resistenz",
          "Pilze & Protozoen",
        ],
      },
    ],
  },
  {
    id: "chemie",
    label: "Chemie",
    emoji: "⚗️",
    colorHeader: "bg-red-600",
    colorChip: "bg-red-50 dark:bg-red-900/30",
    colorChipText: "text-red-700 dark:text-red-300",
    colorBorder: "border-red-200 dark:border-red-800/50",
    route: "/medat-chemie-fragen",
    questionCount: "1.400+",
    topics: [
      {
        name: "Atombau und PSE",
        keywords: [
          "Bohrsches Atommodell",
          "Quantenzahlen & Orbitale",
          "Elektronenkonfiguration",
          "Periodensystem (Gruppen, Perioden)",
          "Ionisierungsenergie & Elektronegativität",
          "Radioaktivität & Kernreaktionen",
        ],
      },
      {
        name: "Chemische Bindungen",
        keywords: [
          "Ionenbindung",
          "Kovalente Bindung & Lewis-Formeln",
          "Metallbindung",
          "Wasserstoffbrückenbindung",
          "Van-der-Waals-Kräfte",
          "Molekülgeometrie (VSEPR)",
        ],
      },
      {
        name: "Stöchiometrie",
        keywords: [
          "Mol & Avogadro-Konstante",
          "Reaktionsgleichungen balancieren",
          "Molmasse & Molarität",
          "Gasgesetze (Boyle, Gay-Lussac, ideales Gas)",
          "Löslichkeit & Konzentration",
          "Aggregatzustände & Phasendiagramme",
        ],
      },
      {
        name: "Säuren und Basen",
        keywords: [
          "Brønsted-Theorie",
          "pH-Wert & pOH",
          "Starke & schwache Säuren/Basen",
          "Puffersysteme (Blutpuffer)",
          "Titration",
          "Säure-Base-Reaktionen",
        ],
      },
      {
        name: "Organische Chemie",
        keywords: [
          "Alkane, Alkene, Alkine",
          "Funktionelle Gruppen (OH, COOH, NH₂, C=O)",
          "Isomerie (Konstitutions-, Stereo-)",
          "Reaktionstypen (SN1/SN2, Addition, Elimination)",
          "Aromaten & Benzol",
          "Nomenklatur (IUPAC)",
        ],
      },
      {
        name: "Biochemie (Aminosäuren, Enzyme, Stoffwechsel)",
        keywords: [
          "Aminosäuren & Peptidbindung",
          "Proteinstruktur (primär–quartär)",
          "Enzyme & Michaelis-Menten",
          "Kohlenhydrate (Mono-, Di-, Polysaccharide)",
          "Lipide & Membranen",
          "Glykolyse & Citratzyklus",
          "Atmungskette & ATP-Synthese",
          "Nukleotide & Nukleinsäuren",
        ],
      },
    ],
  },
  {
    id: "physik",
    label: "Physik",
    emoji: "⚡",
    colorHeader: "bg-blue-600",
    colorChip: "bg-blue-50 dark:bg-blue-900/30",
    colorChipText: "text-blue-700 dark:text-blue-300",
    colorBorder: "border-blue-200 dark:border-blue-800/50",
    route: "/medat-physik-fragen",
    questionCount: "1.300+",
    topics: [
      {
        name: "Mechanik",
        keywords: [
          "Newtonsche Gesetze",
          "Kräfte, Arbeit, Leistung, Energie",
          "Impuls & Stoß",
          "Kreisbewegung & Rotation",
          "Gravitation",
          "Druck & Auftrieb (Hydrostatik)",
          "Fluidmechanik (Bernoulli)",
          "Schiefe Ebene & Reibung",
        ],
      },
      {
        name: "Thermodynamik",
        keywords: [
          "Temperatur & Wärme",
          "Wärmekapazität & Kalorimetrie",
          "Hauptsätze der Thermodynamik",
          "Wärmeleitung, -strahlung, -konvektion",
          "Aggregatzustandsänderungen",
          "Entropie",
        ],
      },
      {
        name: "Elektrizität und Magnetismus",
        keywords: [
          "Elektrisches Feld & Coulombgesetz",
          "Spannung, Strom, Widerstand (Ohmsches Gesetz)",
          "Kirchhoffsche Regeln",
          "Kondensator & Spule",
          "Magnetisches Feld",
          "Elektromagnetische Induktion",
          "Wechselstrom",
        ],
      },
      {
        name: "Optik",
        keywords: [
          "Reflexion & Brechung",
          "Snelliussches Gesetz",
          "Linsen & Spiegel",
          "Optische Instrumente",
          "Wellenoptik (Interferenz, Beugung)",
          "Lichtgeschwindigkeit",
        ],
      },
      {
        name: "Akustik",
        keywords: [
          "Schallwellen & Schallgeschwindigkeit",
          "Dezibel & Lautstärke",
          "Doppler-Effekt",
          "Resonanz & Stehende Wellen",
          "Ultraschall in der Medizin",
        ],
      },
      {
        name: "Atomphysik",
        keywords: [
          "Photoelektrischer Effekt",
          "Röntgenstrahlung",
          "Radioaktiver Zerfall (α, β, γ)",
          "Halbwertszeit",
          "Kernspaltung & -fusion",
          "Strahlenschutz",
        ],
      },
    ],
  },
  {
    id: "mathematik",
    label: "Mathematik",
    emoji: "📐",
    colorHeader: "bg-violet-600",
    colorChip: "bg-violet-50 dark:bg-violet-900/30",
    colorChipText: "text-violet-700 dark:text-violet-300",
    colorBorder: "border-violet-200 dark:border-violet-800/50",
    route: "/medat-mathematik-fragen",
    questionCount: "490+",
    topics: [
      {
        name: "Algebra und Gleichungen",
        keywords: [
          "Lineare Gleichungen & Ungleichungen",
          "Quadratische Gleichungen (Lösungsformel)",
          "Gleichungssysteme",
          "Potenzen & Wurzeln",
          "Logarithmen",
          "Folgen & Reihen",
        ],
      },
      {
        name: "Bruchrechnung",
        keywords: [
          "Brüche kürzen & erweitern",
          "Addition & Subtraktion von Brüchen",
          "Multiplikation & Division von Brüchen",
          "Gemischte Zahlen",
          "Terme mit Brüchen vereinfachen",
        ],
      },
      {
        name: "Prozentrechnung",
        keywords: [
          "Prozentwert, Grundwert, Prozentsatz",
          "Prozentuale Änderungen",
          "Zinsrechnung",
          "Wachstums- und Abnahmefaktor",
          "Dreisatz",
        ],
      },
      {
        name: "Einheiten und SI-System",
        keywords: [
          "SI-Basiseinheiten (m, kg, s, A, K, mol, cd)",
          "Abgeleitete Einheiten (N, J, W, Pa)",
          "Einheitenumrechnung",
          "Größenordnungen (kilo, mega, milli, mikro)",
          "Dimensionsanalyse",
        ],
      },
      {
        name: "Stochastik",
        keywords: [
          "Grundbegriffe (Ereignis, Wahrscheinlichkeit)",
          "Kombinatorik (Permutation, Kombination)",
          "Bedingte Wahrscheinlichkeit",
          "Binomialverteilung",
          "Erwartungswert & Varianz",
          "Baumdiagramme",
        ],
      },
      {
        name: "Trigonometrie",
        keywords: [
          "Sinus, Kosinus, Tangens",
          "Einheitskreis & Bogenmaß",
          "Trigonometrische Gleichungen",
          "Sinus- & Kosinussatz",
          "Vektoren & Koordinaten",
        ],
      },
    ],
  },
];

export default function StichwortlistePublic() {
  usePageMeta({
    title: "BMS Stichwortliste 2026 — Offizielle MedAT Themen",
    description:
      "Alle 106 offiziellen BMS-Stichworte für den MedAT 2026. Biologie, Chemie, Physik, Mathematik — mit Lernfortschritt und Übungsfragen.",
    canonical: "https://medmaster.at/bms-stichwortliste-2026",
  });

  useEffect(() => {
    const allKeywords = SUBJECTS.flatMap((s) =>
      s.topics.flatMap((t) =>
        t.keywords.map((kw) => ({
          subject: s.label,
          topic: t.name,
          keyword: kw,
        }))
      )
    );

    const itemListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "BMS Stichwortliste MedAT 2026",
      description:
        "Offizielle Stichwortliste für den BMS-Teil des MedAT 2026 — Biologie, Chemie, Physik, Mathematik",
      numberOfItems: allKeywords.length,
      itemListElement: allKeywords.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.keyword,
        description: `${item.subject} — ${item.topic}`,
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(itemListSchema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800/50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center text-white"
              style={{ backgroundColor: NAVY }}
            >
              <GraduationCap className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold text-gray-900 dark:text-gray-100">MedMaster</span>
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

      {/* Hero */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium mb-6"
            style={{ backgroundColor: "#e8ecf7", color: NAVY }}
          >
            <BookOpen className="w-4 h-4" />
            Offiziell — MedAT 2026
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
            BMS Stichwortliste 2026
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Die vollständige offizielle Themenliste für den BMS-Teil des MedAT 2026. Alle 106
            Stichworte aus Biologie, Chemie, Physik und Mathematik — mit über 4.300 Übungsfragen auf
            MedMaster.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {SUBJECTS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 transition-colors shadow-sm"
              >
                <span>{s.emoji}</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Subject sections */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-10">
        {SUBJECTS.map((subject) => (
          <section key={subject.id} id={subject.id}>
            {/* Section header */}
            <div
              className={`${subject.colorHeader} rounded-2xl px-6 py-5 mb-6 flex items-center justify-between`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{subject.emoji}</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white">{subject.label}</h2>
              </div>
              <Link
                to={subject.route}
                className="inline-flex items-center gap-1.5 text-sm font-semibold bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-xl transition-colors"
              >
                Üben <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Topics */}
            <div className="space-y-6">
              {subject.topics.map((topic) => (
                <div
                  key={topic.name}
                  className={`bg-white dark:bg-gray-900 rounded-2xl border ${subject.colorBorder} p-5 sm:p-6`}
                >
                  <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    {topic.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {topic.keywords.map((kw) => (
                      <span
                        key={kw}
                        className={`inline-block px-3 py-1.5 rounded-xl text-sm font-medium ${subject.colorChip} ${subject.colorChipText} border ${subject.colorBorder}`}
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Question count CTA */}
            <div className="mt-4 flex items-center justify-between bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 px-5 py-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  {subject.questionCount} Übungsfragen
                </span>{" "}
                verfügbar
              </span>
              <Link
                to={subject.route}
                className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-xl text-white"
                style={{ backgroundColor: NAVY }}
              >
                Jetzt üben <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        ))}

        {/* Bottom CTA */}
        <div
          className="rounded-2xl p-8 sm:p-12 text-center text-white"
          style={{ background: `linear-gradient(135deg, ${NAVY}, #163286)` }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Alle Stichworte mit 4.300+ Fragen üben
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            MedMaster deckt alle 106 offiziellen BMS-Stichworte ab. KI-adaptives Lernen, Fortschritt
            pro Stichwort und realistische Prüfungssimulationen — komplett kostenlos.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 bg-white font-semibold px-8 py-4 rounded-2xl text-base shadow-sm hover:bg-blue-50 transition-colors"
            style={{ color: NAVY }}
          >
            Kostenlos starten <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Internal links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            to="/medat-guide"
            className="flex items-center gap-3 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
          >
            <span className="text-2xl">📖</span>
            <div>
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 block">
                MedAT 2026 Guide
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Alles zum Testaufbau</span>
            </div>
          </Link>
          <Link
            to="/faq"
            className="flex items-center gap-3 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
          >
            <span className="text-2xl">❓</span>
            <div>
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 block">
                FAQ
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Häufige Fragen zum MedAT
              </span>
            </div>
          </Link>
          <Link
            to="/medat-uebungsfragen"
            className="flex items-center gap-3 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
          >
            <span className="text-2xl">✏️</span>
            <div>
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 block">
                MedAT Übungsfragen
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">BMS + KFF kostenlos</span>
            </div>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-semibold text-gray-500">MedMaster</span>
          </div>
          <div className="flex gap-4 text-xs text-gray-400">
            <Link to="/impressum" className="hover:text-gray-600 transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-gray-600 transition-colors">
              Datenschutz
            </Link>
            <Link to="/agb" className="hover:text-gray-600 transition-colors">
              AGB
            </Link>
          </div>
          <p className="text-xs text-gray-500">© 2026 MedMaster. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
