import type { Chapter } from "./types";

export const elektrizitaetChapter: Chapter = {
  id: "elektrizitaet",
  subject: "physik",
  title: "Elektrizität & Magnetismus",
  subtitle: "Stromkreise, Ohm'sches Gesetz, Magnetfeld & Induktion",
  icon: "⚡",
  chapterNumber: "Kapitel 2/3",
  readingTime: "~45 Minuten",
  level: "Kernstoff",
  frequency: "Häufig geprüft",
  overview:
    "Dieses Kapitel behandelt die physikalischen Grundlagen der Elektrizitätslehre und des Magnetismus — von den elektrischen Grundgrößen über Stromkreise und Kirchhoff'sche Regeln bis hin zur Lorentzkraft, elektromagnetischen Induktion und dem elektromagnetischen Spektrum. Diese Themen werden im MedAT-BMS regelmäßig geprüft und sind zudem für das Verständnis medizinischer Geräte (EKG, MRT, Defibrillator) essenziell.",
  learningObjectives: [
    "Ohm'sches Gesetz und elektrische Leistung berechnen",
    "Reihen- und Parallelschaltung berechnen",
    "Kirchhoff'sche Regeln anwenden",
    "Lorentzkraft und Magnetfelder verstehen",
    "Elektromagnetische Induktion und Transformator erklären",
  ],

  sections: [
    // ──────────────────────────────────────────────
    // 1. Grundgrößen & Ohm'sches Gesetz
    // ──────────────────────────────────────────────
    {
      heading: "Grundgrößen & Ohm'sches Gesetz",
      content:
        "Die Elektrizitätslehre beschreibt das Verhalten elektrischer Ladungen, Ströme und Felder. Die wichtigsten Grundgrößen bilden die Basis für alle weiteren Berechnungen in der Elektrotechnik und Physik.\n\n" +
        "**Elektrische Ladung Q [Coulomb, C]:**\n" +
        "Die elektrische Ladung ist eine fundamentale physikalische Eigenschaft von Materie. Sie tritt in zwei Formen auf: positive Ladung (Protonen) und negative Ladung (Elektronen). Die kleinste frei vorkommende Ladungseinheit ist die Elementarladung e = 1,6 × 10⁻¹⁹ C. Ladung ist quantisiert — sie tritt immer als ganzzahliges Vielfaches von e auf. Gleichnamige Ladungen stoßen sich ab, ungleichnamige ziehen sich an (Coulomb'sches Gesetz).\n\n" +
        "**Elektrische Stromstärke I [Ampere, A]:**\n" +
        "Der elektrische Strom ist die gerichtete Bewegung von Ladungsträgern (in Metallen: Elektronen, in Lösungen: Ionen). Die Stromstärke gibt an, wie viel Ladung pro Zeiteinheit durch einen Leiterquerschnitt fließt: I = Q/t. Die technische Stromrichtung verläuft per Konvention von Plus nach Minus (entgegengesetzt zur tatsächlichen Elektronenbewegung).\n\n" +
        "**Elektrische Spannung U [Volt, V]:**\n" +
        "Die Spannung ist die Potentialdifferenz zwischen zwei Punkten. Sie gibt an, wie viel Energie pro Ladungseinheit beim Transport einer Ladung zwischen diesen Punkten umgesetzt wird: U = W/Q. Die Spannung ist die 'treibende Kraft' für den Strom — ohne Potentialdifferenz fließt kein Strom.\n\n" +
        "**Elektrischer Widerstand R [Ohm, Ω]:**\n" +
        "Der Widerstand beschreibt, wie stark ein Material den Stromfluss behindert. Er hängt von Material (spezifischer Widerstand ρ), Länge l und Querschnittsfläche A des Leiters ab: R = ρ · l / A. Gute Leiter (Kupfer, Silber) haben niedrigen Widerstand, Isolatoren (Gummi, Glas) haben sehr hohen Widerstand.\n\n" +
        "**Ohm'sches Gesetz:**\n" +
        "Das zentrale Gesetz der Elektrizitätslehre beschreibt den linearen Zusammenhang zwischen Spannung, Widerstand und Stromstärke: <strong>U = R · I</strong>. Das bedeutet: Bei konstantem Widerstand ist die Stromstärke direkt proportional zur angelegten Spannung. Ohm'sche Widerstände (z.B. Metallleiter bei konstanter Temperatur) zeigen dieses lineare Verhalten. Nicht-ohm'sche Bauteile (z.B. Dioden, Glühlampen) zeigen einen nichtlinearen Zusammenhang.\n\n" +
        "**Elektrische Leistung P [Watt, W]:**\n" +
        "Die elektrische Leistung gibt an, wie viel Energie pro Zeiteinheit umgesetzt wird. Durch Kombination mit dem Ohm'schen Gesetz ergeben sich drei äquivalente Formeln:\n" +
        "• P = U · I (Grundform: Spannung mal Stromstärke)\n" +
        "• P = I² · R (einsetzen von U = R·I → nützlich, wenn I und R bekannt)\n" +
        "• P = U² / R (einsetzen von I = U/R → nützlich, wenn U und R bekannt)\n\n" +
        "**Elektrische Energie E [Joule, J]:**\n" +
        "Die Energie ist das Produkt aus Leistung und Zeit: E = P · t. In der Praxis wird häufig die Kilowattstunde (kWh) als Energieeinheit verwendet: 1 kWh = 1000 W × 3600 s = 3,6 × 10⁶ J = 3,6 MJ.",
      merke:
        "U = R·I (<strong>URI</strong>). Leistung: P = U·I = I²R = U²/R — drei Formen, eine Formel! Merke: <strong>\"URI P=UI\"</strong>.",
    },

    // ──────────────────────────────────────────────
    // 2. Reihen- & Parallelschaltung
    // ──────────────────────────────────────────────
    {
      heading: "Reihen- & Parallelschaltung",
      content:
        "In elektrischen Schaltungen können Widerstände (und andere Bauteile) auf zwei grundlegende Arten miteinander verbunden werden: in Reihe (Serie) oder parallel. Das Verständnis dieser Schaltungstypen ist essenziell für die Analyse jedes Stromkreises.\n\n" +
        "**Reihenschaltung (Serienschaltung):**\n" +
        "Bei einer Reihenschaltung sind die Widerstände hintereinander geschaltet — der Strom hat nur einen einzigen Weg. Daraus folgt:\n" +
        "• <strong>Strom:</strong> I ist überall gleich (I_ges = I₁ = I₂ = I₃). Da der Strom nur einen Weg hat, fließt durch jeden Widerstand dieselbe Stromstärke.\n" +
        "• <strong>Spannung:</strong> Die Gesamtspannung teilt sich auf die einzelnen Widerstände auf: U_ges = U₁ + U₂ + U₃. Je größer der Widerstand, desto größer der Spannungsabfall an ihm.\n" +
        "• <strong>Widerstand:</strong> Die Widerstände addieren sich: R_ges = R₁ + R₂ + R₃. Der Gesamtwiderstand ist immer größer als jeder Einzelwiderstand.\n\n" +
        "**Spannungsteiler (Anwendung der Reihenschaltung):**\n" +
        "In einer Reihenschaltung verhalten sich die Teilspannungen wie die Teilwiderstände: U₁/U₂ = R₁/R₂. Damit lässt sich aus einer gegebenen Spannung eine definierte Teilspannung erzeugen — ein Grundprinzip der Messtechnik.\n\n" +
        "**Parallelschaltung:**\n" +
        "Bei einer Parallelschaltung sind die Widerstände nebeneinander geschaltet — der Strom kann sich auf mehrere Wege aufteilen. Daraus folgt:\n" +
        "• <strong>Spannung:</strong> U ist überall gleich (U_ges = U₁ = U₂ = U₃). Alle parallelen Zweige liegen an derselben Spannung.\n" +
        "• <strong>Strom:</strong> Die Ströme addieren sich: I_ges = I₁ + I₂ + I₃. Je kleiner der Widerstand in einem Zweig, desto mehr Strom fließt durch ihn.\n" +
        "• <strong>Widerstand:</strong> Es gilt die reziproke Addition: 1/R_ges = 1/R₁ + 1/R₂ + 1/R₃. Der Gesamtwiderstand ist immer kleiner als der kleinste Einzelwiderstand! Für zwei parallele Widerstände gilt die Kurzformel: R_ges = (R₁ · R₂) / (R₁ + R₂).\n\n" +
        "**Stromteiler (Anwendung der Parallelschaltung):**\n" +
        "In einer Parallelschaltung verhalten sich die Teilströme umgekehrt proportional zu den Widerständen: I₁/I₂ = R₂/R₁. Der größere Strom fließt durch den kleineren Widerstand — der Strom nimmt bevorzugt den 'leichteren' Weg.\n\n" +
        "**Kirchhoff'sche Regeln:**\n" +
        "Gustav Robert Kirchhoff formulierte zwei fundamentale Regeln für die Analyse von Netzwerken:\n\n" +
        "1. <strong>Knotenregel (1. Kirchhoff'sches Gesetz):</strong> An jedem Knotenpunkt gilt: Die Summe aller zufließenden Ströme ist gleich der Summe aller abfließenden Ströme (ΣI = 0). Dies ist Ausdruck der Ladungserhaltung — Ladung kann an einem Knoten weder entstehen noch verschwinden.\n\n" +
        "2. <strong>Maschenregel (2. Kirchhoff'sches Gesetz):</strong> In jeder geschlossenen Masche (Schleife) eines Netzwerks ist die Summe aller Spannungen gleich null (ΣU = 0). Dies ist Ausdruck der Energieerhaltung — die von der Quelle bereitgestellte Spannung wird vollständig an den Verbrauchern abgebaut.",
      diagram: "circuit",
      vergleichsTabelle: {
        headers: ["Eigenschaft", "Reihenschaltung", "Parallelschaltung"],
        rows: [
          [
            "Strom I",
            "Überall gleich: I_ges = I₁ = I₂",
            "Teilt sich auf: I_ges = I₁ + I₂",
          ],
          [
            "Spannung U",
            "Teilt sich auf: U_ges = U₁ + U₂",
            "Überall gleich: U_ges = U₁ = U₂",
          ],
          [
            "Widerstand R_ges",
            "Größer als jeder Einzelwiderstand",
            "Kleiner als der kleinste Einzelwiderstand",
          ],
          [
            "R_ges Formel",
            "R_ges = R₁ + R₂ + R₃",
            "1/R_ges = 1/R₁ + 1/R₂ + 1/R₃",
          ],
        ],
      },
      merke:
        "Reihe: <strong>gleicher Strom</strong>, R addieren. Parallel: <strong>gleiche Spannung</strong>, 1/R addieren. R_ges parallel ist IMMER <strong>kleiner</strong> als der kleinste Einzelwiderstand!",
      klinik:
        "EKG: Die Ableitungen messen Spannungsdifferenzen — das Herz als elektrischer Dipol. Kirchhoff'sche Prinzipien erklären die Beziehungen zwischen den 12 EKG-Ableitungen.",
    },

    // ──────────────────────────────────────────────
    // 3. Magnetismus & Lorentzkraft
    // ──────────────────────────────────────────────
    {
      heading: "Magnetismus & Lorentzkraft",
      content:
        "Magnetismus und Elektrizität sind untrennbar miteinander verbunden — jeder bewegte Ladungsträger erzeugt ein Magnetfeld, und jedes sich ändernde Magnetfeld beeinflusst Ladungsträger. Diese Wechselwirkung bildet die Grundlage des Elektromagnetismus.\n\n" +
        "**Magnetfeld B [Tesla, T]:**\n" +
        "Die magnetische Flussdichte B (umgangssprachlich 'Magnetfeldstärke') beschreibt die Stärke und Richtung eines Magnetfelds. Die SI-Einheit ist Tesla: 1 T = 1 V·s/m² = 1 kg/(A·s²). Das Erdmagnetfeld hat eine Stärke von ca. 30–60 µT. Zum Vergleich: Ein MRT-Gerät erzeugt Felder von 1,5–3 T — also etwa 50.000-mal stärker als das Erdmagnetfeld.\n\n" +
        "**Magnetische Feldlinien:**\n" +
        "Feldlinien veranschaulichen das Magnetfeld. Sie verlaufen außerhalb des Magneten von Nord nach Süd und innerhalb des Magneten von Süd nach Nord (geschlossene Schleifen). Die Feldliniendichte gibt die Feldstärke an: Eng beieinanderliegende Linien bedeuten ein starkes Feld. Es gibt keine magnetischen Monopole — magnetische Feldlinien sind immer geschlossen (im Gegensatz zu elektrischen Feldlinien, die an Ladungen beginnen und enden).\n\n" +
        "**Magnetfeld eines stromdurchflossenen Leiters:**\n" +
        "Ein elektrischer Strom erzeugt stets ein Magnetfeld in seiner Umgebung (Oersted-Experiment, 1820). Die Richtung des Magnetfelds wird durch die Rechte-Hand-Regel bestimmt: Zeigt der Daumen der rechten Hand in die technische Stromrichtung, so umgreifen die Finger den Leiter in Richtung der Feldlinien (konzentrisches Kreisfeld um den Leiter). Eine Spule (viele Windungen) erzeugt ein nahezu homogenes Feld in ihrem Inneren — ähnlich einem Stabmagneten.\n\n" +
        "**Lorentzkraft F [Newton, N]:**\n" +
        "Die Lorentzkraft ist die Kraft, die ein Magnetfeld auf einen bewegten Ladungsträger ausübt. Sie wird durch folgende Formel beschrieben:\n\n" +
        "<strong>F = q · v · B · sin(α)</strong>\n\n" +
        "Dabei ist q die Ladung des Teilchens, v seine Geschwindigkeit, B die magnetische Flussdichte und α der Winkel zwischen v und B.\n\n" +
        "Wichtige Eigenschaften der Lorentzkraft:\n" +
        "• Die Kraft steht <strong>senkrecht</strong> auf sowohl v als auch B — ihre Richtung wird durch die Drei-Finger-Regel (rechte Hand für positive Ladungen) bestimmt.\n" +
        "• Sie ist maximal, wenn v senkrecht auf B steht (sin 90° = 1): F_max = qvB.\n" +
        "• Sie ist null, wenn v parallel zu B steht (sin 0° = 0): Das Teilchen bewegt sich ungestört.\n" +
        "• Da die Kraft senkrecht zur Bewegungsrichtung steht, verrichtet sie <strong>keine Arbeit</strong>. Sie ändert nur die Richtung der Geschwindigkeit, nicht deren Betrag. Die kinetische Energie bleibt konstant.\n\n" +
        "**Kreisbahn im Magnetfeld:**\n" +
        "Wenn ein geladenes Teilchen senkrecht in ein homogenes Magnetfeld eintritt, wirkt die Lorentzkraft als Zentripetalkraft und zwingt das Teilchen auf eine Kreisbahn: F_L = F_Z → qvB = mv²/r. Daraus folgt der Radius der Kreisbahn: r = mv/(qB). Je schneller das Teilchen oder je größer seine Masse, desto größer der Radius; je stärker das Feld oder je größer die Ladung, desto kleiner der Radius.\n\n" +
        "**Kraft auf einen stromdurchflossenen Leiter im Magnetfeld:**\n" +
        "Ein stromdurchflossener Leiter (Länge l) in einem Magnetfeld erfährt die Kraft: F = B · I · l · sin(α). Dies ist die Grundlage des Elektromotors.",
      merke:
        "Lorentzkraft steht <strong>IMMER senkrecht</strong> auf v und B — sie ändert nur die <strong>Richtung</strong>, nie den Betrag der Geschwindigkeit! F = qvB·sin(α), maximal wenn v ⊥ B.",
      klinik:
        "MRT nutzt starke Magnetfelder (1,5-3 T): Wasserstoffkerne werden ausgerichtet → Relaxationssignale → hochauflösende Schnittbilder. Keine ionisierende Strahlung!",
    },

    // ──────────────────────────────────────────────
    // 4. Elektromagnetische Induktion
    // ──────────────────────────────────────────────
    {
      heading: "Elektromagnetische Induktion",
      content:
        "Die elektromagnetische Induktion, entdeckt von Michael Faraday (1831) und unabhängig von Joseph Henry, beschreibt die Erzeugung einer elektrischen Spannung durch Änderung des magnetischen Flusses. Sie ist die Grundlage für Generatoren, Transformatoren und zahlreiche medizinische Geräte.\n\n" +
        "**Magnetischer Fluss Φ [Weber, Wb]:**\n" +
        "Der magnetische Fluss gibt an, wie viel Magnetfeld durch eine Fläche hindurchtritt: Φ = B · A · cos(α), wobei B die Flussdichte, A die Fläche und α der Winkel zwischen Feldlinien und Flächennormale ist. Einheit: 1 Wb = 1 V·s = 1 T·m².\n\n" +
        "**Faraday'sches Induktionsgesetz:**\n" +
        "Jede zeitliche Änderung des magnetischen Flusses durch eine Leiterschleife induziert eine elektrische Spannung (EMK):\n\n" +
        "<strong>U_ind = −N · dΦ/dt</strong>\n\n" +
        "Dabei ist N die Windungszahl der Spule und dΦ/dt die zeitliche Änderungsrate des magnetischen Flusses. Eine Änderung des Flusses kann auf drei Wegen geschehen: (1) Änderung der Magnetfeldstärke B, (2) Änderung der durchsetzten Fläche A, (3) Änderung des Winkels α zwischen B und Flächennormale.\n\n" +
        "**Lenz'sche Regel:**\n" +
        "Das Minuszeichen in Faradays Gesetz hat eine fundamentale physikalische Bedeutung, formuliert durch Heinrich Lenz: Der induzierte Strom fließt stets so, dass das von ihm erzeugte Magnetfeld der Ursache der Induktion entgegenwirkt. Konkret: Nähert man einen Nordpol einer Spule, entsteht in der Spule ein Nordpol (Abstoßung); entfernt man ihn, entsteht ein Südpol (Anziehung). Die Lenz'sche Regel ist eine direkte Konsequenz der Energieerhaltung — könnte der induzierte Strom seine Ursache verstärken, hätte man ein Perpetuum mobile.\n\n" +
        "**Generator:**\n" +
        "Ein Generator wandelt mechanische Energie in elektrische Energie um. Prinzip: Eine Spule rotiert in einem Magnetfeld → der Winkel α ändert sich periodisch → der Fluss Φ ändert sich sinusförmig → es wird eine Wechselspannung induziert. Die erzeugte Spannung ist: U(t) = U₀ · sin(ωt), wobei U₀ = N·B·A·ω die Maximalspannung und ω = 2πf die Kreisfrequenz ist.\n\n" +
        "**Transformator:**\n" +
        "Der Transformator dient zur Umwandlung von Wechselspannungen. Er besteht aus zwei Spulen (Primär- und Sekundärspule) auf einem gemeinsamen Eisenkern. Wechselstrom in der Primärspule erzeugt ein sich änderndes Magnetfeld → dieses induziert eine Spannung in der Sekundärspule.\n\n" +
        "Für den idealen Transformator (verlustfrei) gilt:\n" +
        "<strong>U₁/U₂ = N₁/N₂</strong> und P₁ = P₂ (Leistungserhaltung), also U₁·I₁ = U₂·I₂.\n\n" +
        "Daraus folgt auch: I₁/I₂ = N₂/N₁ — wird die Spannung hochtransformiert, sinkt der Strom proportional (und umgekehrt).\n" +
        "• N₂ > N₁: Aufwärtstransformator (Spannung wird erhöht) — z.B. Hochspannungsleitung: Hohe Spannung bei niedrigem Strom minimiert die Verluste (P_Verlust = I²·R_Leitung).\n" +
        "• N₂ < N₁: Abwärtstransformator (Spannung wird verringert) — z.B. Ladegeräte, Netzteile.\n\n" +
        "**Elektromagnetisches Spektrum:**\n" +
        "Elektromagnetische Wellen sind sich ausbreitende Schwingungen des elektrischen und magnetischen Feldes. Alle EM-Wellen breiten sich im Vakuum mit Lichtgeschwindigkeit aus:\n\n" +
        "<strong>c = λ · f = 3 × 10⁸ m/s</strong>\n\n" +
        "Dabei ist λ die Wellenlänge und f die Frequenz. Die Energie eines Photons ist: <strong>E = h · f</strong> (Planck'sches Wirkungsquantum h = 6,626 × 10⁻³⁴ J·s). Höhere Frequenz bedeutet höhere Energie und kürzere Wellenlänge.\n\n" +
        "Reihenfolge des EM-Spektrums nach steigender Frequenz (und Energie):\n" +
        "Radiowellen → Mikrowellen → Infrarot (IR) → Sichtbares Licht → Ultraviolett (UV) → Röntgenstrahlung → Gammastrahlung\n\n" +
        "Medizinische Relevanz:\n" +
        "• Gammastrahlung: Nuklearmedizin (Szintigraphie, PET), Strahlentherapie\n" +
        "• Röntgenstrahlung: Röntgendiagnostik, CT\n" +
        "• UV-Strahlung: Vitamin-D-Synthese, Hautschäden, DNA-Schäden\n" +
        "• Sichtbares Licht: Endoskopie, Ophthalmologie\n" +
        "• Infrarot: Thermografie, therapeutische Wärmebehandlung\n" +
        "• Mikrowellen/Radio: MRT (Radiofrequenzpulse zur Kernspinanregung)",
      diagram: "em-spectrum",
      merke:
        "Lenz'sche Regel: Der induzierte Strom <strong>wirkt seiner Ursache entgegen</strong> (Energieerhaltung!). Transformator: U₁/U₂ = N₁/N₂. Hohe Spannung → weniger Verluste bei Fernleitung.",
      altfrage:
        "\"EM-Spektrum: Welche Strahlung hat die höchste Energie?\" → <strong>Gammastrahlung</strong> (höchste Frequenz, kürzeste Wellenlänge). E = h·f: Hohe Frequenz = hohe Energie.",
    },
  ],

  keyFacts: [
    {
      label: "Ohm'sches Gesetz",
      value: "U = R·I (Spannung = Widerstand × Stromstärke)",
    },
    {
      label: "Elektrische Leistung",
      value: "P = U·I = I²R = U²/R",
    },
    {
      label: "Reihenschaltung R_ges",
      value: "R_ges = R₁ + R₂ (Widerstände addieren sich)",
    },
    {
      label: "Parallelschaltung R_ges",
      value: "1/R_ges = 1/R₁ + 1/R₂ (R_ges < kleinstes R)",
    },
    {
      label: "Kirchhoff'sche Regeln",
      value: "ΣI = 0 (Knoten) und ΣU = 0 (Masche)",
    },
    {
      label: "Lorentzkraft",
      value: "F = qvB·sin(α), senkrecht auf v und B",
    },
    {
      label: "Transformator",
      value: "U₁/U₂ = N₁/N₂ (Windungszahlverhältnis)",
    },
    {
      label: "Lichtgeschwindigkeit",
      value: "c = 3 × 10⁸ m/s = λ·f",
    },
    {
      label: "Photonenenergie",
      value: "E = h·f (höhere Frequenz = höhere Energie)",
    },
    {
      label: "Energieumrechnung",
      value: "1 kWh = 3,6 MJ",
    },
  ],

  selfTestQuestions: [
    {
      question: "Wie lautet das Ohm'sche Gesetz?",
      options: ["P = U·I", "U = R·I", "F = m·a", "E = mc²", "Q = m·c·ΔT"],
      correctIndex: 1,
      explanation:
        "Das Ohm'sche Gesetz lautet U = R·I (Spannung = Widerstand × Stromstärke). P = U·I ist die Leistungsformel.",
    },
    {
      question:
        "Bei einer Parallelschaltung ist der Gesamtwiderstand...",
      options: [
        "Gleich der Summe",
        "Größer als alle",
        "Kleiner als der kleinste",
        "Gleich dem größten",
        "Null",
      ],
      correctIndex: 2,
      explanation:
        "Bei Parallelschaltung gilt 1/R_ges = 1/R₁ + 1/R₂. Der Gesamtwiderstand ist immer kleiner als der kleinste Einzelwiderstand.",
    },
    {
      question: "Die Lorentzkraft steht...",
      options: [
        "Parallel zu v",
        "Parallel zu B",
        "Senkrecht auf v und B",
        "Entgegen v",
        "In Richtung B",
      ],
      correctIndex: 2,
      explanation:
        "Die Lorentzkraft steht senkrecht auf sowohl v (Geschwindigkeit) als auch B (Magnetfeld). Sie ändert nur die Richtung, nicht den Betrag der Geschwindigkeit.",
    },
    {
      question: "Welche Strahlung hat die höchste Energie?",
      options: [
        "Radiowellen",
        "Mikrowellen",
        "Sichtbares Licht",
        "Röntgenstrahlung",
        "Gammastrahlung",
      ],
      correctIndex: 4,
      explanation:
        "E = h·f: Höchste Frequenz = höchste Energie. Reihenfolge: Radio < Mikro < IR < Sichtbar < UV < Röntgen < Gamma.",
    },
    {
      question: "Beim Transformator gilt U₁/U₂ = ...",
      options: ["R₁/R₂", "I₁/I₂", "N₁/N₂", "P₁/P₂", "f₁/f₂"],
      correctIndex: 2,
      explanation:
        "Beim idealen Transformator gilt U₁/U₂ = N₁/N₂ (Windungszahl). Mehr Windungen auf der Sekundärseite → höhere Spannung (Aufwärtstransformator).",
    },
  ],
};
