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
      diagram: "em-spectrum",
      title: "Atommodelle und Spektroskopie",
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
      content: `## Einleitung

Warum leuchtet Neon orange und Natrium gelb -- aber niemals umgekehrt? Jedes Element besitzt einen einzigartigen Satz von Energieniveaus, die wie eine Fingerabdruck-Signatur wirken. Wenn Elektronen zwischen diesen Niveaus springen, entsteht Licht ganz bestimmter Wellenlängen. Dieses Prinzip nutzt die Pulsoximetrie an deinem Finger: Zwei Wellenlängen reichen aus, um die Sauerstoffsättigung des Blutes zu messen.

**In diesem Kapitel lernst du:**
- wie das Bohrsche Atommodell diskrete Energieniveaus und Spektrallinien erklärt
- warum die Energie eines Lichtquants von seiner Frequenz und Wellenlänge abhängt
- wie Emissions- und Absorptionsspektren als Fingerabdruck von Elementen dienen
- wie das Lambert-Beer-Gesetz Extinktion mit Konzentration verknüpft
- warum die Pulsoximetrie genau 660 nm und 940 nm verwendet

---

{{DIAGRAM:em-spectrum}}

{{DIAGRAM:radioactive-decay}}

## Entwicklung der Atommodelle



Das **Thomsonsche Modell** (1904) stellte sich das Atom als eine gleichförmig positive Ladungsverteilung vor, in der Elektronen wie Rosinen in einem Kuchen eingebettet sind ("Plum-Pudding-Modell"). Es konnte keine diskreten Spektrallinien erklären und sagte keine Rückstreuung geladener Teilchen voraus.

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



Das **quantenmechanische Modell** (Schrödinger, Heisenberg, 1920er) ersetzt feste Bahnen durch **Orbitale** – Raumgebiete, in denen die Aufenthaltswahrscheinlichkeit des Elektrons ≥ 90 % beträgt. Die Wellenfunktion ψ beschreibt den Quantenzustand; |ψ|² ist die Wahrscheinlichkeitsdichte. Vier Quantenzahlen charakterisieren jeden Zustand: Hauptquantenzahl n (Schale), Nebenquantenzahl l (Orbitalform: s, p, d, f), magnetische Quantenzahl mₗ (Orientierung) und Spinquantenzahl mₛ (±½). **Pauli-Prinzip:** Keine zwei Elektronen dürfen in allen vier Quantenzahlen übereinstimmen. **Daraus folgt: Jedes Orbital der Atomhülle kann nur maximal 2 Elektronen aufnehmen** (mit entgegengesetztem Spin).

## Emission und Absorption – Spektrallinien

Wenn ein Elektron von einer höheren Schale (n₂) auf eine niedrigere (n₁) fällt, wird ein **Photon** emittiert:

> **E = hf = hc/λ**

mit h = 6,626 × 10⁻³⁴ J·s (Plancksches Wirkungsquantum), f = Frequenz, c ≈ 3 × 10⁸ m/s, λ = Wellenlänge.

**Formelklartext:** E = hf = hc/λ bedeutet: Die **Photonenenergie** ist proportional zur **Frequenz** (E ∝ f) und **umgekehrt proportional zur Wellenlänge** (E ∝ 1/λ). Höhere Frequenz (kürzere λ) → energiereicheres Photon (z. B. UV, Röntgen). **Einheiten:** E in **Joule** oder **eV** (1 eV = 1,602×10⁻¹⁹ J); λ in m → E = hc/λ in J. **MedAT-Falle:** E in eV umrechnen: E[eV] = E[J] / (1,602×10⁻¹⁹). Hα (656 nm) → E ≈ 1,89 eV.

Die Energie des Photons entspricht der Energiedifferenz: ΔE = Eₙ₂ − Eₙ₁ = hf.

Beim **Absorptionsspektrum** werden aus einem kontinuierlichen Spektrum bestimmte Wellenlängen absorbiert (dunkle Linien = Fraunhofer-Linien bei der Sonne). Beim **Emissionsspektrum** leuchten nur bestimmte Wellenlängen (helle Linien auf dunklem Hintergrund). Jedes Element besitzt ein einzigartiges Linienspektrum – ein "Fingerabdruck", der in der analytischen Chemie und Astrophysik zur Identifikation genutzt wird.

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

## Spektrophotometrie – Lambert-Beer-Gesetz

In der Praxis misst die **Spektrophotometrie** die Extinktion (Absorbanz) einer Lösung:

> **A = ε · c · d**

mit A = Extinktion (dimensionslos), ε = molarer Extinktionskoeffizient [L·mol⁻¹·cm⁻¹], c = Konzentration [mol/L], d = Schichtdicke [cm].

**Formelklartext:** A = ε·c·d heißt: **Extinktion** („optische Dichte“) ist proportional zur **Konzentration** c und zur **Schichtdicke** d. Doppelte Konzentration oder doppelte Weglänge → **doppelte** Extinktion. **A = log₁₀(I₀/I)** — nicht „Absorption in %“: Bei A = 1 ist T = I/I₀ = 10 %; bei A = 2 ist T = 1 %. **Einheiten:** [ε] = L/(mol·cm), [c] = mol/L, [d] = cm → A dimensionslos. Gilt nur bei **verdünnten** Lösungen und **monochromatischem** Licht.

Je mehr chromophore Moleküle in der Lösung und je länger der optische Weg, desto mehr Licht wird absorbiert. Die Transmission T = I/I₀ und Extinktion A = −log T = log(I₀/I) sind verknüpft. Bei A = 1 beträgt T = 10 %, bei A = 2 nur noch T = 1 %. Das Gesetz gilt nur bei monochromatischem Licht, verdünnten Lösungen und Abwesenheit von Streuung oder Fluoreszenz.

> **Merke:** Lambert-Beer gilt linear nur bei verdünnten Lösungen (c < 0,01 mol/L) und monochromatischem Licht. Bei hohen Konzentrationen treten Abweichungen auf.

Klinisch relevant: **Hämoglobin-Absorptionsspektrum**. Oxygeniertes Hämoglobin (HbO₂) und desaturiertes Hämoglobin (Hb) haben unterschiedliche Absorptionsmaxima. Der **isobestische Punkt** bei 805 nm ist die Wellenlänge, bei der HbO₂ und Hb gleich stark absorbieren – er dient als Referenzpunkt. Die **Pulsoximetrie** nutzt 660 nm (rotes Licht, Hb absorbiert stark) und 940 nm (nahes Infrarot, HbO₂ absorbiert stärker) zur nichtinvasiven Bestimmung der Sauerstoffsättigung. Aus dem Verhältnis R = (A_660_pulsatil/A_660_DC) / (A_940_pulsatil/A_940_DC) wird SpO₂ über eine empirische Kalibrierkurve berechnet.

## Rechenbeispiele

**Beispiel 1 — Photonenenergie der Hα-Linie (Balmer-Serie):**
λ = 656 nm = 656 × 10⁻⁹ m. E = hc/λ = (6,626 × 10⁻³⁴ × 3 × 10⁸) / (656 × 10⁻⁹) = 1,988 × 10⁻²⁵ / 6,56 × 10⁻⁷ = 3,03 × 10⁻¹⁹ J. In eV: E = 3,03 × 10⁻¹⁹ / 1,602 × 10⁻¹⁹ = 1,89 eV. Überprüfung: E = 13,6 eV × (1/2² − 1/3²) = 13,6 × (1/4 − 1/9) = 13,6 × 5/36 = 1,89 eV ✓.

**Beispiel 2 — Lambert-Beer: Hämoglobin-Konzentration:**
A = 0,85 (gemessen); ε = 11 300 L/(mol·cm) für Hämoglobin bei 540 nm; d = 1 cm:
c = A/(ε·d) = 0,85/11 300 = 7,52 × 10⁻⁵ mol/L = 75,2 μmol/L. Umrechnung: 75,2 μmol/L × 64 500 g/mol (M_Hb) = 4,85 g/L. Klinischer Normwert Hb: 12–17 g/dL (120–170 g/L). Die Probe ist stark verdünnt — Verdünnungsfaktor einrechnen!

**Beispiel 3 — Ionisierungsenergie von Wasserstoff:**
Grundzustand n=1: E₁ = −13,6 eV. Ionisation (n→∞): E_∞ = 0 eV. Ionisierungsenergie: 13,6 eV = 13,6 × 1,602 × 10⁻¹⁹ J = 2,18 × 10⁻¹⁸ J. Welche Wellenlänge hat das Photon? λ = hc/E = (6,626 × 10⁻³⁴ × 3 × 10⁸) / (2,18 × 10⁻¹⁸) = 91,2 nm (tiefes UV, Lyman-Grenze).

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Häufige Fragen:**
- "Welche Wellenlänge hat die Hα-Linie der Balmer-Serie?" → 656 nm (rot); Übergang n=3→2; ΔE = 1,89 eV
- "Was besagt das Bohrsche Modell?" → Elektronen auf diskreten Schalen; Eₙ = −13,6 eV/n²; Emission/Absorption nur beim Schalensprung
- "Formel Lambert-Beer?" → A = ε·c·d; A = log₁₀(I₀/I)
- "Welche Wellenlängen nutzt die Pulsoximetrie?" → 660 nm (Hb absorbiert stark) + 940 nm (HbO₂ absorbiert stärker)

**Typische Prüfungsfallen / Verwechslungen:**
- **Emissionsspektrum** (helle Linien auf dunklem Hintergrund) ≠ **Absorptionsspektrum** (dunkle Linien im Kontinuum). Emission = Atom gibt Photon ab (Übergang nach unten); Absorption = Atom nimmt Photon auf (Übergang nach oben).
- **Lyman** (UV, n→1) ≠ **Balmer** (sichtbar, n→2) ≠ **Paschen** (IR, n→3). Balmer ist die **einzige** Wasserstoff-Serie im sichtbaren Bereich — Hα = 656 nm (rot).
- **Lambert-Beer:** A ist **nicht** die Absorption in Prozent. A = log₁₀(I₀/I); bei A = 1 gilt T = I/I₀ = 10 %; bei A = 2 gilt T = 1 %. Doppelte Konzentration → doppelte A (linear nur bei Verdünnung).
- **E = hc/λ:** E in **eV** für MedAT oft nötig — 1 eV = 1,602×10⁻¹⁹ J. Kürzere Wellenlänge → **höhere** Photonenenergie.
- **Pulsoximetrie:** 660 nm (Hb absorbiert stark) und **940 nm** (HbO₂ absorbiert stärker) — nicht zwei rote Wellenlängen. Isobestischer Punkt bei 805 nm.
- **Pauli:** Jedes Orbital **maximal 2 Elektronen** (entgegengesetzter Spin).
---

## Zusammenfassung (ultrakompakt)

- **Bohr-Modell**: E_n = −13,6 eV/n²; Licht entsteht beim Übergang n_hoch → n_tief; E_Photon = |E_n2 − E_n1|
- **Photonenenergie**: E = hf = hc/λ; h = 6,626×10⁻³⁴ J·s; Balmer-Serie (sichtbar), Lyman (UV), Paschen (IR)
- **Lambert-Beer**: A = ε·c·d; A = log₁₀(I₀/I); Transmission T = I/I₀; Absorption ∝ Konzentration
- **Pulsoximetrie**: 660 nm (Hb absorbiert) + 940 nm (HbO₂ absorbiert); isobestischer Punkt bei 805 nm
- **Quantenmechanisches Modell**: Elektronen in Orbitalen (s, p, d, f); Heisenberg-Unschärfe: Δx·Δp ≥ ℏ/2`,
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
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie das Bohrsche Atommodell und erklären Sie, wie Spektrallinien entstehen. Gehen Sie dabei auf die Photonenenergie ein.",
        answer:
          'Das Bohrsche Atommodell (1913) postuliert, dass Elektronen in Wasserstoffatomen nur auf bestimmten, diskreten Kreisbahnen um den Kern umlaufen dürfen, ohne dabei Energie abzustrahlen. Diese Bahnen sind durch die Hauptquantenzahl n = 1, 2, 3, ... charakterisiert. Die zugehörigen Energieniveaus für Wasserstoff berechnen sich nach Eₙ = −13,6 eV/n². Die innerste Bahn (n=1, Grundzustand) hat die niedrigste Energie (−13,6 eV), höhere Bahnen sind energiereicher (weniger negativ). Wenn ein Elektron von einer höheren Schale n₂ auf eine niedrigere Schale n₁ fällt (n₂ > n₁), gibt es die Energiedifferenz ΔE = Eₙ₂ − Eₙ₁ in Form eines Photons ab. Die Frequenz dieses Photons ergibt sich aus E = hf, also f = ΔE/h, mit dem Planckschen Wirkungsquantum h = 6,626 × 10⁻³⁴ J·s. Da es nur diskrete Energieniveaus gibt, können auch nur diskrete Photonenfrequenzen (und damit Wellenlängen λ = c/f) emittiert werden – dies erscheint als Linienspektrum. Umgekehrt können Atome im Grundzustand Photonen mit genau dieser Energie absorbieren und das Elektron auf eine höhere Schale heben (Absorptionsspektrum). Die Balmer-Serie für Wasserstoff umfasst alle Übergänge auf n=2: Hα (656 nm, rot), Hβ (486 nm, blau-grün) und weitere Linien im sichtbaren Bereich. Diese Linienspektren dienen als eindeutiger "Fingerabdruck" jedes Elements und werden in der Spektralanalyse zur Identifikation von Elementen genutzt.',
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
            "Balmer-Serie liegt im sichtbaren Bereich (380–750 nm). Die 4→2-Linie ist die Hβ-Linie.",
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
      diagram: "em-spectrum",
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
      content: `## Einleitung

Warum ist das Einatmen von Radongas gefährlicher als das Stehen neben einem Gammastrahler -- obwohl Alpha-Teilchen nicht einmal ein Blatt Papier durchdringen? Alpha-Strahlung gibt ihre gesamte Energie auf wenigen Mikrometern ab. Im Lungengewebe bedeutet das: massive lokale DNA-Schäden mit 20-facher biologischer Wirksamkeit im Vergleich zu Gamma-Strahlung.

**In diesem Kapitel lernst du:**
- wie sich Alpha-, Beta- und Gamma-Strahlung in Teilchenart, Reichweite und Abschirmung unterscheiden
- warum radioaktiver Zerfall exponentiell verläuft und was die Halbwertszeit bedeutet
- wie Aktivität in Becquerel und biologische Wirksamkeit in Sievert gemessen werden
- welche medizinischen Isotope in Szintigraphie, PET und Schilddrüsentherapie eingesetzt werden
- warum der Strahlungs-Wichtungsfaktor von Alpha-Strahlung 20 beträgt

---

{{DIAGRAM:em-spectrum}}

{{DIAGRAM:radioactive-decay}}

## Alpha-Strahlung (α)



Alpha-Teilchen sind identisch mit einem **Helium-4-Kern**: 2 Protonen + 2 Neutronen, Masse ≈ 4 u, Ladung +2e. Typische kinetische Energien: 4–8 MeV.

Beim α-Zerfall gilt:
> ᴬ_Z X → ᴬ⁻⁴_(Z-2) Y + ⁴₂He

Ordnungszahl sinkt um 2, Massenzahl sinkt um 4. Beispiel: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He (T½ = 4,47 × 10⁹ Jahre). Weiteres Beispiel: ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He (Radon-Entstehung).

**Eigenschaften:**
- Reichweite: 3–7 cm in Luft, < 0,1 mm in Gewebe
- Abschirmung: Blatt Papier oder Hornhaut der Haut genügt
- Ionisierungsdichte: sehr hoch (≈ 10⁵ Ionenpaare/cm in Luft)
- Äußerlich: ungefährlich (wird von der toten Hautschicht gestoppt)
- Innerlich (Inhalation, Ingestion): extrem gefährlich wegen hoher lokaler Energieabgabe

> **Merke:** α-Strahlung ist äußerlich harmlos, innerlich (Radon, Polonium-210) aber hochgefährlich – Strahlungs-Wichtungsfaktor w_R = 20!

## Beta-minus-Strahlung (β⁻)

Ein Neutron im Kern wandelt sich um:
> n → p + e⁻ + ν̄ₑ (Antineutrino)

> ᴬ_Z X → ᴬ_(Z+1) Y + e⁻ + ν̄ₑ

Ordnungszahl steigt um 1, Massenzahl bleibt konstant. Beispiel: ¹⁴₆C → ¹⁴₇N + e⁻ + ν̄ₑ.

**Eigenschaften:**
- Reichweite: einige Meter in Luft, wenige cm in Gewebe
- Abschirmung: Aluminium-Platte (~3 mm) oder dünnes Plexiglas
- Kontinuierliches Energiespektrum (Neutrino trägt variablen Anteil der Energie – Pauli postulierte deshalb 1930 das Neutrino)
- Strahlungs-Wichtungsfaktor: w_R = 1

Es gibt auch den **β⁺-Zerfall** (Positronenemission): p → n + e⁺ + νₑ. Z sinkt um 1, A bleibt gleich. Beispiel: ¹⁸₉F → ¹⁸₈O + e⁺ + νₑ. Medizinisch wichtig für PET-Diagnostik.

## Gamma-Strahlung (γ)

Gamma-Strahlung ist hochenergetische **elektromagnetische Strahlung** (Photonen, E > 100 keV, typisch 100 keV – 10 MeV). Sie entsteht, wenn ein nach einem α- oder β-Zerfall im angeregten Zustand verbleibender Tochterkern in den Grundzustand übergeht (**isomerer Übergang**). Keine Änderung von Z oder A.

**Eigenschaften:**
- Reichweite: sehr hoch (theoretisch unendlich, exponentiell geschwächt)
- Abschirmung: dicke Schichten Blei (mehrere cm) oder Beton (mehrere Dezimeter)
- Ionisierungsdichte: gering pro Wegstrecke, aber große Reichweite in Gewebe
- Strahlungs-Wichtungsfaktor: w_R = 1

| Strahlung | Teilchen | Ladung | Abschirmung | Z-Änderung | A-Änderung | w_R |
|-----------|----------|--------|-------------|------------|------------|-----|
| α | He-4-Kern | +2e | Papier | −2 | −4 | 20 |
| β⁻ | Elektron | −1e | Aluminium | +1 | 0 | 1 |
| β⁺ | Positron | +1e | Aluminium | −1 | 0 | 1 |
| γ | Photon | 0 | Blei/Beton | 0 | 0 | 1 |

**Ionisierende Strahlung beim radioaktiven Zerfall:** Beim Zerfall radioaktiver Substanzen können **Alpha-, Beta- und Gamma-Strahlung** freigesetzt werden – alle drei sind **ionisierend** (können Elektronen aus Atomen lösen). **Infrarotstrahlung** ist **nicht** ionisierend und gehört nicht zu den beim Kernzerfall freigesetzten Strahlungsarten. Typische Falle: „Infrarot ist eine ionisierende Strahlungsart beim Zerfall“ ist **falsch**.

**Kernspaltung (z. B. Uran):** Bei der **Kernspaltung** zur Energiegewinnung werden **Neutronen** benötigt – ein Neutron trifft auf einen schweren Kern (z. B. ²³⁵U) und löst die Spaltung aus. Nicht Alpha-, Beta-Teilchen, Protonen oder Neutrinos; **Neutronen** lösen die Kettenreaktion aus.

**Massendefekt:** Die **Masse des Atomkerns** ist **etwas geringer** als die Summe der Massen der in ihm enthaltenen Nukleonen (Protonen + Neutronen). Diese Massendifferenz (Massendefekt) entspricht der **Bindungsenergie** des Kerns (E = Δm·c²). Nicht: „Die Masse des Atoms ist größer als die Summe der Nukleonen“ (das wäre falsch); auch nicht die Massenzunahme bei hohen Geschwindigkeiten oder der Massenunterschied zwischen Proton und Elektron.



## Exponentieller Zerfall und Halbwertszeit

Radioaktiver Zerfall ist ein statistischer Prozess. Die Anzahl N(t) noch nicht zerfallener Kerne nimmt exponentiell ab:

> **N(t) = N₀ · e^(−λt)**

λ = Zerfallskonstante [s⁻¹], charakteristisch für jedes Nuklid.

Die **Halbwertszeit** T½ ist die Zeit, nach der die Hälfte der Kerne zerfallen ist:

> **T½ = ln 2 / λ = 0,693 / λ**

Äquivalent: N(T½) = N₀/2.

Nach n Halbwertszeiten gilt: N(t) = N₀ · (1/2)ⁿ mit n = t/T½.

## Aktivität

Die **Aktivität** A gibt die Anzahl der Zerfälle pro Sekunde an:

> **A = λ · N [Bq]**

1 Becquerel (Bq) = 1 Zerfall/s. Frühere Einheit: 1 Curie (Ci) = 3,7 × 10¹⁰ Bq (Aktivität von 1 g ²²⁶Ra).

Da N(t) = N₀ · e^(−λt), gilt auch A(t) = A₀ · e^(−λt).

## Dosimetrie – Gray und Sievert

Strahlendosen werden in verschiedenen Einheiten gemessen:
- **Energiedosis D** [Gray, Gy]: absorbierte Energie pro Masse (1 Gy = 1 J/kg)
- **Äquivalentdosis H** [Sievert, Sv]: biologische Wirksamkeit = D × Strahlungs-Wichtungsfaktor w_R
- **Effektive Dosis E** [Sievert, Sv]: berücksichtigt zusätzlich Gewebewichtungsfaktoren w_T

Für γ- und β-Strahlung gilt w_R = 1 (1 Gy = 1 Sv); für α-Strahlung w_R = 20 (0,05 Gy α = 1 Sv!); für Neutronen w_R = 5–20 (energieabhängig).

> **Merke:** Gleiche absorbierte Dosis (Gy) → α-Strahlung verursacht 20× mehr biologischen Schaden als γ-Strahlung (wegen hoher Ionisierungsdichte auf kurzer Strecke).

## Rechenbeispiele

**Beispiel 1 — Halbwertszeit und Restaktivität (⁹⁹ᵐTc):**
T½ = 6 h. Patient erhält A₀ = 740 MBq um 8:00 Uhr. Aktivität um 20:00 (12 h später = 2 Halbwertszeiten):
A = A₀ × (½)² = 740 × 0,25 = 185 MBq. Nach 24 h (4 HWZ): A = 740 × (½)⁴ = 740/16 = 46,25 MBq.

**Beispiel 2 — Zerfallskonstante aus Halbwertszeit (¹³¹I):**
T½ = 8,02 Tage = 8,02 × 24 × 3600 s = 692 928 s.
λ = ln2/T½ = 0,693/692 928 = 1,0 × 10⁻⁶ s⁻¹. Aktivität einer Probe mit N = 10¹⁵ Atomen: A = λ·N = 1,0 × 10⁻⁶ × 10¹⁵ = 10⁹ Bq = 1 GBq ≈ 27 mCi.

**Beispiel 3 — Äquivalentdosis (α vs. γ):**
Absorbierte Dosis: D = 0,5 mGy. Für γ-Strahlung (w_R = 1): H = 0,5 mSv. Für α-Strahlung (w_R = 20): H = 0,5 × 20 = 10 mSv — 20-fach höhere biologische Wirksamkeit! Deshalb ist die interne Kontamination mit α-Strahlern (Radon, Polonium) besonders gefährlich.

**Beispiel 4 — C-14-Datierung (Prinzip):**
Lebende Organismen: ¹⁴C/¹²C ≈ 1,2 × 10⁻¹². T½(¹⁴C) = 5730 Jahre. Eine Knochenprobe zeigt nur 25 % der normalen ¹⁴C-Aktivität: 25 % = (½)ⁿ → n = 2 Halbwertszeiten → Alter ≈ 2 × 5730 = 11 460 Jahre.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Häufige Fragen:**
- "Was ändert sich bei α-Zerfall?" → Z−2, A−4 (Tochterkern 2 Positionen links im PSE)
- "Was ändert sich bei β⁻-Zerfall?" → Z+1, A gleich (Neutron → Proton + e⁻ + ν̄ₑ)
- "Formel Halbwertszeit?" → T½ = ln2/λ = 0,693/λ; nach n Halbwertszeiten: N = N₀·(½)ⁿ
- "Warum ist ⁹⁹ᵐTc ideal für Diagnostik?" → reiner γ-Strahler (140 keV), T½ = 6 h → niedrige Strahlendosis, gute Kameradetektion

**Typische Prüfungsfallen / Verwechslungen:**
- **Ionisierend** beim Zerfall: nur **Alpha, Beta, Gamma** – **Infrarot ist nicht ionisierend** und keine Zerfallsstrahlung.
- **Kernspaltung:** Auslösung durch **Neutronen** (nicht Alpha, Beta, Protonen, Neutrinos).
- **Massendefekt:** Kernmasse **kleiner** als Summe der Nukleonen (nicht größer; nicht Massenzunahme bei hoher Geschwindigkeit).
- Gray (Gy) ≠ Sievert (Sv): Gy = absorbierte Energie (J/kg); Sv = Gy × w_R (biologische Wirksamkeit)
- α äußerlich harmlos (Papier stoppt), aber innerlich extrem gefährlich (w_R = 20!)
- β⁺-Zerfall (Positronenemitter, Z−1, für PET) ≠ β⁻-Zerfall (Elektronemitter, Z+1, für Therapie)
---

## Zusammenfassung (ultrakompakt)

- **α-Strahlung**: ⁴He-Kern; +2e; 4–8 MeV; Reichweite cm in Luft, µm in Gewebe; Abschirmung: Papier; w_R = 20
- **β⁻-Strahlung**: Elektron; −e; bis MeV; Reichweite m in Luft, mm in Gewebe; Abschirmung: Aluminium; w_R = 1
- **γ-Strahlung**: Photon; keine Ladung; hohe Energie; Reichweite m–km; Abschirmung: Blei; w_R = 1
- **Zerfallsgesetz**: N(t) = N₀·e^(−λt); T½ = ln2/λ; A = λ·N [Becquerel = 1 Zerfall/s]
- **Äquivalentdosis**: H = D·w_R [Sievert]; α 20× biologisch wirksamer als γ!
- **Strahlenschutz**: Zeit ↓, Abstand ↑ (1/r²-Gesetz!), Abschirmung ↑`,
      lernziele: [
        "Die drei Strahlungsarten (α, β⁻, γ) hinsichtlich Teilchenart, Ladung, Reichweite und Abschirmung beschreiben.",
        "Das Zerfallsgesetz N(t) = N₀·e^(−λt) und die Halbwertszeit T½ = ln2/λ anwenden.",
        "Aktivität A = λ·N in Becquerel berechnen und auf n Halbwertszeiten bezogene Berechnungen durchführen.",
        "Die Änderung von Ordnungszahl und Massenzahl bei α- und β-Zerfällen angeben.",
        "Medizinisch relevante Isotope (⁹⁹ᵐTc, ¹³¹I, ¹⁸F) und ihre Anwendungen kennen.",
      ],
      sections: [
        {
          heading: "Die drei klassischen Strahlungsarten",
          text: 'Alpha-Strahlung: He-4-Kern, Ladung +2, geringe Reichweite (Papier), hohe Ionisierungsdichte, Z−2, A−4. Beta-minus: Elektron, Ladung −1, mittlere Reichweite (Aluminium), Z+1, A konstant. Gamma: Photon, keine Ladung, sehr hohe Reichweite (Blei/Beton nötig), keine Änderung von Z oder A. Merkregel Abschirmung: "PapierAluminiumBlei" für α, β, γ.',
          merksatz:
            "α: Papier stoppt; β: Aluminium stoppt; γ: Blei/Beton nötig. α: Z−2, A−4; β⁻: Z+1, A gleich.",
        },
        {
          heading: "Exponentieller Zerfall und Halbwertszeit",
          text: "N(t) = N₀·e^(−λt) ist das fundamentale Zerfallsgesetz. Die Zerfallskonstante λ und die Halbwertszeit T½ sind verknüpft durch T½ = ln2/λ ≈ 0,693/λ. Praktisch: Nach n = t/T½ Halbwertszeiten gilt N = N₀·(1/2)ⁿ. Aktivität A = λ·N nimmt ebenso exponentiell ab. Einheit: Becquerel (Bq) = 1/s. 1 Ci = 3,7×10¹⁰ Bq.",
          merksatz: "T½ = 0,693/λ; nach n Halbwertszeiten: N = N₀·(½)ⁿ; Aktivität A = λ·N in Bq.",
        },
        {
          heading: "Medizinische Radionuklide",
          text: "⁹⁹ᵐTc (T½=6h) ist das wichtigste Nuklid der Nuklearmedizin: reiner γ-Strahler, kurze HWZ → niedrige Strahlungsbelastung, gut verfügbar aus ⁹⁹Mo-Generator. ¹³¹I (β⁻+γ, T½=8d) wird für Schilddrüsentherapie genutzt: β⁻-Strahlung zerstört lokal Schilddrüsengewebe. ¹⁸F (β⁺, T½=110min) für PET: Positron trifft Elektron → zwei 511-keV-Gammaphotonen (Vernichtungsstrahlung). Strahlendosis: Gray (Gy) = J/kg absorbiert; Sievert (Sv) = Gy × w_R berücksichtigt biologische Wirksamkeit.",
          merksatz:
            "⁹⁹ᵐTc: γ-Strahler, T½=6h, Szintigraphie. ¹³¹I: β⁻+γ, T½=8d, Schilddrüse. ¹⁸F: β⁺, T½=110min, PET.",
        },
        {
          heading: "Medizinische Isotope im Überblick",
          text: "Die wichtigsten medizinisch genutzten Radionuklide unterscheiden sich in Zerfallsart, Halbwertszeit und klinischer Anwendung.",
          table: {
            headers: ["Isotop", "Zerfall", "T½", "Anwendung"],
            rows: [
              ["⁹⁹ᵐTc", "γ (isomer)", "6 h", "Szintigraphie (Knochen, Herz, Lunge)"],
              ["¹³¹I", "β⁻ + γ", "8 d", "Schilddrüsen-Therapie, -Diagnostik"],
              ["¹⁸F", "β⁺", "110 min", "PET (FDG)"],
              ["⁶⁷Ga", "γ", "3,3 d", "Infektions-/Tumorlokalisation"],
              ["²⁰¹Tl", "γ (EC)", "3,0 d", "Myokard-Szintigraphie"],
            ],
          },
          merksatz:
            "⁹⁹ᵐTc: γ-Strahler, T½=6h, Szintigraphie. ¹³¹I: β⁻+γ, T½=8d, Schilddrüse. ¹⁸F: β⁺, T½=110min, PET.",
        },
      ],
      merksätze: [
        "α-Zerfall: A−4, Z−2 (Tochterkern 2 Positionen links im PSE); Abschirmung: Papier.",
        "β⁻-Zerfall: A gleich, Z+1 (Tochterkern 1 Position rechts im PSE); Abschirmung: Aluminium.",
        "γ-Strahlung: keine Änderung von A oder Z; Abschirmung: Blei (mehrere cm) oder Beton.",
        "Zerfallsgesetz: N(t) = N₀·e^(−λt); Halbwertszeit T½ = ln2/λ ≈ 0,693/λ.",
        "n Halbwertszeiten: N = N₀·(½)ⁿ – praktisch für Kopfrechnen.",
        "Aktivität A = λ·N [Bq]; 1 Bq = 1 Zerfall/s; 1 Ci = 3,7×10¹⁰ Bq.",
        "¹³¹I: T½ = 8 d, β⁻+γ, Schilddrüsentherapie (destruktiv) und -diagnostik.",
        "¹⁸F: T½ = 110 min, β⁺-Strahler (Positronenemitter), Grundlage der PET.",
        "Energiedosis in Gray (Gy = J/kg); Äquivalentdosis in Sievert (Sv = Gy × w_R); α: w_R = 20.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Beschreiben Sie die drei Arten radioaktiver Strahlung und erklären Sie das Zerfallsgesetz. Welche Bedeutung haben diese Kenntnisse für die Medizin?",
        answer:
          "Die drei klassischen Strahlungsarten unterscheiden sich grundlegend in Teilchenart, Ladung und Durchdringungsvermögen. Alpha-Strahlung besteht aus Helium-4-Kernen (2 Protonen, 2 Neutronen, Ladung +2e), hat eine Reichweite von nur wenigen Zentimetern in Luft und wird von einem Blatt Papier oder der Epidermis gestoppt. Bei α-Zerfall sinkt die Ordnungszahl um 2 und die Massenzahl um 4. Beta-minus-Strahlung besteht aus Elektronen, die entstehen, wenn im Kern ein Neutron zu einem Proton, einem Elektron und einem Antineutrino zerfällt. Die Reichweite beträgt einige Meter in Luft; Aluminium (ca. 3 mm) reicht zur Abschirmung. Die Ordnungszahl steigt um 1, die Massenzahl bleibt konstant. Gamma-Strahlung ist hochenergetische elektromagnetische Strahlung, die beim Übergang angeregter Kerne in den Grundzustand entsteht; sie ändert weder A noch Z, hat aber die höchste Durchdringungsfähigkeit und erfordert Blei- oder Betonabschirmung. Radioaktiver Zerfall folgt dem Exponentialgesetz N(t) = N₀·e^(−λt) mit Halbwertszeit T½ = ln2/λ. Medizinisch bedeutsam: ⁹⁹ᵐTc als reiner γ-Strahler mit T½=6h für Szintigraphie (niedrige Strahlendosis, ideal für Bildgebung); ¹³¹I mit T½=8d für Schilddrüsentherapie (β⁻-Strahlung zerstört lokales Gewebe); ¹⁸F für PET (β⁺-Strahlung erzeugt Vernichtungsstrahlung). Die Dosimetrie unterscheidet Energiedosis (Gray: absorbierte Energie pro Masse) und Äquivalentdosis (Sievert: biologische Wirksamkeit).",
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
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK ph-7-03: Röntgenstrahlung und Strahlenwirkung
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "ph-7-03",
      diagram: "em-spectrum",
      title: "Röntgenstrahlung und Strahlenwirkung",
      stichworte: [
        "Röntgenröhre",
        "Bremsstrahlung",
        "Charakteristische Strahlung",
        "Schwächungsgesetz",
        "Halbwertsschichtdicke",
        "Photoelektrischer Effekt",
        "Compton-Effekt",
        "DNA-Doppelstrangbruch",
        "Stochastische Effekte",
        "Deterministische Effekte",
        "ALARA-Prinzip",
        "Bergonié-Tribondeau",
      ],
      content: `## Einleitung

Warum erscheinen Knochen im Röntgenbild weiß, Lunge aber fast schwarz? Calcium hat eine hohe Ordnungszahl und absorbiert Röntgenstrahlung viel stärker als luftgefülltes Lungengewebe. Aber Röntgenstrahlung kann auch Schäden verursachen: Wie unterscheidet man einen Strahlenschaden, der erst ab einer Schwellendosis auftritt, von einem Krebsrisiko, das mit jeder noch so kleinen Dosis steigt?

**In diesem Kapitel lernst du:**
- wie Bremsstrahlung und charakteristische Strahlung in der Röntgenröhre entstehen
- warum Röntgenstrahlung exponentiell im Gewebe geschwächt wird
- wie direkte und indirekte Strahlenwirkung DNA-Schäden verursachen
- was deterministische von stochastischen Strahlenschäden unterscheidet
- warum das ALARA-Prinzip Abstand, Zeit und Abschirmung kombiniert

---

{{DIAGRAM:em-spectrum}}

{{DIAGRAM:radioactive-decay}}

## Entstehung von Röntgenstrahlung



In einer **Röntgenröhre** werden Elektronen aus einer Glühkathode emittiert und durch eine Hochspannung (typisch 30–150 kV) zur Anode (meist Wolfram) beschleunigt. Beim Auftreffen auf die Anode entstehen zwei Arten von Röntgenstrahlung:

**1. Bremsstrahlung:** Die Elektronen werden im Coulomb-Feld der Atome abgebremst. Die dabei abgegebene kinetische Energie wird als Photon emittiert. Es entsteht ein kontinuierliches Spektrum mit einer minimalen Wellenlänge λ_min = hc/(e·U), entsprechend der maximalen Photonenenergie E_max = e·U. Mit U = 100 kV ergibt sich E_max = 100 keV.



**2. Charakteristische Strahlung:** Wenn ein eintreffendes Elektron ein kernnahes Elektron aus dem Wolframatom schlägt (K-Schale), fällt ein Elektron von einer äußeren Schale (L, M) in die entstehende Lücke und emittiert dabei ein Photon mit einer für Wolfram spezifischen Energie (diskrete Linien: Kα ≈ 59 keV, Kβ ≈ 67 keV für Wolfram). Diese Linien überlagern das Bremsspektrum.

> **Merke:** Bremsstrahlung = kontinuierliches Spektrum (abhängig von Beschleunigungsspannung). Charakteristische Strahlung = diskrete Linien (abhängig vom Anodenmaterial). Kurzregel: λ_min [pm] ≈ 1240/U [kV].

## Röntgenabsorption im Gewebe

Röntgenphotonen werden durch drei Wechselwirkungen geschwächt:
- **Photoelektrischer Effekt** (dominiert bei niedrigen Energien < 100 keV, Abhängigkeit ∝ Z⁴/E³): Photon überträgt gesamte Energie auf Hüllenelektron → Ion + freies Elektron + charakteristische Strahlung. Verantwortlich für den hohen Kontrast zwischen Knochen und Weichgewebe.
- **Compton-Effekt** (dominiert bei mittleren Energien, 100 keV–10 MeV): Photon wird an einem (quasi-)freien Elektron gestreut, gibt einen Teil seiner Energie ab. Die Wellenlängenverschiebung beträgt Δλ = (h/mₑc)(1−cosθ), maximal 0,00486 nm bei 180°-Streuung.
- **Paarbildung** (erst ab 1,02 MeV, da Ruheenergie von e⁻+e⁺ = 2×0,511 MeV): Photon erzeugt Elektron-Positron-Paar im Coulomb-Feld eines Kerns. Relevant in der Strahlentherapie (MeV-Bereich).

> **Merke:** Photoeffekt (Z⁴-Abhängigkeit) → Kontrast im Röntgenbild. Compton-Effekt → dominiert bei diagnostischen CT-Energien. Paarbildung → nur in Strahlentherapie relevant (E > 1,02 MeV).

Die **Schwächung** eines monoenergetischen Röntgenstrahls folgt dem exponentiellen Gesetz:

> **I(x) = I₀ · e^(−μx)**

μ = linearer Schwächungskoeffizient [cm⁻¹], abhängig von Photonenenergie und Material. Dichtes Material (hohe Ordnungszahl, hohe Dichte) → großes μ → starke Abschwächung. Knochen (Ca, Z=20) absorbiert mehr als Weichgewebe; Blei (Z=82) ist optimales Abschirmmaterial.

Die **Halbwertsschichtdicke** (HVL = Half Value Layer) ist die Materialdicke, die die Intensität auf die Hälfte reduziert: HVL = ln2/μ.

## Biologische Strahlenwirkung

**Direkte Wirkung:** Ionisierende Strahlung trifft direkt auf DNA-Moleküle → Einzel- oder Doppelstrangbrüche, Basenmodifikationen, Vernetzungen.

**Indirekte Wirkung (dominant, ≈70 %):** Strahlung ionisiert Wasser → Bildung freier Radikale (OH•, H•, e_aq). Diese reaktiven Spezies greifen dann die DNA an.

**DNA-Schäden:**
- Einzelstrangbrüche: oft reparierbar (Matrize vorhanden)
- Doppelstrangbrüche: schwer zu reparieren, führen zu Chromosomenaberrationen, Mutation oder Zelltod
- Bei hohen Dosen: Zelluntergang, bei mittleren: genomische Instabilität

**Strahlenempfindlichkeit** (Bergonié-Tribondeau-Gesetz, 1906): Zellen sind umso strahlenempfindlicher, je höher ihre Mitoserate und je geringer ihre Differenzierung. Reihenfolge (abnehmend):

| Empfindlichkeit | Zelltyp | Typische D₅₀ |
|----------------|---------|-------------|
| Sehr hoch | Lymphozyten | 0,5–1 Gy |
| Hoch | Knochenmarksstammzellen | 1–2 Gy |
| Mittel | Darmepithel, Gonaden | 3–5 Gy |
| Niedrig | Muskelzellen | > 10 Gy |
| Sehr niedrig | Nervenzellen | > 20 Gy |

**Strahlenwirkungstypen:**
- **Stochastische Effekte:** kein Schwellenwert, Wahrscheinlichkeit steigt linear mit Dosis; Beispiele: Krebsinduktion, Erbgutveränderungen.
- **Deterministische (nicht-stochastische) Effekte:** treten erst oberhalb einer Schwellendosis auf; Schwere nimmt mit der Dosis zu; Beispiele: Strahlenkater, Epilation, Strahlenkatarrh, akutes Strahlensyndrom.

## Strahlenschutzgrundsätze

Die drei ALARA-Prinzipien (As Low As Reasonably Achievable):
1. **Abstand:** Intensität nimmt mit 1/r² ab (Abstandsquadratgesetz) – Verdopplung des Abstands → Dosis auf ¼
2. **Zeit:** Dosis D = Dosisleistung Ḋ × Zeit t – Expositionszeit minimieren
3. **Abschirmung:** geeignetes Material zwischen Quelle und Person (Blei, Beton, Wasser)

Zusätzlich gilt das **Rechtfertigungsprinzip** (jede Strahlenexposition muss einen Nutzen haben, der das Risiko überwiegt) und das **Dosislimit** (Berufsexposition ≤ 20 mSv/Jahr, Bevölkerung ≤ 1 mSv/Jahr).

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

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Häufige Fragen:**
- "Was ist Bremsstrahlung vs. charakteristische Strahlung?" → Bremsstrahlung: kontinuierliches Spektrum (Abbremsung im Coulomb-Feld); charakteristische Strahlung: diskrete Linien (elementspezifische Schalenübergänge)
- "Warum erscheinen Knochen hell im Röntgenbild?" → höheres μ durch Ca (Z=20) → mehr Absorption → weniger Photonen erreichen Detektor
- "Unterschied stochastisch vs. deterministisch?" → stochastisch: kein Schwellenwert, Krebsrisiko ∝ Dosis; deterministisch: Schwellendosis, Schwere wächst mit Dosis
- "ALARA-Prinzip?" → Abstand ↑ (1/r²), Zeit ↓, Abschirmung ↑

**Typische Prüfungsfallen / Verwechslungen:**
- Bremsstrahlung (kontinuierlich) ≠ charakteristische Strahlung (Linienspektrum, elementspezifisch)
- Stochastisch (kein Schwellenwert, Krebsinduktion) ≠ deterministisch (Schwellendosis, Strahlenkater)
- Halbwertsschichtdicke HVL = ln2/μ — analog zur Halbwertszeit, aber für Röntgenabschirmung
- Berufsgrenzwert: ≤ 20 mSv/Jahr; Bevölkerungsgrenzwert: ≤ 1 mSv/Jahr
---

## Zusammenfassung (ultrakompakt)

- **Röntgenröhre**: Elektronen werden mit U beschleunigt → Wolfram-Anode; λ_min = hc/(eU) ≈ 1240/U[kV] pm
- **Bremsstrahlung**: kontinuierliches Spektrum; **charakteristische Strahlung**: diskrete Linien (elementspezifisch)
- **Schwächungsgesetz**: I = I₀·e^(−μx); HVL = ln2/μ; Blei 0,12 mm HVL bei 100 keV
- **Deterministische Effekte**: Schwellendosis (z.B. Strahlenkater ab 1 Gy, Knochenmark ab 3–5 Gy)
- **Stochastische Effekte**: kein Schwellenwert; Karzinogenese, Mutagenese; Risiko ∝ Dosis
- **Bergonié-Tribondeau**: strahlensensitivste Zellen = schnell teilend, undifferenziert (Keimzellen, Knochen mark, Darmepithel)
- **ALARA**: Abstand↑, Zeit↓, Abschirmung↑; Abstandsquadratgesetz: Dosis ∝ 1/r²`,
      lernziele: [
        "Die Entstehung von Bremsstrahlung und charakteristischer Strahlung in der Röntgenröhre erklären.",
        "Das Schwächungsgesetz I = I₀·e^(−μx) und die Halbwertsschichtdicke anwenden.",
        "Die direkte und indirekte Strahlenwirkung auf DNA unterscheiden und DNA-Schadenstypen nennen.",
        "Stochastische und deterministische Strahleneffekte definieren und das Schwellenwertkonzept erklären.",
        "Die Strahlenschutzgrundsätze (Abstand, Zeit, Abschirmung) anwenden und typische Strahlendosen kennen.",
      ],
      sections: [
        {
          heading: "Röntgenröhre: Brems- und charakteristische Strahlung",
          text: "Elektronen werden auf Wolfram-Anode beschleunigt (U = 30–150 kV). Bremsstrahlung: kontinuierliches Spektrum, E_max = eU. Charakteristische Strahlung: diskrete Linien bei spezifischen Energien des Anodenmaterials. λ_min = hc/(eU). Das resultierende Spektrum ist die Überlagerung beider Anteile. Je höher die Spannung, desto kürzer λ_min (härtere, durchdringendere Strahlung).",
          merksatz:
            "Röntgenröhre: Bremsstrahlung (kontinuierlich) + charakteristische Strahlung (Linien); E_max = eU; λ_min = hc/(eU).",
        },
        {
          heading: "Schwächungsgesetz und Gewebskontrast",
          text: "I = I₀·e^(−μx): Je größer μ (dichtes Material, hohe Ordnungszahl), desto stärker die Abschwächung. Knochen (Ca): μ groß → erscheint hell im Röntgenbild. Lunge (Luft): μ klein → erscheint dunkel. Kontrast im Röntgenbild basiert auf Unterschieden in μ zwischen verschiedenen Geweben. Blei (Z=82) hat das höchste μ und ist bestes Abschirmmaterial. Halbwertsschichtdicke HVL = ln2/μ.",
          merksatz:
            "I = I₀·e^(−μx); großes μ = starke Schwächung (Knochen/Blei hell im Röntgen). HVL = ln2/μ.",
        },
        {
          heading: "Biologische Wirkung und Strahlenschutz",
          text: "Direkte Wirkung: Strahlung trifft direkt DNA → Ionisation. Indirekte Wirkung (70 %): Radiolyse von Wasser → OH•-Radikale → DNA-Schäden. Doppelstrangbrüche sind die kritischsten Läsionen. Stochastische Effekte (Krebs, Mutation): kein Schwellenwert. Deterministische Effekte (Strahlenkater, Knochenmarksdepression): Schwellendosis. Strahlenschutz: ALARA – Abstand (1/r²), Zeit minimieren, Abschirmung.",
          merksatz:
            "Indirekte Wirkung dominiert (70 %): H₂O + Strahlung → OH• → DNA-Schäden. Doppelstrangbrüche = kritischste Läsion.",
        },
      ],
      merksätze: [
        "Röntgenröhre: Bremsstrahlung (kontinuierlich) + charakteristische Strahlung (elementspezifische Linien).",
        "E_max (Photon) = eU; λ_min = hc/(eU) – höhere Spannung = kurzwelligere (härtere) Strahlung.",
        "Schwächungsgesetz: I = I₀·e^(−μx); HVL = Halbwertsschichtdicke = ln2/μ.",
        "Knochen (hohe Dichte, Ca): großes μ → hell im Röntgenbild. Lunge (Luft): kleines μ → dunkel.",
        "Direkte Strahlenwirkung: Ionisation von DNA. Indirekte Wirkung (≈70 %): OH•-Radikale aus Radiolyse von Wasser.",
        "Doppelstrangbrüche der DNA: schwer reparierbar → Mutation, Chromosomenaberration oder Zelltod.",
        "Bergonié-Tribondeau: Teilende Zellen strahlenempfindlicher. Lymphozyten > Knochenmark > Darmepithel > Muskel > Nerv.",
        "Stochastische Effekte: kein Schwellenwert, Beispiel Krebsentstehung (lineare Dosis-Wirkungs-Beziehung).",
        "Deterministische Effekte: Schwellendosis, Beispiel akutes Strahlensyndrom (Schwere wächst mit Dosis).",
        "ALARA: Abstand (I ∝ 1/r²), Zeit (D = Ḋ·t), Abschirmung. CT Abdomen ≈ 10 mSv; natürliche Strahlung ≈ 2 mSv/Jahr.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie die Entstehung von Röntgenstrahlung und beschreiben Sie deren biologische Wirkung auf lebendes Gewebe.",
        answer:
          "Röntgenstrahlung entsteht in der Röntgenröhre durch Beschleunigung von Elektronen (aus einer Glühkathode) mittels einer Hochspannung von typisch 30–150 kV auf eine Wolfram-Anode. Beim Auftreffen entstehen zwei Strahlungsarten: Bremsstrahlung mit einem kontinuierlichen Energiespektrum (maximale Photonenenergie E_max = eU, wobei e die Elementarladung und U die Beschleunigungsspannung sind) und charakteristische Strahlung in Form diskreter Linien, die entstehen, wenn stoßbedingt freie Schalenplätze in der inneren Elektronenhülle durch äußere Elektronen aufgefüllt werden. Die biologische Wirkung ionisierender Strahlung auf Gewebe lässt sich in direkte und indirekte Wirkung unterteilen. Bei der direkten Wirkung treffen Strahlungsquanten unmittelbar auf DNA-Moleküle und ionisieren diese (Strangbrüche, Basenmodifikationen). Die indirekte Wirkung – quantitativ bedeutsamer (ca. 70 %) – beruht auf der Radiolyse von Wasser: H₂O + Strahlung → OH•-Radikale + H• + e⁻_aq. Diese hochreaktiven Spezies greifen ihrerseits DNA und Proteine an. Die kritischsten DNA-Läsionen sind Doppelstrangbrüche (DSB), da beide Matrizenstränge beschädigt sind und fehlerhafte Reparatur zu Chromosomenaberrationen führen kann. Bezüglich Strahlenempfindlichkeit gilt das Bergonié-Tribondeau-Gesetz: sich teilende Zellen sind vulnerabler. Strahlenwirkungen werden in stochastische (kein Schwellenwert, z.B. Krebsentstehung) und deterministische (Schwellendosis, z.B. akutes Strahlensyndrom) eingeteilt. Schutzmaßnahmen folgen dem ALARA-Prinzip.",
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
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK ph-7-04: Nuklearmedizin und Quantenphänomene
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "ph-7-04",
      diagram: "em-spectrum",
      title: "Nuklearmedizin und Quantenphänomene",
      stichworte: [
        "PET-Scan",
        "Annihilation",
        "Fluordesoxyglukose FDG",
        "SPECT-Szintigraphie",
        "MRT Kernspinresonanz",
        "Larmorfrequenz",
        "T1-Relaxation",
        "T2-Relaxation",
        "Gadolinium Kontrastmittel",
        "Photoelektrischer Effekt",
        "Welle-Teilchen-Dualismus",
        "Warburg-Effekt",
      ],
      content: `## Einleitung

Warum leuchtet ein Tumor im PET-Bild hell auf, obwohl er anatomisch im CT kaum sichtbar ist? PET misst Stoffwechselaktivität, nicht Struktur: Tumorzellen verbrauchen mehr Glukose als normales Gewebe. Ein radioaktiv markiertes Glukoseanalogon reichert sich dort an, und die beim Zerfall entstehenden Gammaphotonen verraten die genaue Position.

**In diesem Kapitel lernst du:**
- wie bei der PET Positronen mit Elektronen annihilieren und zwei 511-keV-Photonen erzeugen
- warum SPECT einen Kollimator braucht, PET aber nicht
- wie die MRT ohne ionisierende Strahlung Weichteilbilder mit exzellentem Kontrast erzeugt
- warum der Photoeffekt zeigt, dass Licht aus Teilchen besteht
- was der Welle-Teilchen-Dualismus für Licht und Materie bedeutet

---

{{DIAGRAM:em-spectrum}}

{{DIAGRAM:radioactive-decay}}

## PET – Positronen-Emissions-Tomographie





Bei der PET wird ein β⁺-strahlendes Radiopharmakon injiziert. Das emittierte Positron bewegt sich kurz durch das Gewebe (wenige mm) und trifft auf ein Elektron. Es kommt zur **Paarvernichtung (Annihilation)**:

> e⁺ + e⁻ → 2 γ-Photonen mit je 511 keV, emittiert in entgegengesetzten Richtungen (180° ± 0,5°)

Das PET-Gerät detektiert diese **Koinzidenzpaare** (zwei Photonen gleichzeitig, innerhalb eines Zeitfensters von ~10 ns). Entlang der Verbindungslinie dieser Koinzidenzen (line of response, LOR) liegt das Annihilationsereignis. Aus vielen LOR wird ein 3D-Bild rekonstruiert.

**¹⁸F-FDG (Fluordesoxyglukose):** ¹⁸F (T½=110 min) ist an Desoxyglukose gebunden. FDG wird wie Glukose in Zellen aufgenommen (via GLUT-1/GLUT-3-Transporter) und durch Hexokinase zu FDG-6-Phosphat phosphoryliert, aber dann nicht weiter metabolisiert (fehlende 2-OH-Gruppe blockiert Phosphoglukose-Isomerase) → Akkumulation in Zellen mit hohem Glukoseumsatz (**metabolic trapping**). Tumorzellen (**Warburg-Effekt**: aerobe Glykolyse trotz O₂-Angebot), Entzündungsherde (aktivierte Makrophagen) und bestimmte Hirnareale reichern FDG an → hohe Signalintensität im PET-Bild.

> **Merke:** FDG-PET zeigt Stoffwechselaktivität, nicht Anatomie – deshalb Kombination mit CT oder MRT (PET/CT, PET/MRT) für präzise Lokalisation.

Hauptanwendungen: Tumorstaging, Metastasensuche, Therapiekontrolle (Ansprechen auf Chemotherapie), kardiologische Vitalitätsdiagnostik (hibernating myocardium), neurologische Diagnostik (Alzheimer-Demenz: temporoparietales Defizit, Epilepsieherd-Lokalisation).

## SPECT – Single Photon Emission Computed Tomography

SPECT nutzt γ-Strahler (meist ⁹⁹ᵐTc, 140 keV) und eine rotierende **Gammakamera** mit einem **Kollimator** aus Blei (lässt nur annähernd parallele Photonen passieren → Ortsinformation). Aus Projektionen bei verschiedenen Winkeln (typisch 64–128 Winkel über 360°) wird ein 3D-Bild rekonstruiert (gefilterte Rückprojektion oder iterative Algorithmen).

| Eigenschaft | PET | SPECT |
|------------|-----|-------|
| Radionuklid | β⁺-Strahler (¹⁸F) | γ-Strahler (⁹⁹ᵐTc) |
| Auflösung | 4–7 mm | 8–15 mm |
| Sensitivität | Hoch | Mittel |
| Kollimator | Nicht nötig | Erforderlich (Blei) |
| Kosten | Hoch | Niedriger |
| Verfügbarkeit | Spezialisiert | Weit verbreitet |

SPECT/CT kombiniert funktionelle und anatomische Information. Klinische Anwendungen: Skelettszintigraphie (Metastasen), Myokardperfusion (⁹⁹ᵐTc-MIBI), Schilddrüsenszintigraphie, Hirnperfusion.

## MRT – Magnetresonanztomographie

Das **Kernspinresonanz-Prinzip (NMR)** beruht auf den magnetischen Eigenschaften von Atomkernen mit ungerader Protonen- oder Neutronenzahl. ¹H (Proton) ist der wichtigste Kern in der klinischen MRT (abundant in biologischem Gewebe).

Im starken äußeren Magnetfeld B₀ (1,5–3 Tesla in klinischen Geräten) orientieren sich Protonenspins parallel oder antiparallel zu B₀ und **präzedieren** mit der **Larmorfrequenz**:

> **f = γ · B₀** (γ_H = 42,58 MHz/T)

Bei B₀ = 1,5 T: f = 42,58 × 1,5 ≈ 63,9 MHz (Radiofrequenz). Ein RF-Puls genau dieser Frequenz versetzt die Längsmagnetisierung in die Transversalebene (Resonanz). Nach dem Puls relaxiert das System:

- **T1-Relaxation** (Längsrelaxation): Rückkehr der Längsmagnetisierung zu M₀; abhängig von Wechselwirkungen Proton–Umgebung (Spin-Gitter). Fett: kurzes T1 (hell in T1-Bild).
- **T2-Relaxation** (Querrelaxation): Zerfall der Transversalmagnetisierung durch Dephasierung (Spin-Spin-Relaxation). Wasser: langes T2 (hell in T2-Bild).

Durch Schaltung von **Gradientenfeldern** (zusätzliche, ortsabhängige Magnetfelder, typisch 10–80 mT/m) wird die Ortsabhängigkeit der Larmorfrequenz erzeugt → Ortskodierung in drei Dimensionen (Schichtselektion, Frequenzkodierung, Phasenkodierung).

**Kontrastmittel:** Gadolinium (Gd³⁺, paramagnetisch, 7 ungepaarte Elektronen) verkürzt T1 → Gewebe mit KM-Aufnahme erscheint in T1-Sequenzen heller (Enhancement). Cave: Nephrogene systemische Fibrose (NSF) bei schwerer Niereninsuffizienz → eGFR prüfen!

> **Merke:** T1-gewichtet: Fett hell, Wasser dunkel, KM-Enhancement. T2-gewichtet: Wasser hell, Fett dunkel. Eselsbrücke: "Wasser = Weiß in T2".

**Vorteile der MRT:** Keine ionisierende Strahlung, exzellenter Weichteilkontrast, multiplanare Bildgebung (axial, sagittal, koronar ohne Umlagerung), funktionelle Bildgebung (fMRT, Diffusions-MRT). **Kontraindikationen:** Ferromagnetische Implantate, Herzschrittmacher (älterer Generation), Cochlea-Implantate, metallische Fremdkörper (v.a. intraokular). Klaustrophobie als relative Kontraindikation.

## Photoelektrischer Effekt

Der **Photoelektrische Effekt** (Einstein, 1905) beschreibt die Emission von Elektronen aus einer Metalloberfläche beim Einfall von Licht, wenn die Photonenenergie eine minimale Schwelle überschreitet:

> **E_kin = hf − φ** (φ = Austrittsarbeit des Metalls)

Emission tritt nur auf, wenn hf ≥ φ, d.h. f ≥ f_Grenz = φ/h. Unterhalb der Grenzfrequenz wird kein Elektron emittiert – egal wie intensiv das Licht ist. Oberhalb steigt die kinetische Energie der Elektronen linear mit f. Die Intensität beeinflusst nur die Anzahl der Elektronen, nicht ihre Energie.

**Bedeutung:** Belegte den Teilchencharakter des Lichtes (Photonen) und war ein zentraler Beweis für den Welle-Teilchen-Dualismus. Einstein erhielt dafür 1921 den Nobelpreis. In der medizinischen Bildgebung ist der Photoeffekt der dominierende Wechselwirkungsmechanismus für Röntgenphotonen niedriger Energie in dichtem Gewebe (Z⁴-Abhängigkeit).

## Rechenbeispiele

**Beispiel 1 — Larmorfrequenz bei verschiedenen Feldstärken:**
γ_H = 42,58 MHz/T. Bei B₀ = 1,5 T: f = 42,58 × 1,5 = 63,87 MHz. Bei B₀ = 3,0 T: f = 42,58 × 3,0 = 127,74 MHz. Bei Ultra-Hochfeld 7 T (Forschung): f = 42,58 × 7 = 298,06 MHz. Je stärker das Feld, desto höher die Larmorfrequenz und desto besser das Signal-Rausch-Verhältnis.

**Beispiel 2 — Annihilationsenergie bei PET:**
Ruhemasse Elektron = Ruhemasse Positron = 0,511 MeV/c². Gesamte Ruheenergie: E = 2 × 0,511 = 1,022 MeV. Da Positron beim Zusammentreffen nahezu ruht (thermalisiert), werden genau 2 Photonen mit je E = 0,511 MeV = 511 keV emittiert. Wellenlänge: λ = hc/E = 1240 eV·nm / (511 000 eV) = 0,00243 nm = 2,43 pm (harte Gamma-Strahlung).

**Beispiel 3 — Photoelektrischer Effekt (Grenzfrequenz):**
Austrittsarbeit von Zink: φ = 4,3 eV = 4,3 × 1,602 × 10⁻¹⁹ J = 6,89 × 10⁻¹⁹ J.
Grenzfrequenz: f₀ = φ/h = 6,89 × 10⁻¹⁹ / 6,626 × 10⁻³⁴ = 1,04 × 10¹⁵ Hz. Grenzwellenlänge: λ₀ = c/f₀ = 3 × 10⁸ / 1,04 × 10¹⁵ = 289 nm (UV). Sichtbares Licht (400–700 nm) hat zu niedrige Frequenz → kein Photoeffekt an Zink. UV-Licht (< 289 nm) löst Elektronen aus.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Häufige Fragen:**
- "Warum 511 keV bei der PET?" → Ruheenergie eines Elektrons = m_e·c² = 0,511 MeV; Annihilation wandelt Ruhemasse beider Teilchen vollständig in Energie um
- "Larmorfrequenz bei 1,5 T?" → f = 42,58 MHz/T × 1,5 T ≈ 64 MHz; bei 3,0 T ≈ 128 MHz
- "T1 vs. T2?" → T1 = Längsrelaxation (Spin-Gitter, Fett hell); T2 = Querrelaxation (Spin-Spin, Wasser hell)
- "Warum reichert FDG sich in Tumoren an?" → Warburg-Effekt: erhöhter Glukosestoffwechsel; FDG nach Phosphorylierung blockiert → metabolic trapping

**Typische Prüfungsfallen / Verwechslungen:**
- PET (β⁺-Strahler, kein Kollimator nötig, Koinzidenz, höhere Auflösung) ≠ SPECT (γ-Strahler, Kollimator nötig, günstiger)
- T1 ≠ T2: T1 = Längsmagnetisierung erholt sich; T2 = Transversalmagnetisierung zerfällt durch Dephasierung
- Photoeffekt: Intensität beeinflusst Anzahl der emittierten Elektronen — die kinetische Energie hängt nur von der Frequenz ab
- MRT: γ_H = 42,58 MHz/T; bei 1,5 T → 64 MHz; bei 3 T → 128 MHz
- Gadolinium: paramagnetisch, verkürzt T1 → Enhancement (heller in T1-Bild); Cave NSF bei Niereninsuffizienz
- MRT: keine ionisierende Strahlung; Kontraindikationen: ferromagnetische Implantate, alte Herzschrittmacher
- Photoeffekt: E_kin = hf − φ; Emission nur wenn f ≥ f_Grenz = φ/h (Einstein, Nobelpreis 1921)
---

## Zusammenfassung (ultrakompakt)

- **PET**: β⁺-Zerfall → Positron + Elektron → Annihilation → 2 × 511 keV γ (antiparallel) → Koinzidenzdetektion
- **¹⁸F-FDG**: T½ = 110 min; Glukoseanalogon → Anreicherung in Tumoren (Warburg-Effekt) und Gehirn
- **SPECT**: γ-Strahler (⁹⁹ᵐTc, T½ = 6 h); Kollimator nötig; Auflösung 8–15 mm; Myokardperfusion, Szintigraphie
- **MRT**: Larmor f = γ·B₀; ¹H: 42,58 MHz/T; RF-Puls kippt Spins; Relaxation (T1 = Längs-, T2 = Querrelaxation)
- **Gadolinium**: paramagnetisches KM; verkürzt T1 → heller in T1-Bild; Ausscheidung über Niere
- **Photoeffekt**: E_kin = hf − φ; kein Effekt unter Grenzfrequenz; belegte Quantennatur des Lichts (Einstein 1921)`,
      lernziele: [
        "Das Prinzip der Paarvernichtung und Koinzidenzdetektion beim PET erklären und ¹⁸F-FDG-Akkumulation begründen.",
        "SPECT und PET hinsichtlich verwendeter Radionuklide, Detektionsprinzip und Auflösung vergleichen.",
        "Die Larmorfrequenz f = γ·B₀ berechnen und T1- sowie T2-Relaxation unterscheiden.",
        "Den photoelektrischen Effekt und die Grenzfrequenzbedingung hf ≥ φ erklären.",
        "Die Kontraindikationen der MRT und den Unterschied zu ionisierenden Verfahren kennen.",
      ],
      sections: [
        {
          heading: "PET und SPECT: Funktionsprinzipien",
          text: "PET: β⁺-Strahler → Positron + Elektron → Annihilation → 2 × 511-keV-Photonen in 180°. Koinzidenzdetektion definiert die line of response; hohe Sensitivität und quantitative Auswertung. FDG (¹⁸F): Glukoseanalogon, reichert sich in stoffwechselaktiven Zellen an (Tumor, Entzündung, Gehirn). SPECT: γ-Strahler (⁹⁹ᵐTc) + Gammakamera + Kollimator; günstiger, weiter verbreitet, etwas geringere Auflösung als PET.",
          merksatz:
            "PET: β⁺ → Annihilation → 2×511 keV (180°) → Koinzidenz. SPECT: γ-Strahler + Gammakamera + Kollimator.",
        },
        {
          heading: "MRT: Kernspinresonanz und Relaxation",
          text: "¹H im Magnetfeld B₀ präzediert mit Larmorfrequenz f = γ·B₀ (γ_H = 42,58 MHz/T). RF-Puls bei f_Larmor kippt Magnetisierung in Transversalebene. T1: Längsmagnetisierung erholt sich (Spin-Gitter-Relaxation). T2: Transversalmagnetisierung zerfällt (Spin-Spin-Dephasierung). Fett kurzes T1 (hell T1-Bild); Wasser langes T2 (hell T2-Bild). Gadolinium-KM verkürzt T1 → Enhancement. Keine ionisierende Strahlung – Vorteil gegenüber CT/Röntgen.",
          merksatz:
            "Larmor: f = 42,58 MHz/T × B₀. T1: Längsrelaxation (Fett hell). T2: Querrelaxation (Wasser hell). MRT = keine ionisierende Strahlung.",
        },
        {
          heading: "Photoelektrischer Effekt und Welle-Teilchen-Dualismus",
          text: "Licht schlägt Elektronen aus Metall nur wenn hf ≥ φ (Austrittsarbeit). Unterhalb der Grenzfrequenz kein Effekt – unabhängig von der Intensität. E_kin = hf − φ. Beweis für Teilchennatur des Lichtes (Photonen). Welle-Teilchen-Dualismus: Licht verhält sich je nach Experiment als Welle (Beugung, Interferenz) oder Teilchen (Photoeffekt, Compton-Effekt). De-Broglie: auch Materie hat Welleneigenschaften (λ = h/p).",
          merksatz:
            "Photoeffekt: E_kin = hf − φ; Emission nur wenn f ≥ f_Grenz = φ/h. Belegt Photonennatur des Lichts.",
        },
      ],
      merksätze: [
        "PET: β⁺-Strahler → Annihilation → 2 Gamma-Photonen je 511 keV unter 180°; Koinzidenzdetektion.",
        "¹⁸F-FDG: Desoxyglukose akkumuliert in Hochumsatz-Zellen (Tumor, Hirn); T½=110 min.",
        "SPECT: γ-Strahler (⁹⁹ᵐTc) + Gammakamera mit Blei-Kollimator; 3D-Rekonstruktion aus Projektionen.",
        "MRT: ¹H im B₀-Feld präzediert mit Larmorfrequenz f = γ·B₀ (γ_H = 42,58 MHz/T).",
        "Bei B₀ = 1,5 T: f_Larmor ≈ 64 MHz; bei 3,0 T: f ≈ 128 MHz.",
        "T1-Relaxation: Längsmagnetisierung erholt sich; Fett hat kurzes T1 → hell im T1-Bild.",
        "T2-Relaxation: Transversalmagnetisierung zerfällt durch Dephasierung; Wasser hat langes T2 → hell im T2-Bild.",
        "Gadolinium-KM: paramagnetisch, verkürzt T1 → Gewebe mit KM erscheint in T1 heller (Enhancement).",
        "Photoelektrischer Effekt: E_kin = hf − φ; Grenzfrequenz f_Grenz = φ/h; kein Elektron unter Grenzfrequenz.",
        "MRT: keine ionisierende Strahlung; Kontraindikationen: ferromagnetische Implantate, alte Herzschrittmacher.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Beschreiben Sie das Prinzip der PET und erklären Sie, wie ¹⁸F-FDG zur Tumordiagnostik eingesetzt wird.",
        answer:
          "Die Positronen-Emissions-Tomographie (PET) ist ein nuklearmedizinisches Schnittbildverfahren, das auf dem β⁺-Zerfall radioaktiver Nuklide beruht. Das häufigste Radiopharmakon ist ¹⁸F-Fluordesoxyglukose (¹⁸F-FDG). ¹⁸F zerfällt mit einer Halbwertszeit von 110 Minuten unter Emission eines Positrons (β⁺-Zerfall). Das Positron bewegt sich wenige Millimeter durch Gewebe, bis es auf ein Elektron trifft und mit diesem annihiliert (Paarvernichtung): e⁺ + e⁻ → 2 Gammaphotonen mit je 511 keV, die sich unter exakt 180° voneinander wegbewegen (Impulserhaltung). Der PET-Scanner enthält einen Ring von Szintillationsdetektoren, die Koinzidenzereignisse registrieren: Werden zwei 511-keV-Photonen innerhalb eines kurzen Zeitfensters (~10 ns) auf gegenüberliegenden Detektoren registriert, liegt das Annihilationsereignis auf der Verbindungslinie (Line of Response, LOR). Aus hunderttausenden solcher LOR wird mittels tomographischer Rekonstruktionsalgorithmen ein dreidimensionales Bild der Nuklidverteilung berechnet. FDG wird wie normale Glukose über GLUT-Transporter in Zellen aufgenommen und von Hexokinase phosphoryliert, aber nicht weiter metabolisiert (da die 2-OH-Gruppe fehlt). In Zellen mit hohem Glukosestoffwechsel – Tumorzellen (Warburg-Effekt), aktive Entzündungsherde, Hirngewebe – akkumuliert FDG. Klinische Anwendungen: Tumorstaging (Lokalisation von Primärtumor und Metastasen), Therapiekontrolle (Ansprechen auf Chemotherapie), Suche nach unbekanntem Primärtumor (CUP-Syndrom), kardiologische Vitalitätsdiagnostik (Nachweis hibernating myocardium), neurologisch-psychiatrische Diagnostik (Alzheimer-Demenz, Epilepsieherd-Lokalisation). Meist wird PET mit CT oder MRT kombiniert (PET/CT, PET/MRT), um funktionelle und anatomische Information zu fusionieren.",
      },
      klinischerBezug:
        "¹⁸F-FDG-PET/CT: Goldstandard für Tumorstaging, Therapiekontrolle. MRT: kein Strahlenrisiko, bester Weichteilkontrast – bevorzugt bei Kinder, Gehirn, Gelenke, Becken. SPECT/CT mit ⁹⁹ᵐTc: Skelettszintigraphie, Myokardperfusion, Schilddrüsenszintigraphie.",
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
            "Bei der Paarvernichtung (Annihilation) treffen ein Positron und ein Elektron aufeinander. Die Gesamtenergie wird nach E = mc² vollständig in Strahlungsenergie umgewandelt. Die Ruhemasse eines Elektrons beträgt m_e = 9,109×10⁻³¹ kg, entsprechend einer Ruheenergie von m_e·c² ≈ 0,511 MeV = 511 keV. Da Positron und Elektron jeweils 511 keV Ruhemasse haben, entstehen zwei Photonen mit je 511 keV (der Impuls des Positrons ist vor der Annihilation klein, daher sind die Photonen nahezu exakt antiparallel). Der konstante Wert 511 keV ist charakteristisch für alle Paarvernichtungsereignisse und erlaubt eine eindeutige Identifikation im Detektor.",
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
            "Der Warburg-Effekt (Otto Warburg, 1924) beschreibt die bevorzugte Nutzung aerober Glykolyse durch Tumorzellen, selbst bei ausreichend Sauerstoff. Tumorzellen überexprimieren Glukose-Transporter (GLUT1, GLUT3) und Hexokinase, nehmen daher vermehrt Glukose (und FDG) auf. Nach Aufnahme wird FDG von der Hexokinase zu FDG-6-Phosphat phosphoryliert. Da die 2-Hydroxylgruppe der natürlichen Glukose bei FDG durch Fluor ersetzt ist, kann das Enzym Phosphoglukose-Isomerase FDG-6-Phosphat nicht weiter umwandeln. FDG-6-Phosphat ist auch zu polar, um die Zellmembran zu verlassen und akkumuliert intrazellulär. In normalen Zellen mit niedrigerem Glukoseumsatz ist die Anreicherung geringer, was den Tumorkontrast im PET-Bild erzeugt.",
          hints: [
            'FDG = Desoxyglukose. "Desoxy" bedeutet: eine OH-Gruppe fehlt. Was passiert nach der Phosphorylierung durch Hexokinase?',
            "Tumorzellen: Warburg-Effekt = hoher Glukosestoffwechsel. FDG: wird aufgenommen, aber metabolisch blockiert → Akkumulation.",
          ],
          tags: ["fdg", "warburg-effekt", "tumorstoffwechsel"],
          difficulty: 2,
        },
        {
          question:
            "Ein MRT-Gerät arbeitet mit einem Magnetfeld B₀ = 3,0 Tesla. Welche Larmorfrequenz haben die ¹H-Protonen? (γ_H = 42,58 MHz/T)",
          options: ["42,58 MHz", "63,87 MHz", "85,16 MHz", "127,74 MHz", "212,9 MHz"],
          correctIndex: 3,
          explanation:
            "f = γ_H · B₀ = 42,58 MHz/T × 3,0 T = 127,74 MHz ≈ 127,7 MHz. Diese Frequenz liegt im UKW-Bereich (FM-Radio: 87–108 MHz – etwas höher). Zum Vergleich: bei 1,5 T (das häufigste klinische MRT) beträgt f ≈ 64 MHz. Der RF-Puls (Hochfrequenzpuls) muss exakt die Larmorfrequenz haben, um Resonanz zu erzeugen und die Magnetisierung in die Transversalebene zu kippen. Die Larmorfrequenz hängt linear von B₀ ab; daher benötigen 3-Tesla-Geräte andere RF-Frequenzen als 1,5-Tesla-Geräte.",
          hints: [
            "Larmorgleichung: f = γ·B₀. Einsetzen: γ_H = 42,58 MHz/T, B₀ = 3,0 T.",
            "Einheiten: MHz/T × T = MHz.",
          ],
          tags: ["larmor-frequenz", "mrt", "kernspinresonanz"],
          difficulty: 1,
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
            'Der photoelektrische Effekt zeigt, dass Licht gequantelt (in Photonen) vorliegt. Ein Photon muss mindestens die Austrittsarbeit φ des Metalls aufbringen, um ein Elektron herauszuschlagen. Da E_Photon = hf, muss gelten: hf ≥ φ, also f ≥ f_Grenz = φ/h. Unterhalb dieser Grenzfrequenz werden keinerlei Elektronen emittiert – egal wie intensiv das Licht ist (viele Photonen niedriger Energie können nicht "aufaddiert" werden). Die kinetische Energie der emittierten Elektronen beträgt E_kin = hf − φ und hängt nur von der Frequenz (nicht der Intensität) ab. Die Intensität beeinflusst lediglich die Anzahl der Elektronen pro Zeiteinheit (bei f > f_Grenz). Dieser Befund ist nur durch das Photonen-Modell erklärbar, nicht durch die Wellentheorie.',
          hints: [
            "Klassische Wellentheorie würde sagen: Mehr Intensität → mehr Energie → irgendwann Emission. Was beobachtet man wirklich?",
            "Photoeffekt: E_kin = hf − φ. Emission nur wenn hf ≥ φ. Intensität beeinflusst die Anzahl, nicht die Energie der Elektronen.",
          ],
          tags: ["photoeffekt", "grenzfrequenz", "photon"],
          difficulty: 2,
        },
        {
          question:
            "Bei einer PET-Aufnahme werden gleichzeitig zwei Detektoren A und B auf gegenüberliegenden Seiten aktiviert. Was bedeutet dieses Koinzidenzsignal für die Lokalisierung des Ereignisses?",
          options: [
            "Das Annihilationsereignis hat irgendwo im Scanner stattgefunden",
            "Das Ereignis liegt auf der Verbindungslinie zwischen Detektor A und B (line of response)",
            "Das Ereignis liegt genau in der Mitte zwischen A und B",
            "Es wurden zwei verschiedene Radionuklide aktiviert",
            "Das Signal zeigt an, dass eine Fehldetektion vorliegt",
          ],
          correctIndex: 1,
          explanation:
            "Bei der PET-Koinzidenzdetektion gilt: Wenn zwei Detektoren innerhalb eines kurzen Zeitfensters (typisch 3–15 ns) gleichzeitig ein 511-keV-Photon registrieren, muss die Paarvernichtung auf der Verbindungslinie dieser beiden Detektoren stattgefunden haben (line of response, LOR). Da die beiden Annihilationsphotonen unter 180° emittiert werden und sich mit Lichtgeschwindigkeit bewegen, kommen sie quasi gleichzeitig an (kleine Zeitdifferenz erlaubt TOF-PET: time-of-flight, bestimmt genaueren Ort auf der LOR). Aus Hunderttausenden von LOR unterschiedlicher Winkel und Positionen wird mittels tomographischer Algorithmen (gefilterte Rückprojektion, OSEM) die 3D-Verteilung des Radionuklids rekonstruiert. Der Vorteil gegenüber SPECT: kein mechanischer Kollimator nötig → höhere Sensitivität.",
          hints: [
            "Zwei 511-keV-Photonen entstehen unter 180°. Wenn beide gleichzeitig auf gegenüberliegenden Detektoren ankommen…",
            "Das Ereignis liegt irgendwo auf der geraden Linie zwischen den beiden Detektoren – das ist die LOR.",
          ],
          tags: ["pet", "koinzidenzdetektion", "lor"],
          difficulty: 2,
        },
      ],
    },
  ],
};
