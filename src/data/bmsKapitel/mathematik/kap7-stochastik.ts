import type { Kapitel } from "../types";

export const mathKapStochastik: Kapitel = {
  id: "mathe-kap7",
  title: "Stochastik & Statistik",
  subject: "mathematik",
  icon: "📊",
  estimatedTime: "120 min",
  sequence: 5,
  sequenceTitle: "Stochastik",
  unterkapitel: [
    {
      id: "ma-7-01",
      title: "Kombinatorik — Permutationen, Variationen, Kombinationen",
      stichworte: [
        "Permutation",
        "Kombination",
        "Variation",
        "Binomialkoeffizient",
        "Fakultät",
        "Pascalsches Dreieck",
        "mit Wiederholung",
        "ohne Wiederholung",
      ],
      content: `Auf wie viele Arten können sich 5 Symptome kombinieren? Wie viele Medikamenten-Kombinationen gibt es aus 10 Wirkstoffen? Kombinatorik liefert die Werkzeuge, um systematisch zu zählen — ohne jede Möglichkeit einzeln aufzulisten.

---

## Das Grundprinzip: Multiplikation und Addition

Zwei fundamentale Zählprinzipien bilden das Fundament der gesamten Kombinatorik:

**Multiplikationsprinzip:** Gibt es für Schritt 1 genau a Möglichkeiten und für Schritt 2 genau b Möglichkeiten, dann gibt es a × b Möglichkeiten insgesamt — vorausgesetzt, die Schritte sind unabhängig.

Beispiel: Ein Diagnosepfad hat 3 Stufen — 4 Bluttests, 3 Bildgebungen, 2 Biopsietypen. Gesamtzahl verschiedener Pfade: 4 × 3 × 2 = **24**.

Beispiel: AB0-Blutgruppen (4 Phänotypen) × Rhesus (2 Varianten) = **8** Blutgruppen-Phänotypen (A+, A−, B+, B−, AB+, AB−, 0+, 0−). Erweitert um Kell (2 Varianten): 4 × 2 × 2 = **16**.

**Additionsprinzip:** Schließen sich zwei Ereignisse gegenseitig aus (entweder A oder B), addiert man die Möglichkeiten: a + b.

> **Merke:** Das Multiplikationsprinzip gilt bei UND-Verknüpfung (Schritt 1 UND Schritt 2), das Additionsprinzip bei ODER-Verknüpfung (Fall A ODER Fall B). Diese Unterscheidung ist die Basis jeder Zählaufgabe.

---

## Die Fakultät — Grundbaustein aller Formeln

Die **Fakultät** n! (sprich: "n Fakultät") ist das Produkt aller natürlichen Zahlen von 1 bis n:

n! = 1 × 2 × 3 × ... × n

Wichtige Werte zum Auswendiglernen:

| n | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 10 |
|---|---|---|---|---|---|---|---|---|---|
| n! | 1 | 1 | 2 | 6 | 24 | 120 | 720 | 5.040 | 3.628.800 |

Warum gilt 0! = 1? Die Rekursionsformel (n+1)! = (n+1) × n! rückwärts angewendet ergibt: 1! = 1 × 0!, also muss 0! = 1 sein. Außerdem: Es gibt genau eine Möglichkeit, null Objekte anzuordnen — nämlich gar nichts zu tun.

> **Merke:** 0! = 1 ist keine willkürliche Festlegung, sondern mathematisch zwingend. Dieser Wert taucht in C(n,0) = n!/(0! × n!) = 1 auf — die leere Auswahl ist immer genau eine Möglichkeit.

---

## Permutationen — Alle Objekte anordnen

Eine **Permutation** (lateinisch permutare = vertauschen) ist eine Anordnung aller n Objekte in einer bestimmten Reihenfolge.

**Ohne Wiederholung (alle verschieden):** P(n) = n!

*Wie viele Möglichkeiten gibt es, 5 Bücher auf einem Regal anzuordnen?*
Für Position 1 gibt es 5 Möglichkeiten, für Position 2 noch 4, für Position 3 noch 3, usw.:
P(5) = 5! = 5 × 4 × 3 × 2 × 1 = **120**

*5 Personen sollen auf 5 Stühlen Platz nehmen — wie viele Sitzordnungen?*
Gleiche Logik: P(5) = 5! = **120**

**Kreispermutation** (runder Tisch): Wenn nur die relative Anordnung zählt (weil man den Tisch drehen kann), fixiert man eine Person und ordnet die restlichen n−1 an: **(n−1)!**

6 Ärzte am runden Tisch: (6−1)! = 5! = **120** (statt 6! = 720 bei linearer Anordnung).

---

**Mit Wiederholung** (identische Objekte vorhanden): Wenn von n Objekten k₁ vom Typ 1, k₂ vom Typ 2 usw. identisch sind:

P(n; k₁, k₂, ...) = n! / (k₁! × k₂! × ...)

Man teilt durch die Fakultäten der identischen Elemente, weil deren Vertauschung keine neue Anordnung erzeugt.

*Wie viele verschiedene Anordnungen der Buchstaben ANNA gibt es?*
n = 4, A kommt 2× vor (k₁ = 2), N kommt 2× vor (k₂ = 2).
P = 4! / (2! × 2!) = 24 / 4 = **6**
Alle 6: ANNA, ANAN, AANN, NANA, NAAN, NNAA.

**Das MISSISSIPPI-Problem — Klassiker der Kombinatorik:**
n = 11 Buchstaben: M(1×), I(4×), S(4×), P(2×).
P = 11! / (1! × 4! × 4! × 2!) = 39.916.800 / (1 × 24 × 24 × 2) = 39.916.800 / 1.152 = **34.650**
Ohne die Korrektur wären es 11! = 39.916.800 — die identischen Buchstaben reduzieren die Zahl um den Faktor 1.152.

*DNA-Sequenz mit 3×A, 2×T, 1×G, 1×C (7 Basen):*
P = 7! / (3! × 2!) = 5.040 / 12 = **420** verschiedene Sequenzen.

> **Merke:** Bei Permutationen mit Wiederholung: Zähler = n! (als wären alle verschieden), Nenner = Produkt der Fakultäten aller Wiederholungsgruppen. Je mehr identische Elemente, desto kleiner das Ergebnis.

---

## Variationen — k aus n auswählen, Reihenfolge zählt

Eine **Variation** wählt k Objekte aus n und ordnet sie an — es werden nicht alle, sondern nur k der n Objekte verwendet, und die Reihenfolge ist relevant.

**Ohne Wiederholung:** V(n, k) = n! / (n−k)! = n × (n−1) × ... × (n−k+1)

*Wie viele 3-stellige Zahlen aus den Ziffern 1–5 (ohne Wiederholung)?*
1. Stelle: 5 Möglichkeiten, 2. Stelle: 4, 3. Stelle: 3 → V(5,3) = 5 × 4 × 3 = **60**

*Aus 12 Chirurgen werden Operateur, 1. Assistent, 2. Assistent bestimmt (verschiedene Rollen):*
V(12,3) = 12 × 11 × 10 = **1.320**
Zum Vergleich: Ohne Rollenverteilung (nur ein Team wählen) → C(12,3) = 1.320/6 = 220. Verhältnis: 1.320/220 = 6 = 3! — das bestätigt: **Variation = Kombination × k!**

**Mit Wiederholung:** V(n, k) = nᵏ

Jede Position wird unabhängig besetzt — das Multiplikationsprinzip in Reinform.

*4-stelliger PIN-Code aus 0–9:* V(10,4) = 10⁴ = **10.000**
*BMS-Test: 40 Fragen, je 5 Antworten (A–E), Student rät zufällig:*
V(5,40) = 5⁴⁰ ≈ 9,09 × 10²⁷ mögliche Antwortbögen.
Erwartungswert richtig geratener Fragen: 40 × 1/5 = **8 von 40**.

> **Merke:** Variation ohne Wiederholung = fallende Faktoren (n × (n−1) × ... k Stück). Variation mit Wiederholung = nᵏ. Der Unterschied: Darf das gleiche Objekt mehrfach gezogen werden?

---

## Kombinationen und der Binomialkoeffizient

Eine **Kombination** wählt k Elemente aus n — die Reihenfolge spielt **keine** Rolle. Ob ich die Medikamente A, B, C oder C, B, A wähle, ist dasselbe Screening-Panel.

**Ohne Wiederholung:** C(n,k) = "n über k" = n! / (k! × (n−k)!)

Der Ausdruck "n über k" heißt **Binomialkoeffizient**. Er zählt, wie viele k-elementige Teilmengen eine n-elementige Menge hat.

**Rechenweg (Kurzformel):** Statt alle Fakultäten auszurechnen, kürzt man (n−k)! im Zähler weg:

C(n,k) = [n × (n−1) × ... × (n−k+1)] / k!

Es stehen also nur k Faktoren im Zähler und k! im Nenner.

**Lotto "6 aus 45" (österreichisches Lotto):**
C(45,6) = (45 × 44 × 43 × 42 × 41 × 40) / (6 × 5 × 4 × 3 × 2 × 1) = 5.864.443.200 / 720 = **8.145.060**

**Symmetrie-Eigenschaft:** C(n,k) = C(n, n−k)
6 Zahlen aus 45 auswählen = 39 Zahlen weglassen. Gleiche Anzahl!
Praktisch: C(10,8) = C(10,2) = (10 × 9)/2 = **45** — mit k=2 statt k=8, viel schneller.

**Häufige Binomialkoeffizienten zum Auswendiglernen:**

| C(n,k) | k=2 | k=3 | k=4 |
|--------|-----|-----|-----|
| n=4 | 6 | 4 | 1 |
| n=5 | 10 | 10 | 5 |
| n=6 | 15 | 20 | 15 |
| n=7 | 21 | 35 | 35 |
| n=8 | 28 | 56 | 70 |
| n=10 | 45 | 120 | 210 |

*Aus 12 Bluttests 4 für ein Screening-Panel wählen (Reihenfolge egal):*
C(12,4) = (12 × 11 × 10 × 9) / (4 × 3 × 2 × 1) = 11.880 / 24 = **495**

**Komplementstrategie** — "mindestens eins" über den Umweg:
Aus 10 Professoren (6 Männer, 4 Frauen) soll eine 3er-Kommission mit mind. 1 Frau gebildet werden.
Gesamt: C(10,3) = 120. Nur Männer: C(6,3) = 20. Mit ≥1 Frau = 120 − 20 = **100**.

> **Merke:** C(n,k) = C(n, n−k) — immer das kleinere k nehmen! Bei "mindestens"-Aufgaben: Komplementstrategie (Gesamt minus Verbot) ist fast immer schneller als alle Fälle einzeln.

**Mit Wiederholung** (Multisets, selten im MedAT): C(n+k−1, k)
3 Kugeln aus 4 Farben mit Zurücklegen, Reihenfolge egal: C(6,3) = **20**

---

## Pascalsches Dreieck — Binomialkoeffizienten auf einen Blick

Das Pascalsche Dreieck ordnet alle Binomialkoeffizienten in einem Dreieck an. Die Konstruktionsregel: **Jede Zahl ist die Summe der zwei Zahlen direkt darüber.**

\`\`\`
                  1                    ← Zeile 0: C(0,0)
                1   1                  ← Zeile 1: C(1,0)  C(1,1)
              1   2   1                ← Zeile 2: C(2,0)  C(2,1)  C(2,2)
            1   3   3   1              ← Zeile 3
          1   4   6   4   1            ← Zeile 4
        1   5  10  10   5   1          ← Zeile 5
      1   6  15  20  15   6   1        ← Zeile 6
\`\`\`

Zeile n enthält die Werte C(n,0), C(n,1), ..., C(n,n).

**Formale Rechenregel (Pascalsches Gesetz):**
C(n,k) = C(n−1, k−1) + C(n−1, k)

Beispiel: C(5,2) = C(4,1) + C(4,2) = 4 + 6 = **10** — stimmt mit dem Dreieck überein.

**Drei wichtige Eigenschaften:**
- **Zeilensumme** von Zeile n = 2ⁿ (= Anzahl aller Teilmengen einer n-elementigen Menge)
- **Randzahlen:** C(n,0) = C(n,n) = 1 (leere Menge / Gesamtmenge — je genau eine Möglichkeit)
- **Symmetrie:** Das Dreieck ist achsensymmetrisch, weil C(n,k) = C(n, n−k)

**Schnellablesen statt Rechnen:**
P(genau 3 von 5 Münzwürfen = Kopf)? → C(5,3) × (1/2)³ × (1/2)² = **10** × 1/32 = 10/32 = 5/16 ≈ 31,3%.
C(5,3) = 10 direkt aus Zeile 5 abgelesen — kein Taschenrechner nötig.

> **Merke:** Für n ≤ 6 ist das Pascalsche Dreieck schneller als jede Formel. Die Zeilen 0–5 auswendig lernen spart im MedAT wertvolle Sekunden bei Binomialverteilungs-Aufgaben.

---

## Binomialsatz — Verbindung zwischen Algebra und Kombinatorik

Der **Binomialsatz** verknüpft das Pascalsche Dreieck mit algebraischen Potenzen:

**(a + b)ⁿ = Σ C(n,k) × aⁿ⁻ᵏ × bᵏ** (k von 0 bis n)

Die Koeffizienten der Entwicklung sind genau die Einträge aus Zeile n des Pascalschen Dreiecks:

(a+b)² = 1·a² + 2·ab + 1·b² (Zeile 2: 1, 2, 1)
(a+b)³ = 1·a³ + 3·a²b + 3·ab² + 1·b³ (Zeile 3: 1, 3, 3, 1)
(a+b)⁴ = 1·a⁴ + 4·a³b + 6·a²b² + 4·ab³ + 1·b⁴ (Zeile 4: 1, 4, 6, 4, 1)

**Genetik-Anwendung — Mendelsche Aufspaltung:**
In einem monohybriden Erbgang mit vollständiger Dominanz gilt für die F₂-Generation: p(dominant) = 3/4, p(rezessiv) = 1/4. Bei 4 Nachkommen verwendet man (a+b)⁴ mit a = 3/4 und b = 1/4:

P(genau k von 4 Nachkommen zeigen den dominanten Phänotyp) = C(4,k) × (3/4)ᵏ × (1/4)⁴⁻ᵏ

| k dominant | C(4,k) | (3/4)ᵏ | (1/4)⁴⁻ᵏ | Ergebnis |
|-----------|--------|---------|-----------|----------|
| 0 | 1 | 1 | 1/256 | 1/256 ≈ 0,4% |
| 1 | 4 | 3/4 | 1/64 | 12/256 ≈ 4,7% |
| 2 | 6 | 9/16 | 1/16 | 54/256 ≈ 21,1% |
| 3 | 4 | 27/64 | 1/4 | 108/256 ≈ 42,2% |
| 4 | 1 | 81/256 | 1 | 81/256 ≈ 31,6% |

Am wahrscheinlichsten: genau 3 von 4 dominant (≈ 42%) — passend zum 3:1-Verhältnis. Die Koeffizienten C(4,0) bis C(4,4) = 1, 4, 6, 4, 1 kommen direkt aus dem Pascalschen Dreieck (Zeile 4).

> **Merke:** Der Binomialsatz ist die Brücke zwischen Kombinatorik und Genetik. Die Koeffizienten (a+b)ⁿ stammen aus dem Pascalschen Dreieck. In der Genetik liefert er die Wahrscheinlichkeitsverteilung der Phänotypen bei n Nachkommen.

---

## Entscheidungsbaum: Die richtige Formel finden

{{DIAGRAM:combinatorics-tree}}

Bei jeder Kombinatorik-Aufgabe stellst du zwei Fragen:

**Schritt 1: Ist die Reihenfolge relevant?**
- JA → Variation oder Permutation
- NEIN → Kombination

**Schritt 2: Ist Wiederholung erlaubt?**
- JA → "mit Wiederholung"-Formel
- NEIN → "ohne Wiederholung"-Formel

| | **Ohne Wiederholung** | **Mit Wiederholung** |
|---|---|---|
| **Geordnet** | **Variation** n!/(n−k)! | **Variation** nᵏ |
| | *3 von 5 Buchstaben anordnen → 60* | *4-stellige PIN aus 0–9 → 10.000* |
| **Ungeordnet** | **Kombination** n!/(k!(n−k)!) | **Kombination** C(n+k−1,k) |
| | *Lotto 6/45 → 8.145.060* | *3 Kugeln aus 4 Farben → 20* |
| **Alle n anordnen** | **Permutation** n! | **Permutation** n!/(k₁!·k₂!·…) |
| | *5 Bücher → 120* | *MISSISSIPPI → 34.650* |

**Typische Signalwörter in Aufgaben:**
- "anordnen", "Reihenfolge", "Code", "Platzierung" → **geordnet** (Variation/Permutation)
- "auswählen", "Team bilden", "Teilmenge", "ziehen ohne Reihenfolge" → **ungeordnet** (Kombination)
- "mit Zurücklegen", "darf mehrfach" → **mit Wiederholung**
- "ohne Zurücklegen", "verschieden" → **ohne Wiederholung**

> **Merke:** Zwei Fragen vor jeder Aufgabe: (1) Reihenfolge? (2) Wiederholung? Damit landest du immer bei der richtigen der 6 Formeln. Der häufigste Prüfungsfehler: Variation und Kombination verwechseln.

---

## Typische Missverständnisse

**"Variation und Kombination sind doch das Gleiche"** — Nein! Bei der Variation zählt die Reihenfolge (ABC ≠ CBA), bei der Kombination nicht (ABC = CBA). Variation liefert immer ein k!-fach größeres Ergebnis als die entsprechende Kombination.

**"Permutation ist eine eigene Kategorie"** — Eine Permutation ist ein Spezialfall der Variation, bei dem k = n (alle Objekte werden angeordnet). Darum: V(n,n) = n!/(n−n)! = n!/0! = n!/1 = n! = P(n).

**"Bei Wiederholung wird es immer mehr"** — Richtig bei Variationen (nᵏ > n!/(n−k)! für große n), aber bei Kombinationen kann "mit Wiederholung" auch subtil sein. Entscheidend: Kann dasselbe Element mehrfach gewählt werden?

---

## Rechenbeispiele — Medizinischer Kontext

**DNA-Codons:** 4 Basen (A, U/T, G, C), 3 Positionen, Wiederholung erlaubt, Reihenfolge zählt (AUG ≠ GUA):
V(4,3) = 4³ = **64 Codons**. Davon 61 für Aminosäuren, 3 Stopp-Codons. Der genetische Code ist degeneriert: 61/20 ≈ 3 Codons pro Aminosäure.

**Heterozygote Genotypen:** Ein Gen hat 4 Allele (A₁–A₄). Heterozygot = 2 verschiedene Allele, Reihenfolge egal:
C(4,2) = 6. Plus 4 homozygote → **10 Genotypen** insgesamt. Allgemein bei n Allelen: n(n+1)/2.

**Prüfungskommission mit Einschränkung:** 10 Professoren (6M, 4F), 3er-Kommission mit ≥1 Frau:
Gesamt C(10,3) = 120, nur Männer C(6,3) = 20, mit ≥1 Frau = 120 − 20 = **100**. (Komplementstrategie!)

**Passwort-Sicherheit:** 8 Zeichen aus 62 Symbolen (a–z, A–Z, 0–9), Wiederholung erlaubt:
V(62,8) = 62⁸ ≈ **2,18 × 10¹⁴**. Nur Kleinbuchstaben: 26⁸ ≈ 2,09 × 10¹¹ — Faktor 1.000 weniger sicher.`,
      lernziele: [
        "Multiplikations- und Additionsprinzip als Grundlage aller Zählprobleme anwenden",
        "Die sechs kombinatorischen Formeln (Permutation/Variation/Kombination × mit/ohne Wiederholung) über den Entscheidungsbaum korrekt zuordnen",
        "Permutationen mit identischen Elementen berechnen (z. B. MISSISSIPPI-Problem)",
        "Den Binomialkoeffizienten C(n,k) berechnen, seine Symmetrie nutzen und im Pascalschen Dreieck ablesen",
        "Den Binomialsatz (a+b)ⁿ auf genetische Aufspaltungsprobleme anwenden",
      ],
      sections: [
        {
          heading: "Entscheidungsbaum: Die richtige Formel finden",
          text: "Der erste Schritt bei jeder Kombinatorik-Aufgabe ist nicht das Rechnen, sondern das Analysieren: Zählt die Reihenfolge? Wenn ja, liegt Variation oder Permutation vor. Wenn nein, ist es eine Kombination. Zweite Frage: Darf ein Element mehrfach auftreten? Signalwörter helfen — 'anordnen', 'Code', 'Platzierung' deuten auf geordnet hin, 'auswählen', 'Team bilden', 'Teilmenge' auf ungeordnet.",
          merksatz:
            "Zwei Fragen vor jeder Aufgabe: (1) Reihenfolge wichtig? → Ja = Variation/Permutation, Nein = Kombination. (2) Wiederholung erlaubt? → Ja = nᵏ bzw. Multiset, Nein = Fakultätformel. Häufigster Fehler: Variation und Kombination verwechseln.",
        },
        {
          heading: "Pascalsches Dreieck und Binomialsatz",
          text: "Das Pascalsche Dreieck liefert alle Binomialkoeffizienten auf einen Blick: Jede Zahl ist die Summe der zwei darüber. Zeile n enthält C(n,0) bis C(n,n). Der Binomialsatz (a+b)ⁿ nutzt genau diese Koeffizienten. In der Genetik berechnet man damit die Phänotyp-Verteilung bei n Nachkommen: P(k dominant von n) = C(n,k) × pᵏ × (1−p)ⁿ⁻ᵏ.",
          merksatz:
            "Zeilen 0–5 des Pascalschen Dreiecks auswendig lernen — bei Binomialverteilungs-Aufgaben im MedAT spart das wertvolle Sekunden. C(n,k) = C(n, n−k) — immer das kleinere k nehmen!",
        },
      ],
      merksätze: [
        "Multiplikationsprinzip (UND) vs. Additionsprinzip (ODER) — die Basis jeder Zählaufgabe",
        "Permutation mit Wiederholung: n!/(k₁!×k₂!×...) — durch identische Elemente teilen (MISSISSIPPI: 11!/(4!×4!×2!))",
        "Variation vs. Kombination: Reihenfolge zählt → Variation (immer k!-mal mehr als Kombination)",
        "C(n,k) = C(n, n−k) — Symmetrie nutzen, immer das kleinere k rechnen!",
        "Pascalsches Dreieck: Jede Zahl = Summe der zwei darüber. Zeile n = Koeffizienten von (a+b)ⁿ",
        "Binomialsatz + Genetik: P(k dominant von n) = C(n,k) × pᵏ × (1−p)ⁿ⁻ᵏ — Koeffizienten aus dem Dreieck",
        "0! = 1 ist mathematisch zwingend — wichtig für C(n,0) = 1 und C(n,n) = 1",
      ],
      selfTest: [
        {
          question:
            "Ein Arzt möchte 4 Patienten in einer bestimmten Reihenfolge einbestellen. Wie viele verschiedene Reihenfolgen gibt es?",
          options: ["24", "12", "16", "8", "4"],
          correctIndex: 0,
          explanation:
            "Alle 4 Patienten werden angeordnet (Reihenfolge zählt, alle Objekte) → Permutation: P(4) = 4! = 4 × 3 × 2 × 1 = 24. Für den ersten Termin 4 Möglichkeiten, dann 3, dann 2, dann 1.",
          hints: [
            "Alle Objekte anordnen, Reihenfolge zählt → Permutation P(n) = n!",
            "P(4) = 4 × 3 × 2 × 1 = ?",
          ],
          difficulty: 1,
          tags: ["permutation", "fakultät", "kombinatorik"],
        },
        {
          question:
            "Ein Zahlencode hat 3 Stellen, jede Stelle kann eine Ziffer von 1–6 sein (Wiederholung erlaubt). Wie viele Codes gibt es?",
          options: ["216", "120", "36", "18", "729"],
          correctIndex: 0,
          explanation:
            "Reihenfolge zählt (Code 123 ≠ 321), Wiederholung erlaubt → Variation mit Wiederholung: V(6,3) = 6³ = 216. Jede der 3 Stellen hat unabhängig 6 Möglichkeiten: 6 × 6 × 6 = 216. Falle: 729 = 9³ (falsche Basis), 120 = 5! (Permutation statt Variation), 36 = 6×6 (nur 2 Stellen).",
          hints: [
            "Reihenfolge zählt + Wiederholung erlaubt → V(n,k) = nᵏ",
            "V(6,3) = 6 × 6 × 6 = ?",
          ],
          difficulty: 1,
          tags: ["variation", "wiederholung", "kombinatorik"],
        },
        {
          question:
            "Wie viele unterschiedliche Anordnungen der Buchstaben LEVEL gibt es? (L kommt 2×, E kommt 2× vor)",
          options: ["30", "60", "120", "24", "10"],
          correctIndex: 0,
          explanation:
            "Permutation mit Wiederholung: n = 5, L(2×), E(2×), V(1×). P = 5!/(2!×2!) = 120/4 = 30. Ohne Korrektur wäre es 5! = 120, aber die identischen L und E erzeugen keine neuen Anordnungen. Falle: 120 = 5! (vergessen durch identische Buchstaben zu teilen).",
          hints: [
            "Permutation mit identischen Elementen: P = n!/(k₁! × k₂! × ...)",
            "n=5, L: 2×, E: 2× → 5!/(2!×2!) = ?",
          ],
          difficulty: 2,
          tags: ["permutation", "wiederholung", "kombinatorik"],
        },
        {
          question:
            "Eine Studie wählt 3 Medikamente aus 7 verfügbaren (Reihenfolge spielt keine Rolle). Wie viele Möglichkeiten?",
          options: ["35", "21", "210", "42", "120"],
          correctIndex: 0,
          explanation:
            "Reihenfolge egal, ohne Wiederholung → Kombination: C(7,3) = (7×6×5)/(3×2×1) = 210/6 = 35. Falle: 210 = 7×6×5 wäre die Variation (Reihenfolge zählt) — hier aber nicht! 210/6 = 35, weil 3! = 6 Anordnungen pro Gruppe identisch sind.",
          hints: [
            "Reihenfolge egal → Kombination C(n,k), nicht Variation",
            "C(7,3) = (7×6×5)/(3!) = 210/6 = ?",
          ],
          difficulty: 2,
          tags: ["kombination", "binomialkoeffizient", "kombinatorik"],
        },
        {
          question:
            "In einem monohybriden Erbgang (p=3/4 dominant) beträgt die Wahrscheinlichkeit, dass genau 3 von 4 Nachkommen den dominanten Phänotyp zeigen, ungefähr:",
          options: ["42%", "32%", "21%", "75%", "56%"],
          correctIndex: 0,
          explanation:
            "Binomialverteilung: P(X=3) = C(4,3) × (3/4)³ × (1/4)¹ = 4 × 27/64 × 1/4 = 108/256 ≈ 42,2%. C(4,3) = 4 direkt aus dem Pascalschen Dreieck (Zeile 4: 1,4,6,4,1). Falle: 75% wäre p selbst — aber gefragt ist die Wahrscheinlichkeit für genau 3 von 4, nicht der Erwartungswert.",
          hints: [
            "Binomialverteilung: P(X=k) = C(n,k) × pᵏ × (1−p)ⁿ⁻ᵏ",
            "C(4,3) = 4 (Zeile 4 im Pascalschen Dreieck), p = 3/4, n = 4, k = 3",
          ],
          difficulty: 3,
          tags: ["binomialkoeffizient", "pascalsches-dreieck", "genetik", "kombinatorik"],
        },
        {
          question:
            "Beim österreichischen Lotto werden 6 Zahlen aus 45 gezogen (ohne Zurücklegen, Reihenfolge egal). Welcher Wert liegt am nächsten?",
          options: ["8 Millionen", "1 Million", "45 Millionen", "120.000", "300.000"],
          correctIndex: 0,
          explanation:
            "C(45,6) = (45×44×43×42×41×40)/720 = 5.864.443.200/720 = 8.145.060 ≈ 8 Millionen. Die Symmetrie C(45,6) = C(45,39) nützt hier rechnerisch wenig, da k=6 bereits klein ist. Zum Vergleich: Lotto 6/49 → C(49,6) ≈ 14 Millionen.",
          hints: [
            "Reihenfolge egal, ohne Zurücklegen → Kombination C(45,6)",
            "Zähler: 45×44×43×42×41×40, Nenner: 6! = 720",
          ],
          difficulty: 3,
          tags: ["kombination", "lotto", "binomialkoeffizient"],
        },
      ],
      altfrage: {
        question:
          "In einer Notaufnahme sollen 6 Ärzte so auf 6 Behandlungsräume aufgeteilt werden, dass jeder Arzt genau einen Raum übernimmt. (a) Wie viele Möglichkeiten gibt es? (b) Zwei der Ärzte (Dr. A und Dr. B) wollen auf keinen Fall benachbarte Räume (Räume 1&2, 2&3, 3&4, 4&5, 5&6). Wie viele Anordnungen erfüllen diese Bedingung?",
        answer:
          "Teil (a): Alle 6 Ärzte auf 6 Räume anordnen → Permutation P(6) = 6! = 720. Teil (b): Günstige Fälle = Gesamt − Ungünstige. Ungünstige Fälle (A und B benachbart): Es gibt 5 Paare benachbarter Räume. A und B können in 2 Reihenfolgen diese Räume besetzen (AB oder BA), die restlichen 4 Ärzte auf 4 verbleibende Räume: 4! = 24 Wege. Ungünstig = 5 × 2 × 24 = 240. Günstig = 720 − 240 = 480. Komplementstrategie: Gesamtmenge berechnen, Verbotenes abziehen — die effizienteste Methode bei Ausschlussbedingungen.",
      },
      klinischerBezug:
        "Die Kombinatorik ist die Grundlage für die Berechnung von Wahrscheinlichkeiten in klinischen Studien. Die Anzahl möglicher Genotypen in der Genetik (Kombinationen von Allelen), die Bewertung von Testergebnissen (Sensitivität/Spezifität basiert auf Vierfeldertafeln) und die Randomisierung in klinischen Studien nutzen kombinatorische Prinzipien. Im österreichischen MedAT erscheinen Kombinatorikaufgaben regelmäßig im BMS-Mathematik-Teil.",
      diagram: "combinatorics-tree",
    },

    {
      id: "ma-7-02",
      title: "Grundlagen der Wahrscheinlichkeitsrechnung",
      stichworte: [
        "Laplace-Experiment",
        "Ergebnisraum",
        "Ereignis",
        "Additionssatz",
        "Komplementregel",
        "Unabhängigkeit",
        "Baumdiagramm",
        "Binomialverteilung",
      ],
      content: `## Grundbegriffe

Das **Laplace-Experiment** ist ein Zufallsexperiment, bei dem alle möglichen Ergebnisse gleich wahrscheinlich sind (z.B. fairer Würfel, faire Münze).

- **Ergebnisraum Ω** (Omega): Menge aller möglichen Ergebnisse
  - Fairer Würfel: Ω = {1, 2, 3, 4, 5, 6}, |Ω| = 6
  - Münzwurf: Ω = {Kopf, Zahl}, |Ω| = 2
- **Ereignis A**: Teilmenge von Ω, z.B. "gerade Zahl" = {2, 4, 6}, |A| = 3
- **Elementarereignis**: einelementige Teilmenge {ω}
- **Sicheres Ereignis**: Ω selbst, P(Ω) = 1
- **Unmögliches Ereignis**: leere Menge ∅, P(∅) = 0

**Klassische Wahrscheinlichkeitsdefinition (Laplace):**

P(A) = |A| / |Ω| = (Anzahl günstiger Ergebnisse) / (Anzahl aller Ergebnisse)

Beispiel Würfel: P(gerade) = |{2,4,6}| / |{1,2,3,4,5,6}| = 3/6 = 1/2 = 0,5 = 50%

Beispiel Kartenspiel (32 Karten): P(Ass) = 4/32 = 1/8 = 12,5%

**Rechenbeispiel — Zwei Würfel gleichzeitig:**
Zwei faire Würfel werden geworfen. Ω hat 6 × 6 = 36 gleich wahrscheinliche Ergebnisse (Paare).
P(Augensumme = 7) = ? Günstige Paare: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) → 6 Paare.
P(Summe = 7) = 6/36 = **1/6 ≈ 16,7%** — die häufigste Augensumme!
P(Augensumme = 12) = ? Nur (6,6) → 1 Paar. P = 1/36 ≈ **2,8%**.
P(Augensumme ≥ 10) = ? Paare: (4,6),(5,5),(5,6),(6,4),(6,5),(6,6) → 6 Paare. P = 6/36 = **1/6**.

**Rechenbeispiel — Laplace in der Genetik:**
Mendel'sche Spaltung: Kreuzung Aa × Aa. Ergebnisraum: {AA, Aa, aA, aa} → 4 gleich wahrscheinliche Genotypen.
P(homozygot dominant = AA) = 1/4 = **25%**.
P(heterozygot = Aa oder aA) = 2/4 = **50%**.
P(homozygot rezessiv = aa) = 1/4 = **25%**.
P(phänotypisch dominant = AA, Aa oder aA) = 3/4 = **75%** (Mendel'sche 3:1-Spaltung).

> **Merke:** Die klassische Wahrscheinlichkeit gilt nur bei Laplace-Experimenten (gleichwahrscheinliche Ergebnisse). Bei einem gezinkten Würfel muss man relative Häufigkeiten aus Beobachtungen verwenden.

**Grundregeln — Zusammenfassung:**
- 0 ≤ P(A) ≤ 1 für jedes Ereignis A
- P(Ω) = 1 (sicheres Ereignis)
- P(∅) = 0 (unmögliches Ereignis)
- P(Ā) = 1 − P(A) (Komplementregel)
- P(A ∪ B) = P(A) + P(B) − P(A ∩ B) (Additionssatz)
- Bei Unabhängigkeit: P(A ∩ B) = P(A) × P(B)

---

## Rechenregeln der Wahrscheinlichkeit

### Komplementregel

Das **Komplement** Ā (sprich: "A quer" oder "nicht A") enthält alle Ergebnisse, die nicht in A liegen.

P(Ā) = 1 − P(A)

Beispiel: P(nicht 6 beim Würfel) = 1 − 1/6 = 5/6 ≈ 0,833

Strategie: Wenn "mindestens eines" gefragt ist, berechne das Komplement "keines":
P(mindestens ein Treffer) = 1 − P(kein Treffer)

Beispiel: Bei 3 Münzwürfen: P(mindestens einmal Kopf) = 1 − P(dreimal Zahl) = 1 − (1/2)^3 = 1 − 1/8 = 7/8

> **Merke:** "Mindestens eines" → Komplement berechnen ist fast immer der schnellere Weg!

### Additionssatz (Vereinigung)

P(A ∪ B) = P(A) + P(B) − P(A ∩ B)

Der Schnittterm P(A ∩ B) wird subtrahiert, weil er doppelt gezählt würde.

**Spezialfall unvereinbare Ereignisse (disjunkt):** A ∩ B = ∅ → P(A ∪ B) = P(A) + P(B)

Beispiel Würfel: A = "gerade" = {2,4,6}, B = "größer als 4" = {5,6}
- P(A) = 3/6 = 1/2
- P(B) = 2/6 = 1/3
- P(A ∩ B) = P({6}) = 1/6
- P(A ∪ B) = 1/2 + 1/3 − 1/6 = 3/6 + 2/6 − 1/6 = 4/6 = 2/3

**Rechenbeispiel Additionssatz — Blutgruppen:**
In Österreich: P(Blutgruppe A) ≈ 0,44, P(Blutgruppe B) ≈ 0,13, P(Blutgruppe AB) ≈ 0,06.
Blutgruppen sind paarweise disjunkt (eine Person hat genau eine AB0-Blutgruppe).
P(A oder B) = P(A) + P(B) = 0,44 + 0,13 = **0,57 = 57%**.
P(A oder B oder AB) = 0,44 + 0,13 + 0,06 = **0,63 = 63%**.
P(Blutgruppe 0) = 1 − 0,63 = **0,37 = 37%** (Komplementregel!).

**Rechenbeispiel Additionssatz — nicht disjunkt (Medikamenten-Nebenwirkungen):**
Ein Medikament verursacht Kopfschmerzen (K) mit P(K) = 0,30 und Übelkeit (Ü) mit P(Ü) = 0,20. Beide treten gleichzeitig auf mit P(K ∩ Ü) = 0,08.
P(K oder Ü) = P(K) + P(Ü) − P(K ∩ Ü) = 0,30 + 0,20 − 0,08 = **0,42 = 42%**.
Ohne Abzug des Schnitts hätte man 50% berechnet — falsch, weil die 8% mit beiden Nebenwirkungen doppelt gezählt würden.

> **Merke:** Bei der Vereinigung immer prüfen: Überschneiden sich A und B? Wenn ja, wird P(A∩B) einmal abgezogen. Wenn A und B disjunkt sind (kein gemeinsames Element), einfach addieren.

### Multiplikationssatz (Schnittmenge bei unabhängigen Ereignissen)

**Unabhängige Ereignisse** A und B: Das Eintreten von A beeinflusst B nicht.

P(A ∩ B) = P(A) × P(B)

**Formale Definition der Unabhängigkeit:** A und B sind unabhängig genau dann, wenn P(A ∩ B) = P(A) × P(B). Äquivalent: P(A|B) = P(A) — das Wissen über B ändert nichts an der Wahrscheinlichkeit von A.

Beispiel: Zwei unabhängige Münzwürfe. P(beide Kopf) = 1/2 × 1/2 = 1/4

Beispiel klinisch: Ein Gendefekt tritt mit P = 0,01 auf, unabhängig in zwei verschiedenen Genen. P(beide defekt) = 0,01 × 0,01 = 0,0001 = 0,01%.

Erweiterung auf n unabhängige Ereignisse: P(A1 ∩ A2 ∩ ... ∩ An) = P(A1) × P(A2) × ... × P(An)

**Rechenbeispiel — Unabhängigkeit prüfen:**
Würfelwurf: A = "gerade" = {2,4,6}, B = "≤ 3" = {1,2,3}.
P(A) = 3/6 = 1/2. P(B) = 3/6 = 1/2. P(A ∩ B) = P({2}) = 1/6.
Prüfung: P(A) × P(B) = 1/2 × 1/2 = 1/4 = 3/12. Aber P(A ∩ B) = 1/6 = 2/12. Da 2/12 ≠ 3/12 → **A und B sind abhängig**. Intuition: Wenn du weißt, dass die Zahl ≤ 3 ist, sinkt die Chance auf „gerade" von 1/2 auf 1/3 (nur die 2 von {1,2,3}).

**Rechenbeispiel — Multiplikation bei Mehrfach-Tests (klinisch):**
Ein Patient erhält 3 unabhängige Laborwerte. Jeder einzelne hat 5% Chance auf ein falsch-positives Ergebnis (normaler Laborwert, aber Ergebnis „auffällig").
P(mindestens 1 falsch-positiv) = 1 − P(alle 3 normal) = 1 − 0,95³ = 1 − 0,857 = **0,143 ≈ 14,3%**.
Bei 20 unabhängigen Laborwerten: P(mind. 1 falsch-positiv) = 1 − 0,95²⁰ = 1 − 0,358 = **0,642 ≈ 64%**.
Klinisch: Bei einem „Check-up" mit 20 Laborwerten ist es wahrscheinlicher als nicht, dass mindestens ein Wert ohne Krankheit auffällig ist!

> **Merke:** Unabhängige Ereignisse: Wahrscheinlichkeiten multiplizieren. Achtung: Unabhängigkeit ≠ Disjunktheit! Zwei Ereignisse können gleichzeitig eintreten (nicht disjunkt) und trotzdem unabhängig sein.

### Bedingte Wahrscheinlichkeit — Vorschau

Die **bedingte Wahrscheinlichkeit** P(A|B) beschreibt, wie sich die Wahrscheinlichkeit von A ändert, wenn B bekannt ist:

P(A|B) = P(A ∩ B) / P(B)

**Rechenbeispiel — Urne ohne Zurücklegen:**
Urne mit 4 roten und 6 blauen Kugeln. Zwei Ziehungen ohne Zurücklegen.
P(2. rot | 1. rot) = 3/9 = 1/3 (nach Entnahme einer roten: 3 rote von 9 übrig).
P(2. rot | 1. blau) = 4/9 (nach Entnahme einer blauen: 4 rote von 9 übrig).
P(beide rot) = P(1. rot) × P(2. rot | 1. rot) = 4/10 × 3/9 = 12/90 = **2/15 ≈ 13,3%**.

> **Merke:** Bei Ziehen ohne Zurücklegen ändern sich die Wahrscheinlichkeiten nach jeder Ziehung — das ist bedingte Wahrscheinlichkeit in Aktion. Im Baumdiagramm sieht man das an den sich ändernden Brüchen auf der zweiten Stufe.

---

## Baumdiagramme und Pfadregeln

Baumdiagramme visualisieren mehrstufige Zufallsexperimente. Sie sind besonders hilfreich bei Aufgaben mit bedingten Wahrscheinlichkeiten und mehrstufigem Ziehen.

{{DIAGRAM:combinatorics-tree}}

**Pfadregel 1 (Pfad-Wahrscheinlichkeit):** Wahrscheinlichkeit eines Pfades = Produkt der Kantenwahrscheinlichkeiten entlang des Pfades.

**Pfadregel 2 (Ereignis-Wahrscheinlichkeit):** Wahrscheinlichkeit eines Ereignisses = Summe der Wahrscheinlichkeiten aller Pfade, die zu diesem Ereignis führen.

Beispiel: Eine Urne enthält 3 rote und 2 blaue Kugeln. Es werden 2 Kugeln ohne Zurücklegen gezogen.

Stufe 1: P(rot) = 3/5, P(blau) = 2/5

Stufe 2 nach rot: P(rot|1.rot) = 2/4 = 1/2, P(blau|1.rot) = 2/4 = 1/2
Stufe 2 nach blau: P(rot|1.blau) = 3/4, P(blau|1.blau) = 1/4

Alle 4 Pfade:
- rot-rot: 3/5 × 2/4 = 6/20 = 3/10 = **30%**
- rot-blau: 3/5 × 2/4 = 6/20 = 3/10 = **30%**
- blau-rot: 2/5 × 3/4 = 6/20 = 3/10 = **30%**
- blau-blau: 2/5 × 1/4 = 2/20 = 1/10 = **10%**
- Kontrolle: 30% + 30% + 30% + 10% = **100%** ✓

P(genau eine rote) = P(rot,blau) + P(blau,rot) = 3/10 + 3/10 = 6/10 = 3/5 = **60%**

> **Merke:** Im Baumdiagramm: Entlang eines Astes multiplizieren (UND), zwischen parallelen Ästen addieren (ODER). Kontrolle: Alle Pfadwahrscheinlichkeiten müssen sich zu 1 (= 100%) addieren.

**Rechenbeispiel — Zweistufiges Baumdiagramm mit klinischem Bezug:**
Ein Gentest wird an zwei aufeinanderfolgenden Tagen durchgeführt. P(positiv) = 0,8 pro Tag (unabhängig).
Pfade:
- (+, +): 0,8 × 0,8 = **0,64** — beide Tage positiv
- (+, −): 0,8 × 0,2 = **0,16** — nur Tag 1 positiv
- (−, +): 0,2 × 0,8 = **0,16** — nur Tag 2 positiv
- (−, −): 0,2 × 0,2 = **0,04** — beide negativ
Kontrolle: 0,64 + 0,16 + 0,16 + 0,04 = 1,00 ✓

P(genau 1 positiv) = 0,16 + 0,16 = **0,32 = 32%**.
P(mindestens 1 positiv) = 1 − P(keiner positiv) = 1 − 0,04 = **0,96 = 96%**.

**Rechenbeispiel — Dreistufiges Baumdiagramm: Antikörpertest (IgG) über 3 Zeitpunkte:**
Serokonversionsrate pro Woche: p = 0,3. Nach 3 Wochen: P(noch keine Serokonversion)?
P(3× negativ) = (1−0,3)³ = 0,7³ = **0,343 = 34,3%**.
P(erstmals in Woche 3 positiv) = 0,7 × 0,7 × 0,3 = **0,147 = 14,7%** (ein einziger Pfad im Baum).

> **Merke:** Bei unabhängigen Wiederholungen (gleiche p in jeder Stufe) vereinfacht sich das Baumdiagramm zur Binomialverteilung. Bei abhängigen Stufen (z. B. ohne Zurücklegen) muss man die bedingten Wahrscheinlichkeiten an jeder Verzweigung anpassen.

---

## Binomialverteilung

Die **Binomialverteilung** B(n, p, k) beschreibt die Wahrscheinlichkeit, bei n unabhängigen Versuchen mit Erfolgswahrscheinlichkeit p genau k Erfolge zu erzielen.

P(X = k) = C(n, k) × p^k × (1−p)^(n−k)

Dabei ist:
- n = Anzahl der Versuche
- p = Erfolgswahrscheinlichkeit pro Versuch
- k = gewünschte Anzahl Erfolge (0 ≤ k ≤ n)
- C(n,k) = Binomialkoeffizient (Anzahl der Wege)

**Erwartungswert:** μ = n × p (mittlere Anzahl Erfolge)
**Standardabweichung:** σ = √(n × p × (1−p))

{{DIAGRAM:probability-distribution}}

Beispiel: Ein Gen-Test hat 90% Treffsicherheit (p = 0,9). Bei 4 unabhängigen Tests: wie wahrscheinlich sind genau 3 korrekte Ergebnisse?

P(X = 3) = C(4,3) × 0,9^3 × 0,1^1 = 4 × 0,729 × 0,1 = 4 × 0,0729 = 0,2916 ≈ 29,2%

Erwartungswert: μ = 4 × 0,9 = 3,6 (im Schnitt 3,6 korrekte Ergebnisse)

> **Merke:** Binomialverteilung gilt nur wenn: (1) n Versuche sind unabhängig, (2) jeder Versuch hat genau zwei Ausgänge (Erfolg/Misserfolg), (3) p ist konstant. Wird eine Kugel ohne Zurücklegen gezogen, gilt Binomial nicht mehr!

**Ausführliches Binomial-Rechenbeispiel — Geschwister mit Erbkrankheit:**
Autosomal-rezessive Erkrankung: Beide Eltern heterozygot (Carrier). P(Kind krank) = 1/4 = 0,25.
Das Paar bekommt n = 4 Kinder. Wie wahrscheinlich ist es, dass genau 2 der 4 Kinder krank sind?

Schritt 1: Binomialkoeffizient C(4,2) = 4!/(2!×2!) = (4×3)/(2×1) = 6
Schritt 2: Erfolgswahrscheinlichkeit p^k = 0,25² = 0,0625
Schritt 3: Misserfolgswahrscheinlichkeit (1−p)^(n−k) = 0,75² = 0,5625
Schritt 4: P(X=2) = 6 × 0,0625 × 0,5625 = 6 × 0,03516 = **0,2109 ≈ 21,1%**

Vollständige Verteilung für dieses Beispiel:
- P(X=0) = C(4,0) × 0,25⁰ × 0,75⁴ = 1 × 1 × 0,3164 = **31,6%** (kein Kind krank)
- P(X=1) = C(4,1) × 0,25¹ × 0,75³ = 4 × 0,25 × 0,4219 = **42,2%** (genau 1 Kind)
- P(X=2) = **21,1%** (genau 2 Kinder)
- P(X=3) = C(4,3) × 0,25³ × 0,75¹ = 4 × 0,0156 × 0,75 = **4,7%**
- P(X=4) = C(4,4) × 0,25⁴ × 0,75⁰ = 1 × 0,0039 = **0,4%** (alle 4 krank)
- Kontrolle: 31,6 + 42,2 + 21,1 + 4,7 + 0,4 = 100% ✓

Erwartungswert: μ = 4 × 0,25 = **1 Kind** im Mittel.
Standardabweichung: σ = √(4 × 0,25 × 0,75) = √0,75 ≈ **0,87**.

> **Merke:** Bei Binomial-Aufgaben im MedAT immer die drei Voraussetzungen prüfen: (1) festes n, (2) konstantes p, (3) unabhängige Versuche. Dann: C(n,k) berechnen, p^k und (1−p)^(n−k) multiplizieren, fertig. Die vollständige Verteilung aufzulisten ist eine gute Kontrolle (Summe = 1).

---

## Rechenbeispiele

**Beispiel 1 — Autosomal-rezessiv: Carrier-Wahrscheinlichkeit bei Mukoviszidose:**
Trägerfrequenz q ≈ 1/25 in Mitteleuropa (heterozygot Aa). Beide Eltern Carrier → P(Kind krank = aa) = 1/4 (Mendel). Zufällig zwei Personen: P(beide Carrier) = (1/25)² = 1/625. P(Kind krank) = 1/625 × 1/4 = **1/2.500** ≈ 0,04%. Tatsächliche Inzidenz von CF: ca. 1:2.500 — passt!

**Beispiel 2 — Komplement: Mindestens eine Nebenwirkung in 5 Dosen:**
Ein Medikament verursacht pro Dosis mit P = 0,15 eine Nebenwirkung (unabhängig). P(mind. 1 Nebenwirkung in 5 Dosen) = 1 − P(keine) = 1 − 0,85⁵. 0,85⁵ = 0,85 × 0,85 × 0,85 × 0,85 × 0,85 ≈ 0,4437. P(mind. 1) = 1 − 0,4437 = **0,556 ≈ 55,6%**. Also: Mehr als jeder zweite Patient erlebt mindestens eine Nebenwirkung über 5 Dosen — obwohl die Einzelwahrscheinlichkeit nur 15% beträgt.

**Beispiel 3 — Binomialverteilung: Impf-Wirksamkeit:**
Impfung hat Schutzrate p = 0,92. In einer Gruppe von n = 6 Geimpften: P(alle 6 geschützt) = C(6,6) × 0,92⁶ × 0,08⁰ = 1 × 0,92⁶ × 1 ≈ 0,92⁶. Rechnung: 0,92² = 0,8464; 0,92³ ≈ 0,7787; 0,92⁶ = (0,92³)² ≈ 0,7787² ≈ **0,606 ≈ 60,6%**. Erwartungswert: μ = 6 × 0,92 = **5,52** geschützte Personen.

**Beispiel 4 — Additionssatz: Diagnostik mit zwei Symptomen:**
Bei einer Infektionskrankheit tritt Fieber (F) mit P(F) = 0,70 und Husten (H) mit P(H) = 0,50 auf. Beide zusammen: P(F ∩ H) = 0,35.
P(Fieber oder Husten) = P(F) + P(H) − P(F ∩ H) = 0,70 + 0,50 − 0,35 = **0,85 = 85%**.
Kontrolle: P(weder Fieber noch Husten) = 1 − 0,85 = 0,15 = 15%.

**Beispiel 5 — Bedingte Wahrscheinlichkeit: Geschlecht und Farbenblindheit:**
Rot-Grün-Schwäche: P(farbenblind | Mann) = 0,08, P(farbenblind | Frau) = 0,005. Bevölkerung: 50% M, 50% F.
Totale Wahrscheinlichkeit: P(farbenblind) = 0,08 × 0,5 + 0,005 × 0,5 = 0,04 + 0,0025 = **0,0425 = 4,25%**.
Bayes: P(Mann | farbenblind) = 0,04 / 0,0425 = **0,941 ≈ 94%**. Wenn eine Person farbenblind ist, ist sie mit 94% Wahrscheinlichkeit männlich.

**Beispiel 6 — Binomialverteilung: Blutspender mit Blutgruppe 0:**
P(Blutgruppe 0) = 0,37 in Österreich. Von n = 8 Spendern: P(genau 3 mit Blutgruppe 0)?
C(8,3) = 56. 0,37³ ≈ 0,0507. 0,63⁵ ≈ 0,0992.
P(X=3) = 56 × 0,0507 × 0,0992 ≈ **0,281 ≈ 28,1%**. Erwartungswert: μ = 8 × 0,37 = **2,96** ≈ 3 Spender.`,
      lernziele: [
        "Die klassische Wahrscheinlichkeit als P(A) = |A|/|Ω| berechnen und die Laplace-Bedingung prüfen",
        "Komplementregel, Additionssatz und Multiplikationssatz korrekt anwenden und dabei unvereinbare von unabhängigen Ereignissen unterscheiden",
        "Mehrstufige Zufallsexperimente mit Baumdiagrammen darstellen und die Pfadregeln (Multiplikation entlang, Addition zwischen Pfaden) anwenden",
        "Die Binomialformel P(X=k) = C(n,k)×p^k×(1−p)^(n−k) berechnen und Erwartungswert μ = n×p bestimmen",
        "Die Strategie 'Komplement für mindestens-Aufgaben' gezielt einsetzen",
      ],
      sections: [
        {
          heading: "Komplementstrategie — der schnellste Weg bei 'mindestens'",
          text: "Wenn 'mindestens k Erfolge' gefragt sind, ist fast immer der Weg über das Komplement schneller: P(mind. 1 Treffer) = 1 − P(kein Treffer) = 1 − (1−p)^n. Beispiel: P(mind. 1 Sechser in 4 Würfen) = 1 − (5/6)^4 = 1 − 625/1296 = 671/1296 ≈ 51,8%. Dieser Trick spart Rechnungen, weil das Komplement oft nur einen Pfad im Baumdiagramm hat, während 'mindestens 1' viele Pfade hätte.",
          merksatz:
            "'Mindestens eines' = 1 − P('keines'). Dieses Prinzip spart bei mehrstufigen Aufgaben enorm viel Rechenzeit.",
        },
        {
          heading: "Unabhängigkeit vs. Disjunktheit — häufigste Verwechslung",
          text: "Zwei Ereignisse sind unabhängig, wenn P(A∩B) = P(A)×P(B) gilt — das Eintreten des einen beeinflusst das andere nicht. Zwei Ereignisse sind disjunkt (unvereinbar), wenn A∩B = ∅ — sie können nicht gleichzeitig eintreten. Merke: Wenn P(A)>0 und P(B)>0, dann sind disjunkte Ereignisse immer abhängig, denn wenn A eintritt (A passiert), kann B nicht eintreten — also beeinflusst A das Eintreten von B.",
          merksatz:
            "Unabhängig: P(A∩B) = P(A)×P(B). Disjunkt: P(A∩B) = 0. Disjunkt ≠ Unabhängig — verwechsle die Begriffe nicht!",
        },
      ],
      merksätze: [
        "Laplace: P(A) = günstige Ergebnisse / alle Ergebnisse — nur bei gleichwahrscheinlichen Ergebnissen",
        "Komplementregel: P(Ā) = 1 − P(A) — gilt immer, sehr häufig im MedAT",
        "Additionssatz: P(A∪B) = P(A) + P(B) − P(A∩B) — Schnittmenge nicht vergessen",
        "Unabhängige Ereignisse: P(A∩B) = P(A) × P(B) — Multiplikation",
        "Baumdiagramm: Ast entlang = multiplizieren (UND), Äste addieren = ODER",
        "Binomial: P(X=k) = C(n,k) × p^k × (1-p)^(n-k), Erwartungswert μ = n×p",
        "'Mindestens eines' immer über Komplement: 1 − P(keines) = 1 − (1-p)^n",
      ],
      selfTest: [
        {
          question: "Ein fairer Würfel wird einmal geworfen. Wie groß ist P(Zahl > 4)?",
          options: ["1/3", "1/2", "1/6", "2/3", "1/4"],
          correctIndex: 0,
          explanation:
            "Ergebnisraum: Ω = {1,2,3,4,5,6}. Günstiges Ereignis A = {5,6}, |A| = 2. P(A) = 2/6 = 1/3. Laplace-Formel: P = günstige / alle = 2/6 = 1/3 ≈ 33,3%.",
          hints: [
            "Welche Augenzahlen sind größer als 4? Zähle sie.",
            "P = günstige Ergebnisse / alle Ergebnisse = ?/6.",
          ],
          difficulty: 1,
          tags: ["laplace", "wahrscheinlichkeit", "würfel"],
        },
        {
          question:
            "P(A) = 0,4 und P(B) = 0,3. A und B sind disjunkt (unvereinbar). Was ist P(A ∪ B)?",
          options: ["0,7", "0,12", "0,58", "1,0", "0,3"],
          correctIndex: 0,
          explanation:
            "Disjunkte Ereignisse: A ∩ B = ∅, also P(A∩B) = 0. Additionssatz vereinfacht: P(A∪B) = P(A) + P(B) − 0 = 0,4 + 0,3 = 0,7. Wären A und B nicht disjunkt, müsste P(A∩B) abgezogen werden.",
          hints: [
            "Disjunkt bedeutet A∩B = ∅, also P(A∩B) = 0.",
            "P(A∪B) = P(A) + P(B) − P(A∩B) = 0,4 + 0,3 − 0 = ?",
          ],
          difficulty: 1,
          tags: ["additionssatz", "disjunkt", "wahrscheinlichkeit"],
        },
        {
          question:
            "Eine Münze wird 5-mal geworfen. Wie wahrscheinlich ist es, mindestens einmal Kopf zu bekommen?",
          options: ["31/32", "1/32", "1/2", "15/32", "5/32"],
          correctIndex: 0,
          explanation:
            "Komplementstrategie: P(mind. 1 Kopf) = 1 − P(kein Kopf). P(kein Kopf in 5 Würfen) = (1/2)^5 = 1/32. Also P(mind. 1 Kopf) = 1 − 1/32 = 31/32 ≈ 96,9%.",
          hints: [
            "'Mindestens einmal' → Komplement: 1 − P('kein einziges Mal').",
            "P(kein Kopf in 5 Würfen) = (1/2)^5 = 1/32.",
          ],
          difficulty: 2,
          tags: ["komplement", "mindestens", "wahrscheinlichkeit"],
        },
        {
          question:
            "Eine Krankheit tritt mit P = 0,1 auf. Ein diagnostischer Test hat eine Sensitivität von 95 %, d. h. P(Test positiv | krank) = 0,95. Wie groß ist P(Test positiv UND krank)?",
          options: ["0,095", "0,85", "0,1", "0,05", "0,9"],
          correctIndex: 0,
          explanation:
            "Multiplikationsregel: P(positiv UND krank) = P(krank) × P(positiv | krank) = 0,1 × 0,95 = 0,095 = 9,5 %. Das ist die Wahrscheinlichkeit für ein richtig-positives Ergebnis — der erste Baustein der Vierfeldertafel.",
          hints: [
            "Multiplikationsregel: P(A ∩ B) = P(A) × P(B|A).",
            "P(krank) × P(positiv | krank) = 0,1 × 0,95 = ?",
          ],
          difficulty: 2,
          tags: ["unabhängigkeit", "multiplikation", "klinisch"],
        },
        {
          question:
            "Binomialverteilung: n = 5 Versuche, p = 0,5. Wie groß ist P(X = 2) (genau 2 Erfolge)?",
          options: ["5/16", "1/4", "3/8", "1/16", "5/32"],
          correctIndex: 0,
          explanation:
            "P(X=2) = C(5,2) × 0,5^2 × 0,5^3 = 10 × 0,25 × 0,125 = 10 × 0,03125 = 0,3125 = 5/16. C(5,2) = 10, und 0,5^5 = 1/32. Also P(X=2) = 10/32 = 5/16. Probe: alle P(X=k) für k=0..5 summieren sich zu 1.",
          hints: [
            "P(X=k) = C(n,k) × p^k × (1-p)^(n-k) mit n=5, k=2, p=0,5.",
            "C(5,2) = 10. 0,5^5 = 1/32. P(X=2) = 10 × (1/32) = ?",
          ],
          difficulty: 3,
          tags: ["binomialverteilung", "wahrscheinlichkeit", "kombinatorik"],
        },
        {
          question:
            "Ein Medikament hat 20% Nebenwirkungsrate pro Einnahme. Nach 3 unabhängigen Einnahmen: P(mindestens eine Nebenwirkung)?",
          options: ["48,8%", "60%", "20%", "51,2%", "8%"],
          correctIndex: 0,
          explanation:
            "Komplementstrategie: P(mind. 1 NW) = 1 − P(keine NW in 3 Einnahmen). P(keine NW) = (1−0,2)³ = 0,8³ = 0,512. P(mind. 1 NW) = 1 − 0,512 = 0,488 = 48,8%. Merke: Auch bei 'nur' 20% Einzelrisiko kumuliert das Risiko über mehrere Einnahmen erheblich.",
          hints: [
            "'Mindestens eine' → Komplement: 1 − P('keine').",
            "P(keine NW) = 0,8³ = 0,512. P(mind. 1) = 1 − 0,512 = ?",
          ],
          difficulty: 2,
          tags: ["komplement", "kumulatives-risiko", "klinisch"],
        },
        {
          question: "P(A) = 0,3, P(B) = 0,5, P(A ∩ B) = 0,15. Sind A und B unabhängig?",
          options: [
            "Ja, denn P(A)×P(B) = 0,15 = P(A∩B)",
            "Nein, denn 0,3 × 0,5 = 0,10 ≠ 0,15",
            "Ja, denn A und B sind disjunkt",
            "Nein, denn P(A∩B) > 0",
            "Kann nicht entschieden werden",
          ],
          correctIndex: 0,
          explanation:
            "Unabhängigkeit: P(A∩B) = P(A) × P(B)? Prüfung: P(A) × P(B) = 0,3 × 0,5 = 0,15. Und P(A∩B) = 0,15. Da 0,15 = 0,15, sind A und B unabhängig. Das Eintreten von A ändert nichts an der Wahrscheinlichkeit von B: P(B|A) = P(A∩B)/P(A) = 0,15/0,3 = 0,5 = P(B).",
          hints: [
            "Unabhängigkeit prüfen: Gilt P(A∩B) = P(A) × P(B)?",
            "0,3 × 0,5 = 0,15. Vergleiche mit P(A∩B) = 0,15.",
          ],
          difficulty: 2,
          tags: ["unabhängigkeit", "definition", "wahrscheinlichkeit"],
        },
      ],
      altfrage: {
        question:
          "In einem Genetik-Labor werden 3 unabhängige PCR-Tests auf ein Gendefekt-Allel durchgeführt. Jeder Test erkennt das Allel mit Wahrscheinlichkeit p = 0,8 (und übersieht es mit 0,2). (a) Wie wahrscheinlich ist es, dass alle 3 Tests positiv ausfallen? (b) Wie wahrscheinlich ist es, dass mindestens 1 Test positiv ausfällt? (c) Was ist der Erwartungswert für die Anzahl positiver Tests?",
        answer:
          "Teil (a): Unabhängige Ereignisse, alle positiv: P(alle 3 positiv) = 0,8 × 0,8 × 0,8 = 0,8^3 = 0,512 = 51,2%. Teil (b): Komplement-Strategie: P(mind. 1 positiv) = 1 − P(kein einziger positiv) = 1 − 0,2^3 = 1 − 0,008 = 0,992 = 99,2%. Teil (c): Binomialverteilung B(3, 0,8): Erwartungswert μ = n × p = 3 × 0,8 = 2,4. Im Schnitt werden also 2,4 der 3 Tests positiv ausfallen. Kontrolle: P(X=0)=0,008, P(X=1)=3×0,8×0,04=0,096, P(X=2)=3×0,64×0,2=0,384, P(X=3)=0,512. Summe: 0,008+0,096+0,384+0,512=1. Korrekt.",
      },
      klinischerBezug:
        "Wahrscheinlichkeitsrechnung ist das Fundament der diagnostischen Medizin. P(Diagnose | Symptom) — also die Wahrscheinlichkeit einer Diagnose gegeben einem Symptom — kann nur mit den Regeln der Wahrscheinlichkeitsrechnung und dem Bayes-Theorem berechnet werden. Klinisch relevant: Bei seltenen Erkrankungen (niedrige Prävalenz) ist selbst bei hoher Treffsicherheit eines Tests die Wahrscheinlichkeit einer echten Erkrankung nach positivem Test überraschend niedrig.",
    },

    {
      id: "ma-7-03",
      title: "Bedingte Wahrscheinlichkeit & Bayes-Theorem",
      stichworte: [
        "Bedingte Wahrscheinlichkeit",
        "Bayes-Theorem",
        "Totale Wahrscheinlichkeit",
        "Vierfeldertafel",
        "Prävalenz",
        "Positiver prädiktiver Wert",
      ],
      content: `## Bedingte Wahrscheinlichkeit

Die **bedingte Wahrscheinlichkeit** P(A|B) (sprich: "Wahrscheinlichkeit von A gegeben B") beschreibt die Wahrscheinlichkeit, dass A eintritt, unter der Voraussetzung, dass B bereits eingetreten ist.

**Definition:**

P(A|B) = P(A ∩ B) / P(B)     (vorausgesetzt P(B) > 0)

Das Einschränken auf das Ereignis B verkleinert den Wahrscheinlichkeitsraum von Ω auf B. Innerhalb dieses eingeschränkten Raums fragt man nach dem Anteil von A.

Beispiel Würfel: A = "Augenzahl > 4" = {5,6}, B = "Augenzahl gerade" = {2,4,6}
- P(A) = 2/6 = 1/3 (ohne Bedingung)
- P(A ∩ B) = P({6}) = 1/6
- P(A|B) = (1/6) / (3/6) = 1/3 = 0,333

Hier: Wenn wir wissen, dass eine gerade Zahl gefallen ist ({2,4,6}), ist die Chance, dass es >4 ist (nur 6), genau 1/3.

**Multiplikationssatz (Umformung):**

P(A ∩ B) = P(A|B) × P(B) = P(B|A) × P(A)

> **Merke:** Bedingte Wahrscheinlichkeit verkleinert den Ergebnisraum. P(A|B) ≠ P(B|A) — diese Verwechslung ist der klassische "Prosecutors' Fallacy"-Fehler in der forensischen Medizin!

**Rechenbeispiel — P(A|B) vs. P(B|A) anhand klinischer Daten:**
In einer Studie mit 500 Patienten: 100 haben Diabetes (D), 400 nicht. Von den 100 Diabetikern haben 60 einen HbA1c > 6,5% (H+). Von den 400 Nicht-Diabetikern haben 20 einen HbA1c > 6,5%.

P(H+|D) = 60/100 = **0,60 = 60%** (Sensitivität des HbA1c-Tests für Diabetes).
P(D|H+) = 60/(60+20) = 60/80 = **0,75 = 75%** (PPV — wer von den Positiven hat wirklich Diabetes).

Hier gilt: P(H+|D) = 60% ≠ P(D|H+) = 75%. Die Richtung der Bedingung ändert das Ergebnis fundamental.

**Rechenbeispiel — Totale Wahrscheinlichkeit mit drei Bedingungen:**
Ein Krankenhaus hat 3 Stationen: Station A (50% der Patienten), B (30%), C (20%).
Infektionsraten: P(Infektion|A) = 3%, P(Infektion|B) = 5%, P(Infektion|C) = 8%.
P(Infektion) = P(I|A)×P(A) + P(I|B)×P(B) + P(I|C)×P(C)
= 0,03 × 0,50 + 0,05 × 0,30 + 0,08 × 0,20
= 0,015 + 0,015 + 0,016 = **0,046 = 4,6%**.
Bayes: P(C | Infektion) = P(I|C)×P(C) / P(I) = 0,016/0,046 = **0,348 ≈ 34,8%**.
Obwohl Station C nur 20% der Patienten hat, stammen 35% aller Infektionen von dort — weil die Infektionsrate dort am höchsten ist.

---

## Satz der totalen Wahrscheinlichkeit

Wenn Ω in disjunkte, vollständige Teilereignisse B1, B2, ..., Bn zerfällt (d.h. sie schließen sich aus und decken alles ab), dann gilt:

P(A) = P(A|B1) × P(B1) + P(A|B2) × P(B2) + ... + P(A|Bn) × P(Bn)

= Σ P(A|Bi) × P(Bi)

**Medizinisches Beispiel (Prävalenz und Test):**

Krankheit K mit Prävalenz P(K) = 5% = 0,05.
Test hat Sensitivität (richtig positiv) P(T+|K) = 0,90 und Spezifität P(T−|K̄) = 0,95.
Also P(T+|K̄) = 1 − 0,95 = 0,05 (falsch positiv).

Totale Wahrscheinlichkeit für positiven Test:
P(T+) = P(T+|K) × P(K) + P(T+|K̄) × P(K̄)
= 0,90 × 0,05 + 0,05 × 0,95
= 0,045 + 0,0475
= 0,0925 = 9,25%

Von allen Getesteten sind also 9,25% positiv. Aber wie viele davon sind wirklich krank?

> **Merke:** Totale Wahrscheinlichkeit: Gesamtwahrscheinlichkeit = Summe der gewichteten bedingten Wahrscheinlichkeiten. Die "Gewichte" P(Bi) müssen sich zu 1 addieren.

---

## Satz von Bayes

Der **Satz von Bayes** ermöglicht die Umkehrung der Bedingung — aus P(Test+|krank) wird P(krank|Test+):

P(A|B) = P(B|A) × P(A) / P(B)

Mit dem Satz der totalen Wahrscheinlichkeit für P(B):

P(A|B) = P(B|A) × P(A) / [P(B|A) × P(A) + P(B|Ā) × P(Ā)]

**Fortsetzung obiges Beispiel (positiver Vorhersagewert / PPV):**

P(K|T+) = P(T+|K) × P(K) / P(T+)
= 0,90 × 0,05 / 0,0925
= 0,045 / 0,0925
= 0,486 ≈ 48,6%

Ergebnis: Bei einem positiven Test ist die Person nur mit ca. 49% Wahrscheinlichkeit tatsächlich krank — trotz 90% Sensitivität und 95% Spezifität! Der Grund: Die Krankheit ist mit nur 5% Prävalenz selten, daher überwiegen die vielen Falsch-Positiven.

> **Merke:** Bayes-Theorem zeigt: Ein positiver Test bedeutet nicht "krank". Bei niedriger Prävalenz ist der PPV erschreckend niedrig. Das ist der häufigste Irrtum beim Lesen von Testergebnissen — klinisch hochrelevant!

{{DIAGRAM:probability-distribution}}

**Schritt-für-Schritt: Bayes-Formel anwenden (Rezept für Klausur):**

1. **Identifiziere die Größen:** Prävalenz P(K), Sensitivität P(T+|K), Spezifität P(T−|K̄).
2. **Berechne P(T+|K̄)** = 1 − Spezifität (Falsch-positiv-Rate).
3. **Berechne P(T+)** mit totaler Wahrscheinlichkeit:
   P(T+) = Sens × Prävalenz + (1−Spez) × (1−Prävalenz)
4. **Bayes einsetzen:** PPV = P(K|T+) = (Sens × Prävalenz) / P(T+).
5. **Kontrolle:** PPV muss zwischen 0 und 1 liegen. Bei niedriger Prävalenz ist PPV immer kleiner als Sensitivität.

**Negativer prädiktiver Wert (NPV) mit Bayes:**
NPV = P(K̄|T−) = P(T−|K̄) × P(K̄) / P(T−)
Wobei: P(T−) = (1−Sens) × Prävalenz + Spez × (1−Prävalenz)

**Rechenbeispiel — NPV bei Streptokokken-Schnelltest:**
Prävalenz Strep-Angina bei Halsschmerzen: P(K) = 25%. Schnelltest: Sens 85%, Spez 97%.
P(T−) = (1−0,85) × 0,25 + 0,97 × 0,75 = 0,15 × 0,25 + 0,97 × 0,75 = 0,0375 + 0,7275 = 0,765.
NPV = Spez × (1−Prävalenz) / P(T−) = 0,7275 / 0,765 = **0,951 ≈ 95,1%**.
Interpretation: Bei negativem Schnelltest sind 95% wirklich gesund. Die restlichen 5% haben trotzdem Strep → klinischer Verdacht bleibt bei typischen Symptomen relevant.

---

## Vierfeldertafel — die visuelle Rechenhilfe

Die Vierfeldertafel ist für viele Studierende die intuitivste Methode für Bayes-Aufgaben. Man rechnet nicht mit Prozentzahlen, sondern mit absoluten Zahlen in einer 2×2-Tabelle.

Beispiel: n = 10.000 Personen, Prävalenz 5%, Sensitivität 90%, Spezifität 95%

**Schritt 1:** Kranke berechnen: 10.000 × 0,05 = 500 krank, 9.500 nicht krank.

**Schritt 2:** Testkategorien aufteilen:
- Krank: Test+ (TP) = 500 × 0,90 = 450; Test− (FN) = 500 × 0,10 = 50
- Nicht krank: Test− (TN) = 9.500 × 0,95 = 9.025; Test+ (FP) = 9.500 × 0,05 = 475

| | Test + | Test − | Gesamt |
|---|---|---|---|
| Krank | 450 (TP) | 50 (FN) | 500 |
| Nicht krank | 475 (FP) | 9.025 (TN) | 9.500 |
| Gesamt | 925 | 9.075 | 10.000 |

**Schritt 3:** PPV = TP / (TP + FP) = 450 / (450 + 475) = 450 / 925 ≈ 48,6%

Das entspricht exakt dem Bayes-Ergebnis — aber visuell viel klarer!

{{DIAGRAM:sensitivity-specificity}}

> **Merke:** Bei MedAT-Aufgaben zu Sensitivität/Spezifität immer zuerst die Vierfeldertafel aufstellen — das verhindert Verwechslungen und macht das Ergebnis sofort sichtbar.

---

## Natürliche Häufigkeiten — die 1000-Personen-Methode

Die 1000-Personen-Methode (auch: natürliche Häufigkeiten) ist die intuitivste Art, Bayes-Aufgaben zu lösen. Statt mit Prozenten zu rechnen, denkt man in konkreten Personenzahlen.

**Schritt-für-Schritt-Rezept:**

1. **Wähle eine runde Stichprobengröße** (z. B. 1.000 oder 10.000 Personen)
2. **Teile in Kranke und Gesunde** anhand der Prävalenz
3. **Wende Sensitivität auf die Kranken an** → TP und FN
4. **Wende Spezifität auf die Gesunden an** → TN und FP
5. **Lies die gesuchte Größe ab** (PPV = TP / alle Positiven)

**Ausführliches Rechenbeispiel — Zöliakie-Screening:**
Prävalenz der Zöliakie in Österreich: ca. 1% = 0,01. Antikörper-Test (tTG-IgA): Sensitivität 95%, Spezifität 98%.

**Schritt 1:** n = 10.000 Personen.
**Schritt 2:** Krank: 10.000 × 0,01 = 100. Gesund: 9.900.
**Schritt 3:** TP = 100 × 0,95 = 95. FN = 100 × 0,05 = 5.
**Schritt 4:** TN = 9.900 × 0,98 = 9.702. FP = 9.900 × 0,02 = 198.
**Schritt 5:**

| | Test + | Test − | Gesamt |
|---|---|---|---|
| Krank (Zöliakie) | 95 (TP) | 5 (FN) | 100 |
| Gesund | 198 (FP) | 9.702 (TN) | 9.900 |
| Gesamt | 293 | 9.707 | 10.000 |

PPV = 95 / 293 = **0,324 ≈ 32,4%**. Nur jeder dritte positive Antikörper-Test bestätigt sich als Zöliakie.
NPV = 9.702 / 9.707 = **0,9995 ≈ 99,95%**. Ein negativer Test schließt Zöliakie praktisch aus.

> **Merke:** Die 1000-Personen-Methode vermeidet Bruchrechnung und macht die Verhältnisse greifbar. MedAT-Tipp: Immer mit einer runden Zahl starten (1.000 oder 10.000), die durch die Prävalenz glatt teilbar ist.

---

## Baumdiagramm-Methode für Bayes

Das Baumdiagramm stellt denselben Sachverhalt grafisch dar. Die Äste des Baums repräsentieren die schrittweisen Verzweigungen.

**Aufbau für einen Screening-Test:**

Stufe 1 (Krankheitsstatus):
- Ast „krank": Wahrscheinlichkeit = Prävalenz
- Ast „gesund": Wahrscheinlichkeit = 1 − Prävalenz

Stufe 2 (Testergebnis):
- Von „krank" → „Test+" mit P = Sensitivität
- Von „krank" → „Test−" mit P = 1 − Sensitivität
- Von „gesund" → „Test+" mit P = 1 − Spezifität (FPR)
- Von „gesund" → „Test−" mit P = Spezifität

**Pfadregel 1 (multiplizieren):** P(krank UND Test+) = Prävalenz × Sensitivität = 0,01 × 0,95 = 0,0095
**Pfadregel 1:** P(gesund UND Test+) = (1−Prävalenz) × (1−Spezifität) = 0,99 × 0,02 = 0,0198
**Pfadregel 2 (addieren):** P(Test+) = 0,0095 + 0,0198 = 0,0293

PPV = P(krank UND Test+) / P(Test+) = 0,0095 / 0,0293 = **0,324 ≈ 32,4%** — identisch mit der Vierfeldertafel!

> **Merke:** Baumdiagramm und Vierfeldertafel liefern immer dasselbe Ergebnis. Wähle die Methode, die dir leichter fällt. Für MedAT-Klausuren empfehlen wir die Vierfeldertafel — sie ist schneller und weniger fehleranfällig.

---

## Sensitivität, Spezifität, PPV, NPV — Formelsammlung

| Kennzahl | Formel | Berechnet aus | Abhängig von Prävalenz? |
|---|---|---|---|
| **Sensitivität** | TP / (TP + FN) | Spalte „krank" | Nein |
| **Spezifität** | TN / (TN + FP) | Spalte „gesund" | Nein |
| **PPV** | TP / (TP + FP) | Zeile „Test+" | **Ja** |
| **NPV** | TN / (TN + FN) | Zeile „Test−" | **Ja** |
| **FPR (Falsch-positiv-Rate)** | FP / (FP + TN) = 1 − Spez | Spalte „gesund" | Nein |
| **FNR (Falsch-negativ-Rate)** | FN / (TP + FN) = 1 − Sens | Spalte „krank" | Nein |

**Zusammenhang PPV und Prävalenz — warum der PPV so stark variiert:**

| Prävalenz | TP (Sens 95%) | FP (Spez 98%) | PPV |
|---|---|---|---|
| 0,1% (10 von 10.000) | 9,5 ≈ 10 | 199,8 ≈ 200 | 10/210 ≈ **4,8%** |
| 1% (100 von 10.000) | 95 | 198 | 95/293 ≈ **32%** |
| 5% (500 von 10.000) | 475 | 190 | 475/665 ≈ **71%** |
| 20% (2.000 von 10.000) | 1.900 | 160 | 1.900/2.060 ≈ **92%** |

> **Merke:** Bei Prävalenz 0,1% ist der PPV nur 5% — 19 von 20 Positiven sind falsch positiv. Bei 20% Prävalenz (Risikogruppe) steigt der PPV auf 92%. Deshalb screent man nur in Risikogruppen, nicht in der Allgemeinbevölkerung.

---

## Rechenbeispiele

**Beispiel 1 — Mammographie-Screening: Vierfeldertafel komplett durchrechnen:**
Prävalenz Brustkrebs bei 50–69-Jährigen: P(K) = 0,8% = 0,008. Mammographie: Sensitivität 87%, Spezifität 95%. Stichprobe n = 10.000.
Krank: 10.000 × 0,008 = 80. Gesund: 9.920. TP = 80 × 0,87 = 69,6 ≈ 70. FN = 10. FP = 9.920 × 0,05 = 496. TN = 9.424. **PPV = 70 / (70 + 496) = 70 / 566 ≈ 12,4%**. Ergebnis: Nur ~1 von 8 positiven Mammographien ist tatsächlich Krebs — deshalb folgt immer eine Biopsie als Bestätigungstest.

**Beispiel 2 — HIV-Screening (2-Stufen-Strategie):**
Prävalenz 0,1% (Allgemeinbevölkerung). ELISA: Sens 99,7%, Spez 99,5%. n = 100.000. Krank: 100. TP = 99,7 ≈ 100. FP = 99.900 × 0,005 = 499,5 ≈ 500. PPV₁ = 100/600 ≈ 16,7%. Zweiter Test (Western Blot, Spez 99,99%) auf die 600 Positiven: TP₂ = 100 (echte bleiben positiv). FP₂ = 500 × 0,0001 = 0,05 ≈ 0. **PPV₂ ≈ 100/100 = ~100%**. Die 2-Stufen-Strategie hebt den PPV von 17% auf nahe 100%.

**Beispiel 3 — Carrier-Test: P(Carrier | positiver Test) bei CF:**
A priori P(Carrier) = 1/25 = 4%. Test: Sens 90%, Spez 99%. P(T+) = 0,90 × 0,04 + 0,01 × 0,96 = 0,036 + 0,0096 = 0,0456. P(Carrier|T+) = 0,036 / 0,0456 = **0,789 ≈ 79%**. Trotz 99% Spezifität: 1 von 5 positiv Getesteten ist kein Carrier. Bestätigungsdiagnostik (DNA-Analyse) nötig.

**Beispiel 4 — Drogentest am Arbeitsplatz (1000-Personen-Methode):**
Drogenkonsum-Prävalenz: 3%. Urin-Schnelltest: Sens 97%, Spez 95%.
n = 10.000: Konsumenten = 300. Nicht-Konsumenten = 9.700.
TP = 300 × 0,97 = 291. FN = 9. FP = 9.700 × 0,05 = 485. TN = 9.215.
PPV = 291 / (291 + 485) = 291 / 776 = **0,375 ≈ 37,5%**.
Ergebnis: Ohne Bestätigungstest wären fast 2 von 3 positiv Getesteten fälschlich als Drogenkonsumenten eingestuft! Deshalb: positiver Schnelltest → immer Bestätigungstest (GC-MS).

**Beispiel 5 — NPV berechnen: Ausschlussdiagnostik bei Lungenembolie:**
D-Dimer-Test: Sens 97%, Spez 40%. Prävalenz LE in der Notaufnahme: 15%.
n = 1.000: LE-Patienten = 150. Keine LE = 850.
TP = 150 × 0,97 = 145,5 ≈ 146. FN = 4.
FP = 850 × 0,60 = 510. TN = 340.
NPV = 340 / (340 + 4) = 340 / 344 = **0,988 ≈ 98,8%**.
PPV = 146 / (146 + 510) = 146 / 656 = **0,223 ≈ 22,3%** — schlecht.
Klinische Konsequenz: D-Dimer ist ein Ausschlusstest (hohe Sens → hoher NPV). Negativer D-Dimer → LE praktisch ausgeschlossen. Positiver D-Dimer → weitere Diagnostik (CT-Angiografie) nötig. Das ist **SnNout** in Aktion.

**Beispiel 6 — Effekt einer Vorselektion auf den PPV:**
PSA-Test für Prostatakarzinom: Sens 80%, Spez 70%.
**Ohne Selektion** (Allgemeinbevölkerung, Prävalenz 1%): n = 10.000. Krank: 100. TP = 80. FP = 2.970. PPV = 80/3.050 ≈ **2,6%**.
**Mit Selektion** (Männer >50 mit erhöhtem Risiko, Prävalenz 10%): n = 10.000. Krank: 1.000. TP = 800. FP = 2.700. PPV = 800/3.500 ≈ **22,9%**.
**Doppelte Selektion** (familiäre Belastung + erhöhtes PSA, Prävalenz 30%): TP = 2.400. FP = 2.100. PPV = 2.400/4.500 ≈ **53,3%**.
Die Vorselektion (= Erhöhung der Vortestwahrscheinlichkeit) ist die effektivste Methode, den PPV zu verbessern.

## Häufige Fragen & Typische Fallen

**Frage: Warum ist der PPV bei seltenen Krankheiten so niedrig?**
Weil es in absoluten Zahlen viel mehr Gesunde als Kranke gibt. Selbst ein sehr spezifischer Test (99%) produziert bei 10.000 Gesunden 100 Falsch-Positive — aber bei nur 10 Kranken (Prävalenz 0,1%) gibt es maximal 10 Richtig-Positive. FP >> TP → PPV niedrig.

**Frage: Was ist der Unterschied zwischen Sensitivität und PPV?**
Sensitivität = „Unter den Kranken: wie viele erkennt der Test?" → spaltenbasiert (nur Kranke betrachtet).
PPV = „Unter den Positiven: wie viele sind krank?" → zeilenbasiert (nur positive Tests betrachtet).
Sensitivität ist eine Testeigenschaft (unabhängig von der Prävalenz). PPV hängt von der Prävalenz ab.

**Frage: Wann verwendet man welchen Test?**
- **Screening** (Ausschlussdiagnostik): hohe Sensitivität → SnNout. Negativer Test = Krankheit unwahrscheinlich.
- **Bestätigung** (Einschlussdiagnostik): hohe Spezifität → SpPin. Positiver Test = Krankheit sehr wahrscheinlich.
- **Optimaler Workflow:** Erst sensitiver Schnelltest, dann spezifischer Bestätigungstest (z. B. ELISA → Western Blot; D-Dimer → CT-Angio).

**Typische Fallen im MedAT:**
- P(Krank | Test+) ≠ P(Test+ | Krank): Das ist der Kern des Bayes-Theorems!
- „95% Sensitivität" bedeutet NICHT „95% Chance, dass man krank ist, wenn der Test positiv ist"
- Bei 2-Stufen-Strategie: Der zweite Test verbessert den PPV dramatisch, weil die Vortestwahrscheinlichkeit jetzt hoch ist (nur die Positiven des ersten Tests werden getestet)
- Vierfeldertafel: Summe aller Zellen = n (Gesamtstichprobe) — nutze das zur Kontrolle

## Prüfungsrelevante Zahlen und Formeln (Cheat-Sheet)

| Formel | Bedeutung | Wann verwenden? |
|---|---|---|
| P(A\|B) = P(A∩B)/P(B) | Bedingte Wahrscheinlichkeit | Wenn Information über B gegeben ist |
| P(B) = Σ P(B\|Aᵢ)×P(Aᵢ) | Totale Wahrscheinlichkeit | Um P(T+) zu berechnen |
| PPV = Sens×Präv / P(T+) | Satz von Bayes (PPV-Form) | Positiver Vorhersagewert |
| Sens = TP/(TP+FN) | Sensitivität | Erkennungsrate bei Kranken |
| Spez = TN/(TN+FP) | Spezifität | Ausschlussrate bei Gesunden |
| PPV = TP/(TP+FP) | Positiver prädiktiver Wert | Sicherheit bei positivem Test |
| NPV = TN/(TN+FN) | Negativer prädiktiver Wert | Sicherheit bei negativem Test |

**Typische PPV-Werte im klinischen Alltag:**
- Mammographie (Präv 0,8%): PPV ≈ 10–15%
- HIV-ELISA (Allgemeinbevölkerung, Präv 0,1%): PPV ≈ 17% → Bestätigungstest nötig
- HIV-ELISA (Risikogruppe, Präv 5%): PPV ≈ 91%
- Troponin in Notaufnahme (Präv 10%): PPV ≈ 50–60%
- D-Dimer (Präv 15%): PPV ≈ 22%, aber NPV ≈ 99% → Ausschlusstest`,
      lernziele: [
        "Bedingte Wahrscheinlichkeit P(A|B) = P(A∩B)/P(B) berechnen und den Unterschied zu P(B|A) erklären",
        "Den Satz der totalen Wahrscheinlichkeit auf medizinische Testszenarien anwenden",
        "Das Bayes-Theorem zur Berechnung des positiven prädiktiven Werts (PPV) aus Sensitivität, Spezifität und Prävalenz verwenden",
        "Eine Vierfeldertafel korrekt aufstellen und daraus PPV, NPV, Sensitivität und Spezifität ablesen",
        "Die klinische Konsequenz niedriger Prävalenz auf den PPV erklären",
      ],
      sections: [
        {
          heading: "Vierfeldertafel als Universalwerkzeug",
          text: "Die Vierfeldertafel macht Bayes-Aufgaben rechnerisch einfach und fehlerarm. Strategie: (1) Gesamtstichprobe n wählen (z.B. 10.000), (2) Erkrankte und Gesunde berechnen (n×Prävalenz), (3) TP, FN, TN, FP mit Sensitivität/Spezifität befüllen, (4) PPV = TP/(TP+FP), NPV = TN/(TN+FN). Diese Methode ist äquivalent zur Bayes-Formel, aber anschaulicher und weniger fehleranfällig — im MedAT immer bevorzugen.",
          merksatz:
            "Vierfeldertafel: TP = krank UND positiv, FP = gesund ABER positiv, FN = krank ABER negativ, TN = gesund UND negativ. PPV = TP/(TP+FP).",
        },
        {
          heading: "Prävalenz-Paradox — warum Tests bei seltenen Krankheiten täuschen",
          text: "Bei sehr niedriger Prävalenz (z.B. 0,1%) gibt es viele Gesunde, von denen selbst ein sehr spezifischer Test (99,9%) noch viele falsch als positiv markiert. Diese Falsch-Positiven überwiegen die wenigen echten Positiven, sodass der PPV trotz exzellentem Test erschreckend niedrig ist. Konkret: Bei 1 Million Menschen mit 0,1% Prävalenz (1.000 Kranke) und 99% Spezifität: FP = 0,01 × 999.000 = 9.990. TP ≈ 990. PPV = 990/10.980 ≈ 9%. Das ist das Bayes-Paradox — klinisch von größter Bedeutung.",
          merksatz:
            "Niedriger PPV bei niedriger Prävalenz ist kein Testversagen — es ist Mathematik. Deshalb werden Screening-Tests nur bei erhöhtem Risiko (Vorselektionierung) eingesetzt.",
        },
      ],
      merksätze: [
        "P(A|B) = P(A∩B) / P(B) — Bedingung verkleinert den Ergebnisraum auf B",
        "P(A|B) ≠ P(B|A) — bedingte Wahrscheinlichkeit ist nicht symmetrisch!",
        "Totale Wahrscheinlichkeit: P(A) = Σ P(A|Bi) × P(Bi) — gewichtetes Mittel",
        "Bayes: P(K|T+) = P(T+|K) × P(K) / P(T+) — das ist der PPV",
        "Sensitivität = P(T+|K) = TP/(TP+FN); Spezifität = P(T−|K̄) = TN/(TN+FP)",
        "Vierfeldertafel: n wählen → Erkrankte berechnen → TP,FP,TN,FN befüllen → PPV ablesen",
        "Niedrige Prävalenz senkt den PPV drastisch — Bayes-Paradox!",
      ],
      selfTest: [
        {
          question: "P(A∩B) = 0,12 und P(B) = 0,40. Wie groß ist P(A|B)?",
          options: ["0,30", "0,12", "0,40", "0,052", "0,80"],
          correctIndex: 0,
          explanation:
            "P(A|B) = P(A∩B) / P(B) = 0,12 / 0,40 = 0,30 = 30%. Die bedingte Wahrscheinlichkeit teilt die Schnittwahrscheinlichkeit durch die Bedingungswahrscheinlichkeit. Dies schränkt den Ergebnisraum auf B ein (40% der Fälle) und fragt, welcher Anteil davon auch A ist (12% von 100% = 30% von 40%).",
          hints: ["P(A|B) = P(A∩B) / P(B).", "0,12 / 0,40 = ?"],
          difficulty: 1,
          tags: ["bedingte-wahrscheinlichkeit", "formel"],
        },
        {
          question:
            "Eine Krankheit hat Prävalenz 10%. Ein Test hat Sensitivität 80% und Spezifität 90%. Bei 1000 Menschen: Wie viele sind Test-positiv UND krank (TP)?",
          options: ["80", "100", "90", "180", "8"],
          correctIndex: 0,
          explanation:
            "Vierfeldertafel: 1000 Personen. Krank: 1000 × 0,10 = 100. Nicht krank: 900. TP = krank × Sensitivität = 100 × 0,80 = 80. FN = 100 × 0,20 = 20. TN = 900 × 0,90 = 810. FP = 900 × 0,10 = 90. TP = 80.",
          hints: [
            "Krank = 1000 × 0,10 = 100 Personen.",
            "TP = Krank × Sensitivität = 100 × 0,80 = ?",
          ],
          difficulty: 2,
          tags: ["vierfeldertafel", "sensitivität", "bayes"],
        },
        {
          question:
            "Vierfeldertafel (n = 1.000 Personen, Prävalenz 10%, Sensitivität 80%, Spezifität 90%): TP = 80, FP = 90, FN = 20, TN = 810. Was ist der positive prädiktive Wert (PPV)?",
          options: [
            "80/170 ≈ 47%",
            "80/100 = 80%",
            "810/900 = 90%",
            "80/1000 = 8%",
            "90/170 ≈ 53%",
          ],
          correctIndex: 0,
          explanation:
            "PPV = TP / (TP + FP) = 80 / (80 + 90) = 80 / 170 ≈ 0,471 = 47,1%. Obwohl der Test 80% Sensitivität und 90% Spezifität hat, ist bei positivem Test die Person nur mit ~47% Wahrscheinlichkeit tatsächlich krank. Das liegt an der nur 10% hohen Prävalenz.",
          hints: ["PPV = TP / (TP + FP).", "TP = 80, FP = 90. PPV = 80 / (80+90) = ?"],
          difficulty: 2,
          tags: ["ppv", "vierfeldertafel", "bayes"],
        },
        {
          question:
            "Eine Urne enthält 5 rote und 3 blaue Kugeln. Es wird ohne Zurücklegen gezogen. Die erste Kugel ist rot. Wie groß ist P(zweite Kugel rot)?",
          options: ["4/7", "5/8", "4/8 = 1/2", "3/7", "5/7"],
          correctIndex: 0,
          explanation:
            "Bedingte Wahrscheinlichkeit: Nach dem Ziehen einer roten Kugel bleiben 4 rote und 3 blaue übrig (7 Kugeln total). P(2.rot | 1.rot) = 4/7 ≈ 57,1%. Der Ergebnisraum hat sich durch das erste Ereignis verkleinert — aus 8 werden 7 Kugeln, von denen 4 rot sind.",
          hints: [
            "Nach 1 roter Kugel: Wie viele Kugeln bleiben? Wie viele davon sind rot?",
            "4 rote, 3 blaue übrig = 7 Kugeln. P = 4/7.",
          ],
          difficulty: 1,
          tags: ["bedingte-wahrscheinlichkeit", "ohne-zurücklegen"],
        },
        {
          question:
            "Bayes direkt: Prävalenz P(K) = 2%, Sensitivität P(T+|K) = 95%, Spezifität P(T−|K̄) = 98% → P(T+|K̄) = 2%. Was ist P(K|T+) näherungsweise?",
          options: ["ca. 49%", "ca. 95%", "ca. 2%", "ca. 75%", "ca. 20%"],
          correctIndex: 0,
          explanation:
            "P(T+) = P(T+|K)×P(K) + P(T+|K̄)×P(K̄) = 0,95×0,02 + 0,02×0,98 = 0,019 + 0,0196 = 0,0386. P(K|T+) = 0,019 / 0,0386 ≈ 0,492 ≈ 49%. Bei Prävalenz 2% und gleichem Fehlerrate der Falsch-Positiven (2%) sind von allen Positiven fast die Hälfte falsch positiv — ein klassisches Bayes-Paradox.",
          hints: [
            "Zuerst P(T+) berechnen (totale Wahrscheinlichkeit).",
            "P(K|T+) = P(T+|K)×P(K) / P(T+) = 0,019 / ?",
          ],
          difficulty: 3,
          tags: ["bayes", "ppv", "prävalenz", "klinisch"],
        },
        {
          question:
            "1000-Personen-Methode: Prävalenz 5%, Sens 90%, Spez 80%. Von 1000 Personen: Wie viele sind falsch positiv (FP)?",
          options: ["190", "45", "50", "760", "95"],
          correctIndex: 0,
          explanation:
            "1000 Personen. Krank: 1000 × 0,05 = 50. Gesund: 950. FP = Gesunde × (1 − Spezifität) = 950 × 0,20 = 190. Zur Kontrolle: TP = 50 × 0,90 = 45. TN = 950 × 0,80 = 760. FN = 50 × 0,10 = 5. Summe: 45 + 190 + 5 + 760 = 1000. PPV = 45/(45+190) = 45/235 ≈ 19,1%.",
          hints: [
            "Gesunde = 1000 × (1 − 0,05) = 950.",
            "FP = Gesunde × (1 − Spezifität) = 950 × 0,20 = ?",
          ],
          difficulty: 2,
          tags: ["vierfeldertafel", "falsch-positiv", "1000-personen"],
        },
        {
          question: "Welche Maßnahme erhöht den PPV eines Screeningtests am stärksten?",
          options: [
            "Nur Risikogruppen testen (höhere Prävalenz in der Teststichprobe)",
            "Sensitivität des Tests erhöhen",
            "Mehr Personen testen (größere Stichprobe)",
            "Den Test mehrfach am selben Tag wiederholen",
            "Den Cutoff-Wert senken (empfindlicher machen)",
          ],
          correctIndex: 0,
          explanation:
            "Der PPV hängt stark von der Prävalenz ab (Bayes-Paradox). Die effektivste Methode ist die Vorselektion: Testet man nur Risikogruppen (z. B. Familienanamnese, Symptome), steigt die Prävalenz in der Teststichprobe und damit der PPV dramatisch. Sensitivität erhöhen verändert den PPV nur wenig. Stichprobengröße hat keinen Einfluss auf den PPV. Cutoff senken erhöht Sensitivität, senkt aber Spezifität und damit den PPV.",
          hints: [
            "PPV = TP/(TP+FP). Was reduziert FP relativ zu TP am stärksten?",
            "Höhere Prävalenz = mehr TP relativ zu FP → höherer PPV.",
          ],
          difficulty: 2,
          tags: ["ppv", "prävalenz", "screening", "klinisch"],
        },
      ],
      altfrage: {
        question:
          "In einer österreichischen Studie zur Früherkennung einer genetischen Erkrankung (Prävalenz 0,5%) wird ein neuer Test mit Sensitivität 92% und Spezifität 96% eingesetzt. (a) Berechnen Sie den PPV mit einer Vierfeldertafel für n = 100.000 Personen. (b) Interpretieren Sie das Ergebnis klinisch. (c) Welche Maßnahme würde den PPV am stärksten erhöhen?",
        answer:
          "Teil (a): n=100.000. Krank: 500. Nicht krank: 99.500. TP = 500 × 0,92 = 460. FN = 40. FP = 99.500 × 0,04 = 3.980. TN = 95.520. Positiv gesamt = 460 + 3.980 = 4.440. PPV = 460 / 4.440 = 0,1036 ≈ 10,4%. Teil (b): Klinisch bedeutet das: Von 100 Personen mit positivem Test sind nur etwa 10 tatsächlich krank — 90 erhalten ein falsch positives Ergebnis. Das verursacht unnötige Angst, kostspielige Folgeuntersuchungen und eventuell unnötige Behandlungen. Teil (c): Erhöhung der Prävalenz in der Teststichprobe durch Vorselektion (Screening nur bei Risikogruppen, z.B. Familienanamnese). Bei Prävalenz 10% (Risikogruppe) würde PPV auf ~72% steigen. Alternativ: Spezifität erhöhen (weniger FP), hat bei seltenen Erkrankungen den stärksten Effekt auf PPV.",
      },
      klinischerBezug:
        "Das Bayes-Theorem ist das mathematische Fundament der evidenzbasierten Medizin. Jede Diagnose ist ein Bayes-Update: die Vortestwahrscheinlichkeit (Prior = Prävalenz in dieser Population) wird durch Testergebnisse zur Nachtestwahrscheinlichkeit (Posterior = PPV/NPV). Klinisch gilt: Sens/Spez sind Eigenschaften des Tests; PPV/NPV sind Eigenschaften des Tests UND der Population. Deshalb gelten Screeningtests nur in spezifischen Bevölkerungsgruppen mit bekanntem Risiko.",
    },

    {
      id: "ma-7-04",
      title: "Normalverteilung, Sensitivität & Spezifität",
      stichworte: [
        "Normalverteilung",
        "Glockenform",
        "Standardabweichung",
        "68-95-99,7-Regel",
        "Mittelwert",
        "Median",
        "Modus",
        "Varianz",
        "Sensitivität",
        "Spezifität",
        "p-Wert",
      ],
      content: `Jeder Laborwert, den ein Arzt beurteilt, basiert auf Normalverteilung. Jeder Schwangerschaftstest, jeder COVID-Schnelltest folgt den Gesetzen von Sensitivität und Spezifität. Dieses Kapitel verbindet reine Statistik mit klinischer Realität — und genau das wird im MedAT geprüft.

---

## Lagemaße — Wo liegt das Zentrum?

Drei Kennzahlen beschreiben die "Mitte" eines Datensatzes. Welche man verwendet, hängt von der Verteilung ab:

**Arithmetischer Mittelwert (x-quer):**
x̄ = (x1 + x2 + ... + xn) / n = Summe aller Werte / Anzahl

Beispiel: Messwerte {3, 5, 7, 7, 8}. x̄ = (3+5+7+7+8)/5 = 30/5 = 6

Stell dir vor, alle Werte sind Gewichte auf einer Wippe: Der Mittelwert ist der Punkt, an dem die Wippe im Gleichgewicht steht. Ein einzelner schwerer Ausreißer verschiebt das Gleichgewicht massiv.

**Median (Zentralwert):**
Der mittlere Wert einer **sortierten** Datenreihe:
- n ungerade: Median = Wert an Position (n+1)/2
- n gerade: Median = Durchschnitt der zwei mittleren Werte

Beispiel: {3, 5, **7**, 7, 8} → n=5 → Position (5+1)/2 = 3 → Median = 7

Stell dir eine Schlange von Menschen nach Größe sortiert vor: Der Median ist die Person in der Mitte. Egal ob der Größte 1,90 m oder 2,50 m ist — der Median ändert sich nicht.

**Modus (Modalwert):**
Der am häufigsten vorkommende Wert. {3, 5, **7, 7**, 8} → Modus = 7 (kommt 2x vor). Kann auch mehrfach existieren (bimodale Verteilung, z. B. zwei Altersgruppen mit erhöhter Krankheitshäufigkeit).

> **Merke:** Bei symmetrischer Verteilung gilt: Mittelwert = Median = Modus. Bei rechtsschiefer Verteilung (langer Schwanz nach rechts, z. B. Einkommensverteilung): Modus < Median < Mittelwert. Prüfungsregel: Ausreißer verschieben den Mittelwert, nicht den Median.

| Lagemaß | Formel | Wann verwenden? |
|----------|--------|-----------------|
| Mittelwert | Summe xi / n | Symmetrische Verteilung, keine Ausreißer |
| Median | Mittlerer Wert (sortiert) | Schiefe Verteilung, Ausreißer vorhanden |
| Modus | Häufigster Wert | Kategoriale Daten, bimodale Verteilungen |

{{DIAGRAM:probability-distribution}}

---

## Streumaße — Wie breit streuen die Daten?

**Varianz (s-Quadrat):**

Warum quadriert man die Abweichungen? Würde man die Differenzen (xi - x̄) einfach addieren, käme immer Null heraus — positive und negative Abweichungen heben sich auf. Das Quadrieren löst dieses Problem und gewichtet große Abweichungen stärker.

s² = Summe von (xi - x̄)² / (n-1)     (Stichprobenvarianz)

Beispiel {3, 5, 7, 7, 8}, x̄ = 6:
(3-6)²=9, (5-6)²=1, (7-6)²=1, (7-6)²=1, (8-6)²=4 → Summe = 16
s² = 16 / (5-1) = 16/4 = **4**

**Standardabweichung (s):**
s = Wurzel aus s² = Wurzel aus der Varianz

s = Wurzel(4) = **2**. Die Messwerte weichen im Schnitt etwa 2 Einheiten vom Mittelwert ab. Gleiche Einheit wie die Originaldaten (im Gegensatz zur Varianz, die in Einheit² vorliegt).

> **Merke:** Im Nenner steht n-1 (Bessel-Korrektur), nicht n! Eine Stichprobe unterschätzt die wahre Streuung systematisch — n-1 korrigiert das. Im MedAT wird fast immer n-1 verwendet.

**Schritt-für-Schritt-Rechenbeispiel — Varianz klinisch:**
Blutzuckerwerte (mg/dL) von 6 Patienten: {85, 90, 92, 88, 95, 100}.

| Schritt | Rechnung | Ergebnis |
|---------|----------|----------|
| 1. Mittelwert | (85+90+92+88+95+100)/6 | x̄ = 91,67 mg/dL |
| 2. Abweichungsquadrate | (-6,67)²=44,49; (-1,67)²=2,79; (0,33)²=0,11; (-3,67)²=13,47; (3,33)²=11,09; (8,33)²=69,39 | Summe = 141,34 |
| 3. Varianz | 141,34 / (6-1) | s² = 28,27 (mg/dL)² |
| 4. Standardabweichung | Wurzel(28,27) | s = 5,32 mg/dL |

Interpretation: Die Blutzuckerwerte streuen im Mittel um ca. 5,3 mg/dL um den Mittelwert von 91,7 mg/dL.

**Interquartilsabstand (IQA):**
IQA = Q3 - Q1 (75. Perzentil minus 25. Perzentil). Robust gegen Ausreißer. Wird im Boxplot dargestellt.

> **Merke:** Faustregel für klinische Studien: Mittelwert + SD bei Normalverteilung. Median + IQA bei schiefer Verteilung oder Ausreißern. Beides wird angegeben — Transparenz ist Pflicht.

{{DIAGRAM:standard-deviation}}

---

## Normalverteilung — Die Glockenkurve

Die **Normalverteilung** (Gauss-Verteilung) ist die wichtigste Wahrscheinlichkeitsverteilung in der Medizin. Blutdruck, Körpergröße, Laborwerte — fast alles folgt dieser symmetrischen Glockenkurve.

**Parameter:**
- **Mu** = Mittelwert = Modus = Median (bei Normalverteilung identisch)
- **Sigma** = Standardabweichung (bestimmt die Breite der Glocke)
- Größeres Sigma → flachere, breitere Kurve

**Notation:** X ~ N(Mu, Sigma²) — "X ist normalverteilt mit Mittelwert Mu und Varianz Sigma²"

Die Wendepunkte der Glockenkurve liegen exakt bei Mu +/- Sigma.

### Die 68-95-99,7-Regel — Wichtigste Prüfungsformel

| Bereich | Anteil der Daten | Außerhalb (beidseitig) | Außerhalb (einseitig) |
|---------|-----------------|------------------------|----------------------|
| Mu +/- 1 Sigma | ca. 68,3% | ca. 31,7% | ca. 15,9% |
| Mu +/- 2 Sigma | ca. 95,4% | ca. 4,6% | ca. 2,3% |
| Mu +/- 3 Sigma | ca. 99,7% | ca. 0,3% | ca. 0,15% |

**Klinisches Beispiel — Blutdruck:** N(Mu=120, Sigma=10) mmHg.
- 68% haben Blutdruck zwischen 110 und 130 mmHg
- 95% haben Blutdruck zwischen 100 und 140 mmHg
- 99,7% haben Blutdruck zwischen 90 und 150 mmHg
- Werte über 140 mmHg (über Mu+2 Sigma) liegen im oberen 2,3% → Hypertonie-Verdacht

> **Merke:** 68-95-99,7 auswendig lernen! Häufige MedAT-Falle: "Wie viel Prozent liegen OBERHALB von Mu+2 Sigma?" Antwort: 2,3% (nicht 4,6%!). Die Symmetrie halbiert den beidseitigen Wert. Merkhilfe: 2 Sigma = 2,3% pro Seite.

---

## z-Transformation — Universelle Skala

Jede Normalverteilung kann auf die **Standardnormalverteilung** N(0,1) standardisiert werden:

**z = (x - Mu) / Sigma**

Der z-Wert gibt an, wie viele Standardabweichungen ein Wert vom Mittelwert entfernt ist. Wie ein Währungsrechner: Egal ob Blutdruck in mmHg oder Gewicht in kg — der z-Wert macht alles vergleichbar.

z = 0 → genau am Mittelwert
z = +2 → 2 Standardabweichungen oberhalb (obere 2,3%)
z = -1,5 → 1,5 Standardabweichungen unterhalb

### z-Tabelle — Auswendig lernen!

| z-Wert | Phi(z) = P(Z kleiner gleich z) | Klinische Bedeutung |
|--------|-------------------------------|---------------------|
| -3,0 | 0,13% | Extrem niedrig, hochpathologisch |
| -2,0 | 2,3% | Unterhalb Referenzbereich |
| -1,645 | 5,0% | Untere 5% (einseitiges Quantil) |
| -1,0 | 15,9% | Untere 16% |
| 0,0 | 50,0% | Median = Mittelwert |
| +1,0 | 84,1% | Obere 16% beginnt |
| +1,645 | 95,0% | Obere 5% beginnt |
| +1,96 | 97,5% | Grenze für 95%-KI (beidseitig) |
| +2,0 | 97,7% | Obere 2,3% |
| +2,576 | 99,5% | Grenze für 99%-KI (beidseitig) |
| +3,0 | 99,87% | Obere 0,13%, Ausreißer |

> **Merke:** Die drei wichtigsten z-Werte: z = 1,645 (einseitige 5%-Grenze), z = 1,96 (beidseitige 2,5%-Grenze, also 95%-KI), z = 2,576 (99%-KI). In der 68-95-99,7-Regel nutzt man die gerundeten Werte z = 1, 2, 3.

### z-Transformation — Rechenbeispiele

**Beispiel 1: Ist ein Laborwert auffällig?**
Hämoglobin bei Frauen: N(Mu = 13,5 g/dL, Sigma = 1,2 g/dL). Patientin hat Hb = 10,5 g/dL.
z = (10,5 - 13,5) / 1,2 = -3,0 / 1,2 = **-2,5**
Phi(-2,5) = 0,006 → nur 0,6% der gesunden Frauen haben so niedrige Werte → **Anämie-Verdacht**

**Beispiel 2: Perzentil-Berechnung (rückwärts):**
Geburtsgewicht: N(Mu = 3.400 g, Sigma = 450 g). Ab welchem Gewicht gehört ein Baby zu den leichtesten 5%?
z = -1,645 (aus Tabelle). x = Mu + z x Sigma = 3.400 + (-1,645) x 450 = 3.400 - 740 = **2.660 g**
Klinisch: SGA (Small for Gestational Age) bei Gewicht unter 2.660 g.

**Beispiel 3: Anteil zwischen zwei Werten:**
Cholesterin: N(Mu = 200, Sigma = 35) mg/dL. P(180 kleiner gleich X kleiner gleich 250)?
z1 = (180-200)/35 = -0,57 → Phi = 0,2843
z2 = (250-200)/35 = 1,43 → Phi = 0,9236
P = 0,9236 - 0,2843 = **0,639 = 63,9%**

**Beispiel 4: 68-95-99,7 anwenden:**
Körpertemperatur: N(Mu = 36,8 Grad C, Sigma = 0,4 Grad C).
- Mu +/- 1 Sigma = 36,4 bis 37,2 Grad C → 68% der Gesunden
- Mu +/- 2 Sigma = 36,0 bis 37,6 Grad C → 95% der Gesunden
- Temperatur über 37,6 Grad C (über Mu+2 Sigma): obere 2,3% → erhöhte Temperatur
- Temperatur über 38,0 Grad C (über Mu+3 Sigma): obere 0,15% → Fieber

> **Merke:** z = (x-Mu)/Sigma ist die universelle Skala. z größer gleich 2 oder kleiner gleich -2 = klinisch auffällig (weniger als 5% Wahrscheinlichkeit bei Gesunden). Das gilt für Laborwerte, Körpermaße und Studienergebnisse gleichermaßen.

---

## Konfidenzintervall — Wie genau ist die Schätzung?

Das **95%-Konfidenzintervall (KI)** beantwortet: "In welchem Bereich liegt der wahre Populationswert mit 95% Sicherheit?" Stell dir vor, du wirfst ein Lasso: In 95 von 100 Würfen fängst du den wahren Wert ein.

**Formel:** KI = x̄ +/- z x (Sigma / Wurzel(n)) = x̄ +/- 1,96 x SE

Dabei ist der **Standardfehler** SE = Sigma / Wurzel(n) — die Standardabweichung des Stichprobenmittelwerts (nicht der Einzelwerte!).

**Rechenbeispiel 1:**
Studie mit n = 100 Patienten: x̄ = 135 mmHg, Sigma = 20 mmHg.
SE = 20/Wurzel(100) = 20/10 = 2,0
95%-KI = 135 +/- 1,96 x 2,0 = 135 +/- 3,92 = **[131,1 ; 138,9] mmHg**

**99%-KI:** z = 2,576 statt 1,96 → KI = 135 +/- 2,576 x 2,0 = 135 +/- 5,15 = **[129,8 ; 140,2] mmHg** (breiter, aber sicherer)

| Stichprobengröße n | SE (bei Sigma=20) | 95%-KI-Breite |
|---------------------|-------------------|---------------|
| 25 | 4,0 | +/- 7,84 |
| 100 | 2,0 | +/- 3,92 |
| 400 | 1,0 | +/- 1,96 |
| 1.600 | 0,5 | +/- 0,98 |

> **Merke:** n vervierfachen = SE halbieren = KI-Breite halbieren. Das ist das Gesetz der großen Zahlen in Aktion. Größere Studien liefern genauere Schätzungen — aber mit abnehmendem Grenznutzen.

---

## Referenzbereiche — Laborwerte klinisch einordnen

Laborwerte werden als Referenzbereiche angegeben: typischerweise Mu +/- 2 Sigma (umfasst 95% der Gesunden).

**Überraschende Konsequenz:** Bei 20 unabhängigen Laborwerten fällt jeder einzelne mit 5% Wahrscheinlichkeit aus dem Referenzbereich. P(mindestens 1 auffällig) = 1 - 0,95 hoch 20 = 1 - 0,358 = **64%**. Mehr als jeder zweite Gesunde hat mindestens einen "auffälligen" Wert!

| Laborwert | Mu | Sigma | Referenzbereich (Mu +/- 2 Sigma) |
|-----------|-----|-------|--------------------------------|
| Hb Männer | 15,0 g/dL | 1,5 | 12,0-18,0 |
| Hb Frauen | 13,5 g/dL | 1,2 | 11,1-15,9 |
| Cholesterin | 200 mg/dL | 35 | 130-270 |
| Nüchternglukose | 90 mg/dL | 12 | 66-114 |
| Kreatinin M | 0,9 mg/dL | 0,15 | 0,6-1,2 |

**Rechenbeispiel — Laborwert einstufen:**
Serumnatrium: N(Mu = 140 mmol/L, Sigma = 3 mmol/L). Patient hat Na = 148 mmol/L.
z = (148-140)/3 = 8/3 = **2,67** → obere 0,4% → **Hypernatriämie wahrscheinlich**
Vergleich: Na = 146 → z = 2,0 → obere 2,3% → grenzwertig. Na = 143 → z = 1,0 → unauffällig.

> **Merke:** Ein einzelner Wert außerhalb Mu +/- 2 Sigma ist NICHT automatisch pathologisch — 5% der Gesunden fallen dort hin. Erst außerhalb Mu +/- 3 Sigma (0,3%) ist hochverdächtig. Immer den klinischen Gesamtkontext beachten!

---

## Sensitivität und Spezifität — Diagnostische Güte

Zwei zentrale Fragen bei jedem medizinischen Test: Erkennt er Kranke zuverlässig? Und lässt er Gesunde in Ruhe?

**Sensitivität = TP / (TP + FN)** — "Wie viel Prozent der Kranken werden erkannt?"
Analogie: Ein Metalldetektor mit hoher Sensitivität piept bei jedem Metallstück — aber vielleicht auch bei Steinen.

**Spezifität = TN / (TN + FP)** — "Wie viel Prozent der Gesunden werden korrekt als gesund eingestuft?"
Analogie: Ein spezifischer Detektor piept nur bei Gold — übersieht aber manches Gold.

**PPV (positiver prädiktiver Wert) = TP / (TP + FP)** — "Wenn der Test positiv ist: Wie wahrscheinlich bin ich wirklich krank?" Abhängig von der Prävalenz!

**NPV (negativer prädiktiver Wert) = TN / (TN + FN)** — "Wenn der Test negativ ist: Wie wahrscheinlich bin ich wirklich gesund?"

| Kennzahl | Formel | Eigenschaft | Klinische Frage |
|----------|--------|-------------|-----------------|
| Sensitivität | TP/(TP+FN) | Testabhängig | Kranke als krank erkannt? |
| Spezifität | TN/(TN+FP) | Testabhängig | Gesunde als gesund erkannt? |
| PPV | TP/(TP+FP) | Prävalenzabhängig | Positiver Befund zuverlässig? |
| NPV | TN/(TN+FN) | Prävalenzabhängig | Negativer Befund zuverlässig? |

**Merkhilfen:**
- **SnNout:** Hohe **Sn** (Sensitivität) → **N**egativer Test schließt Krankheit **out** (Ausschlussdiagnostik)
- **SpPin:** Hohe **Sp** (Spezifität) → **P**ositiver Test schließt Krankheit **in** (Bestätigungsdiagnostik)
- Praxis: Erst sensitiver Screeningtest (z. B. ELISA), dann spezifischer Bestätigungstest (z. B. Western Blot)

> **Merke:** Sensitivität und Spezifität sind Testeigenschaften — unabhängig von der Prävalenz. PPV und NPV ändern sich mit der Prävalenz! Bei seltenen Erkrankungen (niedrige Prävalenz) sinkt der PPV dramatisch, selbst bei gutem Test (Bayes-Paradox).

{{DIAGRAM:sensitivity-specificity}}

**Rechenbeispiel — Vierfeldertafel aufstellen:**
Studie: 500 Personen, 200 krank (Goldstandard), 300 gesund. Test positiv bei 180 Kranken und 60 Gesunden.

| | Test + | Test - | Gesamt |
|---|--------|--------|--------|
| Krank | TP=180 | FN=20 | 200 |
| Gesund | FP=60 | TN=240 | 300 |
| Gesamt | 240 | 260 | 500 |

- Sensitivität = 180/200 = **90%**
- Spezifität = 240/300 = **80%**
- PPV = 180/240 = **75%** (gilt nur bei dieser Prävalenz von 40%!)
- NPV = 240/260 = **92,3%**

> **Merke:** In Studiendaten ist die Prävalenz oft künstlich hoch (hier 40%). In der Praxis (z. B. Prävalenz 1%) wäre der PPV viel niedriger. Immer auf die Prävalenz achten, wenn PPV/NPV interpretiert werden!

---

## p-Wert und Hypothesentests

Der **p-Wert** beantwortet: "Wenn kein Effekt existiert (H0 wahr) — wie wahrscheinlich wäre ein so extremes Ergebnis oder extremer?"

**Nullhypothese (H0):** "Kein Effekt", "kein Unterschied"

- p < 0,05: **Statistisch signifikant** → H0 wird abgelehnt
- p größer gleich 0,05: Kein ausreichender Beweis gegen H0 (aber KEIN Beweis FÜR H0!)

**Drei häufige Prüfungsfallen:**
1. p-Wert ist NICHT "Wahrscheinlichkeit, dass H0 wahr ist"
2. p < 0,05 bedeutet NICHT "klinisch bedeutsam" — nur statistisch signifikant
3. Riesige Stichproben machen selbst triviale Unterschiede "signifikant"

**Fehlertypen — Analogie zur Diagnostik:**

| | H0 wahr (kein Effekt) | H0 falsch (Effekt existiert) |
|---|---|---|
| **H0 ablehnen** | Typ-I-Fehler (Alpha = 0,05) | Korrekt! (Power = 1-Beta) |
| **H0 beibehalten** | Korrekt! | Typ-II-Fehler (Beta = 0,20) |

- **Typ-I-Fehler** = "falsch positives" Studienergebnis (wie ein falsch-positiver Test)
- **Typ-II-Fehler** = "falsch negatives" Studienergebnis (wie ein falsch-negativer Test)
- **Power** = 1 - Beta = Wahrscheinlichkeit, einen echten Effekt zu finden (Konvention: mindestens 80%)

> **Merke:** p < 0,05 = statistisch signifikant, aber klinische Relevanz braucht das Konfidenzintervall. Beispiel: Ein Medikament senkt den Blutdruck um 0,5 mmHg (p = 0,01 bei n = 10.000) — statistisch signifikant, aber klinisch wertlos. Das KI [0,1 ; 0,9] mmHg zeigt die winzige Effektgröße.

**Rechenbeispiel — p-Wert und KI zusammen:**
Neues Antihypertensivum: x̄ = 8 mmHg Senkung (n = 100, Sigma = 20).
SE = 20/10 = 2,0. z = 8/2,0 = 4,0 → p < 0,0001 (hochsignifikant)
95%-KI = 8 +/- 1,96 x 2,0 = **[4,1 ; 11,9] mmHg** → klinisch relevant (mindestens 4 mmHg)

> **Merke:** Typ-I-Fehler entspricht einem falsch-positiven Test, Typ-II-Fehler einem falsch-negativen Test. Alpha senken → Beta steigt — genau wie beim Sens/Spez-Tradeoff. Diese Parallele wird im MedAT gerne gefragt!

---

## ROC-Kurve — Tests visuell vergleichen

Die **ROC-Kurve** (Receiver Operating Characteristic) zeigt alle möglichen Sensitivität/Spezifität-Kombinationen eines Tests bei verschiedenen Cutoff-Werten.

**Aufbau:**
- x-Achse: 1 - Spezifität = Falsch-Positiv-Rate (0 bis 1)
- y-Achse: Sensitivität = Richtig-Positiv-Rate (0 bis 1)
- Jeder Punkt = ein Cutoff-Wert

**AUC (Area Under the Curve) — Testgüte auf einen Blick:**

| AUC | Bewertung | Analogie |
|-----|-----------|----------|
| 0,5 | Zufall (Diagonale) | Münzwurf |
| 0,7-0,8 | Akzeptabel | Brauchbarer Schnelltest |
| 0,8-0,9 | Gut | Solider Labortest |
| über 0,9 | Exzellent | Goldstandard-nahe |
| 1,0 | Perfekt | Kein Überlapp krank/gesund |

**Cutoff verschieben — der zentrale Tradeoff:**
- Cutoff senken (empfindlicher): Sensitivität steigt, Spezifität sinkt → mehr Kranke erkannt, aber auch mehr falsch Positive
- Cutoff erhöhen (strenger): Spezifität steigt, Sensitivität sinkt → weniger falsch Positive, aber Kranke werden übersehen
- Screening: hohe Sensitivität bevorzugen (niemanden übersehen)
- Bestätigungstest: hohe Spezifität bevorzugen (sichere Diagnose)

> **Merke:** Je näher die ROC-Kurve an der oberen linken Ecke, desto besser der Test. AUC > 0,8 = gut. Im MedAT wird typischerweise gefragt: "Was passiert, wenn der Cutoff gesenkt wird?" → Sensitivität steigt, Spezifität sinkt.

---

## Rechenbeispiele — Prüfungsformat

**Beispiel 1 — Referenzbereich berechnen:**
Cholesterin: N(Mu = 200, Sigma = 35) mg/dL.
Referenzbereich = Mu +/- 2 Sigma = 200 +/- 70 = **130-270 mg/dL** (95% der Gesunden)
Patient mit 235 mg/dL: z = (235-200)/35 = 1,0 → obere 16% → grenzwertig, aber innerhalb Referenz

**Beispiel 2 — Pathologischen Wert erkennen:**
Nüchternglukose: N(Mu = 90, Sigma = 12) mg/dL. Patient: 126 mg/dL.
z = (126-90)/12 = 36/12 = **3,0** → außerhalb Mu+3 Sigma → obere 0,15% → **Diabetes** (WHO: ab 126 mg/dL)

**Beispiel 3 — Sens/Spez-Tradeoff mit Zahlen:**
Troponin-Test, Notaufnahme (Prävalenz 10%, n = 1.000):
Alter Cutoff: Sens 85%, Spez 92% → TP=85, FP=72, PPV = 85/157 = **54%**
Neuer Cutoff (empfindlicher): Sens 95%, Spez 80% → TP=95, FP=180, PPV = 95/275 = **34,5%**
Entscheidung: Sensitiver Cutoff in der Notaufnahme (kein Infarkt verpassen!), dann spezifischer Bestätigungstest.

**Beispiel 4 — BMI-Perzentil bestimmen:**
BMI (20-30-Jährige): N(Mu = 23,5 kg/m², Sigma = 3,2 kg/m²). Ab welchem BMI gehört man zu den oberen 5%?
z = 1,645 → x = 23,5 + 1,645 x 3,2 = 23,5 + 5,26 = **28,76 kg/m²**

**Beispiel 5 — KI berechnen und interpretieren:**
LDL-Senkung: n = 64, x̄ = -32 mg/dL, Sigma = 16 mg/dL.
SE = 16/Wurzel(64) = 16/8 = 2,0. 95%-KI = -32 +/- 1,96 x 2,0 = **[-35,9 ; -28,1] mg/dL**
Null liegt NICHT im KI → Senkung ist statistisch signifikant.

**Beispiel 6 — 20-Laborwerte-Problem:**
Patient erhält 20 unabhängige Bluttests. Wahrscheinlichkeit, dass ALLE im Referenzbereich liegen:
P = 0,95 hoch 20 = 0,358 = **35,8%**. P(mindestens 1 auffällig) = 1 - 0,358 = **64,2%**
Jeder zweite Gesunde hat mindestens einen "auffälligen" Wert — das ist kein Fehler, sondern Statistik!`,
      lernziele: [
        "Mittelwert, Median und Modus aus einem gegebenen Datensatz berechnen und bei schiefer Verteilung den geeigneteren Lageparameter auswählen",
        "Varianz und Standardabweichung berechnen und interpretieren",
        "Die 68-95-99,7-Regel auf konkrete Normalverteilungsaufgaben anwenden",
        "Die z-Transformation z=(x-μ)/σ durchführen und z-Werte interpretieren",
        "Sensitivität, Spezifität, PPV und NPV aus einer Vierfeldertafel berechnen und klinisch interpretieren",
        "Ein 95%-Konfidenzintervall berechnen und die Rolle des Standardfehlers erklären",
        "Den p-Wert konzeptuell erklären und den Unterschied zu klinischer Bedeutsamkeit benennen",
        "Typ-I- und Typ-II-Fehler unterscheiden und den Zusammenhang zu Sens/Spez erkennen",
      ],
      sections: [
        {
          heading: "68-95-99,7-Regel — prüfungsrelevant anwenden",
          text: "Bei Normalverteilungsaufgaben im MedAT sind folgende Rechenschritte typisch: (1) μ und σ ablesen, (2) Intervall auf die Regel zurückführen (μ±1σ = 68%, μ±2σ = 95%), (3) Symmetrie nutzen: Außerhalb μ+2σ liegen 2,3% (nicht 4,6%), denn die Hälfte der 4,6% liegt links von μ-2σ. Beispiel: N(60, 10). P(X > 80) = P(X > μ+2σ) = 2,3%. P(40 < X < 80) = P(μ-2σ < X < μ+2σ) = 95%.",
          merksatz:
            "68-95-99,7: Auswendig lernen! Jede Seite einer 2σ-Abweichung enthält 2,3%, jede Seite einer 1σ-Abweichung 16%. Symmetrie ist der Schlüssel.",
        },
        {
          heading: "Sensitivität, Spezifität und die Merkhilfe SnNout/SpPin",
          text: "SnNout: ein Test mit hoher Sensitivität (Sn) hat, wenn er negativ (N) ausfällt, die Krankheit praktisch ausgeschlossen (out). Nützlich bei Ausschlussdiagnostik. SpPin: ein Test mit hoher Spezifität (Sp), wenn positiv (P), bestätigt die Diagnose (in). Nützlich zur Bestätigungsdiagnostik. In der Praxis: zunächst sensitiver Test (Screening), dann spezifischer Test zur Bestätigung (z.B. ELISA dann Western Blot in der HIV-Diagnostik).",
          merksatz:
            "SnNout: Hohe Sensitivität → Negativbefund schließt Krankheit aus. SpPin: Hohe Spezifität → Positivbefund bestätigt Krankheit.",
        },
        {
          heading: "z-Transformation und Konfidenzintervall — Schritt für Schritt",
          text: "Die z-Transformation z=(x-μ)/σ übersetzt jeden Wert in die Standardnormalverteilung. Drei Anwendungen: (1) Laborwert bewerten: z berechnen, mit 68-95-99,7 vergleichen. z>2 = auffällig. (2) Perzentil finden: z aus Tabelle ablesen, x=μ+z×σ rückrechnen. (3) Konfidenzintervall: KI = x̄ ± 1,96 × (σ/√n). Der Standardfehler SE = σ/√n wird kleiner bei größerem n → schmaleres KI → genauere Schätzung. Beim Vervierfachen von n halbiert sich der SE.",
          merksatz:
            "z = (x−μ)/σ: Universelle Skala. z = ±1 → 68%, z = ±2 → 95%, z = ±3 → 99,7%. KI = x̄ ± 1,96 × σ/√n für 95%-Konfidenz.",
        },
      ],
      merksätze: [
        "Lagemaße: Mittelwert (ausreißerempfindlich), Median (robust), Modus (häufigster Wert). Symmetrisch: alle drei gleich.",
        "Varianz teilt durch n-1 (Bessel-Korrektur!). Standardabweichung = Wurzel(Varianz) — gleiche Einheit wie Daten.",
        "68-95-99,7: Auswendig! Pro Seite: 1σ=16%, 2σ=2,3%, 3σ=0,15%. Symmetrie halbiert beidseitige Werte.",
        "z = (x-μ)/σ: Universelle Skala. z ≥ 2 = klinisch auffällig (obere 2,3%). z ≥ 3 = hochpathologisch.",
        "Sens = TP/(TP+FN) und Spez = TN/(TN+FP) sind TESTabhängig. PPV/NPV sind PRÄVALENZabhängig!",
        "SnNout: Negativer Test bei hoher Sensitivität schließt aus. SpPin: Positiver Test bei hoher Spezifität bestätigt.",
        "KI = x̄ ± 1,96 × σ/√n (95%). n vervierfachen = SE halbieren = KI-Breite halbieren.",
        "p < 0,05 = signifikant, aber NICHT klinisch relevant! Effektgröße zeigt das KI.",
        "Typ-I-Fehler = falsch positiv (α=5%). Typ-II-Fehler = falsch negativ (β=20%). Power = 1-β ≥ 80%.",
        "ROC: AUC > 0,8 = gut. Cutoff senken → Sens↑, Spez↓. Cutoff erhöhen → Spez↑, Sens↓.",
        "20 Laborwerte → P(≥1 auffällig) = 64%. Ein Wert außerhalb Referenz ist nicht automatisch pathologisch!",
        "z-Tabelle: 1,645 = einseitig 5%, 1,96 = beidseitig 2,5% (95%-KI), 2,576 = 99%-KI.",
      ],
      selfTest: [
        {
          question: "Datensatz: {2, 4, 4, 6, 9}. Welche Aussage stimmt?",
          options: [
            "Mittelwert = 5, Median = 4, Modus = 4",
            "Mittelwert = 4, Median = 5, Modus = 4",
            "Mittelwert = 5, Median = 5, Modus = 4",
            "Mittelwert = 4, Median = 4, Modus = 5",
            "Mittelwert = 5, Median = 4, Modus = 6",
          ],
          correctIndex: 0,
          explanation:
            "Mittelwert = (2+4+4+6+9)/5 = 25/5 = 5. Sortiert: {2,4,4,6,9} → Median = Position 3 = 4. Modus = 4 (kommt 2× vor). Da Mittelwert > Median, liegt eine leicht rechtsschiefe Verteilung vor (der Ausreißer 9 zieht den Mittelwert nach rechts).",
          hints: [
            "Mittelwert = Summe/Anzahl. Median = mittlerer Wert sortiert. Modus = häufigster.",
          ],
          difficulty: 1,
          tags: ["lagemaße", "mittelwert", "median", "modus"],
        },
        {
          question:
            "Körpergröße: N(μ=170, σ=10) cm. Wie viel Prozent der Personen sind zwischen 150 und 190 cm groß?",
          options: ["ca. 95%", "ca. 68%", "ca. 99,7%", "ca. 50%", "ca. 84%"],
          correctIndex: 0,
          explanation:
            "150 = 170 - 20 = μ - 2σ. 190 = 170 + 20 = μ + 2σ. Das Intervall μ ± 2σ enthält nach der 68-95-99,7-Regel ca. 95% der Daten. Merke: ±1σ = 68%, ±2σ = 95%, ±3σ = 99,7%.",
          hints: [
            "Wie viele σ liegen 150 und 190 vom Mittelwert 170 entfernt?",
            "150 = μ−2σ, 190 = μ+2σ → 68-95-99,7-Regel anwenden.",
          ],
          difficulty: 1,
          tags: ["normalverteilung", "68-95-99.7"],
        },
        {
          question: "N(μ=50, σ=5). Wie viel Prozent der Werte liegen OBERHALB von 60?",
          options: ["ca. 2,3%", "ca. 4,6%", "ca. 16%", "ca. 5%", "ca. 0,15%"],
          correctIndex: 0,
          explanation:
            "60 = 50 + 10 = μ + 2σ. Außerhalb μ±2σ liegen beidseitig ca. 4,6%. Durch Symmetrie: nur die Hälfte (2,3%) liegt OBERHALB μ+2σ. Typische MedAT-Falle: 4,6% ist der beidseitige Wert, gefragt ist aber einseitig!",
          hints: [
            "60 = μ + 2σ. Außerhalb ±2σ liegen 4,6% beidseitig.",
            "Einseitig = 4,6% / 2 = 2,3%.",
          ],
          difficulty: 2,
          tags: ["normalverteilung", "symmetrie", "68-95-99.7"],
        },
        {
          question: "Vierfeldertafel: TP=90, FN=10, TN=180, FP=20. Welche Aussage ist FALSCH?",
          options: [
            "Der PPV beträgt 90%",
            "Die Sensitivität beträgt 90%",
            "Die Spezifität beträgt 90%",
            "Insgesamt wurden 300 Personen getestet",
            "Der NPV beträgt 180/190 ≈ 94,7%",
          ],
          correctIndex: 0,
          explanation:
            "PPV = TP/(TP+FP) = 90/(90+20) = 90/110 ≈ 81,8% — NICHT 90%! Sensitivität = 90/(90+10) = 90% ✓. Spezifität = 180/(180+20) = 90% ✓. Gesamt = 90+10+180+20 = 300 ✓. NPV = 180/(180+10) = 180/190 ≈ 94,7% ✓. Bei Falsch-Aussagen-Fragen immer alle Optionen durchrechnen!",
          hints: [
            "PPV = TP/(TP+FP). Berechne: 90/(90+20) = ?",
            "Sens = TP/(TP+FN), Spez = TN/(TN+FP) — beide prüfen.",
          ],
          difficulty: 2,
          tags: ["sensitivität", "spezifität", "ppv", "vierfeldertafel"],
        },
        {
          question: "Was ist der korrekte Umgang mit einem p-Wert von p = 0,03?",
          options: [
            "Statistisch signifikant (p < 0,05), H0 wird abgelehnt",
            "Die Nullhypothese ist mit 3% Wahrscheinlichkeit wahr",
            "Das Ergebnis ist klinisch bedeutsam",
            "97% Beweis für die Alternativhypothese",
            "Der Test muss mit p < 0,01 wiederholt werden",
          ],
          correctIndex: 0,
          explanation:
            "p = 0,03 < 0,05: statistisch signifikant → H0 wird abgelehnt. Aber: p ≠ 'Wahrscheinlichkeit, dass H0 wahr ist' (häufigster Fehler!). p bedeutet: WENN H0 wahr wäre, würde ein so extremes Ergebnis nur mit 3% Wahrscheinlichkeit auftreten. Klinische Bedeutsamkeit erfordert zusätzlich das Konfidenzintervall und die Effektgröße.",
          hints: [
            "p < 0,05 → statistisch signifikant. Punkt.",
            "p ist NICHT die Wahrscheinlichkeit, dass H0 stimmt!",
          ],
          difficulty: 2,
          tags: ["p-wert", "signifikanz", "hypothesentest"],
        },
        {
          question:
            "Hb bei Männern: N(μ=15, σ=1,5) g/dL. Patient hat Hb = 12 g/dL. Wie ist der z-Wert zu interpretieren?",
          options: [
            "z = −2,0: untere 2,3%, an der Grenze zur Anämie",
            "z = −1,5: untere 6,7%, noch im Referenzbereich",
            "z = −3,0: untere 0,13%, hochpathologisch",
            "z = +2,0: obere 2,3%, Polyglobulie-Verdacht",
            "z = −1,0: untere 16%, unauffällig",
          ],
          correctIndex: 0,
          explanation:
            "z = (12 − 15) / 1,5 = −3/1,5 = −2,0. Der Wert liegt exakt 2 Standardabweichungen unter dem Mittelwert → untere 2,3%. Klinisch: Hb 12 bei Männern = μ−2σ = genau an der unteren Grenze des Referenzbereichs (12,0–18,0 g/dL) → Anämie-Grenzwert.",
          hints: [
            "z = (x − μ) / σ = (12 − 15) / 1,5.",
            "z = −2 → untere 2,3% (aus der 68-95-99,7-Regel).",
          ],
          difficulty: 2,
          tags: ["z-transformation", "normalverteilung", "laborwerte"],
        },
        {
          question: "Studie: x̄ = 80 mmHg, n = 25, σ = 10. Wie lautet das 95%-Konfidenzintervall?",
          options: [
            "[76,1 ; 83,9]",
            "[70,0 ; 90,0]",
            "[78,0 ; 82,0]",
            "[60,0 ; 100,0]",
            "[75,1 ; 84,9]",
          ],
          correctIndex: 0,
          explanation:
            "SE = σ/√n = 10/√25 = 10/5 = 2,0. 95%-KI = x̄ ± 1,96 × SE = 80 ± 1,96 × 2,0 = 80 ± 3,92 = [76,08 ; 83,92] ≈ [76,1 ; 83,9]. Merke: n vervierfachen → SE halbieren → KI-Breite halbieren. Hier mit n=100: SE=1,0 → KI=[78,0;82,0].",
          hints: ["SE = σ/√n = 10/5 = 2,0.", "95%-KI = 80 ± 1,96 × 2,0 = 80 ± 3,92."],
          difficulty: 3,
          tags: ["konfidenzintervall", "standardfehler"],
        },
        {
          question:
            "Ein Patient erhält 20 unabhängige Laboruntersuchungen. Wie wahrscheinlich ist mindestens ein auffälliger Wert (außerhalb des 95%-Referenzbereichs)?",
          options: ["ca. 64%", "ca. 5%", "ca. 36%", "ca. 95%", "ca. 20%"],
          correctIndex: 0,
          explanation:
            "Jeder Wert liegt mit P=0,95 im Referenzbereich. P(alle 20 normal) = 0,95²⁰ = 0,358 ≈ 36%. P(mindestens 1 auffällig) = 1 − 0,358 = 0,642 ≈ 64%. Klinisch wichtig: Mehr als jeder zweite Gesunde hat bei 20 Tests mindestens einen 'auffälligen' Wert — das ist kein Diagnosegrund!",
          hints: [
            "P(einzeln normal) = 0,95. P(alle 20 normal) = 0,95²⁰.",
            "1 − 0,95²⁰ = 1 − 0,358 = ?",
          ],
          difficulty: 3,
          tags: ["wahrscheinlichkeit", "referenzbereich", "laborwerte"],
        },
      ],
      altfrage: {
        question:
          "In einer klinischen Studie wird ein neuer Biomarker für Herzinfarkt getestet. Von 200 Herzinfarkt-Patienten liefert der Test bei 176 ein positives Ergebnis. Von 300 herzgesunden Kontrollpersonen liefert der Test bei 30 ein positives Ergebnis. (a) Berechnen Sie Sensitivität und Spezifität. (b) Berechnen Sie PPV und NPV. (c) Wenn dieser Test in einer Notaufnahme mit angenommener Herzinfarkthäufigkeit von 15% eingesetzt wird, wie interpretieren Sie den PPV im klinischen Kontext?",
        answer:
          "Teil (a): TP=176, FN=24, FP=30, TN=270. Sensitivität = 176/(176+24) = 176/200 = 88%. Spezifität = 270/(270+30) = 270/300 = 90%. Teil (b): PPV = 176/(176+30) = 176/206 ≈ 85,4%. NPV = 270/(270+24) = 270/294 ≈ 91,8%. Diese PPV/NPV-Werte gelten für die Stichprobenprävalenz (200/500 = 40%). Teil (c): In der Notaufnahme mit Prävalenz 15% (niedrigere Vortestwahrscheinlichkeit): PPV sinkt. Mit Vierfeldertafel für n=1000: Krank=150, TP=132, FN=18. Gesund=850, FP=85, TN=765. PPV = 132/(132+85) = 132/217 ≈ 60,8%. Klinisch: 6 von 10 positiv Getesteten in der Notaufnahme haben tatsächlich einen Herzinfarkt — solide, aber Bestätigungsdiagnostik (EKG, Troponin) ist essenziell. NPV = 765/(765+18) = 765/783 ≈ 97,7% — ein negatives Ergebnis schließt Herzinfarkt mit hoher Sicherheit aus.",
      },
      diagram: "probability-distribution",
      klinischerBezug:
        "Normalverteilung, Referenzbereiche und Testergebnisse sind das tägliche Handwerkszeug in der klinischen Medizin. Laborwerte sind oft normalverteilt — Referenzbereiche werden als μ±2σ definiert, sodass 5% gesunder Personen außerhalb liegen (falsch 'pathologisch'). Sensitivität und Spezifität entscheiden über den klinischen Einsatz eines Tests: HIV-Screening (hohe Sensitivität) vs. Bestätigungstest (hohe Spezifität). Der p-Wert aus klinischen Studien bestimmt die Zulassung von Medikamenten — aber klinische Bedeutsamkeit (Number Needed to Treat, NNT) ist die relevantere Maßzahl für den Arzt am Krankenbett.",
    },
  ],
};
