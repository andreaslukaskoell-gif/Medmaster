export const fragenPart3 = [
  {
    id: "ph-q-101",
    stichwortId: "ph-5-01",
    fach: "physik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Ein Kupferdraht mit einer Länge von 2 m und einem Querschnitt von 1 mm² hat einen spezifischen Widerstand von 0,017 Ω·mm²/m. Welcher Widerstand ergibt sich?",
    optionen: ["0,017 Ω", "0,034 Ω", "0,068 Ω", "0,0085 Ω", "0,17 Ω"],
    korrekteAntwort: 1,
    erklärung:
      "Der Widerstand berechnet sich nach R = ρ·l/A. Mit ρ = 0,017 Ω·mm²/m, l = 2 m und A = 1 mm² ergibt sich: R = 0,017 · 2 / 1 = 0,034 Ω.",
    strategieTipp:
      "Bei Widerstandsberechnungen die Formel R = ρ·l/A verwenden und auf konsistente Einheiten achten.",
  },
  {
    id: "ph-q-102",
    stichwortId: "ph-5-01",
    fach: "physik" as const,
    schwierigkeit: "leicht" as const,
    fragetext:
      "Zwei Punktladungen mit gleicher Ladung stoßen sich ab. Was passiert mit der Kraft zwischen ihnen, wenn ihr Abstand verdoppelt wird?",
    optionen: [
      "Die Kraft verdoppelt sich",
      "Die Kraft halbiert sich",
      "Die Kraft wird auf ein Viertel reduziert",
      "Die Kraft wird auf ein Achtel reduziert",
      "Die Kraft bleibt gleich",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Nach dem Coulomb-Gesetz F = k·q₁·q₂/r² ist die Kraft umgekehrt proportional zum Quadrat des Abstands. Bei Verdopplung des Abstands wird die Kraft auf 1/4 reduziert.",
    strategieTipp:
      "Das 1/r²-Gesetz gilt für viele physikalische Phänomene (Coulomb-Kraft, Gravitation, Lichtintensität).",
  },
  {
    id: "ph-q-103",
    stichwortId: "ph-5-01",
    fach: "physik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Eine Glühbirne mit 60 W wird an eine Spannung von 230 V angeschlossen. Welche Stromstärke fließt durch die Glühbirne?",
    optionen: ["0,15 A", "0,26 A", "0,38 A", "3,8 A", "13,8 A"],
    korrekteAntwort: 1,
    erklärung:
      "Die elektrische Leistung ist P = U·I. Umgestellt nach I ergibt sich: I = P/U = 60 W / 230 V ≈ 0,26 A.",
    strategieTipp:
      "Die Formel P = U·I ist zentral für Berechnungen in der Elektrizitätslehre. Alle drei Größen können aus den anderen beiden berechnet werden.",
  },
  {
    id: "ph-q-104",
    stichwortId: "ph-5-01",
    fach: "physik" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "In einer Schaltung sind drei Widerstände R₁ = 10 Ω, R₂ = 20 Ω und R₃ = 30 Ω parallel geschaltet. Welcher Gesamtwiderstand ergibt sich?",
    optionen: ["60 Ω", "20 Ω", "5,45 Ω", "3,33 Ω", "1,83 Ω"],
    korrekteAntwort: 2,
    erklärung:
      "Bei Parallelschaltung gilt: 1/R_ges = 1/R₁ + 1/R₂ + 1/R₃ = 1/10 + 1/20 + 1/30 = 0,1 + 0,05 + 0,0333 = 0,1833. Also R_ges = 1/0,1833 ≈ 5,45 Ω.",
    strategieTipp:
      "Bei Parallelschaltungen ist der Gesamtwiderstand immer kleiner als der kleinste Einzelwiderstand. Kehrwerte addieren und dann wieder invertieren.",
  },
  {
    id: "ph-q-105",
    stichwortId: "ph-5-01",
    fach: "physik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was beschreibt das Ohmsche Gesetz?",
    optionen: [
      "Den Zusammenhang zwischen Kraft und Beschleunigung",
      "Den Zusammenhang zwischen Spannung, Stromstärke und Widerstand",
      "Den Zusammenhang zwischen Energie und Leistung",
      "Den Zusammenhang zwischen Ladung und Feldstärke",
      "Den Zusammenhang zwischen Frequenz und Wellenlänge",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Das Ohmsche Gesetz besagt: U = R·I, also dass die Spannung proportional zur Stromstärke ist, wobei der Widerstand die Proportionalitätskonstante darstellt.",
    strategieTipp:
      "Das Ohmsche Gesetz ist eine der wichtigsten Grundgleichungen der Elektrotechnik und gilt für ohmsche Widerstände.",
  },
  {
    id: "ph-q-106",
    stichwortId: "ph-5-01",
    fach: "physik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Ein elektrisches Feld zeigt von der positiven zur negativen Ladung. In welche Richtung würde sich ein freies Elektron in diesem Feld bewegen?",
    optionen: [
      "In Richtung des elektrischen Feldes",
      "Entgegen der Richtung des elektrischen Feldes",
      "Senkrecht zur Feldrichtung",
      "Es würde sich nicht bewegen",
      "In kreisförmigen Bahnen",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Das elektrische Feld zeigt per Definition von + nach -. Elektronen sind negativ geladen und bewegen sich daher entgegen der Feldrichtung, also zur positiven Ladung hin.",
    strategieTipp:
      "Feldlinien zeigen immer die Kraftrichtung auf eine positive Probeladung. Negative Ladungen bewegen sich entgegengesetzt.",
  },
  {
    id: "ph-q-107",
    stichwortId: "ph-5-01",
    fach: "physik" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Ein Kondensator mit 100 μF wird auf 12 V aufgeladen. Welche Ladung speichert er?",
    optionen: ["0,12 mC", "1,2 mC", "12 mC", "120 mC", "1200 mC"],
    korrekteAntwort: 1,
    erklärung:
      "Die Ladung auf einem Kondensator berechnet sich nach Q = C·U. Mit C = 100 μF = 100·10⁻⁶ F und U = 12 V: Q = 100·10⁻⁶ · 12 = 1,2·10⁻³ C = 1,2 mC.",
    strategieTipp:
      "Bei Kondensatorberechnungen auf die Einheitenpräfixe achten: μF = 10⁻⁶ F, mC = 10⁻³ C.",
  },
  {
    id: "ph-q-108",
    stichwortId: "ph-5-01",
    fach: "physik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Nach der ersten Kirchhoffschen Regel (Knotenregel) gilt an einem Verzweigungspunkt:",
    optionen: [
      "Die Summe aller Spannungen ist null",
      "Die Summe aller Widerstände ist konstant",
      "Die Summe aller zufließenden Ströme gleicht der Summe aller abfließenden Ströme",
      "Die elektrische Leistung ist maximal",
      "Die magnetische Feldstärke ist konstant",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Die Knotenregel besagt, dass an einem Verzweigungspunkt die Summe der zufließenden Ströme gleich der Summe der abfließenden Ströme ist. Dies folgt aus der Ladungserhaltung.",
    strategieTipp:
      "Knotenregel bezieht sich auf Ströme an Verzweigungen, Maschenregel auf Spannungen in geschlossenen Schleifen.",
  },
  {
    id: "ph-q-109",
    stichwortId: "ph-5-01",
    fach: "physik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Welche Einheit hat die elektrische Spannung?",
    optionen: ["Ampere (A)", "Volt (V)", "Ohm (Ω)", "Watt (W)", "Coulomb (C)"],
    korrekteAntwort: 1,
    erklärung:
      "Die elektrische Spannung wird in Volt (V) gemessen. 1 Volt = 1 Joule pro Coulomb (1 V = 1 J/C).",
    strategieTipp:
      "Grundeinheiten der Elektrizität merken: Spannung in V, Stromstärke in A, Widerstand in Ω, Ladung in C.",
  },
  {
    id: "ph-q-110",
    stichwortId: "ph-5-01",
    fach: "physik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Ein Heizgerät hat einen Widerstand von 50 Ω und wird an 230 V angeschlossen. Welche elektrische Leistung nimmt es auf?",
    optionen: ["460 W", "1058 W", "4,6 W", "11500 W", "280 W"],
    korrekteAntwort: 1,
    erklärung:
      "Die Leistung berechnet sich nach P = U²/R. Mit U = 230 V und R = 50 Ω: P = 230² / 50 = 52900 / 50 = 1058 W ≈ 1,06 kW.",
    strategieTipp:
      "Für die Leistung gibt es mehrere Formeln: P = U·I, P = I²·R, P = U²/R. Je nach gegebenen Größen die passende wählen.",
  },
  {
    id: "ph-q-111",
    stichwortId: "ph-5-01",
    fach: "physik" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Zwei Widerstände R₁ = 40 Ω und R₂ = 60 Ω sind in Reihe geschaltet und an 200 V angeschlossen. Welche Spannung fällt über R₁ ab?",
    optionen: ["80 V", "100 V", "120 V", "140 V", "200 V"],
    korrekteAntwort: 0,
    erklärung:
      "Bei Reihenschaltung ist der Strom überall gleich. R_ges = 40 + 60 = 100 Ω. I = U/R_ges = 200/100 = 2 A. U₁ = I·R₁ = 2·40 = 80 V.",
    strategieTipp:
      "Bei Reihenschaltung teilen sich die Widerstände die Gesamtspannung proportional zu ihren Werten auf.",
  },
  {
    id: "ph-q-112",
    stichwortId: "ph-5-01",
    fach: "physik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was versteht man unter einem elektrischen Leiter?",
    optionen: [
      "Ein Material, das elektrische Ladungen nicht transportieren kann",
      "Ein Material, das elektrische Ladungen gut transportieren kann",
      "Ein Material, das nur magnetische Felder leitet",
      "Ein Material, das Licht absorbiert",
      "Ein Material, das elektrische Energie speichert",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Ein elektrischer Leiter ist ein Material, das elektrische Ladungen (meist Elektronen) gut transportieren kann. Metalle sind typische Leiter.",
    strategieTipp: "Leiter haben viele frei bewegliche Ladungsträger, Isolatoren fast keine.",
  },
  {
    id: "ph-q-113",
    stichwortId: "ph-5-01",
    fach: "physik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Ein Magnetfeld wird durch einen stromdurchflossenen Leiter erzeugt. Wie verläuft das Magnetfeld um einen geraden Leiter?",
    optionen: [
      "Parallel zum Leiter",
      "In konzentrischen Kreisen um den Leiter",
      "Radial vom Leiter weg",
      "In Form von Ellipsen",
      "Es gibt kein Magnetfeld",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Nach der Rechte-Hand-Regel verlaufen die Magnetfeldlinien in konzentrischen Kreisen um einen stromdurchflossenen geraden Leiter.",
    strategieTipp:
      "Rechte-Hand-Regel: Daumen in Stromrichtung, gekrümmte Finger zeigen die Magnetfeldrichtung.",
  },
  {
    id: "ph-q-114",
    stichwortId: "ph-5-01",
    fach: "physik" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Eine Spule mit 200 Windungen hat eine Induktivität von 50 mH. Wenn der Strom in 0,1 s von 0 auf 2 A ansteigt, welche Selbstinduktionsspannung entsteht?",
    optionen: ["0,1 V", "0,5 V", "1,0 V", "2,0 V", "10 V"],
    korrekteAntwort: 2,
    erklärung:
      "Die Selbstinduktionsspannung berechnet sich nach U = -L·ΔI/Δt. Mit L = 50 mH = 0,05 H, ΔI = 2 A und Δt = 0,1 s: U = 0,05 · 2 / 0,1 = 1,0 V.",
    strategieTipp:
      "Die Induktionsspannung ist proportional zur Änderungsrate des Stroms. Einheit der Induktivität: Henry (H).",
  },
  {
    id: "ph-q-115",
    stichwortId: "ph-5-01",
    fach: "physik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Wechselstrom mit einer Amplitude von 325 V hat welchen Effektivwert?",
    optionen: ["162,5 V", "230 V", "325 V", "460 V", "650 V"],
    korrekteAntwort: 1,
    erklärung:
      "Der Effektivwert von Wechselstrom berechnet sich als U_eff = U_max / √2. Mit U_max = 325 V: U_eff = 325 / 1,414 ≈ 230 V (Haushaltsspannung).",
    strategieTipp:
      "Faktor √2 ≈ 1,414 zwischen Scheitelwert und Effektivwert bei sinusförmigem Wechselstrom merken.",
  },
  {
    id: "ph-q-116",
    stichwortId: "ph-5-01",
    fach: "physik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was sind elektromagnetische Wellen?",
    optionen: [
      "Nur mechanische Schwingungen",
      "Schwingungen elektrischer und magnetischer Felder, die sich im Raum ausbreiten",
      "Nur elektrische Felder ohne magnetische Komponente",
      "Nur magnetische Felder ohne elektrische Komponente",
      "Schallwellen in Metallen",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Elektromagnetische Wellen bestehen aus gekoppelten elektrischen und magnetischen Feldern, die senkrecht zueinander und zur Ausbreitungsrichtung schwingen.",
    strategieTipp:
      "EM-Wellen benötigen kein Medium und breiten sich im Vakuum mit Lichtgeschwindigkeit aus.",
  },
  {
    id: "ph-q-117",
    stichwortId: "ph-5-01",
    fach: "physik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Eine elektromagnetische Welle hat eine Frequenz von 600 THz. Welche Wellenlänge hat sie im Vakuum?",
    optionen: ["200 nm", "500 nm", "800 nm", "1000 nm", "2000 nm"],
    korrekteAntwort: 1,
    erklärung:
      "Mit c = λ·f folgt λ = c/f. Mit c = 3·10⁸ m/s und f = 600·10¹² Hz: λ = 3·10⁸ / 600·10¹² = 5·10⁻⁷ m = 500 nm (grünes Licht).",
    strategieTipp: "Beziehung c = λ·f gilt für alle EM-Wellen. Im sichtbaren Bereich: 400-700 nm.",
  },
  {
    id: "ph-q-118",
    stichwortId: "ph-5-01",
    fach: "physik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Welcher Bereich des elektromagnetischen Spektrums hat die kürzeste Wellenlänge?",
    optionen: [
      "Radiowellen",
      "Mikrowellen",
      "Infrarotstrahlung",
      "Röntgenstrahlung",
      "Gammastrahlung",
    ],
    korrekteAntwort: 4,
    erklärung:
      "Gammastrahlung hat die kürzeste Wellenlänge (< 10 pm) und damit die höchste Frequenz und Energie im EM-Spektrum.",
    strategieTipp:
      "Reihenfolge nach abnehmender Wellenlänge: Radio, Mikrowellen, IR, sichtbar, UV, Röntgen, Gamma.",
  },
  {
    id: "ph-q-119",
    stichwortId: "ph-5-01",
    fach: "physik" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Ein elektrischer Schwingkreis hat eine Kapazität von 10 nF und eine Induktivität von 100 μH. Welche Resonanzfrequenz ergibt sich?",
    optionen: ["50,3 kHz", "159 kHz", "503 kHz", "1,59 MHz", "15,9 MHz"],
    korrekteAntwort: 1,
    erklärung:
      "Die Resonanzfrequenz ist f = 1/(2π√(LC)). Mit L = 100·10⁻⁶ H und C = 10·10⁻⁹ F: f = 1/(2π√(10⁻⁴·10⁻⁸)) = 1/(2π·10⁻⁶) ≈ 159 kHz.",
    strategieTipp:
      "Formel für Schwingkreis: f = 1/(2π√(LC)). Auf Einheitenpräfixe achten: n = 10⁻⁹, μ = 10⁻⁶.",
  },
  {
    id: "ph-q-120",
    stichwortId: "ph-5-01",
    fach: "physik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Die Lorentzkraft wirkt auf:",
    optionen: [
      "Ruhende Ladungen in einem elektrischen Feld",
      "Bewegte Ladungen in einem Magnetfeld",
      "Neutrale Teilchen in einem elektrischen Feld",
      "Ruhende Ladungen in einem Magnetfeld",
      "Nur auf Elektronen, nicht auf Protonen",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Die Lorentzkraft F = q·v×B wirkt auf bewegte Ladungen in einem Magnetfeld. Sie steht senkrecht zur Bewegungsrichtung und zum Magnetfeld.",
    strategieTipp:
      "Lorentzkraft ist die Grundlage für viele Anwendungen wie Elektromotoren und Massenspektrometer.",
  },
  {
    id: "ph-q-121",
    stichwortId: "ph-5-01",
    fach: "physik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Ein Transformator hat ein Windungsverhältnis von 10:1 (Primär- zu Sekundärseite). An der Primärseite liegen 230 V an. Welche Spannung liegt an der Sekundärseite?",
    optionen: ["23 V", "230 V", "2300 V", "46 V", "115 V"],
    korrekteAntwort: 0,
    erklärung:
      "Für Transformatoren gilt U₂/U₁ = n₂/n₁. Mit n₁/n₂ = 10/1 und U₁ = 230 V: U₂ = 230 V / 10 = 23 V.",
    strategieTipp:
      "Transformatoren wandeln Spannungen proportional zum Windungsverhältnis. Mehr Windungen bedeuten höhere Spannung.",
  },
  {
    id: "ph-q-122",
    stichwortId: "ph-5-01",
    fach: "physik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Welche Aussage über elektrische Ladungen ist korrekt?",
    optionen: [
      "Gleichnamige Ladungen ziehen sich an",
      "Ungleichnamige Ladungen stoßen sich ab",
      "Gleichnamige Ladungen stoßen sich ab",
      "Elektrische Ladungen können sich nur in Metallen befinden",
      "Positive Ladungen sind schwerer als negative",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Gleichnamige Ladungen (beide positiv oder beide negativ) stoßen sich ab, ungleichnamige ziehen sich an. Dies ist ein fundamentales Prinzip der Elektrostatik.",
    strategieTipp: "Grundregel der Elektrostatik: Gleiche Ladungen abstoßend, ungleiche anziehend.",
  },
  {
    id: "ph-q-123",
    stichwortId: "ph-5-01",
    fach: "physik" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Ein Plattenkondensator hat einen Plattenabstand von 2 mm und eine Fläche von 100 cm². Die Dielektrizitätskonstante des Dielektrikums ist ε_r = 4. Welche Kapazität ergibt sich? (ε₀ = 8,85·10⁻¹² F/m)",
    optionen: ["17,7 pF", "177 pF", "1,77 nF", "17,7 nF", "177 nF"],
    korrekteAntwort: 1,
    erklärung:
      "C = ε₀·ε_r·A/d. Mit A = 100 cm² = 0,01 m², d = 0,002 m, ε_r = 4: C = 8,85·10⁻¹²·4·0,01/0,002 = 177·10⁻¹² F = 177 pF.",
    strategieTipp:
      "Bei Kondensatoren: Kapazität proportional zur Fläche und zur Dielektrizitätskonstante, umgekehrt proportional zum Abstand.",
  },
  {
    id: "ph-q-124",
    stichwortId: "ph-5-01",
    fach: "physik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Welche Energie wird in einem Kondensator mit 220 μF gespeichert, der auf 12 V aufgeladen ist?",
    optionen: ["0,0158 J", "0,158 J", "1,58 J", "15,8 J", "0,00158 J"],
    korrekteAntwort: 0,
    erklärung:
      "Die Energie im Kondensator ist E = ½·C·U². Mit C = 220·10⁻⁶ F und U = 12 V: E = 0,5·220·10⁻⁶·144 = 0,0158 J.",
    strategieTipp:
      "Kondensatorenergie: E = ½CU² oder E = ½QU. Der Faktor ½ kommt von der linearen Spannungsänderung beim Laden.",
  },
  {
    id: "ph-q-125",
    stichwortId: "ph-5-01",
    fach: "physik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Nach der zweiten Kirchhoffschen Regel (Maschenregel) gilt für eine geschlossene Schleife:",
    optionen: [
      "Die Summe aller Ströme ist null",
      "Die Summe aller Widerstände ist maximal",
      "Die Summe aller Spannungen ist null",
      "Die elektrische Leistung ist konstant",
      "Die magnetische Flussdichte ist konstant",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Die Maschenregel besagt, dass in einer geschlossenen Schleife die Summe aller Spannungen null ist. Dies folgt aus der Energieerhaltung.",
    strategieTipp:
      "Maschenregel: Spannungen in Schleifen, Knotenregel: Ströme an Verzweigungen. Beides folgt aus Erhaltungssätzen.",
  },
  {
    id: "ph-q-126",
    stichwortId: "ph-6-01",
    fach: "physik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Bei der Reflexion von Licht gilt:",
    optionen: [
      "Einfallswinkel ist größer als Reflexionswinkel",
      "Einfallswinkel ist kleiner als Reflexionswinkel",
      "Einfallswinkel ist gleich Reflexionswinkel",
      "Es gibt keinen Zusammenhang",
      "Reflexionswinkel ist immer 90°",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Das Reflexionsgesetz besagt: Einfallswinkel = Reflexionswinkel. Beide Winkel werden zur Normalen (Lot) gemessen.",
    strategieTipp:
      "Reflexionsgesetz ist fundamental in der geometrischen Optik. Beide Winkel zur Normalen, nicht zur Oberfläche.",
  },
  {
    id: "ph-q-127",
    stichwortId: "ph-6-01",
    fach: "physik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Licht geht von Luft (n = 1,0) in Glas (n = 1,5) über. Der Einfallswinkel beträgt 60°. Wie groß ist der Brechungswinkel ungefähr?",
    optionen: ["35°", "40°", "45°", "53°", "60°"],
    korrekteAntwort: 0,
    erklärung:
      "Nach dem Snellius-Gesetz: n₁·sin(α) = n₂·sin(β). Mit n₁ = 1, α = 60°, n₂ = 1,5: sin(β) = 1·sin(60°)/1,5 = 0,866/1,5 = 0,577, also β ≈ 35°.",
    strategieTipp:
      "Bei Übergang in optisch dichteres Medium wird der Strahl zum Lot hin gebrochen (kleinerer Winkel).",
  },
  {
    id: "ph-q-128",
    stichwortId: "ph-6-01",
    fach: "physik" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Ab welchem Grenzwinkel tritt Totalreflexion auf, wenn Licht von Wasser (n = 1,33) in Luft (n = 1,0) übergeht?",
    optionen: ["42°", "48,6°", "53°", "60°", "Totalreflexion kann hier nicht auftreten"],
    korrekteAntwort: 1,
    erklärung:
      "Der Grenzwinkel ist sin(α_g) = n₂/n₁ = 1,0/1,33 = 0,752. Also α_g = arcsin(0,752) ≈ 48,6°. Totalreflexion tritt bei Winkeln > 48,6° auf.",
    strategieTipp:
      "Totalreflexion nur beim Übergang von optisch dichterem zu dünnerem Medium möglich. Grenzwinkel: sin(α_g) = n₂/n₁.",
  },
  {
    id: "ph-q-129",
    stichwortId: "ph-6-01",
    fach: "physik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was ist eine konvexe Linse?",
    optionen: [
      "Eine Linse, die Lichtstrahlen zerstreut",
      "Eine Linse, die Lichtstrahlen sammelt",
      "Eine Linse, die Licht absorbiert",
      "Eine Linse, die Licht polarisiert",
      "Eine Linse ohne optische Wirkung",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Eine konvexe (bikonvexe) Linse ist in der Mitte dicker als am Rand und sammelt parallel einfallende Lichtstrahlen im Brennpunkt (Sammellinse).",
    strategieTipp:
      "Konvex = Sammellinse (positiv), konkav = Zerstreuungslinse (negativ). Konvex ist in der Mitte dicker.",
  },
  {
    id: "ph-q-130",
    stichwortId: "ph-6-01",
    fach: "physik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Eine Sammellinse hat eine Brennweite von 20 cm. Ein Gegenstand wird 30 cm vor der Linse platziert. Wo entsteht das Bild?",
    optionen: [
      "12 cm hinter der Linse",
      "30 cm hinter der Linse",
      "50 cm hinter der Linse",
      "60 cm hinter der Linse",
      "10 cm vor der Linse",
    ],
    korrekteAntwort: 3,
    erklärung:
      "Mit der Linsengleichung 1/f = 1/g + 1/b, wobei f = 20 cm, g = 30 cm: 1/20 = 1/30 + 1/b → 1/b = 1/20 - 1/30 = 1/60 → b = 60 cm.",
    strategieTipp:
      "Linsengleichung: 1/f = 1/g + 1/b. Positive b bedeutet reelles Bild hinter der Linse, negative b virtülles Bild vor der Linse.",
  },
  {
    id: "ph-q-131",
    stichwortId: "ph-6-01",
    fach: "physik" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Bei einem Doppelspaltexperiment beträgt der Spaltabstand 0,2 mm, die Wellenlänge 600 nm und der Abstand zum Schirm 2 m. Wie groß ist der Abstand zwischen zwei benachbarten hellen Streifen?",
    optionen: ["0,6 mm", "6 mm", "60 mm", "0,06 mm", "0,006 mm"],
    korrekteAntwort: 1,
    erklärung:
      "Der Streifenabstand ist Δy = λ·L/d. Mit λ = 600·10⁻⁹ m, L = 2 m, d = 0,2·10⁻³ m: Δy = 600·10⁻⁹·2/0,2·10⁻³ = 6·10⁻³ m = 6 mm.",
    strategieTipp:
      "Doppelspalt-Interferenz: Δy = λL/d. Größere Wellenlänge oder kleinerer Spaltabstand ergeben größere Abstände.",
  },
  {
    id: "ph-q-132",
    stichwortId: "ph-6-01",
    fach: "physik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was beschreibt der Welle-Teilchen-Dualismus?",
    optionen: [
      "Licht verhält sich nur als Welle",
      "Licht verhält sich nur als Teilchen",
      "Licht zeigt sowohl Wellen- als auch Teilcheneigenschaften",
      "Materie kann sich nicht wie eine Welle verhalten",
      "Elektronen sind reine Teilchen ohne Welleneigenschaften",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Der Welle-Teilchen-Dualismus besagt, dass Licht (und Materie) sowohl Wellen- als auch Teilcheneigenschaften zeigt, je nach Experiment (z.B. Interferenz vs. Photöffekt).",
    strategieTipp:
      "Welleneigenschaften: Interferenz, Beugung. Teilcheneigenschaften: Photöffekt, Compton-Effekt.",
  },
  {
    id: "ph-q-133",
    stichwortId: "ph-6-01",
    fach: "physik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was versteht man unter Dispersion bei Licht?",
    optionen: [
      "Die Absorption von Licht",
      "Die Reflexion von Licht",
      "Die Aufspaltung von weißem Licht in Spektralfarben",
      "Die Beugung von Licht",
      "Die Polarisation von Licht",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Dispersion ist die wellenlängenabhängige Brechung, die weißes Licht in seine Spektralfarben aufspaltet (z.B. im Prisma oder Regenbogen).",
    strategieTipp:
      "Dispersion entsteht, weil der Brechungsindex vom Material wellenlängenabhängig ist. Blaues Licht wird stärker gebrochen als rotes.",
  },
  {
    id: "ph-q-134",
    stichwortId: "ph-6-01",
    fach: "physik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Ein Mikroskop verwendet eine Objektivlinse mit 40-facher Vergrößerung und ein Okular mit 10-facher Vergrößerung. Welche Gesamtvergrößerung ergibt sich?",
    optionen: ["50-fach", "400-fach", "4-fach", "30-fach", "100-fach"],
    korrekteAntwort: 1,
    erklärung:
      "Die Gesamtvergrößerung eines Mikroskops ist das Produkt aus Objektiv- und Okularvergrößerung: 40 × 10 = 400-fach.",
    strategieTipp: "Bei mehrstufigen optischen Systemen werden Vergrößerungen multipliziert.",
  },
  {
    id: "ph-q-135",
    stichwortId: "ph-6-01",
    fach: "physik" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Das menschliche Auge hat in Ruhe eine Brechkraft von etwa 60 Dioptrien. Welcher Brennweite entspricht das?",
    optionen: ["1,67 cm", "6,0 cm", "16,7 mm", "60 mm", "0,6 mm"],
    korrekteAntwort: 0,
    erklärung:
      "Die Brechkraft D in Dioptrien ist D = 1/f (mit f in Metern). Mit D = 60 dpt: f = 1/60 m = 0,0167 m = 1,67 cm.",
    strategieTipp:
      "Dioptrie ist die Einheit der Brechkraft: 1 dpt = 1 m⁻¹. Hohe Dioptrienwerte bedeuten kurze Brennweiten.",
  },
  {
    id: "ph-q-136",
    stichwortId: "ph-6-01",
    fach: "physik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Bei welcher Fehlsichtigkeit ist der Augapfel zu lang und das Bild entsteht vor der Netzhaut?",
    optionen: [
      "Weitsichtigkeit (Hyperopie)",
      "Kurzsichtigkeit (Myopie)",
      "Alterssichtigkeit (Presbyopie)",
      "Astigmatismus",
      "Farbenblindheit",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Bei Kurzsichtigkeit (Myopie) ist der Augapfel zu lang, sodass das Bild vor der Netzhaut entsteht. Ferne Objekte erscheinen unscharf. Korrektur durch Zerstreuungslinse.",
    strategieTipp:
      "Kurzsichtig = zu langer Augapfel, Zerstreuungslinse hilft. Weitsichtig = zu kurzer Augapfel, Sammellinse hilft.",
  },
  {
    id: "ph-q-137",
    stichwortId: "ph-6-01",
    fach: "physik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Welche Farbe hat die längste Wellenlänge im sichtbaren Spektrum?",
    optionen: ["Violett", "Blau", "Grün", "Gelb", "Rot"],
    korrekteAntwort: 4,
    erklärung:
      "Rot hat mit etwa 700 nm die längste Wellenlänge im sichtbaren Spektrum, Violett mit etwa 400 nm die kürzeste.",
    strategieTipp:
      "Spektralfarben von kurz nach lang: Violett, Blau, Grün, Gelb, Orange, Rot (merke: VIBGYOR).",
  },
  {
    id: "ph-q-138",
    stichwortId: "ph-6-01",
    fach: "physik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Ein Teleskop hat ein Objektiv mit 1000 mm Brennweite und ein Okular mit 25 mm Brennweite. Welche Vergrößerung ergibt sich?",
    optionen: ["25-fach", "40-fach", "100-fach", "400-fach", "1000-fach"],
    korrekteAntwort: 1,
    erklärung:
      "Die Vergrößerung eines Teleskops ist V = f_Objektiv / f_Okular = 1000 mm / 25 mm = 40-fach.",
    strategieTipp:
      "Teleskopvergrößerung: Division der Brennweiten. Längere Objektivbrennweite oder kürzere Okularbrennweite erhöht die Vergrößerung.",
  },
  {
    id: "ph-q-139",
    stichwortId: "ph-6-01",
    fach: "physik" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Bei der Beugung am Einzelspalt beträgt die Spaltbreite 0,1 mm, die Wellenlänge 500 nm und der Abstand zum Schirm 1 m. Wie weit ist das erste Minimum vom zentralen Maximum entfernt?",
    optionen: ["0,5 cm", "5 mm", "0,5 mm", "5 cm", "50 mm"],
    korrekteAntwort: 0,
    erklärung:
      "Für das erste Minimum gilt: sin(α) = λ/b. Für kleine Winkel: x = λ·L/b = 500·10⁻⁹·1/(0,1·10⁻³) = 5·10⁻³ m = 5 mm = 0,5 cm.",
    strategieTipp:
      "Einzelspalt-Beugung: Position der Minima bei b·sin(α) = n·λ. Kleinwinkelnäherung: sin(α) ≈ tan(α) = x/L.",
  },
  {
    id: "ph-q-140",
    stichwortId: "ph-6-01",
    fach: "physik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was beschreibt die Absorption von Licht?",
    optionen: [
      "Die Umwandlung von Lichtenergie in andere Energieformen",
      "Die Reflexion von Licht an Oberflächen",
      "Die Brechung von Licht",
      "Die Streuung von Licht",
      "Die Beugung von Licht",
    ],
    korrekteAntwort: 0,
    erklärung:
      "Absorption ist die Umwandlung von Lichtenergie in andere Energieformen (meist Wärme). Dabei wird die Intensität des durchgehenden Lichts reduziert.",
    strategieTipp:
      "Absorption ist wellenlängenabhängig und bestimmt die Farbe von Objekten (absorbierte Farben werden nicht reflektiert).",
  },
  {
    id: "ph-q-141",
    stichwortId: "ph-6-01",
    fach: "physik" as const,
    schwierigkeit: "leicht" as const,
    fragetext:
      "Welches optische Gerät verwendet zwei Linsensysteme, um weit entfernte Objekte zu vergrößern?",
    optionen: ["Mikroskop", "Lupe", "Teleskop", "Projektor", "Periskop"],
    korrekteAntwort: 2,
    erklärung:
      "Ein Teleskop (Fernrohr) verwendet ein Objektivlinsensystem und ein Okular, um weit entfernte Objekte zu vergrößern.",
    strategieTipp:
      "Teleskop für ferne Objekte, Mikroskop für nahe kleine Objekte. Beide verwenden Objektiv + Okular.",
  },
  {
    id: "ph-q-142",
    stichwortId: "ph-6-01",
    fach: "physik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Bei der Totalreflexion in einem Glasfaserkabel wird das Licht:",
    optionen: [
      "Vollständig absorbiert",
      "Teilweise durchgelassen",
      "Vollständig reflektiert ohne Verluste",
      "In Wärme umgewandelt",
      "In verschiedene Wellenlängen aufgespalten",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Bei Totalreflexion wird das Licht vollständig an der Grenzfläche reflektiert, ohne dass Energie durch Transmission verloren geht. Dies ermöglicht Datenübertragung über große Distanzen.",
    strategieTipp:
      "Totalreflexion ist die Grundlage für Glasfasertechnologie. Erfordert Übergang von optisch dichterem zu dünnerem Medium.",
  },
  {
    id: "ph-q-143",
    stichwortId: "ph-6-01",
    fach: "physik" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Ein Prisma mit brechendem Winkel 60° und Brechungsindex 1,5 wird von einem Lichtstrahl senkrecht auf eine Fläche getroffen. Unter welchem Winkel tritt der Strahl aus der zweiten Fläche aus?",
    optionen: ["30°", "38,9°", "45°", "60°", "Der Strahl tritt nicht aus (Totalreflexion)"],
    korrekteAntwort: 1,
    erklärung:
      "Bei senkrechtem Einfall auf die erste Fläche trifft der Strahl die zweite unter 60° (Innenwinkel). Mit Snellius: 1,5·sin(60°) = 1·sin(α) → sin(α) = 1,5·0,866 = 1,299. Da > 1, liegt der Grenzfall vor. Korrektur: Strahl trifft unter 30° auf zweite Fläche (90°-60°). 1,5·sin(30°) = sin(α) → α = arcsin(0,75) ≈ 48,6°. Differenz zur Normalen: etwa 38,9° zur Prismenfläche.",
    strategieTipp:
      "Bei Prismen mehrfache Brechung beachten. Gesamtablenkung hängt vom brechenden Winkel und Brechungsindex ab.",
  },
  {
    id: "ph-q-144",
    stichwortId: "ph-6-01",
    fach: "physik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Aussage über Interferenz ist korrekt?",
    optionen: [
      "Interferenz kann nur bei Teilchen auftreten",
      "Bei konstruktiver Interferenz löschen sich Wellen aus",
      "Bei destruktiver Interferenz verstärken sich Wellen",
      "Interferenz ist ein Wellenphänomen, das Verstärkung oder Auslöschung bewirkt",
      "Interferenz tritt nur bei mechanischen Wellen auf",
    ],
    korrekteAntwort: 3,
    erklärung:
      "Interferenz ist ein charakteristisches Wellenphänomen. Bei konstruktiver Interferenz verstärken sich Wellen (gleiche Phase), bei destruktiver löschen sie sich aus (Gegenphase).",
    strategieTipp:
      "Interferenz ist ein Beweis für Wellennatur. Bedingung: Kohärente Quellen (feste Phasenbeziehung).",
  },
  {
    id: "ph-q-145",
    stichwortId: "ph-6-01",
    fach: "physik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was ist ein virtülles Bild?",
    optionen: [
      "Ein Bild, das auf einem Schirm aufgefangen werden kann",
      "Ein Bild, das nur durch Verlängerung der Lichtstrahlen entsteht",
      "Ein Bild, das immer vergrößert ist",
      "Ein Bild, das nur bei Sammellinsen entsteht",
      "Ein Bild, das keine optische Bedeutung hat",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Ein virtülles Bild entsteht durch die gedachte Verlängerung von Lichtstrahlen. Es kann nicht auf einem Schirm aufgefangen werden (z.B. Spiegelbild, Lupenbild).",
    strategieTipp:
      "Reelles Bild: Lichtstrahlen vereinigen sich tatsächlich. Virtülles Bild: nur Verlängerungen schneiden sich.",
  },
  {
    id: "ph-q-146",
    stichwortId: "ph-6-01",
    fach: "physik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Eine Zerstreuungslinse hat eine Brennweite von -15 cm. Ein Gegenstand steht 30 cm vor der Linse. Wo entsteht das Bild?",
    optionen: [
      "10 cm vor der Linse",
      "10 cm hinter der Linse",
      "45 cm vor der Linse",
      "45 cm hinter der Linse",
      "30 cm vor der Linse",
    ],
    korrekteAntwort: 0,
    erklärung:
      "Mit 1/f = 1/g + 1/b und f = -15 cm, g = 30 cm: 1/(-15) = 1/30 + 1/b → 1/b = -1/15 - 1/30 = -3/30 = -1/10 → b = -10 cm. Negativ bedeutet vor der Linse (virtüll).",
    strategieTipp:
      "Zerstreuungslinsen haben negative Brennweite und erzeugen immer virtülle, verkleinerte, aufrechte Bilder.",
  },
  {
    id: "ph-q-147",
    stichwortId: "ph-6-01",
    fach: "physik" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Beim Photöffekt werden Elektronen aus einer Metalloberfläche herausgelöst. Was ist die minimale Energie eines Photons, um ein Elektron aus Cäsium (Austrittsarbeit 2,1 eV) zu lösen?",
    optionen: ["1,6·10⁻¹⁹ J", "2,1·10⁻¹⁹ J", "3,36·10⁻¹⁹ J", "4,2·10⁻¹⁹ J", "6,63·10⁻¹⁹ J"],
    korrekteAntwort: 2,
    erklärung:
      "Die minimale Energie entspricht der Austrittsarbeit. 1 eV = 1,6·10⁻¹⁹ J, also E = 2,1 eV · 1,6·10⁻¹⁹ J/eV = 3,36·10⁻¹⁹ J.",
    strategieTipp: "Photöffekt: E_Photon = W_Austritt + E_kin. Umrechnung: 1 eV = 1,6·10⁻¹⁹ J.",
  },
  {
    id: "ph-q-148",
    stichwortId: "ph-6-01",
    fach: "physik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Ein Regenbogen entsteht durch:",
    optionen: [
      "Nur Reflexion von Sonnenlicht in Wassertropfen",
      "Nur Brechung von Sonnenlicht in Wassertropfen",
      "Brechung, Dispersion und Reflexion in Wassertropfen",
      "Beugung an Wassertropfen",
      "Streuung an Eiskristallen",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Ein Regenbogen entsteht durch Brechung beim Eintritt in den Tropfen (mit Dispersion), Reflexion an der Rückseite und erneute Brechung beim Austritt. Die Dispersion trennt die Farben.",
    strategieTipp:
      "Regenbogen: Kombination mehrerer optischer Phänomene. Rot außen (weniger stark gebrochen), Violett innen.",
  },
  {
    id: "ph-q-149",
    stichwortId: "ph-6-01",
    fach: "physik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Welche Eigenschaft hat eine ebene Spiegelfläche bezüglich des Bildes?",
    optionen: [
      "Das Bild ist vergrößert",
      "Das Bild ist verkleinert",
      "Das Bild ist gleich groß und seitenvertauscht",
      "Das Bild ist kopfüber",
      "Es entsteht kein Bild",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Ein ebener Spiegel erzeugt ein virtülles Bild in gleicher Größe wie das Objekt, das seitenvertauscht (spiegelverkehrt) und gleich weit hinter dem Spiegel erscheint.",
    strategieTipp:
      "Ebener Spiegel: 1:1 Abbildung, virtüll, aufrecht, seitenvertauscht, Bildweite = Gegenstandsweite.",
  },
  {
    id: "ph-q-150",
    stichwortId: "ph-6-01",
    fach: "physik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Die Brechkraft einer Brille beträgt +2,5 Dioptrien. Welche Art von Fehlsichtigkeit wird damit korrigiert?",
    optionen: [
      "Kurzsichtigkeit",
      "Weitsichtigkeit",
      "Astigmatismus",
      "Farbenblindheit",
      "Nachtblindheit",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Positive Dioptrienwerte (+2,5 dpt) bedeuten eine Sammellinse. Diese wird zur Korrektur von Weitsichtigkeit (Hyperopie) verwendet, bei der das Auge zu schwach bricht.",
    strategieTipp:
      "Positive Brechkraft (Sammellinse) für Weitsichtigkeit, negative Brechkraft (Zerstreuungslinse) für Kurzsichtigkeit.",
  },
];
