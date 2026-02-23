export const fragenPart2 = [
  {
    id: "ma-q-051",
    stichwortId: "ma-3-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext:
      "Ein Rechteck hat eine Länge von 12 cm und eine Breite von 8 cm. Wie groß ist der Umfang des Rechtecks?",
    optionen: ["20 cm", "40 cm", "96 cm", "80 cm", "48 cm"],
    korrekteAntwort: 1,
    erklärung:
      "Der Umfang eines Rechtecks berechnet sich nach der Formel U = 2·(a + b). Hier: U = 2·(12 + 8) = 2·20 = 40 cm.",
    strategieTipp:
      "Merke dir die Umfangsformel für Rechtecke: U = 2a + 2b oder U = 2·(a + b). Beide Formen führen zum gleichen Ergebnis.",
  },
  {
    id: "ma-q-052",
    stichwortId: "ma-3-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Ein Kreis hat einen Radius von 5 cm. Welche Fläche hat der Kreis? (π ≈ 3,14)",
    optionen: ["15,7 cm²", "31,4 cm²", "78,5 cm²", "157 cm²", "62,8 cm²"],
    korrekteAntwort: 2,
    erklärung:
      "Die Kreisfläche berechnet sich mit A = π·r². Einsetzen: A = 3,14·5² = 3,14·25 = 78,5 cm².",
    strategieTipp:
      "Quadriere zürst den Radius, dann multipliziere mit π. Achte darauf, ob π oder ein Näherungswert gegeben ist.",
  },
  {
    id: "ma-q-053",
    stichwortId: "ma-3-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Ein rechtwinkliges Dreieck hat Katheten von 6 cm und 8 cm. Wie lang ist die Hypotenuse?",
    optionen: ["14 cm", "10 cm", "12 cm", "9 cm", "11 cm"],
    korrekteAntwort: 1,
    erklärung:
      "Nach dem Satz des Pythagoras gilt: c² = a² + b². Also: c² = 6² + 8² = 36 + 64 = 100, daher c = √100 = 10 cm.",
    strategieTipp:
      "Der Satz des Pythagoras ist fundamental. Das Tripel (3,4,5) und seine Vielfachen wie (6,8,10) kommen häufig vor.",
  },
  {
    id: "ma-q-054",
    stichwortId: "ma-3-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Ein Würfel hat eine Kantenlänge von 4 cm. Wie groß ist sein Volumen?",
    optionen: ["16 cm³", "48 cm³", "64 cm³", "96 cm³", "32 cm³"],
    korrekteAntwort: 2,
    erklärung:
      "Das Volumen eines Würfels (Quader mit gleichen Kanten) ist V = a³. Hier: V = 4³ = 64 cm³.",
    strategieTipp:
      "Ein Würfel ist ein spezieller Quader. Für alle Quader gilt V = a·b·c, beim Würfel ist a = b = c.",
  },
  {
    id: "ma-q-055",
    stichwortId: "ma-3-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Welcher Winkel ergibt sich, wenn man zwei rechte Winkel addiert?",
    optionen: ["90°", "180°", "270°", "360°", "120°"],
    korrekteAntwort: 1,
    erklärung:
      "Ein rechter Winkel beträgt 90°. Zwei rechte Winkel ergeben: 90° + 90° = 180° (ein gestreckter Winkel).",
    strategieTipp:
      "Lerne die Winkeltypen: spitzer Winkel (<90°), rechter Winkel (90°), stumpfer Winkel (90°-180°), gestreckter Winkel (180°), Vollwinkel (360°).",
  },
  {
    id: "ma-q-056",
    stichwortId: "ma-3-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Ein Zylinder hat einen Radius von 3 cm und eine Höhe von 10 cm. Wie groß ist sein Volumen? (π ≈ 3,14)",
    optionen: ["94,2 cm³", "282,6 cm³", "188,4 cm³", "314 cm³", "942 cm³"],
    korrekteAntwort: 1,
    erklärung:
      "Das Zylindervolumen ist V = π·r²·h. Einsetzen: V = 3,14·3²·10 = 3,14·9·10 = 282,6 cm³.",
    strategieTipp:
      "Bei Zylindern: Berechne zürst die Grundfläche (Kreis: π·r²), dann multipliziere mit der Höhe h.",
  },
  {
    id: "ma-q-057",
    stichwortId: "ma-3-01",
    fach: "mathematik" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Eine Kugel hat einen Durchmesser von 6 cm. Wie groß ist ihr Volumen? (π ≈ 3,14)",
    optionen: ["113,04 cm³", "904,32 cm³", "226,08 cm³", "452,16 cm³", "678,24 cm³"],
    korrekteAntwort: 0,
    erklärung:
      "Das Kugelvolumen ist V = (4/3)·π·r³. Der Radius ist r = d/2 = 3 cm. Also: V = (4/3)·3,14·3³ = (4/3)·3,14·27 = (4/3)·84,78 = 113,04 cm³.",
    strategieTipp:
      "Bei Kugeln: Durchmesser halbieren für den Radius! Die Formel V = (4/3)·π·r³ solltest du auswendig kennen.",
  },
  {
    id: "ma-q-058",
    stichwortId: "ma-3-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Ein Quader hat die Maße 5 cm × 4 cm × 3 cm. Wie groß ist seine Oberfläche?",
    optionen: ["60 cm²", "94 cm²", "47 cm²", "120 cm²", "74 cm²"],
    korrekteAntwort: 1,
    erklärung:
      "Die Oberfläche eines Quaders ist O = 2·(ab + ac + bc). Also: O = 2·(5·4 + 5·3 + 4·3) = 2·(20 + 15 + 12) = 2·47 = 94 cm².",
    strategieTipp:
      "Ein Quader hat 6 Flächen: 2 Flächen von jeder Größe (ab, ac, bc). Berechne alle drei und verdopple die Summe.",
  },
  {
    id: "ma-q-059",
    stichwortId: "ma-3-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext:
      "Ein Dreieck hat eine Grundseite von 10 cm und eine Höhe von 6 cm. Wie groß ist seine Fläche?",
    optionen: ["16 cm²", "60 cm²", "30 cm²", "20 cm²", "40 cm²"],
    korrekteAntwort: 2,
    erklärung:
      "Die Dreiecksfläche berechnet sich mit A = (1/2)·g·h. Einsetzen: A = (1/2)·10·6 = (1/2)·60 = 30 cm².",
    strategieTipp:
      "Die Formel A = (g·h)/2 ist einfach: Grundseite mal Höhe, dann halbieren. Die Höhe steht immer senkrecht auf der Grundseite.",
  },
  {
    id: "ma-q-060",
    stichwortId: "ma-3-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Ein Kreis hat einen Umfang von 31,4 cm. Wie groß ist sein Radius? (π ≈ 3,14)",
    optionen: ["10 cm", "5 cm", "15 cm", "7,5 cm", "2,5 cm"],
    korrekteAntwort: 1,
    erklärung:
      "Der Kreisumfang ist U = 2·π·r. Umgestellt: r = U/(2·π) = 31,4/(2·3,14) = 31,4/6,28 = 5 cm.",
    strategieTipp:
      "Wenn der Umfang gegeben ist, stelle die Formel nach r um. Umgekehrte Rechnung: dividiere statt zu multiplizieren.",
  },
  {
    id: "ma-q-061",
    stichwortId: "ma-3-01",
    fach: "mathematik" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Eine quadratische Pyramide hat eine Grundkante von 6 cm und eine Höhe von 8 cm. Wie groß ist ihr Volumen?",
    optionen: ["96 cm³", "144 cm³", "288 cm³", "192 cm³", "48 cm³"],
    korrekteAntwort: 0,
    erklärung:
      "Das Pyramidenvolumen ist V = (1/3)·Grundfläche·Höhe. Die Grundfläche ist 6² = 36 cm². Also: V = (1/3)·36·8 = (1/3)·288 = 96 cm³.",
    strategieTipp:
      "Pyramiden und Kegel haben immer den Faktor 1/3 in der Volumenformel. Berechne zürst die Grundfläche, dann multipliziere mit h/3.",
  },
  {
    id: "ma-q-062",
    stichwortId: "ma-3-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Ein gleichseitiges Dreieck hat eine Seitenlänge von 8 cm. Welchen Umfang hat es?",
    optionen: ["16 cm", "20 cm", "24 cm", "32 cm", "12 cm"],
    korrekteAntwort: 2,
    erklärung:
      "Bei einem gleichseitigen Dreieck sind alle drei Seiten gleich lang. Der Umfang ist U = 3·a = 3·8 = 24 cm.",
    strategieTipp:
      "Bei gleichseitigen Dreiecken ist der Umfang einfach die dreifache Seitenlänge. Alle Winkel betragen 60°.",
  },
  {
    id: "ma-q-063",
    stichwortId: "ma-3-01",
    fach: "mathematik" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Ein regelmäßiges Teträder hat eine Kantenlänge von 6 cm. Die Oberfläche besteht aus 4 gleichseitigen Dreiecken. Wie groß ist die gesamte Oberfläche? (Höhe eines gleichseitigen Dreiecks mit Seite a: h ≈ 0,866·a)",
    optionen: ["31,2 cm²", "62,4 cm²", "93,6 cm²", "124,8 cm²", "46,8 cm²"],
    korrekteAntwort: 1,
    erklärung:
      "Höhe eines Dreiecks: h = 0,866·6 ≈ 5,2 cm. Fläche eines Dreiecks: A = (1/2)·6·5,2 = 15,6 cm². Gesamtoberfläche: 4·15,6 = 62,4 cm².",
    strategieTipp:
      "Ein Teträder hat 4 gleichseitige Dreiecksflächen. Berechne die Fläche einer Seite und multipliziere mit 4.",
  },
  {
    id: "ma-q-064",
    stichwortId: "ma-3-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Wie viele Grad hat die Winkelsumme in einem Viereck?",
    optionen: ["180°", "270°", "360°", "450°", "540°"],
    korrekteAntwort: 2,
    erklärung:
      "Die Winkelsumme in einem n-Eck beträgt (n-2)·180°. Für ein Viereck (n=4): (4-2)·180° = 2·180° = 360°.",
    strategieTipp:
      "Formel für die Winkelsumme: (n-2)·180°. Dreieck: 180°, Viereck: 360°, Fünfeck: 540°.",
  },
  {
    id: "ma-q-065",
    stichwortId: "ma-3-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Ein Rechteck hat einen Umfang von 60 cm. Die Länge ist doppelt so groß wie die Breite. Wie groß ist die Breite?",
    optionen: ["10 cm", "15 cm", "20 cm", "30 cm", "12 cm"],
    korrekteAntwort: 0,
    erklärung:
      "Sei b die Breite, dann ist die Länge l = 2b. Umfang: U = 2·(l + b) = 2·(2b + b) = 6b = 60 cm. Also: b = 10 cm.",
    strategieTipp:
      "Bei Textaufgaben mit Verhältnissen: Setze eine Variable für die kleinere Größe, drücke die größere damit aus.",
  },
  {
    id: "ma-q-066",
    stichwortId: "ma-3-01",
    fach: "mathematik" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Eine Kugel hat eine Oberfläche von 314 cm². Wie groß ist ihr Radius? (π ≈ 3,14)",
    optionen: ["5 cm", "10 cm", "7,5 cm", "12,5 cm", "15 cm"],
    korrekteAntwort: 0,
    erklärung:
      "Die Kugeloberfläche ist O = 4·π·r². Umgestellt: r² = O/(4·π) = 314/(4·3,14) = 314/12,56 = 25, also r = 5 cm.",
    strategieTipp:
      "Bei der Kugeloberfläche O = 4·π·r² musst du nach r² auflösen und dann die Wurzel ziehen.",
  },
  {
    id: "ma-q-067",
    stichwortId: "ma-3-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Ein Prisma hat als Grundfläche ein Dreieck mit Fläche 24 cm². Die Höhe des Prismas beträgt 7 cm. Wie groß ist das Volumen?",
    optionen: ["168 cm³", "84 cm³", "336 cm³", "56 cm³", "112 cm³"],
    korrekteAntwort: 0,
    erklärung: "Das Volumen eines Prismas ist V = Grundfläche·Höhe = 24·7 = 168 cm³.",
    strategieTipp:
      "Bei Prismen ist die Formel immer V = G·h, unabhängig von der Form der Grundfläche (Dreieck, Rechteck, etc.).",
  },
  {
    id: "ma-q-068",
    stichwortId: "ma-3-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Ein Quadrat hat eine Seitenlänge von 9 cm. Wie groß ist seine Fläche?",
    optionen: ["18 cm²", "36 cm²", "81 cm²", "72 cm²", "27 cm²"],
    korrekteAntwort: 2,
    erklärung: "Die Fläche eines Quadrats ist A = a². Hier: A = 9² = 81 cm².",
    strategieTipp:
      "Ein Quadrat ist ein spezielles Rechteck mit gleichen Seiten. Die Fläche ist einfach Seite mal Seite.",
  },
  {
    id: "ma-q-069",
    stichwortId: "ma-3-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Zwei sich schneidende Geraden bilden vier Winkel. Ein Winkel beträgt 65°. Wie groß ist der gegenüberliegende Scheitelwinkel?",
    optionen: ["25°", "115°", "65°", "90°", "130°"],
    korrekteAntwort: 2,
    erklärung:
      "Scheitelwinkel sind immer gleich groß. Der gegenüberliegende Winkel beträgt also ebenfalls 65°.",
    strategieTipp:
      "Scheitelwinkel sind identisch. Nebenwinkel ergänzen sich zu 180°. Diese Regeln sind fundamental in der Geometrie.",
  },
  {
    id: "ma-q-070",
    stichwortId: "ma-3-01",
    fach: "mathematik" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Ein Zylinder und eine Kugel haben den gleichen Radius von 3 cm. Der Zylinder hat eine Höhe von 4 cm. Um wie viel ist das Volumen des Zylinders größer als das der Kugel? (π ≈ 3,14)",
    optionen: ["113,04 cm³", "0 cm³", "56,52 cm³", "28,26 cm³", "84,78 cm³"],
    korrekteAntwort: 3,
    erklärung:
      "Zylinder: V = π·r²·h = 3,14·9·4 = 113,04 cm³. Kugel: V = (4/3)·π·r³ = (4/3)·3,14·27 = 113,04 cm³. Differenz: 113,04 - 84,78 = 28,26 cm³.",
    strategieTipp:
      "Berechne beide Volumen separat und bilde dann die Differenz. Achte auf die unterschiedlichen Formeln.",
  },
  {
    id: "ma-q-071",
    stichwortId: "ma-3-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext:
      "Ein Parallelogramm hat eine Grundseite von 12 cm und eine Höhe von 5 cm. Wie groß ist seine Fläche?",
    optionen: ["17 cm²", "34 cm²", "60 cm²", "30 cm²", "24 cm²"],
    korrekteAntwort: 2,
    erklärung: "Die Fläche eines Parallelogramms ist A = g·h = 12·5 = 60 cm².",
    strategieTipp:
      "Beim Parallelogramm gilt wie beim Rechteck A = g·h, wobei h die Höhe ist (senkrecht zur Grundseite).",
  },
  {
    id: "ma-q-072",
    stichwortId: "ma-3-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Ein Kreißektor hat einen Radius von 6 cm und einen Zentriwinkel von 60°. Wie groß ist die Fläche des Sektors? (π ≈ 3,14)",
    optionen: ["18,84 cm²", "6,28 cm²", "37,68 cm²", "9,42 cm²", "12,56 cm²"],
    korrekteAntwort: 0,
    erklärung:
      "Die Fläche eines Kreißektors ist A = (α/360°)·π·r². Hier: A = (60°/360°)·3,14·36 = (1/6)·113,04 = 18,84 cm².",
    strategieTipp:
      "Ein Kreißektor ist ein Ausschnitt des Kreises. Berechne den Anteil des Winkels (α/360°) und multipliziere mit der Kreisfläche.",
  },
  {
    id: "ma-q-073",
    stichwortId: "ma-3-01",
    fach: "mathematik" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Ein Kegel hat einen Grundkreis-Radius von 4 cm und eine Höhe von 9 cm. Wie groß ist sein Volumen? (π ≈ 3,14)",
    optionen: ["150,72 cm³", "452,16 cm³", "113,04 cm³", "226,08 cm³", "75,36 cm³"],
    korrekteAntwort: 0,
    erklärung:
      "Das Kegelvolumen ist V = (1/3)·π·r²·h = (1/3)·3,14·16·9 = (1/3)·452,16 = 150,72 cm³.",
    strategieTipp:
      "Der Kegel hat wie die Pyramide den Faktor 1/3. Die Grundfläche ist ein Kreis (π·r²), multipliziert mit h/3.",
  },
  {
    id: "ma-q-074",
    stichwortId: "ma-3-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Ein Würfel hat eine Oberfläche von 150 cm². Wie lang ist seine Kante?",
    optionen: ["25 cm", "5 cm", "6 cm", "7,5 cm", "10 cm"],
    korrekteAntwort: 1,
    erklärung: "Die Oberfläche eines Würfels ist O = 6·a². Also: 6·a² = 150, a² = 25, a = 5 cm.",
    strategieTipp:
      "Ein Würfel hat 6 gleiche quadratische Flächen. Teile die Gesamtoberfläche durch 6, dann ziehe die Wurzel.",
  },
  {
    id: "ma-q-075",
    stichwortId: "ma-3-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext:
      "Ein rechtwinkliges Dreieck hat eine Hypotenuse von 13 cm und eine Kathete von 5 cm. Wie lang ist die andere Kathete?",
    optionen: ["8 cm", "12 cm", "10 cm", "14 cm", "18 cm"],
    korrekteAntwort: 1,
    erklärung:
      "Nach Pythagoras: a² + b² = c². Also: 5² + b² = 13², 25 + b² = 169, b² = 144, b = 12 cm.",
    strategieTipp:
      "Wenn Hypotenuse und eine Kathete gegeben sind, stelle die Pythagoras-Formel um: b² = c² - a².",
  },
  {
    id: "ma-q-076",
    stichwortId: "ma-4-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Wie viele Sekunden hat eine Stunde?",
    optionen: [
      "600 Sekunden",
      "1.800 Sekunden",
      "3.600 Sekunden",
      "7.200 Sekunden",
      "1.200 Sekunden",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Eine Stunde hat 60 Minuten, jede Minute hat 60 Sekunden. Also: 60·60 = 3.600 Sekunden.",
    strategieTipp:
      "Merke dir: 1 h = 60 min = 3.600 s. Dies ist eine wichtige Basisumrechnung für viele Aufgaben.",
  },
  {
    id: "ma-q-077",
    stichwortId: "ma-4-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Wie viele Meter sind 2,5 Kilometer?",
    optionen: ["250 m", "2.500 m", "25.000 m", "250.000 m", "25 m"],
    korrekteAntwort: 1,
    erklärung: "1 Kilometer = 1.000 Meter. Also: 2,5 km = 2,5·1.000 = 2.500 m.",
    strategieTipp:
      "Bei Längenumrechnungen: 1 km = 1.000 m, 1 m = 100 cm, 1 cm = 10 mm. Multipliziere oder dividiere mit den entsprechenden Faktoren.",
  },
  {
    id: "ma-q-078",
    stichwortId: "ma-4-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Wie viele Quadratmeter sind 0,5 Hektar?",
    optionen: ["50 m²", "500 m²", "5.000 m²", "50.000 m²", "500.000 m²"],
    korrekteAntwort: 2,
    erklärung: "1 Hektar = 10.000 m². Also: 0,5 ha = 0,5·10.000 = 5.000 m².",
    strategieTipp:
      "Hektar wird oft in der Landwirtschaft verwendet. Merke: 1 ha = 10.000 m² = 100 m × 100 m.",
  },
  {
    id: "ma-q-079",
    stichwortId: "ma-4-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Wie viele Liter sind 3,2 Kubikmeter?",
    optionen: ["32 Liter", "320 Liter", "3.200 Liter", "32.000 Liter", "0,32 Liter"],
    korrekteAntwort: 2,
    erklärung: "1 m³ = 1.000 Liter. Also: 3,2 m³ = 3,2·1.000 = 3.200 Liter.",
    strategieTipp:
      "1 Kubikmeter entspricht 1.000 Litern. Auch wichtig: 1 Liter = 1 dm³ = 1.000 cm³.",
  },
  {
    id: "ma-q-080",
    stichwortId: "ma-4-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Wie viele Zentimeter sind 2,4 Meter?",
    optionen: ["24 cm", "240 cm", "2.400 cm", "0,24 cm", "2,4 cm"],
    korrekteAntwort: 1,
    erklärung: "1 Meter = 100 Zentimeter. Also: 2,4 m = 2,4·100 = 240 cm.",
    strategieTipp:
      "Meter zu Zentimeter: Multipliziere mit 100. Zentimeter zu Meter: Dividiere durch 100.",
  },
  {
    id: "ma-q-081",
    stichwortId: "ma-4-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Wie viele Quadratzentimeter sind 0,08 Quadratmeter?",
    optionen: ["8 cm²", "80 cm²", "800 cm²", "8.000 cm²", "0,8 cm²"],
    korrekteAntwort: 2,
    erklärung:
      "1 m² = 10.000 cm² (weil 1 m = 100 cm, also 1 m² = 100·100 = 10.000 cm²). Daher: 0,08 m² = 0,08·10.000 = 800 cm².",
    strategieTipp:
      "Bei Flächenumrechnungen wird quadriert: 1 m = 100 cm → 1 m² = 10.000 cm². Achte auf die Potenzen!",
  },
  {
    id: "ma-q-082",
    stichwortId: "ma-4-01",
    fach: "mathematik" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Wie viele Kubikzentimeter sind 0,0045 Kubikmeter?",
    optionen: ["45 cm³", "450 cm³", "4.500 cm³", "45.000 cm³", "450.000 cm³"],
    korrekteAntwort: 2,
    erklärung:
      "1 m³ = 1.000.000 cm³ (weil 1 m = 100 cm, also 1 m³ = 100·100·100 = 1.000.000 cm³). Daher: 0,0045 m³ = 0,0045·1.000.000 = 4.500 cm³.",
    strategieTipp:
      "Bei Volumenumrechnungen wird hoch 3 gerechnet: 1 m = 100 cm → 1 m³ = 1.000.000 cm³. Oder: 1 m³ = 1.000 dm³ = 1.000.000 cm³.",
  },
  {
    id: "ma-q-083",
    stichwortId: "ma-4-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Wie viele Minuten sind 2,5 Stunden?",
    optionen: ["125 Minuten", "150 Minuten", "250 Minuten", "100 Minuten", "200 Minuten"],
    korrekteAntwort: 1,
    erklärung: "1 Stunde = 60 Minuten. Also: 2,5 h = 2,5·60 = 150 Minuten.",
    strategieTipp:
      "Stunden zu Minuten: Multipliziere mit 60. Minuten zu Stunden: Dividiere durch 60.",
  },
  {
    id: "ma-q-084",
    stichwortId: "ma-4-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Ein Schwimmbecken fasst 48.000 Liter Wasser. Wie viele Kubikmeter sind das?",
    optionen: ["4,8 m³", "48 m³", "480 m³", "4.800 m³", "0,48 m³"],
    korrekteAntwort: 1,
    erklärung: "1.000 Liter = 1 m³. Also: 48.000 Liter = 48.000/1.000 = 48 m³.",
    strategieTipp:
      "Liter zu Kubikmeter: Dividiere durch 1.000. Kubikmeter zu Liter: Multipliziere mit 1.000.",
  },
  {
    id: "ma-q-085",
    stichwortId: "ma-4-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Wie viele Millimeter sind 0,75 Meter?",
    optionen: ["7,5 mm", "75 mm", "750 mm", "7.500 mm", "0,75 mm"],
    korrekteAntwort: 2,
    erklärung: "1 Meter = 1.000 Millimeter. Also: 0,75 m = 0,75·1.000 = 750 mm.",
    strategieTipp: "Meter zu Millimeter: Multipliziere mit 1.000 (1 m = 100 cm = 1.000 mm).",
  },
  {
    id: "ma-q-086",
    stichwortId: "ma-4-01",
    fach: "mathematik" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Ein Grundstück hat eine Fläche von 2.500 m². Wie viele Ar sind das?",
    optionen: ["0,25 Ar", "2,5 Ar", "25 Ar", "250 Ar", "2.500 Ar"],
    korrekteAntwort: 2,
    erklärung: "1 Ar = 100 m². Also: 2.500 m² = 2.500/100 = 25 Ar.",
    strategieTipp:
      "Flächeneinheiten: 1 Ar = 100 m², 1 Hektar = 100 Ar = 10.000 m². Diese Einheiten werden bei Grundstücken verwendet.",
  },
  {
    id: "ma-q-087",
    stichwortId: "ma-4-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Wie viele Dezimeter sind 3,6 Meter?",
    optionen: ["0,36 dm", "3,6 dm", "36 dm", "360 dm", "3.600 dm"],
    korrekteAntwort: 2,
    erklärung: "1 Meter = 10 Dezimeter. Also: 3,6 m = 3,6·10 = 36 dm.",
    strategieTipp: "Dezimeter sind ein Zehntel Meter. 1 m = 10 dm = 100 cm = 1.000 mm.",
  },
  {
    id: "ma-q-088",
    stichwortId: "ma-4-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Wie viele Quadratdezimeter sind 5 Quadratmeter?",
    optionen: ["50 dm²", "500 dm²", "5.000 dm²", "50.000 dm²", "5 dm²"],
    korrekteAntwort: 1,
    erklärung:
      "1 m² = 100 dm² (weil 1 m = 10 dm, also 1 m² = 10·10 = 100 dm²). Daher: 5 m² = 5·100 = 500 dm².",
    strategieTipp: "Bei Quadratdezimetern: 1 m = 10 dm → 1 m² = 100 dm². Auch: 1 dm² = 100 cm².",
  },
  {
    id: "ma-q-089",
    stichwortId: "ma-4-01",
    fach: "mathematik" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Wie viele Kubikdezimeter sind 0,08 Kubikmeter?",
    optionen: ["0,8 dm³", "8 dm³", "80 dm³", "800 dm³", "8.000 dm³"],
    korrekteAntwort: 2,
    erklärung:
      "1 m³ = 1.000 dm³ (weil 1 m = 10 dm, also 1 m³ = 10·10·10 = 1.000 dm³). Daher: 0,08 m³ = 0,08·1.000 = 80 dm³.",
    strategieTipp:
      "Wichtig: 1 m³ = 1.000 dm³ = 1.000 Liter. Ein Kubikdezimeter entspricht also einem Liter!",
  },
  {
    id: "ma-q-090",
    stichwortId: "ma-4-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Wie viele Tage hat eine Woche?",
    optionen: ["5 Tage", "6 Tage", "7 Tage", "8 Tage", "10 Tage"],
    korrekteAntwort: 2,
    erklärung: "Eine Woche hat immer 7 Tage (Montag bis Sonntag).",
    strategieTipp:
      "Zeiteinheiten: 1 Woche = 7 Tage, 1 Tag = 24 Stunden, 1 Stunde = 60 Minuten, 1 Minute = 60 Sekunden.",
  },
  {
    id: "ma-q-091",
    stichwortId: "ma-4-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Ein Auto fährt 180 km in 2 Stunden. Welche durchschnittliche Geschwindigkeit in km/h hat es?",
    optionen: ["60 km/h", "70 km/h", "80 km/h", "90 km/h", "100 km/h"],
    korrekteAntwort: 3,
    erklärung: "Geschwindigkeit = Strecke/Zeit = 180 km / 2 h = 90 km/h.",
    strategieTipp:
      "Die Formel v = s/t ist grundlegend. Achte darauf, dass die Einheiten zusammenpassen (hier: km und h).",
  },
  {
    id: "ma-q-092",
    stichwortId: "ma-4-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Wie viele Milliliter sind 2,3 Liter?",
    optionen: ["23 ml", "230 ml", "2.300 ml", "23.000 ml", "0,23 ml"],
    korrekteAntwort: 2,
    erklärung: "1 Liter = 1.000 Milliliter. Also: 2,3 l = 2,3·1.000 = 2.300 ml.",
    strategieTipp:
      "Liter zu Milliliter: Multipliziere mit 1.000. Auch: 1 l = 1 dm³ = 1.000 cm³ = 1.000 ml.",
  },
  {
    id: "ma-q-093",
    stichwortId: "ma-4-01",
    fach: "mathematik" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Ein Läufer rennt 10 km in 45 Minuten. Wie viele Meter pro Sekunde läuft er durchschnittlich?",
    optionen: ["2,22 m/s", "3,70 m/s", "4,44 m/s", "5,56 m/s", "6,67 m/s"],
    korrekteAntwort: 1,
    erklärung:
      "10 km = 10.000 m, 45 min = 45·60 = 2.700 s. Geschwindigkeit: v = 10.000/2.700 ≈ 3,70 m/s.",
    strategieTipp:
      "Bei Geschwindigkeitsumrechnungen: Wandle zürst alle Einheiten in die Zieleinheiten um (hier: m und s), dann dividiere.",
  },
  {
    id: "ma-q-094",
    stichwortId: "ma-4-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Wie viele Kilometer sind 8.500 Meter?",
    optionen: ["0,85 km", "8,5 km", "85 km", "850 km", "0,085 km"],
    korrekteAntwort: 1,
    erklärung: "1.000 Meter = 1 Kilometer. Also: 8.500 m = 8.500/1.000 = 8,5 km.",
    strategieTipp:
      "Meter zu Kilometer: Dividiere durch 1.000. Das Komma wandert drei Stellen nach links.",
  },
  {
    id: "ma-q-095",
    stichwortId: "ma-4-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Ein Raum hat eine Fläche von 30 m². Wie viele Quadratzentimeter sind das?",
    optionen: ["3.000 cm²", "30.000 cm²", "300.000 cm²", "3.000.000 cm²", "300 cm²"],
    korrekteAntwort: 2,
    erklärung: "1 m² = 10.000 cm². Also: 30 m² = 30·10.000 = 300.000 cm².",
    strategieTipp:
      "Quadratmeter zu Quadratzentimeter: Multipliziere mit 10.000 (weil 1 m = 100 cm → 1 m² = 100² = 10.000 cm²).",
  },
  {
    id: "ma-q-096",
    stichwortId: "ma-4-01",
    fach: "mathematik" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Wie viele Sekunden sind 2,5 Tage?",
    optionen: ["216.000 s", "144.000 s", "86.400 s", "172.800 s", "259.200 s"],
    korrekteAntwort: 0,
    erklärung:
      "1 Tag = 24 Stunden = 24·60 = 1.440 Minuten = 1.440·60 = 86.400 Sekunden. Also: 2,5 Tage = 2,5·86.400 = 216.000 s.",
    strategieTipp:
      "Bei komplexen Zeitumrechnungen: Rechne schrittweise (Tage → Stunden → Minuten → Sekunden) oder merke dir 1 Tag = 86.400 s.",
  },
  {
    id: "ma-q-097",
    stichwortId: "ma-4-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche SI-Einheit wird für die Masse verwendet?",
    optionen: ["Gramm (g)", "Kilogramm (kg)", "Tonne (t)", "Milligramm (mg)", "Pfund (lb)"],
    korrekteAntwort: 1,
    erklärung:
      "Die SI-Basiseinheit für die Masse ist das Kilogramm (kg). Gramm, Tonne und Milligramm sind abgeleitete Einheiten, Pfund gehört nicht zum SI-System.",
    strategieTipp:
      "Die 7 SI-Basiseinheiten sind: Meter (m), Kilogramm (kg), Sekunde (s), Ampere (A), Kelvin (K), Mol (mol), Candela (cd).",
  },
  {
    id: "ma-q-098",
    stichwortId: "ma-4-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Wie viele Zentimeter sind 450 Millimeter?",
    optionen: ["4,5 cm", "45 cm", "450 cm", "4.500 cm", "0,45 cm"],
    korrekteAntwort: 1,
    erklärung: "10 Millimeter = 1 Zentimeter. Also: 450 mm = 450/10 = 45 cm.",
    strategieTipp:
      "Millimeter zu Zentimeter: Dividiere durch 10. Zentimeter zu Millimeter: Multipliziere mit 10.",
  },
  {
    id: "ma-q-099",
    stichwortId: "ma-4-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Ein Aquarium fasst 120 Liter. Wie viele Kubikdezimeter sind das?",
    optionen: ["12 dm³", "120 dm³", "1.200 dm³", "12.000 dm³", "1,2 dm³"],
    korrekteAntwort: 1,
    erklärung: "1 Liter = 1 Kubikdezimeter (dm³). Also: 120 Liter = 120 dm³.",
    strategieTipp:
      "Wichtige Äquivalenz: 1 Liter = 1 dm³. Dies vereinfacht viele Volumenumrechnungen erheblich.",
  },
  {
    id: "ma-q-100",
    stichwortId: "ma-4-01",
    fach: "mathematik" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Ein Würfel hat ein Volumen von 8.000 cm³. Wie groß ist seine Oberfläche in Quadratmetern?",
    optionen: ["0,24 m²", "0,06 m²", "2,4 m²", "0,12 m²", "1,2 m²"],
    korrekteAntwort: 0,
    erklärung:
      "Aus V = a³ = 8.000 cm³ folgt a = ³√8.000 = 20 cm. Oberfläche: O = 6·a² = 6·400 = 2.400 cm². Umrechnung: 2.400 cm² = 2.400/10.000 = 0,24 m².",
    strategieTipp:
      "Bei komplexen Aufgaben: Erst geometrisch rechnen, dann Einheiten umrechnen. Quadratzentimeter zu Quadratmeter: Dividiere durch 10.000.",
  },
];
