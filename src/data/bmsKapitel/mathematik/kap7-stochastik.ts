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
      content: `## Einleitung

Wie viele verschiedene DNA-Codons gibt es aus vier Basen? Auf wie viele Arten kann ein Chirurg drei von acht verfügbaren Instrumenten auswählen? Und warum ist die Chance, im Lotto zu gewinnen, so verschwindend gering? All diese Fragen beantwortet die Kombinatorik — die Kunst des systematischen Zählens, ohne jede Möglichkeit einzeln aufzulisten. Der Schlüssel liegt in zwei Entscheidungen: Zählt die Reihenfolge? Und darf ein Element mehrfach vorkommen? Aus diesen zwei Fragen ergeben sich vier Formeltypen, die im MedAT regelmäßig geprüft werden.

**In diesem Kapitel lernst du:**
- wie du mit zwei Entscheidungsfragen (Reihenfolge? Wiederholung?) die richtige Formel wählst
- wie Permutationen alle Anordnungen einer Menge zählen und was sich bei identischen Elementen ändert
- wie Variationen k aus n Objekte mit Reihenfolge zählen (z. B. PIN-Codes, Passwörter)
- wie Kombinationen und der Binomialkoeffizient Auswahlen ohne Reihenfolge beschreiben (z. B. Lotto, Studiengruppen)
- wie du das Pascalsche Dreieck für schnelle Berechnungen kleiner Binomialkoeffizienten nutzt

---

{{DIAGRAM:combinatorics-tree}}

{{DIAGRAM:probability-distribution}}

## Grundbegriffe und Entscheidungsbaum





Bevor man eine Formel anwendet, beantwortet man zwei Fragen:

**Idee:** Kombinatorik beantwortet „Wie viele Möglichkeiten?“ — durch systematisches Zählen ohne alles aufzulisten. Entscheidend: **Reihenfolge relevant?** (geordnet → Variation/Permutation; ungeordnet → Kombination) und **Wiederholung erlaubt?** (mit/ohne). So vermeidest du die falsche Formel.

**Verfahren:** (1) Reihenfolge wichtig? Ja → Permutation (alle n) oder Variation (k aus n); Nein → Kombination. (2) Wiederholung? Ohne → Fakultäten n!/(n−k)! bzw. (n über k); mit → n^k bzw. Kombination mit Wdh. Permutation mit identischen Elementen: n!/(k₁!·k₂!·…).

1. **Spielt die Reihenfolge eine Rolle?** (geordnet vs. ungeordnet)
2. **Darf ein Objekt mehrfach vorkommen?** (mit vs. ohne Wiederholung)

| Reihenfolge | Wiederholung | Begriff | Formel |
|-------------|--------------|---------|--------|
| Ja | Nein | Variation ohne Wdh. | n! / (n-k)! |
| Ja | Ja | Variation mit Wdh. | n^k |
| Nein | Nein | Kombination ohne Wdh. | n! / (k! × (n-k)!) |
| Nein | Ja | Kombination mit Wdh. | (n+k-1)! / (k! × (n-1)!) |

> **Merke:** Die Entscheidung "geordnet oder ungeordnet" ist der wichtigste erste Schritt — sie bestimmt, ob man Permutation/Variation oder Kombination verwendet.

**Typische Prüfungsfehler:** Variation mit Kombination verwechseln (z. B. „3 aus 8 auswählen“ ohne Reihenfolge → Kombination; „Vorsitz + Stellvertreter“ → Variation). Bei Permutation mit Wiederholung das Teilen durch k₁!·k₂!… vergessen. (n über k): Nenner k!·(n−k)!, nicht nur k!.

---

## Die Fakultät — Grundbaustein aller Formeln

Die **Fakultät** n! (sprich: "n Fakultät") ist das Produkt aller natürlichen Zahlen von 1 bis n:

n! = 1 × 2 × 3 × ... × n

Besondere Werte: 0! = 1 (per Definition), 1! = 1, 2! = 2, 3! = 6, 4! = 24, 5! = 120, 6! = 720, 7! = 5040, 10! = 3.628.800

> **Merke:** 0! = 1 ist keine Ausnahme, sondern folgt aus der Rekursionsformel (n+1)! = (n+1) × n!, rückwärts angewendet.

---

## Permutationen

Eine **Permutation** ist eine Anordnung aller n verschiedenen Objekte in einer Reihe.

**Ohne Wiederholung:** P(n) = n!

Beispiel: Wie viele Reihenfolgen gibt es für die Buchstaben A, B, C, D?
P(4) = 4! = 24

Beispiel MedAT-Kontext: 5 Personen sollen auf 5 Stühlen Platz nehmen. Wie viele Sitzordnungen gibt es?
P(5) = 5! = 120

**Mit Wiederholung** (wenn gleiche Objekte vorkommen): Sind von n Objekten k1 gleich vom Typ 1, k2 gleich vom Typ 2 usw., dann gilt:

P(n; k1, k2, ...) = n! / (k1! × k2! × ...)

Beispiel: Wie viele unterschiedliche Wörter lassen sich aus den Buchstaben ANNA bilden?
n = 4, A kommt 2-mal vor (k1 = 2), N kommt 2-mal vor (k2 = 2).
P = 4! / (2! × 2!) = 24 / 4 = 6
Die 6 Anordnungen: ANNA, ANAN, AANN, NANA, NAAN, NNAA.

> **Merke:** Bei Permutationen mit Wiederholung teilt man durch die Fakultäten der identischen Elemente, weil ihre Vertauschungen nicht unterscheidbar sind.

**Weitere Rechenbeispiele — Permutationen:**

**Beispiel: Sitzordnung am runden Tisch:**
6 Ärzte setzen sich an einen runden Tisch. Beim runden Tisch zählt nur die relative Anordnung (da man den Tisch drehen kann). Kreispermutation: (n−1)! = 5! = **120** Anordnungen. (Bei linearer Anordnung wären es 6! = 720.)

**Beispiel: Buchstaben von MISSISSIPPI:**
n = 11 Buchstaben: M(1×), I(4×), S(4×), P(2×).
P = 11! / (1! × 4! × 4! × 2!) = 39.916.800 / (1 × 24 × 24 × 2) = 39.916.800 / 1.152 = **34.650** verschiedene Anordnungen.

**Beispiel (MedAT): DNA-Sequenz mit Basenwiederholungen:**
Wie viele verschiedene Reihenfolgen gibt es für eine DNA-Sequenz mit 3×A, 2×T, 1×G, 1×C (7 Basen)?
P = 7! / (3! × 2! × 1! × 1!) = 5.040 / (6 × 2 × 1 × 1) = 5.040 / 12 = **420** verschiedene Sequenzen.

---

## Variationen

Eine **Variation** ordnet k Elemente aus n an — die Reihenfolge zählt, aber es werden nur k der n Objekte ausgewählt.

**Ohne Wiederholung:** V(n, k) = n! / (n-k)!

Beispiel: Wie viele 3-stellige Zahlen aus den Ziffern 1, 2, 3, 4, 5 (ohne Wiederholung)?
V(5, 3) = 5! / (5-3)! = 120 / 2 = 60

Erklärung: Für die erste Stelle 5 Möglichkeiten, für die zweite 4, für die dritte 3 → 5 × 4 × 3 = 60.

**Mit Wiederholung:** V(n, k) = n^k

Beispiel: Wie viele 4-stellige PIN-Codes aus den Ziffern 0–9?
V(10, 4) = 10^4 = 10.000

Beispiel: Wie viele Möglichkeiten hat ein Schloss mit 3 Walzen, jede mit 8 Symbolen?
V(8, 3) = 8^3 = 512

**Rechenbeispiel — Multiple-Choice-Test (MedAT-Kontext):**
Ein BMS-Test hat 40 Fragen mit je 5 Antwortmöglichkeiten (A–E). Ein Student rät bei jeder Frage zufällig.
Wie viele verschiedene Antwortbögen sind möglich?
Reihenfolge zählt (Frage 1 ≠ Frage 2), Wiederholung erlaubt (A darf mehrfach gewählt werden).
→ Variation mit Wiederholung: V(5, 40) = 5⁴⁰ ≈ 9,09 × 10²⁷ Möglichkeiten.
P(eine bestimmte Frage richtig durch Raten) = 1/5 = 20%.
Erwartungswert richtig geratener Fragen: 40 × 1/5 = **8 von 40**.

> **Merke:** "Mit Wiederholung" heißt: Jede Stelle kann unabhängig von den anderen belegt werden — Multiplikationsprinzip: n × n × n × ... (k-mal) = n^k.

---

## Kombinationen und der Binomialkoeffizient

Eine **Kombination** wählt k Elemente aus n aus — die Reihenfolge spielt keine Rolle.

**Ohne Wiederholung:** C(n, k) = "n über k" = n! / (k! × (n-k)!)

Der Ausdruck "n über k" heißt **Binomialkoeffizient** und wird geschrieben als (n k) oder C(n,k).

Beispiel Lotto "6 aus 49": Wie viele Möglichkeiten gibt es, 6 Zahlen aus 49 zu ziehen?
C(49, 6) = 49! / (6! × 43!) = (49 × 48 × 47 × 46 × 45 × 44) / (6 × 5 × 4 × 3 × 2 × 1)
= 10.068.347.520 / 720 = **13.983.816**

Rechenweg (Zähler: nur die oberen k Faktoren zählen):
Zähler = 49 × 48 × 47 × 46 × 45 × 44 = 10.068.347.520
Nenner = 6! = 720
Ergebnis = 13.983.816

> **Merke:** Beim Binomialkoeffizienten gilt C(n,k) = C(n, n-k). Es spielt keine Rolle, ob man "6 aus 49" oder "43 aus 49" wählt — die Anzahl ist identisch. Diese Symmetrie ist nützlich für schnelle Prüfungsberechnungen.

**Kurzrechnung mit der Symmetrie:**
C(10, 8) = C(10, 2) = (10 × 9)/(2 × 1) = 45. Statt 8 Faktoren im Zähler und 8! im Nenner rechnet man mit dem kleineren k = 2 — viel schneller!

**Weitere Rechenbeispiele — Binomialkoeffizient:**

C(6,2) = (6 × 5)/(2 × 1) = 30/2 = **15**
C(7,3) = (7 × 6 × 5)/(3 × 2 × 1) = 210/6 = **35**
C(8,4) = (8 × 7 × 6 × 5)/(4 × 3 × 2 × 1) = 1680/24 = **70**
C(10,3) = (10 × 9 × 8)/(3 × 2 × 1) = 720/6 = **120**
C(12,4) = (12 × 11 × 10 × 9)/(4 × 3 × 2 × 1) = 11880/24 = **495**

**Rechenbeispiel — Blutuntersuchungen auswählen:**
Aus 12 verfügbaren Bluttests soll der Arzt 4 für ein Screening-Panel auswählen. Reihenfolge egal, kein Test doppelt.
C(12, 4) = 495 verschiedene Panels. Würde die Reihenfolge zählen (z. B. Prioritätsreihung): V(12,4) = 12 × 11 × 10 × 9 = 11.880 — Faktor 24 = 4! mehr als bei Kombination.

> **Merke:** Für schnelles Kopfrechnen im MedAT lerne die häufigsten Binomialkoeffizienten auswendig: C(4,2)=6, C(5,2)=10, C(5,3)=10, C(6,2)=15, C(6,3)=20, C(7,3)=35, C(8,3)=56, C(10,3)=120. Das spart wertvolle Prüfungszeit.

**Mit Wiederholung** (Multisets): C(n+k-1, k) — seltener im MedAT, aber für Vollständigkeit:

Beispiel: 3 Kugeln aus 4 Farben mit Zurücklegen, Reihenfolge egal:
C(4+3-1, 3) = C(6, 3) = 20

---

## Pascalsches Dreieck

Das Pascalsche Dreieck ordnet die Binomialkoeffizienten in einem Dreieck an. Jede Zahl ist die Summe der zwei darüberliegenden Zahlen:

    Zeile 0:          1
    Zeile 1:        1   1
    Zeile 2:      1   2   1
    Zeile 3:    1   3   3   1
    Zeile 4:  1   4   6   4   1
    Zeile 5: 1  5  10  10   5  1

Zeile n enthält die Werte C(n,0), C(n,1), ..., C(n,n).
Rechenregel: C(n,k) = C(n-1, k-1) + C(n-1, k) ("Pascalsches Dreieck-Gesetz")

Wichtige Eigenschaften:
- Zeilensumme der Zeile n = 2^n (alle Teilmengen einer n-elementigen Menge)
- C(n,0) = C(n,n) = 1 (leere Menge und Gesamtmenge)
- C(n,1) = n

**Pascalsches Dreieck als Schnellreferenz:**
Für die Binomialverteilung B(n, p) braucht man C(n, k). Bei kleinem n liest man die Werte direkt ab:
- C(3,0)=1, C(3,1)=3, C(3,2)=3, C(3,3)=1 → Zeile 3
- C(4,0)=1, C(4,1)=4, C(4,2)=6, C(4,3)=4, C(4,4)=1 → Zeile 4
- C(5,0)=1, C(5,1)=5, C(5,2)=10, C(5,3)=10, C(5,4)=5, C(5,5)=1 → Zeile 5

**Rechenbeispiel — Binomialkoeffizient über Pascalsches Dreieck:**
P(genau 3 von 5 Münzwürfen = Kopf)? → C(5,3) × (1/2)³ × (1/2)² = 10 × 1/32 = **10/32 = 5/16 ≈ 31,3%**.
C(5,3) = 10 direkt aus Zeile 5 abgelesen — kein Rechnen nötig!

> **Merke:** Das Pascalsche Dreieck erlaubt das schnelle Ablesen kleiner Binomialkoeffizienten ohne Rechnung — nützlich für die Binomialverteilung in Wahrscheinlichkeitsaufgaben. Für n ≤ 5 ist Auswendiglernen der Zeilen effizienter als jede Formel.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Typische Aufgabentypen:**
- „Auf wie viele Arten können n Objekte angeordnet werden?“ → Permutation: n!
- „k aus n auswählen, Reihenfolge wichtig“ (z. B. PIN, Passwort) → Variation: n!/(n−k)! oder n^k (mit Wdh.)
- „k aus n auswählen, Reihenfolge egal“ (z. B. Lotto, Ausschuss) → Kombination: (n über k)
- Permutation mit identischen Elementen (z. B. ANNA) → n!/(k₁!·k₂!·…)

**Typische Fallen:**
- **Variation vs. Kombination:** „Vorsitz + Stellvertreter“ = Reihenfolge zählt → Variation. „3 von 8 Tests auswählen“ ohne Rang = Kombination.
- **Ohne/mit Zurücklegen:** Ohne Zurücklegen = ohne Wiederholung; mit Zurücklegen = mit Wiederholung (n^k bei Variation).
- **(n über k):** Nenner = k!·(n−k)!, nicht nur k!.

**Minimal-Rechenrezepte:**
- **Permutation (alle n):** P = n!. Mit identischen: P = n!/(k₁!·k₂!·…).
- **Variation (k aus n, geordnet):** ohne Wdh. V = n!/(n−k)! = n·(n−1)·…·(n−k+1); mit Wdh. V = n^k.
- **Kombination (k aus n, ungeordnet):** C(n,k) = n!/(k!(n−k)!) = (n·(n−1)·…·(n−k+1))/k!. Symmetrie: C(n,k) = C(n,n−k).
- **Erst fragen:** Reihenfolge? → Ja = V/P, Nein = C. Wiederholung? → mit = Potenz/n^k, ohne = Fakultät.

**Strategiebox — So löst du Kombinatorik-Aufgaben im MedAT (5 Schritte):**

1. **Lies die Aufgabe und identifiziere n und k.** n = Gesamtmenge (z. B. 10 Medikamente). k = Ausgewählte (z. B. 3 daraus).
2. **Frage 1: Reihenfolge wichtig?** Gibt es verschiedene Rollen/Positionen (Vorsitz, 1. Assistent…)? → Ja = Variation. Nur „Team zusammenstellen"? → Nein = Kombination.
3. **Frage 2: Wiederholung erlaubt?** Kann dasselbe Element mehrfach vorkommen (z. B. PIN-Ziffern)? → Ja = mit Wiederholung. Wird jedes Element nur einmal verwendet? → Nein = ohne.
4. **Formel einsetzen.** Bei Kombination: C(n,k) = n!/(k!(n−k)!). Bei Variation ohne Wdh.: n!/(n−k)!. Bei Variation mit Wdh.: nᵏ.
5. **Plausibilität prüfen.** Kombination < Variation (bei gleichen n, k) — da Reihenfolge Faktor k! hinzufügt. Ergebnis muss ganzzahlig > 0 sein.

**Häufige Signalwörter im MedAT:**
- „Anordnung", „Reihenfolge", „Rang", „Position" → **Variation/Permutation** (geordnet)
- „Auswahl", „Zusammensetzung", „Team", „Gruppe" → **Kombination** (ungeordnet)
- „mit Zurücklegen", „darf wiederholt werden", „unabhängig" → **mit Wiederholung**
- „ohne Zurücklegen", „verschiedene", „jedes nur einmal" → **ohne Wiederholung**

---

## Übersichtstabelle: Alle vier Formeltypen

| | **Ohne Wiederholung** | **Mit Wiederholung** |
|---|---|---|
| **Geordnet (Reihenfolge zählt)** | **Variation** V(n,k) = n!/(n−k)! | **Variation** V(n,k) = nᵏ |
| | *Beispiel:* 3 Buchstaben aus 5 → 5!/2! = 60 | *Beispiel:* 4-stellige PIN (0–9) → 10⁴ = 10.000 |
| **Ungeordnet (Reihenfolge egal)** | **Kombination** C(n,k) = n!/(k!·(n−k)!) | **Kombination** C(n+k−1,k) |
| | *Beispiel:* Lotto 6/45 → C(45,6) ≈ 8 Mio | *Beispiel:* 3 Kugeln aus 4 Farben → C(6,3) = 20 |
| **Alle n anordnen** | **Permutation** P = n! | **Permutation** P = n!/(k₁!·k₂!·…) |
| | *Beispiel:* 5 Personen → 5! = 120 | *Beispiel:* MAMA → 4!/(2!·2!) = 6 |

> **Merke:** Lerne diese Tabelle auswendig — im MedAT reicht es, die zwei Entscheidungsfragen zu beantworten (Reihenfolge? Wiederholung?), um die richtige Formel sofort aus der Tabelle abzulesen.

---

## Rechenbeispiele

**Beispiel 1 — Blutgruppen-Phänotypen: Wie viele AB0-Rhesus-Kombinationen gibt es?**
AB0 hat 4 Phänotypen (A, B, AB, 0), Rhesus hat 2 (Rh+ , Rh−). Jede Person hat genau eine AB0- und eine Rhesus-Eigenschaft (Reihenfolge egal, keine Wiederholung innerhalb der Kategorie). Multiplikationsprinzip: 4 × 2 = **8 verschiedene Blutgruppen-Phänotypen** (A+, A−, B+, B−, AB+, AB−, 0+, 0−). Erweitert man um Kell (2 Varianten): 4 × 2 × 2 = **16**.

**Beispiel 2 — Studien-Randomisierung: 3 von 8 Medikamenten für einen Arm auswählen:**
In einer klinischen Studie sollen 3 Medikamente aus 8 verfügbaren gleichzeitig getestet werden (Reihenfolge egal, ohne Wiederholung). → Kombination: C(8,3) = (8 × 7 × 6) / (3 × 2 × 1) = 336 / 6 = **56 mögliche Dreier-Kombinationen**. Soll zusätzlich ein viertes Medikament als Reserve bestimmt werden (Reihenfolge der Reserve zählt): Variation V(8,4) = 8!/4! = 8 × 7 × 6 × 5 = **1.680**.

**Beispiel 3 — DNA-Codons: Wie viele verschiedene Basentripletts gibt es?**
4 Basen (A, U/T, G, C), je 3 Positionen, Wiederholung erlaubt, Reihenfolge zählt (AUG ≠ GUA). → Variation mit Wiederholung: V(4,3) = 4³ = **64 mögliche Codons**. Davon codieren 61 für Aminosäuren (3 Stopp-Codons). Mit 20 Aminosäuren → Code ist degeneriert (redundant): im Schnitt 61/20 ≈ 3 Codons pro Aminosäure.

**Beispiel 4 — Chirurgisches Team zusammenstellen:**
Aus 12 Chirurgen sollen ein Operateur, ein 1. Assistent und ein 2. Assistent bestimmt werden.
Reihenfolge zählt (verschiedene Rollen) → Variation ohne Wiederholung.
V(12, 3) = 12!/(12−3)! = 12 × 11 × 10 = **1.320 Möglichkeiten**.
Vergleich: Würde man nur ein 3er-Team ohne Rollenverteilung wählen → C(12,3) = (12 × 11 × 10)/(3 × 2 × 1) = 1.320/6 = **220**. Das Verhältnis 1.320/220 = 6 = 3! bestätigt: Variation = Kombination × k!.

**Beispiel 5 — Genetik: Heterozygote Genotypen bei 4 Allelen:**
Ein Gen hat 4 Allele (A₁, A₂, A₃, A₄). Wie viele heterozygote Genotypen gibt es?
Heterozygot = 2 verschiedene Allele, Reihenfolge egal (A₁A₂ = A₂A₁) → Kombination ohne Wiederholung.
C(4, 2) = (4 × 3)/(2 × 1) = **6 heterozygote Genotypen**.
Homozygot: 4 Genotypen (A₁A₁, …). Gesamt: 6 + 4 = 10. Allgemein bei n Allelen: C(n,2) + n = n(n+1)/2.

**Beispiel 6 — Passwort-Sicherheit: Kombination vs. Variation:**
Ein Passwort hat 8 Zeichen aus 62 Symbolen (a–z, A–Z, 0–9), Wiederholung erlaubt, Reihenfolge zählt.
V(62, 8) = 62⁸ = 62 × 62 × 62 × 62 × 62 × 62 × 62 × 62 ≈ **2,18 × 10¹⁴** Möglichkeiten.
Zum Vergleich: Nur Kleinbuchstaben (26 Zeichen): V(26,8) = 26⁸ ≈ 2,09 × 10¹¹ — Faktor 1.000 weniger sicher.

**Beispiel 7 — Prüfungskommission (Kombination mit Einschränkung):**
Aus 10 Professoren (6 Männer, 4 Frauen) soll eine 3er-Kommission mit mindestens 1 Frau gebildet werden.
Gesamt ohne Einschränkung: C(10,3) = (10×9×8)/(3×2×1) = 720/6 = **120**.
Nur Männer (kein Frau): C(6,3) = (6×5×4)/(3×2×1) = 120/6 = **20**.
Mit mindestens 1 Frau = Gesamt − nur Männer = 120 − 20 = **100 Kommissionen**.
Methode: **Komplementstrategie** — einfacher als alle Fälle (1F+2M, 2F+1M, 3F) einzeln zu zählen.

**Beispiel 8 — Multiplikationsprinzip (Diagnostik-Algorithmus):**
Ein Diagnosepfad hat 3 Stufen: Stufe 1 (4 Bluttests), Stufe 2 (3 Bildgebungen), Stufe 3 (2 Biopsietypen).
Wie viele verschiedene diagnostische Pfade gibt es?
Multiplikationsprinzip: 4 × 3 × 2 = **24 verschiedene Pfade**.
Unabhängig von der Kombinatorik-Formel — das Multiplikationsprinzip ist der fundamentalste Zählbaustein.

## Zusammenfassung (ultrakompakt)

- **Permutation** (alle n, geordnet, ohne WH): P = n!; mit WH: P = n!/k₁!×k₂!×...
- **Variation** (k aus n, geordnet, ohne WH): V = n!/(n−k)!; mit WH: V = nᵏ
- **Kombination** (k aus n, ungeordnet, ohne WH): C = n!/(k!×(n−k)!) = C(n,k); mit WH: C = C(n+k−1,k)
- **Entscheidung**: Reihenfolge zählt? → geordnet (Variation/Permutation); Wiederholung erlaubt? → mit WH
- **Klinisch**: Blutgruppen (8 Kombinationen); DNA-Codons (64 = 4³); Studienrandomisierung (C(8,3) = 56)`,
      lernziele: [
        "Die vier kombinatorischen Grundtypen (Permutation/Variation/Kombination × mit/ohne Wiederholung) anhand der Entscheidungsfragen 'geordnet?' und 'Wiederholung?' korrekt zuordnen",
        "Permutationen ohne und mit Wiederholung berechnen und die Formel für identische Elemente anwenden",
        "Den Binomialkoeffizienten C(n,k) = n!/(k!(n-k)!) berechnen und seine Symmetrie C(n,k)=C(n,n-k) nutzen",
        "Variationen und Kombinationen in Textaufgaben vom MedAT-Typ erkennen und korrekt berechnen",
        "Das Pascalsche Dreieck für kleine Binomialkoeffizienten verwenden",
      ],
      sections: [
        {
          heading: "Entscheidungsbaum: Die richtige Formel finden",
          text: "Der erste Schritt bei jeder Kombinatorik-Aufgabe ist nicht das Rechnen, sondern das Analysieren: Zählt die Reihenfolge? Wenn ja, liegt Permutation oder Variation vor. Wenn nein, ist es eine Kombination. Zweite Frage: Darf ein Element mehrfach auftreten? Wenn ja, gilt die Wiederholungsformel. Nur wer diese Fragen zuerst beantwortet, wählt die richtige Formel und vermeidet den häufigsten Prüfungsfehler.",
          merksatz:
            "Zwei Fragen vor jeder Aufgabe: (1) Reihenfolge wichtig? → Ja = Variation/Permutation, Nein = Kombination. (2) Wiederholung erlaubt? → Ja = Potenzformel, Nein = Fakultätformel.",
        },
        {
          heading: "Binomialkoeffizient — Rechenschritte",
          text: "Für C(n,k) kürzt man zuerst den Nenner (n-k)! gegen die letzten (n-k) Faktoren im Zähler n!, so dass im Zähler nur die k größten Faktoren (n, n-1, ..., n-k+1) stehen. Dann teilt man durch k!. Beispiel C(8,3) = (8×7×6)/(3×2×1) = 336/6 = 56. Diese Schreibweise ist rechnerisch viel einfacher als das vollständige Ausschreiben der Fakultäten.",
          merksatz:
            "C(n,k) Rechenschritt: Zähler = n×(n-1)×...×(n-k+1) (k Faktoren), Nenner = k!. Symmetrie: C(n,k) = C(n, n-k) — nimm immer das kleinere k.",
        },
      ],
      merksätze: [
        "Permutation (alle anordnen): n! ohne, n!/(k1!×k2!×...) mit identischen Elementen",
        "Variation (k aus n, geordnet): n!/(n-k)! ohne Wiederholung, n^k mit Wiederholung",
        "Kombination (k aus n, ungeordnet): C(n,k) = n!/(k!×(n-k)!) ohne Wiederholung",
        "Lotto 6 aus 45: C(45,6) = 8.145.060 — Reihenfolge zählt nicht, ohne Zurücklegen",
        "Pascalsches Dreieck: C(n,k) = C(n-1,k-1) + C(n-1,k) — Additions-Eigenschaft",
        "0! = 1 per Definition — wichtig für C(n,0) = 1 und C(n,n) = 1",
        "Bei 'Wiederholung erlaubt': Multiplikationsprinzip → n^k Möglichkeiten",
      ],
      selfTest: [
        {
          question:
            "Ein Arzt möchte 4 Patienten in einer bestimmten Reihenfolge einbestellen. Wie viele verschiedene Reihenfolgen gibt es?",
          options: ["24", "12", "16", "8", "4"],
          correctIndex: 0,
          explanation:
            "Es werden alle 4 Patienten angeordnet (Reihenfolge wichtig, alle Objekte) → Permutation: P(4) = 4! = 4 × 3 × 2 × 1 = 24. Merkhilfe: Für den ersten Termin 4 Möglichkeiten, dann 3, dann 2, dann 1. Multiplikationsprinzip: 4 × 3 × 2 × 1 = 24.",
          hints: [
            "Alle 4 Patienten werden angeordnet, Reihenfolge zählt → Permutation.",
            "P(4) = 4! = 4 × 3 × 2 × 1 = ?",
          ],
          difficulty: 1,
          tags: ["permutation", "fakultät", "kombinatorik"],
        },
        {
          question:
            "Eine Studie wählt 3 Medikamente aus 7 verfügbaren aus, um sie gleichzeitig zu testen (Reihenfolge spielt keine Rolle). Wie viele Kombinationen gibt es?",
          options: ["35", "21", "210", "42", "105"],
          correctIndex: 0,
          explanation:
            "Reihenfolge unwichtig, ohne Wiederholung → Kombination: C(7,3) = 7!/(3!×4!) = (7×6×5)/(3×2×1) = 210/6 = 35. Kurzrechnung: Zähler nur die 3 oberen Faktoren (7×6×5 = 210), Nenner = 3! = 6. Ergebnis: 35.",
          hints: [
            "Reihenfolge spielt keine Rolle → Kombination, nicht Variation.",
            "C(7,3) = (7×6×5)/(3×2×1) = ?",
          ],
          difficulty: 2,
          tags: ["kombination", "binomialkoeffizient", "kombinatorik"],
        },
        {
          question:
            "Ein Zahlencode besteht aus 3 Stellen, jede Stelle kann eine Ziffer von 1–6 sein (Wiederholung erlaubt). Wie viele Codes gibt es?",
          options: ["216", "120", "36", "18", "729"],
          correctIndex: 0,
          explanation:
            "Reihenfolge zählt (Code 123 ≠ Code 321), Wiederholung erlaubt → Variation mit Wiederholung: V(6,3) = 6^3 = 216. Jede der 3 Stellen hat unabhängig 6 Möglichkeiten: 6 × 6 × 6 = 216.",
          hints: [
            "Reihenfolge zählt (Code), Wiederholung erlaubt → V(n,k) = n^k.",
            "V(6,3) = 6^3 = ?",
          ],
          difficulty: 1,
          tags: ["variation", "wiederholung", "kombinatorik"],
        },
        {
          question:
            "Wie viele unterschiedliche Anordnungen gibt es für das Wort LEVEL (5 Buchstaben, E kommt 2×, L kommt 2× vor)?",
          options: ["30", "60", "120", "24", "10"],
          correctIndex: 0,
          explanation:
            "Permutation mit Wiederholung: n = 5, L kommt 2× vor (k1=2), E kommt 2× vor (k2=2). P = 5!/(2!×2!) = 120/(2×2) = 120/4 = 30. Die Formel teilt durch die Fakultäten der identischen Elemente, weil deren Vertauschungen nicht unterscheidbar sind.",
          hints: [
            "Permutation mit identischen Elementen: P = n!/(k1!×k2!×...)",
            "n=5, L: 2×, E: 2× → 5!/(2!×2!) = ?",
          ],
          difficulty: 2,
          tags: ["permutation", "wiederholung", "kombinatorik"],
        },
        {
          question:
            "Beim österreichischen Lotto werden 6 Zahlen aus 45 gezogen (ohne Zurücklegen, Reihenfolge egal). Welcher Wert liegt am nächsten an der korrekten Anzahl der Möglichkeiten?",
          options: ["8 Millionen", "1 Million", "45 Millionen", "120.000", "300.000"],
          correctIndex: 0,
          explanation:
            "C(45,6) = (45×44×43×42×41×40)/(6!) = 8.145.060 ≈ 8 Millionen. Zähler: 45×44×43×42×41×40 = 5.864.443.200. Nenner: 6! = 720. Ergebnis: 8.145.060. Zum Vergleich: Lotto 6/49 ergibt C(49,6) ≈ 13,98 Millionen Möglichkeiten.",
          hints: [
            "Reihenfolge egal, ohne Zurücklegen → C(45,6).",
            "Zähler: 45×44×43×42×41×40, Nenner: 6! = 720.",
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
      content: `## Einleitung

Wenn du einen fairen Würfel wirfst, ist die Chance auf eine Sechs genau 1/6 — das klingt einfach. Aber wie wahrscheinlich ist es, bei einem Gentest ein falsch-positives Ergebnis zu erhalten? Oder dass unter fünf Geschwistern genau zwei eine Erbkrankheit tragen? Solche Fragen beantworten die Rechenregeln der Wahrscheinlichkeitstheorie: Laplace-Formel, Additionssatz, Komplementregel und Binomialverteilung. Diese Werkzeuge verbinden Münzwurf-Logik mit klinisch entscheidenden Fragestellungen.

**In diesem Kapitel lernst du:**
- wie die Laplace-Formel Wahrscheinlichkeiten bei gleichwahrscheinlichen Ergebnissen berechnet
- wie Additions- und Komplementregel zusammengesetzte Ereignisse behandeln
- wann Ereignisse unabhängig sind und wie sich dann die Wahrscheinlichkeiten multiplizieren
- wie die Binomialverteilung die Anzahl von Treffern in n Versuchen beschreibt (z. B. Erbkrankheiten bei Geschwistern)
- wie Baumdiagramme mehrstufige Zufallsexperimente übersichtlich darstellen

---

{{DIAGRAM:combinatorics-tree}}

{{DIAGRAM:probability-distribution}}

**Idee:** **Laplace** P(A) = (günstige)/(alle) bei gleichwahrscheinlichen Ergebnissen. **Komplement** P(nicht A) = 1−P(A) — bei „mindestens eines“ zuerst „keines“ berechnen. **Additionssatz** P(A∪B) = P(A)+P(B)−P(A∩B). **Unabhängig** ⇔ P(A∩B) = P(A)×P(B). **Binomial** B(n,p): P(X=k) = (n über k)×p^k×(1−p)^(n−k); μ = n×p.

**Verfahren — Schrittfolge:** (1) **Laplace:** |A|/|Ω|. (2) **Komplement:** P(mind. 1) = 1−P(keiner). (3) **Additionssatz:** Schnitt P(A∩B) abziehen wenn nicht disjunkt. (4) **Unabhängig:** P(A∩B) = P(A)×P(B). (5) **Binomial:** (n über k)×p^k×(1−p)^(n−k); Erwartungswert n×p.

**Typische Prüfungsfehler:** Laplace nur bei Gleichwahrscheinlichkeit. „Mindestens eines“ → 1−P(keines). Additionssatz: P(A∩B) nicht vergessen abzuziehen. Unabhängig ≠ disjunkt.

---

## Grundbegriffe





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

## MedAT-Fokus: Wahrscheinlichkeitsrechnung

**Zur gezielten Prüfungsvorbereitung:**

**Häufigste Aufgabentypen:**
- „Wie wahrscheinlich ist mindestens ein Treffer in n Versuchen?" → **Komplement: 1 − (1−p)ⁿ**
- „Wie wahrscheinlich sind genau k Treffer in n Versuchen?" → **Binomialformel: C(n,k) × pᵏ × (1−p)ⁿ⁻ᵏ**
- „A und B unabhängig: P(A und B)?" → **Multiplikation: P(A) × P(B)**
- „A oder B: P(A ∪ B)?" → **Addition: P(A) + P(B) − P(A ∩ B)**
- „Baumdiagramm: mehrstufiges Experiment" → **Pfadregeln: multiplizieren entlang, addieren zwischen Ästen**

**Zentral prüfungsrelevant (auswendig):**
- P(Ā) = 1 − P(A)
- P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
- Unabhängig: P(A ∩ B) = P(A) × P(B)
- Binomial: P(X=k) = C(n,k) × pᵏ × (1−p)ⁿ⁻ᵏ; μ = n×p
- Komplement bei „mindestens": 1 − P(keines) = 1 − (1−p)ⁿ

**Typische Fallen:**
- Komplement vergessen: P(mind. 1) direkt berechnen ist aufwändig → immer 1−P(keines) verwenden
- Additionssatz: P(A∩B) nicht abziehen → Doppelzählung
- Binomial nur bei konstanter p und unabhängigen Versuchen
- Unabhängigkeit ≠ Disjunktheit: Disjunkte Ereignisse (A∩B=∅) sind immer abhängig (wenn P(A)>0, P(B)>0)

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
P(X=3) = 56 × 0,0507 × 0,0992 ≈ **0,281 ≈ 28,1%**. Erwartungswert: μ = 8 × 0,37 = **2,96** ≈ 3 Spender.

## Zusammenfassung (ultrakompakt)

- **Laplace**: P(A) = günstige/mögliche Ergebnisse; nur wenn alle Ergebnisse gleich wahrscheinlich
- **Additionssatz**: P(A∪B) = P(A)+P(B)−P(A∩B); bei disjunkten Ereignissen: P(A∩B) = 0
- **Komplementregel**: P(Ā) = 1−P(A); "mindestens einmal" = 1 − P(keinmal)
- **Unabhängigkeit**: P(A∩B) = P(A)×P(B); Kettenregel: P(A∩B∩C) = P(A)×P(B)×P(C)
- **Bedingte W.**: P(A|B) = P(A∩B)/P(B); bei Ziehen ohne Zurücklegen ändern sich die Brüche
- **Binomialverteilung**: P(X=k) = C(n,k)×pᵏ×(1−p)^(n−k); μ = n×p; σ² = n×p×(1−p)
- **Klinisch**: Autosomal-rezessiv P(krank)=1/4; Nebenwirkungen kumulieren; 20 Labortests → 64% mind. 1 falsch-positiv`,
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
            "Eine Krankheit tritt mit P = 0,1 auf. Ein Test hat Treffsicherheit p = 0,95 (unabhängig von der Erkrankung). Was ist P(Test positiv UND krank)?",
          options: ["0,095", "0,85", "0,1", "0,05", "0,9"],
          correctIndex: 0,
          explanation:
            "Unabhängige Ereignisse: P(krank) = 0,1, P(Test positiv | krank) = 0,95. P(positiv UND krank) = P(krank) × P(pos|krank) = 0,1 × 0,95 = 0,095 = 9,5%. Dies ist die Wahrscheinlichkeit für 'richtig positiv' — der erste Schritt zur Vierfeldertafel.",
          hints: [
            "Unabhängige Ereignisse: P(A∩B) = P(A) × P(B).",
            "P(krank) × P(positiv) = 0,1 × 0,95 = ?",
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
      content: `## Einleitung

Ein HIV-Test hat eine Sensitivität von 99,5 % und eine Spezifität von 99,5 % — klingt fast perfekt. Doch wenn du 10.000 Personen mit niedriger Prävalenz (0,1 %) testest, erhältst du 10 richtig positive, aber auch 50 falsch positive Ergebnisse. Die Mehrheit der positiven Tests ist also falsch! Dieses kontraintuitive Ergebnis erklärt der Satz von Bayes, der die Bedingung umdreht: von P(Test+|Krank) zu P(Krank|Test+). Bayes, bedingte Wahrscheinlichkeit und die Vierfeldertafel sind die Werkzeuge, mit denen Ärzte Testergebnisse korrekt interpretieren — und sie gehören zu den am häufigsten geprüften Themen im MedAT.

**In diesem Kapitel lernst du:**
- was bedingte Wahrscheinlichkeit P(A|B) bedeutet und wie du sie aus der gemeinsamen Wahrscheinlichkeit berechnest
- wie der Satz von Bayes die Bedingungsrichtung umdreht (von Likelihood zu Posterior)
- wie die totale Wahrscheinlichkeit einen Sachverhalt über alle möglichen Bedingungen aufsummiert
- wie du eine Vierfeldertafel mit TP, TN, FP, FN aufstellst und Sensitivität, Spezifität, PPV, NPV abliest
- warum der positive prädiktive Wert bei niedriger Prävalenz drastisch sinkt

---

{{DIAGRAM:combinatorics-tree}}

{{DIAGRAM:probability-distribution}}

**Idee:** **P(A|B)** = Wahrscheinlichkeit von A unter der Bedingung B; P(A|B) = P(A∩B)/P(B). **Bayes** kehrt die Bedingung um: P(Krank|Test+) aus P(Test+|Krank), Prävalenz und Spezifität. **Totale Wahrscheinlichkeit:** P(A) = Σ P(A|Bᵢ)×P(Bᵢ). **Vierfeldertafel:** TP, TN, FP, FN → Sensitivität, Spezifität, PPV, NPV.

**Verfahren — Schrittfolge:** (1) **P(A|B)** = P(A∩B)/P(B). (2) **Totale W.** P(B) = P(B|A)×P(A)+P(B|Ā)×P(Ā). (3) **Bayes** P(A|B) = P(B|A)×P(A)/P(B). (4) **Vierfeldertafel** ausfüllen; PPV = TP/(TP+FP), NPV = TN/(TN+FN).

**Typische Prüfungsfehler:** P(A|B) ≠ P(B|A) verwechseln. P(B) im Nenner bei Bayes (totale Wahrscheinlichkeit). Bei niedriger Prävalenz: PPV klein trotz guter Sensitivität.

---

## Bedingte Wahrscheinlichkeit





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
- D-Dimer (Präv 15%): PPV ≈ 22%, aber NPV ≈ 99% → Ausschlusstest

## Zusammenfassung (ultrakompakt)

- **Bedingte Wahrscheinlichkeit**: P(A|B) = P(A∩B)/P(B); "A gegeben B ist eingetreten"
- **Satz von Bayes**: P(A|B) = P(B|A)×P(A) / P(B); kehrt die Bedingung um
- **Totale Wahrscheinlichkeit**: P(B) = P(B|A₁)×P(A₁) + P(B|A₂)×P(A₂) + ...
- **Vierfeldertafel**: TP, FP, FN, TN; Sens = TP/(TP+FN); Spez = TN/(TN+FP); PPV = TP/(TP+FP); NPV = TN/(TN+FN)
- **1000-Personen-Methode**: Runde Zahl wählen → Kranke/Gesunde → TP/FP/TN/FN → PPV ablesen
- **Merkhilfe SpPin/SnNout**: Hohe Spezifität → positiver Test bestätigt; hohe Sensitivität → negativer Test schließt aus
- **Klinisch**: Mammographie PPV ~12%; HIV 2-Stufen; D-Dimer NPV 99%; Vorselektion erhöht PPV dramatisch`,
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
          text: "Die Vierfeldertafel macht Bayes-Aufgaben rechnerisch einfach und fehlerarm. Strategie: (1) Gesamtstichprobe n wählen (z.B. 10.000), (2) Erkrankte und Gesunde berechnen (n×Prävalenz), (3) TP, FN, TN, FP mit Sensitivität/Spezifität befüllen, (4) PPV = TP/(TP+FP), NPV = TN/(TN+FN). Diese Methode ist äquivalent zur Bayes-Formel, aber anschaulicher und fehleranfälliger — im MedAT immer bevorzugen.",
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
      content: `## Einleitung

Wenn ein Labor den Referenzbereich für Blutzucker mit 70-100 mg/dL angibt, steckt dahinter die Normalverteilung: Der Bereich umfasst typischerweise den Mittelwert plus/minus zwei Standardabweichungen und schließt 95 % der gesunden Population ein. Ob ein Messwert auffällig ist, entscheidet die Streuung. Ob ein Studienmedikament besser wirkt als ein Placebo, sagt der p-Wert. Und ob ein diagnostischer Test taugt, messen Sensitivität und Spezifität. All diese statistischen Grundbegriffe begegnen dir täglich in der klinischen Medizin und regelmäßig im MedAT.

**In diesem Kapitel lernst du:**
- wie Mittelwert, Median und Modus Daten zusammenfassen und wann du welches Lagemaß verwendest
- wie Varianz und Standardabweichung die Streuung quantifizieren
- was die Normalverteilung ist und wie die 68-95-99,7-Regel Referenzbereiche definiert
- wie Sensitivität und Spezifität die Güte eines diagnostischen Tests beschreiben
- was der p-Wert aussagt und warum p < 0,05 nicht “bewiesen” bedeutet

---

{{DIAGRAM:combinatorics-tree}}

{{DIAGRAM:probability-distribution}}

**Idee:** **Lagemaße:** Mittelwert x̄ = Σxᵢ/n (anfällig für Ausreißer), **Median** = mittlerer Wert sortiert (robust), **Modus** = häufigster Wert. **Streuung:** Varianz s² = Σ(xᵢ−x̄)²/(n−1), **Standardabweichung** s = √s². **Normalverteilung:** 68 % innerhalb μ±σ, 95 % innerhalb μ±2σ, 99,7 % innerhalb μ±3σ. **Sensitivität** = TP/(TP+FN), **Spezifität** = TN/(TN+FP). **p-Wert** < 0,05 → signifikant.

**Verfahren — Schrittfolge:** (1) **Mittelwert** Σxᵢ/n; **Median** sortieren, mittleres Element (bzw. Mittel der zwei mittleren). (2) **Varianz** Σ(xᵢ−x̄)²/(n−1); **s** = √s². (3) **68-95-99,7:** μ±σ, μ±2σ, μ±3σ. (4) **Sens** = TP/(TP+FN); **Spez** = TN/(TN+FP); **PPV** = TP/(TP+FP).

**Typische Prüfungsfehler:** Varianz Nenner n−1 (Stichprobe), nicht n. Sensitivität/Spezifität vs. PPV/NPV verwechseln (Sens/Spez = Testeigenschaft; PPV/NPV = abhängig von Prävalenz). p < 0,05 = signifikant, nicht „bewiesen“.

---

## Lage- und Streumaße




### Lagemaße (Maße der zentralen Tendenz)

**Arithmetischer Mittelwert (x̄):**
x̄ = (x1 + x2 + ... + xn) / n = Σxi / n

Beispiel: Messwerte {3, 5, 7, 7, 8}. x̄ = (3+5+7+7+8)/5 = 30/5 = 6

Eigenschaft: Empfindlich gegenüber Ausreißern. Bei schiefer Verteilung (z.B. Einkommen) führt ein Ausreißer zu einer irreführenden Aussage.

**Median (Zentralwert):**
Der Median ist der mittlere Wert einer sortierten Datenreihe. Bei n Werten:
- n ungerade: Median = Wert an Position (n+1)/2
- n gerade: Median = Mittelwert der zwei mittleren Werte

Beispiel: {3, 5, 7, 7, 8} → n=5 (ungerade) → Median = 3. Wert = 7

Eigenschaft: Robust gegenüber Ausreißern. Bei schiefen Verteilungen aussagekräftiger als Mittelwert.

**Modus (Modalwert):**
Der am häufigsten vorkommende Wert. Beispiel: {3, 5, 7, 7, 8} → Modus = 7 (kommt 2× vor)

Bei bimodalen Verteilungen gibt es zwei Modi (z.B. zwei Altersgruppen mit erhöhter Krankheitshäufigkeit).

> **Merke:** Bei symmetrischer Verteilung: Mittelwert = Median = Modus. Bei rechtsschiever Verteilung gilt: Modus < Median < Mittelwert. Ausreißer nach rechts ziehen den Mittelwert stärker als den Median.

### Streumaße

**Varianz (s²):**
s² = Σ(xi − x̄)² / (n−1)     (Stichprobenvarianz, mit n−1 im Nenner)

Beispiel {3, 5, 7, 7, 8}, x̄ = 6:
Abweichungen: (3-6)²=9, (5-6)²=1, (7-6)²=1, (7-6)²=1, (8-6)²=4
Summe = 16. s² = 16 / (n-1) = 16/4 = 4

**Standardabweichung (s):**
s = √s² = √(Varianz)

Beispiel: s = √4 = 2. Interpretation: Die Messwerte weichen im Schnitt etwa 2 Einheiten vom Mittelwert ab.

Eigenschaft: Gleiche Einheit wie die Daten (im Gegensatz zur Varianz, die in Einheit² ist). Deshalb ist s die praxisnähere Maßzahl.

**Ausführliches Rechenbeispiel — Varianz Schritt für Schritt:**
Blutzuckerwerte (mg/dL) von 6 Patienten: {85, 90, 92, 88, 95, 100}.
Schritt 1: Mittelwert x̄ = (85+90+92+88+95+100)/6 = 550/6 = **91,67 mg/dL**.
Schritt 2: Abweichungen und Quadrate:
- (85 − 91,67)² = (−6,67)² = 44,49
- (90 − 91,67)² = (−1,67)² = 2,79
- (92 − 91,67)² = (0,33)² = 0,11
- (88 − 91,67)² = (−3,67)² = 13,47
- (95 − 91,67)² = (3,33)² = 11,09
- (100 − 91,67)² = (8,33)² = 69,39
Schritt 3: Summe der Abweichungsquadrate = 44,49 + 2,79 + 0,11 + 13,47 + 11,09 + 69,39 = **141,34**.
Schritt 4: Varianz s² = 141,34 / (6−1) = 141,34 / 5 = **28,27 (mg/dL)²**.
Schritt 5: Standardabweichung s = √28,27 ≈ **5,32 mg/dL**.
Interpretation: Die Blutzuckerwerte streuen im Mittel um ca. 5,3 mg/dL um den Mittelwert von 91,7 mg/dL.

> **Merke:** Im Nenner steht n−1 (nicht n!) — die sogenannte Bessel-Korrektur. Bei Stichproben (nicht Grundgesamtheit) teilt man durch n−1, weil die Stichprobe die Streuung systematisch unterschätzt. Im MedAT wird fast immer n−1 verwendet.

**Interquartilsabstand (IQA):**
IQA = Q3 − Q1 (75. Perzentil − 25. Perzentil). Robust gegen Ausreißer. Wird im Boxplot dargestellt.

| Maß | Formel | Eigenschaft |
|-----|--------|-------------|
| Mittelwert | Σxi/n | Empfindlich gegenüber Ausreißern |
| Median | Mittlerer Wert sortiert | Robust, gut bei schiefer Verteilung |
| Modus | Häufigster Wert | Kann mehrfach vorkommen |
| Varianz | Σ(xi−x̄)²/(n−1) | In Einheit² |
| Standardabw. | √Varianz | In gleicher Einheit wie Daten |

> **Merke:** Beim Vergleich zweier Gruppen: Mittelwert + SD bei Normalverteilung. Median + IQA bei schiefer Verteilung oder Ausreißern. Klinische Studien geben immer beide an, um Transparenz zu gewährleisten.

---

## Normalverteilung

Die **Normalverteilung** (Gauß-Verteilung) ist die wichtigste Wahrscheinlichkeitsverteilung in der Statistik. Ihr Graph ist eine symmetrische Glockenkurve.

**Parameter:**
- **μ** (Mu) = Mittelwert = Modus = Median (bei Normalverteilung identisch)
- **σ** (Sigma) = Standardabweichung (bestimmt die Breite der Glocke)
- Je größer σ, desto flacher und breiter die Kurve

**Notation:** X ~ N(μ, σ²) — "X ist normalverteilt mit Mittelwert μ und Varianz σ²"

Die Normalverteilung ist symmetrisch um μ. Die Wendepunkte der Glocke liegen bei μ ± σ.

### Die 68-95-99,7-Regel (empirische Regel)

Dies ist die wichtigste prüfungsrelevante Eigenschaft der Normalverteilung:

| Bereich | Anteil der Daten |
|---------|-----------------|
| μ ± 1σ | ca. 68,3% |
| μ ± 2σ | ca. 95,4% |
| μ ± 3σ | ca. 99,7% |

Visualisierung:
- In μ±1σ liegen ~2/3 der Werte
- Außerhalb μ±2σ liegen nur noch ~4,6% (ca. 1 von 22)
- Außerhalb μ±3σ liegen nur noch ~0,3% (ca. 1 von 333) — gilt als "Ausreißer"

**Medizinisches Beispiel:** Blutdruck in einer Population sei N(μ=120, σ=10) mmHg.
- 68% haben Blutdruck zwischen 110 und 130 mmHg
- 95% haben Blutdruck zwischen 100 und 140 mmHg
- 99,7% haben Blutdruck zwischen 90 und 150 mmHg
- Werte >140 mmHg (>μ+2σ) liegen im oberen 2,3% → Hypertonie-Verdacht

> **Merke:** 68-95-99,7 auswendig lernen! Im MedAT werden oft konkrete Anteile oberhalb/unterhalb bestimmter Schwellenwerte gefragt — die Symmetrie der Normalverteilung halbiert diese Werte: außerhalb μ+2σ liegen 2,3% (nicht 4,6%).

**Standardnormalverteilung (z-Wert):**
Jede Normalverteilung kann standardisiert werden:
z = (x − μ) / σ

Der z-Wert gibt an, wie viele Standardabweichungen ein Wert vom Mittelwert entfernt ist.
z = 0 → am Mittelwert; z = 2 → 2 Standardabweichungen oberhalb

Die **Standardnormalverteilung** ist N(0, 1) — Mittelwert 0, Standardabweichung 1. Jede Normalverteilung wird durch z-Transformation darauf zurückgeführt.

### z-Tabelle — wichtige Werte auswendig lernen

| z-Wert | Φ(z) = P(Z ≤ z) | Bedeutung |
|---|---|---|
| −3,0 | 0,0013 (0,13%) | Extrem niedrig |
| −2,0 | 0,0228 (2,3%) | Untere 2,3% |
| −1,645 | 0,0500 (5%) | Untere 5% (einseitiges 5%-Quantil) |
| −1,0 | 0,1587 (15,9%) | Untere 16% |
| 0,0 | 0,5000 (50%) | Median = Mittelwert |
| 1,0 | 0,8413 (84,1%) | Obere 16% beginnt |
| 1,645 | 0,9500 (95%) | Obere 5% beginnt |
| 1,96 | 0,9750 (97,5%) | Grenze für 95%-KI (beidseitig) |
| 2,0 | 0,9772 (97,7%) | Obere 2,3% |
| 2,576 | 0,9950 (99,5%) | Grenze für 99%-KI (beidseitig) |
| 3,0 | 0,9987 (99,87%) | Obere 0,13% |

> **Merke:** Für MedAT die wichtigsten z-Werte merken: z = ±1,96 für 95%-Konfidenzintervall, z = ±1,645 für einseitige 5%-Grenze, z = ±2,576 für 99%-KI. Die 68-95-99,7-Regel nutzt die gerundeten Werte z = ±1, ±2, ±3.

### z-Transformation — Rechenbeispiele Schritt für Schritt

**Beispiel 1: Ist ein Laborwert auffällig?**
Hämoglobin bei Frauen: N(μ = 13,5 g/dL, σ = 1,2 g/dL). Patientin hat Hb = 10,5 g/dL.
z = (10,5 − 13,5) / 1,2 = −3,0 / 1,2 = **−2,5**.
Interpretation: 2,5 Standardabweichungen unter dem Mittelwert. Φ(−2,5) ≈ 0,006 → nur 0,6% der gesunden Frauen haben so niedrige Werte → **klinisch auffällig (Anämie-Verdacht)**.

**Beispiel 2: Perzentil-Berechnung mit z-Wert:**
Geburtsgewicht: N(μ = 3.400 g, σ = 450 g). Ab welchem Gewicht gehört ein Baby zu den leichtesten 5%?
Gesucht: x, sodass P(X ≤ x) = 0,05. Aus z-Tabelle: z = −1,645.
x = μ + z × σ = 3.400 + (−1,645) × 450 = 3.400 − 740 = **2.660 g**.
Babys unter 2.660 g gehören zu den leichtesten 5% → klinisch: SGA (Small for Gestational Age).

**Beispiel 3: Wie viel Prozent liegen zwischen zwei Werten?**
Cholesterin: N(μ = 200, σ = 35) mg/dL. P(180 ≤ X ≤ 250)?
z₁ = (180 − 200)/35 = −20/35 = −0,57. z₂ = (250 − 200)/35 = 50/35 = 1,43.
Aus z-Tabelle: Φ(1,43) ≈ 0,9236. Φ(−0,57) ≈ 0,2843.
P(180 ≤ X ≤ 250) = 0,9236 − 0,2843 = **0,639 ≈ 63,9%**.

**Beispiel 4: 68-95-99,7-Regel mit konkreten Zahlen:**
Körpertemperatur: N(μ = 36,8°C, σ = 0,4°C).
- μ ± 1σ = 36,4 – 37,2°C → 68% der Gesunden
- μ ± 2σ = 36,0 – 37,6°C → 95% der Gesunden
- μ ± 3σ = 35,6 – 38,0°C → 99,7% der Gesunden
- Temperatur > 37,6°C (> μ+2σ): obere 2,3% → erhöhte Temperatur
- Temperatur > 38,0°C (> μ+3σ): obere 0,15% → Fieber

> **Merke:** Die z-Transformation z = (x−μ)/σ übersetzt jeden Messwert in eine universelle Skala. Ein z-Wert von ±2 oder darüber ist bei normalverteilten Daten stets auffällig (< 5% Wahrscheinlichkeit). Das gilt für Laborwerte, Körpermaße und Studienergebnisse gleichermaßen.

---

### Konfidenzintervall — Kurzüberblick für den MedAT

Das **95%-Konfidenzintervall (KI)** für den Mittelwert einer Stichprobe gibt an, in welchem Bereich der wahre Populationsmittelwert mit 95% Wahrscheinlichkeit liegt:

KI = x̄ ± z × (σ / √n) = x̄ ± 1,96 × (σ / √n)

Dabei ist σ/√n der **Standardfehler** (SE) — die Standardabweichung des Stichprobenmittelwerts.

**Rechenbeispiel:** In einer Studie mit n = 100 Patienten wird ein mittlerer Blutdruck von x̄ = 135 mmHg gemessen, σ = 20 mmHg.
SE = σ/√n = 20/√100 = 20/10 = 2,0.
95%-KI = 135 ± 1,96 × 2,0 = 135 ± 3,92 = **[131,1 ; 138,9] mmHg**.
Interpretation: Der wahre Mittelwert der Population liegt mit 95% Wahrscheinlichkeit zwischen 131 und 139 mmHg.

**Für 99%-KI:** z = 2,576 statt 1,96 → KI = 135 ± 2,576 × 2,0 = 135 ± 5,15 = [129,8 ; 140,2] mmHg (breiter, aber sicherer).

> **Merke:** Größere Stichprobe (n↑) → kleinerer Standardfehler → schmaleres KI → genauere Schätzung. SE = σ/√n — beim Vervierfachen der Stichprobe halbiert sich der Standardfehler.

---

## Referenzbereiche und klinische Interpretation

Laborwerte werden als Referenzbereiche angegeben, typischerweise als μ ± 2σ (umfasst 95% der Gesunden).

**Wichtige Konsequenz:** Bei 20 unabhängigen Laborwerten fällt jeder einzelne mit 5% Wahrscheinlichkeit aus dem Referenzbereich — selbst bei einem völlig gesunden Patienten. P(mind. 1 auffällig) = 1 − 0,95²⁰ = 1 − 0,358 = **64%**. Mehr als jeder zweite Gesunde hat mindestens einen „auffälligen" Wert!

**Typische Referenzbereiche (normalverteilt):**

| Laborwert | μ | σ | Referenzbereich (μ±2σ) |
|---|---|---|---|
| Hb Männer | 15,0 g/dL | 1,5 | 12,0–18,0 |
| Hb Frauen | 13,5 g/dL | 1,2 | 11,1–15,9 |
| Cholesterin | 200 mg/dL | 35 | 130–270 |
| Nüchternglukose | 90 mg/dL | 12 | 66–114 |
| Kreatinin Männer | 0,9 mg/dL | 0,15 | 0,6–1,2 |

> **Merke:** Ein einzelner Wert außerhalb des Referenzbereichs ist NICHT automatisch pathologisch — per Definition fallen 5% der Gesunden außerhalb. Erst ein Wert außerhalb μ±3σ (0,3% der Gesunden) ist hochverdächtig. Klinische Interpretation erfordert immer den Gesamtkontext.

**Rechenbeispiel — Einstufung eines Laborwerts:**
Serumnatrium: N(μ = 140 mmol/L, σ = 3 mmol/L). Patient hat Na = 148 mmol/L.
z = (148 − 140) / 3 = 8/3 = **2,67**.
Interpretation: Φ(2,67) ≈ 0,9962 → 99,6% der Gesunden haben einen niedrigeren Wert → obere 0,4% → **Hypernatriämie wahrscheinlich**.
Vergleich: Na = 146 → z = 2,0 → obere 2,3% → grenzwertig, Kontrolle empfohlen.
Na = 143 → z = 1,0 → obere 16% → unauffällig, innerhalb Referenzbereich.

---

## Sensitivität und Spezifität (Vertiefung)

Diese Kennzahlen beschreiben die diagnostische Güte eines Tests:

**Sensitivität = TP / (TP + FN)**
= Richtig-Positive / alle Kranken
= Wie viel Prozent der Kranken werden als krank erkannt?
= "Wie empfindlich reagiert der Test auf Kranke?"

**Spezifität = TN / (TN + FP)**
= Richtig-Negative / alle Gesunden
= Wie viel Prozent der Gesunden werden als gesund erkannt?
= "Wie spezifisch ist der Test für Kranke?"

**Positiver prädiktiver Wert (PPV) = TP / (TP + FP)**
= Von allen Positiv-Getesteten: Wie viele sind wirklich krank?
= Abhängig von Prävalenz!

**Negativer prädiktiver Wert (NPV) = TN / (TN + FN)**
= Von allen Negativ-Getesteten: Wie viele sind wirklich gesund?
= Bei niedrigem NPV viele Falsch-Negative — gefährlich!

**Merkhilfe:**
- **Sens**itivität → **Krank**e richtig erkennen (kein Kranker soll durchschlüpfen)
- **Spez**ifität → **Gesunde** richtig erkennen (kein Gesunder soll als krank gestempelt werden)
- SnNout: hohe **Sn**: negatives Ergebnis schließt Erkrankung **out**
- SpPin: hohe **Sp**: positives Ergebnis schließt Erkrankung **in**

> **Merke:** Sensitivität und Spezifität sind Eigenschaften des Tests — unabhängig von der Prävalenz. PPV und NPV sind abhängig von der Prävalenz — sie verändern sich je nach Bevölkerungsgruppe.

**Rechenbeispiel — Vierfeldertafel aus Studiendaten aufstellen:**
In einer Studie werden 500 Personen getestet. 200 sind krank (durch Goldstandard bestätigt), 300 sind gesund.
Der Test ist bei 180 der 200 Kranken positiv und bei 240 der 300 Gesunden negativ.

Schritt 1: Identifiziere die Zellen.
- TP = 180 (krank und positiv)
- FN = 200 − 180 = 20 (krank aber negativ)
- TN = 240 (gesund und negativ)
- FP = 300 − 240 = 60 (gesund aber positiv)

Schritt 2: Berechne die Kennzahlen.
- Sensitivität = 180/200 = **90%**
- Spezifität = 240/300 = **80%**
- PPV = 180/(180+60) = 180/240 = **75%**
- NPV = 240/(240+20) = 240/260 = **92,3%**

Schritt 3: Kontrolle — Summen.
| | Test + | Test − | Gesamt |
|---|---|---|---|
| Krank | 180 | 20 | 200 |
| Gesund | 60 | 240 | 300 |
| Gesamt | 240 | 260 | 500 ✓ |

> **Merke:** Bei Studiendaten (nicht Screening) ist die Stichprobenprävalenz oft künstlich hoch (z. B. 40% hier). Die PPV/NPV-Werte gelten nur für diese Prävalenz. Für die Praxis (niedrigere Prävalenz) muss man mit Vierfeldertafel oder Bayes umrechnen.

| Kennzahl | Formel | Bedeutung |
|----------|--------|-----------|
| Sensitivität | TP/(TP+FN) | Kranke korrekt als krank erkannt |
| Spezifität | TN/(TN+FP) | Gesunde korrekt als gesund erkannt |
| PPV | TP/(TP+FP) | Sicherheit eines positiven Befunds |
| NPV | TN/(TN+FN) | Sicherheit eines negativen Befunds |

---

## MedAT-Fokus: Normalverteilung und Statistik

**Zur gezielten Prüfungsvorbereitung:**

**Typische Aufgabentypen im MedAT:**
- „Wie viel Prozent der Population liegen oberhalb/unterhalb von x?" → z-Wert berechnen, 68-95-99,7-Regel
- „Berechnen Sie den Referenzbereich" → μ ± 2σ
- „Wie groß ist die Varianz/Standardabweichung?" → Schritt-für-Schritt ausrechnen
- „Berechnen Sie Sensitivität/Spezifität/PPV aus einer Vierfeldertafel" → Formeln anwenden
- „Was bedeutet p = 0,03?" → Interpretation des p-Werts

**Prüfungsrelevante Zahlen zum Auswendiglernen:**
- 68-95-99,7: μ±1σ/2σ/3σ
- Einseitig: 16% / 2,3% / 0,15% je Seite
- z = 1,96 → 95%-KI (beidseitig)
- z = 1,645 → einseitige 5%-Grenze
- SE = σ/√n → Standardfehler
- p < 0,05 → statistisch signifikant

---

## p-Wert — Grundidee für den MedAT

Der **p-Wert** ist die Wahrscheinlichkeit, ein mindestens so extremes Ergebnis zu beobachten, wenn die Nullhypothese (H0) wahr wäre.

**Nullhypothese (H0):** "Kein Effekt", "kein Unterschied", "Mittelwerte sind gleich"

**Interpretation:**
- p < 0,05: Ergebnis ist "statistisch signifikant" — es ist unwahrscheinlich (< 5% Chance), dass das Ergebnis zufällig entstanden ist, wenn H0 wahr wäre → H0 wird abgelehnt
- p > 0,05: Kein Beweis gegen H0 — aber kein Beweis für H0!

**Wichtige Missverständnisse:**
- p-Wert ≠ Wahrscheinlichkeit, dass H0 wahr ist
- p < 0,05 bedeutet nicht "klinisch bedeutsam" — nur statistisch signifikant
- Kleine Stichproben → p-Werte oft zu groß; große Stichproben → winzige Unterschiede werden signifikant

> **Merke:** p < 0,05 = statistisch signifikant (die konventionelle Grenze). Der p-Wert sagt nichts über die klinische Relevanz oder die Größe des Effekts — dafür braucht man das Konfidenzintervall.

**Fehler vom Typ I und Typ II:**
- **Typ-I-Fehler (α-Fehler):** H0 ablehnen, obwohl H0 wahr ist → „falsch positives" Studienergebnis. Konvention: α = 0,05 = 5%.
- **Typ-II-Fehler (β-Fehler):** H0 nicht ablehnen, obwohl H0 falsch ist → „falsch negatives" Studienergebnis. Typisch: β = 0,20 = 20%.
- **Power (Teststärke):** 1 − β = Wahrscheinlichkeit, einen tatsächlichen Effekt zu entdecken. Konvention: Power ≥ 80%.

| | H0 wahr | H0 falsch |
|---|---|---|
| **H0 ablehnen** | Typ-I-Fehler (α) | Korrekt (Power) |
| **H0 nicht ablehnen** | Korrekt | Typ-II-Fehler (β) |

> **Merke:** Der Zusammenhang zwischen Fehlertypen und diagnostischen Tests: Typ-I-Fehler ≈ falsch positiv (Gesunder als krank), Typ-II-Fehler ≈ falsch negativ (Kranker als gesund). α senken → β steigt (und umgekehrt) — genau wie bei Sens/Spez-Tradeoff.

**Rechenbeispiel — p-Wert und Konfidenzintervall zusammen:**
Studie: Neues Blutdruckmedikament senkt systolischen Blutdruck um x̄ = 8 mmHg (n = 100, σ = 20).
SE = 20/√100 = 2,0. 95%-KI = 8 ± 1,96 × 2 = **[4,1 ; 11,9] mmHg**.
z-Wert für Test gegen H0 (μ = 0): z = 8/2 = 4,0 → p < 0,0001 (hochsignifikant).
Interpretation: Die Senkung ist statistisch signifikant (p < 0,05) UND das KI zeigt klinische Relevanz (mindestens 4 mmHg Senkung). Beides zusammen = überzeugend.

Vergleich: Studie 2 mit n = 10.000: x̄ = 0,5 mmHg, σ = 20. SE = 20/100 = 0,2. z = 0,5/0,2 = 2,5 → p = 0,012 (signifikant!). 95%-KI = [0,1 ; 0,9] mmHg. Statistisch signifikant, aber klinisch irrelevant (nur 0,5 mmHg Senkung). Das zeigt: p-Wert allein reicht nicht — das KI zeigt die Effektgröße.

---

## ROC-Kurve — Kurzüberblick

Die **ROC-Kurve** (Receiver Operating Characteristic) stellt den Zusammenhang zwischen Sensitivität und Falsch-Positiv-Rate (1 − Spezifität) für verschiedene Cutoff-Werte eines Tests dar.

**Aufbau:**
- x-Achse: FPR = 1 − Spezifität (von 0 bis 1)
- y-Achse: Sensitivität = TPR (von 0 bis 1)
- Jeder Punkt auf der Kurve entspricht einem Cutoff-Wert

**AUC (Area Under the Curve):**
- AUC = 0,5: Test nicht besser als Zufall (Diagonale)
- AUC = 0,7–0,8: akzeptable Trennfähigkeit
- AUC = 0,8–0,9: gute Trennfähigkeit
- AUC > 0,9: exzellente Trennfähigkeit
- AUC = 1,0: perfekter Test (kein Überlapp)

**Klinischer Nutzen:**
- Cutoff nach links verschieben (strenger) → Spezifität↑, Sensitivität↓ → weniger FP, mehr FN
- Cutoff nach rechts verschieben (empfindlicher) → Sensitivität↑, Spezifität↓ → weniger FN, mehr FP
- Screening: Punkt oben links (hohe Sens) bevorzugen
- Bestätigung: Punkt mit hoher Spez bevorzugen

> **Merke:** Die ROC-Kurve zeigt alle möglichen Sens/Spez-Kombinationen eines Tests. Je näher die Kurve an der oberen linken Ecke, desto besser der Test. AUC > 0,8 gilt als gut. Im MedAT wird typischerweise das Konzept „Cutoff verschieben → Sens/Spez-Tradeoff" geprüft.

---

## Rechenbeispiele

**Beispiel 1 — Referenzbereich: Cholesterin in einer Population:**
Gesamtcholesterin N(μ = 200, σ = 35) mg/dL. Referenzbereich = μ ± 2σ = 200 ± 70 = **130–270 mg/dL**. Anteil innerhalb: 95%. Anteil oberhalb 270 (> μ+2σ): 2,3% — als "erhöht" klassifiziert. Patient mit 235 mg/dL: z = (235 − 200)/35 = 1,0 → liegt bei μ+1σ, also im oberen 16%-Bereich — grenzwertig, aber innerhalb des Referenzbereichs.

**Beispiel 2 — z-Transformation: Nüchtern-Blutzucker bewerten:**
Population: N(μ = 90, σ = 12) mg/dL. Patient misst 126 mg/dL. z = (126 − 90) / 12 = 36/12 = **3,0**. Interpretation: 3 Standardabweichungen über dem Mittelwert → liegt außerhalb μ+3σ, also im obersten 0,15% der Bevölkerung. Klinisch: Nüchternglukose ≥ 126 mg/dL = Diabetes-Diagnosekriterium (WHO).

**Beispiel 3 — Sens/Spez-Tradeoff: Troponin-Schwellenwert verschieben:**
Troponin-Test für Herzinfarkt, aktueller Cutoff: Sens = 85%, Spez = 92%. Senkt man den Cutoff (empfindlicher): Sens steigt auf 95%, Spez sinkt auf 80%. In einer Notaufnahme (Prävalenz 10%, n = 1.000): Alter Cutoff: TP = 85, FP = 72, PPV = 85/157 ≈ **54%**. Neuer Cutoff: TP = 95, FP = 180, PPV = 95/275 ≈ **34,5%**. Klinische Entscheidung: höherer Sens-Cutoff in der Notaufnahme (kein Infarkt verpassen), dann Bestätigung mit spezifischerem Test.

**Beispiel 4 — z-Transformation: BMI in einer Studie bewerten:**
BMI bei 20–30-Jährigen: N(μ = 23,5 kg/m², σ = 3,2 kg/m²). Person mit BMI = 31,5.
z = (31,5 − 23,5) / 3,2 = 8,0 / 3,2 = **2,5**.
Interpretation: 2,5 Standardabweichungen über dem Mittelwert → obere 0,6% der Altersgruppe.
Umgekehrt: Ab welchem BMI gehört man zu den oberen 5%?
z = 1,645 (aus z-Tabelle für 95. Perzentil).
x = μ + z × σ = 23,5 + 1,645 × 3,2 = 23,5 + 5,26 = **28,76 kg/m²** ≈ Übergangsbereich Übergewicht/Adipositas.

**Beispiel 5 — Konfidenzintervall einer klinischen Studie:**
Medikament senkt den LDL-Cholesterinwert. Studie mit n = 64 Patienten: x̄ = −32 mg/dL (Mittelwert der Senkung), σ = 16 mg/dL.
SE = σ/√n = 16/√64 = 16/8 = 2,0 mg/dL.
95%-KI = −32 ± 1,96 × 2,0 = −32 ± 3,92 = **[−35,9 ; −28,1] mg/dL**.
Interpretation: Das Medikament senkt LDL im Mittel um 28–36 mg/dL (mit 95% Sicherheit). Da die 0 nicht im KI liegt, ist die Senkung statistisch signifikant.

**Beispiel 6 — 68-95-99,7-Regel: Referenzbereich für Kreatinin:**
Serumkreatinin bei Männern: N(μ = 0,9 mg/dL, σ = 0,15 mg/dL).
Referenzbereich = μ ± 2σ = 0,9 ± 0,30 = **0,60 – 1,20 mg/dL** (umfasst 95% der Gesunden).
Wert 1,5 mg/dL: z = (1,5 − 0,9)/0,15 = 0,6/0,15 = **4,0** → weit außerhalb 3σ → hochpathologisch (Niereninsuffizienz).
Wert 1,1 mg/dL: z = (1,1 − 0,9)/0,15 = 0,2/0,15 = **1,33** → innerhalb μ+2σ → Referenzbereich, unauffällig.

## Zusammenfassung (ultrakompakt)

- **Lagemaße**: Mittelwert x̄ = Σxᵢ/n; Median = mittlerer Wert (bei Ausreißern bevorzugt); Modus = häufigster Wert
- **Streumaße**: Varianz s² = Σ(xᵢ−x̄)²/(n−1); Standardabweichung s = √s²; IQR = Q3−Q1
- **Normalverteilung**: Glockenkurve; μ±1σ → 68%; μ±2σ → 95%; μ±3σ → 99,7%
- **z-Transformation**: z = (x−μ)/σ; z = ±2 → 2,3% je Seite; z = ±1,96 → exakt 2,5% je Seite (95%-KI)
- **z-Tabelle**: z = 1,645 (einseitig 5%), z = 1,96 (beidseitig 5%), z = 2,576 (beidseitig 1%)
- **Konfidenzintervall**: KI = x̄ ± z × (σ/√n); SE = σ/√n halbiert sich bei Vervierfachung von n
- **Referenzbereich**: μ±2σ umfasst 95% → 5% gesunder Personen fallen heraus (falsch-positiv)
- **ROC-Kurve**: Cutoff-Verschiebung → Sens↑ Spez↓ und umgekehrt; AUC = Trennfähigkeit des Tests`,
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
        "Mittelwert = Σxi/n; Median = mittlerer Wert (sortiert); Modus = häufigster Wert",
        "Standardabweichung s = √(Σ(xi-x̄)²/(n-1)) — gleiche Einheit wie Daten",
        "Normalverteilung: 68% in ±1σ, 95% in ±2σ, 99,7% in ±3σ — auswendig lernen!",
        "Sensitivität = TP/(TP+FN) — Erkennungsrate der Kranken (unabhängig von Prävalenz)",
        "Spezifität = TN/(TN+FP) — Erkennungsrate der Gesunden (unabhängig von Prävalenz)",
        "PPV = TP/(TP+FP) — von Positiven: wirklich krank? (prävalenzabhängig!)",
        "p < 0,05 = statistisch signifikant; p-Wert ≠ klinische Bedeutsamkeit",
        "SnNout: hohe Sensitivität → Negativtest schließt aus. SpPin: hohe Spezifität → Positivtest bestätigt.",
        "z-Transformation: z = (x−μ)/σ; z > 2 → obere 2,3% → klinisch auffällig",
        "Konfidenzintervall: KI = x̄ ± 1,96 × σ/√n (95%); SE = σ/√n",
        "Typ-I-Fehler (α = 0,05): H0 fälschlich ablehnen; Typ-II-Fehler (β = 0,20): H0 fälschlich beibehalten",
        "ROC-Kurve: AUC > 0,8 = guter Test; Cutoff-Verschiebung = Sens/Spez-Tradeoff",
      ],
      selfTest: [
        {
          question: "Datensatz: {2, 4, 4, 6, 9}. Was ist der Mittelwert?",
          options: ["5", "4", "6", "4,5", "7"],
          correctIndex: 0,
          explanation:
            "Mittelwert = (2+4+4+6+9)/5 = 25/5 = 5. Median: sortiert {2,4,4,6,9}, mittlerer Wert (Position 3) = 4. Modus = 4 (kommt 2× vor). In diesem Datensatz liegen Mittelwert (5), Median (4) und Modus (4) unterschiedlich — keine symmetrische Verteilung.",
          hints: ["Mittelwert = Summe aller Werte / Anzahl.", "(2+4+4+6+9) / 5 = 25/5 = ?"],
          difficulty: 1,
          tags: ["mittelwert", "lagemaß", "statistik"],
        },
        {
          question:
            "Körpergröße in einer Population ist N(μ=170, σ=10) cm. Wie viel Prozent der Personen sind zwischen 150 und 190 cm groß?",
          options: ["95%", "68%", "99,7%", "50%", "80%"],
          correctIndex: 0,
          explanation:
            "150 = 170 - 20 = μ - 2σ und 190 = 170 + 20 = μ + 2σ. Das Intervall μ±2σ enthält nach der 68-95-99,7-Regel ca. 95% der Daten. Merkhilfe: ±1σ = 68%, ±2σ = 95%, ±3σ = 99,7%.",
          hints: [
            "Berechne: Wie viele σ sind 150 und 190 vom Mittelwert entfernt?",
            "150 = μ − 2σ, 190 = μ + 2σ → Welcher %-Satz liegt in μ±2σ?",
          ],
          difficulty: 1,
          tags: ["normalverteilung", "68-95-99.7", "statistik"],
        },
        {
          question: "N(μ=50, σ=5). Wie viel Prozent der Werte liegen über 60 (also über μ+2σ)?",
          options: ["ca. 2,3%", "ca. 4,6%", "ca. 16%", "ca. 5%", "ca. 0,15%"],
          correctIndex: 0,
          explanation:
            "60 = 50 + 10 = μ + 2σ. Außerhalb μ±2σ liegen ca. 4,6% — aber das ist beidseitig. Durch die Symmetrie der Normalverteilung liegt die Hälfte davon (2,3%) oberhalb μ+2σ. Also: P(X > 60) ≈ 2,3%.",
          hints: [
            "60 = μ + 2σ. Außerhalb μ±2σ liegen 4,6% (beidseitig).",
            "Durch Symmetrie: oberhalb μ+2σ liegen 4,6%/2 = 2,3%.",
          ],
          difficulty: 2,
          tags: ["normalverteilung", "symmetrie", "68-95-99.7"],
        },
        {
          question:
            "Aus einer Vierfeldertafel: TP=90, FN=10, TN=180, FP=20. Was ist die Sensitivität?",
          options: ["90%", "80%", "75%", "95%", "50%"],
          correctIndex: 0,
          explanation:
            "Sensitivität = TP / (TP + FN) = 90 / (90 + 10) = 90/100 = 90%. Die Summe (TP+FN) ist die Gesamtzahl der Kranken (100). Von diesen 100 Kranken wurden 90 korrekt erkannt. Spezifität zur Kontrolle: TN/(TN+FP) = 180/200 = 90%.",
          hints: [
            "Sensitivität = TP / alle Kranken = TP / (TP + FN).",
            "90 / (90 + 10) = 90/100 = ?",
          ],
          difficulty: 2,
          tags: ["sensitivität", "vierfeldertafel", "diagnostik"],
        },
        {
          question: "Was ist der korrekte Umgang mit einem p-Wert von p = 0,03?",
          options: [
            "Das Ergebnis ist statistisch signifikant (p < 0,05); H0 wird abgelehnt",
            "Die Nullhypothese ist mit 3% Wahrscheinlichkeit wahr",
            "Das Ergebnis ist klinisch bedeutsam",
            "Es gibt einen 97%-igen Beweis für die Alternativhypothese",
            "Das Experiment muss mit p < 0,01 wiederholt werden",
          ],
          correctIndex: 0,
          explanation:
            "p = 0,03 < 0,05: Das Ergebnis ist statistisch signifikant, H0 wird abgelehnt. Aber: p = 0,03 bedeutet NICHT, dass H0 mit 3% Wahrscheinlichkeit wahr ist — das wäre ein häufiger Interpretationsfehler. Es bedeutet: Wenn H0 wahr wäre, wäre ein so extremes Ergebnis nur mit 3% Wahrscheinlichkeit zu beobachten. Klinische Bedeutsamkeit ist eine separate Frage (braucht Effektgröße und Konfidenzintervall).",
          hints: [
            "Konvention: p < 0,05 = statistisch signifikant.",
            "p-Wert ist NICHT die Wahrscheinlichkeit, dass H0 wahr ist — häufiger Irrtum!",
          ],
          difficulty: 2,
          tags: ["p-wert", "statistik", "signifikanz"],
        },
        {
          question:
            "Hämoglobin bei Männern: N(μ=15, σ=1,5) g/dL. Ein Patient hat Hb = 12 g/dL. Wie groß ist der z-Wert?",
          options: ["−2,0", "−1,5", "−3,0", "+2,0", "−1,0"],
          correctIndex: 0,
          explanation:
            "z = (x − μ) / σ = (12 − 15) / 1,5 = −3 / 1,5 = −2,0. Der Wert liegt 2 Standardabweichungen unter dem Mittelwert (untere 2,3%). Klinisch: Hb von 12 bei Männern liegt unterhalb des Referenzbereichs (μ−2σ = 12,0) — gerade an der Grenze zur Anämie.",
          hints: ["z = (x − μ) / σ = (12 − 15) / 1,5.", "−3 / 1,5 = −2,0. Was bedeutet z = −2?"],
          difficulty: 2,
          tags: ["z-transformation", "normalverteilung", "laborwerte"],
        },
        {
          question:
            "Eine Studie misst x̄ = 80 mmHg (n = 25, σ = 10). Was ist das 95%-Konfidenzintervall?",
          options: ["[76,1 ; 83,9]", "[70 ; 90]", "[78 ; 82]", "[60 ; 100]", "[75,1 ; 84,9]"],
          correctIndex: 0,
          explanation:
            "SE = σ/√n = 10/√25 = 10/5 = 2,0. 95%-KI = x̄ ± 1,96 × SE = 80 ± 1,96 × 2,0 = 80 ± 3,92 = [76,08 ; 83,92] ≈ [76,1 ; 83,9]. Interpretation: Der wahre Populationsmittelwert liegt mit 95% Sicherheit in diesem Intervall.",
          hints: ["SE = σ/√n = 10/√25 = 2,0.", "95%-KI = 80 ± 1,96 × 2,0 = 80 ± 3,92."],
          difficulty: 3,
          tags: ["konfidenzintervall", "standardfehler", "statistik"],
        },
      ],
      altfrage: {
        question:
          "In einer klinischen Studie wird ein neuer Biomarker für Herzinfarkt getestet. Von 200 Herzinfarkt-Patienten liefert der Test bei 176 ein positives Ergebnis. Von 300 herzgesunden Kontrollpersonen liefert der Test bei 30 ein positives Ergebnis. (a) Berechnen Sie Sensitivität und Spezifität. (b) Berechnen Sie PPV und NPV. (c) Wenn dieser Test in einer Notaufnahme mit angenommener Herzinfarkthäufigkeit von 15% eingesetzt wird, wie interpretieren Sie den PPV im klinischen Kontext?",
        answer:
          "Teil (a): TP=176, FN=24, FP=30, TN=270. Sensitivität = 176/(176+24) = 176/200 = 88%. Spezifität = 270/(270+30) = 270/300 = 90%. Teil (b): PPV = 176/(176+30) = 176/206 ≈ 85,4%. NPV = 270/(270+24) = 270/294 ≈ 91,8%. Diese PPV/NPV-Werte gelten für die Stichprobenprävalenz (200/500 = 40%). Teil (c): In der Notaufnahme mit Prävalenz 15% (niedrigere Vortestwahrscheinlichkeit): PPV sinkt. Mit Vierfeldertafel für n=1000: Krank=150, TP=132, FN=18. Gesund=850, FP=85, TN=765. PPV = 132/(132+85) = 132/217 ≈ 60,8%. Klinisch: 6 von 10 positiv Getesteten in der Notaufnahme haben tatsächlich einen Herzinfarkt — solide, aber Bestätigungsdiagnostik (EKG, Troponin) ist essenziell. NPV = 765/(765+18) = 765/783 ≈ 97,7% — ein negatives Ergebnis schließt Herzinfarkt mit hoher Sicherheit aus.",
      },
      klinischerBezug:
        "Normalverteilung, Referenzbereiche und Testergebnisse sind das tägliche Handwerkszeug in der klinischen Medizin. Laborwerte sind oft normalverteilt — Referenzbereiche werden als μ±2σ definiert, sodass 5% gesunder Personen außerhalb liegen (falsch 'pathologisch'). Sensitivität und Spezifität entscheiden über den klinischen Einsatz eines Tests: HIV-Screening (hohe Sensitivität) vs. Bestätigungstest (hohe Spezifität). Der p-Wert aus klinischen Studien bestimmt die Zulassung von Medikamenten — aber klinische Bedeutsamkeit (Number Needed to Treat, NNT) ist die relevantere Maßzahl für den Arzt am Krankenbett.",
    },
  ],
};
