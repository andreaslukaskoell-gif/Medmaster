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
      id: "ma-stoch-01",
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

**Kombinatorik** = systematisches Zählen: Anordnungen und Auswahlen (Permutation, Variation, Kombination). Für den MedAT sind die vier Grundtypen und Binomialkoeffizient prüfungsrelevant.

**In diesem Kapitel lernst du:** **Permutation** (n!); **Variation** (mit/ohne Wdh.); **Kombination** (n über k); **Fakultät**; Entscheidungsbaum (geordnet? Wiederholung?). **Kontext:** Von Blutgruppen bis Studienplanung.

---

## Grundbegriffe und Entscheidungsbaum

![Kombinatorik](/grafik-kombinatorik.svg)

**Erklärung zur Grafik:** Die Abbildung fasst die Formeln der Kombinatorik zusammen: Permutation n!, Variation ohne Wiederholung n!/(n−k)!, Variation mit Wiederholung n^k und Kombination (n über k). So behältst du den Überblick bei geordnet/ungeordnet und mit/ohne Wiederholung.

Bevor man eine Formel anwendet, beantwortet man zwei Fragen:

1. **Spielt die Reihenfolge eine Rolle?** (geordnet vs. ungeordnet)
2. **Darf ein Objekt mehrfach vorkommen?** (mit vs. ohne Wiederholung)

| Reihenfolge | Wiederholung | Begriff | Formel |
|-------------|--------------|---------|--------|
| Ja | Nein | Variation ohne Wdh. | n! / (n-k)! |
| Ja | Ja | Variation mit Wdh. | n^k |
| Nein | Nein | Kombination ohne Wdh. | n! / (k! · (n-k)!) |
| Nein | Ja | Kombination mit Wdh. | (n+k-1)! / (k! · (n-1)!) |

> **Merke:** Die Entscheidung "geordnet oder ungeordnet" ist der wichtigste erste Schritt — sie bestimmt, ob man Permutation/Variation oder Kombination verwendet.

---

## Die Fakultät — Grundbaustein aller Formeln

Die **Fakultät** n! (sprich: "n Fakultät") ist das Produkt aller natürlichen Zahlen von 1 bis n:

n! = 1 · 2 · 3 · ... · n

Besondere Werte: 0! = 1 (per Definition), 1! = 1, 2! = 2, 3! = 6, 4! = 24, 5! = 120, 6! = 720, 7! = 5040, 10! = 3.628.800

> **Merke:** 0! = 1 ist keine Ausnahme, sondern folgt aus der Rekursionsformel (n+1)! = (n+1) · n!, rückwärts angewendet.

---

## Permutationen

Eine **Permutation** ist eine Anordnung aller n verschiedenen Objekte in einer Reihe.

**Ohne Wiederholung:** P(n) = n!

Beispiel: Wie viele Reihenfolgen gibt es für die Buchstaben A, B, C, D?
P(4) = 4! = 24

Beispiel MedAT-Kontext: 5 Personen sollen auf 5 Stühlen Platz nehmen. Wie viele Sitzordnungen gibt es?
P(5) = 5! = 120

**Mit Wiederholung** (wenn gleiche Objekte vorkommen): Sind von n Objekten k1 gleich vom Typ 1, k2 gleich vom Typ 2 usw., dann gilt:

P(n; k1, k2, ...) = n! / (k1! · k2! · ...)

Beispiel: Wie viele unterschiedliche Wörter lassen sich aus den Buchstaben ANNA bilden?
n = 4, A kommt 2-mal vor (k1 = 2), N kommt 2-mal vor (k2 = 2).
P = 4! / (2! · 2!) = 24 / 4 = 6
Die 6 Anordnungen: ANNA, ANAN, AANN, NANA, NAAN, NNAA.

> **Merke:** Bei Permutationen mit Wiederholung teilt man durch die Fakultäten der identischen Elemente, weil ihre Vertauschungen nicht unterscheidbar sind.

---

## Variationen

Eine **Variation** ordnet k Elemente aus n an — die Reihenfolge zählt, aber es werden nur k der n Objekte ausgewählt.

**Ohne Wiederholung:** V(n, k) = n! / (n-k)!

Beispiel: Wie viele 3-stellige Zahlen aus den Ziffern 1, 2, 3, 4, 5 (ohne Wiederholung)?
V(5, 3) = 5! / (5-3)! = 120 / 2 = 60

Erklärung: Für die erste Stelle 5 Möglichkeiten, für die zweite 4, für die dritte 3 → 5 · 4 · 3 = 60.

**Mit Wiederholung:** V(n, k) = n^k

Beispiel: Wie viele 4-stellige PIN-Codes aus den Ziffern 0–9?
V(10, 4) = 10^4 = 10.000

Beispiel: Wie viele Möglichkeiten hat ein Schloss mit 3 Walzen, jede mit 8 Symbolen?
V(8, 3) = 8^3 = 512

> **Merke:** "Mit Wiederholung" heißt: Jede Stelle kann unabhängig von den anderen belegt werden — Multiplikationsprinzip: n · n · n · ... (k-mal) = n^k.

---

## Kombinationen und der Binomialkoeffizient

Eine **Kombination** wählt k Elemente aus n aus — die Reihenfolge spielt keine Rolle.

**Ohne Wiederholung:** C(n, k) = "n über k" = n! / (k! · (n-k)!)

Der Ausdruck "n über k" heißt **Binomialkoeffizient** und wird geschrieben als (n k) oder C(n,k).

Beispiel Lotto "6 aus 49": Wie viele Möglichkeiten gibt es, 6 Zahlen aus 49 zu ziehen?
C(49, 6) = 49! / (6! · 43!) = (49 · 48 · 47 · 46 · 45 · 44) / (6 · 5 · 4 · 3 · 2 · 1)
= 10.068.347.520 / 720 = **13.983.816**

Rechenweg (Zähler: nur die oberen k Faktoren zählen):
Zähler = 49 · 48 · 47 · 46 · 45 · 44 = 10.068.347.520
Nenner = 6! = 720
Ergebnis = 13.983.816

> **Merke:** Beim Binomialkoeffizienten gilt C(n,k) = C(n, n-k). Es spielt keine Rolle, ob man "6 aus 49" oder "43 aus 49" wählt — die Anzahl ist identisch. Diese Symmetrie ist nützlich für schnelle Prüfungsberechnungen.

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

> **Merke:** Das Pascalsche Dreieck erlaubt das schnelle Ablesen kleiner Binomialkoeffizienten ohne Rechnung — nützlich für die Binomialverteilung in Wahrscheinlichkeitsaufgaben.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Fakultät n!, Permutation (Anordnung aller n Elemente), Variation (k aus n, Reihenfolge), Kombination (k aus n, ohne Reihenfolge), Urnenmodell.

