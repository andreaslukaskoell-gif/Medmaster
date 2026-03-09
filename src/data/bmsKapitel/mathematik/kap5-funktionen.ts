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
      content: `## Was ist eine lineare Funktion?

Stell dir vor, du misst den Blutalkoholspiegel eines Patienten stündlich: 1,2 ‰ → 1,05 ‰ → 0,9 ‰ → 0,75 ‰. In jeder Stunde sinkt der Wert um exakt 0,15 ‰. Trägst du diese Werte in ein Diagramm ein, liegen alle Punkte auf einer **geraden Linie**. Genau das macht eine lineare Funktion aus: **konstante Änderungsrate**. Egal wo auf der Geraden du hinschaust — der Anstieg (oder Abfall) pro Einheit ist immer gleich.

Die mathematische Form: **f(x) = mx + b**. Dabei ist m die **Steigung** (Änderungsrate) und b der **y-Achsenabschnitt** (Startwert bei x = 0). Aber wichtiger als die Formel ist das Erkennen: Siehst du in einem Graphen eine Gerade, weißt du sofort — hier ändert sich etwas mit konstanter Geschwindigkeit.

> **Merke:** Lineare Funktion erkennen: **Konstante Änderung** → Gerade Linie. In der Medizin: Wenn ein Wert pro Stunde/Tag/Dosis immer um den gleichen Betrag steigt oder fällt, ist der Zusammenhang linear.

---

## Wann ist ein lineares Modell das richtige?

Nicht jeder Zusammenhang ist linear — aber überraschend viele medizinische Situationen lassen sich zumindest abschnittsweise als linear modellieren. Die Entscheidungshilfe:

| Beobachtung | Modell | Beispiel |
|---|---|---|
| Wert ändert sich pro Einheit immer gleich | Linear | Alkoholabbau: −0,15 ‰/h |
| Wert verdoppelt/halbiert sich regelmäßig | Exponentiell | Medikamentenabbau (nächstes Kapitel) |
| Wert steigt erst schnell, dann langsamer | Sättigung | Enzymkinetik |
| Wert steigt, erreicht Maximum, fällt wieder | Quadratisch | Wurfparabel, Dosis-Wirkung |

Die Kernfrage: **Ist die Änderungsrate konstant?** Wenn ja → linear. Wenn die Änderungsrate selbst zunimmt oder abnimmt → anderer Funktionstyp.

> **Merke:** Denkstrategie am MedAT: Schau dir nicht die Werte an, sondern die **Differenzen** zwischen aufeinanderfolgenden Werten. Sind die Differenzen konstant → linear. Werden die Differenzen größer → beschleunigtes Wachstum. Werden sie kleiner → Sättigung.

---

## Steigung — die wichtigste Größe

Die Steigung m = Δy/Δx = (y₂ − y₁)/(x₂ − x₁) gibt die **Änderungsrate** an. Im medizinischen Alltag hat sie immer eine konkrete Bedeutung mit Einheit:

- Alkoholabbau: m = −0,15 ‰/h → “Pro Stunde sinkt der Spiegel um 0,15 Promille”
- BMI-Blutdruck-Regression: m = 1,8 mmHg/BMI-Punkt → “Pro BMI-Punkt steigt der Blutdruck um 1,8 mmHg”
- Kalibrierkurve: m = 0,015 AU/(mg/L) → “Pro mg/L Konzentrationszunahme steigt die Absorption um 0,015”

**Das Vorzeichen verrät die Richtung:** m > 0 → Gerade steigt (je mehr x, desto mehr y). m < 0 → Gerade fällt (je mehr x, desto weniger y). m = 0 → horizontale Gerade (y bleibt konstant, egal was mit x passiert).

**Steigungsdreieck:** Um m grafisch abzulesen, wähle zwei Punkte auf der Geraden und bilde das Dreieck: horizontale Strecke (Δx) und vertikale Strecke (Δy). Zeigt Δy nach unten, ist m negativ.

| Eigenschaft | Formel | Bedeutung |
|---|---|---|
| Steigung | m = Δy/Δx | Änderungsrate (mit Einheit!) |
| y-Achsenabschnitt | b = f(0) | Startwert bei x = 0 |
| Nullstelle | x₀ = −b/m | Wann wird f(x) = 0? |
| Parallel | m₁ = m₂ | Gleiche Änderungsrate, verschiedener Start |
| Senkrecht | m₁ × m₂ = −1 | 90°-Winkel zwischen Geraden |

---

## Gerade aufstellen — Schritt für Schritt

**Situation 1: Zwei Punkte gegeben** (häufigster MedAT-Fall)

Denkprozess: “Ich kenne zwei Messpunkte → daraus bestimme ich erst die Steigung, dann den Startwert.”

1. Steigung berechnen: m = (y₂ − y₁)/(x₂ − x₁)
2. b durch Einsetzen eines Punktes: b = y₁ − m × x₁
3. Gleichung: f(x) = mx + b

**Situation 2: Steigung und ein Punkt gegeben**

Direkt: b = y₀ − m × x₀

**Situation 3: Graph gegeben (MedAT-typisch)**

Denkprozess: “Ich lese zwei markante Punkte ab (z. B. Achsenschnittpunkte), berechne m = Δy/Δx, und lese b direkt als Schnittpunkt mit der y-Achse ab.”

> **Merke:** Am MedAT unter Zeitdruck: Zuerst schauen, ob der y-Achsenabschnitt b direkt ablesbar ist — das spart einen Rechenschritt. Dann nur noch m aus zwei Punkten bestimmen.

---

## Besondere Geraden

- **Horizontale Gerade** (f(x) = b, m = 0): konstanter Wert — z. B. gleichbleibender Blutzuckerspiegel.
- **Ursprungsgerade** (f(x) = mx, b = 0): direkte Proportionalität — z. B. Dosis = 10 mg/kg × Körpergewicht. Doppeltes Gewicht → doppelte Dosis.
- **Vertikale Gerade** (x = a): keine Funktion, weil einem x-Wert unendlich viele y-Werte zugeordnet wären.

---

## Schnittpunkte und Gleichungssysteme

Zwei Geraden f(x) = m₁x + b₁ und g(x) = m₂x + b₂ schneiden sich genau dann, wenn m₁ ≠ m₂. Den Schnittpunkt findest du durch **Gleichsetzen**: m₁x + b₁ = m₂x + b₂ → x = (b₂ − b₁)/(m₁ − m₂).

Sind die Steigungen gleich (m₁ = m₂), gibt es keinen Schnittpunkt (parallele Geraden) — es sei denn, auch b₁ = b₂, dann sind die Geraden identisch.

**Lösungsmethoden** (2 Gleichungen, 2 Unbekannte):
- **Gleichsetzen**: Beide nach y auflösen, dann gleichsetzen — am schnellsten wenn beide Gleichungen schon in der Form y = ... stehen.
- **Einsetzen**: Eine Gleichung nach x oder y auflösen, in die andere einsetzen.
- **Additionsverfahren**: Gleichungen so multiplizieren, dass eine Variable beim Addieren wegfällt — bei “unordentlichen” Gleichungen oft der eleganteste Weg.

---

## Medizinische Anwendungen

### Warum das Labor lineare Kalibrierung nutzt (Lambert-Beer)

Im klinischen Labor bestimmt man Konzentrationen von Substanzen (Hämoglobin, Bilirubin, Glukose) mithilfe eines Photometers. Das **Lambert-Beer-Gesetz** sagt: Bei niedrigen Konzentrationen ist die Lichtabsorption A direkt proportional zur Konzentration c:

**A = ε × c × d** (ε = Extinktionskoeffizient, d = Schichtdicke)

Das ist eine Ursprungsgerade in c! Warum nutzt das Labor das? Weil man so eine **Kalibrierkurve** erstellen kann: Man misst die Absorption bei bekannten Konzentrationen, erhält eine Gerade, und kann dann aus der Absorption einer unbekannten Probe deren Konzentration direkt ablesen — einfach die Gerade umkehren: c = (A − b)/m.

Der Haken: Ab einer bestimmten Konzentration weicht die Kurve von der Linearität ab (Sättigungseffekte). Deshalb verdünnt das Labor konzentrierte Proben, bis sie wieder im linearen Messbereich liegen.

> **Merke:** Lambert-Beer funktioniert als lineares Modell nur im **niedrigen Konzentrationsbereich**. MedAT-Falle: “Die Absorption steigt unbegrenzt proportional mit der Konzentration” — falsch! Ab einer gewissen Konzentration flacht die Kurve ab.

### Alkoholabbau — Kinetik nullter Ordnung

Ethanol wird mit konstanter Rate abgebaut (die Alkoholdehydrogenase in der Leber ist gesättigt). Abbaurate: ca. 0,1–0,15 ‰/h. Das ergibt eine fallende Gerade: **C(t) = C₀ − k₀ × t**. Die Steigung m = −k₀ ist negativ und konstant — egal ob 2 ‰ oder 0,5 ‰ im Blut sind, pro Stunde wird immer gleich viel abgebaut.

### Dosisberechnung nach Körpergewicht

Ibuprofen: 10 mg/kg → D(m) = 10 × m (Ursprungsgerade). Kind 25 kg: 250 mg. Erwachsener 70 kg: 700 mg. Die Steigung 10 mg/kg ist hier die **Dosierungskonstante**.

Paracetamol: 15 mg/kg, aber maximal 1000 mg → die Gerade wird ab einem bestimmten Gewicht gekappt: 1000 = 15m → m = 66,7 kg. Ab ca. 67 kg gilt die Maximaldosis, nicht mehr die lineare Formel.

---

## Rechenbeispiele mit Denkprozess

**Beispiel 1 — Kalibrierkurve im Labor:**
Denkprozess: “Die Kalibrierkurve ist eine Gerade A = m × c + b. Ich kenne A, suche c → Gleichung umformen.”
Absorption A = 0,015 × c + 0,02 (c in mg/L). Probe: A = 0,77. Umformen: c = (0,77 − 0,02)/0,015 = 0,75/0,015 = **50 mg/L**. Die Steigung 0,015 ist die Sensitivität des Photometers, b = 0,02 die Hintergrundabsorption (Leerwert der Küvette).

**Beispiel 2 — BMI und Blutdruck (Regressionsgerade):**
Denkprozess: “Eine Regressionsgerade fasst den Zusammenhang zwischen zwei Variablen zusammen. Die Steigung sagt mir: Was passiert im Schnitt mit y, wenn x um 1 steigt?”
y = 1,8x + 85 (x = BMI, y = RR in mmHg). Patient BMI 30: RR = 1,8 × 30 + 85 = **139 mmHg**. Nimmt der Patient 5 BMI-Punkte ab: RR sinkt um 5 × 1,8 = **9 mmHg** — ein klinisch relevanter Unterschied.

**Beispiel 3 — Alkoholabbau:**
Patient: C₀ = 1,2 ‰, Abbaurate k₀ = 0,15 ‰/h → C(t) = 1,2 − 0,15t. Wann nüchtern (C = 0)? → t = 1,2/0,15 = **8 h**. Nach 4 h: C = 1,2 − 0,6 = **0,6 ‰** (noch über Fahrgrenze 0,5 ‰).

**Beispiel 4 — Infusionsrate:**
Perfusor: Noradrenalin 5 mg/50 mL (= 0,1 mg/mL). Verordnung: 0,15 µg/kg/min, Patient 80 kg. Denkprozess: “Erst Gesamtdosis pro Minute, dann durch Konzentration teilen.”
Dosis = 0,15 × 80 = 12 µg/min = 0,012 mg/min. Rate = 0,012/0,1 = 0,12 mL/min = **7,2 mL/h**. Linearer Zusammenhang: schwererer Patient → proportional höhere Rate.

**Beispiel 5 — Senkrechte Geraden:**
g₁: y = 3x − 2. Senkrechte durch P(6|1): m₂ = −1/3 (weil 3 × (−1/3) = −1). b₂ = 1 − (−1/3) × 6 = 3. Also: **g₂: y = −(1/3)x + 3**.

---

## Häufige Fehler am MedAT

- **Steigung mit Δx/Δy verwechseln** statt Δy/Δx — immer “y oben, x unten” merken.
- **Vorzeichen bei negativer Steigung vergessen:** C(t) = 1,2 − 0,15t hat m = −0,15, nicht +0,15.
- **”Linear” mit “proportional” verwechseln:** f(x) = 2x + 3 ist linear, aber nicht proportional (b ≠ 0). Nur Ursprungsgeraden (b = 0) sind proportional.
- **Linearität über den Gültigkeitsbereich hinaus annehmen:** Lambert-Beer gilt nur im linearen Messbereich. Kinderwachstum ist nur zwischen 2–10 Jahren annähernd linear.
- **Parallele und senkrechte Geraden verwechseln:** Parallel = gleiche Steigung. Senkrecht = Produkt der Steigungen = −1.`,
      lernziele: [
        "Die Geradengleichung f(x) = mx + b aufstellen, wenn zwei Punkte oder Steigung und ein Punkt gegeben sind.",
        "Steigung und y-Achsenabschnitt aus einem Graphen oder einer Gleichung ablesen und interpretieren.",
        "Nullstellen linearer Funktionen berechnen und geometrisch deuten.",
        "Parallele und senkrechte Geraden anhand ihrer Steigungen identifizieren.",
        "Lineare Funktionen in medizinischen Anwendungen (Dosierung, Kalibrierung) erkennen und anwenden.",
      ],
      sections: [
        {
          heading: "Lineare Funktion erkennen und aufstellen",
          text: "Eine lineare Funktion beschreibt konstante Änderung: f(x) = mx + b. Die Steigung m gibt die Änderungsrate an (mit Einheit!), der y-Achsenabschnitt b den Startwert. Entscheidend ist das Erkennen: Sind die Differenzen zwischen aufeinanderfolgenden Messwerten konstant, liegt ein linearer Zusammenhang vor. Zwei Punkte genügen zur Bestimmung der Geraden.",
          merksatz:
            "Konstante Differenzen zwischen Messwerten → linearer Zusammenhang. Wachsende oder schrumpfende Differenzen → anderer Funktionstyp.",
        },
        {
          heading: "Steigung als Änderungsrate interpretieren",
          text: "Die Steigung m = Δy/Δx hat immer eine konkrete Bedeutung mit Einheit: ‰ pro Stunde (Alkoholabbau), mmHg pro BMI-Punkt (Regression), AU pro mg/L (Kalibrierkurve). Das Vorzeichen verrät die Richtung: m > 0 → ansteigend, m < 0 → fallend, m = 0 → konstant. Am MedAT wird häufig nach der Interpretation der Steigung gefragt, nicht nur nach dem Zahlenwert.",
          merksatz:
            "Steigung immer mit Einheit denken: 'Pro Stunde sinkt der Spiegel um 0,15 ‰' ist aussagekräftiger als 'm = −0,15'.",
        },
        {
          heading: "Lambert-Beer und lineare Kalibrierung",
          text: "Das Lambert-Beer-Gesetz A = ε×c×d beschreibt einen linearen Zusammenhang zwischen Absorption und Konzentration — aber nur im niedrigen Konzentrationsbereich. Das Labor nutzt diese Linearität für Kalibriergeraden: Bekannte Standards messen, Gerade fitten, unbekannte Proben durch Umkehrung ablesen. Bei hohen Konzentrationen versagt das Modell (Sättigungseffekte), deshalb verdünnt man konzentrierte Proben.",
          merksatz:
            "Lambert-Beer = lineares Modell mit Grenzen. Kalibrierung funktioniert nur im linearen Messbereich. Außerhalb → Probe verdünnen.",
        },
      ],
      merksätze: [
        "Konstante Änderung → lineares Modell. Beschleunigte Änderung → exponentiell oder quadratisch.",
        "Steigung m = Δy/Δx — immer mit Einheit interpretieren (z. B. mg/h, mmHg/BMI-Punkt).",
        "m > 0: steigend. m < 0: fallend. m = 0: konstant. Vorzeichen = Richtung.",
        "Nullstelle: x₀ = −b/m. y-Achsenabschnitt: b = f(0).",
        "Parallele Geraden: m₁ = m₂. Senkrechte Geraden: m₁ × m₂ = −1.",
        "Ursprungsgerade (b = 0): direkte Proportionalität — doppeltes x → doppeltes y.",
        "Lambert-Beer: A ∝ c nur im linearen Messbereich. Außerhalb: Probe verdünnen!",
        "Alkoholabbau = Kinetik nullter Ordnung = lineare Abnahme mit konstanter Rate.",
        "Schnittpunkt zweier Geraden: Gleichsetzen → nach x auflösen → y einsetzen.",
        "Linear ≠ proportional: f(x) = 2x + 3 ist linear, aber nicht proportional (b ≠ 0).",
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
      title: "Quadratische & Exponentialfunktionen",
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
        "Exponentialfunktion",
        "Halbwertszeit",
        "Bakterienwachstum",
        "Pharmakokinetik",
        "Radioaktiver Zerfall",
      ],
      content: `## Warum der Bremsweg quadratisch wächst

Ein Auto fährt 50 km/h — Bremsweg 12,5 m. Doppelte Geschwindigkeit, 100 km/h — Bremsweg nicht 25 m, sondern **50 m**. Vierfach. Das ist kein Zufall, sondern das Wesen der **quadratischen Funktion** (Funktion, bei der die Variable im Quadrat steht): Kleine Änderungen im Input erzeugen überproportional große Änderungen im Output. In der Medizin begegnet dir das ständig — vom Gefäßquerschnitt A = \u03C0r\u00B2 bis zur optimalen Medikamentendosis.

> **Merke:** Quadratisch erkennen: Wird der Anstieg oder Abfall **selbst immer steiler** (statt konstant zu bleiben)? Dann ist der Zusammenhang quadratisch, nicht linear. Der Graph ist eine **Parabel** statt einer Geraden.

{{DIAGRAM:quadratic-function}}

---

## Die Parabel — drei Eigenschaften, die alles bestimmen

Bevor du rechnest, lies aus dem Graphen ab:

- **Scheitel** (Vertex): Der einzige Hoch- oder Tiefpunkt der Kurve. Hier liegt das Optimum.
- **Symmetrieachse**: Die vertikale Linie durch den Scheitel — links und rechts davon ist die Kurve spiegelbildlich.
- **Nullstellen**: Wo die Parabel die x-Achse schneidet (0, 1 oder 2 Stellen).

Der **Leitkoeffizient a** (Vorfaktor von x\u00B2) verrät dir sofort:

| a | Öffnung | Extremum | Eselsbrücke |
|---|---|---|---|
| a > 0 | nach oben | **Minimum** | Schüssel — sammelt Wasser |
| a < 0 | nach unten | **Maximum** | Hügel — Wasser fließt ab |
| \u007Ca\u007C > 1 | schmal | steilere Flanken | |
| \u007Ca\u007C < 1 | breit | flachere Flanken | |

> **Merke:** a > 0 = Schüssel (Minimum). a < 0 = Hügel (Maximum). Das Vorzeichen von a entscheidet, ob du ein Maximum oder Minimum suchst — die häufigste Frage bei MedAT-Optimierungsaufgaben.

---

## Drei Darstellungsformen — jede hat ihren Vorteil

| Form | Darstellung | Was sofort ablesbar ist |
|---|---|---|
| Allgemeine Form | f(x) = ax\u00B2 + bx + c | y-Achsenabschnitt c (Wert bei x = 0) |
| Scheitelpunktform | f(x) = a(x \u2212 xs)\u00B2 + ys | Scheitelpunkt S(xs\u007Cys) direkt |
| Faktorisierte Form | f(x) = a(x \u2212 x\u2081)(x \u2212 x\u2082) | Nullstellen x\u2081 und x\u2082 direkt |

**MedAT-Strategie:** Erkenne, welche Form die gesuchte Information am schnellsten liefert. Scheitelpunkt gesucht? Scheitelpunktform. Nullstellen gesucht? Faktorisierte Form oder Lösungsformel.

---

## Scheitelpunkt berechnen — zwei Wege

**Weg 1 — Schnellformel (spart Zeit am MedAT):**
- **xs = \u2212b/(2a)**
- **ys = f(xs)** (xs in die Originalgleichung einsetzen)

**Weg 2 — Quadratische Ergänzung** (wenn die Scheitelpunktform explizit verlangt wird):

Beispiel: f(x) = 2x\u00B2 \u2212 8x + 3
- Schritt 1 — a ausklammern: = 2(x\u00B2 \u2212 4x) + 3
- Schritt 2 — halben Koeffizienten quadrieren, addieren/subtrahieren: = 2(x\u00B2 \u2212 4x + 4 \u2212 4) + 3
- Schritt 3 — binomische Formel rückwärts: = 2(x \u2212 2)\u00B2 \u2212 8 + 3 = **2(x \u2212 2)\u00B2 \u2212 5**

Ergebnis: S(2|\u22125), a = 2 > 0 \u2192 Minimum.

> **Merke:** Die Formel xs = \u2212b/(2a) liefert den Scheitelpunkt in 5 Sekunden. Quadratische Ergänzung nur verwenden, wenn die Aufgabe die Scheitelpunktform **explizit** verlangt — ansonsten Zeitverschwendung am MedAT.

**Klinisches Beispiel — Optimale Dosis:** Die Wirkung W eines Medikaments folgt W(d) = \u22120,4d\u00B2 + 16d \u2212 40. Welche Dosis ist optimal? a = \u22120,4 < 0 \u2192 Maximum. d_opt = \u221216/(2 \u00D7 (\u22120,4)) = **20 mg**. W_max = \u22120,4 \u00D7 400 + 320 \u2212 40 = **120 Einheiten**.

---

## Nullstellen und die Diskriminante

Die zentrale Frage: **Wo schneidet die Parabel die x-Achse?** Die Antwort steckt in der **Diskriminante** (Unterscheidungsgröße) **D = b\u00B2 \u2212 4ac** — dem Term unter der Wurzel in der Lösungsformel.

**Mitternachtsformel (abc-Formel):** x\u2081\u2082 = (\u2212b \u00B1 \u221AD) / (2a)

| Diskriminante | Wurzel möglich? | Nullstellen | Geometrisch |
|---|---|---|---|
| D > 0 | Ja, zwei Werte | **2 Nullstellen** | Parabel durchstößt x-Achse |
| D = 0 | Ja, aber \u00B1 irrelevant | **1 Nullstelle** | Scheitel berührt x-Achse |
| D < 0 | Nein (\u221A negativ) | **0 Nullstellen** | Parabel schwebt über/unter x-Achse |

{{DIAGRAM:discriminant-cases}}

**pq-Formel** (Alternative für normierte Form x\u00B2 + px + q = 0):
x\u2081\u2082 = \u2212p/2 \u00B1 \u221A((p/2)\u00B2 \u2212 q)

> **Merke:** Die pq-Formel funktioniert **nur bei a = 1**. Bei 2x\u00B2 \u2212 6x + 4 = 0 erst durch 2 teilen: x\u00B2 \u2212 3x + 2 = 0, dann pq-Formel. Vergisst du das Teilen, wird das Ergebnis falsch — eine der häufigsten MedAT-Fallen.

**Durchgerechnetes Beispiel:** f(x) = x\u00B2 \u2212 4x \u2212 5. Nullstellen?
- D = (\u22124)\u00B2 \u2212 4\u00D71\u00D7(\u22125) = 16 + 20 = 36
- x\u2081\u2082 = (4 \u00B1 6)/2 \u2192 x\u2081 = 5, x\u2082 = \u22121
- Probe via Vieta: 5 + (\u22121) = 4 = \u2212(\u22124) \u2713. 5 \u00D7 (\u22121) = \u22125 = c \u2713.

---

## Satz von Vieta — Nullstellen ohne Formel

Aus der Faktorisierung (x \u2212 x\u2081)(x \u2212 x\u2082) = x\u00B2 \u2212 (x\u2081 + x\u2082)x + x\u2081\u00D7x\u2082 folgt durch Koeffizientenvergleich mit x\u00B2 + px + q = 0:

- **x\u2081 + x\u2082 = \u2212p** (Summe der Nullstellen)
- **x\u2081 \u00D7 x\u2082 = q** (Produkt der Nullstellen)

**Vieta-Strategie:** Bei ganzzahligen Koeffizienten frage dich: "Welche zwei Zahlen haben Summe \u2212p und Produkt q?" Findest du sie in 10 Sekunden, spare dir die Formel.

| Gleichung | Summe | Produkt | Lösung | Zeit |
|---|---|---|---|---|
| x\u00B2 \u2212 7x + 12 = 0 | 7 | 12 | 3 und 4 | ~3 s |
| x\u00B2 \u2212 5x + 6 = 0 | 5 | 6 | 2 und 3 | ~3 s |
| x\u00B2 \u2212 11x + 28 = 0 | 11 | 28 | 4 und 7 | ~5 s |
| x\u00B2 + 2x \u2212 15 = 0 | \u22122 | \u221215 | 3 und \u22125 | ~8 s |

> **Merke:** Vieta funktioniert am besten bei ganzzahligen, kleinen Koeffizienten. Wenn du nach 10 Sekunden keine passenden Zahlen findest \u2192 sofort zur Mitternachtsformel wechseln, nicht weiter raten.

---

## Symmetrie der Parabel

Die Symmetrieachse x = xs = \u2212b/(2a) halbiert den Abstand zwischen den Nullstellen:

**xs = (x\u2081 + x\u2082)/2**

Praktischer Nutzen: Kennst du eine Nullstelle x\u2081 und den Scheitelpunkt xs, findest du die andere Nullstelle über **x\u2082 = 2\u00D7xs \u2212 x\u2081**.

---

## Quadratische Zusammenhänge in Physik und Medizin

| Zusammenhang | Formel | Konsequenz |
|---|---|---|
| Kinetische Energie | E = \u00BDmv\u00B2 | 2\u00D7 Geschwindigkeit \u2192 4\u00D7 Energie \u2192 4\u00D7 Bremsweg |
| Gefäßquerschnitt | A = \u03C0r\u00B2 | \u00BD Radius \u2192 \u00BC Fläche \u2192 16\u00D7 Widerstand (Hagen-Poiseuille: R ~ r\u207B\u2074) |
| Wurfparabel | h(t) = \u2212\u00BDgt\u00B2 + v\u2080t + h\u2080 | Scheitel = maximale Höhe |
| Dosis-Wirkung | W(d) = ad\u00B2 + bd + c (a < 0) | Scheitel = optimale Dosis |
| Scherkräfte | \u03C4 ~ v\u00B2 | Turbulenzen bei Stenosen steigen überproportional |

**Arteriosklerose — warum quadratisch gefährlich ist:** Ein Gefäß verengt sich von r = 4 mm auf r = 2 mm (Halbierung). Die Querschnittsfläche sinkt von 50,3 mm\u00B2 auf 12,6 mm\u00B2 — ein Viertel. Der Strömungswiderstand steigt nach Hagen-Poiseuille (R \u221D 1/r\u2074) sogar auf das **16-Fache**. Das erklärt, warum selbst moderate Stenosen dramatische hämodynamische Auswirkungen haben.

> **Merke:** E = \u00BDmv\u00B2 und A = \u03C0r\u00B2 — die zwei wichtigsten quadratischen Formeln für den MedAT. "Doppelt so schnell = vierfache Energie" und "halber Radius = Viertel der Fläche" sind Klassiker.

---

## Rechenbeispiele mit Denkprozess

**Beispiel 1 — Blutdruckpuls als Parabel:**
p(t) = \u2212200t\u00B2 + 200t + 80 (mmHg, t in Sekunden).
Denkprozess: a = \u2212200 < 0 \u2192 Maximum.
t_max = \u2212200/(2\u00D7(\u2212200)) = **0,5 s**. p_max = \u2212200\u00D70,25 + 200\u00D70,5 + 80 = \u221250 + 100 + 80 = **130 mmHg**.

**Beispiel 2 — MedAT-typisch, Parabel erkennen:**
y = \u2212x\u00B2 \u2212 5. Hier ist a = \u22121, b = 0, c = \u22125.
Wegen a < 0 öffnet die Parabel nach unten. Scheitel: xs = 0, ys = \u22125 \u2192 **S(0|\u22125)**. Da der Scheitel unterhalb der x-Achse liegt und die Parabel nach unten öffnet, hat sie **keine Nullstellen** (D = 0 \u2212 4\u00D7(\u22121)\u00D7(\u22125) = \u221220 < 0).

**Beispiel 3 — Herzfrequenz-Minimum:**
f(t) = f_Ruhe \u2212 a\u00B7t + b\u00B7t\u00B2 (erst Verlangsamung, dann Beschleunigung).
Minimum bei t = a/(2b) — das ist xs = \u2212(\u2212a)/(2b). Typische Falle: Nicht a/b oder 2a/b, sondern exakt **a/(2b)**.

---

## Prüfungsrelevante Fakten und Formeln

| Formel/Fakt | Wert |
|---|---|
| Allgemeine Form | f(x) = ax\u00B2 + bx + c |
| Scheitelpunkt | xs = \u2212b/(2a), ys = f(xs) |
| Mitternachtsformel | x\u2081\u2082 = (\u2212b \u00B1 \u221A(b\u00B2\u22124ac))/(2a) |
| pq-Formel (nur a=1) | x\u2081\u2082 = \u2212p/2 \u00B1 \u221A((p/2)\u00B2\u2212q) |
| Vieta | x\u2081+x\u2082 = \u2212p, x\u2081\u00D7x\u2082 = q |
| D > 0 / D = 0 / D < 0 | 2 / 1 / 0 Nullstellen |
| E = \u00BDmv\u00B2 | 2v \u2192 4E |
| A = \u03C0r\u00B2 | r/2 \u2192 A/4 |
| Hagen-Poiseuille | R \u221D 1/r\u2074: r/2 \u2192 16R |`,
      lernziele: [
        "Quadratische Funktionen in allgemeiner Form und Scheitelpunktform darstellen und ineinander umwandeln.",
        "Scheitelpunkt, Öffnungsrichtung und Symmetrieachse einer Parabel bestimmen.",
        "Nullstellen mit der Mitternachtsformel berechnen und die Diskriminante zur Fallunterscheidung nutzen.",
        "Den Satz von Vieta anwenden, um Nullstellen schnell zu bestimmen.",
        "Quadratische Funktionen in physikalischen und biologischen Kontexten erkennen und interpretieren.",
      ],
      sections: [
        {
          heading: "Parabel erkennen und Scheitelpunkt finden",
          text: "Eine Parabel entsteht, wenn die Änderungsrate selbst gleichmäßig zu- oder abnimmt. Der Leitkoeffizient a bestimmt Öffnungsrichtung (Vorzeichen) und Breite (Betrag). Der Scheitelpunkt ist der Hoch- oder Tiefpunkt: xs = −b/(2a), ys = f(xs). Bei Optimierungsproblemen (maximale Wirkung, minimale Kosten) sucht man genau diesen Punkt — das ist die häufigste MedAT-Anwendung.",
          merksatz:
            "Parabel = sich ändernde Änderungsrate. Scheitelpunkt = Optimum. a > 0 → Minimum. a < 0 → Maximum. Schnellformel: xs = −b/(2a).",
        },
        {
          heading: "Diskriminante — Nullstellen-Schnellcheck",
          text: "D = b² − 4ac beantwortet die Frage: Schneidet die Parabel die x-Achse? Intuitiv: D sagt dir, ob du die Wurzel ziehen kannst. Positiv → zwei Schnittpunkte. Null → genau einer (Berührung). Negativ → keiner. Die Mitternachtsformel x₁₂ = (−b ± √D)/(2a) liefert die konkreten Werte. Achtung: pq-Formel nur bei normierter Form (a = 1).",
          merksatz:
            "D > 0: Wurzel ziehbar → 2 Nullstellen. D = 0: Wurzel = 0 → 1 Nullstelle. D < 0: keine reelle Wurzel → 0 Nullstellen.",
        },
        {
          heading: "Vieta — Nullstellen ohne Formel",
          text: "Vieta folgt aus der Faktorisierung (x − x₁)(x − x₂) = x² − (x₁+x₂)x + x₁x₂. Koeffizientenvergleich ergibt: Summe = −p, Produkt = q. Bei ganzzahligen Koeffizienten ist Raten oft schneller als die Lösungsformel. Beispiel: x² − 5x + 6 = 0 → Summe 5, Produkt 6 → sofort 2 und 3.",
          merksatz:
            "Vieta bei ganzzahligen Koeffizienten: Zwei Zahlen mit passender Summe und Produkt erraten. Unter 10 Sekunden lösbar → Formel sparen.",
        },
        {
          heading: "Quadratische Zusammenhänge in Medizin und Physik",
          text: "Kinetische Energie E = ½mv² wächst quadratisch mit v: doppelte Geschwindigkeit = vierfache Energie = vierfacher Bremsweg. Gefäßquerschnitt A = πr² schrumpft bei Arteriosklerose quadratisch: halber Radius → Viertel der Fläche → 16-facher Widerstand (Hagen-Poiseuille). Dosis-Wirkungskurven folgen oft einer nach unten offenen Parabel: Scheitelpunkt = optimale Dosis.",
          merksatz:
            "Quadratisch heißt: Kleine Änderungen im Input bewirken überproportional große Änderungen im Output. Halber Radius → Viertel der Fläche.",
        },
      ],
      merksätze: [
        "Quadratisch = Änderungsrate ändert sich gleichmäßig. Graph = Parabel, nicht Gerade.",
        "a > 0: Schüssel (Minimum). a < 0: Hügel (Maximum). Vorzeichen bestimmt Optimierungsrichtung.",
        "Scheitelpunkt-Schnellformel: xs = −b/(2a), dann ys = f(xs). In 5 Sekunden lösbar.",
        "D = b² − 4ac: positiv → 2 NS, null → 1 NS (Berührung), negativ → 0 NS.",
        "pq-Formel nur bei a = 1! Sonst erst durch a teilen — häufigste MedAT-Falle.",
        "Vieta: x₁ + x₂ = −p, x₁ × x₂ = q. Bei ganzzahligen Koeffizienten schneller als jede Formel.",
        "E = ½mv²: doppelte Geschwindigkeit → vierfache Energie → vierfacher Bremsweg.",
        "A = πr²: halber Radius → ¼ Fläche. Hagen-Poiseuille: halber Radius → 16× Widerstand.",
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
            "Satz von Vieta: x₁ + x₂ = 5 und x₁ × x₂ = 6. Zwei Zahlen mit Summe 5 und Produkt 6: 2 und 3. Probe: 2 + 3 = 5, 2 × 3 = 6. Alternativ Mitternachtsformel: D = 25 − 24 = 1, x = (5 ± 1)/2 → x₁ = 3, x₂ = 2.",
          hints: ["Vieta: Summe = 5, Produkt = 6", "Welche zwei Zahlen passen?"],
          difficulty: 1,
          tags: ["vieta", "nullstellen", "quadratische-gleichung"],
        },
        {
          question: "Welchen Scheitelpunkt hat die Parabel f(x) = 2x² − 8x + 5?",
          options: ["S(2|−3)", "S(−2|13)", "S(2|5)", "S(4|−3)", "S(−4|69)"],
          correctIndex: 0,
          explanation:
            "xs = −b/(2a) = −(−8)/(2×2) = 8/4 = 2. ys = f(2) = 2×4 − 8×2 + 5 = 8 − 16 + 5 = −3. Scheitelpunkt: S(2|−3). Da a = 2 > 0, öffnet die Parabel nach oben → S ist ein Minimum.",
          hints: ["xs = −b/(2a) = 8/4 = 2", "ys = f(2) = 8 − 16 + 5"],
          difficulty: 2,
          tags: ["parabel", "scheitelpunkt", "quadratische-funktion"],
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
            "Scheitelpunktform f(x) = a(x − xs)² + ys: a = −3 < 0 → Öffnung nach unten → Maximum. xs = 2 (Vorzeichen beachten: (x − 2)²), ys = 7. Maximum bei S(2|7). MedAT-Falle: Das Minus in (x − 2)² bedeutet xs = +2, nicht −2.",
          hints: ["a = −3 < 0: nach unten → Maximum", "Scheitel direkt ablesen: xs = 2, ys = 7"],
          difficulty: 1,
          tags: ["parabel", "maximum", "scheitelpunktform"],
        },
        {
          question: "Wie viele Nullstellen hat f(x) = 3x² − 2x + 5?",
          options: [
            "Zwei reelle Nullstellen",
            "Eine doppelte Nullstelle",
            "Keine reellen Nullstellen",
            "Unendlich viele Nullstellen",
            "Genau drei Nullstellen",
          ],
          correctIndex: 2,
          explanation:
            "D = b² − 4ac = (−2)² − 4×3×5 = 4 − 60 = −56 < 0. Negative Diskriminante → keine reellen Nullstellen. Die Parabel (a = 3 > 0, nach oben offen) schwebt vollständig oberhalb der x-Achse.",
          hints: ["D = b² − 4ac berechnen", "D < 0 → Wurzel aus negativer Zahl nicht möglich"],
          difficulty: 2,
          tags: ["diskriminante", "nullstellen", "quadratische-funktion"],
        },
        {
          question:
            "Ein Gefäß hat den Radius r = 4 mm. Durch Arteriosklerose verengt sich der Radius auf 2 mm. Um welchen Faktor steigt der Strömungswiderstand nach Hagen-Poiseuille (R ∝ 1/r⁴)?",
          options: ["Faktor 2", "Faktor 4", "Faktor 8", "Faktor 16", "Faktor 32"],
          correctIndex: 3,
          explanation:
            "R ∝ 1/r⁴. Halbierung des Radius: r_neu = r/2. R_neu ∝ 1/(r/2)⁴ = 1/(r⁴/16) = 16/r⁴. Der Widerstand steigt auf das 16-Fache. Merke: Die Fläche sinkt quadratisch (Faktor 4), aber der Widerstand steigt mit der vierten Potenz (Faktor 16) — das macht Arteriosklerose so gefährlich.",
          hints: [
            "R ∝ 1/r⁴: Wie verändert sich r⁴ bei Halbierung?",
            "(r/2)⁴ = r⁴/16 → R wird 16× größer",
          ],
          difficulty: 3,
          tags: ["hagen-poiseuille", "quadratisch", "klinisch"],
        },
        {
          question:
            "Eine Parabel f(x) = ax² + bx + c hat ihren Scheitelpunkt bei S(3|4) und verläuft durch P(1|12). Welchen Wert hat a?",
          options: ["a = 0,5", "a = 1", "a = 2", "a = 3", "a = 4"],
          correctIndex: 2,
          explanation:
            "Scheitelpunktform: f(x) = a(x − 3)² + 4. Punkt P einsetzen: 12 = a(1 − 3)² + 4 = 4a + 4. Also 8 = 4a → a = 2. Probe: f(1) = 2×4 + 4 = 12 ✓. f(3) = 2×0 + 4 = 4 ✓. Da a = 2 > 0, ist S ein Minimum.",
          hints: [
            "Scheitelpunktform aufstellen: f(x) = a(x − 3)² + 4",
            "P(1|12) einsetzen: 12 = a×4 + 4",
          ],
          difficulty: 3,
          tags: ["scheitelpunktform", "parabel", "algebra"],
        },
      ],
      diagram: "quadratic-function",
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
      content: `## Warum Exponentialfunktionen in der Medizin allgegenwärtig sind

Radioaktiver Zerfall in der Nuklearmedizin, Medikamentenabbau im Blut, Bakterienvermehrung bei einer Sepsis — all diese Prozesse folgen **demselben mathematischen Prinzip**: Die Änderungsrate ist proportional zum aktuellen Bestand. Dieses eine Prinzip erzeugt die Exponentialfunktion, und wer sie versteht, kann Dosierungsintervalle berechnen, Strahlenschutzzeiten abschätzen und Infektionsverläufe vorhersagen.

---

## Die Grundgleichung: f(t) = a · e^(kt)

Die **Eulersche Zahl e ≈ 2,718** ist die natürliche Basis exponentieller Prozesse. Die allgemeine Form lautet:

**f(t) = a · e^(kt)**

Jeder Parameter hat eine klare Bedeutung:
- **a** = Anfangswert zum Zeitpunkt t = 0 (z. B. Anfangskonzentration eines Medikaments)
- **k** = Ratenkonstante — bestimmt, wie schnell der Prozess abläuft
- **k > 0** → exponentielles **Wachstum** (Bakterien, Tumore, Zinseszins)
- **k < 0** → exponentieller **Zerfall** (Medikamentenabbau, radioaktiver Zerfall)
- **t** = Zeit

> **Merke:** Die Exponentialfunktion ist **immer positiv** — sie erreicht niemals den Wert 0. MedAT-Falle: „Die Konzentration eines Medikaments wird nach unendlich langer Zeit null" ist mathematisch falsch. Sie nähert sich asymptotisch an, erreicht die Null aber nie.

{{DIAGRAM:exponential-function}}

**Eigenschaften auf einen Blick:**
- **Definitionsbereich**: D = ℝ (alle reellen Zahlen)
- **Wertebereich**: W = (0, ∞) — stets positiv, keine Nullstellen
- **y-Achsenabschnitt**: f(0) = a (da e⁰ = 1)
- **Horizontale Asymptote**: y = 0 (für x → −∞ bei Wachstum, für x → +∞ bei Zerfall)
- **Besondere Eigenschaft**: (eˣ)' = eˣ — die e-Funktion ist ihre eigene Ableitung

---

## Halbwertszeit T½ = ln(2)/k

Die **Halbwertszeit (T½)** ist die zentrale Größe beim exponentiellen Zerfall: die Zeit, nach der genau die Hälfte der Ausgangssubstanz übrig ist.

**Herleitung:**
f(T½) = a/2 = a · e^(−k·T½) → 1/2 = e^(−k·T½) → ln(1/2) = −k·T½ → **T½ = ln(2)/k ≈ 0,693/k**

Die Halbwertszeit ist **unabhängig von der Ausgangsmenge**: Ob 1000 mg oder 10 mg — nach einer T½ ist stets die Hälfte übrig.

**Intuitive Eselsbrücke — so viel bleibt nach n Halbwertszeiten:**

| Anzahl T½ | Restmenge | Prozent |
|---|---|---|
| 1 | a/2 | 50 % |
| 2 | a/4 | 25 % |
| 3 | a/8 | 12,5 % |
| 4 | a/16 | 6,25 % |
| 5 | a/32 | **≈ 3 %** |

> **Merke:** Nach **5 Halbwertszeiten** sind weniger als 3,2 % übrig — klinisch gilt die Substanz als **praktisch vollständig eliminiert**. Diese 5-T½-Regel ist eine der am häufigsten abgefragten Faustregeln im MedAT.

**Häufiges Missverständnis:** T½ ist NICHT die Zeit, bis etwas „komplett weg" ist. Mathematisch erreicht die Kurve nie exakt null — praktisch setzt man aber bei ~3 % (5 T½) die Grenze.

---

## Verdopplungszeit

Beim Wachstum heißt das Pendant **Verdopplungszeit T₂**: die Zeit, in der sich eine Größe verdoppelt.

**T₂ = ln(2)/k ≈ 0,693/k**

Die Formel ist identisch zur Halbwertszeit — nur der Kontext unterscheidet sich (Zerfall vs. Wachstum). Beispiel: Bakterien mit T₂ = 20 min erreichen nach 2 h (= 6 Verdopplungen) das 2⁶ = 64-fache der Ausgangsmenge.

---

## Kinetik erster Ordnung vs. nullter Ordnung

Dieser Unterschied ist eine klassische MedAT-Falle:

**Kinetik 1. Ordnung (exponentiell):** Die Eliminationsrate ist **proportional zur aktuellen Konzentration**. Je mehr Substanz vorhanden, desto schneller wird abgebaut. Mathematisch: dC/dt = −k·C → **C(t) = C₀ · e^(−kt)**. Die meisten Medikamente folgen dieser Kinetik. Im halblogarithmischen Diagramm ergibt sich eine Gerade.

**Kinetik 0. Ordnung (linear):** Die Eliminationsrate ist **konstant**, unabhängig von der Konzentration. Mathematisch: dC/dt = −k₀ → **C(t) = C₀ − k₀·t**. Der Abbau erfolgt linear.

| Eigenschaft | 1. Ordnung | 0. Ordnung |
|---|---|---|
| Abbaurate | proportional zu C | konstant |
| Kurvenform | exponentiell | linear (Gerade) |
| Halbwertszeit | konstant | konzentrationsabhängig |
| Typisches Beispiel | Die meisten Medikamente | Ethanol (~0,15 ‰/h) |

> **Merke:** Ethanol wird mit **konstanter Rate** abgebaut (ca. 0,15 ‰ pro Stunde), weil das abbauende Enzym Alkoholdehydrogenase bei üblichen Trinkmengen **gesättigt** ist. Deshalb funktioniert die Faustregel „pro Stunde ein Bier" — bei Kinetik 1. Ordnung wäre das nicht möglich.

---

## Pharmakokinetik: Einzeldosis

Bei einmaliger Gabe eines Medikaments mit Kinetik 1. Ordnung gilt:

**C(t) = C₀ · e^(−k·t)**

**Durchgerechnetes Beispiel:** Antibiotikum mit T½ = 6 h, Anfangskonzentration C₀ = 120 mg/L. Wie viel bleibt nach 18 h?

Schritt 1: Anzahl Halbwertszeiten: n = 18 h / 6 h = **3**
Schritt 2: Restmenge = C₀ · (½)³ = 120 · 1/8 = **15 mg/L**

Kontrolle mit Formel: k = ln(2)/6 = 0,1155 h⁻¹. C(18) = 120 · e^(−0,1155·18) = 120 · e^(−2,079) = 120 · 0,125 = **15 mg/L** ✓

---

## Steady State bei wiederholter Dosierung

Bei regelmäßiger Medikamenteneinnahme stellt sich ein **Gleichgewichtszustand (Steady State)** ein. Dieses Konzept wird in der aktuellen Tabelle oben nur erwähnt, verdient aber eine genaue Erklärung:

**Warum entsteht ein Steady State?** Bei jeder Dosis wird Substanz hinzugefügt, aber zwischen den Dosen wird ein Teil eliminiert. Am Anfang ist wenig Substanz im Körper → wenig Elimination → die Konzentration steigt. Mit steigender Konzentration steigt auch die Eliminationsrate (Kinetik 1. Ordnung!), bis schließlich **pro Dosierungsintervall genau so viel eliminiert wird, wie eine Dosis hinzufügt**. Das ist der Steady State.

**Die Steady-State-Formel:**

**C_ss = D / (1 − e^(−k·τ))**

wobei:
- **D** = Dosis (genauer: die Spitzenkonzentration, die eine Einzeldosis erzeugt)
- **k** = Eliminationskonstante
- **τ** (tau) = Dosierungsintervall

**Aufbau des Steady State nach n Dosen:** Der Anteil des Steady-State-Niveaus beträgt 1 − (½)ⁿ, wenn τ = T½:

| Dosis Nr. | Anteil Steady State |
|---|---|
| 1 | 50 % |
| 2 | 75 % |
| 3 | 87,5 % |
| 4 | 93,75 % |
| 5 | **96,9 %** |

> **Merke:** Der Steady State wird nach **4–5 Halbwertszeiten** erreicht (~94–97 %). Das gilt **unabhängig von Dosis und Dosierungsintervall** — nur T½ bestimmt, wie lange es dauert.

**Klinisches Beispiel — Digoxin:** T½ ≈ 36 h, tägliche Einnahme. Zeit bis Steady State: 4–5 × 36 h = **144–180 h ≈ 6–7,5 Tage**. Deshalb braucht Digoxin ohne Aufsättigungsdosis fast eine Woche, bis der therapeutische Spiegel stabil ist. Bei lebensbedrohlichen Arrhythmien kann man diese Phase mit einer Aufsättigungsdosis (Loading Dose) überspringen.

**Die 5-Halbwertszeiten-Regel gilt in beide Richtungen:**
- **Aufbau**: Nach 5 T½ bei regelmäßiger Gabe → ~97 % des Steady State erreicht
- **Abbau**: Nach 5 T½ nach Absetzen → ~97 % eliminiert

---

## Radioaktiver Zerfall

Der radioaktive Zerfall folgt exakt derselben Exponentialfunktion:

**A(t) = A₀ · e^(−λ·t)**

(In der Physik wird die Zerfallskonstante traditionell λ statt k genannt — mathematisch identisch.)

**Beispiel — ⁹⁹ᵐTc-Szintigraphie:** T½ = 6 h, Injektionsaktivität A₀ = 740 MBq. λ = ln(2)/6 = 0,1155 h⁻¹. Nach 18 h (= 3 T½): A = 740 · (½)³ = 740/8 = **92,5 MBq** (12,5 % Restaktivität). Nach 24 h (= 4 T½): A = 740 · (½)⁴ = **46,3 MBq** (6,3 %).

---

## Rechenbeispiele

**Beispiel 1 — Restmenge berechnen:**
Medikament mit T½ = 4 h, Einzeldosis 400 mg. Restmenge nach 12 h?
n = 12/4 = 3 Halbwertszeiten. Restmenge = 400 · (½)³ = 400/8 = **50 mg**.

**Beispiel 2 — k aus T½ bestimmen und einsetzen:**
T½ = 3 h → k = 0,693/3 = 0,231 h⁻¹. Konzentration nach 8 h bei C₀ = 8 mg/L:
C(8) = 8 · e^(−0,231·8) = 8 · e^(−1,848) = 8 · 0,158 = **1,26 mg/L**.

**Beispiel 3 — Bakterienwachstum:**
N₀ = 1000, Verdopplungszeit 30 min. Nach 4 h (240 min):
n = 240/30 = 8 Verdopplungen → N = 1000 · 2⁸ = **256.000 Bakterien**.

**Beispiel 4 — Steady-State-Zeitpunkt:**
Medikament mit T½ = 8 h wird alle 8 h gegeben. Wann ist Steady State erreicht?
4–5 × T½ = 4–5 × 8 h = **32–40 h**. Erst dann ist die Gleichgewichtskonzentration stabil.`,
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
            "T½ = ln(2)/k = 0,693/0,0693 = 10 h. Den Wert ln(2) ≈ 0,693 sollte man auswendig kennen. Da k die Einheit h⁻¹ hat, ergibt T½ Stunden. Klinisch: Nach 50 h (5 × T½) wären weniger als 3,1 % der Ausgangsdosis übrig.",
          hints: ["T½ = ln(2)/k ≈ 0,693/k", "T½ = 0,693/0,0693 = 10"],
          difficulty: 1,
          tags: ["halbwertszeit", "zerfallskonstante", "exponentialfunktion"],
        },
        {
          question:
            "Ein Antibiotikum (T½ = 6 h, C₀ = 120 mg/L) wird als Einzeldosis gegeben. Wie hoch ist die Konzentration nach 18 h?",
          options: ["30 mg/L", "15 mg/L", "60 mg/L", "7,5 mg/L", "20 mg/L"],
          correctIndex: 1,
          explanation:
            "18 h / 6 h = 3 Halbwertszeiten. Restmenge = 120 · (½)³ = 120/8 = 15 mg/L. Schritt für Schritt: nach 6 h → 60, nach 12 h → 30, nach 18 h → 15. Bei ganzzahligen T½ ist diese Methode schneller als die e-Funktion.",
          hints: ["n = 18/6 = 3 Halbwertszeiten", "120 × (½)³ = 120/8 = 15"],
          difficulty: 1,
          tags: ["halbwertszeit", "pharmakokinetik", "restmenge"],
        },
        {
          question: "Welche Aussage über den Ethanolabbau im Körper ist richtig?",
          options: [
            "Ethanol wird nach Kinetik 1. Ordnung abgebaut (exponentiell).",
            "Die Halbwertszeit von Ethanol ist konstant und dosisunabhängig.",
            "Ethanol wird mit konstanter Rate abgebaut (ca. 0,15 ‰/h) — Kinetik 0. Ordnung.",
            "Der Abbau von Ethanol beschleunigt sich bei höherer Konzentration.",
            "Im halblogarithmischen Diagramm ergibt der Ethanolabbau eine Gerade.",
          ],
          correctIndex: 2,
          explanation:
            "Ethanol folgt einer Kinetik 0. Ordnung, weil das abbauende Enzym (Alkoholdehydrogenase) bei üblichen Trinkmengen gesättigt ist. Daher ist die Abbaurate konstant (~0,15 ‰/h) und unabhängig von der Konzentration. Das ist der Grund für die Faustregel ‚pro Stunde ein Bier'. Bei Kinetik 1. Ordnung wäre die Rate konzentrationsabhängig — das trifft auf die meisten Medikamente zu, nicht aber auf Ethanol.",
          hints: ["Gesättigtes Enzym → konstante Rate", "Kinetik 0. Ordnung = linearer Abbau"],
          difficulty: 2,
          tags: ["kinetik", "nullte-ordnung", "ethanol"],
        },
        {
          question:
            "Digoxin hat eine Halbwertszeit von 36 h und wird täglich eingenommen. Nach wie vielen Tagen ist der Steady State ungefähr erreicht?",
          options: ["1–2 Tage", "3–4 Tage", "6–8 Tage", "10–12 Tage", "14–16 Tage"],
          correctIndex: 2,
          explanation:
            "Steady State wird nach 4–5 Halbwertszeiten erreicht: 4 × 36 h = 144 h ≈ 6 Tage, 5 × 36 h = 180 h ≈ 7,5 Tage. Das fällt in den Bereich 6–8 Tage. Diese Faustregel gilt unabhängig von Dosis und Dosierungsintervall — nur T½ bestimmt die Dauer. Bei lebensbedrohlichen Arrhythmien überbrückt man die Wartezeit mit einer Aufsättigungsdosis.",
          hints: ["Steady State nach 4–5 × T½", "5 × 36 h = 180 h ≈ 7,5 Tage"],
          difficulty: 2,
          tags: ["steady-state", "pharmakokinetik", "halbwertszeit"],
        },
        {
          question:
            "Ein radioaktives Isotop hat T½ = 8 h. Welcher Anteil der Ausgangsaktivität ist nach 32 h noch vorhanden?",
          options: ["12,5 %", "3,125 %", "25 %", "6,25 %", "1,56 %"],
          correctIndex: 3,
          explanation:
            "32 h / 8 h = 4 Halbwertszeiten. Restanteil = (½)⁴ = 1/16 = 6,25 %. Schrittweise: 8 h → 50 %, 16 h → 25 %, 24 h → 12,5 %, 32 h → 6,25 %. Nach einer weiteren T½ (40 h) wären es 3,125 % — dann wäre die 5-T½-Schwelle erreicht und die Substanz klinisch als eliminiert betrachtet.",
          hints: ["n = 32/8 = 4 Halbwertszeiten", "(½)⁴ = 1/16 = 6,25 %"],
          difficulty: 2,
          tags: ["radioaktiver-zerfall", "halbwertszeit", "restmenge"],
        },
        {
          question:
            "Welche der folgenden Aussagen über die Exponentialfunktion f(x) = 5 · e^(−3x) ist FALSCH?",
          options: [
            "f(x) > 0 für alle x ∈ ℝ.",
            "Die horizontale Asymptote ist y = 0.",
            "Der y-Achsenabschnitt liegt bei y = 5.",
            "Die Funktion ist streng monoton steigend.",
            "Die Funktion hat keine Nullstellen.",
          ],
          correctIndex: 3,
          explanation:
            "f(x) = 5·e^(−3x) hat einen negativen Exponenten (−3x), daher ist die Funktion streng monoton FALLEND, nicht steigend. Alle anderen Aussagen stimmen: stets positiv (e-Funktion!), Asymptote y = 0, f(0) = 5·e⁰ = 5, keine Nullstellen. Die Verwechslung von steigend/fallend bei negativem Exponenten ist eine klassische Falle.",
          hints: ["Negativer Exponent → fallend", "Exponentialfunktion ist immer positiv"],
          difficulty: 3,
          tags: ["exponentialfunktion", "monotonie", "falsch-aussage"],
        },
      ],
      diagram: "exponential-function",
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
      content: `## pH 7,1 vs. 7,4 — wie viel saurer ist das eigentlich?

Die Antwort: **doppelt so viel H⁺-Ionen.** Ein Unterschied von 0,3 pH-Einheiten klingt harmlos, bedeutet aber eine Verdoppelung der Protonenkonzentration — und eine lebensbedrohliche Azidose. Dass sich hinter winzigen Zahlenverschiebungen gewaltige Konzentrationsunterschiede verbergen, liegt am **Logarithmus**: der mathematischen Funktion, die aus Potenzierungen wieder handhabbare Zahlen macht. Ohne Logarithmen gäbe es keinen pH-Wert, keine Dezibel-Skala und keine Halbwertszeitberechnung.

---

## Was ist ein Logarithmus?

Der Logarithmus ist die **Umkehrfunktion der Exponentialfunktion**. Die zentrale Definition:

**log_b(x) = y ⟺ b^y = x**

In Worten: „Welchen Exponenten brauche ich bei Basis b, um x zu erhalten?" Beispiel: log₂(8) = 3, weil 2³ = 8. Der Logarithmus beantwortet also die Frage nach dem **unbekannten Exponenten** — genau das Werkzeug, das man braucht, um Exponentialgleichungen wie 2ⁿ = 1024 zu lösen (n = log₂(1024) = 10).

{{DIAGRAM:logarithm-function}}

**Drei wichtige Logarithmus-Varianten:**

| Schreibweise | Basis | Name | Typische Anwendung |
|---|---|---|---|
| **ln(x)** | e ≈ 2,718 | Natürlicher Logarithmus | Pharmakokinetik, Halbwertszeit, Physik |
| **log(x)** oder **lg(x)** | 10 | Dekadischer Logarithmus | pH-Wert, Dezibel |
| **ld(x)** oder **log₂(x)** | 2 | Binärlogarithmus | Halbwertszeiten (ld(2ⁿ) = n) |

> **Merke:** **ln(x) ist nur für x > 0 definiert.** log(0) und log(negative Zahlen) existieren nicht — eine klassische MedAT-Falle. Definitionsbereich: D = (0, ∞), Wertebereich: W = ℝ. Nullstelle immer bei x = 1 (da log_b(1) = 0 für jede Basis).

---

## Logarithmengesetze — Produkte werden zu Summen

Die vier Grundgesetze verwandeln komplizierte Terme in einfache:

1. **Produktregel:** log(a × b) = log(a) + log(b) — Multiplikation wird zur Addition
2. **Quotientenregel:** log(a/b) = log(a) − log(b) — Division wird zur Subtraktion
3. **Potenzregel:** log(aⁿ) = n × log(a) — Exponent wird zum Faktor
4. **Basiswechsel:** log_b(x) = ln(x) / ln(b) = log(x) / log(b)

| Regel | Formel | Rechenbeispiel |
|---|---|---|
| Produktregel | log(a×b) = log a + log b | log(2×5) = log 2 + log 5 = log 10 = 1 |
| Quotientenregel | log(a/b) = log a − log b | ln(1/2) = ln 1 − ln 2 = 0 − 0,693 = −0,693 |
| Potenzregel | log(aⁿ) = n × log a | log(10³) = 3 × log 10 = 3 |
| Basiswechsel | log_b(x) = ln x / ln b | log₂(8) = ln 8 / ln 2 = 2,079/0,693 = 3 |

**Denkprozess — Halbwertszeit herleiten mit der Quotientenregel:**
Aus C₀/2 = C₀ · e^(−k·T½) folgt 1/2 = e^(−k·T½). Logarithmieren: ln(1/2) = −k·T½. Jetzt Quotientenregel: ln(1/2) = ln(1) − ln(2) = 0 − ln(2) = **−ln(2)**. Also: T½ = ln(2)/k ≈ 0,693/k. Ohne Quotientenregel wäre diese Herleitung nicht möglich.

> **Merke:** **log(a + b) ≠ log(a) + log(b)** — die Regeln gelten nur für Produkte, Quotienten und Potenzen, **niemals für Summen oder Differenzen**. Diese Verwechslung ist die häufigste Logarithmus-Falle im MedAT.

---

## Natürlicher Logarithmus ln — die Sprache der Pharmakokinetik

Der natürliche Logarithmus (Basis e ≈ 2,718) ist die Umkehrfunktion von eˣ. In der Medizin begegnet er überall, wo Exponentialfunktionen auftreten: Medikamentenabbau, radioaktiver Zerfall, Enzymkinetik.

**Zentrale Spezialwerte:**
- ln(1) = 0 (da e⁰ = 1)
- ln(e) = 1 (da e¹ = e)
- **ln(2) ≈ 0,693** — der wichtigste Merkwert (steckt in jeder T½-Berechnung)
- ln(10) ≈ 2,303

**Pharmakokinetik-Anwendung:** Die Eliminationskonstante k ergibt sich aus zwei Messwerten im Semilog-Plot. Logarithmiert man C(t) = C₀ · e^(−kt), erhält man **ln(C) = ln(C₀) − k·t** — eine Geradengleichung mit Steigung −k. Im halblogarithmischen Diagramm (y-Achse: ln C, x-Achse: t) erscheint Kinetik erster Ordnung als **Gerade**.

---

## Dezimaler Logarithmus lg — pH und Dezibel

Der Zehnerlogarithmus (lg oder log₁₀) komprimiert riesige Wertebereiche auf handhabbare Skalen:

**pH-Wert:** pH = −log₁₀([H⁺])

| [H⁺] | pH | Bedeutung |
|---|---|---|
| 10⁻² mol/L | 2 | Magensaft (stark sauer) |
| 10⁻⁷ mol/L | 7 | Neutral (reines Wasser) |
| 4 × 10⁻⁸ mol/L | 7,4 | Normalblut |
| 10⁻¹⁴ mol/L | 14 | Stark basisch |

Eine pH-Änderung um 1 entspricht einer **10-fachen** Änderung der [H⁺]. Eine Änderung um 2 → Faktor 100. Umkehrung: [H⁺] = 10^(−pH).

**Dezibel (dB):** L = 10 · log₁₀(I/I₀). Ein Anstieg um 10 dB = 10-fache Intensität. Normales Gespräch (~60 dB) ist 10⁶-mal intensiver als die Hörschwelle (0 dB).

> **Merke:** pH 7,4 (Normalblut) = [H⁺] ≈ 40 nmol/L. Verdoppelung auf 80 nmol/L → pH sinkt nur um log(2) ≈ 0,3 auf **pH 7,1** — bereits eine lebensbedrohliche Azidose. Der logarithmische Maßstab „versteckt" große absolute Änderungen hinter kleinen Zahlendifferenzen.

{{DIAGRAM:ph-scale}}

---

## Henderson-Hasselbalch — Puffergleichung des Blutes

Die Henderson-Hasselbalch-Gleichung verbindet pH, Säurestärke und Pufferverhältnis:

**pH = pKₐ + log₁₀([A⁻] / [HA])**

Dabei ist [A⁻] die konjugierte Base (Protonenakzeptor) und [HA] die schwache Säure (Protonendonor). Bei [A⁻] = [HA] gilt log(1) = 0, also pH = pKₐ — dort puffert das System am effektivsten (Bereich pKₐ ± 1).

**Durchgerechnetes Rechenbeispiel — Bicarbonatpuffer im Blut:**

Für das Bicarbonat-System gilt speziell: pH = 6,1 + log([HCO₃⁻] / (0,03 × pCO₂))

Gegeben: [HCO₃⁻] = 24 mmol/L, pCO₂ = 40 mmHg

*Denkprozess:*
- Schritt 1: Nenner berechnen: 0,03 × 40 = **1,2 mmol/L** gelöstes CO₂
- Schritt 2: Verhältnis bilden: 24 / 1,2 = **20**
- Schritt 3: Logarithmus berechnen: log(20) = log(2 × 10) = log(2) + log(10) = 0,301 + 1 = **1,301**
- Schritt 4: Einsetzen: pH = 6,1 + 1,3 = **7,4** ✓

**Klinisches Szenario — metabolische Azidose:** [HCO₃⁻] fällt auf 12 mmol/L (z. B. bei diabetischer Ketoazidose), pCO₂ bleibt 40 mmHg:
pH = 6,1 + log(12/1,2) = 6,1 + log(10) = 6,1 + 1,0 = **7,1** — lebensbedrohlich! Das Verhältnis sank von 20:1 auf 10:1, der pH fiel um 0,3.

> **Merke:** Das 20:1-Verhältnis von [HCO₃⁻] zu gelöstem CO₂ hält den Blut-pH bei 7,4. Jede Halbierung dieses Verhältnisses senkt den pH um log(2) ≈ 0,3. Henderson-Hasselbalch ist die mathematische Grundlage jeder Blutgasanalyse-Interpretation.

---

## Vorzeichen von Logarithmen — Schnelltest

Das Vorzeichen lässt sich direkt am Argument ablesen, ohne zu rechnen:

- **x > 1** → log(x) > 0 (positiv)
- **x = 1** → log(x) = 0 (null)
- **0 < x < 1** → log(x) < 0 (negativ)

Das gilt für **jede** Basis > 1 (also für ln, log, ld gleichermaßen).

**Denkprozess — Übungsaufgabe:** „Welches Vorzeichen hat ln(1/e²) + ln(e³)?"
- ln(1/e²) = ln(e⁻²) = −2 (Argument 1/e² < 1, also negativ ✓)
- ln(e³) = 3 (Argument e³ > 1, also positiv ✓)
- Summe = −2 + 3 = **+1 > 0** (positiv)

---

## Basiswechsel und Merkwerte

Jeder Logarithmus lässt sich über den Basiswechselsatz in ln oder log umrechnen:

**log_b(x) = ln(x) / ln(b)**

**Denkprozess — Exponentialgleichung lösen:** 5ˣ = 200. Beide Seiten logarithmieren: x · ln(5) = ln(200) → x = ln(200)/ln(5) = 5,298/1,609 = **3,29**. Alternativ mit log: x = log(200)/log(5) = 2,301/0,699 = **3,29** — identisches Ergebnis, egal welche Basis.

**Merkwerte für den MedAT (auswendig lernen!):**
- **ln(2) ≈ 0,693** — steckt in T½ = ln(2)/k
- **log(2) ≈ 0,301** — pH sinkt um 0,3 bei [H⁺]-Verdoppelung
- log(3) ≈ 0,477
- ln(10) ≈ 2,303

---

## Rechenbeispiele

**Beispiel 1 — pH aus Protonenkonzentration:**
[H⁺] = 10⁻⁴ mol/L → pH = −log(10⁻⁴) = −(−4) = **4** (stark sauer, vergleichbar mit Orangensaft).

**Beispiel 2 — Semilog: k und T½ aus Messdaten:**
Messwerte: C(0) = 100 mg/L, C(3 h) = 50 mg/L. Im Semilog-Plot: Steigung = (ln 50 − ln 100) / (3 − 0) = (3,912 − 4,605) / 3 = **−0,231 h⁻¹**. Also k = 0,231 h⁻¹, T½ = 0,693/0,231 = **3,0 h**.

**Beispiel 3 — Dezibel und Hörverlust:**
Patient hört erst ab 40 dB HL. Intensitätsverhältnis: I₂/I₁ = 10^(40/10) = 10⁴ = **10.000-fach** höhere Intensität nötig. Hörgerät mit 30 dB Verstärkung: Faktor = 10^(30/10) = **1000-fach**.

**Beispiel 4 — Logarithmengesetze anwenden:**
Vereinfache: log(50) + log(2). *Denkprozess:* Produktregel → log(50 × 2) = log(100) = **2**. Einfacher als jeden Term einzeln auszurechnen.`,
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
      diagram: "logarithm-function",
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
          question:
            "Welchen Wert hat die unendliche geometrische Reihe 4 + 2 + 1 + 1/2 + 1/4 + ...?",
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
  ],
};
