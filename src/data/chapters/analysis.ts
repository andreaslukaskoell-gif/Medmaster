import type { Chapter } from "./types";

export const analysisChapter: Chapter = {
  id: "analysis",
  subject: "mathematik",
  title: "Funktionen & Analysis",
  subtitle: "Funktionstypen, Trigonometrie, Ableitungen & Integrale",
  icon: "📈",
  chapterNumber: "Kapitel 2/3",
  readingTime: "~45 Minuten",
  level: "Kernstoff",
  frequency: "Häufig geprüft",
  overview:
    "Dieses Kapitel behandelt die zentralen Themen der Analysis, die für den MedAT essenziell sind: von den grundlegenden Funktionstypen über die Trigonometrie bis hin zur Differential- und Integralrechnung. Ein sicherer Umgang mit Ableitungsregeln, Extremwertbestimmung und Grundintegralen wird im MedAT regelmäßig geprüft. Besonderer Fokus liegt auf der Potenzregel, der Exponentialfunktion eˣ und der Anwendung trigonometrischer Funktionen — diese Konzepte tauchen in den Aufgaben besonders häufig auf.",

  learningObjectives: [
    "Funktionstypen erkennen und ihre Eigenschaften beschreiben",
    "Trigonometrische Funktionen im rechtwinkligen Dreieck anwenden",
    "Ableitungsregeln sicher anwenden",
    "Extremstellen und Wendepunkte berechnen",
    "Grundintegrale bestimmen und Flächen berechnen",
  ],

  sections: [
    // ----------------------------------------------------------------
    // SECTION 1: Funktionstypen
    // ----------------------------------------------------------------
    {
      heading: "Funktionstypen",
      content: `Eine Funktion ordnet jedem Element x aus dem Definitionsbereich genau einen Funktionswert f(x) zu. Für den MedAT sind vier Funktionstypen besonders relevant:

<strong>1. Lineare Funktion: f(x) = kx + d</strong>
Die lineare Funktion beschreibt eine Gerade im Koordinatensystem.
• <strong>k = Steigung</strong> (auch Anstieg genannt): gibt an, um wie viel y zunimmt, wenn x um 1 steigt. Positives k → Gerade steigt, negatives k → Gerade fällt, k = 0 → horizontale Gerade.
• <strong>d = y-Achsenabschnitt</strong>: der Punkt, an dem die Gerade die y-Achse schneidet, also f(0) = d.
• <strong>Nullstelle</strong>: f(x) = 0 setzen → x₀ = -d/k (sofern k ≠ 0).
• Zwei Punkte bestimmen eine Gerade eindeutig. Die Steigung berechnet sich als k = (y₂ - y₁) / (x₂ - x₁).

<strong>2. Quadratische Funktion: f(x) = ax² + bx + c</strong>
Der Graph einer quadratischen Funktion ist eine <strong>Parabel</strong>.
• a > 0 → nach oben geöffnet (Minimum), a < 0 → nach unten geöffnet (Maximum).
• <strong>Scheitelpunkt</strong> (Vertex): x_s = -b/(2a), y_s = f(x_s). Die Scheitelpunktform lautet: f(x) = a(x - x_s)² + y_s.
• <strong>Nullstellen</strong> über die Lösungsformel (Mitternachtsformel): x₁,₂ = (-b ± √(b² - 4ac)) / (2a).
• Die <strong>Diskriminante</strong> D = b² - 4ac bestimmt die Anzahl der Nullstellen: D > 0 → zwei Nullstellen, D = 0 → eine (doppelte) Nullstelle, D < 0 → keine reelle Nullstelle.

<strong>3. Exponentialfunktion: f(x) = a · bˣ</strong>
Die Exponentialfunktion beschreibt Wachstums- und Zerfallsprozesse.
• a = Anfangswert (f(0) = a), b = Wachstumsfaktor (Basis).
• <strong>b > 1</strong>: exponentielles Wachstum (z. B. Bakterienvermehrung, Zinseszins).
• <strong>0 < b < 1</strong>: exponentieller Zerfall (z. B. radioaktiver Zerfall, Medikamentenabbau).
• Die <strong>natürliche Exponentialfunktion f(x) = eˣ</strong> (Euler'sche Zahl e ≈ 2,718) hat eine besondere Eigenschaft: Sie ist ihre eigene Ableitung, d. h. (eˣ)' = eˣ.
• Für alle Exponentialfunktionen gilt: f(x) > 0 für alle x ∈ ℝ (die x-Achse ist Asymptote, wird aber nie erreicht).

<strong>4. Logarithmusfunktion: f(x) = log_b(x)</strong>
Der Logarithmus ist die <strong>Umkehrfunktion</strong> der Exponentialfunktion: Wenn bʸ = x, dann y = log_b(x).
• <strong>Natürlicher Logarithmus</strong>: ln(x) = log_e(x) — Umkehrfunktion von eˣ.
• <strong>Dekadischer Logarithmus</strong>: lg(x) = log₁₀(x) — Umkehrfunktion von 10ˣ (relevant für pH-Berechnung!).
• Wichtige Rechenregeln: log(a·b) = log(a) + log(b), log(a/b) = log(a) - log(b), log(aⁿ) = n·log(a).
• Der Logarithmus ist nur für <strong>positive Argumente</strong> definiert: log_b(x) existiert nur für x > 0.

<strong>Definitionsbereich bestimmen</strong>
Der Definitionsbereich D gibt an, für welche x-Werte die Funktion definiert ist. Einschränkungen ergeben sich aus:
• <strong>Nenner ≠ 0</strong>: Bei Brüchen darf der Nenner nicht null werden.
• <strong>Radikand ≥ 0</strong>: Unter einer Quadratwurzel (geraden Wurzel) muss der Ausdruck ≥ 0 sein.
• <strong>Logarithmus-Argument > 0</strong>: Das Argument eines Logarithmus muss strikt positiv sein.
Beispiel: f(x) = ln(x - 2) → Definitionsbereich D = {x ∈ ℝ | x > 2} = (2, ∞).`,
      diagram: "coordinate-system",
      vergleichsTabelle: {
        headers: ["Funktion", "Form", "Graph", "Besonderheit"],
        rows: [
          ["Linear", "f(x) = kx + d", "Gerade", "Konstante Steigung k"],
          ["Quadratisch", "f(x) = ax² + bx + c", "Parabel", "Scheitelpunkt bei x_s = -b/(2a)"],
          [
            "Exponential",
            "f(x) = a · bˣ",
            "Exponentialkurve",
            "b > 1: Wachstum, 0 < b < 1: Zerfall",
          ],
          [
            "Logarithmus",
            "f(x) = log_b(x)",
            "Logarithmuskurve",
            "Umkehrfunktion der Exponentialfunktion",
          ],
        ],
      },
      merke:
        "Exponentialfunktion eˣ ist ihre <strong>eigene Ableitung</strong>! Exponentielles Wachstum/Zerfall beschreibt viele biologische Prozesse: Bakterienwachstum, Pharmakokinetik, radioaktiver Zerfall.",
    },

    // ----------------------------------------------------------------
    // SECTION 2: Trigonometrie
    // ----------------------------------------------------------------
    {
      heading: "Trigonometrie",
      content: `Die Trigonometrie beschäftigt sich mit den Beziehungen zwischen Winkeln und Seiten in Dreiecken. Sie ist für den MedAT ein regelmäßig geprüftes Thema.

<strong>Trigonometrische Funktionen im rechtwinkligen Dreieck</strong>
In einem rechtwinkligen Dreieck mit dem rechten Winkel bei C und den Katheten a (Gegenkathete von α) und b (Ankathete von α) sowie der Hypotenuse c gilt:

• <strong>sin(α) = Gegenkathete / Hypotenuse</strong> = a / c
• <strong>cos(α) = Ankathete / Hypotenuse</strong> = b / c
• <strong>tan(α) = Gegenkathete / Ankathete</strong> = a / b = sin(α) / cos(α)

Merkspruch: <strong>SOH-CAH-TOA</strong>
• <strong>S</strong>in = <strong>O</strong>pposite / <strong>H</strong>ypotenuse
• <strong>C</strong>os = <strong>A</strong>djacent / <strong>H</strong>ypotenuse
• <strong>T</strong>an = <strong>O</strong>pposite / <strong>A</strong>djacent

<strong>Wichtige Funktionswerte (auswendig lernen!)</strong>
Die folgenden Werte werden im MedAT häufig abgefragt:
• sin(0°) = 0, cos(0°) = 1, tan(0°) = 0
• sin(30°) = 0,5 = 1/2, cos(30°) = √3/2, tan(30°) = 1/√3 = √3/3
• sin(45°) = √2/2 ≈ 0,707, cos(45°) = √2/2, tan(45°) = 1
• sin(60°) = √3/2 ≈ 0,866, cos(60°) = 0,5, tan(60°) = √3
• sin(90°) = 1, cos(90°) = 0, tan(90°) = nicht definiert (Division durch 0)

Merkregel für sin-Werte: sin(0°) = √0/2 = 0, sin(30°) = √1/2, sin(45°) = √2/2, sin(60°) = √3/2, sin(90°) = √4/2 = 1 — die Zähler unter der Wurzel sind 0, 1, 2, 3, 4!

<strong>Der Einheitskreis</strong>
Der Einheitskreis hat den Radius r = 1 und seinen Mittelpunkt im Ursprung. Ein Punkt P auf dem Einheitskreis hat die Koordinaten P = (cos(α), sin(α)). Daraus folgt die fundamentale trigonometrische Identität:

<strong>sin²(α) + cos²(α) = 1</strong> — gilt für ALLE Winkel α!

Aus dem Einheitskreis lassen sich die Vorzeichen der trigonometrischen Funktionen in den vier Quadranten ablesen:
• Quadrant I (0°–90°): sin +, cos +, tan +
• Quadrant II (90°–180°): sin +, cos -, tan -
• Quadrant III (180°–270°): sin -, cos -, tan +
• Quadrant IV (270°–360°): sin -, cos +, tan -

<strong>Sinussatz und Kosinussatz</strong>
Für <strong>beliebige</strong> Dreiecke (nicht nur rechtwinklige!) gelten:

<strong>Sinussatz:</strong> a / sin(A) = b / sin(B) = c / sin(C)
→ Anwendung: wenn zwei Winkel und eine Seite oder zwei Seiten und ein gegenüberliegender Winkel bekannt sind.

<strong>Kosinussatz:</strong> c² = a² + b² - 2ab · cos(C)
→ Verallgemeinerung des Satzes von Pythagoras! Für C = 90° wird cos(90°) = 0, und es bleibt c² = a² + b² übrig.
→ Anwendung: wenn zwei Seiten und der eingeschlossene Winkel oder alle drei Seiten bekannt sind.

<strong>Bogenmaß (Radiant)</strong>
Winkel können in Grad (°) oder im Bogenmaß (rad) angegeben werden. Die Umrechnung:
• α_rad = α° × π / 180
• α° = α_rad × 180 / π

Wichtige Zuordnungen:
• 360° = 2π rad (Vollkreis)
• 180° = π rad (Halbkreis)
• 90° = π/2 rad (rechter Winkel)
• 60° = π/3 rad, 45° = π/4 rad, 30° = π/6 rad

In der Analysis (Ableitungen, Integrale) wird <strong>immer im Bogenmaß</strong> gerechnet — die Ableitungsregeln (sin x)' = cos x und (cos x)' = -sin x gelten nur im Bogenmaß!`,
      diagram: "unit-circle",
      vergleichsTabelle: {
        headers: ["Winkel", "sin", "cos", "tan"],
        rows: [
          ["0°", "0", "1", "0"],
          ["30°", "1/2", "√3/2", "√3/3"],
          ["45°", "√2/2", "√2/2", "1"],
          ["60°", "√3/2", "1/2", "√3"],
          ["90°", "1", "0", "n. d."],
        ],
      },
      merke:
        "<strong>SOH-CAH-TOA</strong>: Sin = Opposite/Hypotenuse, Cos = Adjacent/Hypotenuse, Tan = Opposite/Adjacent. <strong>sin²(α) + cos²(α) = 1</strong> gilt IMMER! Kosinussatz verallgemeinert Pythagoras.",
    },

    // ----------------------------------------------------------------
    // SECTION 3: Differentialrechnung
    // ----------------------------------------------------------------
    {
      heading: "Differentialrechnung",
      content: `Die Differentialrechnung untersucht die <strong>momentane Änderungsrate</strong> von Funktionen. Die Ableitung f'(x) gibt die Steigung der Tangente an der Stelle x an.

<strong>Definition der Ableitung</strong>
f'(x) = lim(h→0) [f(x+h) - f(x)] / h

Anschaulich: Die Ableitung ist der Grenzwert des Differenzenquotienten (Sekantensteigung) für h → 0. Sie gibt die momentane Änderungsrate der Funktion an — im Gegensatz zur durchschnittlichen Änderungsrate (Sekantensteigung) über ein Intervall.

<strong>Ableitungsregeln</strong>

<strong>1. Potenzregel</strong> — die wichtigste Regel für den MedAT:
(xⁿ)' = n · xⁿ⁻¹
Exponent wird zum Faktor, dann Exponent um 1 verringern.
• Beispiel: (x⁵)' = 5x⁴, (x²)' = 2x, (x¹)' = 1, (x⁰)' = 0 (Konstante!)
• Auch für negative und rationale Exponenten: (x⁻¹)' = -x⁻² = -1/x², (√x)' = (x^(1/2))' = 1/(2√x)

<strong>2. Konstantenregel:</strong>
(c · f)' = c · f' — ein konstanter Faktor bleibt beim Ableiten erhalten.
• Beispiel: (5x³)' = 5 · 3x² = 15x²

<strong>3. Summenregel:</strong>
(f + g)' = f' + g' — Summen werden gliedweise abgeleitet.
• Beispiel: (x³ + 2x)' = 3x² + 2

<strong>4. Produktregel:</strong>
(f · g)' = f' · g + f · g'
• Beispiel: (x² · eˣ)' = 2x · eˣ + x² · eˣ = eˣ(2x + x²)

<strong>5. Quotientenregel:</strong>
(f / g)' = (f' · g - f · g') / g²
• Beispiel: (x / sin x)' = (1 · sin x - x · cos x) / sin²x

<strong>6. Kettenregel:</strong>
[f(g(x))]' = f'(g(x)) · g'(x) — äußere Ableitung mal innere Ableitung.
• Beispiel: (e^(3x))' = e^(3x) · 3 = 3e^(3x) (äußere: eˣ → eˣ, innere: 3x → 3)
• Beispiel: (sin(x²))' = cos(x²) · 2x

<strong>Spezielle Ableitungen (auswendig lernen!)</strong>
• (eˣ)' = eˣ — die einzige Funktion, die ihre eigene Ableitung ist!
• (ln x)' = 1/x
• (sin x)' = cos x
• (cos x)' = -sin x (Achtung: Minus!)
• (tan x)' = 1/cos²x = 1 + tan²x
• (aˣ)' = aˣ · ln(a) — allgemeine Exponentialfunktion

<strong>Kurvendiskussion: Extremstellen und Wendepunkte</strong>

<strong>Extremstellen (Maxima und Minima):</strong>
1. <strong>Notwendige Bedingung:</strong> f'(x) = 0 setzen → Kandidaten für Extremstellen.
2. <strong>Hinreichende Bedingung:</strong> Zweite Ableitung auswerten:
   • f''(x) > 0 → <strong>Minimum</strong> (Linkskrümmung, „Tal“)
   • f''(x) < 0 → <strong>Maximum</strong> (Rechtskrümmung, „Berg“)
   • f''(x) = 0 → keine Aussage, weitere Untersuchung nötig (z. B. Vorzeichenwechsel von f')

<strong>Wendepunkte (Krümmungswechsel):</strong>
1. <strong>Notwendige Bedingung:</strong> f''(x) = 0 setzen → Kandidaten für Wendepunkte.
2. <strong>Hinreichende Bedingung:</strong> f'''(x) ≠ 0 → Wendepunkt bestätigt.
   Ein Wendepunkt mit f'(x) = 0 heißt <strong>Sattelpunkt</strong> (Terrassenpunkt).

<strong>Monotonie und Krümmung:</strong>
• f'(x) > 0 → f ist streng monoton steigend
• f'(x) < 0 → f ist streng monoton fallend
• f''(x) > 0 → f ist linksgekrümmt (konvex, „Tal“)
• f''(x) < 0 → f ist rechtsgekrümmt (konkav, „Berg“)`,
      merke:
        "Extremstellen: <strong>f'(x) = 0</strong> setzen. Minimum wenn f''(x) > 0, Maximum wenn f''(x) < 0. <strong>(eˣ)' = eˣ</strong> — die einzige Funktion, die ihre eigene Ableitung ist!",
      altfrage:
        '"Was ist die Ableitung von f(x) = 3x⁴?" → f\'(x) = 4·3·x³ = <strong>12x³</strong> (Potenzregel: Exponent runter, Exponent minus 1).',
    },

    // ----------------------------------------------------------------
    // SECTION 4: Integralrechnung
    // ----------------------------------------------------------------
    {
      heading: "Integralrechnung",
      content: `Die Integralrechnung ist die <strong>Umkehrung der Differentialrechnung</strong>. Statt die Änderungsrate zu bestimmen, wird die Fläche unter einer Kurve berechnet.

<strong>Stammfunktion (unbestimmtes Integral)</strong>
Eine Funktion F(x) heißt <strong>Stammfunktion</strong> von f(x), wenn gilt: F'(x) = f(x).
• Zu jeder Funktion f(x) gibt es unendlich viele Stammfunktionen, die sich um eine Konstante C unterscheiden: ∫f(x)dx = F(x) + C.
• Diese Konstante C heißt <strong>Integrationskonstante</strong> und wird beim bestimmten Integral weggelassen.

<strong>Grundintegrale (auswendig lernen!)</strong>

• ∫xⁿ dx = xⁿ⁺¹ / (n+1) + C — für n ≠ -1 (Potenzregel rückwärts: Exponent plus 1, dann durch neuen Exponenten teilen)
• ∫x⁻¹ dx = ∫(1/x) dx = ln|x| + C — der Spezialfall n = -1! (nicht x⁰/0, das wäre Division durch 0)
• ∫eˣ dx = eˣ + C — eˣ ist auch seine eigene Stammfunktion
• ∫sin(x) dx = -cos(x) + C (Achtung: Minus!)
• ∫cos(x) dx = sin(x) + C
• ∫(1/cos²x) dx = tan(x) + C

<strong>Rechenregeln für Integrale</strong>
• <strong>Konstantenregel:</strong> ∫c · f(x) dx = c · ∫f(x) dx — Konstanten dürfen vor das Integral gezogen werden.
• <strong>Summenregel:</strong> ∫[f(x) + g(x)] dx = ∫f(x) dx + ∫g(x) dx — gliedweise Integration.
• <strong>Lineare Substitution:</strong> ∫f(ax + b) dx = (1/a) · F(ax + b) + C — z. B. ∫e^(3x) dx = (1/3)e^(3x) + C.

<strong>Bestimmtes Integral und der Hauptsatz der Analysis</strong>
Das bestimmte Integral berechnet die <strong>Fläche unter der Kurve</strong> im Intervall [a, b]:

∫ₐᵇ f(x) dx = F(b) - F(a) = [F(x)]ₐᵇ

Dabei wird die Stammfunktion F(x) an der oberen Grenze b ausgewertet und der Wert an der unteren Grenze a subtrahiert.

Beispiel: ∫₁³ x² dx = [x³/3]₁³ = 3³/3 - 1³/3 = 27/3 - 1/3 = 26/3 ≈ 8,67

<strong>Achtung: Vorzeichen und Fläche</strong>
• Das bestimmte Integral kann <strong>negativ</strong> werden, wenn f(x) < 0 im Intervall liegt (Fläche unterhalb der x-Achse wird negativ gezählt).
• Für die <strong>tatsächliche Fläche</strong> (immer positiv) muss man den Betrag nehmen: A = ∫ₐᵇ |f(x)| dx. In der Praxis: Nullstellen bestimmen und das Integral in Teilintervalle aufteilen.

<strong>Fläche zwischen zwei Kurven</strong>
Die Fläche zwischen den Kurven f(x) und g(x) im Intervall [a, b] berechnet sich als:
A = ∫ₐᵇ |f(x) - g(x)| dx

Vorgehen: 1. Schnittpunkte von f und g bestimmen (f(x) = g(x) lösen). 2. In jedem Teilintervall prüfen, welche Funktion oben liegt. 3. Teilflächen berechnen und addieren.

<strong>Zusammenhang Ableitung und Integral</strong>
Der <strong>Hauptsatz der Differential- und Integralrechnung</strong> besagt:
• Ableitung der Stammfunktion gibt die Ausgangsfunktion: (∫f(x)dx)' = f(x)
• Integration der Ableitung gibt die Ausgangsfunktion (bis auf Konstante): ∫f'(x)dx = f(x) + C

Ableitung und Integration sind also <strong>züinander inverse Operationen</strong>.`,
      merke:
        "Integration ist die <strong>Umkehrung</strong> der Ableitung. Stammfunktion von xⁿ ist <strong>xⁿ⁺¹/(n+1)</strong>. ACHTUNG: Bei x⁻¹ = 1/x ist die Stammfunktion <strong>ln|x|</strong> (nicht x⁰/0!).",
    },
  ],

  keyFacts: [
    {
      label: "Scheitelpunkt Parabel",
      value: "x_s = -b/(2a)",
    },
    {
      label: "Trigonometrische Identität",
      value: "sin²(α) + cos²(α) = 1",
    },
    {
      label: "SOH-CAH-TOA",
      value: "Sin = Opposite/Hypotenuse, Cos = Adjacent/Hypotenuse, Tan = Opposite/Adjacent",
    },
    {
      label: "Potenzregel",
      value: "(xⁿ)' = n · xⁿ⁻¹",
    },
    {
      label: "Ableitung eˣ",
      value: "(eˣ)' = eˣ",
    },
    {
      label: "Ableitung ln x",
      value: "(ln x)' = 1/x",
    },
    {
      label: "Ableitungen sin/cos",
      value: "(sin x)' = cos x, (cos x)' = -sin x",
    },
    {
      label: "Extremstellen",
      value: "f'(x) = 0, Min: f'' > 0, Max: f'' < 0",
    },
    {
      label: "Stammfunktion xⁿ",
      value: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C",
    },
    {
      label: "Bestimmtes Integral",
      value: "Fläche = F(b) - F(a)",
    },
  ],

  selfTestQuestions: [
    {
      question: "Was ist die Ableitung von f(x) = x³?",
      options: ["x²", "3x²", "3x³", "x⁴/4", "1/3·x²"],
      correctIndex: 1,
      explanation: "Potenzregel: (xⁿ)' = n · xⁿ⁻¹. Also (x³)' = 3x².",
    },
    {
      question: "sin(30°) = ?",
      options: ["0", "0,5", "√2/2", "√3/2", "1"],
      correctIndex: 1,
      explanation:
        "sin(30°) = 0,5 = 1/2. Weitere wichtige Werte: sin(45°) = √2/2 ≈ 0,71, sin(60°) = √3/2 ≈ 0,87.",
    },
    {
      question: "Wann hat f(x) ein Maximum?",
      options: [
        "f'(x) > 0",
        "f'(x) = 0 und f''(x) > 0",
        "f'(x) = 0 und f''(x) < 0",
        "f''(x) = 0",
        "f(x) = 0",
      ],
      correctIndex: 2,
      explanation:
        "Maximum: f'(x) = 0 (notwendig) und f''(x) < 0 (hinreichend: Rechtskrümmung). Bei f'' > 0 wäre es ein Minimum.",
    },
    {
      question: "∫eˣ dx = ?",
      options: ["eˣ + C", "xeˣ + C", "eˣ/x + C", "ln(x) + C", "x + C"],
      correctIndex: 0,
      explanation: "eˣ ist seine eigene Ableitung UND seine eigene Stammfunktion: ∫eˣ dx = eˣ + C.",
    },
    {
      question: "Der Scheitelpunkt von f(x) = x² - 4x + 3 liegt bei x = ?",
      options: ["1", "2", "3", "4", "-2"],
      correctIndex: 1,
      explanation:
        "x_s = -b/(2a) = -(-4)/(2·1) = 4/2 = 2. y_s = f(2) = 4 - 8 + 3 = -1. Scheitelpunkt: (2|-1).",
    },
  ],

  summary: [
    "Vier zentrale Funktionstypen: Linear (f(x) = kx + d), Quadratisch (f(x) = ax² + bx + c mit Scheitelpunkt bei x_s = -b/(2a)), Exponential (f(x) = a·bˣ, Wachstum/Zerfall) und Logarithmus (f(x) = log_b(x), Umkehrfunktion). Definitionsbereich beachten: Nenner ≠ 0, Radikand ≥ 0, log-Argument > 0.",
    "Trigonometrie: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = sin/cos (SOH-CAH-TOA). Fundamentale Identität: sin²(α) + cos²(α) = 1. Kosinussatz verallgemeinert Pythagoras. Im Bogenmaß: 360° = 2π, 180° = π, 90° = π/2.",
    "Differentialrechnung: Ableitung = momentane Änderungsrate. Potenzregel (xⁿ)' = nxⁿ⁻¹, Produktregel (fg)' = f'g + fg', Quotientenregel (f/g)' = (f'g - fg')/g², Kettenregel [f(g(x))]' = f'(g(x))·g'(x). Spezielle: (eˣ)' = eˣ, (ln x)' = 1/x, (sin x)' = cos x, (cos x)' = -sin x.",
    "Integralrechnung: Umkehrung der Ableitung. ∫xⁿdx = xⁿ⁺¹/(n+1) + C (n ≠ -1), ∫1/x dx = ln|x| + C, ∫eˣdx = eˣ + C. Bestimmtes Integral: ∫ₐᵇ f(x)dx = F(b) - F(a) = Fläche unter der Kurve. Fläche zwischen Kurven: ∫|f(x) - g(x)|dx.",
  ],
};
