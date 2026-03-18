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
      content: `Ein Zehnfach-Dosierungsfehler bei Heparin, eine falsch berechnete Infusionsrate, ein verwechseltes Komma bei Insulin — Bruchrechnung rettet im klinischen Alltag buchstäblich Leben. Jede Medikamentendosierung ist im Kern ein Bruch: 500 mg Wirkstoff in 250 mL Trägerlösung ergibt 2 mg/mL.

## Warum Bruchrechnung in der Medizin unverzichtbar ist

Wer Brüche sicher beherrscht, vermeidet Dosierungsfehler — die häufigste vermeidbare Komplikation im Krankenhaus.

Ein Bruch a/b beschreibt den Quotienten aus **Zähler** a und **Nenner** b (b \u2260 0). Jeder Bruch ist eine rationale Zahl (Verhältniszahl). Zwei Brüche heißen **gleichwertig**, wenn sie sich durch Erweitern oder Kürzen ineinander überführen lassen: 2/4 = 1/2.

| Operation | Was passiert | Beispiel |
|-----------|-------------|----------|
| **Kürzen** | Zähler und Nenner durch ggT (größter gemeinsamer Teiler) dividieren | 12/18 \u2192 (12 \u00f7 6)/(18 \u00f7 6) = 2/3 |
| **Erweitern** | Zähler und Nenner mit demselben Faktor multiplizieren | 2/5 = 8/20 (mit 4 erweitert) |
| **Hauptnenner** | kgV (kleinstes gemeinsames Vielfaches) der Nenner bestimmen, dann erweitern | kgV(6,8) = 24 |

> **Merke:** Kürzen und Erweitern ändern den **Wert** des Bruchs nicht -- nur seine **Darstellung**. Immer so weit wie möglich kürzen (durch den ggT), bevor du weiterrechnest.

---

{{DIAGRAM:percent-fractions}}

## Addition und Subtraktion von Brüchen

Die Grundregel: Nur **gleichnamige** Brüche (gleicher Nenner) dürfen direkt verrechnet werden. Verschiedene Nenner müssen zuerst auf den Hauptnenner gebracht werden.

**4-Schritt-Verfahren:**
1. Hauptnenner (kgV der Nenner) bestimmen
2. Jeden Bruch auf den Hauptnenner erweitern
3. Zähler addieren/subtrahieren, Nenner beibehalten
4. Ergebnis kürzen

**Rechenbeispiel 1:** 3/8 + 5/12
- kgV(8, 12) = 24
- 3/8 = 9/24 (mit 3 erweitert); 5/12 = 10/24 (mit 2 erweitert)
- 9/24 + 10/24 = 19/24
- 19 und 24 sind teilerfremd \u2192 Ergebnis: **19/24**

**Rechenbeispiel 2:** 7/6 \u2212 2/9
- kgV(6, 9) = 18
- 7/6 = 21/18; 2/9 = 4/18
- 21/18 \u2212 4/18 = **17/18**

**Typischer MedAT-Fehler:** Nenner addieren statt Hauptnenner bilden. 1/3 + 1/4 ist **nicht** 2/7, sondern 4/12 + 3/12 = 7/12.

> **Merke:** Brüche addieren/subtrahieren: **Erst gleichnamig machen** (kgV der Nenner), dann nur die Zähler verrechnen. Nie die Nenner addieren!

---

## Multiplikation und Division von Brüchen

**Multiplikation** ist die einfachste Bruchoperation: Zähler mal Zähler, Nenner mal Nenner. Der Trick, der Zeit spart: vorher **kreuzweise kürzen**.

**Formel:** (a/b) \u00d7 (c/d) = (a \u00d7 c) / (b \u00d7 d)

**Rechenbeispiel:** 3/8 \u00d7 4/9
- Kreuzkürzen: 3 und 9 durch 3 \u2192 1/8 \u00d7 4/3; dann 4 und 8 durch 4 \u2192 1/2 \u00d7 1/3 = **1/6**
- Ohne Kreuzkürzen: 12/72 = 1/6 (mehr Rechenaufwand, gleiches Ergebnis)

**Division -- der Kehrwert-Trick:** Man dividiert nie durch einen Bruch. Stattdessen multipliziert man mit dem **Kehrwert** (Zähler und Nenner tauschen):

(a/b) \u00f7 (c/d) = (a/b) \u00d7 (d/c)

**Rechenbeispiel:** (5/6) \u00f7 (15/8)
- Kehrwert von 15/8 ist 8/15
- (5/6) \u00d7 (8/15): Kreuzkürzen 5 und 15 durch 5 \u2192 (1/6) \u00d7 (8/3) = 8/18 = **4/9**

**Klinisch:** Eine Infusion liefert 500 mg in 4 h. Konzentration der Lösung: 10 mg/mL. Rate = (500/4) \u00f7 10 = 125/10 = **12,5 mL/h**.

> **Merke:** Division durch einen Bruch = Multiplikation mit dem Kehrwert. Kehrwert von a/b ist b/a. Vor der Multiplikation immer kreuzweise kürzen!

---

## Doppelbrüche und Betrag

Ein **Doppelbruch** ist ein Bruch im Bruch -- in der Klinik allgegenwärtig bei zusammengesetzten Einheiten wie \u00b5g/kg/min. Die Strategie: Den **Hauptbruchstrich** identifizieren und als Division lesen.

| Schritt | Aktion | Beispiel: (2/3) / (4/5) |
|---------|--------|--------------------------|
| 1 | Hauptbruchstrich finden | oberer Bruch = 2/3, unterer = 4/5 |
| 2 | Als Division schreiben | (2/3) \u00f7 (4/5) |
| 3 | Kehrwert multiplizieren | (2/3) \u00d7 (5/4) = 10/12 = **5/6** |

**Rechenbeispiel (klinisch):** Eine Lösung hat die Konzentration (0,5 mg) / (1/4 mL). Doppelbruch: 0,5 \u00f7 (1/4) = 0,5 \u00d7 4 = **2 mg/mL**.

**Kehrwert:** (a/b)\u207b\u00b9 = b/a. Zähler und Nenner tauschen die Plätze.

**Betrag:** |a/b| = |a|/|b|, immer \u2265 0. Klinisch relevant: |37,0 \u2212 38,5| = 1,5 \u00b0C Abweichung von der Norm, unabhängig von der Richtung.

> **Merke:** Doppelbruch = oberer Bruch \u00f7 unterer Bruch = oberer Bruch \u00d7 Kehrwert des unteren. Immer den Hauptbruchstrich zuerst identifizieren!

---

## Klinische Anwendung: Verdünnungsreihen und Konzentrationsbrüche

**Verdünnungsverhältnis 1:n** bedeutet: 1 Teil Substanz + (n \u2212 1) Teile Lösungsmittel = n Teile gesamt. Die Konzentration sinkt auf **1/n** des Originals.

**Rechenbeispiel -- Serumverdünnung:** 1 mL Serum + 7 mL Puffer = 8 mL gesamt (Verdünnung 1:8). Gemessener Titer: 32 AU/mL \u2192 Original: 32 \u00d7 8 = **256 AU/mL**.

**Serienverdünnung:** Drei aufeinanderfolgende 1:2-Verdünnungen: Gesamtfaktor = (1/2)\u00b3 = 1/8. Die Einzelverdünnungen werden **multipliziert**, nicht addiert.

**Konzentrationsbruch:** NaCl 0,9 % = 0,9 g/100 mL = 9 mg/mL = 9 g/L. Umrechnung: Bruch erweitern/kürzen je nach gewünschter Einheit.

{{DIAGRAM:fraction-operations}}

---

## Rechenbeispiele für die Prüfung

**Beispiel 1 -- Bruchgleichung:** x/3 + x/4 = 7. Hauptnenner 12: 4x/12 + 3x/12 = 7 \u2192 7x/12 = 7 \u2192 7x = 84 \u2192 **x = 12**. Probe: 12/3 + 12/4 = 4 + 3 = 7 \u2713

**Beispiel 2 -- Doppelbruch (Dosierung):** Medikament: 2,5 mg / 0,5 mL. Benötigte Dosis: 7,5 mg. Volumen = 7,5 / (2,5/0,5) = 7,5 / 5 = **1,5 mL**

**Beispiel 3 -- Kreuzweise kürzen:** 14/25 \u00d7 15/28. Kürze 14 und 28 durch 14 (\u2192 1 und 2); kürze 15 und 25 durch 5 (\u2192 3 und 5). Ergebnis: (1 \u00d7 3)/(5 \u00d7 2) = **3/10**

**Beispiel 4 -- Serienverdünnung:** Ausgangslösung 1 mg/mL. Nach 4\u00d7 Verdünnung 1:5: Konzentration = 1 \u00d7 (1/5)\u2074 = 1/625 mg/mL = **1,6 \u00b5g/mL**

**Prüfungsrelevante Fakten:**
- ggT(a,b) = größter gemeinsamer Teiler \u2192 maximales Kürzen
- kgV(a,b) = kleinstes gemeinsames Vielfaches \u2192 Hauptnenner
- kgV(a,b) = a \u00d7 b / ggT(a,b) -- schnelle Berechnung
- Verdünnung 1:n \u2192 Konzentration wird 1/n des Originals
- NaCl 0,9 % = 9 g/L = 9 mg/mL (isotonisch)`,
      lernziele: [
        "Brüche sicher erweitern, kürzen und den Hauptnenner (kgV) bestimmen",
        "Die vier Grundrechenarten für Brüche fehlerfrei anwenden",
        "Doppelbrüche systematisch durch den Kehrwert-Trick vereinfachen",
        "Klinische Verdünnungsverhältnisse als Bruchoperationen berechnen",
      ],
      merksätze: [
        "Kürzen und Erweitern ändern den Wert nicht -- nur die Darstellung. Immer durch ggT kürzen!",
        "Addition/Subtraktion: Erst gleichnamig (kgV), dann nur Zähler verrechnen -- nie Nenner addieren!",
        "Division durch Bruch = Multiplikation mit dem Kehrwert: (a/b)\u00f7(c/d) = (a/b)\u00d7(d/c).",
        "Doppelbruch: Hauptbruchstrich finden \u2192 als Division lesen \u2192 mit Kehrwert multiplizieren.",
        "Verdünnung 1:n senkt Konzentration auf 1/n. Serienverdünnung: Faktoren multiplizieren.",
        "kgV(a,b) = a\u00d7b / ggT(a,b) -- schnelle Hauptnenner-Berechnung.",
      ],
      klinischerBezug:
        "Bruchrechnung ist das Fundament klinischer Konzentrationsberechnungen. Infusionslösungen (NaCl 0,9 % = 9 g/L), Verdünnungsreihen im Labor (1:2, 1:4, 1:8 ...), Wirkstoffkonzentrationen (mg/mL als Bruch) und die Verdünnungsformel c1V1 = c2V2 basieren alle auf sicherem Umgang mit Brüchen. Im Stationsalltag müssen Doppelbrüche (z. B. \u00b5g/kg/min) fehlerfrei vereinfacht werden, um Dosierungsfehler zu vermeiden.",
      selfTest: [
        {
          question: "Berechne: 5/6 + 7/9",
          options: ["29/18", "12/15", "12/54", "35/54", "1"],
          correctIndex: 0,
          explanation:
            "kgV(6, 9) = 18. 5/6 = 15/18 (mit 3 erweitert); 7/9 = 14/18 (mit 2 erweitert). 15/18 + 14/18 = 29/18 (= 1 11/18). Typischer Fehler: Nenner addieren (6+9=15) statt Hauptnenner verwenden \u2192 falsches Ergebnis 12/15.",
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
        {
          question:
            "Vereinfache den Doppelbruch: (3/8) / (9/4). Was ist das Ergebnis in gekürzter Form?",
          options: ["1/6", "3/2", "27/32", "12/72", "4/24"],
          correctIndex: 0,
          explanation:
            "Doppelbruch als Division: (3/8) \u00f7 (9/4) = (3/8) \u00d7 (4/9). Kreuzkürzen: 3 und 9 durch 3 \u2192 (1/8) \u00d7 (4/3). Dann 4 und 8 durch 4 \u2192 (1/2) \u00d7 (1/3) = 1/6. Merke: Hauptbruchstrich identifizieren, dann Kehrwert-Trick anwenden.",
          hints: [
            "Doppelbruch = oberer Bruch \u00f7 unterer Bruch.",
            "Kehrwert von 9/4 ist 4/9. Dann (3/8) \u00d7 (4/9) berechnen.",
          ],
          difficulty: 3,
          tags: ["doppelbruch", "kehrwert", "vereinfachung"],
        },
        {
          question:
            "Welche Aussagen über Bruch- und Prozentrechnung sind richtig?\n\n1. Beim Kürzen werden Zähler und Nenner durch denselben Faktor dividiert.\n2. 3/4 + 1/4 = 4/8.\n3. Der Kehrwert von 2/5 ist 5/2.\n4. 25 % entsprechen dem Bruch 1/4.\n5. (a/b) ÷ (c/d) = (a/b) × (c/d).",
          options: ["Nur 1 und 3", "Nur 2 und 5", "Nur 1, 3 und 4", "Nur 1, 4 und 5", "Alle"],
          correctIndex: 2,
          explanation:
            "Aussagen 1, 3 und 4 sind korrekt. Aussage 1: Kürzen = Zähler und Nenner durch den ggT teilen ✓. Aussage 2 ist falsch: 3/4 + 1/4 = 4/4 = 1, nicht 4/8 — bei gleichem Nenner werden nur die Zähler addiert, der Nenner bleibt. Aussage 3: Kehrwert = Zähler und Nenner tauschen ✓. Aussage 4: 25/100 = 1/4 ✓. Aussage 5 ist falsch: Division durch einen Bruch = Multiplikation mit dem Kehrwert: (a/b) ÷ (c/d) = (a/b) × (d/c), nicht × (c/d).",
          difficulty: 2,
          tags: ["typ-k", "bruchrechnung", "prozentrechnung"],
        },
      ],
      altfrage: {
        text: "Was ergibt (3/4) ÷ (2/5)?",
        options: [
          { id: "a", text: "6/20" },
          { id: "b", text: "15/8" },
          { id: "c", text: "8/15" },
          { id: "d", text: "5/8" },
          { id: "e", text: "3/10" },
        ],
        correctOptionId: "b",
        explanation:
          "Division durch einen Bruch = Multiplikation mit dem Kehrwert: (3/4) ÷ (2/5) = (3/4) × (5/2) = 15/8 = 1,875. Typischer Fehler: Zähler mit Zähler und Nenner mit Nenner multiplizieren.",
      },
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
      content: `Laborwerte, Studienauswertungen, Lösungskonzentrationen -- Prozentrechnung begegnet Medizinern täglich. Die gute Nachricht: Eine einzige Formel reicht für alle Aufgaben.

## Die eine Formel, die alles löst: P = G \u00d7 p/100

Prozent bedeutet \u201evon Hundert\u201c. Der Prozentsatz p gibt an, wie viele Teile von je 100 Teilen des Grundwerts G gemeint sind. Die Formel **P = G \u00d7 p/100** verbindet drei Größen:

| Gesucht | Formel | Klinisches Beispiel |
|---------|--------|---------------------|
| **Prozentwert P** | P = G \u00d7 p/100 | 15 % von 320 Patienten = 320 \u00d7 0,15 = **48 Patienten** |
| **Grundwert G** | G = P \u00d7 100/p | 56 Nebenwirkungen = 14 % der Studie \u2192 G = 56 \u00d7 100/14 = **400** |
| **Prozentsatz p** | p = P/G \u00d7 100 | 72 von 450 Patienten \u2192 p = 72/450 \u00d7 100 = **16 %** |

**Rechentrick für den Kopf:** 10 % = G \u00f7 10; 5 % = halbe 10 %; 1 % = G \u00f7 100. Damit lässt sich fast jeder Prozentsatz schnell zusammensetzen: 15 % = 10 % + 5 %, 23 % = 20 % + 3 %.

> **Merke:** P = G \u00d7 p/100 ist die Universalformel. Durch Umstellen erhältst du alle drei Grundfragen. Tipp: 10 % = G\u00f710, dann zusammenbauen.

---

{{DIAGRAM:percent-fractions}}

## Prozentuale Änderung vs. Prozentpunkte -- die häufigste Verwechslung

Dieser Unterschied wird im MedAT gezielt geprüft und führt in klinischen Studien regelmäßig zu Fehlinterpretationen.

**Absolute Änderung (Prozentpunkte):** Die schlichte Differenz zweier Prozentwerte.
Beispiel: Mortalität sinkt von 12 % auf 9 %. Absolute Änderung = 12 \u2212 9 = **3 Prozentpunkte**.

**Relative Änderung (prozentuale Änderung):** Die Differenz bezogen auf den **Ausgangswert**.
Formel: \u0394% = (Endwert \u2212 Anfangswert) / Anfangswert \u00d7 100 %
Beispiel: (9 \u2212 12) / 12 \u00d7 100 = **\u221225 %**. Die Mortalität ist relativ um 25 % gesunken.

| Kennzahl | Formel | Beispiel (12 % \u2192 9 %) | Aussage |
|----------|--------|---------------------------|---------|
| Prozentpunkte | Differenz | 12 \u2212 9 = 3 PP | Absolute Senkung |
| Relative Änderung | Diff/Ausgangswert | 3/12 = 25 % | Relative Senkung |

**Die Asymmetrie-Falle:** +50 % und danach \u221250 % ergibt **nicht** den Ausgangswert!
100 \u2192 +50 % \u2192 150 \u2192 \u221250 % \u2192 75. Der Grundwert ändert sich bei jeder Änderung, deshalb sind die Prozentwerte nicht symmetrisch.

> **Merke:** Prozentpunkte = schlichte Differenz. Prozentuale Änderung = Differenz/Ausgangswert \u00d7 100 %. Immer auf den **Ausgangswert** beziehen, nie auf den Endwert!

---

## Promille (\u2030) -- von Tausend

Promille (\u2030) = \u201evon Tausend\u201c. Es verhält sich zu Prozent wie ein Zehntel: 1 \u2030 = 0,1 % = 0,001.

| Umrechnung | Formel | Beispiel |
|------------|--------|----------|
| Promille \u2192 Dezimal | \u00f7 1000 | 5 \u2030 = 0,005 |
| Prozent \u2192 Promille | \u00d7 10 | 0,3 % = 3 \u2030 |
| Promille \u2192 Prozent | \u00f7 10 | 8 \u2030 = 0,8 % |

**Blutalkoholkonzentration (BAK) -- die klassische Promille-Anwendung:**

BAK 0,5 \u2030 = 0,5 g Alkohol pro 1000 mL Blut = 50 mg/dL.

**Widmark-Formel:** BAK = getrunkener Alkohol [g] / (Körpergewicht [kg] \u00d7 r) \u2212 Abbau
- Reduktionsfaktor r: Männer \u2248 0,7; Frauen \u2248 0,6
- Abbaurate: \u2248 0,15 \u2030/h (physiologisch relativ konstant)

**Rechenbeispiel:** 40 g Alkohol, Mann 80 kg.
- BAK = 40 / (80 \u00d7 0,7) = 40/56 = **0,71 \u2030**
- Nach 2 h: 0,71 \u2212 2 \u00d7 0,15 = **0,41 \u2030**

> **Merke:** 1 \u2030 = 0,1 % = 1/1000. BAK-Formel: Gramm Alkohol / (kg \u00d7 r). Abbau: ca. 0,15 \u2030 pro Stunde. Faktor r: Männer 0,7, Frauen 0,6.

---

## Klinische Kennzahlen als Prozentrechnung

In der Epidemiologie sind drei Kennzahlen zentral -- alle basieren auf Prozentrechnung:

| Kennzahl | Definition | Formel |
|----------|-----------|--------|
| **Prävalenz** | Anteil Erkrankter zu einem Zeitpunkt (Bestand) | Erkrankte / Population \u00d7 100 % |
| **Inzidenz** | Neuerkrankungen pro Zeiteinheit (Neuzugang) | Neuerkrankte / Risikopopulation \u00d7 100 % |
| **Mortalitätsrate** | Verstorbene pro Zeiteinheit | Verstorbene / Population \u00d7 100 % |

**Rechenbeispiel:** In einer Stadt mit 50.000 Einwohnern erkranken 200 Menschen in einem Jahr neu an Diabetes.
- Inzidenz = 200/50.000 \u00d7 100 = **0,4 %** = 4 \u2030 = 400 pro 100.000

**NaCl 0,9 % -- die wichtigste Lösungskonzentration:**
0,9 g NaCl pro 100 mL = 9 g/L = 9 mg/mL. Isotonisch zum Blutplasma. Die Prozentangabe bei Lösungen ist stets **Masse-Volumen-Prozent** (w/v): Gramm Wirkstoff pro 100 mL Lösung.

> **Merke:** Prävalenz = Bestand, Inzidenz = Neuzugang. NaCl 0,9 % = 0,9 g/100 mL = 9 g/L. Lösungsprozente sind immer w/v (Masse pro Volumen)!

---

## Rechenbeispiele für die Prüfung

**Beispiel 1 -- Grundwert gesucht:** 56 Patienten (= 14 %) entwickelten Nebenwirkungen. G = 56 \u00d7 100/14 = **400** Patienten. Probe: 14 % von 400 = 56 \u2713

**Beispiel 2 -- Prozentuale Änderung:** Blutdruck sinkt von 160 auf 120 mmHg. Relativ: (160 \u2212 120)/160 \u00d7 100 = **25 %** Senkung. Achtung: 40/120 = 33 % wäre falscher Bezugswert!

**Beispiel 3 -- Promille in Prozent:** 8 \u2030 Wirkstoff = 8/10 % = **0,8 %** = 0,8 g/100 mL = **8 g/L**

**Beispiel 4 -- Zusammengesetzt:** Inzidenz Grippe 3 % von 200.000 = 6.000 Neuerkrankte. Davon sterben 0,5 %: 6.000 \u00d7 0,005 = **30 Tote**. Mortalität: 30/200.000 = **0,015 %** = 0,15 \u2030

**Prüfungsrelevante Zahlen:**
- NaCl 0,9 % = 9 g/L = 9 mg/mL (isotonisch)
- Glucose 5 % = 50 g/L
- Hämatokrit: Männer 42--50 %, Frauen 37--45 %
- SpO\u2082 normal: 95--100 %
- BAK-Abbau: ca. 0,15 \u2030/h
- Widmark r: Männer 0,7; Frauen 0,6`,
      lernziele: [
        "Die drei Grundfragen der Prozentrechnung sicher und schnell lösen",
        "Absolute und relative Änderungen unterscheiden und korrekt berechnen",
        "Zwischen Prozent und Promille umrechnen",
        "Klinische Kennzahlen (Prävalenz, Inzidenz, Mortalität) als Prozentrechnung interpretieren",
      ],
      merksätze: [
        "P = G \u00d7 p/100 -- eine Formel, drei Grundfragen durch Umstellen.",
        "Prozentpunkte = absolute Differenz; prozentuale Änderung = Differenz/Ausgangswert \u00d7 100 %.",
        "Asymmetrie-Falle: +50 % und dann \u221250 % ergibt 75, nicht 100! Grundwert ändert sich.",
        "1 \u2030 = 0,1 % = 1/1000. Promille zu Prozent: durch 10 teilen.",
        "NaCl 0,9 % = 0,9 g/100 mL = 9 g/L = 9 mg/mL (isotonisch).",
        "BAK: Widmark-Formel mit r = 0,7 (Männer) / 0,6 (Frauen). Abbau: 0,15 \u2030/h.",
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
        {
          question:
            "In einer Studie sinkt die Komplikationsrate von 20 % auf 15 %. Wie groß ist die relative Risikoreduktion (RRR)?",
          options: ["25 %", "5 Prozentpunkte", "75 %", "33 %", "15 %"],
          correctIndex: 0,
          explanation:
            "RRR = (Ausgangsrisiko \u2212 Endrisiko) / Ausgangsrisiko \u00d7 100 = (20 \u2212 15) / 20 \u00d7 100 = 5/20 \u00d7 100 = 25 %. Die absolute Risikoreduktion (ARR) beträgt 5 Prozentpunkte. Häufiger Prüfungsfehler: ARR und RRR verwechseln.",
          hints: ["RRR = Differenz / Ausgangswert \u00d7 100.", "(20 \u2212 15) / 20 = 5/20 = ?"],
          difficulty: 3,
          tags: ["prozentrechnung", "rrr", "studienauswertung"],
        },
        {
          question: "Welche Aussage über Prozentrechnung ist FALSCH?",
          options: [
            "+50 % und danach −50 % ergibt den Ausgangswert",
            "16 % von 450 = 72",
            "1 ‰ = 0,1 %",
            "Die ARR (absolute Risikoreduktion) wird in Prozentpunkten angegeben",
            "NaCl 0,9 % bedeutet 0,9 g pro 100 mL",
          ],
          correctIndex: 0,
          explanation:
            "Aussage A ist falsch: 100 → +50 % → 150 → −50 % → 75, nicht 100. Das ist die Asymmetrie-Falle der Prozentrechnung — der Grundwert ändert sich nach der ersten Änderung, und 50 % von 150 sind 75, nicht 50. Alle anderen Aussagen stimmen: 72/450 = 16/100 = 16 % (B), 1 ‰ = 0,001 = 0,1 % (C), ARR ist die absolute Differenz zweier Raten in Prozentpunkten (D), 0,9 % (w/v) = 0,9 g/100 mL (E).",
          difficulty: 2,
          tags: ["falsch-aussage", "prozentrechnung", "asymmetrie"],
        },
      ],
      altfrage: {
        text: "Ein Preis steigt um 25 % und fällt danach um 20 %. Wie verhält sich der Endpreis zum Ausgangspreis?",
        options: [
          { id: "a", text: "Er ist gleich geblieben" },
          { id: "b", text: "Er ist um 5 % gestiegen" },
          { id: "c", text: "Er ist um 5 % gesunken" },
          { id: "d", text: "Er ist um 1 % gestiegen" },
          { id: "e", text: "Er ist um 1 % gesunken" },
        ],
        correctOptionId: "a",
        explanation:
          "100 → +25 % → 125 → −20 % → 125 × 0,8 = 100. Der Endpreis entspricht dem Ausgangspreis. Achtung: +25 % und −25 % ergeben NICHT den Ausgangswert (100 → 125 → 93,75).",
      },
      diagram: "percent-fractions",
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
      content: `Ob Medikamentendosierung (mg/kg), Infusionsrate (mL/h) oder Verdünnung -- fast jede klinische Berechnung lässt sich auf einen Dreisatz zurückführen.

## Der Dreisatz -- das Schweizer Taschenmesser der klinischen Mathematik

Die zentrale Frage: Steigen beide Größen **gemeinsam** (direkt) oder **gegenläufig** (indirekt)?

---

## Direkter Dreisatz (proportional)

Zwei Größen sind **direkt proportional**, wenn sie im selben Verhältnis steigen und fallen. Doppelt so viel von A \u2192 doppelt so viel von B. Der **Quotient** A/B bleibt konstant.

**3-Schritt-Schema:**

| Schritt | Aktion | Beispiel: 50 kg \u2259 100 mg |
|---------|--------|------------------------------|
| 1. Gegeben | Bekannte Zuordnung | 50 kg \u2259 100 mg |
| 2. Auf 1 | Durch bekannte Menge teilen | 1 kg \u2259 2 mg |
| 3. Hochrechnen | Mit gesuchter Menge multiplizieren | 70 kg \u2259 **140 mg** |

**Formel (Kreuzprodukt):** a/b = c/x \u2192 **x = b \u00d7 c / a**

**Rechenbeispiel:** 250 mL Infusion enthalten 500 mg Wirkstoff. Wie viel mg in 75 mL?
- 1 mL \u2259 500/250 = 2 mg
- 75 mL \u2259 75 \u00d7 2 = **150 mg**

**Erkennungsmerkmal:** Mehr von A \u2192 mehr von B? Dann direkt! Mehr Gewicht \u2192 mehr Dosis. Mehr Volumen \u2192 mehr Wirkstoff.

> **Merke:** Direkter Dreisatz: Mehr ergibt mehr. Quotient A/B = konstant. Schema: Gegeben \u2192 auf 1 \u2192 hochrechnen.

---

{{DIAGRAM:proportional-relationship}}

## Indirekter Dreisatz (antiproportional)

**Erkennungsfrage:** Wenn A größer wird, wird B **kleiner**? \u2192 Indirekter Dreisatz!

| Situation | Mehr von A \u2192 | Konstantbleibendes Produkt |
|-----------|------------------|---------------------------|
| Arbeiter und Zeit | weniger Zeit | Gesamtarbeit = Arbeiter \u00d7 Zeit |
| Konzentration und Volumen | kleineres Volumen | Stoffmenge = c \u00d7 V |
| Geschwindigkeit und Fahrzeit | kürzere Zeit | Strecke = v \u00d7 t |

**Formel:** a \u00d7 b = c \u00d7 x \u2192 **x = a \u00d7 b / c** (Produkt bleibt konstant)

**Rechenbeispiel:** 6 Pflegekräfte brauchen 4 h. Mit 8 Pflegekräften?
- Gesamtarbeit = 6 \u00d7 4 = 24 Pflegestunden
- 8 Pflegekräfte: 24 / 8 = **3 h**

**Klinisch -- Verdünnungsformel:** c\u2081 \u00d7 V\u2081 = c\u2082 \u00d7 V\u2082. Stammlösung 20 mg/mL, gesucht: V\u2081 für 100 mL mit 5 mg/mL.
V\u2081 = (5 \u00d7 100) / 20 = **25 mL** Stammlösung + 75 mL Lösungsmittel.

> **Merke:** Indirekter Dreisatz: Mehr ergibt weniger. Produkt A \u00d7 B = konstant. Verdünnungsformel c\u2081V\u2081 = c\u2082V\u2082 ist das klinische Paradebeispiel!

---

{{DIAGRAM:equation-balance}}

## Zusammengesetzter Dreisatz

Manchmal ändern sich **zwei Größen gleichzeitig**. Der zusammengesetzte Dreisatz löst dies schrittweise: Erst eine Variable (direkt oder indirekt), dann die andere.

**Rechenbeispiel:** 5 Arbeiter brauchen 8 Tage für 200 m\u00b2. Wie viele Tage brauchen 4 Arbeiter für 300 m\u00b2?

| Schritt | Änderung | Typ | Rechnung | Ergebnis |
|---------|----------|-----|----------|----------|
| 1 | 5 \u2192 4 Arbeiter | indirekt | 8 \u00d7 5/4 | 10 Tage (für 200 m\u00b2) |
| 2 | 200 \u2192 300 m\u00b2 | direkt | 10 \u00d7 300/200 | **15 Tage** |

**Klinisch -- Infusionsrate (3 Schritte in einem):** Propofol 6 mg/kg/h, Patient 80 kg, Lösung 10 mg/mL.
- Dosis/h = 6 \u00d7 80 = 480 mg/h (direkt proportional zum Gewicht)
- Volumen/h = 480 / 10 = **48 mL/h** (indirekt proportional zur Konzentration)
- Tropfrate bei 20 gtt/mL: 48 \u00d7 20 / 60 = **16 gtt/min**

> **Merke:** Zusammengesetzter Dreisatz: Schrittweise lösen. Bei jedem Schritt prüfen: direkt oder indirekt? Infusionsraten sind immer zusammengesetzte Dreisätze!

---

## Verhältnisse, Kreuzprodukt und Mischungskreuz

**Kreuzprodukt-Eigenschaft:** Wenn a/b = c/d, dann a \u00d7 d = b \u00d7 c. Unverzichtbar für Proportionsgleichungen.

**Rechenbeispiel:** x:4 = 9:12. Kreuzprodukt: 12x = 36, also x = **3**.

**Mischungskreuz** (Andreaskreuz) -- für Mischungsaufgaben:

Glucose 5 % und Glucose 20 % sollen zu 500 mL Glucose 8 % gemischt werden:
- Verhältnis V\u2085:V\u2082\u2080 = (20 \u2212 8):(8 \u2212 5) = 12:3 = **4:1**
- 5 Teile gesamt = 500 mL \u2192 1 Teil = 100 mL
- V\u2085 = 400 mL, V\u2082\u2080 = 100 mL
- Probe: (400 \u00d7 50 + 100 \u00d7 200) / 500 = 40.000 / 500 = 80 mg/mL = 8 % \u2713

> **Merke:** Kreuzprodukt: a/b = c/d \u21d4 a\u00d7d = b\u00d7c. Mischungskreuz: Differenzen zur Zielkonzentration ergeben das Volumenverhältnis.

---

## Rechenbeispiele für die Prüfung

**Beispiel 1 -- Dosierung:** 3 mg/kg, Patient 85 kg. Dosis = 3 \u00d7 85 = **255 mg**. Medikament als 50 mg/mL: V = 255/50 = **5,1 mL**

**Beispiel 2 -- Heparin-Infusion:** 25.000 IE in 250 mL NaCl = 100 IE/mL. Verordnet: 1200 IE/h. Rate = 1200/100 = **12 mL/h**

**Beispiel 3 -- Zeitdruck:** Antibiotikum 100 mL soll über 4 h laufen: 25 mL/h. Nur 2 h verfügbar: 100/2 = **50 mL/h** (indirekt: halbe Zeit = doppelte Rate)

**Beispiel 4 -- Verdünnung:** Serum:Puffer = 1:9 (Verdünnung 1:10). Für 5 mL gesamt: Serum = 5/10 = **0,5 mL**; Puffer = **4,5 mL**

**Prüfungsrelevante Entscheidungshilfe:**

| Frage | Direkt | Indirekt |
|-------|--------|----------|
| Mehr Gewicht \u2192 mehr Dosis? | \u2713 | |
| Höhere Konzentration \u2192 kleineres Volumen? | | \u2713 |
| Mehr Tabletten \u2192 mehr Wirkstoff? | \u2713 | |
| Schnellere Rate \u2192 kürzere Dauer? | | \u2713 |
| Mehr Fläche \u2192 mehr Material? | \u2713 | |`,
      lernziele: [
        "Den direkten Dreisatz auf Dosierungsaufgaben anwenden (mg/kg)",
        "Den indirekten Dreisatz erkennen und für Verdünnungen einsetzen",
        "Direkte und indirekte Proportionalität sicher unterscheiden",
        "Zusammengesetzte Dreisätze schrittweise lösen (Infusionsraten)",
      ],
      merksätze: [
        "Direkter Dreisatz: Mehr \u2192 mehr. Quotient A/B = konstant. Auf 1 zurückführen, dann hochrechnen.",
        "Indirekter Dreisatz: Mehr \u2192 weniger. Produkt A\u00d7B = konstant. Verdünnungsformel c\u2081V\u2081 = c\u2082V\u2082.",
        "Erkennungsfrage: Verdoppelt sich A, verdoppelt sich B (direkt) oder halbiert es sich (indirekt)?",
        "Zusammengesetzter Dreisatz: Schrittweise lösen, bei jedem Schritt direkt/indirekt prüfen.",
        "Kreuzprodukt: a/b = c/d \u21d4 a\u00d7d = b\u00d7c. Mischungskreuz: Differenzen zur Zielkonzentration.",
        "Infusionsrate = (mg/kg/h \u00d7 kg) / Konzentration = mL/h (klassischer zusammengesetzter Dreisatz).",
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
        {
          question:
            "Noradrenalin-Perfusor: 4 mg in 50 mL NaCl, Verordnung 0,1 \u00b5g/kg/min, Patient 70 kg. Wie hoch ist die Laufrate in mL/h?",
          options: ["5,25 mL/h", "0,525 mL/h", "52,5 mL/h", "8,4 mL/h", "0,0875 mL/h"],
          correctIndex: 0,
          explanation:
            "Zusammengesetzter Dreisatz: (1) Dosis/min = 0,1 \u00d7 70 = 7 \u00b5g/min. (2) Konzentration = 4 mg/50 mL = 0,08 mg/mL = 80 \u00b5g/mL. (3) Rate = 7/80 = 0,0875 mL/min. (4) In mL/h: 0,0875 \u00d7 60 = 5,25 mL/h. Drei Dreisätze hintereinander: Gewicht (direkt), Konzentration (indirekt), Zeitumrechnung (direkt).",
          hints: [
            "Erst \u00b5g/min berechnen: \u00b5g/kg/min \u00d7 kg.",
            "Dann durch Konzentration (\u00b5g/mL) teilen und \u00d7 60 für mL/h.",
          ],
          difficulty: 3,
          tags: ["dreisatz", "zusammengesetzt", "perfusor", "klinisch"],
        },
      ],
      altfrage: {
        text: "Ein Medikament wird mit 10 mg/kg dosiert. Wie viel mg erhält ein 60 kg schwerer Patient?",
        options: [
          { id: "a", text: "60 mg" },
          { id: "b", text: "600 mg" },
          { id: "c", text: "6 mg" },
          { id: "d", text: "6000 mg" },
          { id: "e", text: "100 mg" },
        ],
        correctOptionId: "b",
        explanation:
          "Direkter Dreisatz: 10 mg/kg × 60 kg = 600 mg. Die Dosis ist direkt proportional zum Körpergewicht.",
      },
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
      content: `Die Verwechslung von mg und \u00b5g (Faktor 1000) gehört weltweit zu den häufigsten tödlichen Medikationsfehlern. Wer SI-Präfixe und die Kettenmethode beherrscht, eliminiert diese Fehlerquelle vollständig.

## Faktor-1000-Fehler töten -- warum Einheiten lebenswichtig sind

---

## SI-Präfixe: Die Zehnerpotenz-Leiter

Das SI-System (Internationales Einheitensystem) verwendet **Präfixe**, um Vielfache und Bruchteile auszudrücken. Zwischen **benachbarten** Präfixen liegen immer **3 Zehnerpotenzen** (Faktor 1000).

| Präfix | Symbol | Faktor | Klinisches Beispiel |
|---------|--------|--------|---------------------|
| Mega | M | 10\u2076 | 1 MHz = 10\u2076 Hz (Ultraschall) |
| Kilo | k | 10\u00b3 | 1 kg = 1000 g |
| (Basis) | -- | 10\u2070 | 1 g, 1 m, 1 L |
| Milli | m | 10\u207b\u00b3 | 1 mg = 0,001 g (Tabletten) |
| Mikro | \u00b5 | 10\u207b\u2076 | 1 \u00b5g = 0,001 mg (Schilddrüse: 150 \u00b5g L-Thyroxin) |
| Nano | n | 10\u207b\u2079 | 1 nm = 10\u207b\u2079 m (Virusgröße) |
| Piko | p | 10\u207b\u00b9\u00b2 | 1 pg = 10\u207b\u00b9\u00b2 g (Vitamin B12: 200--900 pg/mL) |

**Eselsbrücke (abwärts):** **k**ein **M**ensch **m**ag **\u00b5**berhaupt **n**asse **p**ommes

**Umrechnungsregeln:**
- Von groß nach klein (mg \u2192 \u00b5g): **multiplizieren** mit 1000
- Von klein nach groß (\u00b5g \u2192 mg): **dividieren** durch 1000
- Dreierschritte zählen: mg \u2192 \u00b5g = 1 Schritt (\u00d710\u00b3), mg \u2192 ng = 2 Schritte (\u00d710\u2076)

> **Merke:** Zwischen Nachbar-Präfixen: Faktor 1000. 1 mg = 1000 \u00b5g = 1.000.000 ng. Groß \u2192 klein = multiplizieren. Klein \u2192 groß = dividieren.

---

{{DIAGRAM:si-prefix-ladder}}

## Die Kettenmethode (Dimensional Analysis)

Die Kettenmethode ist die **fehlersicherste** Umrechnungsmethode, weil sich falsche Richtungen sofort an den Einheiten zeigen.

**3-Schritt-Verfahren:**
1. Ausgangswert **mit Einheit** aufschreiben
2. Umrechnungsfaktoren als **Brüche** anhängen, sodass sich ungewünschte Einheiten **kürzen**
3. Multiplizieren und Einheiten kontrollieren

**Rechenbeispiel 1 (einfach):** 0,08 mL/min \u2192 mL/h
- 0,08 mL/min \u00d7 (60 min / 1 h) = 0,08 \u00d7 60 = **4,8 mL/h**
- Die Einheit \u201emin\u201c kürzt sich oben und unten weg

**Rechenbeispiel 2 (doppelt):** 120 mL/min \u2192 L/h
- 120 mL/min \u00d7 (60 min / 1 h) \u00d7 (1 L / 1000 mL) = 120 \u00d7 60 / 1000 = **7,2 L/h**
- Schnellformel: mL/min \u00d7 0,06 = L/h (weil 60/1000 = 0,06)

> **Merke:** Kettenmethode: Umrechnungsfaktoren als Brüche schreiben, ungewollte Einheiten kürzen sich weg. Nie raten, ob multiplizieren oder dividieren -- die Einheiten zeigen es!

---

{{DIAGRAM:proportional-relationship}}

## Klinisch wichtige Umrechnungen

### mg \u2194 \u00b5g \u2194 ng -- die häufigste Umrechnung

| Von | Nach | Faktor | Beispiel |
|-----|------|--------|----------|
| mg | \u00b5g | \u00d7 1000 | 0,5 mg = 500 \u00b5g |
| \u00b5g | mg | \u00f7 1000 | 250 \u00b5g = 0,25 mg |
| \u00b5g | ng | \u00d7 1000 | 3 \u00b5g = 3000 ng |
| mg | ng | \u00d7 10\u2076 | 1 mg = 1.000.000 ng |

**Rechenbeispiel:** Noradrenalin 8 \u00b5g/min \u2192 mg/h
- 8 \u00b5g/min \u00d7 (1 mg / 1000 \u00b5g) \u00d7 (60 min / 1 h) = 8 \u00d7 60 / 1000 = **0,48 mg/h**

---

### mmol/L \u2194 mg/dL -- die Glucose-Umrechnung

Die Umrechnung hängt von der **Molmasse** (M, auch: molare Masse) ab: 1 mmol wiegt M mg. Da 1 L = 10 dL:

**Allgemein:** c [mg/dL] = c [mmol/L] \u00d7 M [g/mol] / 10

**Glucose (M = 180 g/mol):** c [mg/dL] = c [mmol/L] \u00d7 **18**

| Richtung | Formel | Beispiel |
|----------|--------|----------|
| mmol/L \u2192 mg/dL | \u00d7 18 | 5,5 mmol/L \u00d7 18 = **99 mg/dL** (normal nüchtern) |
| mg/dL \u2192 mmol/L | \u00f7 18 | 180 mg/dL \u00f7 18 = **10,0 mmol/L** (Diabetes!) |

**Weitere wichtige Umrechnungsfaktoren:**
- Cholesterin (M = 387): mmol/L \u00d7 38,7 = mg/dL
- Kreatinin (M = 113): \u00b5mol/L \u00d7 0,0113 = mg/dL

> **Merke:** Glucose: mmol/L \u00d7 18 = mg/dL. Faktor 18 auswendig lernen! Normalwert nüchtern: 70--100 mg/dL = 3,9--5,6 mmol/L.

---

### mL/min \u2194 L/h -- GFR und Infusionsraten

GFR (glomeruläre Filtrationsrate) und Clearance-Werte werden in mL/min angegeben, Infusionsraten in mL/h oder L/h.

- mL/min \u00d7 60 = mL/h (min \u2192 h)
- mL/h \u00f7 1000 = L/h (mL \u2192 L)
- **Schnellformel:** mL/min \u00d7 0,06 = L/h

**Rechenbeispiel:** GFR 90 mL/min = 90 \u00d7 60 = 5400 mL/h = **5,4 L/h**. Die Nieren filtern also über 5 Liter Blutplasma pro Stunde!

---

## Größenordnungen in der Medizin -- der Plausibilitätscheck

Diese Werte sollte man auswendig kennen, um Rechenfehler sofort zu erkennen:

| Objekt / Wert | Größenordnung | Klinische Bedeutung |
|----------------|-----------------|---------------------|
| Erythrozyt | 7--8 \u00b5m | Mikrozytose < 6 \u00b5m |
| Bakterium | 1--5 \u00b5m | 10\u00d7 größer als Virus |
| Virus | 20--300 nm | SARS-CoV-2 \u2248 100 nm |
| Glucose nüchtern | 5 mmol/L \u2248 90 mg/dL | > 126 mg/dL = Diabetes |
| Natrium | 135--145 mmol/L | Hyponatriämie < 135 |
| Hämoglobin | 12--17 g/dL | Anämie < 12 g/dL (Frauen) |
| Blutvolumen | 5 L \u2248 70 mL/kg | Schockindex bei Verlust |
| GFR | 90--120 mL/min | < 60 = chronische Niereninsuffizienz |

> **Merke:** Glucose \u2248 5 mmol/L \u2248 90 mg/dL; GFR \u2248 100 mL/min; Erythrozyt \u2248 8 \u00b5m; Virus \u2248 100 nm. Wenn dein Ergebnis um Größenordnungen abweicht, rechne nochmal!

---

## Rechenbeispiele für die Prüfung

**Beispiel 1 -- Dopamin-Perfusor:** 5 \u00b5g/kg/min, Patient 70 kg, Lösung 200 mg/50 mL
- Dosis = 5 \u00d7 70 = 350 \u00b5g/min
- Konzentration = 200/50 = 4 mg/mL = 4000 \u00b5g/mL
- Rate = 350/4000 = 0,0875 mL/min \u00d7 60 = **5,25 mL/h**

**Beispiel 2 -- Glucose:** 11,1 mmol/L \u00d7 18 = **200 mg/dL** (weit über 126 \u2192 Diabetes)

**Beispiel 3 -- Clearance:** 1,4 mL/s \u00d7 60 = **84 mL/min** \u00d7 60/1000 = **5,04 L/h**

**Beispiel 4 -- Präfixsprung:** 0,25 mg = 0,25 \u00d7 1000 = **250 \u00b5g**. Rückwärts: 250 \u00f7 1000 = 0,25 mg

**Prüfungsrelevante Schnellformeln:**
- Glucose: \u00d7 18 (mmol/L \u2192 mg/dL)
- mL/min \u2192 L/h: \u00d7 0,06
- \u00b5g/min \u2192 mg/h: \u00d7 60/1000 = \u00d7 0,06
- SI-Nachbarschritt: immer Faktor 1000`,
      lernziele: [
        "SI-Präfixe (nano bis mega) und ihre Zehnerpotenzen sicher beherrschen",
        "Die Kettenmethode für zusammengesetzte Einheitenumrechnungen anwenden",
        "Glucose zwischen mmol/L und mg/dL umrechnen (Faktor 18)",
        "Klinische Größenordnungen abschätzen und als Plausibilitätscheck nutzen",
      ],
      merksätze: [
        "Zwischen Nachbar-Präfixen (mg \u2192 \u00b5g \u2192 ng) liegen immer 3 Zehnerpotenzen = Faktor 1000.",
        "Kettenmethode: Einheiten als Brüche, ungewollte kürzen sich weg -- nie raten!",
        "Glucose: mmol/L \u00d7 18 = mg/dL. Normalwert nüchtern: 70--100 mg/dL = 3,9--5,6 mmol/L.",
        "Groß \u2192 klein = multiplizieren (mg \u2192 \u00b5g: \u00d71000). Klein \u2192 groß = dividieren.",
        "Schnellformeln: mL/min \u00d7 0,06 = L/h. \u00b5g/min \u00d7 0,06 = mg/h.",
        "Faktor-1000-Fehler (mg vs. \u00b5g) gehören zu den häufigsten tödlichen Medikationsfehlern.",
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
            "Dopamin-Perfusor: Dosierung 5 \u00b5g/kg/min, Patient 80 kg, L\u00f6sung 250 mg in 50 mL. Welche Laufrate in mL/h?",
          options: ["4,8 mL/h", "24 mL/h", "0,08 mL/h", "48 mL/h", "12 mL/h"],
          correctIndex: 0,
          explanation:
            "Kettenmethode: Dosis = 5 \u00d7 80 = 400 \u00b5g/min. Konzentration = 250 mg / 50 mL = 5 mg/mL = 5000 \u00b5g/mL. Rate = 400 / 5000 = 0,08 mL/min. In mL/h: 0,08 \u00d7 60 = 4,8 mL/h.",
          hints: [
            "Erst Gesamtdosis pro Minute: \u00b5g/kg/min \u00d7 kg = \u00b5g/min.",
            "Dann durch Konzentration (\u00b5g/mL) teilen und \u00d760 f\u00fcr mL/h.",
          ],
          difficulty: 3,
          tags: ["einheiten", "kettenmethode", "klinisch", "infusion"],
        },
        {
          question:
            "Ein Patient hat einen Glucose-Wert von 250 mg/dL. Wie viel mmol/L entspricht das? (Molmasse Glucose = 180 g/mol)",
          options: ["13,9 mmol/L", "4500 mmol/L", "1,39 mmol/L", "45 mmol/L", "250 mmol/L"],
          correctIndex: 0,
          explanation:
            "Rückrechnung: mmol/L = mg/dL \u00f7 18 = 250 / 18 = 13,9 mmol/L. Normalwert nüchtern: 3,9--5,6 mmol/L. Wert von 13,9 mmol/L ist massiv erhöht und spricht für eine entgleiste diabetische Stoffwechsellage.",
          hints: [
            "Glucose: mg/dL \u00f7 18 = mmol/L (umgekehrte Richtung!).",
            "250 / 18 \u2248 250 / 20 + Korrektur = ?",
          ],
          difficulty: 2,
          tags: ["glucose", "umrechnung", "rückrechnung"],
        },
      ],
      altfrage: {
        text: "Wie viele Mikrogramm (µg) sind 0,5 mg?",
        options: [
          { id: "a", text: "5 µg" },
          { id: "b", text: "50 µg" },
          { id: "c", text: "500 µg" },
          { id: "d", text: "5000 µg" },
          { id: "e", text: "0,5 µg" },
        ],
        correctOptionId: "c",
        explanation:
          "1 mg = 1000 µg, also 0,5 mg = 0,5 × 1000 = 500 µg. Diese Umrechnung ist bei Perfusor-Dosierungen kritisch -- ein Faktor-1000-Fehler kann lebensbedrohlich sein.",
      },
    },
  ],
};
