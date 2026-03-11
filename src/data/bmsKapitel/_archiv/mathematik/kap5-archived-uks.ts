/**
 * Archived UKs from kap5-funktionen.ts
 * Reason: NOT in official MedAT 2026 Stichwortliste
 * Archived: 2026-03-11
 *
 * - ma-5-05: Grapheninterpretation, Asymptoten und Semilog-Plots
 * - ma-5-06: Folgen und Reihen
 */
import type { Kapitel } from "../../types";

export const archivedMathFunktionenUKs: Kapitel["unterkapitel"] = [
  {
    id: "ma-5-05",
    title: "Grapheninterpretation, Asymptoten und Semilog-Plots",
    stichworte: [
      "Asymptote",
      "Semilog-Plot",
      "Monotonie",
      "Extrempunkt",
      "Wendepunkt",
      "Linearisierung",
      "Michaelis-Menten",
      "Dosis-Wirkungskurve",
      "EC50",
      "Krümmung",
      "Rationale Funktion",
      "Kaplan-Meier-Kurve",
    ],
    content: `## Der ICU-Monitor zeigt eine Kurve — aber welche?

Auf der Intensivstation fällt die Plasmakonzentration eines Antibiotikums steil ab. Ist das ein linearer Abfall oder ein exponentieller Zerfall? Die Antwort bestimmt, wann die nächste Dosis fällig ist. Auf der Pharmakologie-Klausur wird eine S-förmige Kurve gezeigt — ist das Michaelis-Menten oder eine Dosis-Wirkungskurve? Wer Kurvenformen sicher erkennt, Asymptoten abliest und semilogarithmische Plots versteht, beherrscht die Sprache, in der die gesamte biomedizinische Forschung ihre Ergebnisse kommuniziert.

---

## 1. Grundlegende Kurvenformen — fünf Typen, die du kennen musst

Jeder Funktionstyp erzeugt eine charakteristische Kurvenform. Am MedAT wird oft ein Graph ohne Gleichung gezeigt — du musst den Typ sofort erkennen:

| Kurvenform | Funktionstyp | Klinisches Beispiel |
|---|---|---|
| **Gerade** | linear: y = mx + b | Ethanol-Abbau (Kinetik 0. Ordnung, ca. 0,15 ‰/h) |
| **Konvexe Kurve** (nach oben gewölbt, flacht ab) | exponentieller Zerfall: y = a·e^(−kx) | Medikamentenabbau im Blut (Kinetik 1. Ordnung) |
| **Konkave Kurve** (nach oben gewölbt, wird steiler) | exponentielles Wachstum: y = a·e^(kx) | Bakterienvermehrung bei Sepsis |
| **S-Kurve** (sigmoidal (S-förmig)) | logistisch oder Hill-Gleichung | Dosis-Wirkungskurve, O₂-Bindungskurve von Hämoglobin |
| **Hyperbel** (steigt steil, flacht asymptotisch ab) | Sättigungskinetik: y = a·x/(b+x) | Michaelis-Menten-Enzymkinetik |

> **Merke:** **Gerade = linear, konvexer Abfall = exponentieller Zerfall, S-Kurve = sigmoidal, Hyperbel = Sättigung.** Wenn du am MedAT nur den Kurvenverlauf siehst, ordne ihn einem dieser fünf Typen zu — daraus ergibt sich die Funktionsgleichung.

{{DIAGRAM:curve-types-overview}}

**Denkprozess — Kurventyp erkennen:**
Du siehst einen Graphen, der zunächst steil ansteigt und dann ein Plateau erreicht. Frage: Sigmoidal oder hyperbolisch?
- Hat die Kurve einen **Wendepunkt** (Punkt der steilsten Steigung)? → **Sigmoidal** (S-Kurve)
- Steigt sie von Anfang an steil und flacht nur ab, **ohne Wendepunkt**? → **Hyperbel** (Sättigungskurve)

---

## 2. Asymptoten — Grenzlinien mit biologischer Bedeutung

Eine **Asymptote** (griech. „sich nicht berührend") ist eine Gerade, der sich ein Graph beliebig annähert, ohne sie je zu erreichen. In der Medizin haben Asymptoten handfeste Bedeutung:

**Horizontale Asymptote** — der Grenzwert für x → ±∞:
- Berechnung: y = lim(x→∞) f(x)
- **Biologisch**: maximale Enzymgeschwindigkeit v_max (Michaelis-Menten), maximale Wirkung E_max (Dosis-Wirkungskurve)
- Beispiel: f(x) = 3·e^(−x) + 2 → für x→∞ geht e^(−x)→0, also **y = 2**

**Vertikale Asymptote** — die Polstelle (Definitionslücke):
- Berechnung: x = a, wenn f(x) → ±∞ für x → a
- **Biologisch**: ln(x) hat vertikale Asymptote bei x = 0 — die Konzentration kann nie negativ werden
- Beispiel: f(x) = 1/(x−3) → **x = 3**

**Schräge Asymptote** — bei rationalen Funktionen, wenn Grad(Zähler) = Grad(Nenner) + 1:
- Berechnung über Polynomdivision → y = mx + b
- Seltener am MedAT, aber gelegentlich abgefragt

| Bei rationalen Funktionen P(x)/Q(x) | Asymptoten-Typ |
|---|---|
| Grad(P) < Grad(Q) | Horizontale: **y = 0** |
| Grad(P) = Grad(Q) | Horizontale: **y = führende Koeffizienten dividieren** |
| Grad(P) = Grad(Q) + 1 | **Schräge** Asymptote (Polynomdivision) |

> **Merke:** **Enzym-Sättigung = horizontale Asymptote.** Wenn alle Enzym-Bindungsstellen besetzt sind, steigt v nicht weiter — das Plateau v_max ist die horizontale Asymptote der Michaelis-Menten-Kurve. Dasselbe Prinzip gilt für die maximale Rezeptor-Antwort E_max.

---

## 3. Semilogarithmische Darstellung — warum die Pharmakologie sie liebt

Exponentieller Zerfall sieht in linearer Darstellung wie eine Kurve aus, aus der man kaum Zahlenwerte ablesen kann. Die Lösung: **eine Achse logarithmieren**.

**Semilog-Plot** (ln C auf der y-Achse, t linear auf der x-Achse):
- C(t) = C₀·e^(−kt) → **ln C = ln C₀ − k·t** → eine **Gerade**!
- **Steigung** = −k → daraus k ablesen
- **y-Achsenabschnitt** = ln C₀ → daraus die Anfangskonzentration
- **T½** direkt ablesbar: Zeitspanne, in der die Kurve um ln(2) ≈ 0,693 fällt

{{DIAGRAM:semilog-plot}}

**Denkprozess — Parameter aus dem Semilog-Plot ablesen:**
Gegeben: Gerade durch (0 | ln 100) und (10 h | ln 50).
1. Steigung = (ln 50 − ln 100)/10 = ln(0,5)/10 = −0,693/10 = **−0,0693 h⁻¹**
2. k = −Steigung = **0,0693 h⁻¹**
3. T½ = 0,693/k = 0,693/0,0693 = **10 h** ✓ (Probe: von 100 auf 50 in 10 h = eine Halbierung)

**Wann ist der Semilog-Plot KEINE Gerade?**
- Biphasische Kurve (Knick) → **Mehr-Kompartiment-Kinetik** (Alpha-Phase = Verteilung, Beta-Phase = Elimination)
- Gebogene Kurve → **keine reine Kinetik 1. Ordnung** (z. B. Sättigungskinetik wie bei Phenytoin)

**Doppelt-logarithmischer Plot (Log-Log):** Beide Achsen logarithmisch. Linearisiert **Potenzfunktionen** y = A·xⁿ → log y = log A + n·log x. Anwendung: Allometrie (Körpergrößen-Skalierung in der Biologie), manche Dosis-Wirkungskurven.

> **Merke:** **Semilog linearisiert Exponentialfunktionen. Log-Log linearisiert Potenzfunktionen.** Ist die Kurve im Semilog-Plot keine Gerade, liegt keine reine Kinetik 1. Ordnung vor — sofort an Sättigungskinetik oder Mehrkompartiment-Modelle denken.

---

## 4. Michaelis-Menten & Lineweaver-Burk — Enzymkinetik als Graphen lesen

Die **Michaelis-Menten-Gleichung** beschreibt die Reaktionsgeschwindigkeit v in Abhängigkeit von der Substratkonzentration [S]:

**v = v_max × [S] / (Km + [S])**

Der Graph ist eine **Hyperbel** mit drei entscheidenden Bereichen:
- **[S] << Km** (Substratmangel): v ≈ (v_max/Km)·[S] → **linear** (Kinetik 1. Ordnung)
- **[S] = Km**: v = v_max/2 → **halbmaximale Geschwindigkeit** (Definition von Km!)
- **[S] >> Km** (Substratüberschuss): v ≈ v_max → **Sättigung** (Kinetik 0. Ordnung)

**Denkprozess — v bei gegebener [S] berechnen:**
v_max = 10 µmol/(L·s), Km = 2 mmol/L. Gesucht: v bei [S] = 8 mmol/L.
v = 10 × 8/(2+8) = 80/10 = **8 µmol/(L·s)** = 80 % von v_max.
Erkenntnis: Selbst bei [S] = 4×Km werden nur 80 % erreicht — Sättigungskinetik!

**Lineweaver-Burk-Plot** — die Linearisierung der Michaelis-Menten-Kurve:
Kehrwert bilden: **1/v = (Km/v_max) · 1/[S] + 1/v_max**

In einem 1/v vs. 1/[S] Diagramm ergibt sich eine Gerade:
- **Steigung** = Km/v_max
- **y-Achsenabschnitt** = 1/v_max → v_max ablesen
- **x-Achsenabschnitt** = −1/Km → Km ablesen

> **Merke:** **Km = [S] bei v = v_max/2.** Kleines Km = hohe Affinität (das Enzym greift das Substrat schon bei niedriger Konzentration effizient). Der Lineweaver-Burk-Plot macht aus der Hyperbel eine Gerade, aus der man Km und v_max direkt abliest — Goldstandard der Enzymkinetik-Analyse.

---

## 5. Dosis-Wirkungskurven — EC₅₀ und Hill-Koeffizient

In der Pharmakologie wird die Wirkung E gegen die logarithmierte Dosis aufgetragen. Es entsteht eine **sigmoidale Kurve** (S-Form):

**E = E_max × [D]ⁿ / (EC₅₀ⁿ + [D]ⁿ)** — die Hill-Gleichung

Drei Parameter bestimmen alles:
- **E_max** (horizontale Asymptote): maximale Wirkung — misst die **Effizienz** (Efficacy) des Pharmakons
- **EC₅₀** (Wendepunkt der Kurve): Konzentration bei halbmaximaler Wirkung — misst die **Potenz**. Niedriges EC₅₀ = hohe Potenz (weniger Substanz nötig)
- **Hill-Koeffizient n** (Steilheit der S-Kurve): beschreibt Kooperativität. n = 1 → Michaelis-Menten-Form (Hyperbel). n > 1 → steilere S-Kurve (positive Kooperativität, z. B. Hämoglobin mit n ≈ 2,8). n < 1 → flachere Kurve (negative Kooperativität)

**Therapeutischer Index** = TD₅₀/ED₅₀ (toxische Dosis / effektive Dosis). Großer Index = breite therapeutische Breite = sicheres Medikament.

> **Merke:** **EC₅₀ misst Potenz, E_max misst Effizienz.** Ein Medikament kann hochpotent sein (niedriges EC₅₀), aber geringe Effizienz haben (niedriges E_max) — oder umgekehrt. Der Hill-Koeffizient bestimmt, ob die Kurve eine flache Hyperbel (n=1) oder eine steile S-Kurve (n>1) ist.

---

## Rechenbeispiele

**Beispiel 1 — Asymptoten einer rationalen Funktion:**
f(x) = (3x² + 6)/(x² − 4). *Denkprozess:* Grad(Zähler) = Grad(Nenner) = 2 → horizontale Asymptote bei y = 3/1 = **3**. Vertikale Asymptoten: Nenner = 0 → x² = 4 → **x = ±2**. Klinisch: Die horizontale Asymptote entspricht E_max, die vertikalen Asymptoten markieren Definitionslücken.

**Beispiel 2 — Biphasische Kinetik im Semilog-Plot:**
Nach i.v.-Bolus: Alpha-Phase (0–2 h): ln C fällt von 4,6 auf 2,3 → k_α = 2,3/2 = **1,15 h⁻¹** (T½α = 0,6 h). Beta-Phase (2–12 h): ln C fällt von 2,3 auf 0 → k_β = 2,3/10 = **0,23 h⁻¹** (T½β = 3 h). Der Knick verrät: Erst verteilt sich das Medikament (Alpha), dann wird es eliminiert (Beta).

**Beispiel 3 — Michaelis-Menten bei v = v_max/4:**
Gesucht: [S] bei v = v_max/4. Einsetzen: v_max/4 = v_max·[S]/(Km+[S]) → 1/4 = [S]/(Km+[S]) → Km+[S] = 4[S] → Km = 3[S] → **[S] = Km/3**. Bei einem Drittel der Km-Konzentration läuft das Enzym nur mit 25 % — Sättigungskinetik in Aktion.`,
    lernziele: [
      "Horizontale, vertikale und schräge Asymptoten aus Graphen ablesen und berechnen.",
      "Monotoniebereiche, Extrempunkte und Wendepunkte in Funktionsgraphen identifizieren.",
      "Semilogarithmische Plots erstellen und daraus pharmakokinetische Parameter (k, T½, C₀) ablesen.",
      "Die Michaelis-Menten-Kurve und Dosis-Wirkungskurven graphisch interpretieren und die EC₅₀ bestimmen.",
      "Exponentialfunktionen durch Logarithmieren linearisieren und die resultierende Gerade interpretieren.",
    ],
    sections: [
      {
        heading: "Asymptoten erkennen und bestimmen",
        text: "Asymptoten sind Grenzlinien, an die sich ein Graph asymptotisch annähert, ohne sie (im Endlichen) zu erreichen. Horizontale Asymptoten ergeben sich aus dem Grenzwert für x → ±∞, vertikale aus Definitionslücken (z. B. Division durch null, Logarithmus von null). Die Exponentialfunktion e^(−x) hat die horizontale Asymptote y = 0 für x → ∞. Die Logarithmusfunktion ln(x) hat die vertikale Asymptote x = 0. Rationale Funktionen können sowohl horizontale als auch schräge Asymptoten besitzen.",
        merksatz:
          "Horizontale Asymptote: lim(x→∞) f(x) = c → y = c. Vertikale Asymptote: f(x) → ±∞ bei x → a → x = a.",
      },
      {
        heading: "Semilog-Plot und Linearisierung",
        text: "Durch Logarithmieren transformiert man C(t) = C₀×e^(−kt) in die lineare Form ln C = ln C₀ − k×t. Im ln C vs. t Diagramm erscheint die Kurve als Gerade. Steigung = −k, y-Achsenabschnitt = ln C₀. Dieses Prinzip nutzt man zur graphischen Bestimmung pharmakokinetischer Parameter: Man misst Konzentrationswerte zu verschiedenen Zeitpunkten, trägt ln C gegen t auf, zeichnet die Ausgleichsgerade ein und liest Steigung und Achsenabschnitt ab.",
        merksatz:
          "ln C vs. t: Gerade mit Steigung −k und Achsenabschnitt ln C₀. T½ = 0,693/k. Gilt nur für Kinetik 1. Ordnung.",
      },
      {
        heading: "Michaelis-Menten und Dosis-Wirkungskurven",
        text: "Die Michaelis-Menten-Gleichung v = v_max×[S]/(Km+[S]) beschreibt enzymatische Kinetik. Km ist die Substratkonzentration, bei der v = v_max/2. In einem v-vs.-[S]-Diagramm erscheint die Kurve als Hyperbel mit horizontaler Asymptote v_max. Die EC₅₀ auf einer Dosis-Wirkungskurve entspricht dem Km auf einer Enzymkinetik-Kurve. Beide sind Maße für die Affinität des Liganden bzw. Substrats zum Rezeptor bzw. Enzym.",
        merksatz:
          "Michaelis-Menten: v = v_max/2 bei [S] = Km. Hyperbel mit Asymptote v_max. Linearisierung: Lineweaver-Burk-Plot.",
      },
    ],
    merksätze: [
      "Fünf Kurventypen: Gerade (linear), konvexer Abfall (exp. Zerfall), konkaver Anstieg (exp. Wachstum), S-Kurve (sigmoidal), Hyperbel (Sättigung).",
      "Horizontale Asymptote = biologisches Maximum (v_max, E_max). Vertikale Asymptote = Definitionsgrenze.",
      "Semilog-Plot linearisiert Exponentialfunktionen: ln C = −kt + ln C₀. Steigung = −k, daraus T½ = 0,693/k.",
      "Log-Log-Plot linearisiert Potenzfunktionen. Keine Gerade im Semilog → keine reine Kinetik 1. Ordnung.",
      "Michaelis-Menten: v = v_max×[S]/(Km+[S]). Km = [S] bei v = v_max/2. Kleines Km = hohe Affinität.",
      "Lineweaver-Burk: 1/v vs. 1/[S] → Gerade. y-Achsenabschnitt = 1/v_max, x-Achsenabschnitt = −1/Km.",
      "EC₅₀ misst Potenz (Wendepunkt der Dosis-Wirkungskurve), E_max misst Effizienz (horizontale Asymptote).",
      "Hill-Koeffizient n: n=1 → Hyperbel (Michaelis-Menten), n>1 → steile S-Kurve (Kooperativität).",
      "Therapeutischer Index = TD₅₀/ED₅₀. Großer Index = breite therapeutische Breite = sicheres Medikament.",
    ],
    // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
    altfrage: {
      question:
        "Erklären Sie, wie Sie aus einem Semilog-Plot pharmakokinetische Parameter ablesen und welche Voraussetzung erfüllt sein muss, damit die Darstellung als Gerade erscheint.",
      answer:
        "Ein semilogarithmischer Plot (Semilog-Plot) trägt ln C auf der y-Achse gegen t auf der x-Achse auf. Für Kinetik erster Ordnung: C(t) = C₀×e^(−kt) → ln C = ln C₀ − k×t. Geradensteigung = −k, y-Achsenabschnitt = ln C₀. T½ = ln(2)/k ≈ 0,693/k. Voraussetzung: Kinetik erster Ordnung (Eliminationsrate proportional zur Konzentration). Bei Kinetik nullter Ordnung erscheint im Semilog-Plot eine Kurve.",
    },
    klinischerBezug:
      "Im Semilog-Plot der Plasmakonzentration nach intravenöser Bolusinjektion kann man bei einem Einkompartimentmodell sofort T½ und Clearance ablesen; Abweichungen von der Linearität (biphasische oder triphasische Kurven) deuten auf Mehr-Kompartiment-Kinetik hin, wie sie bei Gentamicin und Vancomycin klinisch relevant ist. Die Michaelis-Menten-Kinetik erklärt, warum Phenytoin bei therapeutischen Plasmakonzentrationen von nichtlinearer Kinetik geprägt ist: Km ≈ 5 mg/L liegt im therapeutischen Bereich (10–20 mg/L), d. h. das Enzymsystem ist nahezu gesättigt, was zu unverhältnismäßig großen Konzentrationsanstiegen bei Dosiserhöhung führt. Dosis-Wirkungskurven mit ihrer EC₅₀ werden zur Charakterisierung von Agonisten (Potenz) und zur Berechnung therapeutischer und toxischer Dosisbereiche (therapeutischer Index = TD₅₀/ED₅₀) genutzt.",
    selfTest: [
      {
        question: "Welche Asymptote hat die Funktion f(x) = 3 × e^(−x) + 2?",
        options: ["y = 0", "y = 2", "y = 3", "x = 2", "y = −2"],
        correctIndex: 1,
        explanation:
          "Für x → ∞ gilt e^(−x) → 0, daher f(x) → 3×0 + 2 = 2. Die horizontale Asymptote ist y = 2. Diese Funktion unterscheidet sich von der reinen Zerfallsfunktion, weil sie nicht gegen 0 geht, sondern gegen eine verschobene Asymptote. In der Pharmakokinetik kann eine solche Funktion einen Grundspiegel (z. B. endogene Produktion) beschreiben, der unabhängig von der Medikamentgabe persistiert.",
        hints: ["x → ∞: e^(−x) → 0", "f(x) → 3×0 + 2 = 2"],
        difficulty: 1,
        tags: ["grenzwert", "exponentialfunktion", "asymptote"],
      },
      {
        question:
          "In einem Semilog-Plot (ln C vs. t) ergibt sich eine Gerade durch die Punkte (0|ln 100) und (10|ln 50). Was ist die Eliminationskonstante k?",
        options: ["k = 0,0693 h⁻¹", "k = 0,5 h⁻¹", "k = ln(2) h⁻¹", "k = 0,1 h⁻¹", "k = 2 h⁻¹"],
        correctIndex: 0,
        explanation:
          "Steigung der Geraden = (ln 50 − ln 100)/(10 − 0) = ln(50/100)/10 = ln(1/2)/10 = −ln(2)/10 = −0,693/10 = −0,0693. Da Steigung = −k, gilt k = 0,0693 h⁻¹. Aus k folgt T½ = ln(2)/k = 0,693/0,0693 = 10 h. Die Konzentration sinkt in 10 h von 100 auf 50 — also in einer Halbwertszeit. Das ist konsistent mit der Ausgangsfrage.",
        hints: [
          "Steigung = (ln 50 − ln 100)/(10 − 0) = ln(0,5)/10",
          "k = −Steigung = ln(2)/10 ≈ 0,0693",
        ],
        difficulty: 2,
        tags: ["semilog", "zerfallskonstante", "pharmakokinetik"],
      },
      {
        question:
          "Welche graphische Darstellung macht eine Kinetik nullter Ordnung (C = C₀ − k₀×t) als Gerade sichtbar?",
        options: [
          "Semilog-Plot (ln C vs. t)",
          "Linearer Plot (C vs. t)",
          "Log-Log-Plot (ln C vs. ln t)",
          "Semilog-Plot (C vs. ln t)",
          "Reziproker Plot (1/C vs. t)",
        ],
        correctIndex: 1,
        explanation:
          "Kinetik nullter Ordnung: C = C₀ − k₀×t ist bereits eine lineare Funktion von t. Im linearen Plot (C vs. t) erscheint sie daher direkt als Gerade mit Steigung −k₀ und Achsenabschnitt C₀. Im Semilog-Plot würde diese Funktion als Kurve erscheinen, nicht als Gerade. Klinisches Beispiel für Kinetik 0. Ordnung: Ethanol — die Leberkapazität zur Oxidation ist gesättigt, und Ethanol wird mit konstanter Rate (ca. 0,1–0,15 g/L/h) abgebaut.",
        hints: [
          "Kinetik 0. Ordnung: C = C₀ − k₀×t ist lineares Gesetz",
          "Linearer Plot: Gerade. Semilog-Plot: Kurve (kein e-Term)",
        ],
        difficulty: 2,
        tags: ["kinetik", "pharmakokinetik", "lineare-funktion"],
      },
      {
        question:
          "Die Michaelis-Menten-Gleichung gibt v = v_max × [S]/(Km + [S]). Bei welcher Substratkonzentration beträgt die Reaktionsgeschwindigkeit genau v_max/4?",
        options: ["[S] = Km/3", "[S] = Km/2", "[S] = Km", "[S] = 2×Km", "nicht lösbar"],
        correctIndex: 0,
        explanation:
          "Gesucht: v = v_max/4. v_max/4 = v_max×[S]/(Km+[S]). Kürzen durch v_max: 1/4 = [S]/(Km+[S]) → Km+[S] = 4[S] → Km = 3[S] → [S] = Km/3. Bei einem Drittel der Km-Konzentration läuft die Reaktion nur mit einem Viertel der Maximalgeschwindigkeit — ein Beleg für die nichtlineare Substratabhängigkeit und die Bedeutung der Substratkonzentration im physiologischen Bereich.",
        hints: ["v_max/4 = v_max×[S]/(Km+[S]) → Km+[S] = 4×[S]", "Km = 3×[S] → [S] = Km/3"],
        difficulty: 3,
        tags: ["michaelis-menten", "enzymkinetik", "algebra"],
      },
      {
        question:
          "Ein Enzym hat Km = 2 mmol/L und v_max = 10 µmol/(L×s). Wie groß ist v bei [S] = 8 mmol/L?",
        options: ["4 µmol/(L×s)", "6 µmol/(L×s)", "8 µmol/(L×s)", "9 µmol/(L×s)", "10 µmol/(L×s)"],
        correctIndex: 2,
        explanation:
          "v = v_max×[S]/(Km+[S]) = 10×8/(2+8) = 80/10 = 8 µmol/(L×s). [S] = 8 mmol/L ist 4-mal größer als Km = 2 mmol/L. Bei [S] = 4×Km gilt: v = v_max×4Km/(Km+4Km) = v_max×4/5 = 0,8×v_max = 8. Man sieht: selbst bei einer 4-fachen Km-Konzentration wird nur 80 % von v_max erreicht — das illustriert die Sättigungskinetik und erklärt, warum hohe Substratkonzentrationen nicht proportional zu höheren Reaktionsraten führen.",
        hints: ["v = 10×8/(2+8) = 80/10", "Bei [S] = 4×Km: v = v_max × 4/5"],
        difficulty: 2,
        tags: ["michaelis-menten", "enzymkinetik", "sättigung"],
      },
      {
        question:
          "Welche Aussage über die horizontale Asymptote von f(x) = (3x² + 1)/(x² − 4) ist korrekt?",
        options: [
          "Keine horizontale Asymptote vorhanden.",
          "Horizontale Asymptote: y = 3.",
          "Horizontale Asymptote: y = 0.",
          "Horizontale Asymptote: y = −4.",
          "Horizontale Asymptote: y = 1/4.",
        ],
        correctIndex: 1,
        explanation:
          "Bei rationalen Funktionen, bei denen Zähler und Nenner denselben Grad haben, ergibt sich die horizontale Asymptote als Quotient der führenden Koeffizienten: lim(x→±∞) (3x²+1)/(x²−4) = 3/1 = 3. Für sehr große x dominieren die x²-Terme, und konstante Terme (+1 und −4) werden vernachlässigbar. Es gilt auch: Für x = 2 und x = −2 sind vertikale Asymptoten vorhanden (Nenner = 0). Rationale Funktionen mit gleich-gradigem Zähler und Nenner streben einer horizontalen Asymptote entgegen.",
        hints: [
          "Gleicher Grad im Zähler und Nenner: Asymptote = Quotient der führenden Koeffizienten",
          "3x²/x² = 3 für x → ±∞",
        ],
        difficulty: 3,
        tags: ["asymptote", "rationale-funktion", "grenzwert"],
      },
    ],
  },
  {
    id: "ma-5-06",
    title: "Folgen und Reihen",
    stichworte: [
      "Arithmetische Folge",
      "Geometrische Folge",
      "Differenz",
      "Quotient",
      "Gauss-Summe",
      "Partialsumme",
      "Zinseszins",
      "Konvergenz",
      "Grenzwert",
      "Geometrische Reihe",
      "Summenformel",
    ],
    content: `## Antibiotikum alle 8 Stunden — wann stabilisiert sich der Blutspiegel?

Ein Patient nimmt alle 8 h ein Antibiotikum mit Halbwertszeit T½ = 8 h. Vor jeder neuen Dosis ist die Hälfte der vorherigen eliminiert, doch ein Rest addiert sich auf: Dosis 1 → 100 %, Dosis 2 → 50 % + 100 % = 150 %, Dosis 3 → 75 % + 100 % = 175 %, ... Der Blutspiegel nähert sich einem **Steady State** — und die Mathematik dahinter ist eine **geometrische Reihe**. Um solche Kumulations-, Verdünnungs- und Wachstumsprobleme im MedAT sicher zu lösen, brauchst du das Werkzeug Folgen und Reihen.

---

## Arithmetische Folgen — gleicher Abstand, lineares Wachstum

Eine Folge (a_n) heißt **arithmetisch**, wenn die Differenz d = a_{n+1} − a_n zwischen aufeinanderfolgenden Gliedern **konstant** ist.

**Formel für das n-te Glied:**

a_n = a₁ + (n − 1) · d

**Durchgerechnetes Beispiel — Dosiseskalation:**
In einer Phase-I-Studie wird die Dosis eines neuen Wirkstoffs wöchentlich um 15 mg gesteigert, Start bei 20 mg.

*Denkprozess:* a₁ = 20, d = 15. Gesucht: Dosis in Woche 8.
a₈ = 20 + (8 − 1) · 15 = 20 + 105 = **125 mg**

**Eigenschaft:** Jedes Glied ist das arithmetische Mittel seiner Nachbarn: a_n = (a_{n−1} + a_{n+1}) / 2.

> **Merke:** Arithmetische Folge = konstante Differenz d = lineares Wachstum. Formel: a_n = a₁ + (n−1)·d. MedAT-Falle: (n) statt (n−1) einsetzen — immer prüfen, ob a₁ korrekt herauskommt.

---

## Arithmetische Reihen — die Gauss-Summe

Die Summe der ersten n Glieder einer arithmetischen Folge lässt sich elegant mit dem **Gauss-Trick** berechnen: Man bildet Paare aus dem ersten und letzten Glied — jedes Paar hat dieselbe Summe.

**S_n = n/2 × (a₁ + a_n)** oder **S_n = n/2 × (2a₁ + (n−1)·d)**

**Durchgerechnetes Beispiel — Kumulative Gesamtdosis:**
In der obigen Dosiseskalation über 8 Wochen: Wie hoch ist die Gesamtdosis?

*Denkprozess:* Wir kennen a₁ = 20, a₈ = 125, n = 8. Gauss-Formel:
S₈ = 8/2 × (20 + 125) = 4 × 145 = **580 mg** Gesamtdosis.

*Kontrolle:* 20 + 35 + 50 + 65 + 80 + 95 + 110 + 125 = 580 ✓

**Spezialfall:** 1 + 2 + 3 + ... + n = n(n+1)/2. Für n = 100: S = 100 × 101/2 = **5050** (der Gauss-Trick aus der Schulzeit).

> **Merke:** Gauss-Summe: S_n = n/2 × (erstes + letztes). Spezialfall: 1+2+...+n = n(n+1)/2. Klinisch relevant: kumulative Gesamtdosis bei linearer Dosiseskalation.

---

## Geometrische Folgen — gleicher Faktor, exponentielles Verhalten

Eine Folge (a_n) heißt **geometrisch**, wenn der Quotient q = a_{n+1}/a_n **konstant** ist. Geometrische Folgen beschreiben Prozesse mit proportionaler Änderung — Bakterienvermehrung, Verdünnungsreihen, Medikamentenabbau.

**Formel für das n-te Glied:**

a_n = a₁ · q^(n−1)

| Szenario | a₁ | q | Verhalten |
|---|---|---|---|
| Bakterien (Verdopplung) | N₀ | 2 | exponentielles Wachstum |
| 1:2-Verdünnungsreihe | C₀ | 0,5 | exponentieller Zerfall |
| Zinseszins (5 %) | K₀ | 1,05 | langsames Wachstum |

**Durchgerechnetes Beispiel — Verdünnungsreihe im Labor:**
Ausgangskonzentration eines Antikörpers: 128 mg/L. Bei einer 1:2-Verdünnungsreihe — welche Konzentration hat Stufe 7?

*Denkprozess:* a₁ = 128, q = 1/2. Stufe 7 bedeutet n = 7.
a₇ = 128 · (1/2)^(7−1) = 128 · (1/2)⁶ = 128/64 = **2 mg/L**

**Partialsumme der ersten n Glieder:**

S_n = a₁ · (q^n − 1) / (q − 1) für q ≠ 1

> **Merke:** Geometrische Folge = konstanter Faktor q. q > 1: Wachstum, 0 < q < 1: Zerfall. Formel: a_n = a₁ · q^(n−1). Jedes Glied ist das geometrische Mittel seiner Nachbarn.

{{DIAGRAM:arithmetic-vs-geometric}}

Oben siehst du den entscheidenden Unterschied: Die arithmetische Folge wächst linear (gerader Anstieg), die geometrische Folge exponentiell (Kurve). Bereits nach wenigen Gliedern übersteigt die geometrische Folge die arithmetische massiv — genau das passiert bei unkontrolliertem Bakterienwachstum.

---

## Konvergenz und Grenzwerte — nähert sich die Folge einem Wert?

Eine Folge **konvergiert** gegen einen Grenzwert L, wenn sich die Glieder für wachsendes n dem Wert L beliebig nähern: lim(n→∞) a_n = L. Andernfalls **divergiert** die Folge.

**Wichtige Fälle:**
- a_n = 1/n → lim = 0 (harmonische Nullfolge)
- a_n = (2n+1)/(n+3) → lim = 2 (höchste Potenzen kürzen: 2n/n = 2)
- a_n = (−1)^n → divergiert (springt zwischen −1 und 1, kein fester Grenzwert)
- a_n = q^n: konvergiert gegen 0 für |q| < 1; divergiert für |q| > 1

**Rechenregeln:** Wenn lim a_n = A und lim b_n = B, dann:
lim(a_n ± b_n) = A ± B, lim(a_n · b_n) = A · B, lim(a_n / b_n) = A/B (falls B ≠ 0).

> **Merke:** Die Frage „Konvergiert das?" ist in der Pharmakokinetik gleichbedeutend mit „Stellt sich ein Steady State ein?". Bedingung: |q| < 1, also wird pro Zyklus weniger nachgeliefert als eliminiert.

---

## Geometrische Reihe — unendliche Summe und Steady State

Die **geometrische Reihe** summiert unendlich viele Glieder einer geometrischen Folge. Für |q| < 1 konvergiert sie zu einem endlichen Wert:

**S = a₁ / (1 − q)**

Für |q| ≥ 1 divergiert die Reihe — die Partialsummen wachsen über alle Grenzen.

**Durchgerechnetes Beispiel — Medikamentenkumulation (Steady State):**
Zurück zum Antibiotikum: Einzeldosis erzeugt Spitzenkonzentration D = 10 mg/L, T½ = 8 h, Dosierungsintervall τ = 8 h. Vor jeder neuen Dosis verbleibt Restfaktor q = (1/2)^(τ/T½) = 1/2.

*Denkprozess:* Die Spitzenkonzentration nach Dosis n ist:
C_n = D + D·q + D·q² + ... + D·q^(n−1) = D · (1 − q^n)/(1 − q)

Für n → ∞ (Steady State): C_ss = D / (1 − q) = 10 / (1 − 0,5) = **20 mg/L**

Das heißt: Die Spitzenkonzentration im Steady State ist genau **doppelt so hoch** wie nach einer Einzeldosis. Die Talspiegel liegen bei 20 · 0,5 = 10 mg/L.

*Prüfung:* Nach Dosis 5: C₅ = 10 · (1−0,5⁵)/(1−0,5) = 10 · 0,96875/0,5 = **19,375 mg/L** — bereits 97 % des Steady State. Das bestätigt die **4–5-Halbwertszeiten-Regel**.

{{DIAGRAM:series-convergence}}

Das Diagramm zeigt, wie die Partialsummen sich dem Grenzwert annähern: Schnell am Anfang, dann immer langsamer — genau wie der Blutspiegel bei wiederholter Dosierung.

> **Merke:** Geometrische Reihe: S = a₁/(1−q) nur für |q| < 1. Klinische Bedeutung: C_ss = D/(1−q) beschreibt den Steady State. Nach 4–5 Halbwertszeiten sind ~94–97 % erreicht.

---

## Medizinische Anwendungen im Überblick

| Anwendung | Folgentyp | Schlüsselformel |
|---|---|---|
| Dosiseskalation (Phase-I) | arithmetisch | a_n = a₁ + (n−1)·d |
| Bakterienwachstum (Log-Phase) | geometrisch, q = 2 | N = N₀ · 2^(t/T_d) |
| Verdünnungsreihe (1:10) | geometrisch, q = 0,1 | a_n = C₀ · 0,1^(n−1) |
| Medikamentenkumulation | geometrische Reihe | C_ss = D/(1−q) |
| MIC-Bestimmung (Titer) | geometrisch, q = 1/2 | Konzentrationsstufen halbieren sich |

**Durchgerechnetes Beispiel — Bakterienwachstum:**
Eine Bakterienkultur startet mit N₀ = 500 Zellen, Verdopplungszeit T_d = 30 min. Wie viele Bakterien nach 5 h?

*Denkprozess:* 5 h = 300 min. Verdopplungen: n = 300/30 = 10. Geometrische Folge mit q = 2:
N = 500 · 2¹⁰ = 500 · 1024 = **512 000 Bakterien**

---

## Rechenbeispiele mit Denkprozess

**Beispiel 1 — Gauss-Summe:**
Berechne 5 + 10 + 15 + ... + 200.

*Denkprozess:* Arithmetische Folge mit a₁ = 5, d = 5, a_n = 200. Wie viele Glieder?
n = (a_n − a₁)/d + 1 = (200 − 5)/5 + 1 = 39 + 1 = 40.
S₄₀ = 40/2 × (5 + 200) = 20 × 205 = **4100**

**Beispiel 2 — Geometrische Reihe:**
Ein Analgetikum wird alle 6 h gegeben. T½ = 6 h. Einzeldosis-Spitze: 8 mg/L. Steady-State-Spitze?

*Denkprozess:* q = (1/2)^(6/6) = 1/2. Geometrische Reihe:
C_ss = 8 / (1 − 0,5) = 8/0,5 = **16 mg/L**
Kumulation: Faktor 16/8 = 2 — bei τ = T½ verdoppelt sich der Spitzenspiegel im Steady State immer.

**Beispiel 3 — Verdünnungsreihe:**
Antikörper-Titer: Ausgangskonzentration 1:1, sechs 1:2-Verdünnungsschritte. Letzter Titer mit positivem Nachweis?

*Denkprozess:* Titer-Stufen: 1:1, 1:2, 1:4, 1:8, 1:16, 1:32, 1:64. Das ist eine geometrische Folge mit q = 1/2 und 7 Stufen (n = 1 bis 7). Stufe 7: Verdünnung = 1/2⁶ = **1:64**.`,
    lernziele: [
      "Das n-te Glied arithmetischer und geometrischer Folgen berechnen.",
      "Die Gauss-Summe und die geometrische Partialsumme anwenden.",
      "Zinseszinsaufgaben als geometrische Folge modellieren und berechnen.",
      "Konvergenz einer Folge/Reihe beurteilen und den Grenzwert der geometrischen Reihe bestimmen.",
      "Folgen und Reihen auf medizinische Kontexte (Verdünnungsreihe, Bakterienwachstum, Kumulation) übertragen.",
    ],
    sections: [
      {
        heading: "Arithmetische Folgen und Gauss-Summe",
        text: "Eine arithmetische Folge hat eine konstante Differenz d. Das n-te Glied ist a_n = a₁ + (n−1)·d. Die Summe der ersten n Glieder beträgt S_n = n/2 × (a₁ + a_n). Der Spezialfall 1+2+...+n = n(n+1)/2 heißt Gauss-Summe. In der Medizin begegnet man arithmetischen Folgen bei linearer Dosiseskalation.",
        merksatz:
          "Arithmetische Folge: a_n = a₁ + (n−1)·d. Gauss-Summe: S_n = n/2 × (a₁ + a_n). 1+2+...+n = n(n+1)/2.",
      },
      {
        heading: "Geometrische Folgen und Zinseszins",
        text: "Eine geometrische Folge hat einen konstanten Quotienten q. Das n-te Glied ist a_n = a₁ × q^(n−1). Die Partialsumme ist S_n = a₁(q^n−1)/(q−1). Zinseszins: K_n = K₀(1+p/100)^n. Verdopplungszeit ≈ 72/p (72er-Regel). Bakterienwachstum und Medikamentenkumulation folgen geometrischen Folgen.",
        merksatz:
          "Geometrische Folge: a_n = a₁ × q^(n−1). Zinseszins: K_n = K₀(1+p/100)^n. 72er-Regel: T_doppel ≈ 72/p.",
      },
      {
        heading: "Konvergenz und geometrische Reihe",
        text: "Eine Folge konvergiert, wenn ihre Glieder sich einem Grenzwert nähern. Die geometrische Reihe konvergiert für |q| < 1 gegen S = a₁/(1−q). Für |q| ≥ 1 divergiert sie. In der Pharmakokinetik beschreibt die geometrische Reihe die Kumulation bei wiederholter Medikamentengabe bis zum Steady State.",
        merksatz:
          "Geometrische Reihe: S = a₁/(1−q) für |q| < 1. Divergenz für |q| ≥ 1. Kumulation = geometrische Reihe.",
      },
    ],
    merksätze: [
      "Arithmetische Folge: a_n = a₁ + (n−1)·d. Konstante Differenz, lineares Wachstum.",
      "Gauss-Summe: S_n = n/2 × (a₁ + a_n). Spezialfall: 1+2+...+n = n(n+1)/2 = 5050 für n=100.",
      "Geometrische Folge: a_n = a₁ × q^(n−1). Konstanter Quotient, exponentielles Wachstum.",
      "Geometrische Partialsumme: S_n = a₁(q^n − 1)/(q − 1).",
      "Zinseszins: K_n = K₀ × (1+p/100)^n. Verdopplungszeit ≈ 72/p (72er-Regel).",
      "Geometrische Reihe konvergiert für |q| < 1: S = a₁/(1−q).",
      "Konvergenz: lim a_n existiert → Folge konvergent. |q| < 1 → q^n → 0.",
    ],
    altfrage: {
      question:
        "Ein Sparbuch enthält 2000 Euro bei 3 % Jahreszinsen (Zinseszins). Wie viel Euro sind nach 20 Jahren auf dem Konto?",
      answer:
        "K₂₀ = 2000 × 1,03²⁰. 1,03²⁰ ≈ 1,8061. K₂₀ ≈ 2000 × 1,8061 = 3612,22 Euro. Der Zinseszinseffekt macht ca. 412 Euro aus (vs. einfacher Zins: 2000 + 20×60 = 3200 Euro).",
    },
    klinischerBezug:
      "Geometrische Folgen beschreiben das exponentielle Wachstum von Bakterienkulturen in der Log-Phase (Verdopplungszeit = konstant). In der Pharmakokinetik modelliert die geometrische Reihe die Medikamentenkumulation bei wiederholter Gabe: Nach 4–5 Halbwertszeiten ist der Steady State erreicht (ca. 94–97 % des Endniveaus). Verdünnungsreihen im Labor (1:2, 1:10) sind geometrische Folgen mit q = 1/2 bzw. q = 1/10 — sie bestimmen Titer (z. B. Antikörper-Titer) und MIC (minimale Hemmkonzentration).",
    selfTest: [
      {
        question: "Was ist das 15. Glied der arithmetischen Folge mit a₁ = 7 und d = 4?",
        options: ["63", "56", "67", "60", "53"],
        correctIndex: 0,
        explanation:
          "a₁₅ = a₁ + (n−1)·d = 7 + 14×4 = 7 + 56 = 63. Die Formel lautet a_n = a₁ + (n−1)·d. Häufiger Fehler: (n) statt (n−1) verwenden → 7 + 15×4 = 67 (falsch).",
        hints: ["a_n = a₁ + (n−1)·d", "n−1 = 14, also 7 + 14×4"],
        difficulty: 1,
        tags: ["arithmetische-folge", "n-tes-glied"],
      },
      {
        question: "Wie lautet die Summe 1 + 2 + 3 + ... + 50?",
        options: ["1250", "1275", "1225", "1300", "2550"],
        correctIndex: 1,
        explanation:
          "Gauss-Summe: S = n(n+1)/2 = 50×51/2 = 2550/2 = 1275. Alternativ: S₅₀ = 50/2 × (1+50) = 25 × 51 = 1275. Der Gauss-Trick: 50 Paare zu je 51 wären 2550 — aber nur 25 Paare (nicht 50!), denn jede Zahl kommt nur einmal vor.",
        hints: ["S = n(n+1)/2", "50 × 51 / 2 = ?"],
        difficulty: 1,
        tags: ["gauss-summe", "arithmetische-reihe"],
      },
      {
        question:
          "Ein Kapital von 5000 Euro wird zu 6 % p.a. mit Zinseszins angelegt. Wie hoch ist das Kapital nach 12 Jahren (auf ganze Euro gerundet)?",
        options: ["8600 €", "10 061 €", "9500 €", "11 000 €", "8800 €"],
        correctIndex: 1,
        explanation:
          "K₁₂ = 5000 × 1,06¹² = 5000 × 2,0122 ≈ 10 061 €. Ohne Zinseszins wären es nur 5000 + 12×300 = 8600 € (Option A). Der Zinseszinseffekt beträgt 10 061 − 8600 = 1461 €. 1,06¹² kann man über 72er-Regel abschätzen: Verdopplung nach ca. 72/6 = 12 Jahren → K ≈ 10 000 € (gute Näherung!).",
        hints: [
          "K_n = K₀ × (1+p/100)^n = 5000 × 1,06¹²",
          "72er-Regel: 72/6 = 12 → Verdopplung nach 12 Jahren",
        ],
        difficulty: 2,
        tags: ["zinseszins", "geometrische-folge", "72er-regel"],
      },
      {
        question: "Welchen Wert hat die unendliche geometrische Reihe 4 + 2 + 1 + 1/2 + 1/4 + ...?",
        options: ["6", "7", "8", "10", "Die Reihe divergiert"],
        correctIndex: 2,
        explanation:
          "Geometrische Reihe mit a₁ = 4, q = 1/2. Da |q| = 1/2 < 1, konvergiert die Reihe. S = a₁/(1−q) = 4/(1−1/2) = 4/0,5 = 8. Probe: 4+2+1+0,5+0,25+... nähert sich tatsächlich 8 an. Bei |q| ≥ 1 würde die Reihe divergieren.",
        hints: ["q = 2/4 = 1/2; |q| < 1 → konvergent", "S = a₁/(1−q) = 4/(1−0,5)"],
        difficulty: 2,
        tags: ["geometrische-reihe", "konvergenz", "grenzwert"],
      },
      {
        question:
          "Eine Bakterienkultur startet mit 200 Bakterien und verdoppelt sich alle 40 Minuten. Wie viele Bakterien sind nach 4 Stunden vorhanden?",
        options: ["12 800", "25 600", "51 200", "6400", "102 400"],
        correctIndex: 0,
        explanation:
          "4 Stunden = 240 Minuten. Anzahl Verdopplungen: 240/40 = 6. N = 200 × 2⁶ = 200 × 64 = 12 800. Das ist eine geometrische Folge mit a₁ = 200, q = 2. Häufiger Fehler: 240/40 = 6, aber dann 2⁷ statt 2⁶ verwenden (n−1 vs. n Verdopplungen).",
        hints: ["240 min / 40 min = 6 Verdopplungen", "N = 200 × 2⁶ = 200 × 64"],
        difficulty: 2,
        tags: ["geometrische-folge", "bakterienwachstum", "verdopplung"],
      },
      {
        question:
          "Für welche Werte von q konvergiert die geometrische Reihe Σ a₁ × q^n (n = 0, 1, 2, ...)?",
        options: ["q < 1", "|q| < 1", "q > 0", "0 < q < 1", "|q| ≤ 1"],
        correctIndex: 1,
        explanation:
          "Die geometrische Reihe konvergiert genau dann, wenn |q| < 1, also −1 < q < 1. Auch negative Werte von q sind erlaubt (z. B. q = −0,5: alternierende Reihe, konvergiert). Für q = −1 springt die Folge und die Partialsummen konvergieren nicht. Für |q| = 1 divergiert die Reihe (konstante oder alternierende Terme).",
        hints: [
          "Auch negative q sind möglich — entscheidend ist der Betrag",
          "|q| < 1 bedeutet −1 < q < 1",
        ],
        difficulty: 3,
        tags: ["konvergenz", "geometrische-reihe", "betrag"],
      },
    ],
  },
];
