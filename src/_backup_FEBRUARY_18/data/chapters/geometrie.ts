import type { Chapter } from "./types";

export const geometrieChapter: Chapter = {
  id: "geometrie",
  subject: "mathematik",
  title: "Geometrie & Vektoren",
  subtitle: "Flächen, Körper, Vektoren & Einheiten",
  icon: "📐",
  chapterNumber: "Kapitel 3/3",
  readingTime: "~40 Minuten",
  level: "Kernstoff",
  frequency: "Häufig geprüft",
  overview:
    "Dieses Kapitel behandelt die geometrischen Grundlagen — von ebenen Figuren (Dreieck, Viereck, Kreis) über räumliche Körper (Quader, Zylinder, Kugel) bis hin zu Vektoren und dem SI-Einheitensystem. Geometrie und Einheiten gehören zu den zuverlässig geprüften Themen im MedAT-BMS Mathematik-Teil und erfordern sicheres Formelwissen sowie schnelles, fehlerfreies Rechnen.",
  learningObjectives: [
    "Flächen und Umfänge von Grundfiguren berechnen",
    "Volumen und Oberflächen von Körpern berechnen",
    "Vektoren addieren und Skalarprodukt berechnen",
    "SI-Einheiten und Vorsilben sicher umrechnen",
    "Den Satz des Pythagoras korrekt anwenden",
  ],

  sections: [
    // ──────────────────────────────────────────────
    // 1. Ebene Geometrie
    // ──────────────────────────────────────────────
    {
      heading: "Ebene Geometrie",
      content:
        "Die ebene Geometrie (Planimetrie) beschäftigt sich mit zweidimensionalen Figuren — ihren Flächen, Umfängen und Winkeln. Im MedAT werden vor allem Formeln für Standardfiguren abgefragt.\n\n" +
        "<strong>Dreieck:</strong>\n" +
        "• Fläche: A = ½ · g · h (g = Grundseite, h = zugehörige Höhe)\n" +
        "• Winkelsumme: α + β + γ = 180° — gilt für <strong>jedes</strong> Dreieck\n" +
        "• Satz des Pythagoras: a² + b² = c², wobei c die Hypotenuse ist (die längste Seite, gegenüber dem rechten Winkel). Dieser Satz gilt <strong>ausschließlich für rechtwinklige Dreiecke</strong>!\n" +
        "• Für allgemeine Dreiecke gilt der Kosinussatz: c² = a² + b² − 2ab · cos(γ)\n" +
        "• Spezialfälle: Gleichseitiges Dreieck (alle Seiten gleich, alle Winkel 60°): A = (√3/4) · a². Gleichschenkliges Dreieck (zwei Seiten gleich): Die Basiswinkel sind gleich groß.\n\n" +
        "<strong>Vierecke:</strong>\n" +
        "• Rechteck: A = a · b, U = 2(a + b). Diagonale: d = √(a² + b²).\n" +
        "• Quadrat: A = a², U = 4a. Diagonale: d = a · √2.\n" +
        "• Parallelogramm: A = g · h (h = Höhe senkrecht zur Grundseite, nicht die Seitenlänge!). Gegenüberliegende Seiten sind parallel und gleich lang.\n" +
        "• Trapez: A = ½ · (a + c) · h (a und c sind die beiden parallelen Seiten, h der Abstand zwischen ihnen).\n" +
        "• Raute (Rhombus): A = ½ · d₁ · d₂ (d₁, d₂ = Diagonalen). Alle Seiten gleich lang.\n\n" +
        "<strong>Kreis:</strong>\n" +
        "• Fläche: A = π · r² (mit π ≈ 3,14159)\n" +
        "• Umfang: U = 2π · r = π · d\n" +
        "• Kreißektor (Tortenstück): A_Sektor = (α / 360°) · π · r²\n" +
        "• Kreisbogen: b = (α / 360°) · 2π · r\n" +
        "• Kreisring: A = π · (R² − r²), wobei R der äußere und r der innere Radius ist.\n\n" +
        "Wichtig: Bei Kreisberechnungen immer darauf achten, ob der <strong>Radius r</strong> oder der <strong>Durchmesser d = 2r</strong> gegeben ist — ein sehr häufiger Fehler in der Prüfung!",
      vergleichsTabelle: {
        headers: ["Figur", "Fläche", "Umfang"],
        rows: [
          ["Dreieck", "A = ½ · g · h", "Summe aller drei Seiten"],
          ["Rechteck", "A = a · b", "U = 2(a + b)"],
          ["Quadrat", "A = a²", "U = 4a"],
          ["Kreis", "A = π · r²", "U = 2π · r"],
          ["Trapez", "A = ½ · (a + c) · h", "Summe aller vier Seiten"],
        ],
      },
      merke:
        "<strong>Pythagoras</strong>: a² + b² = c² (c = Hypotenuse, gegenüber dem rechten Winkel). Funktioniert <strong>NUR bei rechtwinkligen Dreiecken</strong>! Für alle: Kosinussatz.",
      altfrage:
        "\"Berechne die Fläche eines Kreises mit r = 5 cm.\" → A = π · r² = π · 25 ≈ <strong>78,5 cm²</strong>.",
    },

    // ──────────────────────────────────────────────
    // 2. Körper & Volumen
    // ──────────────────────────────────────────────
    {
      heading: "Körper & Volumen",
      content:
        "Die Stereometrie beschäftigt sich mit dreidimensionalen Körpern — ihren Volumina und Oberflächen. Im MedAT werden vor allem die Standardkörper abgefragt.\n\n" +
        "<strong>Quader:</strong>\n" +
        "• Volumen: V = a · b · c\n" +
        "• Oberfläche: O = 2(ab + ac + bc)\n" +
        "• Raumdiagonale: d = √(a² + b² + c²)\n\n" +
        "<strong>Würfel (Spezialfall des Quaders mit a = b = c):</strong>\n" +
        "• Volumen: V = a³\n" +
        "• Oberfläche: O = 6a²\n" +
        "• Raumdiagonale: d = a · √3\n\n" +
        "<strong>Zylinder:</strong>\n" +
        "• Volumen: V = π · r² · h (Grundfläche × Höhe)\n" +
        "• Mantelfläche: M = 2π · r · h (aufgerollt ein Rechteck!)\n" +
        "• Oberfläche: O = 2π · r · (r + h) = 2 · Grundfläche + Mantelfläche\n\n" +
        "<strong>Kegel:</strong>\n" +
        "• Volumen: V = ⅓ · π · r² · h (Faktor ⅓ gegenüber Zylinder!)\n" +
        "• Mantellinie (Seitenlänge): s = √(r² + h²)\n" +
        "• Mantelfläche: M = π · r · s\n" +
        "• Oberfläche: O = π · r · (r + s)\n\n" +
        "<strong>Kugel:</strong>\n" +
        "• Volumen: V = ⁴⁄₃ · π · r³\n" +
        "• Oberfläche: O = 4π · r²\n" +
        "• Merke: Die Kugel hat bei gegebenem Volumen die kleinste Oberfläche aller Körper.\n\n" +
        "<strong>Pyramide (allgemein):</strong>\n" +
        "• Volumen: V = ⅓ · A_Grund · h (A_Grund = Fläche der Grundfläche)\n" +
        "• Für eine quadratische Pyramide: V = ⅓ · a² · h\n\n" +
        "<strong>Zusammenhang der Spitzkörper:</strong>\n" +
        "Alle Körper mit einer Spitze (Kegel, Pyramide) haben den Faktor ⅓ im Volumen im Vergleich zum zugehörigen Prisma/Zylinder. Das heißt: Ein Kegel hat genau ⅓ des Volumens des umschreibenden Zylinders, eine Pyramide genau ⅓ des umschreibenden Quaders.",
      vergleichsTabelle: {
        headers: ["Körper", "Volumen", "Oberfläche"],
        rows: [
          ["Quader", "V = a · b · c", "O = 2(ab + ac + bc)"],
          ["Würfel", "V = a³", "O = 6a²"],
          ["Zylinder", "V = π · r² · h", "O = 2πr(r + h)"],
          ["Kegel", "V = ⅓ · π · r² · h", "O = πr(r + s)"],
          ["Kugel", "V = ⁴⁄₃ · π · r³", "O = 4π · r²"],
        ],
      },
      merke:
        "Spitze Körper (Kegel, Pyramide) haben Faktor <strong>⅓</strong> im Volumen: V_Kegel = ⅓πr²h, V_Pyramide = ⅓ · A · h. Kugel: V = <strong>⁴⁄₃πr³</strong>, O = <strong>4πr²</strong>.",
    },

    // ──────────────────────────────────────────────
    // 3. Vektoren
    // ──────────────────────────────────────────────
    {
      heading: "Vektoren",
      content:
        "Ein Vektor ist eine gerichtete Größe — dargestellt als Pfeil mit Betrag (Länge) und Richtung. Im Gegensatz dazu hat ein Skalar nur einen Betrag (z.B. Temperatur, Masse). Vektoren werden als a⃗ oder fett (a) geschrieben.\n\n" +
        "<strong>Darstellung:</strong>\n" +
        "Ein Vektor im Raum wird durch seine Komponenten angegeben: a⃗ = (x, y, z). In der Ebene (2D): a⃗ = (x, y).\n\n" +
        "<strong>Vektoraddition (Spitze-an-Schwanz-Methode):</strong>\n" +
        "Man hängt den zweiten Vektor an die Spitze des ersten an. Das Ergebnis ist der Vektor vom Anfangspunkt des ersten zur Spitze des zweiten.\n" +
        "• Komponentenweise: a⃗ + b⃗ = (x₁ + x₂, y₁ + y₂, z₁ + z₂)\n" +
        "• Die Addition ist kommutativ: a⃗ + b⃗ = b⃗ + a⃗\n\n" +
        "<strong>Subtraktion:</strong>\n" +
        "a⃗ − b⃗ = a⃗ + (−b⃗). Man dreht den zweiten Vektor um und addiert dann.\n" +
        "• Komponentenweise: a⃗ − b⃗ = (x₁ − x₂, y₁ − y₂, z₁ − z₂)\n\n" +
        "<strong>Skalarmultiplikation:</strong>\n" +
        "k · a⃗ = (k · x, k · y, k · z). Bei k > 1: Vektor wird gestreckt. Bei 0 < k < 1: gestaucht. Bei k < 0: zusätzlich umgedreht.\n\n" +
        "<strong>Betrag (Länge) eines Vektors:</strong>\n" +
        "|a⃗| = √(x² + y² + z²)\n" +
        "In 2D: |a⃗| = √(x² + y²). Der Betrag ist immer ≥ 0.\n\n" +
        "<strong>Einheitsvektor:</strong>\n" +
        "Ein Vektor der Länge 1: â = a⃗ / |a⃗|. Man teilt den Vektor durch seinen Betrag.\n\n" +
        "<strong>Skalarprodukt (Punktprodukt):</strong>\n" +
        "a⃗ · b⃗ = |a⃗| · |b⃗| · cos(φ) = x₁x₂ + y₁y₂ + z₁z₂\n" +
        "Das Ergebnis ist eine <strong>Zahl</strong> (Skalar), kein Vektor!\n" +
        "• Wenn a⃗ · b⃗ = 0, stehen die Vektoren <strong>senkrecht</strong> aufeinander (φ = 90°, cos 90° = 0).\n" +
        "• Wenn a⃗ · b⃗ > 0: spitzer Winkel. Wenn a⃗ · b⃗ < 0: stumpfer Winkel.\n" +
        "• Spezialfall: a⃗ · a⃗ = |a⃗|² (Betrag zum Quadrat).\n\n" +
        "<strong>Kreuzprodukt (Vektorprodukt, nur in 3D):</strong>\n" +
        "a⃗ × b⃗ = Vektor, der <strong>senkrecht auf beiden</strong> Vektoren steht.\n" +
        "• Betrag: |a⃗ × b⃗| = |a⃗| · |b⃗| · sin(φ)\n" +
        "• Der Betrag entspricht der Fläche des von a⃗ und b⃗ aufgespannten Parallelogramms.\n" +
        "• Richtung: Rechte-Hand-Regel (Daumen = a⃗, Zeigefinger = b⃗, Mittelfinger = a⃗ × b⃗).\n" +
        "• Wenn a⃗ × b⃗ = 0⃗, sind die Vektoren parallel (sin 0° = 0).\n" +
        "• Das Kreuzprodukt ist <strong>nicht kommutativ</strong>: a⃗ × b⃗ = −(b⃗ × a⃗).",
      merke:
        "Skalarprodukt = <strong>Zahl</strong> (Skalar): a⃗ · b⃗ = |a| · |b| · cos(φ). Wenn = 0 → <strong>senkrecht</strong>! Kreuzprodukt = <strong>Vektor</strong> senkrecht auf beide. Betrag: |a⃗| = √(x² + y² + z²).",
    },

    // ──────────────────────────────────────────────
    // 4. Einheiten & Umrechnung
    // ──────────────────────────────────────────────
    {
      heading: "Einheiten & Umrechnung",
      content:
        "Das Internationale Einheitensystem (SI-System, Système International) bildet die Grundlage aller physikalischen Einheiten. Im MedAT wird vor allem das sichere Umrechnen zwischen Einheiten erwartet.\n\n" +
        "<strong>Die sieben SI-Basiseinheiten:</strong>\n" +
        "• Meter (m) — Länge\n" +
        "• Kilogramm (kg) — Masse\n" +
        "• Sekunde (s) — Zeit\n" +
        "• Ampere (A) — Stromstärke\n" +
        "• Kelvin (K) — Temperatur\n" +
        "• Mol (mol) — Stoffmenge\n" +
        "• Candela (cd) — Lichtstärke\n" +
        "Alle anderen Einheiten (Newton, Joule, Watt, Volt, Pascal ...) sind abgeleitete Einheiten und können auf die sieben Basiseinheiten zurückgeführt werden.\n\n" +
        "<strong>SI-Vorsilben (Präfixe):</strong>\n" +
        "Die Vorsilben ermöglichen es, sehr große und sehr kleine Zahlen handlich auszudrücken.\n" +
        "• Tera (T) = 10¹² = 1.000.000.000.000\n" +
        "• Giga (G) = 10⁹ = 1.000.000.000\n" +
        "• Mega (M) = 10⁶ = 1.000.000\n" +
        "• Kilo (k) = 10³ = 1.000\n" +
        "• Hekto (h) = 10² = 100\n" +
        "• Dezi (d) = 10⁻¹ = 0,1\n" +
        "• Zenti (c) = 10⁻² = 0,01\n" +
        "• Milli (m) = 10⁻³ = 0,001\n" +
        "• Mikro (μ) = 10⁻⁶ = 0,000001\n" +
        "• Nano (n) = 10⁻⁹\n" +
        "• Piko (p) = 10⁻¹²\n\n" +
        "<strong>Dimensionsanalyse:</strong>\n" +
        "In jeder physikalischen Gleichung müssen die Einheiten auf beiden Seiten übereinstimmen. Die Dimensionsanalyse ist eine mächtige Methode zur Kontrolle: Stimmen die Einheiten nicht, ist die Formel falsch! Beispiel: Geschwindigkeit = Strecke / Zeit → [m/s] = [m] / [s] ✓.\n\n" +
        "<strong>Wichtige Umrechnungen:</strong>\n" +
        "• Länge: 1 km = 1000 m, 1 m = 100 cm = 1000 mm, 1 cm = 10 mm\n" +
        "• Fläche: 1 m² = 10.000 cm² = 10⁴ cm² (Achtung: quadratisch!)\n" +
        "• Volumen: 1 m³ = 10⁶ cm³ = 1000 dm³ = 1000 L\n" +
        "• Volumen: 1 L = 1 dm³ = 10⁻³ m³ = 1000 mL = 1000 cm³\n" +
        "• Zeit: 1 h = 60 min = 3600 s, 1 min = 60 s\n" +
        "• Geschwindigkeit: km/h → m/s: durch 3,6 teilen. m/s → km/h: mal 3,6.\n" +
        "• Energie: 1 eV = 1,6 × 10⁻¹⁹ J, 1 kWh = 3,6 × 10⁶ J = 3600 kJ\n" +
        "• Druck: 1 atm = 101.325 Pa ≈ 1013 hPa = 1013 mbar\n\n" +
        "<strong>Typische Fallen bei Flächeneinheiten:</strong>\n" +
        "Bei der Umrechnung von Flächeneinheiten muss man den Faktor quadrieren: 1 m = 100 cm → 1 m² = (100)² cm² = 10.000 cm². Analog bei Volumeneinheiten: 1 m = 100 cm → 1 m³ = (100)³ cm³ = 1.000.000 cm³ = 10⁶ cm³. Diesen Fehler machen viele Prüflinge!",
      vergleichsTabelle: {
        headers: ["Vorsilbe", "Symbol", "Faktor"],
        rows: [
          ["Giga", "G", "10⁹"],
          ["Mega", "M", "10⁶"],
          ["Kilo", "k", "10³"],
          ["Milli", "m", "10⁻³"],
          ["Mikro", "μ", "10⁻⁶"],
          ["Nano", "n", "10⁻⁹"],
        ],
      },
      merke:
        "km/h → m/s: durch <strong>3,6</strong> teilen. m/s → km/h: mal 3,6. Merke: 36 km/h = 10 m/s, 100 km/h ≈ 27,8 m/s. 1 L = 1 dm³ = 10⁻³ m³.",
    },
  ],

  keyFacts: [
    {
      label: "Pythagoras",
      value: "a² + b² = c² (nur rechtwinklige Dreiecke!)",
    },
    {
      label: "Kreisfläche",
      value: "A = π · r²",
    },
    {
      label: "Kreisumfang",
      value: "U = 2π · r = π · d",
    },
    {
      label: "Kugel — Volumen",
      value: "V = ⁴⁄₃ · π · r³",
    },
    {
      label: "Kugel — Oberfläche",
      value: "O = 4π · r²",
    },
    {
      label: "Spitze Körper",
      value: "Faktor ⅓: V_Kegel = ⅓πr²h, V_Pyramide = ⅓ · A · h",
    },
    {
      label: "Skalarprodukt = 0",
      value: "a⃗ · b⃗ = 0 → Vektoren stehen senkrecht aufeinander",
    },
    {
      label: "Betrag eines Vektors",
      value: "|a⃗| = √(x² + y² + z²)",
    },
    {
      label: "Geschwindigkeit umrechnen",
      value: "km/h ÷ 3,6 = m/s",
    },
    {
      label: "Volumen",
      value: "1 L = 1 dm³ = 10⁻³ m³",
    },
    {
      label: "SI-Basiseinheiten",
      value: "m, kg, s, A, K, mol, cd",
    },
  ],

  selfTestQuestions: [
    {
      question:
        "Wie groß ist das Volumen einer Kugel mit r = 3?",
      options: ["36π", "27π", "12π", "108π", "9π"],
      correctIndex: 0,
      explanation:
        "V = ⁴⁄₃ · π · r³ = ⁴⁄₃ · π · 27 = 36π.",
    },
    {
      question:
        "Zwei Vektoren stehen senkrecht aufeinander, wenn...",
      options: [
        "Skalarprodukt = 1",
        "Skalarprodukt = 0",
        "Kreuzprodukt = 0",
        "Betrag gleich",
        "Richtung gleich",
      ],
      correctIndex: 1,
      explanation:
        "a⃗ · b⃗ = |a| · |b| · cos(90°) = 0. Wenn das Skalarprodukt = 0, stehen die Vektoren senkrecht.",
    },
    {
      question: "100 km/h in m/s?",
      options: ["10", "27,8", "36", "100", "360"],
      correctIndex: 1,
      explanation:
        "100 ÷ 3,6 ≈ 27,8 m/s. Merke: km/h → m/s = ÷ 3,6.",
    },
    {
      question: "Die Fläche eines Kreises mit d = 10 cm ist...",
      options: [
        "25π cm²",
        "50π cm²",
        "100π cm²",
        "10π cm²",
        "20π cm²",
      ],
      correctIndex: 0,
      explanation:
        "d = 10 → r = 5. A = π · r² = π · 25 = 25π cm² ≈ 78,5 cm².",
    },
    {
      question: "1 Mikrometer = ?",
      options: [
        "10⁻³ m",
        "10⁻⁶ m",
        "10⁻⁹ m",
        "10⁻¹² m",
        "10⁻² m",
      ],
      correctIndex: 1,
      explanation:
        "Mikro (μ) = 10⁻⁶. Also 1 μm = 10⁻⁶ m = 0,000001 m.",
    },
  ],

  summary: [
    "Ebene Geometrie: Dreieck A = ½gh, Pythagoras a² + b² = c² (nur rechtwinklig!), Winkelsumme 180°. Rechteck A = ab, Quadrat A = a², Parallelogramm A = gh, Trapez A = ½(a+c)·h. Kreis A = πr², U = 2πr.",
    "Körper: Quader V = abc, Würfel V = a³, Zylinder V = πr²h, Kegel V = ⅓πr²h, Kugel V = ⁴⁄₃πr³ (O = 4πr²). Spitze Körper haben Faktor ⅓ im Volumen.",
    "Vektoren: Addition komponentenweise, Betrag |a⃗| = √(x²+y²+z²). Skalarprodukt a⃗·b⃗ = Zahl; wenn = 0 → senkrecht. Kreuzprodukt a⃗×b⃗ = Vektor senkrecht auf beide.",
    "Einheiten: SI-Basis m, kg, s, A, K, mol, cd. km/h ÷ 3,6 = m/s. 1 L = 1 dm³ = 10⁻³ m³. Bei Flächen/Volumina Faktoren quadrieren/kubieren!",
  ],
};
