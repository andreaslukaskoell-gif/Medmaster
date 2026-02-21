import type { Kapitel } from '../types';

export const mathKap5: Kapitel = {
  id: 'math-kap5',
  title: "Funktionen",
  subject: 'mathematik',
  icon: '📈',
  estimatedTime: '120 min',
  unterkapitel: [
    {
      id: 'ma-5-01',
      title: "Lineare Funktionen",
      content: `# Lineare Funktionen

## Grundform und Begriffe

Eine lineare Funktion hat die allgemeine Form **f(x) = mx + b**, wobei x die unabhängige Variable (Argument), f(x) der zugehörige Funktionswert (Bild), m die **Steigung** (Steigungskoeffizient) und b der **y-Achsenabschnitt** (Ordinatenabschnitt) ist. Der Name "linear" leitet sich davon ab, dass der Graph dieser Funktion stets eine **Gerade** ist.

Die Steigung m beschreibt, um wie viele Einheiten sich f(x) verändert, wenn x um eine Einheit zunimmt. Formal gilt: m = Δy / Δx = (y₂ − y₁) / (x₂ − x₁). Ist m > 0, steigt die Gerade von links nach rechts; ist m < 0, fällt sie; ist m = 0, handelt es sich um eine horizontale Gerade (konstante Funktion).

## Steigung und Achsenabschnitt im Detail

Der **y-Achsenabschnitt b** gibt den Punkt an, an dem die Gerade die y-Achse schneidet, d. h. f(0) = b. Der **x-Achsenabschnitt** (Nullstelle) ergibt sich durch Setzen von f(x) = 0: 0 = mx + b → x₀ = −b/m (für m ≠ 0).

Zwei Geraden sind **parallel**, wenn sie dieselbe Steigung m besitzen. Sie sind **senkrecht zueinander**, wenn das Produkt ihrer Steigungen −1 ergibt: m₁ · m₂ = −1, d. h. m₂ = −1/m₁.

## Aufstellen einer linearen Funktion

**Aus zwei Punkten:** Gegeben P₁(x₁|y₁) und P₂(x₂|y₂). Berechne zuerst m = (y₂ − y₁) / (x₂ − x₁), dann b durch Einsetzen eines Punktes: b = y₁ − m·x₁.

**Aus Steigung und einem Punkt:** Gegeben m und P(x₀|y₀). Dann gilt b = y₀ − m·x₀.

## Grafische Darstellung

Eine Gerade ist durch zwei Punkte vollständig bestimmt. Praktisch wählt man oft den y-Achsenabschnitt (x = 0) und die Nullstelle (y = 0) als Zeichenpunkte. Die Steigung kann anschließend als Kontrollwert aus dem Graphen abgelesen werden: Man wählt zwei Gitterpunkte auf der Geraden und bildet den Quotienten Δy/Δx.

## Anwendungen im medizinischen Kontext

Lineare Zusammenhänge begegnen uns in der Medizin bei der **Kalibrierung von Messgeräten** (z. B. Lambert-Beer-Gesetz bei niedrigen Konzentrationen), bei **Dosierungs-Wirkungsbeziehungen** im linearen Bereich sowie bei der Berechnung von **Infusionsraten** (ml/h = konstante Dosis × Körpergewicht/Konzentration). Auch die lineare Interpolation zwischen Messwerten in Laborkurven setzt das Verständnis linearer Funktionen voraus.

## Besondere Geraden

- **Horizontale Gerade** (f(x) = b, m = 0): parallell zur x-Achse; beschreibt konstante Größen.
- **Vertikale Gerade** (x = a): keine Funktion im mathematischen Sinne, da einem x-Wert unendlich viele y-Werte zugeordnet sind.
- **Ursprungsgerade** (b = 0, f(x) = mx): verläuft durch den Ursprung; typisch für direkte Proportionalität.

## Lineare Gleichungssysteme

Zwei lineare Funktionen f(x) = m₁x + b₁ und g(x) = m₂x + b₂ schneiden sich, wenn m₁ ≠ m₂. Der Schnittpunkt ergibt sich durch Gleichsetzen: m₁x + b₁ = m₂x + b₂ → x = (b₂ − b₁)/(m₁ − m₂). Sind m₁ = m₂ und b₁ ≠ b₂, sind die Geraden parallel und haben keinen Schnittpunkt. Sind m₁ = m₂ und b₁ = b₂, sind die Geraden identisch.`,
      lernziele: [
        "Die Geradengleichung f(x) = mx + b aufstellen, wenn zwei Punkte oder Steigung und ein Punkt gegeben sind.",
        "Steigung und y-Achsenabschnitt aus einem Graphen oder einer Gleichung ablesen und interpretieren.",
        "Nullstellen linearer Funktionen berechnen und geometrisch deuten.",
        "Parallele und senkrechte Geraden anhand ihrer Steigungen identifizieren.",
        "Lineare Funktionen in medizinischen Anwendungen (Dosierung, Kalibrierung) erkennen und anwenden.",
      ],
      sections: [
        {
          heading: "Die Geradengleichung",
          text: "Jede nicht-vertikale Gerade lässt sich durch f(x) = mx + b beschreiben. Die Steigung m = Δy/Δx gibt die Änderungsrate an: Steigt x um 1, ändert sich y um m. Der y-Achsenabschnitt b ist der Funktionswert bei x = 0. Um eine Gerade eindeutig zu bestimmen, genügen zwei verschiedene Punkte oder ein Punkt und die Steigung.",
          merksatz: "Steigung = Δy / Δx. Positiv: Gerade steigt. Negativ: Gerade fällt. Null: horizontale Gerade.",
        },
        {
          heading: "Nullstellen und Schnittpunkte",
          text: "Die Nullstelle einer linearen Funktion (x-Achsenabschnitt) erhält man durch f(x) = 0 → x₀ = −b/m. Der Schnittpunkt zweier Geraden ergibt sich durch Gleichsetzen ihrer Funktionsterme. Parallele Geraden (gleiche Steigung) haben keinen Schnittpunkt, identische Geraden haben unendlich viele.",
          merksatz: "Nullstelle: x₀ = −b/m. Schnittpunkt zweier Geraden: Gleichsetzen und nach x auflösen.",
        },
        {
          heading: "Medizinische Anwendungen linearer Funktionen",
          text: "Im medizinischen Labor folgt die Absorption von Licht nach dem Lambert-Beer-Gesetz A = ε·c·d einer linearen Funktion in c (Konzentration). Im linearen Messbereich lässt sich die unbekannte Konzentration einer Probe durch Interpolation auf der Kalibrierkurve bestimmen. Infusionsraten werden linear aus Körpergewicht und Dosierungsangabe berechnet.",
          merksatz: "Lambert-Beer: A = ε·c·d ist linear in c. Kalibriergeraden ermöglichen Konzentrationsbestimmung aus Absorption.",
        },
      ],
      merksätze: [
        "f(x) = mx + b: m = Steigung, b = y-Achsenabschnitt.",
        "Steigung m = Δy/Δx = (y₂−y₁)/(x₂−x₁).",
        "Nullstelle (x-Achsenabschnitt): x₀ = −b/m.",
        "m > 0: Gerade steigt; m < 0: Gerade fällt; m = 0: konstant.",
        "Parallele Geraden: gleiche Steigung m, verschiedene b.",
        "Senkrechte Geraden: m₁ · m₂ = −1.",
        "Ursprungsgerade (b = 0): direkte Proportionalität y = mx.",
        "Zwei Punkte bestimmen eine Gerade eindeutig.",
        "Schnittpunkt: Gleichsetzen der Funktionsterme → x berechnen → y einsetzen.",
        "Lambert-Beer-Gesetz: Absorption A linear abhängig von Konzentration c.",
      ],
      altfrage: {
        question: "Erklären Sie, wie man die Gleichung einer Geraden aus zwei gegebenen Punkten bestimmt, und erläutern Sie die Bedeutung von Steigung und y-Achsenabschnitt für den Graphen.",
        answer: "Um die Geradengleichung f(x) = mx + b aus zwei Punkten P₁(x₁|y₁) und P₂(x₂|y₂) zu bestimmen, berechnet man zunächst die Steigung m als Differenzenquotient: m = (y₂ − y₁)/(x₂ − x₁). Die Steigung beschreibt die Änderungsrate der Funktion: Für jede Einheit, um die x zunimmt, ändert sich y um den Wert m. Eine positive Steigung bedeutet eine von links nach rechts steigende Gerade, eine negative Steigung eine fallende Gerade. Anschließend setzt man einen der Punkte, etwa P₁, in die Geradengleichung ein und löst nach b auf: b = y₁ − m·x₁. Der y-Achsenabschnitt b gibt an, wo die Gerade die y-Achse schneidet (d.h. den Funktionswert bei x = 0). In der Medizin ist das Verständnis dieser Parameter entscheidend: Bei Kalibrierkurven im Labor entspricht b einem Offset (Nullpunktfehler des Geräts) und m der Sensitivität (wie stark das Signal auf Konzentrationsänderungen anspricht). Eine Gerade mit b = 0 beschreibt direkte Proportionalität, wie sie bei der Berechnung von Infusionsdosierungen auftritt, bei denen die verabreichte Menge direkt proportional zur Körpermasse des Patienten ist.",
      },
      klinischerBezug: "Das Lambert-Beer-Gesetz (A = ε·c·d) ist eine lineare Funktion der Konzentration und bildet die Grundlage der Photometrie in der klinischen Labordiagnostik zur Bestimmung von Hämoglobin, Bilirubin und vielen anderen Laborparametern. Infusionsraten (z. B. ml/h = Dosis in mg/kg/h × Körpergewicht / Konzentration) folgen linearen Zusammenhängen und erfordern exakte Berechnungen, um Über- oder Unterdosierungen zu vermeiden. Im linearen Bereich von Dosis-Wirkungskurven lässt sich die therapeutische Dosis direkt proportional zur gewünschten Wirkungsstärke berechnen.",
      selfTest: [
        {
          question: "Eine Gerade verläuft durch die Punkte P₁(1|3) und P₂(4|9). Welche Steigung hat diese Gerade?",
          options: ["m = 1", "m = 2", "m = 3", "m = 4", "m = 6"],
          correctIndex: 1,
          explanation: "Die Steigung berechnet sich als m = (y₂ − y₁)/(x₂ − x₁) = (9 − 3)/(4 − 1) = 6/3 = 2. Eine Steigung von 2 bedeutet: Erhöht sich x um 1, steigt y um 2. Die Gleichung lautet dann f(x) = 2x + 1, was man durch Einsetzen eines Punktes bestätigt: f(1) = 2·1 + 1 = 3 und f(4) = 2·4 + 1 = 9.",
          hints: ["Steigung = Δy/Δx = (y₂−y₁)/(x₂−x₁)", "Zähler: Differenz der y-Werte; Nenner: Differenz der x-Werte"],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Die Gerade f(x) = −3x + 6 schneidet die x-Achse bei:",
          options: ["x = −2", "x = 6", "x = 2", "x = −6", "x = 3"],
          correctIndex: 2,
          explanation: "Die Nullstelle (x-Achsenabschnitt) erhält man, indem man f(x) = 0 setzt: 0 = −3x + 6 → 3x = 6 → x = 2. An der Nullstelle x = 2 schneidet die Gerade die x-Achse. Der y-Achsenabschnitt liegt bei f(0) = 6. Die Steigung −3 besagt, dass die Gerade von links nach rechts fällt: Mit jeder x-Einheit sinkt y um 3.",
          hints: ["Nullstelle: f(x) = 0 setzen und nach x auflösen", "x₀ = −b/m = −6/(−3) = 2"],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche der folgenden Geraden ist parallel zu f(x) = 4x − 7?",
          options: ["g(x) = −4x + 2", "g(x) = 4x + 3", "g(x) = 0,25x − 7", "g(x) = 4 − x", "g(x) = x + 4"],
          correctIndex: 1,
          explanation: "Parallele Geraden haben identische Steigungen. Die Funktion f(x) = 4x − 7 hat die Steigung m = 4. Unter den Optionen hat nur g(x) = 4x + 3 dieselbe Steigung m = 4. Die unterschiedlichen y-Achsenabschnitte (−7 vs. +3) bestätigen, dass es sich um verschiedene, aber parallele Geraden handelt. Eine Steigung von −1/4 (Option C) wäre senkrecht zu f, nicht parallel.",
          hints: ["Parallele Geraden: gleiche Steigung m", "Vergleiche die Steigungen aller Optionen mit m = 4"],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Eine Gerade hat die Steigung m = 2 und geht durch den Punkt (3|7). Welchen y-Achsenabschnitt hat sie?",
          options: ["b = 1", "b = 13", "b = −1", "b = 3", "b = 7"],
          correctIndex: 0,
          explanation: "Gegeben: m = 2 und Punkt (3|7). Einsetzen in f(x) = mx + b: 7 = 2·3 + b = 6 + b → b = 1. Die vollständige Gleichung lautet f(x) = 2x + 1. Probe: f(3) = 2·3 + 1 = 7. Der y-Achsenabschnitt b = 1 bedeutet, dass die Gerade die y-Achse beim Punkt (0|1) schneidet.",
          hints: ["Einsetzen in f(x) = mx + b: y₀ = m·x₀ + b, dann b = y₀ − m·x₀", "b = 7 − 2·3 = 7 − 6 = 1"],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Gerade steht senkrecht auf f(x) = 3x + 1?",
          options: ["g(x) = 3x − 5", "g(x) = −3x + 1", "g(x) = −(1/3)x + 2", "g(x) = (1/3)x + 2", "g(x) = −x + 3"],
          correctIndex: 2,
          explanation: "Zwei Geraden stehen senkrecht aufeinander, wenn das Produkt ihrer Steigungen −1 ergibt: m₁·m₂ = −1. Die Steigung von f ist m₁ = 3, daher muss gelten: m₂ = −1/3. Unter den Optionen hat g(x) = −(1/3)x + 2 die Steigung −1/3. Probe: 3·(−1/3) = −1. Diese Beziehung ist wichtig, weil senkrechte Linien in der Geometrie und bei Normalenvektoren eine zentrale Rolle spielen.",
          hints: ["Senkrecht: m₁ · m₂ = −1, also m₂ = −1/m₁", "m₁ = 3 → m₂ = −1/3"],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Zwei Geraden: f(x) = 2x + 1 und g(x) = −x + 7. An welchem x-Wert schneiden sie sich?",
          options: ["x = 1", "x = 2", "x = 3", "x = 4", "x = 5"],
          correctIndex: 1,
          explanation: "Schnittpunkt durch Gleichsetzen: 2x + 1 = −x + 7 → 3x = 6 → x = 2. Einsetzen zur Probe: f(2) = 2·2 + 1 = 5 und g(2) = −2 + 7 = 5. Beide Funktionen liefern y = 5 bei x = 2, der Schnittpunkt liegt also bei (2|5). Das Gleichsetzen zweier Funktionsterme ist die Standardmethode zum Finden von Schnittpunkten.",
          hints: ["Gleichsetzen: 2x + 1 = −x + 7", "Zusammenfassen: 3x = 6 → x = 2"],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Im Labor beschreibt die Kalibrierkurve eines Photometers A = 0,8·c + 0,02 (A = Absorption, c = Konzentration in mmol/L). Welche Konzentration hat eine Probe mit A = 0,42?",
          options: ["c = 0,5 mmol/L", "c = 0,525 mmol/L", "c = 0,45 mmol/L", "c = 0,4 mmol/L", "c = 0,6 mmol/L"],
          correctIndex: 0,
          explanation: "Aus A = 0,8·c + 0,02 folgt: 0,42 = 0,8·c + 0,02 → 0,4 = 0,8·c → c = 0,4/0,8 = 0,5 mmol/L. In der klinischen Chemie wird genau diese Methode genutzt: Man erstellt zunächst eine Kalibrierkurve mit bekannten Standardkonzentrationen, liest die Steigung m (Sensitivität) und den Achsenabschnitt b (Leerwert) ab und berechnet dann unbekannte Konzentrationen durch Umformen der linearen Gleichung.",
          hints: ["Kalibrierkurve umformen: c = (A − b)/m", "c = (0,42 − 0,02)/0,8 = 0,4/0,8"],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Eine Infusion liefert einem 70 kg schweren Patienten 5 mg/kg/h eines Medikaments (Konzentration: 50 mg/mL). Wie viel mL/h werden benötigt?",
          options: ["5 mL/h", "7 mL/h", "10 mL/h", "14 mL/h", "3,5 mL/h"],
          correctIndex: 1,
          explanation: "Gesamtdosis = 5 mg/kg/h × 70 kg = 350 mg/h. Volumen = Dosis/Konzentration = 350 mg/h ÷ 50 mg/mL = 7 mL/h. Dieser Zusammenhang ist linear: Verdoppelt man das Körpergewicht, verdoppelt sich die benötigte Infusionsrate. In der Intensivmedizin werden solche Berechnungen für Katecholamine, Sedativa und Analgetika täglich durchgeführt. Ein Rechenfehler kann lebensbedrohliche Über- oder Unterdosierungen verursachen.",
          hints: ["Gesamtdosis = spezifische Dosis × Körpergewicht", "Volumen/h = Gesamtdosis / Konzentration"],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: 'ma-5-02',
      title: "Quadratische Funktionen",
      content: `# Quadratische Funktionen

## Allgemeine und Scheitelpunktform

Eine quadratische Funktion hat die allgemeine Form **f(x) = ax² + bx + c** mit dem Leitkoeffizienten a ≠ 0. Der Graph ist eine **Parabel**. Ist a > 0, öffnet die Parabel nach oben (Minimum); ist a < 0, öffnet sie nach unten (Maximum). |a| bestimmt die "Breite" der Parabel: Großes |a| → schmale Parabel; kleines |a| → flache Parabel.

Die **Scheitelpunktform** f(x) = a(x − xs)² + ys ist besonders anschaulich: Der Scheitelpunkt S(xs|ys) ist der Hoch- oder Tiefpunkt der Parabel. Die Umformung von der allgemeinen in die Scheitelpunktform erfolgt durch **quadratische Ergänzung**.

## Scheitelpunkt berechnen

Aus der allgemeinen Form erhält man den Scheitelpunkt mit:
- **xs = −b/(2a)**
- **ys = f(xs) = c − b²/(4a)**

Alternativ: quadratische Ergänzung. Beispiel: f(x) = 2x² − 8x + 3
= 2(x² − 4x) + 3
= 2(x² − 4x + 4 − 4) + 3
= 2(x − 2)² − 8 + 3
= 2(x − 2)² − 5

Scheitelpunkt: S(2|−5), Öffnung nach oben (a = 2 > 0).

## Nullstellen und Diskriminante

Die **Nullstellen** einer quadratischen Funktion berechnet man mit der **Lösungsformel** (pq-Formel oder Mitternachtsformel):

**Mitternachtsformel**: x₁₂ = (−b ± √(b² − 4ac)) / (2a)

Der Ausdruck unter der Wurzel heißt **Diskriminante**: **D = b² − 4ac**

- D > 0: **zwei verschiedene reelle Nullstellen**
- D = 0: **genau eine Nullstelle** (Berührpunkt mit der x-Achse)
- D < 0: **keine reelle Nullstelle** (Parabel berührt x-Achse nicht)

**pq-Formel** (für normierte Form x² + px + q = 0):
x₁₂ = −p/2 ± √((p/2)² − q)

## Symmetrie

Jede Parabel f(x) = ax² + bx + c ist **achsensymmetrisch** zur vertikalen Geraden x = xs = −b/(2a). Diese Symmetrieachse halbiert die Strecke zwischen den beiden Nullstellen: xs = (x₁ + x₂)/2.

## Satz von Vieta

Bei normierten Gleichungen x² + px + q = 0 gilt der **Satz von Vieta**:
- x₁ + x₂ = −p (Summe der Nullstellen)
- x₁ · x₂ = q (Produkt der Nullstellen)

Dies ermöglicht oft eine schnelle Bestimmung der Nullstellen ohne Rechnung.

## Anwendungen

Quadratische Funktionen modellieren viele physikalische Vorgänge: Wurfparabeln, kinetische Energie (E_kin = ½mv²), die Beziehung zwischen Radius und Fläche eines Kreises (A = πr²). In der Pharmakologie erscheinen quadratische Terme in komplexeren Dosis-Wirkungsmodellen und bei der Berechnung der Bioverfügbarkeit bei bestimmten Freisetzungskinetiken.`,
      lernziele: [
        "Quadratische Funktionen in allgemeiner Form und Scheitelpunktform darstellen und ineinander umwandeln.",
        "Scheitelpunkt, Öffnungsrichtung und Symmetrieachse einer Parabel bestimmen.",
        "Nullstellen mit der Mitternachtsformel berechnen und die Diskriminante zur Fallunterscheidung nutzen.",
        "Den Satz von Vieta anwenden, um Nullstellen schnell zu bestimmen.",
        "Quadratische Funktionen in physikalischen und biologischen Kontexten erkennen und interpretieren.",
      ],
      sections: [
        {
          heading: "Allgemeine Form und Scheitelpunktform",
          text: "f(x) = ax² + bx + c (allgemein) und f(x) = a(x − xs)² + ys (Scheitelpunktform) sind zwei äquivalente Darstellungen einer Parabel. Der Scheitelpunkt S(xs|ys) ergibt sich direkt aus der Scheitelpunktform. Aus der allgemeinen Form: xs = −b/(2a), ys = f(xs). Die Umformung zwischen beiden Formen erfolgt durch quadratische Ergänzung. Der Leitkoeffizient a entscheidet über Öffnungsrichtung und Breite der Parabel.",
          merksatz: "Scheitelpunkt: xs = −b/(2a), ys = f(xs). a > 0: Parabel öffnet oben (Minimum). a < 0: Parabel öffnet unten (Maximum).",
        },
        {
          heading: "Diskriminante und Nullstellen",
          text: "Die Diskriminante D = b² − 4ac entscheidet über die Anzahl der Nullstellen einer quadratischen Funktion. D > 0: zwei Nullstellen x₁₂ = (−b ± √D)/(2a). D = 0: genau eine Nullstelle x = −b/(2a) (Parabelscheitel liegt auf der x-Achse). D < 0: keine reellen Nullstellen (Parabel liegt ganz ober- oder unterhalb der x-Achse). Die pq-Formel gilt für normierte Gleichungen (Leitkoeffizient = 1).",
          merksatz: "D = b² − 4ac: D > 0 → 2 Nullstellen; D = 0 → 1 Nullstelle; D < 0 → keine reelle Nullstelle.",
        },
        {
          heading: "Satz von Vieta",
          text: "Für x² + px + q = 0 gilt: x₁ + x₂ = −p und x₁ · x₂ = q. Dieses Werkzeug erlaubt es, Nullstellen durch Raten (z. B. bei ganzzahligen Lösungen) oder Überprüfen zu finden. Beispiel: x² − 5x + 6 = 0 → p = −5, q = 6; gesucht sind zwei Zahlen mit Summe 5 und Produkt 6 → x₁ = 2, x₂ = 3. Vieta ist besonders hilfreich bei MedAT-Aufgaben, wo Zeitdruck herrscht.",
          merksatz: "Vieta: x₁ + x₂ = −p; x₁ · x₂ = q. Zwei Zahlen mit gegebener Summe und Produkt finden.",
        },
        {
          heading: "Medizinische Relevanz quadratischer Zusammenhänge",
          text: "Die Michaelis-Menten-Kinetik und andere biochemische Reaktionen folgen zu Beginn oft quadratischen Näherungen. Kinetische Energie E = ½mv² und die Fläche eines Blutgefäßquerschnitts A = πr² sind quadratische Funktionen physikalischer Größen. In der Pharmakokinetik erscheinen quadratische Terme in Polyexponentialmodellen für die Plasmakonzentrations-Zeit-Kurve bei Zwei-Kompartiment-Modellen.",
          merksatz: "E_kin = ½mv²: quadratisch in v. A = πr²: quadratisch in r. Kleine Änderungen im Radius bewirken große Flächenänderungen.",
        },
      ],
      merksätze: [
        "f(x) = ax² + bx + c: a ≠ 0, Graph ist Parabel.",
        "a > 0: Öffnung nach oben (Minimum); a < 0: Öffnung nach unten (Maximum).",
        "Scheitelpunkt xs = −b/(2a), ys = f(xs).",
        "Scheitelpunktform: f(x) = a(x − xs)² + ys.",
        "Mitternachtsformel: x₁₂ = (−b ± √(b²−4ac))/(2a).",
        "Diskriminante D = b² − 4ac: D > 0 → 2 NS; D = 0 → 1 NS; D < 0 → 0 NS.",
        "Satz von Vieta: x₁+x₂ = −p; x₁·x₂ = q (normierte Form).",
        "Symmetrieachse der Parabel: x = xs = −b/(2a).",
        "Quadratische Ergänzung: x² + px = (x + p/2)² − (p/2)².",
        "Nullstellen und Scheitelpunkt teilen dieselbe Symmetrieachse: xs = (x₁+x₂)/2.",
      ],
      altfrage: {
        question: "Erklären Sie die Bedeutung der Diskriminante einer quadratischen Gleichung und beschreiben Sie, wie Sie die Nullstellen einer Parabel grafisch und rechnerisch bestimmen.",
        answer: "Die Diskriminante D = b² − 4ac ist der Term unter der Wurzel in der Mitternachtsformel x₁₂ = (−b ± √D)/(2a). Sie entscheidet über die Anzahl der reellen Nullstellen: Ist D > 0, hat die quadratische Funktion zwei verschiedene reelle Nullstellen, und die Parabel schneidet die x-Achse an zwei Stellen. Ist D = 0, gibt es genau eine Nullstelle (Doppelwurzel), und der Scheitelpunkt liegt genau auf der x-Achse. Ist D < 0, gibt es keine reellen Nullstellen, d. h. die Parabel verläuft entweder vollständig oberhalb (a > 0) oder vollständig unterhalb (a < 0) der x-Achse. Grafisch lassen sich Nullstellen als Schnittpunkte des Graphen mit der x-Achse ablesen. Rechnerisch nutzt man die Mitternachtsformel oder – bei normierten Gleichungen – die pq-Formel x₁₂ = −p/2 ± √((p/2)² − q). Eine Alternative ist die Faktorisierung: Kennt man eine Nullstelle x₁, lässt sich f(x) als a(x − x₁)(x − x₂) schreiben, wobei x₂ durch Vieta (x₁·x₂ = c/a) bestimmt wird. In medizinischen Anwendungen, etwa beim Berechnen der maximalen Konzentration oder optimalen Dosierung in einfachen quadratischen Modellen, ist die Kenntnis des Scheitelpunkts (nicht der Nullstellen) oft das eigentliche Ziel.",
      },
      klinischerBezug: "Die kinetische Energie eines Blutpartikels E = ½mv² ist quadratisch in der Strömungsgeschwindigkeit v, was erklärt, warum Turbulenzen und Scherkräfte bei Stenosen mit zunehmendem Schweregrad überproportional ansteigen. Der Querschnitt eines Blutgefäßes A = πr² hängt quadratisch vom Radius ab: Eine Halbierung des Radius (z. B. durch Arteriosklerose) reduziert die Querschnittsfläche auf ein Viertel und erhöht den Strömungswiderstand nach Hagen-Poiseuille auf das 16-Fache. In Zwei-Kompartiment-Pharmakokinetikmodellen erscheinen biexponentielle Kurven, deren frühes Abklingverhalten durch quadratische Näherungen beschrieben werden kann.",
      selfTest: [
        {
          question: "Welchen Scheitelpunkt hat die Parabel f(x) = 2x² − 8x + 5?",
          options: ["S(2|−3)", "S(−2|13)", "S(2|5)", "S(4|−3)", "S(−4|69)"],
          correctIndex: 0,
          explanation: "xs = −b/(2a) = −(−8)/(2·2) = 8/4 = 2. ys = f(2) = 2·4 − 8·2 + 5 = 8 − 16 + 5 = −3. Scheitelpunkt: S(2|−3). Da a = 2 > 0, öffnet die Parabel nach oben und S ist ein Minimum. Das Verständnis des Scheitelpunkts ist zentral: In Optimierungsproblemen (z. B. maximale Konzentration, minimale Kosten) sucht man genau diesen Punkt.",
          hints: ["xs = −b/(2a) = −(−8)/(4) = 2", "ys = f(2) = 2·4 − 16 + 5"],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Die quadratische Gleichung x² − 5x + 6 = 0 hat die Lösungen:",
          options: ["x = 1 und x = 6", "x = 2 und x = 3", "x = −2 und x = −3", "x = 5 und x = 1", "keine reellen Lösungen"],
          correctIndex: 1,
          explanation: "Satz von Vieta: x₁ + x₂ = 5 und x₁ · x₂ = 6. Zwei Zahlen mit Summe 5 und Produkt 6: 2 + 3 = 5, 2 · 3 = 6. Also x₁ = 2, x₂ = 3. Probe mit Mitternachtsformel: D = 25 − 24 = 1 > 0 → x = (5 ± 1)/2 → x₁ = 3, x₂ = 2. Vieta ist bei MedAT-Aufgaben oft der schnellere Weg, wenn man ganzzahlige Lösungen erraten kann.",
          hints: ["Vieta: Summe = 5, Produkt = 6", "Zwei Zahlen mit Summe 5 und Produkt 6 suchen"],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Für welche Werte der Diskriminante hat eine quadratische Gleichung keine reellen Lösungen?",
          options: ["D > 0", "D = 0", "D < 0", "D ≥ 0", "D ≠ 0"],
          correctIndex: 2,
          explanation: "Die Diskriminante D = b² − 4ac entscheidet: D > 0 → zwei verschiedene reelle Lösungen; D = 0 → genau eine (doppelte) reelle Lösung; D < 0 → keine reellen Lösungen (die Parabel schneidet die x-Achse nicht). Bei D < 0 gibt es nur komplexe Lösungen, die für das MedAT keine Relevanz haben. Grafisch bedeutet D < 0, dass die Parabel entweder vollständig über (a > 0) oder vollständig unter (a < 0) der x-Achse liegt.",
          hints: ["D < 0 → √D existiert nicht im Reellen", "Grafisch: Parabel berührt x-Achse nicht"],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Aussage trifft auf f(x) = −3(x − 2)² + 7 zu?",
          options: [
            "Die Parabel öffnet nach oben und hat ein Minimum bei S(2|7).",
            "Die Parabel öffnet nach unten und hat ein Maximum bei S(2|7).",
            "Die Parabel öffnet nach oben und hat ein Maximum bei S(−2|7).",
            "Die Parabel öffnet nach unten und hat ein Minimum bei S(2|7).",
            "Die Parabel öffnet nach oben und hat ein Minimum bei S(−2|−7).",
          ],
          correctIndex: 1,
          explanation: "In der Scheitelpunktform f(x) = a(x − xs)² + ys gilt: a = −3 < 0 → Öffnung nach unten → Maximum. Der Scheitelpunkt liegt bei xs = 2 (Vorzeichen beachten: (x − 2)²) und ys = 7. Also: Maximum bei S(2|7). Die Parabel liegt vollständig unterhalb der Horizontalen y = 7. In Optimierungsaufgaben sucht man bei a < 0 den maximalen Funktionswert, der immer im Scheitelpunkt liegt.",
          hints: ["a = −3 < 0: Öffnung nach unten → Maximum", "Scheitelpunkt direkt aus xs = 2, ys = 7 ablesen"],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Berechnen Sie die Nullstellen von f(x) = x² − 4x − 5.",
          options: ["x = 5 und x = −1", "x = −5 und x = 1", "x = 4 und x = 1", "x = 2 und x = −3", "keine reellen Nullstellen"],
          correctIndex: 0,
          explanation: "Mitternachtsformel: a = 1, b = −4, c = −5. D = 16 − 4·(−5) = 16 + 20 = 36. x₁₂ = (4 ± 6)/2. x₁ = 10/2 = 5, x₂ = −2/2 = −1. Probe via Vieta: x₁ + x₂ = 5 + (−1) = 4 = −(−4). x₁ · x₂ = 5 · (−1) = −5. Beide Nullstellen liegen auf verschiedenen Seiten der Symmetrieachse xs = 2.",
          hints: ["D = 16 − 4·1·(−5) = 16 + 20 = 36", "x = (4 ± √36)/2 = (4 ± 6)/2"],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Eine Parabel f(x) = ax² + bx + c hat ihren Scheitelpunkt bei S(3|4) und verläuft durch den Punkt P(1|12). Welchen Wert hat a?",
          options: ["a = 1", "a = 2", "a = 3", "a = 4", "a = 0,5"],
          correctIndex: 1,
          explanation: "In Scheitelpunktform: f(x) = a(x − 3)² + 4. Einsetzen von P(1|12): 12 = a(1 − 3)² + 4 = a·4 + 4 → 8 = 4a → a = 2. Vollständige Gleichung: f(x) = 2(x − 3)² + 4 = 2x² − 12x + 22. Probe: f(1) = 2 − 12 + 22 = 12. f(3) = 18 − 36 + 22 = 4. a = 2 > 0 → Öffnung nach oben, S ist Minimum.",
          hints: ["Scheitelpunktform: f(x) = a(x − 3)² + 4", "P(1|12) einsetzen und nach a auflösen"],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Welches ist die normierte quadratische Gleichung, wenn die Nullstellen x₁ = −2 und x₂ = 5 bekannt sind?",
          options: ["x² − 3x − 10 = 0", "x² + 3x − 10 = 0", "x² − 7x + 10 = 0", "x² + 7x − 10 = 0", "x² − 3x + 10 = 0"],
          correctIndex: 0,
          explanation: "Aus Vieta: x₁ + x₂ = −2 + 5 = 3 = −p → p = −3. x₁ · x₂ = −2 · 5 = −10 = q. Normierte Gleichung: x² + px + q = x² − 3x − 10 = 0. Probe: Mitternachtsformel: D = 9 − 4·(−10) = 49. x = (3 ± 7)/2 → x₁ = 5, x₂ = −2. Diese umgekehrte Anwendung von Vieta (von Nullstellen zur Gleichung) ist häufig im MedAT gefragt.",
          hints: ["p = −(x₁ + x₂) = −3; q = x₁ · x₂ = −10", "Normierte Form: x² − 3x − 10 = 0"],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Der Querschnitt einer Arterie beträgt A = πr² mit r = 3 mm. Um wie viel Prozent ändert sich die Fläche, wenn r auf 2 mm sinkt?",
          options: ["ca. −33 %", "ca. −44 %", "ca. −56 %", "ca. −67 %", "ca. −25 %"],
          correctIndex: 2,
          explanation: "A₁ = π·9 mm² und A₂ = π·4 mm². Relative Änderung: (A₂ − A₁)/A₁ = (4 − 9)/9 = −5/9 ≈ −55,6 % ≈ −56 %. Das ist das klinisch wichtige Prinzip: Eine Reduktion des Radius um nur ein Drittel (von 3 auf 2 mm) verringert die Durchblutungsfläche um mehr als die Hälfte. Nach Hagen-Poiseuille steigt gleichzeitig der Strömungswiderstand auf (3/2)⁴ ≈ 5-faches, was die gravierenden Folgen einer Gefäßverengung verdeutlicht.",
          hints: ["A ~ r², daher A₂/A₁ = (r₂/r₁)² = (2/3)² = 4/9", "Relative Änderung = (4/9 − 1) = −5/9"],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: 'ma-5-03',
      title: "Exponentialfunktionen",
      content: `# Exponentialfunktionen

## Grundform und Eigenschaften

Die Exponentialfunktion hat die allgemeine Form **f(x) = a · bˣ** mit der Basis b > 0, b ≠ 1, und dem Vorfaktor a > 0. Die wichtigste Basis ist die **Eulersche Zahl e ≈ 2,71828...**, was zur natürlichen Exponentialfunktion f(x) = eˣ führt.

Eigenschaften der Exponentialfunktion:
- **Definitionsbereich**: D = ℝ (alle reellen Zahlen)
- **Wertebereich**: W = (0, ∞) (stets positiv!)
- **y-Achsenabschnitt**: f(0) = a · b⁰ = a
- **Horizontale Asymptote**: y = 0 (x → −∞)
- **Monotonie**: b > 1 → streng monoton steigend (Wachstum); 0 < b < 1 → streng monoton fallend (Zerfall)
- **Keine Nullstellen**: Da f(x) = a · bˣ > 0 für alle x gilt

## Wachstum und Zerfall

**Exponentielles Wachstum** (b > 1 oder positiver Exponent): f(t) = f₀ · eᵏᵗ (k > 0)

Typische Beispiele: Bakterienwachstum, Zinseszins, unkontrollierte Zellvermehrung.

**Exponentieller Zerfall** (0 < b < 1 oder negativer Exponent): f(t) = f₀ · e⁻ᵏᵗ (k > 0)

Typische Beispiele: Radioaktiver Zerfall, Medikamentenabbau im Blut (Pharmakokinetik erster Ordnung), Abklingen elektrischer Ströme.

## Halbwertszeit

Die **Halbwertszeit T₁/₂** ist die Zeit, nach der eine exponentiell abnehmende Größe auf die Hälfte ihres Ausgangswertes gesunken ist:

f(T₁/₂) = f₀/2 = f₀ · e^(−k·T₁/₂)

1/2 = e^(−k·T₁/₂)

ln(1/2) = −k·T₁/₂

**T₁/₂ = ln(2)/k ≈ 0,693/k**

Nach n Halbwertszeiten verbleiben: f(n·T₁/₂) = f₀ · (1/2)ⁿ

## Verdopplungszeit

Das Pendant beim Wachstum ist die **Verdopplungszeit T₂**:

T₂ = ln(2)/k ≈ 0,693/k

Die Formel ist identisch — der Unterschied liegt nur im Kontext (Zerfall vs. Wachstum).

## Eulersche Zahl e

e ≈ 2,71828 ist die Basis der natürlichen Exponentialfunktion. Sie ist definiert als:
- e = lim(n→∞)(1 + 1/n)ⁿ
- e ist die Basis, für welche die Exponentialfunktion ihre eigene Ableitung ist: (eˣ)' = eˣ

## Die e-Funktion in der Pharmakokinetik

Bei der **Kinetik erster Ordnung** gilt: Die Eliminationsrate ist proportional zur aktuellen Konzentration. Das führt zur Differentialgleichung dC/dt = −k·C mit der Lösung:

**C(t) = C₀ · e^(−k·t)**

wobei C₀ die Anfangskonzentration und k die Eliminationskonstante ist. Der pH-abhängige Ionisierungsgrad von Arzneimitteln folgt ebenfalls einer exponentiellen Beziehung (Henderson-Hasselbalch).

## Exponentialfunktionen umformen

Jede Exponentialfunktion f(x) = aˣ lässt sich als f(x) = eˣ·ln(a) schreiben, da aˣ = e^(x·ln(a)). Diese Umformung verbindet Exponential- und Logarithmusfunktion und ist für Ableitungen und Integrale unerlässlich.`,
      lernziele: [
        "Exponentialfunktionen in der Form f(t) = f₀ · e^(kt) aufstellen und Wachstum von Zerfall unterscheiden.",
        "Die Halbwertszeit T₁/₂ = ln(2)/k aus der Eliminationskonstante berechnen und umgekehrt.",
        "Den Restbestand nach einer gegebenen Zeit als Vielfaches der Halbwertszeit bestimmen.",
        "Die pharmakokinetische Gleichung C(t) = C₀ · e^(−kt) in klinischen Szenarien anwenden.",
        "Die Eigenschaften der Exponentialfunktion (Asymptote, Wertebereich, Monotonie) kennen und im Graphen identifizieren.",
      ],
      sections: [
        {
          heading: "Wachstum und Zerfall — Grundprinzip",
          text: "Exponentielles Wachstum oder Zerfall liegt vor, wenn die Änderungsrate einer Größe proportional zu ihrem aktuellen Wert ist: dN/dt = k·N. Für k > 0 (Wachstum) lautet die Lösung N(t) = N₀·eᵏᵗ, für k < 0 (Zerfall) N(t) = N₀·e^(|k|·t). Die Exponentialfunktion ist die einzige Funktion, die ihrer eigenen Ableitung entspricht: (eˣ)' = eˣ, was ihren fundamentalen Status in der Mathematik begründet.",
          merksatz: "Exponentieller Zerfall: C(t) = C₀ · e^(−kt). Wachstum: N(t) = N₀ · e^(+kt). k > 0 immer.",
        },
        {
          heading: "Halbwertszeit — Ableitung und Bedeutung",
          text: "Die Halbwertszeit ergibt sich aus C₀/2 = C₀·e^(−k·T½) → 1/2 = e^(−k·T½) → ln(1/2) = −k·T½ → T½ = ln(2)/k ≈ 0,693/k. Die Halbwertszeit ist unabhängig von der Ausgangsmenge: Egal ob 1000 mg oder 100 mg, nach einer Halbwertszeit ist stets die Hälfte übrig. Nach n Halbwertszeiten verbleiben (1/2)ⁿ des Ausgangswertes.",
          merksatz: "T½ = ln(2)/k ≈ 0,693/k. Nach einer T½: 50 %, nach zwei T½: 25 %, nach n T½: (½)ⁿ.",
        },
        {
          heading: "Pharmakologische Kinetik erster Ordnung",
          text: "Die meisten Medikamente werden nach Kinetik erster Ordnung eliminiert: Die Eliminationsrate (mg/h) ist proportional zur aktuellen Plasmakonzentration. Das bedeutet: Je höher die Konzentration, desto schneller wird eliminiert. Nach 4–5 Halbwertszeiten ist das Medikament zu ≥ 94 % eliminiert (Faustregel: praktisch vollständig weg). Das Gleichgewicht (Steady State) bei regelmäßiger Gabe wird ebenfalls nach 4–5 Halbwertszeiten erreicht.",
          merksatz: "Kinetik 1. Ordnung: C(t) = C₀·e^(−kt). Nach 5·T½ ≈ 97 % eliminiert → klinisch vollständig weg.",
        },
      ],
      merksätze: [
        "f(x) = a · bˣ: b > 1 Wachstum; 0 < b < 1 Zerfall.",
        "Natürliche Basis: e ≈ 2,718; (eˣ)' = eˣ.",
        "Exponentieller Zerfall: C(t) = C₀ · e^(−kt), k > 0.",
        "Halbwertszeit: T½ = ln(2)/k ≈ 0,693/k.",
        "Nach n Halbwertszeiten: (½)ⁿ des Ausgangswerts übrig.",
        "Horizontale Asymptote der e-Funktion: y = 0 für x → −∞.",
        "Wertebereich der Exponentialfunktion: stets (0, ∞), niemals negativ.",
        "Kinetik 1. Ordnung: Eliminationsrate ~ Konzentration.",
        "Steady State: nach 4–5 Halbwertszeiten bei regelmäßiger Dosierung.",
        "Verdopplungszeit = T½ = ln(2)/k (Formel identisch, Kontext verschieden).",
      ],
      altfrage: {
        question: "Erläutern Sie das Konzept der Halbwertszeit eines Medikaments und erklären Sie, wie die pharmakokinetische Gleichung C(t) = C₀ · e^(−kt) klinisch interpretiert wird.",
        answer: "Die Halbwertszeit T½ eines Medikaments ist die Zeit, nach der die Plasmakonzentration auf die Hälfte des vorherigen Wertes gesunken ist. Sie ergibt sich mathematisch aus der Bedingung C₀/2 = C₀ · e^(−k·T½), woraus nach Kürzen durch C₀ folgt: ln(1/2) = −k·T½, also T½ = ln(2)/k ≈ 0,693/k. Die Halbwertszeit ist eine Eigenschaft des Medikament-Körper-Systems und unabhängig von der Dosis: Unabhängig davon, ob 1 mg oder 1 g gegeben wurde, sinkt die Konzentration in jeder Halbwertszeit um 50 %. Die pharmakokinetische Gleichung C(t) = C₀ · e^(−kt) beschreibt den monoexponentiellen Konzentrationsabfall, der für die Kinetik erster Ordnung charakteristisch ist. Dies bedeutet: Die Eliminationsrate (dC/dt = −k·C) ist stets proportional zur aktuellen Konzentration — eine hohe Konzentration wird schnell abgebaut, eine niedrige langsam. Nach einer Halbwertszeit sind 50 % übrig, nach zwei 25 %, nach drei 12,5 %, nach vier 6,25 %, nach fünf ca. 3 %. In der klinischen Praxis gilt nach 4–5 Halbwertszeiten ein Medikament als praktisch vollständig eliminiert. Beim Aufbau eines Steady State bei regelmäßiger Einnahme gilt dieselbe Faustregel: Nach 4–5 Halbwertszeiten ist die Gleichgewichtskonzentration erreicht.",
      },
      klinischerBezug: "Penicillin hat eine Halbwertszeit von ca. 30–60 min und muss daher mehrmals täglich gegeben werden, während Amiodaron mit T½ ≈ 40–55 Tagen noch Wochen nach Absetzen wirksam bleibt und zahlreiche Wechselwirkungen verursachen kann. Die pharmakokinetische Gleichung C(t) = C₀·e^(−kt) ist die mathematische Grundlage für die Berechnung von Dosierungsintervallen, Aufsättigungsdosen und der Zeit bis zur vollständigen Medikamentenelimination vor Operationen. Radioaktive Isotope in der Nuklearmedizin (z. B. Technetium-99m mit T½ ≈ 6 h) unterliegen derselben Exponentialkinetik, was die Berechnung optimaler Bildgebungszeitpunkte ermöglicht.",
      selfTest: [
        {
          question: "Ein Medikament hat eine Eliminationskonstante k = 0,0693 h⁻¹. Wie lange ist die Halbwertszeit?",
          options: ["5 h", "10 h", "7 h", "14 h", "3 h"],
          correctIndex: 1,
          explanation: "T½ = ln(2)/k = 0,693/0,0693 h⁻¹ = 10 h. ln(2) ≈ 0,693 ist ein Schlüsselwert, den man auswendig kennen sollte. Die Einheit von k ist h⁻¹ (pro Stunde), also ist T½ in Stunden angegeben. Klinisches Beispiel: Bei diesem Medikament wäre nach 50 h (≈ 5 Halbwertszeiten) weniger als 3,1 % der Ausgangsdosis übrig — praktisch vollständig eliminiert.",
          hints: ["T½ = ln(2)/k ≈ 0,693/k", "T½ = 0,693/0,0693 = 10"],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Ein Patient erhält eine Einzeldosis von 400 mg eines Antibiotikums (T½ = 4 h). Wie viel mg sind nach 12 h noch im Körper?",
          options: ["25 mg", "50 mg", "100 mg", "200 mg", "12,5 mg"],
          correctIndex: 1,
          explanation: "12 h entsprechen 12/4 = 3 Halbwertszeiten. Nach 3 Halbwertszeiten verbleiben (½)³ = 1/8 der Ausgangsdosis: 400 mg · (1/8) = 50 mg. Systematisch: nach 4 h → 200 mg, nach 8 h → 100 mg, nach 12 h → 50 mg. Diese Berechnungsmethode ist schneller als die exponentielle Formel und liefert für ganzzahlige Halbwertszeiten exakte Ergebnisse.",
          hints: ["n = 12 h / 4 h = 3 Halbwertszeiten", "Restmenge = 400 · (½)³ = 400/8"],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche der folgenden Aussagen über f(x) = 3 · e^(−2x) ist FALSCH?",
          options: [
            "Die Funktion ist streng monoton fallend.",
            "Die Funktion hat keine Nullstellen.",
            "Der y-Achsenabschnitt liegt bei y = 3.",
            "Die horizontale Asymptote ist y = 0.",
            "Die Funktion nimmt für x → ∞ negative Werte an.",
          ],
          correctIndex: 4,
          explanation: "f(x) = 3·e^(−2x): Da e^(−2x) > 0 für alle x und der Vorfaktor 3 > 0, gilt f(x) > 0 für alle x ∈ ℝ. Die Funktion kann niemals negative Werte annehmen — das ist eine fundamentale Eigenschaft der Exponentialfunktion. Für x → ∞ nähert sich f(x) von oben der Asymptote y = 0, ohne sie je zu erreichen. Alle anderen Aussagen sind korrekt: fallend (negativer Exponent), keine Nullstellen, f(0) = 3, y = 0 als Asymptote.",
          hints: ["e^(−2x) > 0 für alle x; Vorfaktor 3 > 0", "Exponentialfunktion ist stets positiv"],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Nach einer radioaktiven Bestrahlung enthält eine Probe noch 12,5 % der ursprünglichen Aktivität. Wie viele Halbwertszeiten sind vergangen?",
          options: ["2", "3", "4", "5", "6"],
          correctIndex: 1,
          explanation: "12,5 % = 0,125 = (½)³. Es sind also 3 Halbwertszeiten vergangen. Probe: (½)¹ = 50 %, (½)² = 25 %, (½)³ = 12,5 %. Diese Berechnung kehrt die Halbwertszeitformel um: Statt der Restmenge nach n Halbwertszeiten suchen wir n aus der bekannten Restmenge. In der Nuklearmedizin ist das relevant für die Strahlenschutzplanung: Wann ist ein Patient wieder entlassungsfähig?",
          hints: ["12,5 % = 1/8 = (½)³", "n = log₂(8) = 3"],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Eine Bakterienkultur verdoppelt sich alle 20 min. Wie viele Bakterien gibt es nach 2 h, wenn zu Beginn 1000 Bakterien vorhanden waren?",
          options: ["32 000", "64 000", "16 000", "128 000", "48 000"],
          correctIndex: 1,
          explanation: "2 h = 120 min. Anzahl der Verdopplungen: n = 120/20 = 6. Anzahl = 1000 · 2⁶ = 1000 · 64 = 64 000. Oder: f(t) = 1000 · e^(k·t) mit k = ln(2)/20 min. f(120) = 1000 · e^(ln(2)/20 · 120) = 1000 · e^(6·ln(2)) = 1000 · 2⁶ = 64 000. Exponentielles Bakterienwachstum erklärt, warum eine unkontrollierte Infektion so schnell lebensbedrohlich werden kann.",
          hints: ["n Verdopplungen in 120 min: n = 120/20 = 6", "Anzahl = 1000 · 2⁶"],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Die Gleichgewichtskonzentration (Steady State) eines oral verabreichten Medikaments mit T½ = 8 h wird bei regelmäßiger Einnahme nach ca. wie vielen Stunden erreicht?",
          options: ["8 h", "16 h", "24 h", "32–40 h", "4 h"],
          correctIndex: 3,
          explanation: "Der Steady State wird nach 4–5 Halbwertszeiten erreicht: 4 · 8 h = 32 h bis 5 · 8 h = 40 h. Dies gilt unabhängig von Dosis oder Dosierungsintervall. Nach 4 T½ sind ca. 94 % des Steady-State-Niveaus erreicht, nach 5 T½ ca. 97 %. Diese Faustregel ist klinisch entscheidend: Bei Aufsättigungsdosen (z. B. Amiodaron, Digitalis) überspringt man diese Phase und erreicht sofort therapeutische Spiegel, um lebensgefährliche Wartezeiten zu vermeiden.",
          hints: ["Steady State nach 4–5 T½", "4 × 8 h = 32 h, 5 × 8 h = 40 h"],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welcher Graph entspricht der Funktion f(x) = 2 · e^(−0,5x)?",
          options: [
            "Streng steigende Kurve, die die y-Achse bei y = 2 schneidet.",
            "Streng fallende Kurve, die die y-Achse bei y = 2 schneidet und sich y = 0 annähert.",
            "Parabel mit Scheitelpunkt bei (0|2).",
            "Streng fallende Kurve, die die x-Achse bei x = 2 schneidet.",
            "Gerade mit negativer Steigung durch den Ursprung.",
          ],
          correctIndex: 1,
          explanation: "f(x) = 2·e^(−0,5x): Da der Exponent −0,5x für wachsendes x immer negativer wird, fällt e^(−0,5x) von e⁰ = 1 gegen 0. Mit Vorfaktor 2: y-Achsenabschnitt f(0) = 2·1 = 2. Für x → ∞: f(x) → 0 (horizontale Asymptote y = 0). Die Funktion hat keine Nullstellen (bleibt stets positiv). Sie ist keine Gerade (nicht linear) und keine Parabel (kein x²-Term). Typischer Graph: starkes Abfallen zu Beginn, dann immer flacher werdend.",
          hints: ["Exponent −0,5x: negativ → fallende Funktion", "f(0) = 2·e⁰ = 2; Asymptote: y = 0"],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Ein Medikament wird intravenös mit C₀ = 10 mg/L appliziert. Die Eliminationskonstante ist k = 0,2 h⁻¹. Welche Konzentration liegt nach 5 h vor? (e^(−1) ≈ 0,368)",
          options: ["3,68 mg/L", "1,84 mg/L", "5,0 mg/L", "0,37 mg/L", "2,0 mg/L"],
          correctIndex: 0,
          explanation: "C(5) = C₀ · e^(−k·t) = 10 · e^(−0,2·5) = 10 · e^(−1) ≈ 10 · 0,368 = 3,68 mg/L. Die Halbwertszeit dieses Medikaments beträgt T½ = ln(2)/0,2 = 0,693/0,2 ≈ 3,47 h. Nach 5 h hat man somit etwa 1,44 Halbwertszeiten durchlaufen, was zu (½)^1,44 ≈ 0,368 = 36,8 % des Ausgangswerts führt — konsistent mit e^(−1). Klinisch: Liegt dieser Wert über dem therapeutischen Minimum?",
          hints: ["C(t) = C₀ · e^(−kt); kt = 0,2 · 5 = 1", "C(5) = 10 · e^(−1) = 10 · 0,368"],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: 'ma-5-04',
      title: "Logarithmusfunktionen",
      content: `# Logarithmusfunktionen

## Definition und Grundbegriffe

Der Logarithmus ist die **Umkehrfunktion der Exponentialfunktion**. Für die Basis b > 0, b ≠ 1 gilt:

**log_b(x) = y ⟺ b^y = x**

Wichtige Spezialfälle:
- **log₁₀(x)** (Zehnerlogarithmus, oft kurz "log"): Basis 10
- **ln(x)** (natürlicher Logarithmus): Basis e ≈ 2,718
- **log₂(x)** (Binärlogarithmus): Basis 2

## Rechenregeln

Die wichtigsten Logarithmengesetze (für alle Basen gleich):

1. **Produktregel**: log(a · b) = log(a) + log(b)
2. **Quotientenregel**: log(a/b) = log(a) − log(b)
3. **Potenzregel**: log(aⁿ) = n · log(a)
4. **Basiswechsel**: log_b(x) = ln(x)/ln(b) = log(x)/log(b)
5. **Spezialwerte**: log(1) = 0; log(b) = 1; log(b^n) = n; b^(log_b(x)) = x

## Eigenschaften der Logarithmusfunktion

- **Definitionsbereich**: D = (0, ∞) — nur positive Zahlen!
- **Wertebereich**: W = ℝ (alle reellen Zahlen)
- **Nullstelle**: x = 1 (da log(1) = 0 für jede Basis)
- **Vertikale Asymptote**: x = 0 (Funktion geht gegen −∞)
- **Monotonie**: b > 1 → streng monoton steigend; 0 < b < 1 → streng monoton fallend
- **Kein Maximum, kein Minimum**: Funktion wächst unbegrenzt (aber sehr langsam)

## pH-Wert — Logarithmus in der Medizin

Der **pH-Wert** ist definiert als negativer dekadischer Logarithmus der Wasserstoffionenkonzentration:

**pH = −log₁₀([H⁺])** oder **pH = −log₁₀([H₃O⁺])**

Beispiele:
- [H⁺] = 10⁻⁷ mol/L → pH = −log(10⁻⁷) = 7 (neutral)
- [H⁺] = 10⁻² mol/L → pH = 2 (stark sauer)
- [H⁺] = 10⁻¹⁴ mol/L → pH = 14 (stark basisch)

**Umrechnung pH → [H⁺]**: [H⁺] = 10^(−pH)

Eine pH-Änderung um 1 entspricht einer **10-fachen** Änderung der [H⁺]! Eine Änderung um 2 Einheiten entspricht einem Faktor 100.

## Henderson-Hasselbalch-Gleichung

Die Henderson-Hasselbalch-Gleichung beschreibt den pH einer Pufferlösung:

**pH = pKₐ + log₁₀([A⁻]/[HA])**

wobei [A⁻] die Konzentration der konjugierten Base und [HA] die Konzentration der schwachen Säure ist. Bei pH = pKₐ liegt genau ein 1:1-Verhältnis vor — der Puffer ist am effektivsten in einem pH-Bereich von pKₐ ± 1.

## Logarithmische Skalen (Semilog-Plot)

Wenn man f(t) = C₀ · e^(−kt) logarithmiert:
ln(C) = ln(C₀) − k·t

Das heißt: **ln(C) ist eine lineare Funktion von t** mit Steigung −k und Achsenabschnitt ln(C₀). Trägt man Konzentrationswerte in einem **semilogarithmischen Diagramm** (y-Achse: log-Skala, x-Achse: lineare Skala) auf, erscheint eine Kinetik erster Ordnung als Gerade. Dies ist die experimentelle Methode zur Bestimmung von k und T½.

## Basiswechsel und Umrechnung

Jeder Logarithmus kann in einen anderen umgerechnet werden:
log_b(x) = ln(x)/ln(b)

Besonders nützlich: log₂(x) = ln(x)/ln(2) = ln(x)/0,693

Diese Umrechnung ist bei der Berechnung von Halbwertszeiten wichtig: T½ = log₂(2)/k = 1/k (wenn k in "pro Halbwertszeit" gemessen wird).`,
      lernziele: [
        "Den Logarithmus als Umkehrfunktion der Exponentialfunktion verstehen und Logarithmengesetze sicher anwenden.",
        "Den pH-Wert aus der Protonenkonzentration berechnen und die Bedeutung des negativen dekadischen Logarithmus erklären.",
        "Die Henderson-Hasselbalch-Gleichung anwenden, um den pH von Pufferlösungen zu bestimmen.",
        "Logarithmische Skalen (Semilog-Plots) interpretieren und erkennen, wann eine Kinetik erster Ordnung vorliegt.",
        "Beliebige Logarithmen durch Basiswechsel auf ln oder log₁₀ zurückführen.",
      ],
      sections: [
        {
          heading: "Logarithmengesetze und ihre Anwendung",
          text: "Die drei Grundgesetze des Logarithmus — Produktregel, Quotientenregel und Potenzregel — erlauben es, Produkte in Summen, Quotienten in Differenzen und Potenzen in Produkte umzuwandeln. Diese Eigenschaft war historisch für Berechnungen ohne Taschenrechner unerlässlich und ist heute beim analytischen Umformen von Exponentialgleichungen wichtig. Basiswechsel: log_b(x) = ln(x)/ln(b). Spezialwerte: ln(e) = 1, ln(1) = 0, log(10) = 1, log(100) = 2.",
          merksatz: "log(a·b) = log(a) + log(b); log(a/b) = log(a) − log(b); log(aⁿ) = n·log(a). Immer!",
        },
        {
          heading: "pH-Wert und Protonenkonzentration",
          text: "pH = −log₁₀([H⁺]). Der Normalblut-pH liegt bei 7,35–7,45. Eine Azidose (pH < 7,35) bedeutet erhöhte [H⁺], eine Alkalose (pH > 7,45) erniedrigte [H⁺]. Der logarithmische Maßstab ist medizinisch enorm bedeutsam: pH 7,0 entspricht [H⁺] = 100 nmol/L, pH 7,4 entspricht [H⁺] ≈ 40 nmol/L. Eine Verdoppelung von [H⁺] entspricht nur einer Erniedrigung des pH um log(2) ≈ 0,3 Einheiten.",
          merksatz: "pH = −log[H⁺]. pH ↑ → [H⁺] ↓ (basisch). pH ↓ → [H⁺] ↑ (sauer). pH 7,35–7,45: Normalbereich.",
        },
        {
          heading: "Semilog-Plot und Kinetik erster Ordnung",
          text: "Logarithmiert man die Formel C(t) = C₀·e^(−kt), ergibt sich ln C = ln C₀ − k·t. Das ist eine lineare Gleichung in t: y = b + m·t mit y = ln C, b = ln C₀ und m = −k. Im halblogarithmischen Diagramm (log C vs. t) erscheint eine Kinetik erster Ordnung daher als Gerade. Aus der Steigung liest man −k ab, aus dem Achsenabschnitt ln C₀. Diese Linearisierung ist die Grundlage der experimentellen Pharmakokinetik.",
          merksatz: "ln C vs. t linear → Kinetik 1. Ordnung. Steigung = −k, Achsenabschnitt = ln C₀. T½ = 0,693/k.",
        },
      ],
      merksätze: [
        "log_b(x) = y ⟺ bʸ = x. Logarithmus ist Umkehrfunktion der Potenz.",
        "Produktregel: ln(a·b) = ln(a) + ln(b).",
        "Quotientenregel: ln(a/b) = ln(a) − ln(b).",
        "Potenzregel: ln(aⁿ) = n · ln(a).",
        "pH = −log₁₀([H⁺]); [H⁺] = 10^(−pH).",
        "pH-Änderung um 1 → 10-fache [H⁺]-Änderung.",
        "ln(1) = 0; ln(e) = 1; log(1) = 0; log(10) = 1.",
        "Semilog-Plot: ln C linear in t → Kinetik erster Ordnung.",
        "Basiswechsel: log_b(x) = ln(x)/ln(b).",
        "Henderson-Hasselbalch: pH = pKₐ + log([A⁻]/[HA]).",
      ],
      altfrage: {
        question: "Erklären Sie die Definition des pH-Wertes mithilfe des Logarithmus, und beschreiben Sie, warum eine pH-Änderung um 1 Einheit klinisch bedeutsam ist.",
        answer: "Der pH-Wert ist definiert als der negative dekadische Logarithmus der Wasserstoffionenkonzentration: pH = −log₁₀([H⁺]). Diese Definition nutzt den Logarithmus, weil [H⁺] im physiologischen Bereich sehr kleine Werte annimmt (ca. 10⁻⁷ mol/L im Neutralbereich), die ohne Logarithmus schwer handhabbar wären. Der negative Logarithmus macht aus diesen kleinen Zahlen positive, anschauliche Werte: Bei [H⁺] = 10⁻⁷ mol/L ergibt sich pH = −(−7) = 7. Da die Logarithmusfunktion die Umkehrung der Exponentialfunktion ist, entspricht eine pH-Änderung um genau 1 Einheit einer 10-fachen Änderung der [H⁺]: Eine pH-Senkung von 7,4 auf 6,4 bedeutet eine 10-fach höhere Protonenkonzentration. In der Klinik ist das von enormer Bedeutung: Der physiologische Blut-pH liegt bei 7,35–7,45. Eine pH-Senkung auf 7,0 (Azidose) entspricht bereits einer mehr als doppelt so hohen [H⁺] und führt zu Herzrhythmusstörungen, Vasodilatation und Bewusstseinstrübung. Ein pH unter 6,8 oder über 7,8 ist meist mit dem Leben nicht vereinbar. Der Logarithmus komprimiert also eine riesige Spanne von [H⁺]-Werten (von 10⁻¹ bis 10⁻¹⁴ mol/L) auf eine handhabbare Skala von pH 1 bis 14.",
      },
      klinischerBezug: "Der arterielle Blut-pH (7,35–7,45) wird über das Bikarbonat-Puffersystem reguliert, das der Henderson-Hasselbalch-Gleichung pH = 6,1 + log([HCO₃⁻]/0,03·pCO₂) folgt; kleinste Abweichungen sind diagnostisch entscheidend für respiratorische vs. metabolische Azidose oder Alkalose. Der pKₐ-Wert eines Medikaments bestimmt über die Henderson-Hasselbalch-Gleichung, welcher Anteil bei gegebenem pH ionisiert ist — ionisierte Formen können Zellmembranen nicht passieren, was für die Resorption, Verteilung und tubuläre Rückresorption von Arzneimitteln entscheidend ist (Ion-Trapping-Phänomen). Semilogarithmische Konzentrations-Zeit-Kurven sind in der klinischen Pharmakologie Standard zur Berechnung von Eliminationshalbwertszeit, Clearance und Verteilungsvolumen aus Blutspiegelmessungen.",
      selfTest: [
        {
          question: "Welchen pH-Wert hat eine Lösung mit [H⁺] = 10⁻⁴ mol/L?",
          options: ["pH = −4", "pH = 0,4", "pH = 4", "pH = 10", "pH = 40"],
          correctIndex: 2,
          explanation: "pH = −log₁₀([H⁺]) = −log₁₀(10⁻⁴) = −(−4) = 4. Eine Lösung mit pH 4 ist deutlich sauer (Normal-Blut-pH: 7,4). Umrechnung: [H⁺] = 10^(−pH) = 10^(−4). Zur Einordnung: Magensaft hat pH ≈ 1–2, Blut pH ≈ 7,4 ([H⁺] ≈ 4·10⁻⁸), Pankreassaft pH ≈ 8.",
          hints: ["pH = −log₁₀(10⁻⁴) = −(−4) = 4", "Negativer Logarithmus der negativen Potenz = positive Zahl"],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Vereinfachen Sie: ln(e⁵) + ln(1) − ln(e²).",
          options: ["3", "5", "7", "e³", "ln(3)"],
          correctIndex: 0,
          explanation: "ln(e⁵) = 5 (Potenzregel: ln(eⁿ) = n). ln(1) = 0 (da e⁰ = 1, also log(1) = 0 für jede Basis). ln(e²) = 2. Summe: 5 + 0 − 2 = 3. Diese Aufgabe prüft die Kenntnis der Spezialwerte des natürlichen Logarithmus. Alternativ als Quotient: ln(e⁵/e²) = ln(e³) = 3.",
          hints: ["ln(eⁿ) = n; ln(1) = 0", "5 + 0 − 2 = 3"],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Konzentration [H⁺] entspricht dem physiologischen Blut-pH von 7,4?",
          options: ["[H⁺] = 4·10⁻⁸ mol/L", "[H⁺] = 7,4·10⁻⁷ mol/L", "[H⁺] = 10⁻⁷ mol/L", "[H⁺] = 10^(−7,4) mol/L", "[H⁺] = 10⁻⁶ mol/L"],
          correctIndex: 3,
          explanation: "Aus pH = −log[H⁺] folgt [H⁺] = 10^(−pH) = 10^(−7,4). Das entspricht ca. 3,98·10⁻⁸ mol/L ≈ 40 nmol/L. Der exakte mathematische Ausdruck ist 10^(−7,4). Im klinischen Kontext spricht man oft von 40 nmol/L als Merkhilfe für pH 7,4. Eine Azidose liegt vor, wenn [H⁺] > 45 nmol/L (pH < 7,35), eine Alkalose, wenn [H⁺] < 35 nmol/L (pH > 7,45).",
          hints: ["[H⁺] = 10^(−pH) = 10^(−7,4)", "10^(−7,4) ≈ 4·10⁻⁸ ≈ 40 nmol/L"],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Berechnen Sie log₂(64).",
          options: ["4", "5", "6", "8", "32"],
          correctIndex: 2,
          explanation: "log₂(64) = y bedeutet 2^y = 64. Da 2⁶ = 64 (2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32, 2⁶=64), ist y = 6. Alternativ über Basiswechsel: log₂(64) = ln(64)/ln(2) = ln(2⁶)/ln(2) = 6·ln(2)/ln(2) = 6. Der Binärlogarithmus spielt in der Informatik eine zentrale Rolle und beim Berechnen von Verdopplungszeiten.",
          hints: ["2^? = 64: zählen Sie die Potenzen von 2", "2⁶ = 64 → log₂(64) = 6"],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Vereinfachen Sie log₁₀(1000) − log₁₀(10).",
          options: ["1", "2", "10", "100", "3"],
          correctIndex: 1,
          explanation: "log₁₀(1000) = log₁₀(10³) = 3. log₁₀(10) = 1. Differenz: 3 − 1 = 2. Alternativ direkt: log₁₀(1000/10) = log₁₀(100) = log₁₀(10²) = 2. Die Quotientenregel log(a/b) = log(a) − log(b) ist hier besonders elegant. Klinisches Beispiel: Der Unterschied zwischen zwei Hörpegeln in dB ist ebenfalls ein Logarithmus eines Lautstärke-Quotienten.",
          hints: ["log₁₀(1000) = 3; log₁₀(10) = 1", "Oder: log(1000/10) = log(100) = 2"],
          difficulty: 1,
          tags: [],
        },
        {
          question: "In einem Semilog-Plot von C (log-Skala) gegen t (lineare Skala) ergibt sich eine Gerade mit Steigung −0,3 und Achsenabschnitt 2 (log₁₀ C). Was ist die Anfangskonzentration C₀?",
          options: ["C₀ = 2 mg/L", "C₀ = 100 mg/L", "C₀ = 0,3 mg/L", "C₀ = 20 mg/L", "C₀ = 10 mg/L"],
          correctIndex: 1,
          explanation: "Im Semilog-Plot gilt: log C = log C₀ − k·t (falls log zur Basis 10). Bei t = 0: log C₀ = 2. Daher C₀ = 10² = 100 mg/L. Die Steigung −0,3 entspricht dem negativen Logarithmus der Abnahme pro Zeiteinheit. Aus −k·log(e) = −0,3 (wenn log₁₀ verwendet wird): Die Halbwertszeit T½ ergibt sich, wenn log C = log C₀ − 0,5·log(2) = 2 − 0,301: Das dauert 0,301/0,3 ≈ 1 Zeiteinheit.",
          hints: ["Achsenabschnitt = log C₀ = 2", "C₀ = 10² = 100"],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Eine Blutgasanalyse ergibt pCO₂ = 40 mmHg und [HCO₃⁻] = 24 mmol/L. Berechnen Sie den pH nach Henderson-Hasselbalch (pKₐ = 6,1; 0,03 × 40 = 1,2).",
          options: ["pH = 7,1", "pH = 7,4", "pH = 7,3", "pH = 6,1", "pH = 7,7"],
          correctIndex: 1,
          explanation: "Henderson-Hasselbalch: pH = pKₐ + log([HCO₃⁻]/(0,03·pCO₂)) = 6,1 + log(24/1,2) = 6,1 + log(20) = 6,1 + log(2·10) = 6,1 + log(2) + log(10) ≈ 6,1 + 0,3 + 1 = 7,4. Das ist der normale Blut-pH! Diese Berechnung illustriert die Wichtigkeit des Bikarbonat-Puffersystems und wird in der Klinik täglich bei der Interpretation von Blutgasanalysen angewendet.",
          hints: ["pH = 6,1 + log(24/1,2) = 6,1 + log(20)", "log(20) = log(2·10) = log 2 + 1 ≈ 0,3 + 1 = 1,3"],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Welches Rechengesetz des Logarithmus steckt hinter der Formel T½ = ln(2)/k?",
          options: [
            "Produktregel: ln(a·b) = ln(a) + ln(b)",
            "Quotientenregel: ln(a/b) = ln(a) − ln(b)",
            "Potenzregel: ln(aⁿ) = n·ln(a)",
            "Basiswechsel: log_b(x) = ln(x)/ln(b)",
            "Spezialwert: ln(e) = 1",
          ],
          correctIndex: 1,
          explanation: "Aus C₀/2 = C₀·e^(−k·T½) → 1/2 = e^(−k·T½) → ln(1/2) = −k·T½. Nun gilt: ln(1/2) = ln(1) − ln(2) = 0 − ln(2) = −ln(2) (Quotientenregel!). Also: −ln(2) = −k·T½ → T½ = ln(2)/k. Die Quotientenregel des Logarithmus verwandelt den Logarithmus eines Bruchs in eine Differenz von Logarithmen. Das ist das zentrale Logarithmengesetz hinter der Halbwertszeit-Berechnung.",
          hints: ["ln(1/2) = ln(1) − ln(2) = 0 − ln(2) = −ln(2)", "Quotientenregel: ln(a/b) = ln(a) − ln(b)"],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ma-5-05',
      title: "Grapheninterpretation, Asymptoten und Semilog-Plots",
      content: `# Grapheninterpretation, Asymptoten und Semilog-Plots

## Graphen und ihre Eigenschaften ablesen

Das Lesen und Interpretieren von Funktionsgraphen ist eine zentrale mathematische Kompetenz — besonders im medizinischen Kontext, wo Kurven täglich auf Monitoren, in Laborbefunden und in der wissenschaftlichen Literatur zu interpretieren sind.

**Wichtige Eigenschaften, die man aus einem Graphen ablesen kann:**
- **Nullstellen**: Schnittpunkte mit der x-Achse (f(x) = 0)
- **y-Achsenabschnitt**: Schnittpunkt mit der y-Achse (f(0))
- **Monotoniebereiche**: Bereiche, in denen f steigt oder fällt
- **Extrempunkte**: lokale Minima und Maxima (Hochpunkt, Tiefpunkt)
- **Wendepunkte**: Stellen, an denen die Kurve ihre Krümmungsrichtung wechselt
- **Asymptoten**: Grenzlinien, an die sich der Graph annähert, ohne sie zu erreichen

## Asymptoten im Detail

**Horizontale Asymptote**: Eine Gerade y = a heißt horizontale Asymptote, wenn lim(x→±∞) f(x) = a. Beispiele: f(x) = e^(−x) → y = 0 für x → ∞; f(x) = (2x+1)/(x+1) → y = 2 für x → ±∞.

**Vertikale Asymptote**: Eine Gerade x = a heißt vertikale Asymptote, wenn lim(x→a) f(x) = ±∞. Beispiele: f(x) = ln(x) → x = 0 (f → −∞); f(x) = 1/x → x = 0.

**Schräge Asymptote**: Eine Gerade y = mx + b heißt schräge Asymptote, wenn lim(x→∞) [f(x) − (mx+b)] = 0.

## Monotonie und Krümmung

Monotonie beschreibt die Steigungsrichtung des Graphen:
- **Streng monoton steigend**: f(x₁) < f(x₂) für alle x₁ < x₂
- **Streng monoton fallend**: f(x₁) > f(x₂) für alle x₁ < x₂

Krümmung beschreibt, ob sich die Steigung ändert:
- **Konvex (linksgekrümmt)**: Kurve liegt wie ein Hügel, Steigung nimmt ab
- **Konkav (rechtsgekrümmt)**: Kurve liegt wie eine Schüssel, Steigung nimmt zu
- **Wendepunkt**: Übergang zwischen Konvex und Konkav

## Semilogarithmische und doppelt-logarithmische Darstellung

In Naturwissenschaften und Medizin begegnet man häufig Daten, die sich über viele Größenordnungen erstrecken. Lineare Skalen versagen dann — logarithmische Skalen kommen zum Einsatz.

**Semilogarithmischer Plot (Semilog-Plot)**:
- y-Achse logarithmisch, x-Achse linear
- Exponentialfunktionen erscheinen als Geraden: y = A·e^(kx) → log y = log A + k·x·log e
- Anwendung: Pharmakokinetikuntersuchungen, Bakterienwachstumskurven, Radioaktivitätsmessungen

**Doppelt-logarithmischer Plot (Log-Log-Plot)**:
- Beide Achsen logarithmisch
- Potenzfunktionen y = A·xⁿ erscheinen als Geraden: log y = log A + n·log x
- Anwendung: Skalierungsgesetze in der Biologie (Allometrie), Dosis-Wirkungskurven

## Linearisierung von Daten

Die Überführung einer nichtlinearen Funktion in eine lineare durch geeignete Transformation heißt Linearisierung. Für pharmakokinetische Daten:

C(t) = C₀ · e^(−kt) → ln C = −kt + ln C₀

In einem ln C vs. t Diagramm ergibt sich eine Gerade mit:
- Steigung: m = −k → k = −m
- Achsenabschnitt: b = ln C₀ → C₀ = eᵇ
- Aus k: T½ = ln(2)/k = 0,693/k

## Graphische Kurvenarten in der Medizin

**Dose-Response-Kurve (Dosis-Wirkungskurve)**:
Typisch sigmoidal (S-förmig) in halblogarithmischer Darstellung. Wichtige Punkte:
- EC₅₀ (half maximal effective concentration): mittlere effektive Dosis
- Maximale Wirkung (Efficacy)
- Steigung der Kurve (Hill-Koeffizient)

**Michaelis-Menten-Kurve**:
v = v_max · [S] / (Km + [S]) — hyperbolische Sättigungskurve

- Für [S] << Km: v ≈ (v_max/Km)·[S] → linear (Kinetik 1. Ordnung)
- Für [S] >> Km: v ≈ v_max → Sättigung (Kinetik 0. Ordnung)
- v = v_max/2 bei [S] = Km (Definition von Km!)

**Überlebensfunktionen und Kaplan-Meier-Kurven**:
In der klinischen Epidemiologie zeigen Kaplan-Meier-Kurven den zeitlichen Verlauf des Überlebens in einer Patientengruppe — treppenartige Abfälle, die in Form und Steigung pharmakokinetischen Zerfallskurven ähneln.

## Graphen vergleichen und interpretieren

Beim Vergleich zweier Graphen achtet man auf:
- Schnitt- und Berührpunkte (gemeinsame x-Werte mit gleichem f(x))
- Steigungsunterschiede (Welche Kurve steigt/fällt schneller?)
- Lage der Asymptoten
- Verschiebungen und Spiegelungen (vertikale/horizontale Shifts, Streckungen)`,
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
          merksatz: "Horizontale Asymptote: lim(x→∞) f(x) = c → y = c. Vertikale Asymptote: f(x) → ±∞ bei x → a → x = a.",
        },
        {
          heading: "Semilog-Plot und Linearisierung",
          text: "Durch Logarithmieren transformiert man C(t) = C₀·e^(−kt) in die lineare Form ln C = ln C₀ − k·t. Im ln C vs. t Diagramm erscheint die Kurve als Gerade. Steigung = −k, y-Achsenabschnitt = ln C₀. Dieses Prinzip nutzt man zur graphischen Bestimmung pharmakokinetischer Parameter: Man misst Konzentrationswerte zu verschiedenen Zeitpunkten, trägt ln C gegen t auf, zeichnet die Ausgleichsgerade ein und liest Steigung und Achsenabschnitt ab.",
          merksatz: "ln C vs. t: Gerade mit Steigung −k und Achsenabschnitt ln C₀. T½ = 0,693/k. Gilt nur für Kinetik 1. Ordnung.",
        },
        {
          heading: "Michaelis-Menten und Dosis-Wirkungskurven",
          text: "Die Michaelis-Menten-Gleichung v = v_max·[S]/(Km+[S]) beschreibt enzymatische Kinetik. Km ist die Substratkonzentration, bei der v = v_max/2. In einem v-vs.-[S]-Diagramm erscheint die Kurve als Hyperbel mit horizontaler Asymptote v_max. Die EC₅₀ auf einer Dosis-Wirkungskurve entspricht dem Km auf einer Enzymkinetik-Kurve. Beide sind Maße für die Affinität des Liganden bzw. Substrats zum Rezeptor bzw. Enzym.",
          merksatz: "Michaelis-Menten: v = v_max/2 bei [S] = Km. Hyperbel mit Asymptote v_max. Linearisierung: Lineweaver-Burk-Plot.",
        },
      ],
      merksätze: [
        "Asymptote: Gerade, an die sich Graph annähert, ohne sie zu erreichen.",
        "Horizontale Asymptote: y = lim(x→±∞) f(x).",
        "Vertikale Asymptote: x = a, wenn f(x) → ±∞ für x → a.",
        "Semilog-Plot (log y vs. x): Exponentialfunktionen erscheinen als Geraden.",
        "Log-Log-Plot: Potenzfunktionen erscheinen als Geraden.",
        "Linearisierung C(t): ln C = −kt + ln C₀; Steigung = −k.",
        "Michaelis-Menten: v = v_max·[S]/(Km+[S]); Km = [S] bei v = v_max/2.",
        "EC₅₀: Dosis, bei der die halbe maximale Wirkung erzielt wird.",
        "Kinetik 1. Ordnung im Semilog: Gerade. Kinetik 0. Ordnung: Gerade im linearen Plot.",
        "Wendepunkt: Vorzeichenwechsel der Krümmung, nicht zwingend ein Extremum.",
      ],
      altfrage: {
        question: "Erklären Sie, wie Sie aus einem Semilog-Plot pharmakokinetische Parameter ablesen und welche Voraussetzung erfüllt sein muss, damit die Darstellung als Gerade erscheint.",
        answer: "Ein semilogarithmischer Plot (Semilog-Plot) in der Pharmakokinetik trägt den natürlichen Logarithmus der Plasmakonzentration (ln C) auf der y-Achse gegen die Zeit t auf der linearen x-Achse auf. Die Grundlage ist die mathematische Umformung der Formel für Kinetik erster Ordnung: C(t) = C₀·e^(−kt) → ln C = ln C₀ − k·t. Das ist eine lineare Gleichung in t, also eine Gerade. Die Geradensteigung ist −k (negativ, da die Konzentration abnimmt), und der y-Achsenabschnitt ist ln C₀, woraus C₀ = e^(Achsenabschnitt) berechnet wird. Die Eliminationskonstante k ergibt sich als k = −Steigung. Die Halbwertszeit folgt daraus: T½ = ln(2)/k ≈ 0,693/k. Voraussetzung für die Linearität im Semilog-Plot ist die Kinetik erster Ordnung: Die Eliminationsrate muss proportional zur aktuellen Konzentration sein (dC/dt = −kC). Liegt stattdessen Kinetik nullter Ordnung vor (konstante Eliminationsrate), ist C(t) = C₀ − k₀·t eine Gerade im linearen Plot, im Semilog-Plot aber eine Kurve. Wenn im Semilog-Plot eine gebogene Kurve erscheint, ist das ein Hinweis auf eine Kinetik höherer Ordnung, ein Mehrkompartimentmodell oder Sättigungskinetik (z. B. bei Ethanol oder Phenytoin). In der Praxis werden die experimentellen Konzentrations-Zeit-Paare gemessen, logarithmiert und eine Ausgleichsgerade durch lineare Regression bestimmt.",
      },
      klinischerBezug: "Im Semilog-Plot der Plasmakonzentration nach intravenöser Bolusinjektion kann man bei einem Einkompartimentmodell sofort T½ und Clearance ablesen; Abweichungen von der Linearität (biphasische oder triphasische Kurven) deuten auf Mehr-Kompartiment-Kinetik hin, wie sie bei Gentamicin und Vancomycin klinisch relevant ist. Die Michaelis-Menten-Kinetik erklärt, warum Phenytoin bei therapeutischen Plasmakonzentrationen von nichtlinearer Kinetik geprägt ist: Km ≈ 5 mg/L liegt im therapeutischen Bereich (10–20 mg/L), d. h. das Enzymsystem ist nahezu gesättigt, was zu unverhältnismäßig großen Konzentrationsanstiegen bei Dosiserhöhung führt. Dosis-Wirkungskurven mit ihrer EC₅₀ werden zur Charakterisierung von Agonisten (Potenz) und zur Berechnung therapeutischer und toxischer Dosisbereiche (therapeutischer Index = TD₅₀/ED₅₀) genutzt.",
      selfTest: [
        {
          question: "Welche Asymptote hat die Funktion f(x) = 3 · e^(−x) + 2?",
          options: ["y = 0", "y = 2", "y = 3", "x = 2", "y = −2"],
          correctIndex: 1,
          explanation: "Für x → ∞ gilt e^(−x) → 0, daher f(x) → 3·0 + 2 = 2. Die horizontale Asymptote ist y = 2. Diese Funktion unterscheidet sich von der reinen Zerfallsfunktion, weil sie nicht gegen 0 geht, sondern gegen eine verschobene Asymptote. In der Pharmakokinetik kann eine solche Funktion einen Grundspiegel (z. B. endogene Produktion) beschreiben, der unabhängig von der Medikamentgabe persistiert.",
          hints: ["x → ∞: e^(−x) → 0", "f(x) → 3·0 + 2 = 2"],
          difficulty: 1,
          tags: [],
        },
        {
          question: "In einem Semilog-Plot (ln C vs. t) ergibt sich eine Gerade durch die Punkte (0|ln 100) und (10|ln 50). Was ist die Eliminationskonstante k?",
          options: ["k = 0,0693 h⁻¹", "k = 0,5 h⁻¹", "k = ln(2) h⁻¹", "k = 0,1 h⁻¹", "k = 2 h⁻¹"],
          correctIndex: 0,
          explanation: "Steigung der Geraden = (ln 50 − ln 100)/(10 − 0) = ln(50/100)/10 = ln(1/2)/10 = −ln(2)/10 = −0,693/10 = −0,0693. Da Steigung = −k, gilt k = 0,0693 h⁻¹. Aus k folgt T½ = ln(2)/k = 0,693/0,0693 = 10 h. Die Konzentration sinkt in 10 h von 100 auf 50 — also in einer Halbwertszeit. Das ist konsistent mit der Ausgangsfrage.",
          hints: ["Steigung = (ln 50 − ln 100)/(10 − 0) = ln(0,5)/10", "k = −Steigung = ln(2)/10 ≈ 0,0693"],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche graphische Darstellung macht eine Kinetik nullter Ordnung (C = C₀ − k₀·t) als Gerade sichtbar?",
          options: [
            "Semilog-Plot (ln C vs. t)",
            "Linearer Plot (C vs. t)",
            "Log-Log-Plot (ln C vs. ln t)",
            "Semilog-Plot (C vs. ln t)",
            "Reziproker Plot (1/C vs. t)",
          ],
          correctIndex: 1,
          explanation: "Kinetik nullter Ordnung: C = C₀ − k₀·t ist bereits eine lineare Funktion von t. Im linearen Plot (C vs. t) erscheint sie daher direkt als Gerade mit Steigung −k₀ und Achsenabschnitt C₀. Im Semilog-Plot würde diese Funktion als Kurve erscheinen, nicht als Gerade. Klinisches Beispiel für Kinetik 0. Ordnung: Ethanol — die Leberkapazität zur Oxidation ist gesättigt, und Ethanol wird mit konstanter Rate (ca. 0,1–0,15 g/L/h) abgebaut.",
          hints: ["Kinetik 0. Ordnung: C = C₀ − k₀·t ist lineares Gesetz", "Linearer Plot: Gerade. Semilog-Plot: Kurve (kein e-Term)"],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Die Michaelis-Menten-Gleichung gibt v = v_max · [S]/(Km + [S]). Bei welcher Substratkonzentration beträgt die Reaktionsgeschwindigkeit genau v_max/4?",
          options: ["[S] = Km/3", "[S] = Km/2", "[S] = Km", "[S] = 2·Km", "nicht lösbar"],
          correctIndex: 0,
          explanation: "Gesucht: v = v_max/4. v_max/4 = v_max·[S]/(Km+[S]). Kürzen durch v_max: 1/4 = [S]/(Km+[S]) → Km+[S] = 4[S] → Km = 3[S] → [S] = Km/3. Bei einem Drittel der Km-Konzentration läuft die Reaktion nur mit einem Viertel der Maximalgeschwindigkeit — ein Beleg für die nichtlineare Substratabhängigkeit und die Bedeutung der Substratkonzentration im physiologischen Bereich.",
          hints: ["v_max/4 = v_max·[S]/(Km+[S]) → Km+[S] = 4·[S]", "Km = 3·[S] → [S] = Km/3"],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Welche Eigenschaft unterscheidet den Wendepunkt vom Extrempunkt einer Funktion?",
          options: [
            "Am Wendepunkt ist f(x) = 0.",
            "Am Extrempunkt wechselt die Krümmungsrichtung, nicht am Wendepunkt.",
            "Am Wendepunkt wechselt die Krümmungsrichtung; am Extrempunkt wechselt die Monotonie.",
            "Am Wendepunkt ist f'(x) maximal.",
            "Extrempunkte existieren nur bei quadratischen Funktionen.",
          ],
          correctIndex: 2,
          explanation: "Am Extrempunkt wechselt die Monotonie: Die Funktion wechselt von steigend zu fallend (Maximum) oder von fallend zu steigend (Minimum). Am Wendepunkt wechselt die Krümmungsrichtung: Die Kurve geht von konvex zu konkav oder umgekehrt. Option D ist eine wichtige Zusatzinformation: Am Wendepunkt ist die Steigung f'(x) tatsächlich oft lokal maximal oder minimal (aber nicht zwingend). Bei sigmoiden Dosis-Wirkungskurven liegt der Wendepunkt bei EC₅₀ — dort ist die Steigung der Kurve am steilsten.",
          hints: ["Extrempunkt: Steigung = 0, Vorzeichenwechsel von f'", "Wendepunkt: f'' = 0, Vorzeichenwechsel von f''"],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Ein Enzym hat Km = 2 mmol/L und v_max = 10 µmol/(L·s). Wie groß ist v bei [S] = 8 mmol/L?",
          options: ["4 µmol/(L·s)", "6 µmol/(L·s)", "8 µmol/(L·s)", "9 µmol/(L·s)", "10 µmol/(L·s)"],
          correctIndex: 2,
          explanation: "v = v_max·[S]/(Km+[S]) = 10·8/(2+8) = 80/10 = 8 µmol/(L·s). [S] = 8 mmol/L ist 4-mal größer als Km = 2 mmol/L. Bei [S] = 4·Km gilt: v = v_max·4Km/(Km+4Km) = v_max·4/5 = 0,8·v_max = 8. Man sieht: selbst bei einer 4-fachen Km-Konzentration wird nur 80 % von v_max erreicht — das illustriert die Sättigungskinetik und erklärt, warum hohe Substratkonzentrationen nicht proportional zu höheren Reaktionsraten führen.",
          hints: ["v = 10·8/(2+8) = 80/10", "Bei [S] = 4·Km: v = v_max · 4/5"],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Ein log-log-Plot zeigt eine Gerade mit Steigung 2 und y-Achsenabschnitt log(3). Welche Funktion wird dargestellt?",
          options: ["f(x) = 3·x²", "f(x) = 2·x³", "f(x) = 3·e^(2x)", "f(x) = 2·log(x) + 3", "f(x) = x² + 3"],
          correctIndex: 0,
          explanation: "Im log-log-Plot gilt: log f = m·log x + b, wobei m die Steigung und b der Achsenabschnitt ist. Mit m = 2 und b = log(3): log f = 2·log x + log(3) = log(x²) + log(3) = log(3·x²). Also f(x) = 3·x². Diese Potenzfunktion erscheint im log-log-Plot als Gerade mit Steigung = Exponent. In der Biologie folgen viele Allometrien (z. B. Körpermasse vs. Stoffwechselrate) solchen Potenzgesetzen.",
          hints: ["log-log: log f = m·log x + b → f = 10^b · x^m", "m = 2, 10^b = 10^(log 3) = 3 → f = 3·x²"],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Welche Aussage über die horizontale Asymptote von f(x) = (3x² + 1)/(x² − 4) ist korrekt?",
          options: [
            "Keine horizontale Asymptote vorhanden.",
            "Horizontale Asymptote: y = 3.",
            "Horizontale Asymptote: y = 0.",
            "Horizontale Asymptote: y = −4.",
            "Horizontale Asymptote: y = 1/4.",
          ],
          correctIndex: 1,
          explanation: "Bei rationalen Funktionen, bei denen Zähler und Nenner denselben Grad haben, ergibt sich die horizontale Asymptote als Quotient der führenden Koeffizienten: lim(x→±∞) (3x²+1)/(x²−4) = 3/1 = 3. Für sehr große x dominieren die x²-Terme, und konstante Terme (+1 und −4) werden vernachlässigbar. Es gilt auch: Für x = 2 und x = −2 sind vertikale Asymptoten vorhanden (Nenner = 0). Rationale Funktionen mit gleich-gradigem Zähler und Nenner streben einer horizontalen Asymptote entgegen.",
          hints: ["Gleicher Grad im Zähler und Nenner: Asymptote = Quotient der führenden Koeffizienten", "3x²/x² = 3 für x → ±∞"],
          difficulty: 3,
          tags: [],
        },
      ],
    },
  ],
};
