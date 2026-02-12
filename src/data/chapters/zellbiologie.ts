import type { Chapter } from "./types";

export const zellbiologieChapter: Chapter = {
  id: "zellbiologie",
  subject: "biologie",
  title: "Zellbiologie",
  subtitle: "Die menschliche Zelle — Aufbau, Organellen & Transport",
  icon: "🔬",
  chapterNumber: "Kapitel 1/3",
  readingTime: "~45 Minuten",
  level: "Grundlage",
  frequency: "Häufig geprüft",

  overview:
    "Die Zellbiologie ist eines der am häufigsten geprüften Themen im MedAT-BMS. Dieses Kapitel behandelt den grundlegenden Aufbau pro- und eukaryotischer Zellen, die Funktionen aller wichtigen Organellen, Membranstruktur und Transportmechanismen sowie die beiden Formen der Zellteilung — Mitose und Meiose. Ein solides Verständnis dieser Grundlagen ist nicht nur für den MedAT, sondern für das gesamte Medizinstudium unverzichtbar.",

  learningObjectives: [
    "Den Unterschied zwischen Prokaryoten und Eukaryoten erklären",
    "Tier- und Pflanzenzelle vergleichen können",
    "Alle Zellorganellen und ihre Funktionen benennen",
    "Membrantransport-Mechanismen unterscheiden (passiv vs. aktiv)",
    "Den Zellzyklus mit Interphase und Mitose-Phasen erklären",
    "Mitose und Meiose vergleichen und deren Bedeutung verstehen",
  ],

  sections: [
    // ──────────────────────────────────────────────
    // SECTION 1 — Prokaryoten vs. Eukaryoten
    // ──────────────────────────────────────────────
    {
      heading: "Prokaryoten vs. Eukaryoten",
      content:
        "Alle lebenden Organismen lassen sich in zwei fundamentale Zelltypen einteilen: <strong>Prokaryoten</strong> und <strong>Eukaryoten</strong>. Der entscheidende Unterschied liegt im Vorhandensein eines membranumhüllten Zellkerns.\n\n" +
        "<strong>Prokaryoten</strong> (griech. <em>pro</em> = vor, <em>karyon</em> = Kern) besitzen <strong>keinen membranumhüllten Zellkern</strong>. Ihre DNA liegt als ringförmiges Chromosom frei im Zytoplasma in einem Bereich, der als <strong>Nukleoid</strong> bezeichnet wird. Zusätzlich können sie kleine, ringförmige DNA-Moleküle — sogenannte <strong>Plasmide</strong> — tragen, die oft Resistenzgene enthalten. Prokaryoten haben <strong>70S-Ribosomen</strong> (bestehend aus 50S- und 30S-Untereinheiten) und besitzen <strong>keine membranumhüllten Organellen</strong> wie Mitochondrien, ER oder Golgi-Apparat. Ihre Zellgröße liegt typischerweise bei <strong>0,1–10 µm</strong>. Zu den Prokaryoten zählen Bakterien und Archaeen.\n\n" +
        "<strong>Eukaryoten</strong> (griech. <em>eu</em> = echt, <em>karyon</em> = Kern) besitzen einen <strong>echten, membranumhüllten Zellkern</strong>, in dem die DNA als lineare Chromosomen organisiert und mit Histonproteinen assoziiert ist. Sie verfügen über <strong>80S-Ribosomen</strong> (60S + 40S) im Zytoplasma und ein komplexes System von <strong>Membranorganellen</strong> (ER, Golgi, Mitochondrien, Lysosomen etc.). Eukaryotische Zellen sind mit <strong>10–100 µm</strong> deutlich größer als Prokaryoten. Zu ihnen gehören Tiere, Pflanzen, Pilze und Protisten.\n\n" +
        "<strong>Endosymbiontentheorie (Lynn Margulis, 1967):</strong> Mitochondrien und Chloroplasten stammen von ehemals freilebenden Prokaryoten ab, die von einer Ur-Eukaryotenzelle durch Phagozytose aufgenommen wurden und in eine stabile Symbiose eintraten. Belege dafür sind: eigene <strong>ringförmige DNA</strong>, <strong>Doppelmembran</strong>, <strong>70S-Ribosomen</strong> und eigenständige <strong>Teilung durch Zweiteilung</strong>.",

      vergleichsTabelle: {
        headers: ["Merkmal", "Prokaryoten", "Eukaryoten"],
        rows: [
          ["Zellkern", "Kein membranumhüllter Kern (Nukleoid)", "Echter Zellkern mit Doppelmembran"],
          ["DNA-Form", "Ringförmig, frei im Zytoplasma", "Linear, mit Histonen assoziiert"],
          ["Ribosomen", "70S (50S + 30S)", "80S (60S + 40S)"],
          ["Membranorganellen", "Keine", "Vorhanden (ER, Golgi, Mitochondrien etc.)"],
          ["Größe", "0,1–10 µm", "10–100 µm"],
          ["Vermehrung", "Binäre Fission (Zweiteilung)", "Mitose / Meiose"],
        ],
      },

      diagram: "plant-vs-animal-cell",

      merke:
        "Prokaryoten = Pro (vor) + Karyon (Kern) → VOR dem Kern = KEIN Kern. Endosymbiontentheorie: Mitochondrien und Chloroplasten waren einst eigenständige Prokaryoten!",
    },

    // ──────────────────────────────────────────────
    // SECTION 2 — Pflanzenzelle vs. Tierzelle
    // ──────────────────────────────────────────────
    {
      heading: "Pflanzenzelle vs. Tierzelle",
      content:
        "Sowohl Pflanzen- als auch Tierzellen sind eukaryotisch, unterscheiden sich jedoch in mehreren wichtigen Strukturen.\n\n" +
        "<strong>Zellwand:</strong> Pflanzenzellen besitzen eine stabile <strong>Zellwand aus Cellulose</strong>, die der Zelle Form und mechanischen Schutz verleiht. Tierzellen haben keine Zellwand — ihre äußere Begrenzung ist allein die Zellmembran, was ihnen größere Flexibilität ermöglicht.\n\n" +
        "<strong>Chloroplasten:</strong> Pflanzenzellen enthalten <strong>Chloroplasten</strong> für die Fotosynthese (Umwandlung von Lichtenergie in chemische Energie). Tierzellen besitzen keine Chloroplasten und sind auf die Aufnahme organischer Nährstoffe angewiesen (heterotroph).\n\n" +
        "<strong>Vakuole:</strong> Pflanzenzellen haben eine große <strong>Zentralvakuole</strong>, die bis zu 90 % des Zellvolumens einnehmen kann. Sie dient der Speicherung von Wasser, Ionen und Stoffwechselprodukten sowie der Aufrechterhaltung des <strong>Turgordrucks</strong>. Tierzellen besitzen allenfalls kleinere Vakuolen.\n\n" +
        "<strong>Zentriolen:</strong> Tierzellen besitzen <strong>Zentriolen</strong> (Zentrosom), die bei der Ausbildung des Spindelapparats während der Zellteilung eine Rolle spielen. Höhere Pflanzenzellen haben in der Regel keine Zentriolen.\n\n" +
        "<strong>Zellverbindungen:</strong> Pflanzenzellen kommunizieren über <strong>Plasmodesmen</strong> (Zytoplasmakanäle durch die Zellwand). Tierzellen nutzen <strong>Gap Junctions</strong>, <strong>Desmosomen</strong> und <strong>Tight Junctions</strong>.\n\n" +
        "<strong>Speicherstoffe:</strong> Pflanzen speichern Energie primär als <strong>Stärke</strong>, Tiere als <strong>Glykogen</strong>.\n\n" +
        "<strong>Lysosomen:</strong> Typische Lysosomen kommen in der klassischen Form vor allem in <strong>Tierzellen</strong> vor. In Pflanzenzellen übernimmt die Vakuole teilweise lysosomale Funktionen.",

      vergleichsTabelle: {
        headers: ["Merkmal", "Tierzelle", "Pflanzenzelle"],
        rows: [
          ["Zellwand", "Keine", "Vorhanden (Cellulose)"],
          ["Chloroplasten", "Keine", "Vorhanden (Fotosynthese)"],
          ["Vakuole", "Klein oder fehlend", "Große Zentralvakuole"],
          ["Zentriolen", "Vorhanden", "Fehlen (bei höheren Pflanzen)"],
          ["Lysosomen", "Vorhanden", "Fehlen (Vakuole übernimmt Funktion)"],
          ["Speicherkohlenhydrat", "Glykogen", "Stärke"],
          ["Zellverbindungen", "Gap Junctions, Desmosomen", "Plasmodesmen"],
          ["Zellform", "Variabel (rund, flach etc.)", "Meist rechteckig/starr"],
        ],
      },

      diagram: "plant-vs-animal-cell",

      merke:
        "Nur Pflanzenzellen haben: Zellwand (Cellulose), Chloroplasten, große Zentralvakuole. Nur Tierzellen: Zentriolen, Lysosomen (in typischer Form).",
    },

    // ──────────────────────────────────────────────
    // SECTION 3 — Organellen mit Doppelmembran
    // ──────────────────────────────────────────────
    {
      heading: "Organellen mit Doppelmembran",
      content:
        "Drei Organellen besitzen eine charakteristische <strong>Doppelmembran</strong> — eine äußere und eine innere Membran mit einem Intermembranraum dazwischen. Diese Organellen spielen zentrale Rollen im Zellstoffwechsel.\n\n" +
        "<strong>1. Zellkern (Nucleus):</strong>\n" +
        "Der Zellkern ist das Steuerzentrum der Zelle und von einer <strong>Doppelmembran (Kernhülle)</strong> umgeben, die von <strong>Kernporen</strong> durchsetzt ist. Diese Kernporen regulieren den Stofftransport zwischen Kern und Zytoplasma (z. B. mRNA-Export, Protein-Import). Im Inneren befindet sich das <strong>Chromatin</strong> — DNA assoziiert mit Histonproteinen. Während der Zellteilung kondensiert Chromatin zu sichtbaren <strong>Chromosomen</strong>. Der <strong>Nukleolus</strong> (Kernkörperchen) ist der Ort der <strong>rRNA-Synthese</strong> und des Zusammenbaus ribosomaler Untereinheiten. Die äußere Kernmembran geht direkt in das <strong>Endoplasmatische Retikulum</strong> über.\n\n" +
        "<strong>2. Mitochondrien:</strong>\n" +
        "Mitochondrien sind die „Kraftwerke der Zelle“ und der Hauptort der <strong>ATP-Produktion</strong> durch <strong>oxidative Phosphorylierung</strong>. Die <strong>äußere Membran</strong> ist glatt und permeabel für kleine Moleküle (Porine). Die <strong>innere Membran</strong> ist stark gefaltet (<strong>Cristae</strong>) und enthält die Enzyme der <strong>Atmungskette</strong> und die <strong>ATP-Synthase</strong>. Die Einfaltungen vergrößern die Oberfläche erheblich. Die <strong>Matrix</strong> enthält Enzyme des <strong>Citratzyklus</strong> und der <strong>β-Oxidation</strong>. Mitochondrien besitzen <strong>eigene ringförmige DNA</strong> (mtDNA, ca. 16.500 bp beim Menschen), <strong>70S-Ribosomen</strong> und vermehren sich durch <strong>Zweiteilung</strong> — alles Belege für die Endosymbiontentheorie. Die mtDNA codiert für 13 Proteine der Atmungskette, 22 tRNAs und 2 rRNAs.\n\n" +
        "<strong>3. Chloroplasten (nur Pflanzenzellen):</strong>\n" +
        "Chloroplasten sind der Ort der <strong>Fotosynthese</strong>. Sie besitzen ebenfalls eine Doppelmembran. Im Inneren befinden sich <strong>Thylakoide</strong> — flache Membranscheiben, die zu <strong>Grana</strong> (Stapel) angeordnet sind. In den Thylakoidmembranen finden die <strong>Lichtreaktionen</strong> statt (Fotosysteme I und II, Elektronentransportkette). Das <strong>Stroma</strong> (Grundsubstanz) enthält die Enzyme des <strong>Calvin-Zyklus</strong> (Dunkelreaktion/lichtunabhängige Reaktion). Auch Chloroplasten besitzen <strong>eigene ringförmige DNA</strong> und <strong>70S-Ribosomen</strong>.",

      altfrage:
        "\"Welche Organellen besitzen eine Doppelmembran UND eigene DNA?\" → Zellkern, Mitochondrien, Chloroplasten. Alle drei! <strong>NICHT</strong> das ER oder der Golgi-Apparat!",

      klinik:
        "Mitochondriale Erkrankungen werden <strong>maternal vererbt</strong>, da Mitochondrien aus der Eizelle stammen. Beispiel: <strong>MELAS-Syndrom</strong> (Myopathie, Enzephalopathie, Laktatazidose, Schlaganfall-ähnliche Episoden).",

      merke:
        "Doppelmembran + eigene DNA: Zellkern, Mitochondrien, Chloroplasten. Merke: <strong>ZMC</strong> — wie \"Zu Mir Kommen\" die Prokaryoten (Endosymbiontentheorie).",
    },

    // ──────────────────────────────────────────────
    // SECTION 4 — Organellen mit einfacher Membran
    // ──────────────────────────────────────────────
    {
      heading: "Organellen mit einfacher Membran",
      content:
        "Mehrere wichtige Organellen sind von einer <strong>einfachen (Einzel-)Membran</strong> umgeben. Sie bilden zusammen das <strong>Endomembransystem</strong> der eukaryotischen Zelle.\n\n" +
        "<strong>1. Raues Endoplasmatisches Retikulum (rER):</strong>\n" +
        "Das raue ER ist mit <strong>Ribosomen</strong> besetzt (daher „rau“) und ist der zentrale Ort der <strong>Proteinsynthese</strong> für sekretorische Proteine, Membranproteine und lysosomale Enzyme. Proteine werden co-translational in das ER-Lumen transloziert, wo sie gefaltet und erste <strong>posttranslationale Modifikationen</strong> erfahren (z. B. N-Glykosylierung, Disulfidbrücken-Bildung). Das rER ist besonders stark ausgeprägt in sekretorisch aktiven Zellen (z. B. Plasmazellen, Pankreaszellen).\n\n" +
        "<strong>2. Glattes Endoplasmatisches Retikulum (sER):</strong>\n" +
        "Das glatte ER trägt <strong>keine Ribosomen</strong> und ist spezialisiert auf: <strong>Lipidsynthese</strong> (Phospholipide, Steroide), <strong>Entgiftung</strong> (Cytochrom-P450-Enzyme in Hepatozyten), <strong>Calciumspeicherung</strong> (als sarkoplasmatisches Retikulum in Muskelzellen: Ca²⁺-Freisetzung löst Muskelkontraktion aus) und <strong>Glykogenabbau</strong>.\n\n" +
        "<strong>3. Golgi-Apparat:</strong>\n" +
        "Der Golgi-Apparat besteht aus gestapelten, flachen Membranscheiben (<strong>Zisternen</strong>) mit einer <strong>cis-Seite</strong> (dem ER zugewandt, empfängt Vesikel) und einer <strong>trans-Seite</strong> (der Zellmembran zugewandt, sendet Vesikel ab). Funktionen: <strong>Modifikation</strong> von Proteinen (O-Glykosylierung, Phosphorylierung, Sulfatierung, proteolytische Spaltung), <strong>Sortierung</strong> und <strong>Verpackung</strong> in Transportvesikel, Bildung von <strong>Lysosomen</strong> (über Mannose-6-Phosphat-Markierung). Der Golgi ist auch der Ort der Synthese von <strong>Glykosaminoglykanen</strong> und <strong>Sphingolipiden</strong>.\n\n" +
        "<strong>4. Lysosomen:</strong>\n" +
        "Lysosomen sind membranumhüllte Vesikel mit einem sauren Milieu (<strong>pH 4,5–5,0</strong>, aufrechterhalten durch eine H⁺-ATPase). Sie enthalten über 50 verschiedene <strong>hydrolytische Enzyme</strong> (saure Hydrolasen: Proteasen, Lipasen, Nukleasen, Glykosidasen), die Makromoleküle abbauen. Funktionen: <strong>Heterophagie</strong> (Abbau aufgenommener Stoffe), <strong>Autophagie</strong> (Abbau eigener, geschädigter Organellen) und <strong>Autolyse</strong> (programmierter Abbau ganzer Zellen). Die lysosomale Membran ist durch stark glykosylierte Proteine vor Selbstverdauung geschützt.\n\n" +
        "<strong>5. Peroxisomen:</strong>\n" +
        "Peroxisomen enthalten Oxidasen, die <strong>H₂O₂</strong> (Wasserstoffperoxid) als Nebenprodukt erzeugen, sowie <strong>Katalase</strong>, die H₂O₂ zu H₂O und O₂ abbaut (2 H₂O₂ → 2 H₂O + O₂). Weitere Funktionen: <strong>β-Oxidation sehr langkettiger Fettsäuren</strong> (>C22), Abbau von Harnsäure, Beteiligung an der <strong>Plasmalogensynthese</strong> (wichtig für Myelinscheiden). Peroxisomen entstehen durch Teilung vorhandener Peroxisomen oder de novo aus dem ER.",

      diagram: "animal-cell",

      merke:
        "Proteinweg: Raues ER → Golgi (cis→trans) → Vesikel → Zielort. Merke: <strong>R.E.G.V.Z.</strong> — \"Renn, Emil, Gib Vitamine Zurück!\"",

      klinik:
        "Lysosomale Speicherkrankheiten: Bei <strong>Morbus Gaucher</strong> fehlt die Glucocerebrosidase, bei <strong>Tay-Sachs</strong> die Hexosaminidase A — nicht abgebaute Stoffe akkumulieren in den Zellen.",
    },

    // ──────────────────────────────────────────────
    // SECTION 5 — Organellen ohne Membran
    // ──────────────────────────────────────────────
    {
      heading: "Organellen ohne Membran",
      content:
        "Einige wichtige zelluläre Strukturen besitzen <strong>keine umgebende Membran</strong>, erfüllen aber essentielle Funktionen.\n\n" +
        "<strong>1. Ribosomen:</strong>\n" +
        "Ribosomen sind die molekularen Maschinen der <strong>Translation</strong> (Proteinsynthese). Sie bestehen aus <strong>rRNA und Proteinen</strong> und kommen in zwei Größenklassen vor:\n" +
        "• <strong>80S-Ribosomen</strong> (Eukaryoten): bestehend aus einer <strong>60S</strong> (große) und einer <strong>40S</strong> (kleine) Untereinheit. Sie befinden sich frei im Zytoplasma (synthetisieren zytosolische Proteine) oder gebunden am rauen ER (synthetisieren sekretorische/membranständige Proteine).\n" +
        "• <strong>70S-Ribosomen</strong> (Prokaryoten): bestehend aus einer <strong>50S</strong> und einer <strong>30S</strong> Untereinheit. Dieselbe Größe findet sich auch in <strong>Mitochondrien</strong> und <strong>Chloroplasten</strong> — ein weiterer Beleg für die Endosymbiontentheorie.\n" +
        "Hinweis: Die S-Werte (Svedberg-Einheiten) geben die Sedimentationsgeschwindigkeit in der Ultrazentrifuge an und sind <strong>nicht additiv</strong> (50S + 30S ≠ 80S, sondern 70S).\n\n" +
        "<strong>2. Zytoskelett:</strong>\n" +
        "Das Zytoskelett ist ein dynamisches Netzwerk aus Proteinfilamenten, das der Zelle <strong>Form</strong>, <strong>mechanische Stabilität</strong> und die Fähigkeit zur <strong>Bewegung</strong> verleiht. Es besteht aus drei Hauptkomponenten:\n\n" +
        "• <strong>Mikrofilamente (Aktinfilamente)</strong> — Durchmesser: <strong>7 nm</strong>. Bestehen aus dem Protein <strong>Aktin</strong> (G-Aktin polymerisiert zu F-Aktin). Funktionen: Zellbewegung (Lamellipodien, Filopodien), Muskelkontraktion (mit Myosin), Zytokinese (kontraktiler Ring), Mikrovilli-Stabilisierung.\n\n" +
        "• <strong>Intermediärfilamente</strong> — Durchmesser: <strong>10 nm</strong>. Gewebespezifische Proteine: <strong>Zytokeratine</strong> (Epithelzellen), <strong>Vimentin</strong> (Mesenchymzellen), <strong>Desmin</strong> (Muskelzellen), <strong>Neurofilamente</strong> (Neurone), <strong>GFAP</strong> (Gliazellen), <strong>Lamine</strong> (Kernlamina). Funktionen: mechanische Stabilität, Verbindung von Desmosomen. Intermediärfilamente sind die <strong>stabilsten</strong> Zytoskelett-Elemente und <strong>nicht polar</strong>.\n\n" +
        "• <strong>Mikrotubuli</strong> — Durchmesser: <strong>25 nm</strong>. Hohlzylinder aus <strong>α- und β-Tubulin</strong>-Heterodimeren. Funktionen: intrazellulärer Transport (Motorproteine: <strong>Kinesin</strong> → zum Plus-Ende/Peripherie, <strong>Dynein</strong> → zum Minus-Ende/Zentrosom), Aufbau des <strong>Spindelapparats</strong> bei der Zellteilung, Grundgerüst von <strong>Zilien</strong> und <strong>Geißeln</strong> (9×2+2-Anordnung).\n\n" +
        "<strong>3. Zentriolen und Zentrosom:</strong>\n" +
        "Das Zentrosom besteht aus zwei rechtwinklig zueinander angeordneten <strong>Zentriolen</strong> (jeweils 9×3-Anordnung von Mikrotubuli-Tripletts) und umgebendem perizentriolärem Material. Es dient als <strong>Mikrotubuli-Organisationszentrum (MTOC)</strong> und ist essentiell für die Bildung des <strong>Spindelapparats</strong> während der Zellteilung.",

      merke:
        "Zytoskelett-Durchmesser: <strong>7-10-25 Regel</strong>: Aktin 7 nm, Intermediär 10 nm, Mikrotubuli 25 nm. Von dünn nach dick: A-I-M.",

      altfrage:
        "\"Welche Ribosomenart findet man in Mitochondrien?\" → <strong>70S</strong> (wie bei Prokaryoten!) — ein Beleg für die Endosymbiontentheorie.",
    },

    // ──────────────────────────────────────────────
    // SECTION 6 — Zellmembran & Membrantransport
    // ──────────────────────────────────────────────
    {
      heading: "Zellmembran & Membrantransport",
      content:
        "<strong>Aufbau der Zellmembran — Flüssig-Mosaik-Modell (Singer & Nicolson, 1972):</strong>\n\n" +
        "Die Zellmembran besteht aus einer <strong>Phospholipid-Doppelschicht</strong> mit eingelagerten Proteinen. Die Phospholipide sind <strong>amphiphil</strong>: ihre hydrophilen Köpfe zeigen nach außen (zum Wasser), die hydrophoben Fettsäureschwänze zeigen nach innen. Die Membran ist kein starres Gebilde, sondern verhält sich wie eine <strong>zweidimensionale Flüssigkeit</strong> — Lipide und Proteine können lateral diffundieren.\n\n" +
        "• <strong>Cholesterin</strong> (bei Tierzellen): reguliert die Membranfluidität — bei hohen Temperaturen verringert es die Fluidität, bei niedrigen erhöht es sie (Pufferfunktion).\n" +
        "• <strong>Integrale (transmembrane) Proteine:</strong> durchspannen die gesamte Membran (Kanäle, Carrier, Rezeptoren).\n" +
        "• <strong>Periphere Proteine:</strong> sind an der Membranoberfläche angelagert (innen oder außen).\n" +
        "• <strong>Glykokalix:</strong> Kohlenhydratketten auf der extrazellulären Seite (Glykoproteine, Glykolipide) — wichtig für Zell-Zell-Erkennung, Immunabwehr (AB0-Blutgruppen) und Schutzfunktion.\n\n" +
        "<strong>Passiver Transport (ohne Energieverbrauch, entlang des Konzentrationsgradienten):</strong>\n\n" +
        "• <strong>Einfache Diffusion:</strong> Kleine, unpolare Moleküle (O₂, CO₂, N₂) und kleine, ungeladene polare Moleküle (H₂O, Ethanol) diffundieren direkt durch die Lipiddoppelschicht.\n" +
        "• <strong>Osmose:</strong> Diffusion von <strong>Wasser</strong> durch eine semipermeable Membran vom Ort niedrigerer zum Ort höherer Stoffkonzentration (bzw. von hohem zu niedrigem Wasserpotential). Osmotische Konzepte: <strong>hypoton</strong> (Zelle schwillt an), <strong>isoton</strong> (Gleichgewicht), <strong>hyperton</strong> (Zelle schrumpft/Plasmolyse).\n" +
        "• <strong>Erleichterte Diffusion:</strong> Transport durch <strong>Kanalproteine</strong> (Ionenkanäle: spezifisch, schnell, regulierbar) oder <strong>Carrierproteine</strong> (Konformationsänderung, langsamer, sättigbar). Beispiel: <strong>GLUT-Transporter</strong> für Glucose. Kein ATP-Verbrauch!\n\n" +
        "<strong>Aktiver Transport (mit Energieverbrauch, gegen den Konzentrationsgradienten):</strong>\n\n" +
        "• <strong>Primär aktiver Transport:</strong> Direkte ATP-Hydrolyse treibt den Transport an. Wichtigstes Beispiel: <strong>Na⁺/K⁺-ATPase</strong> — pumpt pro ATP-Molekül <strong>3 Na⁺-Ionen nach außen</strong> und <strong>2 K⁺-Ionen nach innen</strong>. Dies erzeugt und erhält das Membranpotential (ca. −70 mV). Weitere Beispiele: Ca²⁺-ATPase, H⁺/K⁺-ATPase (Belegzellen des Magens).\n" +
        "• <strong>Sekundär aktiver Transport:</strong> Nutzt den durch primär aktiven Transport aufgebauten Ionengradienten (meist Na⁺). <strong>Symport</strong> (gleiche Richtung): Na⁺/Glucose-Cotransporter (SGLT1 im Dünndarm). <strong>Antiport</strong> (entgegengesetzte Richtung): Na⁺/H⁺-Austauscher.\n\n" +
        "<strong>Vesikulärer Transport (Endo- und Exozytose):</strong>\n\n" +
        "• <strong>Endozytose</strong> (Aufnahme): <strong>Phagozytose</strong> (Aufnahme großer Partikel, z. B. Makrophagen fressen Bakterien), <strong>Pinozytose</strong> (Aufnahme von Flüssigkeit und gelösten Stoffen), <strong>Rezeptorvermittelte Endozytose</strong> (spezifische Aufnahme über Clathrin-beschichtete Vesikel, z. B. LDL-Aufnahme).\n" +
        "• <strong>Exozytose</strong> (Ausschleusung): Vesikel fusionieren mit der Zellmembran und entlassen ihren Inhalt nach außen (z. B. Neurotransmitter-Freisetzung, Hormonsekretion).",

      diagram: "cell-membrane",

      vergleichsTabelle: {
        headers: ["Transport", "Energie?", "Richtung", "Beispiel"],
        rows: [
          ["Einfache Diffusion", "Nein (passiv)", "Mit dem Gradienten", "O₂, CO₂ durch die Membran"],
          ["Osmose", "Nein (passiv)", "Wasser: niedrige → hohe Stoffkonz.", "Wasser durch Aquaporine"],
          ["Erleichterte Diffusion", "Nein (passiv)", "Mit dem Gradienten", "Glucose über GLUT-Transporter"],
          ["Primär aktiver Transport", "Ja (ATP direkt)", "Gegen den Gradienten", "Na⁺/K⁺-ATPase: 3 Na⁺ raus, 2 K⁺ rein"],
          ["Sekundär aktiver Transport", "Ja (indirekt, Ionengradient)", "Gegen den Gradienten", "Na⁺/Glucose-Symport (SGLT1)"],
        ],
      },

      merke:
        "Na⁺/K⁺-ATPase: <strong>3 Na⁺ raus, 2 K⁺ rein</strong> pro ATP. Merke: 3 Buchstaben in \"Na+\" = 3 raus, 2 Buchstaben in \"K+\" = 2 rein.",

      altfrage:
        "\"Was ist KEIN passiver Transport?\" → <strong>Na⁺/K⁺-Pumpe</strong> (braucht ATP = aktiver Transport!)",

      klinik:
        "Mukoviszidose (Cystische Fibrose): Defekter <strong>CFTR-Chloridkanal</strong> → zähflüssiger Schleim in Lunge und Pankreas. Häufigste autosomal-rezessive Erkrankung bei Europäern.",
    },

    // ──────────────────────────────────────────────
    // SECTION 7 — Zellteilung: Mitose
    // ──────────────────────────────────────────────
    {
      heading: "Zellteilung: Mitose",
      content:
        "Die Mitose ist die Form der Zellteilung, bei der aus einer diploiden Mutterzelle <strong>zwei genetisch identische diploide Tochterzellen</strong> entstehen. Sie dient dem Wachstum, der Regeneration und der Erneuerung von Gewebe.\n\n" +
        "<strong>Der Zellzyklus:</strong>\n\n" +
        "Der Zellzyklus umfasst die <strong>Interphase</strong> (ca. 90 % der Zeit) und die <strong>Mitose-Phase (M-Phase)</strong>.\n\n" +
        "• <strong>G1-Phase</strong> (Gap 1): Zellwachstum, Proteinsynthese, normale Zellfunktionen. Die Zelle „entscheidet“ am <strong>Restriktionspunkt (G1/S-Checkpoint)</strong>, ob sie sich teilt oder in die G0-Phase eintritt.\n" +
        "• <strong>S-Phase</strong> (Synthese): <strong>DNA-Replikation</strong> — jedes Chromosom wird verdoppelt, sodass Schwesterchromatiden entstehen (verbunden am Zentromer). DNA-Gehalt: 2n → 4n (Verdopplung der DNA-Menge, aber Chromosomenzahl bleibt 2n). Auch das Zentrosom wird verdoppelt.\n" +
        "• <strong>G2-Phase</strong> (Gap 2): Letzte Vorbereitungen für die Teilung, Proteinsynthese, Kontrollmechanismen (<strong>G2/M-Checkpoint</strong>: Ist die DNA vollständig und fehlerfrei repliziert?).\n" +
        "• <strong>G0-Phase</strong>: Ruhephase, in die sich differenzierte Zellen zurückziehen (z. B. Neuronen, Herzmuskelzellen). Manche Zellen können bei Bedarf wieder in G1 eintreten (z. B. Hepatozyten bei Leberschaden).\n\n" +
        "<strong>Phasen der Mitose (PMAT):</strong>\n\n" +
        "<strong>1. Prophase:</strong>\n" +
        "Das Chromatin <strong>kondensiert</strong> zu sichtbaren Chromosomen (jedes aus zwei Schwesterchromatiden). Die <strong>Zentrosomen</strong> wandern zu entgegengesetzten Zellpolen und bilden den <strong>Spindelapparat</strong> aus Mikrotubuli. Der <strong>Nukleolus</strong> löst sich auf. Gegen Ende (Prometaphase) zerfällt die <strong>Kernhülle</strong>, und die Spindelfasern heften sich an die <strong>Kinetochore</strong> der Chromosomen.\n\n" +
        "<strong>2. Metaphase:</strong>\n" +
        "Alle Chromosomen ordnen sich in der <strong>Äquatorialebene</strong> (Metaphaseplatte) an. Jede Schwesterchromatide ist über ihr Kinetochor mit Spindelfasern eines Pols verbunden. Der <strong>Spindel-Checkpoint</strong> (SAC = Spindle Assembly Checkpoint) kontrolliert, ob alle Chromosomen korrekt angeheftet sind — erst dann wird die Anaphase eingeleitet.\n\n" +
        "<strong>3. Anaphase:</strong>\n" +
        "Die <strong>Schwesterchromatiden</strong> werden durch Spaltung des Cohesins am Zentromer getrennt und zu entgegengesetzten <strong>Zellpolen</strong> gezogen (durch Verkürzung der Kinetochor-Mikrotubuli und Verlängerung der polaren Mikrotubuli). Die Zelle streckt sich.\n\n" +
        "<strong>4. Telophase:</strong>\n" +
        "An beiden Polen bilden sich <strong>neue Kernhüllen</strong> um die Chromosomen. Die Chromosomen <strong>dekondensieren</strong> wieder zu Chromatin. Der <strong>Nukleolus</strong> bildet sich neu. Der Spindelapparat wird abgebaut.\n\n" +
        "<strong>Zytokinese (Zellteilung):</strong>\n" +
        "• <strong>Tierzelle:</strong> Einschnürung durch einen <strong>kontraktilen Ring</strong> aus Aktin und Myosin (Teilungsfurche von außen nach innen).\n" +
        "• <strong>Pflanzenzelle:</strong> Bildung einer <strong>Zellplatte</strong> aus Golgi-Vesikeln von innen nach außen, die zur neuen Zellwand wird.\n\n" +
        "<strong>Kontrollpunkte des Zellzyklus:</strong>\n" +
        "• <strong>G1/S-Checkpoint</strong> (Restriktionspunkt): Überprüfung der Zellgröße, Nährstoffversorgung und DNA-Integrität. Reguliert durch <strong>p53</strong> und <strong>Rb-Protein</strong>.\n" +
        "• <strong>G2/M-Checkpoint:</strong> Ist die DNA vollständig repliziert? Liegen DNA-Schäden vor?\n" +
        "• <strong>Spindel-Checkpoint (M-Checkpoint):</strong> Sind alle Chromosomen korrekt an die Spindel angeheftet?\n\n" +
        "Die Kontrolle erfolgt über <strong>Cycline</strong> und <strong>cyclinabhängige Kinasen (CDKs)</strong>. Cycline werden periodisch auf- und abgebaut und aktivieren die CDKs zu bestimmten Zeitpunkten des Zyklus.",

      diagram: "mitosis",

      merke:
        "PMAT — <strong>P</strong>hantasie <strong>M</strong>acht <strong>A</strong>lles <strong>T</strong>oll. Ergebnis: 2 genetisch identische diploide Tochterzellen (2n → 2×2n).",

      klinik:
        "Mutiertes <strong>p53-Tumorsuppressorgen</strong> → fehlende Zellzyklus-Kontrolle → unkontrollierte Teilung → Krebs. p53 ist in >50 % aller Tumoren mutiert.",
    },

    // ──────────────────────────────────────────────
    // SECTION 8 — Zellteilung: Meiose
    // ──────────────────────────────────────────────
    {
      heading: "Zellteilung: Meiose",
      content:
        "Die Meiose ist die spezielle Zellteilung zur Bildung von <strong>Keimzellen (Gameten)</strong>. Sie besteht aus <strong>zwei aufeinanderfolgenden Teilungen</strong> — Meiose I und Meiose II — und erzeugt aus einer diploiden Zelle (2n) <strong>vier haploide Zellen (n)</strong>.\n\n" +
        "<strong>Meiose I — Reduktionsteilung:</strong>\n\n" +
        "<strong>Prophase I</strong> (die längste und komplexeste Phase):\n" +
        "Die homologen Chromosomen paaren sich (<strong>Synapsis</strong>) und bilden <strong>Bivalente</strong> (= Tetraden, bestehend aus 4 Chromatiden). Zwischen den Homologen kommt es zum <strong>Crossing-Over</strong>: Austausch von Chromosomenabschnitten an den <strong>Chiasmata</strong>. Dies führt zu <strong>neuen Allel-Kombinationen</strong> und ist eine der wichtigsten Quellen genetischer Vielfalt. Die Prophase I wird in 5 Stadien unterteilt: Leptotän, Zygotän, Pachytän (Crossing-Over!), Diplotän (Chiasmata sichtbar) und Diakinese.\n\n" +
        "<strong>Metaphase I:</strong>\n" +
        "Die <strong>Bivalente</strong> (nicht einzelne Chromosomen wie bei der Mitose) ordnen sich in der Äquatorialebene an. Die Orientierung der homologen Chromosomenpaare ist <strong>zufällig</strong> — dies ist die <strong>zufällige Chromosomenverteilung (Independent Assortment)</strong>. Beim Menschen ergeben sich daraus <strong>2²³ = 8.388.608</strong> verschiedene Kombinationsmöglichkeiten pro Gamet.\n\n" +
        "<strong>Anaphase I:</strong>\n" +
        "Die <strong>homologen Chromosomen</strong> werden voneinander getrennt (NICHT die Schwesterchromatiden!). Jeder Pol erhält einen haploiden Chromosomensatz. Dies ist die eigentliche <strong>Reduktion</strong> (2n → n).\n\n" +
        "<strong>Telophase I / Zytokinese I:</strong>\n" +
        "Zwei <strong>haploide</strong> Zellen entstehen. Jede Zelle enthält n Chromosomen, aber jedes Chromosom besteht noch aus zwei Schwesterchromatiden.\n\n" +
        "<strong>Meiose II — Äquationsteilung (ähnlich der Mitose):</strong>\n\n" +
        "Es findet <strong>keine erneute DNA-Replikation</strong> zwischen Meiose I und II statt!\n\n" +
        "<strong>Prophase II:</strong> Neuer Spindelapparat bildet sich. <strong>Metaphase II:</strong> Chromosomen ordnen sich in der Äquatorialebene an. <strong>Anaphase II:</strong> Die <strong>Schwesterchromatiden</strong> werden am Zentromer getrennt und zu den Polen gezogen. <strong>Telophase II / Zytokinese II:</strong> Vier <strong>haploide Zellen (n)</strong> entstehen.\n\n" +
        "<strong>Quellen der genetischen Vielfalt:</strong>\n\n" +
        "1. <strong>Crossing-Over</strong> (Prophase I): Rekombination zwischen homologen Chromosomen — erzeugt neue Allel-Kombinationen auf einem Chromosom.\n" +
        "2. <strong>Zufällige Chromosomenverteilung</strong> (Metaphase I): Independent Assortment — 2²³ Möglichkeiten beim Menschen.\n" +
        "3. <strong>Zufällige Befruchtung:</strong> Welche Eizelle auf welches Spermium trifft — ergibt zusammen (2²³)² = ca. 70 Billionen mögliche Kombinationen (ohne Crossing-Over).\n\n" +
        "<strong>Vergleich Spermatogenese vs. Oogenese:</strong>\n" +
        "• <strong>Spermatogenese:</strong> Aus einer Spermatogonie entstehen 4 funktionsfähige Spermien. Findet ab der Pubertät kontinuierlich statt.\n" +
        "• <strong>Oogenese:</strong> Aus einer Oogonie entsteht nur 1 funktionsfähige Eizelle + 2–3 Polkörperchen (mit wenig Zytoplasma). Meiose I wird in der Prophase I arretiert (Dictyotän) und erst mit der Ovulation fortgesetzt. Meiose II wird erst bei Befruchtung abgeschlossen.",

      vergleichsTabelle: {
        headers: ["Merkmal", "Mitose", "Meiose"],
        rows: [
          ["Teilungen", "1 Teilung", "2 Teilungen (Meiose I + II)"],
          ["Ergebnis", "2 diploide Zellen", "4 haploide Zellen"],
          ["Chromosomenzahl", "Bleibt gleich (2n → 2n)", "Wird halbiert (2n → n)"],
          ["Ort", "Somatische Zellen (Körperzellen)", "Keimzellen (Gonaden)"],
          ["Funktion", "Wachstum, Regeneration", "Bildung von Gameten"],
          ["Crossing-Over", "Nein (normalerweise nicht)", "Ja (Prophase I)"],
        ],
      },

      merke:
        "Meiose I: <strong>Homologe</strong> werden getrennt (Reduktion 2n→n). Meiose II: <strong>Chromatiden</strong> werden getrennt (wie Mitose). Crossing-Over nur in Prophase I!",

      altfrage:
        "\"Wann findet Crossing-Over statt?\" → <strong>Prophase I der Meiose</strong>. NICHT in der Mitose und NICHT in Meiose II!",

      klinik:
        "<strong>Trisomie 21</strong> (Down-Syndrom) entsteht durch Non-Disjunction — meist in Meiose I der mütterlichen Eizelle. Risiko steigt mit dem Alter der Mutter.",
    },
  ],

  keyFacts: [
    {
      label: "Na⁺/K⁺-ATPase",
      value: "3 Na⁺ raus, 2 K⁺ rein pro ATP",
    },
    {
      label: "Ribosomen",
      value: "80S (Eukaryoten) vs. 70S (Prokaryoten)",
    },
    {
      label: "Lysosomen",
      value: "pH 4,5-5,0",
    },
    {
      label: "Zytoskelett",
      value: "Aktin 7 nm, Intermediär 10 nm, Mikrotubuli 25 nm",
    },
    {
      label: "Doppelmembran",
      value: "Zellkern, Mitochondrien, Chloroplasten",
    },
    {
      label: "Mitose",
      value: "2n → 2×2n (identische diploide Zellen)",
    },
    {
      label: "Meiose",
      value: "2n → 4×n (haploide Keimzellen)",
    },
    {
      label: "Crossing-Over",
      value: "Prophase I der Meiose",
    },
    {
      label: "Zellwand (Cellulose)",
      value: "Nur Pflanzenzellen",
    },
    {
      label: "Proteinweg",
      value: "Raues ER → Golgi → Vesikel → Zielort",
    },
  ],

  selfTestQuestions: [
    {
      question: "Welche Organelle hat eine Doppelmembran?",
      options: [
        "Lysosom",
        "Golgi-Apparat",
        "Mitochondrium",
        "Glattes ER",
        "Peroxisom",
      ],
      correctIndex: 2,
      explanation:
        "Mitochondrien haben eine Doppelmembran (innere + äußere Membran). Auch Zellkern und Chloroplasten haben eine Doppelmembran. Lysosomen, Golgi, glattes ER und Peroxisomen haben nur eine einfache Membran.",
    },
    {
      question:
        "Wie viele Na⁺-Ionen pumpt die Na⁺/K⁺-ATPase pro Zyklus RAUS?",
      options: ["1", "2", "3", "4", "5"],
      correctIndex: 2,
      explanation:
        "Die Na⁺/K⁺-ATPase pumpt pro ATP-Verbrauch 3 Na⁺-Ionen nach außen und 2 K⁺-Ionen nach innen. Merke: 3 Na⁺ raus, 2 K⁺ rein.",
    },
    {
      question: "Was ist das Ergebnis der Meiose?",
      options: [
        "2 diploide Zellen",
        "4 diploide Zellen",
        "2 haploide Zellen",
        "4 haploide Zellen",
        "1 haploide Zelle",
      ],
      correctIndex: 3,
      explanation:
        "Die Meiose besteht aus zwei Teilungen: Meiose I (Reduktionsteilung) und Meiose II. Aus einer diploiden Zelle (2n) entstehen 4 haploide Zellen (n) — bei der Mitose wären es 2 diploide Zellen.",
    },
    {
      question: "Welcher Transport benötigt KEINE Energie?",
      options: [
        "Na⁺/K⁺-Pumpe",
        "Phagozytose",
        "Osmose",
        "Primär aktiver Transport",
        "Exozytose",
      ],
      correctIndex: 2,
      explanation:
        "Osmose ist die Diffusion von Wasser durch eine semipermeable Membran — ein passiver Vorgang ohne ATP-Verbrauch. Na⁺/K⁺-Pumpe und primär aktiver Transport brauchen direkt ATP, Phagozytose und Exozytose benötigen ebenfalls Energie.",
    },
    {
      question: "Wo findet Crossing-Over statt?",
      options: [
        "Mitose Prophase",
        "Meiose I Prophase",
        "Meiose II Anaphase",
        "Mitose Metaphase",
        "Meiose II Prophase",
      ],
      correctIndex: 1,
      explanation:
        "Crossing-Over findet in der Prophase I der Meiose statt, wenn homologe Chromosomen sich paaren (Bivalente/Tetraden bilden) und Chromosomenabschnitte austauschen. Dies erhöht die genetische Vielfalt.",
    },
  ],

  summary: [
    "Prokaryoten haben keinen membranumhüllten Zellkern, 70S-Ribosomen und keine Membranorganellen. Eukaryoten besitzen einen echten Zellkern, 80S-Ribosomen und komplexe Organellen.",
    "Pflanzenzellen unterscheiden sich von Tierzellen durch Zellwand (Cellulose), Chloroplasten und eine große Zentralvakuole. Tierzellen haben Zentriolen und typische Lysosomen.",
    "Organellen mit Doppelmembran und eigener DNA: Zellkern, Mitochondrien und Chloroplasten — erklärt durch die Endosymbiontentheorie.",
    "Organellen mit einfacher Membran bilden das Endomembransystem: Raues ER (Proteinsynthese), Glattes ER (Lipidsynthese, Entgiftung), Golgi-Apparat (Modifikation, Sortierung), Lysosomen (intrazellulärer Abbau) und Peroxisomen (H₂O₂-Abbau).",
    "Der Proteinweg verläuft: Raues ER → Golgi (cis→trans) → Transportvesikel → Zielort (Membran, Sekretion oder Lysosomen).",
    "Das Zytoskelett besteht aus Aktinfilamenten (7 nm), Intermediärfilamenten (10 nm) und Mikrotubuli (25 nm) — mit unterschiedlichen Funktionen in Zellform, Bewegung und Transport.",
    "Membrantransport: Passiv (Diffusion, Osmose, erleichterte Diffusion) benötigt kein ATP. Aktiv (primär: Na⁺/K⁺-ATPase; sekundär: Cotransporter) benötigt Energie.",
    "Die Na⁺/K⁺-ATPase pumpt 3 Na⁺ nach außen und 2 K⁺ nach innen pro ATP — essentiell für das Membranpotential.",
    "Mitose erzeugt 2 genetisch identische diploide Zellen (PMAT) und dient dem Wachstum. Kontrollpunkte (G1/S, G2/M, Spindel-Checkpoint) sichern die korrekte Teilung.",
    "Meiose erzeugt 4 haploide Keimzellen durch zwei Teilungen. Genetische Vielfalt entsteht durch Crossing-Over (Prophase I), zufällige Chromosomenverteilung (2²³ Möglichkeiten) und zufällige Befruchtung.",
  ],
};
