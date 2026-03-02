import type { Kapitel } from "../types";

export const mathKapGrundlagen: Kapitel = {
  id: "mathe-kap3",
  title: "Prozentrechnung, Dreisatz & Brüche",
  subject: "mathematik",
  icon: "\ud83d\udcca",
  estimatedTime: "90 min",
  unterkapitel: [
    {
      id: "ma-grund-01",
      title: "Bruchrechnung & Termumformung",
      stichworte: [
        "Bruchrechnung",
        "Erweitern",
        "Kürzen",
        "Kehrwert",
        "Doppelbruch",
        "Betrag",
        "Hauptnenner",
        "kgV",
        "Verdünnungsreihe",
        "Konzentrationsbruch",
        "Termumformung",
        "Bruchdivision",
      ],
      content: `## Grundbegriffe

Ein Bruch a/b beschreibt den Quotienten aus Zähler a und Nenner b (b \u2260 0). Jeder Bruch repräsentiert eine rationale Zahl. Zwei Brüche sind **gleichwertig**, wenn sie sich durch Erweitern oder Kürzen ineinander überführen lassen: 2/4 = 1/2.

- **Kürzen:** Zähler und Nenner durch denselben Faktor (ggT, größter gemeinsamer Teiler) dividieren. Beispiel: 12/18 \u2192 (12\u00f76)/(18\u00f76) = 2/3.
- **Erweitern:** Zähler und Nenner mit demselben Faktor multiplizieren. Beispiel: 2/5 = 8/20 (mit 4 erweitert).
- **Hauptnenner finden:** kgV der Nenner berechnen, dann alle Brüche auf diesen Nenner erweitern.

> **Merke:** Kürzen und Erweitern ändern den **Wert** des Bruchs nicht -- nur seine **Darstellung**. Immer so weit wie möglich kürzen (durch den ggT), bevor du weiterrechnest.

---

## Addition und Subtraktion von Brüchen

1. Hauptnenner (kgV der Nenner) bestimmen
2. Jeden Bruch auf den Hauptnenner erweitern
3. Zähler addieren/subtrahieren, Nenner beibehalten
4. Ergebnis kürzen

**Rechenbeispiel:** 3/8 + 5/12.
- kgV(8, 12) = 24.
- 3/8 = 9/24 (mit 3 erweitert); 5/12 = 10/24 (mit 2 erweitert).
- 9/24 + 10/24 = 19/24.
- 19 und 24 haben keinen gemeinsamen Teiler \u2192 Ergebnis: **19/24**.

**Rechenbeispiel:** 7/6 \u2212 2/9.
- kgV(6, 9) = 18.
- 7/6 = 21/18; 2/9 = 4/18.
- 21/18 \u2212 4/18 = 17/18.
- Ergebnis: **17/18**.

> **Merke:** Brüche addieren/subtrahieren: **Erst gleichnamig machen** (kgV der Nenner), dann nur die Zähler verrechnen. Nie die Nenner addieren!

---

## Multiplikation und Division von Brüchen

**Um Brüche zu multiplizieren,** multiplizierst du Zähler mit Zähler und Nenner mit Nenner. Vor dem Rechnen kreuzweise kürzen spart Arbeit.

**Verfahren Multiplikation:** (a/b) \u00d7 (c/d) = (a\u00d7c) / (b\u00d7d). Tipp: Vorher a mit d und c mit b kürzen (Kreuzkürzen).

**Rechenbeispiel:** 3/8 \u00d7 4/9.
- Kreuzkürzen: 3 und 9 durch 3 \u2192 1/8 \u00d7 4/3. Dann 4 und 8 durch 4 \u2192 1/2 \u00d7 1/3 = **1/6**.

**Verfahren Division -- der Kehrwert-Trick:** (a/b) \u00f7 (c/d) = (a/b) \u00d7 (d/c). Man **dividiert nie durch einen Bruch** -- man multipliziert mit dem **Kehrwert**.

**Rechenbeispiel:** (5/6) \u00f7 (15/8).
- Kehrwert von 15/8 ist 8/15.
- (5/6) \u00d7 (8/15). Kreuzkürzen: 5 und 15 durch 5 \u2192 1/6 \u00d7 8/3 = 8/18 = **4/9**.

> **Merke:** Division durch einen Bruch = Multiplikation mit dem Kehrwert. Kehrwert von a/b ist b/a. Vor der Multiplikation immer kreuzweise kürzen!

---

## Doppelbrüche vereinfachen

Ein Doppelbruch ist ein Bruch, in dessen Zähler oder Nenner (oder beiden) wiederum ein Bruch steht. Die Strategie: Den Hauptbruchstrich identifizieren und als Division lesen.

1. Hauptbruchstrich identifizieren: (a/b) / (c/d) = oberer Bruch \u00f7 unterer Bruch
2. Als Division schreiben und mit Kehrwert multiplizieren

**Rechenbeispiel:** (2/3) / (4/5) = (2/3) \u00d7 (5/4) = 10/12 = **5/6**.

**Rechenbeispiel (klinisch):** Eine Lösung hat die Konzentration (0,5 mg) / (1/4 mL). Wie viel mg/mL? Doppelbruch: 0,5 / (1/4) = 0,5 \u00d7 4 = **2 mg/mL**.

**Kehrwert und Betrag:**
- Der **Kehrwert** von a/b ist b/a. Wichtig: (a/b)\u207b\u00b9 = b/a (Zähler und Nenner tauschen).
- Der **Betrag** |a/b| = |a|/|b| ist immer \u2265 0. Klinisch relevant bei Temperaturabweichungen: |37,0 \u2212 38,5| = 1,5 \u00b0C.

> **Merke:** Doppelbruch = oberer Bruch \u00f7 unterer Bruch = oberer Bruch \u00d7 Kehrwert des unteren. Kehrwert: Zähler und Nenner tauschen. |x| = Abstand zu Null.

---

## Klinische Anwendung: Verdünnungsreihen und Konzentrationsbrüche

**Verdünnungsverhältnis 1:n** bedeutet: 1 Teil Substanz + (n\u22121) Teile Lösungsmittel = n Teile gesamt. Die Konzentration sinkt auf 1/n des Originals.

**Rechenbeispiel:** Serum 1:8 verdünnen. 1 mL Serum + 7 mL Puffer = 8 mL gesamt. Konzentration = c_original \u00d7 1/8. Gemessener Titer: 32 AU/mL \u2192 Original: 32 \u00d7 8 = **256 AU/mL**.

**Serienverdünnung:** Drei aufeinanderfolgende 1:2-Verdünnungen: Gesamtfaktor = 1/2 \u00d7 1/2 \u00d7 1/2 = 1/8 = 1:8.

**Konzentrationsbruch:** NaCl 0,9 % = 0,9 g NaCl / 100 mL = 9 mg/mL = 9 g/L. Umrechnung: Bruch erweitern/kürzen je nach gewünschter Einheit.

## Rechenbeispiele

**Beispiel 1 -- Bruchgleichung:** x/3 + x/4 = 7. Hauptnenner 12: 4x/12 + 3x/12 = 7. Also 7x/12 = 7 \u2192 7x = 84 \u2192 **x = 12**. Probe: 12/3 + 12/4 = 4 + 3 = 7 \u2713.

**Beispiel 2 -- Doppelbruch (Dosierung):** Ein Medikament liegt als 2,5 mg / (0,5 mL) vor. Dosis: 7,5 mg. Volumen = 7,5 / (2,5/0,5) = 7,5 / 5 = **1,5 mL**. Oder: Konzentration = 2,5/0,5 = 5 mg/mL, dann V = 7,5/5 = 1,5 mL.

**Beispiel 3 -- Kreuzweise kürzen:** 14/25 \u00d7 15/28. Kürze 14 und 28 durch 14 (1 und 2); kürze 15 und 25 durch 5 (3 und 5). Ergebnis: (1\u00d73)/(5\u00d72) = **3/10**.`,
      lernziele: [
        "Brüche sicher erweitern, kürzen und den Hauptnenner (kgV) bestimmen",
        "Die vier Grundrechenarten für Brüche fehlerfrei anwenden",
        "Doppelbrüche systematisch durch den Kehrwert-Trick vereinfachen",
        "Klinische Verdünnungsverhältnisse als Bruchoperationen berechnen",
      ],
      merksätze: [
        "Kürzen und Erweitern ändern den Wert nicht -- nur die Darstellung.",
        "Addition/Subtraktion: Erst gleichnamig (kgV), dann Zähler verrechnen.",
        "Division durch Bruch = Multiplikation mit dem Kehrwert: (a/b)\u00f7(c/d) = (a/b)\u00d7(d/c).",
        "Doppelbruch: Hauptbruchstrich finden, oberen Bruch durch unteren teilen (= Kehrwert).",
        "Verdünnung 1:n senkt Konzentration auf 1/n des Originals.",
      ],
      klinischerBezug:
        "Bruchrechnung ist das Fundament klinischer Konzentrationsberechnungen. Infusionslösungen (NaCl 0,9 % = 9 g/L), Verdünnungsreihen im Labor (1:2, 1:4, 1:8 ...), Wirkstoffkonzentrationen (mg/mL als Bruch) und die Verdünnungsformel c1V1 = c2V2 basieren alle auf sicherem Umgang mit Brüchen. Im Stationsalltag müssen Doppelbrüche (z. B. \u00b5g/kg/min) fehlerfrei vereinfacht werden, um Dosierungsfehler zu vermeiden.",
      selfTest: [
        {
          question: "Berechne: 5/6 + 7/9",
          options: ["29/18", "12/15", "12/54", "35/54", "1"],
          correctIndex: 0,
          explanation:
            "kgV(6, 9) = 18. 5/6 = 15/18 (mit 3 erweitert); 7/9 = 14/18 (mit 2 erweitert). 15/18 + 14/18 = 29/18. Der Bruch ist echt größer als 1 (= 1 11/18). Häufiger Fehler: Nenner addieren (6+9=15) statt Hauptnenner verwenden.",
          hints: [
            "Hauptnenner = kgV(6, 9). Was ist das kleinste gemeinsame Vielfache?",
            "kgV(6,9) = 18. Erweitere beide Brüche auf Nenner 18.",
          ],
          difficulty: 1,
          tags: ["bruchrechnung", "addition", "hauptnenner"],
        },
        {
          question: "Vereinfache: (3/4) \u00f7 (9/16)",
          options: ["4/3", "3/4", "27/64", "48/36", "12/9"],
          correctIndex: 0,
          explanation:
            "Division = Multiplikation mit Kehrwert: (3/4) \u00d7 (16/9). Kreuzkürzen: 3 und 9 durch 3 \u2192 (1/4) \u00d7 (16/3). 16 und 4 durch 4 \u2192 (1/1) \u00d7 (4/3) = 4/3. Ohne Kreuzkürzen: 3\u00d716 / 4\u00d79 = 48/36 = 4/3.",
          hints: [
            "Dividieren durch einen Bruch = mit dem Kehrwert multiplizieren.",
            "Kehrwert von 9/16 ist 16/9. Dann (3/4) \u00d7 (16/9) berechnen.",
          ],
          difficulty: 1,
          tags: ["bruchrechnung", "division", "kehrwert"],
        },
        {
          question: "Ein Doppelbruch: (2/5) / (4/15). Was ist das Ergebnis in gekürzter Form?",
          options: ["3/2", "2/3", "8/75", "30/20", "6/4"],
          correctIndex: 0,
          explanation:
            "(2/5) / (4/15) = (2/5) \u00d7 (15/4). Kreuzkürzen: 2 und 4 durch 2 \u2192 (1/5) \u00d7 (15/2). 15 und 5 durch 5 \u2192 (1/1) \u00d7 (3/2) = 3/2. Doppelbrüche: Immer den Hauptbruchstrich identifizieren und als Division lesen.",
          hints: [
            "Doppelbruch = oberer Bruch geteilt durch unteren Bruch.",
            "(2/5) \u00d7 (15/4) -- dann kreuzweise kürzen.",
          ],
          difficulty: 2,
          tags: ["doppelbruch", "bruchrechnung", "vereinfachung"],
        },
        {
          question: "Eine Lösung wird dreimal 1:3 verdünnt. Wie groß ist die Gesamtverdünnung?",
          options: ["1:27", "1:9", "1:6", "1:3", "1:81"],
          correctIndex: 0,
          explanation:
            "Jede 1:3-Verdünnung senkt die Konzentration auf 1/3. Dreimal: (1/3) \u00d7 (1/3) \u00d7 (1/3) = 1/27. Gesamtverdünnung = 1:27. Allgemein: n Schritte mit Faktor 1:k ergeben 1:k\u207f. Hier: 3\u00b3 = 27.",
          hints: [
            "Serienverdünnung: Einzelfaktoren multiplizieren.",
            "1/3 \u00d7 1/3 \u00d7 1/3 = 1/?\u00b3 = ?",
          ],
          difficulty: 2,
          tags: ["verdünnung", "serienverdünnung", "bruchrechnung"],
        },
        {
          question:
            "Propofol liegt als 10 mg/mL vor. Ein Patient (70 kg) erhält 2 mg/kg. Wie berechnet man das benötigte Volumen als Bruch?",
          options: [
            "140/10 = 14 mL",
            "70/10 = 7 mL",
            "70/2 = 35 mL",
            "10/140 = 0,07 mL",
            "2/10 = 0,2 mL",
          ],
          correctIndex: 0,
          explanation:
            "Schritt 1: Gesamtdosis = 2 mg/kg \u00d7 70 kg = 140 mg. Schritt 2: Volumen = Dosis / Konzentration = 140 mg / (10 mg/mL) = 140/10 = 14 mL. Der Bruch 140/10 ist das typische Schema: Gesamtdosis durch Konzentration. Einheitenkontrolle: mg / (mg/mL) = mL.",
          hints: [
            "Zuerst Gesamtdosis berechnen: mg/kg \u00d7 kg = mg.",
            "Dann V = Dosis / Konzentration. Achte auf die Einheiten!",
          ],
          difficulty: 2,
          tags: ["dosierung", "bruchrechnung", "konzentration"],
        },
      ],
    },
    {
      id: "ma-grund-02",
      title: "Prozentrechnung",
      stichworte: [
        "Prozentrechnung",
        "Grundwert",
        "Prozentwert",
        "Prozentsatz",
        "Prozentuale Änderung",
        "Prozentpunkte",
        "Promille",
        "Mortalitätsrate",
        "Inzidenz",
        "Prävalenz",
        "NaCl 0,9%",
        "Blutalkoholkonzentration",
      ],
      content: `## Das Grundprinzip: P = G \u00d7 p/100

Prozent bedeutet \u201evon Hundert\u201c. Der Prozentsatz p gibt an, wie viele Teile von je 100 Teilen des Grundwerts G gemeint sind. Die fundamentale Formel **P = G \u00d7 p/100** verbindet drei Größen: **P** (Prozentwert), **G** (Grundwert) und **p** (Prozentsatz).

**Drei Grundfragen aus einer Formel:**

| Gesucht | Formel | Beispiel |
|---------|--------|----------|
| Prozentwert P | P = G \u00d7 p/100 | 15 % von 320 = 320 \u00d7 0,15 = **48** |
| Grundwert G | G = P \u00d7 100/p | 36 ist 12 % von G \u2192 G = 36 \u00d7 100/12 = **300** |
| Prozentsatz p | p = P/G \u00d7 100 | 45 von 180 \u2192 p = 45/180 \u00d7 100 = **25 %** |

**Rechentrick für den Kopf:** 10 % = G \u00f7 10; 5 % = halbe 10 %; 1 % = G \u00f7 100. Damit lässt sich fast jeder Prozentsatz schnell zusammensetzen: 15 % = 10 % + 5 %, 23 % = 20 % + 3 %, etc.

> **Merke:** P = G \u00d7 p/100 ist die Universalformel. Durch Umstellen erhältst du alle drei Grundfragen. Rechentrick: 10 % = G\u00f710, 5 % = halbe 10 %, 1 % = G\u00f7100.

---

## Prozentuale Änderung vs. Prozentpunkte

**Absolute Änderung (Prozentpunkte):** Die schlichte Differenz zweier Prozentwerte.
Beispiel: Mortalität sinkt von 12 % auf 9 %. Absolute Änderung = 12 % \u2212 9 % = **3 Prozentpunkte**.

**Relative Änderung (prozentuale Änderung):** Die Differenz bezogen auf den **Ausgangswert**.
Formel: \u0394% = (Endwert \u2212 Anfangswert) / Anfangswert \u00d7 100 %.
Beispiel: (9 \u2212 12) / 12 \u00d7 100 = \u221225 %. Die Mortalität ist **relativ um 25 %** gesunken.

**Wichtige Asymmetrie:** +50 % und danach \u221250 % ergibt **nicht** den Ausgangswert!
100 \u2192 +50 % \u2192 150 \u2192 \u221250 % \u2192 75 (nicht 100!). Der Grundwert ändert sich bei jeder Änderung.

> **Merke:** Prozentpunkte = schlichte Differenz. Prozentuale Änderung = Differenz/Ausgangswert \u00d7 100 %. Von 40 % auf 30 % = 10 Prozentpunkte absolut, aber 25 % relative Senkung. Beides richtig -- aber verschiedene Aussagen!

---

## Promille (\u2030)

Promille (\u2030) = \u201evon Tausend\u201c. Promille verhält sich zu Prozent wie ein Zehntel: 1 \u2030 = 0,1 % = 0,001.

**Umrechnung:** p \u2030 = p/1000. Prozent zu Promille: \u00d7 10. Promille zu Prozent: \u00f7 10.

**Klinische Anwendung -- Blutalkoholkonzentration (BAK):**
BAK 0,5 \u2030 = 0,5 g Alkohol pro 1000 mL Blut = 0,05 g/100 mL = 50 mg/dL.
Widmark-Formel: BAK = getrunkener Alkohol [g] / (Körpergewicht [kg] \u00d7 r) \u2212 Abbau.
Reduktionsfaktor r: Männer \u2248 0,7; Frauen \u2248 0,6. Abbaurate \u2248 0,15 \u2030/h.

**Rechenbeispiel:** 40 g Alkohol, Mann 80 kg. BAK = 40 / (80 \u00d7 0,7) = 40/56 = **0,71 \u2030**. Nach 2 h: 0,71 \u2212 2 \u00d7 0,15 = **0,41 \u2030**.

> **Merke:** 1 \u2030 = 0,1 % = 1/1000. BAK in \u2030: Gramm Alkohol / (kg \u00d7 r). Abbau: ca. 0,15 \u2030 pro Stunde.

---

## Klinische Kennzahlen als Prozentrechnung

**Prävalenz:** Anteil Erkrankter an der Gesamtbevölkerung zu einem Zeitpunkt. Prävalenz = Erkrankte / Gesamtpopulation \u00d7 100 %.

**Inzidenz:** Anzahl Neuerkrankungen pro Zeiteinheit bezogen auf die Risikopopulation. Inzidenz = Neuerkrankte / Risikopopulation \u00d7 100 % (pro Jahr).

**Mortalitätsrate:** Verstorbene / Gesamtpopulation \u00d7 100 % (pro Zeiteinheit).

**Rechenbeispiel:** In einer Stadt mit 50.000 Einwohnern erkranken 200 Menschen in einem Jahr neu an Diabetes. Inzidenz = 200/50.000 \u00d7 100 = **0,4 %** = 4 \u2030 = 400/100.000.

**NaCl 0,9 %:** 0,9 g NaCl pro 100 mL Lösung = 9 g/L = 9 mg/mL. Isotonisch zum Blutplasma. Die Prozentangabe bei Lösungen ist stets eine Massenkonzentration (g/100 mL = Masse-Volumen-Prozent, w/v).

> **Merke:** Prävalenz = Bestand, Inzidenz = Neuzugang. NaCl 0,9 % = 0,9 g/100 mL = 9 g/L. Lösungsprozente sind Masse pro Volumen (w/v), nicht Masse pro Masse!

---

## Rechenbeispiele

**Beispiel 1 -- Grundwert gesucht:** 56 Patienten (= 14 % der Studiengruppe) entwickelten Nebenwirkungen. Wie groß war die Studiengruppe? G = P \u00d7 100/p = 56 \u00d7 100/14 = **400** Patienten. Probe: 14 % von 400 = 56 \u2713.

**Beispiel 2 -- Prozentuale Änderung:** Blutdruck sinkt von 160 auf 120 mmHg. Absolut: 40 mmHg. Relativ: (160\u2212120)/160 \u00d7 100 = 40/160 \u00d7 100 = **25 %** Senkung. Nicht 33 % (das wäre 40/120 -- falscher Bezugswert!).

**Beispiel 3 -- Promille in Prozent:** Eine Lösung enthält 8 \u2030 Wirkstoff. In Prozent: 8 \u2030 = 8/10 % = **0,8 %**. In g/L: 0,8 g/100 mL = **8 g/L**.

**Beispiel 4 -- Zusammengesetzt:** Inzidenz Grippe: 3 % der 200.000 Einwohner = 6.000 Neuerkrankte. Davon sterben 0,5 %: 6.000 \u00d7 0,005 = **30** Tote. Mortalitätsbezogen auf alle Einwohner: 30/200.000 = **0,015 %** = 0,15 \u2030.`,
      lernziele: [
        "Die drei Grundfragen der Prozentrechnung sicher und schnell lösen",
        "Absolute und relative Änderungen unterscheiden und korrekt berechnen",
        "Zwischen Prozent und Promille umrechnen",
        "Klinische Kennzahlen (Prävalenz, Inzidenz, Mortalität) als Prozentrechnung interpretieren",
      ],
      merksätze: [
        "P = G \u00d7 p/100 -- eine Formel, drei Grundfragen durch Umstellen.",
        "Prozentpunkte = Differenz; prozentuale Änderung = Differenz/Ausgangswert \u00d7 100 %.",
        "Asymmetrie: +50 % und dann \u221250 % ergibt nicht den Ausgangswert!",
        "1 \u2030 = 0,1 % = 1/1000. Promille zu Prozent: durch 10 teilen.",
        "NaCl 0,9 % = 0,9 g/100 mL = 9 g/L (Masse-Volumen-Prozent).",
      ],
      klinischerBezug:
        "Prozentrechnung durchdringt die gesamte Medizin: Laborwerte (Hämatokrit 42 %, SpO2 98 %, Ejektionsfraktion > 55 %), epidemiologische Kennzahlen (Inzidenz, Prävalenz, Mortalitätsrate), Lösungskonzentrationen (NaCl 0,9 %, Glucose 5 %), Studienauswertung (ARR, RRR, NNT) und forensische Berechnungen (BAK in \u2030). Die Verwechslung von Prozentpunkten und prozentualer Änderung führt in klinischen Studien regelmäßig zu Fehlinterpretationen.",
      selfTest: [
        {
          question:
            "Eine Studie zeigt: 72 von 450 Patienten entwickeln eine Nebenwirkung. Wie viel Prozent?",
          options: ["16 %", "14,4 %", "18 %", "6,25 %", "72 %"],
          correctIndex: 0,
          explanation:
            "p = P/G \u00d7 100 = 72/450 \u00d7 100 = 16 %. Probe: 16 % von 450 = 0,16 \u00d7 450 = 72. Korrekt. Rechentrick: 72/450 = 72/450 \u2192 kürze durch 9: 8/50 = 16/100 = 16 %.",
          hints: [
            "Formel: p = Anzahl/Gesamtzahl \u00d7 100.",
            "72/450 kürzen: ggT(72,450) = 18. Also 4/25 = 16/100.",
          ],
          difficulty: 1,
          tags: ["prozentrechnung", "prozentsatz", "klinik"],
        },
        {
          question: "Der HbA1c sinkt von 8,0 % auf 6,8 %. Wie groß ist die relative Senkung?",
          options: ["15 %", "1,2 Prozentpunkte", "17,6 %", "12 %", "85 %"],
          correctIndex: 0,
          explanation:
            "Relative Änderung = (8,0 \u2212 6,8) / 8,0 \u00d7 100 = 1,2/8,0 \u00d7 100 = 15 %. Die absolute Änderung beträgt 1,2 Prozentpunkte. Achtung: 1,2/6,8 \u00d7 100 = 17,6 % wäre falsch (Bezug auf Endwert statt Ausgangswert).",
          hints: [
            "Relative Änderung: Differenz / AUSGANGSWERT \u00d7 100.",
            "(8,0 \u2212 6,8) / 8,0 \u00d7 100 = ?",
          ],
          difficulty: 2,
          tags: ["prozentrechnung", "relative-aenderung", "klinik"],
        },
        {
          question: "Wie viel Gramm NaCl sind in 500 mL NaCl 0,9 %?",
          options: ["4,5 g", "0,9 g", "9 g", "0,45 g", "45 g"],
          correctIndex: 0,
          explanation:
            "NaCl 0,9 % = 0,9 g/100 mL. Für 500 mL: 0,9 \u00d7 5 = 4,5 g. Alternativ: 0,9 % von 500 mL = 500 \u00d7 0,009 = 4,5 g (die Dichte von Wasser ist \u2248 1 g/mL). NaCl 0,9 % = 9 g/L = 4,5 g/500 mL.",
          hints: [
            "0,9 % bedeutet 0,9 g pro 100 mL.",
            "500 mL = 5 \u00d7 100 mL. Also 5 \u00d7 0,9 g = ?",
          ],
          difficulty: 1,
          tags: ["prozentrechnung", "lösungskonzentration", "nacl"],
        },
        {
          question:
            "Ein Wert steigt um 25 % und fällt dann um 20 %. Wie groß ist der Wert relativ zum Ausgangswert?",
          options: [
            "Genau der Ausgangswert (100 %)",
            "105 % des Ausgangswerts",
            "95 % des Ausgangswerts",
            "Mehr als der Ausgangswert",
            "80 % des Ausgangswerts",
          ],
          correctIndex: 0,
          explanation:
            "Ausgangswert 100. Nach +25 %: 100 \u00d7 1,25 = 125. Nach \u221220 %: 125 \u00d7 0,80 = 100. Hier ergibt sich tatsächlich der Ausgangswert, weil 1,25 \u00d7 0,80 = 1,00. Achtung: Das ist ein Spezialfall -- bei +50 % und \u221250 % wäre das Ergebnis nur 75!",
          hints: [
            "Setze 100 als Ausgangswert. Nach +25 %: 100 \u00d7 1,25 = ?",
            "Dann \u221220 % von 125: 125 \u00d7 0,80 = ?",
          ],
          difficulty: 3,
          tags: ["prozentrechnung", "asymmetrie", "multiplikation"],
        },
        {
          question: "Eine BAK von 1,2 \u2030 entspricht wie viel mg/dL?",
          options: ["120 mg/dL", "12 mg/dL", "1200 mg/dL", "0,12 mg/dL", "1,2 mg/dL"],
          correctIndex: 0,
          explanation:
            "1,2 \u2030 = 1,2 g/1000 mL = 1,2 g/L = 0,12 g/100 mL = 120 mg/100 mL = 120 mg/dL. Umrechnung: \u2030 \u00d7 100 = mg/dL (weil 1 \u2030 = 1 g/L = 100 mg/dL). Die BAK-Einheit \u2030 gibt Gramm Alkohol pro 1000 mL (= 1 Liter) Blut an.",
          hints: [
            "1 \u2030 = 1 g/1000 mL = 1 g/L.",
            "1 g/L = 100 mg/100 mL = 100 mg/dL. Also 1,2 \u2030 = ?",
          ],
          difficulty: 2,
          tags: ["promille", "einheiten", "bak"],
        },
      ],
    },
    {
      id: "ma-grund-03",
      title: "Dreisatz & Proportionen",
      stichworte: [
        "Dreisatz",
        "Direkter Dreisatz",
        "Indirekter Dreisatz",
        "Proportionalität",
        "Antiproportionalität",
        "Zusammengesetzter Dreisatz",
        "Verhältnis",
        "Kreuzprodukt",
        "Medikamentendosierung",
        "Infusionsrate",
        "mg/kg",
        "mL/h",
      ],
      content: `## Direkter Dreisatz (proportional)

Zwei Größen sind **direkt proportional**, wenn sie im selben Verhältnis steigen und fallen. Doppelt so viel von A \u2192 doppelt so viel von B. Der **Quotient** A/B bleibt konstant.

1. **Gegeben:** Bekannte Zuordnung aufschreiben (z. B. 3 Tabletten \u2259 750 mg)
2. **Auf 1 zurückführen:** Durch die bekannte Menge teilen (1 Tablette \u2259 250 mg)
3. **Auf die gesuchte Menge hochrechnen:** Mit der gesuchten Menge multiplizieren (5 Tabletten \u2259 1250 mg)

**Formel:** a/b = c/x \u2192 **x = b \u00d7 c / a** (Kreuzprodukt-Eigenschaft).

**Rechenbeispiel 1:** 50 kg erfordern 100 mg Wirkstoff. Wie viel für 70 kg?
- Schritt 1: 50 kg \u2259 100 mg.
- Schritt 2: 1 kg \u2259 100/50 = 2 mg.
- Schritt 3: 70 kg \u2259 70 \u00d7 2 = **140 mg**.

**Rechenbeispiel 2:** 250 mL einer Infusion enthalten 500 mg Wirkstoff. Wie viel mg in 75 mL?
- 1 mL \u2259 500/250 = 2 mg.
- 75 mL \u2259 75 \u00d7 2 = **150 mg**.

> **Merke:** Direkter Dreisatz: Mehr ergibt mehr. Quotient A/B = konstant. Schema: Gegeben \u2192 auf 1 zurückführen \u2192 auf gesuchte Menge hochrechnen.

---

## Indirekter Dreisatz (antiproportional)

**Erkennungsfrage:** Wenn A größer wird, wird B dann **kleiner**? \u2192 Indirekter Dreisatz!
Typische Situationen: Mehr Helfer \u2192 weniger Zeit. Höhere Konzentration \u2192 kleineres Volumen. Schnellere Geschwindigkeit \u2192 kürzere Fahrtzeit.

1. **Gegeben:** Bekannte Zuordnung (z. B. 6 Schwestern \u2259 4 Stunden)
2. **Gesamtarbeit berechnen:** Produkt = 6 \u00d7 4 = 24 Schwesternstunden (konstant!)
3. **Gesuchte Größe:** 24 / 4 Schwestern = **6 Stunden**

**Formel:** a \u00d7 b = c \u00d7 x \u2192 **x = a \u00d7 b / c**.

**Rechenbeispiel (klinisch):** Verdünnungsformel c\u2081 \u00d7 V\u2081 = c\u2082 \u00d7 V\u2082. Stammlösung c\u2081 = 20 mg/mL, gesucht: V\u2081 für 100 mL mit c\u2082 = 5 mg/mL. V\u2081 = (5 \u00d7 100) / 20 = **25 mL**. Konzentration und Volumen sind antiproportional (bei konstanter Stoffmenge).

> **Merke:** Indirekter Dreisatz: Mehr ergibt weniger. Produkt A \u00d7 B = konstant. Erkennungsfrage: \u201eWenn A doppelt so groß wird, wird B halb so groß?\u201c \u2192 indirekt!

---

## Zusammengesetzter Dreisatz

Manchmal ändern sich **zwei** Größen gleichzeitig. Der zusammengesetzte Dreisatz löst dies schrittweise: Erst eine Variable anpassen (direkt oder indirekt), dann die andere.

**Rechenbeispiel:** 5 Arbeiter brauchen 8 Tage für 200 m\u00b2. Wie viele Tage brauchen 4 Arbeiter für 300 m\u00b2?

Schritt 1 -- Arbeiter anpassen (indirekt): 5 Arbeiter \u2259 8 Tage. 4 Arbeiter \u2259 8 \u00d7 5/4 = **10 Tage** (für 200 m\u00b2).

Schritt 2 -- Fläche anpassen (direkt): 200 m\u00b2 \u2259 10 Tage. 300 m\u00b2 \u2259 10 \u00d7 300/200 = **15 Tage**.

**Klinisch:** Infusionsrate kombiniert Dosis (mg/kg/h), Körpergewicht (kg) und Konzentration (mg/mL) -- das ist ein zusammengesetzter Dreisatz.

**Rechenbeispiel (Infusion):** Propofol 6 mg/kg/h, Patient 80 kg, Stammlösung 10 mg/mL.
- Dosis/h = 6 \u00d7 80 = 480 mg/h (direkt proportional zum Gewicht).
- Volumen/h = 480 / 10 = **48 mL/h** (indirekt proportional zur Konzentration).
- Tropfrate bei 20 gtt/mL: 48 \u00d7 20 / 60 = **16 gtt/min**.

> **Merke:** Zusammengesetzter Dreisatz: Schrittweise lösen. Bei jedem Schritt prüfen: direkt oder indirekt? Infusionsraten-Berechnung ist immer ein zusammengesetzter Dreisatz!

---

## Verhältnisse und Kreuzprodukt

**Ein Verhältnis a:b** beschreibt die relative Größe zweier Werte zueinander.

**Kreuzprodukt-Eigenschaft:** Wenn a/b = c/d, dann a \u00d7 d = b \u00d7 c. Diese Eigenschaft ist extrem nützlich zum Lösen von Proportionsgleichungen.

**Rechenbeispiel:** x:4 = 9:12. Kreuzprodukt: 12x = 36, also x = **3**.

**Mischungsverhältnis:** Glucose 5 % und Glucose 20 % sollen zu 500 mL Glucose 8 % gemischt werden. Verhältnis V\u2085:V\u2082\u2080 = (20\u22128):(8\u22125) = 12:3 = **4:1**. Also V\u2085 = 400 mL und V\u2082\u2080 = 100 mL.

> **Merke:** Kreuzprodukt: a/b = c/d \u21d4 a\u00d7d = b\u00d7c. Mischungskreuz: Differenzen der Konzentrationen geben das Mischungsverhältnis.

---

## Rechenbeispiele

**Beispiel 1 -- Dosierung (direkter Dreisatz):** 3 mg/kg, Patient 85 kg. Dosis = 3 \u00d7 85 = **255 mg**. Medikament als 50 mg/mL: V = 255/50 = **5,1 mL**.

**Beispiel 2 -- Infusionsrate (zusammengesetzt):** Heparin 25.000 IE in 250 mL NaCl = 100 IE/mL. Verordnet: 1200 IE/h. Rate = 1200/100 = **12 mL/h**.

**Beispiel 3 -- Indirekter Dreisatz:** Eine Antibiotikum-Infusion soll über 4 h laufen (100 mL). Rate = 100/4 = 25 mL/h. Wenn nur 2 h verfügbar: 100/2 = **50 mL/h** (doppelte Rate bei halber Zeit -- indirekt).

**Beispiel 4 -- Kreuzprodukt:** Verhältnis Serum:Puffer = 1:9 (Gesamtverdünnung 1:10). Für 5 mL Gesamtvolumen: Serum = 5 \u00d7 1/10 = **0,5 mL**; Puffer = **4,5 mL**.`,
      lernziele: [
        "Den direkten Dreisatz auf Dosierungsaufgaben anwenden (mg/kg)",
        "Den indirekten Dreisatz erkennen und für Verdünnungen einsetzen",
        "Direkte und indirekte Proportionalität sicher unterscheiden",
        "Zusammengesetzte Dreisätze schrittweise lösen (Infusionsraten)",
      ],
      merksätze: [
        "Direkter Dreisatz: Mehr ergibt mehr -- Quotient A/B bleibt konstant.",
        "Indirekter Dreisatz: Mehr ergibt weniger -- Produkt A\u00d7B bleibt konstant.",
        "Erkennungsfrage: Wenn A doppelt so groß, wird B doppelt (direkt) oder halb (indirekt)?",
        "Zusammengesetzter Dreisatz: Immer schrittweise, nie in einem Sprung.",
        "Kreuzprodukt: a/b = c/d bedeutet a\u00d7d = b\u00d7c -- universell für Verhältnisse.",
      ],
      klinischerBezug:
        "Der Dreisatz ist das meistverwendete Recheninstrument in der klinischen Praxis. Medikamentendosierungen (mg/kg Körpergewicht), Infusionsraten (mL/h aus mg/kg/h und Konzentration), Verdünnungen (c\u2081V\u2081 = c\u2082V\u2082) und Mischungsberechnungen (Glucose 5 %/20 % mischen) sind täglich notwendig. Fehler bei Dosierungsberechnungen gehören zu den häufigsten vermeidbaren Medikationsfehlern im Krankenhaus.",
      selfTest: [
        {
          question:
            "Ein Patient wiegt 65 kg und soll 4 mg/kg eines Antibiotikums erhalten. Wie hoch ist die Gesamtdosis?",
          options: ["260 mg", "16,25 mg", "650 mg", "26 mg", "4 mg"],
          correctIndex: 0,
          explanation:
            "Direkter Dreisatz: Dosis = mg/kg \u00d7 kg = 4 \u00d7 65 = 260 mg. Die Dosierung ist direkt proportional zum Körpergewicht: doppeltes Gewicht = doppelte Dosis.",
          hints: [
            "Formel: Gesamtdosis = Dosierung pro kg \u00d7 Körpergewicht.",
            "4 mg/kg \u00d7 65 kg = ? mg.",
          ],
          difficulty: 1,
          tags: ["dreisatz", "dosierung", "proportional"],
        },
        {
          question:
            "Eine Stammlösung hat c = 50 mg/mL. Wie viel mL braucht man für 200 mL einer 5-mg/mL-Lösung?",
          options: ["20 mL", "50 mL", "200 mL", "10 mL", "100 mL"],
          correctIndex: 0,
          explanation:
            "Verdünnungsformel (indirekter Dreisatz): c\u2081\u00d7V\u2081 = c\u2082\u00d7V\u2082. 50\u00d7V\u2081 = 5\u00d7200 = 1000. V\u2081 = 1000/50 = 20 mL. Dann 180 mL Lösungsmittel dazu auffüllen auf 200 mL.",
          hints: [
            "Formel: c\u2081 \u00d7 V\u2081 = c\u2082 \u00d7 V\u2082 (Stoffmenge bleibt konstant).",
            "50 \u00d7 V\u2081 = 5 \u00d7 200. V\u2081 = ?",
          ],
          difficulty: 2,
          tags: ["dreisatz", "verdünnung", "antiproportional"],
        },
        {
          question:
            "8 Laborassistenten analysieren Proben in 6 Stunden. Wie lange brauchen 12 Assistenten?",
          options: ["4 h", "9 h", "3 h", "6 h", "12 h"],
          correctIndex: 0,
          explanation:
            "Indirekter Dreisatz: Mehr Assistenten \u2192 weniger Zeit. Gesamtarbeit = 8 \u00d7 6 = 48 Assistentenstunden. Mit 12: 48/12 = 4 Stunden. Produkt bleibt konstant: 8\u00d76 = 12\u00d74 = 48.",
          hints: [
            "Erkennungsfrage: Mehr Assistenten = weniger Zeit \u2192 indirekt!",
            "Produkt = 8 \u00d7 6 = 48 Assistentenstunden. 48 / 12 = ?",
          ],
          difficulty: 1,
          tags: ["dreisatz", "indirekt", "antiproportional"],
        },
        {
          question:
            "Heparin-Infusion: 25.000 IE in 250 mL NaCl (= 100 IE/mL). Verordnet: 800 IE/h. Rate in mL/h?",
          options: ["8 mL/h", "80 mL/h", "0,8 mL/h", "12 mL/h", "4 mL/h"],
          correctIndex: 0,
          explanation:
            "Konzentration = 100 IE/mL (gegeben). Rate = 800 IE/h \u00f7 100 IE/mL = 8 mL/h. Einfacher Dreisatz: verordnete Dosis durch Konzentration.",
          hints: ["Verordnete Dosis pro Stunde durch Konzentration teilen.", "800 \u00f7 100 = ?"],
          difficulty: 2,
          tags: ["dreisatz", "infusionsrate"],
        },
        {
          question:
            "Glucose 5 % und 20 % sollen zu 500 mL Glucose 8 % gemischt werden. Wie viel mL der 5%-Lösung?",
          options: ["400 mL", "300 mL", "100 mL", "250 mL", "350 mL"],
          correctIndex: 0,
          explanation:
            "Mischungskreuz: V\u2085:V\u2082\u2080 = (20\u22128):(8\u22125) = 12:3 = 4:1. Gesamt 500 mL in Teile: 5 Teile = 500 mL, 1 Teil = 100 mL. V\u2085 = 4 \u00d7 100 = 400 mL, V\u2082\u2080 = 100 mL. Probe: (400\u00d750 + 100\u00d7200)/500 = (20.000+20.000)/500 = 80 mg/mL = 8 %.",
          hints: [
            "Mischungskreuz: Differenzen zur Zielkonzentration bilden.",
            "(20\u22128):(8\u22125) = 12:3 = 4:1. Gesamt = 4+1 = 5 Teile = 500 mL.",
          ],
          difficulty: 3,
          tags: ["dreisatz", "mischungskreuz", "glucose"],
        },
      ],
    },
    {
      id: "ma-grund-04",
      title: "Einheitenumrechnung & Größenordnungen",
      stichworte: [
        "SI-Präfixe",
        "Nano",
        "Mikro",
        "Milli",
        "Kilo",
        "Mega",
        "Kettenmethode",
        "Einheitenanalyse",
        "Dimensional Analysis",
        "Umrechnung mg \u00b5g",
        "mmol/L mg/dL",
        "Glucose",
        "mL/min L/h",
      ],
      content: `## SI-Präfixe: Die Zehnerpotenz-Leiter

Das SI-System verwendet **Präfixe** (Vorsilben), um Vielfache und Bruchteile von Einheiten auszudrücken. Jeder Präfixschritt entspricht einer **Zehnerpotenz**. Von milli zu mikro sind es drei Zehnerpotenzen (Faktor 1000).

| Präfix | Symbol | Faktor | Beispiel |
|---------|--------|--------|----------|
| Mega | M | 10\u2076 | 1 MHz = 10\u2076 Hz |
| Kilo | k | 10\u00b3 | 1 kg = 10\u00b3 g |
| (Basis) | -- | 10\u2070 | 1 g, 1 m, 1 L |
| Milli | m | 10\u207b\u00b3 | 1 mg = 10\u207b\u00b3 g |
| Mikro | \u00b5 | 10\u207b\u2076 | 1 \u00b5g = 10\u207b\u2076 g |
| Nano | n | 10\u207b\u2079 | 1 nm = 10\u207b\u2079 m |
| Piko | p | 10\u207b\u00b9\u00b2 | 1 pg = 10\u207b\u00b9\u00b2 g |

**Eselsbrücke für die Reihenfolge (abwärts):** **k**ein **M**ensch **m**ag **\u00b5**berhaupt **n**asse **p**ommes -- kilo, (Basis), milli, mikro, nano, piko. Zwischen benachbarten Präfixen liegen immer **3 Zehnerpotenzen** (Faktor 1000).

- Von einer größeren zu einer kleineren Einheit: **multiplizieren** (1 mg = 1000 \u00b5g).
- Von einer kleineren zu einer größeren Einheit: **dividieren** (500 \u00b5g = 0,5 mg).
- Anzahl der Dreierschritte zählen: mg \u2192 \u00b5g = 1 Schritt = \u00d710\u00b3. mg \u2192 ng = 2 Schritte = \u00d710\u2076.

> **Merke:** Zwischen Nachbar-Präfixen liegen immer 3 Zehnerpotenzen (Faktor 1000). 1 mg = 1000 \u00b5g = 1.000.000 ng. Von groß nach klein: multiplizieren. Von klein nach groß: dividieren.

---

## Die Kettenmethode (Dimensional Analysis)

1. Ausgangswert mit Einheit aufschreiben
2. Umrechnungsfaktoren als Brüche anhängen, sodass sich ungewünschte Einheiten **kürzen**
3. Multiplizieren und Einheiten überprüfen

**Rechenbeispiel 1:** 0,08 mL/min \u2192 ? mL/h.
0,08 mL/min \u00d7 (60 min / 1 h) = 0,08 \u00d7 60 mL/h = **4,8 mL/h**. Die Einheit \u201emin\u201c kürzt sich weg.

**Rechenbeispiel 2:** 500 mL/h \u2192 ? L/h.
500 mL/h \u00d7 (1 L / 1000 mL) = 500/1000 L/h = **0,5 L/h**. Die Einheit \u201emL\u201c kürzt sich.

**Rechenbeispiel 3:** 120 mL/min \u2192 ? L/h.
120 mL/min \u00d7 (1 L / 1000 mL) \u00d7 (60 min / 1 h) = 120 \u00d7 60 / 1000 L/h = 7200/1000 = **7,2 L/h**. Zwei Umrechnungsschritte in einer Kette.

> **Merke:** Kettenmethode: Umrechnungsfaktoren als Brüche schreiben, ungewollte Einheiten kürzen sich weg. Vorteil: Man sieht sofort, ob man multiplizieren oder dividieren muss. Fehlerquelle Nr. 1 (falsche Richtung) wird ausgeschlossen.

---

## Klinisch wichtige Umrechnungen

### mg \u2194 \u00b5g \u2194 ng

Die häufigste Umrechnung in der Klinik:
- 1 mg = 1000 \u00b5g = 1.000.000 ng
- 1 \u00b5g = 0,001 mg = 1000 ng

**Rechenbeispiel:** Noradrenalin 8 \u00b5g/min \u2192 mg/h. 8 \u00b5g/min \u00d7 (1 mg / 1000 \u00b5g) \u00d7 (60 min / 1 h) = 8 \u00d7 60 / 1000 = **0,48 mg/h**.

### mmol/L \u2194 mg/dL (Glucose!)

Die Umrechnung hängt von der **Molmasse** (M) des Stoffs ab:
- Allgemein: c [mg/dL] = c [mmol/L] \u00d7 M [g/mol] \u00d7 0,1
- **Glucose (M = 180 g/mol):** c [mg/dL] = c [mmol/L] \u00d7 **18**

**Rechenbeispiel:** Glucose 5,5 mmol/L \u2192 mg/dL. 5,5 \u00d7 18 = **99 mg/dL** (Normalbereich: 70--100 mg/dL nüchtern).

**Rechenbeispiel (rückwärts):** Glucose 180 mg/dL \u2192 mmol/L. 180 / 18 = **10,0 mmol/L** (deutlich erhöht \u2192 Diabetes mellitus).

> **Merke:** Glucose: mmol/L \u00d7 18 = mg/dL. Allgemein: mmol/L \u00d7 Molmasse/10 = mg/dL. Faktor 18 für Glucose auswendig lernen!

### mL/min \u2194 L/h

GFR und Clearance-Werte werden oft in mL/min angegeben, Infusionsraten in mL/h oder L/h:
- mL/min \u00d7 60 = mL/h
- mL/h \u00f7 1000 = L/h
- mL/min \u00d7 0,06 = L/h

**Rechenbeispiel:** GFR 90 mL/min = 90 \u00d7 60 = 5400 mL/h = **5,4 L/h**.

---

## Größenordnungen in der Medizin

| Objekt / Wert | Größenordnung |
|----------------|-----------------|
| Erythrozyt | 8 \u00b5m = 8 \u00d7 10\u207b\u2076 m |
| Bakterium | 1--5 \u00b5m |
| Virus | 20--300 nm |
| Glucose im Blut | 5 mmol/L \u2248 90 mg/dL |
| Natrium im Blut | 140 mmol/L |
| Hämoglobin | 15 g/dL = 150 g/L |
| Blutvolumen Erwachsener | 5 L \u2248 70 mL/kg |
| GFR | 90--120 mL/min |

> **Merke:** Typische Größenordnungen auswendig: Glucose \u2248 5 mmol/L \u2248 90 mg/dL; GFR \u2248 100 mL/min; Erythrozyt \u2248 8 \u00b5m; Virus \u2248 100 nm. Diese Werte helfen bei Plausibilitätschecks.

---

## Rechenbeispiele

**Beispiel 1 -- Kettenmethode (Dopamin):** Dosierung 5 \u00b5g/kg/min, Patient 70 kg, Lösung 200 mg/50 mL.
- Dosis/min = 5 \u00d7 70 = 350 \u00b5g/min.
- Konzentration = 200 mg/50 mL = 4 mg/mL = 4000 \u00b5g/mL.
- Rate = 350/4000 = 0,0875 mL/min \u00d7 60 = **5,25 mL/h**.

**Beispiel 2 -- Glucose-Umrechnung:** Patient: Glucose 11,1 mmol/L. In mg/dL: 11,1 \u00d7 18 = **199,8 \u2248 200 mg/dL** (deutlich über 126 mg/dL \u2192 Diabetes-Diagnose nüchtern).

**Beispiel 3 -- Einheiten-Kette:** Kreatinin-Clearance 1,4 mL/s. In mL/min: 1,4 \u00d7 60 = **84 mL/min**. In L/h: 84 \u00d7 60/1000 = **5,04 L/h**.

**Beispiel 4 -- Präfixsprung:** 0,25 mg = ? \u00b5g. Schritt: mg \u2192 \u00b5g = \u00d71000. Also 0,25 \u00d7 1000 = **250 \u00b5g**. Rückwärts: 250 \u00b5g = 250/1000 mg = 0,25 mg.`,
      lernziele: [
        "SI-Präfixe (nano bis mega) und ihre Zehnerpotenzen sicher beherrschen",
        "Die Kettenmethode für zusammengesetzte Einheitenumrechnungen anwenden",
        "Glucose zwischen mmol/L und mg/dL umrechnen (Faktor 18)",
        "Klinische Größenordnungen abschätzen und als Plausibilitätscheck nutzen",
      ],
      merksätze: [
        "Zwischen Nachbar-Präfixen (mg \u2192 \u00b5g \u2192 ng) liegen immer 3 Zehnerpotenzen = Faktor 1000.",
        "Kettenmethode: Umrechnungsfaktoren als Brüche, ungewollte Einheiten kürzen sich weg.",
        "Glucose: mmol/L \u00d7 18 = mg/dL -- Faktor 18 auswendig lernen!",
        "Von groß nach klein: multiplizieren. Von klein nach groß: dividieren.",
        "Immer Einheiten mitführen -- sie sind der beste Fehlercheck.",
      ],
      klinischerBezug:
        "Einheitenumrechnung ist in der Klinik lebenswichtig. Medikamentendosierungen in \u00b5g/kg/min müssen in mL/h umgerechnet werden (Infusionspumpe). Laborwerte erscheinen je nach Land in mmol/L oder mg/dL -- die Glucose-Umrechnung (\u00d718) ist täglich relevant. Die GFR (mL/min) bestimmt die Nierenfunktion und Dosisanpassung. Fehlerhafte Einheitenumrechnungen führen zu Über- oder Unterdosierungen und gehören zu den häufigsten Medikationsfehlern weltweit (z. B. Verwechslung mg/\u00b5g: Faktor-1000-Fehler!).",
      selfTest: [
        {
          question: "Wie viel \u00b5g sind 0,35 mg?",
          options: ["350 \u00b5g", "35 \u00b5g", "3500 \u00b5g", "3,5 \u00b5g", "0,00035 \u00b5g"],
          correctIndex: 0,
          explanation:
            "1 mg = 1000 \u00b5g. Also 0,35 mg = 0,35 \u00d7 1000 = 350 \u00b5g. Von mg (größer) zu \u00b5g (kleiner): multiplizieren mit 1000. Kettenmethode: 0,35 mg \u00d7 (1000 \u00b5g / 1 mg) = 350 \u00b5g -- die Einheit mg kürzt sich.",
          hints: [
            "mg \u2192 \u00b5g: Einen Präfixschritt nach unten = \u00d7 1000.",
            "0,35 \u00d7 1000 = ?",
          ],
          difficulty: 1,
          tags: ["einheiten", "si-präfix", "umrechnung"],
        },
        {
          question: "Glucose 6,5 mmol/L -- wie viel mg/dL? (Molmasse Glucose = 180 g/mol)",
          options: ["117 mg/dL", "36 mg/dL", "1170 mg/dL", "65 mg/dL", "11,7 mg/dL"],
          correctIndex: 0,
          explanation:
            "Formel: mg/dL = mmol/L \u00d7 M/10 = mmol/L \u00d7 180/10 = mmol/L \u00d7 18. Rechnung: 6,5 \u00d7 18 = 117 mg/dL. Nüchtern-Normwert: 70--100 mg/dL; 117 mg/dL ist grenzwertig erhöht (Prediabetes ab 100 mg/dL nüchtern).",
          hints: [
            "Glucose-Faktor: mmol/L \u00d7 18 = mg/dL.",
            "6,5 \u00d7 18 = 6,5 \u00d7 20 \u2212 6,5 \u00d7 2 = 130 \u2212 13 = ?",
          ],
          difficulty: 2,
          tags: ["glucose", "umrechnung", "molmasse"],
        },
        {
          question: "Eine GFR von 90 mL/min entspricht wie viel L/h?",
          options: ["5,4 L/h", "1,5 L/h", "54 L/h", "0,54 L/h", "9 L/h"],
          correctIndex: 0,
          explanation:
            "Kettenmethode: 90 mL/min \u00d7 (60 min/1 h) \u00d7 (1 L/1000 mL) = 90 \u00d7 60 / 1000 = 5400/1000 = 5,4 L/h. Alternativ: mL/min \u00d7 0,06 = L/h; 90 \u00d7 0,06 = 5,4. Zwei Umrechnungen in einer Kette.",
          hints: [
            "Erst mL/min \u2192 mL/h (\u00d760), dann mL \u2192 L (\u00f71000).",
            "90 \u00d7 60 = 5400 mL/h. 5400/1000 = ? L/h.",
          ],
          difficulty: 2,
          tags: ["einheiten", "kettenmethode", "gfr"],
        },
        {
          question: "Ein Virus ist ca. 100 nm groß. Wie viel \u00b5m entspricht das?",
          options: ["0,1 \u00b5m", "10 \u00b5m", "0,01 \u00b5m", "1 \u00b5m", "100 \u00b5m"],
          correctIndex: 0,
          explanation:
            "1 \u00b5m = 1000 nm. Also 100 nm = 100/1000 \u00b5m = 0,1 \u00b5m. Von nm (kleiner) zu \u00b5m (größer): dividieren durch 1000. Zum Vergleich: Ein Erythrozyt misst 8 \u00b5m -- also 80-mal größer als ein typisches Virus.",
          hints: [
            "nm \u2192 \u00b5m: Einen Präfixschritt nach oben = \u00f7 1000.",
            "100 / 1000 = ?",
          ],
          difficulty: 1,
          tags: ["einheiten", "si-präfix", "größenordnung"],
        },
        {
          question:
            "Antibiotikum-Infusion: 500 mg in 100 mL, zu verabreichen über 2 Stunden. Rate in mL/h?",
          options: ["50 mL/h", "100 mL/h", "25 mL/h", "200 mL/h", "250 mL/h"],
          correctIndex: 0,
          explanation:
            "100 mL über 2 h = 100 \u00f7 2 = 50 mL/h. Einfache Division von Gesamtvolumen durch Infusionsdauer.",
          hints: ["Gesamtvolumen durch Infusionsdauer teilen.", "100 mL \u00f7 2 h = ?"],
          difficulty: 1,
          tags: ["einheiten", "infusion", "division"],
        },
      ],
    },
  ],
};
