/**
 * Mathematik Pool — „Was ist falsch?" (Typ A: eine Aussage ist falsch, diese auswählen).
 * 60 Fragen, 10 pro Kapitel (kap1–kap3, kap5–kap7).
 * Schwierigkeit: 24 leicht / 24 mittel / 12 schwer.
 */
import type { Question } from "./index";

const ids = ["a", "b", "c", "d", "e"] as const;

function wif(
  id: string,
  chapter: string,
  text: string,
  options: [string, string, string, string, string],
  correctIndex: 0 | 1 | 2 | 3 | 4,
  explanation: string,
  difficulty: "leicht" | "mittel" | "schwer",
  tags: string[]
): Question {
  return {
    id,
    subject: "mathematik",
    chapter,
    text,
    options: options.map((t, i) => ({ id: ids[i], text: t })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags: ["falsch-aussage", ...tags],
  };
}

export const mathematikWasIstFalsch: Question[] = [
  // ─── mathe-kap1: Zahlen, Mengen, Einheiten (10 Fragen) ────────────────────
  wif(
    "ma-wif-001",
    "mathe-kap1",
    "Welche der folgenden Aussagen zu Zahlenmengen ist FALSCH?",
    [
      "Jede reelle Zahl ist auch eine rationale Zahl.",
      "Jede natürliche Zahl ist auch eine ganze Zahl.",
      "Jede ganze Zahl ist auch eine rationale Zahl.",
      "Jede rationale Zahl lässt sich als Bruch zweier ganzer Zahlen darstellen.",
      "Die Menge der natürlichen Zahlen ist eine Teilmenge der reellen Zahlen.",
    ],
    0,
    "Option A ist falsch. Nicht jede reelle Zahl ist rational — irrationale Zahlen wie √2 oder π gehören zu ℝ, aber nicht zu ℚ.",
    "leicht",
    ["zahlenmengen"]
  ),
  wif(
    "ma-wif-002",
    "mathe-kap1",
    "Welche der folgenden Aussagen zu SI-Einheiten ist FALSCH?",
    [
      "Die SI-Einheit der Kraft ist Newton (N = kg·m/s²).",
      "Die SI-Einheit der Temperatur ist Grad Celsius (°C).",
      "Die SI-Einheit der Energie ist Joule (J = kg·m²/s²).",
      "Die SI-Einheit der elektrischen Stromstärke ist Ampere (A).",
      "Die SI-Einheit der Stoffmenge ist Mol (mol).",
    ],
    1,
    "Option B ist falsch. Die SI-Einheit der Temperatur ist Kelvin (K), nicht Grad Celsius. Celsius ist zwar gebräuchlich, aber keine SI-Basiseinheit.",
    "leicht",
    ["SI-Einheiten"]
  ),
  wif(
    "ma-wif-003",
    "mathe-kap1",
    "Welche der folgenden Aussagen zu Zehnerpotenzen ist FALSCH?",
    [
      "10⁰ = 1.",
      "10⁻³ entspricht dem Präfix Milli (m).",
      "10⁻⁶ entspricht dem Präfix Nano (n).",
      "10⁶ entspricht dem Präfix Mega (M).",
      "10⁹ entspricht dem Präfix Giga (G).",
    ],
    2,
    "Option C ist falsch. 10⁻⁶ entspricht dem Präfix Mikro (μ). Nano (n) entspricht 10⁻⁹.",
    "leicht",
    ["Zehnerpotenzen", "SI-Präfixe"]
  ),
  wif(
    "ma-wif-004",
    "mathe-kap1",
    "Welche der folgenden Aussagen über den Betrag einer Zahl ist FALSCH?",
    [
      "|a| ≥ 0 für alle reellen Zahlen a.",
      "|a · b| = |a| · |b| für alle reellen Zahlen a und b.",
      "|a + b| ≤ |a| + |b| (Dreiecksungleichung).",
      "|a| = a für alle reellen Zahlen a.",
      "|-5| = 5.",
    ],
    3,
    "Option D ist falsch. |a| = a gilt nur für a ≥ 0. Für negative Zahlen gilt |a| = −a. Beispiel: |−3| = 3 ≠ −3.",
    "mittel",
    ["Betrag"]
  ),
  wif(
    "ma-wif-005",
    "mathe-kap1",
    "Welche der folgenden Aussagen zu Intervallen ist FALSCH?",
    [
      "Das offene Intervall (a, b) enthält weder a noch b.",
      "Das geschlossene Intervall [a, b] enthält sowohl a als auch b.",
      "[a, b) enthält a, aber nicht b.",
      "Das Intervall (−∞, ∞) umfasst alle reellen Zahlen.",
      "Das Intervall [3, 3] enthält unendlich viele Elemente.",
    ],
    4,
    "Option E ist falsch. Das Intervall [3, 3] enthält genau ein Element, nämlich die Zahl 3 selbst, nicht unendlich viele.",
    "leicht",
    ["Intervalle"]
  ),
  wif(
    "ma-wif-006",
    "mathe-kap1",
    "Welche der folgenden Aussagen zu irrationalen Zahlen ist FALSCH?",
    [
      "Die Summe zweier irrationaler Zahlen ist stets irrational.",
      "√2 ist eine irrationale Zahl.",
      "π ist eine irrationale Zahl.",
      "Irrationale Zahlen haben eine nicht-periodische, unendliche Dezimaldarstellung.",
      "e (Eulersche Zahl) ist irrational.",
    ],
    0,
    "Option A ist falsch. Die Summe zweier irrationaler Zahlen muss nicht irrational sein. Gegenbeispiel: √2 + (−√2) = 0, und 0 ist rational.",
    "mittel",
    ["irrationale Zahlen"]
  ),
  wif(
    "ma-wif-007",
    "mathe-kap1",
    "Welche der folgenden Aussagen zur Einheitenumrechnung ist FALSCH?",
    [
      "1 km = 1000 m.",
      "1 m² = 100 cm².",
      "1 Liter = 1 dm³.",
      "1 m³ = 1000 Liter.",
      "1 cm³ = 1 mL.",
    ],
    1,
    "Option B ist falsch. 1 m² = 10 000 cm² (100 cm × 100 cm = 10 000 cm²), nicht 100 cm².",
    "leicht",
    ["Einheiten", "Umrechnung"]
  ),
  wif(
    "ma-wif-008",
    "mathe-kap1",
    "Welche der folgenden Aussagen zu Primzahlen ist FALSCH?",
    [
      "Eine Primzahl hat genau zwei Teiler: 1 und sich selbst.",
      "2 ist die einzige gerade Primzahl.",
      "1 ist eine Primzahl.",
      "Es gibt unendlich viele Primzahlen.",
      "Jede natürliche Zahl > 1 lässt sich als Produkt von Primzahlen darstellen.",
    ],
    2,
    "Option C ist falsch. Die Zahl 1 ist per Definition keine Primzahl, da eine Primzahl genau zwei verschiedene Teiler haben muss.",
    "mittel",
    ["Primzahlen"]
  ),
  wif(
    "ma-wif-009",
    "mathe-kap1",
    "Welche der folgenden Aussagen zu Mengenoperationen ist FALSCH?",
    [
      "A ∪ B enthält alle Elemente, die in A oder B (oder beiden) liegen.",
      "A ∩ B enthält alle Elemente, die sowohl in A als auch in B liegen.",
      "A \\ B enthält alle Elemente, die in A, aber nicht in B liegen.",
      "A ∪ B = A ∩ B gilt genau dann, wenn A = B.",
      "Die leere Menge ist Teilmenge jeder Menge, aber nicht von sich selbst.",
    ],
    4,
    "Option E ist falsch. Die leere Menge ∅ ist Teilmenge jeder Menge — auch von sich selbst (∅ ⊆ ∅ ist per Definition wahr).",
    "mittel",
    ["Mengenoperationen"]
  ),
  wif(
    "ma-wif-010",
    "mathe-kap1",
    "Welche der folgenden Aussagen zu wissenschaftlicher Notation ist FALSCH?",
    [
      "0,00045 = 4,5 × 10⁻⁴.",
      "3 200 000 = 3,2 × 10⁶.",
      "In wissenschaftlicher Notation steht vor dem Komma genau eine Ziffer ≠ 0.",
      "0,0072 = 7,2 × 10⁻⁴.",
      "Bei Multiplikation werden die Exponenten addiert: 10ᵃ · 10ᵇ = 10ᵃ⁺ᵇ.",
    ],
    3,
    "Option D ist falsch. 0,0072 = 7,2 × 10⁻³ (Komma um 3 Stellen verschoben), nicht 10⁻⁴.",
    "mittel",
    ["wissenschaftliche Notation"]
  ),

  // ─── mathe-kap2: Algebra und Geometrie (10 Fragen) ────────────────────────
  wif(
    "ma-wif-011",
    "mathe-kap2",
    "Welche der folgenden Aussagen zu linearen Gleichungen ist FALSCH?",
    [
      "Lineare Gleichungen können auch zwei verschiedene Lösungen haben.",
      "Eine lineare Gleichung hat die allgemeine Form ax + b = 0 (a ≠ 0).",
      "Lineare Gleichungen haben genau eine Lösung.",
      "Die Lösungsmenge von 2x + 4 = 0 ist {−2}.",
      "Multipliziert man beide Seiten mit einer Konstanten ≠ 0, bleibt die Lösungsmenge gleich.",
    ],
    0,
    "Option A ist falsch. Eine lineare Gleichung ax + b = 0 (a ≠ 0) hat genau eine Lösung x = −b/a. Zwei verschiedene Lösungen sind nicht möglich.",
    "leicht",
    ["lineare Gleichungen"]
  ),
  wif(
    "ma-wif-012",
    "mathe-kap2",
    "Welche der folgenden Aussagen zu quadratischen Gleichungen ist FALSCH?",
    [
      "Die allgemeine Form ist ax² + bx + c = 0 (a ≠ 0).",
      "Für D = 0 gibt es keine reelle Lösung.",
      "Die Diskriminante D = b² − 4ac bestimmt die Anzahl der reellen Lösungen.",
      "Für D > 0 gibt es genau zwei verschiedene reelle Lösungen.",
      "Die Lösungsformel lautet x = (−b ± √D) / (2a).",
    ],
    1,
    "Option B ist falsch. Für D = 0 gibt es genau eine (doppelte) reelle Lösung. Keine reelle Lösung existiert nur für D < 0.",
    "leicht",
    ["quadratische Gleichungen", "Diskriminante"]
  ),
  wif(
    "ma-wif-013",
    "mathe-kap2",
    "Welche der folgenden Aussagen zu binomischen Formeln ist FALSCH?",
    [
      "(a + b)² = a² + 2ab + b².",
      "(a − b)² = a² − 2ab + b².",
      "(a + b)² = a² + b².",
      "(a + b)(a − b) = a² − b².",
      "(2x + 3)² = 4x² + 12x + 9.",
    ],
    2,
    "Option C ist falsch. (a + b)² = a² + 2ab + b². Der gemischte Term 2ab fehlt. Dies ist einer der häufigsten Fehler in der Algebra.",
    "leicht",
    ["binomische Formeln"]
  ),
  wif(
    "ma-wif-014",
    "mathe-kap2",
    "Welche der folgenden Aussagen zum Satz des Pythagoras ist FALSCH?",
    [
      "Der Satz gilt nur für rechtwinklige Dreiecke.",
      "Die Hypotenuse ist die längste Seite im rechtwinkligen Dreieck.",
      "Es gilt a² + b² = c², wobei c die Hypotenuse ist.",
      "Ein Dreieck mit den Seiten 5, 12 und 14 ist rechtwinklig.",
      "Ein Dreieck mit den Seiten 3, 4 und 5 ist rechtwinklig.",
    ],
    3,
    "Option D ist falsch. 5² + 12² = 25 + 144 = 169 = 13², nicht 14². Ein rechtwinkliges Dreieck mit Katheten 5 und 12 hat die Hypotenuse 13.",
    "mittel",
    ["Pythagoras"]
  ),
  wif(
    "ma-wif-015",
    "mathe-kap2",
    "Welche der folgenden Aussagen zu Ungleichungen ist FALSCH?",
    [
      "Addiert man zu beiden Seiten dieselbe Zahl, bleibt die Ungleichung erhalten.",
      "Multipliziert man beide Seiten mit einer positiven Zahl, bleibt die Ungleichung erhalten.",
      "Multipliziert man beide Seiten mit einer negativen Zahl, kehrt sich das Relationszeichen um.",
      "Aus a > b und c > 0 folgt a · c > b · c.",
      "Aus a > b folgt stets a² > b².",
    ],
    4,
    "Option E ist falsch. Aus a > b folgt nicht zwingend a² > b². Gegenbeispiel: −1 > −5, aber (−1)² = 1 < 25 = (−5)².",
    "mittel",
    ["Ungleichungen"]
  ),
  wif(
    "ma-wif-016",
    "mathe-kap2",
    "Welche der folgenden Aussagen zur Kreisgeometrie ist FALSCH?",
    [
      "Verdoppelt man den Radius, verdoppelt sich die Fläche.",
      "Der Umfang eines Kreises beträgt U = 2πr.",
      "Die Fläche eines Kreises beträgt A = πr².",
      "Der Durchmesser ist das Doppelte des Radius.",
      "Ein Halbkreisbogen hat die Länge πr.",
    ],
    0,
    "Option A ist falsch. Verdoppelt man den Radius, vervierfacht sich die Fläche: A = π(2r)² = 4πr². Die Fläche wächst quadratisch mit dem Radius.",
    "mittel",
    ["Kreisgeometrie"]
  ),
  wif(
    "ma-wif-017",
    "mathe-kap2",
    "Welche der folgenden Aussagen zu Geradengleichungen ist FALSCH?",
    [
      "Die Steigung einer Geraden y = kx + d gibt an, um wie viel y sich ändert, wenn x um 1 steigt.",
      "Parallele Geraden haben dieselbe Steigung.",
      "Senkrechte Geraden haben Steigungen, deren Produkt −1 ergibt.",
      "Eine Gerade mit Steigung 0 verläuft horizontal.",
      "Der y-Achsenabschnitt d gibt den x-Wert an, an dem die Gerade die x-Achse schneidet.",
    ],
    4,
    "Option E ist falsch. Der y-Achsenabschnitt d gibt den y-Wert an, an dem die Gerade die y-Achse schneidet (bei x = 0), nicht den x-Achsen-Schnittpunkt.",
    "leicht",
    ["Geradengleichungen"]
  ),
  wif(
    "ma-wif-018",
    "mathe-kap2",
    "Welche der folgenden Aussagen zur Fläche geometrischer Figuren ist FALSCH?",
    [
      "Die Fläche eines Rechtecks ist A = a · b.",
      "Die Fläche eines Parallelogramms ist A = a · b.",
      "Die Fläche eines Dreiecks ist A = ½ · g · h.",
      "Die Fläche eines Trapezes ist A = ½ · (a + c) · h.",
      "Die Fläche eines Quadrats mit Seite a ist A = a².",
    ],
    1,
    "Option B ist falsch. Die Fläche eines Parallelogramms ist A = g · h (Grundseite mal Höhe), nicht a · b (Seite mal Seite). Die Höhe steht senkrecht auf der Grundseite.",
    "mittel",
    ["Flächenberechnung"]
  ),
  wif(
    "ma-wif-019",
    "mathe-kap2",
    "Welche der folgenden Aussagen zu Gleichungssystemen ist FALSCH?",
    [
      "Ein lineares Gleichungssystem mit 2 Gleichungen und 2 Unbekannten hat immer genau eine Lösung.",
      "Das Additionsverfahren kann zum Lösen linearer Gleichungssysteme verwendet werden.",
      "Parallele Geraden führen zu einem Gleichungssystem ohne Lösung.",
      "Identische Geraden führen zu unendlich vielen Lösungen.",
      "Ein lineares Gleichungssystem mit 2 Gleichungen und 2 Unbekannten hat maximal eine Lösung, wenn die Gleichungen linear unabhängig sind.",
    ],
    0,
    "Option A ist falsch. Ein 2×2-System hat nicht immer genau eine Lösung — bei parallelen Geraden gibt es keine, bei identischen Geraden unendlich viele.",
    "leicht",
    ["Gleichungssysteme"]
  ),
  wif(
    "ma-wif-020",
    "mathe-kap2",
    "Welche der folgenden Aussagen zu Winkeln im Dreieck ist FALSCH?",
    [
      "Die Winkelsumme im Dreieck beträgt 180°.",
      "In einem gleichseitigen Dreieck ist jeder Winkel 60°.",
      "Ein stumpfwinkliges Dreieck hat einen Winkel > 90°.",
      "Ein rechtwinkliges Dreieck kann zwei Winkel von je 90° besitzen.",
      "Die Summe der beiden spitzen Winkel in einem rechtwinkligen Dreieck ist 90°.",
    ],
    3,
    "Option D ist falsch. Da die Winkelsumme 180° beträgt, kann ein Dreieck höchstens einen Winkel von 90° haben. Zwei 90°-Winkel ergäben bereits 180° — für den dritten blieben 0°.",
    "leicht",
    ["Winkelsätze", "Dreieck"]
  ),

  // ─── mathe-kap3: Grundlagen (Brüche, Prozent, Potenzen, Wurzeln, Logarithmen) ─
  wif(
    "ma-wif-021",
    "mathe-kap3",
    "Welche der folgenden Aussagen zu Bruchrechnung ist FALSCH?",
    [
      "a/b + c/d = (ad + bc) / (bd).",
      "(a/b) · (c/d) = (ac) / (bd).",
      "(a/b) ÷ (c/d) = (a/b) · (d/c).",
      "a/b + c/b = (a + c) / (2b).",
      "Der Kehrwert von a/b ist b/a (a, b ≠ 0).",
    ],
    3,
    "Option D ist falsch. Bei gleichnamigen Brüchen werden nur die Zähler addiert: a/b + c/b = (a + c)/b. Der Nenner wird nicht verdoppelt.",
    "leicht",
    ["Bruchrechnung"]
  ),
  wif(
    "ma-wif-022",
    "mathe-kap3",
    "Welche der folgenden Aussagen zu Potenzgesetzen ist FALSCH?",
    [
      "aⁿ · aᵐ = aⁿ⁺ᵐ.",
      "aⁿ / aᵐ = aⁿ⁻ᵐ (a ≠ 0).",
      "(aⁿ)ᵐ = aⁿ·ᵐ.",
      "a⁻ⁿ = 1/aⁿ (a ≠ 0).",
      "(a · b)ⁿ = aⁿ + bⁿ.",
    ],
    4,
    "Option E ist falsch. Es gilt (a · b)ⁿ = aⁿ · bⁿ (Multiplikation, nicht Addition). Der Fehler aⁿ + bⁿ ist eine häufige Verwechslung.",
    "leicht",
    ["Potenzgesetze"]
  ),
  wif(
    "ma-wif-023",
    "mathe-kap3",
    "Welche der folgenden Aussagen zu Wurzeln ist FALSCH?",
    [
      "√(a + b) = √a + √b für a, b ≥ 0.",
      "√(a · b) = √a · √b für a, b ≥ 0.",
      "√(a/b) = √a / √b für a ≥ 0, b > 0.",
      "ⁿ√a = a^(1/n).",
      "√(a²) = |a| für alle reellen a.",
    ],
    0,
    "Option A ist falsch. Die Wurzel ist nicht additiv: √(a + b) ≠ √a + √b. Gegenbeispiel: √(9 + 16) = √25 = 5, aber √9 + √16 = 3 + 4 = 7.",
    "leicht",
    ["Wurzeln"]
  ),
  wif(
    "ma-wif-024",
    "mathe-kap3",
    "Welche der folgenden Aussagen zu Logarithmen ist FALSCH?",
    [
      "log(a · b) = log a + log b.",
      "log(a + b) = log a + log b.",
      "log(a/b) = log a − log b.",
      "log(aⁿ) = n · log a.",
      "log 1 = 0 (für jede Basis > 0, ≠ 1).",
    ],
    1,
    "Option B ist falsch. log(a + b) ≠ log a + log b. Das Logarithmengesetz gilt nur für Produkte: log(a · b) = log a + log b. Es gibt keine einfache Formel für log(a + b).",
    "mittel",
    ["Logarithmen"]
  ),
  wif(
    "ma-wif-025",
    "mathe-kap3",
    "Welche der folgenden Aussagen zur Prozentrechnung ist FALSCH?",
    [
      "25 % von 200 sind 50.",
      "Eine Erhöhung um 50 % und anschließende Senkung um 50 % ergeben den Ausgangswert.",
      "10 % Rabatt auf 80 € ergeben 72 €.",
      "p % eines Wertes G berechnet sich als G · p/100.",
      "Zwei aufeinanderfolgende Erhöhungen um 10 % ergeben insgesamt mehr als 20 % Erhöhung.",
    ],
    1,
    "Option B ist falsch. Erhöhung um 50 %: 100 → 150. Senkung um 50 % von 150: 150 · 0,5 = 75. Man landet bei 75, nicht bei 100. Prozentuale Änderungen beziehen sich auf unterschiedliche Grundwerte.",
    "mittel",
    ["Prozentrechnung"]
  ),
  wif(
    "ma-wif-026",
    "mathe-kap3",
    "Welche der folgenden Aussagen zu Potenzen mit ganzzahligen Exponenten ist FALSCH?",
    [
      "a⁰ = 1 für a ≠ 0.",
      "0⁰ ist in der Mathematik nicht eindeutig definiert.",
      "(−2)⁴ = −16.",
      "2⁻³ = 1/8.",
      "(−1)ⁿ = 1 für gerade n.",
    ],
    2,
    "Option C ist falsch. (−2)⁴ = (−2) · (−2) · (−2) · (−2) = 16, nicht −16. Bei geradem Exponenten wird das Ergebnis positiv.",
    "leicht",
    ["Potenzen"]
  ),
  wif(
    "ma-wif-027",
    "mathe-kap3",
    "Welche der folgenden Aussagen zur Exponentialfunktion ist FALSCH?",
    [
      "eˣ > 0 für alle reellen x.",
      "e⁰ = 1.",
      "Die Funktion f(x) = eˣ ist streng monoton steigend.",
      "eˣ · eʸ = eˣ⁺ʸ.",
      "Für x < 0 gilt eˣ < 0.",
    ],
    4,
    "Option E ist falsch. Die Exponentialfunktion eˣ ist immer positiv, auch für negative x. Beispiel: e⁻¹ ≈ 0,368 > 0.",
    "leicht",
    ["Exponentialfunktion"]
  ),
  wif(
    "ma-wif-028",
    "mathe-kap3",
    "Welche der folgenden Aussagen zur natürlichen Logarithmusfunktion ist FALSCH?",
    [
      "ln(e) = 1.",
      "ln(1) = 0.",
      "ln(x) ist nur für x > 0 definiert.",
      "ln(x²) = (ln x)² für x > 0.",
      "ln(eˣ) = x für alle reellen x.",
    ],
    3,
    "Option D ist falsch. ln(x²) = 2 · ln(x), nicht (ln x)². Dies folgt aus dem Potenzgesetz des Logarithmus: ln(aⁿ) = n · ln a.",
    "mittel",
    ["Logarithmen", "natürlicher Logarithmus"]
  ),
  wif(
    "ma-wif-029",
    "mathe-kap3",
    "Welche der folgenden Aussagen über Proportionalität ist FALSCH?",
    [
      "Bei direkter Proportionalität gilt y = k · x mit konstantem k.",
      "Bei indirekter Proportionalität gilt y = k / x mit konstantem k.",
      "Bei direkter Proportionalität verdoppelt sich y, wenn x verdoppelt wird.",
      "Der Graph einer direkten Proportionalität ist eine Gerade durch den Ursprung.",
      "Bei indirekter Proportionalität verdoppelt sich y, wenn x verdoppelt wird.",
    ],
    4,
    "Option E ist falsch. Bei indirekter Proportionalität halbiert sich y, wenn x verdoppelt wird (y = k/x → y' = k/(2x) = y/2).",
    "mittel",
    ["Proportionalität"]
  ),
  wif(
    "ma-wif-030",
    "mathe-kap3",
    "Welche der folgenden Aussagen zu Rechenregeln ist FALSCH?",
    [
      "a − (b − c) = a − b − c.",
      "Es gilt Punkt- vor Strichrechnung.",
      "Klammern werden immer zuerst aufgelöst.",
      "a · (b + c) = a · b + a · c (Distributivgesetz).",
      "a / (b · c) = a / b / c für b, c ≠ 0.",
    ],
    0,
    "Option A ist falsch. a − (b − c) = a − b + c, nicht a − b − c. Das Minuszeichen vor der Klammer dreht das Vorzeichen des zweiten Klammerterms um.",
    "mittel",
    ["Rechenregeln", "Klammerregeln"]
  ),

  // ─── mathe-kap5: Funktionen (10 Fragen) ───────────────────────────────────
  wif(
    "ma-wif-031",
    "mathe-kap5",
    "Welche der folgenden Aussagen zu Funktionen ist FALSCH?",
    [
      "Eine Funktion ordnet jedem x-Wert genau einen y-Wert zu.",
      "Jeder x-Wert darf mehreren y-Werten zugeordnet sein.",
      "Der Definitionsbereich gibt an, welche x-Werte eingesetzt werden dürfen.",
      "Der Wertebereich gibt an, welche y-Werte die Funktion annimmt.",
      "Eine Funktion kann jedem y-Wert mehrere x-Werte zuordnen.",
    ],
    1,
    "Option B ist falsch. Bei einer Funktion wird jedem x genau ein y zugeordnet (Eindeutigkeit). Umgekehrt dürfen aber verschiedene x-Werte denselben y-Wert liefern.",
    "leicht",
    ["Funktionsbegriff"]
  ),
  wif(
    "ma-wif-032",
    "mathe-kap5",
    "Welche der folgenden Aussagen zu quadratischen Funktionen ist FALSCH?",
    [
      "Der Graph von f(x) = ax² + bx + c ist eine Parabel.",
      "Für a > 0 ist die Parabel nach oben geöffnet.",
      "Der Scheitelpunkt ist ein Maximum, wenn a > 0.",
      "Die Symmetrieachse verläuft durch den Scheitelpunkt.",
      "Die Nullstellen lassen sich mit der Lösungsformel berechnen.",
    ],
    2,
    "Option C ist falsch. Für a > 0 ist die Parabel nach oben geöffnet und der Scheitelpunkt ein Minimum (Tiefpunkt), kein Maximum.",
    "leicht",
    ["quadratische Funktionen", "Parabel"]
  ),
  wif(
    "ma-wif-033",
    "mathe-kap5",
    "Welche der folgenden Aussagen zu Ableitungen ist FALSCH?",
    [
      "Die Ableitung von xⁿ ist n · xⁿ⁻¹.",
      "Die Ableitung einer Konstanten ist 0.",
      "Die Ableitung von eˣ ist eˣ.",
      "Die Ableitung von ln(x) ist 1/x (für x > 0).",
      "Die Ableitung von sin(x) ist −cos(x).",
    ],
    4,
    "Option E ist falsch. Die Ableitung von sin(x) ist cos(x), nicht −cos(x). Es gilt: (sin x)' = cos x und (cos x)' = −sin x.",
    "mittel",
    ["Ableitungen"]
  ),
  wif(
    "ma-wif-034",
    "mathe-kap5",
    "Welche der folgenden Aussagen zu Extremstellen ist FALSCH?",
    [
      "An einer Extremstelle gilt f'(x₀) = 0.",
      "Jede Stelle mit f'(x₀) = 0 ist eine Extremstelle.",
      "An einem Maximum ist f''(x₀) < 0.",
      "An einem Minimum ist f''(x₀) > 0.",
      "Ein Vorzeichenwechsel von f' zeigt eine Extremstelle an.",
    ],
    1,
    "Option B ist falsch. f'(x₀) = 0 ist eine notwendige, aber keine hinreichende Bedingung. Es könnte auch ein Sattelpunkt (Wendepunkt) vorliegen, z. B. bei f(x) = x³ an x = 0.",
    "mittel",
    ["Extremstellen", "Ableitungen"]
  ),
  wif(
    "ma-wif-035",
    "mathe-kap5",
    "Welche der folgenden Aussagen zu Funktionsgraphen ist FALSCH?",
    [
      "f(x) = x² hat genau zwei Nullstellen.",
      "f(x) = |x| hat bei x = 0 einen Knick und ist dort nicht differenzierbar.",
      "f(x) = 1/x hat bei x = 0 eine Polstelle.",
      "f(x) = eˣ hat keine Nullstelle.",
      "f(x) = x³ ist punktsymmetrisch zum Ursprung.",
    ],
    0,
    "Option A ist falsch. f(x) = x² hat nur eine Nullstelle, nämlich x = 0 (doppelte Nullstelle). Der Graph berührt die x-Achse an genau einem Punkt.",
    "mittel",
    ["Funktionsgraphen"]
  ),
  wif(
    "ma-wif-036",
    "mathe-kap5",
    "Welche der folgenden Aussagen zu Ableitungsregeln ist FALSCH?",
    [
      "Summenregel: (f + g)' = f' + g'.",
      "Faktorregel: (c · f)' = c · f' für eine Konstante c.",
      "Produktregel: (f · g)' = f' · g + f · g'.",
      "Quotientenregel: (f/g)' = (f' · g + f · g') / g².",
      "Kettenregel: [f(g(x))]' = f'(g(x)) · g'(x).",
    ],
    3,
    "Option D ist falsch. Die Quotientenregel lautet (f/g)' = (f' · g − f · g') / g². Das Zeichen im Zähler ist Minus, nicht Plus.",
    "schwer",
    ["Ableitungsregeln", "Quotientenregel"]
  ),
  wif(
    "ma-wif-037",
    "mathe-kap5",
    "Welche der folgenden Aussagen zu Symmetrie von Funktionen ist FALSCH?",
    [
      "f(x) = x² ist achsensymmetrisch zur y-Achse.",
      "f(x) = x³ ist punktsymmetrisch zum Ursprung.",
      "Für achsensymmetrische Funktionen gilt f(−x) = f(x).",
      "Für punktsymmetrische Funktionen gilt f(−x) = −f(x).",
      "f(x) = x² + x ist achsensymmetrisch zur y-Achse.",
    ],
    4,
    "Option E ist falsch. f(−x) = (−x)² + (−x) = x² − x ≠ x² + x = f(x). Die Funktion ist weder achsen- noch punktsymmetrisch zum Ursprung.",
    "mittel",
    ["Symmetrie", "Funktionen"]
  ),
  wif(
    "ma-wif-038",
    "mathe-kap5",
    "Welche der folgenden Aussagen zu trigonometrischen Funktionen ist FALSCH?",
    [
      "sin(0) = 0.",
      "cos(0) = 1.",
      "Die Periode von sin(x) ist π.",
      "sin²(x) + cos²(x) = 1 für alle x.",
      "tan(x) = sin(x) / cos(x).",
    ],
    2,
    "Option C ist falsch. Die Periode von sin(x) ist 2π, nicht π. sin(x + 2π) = sin(x), aber sin(x + π) = −sin(x) ≠ sin(x) im Allgemeinen.",
    "schwer",
    ["Trigonometrie"]
  ),
  wif(
    "ma-wif-039",
    "mathe-kap5",
    "Welche der folgenden Aussagen zu Wendepunkten ist FALSCH?",
    [
      "An einem Wendepunkt ändert der Graph sein Krümmungsverhalten.",
      "An einem Wendepunkt gilt notwendigerweise f''(x₀) = 0.",
      "f''(x₀) = 0 allein reicht nicht, um einen Wendepunkt zu garantieren.",
      "Ein Wendepunkt mit f'(x₀) = 0 heißt Sattelpunkt.",
      "An jedem Wendepunkt hat die Funktion f einen Vorzeichenwechsel.",
    ],
    4,
    "Option E ist falsch. Die Funktion f muss am Wendepunkt keinen Vorzeichenwechsel haben — das Vorzeichen von f ist irrelevant. Es ist die zweite Ableitung f'', die den Vorzeichenwechsel haben muss (Krümmungswechsel).",
    "schwer",
    ["Wendepunkte"]
  ),
  wif(
    "ma-wif-040",
    "mathe-kap5",
    "Welche der folgenden Aussagen zu Grenzwerten ist FALSCH?",
    [
      "lim (x→∞) 1/x = 0.",
      "lim (x→0) sin(x)/x = 1.",
      "lim (x→∞) (1 + 1/n)ⁿ = e (Eulersche Zahl).",
      "lim (x→0⁺) ln(x) = −∞.",
      "lim (x→∞) eˣ = 0.",
    ],
    4,
    "Option E ist falsch. lim (x→∞) eˣ = ∞, nicht 0. Die Exponentialfunktion wächst für x → ∞ über alle Grenzen. Hingegen gilt lim (x→−∞) eˣ = 0.",
    "schwer",
    ["Grenzwerte"]
  ),

  // ─── mathe-kap6: Vektorrechnung (10 Fragen) ───────────────────────────────
  wif(
    "ma-wif-041",
    "mathe-kap6",
    "Welche der folgenden Aussagen zur Vektoraddition ist FALSCH?",
    [
      "Vektoren werden komponentenweise addiert.",
      "Die Vektoraddition ist kommutativ: a⃗ + b⃗ = b⃗ + a⃗.",
      "Der Betrag der Summe ist gleich der Summe der Beträge: |a⃗ + b⃗| = |a⃗| + |b⃗|.",
      "Die Vektoraddition ist assoziativ.",
      "Der Nullvektor ist das neutrale Element der Addition.",
    ],
    2,
    "Option C ist falsch. Im Allgemeinen gilt |a⃗ + b⃗| ≤ |a⃗| + |b⃗| (Dreiecksungleichung). Gleichheit gilt nur, wenn die Vektoren parallel und gleichgerichtet sind.",
    "mittel",
    ["Vektoraddition"]
  ),
  wif(
    "ma-wif-042",
    "mathe-kap6",
    "Welche der folgenden Aussagen zum Skalarprodukt ist FALSCH?",
    [
      "Das Ergebnis des Skalarprodukts ist ein Vektor.",
      "a⃗ · b⃗ = |a⃗| · |b⃗| · cos(φ), wobei φ der eingeschlossene Winkel ist.",
      "Das Skalarprodukt zweier orthogonaler Vektoren ist 0.",
      "Das Skalarprodukt ist kommutativ.",
      "a⃗ · a⃗ = |a⃗|².",
    ],
    0,
    "Option A ist falsch. Das Ergebnis des Skalarprodukts ist ein Skalar (eine Zahl), kein Vektor. Daher der Name 'Skalar'-Produkt.",
    "leicht",
    ["Skalarprodukt"]
  ),
  wif(
    "ma-wif-043",
    "mathe-kap6",
    "Welche der folgenden Aussagen zum Kreuzprodukt ist FALSCH?",
    [
      "Das Kreuzprodukt a⃗ × b⃗ steht senkrecht auf a⃗ und b⃗.",
      "Das Kreuzprodukt ist kommutativ: a⃗ × b⃗ = b⃗ × a⃗.",
      "|a⃗ × b⃗| = |a⃗| · |b⃗| · sin(φ).",
      "Das Kreuzprodukt ist nur im ℝ³ definiert.",
      "Der Betrag des Kreuzprodukts entspricht der Fläche des aufgespannten Parallelogramms.",
    ],
    1,
    "Option B ist falsch. Das Kreuzprodukt ist antikommutativ: a⃗ × b⃗ = −(b⃗ × a⃗). Die Reihenfolge der Faktoren bestimmt die Richtung.",
    "mittel",
    ["Kreuzprodukt"]
  ),
  wif(
    "ma-wif-044",
    "mathe-kap6",
    "Welche der folgenden Aussagen zur Skalarmultiplikation ist FALSCH?",
    [
      "Ein Vektor wird mit einem Skalar multipliziert, indem jede Komponente mit dem Skalar multipliziert wird.",
      "Multiplikation mit −1 kehrt die Richtung des Vektors um.",
      "Multiplikation mit 0 ergibt den Nullvektor.",
      "Multiplikation mit einem Skalar ändert die Richtung des Vektors stets.",
      "Multiplikation mit 2 verdoppelt den Betrag des Vektors.",
    ],
    3,
    "Option D ist falsch. Multiplikation mit einem positiven Skalar ändert nur die Länge, nicht die Richtung. Nur bei negativem Skalar wird die Richtung umgekehrt.",
    "leicht",
    ["Skalarmultiplikation"]
  ),
  wif(
    "ma-wif-045",
    "mathe-kap6",
    "Welche der folgenden Aussagen zum Betrag eines Vektors ist FALSCH?",
    [
      "Der Betrag von a⃗ = (a₁, a₂, a₃) ist |a⃗| = √(a₁² + a₂² + a₃²).",
      "Der Betrag ist immer ≥ 0.",
      "|a⃗| = 0 genau dann, wenn a⃗ der Nullvektor ist.",
      "Der Betrag von (3, 4) ist 5, der Betrag von (3, 4, 0) ist 7.",
      "Der Einheitsvektor in Richtung a⃗ ist a⃗/|a⃗| (für a⃗ ≠ 0⃗).",
    ],
    3,
    "Option D ist falsch. |(3, 4, 0)| = √(9 + 16 + 0) = √25 = 5, genau wie |(3, 4)|. Die zusätzliche Null-Komponente ändert den Betrag nicht.",
    "mittel",
    ["Vektorbetrag"]
  ),
  wif(
    "ma-wif-046",
    "mathe-kap6",
    "Welche der folgenden Aussagen zu Ortsvektoren und Verbindungsvektoren ist FALSCH?",
    [
      "Der Ortsvektor eines Punktes P zeigt vom Ursprung zu P.",
      "Der Verbindungsvektor von A nach B ist AB⃗ = OB⃗ − OA⃗.",
      "Der Mittelpunkt M der Strecke AB hat den Ortsvektor OM⃗ = ½(OA⃗ + OB⃗).",
      "Zwei Punkte A und B sind identisch genau dann, wenn AB⃗ = 0⃗.",
      "Der Verbindungsvektor AB⃗ und BA⃗ sind identisch.",
    ],
    4,
    "Option E ist falsch. AB⃗ und BA⃗ haben denselben Betrag, aber entgegengesetzte Richtung: BA⃗ = −AB⃗.",
    "leicht",
    ["Ortsvektoren", "Verbindungsvektoren"]
  ),
  wif(
    "ma-wif-047",
    "mathe-kap6",
    "Welche der folgenden Aussagen zur linearen Abhängigkeit ist FALSCH?",
    [
      "Zwei Vektoren sind linear abhängig, wenn einer ein Vielfaches des anderen ist.",
      "Linear abhängige Vektoren sind kollinear (parallel).",
      "Drei Vektoren im ℝ³ sind linear abhängig, wenn einer als Linearkombination der anderen darstellbar ist.",
      "Der Nullvektor ist zu jedem Vektor linear unabhängig.",
      "Zwei linear unabhängige Vektoren im ℝ² spannen die gesamte Ebene auf.",
    ],
    3,
    "Option D ist falsch. Der Nullvektor ist zu jedem Vektor linear abhängig, nicht unabhängig. Denn es gilt: 1 · 0⃗ + 0 · a⃗ = 0⃗ (nichttriviale Linearkombination).",
    "schwer",
    ["lineare Abhängigkeit"]
  ),
  wif(
    "ma-wif-048",
    "mathe-kap6",
    "Welche der folgenden Aussagen zu Geraden im Raum ist FALSCH?",
    [
      "Zwei Geraden im ℝ³, die sich nicht schneiden, sind immer parallel.",
      "Eine Gerade im Raum wird durch einen Stützvektor und einen Richtungsvektor beschrieben.",
      "Die Parameterdarstellung lautet r⃗(t) = a⃗ + t · v⃗.",
      "Zwei Geraden im ℝ³ sind entweder parallel, schneidend oder windschief.",
      "Parallele Geraden haben denselben Richtungsvektor (oder ein Vielfaches davon).",
    ],
    0,
    "Option A ist falsch. Im ℝ³ können zwei Geraden, die sich nicht schneiden, auch windschief sein (nicht in derselben Ebene liegend). Windschief ist eine Möglichkeit, die in ℝ² nicht existiert.",
    "schwer",
    ["Geraden im Raum"]
  ),
  wif(
    "ma-wif-049",
    "mathe-kap6",
    "Welche der folgenden Aussagen zum Spatprodukt ist FALSCH?",
    [
      "Das Spatprodukt dreier Vektoren a⃗, b⃗, c⃗ berechnet sich als a⃗ · (b⃗ × c⃗).",
      "Der Betrag des Spatprodukts gibt das Volumen des aufgespannten Parallelepipeds an.",
      "Ist das Spatprodukt 0, liegen die drei Vektoren in einer Ebene.",
      "Das Vorzeichen des Spatprodukts gibt die Orientierung des Dreibeins an.",
      "Das Spatprodukt ist nur für Vektoren im ℝ² definiert.",
    ],
    4,
    "Option E ist falsch. Das Spatprodukt nutzt das Kreuzprodukt und ist daher nur im ℝ³ definiert, nicht im ℝ².",
    "schwer",
    ["Spatprodukt"]
  ),
  wif(
    "ma-wif-050",
    "mathe-kap6",
    "Welche der folgenden Aussagen zu Ebenen im Raum ist FALSCH?",
    [
      "Eine Ebene kann durch einen Stützvektor und zwei Richtungsvektoren beschrieben werden.",
      "Jede Ebene im ℝ³ lässt sich durch genau einen Punkt und einen Richtungsvektor eindeutig festlegen.",
      "Die Normalenform einer Ebene lautet n⃗ · (r⃗ − a⃗) = 0.",
      "Der Normalenvektor steht senkrecht auf der Ebene.",
      "Zwei parallele Ebenen haben parallele Normalenvektoren.",
    ],
    1,
    "Option B ist falsch. Ein Punkt und ein einziger Richtungsvektor definieren eine Gerade, keine Ebene. Für eine Ebene benötigt man einen Punkt und zwei linear unabhängige Richtungsvektoren (oder einen Punkt und einen Normalenvektor).",
    "schwer",
    ["Ebenen"]
  ),

  // ─── mathe-kap7: Stochastik (10 Fragen) ───────────────────────────────────
  wif(
    "ma-wif-051",
    "mathe-kap7",
    "Welche der folgenden Aussagen zur Wahrscheinlichkeit ist FALSCH?",
    [
      "Für jedes Ereignis A gilt 0 ≤ P(A) ≤ 1.",
      "P(Ω) = 1 (Wahrscheinlichkeit des sicheren Ereignisses).",
      "P(A ∪ B) = P(A) + P(B) gilt immer, auch bei nicht-disjunkten Ereignissen.",
      "P(∅) = 0 (Wahrscheinlichkeit des unmöglichen Ereignisses).",
      "P(A) + P(Ā) = 1 (Komplementärregel).",
    ],
    2,
    "Option C ist falsch. P(A ∪ B) = P(A) + P(B) gilt nur für disjunkte Ereignisse (A ∩ B = ∅). Allgemein: P(A ∪ B) = P(A) + P(B) − P(A ∩ B).",
    "leicht",
    ["Wahrscheinlichkeit", "Additionssatz"]
  ),
  wif(
    "ma-wif-052",
    "mathe-kap7",
    "Welche der folgenden Aussagen zu Kombinatorik ist FALSCH?",
    [
      "Die Anzahl der Permutationen von n Elementen ist n!.",
      "0! = 1.",
      "n! = n · (n−1)!.",
      "(n über k) = (n über k+1) für alle k.",
      "Der Binomialkoeffizient (n über k) = n! / (k! · (n−k)!).",
    ],
    3,
    "Option D ist falsch. Im Allgemeinen gilt (n über k) ≠ (n über k+1). Es gilt jedoch (n über k) = (n über n−k) (Symmetrie).",
    "mittel",
    ["Kombinatorik", "Binomialkoeffizient"]
  ),
  wif(
    "ma-wif-053",
    "mathe-kap7",
    "Welche der folgenden Aussagen zur bedingten Wahrscheinlichkeit ist FALSCH?",
    [
      "P(A|B) = P(A ∩ B) / P(B) für P(B) > 0.",
      "Sind A und B unabhängig, gilt P(A|B) = P(A).",
      "Sind A und B unabhängig, gilt P(A ∩ B) = P(A) · P(B).",
      "P(A|B) = P(B|A) gilt immer.",
      "Die bedingte Wahrscheinlichkeit kann mit dem Satz von Bayes umgekehrt werden.",
    ],
    3,
    "Option D ist falsch. P(A|B) = P(B|A) gilt nicht allgemein — das ist ein häufiger Fehlschluss. Aus Bayes' Satz folgt: P(A|B) = P(B|A) · P(A) / P(B).",
    "schwer",
    ["bedingte Wahrscheinlichkeit", "Bayes"]
  ),
  wif(
    "ma-wif-054",
    "mathe-kap7",
    "Welche der folgenden Aussagen zum Erwartungswert ist FALSCH?",
    [
      "Der Erwartungswert muss ein tatsächlich annehmbarer Wert der Zufallsvariable sein.",
      "Der Erwartungswert E(X) = Σ xᵢ · P(X = xᵢ).",
      "E(a·X + b) = a·E(X) + b (Linearität).",
      "E(X + Y) = E(X) + E(Y), auch wenn X und Y abhängig sind.",
      "Der Erwartungswert eines fairen Würfels ist 3,5.",
    ],
    0,
    "Option A ist falsch. Der Erwartungswert muss kein annehmbarer Wert sein. Beispiel: Beim fairen Würfel ist E(X) = 3,5, aber 3,5 ist kein mögliches Würfelergebnis.",
    "mittel",
    ["Erwartungswert"]
  ),
  wif(
    "ma-wif-055",
    "mathe-kap7",
    "Welche der folgenden Aussagen zur Varianz ist FALSCH?",
    [
      "Var(X) = E[(X − E(X))²].",
      "Die Varianz ist immer ≥ 0.",
      "Die Standardabweichung ist die Quadratwurzel der Varianz.",
      "Var(a·X) = a · Var(X).",
      "Var(X + c) = Var(X) für eine Konstante c.",
    ],
    3,
    "Option D ist falsch. Var(a·X) = a² · Var(X), nicht a · Var(X). Die Varianz skaliert quadratisch mit dem Faktor.",
    "schwer",
    ["Varianz", "Standardabweichung"]
  ),
  wif(
    "ma-wif-056",
    "mathe-kap7",
    "Welche der folgenden Aussagen zur Binomialverteilung ist FALSCH?",
    [
      "Sie beschreibt die Anzahl der Erfolge bei n unabhängigen Versuchen mit gleicher Erfolgswahrscheinlichkeit p.",
      "P(X = k) = (n über k) · pᵏ · (1−p)ⁿ⁻ᵏ.",
      "E(X) = n · p.",
      "Var(X) = n · p · (1−p).",
      "Die Binomialverteilung erfordert, dass sich die Erfolgswahrscheinlichkeit bei jedem Versuch ändert.",
    ],
    4,
    "Option E ist falsch. Die Binomialverteilung setzt gerade voraus, dass die Erfolgswahrscheinlichkeit p bei jedem Versuch gleich bleibt (konstant). Wenn sich p ändert, liegt keine Binomialverteilung vor.",
    "mittel",
    ["Binomialverteilung"]
  ),
  wif(
    "ma-wif-057",
    "mathe-kap7",
    "Welche der folgenden Aussagen zum Baumdiagramm ist FALSCH?",
    [
      "Die Wahrscheinlichkeiten entlang eines Pfades werden multipliziert (Pfadmultiplikation).",
      "Die Wahrscheinlichkeiten mehrerer Pfade, die zum selben Ereignis führen, werden addiert (Pfadaddition).",
      "Die Pfade eines Baumdiagramms dürfen sich kreuzen.",
      "An jedem Knoten müssen die ausgehenden Wahrscheinlichkeiten in Summe 1 ergeben.",
      "Die Summe aller Pfadwahrscheinlichkeiten ergibt 1.",
    ],
    2,
    "Option C ist falsch. In einem Baumdiagramm sind die Pfade stets disjunkt (nicht kreuzend). Jeder Pfad repräsentiert eine einzigartige Abfolge von Ergebnissen.",
    "leicht",
    ["Baumdiagramm"]
  ),
  wif(
    "ma-wif-058",
    "mathe-kap7",
    "Welche der folgenden Aussagen zur Normalverteilung ist FALSCH?",
    [
      "Die Normalverteilung nimmt nur Werte zwischen μ − 3σ und μ + 3σ an.",
      "Die Normalverteilung ist symmetrisch um den Erwartungswert μ.",
      "Die Standardnormalverteilung hat μ = 0 und σ = 1.",
      "Etwa 68 % der Werte liegen im Intervall [μ − σ, μ + σ].",
      "Etwa 95 % der Werte liegen im Intervall [μ − 2σ, μ + 2σ].",
    ],
    0,
    "Option A ist falsch. Die Normalverteilung erstreckt sich von −∞ bis +∞. Zwar liegen 99,7 % der Werte im Intervall [μ − 3σ, μ + 3σ], aber Werte außerhalb sind möglich.",
    "schwer",
    ["Normalverteilung"]
  ),
  wif(
    "ma-wif-059",
    "mathe-kap7",
    "Welche der folgenden Aussagen zum Laplace-Experiment ist FALSCH?",
    [
      "Bei einem Laplace-Experiment sind alle Ergebnisse gleich wahrscheinlich.",
      "P(A) = |A| / |Ω| (günstige durch mögliche Ergebnisse).",
      "Das Werfen eines fairen Würfels ist ein Laplace-Experiment.",
      "Beim fairen Würfel ist P(gerade Zahl) = 1/2.",
      "Jedes Zufallsexperiment ist ein Laplace-Experiment.",
    ],
    4,
    "Option E ist falsch. Nicht jedes Zufallsexperiment ist ein Laplace-Experiment. Beispiel: Ein gezinkter Würfel hat keine Gleichverteilung der Ergebnisse.",
    "leicht",
    ["Laplace-Experiment"]
  ),
  wif(
    "ma-wif-060",
    "mathe-kap7",
    "Welche der folgenden Aussagen zu unabhängigen Ereignissen ist FALSCH?",
    [
      "Zwei Ereignisse A und B sind unabhängig, wenn P(A ∩ B) = P(A) · P(B).",
      "Disjunkte Ereignisse (A ∩ B = ∅) mit P(A) > 0 und P(B) > 0 sind stets unabhängig.",
      "Unabhängige Ereignisse können durchaus gleichzeitig eintreten.",
      "Bei unabhängigen Ereignissen gilt P(A|B) = P(A).",
      "Wenn A und B unabhängig sind, dann sind auch Ā und B̄ unabhängig.",
    ],
    1,
    "Option B ist falsch. Disjunkte Ereignisse mit P(A) > 0 und P(B) > 0 sind nie unabhängig. Denn P(A ∩ B) = 0 ≠ P(A) · P(B) > 0. Disjunkt und unabhängig sind verschiedene Konzepte.",
    "schwer",
    ["Unabhängigkeit", "disjunkte Ereignisse"]
  ),
];
