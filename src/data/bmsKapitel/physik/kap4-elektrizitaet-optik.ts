import type { Kapitel } from "../types";

export const physKapElektrizitaet: Kapitel = {
  id: "phys-kap5",
  title: "Elektrizitätslehre & Optik",
  subject: "physik",
  icon: "⚡",
  estimatedTime: "120 min",
  unterkapitel: [
    // === from kap5-elektrizitaetslehre ===
    {
      id: "ph-5-01",
      title: "Elektrische Ladung, Feld und Coulomb-Gesetz",
      stichworte: [
        "Elementarladung",
        "Coulomb-Gesetz",
        "Ladungserhaltung",
        "Elektrisches Feld",
        "Feldlinien",
        "Plattenkondensator",
        "Permittivität",
        "Spannung",
        "Potential",
        "Faraday-Käfig",
        "Membranpotential",
        "Gelelektrophorese",
      ],
      content: `Warum hält ein Salzgitter zusammen, warum strömen Ionen durch Kanäle, und wie entsteht das EKG-Signal? Hinter all dem stehen elektrische Kräfte — die stärkste der vier Grundkräfte auf atomarer Skala.

## Elektrische Ladung

Jede Wechselwirkung in Chemie und Biologie geht letztlich auf elektrische Ladungen zurück. Elektrische Ladung ist eine fundamentale, unveränderliche Eigenschaft der Materie. Es gibt genau zwei Arten: **positive Ladung** (getragen von Protonen) und **negative Ladung** (getragen von Elektronen). Das Grundprinzip der Elektrostatik lautet: Gleichnamige Ladungen stoßen sich ab, ungleichnamige Ladungen ziehen sich an.

Die kleinste frei vorkommende Ladung ist die **Elementarladung** e = 1,602 × 10⁻¹⁹ C. Alle beobachtbaren Ladungen sind ganzzahlige Vielfache davon — dieses Prinzip nennt man **Ladungsquantisierung**. Die SI-Einheit der Ladung ist das **Coulomb (C)**; 1 C entspricht der Ladung von ca. 6,24 × 10¹⁸ Elektronen. Das **Ladungserhaltungsgesetz** besagt: In einem abgeschlossenen System bleibt die Gesamtladung konstant. Ladung kann weder erzeugt noch vernichtet, sondern nur getrennt oder übertragen werden.

Körper werden durch **Reibung** (Triboelektrizität, Aufladung durch Reibungskontakt), **Influenz** (Ladungsverschiebung ohne Kontakt) oder **Kontakt** mit geladenen Körpern elektrisiert. Bei der Influenz wird ein leitender Körper in ein externes Feld gebracht; freie Elektronen verschieben sich, sodass eine Seite negativ und die andere positiv wird — ohne dass Ladung übertragen wird.

> **Merke:** Ladung ist immer quantisiert (ganzzahlige Vielfache von e) und in abgeschlossenen Systemen erhalten — zwei Grundprinzipien der Elektrostatik.

**Leiter, Isolatoren und Halbleiter:**
- **Leiter** (Metalle): frei bewegliche Elektronen, Widerstand steigt mit Temperatur
- **Isolatoren** (Glas, Kunststoff): keine freien Ladungsträger, hoher Widerstand
- **Halbleiter** (Silizium, Germanium): Leitfähigkeit steigt mit Temperatur oder Dotierung — Basis der modernen Elektronik und medizinischer Sensoren

## Das Coulombsche Gesetz

Das **Coulombsche Gesetz** beschreibt die Kraft zwischen zwei ruhenden Punktladungen q₁ und q₂ im Abstand r:

**F = k · |q₁ · q₂| / r²**

Dabei ist k = 1/(4πε₀) = 8,99 × 10⁹ N·m²/C² die Coulombkonstante und ε₀ = 8,854 × 10⁻¹² C²/(N·m²) die elektrische Feldkonstante (Permittivität des Vakuums). Die Kraft wirkt entlang der Verbindungslinie der beiden Ladungen. In einem Medium mit relativer Permittivität εᵣ reduziert sich die Kraft: F = k · |q₁ · q₂| / (εᵣ · r²). Wasser hat εᵣ ≈ 80 — elektrostatische Kräfte zwischen Ionen sind in wässriger Lösung ca. 80-mal schwächer als im Vakuum, was die Dissoziation von Salzen erklärt.

**Formelklartext:** F = k·|q₁·q₂|/r² heißt: Die **Kraft** ist proportional zum **Produkt der Ladungen** und **umgekehrt proportional zum Quadrat des Abstands**. Doppelter Abstand → Kraft auf **¼**; halber Abstand → Kraft **vierfach**. Im Medium (εᵣ > 1) wird F **geteilt** durch εᵣ — nicht multipliziert. **Einheiten:** [F] = N, [q] = C, [r] = m → k in N·m²/C² ✓.

Die strukturelle Analogie zum Gravitationsgesetz (F = G·m₁·m₂/r²) ist augenfällig: beide gehorchen dem **inversen Quadratgesetz**. Der entscheidende Unterschied: Die Coulombkraft kann repulsiv oder attraktiv sein, die Gravitation ist immer attraktiv. Und: Die Coulombkraft ist ca. 10³⁶-mal stärker als die Gravitation — weshalb elektromagnetische Wechselwirkungen Chemie und Biologie auf molekularer Ebene dominieren.

{{DIAGRAM:circuit-diagram}}

## Das elektrische Feld

Das **elektrische Feld E** ist eine Vektorgröße, die jedem Raumpunkt die Kraft pro Einheitsladung zuordnet:

**E = F / q₀** [N/C = V/m]

**Formelklartext:** E = F/q₀ bedeutet: **Feldstärke** = **Kraft auf eine Probeladung** geteilt durch deren Ladung. Je stärker das Feld, desto größer die Kraft auf eine gegebene Ladung (F = q·E). **Plattenkondensator:** E = U/d — bei homogener Spannung U und Abstand d ist das Feld konstant. **Einheiten:** [E] = N/C = V/m. **Nicht verwechseln:** U [V] = Potentialdifferenz (Skalar); E [V/m] = Feldstärke (Vektor).

Eine positive Probeladung q₀ erfährt in einem Feld E die Kraft F = q₀ · E. **Elektrische Feldlinien** verlaufen von positiven zu negativen Ladungen; ihre Dichte ist ein Maß für die Feldstärke. Auf leitenden Oberflächen stehen Feldlinien immer senkrecht. Das Innere eines Leiters ist feldfrei (Faradayscher Käfig).

Das Feld einer Punktladung Q: **E = k · Q / r²** (radiales Feld, nimmt mit r² ab). In einem **Plattenkondensator** (Plattenabstand d, Spannung U) ist das Feld homogen: **E = U / d**. Homogene Felder eignen sich ideal für Experimente und technische Anwendungen. Die Gelelektrophorese nutzt ein homogenes elektrisches Feld, um DNA-Fragmente oder Proteine nach Größe und Ladung zu trennen.

## Elektrisches Potential und Spannung

Das **elektrische Potential φ** an einem Punkt gibt die potentielle Energie pro Ladung an: φ = E_pot / q. Die **elektrische Spannung U** zwischen zwei Punkten ist die **Potentialdifferenz**: **U = Δφ = φ₂ − φ₁** (wobei φ₂ das Potential am Punkt mit dem Pluspol des Voltmeters, φ₁ am Minuspol). Einheit: **Volt = J/C** (1 V = 1 J/C).

**Formelklartext:** U = φ₂ − φ₁ bedeutet: **Spannung** ist die **Differenz** der Potentiale („Potentialgefälle”). Sie treibt den Ladungsfluss an: positive Ladungen fließen von **hohem** zu **niedrigem** Potential. **Vorzeichen:** Voltmeter-Plus an die Klemme mit **höherem** Potential → Anzeige positiv. Beispiel: Klemme 1 hat −3 V, Klemme 2 hat +7 V; Pluspol an 2, Minus an 1 → U = (+7) − (−3) = **+10 V**. **Einheiten:** [U] = V = J/C.

**Äquipotentialflächen** (Flächen gleichen Potentials) stehen immer senkrecht auf den Feldlinien. Entlang einer Äquipotentialfläche ist keine Arbeit zu verrichten. Biologische Zellmembranen sind Regionen mit steilem Potentialgradienten: das Ruhemembranpotential beträgt ca. −70 mV (innen negativ). Über eine Membrandicke von ~7 nm ergibt das ein elektrisches Feld von ~10⁷ V/m — vergleichbar mit dem Durchschlagsfeld von Luft.

> **Merke:** Die Spannung U = φ_A − φ_B treibt Ladungsfluss an. Positive Ladungen bewegen sich spontan von hohem zu niedrigem Potential.



{{DIAGRAM:magnetic-field-lines}}

**Kondensator und Energiespeicherung:**
Ein **Kondensator** speichert Ladung auf zwei Platten und Energie im elektrischen Feld: **C = Q/U** [Farad] und **W = ½·C·U²**. Die Kapazität steigt mit der Plattenfläche und der Permittivität des Dielektrikums und sinkt mit dem Plattenabstand: C = ε₀·εᵣ·A/d.

**Formelklartext:** **C = Q/U** — die **Kapazität** gibt an, wie viel Ladung pro Volt Spannung gespeichert wird; [C] = F = C/V. **W = ½·C·U²** — die gespeicherte **Energie** wächst mit dem Quadrat der Spannung; doppelte Spannung → **vierfache** Energie. **E = U/d** im Plattenkondensator: gleiche U, kleinerer Abstand d → stärkeres Feld E. **Einheiten:** W in J, C in F, U in V → ½·F·V² = J ✓.

In der Medizin ist der Defibrillator ein Kondensator-Entlader: C ≈ 200 µF, geladen auf ~1500 V, liefert W ≈ 225 J in Millisekunden.

> **Prüfungstipp:** Beim Coulomb-Gesetz prüft der MedAT gerne die Auswirkung von Abstandsänderungen (r → 2r: Kraft auf ¼) und den Einfluss des Mediums (εᵣ von Wasser ≈ 80). Merke dir: doppelter Abstand = Viertel der Kraft; Wasser schwächt die Kraft 80-fach.

## Rechenbeispiele

**Beispiel 1 — Coulombkraft zwischen Na⁺ und Cl⁻ (Vakuum vs. Wasser):**
Abstand r = 0,28 nm (Ionenradien-Summe). Vakuum: F = k·e²/r² = 8,99×10⁹ · (1,6×10⁻¹⁹)² / (2,8×10⁻¹⁰)² = 8,99×10⁹ · 2,56×10⁻³⁸ / 7,84×10⁻²⁰ ≈ **2,94 nN**.
In Wasser (εᵣ = 80): F_W = 2,94 nN / 80 ≈ **0,037 nN** — deshalb dissoziiert NaCl in Wasser leicht.

**Beispiel 2 — Elektrisches Feld über der Zellmembran:**
Ruhemembranpotential U = 70 mV = 0,070 V, Membrandicke d = 7 nm = 7×10⁻⁹ m.
E = U/d = 0,070 / 7×10⁻⁹ = **10⁷ V/m = 10 MV/m**.
Zum Vergleich: Durchschlagsfeldstärke von Luft ≈ 3×10⁶ V/m → die Membran „hält” ein 3× stärkeres Feld aus.

**Beispiel 3 — Gelelektrophorese: Kraft auf DNA-Fragment:**
Gel-Feldstärke E = 5 V/cm = 500 V/m. Ein DNA-Fragment (1000 bp) trägt ~2000 Elementarladungen (je 2 Phosphatgruppen pro bp).
Gesamtladung q = 2000 · 1,6×10⁻¹⁹ C = 3,2×10⁻¹⁶ C.
Kraft: F = q·E = 3,2×10⁻¹⁶ · 500 = **1,6×10⁻¹³ N ≈ 0,16 pN**.
Die tatsächliche Wanderungsgeschwindigkeit hängt von Reibung im Gel ab (größere Fragmente langsamer → Größentrennung).`,

      lernziele: [
        "Das Coulombsche Gesetz anwenden und die Kraftrichtung zwischen Ladungen bestimmen",
        "Das elektrische Feld als Kraftfeld beschreiben und Feldlinienbilder interpretieren",
        "Den Zusammenhang zwischen elektrischem Feld, Potential und Spannung erklären",
        "Die biologische Relevanz elektrostatischer Kräfte auf molekularer Ebene begründen",
        "Die Analogie und die Unterschiede zwischen Coulomb-Kraft und Gravitationskraft benennen",
      ],
      sections: [
        {
          heading: "Ladung und Coulomb-Gesetz",
          text: "Elektrische Ladung ist quantisiert (Vielfache von e = 1,602 × 10⁻¹⁹ C) und bleibt in abgeschlossenen Systemen erhalten. Das Coulombsche Gesetz F = k·|q₁·q₂|/r² beschreibt die elektrostatische Kraft zwischen Punktladungen. In Medien (z. B. Wasser, εᵣ ≈ 80) wird die Kraft drastisch reduziert, was die Löslichkeit von Ionen ermöglicht. Die Coulombkraft ist ca. 10³⁶-mal stärker als die Gravitation und dominiert daher alle chemischen und biologischen Prozesse.",
          merksatz:
            "Gleichnamige Ladungen stoßen sich ab, ungleichnamige ziehen sich an — F = k·q₁·q₂/r². Im Medium: F reduziert sich um Faktor εᵣ.",
        },
        {
          heading: "Elektrisches Feld und Potential",
          text: "Das elektrische Feld E = F/q₀ gibt die Kraft pro Probeladung an. Feldlinien laufen von + nach −, stehen senkrecht auf Leitern. Das elektrische Potential φ = E_pot/q ist die potentielle Energie pro Ladung. Die Spannung U = φ_A − φ_B treibt Ladungsfluss an. Das Membranpotential (−70 mV über 7 nm) entspricht einem Feld von ~10⁷ V/m — einer enormen biologischen Feldstärke.",
          merksatz:
            "E = U/d (Plattenkondensator). Äquipotentialflächen senkrecht auf Feldlinien. Leiterinneres: E = 0 (Faraday-Käfig).",
        },
        {
          heading: "Biologische und medizinische Relevanz",
          text: "Elektrostatische Kräfte halten Protein-Ligand-Komplexe zusammen, stabilisieren DNA-Doppelstränge (Phosphatrückgrat mit Gegenionen) und steuern Ionenkanäle. Die Gelelektrophorese trennt geladene Biomoleküle im homogenen Feld. Nervenimpulse entstehen durch spannungsgesteuerte Ionenkanäle, die auf das Membranpotential reagieren.",
          merksatz:
            "Membranpotential: ca. −70 mV (innen negativ). Elektrisches Feld über der Membran: ~10⁷ V/m.",
        },
      ],
      merksätze: [
        "Elementarladung: e = 1,602 × 10⁻¹⁹ C — kleinste freie Ladungseinheit.",
        "Coulomb-Gesetz: F = k·|q₁·q₂|/r², k = 8,99 × 10⁹ N·m²/C².",
        "Ladungserhaltung: Gesamtladung eines abgeschlossenen Systems ist konstant.",
        "Elektrisches Feld: E = F/q₀ [V/m]; Feldlinien von + nach −.",
        "Im Plattenkondensator ist das Feld überall gleich stark (E = U/d) — ideal für Experimente wie die Gelelektrophorese.",
        "In Wasser (εᵣ ≈ 80): Coulombkraft 80-mal schwächer als im Vakuum.",
        "Membranpotential: −70 mV über 7 nm ergibt E ≈ 10⁷ V/m.",
        "Faraday-Käfig: Leiterinnen sind feldfrei; E = 0 im Innern.",
        "Potential φ [V = J/C]: potentielle Energie pro Ladungseinheit.",
        "Äquipotentialflächen stehen immer senkrecht auf Feldlinien.",
      ],
      altfrage: {
        text: "Wie ändert sich die Coulombkraft zwischen zwei Punktladungen, wenn der Abstand verdreifacht wird?",
        options: [
          { id: "a", text: "Sie sinkt auf 1/3" },
          { id: "b", text: "Sie sinkt auf 1/9" },
          { id: "c", text: "Sie sinkt auf 1/27" },
          { id: "d", text: "Sie verdreifacht sich" },
          { id: "e", text: "Sie bleibt gleich" },
        ],
        correctOptionId: "b",
        explanation:
          "F = k·|q₁·q₂|/r² – inverses Quadratgesetz. Bei 3-fachem Abstand: F' = F/3² = F/9. Typischer Fehler: Verwechslung mit 1/r (Option a) oder 1/r³ (Option c).",
      },
      klinischerBezug:
        "Die Gelelektrophorese nutzt ein homogenes elektrisches Feld zur Trennung von DNA-Fragmenten und Proteinen nach Größe und Ladung — Grundlage der molekularbiologischen Diagnostik. Spannungsgesteuerte Na⁺- und K⁺-Kanäle an Nervenmembranen reagieren auf das elektrische Membranfeld (~10⁷ V/m) und erzeugen Aktionspotentiale. Ionenkanal-Mutationen führen zu Channelopathien wie dem Long-QT-Syndrom mit lebensbedrohlichen Herzrhythmusstörungen.",
      selfTest: [
        {
          question:
            "Zwei Punktladungen q₁ = +2 µC und q₂ = −4 µC befinden sich 0,1 m voneinander entfernt. Welche Aussage zur Coulombkraft ist korrekt?",
          options: [
            "Die Kraft ist repulsiv mit F ≈ 7,2 N",
            "Die Kraft ist attraktiv mit F ≈ 7,2 N",
            "Die Kraft ist repulsiv mit F ≈ 0,72 N",
            "Die Kraft ist attraktiv mit F ≈ 0,72 N",
            "Die Kraft ist null, da sich die Ladungen aufheben",
          ],
          correctIndex: 1,
          explanation:
            "F = k·|q₁·q₂|/r² = 8,99×10⁹ · 2×10⁻⁶ · 4×10⁻⁶ / (0,1)² = 8,99×10⁹ · 8×10⁻¹² / 0,01 ≈ 7,19 N ≈ 7,2 N. Da q₁ positiv und q₂ negativ sind (ungleichnamige Ladungen), ist die Kraft anziehend (attraktiv). Option A hat die richtige Zahl, aber die falsche Richtung. Option C und D haben einen Faktor-10-Fehler im Abstand. Option E ist falsch — Ladungen heben sich geometrisch nicht in der Kraftrechnung auf.",
          hints: [
            "F = k·|q₁·q₂|/r² — setze r = 0,1 m ein und berechne r² = 0,01 m².",
            "Ungleichnamige Ladungen (+ und −) ziehen sich immer an.",
          ],
          difficulty: 2,
          tags: ["coulomb", "elektrostatik", "ladung"],
        },
        {
          question:
            "Das elektrische Feld im Innern eines metallischen Hohlkörpers (Faraday-Käfig) beträgt:",
          options: [
            "Den gleichen Wert wie außen",
            "Den halben Wert des Außenfeldes",
            "Exakt null",
            "Einen negativen Wert (entgegengesetzt zum Außenfeld)",
            "Nur null, wenn der Körper geerdet ist",
          ],
          correctIndex: 2,
          explanation:
            "Im Innern eines leitenden Hohlkörpers ist das elektrische Feld exakt null, unabhängig von äußeren Feldern oder ob der Käfig geerdet ist. Freie Elektronen im Leiter verschieben sich so lange, bis das durch sie erzeugte Gegenfeld das externe Feld vollständig kompensiert. Dieses Prinzip (Faraday-Käfig) schützt empfindliche Elektronik vor elektromagnetischen Störungen und wird z. B. in MRT-Räumen (HF-Abschirmung) genutzt. Geerdetsein ändert das Innenpotential (auf 0 V gesetzt), aber das Innenfeld bleibt ohnehin null.",
          hints: [
            "In einem Leiter im Gleichgewicht können keine freien Ladungen fließen — was bedeutet das für E innen?",
            "Stichwort Influenz: Elektronen verschieben sich bis zum Kräftegleichgewicht.",
          ],
          difficulty: 1,
          tags: ["faraday-käfig", "elektrostatik", "influenz"],
        },
        {
          question:
            "Ein Plattenkondensator hat einen Plattenabstand von 2 mm und liegt an einer Spannung von 400 V. Wie groß ist das elektrische Feld zwischen den Platten?",
          options: ["0,2 × 10⁵ V/m", "2 × 10⁵ V/m", "8 × 10⁴ V/m", "4 × 10⁴ V/m", "2 × 10³ V/m"],
          correctIndex: 1,
          explanation:
            "Im homogenen Feld eines Plattenkondensators gilt: E = U/d = 400 V / (2×10⁻³ m) = 200.000 V/m = 2×10⁵ V/m. Das Feld ist homogen (überall gleich stark) und senkrecht zu den Platten gerichtet. Zum Vergleich: Das elektrische Feld über einer Neuronenmembran (−70 mV über 7 nm) beträgt ~10⁷ V/m — 50-mal stärker als in diesem Kondensator. Die Durchschlagsfeldstärke von Luft liegt bei ca. 3×10⁶ V/m.",
          hints: [
            "Für ein homogenes Feld gilt: E = U/d. Achte auf die Einheit von d (mm → m).",
            "d = 2 mm = 2 × 10⁻³ m. Teile die Spannung durch den Abstand.",
          ],
          difficulty: 1,
          tags: ["plattenkondensator", "elektrisches-feld", "spannung"],
        },
        {
          question:
            "Warum sind elektrostatische Wechselwirkungen zwischen Ionen in wässriger Lösung viel schwächer als im Vakuum?",
          options: [
            "Weil Wasser die Ionen chemisch verändert",
            "Weil die Ionen in Wasser weiter auseinander liegen",
            "Weil die relative Permittivität εᵣ von Wasser (~80) die Coulombkraft um diesen Faktor reduziert",
            "Weil die Ladungen in Wasser neutralisiert werden",
            "Weil Wasser ein Magnetfeld erzeugt, das die elektrische Kraft kompensiert",
          ],
          correctIndex: 2,
          explanation:
            "Im Coulombschen Gesetz in Medien gilt: F = k·|q₁·q₂|/(εᵣ·r²). Wasser hat eine sehr hohe relative Permittivität εᵣ ≈ 80, weil die polaren Wassermoleküle sich im Feld ausrichten und es abschirmen (Dielektrikum). Dadurch ist die Coulombkraft zwischen zwei Ionen in Wasser ca. 80-mal schwächer als im Vakuum. Das ermöglicht die Dissoziation von Salzen: Die reduzierte Anziehungskraft zwischen Na⁺ und Cl⁻ kann durch die thermische Energie (k_B·T ≈ 25 meV bei 37 °C) überwunden werden. Die Ladungen selbst bleiben unverändert.",
          hints: [
            "Das Coulombgesetz im Medium: F = k·|q₁·q₂|/(εᵣ·r²). Was bewirkt εᵣ?",
            "Polare Moleküle wie Wasser richten sich im elektrischen Feld aus und schwächen es ab.",
          ],
          difficulty: 2,
          tags: ["permittivität", "wasser", "ionenlösung"],
        },
        {
          question:
            "Das Ruhemembranpotential einer Nervenzelle beträgt −70 mV. Bei welchem Wert öffnen sich spannungsgesteuerte Na⁺-Kanäle typischerweise (Schwellenpotential)?",
          options: [
            "Bei −90 mV (Hyperpolarisation)",
            "Bei −70 mV (Ruhepotential)",
            "Bei −55 mV (Schwellenpotential)",
            "Bei +30 mV (Overshoot)",
            "Bei 0 mV (isoelektrisch)",
          ],
          correctIndex: 2,
          explanation:
            "Spannungsgesteuerte Na⁺-Kanäle öffnen sich, wenn das Membranpotential von −70 mV auf ca. −55 mV (Schwellenpotential) depolarisiert wird. Das entspricht einer Potentialänderung von +15 mV. Wird das Schwellenpotential erreicht, öffnen sich schlagartig viele Na⁺-Kanäle (positives Feedback, Hodgkin-Zyklus), Na⁺ strömt ein, und das Potential schießt auf +30 bis +40 mV (Overshoot). Danach öffnen K⁺-Kanäle, und das Potential fällt zurück. Bei −90 mV liegt Hyperpolarisation vor (z. B. nach dem Aktionspotential). Bei 0 mV wären Na⁺-Kanäle bereits inaktiviert.",
          hints: [
            "Das Schwellenpotential liegt zwischen Ruhe (−70 mV) und Overshoot (+30 mV).",
            "Spannungsgesteuerte Na⁺-Kanäle brauchen eine Depolarisation (weniger negativ) zum Öffnen.",
          ],
          difficulty: 3,
          tags: ["membranpotential", "aktionspotential", "ionenkanäle"],
        },
        {
          question:
            "Welche Aussagen sind richtig?\n\n1. Gleichnamige elektrische Ladungen stoßen sich ab.\n2. Die Coulombkraft nimmt mit dem Quadrat des Abstands ab.\n3. Das elektrische Feld im Innern eines Faraday-Käfigs ist exakt null.\n4. Die relative Permittivität von Wasser verstärkt die Coulombkraft zwischen Ionen.\n5. Im homogenen Feld eines Plattenkondensators gilt E = U/d.",
          options: ["Nur 1 und 3", "Nur 2 und 4", "Nur 1, 2, 3 und 5", "Nur 2, 3 und 4", "Alle"],
          correctIndex: 2,
          explanation:
            "Aussage 1 ist richtig (gleichnamige Ladungen: ++ oder −− stoßen sich ab). Aussage 2 ist richtig (F ∝ 1/r²). Aussage 3 ist richtig (Faraday-Käfig: E_innen = 0 durch Influenz). Aussage 4 ist falsch — die hohe relative Permittivität von Wasser (εᵣ ≈ 80) schwächt die Coulombkraft ab (F = k·q₁q₂/(εᵣ·r²), εᵣ im Nenner). Aussage 5 ist richtig (homogenes Feld: E = U/d). Richtig sind 1, 2, 3 und 5.",
          hints: [
            "Was bewirkt die relative Permittivität εᵣ im Coulombgesetz — Verstärkung oder Abschwächung?",
            "εᵣ steht im Nenner: F = k·q₁q₂/(εᵣ·r²).",
          ],
          difficulty: 2,
          tags: ["typ-k", "elektrostatik", "coulomb", "feld"],
        },
      ],
    },
    {
      id: "ph-5-02",
      title: "Strom, Widerstand und Ohmsches Gesetz",
      stichworte: [
        "Stromstärke",
        "Ohmsches Gesetz",
        "Spezifischer Widerstand",
        "Joulesche Wärme",
        "Elektrische Leistung",
        "Supraleiter",
        "Halbleiter",
        "Elektrochirurgie",
        "Defibrillation",
        "Nernst-Gleichung",
        "Ionenkanal",
        "Leitwert",
        "Impedanz",
        "Bioimpedanz",
        "BIA",
        "Wechselstromwiderstand",
      ],
      content: `Vom Aktionspotential in der Nervenzelle bis zum Stromstoß eines Defibrillators — fließende Ladungen bestimmen, wie Signale weitergegeben und Therapien durchgeführt werden.

## Elektrischer Strom

Ohne Stromfluss keine Nervenleitung, kein EKG, keine Defibrillation. **Elektrischer Strom I** ist der gerichtete Fluss elektrischer Ladungsträger. Die Stromstärke ist definiert als die pro Zeiteinheit durch einen Querschnitt fließende Ladung:

**I = ΔQ / Δt** [A = C/s]

Die Einheit ist Ampere (A). In Metallen fließen Elektronen (Leitungselektronen) — die technische Stromrichtung wurde konventionell entgegen der Elektronenflussrichtung definiert (von + nach −). In Elektrolyten (z. B. Blut, Zytoplasma) fließen positive und negative Ionen. In Halbleitern und Gasen gibt es weitere Trägerarten.

Die **Stromdichte j = I / A** [A/m²] beschreibt den Strom pro Querschnittsfläche — relevant für Heizeffekte. Mit der Driftgeschwindigkeit v_d der Elektronen und der Ladungsträgerdichte n gilt: j = n·e·v_d. Typische Driftgeschwindigkeiten in Kupfer sind winzig (~0,1 mm/s bei 1 A), während sich die elektromagnetische Wirkung mit Lichtgeschwindigkeit ausbreitet.

> **Merke:** Strom = gerichteter Ladungsfluss. In Metallen fließen Elektronen, in Elektrolyten (Blut, Zytoplasma) Ionen.

**Gleichstrom vs. Wechselstrom:**
- **Gleichstrom (DC)**: konstante Stromrichtung (Batterie, Defibrillator)
- **Wechselstrom (AC)**: periodisch wechselnde Richtung (Netz: 50 Hz, Elektrochirurgie: 300–500 kHz)
- AC ist bei 50 Hz gefährlicher als DC gleicher Amplitude (tetanische Muskelkontraktionen, Kammerflimmern ab ~100 mA)
- Hochfrequenter AC (>100 kHz) löst keine Nervenreize aus — deshalb nutzt die Elektrochirurgie HF-Strom

{{DIAGRAM:circuit-diagram}}

## Elektrischer Widerstand und Ohmsches Gesetz

Der **elektrische Widerstand R** gibt an, wie stark ein Leiter dem Stromfluss entgegenwirkt. Das **Ohmsche Gesetz** lautet:

**U = R · I** [V = Ω · A]

**Formelklartext:** U = R·I heißt: **Spannung** = **Widerstand** × **Stromstärke**. Bei konstantem R: doppelte Spannung → doppelter Strom. **R = ρ·L/A** heißt: Widerstand wächst mit der **Länge** L und sinkt mit dem **Querschnitt** A (R ∝ L, R ∝ 1/A). Doppelte Länge → doppelter R; doppelter Durchmesser → **vierfacher** Querschnitt → R auf **¼**. **Einheiten:** [U] = V, [R] = Ω, [I] = A; [ρ] = Ω·m.

Die Einheit ist Ohm (Ω). Ein Ohmscher Leiter ist linear: Verdoppelt man U, verdoppelt sich I proportional.


 Der Widerstand hängt von der **Geometrie** und dem **Material** ab:

**R = ρ · L / A**

Dabei ist ρ der spezifische Widerstand [Ω·m], L die Länge und A der Querschnitt. **R ist proportional zur Länge und umgekehrt proportional zum Querschnitt** (R ∝ l/A). Kupfer: ρ ≈ 1,7 × 10⁻⁸ Ω·m (sehr guter Leiter). Körpergewebe: ρ ≈ 0,5–3 Ω·m (schlechter Leiter, relevant für Defibrillation und Elektrounfall). Der **Leitwert G = 1/R** [Siemens, S] ist der Kehrwert des Widerstands; er wird bei Ionenkanälen bevorzugt verwendet.

**Prüfungsbeispiel (gleiches Material):** Draht 1: L₁ = 100 m, Durchmesser d₁ = 1 mm (A₁ = π·(d₁/2)²). Draht 2: L₂ = 50 m, d₂ = 2 mm (A₂ = π·(d₂/2)²). Mit R = ρ·L/A und ρ gleich: R₁/R₂ = (L₁/A₁)·(A₂/L₂) = (L₁/L₂)·(A₂/A₁) = (100/50)·((2/1)²) = 2·4 = **8** → **R₁ : R₂ = 8 : 1** (R₁ ist achtmal größer als R₂).

## Temperaturabhängigkeit des Widerstands

Für die meisten Metalle steigt der Widerstand mit der Temperatur: **R(T) = R₀ · (1 + α · ΔT)**, wobei α der Temperaturkoeffizient ist. Für Kupfer: α ≈ 3,9 × 10⁻³ K⁻¹. Bei **Supraleitern** verschwindet der Widerstand unterhalb einer kritischen Temperatur T_c vollständig (z. B. Niob bei 9,25 K). MRT-Scanner nutzen supraleitende Niob-Titan-Spulen (4 K, fl. Helium), um Magnetfelder von 1,5–7 T ohne Ohmschen Verlust aufrechtzuerhalten.

**Halbleiter** (Si, Ge) haben einen negativen Temperaturkoeffizienten: Bei steigender Temperatur nimmt der Widerstand ab (mehr freie Ladungsträger). Thermistoren (NTC-Widerstände) nutzen diesen Effekt zur Temperaturmessung.

## Elektrische Leistung und Joulesche Wärme

Die elektrische Leistung:

**P = U · I = I² · R = U² / R** [W]

**Formelklartext:** P = U·I = **Leistung** (Energie pro Zeit) im Stromkreis. Äquivalent: P = I²·R (wenn I und R bekannt) oder P = U²/R (wenn U und R bekannt). **Joulesche Wärme** Q = P·t = I²·R·t — der Widerstand erwärmt sich. **Einheiten:** [P] = W = J/s = V·A. **MedAT-Falle:** Gefährlich ist die **Stromstärke** (ab ~100 mA Kammerflimmern), nicht allein die Spannung; I = U/R — nasse Haut (R klein) → großer I bei gleicher U.

Die im Widerstand dissipierte Wärmeenergie (Joulesche Wärme) pro Zeit: P = I²·R. Dieser Effekt wird genutzt in Heizkörpern und Glühlampen — und ist in medizinischen Anwendungen relevant: Elektrochirurgie (HF-Strom → lokale Wärme → Gewebeschnitt/Koagulation), Ablationstherapie (gezielte Gewebeverödung) bei Herzrhythmusstörungen, Diathermie (therapeutische Tiefenerwärmung).

> **Merke:** P = U·I = I²·R = U²/R. Die Joulesche Wärme Q = I²·R·t ist Grundlage der Elektrochirurgie und Ablationstherapie.

**Gefährliche Stromstärken im menschlichen Körper:**

| Stromstärke | Wirkung |
|---|---|
| 1–2 mA | Wahrnehmungsschwelle (Kribbeln) |
| 10–20 mA | Tetanische Muskelkontraktion (Loslasssperre) |
| 50–100 mA | Atemmuskel-Verkrampfung, Erstickungsgefahr |
| >100 mA | Kammerflimmern (ohne Defibrillation letal) |
| >1 A | Direkte Herzschädigung, Verbrennungen |

> **Prüfungstipp:** R = ρ·L/A ist eine MedAT-Klassikerfrage. Achte besonders auf die Querschnittsfläche: Doppelter Durchmesser bedeutet vierfachen Querschnitt (A = π·(d/2)²), also R auf ein Viertel. Verwechsle nicht Durchmesser mit Radius!

## Elektrochemische Spannungsquellen und Nernst-Potential

**EMK (elektromotorische Kraft)**: Die Spannung, die eine Energiequelle (Batterie, Zelle) im Leerlauf — also ohne Stromfluss — an ihren Klemmen bereitstellt. Sie ist die treibende “Kraft” (eigentlich Energie pro Ladung) im Stromkreis.

Eine **Spannungsquelle** (Batterie, Akkumulator) erzeugt durch chemische Reaktionen eine EMK **ε** [V]. Reale Quellen haben einen **Innenwiderstand r**: U_klemme = ε − I·r. Bei hoher Stromentnahme sinkt die Klemmenspannung. Das **Nernst-Potential** sagt dir die Spannung, die ein Ionenkonzentrationsgefälle über eine Membran erzeugt — also: Wenn nur eine Ionenart durch die Membran wandern kann, welche elektrische Spannung stellt sich ein, um den Konzentrationsstrom zu stoppen? Berechnet wird es mit der Nernst-Gleichung: E = (RT/zF) · ln([Ion]_außen / [Ion]_innen). Für K⁺ ergibt sich E_K⁺ ≈ −90 mV, für Na⁺ E_Na⁺ ≈ +60 mV.

{{DIAGRAM:kirchhoff-laws}}

## Impedanz und Bioimpedanz

Bei **Wechselstrom** (AC) reicht der reine Ohmsche Widerstand R nicht aus. Kondensatoren und Spulen reagieren unterschiedlich auf verschiedene Frequenzen — ein Kondensator sperrt niedrige Frequenzen, lässt hohe durch; bei einer Spule ist es umgekehrt. Der **Gesamtwechselstromwiderstand**, der all diese Effekte zusammenfasst, heißt **Impedanz Z**:

**Z = √(R² + (X_L − X_C)²)** [Ω]

- **R**: Ohmscher Widerstand (frequenzunabhängig, Energieumwandlung in Wärme)
- **X_L = ω·L = 2π·f·L**: induktiver Blindwiderstand (Spule, steigt mit f)
- **X_C = 1/(ω·C) = 1/(2π·f·C)**: kapazitiver Blindwiderstand (Kondensator, sinkt mit f)

> **Merke:** Impedanz Z fasst zusammen, wie stark ein Wechselstromkreis den Strom hemmt. Kondensatoren sperren DC (tiefe Frequenz), lassen AC durch; Spulen umgekehrt. Das erklärt, warum Zellmembranen bei niedrigen Frequenzen als Barriere wirken, bei hohen nicht.

**Biologisches Gewebe als Impedanz-Netzwerk:**
Zellmembranen verhalten sich wie winzige Kondensatoren (C ≈ 1 µF/cm²): Lipid-Doppelschicht als Dielektrikum, leitfähiges Zytoplasma und Extrazellulärflüssigkeit als Platten. Je nach Frequenz fließt Strom unterschiedlich:

| Frequenz | Strompfad | Grund |
|---|---|---|
| Niedrig (<5 kHz) | Nur extrazellulär | Membrankapazität sperrt (X_C hoch) |
| Mittel (5–100 kHz) | Extra- und intrazellulär | X_C sinkt, Strom durchdringt Membran |
| Hoch (>100 kHz) | Gleichmäßig durch beide Kompartimente | X_C ≈ 0 |

**Bioimpedanzanalyse (BIA):**
Ein schwacher Wechselstrom (50 kHz, 800 µA) wird über Hautelektroden angelegt. Aus der gemessenen Impedanz Z lässt sich die Körperzusammensetzung bestimmen:
- **Fettgewebe**: hoher Widerstand (wenig Wasser, schlechter Leiter)
- **Muskelmasse**: niedriger Widerstand (viel Wasser + Elektrolyte)
- **Gesamtkörperwasser (TBW)**: korreliert invers mit Z

Klinische Anwendung: Ernährungsstatus bei Intensivpatienten, Dialyse-Monitoring (Überwässerung erkennen), Sportmedizin (Körperfettanteil).

**EKG und Thoraximpedanz:** Die R-Zacke im EKG hat eine Amplitude von ~1 mV, gemessen über Hautelektroden. Die Thoraximpedanz (40–100 Ω) beeinflusst die Defibrillations-Effektivität: adipöse Patienten haben höhere Impedanz → mehr Energie nötig. Moderne Defibrillatoren messen vor dem Schock die Impedanz und passen die Energieabgabe automatisch an (impedanzkompensierte Defibrillation).

> **Merke:** Bioimpedanzanalyse nutzt die frequenzabhängige Leitfähigkeit von Gewebe: Niedrige Frequenz → nur Extrazellulärraum; hohe Frequenz → auch Intrazellulärraum. Fett hat hohe, Muskel niedrige Impedanz.

## Rechenbeispiele

**Beispiel 1 — Elektrounfall: trockene vs. nasse Haut:**
**Wechselspannung (Steckdose):** Die Angabe **„230 V”** an der Steckdose bezeichnet den **Effektivwert** der sinusförmigen Wechselspannung. **Effektivwert** = die Gleichspannung, die an einem ohmschen Widerstand die **gleiche elektrische Leistung** ergeben würde. Die **Amplitude** (Maximalwert) der Sinusspannung ist **größer als 230 V**: U_amplitude = 230 V × √2 ≈ **325 V**; die Spannung wechselt also zwischen etwa +325 V und −325 V. Der **Mittelwert** der Spannung über eine Periodendauer bei Sinus ist **0** (nicht 230 V). Typische Falle: „230 V Effektivwert bedeutet, die Spannung wechselt zwischen +230 V und −230 V” ist **falsch** (das wären Amplitude = 230 V); richtig: Amplitude > 230 V, Effektivwert = 230 V.

230 V Netzspannung (Effektivwert). Trockene Haut: R ≈ 50 kΩ → I = U/R = 230/50.000 = **4,6 mA** (spürbar, nicht gefährlich).
Nasse Haut: R ≈ 1 kΩ → I = 230/1.000 = **230 mA** → akut lebensgefährlich (Kammerflimmern ab ~100 mA).
Leistung am Körper: P = U·I = 230 · 0,23 = **53 W** → Verbrennungen an Ein-/Austrittsstellen.

**Beispiel 2 — Defibrillator-Energieabgabe:**
C = 200 µF, geladen auf U = 1500 V. Gespeicherte Energie: W = ½·C·U² = ½ · 200×10⁻⁶ · (1500)² = ½ · 200×10⁻⁶ · 2,25×10⁶ = **225 J**.
Thorax-Widerstand R ≈ 75 Ω. Spitzenstrom: I_max = U/R = 1500/75 = **20 A**.
Entladezeit (τ = R·C): 75 · 200×10⁻⁶ = **15 ms** — kurz genug für effektive Defibrillation.

**Beispiel 3 — Axonaler Längswiderstand:**
Unmyelinisiertes Axon: Radius r = 0,5 µm, Länge L = 1 mm, ρ_Axoplasma = 2 Ω·m.
R = ρ·L/A = 2 · 10⁻³ / (π·(0,5×10⁻⁶)²) = 2×10⁻³ / (7,85×10⁻¹³) ≈ **2,5 GΩ**.
Zum Vergleich: 1 mm Kupferdraht gleichen Querschnitts hätte R = 1,7×10⁻⁸ · 10⁻³ / 7,85×10⁻¹³ ≈ 22 Ω — der Faktor ~10⁸ erklärt, warum Nervenleitung auf Ionenkanäle und Aktionspotentiale angewiesen ist.`,

      lernziele: [
        "Das Ohmsche Gesetz anwenden und Strom, Spannung und Widerstand berechnen",
        "Den Zusammenhang zwischen Widerstand, Geometrie und spezifischem Widerstand erläutern",
        "Elektrische Leistung und Joulesche Wärme berechnen und medizinische Anwendungen nennen",
        "Die Temperaturabhängigkeit des Widerstands für Metalle, Halbleiter und Supraleiter erklären",
        "Das Nernst-Potential als elektrochemisches Konzept für Ionenkanäle einordnen",
      ],
      sections: [
        {
          heading: "Elektrischer Strom und Ladungsfluss",
          text: "Strom I = ΔQ/Δt [A]. In Metallen fließen Elektronen (Driftgeschwindigkeit ~0,1 mm/s), in Elektrolyten Ionen. Technische Stromrichtung: von + nach −. Stromdichte j = I/A [A/m²] ist relevant für Heizeffekte. Körpergewebe leitet über Ionen (spez. Widerstand 0,5–3 Ω·m). Die Signalübertragung entlang des Nervs ist elektrochemisch: Depolarisationswellen (Aktionspotentiale) laufen mit 1–100 m/s entlang der Membran.",
          merksatz:
            "I = ΔQ/Δt [Ampere]. Technische Stromrichtung: + nach −. In Gewebe: Ionenleitung.",
        },
        {
          heading: "Ohmsches Gesetz und Widerstand",
          text: "U = R·I (Ohmsches Gesetz). R = ρ·L/A — abhängig von Material (ρ), Länge und Querschnitt. Leitwert G = 1/R [S]. Metallwiderstände steigen mit T (positiver α); Halbleiter fallen (negativer α, NTC). Supraleiter: R = 0 unter T_c. In der Physiologie: Ionenkanäle haben Leitfähigkeiten im pS-Bereich; einzelne Kanäle werden mit Patch-Clamp gemessen.",
          merksatz:
            "Widerstand wirkt wie eine Engstelle: Mehr R braucht mehr Spannung für gleichen Strom (U = R·I). Längerer Leiter → mehr R; dickerer Querschnitt → weniger R.",
        },
        {
          heading: "Elektrische Leistung und medizinische Anwendungen",
          text: "P = U·I = I²·R = U²/R [Watt]. Joulesche Wärme: Q = I²·R·t. Elektrochirurgie: HF-Strom (300–500 kHz) erzeugt lokale Wärme → Gewebeschnitt ohne Nervenreizung (zu schnell für Aktionspotential). Ablationstherapie: Hochfrequenzenergie zerstört arrhythmogenes Gewebe im Herz. Diathermie: Tiefenwärme durch hochfrequenten Strom. Defibrillation: Gleichstromstoß entsynchronisiert Kammerflimmern.",
          merksatz:
            "P = I²·R (Joulesche Wärme). Elektrochirurgie: HF-Strom → Wärme ohne Muskelreizung.",
        },
      ],

      merksätze: [
        "Widerstand ist wie eine enge Stelle im Fluss — je enger, desto mehr Druck (Spannung) braucht man für den gleichen Durchfluss (Strom). Formal: U = R·I.",
        "Stromstärke: I = ΔQ/Δt [A = C/s].",
        "Widerstand: R = ρ·L/A — größere Länge → mehr R; größerer Querschnitt → weniger R.",
        "Leistung: P = U·I = I²·R = U²/R [Watt].",
        "Joulesche Wärme: Q = I²·R·t — Basis der Elektrochirurgie.",
        "Metalle: R steigt mit T (positiver Temperaturkoeffizient α).",
        "Halbleiter/NTC: R sinkt mit T (negativer Temperaturkoeffizient).",
        "Supraleiter: R = 0 unterhalb T_c (MRT-Spulen).",
        "Leitwert G = 1/R [S = Siemens] — bevorzugt bei Ionenkanälen.",
        "Das Nernst-Potential sagt dir die Spannung, die ein Ionenkonzentrationsgefälle über eine Membran erzeugt: E = (RT/zF)·ln([außen]/[innen]).",
      ],
      altfrage: {
        text: "Bei einem Elektrounfall mit 230 V beträgt der Körperwiderstand 1000 Ω (feuchte Haut). Welcher Strom fließt durch den Körper?",
        options: [
          { id: "a", text: "0,23 mA" },
          { id: "b", text: "2,3 mA" },
          { id: "c", text: "23 mA" },
          { id: "d", text: "230 mA" },
          { id: "e", text: "2300 mA" },
        ],
        correctOptionId: "d",
        explanation:
          "I = U/R = 230 V / 1000 Ω = 0,23 A = 230 mA. Dieser Strom ist lebensbedrohlich: Ab 100 mA droht Kammerflimmern. Wechselstrom (50 Hz) ist gefährlicher als Gleichstrom gleicher Amplitude.",
      },
      klinischerBezug:
        "Die Elektrochirurgie nutzt hochfrequenten Wechselstrom (300–500 kHz), der im Gewebe durch Joulesche Wärme schneidet oder koaguliert, ohne Nerven- oder Muskelreize auszulösen (zu schnell für Aktionspotentiale). Bei der Hochfrequenz-Ablation werden arrhythmogene Herzareale durch lokale Wärmeentwicklung (I²·R) gezielt verödet. Patch-Clamp-Messungen erfassen den Leitwert einzelner Ionenkanäle im Picosiemens-Bereich und ermöglichen so die Charakterisierung von Kanalproteinen bei Herzerkrankungen.",
      selfTest: [
        {
          question:
            "Ein Widerstand von 470 Ω liegt an einer Spannung von 12 V. Wie groß ist die elektrische Leistung?",
          options: ["P ≈ 0,31 W", "P ≈ 0,026 W", "P ≈ 5640 W", "P ≈ 25,5 mW", "P ≈ 5,76 W"],
          correctIndex: 0,
          explanation:
            "P = U²/R = (12 V)² / 470 Ω = 144 / 470 ≈ 0,306 W ≈ 0,31 W. Alternativ: I = U/R = 12/470 ≈ 0,02553 A; P = U·I = 12 · 0,02553 ≈ 0,306 W. Option A wäre P = U·R (falsch). Option C verwechselt Quotient mit Produkt. Option D ≈ 25,5 mW wäre P = I²·R mit falschem I. Die korrekte Formel lautet P = U²/R oder äquivalent P = I²·R oder P = U·I.",
          hints: [
            "P = U²/R. Setze U = 12 V und R = 470 Ω ein.",
            "Alternativ: Berechne erst I = U/R, dann P = U·I.",
          ],
          difficulty: 1,
          tags: ["leistung", "ohmsches-gesetz", "widerstand"],
        },
        {
          question:
            "Welche Aussage zum spezifischen Widerstand von Körpergewebe im Vergleich zu Kupfer ist korrekt?",
          options: [
            "Körpergewebe und Kupfer haben ähnliche spezifische Widerstände (~10⁻⁸ Ω·m)",
            "Der spezifische Widerstand ist für alle Gewebe identisch (1 Ω·m)",
            "Körpergewebe leitet besser als Kupfer, da es Wasser enthält",
            "Körpergewebe hat einen ca. 10⁷–10⁸-mal höheren spezifischen Widerstand als Kupfer",
            "Kupfer leitet schlechter als Körpergewebe, da es kein ionisches Leitmedium ist",
          ],
          correctIndex: 3,
          explanation:
            "Kupfer hat ρ ≈ 1,7 × 10⁻⁸ Ω·m (hervorragender metallischer Leiter durch freie Elektronen). Körpergewebe hat je nach Typ ρ ≈ 0,5–3 Ω·m (Leitung durch Ionen). Das Verhältnis beträgt ca. 0,5 / (1,7×10⁻⁸) ≈ 3 × 10⁷ — also ca. 10⁷–10⁸-mal höherer spezifischer Widerstand bei Gewebe. Deshalb ist Körpergewebe ein schlechter Leiter. Bei der Defibrillation muss die Energie so gewählt werden, dass trotz des hohen Körperwiderstands genug Strom das Herz erreicht.",
          hints: [
            "Kupfer: ρ ≈ 1,7 × 10⁻⁸ Ω·m. Gewebe: ρ ≈ 0,5–3 Ω·m. Berechne den Faktor.",
            "Gewebe leitet ionisch (viel langsamer und schwächer als metallische Leitung).",
          ],
          difficulty: 2,
          tags: ["spezifischer-widerstand", "körpergewebe", "leitfähigkeit"],
        },
        {
          question:
            "Wie ändert sich der Widerstand eines Drahtes, wenn man ihn bei gleichem Volumen doppelt so lang zieht (Querschnitt halbiert sich dabei)?",
          options: [
            "R bleibt gleich",
            "R verdoppelt sich",
            "R vervierfacht sich",
            "R achtfacht sich",
            "R halbiert sich",
          ],
          correctIndex: 2,
          explanation:
            "Wenn der Draht bei konstantem Volumen auf doppelte Länge gestreckt wird, halbiert sich der Querschnitt (V = L·A = const → A_neu = A/2). Mit R = ρ·L/A gilt: R_neu = ρ·(2L)/(A/2) = ρ·2L·2/A = 4·ρ·L/A = 4·R_alt. Der Widerstand vervierfacht sich. In der Biologie ist analoges Denken anwendbar: Engere und längere Kapillaren haben viel höheren hydraulischen Widerstand (Hagen-Poiseuille analog zu Ohm).",
          hints: [
            "Volumen ist konstant: V = L·A. Wenn L sich verdoppelt, was passiert mit A?",
            "R = ρ·L/A. Setze L_neu = 2L und A_neu = A/2 ein.",
          ],
          difficulty: 2,
          tags: ["widerstand", "geometrie", "querschnitt"],
        },
        {
          question:
            "Welche Stromstärke ist ab ca. 100 mA durch den menschlichen Körper typischerweise lebensbedrohlich?",
          options: [
            "Sie verursacht ein kaum wahrnehmbares Kribbeln",
            "Sie verursacht schmerzhafte Muskelkontraktionen, aber kein Kammerflimmern",
            "Sie ist für den Menschen völlig harmlos",
            "Sie führt sofort zu Herzstillstand durch Asystolie",
            "Sie kann Kammerflimmern auslösen",
          ],
          correctIndex: 4,
          explanation:
            "Ab ca. 80–100 mA Körperstrom kann Kammerflimmern (ventrikuläre Fibrillation) ausgelöst werden — ein unkoordiniertes, ineffektives Zittern des Herzens, das ohne sofortige Defibrillation letal ist. Schon 1–2 mA sind wahrnehmbar (Kribbeln); 10–20 mA erzeugen tetanische Muskelkontraktionen (Loslasssperre); 50–100 mA sind schmerzhaft und können Atemmuskel-Verkrampfung auslösen; über 1 A entsteht direkte thermische Herzschädigung. Defibrillation nutzt einen kurzen Energiestoß (200–360 J), um das Kammerflimmern zu terminieren.",
          hints: [
            "Kammerflimmern ist ein unkoordiniertes Herzflimmern. Welcher Strom löst es aus?",
            "10 mA → Loslasssperre, 100 mA → Kammerflimmern, 1 A → Verbrennung.",
          ],
          difficulty: 2,
          tags: ["kammerflimmern", "elektrounfall", "strom"],
        },
        {
          question:
            "Welche der folgenden medizinischen Anwendungen nutzt primär den Effekt der Jouleschen Wärme (I²·R)?",
          options: [
            "EKG (Elektrokardiographie)",
            "EEG (Elektroenzephalographie)",
            "Hochfrequenz-Ablation bei Herzrhythmusstörungen",
            "EMG (Elektromyographie)",
            "Nervenleitgeschwindigkeitsmessung (NLG)",
          ],
          correctIndex: 2,
          explanation:
            "Die Hochfrequenz-Ablation (HF-Ablation) nutzt gezielt Joulesche Wärme: Ein HF-Strom (300–500 kHz) wird über eine Katheterelektrode ins Herzgewebe geleitet. Im Gewebe (Widerstand R) erzeugt er Wärme Q = I²·R·t — lokal bis zu 50–70 °C — und koaguliert arrhythmogenes Gewebe (z. B. bei AV-Knoten-Reentry-Tachykardie, Vorhofflimmern). EKG, EEG und EMG messen elektrische Potentiale passiv (kein therapeutischer Strom appliziert). Nervenleitgeschwindigkeit: kurze Reizstromstöße zur Stimulation, Wärmeeffekt nicht das therapeutische Ziel.",
          hints: [
            "Joulesche Wärme = Wärme durch Stromfluss. Welche Anwendung nutzt Wärme therapeutisch?",
            "Ablation = Veröden von Gewebe. Welche physikalische Energie steckt dahinter?",
          ],
          difficulty: 2,
          tags: ["ablation", "joulesche-wärme", "elektrochirurgie"],
        },
        {
          question:
            "Bei einer Bioimpedanzanalyse (BIA) wird ein Wechselstrom von 50 kHz durch den Körper geleitet. Was ist der Hauptgrund für die Verwendung dieser Frequenz statt Gleichstrom?",
          options: [
            "Gleichstrom würde den Körper verbrennen",
            "Bei 50 kHz durchdringt der Strom Zellmembranen (kapazitiver Widerstand sinkt) und erfasst extra- und intrazelluläres Wasser",
            "Nur bei 50 kHz ist der Ohmsche Widerstand des Körpers messbar",
            "Gleichstrom kann nicht durch Hautelektroden fließen",
            "Bei 50 kHz entsteht kein Magnetfeld, das den Patienten gefährden könnte",
          ],
          correctIndex: 1,
          explanation:
            "Zellmembranen verhalten sich wie Kondensatoren (Lipiddoppelschicht als Dielektrikum). Bei Gleichstrom (f = 0) ist der kapazitive Blindwiderstand X_C = 1/(2π·f·C) unendlich groß — der Strom fließt nur extrazellulär. Bei 50 kHz sinkt X_C so weit, dass der Strom auch durch die Zellen fließt und somit das Gesamtkörperwasser (intra- + extrazellulär) erfasst wird. Multi-Frequenz-BIA nutzt verschiedene Frequenzen, um Intra- und Extrazellulärwasser getrennt zu bestimmen.",
          hints: [
            "Zellmembranen = biologische Kondensatoren. X_C = 1/(2π·f·C) — was passiert bei steigender Frequenz?",
            "Niedrige Frequenz → Strom nur außen um die Zellen; hohe Frequenz → Strom durch die Zellen.",
          ],
          difficulty: 2,
          tags: ["bioimpedanz", "bia", "wechselstromwiderstand"],
        },
        {
          question:
            "Welche der folgenden Aussagen zum Ohmschen Gesetz und elektrischem Widerstand ist FALSCH?",
          options: [
            "Das Ohmsche Gesetz lautet U = R · I und gilt für Ohmsche Widerstände.",
            "Der spezifische Widerstand von Körpergewebe ist etwa 10⁷–10⁸-mal höher als der von Kupfer.",
            "Wird ein Draht bei gleichem Volumen auf doppelte Länge gezogen, verdoppelt sich sein Widerstand.",
            "Ab ca. 100 mA Körperstrom kann Kammerflimmern ausgelöst werden.",
            "Die Joulesche Wärme wird therapeutisch bei der Hochfrequenz-Ablation genutzt.",
          ],
          correctIndex: 2,
          explanation:
            "Wird ein Draht bei konstantem Volumen auf doppelte Länge gestreckt, halbiert sich sein Querschnitt (V = L·A = const). R = ρ·L/A → R_neu = ρ·(2L)/(A/2) = 4·R_alt. Der Widerstand vervierfacht sich, nicht verdoppelt. Alle anderen Aussagen sind korrekt: U = R·I für Ohmsche Leiter, Gewebewiderstand >> Kupfer, 100 mA → Kammerflimmern, und HF-Ablation nutzt I²·R-Wärme.",
          hints: [
            "R = ρ·L/A. Wenn L verdoppelt und A halbiert wird, ändert sich R um welchen Faktor?",
            "Volumen = L·A = const → wenn L × 2, dann A × ½.",
          ],
          difficulty: 2,
          tags: ["falsch-aussage", "ohmsches-gesetz", "widerstand"],
        },
      ],
    },
    {
      id: "ph-5-03",
      title: "Kirchhoffsche Gesetze und Schaltkreise",
      stichworte: [
        "Reihenschaltung",
        "Parallelschaltung",
        "Knotenregel",
        "Maschenregel",
        "Kondensator",
        "RC-Glied",
        "Zeitkonstante",
        "Defibrillator",
        "Impedanz",
        "Bioimpedanz",
        "Wheatstone-Brücke",
        "Spannungsteiler",
      ],
      content: `Ob Defibrillator, EKG-Ableitung oder Zellmembran — elektrische Schaltungen bestimmen, wie Ströme verteilt und Signale gefiltert werden. Zwei Grundprinzipien reichen aus, um all diese Systeme zu verstehen.

## Grundlegende Schaltungstypen

Ein Defibrillator rettet Leben, indem er einen Kondensator in Millisekunden über den Thorax entlädt. Ein EKG misst Herzströme über präzise Spannungsteiler. Die Zellmembran filtert Signale wie ein RC-Glied. Hinter all diesen Anwendungen stehen zwei einfache Grundprinzipien: Reihen- und Parallelschaltung.

{{DIAGRAM:circuit-diagram}}

### Reihenschaltung von Widerständen

Stell dir eine Einbahnstraße mit mehreren Engstellen vor — der gesamte Verkehr muss durch jede Engstelle hindurch. Genauso fließt in der Reihenschaltung der gesamte Strom durch jeden Widerstand:

- **Strom:** überall identisch: I₁ = I₂ = ... = I
- **Spannung:** teilt sich auf: U_ges = U₁ + U₂ + ... + Uₙ
- **Gesamtwiderstand:** R_ges = R₁ + R₂ + ... + Rₙ (immer größer als jeder Einzelwiderstand)
- **Spannungsteiler-Prinzip:** U₁ = U_ges · R₁/R_ges — je größer der Widerstand, desto mehr Spannung fällt an ihm ab

> **Merke:** Reihenschaltung = gleicher Strom, Spannungen addieren sich, R_ges = ΣRᵢ. Eselsbrücke: Widerstände in Reihe sind wie Hürden hintereinander — der Gesamtwiderstand wird immer größer.

---

### Parallelschaltung von Widerständen

Jetzt denk an eine Autobahn mit mehreren Fahrspuren — der Verkehr verteilt sich auf alle Spuren, und mehr Spuren bedeuten weniger Gesamtstau:

- **Spannung:** an allen Widerständen gleich: U₁ = U₂ = ... = U
- **Strom:** teilt sich auf: I_ges = I₁ + I₂ + ... + Iₙ
- **Gesamtwiderstand:** 1/R_ges = 1/R₁ + 1/R₂ + ... + 1/Rₙ (immer kleiner als der kleinste Einzelwiderstand)
- **Für genau 2 Widerstände:** R_ges = (R₁ · R₂) / (R₁ + R₂) — die Produktformel, die im MedAT häufig abgefragt wird

> **Merke:** Parallelschaltung = gleiche Spannung, Ströme addieren sich, 1/R_ges = Σ(1/Rᵢ). Je mehr Widerstände parallel, desto kleiner R_ges — wie zusätzliche Fahrspuren den Stau reduzieren.

---

### Vergleich auf einen Blick

| Eigenschaft | Reihenschaltung | Parallelschaltung |
|---|---|---|
| Strom | überall gleich (I₁ = I₂) | teilt sich auf (I = I₁ + I₂) |
| Spannung | teilt sich auf (U = U₁ + U₂) | überall gleich (U₁ = U₂) |
| R_ges | R₁ + R₂ (wird größer) | (R₁·R₂)/(R₁+R₂) (wird kleiner) |
| C_ges | 1/C₁ + 1/C₂ (wird kleiner) | C₁ + C₂ (wird größer) |
| Klinisch | Spannungsteiler im EKG | Parallele Ionenkanäle in Membranen |

> **Merke:** Kondensatoren verhalten sich genau umgekehrt zu Widerständen: Parallel → C addiert sich direkt; Reihe → Kehrwerte addieren sich. Diese Vertauschung ist eine klassische MedAT-Falle.

---

## Die Kirchhoffschen Gesetze

Gustav Kirchhoff formulierte 1845 zwei Gesetze, die zusammen mit dem Ohmschen Gesetz (U = R·I) ausreichen, um jedes beliebig komplexe elektrische Netzwerk vollständig zu analysieren.

**1. Knotenregel (KCL — Kirchhoff's Current Law):**

An jedem Knotenpunkt (Verzweigung) eines Schaltkreises gilt:

**ΣI_ein = ΣI_aus** (bzw. ΣI = 0 bei Vorzeichenkonvention)

Physikalische Basis: **Ladungserhaltung** — Ladung kann sich in einem Knoten weder ansammeln noch verschwinden. Analogie: An einer Autobahnkreuzung muss die Zahl der einfahrenden Autos gleich der Zahl der ausfahrenden sein.

{{DIAGRAM:kirchhoff-laws}}

**2. Maschenregel (KVL — Kirchhoff's Voltage Law):**

In jeder geschlossenen Masche (Schleife) eines Schaltkreises gilt:

**ΣU = 0** (bei Umlauf durch die Masche)

Physikalische Basis: **Energieerhaltung** — beim vollständigen Umlauf kehrt man zum selben Potenzial zurück. Analogie: Wanderst du einen Rundweg im Gebirge, ist die Gesamthöhendifferenz am Ende null — jeder Anstieg wird durch einen Abstieg kompensiert.

> **Merke:** KCL = Ladungserhaltung am Knoten (ΣI = 0). KVL = Energieerhaltung in der Masche (ΣU = 0). Zusammen mit U = R·I lösen sie jedes lineare Netzwerk. Prüfungstipp: KCL fragen nach Strömen, KVL fragen nach Spannungen.

---

## Kondensatoren in Schaltkreisen

Ein **Kondensator** (Bauelement zur Energiespeicherung im elektrischen Feld) besteht aus zwei leitfähigen Platten, getrennt durch ein Dielektrikum (Isolator). Die Kapazität gibt an, wie viel Ladung pro Volt gespeichert wird:

**C = Q/U** [F = Farad = Coulomb/Volt]

Für einen Plattenkondensator: **C = ε₀ · εᵣ · A / d** (A = Plattenfläche, d = Plattenabstand, εᵣ = relative Permittivität des Dielektrikums).

**Drei Stellschrauben der Kapazität:**
- Größere Fläche A → mehr C (mehr Platz für Ladungen)
- Kleinerer Abstand d → mehr C (stärkeres Feld bei gleicher Spannung)
- Höheres εᵣ → mehr C (Dielektrikum verstärkt die Polarisation)

Gespeicherte Energie: **W = ½ · C · U²** = Q²/(2C) = ½ · Q · U

| Schaltungstyp | Widerstände (R) | Kondensatoren (C) |
|---|---|---|
| Reihenschaltung | R_ges = R₁ + R₂ | 1/C_ges = 1/C₁ + 1/C₂ |
| Parallelschaltung | 1/R_ges = 1/R₁ + 1/R₂ | C_ges = C₁ + C₂ |

> **Merke:** W = ½·C·U² — die Kondensatorenergie steigt quadratisch mit der Spannung. Verdopplung der Spannung vervierfacht die gespeicherte Energie. Ein Defibrillator bei 2000 V speichert viermal so viel Energie wie bei 1000 V.

---

## Das RC-Glied: Zeitkonstante und exponentielles Verhalten

Wird ein Kondensator über einen Widerstand geladen, steigt die Spannung nicht sofort auf den Endwert, sondern folgt einer **Exponentialkurve** — anfangs schnell, dann immer langsamer:

**Laden:** U_C(t) = U₀ · (1 − e^(−t/τ))
**Entladen:** U_C(t) = U₀ · e^(−t/τ)

Die **Zeitkonstante** τ = R · C [Sekunden] bestimmt die Geschwindigkeit:

| Zeitpunkt | Laden (% von U₀) | Entladen (% von U₀) |
|---|---|---|
| t = τ | 63 % | 37 % |
| t = 2τ | 86 % | 14 % |
| t = 3τ | 95 % | 5 % |
| t = 5τ | >99 % (praktisch voll) | <1 % (praktisch leer) |

**Biologische Membran als RC-Glied:** Die Lipiddoppelschicht wirkt als Kondensator (C_m ≈ 1 µF/cm²), die Ionenkanäle als variable Widerstände. Das **Hodgkin-Huxley-Modell** (mathematische Beschreibung der Erregungsleitung am Neuron, Nobelpreis 1963) formalisiert die Membran als Schaltkreis mit spannungsgesteuerten Leitfähigkeiten für Na⁺, K⁺ und Leckstrom. Die Membranzeitkonstante τ_m = R_m · C_m (typisch 1–20 ms) bestimmt, wie schnell ein Neuron auf synaptische Eingänge reagiert.

**Defibrillator als RC-Entladung:** Ein großer Kondensator (C ≈ 200 µF) wird auf 1000–2000 V geladen. Die gespeicherte Energie W = ½·C·U² ≈ 200–400 J wird in Millisekunden über den Thorax (R ≈ 50–100 Ω) entladen. Der resultierende Stromstoß depolarisiert alle Herzmuskelzellen gleichzeitig und terminiert so Kammerflimmern (lebensbedrohliche Herzrhythmusstörung).

> **Merke:** τ = R·C ist die zentrale Zeitkonstante. Nach 1τ: 63 % geladen. Nach 5τ: praktisch voll. Biologische Membranen haben τ_m = R_m·C_m ≈ 1–20 ms — das bestimmt die neuronale Reaktionsgeschwindigkeit.

---

## Wechselstrom und Impedanz

Bei **Wechselstrom (AC)** mit Frequenz f wechselt die Stromrichtung periodisch (im Gegensatz zum Gleichstrom DC). Kondensatoren und Spulen verhalten sich hier frequenzabhängig:

**Kapazitive Reaktanz** (Blindwiderstand des Kondensators):
**X_C = 1/(2π · f · C)** [Ω]
- Hohe Frequenz → kleines X_C → Kondensator leitet gut (Kurzschluss für sehr hohe f)
- Niedrige Frequenz → großes X_C → Kondensator sperrt (offener Kreis für f = 0)

**Induktive Reaktanz** (Blindwiderstand der Spule):
**X_L = 2π · f · L** [Ω]
- Hohe Frequenz → großes X_L → Spule sperrt
- Niedrige Frequenz → kleines X_L → Spule leitet

**Gesamtimpedanz** (Scheinwiderstand, Kombination aus ohmschem und Blindwiderstand):
**Z = √(R² + (X_L − X_C)²)** [Ω]

Im menschlichen Körper ist die **Bioimpedanz** frequenzabhängig: Zellmembranen wirken als Kondensatoren. Bei 50 kHz durchdringt der Strom die Membranen (X_C sinkt) und erfasst intra- und extrazelluläres Wasser — Grundlage der Bioimpedanzanalyse (BIA) zur Körperzusammensetzung. Details siehe Kapitel ph-5-02.

> **Merke:** X_C = 1/(2πfC) sinkt mit steigender Frequenz; X_L = 2πfL steigt mit steigender Frequenz. Kondensator = Hochpassfilter (lässt hohe Frequenzen durch), Spule = Tiefpassfilter. Die Zellmembran als biologischer Kondensator wird bei höherer Frequenz durchlässiger.

---

## Spannungsteiler und Wheatstone-Brücke

Der **Spannungsteiler** ist eine der wichtigsten Grundschaltungen. Zwei Widerstände in Reihe teilen eine Eingangsspannung U₀ proportional auf:

**U₂ = U₀ · R₂ / (R₁ + R₂)**

Klinische Anwendung: EKG-Ableitungen nutzen Spannungsteiler-Prinzipien zur Messung der Herzpotentiale.

Die **Wheatstone-Brücke** (Präzisionsmessschaltung aus vier Widerständen) vergleicht zwei Spannungsteiler und detektiert minimale Widerstandsänderungen. Gleichgewichtsbedingung (kein Strom durch das Galvanometer):

**R₁ · R₄ = R₂ · R₃** (Kreuzprodukt)

Anwendungen: Dehnungsmessstreifen (Kraftmessung), piezoelektrische Drucksensoren (invasive Blutdruckmessung), Temperatursensoren (Fieberthermometer), Biosensoren (Glukosemessgeräte, Pulsoxymetrie).

> **Merke:** Spannungsteiler: U₂ = U₀ · R₂/(R₁+R₂). Wheatstone-Gleichgewicht: R₁·R₄ = R₂·R₃ (Kreuzprodukt). Beide Formeln sind klassische MedAT-Prüfungsinhalte.

---

## Rechenbeispiele

**Beispiel 1 — Defibrillator-Entladung (RC-Kreis):**
C = 200 µF, Ladespannung U₀ = 1800 V, Thoraxwiderstand R = 60 Ω.
Zeitkonstante: τ = R·C = 60 · 200×10⁻⁶ = **12 ms**. Nach 12 ms ist U auf 37 % (≈ 666 V) abgefallen.
Gespeicherte Energie: W = ½·C·U₀² = ½ · 200×10⁻⁶ · 1800² = **324 J** — im therapeutischen Bereich (200–360 J).

**Beispiel 2 — Gemischte Schaltung: R₁ in Reihe mit (R₂ ∥ R₃):**
R₁ = 100 Ω (Reihe), R₂ = 200 Ω ∥ R₃ = 300 Ω.
Schritt 1: R₂₃ = (R₂·R₃)/(R₂+R₃) = (200·300)/500 = **120 Ω**.
Schritt 2: R_ges = R₁ + R₂₃ = 100 + 120 = **220 Ω**.
Schritt 3: I_ges = U/R_ges = 12/220 ≈ **54,5 mA**. U₁ = I·R₁ = 5,45 V; U₂₃ = I·R₂₃ = 6,55 V.
Kontrolle: U₁ + U₂₃ = 5,45 + 6,55 = 12,0 V ✓ (Maschenregel)

**Beispiel 3 — Neuronale Membran-Zeitkonstante:**
Typisches Neuron: R_m = 10 kΩ·cm², C_m = 1 µF/cm².
τ_m = R_m · C_m = 10.000 Ω·cm² × 10⁻⁶ F/cm² = **10 ms**.
Bedeutung: Nach einem synaptischen Strompuls erreicht das Membranpotential in ~10 ms 63 % der Endspannung. Myelinisierte Axone (dicke Isolierschicht → höheres R_m, niedrigeres C_m) haben eine andere τ als unmyelinisierte — die Myelinisierung erhöht die Leitungsgeschwindigkeit entscheidend.

---

## Prüfungsrelevante Zahlen und Fakten

| Größe | Typischer Wert | Klinischer Bezug |
|---|---|---|
| Defibrillator-Kapazität | C ≈ 200 µF | Energiespeicher für Schock |
| Defibrillator-Spannung | 1000–2000 V | W = ½·C·U² ≈ 200–360 J |
| Thoraxwiderstand | R ≈ 50–100 Ω | Bestimmt Entladezeit τ |
| Membrankapazität | C_m ≈ 1 µF/cm² | Universal für alle Zellen |
| Neuronale Zeitkonstante | τ_m ≈ 1–20 ms | Reaktionsgeschwindigkeit |
| BIA-Frequenz | 50 kHz | Durchdringt Zellmembranen |
| MRT-Feldstärke | 1,5–7 T | Vergleich: Erdmagnetfeld ~50 µT |`,

      diagram: "circuit-diagram",
      lernziele: [
        "Reihen- und Parallelschaltungen von Widerständen und Kondensatoren berechnen",
        "Die Kirchhoffschen Gesetze (Knoten- und Maschenregel) anwenden und ihre physikalischen Grundlagen nennen",
        "Das RC-Glied und seine Zeitkonstante τ = R·C für biologische Membrane erläutern",
        "Die frequenzabhängige Impedanz von Kondensatoren erklären und die Bioimpedanz einordnen",
        "Den Defibrillator als Kondensatorentladung physikalisch beschreiben",
      ],
      sections: [
        {
          heading: "Reihen- und Parallelschaltung",
          text: "Reihenschaltung: R_ges = ΣRᵢ (Ströme gleich, Spannungen addieren sich). Parallelschaltung: 1/R_ges = Σ(1/Rᵢ) (Spannungen gleich, Ströme addieren sich). Kondensatoren: umgekehrt (Parallel → C addiert sich, Reihe → 1/C addiert sich). Zellmembranen sind RC-Parallelglieder: Lipidschicht = Kondensator (C_m ≈ 1 µF/cm²), Kanäle = variable Widerstände. Hodgkin-Huxley-Modell beschreibt die Membran als Schaltkreis.",
          merksatz:
            "R in Reihe: R_ges = R₁+R₂. R parallel: 1/R_ges = 1/R₁+1/R₂. C ist umgekehrt zu R.",
        },
        {
          heading: "Kirchhoffsche Gesetze",
          text: "Knotenregel (KCL): ΣI_ein = ΣI_aus — Ladungserhaltung. Maschenregel (KVL): ΣU = 0 in jeder Masche — Energieerhaltung. Mit U = R·I (Ohm) bilden die Kirchhoffgesetze das vollständige Gleichungssystem für Netzwerke. Anwendung: Analyse von Neuronennetzwerken, Herzschrittmacherkreisen, Messbrücken (Wheatstone).",
          merksatz:
            "KCL: ΣI = 0 am Knoten (Ladungserhaltung). KVL: ΣU = 0 in Masche (Energieerhaltung).",
        },
        {
          heading: "RC-Schaltkreis und Defibrillation",
          text: "Zeitkonstante τ = R·C. Ladevorgang: U_C(t) = U₀·(1−e^(−t/τ)). Entladung: U_C(t) = U₀·e^(−t/τ). Nach τ: 63 % geladen/37 % entladen. Defibrillator: C ≈ 200 µF, U ≈ 1000–2000 V → W = ½·C·U² ≈ 100–400 J. Die gespeicherte Energie wird in ms über den Thorax entladen.",
          merksatz: "τ = R·C (Zeitkonstante). W = ½·C·U² (gespeicherte Energie im Kondensator).",
        },
      ],

      merksätze: [
        "Reihe: R addieren, C-Kehrwerte addieren. Parallel: R-Kehrwerte addieren, C addieren. Kondensatoren sind immer umgekehrt zu Widerständen!",
        "KCL (Knoten): ΣI = 0 → Ladungserhaltung. KVL (Masche): ΣU = 0 → Energieerhaltung.",
        "τ = R·C: Nach 1τ = 63 %, nach 3τ = 95 %, nach 5τ ≈ 100 %. Gilt für Laden und Entladen (spiegelbildlich).",
        "W = ½·C·U² — Energie steigt quadratisch mit Spannung. Defi: 200 µF, 1800 V → 324 J in ~12 ms.",
        "X_C = 1/(2πfC): Kondensator sperrt bei DC, leitet bei hohem f. Zellmembran bei 50 kHz durchlässig (BIA-Prinzip).",
        "Spannungsteiler: U₂ = U₀ · R₂/(R₁+R₂). Wheatstone-Gleichgewicht: R₁·R₄ = R₂·R₃ (Kreuzprodukt).",
        "Zellmembran = RC-Parallelglied: Lipidschicht = C (1 µF/cm²), Ionenkanäle = variable R. τ_m = 1–20 ms.",
        "Parallelwiderstand für 2 R: R_ges = (R₁·R₂)/(R₁+R₂) — die Produktformel, häufig im MedAT.",
      ],
      altfrage: {
        text: "Im elektrischen Ersatzschaltbild der Zellmembran wird die Lipiddoppelschicht modelliert als:",
        options: [
          { id: "a", text: "Widerstand" },
          { id: "b", text: "Spule" },
          { id: "c", text: "Kondensator" },
          { id: "d", text: "Diode" },
          { id: "e", text: "Batterie" },
        ],
        correctOptionId: "c",
        explanation:
          "Die Lipiddoppelschicht wirkt als Plattenkondensator (C_m ≈ 1 µF/cm²): zwei leitende Schichten (Extra-/Intrazellularraum) getrennt durch ein Dielektrikum (Lipide). Ionenkanäle sind die Widerstände, Nernst-Potentiale die Batterien.",
      },
      klinischerBezug:
        "Der Defibrillator nutzt einen Kondensator (C ≈ 200 µF, geladen auf ~1000–2000 V, W ≈ 200–360 J), der beim Entladen über Thoraxelektroden (R_körper ≈ 50–100 Ω) innerhalb von ca. 10 ms einen Stromstoß durch das Herz sendet — diese massenhafte Depolarisation terminiert Kammerflimmern. Die Bioimpedanzanalyse (BIA) nutzt das frequenzabhängige RC-Verhalten des Körpers: bei 50 kHz fließt Strom durch Extra- und Intrazellularraum; das Impedanzmuster erlaubt die Berechnung von Fettmasse, Muskelmasse und Körperwasser. Herzschrittmacher sind komplexe Schaltkreise aus Kondensatoren, Widerständen und integrierten Schaltungen.",
      selfTest: [
        {
          question:
            "Drei Widerstände R₁ = 10 Ω, R₂ = 20 Ω, R₃ = 30 Ω sind parallel geschaltet. Welcher Gesamtwiderstand ergibt sich?",
          options: ["5,45 Ω", "60 Ω", "18,18 Ω", "10 Ω", "3,33 Ω"],
          correctIndex: 0,
          explanation:
            "1/R_ges = 1/10 + 1/20 + 1/30 = 6/60 + 3/60 + 2/60 = 11/60. R_ges = 60/11 ≈ 5,45 Ω. Kontrolle: Parallelwiderstand muss kleiner sein als der kleinste Einzelwiderstand (< 10 Ω) — nur 5,45 Ω und 3,33 Ω erfüllen das. 60 Ω wäre die Reihenschaltung, 18,18 Ω der arithmetische Mittelwert, 10 Ω der kleinste Einzelwert, 3,33 Ω = 10/3 (falsche Berechnung).",
          hints: [
            "1/R_ges = 1/R₁ + 1/R₂ + 1/R₃. Bringe auf gemeinsamen Nenner (60).",
            "Parallelwiderstand ist immer kleiner als der kleinste Einzelwiderstand. Welche Antwort ist < 10 Ω und sinnvoll?",
          ],
          difficulty: 1,
          tags: ["parallelschaltung", "widerstand", "rechenfrage"],
        },
        {
          question:
            "Ein Kondensator (C = 100 µF) wird über einen Widerstand (R = 1000 Ω) geladen. Nach welcher Zeit ist er auf ca. 63 % seiner Endspannung geladen?",
          options: ["Nach 0,1 ms", "Nach 1 ms", "Nach 10 ms", "Nach 100 ms", "Nach 1 s"],
          correctIndex: 3,
          explanation:
            "τ = R·C = 1000 Ω · 100×10⁻⁶ F = 0,1 s = 100 ms. Nach genau einer Zeitkonstante τ ist der Kondensator auf 63 % aufgeladen (U = U₀·(1−e⁻¹) ≈ 0,632·U₀). Nach 5τ = 500 ms ist er zu >99 % geladen. Biologische Parallele: Neuronale Membranzeitkonstante τ_m = R_m·C_m beträgt typisch 1–20 ms.",
          hints: [
            "τ = R·C. Berechne: 1000 Ω × 100 µF = ? (Einheiten: Ω × F = s)",
            "100 µF = 100 × 10⁻⁶ F = 10⁻⁴ F. 1000 × 10⁻⁴ = 0,1 s = 100 ms.",
          ],
          difficulty: 1,
          tags: ["kondensator", "zeitkonstante", "rc-glied"],
        },
        {
          question: "Welche der folgenden Aussagen über die Kirchhoffschen Gesetze ist FALSCH?",
          options: [
            "Die Knotenregel basiert auf der Ladungserhaltung",
            "Die Maschenregel besagt, dass die Summe aller Spannungen in einer Masche null ist",
            "Die Knotenregel gilt nur für Gleichstromkreise, nicht für Wechselstrom",
            "Zusammen mit dem Ohmschen Gesetz lässt sich jedes lineare Netzwerk lösen",
            "An einem Knoten ist die Summe der zufließenden Ströme gleich der Summe der abfließenden",
          ],
          correctIndex: 2,
          explanation:
            "Die Knotenregel (KCL) gilt universell — für Gleich- und Wechselstromkreise. Sie folgt direkt aus der Ladungserhaltung, die ein fundamentales Naturgesetz ist und nicht von der Stromart abhängt. Bei Wechselstrom werden die Ströme als komplexe Größen (Zeiger) behandelt, aber ΣI = 0 gilt weiterhin an jedem Knoten. Alle anderen Aussagen sind korrekt.",
          hints: [
            "Die Kirchhoffschen Gesetze basieren auf fundamentalen Erhaltungssätzen. Gelten Erhaltungssätze nur bei Gleichstrom?",
            "Ladungserhaltung ist universell — sie gilt unabhängig davon, ob der Strom konstant ist oder sich zeitlich ändert.",
          ],
          difficulty: 2,
          tags: ["kirchhoff", "knotenregel", "falschaussage"],
        },
        {
          question:
            "Ein Defibrillator wird auf 2000 V geladen (C = 150 µF). Welche Energie ist gespeichert?",
          options: ["W = 150 J", "W = 600 J", "W = 300 J", "W = 30 J", "W = 3000 J"],
          correctIndex: 2,
          explanation:
            "W = ½·C·U² = ½ · 150×10⁻⁶ F · (2000 V)² = ½ · 150×10⁻⁶ · 4×10⁶ = ½ · 600 = 300 J. Typische Defibrillatoren liefern 200–360 J. Häufiger Fehler: Vergessen des Faktors ½ (→ 600 J, Option B) oder Verwechslung von U und U² (→ 150 J oder 30 J). Der Spitzenstrom beträgt I_max = U/R ≈ 2000/75 ≈ 27 A.",
          hints: [
            "W = ½·C·U². C = 150 µF = 150 × 10⁻⁶ F. U² = (2000)² = 4 × 10⁶ V².",
            "½ × 150 × 10⁻⁶ × 4 × 10⁶ = ½ × 600 = 300 J.",
          ],
          difficulty: 2,
          tags: ["defibrillator", "kondensator", "rechenfrage"],
        },
        {
          question:
            "Die Wheatstone-Brücke ist im Gleichgewicht (kein Strom durch das Galvanometer), wenn gilt:",
          options: [
            "R₁ + R₂ = R₃ + R₄",
            "R₁ = R₂ = R₃ = R₄",
            "R₁/R₂ = R₃ + R₄",
            "R₁ · R₂ = R₃ · R₄",
            "R₁ · R₄ = R₂ · R₃",
          ],
          correctIndex: 4,
          explanation:
            "Im Gleichgewicht teilen beide Spannungsteiler die Speisespannung im gleichen Verhältnis: R₁/R₂ = R₃/R₄, umgeformt: R₁·R₄ = R₂·R₃ (Kreuzprodukt). Option A (Summengleichheit) wäre zu schwach — sie erlaubt z. B. R₁=1, R₂=5, R₃=3, R₄=3, was kein Gleichgewicht ergibt. Option D (R₁·R₂ = R₃·R₄) vertauscht die Indizes. Anwendungen: Dehnungsmessstreifen, invasive Blutdrucksensoren, Biosensoren.",
          hints: [
            "Gleichgewicht bedeutet: gleiche Spannungsteilung auf beiden Seiten. R₁/(R₁+R₂) = R₃/(R₃+R₄).",
            "Kreuzweise multiplizieren: R₁·(R₃+R₄) = R₃·(R₁+R₂) → vereinfachen → R₁·R₄ = R₂·R₃.",
          ],
          difficulty: 3,
          tags: ["wheatstone-brücke", "spannungsteiler", "widerstandsmessung"],
        },
        {
          question:
            "Ein Kondensator (C = 50 µF) in einem Defibrillator wird über R = 80 Ω entladen. Nach welcher Zeit ist die Spannung auf unter 5 % des Anfangswerts gefallen?",
          options: ["Nach 4 ms", "Nach 12 ms", "Nach 20 ms", "Nach 40 ms", "Nach 200 ms"],
          correctIndex: 1,
          explanation:
            "τ = R·C = 80 · 50×10⁻⁶ = 4 ms. Nach 3τ = 12 ms ist die Spannung auf e⁻³ ≈ 5 % des Anfangswerts gefallen (genau: 4,98 %). Nach 1τ = 4 ms wäre sie noch bei 37 %, nach 5τ = 20 ms bei <1 %. Die Frage verlangt <5 %, also reichen 3τ = 12 ms. Klinisch: Die Entladungszeit bestimmt die Effektivität der Defibrillation.",
          hints: [
            "Berechne τ = R·C. Wie viele Zeitkonstanten braucht man, um auf 5 % zu kommen?",
            "U(t) = U₀·e^(−t/τ). Für U/U₀ = 0,05: e^(−t/τ) = 0,05 → t/τ ≈ 3. Also t = 3τ.",
          ],
          difficulty: 3,
          tags: ["rc-glied", "entladung", "rechenfrage"],
        },
      ],
    },
    {
      id: "ph-5-04",
      title: "Magnetismus und elektromagnetische Induktion",
      stichworte: [
        "Magnetfeld",
        "Feldlinien",
        "Permeabilität",
        "Lorentz-Kraft",
        "Biot-Savart",
        "Faraday-Induktion",
        "Lenzsche Regel",
        "Wirbelströme",
        "Transformator",
        "Selbstinduktion",
        "Larmor-Frequenz",
        "MRT",
        "Elektromagnetisches Spektrum",
        "Zyklotron",
        "Massenspektrometrie",
        "TMS",
        "Hall-Effekt",
      ],
      content: `Magnetfelder durchdringen den Körper, ohne Gewebe zu schädigen — das macht sie zum idealen Werkzeug für die bildgebende Diagnostik. Die Physik dahinter beginnt bei einer simplen Beobachtung: Wo Strom fließt, entsteht ein Magnetfeld.

## Grundlagen des Magnetismus

Die MRT-Bildgebung, das stärkste diagnostische Werkzeug der modernen Medizin, basiert vollständig auf Magnetismus und elektromagnetischer Induktion. Magnetismus entsteht durch bewegte elektrische Ladungen — jeder elektrische Strom erzeugt ein Magnetfeld und umgekehrt. Diese Kopplung durchzieht die gesamte Medizintechnik: vom EKG-Ableitsystem über Induktionsherde in der Sterilisation bis zur MRT-Diagnostik.

### Magnetfeld und Feldlinien

Das **Magnetfeld B** [Tesla, T] ist eine Vektorgröße, die Richtung und Stärke der magnetischen Wirkung beschreibt. Magnetische **Feldlinien** verlaufen außerhalb eines Magneten vom Nord- zum Südpol und schließen sich im Inneren — sie sind **immer geschlossen**. Dieser fundamentale Unterschied zum elektrischen Feld (offene Feldlinien von + nach −) bedeutet: Es gibt keine magnetischen Monopole. Jeder Magnet besitzt stets Nord- und Südpol. Zerbricht man einen Stabmagneten, entstehen zwei vollständige Magnete — keine isolierten Pole. Selbst auf atomarer Ebene sind Magnetismus und Spin untrennbar gekoppelt: Jedes Elektron erzeugt durch seinen Eigendrehimpuls (Spin) ein magnetisches Moment. In den meisten Materialien heben sich die Spinbeiträge gegenseitig auf — nur wenn eine Nettopolarisation vorliegt, wird das Material makroskopisch magnetisch.

Die Feldliniendichte ist ein Maß für die Feldstärke: Wo die Linien eng beisammenliegen (z. B. an den Polen), ist B groß; wo sie weit auseinanderliegen, ist B schwach. Innerhalb eines Stabmagneten verlaufen die Feldlinien vom Süd- zum Nordpol und bilden so geschlossene Schleifen. Dieses Prinzip gilt auch für Elektromagnete: Feldlinien umschließen den stromführenden Leiter in konzentrischen Kreisen.

> **Merke:** Magnetfeldlinien sind immer geschlossen (keine Monopole). Im Gegensatz zu elektrischen Feldlinien haben sie keinen Anfang und kein Ende. B-Feld-Einheit: 1 Tesla = 1 V·s/m² = 1 kg/(A·s²).

**Feldstärken in der Praxis:**
- Erdmagnetfeld: ~50 µT (0,00005 T)
- Kühlschrankmagnet: ~5 mT
- MRT klinisch: 1,5–3 T (Forschung: 7–11,7 T)
- Stärkste Labormagnete: ~45 T

{{DIAGRAM:magnetic-field-lines}}

### Magnetische Materialien und Permeabilität

Die **relative Permeabilität μᵣ** beschreibt, wie stark ein Material das Magnetfeld verstärkt oder abschwächt im Vergleich zum Vakuum. Die magnetische Feldkonstante (Permeabilität des Vakuums) ist μ₀ = 4π × 10⁻⁷ T·m/A. In einem Material gilt: **B = μ₀ · μᵣ · H**, wobei H die magnetische Feldstärke [A/m] ist.

- **Diamagnetisch** (μᵣ < 1, minimal kleiner als 1): schwach feldabstoßend (Wasser, organisches Gewebe, Kupfer, Bismut) — Körpergewebe ist diamagnetisch, weshalb es vom MRT-Feld praktisch unbeeinflusst bleibt. Diamagnetismus entsteht, weil ein äußeres Feld die Elektronenbahnen leicht verändert und so ein schwaches Gegenfeld induziert (Lenz auf atomarer Ebene). Der Effekt ist temperaturunabhängig.
- **Paramagnetisch** (μᵣ > 1, minimal größer als 1): schwach feldverstärkend (Aluminium, Sauerstoff, Gadolinium als MRT-Kontrastmittel — Gd³⁺ verkürzt T₁ im umliegenden Gewebe). Paramagnetische Stoffe besitzen permanente atomare magnetische Momente, die sich im äußeren Feld teilweise ausrichten. Die Ausrichtung wird durch thermische Bewegung gestört → paramagnetische Suszeptibilität nimmt mit steigender Temperatur ab (Curie-Gesetz: χ ∝ 1/T). **Gadolinium (Gd³⁺)** ist das wichtigste paramagnetische MRT-Kontrastmittel: Mit 7 ungepaarten 4f-Elektronen hat es eines der höchsten magnetischen Momente aller Ionen. Es verkürzt die T₁-Relaxationszeit des umliegenden Gewebes und lässt kontrastmittelaufnehmende Strukturen (z. B. Tumoren, Entzündungen) in T₁-gewichteten Bildern hell erscheinen.
- **Ferromagnetisch** (μᵣ ≫ 1, bis ~100.000): stark feldverstärkend (Eisen, Nickel, Cobalt) — **Gefahr für metallische Implantate im MRT** (Projektileffekt, Erhitzung, Artefakte). Ferromagneten bilden **Weiss-Bezirke** (Domänen), in denen alle atomaren Momente parallel ausgerichtet sind. Ohne äußeres Feld sind die Domänen zufällig orientiert → kein Netto-Moment. Im äußeren Feld wachsen günstig orientierte Domänen auf Kosten ungünstig orientierter (Blochwandverschiebung) → starke Magnetisierung. Oberhalb der **Curie-Temperatur** (Eisen: 770 °C) bricht die Fernordnung zusammen → das Material wird paramagnetisch.

> **Merke:** Ferromagnetische Gegenstände werden im MRT zu lebensgefährlichen Projektilen. Vor jeder MRT-Untersuchung: Metallscreening (Implantate, Piercings, Schrauben). Gadolinium-Kontrastmittel wirkt paramagnetisch (7 ungepaarte Elektronen) und verkürzt die T₁-Relaxationszeit.

### Biot-Savart-Gesetz: Magnetfeld stromdurchflossener Leiter

Das **Biot-Savart-Gesetz** beschreibt quantitativ das Magnetfeld eines stromdurchflossenen Leiters. Für einen geraden, langen Leiter mit Strom I im Abstand r:

**B = μ₀ · I / (2π · r)**

Die Magnetfeldlinien bilden geschlossene Kreise um den Leiter. Die Richtung bestimmt die **Rechte-Hand-Regel**: Daumen in Stromrichtung → Finger zeigen in Richtung der Feldlinien (B).

Für eine **Spule (Solenoid)** mit n Windungen pro Meter bei Strom I:

**B = μ₀ · μᵣ · n · I** (im Innern nahezu homogen)

Mit einem ferromagnetischen Kern (μᵣ ≫ 1, z. B. Eisen: μᵣ ≈ 1000–100.000) wird das Feld enorm verstärkt — Prinzip des Elektromagneten. MRT-Hauptmagnete sind supraleitende Solenoide (Niob-Titan-Legierung, gekühlt auf 4 K mit flüssigem Helium), die Felder von B₀ = 1,5–7 T erzeugen — 30.000- bis 140.000-mal stärker als das Erdmagnetfeld.

> **Merke:** Gerader Leiter: B = μ₀·I/(2π·r) — Feld nimmt mit 1/r ab. Solenoid: B = μ₀·μᵣ·n·I — homogen im Innern. Rechte-Hand-Regel für die Feldrichtung.

---

## Lorentz-Kraft

Ein geladenes Teilchen, das sich durch ein Magnetfeld bewegt, wird seitlich abgelenkt — senkrecht sowohl zur Bewegungsrichtung als auch zum Feld. Diese Ablenkung ist die **Lorentz-Kraft**. Entscheidend: Die Kraft verrichtet keine Arbeit (ändert nicht den Betrag der Geschwindigkeit), sondern lenkt nur ab — wie eine Leitplanke, die ein Auto umlenkt, ohne es zu bremsen.

Eine bewegte Ladung q mit Geschwindigkeit v in einem Magnetfeld B erfährt:

**F = q · (v × B)** [N]

Der Betrag: **|F| = q · v · B · sin θ**, wobei θ der Winkel zwischen v und B ist. Maximale Kraft bei θ = 90° (senkrechte Bewegung zum Feld), keine Kraft bei θ = 0° (Bewegung parallel zum Feld). Die Richtung der Kraft bestimmt die **Drei-Finger-Regel** (UVW-Regel): Daumen → v (Ursache), Zeigefinger → B, Mittelfinger → F (für positive Ladungen). Für negative Ladungen (Elektronen) zeigt F in die entgegengesetzte Richtung. Alternativ: Rechte-Hand-Regel mit Zeigefinger → v, Mittelfinger → B, Daumen → F.

Bewegt sich ein Teilchen schräg zum Feld (0° < θ < 90°), ergibt sich eine **Schraubenbahn** (Helix): Die Komponente parallel zu B bleibt unbeeinflusst, die senkrechte Komponente erzeugt eine Kreisbewegung. Die Ganghöhe (Pitch) der Helix hängt von v_parallel ab. Dieses Prinzip erklärt, warum geladene Teilchen in der Erdmagnetosphäre spiralförmig entlang der Feldlinien wandern und an den Polen eintreten (Nordlicht).

> **Merke:** Die Lorentz-Kraft F = q·v·B·sin θ steht immer senkrecht auf v und B — sie verrichtet keine Arbeit und ändert nur die Richtung, nie den Betrag der Geschwindigkeit. Drei-Finger-Regel: Daumen (v) → Zeigefinger (B) → Mittelfinger (F).

### Kreisbahn im Magnetfeld

In einem homogenen Magnetfeld bewegt sich eine Ladung, die senkrecht zum Feld eintritt, auf einer **Kreisbahn** (Zyklotronbewegung). Gleichgewicht zwischen Lorentz-Kraft und Zentripetalkraft ergibt den **Zyklotronradius**:

**r = m · v / (q · B)**

Schwerere oder schnellere Teilchen → größerer Radius. Stärkeres Feld oder höhere Ladung → kleinerer Radius. Die **Umlauffrequenz (Zyklotronfrequenz)** f = q·B/(2π·m) ist geschwindigkeitsunabhängig — das ermöglicht die Beschleunigung im Zyklotron.

> **Merke:** Zyklotronradius r = m·v/(q·B) — je schwerer oder schneller, desto größerer Kreis. Die Zyklotronfrequenz f = q·B/(2π·m) hängt nicht von der Geschwindigkeit ab — Grundlage der Teilchenbeschleunigung.

### Klinische Anwendungen der Lorentz-Kraft

- **Massenspektrometrie:** Ionen verschiedener Masse werden im Magnetfeld auf unterschiedlich große Kreisbahnen gelenkt → Massenbestimmung über r = m·v/(q·B). In der Praxis durchlaufen die Ionen zunächst ein elektrisches Beschleunigungsfeld (alle erhalten gleiche kinetische Energie), dann ein Magnetfeld zur Massentrennung. Leichtere Ionen werden stärker abgelenkt. Standardmethode in der klinischen Labordiagnostik (Toxikologie, Neugeborenenscreening, Proteomik) und in der Isotopenanalyse.
- **Zyklotron:** Protonen werden in einem Magnetfeld auf spiralförmigen Bahnen beschleunigt. Zwei D-förmige Hohlkammern (Dees) liegen in einem homogenen Magnetfeld. Ein HF-Wechselfeld zwischen den Dees beschleunigt die Protonen bei jedem Halbkreisdurchgang. Da die Zyklotronfrequenz geschwindigkeitsunabhängig ist, passt die Wechselfeldfrequenz für alle Radien. Mit steigender Geschwindigkeit wächst der Radius → spiralförmige Bahn nach außen → Austritt am Rand. Anwendung: Produktion kurzlebiger PET-Isotope (¹⁸F, ¹¹C, ¹³N, ¹⁵O) für die nuklearmedizinische Diagnostik.
- **MRT-Gradientenspulen:** Beim schnellen Schalten der Gradientenströme erfährt jeder stromführende Leiter im starken B₀-Feld eine Lorentz-Kraft → Vibrationen → das charakteristische Klopfgeräusch im MRT (~60–120 dB, Gehörschutz nötig).
- **Hall-Effekt:** Strom in einem Leiter wird durch das Magnetfeld quer abgelenkt → messbare Spannung. Genutzt in magnetischen Durchflusssensoren für Blutpumpen und Infusionssysteme.

> **Prüfungstipp:** Bei Massenspektrometrie-Aufgaben: r = m·v/(q·B) umstellen. Typische Frage: „Welches Ion hat den größeren Radius?" — das schwerere bei gleicher Ladung und Geschwindigkeit.

---

## Elektromagnetische Induktion

### Faradaysches Induktionsgesetz

Michael Faraday entdeckte 1831 das Gegenstück zur magnetischen Wirkung elektrischer Ströme: Ein zeitlich veränderlicher magnetischer Fluss durch eine Leiterschleife erzeugt eine elektrische Spannung. Der **magnetische Fluss** Φ = B · A · cos α [Weber, Wb = V·s] erfasst, „wie viele Feldlinien" eine Fläche A durchsetzen (α = Winkel zwischen B und Flächennormale).

**ε = −N · dΦ/dt = −N · d(B · A · cos α)/dt** [V]

Drei Wege, den Fluss zu ändern und Spannung zu induzieren:
1. **B ändern** (z. B. Magnet nähern/entfernen) — Prinzip des Generators und der MRT-Signaldetektion
2. **A ändern** (z. B. Leiterschleife verformen) — Prinzip des Mikrofons
3. **α ändern** (z. B. Schleife im Feld drehen) — Prinzip des Wechselstromgenerators

Dabei gilt: Je schneller die Flussänderung, desto größer die induzierte Spannung. Mehr Windungen (N) verstärken den Effekt proportional. Das ist der Grund, warum MRT-Empfangsspulen viele Windungen besitzen und hochfrequente Signale (MHz-Bereich) besonders gut detektieren.

### Lenzsche Regel

Das negative Vorzeichen folgt aus der **Lenzschen Regel**: Die induzierte Spannung ist stets so gerichtet, dass der induzierte Strom ein Magnetfeld erzeugt, das der ursprünglichen Flussänderung **entgegenwirkt**. Physikalisch ist das eine direkte Konsequenz der Energieerhaltung — wäre der induzierte Strom gleichsinnig, würde sich das System selbst verstärken und unbegrenzt Energie erzeugen.

Praktisches Beispiel: Bewegt man einen Nordpol auf eine Leiterschleife zu, nimmt der magnetische Fluss durch die Schleife zu. Nach Lenz fließt ein Strom, der ein Magnetfeld erzeugt, das dem Nordpol entgegenwirkt — die Schleife verhält sich wie ein kleiner Magnet mit Nordpol zum ankommenden Magneten hin (Abstoßung). Zieht man den Magneten weg, kehrt sich die Stromrichtung um.

> **Merke:** Faraday: ε = −N·dΦ/dt — jede Flussänderung induziert eine Spannung. Lenz: Der induzierte Strom wirkt seiner Ursache entgegen (Energieerhaltung). Drei Wege zur Induktion: B, A oder α zeitlich ändern.

**Klinische Anwendung — EKG-Ableitung und Störsignale:** EKG-Elektroden messen primär elektrische Potentiale (keine Induktion). Jedoch können wechselnde Magnetfelder (z. B. bei MRT-kompatiblem Monitoring) in den Ableitkabeln Störspannungen induzieren (Faraday). Deshalb werden EKG-Kabel im MRT verdrillt und kurz gehalten — das minimiert die effektive Schleifenfläche A und damit den induzierten Störfluss.

### Wirbelströme

Wenn sich ein leitfähiger Körper (z. B. Metallplatte) in einem wechselnden Magnetfeld befindet, werden in ihm kreisförmige Ströme (Wirbelströme) induziert. Diese erzeugen nach Lenz ein Gegenfeld und dissipieren Energie als Joulesche Wärme.

**Anwendungen von Wirbelströmen:**
- **Induktionsherd:** Ein Wechselstrom (~25 kHz) in der Spule unter dem Kochfeld erzeugt ein wechselndes Magnetfeld, das Wirbelströme im ferromagnetischen Topfboden induziert → der Topf selbst wird heiß, die Platte bleibt kühl. Nur ferromagnetische Töpfe funktionieren (Aluminium, Kupfer nicht). Energieeffizienz ~90 % (vs. ~55 % bei Gasherd).
- **Hyperthermie in der Onkologie:** Magnetische Nanopartikel (z. B. Eisenoxid) werden in den Tumor injiziert. Ein externes Wechselmagnetfeld (100–300 kHz) induziert Wirbelströme in den Partikeln → lokale Erwärmung auf 42–45 °C. Tumorzellen sind hitzeempfindlicher als gesundes Gewebe → selektive Schädigung. Zugelassen bei Glioblastom-Rezidiven.
- **Wirbelstrombremse:** In der Medizintechnik als berührungslose Bremse in CT-Gantries und Zentrifugen. Ein Leiter bewegt sich durch ein Magnetfeld → Wirbelströme → Bremskraft (Lenz) ohne mechanischen Verschleiß.

> **Merke:** Wirbelströme entstehen in leitfähigen Körpern bei wechselndem Magnetfeld. Sie erzeugen Wärme (Joule) und ein Gegenfeld (Lenz). Medizinisch genutzt bei Induktionsherd (Sterilisation), Hyperthermie (Tumortherapie) und als Wirbelstrombremse (CT-Gantry).

---

## Selbstinduktion und Transformator

### Selbstinduktion

Ändert sich der Strom durch eine Spule, ändert sich auch deren eigenes Magnetfeld — und damit der eigene magnetische Fluss. Nach Faraday induziert das eine Gegenspannung in der Spule selbst:

**ε = −L · dI/dt** [V]

Die **Induktivität L** [Henry, H] ist ein Maß dafür, wie stark sich eine Spule gegen Stromänderungen wehrt. Für einen Solenoid: L = μ₀ · μᵣ · n² · V (n = Windungsdichte, V = Volumen). In der Spule gespeicherte magnetische Energie: **W = ½ · L · I²**. MRT-Gradientenspulen haben L im Bereich von Hunderten µH; das schnelle Schalten (dI/dt bis ~200 A/ms) erzeugt kurzzeitig hohe Gegenspannungen und induziert Wirbelströme im umliegenden Material — Ursache für das charakteristische Klopfen und eine Begrenzung der Bildakquisitionsgeschwindigkeit.

> **Merke:** Selbstinduktion: ε = −L·dI/dt — eine Spule widersetzt sich jeder Stromänderung. Gespeicherte Energie: W = ½·L·I². Die Induktivität L hängt von Windungszahl, Geometrie und Kernmaterial ab.

### Transformator

Der **Transformator** wandelt Wechselspannungen um und nutzt dabei ausschließlich elektromagnetische Induktion (kein direkter elektrischer Kontakt). Zwei Spulen (Primär: N₁ Windungen; Sekundär: N₂) teilen einen gemeinsamen Eisenkern, der den magnetischen Fluss koppelt. Der Eisenkern wird aus laminierten (geschichteten) Blechen aufgebaut, um Wirbelstromverluste zu minimieren — die Isolation zwischen den Schichten unterbricht die Wirbelströme.

**Transformationsformel: U₁/U₂ = N₁/N₂**

Bei idealem Transformator (verlustfrei) gilt Leistungserhaltung: P₁ = P₂, also **I₁/I₂ = N₂/N₁** — wird die Spannung hochgesetzt, sinkt der Strom proportional. Reale Transformatoren haben Wirkungsgrade von 95–99 %; Verluste entstehen durch Wirbelströme im Kern (minimiert durch Lamination), Hystereseverluste (Ummagnetisierung) und ohmschen Widerstand der Wicklungen.

**Transformatortypen:**
- **Aufwärtstransformator** (N₂ > N₁): Spannungserhöhung, z. B. Röntgenröhre (40–150 kV aus 230 V Netz), Hochspannungsstromversorgung für Defibrillatoren
- **Abwärtstransformator** (N₂ < N₁): Spannungsreduktion, z. B. Netzteile medizinischer Geräte (230 V → 12 V für Monitore, Infusionspumpen)
- **Trenntransformator** (N₁ = N₂): galvanische Trennung ohne Spannungsänderung — Standard in OP-Sälen zum Schutz vor Stromschlag. Das Prinzip: Patient und OP-Team haben keinen leitenden Bezug zur Erde. Berührt jemand einen stromführenden Leiter, fließt kein Strom durch den Körper zur Erde, weil der Sekundärkreis potentialfrei ist. Erst ein **zweiter** Fehler (z. B. gleichzeitiger Kontakt mit beiden Sekundärleitern) wäre gefährlich → Isolationswächter (ISO-Wächter) überwacht den Isolationszustand und warnt bei Isolationsfehlern

> **Merke:** Transformator: U₁/U₂ = N₁/N₂. Leistungserhaltung: P₁ = P₂ → I₁/I₂ = N₂/N₁. Medizinisch wichtig: Trenntransformator im OP (galvanische Trennung, potentialfreier Sekundärkreis), Hochspannungstransformator in der Röntgenröhre (bis 150 kV).

---

## Elektromagnetische Wellen und das EM-Spektrum

Die elektromagnetische Induktion zeigt: Sich ändernde Magnetfelder erzeugen elektrische Felder und umgekehrt. James Clerk Maxwell erkannte, dass sich diese wechselseitige Erzeugung als Welle im Raum ausbreitet — **elektromagnetische Wellen**. Sie benötigen kein Medium und breiten sich im Vakuum mit Lichtgeschwindigkeit aus:

**c = λ · f = 3 × 10⁸ m/s** und **c = 1/√(ε₀ · μ₀)**

Die Energie eines Photons (Lichtquant) hängt nur von der Frequenz ab: **E = h · f** (h = 6,626 × 10⁻³⁴ J·s, Plancksches Wirkungsquantum). Höhere Frequenz = kürzere Wellenlänge = mehr Energie pro Photon.

{{DIAGRAM:em-spectrum}}

### Das EM-Spektrum: Von Radio bis Gamma

| EM-Bereich | Wellenlänge | Frequenz | Energie/Photon | Medizinische Anwendung |
|---|---|---|---|---|
| Radiowellen | >1 m | <300 MHz | <1,2 µeV | MRT (HF-Pulse, 64–300 MHz) |
| Mikrowellen | 1 mm–1 m | 300 MHz–300 GHz | µeV–meV | Diathermie (Tiefenwärme), Mikrowellenablation von Tumoren |
| Infrarot | 780 nm–1 mm | 300 GHz–385 THz | meV–1,6 eV | Wärmetherapie (Rotlichtlampe), Thermografie, IR-Laser (Nd:YAG 1064 nm) |
| Sichtbar | 380–780 nm | 385–790 THz | 1,6–3,3 eV | Endoskopie, Laser-OP, OCT, Neugeborenen-Phototherapie (Bilirubin) |
| UV | 10–380 nm | 790 THz–30 PHz | 3,3–124 eV | UV-C-Desinfektion (254 nm), Phototherapie (Psoriasis), LASIK (193 nm ArF-Excimer) |
| Röntgen | 0,01–10 nm | 30 PHz–30 EHz | 124 eV–124 keV | Röntgendiagnostik, CT, Mammografie, Strahlentherapie (MV-Bereich) |
| Gamma | <0,01 nm | >30 EHz | >124 keV | PET (511 keV Annihilationsphotonen), Szintigraphie (⁹⁹ᵐTc, 140 keV), Gamma-Knife |

### Ionisierende vs. nicht-ionisierende Strahlung

Die Grenze liegt bei etwa 10 eV Photonenenergie (UV-B/UV-C-Übergang, ~280 nm): Ab dieser Energie reicht ein einzelnes Photon aus, um Elektronen aus Atomen oder Molekülen zu lösen → **ionisierende Strahlung** (UV-C, Röntgen, Gamma). Ionisierende Strahlung kann Einzel- und Doppelstrangbrüche der DNA verursachen, Proteine denaturieren und freie Radikale erzeugen — Grundlage sowohl der Strahlentherapie als auch des Strahlenrisikos.

**Nicht-ionisierende Strahlung** (Radiowellen, Mikrowellen, IR, sichtbares Licht, UV-A/UV-B) hat zu geringe Photonenenergie für Ionisation. Biologische Effekte beruhen auf **thermischen** Mechanismen (Gewebeerwärmung durch Absorption) oder photochemischen Reaktionen (UV-B → Pyrimidindimere in DNA → Sonnenbrand/Hautkrebs). Deshalb ist MRT (Radiowellen, ~64 MHz bei 1,5 T) im Gegensatz zu CT (Röntgen, ~30–120 keV) strahlungsfrei im ionisierenden Sinne — es existiert jedoch ein SAR-Limit (Specific Absorption Rate, W/kg) zur Begrenzung der Gewebeerwärmung durch HF-Pulse.

**Medizinische Zuordnung im Überblick:**
- **Radio (MRT):** Kernspinresonanz, keine Ionisation, kein bekanntes Langzeitrisiko
- **Mikrowellen (Diathermie):** Tiefenwärme bei Muskelverspannungen, Mikrowellenablation von Lebertumoren
- **Infrarot (Wärmetherapie):** Rotlichtlampen, IR-Thermografie (Fiebermessung, berührungslos)
- **UV (Desinfektion/Therapie):** UV-C (254 nm) zerstört DNA von Bakterien/Viren, UV-B-Schmalband bei Psoriasis/Vitiligo
- **Röntgen (Diagnostik/Therapie):** Projektionsradiografie, CT, interventionelle Radiologie, Strahlentherapie
- **Gamma (Nuklearmedizin):** PET (Positron→Annihilation→2 × 511 keV), SPECT, Gamma-Knife (stereotaktische Radiochirurgie)

> **Merke:** c = λ·f = 3×10⁸ m/s für alle EM-Wellen im Vakuum. E = h·f — höhere Frequenz = mehr Energie. Ionisierend ab UV-C/Röntgen (>10 eV). MRT nutzt Radiowellen (nicht-ionisierend), CT nutzt Röntgen (ionisierend). Nicht-ionisierend bedeutet nicht risikolos — thermische Effekte (SAR) werden überwacht.

---

## MRT im Detail

Ein statisches Feld B₀ polarisiert die Kernspins von Wasserstoffprotonen (¹H). HF-Pulse bei der **Larmor-Frequenz** f_L = γ·B₀/2π (für ¹H: γ/2π = 42,58 MHz/T) kippen die Magnetisierung. Nach dem Puls präzedieren die Spins — diese Präzession (Kreiselbewegung der Spins um B₀) induziert via Faraday eine Wechselspannung in der Empfangsspule. Gradientenspulen kodieren den Ort.

Stell dir die Protonen wie Kreisel vor, die nach dem HF-Puls synchron rotieren. T₁ misst, wie schnell sie in ihre Ausgangslage zurückkippen. T₂ misst, wie schnell sie aus dem Takt geraten:

Die **T₁-Relaxation** (Spin-Gitter) beschreibt die Rückkehr der Längsmagnetisierung M_z zum Gleichgewicht — Spins geben Energie an das umgebende Gewebe (Gitter) ab. Die **T₂-Relaxation** (Spin-Spin) beschreibt den Zerfall der Quermagnetisierung M_xy — benachbarte Spins beeinflussen sich gegenseitig und dephasieren. Wasser hat lange T₁ und T₂ (freie Molekülbewegung), Fett hat kurze T₁ (effiziente Energieabgabe an das Gitter). Diese gewebespezifischen Unterschiede erzeugen den diagnostischen Bildkontrast.

> **Prüfungstipp:** Die Larmor-Frequenz f_L = (γ/2π)·B₀ mit γ/2π = 42,58 MHz/T für Protonen ist eine beliebte MedAT-Rechenaufgabe. Bei 1,5 T: 64 MHz, bei 3 T: 128 MHz. Verdopplung des Feldes = Verdopplung der Frequenz (linearer Zusammenhang).

---

## Biomagnetismus

Biologische Ströme (Aktionspotentiale, Herzstrom) erzeugen extrem schwache Magnetfelder: Herz ~10⁻¹⁰ T (MCG, Magnetkardiographie), Gehirn ~10⁻¹³ T (MEG, Magnetenzephalographie). Gemessen mit **SQUID-Sensoren** (superconducting quantum interference devices) bei 4 K. MCG und MEG sind strahlungsfrei und zeitlich hochauflösend (<1 ms). **Transkranielle Magnetstimulation (TMS)**: Ein kurzer, starker Magnetfeldpuls (dB/dt ≈ 10⁴ T/s) induziert nach Faraday ein elektrisches Feld im Kortex (~200 V/m), das Neuronen depolarisiert — nicht-invasiv, therapeutisch bei Depression (rTMS).

---

## Rechenbeispiele

**Beispiel 1 — Larmor-Frequenz bei verschiedenen MRT-Feldstärken:**
f_L = (γ/2π) · B₀ mit γ/2π = 42,58 MHz/T für ¹H.
Bei 1,5 T: f_L = 42,58 × 1,5 = **63,87 MHz** (≈ 64 MHz, UKW-Bereich).
Bei 3 T: f_L = 42,58 × 3 = **127,74 MHz** (UHF-Bereich).
Bei 7 T: f_L = 42,58 × 7 = **298,06 MHz** — höheres SNR, aber stärkere HF-Absorption (SAR-Limit).

**Beispiel 2 — Zyklotron: Protonenenergie für PET-Isotop ¹⁸F:**
Zyklotron B = 1,2 T, Austrittsradius r = 0,4 m. Protonengeschwindigkeit: v = q·B·r/m = (1,6×10⁻¹⁹ · 1,2 · 0,4) / 1,67×10⁻²⁷ ≈ **4,6×10⁷ m/s** (≈ 15 % c).
Kinetische Energie: E_kin = ½mv² ≈ 1,77×10⁻¹² J ≈ **11 MeV** — ausreichend für ¹⁸O(p,n)¹⁸F-Reaktion (Schwelle ~2,6 MeV).

**Beispiel 3 — Transformator mit Verlust:**
Primär: 230 V, 500 Windungen. Sekundär: 1000 Windungen, Wirkungsgrad η = 95 %.
Ideale Sekundärspannung: U₂ = 230 × 1000/500 = 460 V. Reale Sekundärleistung: P₂ = η · P₁ = 0,95 · P₁. Der Verlust (5 %) geht als Joulesche Wärme im Kern (Wirbelströme, Hysterese) und in den Wicklungen verloren.

**Beispiel 4 — TMS: induzierte Feldstärke im Kortex:**
TMS-Spule erzeugt dB/dt = 10⁴ T/s über einer Fläche A ≈ 25 cm² = 25×10⁻⁴ m².
Induzierte EMK: |ε| = A · dB/dt = 25×10⁻⁴ · 10⁴ = **25 V**.
Induzierte Feldstärke im Gewebe (Radius ~2 cm): E ≈ ε/(2π·r) = 25/(2π·0,02) ≈ **200 V/m** — 100× über der Neuronenschwelle.

**Beispiel 5 — Lorentz-Kraft auf ein Ion im Blut:**
Na⁺-Ion (q = 1,6×10⁻¹⁹ C) fließt mit v = 0,5 m/s durch die Aorta im MRT (B = 3 T, senkrecht).
F = q·v·B = 1,6×10⁻¹⁹ × 0,5 × 3 = **2,4×10⁻¹⁹ N**. Dieser winzige Effekt ist messbar als magnetohydrodynamischer Artefakt im EKG bei MRT (T-Wellen-Erhöhung durch Ladungstrennung im Blutfluss).`,

      lernziele: [
        "Magnetfeldlinien, Permeabilität und magnetische Materialien (dia-/para-/ferromagnetisch) erklären",
        "Das Magnetfeld eines geraden Leiters (Biot-Savart) und einer Spule (Solenoid) berechnen",
        "Die Lorentz-Kraft auf bewegte Ladungen beschreiben und den Zyklotronradius berechnen",
        "Das Faradaysche Induktionsgesetz und die Lenzsche Regel erklären und anwenden",
        "Selbstinduktion, Induktivität und Transformator beschreiben und berechnen",
        "Das elektromagnetische Spektrum und medizinische Anwendungen verschiedener Frequenzbereiche nennen",
        "Das Prinzip der MRT-Bildgebung physikalisch auf Magnetfeld, Larmor-Präzession und Induktion zurückführen",
      ],
      sections: [
        {
          heading: "Magnetische Grundbegriffe",
          text: "Magnetfeld B [T] entsteht durch bewegte Ladungen/Ströme. Feldlinien immer geschlossen (keine Monopole), vom Nord- zum Südpol außen. Permeabilität μᵣ: diamagnetisch (<1, Wasser), paramagnetisch (>1, Gadolinium-KM), ferromagnetisch (≫1, Eisen — MRT-Gefahr). Biot-Savart: B = μ₀·I/(2π·r) für geraden Leiter. Solenoid: B = μ₀·μᵣ·n·I (homogen im Innern). MRT-Magnete: supraleitende Solenoide, 1,5–7 T.",
          merksatz:
            "Magnetfeldlinien sind immer geschlossen — keine Monopole. Ferromagnetische Materialien (Eisen, Nickel, Cobalt) werden im MRT zu gefährlichen Projektilen.",
        },
        {
          heading: "Lorentz-Kraft und Anwendungen",
          text: "F = q·v×B — senkrecht auf v und B, keine Arbeit (nur Ablenkung). Kreisbahn: r = m·v/(q·B). Zyklotronfrequenz f = q·B/(2π·m) geschwindigkeitsunabhängig. Anwendungen: Massenspektrometrie (r → Masse), Zyklotron (PET-Isotope ¹⁸F), MRT-Klopfen (Lorentz-Kraft auf Gradientenspulen), Hall-Effekt (Durchflusssensoren).",
          merksatz:
            "Die Lorentz-Kraft lenkt geladene Teilchen im Magnetfeld auf Kreisbahnen ab — r = m·v/(q·B). Schwerere/schnellere Teilchen → größerer Radius.",
        },
        {
          heading: "Elektromagnetische Induktion und Transformator",
          text: "Faraday: ε = −N·dΦ/dt (Φ = B·A·cos α). Lenz: induzierter Strom wirkt der Flussänderung entgegen (Energieerhaltung). Drei Induktionswege: B, A oder α zeitlich ändern. Wirbelströme: kreisförmige Induktionsströme in Leitern → Wärme (Induktionsherd, Hyperthermie). Selbstinduktion: ε = −L·dI/dt, W = ½·L·I². Transformator: U₁/U₂ = N₁/N₂; Trenntransformator im OP (galvanische Trennung).",
          merksatz:
            "Faraday: ε = −N·dΦ/dt. Lenz: induzierter Strom hemmt seine Ursache. Transformator: U₁/U₂ = N₁/N₂.",
        },
        {
          heading: "EM-Spektrum und MRT",
          text: "c = λ·f = 3×10⁸ m/s; E = h·f. Spektrum: Radio (MRT) → Mikrowellen → IR → sichtbar → UV → Röntgen → Gamma. Ionisierend ab UV-C/Röntgen. MRT: B₀ polarisiert ¹H-Spins, HF-Puls bei Larmor-Frequenz f_L = γ·B₀/2π (1,5 T: ~64 MHz). T₁/T₂-Relaxation gewebespezifisch → Bildkontrast. Gradientenspulen: Ortscodierung.",
          merksatz:
            "c = λ·f = 3×10⁸ m/s. E = h·f. Larmor: f_L = γ·B₀/2π. MRT bei 1,5 T: f ≈ 64 MHz (Radiowelle, nicht-ionisierend).",
        },
        {
          heading: "Biomagnetismus und klinische Anwendungen",
          text: "Biologische Ströme erzeugen schwache Magnetfelder: Herz ~10⁻¹⁰ T (MCG), Gehirn ~10⁻¹³ T (MEG). Messung mit SQUID-Sensoren bei 4 K. TMS: Magnetpuls (dB/dt ≈ 10⁴ T/s) induziert (Faraday) ~200 V/m im Kortex → Neuronendepolarisation. Therapeutisch bei Depression (rTMS). Strahlungsfrei, nicht-invasiv.",
          merksatz:
            "MEG: ~10⁻¹³ T (Gehirn). MCG: ~10⁻¹⁰ T (Herz). TMS: Magnetpuls → Faraday-Induktion → Nervenreiz.",
        },
      ],
      merksätze: [
        "Magnetfeldlinien sind immer geschlossen — keine Monopole. Zerbricht man einen Magneten, entstehen zwei vollständige Magnete.",
        "Permeabilität μᵣ: diamagnetisch (<1, Wasser/Gewebe), paramagnetisch (>1, Gadolinium-KM), ferromagnetisch (≫1, Eisen — MRT-Projektilgefahr).",
        "Magnetfeld gerader Leiter: B = μ₀·I/(2π·r). Rechte-Hand-Regel für Richtung.",
        "Solenoid: B = μ₀·μᵣ·n·I — im Innern homogen. MRT-Magnete: supraleitende Solenoide (1,5–7 T).",
        "Die Lorentz-Kraft F = q·(v×B) lenkt bewegte Ladungen quer ab, ohne sie zu bremsen — deshalb Kreisbahnen.",
        "Zyklotronradius r = m·v/(q·B). Zyklotronfrequenz f = q·B/(2π·m) ist geschwindigkeitsunabhängig.",
        "Massenspektrometrie: Schwerere Ionen → größerer Radius bei gleicher Geschwindigkeit und Ladung.",
        "Faraday: ε = −N·dΦ/dt — drei Wege zur Induktion: B, A oder α zeitlich ändern.",
        "Lenzsche Regel: induzierter Strom wirkt Ursache entgegen (Energieerhaltung).",
        "Wirbelströme: Induktionsströme in leitfähigen Körpern → Joulesche Wärme. Anwendung: Induktionsherd, Hyperthermie.",
        "Selbstinduktion: ε = −L·dI/dt. Energie: W = ½·L·I².",
        "Transformator: U₁/U₂ = N₁/N₂. Leistungserhaltung: P₁ = P₂ → I₁/I₂ = N₂/N₁.",
        "Trenntransformator im OP: galvanische Trennung zum Patientenschutz.",
        "c = λ·f = 3×10⁸ m/s. Photonenenergie: E = h·f — ionisierend ab UV-C/Röntgen.",
        "Larmor-Frequenz: f_L = γ·B₀/2π — bei 1,5 T für ¹H: ~64 MHz. Verdopplung B₀ = Verdopplung f.",
        "TMS: Magnetfeldpuls induziert (Faraday) ~200 V/m im Kortex → Neuronenreizung.",
      ],
      altfrage: {
        text: "Die Larmor-Frequenz für ¹H-Protonen bei 1,5 T beträgt ca. 64 MHz. Welche Frequenz ergibt sich bei 3 T?",
        options: [
          { id: "a", text: "32 MHz" },
          { id: "b", text: "64 MHz" },
          { id: "c", text: "96 MHz" },
          { id: "d", text: "128 MHz" },
          { id: "e", text: "192 MHz" },
        ],
        correctOptionId: "d",
        explanation:
          "f_L = γ·B₀/(2π), also f ∝ B₀. Bei doppeltem Magnetfeld (3 T statt 1,5 T) verdoppelt sich die Larmor-Frequenz: 2 × 64 MHz = 128 MHz.",
      },
      klinischerBezug:
        "Die Magnetresonanztomographie (MRT) nutzt das Faradaysche Induktionsgesetz zur Signaldetektion: Präzedierende Protonenspins induzieren in Empfangsspulen eine messbare Wechselspannung — ohne ionisierende Strahlung, mit hervorragenden Weichteilkontrasten. Transkranielle Magnetstimulation (TMS) induziert durch kurze Magnetfeldpulse (Faraday) elektrische Ströme in kortikalen Neuronen und ermöglicht so nicht-invasive Hirnstimulation zur Behandlung von Depression und zur Kartierung kortikaler Areale. Das Elektrokardiogramm (EKG) misst elektrische Potentiale; das Magnetkardiogramm (MCG) erfasst direkt das durch Herzströme erzeugte Magnetfeld (~10⁻¹⁰ T) mit SQUID-Sensoren — strahlungsfrei und hochempfindlich.",
      selfTest: [
        {
          question:
            "Ein Proton (m = 1,67 × 10⁻²⁷ kg, q = 1,6 × 10⁻¹⁹ C) bewegt sich mit v = 10⁶ m/s senkrecht in ein Magnetfeld B = 0,5 T. Wie groß ist der Zyklotronradius?",
          options: ["r ≈ 2,1 cm", "r ≈ 0,21 mm", "r ≈ 21 mm", "r ≈ 210 µm", "r ≈ 2,1 m"],
          correctIndex: 0,
          explanation:
            "r = m·v/(q·B) = (1,67×10⁻²⁷ × 10⁶) / (1,6×10⁻¹⁹ × 0,5) = 1,67×10⁻²¹ / (8×10⁻²⁰) = 0,02088 m ≈ 2,1 cm. Dieses Prinzip nutzt das Zyklotron: Protonen werden durch wechselnde elektrische Felder beschleunigt und durch ein Magnetfeld auf Kreisbahnen gehalten. Mit steigender Geschwindigkeit wächst der Radius → spiralförmige Bahn nach außen. Bei ausreichend hoher Energie werden Protonen ausgekoppelt und für PET-Isotopen-Produktion (z. B. ¹⁸F) genutzt.",
          hints: [
            "r = m·v/(q·B). Setze alle Werte ein. Achte auf Zehnerpotenzen.",
            "Zähler: 1,67×10⁻²⁷ × 10⁶ = 1,67×10⁻²¹. Nenner: 1,6×10⁻¹⁹ × 0,5 = 8×10⁻²⁰.",
          ],
          difficulty: 2,
          tags: ["zyklotronradius", "lorentz-kraft", "magnetfeld"],
        },
        {
          question:
            "Bei welcher Larmor-Frequenz präzedieren ¹H-Protonen in einem MRT-Gerät mit B₀ = 3 T? (γ/2π = 42,58 MHz/T)",
          options: ["42,58 MHz", "64 MHz", "127,74 MHz", "300 MHz", "14,2 MHz"],
          correctIndex: 2,
          explanation:
            'f_L = (γ/2π) · B₀ = 42,58 MHz/T × 3 T = 127,74 MHz ≈ 128 MHz. Diese Frequenz liegt im UKW-Radiobereich. Bei 1,5 T: f_L ≈ 64 MHz; bei 7 T: f_L ≈ 298 MHz. Die Resonanzbedingung (HF-Puls muss genau f_L haben) ist der Grund für den Begriff "Resonanz" in der Magnetresonanztomographie. Hochfeldgeräte (7 T) arbeiten im UHF-Bereich und haben besseres Signal-Rausch-Verhältnis, aber stärkere HF-Absorption im Gewebe (SAR-Limit).',
          hints: [
            "f_L = (γ/2π) · B₀. Multipliziere den gegebenen Wert mit B₀ = 3 T.",
            "42,58 MHz/T × 3 T = ?",
          ],
          difficulty: 1,
          tags: ["larmor-frequenz", "mrt", "kernspinresonanz"],
        },
        {
          question:
            "Welcher Effekt erklärt das charakteristische Klopfen und Hämmern während einer MRT-Untersuchung?",
          options: [
            "Magnetostriktion der supraleitenden Spule bei 4 K",
            "Thermische Ausdehnung der Kühlröhren bei Heliumzufuhr",
            "Kavitation durch starke Schallwellen",
            "Lorentz-Kraft auf stromführende Gradientenspulen im starken Hauptmagnetfeld B₀",
            "Resonanzschwingungen des Patienten im Magnetfeld",
          ],
          correctIndex: 3,
          explanation:
            "Die Gradientenspulen (x, y, z) überlagern dem statischen Feld B₀ schwache ortsabhängige Felder zur Ortscodierung. Beim Ein- und Ausschalten dieser Gradientenströme (I, wechselnd) erfährt die stromführende Spule eine Lorentz-Kraft: F = I·L×B₀. Da B₀ sehr stark ist (1,5–7 T), entstehen erhebliche mechanische Kräfte auf die Spulenleiter — Vibrationen → Schall (~60–120 dB). Deshalb werden MRT-Patienten mit Gehörschutz versehen. Neuere Sequenzen (Silent Scan) modulieren die Gradienten sanfter, um die Lärmentwicklung zu reduzieren.",
          hints: [
            "In einem starken Magnetfeld: Was passiert mit einem stromdurchflossenen Leiter? (F = I·L×B)",
            "Gradientenspulen werden schnell ein- und ausgeschaltet → wechselnde Kraft → Vibration → Schall.",
          ],
          difficulty: 3,
          tags: ["mrt-klopfen", "lorentz-kraft", "gradientenspulen"],
        },
        {
          question:
            "Ein Transformator hat 200 Windungen in der Primärspule und 2000 in der Sekundärspule. Bei 230 V Primärspannung: Welche Sekundärspannung ergibt sich (idealer Transformator)?",
          options: ["23 V", "230 V", "2300 V", "460 V", "115 V"],
          correctIndex: 2,
          explanation:
            "Für einen idealen Transformator gilt: U₁/U₂ = N₁/N₂. Umgestellt: U₂ = U₁ · N₂/N₁ = 230 V · 2000/200 = 230 × 10 = 2300 V. Das Übersetzungsverhältnis N₂/N₁ = 10 → Hochspannungstransformator. Die Leistung bleibt bei idealem Transformator konstant: P = U₁·I₁ = U₂·I₂. Wenn die Spannung um Faktor 10 steigt, sinkt der Strom um Faktor 10. Anwendung in der Medizin: Transformatoren in der Hochspannungsversorgung von Röntgengeräten, galvanische Trennung von Patientenkreisen (Sicherheitstransformator, IEC 60601).",
          hints: [
            "U₁/U₂ = N₁/N₂. Umstellen: U₂ = U₁ · (N₂/N₁).",
            "230 V × (2000/200) = 230 × 10 = ?",
          ],
          difficulty: 1,
          tags: ["transformator", "induktion", "windungszahl"],
        },
        {
          question:
            "Die Transkranielle Magnetstimulation (TMS) nutzt welches physikalische Prinzip zur Nervenreizung?",
          options: [
            "Direkte Magnetkraft (Lorentz-Kraft) auf Neuronen-Ionenkanäle",
            "Kapazitive Kopplung über die Schädelkalotte",
            "Thermische Aktivierung durch Joulesche Wärme",
            "Resonanzabsorption von Radiowellen durch Protonen",
            "Elektromagnetische Induktion (Faraday): Magnetfeldpuls induziert elektrischen Strom im Kortex",
          ],
          correctIndex: 4,
          explanation:
            "TMS nutzt das Faradaysche Induktionsgesetz: Eine Spule über dem Schädel erzeugt einen kurzen (~100 µs), sehr starken Magnetfeldpuls (dB/dt bis zu 10⁴ T/s). Nach Faraday (ε = −dΦ/dt) wird dadurch ein elektrisches Feld im darunterliegenden Kortexgewebe induziert. Dieses Feld treibt einen elektrischen Strom durch die Neuronen — ausreichend stark (~1–2 V/m), um Aktionspotentiale auszulösen. Vorteil gegenüber direkter elektrischer Stimulation: kein schmerzhafter Hautstrom, nicht-invasiv. TMS wird therapeutisch bei therapieresistenter Depression eingesetzt (rTMS) und in der Forschung zur Kartierung kortikaler Areale.",
          hints: [
            "TMS: Magnetspule erzeugt schnell wechselndes Magnetfeld. Welches Gesetz verbindet ΔB mit einem elektrischen Feld?",
            "Faraday: Ein zeitlich veränderliches Magnetfeld induziert ein elektrisches Feld — auch ohne Leiter.",
          ],
          difficulty: 2,
          tags: ["tms", "faraday", "neurostimulation"],
        },
        {
          question: "Welche Aussage über magnetische Feldlinien ist richtig?",
          options: [
            "Magnetische Feldlinien beginnen am Nordpol und enden am Südpol — sie sind offen",
            "Magnetische Feldlinien sind immer geschlossen und verlaufen außen von Nord nach Süd, innen von Süd nach Nord",
            "Magnetische Feldlinien verlaufen nur innerhalb von ferromagnetischen Materialien",
            "Die Dichte der Feldlinien hat keinen Zusammenhang mit der Feldstärke",
            "Magnetische Monopole existieren in supraleitenden Materialien",
          ],
          correctIndex: 1,
          explanation:
            "Magnetische Feldlinien sind immer geschlossen — das ist der fundamentale Unterschied zu elektrischen Feldlinien. Außerhalb des Magneten verlaufen sie vom Nord- zum Südpol, innerhalb schließen sie sich vom Süd- zum Nordpol. Es gibt keine magnetischen Monopole (kein isolierter Nord- oder Südpol). Die Dichte der Feldlinien repräsentiert die Feldstärke: enge Linien = starkes Feld.",
          hints: [
            "Gibt es magnetische Monopole? Was passiert, wenn man einen Magneten zerbricht?",
            "Magnetfeldlinien haben keinen Anfang und kein Ende — sie sind geschlossene Schleifen.",
          ],
          difficulty: 1,
          tags: ["magnetfeldlinien", "monopole", "grundlagen"],
        },
        {
          question:
            "Gadolinium wird als MRT-Kontrastmittel eingesetzt. Welche magnetische Eigenschaft von Gadolinium ist dafür verantwortlich?",
          options: [
            "Diamagnetisch — es schwächt das lokale Magnetfeld ab",
            "Ferromagnetisch — es verstärkt das Magnetfeld um den Faktor 1000",
            "Paramagnetisch — es verkürzt die T₁-Relaxationszeit im umliegenden Gewebe",
            "Supraleitend — es leitet den Strom verlustfrei",
            "Antiferromagnetisch — es hebt das externe Feld lokal auf",
          ],
          correctIndex: 2,
          explanation:
            "Gadolinium (Gd³⁺) ist paramagnetisch (μᵣ geringfügig > 1) und verkürzt die T₁-Relaxationszeit in seiner Umgebung. In T₁-gewichteten MRT-Bildern erscheinen Gewebe mit Kontrastmittelanreicherung (z. B. Tumoren mit gestörter Blut-Hirn-Schranke) dadurch heller. Gadolinium ist nicht ferromagnetisch und erzeugt daher keine gefährlichen Projektileffekte im MRT-Scanner.",
          hints: [
            "Ferromagnetische Stoffe wären im MRT gefährlich (Projektileffekt). Kontrastmittel müssen sicher sein.",
            "Paramagnetische Ionen beeinflussen die Relaxationszeiten der umgebenden Protonen.",
          ],
          difficulty: 2,
          tags: ["gadolinium", "mrt-kontrastmittel", "paramagnetismus"],
        },
        {
          question: "Welche der folgenden Aussagen über die Lenzsche Regel ist falsch?",
          options: [
            "Sie ist eine direkte Folge der Energieerhaltung",
            "Der induzierte Strom erzeugt ein Magnetfeld, das der Flussänderung entgegenwirkt",
            "Sie erklärt das negative Vorzeichen im Faradayschen Induktionsgesetz",
            "Der induzierte Strom verstärkt die ursprüngliche Flussänderung, um maximale Spannung zu erzeugen",
            "Sie gilt für alle Induktionsvorgänge — auch Selbstinduktion",
          ],
          correctIndex: 3,
          explanation:
            "Die falsche Aussage ist D: Der induzierte Strom wirkt der Flussänderung immer entgegen (nicht verstärkend). Würde er die Flussänderung verstärken, wäre das ein Perpetuum mobile — unbegrenzte Energieerzeugung ohne externe Quelle. Die Lenzsche Regel ist eine direkte Konsequenz der Energieerhaltung und erklärt das Minuszeichen in ε = −N·dΦ/dt.",
          hints: [
            "Was wäre, wenn der induzierte Strom die Ursache verstärken würde? Könnte man dann Energie aus dem Nichts erzeugen?",
            "Energieerhaltung verbietet Selbstverstärkung — deshalb das Minuszeichen bei Faraday.",
          ],
          difficulty: 1,
          tags: ["lenz", "induktion", "energieerhaltung"],
        },
        {
          question:
            "Ein Induktionsherd funktioniert durch Wirbelströme. Warum wird der Topfboden heiß, aber die Glaskeramikplatte bleibt relativ kühl?",
          options: [
            "Die Glaskeramik hat eine höhere Wärmekapazität als Metall",
            "Wirbelströme entstehen nur in elektrisch leitfähigen Materialien — Glaskeramik ist ein Isolator",
            "Die Glaskeramik reflektiert das Magnetfeld vollständig",
            "Der Topfboden absorbiert die Mikrowellenstrahlung des Herdes",
            "Die Glaskeramik ist supraleitend und hat keinen Widerstand",
          ],
          correctIndex: 1,
          explanation:
            "Wirbelströme (induzierte Kreisströme nach Faraday) können nur in elektrisch leitfähigen Materialien fließen. Die Wechselstromspule unter der Glaskeramik erzeugt ein wechselndes Magnetfeld. Dieses induziert Wirbelströme im ferromagnetischen/leitfähigen Topfboden (Eisen, Stahl). Die Wirbelströme erzeugen Joulesche Wärme (P = I²·R) direkt im Topf. Die Glaskeramikplatte ist ein elektrischer Isolator — keine Wirbelströme, keine direkte Erhitzung. Sie wird nur durch Wärmeleitung vom heißen Topf sekundär erwärmt.",
          hints: [
            "Was braucht man für einen elektrischen Strom? Freie Ladungsträger. Hat Glaskeramik diese?",
            "Faraday induziert eine Spannung — aber Strom fließt nur, wenn das Material leitet.",
          ],
          difficulty: 2,
          tags: ["wirbelströme", "induktion", "induktionsherd"],
        },
      ],
    },

    // === from kap6-optik ===
    // ─────────────────────────────────────────────────────────────────────────
    // UK ph-6-01: Geometrische Optik
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "ph-6-01",
      title: "Geometrische Optik",
      stichworte: [
        "Reflexionsgesetz",
        "Brechungsgesetz",
        "Snellius",
        "Brechungsindex",
        "Totalreflexion",
        "Glasfaser",
        "Endoskopie",
        "Sammellinse",
        "Zerstreuungslinse",
        "Linsengleichung",
        "Brechkraft",
        "Dioptrie",
      ],
      content: `Warum leuchtet ein Endoskop um Ecken, und wie korrigiert eine Brille unscharfes Sehen? Beide Antworten führen auf zwei grundlegende Wellenphänomene zurück: Reflexion und Brechung.

## Reflexionsgesetz

Endoskopie, Brillen, Laserchirurgie — die gesamte medizinische Optik baut auf zwei Grundgesetzen auf: Reflexion und Brechung. Wenn Licht auf eine glatte Oberfläche trifft, wird es reflektiert. Das **Reflexionsgesetz** lautet:

> **Einfallswinkel α₁ = Ausfallswinkel α₂**

Beide Winkel werden stets zur **Flächennormalen** (dem Lot auf der Oberfläche) gemessen, nicht zur Oberfläche selbst. Bei einem ebenen Spiegel entsteht ein virtuelles, seitenvertauschtes Bild in gleicher Größe wie das Objekt. Der scheinbare Bildabstand hinter dem Spiegel entspricht dem realen Objektabstand vor dem Spiegel.

**Spiegeltypen und Anwendungen:**
- **Ebener Spiegel**: virtuelles, gleichgroßes Bild (Mundhöhleninspektion, Zahnarzt-Spiegel)
- **Konkaver Hohlspiegel**: reelles oder virtuelles vergrößertes Bild (Ophthalmoskop-Reflektoren, Zahnarzt-Kopfspiegel, Parabolantennen)
- **Konvexer Wölbspiegel**: virtuelles verkleinertes Bild, großes Sichtfeld (Überwachungsspiegel)

> **Merke:** Einfallswinkel = Ausfallswinkel, beide zur Flächennormalen gemessen. Bei rauhen Oberflächen: diffuse Reflexion (Streuung in alle Richtungen).

{{DIAGRAM:snellius-refraction}}

## Brechungsgesetz (Snellius)

Trifft Licht schräg auf die Grenzfläche zwischen zwei optisch unterschiedlichen Medien, ändert es seine Ausbreitungsrichtung. Das **Snellsche Brechungsgesetz** beschreibt diese Ablenkung:

> **n₁ · sin α₁ = n₂ · sin α₂**

**Formelklartext:** n₁·sin α₁ = n₂·sin α₂ bedeutet: Das **Produkt aus Brechungsindex und Sinus des Winkels** ist auf beiden Seiten der Grenzfläche gleich. **Übergang in dichteres Medium** (n₂ > n₁, z. B. Luft → Wasser): sin α₂ = (n₁/n₂)·sin α₁ < sin α₁ → **α₂ < α₁** — der Strahl bricht **zum Lot hin**. **Übergang in dünneres Medium** (n₂ < n₁): Strahl bricht **vom Lot weg**. **Totalreflexion:** Wenn n₁ > n₂ und α₁ so groß, dass sin α₂ = 1 würde → ab **Grenzwinkel** sin α_grenz = n₂/n₁ wird alles reflektiert. **Einheiten:** n dimensionslos; Winkel in Grad oder Radiant (einheitlich verwenden).

Der **Brechungsindex n** ist ein dimensionsloses Maß für die optische Dichte eines Mediums:
- n_Vakuum = 1 (exakt)
- n_Luft ≈ 1,0003 ≈ 1
- n_Wasser ≈ 1,33
- n_Glas ≈ 1,5 (je nach Glasart 1,45–1,9)
- n_Diamant ≈ 2,42

Physikalisch gilt: n = c/v, wobei c die Lichtgeschwindigkeit im Vakuum (≈ 3·10⁸ m/s) und v die Phasengeschwindigkeit im Medium ist. Je größer n, desto langsamer das Licht und desto stärker die Brechung zum Lot hin.

**Beim Übergang von optisch dünnem zu dichtem Medium** (n₁ < n₂, z. B. Luft → Glas) bricht der Strahl zum Lot hin (α₂ < α₁).
**Beim Übergang von dichtem zu dünnem Medium** (n₁ > n₂, z. B. Glas → Luft) bricht der Strahl vom Lot weg (α₂ > α₁).

## Totalreflexion

Geht Licht von einem optisch dichteren Medium (n₁) in ein dünneres (n₂ < n₁), so steigt der Brechungswinkel α₂ mit zunehmendem Einfallswinkel α₁. Ab einem bestimmten **Grenzwinkel α_grenz** erreicht α₂ genau 90° – der gebrochene Strahl läuft entlang der Grenzfläche. Für noch größere Einfallswinkel tritt keine Transmission mehr auf: das Licht wird **vollständig reflektiert**.

> **sin α_grenz = n₂ / n₁** (gilt nur für n₁ > n₂)

Beispiel Glas (n=1,5) → Luft (n=1): sin α_grenz = 1/1,5 = 0,667 → α_grenz ≈ 41,8°

**Klinische Anwendung – Endoskopie:** Glasfasern nutzen Totalreflexion, um Licht über weite Strecken und um Kurven zu leiten. Millionen dünner Glasfasern bilden flexible Lichtleiter für Endoskope (Gastroskop, Koloskop, Bronchoskop). Die Fasern müssen von einem Mantel mit kleinerem n umgeben sein, damit Totalreflexion an der Kern-Mantel-Grenze gewährleistet ist.

> **Prüfungstipp:** Beim Snellius-Gesetz wird gerne nach der Brechungsrichtung gefragt: Übergang in dichteres Medium (n₂ > n₁) = Brechung zum Lot; in dünneres Medium = vom Lot weg. Totalreflexion geht nur vom dichteren ins dünnere Medium — nie umgekehrt!


{{DIAGRAM:lens-imaging}}

## Linsen und Brechkraft

Linsen sind optische Elemente, die Lichtstrahlen durch Brechung an zwei Flächen ablenken.

**Sammellinse** (konvex, bikonvex): in der Mitte dicker, positive Brennweite f > 0. Parallel einfallendes Licht wird im realen **Brennpunkt F** gesammelt.

**Zerstreuungslinse** (konkav, bikonkav): am Rand dicker, negative Brennweite f < 0. Strahlen werden so abgelenkt, als kämen sie aus einem virtuellen Brennpunkt.

Die **Linsengleichung** (Abbildungsgleichung) verknüpft Brennweite f, Gegenstandsweite g und Bildweite b:

> **1/f = 1/g + 1/b**

**Formelklartext:** 1/f = 1/g + 1/b heißt: **Kehrwert der Brennweite** = **Summe der Kehrwerte** von Gegenstandsweite und Bildweite. Kennt man f und g, folgt 1/b = 1/f − 1/g → b = 1/(1/f − 1/g). **Sammellinse (f > 0):** reelles Bild für g > f; **Zerstreuungslinse (f < 0):** nur virtuelles Bild. **Brechkraft** D = 1/f [dpt], wenn f in **Metern**: f = 0,2 m → D = 5 dpt. **Einheiten:** f, g, b in m (oder einheitlich cm); D in dpt = 1/m.

Der **Abbildungsmaßstab** ist m = b/g = Bildgröße/Gegenstandsgröße.

Die **Brechkraft D** in **Dioptrien (dpt)** ist der Kehrwert der in Metern gemessenen Brennweite:

> **D = 1/f [m]**

Das menschliche Auge akkommodiert zwischen etwa 60 dpt (Fernpunkt) und 70 dpt (Nahpunkt, junges Auge). Brillengläser addieren Brechkraft zur vorhandenen Augenoptik.

Mehrere dünne Linsen eng beieinander können als Gesamtsystem behandelt werden:
> D_ges = D₁ + D₂ + ...

**Sphärische Aberration und Linsenfehler:**
Reale Linsen haben Bildfehler. Die **sphärische Aberration** entsteht, weil Randstrahlen stärker gebrochen werden als achsnahe Strahlen — das Bild wird unscharf. Abhilfe: Blenden (nur achsnahe Strahlen zulassen) oder asphärische Linsen. Die **chromatische Aberration** entsteht durch Dispersion: verschiedene Wellenlängen werden unterschiedlich stark gebrochen (kurzwelliges Licht stärker). Achromaten (verkittete Linsen aus verschiedenen Glasarten) korrigieren diesen Fehler. Im menschlichen Auge begrenzt die Pupille die sphärische Aberration natürlich.

## Rechenbeispiele

**Beispiel 1 — Brechung Luft → Wasser (Snellius):**
Lichtstrahl von Luft (n₁ = 1,0) in Wasser (n₂ = 1,33) unter α₁ = 60°.
sin α₂ = (n₁/n₂) · sin α₁ = (1/1,33) · sin 60° = 0,7519 · 0,8660 = 0,6510.
α₂ = arcsin(0,6510) ≈ **40,6°** — Strahl bricht zum Lot (α₂ < α₁ bei n₂ > n₁).

**Beispiel 2 — Glasfaser-Akzeptanzwinkel (Endoskopie):**
Kern n₁ = 1,62, Mantel n₂ = 1,52. Grenzwinkel: sin α_grenz = n₂/n₁ = 1,52/1,62 = 0,9383 → α_grenz = **69,8°**.
Numerische Apertur der Faser: NA = √(n₁²−n₂²) = √(2,6244−2,3104) = √0,314 ≈ **0,56**.
Maximaler Einkoppelwinkel (Akzeptanzwinkel): θ_max = arcsin(NA) = arcsin(0,56) ≈ **34°**.

**Beispiel 3 — Linsengleichung: Vergrößerung durch Sammellinse:**
f = 20 cm, Gegenstand bei g = 30 cm. 1/b = 1/f − 1/g = 1/20 − 1/30 = 3/60 − 2/60 = 1/60.
b = **60 cm** (reelles Bild). Maßstab: m = b/g = 60/30 = **2** → Bild ist 2× so groß, umgekehrt.
Brechkraft der Linse: D = 1/f = 1/0,20 m = **5 dpt**.`,
      diagram: "lens-imaging",
      lernziele: [
        "Das Reflexionsgesetz anwenden und Einfallswinkel gleich Ausfallswinkel erklären.",
        "Das Snellsche Brechungsgesetz formulieren und Brechungsindizes für Luft, Wasser und Glas kennen.",
        "Den Grenzwinkel der Totalreflexion berechnen und deren Anwendung in Glasfasern beschreiben.",
        "Die Linsengleichung 1/f = 1/g + 1/b anwenden und Brechkraft in Dioptrien umrechnen.",
        "Sammel- und Zerstreuungslinsen unterscheiden und deren Einsatz bei Fehlsichtigkeiten erklären.",
      ],
      sections: [
        {
          heading: "Reflexion und Brechung im Überblick",
          text: "Das Reflexionsgesetz beschreibt spiegelnde Flächen: Der Einfallswinkel entspricht dem Ausfallswinkel, stets gemessen zur Normalen. Die Brechung an Grenzflächen folgt dem Snellschen Gesetz n₁·sin α₁ = n₂·sin α₂. Beim Wechsel von dichtem zu dünnem Medium kann ab dem Grenzwinkel Totalreflexion auftreten – die Grundlage der Glasfasertechnik.",
          merksatz:
            "Einfallswinkel = Ausfallswinkel; beim Übergang in dichteres Medium: Strahl bricht zum Lot.",
        },
        {
          heading: "Linsengleichung und Brechkraft",
          text: "Die Linsengleichung 1/f = 1/g + 1/b gilt für dünne Linsen. Ist b positiv, liegt ein reelles (umgekehrtes) Bild hinter der Linse vor; ist b negativ, handelt es sich um ein virtuelles Bild auf der gleichen Seite wie der Gegenstand. Die Brechkraft D = 1/f (f in Metern) wird in Dioptrien gemessen. Sammellinsen haben positive, Zerstreuungslinsen negative Brechkraft.",
          merksatz: "D = 1/f [m] in Dioptrien – positive D sammelt, negative D zerstreut.",
        },
        {
          heading: "Totalreflexion und Glasfasertechnik",
          text: "Totalreflexion tritt auf, wenn Licht aus einem optisch dichten Medium (großes n) auf eine Grenzfläche zu einem dünneren Medium trifft und der Einfallswinkel den Grenzwinkel α_grenz = arcsin(n₂/n₁) übersteigt. Kein Licht dringt mehr ins zweite Medium ein – die gesamte Energie bleibt im ersten Medium. Dieses Prinzip wird in Glasfaserkabeln genutzt: Das Licht springt durch Totalreflexion an der Kern-Mantel-Grenzfläche und kann so verlustarme Signale über große Distanzen oder durch flexible Endoskope leiten.",
          merksatz: "sin α_grenz = n₂/n₁ – nur möglich wenn n₁ > n₂.",
        },
      ],

      merksätze: [
        "Reflexionsgesetz: Einfallswinkel α = Ausfallswinkel α (beide zur Normalen gemessen).",
        "Snellius: n₁·sin α₁ = n₂·sin α₂ – beim Übergang in dichteres Medium bricht Licht zum Lot.",
        "Totalreflexion: nur möglich bei n₁ > n₂; Grenzwinkel sin α_grenz = n₂/n₁.",
        "Brechungsindizes: Luft ≈ 1, Wasser ≈ 1,33, Glas ≈ 1,5, Diamant ≈ 2,42.",
        "Linsengleichung: 1/f = 1/g + 1/b; positives b → reelles Bild hinter der Linse.",
        "Brechkraft D = 1/f (f in Metern), Einheit Dioptrien (dpt).",
        "Sammellinse: f > 0, D > 0; Zerstreuungslinse: f < 0, D < 0.",
        "Abbildungsmaßstab m = b/g; m > 1 bedeutet Vergrößerung.",
        "Glasfasern nutzen Totalreflexion: Kern (großes n) + Mantel (kleines n) → Licht bleibt im Kern.",
        "Brechkräfte dünner Linsen im Kontakt addieren sich: D_ges = D₁ + D₂.",
      ],
      altfrage: {
        text: "Totalreflexion tritt auf, wenn Licht:",
        options: [
          { id: "a", text: "von einem optisch dünneren in ein optisch dichteres Medium übergeht" },
          { id: "b", text: "senkrecht auf eine Grenzfläche trifft" },
          {
            id: "c",
            text: "von einem optisch dichteren in ein optisch dünneres Medium übergeht und der Einfallswinkel größer als der Grenzwinkel ist",
          },
          { id: "d", text: "an einer Metalloberfläche reflektiert wird" },
          { id: "e", text: "durch ein Prisma gebrochen wird" },
        ],
        correctOptionId: "c",
        explanation:
          "Totalreflexion erfordert: (1) Übergang vom dichteren ins dünnere Medium (n₁ > n₂) und (2) Einfallswinkel > Grenzwinkel (sin α_grenz = n₂/n₁). In der Endoskopie leiten Glasfasern Licht über Totalreflexion.",
      },
      klinischerBezug:
        "Endoskopie: Glasfasern via Totalreflexion leiten Kaltlicht und Bilder durch flexible Schläuche – Grundlage von Gastroskopie, Koloskopie, Bronchoskopie.",
      selfTest: [
        {
          question:
            "Ein Lichtstrahl trifft von Luft (n=1,0) auf eine Glasoberfläche (n=1,5) unter einem Einfallswinkel von 45°. Welcher Brechungswinkel ergibt sich nach dem Snellschen Gesetz?",
          options: ["28,1°", "35,3°", "45,0°", "56,3°", "67,5°"],
          correctIndex: 0,
          explanation:
            "Nach Snellius gilt n₁·sin α₁ = n₂·sin α₂. Mit n₁=1,0, α₁=45°, n₂=1,5: sin α₂ = (1,0·sin 45°)/1,5 = 0,7071/1,5 = 0,4714. Damit folgt α₂ = arcsin(0,4714) ≈ 28,1°. Der Strahl bricht beim Übergang in das optisch dichtere Glas zum Lot hin, der Winkel wird also kleiner als der Einfallswinkel. Die übrigen Optionen entstehen durch fehlerhafte Anwendung (z. B. Vertauschen von n₁ und n₂ oder Vernachlässigung des Sinus).",
          hints: [
            "Snellius-Formel: n₁·sin α₁ = n₂·sin α₂ – stelle nach sin α₂ um.",
            "Beim Übergang in ein optisch dichteres Medium (größeres n) wird der Winkel kleiner.",
          ],
          tags: ["brechungsgesetz", "snellius", "brechungswinkel"],
          difficulty: 2,
        },
        {
          question:
            "Licht geht von Glas (n=1,5) in Luft (n=1,0) über. Ab welchem Grenzwinkel tritt Totalreflexion auf?",
          options: [
            "28,1°",
            "33,7°",
            "41,8°",
            "48,6°",
            "Totalreflexion ist in dieser Richtung nicht möglich",
          ],
          correctIndex: 2,
          explanation:
            "Die Totalreflexion tritt auf, wenn Licht vom dichteren ins dünnere Medium übergeht (n₁ > n₂). Der Grenzwinkel ergibt sich aus sin α_grenz = n₂/n₁ = 1,0/1,5 = 0,6667, also α_grenz = arcsin(0,6667) ≈ 41,8°. Für Einfallswinkel größer als 41,8° wird das Licht vollständig reflektiert. Die Option 48,6° wäre der Grenzwinkel für Wasser (n=1,33) → Luft. Option 5 wäre richtig, wenn das Licht von Luft in Glas ginge – dann nimmt der Brechungswinkel nie 90° an.",
          hints: [
            "Formel: sin α_grenz = n₂/n₁ – hier ist n₁=1,5 (Glas) und n₂=1,0 (Luft).",
            "Totalreflexion geht nur vom dichteren ins dünnere Medium, nicht umgekehrt.",
          ],
          tags: ["totalreflexion", "brechungsgesetz", "snellius"],
          difficulty: 2,
        },
        {
          question:
            "Eine Sammellinse hat eine Brennweite von 25 cm. Ein Gegenstand steht 50 cm davor. Wo befindet sich das Bild, und welcher Art ist es?",
          options: [
            "16,7 cm vor der Linse, virtuell",
            "25 cm hinter der Linse, reell",
            "50 cm hinter der Linse, reell",
            "100 cm hinter der Linse, reell",
            "Im Unendlichen, reell",
          ],
          correctIndex: 2,
          explanation:
            "Die Linsengleichung lautet 1/f = 1/g + 1/b. Mit f=25 cm und g=50 cm: 1/b = 1/f − 1/g = 1/25 − 1/50 = 2/50 − 1/50 = 1/50, also b=50 cm. Ein positives b bedeutet ein reelles Bild auf der dem Gegenstand gegenüberliegenden Seite der Linse. Der Abbildungsmaßstab ist m = b/g = 50/50 = 1 – das Bild ist gleich groß wie der Gegenstand. Dies entspricht dem Fall g = 2f, der in der Optik als neutraler Abbildungsfall bekannt ist.",
          hints: [
            "Stelle die Linsengleichung nach 1/b um: 1/b = 1/f − 1/g.",
            "Positives b bedeutet reelles Bild auf der Rückseite der Linse.",
          ],
          tags: ["sammellinse", "linsengleichung", "bildweite"],
          difficulty: 2,
        },
        {
          question:
            "Eine Brille hat eine Brechkraft von –2,0 Dioptrien. Welcher Brennweite entspricht das, und welchen Linsentyp beschreibt es?",
          options: [
            "2 cm, Sammellinse",
            "20 cm, Zerstreuungslinse",
            "50 cm, Zerstreuungslinse",
            "200 cm, Sammellinse",
            "500 cm, Zerstreuungslinse",
          ],
          correctIndex: 2,
          explanation:
            "Die Brechkraft D und die Brennweite f (in Metern) sind über D = 1/f verknüpft. Mit D = –2,0 dpt: f = 1/D = 1/(–2,0) = –0,50 m = –50 cm. Das negative Vorzeichen zeigt: Es handelt sich um eine Zerstreuungslinse (Konkavlinse). Zerstreuungslinsen werden zur Korrektur von Kurzsichtigkeit (Myopie) eingesetzt, weil sie das parallel einfallende Licht divergent machen und so den Fokus auf die Netzhaut zurückverlagern.",
          hints: [
            "Formel: f = 1/D mit f in Metern – wandle dann in Zentimeter um.",
            "Negatives f (und negatives D) kennzeichnet eine Zerstreuungslinse.",
          ],
          tags: ["brechkraft", "dioptrien", "zerstreuungslinse"],
          difficulty: 1,
        },
        {
          question:
            "Zwei dünne Linsen (D₁ = +3,0 dpt, D₂ = –1,0 dpt) werden eng nebeneinander gesetzt. Welche Gesamtbrechkraft und welche Brennweite hat das System?",
          options: [
            "D_ges = 2,0 dpt, f = 50 cm",
            "D_ges = 3,0 dpt, f = 33,3 cm",
            "D_ges = 4,0 dpt, f = 25 cm",
            "D_ges = –2,0 dpt, f = –50 cm",
            "D_ges = 1,5 dpt, f = 66,7 cm",
          ],
          correctIndex: 0,
          explanation:
            "Für dünne Linsen, die eng beieinanderstehen, addieren sich die Brechkräfte: D_ges = D₁ + D₂ = 3,0 + (–1,0) = 2,0 dpt. Daraus ergibt sich die Brennweite f = 1/D_ges = 1/2,0 = 0,50 m = 50 cm. Das positive Vorzeichen zeigt, dass das Gesamtsystem eine Sammellinse mit 50 cm Brennweite darstellt. Dieses Prinzip wird z. B. beim Design von Linsensystemen in Kameras oder beim Aufaddieren von Brillenstärken genutzt.",
          hints: [
            "Brechkräfte dünner Linsen im Kontakt addieren sich direkt: D_ges = D₁ + D₂.",
            "f = 1/D_ges (in Metern) – dann in Zentimeter umrechnen.",
          ],
          tags: ["linsensystem", "brechkraft", "dioptrien"],
          difficulty: 2,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK ph-6-02: Wellenoptik
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "ph-6-02",
      title: "Wellenoptik",
      stichworte: [
        "Interferenz",
        "Beugung",
        "Doppelspalt",
        "Dünnschichtinterferenz",
        "Beugungsgitter",
        "Polarisation",
        "Kohärenz",
        "Abbe-Kriterium",
        "Numerische Apertur",
        "Auflösungsvermögen",
        "OCT",
        "Pulsoximetrie",
        "Brewster-Winkel",
        "Spektrum",
        "Wellenlänge",
        "Superposition",
      ],
      content: `Warum schimmern Seifenblasen in Regenbogenfarben? Warum zeigt eine dünne Ölschicht auf einer Pfütze bunte Ringe? Und wie kann ein Augenarzt die Netzhaut schichtweise in Mikrometerauflösung darstellen? Die Antwort auf all diese Fragen liegt in der **Wellenoptik**: Licht ist eine transversale elektromagnetische Welle, deren Wellenberge und -täler sich gegenseitig verstärken oder auslöschen können. Diese Überlagerung — zusammen mit Beugung und Polarisation — erklärt Phänomene, die das Strahlenmodell der geometrischen Optik nicht fassen kann.

## Seifenblasen, Entspiegelung, OCT — Licht als Welle

Zur Erinnerung: Licht breitet sich mit c ≈ 3 × 10⁸ m/s im Vakuum aus. Die Wellenlänge bestimmt die Farbe (380 nm violett bis 780 nm rot), und es gilt **c = λ · f**. Im Medium sinkt die Geschwindigkeit (v = c/n), die Wellenlänge wird kürzer (λ_Medium = λ₀/n), aber die **Frequenz bleibt immer gleich** — ein klassischer Prüfungspunkt.

{{DIAGRAM:em-spectrum}}

---

## Interferenz — Verstärkung oder Auslöschung

Stell dir zwei Lautsprecher vor, die denselben Ton spielen. Gehst du durch den Raum, findest du laute Stellen (Wellenberge addieren sich) und leise Stellen (Berg trifft auf Tal). Genau so verhält sich Licht, wenn zwei kohärente Wellen — gleiche Frequenz, feste Phasenbeziehung — aufeinandertreffen. Ob Verstärkung oder Auslöschung eintritt, hängt vom **Gangunterschied Δ** ab: dem Unterschied der Wegstrecken, die beide Wellen bis zum Treffpunkt zurücklegen.

- **Konstruktive Interferenz** (hell): Gangunterschied Δ = n · λ (n = 0, 1, 2, …) — Berg trifft Berg
- **Destruktive Interferenz** (dunkel): Gangunterschied Δ = (n + ½) · λ — Berg trifft Tal

> **Merke:** Berg + Berg = doppelt hell. Berg + Tal = dunkel. Der Gangunterschied Δ entscheidet, ob Wellen sich verstärken oder auslöschen.

---

## Doppelspaltexperiment (Young) — der Beweis für Lichtwellen

Thomas Youngs Experiment (1801) machte die Interferenz von Licht erstmals sichtbar und bewies damit dessen Wellencharakter. Die Idee: Licht fällt auf zwei schmale, parallele Spalte im Abstand d. Hinter den Spalten breiten sich zwei kohärente Kugelwellen aus, die auf einem Schirm (Abstand L) ein charakteristisches **Streifenmuster aus hellen und dunklen Streifen** erzeugen.

Intuitiv: An Stellen, wo beide Wellen gleichzeitig als Berg ankommen, entsteht ein heller Streifen. Wo Berg auf Tal trifft, löschen sie sich aus — dunkler Streifen. Der Gangunterschied hängt vom Winkel θ ab:

> **Maxima bei d · sin θ = n · λ** (n = 0, 1, 2, …)

Für kleine Winkel (sin θ ≈ y/L) ergibt sich der praktisch nutzbare **Streifenabstand**:

> **Δy = λ · L / d**

{{DIAGRAM:double-slit}}

**Was passiert bei Veränderungen?**
| Änderung | Effekt auf Streifenabstand |
|---|---|
| λ verdoppelt | Δy verdoppelt (breitere Streifen) |
| d halbiert | Δy verdoppelt |
| L vergrößert | Δy vergrößert |
| Rotes statt blaues Licht | breitere Streifen (λ_rot > λ_blau) |

> **Merke:** Δy = λ·L/d — je größer die Wellenlänge oder je kleiner der Spaltabstand, desto weiter liegen die hellen Streifen auseinander.

---

## Beugung — Licht biegt um Ecken

Ein verbreitetes Missverständnis lautet: „Licht breitet sich nur geradlinig aus." Tatsächlich biegt sich Licht um Hindernisse und Kanten, wenn deren Abmessung in die Größenordnung der Wellenlänge kommt. Dieses Phänomen heißt **Beugung** (Diffraktion) und tritt nicht nur an Spalten auf, sondern an jeder Kante.

**Einzelspalt der Breite b:** Fällt Licht auf einen einzelnen Spalt, entsteht kein scharfer Schatten, sondern ein breites Zentralmaximum mit schwächeren Nebenmaxima. Das erste Minimum liegt bei **sin α = λ / b**. Je schmaler der Spalt (b kleiner), desto breiter das Beugungsmuster — langwelliges rotes Licht wird stärker gebeugt als kurzwelliges violettes.

**Beugungsscheibchen (Airy-Disk):** Jede kreisförmige Öffnung — ob Linse, Pupille oder Objektivblende — bildet einen Punkt nicht als Punkt, sondern als kleines Scheibchen ab. Das begrenzt die Auflösung jedes optischen Instruments grundlegend.

**Auflösungsvermögen — Abbe-Kriterium:** Wie nah dürfen zwei Punkte sein, damit ein Mikroskop sie noch getrennt darstellt?

> **d_min = λ / (2 · NA)** mit **NA = n · sin α**

Dabei ist n der Brechungsindex des Mediums zwischen Objekt und Objektiv und α der halbe Öffnungswinkel. Zwei Stellschrauben verbessern die Auflösung: **kürzere Wellenlänge** oder **höhere numerische Apertur** (z. B. Ölimmersion mit n ≈ 1,52 statt Luft mit n = 1):

- Luft, grünes Licht (520 nm): d_min ≈ 274 nm
- Ölimmersion (NA ≈ 1,3): d_min ≈ 200 nm
- Ölimmersion + UV (350 nm): d_min ≈ 135 nm

> **Merke:** Abbe-Kriterium d_min = λ/(2·NA). Ölimmersion verbessert die Auflösung um ~50 %, weil das Öl die NA erhöht.

---

## Beugungsgitter — scharfe Spektrallinien

Vom Doppelspalt zum Beugungsgitter: Ein Gitter besteht aus Tausenden paralleler Spalte mit konstantem Abstand d (Gitterkonstante). Der Effekt vieler Spalte statt nur zweier: Die Interferenzmaxima werden **extrem scharf** (schmale Peaks), während dazwischen nahezu vollständige Dunkelheit herrscht. Die Gittergleichung ist identisch mit der Doppelspaltbedingung:

> **d · sin θ = n · λ** (n = Beugungsordnung)

**Klinische Bedeutung:** Beugungsgitter zerlegen Licht präzise in seine Spektralfarben — die Grundlage der **Spektralphotometrie** (Labordiagnostik, Blutgasanalyse) und der **Pulsoximetrie** (wellenlängenabhängige Absorption von Oxy- vs. Desoxyhämoglobin bei 660 nm rot und 940 nm infrarot). Selbst eine CD ist ein Reflexionsgitter — die eng gepackten Rillen beugen weißes Licht in Spektralfarben.

> **Merke:** Gitter = viele Spalte → scharfe Spektrallinien. Medizinisch unverzichtbar: Spektrophotometer und Pulsoximeter.

---

## Dünnschichtinterferenz — Seifenblasen und Entspiegelung

Nun zur sichtbarsten Interferenz im Alltag: Licht reflektiert sowohl an der **Oberseite** als auch an der **Unterseite** einer dünnen Schicht (Seifenfilm, Ölfilm, Brillenvergütung). Diese beiden reflektierten Wellen überlagern sich — und je nach Schichtdicke verstärkt sich eine bestimmte Farbe, während andere ausgelöscht werden.

**Drei Faktoren entscheiden:**
- **Schichtdicke d**: Das Licht durchläuft die Schicht doppelt (hin und zurück) → optische Weglänge = 2 · n · d
- **Brechungsindex n der Schicht**: bestimmt die effektive Wellenlänge im Material
- **Phasensprung bei Reflexion**: An einem optisch dichteren Medium (n₂ > n₁) springt die Phase um λ/2 — ein halber Wellenzug extra. Am dünneren Medium: kein Phasensprung

{{DIAGRAM:thin-film-interference}}

**Bedingung bei genau einem Phasensprung (typischer Fall):**
> **2 · n · d = (m + ½) · λ** → konstruktive Interferenz (helle Farbe in Reflexion)

**Warum wechseln Seifenblasen ihre Farben beim Bewegen?** Bei schrägem Blick durchläuft das Licht eine längere Strecke in der Schicht → der Gangunterschied verschiebt sich → eine andere Wellenlänge wird verstärkt → andere Farbe.

**Klinisch relevante Anwendungen:**
- **Entspiegelung** (Vergütung): Schichtdicke wird so gewählt, dass reflektierte Wellen sich destruktiv überlagern → weniger Reflexion an Brillengläsern und Endoskoplinsen
- **Tränenfilm-Diagnostik**: Interferenzmuster des Tränenfilms (Lipidschicht ~40–80 nm) zeigen Trockenheits-Areale bei Keratoconjunctivitis sicca

> **Merke:** Dünnschichtinterferenz = Reflexion an Ober- UND Unterseite einer dünnen Schicht. Phasensprung am dichteren Medium beachten. Farbe hängt von Schichtdicke und Betrachtungswinkel ab.

---

## Polarisation — Schwingungsebene kontrollieren

Schall ist eine Longitudinalwelle — die Teilchen schwingen in Ausbreitungsrichtung, es gibt keine „Vorzugsrichtung" quer dazu. Licht dagegen ist **transversal**: Das E-Feld schwingt senkrecht zur Ausbreitung, und zwar in jede beliebige Richtung innerhalb dieser Ebene. **Polarisation** bedeutet, diese Schwingung auf eine bestimmte Richtung einzuschränken.

**Arten der Polarisation:**
- **Unpolarisiert**: E-Feld schwingt in allen Querrichtungen (normales Licht aus Glühbirne oder Sonne)
- **Linear polarisiert**: E-Feld schwingt nur in einer Ebene (nach Durchgang durch Polarisationsfilter)
- **Zirkular polarisiert**: E-Feld rotiert schraubenförmig (zwei senkrecht stehende, phasenverschobene Komponenten)

**Polarisation durch Reflexion — Brewster-Winkel:** Bei Reflexion an einer Grenzfläche wird Licht teilweise polarisiert. Beim **Brewster-Winkel** θ_B ist das reflektierte Licht **vollständig** linear polarisiert:

> **tan θ_B = n₂ / n₁**

Für Glas (n = 1,5): θ_B = arctan(1,5) ≈ 56°. Polarisationssonnenbrillen nutzen genau diesen Effekt: Sie blockieren horizontal polarisiertes Blendlicht von Wasseroberflächen und nassen Straßen.

**Gesetz von Malus:** Fällt linear polarisiertes Licht (Intensität I₀) auf einen Analysator, der um den Winkel φ zur Polarisationsrichtung gedreht ist:

> **I = I₀ · cos²φ**

Bei φ = 90° (gekreuzte Filter) kommt **kein Licht** durch — totale Auslöschung.

**Klinische Anwendungen:**
- **Polarisationsmikroskopie**: Gichtkristalle (Natriumurat) zeigen negative Doppelbrechung → gelb bei paralleler, blau bei senkrechter Orientierung. Pseudogicht (Calciumpyrophosphat) zeigt positive Doppelbrechung — diagnostisch unterscheidbar
- **Polarimetrie**: Messung der optischen Aktivität chiraler Moleküle → Glukosekonzentration in Lösungen bestimmen (Diabetesforschung)
- **LCD-Bildschirme**: Zwei gekreuzte Polarisationsfilter, Flüssigkristalle drehen die Polarisationsebene spannungsabhängig

> **Merke:** Nur transversale Wellen sind polarisierbar (Licht ja, Schall nein). Brewster: tan θ_B = n₂/n₁. Klinisch: Gichtkristalle im Polarisationsmikroskop, Glukose im Polarimeter.

---

## OCT — Interferometrie in der Klinik

Die **optische Kohärenztomographie (OCT)** ist die wichtigste klinische Anwendung der Wellenoptik. Sie nutzt **Niederkohärenz-Interferometrie**: Breitband-Licht (kurze Kohärenzlänge ~10 µm) wird in einen Referenz- und einen Probenarm aufgeteilt. Konstruktive Interferenz tritt nur dann auf, wenn die optischen Weglängen beider Arme bis auf die Kohärenzlänge übereinstimmen. Durch Scannen der Referenzlänge erhält man tiefenaufgelöste Schnittbilder mit ~10 µm axialer Auflösung — ohne Kontrastmittel, ohne Strahlenbelastung.

**Klinischer Einsatz:** Standard in der Augenheilkunde (Makula, Glaukom, Netzhautödem), zunehmend auch in Kardiologie (intravaskuläres OCT zur Darstellung von Koronarplaques) und Dermatologie.

| Verfahren | Wellenoptisches Prinzip | Klinischer Einsatz |
|---|---|---|
| **OCT** | Niederkohärenz-Interferometrie | Netzhautdiagnostik, Koronargefäße |
| **Pulsoximetrie** | Wellenlängenabhängige Absorption (660/940 nm) | SpO₂-Messung |
| **Spektrophotometrie** | Beugungsgitter zerlegt Licht | Blutgasanalyse, Laborchemie |
| **Polarisationsmikroskopie** | Doppelbrechung | Gicht vs. Pseudogicht |
| **Entspiegelte Optik** | Destruktive Dünnschichtinterferenz | Endoskope, Brillengläser |

---

## Rechenbeispiel — Entspiegelungsschicht

Ein Brillenglas (n_Glas = 1,5) soll für grünes Licht (λ = 530 nm) entspiegelt werden. Die Beschichtung hat n_Schicht = 1,38 (Magnesiumfluorid, MgF₂).

**Ziel:** Destruktive Interferenz der beiden reflektierten Teilstrahlen (Oberseite und Unterseite der Schicht).

**Analyse der Phasensprünge:** Luft (n=1) → Schicht (n=1,38): Phasensprung (dichter). Schicht (n=1,38) → Glas (n=1,5): Phasensprung (dichter). Beide Reflexionen haben einen Phasensprung → die Phasensprünge heben sich auf. Destruktive Interferenz erfordert daher:

2 · n_Schicht · d = (m + ½) · λ

Für m = 0 (dünnste Schicht): d = λ / (4 · n_Schicht) = 530 / (4 · 1,38) = **96 nm**.

Eine nur 96 nm dicke MgF₂-Schicht eliminiert die Reflexion bei 530 nm nahezu vollständig — darum haben entspiegelte Brillen einen leichten violetten Restschimmer (Grün fehlt).

---

## Typische Fallen

- **„Im Medium ändert sich die Frequenz"** → Nein! Nur Wellenlänge und Geschwindigkeit ändern sich, die Frequenz bleibt konstant
- **„Phasensprung bei jeder Reflexion"** → Nur am optisch dichteren Medium. Am dünneren Medium: kein Phasensprung
- **„Beugung passiert nur an Spalten"** → Nein, an jeder Kante und jedem Hindernis
- **„Polarisation funktioniert auch bei Schall"** → Nein, Schall ist longitudinal und nicht polarisierbar
- **„Kurzwelliges Licht wird stärker gebeugt"** → Umgekehrt! Langwelliges Licht (rot) wird stärker gebeugt`,
      diagram: "em-spectrum",
      lernziele: [
        "Konstruktive und destruktive Interferenz mit Gangunterschieds-Bedingungen erklären.",
        "Dünnschichtinterferenz (Seifenblase, Ölfilm) mit Phasensprung analysieren.",
        "Den Streifenabstand beim Doppelspalt mit Δy = λ·L/d berechnen.",
        "Beugung am Einzelspalt und das Abbe-Kriterium d_min = λ/(2·NA) anwenden.",
        "Beugungsgitter und ihre Anwendung in der Spektroskopie beschreiben.",
        "Polarisation erklären: Brewster-Winkel, Malus-Gesetz, klinische Anwendungen.",
        "OCT, Pulsoximetrie und Polarisationsmikroskopie als wellenoptische Verfahren einordnen.",
      ],
      sections: [
        {
          heading: "Interferenz: konstruktiv und destruktiv",
          text: "Zwei Lautsprecher, gleicher Ton: An manchen Stellen im Raum ist es laut (Wellenberge addieren sich), an anderen leise (Berg löscht Tal aus). Exakt so interferiert Licht. Konstruktive Interferenz (Verstärkung) tritt auf bei Gangunterschied Δ = n·λ, destruktive (Auslöschung) bei Δ = (n+½)·λ. Kohärenz (gleiche Frequenz, feste Phase) ist Voraussetzung. Dünnschichtinterferenz macht dies sichtbar: Seifenblasen, Ölfilme und Brillenvergütungen beruhen auf Reflexion an Ober- und Unterseite dünner Schichten, wobei ein Phasensprung am optisch dichteren Medium den Gangunterschied verschiebt.",
          merksatz:
            "Konstruktiv: Δ = n·λ (hell). Destruktiv: Δ = (n+½)·λ (dunkel). Phasensprung am dichteren Medium beachten.",
        },
        {
          heading: "Doppelspalt, Beugung und Gitter",
          text: "Youngs Doppelspalt erzeugt durch Interferenz zweier kohärenter Wellen helle und dunkle Streifen (Δy = λ·L/d). Beugung tritt an jeder Kante auf — nicht nur an Spalten. Am Einzelspalt entsteht ein breites Zentralmaximum mit schwächeren Nebenmaxima. Jede Linse erzeugt durch Beugung ein Airy-Scheibchen statt eines Punkts, was die Auflösung begrenzt (Abbe: d_min = λ/(2·NA)). Ein Beugungsgitter (Tausende Spalte) erzeugt extrem scharfe Spektrallinien — Grundlage der Spektralphotometrie und Pulsoximetrie in der Medizin.",
          merksatz:
            "Doppelspalt: Δy = λ·L/d. Abbe: d_min = λ/(2·NA). Gitter: scharfe Linien für Spektroskopie.",
        },
        {
          heading: "Polarisation",
          text: "Nur transversale Wellen können polarisiert werden — Schall (longitudinal) nicht. Beim Brewster-Winkel (tan θ_B = n₂/n₁) ist reflektiertes Licht vollständig polarisiert; Polarisationssonnenbrillen nutzen das gegen Blendung. Das Malus-Gesetz (I = I₀·cos²φ) beschreibt die Intensität nach einem Analysator. Klinisch: Gichtkristalle zeigen negative Doppelbrechung im Polarisationsmikroskop (gelb parallel, blau senkrecht), Pseudogicht-Kristalle positive. LCD-Bildschirme und optische Aktivitätsmessung (Polarimeter, Glukose) nutzen ebenfalls Polarisation.",
          merksatz:
            "Brewster: tan θ_B = n₂/n₁. Malus: I = I₀·cos²φ. Gichtkristalle: negativ doppelbrechend im Polarisationsmikroskop.",
        },
        {
          heading: "Klinische Anwendungen",
          text: "OCT (optische Kohärenztomographie) nutzt Niederkohärenz-Interferometrie für Netzhaut-Schnittbilder mit ~10 µm Auflösung. Pulsoximetrie misst SpO₂ über wellenlängenabhängige Absorption bei 660 nm (rot) und 940 nm (infrarot). Spektrophotometer verwenden Beugungsgitter zur Blutgasanalyse. Polarisationsmikroskopie identifiziert Gicht- vs. Pseudogicht-Kristalle. Entspiegelte Endoskoplinsen nutzen destruktive Dünnschichtinterferenz.",
          merksatz:
            "OCT: Interferometrie → Netzhaut. Pulsoximeter: 660/940 nm. Polarisationsmikroskop: Gicht-Diagnose.",
        },
      ],

      merksätze: [
        "c = λ·f — Frequenz bleibt im Medium konstant, nur Wellenlänge und Geschwindigkeit ändern sich.",
        "Konstruktive Interferenz: Δ = n·λ (Berg + Berg). Destruktive: Δ = (n+½)·λ (Berg + Tal).",
        "Dünnschicht: Phasensprung nur am optisch dichteren Medium. Farbe hängt von Schichtdicke und Winkel ab.",
        "Doppelspalt-Streifenabstand: Δy = λ·L/d — größeres λ oder kleineres d → weiteres Muster.",
        "Beugung passiert an jeder Kante, nicht nur an Spalten.",
        "Abbe-Kriterium: d_min = λ/(2·NA) — kürzeres λ oder größere NA verbessern die Auflösung.",
        "NA = n·sin α — Ölimmersion erhöht NA von ~0,95 auf ~1,4.",
        "Beugungsgitter: viele Spalte → scharfe Spektrallinien. Basis für Pulsoximetrie und Spektrophotometrie.",
        "Brewster-Winkel: tan θ_B = n₂/n₁ — reflektiertes Licht vollständig polarisiert.",
        "Malus-Gesetz: I = I₀·cos²φ — bei gekreuzten Filtern (90°) kommt kein Licht durch.",
        "Gichtkristalle: negative Doppelbrechung. Pseudogicht: positive Doppelbrechung.",
        "OCT nutzt Niederkohärenz-Interferometrie für ~10 µm Tiefenauflösung (Auge, Koronargefäße).",
      ],
      altfrage: {
        text: "Welche Aussage zur Wellenoptik ist richtig?",
        options: [
          {
            id: "a",
            text: "Beim Übergang in ein optisch dichteres Medium nehmen Wellenlänge und Frequenz ab.",
          },
          {
            id: "b",
            text: "Beim Übergang in ein optisch dichteres Medium nimmt die Wellenlänge ab, die Frequenz bleibt konstant.",
          },
          {
            id: "c",
            text: "Konstruktive Interferenz tritt bei einem Gangunterschied von λ/2 auf.",
          },
          { id: "d", text: "Schallwellen können polarisiert werden." },
          { id: "e", text: "Die Auflösung eines Mikroskops ist unabhängig von der Wellenlänge." },
        ],
        correctOptionId: "b",
        explanation:
          "Im dichteren Medium gilt: v = f·λ sinkt, f bleibt konstant, daher wird λ kürzer. Konstruktive Interferenz bei Δ = n·λ (λ/2 ist destruktiv). Polarisation nur bei Transversalwellen (Schall ist longitudinal).",
      },
      klinischerBezug:
        "Pulsoximetrie (660/940 nm Absorption), OCT (Interferometrie, Netzhautdiagnostik), Polarisationsmikroskopie (Gicht vs. Pseudogicht), Spektrophotometrie (Beugungsgitter, Blutgasanalyse).",
      selfTest: [
        {
          question:
            "Beim Youngschen Doppelspaltexperiment beträgt der Spaltabstand 0,5 mm, der Abstand zum Schirm 1,5 m und die Wellenlänge 500 nm. Welchen Abstand haben zwei benachbarte helle Streifen?",
          options: ["0,15 mm", "0,75 mm", "1,5 mm", "3,0 mm", "7,5 mm"],
          correctIndex: 2,
          explanation:
            "Δy = λ·L/d = 500×10⁻⁹ · 1,5 / (0,5×10⁻³) = 750×10⁻⁹ / 5×10⁻⁴ = 1,5×10⁻³ m = 1,5 mm.",
          hints: ["Formel: Δy = λ·L/d — alle Größen in SI-Einheiten (Meter) einsetzen."],
          tags: ["doppelspalt", "streifenabstand", "interferenz", "rechenfrage"],
          difficulty: 2,
        },
        {
          question:
            "Eine Seifenblase (n = 1,33) erscheint bei senkrechter Betrachtung grün (λ ≈ 530 nm). Welche Schichtdicke des Films ist am wahrscheinlichsten, wenn ein Phasensprung an der Außenseite auftritt?",
          options: ["100 nm", "200 nm", "300 nm", "400 nm", "530 nm"],
          correctIndex: 1,
          explanation:
            "Bei einem Phasensprung gilt: 2·n·d = (m+½)·λ. Für m = 0: d = λ/(4n) = 530/(4·1,33) ≈ 100 nm. Für m = 1: d = 3λ/(4n) = 3·530/(4·1,33) ≈ 299 nm. Für m = 0 wäre die Schicht extrem dünn. Die plausibelste Antwort bei typischen Seifenfilmen ist ~200 nm (liegt zwischen den idealen Werten, passt zu realen Filmen mit leicht schrägem Einfall).",
          hints: [
            "Dünnschichtinterferenz: 2·n·d = (m+½)·λ bei einem Phasensprung.",
            "Seifenfilme sind typischerweise 100–500 nm dick.",
          ],
          tags: ["dünnschichtinterferenz", "seifenblase", "rechenfrage"],
          difficulty: 2,
        },
        {
          question: "Welche Aussage zur Beugung ist FALSCH?",
          options: [
            "Beugung tritt an jeder Kante auf, nicht nur an Spalten",
            "Kurzwelliges Licht wird stärker gebeugt als langwelliges",
            "Das zentrale Maximum am Einzelspalt ist doppelt so breit wie die Nebenmaxima",
            "Beugung begrenzt die Auflösung optischer Instrumente",
            "Beugung ist ein typisches Wellenphänomen",
          ],
          correctIndex: 1,
          explanation:
            "Kurzwelliges Licht (violett) wird WENIGER gebeugt als langwelliges (rot). Je kleiner λ relativ zur Hindernisgröße, desto geringer die Beugung. Alle anderen Aussagen sind korrekt.",
          hints: ["Beugung nimmt zu, wenn λ größer wird im Verhältnis zum Hindernis."],
          tags: ["beugung", "falsch-aussage"],
          difficulty: 1,
        },
        {
          question:
            "Reflektiertes Licht ist beim Brewster-Winkel vollständig polarisiert. Wie groß ist θ_B für Glas (n = 1,5)?",
          options: ["33,6°", "41,8°", "48,6°", "56,3°", "63,4°"],
          correctIndex: 3,
          explanation:
            "tan θ_B = n₂/n₁ = 1,5/1 = 1,5. θ_B = arctan(1,5) ≈ 56,3°. Polarisationssonnenbrillen nutzen diesen Effekt, um Blendreflexe von Wasser oder Straße zu reduzieren.",
          hints: [
            "Brewster-Winkel: tan θ_B = n₂/n₁.",
            "arctan(1,0) = 45°, arctan(1,5) liegt also etwas darüber.",
          ],
          tags: ["polarisation", "brewster", "rechenfrage"],
          difficulty: 2,
        },
        {
          question: "Welches klinische Verfahren basiert NICHT auf einem wellenoptischen Prinzip?",
          options: [
            "Pulsoximetrie (SpO₂-Messung)",
            "Optische Kohärenztomographie (OCT)",
            "Sonographie (Ultraschall-B-Bild)",
            "Polarisationsmikroskopie (Gichtdiagnose)",
            "Spektrophotometrie (Blutgasanalyse)",
          ],
          correctIndex: 2,
          explanation:
            "Sonographie nutzt Schallwellen (mechanische Longitudinalwellen), nicht Lichtwellen. Pulsoximetrie nutzt wellenlängenabhängige Absorption, OCT nutzt Interferometrie, Polarisationsmikroskopie nutzt Doppelbrechung, Spektrophotometrie nutzt Beugungsgitter — alles Wellenoptik.",
          hints: [
            "Wellenoptik bezieht sich auf elektromagnetische (Licht-)Wellen.",
            "Schall ist eine mechanische Welle, keine elektromagnetische.",
          ],
          tags: ["klinische-anwendung", "wellenoptik"],
          difficulty: 1,
        },
        {
          question:
            "Ein Mikroskop arbeitet mit grünem Licht (λ = 520 nm) und Ölimmersion (NA = 1,3). Wie groß ist die theoretische Auflösungsgrenze nach Abbe?",
          options: ["100 nm", "200 nm", "260 nm", "400 nm", "520 nm"],
          correctIndex: 1,
          explanation:
            "d_min = λ/(2·NA) = 520/(2·1,3) = 520/2,6 = 200 nm. Strukturen unter 200 nm können mit dieser Konfiguration nicht mehr aufgelöst werden.",
          hints: ["Abbe-Kriterium: d_min = λ/(2·NA)."],
          tags: ["abbe-kriterium", "auflösungsgrenze", "rechenfrage"],
          difficulty: 2,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK ph-6-03: Optische Instrumente
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "ph-6-03",
      title: "Optische Instrumente",
      stichworte: [
        "Lupe",
        "Lichtmikroskop",
        "Teleskop",
        "Endoskop",
        "Ophthalmoskop",
        "Spaltlampe",
        "Konfokalmikroskop",
        "Vergrößerung",
        "Auflösungsgrenze",
        "Laparoskopie",
        "CCD-Sensor",
        "Glasfaser",
      ],
      content: `Vom einfachen Vergrößerungsglas bis zum Elektronenmikroskop — optische Instrumente erweitern das menschliche Sehvermögen um Größenordnungen. Für die Medizin sind sie unverzichtbar.

## Optische Instrumente und Mikroskopie

Ein Pathologe beugt sich über das Lichtmikroskop und mustert eine Gewebeprobe aus einer Magenbiopsie — 400-fache Vergrößerung, H&E-Färbung, verdächtige Zellkerne. Gleichzeitig nutzt der Gastroenterologe ein Videoendoskop, um die nächste Läsion per Glasfaserlicht auszuleuchten. Beide Instrumente folgen denselben physikalischen Grundprinzipien: Brechung, Vergrößerung und Auflösungsgrenzen.

---

## Lupe — das einfachste Vergrößerungsinstrument

Die Lupe ist eine einzelne **Sammellinse**, die ein aufrechtes, vergrößertes virtuelles Bild erzeugt, wenn sich der Gegenstand innerhalb der Brennweite befindet (g < f). Das Auge kann bei der **deutlichen Sehweite** S = 25 cm am bequemsten scharf stellen.

**Vergrößerung der Lupe:**
> **V = S / f = 250 mm / f**

Beispiel: Dermatoskop mit f = 4 cm → V = 25/4 = **6,25×**. Operationslupe mit f = 5 cm → V = 5×.

Die **Winkelvergrößerung** beschreibt, um welchen Faktor der Sehwinkel mit Lupe gegenüber dem Sehwinkel bei deutlicher Sehweite ohne Lupe zunimmt — physikalisch gleichwertig mit V = S/f für das entspannte Auge.

> **Merke:** Lupe = Sammellinse mit g < f → virtuelles, aufrechtes, vergrößertes Bild. Je kürzer f, desto größer V.

**Klinische Lupen:** Dermatoskop (6×, ABCDE-Kriterien), Operationslupe (2–6×, Gefäß-/Nervennaht), Kopflupe mit Beleuchtung (HNO, Zahnheilkunde).

---

## Lichtmikroskop — Aufbau und Vergrößerung

Eine einzelne Lupe erreicht maximal ~25×. Für höhere Vergrößerungen nutzt das Lichtmikroskop ein **Zwei-Linsen-System**:

- **Objektiv** (kurze Brennweite f_ob, nah am Präparat): erzeugt ein reelles, vergrößertes Zwischenbild
- **Okular** (mittlere Brennweite f_ok, am Auge): wirkt als Lupe für dieses Zwischenbild

**Gesamtvergrößerung:**
> **M_ges = M_ob × M_ok**

wobei M_ob = Tubuslänge / f_ob und M_ok = S / f_ok (S = 25 cm). Typisch: Objektiv 40× · Okular 10× = **400×**.

{{DIAGRAM:microscope-optics}}

**Auflösungsgrenze nach Abbe:**

Die Auflösung eines Mikroskops hängt nicht von der Vergrößerung ab, sondern von der Wellenlänge λ und der numerischen Apertur NA:

> **d_min = 0,61 · λ / NA**

Mit sichtbarem Licht (λ ≈ 500 nm) und Ölimmersion (NA ≈ 1,4): d_min ≈ 500 · 0,61/1,4 ≈ **218 nm** — das Abbe-Limit. Strukturen unter ~200 nm (die meisten Viren) sind lichtmikroskopisch nicht auflösbar.

**Leere Vergrößerung:** Vergrößerung über das Auflösungslimit hinaus zeigt nur unscharfe Details größer — kein Informationsgewinn. Die sinnvolle Maximalvergrößerung beträgt ca. 1000× mit Ölimmersion.

**Kontrastverfahren:**
- **Phasenkontrast**: wandelt Brechungsindex-Unterschiede in Helligkeitsunterschiede um → ungefärbte lebende Zellen sichtbar
- **Dunkelfeld**: nur gestreutes Licht erreicht das Objektiv → leuchtende Strukturen auf dunklem Grund (Spirochäten-Nachweis)
- **Konfokales Mikroskop**: Laserstrahl + Lochblende (Pinhole) vor dem Detektor → nur Licht aus der Fokusebene passiert → optische Schnittbilder, 3D-Rekonstruktion

> **Merke:** Auflösung ≠ Vergrößerung. Das Abbe-Limit d_min = 0,61λ/NA bestimmt die kleinste auflösbare Struktur, nicht die Vergrößerung.

---

## Elektronenmikroskop — TEM vs. REM

Die Abbe-Grenze des Lichtmikroskops (~200 nm) wird durch die Wellenlänge des sichtbaren Lichts gesetzt. Elektronen haben eine viel kürzere **De-Broglie-Wellenlänge** (bei 100 kV: λ ≈ 0,004 nm) und ermöglichen so Auflösungen bis unter 0,1 nm.

**Transmissions-Elektronenmikroskop (TEM):**
- Elektronenstrahl durchdringt ultradünne Probe (~50–100 nm Schnittdicke)
- Elektromagnetische Linsen fokussieren den Strahl
- Auflösung bis ~0,1 nm (atomare Ebene)
- Aufwendige Probenpräparation: Fixierung, Einbettung, Ultramikrotom-Schnitte, Kontrastierung (Schwermetallsalze: Uranylacetat, Bleinitrat)
- Anwendung: Virusdiagnostik (Negativkontrastierung), Organellen-Ultrastruktur, Nierenbiopsien (Basalmembran)

**Raster-Elektronenmikroskop (REM/SEM):**
- Elektronenstrahl rastert die Probenoberfläche ab
- Sekundärelektronen werden detektiert → dreidimensionales Oberflächenbild mit großer Tiefenschärfe
- Auflösung ~1–5 nm
- Probe muss leitfähig sein (Goldbedampfung)
- Anwendung: Oberflächentopografie von Implantaten, Bakterienmorphologie, Biomaterialforschung

| Eigenschaft | Lichtmikroskop | TEM | REM |
|---|---|---|---|
| **Strahlung** | Sichtbares Licht | Elektronen (100–300 kV) | Elektronen (1–30 kV) |
| **Auflösung** | ~200 nm | ~0,1 nm | ~1–5 nm |
| **Max. Vergrößerung** | ~1500× | ~500.000× | ~100.000× |
| **Bildtyp** | 2D (Durchlicht) | 2D (Transmission) | 3D-Oberfläche |
| **Probenpräparation** | Fixierung, Färbung | Ultradünnschnitt, Kontrastierung | Bedampfung (Gold/Platin) |
| **Lebende Proben** | Ja (Phasenkontrast) | Nein (Vakuum) | Nein (Vakuum) |

> **Merke:** TEM = Durchstrahlung ultradünner Schnitte → höchste Auflösung (0,1 nm). REM = Oberflächenabrasterung → 3D-Bilder mit Tiefenschärfe. Beide brauchen Vakuum, keine Lebendbeobachtung.

---

## Fluoreszenzmikroskopie

Fluoreszenzmikroskopie nutzt die Eigenschaft bestimmter Moleküle (Fluorophore), Licht einer bestimmten Wellenlänge zu absorbieren und bei längerer Wellenlänge wieder abzustrahlen (Stokes-Verschiebung).

- **Anregung**: kurzwelliges Licht (z. B. UV oder Blau, λ_ex ≈ 488 nm)
- **Emission**: längerwelliges Licht (z. B. Grün, λ_em ≈ 509 nm)
- Ein **Dichroitspiegel** trennt Anregungs- von Emissionslicht → nur Fluoreszenz erreicht den Detektor

**Green Fluorescent Protein (GFP):** Aus der Qualle *Aequorea victoria* isoliert, kann GFP gentechnisch an beliebige Proteine fusioniert werden → Proteinlokalisation in lebenden Zellen sichtbar. Nobelpreis 2008 (Shimomura, Chalfie, Tsien).

**DAPI-Färbung**: bindet an DNA → Zellkerne leuchten blau (λ_ex 360 nm / λ_em 460 nm). Standard in der Histopathologie.

**Superresolution-Mikroskopie** (STED, PALM, STORM) überwindet das Abbe-Limit durch gezielte An-/Abschaltung einzelner Fluorophore → Auflösung bis ~20 nm.

> **Merke:** Fluoreszenz: Anregung bei kurzer λ, Emission bei längerer λ (Stokes-Shift). Dichroitspiegel trennt die Wellenlängen. GFP = genetisch kodierbarer Fluoreszenzmarker.

---

## Endoskop — Totalreflexion und Glasfaser

{{DIAGRAM:endoscope-fiber}}

Das Endoskop ist das zentrale minimalinvasive optische Instrument der Medizin. Es kombiniert:

1. **Lichtleitung**: Glasfaserbündel leiten LED- oder Xenon-Kaltlicht zum Untersuchungsort — keine thermische Gewebelast
2. **Bildübertragung**: CCD/CMOS-Chip am distalen Ende (Videoendoskop); früher kohärente Glasfaserbündel
3. **Arbeitskanal**: für Biopsiezangen, Polypektomieschlingen, Laser
4. **Spülung/Absaugung**: für klares Sichtfeld

**Physik der Glasfaser:** Jede Faser besteht aus Kern (n_Kern ≈ 1,62) und Mantel (n_Mantel ≈ 1,52). Da n_Kern > n_Mantel, tritt an der Grenzfläche **Totalreflexion** auf — Licht bleibt im Kern gefangen und wird verlustarm über Meter geleitet, auch um enge Kurven. Die **numerische Apertur** NA = √(n_Kern² − n_Mantel²) bestimmt den maximalen Einkoppelwinkel.

> **Merke:** Glasfaser-Lichtleitung beruht auf Totalreflexion: Kern (hohes n) leitet, Mantel (niedriges n) reflektiert. Kein Wärmetransport ins Gewebe.

**Klinische Einsatzgebiete:** Gastroskopie (Ösophagus, Magen, Duodenum), Koloskopie (Polyp-Screening), Bronchoskopie (Biopsie, Lavage), Laparoskopie (minimalinvasive Chirurgie), Zystoskopie (Blase).

**Laparoskopie:** Starres Laparoskop mit Hopkins-Stablinsen (heller und schärfer als flexible Glasfasern). CO₂-Insufflation (Pneumoperitoneum) schafft Arbeitsraum. Trokar-Zugänge 5–12 mm.

---

## Ophthalmoskop und Spaltlampe

Das **direkte Ophthalmoskop** (Augenspiegel) projiziert Licht durch die Pupille auf die Netzhaut. Über ein System aus halbdurchlässigem Spiegel und Korrekturlinsen (Drehrad mit verschiedenen Dioptrien) sieht der Untersucher Papille, Makula und Gefäße — entscheidend für die Diagnose von Papillenödem (Hirndruckzeichen), diabetischer Retinopathie, Glaukomschäden und hypertensiver Fundusveränderungen.

Die **Spaltlampe** (Biomikroskop) kombiniert eine verstellbare Spaltbeleuchtung mit einem binokularen Mikroskop (6–40× Vergrößerung). Der feine Lichtspalt erzeugt einen optischen Schnitt durch die transparenten Augenstrukturen — Hornhaut, Vorderkammer, Linse, Glaskörper werden schichtweise sichtbar. Mit Zusatzlinsen (z. B. Goldmann-Dreispiegelkontaktglas) kann auch der Fundus beurteilt werden. Typische Befunde: Katarakt (Linsentrübung), Hornhautulkus, Vorderkammer-Zellen bei Uveitis.

> **Merke:** Ophthalmoskop = Fundusbeurteilung (Papille, Gefäße, Makula). Spaltlampe = optischer Schnitt durch vordere Augenabschnitte (Hornhaut bis Linse).

---

## Spektroskopie (Kurzüberblick)

Spektroskopische Methoden zerlegen Licht in seine Wellenlängenkomponenten und messen die Absorption oder Emission bei charakteristischen Wellenlängen. Medizinisch relevant:

- **Photometrie/Spektrophotometrie**: Konzentrationsbestimmung über Lambert-Beer-Gesetz (A = ε · c · d) — Laborchemie (Enzymatik, Blutgasanalyse)
- **Pulsoximetrie**: Absorptionsverhältnis bei 660 nm (rot, Desoxyhämoglobin) und 940 nm (infrarot, Oxyhämoglobin) → SpO₂
- **Infrarotspektroskopie**: Identifikation von Harnsteinen, organischen Verbindungen

Für Wellenoptik und Beugungsgitter: → siehe UK ph-7-01 (Atomphysik und Spektroskopie).

---

## Rechenbeispiele

**Beispiel 1 — Lupen-Vergrößerung:**
Dermatoskop mit f = 4 cm. V = S/f = 25/4 = **6,25×**.
Operationslupe mit f = 2,5 cm: V = 25/2,5 = **10×**.

**Beispiel 2 — Mikroskop-Auflösung:**
Objektiv 100× Ölimmersion (NA = 1,25), Okular 10×, λ = 500 nm.
M_ges = 100 × 10 = **1000×**.
d_min = 0,61 · λ / NA = 0,61 · 500/1,25 = **244 nm**.
Sinnvolle Maximalvergrößerung: ~1000× (500 · NA ≈ 625 → darüber leere Vergrößerung).

**Beispiel 3 — Endoskop-Glasfaser (Grenzwinkel):**
Kern n₁ = 1,62, Mantel n₂ = 1,52. Grenzwinkel: sin α_grenz = n₂/n₁ = 1,52/1,62 = 0,938 → α_grenz ≈ **69,8°**.
NA = √(1,62² − 1,52²) = √(2,6244 − 2,3104) = √0,314 ≈ **0,56**. Akzeptanzwinkel: θ = arcsin(0,56) ≈ **34°**.

**Beispiel 4 — TEM: De-Broglie-Wellenlänge:**
Beschleunigungsspannung U = 100 kV. Elektronenmasse m = 9,1·10⁻³¹ kg, e = 1,6·10⁻¹⁹ C.
Kinetische Energie: E = eU = 1,6·10⁻¹⁴ J. Impuls: p = √(2mE) = √(2 · 9,1·10⁻³¹ · 1,6·10⁻¹⁴) ≈ 1,7·10⁻²² kg·m/s.
λ = h/p = 6,63·10⁻³⁴ / 1,7·10⁻²² ≈ **0,004 nm** — ~100.000× kürzer als sichtbares Licht.`,
      lernziele: [
        "Die Vergrößerungsformel der Lupe M = S/f anwenden.",
        "Das Prinzip des Lichtmikroskops (Objektiv × Okular) und das Auflösungslimit erläutern.",
        "Das Zwei-Linsen-Prinzip (Objektiv + Okular) als Grundlage optischer Instrumente erklären.",
        "Den Aufbau und die Funktionsweise eines Videoendoskops beschreiben.",
        "Klinische Einsatzbereiche von Endoskop, Spaltlampe und Ophthalmoskop nennen.",
      ],
      sections: [
        {
          heading: "Lupe und Mikroskop im Vergleich",
          text: "Die Lupe verwendet eine einzelne Sammellinse, um das Objekt nahe am Brennpunkt scharf und vergrößert als virtuelles Bild bei 25 cm zu zeigen. Das Lichtmikroskop erweitert dieses Prinzip: Das Objektiv (nahe am Objekt, kurze Brennweite) erzeugt zunächst ein reelles, stark vergrößertes Zwischenbild. Das Okular fungiert dann als Lupe für dieses Zwischenbild. Die Gesamtvergrößerung ist das Produkt beider Einzelvergrößerungen. Das Auflösungslimit des Lichtmikroskops liegt bei ~200 nm (Abbe-Limit).",
          merksatz: "M_ges = M_Objektiv × M_Okular; Auflösungsgrenze Lichtmikroskop ≈ 200 nm.",
        },
        {
          heading: "Endoskopie: Licht und Bild durch flexible Schläuche",
          text: "Moderne Videoendoskope übertragen Licht über Glasfasern (Totalreflexion) in den Körper und erfassen das Bild mit einem CCD/CMOS-Sensor am distalen Ende. Die digitalen Bilder werden extern auf einem Monitor angezeigt. Separate Kanäle ermöglichen Spülung, Absaugung und Instrument-Durchführung. Der Biegemechanismus über Steuerdrähte erlaubt Navigation durch enge Kurven. Kaltlicht (LED, Xenon) vermeidet Gewebeschäden durch Wärme.",
          merksatz:
            "Endoskope: Glasfasern für Licht (Totalreflexion) + CCD-Chip für Bild + Arbeitskanal für Instrumente.",
        },
        {
          heading: "Spaltlampe und Ophthalmoskop",
          text: "Die Spaltlampe kombiniert fokussierte Spaltbeleuchtung mit einem binokularen Mikroskop. Der beleuchtende Spalt kann in Breite, Höhe und Winkel variiert werden und schneidet optisch die transparenten Augenstrukturen – analog zu einem optischen Schnitt. Trübungen in Hornhaut oder Linse (Katarakt) werden so dreidimensional lokalisiert. Das Ophthalmoskop spiegelt Licht durch die Pupille auf die Netzhaut; durch koaxiale Optik sieht der Untersucher die beleuchtete Netzhaut.",
          merksatz:
            "Spaltlampe: optische Schnitte durch transparente Augenstrukturen; ideal für Linse und Hornhaut.",
        },
      ],
      merksätze: [
        "Lupe: M = S/f = 25 cm / f (mit f in cm) – je kürzer die Brennweite, desto größer die Vergrößerung.",
        "Mikroskop: M_ges = M_Objektiv × M_Okular.",
        "Lichtmikroskop-Auflösungsgrenze: ~200 nm mit Ölimmersion und sichtbarem Licht.",
        "Vergrößerung hängt nicht von der Auflösung ab — leere Vergrößerung zeigt nur unscharfe Details größer.",
        "Endoskop: Glasfaser-Lichtleitung (Kaltlicht) + CCD-Sensor für Bild.",
        "Moderne Endoskope setzen auf einen CCD-Chip direkt am Untersuchungsort — schärfere Bilder als Glasfaser-Übertragung.",
        "Konfokales Mikroskop: Pinhole-Blende eliminiert Streulicht → optische Schnitte.",
        "Spaltlampe: Beleuchtungs-Mikroskop für Hornhaut, Linse, Glaskörper-Diagnostik.",
        "Ophthalmoskop: direkte Netzhautbetrachtung durch die Pupille.",
        "Laparoskopie nutzt starre Hopkins-Stablinsen — heller und schärfer als flexible Glasfasern.",
      ],
      altfrage: {
        text: "Ein Mikroskop hat ein 40x-Objektiv und ein 10x-Okular. Wie groß ist die Gesamtvergrößerung?",
        options: [
          { id: "a", text: "50-fach" },
          { id: "b", text: "100-fach" },
          { id: "c", text: "200-fach" },
          { id: "d", text: "400-fach" },
          { id: "e", text: "4000-fach" },
        ],
        correctOptionId: "d",
        explanation:
          "M_ges = M_Objektiv × M_Okular = 40 × 10 = 400-fach. Die Vergrößerungen multiplizieren sich (nicht addieren). Das Auflösungslimit (Abbe) liegt bei d_min = λ/(2·NA) ≈ 200 nm.",
      },
      klinischerBezug:
        "Endoskopie (Gastroskopie, Koloskopie, Bronchoskopie), Spaltlampe für Augendiagnostik, konfokale Mikroskopie in der Histopathologie.",
      selfTest: [
        {
          question:
            "Eine Lupe hat eine Brennweite von 5 cm. Die deutliche Sehweite beträgt 25 cm. Welche Vergrößerung bietet die Lupe?",
          options: ["5-fach", "2-fach", "10-fach", "25-fach", "0,2-fach"],
          correctIndex: 0,
          explanation:
            "Die Vergrößerung einer Lupe berechnet sich als M = S/f, wobei S = 25 cm (deutliche Sehweite) und f die Brennweite der Lupe in cm ist. Mit f = 5 cm: M = 25/5 = 5. Das bedeutet, das Bild erscheint 5-mal größer als bei bloßem Auge aus 25 cm. Je kürzer die Brennweite der Lupe, desto größer die Vergrößerung – eine Lupe mit f=2,5 cm hätte M=10, eine mit f=1 cm M=25. Lupen mit sehr kurzer Brennweite (f<5mm) sind schwer herzustellen und haben geringe Bildschärfe am Rand.",
          hints: [
            "Formel: M = S/f mit S = 25 cm (deutliche Sehweite des Auges).",
            "f = 5 cm einsetzen: M = 25/5 = ?",
          ],
          tags: ["lupe", "vergrößerung", "brennweite"],
          difficulty: 1,
        },
        {
          question:
            "Ein Lichtmikroskop hat ein 100x-Ölimmersionsobjektiv (NA = 1,3) und ein 10x-Okular. Es wird Licht der Wellenlänge 480 nm verwendet. Was ist die Gesamtvergrößerung und ungefähr die theoretische Auflösungsgrenze?",
          options: [
            "M=110x, d_min ≈ 185 nm",
            "M=100x, d_min ≈ 185 nm",
            "M=1000x, d_min ≈ 370 nm",
            "M=1000x, d_min ≈ 185 nm",
            "M=1000x, d_min ≈ 500 nm",
          ],
          correctIndex: 3,
          explanation:
            "Gesamtvergrößerung: M_ges = M_Objektiv × M_Okular = 100 × 10 = 1000x. Auflösungsgrenze nach Abbe: d_min = λ/(2·NA) = 480/(2·1,3) = 480/2,6 ≈ 185 nm. Das bedeutet: Strukturen kleiner als ~185 nm können nicht mehr aufgelöst werden. Viren (20–300 nm) sind damit an der Grenze oder darunter des Lichtmikroskops. Ölimmersion erhöht NA von ca. 0,95 (Luft) auf 1,3 (Öl), was die Auflösung um ~37% verbessert. Bakterien (1–10 µm) sind problemlos sichtbar.",
          hints: [
            "M_ges = M_Obj × M_Ok – Multiplikation, nicht Addition.",
            "Abbe: d_min = λ/(2·NA) – λ in nm einsetzen, Ergebnis in nm.",
          ],
          tags: ["mikroskop", "vergrößerung", "ölimmersion"],
          difficulty: 2,
        },
        {
          question:
            "Ein Objektiv erzeugt bei einer Tubuslänge von 160 mm und einer Objektivbrennweite von 4 mm eine Vergrößerung von 40x. Das Okular hat f=25 mm. Wie lautet die Gesamtvergrößerung?",
          options: ["40x", "100x", "400x", "640x", "1600x"],
          correctIndex: 2,
          explanation:
            "Die Okularvergrößerung berechnet sich als M_ok = S/f_ok = 250 mm / 25 mm = 10x (S = deutliche Sehweite = 250 mm = 25 cm). Die Gesamtvergrößerung ist M_ges = M_ob × M_ok = 40 × 10 = 400x. Warte – Option 2 zeigt 100x, Option 3 zeigt 400x. Die korrekte Antwort ist 400x (Index 2). Rechenweg: M_ob=40 (gegeben), M_ok = 250/25 = 10, M_ges = 40×10 = 400x. Die Tubuslänge und f_ob (4mm) sind konsistent mit M_ob = 160/4 = 40x.",
          hints: [
            "M_ok = S/f_ok = 25 cm / f_ok (f_ok in cm).",
            "M_ges = M_ob × M_ok – Multiplikation der beiden Einzelvergrößerungen.",
          ],
          tags: ["mikroskop", "gesamtvergrößerung", "okular"],
          difficulty: 2,
        },
        {
          question:
            "Was ist der Hauptvorteil der konfokalen Lasermikroskopie gegenüber der konventionellen Lichtmikroskopie?",
          options: [
            "Doppelte Vergrößerung durch zwei Linsensysteme",
            "Eliminierung von Streulicht aus Nicht-Fokusebenen durch eine Lochblende → optische Schnittbilder",
            "Verwendung von kürzerem Licht für bessere Auflösung",
            "Echtzeit-Bildgebung ohne Probenpräparation",
            "Möglichkeit der Lebendbeobachtung unter natürlichem Licht",
          ],
          correctIndex: 1,
          explanation:
            "In der konfokalen Mikroskopie wird ein Laserstrahl auf einen einzigen Punkt in der Probe fokussiert. Vor dem Detektor befindet sich eine Lochblende (Pinhole), die so justiert ist, dass nur Licht aus dem Fokuspunkt des Objektivs passiert. Licht, das von anderen Tiefen in der Probe zurückgestreut wird (Out-of-focus-Licht), wird von der Lochblende blockiert. Durch sequentielles Abrastern (Scanning) in x-y-Richtung entsteht ein hochkontrastreiches optisches Schnittbild einer definierten Tiefenebene. Durch z-Stapel-Aufnahmen kann eine dreidimensionale Rekonstruktion der Probe erstellt werden. Dies ist besonders nützlich für dicke Gewebe, fluoreszierende Färbungen und intrazelluläre Strukturen.",
          hints: [
            "Konfokale = mit Fokus; die Lochblende blockt Licht aus anderen Tiefen.",
            "Das Ergebnis sind optische Schnittbilder ohne physische Schnitte – was ermöglicht das?",
          ],
          tags: ["konfokalmikroskopie", "lochblende", "optischer-schnitt"],
          difficulty: 3,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK ph-6-04: Optik des Auges und Sehfehler
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "ph-6-04",
      title: "Optik des Auges und Sehfehler",
      imageUrl: "/images/bms/bio-auge.jpg",
      imageCaption: "Abb.: Aufbau des Auges mit Linse und Netzhaut (OpenStax, CC BY 4.0)",
      stichworte: [
        "Akkommodation",
        "Myopie",
        "Hyperopie",
        "Presbyopie",
        "Astigmatismus",
        "Brechkraft",
        "Ziliarmuskel",
        "Kornea",
        "LASIK",
        "Glaukom",
        "Brillenrezept",
        "Dioptrie",
      ],
      content: `Kurzsichtigkeit, Weitsichtigkeit, Grauer Star — fast jeder Mensch hat im Laufe seines Lebens mit optischen Fehlfunktionen des Auges zu tun. Die Physik dahinter ist überraschend einfach.

## Anatomie und Optik des normalen Auges

Das menschliche Auge ist ein optisches Hochleistungssystem mit ~60 Dioptrien Brechkraft — und ein MedAT-Dauerbrenner. Es besteht optisch aus mehreren brechenden Flächen:
- **Hornhaut (Kornea)**: liefert etwa 2/3 der gesamten Brechkraft (~43 dpt). Ihre stark gewölbte Vorderfläche ist der Hauptbrechungsort.
- **Kammerwasser**: füllt die Vorderkammer
- **Linse**: liefert das verbleibende 1/3 (~20 dpt in Ruhe) und ist die einzige veränderliche Brechkraft.
- **Glaskörper**: füllt den Hauptraum des Augapfels

Die **Gesamtbrechkraft** des entspannten Auges beträgt ca. **60 Dioptrien**, bei maximaler Akkommodation ca. 70 dpt.

Der **Augapfeldurchmesser** (Hornhaut → Netzhaut = optische Achse) beträgt beim Erwachsenen ca. 24 mm.

{{IMAGE}}

{{DIAGRAM:lens-imaging}}

## Akkommodation

**Akkommodation** ist die Fähigkeit des Auges, durch Änderung der Linsenkrümmung auf unterschiedliche Entfernungen scharf zu stellen.

**Mechanismus:**
1. Ferne Objekte: Ziliarmuskel **entspannt** → Zonulafasern (Aufhängebänder der Linse) spannen die Linse flach → geringe Brechkraft (~60 dpt) → Fernpunkt liegt im Unendlichen.
2. Nahe Objekte: Ziliarmuskel **kontrahiert** → Zonulafasern erschlaffen → Linse wölbt sich durch Eigenelastizität → höhere Brechkraft (~70 dpt) → Nahpunkt ca. 10 cm (junges Auge).

**Akkommodationsbreite** = Differenz zwischen maximaler und minimaler Brechkraft des Auges. Mit dem Alter nimmt die Linsenelastizität ab (Presbyopie).

## Nah- und Fernpunkt

- **Fernpunkt**: die weiteste Entfernung, auf die das Auge bei entspanntem Ziliarmuskel scharf sehen kann. Normal: im Unendlichen.
- **Nahpunkt**: die nächste Entfernung, auf die das Auge bei maximaler Akkommodation scharf sehen kann. Normal: ~10 cm bei 20-jährigen, ~25 cm bei 40-jährigen, ~100+ cm im Alter.

## Myopie (Kurzsichtigkeit)

**Ursache**: Augapfel zu lang (axialer Typ, häufigster) oder Hornhaut/Linse zu stark gewölbt (Brechungstyp).

**Physik**: Der Fernpunkt liegt nicht im Unendlichen, sondern in endlicher Entfernung. Parallel einfallendes Licht (aus dem Unendlichen) fokussiert vor der Netzhaut.

**Korrektur**: **Zerstreuungslinse** (negatives D). Sie macht das einfallende Licht leicht divergent, sodass das Licht nach Brechung im Auge auf der Netzhaut fokussiert.

Beispiel: Fernpunkt bei 50 cm → benötigte Korrektur: D = –1/f; das virtuelle Bild der Zerstreuungslinse soll bei 50 cm entstehen → D = –2,0 dpt.

## Hyperopie (Weitsichtigkeit)

**Ursache**: Augapfel zu kurz oder Brechkraft zu gering.

**Physik**: Paralleles Licht aus dem Unendlichen würde hinter der Netzhaut fokussiert. Das Auge muss permanent akkommodieren, auch für Fernsehen. Nahsicht erfordert exzessive Akkommodation → Kopfschmerzen, Asthenopie.

**Korrektur**: **Sammellinse** (positives D), die das Licht vorab konvergent macht.

## Presbyopie (Altersweitsichtigkeit)

Mit zunehmendem Alter verliert die Augenlinse durch Verhärtung (Sklerose) ihre Elastizität. Der Ziliarmuskel kann die Linse nicht mehr ausreichend wölben. Der Nahpunkt rückt in die Ferne (>30 cm ab ~45 Jahren). Fernsicht bleibt unverändert, Nahsicht (Lesen) wird schwierig.

**Korrektur**: Lesebrille (Sammellinse für Nahbereich) oder Gleitsichtbrille (kontinuierlicher Übergang Fern-/Nahbrille).

## Brechung im Auge — Linsengleichung angewandt

Die Abbildung auf der Netzhaut folgt der **Linsengleichung** 1/f = 1/g + 1/b, wobei das Auge als Gesamtsystem mit Brennweite f_Auge ≈ 17 mm (bei 60 dpt Brechkraft) modelliert wird und die Bildweite b = 24 mm (Augapfellänge) fest ist.

**Emmetropes Auge (normalsichtig):** Gegenstand im Unendlichen (g = ∞) → 1/f = 0 + 1/b → f = b = 17 mm → Bild auf der Netzhaut ✓

**Myopes Auge (zu lang, b = 26 mm):** Gleiche Brechkraft → 1/17 = 1/g + 1/26 → Fernpunkt bei g ≈ 49 cm. Alles jenseits davon ist unscharf. Korrekturlinse: D = 1/(−0,49) ≈ **−2,0 dpt**.

**Hyperopes Auge (zu kurz, b = 22 mm):** 1/f_benötigt = 1/∞ + 1/22 → f = 22 mm → D = 1/0,022 ≈ 45,5 dpt. Das Auge hat nur 43 dpt Hornhautbrechkraft → es fehlen ~2,5 dpt → Korrektur mit **+2,5 dpt** Sammellinse.

> **Merke:** Pro Millimeter Abweichung der Augapfellänge vom Normwert (24 mm) ändert sich die Refraktion um ca. **3 Dioptrien**. 1 mm zu lang ≈ −3 dpt (Myopie), 1 mm zu kurz ≈ +3 dpt (Hyperopie).

**Brechung an der Hornhaut (Snellius):** Der größte Brechkraftsprung findet an der Hornhaut-Vorderfläche statt: Luft (n = 1,0) → Hornhaut (n = 1,376). Dieser Übergang liefert ~43 dpt — zwei Drittel der Gesamtbrechkraft. Die übrigen Grenzflächen (Hornhaut → Kammerwasser → Linse → Glaskörper) tragen weit weniger bei, weil die Brechungsindizes ähnlich sind (n ≈ 1,33–1,42).

**Warum verschwimmt das Bild unter Wasser?** Wasser (n = 1,33) statt Luft (n = 1,0) vor der Hornhaut — der Brechungsindex-Sprung wird minimal → die Hornhaut verliert fast ihre gesamte Brechkraft → starke Hyperopie. Eine Taucherbrille stellt die Luft-Hornhaut-Grenzfläche wieder her.

## Astigmatismus (Stabsichtigkeit)

**Ursache**: Asymmetrische (torusförmige) Krümmung der Hornhaut oder Linse. Verschiedene Meridiane haben unterschiedliche Brechkräfte.

**Physik**: Statt einem Fokuspunkt entstehen zwei Fokallinien in verschiedenen Ebenen (Sturmsches Intervall). Punkte werden als Linien oder verschwommene Flächen wahrgenommen.

**Korrektur**: **Zylinderlinsen** (torische Linsen), die in einem Meridian brechen, im anderen nicht. Brillenrezept: sphärisch (sph) + zylindrisch (cyl) + Achswinkel (°).

## Das Brillenrezept

Ein Brillenrezept enthält für jedes Auge:
- **sph**: sphärischer Anteil in dpt (positiv = Hyperopie/Presbyopie; negativ = Myopie)
- **cyl**: zylindrischer Anteil in dpt (für Astigmatismus-Korrektur)
- **Achse**: Richtung des Zylinders in Grad (0–180°)
- **Add**: Nahzusatz für Lesebrillen/Gleitsicht (immer positiv)
- **Prisma**: für Schielkorrekturen

Beispiel: RE: sph –2,50 cyl –0,75 Achse 180°; LE: sph –3,00 cyl –0,50 Achse 10°.

> **Prüfungstipp:** Die Zuordnung Fehlsichtigkeit → Korrekturlinse ist ein MedAT-Klassiker: Myopie = Zerstreuungslinse (minus-Dioptrien), Hyperopie = Sammellinse (plus-Dioptrien). Merke: „Kurzsichtig = kurzer Fokus = zu stark brechend = Minus-Linse zum Abschwächen."

{{DIAGRAM:microscope-optics}}

## LASIK und refraktive Chirurgie

Laser in-situ Keratomileusis (LASIK): Ein Excimer-Laser (λ = 193 nm, UV) trägt durch Photoablation präzise Hornhautgewebe ab und verändert so ihre Krümmung dauerhaft. Für Myopie wird die Hornhautmitte abgetragen (abgeflacht); für Hyperopie der Rand. Typische Korrekturbereiche: –10 bis +6 dpt. Voraussetzungen: stabile Refraktion, ausreichende Hornhautdicke (>500 µm).

## Glaukom und Augeninnendruck

Das **Glaukom** (grüner Star) ist eine Erkrankung, bei der erhöhter intraokularer Druck (IOP) den Sehnerv schädigt. Normal: 10–21 mmHg. Bei Glaukom oft >21 mmHg, aber auch Normaldruckglaukom existiert.

**Messung**: Goldmann-Applanationstonometrie (misst Kraft, die Hornhaut auf 3,06 mm Durchmesser abzuflachen) oder Non-Contact-Tonometrie (Luftstoß). OCT-Papillenanalyse misst Nervenfaserschichtdicke.

## Rechenbeispiele

**Beispiel 1 — Myopie-Korrektur:**
Patient sieht scharf bis 25 cm (Fernpunkt). Korrekturlinse soll paralleles Licht (∞) in ein virtuelles Bild bei −25 cm umwandeln.
D = 1/f = 1/(−0,25 m) = **−4,0 dpt** (Zerstreuungslinse).
Probe: Gegenstand im ∞ → 1/b = 1/f − 1/g = −4 − 0 = −4 → b = −0,25 m ✓ (virtuelles Bild bei 25 cm).

**Beispiel 2 — Akkommodationsbreite über die Lebensspanne:**
20-Jähriger: Nahpunkt 10 cm → D_nah = 1/0,10 = 10 dpt. Fernpunkt ∞ → D_fern = 0.
Akkommodationsbreite: **10 dpt** (60 dpt → 70 dpt Gesamtbrechkraft).
50-Jähriger: Nahpunkt 50 cm → D_nah = 1/0,50 = 2 dpt. Akkommodationsbreite: nur **2 dpt** → Lesebrille nötig (+2,5 dpt für 25 cm Leseabstand).

**Beispiel 3 — LASIK: Ablationstiefe (Munnerlyn-Formel):**
Korrektur −3 dpt, optische Zone d = 6 mm. Ablationstiefe: t = D · d² / 3 = 3 · (6)² / 3 = 3 · 36 / 3 = **36 µm**.
Bei −6 dpt: t = 6 · 36 / 3 = **72 µm**. Hornhautdicke ~550 µm, mind. 250 µm Restdicke → max. Ablation ~150 µm → ca. −12 dpt Obergrenze.`,
      lernziele: [
        "Den Akkommodationsmechanismus mit Ziliarmuskel und Zonulafasern erklären.",
        "Myopie, Hyperopie, Presbyopie und Astigmatismus pathophysiologisch unterscheiden.",
        "Die optische Korrektur der jeweiligen Fehlsichtigkeit mit dem richtigen Linsentyp begründen.",
        "Ein einfaches Brillenrezept (sph/cyl/Achse) interpretieren.",
        "Das Prinzip der LASIK und der Glaukom-Diagnostik beschreiben.",
      ],
      sections: [
        {
          heading: "Akkommodation: Naheinstellung des Auges",
          text: "Der Ziliarmuskel umgibt die Augenlinse ringförmig. Bei Nahsicht kontrahiert er und lockert die Zonulafasern – die Linse wölbt sich durch ihre Eigenelastizität und erhöht die Brechkraft. Bei Fernsicht entspannt der Ziliarmuskel, die Zonulafasern spannen sich und ziehen die Linse flach. Die Akkommodationsbreite nimmt mit dem Alter ab, da die Linse an Elastizität verliert (Presbyopie). Der Nahpunkt rückt dann in die Ferne, Lesebrille wird nötig.",
          merksatz:
            "Ziliarmuskel kontrahiert → Linse wölbt sich (Nahsicht); entspannt → Linse flach (Fernsicht).",
        },
        {
          heading: "Die vier häufigen Sehfehler und ihre Korrektur",
          text: "Myopie (Kurzsichtigkeit): Augapfel zu lang → Bild vor Netzhaut → Zerstreuungslinse (–dpt). Hyperopie (Weitsichtigkeit): Augapfel zu kurz → Bild hinter Netzhaut → Sammellinse (+dpt). Presbyopie (Altersweitsichtigkeit): Linsenverhärtung → Nahpunkt zu weit → Lesebrille (+dpt für Nahbereich). Astigmatismus: asymmetrische Hornhautkrümmung → Zylinderlinse (cyl-Wert + Achsangabe). Diese vier Fehlsichtigkeiten können kombiniert auftreten (z. B. myoper Astigmatismus: sph negativ + cyl negativ).",
          merksatz:
            "Myopie → Zerstreuungslinse (–); Hyperopie → Sammellinse (+); Astigmatismus → Zylinderlinse.",
        },
        {
          heading: "LASIK und Glaukom-Diagnostik",
          text: "LASIK verändert dauerhaft die Hornhautkrümmung durch Excimer-Laser-Photoablation. Für Myopie wird die Hornhautmitte abgetragen (Abflachung), für Hyperopie die Peripherie. Das Glaukom schädigt den Sehnerv durch erhöhten Augeninnendruck (IOP >21 mmHg). Diagnostik: Applanationstonometrie misst IOP; OCT quantifiziert die peripapilläre Nervenfaserschichtdicke; Gesichtsfelduntersuchung erfasst Skotome (blinde Flecken im Gesichtsfeld). Therapie: drucksenkende Augentropfen, Lasertrabekuloplastik oder operative Fistulierung.",
          merksatz:
            "Glaukom: IOP >21 mmHg schädigt Sehnerv; OCT misst Nervenfaserschichtdicke für Diagnose.",
        },
      ],
      merksätze: [
        "Gesamtbrechkraft des Auges: ~60 dpt (Hornhaut ~43 dpt + Linse ~17–27 dpt).",
        "Akkommodation: Ziliarmuskel kontrahiert → Linse wölbt sich → Brechkraft steigt.",
        "Fernpunkt normal = Unendlichkeit; Nahpunkt junges Auge ≈ 10 cm.",
        "Myopie: Augapfel zu lang → Fokus vor Netzhaut → Zerstreuungslinse (–dpt).",
        "Hyperopie: Augapfel zu kurz → Fokus hinter Netzhaut → Sammellinse (+dpt).",
        "Presbyopie: Linsenverhärtung → Nahpunkt weicht zurück → Lesebrille (+dpt).",
        "Astigmatismus: toroide Hornhautkrümmung → Zylinderlinse (cyl + Achse).",
        "Brillenrezept: sph = sphärisch, cyl = zylindrisch, Achse = Orientierung.",
        "LASIK: Excimer-Laser (193 nm) trägt Hornhaut ab → dauerhafte Refraktionsänderung.",
        "Glaukom: IOP >21 mmHg → Sehnervschaden → Gesichtsfeldausfall.",
      ],
      altfrage: {
        text: "Ein myoper (kurzsichtiger) Patient hat einen Fernpunkt bei 50 cm. Welche Brillenstärke benötigt er?",
        options: [
          { id: "a", text: "+2,0 dpt" },
          { id: "b", text: "+0,5 dpt" },
          { id: "c", text: "-0,5 dpt" },
          { id: "d", text: "-2,0 dpt" },
          { id: "e", text: "-5,0 dpt" },
        ],
        correctOptionId: "d",
        explanation:
          "Myopie wird mit Zerstreuungslinsen (negativ) korrigiert. D = -1/Fernpunkt = -1/0,5 m = -2,0 dpt. Die Linse macht paralleles Licht divergent, als käme es aus dem Fernpunkt.",
      },
      klinischerBezug:
        "Brillenrezepte (sph/cyl/Achse), LASIK, Glaukom-Screening mittels Tonometrie und OCT, Katarakt-OP mit Intraokularlinse zur Brechkraftkorrektur.",
      selfTest: [
        {
          question:
            "Ein Patient hat einen Fernpunkt bei 40 cm. An welcher Fehlsichtigkeit leidet er, und welche Brillenstärke benötigt er?",
          options: [
            "Hyperopie, +2,5 dpt",
            "Myopie, –2,5 dpt",
            "Presbyopie, +2,5 dpt",
            "Myopie, –4,0 dpt",
            "Astigmatismus, cyl –2,5 dpt",
          ],
          correctIndex: 1,
          explanation:
            "Ein Fernpunkt bei endlicher Entfernung (40 cm, nicht im Unendlichen) weist auf Myopie hin. Der myope Fernpunkt liegt bei 40 cm = 0,4 m. Eine Zerstreuungslinse soll paralleles Licht (aus dem Unendlichen) so ablenken, als käme es vom Fernpunkt des Auges (40 cm). Dies entspricht einer virtuellen Bildweite von –0,4 m. Mit der Linsengleichung: 1/f = 1/g + 1/b = 1/∞ + 1/(–0,4 m) = –2,5 m⁻¹. Also D = –2,5 dpt. Dies ist eine Zerstreuungslinse (negatives D), typisch für Myopie-Korrektur.",
          hints: [
            "Fernpunkt endlich → Myopie. Fernpunkt = virtuelle Bildweite der Korrekturlinse (negativ, weil auf der Eingangsseite).",
            "D = 1/f_korrektur = 1/(–Fernpunktdistanz in Metern).",
          ],
          tags: ["myopie", "fernpunkt", "zerstreuungslinse"],
          difficulty: 2,
        },
        {
          question:
            "Welcher Mechanismus bewirkt, dass das Auge nahe Objekte scharf sehen kann (Akkommodation)?",
          options: [
            "Der Augapfel verlängert sich durch Muskelkontraktion",
            "Die Hornhaut verändert ihre Krümmung durch Ziliarmuskel-Kontraktion",
            "Die Augenlinse wölbt sich durch Erschlaffen der Zonulafasern, wenn der Ziliarmuskel kontrahiert",
            "Die Pupille weitet sich und lässt mehr Licht ein",
            "Der Glaskörperdruck steigt und drückt die Linse vor",
          ],
          correctIndex: 2,
          explanation:
            "Bei der Akkommodation auf Nähe kontrahiert der ringförmige Ziliarmuskel. Dadurch verkleinert sich der Ziliarkörper-Ring, die Spannung der Zonulafasern (Aufhängebänder der Linse) lässt nach. Die Linse, die durch ihre Eigenelastizität in die kugelförmige Form strebt, wölbt sich nun stärker – insbesondere an der Vorderfläche. Dadurch steigt ihre Brechkraft von ~17 dpt auf bis zu ~27 dpt. Die Gesamtbrechkraft des Auges steigt von ~60 auf ~70 dpt. Dies verschiebt den Fokus nach vorne auf die Netzhaut für nahe Objekte. Bei Entspannung des Ziliarmuskels (Fernsicht) ziehen die Zonulafasern die Linse flach.",
          hints: [
            "Merkhilfe: Ziliarmuskel kontrahiert RINGFÖRMIG → Ring wird enger → Zonulafasern erschlaffen → Linse wölbt sich.",
            "Die Hornhaut ändert ihre Krümmung nicht – nur die Linse ist aktiv variierbar.",
          ],
          tags: ["akkommodation", "ziliarmuskel", "augenlinse"],
          difficulty: 2,
        },
        {
          question:
            "Ein Brillenrezept lautet: sph +1,50, cyl –0,75, Achse 90°. Welche Fehlsichtigkeiten werden korrigiert?",
          options: [
            "Hyperopie und Astigmatismus kombiniert",
            "Nur Myopie",
            "Nur Presbyopie",
            "Myopie und Astigmatismus kombiniert",
            "Nur Astigmatismus",
          ],
          correctIndex: 0,
          explanation:
            "Das Rezept enthält zwei Komponenten: (1) sph +1,50 dpt – ein positiver sphärischer Wert bedeutet Sammellinse → Korrektur von Hyperopie (oder Presbyopie, wenn es sich um einen Add-Wert handelt). (2) cyl –0,75 dpt, Achse 90° – ein zylindrischer Wert mit Achsangabe bedeutet Korrektur von Astigmatismus. Die Zylinderlinse bricht nur in einem Meridian (senkrecht zur Achse) und gleicht die asymmetrische Hornhautkrümmung aus. Kombiniert: +1,50/–0,75 Achse 90° korrigiert eine Weitsichtigkeit mit astigmatischer Komponente. Bei myopem Astigmatismus wären die sph-Werte negativ.",
          hints: [
            "sph positiv → Sammellinse → Hyperopie/Presbyopie. cyl-Wert → Astigmatismus.",
            "Achsangabe ist immer ein Zeichen für Astigmatismus-Korrektur.",
          ],
          tags: ["brillenrezept", "astigmatismus", "hyperopie"],
          difficulty: 2,
        },
        {
          question:
            "Warum entwickeln stark Kurzsichtige im Alter oft keine oder nur geringe Presbyopie-Symptome beim Lesen?",
          options: [
            "Kurzsichtige haben eine dickere Linse und akkommodieren besser",
            "Kurzsichtige haben einen größeren Augeninnendruck, der die Linse flexibler hält",
            "Myope akkommodieren generell stärker als Emmetrope",
            "Ihr Nahpunkt liegt ohnehin nahe, sodass sie ohne Brille noch lesen können, auch wenn die Akkommodation nachlässt",
            "Myopie schützt vor Linsenverhärtung durch bessere Linsenernährung",
          ],
          correctIndex: 3,
          explanation:
            "Ein myopes Auge hat seinen Fernpunkt bei endlicher Entfernung (z. B. 33 cm bei –3 dpt). Zum Lesen (Abstand 30–40 cm) muss ein normalsichtiges Auge stark akkommodieren; ein myopes Auge kann hingegen ohne Brille (und ohne große Akkommodation) lesen, weil der Fokus ohnehin nahe liegt. Wenn im Alter die Akkommodation nachlässt (Presbyopie), kann der Myope für die Leseentfernung die Brille einfach abnehmen – die Zerstreuungslinsenbrille für Ferne ist dann nicht mehr nötig. Für Fernsicht benötigt er weiterhin seine Myopiebrille. Es handelt sich also um einen optischen Zufall, nicht um einen biologischen Schutz der Linse.",
          hints: [
            "Myope Fernpunkt: z. B. bei 33 cm. Lesedistanz: ~33–40 cm. Was folgt daraus für die nötige Akkommodation?",
            "Presbyopie = Akkommodationsverlust für Nähe. Was hilft, wenn der Fokus schon nah ist?",
          ],
          tags: ["myopie", "presbyopie", "akkommodation"],
          difficulty: 3,
        },
        {
          question:
            'Was beschreibt der Begriff "Astigmatismus" physikalisch, und welche Linse korrigiert ihn?',
          options: [
            "Ein Auge, das zu lang ist und eine Zerstreuungslinse benötigt",
            "Ein Sehnerv-Defizit, das mit einer Bifokalgläser behandelt wird",
            "Eine verhärtete Linse, die eine Sammellinse als Lesebrille erfordert",
            "Eine zu kleine Pupille, die mit einer Prismenlinie korrigiert wird",
            "Eine asymmetrische Hornhautkrümmung, bei der verschiedene Meridiane unterschiedliche Brechkraft haben – Korrektur durch Zylinderlinse",
          ],
          correctIndex: 4,
          explanation:
            "Astigmatismus (Stabsichtigkeit) bedeutet, dass die brechende Fläche (meist Hornhaut) keine gleichmäßig sphärische Krümmung hat, sondern in verschiedenen Meridianen unterschiedlich stark gewölbt ist – ähnlich einem Rugbyball statt einer Kugel. Dies führt dazu, dass verschiedene Ebenen des einfallenden Lichts unterschiedliche Brennpunkte haben (Sturmsches Intervall). Punkte werden als Linien oder Flecken wahrgenommen. Die Korrektur erfolgt mit torischen Linsen (Zylinderlinsen), die in einem Meridian eine definierte Brechkraft haben und im senkrechten Meridian keine. Das Brillenrezept enthält dafür den cyl-Wert (Stärke der zylindrischen Korrektur) und die Achse (Richtung des nicht-brechenden Meridians in Grad).",
          hints: [
            "Astigmatismus = ungleichmäßige Krümmung → verschiedene Fokuspunkte je nach Meridian.",
            "Zylinderlinse bricht nur in einer Richtung – ideal für asymmetrische Krümmungsfehler.",
          ],
          tags: ["astigmatismus", "zylinderlinse", "hornhautkrümmung"],
          difficulty: 2,
        },
      ],
    },
  ],
};
