import type { Kapitel } from "../types";

export const mathKap5: Kapitel = {
  id: "mathe-kap5",
  title: "Analysis & Funktionen",
  subject: "mathematik",
  icon: "📈",
  estimatedTime: "120 min",
  unterkapitel: [
    {
      id: "ma-5-01",
      title: "Lineare Funktionen",
      stichworte: [
        "Lineare Funktion",
        "Steigung",
        "y-Achsenabschnitt",
        "Nullstelle",
        "Geradengleichung",
        "Differenzenquotient",
        "Parallele Geraden",
        "Senkrechte Geraden",
        "Schnittpunkt",
        "Lambert-Beer-Gesetz",
        "Infusionsrate",
        "Kalibrierkurve",
      ],
      content: `## Einleitung

Stell dir vor, du faehrst mit dem Fahrrad einen gleichmaessig ansteigenden Huegel hinauf. Pro Minute legst du immer dieselbe Hoehe zurueck -- das ist ein **linearer Zusammenhang**. Lineare Funktionen beschreiben genau solche gleichmaessigen Veraenderungen: Die Steigung sagt dir "wie viel pro Schritt", der Achsenabschnitt gibt den Startwert an.

**In diesem Kapitel lernst du:**
- was Steigung und Achsenabschnitt einer Geraden bedeuten
- wie du die Nullstelle einer linearen Funktion berechnest
- wie du den Schnittpunkt zweier Geraden findest
- woran du parallele und senkrechte Geraden erkennst

---

{{DIAGRAM:coordinate-system}}

{{DIAGRAM:coordinate-system}}

## Grundform und Begriffe

Eine lineare Funktion hat die Form **f(x) = mx + b**. Dabei ist m die **Steigung** und b der **y-Achsenabschnitt**. Der Graph ist immer eine **Gerade**.

Die Steigung m beschreibt, um wie viel sich f(x) aendert, wenn x um 1 zunimmt. Formel: m = Δy / Δx = (y₂ − y₁) / (x₂ − x₁). Ist m > 0, steigt die Gerade; ist m < 0, faellt sie; ist m = 0, ist sie horizontal.

> **Merke:** Die Steigung m = Δy/Δx gibt die Aenderung pro Einheit an. Beispiel: Ein Handytarif mit m = 0,10 bedeutet 10 Cent pro Minute.

---

## Steigung und Achsenabschnitt

Der **y-Achsenabschnitt b** ist der Wert bei x = 0, also f(0) = b. Die **Nullstelle** ist der x-Wert, bei dem f(x) = 0: x₀ = −b/m.

Zwei Geraden sind **parallel**, wenn m₁ = m₂. Sie stehen **senkrecht**, wenn m₁ × m₂ = −1.

> **Merke:** Zwei verschiedene Punkte bestimmen genau eine Gerade. Zuerst m berechnen, dann b durch Einsetzen eines Punktes.

---

## Gerade aufstellen

**Aus zwei Punkten:** P₁(x₁|y₁) und P₂(x₂|y₂).
1. m = (y₂ − y₁)/(x₂ − x₁)
2. b = y₁ − m×x₁

**Aus Steigung und Punkt:** m und P(x₀|y₀) gegeben → b = y₀ − m×x₀.

---

## Schnittpunkt zweier Geraden

f(x) = m₁x + b₁ und g(x) = m₂x + b₂ schneiden sich bei m₁ ≠ m₂.

Gleichsetzen: m₁x + b₁ = m₂x + b₂ → x = (b₂ − b₁)/(m₁ − m₂). Dann y berechnen.

---

## MedAT-Fokus

**Typische Aufgabentypen:**
- Geradengleichung aus 2 Punkten aufstellen
- Nullstelle berechnen: x₀ = −b/m
- Schnittpunkt zweier Geraden durch Gleichsetzen
- Steigung aus Graph ablesen

**Typische Fallen:**
- Nullstelle linear: x₀ = **−b/m** (nicht Mitternachtsformel!)
- Senkrechte: m₂ = **−1/m₁** (nicht −m₁)
- Steigung: Δy/Δx -- y im Zaehler, x im Nenner

**Minimal-Rechenrezepte:**
- **Gerade aus 2 Punkten:** m = (y₂−y₁)/(x₂−x₁), dann b = y₁ − m·x₁.
- **Nullstelle:** x₀ = −b/m.
- **Schnittpunkt:** m₁x + b₁ = m₂x + b₂ → x = (b₂−b₁)/(m₁−m₂).
- **Senkrechte zu m₁:** m₂ = −1/m₁.

---

## Zusammenfassung (ultrakompakt)

- **f(x) = mx + b**: m = Steigung, b = y-Achsenabschnitt
- **m > 0** → steigend; **m < 0** → fallend; **m = 0** → horizontal
- **Nullstelle:** x₀ = −b/m
- **Gerade aus 2 Punkten:** zuerst m, dann b
- **Parallel:** m₁ = m₂; **senkrecht:** m₁ × m₂ = −1
- **Fehler vermeiden:** Nullstelle = −b/m; senkrecht = −1/m₁`,
      contentExtended: `## Einleitung

Im Labor zeigt das Photometer eine Absorption von 0,77 -- wie hoch ist die Konzentration der Probe? Wenn du die Kalibrierkurve als Gerade kennst, genuegt eine einfache Umstellung. **Lineare Funktionen** beschreiben Zusammenhaenge, bei denen sich y gleichmaessig mit x aendert: Die Steigung sagt “wie viel pro Einheit”, der Achsenabschnitt gibt den Startwert an. Von der Infusionsrate ueber die Regressionsgerade bis zum Alkoholabbau im Blut (Kinetik 0. Ordnung) -- ueberall steckt y = mx + b.

**In diesem Kapitel lernst du:**
- was Steigung und Achsenabschnitt einer Geraden bedeuten und wie du sie aus einem Graphen oder zwei Punkten bestimmst
- wie du die Nullstelle einer linearen Funktion berechnest und geometrisch deutest
- wie du den Schnittpunkt zweier Geraden durch Gleichsetzen findest
- woran du erkennst, ob zwei Geraden parallel oder senkrecht zueinander stehen
- wie lineare Funktionen in der Labormedizin (Kalibrierkurve, Lambert-Beer) und Pharmakokinetik (Ethanolabbau) eingesetzt werden

---

{{DIAGRAM:coordinate-system}}

{{DIAGRAM:logarithm-function}}

## Grundform und Begriffe

**Idee:** Eine lineare Funktion beschreibt einen Zusammenhang, bei dem die Änderung von y proportional zur Änderung von x ist — der Graph ist eine **Gerade**. Die Steigung m sagt „wie viel y pro x”, der Achsenabschnitt b sagt „wo die Gerade die y-Achse schneidet”. Damit lassen sich Kalibrierkurven, Dosis-Wirkungs-Beziehungen im linearen Bereich und Infusionsraten modellieren.

**Verfahren:** Allgemeine Form **f(x) = mx + b**: m = Steigung = Δy/Δx = (y₂−y₁)/(x₂−x₁); b = y-Achsenabschnitt = f(0). Gerade aus zwei Punkten: zuerst m berechnen, dann b = y₁ − m·x₁. Nullstelle: f(x) = 0 ⇒ x₀ = −b/m. Senkrechte Gerade zu m₁: m₂ = −1/m₁. Schnittpunkt zweier Geraden: Gleichsetzen und nach x auflösen.





Eine lineare Funktion hat die allgemeine Form **f(x) = mx + b**, wobei x die unabhängige Variable (Argument), f(x) der zugehörige Funktionswert (Bild), m die **Steigung** (Steigungskoeffizient) und b der **y-Achsenabschnitt** (Ordinatenabschnitt) ist. Der Name “linear” leitet sich davon ab, dass der Graph dieser Funktion stets eine **Gerade** ist.

Die Steigung m beschreibt, um wie viele Einheiten sich f(x) verändert, wenn x um eine Einheit zunimmt. Formal gilt: m = Δy / Δx = (y₂ − y₁) / (x₂ − x₁). Ist m > 0, steigt die Gerade von links nach rechts; ist m < 0, fällt sie; ist m = 0, handelt es sich um eine horizontale Gerade (konstante Funktion).

> **Merke:** Die Steigung m einer Geraden ist der **Differenzenquotient** Δy/Δx. Sie gibt die Änderung des Funktionswerts pro Einheit der unabhängigen Variable an — im medizinischen Kontext z. B. “mg/L pro Stunde” oder “mmHg pro BMI-Punkt”.

**Typische Prüfungsfehler:** Nullstelle mit Mitternachtsformel verwechseln (bei linear: x₀ = −b/m). Senkrechte Gerade: m₂ = −1/m₁ setzen (nicht m₂ = −m₁). Steigung: Δy/Δx — y-Differenz im Zähler, x-Differenz im Nenner (nicht vertauschen). b ist der y-Achsenabschnitt (Wert bei x = 0), nicht die Nullstelle.

## Steigung und Achsenabschnitt im Detail

Der **y-Achsenabschnitt b** gibt den Punkt an, an dem die Gerade die y-Achse schneidet, d. h. f(0) = b. Der **x-Achsenabschnitt** (Nullstelle) ergibt sich durch Setzen von f(x) = 0: 0 = mx + b → x₀ = −b/m (für m ≠ 0).

Zwei Geraden sind **parallel**, wenn sie dieselbe Steigung m besitzen. Sie sind **senkrecht zueinander**, wenn das Produkt ihrer Steigungen −1 ergibt: m₁ × m₂ = −1, d. h. m₂ = −1/m₁.

| Eigenschaft | Formel | Bedeutung |
|---|---|---|
| Steigung | m = Δy/Δx | Änderungsrate |
| y-Achsenabschnitt | b = f(0) | Startwert bei x = 0 |
| Nullstelle | x₀ = −b/m | Graph schneidet x-Achse |
| Parallel | m₁ = m₂ | Geraden schneiden sich nie |
| Senkrecht | m₁ × m₂ = −1 | 90°-Winkel |

## Aufstellen einer linearen Funktion

**Aus zwei Punkten:** Gegeben P₁(x₁|y₁) und P₂(x₂|y₂). Berechne zuerst m = (y₂ − y₁) / (x₂ − x₁), dann b durch Einsetzen eines Punktes: b = y₁ − m×x₁.

**Aus Steigung und einem Punkt:** Gegeben m und P(x₀|y₀). Dann gilt b = y₀ − m×x₀.

**Punkt-Steigungs-Form:** Manchmal ist es bequemer, die Gerade direkt als y − y₀ = m × (x − x₀) zu schreiben. Diese Form wird in der Statistik bei **Regressionsgeraden** verwendet: Die Regressionsgerade verläuft immer durch den Schwerpunkt (x̄|ȳ) der Daten.

> **Merke:** Zwei verschiedene Punkte bestimmen genau eine Gerade. Immer zuerst m berechnen, dann b durch Einsetzen eines Punktes ermitteln.

## Grafische Darstellung

Eine Gerade ist durch zwei Punkte vollständig bestimmt. Praktisch wählt man oft den y-Achsenabschnitt (x = 0) und die Nullstelle (y = 0) als Zeichenpunkte. Die Steigung kann anschließend als Kontrollwert aus dem Graphen abgelesen werden: Man wählt zwei Gitterpunkte auf der Geraden und bildet den Quotienten Δy/Δx.

**Steigungsdreieck:** Um die Steigung grafisch abzulesen, zeichnet man ein rechtwinkliges Dreieck unter der Geraden. Die horizontale Kathete (Δx) und die vertikale Kathete (Δy) ergeben m = Δy/Δx. Zeigt Δy nach unten, ist m negativ.

## Anwendungen im medizinischen Kontext

Lineare Zusammenhänge begegnen uns in der Medizin bei der **Kalibrierung von Messgeräten** (z. B. Lambert-Beer-Gesetz bei niedrigen Konzentrationen), bei **Dosierungs-Wirkungsbeziehungen** im linearen Bereich sowie bei der Berechnung von **Infusionsraten** (ml/h = konstante Dosis × Körpergewicht/Konzentration). Auch die lineare Interpolation zwischen Messwerten in Laborkurven setzt das Verständnis linearer Funktionen voraus.

**Lineare Pharmakokinetik (Kinetik nullter Ordnung):** Ethanol wird in der Leber mit konstanter Rate abgebaut (ca. 0,1–0,15 ‰/h), weil die Alkoholdehydrogenase gesättigt ist. Die Blutalkoholkonzentration sinkt also linear: C(t) = C₀ − k₀×t. Hier ist die Steigung m = −k₀ die **Eliminationsrate** (konstant, unabhängig von der Konzentration).

> **Merke:** Im **linearen Messbereich** des Lambert-Beer-Gesetzes (A = ε×c×d) ist die Absorption A direkt proportional zur Konzentration c. Außerhalb dieses Bereichs weicht die Kalibrierkurve von der Linearität ab — ein häufiger MedAT-Aufgabentyp.

## Besondere Geraden

- **Horizontale Gerade** (f(x) = b, m = 0): parallel zur x-Achse; beschreibt konstante Größen (z. B. konstanter Blutzuckerspiegel).
- **Vertikale Gerade** (x = a): keine Funktion im mathematischen Sinne, da einem x-Wert unendlich viele y-Werte zugeordnet sind.
- **Ursprungsgerade** (b = 0, f(x) = mx): verläuft durch den Ursprung; typisch für direkte Proportionalität (z. B. Dosis proportional zum Körpergewicht).

## Lineare Gleichungssysteme

Zwei lineare Funktionen f(x) = m₁x + b₁ und g(x) = m₂x + b₂ schneiden sich, wenn m₁ ≠ m₂. Der Schnittpunkt ergibt sich durch Gleichsetzen: m₁x + b₁ = m₂x + b₂ → x = (b₂ − b₁)/(m₁ − m₂). Sind m₁ = m₂ und b₁ ≠ b₂, sind die Geraden parallel und haben keinen Schnittpunkt. Sind m₁ = m₂ und b₁ = b₂, sind die Geraden identisch.

**Lösungsmethoden für lineare Gleichungssysteme** (2 Gleichungen, 2 Unbekannte):
- **Gleichsetzungsverfahren**: Beide Gleichungen nach y auflösen, dann gleichsetzen.
- **Einsetzungsverfahren**: Eine Gleichung nach einer Variable auflösen, in die andere einsetzen.
- **Additionsverfahren**: Gleichungen so multiplizieren, dass eine Variable beim Addieren wegfällt.

## Rechenbeispiele

**Beispiel 1 — Kalibrierkurve Photometer:**
Absorption A = 0,015 × c + 0,02 (c in mg/L). Probe zeigt A = 0,77. Auflösen: c = (0,77 − 0,02)/0,015 = 0,75/0,015 = **50 mg/L**. Steigung 0,015: pro mg/L steigt Absorption um 0,015 Einheiten. y-Achsenabschnitt 0,02: Hintergrundabsorption der Küvette.

**Beispiel 2 — Regressionsgerade BMI vs. systolischer Blutdruck:**
y = 1,8x + 85 (x = BMI, y = RR_sys in mmHg). Patient BMI = 30: RR = 1,8 × 30 + 85 = **139 mmHg** (Grenzwert Hypertonie 140). Pro BMI-Punkt: +1,8 mmHg. BMI-Reduktion von 30 auf 25: RR sinkt um 5 × 1,8 = **9 mmHg**.

**Beispiel 3 — Infusionsrate und Gleichgewichtskonzentration:**
Elimination: C(t) = C₀ − k₀ × t (Kinetik nullter Ordnung). k₀ = 10 mg/h. Dauertropfrate R = 10 mg/h → Gleichgewicht: Zufuhr = Abbau. Bei R = 15 mg/h: Akkumulation mit 5 mg/h. Bei R = 8 mg/h: C sinkt um 2 mg/h. Steady-State nur bei **R = k₀ = 10 mg/h**.

**Beispiel 4 — Senkrechte Geraden bestimmen:**
Gerade g₁: y = 3x − 2. Gesucht: senkrechte Gerade g₂ durch P(6|1). m₂ = −1/m₁ = −1/3. b₂ = y₀ − m₂×x₀ = 1 − (−1/3)×6 = 1 + 2 = 3. Also: **g₂: y = −(1/3)x + 3**. Probe: m₁×m₂ = 3×(−1/3) = −1.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Typische Aufgabentypen:**
- Geradengleichung aus 2 Punkten aufstellen (zuerst m = (y₂−y₁)/(x₂−x₁), dann b = y₁ − m·x₁)
- Nullstelle berechnen: f(x) = 0 ⇒ x₀ = −b/m
- Schnittpunkt zweier Geraden: Gleichsetzen, nach x auflösen, y einsetzen
- Kalibrierkurve: Konzentration aus Absorption (A = ε·c·d → c = A/(ε·d) im linearen Bereich)
- Steigung oder y-Achsenabschnitt aus Graph ablesen (Steigungsdreieck Δy/Δx)
- Senkrechte Gerade zu gegebener Gerade durch einen Punkt (m₂ = −1/m₁, dann b₂ aus Punkt)

**Typische Fallen:**
- Nullstelle **linearer** Funktion: x₀ = **−b/m** (nicht Mitternachtsformel!)
- Senkrechte Geraden: m₂ = **−1/m₁** (nicht m₂ = −m₁)
- Steigung m = **Δy/Δx** — Zähler = y-Differenz, Nenner = x-Differenz (nicht umgekehrt)
- b = y-Achsenabschnitt (Wert bei x = 0), nicht die Nullstelle

**Minimal-Rechenrezepte:**
- **Gerade aus 2 Punkten P₁(x₁|y₁), P₂(x₂|y₂):** m = (y₂−y₁)/(x₂−x₁), dann b = y₁ − m·x₁ ⇒ y = mx + b.
- **Nullstelle:** 0 = mx + b ⇒ x₀ = −b/m (m ≠ 0).
- **Schnittpunkt:** m₁x + b₁ = m₂x + b₂ ⇒ x = (b₂−b₁)/(m₁−m₂), dann y = m₁x + b₁.
- **Senkrechte zu m₁:** m₂ = −1/m₁; durch P(x₀|y₀): b₂ = y₀ − m₂·x₀.
- **Lambert-Beer (linear):** A = ε·c·d ⇒ c = A/(ε·d); aus Kalibrierkurve: c = (A − A₀)/Steigung.

---

## Zusammenfassung (ultrakompakt)

- **Lineare Funktion:** f(x) = m×x + b; m = Steigung (Δy/Δx), b = y-Achsenabschnitt
- **Steigung:** m > 0 → steigend; m < 0 → fallend; m = 0 → konstant (horizontale Gerade)
- **Nullstelle:** f(x) = 0 → x₀ = −b/m (nicht Mitternachtsformel!)
- **Gerade aus 2 Punkten:** m = (y₂−y₁)/(x₂−x₁), dann b = y₁ − m×x₁
- **Schnittpunkt:** Gleichsetzen → x berechnen → y einsetzen
- **Parallel:** gleiche Steigung m; **senkrecht:** m₁×m₂ = −1 → m₂ = −1/m₁
- **Lambert-Beer:** A = ε×c×d (linear in c); Kalibrierkurve zur Konzentrationsbestimmung
- **Typische Fehler:** Nullstelle linear = −b/m; Senkrechte: m₂ = −1/m₁ (nicht −m₁)`,
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
          merksatz:
            "Steigung = Δy / Δx. Positiv: Gerade steigt. Negativ: Gerade fällt. Null: horizontale Gerade.",
        },
        {
          heading: "Nullstellen und Schnittpunkte",
          text: "Die Nullstelle einer linearen Funktion (x-Achsenabschnitt) erhält man durch f(x) = 0 → x₀ = −b/m. Der Schnittpunkt zweier Geraden ergibt sich durch Gleichsetzen ihrer Funktionsterme. Parallele Geraden (gleiche Steigung) haben keinen Schnittpunkt, identische Geraden haben unendlich viele.",
          merksatz:
            "Nullstelle: x₀ = −b/m. Schnittpunkt zweier Geraden: Gleichsetzen und nach x auflösen.",
        },
        {
          heading: "Medizinische Anwendungen linearer Funktionen",
          text: "Im medizinischen Labor folgt die Absorption von Licht nach dem Lambert-Beer-Gesetz A = ε×c×d einer linearen Funktion in c (Konzentration). Im linearen Messbereich lässt sich die unbekannte Konzentration einer Probe durch Interpolation auf der Kalibrierkurve bestimmen. Infusionsraten werden linear aus Körpergewicht und Dosierungsangabe berechnet.",
          merksatz:
            "Lambert-Beer: A = ε×c×d ist linear in c. Kalibriergeraden ermöglichen Konzentrationsbestimmung aus Absorption.",
        },
      ],
      diagram: "coordinate-system",

      merksätze: [
        "f(x) = mx + b: m = Steigung, b = y-Achsenabschnitt.",
        "Steigung m = Δy/Δx = (y₂−y₁)/(x₂−x₁).",
        "Nullstelle (x-Achsenabschnitt): x₀ = −b/m.",
        "m > 0: Gerade steigt; m < 0: Gerade fällt; m = 0: konstant.",
        "Parallele Geraden: gleiche Steigung m, verschiedene b.",
        "Senkrechte Geraden: m₁ × m₂ = −1.",
        "Ursprungsgerade (b = 0): direkte Proportionalität y = mx.",
        "Zwei Punkte bestimmen eine Gerade eindeutig.",
        "Schnittpunkt: Gleichsetzen der Funktionsterme → x berechnen → y einsetzen.",
        "Lambert-Beer-Gesetz: Absorption A linear abhängig von Konzentration c.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie, wie man die Gleichung einer Geraden aus zwei gegebenen Punkten bestimmt, und erläutern Sie die Bedeutung von Steigung und y-Achsenabschnitt für den Graphen.",
        answer:
          "Um die Geradengleichung f(x) = mx + b aus zwei Punkten P₁(x₁|y₁) und P₂(x₂|y₂) zu bestimmen, berechnet man zunächst die Steigung m als Differenzenquotient: m = (y₂ − y₁)/(x₂ − x₁). Die Steigung beschreibt die Änderungsrate der Funktion: Für jede Einheit, um die x zunimmt, ändert sich y um den Wert m. Eine positive Steigung bedeutet eine von links nach rechts steigende Gerade, eine negative Steigung eine fallende Gerade. Anschließend setzt man einen der Punkte, etwa P₁, in die Geradengleichung ein und löst nach b auf: b = y₁ − m×x₁. Der y-Achsenabschnitt b gibt an, wo die Gerade die y-Achse schneidet (d.h. den Funktionswert bei x = 0). In der Medizin ist das Verständnis dieser Parameter entscheidend: Bei Kalibrierkurven im Labor entspricht b einem Offset (Nullpunktfehler des Geräts) und m der Sensitivität (wie stark das Signal auf Konzentrationsänderungen anspricht). Eine Gerade mit b = 0 beschreibt direkte Proportionalität, wie sie bei der Berechnung von Infusionsdosierungen auftritt, bei denen die verabreichte Menge direkt proportional zur Körpermasse des Patienten ist.",
      },
      klinischerBezug:
        "Das Lambert-Beer-Gesetz (A = ε×c×d) ist eine lineare Funktion der Konzentration und bildet die Grundlage der Photometrie in der klinischen Labordiagnostik zur Bestimmung von Hämoglobin, Bilirubin und vielen anderen Laborparametern. Infusionsraten (z. B. ml/h = Dosis in mg/kg/h × Körpergewicht / Konzentration) folgen linearen Zusammenhängen und erfordern exakte Berechnungen, um Über- oder Unterdosierungen zu vermeiden. Im linearen Bereich von Dosis-Wirkungskurven lässt sich die therapeutische Dosis direkt proportional zur gewünschten Wirkungsstärke berechnen.",
      selfTest: [
        {
          question:
            "Eine Gerade verläuft durch die Punkte P₁(1|3) und P₂(4|9). Welche Steigung hat diese Gerade?",
          options: ["m = 1", "m = 2", "m = 3", "m = 4", "m = 6"],
          correctIndex: 1,
          explanation:
            "Die Steigung berechnet sich als m = (y₂ − y₁)/(x₂ − x₁) = (9 − 3)/(4 − 1) = 6/3 = 2. Eine Steigung von 2 bedeutet: Erhöht sich x um 1, steigt y um 2. Die Gleichung lautet dann f(x) = 2x + 1, was man durch Einsetzen eines Punktes bestätigt: f(1) = 2×1 + 1 = 3 und f(4) = 2×4 + 1 = 9.",
          hints: [
            "Steigung = Δy/Δx = (y₂−y₁)/(x₂−x₁)",
            "Zähler: Differenz der y-Werte; Nenner: Differenz der x-Werte",
          ],
          difficulty: 1,
          tags: ["steigung", "lineare-funktion", "koordinaten"],
        },
        {
          question:
            "Eine Gerade hat die Steigung m = 2 und geht durch den Punkt (3|7). Welchen y-Achsenabschnitt hat sie?",
          options: ["b = 1", "b = 13", "b = −1", "b = 3", "b = 7"],
          correctIndex: 0,
          explanation:
            "Gegeben: m = 2 und Punkt (3|7). Einsetzen in f(x) = mx + b: 7 = 2×3 + b = 6 + b → b = 1. Die vollständige Gleichung lautet f(x) = 2x + 1. Probe: f(3) = 2×3 + 1 = 7. Der y-Achsenabschnitt b = 1 bedeutet, dass die Gerade die y-Achse beim Punkt (0|1) schneidet.",
          hints: [
            "Einsetzen in f(x) = mx + b: y₀ = m×x₀ + b, dann b = y₀ − m×x₀",
            "b = 7 − 2×3 = 7 − 6 = 1",
          ],
          difficulty: 1,
          tags: ["lineare-funktion", "y-achsenabschnitt", "algebra"],
        },
        {
          question:
            "Zwei Geraden: f(x) = 2x + 1 und g(x) = −x + 7. An welchem x-Wert schneiden sie sich?",
          options: ["x = 1", "x = 2", "x = 3", "x = 4", "x = 5"],
          correctIndex: 1,
          explanation:
            "Schnittpunkt durch Gleichsetzen: 2x + 1 = −x + 7 → 3x = 6 → x = 2. Einsetzen zur Probe: f(2) = 2×2 + 1 = 5 und g(2) = −2 + 7 = 5. Beide Funktionen liefern y = 5 bei x = 2, der Schnittpunkt liegt also bei (2|5). Das Gleichsetzen zweier Funktionsterme ist die Standardmethode zum Finden von Schnittpunkten.",
          hints: ["Gleichsetzen: 2x + 1 = −x + 7", "Zusammenfassen: 3x = 6 → x = 2"],
          difficulty: 2,
          tags: ["schnittpunkt", "lineare-funktion", "gleichungssystem"],
        },
        {
          question:
            "Im Labor beschreibt die Kalibrierkurve eines Photometers A = 0,8×c + 0,02 (A = Absorption, c = Konzentration in mmol/L). Welche Konzentration hat eine Probe mit A = 0,42?",
          options: [
            "c = 0,5 mmol/L",
            "c = 0,525 mmol/L",
            "c = 0,45 mmol/L",
            "c = 0,4 mmol/L",
            "c = 0,6 mmol/L",
          ],
          correctIndex: 0,
          explanation:
            "Aus A = 0,8×c + 0,02 folgt: 0,42 = 0,8×c + 0,02 → 0,4 = 0,8×c → c = 0,4/0,8 = 0,5 mmol/L. In der klinischen Chemie wird genau diese Methode genutzt: Man erstellt zunächst eine Kalibrierkurve mit bekannten Standardkonzentrationen, liest die Steigung m (Sensitivität) und den Achsenabschnitt b (Leerwert) ab und berechnet dann unbekannte Konzentrationen durch Umformen der linearen Gleichung.",
          hints: ["Kalibrierkurve umformen: c = (A − b)/m", "c = (0,42 − 0,02)/0,8 = 0,4/0,8"],
          difficulty: 2,
          tags: ["kalibrierkurve", "lineare-funktion", "labor"],
        },
        {
          question:
            "Eine Infusion liefert einem 70 kg schweren Patienten 5 mg/kg/h eines Medikaments (Konzentration: 50 mg/mL). Wie viel mL/h werden benötigt?",
          options: ["5 mL/h", "7 mL/h", "10 mL/h", "14 mL/h", "3,5 mL/h"],
          correctIndex: 1,
          explanation:
            "Gesamtdosis = 5 mg/kg/h × 70 kg = 350 mg/h. Volumen = Dosis/Konzentration = 350 mg/h ÷ 50 mg/mL = 7 mL/h. Dieser Zusammenhang ist linear: Verdoppelt man das Körpergewicht, verdoppelt sich die benötigte Infusionsrate. In der Intensivmedizin werden solche Berechnungen für Katecholamine, Sedativa und Analgetika täglich durchgeführt. Ein Rechenfehler kann lebensbedrohliche Über- oder Unterdosierungen verursachen.",
          hints: [
            "Gesamtdosis = spezifische Dosis × Körpergewicht",
            "Volumen/h = Gesamtdosis / Konzentration",
          ],
          difficulty: 3,
          tags: ["dosierung", "lineare-funktion", "klinisch"],
        },
      ],
    },
    {
      id: "ma-5-02",
      title: "Quadratische Funktionen",
      stichworte: [
        "Quadratische Funktion",
        "Parabel",
        "Scheitelpunkt",
        "Diskriminante",
        "Mitternachtsformel",
        "pq-Formel",
        "Quadratische Ergänzung",
        "Satz von Vieta",
        "Nullstellen",
        "Symmetrieachse",
        "Leitkoeffizient",
        "Wurfparabel",
      ],
      content: `## Einleitung

Wirfst du einen Ball in die Luft, fliegt er eine Kurve -- eine **Parabel**. Quadratische Funktionen beschreiben genau solche Vorgaenge: Der Graph ist eine Parabel mit einem Hoch- oder Tiefpunkt, dem **Scheitelpunkt**. Die **Diskriminante** verraet dir sofort, ob und wie oft die Parabel die x-Achse schneidet.

**In diesem Kapitel lernst du:**
- wie der Vorfaktor a die Oeffnungsrichtung und Breite bestimmt
- wie du den Scheitelpunkt berechnest
- was die Diskriminante ueber die Nullstellen aussagt
- wie der Satz von Vieta das Nullstellenraten vereinfacht

---

{{DIAGRAM:coordinate-system}}

{{DIAGRAM:quadratic-function}}

## Allgemeine und Scheitelpunktform

Eine quadratische Funktion hat die Form **f(x) = ax² + bx + c** mit a ≠ 0. Der Graph ist eine **Parabel**. Ist a > 0, oeffnet sie nach oben (Minimum); ist a < 0, nach unten (Maximum).

Die **Scheitelpunktform** f(x) = a(x − xₛ)² + yₛ zeigt den Scheitelpunkt direkt. Die Umrechnung: xₛ = −b/(2a).

> **Merke:** a > 0 → Parabel oeffnet nach oben (Minimum). a < 0 → nach unten (Maximum). Grosses |a| → schmale Parabel; kleines |a| → breite Parabel.

---

## Scheitelpunkt berechnen

- **xₛ = −b/(2a)**
- **yₛ = f(xₛ)**

Beispiel: f(x) = 2x² − 8x + 3. xₛ = −(−8)/(2×2) = 2. yₛ = f(2) = 8 − 16 + 3 = −5. Scheitelpunkt: S(2|−5).

> **Merke:** xₛ = −b/(2a) -- Minus vor b nicht vergessen!

---

## Nullstellen und Diskriminante

**Mitternachtsformel:** x₁₂ = (−b ± √(b² − 4ac)) / (2a)

Die **Diskriminante** D = b² − 4ac entscheidet:
- D > 0: **zwei Nullstellen**
- D = 0: **eine Nullstelle** (Scheitel auf x-Achse)
- D < 0: **keine reelle Nullstelle**

**pq-Formel** (nur bei x² + px + q = 0): x₁₂ = −p/2 ± √((p/2)² − q)

Achtung: Die pq-Formel gilt nur wenn vor x² eine 1 steht. Sonst zuerst durch a teilen!

---

## Satz von Vieta

Bei x² + px + q = 0 gilt:
- x₁ + x₂ = −p (Summe)
- x₁ × x₂ = q (Produkt)

**Beispiel:** x² − 7x + 12 = 0. Summe = 7, Produkt = 12. → 3 + 4 = 7, 3 × 4 = 12 → **x₁ = 3, x₂ = 4**.

> **Merke:** Vieta ist schnell bei ganzzahligen Nullstellen. Zwei Zahlen finden mit gegebener Summe und Produkt.

---

## Rechenbeispiele

**Beispiel 1 -- Ballwurf:** h(t) = −5t² + 20t + 1. Hoechster Punkt: t = −20/(2×(−5)) = **2 s**. h(2) = −20 + 40 + 1 = **21 m**.

**Beispiel 2 -- Vieta:** x² − 11x + 28 = 0. Summe = 11, Produkt = 28. → 4 + 7 = 11, 4 × 7 = 28 → **x₁ = 4, x₂ = 7**.

---

## MedAT-Fokus

**Typische Aufgabentypen:**
- Scheitelpunkt: xₛ = −b/(2a), yₛ = f(xₛ)
- Nullstellen mit Diskriminante D = b² − 4ac
- Vieta bei ganzzahligen Loesungen
- Oeffnungsrichtung aus dem Vorzeichen von a

**Typische Fallen:**
- D = b² − **4ac** (nicht 2ac)
- Scheitel xₛ = **−**b/(2a) (Minus!)
- pq-Formel nur bei normierter Form (a = 1)

**Minimal-Rechenrezepte:**
- **Scheitelpunkt:** xₛ = −b/(2a), dann yₛ = f(xₛ).
- **Nullstellen:** D = b²−4ac; x = (−b±√D)/(2a).
- **Vieta:** Summe = −p, Produkt = q.

---

## Zusammenfassung (ultrakompakt)

- **f(x) = ax² + bx + c**: a > 0 → oben offen (Min); a < 0 → unten offen (Max)
- **Scheitelpunkt:** xₛ = −b/(2a), yₛ = f(xₛ)
- **Diskriminante:** D = b²−4ac; D > 0 → 2 NS; D = 0 → 1 NS; D < 0 → keine
- **Mitternachtsformel:** x = (−b ± √D)/(2a)
- **Vieta:** x₁ + x₂ = −p, x₁ × x₂ = q
- **Fehler vermeiden:** D = b²−4ac; Scheitel −b/(2a) mit Minus`,
      contentExtended: `## Einleitung

Ein Wurfgeschoss fliegt eine Parabel, und die Wirkstoffkonzentration im Blut erreicht nach einiger Zeit ein Maximum -- beides sind **quadratische Funktionen**. Ihre Graphen sind Parabeln, und der Scheitelpunkt ist der Hoch- oder Tiefpunkt. Am MedAT tauchen sie als Rechenaufgaben ("Wie viele Nullstellen?") und als Graphen-Interpretation ("Oeffnung nach oben oder unten?") auf. Der Schluessel ist die **Diskriminante**: Sie verraet mit einem Blick, ob die Parabel die x-Achse schneidet.

**In diesem Kapitel lernst du:**
- wie der Leitkoeffizient a die Oeffnungsrichtung und Breite einer Parabel bestimmt
- wie du den Scheitelpunkt berechnest -- den Punkt, an dem die Funktion ihr Maximum oder Minimum erreicht
- was die Diskriminante ueber die Anzahl der Nullstellen aussagt und wie du sie mit der Mitternachtsformel findest
- wann du die pq-Formel statt der Mitternachtsformel einsetzt
- wie der Satz von Vieta Summe und Produkt der Nullstellen mit den Koeffizienten verbindet

---

{{DIAGRAM:coordinate-system}}

{{DIAGRAM:quadratic-function}}

**Idee:** Parabel f(x) = ax²+bx+c: **a** bestimmt Öffnung (a>0: nach oben, a<0: nach unten) und Breite. **Scheitelpunkt** = Hoch- oder Tiefpunkt; **Diskriminante D** = b²−4ac entscheidet über Anzahl der Nullstellen (D>0: 2, D=0: 1, D<0: keine).

**Verfahren — Schrittfolge:** (1) **Scheitelpunkt:** x_S = −b/(2a), y_S = f(x_S). (2) **Nullstellen:** D = b²−4ac; x = (−b±√D)/(2a). (3) **pq-Formel** nur bei normierter Form x²+px+q = 0: x = −p/2 ± √((p/2)²−q). (4) **Vieta** (x²+px+q=0): x₁+x₂ = −p, x₁×x₂ = q.

**Typische Prüfungsfehler:** pq-Formel bei ax²+bx+c anwenden ohne vorher durch a zu teilen. D = b²−**4ac** (nicht 2ac). Scheitelpunkt x_S = **−**b/(2a) (Minus nicht vergessen).

---

## Allgemeine und Scheitelpunktform





Eine quadratische Funktion hat die allgemeine Form **f(x) = ax² + bx + c** mit dem Leitkoeffizienten a ≠ 0. Der Graph ist eine **Parabel**. Ist a > 0, öffnet die Parabel nach oben (Minimum); ist a < 0, öffnet sie nach unten (Maximum). |a| bestimmt die "Breite" der Parabel: Großes |a| → schmale Parabel; kleines |a| → flache Parabel.

Die **Scheitelpunktform** f(x) = a(x − xs)² + ys ist besonders anschaulich: Der Scheitelpunkt S(xs|ys) ist der Hoch- oder Tiefpunkt der Parabel. Die Umformung von der allgemeinen in die Scheitelpunktform erfolgt durch **quadratische Ergänzung**.

> **Merke:** Der Leitkoeffizient a bestimmt **zwei** Eigenschaften gleichzeitig: das Vorzeichen entscheidet über die Öffnungsrichtung (a > 0: oben, a < 0: unten), der Betrag |a| über die Breite (|a| > 1: schmaler als Normalparabel, |a| < 1: breiter).

| Form | Darstellung | Vorteil |
|---|---|---|
| Allgemeine Form | f(x) = ax² + bx + c | y-Achsenabschnitt direkt ablesbar (c) |
| Scheitelpunktform | f(x) = a(x − xs)² + ys | Scheitelpunkt direkt ablesbar |
| Faktorisierte Form | f(x) = a(x − x₁)(x − x₂) | Nullstellen direkt ablesbar |

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

> **Merke:** Quadratische Ergänzung Schritt für Schritt: (1) a ausklammern, (2) halben Koeffizienten von x quadrieren und addieren/subtrahieren, (3) binomische Formel rückwärts anwenden. Am MedAT spart die Formel xs = −b/(2a) oft mehr Zeit als die vollständige Ergänzung.

## Nullstellen und Diskriminante

Die **Nullstellen** einer quadratischen Funktion berechnet man mit der **Lösungsformel** (pq-Formel oder Mitternachtsformel):

**Mitternachtsformel**: x₁₂ = (−b ± √(b² − 4ac)) / (2a)

Der Ausdruck unter der Wurzel heißt **Diskriminante**: **D = b² − 4ac**

- D > 0: **zwei verschiedene reelle Nullstellen**
- D = 0: **genau eine Nullstelle** (Berührpunkt mit der x-Achse)
- D < 0: **keine reelle Nullstelle** (Parabel berührt x-Achse nicht)

**pq-Formel** (für normierte Form x² + px + q = 0):
x₁₂ = −p/2 ± √((p/2)² − q)

**Achtung MedAT-Falle:** Die pq-Formel gilt nur für **normierte** quadratische Gleichungen (Koeffizient vor x² muss 1 sein). Hat x² einen anderen Koeffizienten, muss man zuerst durch a dividieren oder direkt die Mitternachtsformel verwenden.

## Symmetrie

Jede Parabel f(x) = ax² + bx + c ist **achsensymmetrisch** zur vertikalen Geraden x = xs = −b/(2a). Diese Symmetrieachse halbiert die Strecke zwischen den beiden Nullstellen: xs = (x₁ + x₂)/2. Kennt man eine Nullstelle und den Scheitelpunkt, kann man die zweite Nullstelle über die Symmetrie bestimmen: x₂ = 2×xs − x₁.

## Satz von Vieta

Bei normierten Gleichungen x² + px + q = 0 gilt der **Satz von Vieta**:
- x₁ + x₂ = −p (Summe der Nullstellen)
- x₁ × x₂ = q (Produkt der Nullstellen)

Dies ermöglicht oft eine schnelle Bestimmung der Nullstellen ohne Rechnung. **MedAT-Strategie:** Bei ganzzahligen p und q zuerst versuchen, zwei Zahlen mit passender Summe und passendem Produkt zu erraten — das ist schneller als die Formel.

> **Merke:** Vieta ist besonders effizient, wenn die Nullstellen ganzzahlig sind. Beispiel: x² − 7x + 12 = 0 → gesucht: Summe 7, Produkt 12 → x₁ = 3, x₂ = 4 (sofort lösbar ohne Formel).

## Anwendungen in Physik und Medizin

Quadratische Funktionen modellieren viele physikalische Vorgänge: Wurfparabeln, kinetische Energie (E_kin = ½mv²), die Beziehung zwischen Radius und Fläche eines Kreises (A = πr²). In der Pharmakologie erscheinen quadratische Terme in komplexeren Dosis-Wirkungsmodellen und bei der Berechnung der Bioverfügbarkeit bei bestimmten Freisetzungskinetiken.

**Hagen-Poiseuille-Gesetz:** Der Volumenstrom V̇ durch ein Blutgefäß ist proportional zu r⁴ (Radius hoch 4). Da die Querschnittsfläche A = πr² quadratisch von r abhängt, führt eine Halbierung des Radius zu einer Reduktion der Fläche auf ein Viertel — und der Strömungswiderstand steigt auf das 16-Fache. Dies erklärt die dramatischen Auswirkungen von Arteriosklerose.

**Wurfparabel:** Die Höhe h eines geworfenen Körpers folgt h(t) = −½g×t² + v₀×t + h₀. Der Scheitelpunkt gibt die maximale Höhe und den Zeitpunkt des Erreichens an. Diese Parabel ist ein Standardbeispiel für a < 0 (Öffnung nach unten).

**MedAT-typisch — Herzfrequenz als Parabel in t:** Ist **f(t) = f_Ruhe − a·t + b·t²** (Herzfrequenz: zuerst Verlangsamung −a·t, dann quadratische Beschleunigung +b·t²), so liegt das **Minimum** der Herzfrequenz dort, wo die Ableitung nach t null ist: −a + 2b·t = 0 ⇒ **t = a/(2b)**. Merke: Vor x² steht hier +b (Koeffizient von t²), also Scheitel bei **t = a/(2b)** Minuten (nicht a/b, nicht 2a/b, nicht a²/b).

**MedAT-typisch — Parabel erkennen:** **y = −x² − 5** hat a = −1, b = 0, c = −5. Wegen **a < 0** öffnet die Parabel **nach unten**. Scheitel: x_s = −b/(2a) = 0, y_s = f(0) = −5 ⇒ **Scheitelpunkt (0|−5)**. Der Graph liegt vollständig unterhalb der x-Achse (Maximum bei y = −5).

## Rechenbeispiele

**Beispiel 1 — Optimale Dosis-Wirkung (Scheitelpunkt):**
Wirkung W(d) = −0,4d² + 16d − 40 (d in mg). Optimale Dosis: d_opt = −b/(2a) = −16/(2×(−0,4)) = **20 mg**. W_max = −0,4×400 + 320 − 40 = **120 Einheiten**. Nullstellen (keine Wirkung): d = (−16 ± √(256−64))/(−0,8) → d₁ ≈ 2,8 mg, d₂ ≈ 37,2 mg. Therapeutisches Fenster: ca. 3–37 mg.

**Beispiel 2 — Parabolische Flugbahn: Blutdruckwelle:**
Näherung p(t) = −200t² + 200t + 80 (mmHg, t in Sekunden). Maximum: t = −200/(2×(−200)) = **0,5 s**. p_max = −200×0,25 + 100 + 80 = **130 mmHg**. Pulsdauer (p = 80): −200t² + 200t = 0 → t(−200t + 200) = 0 → t = 0 und t = **1 s**.

**Beispiel 3 — Herzminutenvolumen und Gefäßwiderstand:**
HMV = RR / TPR. Wenn RR = −0,4×HMV² + 14×HMV (nicht-lineare Beziehung). Nullstellen: HMV×(−0,4×HMV + 14) = 0 → HMV = 0 oder **35 L/min** (physiologisches Limit bei Leistungssportlern). Maximum: HMV = −14/(2×(−0,4)) = **17,5 L/min** mit RR_max = −0,4×306,25 + 14×17,5 = **122,5 mmHg**. Realwerte: HMV ≈ 5 L/min bei RR ≈ 60 mmHg (Ruhewert auf der Kurve).

**Beispiel 4 — Vieta-Schnellmethode:**
x² − 11x + 28 = 0. Vieta: x₁ + x₂ = 11, x₁ × x₂ = 28. Systematisch probieren: 4 + 7 = 11, 4 × 7 = 28 → **x₁ = 4, x₂ = 7**. Probe: f(4) = 16 − 44 + 28 = 0, f(7) = 49 − 77 + 28 = 0.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Typische Aufgabentypen:**
- Scheitelpunkt x_S = −b/(2a), y_S = f(x_S); Öffnung (a>0 oben, a<0 unten)
- Nullstellen: D = b²−4ac; x = (−b±√D)/(2a); D>0: 2, D=0: 1, D<0: keine
- pq-Formel (nur bei x²+px+q=0); Vieta: x₁+x₂ = −p, x₁×x₂ = q
- Parabel aus Graph (Wurf, Optimierung, Dosis-Wirkung)

**Minimal-Rechenrezepte:**
- **Scheitelpunkt:** x_S = −b/(2a), y_S = f(x_S). **Nullstellen:** D = b²−4ac; x = (−b±√D)/(2a).
- **pq-Formel** (x²+px+q=0): x = −p/2 ± √((p/2)²−q). **Vieta:** Summe = −p, Produkt = q.

---

## Zusammenfassung (ultrakompakt)

- **Quadratische Funktion:** f(x) = ax²+bx+c; **a** (Leitkoeffizient): a>0 → Parabel nach oben (Minimum), a<0 → nach unten (Maximum)
- **Scheitelpunktform:** f(x) = a(x−d)²+e; Scheitel S(d|e); Symmetrieachse x = d
- **Scheitelpunkt:** xs = −b/(2a), ys = f(xs); über quadratische Ergänzung oder Formel
- **Nullstellen:** x = (−b ± √D)/(2a) mit **D = b²−4ac**; D>0: 2, D=0: 1 (Doppellösung), D<0: keine reelle
- **pq-Formel** (für x²+px+q=0): x = −p/2 ± √((p/2)²−q)
- **Vieta:** x₁+x₂ = −b/a, x₁×x₂ = c/a; bei ganzzahligen Nullstellen schneller
- **Graphen interpretieren:** Öffnung, Scheitel, Symmetrieachse, Nullstellenanzahl aus D
- **Typische Fehler:** D = b²−4ac (nicht 2ac); Scheitel xs = −b/(2a) (Minus nicht vergessen)`,
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
          merksatz:
            "Scheitelpunkt: xs = −b/(2a), ys = f(xs). a > 0: Parabel öffnet oben (Minimum). a < 0: Parabel öffnet unten (Maximum).",
        },
        {
          heading: "Diskriminante und Nullstellen",
          text: "Die Diskriminante D = b² − 4ac entscheidet über die Anzahl der Nullstellen einer quadratischen Funktion. D > 0: zwei Nullstellen x₁₂ = (−b ± √D)/(2a). D = 0: genau eine Nullstelle x = −b/(2a) (Parabelscheitel liegt auf der x-Achse). D < 0: keine reellen Nullstellen (Parabel liegt ganz ober- oder unterhalb der x-Achse). Die pq-Formel gilt für normierte Gleichungen (Leitkoeffizient = 1).",
          merksatz:
            "D = b² − 4ac: D > 0 → 2 Nullstellen; D = 0 → 1 Nullstelle; D < 0 → keine reelle Nullstelle.",
        },
        {
          heading: "Satz von Vieta",
          text: "Für x² + px + q = 0 gilt: x₁ + x₂ = −p und x₁ × x₂ = q. Dieses Werkzeug erlaubt es, Nullstellen durch Raten (z. B. bei ganzzahligen Lösungen) oder Überprüfen zu finden. Beispiel: x² − 5x + 6 = 0 → p = −5, q = 6; gesucht sind zwei Zahlen mit Summe 5 und Produkt 6 → x₁ = 2, x₂ = 3. Vieta ist besonders hilfreich bei MedAT-Aufgaben, wo Zeitdruck herrscht.",
          merksatz:
            "Vieta: x₁ + x₂ = −p; x₁ × x₂ = q. Zwei Zahlen mit gegebener Summe und Produkt finden.",
        },
        {
          heading: "Medizinische Relevanz quadratischer Zusammenhänge",
          text: "Die Michaelis-Menten-Kinetik und andere biochemische Reaktionen folgen zu Beginn oft quadratischen Näherungen. Kinetische Energie E = ½mv² und die Fläche eines Blutgefäßquerschnitts A = πr² sind quadratische Funktionen physikalischer Größen. In der Pharmakokinetik erscheinen quadratische Terme in Polyexponentialmodellen für die Plasmakonzentrations-Zeit-Kurve bei Zwei-Kompartiment-Modellen.",
          merksatz:
            "E_kin = ½mv²: quadratisch in v. A = πr²: quadratisch in r. Kleine Änderungen im Radius bewirken große Flächenänderungen.",
        },
      ],
      diagram: "coordinate-system",
      merksätze: [
        "f(x) = ax² + bx + c: a ≠ 0, Graph ist Parabel.",
        "a > 0: Öffnung nach oben (Minimum); a < 0: Öffnung nach unten (Maximum).",
        "Scheitelpunkt xs = −b/(2a), ys = f(xs).",
        "Scheitelpunktform: f(x) = a(x − xs)² + ys.",
        "Mitternachtsformel: x₁₂ = (−b ± √(b²−4ac))/(2a).",
        "Diskriminante D = b² − 4ac: D > 0 → 2 NS; D = 0 → 1 NS; D < 0 → 0 NS.",
        "Satz von Vieta: x₁+x₂ = −p; x₁×x₂ = q (normierte Form).",
        "Symmetrieachse der Parabel: x = xs = −b/(2a).",
        "Quadratische Ergänzung: x² + px = (x + p/2)² − (p/2)².",
        "Nullstellen und Scheitelpunkt teilen dieselbe Symmetrieachse: xs = (x₁+x₂)/2.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie die Bedeutung der Diskriminante einer quadratischen Gleichung und beschreiben Sie, wie Sie die Nullstellen einer Parabel grafisch und rechnerisch bestimmen.",
        answer:
          "Die Diskriminante D = b² − 4ac ist der Term unter der Wurzel in der Mitternachtsformel x₁₂ = (−b ± √D)/(2a). Sie entscheidet über die Anzahl der reellen Nullstellen: Ist D > 0, hat die quadratische Funktion zwei verschiedene reelle Nullstellen, und die Parabel schneidet die x-Achse an zwei Stellen. Ist D = 0, gibt es genau eine Nullstelle (Doppelwurzel), und der Scheitelpunkt liegt genau auf der x-Achse. Ist D < 0, gibt es keine reellen Nullstellen, d. h. die Parabel verläuft entweder vollständig oberhalb (a > 0) oder vollständig unterhalb (a < 0) der x-Achse. Grafisch lassen sich Nullstellen als Schnittpunkte des Graphen mit der x-Achse ablesen. Rechnerisch nutzt man die Mitternachtsformel oder – bei normierten Gleichungen – die pq-Formel x₁₂ = −p/2 ± √((p/2)² − q). Eine Alternative ist die Faktorisierung: Kennt man eine Nullstelle x₁, lässt sich f(x) als a(x − x₁)(x − x₂) schreiben, wobei x₂ durch Vieta (x₁×x₂ = c/a) bestimmt wird. In medizinischen Anwendungen, etwa beim Berechnen der maximalen Konzentration oder optimalen Dosierung in einfachen quadratischen Modellen, ist die Kenntnis des Scheitelpunkts (nicht der Nullstellen) oft das eigentliche Ziel.",
      },
      klinischerBezug:
        "Die kinetische Energie eines Blutpartikels E = ½mv² ist quadratisch in der Strömungsgeschwindigkeit v, was erklärt, warum Turbulenzen und Scherkräfte bei Stenosen mit zunehmendem Schweregrad überproportional ansteigen. Der Querschnitt eines Blutgefäßes A = πr² hängt quadratisch vom Radius ab: Eine Halbierung des Radius (z. B. durch Arteriosklerose) reduziert die Querschnittsfläche auf ein Viertel und erhöht den Strömungswiderstand nach Hagen-Poiseuille auf das 16-Fache. In Zwei-Kompartiment-Pharmakokinetikmodellen erscheinen biexponentielle Kurven, deren frühes Abklingverhalten durch quadratische Näherungen beschrieben werden kann.",
      selfTest: [
        {
          question: "Welchen Scheitelpunkt hat die Parabel f(x) = 2x² − 8x + 5?",
          options: ["S(2|−3)", "S(−2|13)", "S(2|5)", "S(4|−3)", "S(−4|69)"],
          correctIndex: 0,
          explanation:
            "xs = −b/(2a) = −(−8)/(2×2) = 8/4 = 2. ys = f(2) = 2×4 − 8×2 + 5 = 8 − 16 + 5 = −3. Scheitelpunkt: S(2|−3). Da a = 2 > 0, öffnet die Parabel nach oben und S ist ein Minimum. Das Verständnis des Scheitelpunkts ist zentral: In Optimierungsproblemen (z. B. maximale Konzentration, minimale Kosten) sucht man genau diesen Punkt.",
          hints: ["xs = −b/(2a) = −(−8)/(4) = 2", "ys = f(2) = 2×4 − 16 + 5"],
          difficulty: 2,
          tags: ["parabel", "scheitelpunkt", "quadratische-funktion"],
        },
        {
          question: "Die quadratische Gleichung x² − 5x + 6 = 0 hat die Lösungen:",
          options: [
            "x = 1 und x = 6",
            "x = 2 und x = 3",
            "x = −2 und x = −3",
            "x = 5 und x = 1",
            "keine reellen Lösungen",
          ],
          correctIndex: 1,
          explanation:
            "Satz von Vieta: x₁ + x₂ = 5 und x₁ × x₂ = 6. Zwei Zahlen mit Summe 5 und Produkt 6: 2 + 3 = 5, 2 × 3 = 6. Also x₁ = 2, x₂ = 3. Probe mit Mitternachtsformel: D = 25 − 24 = 1 > 0 → x = (5 ± 1)/2 → x₁ = 3, x₂ = 2. Vieta ist bei MedAT-Aufgaben oft der schnellere Weg, wenn man ganzzahlige Lösungen erraten kann.",
          hints: ["Vieta: Summe = 5, Produkt = 6", "Zwei Zahlen mit Summe 5 und Produkt 6 suchen"],
          difficulty: 1,
          tags: ["vieta", "nullstellen", "parabel"],
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
          explanation:
            "In der Scheitelpunktform f(x) = a(x − xs)² + ys gilt: a = −3 < 0 → Öffnung nach unten → Maximum. Der Scheitelpunkt liegt bei xs = 2 (Vorzeichen beachten: (x − 2)²) und ys = 7. Also: Maximum bei S(2|7). Die Parabel liegt vollständig unterhalb der Horizontalen y = 7. In Optimierungsaufgaben sucht man bei a < 0 den maximalen Funktionswert, der immer im Scheitelpunkt liegt.",
          hints: [
            "a = −3 < 0: Öffnung nach unten → Maximum",
            "Scheitelpunkt direkt aus xs = 2, ys = 7 ablesen",
          ],
          difficulty: 2,
          tags: ["parabel", "maximum", "scheitelpunkt"],
        },
        {
          question: "Berechnen Sie die Nullstellen von f(x) = x² − 4x − 5.",
          options: [
            "x = 5 und x = −1",
            "x = −5 und x = 1",
            "x = 4 und x = 1",
            "x = 2 und x = −3",
            "keine reellen Nullstellen",
          ],
          correctIndex: 0,
          explanation:
            "Mitternachtsformel: a = 1, b = −4, c = −5. D = 16 − 4×(−5) = 16 + 20 = 36. x₁₂ = (4 ± 6)/2. x₁ = 10/2 = 5, x₂ = −2/2 = −1. Probe via Vieta: x₁ + x₂ = 5 + (−1) = 4 = −(−4). x₁ × x₂ = 5 × (−1) = −5. Beide Nullstellen liegen auf verschiedenen Seiten der Symmetrieachse xs = 2.",
          hints: ["D = 16 − 4×1×(−5) = 16 + 20 = 36", "x = (4 ± √36)/2 = (4 ± 6)/2"],
          difficulty: 2,
          tags: ["diskriminante", "lösungsformel", "quadratische-gleichung"],
        },
        {
          question:
            "Eine Parabel f(x) = ax² + bx + c hat ihren Scheitelpunkt bei S(3|4) und verläuft durch den Punkt P(1|12). Welchen Wert hat a?",
          options: ["a = 1", "a = 2", "a = 3", "a = 4", "a = 0,5"],
          correctIndex: 1,
          explanation:
            "In Scheitelpunktform: f(x) = a(x − 3)² + 4. Einsetzen von P(1|12): 12 = a(1 − 3)² + 4 = a×4 + 4 → 8 = 4a → a = 2. Vollständige Gleichung: f(x) = 2(x − 3)² + 4 = 2x² − 12x + 22. Probe: f(1) = 2 − 12 + 22 = 12. f(3) = 18 − 36 + 22 = 4. a = 2 > 0 → Öffnung nach oben, S ist Minimum.",
          hints: [
            "Scheitelpunktform: f(x) = a(x − 3)² + 4",
            "P(1|12) einsetzen und nach a auflösen",
          ],
          difficulty: 3,
          tags: ["scheitelpunktform", "parabel", "algebra"],
        },
      ],
    },
    {
      id: "ma-5-03",
      title: "Exponentialfunktionen",
      stichworte: [
        "Exponentialfunktion",
        "Eulersche Zahl",
        "Halbwertszeit",
        "Verdopplungszeit",
        "Exponentieller Zerfall",
        "Exponentielles Wachstum",
        "Pharmakokinetik",
        "Kinetik erster Ordnung",
        "Zerfallskonstante",
        "Asymptote",
        "Radioaktiver Zerfall",
        "Steady State",
      ],
      content: `## Einleitung

Stell dir vor, du legst 100 Euro auf ein Sparkonto mit Zinseszins. Jedes Jahr kommen nicht nur Zinsen auf dein Startkapital, sondern auch Zinsen auf die bisherigen Zinsen -- das Geld waechst immer schneller. Genau das ist **exponentielles Wachstum**. Umgekehrt gibt es **exponentiellen Zerfall**: Eine heisse Tasse Tee kuehlt anfangs schnell ab, dann immer langsamer. Die **Halbwertszeit** sagt dir, nach welcher Zeit die Haelfte uebrig ist.

**In diesem Kapitel lernst du:**
- was exponentielles Wachstum und Zerfall unterscheidet
- warum die e-Funktion nie den Wert null erreicht
- wie du die Halbwertszeit berechnest
- wie viel nach 1, 3 oder 5 Halbwertszeiten noch uebrig ist
- was die Verdopplungszeit bedeutet

---

{{DIAGRAM:coordinate-system}}

{{DIAGRAM:exponential-function}}

## Grundform und Eigenschaften





Die Exponentialfunktion hat die Form **f(x) = a × bˣ**. Die wichtigste Basis ist **e ≈ 2,718** (Eulersche Zahl).

Wichtige Eigenschaften:
- **Wertebereich**: immer positiv (nie 0 oder negativ!)
- **y-Achsenabschnitt**: f(0) = a
- **Asymptote**: y = 0 (die Kurve naehert sich der x-Achse, erreicht sie aber nie)
- b > 1 → Wachstum; 0 < b < 1 → Zerfall

> **Merke:** Die Exponentialfunktion ist **immer positiv** -- sie erreicht nie den Wert 0. Das ist eine haeufige MedAT-Falle!

---

## Wachstum und Zerfall

**Wachstum** (Basis > 1): f(t) = f₀ × eᵏᵗ (k > 0). Beispiel: Zinseszins, Pflanzenwachstum.

**Zerfall** (negativer Exponent): f(t) = f₀ × e⁻ᵏᵗ (k > 0). Beispiel: Abkuehlung, radioaktiver Zerfall.

| Typ | Formel | Beispiel |
|---|---|---|
| Wachstum | f(t) = f₀ × eᵏᵗ | Zinseszins |
| Zerfall | f(t) = f₀ × e⁻ᵏᵗ | Abkuehlung |

---

## Halbwertszeit

Die **Halbwertszeit T½** ist die Zeit, nach der die Haelfte uebrig ist:

**T½ = ln(2)/k ≈ 0,693/k**

Nach n Halbwertszeiten verbleiben: f₀ × (½)ⁿ

| Anzahl T½ | Restmenge |
|---|---|
| 1 | 50 % |
| 2 | 25 % |
| 3 | 12,5 % |
| 4 | 6,25 % |
| 5 | 3,1 % |

> **Merke:** Nach **5 Halbwertszeiten** sind weniger als 3,2 % uebrig. Diese Faustregel kommt haeufig am MedAT.

---

## Verdopplungszeit

Beim Wachstum heisst das Gegenstueck **Verdopplungszeit**: T₂ = ln(2)/k. Dieselbe Formel wie die Halbwertszeit, nur im Wachstumskontext.

---

## Potenzregeln (Wiederholung)

- aˣ × aʸ = aˣ⁺ʸ
- aˣ / aʸ = aˣ⁻ʸ
- (aˣ)ʸ = aˣ×ʸ
- a⁰ = 1
- a⁻ˣ = 1/aˣ

---

## Rechenbeispiele

**Beispiel 1 — Zinseszins:** 1000 Euro bei 5 % jaehrlich. Nach 10 Jahren: K = 1000 × 1,05¹⁰ ≈ **1629 Euro**. Verdopplungszeit: T₂ = ln(2)/ln(1,05) ≈ 0,693/0,049 ≈ **14 Jahre**.

**Beispiel 2 — Abkuehlung:** Eine Tasse Tee hat 80 °C ueber Raumtemperatur. Halbwertszeit T½ = 15 min. Nach 45 min (= 3 × T½): 80 × (½)³ = **10 °C** ueber Raumtemperatur.

---

## MedAT-Fokus

**Zur gezielten Pruefungsvorbereitung:**

**Typische Aufgabentypen:**
- Zerfall: f(t) = f₀ × e^(−kt); T½ = ln(2)/k
- Rest nach n Halbwertszeiten: f₀ × (½)ⁿ
- Wachstum: f(t) = f₀ × eᵏᵗ; Verdopplungszeit = ln(2)/k

**Typische Fallen:**
- e-Funktion wird nie exakt 0
- T½ = ln(2)/k (nicht 1/k)
- Nach 3 × T½ bleiben 12,5 % (nicht 1/3)

**Minimal-Rechenrezepte:**
- **T½** = ln(2)/k ≈ 0,693/k. **k** = ln(2)/T½.
- **Rest nach n × T½:** f₀ × (½)ⁿ.

---

## Zusammenfassung (ultrakompakt)

- **Wachstum:** f(t) = f₀ × eᵏᵗ; **Zerfall:** f(t) = f₀ × e⁻ᵏᵗ
- **T½ = ln(2)/k ≈ 0,693/k**; nach n × T½: (½)ⁿ uebrig
- **e ≈ 2,718**; e-Funktion ist immer positiv
- **Nach 5 × T½:** weniger als 3,2 % Rest
- **Fehler vermeiden:** T½ = ln(2)/k, nicht 1/k`,
      contentExtended: `## Einleitung

Paracetamol hat eine Halbwertszeit von etwa 2 Stunden -- nach 2 Stunden ist die Haelfte abgebaut, nach 4 Stunden ein Viertel, nach 10 Stunden weniger als 3 %. Dieses Muster ist kein Zufall, sondern eine **Exponentialfunktion**: Die Aenderungsrate ist proportional zum aktuellen Bestand. Ob Bakterienwachstum, radioaktiver Zerfall oder der Medikamentenspiegel im Blut -- ueberall beschreibt f(t) = f_0 mal e hoch (plus oder minus kt) den Verlauf. Die **Halbwertszeit** ist dabei der zentrale Parameter.

**In diesem Kapitel lernst du:**
- was exponentielles Wachstum und exponentiellen Zerfall unterscheidet und wie die Grundformel aufgebaut ist
- warum die Exponentialfunktion nie den Wert null erreicht -- auch wenn sie sich ihm beliebig naehert
- wie du die Halbwertszeit aus der Zerfallskonstante berechnest und umgekehrt
- wie viel nach einer, drei oder fuenf Halbwertszeiten noch uebrig ist (die 50-12,5-3-Prozent-Regel)
- was Steady-State bedeutet und wann er bei Dauertherapie erreicht wird

---

{{DIAGRAM:coordinate-system}}

{{DIAGRAM:exponential-function}}

**Idee:** **Exponentialfunktion** f(t) = f₀×e^(±kt): **Zerfall** (k>0, Minus im Exponenten) → Konzentration/ Menge nimmt ab; **Wachstum** (k>0, Plus) → nimmt zu. **Halbwertszeit** T½ = ln(2)/k ≈ 0,693/k — Zeit, bis die Hälfte übrig ist. Nach 5×T½ < 3,2 % Rest.

**Verfahren — Schrittfolge:** (1) **Zerfall:** f(t) = f₀×e^(−kt). (2) **T½ aus k:** T½ = ln(2)/k. **k aus T½:** k = ln(2)/T½. (3) **Rest nach n Halbwertszeiten:** f = f₀×(½)ⁿ. (4) **Steady-State** (Sättigung): f(t) = A×(1−e^(−kt)) → Grenzwert A.

**Typische Prüfungsfehler:** e-Funktion wird nie exakt 0 (nur Asymptote). T½ = ln(2)/k (nicht 1/k). Nach 3×T½ bleiben 12,5 % (½³), nicht 1/3.

---

## Grundform und Eigenschaften





Die Exponentialfunktion hat die allgemeine Form **f(x) = a × bˣ** mit der Basis b > 0, b ≠ 1, und dem Vorfaktor a > 0. Die wichtigste Basis ist die **Eulersche Zahl e ≈ 2,71828...**, was zur natürlichen Exponentialfunktion f(x) = eˣ führt.

Eigenschaften der Exponentialfunktion:
- **Definitionsbereich**: D = ℝ (alle reellen Zahlen)
- **Wertebereich**: W = (0, ∞) (stets positiv!)
- **y-Achsenabschnitt**: f(0) = a × b⁰ = a
- **Horizontale Asymptote**: y = 0 (x → −∞)
- **Monotonie**: b > 1 → streng monoton steigend (Wachstum); 0 < b < 1 → streng monoton fallend (Zerfall)
- **Keine Nullstellen**: Da f(x) = a × bˣ > 0 für alle x gilt

> **Merke:** Die Exponentialfunktion ist **immer positiv** — sie kann niemals den Wert 0 oder negative Werte annehmen. Das ist eine häufige MedAT-Falle: "Die Konzentration eines Medikaments erreicht nach unendlich langer Zeit den Wert 0" ist mathematisch falsch (sie nähert sich nur asymptotisch an).

## Wachstum und Zerfall

**Exponentielles Wachstum** (b > 1 oder positiver Exponent): f(t) = f₀ × eᵏᵗ (k > 0)

Typische Beispiele: Bakterienwachstum, Zinseszins, unkontrollierte Zellvermehrung.

**Exponentieller Zerfall** (0 < b < 1 oder negativer Exponent): f(t) = f₀ × e⁻ᵏᵗ (k > 0)

Typische Beispiele: Radioaktiver Zerfall, Medikamentenabbau im Blut (Pharmakokinetik erster Ordnung), Abklingen elektrischer Ströme.

| Typ | Formel | k-Wert | Beispiel |
|---|---|---|---|
| Wachstum | f(t) = f₀ × eᵏᵗ | k > 0 | Bakterienkultur |
| Zerfall | f(t) = f₀ × e⁻ᵏᵗ | k > 0 | Medikamentenabbau |
| Sättigung | f(t) = A × (1 − e⁻ᵏᵗ) | k > 0 | Steady-State-Aufbau |

## Halbwertszeit

Die **Halbwertszeit T₁/₂** ist die Zeit, nach der eine exponentiell abnehmende Größe auf die Hälfte ihres Ausgangswertes gesunken ist:

f(T₁/₂) = f₀/2 = f₀ × e^(−k×T₁/₂)

1/2 = e^(−k×T₁/₂)

ln(1/2) = −k×T₁/₂

**T₁/₂ = ln(2)/k ≈ 0,693/k**

Nach n Halbwertszeiten verbleiben: f(n×T₁/₂) = f₀ × (1/2)ⁿ

| Anzahl T½ | Restmenge | In Prozent |
|---|---|---|
| 1 | f₀/2 | 50 % |
| 2 | f₀/4 | 25 % |
| 3 | f₀/8 | 12,5 % |
| 4 | f₀/16 | 6,25 % |
| 5 | f₀/32 | 3,1 % |

> **Merke:** Nach **5 Halbwertszeiten** sind weniger als 3,2 % der Ausgangssubstanz übrig — klinisch gilt das Medikament als vollständig eliminiert. Diese Faustregel wird im MedAT häufig abgefragt.

## Verdopplungszeit

Das Pendant beim Wachstum ist die **Verdopplungszeit T₂**:

T₂ = ln(2)/k ≈ 0,693/k

Die Formel ist identisch — der Unterschied liegt nur im Kontext (Zerfall vs. Wachstum).

## Eulersche Zahl e

e ≈ 2,71828 ist die Basis der natürlichen Exponentialfunktion. Sie ist definiert als:
- e = lim(n→∞)(1 + 1/n)ⁿ
- e ist die Basis, für welche die Exponentialfunktion ihre eigene Ableitung ist: (eˣ)' = eˣ

In der Finanzmathematik taucht e bei der stetigen Verzinsung auf: Kapital K nach t Jahren bei Zinssatz r ergibt sich als K(t) = K₀ × eʳᵗ. Beim Zinseszins mit n Zinsperioden pro Jahr: K = K₀ × (1 + r/n)ⁿᵗ, und für n → ∞ konvergiert dies gegen K₀ × eʳᵗ.

## Die e-Funktion in der Pharmakokinetik

Bei der **Kinetik erster Ordnung** gilt: Die Eliminationsrate ist proportional zur aktuellen Konzentration. Das führt zur Differentialgleichung dC/dt = −k×C mit der Lösung:

**C(t) = C₀ × e^(−k×t)**

wobei C₀ die Anfangskonzentration und k die Eliminationskonstante ist. Der pH-abhängige Ionisierungsgrad von Arzneimitteln folgt ebenfalls einer exponentiellen Beziehung (Henderson-Hasselbalch).

**Kinetik erster Ordnung vs. nullter Ordnung:** Bei Kinetik erster Ordnung ist die Eliminationsrate proportional zur Konzentration (exponentieller Abfall). Bei Kinetik nullter Ordnung ist die Eliminationsrate konstant (linearer Abfall) — Beispiel: Ethanolabbau in der Leber bei gesättigter Alkoholdehydrogenase.

## Exponentialfunktionen umformen

Jede Exponentialfunktion f(x) = aˣ lässt sich als f(x) = eˣ×ln(a) schreiben, da aˣ = e^(x×ln(a)). Diese Umformung verbindet Exponential- und Logarithmusfunktion und ist für Ableitungen und Integrale unerlässlich.

**Rechenregeln für Potenzen** (Wiederholung):
- aˣ × aʸ = aˣ⁺ʸ
- aˣ / aʸ = aˣ⁻ʸ
- (aˣ)ʸ = aˣ×ʸ
- a⁰ = 1 (für a ≠ 0)
- a⁻ˣ = 1/aˣ

## Rechenbeispiele

**Beispiel 1 — Pharmakokinetik: Gentamicin-Talspiegel:**
C₀ = 8 mg/L (Peak), k = 0,231 h⁻¹ (T½ = ln2/0,231 = 3 h). Talspiegel nach 8 h: C(8) = 8 × e^(−0,231×8) = 8 × e^(−1,848) = 8 × 0,158 = **1,26 mg/L**. Therapeutisch: Talspiegel < 2 mg/L (Nephrotoxizitätsgrenze) → **im sicheren Bereich**.

**Beispiel 2 — Bakterienwachstum:**
Ausgangskolonie: N₀ = 1000. Verdopplungszeit 30 min → k = ln2/30 = 0,0231 min⁻¹. Nach 4 h (240 min): N = 1000 × e^(0,0231×240) = 1000 × e^(5,544) = 1000 × 256 = **256.000 Bakterien**. Alternativ: 240/30 = 8 Verdopplungen → 1000 × 2⁸ = **256.000**.

**Beispiel 3 — Radioaktiver Zerfall: ⁹⁹ᵐTc-Szintigraphie:**
T½ = 6,01 h, Injektionsaktivität A₀ = 740 MBq. k = ln2/6,01 = 0,1153 h⁻¹. Nach 24 h: A = 740 × e^(−0,1153×24) = 740 × e^(−2,767) = 740 × 0,0628 = **46,5 MBq**. Restaktivität = 46,5/740 = **6,3%** — Patient kann nach 24 h bedenkenlos Kontakt mit Kindern haben (<5% gilt als unbedenklich, hier knapp darüber).

**Beispiel 4 — Steady-State-Aufbau:**
Medikament mit T½ = 12 h, Dosierung alle 12 h. Anteil des Steady-State nach n Dosen: 1 − (½)ⁿ. Nach 1 Dosis: 50 %, nach 2: 75 %, nach 3: 87,5 %, nach 4: 93,75 %, nach 5: 96,9 %. Klinische Faustregel: **Steady State nach 4–5 T½** (94–97 % erreicht).

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Typische Aufgabentypen:**
- Zerfall f(t) = f₀×e^(−kt); T½ = ln(2)/k; k aus T½; Rest nach n×T½ = f₀×(½)ⁿ
- Pharmakokinetik C(t) = C₀×e^(−kt); Steady-State nach 4–5×T½
- Wachstum f(t) = f₀×e^(kt); Verdopplungszeit T₂ = ln(2)/k

**Minimal-Rechenrezepte:**
- **Zerfall:** C(t) = C₀×e^(−kt). **T½** = ln(2)/k ≈ 0,693/k. **k** = ln(2)/T½.
- **Rest nach n×T½:** f = f₀×(½)ⁿ. Nach 5×T½: < 3,2 %. **Steady-State:** nach 4–5×T½.

---

## Zusammenfassung (ultrakompakt)

- **Wachstum**: N(t) = N₀×eᵏᵗ (k > 0); **Zerfall**: C(t) = C₀×e⁻ᵏᵗ (k > 0)
- **Halbwertszeit**: T½ = ln(2)/k ≈ 0,693/k; k = ln(2)/T½; N(t) = N₀×(½)^(t/T½)
- **Eulersche Zahl**: e ≈ 2,718; f(x) = eˣ ist ihre eigene Ableitung
- **Steady State**: nach 4–5 Halbwertszeiten werden 94–97% erreicht; nach 1×T½: 50%, 2×T½: 75%, ...
- **Klinisch**: Paracetamol T½ = 2h; ⁹⁹ᵐTc T½ = 6h; Bakterienverdopplungszeit; Kapitalverzinsung`,
      lernziele: [
        "Exponentialfunktionen in der Form f(t) = f₀ × e^(kt) aufstellen und Wachstum von Zerfall unterscheiden.",
        "Die Halbwertszeit T₁/₂ = ln(2)/k aus der Eliminationskonstante berechnen und umgekehrt.",
        "Den Restbestand nach einer gegebenen Zeit als Vielfaches der Halbwertszeit bestimmen.",
        "Die pharmakokinetische Gleichung C(t) = C₀ × e^(−kt) in klinischen Szenarien anwenden.",
        "Die Eigenschaften der Exponentialfunktion (Asymptote, Wertebereich, Monotonie) kennen und im Graphen identifizieren.",
      ],
      sections: [
        {
          heading: "Wachstum und Zerfall — Grundprinzip",
          text: "Exponentielles Wachstum oder Zerfall liegt vor, wenn die Änderungsrate einer Größe proportional zu ihrem aktuellen Wert ist: dN/dt = k×N. Für k > 0 (Wachstum) lautet die Lösung N(t) = N₀×eᵏᵗ, für k < 0 (Zerfall) N(t) = N₀×e^(|k|×t). Die Exponentialfunktion ist die einzige Funktion, die ihrer eigenen Ableitung entspricht: (eˣ)' = eˣ, was ihren fundamentalen Status in der Mathematik begründet.",
          merksatz:
            "Exponentieller Zerfall: C(t) = C₀ × e^(−kt). Wachstum: N(t) = N₀ × e^(+kt). k > 0 immer.",
        },
        {
          heading: "Halbwertszeit — Ableitung und Bedeutung",
          text: "Die Halbwertszeit ergibt sich aus C₀/2 = C₀×e^(−k×T½) → 1/2 = e^(−k×T½) → ln(1/2) = −k×T½ → T½ = ln(2)/k ≈ 0,693/k. Die Halbwertszeit ist unabhängig von der Ausgangsmenge: Egal ob 1000 mg oder 100 mg, nach einer Halbwertszeit ist stets die Hälfte übrig. Nach n Halbwertszeiten verbleiben (1/2)ⁿ des Ausgangswertes.",
          merksatz:
            "T½ = ln(2)/k ≈ 0,693/k. Nach einer T½: 50 %, nach zwei T½: 25 %, nach n T½: (½)ⁿ.",
        },
        {
          heading: "Pharmakologische Kinetik erster Ordnung",
          text: "Die meisten Medikamente werden nach Kinetik erster Ordnung eliminiert: Die Eliminationsrate (mg/h) ist proportional zur aktuellen Plasmakonzentration. Das bedeutet: Je höher die Konzentration, desto schneller wird eliminiert. Nach 4–5 Halbwertszeiten ist das Medikament zu ≥ 94 % eliminiert (Faustregel: praktisch vollständig weg). Das Gleichgewicht (Steady State) bei regelmäßiger Gabe wird ebenfalls nach 4–5 Halbwertszeiten erreicht.",
          merksatz:
            "Kinetik 1. Ordnung: C(t) = C₀×e^(−kt). Nach 5×T½ ≈ 97 % eliminiert → klinisch vollständig weg.",
        },
      ],
      diagram: "coordinate-system",
      merksätze: [
        "f(x) = a × bˣ: b > 1 Wachstum; 0 < b < 1 Zerfall.",
        "Natürliche Basis: e ≈ 2,718; (eˣ)' = eˣ.",
        "Exponentieller Zerfall: C(t) = C₀ × e^(−kt), k > 0.",
        "Halbwertszeit: T½ = ln(2)/k ≈ 0,693/k.",
        "Nach n Halbwertszeiten: (½)ⁿ des Ausgangswerts übrig.",
        "Horizontale Asymptote der e-Funktion: y = 0 für x → −∞.",
        "Wertebereich der Exponentialfunktion: stets (0, ∞), niemals negativ.",
        "Kinetik 1. Ordnung: Eliminationsrate ~ Konzentration.",
        "Steady State: nach 4–5 Halbwertszeiten bei regelmäßiger Dosierung.",
        "Verdopplungszeit = T½ = ln(2)/k (Formel identisch, Kontext verschieden).",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie das Konzept der Halbwertszeit eines Medikaments und erklären Sie, wie die pharmakokinetische Gleichung C(t) = C₀ × e^(−kt) klinisch interpretiert wird.",
        answer:
          "Die Halbwertszeit T½ eines Medikaments ist die Zeit, nach der die Plasmakonzentration auf die Hälfte des vorherigen Wertes gesunken ist. Sie ergibt sich mathematisch aus der Bedingung C₀/2 = C₀ × e^(−k×T½), woraus nach Kürzen durch C₀ folgt: ln(1/2) = −k×T½, also T½ = ln(2)/k ≈ 0,693/k. Die Halbwertszeit ist eine Eigenschaft des Medikament-Körper-Systems und unabhängig von der Dosis: Unabhängig davon, ob 1 mg oder 1 g gegeben wurde, sinkt die Konzentration in jeder Halbwertszeit um 50 %. Die pharmakokinetische Gleichung C(t) = C₀ × e^(−kt) beschreibt den monoexponentiellen Konzentrationsabfall, der für die Kinetik erster Ordnung charakteristisch ist. Dies bedeutet: Die Eliminationsrate (dC/dt = −k×C) ist stets proportional zur aktuellen Konzentration — eine hohe Konzentration wird schnell abgebaut, eine niedrige langsam. Nach einer Halbwertszeit sind 50 % übrig, nach zwei 25 %, nach drei 12,5 %, nach vier 6,25 %, nach fünf ca. 3 %. In der klinischen Praxis gilt nach 4–5 Halbwertszeiten ein Medikament als praktisch vollständig eliminiert. Beim Aufbau eines Steady State bei regelmäßiger Einnahme gilt dieselbe Faustregel: Nach 4–5 Halbwertszeiten ist die Gleichgewichtskonzentration erreicht.",
      },
      klinischerBezug:
        "Penicillin hat eine Halbwertszeit von ca. 30–60 min und muss daher mehrmals täglich gegeben werden, während Amiodaron mit T½ ≈ 40–55 Tagen noch Wochen nach Absetzen wirksam bleibt und zahlreiche Wechselwirkungen verursachen kann. Die pharmakokinetische Gleichung C(t) = C₀×e^(−kt) ist die mathematische Grundlage für die Berechnung von Dosierungsintervallen, Aufsättigungsdosen und der Zeit bis zur vollständigen Medikamentenelimination vor Operationen. Radioaktive Isotope in der Nuklearmedizin (z. B. Technetium-99m mit T½ ≈ 6 h) unterliegen derselben Exponentialkinetik, was die Berechnung optimaler Bildgebungszeitpunkte ermöglicht.",
      selfTest: [
        {
          question:
            "Ein Medikament hat eine Eliminationskonstante k = 0,0693 h⁻¹. Wie lange ist die Halbwertszeit?",
          options: ["5 h", "10 h", "7 h", "14 h", "3 h"],
          correctIndex: 1,
          explanation:
            "T½ = ln(2)/k = 0,693/0,0693 h⁻¹ = 10 h. ln(2) ≈ 0,693 ist ein Schlüsselwert, den man auswendig kennen sollte. Die Einheit von k ist h⁻¹ (pro Stunde), also ist T½ in Stunden angegeben. Klinisches Beispiel: Bei diesem Medikament wäre nach 50 h (≈ 5 Halbwertszeiten) weniger als 3,1 % der Ausgangsdosis übrig — praktisch vollständig eliminiert.",
          hints: ["T½ = ln(2)/k ≈ 0,693/k", "T½ = 0,693/0,0693 = 10"],
          difficulty: 1,
          tags: ["halbwertszeit", "zerfallskonstante", "exponentialfunktion"],
        },
        {
          question:
            "Ein Patient erhält eine Einzeldosis von 400 mg eines Antibiotikums (T½ = 4 h). Wie viel mg sind nach 12 h noch im Körper?",
          options: ["25 mg", "50 mg", "100 mg", "200 mg", "12,5 mg"],
          correctIndex: 1,
          explanation:
            "12 h entsprechen 12/4 = 3 Halbwertszeiten. Nach 3 Halbwertszeiten verbleiben (½)³ = 1/8 der Ausgangsdosis: 400 mg × (1/8) = 50 mg. Systematisch: nach 4 h → 200 mg, nach 8 h → 100 mg, nach 12 h → 50 mg. Diese Berechnungsmethode ist schneller als die exponentielle Formel und liefert für ganzzahlige Halbwertszeiten exakte Ergebnisse.",
          hints: ["n = 12 h / 4 h = 3 Halbwertszeiten", "Restmenge = 400 × (½)³ = 400/8"],
          difficulty: 1,
          tags: ["halbwertszeit", "pharmakokinetik", "restmenge"],
        },
        {
          question: "Welche der folgenden Aussagen über f(x) = 3 × e^(−2x) ist FALSCH?",
          options: [
            "Die Funktion ist streng monoton fallend.",
            "Die Funktion hat keine Nullstellen.",
            "Der y-Achsenabschnitt liegt bei y = 3.",
            "Die horizontale Asymptote ist y = 0.",
            "Die Funktion nimmt für x → ∞ negative Werte an.",
          ],
          correctIndex: 4,
          explanation:
            "f(x) = 3×e^(−2x): Da e^(−2x) > 0 für alle x und der Vorfaktor 3 > 0, gilt f(x) > 0 für alle x ∈ ℝ. Die Funktion kann niemals negative Werte annehmen — das ist eine fundamentale Eigenschaft der Exponentialfunktion. Für x → ∞ nähert sich f(x) von oben der Asymptote y = 0, ohne sie je zu erreichen. Alle anderen Aussagen sind korrekt: fallend (negativer Exponent), keine Nullstellen, f(0) = 3, y = 0 als Asymptote.",
          hints: [
            "e^(−2x) > 0 für alle x; Vorfaktor 3 > 0",
            "Exponentialfunktion ist stets positiv",
          ],
          difficulty: 2,
          tags: ["exponentialfunktion", "wertebereich", "algebra"],
        },
        {
          question:
            "Eine Bakterienkultur verdoppelt sich alle 20 min. Wie viele Bakterien gibt es nach 2 h, wenn zu Beginn 1000 Bakterien vorhanden waren?",
          options: ["32 000", "64 000", "16 000", "128 000", "48 000"],
          correctIndex: 1,
          explanation:
            "2 h = 120 min. Anzahl der Verdopplungen: n = 120/20 = 6. Anzahl = 1000 × 2⁶ = 1000 × 64 = 64 000. Oder: f(t) = 1000 × e^(k×t) mit k = ln(2)/20 min. f(120) = 1000 × e^(ln(2)/20 × 120) = 1000 × e^(6×ln(2)) = 1000 × 2⁶ = 64 000. Exponentielles Bakterienwachstum erklärt, warum eine unkontrollierte Infektion so schnell lebensbedrohlich werden kann.",
          hints: ["n Verdopplungen in 120 min: n = 120/20 = 6", "Anzahl = 1000 × 2⁶"],
          difficulty: 2,
          tags: ["wachstumsfunktion", "verdopplung", "bakterien"],
        },
        {
          question:
            "Die Gleichgewichtskonzentration (Steady State) eines oral verabreichten Medikaments mit T½ = 8 h wird bei regelmäßiger Einnahme nach ca. wie vielen Stunden erreicht?",
          options: ["8 h", "16 h", "24 h", "32–40 h", "4 h"],
          correctIndex: 3,
          explanation:
            "Der Steady State wird nach 4–5 Halbwertszeiten erreicht: 4 × 8 h = 32 h bis 5 × 8 h = 40 h. Dies gilt unabhängig von Dosis oder Dosierungsintervall. Nach 4 T½ sind ca. 94 % des Steady-State-Niveaus erreicht, nach 5 T½ ca. 97 %. Diese Faustregel ist klinisch entscheidend: Bei Aufsättigungsdosen (z. B. Amiodaron, Digitalis) überspringt man diese Phase und erreicht sofort therapeutische Spiegel, um lebensgefährliche Wartezeiten zu vermeiden.",
          hints: ["Steady State nach 4–5 T½", "4 × 8 h = 32 h, 5 × 8 h = 40 h"],
          difficulty: 2,
          tags: ["steady-state", "pharmakokinetik", "halbwertszeit"],
        },
      ],
    },
    {
      id: "ma-5-04",
      title: "Logarithmusfunktionen",
      stichworte: [
        "Logarithmus",
        "Natürlicher Logarithmus",
        "Zehnerlogarithmus",
        "pH-Wert",
        "Henderson-Hasselbalch",
        "Logarithmengesetze",
        "Basiswechsel",
        "Semilog-Plot",
        "Umkehrfunktion",
        "Dezibel",
        "Produktregel",
        "Quotientenregel",
      ],
      content: `## Einleitung

Warum ist die Richterskala fuer Erdbeben logarithmisch? Weil ein Beben der Staerke 6 zehnmal so stark ist wie Staerke 5. Der **Logarithmus** verwandelt riesige Zahlenbereiche in handliche Skalen. Du kennst das vom pH-Wert in der Chemie oder von der Dezibel-Skala fuer Lautstaerke. Wer die drei Logarithmengesetze beherrscht, kann Exponentialgleichungen loesen und viele MedAT-Aufgaben schnell knacken.

**In diesem Kapitel lernst du:**
- wie der Logarithmus als Umkehrung der Exponentialfunktion funktioniert
- wann du log, ln oder ld verwendest
- wie du mit den drei Logarithmengesetzen (Produkt, Quotient, Potenz) rechnest
- wie der pH-Wert mit dem Logarithmus zusammenhaengt
- wie du den Basiswechsel anwendest

---

{{DIAGRAM:coordinate-system}}

{{DIAGRAM:logarithm-function}}

## Definition und Grundbegriffe





Der Logarithmus ist die **Umkehrung der Exponentialfunktion**:

**log_b(x) = y bedeutet: b^y = x**

In einfachen Worten: "Wie oft muss ich b mit sich selbst multiplizieren, um x zu erhalten?"

Wichtige Varianten:
- **log₁₀(x)** (Zehnerlogarithmus, kurz "log"): Basis 10 -- fuer pH-Wert, Dezibel
- **ln(x)** (natuerlicher Logarithmus): Basis e ≈ 2,718
- **log₂(x)** bzw. **ld(x)**: Basis 2 -- z. B. ld(16) = 4 (weil 2⁴ = 16)

> **Merke:** Der Logarithmus ist nur fuer **positive Zahlen** definiert. ln(0) und ln(negativ) existieren nicht -- haeufige MedAT-Falle! Ausserdem: log(a + b) ≠ log a + log b.

---

## Logarithmengesetze

Die drei wichtigsten Regeln (gelten fuer alle Basen):

1. **Produktregel**: log(a × b) = log(a) + log(b)
2. **Quotientenregel**: log(a/b) = log(a) − log(b)
3. **Potenzregel**: log(aⁿ) = n × log(a)

**Basiswechsel**: log_b(x) = ln(x)/ln(b)

| Regel | Formel | Beispiel |
|---|---|---|
| Produktregel | log(a×b) = log a + log b | log(2×5) = log 10 = 1 |
| Quotientenregel | log(a/b) = log a − log b | ln(1/2) = −ln 2 |
| Potenzregel | log(aⁿ) = n × log a | log(10³) = 3 |
| Basiswechsel | log_b(x) = ln x / ln b | log₂(8) = ln 8/ln 2 = 3 |

**Spezialwerte**: log(1) = 0; ln(e) = 1; log(10) = 1

---

## Eigenschaften der Logarithmusfunktion

- **Definitionsbereich**: nur positive Zahlen (x > 0)
- **Nullstelle**: x = 1 (weil log(1) = 0)
- **Asymptote**: x = 0 (die Kurve geht gegen −∞)
- Waechst unbegrenzt, aber sehr langsam

---

## pH-Wert

Der **pH-Wert** nutzt den Zehnerlogarithmus: **pH = −log₁₀([H⁺])**

Beispiele:
- [H⁺] = 10⁻⁷ mol/L → pH = 7 (neutral)
- [H⁺] = 10⁻² mol/L → pH = 2 (sauer)

Umkehrung: **[H⁺] = 10^(−pH)**

> **Merke:** Eine pH-Aenderung um 1 bedeutet eine **10-fache** Aenderung der Protonenkonzentration. Eine Aenderung um 2 Einheiten = Faktor 100.

---

## Nuetzliche Merkwerte

- ln(2) ≈ 0,693
- log(2) ≈ 0,301
- log(3) ≈ 0,477
- ln(10) ≈ 2,303

---

## Rechenbeispiele

**Beispiel 1 — Exponentialgleichung loesen:** Gesucht: x aus 5ˣ = 200. Logarithmieren: x = ln(200)/ln(5) = 5,298/1,609 = **3,29**.

**Beispiel 2 — Dezibel:** Lautstaerke steigt um 20 dB. Intensitaetsfaktor: 10^(20/10) = 10² = **100-fach** lauter. Merke: +10 dB = Faktor 10, +3 dB ≈ Faktor 2.

---

## MedAT-Fokus

**Zur gezielten Pruefungsvorbereitung:**

**Typische Aufgabentypen:**
- Logarithmengesetze anwenden (Produkt, Quotient, Potenz)
- pH = −log([H⁺]); [H⁺] = 10^(−pH)
- Dezibel: +10 dB = Faktor 10; +3 dB ≈ Faktor 2
- Basiswechsel; ln nur fuer x > 0

**Typische Fallen:**
- ln(0) existiert nicht
- log(a + b) ≠ log a + log b
- pH: Minus nicht vergessen

**Minimal-Rechenrezepte:**
- **Gesetze:** log(a×b) = log a + log b; log(a/b) = log a − log b; log(aⁿ) = n × log a.
- **pH:** pH = −log₁₀([H⁺]); [H⁺] = 10^(−pH).

---

## Zusammenfassung (ultrakompakt)

- **log_b(x) = y bedeutet b^y = x**
- **Gesetze:** Produkt → Summe; Quotient → Differenz; Potenz → Faktor
- **Basiswechsel:** log_b(x) = ln(x)/ln(b)
- **pH = −log₁₀([H⁺])**; 1 pH-Einheit = Faktor 10
- **Dezibel:** +10 dB = 10-fach; +3 dB ≈ 2-fach
- **Fehler vermeiden:** ln nur fuer x > 0; log(a+b) ≠ log a + log b`,
      contentExtended: `## Einleitung

Warum hat Blut einen pH von 7,4 — und warum ist bereits ein Abfall auf 7,0 lebensbedrohlich? Die Antwort steckt im Logarithmus: Eine pH-Einheit entspricht einem Faktor 10 bei der Protonenkonzentration. Der Logarithmus verwandelt riesige Zahlenbereiche in handliche Skalen — vom pH-Wert über die Dezibel-Skala des Gehörs bis zur Halbwertszeitberechnung in der Pharmakokinetik. Wer die drei Logarithmengesetze sicher beherrscht, kann Exponentialgleichungen lösen und klinische Pufferprobleme (Henderson-Hasselbalch) bearbeiten.

**In diesem Kapitel lernst du:**
- wie der Logarithmus als Umkehrung der Exponentialfunktion funktioniert und wann du log, ln oder ld verwendest
- wie du mit den drei Logarithmengesetzen (Produkt, Quotient, Potenz) Gleichungen vereinfachst
- wie der pH-Wert aus der Protonenkonzentration berechnet wird und warum kleine pH-Änderungen klinisch dramatisch sind
- wie die Henderson-Hasselbalch-Gleichung den Puffer im Blut beschreibt
- wie logarithmische Skalen (Dezibel, Semilog-Plot) exponentielle Zusammenhänge linearisieren

---

{{DIAGRAM:coordinate-system}}

{{DIAGRAM:logarithm-function}}

**Idee:** **Logarithmus** = Umkehr der Exponentialfunktion: log_b(x) = y ⇔ b^y = x. **pH = −log₁₀([H⁺])** — 1 pH-Einheit = Faktor 10 in [H⁺]. **log(ab) = log a + log b**; **log(a/b) = log a − log b**; **log(aⁿ) = n×log a**. ln nur für x > 0 definiert.

**Verfahren — Schrittfolge:** (1) **pH aus [H⁺]:** pH = −log₁₀([H⁺]). **[H⁺] aus pH:** [H⁺] = 10^(−pH). (2) **Henderson-Hasselbalch:** pH = pKₐ + log([A⁻]/[HA]). (3) **Dezibel:** L = 10×log(I/I₀); +3 dB = Faktor 2, +10 dB = Faktor 10. (4) **Basiswechsel:** log_b(x) = ln(x)/ln(b).

**Typische Prüfungsfehler:** ln(0) und ln(negativ) existieren nicht. log(a+b) ≠ log a + log b. pH: Vorzeichen nicht vergessen (pH = **−**log([H⁺])).

---

## Definition und Grundbegriffe





Der Logarithmus ist die **Umkehrfunktion der Exponentialfunktion**. Für die Basis b > 0, b ≠ 1 gilt:

**log_b(x) = y ⟺ b^y = x**

In Worten: "Der Logarithmus von x zur Basis b ist der Exponent, mit dem man b potenzieren muss, um x zu erhalten." Diese Umkehrbeziehung ist der Schlüssel zum Lösen von Exponentialgleichungen.

Wichtige Spezialfälle:
- **log₁₀(x)** (Zehnerlogarithmus, oft kurz "log"): Basis 10 — verwendet für pH-Wert, Dezibel
- **ln(x)** (natürlicher Logarithmus): Basis e ≈ 2,718 — verwendet in Pharmakokinetik, Physik. **ln(x) ist nur für x > 0 definiert** (MedAT-Falle: ln(0) und ln(negativ) existieren nicht).
- **log₂(x)** bzw. **ld(x)** (Logarithmus dualis, Binärlogarithmus): Basis 2 — **ld = log₂**. Es gilt **ld(2ⁿ) = n**, z. B. **ld(16) = 4** (weil 2⁴ = 16). Verwendet bei Halbwertszeiten, Informatik.

> **Merke:** Logarithmus beantwortet die Frage: "Wie oft muss ich die Basis mit sich selbst multiplizieren, um x zu erreichen?" **ld(16) = 4**, weil 2⁴ = 16. **log(a·b) = log a + log b** gilt nur bei **gleicher Basis**; **ld(a+b) ≠ ld a + ld b** (typische Falle!).

## Rechenregeln

Die wichtigsten Logarithmengesetze (für alle Basen gleich):

1. **Produktregel**: log(a × b) = log(a) + log(b)
2. **Quotientenregel**: log(a/b) = log(a) − log(b)
3. **Potenzregel**: log(aⁿ) = n × log(a)
4. **Basiswechsel**: log_b(x) = ln(x)/ln(b) = log(x)/log(b)
5. **Spezialwerte**: log(1) = 0; log(b) = 1; log(b^n) = n; b^(log_b(x)) = x

| Regel | Formel | Beispiel |
|---|---|---|
| Produktregel | log(a×b) = log a + log b | log(2×5) = log 2 + log 5 = log 10 = 1 |
| Quotientenregel | log(a/b) = log a − log b | ln(1/2) = ln 1 − ln 2 = −ln 2 |
| Potenzregel | log(aⁿ) = n × log a | log(10³) = 3 × log 10 = 3 |
| Basiswechsel | log_b(x) = ln x / ln b | log₂(8) = ln 8 / ln 2 = 3 |

## Eigenschaften der Logarithmusfunktion

- **Definitionsbereich**: D = (0, ∞) — nur positive Zahlen!
- **Wertebereich**: W = ℝ (alle reellen Zahlen)
- **Nullstelle**: x = 1 (da log(1) = 0 für jede Basis)
- **Vertikale Asymptote**: x = 0 (Funktion geht gegen −∞)
- **Monotonie**: b > 1 → streng monoton steigend; 0 < b < 1 → streng monoton fallend
- **Kein Maximum, kein Minimum**: Funktion wächst unbegrenzt (aber sehr langsam)

**Achtung MedAT-Falle:** **ln(x) nur für x > 0 definiert.** log(0) und log(negativ) existieren nicht. Bei Gleichungen der Form U = (a/b)·ln(A/B): U = 0 nur wenn A = B (nicht wenn A = 0 oder B = 0 — dann ist ln nicht definiert!). Bei a > 0 und b < 0 ist a/b < 0; für A > B > 0 ist ln(A/B) > 0, also **U < 0**.

## pH-Wert — Logarithmus in der Medizin

Der **pH-Wert** ist definiert als negativer dekadischer Logarithmus der Wasserstoffionenkonzentration:

**pH = −log₁₀([H⁺])** oder **pH = −log₁₀([H₃O⁺])**

Beispiele:
- [H⁺] = 10⁻⁷ mol/L → pH = −log(10⁻⁷) = 7 (neutral)
- [H⁺] = 10⁻² mol/L → pH = 2 (stark sauer)
- [H⁺] = 10⁻¹⁴ mol/L → pH = 14 (stark basisch)

**Umrechnung pH → [H⁺]**: [H⁺] = 10^(−pH)

Eine pH-Änderung um 1 entspricht einer **10-fachen** Änderung der [H⁺]! Eine Änderung um 2 Einheiten entspricht einem Faktor 100.

> **Merke:** pH = 7,4 (Normalblut) entspricht [H⁺] ≈ 40 nmol/L. Eine Verdoppelung der [H⁺] auf 80 nmol/L senkt den pH nur um log(2) ≈ 0,3 auf pH 7,1 — bereits eine lebensbedrohliche Azidose. Der logarithmische Maßstab "versteckt" große absolute Änderungen.

## Henderson-Hasselbalch-Gleichung

Die Henderson-Hasselbalch-Gleichung beschreibt den pH einer Pufferlösung:

**pH = pKₐ + log₁₀([A⁻]/[HA])**

wobei [A⁻] die Konzentration der konjugierten Base und [HA] die Konzentration der schwachen Säure ist. Bei pH = pKₐ liegt genau ein 1:1-Verhältnis vor — der Puffer ist am effektivsten in einem pH-Bereich von pKₐ ± 1.

Für den **Bicarbonatpuffer im Blut** gilt speziell: pH = 6,1 + log([HCO₃⁻] / (0,03 × pCO₂)). Die Normwerte HCO₃⁻ = 24 mmol/L und pCO₂ = 40 mmHg ergeben: pH = 6,1 + log(24/1,2) = 6,1 + log(20) = 6,1 + 1,3 = **7,4**.

## Logarithmische Skalen (Semilog-Plot)

Wenn man f(t) = C₀ × e^(−kt) logarithmiert:
ln(C) = ln(C₀) − k×t

Das heißt: **ln(C) ist eine lineare Funktion von t** mit Steigung −k und Achsenabschnitt ln(C₀). Trägt man Konzentrationswerte in einem **semilogarithmischen Diagramm** (y-Achse: log-Skala, x-Achse: lineare Skala) auf, erscheint eine Kinetik erster Ordnung als Gerade. Dies ist die experimentelle Methode zur Bestimmung von k und T½.

## Basiswechsel und Umrechnung

Jeder Logarithmus kann in einen anderen umgerechnet werden:
log_b(x) = ln(x)/ln(b)

Besonders nützlich: log₂(x) = ln(x)/ln(2) = ln(x)/0,693

Diese Umrechnung ist bei der Berechnung von Halbwertszeiten wichtig: T½ = log₂(2)/k = 1/k (wenn k in "pro Halbwertszeit" gemessen wird).

**Nützliche Merkwerte für den MedAT:**
- ln(2) ≈ 0,693
- log(2) ≈ 0,301
- log(3) ≈ 0,477
- ln(10) ≈ 2,303

## Rechenbeispiele

**Beispiel 1 — Henderson-Hasselbalch (Säure-Base):**
pH = pKs + log([A⁻]/[HA]). Essigsäure pKs = 4,76; [A⁻] = 0,1 M, [HA] = 0,01 M. pH = 4,76 + log(0,1/0,01) = 4,76 + log(10) = 4,76 + 1 = **5,76**. Klinisch: Bicarbonatpuffer im Blut: pH = 6,1 + log([HCO₃⁻]/(0,03×pCO₂)). Bei HCO₃⁻ = 24, pCO₂ = 40: pH = 6,1 + log(24/1,2) = 6,1 + log(20) = 6,1 + 1,30 = **7,40**.

**Beispiel 2 — Semilog: k und T½ aus Messdaten:**
Messwerte: C(0) = 100 mg/L, C(3h) = 50 mg/L. Steigung im Semilog: m = (ln50 − ln100)/(3−0) = (3,912 − 4,605)/3 = **−0,231 h⁻¹**. k = 0,231 h⁻¹. T½ = ln2/k = 0,693/0,231 = **3,0 h**. Clearance bei Vd = 20 L: CL = k × Vd = 0,231 × 20 = **4,62 L/h**.

**Beispiel 3 — Dezibel und Hörverlust:**
Normalgehör: 0 dB HL. Patient hört erst ab 40 dB HL (Schwerhörigkeit). Intensitätsverhältnis: I₂/I₁ = 10^(40/10) = 10⁴ = **10.000-fach** höhere Intensität nötig. Verbesserung durch Hörgerät um 30 dB: Verstärkungsfaktor = 10^(30/10) = **1000-fach**.

**Beispiel 4 — Logarithmengesetze zur Gleichungslösung:**
Gesucht: x aus 5ˣ = 200. Logarithmieren: x × ln(5) = ln(200) → x = ln(200)/ln(5) = 5,298/1,609 = **3,29**. Alternativ: x = log(200)/log(5) = 2,301/0,699 = **3,29**. Basiswechsel liefert identische Ergebnisse.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Typische Aufgabentypen:**
- log(a×b), log(a/b), log(aⁿ); pH = −log([H⁺]); [H⁺] = 10^(−pH); Henderson-Hasselbalch
- Dezibel L = 10×log(I/I₀); +3 dB = Faktor 2, +10 dB = Faktor 10
- Basiswechsel; ln nur für x > 0

**Minimal-Rechenrezepte:**
- **log:** log(a×b) = log a+log b; log(a/b) = log a−log b; log(aⁿ) = n×log a. **pH:** pH = −log₁₀([H⁺]); [H⁺] = 10^(−pH).
- **Henderson-Hasselbalch:** pH = pKₐ + log([A⁻]/[HA]). **Dezibel:** +10 dB = Faktor 10; +3 dB ≈ Faktor 2.

---

## Zusammenfassung (ultrakompakt)

- **Definition**: log_b(x) = y ↔ bʸ = x; log₁₀ = lg; log_e = ln; log(1) = 0; log(b) = 1
- **Logarithmengesetze**: log(a×b) = log a+log b; log(a/b) = log a−log b; log(aⁿ) = n×log a
- **Basiswechsel**: log_b(x) = ln(x)/ln(b) = log(x)/log(b)
- **pH**: pH = −log₁₀([H⁺]); [H⁺] = 10⁻ᵖᴴ; ΔpH = 0,3 → Faktor 2 bei [H⁺]
- **Henderson-Hasselbalch**: pH = pKs + log([A⁻]/[HA]); Blut: pH = 6,1 + log([HCO₃⁻]/(0,03×pCO₂))
- **Dezibel**: L = 10×log(I/I₀); +10 dB → ×10; +3 dB → ×2`,
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
          merksatz:
            "log(a×b) = log(a) + log(b); log(a/b) = log(a) − log(b); log(aⁿ) = n×log(a). Immer!",
        },
        {
          heading: "pH-Wert und Protonenkonzentration",
          text: "pH = −log₁₀([H⁺]). Der Normalblut-pH liegt bei 7,35–7,45. Eine Azidose (pH < 7,35) bedeutet erhöhte [H⁺], eine Alkalose (pH > 7,45) erniedrigte [H⁺]. Der logarithmische Maßstab ist medizinisch enorm bedeutsam: pH 7,0 entspricht [H⁺] = 100 nmol/L, pH 7,4 entspricht [H⁺] ≈ 40 nmol/L. Eine Verdoppelung von [H⁺] entspricht nur einer Erniedrigung des pH um log(2) ≈ 0,3 Einheiten.",
          merksatz:
            "pH = −log[H⁺]. pH ↑ → [H⁺] ↓ (basisch). pH ↓ → [H⁺] ↑ (sauer). pH 7,35–7,45: Normalbereich.",
        },
        {
          heading: "Semilog-Plot und Kinetik erster Ordnung",
          text: "Logarithmiert man die Formel C(t) = C₀×e^(−kt), ergibt sich ln C = ln C₀ − k×t. Das ist eine lineare Gleichung in t: y = b + m×t mit y = ln C, b = ln C₀ und m = −k. Im halblogarithmischen Diagramm (log C vs. t) erscheint eine Kinetik erster Ordnung daher als Gerade. Aus der Steigung liest man −k ab, aus dem Achsenabschnitt ln C₀. Diese Linearisierung ist die Grundlage der experimentellen Pharmakokinetik.",
          merksatz:
            "ln C vs. t linear → Kinetik 1. Ordnung. Steigung = −k, Achsenabschnitt = ln C₀. T½ = 0,693/k.",
        },
      ],
      diagram: "coordinate-system",
      merksätze: [
        "log_b(x) = y ⟺ bʸ = x. Logarithmus ist Umkehrfunktion der Potenz.",
        "Produktregel: ln(a×b) = ln(a) + ln(b).",
        "Quotientenregel: ln(a/b) = ln(a) − ln(b).",
        "Potenzregel: ln(aⁿ) = n × ln(a).",
        "pH = −log₁₀([H⁺]); [H⁺] = 10^(−pH).",
        "pH-Änderung um 1 → 10-fache [H⁺]-Änderung.",
        "ln(1) = 0; ln(e) = 1; log(1) = 0; log(10) = 1.",
        "Semilog-Plot: ln C linear in t → Kinetik erster Ordnung.",
        "Basiswechsel: log_b(x) = ln(x)/ln(b).",
        "Henderson-Hasselbalch: pH = pKₐ + log([A⁻]/[HA]).",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie die Definition des pH-Wertes mithilfe des Logarithmus, und beschreiben Sie, warum eine pH-Änderung um 1 Einheit klinisch bedeutsam ist.",
        answer:
          "Der pH-Wert ist definiert als der negative dekadische Logarithmus der Wasserstoffionenkonzentration: pH = −log₁₀([H⁺]). Diese Definition nutzt den Logarithmus, weil [H⁺] im physiologischen Bereich sehr kleine Werte annimmt (ca. 10⁻⁷ mol/L im Neutralbereich), die ohne Logarithmus schwer handhabbar wären. Der negative Logarithmus macht aus diesen kleinen Zahlen positive, anschauliche Werte: Bei [H⁺] = 10⁻⁷ mol/L ergibt sich pH = −(−7) = 7. Da die Logarithmusfunktion die Umkehrung der Exponentialfunktion ist, entspricht eine pH-Änderung um genau 1 Einheit einer 10-fachen Änderung der [H⁺]: Eine pH-Senkung von 7,4 auf 6,4 bedeutet eine 10-fach höhere Protonenkonzentration. In der Klinik ist das von enormer Bedeutung: Der physiologische Blut-pH liegt bei 7,35–7,45. Eine pH-Senkung auf 7,0 (Azidose) entspricht bereits einer mehr als doppelt so hohen [H⁺] und führt zu Herzrhythmusstörungen, Vasodilatation und Bewusstseinstrübung. Ein pH unter 6,8 oder über 7,8 ist meist mit dem Leben nicht vereinbar. Der Logarithmus komprimiert also eine riesige Spanne von [H⁺]-Werten (von 10⁻¹ bis 10⁻¹⁴ mol/L) auf eine handhabbare Skala von pH 1 bis 14.",
      },
      klinischerBezug:
        "Der arterielle Blut-pH (7,35–7,45) wird über das Bikarbonat-Puffersystem reguliert, das der Henderson-Hasselbalch-Gleichung pH = 6,1 + log([HCO₃⁻]/0,03×pCO₂) folgt; kleinste Abweichungen sind diagnostisch entscheidend für respiratorische vs. metabolische Azidose oder Alkalose. Der pKₐ-Wert eines Medikaments bestimmt über die Henderson-Hasselbalch-Gleichung, welcher Anteil bei gegebenem pH ionisiert ist — ionisierte Formen können Zellmembranen nicht passieren, was für die Resorption, Verteilung und tubuläre Rückresorption von Arzneimitteln entscheidend ist (Ion-Trapping-Phänomen). Semilogarithmische Konzentrations-Zeit-Kurven sind in der klinischen Pharmakologie Standard zur Berechnung von Eliminationshalbwertszeit, Clearance und Verteilungsvolumen aus Blutspiegelmessungen.",
      selfTest: [
        {
          question: "Welchen pH-Wert hat eine Lösung mit [H⁺] = 10⁻⁴ mol/L?",
          options: ["pH = −4", "pH = 0,4", "pH = 4", "pH = 10", "pH = 40"],
          correctIndex: 2,
          explanation:
            "pH = −log₁₀([H⁺]) = −log₁₀(10⁻⁴) = −(−4) = 4. Eine Lösung mit pH 4 ist deutlich sauer (Normal-Blut-pH: 7,4). Umrechnung: [H⁺] = 10^(−pH) = 10^(−4). Zur Einordnung: Magensaft hat pH ≈ 1–2, Blut pH ≈ 7,4 ([H⁺] ≈ 4×10⁻⁸), Pankreassaft pH ≈ 8.",
          hints: [
            "pH = −log₁₀(10⁻⁴) = −(−4) = 4",
            "Negativer Logarithmus der negativen Potenz = positive Zahl",
          ],
          difficulty: 1,
          tags: ["ph-wert", "logarithmus", "säure-base"],
        },
        {
          question: "Welche Konzentration [H⁺] entspricht dem physiologischen Blut-pH von 7,4?",
          options: [
            "[H⁺] = 4×10⁻⁸ mol/L",
            "[H⁺] = 7,4×10⁻⁷ mol/L",
            "[H⁺] = 10⁻⁷ mol/L",
            "[H⁺] = 10^(−7,4) mol/L",
            "[H⁺] = 10⁻⁶ mol/L",
          ],
          correctIndex: 3,
          explanation:
            "Aus pH = −log[H⁺] folgt [H⁺] = 10^(−pH) = 10^(−7,4). Das entspricht ca. 3,98×10⁻⁸ mol/L ≈ 40 nmol/L. Der exakte mathematische Ausdruck ist 10^(−7,4). Im klinischen Kontext spricht man oft von 40 nmol/L als Merkhilfe für pH 7,4. Eine Azidose liegt vor, wenn [H⁺] > 45 nmol/L (pH < 7,35), eine Alkalose, wenn [H⁺] < 35 nmol/L (pH > 7,45).",
          hints: ["[H⁺] = 10^(−pH) = 10^(−7,4)", "10^(−7,4) ≈ 4×10⁻⁸ ≈ 40 nmol/L"],
          difficulty: 2,
          tags: ["ph-wert", "h-konzentration", "blutchemie"],
        },
        {
          question:
            "In einem Semilog-Plot von C (log-Skala) gegen t (lineare Skala) ergibt sich eine Gerade mit Steigung −0,3 und Achsenabschnitt 2 (log₁₀ C). Was ist die Anfangskonzentration C₀?",
          options: [
            "C₀ = 2 mg/L",
            "C₀ = 100 mg/L",
            "C₀ = 0,3 mg/L",
            "C₀ = 20 mg/L",
            "C₀ = 10 mg/L",
          ],
          correctIndex: 1,
          explanation:
            "Im Semilog-Plot gilt: log C = log C₀ − k×t (falls log zur Basis 10). Bei t = 0: log C₀ = 2. Daher C₀ = 10² = 100 mg/L. Die Steigung −0,3 entspricht dem negativen Logarithmus der Abnahme pro Zeiteinheit. Aus −k×log(e) = −0,3 (wenn log₁₀ verwendet wird): Die Halbwertszeit T½ ergibt sich, wenn log C = log C₀ − 0,5×log(2) = 2 − 0,301: Das dauert 0,301/0,3 ≈ 1 Zeiteinheit.",
          hints: ["Achsenabschnitt = log C₀ = 2", "C₀ = 10² = 100"],
          difficulty: 3,
          tags: ["semilog-diagramm", "logarithmus", "pharmakokinetik"],
        },
        {
          question:
            "Eine Blutgasanalyse ergibt pCO₂ = 40 mmHg und [HCO₃⁻] = 24 mmol/L. Berechnen Sie den pH nach Henderson-Hasselbalch (pKₐ = 6,1; 0,03 × 40 = 1,2).",
          options: ["pH = 7,1", "pH = 7,4", "pH = 7,3", "pH = 6,1", "pH = 7,7"],
          correctIndex: 1,
          explanation:
            "Henderson-Hasselbalch: pH = pKₐ + log([HCO₃⁻]/(0,03×pCO₂)) = 6,1 + log(24/1,2) = 6,1 + log(20) = 6,1 + log(2×10) = 6,1 + log(2) + log(10) ≈ 6,1 + 0,3 + 1 = 7,4. Das ist der normale Blut-pH! Diese Berechnung illustriert die Wichtigkeit des Bikarbonat-Puffersystems und wird in der Klinik täglich bei der Interpretation von Blutgasanalysen angewendet.",
          hints: [
            "pH = 6,1 + log(24/1,2) = 6,1 + log(20)",
            "log(20) = log(2×10) = log 2 + 1 ≈ 0,3 + 1 = 1,3",
          ],
          difficulty: 3,
          tags: ["henderson-hasselbalch", "ph-wert", "bikarbonat"],
        },
        {
          question: "Welches Rechengesetz des Logarithmus steckt hinter der Formel T½ = ln(2)/k?",
          options: [
            "Produktregel: ln(a×b) = ln(a) + ln(b)",
            "Quotientenregel: ln(a/b) = ln(a) − ln(b)",
            "Potenzregel: ln(aⁿ) = n×ln(a)",
            "Basiswechsel: log_b(x) = ln(x)/ln(b)",
            "Spezialwert: ln(e) = 1",
          ],
          correctIndex: 1,
          explanation:
            "Aus C₀/2 = C₀×e^(−k×T½) → 1/2 = e^(−k×T½) → ln(1/2) = −k×T½. Nun gilt: ln(1/2) = ln(1) − ln(2) = 0 − ln(2) = −ln(2) (Quotientenregel!). Also: −ln(2) = −k×T½ → T½ = ln(2)/k. Die Quotientenregel des Logarithmus verwandelt den Logarithmus eines Bruchs in eine Differenz von Logarithmen. Das ist das zentrale Logarithmengesetz hinter der Halbwertszeit-Berechnung.",
          hints: [
            "ln(1/2) = ln(1) − ln(2) = 0 − ln(2) = −ln(2)",
            "Quotientenregel: ln(a/b) = ln(a) − ln(b)",
          ],
          difficulty: 2,
          tags: ["logarithmus", "quotientenregel", "halbwertszeit"],
        },
      ],
    },
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
      content: `## Einleitung

Im Alltag begegnest du ueberall Graphen: die Temperaturkurve im Wetterbericht, das Akku-Diagramm auf dem Handy oder der Verlauf einer Zugfahrt auf dem Fahrplan. Graphen lesen heisst: auf einen Blick erkennen, ob etwas steigt, faellt, ein Maximum hat oder sich einem Grenzwert naehert.

**In diesem Kapitel lernst du:**
- was Asymptoten (horizontal, vertikal) aussagen
- wie du Monotonie und Extrempunkte aus einem Graphen abliest
- wie du den Funktionstyp aus dem Kurvenverlauf erkennst (linear, quadratisch, exponentiell)
- was Graphentransformationen (Verschiebung, Spiegelung, Streckung) bewirken
- wie ein Semilog-Plot funktioniert

---

{{DIAGRAM:coordinate-system}}

{{DIAGRAM:exponential-function}}

## Graphen lesen

Aus einem Graphen kannst du verschiedene Eigenschaften ablesen:
- **Nullstellen**: wo die Kurve die x-Achse schneidet
- **Monotonie**: ob die Kurve steigt oder faellt
- **Extrempunkte**: Hochpunkte und Tiefpunkte
- **Asymptoten**: Linien, denen sich die Kurve immer weiter naehert, ohne sie zu erreichen

> **Merke:** Am MedAT werden Graphen oft ohne Formel gezeigt. Aus dem Kurvenverlauf musst du den Funktionstyp erkennen: Gerade = linear, Parabel = quadratisch, S-Kurve = sigmoidal, flache Annaehrung = exponentiell.

---

## Asymptoten

Eine **horizontale Asymptote** ist eine waagerechte Linie, der sich der Graph fuer sehr grosse x-Werte naehert. Beispiel: f(x) = 1/x naehert sich y = 0.

Eine **vertikale Asymptote** ist eine senkrechte Linie, bei der der Graph ins Unendliche geht. Beispiel: f(x) = 1/x hat eine vertikale Asymptote bei x = 0.

**Faustregel fuer Bruchfunktionen (Zaehler/Nenner):**
- Zaehler-Grad < Nenner-Grad: horizontale Asymptote y = 0
- Zaehler-Grad = Nenner-Grad: horizontale Asymptote y = fuehrender Koeffizient oben / unten

---

## Monotonie und Extrempunkte

- **Monoton steigend**: Kurve geht nach rechts oben
- **Monoton fallend**: Kurve geht nach rechts unten
- **Hochpunkt**: Kurve wechselt von steigend zu fallend
- **Tiefpunkt**: Kurve wechselt von fallend zu steigend
- **Wendepunkt**: Kurve aendert die Kruemmungsrichtung (Huegel wird Mulde oder umgekehrt)

---

## Semilog-Plot

Wenn Werte ueber viele Groessenordnungen gehen (z. B. 1, 10, 100, 1000), hilft ein **Semilog-Plot**: Die y-Achse wird logarithmisch skaliert. Dann erscheinen **Exponentialfunktionen als Geraden**.

**Beispiel:** Du misst, wie ein Stoff zerfaellt: 100 → 50 → 25 → 12,5. Im normalen Diagramm ist das eine Kurve. Im Semilog-Plot wird es eine Gerade -- und aus der Steigung liest du die Zerfallskonstante ab.

> **Merke:** Semilog-Plot macht Exponentialfunktionen gerade. Log-Log-Plot macht Potenzfunktionen gerade.

---

## Graphentransformationen

So verschiebst oder spiegelst du einen Graphen:
- f(x) + c: Graph um c nach **oben**
- f(x − c): Graph um c nach **rechts**
- −f(x): Spiegelung an der **x-Achse**
- f(−x): Spiegelung an der **y-Achse**
- a × f(x): Streckung in y-Richtung (a > 1: hoeher; 0 < a < 1: flacher)

**Beispiel:** f(x) = eˣ wird zu g(x) = eˣ + 3: Der Graph verschiebt sich 3 Einheiten nach oben. Die Asymptote aendert sich von y = 0 auf y = 3.

---

## Alltagsbeispiele

**Beispiel 1 -- Asymptote:** f(x) = (3x² + 6)/(x² − 4). Zaehler-Grad = Nenner-Grad = 2 → horizontale Asymptote y = 3/1 = **3**. Nenner = 0 bei x = ±2 → vertikale Asymptoten.

**Beispiel 2 -- Semilog-Plot:** Ein Wert halbiert sich alle 10 Stunden. Im Semilog-Plot: Gerade mit Steigung −0,0693. Halbwertszeit = ln(2)/0,0693 = **10 h**.

---

## MedAT-Fokus

**Typische Aufgabentypen:**
- Asymptoten aus Graph oder Formel bestimmen
- Monotonie und Extrempunkte ablesen
- Semilog-Plot: Steigung = −k, Halbwertszeit = ln(2)/k
- Graphentransformationen erkennen (Verschiebung, Spiegelung, Streckung)

**Typische Fallen:**
- Horizontale Asymptote mit y-Achsenabschnitt verwechseln
- Semilog-Plot: Kurve (nicht Gerade) heisst KEIN reiner Zerfall
- Transformation: f(x − 3) verschiebt nach RECHTS (nicht links!)

---

## Zusammenfassung (ultrakompakt)

- **Asymptoten**: horizontal (y = c fuer grosse x); vertikal (x = a, wo Nenner = 0)
- **Monotonie**: steigend/fallend; Extrempunkt = Wechsel der Richtung
- **Semilog-Plot**: y-Achse logarithmisch; Exponentialzerfall wird zur Geraden; Steigung = −k
- **Transformationen**: f(x−a): nach rechts; −f(x): Spiegelung x-Achse; a×f(x): Streckung
- **Typische Fehler**: f(x−3) ist Verschiebung nach rechts, nicht links`,
      contentExtended: `## Einleitung

Im Alltag begegnest du ueberall Graphen: die Temperaturkurve im Wetterbericht, das Akku-Diagramm auf dem Handy oder der Verlauf einer Zugfahrt auf dem Fahrplan. Graphen lesen heisst: auf einen Blick erkennen, ob etwas steigt, faellt, ein Maximum hat oder sich einem Grenzwert naehert. Am MedAT musst du aus einem Kurvenverlauf auf den Funktionstyp schliessen und wichtige Punkte ablesen.

**In diesem Kapitel lernst du:**
- was Asymptoten (horizontal, vertikal) aussagen
- wie du Monotonie und Extrempunkte aus einem Graphen abliest
- wie du den Funktionstyp aus dem Kurvenverlauf erkennst (linear, quadratisch, exponentiell)
- was Graphentransformationen (Verschiebung, Spiegelung, Streckung) bewirken
- wie ein Semilog-Plot funktioniert

---

{{DIAGRAM:coordinate-system}}

{{DIAGRAM:exponential-function}}

## Graphen und ihre Eigenschaften ablesen

Das Lesen und Interpretieren von Funktionsgraphen ist eine zentrale mathematische Kompetenz — besonders im medizinischen Kontext, wo Kurven täglich auf Monitoren, in Laborbefunden und in der wissenschaftlichen Literatur zu interpretieren sind.

**Wichtige Eigenschaften, die man aus einem Graphen ablesen kann:**
- **Nullstellen**: Schnittpunkte mit der x-Achse (f(x) = 0)
- **y-Achsenabschnitt**: Schnittpunkt mit der y-Achse (f(0))
- **Monotoniebereiche**: Bereiche, in denen f steigt oder fällt
- **Extrempunkte**: lokale Minima und Maxima (Hochpunkt, Tiefpunkt)
- **Wendepunkte**: Stellen, an denen die Kurve ihre Krümmungsrichtung wechselt
- **Asymptoten**: Grenzlinien, an die sich der Graph annähert, ohne sie zu erreichen

> **Merke:** Beim MedAT werden Graphen oft ohne explizite Funktionsgleichung gezeigt. Man muss dann aus dem **Kurvenverlauf** auf den Funktionstyp schließen: Gerade = linear, Parabel = quadratisch, S-Kurve = sigmoidal, asymptotische Annäherung = exponentiell oder Sättigungskinetik.

## Asymptoten im Detail

**Horizontale Asymptote**: Eine Gerade y = a heißt horizontale Asymptote, wenn lim(x→±∞) f(x) = a. Beispiele: f(x) = e^(−x) → y = 0 für x → ∞; f(x) = (2x+1)/(x+1) → y = 2 für x → ±∞.

**Vertikale Asymptote**: Eine Gerade x = a heißt vertikale Asymptote, wenn lim(x→a) f(x) = ±∞. Beispiele: f(x) = ln(x) → x = 0 (f → −∞); f(x) = 1/x → x = 0.

**Schräge Asymptote**: Eine Gerade y = mx + b heißt schräge Asymptote, wenn lim(x→∞) [f(x) − (mx+b)] = 0. Sie tritt bei rationalen Funktionen auf, wenn der Grad des Zählers genau um 1 größer ist als der des Nenners.

| Asymptoten-Typ | Bedingung bei rationalen Funktionen f(x) = P(x)/Q(x) | Ergebnis |
|---|---|---|
| Horizontale y = 0 | Grad(P) < Grad(Q) | Funktion → 0 |
| Horizontale y = c | Grad(P) = Grad(Q) | c = führender Koeff. P / führender Koeff. Q |
| Schräge y = mx + b | Grad(P) = Grad(Q) + 1 | Polynomdivision ergibt mx + b |
| Keine horizontale | Grad(P) > Grad(Q) + 1 | f(x) → ±∞ |

## Monotonie und Krümmung

Monotonie beschreibt die Steigungsrichtung des Graphen:
- **Streng monoton steigend**: f(x₁) < f(x₂) für alle x₁ < x₂
- **Streng monoton fallend**: f(x₁) > f(x₂) für alle x₁ < x₂

Krümmung beschreibt, ob sich die Steigung ändert:
- **Konvex (linksgekrümmt)**: Kurve liegt wie ein Hügel, Steigung nimmt ab
- **Konkav (rechtsgekrümmt)**: Kurve liegt wie eine Schüssel, Steigung nimmt zu
- **Wendepunkt**: Übergang zwischen Konvex und Konkav

**Zusammenhang Monotonie und Extrempunkte:** Ein lokales Maximum liegt vor, wenn die Funktion von steigend auf fallend wechselt. Ein lokales Minimum liegt vor, wenn die Funktion von fallend auf steigend wechselt. Der Wendepunkt einer sigmoiden Kurve (z. B. Dosis-Wirkungskurve) markiert den Punkt der steilsten Steigung — bei der Hill-Gleichung liegt er bei der EC₅₀.

## Semilogarithmische und doppelt-logarithmische Darstellung

In Naturwissenschaften und Medizin begegnet man häufig Daten, die sich über viele Größenordnungen erstrecken. Lineare Skalen versagen dann — logarithmische Skalen kommen zum Einsatz.

**Semilogarithmischer Plot (Semilog-Plot)**:
- y-Achse logarithmisch, x-Achse linear
- Exponentialfunktionen erscheinen als Geraden: y = A×e^(kx) → log y = log A + k×x×log e
- Anwendung: Pharmakokinetikuntersuchungen, Bakterienwachstumskurven, Radioaktivitätsmessungen

**Doppelt-logarithmischer Plot (Log-Log-Plot)**:
- Beide Achsen logarithmisch
- Potenzfunktionen y = A×xⁿ erscheinen als Geraden: log y = log A + n×log x
- Anwendung: Skalierungsgesetze in der Biologie (Allometrie), Dosis-Wirkungskurven

> **Merke:** **Welcher Plot für welche Funktion?** Semilog-Plot linearisiert Exponentialfunktionen. Log-Log-Plot linearisiert Potenzfunktionen. Linearer Plot zeigt lineare Funktionen als Gerade. Wenn eine Kurve im Semilog-Plot keine Gerade ist, liegt **keine** reine Kinetik erster Ordnung vor.

## Linearisierung von Daten

Die Überführung einer nichtlinearen Funktion in eine lineare durch geeignete Transformation heißt Linearisierung. Für pharmakokinetische Daten:

C(t) = C₀ × e^(−kt) → ln C = −kt + ln C₀

In einem ln C vs. t Diagramm ergibt sich eine Gerade mit:
- Steigung: m = −k → k = −m
- Achsenabschnitt: b = ln C₀ → C₀ = eᵇ
- Aus k: T½ = ln(2)/k = 0,693/k

**Lineweaver-Burk-Linearisierung** der Michaelis-Menten-Gleichung: 1/v = (Km/(v_max)) × 1/[S] + 1/v_max. In einem 1/v vs. 1/[S] Diagramm ergibt sich eine Gerade mit Steigung Km/v_max und y-Achsenabschnitt 1/v_max. Der x-Achsenabschnitt liegt bei −1/Km.

## Graphische Kurvenarten in der Medizin

**Dose-Response-Kurve (Dosis-Wirkungskurve)**:
Typisch sigmoidal (S-förmig) in halblogarithmischer Darstellung. Wichtige Punkte:
- EC₅₀ (half maximal effective concentration): mittlere effektive Dosis
- Maximale Wirkung (Efficacy)
- Steigung der Kurve (Hill-Koeffizient)

**Michaelis-Menten-Kurve**:
v = v_max × [S] / (Km + [S]) — hyperbolische Sättigungskurve

- Für [S] << Km: v ≈ (v_max/Km)×[S] → linear (Kinetik 1. Ordnung)
- Für [S] >> Km: v ≈ v_max → Sättigung (Kinetik 0. Ordnung)
- v = v_max/2 bei [S] = Km (Definition von Km!)

**Überlebensfunktionen und Kaplan-Meier-Kurven**:
In der klinischen Epidemiologie zeigen Kaplan-Meier-Kurven den zeitlichen Verlauf des Überlebens in einer Patientengruppe — treppenartige Abfälle, die in Form und Steigung pharmakokinetischen Zerfallskurven ähneln. Ein steiler Abfall zeigt hohe Mortalität, ein flacher Verlauf gute Prognose.

## Graphen vergleichen und interpretieren

Beim Vergleich zweier Graphen achtet man auf:
- Schnitt- und Berührpunkte (gemeinsame x-Werte mit gleichem f(x))
- Steigungsunterschiede (Welche Kurve steigt/fällt schneller?)
- Lage der Asymptoten
- Verschiebungen und Spiegelungen (vertikale/horizontale Shifts, Streckungen)

**Graphentransformationen** (häufig am MedAT):
- f(x) + c: Graph um c Einheiten **nach oben** verschieben
- f(x − c): Graph um c Einheiten **nach rechts** verschieben
- −f(x): Spiegelung an der **x-Achse**
- f(−x): Spiegelung an der **y-Achse**
- a × f(x): Streckung/Stauchung in y-Richtung (a > 1: Streckung; 0 < a < 1: Stauchung)

## Rechenbeispiele

**Beispiel 1 — Michaelis-Menten: Enzymsättigung:**
v_max = 10 µmol/(L×s), Km = 2 mmol/L. Bei [S] = 2 mmol/L (= Km): v = 10×2/(2+2) = **5 µmol/(L×s)** (halbe Maximalgeschwindigkeit — Definition von Km). Bei [S] = 20 mmol/L: v = 10×20/(2+20) = 200/22 = **9,1 µmol/(L×s)** (91% von v_max). Bei [S] = 0,5 mmol/L: v = 10×0,5/2,5 = **2,0 µmol/(L×s)** (20% von v_max).

**Beispiel 2 — Semilog-Plot: Zweiphasenkinetik ablesen:**
C(t) nach i.v.-Bolus zeigt im Semilog-Plot eine biphasische Kurve. Alpha-Phase (0–2h): ln C sinkt von 4,6 auf 2,3 → k_α = (4,6−2,3)/2 = **1,15 h⁻¹** (T½α = 0,6 h). Beta-Phase (2–12h): ln C sinkt von 2,3 auf 0 → k_β = 2,3/10 = **0,23 h⁻¹** (T½β = 3 h). Klinisch: Alpha = Verteilung, Beta = Elimination.

**Beispiel 3 — Asymptoten einer rationalen Funktion:**
f(x) = (3x² + 6)/(x² − 4). Horizontale Asymptote: Grad Zähler = Grad Nenner → y = 3/1 = **y = 3**. Vertikale Asymptoten: x² − 4 = 0 → x = ±2. Für x = 2: Nenner → 0, Zähler = 18 ≠ 0 → **VA bei x = 2 und x = −2**. Klinisch relevant bei Dosis-Wirkungs-Kurven: horizontale Asymptote = maximale Wirkung (E_max).

**Beispiel 4 — Graphentransformation erkennen:**
Gegeben: f(x) = eˣ. Wie sieht g(x) = 2×e^(−(x−3)) + 1 aus? Analyse: (1) x−3 → Verschiebung 3 nach rechts, (2) negatives Vorzeichen im Exponenten → Spiegelung an der y-Achse (Zerfall statt Wachstum), (3) Faktor 2 → Streckung in y-Richtung, (4) +1 → Verschiebung 1 nach oben. Neue Asymptote: **y = 1** (statt y = 0). y-Wert bei x = 3: g(3) = 2×e⁰ + 1 = **3**.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Typische Aufgabentypen:**
- Horizontale/vertikale Asymptoten; Monotonie; Extrempunkte aus Graph
- Semilog-Plot: ln C vs. t → Gerade bei C = C₀×e^(−kt); Steigung = −k, T½ = 0,693/k
- Michaelis-Menten v = v_max×[S]/(Km+[S]); EC₅₀; Dosis-Wirkungskurve
- Graphentransformationen (Verschiebung, Spiegelung, Streckung)

**Minimal-Rechenrezepte:**
- **Asymptote:** lim(x→±∞) f(x) für horizontal; Nenner = 0 für vertikal. **Semilog:** Steigung = −k; T½ = ln(2)/k.
- **Michaelis-Menten:** v = v_max×[S]/(Km+[S]); bei [S] = Km ist v = v_max/2. **EC₅₀** = 50 % der max. Wirkung.

---

## Zusammenfassung (ultrakompakt)

- **Asymptoten**: horizontal (y = c, wenn x → ±∞); vertikal (x = a, wenn f → ∞); schräg (bei Polynomdivision)
- **Monotonie**: f steigt, wo f' > 0; fällt, wo f' < 0; Extrempunkt, wo f' = 0 und Vorzeichenwechsel
- **Semilog-Plot**: y-Achse logarithmisch; Exponentialzerfall wird zur Geraden; Steigung = −k; Abszisse = Zeit
- **Michaelis-Menten**: v = v_max×[S]/(Km+[S]); Asymptote y = v_max; bei [S] = Km: v = v_max/2
- **Transformationen**: f(x−a): Verschiebung nach rechts; −f(x): Spiegelung x-Achse; a×f(x): Streckung`,
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
      diagram: "coordinate-system",
      merksätze: [
        "Asymptote: Gerade, an die sich Graph annähert, ohne sie zu erreichen.",
        "Horizontale Asymptote: y = lim(x→±∞) f(x).",
        "Vertikale Asymptote: x = a, wenn f(x) → ±∞ für x → a.",
        "Semilog-Plot (log y vs. x): Exponentialfunktionen erscheinen als Geraden.",
        "Log-Log-Plot: Potenzfunktionen erscheinen als Geraden.",
        "Linearisierung C(t): ln C = −kt + ln C₀; Steigung = −k.",
        "Michaelis-Menten: v = v_max×[S]/(Km+[S]); Km = [S] bei v = v_max/2.",
        "EC₅₀: Dosis, bei der die halbe maximale Wirkung erzielt wird.",
        "Kinetik 1. Ordnung im Semilog: Gerade. Kinetik 0. Ordnung: Gerade im linearen Plot.",
        "Wendepunkt: Vorzeichenwechsel der Krümmung, nicht zwingend ein Extremum.",
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
          options: [
            "4 µmol/(L×s)",
            "6 µmol/(L×s)",
            "8 µmol/(L×s)",
            "9 µmol/(L×s)",
            "10 µmol/(L×s)",
          ],
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
  ],
};
