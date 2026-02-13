import type { Chapter } from "./types";

export const organischeChemieChapter: Chapter = {
  id: "organische-chemie",
  subject: "chemie",
  title: "Organische Chemie",
  subtitle: "Kohlenwasserstoffe, Funktionelle Gruppen, Biomoleküle & Stoffwechsel",
  icon: "🧪",
  chapterNumber: "Kapitel 2/3",
  readingTime: "~55 Minuten",
  level: "Kernstoff",
  frequency: "Häufig geprüft",
  overview:
    "Dieses Kapitel behandelt die Grundlagen der organischen Chemie — von den Kohlenwasserstoffen und ihren Bindungsverhältnissen über die wichtigsten funktionellen Gruppen bis hin zu den biologisch relevanten Biomolekülen (Kohlenhydrate, Lipide, Proteine, Nucleinsäuren). Abschließend werden Enzyme als biologische Katalysatoren sowie der zelluläre Energiestoffwechsel (Glykolyse, Citratzyklus, Atmungskette) detailliert erklärt. Organische Chemie ist ein zentrales Prüfungsthema im MedAT-BMS und verknüpft chemisches Grundlagenwissen mit biochemischen und medizinischen Zusammenhängen.",
  learningObjectives: [
    "Alkane, Alkene und Alkine unterscheiden und benennen",
    "Die wichtigsten funktionellen Gruppen erkennen",
    "Kohlenhydrate, Lipide und Proteine als Biomoleküle beschreiben",
    "Die Michälis-Menten-Kinetik und Enzymhemmung erklären",
    "Den Ablauf der Zellatmung mit ATP-Bilanz beschreiben",
    "Isomerieformen unterscheiden",
  ],

  sections: [
    // ──────────────────────────────────────────────
    // 1. Kohlenwasserstoffe
    // ──────────────────────────────────────────────
    {
      heading: "Kohlenwasserstoffe",
      content:
        "Kohlenwasserstoffe (KW) bestehen ausschließlich aus Kohlenstoff- und Wasserstoffatomen und bilden das Grundgerüst der organischen Chemie. Kohlenstoff ist vierbindig (4 Bindungen) und kann Einfach-, Doppel- und Dreifachbindungen ausbilden. Man unterscheidet drei Hauptklassen:\n\n" +
        "<strong>Alkane (gesättigte KW):</strong> Alkane besitzen ausschließlich C–C-Einfachbindungen. Sie haben die allgemeine Summenformel <strong>CₙH₂ₙ₊₂</strong> und tragen die Endung <strong>-an</strong>. Die C-Atome sind sp³-hybridisiert (Teträder-Geometrie, Bindungswinkel 109,5°). Um jede C–C-Einfachbindung ist freie Rotation möglich. Die homologe Reihe der Alkane lautet: Methan (CH₄), Ethan (C₂H₆), Propan (C₃H₈), Butan (C₄H₁₀), Pentan (C₅H₁₂), Hexan (C₆H₁₄), Heptan (C₇H₁₆), Octan (C₈H₁₈), Nonan (C₉H₂₀), Decan (C₁₀H₂₂). Mit steigender Kettenlänge nehmen Siedepunkt und Schmelzpunkt zu (stärkere Van-der-Waals-Kräfte). Alkane sind unpolar, wasserunlöslich (hydrophob) und brennbar.\n\n" +
        "<strong>Alkene (ungesättigte KW mit Doppelbindung):</strong> Alkene enthalten mindestens eine C=C-Doppelbindung. Ihre allgemeine Summenformel ist <strong>CₙH₂ₙ</strong> und die Endung lautet <strong>-en</strong>. Die C-Atome der Doppelbindung sind sp²-hybridisiert (trigonal-planar, Bindungswinkel 120°). Die Doppelbindung besteht aus einer σ-Bindung und einer π-Bindung. Wichtig: Um eine C=C-Doppelbindung ist <strong>keine freie Rotation</strong> möglich — dies ist die Grundlage der cis/trans-Isomerie (geometrische Isomerie). Das einfachste Alken ist Ethen (Ethylen, C₂H₄). Alkene sind reaktiver als Alkane und gehen typische Additionsreaktionen ein (z.B. Hydrierung: Alken + H₂ → Alkan).\n\n" +
        "<strong>Alkine (ungesättigte KW mit Dreifachbindung):</strong> Alkine enthalten mindestens eine C≡C-Dreifachbindung. Ihre allgemeine Summenformel ist <strong>CₙH₂ₙ₋₂</strong> und die Endung lautet <strong>-in</strong>. Die C-Atome der Dreifachbindung sind sp-hybridisiert (linear, Bindungswinkel 180°). Die Dreifachbindung besteht aus einer σ-Bindung und zwei π-Bindungen. Das einfachste Alkin ist Ethin (Acetylen, C₂H₂).\n\n" +
        "<strong>IUPAC-Nomenklatur:</strong> Die systematische Benennung organischer Verbindungen folgt den Regeln der IUPAC: (1) Bestimme die längste durchgehende Kohlenstoffkette — diese bildet den Stammnamen. (2) Nummeriere die C-Atome so, dass die Substitünten möglichst niedrige Nummern erhalten. (3) Benenne die Substitünten (Alkylgruppen wie Methyl-, Ethyl-) und gib ihre Position an. (4) Bei mehreren gleichen Substitünten verwende di-, tri-, tetra- etc. (5) Die funktionelle Gruppe mit höchster Priorität bestimmt die Endung.\n\n" +
        "<strong>Isomerie:</strong> Isomere sind Moleküle mit gleicher Summenformel, aber unterschiedlicher Struktur. Man unterscheidet:\n" +
        "• <strong>Strukturisomerie (Konstitutionsisomerie):</strong> Unterschiedliche Verknüpfung der Atome (z.B. n-Butan vs. Isobutan/2-Methylpropan — gleiche Formel C₄H₁₀, aber andere Kettenstruktur).\n" +
        "• <strong>Stereoisomerie:</strong> Gleiche Verknüpfung, aber unterschiedliche räumliche Anordnung. Unterformen: (a) <strong>cis/trans-Isomerie (E/Z-Isomerie):</strong> Tritt bei Doppelbindungen auf, weil keine freie Rotation möglich ist. cis = gleiche Seite, trans = gegenüberliegende Seite (nach CIP-Regeln: Z = zusammen, E = entgegen). (b) <strong>Enantiomere (Spiegelbildisomerie):</strong> Auftreten bei chiralen Molekülen mit einem asymmetrischen C-Atom (4 verschiedene Substitünten). Enantiomere verhalten sich wie Bild und Spiegelbild, sind aber nicht deckungsgleich. Sie drehen die Ebene des polarisierten Lichts in entgegengesetzte Richtungen (optische Aktivität: R/S- oder D/L-Nomenklatur).",
      vergleichsTabelle: {
        headers: ["Typ", "Bindung", "Formel", "Endung", "Beispiel"],
        rows: [
          ["Alkan", "C–C Einfachbindung", "CₙH₂ₙ₊₂", "-an", "Methan (CH₄), Ethan (C₂H₆)"],
          ["Alken", "C=C Doppelbindung", "CₙH₂ₙ", "-en", "Ethen (C₂H₄), Propen (C₃H₆)"],
          ["Alkin", "C≡C Dreifachbindung", "CₙH₂ₙ₋₂", "-in", "Ethin (C₂H₂), Propin (C₃H₄)"],
        ],
      },
      merke:
        "Homologe Reihe der Alkane: <strong>Me-Et-Prop-But-Pent-Hex-Hept-Oct-Non-Dec</strong> (1-10 C-Atome). Doppelbindung = keine freie Rotation → cis/trans-Isomerie möglich!",
      altfrage:
        "\"Wie viele H-Atome hat ein Alkan mit 6 C-Atomen?\" → CₙH₂ₙ₊₂ = C₆H₁₄ = <strong>14</strong> H-Atome.",
    },

    // ──────────────────────────────────────────────
    // 2. Funktionelle Gruppen
    // ──────────────────────────────────────────────
    {
      heading: "Funktionelle Gruppen",
      content:
        "Funktionelle Gruppen sind Atomgruppen innerhalb eines organischen Moleküls, die dessen chemische Eigenschaften und Reaktivität bestimmen. Sie sind der Schlüssel zur Systematik der organischen Chemie, denn Moleküle mit derselben funktionellen Gruppe zeigen ähnliche Reaktionen.\n\n" +
        "<strong>Alkohol (Hydroxylgruppe, –OH):</strong> Alkohole tragen eine OH-Gruppe an einem sp³-hybridisierten C-Atom. Endung: <strong>-ol</strong>. Beispiele: Methanol (CH₃OH), Ethanol (C₂H₅OH), Glycerin (Propan-1,2,3-triol). Man unterscheidet nach der Stellung der OH-Gruppe: primärer Alkohol (OH an primärem C, z.B. Ethanol), sekundärer Alkohol (OH an sekundärem C, z.B. Isopropanol) und tertiärer Alkohol (OH an tertiärem C, z.B. tert-Butanol). Alkohole sind durch die OH-Gruppe polar und können Wasserstoffbrücken ausbilden → höhere Siedepunkte als vergleichbare Alkane und gute Wasserlöslichkeit (bei kurzer Kette).\n\n" +
        "<strong>Aldehyd (Aldehydgruppe, –CHO):</strong> Aldehyde besitzen eine Carbonylgruppe (C=O) am Ende der Kohlenstoffkette, wobei das Carbonyl-C zusätzlich ein H-Atom trägt. Endung: <strong>-al</strong>. Beispiele: Methanal (Formaldehyd, HCHO), Ethanal (Acetaldehyd, CH₃CHO). Aldehyde sind reduzierend und können zu Carbonsäuren oxidiert werden (Fehling-Probe, Tollens-Probe positiv).\n\n" +
        "<strong>Keton (Ketogruppe, >C=O):</strong> Ketone besitzen eine Carbonylgruppe innerhalb der C-Kette, wobei das Carbonyl-C an zwei C-Atome gebunden ist. Endung: <strong>-on</strong>. Beispiel: Propanon (Aceton, CH₃COCH₃). Ketone sind <strong>nicht</strong> weiter oxidierbar (kein H am Carbonyl-C) und zeigen daher eine negative Fehling-/Tollens-Probe.\n\n" +
        "<strong>Carbonsäure (Carboxylgruppe, –COOH):</strong> Carbonsäuren tragen eine Carboxylgruppe, die aus einer Carbonylgruppe (C=O) und einer Hydroxylgruppe (OH) am selben C-Atom besteht. Endung: <strong>-säure</strong>. Beispiele: Methansäure (Ameisensäure, HCOOH), Ethansäure (Essigsäure, CH₃COOH). Carbonsäuren sind schwache Säuren (Protonendonatoren: –COOH → –COO⁻ + H⁺). Die konjugierte Base (Carboxylat-Anion) ist durch Mesomerie stabilisiert.\n\n" +
        "<strong>Ester (Estergruppe, –COO–):</strong> Ester entstehen durch Kondensation (Veresterung) einer Carbonsäure mit einem Alkohol unter Abspaltung von Wasser: R–COOH + HO–R' → R–COO–R' + H₂O. Diese Reaktion ist eine Gleichgewichtsreaktion und wird durch Säurekatalyse beschleunigt (Fischer-Veresterung). Ester sind häufig für den Geruch von Früchten verantwortlich. Beispiel: Ethylethanoat (Essigsäureethylester). Die Rückreaktion heißt Hydrolyse (Spaltung durch Wasser) oder Verseifung (mit Base → Salz der Carbonsäure = Seife).\n\n" +
        "<strong>Amin (Aminogruppe, –NH₂):</strong> Amine tragen eine Aminogruppe. Endung: <strong>-amin</strong>. Amine sind basisch (Protonenakzeptoren: –NH₂ + H⁺ → –NH₃⁺). Beispiel: Methylamin (CH₃NH₂). Man unterscheidet primäre (R–NH₂), sekundäre (R₂NH) und tertiäre Amine (R₃N). In Aminosäuren kommen sowohl eine Amino- als auch eine Carboxylgruppe vor → Zwitterionen.\n\n" +
        "<strong>Amid (Amidgruppe, –CONH₂):</strong> Amide entstehen formal aus einer Carbonsäure und einem Amin unter Wasserabspaltung. Die Amidbindung (–CO–NH–) ist identisch mit der Peptidbindung in Proteinen. Amide sind weder sauer noch basisch (Mesomeriestabilisierung).\n\n" +
        "<strong>Ether (Ethergruppe, –O–):</strong> Ether besitzen ein Sauerstoffatom, das zwei organische Reste verbindet (R–O–R'). Beispiel: Diethylether (CH₃CH₂OCH₂CH₃). Ether sind relativ reaktionsträge und haben niedrige Siedepunkte (keine H-Brücken untereinander).\n\n" +
        "<strong>Oxidationsreihe:</strong> Die schrittweise Oxidation organischer Verbindungen folgt einer klaren Hierarchie, die für das Verständnis biochemischer Reaktionen essenziell ist:\n" +
        "• Primärer Alkohol → Aldehyd → Carbonsäure (zweistufige Oxidation möglich)\n" +
        "• Sekundärer Alkohol → Keton (kein weiterer Abbau zum Carbonsäure-Analogon!)\n" +
        "• Tertiärer Alkohol → <strong>nicht oxidierbar</strong> (kein H am C-OH für die Oxidation verfügbar)\n\n" +
        "<strong>Veresterung (Kondensation):</strong> Carbonsäure + Alkohol ⇌ Ester + H₂O. Die Gleichgewichtsreaktion wird durch Säurekatalyse (z.B. H₂SO₄) und Wasserentzug in Richtung Esterbildung verschoben. Biologisch wichtig: Triglyceride (Fette) sind Ester aus Glycerin und drei Fettsäuren.",
      vergleichsTabelle: {
        headers: ["Gruppe", "Struktur", "Endung", "Beispiel"],
        rows: [
          ["Alkohol", "R–OH", "-ol", "Ethanol (C₂H₅OH)"],
          ["Aldehyd", "R–CHO", "-al", "Ethanal (CH₃CHO)"],
          ["Keton", "R–CO–R'", "-on", "Propanon / Aceton (CH₃COCH₃)"],
          ["Carbonsäure", "R–COOH", "-säure", "Ethansäure / Essigsäure (CH₃COOH)"],
          ["Ester", "R–COO–R'", "-ester", "Essigsäureethylester (CH₃COOC₂H₅)"],
          ["Amin", "R–NH₂", "-amin", "Methylamin (CH₃NH₂)"],
        ],
      },
      merke:
        "Oxidationsreihe: <strong>Alkohol → Aldehyd → Carbonsäure</strong>. Primärer Alkohol → Aldehyd → Carbonsäure. Sekundärer Alkohol → Keton (kein weiterer Abbau!). Tertiärer Alkohol: nicht oxidierbar.",
    },

    // ──────────────────────────────────────────────
    // 3. Biomoleküle
    // ──────────────────────────────────────────────
    {
      heading: "Biomoleküle",
      content:
        "Biomoleküle sind die molekularen Bausteine des Lebens. Sie lassen sich in vier große Klassen einteilen: Kohlenhydrate, Lipide, Proteine und Nucleinsäuren. Jede Klasse hat spezifische Struktur-Funktions-Beziehungen, die für das Verständnis der Biochemie und Medizin essenziell sind.\n\n" +
        "<strong>Kohlenhydrate (Zucker, Saccharide):</strong>\n" +
        "Kohlenhydrate haben die allgemeine Summenformel Cₙ(H₂O)ₙ und dienen als Energielieferanten und Strukturbausteine. Man unterscheidet:\n\n" +
        "• <strong>Monosaccharide (Einfachzucker):</strong> Die wichtigsten Monosaccharide sind Hexosen (6 C-Atome): <strong>Glucose</strong> (Traubenzucker, C₆H₁₂O₆) — das zentrale Molekül des Energiestoffwechsels, <strong>Fructose</strong> (Fruchtzucker, C₆H₁₂O₆) — Strukturisomer der Glucose (Ketohexose statt Aldohexose), <strong>Galactose</strong> (C₆H₁₂O₆) — Epimer der Glucose an C-4, Bestandteil der Lactose. In wässriger Lösung bilden Monosaccharide bevorzugt Ringstrukturen (Pyranose- oder Furanoseform). Am anomeren C-Atom (C-1 bei Aldosen) entstehen zwei Konfigurationen: α-Form (OH nach unten in der Haworth-Projektion) und β-Form (OH nach oben). Dieser Unterschied ist biologisch enorm bedeutsam (α- vs. β-glycosidische Bindung).\n\n" +
        "• <strong>Disaccharide (Zweifachzucker):</strong> Zwei Monosaccharide verknüpft durch eine glycosidische Bindung unter Wasserabspaltung (Kondensation):\n" +
        "  – <strong>Saccharose</strong> (Haushaltszucker) = Glucose + Fructose (α-1,2-glycosidisch)\n" +
        "  – <strong>Lactose</strong> (Milchzucker) = Galactose + Glucose (β-1,4-glycosidisch)\n" +
        "  – <strong>Maltose</strong> (Malzzucker) = Glucose + Glucose (α-1,4-glycosidisch)\n\n" +
        "• <strong>Polysaccharide (Vielfachzucker):</strong> Lange Ketten aus vielen Monosacchariden:\n" +
        "  – <strong>Stärke</strong> (pflanzlicher Energiespeicher): Besteht aus Amylose (unverzweigt, α-1,4-glycosidisch) und Amylopektin (verzweigt, α-1,4- und α-1,6-glycosidisch). Wird durch Amylase gespalten.\n" +
        "  – <strong>Glykogen</strong> (tierischer/menschlicher Energiespeicher): Ähnlich wie Amylopektin, aber stärker verzweigt. Gespeichert vor allem in <strong>Leber</strong> (Blutzuckerregulation) und <strong>Skelettmuskulatur</strong> (lokale Energiereserve).\n" +
        "  – <strong>Cellulose</strong> (pflanzliches Strukturpolysaccharid): Besteht aus β-1,4-glycosidisch verknüpften Glucose-Einheiten. Die β-Verknüpfung führt zu linearen, starren Ketten, die sich zu Fasern zusammenlagern → Zellwand der Pflanzen. Für den Menschen <strong>unverdaulich</strong> (fehlende Cellulase), aber wichtig als Ballaststoff.\n\n" +
        "<strong>Lipide (Fette und fettähnliche Stoffe):</strong>\n" +
        "Lipide sind eine heterogene Gruppe hydrophober Biomoleküle. Wichtige Untergruppen:\n\n" +
        "• <strong>Triglyceride (Triacylglycerole, Neutralfette):</strong> Ester aus <strong>Glycerin</strong> (dreiwertiger Alkohol) und <strong>drei Fettsäuren</strong>. Gesättigte Fettsäuren (keine Doppelbindung) → Fette (fest bei RT, z.B. Butter). Ungesättigte Fettsäuren (eine oder mehrere C=C-Doppelbindungen, cis-Konfiguration → Knick in der Kette) → Öle (flüssig bei RT, z.B. Olivenöl). Triglyceride sind der wichtigste Energiespeicher des Körpers (9 kcal/g, mehr als doppelt so viel wie Kohlenhydrate oder Proteine mit je 4 kcal/g).\n\n" +
        "• <strong>Phospholipide:</strong> Bestehen aus Glycerin, zwei Fettsäuren und einer Phosphatgruppe (mit polarem Kopf). Sie sind <strong>amphiphil</strong> (hydrophiler Kopf + hydrophobe Schwänze) und bilden die Grundstruktur der biologischen <strong>Zellmembran</strong> (Lipiddoppelschicht / Bilayer). Wichtigstes Beispiel: Phosphatidylcholin (Lecithin).\n\n" +
        "• <strong>Steroide:</strong> Besitzen ein Grundgerüst aus vier kondensierten Ringen (Sterangerüst: drei Sechserringe + ein Fünferring). <strong>Cholesterin</strong> ist der wichtigste Vertreter und Ausgangsstoff für: Gallensäuren (Fettverdauung), Steroidhormone (Cortisol, Aldosteron, Testosteron, Östrogen, Progesteron), Vitamin D. Cholesterin ist außerdem ein wichtiger Bestandteil der Zellmembran (moduliert Fluidität).\n\n" +
        "<strong>Proteine (Eiweiße):</strong>\n" +
        "Proteine bestehen aus Aminosäuren, die über <strong>Peptidbindungen</strong> (–CO–NH–) verknüpft sind. Es gibt <strong>20 proteinogene Aminosäuren</strong>, die sich in ihrer Seitenkette (R-Gruppe) unterscheiden: unpolar (z.B. Glycin, Alanin, Valin, Leucin), polar ungeladen (z.B. Serin, Threonin), positiv geladen (Lysin, Arginin, Histidin), negativ geladen (Aspartat, Glutamat). Jede Aminosäure besitzt eine Aminogruppe (–NH₂), eine Carboxylgruppe (–COOH) und ein α-C-Atom (bis auf Glycin alle chiral → L-Konfiguration in der Natur).\n\n" +
        "Die <strong>Peptidbindung</strong> (–CO–NH–) entsteht durch Kondensation zwischen der Carboxylgruppe einer Aminosäure und der Aminogruppe der nächsten unter Wasserabspaltung. Die Peptidbindung ist planar (partieller Doppelbindungscharakter durch Mesomerie) und nicht frei drehbar.\n\n" +
        "Proteinstruktur-Hierarchie:\n" +
        "• <strong>Primärstruktur:</strong> Aminosäuresequenz (Reihenfolge der AS in der Polypeptidkette)\n" +
        "• <strong>Sekundärstruktur:</strong> Lokale Faltungsmuster durch H-Brücken zwischen CO- und NH-Gruppen des Peptidrückgrats → <strong>α-Helix</strong> (schraubenförmig) und <strong>β-Faltblatt</strong> (parallel oder antiparallel)\n" +
        "• <strong>Tertiärstruktur:</strong> Dreidimensionale Gesamtfaltung einer Polypeptidkette, stabilisiert durch Disulfidbrücken (Cystein), hydrophobe Wechselwirkungen, Ionenbindungen, H-Brücken\n" +
        "• <strong>Quartärstruktur:</strong> Zusammenlagerung mehrerer Polypeptidketten (Untereinheiten) zu einem funktionellen Protein (z.B. Hämoglobin: 4 Untereinheiten: 2α + 2β)\n\n" +
        "<strong>Nucleinsäuren (DNA und RNA):</strong>\n" +
        "Nucleinsäuren sind Polymere aus Nukleotiden (Zucker + Phosphat + Base). DNA (Desoxyribonukleinsäure) speichert die genetische Information als Doppelhelix (Basen: A, T, G, C). RNA (Ribonukleinsäure) dient der Umsetzung der genetischen Information (Basen: A, U, G, C, einzelsträngig). Detaillierte Beschreibung siehe Kapitel Genetik.",
      vergleichsTabelle: {
        headers: ["Biomolekül", "Monomer", "Polymer", "Funktion"],
        rows: [
          ["Kohlenhydrate", "Monosaccharide (z.B. Glucose)", "Polysaccharide (Stärke, Glykogen, Cellulose)", "Energielieferant, Strukturbaustein, Energiespeicher"],
          ["Lipide", "Fettsäuren + Glycerin", "Triglyceride, Phospholipide", "Energiespeicher (9 kcal/g), Membranaufbau, Hormone"],
          ["Proteine", "Aminosäuren (20 proteinogene)", "Polypeptide / Proteine", "Enzyme, Struktur, Transport, Immunabwehr, Signale"],
          ["Nucleinsäuren", "Nukleotide (Zucker + Phosphat + Base)", "DNA, RNA", "Speicherung und Übertragung der Erbinformation"],
        ],
      },
      merke:
        "Speicherpolysaccharide: <strong>Stärke</strong> (Pflanzen), <strong>Glykogen</strong> (Tiere/Mensch, v.a. Leber+Muskel). Strukturpolysaccharid: <strong>Cellulose</strong> (β-glycosidische Bindung, für Menschen unverdaulich!).",
      klinik:
        "Laktoseintoleranz: Mangel an Laktase → Lactose kann nicht in Glucose + Galactose gespalten werden → osmotische Diarrhö, Blähungen.",
    },

    // ──────────────────────────────────────────────
    // 4. Enzyme & Reaktionskinetik
    // ──────────────────────────────────────────────
    {
      heading: "Enzyme & Reaktionskinetik",
      content:
        "Enzyme sind <strong>biologische Katalysatoren</strong>, die nahezu alle biochemischen Reaktionen im Organismus beschleunigen. Chemisch gesehen sind die meisten Enzyme Proteine (Ausnahme: Ribozyme = katalytische RNA). Sie senken die <strong>Aktivierungsenergie</strong> einer Reaktion, ohne das thermodynamische Gleichgewicht zu verändern und ohne selbst verbraucht zu werden.\n\n" +
        "<strong>Substratspezifität und Modelle:</strong>\n" +
        "Enzyme binden ihr Substrat an einer spezifischen Region, dem <strong>aktiven Zentrum</strong>. Zwei Modelle beschreiben diese Wechselwirkung:\n" +
        "• <strong>Schlüssel-Schloss-Prinzip</strong> (Emil Fischer, 1894): Substrat und aktives Zentrum passen genau zusammen wie ein Schlüssel in ein Schloss — starre Komplementarität.\n" +
        "• <strong>Induced-Fit-Modell</strong> (Daniel Koshland, 1958): Das aktive Zentrum passt sich bei Substratbindung an — flexible, induzierte Komplementarität. Dieses Modell beschreibt die Realität besser, da Enzyme dynamische Strukturen sind.\n\n" +
        "<strong>Michälis-Menten-Kinetik:</strong>\n" +
        "Die Beziehung zwischen Substratkonzentration [S] und Reaktionsgeschwindigkeit v wird durch die Michälis-Menten-Gleichung beschrieben:\n\n" +
        "<strong>v = V<sub>max</sub> · [S] / (K<sub>m</sub> + [S])</strong>\n\n" +
        "Dabei ist:\n" +
        "• <strong>V<sub>max</sub></strong> = maximale Reaktionsgeschwindigkeit (bei Substratsättigung, alle Enzym-Bindungsstellen besetzt)\n" +
        "• <strong>K<sub>m</sub></strong> (Michälis-Konstante) = diejenige Substratkonzentration, bei der die Reaktionsgeschwindigkeit genau <strong>½V<sub>max</sub></strong> beträgt\n" +
        "• K<sub>m</sub> ist ein Maß für die <strong>Affinität</strong> des Enzyms zum Substrat: <strong>kleines K<sub>m</sub> = hohe Affinität</strong> (das Enzym erreicht schon bei niedrigen [S] die Halbmaximale Geschwindigkeit), großes K<sub>m</sub> = niedrige Affinität\n\n" +
        "Die Michälis-Menten-Kurve hat eine hyperbolische Form: Bei niedrigen [S] steigt v nahezu linear, bei hohen [S] nähert sich v asymptotisch V<sub>max</sub> an (Sättigungskinetik).\n\n" +
        "<strong>Enzymhemmung (Inhibition):</strong>\n" +
        "Die Enzymaktivität kann durch Inhibitoren herabgesetzt werden. Man unterscheidet zwei Haupttypen:\n\n" +
        "• <strong>Kompetitive Hemmung:</strong> Der Inhibitor ähnelt strukturell dem Substrat und bindet reversibel an das <strong>aktive Zentrum</strong> des Enzyms. Substrat und Inhibitor konkurrieren um dieselbe Bindungsstelle. Auswirkung: <strong>K<sub>m</sub> steigt</strong> (scheinbar geringere Affinität, da höhere [S] nötig für ½V<sub>max</sub>), aber <strong>V<sub>max</sub> bleibt gleich</strong> (bei genügend hoher [S] verdrängt das Substrat den Inhibitor vollständig). Klinisches Beispiel: Methotrexat hemmt kompetitiv die Dihydrofolatreduktase (Krebstherapie).\n\n" +
        "• <strong>Nicht-kompetitive Hemmung:</strong> Der Inhibitor bindet an eine <strong>andere Stelle</strong> als das aktive Zentrum (allosterische Stelle), sowohl am freien Enzym als auch am Enzym-Substrat-Komplex. Die Konformation des Enzyms wird verändert, sodass die katalytische Aktivität sinkt. Auswirkung: <strong>K<sub>m</sub> bleibt gleich</strong> (die Substratbindung wird nicht beeinflusst), aber <strong>V<sub>max</sub> sinkt</strong> (weniger funktionsfähige Enzym-Moleküle). Durch Substratüberschuss <strong>nicht aufhebbar</strong>. Klinisches Beispiel: Schwermetalle (Blei, Quecksilber) hemmen viele Enzyme nicht-kompetitiv.\n\n" +
        "<strong>Allosterische Regulation:</strong> Viele Enzyme besitzen neben dem aktiven Zentrum weitere Bindungsstellen (allosterische Zentren). Allosterische Aktivatoren erhöhen die Enzymaktivität, allosterische Inhibitoren verringern sie. Allosterische Enzyme zeigen oft eine sigmoide (S-förmige) statt hyperbolische Kinetik und folgen <strong>nicht</strong> der klassischen Michälis-Menten-Gleichung. Beispiel: Phosphofructokinase-1 (Schlüsselenzym der Glykolyse) wird allosterisch durch ATP gehemmt und durch AMP/ADP aktiviert.\n\n" +
        "<strong>Cofaktoren und Coenzyme:</strong> Viele Enzyme benötigen zusätzliche nicht-proteinogene Komponenten für ihre Aktivität:\n" +
        "• <strong>Cofaktoren:</strong> Anorganische Ionen (z.B. Mg²⁺, Zn²⁺, Fe²⁺/Fe³⁺)\n" +
        "• <strong>Coenzyme:</strong> Organische Moleküle, oft von Vitaminen abgeleitet (z.B. NAD⁺ von Vitamin B3/Niacin, FAD von Vitamin B2/Riboflavin, Coenzym A von Vitamin B5/Pantothensäure). Coenzyme übertragen Elektronen, funktionelle Gruppen oder Energie.\n" +
        "• Holönzym = Apönzym (Proteinteil) + Cofaktor/Coenzym (nur das Holönzym ist katalytisch aktiv)\n\n" +
        "<strong>Enzymklassifikation:</strong> Enzyme werden nach der katalysierten Reaktion in sechs Hauptklassen eingeteilt: Oxidoreduktasen (Redoxreaktionen), Transferasen (Gruppenübertragung), Hydrolasen (hydrolytische Spaltung), Lyasen (nicht-hydrolytische Spaltung/Addition), Isomerasen (Isomerisierung), Ligasen (Verknüpfung unter ATP-Verbrauch).",
      vergleichsTabelle: {
        headers: ["Eigenschaft", "Kompetitive Hemmung", "Nicht-kompetitive Hemmung"],
        rows: [
          ["Angriffspunkt", "Aktives Zentrum (gleiche Stelle wie Substrat)", "Allosterische Stelle (andere Stelle als Substrat)"],
          ["Km", "Erhöht (↑)", "Unverändert (=)"],
          ["Vmax", "Unverändert (=)", "Erniedrigt (↓)"],
          ["Aufhebbar durch Substratüberschuss", "Ja (Substrat verdrängt Inhibitor)", "Nein (Inhibitor bindet unabhängig vom Substrat)"],
        ],
      },
      merke:
        "Michälis-Menten: Km = <strong>Substratkonzentration bei ½Vmax</strong>. Kleines Km = hohe Affinität! Kompetitiv: Inhibitor am aktiven Zentrum → Km↑, Vmax gleich. Nicht-kompetitiv: anderer Ort → Km gleich, Vmax↓.",
    },

    // ──────────────────────────────────────────────
    // 5. Zellulärer Stoffwechsel
    // ──────────────────────────────────────────────
    {
      heading: "Zellulärer Stoffwechsel",
      content:
        "Der zelluläre Energiestoffwechsel beschreibt die Prozesse, durch die Zellen Energie aus Nährstoffen (v.a. Glucose) gewinnen und in Form von <strong>ATP</strong> (Adenosintriphosphat) speichern. ATP ist die universelle Energiewährung der Zelle. Die ärobe Zellatmung umfasst vier Stufen: Glykolyse, Pyruvat-Dehydrogenase-Reaktion, Citratzyklus und Atmungskette.\n\n" +
        "<strong>1. Glykolyse (Cytoplasma):</strong>\n" +
        "Die Glykolyse (griech. \"Zuckerspaltung\") ist der erste Schritt des Glucoseabbaus und findet im <strong>Cytoplasma</strong> statt. Sie läuft sowohl ärob als auch anärob ab und benötigt <strong>keinen Sauerstoff</strong>.\n\n" +
        "Gesamtreaktion: <strong>Glucose → 2 Pyruvat + 2 ATP + 2 NADH</strong>\n\n" +
        "Die Glykolyse gliedert sich in zwei Phasen:\n" +
        "• Vorbereitungsphase (Investitionsphase): Glucose wird phosphoryliert und in 2 Moleküle Glycerinaldehyd-3-phosphat (G3P) gespalten. Verbrauch: 2 ATP.\n" +
        "• Ertragsphase: Jedes G3P wird zu Pyruvat oxidiert. Gewinn: 4 ATP (Substratkettenphosphorylierung) + 2 NADH.\n" +
        "• Netto: 4 ATP - 2 ATP = <strong>2 ATP</strong> + 2 NADH pro Glucose.\n\n" +
        "Schlüsselenzyme der Glykolyse: Hexokinase (Schritt 1), Phosphofructokinase-1 (PFK-1, Schritt 3 — Schrittmacherenzym, allosterisch reguliert), Pyruvatkinase (Schritt 10).\n\n" +
        "<strong>2. Pyruvat-Dehydrogenase-Reaktion (Mitochondrien-Matrix):</strong>\n" +
        "Unter äroben Bedingungen wird Pyruvat in die Mitochondrien-Matrix transportiert und dort durch den Pyruvat-Dehydrogenase-Komplex (PDH) oxidativ decarboxyliert:\n\n" +
        "<strong>Pyruvat + NAD⁺ + CoA → Acetyl-CoA + CO₂ + NADH</strong>\n\n" +
        "Dieser irreversible Schritt verbindet die Glykolyse mit dem Citratzyklus. Pro Glucose entstehen 2 Acetyl-CoA, 2 CO₂ und 2 NADH. Der PDH-Komplex benötigt fünf Coenzyme: Thiaminpyrophosphat (TPP, Vitamin B1), Lipoamid, FAD (Vitamin B2), NAD⁺ (Vitamin B3) und Coenzym A (Vitamin B5).\n\n" +
        "<strong>3. Citratzyklus (Krebs-Zyklus, Mitochondrien-Matrix):</strong>\n" +
        "Der Citratzyklus findet in der <strong>Mitochondrien-Matrix</strong> statt und ist der zentrale Drehpunkt des Stoffwechsels, an dem Kohlenhydrate, Fette und Proteine abgebaut werden.\n\n" +
        "Pro Durchgang (1 Acetyl-CoA): <strong>2 CO₂ + 3 NADH + 1 FADH₂ + 1 GTP (≈ 1 ATP)</strong>\n\n" +
        "Pro Glucose (2 Durchgänge): <strong>4 CO₂ + 6 NADH + 2 FADH₂ + 2 ATP</strong>\n\n" +
        "Ablauf: Acetyl-CoA (2C) wird mit Oxalacetat (4C) zu Citrat (6C) kondensiert. In den folgenden Schritten werden zwei CO₂ abgespalten und Reduktionsäquivalente (NADH, FADH₂) gebildet. Am Ende wird Oxalacetat regeneriert — der Zyklus kann erneut beginnen. Schlüsselenzyme: Citratsynthase, Isocitrat-Dehydrogenase (Schrittmacher), α-Ketoglutarat-Dehydrogenase.\n\n" +
        "<strong>4. Atmungskette und oxidative Phosphorylierung (innere Mitochondrienmembran):</strong>\n" +
        "Die Atmungskette ist die letzte und energiereichste Stufe der Zellatmung. Sie findet an der <strong>inneren Mitochondrienmembran</strong> statt und benötigt <strong>Sauerstoff</strong> als terminalen Elektronenakzeptor.\n\n" +
        "Die Reduktionsäquivalente NADH und FADH₂ geben ihre Elektronen an eine Kette von vier Proteinkomplexen (Komplex I–IV) und zwei mobile Elektronenträger (Ubichinon/Coenzym Q und Cytochrom c) ab:\n" +
        "• Komplex I (NADH-Dehydrogenase): NADH → Ubichinon. Pumpt 4 H⁺.\n" +
        "• Komplex II (Succinat-Dehydrogenase): FADH₂ → Ubichinon. Pumpt keine H⁺.\n" +
        "• Komplex III (Cytochrom-bc₁-Komplex): Ubichinon → Cytochrom c. Pumpt 4 H⁺.\n" +
        "• Komplex IV (Cytochrom-c-Oxidase): Cytochrom c → O₂ → H₂O. Pumpt 2 H⁺.\n\n" +
        "Die Komplexe I, III und IV pumpen Protonen (H⁺) aus der Matrix in den Intermembranraum und erzeugen so einen <strong>Protonengradienten</strong> (elektrochemischer Gradient, protonenmotorische Kraft). Die <strong>ATP-Synthase</strong> (Komplex V) nutzt den Rückstrom der Protonen in die Matrix, um ATP aus ADP + Pᵢ zu synthetisieren (chemiosmotisches Prinzip nach Peter Mitchell). Pro NADH entstehen ca. <strong>2,5 ATP</strong>, pro FADH₂ ca. <strong>1,5 ATP</strong>.\n\n" +
        "<strong>Gesamtbilanz der äroben Zellatmung (pro Glucose):</strong>\n" +
        "• Glykolyse: <strong>2 ATP</strong> + 2 NADH\n" +
        "• PDH-Reaktion: 2 NADH\n" +
        "• Citratzyklus: <strong>2 ATP</strong> + 6 NADH + 2 FADH₂\n" +
        "• Atmungskette: 10 NADH × 2,5 = 25 ATP + 2 FADH₂ × 1,5 = 3 ATP → ca. <strong>28–34 ATP</strong>\n" +
        "• <strong>Gesamt: ca. 30–38 ATP pro Glucose</strong> (je nach Shuttle-System für cytosolisches NADH: Malat-Aspartat-Shuttle → 2,5 ATP, Glycerin-3-Phosphat-Shuttle → 1,5 ATP). Der klassisch genannte Wert beträgt <strong>~38 ATP</strong>.\n\n" +
        "<strong>Anärobe Glykolyse (Milchsäuregärung):</strong>\n" +
        "Bei Sauerstoffmangel (z.B. intensive Muskelarbeit) kann NADH nicht über die Atmungskette reoxidiert werden. Um die Glykolyse aufrechtzürhalten, wird Pyruvat durch die <strong>Laktatdehydrogenase (LDH)</strong> zu <strong>Laktat</strong> reduziert — dabei wird NADH zu NAD⁺ reoxidiert, das die Glykolyse erneut benötigt.\n\n" +
        "Pyruvat + NADH → Laktat + NAD⁺\n\n" +
        "Die anärobe Glykolyse liefert nur <strong>2 ATP</strong> pro Glucose — deutlich weniger als die ärobe Zellatmung (~38 ATP), aber sie ermöglicht eine schnelle Energiebereitstellung unter O₂-Mangel. Erythrozyten (keine Mitochondrien!) gewinnen ihre Energie ausschließlich über anärobe Glykolyse.\n\n" +
        "<strong>Alkoholische Gärung (Hefen):</strong> Pyruvat → Acetaldehyd + CO₂ → Ethanol + NAD⁺ (bei Hefen; nicht beim Menschen).",
      merke:
        "ATP-Bilanz pro Glucose: Glykolyse <strong>2 ATP</strong>, Citratzyklus <strong>2 ATP</strong>, Atmungskette <strong>~34 ATP</strong> = Gesamt <strong>~38 ATP</strong>. Ohne Sauerstoff: nur 2 ATP (anärobe Glykolyse → Laktat).",
      altfrage:
        "\"Wo findet die Atmungskette statt?\" → An der <strong>inneren Mitochondrienmembran</strong>. Glykolyse = Cytoplasma, Citratzyklus = Mitochondrien-Matrix.",
      klinik:
        "Cyanid-Vergiftung: Cyanid blockiert Komplex IV der Atmungskette → kein O₂-Verbrauch → keine ATP-Produktion → rasch tödlich. Antidot: Hydroxocobalamin.",
    },
  ],

  keyFacts: [
    {
      label: "Alkane",
      value: "CₙH₂ₙ₊₂ (gesättigte KW, Einfachbindungen, Endung -an)",
    },
    {
      label: "Oxidationsreihe",
      value: "Alkohol → Aldehyd → Carbonsäure",
    },
    {
      label: "Glucose",
      value: "C₆H₁₂O₆ (Aldohexose, zentrales Molekül des Energiestoffwechsels)",
    },
    {
      label: "Speicherpolysaccharide",
      value: "Stärke = pflanzlich, Glykogen = tierisch (Leber + Muskel)",
    },
    {
      label: "Km (Michälis-Konstante)",
      value: "[S] bei ½Vmax — kleines Km = hohe Affinität",
    },
    {
      label: "Glykolyse",
      value: "2 ATP netto (Cytoplasma, auch anärob möglich)",
    },
    {
      label: "Citratzyklus",
      value: "2 ATP + 6 NADH + 2 FADH₂ (Mitochondrien-Matrix)",
    },
    {
      label: "Atmungskette",
      value: "~34 ATP (innere Mitochondrienmembran, O₂ als Elektronenakzeptor)",
    },
    {
      label: "Gesamtbilanz ärob",
      value: "~38 ATP pro Glucose (Glykolyse + Citratzyklus + Atmungskette)",
    },
    {
      label: "Peptidbindung",
      value: "–CO–NH– (Verknüpfung von Aminosäuren, planar, nicht frei drehbar)",
    },
  ],

  selfTestQuestions: [
    {
      question: "Wie lautet die allgemeine Summenformel der Alkane?",
      options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙHₙ", "CₙH₂ₙ₊₁"],
      correctIndex: 1,
      explanation:
        "Alkane haben die Formel CₙH₂ₙ₊₂ (gesättigte KW). Alkene: CₙH₂ₙ, Alkine: CₙH₂ₙ₋₂.",
    },
    {
      question: "Was entsteht bei der Oxidation eines primären Alkohols?",
      options: ["Keton", "Ether", "Aldehyd", "Ester", "Amin"],
      correctIndex: 2,
      explanation:
        "Primärer Alkohol wird zum Aldehyd oxidiert (und weiter zur Carbonsäure). Sekundärer Alkohol → Keton.",
    },
    {
      question:
        "Welches Polysaccharid dient als Energiespeicher im Tier?",
      options: ["Stärke", "Cellulose", "Glykogen", "Chitin", "Saccharose"],
      correctIndex: 2,
      explanation:
        "Glykogen ist der tierische/menschliche Energiespeicher (Leber + Muskel). Stärke ist der pflanzliche Speicher. Cellulose ist ein Strukturpolysaccharid.",
    },
    {
      question: "Wo findet die Glykolyse statt?",
      options: [
        "Mitochondrien-Matrix",
        "Innere Mitomembran",
        "Zellkern",
        "Cytoplasma",
        "Glattes ER",
      ],
      correctIndex: 3,
      explanation:
        "Die Glykolyse findet im Cytoplasma statt. Citratzyklus = Mito-Matrix, Atmungskette = innere Mitomembran.",
    },
    {
      question: "Bei kompetitiver Hemmung...",
      options: [
        "sinkt Vmax",
        "steigt Km",
        "sinkt Km",
        "steigen Km und Vmax",
        "ändert sich nichts",
      ],
      correctIndex: 1,
      explanation:
        "Bei kompetitiver Hemmung konkurriert der Inhibitor mit dem Substrat um das aktive Zentrum. Km steigt (scheinbar geringere Affinität), aber Vmax bleibt gleich (genug Substrat verdrängt den Inhibitor).",
    },
  ],

  summary: [
    "Kohlenwasserstoffe: Alkane (CₙH₂ₙ₊₂, Einfachbindung, -an), Alkene (CₙH₂ₙ, Doppelbindung, -en, cis/trans-Isomerie), Alkine (CₙH₂ₙ₋₂, Dreifachbindung, -in). IUPAC-Nomenklatur: längste Kette + Substitünten + Nummerierung.",
    "Funktionelle Gruppen bestimmen die Reaktivität: Alkohol (-OH), Aldehyd (-CHO), Keton (>C=O), Carbonsäure (-COOH), Ester (-COO-), Amin (-NH₂), Amid (-CONH₂), Ether (-O-). Oxidationsreihe: Alkohol → Aldehyd → Carbonsäure.",
    "Biomoleküle: Kohlenhydrate (Mono-, Di-, Polysaccharide), Lipide (Triglyceride, Phospholipide, Steroide), Proteine (20 AS, Peptidbindung, 4 Strukturebenen), Nucleinsäuren (DNA/RNA).",
    "Enzyme sind biologische Katalysatoren mit Substratspezifität (Induced-Fit). Michälis-Menten: v = Vmax·[S]/(Km+[S]). Kompetitive Hemmung: Km↑, Vmax=. Nicht-kompetitive Hemmung: Km=, Vmax↓.",
    "Zellatmung: Glykolyse (Cytoplasma, 2 ATP) → PDH → Citratzyklus (Mito-Matrix, 2 ATP) → Atmungskette (innere Mitomembran, ~34 ATP) = ~38 ATP pro Glucose ärob. Anärob: nur 2 ATP (Laktat).",
  ],
};
