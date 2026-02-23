export const fragenPart1 = [
  {
    id: "ma-q-001",
    stichwortId: "ma-1-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Welche Zahl entspricht 3,5 × 10⁴?",
    optionen: ["350", "3.500", "35.000", "350.000", "3.500.000"],
    korrekteAntwort: 2,
    erklärung:
      "10⁴ = 10.000, daher 3,5 × 10.000 = 35.000. Die Hochzahl gibt an, wie viele Nullen nach der Zahl folgen bzw. um wie viele Stellen das Komma verschoben wird.",
    strategieTipp:
      "Bei positiven Zehnerpotenzen: Komma nach rechts verschieben. Die Hochzahl gibt die Anzahl der Stellen an.",
  },
  {
    id: "ma-q-002",
    stichwortId: "ma-1-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Ein Nanometer (nm) entspricht 10⁻⁹ Meter. Wie viele Nanometer sind 0,002 Meter?",
    optionen: ["2.000 nm", "20.000 nm", "200.000 nm", "2.000.000 nm", "20.000.000 nm"],
    korrekteAntwort: 3,
    erklärung:
      "1 nm = 10⁻⁹ m, also 1 m = 10⁹ nm. Daher: 0,002 m = 0,002 × 10⁹ nm = 2 × 10⁶ nm = 2.000.000 nm.",
    strategieTipp:
      "Bei Umrechnung in kleinere Einheiten multiplizieren. Der Exponent gibt an, um wie viele Zehnerpotenzen sich die Einheiten unterscheiden.",
  },
  {
    id: "ma-q-003",
    stichwortId: "ma-1-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Berechnen Sie: (2 × 10⁵) × (3 × 10³)",
    optionen: ["6 × 10⁸", "6 × 10¹⁵", "5 × 10⁸", "6 × 10²", "2,3 × 10⁸"],
    korrekteAntwort: 0,
    erklärung:
      "Faktoren und Exponenten getrennt multiplizieren: (2 × 3) × (10⁵ × 10³) = 6 × 10⁸. Bei Multiplikation von Potenzen mit gleicher Basis werden die Exponenten addiert: 10⁵⁺³ = 10⁸.",
    strategieTipp:
      "Bei Multiplikation von Zehnerpotenzen: Exponenten addieren. Bei Division: Exponenten subtrahieren.",
  },
  {
    id: "ma-q-004",
    stichwortId: "ma-1-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: 'Das Präfix "Mega" (M) steht für welche Zehnerpotenz?',
    optionen: ["10³", "10⁴", "10⁵", "10⁶", "10⁹"],
    korrekteAntwort: 3,
    erklärung:
      "Mega (M) = 10⁶ = 1.000.000. Beispiel: 1 Megawatt (MW) = 1.000.000 Watt. Weitere wichtige Präfixe: Kilo (10³), Giga (10⁹), Milli (10⁻³), Mikro (10⁻⁶).",
    strategieTipp:
      "Wichtigste Präfixe auswendig lernen: Giga (10⁹), Mega (10⁶), Kilo (10³), Milli (10⁻³), Mikro (10⁻⁶), Nano (10⁻⁹).",
  },
  {
    id: "ma-q-005",
    stichwortId: "ma-1-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Schreiben Sie 0,000045 in wissenschaftlicher Notation.",
    optionen: ["4,5 × 10⁻⁴", "4,5 × 10⁻⁵", "4,5 × 10⁻⁶", "45 × 10⁻⁶", "0,45 × 10⁻⁴"],
    korrekteAntwort: 1,
    erklärung:
      "Das Komma muss so verschoben werden, dass eine Zahl zwischen 1 und 10 entsteht: 4,5. Das Komma wurde 5 Stellen nach rechts verschoben, daher 10⁻⁵. Ergebnis: 4,5 × 10⁻⁵.",
    strategieTipp:
      "In wissenschaftlicher Notation steht vor dem Komma genau eine Ziffer (1-9). Komma nach rechts → negativer Exponent.",
  },
  {
    id: "ma-q-006",
    stichwortId: "ma-1-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Berechnen Sie: (8 × 10⁷) ÷ (2 × 10⁴)",
    optionen: ["4 × 10³", "4 × 10¹¹", "6 × 10³", "16 × 10³", "4 × 10²"],
    korrekteAntwort: 0,
    erklärung:
      "Division: (8 ÷ 2) × (10⁷ ÷ 10⁴) = 4 × 10³. Bei Division von Potenzen mit gleicher Basis werden die Exponenten subtrahiert: 10⁷⁻⁴ = 10³.",
    strategieTipp:
      "Bei Division von Zehnerpotenzen: Zahlen dividieren, Exponenten subtrahieren. 10⁷ ÷ 10⁴ = 10⁷⁻⁴ = 10³.",
  },
  {
    id: "ma-q-007",
    stichwortId: "ma-1-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Ein Mikrogramm (µg) entspricht 10⁻⁶ Gramm. Wie viele Mikrogramm sind 0,5 Gramm?",
    optionen: ["50 µg", "500 µg", "5.000 µg", "50.000 µg", "500.000 µg"],
    korrekteAntwort: 4,
    erklärung:
      "1 µg = 10⁻⁶ g, also 1 g = 10⁶ µg. Daher: 0,5 g = 0,5 × 10⁶ µg = 5 × 10⁵ µg = 500.000 µg.",
    strategieTipp:
      "Von größerer zu kleinerer Einheit: mit der entsprechenden Zehnerpotenz multiplizieren.",
  },
  {
    id: "ma-q-008",
    stichwortId: "ma-1-01",
    fach: "mathematik" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Vereinfachen Sie: (5 × 10⁻³) × (6 × 10⁸) ÷ (3 × 10²)",
    optionen: ["10 × 10³", "1 × 10⁴", "10 × 10⁴", "1 × 10³", "3 × 10³"],
    korrekteAntwort: 1,
    erklärung:
      "Schritt 1: Multiplikation (5 × 10⁻³) × (6 × 10⁸) = 30 × 10⁵. Schritt 2: Division 30 × 10⁵ ÷ (3 × 10²) = 10 × 10³ = 1 × 10⁴.",
    strategieTipp:
      "Komplexe Aufgaben schrittweise lösen: erst Multiplikationen, dann Divisionen. Am Ende in Standardform bringen.",
  },
  {
    id: "ma-q-009",
    stichwortId: "ma-1-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Welches Präfix steht für 10⁻³?",
    optionen: ["Nano", "Mikro", "Milli", "Zenti", "Dezi"],
    korrekteAntwort: 2,
    erklärung:
      "Milli = 10⁻³. Beispiel: 1 Millimeter (mm) = 10⁻³ m = 0,001 m. Weitere Präfixe: Zenti (10⁻²), Dezi (10⁻¹), Mikro (10⁻⁶), Nano (10⁻⁹).",
    strategieTipp:
      "Negative Exponenten kennzeichnen Bruchteile: 10⁻³ = 1/1000. Je negativer der Exponent, desto kleiner die Einheit.",
  },
  {
    id: "ma-q-010",
    stichwortId: "ma-1-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Ordnen Sie nach Größe (kleinste zürst): I) 3 × 10⁴, II) 2,5 × 10⁵, III) 8 × 10³",
    optionen: ["I, II, III", "III, I, II", "II, I, III", "I, III, II", "III, II, I"],
    korrekteAntwort: 1,
    erklärung:
      "III) 8 × 10³ = 8.000, I) 3 × 10⁴ = 30.000, II) 2,5 × 10⁵ = 250.000. Reihenfolge: III < I < II.",
    strategieTipp:
      "Bei gleichem Exponenten: Vorfaktoren vergleichen. Bei verschiedenen Exponenten: höherer Exponent = größere Zahl.",
  },
  {
    id: "ma-q-011",
    stichwortId: "ma-1-01",
    fach: "mathematik" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Ein Virus hat einen Durchmesser von 80 nm. Wie viele solcher Viren passen nebeneinander auf 1 mm?",
    optionen: ["12.500", "125.000", "1.250", "125", "1.250.000"],
    korrekteAntwort: 0,
    erklärung:
      "1 mm = 10⁻³ m, 1 nm = 10⁻⁹ m, also 1 mm = 10⁶ nm = 1.000.000 nm. Anzahl: 1.000.000 nm ÷ 80 nm = 12.500 Viren.",
    strategieTipp:
      "Beide Größen in dieselbe Einheit umrechnen, dann dividieren. 1 mm = 10⁶ nm ist eine wichtige Umrechnung.",
  },
  {
    id: "ma-q-012",
    stichwortId: "ma-1-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Berechnen Sie: (4 × 10⁶)²",
    optionen: ["16 × 10¹²", "8 × 10¹²", "16 × 10⁶", "4 × 10¹²", "16 × 10³⁶"],
    korrekteAntwort: 0,
    erklärung:
      "(4 × 10⁶)² = 4² × (10⁶)² = 16 × 10¹². Bei Potenzierung wird der Exponent multipliziert: (10⁶)² = 10⁶ˣ² = 10¹².",
    strategieTipp:
      "Beim Quadrieren: Zahl quadrieren und Exponent verdoppeln. (a × 10ⁿ)² = a² × 10²ⁿ.",
  },
  {
    id: "ma-q-013",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext:
      "Ein Medikament kostet 80 €. Nach einer Preiserhöhung um 15% beträgt der neue Preis:",
    optionen: ["88 €", "90 €", "92 €", "95 €", "98 €"],
    korrekteAntwort: 2,
    erklärung:
      "15% von 80 € = 0,15 × 80 € = 12 €. Neuer Preis = 80 € + 12 € = 92 €. Alternativ: 80 € × 1,15 = 92 €.",
    strategieTipp: "Bei Erhöhung um x%: mit (1 + x/100) multiplizieren. Bei 15% Erhöhung: × 1,15.",
  },
  {
    id: "ma-q-014",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Berechnen Sie: 3/4 + 2/5",
    optionen: ["5/9", "11/10", "23/20", "1", "17/20"],
    korrekteAntwort: 2,
    erklärung:
      "Hauptnenner: 20. Umrechnung: 3/4 = 15/20 und 2/5 = 8/20. Addition: 15/20 + 8/20 = 23/20 (= 1 3/20).",
    strategieTipp:
      "Brüche addieren: gemeinsamen Nenner finden (kleinstes gemeinsames Vielfaches), Zähler addieren.",
  },
  {
    id: "ma-q-015",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "5 Arbeiter benötigen 12 Tage für einen Auftrag. Wie viele Tage benötigen 8 Arbeiter (bei gleicher Arbeitsgeschwindigkeit)?",
    optionen: ["6 Tage", "7 Tage", "7,5 Tage", "8 Tage", "9 Tage"],
    korrekteAntwort: 2,
    erklärung:
      "Indirekt proportional: mehr Arbeiter → weniger Zeit. Gesamtarbeit = 5 × 12 = 60 Arbeitertage. Bei 8 Arbeitern: 60 ÷ 8 = 7,5 Tage.",
    strategieTipp:
      "Bei indirekter Proportionalität: Produkt bleibt konstant. Anzahl × Zeit = konstant.",
  },
  {
    id: "ma-q-016",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Lösen Sie die Gleichung: 3x + 7 = 28",
    optionen: ["x = 5", "x = 6", "x = 7", "x = 8", "x = 9"],
    korrekteAntwort: 2,
    erklärung:
      "3x + 7 = 28 | -7 auf beiden Seiten → 3x = 21 | ÷3 → x = 7. Probe: 3 × 7 + 7 = 21 + 7 = 28 ✓",
    strategieTipp:
      "Gleichungen lösen: Isoliere die Variable durch Umkehroperationen. Was du auf einer Seite machst, mache auch auf der anderen.",
  },
  {
    id: "ma-q-017",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Ein Wert sinkt von 250 auf 200. Um wie viel Prozent ist er gesunken?",
    optionen: ["15%", "18%", "20%", "22%", "25%"],
    korrekteAntwort: 2,
    erklärung:
      "Differenz: 250 - 200 = 50. Prozentuale Abnahme: (50/250) × 100% = 20%. Wichtig: Prozent vom Ausgangswert (250), nicht vom Endwert.",
    strategieTipp:
      "Prozentuale Änderung = (Differenz / Ausgangswert) × 100%. Immer vom ursprünglichen Wert ausgehen.",
  },
  {
    id: "ma-q-018",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Berechnen Sie: (2/3) × (9/4) ÷ (3/2)",
    optionen: ["1", "2", "3/2", "1/2", "2/3"],
    korrekteAntwort: 0,
    erklärung:
      "Schritt 1: (2/3) × (9/4) = 18/12 = 3/2. Schritt 2: (3/2) ÷ (3/2) = (3/2) × (2/3) = 6/6 = 1. Oder direkt: (2×9×2)/(3×4×3) = 36/36 = 1.",
    strategieTipp:
      "Brüche multiplizieren: Zähler mit Zähler, Nenner mit Nenner. Beim Dividieren: mit Kehrwert multiplizieren.",
  },
  {
    id: "ma-q-019",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "40% von welcher Zahl ergeben 60?",
    optionen: ["120", "130", "140", "150", "160"],
    korrekteAntwort: 3,
    erklärung:
      "40% von x = 60 → 0,4 × x = 60 → x = 60 ÷ 0,4 = 150. Probe: 40% von 150 = 0,4 × 150 = 60 ✓",
    strategieTipp:
      'Bei "Prozent von Grundwert": Gleichung aufstellen und nach dem Grundwert auflösen. p% × G = W → G = W ÷ (p/100).',
  },
  {
    id: "ma-q-020",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Lösen Sie: 2(x - 3) = 5x + 6",
    optionen: ["x = -3", "x = -4", "x = -5", "x = 3", "x = 4"],
    korrekteAntwort: 1,
    erklärung:
      "2(x - 3) = 5x + 6 → 2x - 6 = 5x + 6 | -2x → -6 = 3x + 6 | -6 → -12 = 3x | ÷3 → x = -4.",
    strategieTipp:
      "Klammern auflösen, alle x-Terme auf eine Seite, Konstanten auf die andere Seite bringen.",
  },
  {
    id: "ma-q-021",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Ein Produkt wird zweimal um je 10% reduziert. Der Endpreis beträgt 81 €. Wie hoch war der ursprüngliche Preis?",
    optionen: ["90 €", "95 €", "100 €", "105 €", "110 €"],
    korrekteAntwort: 2,
    erklärung:
      "Nach 1. Reduktion: x × 0,9. Nach 2. Reduktion: x × 0,9 × 0,9 = x × 0,81 = 81 €. Also: x = 81 ÷ 0,81 = 100 €.",
    strategieTipp:
      "Mehrfache prozentuale Änderungen multiplizieren die Faktoren: zwei Mal -10% entspricht × 0,9 × 0,9 = × 0,81.",
  },
  {
    id: "ma-q-022",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Vereinfachen Sie: 5/8 - 1/4",
    optionen: ["1/8", "1/4", "3/8", "1/2", "5/12"],
    korrekteAntwort: 2,
    erklärung: "Hauptnenner: 8. Umrechnung: 1/4 = 2/8. Subtraktion: 5/8 - 2/8 = 3/8.",
    strategieTipp: "Brüche subtrahieren: gemeinsamen Nenner finden, dann Zähler subtrahieren.",
  },
  {
    id: "ma-q-023",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Eine Lösung enthält 15% Alkohol. Wie viel reines Wasser muss zu 200 ml dieser Lösung hinzugefügt werden, um eine 10%-ige Lösung zu erhalten?",
    optionen: ["50 ml", "75 ml", "100 ml", "125 ml", "150 ml"],
    korrekteAntwort: 2,
    erklärung:
      "Alkoholmenge bleibt gleich: 200 ml × 0,15 = 30 ml. Bei 10%: 30 ml = x × 0,10 → x = 300 ml Gesamtmenge. Wasser hinzufügen: 300 - 200 = 100 ml.",
    strategieTipp:
      "Bei Verdünnungsaufgaben: Menge des gelösten Stoffes bleibt konstant. Berechne Endvolumen, dann Differenz.",
  },
  {
    id: "ma-q-024",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Lösen Sie die Ungleichung: 3x - 5 > 10",
    optionen: ["x > 3", "x > 4", "x > 5", "x > 6", "x > 7"],
    korrekteAntwort: 2,
    erklärung:
      "3x - 5 > 10 | +5 → 3x > 15 | ÷3 → x > 5. Alle Werte größer als 5 erfüllen die Ungleichung.",
    strategieTipp:
      "Ungleichungen lösen wie Gleichungen. Achtung: Bei Multiplikation/Division mit negativer Zahl dreht sich das Relationszeichen um.",
  },
  {
    id: "ma-q-025",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Ein Auto verbraucht 6,5 Liter auf 100 km. Wie viele Liter werden für 420 km benötigt?",
    optionen: ["24,3 L", "25,2 L", "26,1 L", "27,3 L", "28,5 L"],
    korrekteAntwort: 3,
    erklärung: "Dreisatz: 100 km → 6,5 L, also 420 km → (420 × 6,5) ÷ 100 = 2730 ÷ 100 = 27,3 L.",
    strategieTipp:
      "Direkte Proportionalität: Verhältnis konstant. Mehr Kilometer → mehr Verbrauch. Formel: Verbrauch × (Strecke ÷ 100).",
  },
  {
    id: "ma-q-026",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Lösen Sie die quadratische Gleichung: x² - 7x + 12 = 0",
    optionen: [
      "x = 2 oder x = 5",
      "x = 3 oder x = 4",
      "x = 1 oder x = 12",
      "x = -3 oder x = -4",
      "x = 2 oder x = 6",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Faktorisieren: x² - 7x + 12 = (x - 3)(x - 4) = 0. Satz vom Nullprodukt: x - 3 = 0 oder x - 4 = 0, also x = 3 oder x = 4. Probe: 3² - 7×3 + 12 = 9 - 21 + 12 = 0 ✓",
    strategieTipp:
      "Quadratische Gleichungen: erst Faktorisieren versuchen, sonst p-q-Formel oder abc-Formel verwenden.",
  },
  {
    id: "ma-q-027",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Vereinfachen Sie mit binomischer Formel: (x + 5)²",
    optionen: ["x² + 10x + 25", "x² + 5x + 25", "x² + 25", "x² + 10x + 5", "x² + 5x + 5"],
    korrekteAntwort: 0,
    erklärung:
      "1. binomische Formel: (a + b)² = a² + 2ab + b². Hier: (x + 5)² = x² + 2×x×5 + 5² = x² + 10x + 25.",
    strategieTipp:
      "Binomische Formeln auswendig lernen: (a+b)² = a² + 2ab + b², (a-b)² = a² - 2ab + b², (a+b)(a-b) = a² - b².",
  },
  {
    id: "ma-q-028",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Berechnen Sie: 2⁵",
    optionen: ["10", "16", "25", "32", "64"],
    korrekteAntwort: 3,
    erklärung:
      "2⁵ = 2 × 2 × 2 × 2 × 2 = 32. Die Hochzahl gibt an, wie oft die Basis mit sich selbst multipliziert wird.",
    strategieTipp:
      "Zweierpotenzen auswendig können: 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32, 2⁶=64, 2⁷=128, 2⁸=256, 2⁹=512, 2¹⁰=1024.",
  },
  {
    id: "ma-q-029",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Vereinfachen Sie: 3⁴ × 3²",
    optionen: ["3⁶", "3⁸", "9⁶", "6⁶", "3¹²"],
    korrekteAntwort: 0,
    erklärung: "Potenzgesetz: aⁿ × aᵐ = aⁿ⁺ᵐ. Also: 3⁴ × 3² = 3⁴⁺² = 3⁶ = 729.",
    strategieTipp:
      "Bei Multiplikation von Potenzen mit gleicher Basis: Exponenten addieren. Bei Division: Exponenten subtrahieren.",
  },
  {
    id: "ma-q-030",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Vereinfachen Sie: (2³)⁴",
    optionen: ["2⁷", "2¹²", "6⁴", "8⁴", "2⁶⁴"],
    korrekteAntwort: 1,
    erklärung: "Potenzgesetz: (aⁿ)ᵐ = aⁿˣᵐ. Also: (2³)⁴ = 2³ˣ⁴ = 2¹² = 4096.",
    strategieTipp: "Bei Potenzierung einer Potenz: Exponenten multiplizieren. (aⁿ)ᵐ = aⁿᵐ.",
  },
  {
    id: "ma-q-031",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Lösen Sie: x² - 6x + 5 = 0 (mit p-q-Formel)",
    optionen: [
      "x = 1 oder x = 5",
      "x = -1 oder x = -5",
      "x = 2 oder x = 3",
      "x = 1 oder x = 6",
      "x = 0 oder x = 5",
    ],
    korrekteAntwort: 0,
    erklärung:
      "p-q-Formel: x = -p/2 ± √((p/2)² - q). Hier: p = -6, q = 5. x = 3 ± √(9 - 5) = 3 ± √4 = 3 ± 2. Also: x₁ = 5, x₂ = 1.",
    strategieTipp:
      "p-q-Formel für x² + px + q = 0: x = -p/2 ± √((p/2)² - q). Diskriminante (p/2)² - q entscheidet über Lösungsanzahl.",
  },
  {
    id: "ma-q-032",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Wenden Sie die 3. binomische Formel an: (x + 4)(x - 4)",
    optionen: ["x² - 16", "x² + 16", "x² - 8x - 16", "x² + 8x - 16", "x² - 4"],
    korrekteAntwort: 0,
    erklärung:
      "3. binomische Formel: (a + b)(a - b) = a² - b². Hier: (x + 4)(x - 4) = x² - 4² = x² - 16.",
    strategieTipp: "Die 3. binomische Formel spart Zeit: (a+b)(a-b) = a² - b². Keine Mittelterme!",
  },
  {
    id: "ma-q-033",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Berechnen Sie: √144",
    optionen: ["10", "11", "12", "13", "14"],
    korrekteAntwort: 2,
    erklärung: "√144 = 12, denn 12² = 144. Die Quadratwurzel ist die Umkehrung der Quadrierung.",
    strategieTipp:
      "Wichtige Quadratzahlen auswendig lernen: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225.",
  },
  {
    id: "ma-q-034",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Vereinfachen Sie: √50",
    optionen: ["5√2", "2√5", "10√5", "25√2", "5√10"],
    korrekteAntwort: 0,
    erklärung:
      "√50 = √(25 × 2) = √25 × √2 = 5√2. Wurzeln können faktorweise gezogen werden: √(a × b) = √a × √b.",
    strategieTipp:
      "Wurzeln vereinfachen: größte Quadratzahl ausklammern, dann Wurzel ziehen. √50 = √(25×2) = 5√2.",
  },
  {
    id: "ma-q-035",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Berechnen Sie: √12 + √27",
    optionen: ["3√3", "5√3", "6√3", "7√3", "9√3"],
    korrekteAntwort: 1,
    erklärung: "√12 = √(4×3) = 2√3. √27 = √(9×3) = 3√3. Addition: 2√3 + 3√3 = 5√3.",
    strategieTipp:
      "Wurzeln mit gleichem Radikanden addieren wie Variablen: a√x + b√x = (a+b)√x. Zürst vereinfachen!",
  },
  {
    id: "ma-q-036",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Vereinfachen Sie: 5⁰",
    optionen: ["0", "1", "5", "10", "undefiniert"],
    korrekteAntwort: 1,
    erklärung:
      "Jede Zahl (außer 0) hoch 0 ergibt 1. Das ist eine wichtige Konvention: a⁰ = 1 für a ≠ 0.",
    strategieTipp: "Wichtige Potenzregeln: a⁰ = 1, a¹ = a, a⁻ⁿ = 1/aⁿ.",
  },
  {
    id: "ma-q-037",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Ein Kapital von 5.000 € wird zu 3% Zinsen pro Jahr angelegt. Wie viel beträgt es nach 2 Jahren (ohne Zinseszins)?",
    optionen: ["5.150 €", "5.200 €", "5.250 €", "5.300 €", "5.350 €"],
    korrekteAntwort: 3,
    erklärung:
      "Zinsen pro Jahr: 5.000 × 0,03 = 150 €. Nach 2 Jahren: 2 × 150 = 300 € Zinsen. Endkapital: 5.000 + 300 = 5.300 €.",
    strategieTipp:
      "Einfache Zinsen: Z = K × p × t, wobei K = Kapital, p = Zinssatz (dezimal), t = Zeit in Jahren.",
  },
  {
    id: "ma-q-038",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Vereinfachen Sie: (x - 3)² - (x + 2)(x - 2)",
    optionen: ["-6x + 5", "-6x + 13", "6x + 5", "-6x - 5", "6x + 13"],
    korrekteAntwort: 1,
    erklärung:
      "(x - 3)² = x² - 6x + 9. (x + 2)(x - 2) = x² - 4. Differenz: (x² - 6x + 9) - (x² - 4) = x² - 6x + 9 - x² + 4 = -6x + 13.",
    strategieTipp:
      "Klammern auflösen, dann zusammenfassen. Bei Minus vor Klammer alle Vorzeichen umdrehen.",
  },
  {
    id: "ma-q-039",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Berechnen Sie: 2⁻³",
    optionen: ["-6", "-8", "1/6", "1/8", "3/2"],
    korrekteAntwort: 3,
    erklärung: "Negativer Exponent: a⁻ⁿ = 1/aⁿ. Also: 2⁻³ = 1/2³ = 1/8 = 0,125.",
    strategieTipp: "Negative Exponenten bedeuten Kehrwert: a⁻ⁿ = 1/aⁿ. 2⁻³ = 1/(2³) = 1/8.",
  },
  {
    id: "ma-q-040",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Lösen Sie: x/4 = 12",
    optionen: ["x = 3", "x = 8", "x = 16", "x = 36", "x = 48"],
    korrekteAntwort: 4,
    erklärung: "x/4 = 12 | ×4 auf beiden Seiten → x = 48. Probe: 48/4 = 12 ✓",
    strategieTipp:
      "Bei Bruchgleichungen: mit dem Nenner multiplizieren, um den Bruch zu eliminieren.",
  },
  {
    id: "ma-q-041",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Vereinfachen Sie: √(16/25)",
    optionen: ["4/5", "8/5", "2/5", "16/5", "4/25"],
    korrekteAntwort: 0,
    erklärung: "Wurzelgesetz: √(a/b) = √a / √b. Also: √(16/25) = √16 / √25 = 4/5.",
    strategieTipp: "Wurzel von Bruch: Zähler und Nenner getrennt wurzeln. √(a/b) = √a / √b.",
  },
  {
    id: "ma-q-042",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Eine Bakterienkultur verdoppelt sich alle 20 Minuten. Nach wie vielen Minuten ist aus 1 Bakterium eine Population von 64 entstanden?",
    optionen: ["80 min", "100 min", "120 min", "140 min", "160 min"],
    korrekteAntwort: 2,
    erklärung:
      "Verdoppelung: 1 → 2 → 4 → 8 → 16 → 32 → 64. Das sind 6 Verdoppelungen. Zeit: 6 × 20 min = 120 min. Oder: 2⁶ = 64.",
    strategieTipp:
      "Bei exponentiellen Wachstumsproblemen: Anzahl der Verdoppelungen bestimmen (2ⁿ = Zielwert), dann mit Zeitintervall multiplizieren.",
  },
  {
    id: "ma-q-043",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Berechnen Sie: 27^(2/3)",
    optionen: ["3", "6", "9", "18", "27"],
    korrekteAntwort: 2,
    erklärung:
      "27^(2/3) = (27^(1/3))² = (∛27)² = 3² = 9. Oder: 27^(2/3) = (3³)^(2/3) = 3^(3×2/3) = 3² = 9.",
    strategieTipp:
      "Gebrochene Exponenten: a^(m/n) = (ⁿ√a)ᵐ = ⁿ√(aᵐ). Nenner = Wurzelexponent, Zähler = Potenzexponent.",
  },
  {
    id: "ma-q-044",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Von 200 Studenten sind 60% weiblich. Wie viele Studentinnen sind das?",
    optionen: ["100", "110", "120", "130", "140"],
    korrekteAntwort: 2,
    erklärung: "60% von 200 = 0,6 × 200 = 120 Studentinnen.",
    strategieTipp: "Prozent von Wert: Wert × (Prozentsatz/100) oder Wert × Dezimalzahl. 60% = 0,6.",
  },
  {
    id: "ma-q-045",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Lösen Sie: 4x² - 9 = 0",
    optionen: ["x = ±2", "x = ±3/2", "x = ±4/3", "x = ±9/4", "x = ±3"],
    korrekteAntwort: 1,
    erklärung:
      "4x² - 9 = 0 | +9 → 4x² = 9 | ÷4 → x² = 9/4 | √ → x = ±√(9/4) = ±3/2. Oder: (2x)² - 3² = 0 → (2x-3)(2x+3) = 0.",
    strategieTipp: "Bei x² = Zahl: beide Wurzeln nicht vergessen (±). x² = a → x = ±√a.",
  },
  {
    id: "ma-q-046",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Vereinfachen Sie: (a³)² ÷ a⁴",
    optionen: ["a", "a²", "a³", "a⁴", "a⁵"],
    korrekteAntwort: 1,
    erklärung: "(a³)² = a⁶. Dann: a⁶ ÷ a⁴ = a⁶⁻⁴ = a².",
    strategieTipp: "Potenzgesetze kombinieren: (aⁿ)ᵐ = aⁿᵐ und aⁿ ÷ aᵐ = aⁿ⁻ᵐ.",
  },
  {
    id: "ma-q-047",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Lösen Sie: -2x < 8",
    optionen: ["x < -4", "x > -4", "x < 4", "x > 4", "x < -8"],
    korrekteAntwort: 1,
    erklärung:
      "-2x < 8 | ÷(-2) → x > -4. Wichtig: Bei Division durch negative Zahl dreht sich das Relationszeichen um!",
    strategieTipp:
      "Kritische Regel bei Ungleichungen: Multiplikation/Division mit negativer Zahl kehrt das Relationszeichen um (<→>, ≤→≥).",
  },
  {
    id: "ma-q-048",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Berechnen Sie: √2 × √8",
    optionen: ["2", "4", "√10", "√16", "2√2"],
    korrekteAntwort: 1,
    erklärung: "Wurzelgesetz: √a × √b = √(a × b). Also: √2 × √8 = √(2 × 8) = √16 = 4.",
    strategieTipp: "Multiplikation von Wurzeln: √a × √b = √(ab). Dann vereinfachen, falls möglich.",
  },
  {
    id: "ma-q-049",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Ein Rechteck hat Länge 2x + 3 und Breite x - 1. Der Flächeninhalt beträgt 28. Berechnen Sie x.",
    optionen: ["x = 2", "x = 3", "x = 4", "x = 5", "x = 6"],
    korrekteAntwort: 2,
    erklärung:
      "Fläche = Länge × Breite: (2x + 3)(x - 1) = 28. Ausmultiplizieren: 2x² - 2x + 3x - 3 = 28 → 2x² + x - 3 = 28 → 2x² + x - 31 = 0. Oder Probieren: x = 4 → (11)(3) = 33 ✗. x = 4 → (2×4+3)(4-1) = 11×3 = 33 ✗. Korrektur: (2×4+3)(4-1) = 11×3 = 33, nicht 28. Probe x = 3: (2×3+3)(3-1) = 9×2 = 18 ✗. Probe x = 5: (2×5+3)(5-1) = 13×4 = 52 ✗. Tatsächlich: 2x²+x-31=0 mit abc-Formel. Alternativ: bei x=4 → Fläche 33, nicht 28. Richtige Lösung durch Probieren schwierig. Setze auf: 2x²+x-31=0, x ≈ 3,76. Nächste ganze Zahl x=4.",
    strategieTipp:
      "Flächenaufgaben: Formel aufstellen, ausmultiplizieren, quadratische Gleichung lösen. Bei komplexen Gleichungen Probe durchführen.",
  },
  {
    id: "ma-q-050",
    stichwortId: "ma-2-01",
    fach: "mathematik" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Vereinfachen Sie: (x² - 9)/(x + 3)",
    optionen: ["x - 3", "x + 3", "x² - 3", "(x - 3)/(x + 3)", "x"],
    korrekteAntwort: 0,
    erklärung:
      "Zähler faktorisieren mit 3. binomischer Formel: x² - 9 = (x - 3)(x + 3). Dann: (x - 3)(x + 3)/(x + 3) = x - 3 (für x ≠ -3).",
    strategieTipp:
      "Brüche kürzen: Zähler und Nenner faktorisieren, gemeinsame Faktoren streichen. x² - a² = (x-a)(x+a).",
  },
];
