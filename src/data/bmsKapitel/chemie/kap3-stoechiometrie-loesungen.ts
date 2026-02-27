import type { Kapitel } from "../types";

export const chemKapStoech: Kapitel = {
  id: "chem-kap-stoech",
  title: "Stöchiometrie, Mol-Konzept & Lösungen",
  subject: "chemie",
  icon: "⚖️",
  estimatedTime: "120 min",
  unterkapitel: [
    // === UK 1: Mol-Konzept & Avogadro ===
    {
      id: "ch-3s-01",
      title: "Mol-Konzept & Avogadro",
      stichworte: [
        "Mol",
        "Avogadro-Zahl",
        "Molare Masse",
        "Stoffmenge",
        "Teilchenanzahl",
        "Umrechnungen",
        "Glucose",
        "Medikamentendosis",
        "Dalton",
        "Atommasse",
      ],
      content: `## Einleitung

Ein Patient erhält eine Glucose-Infusion: 500 mL einer 5%-Lösung. Wie viele Glucose-Moleküle gelangen dabei in den Blutkreislauf? Die Antwort liefert das **Mol-Konzept** — das zentrale Bindeglied zwischen der makroskopischen Welt (Gramm, Liter) und der atomaren Welt (einzelne Teilchen). Ohne das Mol wäre es unmöglich, chemische Reaktionen quantitativ zu beschreiben, Medikamente korrekt zu dosieren oder Laborwerte zu interpretieren.

**In diesem Kapitel lernst du:**
- was ein Mol ist und warum die Avogadro-Zahl N_A = 6,022 × 10²³ mol⁻¹ so zentral ist
- wie du die molare Masse M aus dem Periodensystem abliest und berechnest
- wie du sicher zwischen Masse (g), Stoffmenge (mol) und Teilchenanzahl (N) umrechnest
- warum die Einheit Dalton (Da) in der Biochemie verwendet wird
- wie du Glucose-Infusionen und Medikamentendosen auf molekularer Ebene berechnest

---

{{DIAGRAM:molecular-structure}}

## Das Mol — die SI-Einheit der Stoffmenge

Die **Stoffmenge n** (Einheit: Mol) gibt an, wie viele Teilchen (Atome, Moleküle, Ionen, Elektronen) in einer Probe enthalten sind. Die Definition seit 2019 (SI-Reform):

**1 Mol = exakt 6,022 140 76 × 10²³ Teilchen** (Avogadro-Zahl N_A).

Das Mol ist eine Zähleinheit — ähnlich wie „ein Dutzend = 12 Stück", nur astronomisch größer. Die Avogadro-Zahl wurde so gewählt, dass 1 Mol Kohlenstoff-12-Atome exakt 12 g wiegt.

> **Merke:** 1 Mol = 6,022 × 10²³ Teilchen. Die Avogadro-Zahl N_A verbindet die makroskopische Welt (Gramm) mit der atomaren Welt (Teilchen).

---

## Molare Masse M

Die **molare Masse M** gibt die Masse von 1 Mol eines Stoffes in g/mol an. Sie entspricht numerisch der relativen Atommasse (aus dem PSE) bzw. der Summenformel-Masse bei Molekülen:

- **Elemente:** M(C) = 12,01 g/mol, M(O) = 16,00 g/mol, M(H) = 1,008 g/mol, M(Na) = 22,99 g/mol
- **Moleküle:** M(H₂O) = 2 × 1,008 + 16,00 = **18,02 g/mol**; M(C₆H₁₂O₆, Glucose) = 6 × 12,01 + 12 × 1,008 + 6 × 16,00 = **180,16 g/mol**; M(NaCl) = 22,99 + 35,45 = **58,44 g/mol**

In der Biochemie wird statt g/mol oft **Dalton (Da)** oder **kDa** verwendet: 1 Da = 1 g/mol. Hämoglobin hat z. B. eine Molmasse von ca. 64.500 Da = 64,5 kDa.

> **Merke:** M(Stoff) = Summe aller Atommassen aus dem PSE. 1 Da = 1 g/mol. Glucose: 180 g/mol, NaCl: 58,4 g/mol, H₂O: 18 g/mol — diese Werte auswendig kennen!

---

## Die drei Grundformeln: n, m, N

Das Dreieck der Umrechnungen:

- **n = m / M** (Stoffmenge = Masse / Molare Masse)
- **m = n × M** (Masse = Stoffmenge × Molare Masse)
- **N = n × N_A** (Teilchenanzahl = Stoffmenge × Avogadro-Zahl)

Daraus auch: **n = N / N_A** und **m = N × M / N_A**

{{DIAGRAM:periodic-table}}

## Rechenbeispiel 1: Glucose-Infusion

**Aufgabe:** 500 mL einer 5%-Glucose-Lösung (ρ ≈ 1 g/mL). Wie viel Mol Glucose enthält sie? Wie viele Moleküle?

**Lösung:**
1. Masse Glucose: 5 % von 500 g = **25 g**
2. Stoffmenge: n = m/M = 25 g / 180,16 g/mol = **0,139 mol**
3. Teilchenanzahl: N = n × N_A = 0,139 × 6,022 × 10²³ = **8,37 × 10²² Moleküle**

## Rechenbeispiel 2: Medikamentendosis

**Aufgabe:** Ein Patient erhält 500 mg Paracetamol (M = 151,16 g/mol). Wie viele Mol sind das?

**Lösung:** n = m/M = 0,500 g / 151,16 g/mol = **3,31 × 10⁻³ mol = 3,31 mmol**

> **Merke:** Rechenweg immer: Masse (g) → Stoffmenge (mol) über n = m/M → Teilchenanzahl (N) über N = n × N_A. Einheiten konsequent umrechnen (mg → g)!

---

## Atomare Masseneinheit und relative Atommasse

Die **atomare Masseneinheit u** (unified atomic mass unit) ist definiert als 1/12 der Masse eines ¹²C-Atoms: 1 u = 1,6605 × 10⁻²⁴ g. Die **relative Atommasse A_r** (dimensionslos) gibt an, wie schwer ein Atom im Vergleich zu 1/12 ¹²C ist. Numerisch: A_r(C) = 12,01 → M(C) = 12,01 g/mol.

Bisher haben wir die Grundlagen des Mol-Konzepts kennengelernt. Um das zu verstehen, wie man mit Mol-Angaben chemische Reaktionen quantitativ berechnet, schauen wir uns im nächsten Kapitel die Stöchiometrie an.

## MedAT-Fokus

**Zentral prüfungsrelevant:**
- Avogadro-Zahl: N_A = 6,022 × 10²³ mol⁻¹
- Umrechnungsdreieck: n = m/M, N = n × N_A
- Molare Massen berechnen (Summenformel + PSE)
- Glucose: 180 g/mol, H₂O: 18 g/mol, NaCl: 58,4 g/mol

**Häufige Fragen:**
- Wie viel Mol sind X Gramm eines Stoffes?
- Wie viele Teilchen enthält eine bestimmte Masse?
- Molare Masse aus Summenformel berechnen

**Typische Prüfungsfallen:**
- mg vs. g nicht umgerechnet → Faktor 1000 Fehler
- 1 Mol H₂O ≠ 1 Mol H-Atome (1 Mol H₂O = 2 Mol H + 1 Mol O)
- Dalton und g/mol numerisch gleich, aber verschiedene Einheiten

## Zusammenfassung

- **1 Mol = 6,022 × 10²³ Teilchen** (Avogadro-Zahl N_A)
- **Molare Masse M** = Summe der Atommassen [g/mol]; 1 Da = 1 g/mol
- **Umrechnungen:** n = m/M; N = n × N_A; m = N × M/N_A
- **Klinisch:** Glucose 180 g/mol, NaCl 58,4 g/mol, H₂O 18 g/mol — Standardwerte für Infusions- und Laborberechnungen`,
      merksätze: [
        "1 Mol = 6,022 × 10²³ Teilchen (Avogadro-Zahl N_A) — die Brücke zwischen Gramm und Atomen.",
        "Molare Masse M [g/mol] = Summe aller Atommassen aus dem PSE; 1 Dalton = 1 g/mol.",
        "Umrechnungsdreieck: n = m/M (Masse → Mol), N = n × N_A (Mol → Teilchen).",
        "Glucose: 180 g/mol, NaCl: 58,4 g/mol, H₂O: 18 g/mol — diese Werte auswendig können!",
        "Einheiten immer prüfen: mg → g umrechnen, bevor man n = m/M anwendet.",
      ],
      klinischerBezug:
        "In der Klinik werden Medikamentendosen in mg oder g angegeben, Laborwerte jedoch oft in mmol/L (z. B. Glucose: 3,9–5,5 mmol/L nüchtern). Das Mol-Konzept ist unentbehrlich für die Umrechnung zwischen Masse- und Stoffmengenkonzentration. Infusionslösungen (z. B. Glucose 5 %, NaCl 0,9 %) werden über n = m/M auf ihren molaren Gehalt berechnet, um isotone Bedingungen sicherzustellen.",
      diagram: "molecular-structure",
      selfTest: [
        {
          question: "Wie viel Mol Glucose (M = 180 g/mol) sind in 36 g Glucose enthalten?",
          options: ["A) 0,1 mol", "B) 0,2 mol", "C) 0,5 mol", "D) 1,0 mol", "E) 5,0 mol"],
          correctIndex: 1,
          explanation:
            "n = m/M = 36 g / 180 g/mol = 0,2 mol. Die molare Masse von Glucose beträgt 180 g/mol (6×12 + 12×1 + 6×16). 36 g sind genau ein Fünftel von 180 g, also 0,2 mol.",
          hints: [
            "Verwende n = m/M. Die molare Masse M von Glucose (C₆H₁₂O₆) beträgt 180 g/mol.",
            "36 geteilt durch 180 — vereinfache den Bruch.",
          ],
          difficulty: 1,
          tags: ["mol", "glucose", "rechnen"],
        },
        {
          question: "Wie viele Wassermoleküle (M = 18 g/mol) sind in 9 g Wasser enthalten?",
          options: [
            "A) 3,01 × 10²³",
            "B) 6,02 × 10²³",
            "C) 1,20 × 10²⁴",
            "D) 9,03 × 10²³",
            "E) 3,01 × 10²²",
          ],
          correctIndex: 0,
          explanation:
            "n = m/M = 9/18 = 0,5 mol. N = n × N_A = 0,5 × 6,022 × 10²³ = 3,01 × 10²³ Moleküle. 9 g Wasser sind ein halbes Mol, also die Hälfte der Avogadro-Zahl.",
          hints: [
            "Erst Stoffmenge berechnen: n = m/M = 9 g / 18 g/mol.",
            "Dann: N = n × N_A. Die Hälfte von 6,022 × 10²³ ist …",
          ],
          difficulty: 1,
          tags: ["teilchenanzahl", "avogadro", "wasser"],
        },
        {
          question:
            "Welche molare Masse hat Calciumcarbonat CaCO₃ (Ca = 40, C = 12, O = 16 g/mol)?",
          options: ["A) 68 g/mol", "B) 84 g/mol", "C) 100 g/mol", "D) 116 g/mol", "E) 44 g/mol"],
          correctIndex: 2,
          explanation:
            "M(CaCO₃) = 40 + 12 + 3 × 16 = 40 + 12 + 48 = 100 g/mol. Option E (44 g/mol) ist die Molmasse von CO₂. Häufiger Fehler: Nur CO₃ berechnen (12 + 48 = 60) und Ca vergessen.",
          hints: [
            "Addiere die Atommassen aller Atome in der Summenformel: Ca + C + 3×O.",
            "Achtung: CaCO₃ enthält 3 Sauerstoff-Atome, nicht nur 1.",
          ],
          difficulty: 1,
          tags: ["molare-masse", "summenformel", "berechnung"],
        },
        {
          question:
            "Ein Patient erhält 500 mg Paracetamol (M = 151 g/mol). Welche Stoffmenge entspricht das?",
          options: ["A) 0,33 mol", "B) 3,31 mol", "C) 3,31 mmol", "D) 33,1 mmol", "E) 0,033 mmol"],
          correctIndex: 2,
          explanation:
            "Erst mg in g umrechnen: 500 mg = 0,500 g. Dann n = m/M = 0,500/151 = 0,00331 mol = 3,31 mmol. Typische Falle: mg nicht in g umgerechnet → Faktor 1000 daneben.",
          hints: [
            "Achtung: 500 mg müssen zuerst in Gramm umgerechnet werden (÷ 1000).",
            "n = 0,5 g / 151 g/mol. Das Ergebnis ist klein — in mmol angeben.",
          ],
          difficulty: 2,
          tags: ["medikament", "umrechnung", "mg-g"],
        },
        {
          question: "Welche Aussage zum Mol-Konzept ist FALSCH?",
          options: [
            "A) 1 Mol H₂O enthält 2 Mol Wasserstoffatome und 1 Mol Sauerstoffatome.",
            "B) Die Avogadro-Zahl beträgt 6,022 × 10²³ mol⁻¹.",
            "C) 1 Mol eines Stoffes wiegt immer exakt 1 Gramm.",
            "D) 1 Dalton entspricht numerisch 1 g/mol.",
            "E) Die molare Masse von CO₂ beträgt 44 g/mol.",
          ],
          correctIndex: 2,
          explanation:
            "C ist FALSCH: 1 Mol wiegt M Gramm (die molare Masse, nicht 1 g). 1 Mol H₂O wiegt 18 g, 1 Mol Glucose wiegt 180 g. Nur 1 Mol Wasserstoffatome wiegt ca. 1 g. Alle anderen Aussagen sind korrekt.",
          hints: [
            "Suche die falsche Aussage. Überlege: Wiegt 1 Mol jedes Stoffes gleich viel?",
            "1 Mol H₂O = 18 g, 1 Mol NaCl = 58,4 g — die Masse hängt von M ab.",
          ],
          difficulty: 2,
          tags: ["mol-konzept", "falsch-aussage", "molare-masse"],
        },
      ],
    },

    // === UK 2: Stöchiometrie & Reaktionsgleichungen ===
    {
      id: "ch-3s-02",
      title: "Stöchiometrie & Reaktionsgleichungen",
      stichworte: [
        "Reaktionsgleichung",
        "Ausgleichen",
        "Stöchiometrische Koeffizienten",
        "Massenerhaltung",
        "Limitierendes Reagenz",
        "Überschuss",
        "Ausbeute",
        "Massenberechnung",
        "Neutralisation",
        "Verbrennungsreaktion",
      ],
      content: `## Einleitung

Bei einer Überdosierung mit Magensäure-bedingten Beschwerden verschreibt der Arzt ein Antacidum: Magnesiumhydroxid Mg(OH)₂ neutralisiert die Salzsäure HCl im Magen. Doch wie viel Antacidum wird benötigt, um eine bestimmte Menge HCl zu neutralisieren? Die Antwort liefert die **Stöchiometrie** — die quantitative Sprache der Chemie, die mithilfe ausgeglichener Reaktionsgleichungen exakte Mengenbeziehungen zwischen Edukten und Produkten herstellt.

**In diesem Kapitel lernst du:**
- wie man chemische Reaktionsgleichungen systematisch ausgleicht
- was stöchiometrische Koeffizienten aussagen und wie man damit rechnet
- wie du aus der Masse eines Edukts die Masse eines Produkts berechnen kannst
- was ein limitierendes Reagenz ist und wie es die Ausbeute bestimmt
- klinische Anwendungen: Neutralisation von Magensäure, CO₂-Produktion bei Stoffwechselreaktionen

---

{{DIAGRAM:reaction-energy-diagram}}

## Chemische Reaktionsgleichungen

Eine chemische Reaktionsgleichung beschreibt den Umbau von Edukten (Ausgangsstoffen) zu Produkten. Sie muss **ausgeglichen** sein — das Gesetz der Massenerhaltung (Lavoisier) verlangt:

**Auf beiden Seiten des Reaktionspfeils muss die gleiche Anzahl jeder Atomsorte stehen.**

Beispiel — Verbrennung von Methan:
- Unausgeglichen: CH₄ + O₂ → CO₂ + H₂O
- Ausgeglichen: **CH₄ + 2 O₂ → CO₂ + 2 H₂O**
- Prüfung: links C:1, H:4, O:4 — rechts C:1, H:4, O:4 ✓

Die Koeffizienten (1, 2, 1, 2) geben die **Stoffmengenverhältnisse** an: 1 mol CH₄ reagiert mit 2 mol O₂ zu 1 mol CO₂ und 2 mol H₂O.

> **Merke:** Stöchiometrische Koeffizienten geben Molverhältnisse an, nicht Massenverhältnisse! 1 mol CH₄ (16 g) + 2 mol O₂ (64 g) → 1 mol CO₂ (44 g) + 2 mol H₂O (36 g). Massenerhaltung: 80 g = 80 g ✓

---

## Systematisches Ausgleichen

**Schrittweise Methode:**
1. Summenformel aller Edukte und Produkte aufschreiben
2. Element mit den meisten Bindungspartnern zuerst ausgleichen (oft Metalle oder C)
3. Dann H, zuletzt O
4. Gegebenenfalls alle Koeffizienten mit kleinstem Faktor multiplizieren, um ganze Zahlen zu erhalten
5. **Kontrolle:** Atomanzahl links = rechts für JEDES Element

Beispiel — Neutralisation: **Mg(OH)₂ + 2 HCl → MgCl₂ + 2 H₂O**
- Mg: 1 = 1 ✓, O: 2 = 2 ✓, H: 2+2 = 4 = 4 ✓, Cl: 2 = 2 ✓

{{DIAGRAM:molecular-structure}}

## Stöchiometrisches Rechnen

Der Rechenweg folgt immer dem gleichen Schema:

**Masse Edukt → Mol Edukt → (Koeffizientenverhältnis) → Mol Produkt → Masse Produkt**

### Rechenbeispiel: CO₂ aus Glucose-Verbrennung

**Aufgabe:** Wie viel Gramm CO₂ entstehen bei vollständiger Verbrennung von 90 g Glucose (C₆H₁₂O₆)?

**Gleichung:** C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O

**Lösung:**
1. n(Glucose) = m/M = 90 / 180 = **0,5 mol**
2. Koeffizientenverhältnis: 1 mol Glucose → 6 mol CO₂
3. n(CO₂) = 6 × 0,5 = **3 mol**
4. m(CO₂) = n × M = 3 × 44 = **132 g**

> **Merke:** Stöchiometrisches Rechnen: g → mol (÷M) → Koeffizientenverhältnis → mol → g (×M). Die Koeffizienten sind das Herzstück!

---

## Limitierendes Reagenz und Ausbeute

Wenn Edukte nicht im exakten stöchiometrischen Verhältnis vorliegen, bestimmt das **limitierende Reagenz** (Mangelreagenz) die maximale Produktmenge. Das andere Reagenz ist im **Überschuss**.

### Rechenbeispiel: Limitierendes Reagenz

**Aufgabe:** 10 g H₂ reagieren mit 80 g O₂. Wie viel Wasser entsteht? (2 H₂ + O₂ → 2 H₂O)

**Lösung:**
1. n(H₂) = 10/2 = 5 mol; n(O₂) = 80/32 = 2,5 mol
2. Bedarf laut Gleichung: 5 mol H₂ brauchen 5/2 = 2,5 mol O₂ → exakt passend!
3. n(H₂O) = 5 mol → m(H₂O) = 5 × 18 = **90 g**

Wäre nur 1,5 mol O₂ vorhanden: Nur 3 mol H₂ können reagieren → O₂ ist limitierend → n(H₂O) = 3 mol = 54 g; 2 mol H₂ (4 g) bleiben im Überschuss.

**Theoretische Ausbeute** = maximal mögliche Produktmenge (aus stöchiometrischer Berechnung). **Tatsächliche Ausbeute** ist in der Praxis oft geringer (Nebenreaktionen, unvollständige Reaktion). **Prozentuale Ausbeute** = (tatsächlich / theoretisch) × 100 %.

> **Merke:** Das limitierende Reagenz bestimmt die maximale Produktmenge. Identifizierung: Für jedes Edukt berechnen, wie viel Produkt es maximal liefern kann — das Edukt mit dem geringsten Produktertrag ist limitierend.

---

## Klinische Anwendungen

**Neutralisation von Magensäure:** Mg(OH)₂ + 2 HCl → MgCl₂ + 2 H₂O. Ein Antacidum-Tablette mit 300 mg Mg(OH)₂ neutralisiert: n = 0,300/58,3 = 5,15 mmol → neutralisiert 10,3 mmol HCl.

**CO₂-Produktion im Stoffwechsel:** Bei vollständiger Oxidation von 1 mol Glucose (180 g) entstehen 6 mol CO₂ (264 g). Der **respiratorische Quotient** RQ = CO₂ produziert / O₂ verbraucht = 6/6 = 1,0 für Kohlenhydrate.

Bisher haben wir gelernt, wie Mengenbeziehungen in Reaktionen funktionieren. Um das zu verstehen, wie man diese Stoffe in Lösungen quantifiziert, brauchen wir Konzentrationsangaben — das Thema des nächsten Unterkapitels.

## MedAT-Fokus

**Zentral prüfungsrelevant:**
- Reaktionsgleichungen ausgleichen (Atombilanzen)
- Stöchiometrisches Rechnen: g → mol → Verhältnis → mol → g
- Limitierendes Reagenz identifizieren
- Massenerhaltung bei chemischen Reaktionen

**Häufige Fragen:**
- Wie viel Gramm Produkt entstehen aus X g Edukt?
- Welches Reagenz ist limitierend?
- Reaktionsgleichung ausgleichen und Koeffizienten bestimmen

**Typische Prüfungsfallen:**
- Koeffizienten als Massenverhältnisse missverstanden (sie sind Molverhältnisse!)
- Vergessen, beide Seiten auf Atomgleichheit zu prüfen
- Bei Mg(OH)₂: 2 OH-Gruppen übersehen → falsches Ausgleichen

## Zusammenfassung

- **Massenerhaltung:** Atome links = Atome rechts; Koeffizienten geben Molverhältnisse an
- **Rechenweg:** m → n (÷M) → Koeffizientenverhältnis → n → m (×M)
- **Limitierendes Reagenz:** bestimmt maximale Produktmenge; anderes Reagenz im Überschuss
- **Ausbeute:** theoretisch (100 %) vs. tatsächlich; % Ausbeute = (real/theoretisch) × 100
- **Klinisch:** Antacida-Dosierung (Neutralisation), RQ = 1,0 für Kohlenhydrate (CO₂/O₂-Verhältnis)`,
      merksätze: [
        "Stöchiometrische Koeffizienten sind Molverhältnisse, nicht Massenverhältnisse!",
        "Rechenweg: g → mol (÷M) → Koeffizientenverhältnis → mol → g (×M).",
        "Massenerhaltung: Die Gesamtmasse der Edukte equals die Gesamtmasse der Produkte.",
        "Limitierendes Reagenz = das Edukt, das zuerst aufgebraucht wird → bestimmt die maximale Produktmenge.",
        "Glucose-Verbrennung: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O — RQ = 1,0 für Kohlenhydrate.",
      ],
      klinischerBezug:
        "Stöchiometrische Berechnungen sind in der Pharmazie (Wirkstoff-Synthese, Dosierung) und Klinik allgegenwärtig. Antacida neutralisieren Magensäure in definiertem Molverhältnis. Der respiratorische Quotient (RQ) — das stöchiometrische Verhältnis CO₂/O₂ — gibt Auskunft über den Substratmix der Energiegewinnung (RQ = 1,0 für KH, 0,7 für Fette). In der Dialyse wird die Harnstoff-Clearance stöchiometrisch aus der Dialysatmenge berechnet.",
      diagram: "reaction-energy-diagram",
      selfTest: [
        {
          question:
            "Wie lautet die korrekt ausgeglichene Gleichung für die Verbrennung von Ethanol C₂H₅OH?",
          options: [
            "A) C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O",
            "B) C₂H₅OH + 2 O₂ → 2 CO₂ + 2 H₂O",
            "C) C₂H₅OH + O₂ → CO₂ + H₂O",
            "D) 2 C₂H₅OH + 5 O₂ → 4 CO₂ + 6 H₂O",
            "E) C₂H₅OH + 3 O₂ → 2 CO₂ + 2 H₂O",
          ],
          correctIndex: 0,
          explanation:
            "C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O. Prüfung: C: 2=2 ✓, H: 6=6 ✓, O: 1+6=7 und 4+3=7 ✓. Option D ist zwar auch korrekt ausgeglichen, aber nicht die kürzeste Form (alle Koeffizienten halbierbar zu Option A).",
          hints: [
            "Zähle zuerst C-Atome (2 links → 2 CO₂), dann H-Atome (6 → 3 H₂O), dann O-Atome.",
            "Links: 1 O aus Ethanol + X×2 O aus O₂. Rechts: 2×2 + 3×1 = 7 O-Atome → 6 O aus O₂ nötig → 3 O₂.",
          ],
          difficulty: 2,
          tags: ["ausgleichen", "verbrennung", "ethanol"],
        },
        {
          question:
            "Bei der Reaktion 2 Al + 3 Cl₂ → 2 AlCl₃: Wie viel Gramm AlCl₃ (M = 133,5 g/mol) entstehen aus 5,4 g Aluminium (M = 27 g/mol)?",
          options: ["A) 13,35 g", "B) 26,7 g", "C) 40,05 g", "D) 53,4 g", "E) 66,75 g"],
          correctIndex: 1,
          explanation:
            "n(Al) = 5,4/27 = 0,2 mol. Verhältnis: 2 mol Al → 2 mol AlCl₃ (1:1). n(AlCl₃) = 0,2 mol. m(AlCl₃) = 0,2 × 133,5 = 26,7 g. Das Koeffizientenverhältnis Al:AlCl₃ = 2:2 = 1:1 vereinfacht die Rechnung.",
          hints: [
            "Berechne n(Al) = m/M. Dann Koeffizientenverhältnis 2 Al : 2 AlCl₃ = 1:1.",
            "n(AlCl₃) = n(Al). Dann m = n × M(AlCl₃).",
          ],
          difficulty: 2,
          tags: ["stöchiometrie", "massenberechnung", "rechnen"],
        },
        {
          question:
            "4 g H₂ (M = 2) und 32 g O₂ (M = 32) reagieren: 2 H₂ + O₂ → 2 H₂O. Welche Aussage ist korrekt?",
          options: [
            "A) O₂ ist limitierend; es entstehen 18 g H₂O.",
            "B) H₂ ist limitierend; es entstehen 36 g H₂O.",
            "C) Beide Reagenzien sind exakt im stöchiometrischen Verhältnis; es entstehen 36 g H₂O.",
            "D) O₂ ist limitierend; es entstehen 36 g H₂O.",
            "E) H₂ ist limitierend; es entstehen 18 g H₂O.",
          ],
          correctIndex: 2,
          explanation:
            "n(H₂) = 4/2 = 2 mol, n(O₂) = 32/32 = 1 mol. Verhältnis laut Gleichung: 2 H₂ : 1 O₂. Tatsächliches Verhältnis: 2:1 — exakt passend! n(H₂O) = 2 mol → m = 2 × 18 = 36 g. Massenerhaltung: 4 + 32 = 36 ✓.",
          hints: [
            "Berechne die Stoffmengen beider Edukte und vergleiche mit dem Koeffizientenverhältnis 2:1.",
            "Wenn das Verhältnis exakt stimmt, ist keines limitierend.",
          ],
          difficulty: 2,
          tags: ["limitierendes-reagenz", "stöchiometrie", "rechnen"],
        },
        {
          question:
            "Was versteht man unter dem respiratorischen Quotienten (RQ) und welchen Wert hat er für reine Kohlenhydratverbrennung?",
          options: [
            "A) RQ = CO₂ produziert / O₂ verbraucht; RQ = 1,0",
            "B) RQ = O₂ verbraucht / CO₂ produziert; RQ = 1,0",
            "C) RQ = CO₂ produziert / O₂ verbraucht; RQ = 0,7",
            "D) RQ = CO₂ / N₂; RQ = 0,8",
            "E) RQ = O₂ / CO₂; RQ = 0,7",
          ],
          correctIndex: 0,
          explanation:
            "RQ = V(CO₂ produziert) / V(O₂ verbraucht). Für Glucose: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O → RQ = 6/6 = 1,0. Für Fette ist RQ ≈ 0,7 (mehr O₂ nötig pro CO₂). Für Proteine RQ ≈ 0,8. Ein gemischter RQ von 0,85 ist typisch für Normalkost.",
          hints: [
            "RQ ist definiert als produziertes CO₂ geteilt durch verbrauchtes O₂.",
            "Bei Glucose: 6 CO₂ / 6 O₂ = 1,0. Fette brauchen mehr O₂ → RQ < 1.",
          ],
          difficulty: 2,
          tags: ["rq", "stoffwechsel", "glucose-verbrennung"],
        },
        {
          question: "Welche der folgenden Reaktionsgleichungen ist NICHT korrekt ausgeglichen?",
          options: [
            "A) 2 H₂ + O₂ → 2 H₂O",
            "B) N₂ + 3 H₂ → 2 NH₃",
            "C) CaCO₃ → CaO + CO₂",
            "D) Fe + O₂ → Fe₂O₃",
            "E) CH₄ + 2 O₂ → CO₂ + 2 H₂O",
          ],
          correctIndex: 3,
          explanation:
            "D ist NICHT korrekt ausgeglichen: Links 1 Fe + 2 O, rechts 2 Fe + 3 O. Korrekt: 4 Fe + 3 O₂ → 2 Fe₂O₃. Alle anderen Gleichungen sind korrekt ausgeglichen: A: H 4=4, O 2=2 ✓; B: N 2=2, H 6=6 ✓; C: Ca 1=1, C 1=1, O 3=3 ✓; E: C 1=1, H 4=4, O 4=4 ✓.",
          hints: [
            "Prüfe für jede Gleichung: Ist die Atomanzahl links = rechts für jedes Element?",
            "Bei D: Wie viele Fe-Atome stehen links, wie viele rechts?",
          ],
          difficulty: 1,
          tags: ["ausgleichen", "atombilanzen", "fehlersuche"],
        },
      ],
    },

    // === UK 3: Lösungen, Konzentration & Löslichkeit ===
    {
      id: "ch-3s-03",
      title: "Lösungen, Konzentration & Löslichkeit",
      stichworte: [
        "Molarität",
        "Massenanteil",
        "Massenkonzentration",
        "Löslichkeit",
        "Löslichkeitsprodukt",
        "Verdünnungsformel",
        "Sättigungskonzentration",
        "Infusionslösung",
        "NaCl 0,9%",
        "Blutglucose",
      ],
      content: `## Einleitung

Ein Arzt ordnet eine „NaCl 0,9 %-Infusion" an — eine der häufigsten Anordnungen im Krankenhaus. Doch was bedeutet „0,9 %" genau? Wie viel NaCl steckt in einem Liter? Und wie rechnet man das in mmol/L um, um die Werte mit dem Blutbefund zu vergleichen? Die Antworten liefern die **Konzentrationsangaben** — unverzichtbare Werkzeuge für Medizin, Pharmazie und Labordiagnostik.

**In diesem Kapitel lernst du:**
- welche Konzentrationsangaben es gibt und wann welche verwendet wird
- wie du sicher zwischen Molarität, Massenanteil und Massenkonzentration umrechnest
- was Löslichkeit, Löslichkeitsprodukt und Sättigungskonzentration bedeuten
- wie die Verdünnungsformel c₁V₁ = c₂V₂ funktioniert und wann sie gilt
- klinische Anwendungen: NaCl 0,9 %, Blutglucose, Verdünnung von Medikamenten

---

{{DIAGRAM:molecular-structure}}

## Konzentrationsangaben im Überblick

Es gibt verschiedene Arten, die Konzentration eines gelösten Stoffes anzugeben:

### Molarität c (Stoffmengenkonzentration)

**c = n / V** [mol/L = M]

Die am häufigsten verwendete Konzentrationsangabe in der Chemie. Sie gibt die Stoffmenge des gelösten Stoffes pro Liter Lösung an.

- 1 M = 1 mol/L
- Klinisch üblich: mmol/L (z. B. Blutglucose: 3,9–5,5 mmol/L nüchtern)

### Massenanteil w (Gewichtsprozent)

**w = m(Stoff) / m(Lösung) × 100 %**

Gibt den Masseanteil des gelösten Stoffes bezogen auf die Gesamtmasse der Lösung an. „NaCl 0,9 %" bedeutet: 0,9 g NaCl in 100 g Lösung.

### Massenkonzentration β (oder ρ*)

**β = m(Stoff) / V(Lösung)** [g/L oder mg/dL]

Masse des gelösten Stoffes pro Volumen der Lösung. Klinisch relevant: Blutglucose wird oft in mg/dL angegeben (Normalwert: 70–100 mg/dL nüchtern).

### Weitere Angaben

- **Molalität b** = n(Stoff) / m(Lösungsmittel) [mol/kg] — temperaturunabhängig (kein Volumen!)
- **Molenbruch x** = n(Stoff) / n(gesamt) — dimensionslos, Summe aller x = 1
- **ppm** = mg/kg = mg/L (bei verdünnten wässrigen Lösungen) — für Spurenkonzentrationen

> **Merke:** Molarität (mol/L) ist volumenbasiert und temperaturabhängig. Molalität (mol/kg) ist massebasiert und temperaturunabhängig — wichtig für kolligative Eigenschaften!

---

## Umrechnungen zwischen Konzentrationsangaben

Bisher haben wir die Definitionen kennengelernt. Um das zu verstehen, wie man zwischen den verschiedenen Angaben umrechnet, betrachten wir ein praktisches Beispiel:

### Rechenbeispiel: NaCl 0,9 % → Molarität

**Aufgabe:** Welche Molarität hat physiologische Kochsalzlösung (NaCl 0,9 %, ρ ≈ 1,005 g/mL)?

**Lösung:**
1. 0,9 % bedeutet: 0,9 g NaCl in 100 g Lösung
2. In 1000 g Lösung: 9 g NaCl
3. Volumen von 1000 g Lösung: V = m/ρ = 1000/1,005 = 995 mL ≈ 1 L
4. n(NaCl) = 9/58,44 = 0,154 mol
5. c = n/V = 0,154 mol / 0,995 L ≈ **0,154 mol/L ≈ 154 mmol/L**

> **Merke:** NaCl 0,9 % ≈ 154 mmol/L NaCl → 154 mmol/L Na⁺ + 154 mmol/L Cl⁻ = 308 mmol/L Gesamtionenkonzentration (≈ 308 mosmol/L — isoton zum Blutplasma!).

{{DIAGRAM:periodic-table}}

---

## Verdünnungsformel

Bei der Verdünnung ändert sich die Stoffmenge nicht, nur das Volumen:

**c₁ × V₁ = c₂ × V₂**

### Rechenbeispiel: Verdünnung

**Aufgabe:** Aus einer 10 %igen NaCl-Stammlösung sollen 500 mL einer 0,9 %igen Lösung hergestellt werden. Wie viel Stammlösung wird benötigt?

**Lösung:** c₁V₁ = c₂V₂ → V₁ = c₂V₂/c₁ = 0,9 × 500 / 10 = **45 mL**

Man nimmt 45 mL der 10 %-Lösung und füllt mit destilliertem Wasser auf 500 mL auf.

> **Merke:** c₁V₁ = c₂V₂ gilt nur für Verdünnungen (Lösungsmittel hinzufügen). Bei Mischungen verschiedener Konzentrationen gilt die Mischungsregel (Mischungskreuz).

---

## Löslichkeit und Löslichkeitsprodukt

Die **Löslichkeit** gibt die maximale Menge eines Stoffes an, die sich in einem bestimmten Volumen Lösungsmittel bei gegebener Temperatur löst. Eine gesättigte Lösung enthält die maximal mögliche Konzentration.

**Löslichkeitsprodukt K_sp:** Für schwer lösliche Salze wie CaF₂ gilt im Gleichgewicht:

CaF₂ ⇌ Ca²⁺ + 2 F⁻ → **K_sp = [Ca²⁺] × [F⁻]²**

Allgemein für A_mB_n: **K_sp = [A]^m × [B]^n**

- K_sp ist temperaturabhängig und stoffspezifisch
- Wenn Ionenprodukt Q > K_sp → Niederschlag fällt aus
- Wenn Q < K_sp → Lösung ungesättigt, Stoff löst sich weiter

Klinisch wichtig: K_sp(CaCO₃) bestimmt, ob Nierensteine (Calciumoxalat, Calciumphosphat) ausfallen. Hohe Ca²⁺-Konzentration im Urin + alkalischer pH → erhöhtes Steinrisiko.

> **Merke:** K_sp = Produkt der Ionenkonzentrationen (mit Exponenten = stöchiometrische Koeffizienten). Ionenprodukt Q > K_sp → Fällung; Q < K_sp → Lösung noch nicht gesättigt.

---

## Blutglucose: Einheitenumrechnung

**Aufgabe:** Nüchtern-Blutzucker = 90 mg/dL. Wie viel ist das in mmol/L?

**Lösung:**
1. 90 mg/dL = 900 mg/L = 0,9 g/L
2. n = m/M = 0,9/180 = 0,005 mol/L = **5,0 mmol/L** ✓ (Normalbereich)

Umrechnungsfaktor Glucose: **mmol/L = mg/dL × 0,0555** (oder ÷ 18)

## MedAT-Fokus

**Zentral prüfungsrelevant:**
- Molarität c = n/V [mol/L]; Massenanteil w = m(Stoff)/m(Lösung) × 100 %
- Verdünnungsformel c₁V₁ = c₂V₂
- NaCl 0,9 % ≈ 154 mmol/L → isoton
- Löslichkeitsprodukt K_sp: Formel und Fällungsbedingung
- Blutglucose: mg/dL → mmol/L (÷ 18)

**Häufige Fragen:**
- Wie viel Gramm Stoff in X mL einer Y %-Lösung?
- Verdünnungsaufgaben mit c₁V₁ = c₂V₂
- Löslichkeitsprodukt berechnen oder Fällung vorhersagen

**Typische Prüfungsfallen:**
- Massenanteil (%) ≠ Molarität (mol/L) — verschiedene Bezugsgrößen!
- Verdünnungsformel gilt nur beim Hinzufügen von reinem Lösungsmittel
- NaCl dissoziiert: 154 mmol/L NaCl → 308 mosmol/L (2 Ionen pro Formeleinheit)

## Zusammenfassung

- **Molarität** c = n/V [mol/L] — Standardkonzentration in der Chemie
- **Massenanteil** w = m(Stoff)/m(Lösung) × 100 % — klinisch als „%" (NaCl 0,9 %)
- **Massenkonzentration** β = m/V [g/L, mg/dL] — Blutglucose: 70–100 mg/dL = 3,9–5,5 mmol/L
- **Verdünnung:** c₁V₁ = c₂V₂ (Stoffmenge bleibt gleich)
- **Löslichkeit:** K_sp = Ionenprodukt bei Sättigung; Q > K_sp → Niederschlag
- **NaCl 0,9 %** ≈ 154 mmol/L → 308 mosmol/L → isoton zum Plasma`,
      merksätze: [
        "Molarität c = n/V [mol/L]; Massenanteil w = m(Stoff)/m(Lösung) × 100 %; Massenkonzentration β = m/V [g/L].",
        "NaCl 0,9 % ≈ 154 mmol/L NaCl → 308 mosmol/L (isoton zum Blutplasma).",
        "Verdünnungsformel c₁V₁ = c₂V₂ — nur bei Zugabe von reinem Lösungsmittel gültig!",
        "Löslichkeitsprodukt K_sp: Q > K_sp → Fällung, Q < K_sp → ungesättigt.",
        "Blutglucose: mmol/L = mg/dL ÷ 18 (Umrechnungsfaktor für Glucose).",
      ],
      klinischerBezug:
        "Konzentrationsangaben sind im klinischen Alltag allgegenwärtig: Blutglucose (mg/dL oder mmol/L), Elektrolyte (mmol/L), Infusionslösungen (% oder g/L). Physiologische Kochsalzlösung (NaCl 0,9 %) ist isoton zum Blutplasma und die meistverwendete Infusionslösung. Laborwerte in verschiedenen Einheitensystemen (SI vs. konventionell) müssen sicher umgerechnet werden. Das Löslichkeitsprodukt erklärt die Bildung von Nierensteinen (CaOx, CaP) und Gallensteinen (Cholesterol).",
      diagram: "molecular-structure",
      selfTest: [
        {
          question:
            "Wie viel Gramm NaCl (M = 58,44 g/mol) sind in 500 mL einer 0,9 %igen NaCl-Lösung (ρ ≈ 1 g/mL) enthalten?",
          options: ["A) 0,9 g", "B) 4,5 g", "C) 9,0 g", "D) 45 g", "E) 0,45 g"],
          correctIndex: 1,
          explanation:
            "0,9 % bedeutet: 0,9 g NaCl pro 100 g Lösung. Bei 500 mL (≈ 500 g bei ρ ≈ 1): m = 0,9 × 500/100 = 4,5 g NaCl. Häufiger Fehler: 0,9 % von 500 mL nicht korrekt berechnen.",
          hints: [
            "0,9 % = 0,9 g pro 100 g (oder 100 mL bei ρ ≈ 1). Wie viel ist das in 500 mL?",
            "Dreisatz: 100 mL → 0,9 g, also 500 mL → ?",
          ],
          difficulty: 1,
          tags: ["nacl", "massenanteil", "infusion"],
        },
        {
          question:
            "Welche Molarität hat eine Lösung, in der 4 g NaOH (M = 40 g/mol) in 500 mL Wasser gelöst sind?",
          options: [
            "A) 0,1 mol/L",
            "B) 0,2 mol/L",
            "C) 0,4 mol/L",
            "D) 0,05 mol/L",
            "E) 2,0 mol/L",
          ],
          correctIndex: 1,
          explanation:
            "n(NaOH) = m/M = 4/40 = 0,1 mol. V = 500 mL = 0,5 L. c = n/V = 0,1/0,5 = 0,2 mol/L. Häufiger Fehler: Volumen nicht in Liter umrechnen (→ Faktor 1000 daneben).",
          hints: [
            "Berechne zuerst n = m/M, dann c = n/V. Vergiss nicht, mL in L umzurechnen!",
            "n = 4/40 = 0,1 mol. V = 0,5 L. c = ?",
          ],
          difficulty: 1,
          tags: ["molarität", "naoh", "rechnen"],
        },
        {
          question:
            "Aus 200 mL einer 5 mol/L HCl-Lösung soll eine 0,5 mol/L Lösung hergestellt werden. Welches Endvolumen ist nötig?",
          options: ["A) 500 mL", "B) 1000 mL", "C) 2000 mL", "D) 250 mL", "E) 100 mL"],
          correctIndex: 2,
          explanation:
            "c₁V₁ = c₂V₂ → V₂ = c₁V₁/c₂ = 5 × 200 / 0,5 = 2000 mL = 2 L. Die Lösung muss 10-fach verdünnt werden (5/0,5 = 10), also von 200 mL auf 2000 mL auffüllen.",
          hints: [
            "Verdünnungsformel: c₁V₁ = c₂V₂. Stelle nach V₂ um.",
            "Verdünnungsfaktor = c₁/c₂ = 5/0,5 = 10. V₂ = V₁ × 10.",
          ],
          difficulty: 2,
          tags: ["verdünnung", "c1v1", "rechnen"],
        },
        {
          question:
            "Für das schwer lösliche Salz AgCl (K_sp = 1,8 × 10⁻¹⁰) gilt AgCl ⇌ Ag⁺ + Cl⁻. Welche Sättigungskonzentration hat Ag⁺?",
          options: [
            "A) 1,34 × 10⁻⁵ mol/L",
            "B) 1,8 × 10⁻¹⁰ mol/L",
            "C) 9,0 × 10⁻⁶ mol/L",
            "D) 1,8 × 10⁻⁵ mol/L",
            "E) 4,24 × 10⁻³ mol/L",
          ],
          correctIndex: 0,
          explanation:
            "AgCl ⇌ Ag⁺ + Cl⁻. Sei s = [Ag⁺] = [Cl⁻]. K_sp = s × s = s². s = √(K_sp) = √(1,8 × 10⁻¹⁰) = 1,34 × 10⁻⁵ mol/L. Häufiger Fehler: K_sp nicht als Quadratwurzel aufzulösen.",
          hints: [
            "Für AgCl (1:1-Salz) gilt K_sp = s². Also s = √(K_sp).",
            "√(1,8 × 10⁻¹⁰): √1,8 ≈ 1,34 und √(10⁻¹⁰) = 10⁻⁵.",
          ],
          difficulty: 3,
          tags: ["löslichkeitsprodukt", "agcl", "rechnen"],
        },
        {
          question:
            "Ein Blutglucosewert wird mit 126 mg/dL gemessen. Wie viel ist das in mmol/L? (M_Glucose = 180 g/mol)",
          options: [
            "A) 5,0 mmol/L",
            "B) 7,0 mmol/L",
            "C) 12,6 mmol/L",
            "D) 2,27 mmol/L",
            "E) 22,7 mmol/L",
          ],
          correctIndex: 1,
          explanation:
            "126 mg/dL = 1260 mg/L = 1,26 g/L. n = m/M = 1,26/180 = 0,007 mol/L = 7,0 mmol/L. Schnellformel: mmol/L = mg/dL ÷ 18 = 126/18 = 7,0 mmol/L. Wert > 7,0 nüchtern = Diabetes-Diagnose!",
          hints: [
            "mg/dL → g/L: × 10 (von dL auf L). Dann n = m/M.",
            "Schneller: mmol/L = mg/dL ÷ 18 (für Glucose, da M = 180).",
          ],
          difficulty: 2,
          tags: ["blutglucose", "einheiten", "umrechnung"],
        },
      ],
    },

    // === UK 4: Kolligative Eigenschaften & Osmose ===
    {
      id: "ch-3s-04",
      title: "Kolligative Eigenschaften & Osmose",
      stichworte: [
        "Kolligative Eigenschaften",
        "Siedepunktserhöhung",
        "Gefrierpunktserniedrigung",
        "Osmotischer Druck",
        "Van't Hoff",
        "Osmolarität",
        "Osmolalität",
        "Isoton",
        "Hyperton",
        "Hypoton",
        "Hämolyse",
        "Dialyse",
      ],
      content: `## Einleitung

Warum platzen rote Blutkörperchen in destilliertem Wasser, schrumpfen in Salzlake, bleiben aber in physiologischer Kochsalzlösung intakt? Die Antwort liegt in den **kolligativen Eigenschaften** — Lösungseigenschaften, die nur von der **Teilchenanzahl** abhängen, nicht von der chemischen Natur des gelösten Stoffes. Osmose, Siedepunktserhöhung und Gefrierpunktserniedrigung gehören zu den wichtigsten Konzepten für das Verständnis von Infusionstherapie, Dialyse und Zellfunktion.

**In diesem Kapitel lernst du:**
- was kolligative Eigenschaften sind und warum nur die Teilchenanzahl zählt
- wie Siedepunktserhöhung (ΔT_b) und Gefrierpunktserniedrigung (ΔT_f) berechnet werden
- wie osmotischer Druck entsteht und warum die van't Hoff-Gleichung π = i·c·R·T gilt
- den Unterschied zwischen Osmolarität (mosmol/L) und Osmolalität (mosmol/kg)
- klinisch: isotone, hypertone, hypotone Lösungen — Hämolyse, Krenation, Dialyseprinzip

---

{{DIAGRAM:covalent-bond}}

## Kolligative Eigenschaften — Überblick

**Kolligative Eigenschaften** (lat. colligare = zusammenfassen) hängen nur von der **Anzahl gelöster Teilchen** ab, nicht von deren Art. Sie betreffen das Lösungsmittel:

1. **Dampfdruckerniedrigung** (Raoult'sches Gesetz): p_LM = x_LM × p°_LM
2. **Siedepunktserhöhung:** ΔT_b = K_b × b × i
3. **Gefrierpunktserniedrigung:** ΔT_f = K_f × b × i
4. **Osmotischer Druck:** π = i × c × R × T

Dabei ist **i = van't Hoff-Faktor**: Anzahl der Teilchen, in die ein Stoff in Lösung zerfällt.
- Glucose (Nichtelektrolyt): i = 1
- NaCl → Na⁺ + Cl⁻: i = 2
- CaCl₂ → Ca²⁺ + 2 Cl⁻: i = 3

> **Merke:** Kolligative Eigenschaften hängen NUR von der Teilchenzahl ab (nicht von Masse oder Art). Elektrolyte haben i > 1 (Dissoziation!). 1 mol NaCl liefert 2 mol Teilchen → doppelter Effekt wie 1 mol Glucose.

---

## Siedepunktserhöhung und Gefrierpunktserniedrigung

### Siedepunktserhöhung ΔT_b

Gelöste Teilchen senken den Dampfdruck des Lösungsmittels (Raoult). Daher muss stärker erhitzt werden, bis der Dampfdruck den Atmosphärendruck erreicht → **Siedepunkt steigt**.

**ΔT_b = K_b × b × i**

- K_b = ebullioskopische Konstante [°C·kg/mol]; für Wasser: K_b = 0,512 °C·kg/mol
- b = Molalität [mol/kg Lösungsmittel]
- i = van't Hoff-Faktor

### Gefrierpunktserniedrigung ΔT_f

Gelöste Teilchen stören die Kristallbildung → **Gefrierpunkt sinkt**.

**ΔT_f = K_f × b × i**

- K_f = kryoskopische Konstante; für Wasser: K_f = 1,86 °C·kg/mol

### Rechenbeispiel: Streusalz

**Aufgabe:** Wie stark senkt 1 mol NaCl in 1 kg Wasser den Gefrierpunkt?

**Lösung:** ΔT_f = K_f × b × i = 1,86 × 1 × 2 = **3,72 °C** → Gefrierpunkt sinkt auf −3,72 °C.

Deshalb wird NaCl als Streusalz verwendet! CaCl₂ (i = 3) ist noch wirksamer: ΔT_f = 1,86 × 1 × 3 = 5,58 °C.

> **Merke:** K_f(Wasser) = 1,86 °C·kg/mol (≈ 2); K_b(Wasser) = 0,512 °C·kg/mol (≈ 0,5). Gefrierpunktserniedrigung ist ca. 3,6× stärker als Siedepunktserhöhung — daher für Messzwecke bevorzugt (Kryoskopie).

{{DIAGRAM:reaction-energy-diagram}}

---

## Osmotischer Druck

Bisher haben wir Siede- und Gefrierpunkt betrachtet. Um das zu verstehen, wie gelöste Teilchen Wasserbewegungen durch Membranen verursachen, brauchen wir das Konzept der **Osmose**.

### Osmose

**Osmose** = Nettobewegung von Lösungsmittelmolekülen durch eine **semipermeable Membran** (durchlässig für Wasser, undurchlässig für gelöste Stoffe) — von der **niedrig konzentrierten** zur **hoch konzentrierten** Seite.

### Van't Hoff-Gleichung

Der **osmotische Druck** π ist der Druck, der nötig ist, um die Osmose gerade zu verhindern:

**π = i × c × R × T**

- i = van't Hoff-Faktor
- c = Molarität [mol/L]
- R = 8,314 J/(mol·K) = 0,08314 L·bar/(mol·K)
- T = Temperatur [K]

### Rechenbeispiel: Osmotischer Druck von NaCl 0,9 %

**Aufgabe:** π für NaCl 0,9 % (c ≈ 0,154 mol/L) bei 37 °C (310 K)?

**Lösung:** π = i × c × R × T = 2 × 0,154 × 0,08314 × 310 = **7,94 bar ≈ 8 bar**

Das entspricht dem osmotischen Druck des Blutplasmas — deshalb ist NaCl 0,9 % **isoton**!

> **Merke:** π = i·c·R·T. Blutplasma: π ≈ 7,5–8 bar bei 37 °C. NaCl 0,9 % (i=2, c=0,154) und Glucose 5 % (i=1, c=0,278) erzeugen jeweils ≈ 7,5–8 bar → isoton.

---

## Osmolarität und Osmolalität

- **Osmolarität** = Summe aller osmotisch wirksamen Teilchen pro Liter Lösung [mosmol/L]
- **Osmolalität** = Summe aller osmotisch wirksamen Teilchen pro kg Lösungsmittel [mosmol/kg]

Plasma-Osmolalität: **285–295 mosmol/kg** (≈ 2 × [Na⁺] + [Glucose] + [Harnstoff])

Formel (klinisch): **Osmolalität ≈ 2 × Na⁺ [mmol/L] + Glucose [mmol/L] + Harnstoff [mmol/L]**

Der Faktor 2 vor Na⁺ berücksichtigt die begleitenden Anionen (Cl⁻, HCO₃⁻).

> **Merke:** Plasma-Osmolalität ≈ 290 mosmol/kg. Schnellformel: ≈ 2 × Na⁺ + Glucose + Harnstoff (alles in mmol/L). Eine Osmolal-Lücke > 10 mosmol/kg deutet auf ungezählte Osmolyte (Methanol, Ethanol, Ethylenglykol) hin — Vergiftung!

---

## Isoton, Hyperton, Hypoton

| Lösung | Tonus | Zellreaktion | Beispiel |
|--------|-------|-------------|----------|
| **Isoton** | = Plasma (≈ 290 mosmol/kg) | Zelle unverändert | NaCl 0,9 %, Glucose 5 % |
| **Hypoton** | < Plasma | Wasser strömt IN die Zelle → **Schwellung, Hämolyse** | Aqua dest., NaCl 0,45 % |
| **Hyperton** | > Plasma | Wasser strömt AUS der Zelle → **Schrumpfung (Krenation)** | NaCl 3 %, Mannitol 20 % |

**Hämolyse** = Platzen von Erythrozyten in hypotoner Lösung (zu viel Wasser strömt ein). Klinisch gefährlich bei falscher Infusion!

**Krenation** = Schrumpfung von Erythrozyten in hypertoner Lösung. Therapeutisch genutzt: Mannitol 20 % bei Hirnödem (entzieht dem Hirngewebe osmotisch Wasser).

---

## Klinische Anwendungen

### Dialyse

Bei der **Hämodialyse** wird Blut über eine semipermeable Membran mit Dialysat in Kontakt gebracht. Harnstoff und Kreatinin (kleine Moleküle) diffundieren entlang ihres Konzentrationsgefälles ins Dialysat. Plasmaproteine (zu groß) bleiben im Blut. Die Dialysat-Osmolalität wird isoton eingestellt, um unkontrollierte Wasserverschiebungen zu vermeiden.

### Infusionstherapie

- **Volumenersatz:** isotone Lösungen (NaCl 0,9 %, Ringer-Laktat)
- **Hirndrucksenkung:** hypertone Lösungen (Mannitol 20 %, NaCl 3 %)
- **Hypoglykämie:** Glucose 40 % i.v. (stark hyperton → langsam applizieren!)

## MedAT-Fokus

**Zentral prüfungsrelevant:**
- Kolligative Eigenschaften: hängen von Teilchenzahl ab (van't Hoff-Faktor i)
- π = i·c·R·T (osmotischer Druck)
- Gefrierpunktserniedrigung: ΔT_f = K_f × b × i; K_f(H₂O) = 1,86 °C·kg/mol
- Isoton/hypoton/hyperton → Zellverhalten (Hämolyse vs. Krenation)
- NaCl 0,9 % = isoton ≈ 308 mosmol/L

**Häufige Fragen:**
- Was passiert mit Erythrozyten in destilliertem Wasser? → Hämolyse
- Warum senkt Streusalz den Gefrierpunkt?
- Osmotischer Druck berechnen (π = icRT)

**Typische Prüfungsfallen:**
- van't Hoff-Faktor i vergessen: NaCl hat i = 2, nicht 1!
- Molalität (mol/kg) ≠ Molarität (mol/L) — für kolligative Eigensch. gilt Molalität
- Osmolarität ≠ Osmolalität (aber klinisch oft gleichgesetzt bei verdünnten Lösungen)
- Hypotone Lösung = Zelle schwillt AN (nicht schrumpft)

## Zusammenfassung

- **Kolligative Eigenschaften** hängen nur von der Teilchenanzahl ab (van't Hoff-Faktor i)
- **Siedepunktserhöhung:** ΔT_b = K_b × b × i; K_b(H₂O) = 0,512 °C·kg/mol
- **Gefrierpunktserniedrigung:** ΔT_f = K_f × b × i; K_f(H₂O) = 1,86 °C·kg/mol
- **Osmotischer Druck:** π = i × c × R × T; Blutplasma ≈ 7,5 bar bei 37 °C
- **Osmolalität Plasma** ≈ 290 mosmol/kg ≈ 2×Na⁺ + Glucose + Harnstoff
- **Isoton** (NaCl 0,9 %): Zelle OK; **hypoton**: Hämolyse; **hyperton**: Krenation
- **Klinisch:** Dialyse (Diffusion über Membran), Mannitol (Hirndruck), Infusionstherapie`,
      merksätze: [
        "Kolligative Eigenschaften hängen NUR von der Teilchenzahl ab — nicht von Art oder Masse des gelösten Stoffes.",
        "Van't Hoff-Faktor i: Glucose i=1, NaCl i=2, CaCl₂ i=3. Immer die Dissoziation berücksichtigen!",
        "Osmotischer Druck: π = i·c·R·T. Blutplasma ≈ 7,5–8 bar; NaCl 0,9 % und Glucose 5 % sind isoton.",
        "Hypotone Lösung → Wasser strömt IN die Zelle → Hämolyse. Hypertone Lösung → Wasser strömt HERAUS → Krenation.",
        "Plasma-Osmolalität ≈ 290 mosmol/kg. Schnellformel: 2 × Na⁺ + Glucose + Harnstoff (mmol/L).",
      ],
      klinischerBezug:
        "Kolligative Eigenschaften sind in der klinischen Medizin von zentraler Bedeutung: Infusionstherapie (isotone vs. hypertone Lösungen), Dialyse (osmotischer Ausgleich), Mannitol-Therapie bei erhöhtem Hirndruck (osmotische Diurese), Kryoskopie zur Bestimmung der Urin-Osmolalität und Beurteilung der Nierenfunktion. Die osmolale Lücke (gemessen minus berechnet) ist ein Notfall-Screeningwert für Vergiftungen mit Methanol oder Ethylenglykol.",
      diagram: "covalent-bond",
      selfTest: [
        {
          question:
            "Was passiert mit Erythrozyten, wenn sie in destilliertes Wasser gegeben werden?",
          options: [
            "A) Sie schrumpfen (Krenation)",
            "B) Sie platzen (Hämolyse)",
            "C) Sie bleiben unverändert",
            "D) Sie aggregieren zu Rouleaux",
            "E) Sie werden steifer, aber behalten ihre Form",
          ],
          correctIndex: 1,
          explanation:
            "Destilliertes Wasser ist stark hypoton (0 mosmol/L vs. ≈ 290 mosmol/L im Erythrozyten). Wasser strömt osmotisch IN die Zelle → Schwellung → Hämolyse (Platzen). Krenation (Schrumpfung) tritt nur in hypertonen Lösungen auf.",
          hints: [
            "Destilliertes Wasser hat 0 mosmol/L — ist es isoton, hypoton oder hyperton im Vergleich zur Zelle?",
            "Wasser bewegt sich von niedriger zu hoher Konzentration gelöster Teilchen → in die Zelle hinein.",
          ],
          difficulty: 1,
          tags: ["osmose", "hämolyse", "hypoton"],
        },
        {
          question:
            "Welchen van't Hoff-Faktor i hat CaCl₂ in wässriger Lösung (vollständige Dissoziation)?",
          options: ["A) i = 1", "B) i = 2", "C) i = 3", "D) i = 4", "E) i = 0,5"],
          correctIndex: 2,
          explanation:
            "CaCl₂ → Ca²⁺ + 2 Cl⁻: 1 Formeleinheit zerfällt in 3 Teilchen → i = 3. NaCl: i = 2 (Na⁺ + Cl⁻). Glucose: i = 1 (kein Zerfall). Der van't Hoff-Faktor i multipliziert den kolligativen Effekt.",
          hints: [
            "In wie viele Ionen zerfällt CaCl₂ vollständig?",
            "Ca²⁺ zählt als 1 Teilchen, jedes Cl⁻ als 1 Teilchen.",
          ],
          difficulty: 1,
          tags: ["vant-hoff-faktor", "dissoziation", "cacl2"],
        },
        {
          question:
            "Berechne die Gefrierpunktserniedrigung von 0,5 mol NaCl in 1 kg Wasser (K_f = 1,86 °C·kg/mol, i = 2).",
          options: ["A) 0,93 °C", "B) 1,86 °C", "C) 3,72 °C", "D) 0,512 °C", "E) 5,58 °C"],
          correctIndex: 1,
          explanation:
            "ΔT_f = K_f × b × i = 1,86 × 0,5 × 2 = 1,86 °C. Der Gefrierpunkt sinkt auf −1,86 °C. Ohne i (Glucose, i=1): ΔT_f wäre nur 0,93 °C — NaCl hat den doppelten Effekt wegen Dissoziation.",
          hints: [
            "ΔT_f = K_f × b × i. Setze alle Werte ein.",
            "Vergiss den van't Hoff-Faktor i = 2 für NaCl nicht!",
          ],
          difficulty: 2,
          tags: ["gefrierpunktserniedrigung", "rechnen", "nacl"],
        },
        {
          question:
            "Wie hoch ist der osmotische Druck einer 0,1 mol/L Glucose-Lösung bei 37 °C (310 K)? (R = 0,08314 L·bar/(mol·K))",
          options: ["A) 2,58 bar", "B) 5,15 bar", "C) 1,29 bar", "D) 0,258 bar", "E) 25,8 bar"],
          correctIndex: 0,
          explanation:
            "π = i·c·R·T = 1 × 0,1 × 0,08314 × 310 = 2,577 ≈ 2,58 bar. Glucose ist ein Nichtelektrolyt (i = 1). Wäre es NaCl (i = 2), wäre π doppelt so groß (5,15 bar).",
          hints: [
            "Glucose dissoziiert nicht → i = 1. Setze in π = i·c·R·T ein.",
            "π = 1 × 0,1 × 0,08314 × 310 = ?",
          ],
          difficulty: 2,
          tags: ["osmotischer-druck", "vant-hoff", "rechnen"],
        },
        {
          question: "Welche Aussage zu kolligativen Eigenschaften ist FALSCH?",
          options: [
            "A) Sie hängen nur von der Teilchenanzahl ab, nicht von der Art des gelösten Stoffes.",
            "B) 1 mol NaCl in Wasser erniedrigt den Gefrierpunkt stärker als 1 mol Glucose.",
            "C) Die Siedepunktserhöhung von Wasser durch gelöste Stoffe ist größer als die Gefrierpunktserniedrigung.",
            "D) Osmotischer Druck kann durch π = i·c·R·T berechnet werden.",
            "E) Mannitol wird klinisch als hyperosmolares Therapeutikum bei Hirnödem eingesetzt.",
          ],
          correctIndex: 2,
          explanation:
            "C ist FALSCH: Für Wasser ist K_f = 1,86 °C·kg/mol GRÖSSER als K_b = 0,512 °C·kg/mol. Die Gefrierpunktserniedrigung ist also ca. 3,6× stärker als die Siedepunktserhöhung — nicht umgekehrt! Alle anderen Aussagen sind korrekt.",
          hints: [
            "Vergleiche K_f und K_b für Wasser: Welche Konstante ist größer?",
            "K_f = 1,86 vs. K_b = 0,512. Welcher Effekt ist also stärker?",
          ],
          difficulty: 2,
          tags: ["kolligativ", "falsch-aussage", "siedepunkt-gefrierpunkt"],
        },
      ],
    },
  ],
};