**Ergänzend vertiefend:** Mit/ohne Wiederholung; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- "Auf wie viele Arten können 5 Medikamente auf einer Ablage angeordnet werden?" → Permutation: 5! = 120
- "Ein Arzt wählt 3 Tests aus 8 möglichen — wie viele Kombinationen?" → C(8,3) = 56
- "Wie viele 4-stellige Codes aus Ziffern 1–6 ohne Wiederholung?" → V(6,4) = 6!/2! = 360
- "Lotto 6 aus 45 (österreichischer Lotto-Sonderfall)?" → C(45,6) = 8.145.060

**Typische Prüfungsfallen / Verwechslungen:**
- Variation vs. Kombination: Wenn "Vorstandswahl mit Vorsitzendem und Stellvertreter" gefragt wird → Variation (Reihenfolge zählt!), nicht Kombination
- "Ohne Zurücklegen" = ohne Wiederholung; "mit Zurücklegen" = mit Wiederholung — bei Lottofragen explizit angegeben
- n! im Nenner des Binomialkoeffizienten: k! eliminiert Anordnungen der Auswahl, (n-k)! eliminiert die Anordnungen der Nicht-Auswahl

**Prüfungsrelevante Zahlen/Fakten:**
- 5! = 120, 6! = 720, 7! = 5.040, 10! = 3.628.800
- C(6,2) = 15, C(7,3) = 35, C(8,3) = 56, C(10,3) = 120
- Lotto 6 aus 45: C(45,6) = 8.145.060; Lotto 6 aus 49: C(49,6) ≈ 13,98 Mio.

---

## Rechenbeispiele

**Beispiel 1 — Blutgruppen-Phänotypen: Wie viele AB0-Rhesus-Kombinationen gibt es?**
AB0 hat 4 Phänotypen (A, B, AB, 0), Rhesus hat 2 (Rh+ , Rh−). Jede Person hat genau eine AB0- und eine Rhesus-Eigenschaft (Reihenfolge egal, keine Wiederholung innerhalb der Kategorie). Multiplikationsprinzip: 4 × 2 = **8 verschiedene Blutgruppen-Phänotypen** (A+, A−, B+, B−, AB+, AB−, 0+, 0−). Erweitert man um Kell (2 Varianten): 4 × 2 × 2 = **16**.

**Beispiel 2 — Studien-Randomisierung: 3 von 8 Medikamenten für einen Arm auswählen:**
In einer klinischen Studie sollen 3 Medikamente aus 8 verfügbaren gleichzeitig getestet werden (Reihenfolge egal, ohne Wiederholung). → Kombination: C(8,3) = (8 · 7 · 6) / (3 · 2 · 1) = 336 / 6 = **56 mögliche Dreier-Kombinationen**. Soll zusätzlich ein viertes Medikament als Reserve bestimmt werden (Reihenfolge der Reserve zählt): Variation V(8,4) = 8!/4! = 8 · 7 · 6 · 5 = **1.680**.

**Beispiel 3 — DNA-Codons: Wie viele verschiedene Basentripletts gibt es?**
4 Basen (A, U/T, G, C), je 3 Positionen, Wiederholung erlaubt, Reihenfolge zählt (AUG ≠ GUA). → Variation mit Wiederholung: V(4,3) = 4³ = **64 mögliche Codons**. Davon codieren 61 für Aminosäuren (3 Stopp-Codons). Mit 20 Aminosäuren → Code ist degeneriert (redundant): im Schnitt 61/20 ≈ 3 Codons pro Aminosäure.

## Zusammenfassung (ultrakompakt)

