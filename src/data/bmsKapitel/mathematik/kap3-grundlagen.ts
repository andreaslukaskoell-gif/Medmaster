import type { Kapitel } from "../types";

export const mathKapGrundlagen: Kapitel = {
  id: "mathe-kap3",
  title: "Prozentrechnung, Dreisatz & Brueche",
  subject: "mathematik",
  icon: "\ud83d\udcca",
  estimatedTime: "90 min",
  unterkapitel: [
    {
      id: "ma-3-01",
      diagram: "percent-fractions",
      title: "Bruchrechnung & Termumformung",
      stichworte: [
        "Bruchrechnung",
        "Erweitern",
        "Kuerzen",
        "Kehrwert",
        "Doppelbruch",
        "Betrag",
        "Hauptnenner",
        "kgV",
        "Verduennungsreihe",
        "Konzentrationsbruch",
        "Termumformung",
        "Bruchdivision",
      ],
      content: `## Einleitung

Wie verduennt man eine Stammlosung im Verhaeltnis 1:4? Wie rechnet man 3/8 + 5/12 im Kopf? Im MedAT sind Brueche allgegenwaertig -- ob bei Konzentrationsangaben, Verduennungen oder Dosierungsberechnungen. Wer sicher kuerzt, erweitert und den Kehrwert-Trick beherrscht, spart kostbare Pruefungsminuten.

**In diesem Kapitel lernst du:**
- wie du Brueche erweiterst und kuerzt, um sie vergleichbar zu machen
- wie Addition, Subtraktion, Multiplikation und Division von Bruechen funktionieren
- wie du Doppelbrueche systematisch vereinfachst
- wann der Kehrwert zum Einsatz kommt und was der Betrag eines Bruchs bedeutet
- wie Brueche in klinischen Verduennungsreihen und Konzentrationsberechnungen auftreten

---

{{DIAGRAM:percent-fractions}}

{{DIAGRAM:geometric-shapes}}

## Grundbegriffe

**Idee:** Ein Bruch a/b beschreibt den Quotienten aus Zaehler a und Nenner b (b \u2260 0). Jeder Bruch repraesentiert eine rationale Zahl. Zwei Brueche sind **gleichwertig**, wenn sie sich durch Erweitern oder Kuerzen ineinander ueberfuehren lassen: 2/4 = 1/2.

**Verfahren:**
- **Kuerzen:** Zaehler und Nenner durch denselben Faktor (ggT) dividieren. Beispiel: 12/18 \u2192 (12\u00f76)/(18\u00f76) = 2/3.
- **Erweitern:** Zaehler und Nenner mit demselben Faktor multiplizieren. Beispiel: 2/5 = 8/20 (mit 4 erweitert).
- **Hauptnenner finden:** kgV der Nenner berechnen, dann alle Brueche auf diesen Nenner erweitern.

> **Merke:** Kuerzen und Erweitern aendern den **Wert** des Bruchs nicht -- nur seine **Darstellung**. Immer so weit wie moeglich kuerzen (durch den ggT), bevor du weiterrechnest.

---

## Addition und Subtraktion von Bruechen

**Bisher haben wir gesehen:** Brueche beschreiben Anteile. **Um Anteile zu addieren oder subtrahieren,** muessen sie denselben Nenner haben -- sonst vergleichst du Aepfel mit Birnen.

**Verfahren:**
1. Hauptnenner (kgV der Nenner) bestimmen
2. Jeden Bruch auf den Hauptnenner erweitern
3. Zaehler addieren/subtrahieren, Nenner beibehalten
4. Ergebnis kuerzen

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

> **Merke:** Brueche addieren/subtrahieren: **Erst gleichnamig machen** (kgV der Nenner), dann nur die Zaehler verrechnen. Nie die Nenner addieren!

---

## Multiplikation und Division von Bruechen

**Um Brueche zu multiplizieren,** multiplizierst du Zaehler mit Zaehler und Nenner mit Nenner. Vor dem Rechnen kreuzweise kuerzen spart Arbeit.

**Verfahren Multiplikation:** (a/b) \u00d7 (c/d) = (a\u00d7c) / (b\u00d7d). Tipp: Vorher a mit d und c mit b kuerzen (Kreuzkuerzen).

**Rechenbeispiel:** 3/8 \u00d7 4/9.
- Kreuzkuerzen: 3 und 9 durch 3 \u2192 1/8 \u00d7 4/3. Dann 4 und 8 durch 4 \u2192 1/2 \u00d7 1/3 = **1/6**.

**Verfahren Division -- der Kehrwert-Trick:** (a/b) \u00f7 (c/d) = (a/b) \u00d7 (d/c). Man **dividiert nie durch einen Bruch** -- man multipliziert mit dem **Kehrwert**.

**Rechenbeispiel:** (5/6) \u00f7 (15/8).
- Kehrwert von 15/8 ist 8/15.
- (5/6) \u00d7 (8/15). Kreuzkuerzen: 5 und 15 durch 5 \u2192 1/6 \u00d7 8/3 = 8/18 = **4/9**.

> **Merke:** Division durch einen Bruch = Multiplikation mit dem Kehrwert. Kehrwert von a/b ist b/a. Vor der Multiplikation immer kreuzweise kuerzen!

---

## Doppelbrueche vereinfachen

**Idee:** Ein Doppelbruch ist ein Bruch, in dessen Zaehler oder Nenner (oder beiden) wiederum ein Bruch steht. Die Strategie: Den Hauptbruchstrich identifizieren und als Division lesen.

**Verfahren:**
1. Hauptbruchstrich identifizieren: (a/b) / (c/d) = oberer Bruch \u00f7 unterer Bruch
2. Als Division schreiben und mit Kehrwert multiplizieren

**Rechenbeispiel:** (2/3) / (4/5) = (2/3) \u00d7 (5/4) = 10/12 = **5/6**.

**Rechenbeispiel (klinisch):** Eine Loesung hat die Konzentration (0,5 mg) / (1/4 mL). Wie viel mg/mL? Doppelbruch: 0,5 / (1/4) = 0,5 \u00d7 4 = **2 mg/mL**.

**Kehrwert und Betrag:**
- Der **Kehrwert** von a/b ist b/a. Wichtig: (a/b)\u207b\u00b9 = b/a (Zaehler und Nenner tauschen).
- Der **Betrag** |a/b| = |a|/|b| ist immer \u2265 0. Klinisch relevant bei Temperaturabweichungen: |37,0 \u2212 38,5| = 1,5 \u00b0C.

> **Merke:** Doppelbruch = oberer Bruch \u00f7 unterer Bruch = oberer Bruch \u00d7 Kehrwert des unteren. Kehrwert: Zaehler und Nenner tauschen. |x| = Abstand zu Null.

---

## Klinische Anwendung: Verduennungsreihen und Konzentrationsbrueche

**Verduennungsverhaeltnis 1:n** bedeutet: 1 Teil Substanz + (n\u22121) Teile Loesungsmittel = n Teile gesamt. Die Konzentration sinkt auf 1/n des Originals.

**Rechenbeispiel:** Serum 1:8 verduennen. 1 mL Serum + 7 mL Puffer = 8 mL gesamt. Konzentration = c_original \u00d7 1/8. Gemessener Titer: 32 AU/mL \u2192 Original: 32 \u00d7 8 = **256 AU/mL**.

**Serienverduennung:** Drei aufeinanderfolgende 1:2-Verduennungen: Gesamtfaktor = 1/2 \u00d7 1/2 \u00d7 1/2 = 1/8 = 1:8.

**Konzentrationsbruch:** NaCl 0,9 % = 0,9 g NaCl / 100 mL = 9 mg/mL = 9 g/L. Umrechnung: Bruch erweitern/kuerzen je nach gewuenschter Einheit.

## Rechenbeispiele

**Beispiel 1 -- Bruchgleichung:** x/3 + x/4 = 7. Hauptnenner 12: 4x/12 + 3x/12 = 7. Also 7x/12 = 7 \u2192 7x = 84 \u2192 **x = 12**. Probe: 12/3 + 12/4 = 4 + 3 = 7 \u2713.

**Beispiel 2 -- Doppelbruch (Dosierung):** Ein Medikament liegt als 2,5 mg / (0,5 mL) vor. Dosis: 7,5 mg. Volumen = 7,5 / (2,5/0,5) = 7,5 / 5 = **1,5 mL**. Oder: Konzentration = 2,5/0,5 = 5 mg/mL, dann V = 7,5/5 = 1,5 mL.

**Beispiel 3 -- Kreuzweise kuerzen:** 14/25 \u00d7 15/28. Kuerze 14 und 28 durch 14 (1 und 2); kuerze 15 und 25 durch 5 (3 und 5). Ergebnis: (1\u00d73)/(5\u00d72) = **3/10**.

## MedAT-Fokus

**Zur gezielten Pruefungsvorbereitung** im Ueberblick:

**Zentral pruefungsrelevant:**
- Bruchaddition/-subtraktion mit Hauptnenner (kgV)
- Division durch einen Bruch = Multiplikation mit Kehrwert
- Doppelbrueche als Division lesen und vereinfachen
- Konzentrationsangaben als Brueche interpretieren

**Haeufige Fragen:**
- \u201eVereinfache den folgenden Ausdruck\u201c (Bruchterme kuerzen, erweitern, verrechnen)
- \u201eBerechne die Konzentration in mg/mL\u201c (Doppelbruch)
- \u201eWie viel mL der Stammlosung benoetigt man?\u201c (Verduennungsbruch)

**Typische Pruefungsfallen:**
- Nenner addieren statt Zaehler (bei Addition mit gleichem Nenner!)
- Kehrwert vergessen bei Bruchdivision
- kgV und ggT verwechseln (kgV fuer Hauptnenner, ggT fuer Kuerzen)
- Doppelbruch falsch aufloeesen: Hauptbruchstrich genau identifizieren

---

## Zusammenfassung (ultrakompakt)

- **Kuerzen/Erweitern:** Wert des Bruchs bleibt gleich; immer mit ggT kuerzen
- **Addition/Subtraktion:** Erst gleichnamig machen (kgV der Nenner), dann Zaehler verrechnen
- **Multiplikation:** Zaehler \u00d7 Zaehler / Nenner \u00d7 Nenner; vorher kreuzweise kuerzen
- **Division:** Nie durch Bruch teilen -- mit Kehrwert multiplizieren: (a/b)\u00f7(c/d) = (a/b)\u00d7(d/c)
- **Doppelbruch:** Oberer Bruch \u00f7 unterer Bruch; als Kehrwert-Multiplikation loesen
- **Kehrwert:** (a/b)\u207b\u00b9 = b/a; **Betrag:** |a/b| = |a|/|b| \u2265 0
- **Verduennung 1:n:** Konzentration = c_original/n; Serienverduennung: Faktoren multiplizieren`,
      lernziele: [
        "Brueche sicher erweitern, kuerzen und den Hauptnenner (kgV) bestimmen",
        "Die vier Grundrechenarten fuer Brueche fehlerfrei anwenden",
        "Doppelbrueche systematisch durch den Kehrwert-Trick vereinfachen",
        "Klinische Verduennungsverhaeltnisse als Bruchoperationen berechnen",
      ],
      merksätze: [
        "Kuerzen und Erweitern aendern den Wert nicht -- nur die Darstellung.",
        "Addition/Subtraktion: Erst gleichnamig (kgV), dann Zaehler verrechnen.",
        "Division durch Bruch = Multiplikation mit dem Kehrwert: (a/b)\u00f7(c/d) = (a/b)\u00d7(d/c).",
        "Doppelbruch: Hauptbruchstrich finden, oberen Bruch durch unteren teilen (= Kehrwert).",
        "Verduennung 1:n senkt Konzentration auf 1/n des Originals.",
      ],
      klinischerBezug:
        "Bruchrechnung ist das Fundament klinischer Konzentrationsberechnungen. Infusionsloesungen (NaCl 0,9 % = 9 g/L), Verduennungsreihen im Labor (1:2, 1:4, 1:8 ...), Wirkstoffkonzentrationen (mg/mL als Bruch) und die Verdueennungsformel c1V1 = c2V2 basieren alle auf sicherem Umgang mit Bruechen. Im Stationsalltag muessen Doppelbrueche (z. B. \u00b5g/kg/min) fehlerfrei vereinfacht werden, um Dosierungsfehler zu vermeiden.",
      selfTest: [
        {
          question: "Berechne: 5/6 + 7/9",
          options: ["29/18", "12/15", "12/54", "35/54", "1"],
          correctIndex: 0,
          explanation:
            "kgV(6, 9) = 18. 5/6 = 15/18 (mit 3 erweitert); 7/9 = 14/18 (mit 2 erweitert). 15/18 + 14/18 = 29/18. Der Bruch ist echt groesser als 1 (= 1 11/18). Haeufiger Fehler: Nenner addieren (6+9=15) statt Hauptnenner verwenden.",
          hints: [
            "Hauptnenner = kgV(6, 9). Was ist das kleinste gemeinsame Vielfache?",
            "kgV(6,9) = 18. Erweitere beide Brueche auf Nenner 18.",
          ],
          difficulty: 1,
          tags: ["bruchrechnung", "addition", "hauptnenner"],
        },
        {
          question: "Vereinfache: (3/4) \u00f7 (9/16)",
          options: ["4/3", "3/4", "27/64", "48/36", "12/9"],
          correctIndex: 0,
          explanation:
            "Division = Multiplikation mit Kehrwert: (3/4) \u00d7 (16/9). Kreuzkuerzen: 3 und 9 durch 3 \u2192 (1/4) \u00d7 (16/3). 16 und 4 durch 4 \u2192 (1/1) \u00d7 (4/3) = 4/3. Ohne Kreuzkuerzen: 3\u00d716 / 4\u00d79 = 48/36 = 4/3.",
          hints: [
            "Dividieren durch einen Bruch = mit dem Kehrwert multiplizieren.",
            "Kehrwert von 9/16 ist 16/9. Dann (3/4) \u00d7 (16/9) berechnen.",
          ],
          difficulty: 1,
          tags: ["bruchrechnung", "division", "kehrwert"],
        },
        {
          question: "Ein Doppelbruch: (2/5) / (4/15). Was ist das Ergebnis in gebuerzter Form?",
          options: ["3/2", "2/3", "8/75", "30/20", "6/4"],
          correctIndex: 0,
          explanation:
            "(2/5) / (4/15) = (2/5) \u00d7 (15/4). Kreuzkuerzen: 2 und 4 durch 2 \u2192 (1/5) \u00d7 (15/2). 15 und 5 durch 5 \u2192 (1/1) \u00d7 (3/2) = 3/2. Doppelbrueche: Immer den Hauptbruchstrich identifizieren und als Division lesen.",
          hints: [
            "Doppelbruch = oberer Bruch geteilt durch unteren Bruch.",
            "(2/5) \u00d7 (15/4) -- dann kreuzweise kuerzen.",
          ],
          difficulty: 2,
          tags: ["doppelbruch", "bruchrechnung", "vereinfachung"],
        },
        {
          question: "Eine Loesung wird dreimal 1:3 verduennt. Wie gross ist die Gesamtverduennung?",
          options: ["1:27", "1:9", "1:6", "1:3", "1:81"],
          correctIndex: 0,
          explanation:
            "Jede 1:3-Verduennung senkt die Konzentration auf 1/3. Dreimal: (1/3) \u00d7 (1/3) \u00d7 (1/3) = 1/27. Gesamtverduennung = 1:27. Allgemein: n Schritte mit Faktor 1:k ergeben 1:k\u207f. Hier: 3\u00b3 = 27.",
          hints: [
            "Serienverduennung: Einzelfaktoren multiplizieren.",
            "1/3 \u00d7 1/3 \u00d7 1/3 = 1/?\u00b3 = ?",
          ],
          difficulty: 2,
          tags: ["verduennung", "serienverduennung", "bruchrechnung"],
        },
        {
          question:
            "Propofol liegt als 10 mg/mL vor. Ein Patient (70 kg) erhaelt 2 mg/kg. Wie berechnet man das benoetigte Volumen als Bruch?",
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
      id: "ma-3-02",
      diagram: "percent-fractions",
      title: "Prozentrechnung",
      stichworte: [
        "Prozentrechnung",
        "Grundwert",
        "Prozentwert",
        "Prozentsatz",
        "Prozentuale Aenderung",
        "Prozentpunkte",
        "Promille",
        "Mortalitaetsrate",
        "Inzidenz",
        "Pravalenz",
        "NaCl 0,9%",
        "Blutalkoholkonzentration",
      ],
      content: `## Einleitung

\u201eDie Mortalitaet sank von 12 % auf 9 %\u201c -- ist das viel oder wenig? Die absolute Senkung betraegt 3 Prozentpunkte, die relative Senkung aber 25 %. Beide Aussagen sind korrekt, klingen aber voellig verschieden. Im MedAT-BMS musst du solche Angaben blitzschnell auseinanderhalten und Prozentwert, Grundwert oder Prozentsatz berechnen koennen.

**In diesem Kapitel lernst du:**
- wie die drei Grundfragen der Prozentrechnung (Prozentwert, Grundwert, Prozentsatz) aus einer Formel abgeleitet werden
- wie du prozentuale Aenderungen korrekt berechnest und von Prozentpunkten unterscheidest
- was Promille (\u2030) bedeutet und wie du zwischen Prozent und Promille umrechnest
- wie du Mortalitaetsraten, Inzidenz und Praevalenz als Prozentrechnung interpretierst
- wie NaCl 0,9 % und Blutalkoholgehalt (\u2030) im klinischen Kontext berechnet werden

---

{{DIAGRAM:percent-fractions}}

{{DIAGRAM:geometric-shapes}}

## Das Grundprinzip: P = G \u00d7 p/100

**Idee:** Prozent bedeutet \u201evon Hundert\u201c. Der Prozentsatz p gibt an, wie viele Teile von je 100 Teilen des Grundwerts G gemeint sind. Die fundamentale Formel **P = G \u00d7 p/100** verbindet drei Groessen: **P** (Prozentwert), **G** (Grundwert) und **p** (Prozentsatz).

**Verfahren -- drei Grundfragen aus einer Formel:**

| Gesucht | Formel | Beispiel |
|---------|--------|----------|
| Prozentwert P | P = G \u00d7 p/100 | 15 % von 320 = 320 \u00d7 0,15 = **48** |
| Grundwert G | G = P \u00d7 100/p | 36 ist 12 % von G \u2192 G = 36 \u00d7 100/12 = **300** |
| Prozentsatz p | p = P/G \u00d7 100 | 45 von 180 \u2192 p = 45/180 \u00d7 100 = **25 %** |

**Rechentrick fuer den Kopf:** 10 % = G \u00f7 10; 5 % = halbe 10 %; 1 % = G \u00f7 100. Damit laesst sich fast jeder Prozentsatz schnell zusammensetzen: 15 % = 10 % + 5 %, 23 % = 20 % + 3 %, etc.

> **Merke:** P = G \u00d7 p/100 ist die Universalformel. Durch Umstellen erhaeltst du alle drei Grundfragen. Rechentrick: 10 % = G\u00f710, 5 % = halbe 10 %, 1 % = G\u00f7100.

---

## Prozentuale Aenderung vs. Prozentpunkte

**Bisher haben wir gesehen:** Prozentwert, Grundwert und Prozentsatz ergeben sich aus einer Formel. **Aber was passiert bei Veraenderungen?** Hier lauert die groesste MedAT-Falle: die Verwechslung von **absoluter** und **relativer** Aenderung.

**Absolute Aenderung (Prozentpunkte):** Die schlichte Differenz zweier Prozentwerte.
Beispiel: Mortalitaet sinkt von 12 % auf 9 %. Absolute Aenderung = 12 % \u2212 9 % = **3 Prozentpunkte**.

**Relative Aenderung (prozentuale Aenderung):** Die Differenz bezogen auf den **Ausgangswert**.
Formel: \u0394% = (Endwert \u2212 Anfangswert) / Anfangswert \u00d7 100 %.
Beispiel: (9 \u2212 12) / 12 \u00d7 100 = \u221225 %. Die Mortalitaet ist **relativ um 25 %** gesunken.

**Wichtige Asymmetrie:** +50 % und danach \u221250 % ergibt **nicht** den Ausgangswert!
100 \u2192 +50 % \u2192 150 \u2192 \u221250 % \u2192 75 (nicht 100!). Der Grundwert aendert sich bei jeder Aenderung.

> **Merke:** Prozentpunkte = schlichte Differenz. Prozentuale Aenderung = Differenz/Ausgangswert \u00d7 100 %. Von 40 % auf 30 % = 10 Prozentpunkte absolut, aber 25 % relative Senkung. Beides richtig -- aber verschiedene Aussagen!

---

## Promille (\u2030)

**Idee:** Promille (\u2030) = \u201evon Tausend\u201c. Promille verhaelt sich zu Prozent wie ein Zehntel: 1 \u2030 = 0,1 % = 0,001.

**Umrechnung:** p \u2030 = p/1000. Prozent zu Promille: \u00d7 10. Promille zu Prozent: \u00f7 10.

**Klinische Anwendung -- Blutalkoholkonzentration (BAK):**
BAK 0,5 \u2030 = 0,5 g Alkohol pro 1000 mL Blut = 0,05 g/100 mL = 50 mg/dL.
Widmark-Formel: BAK = getrunkener Alkohol [g] / (Koerpergewicht [kg] \u00d7 r) \u2212 Abbau.
Reduktionsfaktor r: Maenner \u2248 0,7; Frauen \u2248 0,6. Abbaurate \u2248 0,15 \u2030/h.

**Rechenbeispiel:** 40 g Alkohol, Mann 80 kg. BAK = 40 / (80 \u00d7 0,7) = 40/56 = **0,71 \u2030**. Nach 2 h: 0,71 \u2212 2 \u00d7 0,15 = **0,41 \u2030**.

> **Merke:** 1 \u2030 = 0,1 % = 1/1000. BAK in \u2030: Gramm Alkohol / (kg \u00d7 r). Abbau: ca. 0,15 \u2030 pro Stunde.

---

## Klinische Kennzahlen als Prozentrechnung

**Praevalenz:** Anteil Erkrankter an der Gesamtbevoelkerung zu einem Zeitpunkt. Praevalenz = Erkrankte / Gesamtpopulation \u00d7 100 %.

**Inzidenz:** Anzahl Neuerkrankungen pro Zeiteinheit bezogen auf die Risikopopulation. Inzidenz = Neuerkrankte / Risikopopulation \u00d7 100 % (pro Jahr).

**Mortalitaetsrate:** Verstorbene / Gesamtpopulation \u00d7 100 % (pro Zeiteinheit).

**Rechenbeispiel:** In einer Stadt mit 50.000 Einwohnern erkranken 200 Menschen in einem Jahr neu an Diabetes. Inzidenz = 200/50.000 \u00d7 100 = **0,4 %** = 4 \u2030 = 400/100.000.

**NaCl 0,9 %:** 0,9 g NaCl pro 100 mL Loesung = 9 g/L = 9 mg/mL. Isotonisch zum Blutplasma. Die Prozentangabe bei Loesungen ist stets eine Massenkonzentration (g/100 mL = Masse-Volumen-Prozent, w/v).

> **Merke:** Praevalenz = Bestand, Inzidenz = Neuzugang. NaCl 0,9 % = 0,9 g/100 mL = 9 g/L. Loesungsprozente sind Masse pro Volumen (w/v), nicht Masse pro Masse!

---

## Rechenbeispiele

**Beispiel 1 -- Grundwert gesucht:** 56 Patienten (= 14 % der Studiengruppe) entwickelten Nebenwirkungen. Wie gross war die Studiengruppe? G = P \u00d7 100/p = 56 \u00d7 100/14 = **400** Patienten. Probe: 14 % von 400 = 56 \u2713.

**Beispiel 2 -- Prozentuale Aenderung:** Blutdruck sinkt von 160 auf 120 mmHg. Absolut: 40 mmHg. Relativ: (160\u2212120)/160 \u00d7 100 = 40/160 \u00d7 100 = **25 %** Senkung. Nicht 33 % (das waere 40/120 -- falscher Bezugswert!).

**Beispiel 3 -- Promille in Prozent:** Eine Loesung enthaelt 8 \u2030 Wirkstoff. In Prozent: 8 \u2030 = 8/10 % = **0,8 %**. In g/L: 0,8 g/100 mL = **8 g/L**.

**Beispiel 4 -- Zusammengesetzt:** Inzidenz Grippe: 3 % der 200.000 Einwohner = 6.000 Neuerkrankte. Davon sterben 0,5 %: 6.000 \u00d7 0,005 = **30** Tote. Mortalitaetsbezogen auf alle Einwohner: 30/200.000 = **0,015 %** = 0,15 \u2030.

## MedAT-Fokus

**Zur gezielten Pruefungsvorbereitung** im Ueberblick:

**Zentral pruefungsrelevant:**
- Drei Grundfragen: P, G oder p gesucht -- sicher umstellen
- Prozentuale Aenderung vs. Prozentpunkte (groesste Falle!)
- Promille \u2194 Prozent umrechnen
- Klinische Loesungsprozente (NaCl 0,9 %, Glucose 5 %)

**Haeufige Fragen:**
- \u201eX sind wie viel % von Y?\u201c \u2192 p = X/Y \u00d7 100
- \u201eUm wie viel Prozent hat sich der Wert veraendert?\u201c \u2192 Differenz/Ausgangswert \u00d7 100
- \u201eWie viel Gramm Wirkstoff sind in 250 mL einer 4%-Loesung?\u201c \u2192 P = 250 \u00d7 0,04 = 10 g

**Typische Pruefungsfallen:**
- Prozentpunkte mit relativer Aenderung verwechseln
- Bezugswert falsch waehlen (Ausgangswert vs. Endwert)
- Asymmetrie vergessen: +50 % und dann \u221250 % \u2260 Ausgangswert
- Promille als Prozent lesen (1 \u2030 = 0,1 %, nicht 1 %)

---

## Zusammenfassung (ultrakompakt)

- **Grundformel:** P = G \u00d7 p/100; G = P \u00d7 100/p; p = P/G \u00d7 100
- **Prozentuale Aenderung:** (Endwert \u2212 Anfangswert) / Anfangswert \u00d7 100 %
- **Prozentpunkte:** Schlichte Differenz zweier Prozentwerte (absolute Aenderung)
- **Promille:** 1 \u2030 = 0,1 % = 1/1000; BAK [\u2030] = Alkohol [g] / (kg \u00d7 r)
- **Asymmetrie:** +50 % dann \u221250 % ergibt 75, nicht 100 (Grundwert aendert sich)
- **Klinisch:** NaCl 0,9 % = 9 g/L; Praevalenz = Bestand; Inzidenz = Neuzugang
- **Kopfrechentrick:** 10 % = G\u00f710; 5 % = halbe 10 %; 1 % = G\u00f7100`,
      lernziele: [
        "Die drei Grundfragen der Prozentrechnung sicher und schnell loesen",
        "Absolute und relative Aenderungen unterscheiden und korrekt berechnen",
        "Zwischen Prozent und Promille umrechnen",
        "Klinische Kennzahlen (Praevalenz, Inzidenz, Mortalitaet) als Prozentrechnung interpretieren",
      ],
      merksätze: [
        "P = G \u00d7 p/100 -- eine Formel, drei Grundfragen durch Umstellen.",
        "Prozentpunkte = Differenz; prozentuale Aenderung = Differenz/Ausgangswert \u00d7 100 %.",
        "Asymmetrie: +50 % und dann \u221250 % ergibt nicht den Ausgangswert!",
        "1 \u2030 = 0,1 % = 1/1000. Promille zu Prozent: durch 10 teilen.",
        "NaCl 0,9 % = 0,9 g/100 mL = 9 g/L (Masse-Volumen-Prozent).",
      ],
      klinischerBezug:
        "Prozentrechnung durchdringt die gesamte Medizin: Laborwerte (Haematokrit 42 %, SpO2 98 %, Ejektionsfraktion > 55 %), epidemiologische Kennzahlen (Inzidenz, Praevalenz, Mortalitaetsrate), Loesungskonzentrationen (NaCl 0,9 %, Glucose 5 %), Studienauswertung (ARR, RRR, NNT) und forensische Berechnungen (BAK in \u2030). Die Verwechslung von Prozentpunkten und prozentualer Aenderung fuehrt in klinischen Studien regelmaeig zu Fehlinterpretationen.",
      selfTest: [
        {
          question:
            "Eine Studie zeigt: 72 von 450 Patienten entwickeln eine Nebenwirkung. Wie viel Prozent?",
          options: ["16 %", "14,4 %", "18 %", "6,25 %", "72 %"],
          correctIndex: 0,
          explanation:
            "p = P/G \u00d7 100 = 72/450 \u00d7 100 = 16 %. Probe: 16 % von 450 = 0,16 \u00d7 450 = 72. Korrekt. Rechentrick: 72/450 = 72/450 \u2192 kuerze durch 9: 8/50 = 16/100 = 16 %.",
          hints: [
            "Formel: p = Anzahl/Gesamtzahl \u00d7 100.",
            "72/450 kuerzen: ggT(72,450) = 18. Also 4/25 = 16/100.",
          ],
          difficulty: 1,
          tags: ["prozentrechnung", "prozentsatz", "klinik"],
        },
        {
          question: "Der HbA1c sinkt von 8,0 % auf 6,8 %. Wie gross ist die relative Senkung?",
          options: ["15 %", "1,2 Prozentpunkte", "17,6 %", "12 %", "85 %"],
          correctIndex: 0,
          explanation:
            "Relative Aenderung = (8,0 \u2212 6,8) / 8,0 \u00d7 100 = 1,2/8,0 \u00d7 100 = 15 %. Die absolute Aenderung betraegt 1,2 Prozentpunkte. Achtung: 1,2/6,8 \u00d7 100 = 17,6 % waere falsch (Bezug auf Endwert statt Ausgangswert).",
          hints: [
            "Relative Aenderung: Differenz / AUSGANGSWERT \u00d7 100.",
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
            "NaCl 0,9 % = 0,9 g/100 mL. Fuer 500 mL: 0,9 \u00d7 5 = 4,5 g. Alternativ: 0,9 % von 500 mL = 500 \u00d7 0,009 = 4,5 g (die Dichte von Wasser ist \u2248 1 g/mL). NaCl 0,9 % = 9 g/L = 4,5 g/500 mL.",
          hints: [
            "0,9 % bedeutet 0,9 g pro 100 mL.",
            "500 mL = 5 \u00d7 100 mL. Also 5 \u00d7 0,9 g = ?",
          ],
          difficulty: 1,
          tags: ["prozentrechnung", "loesungskonzentration", "nacl"],
        },
        {
          question:
            "Ein Wert steigt um 25 % und faellt dann um 20 %. Wie gross ist der Wert relativ zum Ausgangswert?",
          options: [
            "Genau der Ausgangswert (100 %)",
            "105 % des Ausgangswerts",
            "95 % des Ausgangswerts",
            "Mehr als der Ausgangswert",
            "80 % des Ausgangswerts",
          ],
          correctIndex: 0,
          explanation:
            "Ausgangswert 100. Nach +25 %: 100 \u00d7 1,25 = 125. Nach \u221220 %: 125 \u00d7 0,80 = 100. Hier ergibt sich tatsaechlich der Ausgangswert, weil 1,25 \u00d7 0,80 = 1,00. Achtung: Das ist ein Spezialfall -- bei +50 % und \u221250 % waere das Ergebnis nur 75!",
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
      id: "ma-3-03",
      diagram: "percent-fractions",
      title: "Dreisatz & Proportionen",
      stichworte: [
        "Dreisatz",
        "Direkter Dreisatz",
        "Indirekter Dreisatz",
        "Proportionalitaet",
        "Antiproportionalitaet",
        "Zusammengesetzter Dreisatz",
        "Verhaeltnis",
        "Kreuzprodukt",
        "Medikamentendosierung",
        "Infusionsrate",
        "mg/kg",
        "mL/h",
      ],
      content: `## Einleitung

\u201eEin Patient wiegt 85 kg und soll 3 mg/kg erhalten -- wie viel Milligramm brauchen wir?\u201c Solche Aufgaben gehoeren zum klinischen Alltag und zum MedAT-BMS. Der **Dreisatz** (Schlussrechnung) ist das einfachste und zuverlaessigste Werkzeug dafuer: In drei Schritten von einer bekannten zu einer gesuchten Groesse.

**In diesem Kapitel lernst du:**
- wie der direkte Dreisatz funktioniert und wann er anwendbar ist (proportionale Groessen)
- wie der indirekte Dreisatz funktioniert (antiproportionale Groessen)
- wie du erkennst, ob eine Aufgabe direkt oder indirekt proportional ist
- wie der zusammengesetzte Dreisatz bei zwei veraenderlichen Groessen funktioniert
- wie du Medikamentendosierungen, Infusionsraten und Verduennungen per Dreisatz berechnest

---

{{DIAGRAM:percent-fractions}}

{{DIAGRAM:coordinate-system}}

## Direkter Dreisatz (proportional)

**Idee:** Zwei Groessen sind **direkt proportional**, wenn sie im selben Verhaeltnis steigen und fallen. Doppelt so viel von A \u2192 doppelt so viel von B. Der **Quotient** A/B bleibt konstant.

**Verfahren -- drei Schritte:**
1. **Gegeben:** Bekannte Zuordnung aufschreiben (z. B. 3 Tabletten \u2259 750 mg)
2. **Auf 1 zurueckfuehren:** Durch die bekannte Menge teilen (1 Tablette \u2259 250 mg)
3. **Auf die gesuchte Menge hochrechnen:** Mit der gesuchten Menge multiplizieren (5 Tabletten \u2259 1250 mg)

**Formel:** a/b = c/x \u2192 **x = b \u00d7 c / a** (Kreuzprodukt-Eigenschaft).

**Rechenbeispiel 1:** 50 kg erfordern 100 mg Wirkstoff. Wie viel fuer 70 kg?
- Schritt 1: 50 kg \u2259 100 mg.
- Schritt 2: 1 kg \u2259 100/50 = 2 mg.
- Schritt 3: 70 kg \u2259 70 \u00d7 2 = **140 mg**.

**Rechenbeispiel 2:** 250 mL einer Infusion enthalten 500 mg Wirkstoff. Wie viel mg in 75 mL?
- 1 mL \u2259 500/250 = 2 mg.
- 75 mL \u2259 75 \u00d7 2 = **150 mg**.

> **Merke:** Direkter Dreisatz: Mehr ergibt mehr. Quotient A/B = konstant. Schema: Gegeben \u2192 auf 1 zurueckfuehren \u2192 auf gesuchte Menge hochrechnen.

---

## Indirekter Dreisatz (antiproportional)

**Bisher haben wir gesehen:** Beim direkten Dreisatz steigen beide Groessen gemeinsam. **Aber was, wenn mehr von A zu weniger von B fuehrt?** Dann liegt **inverse Proportionalitaet** vor -- das **Produkt** A \u00d7 B bleibt konstant.

**Erkennungsfrage:** Wenn A groesser wird, wird B dann **kleiner**? \u2192 Indirekter Dreisatz!
Typische Situationen: Mehr Helfer \u2192 weniger Zeit. Hoehere Konzentration \u2192 kleineres Volumen. Schnellere Geschwindigkeit \u2192 kuerzere Fahrtzeit.

**Verfahren:**
1. **Gegeben:** Bekannte Zuordnung (z. B. 6 Schwestern \u2259 4 Stunden)
2. **Gesamtarbeit berechnen:** Produkt = 6 \u00d7 4 = 24 Schwesternstunden (konstant!)
3. **Gesuchte Groesse:** 24 / 4 Schwestern = **6 Stunden**

**Formel:** a \u00d7 b = c \u00d7 x \u2192 **x = a \u00d7 b / c**.

**Rechenbeispiel (klinisch):** Verdueennungsformel c\u2081 \u00d7 V\u2081 = c\u2082 \u00d7 V\u2082. Stammlosung c\u2081 = 20 mg/mL, gesucht: V\u2081 fuer 100 mL mit c\u2082 = 5 mg/mL. V\u2081 = (5 \u00d7 100) / 20 = **25 mL**. Konzentration und Volumen sind antiproportional (bei konstanter Stoffmenge).

> **Merke:** Indirekter Dreisatz: Mehr ergibt weniger. Produkt A \u00d7 B = konstant. Erkennungsfrage: \u201eWenn A doppelt so gross wird, wird B halb so gross?\u201c \u2192 indirekt!

---

## Zusammengesetzter Dreisatz

**Idee:** Manchmal aendern sich **zwei** Groessen gleichzeitig. Der zusammengesetzte Dreisatz loest dies schrittweise: Erst eine Variable anpassen (direkt oder indirekt), dann die andere.

**Rechenbeispiel:** 5 Arbeiter brauchen 8 Tage fuer 200 m\u00b2. Wie viele Tage brauchen 4 Arbeiter fuer 300 m\u00b2?

Schritt 1 -- Arbeiter anpassen (indirekt): 5 Arbeiter \u2259 8 Tage. 4 Arbeiter \u2259 8 \u00d7 5/4 = **10 Tage** (fuer 200 m\u00b2).

Schritt 2 -- Flaeche anpassen (direkt): 200 m\u00b2 \u2259 10 Tage. 300 m\u00b2 \u2259 10 \u00d7 300/200 = **15 Tage**.

**Klinisch:** Infusionsrate kombiniert Dosis (mg/kg/h), Koerpergewicht (kg) und Konzentration (mg/mL) -- das ist ein zusammengesetzter Dreisatz.

**Rechenbeispiel (Infusion):** Propofol 6 mg/kg/h, Patient 80 kg, Stammlosung 10 mg/mL.
- Dosis/h = 6 \u00d7 80 = 480 mg/h (direkt proportional zum Gewicht).
- Volumen/h = 480 / 10 = **48 mL/h** (indirekt proportional zur Konzentration).
- Tropfrate bei 20 gtt/mL: 48 \u00d7 20 / 60 = **16 gtt/min**.

> **Merke:** Zusammengesetzter Dreisatz: Schrittweise loesen. Bei jedem Schritt pruefen: direkt oder indirekt? Infusionsraten-Berechnung ist immer ein zusammengesetzter Dreisatz!

---

## Verhaeltnisse und Kreuzprodukt

**Ein Verhaeltnis a:b** beschreibt die relative Groesse zweier Werte zueinander.

**Kreuzprodukt-Eigenschaft:** Wenn a/b = c/d, dann a \u00d7 d = b \u00d7 c. Diese Eigenschaft ist extrem nuetzlich zum Loesen von Proportionsgleichungen.

**Rechenbeispiel:** x:4 = 9:12. Kreuzprodukt: 12x = 36, also x = **3**.

**Mischungsverhaeltnis:** Glucose 5 % und Glucose 20 % sollen zu 500 mL Glucose 8 % gemischt werden. Verhaeltnis V\u2085:V\u2082\u2080 = (20\u22128):(8\u22125) = 12:3 = **4:1**. Also V\u2085 = 400 mL und V\u2082\u2080 = 100 mL.

> **Merke:** Kreuzprodukt: a/b = c/d \u21d4 a\u00d7d = b\u00d7c. Mischungskreuz: Differenzen der Konzentrationen geben das Mischungsverhaeltnis.

---

## Rechenbeispiele

**Beispiel 1 -- Dosierung (direkter Dreisatz):** 3 mg/kg, Patient 85 kg. Dosis = 3 \u00d7 85 = **255 mg**. Medikament als 50 mg/mL: V = 255/50 = **5,1 mL**.

**Beispiel 2 -- Infusionsrate (zusammengesetzt):** Heparin 25.000 IE in 250 mL NaCl = 100 IE/mL. Verordnet: 1200 IE/h. Rate = 1200/100 = **12 mL/h**.

**Beispiel 3 -- Indirekter Dreisatz:** Eine Antibiotikum-Infusion soll ueber 4 h laufen (100 mL). Rate = 100/4 = 25 mL/h. Wenn nur 2 h verfuegbar: 100/2 = **50 mL/h** (doppelte Rate bei halber Zeit -- indirekt).

**Beispiel 4 -- Kreuzprodukt:** Verhaeltnis Serum:Puffer = 1:9 (Gesamtverduennung 1:10). Fuer 5 mL Gesamtvolumen: Serum = 5 \u00d7 1/10 = **0,5 mL**; Puffer = **4,5 mL**.

## MedAT-Fokus

**Zur gezielten Pruefungsvorbereitung** im Ueberblick:

**Zentral pruefungsrelevant:**
- Direkter Dreisatz: Dosierung mg/kg \u00d7 Gewicht
- Indirekter Dreisatz: Verduennungsformel c\u2081V\u2081 = c\u2082V\u2082
- Zusammengesetzter Dreisatz: Infusionsraten (mg/kg/h \u2192 mL/h)
- Kreuzprodukt bei Verhaeltnisgleichungen

**Haeufige Fragen:**
- \u201eWie viel mL braucht ein 70-kg-Patient bei 5 mg/kg?\u201c (direkter Dreisatz)
- \u201eWie hoch ist die Infusionsrate in mL/h?\u201c (zusammengesetzter Dreisatz)
- \u201eMehr Arbeiter, wie viel schneller?\u201c (indirekter Dreisatz)

**Typische Pruefungsfallen:**
- Direkt und indirekt verwechseln: Immer Erkennungsfrage stellen!
- Beim indirekten Dreisatz multiplizieren statt dividieren
- Einheiten nicht mitfuehren (mg, mL, h korrekt kuerzen!)
- Zusammengesetzten Dreisatz in einem Schritt loesen wollen (immer schrittweise!)

---

## Zusammenfassung (ultrakompakt)

- **Direkter Dreisatz:** Quotient A/B = konstant; mehr A \u2192 mehr B; x = b\u00d7c/a
- **Indirekter Dreisatz:** Produkt A\u00d7B = konstant; mehr A \u2192 weniger B; x = a\u00d7b/c
- **Erkennungsfrage:** \u201eWird B groesser oder kleiner, wenn A steigt?\u201c
- **Zusammengesetzt:** Schrittweise loesen, jeden Schritt einzeln auf direkt/indirekt pruefen
- **Kreuzprodukt:** a/b = c/d \u21d4 a\u00d7d = b\u00d7c
- **Dosierung:** mg/kg \u00d7 kg = mg (direkt); V = Dosis/Konz (indirekt)
- **Infusionsrate:** Dosis/h \u00f7 Konz = mL/h; gtt/min = mL/h \u00d7 gtt/mL \u00f7 60`,
      lernziele: [
        "Den direkten Dreisatz auf Dosierungsaufgaben anwenden (mg/kg)",
        "Den indirekten Dreisatz erkennen und fuer Verduennungen einsetzen",
        "Direkte und indirekte Proportionalitaet sicher unterscheiden",
        "Zusammengesetzte Dreisaetze schrittweise loesen (Infusionsraten)",
      ],
      merksätze: [
        "Direkter Dreisatz: Mehr ergibt mehr -- Quotient A/B bleibt konstant.",
        "Indirekter Dreisatz: Mehr ergibt weniger -- Produkt A\u00d7B bleibt konstant.",
        "Erkennungsfrage: Wenn A doppelt so gross, wird B doppelt (direkt) oder halb (indirekt)?",
        "Zusammengesetzter Dreisatz: Immer schrittweise, nie in einem Sprung.",
        "Kreuzprodukt: a/b = c/d bedeutet a\u00d7d = b\u00d7c -- universell fuer Verhaeltnisse.",
      ],
      klinischerBezug:
        "Der Dreisatz ist das meistverwendete Recheninstrument in der klinischen Praxis. Medikamentendosierungen (mg/kg Koerpergewicht), Infusionsraten (mL/h aus mg/kg/h und Konzentration), Verduennungen (c\u2081V\u2081 = c\u2082V\u2082) und Mischungsberechnungen (Glucose 5 %/20 % mischen) sind taeglich notwendig. Fehler bei Dosierungsberechnungen gehoeren zu den haeufigsten vermeidbaren Medikationsfehlern im Krankenhaus.",
      selfTest: [
        {
          question:
            "Ein Patient wiegt 65 kg und soll 4 mg/kg eines Antibiotikums erhalten. Wie hoch ist die Gesamtdosis?",
          options: ["260 mg", "16,25 mg", "650 mg", "26 mg", "4 mg"],
          correctIndex: 0,
          explanation:
            "Direkter Dreisatz: Dosis = mg/kg \u00d7 kg = 4 \u00d7 65 = 260 mg. Die Dosierung ist direkt proportional zum Koerpergewicht: doppeltes Gewicht = doppelte Dosis.",
          hints: [
            "Formel: Gesamtdosis = Dosierung pro kg \u00d7 Koerpergewicht.",
            "4 mg/kg \u00d7 65 kg = ? mg.",
          ],
          difficulty: 1,
          tags: ["dreisatz", "dosierung", "proportional"],
        },
        {
          question:
            "Eine Stammlosung hat c = 50 mg/mL. Wie viel mL braucht man fuer 200 mL einer 5-mg/mL-Loesung?",
          options: ["20 mL", "50 mL", "200 mL", "10 mL", "100 mL"],
          correctIndex: 0,
          explanation:
            "Verduennungsformel (indirekter Dreisatz): c\u2081\u00d7V\u2081 = c\u2082\u00d7V\u2082. 50\u00d7V\u2081 = 5\u00d7200 = 1000. V\u2081 = 1000/50 = 20 mL. Dann 180 mL Loesungsmittel dazu auffuellen auf 200 mL.",
          hints: [
            "Formel: c\u2081 \u00d7 V\u2081 = c\u2082 \u00d7 V\u2082 (Stoffmenge bleibt konstant).",
            "50 \u00d7 V\u2081 = 5 \u00d7 200. V\u2081 = ?",
          ],
          difficulty: 2,
          tags: ["dreisatz", "verduennung", "antiproportional"],
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
            "Noradrenalin 0,1 \u00b5g/kg/min, Patient 80 kg, Spritze 4 mg/40 mL. Wie hoch ist die Rate in mL/h?",
          options: ["4,8 mL/h", "8 mL/h", "0,8 mL/h", "48 mL/h", "0,08 mL/h"],
          correctIndex: 0,
          explanation:
            "Schritt 1: Dosis/min = 0,1 \u00b5g/kg/min \u00d7 80 kg = 8 \u00b5g/min. Schritt 2: Konzentration = 4000 \u00b5g / 40 mL = 100 \u00b5g/mL. Schritt 3: Rate = 8 \u00b5g/min / 100 \u00b5g/mL = 0,08 mL/min. Schritt 4: 0,08 \u00d7 60 = 4,8 mL/h. Zusammengesetzter Dreisatz mit drei Groessen.",
          hints: [
            "Erst Dosis/min berechnen (direkt), dann durch Konzentration teilen (indirekt).",
            "8 \u00b5g/min \u00f7 100 \u00b5g/mL = 0,08 mL/min. Mal 60 = ? mL/h.",
          ],
          difficulty: 3,
          tags: ["dreisatz", "zusammengesetzt", "infusionsrate"],
        },
        {
          question:
            "Glucose 5 % und 20 % sollen zu 500 mL Glucose 8 % gemischt werden. Wie viel mL der 5%-Loesung?",
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
      id: "ma-3-04",
      diagram: "geometric-shapes",
      title: "Einheitenumrechnung & Groessenordnungen",
      stichworte: [
        "SI-Praefixe",
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
      content: `## Einleitung

Ein Laborwert von 5,5 mmol/L Glucose -- sind das viel oder wenig? In mg/dL umgerechnet (= 99 mg/dL) sieht man sofort: Normalbereich. Am MedAT-BMS musst du sicher zwischen Einheiten umrechnen koennen -- von mg in \u00b5g, von mmol/L in mg/dL, von mL/min in L/h. Die **Kettenmethode** (Dimensional Analysis) ist dabei dein zuverlaessigstes Werkzeug.

**In diesem Kapitel lernst du:**
- die wichtigsten SI-Praefixe und ihre Zehnerpotenzen (nano bis mega)
- wie die Kettenmethode (Einheitenanalyse) funktioniert und warum sie Fehler verhindert
- wie du mg \u2194 \u00b5g, mmol/L \u2194 mg/dL und mL/min \u2194 L/h sicher umrechnest
- wie du mit der Glucose-Umrechnung (Molmasse 180 g/mol) klinische Laborwerte interpretierst
- welche Groessenordnungen in Medizin und Biologie typisch sind

---

{{DIAGRAM:percent-fractions}}

{{DIAGRAM:geometric-shapes}}

## SI-Praefixe: Die Zehnerpotenz-Leiter

**Idee:** Das SI-System verwendet **Praefixe** (Vorsilben), um Vielfache und Bruchteile von Einheiten auszudruecken. Jeder Praefixschritt entspricht einer **Zehnerpotenz**. Von milli zu mikro sind es drei Zehnerpotenzen (Faktor 1000).

| Praefix | Symbol | Faktor | Beispiel |
|---------|--------|--------|----------|
| Mega | M | 10\u2076 | 1 MHz = 10\u2076 Hz |
| Kilo | k | 10\u00b3 | 1 kg = 10\u00b3 g |
| (Basis) | -- | 10\u2070 | 1 g, 1 m, 1 L |
| Milli | m | 10\u207b\u00b3 | 1 mg = 10\u207b\u00b3 g |
| Mikro | \u00b5 | 10\u207b\u2076 | 1 \u00b5g = 10\u207b\u2076 g |
| Nano | n | 10\u207b\u2079 | 1 nm = 10\u207b\u2079 m |
| Piko | p | 10\u207b\u00b9\u00b2 | 1 pg = 10\u207b\u00b9\u00b2 g |

**Eselsbruecke fuer die Reihenfolge (abwaerts):** **k**ein **M**ensch **m**ag **\u00b5**berhaupt **n**asse **p**ommes -- kilo, (Basis), milli, mikro, nano, piko. Zwischen benachbarten Praefixen liegen immer **3 Zehnerpotenzen** (Faktor 1000).

**Verfahren -- Umrechnung zwischen Praefixen:**
- Von einer groesseren zu einer kleineren Einheit: **multiplizieren** (1 mg = 1000 \u00b5g).
- Von einer kleineren zu einer groesseren Einheit: **dividieren** (500 \u00b5g = 0,5 mg).
- Anzahl der Dreierschritte zaehlen: mg \u2192 \u00b5g = 1 Schritt = \u00d710\u00b3. mg \u2192 ng = 2 Schritte = \u00d710\u2076.

> **Merke:** Zwischen Nachbar-Praefixen liegen immer 3 Zehnerpotenzen (Faktor 1000). 1 mg = 1000 \u00b5g = 1.000.000 ng. Von gross nach klein: multiplizieren. Von klein nach gross: dividieren.

---

## Die Kettenmethode (Dimensional Analysis)

**Bisher haben wir gesehen:** SI-Praefixe aendern die Groessenordnung. **Aber wie rechnet man zusammengesetzte Einheiten um** (z. B. mL/min \u2192 L/h)? Die **Kettenmethode** garantiert Fehlerfreiheit: Du schreibst Umrechnungsfaktoren als Brueche und kuerzst Einheiten wie Variablen.

**Verfahren:**
1. Ausgangswert mit Einheit aufschreiben
2. Umrechnungsfaktoren als Brueche anhaengen, sodass sich ungewuenschte Einheiten **kuerzen**
3. Multiplizieren und Einheiten ueberpruefen

**Rechenbeispiel 1:** 0,08 mL/min \u2192 ? mL/h.
0,08 mL/min \u00d7 (60 min / 1 h) = 0,08 \u00d7 60 mL/h = **4,8 mL/h**. Die Einheit \u201emin\u201c kuerzt sich weg.

**Rechenbeispiel 2:** 500 mL/h \u2192 ? L/h.
500 mL/h \u00d7 (1 L / 1000 mL) = 500/1000 L/h = **0,5 L/h**. Die Einheit \u201emL\u201c kuerzt sich.

**Rechenbeispiel 3:** 120 mL/min \u2192 ? L/h.
120 mL/min \u00d7 (1 L / 1000 mL) \u00d7 (60 min / 1 h) = 120 \u00d7 60 / 1000 L/h = 7200/1000 = **7,2 L/h**. Zwei Umrechnungsschritte in einer Kette.

> **Merke:** Kettenmethode: Umrechnungsfaktoren als Brueche schreiben, ungewollte Einheiten kuerzen sich weg. Vorteil: Man sieht sofort, ob man multiplizieren oder dividieren muss. Fehlerquelle Nr. 1 (falsche Richtung) wird ausgeschlossen.

---

## Klinisch wichtige Umrechnungen

### mg \u2194 \u00b5g \u2194 ng

Die haeufigste Umrechnung in der Klinik:
- 1 mg = 1000 \u00b5g = 1.000.000 ng
- 1 \u00b5g = 0,001 mg = 1000 ng

**Rechenbeispiel:** Noradrenalin 8 \u00b5g/min \u2192 mg/h. 8 \u00b5g/min \u00d7 (1 mg / 1000 \u00b5g) \u00d7 (60 min / 1 h) = 8 \u00d7 60 / 1000 = **0,48 mg/h**.

### mmol/L \u2194 mg/dL (Glucose!)

Die Umrechnung haengt von der **Molmasse** (M) des Stoffs ab:
- Allgemein: c [mg/dL] = c [mmol/L] \u00d7 M [g/mol] \u00d7 0,1
- **Glucose (M = 180 g/mol):** c [mg/dL] = c [mmol/L] \u00d7 **18**

**Rechenbeispiel:** Glucose 5,5 mmol/L \u2192 mg/dL. 5,5 \u00d7 18 = **99 mg/dL** (Normalbereich: 70--100 mg/dL nuechtern).

**Rechenbeispiel (rueckwaerts):** Glucose 180 mg/dL \u2192 mmol/L. 180 / 18 = **10,0 mmol/L** (deutlich erhoet \u2192 Diabetes mellitus).

> **Merke:** Glucose: mmol/L \u00d7 18 = mg/dL. Allgemein: mmol/L \u00d7 Molmasse/10 = mg/dL. Faktor 18 fuer Glucose auswendig lernen!

### mL/min \u2194 L/h

GFR und Clearance-Werte werden oft in mL/min angegeben, Infusionsraten in mL/h oder L/h:
- mL/min \u00d7 60 = mL/h
- mL/h \u00f7 1000 = L/h
- mL/min \u00d7 0,06 = L/h

**Rechenbeispiel:** GFR 90 mL/min = 90 \u00d7 60 = 5400 mL/h = **5,4 L/h**.

---

## Groessenordnungen in der Medizin

| Objekt / Wert | Groessenordnung |
|----------------|-----------------|
| Erythrozyt | 8 \u00b5m = 8 \u00d7 10\u207b\u2076 m |
| Bakterium | 1--5 \u00b5m |
| Virus | 20--300 nm |
| Glucose im Blut | 5 mmol/L \u2248 90 mg/dL |
| Natrium im Blut | 140 mmol/L |
| Haemoglobin | 15 g/dL = 150 g/L |
| Blutvolumen Erwachsener | 5 L \u2248 70 mL/kg |
| GFR | 90--120 mL/min |

> **Merke:** Typische Groessenordnungen auswendig: Glucose \u2248 5 mmol/L \u2248 90 mg/dL; GFR \u2248 100 mL/min; Erythrozyt \u2248 8 \u00b5m; Virus \u2248 100 nm. Diese Werte helfen bei Plausibilitaetschecks.

---

## Rechenbeispiele

**Beispiel 1 -- Kettenmethode (Dopamin):** Dosierung 5 \u00b5g/kg/min, Patient 70 kg, Loesung 200 mg/50 mL.
- Dosis/min = 5 \u00d7 70 = 350 \u00b5g/min.
- Konzentration = 200 mg/50 mL = 4 mg/mL = 4000 \u00b5g/mL.
- Rate = 350/4000 = 0,0875 mL/min \u00d7 60 = **5,25 mL/h**.

**Beispiel 2 -- Glucose-Umrechnung:** Patient: Glucose 11,1 mmol/L. In mg/dL: 11,1 \u00d7 18 = **199,8 \u2248 200 mg/dL** (deutlich ueber 126 mg/dL \u2192 Diabetes-Diagnose nuechtern).

**Beispiel 3 -- Einheiten-Kette:** Kreatinin-Clearance 1,4 mL/s. In mL/min: 1,4 \u00d7 60 = **84 mL/min**. In L/h: 84 \u00d7 60/1000 = **5,04 L/h**.

**Beispiel 4 -- Praefixsprung:** 0,25 mg = ? \u00b5g. Schritt: mg \u2192 \u00b5g = \u00d71000. Also 0,25 \u00d7 1000 = **250 \u00b5g**. Rueckwaerts: 250 \u00b5g = 250/1000 mg = 0,25 mg.

## MedAT-Fokus

**Zur gezielten Pruefungsvorbereitung** im Ueberblick:

**Zentral pruefungsrelevant:**
- SI-Praefixe: mg, \u00b5g, ng sicher umrechnen (Faktor 1000 je Stufe)
- Kettenmethode fuer zusammengesetzte Einheiten (mL/min \u2192 L/h)
- Glucose-Umrechnung: mmol/L \u00d7 18 = mg/dL
- Groessenordnungen abschaetzen (Plausibilitaetscheck)

**Haeufige Fragen:**
- \u201eRechne 0,5 mg in \u00b5g um\u201c \u2192 500 \u00b5g
- \u201eGlucose 7,0 mmol/L -- wie viel mg/dL?\u201c \u2192 126 mg/dL
- \u201eInfusionsrate 30 mL/h -- wie viel L/Tag?\u201c \u2192 0,72 L/Tag
- \u201eWelche Groessenordnung hat ein Virus?\u201c \u2192 nm (\u2248 100 nm)

**Typische Pruefungsfallen:**
- Umrechnungsrichtung verwechseln: Von mg zu \u00b5g = \u00d71000 (nicht \u00f71000!)
- Glucose-Faktor 18 vergessen oder mit 1,8 oder 180 verwechseln
- Bei zusammengesetzten Einheiten nur Zaehler oder nur Nenner umrechnen
- dL mit mL verwechseln: 1 dL = 100 mL (Deziliter!)

---

## Zusammenfassung (ultrakompakt)

- **SI-Praefixe:** kilo (10\u00b3) \u2192 Basis \u2192 milli (10\u207b\u00b3) \u2192 mikro (10\u207b\u2076) \u2192 nano (10\u207b\u2079); Faktor 1000 je Stufe
- **Kettenmethode:** Umrechnungsfaktoren als Brueche schreiben, Einheiten kuerzen lassen
- **Glucose:** mmol/L \u00d7 18 = mg/dL; nuechtern normal: \u2248 5 mmol/L \u2248 90 mg/dL
- **mg \u2194 \u00b5g:** \u00d7 1000 (runter); \u00f7 1000 (rauf); 0,25 mg = 250 \u00b5g
- **mL/min \u2192 L/h:** \u00d7 60 (min\u2192h) \u00f7 1000 (mL\u2192L); oder \u00d7 0,06
- **Groessenordnungen:** Virus \u2248 100 nm, Zelle \u2248 10 \u00b5m, GFR \u2248 100 mL/min, Blut \u2248 5 L
- **Pruefungstipp:** Immer Einheiten mitfuehren -- sie sind dein Fehlerdetektor!`,
      lernziele: [
        "SI-Praefixe (nano bis mega) und ihre Zehnerpotenzen sicher beherrschen",
        "Die Kettenmethode fuer zusammengesetzte Einheitenumrechnungen anwenden",
        "Glucose zwischen mmol/L und mg/dL umrechnen (Faktor 18)",
        "Klinische Groessenordnungen abschaetzen und als Plausibilitaetscheck nutzen",
      ],
      merksätze: [
        "Zwischen Nachbar-Praefixen (mg \u2192 \u00b5g \u2192 ng) liegen immer 3 Zehnerpotenzen = Faktor 1000.",
        "Kettenmethode: Umrechnungsfaktoren als Brueche, ungewollte Einheiten kuerzen sich weg.",
        "Glucose: mmol/L \u00d7 18 = mg/dL -- Faktor 18 auswendig lernen!",
        "Von gross nach klein: multiplizieren. Von klein nach gross: dividieren.",
        "Immer Einheiten mitfuehren -- sie sind der beste Fehlercheck.",
      ],
      klinischerBezug:
        "Einheitenumrechnung ist in der Klinik lebenswichtig. Medikamentendosierungen in \u00b5g/kg/min muessen in mL/h umgerechnet werden (Infusionspumpe). Laborwerte erscheinen je nach Land in mmol/L oder mg/dL -- die Glucose-Umrechnung (\u00d718) ist taeglich relevant. Die GFR (mL/min) bestimmt die Nierenfunktion und Dosisanpassung. Fehlerhafte Einheitenumrechnungen fuehren zu Ueber- oder Unterdosierungen und gehoeren zu den haeufigsten Medikationsfehlern weltweit (z. B. Verwechslung mg/\u00b5g: Faktor-1000-Fehler!).",
      selfTest: [
        {
          question: "Wie viel \u00b5g sind 0,35 mg?",
          options: ["350 \u00b5g", "35 \u00b5g", "3500 \u00b5g", "3,5 \u00b5g", "0,00035 \u00b5g"],
          correctIndex: 0,
          explanation:
            "1 mg = 1000 \u00b5g. Also 0,35 mg = 0,35 \u00d7 1000 = 350 \u00b5g. Von mg (groesser) zu \u00b5g (kleiner): multiplizieren mit 1000. Kettenmethode: 0,35 mg \u00d7 (1000 \u00b5g / 1 mg) = 350 \u00b5g -- die Einheit mg kuerzt sich.",
          hints: [
            "mg \u2192 \u00b5g: Einen Praefixschritt nach unten = \u00d7 1000.",
            "0,35 \u00d7 1000 = ?",
          ],
          difficulty: 1,
          tags: ["einheiten", "si-praefix", "umrechnung"],
        },
        {
          question: "Glucose 6,5 mmol/L -- wie viel mg/dL? (Molmasse Glucose = 180 g/mol)",
          options: ["117 mg/dL", "36 mg/dL", "1170 mg/dL", "65 mg/dL", "11,7 mg/dL"],
          correctIndex: 0,
          explanation:
            "Formel: mg/dL = mmol/L \u00d7 M/10 = mmol/L \u00d7 180/10 = mmol/L \u00d7 18. Rechnung: 6,5 \u00d7 18 = 117 mg/dL. Nuechtern-Normwert: 70--100 mg/dL; 117 mg/dL ist grenzwertig erhoet (Prediabetes ab 100 mg/dL nuechtern).",
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
          question: "Ein Virus ist ca. 100 nm gross. Wie viel \u00b5m entspricht das?",
          options: ["0,1 \u00b5m", "10 \u00b5m", "0,01 \u00b5m", "1 \u00b5m", "100 \u00b5m"],
          correctIndex: 0,
          explanation:
            "1 \u00b5m = 1000 nm. Also 100 nm = 100/1000 \u00b5m = 0,1 \u00b5m. Von nm (kleiner) zu \u00b5m (groesser): dividieren durch 1000. Zum Vergleich: Ein Erythrozyt misst 8 \u00b5m -- also 80-mal groesser als ein typisches Virus.",
          hints: [
            "nm \u2192 \u00b5m: Einen Praefixschritt nach oben = \u00f7 1000.",
            "100 / 1000 = ?",
          ],
          difficulty: 1,
          tags: ["einheiten", "si-praefix", "groessenordnung"],
        },
        {
          question:
            "Dopamin 5 \u00b5g/kg/min, Patient 60 kg, Loesung 200 mg in 50 mL. Wie hoch ist die Infusionsrate?",
          options: ["4,5 mL/h", "0,075 mL/min", "9 mL/h", "0,3 mL/h", "45 mL/h"],
          correctIndex: 0,
          explanation:
            "Schritt 1: Dosis/min = 5 \u00b5g/kg/min \u00d7 60 kg = 300 \u00b5g/min. Schritt 2: Konz. = 200 mg/50 mL = 4 mg/mL = 4000 \u00b5g/mL. Schritt 3: Rate = 300/4000 = 0,075 mL/min. Schritt 4: 0,075 \u00d7 60 = 4,5 mL/h. Option B (0,075 mL/min) ist zahlenmaeig auch korrekt, aber die klinisch uebliche Einheit ist mL/h.",
          hints: [
            "Erst Gesamtdosis/min berechnen, dann durch Konzentration teilen.",
            "300 \u00b5g/min \u00f7 4000 \u00b5g/mL = 0,075 mL/min. Mal 60 = ? mL/h.",
          ],
          difficulty: 3,
          tags: ["einheiten", "kettenmethode", "dosierung", "infusion"],
        },
      ],
    },
  ],
};
