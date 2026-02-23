export const fragenPart2 = [
  {
    id: "ch-q-051",
    stichwortId: "ch-6-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Bindungsart liegt in Natriumchlorid (NaCl) vor?",
    optionen: [
      "Kovalente Bindung",
      "Ionenbindung",
      "Metallbindung",
      "Wasserstoffbrückenbindung",
      "Van-der-Waals-Bindung",
    ],
    korrekteAntwort: 1,
    erklärung:
      "NaCl ist ein Salz, das durch Elektronenübertragung von Natrium (Metall) auf Chlor (Nichtmetall) entsteht. Dabei bilden sich Na⁺- und Cl⁻-Ionen, die sich durch elektrostatische Anziehung zu einem Ionengitter verbinden.",
    strategieTipp:
      "Merke: Verbindungen zwischen Metallen und Nichtmetallen sind typischerweise Ionenverbindungen. Die große Elektronegativitätsdifferenz (ΔEN > 1,7) ist ein klares Indiz.",
  },
  {
    id: "ch-q-052",
    stichwortId: "ch-6-01",
    fach: "chemie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Welche Bindung ist die stärkste zwischen zwei Wassermolekülen?",
    optionen: [
      "Ionenbindung",
      "Van-der-Waals-Kräfte",
      "Wasserstoffbrückenbindung",
      "Kovalente Bindung",
      "Metallbindung",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Zwischen Wassermolekülen bilden sich Wasserstoffbrückenbindungen aus, da Wasserstoff an das stark elektronegative Sauerstoffatom gebunden ist. Diese sind stärker als Van-der-Waals-Kräfte, aber schwächer als kovalente Bindungen innerhalb eines Moleküls.",
    strategieTipp:
      "Wasserstoffbrücken entstehen bei H-F, H-O und H-N Bindungen. Sie sind intermolekulare Kräfte mittlerer Stärke und für viele Eigenschaften von Wasser verantwortlich.",
  },
  {
    id: "ch-q-053",
    stichwortId: "ch-6-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Die Elektronegativitätsdifferenz zwischen zwei Atomen beträgt 0,4. Welche Bindungsart ist zu erwarten?",
    optionen: [
      "Reine Ionenbindung",
      "Stark polare kovalente Bindung",
      "Schwach polare kovalente Bindung",
      "Metallbindung",
      "Keine Bindung möglich",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Bei ΔEN < 0,5 liegt eine unpolare bis schwach polare kovalente Bindung vor. Die Elektronen werden annähernd gleichmäßig geteilt. Ionenbindungen erfordern ΔEN > 1,7, stark polare kovalente Bindungen ΔEN zwischen 0,5 und 1,7.",
    strategieTipp:
      "Faustregel: ΔEN < 0,5 = unpolar; 0,5-1,7 = polar kovalent; > 1,7 = ionisch. Diese Grenzen sind fließend und dienen zur Orientierung.",
  },
  {
    id: "ch-q-054",
    stichwortId: "ch-6-01",
    fach: "chemie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Welche Aussage über Metallbindungen ist FALSCH?",
    optionen: [
      "Valenzelektronen sind delokalisiert",
      "Metallbindungen ermöglichen elektrische Leitfähigkeit",
      "Die Bindung ist gerichtet wie bei kovalenten Bindungen",
      'Metallatome geben Elektronen in ein "Elektronengas" ab',
      "Metallbindungen sind ungerichtet",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Metallbindungen sind NICHT gerichtet, sondern ungerichtet. Dies unterscheidet sie von kovalenten Bindungen. Die Valenzelektronen bilden ein delokalisiertes Elektronengas, das sich frei zwischen den Metallatomrümpfen bewegt.",
    strategieTipp:
      "Die Ungerichtetheit der Metallbindung erklärt die Verformbarkeit von Metallen. Bei kovalenten Bindungen sind die Elektronen zwischen bestimmten Atomen lokalisiert.",
  },
  {
    id: "ch-q-055",
    stichwortId: "ch-6-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welches Molekül weist Dipol-Charakter auf?",
    optionen: ["CO₂", "CH₄", "H₂O", "CCl₄", "N₂"],
    korrekteAntwort: 2,
    erklärung:
      "H₂O ist ein Dipol-Molekül durch die gewinkelte Struktur und die unterschiedliche Elektronegativität von O und H. CO₂, CH₄ und CCl₄ sind symmetrisch und daher unpolar, N₂ ist homonuklear.",
    strategieTipp:
      "Ein Molekül ist polar, wenn polare Bindungen vorliegen UND die Molekülgeometrie asymmetrisch ist. Symmetrie kann Dipole aufheben.",
  },
  {
    id: "ch-q-056",
    stichwortId: "ch-6-01",
    fach: "chemie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Welche intermolekulare Kraft ist am schwächsten?",
    optionen: [
      "Ionenbindung",
      "Wasserstoffbrückenbindung",
      "Van-der-Waals-Kräfte",
      "Kovalente Bindung",
      "Metallbindung",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Van-der-Waals-Kräfte (London-Dispersionskräfte) sind die schwächsten intermolekularen Wechselwirkungen. Sie beruhen auf temporären Dipolen und treten bei allen Molekülen auf.",
    strategieTipp:
      "Bindungsstärke (absteigend): Ionenbindung ≈ kovalente Bindung > Metallbindung > Wasserstoffbrücken > Van-der-Waals-Kräfte.",
  },
  {
    id: "ch-q-057",
    stichwortId: "ch-6-01",
    fach: "chemie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "In welcher Verbindung ist die Elektronegativitätsdifferenz am größten?",
    optionen: ["HCl", "NaCl", "CsF", "H₂O", "NH₃"],
    korrekteAntwort: 2,
    erklärung:
      "CsF hat die größte ΔEN, da Cäsium das elektropositivste Element (niedrigste EN ≈ 0,7) und Fluor das elektronegativste Element (höchste EN = 4,0) ist. ΔEN(CsF) ≈ 3,3.",
    strategieTipp:
      "Fluor hat die höchste Elektronegativität (4,0), Francium/Cäsium die niedrigste. Die Kombination aus beiden Extremen ergibt die größte Differenz.",
  },
  {
    id: "ch-q-058",
    stichwortId: "ch-6-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Bindung liegt innerhalb eines Stickstoffmoleküls (N₂) vor?",
    optionen: [
      "Einfachbindung",
      "Doppelbindung",
      "Dreifachbindung",
      "Ionenbindung",
      "Wasserstoffbrückenbindung",
    ],
    korrekteAntwort: 2,
    erklärung:
      "N₂ enthält eine sehr stabile Dreifachbindung (N≡N). Jedes Stickstoffatom teilt drei Elektronenpaare mit dem anderen, um die Oktettregel zu erfüllen. Dies macht N₂ sehr reaktionsträge.",
    strategieTipp:
      "Die hohe Stabilität der N≡N-Bindung erklärt die chemische Inertheit von Luftstickstoff und die hohe Energie, die bei Sprengstoffreaktionen frei wird.",
  },
  {
    id: "ch-q-059",
    stichwortId: "ch-6-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Eigenschaft ist NICHT typisch für Ionenverbindungen?",
    optionen: [
      "Hoher Schmelzpunkt",
      "Spröde Kristalle",
      "Elektrische Leitfähigkeit in Lösung",
      "Gute elektrische Leitfähigkeit im festen Zustand",
      "Wasserlöslichkeit (oft)",
    ],
    korrekteAntwort: 3,
    erklärung:
      "Ionenverbindungen leiten im festen Zustand NICHT, da die Ionen im Gitter fixiert sind. Erst in Lösung oder Schmelze werden die Ionen beweglich und ermöglichen Stromleitung.",
    strategieTipp:
      "Merke: Ionen müssen beweglich sein für Leitfähigkeit. Im Festkörper → keine Leitung; in Lösung/Schmelze → Leitung.",
  },
  {
    id: "ch-q-060",
    stichwortId: "ch-6-01",
    fach: "chemie" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Ein Molekül hat polare Bindungen, ist aber selbst unpolar. Welche Erklärung trifft zu?",
    optionen: [
      "Die Elektronegativitäten sind identisch",
      "Es liegt keine kovalente Bindung vor",
      "Die Dipolmomente heben sich durch Symmetrie auf",
      "Das Molekül ist ionisch",
      "Wasserstoffbrücken neutralisieren die Polarität",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Bei symmetrischen Molekülen wie CO₂ oder CCl₄ heben sich die einzelnen Bindungsdipole vektoriell auf, sodass kein resultierendes Dipolmoment entsteht. Die Bindungen sind polar, das Molekül jedoch nicht.",
    strategieTipp:
      "Molekülpolarität = Kombination aus Bindungspolarität und Geometrie. Lineare oder symmetrische Strukturen führen oft zu unpolaren Molekülen trotz polarer Bindungen.",
  },
  {
    id: "ch-q-061",
    stichwortId: "ch-6-01",
    fach: "chemie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Welche Bindungsart tritt bei Edelgasen untereinander auf?",
    optionen: [
      "Ionenbindung",
      "Kovalente Bindung",
      "Van-der-Waals-Kräfte",
      "Wasserstoffbrückenbindung",
      "Metallbindung",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Edelgase sind Einzelatome mit abgeschlossener Elektronenschale. Zwischen ihnen wirken nur schwache Van-der-Waals-Kräfte (London-Dispersionskräfte), weshalb sie sehr niedrige Siedepunkte haben.",
    strategieTipp:
      "Edelgase gehen keine chemischen Bindungen ein. Die schwachen Van-der-Waals-Kräfte nehmen mit der Atommasse zu (Xe hat höheren Siedepunkt als He).",
  },
  {
    id: "ch-q-062",
    stichwortId: "ch-6-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Warum hat Wasser einen ungewöhnlich hohen Siedepunkt für seine Molekülmasse?",
    optionen: [
      "Starke kovalente Bindungen",
      "Ionische Struktur",
      "Ausbildung von Wasserstoffbrücken",
      "Van-der-Waals-Kräfte",
      "Metallischer Charakter",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Die Wasserstoffbrückenbindungen zwischen H₂O-Molekülen erfordern zusätzliche Energie zum Aufbrechen beim Sieden. Ohne diese Brücken würde Wasser bei ca. -80°C sieden (Vergleich: H₂S bei -60°C).",
    strategieTipp:
      "Wasserstoffbrücken erklären viele anomale Eigenschaften von Wasser: hoher Siedepunkt, hohe Verdampfungswärme, Dichteanomalie.",
  },
  {
    id: "ch-q-063",
    stichwortId: "ch-6-01",
    fach: "chemie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Welche Aussage über die Elektronegativität ist korrekt?",
    optionen: [
      "Sie nimmt im Periodensystem von links nach rechts ab",
      "Sie ist für alle Elemente einer Hauptgruppe identisch",
      "Sie nimmt innerhalb einer Periode von links nach rechts zu",
      "Metalle haben höhere EN als Nichtmetalle",
      "Sie ist ein Maß für die Atommasse",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Die Elektronegativität nimmt im Periodensystem von links nach rechts zu (zunehmende Kernladung) und von oben nach unten ab (größerer Atomradius). Fluor ist das elektronegativste Element.",
    strategieTipp:
      "Trends im PSE: EN steigt nach rechts und nach oben. Ecke oben rechts (F, O, N) = höchste EN; Ecke unten links (Cs, Fr) = niedrigste EN.",
  },
  {
    id: "ch-q-064",
    stichwortId: "ch-6-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Bei welcher Verbindung liegt eine polare Atombindung vor?",
    optionen: ["H₂", "Cl₂", "HCl", "NaCl", "O₂"],
    korrekteAntwort: 2,
    erklärung:
      "HCl hat eine polare Atombindung (ΔEN ≈ 0,9), da Chlor elektronegativer ist als Wasserstoff. H₂, Cl₂ und O₂ sind unpolare kovalente Bindungen, NaCl ist ionisch.",
    strategieTipp:
      "Polare Atombindungen entstehen bei ΔEN zwischen 0,5 und 1,7. Bei homonuklearen Molekülen (H₂, Cl₂) ist ΔEN = 0.",
  },
  {
    id: "ch-q-065",
    stichwortId: "ch-6-01",
    fach: "chemie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Welches Element bildet die stärksten Wasserstoffbrücken?",
    optionen: ["Kohlenstoff", "Stickstoff", "Sauerstoff", "Fluor", "Chlor"],
    korrekteAntwort: 3,
    erklärung:
      "Fluor bildet die stärksten Wasserstoffbrücken, da es das elektronegativste Element ist. HF hat daher trotz kleiner Molekülmasse einen relativ hohen Siedepunkt.",
    strategieTipp:
      "Wasserstoffbrücken-Stärke: HF > H₂O > NH₃. Je elektronegativer das Atom, desto stärker die H-Brücke.",
  },
  {
    id: "ch-q-066",
    stichwortId: "ch-6-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Molekülgeometrie hat Methan (CH₄)?",
    optionen: ["Linear", "Gewinkelt", "Trigonal planar", "Tetraedrisch", "Trigonal pyramidal"],
    korrekteAntwort: 3,
    erklärung:
      "Methan hat eine tetraedrische Geometrie mit Bindungswinkeln von 109,5°. Die vier C-H-Bindungen sind räumlich gleichmäßig verteilt, wodurch CH₄ unpolar ist.",
    strategieTipp:
      "VSEPR-Theorie: 4 bindende Elektronenpaare ohne freie Paare → Tetraeder. Dies ist die optimale räumliche Anordnung zur Minimierung der Abstoßung.",
  },
  {
    id: "ch-q-067",
    stichwortId: "ch-6-01",
    fach: "chemie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Welche Bindungslänge ist am kürzesten?",
    optionen: [
      "C-C Einfachbindung",
      "C=C Doppelbindung",
      "C≡C Dreifachbindung",
      "Alle gleich lang",
      "Hängt nur von der Temperatur ab",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Dreifachbindungen sind kürzer als Doppelbindungen, diese wiederum kürzer als Einfachbindungen. Mehr Bindungselektronen ziehen die Atome stärker zusammen. C≡C ≈ 120 pm, C=C ≈ 134 pm, C-C ≈ 154 pm.",
    strategieTipp:
      "Faustregel: Je mehr Bindungen, desto kürzer und stärker die Bindung. Dies gilt generell für alle Elemente.",
  },
  {
    id: "ch-q-068",
    stichwortId: "ch-6-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Warum ist Graphit elektrisch leitfähig, Diamant aber nicht?",
    optionen: [
      "Graphit enthält Metallatome",
      "Graphit hat delokalisierte Elektronen in den Schichten",
      "Diamant ist ionisch gebunden",
      "Graphit ist reiner als Diamant",
      "Diamant hat eine höhere Dichte",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Graphit hat eine Schichtstruktur, in der jedes C-Atom drei kovalente Bindungen eingeht. Das vierte Valenzelektron ist delokalisiert und kann sich frei bewegen. Diamant hat nur lokalisierte kovalente Bindungen.",
    strategieTipp:
      "Allotrope des Kohlenstoffs zeigen unterschiedliche Eigenschaften: Graphit (sp²) → leitend, weich; Diamant (sp³) → isolierend, hart.",
  },
  {
    id: "ch-q-069",
    stichwortId: "ch-7-01",
    fach: "chemie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Wie lautet das chemische Symbol für Natrium?",
    optionen: ["N", "Na", "Nt", "S", "So"],
    korrekteAntwort: 1,
    erklärung:
      'Das chemische Symbol für Natrium ist Na (vom lateinischen "Natrium"). N steht für Stickstoff (Nitrogen), S für Schwefel (Sulfur).',
    strategieTipp:
      "Viele Elementsymbole leiten sich von lateinischen Namen ab: Na (Natrium), K (Kalium), Fe (Ferrum), Cu (Cuprum), Ag (Argentum).",
  },
  {
    id: "ch-q-070",
    stichwortId: "ch-7-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Wie viele Mol Sauerstoff (O₂) sind in 64 g enthalten? (Atommasse O = 16 u)",
    optionen: ["1 mol", "2 mol", "4 mol", "8 mol", "16 mol"],
    korrekteAntwort: 1,
    erklärung:
      "Die molare Masse von O₂ beträgt 2 × 16 g/mol = 32 g/mol. n = m/M = 64 g / 32 g/mol = 2 mol.",
    strategieTipp:
      "Grundformel: n = m/M. Achte darauf, die molare Masse des Moleküls (nicht des Atoms) zu verwenden. O₂ hat doppelte Masse von O.",
  },
  {
    id: "ch-q-071",
    stichwortId: "ch-7-01",
    fach: "chemie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was gibt die Avogadro-Konstante an?",
    optionen: [
      "Die Anzahl der Protonen in einem Atom",
      "Die Anzahl der Teilchen in einem Mol",
      "Die Masse eines Moleküls",
      "Die Dichte eines Stoffes",
      "Die Temperatur am absoluten Nullpunkt",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Die Avogadro-Konstante NA = 6,022 × 10²³ mol⁻¹ gibt die Anzahl der Teilchen (Atome, Moleküle, Ionen) in einem Mol an.",
    strategieTipp:
      "Merke: 1 mol = 6,022 × 10²³ Teilchen. Dies ist eine fundamentale Konstante der Chemie, benannt nach Amedeo Avogadro.",
  },
  {
    id: "ch-q-072",
    stichwortId: "ch-7-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Reaktionsgleichung ist korrekt ausgeglichen?",
    optionen: [
      "H₂ + O₂ → H₂O",
      "2H₂ + O₂ → 2H₂O",
      "H₂ + 2O₂ → H₂O",
      "4H₂ + O₂ → 2H₂O",
      "H₂ + O₂ → 2H₂O",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Die Gleichung 2H₂ + O₂ → 2H₂O ist ausgeglichen: Links 4 H und 2 O, rechts ebenfalls 4 H und 2 O. Das Atomzahlgesetz (Massenerhaltung) ist erfüllt.",
    strategieTipp:
      "Beim Ausgleichen: Zähle jede Atomsorte links und rechts. Passe Koeffizienten (nie Indizes!) an, bis beide Seiten gleich sind.",
  },
  {
    id: "ch-q-073",
    stichwortId: "ch-7-01",
    fach: "chemie" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Wie viel Gramm NaOH (M = 40 g/mol) benötigt man zur Herstellung von 500 mL einer 0,5 M Lösung?",
    optionen: ["5 g", "10 g", "15 g", "20 g", "25 g"],
    korrekteAntwort: 1,
    erklärung: "n = c × V = 0,5 mol/L × 0,5 L = 0,25 mol. m = n × M = 0,25 mol × 40 g/mol = 10 g.",
    strategieTipp:
      "Formel: m = c × V × M. Achte auf Einheiten: Volumen in Liter umrechnen (500 mL = 0,5 L).",
  },
  {
    id: "ch-q-074",
    stichwortId: "ch-7-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Summenformel hat Ethanol?",
    optionen: ["CH₃OH", "C₂H₅OH", "C₂H₆O", "C₃H₈O", "CH₄O"],
    korrekteAntwort: 2,
    erklärung:
      "Ethanol hat die Summenformel C₂H₆O (auch geschrieben als C₂H₅OH). Es besteht aus 2 Kohlenstoff-, 6 Wasserstoff- und 1 Sauerstoffatom.",
    strategieTipp:
      "Unterscheide Summenformel (C₂H₆O) und Strukturformel (C₂H₅OH). Die Strukturformel zeigt die funktionelle Gruppe (-OH) deutlicher.",
  },
  {
    id: "ch-q-075",
    stichwortId: "ch-7-01",
    fach: "chemie" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Bei der Verbrennung von 12 g Kohlenstoff (C = 12 u) entsteht CO₂. Wie viel Gramm CO₂ werden gebildet?",
    optionen: ["22 g", "28 g", "34 g", "44 g", "48 g"],
    korrekteAntwort: 3,
    erklärung:
      "C + O₂ → CO₂. n(C) = 12g / 12 g/mol = 1 mol. Nach Stöchiometrie: 1 mol C ergibt 1 mol CO₂. m(CO₂) = 1 mol × 44 g/mol = 44 g.",
    strategieTipp:
      "Stöchiometrisches Rechnen: Masse → Mol → Molverhältnis aus Gleichung → Mol Produkt → Masse. Die Reaktionsgleichung zeigt das Molverhältnis.",
  },
  {
    id: "ch-q-076",
    stichwortId: "ch-7-01",
    fach: "chemie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: 'Was bedeutet die Zahl "2" in der Formel 2H₂O?',
    optionen: [
      "Es gibt 2 Wasserstoffatome im Molekül",
      "Es gibt 2 Wassermoleküle",
      "Das Molekül hat eine Masse von 2 u",
      "Die Oxidationszahl ist 2",
      "Es gibt 2 Sauerstoffatome",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Die Zahl vor der Formel (Koeffizient) gibt die Anzahl der Moleküle an. 2H₂O bedeutet 2 Wassermoleküle, also insgesamt 4 H-Atome und 2 O-Atome.",
    strategieTipp:
      "Unterscheide: Koeffizient vor Formel = Anzahl Moleküle; Index nach Symbol = Anzahl Atome im Molekül. H₂O: 2 H pro Molekül; 2H₂O: 2 Moleküle.",
  },
  {
    id: "ch-q-077",
    stichwortId: "ch-7-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche molare Masse hat Calciumcarbonat (CaCO₃)? (Ca=40, C=12, O=16 u)",
    optionen: ["68 g/mol", "84 g/mol", "100 g/mol", "116 g/mol", "128 g/mol"],
    korrekteAntwort: 2,
    erklärung: "M(CaCO₃) = M(Ca) + M(C) + 3×M(O) = 40 + 12 + 3×16 = 40 + 12 + 48 = 100 g/mol.",
    strategieTipp:
      "Addiere die Atommassen aller Atome in der Formel. Beachte die Indizes (hier 3 Sauerstoffatome).",
  },
  {
    id: "ch-q-078",
    stichwortId: "ch-7-01",
    fach: "chemie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Wie viele Atome sind in 0,5 mol Wasserstoffgas (H₂) enthalten?",
    optionen: ["3,011 × 10²³", "6,022 × 10²³", "1,204 × 10²⁴", "3,011 × 10²⁴", "6,022 × 10²⁴"],
    korrekteAntwort: 1,
    erklärung:
      "0,5 mol H₂ enthält 0,5 × NA = 0,5 × 6,022 × 10²³ = 3,011 × 10²³ Moleküle. Da jedes Molekül 2 Atome hat: 2 × 3,011 × 10²³ = 6,022 × 10²³ Atome.",
    strategieTipp:
      "Achtung bei mehratomigen Molekülen: Unterscheide zwischen Molekülen und Atomen. H₂ hat 2 Atome pro Molekül.",
  },
  {
    id: "ch-q-079",
    stichwortId: "ch-7-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Aussage zur Stöchiometrie ist korrekt?",
    optionen: [
      "Sie beschreibt nur Gase",
      "Sie gibt die Mengenverhältnisse in Reaktionen an",
      "Sie gilt nur bei hohen Temperaturen",
      "Sie ist unabhängig von der Reaktionsgleichung",
      "Sie beschreibt die Reaktionsgeschwindigkeit",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Stöchiometrie beschreibt die quantitativen Mengenverhältnisse (Stoffmengen, Massen, Volumina) der an einer Reaktion beteiligten Stoffe basierend auf der ausgeglichenen Reaktionsgleichung.",
    strategieTipp:
      'Stöchiometrie = "Rechnen in der Chemie". Die Koeffizienten in der Reaktionsgleichung geben das Molverhältnis an.',
  },
  {
    id: "ch-q-080",
    stichwortId: "ch-7-01",
    fach: "chemie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was ist das Symbol für Eisen?",
    optionen: ["Ei", "Es", "Fe", "Fr", "Ir"],
    korrekteAntwort: 2,
    erklärung:
      'Das Symbol für Eisen ist Fe, abgeleitet vom lateinischen Namen "Ferrum". Ir steht für Iridium, Fr für Francium.',
    strategieTipp:
      "Lateinische Namen: Fe (Ferrum), Cu (Cuprum), Ag (Argentum), Au (Aurum), Pb (Plumbum), Sn (Stannum), Hg (Hydrargyrum).",
  },
  {
    id: "ch-q-081",
    stichwortId: "ch-7-01",
    fach: "chemie" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Welches Volumen nimmt 1 mol eines idealen Gases bei Normalbedingungen (0°C, 1 bar) ein?",
    optionen: ["11,2 L", "22,4 L", "24,5 L", "44,8 L", "50,0 L"],
    korrekteAntwort: 1,
    erklärung:
      "Bei Normalbedingungen (0°C = 273,15 K, 1 bar) beträgt das molare Volumen eines idealen Gases 22,4 L/mol. Dies folgt aus der idealen Gasgleichung pV = nRT.",
    strategieTipp:
      "Merke: 1 mol Gas ≈ 22,4 L bei Normalbedingungen. Bei Standardbedingungen (25°C, 1 bar) sind es ca. 24,5 L/mol.",
  },
  {
    id: "ch-q-082",
    stichwortId: "ch-7-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Für die Reaktion N₂ + 3H₂ → 2NH₃: Wie viel mol NH₃ entstehen aus 3 mol N₂?",
    optionen: ["2 mol", "3 mol", "4 mol", "6 mol", "9 mol"],
    korrekteAntwort: 3,
    erklärung:
      "Nach der Reaktionsgleichung entstehen aus 1 mol N₂ genau 2 mol NH₃. Aus 3 mol N₂ entstehen daher 3 × 2 = 6 mol NH₃ (bei ausreichend H₂).",
    strategieTipp:
      "Das Molverhältnis aus der Gleichung ist 1:3:2 für N₂:H₂:NH₃. Nutze Dreisatz zur Berechnung.",
  },
  {
    id: "ch-q-083",
    stichwortId: "ch-7-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was ist die empirische Formel von Glucose (C₆H₁₂O₆)?",
    optionen: ["CHO", "CH₂O", "C₂H₄O₂", "C₃H₆O₃", "C₆H₁₂O₆"],
    korrekteAntwort: 1,
    erklärung:
      "Die empirische Formel zeigt das einfachste ganzzahlige Verhältnis. C₆H₁₂O₆ vereinfacht sich zu CH₂O (6:12:6 = 1:2:1).",
    strategieTipp:
      "Empirische Formel = kleinstes ganzzahliges Verhältnis. Molekülformel kann ein Vielfaches sein (hier 6 × CH₂O).",
  },
  {
    id: "ch-q-084",
    stichwortId: "ch-7-01",
    fach: "chemie" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Welche Stoffmenge an CO₂ entsteht bei vollständiger Verbrennung von 23 g Ethanol (C₂H₅OH, M = 46 g/mol)?",
    optionen: ["0,5 mol", "1,0 mol", "1,5 mol", "2,0 mol", "2,5 mol"],
    korrekteAntwort: 1,
    erklärung:
      "C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O. n(Ethanol) = 23g/46g/mol = 0,5 mol. Aus 1 mol Ethanol entstehen 2 mol CO₂, also aus 0,5 mol entstehen 1,0 mol CO₂.",
    strategieTipp:
      "Schritte: 1) Reaktionsgleichung aufstellen, 2) Stoffmenge berechnen, 3) Molverhältnis anwenden. Hier: 1 mol Ethanol → 2 mol CO₂.",
  },
  {
    id: "ch-q-085",
    stichwortId: "ch-7-01",
    fach: "chemie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Welches chemische Symbol hat Gold?",
    optionen: ["Go", "Gd", "Au", "Ag", "G"],
    korrekteAntwort: 2,
    erklärung:
      'Das Symbol für Gold ist Au, vom lateinischen "Aurum". Ag steht für Silber (Argentum), Gd für Gadolinium.',
    strategieTipp:
      "Edelmetalle aus dem Lateinischen: Au (Gold), Ag (Silber), Cu (Kupfer), Pt (Platin ist griechisch).",
  },
  {
    id: "ch-q-086",
    stichwortId: "ch-7-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Wie viele Gramm wiegt ein Mol Schwefelsäure (H₂SO₄)? (H=1, S=32, O=16 u)",
    optionen: ["82 g", "90 g", "98 g", "106 g", "114 g"],
    korrekteAntwort: 2,
    erklärung: "M(H₂SO₄) = 2×1 + 32 + 4×16 = 2 + 32 + 64 = 98 g/mol. Ein Mol wiegt also 98 g.",
    strategieTipp:
      "Molare Masse = Summe der Atommassen in Gramm pro Mol. H₂SO₄ hat 2 H, 1 S und 4 O.",
  },
  {
    id: "ch-q-087",
    stichwortId: "ch-8-01",
    fach: "chemie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was beschreibt die Reaktionsgeschwindigkeit?",
    optionen: [
      "Die Energieänderung einer Reaktion",
      "Die Konzentration der Produkte",
      "Die Änderung der Konzentration pro Zeiteinheit",
      "Die Temperatur der Reaktion",
      "Die Masse der Edukte",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Die Reaktionsgeschwindigkeit v gibt an, wie schnell sich die Konzentration der Edukte oder Produkte pro Zeiteinheit ändert, typisch in mol/(L·s).",
    strategieTipp:
      "Reaktionsgeschwindigkeit = Δc/Δt. Je höher v, desto schneller läuft die Reaktion ab.",
  },
  {
    id: "ch-q-088",
    stichwortId: "ch-8-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welcher Faktor erhöht die Reaktionsgeschwindigkeit NICHT?",
    optionen: [
      "Erhöhung der Temperatur",
      "Erhöhung der Konzentration",
      "Zugabe eines Katalysators",
      "Vergrößerung der Oberfläche",
      "Verringerung des Drucks bei Gasen",
    ],
    korrekteAntwort: 4,
    erklärung:
      "Eine Verringerung des Drucks bei Gasreaktionen verringert die Teilchenkonzentration und damit die Reaktionsgeschwindigkeit. Alle anderen Faktoren beschleunigen die Reaktion.",
    strategieTipp:
      "Faktoren zur Beschleunigung: höhere T, höhere c, Katalysator, größere Oberfläche, höherer Druck (bei Gasen).",
  },
  {
    id: "ch-q-089",
    stichwortId: "ch-8-01",
    fach: "chemie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Was versteht man unter der Aktivierungsenergie?",
    optionen: [
      "Die Energie der Produkte",
      "Die minimale Energie, die für den Reaktionsstart nötig ist",
      "Die Energie, die bei der Reaktion frei wird",
      "Die kinetische Energie aller Teilchen",
      "Die Energie am Gleichgewichtspunkt",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Die Aktivierungsenergie EA ist die Mindestenergie, die Teilchen aufbringen müssen, um den aktivierten Komplex zu bilden und die Reaktion zu starten. Ein Katalysator senkt EA.",
    strategieTipp:
      "Aktivierungsenergie = Energiebarriere. Auch bei exothermen Reaktionen muss sie überwunden werden. Katalysatoren senken EA, aber nicht ΔH.",
  },
  {
    id: "ch-q-090",
    stichwortId: "ch-8-01",
    fach: "chemie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was kennzeichnet eine exotherme Reaktion?",
    optionen: [
      "Energie wird aufgenommen",
      "Die Temperatur sinkt",
      "Energie wird freigesetzt",
      "Die Reaktion läuft nicht spontan ab",
      "Es entsteht kein Produkt",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Bei exothermen Reaktionen wird Energie in Form von Wärme an die Umgebung abgegeben. ΔH < 0. Die Temperatur der Umgebung steigt (z.B. Verbrennung).",
    strategieTipp:
      "EXotherm = Energie EXit = Energie verlässt das System. Gegenteil: ENdotherm = Energie wird aufgenommen (ΔH > 0).",
  },
  {
    id: "ch-q-091",
    stichwortId: "ch-8-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Aussage über Katalysatoren ist FALSCH?",
    optionen: [
      "Sie werden nicht verbraucht",
      "Sie senken die Aktivierungsenergie",
      "Sie beschleunigen die Reaktion",
      "Sie verschieben das Gleichgewicht",
      "Sie nehmen am Reaktionsmechanismus teil",
    ],
    korrekteAntwort: 3,
    erklärung:
      "Katalysatoren verschieben das Gleichgewicht NICHT. Sie beschleunigen nur das Erreichen des Gleichgewichts, indem sie Hin- und Rückreaktion gleichermaßen beschleunigen.",
    strategieTipp:
      "Katalysator-Merkmale: senkt EA, wird regeneriert, ändert Mechanismus, beschleunigt beide Reaktionsrichtungen, verschiebt NICHT das Gleichgewicht.",
  },
  {
    id: "ch-q-092",
    stichwortId: "ch-8-01",
    fach: "chemie" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Für die Reaktion N₂ + 3H₂ ⇌ 2NH₃ gilt: K = [NH₃]² / ([N₂]·[H₂]³). Welche Auswirkung hat eine Druckerhöhung?",
    optionen: [
      "Gleichgewicht verschiebt sich nach links",
      "Gleichgewicht verschiebt sich nach rechts",
      "K ändert sich",
      "Keine Veränderung",
      "Die Reaktion stoppt",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Nach Le Chatelier weicht das System Druckerhöhung aus, indem es zur Seite mit weniger Gasteilchen reagiert. Links 4 mol Gas (1+3), rechts 2 mol → Gleichgewicht nach rechts. K bleibt konstant (temperaturabhängig).",
    strategieTipp:
      "Druckerhöhung: Gleichgewicht zur Seite mit weniger Gasmolekülen. Zähle Koeffizienten der gasförmigen Stoffe.",
  },
  {
    id: "ch-q-093",
    stichwortId: "ch-8-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was besagt das Massenwirkungsgesetz?",
    optionen: [
      "Die Masse bleibt konstant",
      "Die Geschwindigkeit hängt von der Masse ab",
      "Im Gleichgewicht ist das Verhältnis der Produktkonzentrationen zu Eduktkonzentrationen konstant",
      "Alle Reaktionen erreichen ein Gleichgewicht",
      "Katalysatoren ändern die Gleichgewichtskonstante",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Das MWG besagt: Bei konstantem T ist K = [Produkte]/[Edukte] (mit Potenzen nach Stöchiometrie) konstant. Es beschreibt die Zusammensetzung im chemischen Gleichgewicht.",
    strategieTipp:
      "MWG: K = [C]^c·[D]^d / [A]^a·[B]^b für aA + bB ⇌ cC + dD. K ist temperaturabhängig, aber konzentrationsunabhängig.",
  },
  {
    id: "ch-q-094",
    stichwortId: "ch-8-01",
    fach: "chemie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Bei welcher Reaktion wird Energie aufgenommen?",
    optionen: [
      "Verbrennung von Holz",
      "Neutralisation",
      "Photosynthese",
      "Oxidation von Eisen",
      "Kondensation von Wasser",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Die Photosynthese ist endotherm: 6CO₂ + 6H₂O + Energie → C₆H₁₂O₆ + 6O₂. Lichtenergie wird aufgenommen und in chemische Energie umgewandelt.",
    strategieTipp:
      "Endotherme Reaktionen: Photosynthese, Verdampfen, thermische Zersetzung. Sie benötigen Energiezufuhr.",
  },
  {
    id: "ch-q-095",
    stichwortId: "ch-8-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Aussage zum Prinzip von Le Chatelier ist korrekt?",
    optionen: [
      "Es gilt nur für exotherme Reaktionen",
      "Ein Gleichgewicht weicht einem Zwang aus",
      "Temperaturänderungen haben keinen Effekt",
      "Katalysatoren verschieben das Gleichgewicht",
      "Es beschreibt die Reaktionsgeschwindigkeit",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Das Prinzip von Le Chatelier besagt: Ein Gleichgewicht reagiert auf äußere Störungen (T, p, c) so, dass die Störung abgeschwächt wird. Es ist ein Prinzip des kleinsten Zwangs.",
    strategieTipp:
      "Le Chatelier: Temperatur↑ bei exotherm → Gleichgewicht nach links; Druck↑ → zu weniger Gasteilchen; Konzentration↑ → weg von dieser Seite.",
  },
  {
    id: "ch-q-096",
    stichwortId: "ch-8-01",
    fach: "chemie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Eine Reaktion hat K = 100. Was bedeutet dies?",
    optionen: [
      "Die Edukte überwiegen stark",
      "Die Produkte überwiegen stark",
      "Die Reaktion ist sehr langsam",
      "Die Reaktion ist exotherm",
      "Das Gleichgewicht liegt genau in der Mitte",
    ],
    korrekteAntwort: 1,
    erklärung:
      "K = 100 bedeutet [Produkte]/[Edukte] = 100, also liegen die Produkte in 100-fach höherer Konzentration vor als die Edukte. Das Gleichgewicht liegt weit auf der Produktseite.",
    strategieTipp:
      "K >> 1: Gleichgewicht rechts (Produktseite); K << 1: Gleichgewicht links (Eduktseite); K ≈ 1: ausgewogenes Gleichgewicht.",
  },
  {
    id: "ch-q-097",
    stichwortId: "ch-8-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Wie wirkt sich eine Temperaturerhöhung auf eine endotherme Gleichgewichtsreaktion aus?",
    optionen: [
      "Gleichgewicht verschiebt sich nach links",
      "Gleichgewicht verschiebt sich nach rechts",
      "K nimmt ab",
      "Die Reaktion stoppt",
      "Keine Änderung",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Bei endothermen Reaktionen (ΔH > 0) begünstigt Temperaturerhöhung die Produktbildung. Das System nimmt die zugeführte Wärmeenergie auf → Gleichgewicht nach rechts. K steigt.",
    strategieTipp:
      "Temperatur↑: bei endotherm → rechts (K↑); bei exotherm → links (K↓). Wärme kann wie ein Reaktant/Produkt behandelt werden.",
  },
  {
    id: "ch-q-098",
    stichwortId: "ch-8-01",
    fach: "chemie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Welche Einheit hat die Geschwindigkeitskonstante k bei einer Reaktion 1. Ordnung?",
    optionen: ["mol/(L·s)", "s⁻¹", "L/(mol·s)", "mol·L⁻¹", "dimensionslos"],
    korrekteAntwort: 1,
    erklärung:
      "Bei 1. Ordnung: v = k·[A]. Da v die Einheit mol/(L·s) und [A] die Einheit mol/L hat, muss k die Einheit s⁻¹ haben, damit die Gleichung dimensional korrekt ist.",
    strategieTipp:
      "Einheit von k hängt von der Reaktionsordnung ab: 0. Ordnung: mol/(L·s); 1. Ordnung: s⁻¹; 2. Ordnung: L/(mol·s).",
  },
  {
    id: "ch-q-099",
    stichwortId: "ch-8-01",
    fach: "chemie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was ist ein chemisches Gleichgewicht?",
    optionen: [
      "Ein Zustand, in dem keine Reaktion mehr stattfindet",
      "Ein Zustand, in dem Hin- und Rückreaktion gleich schnell ablaufen",
      "Ein Zustand maximaler Energie",
      "Ein Zustand ohne Katalysator",
      "Ein Zustand, der nur bei hohen Temperaturen auftritt",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Im chemischen Gleichgewicht laufen Hin- und Rückreaktion mit gleicher Geschwindigkeit ab. Die Konzentrationen bleiben konstant, aber beide Reaktionen finden weiterhin statt (dynamisches Gleichgewicht).",
    strategieTipp:
      "Gleichgewicht ≠ Reaktionsstillstand. Es ist dynamisch: v(hin) = v(rück), aber beide ≠ 0. Konzentrationen bleiben konstant.",
  },
  {
    id: "ch-q-100",
    stichwortId: "ch-8-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Gleichgewichtskonstante beschreibt die Autoprotolyse von Wasser?",
    optionen: ["Ka", "Kb", "Kw", "Kp", "Kc"],
    korrekteAntwort: 2,
    erklärung:
      "Das Ionenprodukt des Wassers Kw beschreibt das Gleichgewicht 2H₂O ⇌ H₃O⁺ + OH⁻. Bei 25°C gilt: Kw = [H₃O⁺]·[OH⁻] = 10⁻¹⁴ mol²/L².",
    strategieTipp:
      "Kw = 10⁻¹⁴ bei 25°C. In reinem Wasser: [H₃O⁺] = [OH⁻] = 10⁻⁷ mol/L (pH = 7). Kw ist temperaturabhängig.",
  },
];
