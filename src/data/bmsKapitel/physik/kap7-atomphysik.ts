import type { Kapitel } from "../types";

export const physKap7: Kapitel = {
  id: "phys-kap7",
  title: "Atomphysik",
  subject: "physik",
  icon: "⚛️",
  estimatedTime: "120 min",
  unterkapitel: [
    // ─────────────────────────────────────────────────────────────────────────
    // UK ph-7-01: Atommodelle und Spektroskopie
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "ph-7-01",
      title: "Atommodelle und Spektroskopie",
      imageUrl: "/images/bms/ch-atommodell.jpg",
      imageCaption: "Abb.: Atommodelle von Dalton bis zum Orbitalmodell (OpenStax, CC BY 4.0)",
      stichworte: [
        "Atommodelle",
        "Bohrsches Modell",
        "Rutherford-Streuexperiment",
        "Quantenmechanisches Modell",
        "Spektrallinien",
        "Photonenenergie",
        "Balmer-Serie",
        "Lambert-Beer-Gesetz",
        "Pulsoximetrie",
        "Emissionsspektrum",
        "Absorptionsspektrum",
        "Plancksches Wirkungsquantum",
      ],
      content: `Der Clip am Finger misst Sauerstoff, ohne einen Tropfen Blut zu brauchen — Pulsoximetrie funktioniert, weil jedes Atom nur ganz bestimmte Lichtfarben absorbiert.

{{IMAGE}}

## Entwicklung der Atommodelle

Das **Thomsonsche Modell** (1904) stellte sich das Atom als eine gleichförmig positive Ladungsverteilung vor, in der Elektronen wie Rosinen in einem Kuchen eingebettet sind (“Plum-Pudding-Modell”). Es konnte keine diskreten Spektrallinien erklären und sagte keine Rückstreuung geladener Teilchen voraus.

Das **Rutherfordsche Kernmodell** (1911) folgte aus dem berühmten Streuexperiment: Alpha-Teilchen (⁴He²⁺, E ≈ 5 MeV) wurden an einer dünnen Goldfolie (wenige μm) gestreut. Die meisten Teilchen passierten nahezu ungehindert, doch etwa 1 von 8 000 wurde unter Winkeln > 90° zurückgeworfen. Rutherford schloss auf einen winzigen, massereichen, positiv geladenen Kern (Radius ≈ 10⁻¹⁵ m = 1 fm) umgeben von einer weitgehend leeren Elektronenhülle (Radius ≈ 10⁻¹⁰ m = 1 Å). Der Kern enthält damit > 99,9 % der Atommasse auf nur 10⁻¹⁵ des Volumens. Nachteil: Ein spiralförmig in den Kern fallendes Elektron würde nach der klassischen Elektrodynamik kontinuierlich Energie abstrahlen – das Atom wäre instabil (Kollapsproblem innerhalb von ≈ 10⁻¹¹ s).

> **Merke:** Rutherfords Streuexperiment bewies den kleinen, dichten Atomkern – das Thomson-Modell konnte die Rückstreuung nicht erklären.

Das **Bohrsche Atommodell** (1913) löste dieses Problem durch zwei Postulate:
1. Elektronen bewegen sich auf bestimmten erlaubten Kreisbahnen (Schalen K, L, M, …) ohne Energieabstrahlung.
2. Energie wird nur beim Übergang zwischen Schalen emittiert oder absorbiert (E = hf).

Die erlaubten Bahnen entsprechen Hauptquantenzahlen n = 1, 2, 3, ... mit Energien **Eₙ = −13,6 eV/n²** für Wasserstoff. Je größer n, desto weiter die Bahn vom Kern und desto höher (weniger negativ) die Energie. Für n = 1 (Grundzustand): E₁ = −13,6 eV; für n = 2: E₂ = −3,4 eV; für n = 3: E₃ = −1,51 eV. Die Ionisierungsenergie von Wasserstoff beträgt daher 13,6 eV.

**Formelklartext:** Eₙ = −13,6 eV/n² bedeutet: Die **Bindungsenergie** des Elektrons (negativ = gebunden) wird **betragsmäßig kleiner**, je weiter die Schale (n ↑). **ΔE beim Übergang** n₂ → n₁: ΔE = Eₙ₁ − Eₙ₂ = 13,6·(1/n₁² − 1/n₂²) eV (Abstrahlung beim Fall in tiefere Schale). **Größenordnung:** Ionisierung H = 13,6 eV; Hα (3→2) = 13,6·(1/4 − 1/9) = 1,89 eV; sichtbares Licht ≈ 1,8–3,1 eV.

| Schale | n | Eₙ (H-Atom) | Max. Elektronen (2n²) |
|--------|---|-------------|----------------------|
| K | 1 | −13,6 eV | 2 |
| L | 2 | −3,4 eV | 8 |
| M | 3 | −1,51 eV | 18 |
| N | 4 | −0,85 eV | 32 |

> **Merke:** Das Bohrsche Modell funktioniert exakt nur für Ein-Elektronen-Systeme (H, He⁺, Li²⁺). Für Mehrelektronensysteme ist die Quantenmechanik nötig.

Um die Grenzen des Bohrschen Modells zu überwinden, entwickelten Schrödinger und Heisenberg in den 1920er-Jahren die Quantenmechanik.

Das **quantenmechanische Modell** (Schrödinger, Heisenberg, 1920er) ersetzt feste Bahnen durch **Orbitale** – Raumgebiete, in denen die Aufenthaltswahrscheinlichkeit des Elektrons ≥ 90 % beträgt. Die Wellenfunktion ψ beschreibt den Quantenzustand; |ψ|² ist die Wahrscheinlichkeitsdichte. Vier Quantenzahlen charakterisieren jeden Zustand: Hauptquantenzahl n (Schale), Nebenquantenzahl l (Orbitalform: s, p, d, f), magnetische Quantenzahl mₗ (Orientierung) und Spinquantenzahl mₛ (±½). **Pauli-Prinzip:** Keine zwei Elektronen dürfen in allen vier Quantenzahlen übereinstimmen. **Daraus folgt: Jedes Orbital der Atomhülle kann nur maximal 2 Elektronen aufnehmen** (mit entgegengesetztem Spin).

| Quantenzahl | Symbol | Werte | Bedeutung |
|-------------|--------|-------|-----------|
| Hauptquantenzahl | n | 1, 2, 3, ... | Schale (Energieniveau, Größe des Orbitals) |
| Nebenquantenzahl | l | 0 bis n−1 | Orbitalform (s=0, p=1, d=2, f=3) |
| Magnetische QZ | mₗ | −l bis +l | Orientierung im Raum |
| Spin-QZ | mₛ | +½ oder −½ | Eigendrehimpuls des Elektrons |

Die **Heisenbergsche Unschärferelation** setzt dem gleichzeitigen Wissen über Ort und Impuls eine fundamentale Grenze: **Δx · Δp ≥ ℏ/2** (ℏ = h/2π = 1,055 × 10⁻³⁴ J·s). Je genauer der Ort bekannt ist, desto unbestimmter der Impuls — und umgekehrt. Dies ist keine technische Beschränkung, sondern eine fundamentale Eigenschaft der Natur.

> **Merke:** Vier Quantenzahlen (n, l, mₗ, mₛ) beschreiben jeden Elektronenzustand. Pauli: Maximal 2 Elektronen pro Orbital (entgegengesetzter Spin). Heisenberg: Δx·Δp ≥ ℏ/2.

{{DIAGRAM:em-spectrum}}

## Emission und Absorption – Spektrallinien

Wenn ein Elektron von einer höheren Schale (n₂) auf eine niedrigere (n₁) fällt, wird ein **Photon** emittiert:

> **E = hf = hc/λ**

mit h = 6,626 × 10⁻³⁴ J·s (Plancksches Wirkungsquantum), f = Frequenz, c ≈ 3 × 10⁸ m/s, λ = Wellenlänge.

**Formelklartext:** E = hf = hc/λ bedeutet: Die **Photonenenergie** ist proportional zur **Frequenz** (E ∝ f) und **umgekehrt proportional zur Wellenlänge** (E ∝ 1/λ). Höhere Frequenz (kürzere λ) → energiereicheres Photon (z. B. UV, Röntgen). **Einheiten:** E in **Joule** oder **eV** (1 eV = 1,602×10⁻¹⁹ J); λ in m → E = hc/λ in J. **MedAT-Falle:** E in eV umrechnen: E[eV] = E[J] / (1,602×10⁻¹⁹). Hα (656 nm) → E ≈ 1,89 eV.

Die Energie des Photons entspricht der Energiedifferenz: ΔE = Eₙ₂ − Eₙ₁ = hf.

**Vorzeichenkonvention:** ΔE > 0 (positiv) bedeutet **Absorption** — das Elektron springt auf eine höhere Schale und nimmt ein Photon auf. ΔE < 0 (negativ) bedeutet **Emission** — das Elektron fällt auf eine tiefere Schale und gibt ein Photon ab. Der **Betrag** |ΔE| entspricht in beiden Fällen der Photonenenergie hf.

Beim **Absorptionsspektrum** werden aus einem kontinuierlichen Spektrum bestimmte Wellenlängen absorbiert (dunkle Linien = Fraunhofer-Linien bei der Sonne). Beim **Emissionsspektrum** leuchten nur bestimmte Wellenlängen (helle Linien auf dunklem Hintergrund). Jedes Element besitzt ein einzigartiges Linienspektrum – ein “Fingerabdruck”, der in der analytischen Chemie und Astrophysik zur Identifikation genutzt wird.

Für **Wasserstoff** liefern Übergänge zur n = 2-Schale die **Balmer-Serie** (sichtbares Licht):
- Hα: 656 nm (rot), Übergang 3→2, ΔE = 1,89 eV
- Hβ: 486 nm (blau-grün), Übergang 4→2, ΔE = 2,55 eV
- Hγ: 434 nm (violett), Übergang 5→2, ΔE = 2,86 eV
- Seriengrenze: 365 nm (n→∞ auf n=2)

| Serie | Endzustand n₁ | Spektralbereich | Wellenlängenbereich |
|-------|---------------|-----------------|---------------------|
| Lyman | 1 | UV | 91–122 nm |
| Balmer | 2 | sichtbar | 365–656 nm |
| Paschen | 3 | IR | 820–1875 nm |

> **Merke:** Die Balmer-Serie (Übergänge auf n = 2) ist die einzige Wasserstoff-Serie im sichtbaren Bereich – MedAT-Klassiker!

{{DIAGRAM:radioactive-decay}}

## Spektrophotometrie – Lambert-Beer-Gesetz

In der Praxis misst die **Spektrophotometrie** die Extinktion (Absorbanz) einer Lösung:

> **A = ε · c · d**

mit A = Extinktion (dimensionslos), ε = molarer Extinktionskoeffizient [L·mol⁻¹·cm⁻¹], c = Konzentration [mol/L], d = Schichtdicke [cm].

**Formelklartext:** A = ε·c·d heißt: **Extinktion** („optische Dichte”) ist proportional zur **Konzentration** c und zur **Schichtdicke** d. Doppelte Konzentration oder doppelte Weglänge → **doppelte** Extinktion. **A = log₁₀(I₀/I)** — nicht „Absorption in %”: Bei A = 1 ist T = I/I₀ = 10 %; bei A = 2 ist T = 1 %. **Einheiten:** [ε] = L/(mol·cm), [c] = mol/L, [d] = cm → A dimensionslos. Gilt nur bei **verdünnten** Lösungen und **monochromatischem** Licht.

Je mehr chromophore (lichtabsorbierende) Moleküle in der Lösung und je länger der optische Weg, desto mehr Licht wird absorbiert. Die Transmission T = I/I₀ und Extinktion A = −log T = log(I₀/I) sind verknüpft. Bei A = 1 beträgt T = 10 %, bei A = 2 nur noch T = 1 %. Das Gesetz gilt nur bei monochromatischem Licht, verdünnten Lösungen und Abwesenheit von Streuung oder Fluoreszenz.

> **Merke:** Lambert-Beer gilt linear nur bei verdünnten Lösungen (c < 0,01 mol/L) und monochromatischem Licht. Bei hohen Konzentrationen treten Abweichungen auf.

Klinisch relevant: **Hämoglobin-Absorptionsspektrum**. Oxygeniertes Hämoglobin (HbO₂) und desaturiertes Hämoglobin (Hb) haben unterschiedliche Absorptionsmaxima. Der **isobestische Punkt** bei 805 nm ist die Wellenlänge, bei der HbO₂ und Hb gleich stark absorbieren – er dient als Referenzpunkt. Die **Pulsoximetrie** nutzt 660 nm (rotes Licht, Hb absorbiert stark) und 940 nm (nahes Infrarot, HbO₂ absorbiert stärker) zur nichtinvasiven Bestimmung der Sauerstoffsättigung. Aus dem Verhältnis R = (A_660_pulsatil/A_660_DC) / (A_940_pulsatil/A_940_DC) wird SpO₂ über eine empirische Kalibrierkurve berechnet.

## Rechenbeispiele

**Beispiel 1 — Photonenenergie der Hα-Linie (Balmer-Serie):**
λ = 656 nm = 656 × 10⁻⁹ m. E = hc/λ = (6,626 × 10⁻³⁴ × 3 × 10⁸) / (656 × 10⁻⁹) = 1,988 × 10⁻²⁵ / 6,56 × 10⁻⁷ = 3,03 × 10⁻¹⁹ J. In eV: E = 3,03 × 10⁻¹⁹ / 1,602 × 10⁻¹⁹ = 1,89 eV. Überprüfung: E = 13,6 eV × (1/2² − 1/3²) = 13,6 × (1/4 − 1/9) = 13,6 × 5/36 = 1,89 eV ✓.

**Beispiel 2 — Lambert-Beer: Hämoglobin-Konzentration:**
A = 0,85 (gemessen); ε = 11 300 L/(mol·cm) für Hämoglobin bei 540 nm; d = 1 cm:
c = A/(ε·d) = 0,85/11 300 = 7,52 × 10⁻⁵ mol/L = 75,2 μmol/L. Umrechnung: 75,2 μmol/L × 64 500 g/mol (M_Hb) = 4,85 g/L. Klinischer Normwert Hb: 12–17 g/dL (120–170 g/L). Die Probe ist stark verdünnt — Verdünnungsfaktor einrechnen!

**Beispiel 3 — Ionisierungsenergie von Wasserstoff:**
Grundzustand n=1: E₁ = −13,6 eV. Ionisation (n→∞): E_∞ = 0 eV. Ionisierungsenergie: 13,6 eV = 13,6 × 1,602 × 10⁻¹⁹ J = 2,18 × 10⁻¹⁸ J. Welche Wellenlänge hat das Photon? λ = hc/E = (6,626 × 10⁻³⁴ × 3 × 10⁸) / (2,18 × 10⁻¹⁸) = 91,2 nm (tiefes UV, Lyman-Grenze).`,
      lernziele: [
        "Die Entwicklung von Thomson über Rutherford zum Bohrschen Atommodell und das quantenmechanische Modell erklären.",
        "Die Photonenenergie E = hf = hc/λ berechnen und Spektrallinien auf Elektronenübergänge zurückführen.",
        "Emissions- und Absorptionsspektren unterscheiden sowie die Balmer-Serie für Wasserstoff kennen.",
        "Das Lambert-Beer-Gesetz A = ε·c·d formulieren und auf Konzentrationsmessungen anwenden.",
        "Das Prinzip der Pulsoximetrie mit den Absorptionseigenschaften von Hb und HbO₂ erklären.",
      ],
      sections: [
        {
          heading: "Atommodelle im Überblick",
          text: "Thomson: Elektronen in positiver Ladungswolke. Rutherford: Streuexperiment zeigt winzigen Massekern. Bohr: diskrete Elektronenschalen mit Energieniveaus Eₙ = −13,6 eV/n² für H. Quantenmechanik: Orbitale als Wahrscheinlichkeitsverteilungen (|ψ|²). Jedes Modell löst Probleme seines Vorgängers, hat aber selbst Grenzen – das Bohrsche Modell funktioniert exakt nur für wasserstoffähnliche Systeme.",
          merksatz:
            "Bohr-Postulat: Elektronen strahlen auf erlaubten Bahnen keine Energie ab; Emission/Absorption nur beim Schalensprung.",
        },
        {
          heading: "Photonen und Spektrallinien",
          text: 'Jede Spektrallinie entspricht einem bestimmten Elektronenübergang. Energie des Photons: E = hf = hc/λ. Für Wasserstoff gilt die Balmer-Formel für sichtbare Linien (Übergänge auf n=2). Emissionsspektren sind "Fingerabdrücke" von Elementen. Absorptionsspektren entstehen, wenn Atome Photonen mit genau passender Energie aus dem Kontinuum herausfiltern.',
          merksatz:
            "E_Photon = hf = hc/λ; h = 6,626×10⁻³⁴ J·s. Balmer-Serie: Übergänge auf n=2 → sichtbares Licht.",
        },
        {
          heading: "Spektrophotometrie und Pulsoximetrie",
          text: "Lambert-Beer: A = ε·c·d – Extinktion proportional zu Konzentration und Schichtdicke. Pulsoximeter nutzen zwei Wellenlängen (660 nm und 940 nm), weil HbO₂ und Hb sich in ihren Absorptionsspektren unterscheiden. Aus dem Verhältnis der pulsatilen Signale wird die arterielle Sauerstoffsättigung SpO₂ berechnet. Normwert SpO₂ ≥ 95 %, unter 90 % liegt eine klinisch relevante Hypoxämie vor.",
          merksatz: "Lambert-Beer: A = ε·c·d. Pulsoximetrie: 660 nm (Hb) vs. 940 nm (HbO₂) → SpO₂.",
        },
      ],
      merksätze: [
        "Rutherford-Streuexperiment: Rückstreuung von α-Teilchen beweist kleinen, dichten, positiven Atomkern.",
        "Bohr: Elektronen auf diskreten Schalen (n=1,2,3…); Energieniveaus für H: Eₙ = −13,6 eV/n².",
        "Photon bei Schalensprung: E = hf = hc/λ; h = 6,626×10⁻³⁴ J·s.",
        "Balmer-Serie (H): Übergänge auf n=2, sichtbares Licht; Hα = 656 nm (rot), Hβ = 486 nm (blau-grün).",
        "Quantenmechanisches Modell: Orbitale = Räume mit 90 % Aufenthaltswahrscheinlichkeit (|ψ|²).",
        "Lambert-Beer-Gesetz: A = ε·c·d – Extinktion linear zu Konzentration und Schichtdicke.",
        "Pulsoximetrie: 660 nm (Hb absorbiert stark) und 940 nm (HbO₂ absorbiert stärker).",
        "Absorptionsspektrum: dunkle Linien im Kontinuum (Atome absorbieren Photonen bestimmter Energie).",
        "Emissionsspektrum: helle Linien = charakteristische Wellenlängen bei Elektronenübergängen nach unten.",
        "SpO₂-Normwert: ≥ 95 %; < 90 % = klinische Hypoxämie.",
      ],
      altfrage: {
        text: "Die Energie des Grundzustands (n=1) im Wasserstoffatom beträgt -13,6 eV. Welche Energie hat die Schale n=2?",
        options: [
          { id: "a", text: "-27,2 eV" },
          { id: "b", text: "-6,8 eV" },
          { id: "c", text: "-3,4 eV" },
          { id: "d", text: "-1,5 eV" },
          { id: "e", text: "-0,85 eV" },
        ],
        correctOptionId: "c",
        explanation:
          "E_n = -13,6 eV / n². Für n=2: E₂ = -13,6/4 = -3,4 eV. Option b wäre -13,6/2 (falsches Gesetz: /n statt /n²). Beim Übergang n=2 → n=1 wird ein Photon mit 10,2 eV emittiert.",
      },
      klinischerBezug:
        "Pulsoximetrie (SpO₂): nutzt unterschiedliche Absorption von Hb (660 nm) und HbO₂ (940 nm). Lambert-Beer-Gesetz ist Grundlage aller photometrischen Laboranalysen (Hämoglobin, Bilirubin, Glucose-Oxidase-Tests).",
      selfTest: [
        {
          question:
            "Welches Experiment bewies, dass Atome einen kleinen, dichten, positiv geladenen Kern besitzen?",
          options: [
            "Das Doppelspaltexperiment von Young",
            "Das Photoelektrische-Effekt-Experiment von Lenard",
            "Das Goldfolien-Streuexperiment von Rutherford",
            "Die Messung der Elektronenmasse durch Thomson",
            "Die Spektralanalyse von Kirchhoff und Bunsen",
          ],
          correctIndex: 2,
          explanation:
            "Im Rutherford-Streuexperiment (1911) wurden Alpha-Teilchen auf eine dünne Goldfolie geschossen. Die meisten Teilchen passierten ungehindert, aber einige wurden unter großen Winkeln – sogar zurück – gestreut. Diese Beobachtung ließ sich nur erklären, wenn sich die gesamte positive Ladung und nahezu die gesamte Masse auf einen winzigen Kern (Radius ≈ 10⁻¹⁵ m) konzentriert, umgeben von einer weitgehend leeren Hülle (Radius ≈ 10⁻¹⁰ m). Das Thomson-Modell hätte diese starke Rückstreuung nicht erzeugt. Rutherford schloss aus dem Anteil der stark gestreuten Teilchen auf die ungefähre Kerngröße.",
          hints: [
            "Denke daran: Welches Experiment schoss geladene Teilchen auf eine Metallfolie und beobachtete unerwartete Rückstreuung?",
            'Das Ergebnis überraschte Rutherford selbst: "Als würde man eine Artilleriegranate auf Seidenpapier schießen und sie springt zurück."',
          ],
          tags: ["rutherford", "kernmodell", "streuexperiment"],
          difficulty: 1,
        },
        {
          question:
            "Ein Elektron im Wasserstoffatom fällt von der Schale n=4 auf n=2 (Balmer-Serie). Die Energiedifferenz beträgt 2,55 eV. Welche Wellenlänge hat das emittierte Photon? (h = 6,63×10⁻³⁴ J·s, c = 3×10⁸ m/s, 1 eV = 1,6×10⁻¹⁹ J)",
          options: [
            "122 nm (UV)",
            "486 nm (blau-grün, sichtbar)",
            "656 nm (rot, sichtbar)",
            "820 nm (nahes IR)",
            "1280 nm (IR)",
          ],
          correctIndex: 1,
          explanation:
            "Energie: ΔE = 2,55 eV × 1,6×10⁻¹⁹ J/eV = 4,08×10⁻¹⁹ J. Wellenlänge: λ = hc/ΔE = (6,63×10⁻³⁴ × 3×10⁸) / 4,08×10⁻¹⁹ = 19,89×10⁻²⁶ / 4,08×10⁻¹⁹ ≈ 4,87×10⁻⁷ m = 487 nm ≈ 486 nm. Dies ist die Hβ-Linie der Balmer-Serie, blau-grünes Licht. Die 656 nm-Linie (Hα) entspricht dem Übergang 3→2 mit einer Energiedifferenz von 1,89 eV, die 122 nm-Linie gehört zur Lyman-Serie (Übergang auf n=1).",
          hints: [
            "Formel: λ = hc/E. Wandle zuerst eV in Joule um: 1 eV = 1,6×10⁻¹⁹ J.",
            "Balmer-Serie liegt im sichtbaren Bereich (380–780 nm). Die 4→2-Linie ist die Hβ-Linie.",
          ],
          tags: ["balmer-serie", "spektrallinien", "photonenenergie"],
          difficulty: 3,
        },
        {
          question:
            "Das Lambert-Beer-Gesetz lautet A = ε·c·d. Eine Lösung hat bei 540 nm einen molaren Extinktionskoeffizienten ε = 1000 L·mol⁻¹·cm⁻¹. Die Schichtdicke beträgt 1 cm und die gemessene Extinktion A = 0,5. Welche Konzentration hat die Lösung?",
          options: ["0,05 mmol/L", "0,5 mmol/L", "5 mmol/L", "50 mmol/L", "500 mmol/L"],
          correctIndex: 1,
          explanation:
            "Aus A = ε·c·d folgt: c = A/(ε·d) = 0,5 / (1000 L·mol⁻¹·cm⁻¹ × 1 cm) = 0,5 / 1000 mol/L = 0,0005 mol/L = 0,5 mmol/L. Das Lambert-Beer-Gesetz ist die Grundlage aller photometrischen Konzentrationsbestimmungen im Labor. Die Extinktion A ist dimensionslos und definiert als A = log₁₀(I₀/I) = −log₁₀(T), wobei T die Transmission ist. Bei A = 0,5 beträgt die Transmission T = 10⁻⁰·⁵ ≈ 31,6 %, d.h. nur etwa 32 % des Lichtes passieren die Küvette.",
          hints: [
            "Stelle A = ε·c·d nach c um: c = A/(ε·d).",
            "Achte auf die Einheiten: ε in L·mol⁻¹·cm⁻¹, d in cm, c kommt in mol/L heraus.",
          ],
          tags: ["lambert-beer", "photometrie", "konzentration"],
          difficulty: 2,
        },
        {
          question:
            "Die Pulsoximetrie misst die arterielle Sauerstoffsättigung (SpO₂) mit zwei Wellenlängen. Welches Prinzip liegt dieser Messung zugrunde?",
          options: [
            "Hb und HbO₂ haben bei 660 nm und 940 nm unterschiedliche Absorptionskoeffizienten",
            "Oxygeniertes Blut hat eine andere Viskosität als desaturiertes Blut",
            "Die Herzfrequenz verändert die Lichtstreuung durch rote Blutkörperchen",
            "Hb fluoresziert bei 660 nm, HbO₂ bei 940 nm",
            "Das Reflexionsverhalten von Hämoglobin ändert sich mit dem pH-Wert",
          ],
          correctIndex: 0,
          explanation:
            "Hämoglobin (Hb) und Oxyhämoglobin (HbO₂) haben unterschiedliche Absorptionsspektren: Bei 660 nm (rotes Licht) absorbiert desaturiertes Hb deutlich stärker als HbO₂. Bei 940 nm (nahes Infrarot) ist es umgekehrt – HbO₂ absorbiert stärker. Das Pulsoximeter sendet beide Wellenlängen durch das Gewebe (Fingerkuppe, Ohrläppchen) und misst die pulsatile Änderung der Extinktion. Aus dem Verhältnis der Absorptionsänderungen bei beiden Wellenlängen berechnet der Algorithmus die SpO₂. Normwert ≥ 95 %; unter 90 % liegt eine klinisch bedeutsame Hypoxämie vor. Diese Methode ist nicht-invasiv und liefert kontinuierlich Messwerte.",
          hints: [
            "Das Lambert-Beer-Gesetz gilt: A = ε·c·d. Was unterscheidet Hb von HbO₂?",
            "Bei 660 nm (rotes Licht): Hb absorbiert stark → venöses Blut sieht dunkelrot aus. HbO₂ absorbiert schwächer → arterielles Blut ist hellrot.",
          ],
          tags: ["pulsoximetrie", "hämoglobin", "spektroskopie"],
          difficulty: 2,
        },
        {
          question:
            "Licht der Wellenlänge 400 nm trifft auf ein Atom. Welche Photonenenergie hat dieses Licht in eV? (h = 6,63×10⁻³⁴ J·s, c = 3×10⁸ m/s, 1 eV = 1,6×10⁻¹⁹ J)",
          options: ["1,2 eV", "2,1 eV", "3,1 eV", "4,8 eV", "6,2 eV"],
          correctIndex: 2,
          explanation:
            "E = hc/λ = (6,63×10⁻³⁴ J·s × 3×10⁸ m/s) / (400×10⁻⁹ m) = 19,89×10⁻²⁶ / 4×10⁻⁷ = 4,97×10⁻¹⁹ J. In eV: E = 4,97×10⁻¹⁹ J / 1,6×10⁻¹⁹ J/eV ≈ 3,1 eV. Licht mit 400 nm ist violettes Licht (Grenze zum UV). Zum Vergleich: rotes Licht (700 nm) hat etwa 1,77 eV, UV-C bei 200 nm hat 6,2 eV. Photonen mit Energien über etwa 3 eV können Biomoleküle direkt schädigen (DNA-Absorption im UV).",
          hints: [
            "Formel: E = hf = hc/λ. Zuerst E in Joule, dann Umrechnung: 1 eV = 1,6×10⁻¹⁹ J.",
            "Kürzere Wellenlänge = höhere Frequenz = höhere Energie. 400 nm ist violett/UV-nahe.",
          ],
          tags: ["photonenenergie", "wellenlänge", "elektronenvolt"],
          difficulty: 3,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK ph-7-02: Radioaktivität — Strahlenarten und Zerfallsgesetze
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "ph-7-02",
      title: "Radioaktivität – Strahlenarten und Zerfallsgesetze",
      stichworte: [
        "Alpha-Strahlung",
        "Beta-Strahlung",
        "Gamma-Strahlung",
        "Halbwertszeit",
        "Zerfallsgesetz",
        "Zerfallskonstante",
        "Aktivität Becquerel",
        "Äquivalentdosis Sievert",
        "Strahlungs-Wichtungsfaktor",
        "Nuklearmedizin",
        "Technetium-99m",
        "C-14-Datierung",
      ],
      content: `Jedes Atom hat eine innere Uhr — zerfällt es, sendet es Strahlung aus, die Tumore zerstören oder Krebsherde sichtbar machen kann. Kernphysik ist klinischer Alltag.

{{DIAGRAM:radioactive-decay}}

## Alpha-Strahlung (α)

Alpha-Teilchen sind identisch mit einem **Helium-4-Kern**: 2 Protonen + 2 Neutronen, Masse ≈ 4 u, Ladung +2e. Typische kinetische Energien: 4–8 MeV. Der α-Zerfall tritt bevorzugt bei schweren Kernen (Z > 82) auf, da diese durch Ausstoßen eines α-Teilchens ihre Bindungsenergie pro Nukleon erhöhen und somit stabiler werden.

Beim α-Zerfall gilt die **Kerngleichung**:
> ᴬ_Z X → ᴬ⁻⁴_(Z-2) Y + ⁴₂He

Ordnungszahl sinkt um 2 (zwei Positionen nach links im PSE), Massenzahl sinkt um 4.

**Wichtige Zerfallsbeispiele mit Kerngleichungen:**
- ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He (T½ = 4,47 × 10⁹ Jahre) — Beginn der Uran-Radium-Zerfallsreihe
- ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He (T½ = 1600 Jahre) — Radon-Entstehung, klinisch relevant wegen Radonbelastung in Gebäuden
- ²¹⁰₈₄Po → ²⁰⁶₈₂Pb + ⁴₂He (T½ = 138 Tage) — Polonium-210, bekannt durch den Fall Litwinenko (2006)
- ²⁴¹₉₅Am → ²³⁷₉₃Np + ⁴₂He (T½ = 432 Jahre) — Americium in Rauchmeldern

**Mechanismus:** Das α-Teilchen überwindet die Coulomb-Barriere des Kerns durch den **quantenmechanischen Tunneleffekt** (Gamow, 1928). Klassisch hat das Teilchen nicht genug Energie, um die Potenzialbarriere (≈ 25–30 MeV) zu überwinden, aber quantenmechanisch besteht eine endliche Tunnelwahrscheinlichkeit. Je höher die Energie des α-Teilchens und je schmaler die Barriere, desto größer die Tunnelwahrscheinlichkeit → kürzere Halbwertszeit. Diese Beziehung beschreibt das **Geiger-Nuttall-Gesetz**: log T½ ∝ 1/√E_α (höhere α-Energie → kürzere Halbwertszeit).

**Eigenschaften:**
- Reichweite: 3–7 cm in Luft, < 0,1 mm in Gewebe (≈ 40 μm, Dicke der Epidermis)
- Abschirmung: Blatt Papier oder Hornhaut der Haut genügt
- Ionisierungsdichte: sehr hoch (≈ 10⁵ Ionenpaare/cm in Luft) — höchster **LET** (linearer Energietransfer, abgegebene Energie pro Wegstrecke im Gewebe) aller Strahlungsarten
- Äußerlich: ungefährlich (wird von der toten Hautschicht gestoppt)
- Innerlich (Inhalation, Ingestion): extrem gefährlich wegen hoher lokaler Energieabgabe
- Biologische Wirksamkeit: erzeugt **clustered DNA damage** — mehrere Doppelstrangbrüche auf engem Raum, kaum reparierbar

> **Merke:** α-Strahlung ist äußerlich harmlos, innerlich (Radon, Polonium-210) aber hochgefährlich – Strahlungs-Wichtungsfaktor w_R = 20! Radon (²²²Rn) ist in Österreich nach Rauchen die zweithäufigste Ursache für Lungenkrebs.

**Klinische Relevanz des Radon-Problems:** In Österreich liegt die mittlere Radonkonzentration in Wohnräumen bei ca. 99 Bq/m³, in manchen Regionen (z. B. Mühlviertel, Teile der Steiermark) deutlich höher. Der EU-Referenzwert beträgt 300 Bq/m³. Radon (²²²Rn) ist ein Edelgas, das aus dem Boden in Gebäude diffundiert. Es zerfällt weiter zu kurzlebigen α-Strahlern (²¹⁸Po, ²¹⁴Po), die sich an Aerosolpartikel anlagern und eingeatmet werden → α-Strahlung direkt im Lungenepithel.

---

## Beta-minus-Strahlung (β⁻)


Ein Neutron im Kern wandelt sich um (vermittelt durch die **schwache Wechselwirkung**):
> n → p + e⁻ + ν̄ₑ (Antineutrino)

Die vollständige **Kerngleichung** lautet:
> ᴬ_Z X → ᴬ_(Z+1) Y + e⁻ + ν̄ₑ

Ordnungszahl steigt um 1 (eine Position nach rechts im PSE), Massenzahl bleibt konstant.

**Wichtige Zerfallsbeispiele mit Kerngleichungen:**
- ¹⁴₆C → ¹⁴₇N + e⁻ + ν̄ₑ (T½ = 5730 Jahre) — Grundlage der **Radiokarbon-Datierung**
- ¹³¹₅₃I → ¹³¹₅₄Xe + e⁻ + ν̄ₑ (T½ = 8,02 Tage) — **Schilddrüsentherapie** (Radiojodtherapie)
- ³H (Tritium) → ³₂He + e⁻ + ν̄ₑ (T½ = 12,3 Jahre) — Markierungssubstanz in der Biochemie
- ⁹⁰₃₈Sr → ⁹⁰₃₉Y + e⁻ + ν̄ₑ (T½ = 28,8 Jahre) — Fallout-Isotop, lagert sich in Knochen ein (chemisch ähnlich Ca)
- ³²₁₅P → ³²₁₆S + e⁻ + ν̄ₑ (T½ = 14,3 Tage) — radioaktiver Tracer in der Molekularbiologie

**Eigenschaften:**
- Reichweite: einige Meter in Luft, wenige mm bis cm in Gewebe (abhängig von E_max)
- Abschirmung: Aluminium-Platte (~3 mm) oder dünnes Plexiglas
- **Kontinuierliches Energiespektrum** — das ist ein entscheidender Unterschied zum α-Zerfall! Die Zerfallsenergie wird zwischen Elektron und Antineutrino aufgeteilt. Das Elektron kann jede Energie zwischen 0 und E_max erhalten. Das mittlere E_β beträgt ca. E_max/3. Pauli postulierte 1930 das Neutrino, um die Energieerhaltung zu retten — entdeckt wurde es erst 1956 (Cowan-Reines-Experiment).
- Strahlungs-Wichtungsfaktor: w_R = 1 (niedrigere Ionisierungsdichte als α)

> **Merke:** β⁻-Zerfall: Neutron → Proton + Elektron + Antineutrino. Z steigt um 1, A bleibt gleich. Kontinuierliches Energiespektrum (Neutrino teilt sich die Energie). Abschirmung: Aluminium.

**Klinisch: ¹³¹I-Radiojodtherapie** — Die β⁻-Strahlung des ¹³¹I hat E_max = 0,606 MeV und eine mittlere Reichweite von ca. 0,4 mm im Gewebe — ideal, um selektiv Schilddrüsengewebe zu zerstören, ohne umliegendes Gewebe stark zu schädigen. Anwendung: Morbus Basedow, Schilddrüsenkarzinom. In Österreich wird die Radiojodtherapie stationär durchgeführt (Strahlenschutzgesetz); Patienten werden erst entlassen, wenn die Aktivität unter 250 MBq gefallen ist.

---

## Beta-plus-Strahlung (β⁺) — Positronenemission

Um das Bild der Betazerfälle zu vervollständigen: Kerne mit **Protonenüberschuss** können den β⁺-Zerfall durchlaufen.

Ein Proton im Kern wandelt sich um:
> p → n + e⁺ + νₑ (Neutrino)

Die vollständige **Kerngleichung** lautet:
> ᴬ_Z X → ᴬ_(Z-1) Y + e⁺ + νₑ

Ordnungszahl sinkt um 1, Massenzahl bleibt konstant.

**Wichtige Zerfallsbeispiele:**
- ¹⁸₉F → ¹⁸₈O + e⁺ + νₑ (T½ = 109,77 min) — wichtigstes PET-Nuklid (¹⁸F-FDG)
- ¹¹₆C → ¹¹₅B + e⁺ + νₑ (T½ = 20,4 min) — PET-Neuroimaging
- ¹³₇N → ¹³₆C + e⁺ + νₑ (T½ = 9,97 min) — PET-Myokardperfusion
- ¹⁵₈O → ¹⁵₇N + e⁺ + νₑ (T½ = 2,04 min) — PET-Blutfluss-Messung
- ⁶⁸₃₁Ga → ⁶⁸₃₀Zn + e⁺ + νₑ (T½ = 67,7 min) — ⁶⁸Ga-DOTATATE für neuroendokrine Tumoren

**Besonderheit:** Beim β⁺-Zerfall muss die Massenenergie des Mutterkerns mindestens 2 × m_e·c² = 1,022 MeV größer sein als die des Tochterkerns (da ein Positron erzeugt wird und ein Proton durch ein leichteres Neutron ersetzt wird). Ist diese Energiebedingung nicht erfüllt, kann alternativ **Elektroneneinfang** (EC, electron capture) stattfinden: p + e⁻ → n + νₑ (Ergebnis identisch: Z−1, A gleich), z. B. ¹²⁵₅₃I → ¹²⁵₅₂Te + νₑ.

Das emittierte Positron (Antiteilchen des Elektrons, Masse = m_e, Ladung +e) bewegt sich wenige Millimeter durch das Gewebe, verliert kinetische Energie durch Ionisation und trifft schließlich auf ein Elektron → **Annihilation** (Paarvernichtung):

> e⁺ + e⁻ → 2 γ-Photonen mit je 511 keV (exakt antiparallel, 180°)

Diese Annihilationsstrahlung ist die Grundlage der **PET-Diagnostik** (Positronen-Emissions-Tomographie, UK ph-7-04).

> **Merke:** β⁺-Zerfall: Proton → Neutron + Positron + Neutrino. Z sinkt um 1, A bleibt gleich. Das Positron annihiliert mit einem Elektron → 2 × 511 keV Gammaphotonen unter 180° → PET-Bildgebung.

---

## Gamma-Strahlung (γ)


Gamma-Strahlung ist hochenergetische **elektromagnetische Strahlung** (Photonen, E > 100 keV, typisch 100 keV – 10 MeV). Sie entsteht, wenn ein nach einem α- oder β-Zerfall im angeregten Zustand verbleibender Tochterkern in den Grundzustand übergeht (**isomerer Übergang**). Keine Änderung von Z oder A.

**Entstehungsmechanismen:**
1. **Isomerer Übergang (IT):** Angeregter Kern → Grundzustand + γ-Photon. Beispiel: ⁹⁹ᵐTc → ⁹⁹Tc + γ (140 keV, T½ = 6,01 h). Das “m” steht für metastabil (langlebiger angeregter Zustand).
2. **Begleitstrahlung bei α- und β-Zerfall:** Häufig geht der Tochterkern nicht direkt in den Grundzustand, sondern in einen angeregten Zustand → γ-Emission als Folgestufe. Beispiel: ⁶⁰₂₇Co → ⁶⁰₂₈Ni* + β⁻ → ⁶⁰₂₈Ni + γ₁ (1,173 MeV) + γ₂ (1,332 MeV). Cobalt-60 wird in der Strahlentherapie genutzt.

**Eigenschaften:**
- Reichweite: sehr hoch (theoretisch unendlich, exponentiell geschwächt nach I = I₀·e^(−μx))
- Abschirmung: dicke Schichten Blei (mehrere cm) oder Beton (mehrere Dezimeter) — γ-Strahlung wird **nie** vollständig abgeschirmt, nur exponentiell reduziert
- Ionisierungsdichte: gering pro Wegstrecke (niedriger LET), aber große Reichweite in Gewebe → Ganzkörperbestrahlung möglich
- Strahlungs-Wichtungsfaktor: w_R = 1
- **Wechselwirkungen:** Photoeffekt (< 100 keV, ∝ Z⁴), Compton-Effekt (100 keV–10 MeV), Paarbildung (> 1,022 MeV)

> **Merke:** γ-Strahlung ändert weder Ordnungs- noch Massenzahl. Sie begleitet oft α- oder β-Zerfall als Folgeprozess. Abschirmung durch Blei oder Beton (exponentielle Schwächung). Klinisch: ⁹⁹ᵐTc (140 keV γ) ist der Goldstandard der nuklearmedizinischen Diagnostik.

{{DIAGRAM:radiation-penetration}}

| Strahlung | Teilchen | Ladung | Abschirmung | Z-Änderung | A-Änderung | w_R | LET |
|-----------|----------|--------|-------------|------------|------------|-----|-----|
| α | He-4-Kern | +2e | Papier | −2 | −4 | 20 | hoch |
| β⁻ | Elektron | −1e | Aluminium | +1 | 0 | 1 | niedrig |
| β⁺ | Positron | +1e | Aluminium | −1 | 0 | 1 | niedrig |
| γ | Photon | 0 | Blei/Beton | 0 | 0 | 1 | sehr niedrig |
| Neutronen | Neutron | 0 | Wasser/Paraffin | variabel | variabel | 5–20 | mittel–hoch |

**Neutronenstrahlung** entsteht bei Kernspaltung und Kernfusion. Neutronen sind ungeladen und durchdringen Materie leicht; sie werden am besten durch **wasserstoffreiche Materialien** (Wasser, Paraffin, Polyethylen) abgebremst (Moderation). Der w_R für Neutronen ist energieabhängig (5–20), weil langsame Neutronen eingefangen werden und dabei α- oder γ-Strahlung erzeugen.

**Ionisierende Strahlung beim radioaktiven Zerfall:** Beim Zerfall radioaktiver Substanzen können **Alpha-, Beta- und Gamma-Strahlung** freigesetzt werden – alle drei sind **ionisierend** (können Elektronen aus Atomen lösen). **Infrarotstrahlung** ist **nicht** ionisierend und gehört nicht zu den beim Kernzerfall freigesetzten Strahlungsarten. Typische Falle: „Infrarot ist eine ionisierende Strahlungsart beim Zerfall” ist **falsch**.

---

## Zerfallsreihen

Ein radioaktiver Kern zerfällt oft nicht in ein stabiles Nuklid, sondern in ein weiteres instabiles — es bilden sich **Zerfallsreihen** bis zu einem stabilen Endnuklid. Prüfungsrelevant ist vor allem die **Uran-Radium-Reihe** (A mod 4 = 4n+2), weil sie ²²²Rn (Radon) enthält — die wichtigste natürliche Strahlenquelle:

²³⁸U → (α) → ²³⁴Th → (β⁻) → ²³⁴Pa → (β⁻) → ²³⁴U → ... → ²²⁶Ra → (α) → **²²²Rn** → (α) → ²¹⁸Po → ... → ²⁰⁶Pb (stabil).

Daneben existieren die Thorium-Reihe (²³²Th → ²⁰⁸Pb), die Actinium-Reihe (²³⁵U → ²⁰⁷Pb) und die ausgestorbene Neptunium-Reihe (²³⁷Np → ²⁰⁹Bi).

> **Merke:** Die Uran-Radium-Reihe (²³⁸U → ... → ²²²Rn → ... → ²⁰⁶Pb) ist klinisch am wichtigsten wegen Radon. Massenzahl ändert sich nur bei α-Zerfall (−4), nicht bei β-Zerfall.

---

## Kernspaltung und Massendefekt

**Kernspaltung (z. B. Uran):** Bei der **Kernspaltung** zur Energiegewinnung werden **Neutronen** benötigt – ein thermisches Neutron trifft auf einen schweren Kern (z. B. ²³⁵U) und löst die Spaltung aus:

> ²³⁵₉₂U + ¹₀n → ²³⁶₉₂U* → Spaltfragmente + 2–3 Neutronen + ~200 MeV

Die freigesetzten Neutronen können weitere ²³⁵U-Kerne spalten → **Kettenreaktion** (kontrolliert im Reaktor, unkontrolliert in der Atombombe). Nicht Alpha-, Beta-Teilchen, Protonen oder Neutrinos; **Neutronen** lösen die Kettenreaktion aus.

**Massendefekt und Bindungsenergie:** Die Masse eines Atomkerns ist kleiner als die Summe seiner Einzelteile — die „fehlende" Masse wurde in Bindungsenergie umgewandelt (E = mc²). Wer den Kern in seine Einzelteile zerlegen will, muss genau diese Energie aufbringen. Diese Massendifferenz (Massendefekt Δm) entspricht der **Bindungsenergie** des Kerns nach Einstein:

> **E_B = Δm · c²**

Beispiel: ⁴He-Kern: m(2p + 2n) = 2 × 1,00728 u + 2 × 1,00866 u = 4,03188 u. Tatsächliche Kernmasse: 4,00151 u. Δm = 0,03037 u = 0,03037 × 931,5 MeV/u = 28,3 MeV. Bindungsenergie pro Nukleon: 28,3/4 = 7,07 MeV/Nukleon.

Die **Bindungsenergie pro Nukleon** erreicht ein Maximum bei ⁵⁶Fe (8,79 MeV/Nukleon). Leichtere Kerne gewinnen Energie durch **Fusion** (Sonne: 4¹H → ⁴He), schwerere durch **Spaltung** (²³⁵U → Fragmente). Beide Prozesse bewegen sich auf dem Maximum der Bindungsenergiekurve zu.

> **Merke:** Massendefekt: Kernmasse < Summe der Nukleonenmassen. Die Differenz ist als Bindungsenergie E_B = Δm·c² „gespeichert”. Fusion und Spaltung setzen Energie frei, weil die Produkte eine höhere Bindungsenergie pro Nukleon haben als die Ausgangskerne.



## Exponentieller Zerfall und Halbwertszeit


Radioaktiver Zerfall ist ein **statistischer Prozess**. Jeder einzelne Kern hat in jedem Zeitintervall die gleiche Zerfallswahrscheinlichkeit, unabhängig von seinem Alter, seiner Umgebung (Temperatur, Druck, chemische Bindung) und der Anwesenheit anderer Kerne. Die Anzahl N(t) noch nicht zerfallener Kerne nimmt exponentiell ab:

> **N(t) = N₀ · e^(−λt)**

λ = Zerfallskonstante [s⁻¹], charakteristisch für jedes Nuklid. Sie gibt die Zerfallswahrscheinlichkeit pro Zeiteinheit an.

**Herleitung:** Die Änderungsrate dN/dt ist proportional zur Anzahl der vorhandenen Kerne: dN/dt = −λ·N. Lösung dieser Differentialgleichung: N(t) = N₀·e^(−λt). Das Minuszeichen drückt aus, dass N mit der Zeit abnimmt.

Die **Halbwertszeit** T½ ist die Zeit, nach der die Hälfte der Kerne zerfallen ist:

> **T½ = ln 2 / λ = 0,693 / λ**

**Herleitung:** N(T½) = N₀/2 → N₀·e^(−λ·T½) = N₀/2 → e^(−λ·T½) = 1/2 → −λ·T½ = −ln 2 → T½ = ln 2/λ.

Nach n Halbwertszeiten gilt die praktische Formel: **N(t) = N₀ · (1/2)ⁿ** mit n = t/T½. Diese Formel ist für MedAT-Aufgaben besonders nützlich, da n oft ganzzahlig ist.

**Tabelle: Restanteil nach n Halbwertszeiten**

| n (HWZ) | Restanteil | Prozent |
|---------|-----------|---------|
| 0 | 1 | 100 % |
| 1 | 1/2 | 50 % |
| 2 | 1/4 | 25 % |
| 3 | 1/8 | 12,5 % |
| 4 | 1/16 | 6,25 % |
| 5 | 1/32 | 3,125 % |
| 10 | 1/1024 | ≈ 0,1 % |

Die **mittlere Lebensdauer** τ = 1/λ = T½/ln 2 ≈ 1,443 · T½ ist die durchschnittliche Zeit, die ein Kern bis zu seinem Zerfall existiert. Sie ist etwas länger als T½, da einige Kerne sehr spät zerfallen.

> **Merke:** T½ = 0,693/λ. Nach n Halbwertszeiten: N = N₀·(½)ⁿ. Faustregel: Nach 10 HWZ sind < 0,1 % übrig. Nach 7 HWZ ≈ 1 %. Radioaktiver Zerfall ist unabhängig von Temperatur, Druck und chemischer Umgebung!

> 💡 **Prüfungstipp:** Klassische MedAT-Aufgabe: „Nach 3 HWZ?" → (½)³ = 1/8 = 12,5 % übrig. Nach 4 HWZ → 6,25 %. Die Rechnung (½)ⁿ muss sitzen!

**Wichtige Halbwertszeiten für MedAT:**

| Nuklid | T½ | Zerfallsart | Medizinische Anwendung |
|--------|-----|------------|----------------------|
| ⁹⁹ᵐTc | 6,01 h | γ (IT) | Szintigraphie (Knochen, Herz, Lunge) |
| ¹³¹I | 8,02 d | β⁻ + γ | Schilddrüsentherapie |
| ¹⁸F | 109,77 min | β⁺ | PET (FDG) |
| ⁶⁰Co | 5,27 a | β⁻ + γ | Strahlentherapie |
| ¹⁴C | 5730 a | β⁻ | Radiokarbon-Datierung |
| ²²⁶Ra | 1600 a | α | Historisch: Brachytherapie |
| ²³⁸U | 4,47 × 10⁹ a | α | Uran-Blei-Datierung |
| ²²²Rn | 3,82 d | α | Natürliche Strahlenbelastung |

---

## Aktivität

Die **Aktivität** A gibt die Anzahl der Zerfälle pro Sekunde an:

> **A = λ · N = (ln 2 / T½) · N [Bq]**

1 Becquerel (Bq) = 1 Zerfall/s. Frühere Einheit: 1 Curie (Ci) = 3,7 × 10¹⁰ Bq (= Aktivität von 1 g ²²⁶Ra — daher der historische Name).

Da N(t) = N₀ · e^(−λt), gilt auch **A(t) = A₀ · e^(−λt)** — die Aktivität nimmt mit derselben Halbwertszeit ab wie die Teilchenzahl.

**Zusammenhang Aktivität – Masse:** Die Anzahl der Atome in einer Masse m eines Nuklids mit Massenzahl A ist: N = (m/M) · N_A = (m · N_A) / A, wobei N_A = 6,022 × 10²³ mol⁻¹ (Avogadro-Zahl) und M = A g/mol (molare Masse). Damit: A = λ · N = (ln 2 / T½) · (m · N_A / A_r).

**Spezifische Aktivität:** Aktivität pro Masse [Bq/g]. Kurzlebige Nuklide haben eine hohe spezifische Aktivität (großes λ). ⁹⁹ᵐTc: A_spez ≈ 1,95 × 10¹⁷ Bq/g — schon Nanogramm-Mengen haben GBq-Aktivitäten!

> **Merke:** A = λ·N in Becquerel. Kurzlebige Nuklide (kleines T½ → großes λ) haben bei gleicher Teilchenzahl eine höhere Aktivität. 1 Ci = 3,7 × 10¹⁰ Bq.

---

## Dosimetrie – Gray, Sievert und Strahlungsmessung

Warum verschiedene Strahlungsarten unterschiedlich gefährlich sind, müssen wir das **Dosissystem** der Strahlenschutzphysik kennen. Es unterscheidet drei hierarchische Dosisgrößen:

### 1. Energiedosis D [Gray, Gy]

Die Energiedosis misst die **absorbierte Energie pro Masse**:

> **D = ΔE / Δm [Gray, 1 Gy = 1 J/kg]**

Die Energiedosis ist eine rein physikalische Größe — sie sagt nichts über die biologische Wirkung aus. Alte Einheit: 1 rad = 0,01 Gy (heute veraltet, aber in älterer Literatur noch anzutreffen).

### 2. Äquivalentdosis H [Sievert, Sv]

Die Äquivalentdosis berücksichtigt die **unterschiedliche biologische Wirksamkeit** verschiedener Strahlenarten:

> **H = D × w_R [Sievert, Sv]**

w_R = **Strahlungs-Wichtungsfaktor** (radiation weighting factor). Er korrigiert für die unterschiedliche Ionisierungsdichte (LET = linearer Energietransfer) verschiedener Strahlenarten.

| Strahlenart | w_R | Begründung |
|-------------|-----|-----------|
| Röntgen- und γ-Strahlung | 1 | niedriger LET, gleichmäßige Ionisation |
| β-Strahlung (β⁻ und β⁺) | 1 | niedriger LET |
| Neutronen (< 10 keV) | 5 | mittlerer LET nach Kernreaktionen |
| Neutronen (100 keV–2 MeV) | 20 | hoher LET der Rückstoßprotonen |
| Neutronen (> 20 MeV) | 5 | abnehmender LET |
| Protonen (> 2 MeV) | 2 | mittlerer LET |
| α-Teilchen, schwere Ionen | **20** | **sehr hoher LET → clustered DNA damage** |

Alte Einheit: 1 rem = 0,01 Sv.

**Rechenbeispiel:** Eine Person wird mit 5 mGy α-Strahlung und 10 mGy γ-Strahlung bestrahlt.
- H_α = 5 mGy × 20 = 100 mSv
- H_γ = 10 mGy × 1 = 10 mSv
- Gesamte Äquivalentdosis: 110 mSv — obwohl die α-Dosis physikalisch nur halb so groß war, dominiert sie die biologische Wirkung!

### 3. Effektive Dosis E [Sievert, Sv]

Die effektive Dosis berücksichtigt zusätzlich, dass verschiedene Organe unterschiedlich strahlenempfindlich sind:

> **E = Σ (w_T × H_T) [Sv]**

w_T = **Gewebewichtungsfaktor** (tissue weighting factor). Die Summe aller w_T = 1.

| Organ/Gewebe | w_T | Begründung |
|-------------|-----|-----------|
| Knochenmark (rot) | 0,12 | Hämatopoese, hohe Teilungsrate |
| Dickdarm | 0,12 | Schnell proliferierendes Epithel |
| Lunge | 0,12 | Große Oberfläche, Radon-Inhalation |
| Magen | 0,12 | Schnell proliferierendes Epithel |
| Brust | 0,12 | Hohes Strahlen-Karzinomrisiko |
| Gonaden | 0,08 | Keimzellen, genetisches Risiko |
| Schilddrüse | 0,04 | Radiojod-Empfindlichkeit |
| Haut | 0,01 | Niedrigere Empfindlichkeit |

> **Merke:** Drei Dosisgrößen: **Gray (Gy)** = absorbierte Energie (J/kg), physikalisch. **Sievert (Sv)** = Gy × w_R, biologisch gewichtet. **Effektive Dosis** = Σ(w_T × H_T), organgewichtet. Für γ und β gilt: 1 Gy = 1 Sv. Für α: **1 Gy = 20 Sv!**

### Strahlungsmessgeräte

| Detektor | Messprinzip | Einsatz |
|----------|------------|---------|
| **Geiger-Müller-Zähler** | Gasentladung durch ionisierende Strahlung | Kontaminationskontrolle |
| **Szintillationszähler** | Lichtblitze in NaI(Tl)-Kristall → Photomultiplier | Gammaspektroskopie, Schilddrüse |
| **Filmdosimeter** | Schwärzung von Filmemulsion ∝ Dosis | Personendosimetrie (monatlich) |
| **Thermolumineszenzdosimeter (TLD)** | Gespeicherte Energie in LiF → Licht bei Erhitzung | Personendosimetrie |
| **Ionisationskammer** | Ionisationsstrom in Gas ∝ Dosisleistung | Referenzdosimetrie, Therapie |

## Rechenbeispiele

**Beispiel 1 — Halbwertszeit und Restaktivität (⁹⁹ᵐTc):**
T½ = 6 h. Patient erhält A₀ = 740 MBq um 8:00 Uhr. Aktivität um 20:00 (12 h später = 2 Halbwertszeiten):
A = A₀ × (½)² = 740 × 0,25 = 185 MBq. Nach 24 h (4 HWZ): A = 740 × (½)⁴ = 740/16 = 46,25 MBq.

**Beispiel 2 — Zerfallskonstante aus Halbwertszeit (¹³¹I):**
T½ = 8,02 Tage = 8,02 × 24 × 3600 s = 692 928 s.
λ = ln2/T½ = 0,693/692 928 = 1,0 × 10⁻⁶ s⁻¹. Aktivität einer Probe mit N = 10¹⁵ Atomen: A = λ·N = 1,0 × 10⁻⁶ × 10¹⁵ = 10⁹ Bq = 1 GBq ≈ 27 mCi.

**Beispiel 3 — Äquivalentdosis (α vs. γ):**
Absorbierte Dosis: D = 0,5 mGy. Für γ-Strahlung (w_R = 1): H = 0,5 mSv. Für α-Strahlung (w_R = 20): H = 0,5 × 20 = 10 mSv — 20-fach höhere biologische Wirksamkeit! Deshalb ist die interne Kontamination mit α-Strahlern (Radon, Polonium) besonders gefährlich.

**Beispiel 4 — C-14-Datierung (Radiokarbon-Methode):**
Lebende Organismen nehmen ¹⁴C auf (durch CO₂ aus der Atmosphäre); das Verhältnis ¹⁴C/¹²C ≈ 1,2 × 10⁻¹² bleibt konstant, solange der Organismus lebt. Nach dem Tod hört die Aufnahme auf, und ¹⁴C zerfällt mit T½ = 5730 Jahre. Eine Knochenprobe zeigt nur 25 % der normalen ¹⁴C-Aktivität:
Schritt 1: A/A₀ = 0,25 = (½)ⁿ → n = 2 Halbwertszeiten.
Schritt 2: Alter = n × T½ = 2 × 5730 = 11 460 Jahre.
Alternativ mit Exponentialformel: A = A₀·e^(−λt) → t = −ln(A/A₀)/λ = −ln(0,25)/(0,693/5730) = 1,386/1,21×10⁻⁴ = 11 460 Jahre ✓.

**Beispiel 5 — ¹³¹I-Therapie: Wann darf der Patient entlassen werden?**
Aktivität bei Gabe: A₀ = 3700 MBq (= 100 mCi). Entlassung bei A ≤ 250 MBq (österr. Strahlenschutzverordnung).
A(t) = A₀ · (½)^(t/T½) → 250 = 3700 · (½)^(t/8,02d) → (½)^(t/8,02) = 250/3700 = 0,0676.
log(0,0676)/log(0,5) = 3,89 → t = 3,89 × 8,02 d ≈ 31,2 Tage.
In der Praxis: Patienten werden ca. 2–5 Tage stationär gehalten (effektive HWZ kürzer als physikalische HWZ wegen biologischer Ausscheidung: T_eff = T_phys × T_bio / (T_phys + T_bio)).

**Beispiel 6 — Effektive Halbwertszeit:**
¹³¹I: T_phys = 8,02 d; biologische HWZ der Schilddrüse: T_bio = 80 d.
T_eff = (T_phys × T_bio)/(T_phys + T_bio) = (8,02 × 80)/(8,02 + 80) = 641,6/88,02 = **7,29 d** — kürzer als T_phys!
Für ⁹⁹ᵐTc: T_phys = 6 h; T_bio ≈ 24 h → T_eff = (6 × 24)/(6 + 24) = 144/30 = 4,8 h.

> **Merke:** Effektive Halbwertszeit: 1/T_eff = 1/T_phys + 1/T_bio. Die effektive HWZ ist immer **kürzer** als die kürzere der beiden Einzel-HWZ. Für Strahlenschutz-Berechnungen am Patienten ist T_eff relevant, nicht T_phys allein.

**Beispiel 7 — Aktivitätsberechnung aus Masse:**
Wie viel Aktivität haben 1 μg ¹³¹I? M(¹³¹I) = 131 g/mol; T½ = 8,02 d = 692 928 s.
N = m/M × N_A = (10⁻⁶ g / 131 g/mol) × 6,022 × 10²³ = 4,597 × 10¹⁵ Atome.
λ = ln2/T½ = 0,693/692 928 s = 1,0 × 10⁻⁶ s⁻¹.
A = λ × N = 1,0 × 10⁻⁶ × 4,597 × 10¹⁵ = 4,6 × 10⁹ Bq = **4,6 GBq ≈ 124 mCi**.
Das bedeutet: Schon 1 Mikrogramm ¹³¹I hat eine therapeutisch relevante Aktivität!`,
      diagram: "radioactive-decay",
      lernziele: [
        "Die vier Strahlungsarten (α, β⁻, β⁺, γ) hinsichtlich Teilchenart, Ladung, Reichweite, LET und Abschirmung beschreiben.",
        "Das Zerfallsgesetz N(t) = N₀·e^(−λt) und die Halbwertszeit T½ = ln2/λ herleiten und anwenden.",
        "Aktivität A = λ·N in Becquerel berechnen und die effektive Halbwertszeit T_eff bestimmen.",
        "Die Kerngleichungen für α-, β⁻- und β⁺-Zerfall aufstellen und A/Z-Änderungen angeben.",
        "Energiedosis (Gray), Äquivalentdosis (Sievert) und effektive Dosis unterscheiden und Strahlungs-Wichtungsfaktoren kennen.",
        "Medizinisch relevante Isotope (⁹⁹ᵐTc, ¹³¹I, ¹⁸F, ⁶⁰Co) und ihre Anwendungen nennen.",
        "Das Konzept des Massendefekts und der Bindungsenergie (E = Δm·c²) erklären.",
      ],
      sections: [
        {
          heading: "Die Strahlungsarten im Detail",
          text: 'Alpha-Zerfall: He-4-Kern, +2e, Z−2, A−4, Tunneleffekt, hoher LET. Beispiel: ²³⁸U → ²³⁴Th + ⁴He. Beta-minus: Elektron + Antineutrino, Z+1, A gleich, kontinuierliches Spektrum. Beispiel: ¹⁴C → ¹⁴N. Beta-plus: Positron + Neutrino, Z−1, A gleich, Annihilation → 2×511 keV. Beispiel: ¹⁸F → ¹⁸O. Gamma: Photon, Z und A unverändert, isomerer Übergang. Beispiel: ⁹⁹ᵐTc → ⁹⁹Tc + γ. Merkregel Abschirmung: "PapierAluminiumBlei" (PAB) für α, β, γ.',
          merksatz:
            "α: Z−2, A−4, Papier stoppt; β⁻: Z+1, A gleich, Alu stoppt; β⁺: Z−1, A gleich, Annihilation→PET; γ: Z/A unverändert, Blei nötig.",
        },
        {
          heading: "Exponentieller Zerfall, Aktivität und Halbwertszeit",
          text: "N(t) = N₀·e^(−λt) ist das fundamentale Zerfallsgesetz. T½ = ln2/λ. Praktisch: N = N₀·(½)ⁿ mit n = t/T½. Aktivität A = λ·N [Bq = 1/s]. 1 Ci = 3,7×10¹⁰ Bq. Effektive HWZ: 1/T_eff = 1/T_phys + 1/T_bio — berücksichtigt biologische Ausscheidung. Spezifische Aktivität: kurzlebige Nuklide (großes λ) → hohe Aktivität pro Gramm.",
          merksatz:
            "T½ = 0,693/λ; N = N₀·(½)ⁿ; A = λ·N in Bq; T_eff immer kürzer als kürzere Einzel-HWZ.",
        },
        {
          heading: "Dosimetrie: Gray, Sievert, effektive Dosis",
          text: "Energiedosis D [Gy = J/kg]: rein physikalisch. Äquivalentdosis H = D × w_R [Sv]: biologisch gewichtet. Effektive Dosis E = Σ(w_T × H_T) [Sv]: organgewichtet. w_R-Werte: α = 20, β/γ = 1, Neutronen = 5–20. w_T-Werte: Knochenmark/Lunge/Brust/Dickdarm/Magen je 0,12; Gonaden 0,08; Schilddrüse 0,04. Messgeräte: Geiger-Müller (Kontamination), Szintillator (Spektroskopie), Film-/TLD (Personendosimetrie).",
          merksatz:
            "Gy = J/kg (physikalisch); Sv = Gy × w_R (biologisch); α: w_R = 20 → 1 Gy α = 20 Sv! Effektive Dosis berücksichtigt Organempfindlichkeit (w_T).",
        },
        {
          heading: "Medizinische Radionuklide und klinische Anwendung",
          text: "⁹⁹ᵐTc: reiner γ-Strahler, T½=6h, aus ⁹⁹Mo-Generator, Szintigraphie (Knochen/Herz/Lunge/Niere). ¹³¹I: β⁻+γ, T½=8d, Radiojodtherapie (Schilddrüse), Reichweite β im Gewebe ~0,4 mm. ¹⁸F: β⁺, T½=110min, PET-FDG (Tumorstaging, Warburg-Effekt). ⁶⁰Co: β⁻+γ(1,17+1,33 MeV), T½=5,27a, Strahlentherapie (Teletherapie). ¹⁴C: β⁻, T½=5730a, Radiokarbon-Datierung.",
          merksatz:
            "⁹⁹ᵐTc: γ, 6h, Szintigraphie. ¹³¹I: β⁻+γ, 8d, Schilddrüse. ¹⁸F: β⁺, 110min, PET. ⁶⁰Co: γ, 5,27a, Strahlentherapie.",
        },
        {
          heading: "Massendefekt, Bindungsenergie und Kernreaktionen",
          text: "Massendefekt Δm: Kernmasse < Summe der Nukleonenmassen. Bindungsenergie E_B = Δm·c² (1 u = 931,5 MeV/c²). Maximale Bindungsenergie/Nukleon bei ⁵⁶Fe (8,79 MeV). Leichte Kerne → Fusion freisetzt Energie (Sonne). Schwere Kerne → Spaltung freisetzt Energie (Kernkraftwerk). Kernspaltung: ²³⁵U + n → Fragmente + 2–3 Neutronen + ~200 MeV; ausgelöst durch thermische Neutronen.",
          merksatz:
            "E_B = Δm·c²; Maximum bei ⁵⁶Fe. Fusion (leichte Kerne) und Spaltung (schwere Kerne) setzen Energie frei. Kettenreaktion durch Neutronen.",
        },
      ],
      merksätze: [
        "Abschirmung merken: PAB — Papier (α), Aluminium (β), Blei (γ); Neutronen: Wasser/Paraffin (nicht Blei!).",
        "α innerlich hochgefährlich (w_R = 20, hoher LET), äußerlich harmlos. β⁺-Annihilation → 2×511 keV → PET.",
        "Halbwertszeit-Schnellrechnung: N = N₀·(½)ⁿ mit n = t/T½. Nach 10 HWZ < 0,1 % übrig.",
        "Effektive HWZ: 1/T_eff = 1/T_phys + 1/T_bio — immer kürzer als die kürzere Einzel-HWZ.",
        "Für α: 1 Gy = 20 Sv! Für β/γ: 1 Gy = 1 Sv. Effektive Dosis berücksichtigt zusätzlich Organempfindlichkeit (w_T).",
        "Massendefekt: Die fehlende Kernmasse = Bindungsenergie (E = Δm·c²). Maximum bei ⁵⁶Fe → Fusion (leicht) und Spaltung (schwer) setzen Energie frei.",
        "Uran-Radium-Reihe (²³⁸U → ²²²Rn → ²⁰⁶Pb): Radon = Nr. 2 Lungenkrebsursache nach Rauchen.",
      ],
      altfrage: {
        text: "Ein Radionuklid hat eine Halbwertszeit von 8 Tagen. Welcher Anteil der ursprünglichen Aktivität ist nach 24 Tagen noch vorhanden?",
        options: [
          { id: "a", text: "1/2" },
          { id: "b", text: "1/4" },
          { id: "c", text: "1/8" },
          { id: "d", text: "1/16" },
          { id: "e", text: "1/3" },
        ],
        correctOptionId: "c",
        explanation:
          "24 Tage / 8 Tage = 3 Halbwertszeiten. Nach 3 HWZ: (1/2)³ = 1/8 der Ausgangsaktivität. Beispiel: ¹³¹I (T½ = 8 d) in der Schilddrüsentherapie.",
      },
      klinischerBezug:
        "⁹⁹ᵐTc-Szintigraphie (Knochen, Herz, Lunge, Niere): T½=6h minimiert Strahlendosis. ¹³¹I-Therapie bei Schilddrüsenkarzinom. ¹⁸F-FDG-PET: Tumordiagnostik und Therapiekontrolle via erhöhtem Glukosestoffwechsel.",
      selfTest: [
        {
          question:
            "Ein Radionuklid hat eine Halbwertszeit von 6 Stunden. Eine Probe hat zu Beginn eine Aktivität von 1600 Bq. Welche Aktivität hat sie nach 24 Stunden?",
          options: ["200 Bq", "100 Bq", "50 Bq", "25 Bq", "400 Bq"],
          correctIndex: 1,
          explanation:
            "24 Stunden / 6 Stunden = 4 Halbwertszeiten. Nach jeder Halbwertszeit halbiert sich die Aktivität: 1600 → 800 → 400 → 200 → 100 Bq. Allgemein: A(t) = A₀ · (1/2)ⁿ = 1600 · (1/2)⁴ = 1600 · 1/16 = 100 Bq. ⁹⁹ᵐTc hat eine Halbwertszeit von 6 Stunden – nach 24 Stunden sind nur noch 6,25 % der ursprünglichen Aktivität vorhanden, was die relativ geringe Strahlenbelastung bei nuklearmedizinischen Untersuchungen erklärt.",
          hints: [
            "Berechne zuerst n = t/T½ = 24h/6h = 4 Halbwertszeiten.",
            "Nach n Halbwertszeiten: A = A₀ · (½)ⁿ.",
          ],
          tags: ["radioaktivität", "halbwertszeit", "aktivitätsabfall"],
          difficulty: 1,
        },
        {
          question: "Wie ändert sich ein Atomkern beim Beta-minus-Zerfall?",
          options: [
            "Ordnungszahl Z sinkt um 1, Massenzahl A sinkt um 1",
            "Ordnungszahl Z steigt um 1, Massenzahl A bleibt gleich",
            "Ordnungszahl Z sinkt um 2, Massenzahl A sinkt um 4",
            "Ordnungszahl Z bleibt gleich, Massenzahl A steigt um 1",
            "Ordnungszahl Z steigt um 2, Massenzahl A steigt um 4",
          ],
          correctIndex: 1,
          explanation:
            "Beim β⁻-Zerfall wandelt sich im Kern ein Neutron in ein Proton um: n → p + e⁻ + ν̄ₑ. Dadurch steigt die Protonenzahl (Ordnungszahl Z) um 1, während die Gesamtzahl der Nukleonen (Massenzahl A = Z + N) konstant bleibt, da ein Neutron durch ein Proton ersetzt wird. Beispiel: ¹⁴₆C → ¹⁴₇N. Im Periodensystem verschiebt sich der Tochterkern um eine Position nach rechts (höheres Z). Der α-Zerfall (Z−2, A−4) oder β⁺-Zerfall (Z−1, A gleich) verlaufen anders.",
          hints: [
            "β⁻-Zerfall: Ein Neutron wird zu einem Proton. Was passiert mit Z (Protonenzahl) und A (Nukleonenzahl)?",
            "Massenzahl A = Protonen + Neutronen. Wenn n zu p wird, ändert sich A nicht.",
          ],
          tags: ["beta-zerfall", "kernumwandlung", "ordnungszahl"],
          difficulty: 1,
        },
        {
          question:
            "Die Zerfallskonstante eines Radionuklids beträgt λ = 0,0866 h⁻¹. Wie groß ist die Halbwertszeit?",
          options: ["4 Stunden", "6 Stunden", "8 Stunden", "12 Stunden", "24 Stunden"],
          correctIndex: 2,
          explanation:
            "T½ = ln2/λ = 0,693/0,0866 h⁻¹ ≈ 8,0 Stunden. Dies entspricht der Halbwertszeit von ¹³¹I (genauer: 8,02 Tage – hier wurde ein vereinfachtes Rechenbeispiel mit Stunden gewählt). Die Umrechnung T½ = 0,693/λ ist die grundlegende Formel, die die Halbwertszeit mit der Zerfallskonstanten verknüpft. Für ⁹⁹ᵐTc (T½=6h) wäre λ = 0,693/6h = 0,1155 h⁻¹, für ¹⁸F (T½=110min ≈ 1,83h) wäre λ = 0,693/1,83h ≈ 0,379 h⁻¹.",
          hints: ["Formel: T½ = ln2/λ = 0,693/λ.", "Einheiten beachten: λ in h⁻¹ → T½ in Stunden."],
          tags: ["zerfallskonstante", "halbwertszeit", "radioaktivität"],
          difficulty: 2,
        },
        {
          question: "Warum wird ⁹⁹ᵐTc bevorzugt in der nuklearmedizinischen Diagnostik eingesetzt?",
          options: [
            "Weil es ein reiner Alpha-Strahler ist und sich gut im Gewebe verteilt",
            "Weil es eine sehr lange Halbwertszeit hat und eine einmalige Injektion für mehrere Tage reicht",
            "Weil es ein reiner Gamma-Strahler mit kurzer Halbwertszeit (6 h) ist und gut an Trägermoleküle gekoppelt werden kann",
            "Weil es natürlich im Körper vorkommt und daher keine Immunreaktion auslöst",
            "Weil es durch Röntgenstrahlung aktiviert wird und keine externe Quelle braucht",
          ],
          correctIndex: 2,
          explanation:
            '⁹⁹ᵐTc hat mehrere ideale Eigenschaften für die diagnostische Nuklearmedizin: Erstens ist es ein reiner Gamma-Strahler mit einer Gammaenergie von 140 keV – optimal für Gammakameras, keine α- oder β-Strahlung erhöht die Strahlendosis. Zweitens ist die Halbwertszeit von 6 Stunden kurz genug für eine niedrige Strahlendosis, aber lang genug für die Untersuchungsdauer. Drittens ist ⁹⁹ᵐTc aus dem ⁹⁹Mo-Generator täglich frisch verfügbar (⁹⁹Mo hat T½=66h). Viertens lässt es sich chemisch leicht an verschiedene Trägermoleküle (Phosphonate für Knochen, MIBI für Herz, MAG3 für Niere) koppeln. Das "m" steht für metastabil – isomerer Zustand des Kerns.',
          hints: [
            "Für Diagnostik: Man will sehen, nicht heilen → Strahlung sollte den Körper verlassen können (γ) und die Dosis gering sein (kurze T½).",
            '⁹⁹ᵐTc "m" = metastabil; reiner γ-Strahler; T½ = 6h → ideal für Bildgebung.',
          ],
          tags: ["technetium-99m", "nuklearmedizin", "gamma-strahler"],
          difficulty: 2,
        },
        {
          question:
            "Eine Probe von ¹³¹I hat anfangs 800 Bq. ¹³¹I hat eine Halbwertszeit von 8 Tagen. Nach wie vielen Tagen beträgt die Aktivität noch 100 Bq?",
          options: ["16 Tage", "24 Tage", "32 Tage", "40 Tage", "48 Tage"],
          correctIndex: 1,
          explanation:
            "Gesucht: Anzahl n der Halbwertszeiten, bis A = 100 Bq. 800 · (1/2)ⁿ = 100 → (1/2)ⁿ = 100/800 = 1/8 = (1/2)³ → n = 3. Kontrolle: 800 → 400 (8d) → 200 (16d) → 100 (24d). Die Zeit beträgt t = n · T½ = 3 · 8 d = 24 Tage. Dies ist klinisch relevant: Nach der ¹³¹I-Schilddrüsentherapie muss der Patient Kontaktbeschränkungen einhalten, bis die Aktivität unter einen Schwellenwert fällt.",
          hints: [
            "Stelle A = A₀·(½)ⁿ nach n um, dann t = n·T½.",
            "Wie oft muss man 800 halbieren, bis man 100 erhält? 800 → 400 → 200 → 100 (3 Schritte).",
          ],
          tags: ["jod-131", "halbwertszeit", "aktivitätsabfall"],
          difficulty: 2,
        },
        {
          question: "Was beschreibt der Massendefekt eines Atomkerns?",
          options: [
            "Die Masse des Kerns ist größer als die Summe der Massen seiner Nukleonen",
            "Die Masse des Kerns ist etwas geringer als die Summe der Massen seiner freien Nukleonen — die Differenz entspricht der Bindungsenergie",
            "Die Masse eines Protons ist geringer als die eines Neutrons",
            "Der Massenverlust eines Atoms bei hohen Geschwindigkeiten durch relativistische Effekte",
            "Die Massendifferenz zwischen einem Atom und seinem Ion nach Ionisierung",
          ],
          correctIndex: 1,
          explanation:
            "Der Massendefekt beschreibt die Tatsache, dass die Masse eines gebundenen Atomkerns etwas geringer ist als die Summe der Massen der einzelnen (freien) Nukleonen. Diese Massendifferenz Δm entspricht nach Einstein (E = Δm·c²) der Bindungsenergie des Kerns — also der Energie, die nötig wäre, um den Kern in seine einzelnen Nukleonen zu zerlegen. Beispiel: Helium-4-Kern: Δm = 0,0304 u = 28,3 MeV. Die Bindungsenergie pro Nukleon erreicht ihr Maximum bei ⁵⁶Fe (8,79 MeV/Nukleon), weshalb sowohl Kernfusion (leichte Kerne) als auch Kernspaltung (schwere Kerne) Energie freisetzen.",
          hints: [
            "Bindungsenergie = Energie, die den Kern zusammenhält. Woher kommt diese Energie laut E = mc²?",
            "Die Masse geht 'verloren', weil sie als Bindungsenergie im Kern gespeichert ist.",
          ],
          tags: ["massendefekt", "bindungsenergie", "einstein"],
          difficulty: 2,
        },
        {
          question: "Welche Strahlung wird beim radioaktiven Zerfall NICHT freigesetzt?",
          options: [
            "Alpha-Strahlung",
            "Beta-Strahlung",
            "Gamma-Strahlung",
            "Infrarotstrahlung",
            "Neutronenstrahlung (bei Kernspaltung)",
          ],
          correctIndex: 3,
          explanation:
            "Beim radioaktiven Zerfall werden Alpha- (⁴He-Kerne), Beta- (Elektronen/Positronen) und Gamma-Strahlung (hochenergetische Photonen) freigesetzt — alle drei sind ionisierend. Bei Kernspaltung werden zusätzlich Neutronen emittiert. Infrarotstrahlung hingegen ist elektromagnetische Strahlung niedriger Energie (Wärmestrahlung), sie ist NICHT ionisierend und entsteht nicht beim Kernzerfall. Dies ist eine klassische MedAT-Falle.",
          hints: [
            "Ionisierende Strahlung: Alpha, Beta, Gamma, Neutronenstrahlung. Was passt nicht dazu?",
            "Infrarotstrahlung ist Wärmestrahlung — viel zu wenig Energie, um Atome zu ionisieren.",
          ],
          tags: ["ionisierende-strahlung", "infrarot", "zerfallsarten"],
          difficulty: 1,
        },
        {
          question:
            "Die effektive Halbwertszeit von ¹³¹I in der Schilddrüse beträgt ca. 7,3 Tage (physikalische HWZ: 8,02 Tage). Wie groß ist die biologische Halbwertszeit der Schilddrüse für Jod?",
          options: ["ca. 15 Tage", "ca. 40 Tage", "ca. 80 Tage", "ca. 120 Tage", "ca. 200 Tage"],
          correctIndex: 2,
          explanation:
            "Die effektive Halbwertszeit ist: 1/T_eff = 1/T_phys + 1/T_bio. Umgestellt: 1/T_bio = 1/T_eff − 1/T_phys = 1/7,3 − 1/8,02 = 0,1370 − 0,1247 = 0,0123 d⁻¹. T_bio = 1/0,0123 ≈ 81 Tage ≈ 80 Tage. Die biologische Halbwertszeit beschreibt, wie schnell der Körper Jod auf natürlichem Weg (über Urin und Fäzes) ausscheidet. Sie ist mit ~80 Tagen deutlich länger als die physikalische HWZ, daher wird T_eff hauptsächlich durch T_phys bestimmt.",
          hints: [
            "Formel: 1/T_eff = 1/T_phys + 1/T_bio. Stelle nach T_bio um.",
            "T_eff ist immer kürzer als die kürzere der beiden Einzel-HWZ. Hier: T_eff ≈ T_phys → T_bio muss viel größer sein.",
          ],
          tags: ["effektive-halbwertszeit", "jod-131", "schilddrüse"],
          difficulty: 3,
        },
        {
          question:
            "Welche Aussagen sind richtig?\n\n1. Beim Alpha-Zerfall verringert sich die Massenzahl um 4 und die Ordnungszahl um 2.\n2. Beim Beta-minus-Zerfall steigt die Ordnungszahl um 1, die Massenzahl bleibt gleich.\n3. Gamma-Strahlung ändert weder Massen- noch Ordnungszahl des Kerns.\n4. Alpha-Strahlung hat eine höhere Reichweite in Luft als Beta-Strahlung.\n5. Die Halbwertszeit eines Radionuklids ist unabhängig von äußeren Bedingungen wie Druck und Temperatur.",
          options: ["Nur 1 und 3", "Nur 2 und 4", "Nur 1, 2, 3 und 5", "Nur 2, 3 und 4", "Alle"],
          correctIndex: 2,
          explanation:
            "Aussage 1 ist richtig (α-Zerfall: A → A−4, Z → Z−2, da ein ⁴He-Kern emittiert wird). Aussage 2 ist richtig (β⁻: Neutron → Proton + Elektron + Antineutrino, Z+1, A gleich). Aussage 3 ist richtig (γ-Strahlung ist nur Energieabgabe eines angeregten Kerns, keine Kernumwandlung). Aussage 4 ist falsch — Alpha-Strahlung hat wegen ihrer großen Masse und Ladung eine sehr kurze Reichweite in Luft (wenige cm), während Beta-Strahlung mehrere Meter weit reicht. Aussage 5 ist richtig (Kernzerfall ist ein quantenmechanischer Prozess, unabhängig von Temperatur, Druck oder chemischer Bindung). Richtig sind 1, 2, 3 und 5.",
          hints: [
            "Welche Strahlenart hat die größere Reichweite: schwere α-Teilchen oder leichte β-Teilchen?",
            "Alpha-Teilchen ionisieren stark, verlieren schnell Energie → kurze Reichweite.",
          ],
          tags: ["typ-k", "radioaktivität", "strahlenarten", "zerfall"],
          difficulty: 2,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK ph-7-03: Röntgenstrahlung und Strahlenwirkung
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "ph-7-03",
      title: "Röntgenstrahlung und Strahlenwirkung",
      stichworte: [
        "Röntgenröhre",
        "Bremsstrahlung",
        "Charakteristische Strahlung",
        "Schwächungsgesetz",
        "Halbwertsschichtdicke",
        "Photoelektrischer Effekt",
        "Compton-Effekt",
        "Paarbildung",
        "DNA-Doppelstrangbruch",
        "Stochastische Effekte",
        "Deterministische Effekte",
        "ALARA-Prinzip",
        "Bergonié-Tribondeau",
        "Computertomographie CT",
        "Hounsfield-Einheiten",
        "Sauerstoffeffekt OER",
      ],
      content: `Ein konventionelles Röntgenbild entsteht in Sekundenbruchteilen und zeigt Knochenbrüche, Lungenentzündungen oder verschluckte Fremdkörper. Die Physik hinter dieser Alltagstechnik reicht von der Elektronenbeschleunigung bis zur Wechselwirkung von Photonen mit Gewebe.

## Entstehung von Röntgenstrahlung

In einer **Röntgenröhre** werden Elektronen aus einer Glühkathode emittiert und durch eine Hochspannung (typisch 30–150 kV) zur Anode (meist Wolfram) beschleunigt. Beim Auftreffen auf die Anode entstehen zwei Arten von Röntgenstrahlung:

**1. Bremsstrahlung:** Die Elektronen werden im Coulomb-Feld der Atome abgebremst. Die dabei abgegebene kinetische Energie wird als Photon emittiert. Es entsteht ein kontinuierliches Spektrum mit einer minimalen Wellenlänge λ_min = hc/(e·U), entsprechend der maximalen Photonenenergie E_max = e·U. Mit U = 100 kV ergibt sich E_max = 100 keV.



**2. Charakteristische Strahlung:** Wenn ein eintreffendes Elektron ein kernnahes Elektron aus dem Wolframatom schlägt (K-Schale), fällt ein Elektron von einer äußeren Schale (L, M) in die entstehende Lücke und emittiert dabei ein Photon mit einer für Wolfram spezifischen Energie (diskrete Linien: Kα ≈ 59 keV, Kβ ≈ 67 keV für Wolfram). Diese Linien überlagern das Bremsspektrum.

> **Merke:** Bremsstrahlung = kontinuierliches Spektrum (abhängig von Beschleunigungsspannung). Charakteristische Strahlung = diskrete Linien (abhängig vom Anodenmaterial). Kurzregel: λ_min [pm] ≈ 1240/U [kV].

**Effizienz der Röntgenerzeugung:** Nur ca. 1 % der kinetischen Energie der Elektronen wird in Röntgenstrahlung umgewandelt — die restlichen 99 % werden als Wärme an die Anode abgegeben. Deshalb benötigt die Anode intensive Kühlung (Drehanode mit ≈ 3000 U/min, Ölbad).

**Steuerung der Bildqualität:**
- **Röhrenspannung U (kV):** Bestimmt die maximale Photonenenergie und damit die Durchdringungsfähigkeit (Härte). Höhere Spannung → härtere Strahlung → weniger Kontrast, aber geringere Dosis.
- **Röhrenstrom I (mA):** Bestimmt die Anzahl der Elektronen pro Zeiteinheit und damit die Strahlungsintensität (Menge). Höherer Strom → mehr Photonen → besseres Signal-Rausch-Verhältnis, aber höhere Dosis.
- **Filterung (Al, Cu):** Absorbiert niederenergetische ("weiche") Photonen, die nicht zum Bild beitragen, aber die Hautdosis erhöhen → Aufhärtung des Strahls. Die Filterung ist eine zentrale ALARA-Maßnahme: Aluminiumfilter (typisch 2,5 mm Al) entfernen bevorzugt Photonen unter ~30 keV, die im Gewebe vollständig absorbiert werden und nur Dosis, aber keinen diagnostischen Informationsgewinn liefern.

## Computertomographie (CT) — Prinzip

Die CT nutzt Röntgenstrahlung, um Querschnittsbilder (Schnittbilder) des Körpers zu erzeugen. Eine Röntgenröhre rotiert um den Patienten und sendet Strahlung durch den Körper. Gegenüberliegende Detektoren messen die transmittierte Intensität aus vielen Winkeln. Aus diesen Projektionsdaten berechnet ein Computer mittels **Rückprojektion** oder **iterativer Rekonstruktion** ein Querschnittsbild.

**CT-Zahlen (Hounsfield-Einheiten, HU):** Jedes Pixel erhält einen Wert proportional zum linearen Schwächungskoeffizienten μ des Gewebes:
> HU = 1000 × (μ_Gewebe − μ_Wasser) / μ_Wasser

| Gewebe | HU-Wert |
|--------|---------|
| Luft | −1000 |
| Fett | −100 bis −50 |
| Wasser | 0 |
| Weichgewebe | +20 bis +80 |
| Knochen | +200 bis +3000 |
| Metall | > +3000 |

> **Merke:** CT = viele Röntgenaufnahmen aus verschiedenen Winkeln → computerberechnetes Schnittbild. HU-Skala: Wasser = 0, Luft = −1000, Knochen = +200 bis +3000. Typische Dosis: CT Abdomen ~10 mSv.

{{DIAGRAM:radiation-penetration}}

## Röntgenabsorption im Gewebe

Röntgenphotonen werden durch drei Wechselwirkungen geschwächt:
- **Photoelektrischer Effekt** (dominiert bei niedrigen Energien < 100 keV, Abhängigkeit ∝ Z⁴/E³): Photon überträgt gesamte Energie auf Hüllenelektron → Ion + freies Elektron + charakteristische Strahlung. Verantwortlich für den hohen Kontrast zwischen Knochen und Weichgewebe.
- **Compton-Effekt** (dominiert bei mittleren Energien, 100 keV–10 MeV): Ein Röntgenphoton prallt wie eine Billardkugel auf ein Elektron — es gibt dabei Energie ab und wird langwelliger. Je größer der Streuwinkel, desto mehr Energie verliert es. Das Photon wird an einem (quasi-)freien Elektron gestreut. Die Wellenlängenverschiebung beträgt Δλ = (h/mₑc)(1−cosθ), maximal 0,00486 nm bei 180°-Streuung.
- **Paarbildung** (erst ab 1,02 MeV, da Ruheenergie von e⁻+e⁺ = 2×0,511 MeV): Photon erzeugt Elektron-Positron-Paar im Coulomb-Feld eines Kerns. Relevant in der Strahlentherapie (MeV-Bereich).

> **Merke:** Photoeffekt (Z⁴-Abhängigkeit) → Kontrast im Röntgenbild. Compton-Effekt → dominiert bei diagnostischen CT-Energien. Paarbildung → nur in Strahlentherapie relevant (E > 1,02 MeV).

Die **Schwächung** eines monoenergetischen Röntgenstrahls folgt dem exponentiellen Gesetz:

> **I(x) = I₀ · e^(−μx)**

μ = linearer Schwächungskoeffizient [cm⁻¹], abhängig von Photonenenergie und Material. Dichtes Material (hohe Ordnungszahl, hohe Dichte) → großes μ → starke Abschwächung. Knochen (Ca, Z=20) absorbiert mehr als Weichgewebe; Blei (Z=82) ist optimales Abschirmmaterial.

Die **Halbwertsschichtdicke** (HVL = Half Value Layer) ist die Materialdicke, die die Intensität auf die Hälfte reduziert: HVL = ln2/μ.

{{DIAGRAM:em-spectrum}}

## Biologische Strahlenwirkung

**Direkte Wirkung:** Ionisierende Strahlung trifft direkt auf DNA-Moleküle → Einzel- oder Doppelstrangbrüche, Basenmodifikationen, Vernetzungen.

**Indirekte Wirkung (dominant, ≈70 %):** Strahlung ionisiert Wasser → Bildung freier Radikale (OH•, H•, e_aq). Diese reaktiven Spezies greifen dann die DNA an.

**DNA-Schäden nach Schweregrad:**
- **Basenmodifikationen:** Oxidierte oder desaminierte Basen; meist korrekt reparierbar durch Basenexzisionsreparatur (BER)
- **Einzelstrangbrüche (SSB):** Ein Strang unterbrochen; Gegenstrang als Matrize → fehlerfreie Reparatur möglich
- **Doppelstrangbrüche (DSB):** Beide Stränge gebrochen — **kritischste Läsion!** Reparatur durch homologe Rekombination (HR, fehlerfrei, nur in S/G2-Phase) oder nicht-homologe Endverknüpfung (NHEJ, fehleranfällig → Deletionen, Translokationen)
- **DNA-Protein-Crosslinks und Clusterläsionen:** Besonders bei Strahlung mit hohem LET (α-Strahlung) → mehrere Schäden auf engem Raum → kaum reparierbar
- Bei hohen Dosen: Zelluntergang (Apoptose, Nekrose), bei mittleren: genomische Instabilität → Karzinogenese

**Sauerstoffeffekt:** Zellen sind bei Anwesenheit von Sauerstoff ca. 2,5–3× strahlenempfindlicher als unter Hypoxie. Der OER (Oxygen Enhancement Ratio) beträgt für Photonen ~2,5–3,0. Sauerstoff „fixiert" DNA-Schäden durch Radikale: Ein Radikal, das in Anwesenheit von O₂ entsteht, wird chemisch stabilisiert (Peroxidbildung) und kann nicht mehr enzymatisch repariert werden. Deshalb sind gut durchblutete Tumore strahlensensitiver, während hypoxische Tumoranteile strahlenresistenter sind → Fraktionierung der Strahlentherapie (Reoxygenierung zwischen den Fraktionen).

**Strahlenempfindlichkeit** (Bergonié-Tribondeau-Gesetz, 1906): Zellen sind umso strahlenempfindlicher, je höher ihre Mitoserate und je geringer ihre Differenzierung. Reihenfolge (abnehmend):

| Empfindlichkeit | Zelltyp | Typische D₅₀ |
|----------------|---------|-------------|
| Sehr hoch | Lymphozyten | 0,5–1 Gy |
| Hoch | Knochenmarksstammzellen | 1–2 Gy |
| Mittel | Darmepithel, Gonaden | 3–5 Gy |
| Niedrig | Muskelzellen | > 10 Gy |
| Sehr niedrig | Nervenzellen | > 20 Gy |

**Strahlenwirkungstypen — ein fundamentaler Unterschied (MedAT-Klassiker!):**

**Stochastische Effekte:**
- **Kein Schwellenwert** — jede noch so kleine Dosis erhöht das Risiko (lineares Modell ohne Schwelle, LNT)
- **Wahrscheinlichkeit** steigt mit der Dosis, nicht die Schwere
- Beispiele: Krebsinduktion (Latenzzeit: Jahre bis Jahrzehnte), Erbgutveränderungen (Keimzellmutationen)
- Risikoabschätzung: ca. 5 % pro Sievert zusätzliches Lebenszeitkrebsrisiko (ICRP-Schätzung)

**Deterministische (nicht-stochastische) Effekte:**
- **Schwellendosis** muss überschritten werden, bevor der Effekt auftritt
- Über der Schwelle: **Schwere** nimmt mit der Dosis zu
- Beispiele: Hautrötung (Erythem, ab ~2 Gy), Epilation (ab ~3 Gy), Katarakt (Augenlinse, ab ~0,5 Gy), Sterilität (Gonaden, ab ~2–6 Gy), akutes Strahlensyndrom (ab ~1 Gy Ganzkörper)

| Eigenschaft | Stochastisch | Deterministisch |
|------------|-------------|-----------------|
| Schwellendosis | Keine | Ja (organtypisch) |
| Dosis-Wirkungs-Beziehung | Wahrscheinlichkeit ↑ | Schwere ↑ |
| Latenzzeit | Jahre–Jahrzehnte | Stunden–Wochen |
| Beispiele | Krebs, Mutation | Erythem, ARS, Katarakt |

> **Merke:** Stochastisch = kein Schwellenwert, Wahrscheinlichkeit steigt (Krebs!). Deterministisch = Schwellendosis, Schwere steigt (ARS, Epilation). Die Unterscheidung ist eine MedAT-Klassikerfrage!

## Strahlenschutzgrundsätze

Die drei ALARA-Prinzipien (As Low As Reasonably Achievable):
1. **Abstand:** Intensität nimmt mit 1/r² ab (Abstandsquadratgesetz) – Verdopplung des Abstands → Dosis auf ¼
2. **Zeit:** Dosis D = Dosisleistung Ḋ × Zeit t – Expositionszeit minimieren
3. **Abschirmung:** geeignetes Material zwischen Quelle und Person (Blei, Beton, Wasser)

Zusätzlich gelten die **drei Grundsätze des Strahlenschutzes** (ICRP):
1. **Rechtfertigung:** Jede Strahlenexposition muss einen Nutzen haben, der das Risiko überwiegt. Beispiel: Ein CT Abdomen bei unklarem akutem Abdomen ist gerechtfertigt; ein CT als Routine-Check-up ohne Indikation nicht.
2. **Optimierung (ALARA):** Die Exposition soll so niedrig wie vernünftigerweise erreichbar gehalten werden.
3. **Dosislimitation:** Grenzwerte dürfen nicht überschritten werden (Berufsexposition ≤ 20 mSv/Jahr, Bevölkerung ≤ 1 mSv/Jahr zusätzlich zur natürlichen Strahlung).

> **Merke:** Drei ICRP-Grundsätze: Rechtfertigung (Indikation prüfen!), Optimierung (ALARA), Dosislimitation. In Österreich geregelt durch das Strahlenschutzgesetz (StrSchG) und die Strahlenschutzverordnung (StrSchV).

Typische effektive Dosen:

| Untersuchung | Effektive Dosis | Vergleich |
|-------------|----------------|-----------|
| Röntgen Thorax (2 Eb.) | 0,02–0,1 mSv | 1–5 Tage natürliche Strahlung |
| Mammographie | 0,4 mSv | 2 Monate |
| CT Thorax | 7 mSv | 3 Jahre |
| CT Abdomen | 10 mSv | 4–5 Jahre |
| Natürliche Hintergrundstrahlung | 2,1 mSv/Jahr | Referenz |

## Rechenbeispiele

**Beispiel 1 — Minimale Wellenlänge einer Röntgenröhre:**
Beschleunigungsspannung U = 80 kV: E_max = eU = 80 keV = 80 000 × 1,602 × 10⁻¹⁹ J = 1,28 × 10⁻¹⁴ J.
λ_min = hc/E_max = (6,626 × 10⁻³⁴ × 3 × 10⁸) / 1,28 × 10⁻¹⁴ = 1,55 × 10⁻¹¹ m = 0,0155 nm = 15,5 pm. Kurzregel: λ_min [pm] ≈ 1240/U [kV], also 1240/80 = 15,5 pm ✓.

**Beispiel 2 — Halbwertsschichtdicke (Blei bei 100 keV):**
μ_Blei ≈ 60 cm⁻¹ bei 100 keV. HVL = ln2/μ = 0,693/60 = 0,0116 cm ≈ 0,12 mm Blei. Um die Intensität auf 1/1000 zu reduzieren: 2¹⁰ ≈ 1024, also ~10 HVL = 1,2 mm Blei. In der Praxis: Bleischürzen sind 0,25–0,5 mm dick (reduzieren um Faktor 4–16 bei 100 keV).

**Beispiel 3 — Abstandsquadratgesetz:**
Dosisleistung in 1 m Abstand: 10 μSv/h. In 3 m Abstand: D = 10 × (1/3)² = 10/9 = 1,1 μSv/h. Verdopplung des Abstands reduziert die Dosis auf 1/4. Wichtig im Strahlenschutz: Den Abstand zu einer Quelle zu verdoppeln ist eine einfache und effektive Schutzmaßnahme.

**Beispiel 4 — CT-Dosis vs. Röntgen Thorax:**
Ein CT Abdomen hat eine effektive Dosis von ca. 10 mSv. Ein Röntgen Thorax hat ca. 0,02 mSv. Wie viele Thorax-Röntgenaufnahmen entsprechen einem CT Abdomen? 10 mSv / 0,02 mSv = **500 Thorax-Röntgenaufnahmen**. Das bedeutet: Ein CT Abdomen ist dosismäßig erheblich — die Indikation muss gerechtfertigt sein (Rechtfertigungsprinzip).

**Beispiel 5 — Compton-Effekt (Wellenlängenverschiebung):**
Ein Röntgenphoton (E = 100 keV, λ = 0,0124 nm) wird an einem Elektron unter θ = 90° gestreut.
Δλ = (h/m_e·c)(1−cosθ) = 0,00243 nm × (1−cos 90°) = 0,00243 nm × (1−0) = 0,00243 nm.
λ' = λ + Δλ = 0,0124 + 0,0024 = 0,0148 nm. E' = hc/λ' = 1240 eV·nm / 0,0148 nm = 83,8 keV.
Energieübertrag aufs Elektron: 100 − 83,8 = 16,2 keV. Bei 180°-Streuung: Δλ = 2 × 0,00243 = 0,00486 nm (maximal).

**Beispiel 6 — Hounsfield-Einheiten (CT):**
Fettgewebe hat μ = 0,193 cm⁻¹; Wasser hat μ = 0,206 cm⁻¹.
HU = 1000 × (0,193 − 0,206) / 0,206 = 1000 × (−0,013/0,206) = 1000 × (−0,063) = **−63 HU**.
Das entspricht dem typischen HU-Bereich von Fett (−100 bis −50 HU). Knochen (μ ≈ 0,528 cm⁻¹): HU = 1000 × (0,528 − 0,206)/0,206 = 1000 × 1,563 = **+1563 HU**.`,
      lernziele: [
        "Die Entstehung von Bremsstrahlung und charakteristischer Strahlung in der Röntgenröhre erklären.",
        "Das Schwächungsgesetz I = I₀·e^(−μx) und die Halbwertsschichtdicke anwenden.",
        "Das Prinzip der Computertomographie und Hounsfield-Einheiten erklären.",
        "Die drei Wechselwirkungsmechanismen (Photoeffekt, Compton, Paarbildung) nach Energiebereich unterscheiden.",
        "Die direkte und indirekte Strahlenwirkung auf DNA unterscheiden und DNA-Schadenstypen nennen.",
        "Stochastische und deterministische Strahleneffekte definieren und das Schwellenwertkonzept erklären.",
        "Die Strahlenschutzgrundsätze (Rechtfertigung, ALARA, Dosislimitation) anwenden und typische Strahlendosen kennen.",
      ],
      sections: [
        {
          heading: "Röntgenröhre: Brems- und charakteristische Strahlung",
          text: "Elektronen werden auf Wolfram-Anode beschleunigt (U = 30–150 kV). Bremsstrahlung: kontinuierliches Spektrum, E_max = eU. Charakteristische Strahlung: diskrete Linien bei spezifischen Energien des Anodenmaterials. λ_min = hc/(eU). Kurzregel: λ_min [pm] ≈ 1240/U [kV]. Nur ~1 % der Energie wird zu Röntgenstrahlung — Rest = Wärme (Drehanode nötig). Steuerung: kV = Härte (Durchdringung), mA = Menge (Intensität).",
          merksatz:
            "Röntgenröhre: Bremsstrahlung (kontinuierlich) + charakteristische Strahlung (Linien); E_max = eU; λ_min = hc/(eU) ≈ 1240/U[kV] pm.",
        },
        {
          heading: "Computertomographie und Gewebskontrast",
          text: "CT: Röntgenröhre rotiert um Patient, Detektoren messen Transmission aus vielen Winkeln → Rückprojektion → Schnittbild. Hounsfield-Einheiten: HU = 1000 × (μ−μ_Wasser)/μ_Wasser. Wasser = 0, Luft = −1000, Knochen = +200 bis +3000. I = I₀·e^(−μx): Je größer μ (hohes Z, hohe Dichte), desto stärker die Schwächung. Knochen (Ca, Z=20): hell; Lunge: dunkel. Blei (Z=82): bestes Abschirmmaterial. HVL = ln2/μ.",
          merksatz:
            "CT: HU = 1000×(μ−μ_H₂O)/μ_H₂O; Wasser=0, Luft=−1000, Knochen>+200. I = I₀·e^(−μx); HVL = ln2/μ.",
        },
        {
          heading: "Wechselwirkungen: Photoeffekt, Compton, Paarbildung",
          text: "Photoeffekt: Photon überträgt gesamte Energie auf Hüllenelektron (< 100 keV, ∝ Z⁴ → hoher Kontrast). Compton-Effekt: Photon wird an quasi-freiem Elektron gestreut, gibt Teil der Energie ab (100 keV–10 MeV, dominiert bei CT). Paarbildung: Photon erzeugt e⁻/e⁺-Paar im Kernfeld (> 1,02 MeV, relevant in Strahlentherapie). In der diagnostischen Bildgebung dominieren Photoeffekt und Compton-Streuung.",
          merksatz:
            "Photoeffekt (∝ Z⁴, Kontrast), Compton (mittlere E, CT), Paarbildung (> 1,02 MeV, Therapie).",
        },
        {
          heading: "Biologische Wirkung und Strahlenschutz",
          text: "Direkte Wirkung (~30 %): Strahlung trifft direkt DNA → SSB, DSB. Indirekte Wirkung (~70 %): H₂O → OH•-Radikale → DNA-Schäden. DSB = kritischste Läsion (fehlerhaft repariert → Mutation/Krebs). Sauerstoffeffekt: OER ~2,5–3,0 (O₂ fixiert Radikale). Stochastische Effekte: kein Schwellenwert, Krebs (~5 %/Sv). Deterministische Effekte: Schwellendosis (Erythem ~2 Gy, ARS ~1 Gy). ALARA + Rechtfertigung + Dosislimitation (20 mSv/a beruflich, 1 mSv/a Bevölkerung).",
          merksatz:
            "Indirekte Wirkung dominiert (70 %): OH•-Radikale → DSB. Stochastisch: kein Schwellenwert (Krebs). Deterministisch: Schwellendosis (ARS).",
        },
      ],
      merksätze: [
        "Röntgenröhre: Bremsstrahlung (kontinuierlich) + charakteristische Strahlung (elementspezifische Linien).",
        "E_max (Photon) = eU; λ_min = hc/(eU) ≈ 1240/U[kV] pm – höhere Spannung = härtere Strahlung.",
        "CT: HU-Skala mit Wasser = 0, Luft = −1000, Knochen > +200; Dosis: CT Abdomen ~10 mSv.",
        "Schwächungsgesetz: I = I₀·e^(−μx); HVL = Halbwertsschichtdicke = ln2/μ.",
        "Photoeffekt ∝ Z⁴ (Bildkontrast); Compton dominiert bei CT-Energien; Paarbildung > 1,02 MeV.",
        "Knochen (hohe Dichte, Ca): großes μ → hell im Röntgenbild. Lunge (Luft): kleines μ → dunkel.",
        "Direkte Strahlenwirkung (~30 %): Ionisation von DNA. Indirekte Wirkung (~70 %): OH•-Radikale aus H₂O.",
        "Doppelstrangbrüche (DSB): schwer reparierbar → Mutation, Chromosomenaberration oder Zelltod.",
        "Sauerstoffeffekt: OER ~2,5–3; hypoxische Tumorzellen sind strahlenresistenter → Fraktionierung.",
        "Bergonié-Tribondeau: Teilende Zellen strahlenempfindlicher. Lymphozyten > Knochenmark > Darmepithel > Muskel > Nerv.",
        "Stochastische Effekte: kein Schwellenwert, ~5 %/Sv Krebsrisiko (lineare Dosis-Wirkungs-Beziehung).",
        "Deterministische Effekte: Schwellendosis (Erythem ~2 Gy, Katarakt ~0,5 Gy, ARS ~1 Gy).",
        "ALARA: Abstand (I ∝ 1/r²), Zeit (D = Ḋ·t), Abschirmung. Grenzwerte: 20 mSv/a (Beruf), 1 mSv/a (Bevölkerung).",
      ],
      altfrage: {
        text: "Welcher Mechanismus verursacht den Großteil (~70 %) der biologischen Strahlenschäden durch Röntgenstrahlung?",
        options: [
          { id: "a", text: "Direkte Ionisation der DNA" },
          { id: "b", text: "Erwärmung des Gewebes" },
          { id: "c", text: "Indirekte Wirkung über Radiolyse von Wasser (OH-Radikale)" },
          { id: "d", text: "Photoelektrischer Effekt an Knochenkalzium" },
          { id: "e", text: "Magnetfeldwirkung auf Ionenkanäle" },
        ],
        correctOptionId: "c",
        explanation:
          "Ca. 70 % der Strahlenschäden entstehen indirekt: Strahlung spaltet Wasser in hochreaktive OH-Radikale, die DNA und Proteine angreifen. Direkte DNA-Ionisation macht nur ca. 30 % aus.",
      },
      klinischerBezug:
        "Röntgen Thorax ≈ 0,02–0,1 mSv; CT Abdomen ≈ 10 mSv. Strahlentherapie nutzt gezielte Doppelstrangbrüche zur Tumorzellzerstörung. Strahlenschutzkontrolle via Dosimeter im klinischen Betrieb.",
      selfTest: [
        {
          question: "Welche Aussage zur Bremsstrahlung in der Röntgenröhre ist korrekt?",
          options: [
            "Sie entsteht durch Übergänge zwischen inneren Elektronenschalen des Anodenmaterials",
            "Sie hat ein diskretes Linienspektrum mit für Wolfram typischen Energien",
            "Sie entsteht durch Abbremsung von Elektronen im Coulomb-Feld der Anode und ergibt ein kontinuierliches Spektrum",
            "Ihre maximale Photonenenergie ist unabhängig von der Beschleunigungsspannung",
            "Sie tritt nur bei Alpha-Strahlern auf",
          ],
          correctIndex: 2,
          explanation:
            "Bremsstrahlung entsteht, wenn energiereiche Elektronen in das Coulomb-Feld der Anodenatome (Wolfram) eindringen und abgebremst werden. Die Abbremsung kann in verschiedenem Ausmaß erfolgen, weshalb ein kontinuierliches Energiespektrum von null bis E_max = eU entsteht (U = Beschleunigungsspannung). Je mehr Energie das Elektron verliert, desto höherenergetisch das emittierte Photon. Die charakteristische Strahlung (Linienspektrum) entsteht dagegen durch Elektronen-Schalenübergänge. Für die maximale Photonenenergie gilt E_max = eU = hf_max = hc/λ_min, d.h. bei U=100 kV beträgt E_max = 100 keV.",
          hints: [
            'Bremsstrahlung = "Abbremsung" von Elektronen. Welches Spektrum entsteht bei stufenloser Abbremsung?',
            "Charakteristische Strahlung = Linienspektrum (elementspezifisch). Bremsstrahlung = kontinuierliches Spektrum.",
          ],
          tags: ["bremsstrahlung", "röntgenröhre", "spektrum"],
          difficulty: 2,
        },
        {
          question: "Warum erscheinen Knochen im Röntgenbild heller (weißer) als Weichgewebe?",
          options: [
            "Weil Knochen Röntgenstrahlen emittieren",
            "Weil Knochen einen höheren linearen Schwächungskoeffizienten μ haben und mehr Strahlung absorbieren",
            "Weil Knochen reflektieren, während Weichgewebe die Strahlung absorbiert",
            "Weil Knochen wärmer sind und dadurch Röntgenstrahlen erzeugen",
            "Weil Knochen eine niedrigere Dichte als Weichgewebe haben",
          ],
          correctIndex: 1,
          explanation:
            "Im konventionellen Röntgenbild erscheinen Strukturen hell (weiß), die viel Röntgenstrahlung absorbieren (schwächen), da weniger Strahlung auf den Detektor/Film trifft. Knochen enthalten Calcium (Z=20) mit einem hohen Schwächungskoeffizienten μ, der stark mit Z (≈Z⁴ beim Photoeffekt) ansteigt. Weichgewebe (hauptsächlich C, H, O, N, Z≈6-8) absorbiert wesentlich weniger. Die Absorption folgt I = I₀·e^(−μx); bei gleichem x (Dicke) ist I für Knochen viel kleiner → weniger Photonen erreichen den Detektor → helle Darstellung. Luft (μ ≈ 0) erscheint schwarz (Lunge), Metall (z.B. Prothesen) erscheint weiß.",
          hints: [
            "Hell im Röntgenbild = viel Absorption (wenig Strahlung kommt durch). Welches Material absorbiert mehr?",
            "Schwächungskoeffizient μ hängt von Ordnungszahl und Dichte ab. Ca (Z=20) > C/H/O (Z=6-8).",
          ],
          tags: ["röntgenbild", "knochen", "weichgewebe"],
          difficulty: 1,
        },
        {
          question:
            "Eine Röntgenstrahlenquelle hat eine Halbwertsschichtdicke (HVL) in Blei von 5 mm. Welche Bleidicke ist nötig, um die Intensität auf 12,5 % zu reduzieren?",
          options: ["5 mm", "10 mm", "15 mm", "20 mm", "25 mm"],
          correctIndex: 2,
          explanation:
            "12,5 % = 1/8 = (1/2)³, also sind 3 Halbwertsschichtdicken erforderlich. Benötigte Dicke: 3 × 5 mm = 15 mm. Allgemein gilt: I/I₀ = (1/2)ⁿ mit n = Anzahl der HVL. Lösung: (1/2)ⁿ = 0,125 = (1/2)³ → n = 3 → Dicke = 3 × HVL = 15 mm. Die Halbwertsschichtdicke HVL = ln2/μ ist das Analogon zur Halbwertszeit in der Radioaktivität und wird zur praktischen Abschirmberechnung eingesetzt.",
          hints: [
            "12,5 % = 1/8: Wie viele Halbierungen brauche ich, um von 100 % auf 12,5 % zu gelangen?",
            "HVL ist die Dicke für Halbierung. Für n Halbierungen: n × HVL Gesamtdicke.",
          ],
          tags: ["halbwertsschichtdicke", "abschirmung", "blei"],
          difficulty: 2,
        },
        {
          question: "Welche Art von Strahlenschäden an der DNA ist am schwierigsten zu reparieren?",
          options: [
            "Einzelstrangbrüche",
            "Basenmethylierungen",
            "Doppelstrangbrüche",
            "Pyrimidindimere (UV-bedingt)",
            "Oxidierte Basen",
          ],
          correctIndex: 2,
          explanation:
            "Doppelstrangbrüche (DSB) sind die gefährlichsten Strahlenschäden, da beide DNA-Stränge gleichzeitig getrennt sind. Bei Einzelstrangbrüchen kann der intakte Gegenstrang als Matrize für fehlerfreie Reparatur (Basenexzisionsreparatur, Einzelstrangbruchreparatur) genutzt werden. DSB hingegen müssen durch fehleranfällige Reparaturwege repariert werden: homologe Rekombination (fehlerfrei, nur in S/G2-Phase möglich) oder nicht-homologe Endverknüpfung (NHEJ, fehleranfällig, führt oft zu Deletionen). Fehlerhafte DSB-Reparatur ist eine Hauptursache für Chromosomenaberrationen, Mutationen und maligne Transformation. Ionisierende Strahlung erzeugt DSB besonders effizient bei hoher Ionisierungsdichte (α-Strahlung, schwere Ionen).",
          hints: [
            "Bei einem Einzelstrangbruch: Der andere Strang dient als Reparaturmatrize. Bei einem Doppelstrangbruch?",
            "DSB = beide DNA-Stränge gebrochen → keine Matrize → fehleranfällige Reparatur → Chromosomenaberrationen.",
          ],
          tags: ["dna-schäden", "doppelstrangbruch", "strahlenbiologie"],
          difficulty: 2,
        },
        {
          question:
            "Ein Arzt steht 2 Meter von einer Röntgenquelle entfernt und empfängt eine Dosisleistung von 0,04 mSv/h. Welche Dosisleistung erhält er in 4 Meter Abstand?",
          options: ["0,02 mSv/h", "0,01 mSv/h", "0,008 mSv/h", "0,005 mSv/h", "0,002 mSv/h"],
          correctIndex: 1,
          explanation:
            "Die Intensität einer punktförmigen Strahlungsquelle nimmt mit dem inversen Quadrat des Abstands ab: I ∝ 1/r². Wird der Abstand von 2 m auf 4 m verdoppelt, sinkt die Intensität auf (2/4)² = (1/2)² = 1/4 des ursprünglichen Werts. Dosisleistung: 0,04 mSv/h × 1/4 = 0,01 mSv/h. Dies veranschaulicht den Abstandsschutz als wirksamste und einfachste Strahlenschutzmaßnahme. Eine Verdoppelung des Abstands reduziert die Dosis auf ein Viertel.",
          hints: [
            "Abstandsgesetz: I ∝ 1/r². Abstand verdoppelt → Intensität geviertelt.",
            "Verhältnis: (r₁/r₂)² = (2m/4m)² = 1/4. Neue Leistung = alte × 1/4.",
          ],
          tags: ["abstandsgesetz", "strahlenschutz", "dosisleistung"],
          difficulty: 2,
        },
        {
          question:
            "Welche der folgenden Aussagen zu Röntgenstrahlung und Strahlenwirkung ist FALSCH?",
          options: [
            "Bremsstrahlung entsteht durch Abbremsung von Elektronen im Coulomb-Feld der Anodenatome und ergibt ein kontinuierliches Spektrum.",
            "Knochen erscheinen im Röntgenbild hell, weil sie einen hohen Schwächungskoeffizienten haben.",
            "Die maximale Photonenenergie der Bremsstrahlung ist unabhängig von der Beschleunigungsspannung.",
            "Doppelstrangbrüche der DNA sind die gefährlichsten ionisierenden Strahlenschäden.",
            "Die Strahlungsintensität nimmt mit dem Quadrat des Abstands von der Quelle ab.",
          ],
          correctIndex: 2,
          explanation:
            "Die maximale Photonenenergie der Bremsstrahlung ist direkt proportional zur Beschleunigungsspannung: E_max = e·U. Bei U = 100 kV beträgt E_max = 100 keV. Je höher die Spannung, desto energiereicher die Röntgenstrahlung. Alle anderen Aussagen sind korrekt: Bremsstrahlung = kontinuierliches Spektrum durch Elektronenabbremsung, Knochen (Ca, Z=20) absorbieren stark, DSB sind am schwersten reparierbar, und das Abstandsgesetz gilt (I ∝ 1/r²).",
          hints: [
            "Wie hängt die maximale Photonenenergie mit der Beschleunigungsspannung zusammen?",
            "E_max = e·U — je höher U, desto höher E_max.",
          ],
          tags: ["falsch-aussage", "röntgen", "bremsstrahlung"],
          difficulty: 2,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK ph-7-04: Nuklearmedizin und Quantenphänomene
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "ph-7-04",
      title: "Nuklearmedizin und Quantenphänomene",
      stichworte: [
        "PET-Scan",
        "Annihilation",
        "Fluordesoxyglukose FDG",
        "SPECT-Szintigraphie",
        "Strahlentherapie",
        "Teletherapie",
        "Brachytherapie",
        "Linearbeschleuniger",
        "Energiedosis Gray",
        "Äquivalentdosis Sievert",
        "Wichtungsfaktor",
        "Photoelektrischer Effekt",
        "Compton-Effekt",
        "Welle-Teilchen-Dualismus",
        "de-Broglie-Wellenlänge",
        "Doppelspaltexperiment",
        "Warburg-Effekt",
      ],
      content: `Ein Zucker-Molekül, markiert mit einem radioaktiven Fluoratom, macht Tumorzellen sichtbar, noch bevor sie im CT erkennbar sind. Dieses Prinzip heißt PET — und es nutzt Antimaterie.

## PET – Positronen-Emissions-Tomographie

{{DIAGRAM:radioactive-decay}}

Bei der PET wird ein β⁺-strahlendes Radiopharmakon injiziert. Das emittierte Positron bewegt sich kurz durch das Gewebe (wenige mm Reichweite, abhängig von der kinetischen Energie) und trifft auf ein Elektron. Es kommt zur **Paarvernichtung (Annihilation)**:

> e⁺ + e⁻ → 2 γ-Photonen mit je 511 keV, emittiert in entgegengesetzten Richtungen (180° ± 0,5°)

Die Energie von 511 keV entspricht exakt der Ruheenergie eines Elektrons (E = m_e·c²). Die Gesamtenergie beider Teilchen (2 × 0,511 MeV = 1,022 MeV) wird vollständig in die zwei γ-Quanten umgewandelt. Das PET-Gerät detektiert diese **Koinzidenzpaare** (zwei Photonen gleichzeitig, innerhalb eines Zeitfensters von ~10 ns). Entlang der Verbindungslinie dieser Koinzidenzen (line of response, LOR) liegt das Annihilationsereignis. Aus vielen tausend LOR wird mittels iterativer Rekonstruktionsalgorithmen (z. B. OSEM) ein hochaufgelöstes 3D-Bild berechnet.

> **Merke:** PET basiert auf der Annihilation: e⁺ + e⁻ → 2 × 511 keV γ-Photonen unter 180°. Koinzidenzdetektion definiert die LOR – daraus wird das 3D-Bild rekonstruiert.

**¹⁸F-FDG (Fluordesoxyglukose):** ¹⁸F (T½ = 110 min) ist an Desoxyglukose gebunden. FDG wird wie Glukose in Zellen aufgenommen (via GLUT-1/GLUT-3-Transporter) und durch Hexokinase zu FDG-6-Phosphat phosphoryliert, aber dann nicht weiter metabolisiert (fehlende 2-OH-Gruppe blockiert Phosphoglukose-Isomerase) → Akkumulation in Zellen mit hohem Glukoseumsatz (**metabolic trapping**).

Tumorzellen zeigen den **Warburg-Effekt** (Otto Warburg, 1924): Sie betreiben bevorzugt aerobe Glykolyse trotz ausreichendem O₂-Angebot. Die Glukoseaufnahme ist dabei bis zu 200-fach erhöht (Überexpression von GLUT-1, gesteigerte Hexokinase-II-Aktivität). Biologischer Vorteil: schnelle ATP-Bereitstellung und Bereitstellung von Biosynthese-Vorstufen (Pentosephosphatweg-Intermediate). Durch diesen erhöhten Glukoseumsatz reichern Tumorzellen FDG besonders stark an. Auch Entzündungsherde (aktivierte Makrophagen mit gesteigertem Stoffwechsel) und bestimmte Hirnareale (hoher basaler Glukoseverbrauch, ~120 g/Tag) zeigen erhöhte FDG-Aufnahme.

> **Merke:** FDG-PET zeigt Stoffwechselaktivität, nicht Anatomie – deshalb Kombination mit CT oder MRT (PET/CT, PET/MRT) für präzise anatomische Lokalisation. Der Warburg-Effekt (aerobe Glykolyse in Tumorzellen) ist die biologische Grundlage der FDG-Anreicherung.

Hauptanwendungen: Tumorstaging und Metastasensuche (besonders Lymphom, Lungenkarzinom, kolorektales Karzinom), Therapiekontrolle (Ansprechen auf Chemotherapie, Deauville-Score bei Lymphomen), kardiologische Vitalitätsdiagnostik (hibernating myocardium: minderperfundiert aber vital), neurologische Diagnostik (Alzheimer-Demenz: temporoparietales Defizit, Epilepsieherd-Lokalisation: interiktal Hypometabolismus).

---

## SPECT – Single Photon Emission Computed Tomography

SPECT nutzt γ-Strahler (meist ⁹⁹ᵐTc, 140 keV) und eine rotierende **Gammakamera** mit einem **Kollimator** aus Blei (lässt nur annähernd parallele Photonen passieren → Ortsinformation). Aus Projektionen bei verschiedenen Winkeln (typisch 64–128 Winkel über 360°) wird ein 3D-Bild rekonstruiert (gefilterte Rückprojektion oder iterative Algorithmen).

**⁹⁹ᵐTc** ist das meistverwendete Radionuklid in der Nuklearmedizin: T½ = 6,01 h (ideal für Bildgebung – lang genug für Untersuchung, kurz genug für geringe Strahlenbelastung), reiner γ-Strahler (140 keV, optimal für Gammakamera-Detektion). Es wird im **⁹⁹Mo/⁹⁹ᵐTc-Generator** vor Ort erzeugt – umgangssprachlich **Molybdän-Kuh** (englisch: moly cow), weil man das Technetium wie Milch regelmäßig „melkt". Der Generator enthält ⁹⁹Mo (T½ = 66 h) auf einer Aluminiumoxid-Säule; ⁹⁹Mo zerfällt zu ⁹⁹ᵐTc, das mit steriler Kochsalzlösung eluiert wird (Elution = „Melken"). Das "m" steht für **metastabil**: ein angeregter Kernzustand, der unter Emission eines γ-Quants in den Grundzustand ⁹⁹Tc übergeht (isomerer Übergang, keine Teilchenemission → geringe Strahlenbelastung).

> **Merke:** Molybdän-Kuh-Generator: ⁹⁹Mo (T½ = 66 h) → ⁹⁹ᵐTc (T½ = 6 h). Täglich „melkbar" mit NaCl-Elution. ⁹⁹ᵐTc ist ideal: reiner γ-Strahler (140 keV), kurze HWZ, vielseitig markierbar.

| Eigenschaft | PET | SPECT |
|------------|-----|-------|
| Radionuklid | β⁺-Strahler (¹⁸F) | γ-Strahler (⁹⁹ᵐTc) |
| Auflösung | 4–7 mm | 8–15 mm |
| Sensitivität | Hoch | Mittel |
| Kollimator | Nicht nötig | Erforderlich (Blei) |
| Kosten | Hoch | Niedriger |
| Verfügbarkeit | Spezialisiert | Weit verbreitet |

SPECT/CT kombiniert funktionelle und anatomische Information. Klinische Anwendungen: Skelettszintigraphie (Knochenmetastasen mit ⁹⁹ᵐTc-MDP), Myokardperfusion (⁹⁹ᵐTc-MIBI, Nachweis ischämischer Areale unter Belastung vs. Ruhe), Schilddrüsenszintigraphie (⁹⁹ᵐTc-Pertechnetat, heiße vs. kalte Knoten – heiße Knoten: autonom, supprimieren TSH; kalte Knoten: karzinomverdächtig), Hirnperfusion (Epilepsiediagnostik, iktale vs. interiktale SPECT).

---

## Strahlentherapie

{{DIAGRAM:radiation-penetration}}

Ionisierende Strahlung zerstört Tumorzellen, indem sie DNA-Doppelstrangbrüche (DSB) erzeugt. Einzelstrangbrüche werden effizient repariert; DSB in proliferierenden Tumorzellen hingegen führen zu Chromosomenaberrationen, Mitosekatastrophe und Apoptose. Zwei Grundprinzipien:

**Teletherapie (Fernbestrahlung):** Die Strahlenquelle befindet sich außerhalb des Körpers. Der **medizinische Linearbeschleuniger (LINAC)** beschleunigt Elektronen auf 4–25 MeV und lenkt sie auf ein Wolfram-Target, wo hochenergetische **Bremsstrahlung** (Röntgenphotonen) entsteht. Der Strahl wird durch einen **Multileaf-Kollimator (MLC)** mit 80–160 individuell positionierbaren Wolframlamellen millimetergenau an die Tumorkontur angepasst. Moderne Techniken:

- **IMRT** (intensitätsmodulierte Radiotherapie): Variable Fluenzprofile pro Feld durch dynamische MLC-Bewegung → inhomogene Einzelfelder ergeben zusammen eine homogene Tumordosis bei maximaler Schonung benachbarter Risikoorgane. Inverse Bestrahlungsplanung: Der Physiker gibt Dosisziele vor, der Computer optimiert die MLC-Positionen.
- **VMAT** (Volumetric Modulated Arc Therapy): Rotierende Bestrahlung mit gleichzeitiger MLC- und Dosisleistungsanpassung → schneller als IMRT (2–5 min statt 15–20 min), gleiche Dosisverteilung.
- **Stereotaxie** (SRS/SBRT): Hohe Einzeldosen auf kleine Volumina (< 5 Fraktionen, z. B. bei Hirnmetastasen, peripheren Lungentumoren). Submillimeter-Genauigkeit durch stereotaktischen Rahmen oder bildgeführte Lagerung.

Prüfungstipp: Der LINAC hat die ⁶⁰Co-Teletherapie (Gammaknife ausgenommen) weitgehend abgelöst, weil er schärfere Dosisgradienten und flexiblere Energien liefert.

**Brachytherapie (Nahbestrahlung):** Radioaktive Quellen werden direkt in oder an den Tumor gebracht. Der Dosisabfall folgt näherungsweise dem **Abstandsquadratgesetz** (D ∝ 1/r²): Verdopplung des Abstands → Vierteldosis. Dadurch wird umliegendes Gewebe geschont. Wichtige Nuklide:

- **¹⁹²Ir** (T½ = 74 Tage, γ-Strahler): HDR-Brachytherapie (high dose rate), Afterloading-Technik – die Quelle wird ferngesteuert in einen Applikator gefahren (Strahlenschutz für Personal). Einsatz: Zervixkarzinom (intrakavitär), Ösophaguskarzinom (intraluminal), Bronchialkarzinom.
- **¹²⁵I** (T½ = 59,4 Tage, niederenergetische γ-Strahlung, 27–35 keV): LDR-Brachytherapie (low dose rate). Seeds (kleine Metallhülsen) werden permanent in die Prostata implantiert – permanente Implantation, langsame Dosisabgabe über Monate.

> **Merke:** Teletherapie = Strahlenquelle außen (LINAC, Bremsstrahlung, MLC). Brachytherapie = Quelle im/am Tumor (¹⁹²Ir HDR-Afterloading, ¹²⁵I-Seeds LDR). Wirkprinzip: DNA-Doppelstrangbrüche in Tumorzellen.

**Fraktionierung und die 4 R der Strahlenbiologie:** Die Gesamtdosis wird in Einzelfraktionen (typisch 1,8–2 Gy/Tag, 5×/Woche, über 5–7 Wochen) aufgeteilt. Zwischen den Fraktionen profitiert gesundes Gewebe stärker als der Tumor von vier biologischen Effekten:

1. **Repair** (Reparatur): Gesunde Zellen reparieren subletale DNA-Schäden (Einzelstrangbrüche) zwischen den Fraktionen effizienter als Tumorzellen (intakte DNA-Reparaturmechanismen).
2. **Redistribution** (Umverteilung im Zellzyklus): Zwischen den Fraktionen wandern überlebende Zellen in strahlenempfindliche Zellzyklusphasen (G₂/M-Phase: 2–3× empfindlicher als S-Phase).
3. **Reoxygenierung**: Hypoxische Tumorzellen (2–3× strahlenresistenter als oxische Zellen, Sauerstoff-Enhancement-Ratio OER ≈ 2,5–3) werden nach Abtöten der äußeren, gut oxygenierten Tumorzellen wieder besser durchblutet und damit strahlenempfindlicher.
4. **Repopulation**: Gesundes Gewebe regeneriert sich zwischen den Fraktionen (Stammzellproliferation).

Hypofraktionierung (wenige Fraktionen mit hoher Einzeldosis, z. B. 3 × 15 Gy) wird bei stereotaktischer Bestrahlung eingesetzt und nutzt einen anderen Wirkmechanismus (vaskuläre Schädigung, Immunstimulation).

---

## Dosimetrie

Drei Dosisgrößen sind prüfungsrelevant:

**1. Energiedosis D (Gray, Gy):** Absorbierte Energie pro Masse: **D = ΔE/Δm** [J/kg = Gy]. 1 Gy = 1 J/kg. Die Energiedosis beschreibt die physikalisch im Gewebe deponierte Energie, sagt aber nichts über die biologische Wirkung. Historische Einheit: 1 rad = 0,01 Gy (veraltet, aber in älterer Literatur).

**2. Äquivalentdosis H (Sievert, Sv):** Berücksichtigt die unterschiedliche biologische Wirksamkeit verschiedener Strahlungsarten: **H = w_R · D** [Sv]. Der **Strahlungs-Wichtungsfaktor w_R** ist dimensionslos und spiegelt den linearen Energietransfer (LET) wider – je höher der LET, desto dichter die Ionisierung entlang der Teilchenspur, desto schwerer die DNA-Schäden:

| Strahlung | w_R | Begründung |
|-----------|-----|------------|
| Photonen (γ, Röntgen) | 1 | Niedriger LET, dünn ionisierend |
| Elektronen (β) | 1 | Niedriger LET |
| Protonen | 2 | Mittlerer LET |
| Alpha-Teilchen | 20 | Sehr hoher LET, Clusterschäden |
| Neutronen (energieabhängig) | 5–20 | Variabler LET, Rückstoßprotonen |

> **Merke:** w_R-Werte merken: α = 20 (schwer, geladen → dichter LET), β/γ = 1 (leicht/ungeladen → dünner LET), Neutronen = 5–20 (energieabhängig, indirekt ionisierend über Rückstoßkerne). Gleiche Gy, aber 20× mehr Sv bei Alpha!

**3. Effektive Dosis E (Sievert, Sv):** Gewichtet zusätzlich die Empfindlichkeit verschiedener Organe: **E = Σ w_T · H_T**. Gewebewichtungsfaktoren w_T (ICRP 103): Gonaden 0,08; Knochenmark 0,12; Lunge 0,12; Magen 0,12; Brust 0,12; Schilddrüse 0,04; Haut 0,01. Alle w_T summieren sich auf 1,0.

> **Merke:** Gray (Gy) = physikalische Dosis (Energie/Masse). Sievert (Sv) = biologisch gewichtete Dosis (H = w_R · D). Effektive Dosis E = Σ w_T · H_T berücksichtigt Organempfindlichkeit.

**Typische Dosiswerte:** Natürliche Hintergrundstrahlung: ~2,1 mSv/Jahr (Österreich, Radon-Exposition regional bis 10 mSv). Röntgen-Thorax: ~0,02 mSv. CT-Abdomen: ~10 mSv. Strahlentherapie-Gesamtdosis (kurativer Tumor): 50–70 Gy. Letale Ganzkörperdosis (LD₅₀/₆₀): ~4 Sv (50 % Mortalität innerhalb 60 Tagen ohne Behandlung). Strahlenschutzgrenzwerte (ICRP): 20 mSv/Jahr beruflich, 1 mSv/Jahr Bevölkerung.

---

## Photoelektrischer Effekt

Der **äußere Photoelektrische Effekt** (Albert Einstein, 1905, Nobelpreis 1921) beschreibt das Herauslösen von Elektronen aus einer **Metalloberfläche** beim Einfall von Licht. Einstein postulierte, dass Licht aus Energiequanten (Photonen) besteht, deren Energie E = hf beträgt. Trifft ein Photon auf die Metalloberfläche, überträgt es seine gesamte Energie auf ein einzelnes Elektron:

> **E_kin = hf − φ** (φ = Austrittsarbeit des Metalls, materialabhängig)

Emission tritt nur auf, wenn hf ≥ φ, d. h. f ≥ f_Grenz = φ/h (**Grenzfrequenz**). Unterhalb der Grenzfrequenz wird kein Elektron emittiert – egal wie intensiv das Licht ist (klassisch unerklärbar: höhere Intensität = höhere Feldamplitude sollte Emission ermöglichen). Oberhalb steigt die kinetische Energie der Elektronen linear mit f. Die Intensität beeinflusst nur die Anzahl der emittierten Elektronen (mehr Photonen = mehr Photoelektronen), nicht ihre Energie. Diese drei experimentellen Befunde (Grenzfrequenz, lineare E_kin(f)-Beziehung, sofortige Emission ohne Zeitverzögerung) waren der zentrale Beweis für die Quantennatur des Lichts.

> **Merke:** Photoeffekt: E_kin = hf − φ. Kein Elektron unter der Grenzfrequenz, egal bei welcher Intensität. Die Frequenz bestimmt die Energie, die Intensität die Anzahl der Elektronen. Drei Befunde widersprechen der Wellentheorie und beweisen Lichtquanten.

**Innerer Photoeffekt (medizinisch relevant):** In der Röntgendiagnostik ist der Photoeffekt der dominierende Absorptionsmechanismus bei niedrigen Photonenenergien (< 100 keV) in Geweben mit hoher Ordnungszahl Z. Ein Röntgenphoton wird vollständig absorbiert und schlägt ein inneres Hüllenelektron (K- oder L-Schale) heraus. Die Absorptionswahrscheinlichkeit (Wirkungsquerschnitt) steigt mit **Z⁴/E³** – deshalb absorbiert Knochen (Ca, Z = 20) viel mehr Röntgenstrahlung als Weichgewebe (C, N, O, Z = 6–8). Der Kontrast wächst mit Z⁴: (20/7)⁴ ≈ 67-facher Absorptionsunterschied. Dieser Kontrastmechanismus erzeugt das klassische Röntgenbild. Bei steigender Röhrenspannung (höheres E) sinkt der Photoeffekt-Anteil (∝ 1/E³) und der Compton-Anteil steigt → schlechterer Weichteil-Knochen-Kontrast.

---

## Compton-Effekt

{{DIAGRAM:em-spectrum}}

Bei höheren Photonenenergien (100 keV – 10 MeV, typisch für Strahlentherapie) dominiert der **Compton-Effekt** (Arthur Compton, 1923, Nobelpreis 1927): Ein Photon stößt mit einem schwach gebundenen (quasi-freien) Hüllenelektron zusammen. Das Photon wird gestreut und verliert dabei Energie; das Elektron wird herausgeschlagen (Compton-Elektron, Rückstoßelektron). Im Gegensatz zum Photoeffekt wird das Photon nicht vollständig absorbiert, sondern existiert mit reduzierter Energie und geänderter Richtung weiter.

Die **Wellenlängenänderung** des gestreuten Photons hängt nur vom Streuwinkel θ ab:

> **Δλ = λ' − λ = (h/m_e·c) · (1 − cos θ)**

Der Faktor h/(m_e·c) = 2,43 pm heißt **Compton-Wellenlänge des Elektrons**. Maximale Wellenlängenänderung bei θ = 180° (Rückstreuung): Δλ_max = 2 × 2,43 pm = 4,86 pm. Beachte: Δλ ist konstant bei gegebenem θ, aber der relative Energieübertrag (ΔE/E) steigt mit der Primärenergie. Bei 1 MeV Primärenergie und Rückstreuung behält das Photon nur ~200 keV – der Großteil geht ans Elektron.

**Medizinische Relevanz:** Compton-Streuung ist **Z-unabhängig** (hängt nur von der Elektronendichte ab, die pro Gramm für alle Gewebe außer H nahezu gleich ist) – im Gegensatz zum Photoeffekt (∝ Z⁴). Deshalb verschwindet der Knochen-Weichteil-Kontrast bei hohen Energien. In der Strahlentherapie (MeV-Bereich) ist Compton-Streuung der Hauptmechanismus der Dosisdeposition im Gewebe. Gestreute Photonen erzeugen Streustrahlung – ein Strahlenschutzproblem (Bleischürzen, Abstand, Abschirmung nach dem ALARA-Prinzip: As Low As Reasonably Achievable).

> **Merke:** Compton-Effekt: Photon stößt quasi-freies Elektron, wird gestreut (Δλ = h/(m_e·c) · (1−cos θ)). Dominiert bei 100 keV–10 MeV. Z-unabhängig (nur Elektronendichte zählt) – daher kein Gewebekontrast, aber Hauptmechanismus der therapeutischen Dosisdeposition.

| Wechselwirkung | Energiebereich | Z-Abhängigkeit | Klinische Relevanz |
|---------------|---------------|----------------|-------------------|
| Photoeffekt | < 100 keV | ∝ Z⁴/E³ | Röntgendiagnostik (Kontrast) |
| Compton-Effekt | 100 keV–10 MeV | Z-unabhängig | Strahlentherapie (Dosisdeposition) |
| Paarbildung | > 1,022 MeV | ∝ Z² | Hochenergietherapie, PET-Physik |

---

## Welle-Teilchen-Dualismus

Der Photoeffekt und der Compton-Effekt zeigen den Teilchencharakter des Lichts (Photonen mit Energie E = hf und Impuls p = h/λ). Beugung und Interferenz zeigen seinen Wellencharakter. Beide Aspekte sind gleichberechtigt und komplementär – das ist der **Welle-Teilchen-Dualismus**. Welches Verhalten beobachtet wird, hängt vom Experiment ab: Detektionsexperimente zeigen Teilchen, Ausbreitungsexperimente zeigen Wellen.

**De-Broglie-Hypothese (1924, Nobelpreis 1929):** Nicht nur Licht, sondern **jedes Teilchen mit Impuls p** besitzt eine zugehörige Wellenlänge:

> **λ = h/p = h/(m·v)**

Für ein Elektron (m = 9,11 × 10⁻³¹ kg) bei v = 10⁶ m/s: λ = 6,63 × 10⁻³⁴/(9,11 × 10⁻³¹ × 10⁶) = 0,73 nm – im Bereich atomarer Gitterabstände, daher beobachtbar (Elektronenbeugung an Kristallen, Davisson-Germer-Experiment 1927). Für einen Tennisball (58 g, 50 m/s): λ = 6,63 × 10⁻³⁴/(0,058 × 50) = 2,3 × 10⁻³⁴ m – undetektierbar klein. Materiewellen sind nur für subatomare Teilchen relevant.

> **Merke:** De Broglie: λ = h/p = h/(m·v). Jedes Teilchen hat Welleneigenschaften, aber nur bei atomaren Massen ist λ groß genug für Beugung. Schwere Teilchen → kleines λ → keine beobachtbare Wellenerscheinung.

**Doppelspaltexperiment:** Elektronen (oder Photonen) werden einzeln auf einen Doppelspalt geschossen. Auf dem Detektorschirm entsteht nach vielen Einzelereignissen ein **Interferenzmuster** (helle und dunkle Streifen) – typisch für Wellen. Verschließt man einen Spalt, verschwindet das Interferenzmuster und es erscheint ein Einzelspalt-Beugungsmuster. Platziert man einen Detektor an einem der Spalte (**Welcher-Weg-Information**), verschwindet das Interferenzmuster ebenfalls – die Beobachtung zerstört die Kohärenz. Dieses Experiment ist der überzeugendste Beweis für den Dualismus: Einzelne Teilchen verhalten sich wie Wellen, solange man nicht ihre Bahn misst. Komplementaritätsprinzip (Bohr): Wellen- und Teilcheneigenschaften schließen sich in einem einzelnen Experiment gegenseitig aus.

**Medizinische Anwendung – Elektronenmikroskop:** Das **Elektronenmikroskop** nutzt die de-Broglie-Wellenlänge beschleunigter Elektronen. Bei einer Beschleunigungsspannung von 100 kV beträgt die kinetische Energie E = 100 keV, woraus λ ≈ 0,004 nm folgt – weit unterhalb der Lichtmikroskop-Grenze (Abbe-Limit ~200 nm, begrenzt durch λ_sichtbar ≈ 400–700 nm). Zwei Typen:

- **TEM** (Transmissionselektronenmikroskop): Elektronenstrahl durchdringt ultradünne Probe (50–100 nm) → hochaufgelöste 2D-Bilder (< 0,1 nm Auflösung). Anwendung: Virusdiagnostik (Negativkontrastierung), Zellultrastruktur (Mitochondrien, ER), Materialwissenschaft.
- **REM** (Rasterelektronenmikroskop): Fokussierter Elektronenstrahl rastert die Probenoberfläche ab → plastische 3D-Oberflächenbilder (Auflösung ~1 nm). Anwendung: Oberflächentopographie von Zellen, Biomaterialien, forensische Analyse.

> **Merke:** Elektronenmikroskop: λ_Elektron ≈ 0,004 nm bei 100 kV → 50.000× kleinere Wellenlänge als sichtbares Licht → Auflösung atomarer Strukturen. TEM: Durchstrahlung → 2D. REM: Oberflächen-Rasterung → 3D.

---

## Rechenbeispiele

**Beispiel 1 — Annihilationsenergie bei PET:**
Ruhemasse Elektron = Ruhemasse Positron = 0,511 MeV/c². Gesamte Ruheenergie: E = 2 × 0,511 = 1,022 MeV. Da das Positron beim Zusammentreffen nahezu ruht (thermalisiert), werden genau 2 Photonen mit je E = 0,511 MeV = 511 keV emittiert. Wellenlänge: λ = hc/E = 1240 eV·nm / (511 000 eV) = 0,00243 nm = 2,43 pm (harte Gamma-Strahlung).

**Beispiel 2 — Äquivalentdosis bei verschiedenen Strahlungsarten:**
Ein Gewebe absorbiert eine Energiedosis von D = 0,5 Gy. Äquivalentdosis bei Photonen (w_R = 1): H = 1 × 0,5 = 0,5 Sv. Bei Alpha-Strahlung (w_R = 20): H = 20 × 0,5 = 10 Sv. Bei Neutronen (w_R = 10, angenommen): H = 10 × 0,5 = 5 Sv. Die gleiche physikalische Dosis erzeugt bei Alpha-Strahlung eine 20-fach höhere biologische Wirkung als bei Photonen.

**Beispiel 3 — Photoelektrischer Effekt (Grenzfrequenz):**
Austrittsarbeit von Zink: φ = 4,3 eV = 4,3 × 1,602 × 10⁻¹⁹ J = 6,89 × 10⁻¹⁹ J.
Grenzfrequenz: f₀ = φ/h = 6,89 × 10⁻¹⁹ / 6,626 × 10⁻³⁴ = 1,04 × 10¹⁵ Hz. Grenzwellenlänge: λ₀ = c/f₀ = 3 × 10⁸ / 1,04 × 10¹⁵ = 289 nm (UV). Sichtbares Licht (400–700 nm) hat zu niedrige Frequenz → kein Photoeffekt an Zink.

**Beispiel 4 — De-Broglie-Wellenlänge:**
Elektron mit E_kin = 150 eV: p = √(2·m_e·E_kin) = √(2 × 9,11 × 10⁻³¹ × 150 × 1,6 × 10⁻¹⁹) = 6,61 × 10⁻²⁴ kg·m/s. λ = h/p = 6,63 × 10⁻³⁴ / 6,61 × 10⁻²⁴ = 0,1 nm = 1 Å – vergleichbar mit atomaren Gitterabständen, daher Elektronenbeugung beobachtbar.

**Beispiel 5 — Compton-Streuung:**
Photon mit λ = 0,071 nm wird unter θ = 90° gestreut. Δλ = (h/m_e·c)(1 − cos 90°) = 2,43 pm × 1 = 2,43 pm. λ' = 0,071 + 0,00243 = 0,0734 nm. Energieänderung: E = hc/λ = 17,5 keV → E' = hc/λ' = 16,9 keV → Energieübertrag auf Elektron: 0,6 keV.`,
      lernziele: [
        "Das Prinzip der Paarvernichtung und Koinzidenzdetektion beim PET erklären und ¹⁸F-FDG-Akkumulation begründen.",
        "SPECT und PET hinsichtlich verwendeter Radionuklide, Detektionsprinzip und Auflösung vergleichen.",
        "Teletherapie (LINAC) und Brachytherapie (1/r²-Abfall) unterscheiden und die Fraktionierung begründen.",
        "Energiedosis (Gy), Äquivalentdosis (Sv) und Wichtungsfaktoren (w_R, w_T) berechnen und zuordnen.",
        "Den photoelektrischen Effekt (E_kin = hf − φ) und den Compton-Effekt (Δλ-Formel) erklären.",
        "De-Broglie-Wellenlänge berechnen und das Doppelspaltexperiment als Beweis des Welle-Teilchen-Dualismus erläutern.",
      ],
      sections: [
        {
          heading: "PET und SPECT: Funktionsprinzipien",
          text: "PET: β⁺-Strahler → Positron + Elektron → Annihilation → 2 × 511-keV-Photonen in 180°. Koinzidenzdetektion definiert die line of response; hohe Sensitivität und quantitative Auswertung. FDG (¹⁸F): Glukoseanalogon, reichert sich in stoffwechselaktiven Zellen an (Tumor, Entzündung, Gehirn). SPECT: γ-Strahler (⁹⁹ᵐTc, T½ = 6 h) + Gammakamera + Bleikollimator; günstiger, weiter verbreitet, etwas geringere Auflösung als PET.",
          merksatz:
            "PET: β⁺ → Annihilation → 2×511 keV (180°) → Koinzidenz. SPECT: γ-Strahler + Gammakamera + Kollimator.",
        },
        {
          heading: "Strahlentherapie und Dosimetrie",
          text: "Teletherapie: LINAC erzeugt Bremsstrahlung (4–25 MeV), MLC formt den Strahl tumorkonform. Brachytherapie: radioaktive Quellen direkt am Tumor, Dosisabfall ∝ 1/r². Fraktionierung (1,8–2 Gy/Tag) nutzt bessere DNA-Reparatur gesunder Zellen. Energiedosis D = ΔE/Δm [Gy], Äquivalentdosis H = w_R · D [Sv]. Alpha: w_R = 20, Photonen/Elektronen: w_R = 1. Effektive Dosis: E = Σ w_T · H_T.",
          merksatz:
            "Gy = physikalische Dosis (J/kg). Sv = biologisch gewichtete Dosis (H = w_R · D). Alpha: w_R = 20.",
        },
        {
          heading: "Photoeffekt und Compton-Effekt",
          text: "Photoeffekt: E_kin = hf − φ; Emission nur bei f ≥ φ/h; Absorption ∝ Z⁴/E³ (Röntgenkontrast). Compton-Effekt: Photon-Elektron-Stoß, Δλ = h/(m_e·c)·(1−cos θ); Z-unabhängig, dominiert bei 100 keV–10 MeV (Strahlentherapie). Paarbildung ab > 1,022 MeV.",
          merksatz:
            "Photoeffekt: E_kin = hf − φ, ∝ Z⁴. Compton: Δλ = 2,43 pm · (1−cos θ), Z-unabhängig.",
        },
        {
          heading: "Welle-Teilchen-Dualismus",
          text: "De Broglie (1924): λ = h/p = h/(m·v) – jedes Teilchen hat eine Wellenlänge, aber nur bei atomaren Massen ist sie messbar. Doppelspaltexperiment: Einzelne Elektronen erzeugen Interferenzmuster; Welcher-Weg-Messung zerstört es. Elektronenmikroskop: λ ≈ 0,004 nm bei 100 kV → Auflösung weit unter Lichtmikroskop.",
          merksatz:
            "De Broglie: λ = h/(m·v). Doppelspalt: Einzelne Teilchen interferieren – Beobachtung zerstört das Muster.",
        },
      ],
      merksätze: [
        "PET: β⁺-Strahler → Annihilation → 2 Gamma-Photonen je 511 keV unter 180°; Koinzidenzdetektion.",
        "¹⁸F-FDG: Desoxyglukose akkumuliert in Hochumsatz-Zellen (Tumor, Hirn); T½ = 110 min.",
        "SPECT: ⁹⁹ᵐTc (T½ = 6 h, 140 keV) + Gammakamera mit Blei-Kollimator; günstiger als PET.",
        "Teletherapie: LINAC → Bremsstrahlung, MLC-geformt. Brachytherapie: Quelle am Tumor, D ∝ 1/r².",
        "Fraktionierung: 1,8–2 Gy/Tag, 5×/Woche; gesunde Zellen reparieren besser als Tumorzellen (4 R).",
        "Gray (Gy) = J/kg (physikalisch). Sievert (Sv) = w_R · Gy (biologisch). Alpha: w_R = 20.",
        "Photoeffekt: E_kin = hf − φ; Grenzfrequenz f_Grenz = φ/h; Absorption ∝ Z⁴/E³.",
        "Compton-Effekt: Δλ = h/(m_e·c) · (1 − cos θ); Compton-Wellenlänge = 2,43 pm; Z-unabhängig.",
        "De Broglie: λ = h/p = h/(m·v); relevant für Elektronen (nm-Bereich), nicht für makroskopische Objekte.",
        "Doppelspaltexperiment: Einzelne Teilchen erzeugen Interferenzmuster – Beweis für Welle-Teilchen-Dualismus.",
      ],
      altfrage: {
        text: "Eine Person ist einer Energiedosis von 0,5 Gy ausgesetzt. Wie hoch ist die Äquivalentdosis bei Alpha-Strahlung (w_R = 20)?",
        options: [
          { id: "a", text: "0,5 Sv" },
          { id: "b", text: "0,025 Sv" },
          { id: "c", text: "10 Sv" },
          { id: "d", text: "20 Sv" },
          { id: "e", text: "100 Sv" },
        ],
        correctOptionId: "c",
        explanation:
          "H = w_R × D = 20 × 0,5 Gy = 10 Sv. Alpha-Strahlung hat w_R = 20 wegen hoher Ionisierungsdichte (LET). Gamma: w_R = 1, also nur 0,5 Sv bei gleicher Dosis.",
      },
      klinischerBezug:
        "¹⁸F-FDG-PET/CT: Goldstandard für Tumorstaging, Therapiekontrolle. SPECT/CT mit ⁹⁹ᵐTc: Skelettszintigraphie, Myokardperfusion, Schilddrüsenszintigraphie. Strahlentherapie: LINAC-basierte IMRT/VMAT bei soliden Tumoren, Brachytherapie bei Zervix-/Prostatakarzinom. Dosimetrie: Strahlenschutzgrenzwerte (effektive Dosis 20 mSv/Jahr beruflich, 1 mSv/Jahr Bevölkerung).",
      selfTest: [
        {
          question:
            "Bei der PET werden zwei Gammaphotonen mit je 511 keV detektiert. Woher stammt diese spezifische Energie von 511 keV?",
          options: [
            "Sie entspricht der Bindungsenergie eines Protons im Kern",
            "Sie ist die kinetische Energie des emittierten Positrons",
            "Sie entspricht der Ruheenergie eines Elektrons (m_e·c²), da bei der Annihilation die gesamte Ruhemasse beider Teilchen in Energie umgewandelt wird",
            "Sie wird durch die Zerfallskonstante von ¹⁸F bestimmt",
            "Sie ist die Ionisierungsenergie von Fluor-18",
          ],
          correctIndex: 2,
          explanation:
            "Bei der Paarvernichtung (Annihilation) treffen ein Positron und ein Elektron aufeinander. Die Gesamtenergie wird nach E = mc² vollständig in Strahlungsenergie umgewandelt. Die Ruhemasse eines Elektrons beträgt m_e = 9,109×10⁻³¹ kg, entsprechend einer Ruheenergie von m_e·c² ≈ 0,511 MeV = 511 keV. Da Positron und Elektron jeweils 511 keV Ruhemasse haben, entstehen zwei Photonen mit je 511 keV. Der konstante Wert 511 keV ist charakteristisch für alle Paarvernichtungsereignisse.",
          hints: [
            "Annihilation: e⁺ + e⁻ → 2γ. Die Energie der Photonen kommt aus der Ruhemasse beider Teilchen: E = m_e·c².",
            "m_e·c² = 0,511 MeV = 511 keV. Da zwei Teilchen annihilieren, entstehen zwei Photonen mit je 511 keV.",
          ],
          tags: ["pet", "annihilation", "ruhemasse"],
          difficulty: 2,
        },
        {
          question: "Warum reichert sich ¹⁸F-FDG in Tumorzellen stärker an als in normalem Gewebe?",
          options: [
            "Weil Tumorzellen eine höhere Dichte an Fluorid-Transportsystemen haben",
            "Weil Tumorzellen einen erhöhten Glukosestoffwechsel (Warburg-Effekt) aufweisen und FDG intrazellulär akkumuliert, da es nach Phosphorylierung nicht weiter abgebaut wird",
            "Weil das Fluor-18 magnetisch von Tumorzellkernen angezogen wird",
            "Weil Tumorzellen weniger Hexokinase produzieren und FDG daher länger in der Zelle verbleibt",
            "Weil FDG von Tumorzellen aktiv sezerniert wird und sich im Tumorgewebe sammelt",
          ],
          correctIndex: 1,
          explanation:
            "Der Warburg-Effekt beschreibt die bevorzugte Nutzung aerober Glykolyse durch Tumorzellen. Tumorzellen überexprimieren GLUT1/GLUT3 und Hexokinase, nehmen vermehrt FDG auf. FDG wird zu FDG-6-Phosphat phosphoryliert, aber wegen der fehlenden 2-OH-Gruppe nicht weiter metabolisiert (metabolic trapping). In normalen Zellen mit niedrigerem Glukoseumsatz ist die Anreicherung geringer → Tumorkontrast im PET-Bild.",
          hints: [
            "FDG = Desoxyglukose. Die fehlende OH-Gruppe blockiert den weiteren Abbau nach der Phosphorylierung.",
            "Tumorzellen: Warburg-Effekt = hoher Glukosestoffwechsel. FDG wird aufgenommen, aber metabolisch blockiert → Akkumulation.",
          ],
          tags: ["fdg", "warburg-effekt", "tumorstoffwechsel"],
          difficulty: 2,
        },
        {
          question: "Welche Aussage zum photoelektrischen Effekt ist korrekt?",
          options: [
            "Elektronen werden emittiert, sobald die Lichtintensität einen Schwellenwert überschreitet",
            "Die kinetische Energie der emittierten Elektronen hängt von der Lichtintensität ab",
            "Elektronen werden nur emittiert, wenn die Lichtfrequenz mindestens die Grenzfrequenz f_Grenz = φ/h erreicht",
            "Der Effekt tritt nur bei Infrarotlicht auf",
            "Die Anzahl der emittierten Elektronen hängt von der Lichtfrequenz ab",
          ],
          correctIndex: 2,
          explanation:
            "Ein Photon muss mindestens die Austrittsarbeit φ aufbringen: hf ≥ φ, also f ≥ f_Grenz = φ/h. Unterhalb der Grenzfrequenz keine Emission – egal wie intensiv das Licht. Die kinetische Energie ist E_kin = hf − φ (frequenzabhängig, nicht intensitätsabhängig). Die Intensität beeinflusst nur die Anzahl der Elektronen pro Zeiteinheit. Dieser Befund ist nur durch das Photonen-Modell erklärbar.",
          hints: [
            "Klassische Wellentheorie: Mehr Intensität → mehr Energie → irgendwann Emission. Was beobachtet man wirklich?",
            "Photoeffekt: E_kin = hf − φ. Intensität beeinflusst die Anzahl, nicht die Energie der Elektronen.",
          ],
          tags: ["photoeffekt", "grenzfrequenz", "photon"],
          difficulty: 2,
        },
        {
          question:
            "Ein Gewebe wird mit Alpha-Strahlung bestrahlt und absorbiert eine Energiedosis von 0,2 Gy. Wie groß ist die Äquivalentdosis? (w_R für Alpha = 20)",
          options: ["0,2 Sv", "0,4 Sv", "2,0 Sv", "4,0 Sv", "20 Sv"],
          correctIndex: 3,
          explanation:
            "Die Äquivalentdosis H = w_R · D. Für Alpha-Strahlung ist w_R = 20. Also: H = 20 × 0,2 Gy = 4,0 Sv. Die hohe biologische Wirksamkeit von Alpha-Strahlung (w_R = 20) liegt an der extrem hohen Ionisierungsdichte (hoher LET): Auf kürzester Strecke werden viele DNA-Doppelstrangbrüche erzeugt, die kaum reparabel sind. Zum Vergleich: Photonen (w_R = 1) bei gleicher Energiedosis ergäben nur H = 0,2 Sv.",
          hints: [
            "Äquivalentdosis H = w_R · D. Einheiten: Sv = dimensionslos × Gy.",
            "Alpha-Teilchen: w_R = 20 (höchster Wichtungsfaktor aller Strahlungsarten).",
          ],
          tags: ["dosimetrie", "äquivalentdosis", "wichtungsfaktor"],
          difficulty: 1,
        },
        {
          question: "Welche Aussage zum Compton-Effekt ist FALSCH?",
          options: [
            "Ein Photon überträgt bei der Streuung Energie auf ein Elektron",
            "Die Wellenlängenänderung des gestreuten Photons hängt vom Streuwinkel ab",
            "Die Absorptionswahrscheinlichkeit steigt stark mit der Ordnungszahl Z des Gewebes",
            "Der Compton-Effekt dominiert bei Photonenenergien von 100 keV bis 10 MeV",
            "Maximale Energieübertragung erfolgt bei Rückstreuung (θ = 180°)",
          ],
          correctIndex: 2,
          explanation:
            "Der Compton-Effekt ist Z-unabhängig – er hängt nur von der Elektronendichte ab, nicht von der Ordnungszahl. Das unterscheidet ihn fundamental vom Photoeffekt, dessen Absorptionswahrscheinlichkeit mit Z⁴ steigt. Deshalb verschwindet der Knochen-Weichteil-Kontrast bei hohen Photonenenergien (Strahlentherapie-Bereich), wo Compton-Streuung dominiert. Alle anderen Aussagen sind korrekt: Δλ = h/(m_e·c) · (1 − cos θ), max bei θ = 180°.",
          hints: [
            "Vergleiche Photoeffekt (∝ Z⁴) mit Compton-Effekt. Bei welchem spielt die Ordnungszahl keine Rolle?",
            "Compton: quasi-freie Elektronen – nur deren Dichte zählt, nicht die Kernladung.",
          ],
          tags: ["compton-effekt", "streuung", "z-abhängigkeit"],
          difficulty: 2,
        },
        {
          question:
            "Ein Elektron wird auf eine kinetische Energie von 150 eV beschleunigt. Welche de-Broglie-Wellenlänge hat es ungefähr? (h = 6,63×10⁻³⁴ J·s, m_e = 9,11×10⁻³¹ kg, 1 eV = 1,6×10⁻¹⁹ J)",
          options: ["0,001 nm", "0,01 nm", "0,1 nm", "1,0 nm", "10 nm"],
          correctIndex: 2,
          explanation:
            "p = √(2·m_e·E_kin) = √(2 × 9,11×10⁻³¹ × 150 × 1,6×10⁻¹⁹) = √(4,37×10⁻⁴⁷) ≈ 6,61×10⁻²⁴ kg·m/s. λ = h/p = 6,63×10⁻³⁴ / 6,61×10⁻²⁴ ≈ 1,0×10⁻¹⁰ m = 0,1 nm. Diese Wellenlänge liegt im Bereich atomarer Gitterabstände (typisch 0,1–0,5 nm), weshalb Elektronenbeugung an Kristallgittern beobachtet werden kann (Davisson-Germer-Experiment, 1927).",
          hints: [
            "De Broglie: λ = h/p. Für kinetische Energie: p = √(2·m·E_kin).",
            "Erst p berechnen, dann λ = h/p. Achte auf konsistente Einheiten (eV → Joule).",
          ],
          tags: ["de-broglie", "materiewellen", "wellenlänge"],
          difficulty: 2,
        },
        {
          question:
            "Worin liegt der Hauptunterschied zwischen Teletherapie und Brachytherapie in der Strahlenbehandlung?",
          options: [
            "Teletherapie verwendet Alpha-Strahlung, Brachytherapie Gamma-Strahlung",
            "Bei der Teletherapie liegt die Strahlenquelle außerhalb des Körpers (LINAC), bei der Brachytherapie wird sie direkt in/an den Tumor gebracht",
            "Teletherapie ist nur für Hauttumoren geeignet, Brachytherapie für tiefe Tumoren",
            "Brachytherapie verwendet höhere Gesamtdosen als Teletherapie",
            "Teletherapie nutzt radioaktive Quellen, Brachytherapie einen Linearbeschleuniger",
          ],
          correctIndex: 1,
          explanation:
            "Teletherapie (tele = fern): Die Strahlenquelle (meist ein Linearbeschleuniger, LINAC) befindet sich außerhalb des Körpers. Elektronen werden auf 4–25 MeV beschleunigt und erzeugen am Wolfram-Target Bremsstrahlung. Brachytherapie (brachy = nah): Radioaktive Quellen (¹⁹²Ir, ¹²⁵I, ¹³⁷Cs) werden direkt in oder an den Tumor platziert. Der Dosisabfall folgt dem Abstandsquadratgesetz (D ∝ 1/r²), wodurch umliegendes Gewebe geschont wird. Typische Indikationen: Zervix-, Prostata-, Ösophaguskarzinom.",
          hints: [
            "Tele = fern (Fernseher), brachy = nah. Das beschreibt den Abstand der Strahlenquelle zum Tumor.",
            "LINAC = Linearbeschleuniger → externe Quelle. Brachytherapie: radioaktive Seeds/Drähte im Tumor.",
          ],
          tags: ["strahlentherapie", "teletherapie", "brachytherapie"],
          difficulty: 1,
        },
      ],
    },
  ],
};