- **Permutation** (alle n, geordnet, ohne WH): P = n!; mit WH: P = n!/k₁!·k₂!·...
- **Variation** (k aus n, geordnet, ohne WH): V = n!/(n−k)!; mit WH: V = nᵏ
- **Kombination** (k aus n, ungeordnet, ohne WH): C = n!/(k!·(n−k)!) = C(n,k); mit WH: C = C(n+k−1,k)
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
          text: "Für C(n,k) kürzt man zuerst den Nenner (n-k)! gegen die letzten (n-k) Faktoren im Zähler n!, so dass im Zähler nur die k größten Faktoren (n, n-1, ..., n-k+1) stehen. Dann teilt man durch k!. Beispiel C(8,3) = (8·7·6)/(3·2·1) = 336/6 = 56. Diese Schreibweise ist rechnerisch viel einfacher als das vollständige Ausschreiben der Fakultäten.",
          merksatz:
            "C(n,k) Rechenschritt: Zähler = n·(n-1)·...·(n-k+1) (k Faktoren), Nenner = k!. Symmetrie: C(n,k) = C(n, n-k) — nimm immer das kleinere k.",
        },
      ],
      merksätze: [
        "Permutation (alle anordnen): n! ohne, n!/(k1!·k2!·...) mit identischen Elementen",
        "Variation (k aus n, geordnet): n!/(n-k)! ohne Wiederholung, n^k mit Wiederholung",
        "Kombination (k aus n, ungeordnet): C(n,k) = n!/(k!·(n-k)!) ohne Wiederholung",
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
            "Es werden alle 4 Patienten angeordnet (Reihenfolge wichtig, alle Objekte) → Permutation: P(4) = 4! = 4 · 3 · 2 · 1 = 24. Merkhilfe: Für den ersten Termin 4 Möglichkeiten, dann 3, dann 2, dann 1. Multiplikationsprinzip: 4 · 3 · 2 · 1 = 24.",
          hints: [
            "Alle 4 Patienten werden angeordnet, Reihenfolge zählt → Permutation.",
            "P(4) = 4! = 4 · 3 · 2 · 1 = ?",
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
            "Reihenfolge unwichtig, ohne Wiederholung → Kombination: C(7,3) = 7!/(3!·4!) = (7·6·5)/(3·2·1) = 210/6 = 35. Kurzrechnung: Zähler nur die 3 oberen Faktoren (7·6·5 = 210), Nenner = 3! = 6. Ergebnis: 35.",
          hints: [
            "Reihenfolge spielt keine Rolle → Kombination, nicht Variation.",
            "C(7,3) = (7·6·5)/(3·2·1) = ?",
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
            "Reihenfolge zählt (Code 123 ≠ Code 321), Wiederholung erlaubt → Variation mit Wiederholung: V(6,3) = 6^3 = 216. Jede der 3 Stellen hat unabhängig 6 Möglichkeiten: 6 · 6 · 6 = 216.",
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
            "Permutation mit Wiederholung: n = 5, L kommt 2× vor (k1=2), E kommt 2× vor (k2=2). P = 5!/(2!·2!) = 120/(2·2) = 120/4 = 30. Die Formel teilt durch die Fakultäten der identischen Elemente, weil deren Vertauschungen nicht unterscheidbar sind.",
          hints: [
            "Permutation mit identischen Elementen: P = n!/(k1!·k2!·...)",
            "n=5, L: 2×, E: 2× → 5!/(2!·2!) = ?",
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
            "C(45,6) = (45·44·43·42·41·40)/(6!) = 8.145.060 ≈ 8 Millionen. Zähler: 45·44·43·42·41·40 = 5.864.443.200. Nenner: 6! = 720. Ergebnis: 8.145.060. Zum Vergleich: Lotto 6/49 ergibt C(49,6) ≈ 13,98 Millionen Möglichkeiten.",
          hints: [
            "Reihenfolge egal, ohne Zurücklegen → C(45,6).",
            "Zähler: 45·44·43·42·41·40, Nenner: 6! = 720.",
          ],
          difficulty: 3,
          tags: ["kombination", "lotto", "binomialkoeffizient"],
        },
      ],
      altfrage: {
        question:
          "In einer Notaufnahme sollen 6 Ärzte so auf 6 Behandlungsräume aufgeteilt werden, dass jeder Arzt genau einen Raum übernimmt. (a) Wie viele Möglichkeiten gibt es? (b) Zwei der Ärzte (Dr. A und Dr. B) wollen auf keinen Fall benachbarte Räume (Räume 1&2, 2&3, 3&4, 4&5, 5&6). Wie viele Anordnungen erfüllen diese Bedingung?",
        answer:
          "Teil (a): Alle 6 Ärzte auf 6 Räume anordnen → Permutation P(6) = 6! = 720. Teil (b): Günstige Fälle = Gesamt − Ungünstige. Ungünstige Fälle (A und B benachbart): Es gibt 5 Paare benachbarter Räume. A und B können in 2 Reihenfolgen diese Räume besetzen (AB oder BA), die restlichen 4 Ärzte auf 4 verbleibende Räume: 4! = 24 Wege. Ungünstig = 5 · 2 · 24 = 240. Günstig = 720 − 240 = 480. Komplementstrategie: Gesamtmenge berechnen, Verbotenes abziehen — die effizienteste Methode bei Ausschlussbedingungen.",
      },
      klinischerBezug:
        "Die Kombinatorik ist die Grundlage für die Berechnung von Wahrscheinlichkeiten in klinischen Studien. Die Anzahl möglicher Genotypen in der Genetik (Kombinationen von Allelen), die Bewertung von Testergebnissen (Sensitivität/Spezifität basiert auf Vierfeldertafeln) und die Randomisierung in klinischen Studien nutzen kombinatorische Prinzipien. Im österreichischen MedAT erscheinen Kombinatorikaufgaben regelmäßig im BMS-Mathematik-Teil.",
    },

    {
      id: "ma-stoch-02",
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

**Wahrscheinlichkeit** P(A) ∈ [0,1]: Erbkrankheiten, Tests, Nebenwirkungen. Für den MedAT sind Laplace, Additionssatz, Komplementregel, Unabhängigkeit, Binomialverteilung prüfungsrelevant.

**In diesem Kapitel lernst du:** **Laplace** P(A)=|A|/|Ω|; **Additionssatz**; **Komplementregel**; **Unabhängigkeit**; **Binomialverteilung**; Baumdiagramm. **Kontext:** Von Mendel bis Testinterpretation.

---

## Grundbegriffe

![Wahrscheinlichkeit](/grafik-33-vierfeldertafel.svg)

**Erklärung zur Grafik:** Die Grafik veranschaulicht Laplace-Wahrscheinlichkeit P(A) = |A|/|Ω|, den Additionssatz P(A∪B) = P(A)+P(B)−P(A∩B) und die Vierfeldertafel zur Berechnung bedingter Wahrscheinlichkeiten und Unabhängigkeit.

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

> **Merke:** Die klassische Wahrscheinlichkeit gilt nur bei Laplace-Experimenten (gleichwahrscheinliche Ergebnisse). Bei einem gezinkten Würfel muss man relative Häufigkeiten aus Beobachtungen verwenden.

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

> **Merke:** Bei der Vereinigung immer prüfen: Überschneiden sich A und B? Wenn ja, wird P(A∩B) einmal abgezogen. Wenn A und B disjunkt sind (kein gemeinsames Element), einfach addieren.

### Multiplikationssatz (Schnittmenge bei unabhängigen Ereignissen)

**Unabhängige Ereignisse** A und B: Das Eintreten von A beeinflusst B nicht.

P(A ∩ B) = P(A) · P(B)

Beispiel: Zwei unabhängige Münzwürfe. P(beide Kopf) = 1/2 · 1/2 = 1/4

Beispiel klinisch: Ein Gendefekt tritt mit P = 0,01 auf, unabhängig in zwei verschiedenen Genen. P(beide defekt) = 0,01 · 0,01 = 0,0001 = 0,01%.

Erweiterung auf n unabhängige Ereignisse: P(A1 ∩ A2 ∩ ... ∩ An) = P(A1) · P(A2) · ... · P(An)

> **Merke:** Unabhängige Ereignisse: Wahrscheinlichkeiten multiplizieren. Achtung: Unabhängigkeit ≠ Disjunktheit! Zwei Ereignisse können gleichzeitig eintreten (nicht disjunkt) und trotzdem unabhängig sein.

---

## Baumdiagramme und Pfadregeln

Baumdiagramme visualisieren mehrstufige Zufallsexperimente.

**Pfadregel 1 (Pfad-Wahrscheinlichkeit):** Wahrscheinlichkeit eines Pfades = Produkt der Kantenwahrscheinlichkeiten entlang des Pfades.

**Pfadregel 2 (Ereignis-Wahrscheinlichkeit):** Wahrscheinlichkeit eines Ereignisses = Summe der Wahrscheinlichkeiten aller Pfade, die zu diesem Ereignis führen.

Beispiel: Eine Urne enthält 3 rote und 2 blaue Kugeln. Es werden 2 Kugeln ohne Zurücklegen gezogen.

Stufe 1: P(rot) = 3/5, P(blau) = 2/5

Stufe 2 nach rot: P(rot|1.rot) = 2/4 = 1/2, P(blau|1.rot) = 2/4 = 1/2
Stufe 2 nach blau: P(rot|1.blau) = 3/4, P(blau|1.blau) = 1/4

P(genau eine rote) = P(rot,blau) + P(blau,rot) = (3/5 · 2/4) + (2/5 · 3/4) = 6/20 + 6/20 = 12/20 = 3/5

> **Merke:** Im Baumdiagramm: Entlang eines Astes multiplizieren (UND), zwischen parallelen Ästen addieren (ODER).

---

## Binomialverteilung

Die **Binomialverteilung** B(n, p, k) beschreibt die Wahrscheinlichkeit, bei n unabhängigen Versuchen mit Erfolgswahrscheinlichkeit p genau k Erfolge zu erzielen.

P(X = k) = C(n, k) · p^k · (1−p)^(n−k)

Dabei ist:
- n = Anzahl der Versuche
- p = Erfolgswahrscheinlichkeit pro Versuch
- k = gewünschte Anzahl Erfolge (0 ≤ k ≤ n)
- C(n,k) = Binomialkoeffizient (Anzahl der Wege)

**Erwartungswert:** μ = n · p (mittlere Anzahl Erfolge)
**Standardabweichung:** σ = √(n · p · (1−p))

Beispiel: Ein Gen-Test hat 90% Treffsicherheit (p = 0,9). Bei 4 unabhängigen Tests: wie wahrscheinlich sind genau 3 korrekte Ergebnisse?

P(X = 3) = C(4,3) · 0,9^3 · 0,1^1 = 4 · 0,729 · 0,1 = 4 · 0,0729 = 0,2916 ≈ 29,2%

Erwartungswert: μ = 4 · 0,9 = 3,6 (im Schnitt 3,6 korrekte Ergebnisse)

> **Merke:** Binomialverteilung gilt nur wenn: (1) n Versuche sind unabhängig, (2) jeder Versuch hat genau zwei Ausgänge (Erfolg/Misserfolg), (3) p ist konstant. Wird eine Kugel ohne Zurücklegen gezogen, gilt Binomial nicht mehr!

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Wahrscheinlichkeit (Laplace, relative Häufigkeit), P(mindestens 1) = 1−P(keiner), Additions- und Multiplikationsregel, Unabhängigkeit, Baumdiagramm.

**Ergänzend vertiefend:** Bedingte Wahrscheinlichkeit; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- "Wie wahrscheinlich ist mindestens ein Treffer bei 3 Versuchen mit p=0,3?" → Komplement: 1 − 0,7^3 = 1 − 0,343 = 0,657
- "Würfel: P(keine 6 in 4 Würfen)?" → (5/6)^4 ≈ 0,482
- "Baumdiagramm: 2 Kugeln aus Urne ohne Zurücklegen — P(beide gleich)?" → Pfadregeln anwenden

**Typische Prüfungsfallen / Verwechslungen:**
- Mit vs. ohne Zurücklegen: ohne Zurücklegen ändern sich die Nenner in jedem Schritt (4/5, dann 3/4, etc.) — kein festes p mehr → keine Binomialverteilung
- Disjunkt vs. unabhängig verwechseln: Zwei disjunkte Ereignisse (A∩B=∅) mit P(A)>0 und P(B)>0 sind niemals unabhängig, denn wenn A eintritt, kann B nicht eintreten
- Additionssatz: P(A∩B) vergessen abzuziehen → Überzählung!

**Prüfungsrelevante Zahlen/Fakten:**
- P(Ā) = 1 − P(A) — immer gültig
- (1/2)^10 ≈ 0,001 (10 Münzwürfe alle Kopf: sehr unwahrscheinlich)
- Binomial-Erwartungswert: n·p (bei n=100, p=0,05: μ=5)

---

## Rechenbeispiele

**Beispiel 1 — Autosomal-rezessiv: Carrier-Wahrscheinlichkeit bei Mukoviszidose:**
Trägerfrequenz q ≈ 1/25 in Mitteleuropa (heterozygot Aa). Beide Eltern Carrier → P(Kind krank = aa) = 1/4 (Mendel). Zufällig zwei Personen: P(beide Carrier) = (1/25)² = 1/625. P(Kind krank) = 1/625 · 1/4 = **1/2.500** ≈ 0,04%. Tatsächliche Inzidenz von CF: ca. 1:2.500 — passt!

**Beispiel 2 — Komplement: Mindestens eine Nebenwirkung in 5 Dosen:**
Ein Medikament verursacht pro Dosis mit P = 0,15 eine Nebenwirkung (unabhängig). P(mind. 1 Nebenwirkung in 5 Dosen) = 1 − P(keine) = 1 − 0,85⁵. 0,85⁵ = 0,85 · 0,85 · 0,85 · 0,85 · 0,85 ≈ 0,4437. P(mind. 1) = 1 − 0,4437 = **0,556 ≈ 55,6%**. Also: Mehr als jeder zweite Patient erlebt mindestens eine Nebenwirkung über 5 Dosen — obwohl die Einzelwahrscheinlichkeit nur 15% beträgt.

**Beispiel 3 — Binomialverteilung: Impf-Wirksamkeit:**
Impfung hat Schutzrate p = 0,92. In einer Gruppe von n = 6 Geimpften: P(alle 6 geschützt) = C(6,6) · 0,92⁶ · 0,08⁰ = 1 · 0,92⁶ · 1 ≈ 0,92⁶. Rechnung: 0,92² = 0,8464; 0,92³ ≈ 0,7787; 0,92⁶ = (0,92³)² ≈ 0,7787² ≈ **0,606 ≈ 60,6%**. Erwartungswert: μ = 6 · 0,92 = **5,52** geschützte Personen.

## Zusammenfassung (ultrakompakt)

- **Laplace**: P(A) = günstige/mögliche Ergebnisse; nur wenn alle Ergebnisse gleich wahrscheinlich
- **Additionssatz**: P(A∪B) = P(A)+P(B)−P(A∩B); bei disjunkten Ereignissen: P(A∩B) = 0
- **Komplementregel**: P(Ā) = 1−P(A); "mindestens einmal" = 1 − P(keinmal)
- **Unabhängigkeit**: P(A∩B) = P(A)·P(B); Kettenregel: P(A∩B∩C) = P(A)·P(B)·P(C)
- **Binomialverteilung**: P(X=k) = C(n,k)·pᵏ·(1−p)^(n−k); μ = n·p; σ² = n·p·(1−p)
- **Klinisch**: Autosomal-rezessiv P(krank)=1/4; Nebenwirkungen kumulieren; Impfschutz C(6,6)·p⁶`,
      lernziele: [
        "Die klassische Wahrscheinlichkeit als P(A) = |A|/|Ω| berechnen und die Laplace-Bedingung prüfen",
        "Komplementregel, Additionssatz und Multiplikationssatz korrekt anwenden und dabei unvereinbare von unabhängigen Ereignissen unterscheiden",
        "Mehrstufige Zufallsexperimente mit Baumdiagrammen darstellen und die Pfadregeln (Multiplikation entlang, Addition zwischen Pfaden) anwenden",
        "Die Binomialformel P(X=k) = C(n,k)·p^k·(1−p)^(n−k) berechnen und Erwartungswert μ = n·p bestimmen",
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
          text: "Zwei Ereignisse sind unabhängig, wenn P(A∩B) = P(A)·P(B) gilt — das Eintreten des einen beeinflusst das andere nicht. Zwei Ereignisse sind disjunkt (unvereinbar), wenn A∩B = ∅ — sie können nicht gleichzeitig eintreten. Merke: Wenn P(A)>0 und P(B)>0, dann sind disjunkte Ereignisse immer abhängig, denn wenn A eintritt (A passiert), kann B nicht eintreten — also beeinflusst A das Eintreten von B.",
          merksatz:
            "Unabhängig: P(A∩B) = P(A)·P(B). Disjunkt: P(A∩B) = 0. Disjunkt ≠ Unabhängig — verwechsle die Begriffe nicht!",
        },
      ],
      merksätze: [
        "Laplace: P(A) = günstige Ergebnisse / alle Ergebnisse — nur bei gleichwahrscheinlichen Ergebnissen",
        "Komplementregel: P(Ā) = 1 − P(A) — gilt immer, sehr häufig im MedAT",
        "Additionssatz: P(A∪B) = P(A) + P(B) − P(A∩B) — Schnittmenge nicht vergessen",
        "Unabhängige Ereignisse: P(A∩B) = P(A) · P(B) — Multiplikation",
        "Baumdiagramm: Ast entlang = multiplizieren (UND), Äste addieren = ODER",
        "Binomial: P(X=k) = C(n,k) · p^k · (1-p)^(n-k), Erwartungswert μ = n·p",
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
            "Unabhängige Ereignisse: P(krank) = 0,1, P(Test positiv | krank) = 0,95. P(positiv UND krank) = P(krank) · P(pos|krank) = 0,1 · 0,95 = 0,095 = 9,5%. Dies ist die Wahrscheinlichkeit für 'richtig positiv' — der erste Schritt zur Vierfeldertafel.",
          hints: [
            "Unabhängige Ereignisse: P(A∩B) = P(A) · P(B).",
            "P(krank) · P(positiv) = 0,1 · 0,95 = ?",
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
            "P(X=2) = C(5,2) · 0,5^2 · 0,5^3 = 10 · 0,25 · 0,125 = 10 · 0,03125 = 0,3125 = 5/16. C(5,2) = 10, und 0,5^5 = 1/32. Also P(X=2) = 10/32 = 5/16. Probe: alle P(X=k) für k=0..5 summieren sich zu 1.",
          hints: [
            "P(X=k) = C(n,k) · p^k · (1-p)^(n-k) mit n=5, k=2, p=0,5.",
            "C(5,2) = 10. 0,5^5 = 1/32. P(X=2) = 10 · (1/32) = ?",
          ],
          difficulty: 3,
          tags: ["binomialverteilung", "wahrscheinlichkeit", "kombinatorik"],
        },
      ],
      altfrage: {
        question:
          "In einem Genetik-Labor werden 3 unabhängige PCR-Tests auf ein Gendefekt-Allel durchgeführt. Jeder Test erkennt das Allel mit Wahrscheinlichkeit p = 0,8 (und übersieht es mit 0,2). (a) Wie wahrscheinlich ist es, dass alle 3 Tests positiv ausfallen? (b) Wie wahrscheinlich ist es, dass mindestens 1 Test positiv ausfällt? (c) Was ist der Erwartungswert für die Anzahl positiver Tests?",
        answer:
          "Teil (a): Unabhängige Ereignisse, alle positiv: P(alle 3 positiv) = 0,8 · 0,8 · 0,8 = 0,8^3 = 0,512 = 51,2%. Teil (b): Komplement-Strategie: P(mind. 1 positiv) = 1 − P(kein einziger positiv) = 1 − 0,2^3 = 1 − 0,008 = 0,992 = 99,2%. Teil (c): Binomialverteilung B(3, 0,8): Erwartungswert μ = n · p = 3 · 0,8 = 2,4. Im Schnitt werden also 2,4 der 3 Tests positiv ausfallen. Kontrolle: P(X=0)=0,008, P(X=1)=3·0,8·0,04=0,096, P(X=2)=3·0,64·0,2=0,384, P(X=3)=0,512. Summe: 0,008+0,096+0,384+0,512=1. Korrekt.",
      },
      klinischerBezug:
        "Wahrscheinlichkeitsrechnung ist das Fundament der diagnostischen Medizin. P(Diagnose | Symptom) — also die Wahrscheinlichkeit einer Diagnose gegeben einem Symptom — kann nur mit den Regeln der Wahrscheinlichkeitsrechnung und dem Bayes-Theorem berechnet werden. Klinisch relevant: Bei seltenen Erkrankungen (niedrige Prävalenz) ist selbst bei hoher Treffsicherheit eines Tests die Wahrscheinlichkeit einer echten Erkrankung nach positivem Test überraschend niedrig.",
    },

    {
      id: "ma-stoch-03",
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

**Bayes** = Umrechnung von P(Test|Krank) zu P(Krank|Test); bei niedriger Prävalenz viele falsch-positive Ergebnisse. Für den MedAT sind bedingte Wahrscheinlichkeit, Satz von Bayes, totale Wahrscheinlichkeit, Vierfeldertafel prüfungsrelevant.

**In diesem Kapitel lernst du:** **P(A|B)** = P(A∩B)/P(B); **Satz von Bayes**; **totale Wahrscheinlichkeit**; **Vierfeldertafel**; PPV, NPV. **Kontext:** Testinterpretation, Screening, seltene Erkrankungen.

---

## Bedingte Wahrscheinlichkeit

![Vierfeldertafel](/grafik-33-vierfeldertafel.svg)

**Erklärung zur Grafik:** Die Abbildung zeigt die Vierfeldertafel (TP, TN, FP, FN), die Formel für bedingte Wahrscheinlichkeit P(A|B) = P(A∩B)/P(B) und die Umrechnung mit dem Satz von Bayes; wichtig für PPV und NPV bei medizinischen Tests.

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

P(A ∩ B) = P(A|B) · P(B) = P(B|A) · P(A)

> **Merke:** Bedingte Wahrscheinlichkeit verkleinert den Ergebnisraum. P(A|B) ≠ P(B|A) — diese Verwechslung ist der klassische "Prosecutors' Fallacy"-Fehler in der forensischen Medizin!

---

## Satz der totalen Wahrscheinlichkeit

Wenn Ω in disjunkte, vollständige Teilereignisse B1, B2, ..., Bn zerfällt (d.h. sie schließen sich aus und decken alles ab), dann gilt:

P(A) = P(A|B1) · P(B1) + P(A|B2) · P(B2) + ... + P(A|Bn) · P(Bn)

= Σ P(A|Bi) · P(Bi)

**Medizinisches Beispiel (Prävalenz und Test):**

Krankheit K mit Prävalenz P(K) = 5% = 0,05.
Test hat Sensitivität (richtig positiv) P(T+|K) = 0,90 und Spezifität P(T−|K̄) = 0,95.
Also P(T+|K̄) = 1 − 0,95 = 0,05 (falsch positiv).

Totale Wahrscheinlichkeit für positiven Test:
P(T+) = P(T+|K) · P(K) + P(T+|K̄) · P(K̄)
= 0,90 · 0,05 + 0,05 · 0,95
= 0,045 + 0,0475
= 0,0925 = 9,25%

Von allen Getesteten sind also 9,25% positiv. Aber wie viele davon sind wirklich krank?

> **Merke:** Totale Wahrscheinlichkeit: Gesamtwahrscheinlichkeit = Summe der gewichteten bedingten Wahrscheinlichkeiten. Die "Gewichte" P(Bi) müssen sich zu 1 addieren.

---

## Satz von Bayes

Der **Satz von Bayes** ermöglicht die Umkehrung der Bedingung — aus P(Test+|krank) wird P(krank|Test+):

P(A|B) = P(B|A) · P(A) / P(B)

Mit dem Satz der totalen Wahrscheinlichkeit für P(B):

P(A|B) = P(B|A) · P(A) / [P(B|A) · P(A) + P(B|Ā) · P(Ā)]

**Fortsetzung obiges Beispiel (positiver Vorhersagewert / PPV):**

P(K|T+) = P(T+|K) · P(K) / P(T+)
= 0,90 · 0,05 / 0,0925
= 0,045 / 0,0925
= 0,486 ≈ 48,6%

Ergebnis: Bei einem positiven Test ist die Person nur mit ca. 49% Wahrscheinlichkeit tatsächlich krank — trotz 90% Sensitivität und 95% Spezifität! Der Grund: Die Krankheit ist mit nur 5% Prävalenz selten, daher überwiegen die vielen Falsch-Positiven.

> **Merke:** Bayes-Theorem zeigt: Ein positiver Test bedeutet nicht "krank". Bei niedriger Prävalenz ist der PPV erschreckend niedrig. Das ist der häufigste Irrtum beim Lesen von Testergebnissen — klinisch hochrelevant!

---

## Vierfeldertafel — die visuelle Rechenhilfe

Die Vierfeldertafel ist für viele Studierende die intuitivste Methode für Bayes-Aufgaben. Man rechnet nicht mit Prozentzahlen, sondern mit absoluten Zahlen in einer 2×2-Tabelle.

Beispiel: n = 10.000 Personen, Prävalenz 5%, Sensitivität 90%, Spezifität 95%

**Schritt 1:** Kranke berechnen: 10.000 · 0,05 = 500 krank, 9.500 nicht krank.

**Schritt 2:** Testkategorien aufteilen:
- Krank: Test+ (TP) = 500 · 0,90 = 450; Test− (FN) = 500 · 0,10 = 50
- Nicht krank: Test− (TN) = 9.500 · 0,95 = 9.025; Test+ (FP) = 9.500 · 0,05 = 475

| | Test + | Test − | Gesamt |
|---|---|---|---|
| Krank | 450 (TP) | 50 (FN) | 500 |
| Nicht krank | 475 (FP) | 9.025 (TN) | 9.500 |
| Gesamt | 925 | 9.075 | 10.000 |

**Schritt 3:** PPV = TP / (TP + FP) = 450 / (450 + 475) = 450 / 925 ≈ 48,6%

Das entspricht exakt dem Bayes-Ergebnis — aber visuell viel klarer!

> **Merke:** Bei MedAT-Aufgaben zu Sensitivität/Spezifität immer zuerst die Vierfeldertafel aufstellen — das verhindert Verwechslungen und macht das Ergebnis sofort sichtbar.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Vierfeldertafel (Sensitivität, Spezifität, PPV, NPV), Prävalenz, Bayes (posterior aus Likelihood und Prior), Screening-Interpretation.

**Ergänzend vertiefend:** Likelihood-Quotient; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Gegeben Sensitivität, Spezifität, Prävalenz → berechne PPV oder NPV mittels Vierfeldertafel
- "In einer Urne sind 4 rote und 6 blaue Kugeln. Eine rote wird gezogen, ohne zurückzulegen. Wie groß ist P(zweite auch rot)?" → Bedingte Wahrscheinlichkeit: P(2.rot | 1.rot) = 3/9 = 1/3
- Bayes-Anwendung auf Erbkrankheiten: Eltern als Träger bekannt → P(Kind krank)?

**Typische Prüfungsfallen / Verwechslungen:**
- P(T+|K) ist die Sensitivität; P(K|T+) ist der PPV — diese werden im Alltag ständig verwechselt
- Bedingte Wahrscheinlichkeit ist nicht symmetrisch: P(A|B) ≠ P(B|A) in der Regel
- Satz von Bayes: Im Zähler steht P(B|A)·P(A), nicht P(A|B) — die Formel nicht umdrehen

**Prüfungsrelevante Zahlen/Fakten:**
- Hohe Sensitivität (>95%) → gut zum Ausschließen einer Erkrankung (Negativtest verlässlich)
- Hohe Spezifität (>95%) → gut zum Bestätigen (Positivtest verlässlich)
- Bei Prävalenz 1% und Sensitivität 99%, Spezifität 99%: PPV ≈ 50% (!)
- NPV = TN / (TN + FN); PPV = TP / (TP + FP)

---

## Rechenbeispiele

**Beispiel 1 — Mammographie-Screening: Vierfeldertafel komplett durchrechnen:**
Prävalenz Brustkrebs bei 50–69-Jährigen: P(K) = 0,8% = 0,008. Mammographie: Sensitivität 87%, Spezifität 95%. Stichprobe n = 10.000.
Krank: 10.000 · 0,008 = 80. Gesund: 9.920. TP = 80 · 0,87 = 69,6 ≈ 70. FN = 10. FP = 9.920 · 0,05 = 496. TN = 9.424. **PPV = 70 / (70 + 496) = 70 / 566 ≈ 12,4%**. Ergebnis: Nur ~1 von 8 positiven Mammographien ist tatsächlich Krebs — deshalb folgt immer eine Biopsie als Bestätigungstest.

**Beispiel 2 — HIV-Screening (2-Stufen-Strategie):**
Prävalenz 0,1% (Allgemeinbevölkerung). ELISA: Sens 99,7%, Spez 99,5%. n = 100.000. Krank: 100. TP = 99,7 ≈ 100. FP = 99.900 · 0,005 = 499,5 ≈ 500. PPV₁ = 100/600 ≈ 16,7%. Zweiter Test (Western Blot, Spez 99,99%) auf die 600 Positiven: TP₂ = 100 (echte bleiben positiv). FP₂ = 500 · 0,0001 = 0,05 ≈ 0. **PPV₂ ≈ 100/100 = ~100%**. Die 2-Stufen-Strategie hebt den PPV von 17% auf nahe 100%.

**Beispiel 3 — Carrier-Test: P(Carrier | positiver Test) bei CF:**
A priori P(Carrier) = 1/25 = 4%. Test: Sens 90%, Spez 99%. P(T+) = 0,90 · 0,04 + 0,01 · 0,96 = 0,036 + 0,0096 = 0,0456. P(Carrier|T+) = 0,036 / 0,0456 = **0,789 ≈ 79%**. Trotz 99% Spezifität: 1 von 5 positiv Getesteten ist kein Carrier. Bestätigungsdiagnostik (DNA-Analyse) nötig.

## Zusammenfassung (ultrakompakt)

- **Bedingte Wahrscheinlichkeit**: P(A|B) = P(A∩B)/P(B); "A gegeben B ist eingetreten"
- **Satz von Bayes**: P(A|B) = P(B|A)·P(A) / P(B); kehrt die Bedingung um
- **Totale Wahrscheinlichkeit**: P(B) = P(B|A₁)·P(A₁) + P(B|A₂)·P(A₂) + ...
- **Vierfeldertafel**: TP, FP, FN, TN; Sens = TP/(TP+FN); Spez = TN/(TN+FP); PPV = TP/(TP+FP); NPV = TN/(TN+FN)
- **Merkhilfe SpPin/SnNout**: Hohe Spezifität → positiver Test = krank (bestätigt); hohe Sensitivität → negativer Test = gesund (ausschließt)
- **Klinisch**: Mammographie PPV ~12%; HIV-Screening 2-Stufen (ELISA + Western Blot); CF-Carrier-Test`,
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
          text: "Die Vierfeldertafel macht Bayes-Aufgaben rechnerisch einfach und fehlerarm. Strategie: (1) Gesamtstichprobe n wählen (z.B. 10.000), (2) Erkrankte und Gesunde berechnen (n·Prävalenz), (3) TP, FN, TN, FP mit Sensitivität/Spezifität befüllen, (4) PPV = TP/(TP+FP), NPV = TN/(TN+FN). Diese Methode ist äquivalent zur Bayes-Formel, aber anschaulicher und fehleranfälliger — im MedAT immer bevorzugen.",
          merksatz:
            "Vierfeldertafel: TP = krank UND positiv, FP = gesund ABER positiv, FN = krank ABER negativ, TN = gesund UND negativ. PPV = TP/(TP+FP).",
        },
        {
          heading: "Prävalenz-Paradox — warum Tests bei seltenen Krankheiten täuschen",
          text: "Bei sehr niedriger Prävalenz (z.B. 0,1%) gibt es viele Gesunde, von denen selbst ein sehr spezifischer Test (99,9%) noch viele falsch als positiv markiert. Diese Falsch-Positiven überwiegen die wenigen echten Positiven, sodass der PPV trotz exzellentem Test erschreckend niedrig ist. Konkret: Bei 1 Million Menschen mit 0,1% Prävalenz (1.000 Kranke) und 99% Spezifität: FP = 0,01 · 999.000 = 9.990. TP ≈ 990. PPV = 990/10.980 ≈ 9%. Das ist das Bayes-Paradox — klinisch von größter Bedeutung.",
          merksatz:
            "Niedriger PPV bei niedriger Prävalenz ist kein Testversagen — es ist Mathematik. Deshalb werden Screening-Tests nur bei erhöhtem Risiko (Vorselektionierung) eingesetzt.",
        },
      ],
      merksätze: [
        "P(A|B) = P(A∩B) / P(B) — Bedingung verkleinert den Ergebnisraum auf B",
        "P(A|B) ≠ P(B|A) — bedingte Wahrscheinlichkeit ist nicht symmetrisch!",
        "Totale Wahrscheinlichkeit: P(A) = Σ P(A|Bi) · P(Bi) — gewichtetes Mittel",
        "Bayes: P(K|T+) = P(T+|K) · P(K) / P(T+) — das ist der PPV",
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
            "Vierfeldertafel: 1000 Personen. Krank: 1000 · 0,10 = 100. Nicht krank: 900. TP = krank · Sensitivität = 100 · 0,80 = 80. FN = 100 · 0,20 = 20. TN = 900 · 0,90 = 810. FP = 900 · 0,10 = 90. TP = 80.",
          hints: [
            "Krank = 1000 · 0,10 = 100 Personen.",
            "TP = Krank · Sensitivität = 100 · 0,80 = ?",
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
            "P(T+) = P(T+|K)·P(K) + P(T+|K̄)·P(K̄) = 0,95·0,02 + 0,02·0,98 = 0,019 + 0,0196 = 0,0386. P(K|T+) = 0,019 / 0,0386 ≈ 0,492 ≈ 49%. Bei Prävalenz 2% und gleichem Fehlerrate der Falsch-Positiven (2%) sind von allen Positiven fast die Hälfte falsch positiv — ein klassisches Bayes-Paradox.",
          hints: [
            "Zuerst P(T+) berechnen (totale Wahrscheinlichkeit).",
            "P(K|T+) = P(T+|K)·P(K) / P(T+) = 0,019 / ?",
          ],
          difficulty: 3,
          tags: ["bayes", "ppv", "prävalenz", "klinisch"],
        },
      ],
      altfrage: {
        question:
          "In einer österreichischen Studie zur Früherkennung einer genetischen Erkrankung (Prävalenz 0,5%) wird ein neuer Test mit Sensitivität 92% und Spezifität 96% eingesetzt. (a) Berechnen Sie den PPV mit einer Vierfeldertafel für n = 100.000 Personen. (b) Interpretieren Sie das Ergebnis klinisch. (c) Welche Maßnahme würde den PPV am stärksten erhöhen?",
        answer:
          "Teil (a): n=100.000. Krank: 500. Nicht krank: 99.500. TP = 500 · 0,92 = 460. FN = 40. FP = 99.500 · 0,04 = 3.980. TN = 95.520. Positiv gesamt = 460 + 3.980 = 4.440. PPV = 460 / 4.440 = 0,1036 ≈ 10,4%. Teil (b): Klinisch bedeutet das: Von 100 Personen mit positivem Test sind nur etwa 10 tatsächlich krank — 90 erhalten ein falsch positives Ergebnis. Das verursacht unnötige Angst, kostspielige Folgeuntersuchungen und eventuell unnötige Behandlungen. Teil (c): Erhöhung der Prävalenz in der Teststichprobe durch Vorselektion (Screening nur bei Risikogruppen, z.B. Familienanamnese). Bei Prävalenz 10% (Risikogruppe) würde PPV auf ~72% steigen. Alternativ: Spezifität erhöhen (weniger FP), hat bei seltenen Erkrankungen den stärksten Effekt auf PPV.",
      },
      klinischerBezug:
        "Das Bayes-Theorem ist das mathematische Fundament der evidenzbasierten Medizin. Jede Diagnose ist ein Bayes-Update: die Vortestwahrscheinlichkeit (Prior = Prävalenz in dieser Population) wird durch Testergebnisse zur Nachtestwahrscheinlichkeit (Posterior = PPV/NPV). Klinisch gilt: Sens/Spez sind Eigenschaften des Tests; PPV/NPV sind Eigenschaften des Tests UND der Population. Deshalb gelten Screeningtests nur in spezifischen Bevölkerungsgruppen mit bekanntem Risiko.",
    },

    {
      id: "ma-stoch-04",
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

**Statistik** = Lagemaße (Mittelwert, Median), Streumaße (σ, Varianz), **Normalverteilung** (68-95-99,7), **Sensitivität/Spezifität**. Für den MedAT sind Normalverteilung, 68-95-99,7-Regel, Lagemaße, Streumaße, Sens/Spez, p-Wert prüfungsrelevant.

**In diesem Kapitel lernst du:** **Mittelwert**, **Median**, **Modus**; **Varianz**, **Standardabweichung**; **Normalverteilung** (μ, σ); **68-95-99,7**; **Sensitivität/Spezifität**; p-Wert. **Kontext:** Von Laborwerten zur Diagnostik.

---

## Lage- und Streumaße

![Normalverteilung](/grafik-normalverteilung.svg)

**Erklärung zur Grafik:** Die Grafik zeigt die Normalverteilung (Glockenkurve) mit Mittelwert μ und Standardabweichung σ, die 68-95-99,7-Regel sowie die Zuordnung von Sensitivität und Spezifität (TP, TN, FP, FN) in der Diagnostik.

![Vierfeldertafel](/grafik-33-vierfeldertafel.svg)

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

**Interquartilsabstand (IQA):**
IQA = Q3 − Q1 (75. Perzentile minus 25. Perzentile). Robust gegen Ausreißer. Wird im Boxplot dargestellt.

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

| Kennzahl | Formel | Bedeutung |
|----------|--------|-----------|
| Sensitivität | TP/(TP+FN) | Kranke korrekt als krank erkannt |
| Spezifität | TN/(TN+FP) | Gesunde korrekt als gesund erkannt |
| PPV | TP/(TP+FP) | Sicherheit eines positiven Befunds |
| NPV | TN/(TN+FN) | Sicherheit eines negativen Befunds |

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

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Lagemaße (Mittelwert, Median, Modus), Streuung (Spannweite, Varianz, Standardabweichung), Boxplot, Interpretation klinischer Studien.

**Ergänzend vertiefend:** Konfidenzintervalle; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Datensatz gegeben → Mittelwert, Median, Modus berechnen
- Normalverteilung N(μ=170, σ=8): Wie viel Prozent liegen zwischen 162 und 178? → 68% (μ±1σ)
- Sensitivität aus Vierfeldertafel: TP=45, FN=5, also Sens = 45/50 = 90%
- p-Wert: "Was bedeutet p=0,03?" → Unter H0 würde dieses extreme Ergebnis nur in 3% der Fälle auftreten → statistisch signifikant

**Typische Prüfungsfallen / Verwechslungen:**
- Mittelwert ≠ Median bei schiefer Verteilung (Ausreißer ziehen nur den Mittelwert)
- Standardabweichung ≠ Standardfehler (SEM = σ/√n ist kleiner und unterschätzt die Streuung der Rohwerte)
- Sensitivität und Spezifität sind komplementär zum Fehler: FPR = 1 − Spezifität; FNR = 1 − Sensitivität
- p < 0,05 bedeutet nicht "H0 ist falsch" — es bedeutet "Daten sind mit H0 schlecht vereinbar"

**Prüfungsrelevante Zahlen/Fakten:**
- Normalverteilung: 68% in ±1σ, 95% in ±2σ, 99,7% in ±3σ
- p-Wert Schwellenwert: p < 0,05 = signifikant (Konvention)
- Hohe Sensitivität → gut zum Ausschließen (SnNout)
- Hohe Spezifität → gut zum Bestätigen (SpPin)

---

## Rechenbeispiele

**Beispiel 1 — Referenzbereich: Cholesterin in einer Population:**
Gesamtcholesterin N(μ = 200, σ = 35) mg/dL. Referenzbereich = μ ± 2σ = 200 ± 70 = **130–270 mg/dL**. Anteil innerhalb: 95%. Anteil oberhalb 270 (> μ+2σ): 2,3% — als "erhöht" klassifiziert. Patient mit 235 mg/dL: z = (235 − 200)/35 = 1,0 → liegt bei μ+1σ, also im oberen 16%-Bereich — grenzwertig, aber innerhalb des Referenzbereichs.

**Beispiel 2 — z-Transformation: Nüchtern-Blutzucker bewerten:**
Population: N(μ = 90, σ = 12) mg/dL. Patient misst 126 mg/dL. z = (126 − 90) / 12 = 36/12 = **3,0**. Interpretation: 3 Standardabweichungen über dem Mittelwert → liegt außerhalb μ+3σ, also im obersten 0,15% der Bevölkerung. Klinisch: Nüchternglukose ≥ 126 mg/dL = Diabetes-Diagnosekriterium (WHO).

**Beispiel 3 — Sens/Spez-Tradeoff: Troponin-Schwellenwert verschieben:**
Troponin-Test für Herzinfarkt, aktueller Cutoff: Sens = 85%, Spez = 92%. Senkt man den Cutoff (empfindlicher): Sens steigt auf 95%, Spez sinkt auf 80%. In einer Notaufnahme (Prävalenz 10%, n = 1.000): Alter Cutoff: TP = 85, FP = 72, PPV = 85/157 ≈ **54%**. Neuer Cutoff: TP = 95, FP = 180, PPV = 95/275 ≈ **34,5%**. Klinische Entscheidung: höherer Sens-Cutoff in der Notaufnahme (kein Infarkt verpassen), dann Bestätigung mit spezifischerem Test.

## Zusammenfassung (ultrakompakt)

- **Lagemaße**: Mittelwert x̄ = Σxᵢ/n; Median = mittlerer Wert (bei Ausreißern bevorzugt); Modus = häufigster Wert
- **Streumaße**: Varianz s² = Σ(xᵢ−x̄)²/(n−1); Standardabweichung s = √s²; IQR = Q3−Q1
- **Normalverteilung**: Glockenkurve; μ±1σ → 68%; μ±2σ → 95%; μ±3σ → 99,7%
- **z-Transformation**: z = (x−μ)/σ; z = 2 bedeutet 97,7% der Daten sind darunter (2,3% oberhalb)
- **Referenzbereich**: μ±2σ umfasst 95% → 5% gesunder Personen fallen heraus (falsch-positiv)
- **ROC-Kurve**: Cutoff-Verschiebung → Sens↑ Spez↓ und umgekehrt; AUC = Trennfähigkeit des Tests`,
      lernziele: [
        "Mittelwert, Median und Modus aus einem gegebenen Datensatz berechnen und bei schiefer Verteilung den geeigneteren Lageparameter auswählen",
        "Varianz und Standardabweichung berechnen und interpretieren",
        "Die 68-95-99,7-Regel auf konkrete Normalverteilungsaufgaben anwenden",
        "Sensitivität, Spezifität, PPV und NPV aus einer Vierfeldertafel berechnen und klinisch interpretieren",
        "Den p-Wert konzeptuell erklären und den Unterschied zu klinischer Bedeutsamkeit benennen",
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
