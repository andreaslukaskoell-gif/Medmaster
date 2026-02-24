import type { Kapitel } from "../types";

export const physKapElektrizitaet: Kapitel = {
  id: "physik-kap4",
  title: "Elektrizitätslehre & Optik",
  subject: "physik",
  icon: "⚡",
  estimatedTime: "120 min",
  unterkapitel: [
    // === from kap5-elektrizitaetslehre ===
    {
      id: "ph-5-01",
      diagram: "circuit",
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
      content: `## Einleitung

Was hält Ionenkanäle in der Nervenmembran offen? Was treibt Elektrophorese an? Was erzeugt das elektrische Feld der Herzmuskelzellen im EKG? Die Antwort liegt in der **elektrischen Ladung** und dem Coulombgesetz. Ladungen erzeugen elektrische Felder — und diese Felder steuern biologische Prozesse auf molekularer Ebene. Für den MedAT sind Elementarladung, Coulombgesetz, elektrisches Feld, Spannung, Kondensator und medizinische Anwendungen (EKG, Elektrophorese, Membranpotenzial) prüfungsrelevant.

## Elektrische Ladung

**SVG-Hinweis (Ladung, Coulomb, elektrisches Feld):** Ein Schema mit Elementarladung e, Coulomb-Kraft F ∝ q₁q₂/r², Feldlinien und Plattenkondensator unterstützt die Prüfungsvorbereitung. *Typ: Übersicht / Schema.*

Elektrische Ladung ist eine fundamentale, unveränderliche Eigenschaft der Materie. Es gibt genau zwei Arten: **positive Ladung** (getragen von Protonen) und **negative Ladung** (getragen von Elektronen). Das Grundprinzip der Elektrostatik lautet: Gleichnamige Ladungen stoßen sich ab, ungleichnamige Ladungen ziehen sich an.

Die kleinste frei vorkommende Ladung ist die **Elementarladung** e = 1,602 × 10⁻¹⁹ C. Alle beobachtbaren Ladungen sind ganzzahlige Vielfache davon — dieses Prinzip nennt man **Ladungsquantisierung**. Die SI-Einheit der Ladung ist das **Coulomb (C)**; 1 C entspricht der Ladung von ca. 6,24 × 10¹⁸ Elektronen. Das **Ladungserhaltungsgesetz** besagt: In einem abgeschlossenen System bleibt die Gesamtladung konstant. Ladung kann weder erzeugt noch vernichtet, sondern nur getrennt oder übertragen werden.

Körper werden durch **Reibung** (Triboelektrizität), **Influenz** (Ladungsverschiebung ohne Kontakt) oder **Kontakt** mit geladenen Körpern elektrisiert. Bei der Influenz wird ein leitender Körper in ein externes Feld gebracht; freie Elektronen verschieben sich, sodass eine Seite negativ und die andere positiv wird — ohne dass Ladung übertragen wird.

> **Merke:** Ladung ist immer quantisiert (ganzzahlige Vielfache von e) und in abgeschlossenen Systemen erhalten — zwei Grundprinzipien der Elektrostatik.

**Leiter, Isolatoren und Halbleiter:**
- **Leiter** (Metalle): frei bewegliche Elektronen, Widerstand steigt mit Temperatur
- **Isolatoren** (Glas, Kunststoff): keine freien Ladungsträger, hoher Widerstand
- **Halbleiter** (Silizium, Germanium): Leitfähigkeit steigt mit Temperatur oder Dotierung — Basis der modernen Elektronik und medizinischer Sensoren

## Das Coulombsche Gesetz

Das **Coulombsche Gesetz** beschreibt die Kraft zwischen zwei ruhenden Punktladungen q₁ und q₂ im Abstand r:

**F = k · |q₁ · q₂| / r²**

Dabei ist k = 1/(4πε₀) = 8,99 × 10⁹ N·m²/C² die Coulombkonstante und ε₀ = 8,854 × 10⁻¹² C²/(N·m²) die elektrische Feldkonstante (Permittivität des Vakuums). Die Kraft wirkt entlang der Verbindungslinie der beiden Ladungen. In einem Medium mit relativer Permittivität εᵣ reduziert sich die Kraft: F = k · |q₁ · q₂| / (εᵣ · r²). Wasser hat εᵣ ≈ 80 — elektrostatische Kräfte zwischen Ionen sind in wässriger Lösung ca. 80-mal schwächer als im Vakuum, was die Dissoziation von Salzen erklärt.

Die strukturelle Analogie zum Gravitationsgesetz (F = G·m₁·m₂/r²) ist augenfällig: beide gehorchen dem **inversen Quadratgesetz**. Der entscheidende Unterschied: Die Coulombkraft kann repulsiv oder attraktiv sein, die Gravitation ist immer attraktiv. Und: Die Coulombkraft ist ca. 10³⁶-mal stärker als die Gravitation — weshalb elektromagnetische Wechselwirkungen Chemie und Biologie auf molekularer Ebene dominieren.

## Das elektrische Feld

Das **elektrische Feld E** ist eine Vektorgröße, die jedem Raumpunkt die Kraft pro Einheitsladung zuordnet:

**E = F / q₀** [N/C = V/m]

Eine positive Probeladung q₀ erfährt in einem Feld E die Kraft F = q₀ · E. **Elektrische Feldlinien** verlaufen von positiven zu negativen Ladungen; ihre Dichte ist ein Maß für die Feldstärke. Auf leitenden Oberflächen stehen Feldlinien immer senkrecht. Das Innere eines Leiters ist feldfrei (Faradayscher Käfig).

Das Feld einer Punktladung Q: **E = k · Q / r²** (radiales Feld, nimmt mit r² ab). In einem **Plattenkondensator** (Plattenabstand d, Spannung U) ist das Feld homogen: **E = U / d**. Homogene Felder eignen sich ideal für Experimente und technische Anwendungen. Die Gelelektrophorese nutzt ein homogenes elektrisches Feld, um DNA-Fragmente oder Proteine nach Größe und Ladung zu trennen.

## Elektrisches Potential und Spannung

Das **elektrische Potential φ** an einem Punkt gibt die potentielle Energie pro Ladung an: φ = E_pot / q [V = J/C]. Die **elektrische Spannung U** zwischen zwei Punkten A und B ist die Potentialdifferenz: U = φ_A − φ_B. Positive Ladungen bewegen sich spontan von hohem zu niedrigem Potential (in Richtung des Feldes); negative Ladungen entgegen der Feldrichtung. Die Einheit Volt (V): 1 V = 1 J/C.

**Äquipotentialflächen** (Flächen gleichen Potentials) stehen immer senkrecht auf den Feldlinien. Entlang einer Äquipotentialfläche ist keine Arbeit zu verrichten. Biologische Zellmembranen sind Regionen mit steilem Potentialgradienten: das Ruhemembranpotential beträgt ca. −70 mV (innen negativ). Über eine Membrandicke von ~7 nm ergibt das ein elektrisches Feld von ~10⁷ V/m — vergleichbar mit dem Durchschlagsfeld von Luft.

> **Merke:** Die Spannung U = φ_A − φ_B treibt Ladungsfluss an. Positive Ladungen bewegen sich spontan von hohem zu niedrigem Potential.

**Kondensator und Energiespeicherung:**
Ein **Kondensator** speichert Ladung auf zwei Platten und Energie im elektrischen Feld: **C = Q/U** [Farad] und **W = ½·C·U²**. Die Kapazität steigt mit der Plattenfläche und der Permittivität des Dielektrikums und sinkt mit dem Plattenabstand: C = ε₀·εᵣ·A/d. In der Medizin ist der Defibrillator ein Kondensator-Entlader: C ≈ 200 µF, geladen auf ~1500 V, liefert W ≈ 225 J in Millisekunden.

## Rechenbeispiele

**Beispiel 1 — Coulombkraft zwischen Na⁺ und Cl⁻ (Vakuum vs. Wasser):**
Abstand r = 0,28 nm (Ionenradien-Summe). Vakuum: F = k·e²/r² = 8,99×10⁹ · (1,6×10⁻¹⁹)² / (2,8×10⁻¹⁰)² = 8,99×10⁹ · 2,56×10⁻³⁸ / 7,84×10⁻²⁰ ≈ **2,94 nN**.
In Wasser (εᵣ = 80): F_W = 2,94 nN / 80 ≈ **0,037 nN** — deshalb dissoziiert NaCl in Wasser leicht.

**Beispiel 2 — Elektrisches Feld über der Zellmembran:**
Ruhemembranpotential U = 70 mV = 0,070 V, Membrandicke d = 7 nm = 7×10⁻⁹ m.
E = U/d = 0,070 / 7×10⁻⁹ = **10⁷ V/m = 10 MV/m**.
Zum Vergleich: Durchschlagsfeldstärke von Luft ≈ 3×10⁶ V/m → die Membran „hält" ein 3× stärkeres Feld aus.

**Beispiel 3 — Gelelektrophorese: Kraft auf DNA-Fragment:**
Gel-Feldstärke E = 5 V/cm = 500 V/m. Ein DNA-Fragment (1000 bp) trägt ~2000 Elementarladungen (je 2 Phosphatgruppen pro bp).
Gesamtladung q = 2000 · 1,6×10⁻¹⁹ C = 3,2×10⁻¹⁶ C.
Kraft: F = q·E = 3,2×10⁻¹⁶ · 500 = **1,6×10⁻¹³ N ≈ 0,16 pN**.
Die tatsächliche Wanderungsgeschwindigkeit hängt von Reibung im Gel ab (größere Fragmente langsamer → Größentrennung).

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Coulombkraft F ~ 1/r², elektrische Ladung (e, C), Feldstärke E = F/q, Potential, Spannung U = Arbeit pro Ladung, Kondensator (Q = C·U).

**Ergänzend vertiefend:** Dipol; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- "Wie ändert sich die Coulombkraft, wenn der Abstand verdoppelt wird?" → Kraft wird auf ¼ reduziert (1/r²-Gesetz)
- "In welchem Medium ist die Coulombkraft zwischen Ionen am schwächsten?" → Wasser (εᵣ ≈ 80 → Kraft 80× reduziert)
- "Was ist das elektrische Feld im Innern eines Faraday-Käfigs?" → Exakt null
- "Wie groß ist das Membranpotential einer Nervenzelle in Ruhe?" → ca. −70 mV (innen negativ)

**Typische Prüfungsfallen / Verwechslungen:**
- Spannung ≠ Feld: U [V] ist Potentialdifferenz, E [V/m] ist Feldstärke (E = U/d für Plattenkondensator)
- Coulombkraft wirkt entlang der Verbindungslinie — Lorentz-Kraft hingegen senkrecht zur Bewegungsrichtung
- Im Medium erscheint εᵣ im Nenner (Kraft wird geschwächt), nicht im Zähler

**Prüfungsrelevante Zahlen/Fakten:**
- Elementarladung: e = 1,602 × 10⁻¹⁹ C
- Coulombkonstante: k = 8,99 × 10⁹ N·m²/C²
- εᵣ(Wasser) ≈ 80; εᵣ(Vakuum) = 1
- Membranpotential: −70 mV über ~7 nm → E ≈ 10⁷ V/m (stärker als Luftdurchschlag!)
- Defibrillator: C ≈ 200 µF, U ≈ 1500 V → W = ½·C·U² ≈ 225 J

---

## Zusammenfassung (ultrakompakt)

- **Coulombgesetz**: F = k·q₁·q₂/r²; k = 8,99×10⁹ N·m²/C²; in Medium: F_M = F/εᵣ (in Wasser 80× kleiner!)
- **Elektrisches Feld**: E = F/q = k·Q/r² [V/m]; Feld zeigt von + nach −
- **Elektrische Spannung**: U = W/q [V]; Kondensator: U = Q/C; E = U/d (Plattenkondensator)
- **Membranpotenzial**: d = 7 nm, U = 70 mV → E = 10 MV/m (stärker als Luftdurchschlag!)
- **Kapazität**: C = ε₀·εᵣ·A/d [F]; Energie W = ½·C·U²; Defibrillator: 200 µF, 1500 V → 225 J
- **Klinisch**: Elektrophorese (Ladungstrennung im Feld), Gelelektrophorese (DNA-Fragmentgrößen), EKG (Herzfeldpotenziale)`,

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
        "Plattenkondensator: homogenes Feld E = U/d.",
        "In Wasser (εᵣ ≈ 80): Coulombkraft 80-mal schwächer als im Vakuum.",
        "Membranpotential: −70 mV über 7 nm ergibt E ≈ 10⁷ V/m.",
        "Faraday-Käfig: Leiterinnen sind feldfrei; E = 0 im Innern.",
        "Potential φ [V = J/C]: potentielle Energie pro Ladungseinheit.",
        "Äquipotentialflächen stehen immer senkrecht auf Feldlinien.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie das Coulombsche Gesetz und seine Bedeutung für biologische Systeme. Gehen Sie dabei auf die Rolle des Mediums und den Vergleich zur Gravitationskraft ein.",
        answer: `Das Coulombsche Gesetz beschreibt die elektrostatische Kraft zwischen zwei ruhenden Punktladungen q₁ und q₂ im Abstand r: F = k·|q₁·q₂|/r², wobei k = 8,99 × 10⁹ N·m²/C². Die Kraft ist proportional zum Produkt der Ladungen und nimmt mit dem Quadrat des Abstands ab (inverses Quadratgesetz). Sie ist repulsiv bei gleichnamigen, attraktiv bei ungleichnamigen Ladungen.

Im Vergleich zur Gravitation (F = G·m₁·m₂/r²) ist die Coulombkraft um den Faktor ~10³⁶ stärker und kann beide Vorzeichen annehmen. Deshalb dominieren elektrostatische Wechselwirkungen alle chemischen und biologischen Prozesse auf molekularer Ebene: Ionenbindungen, Wasserstoffbrücken, Protein-Ligand-Wechselwirkungen und die Stabilisierung von DNA.

In einem Medium mit relativer Permittivität εᵣ gilt: F = k·|q₁·q₂|/(εᵣ·r²). Wasser hat εᵣ ≈ 80, was elektrostatische Kräfte zwischen Ionen um den Faktor 80 schwächt. Dadurch können Salze wie NaCl in Wasser vollständig dissoziieren — die thermische Energie (k_B·T) überwindet die abgeschirmte Coulombkraft. In Proteinen variiert εᵣ lokal (2–80), was Ionenpaarbindungen im hydrophoben Kern begünstigt.

Das Membranpotential (−70 mV über ~7 nm Membrandicke) entspricht einem elektrischen Feld von ~10⁷ V/m. Dieses Feld steuert spannungsabhängige Ionenkanäle und ist essenziell für die neuronale Signalübertragung.`,
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
      ],
      content: `## Einleitung

Ein Stromschlag kann töten, ein Defibrillator kann Leben retten — beides ist elektrischer Strom. Das Ohm'sche Gesetz U = R·I verbindet Spannung, Widerstand und Strom. In Nervenfasern fließen Ionenströme durch Kanäle, in der Haut verändert Feuchtigkeit dramatisch den Widerstand. Strom erzeugt Wärme (Joule'sche Wärme) und kann Gewebe verbrennen oder stimulieren. Für den MedAT sind Ohm'sches Gesetz, Widerstand, Leistung P = U·I, Joule'sche Wärme, elektrische Gefährdung und biologische Leitfähigkeit prüfungsrelevant.

## Elektrischer Strom

**SVG-Hinweis (Strom, Ohm, Joule-Wärme):** Ein Schema mit I = ΔQ/Δt, U = R·I, P = U·I und Temperaturabhängigkeit des Widerstands unterstützt die Prüfungsvorbereitung. *Typ: Übersicht / Schema.*

**Elektrischer Strom I** ist der gerichtete Fluss elektrischer Ladungsträger. Die Stromstärke ist definiert als die pro Zeiteinheit durch einen Querschnitt fließende Ladung:

**I = ΔQ / Δt** [A = C/s]

Die Einheit ist Ampere (A). In Metallen fließen Elektronen (Leitungselektronen) — die technische Stromrichtung wurde konventionell entgegen der Elektronenflussrichtung definiert (von + nach −). In Elektrolyten (z. B. Blut, Zytoplasma) fließen positive und negative Ionen. In Halbleitern und Gasen gibt es weitere Trägerarten.

Die **Stromdichte j = I / A** [A/m²] beschreibt den Strom pro Querschnittsfläche — relevant für Heizeffekte. Mit der Driftgeschwindigkeit v_d der Elektronen und der Ladungsträgerdichte n gilt: j = n·e·v_d. Typische Driftgeschwindigkeiten in Kupfer sind winzig (~0,1 mm/s bei 1 A), während sich die elektromagnetische Wirkung mit Lichtgeschwindigkeit ausbreitet.

> **Merke:** Strom = gerichteter Ladungsfluss. In Metallen fließen Elektronen, in Elektrolyten (Blut, Zytoplasma) Ionen.

**Gleichstrom vs. Wechselstrom:**
- **Gleichstrom (DC)**: konstante Stromrichtung (Batterie, Defibrillator)
- **Wechselstrom (AC)**: periodisch wechselnde Richtung (Netz: 50 Hz, Elektrochirurgie: 300–500 kHz)
- AC ist bei 50 Hz gefährlicher als DC gleicher Amplitude (tetanische Muskelkontraktionen, Kammerflimmern ab ~100 mA)
- Hochfrequenter AC (>100 kHz) löst keine Nervenreize aus — deshalb nutzt die Elektrochirurgie HF-Strom

## Elektrischer Widerstand und Ohmsches Gesetz

Der **elektrische Widerstand R** gibt an, wie stark ein Leiter dem Stromfluss entgegenwirkt. Das **Ohmsche Gesetz** lautet:

**U = R · I** [V = Ω · A]

Die Einheit ist Ohm (Ω). Ein Ohmscher Leiter ist linear: Verdoppelt man U, verdoppelt sich I proportional. Der Widerstand hängt von der **Geometrie** und dem **Material** ab:

**R = ρ · L / A**

Dabei ist ρ der spezifische Widerstand [Ω·m], L die Länge und A der Querschnitt. Kupfer: ρ ≈ 1,7 × 10⁻⁸ Ω·m (sehr guter Leiter). Körpergewebe: ρ ≈ 0,5–3 Ω·m (schlechter Leiter, relevant für Defibrillation und Elektrounfall). Der **Leitwert G = 1/R** [Siemens, S] ist der Kehrwert des Widerstands; er wird bei Ionenkanälen bevorzugt verwendet.

## Temperaturabhängigkeit des Widerstands

Für die meisten Metalle steigt der Widerstand mit der Temperatur: **R(T) = R₀ · (1 + α · ΔT)**, wobei α der Temperaturkoeffizient ist. Für Kupfer: α ≈ 3,9 × 10⁻³ K⁻¹. Bei **Supraleitern** verschwindet der Widerstand unterhalb einer kritischen Temperatur T_c vollständig (z. B. Niob bei 9,25 K). MRT-Scanner nutzen supraleitende Niob-Titan-Spulen (4 K, fl. Helium), um Magnetfelder von 1,5–7 T ohne Ohmschen Verlust aufrechtzuerhalten.

**Halbleiter** (Si, Ge) haben einen negativen Temperaturkoeffizienten: Bei steigender Temperatur nimmt der Widerstand ab (mehr freie Ladungsträger). Thermistoren (NTC-Widerstände) nutzen diesen Effekt zur Temperaturmessung.

## Elektrische Leistung und Joulesche Wärme

Die elektrische Leistung:

**P = U · I = I² · R = U² / R** [W]

Die im Widerstand dissipierte Wärmeenergie (Joulesche Wärme) pro Zeit: P = I²·R. Dieser Effekt wird genutzt in Heizkörpern und Glühlampen — und ist in medizinischen Anwendungen relevant: Elektrochirurgie (HF-Strom → lokale Wärme → Gewebeschnitt/Koagulation), Ablationstherapie bei Herzrhythmusstörungen, Diathermie.

> **Merke:** P = U·I = I²·R = U²/R. Die Joulesche Wärme Q = I²·R·t ist Grundlage der Elektrochirurgie und Ablationstherapie.

**Gefährliche Stromstärken im menschlichen Körper:**

| Stromstärke | Wirkung |
|---|---|
| 1–2 mA | Wahrnehmungsschwelle (Kribbeln) |
| 10–20 mA | Tetanische Muskelkontraktion (Loslasssperre) |
| 50–100 mA | Atemmuskel-Verkrampfung, Erstickungsgefahr |
| >100 mA | Kammerflimmern (ohne Defibrillation letal) |
| >1 A | Direkte Herzschädigung, Verbrennungen |

## Elektrochemische Spannungsquellen und Nernst-Potential

**EMK (elektromotorische Kraft)**: Die Spannung, die eine Energiequelle (Batterie, Zelle) im Leerlauf — also ohne Stromfluss — an ihren Klemmen bereitstellt. Sie ist die treibende "Kraft" (eigentlich Energie pro Ladung) im Stromkreis.

Eine **Spannungsquelle** (Batterie, Akkumulator) erzeugt durch chemische Reaktionen eine EMK **ε** [V]. Reale Quellen haben einen **Innenwiderstand r**: U_klemme = ε − I·r. Bei hoher Stromentnahme sinkt die Klemmenspannung. Das **Nernst-Potential** für einzelne Ionenarten ist die Gleichgewichtsspannung über einer semipermeablen Membran (z. B. E_K⁺ ≈ −90 mV, E_Na⁺ ≈ +60 mV) — berechnet mit der Nernst-Gleichung: E = (RT/zF) · ln([Ion]_außen / [Ion]_innen).

## Rechenbeispiele

**Beispiel 1 — Elektrounfall: trockene vs. nasse Haut:**
230 V Netzspannung. Trockene Haut: R ≈ 50 kΩ → I = U/R = 230/50.000 = **4,6 mA** (spürbar, nicht gefährlich).
Nasse Haut: R ≈ 1 kΩ → I = 230/1.000 = **230 mA** → akut lebensgefährlich (Kammerflimmern ab ~100 mA).
Leistung am Körper: P = U·I = 230 · 0,23 = **53 W** → Verbrennungen an Ein-/Austrittsstellen.

**Beispiel 2 — Defibrillator-Energieabgabe:**
C = 200 µF, geladen auf U = 1500 V. Gespeicherte Energie: W = ½·C·U² = ½ · 200×10⁻⁶ · (1500)² = ½ · 200×10⁻⁶ · 2,25×10⁶ = **225 J**.
Thorax-Widerstand R ≈ 75 Ω. Spitzenstrom: I_max = U/R = 1500/75 = **20 A**.
Entladezeit (τ = R·C): 75 · 200×10⁻⁶ = **15 ms** — kurz genug für effektive Defibrillation.

**Beispiel 3 — Axonaler Längswiderstand:**
Unmyelinisiertes Axon: Radius r = 0,5 µm, Länge L = 1 mm, ρ_Axoplasma = 2 Ω·m.
R = ρ·L/A = 2 · 10⁻³ / (π·(0,5×10⁻⁶)²) = 2×10⁻³ / (7,85×10⁻¹³) ≈ **2,5 GΩ**.
Zum Vergleich: 1 mm Kupferdraht gleichen Querschnitts hätte R = 1,7×10⁻⁸ · 10⁻³ / 7,85×10⁻¹³ ≈ 22 Ω — der Faktor ~10⁸ erklärt, warum Nervenleitung auf Ionenkanäle und Aktionspotentiale angewiesen ist.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Ohm U = R·I, Widerstand R = ρ·l/A, Stromgefahr (ab ~100 mA Kammerflimmern), Leistung P = U·I, Reihen-/Parallelschaltung (R_seriell = R₁+R₂, 1/R_parallel = 1/R₁+1/R₂).

**Ergänzend vertiefend:** Kirchhoff; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- "Welcher Strom ist ab ~100 mA durch den Körper lebensgefährlich?" → Kammerflimmern ab ~100 mA
- "Wie ändert sich der Widerstand eines Drahtes bei Verdopplung der Länge?" → R verdoppelt sich (R = ρ·L/A)
- "Warum ist nasse Haut gefährlicher bei Stromberührung?" → R sinkt von ~50 kΩ auf ~1 kΩ → Strom ~50× höher
- "Welche Anwendung nutzt Joulesche Wärme therapeutisch?" → HF-Ablation, Elektrochirurgie

**Typische Prüfungsfallen / Verwechslungen:**
- P = U·I = I²·R = U²/R — alle drei Formen äquivalent, aber unterschiedliche Variablen nötig
- Metalle: R steigt mit T; Halbleiter/NTC: R sinkt mit T (entgegengesetzt!)
- Leitwert G = 1/R [Siemens] — wird bei Ionenkanälen statt R verwendet

**Prüfungsrelevante Zahlen/Fakten:**
- 1–2 mA: wahrnehmbar; 10–20 mA: Loslasssperre; >100 mA: Kammerflimmern; >1 A: Verbrennungen
- Spez. Widerstand: Kupfer ~1,7 × 10⁻⁸ Ω·m; Körpergewebe ~0,5–3 Ω·m
- MRT-Magnete: Supraleiter (Nb-Ti) bei 4 K, R = 0
- Nernst-Potential: E_K⁺ ≈ −90 mV, E_Na⁺ ≈ +60 mV

---

## Zusammenfassung (ultrakompakt)

- **Ohm'sches Gesetz**: U = R·I; R = ρ·L/A; ρ sinkt mit Feuchtigkeit (nasse Haut ~1 kΩ statt 50 kΩ → lebensgefährlich!)
- **Leistung**: P = U·I = U²/R = I²·R [W]; Joule'sche Wärme Q = P·t
- **Elektrischer Tod**: >100 mA → Kammerflimmern; 1–10 mA → schmerzhaft; <1 mA → spürbar
- **Spezifischer Widerstand**: Kupfer ~10⁻⁸ Ω·m; Axoplasma ~2 Ω·m; trockene Haut ~50 kΩ·m
- **Klinisch**: Defibrillator (225 J bei 200 µF/1500 V); Schutzerdung verhindert Stromfluss durch den Patienten`,

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
          merksatz: "U = R·I. R = ρ·L/A. Leitwert G = 1/R [S = A/V].",
        },
        {
          heading: "Elektrische Leistung und medizinische Anwendungen",
          text: "P = U·I = I²·R = U²/R [Watt]. Joulesche Wärme: Q = I²·R·t. Elektrochirurgie: HF-Strom (300–500 kHz) erzeugt lokale Wärme → Gewebeschnitt ohne Nervenreizung (zu schnell für Aktionspotential). Ablationstherapie: Hochfrequenzenergie zerstört arrhythmogenes Gewebe im Herz. Diathermie: Tiefenwärme durch hochfrequenten Strom. Defibrillation: Gleichstromstoß entsynchronisiert Kammerflimmern.",
          merksatz:
            "P = I²·R (Joulesche Wärme). Elektrochirurgie: HF-Strom → Wärme ohne Muskelreizung.",
        },
      ],
      diagram: "circuit",

      merksätze: [
        "Ohmsches Gesetz: U = R·I — gilt für lineare Widerstände.",
        "Stromstärke: I = ΔQ/Δt [A = C/s].",
        "Widerstand: R = ρ·L/A — größere Länge → mehr R; größerer Querschnitt → weniger R.",
        "Leistung: P = U·I = I²·R = U²/R [Watt].",
        "Joulesche Wärme: Q = I²·R·t — Basis der Elektrochirurgie.",
        "Metalle: R steigt mit T (positiver Temperaturkoeffizient α).",
        "Halbleiter/NTC: R sinkt mit T (negativer Temperaturkoeffizient).",
        "Supraleiter: R = 0 unterhalb T_c (MRT-Spulen).",
        "Leitwert G = 1/R [S = Siemens] — bevorzugt bei Ionenkanälen.",
        "Nernst-Potential: E = (RT/zF)·ln([außen]/[innen]) — Gleichgewichtsspannung für Ionen.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Ein Patient erleidet einen Elektrounfall mit 230 V Wechselspannung. Erläutern Sie, welche physikalischen Größen den Schaden bestimmen, und welche Faktoren den Körperwiderstand beeinflussen. Gehen Sie auch auf den Unterschied zwischen Gleich- und Wechselstrom ein.",
        answer: `Der biologische Schaden durch elektrischen Strom hängt primär von der Stromstärke I ab, nicht von der Spannung. Nach dem Ohmschen Gesetz gilt: I = U/R. Der Körperwiderstand R bestimmt also, welcher Strom bei 230 V durch den Körper fließt.

Der Körperwiderstand variiert stark: Trockene Haut: 10.000–100.000 Ω; feuchte/verletzte Haut: 1.000–10.000 Ω; intern (Blut, Muskeln): ~500 Ω. Bei trockener Haut fließt bei 230 V ca. 2–23 mA; bei feuchter Haut 23–230 mA. Ströme über 10–20 mA erzeugen tetanische Muskelkontraktionen (Loslasssperre), über 100 mA Kammerflimmern (meist letal ohne Defibrillation), über 1 A direkte Herzschädigung und Verbrennungen.

Wechselstrom (AC, 50 Hz) ist gefährlicher als Gleichstrom (DC) gleicher Amplitude, weil: (1) AC reizt Muskeln mit 50 Hz → tetanische Kontraktionen; (2) DC führt eher zu Verbrennungen als zu Kammerflimmern. Die Joulesche Wärme (Q = I²·R·t) erzeugt Verbrennungen intern und an Eintritts-/Austrittspunkten.

Stromweg ist entscheidend: Hand-zu-Hand-Pfad (durch Thorax/Herz) ist lebensgefährlicher als Fuß-zu-Fuß. Defibrillation nutzt gezielt einen kurzen Gleichstromstoß hoher Energie (200–360 J), um das Kammerflimmern zu terminieren.`,
      },
      klinischerBezug:
        "Die Elektrochirurgie nutzt hochfrequenten Wechselstrom (300–500 kHz), der im Gewebe durch Joulesche Wärme schneidet oder koaguliert, ohne Nerven- oder Muskelreize auszulösen (zu schnell für Aktionspotentiale). Bei der Hochfrequenz-Ablation werden arrhythmogene Herzareale durch lokale Wärmeentwicklung (I²·R) gezielt verödet. Patch-Clamp-Messungen erfassen den Leitwert einzelner Ionenkanäle im Picosiemens-Bereich und ermöglichen so die Charakterisierung von Kanalproteinen bei Herzerkrankungen.",
      selfTest: [
        {
          question:
            "Ein Widerstand von 470 Ω liegt an einer Spannung von 12 V. Wie groß ist die elektrische Leistung?",
          options: ["P ≈ 0,026 W", "P ≈ 0,31 W", "P ≈ 5640 W", "P ≈ 25,5 mW", "P ≈ 5,76 W"],
          correctIndex: 1,
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
            "Körpergewebe hat einen ca. 10⁷–10⁸-mal höheren spezifischen Widerstand als Kupfer",
            "Körpergewebe leitet besser als Kupfer, da es Wasser enthält",
            "Der spezifische Widerstand ist für alle Gewebe identisch (1 Ω·m)",
            "Kupfer leitet schlechter als Körpergewebe, da es kein ionisches Leitmedium ist",
          ],
          correctIndex: 1,
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
            "Sie kann Kammerflimmern auslösen",
            "Sie führt sofort zu Herzstillstand durch Asystolie",
            "Sie ist für den Menschen völlig harmlos",
          ],
          correctIndex: 2,
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
      content: `## Einleitung

Wie schließt man Lampen in einer Lichterkette so, dass nicht alle ausgehen, wenn eine kaputt ist? Parallelschaltung! Wie sind die Ionenkanäle einer Nervenzellmembran verschaltet — alle parallel, damit Ausfall eines Kanals nicht den Rest lahmlegt. Reihen- und Parallelschaltung, RC-Glieder und Kirchhoff'sche Regeln sind das Rüstzeug für Schaltungsanalyse — und damit für das Verständnis von Membranmodellen, Defibrillator-Entladung und Herzschrittmacher. Für den MedAT sind Reihen-/Parallelschaltung, Knoten- und Maschenregel, RC-Zeitkonstante sowie Kondensatorverhalten prüfungsrelevant.

## Grundlegende Schaltungstypen

**SVG-Hinweis (Reihen-/Parallelschaltung, Kirchhoff, RC):** Ein Schema mit R_ges Reihe/Parallel, Knoten- und Maschenregel sowie RC-Zeitkonstante unterstützt die Prüfungsvorbereitung. *Typ: Übersicht / Schema.*

In der Elektrotechnik und Biophysik werden Widerstände und andere Bauelemente in **Reihenschaltung** (Serie) oder **Parallelschaltung** kombiniert. Das Verständnis dieser Schaltungen ist die Basis für die Analyse elektrischer Systeme — von einfachen Schaltkreisen bis zu komplexen neuronalen Netzwerken.

**Reihenschaltung von Widerständen:**
- Gesamtwiderstand: **R_ges = R₁ + R₂ + ... + Rₙ** (immer größer als jeder Einzelwiderstand)
- Strom durch alle Widerstände gleich: I₁ = I₂ = ... = I
- Spannungsaufteilung: U₁ = I·R₁, U₂ = I·R₂ (Spannungsteiler)

**Parallelschaltung von Widerständen:**
- Gesamtwiderstand: **1/R_ges = 1/R₁ + 1/R₂ + ... + 1/Rₙ** (immer kleiner als der kleinste Einzelwiderstand)
- Spannung an allen Widerständen gleich: U₁ = U₂ = ... = U
- Stromaufteilung: I₁ = U/R₁, I₂ = U/R₂

Biologische Zellmembranen sind elektrisch äquivalent zu einem **RC-Parallelglied**: Die Lipiddoppelschicht wirkt als Kondensator C_m (lädt/entlädt sich bei Spannungsänderungen), die Ionenkanäle als variable Widerstände R_m (genauer: Leitfähigkeiten). Das Hodgkin-Huxley-Modell formalisiert dies als Schaltkreis mit spannungsgesteuerten Leitfähigkeiten für Na⁺, K⁺ und Leckstrom.

## Die Kirchhoffschen Gesetze

**Kirchhoffs Knotenregel (KCL):** Die Summe aller in einen Knoten einfließenden Ströme ist gleich der Summe aller abfließenden Ströme:

**ΣI_ein = ΣI_aus** (bzw. ΣI = 0 bei Vorzeichenkonvention)

Physikalische Basis: **Ladungserhaltung** — Ladung kann sich in einem Knoten weder ansammeln noch verschwinden.

**Kirchhoffs Maschenregel (KVL):** Die Summe aller Spannungen in einer geschlossenen Masche ist null:

**ΣU = 0** (bei Umlauf durch die Masche)

Physikalische Basis: **Energieerhaltung** — beim Umlauf durch eine geschlossene Schleife ist die Gesamtarbeit null (konservatives Feld).

Diese zwei Gesetze ermöglichen die vollständige Analyse beliebig komplexer Netzwerke. Gemeinsam mit dem Ohmschen Gesetz (U = R·I) bilden sie die Basis der Schaltungsanalyse.

> **Merke:** KCL (Knotenregel) = Ladungserhaltung: ΣI = 0. KVL (Maschenregel) = Energieerhaltung: ΣU = 0. Beide zusammen mit U = R·I lösen jedes lineare Netzwerk.

**Vergleich Reihen- und Parallelschaltung:**

| Eigenschaft | Reihenschaltung | Parallelschaltung |
|---|---|---|
| Strom | überall gleich (I₁ = I₂) | teilt sich auf (I = I₁ + I₂) |
| Spannung | teilt sich auf (U = U₁ + U₂) | überall gleich (U₁ = U₂) |
| R_ges | R₁ + R₂ (größer) | (R₁·R₂)/(R₁+R₂) (kleiner) |
| Anwendung | Spannungsteiler, EKG-Ableitungen | Parallele Ionenkanäle in Membranen |

## Kondensatoren in Schaltkreisen

Ein **Kondensator** speichert elektrische Energie im elektrischen Feld zwischen zwei Platten. Kapazität: **C = Q/U** [F = Farad = C/V]. Für einen Plattenkondensator: C = ε₀·εᵣ·A/d (A = Plattenfläche, d = Abstand, εᵣ = relative Permittivität des Dielektrikums).

Gespeicherte Energie: **W = ½·C·U²** = Q²/(2C) = ½·Q·U.

**Reihenschaltung von Kondensatoren:** 1/C_ges = 1/C₁ + 1/C₂ (C_ges kleiner)
**Parallelschaltung:** C_ges = C₁ + C₂ (C_ges größer)

**RC-Schaltkreis (Lade-/Entladekurve):** Wird ein Kondensator über einen Widerstand geladen, verläuft die Spannung exponentiell: U_C(t) = U₀ · (1 − e^(−t/τ)), mit Zeitkonstante **τ = R·C** [s]. Nach τ ist der Kondensator zu 63 % geladen, nach 5τ gilt er als vollständig geladen. Die Entladung: U_C(t) = U₀ · e^(−t/τ). Der Defibrillator nutzt einen großen Kondensator (C ≈ 200 µF, geladen auf ~1000–2000 V, W = ½·C·U² ≈ 200–400 J), der in ms über den Thorax entladen wird.

## Wechselstrom und Impedanz

Bei **Wechselstrom (AC)** mit Frequenz f = 1/T verhält sich ein Kondensator wie ein frequenzabhängiger Widerstand, die **kapazitive Reaktanz**: **X_C = 1/(2π·f·C)** [Ω]. Bei hohen Frequenzen ist X_C klein (Kondensator leitet), bei niedrigen groß (Kondensator sperrt). Eine Induktivität L hat die induktive Reaktanz: X_L = 2π·f·L. Die Gesamtimpedanz: Z = √(R² + (X_L − X_C)²).

Im menschlichen Körper ist die **Bioimpedanz** (Z_body) frequenzabhängig: Bei niedrigen Frequenzen fließt Strom durch Extrazellularflüssigkeit; bei hohen Frequenzen auch intrazellulär. Die **Bioimpedanzanalyse (BIA)** nutzt dies zur Bestimmung von Körperzusammensetzung (Fett- vs. Muskelmasse).

## Spannungsteiler und Messbrücken

Der **Spannungsteiler** teilt eine Spannung U₀ proportional zu den Widerständen auf: U₂ = U₀ · R₂/(R₁ + R₂). Die **Wheatstone-Brücke** detektiert minimale Widerstandsänderungen durch Vergleich zweier Spannungsteiler — genutzt in Dehnungsmessstreifen, Drucksensoren und Biosensoren (z. B. Glukosemessgeräte, Pulsoxymetrie-Schaltkreise).

## Rechenbeispiele

**Beispiel 1 — Defibrillator-Entladung (RC-Kreis):**
C = 200 µF, Ladespannung U₀ = 1800 V, Thoraxwiderstand R = 60 Ω.
Zeitkonstante: τ = R·C = 60 · 200×10⁻⁶ = **12 ms**. Nach 12 ms ist U auf 37 % (≈ 666 V) abgefallen.
Gespeicherte Energie: W = ½·C·U₀² = ½ · 200×10⁻⁶ · 1800² = **324 J** — im therapeutischen Bereich (200–360 J).

**Beispiel 2 — Gemischte Schaltung: R₁ in Reihe mit (R₂ ∥ R₃):**
R₁ = 100 Ω (Reihe), R₂ = 200 Ω ∥ R₃ = 300 Ω.
R₂₃ = (R₂·R₃)/(R₂+R₃) = (200·300)/500 = **120 Ω**.
R_ges = R₁ + R₂₃ = 100 + 120 = **220 Ω**.
Spannung U = 12 V → I_ges = 12/220 ≈ 54,5 mA. U₁ = I·R₁ = 5,45 V; U₂₃ = I·R₂₃ = 6,55 V.

**Beispiel 3 — Neuronale Membran-Zeitkonstante:**
Typisches Neuron: R_m = 10 kΩ·cm², C_m = 1 µF/cm².
τ_m = R_m · C_m = 10.000 Ω·cm² × 10⁻⁶ F/cm² = **10 ms**.
Bedeutung: Nach einem synaptischen Strompuls erreicht das Membranpotential in ~10 ms 63 % der Endspannung. Dünnere Axone (höheres R_m) haben längere τ → langsamere Antwort.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Reihenschaltung (R_ges = R₁+R₂, gleicher I), Parallelschaltung (1/R_ges = 1/R₁+1/R₂, gleiche U), Spannungsteiler, Stromteiler, Anwendung (Messgeräte).

**Ergänzend vertiefend:** Kapazität in Reihe/Parallel; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- "Wie berechnet man den Gesamtwiderstand bei Parallelschaltung?" → 1/R_ges = 1/R₁ + 1/R₂ + ... (immer kleiner als kleinster Einzelwert)
- "Nach welcher Zeit ist ein RC-Kondensator auf 63 % geladen?" → Nach einer Zeitkonstante τ = R·C
- "Welche Energie speichert ein Defibrillator-Kondensator (200 µF, 1500 V)?" → W = ½·C·U² = 225 J
- "Was besagt die Knotenregel?" → ΣI_ein = ΣI_aus (Ladungserhaltung)

**Typische Prüfungsfallen / Verwechslungen:**
- Kondensatoren in Reihe → 1/C_ges = 1/C₁ + 1/C₂ (umgekehrt zu Widerständen in Reihe!)
- Kondensatoren parallel → C_ges = C₁ + C₂ (wie Widerstände in Reihe addieren sich)
- Nach 1τ: 63 % geladen (nicht 50 %, nicht 100 %)
- Knotenregel = Ladungserhaltung; Maschenregel = Energieerhaltung (nicht verwechseln!)

**Prüfungsrelevante Zahlen/Fakten:**
- Defibrillator: C ≈ 200 µF, U ≈ 1000–2000 V, W ≈ 200–360 J, τ = R·C ≈ 10–15 ms
- Membrankapazität: C_m ≈ 1 µF/cm²; Membranzeitkonstante τ_m = R_m·C_m ≈ 10 ms
- Kapazitive Reaktanz: X_C = 1/(2π·f·C) — Kondensator sperrt Gleichstrom (f = 0 → X_C = ∞)
- Wheatstone-Brücke Gleichgewicht: R₁·R₄ = R₂·R₃

---

## Zusammenfassung (ultrakompakt)

- **Reihenschaltung**: R_ges = R₁+R₂+…; Strom gleich; Spannung teilt sich auf (Spannungsteiler)
- **Parallelschaltung**: 1/R_ges = 1/R₁+1/R₂+…; R_ges < R_kleinst; Spannung gleich; Strom teilt sich auf
- **Kirchhoff**: Knotenregel ΣI_ein = ΣI_aus; Maschenregel ΣU = 0
- **RC-Glied**: Laden U_C(t) = U₀·(1−e^(−t/τ)); Entladen U_C(t) = U₀·e^(−t/τ)); τ = R·C
- **τ-Bedeutung**: nach 1τ: 63 % geladen/37 % übrig; nach 5τ: praktisch voll/leer
- **Membranmodell**: Neuronen-Membran als RC-Glied; τ_m = R_m·C_m ≈ 10 ms → Integrationszeit synaptischer Signale`,

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
          text: "Zeitkonstante τ = R·C. Ladevorgang: U_C(t) = U₀·(1−e^(−t/τ)). Entladung: U_C(t) = U₀·e^(−t/τ). Nach τ: 63 % geladen/37 % entladen. Defibrillator: C ≈ 200 µF, U ≈ 1000–2000 V → W = ½·C·U² ≈ 100–400 J. Die gespeicherte Energie wird in ms über den Thorax entladen. Bioimpedanzanalyse: frequenzabhängige Impedanz des Körpers zur Messung von Fett- und Muskelmasse.",
          merksatz: "τ = R·C (Zeitkonstante). W = ½·C·U² (gespeicherte Energie im Kondensator).",
        },
      ],
      diagram: "circuit",

      merksätze: [
        "Reihenschaltung R: R_ges = R₁ + R₂ + ... (größer als jeder Einzelwert).",
        "Parallelschaltung R: 1/R_ges = 1/R₁ + 1/R₂ + ... (kleiner als jeder Einzelwert).",
        "Kondensatoren: Reihe → 1/C addieren; Parallel → C direkt addieren.",
        "KCL (Knotenregel): ΣI_ein = ΣI_aus — Ladungserhaltung.",
        "KVL (Maschenregel): ΣU = 0 in Masche — Energieerhaltung.",
        "RC-Zeitkonstante: τ = R·C [s]. Nach τ: 63 % geladen.",
        "Kondensatorenergie: W = ½·C·U².",
        "Kapazitive Reaktanz: X_C = 1/(2π·f·C) — sinkt mit Frequenz.",
        "Zellmembran als RC-Glied: C_m ≈ 1 µF/cm², R_m = Kanalwiderstand.",
        "Defibrillator: Kondensatorentladung ~200 J in ms → terminiert Kammerflimmern.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Beschreiben Sie das elektrische Ersatzschaltbild der Zellmembran und erläutern Sie, wie die Kirchhoffschen Gesetze und das RC-Verhalten die Entstehung und Fortleitung von Aktionspotentialen erklären.",
        answer: `Die Zellmembran lässt sich als RC-Parallelglied modellieren: Die Lipiddoppelschicht ist ein Plattenkondensator mit Kapazität C_m ≈ 1 µF/cm². Ionenkanäle wirken als variable Widerstände (oder Leitfähigkeiten g = 1/R) für Na⁺, K⁺, Cl⁻ und Leck-Ionen. Das Hodgkin-Huxley-Modell (1952) beschreibt den Membranapparatstrom als: I_ges = C_m·dU/dt + g_Na·(U−E_Na) + g_K·(U−E_K) + g_L·(U−E_L).

Kirchhoffsche Knotenregel am Membranknoten: Der Gesamtstrom (kapazitiv + ionisch) muss null sein (geschlossener Kreis). Das RC-Verhalten erklärt die Zeitdynamik: Bei plötzlicher Depolarisation muss zuerst die Membrankapazität umgeladen werden (Zeitkonstante τ = R_m·C_m). Dies verursacht das charakteristische exponentielle Ansteigen der Spannung.

Erreicht die Depolarisation das Schwellenpotential (~−55 mV), öffnen sich spannungsgesteuerte Na⁺-Kanäle (g_Na steigt schlagartig): Positives Feedback → Overshoot bis +30 mV. Die Maschenregel in der Membranmasche: U_membran = U_Na-Batterie − I_Na·R_Na (Nernst-Potential als EMK). Nach dem Overshoot inaktivieren Na⁺-Kanäle; K⁺-Kanäle öffnen → Repolarisation. Die saltatorische Leitung kann mit Kirchhoffs Knotenregel am Ranvierschen Schnürring erklärt werden: Strom fließt axial durch das Axon (Längswiderstand) und lädt den nächsten Schnürring um — das Aktionspotential springt vorwärts.`,
      },
      klinischerBezug:
        "Der Defibrillator nutzt einen Kondensator (C ≈ 200 µF, geladen auf ~1000–2000 V, W ≈ 200–360 J), der beim Entladen über Thoraxelektroden (R_körper ≈ 50–100 Ω) innerhalb von ca. 10 ms einen Stromstoß durch das Herz sendet — diese massenhafte Depolarisation terminiert Kammerflimmern. Die Bioimpedanzanalyse (BIA) nutzt das frequenzabhängige RC-Verhalten des Körpers: bei 50 kHz fließt Strom durch Extra- und Intrazellularraum; das Impedanzmuster erlaubt die Berechnung von Fettmasse, Muskelmasse und Körperwasser. Herzschrittmacher sind komplexe Schaltkreise aus Kondensatoren, Widerständen und integrierten Schaltungen.",
      selfTest: [
        {
          question:
            "Drei Widerstände R₁ = 10 Ω, R₂ = 20 Ω, R₃ = 30 Ω sind parallel geschaltet. Welcher Gesamtwiderstand ergibt sich?",
          options: ["60 Ω", "5,45 Ω", "18,18 Ω", "10 Ω", "3,33 Ω"],
          correctIndex: 1,
          explanation:
            "1/R_ges = 1/10 + 1/20 + 1/30 = 6/60 + 3/60 + 2/60 = 11/60. R_ges = 60/11 ≈ 5,45 Ω. Bei Parallelschaltung ist der Gesamtwiderstand immer kleiner als der kleinste Einzelwiderstand (hier < 10 Ω). Zur Kontrolle: 60 Ω wäre die Reihenschaltung. 3,33 Ω wäre nur 1/3 des kleinsten Widerstands (falsch). 18,18 Ω wäre der arithmetische Mittelwert (kein physikalisch sinnvoller Wert für Parallelschaltung).",
          hints: [
            "1/R_ges = 1/R₁ + 1/R₂ + 1/R₃. Bringe auf gemeinsamen Nenner (60).",
            "Parallelwiderstand ist immer kleiner als der kleinste Einzelwiderstand. Welche Antwort ist < 10 Ω?",
          ],
          difficulty: 1,
          tags: ["parallelschaltung", "widerstand", "schaltkreis"],
        },
        {
          question:
            "Ein Kondensator (C = 100 µF) wird über einen Widerstand (R = 1000 Ω) geladen. Nach welcher Zeit ist er auf ca. 63 % seiner Endspannung geladen?",
          options: ["Nach 0,1 ms", "Nach 1 ms", "Nach 10 ms", "Nach 100 ms", "Nach 1 s"],
          correctIndex: 3,
          explanation:
            "Die Zeitkonstante τ = R·C = 1000 Ω · 100×10⁻⁶ F = 0,1 s = 100 ms. Nach genau einer Zeitkonstante τ ist der Kondensator auf U₀·(1−e⁻¹) = U₀ · 0,632 ≈ 63 % aufgeladen. Nach 5τ = 500 ms gilt der Kondensator als vollständig geladen (>99 %). Diese Zeitkonstante ist analog zur Membranzeitkonstante τ_m = R_m·C_m (typisch 1–20 ms für Neuronen), die die Reaktionsgeschwindigkeit auf Strompulse bestimmt.",
          hints: [
            "τ = R·C. Berechne: 1000 Ω × 100 µF = ?",
            "100 µF = 100 × 10⁻⁶ F = 10⁻⁴ F. 1000 × 10⁻⁴ = 0,1 s = 100 ms.",
          ],
          difficulty: 1,
          tags: ["kondensator", "zeitkonstante", "rc-glied"],
        },
        {
          question:
            "Ein Defibrillator wird auf 2000 V geladen (C = 150 µF). Welche Energie ist gespeichert?",
          options: ["W = 150 J", "W = 300 J", "W = 600 J", "W = 30 J", "W = 3000 J"],
          correctIndex: 1,
          explanation:
            "W = ½·C·U² = ½ · 150×10⁻⁶ F · (2000 V)² = ½ · 150×10⁻⁶ · 4×10⁶ = ½ · 600 = 300 J. Typische Defibrillatoren liefern 200–360 J. Diese Energie wird in ~10 ms über den Thorax entladen (R_thorax ≈ 50–100 Ω). Der resultierende Spitzenstrom beträgt I_max = U/R = 2000/75 ≈ 27 A — genug, um alle Herzmuskelzellen gleichzeitig zu depolarisieren und Kammerflimmern zu beenden. Moderne biphasische Defibrillatoren benötigen weniger Energie (100–200 J).",
          hints: [
            "W = ½·C·U². C = 150 µF = 150 × 10⁻⁶ F. U = 2000 V → U² = 4 × 10⁶ V².",
            "½ × 150 × 10⁻⁶ × 4 × 10⁶ = ½ × 600 = 300 J.",
          ],
          difficulty: 2,
          tags: ["defibrillator", "kondensator", "energie"],
        },
        {
          question:
            "Die Wheatstone-Brücke ist im Gleichgewicht (kein Strom durch das Galvanometer), wenn gilt:",
          options: [
            "R₁ + R₂ = R₃ + R₄",
            "R₁ · R₄ = R₂ · R₃",
            "R₁/R₂ = R₃ + R₄",
            "R₁ · R₂ = R₃ · R₄",
            "R₁ = R₂ = R₃ = R₄",
          ],
          correctIndex: 1,
          explanation:
            "Für die Wheatstone-Brücke im Gleichgewicht (U_Galvanometer = 0): R₁/R₂ = R₃/R₄, äquivalent zu R₁·R₄ = R₂·R₃ (Kreuzprodukt). Die Bedingung ergibt sich aus der Maschenregel: Beide Spannungsteiler teilen die Speisespannung im gleichen Verhältnis auf. Anwendungen: Präzisionsmessung von Widerstandsänderungen in Dehnungsmessstreifen, Drucksensoren (z. B. invasive Blutdruckmessung), Temperatursensoren und Biosensoren.",
          hints: [
            "Gleichgewicht: beide Spannungsteiler gleich. R₁/(R₁+R₂) = R₃/(R₃+R₄). Vereinfachen.",
            "Kreuzprodukt: R₁·R₄ = R₂·R₃.",
          ],
          difficulty: 3,
          tags: ["wheatstone-brücke", "spannungsteiler", "widerstandsmessung"],
        },
        {
          question:
            "Welche Kapazität hat ein Plattenkondensator mit A = 0,01 m², d = 1 mm und εᵣ = 4?",
          options: ["C ≈ 35 pF", "C ≈ 354 pF", "C ≈ 3,54 nF", "C ≈ 35,4 nF", "C ≈ 354 nF"],
          correctIndex: 1,
          explanation:
            "C = ε₀·εᵣ·A/d = (8,854×10⁻¹² · 4 · 0,01) / (1×10⁻³) = (8,854×10⁻¹² · 0,04) / (10⁻³) = 3,542×10⁻¹³ / 10⁻³ = 3,542×10⁻¹⁰ F ≈ 354 pF. Probe: 354 pF = 0,354 nF. Option A wäre ohne den Faktor εᵣ = 4 (nur ε₀). Option C wäre mit d = 0,1 mm (zehnmal kleiner). Bei biologischen Membranen gilt C_m ≈ 1 µF/cm² — eine typische Zelle (A ≈ 1000 µm²) hat eine Membrankapazität von ca. 10–100 pF.",
          hints: [
            "C = ε₀·εᵣ·A/d. ε₀ = 8,854 × 10⁻¹² F/m. d = 1 mm = 10⁻³ m.",
            "Zähler: 8,854×10⁻¹² × 4 × 0,01 = 3,54×10⁻¹³. Nenner: 10⁻³. Division ergibt C in Farad.",
          ],
          difficulty: 3,
          tags: ["kapazität", "plattenkondensator", "permittivität"],
        },
      ],
    },
    {
      id: "ph-5-04",
      diagram: "em-spectrum",
      title: "Magnetismus und elektromagnetische Induktion",
      stichworte: [
        "Magnetfeld",
        "Lorentz-Kraft",
        "Biot-Savart",
        "Faraday-Induktion",
        "Lenzsche Regel",
        "Transformator",
        "Larmor-Frequenz",
        "MRT",
        "Elektromagnetisches Spektrum",
        "Zyklotron",
        "TMS",
        "Selbstinduktion",
      ],
      content: `## Einleitung

Das MRT-Gerät im Krankenhaus nutzt ein Magnetfeld von 1,5–7 Tesla — hunderttausend Mal stärker als das Erdmagnetfeld. Ein Zyklotron beschleunigt Protonen auf 15 % Lichtgeschwindigkeit, um PET-Isotope zu erzeugen. Die Grundlage: **Magnetismus entsteht durch bewegte Ladungen**, und bewegte Ladungen im Magnetfeld erfahren die Lorentz-Kraft. Für den MedAT sind Magnetfeld (B, Tesla), Lorentz-Kraft, Biot-Savart, Faraday-Induktion, Larmor-Frequenz und MRT-Prinzip prüfungsrelevant.

## Grundlagen des Magnetismus

**SVG-Hinweis (Magnetfeld, Lorentz, Faraday, MRT):** Ein Schema mit B-Feld, Lorentz-Kraft F = q(v×B), Induktion und Larmor-Frequenz unterstützt die Prüfungsvorbereitung. *Typ: Übersicht / Schema.*

Magnetismus entsteht durch bewegte elektrische Ladungen (elektrische Ströme). Es gibt keine magnetischen Monopole (im Gegensatz zu elektrischen Ladungen): Magnete haben immer einen Nord- und einen Südpol. Das **Magnetfeld B** [Tesla, T] ist eine Vektorgröße.

**Magnetische Materialien:**
- **Diamagnetisch** (μᵣ < 1): schwach abstoßend (Wasser, organisches Gewebe) — Grund, warum Körper vom MRT-Feld kaum beeinflusst wird
- **Paramagnetisch** (μᵣ > 1): schwach anziehend (Aluminium, Gadolinium als MRT-Kontrastmittel)
- **Ferromagnetisch** (μᵣ ≫ 1): stark anziehend (Eisen, Nickel, Cobalt) — Gefahr für metallische Implantate im MRT

> **Merke:** Magnetfeldlinien sind immer geschlossen (keine Monopole). B-Feld-Einheit: 1 Tesla = 1 V·s/m².

Das **Biot-Savart-Gesetz** beschreibt das Magnetfeld eines stromdurchflossenen Leiters. Für einen geraden, langen Leiter mit Strom I im Abstand r: **B = μ₀·I / (2π·r)**, wobei μ₀ = 4π × 10⁻⁷ T·m/A die magnetische Feldkonstante (Permeabilität des Vakuums) ist. Magnetfeldlinien bilden geschlossene Kreise um den Leiter (Rechte-Hand-Regel: Daumen in Stromrichtung → Finger zeigen in Richtung B).

Für eine **Spule (Solenoid)** mit n Windungen pro Meter bei Strom I: **B = μ₀·μᵣ·n·I** (im Innern homogen). Mit einem ferromagnetischen Kern (μᵣ ≫ 1, z. B. Eisen: μᵣ ≈ 1000–100.000) wird das Feld enorm verstärkt. MRT-Magnete: supraleitende Solenoide mit B₀ = 1,5–7 T.

## Lorentz-Kraft

Eine bewegte Ladung q mit Geschwindigkeit v in einem Magnetfeld B erfährt die **Lorentz-Kraft**:

**F = q · (v × B)** [N]

Die Kraft steht senkrecht auf v und auf B — sie verrichtet keine Arbeit, ändert aber die Richtung der Ladung. Folge: In einem homogenen Magnetfeld bewegt sich eine Ladung auf einer **Kreisbahn** (Zyklotronbewegung): Zentripetalkraft = Lorentz-Kraft → **r = m·v / (q·B)** (Zyklotronradius). Für schwerere Teilchen oder schnellere: größerer Radius.

Medizinische Anwendungen der Lorentz-Kraft: **Massenspektrometrie** (Ionen auf Kreisbahnen → Massenbestimmung); **Zyklotron** (Protonenbeschleunigung für PET-Isotope wie ¹⁸F); Lorentz-Kraft auf Gradientenspulen im MRT erzeugt das charakteristische Klopfen.

## Faradaysches Induktionsgesetz

Ändert sich der magnetische Fluss Φ = B·A·cos(α) durch eine Leiterschleife zeitlich, wird eine **Spannung (EMK) induziert**:

**ε = −N · dΦ/dt = −N · d(B·A·cos α)/dt** [V]

Das negative Vorzeichen folgt aus der **Lenzschen Regel**: Die induzierte Spannung ist so gerichtet, dass der induzierte Strom der Flussänderung entgegenwirkt (Energieerhaltung). Anwendungen: **Transformator**: Wandelt Wechselspannungen um via elektromagnetischer Induktion. Transformationsformel: **U₁/U₂ = N₁/N₂** (Windungszahlverhältnis = Spannungsverhältnis). Bei idealem Transformator gilt zudem P₁ = P₂ → I₁/I₂ = N₂/N₁. Medizinisch: Trenntransformatoren in OP-Sälen (galvanische Trennung, Schutz vor Stromschlag); **Induktionskochplatte** (Wirbelströme); **Generator** (mechanische → elektrische Energie); **MRT** (empfangende Spulen messen induzierte Spannungen durch präzedierende Protonenspins).

## Selbstinduktion und Induktivität

Eine Spule mit Induktivität **L** [Henry, H] widersteht Stromänderungen durch Selbstinduktion: ε = −L · dI/dt. Gespeicherte Energie: **W = ½·L·I²**. MRT-Gradientenspulen erzeugen ortsabhängige Felder durch schnell schaltende Ströme — die dabei induzierten Wirbelströme begrenzen die Schaltgeschwindigkeit und erzeugen das charakteristische Klopfen des MRT.

## Elektromagnetische Wellen und das EM-Spektrum

Sich zeitlich ändernde elektrische Felder erzeugen Magnetfelder (Maxwell-Gleichungen) und umgekehrt. Elektromagnetische Wellen breiten sich im Vakuum mit Lichtgeschwindigkeit c = 3 × 10⁸ m/s aus: **c = λ · f** und **c = 1/√(ε₀·μ₀)**.

Das **elektromagnetische Spektrum**: Radiowellen (MRT, ~64–300 MHz); Mikrowellen (Diathermie); Infrarot (Wärme); Sichtbares Licht (400–700 nm); UV (Desinfektion, Vitamin-D-Synthese); Röntgen (Diagnostik, 0,01–10 nm); Gamma (PET, Szintigraphie).

| EM-Bereich | Wellenlänge | Medizinische Anwendung |
|---|---|---|
| Radiowellen | >1 m | MRT (HF-Pulse) |
| Mikrowellen | 1 mm–1 m | Diathermie, Mikrowellen-Ablation |
| Infrarot | 780 nm–1 mm | Thermografie, Wärmelampen |
| Sichtbar | 380–780 nm | Endoskopie, Laser-OP, OCT |
| UV | 10–380 nm | Desinfektion, Phototherapie, LASIK (193 nm) |
| Röntgen | 0,01–10 nm | Röntgen, CT |
| Gamma | <0,01 nm | PET, Szintigraphie, Strahlentherapie |

**MRT im Detail:** Ein statisches Feld B₀ polarisiert Protonenspins. HF-Pulse (Larmor-Frequenz: f_L = γ·B₀/2π, für ¹H: γ/2π = 42,58 MHz/T) kippen die Magnetisierung. Nach dem Puls präzedieren und relaxieren die Spins — die Präzession induziert via Faraday eine Spannung in der Empfangsspule (das MRT-Signal). Gradientenspulen kodieren den Ort. T₁- und T₂-Relaxationszeiten sind gewebespezifisch und erzeugen den Bildkontrast.

## Rechenbeispiele

**Beispiel 1 — Larmor-Frequenz bei verschiedenen MRT-Feldstärken:**
f_L = (γ/2π) · B₀ mit γ/2π = 42,58 MHz/T für ¹H.
Bei 1,5 T: f_L = 42,58 × 1,5 = **63,87 MHz** (≈ 64 MHz, UKW-Bereich).
Bei 3 T: f_L = 42,58 × 3 = **127,74 MHz** (UHF-Bereich).
Bei 7 T: f_L = 42,58 × 7 = **298,06 MHz** — höheres SNR, aber stärkere HF-Absorption (SAR-Limit).

**Beispiel 2 — Zyklotron: Protonenenergie für PET-Isotop ¹⁸F:**
Zyklotron B = 1,2 T, Austrittsradius r = 0,4 m. Protonengeschwindigkeit: v = q·B·r/m = (1,6×10⁻¹⁹ · 1,2 · 0,4) / 1,67×10⁻²⁷ = 7,68×10⁻²⁰ / 1,67×10⁻²⁷ ≈ **4,6×10⁷ m/s** (≈ 15 % c).
Kinetische Energie: E_kin = ½mv² = ½ · 1,67×10⁻²⁷ · (4,6×10⁷)² ≈ 1,77×10⁻¹² J ≈ **11 MeV** — ausreichend für ¹⁸O(p,n)¹⁸F-Reaktion (Schwelle ~2,6 MeV).

**Beispiel 3 — TMS: induzierte Feldstärke im Kortex:**
TMS-Spule erzeugt dB/dt = 10⁴ T/s über einer Fläche A ≈ 25 cm² = 25×10⁻⁴ m².
Induzierte EMK (einzelne Windung): |ε| = A · dB/dt = 25×10⁻⁴ · 10⁴ = **25 V**.
Induzierte Feldstärke im Gewebe (Radius ~2 cm): E ≈ ε/(2π·r) = 25/(2π·0,02) ≈ **200 V/m**.
Schwelle für Neuronendepolarisation: ~1–2 V/m → TMS ist 100× über der Schwelle.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Magnetfeld B, Lorentzkraft (F = q·v·B senkrecht), Larmor-Frequenz f_L = γ·B (MRT: 42,58 MHz/T), Kernspin, Anwendung MRT (Radiowellen, 1,5 T ≈ 64 MHz).

**Ergänzend vertiefend:** T1/T2-Kontrast; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- "Welche Frequenz hat das MRT-Anregungssignal bei 1,5 T?" → f_L = 42,58 × 1,5 ≈ 64 MHz (Radiowellenbereich)
- "Warum klopft ein MRT-Gerät?" → Lorentz-Kraft F = I·L×B auf stromführende Gradientenspulen im Hauptfeld B₀
- "Was bewirkt die Lenzsche Regel?" → Induzierter Strom wirkt der Flussänderung entgegen (Energieerhaltung)
- "Welche Wellenlängen hat sichtbares Licht?" → 380 nm (violett) bis 780 nm (rot)

**Typische Prüfungsfallen / Verwechslungen:**
- Lorentz-Kraft verrichtet keine Arbeit (senkrecht auf v), ändert aber die Richtung → Kreisbahn
- Faraday-Induktion: ε ∝ Änderungsrate dΦ/dt, nicht dem Feld B selbst (konstantes B induziert nichts!)
- MRT-Signal kommt von ¹H-Protonen (Wasser), nicht von anderen Atomkernen
- Magnetfeld B [Tesla] ≠ Elektrisches Feld E [V/m] — Einheiten beachten!

**Prüfungsrelevante Zahlen/Fakten:**
- μ₀ = 4π × 10⁻⁷ T·m/A (Permeabilität des Vakuums)
- Larmor-Konstante ¹H: γ/2π = 42,58 MHz/T → bei 1,5 T: ~64 MHz; bei 3 T: ~128 MHz
- Zyklotronradius: r = m·v/(q·B)
- c = λ·f = 3 × 10⁸ m/s (alle EM-Wellen im Vakuum)
- TMS: dB/dt bis 10⁴ T/s → induziertes Feld im Kortex ~200 V/m (100× über Depolarisationsschwelle)

---

## Zusammenfassung (ultrakompakt)

- **Magnetfeld**: B [T]; Biot-Savart: B = μ₀·I/(2π·r) (Leiter); Solenoid: B = μ₀·μᵣ·n·I
- **Lorentz-Kraft**: F = q·v×B; senkrecht auf v und B → keine Arbeit; Kreisbahn: r = m·v/(q·B)
- **Faraday-Induktion**: U_ind = −N·ΔΦ/Δt; Lenz: induzierter Strom wirkt seiner Ursache entgegen
- **Larmor-Frequenz**: f_L = γ·B₀; für ¹H: 42,58 MHz/T → bei 1,5 T: 63,87 MHz (MRT-Resonanz)
- **Zyklotron**: Lorentz-Kraft → Kreisbahn → Protonenenergie für PET-Isotopenherstellung (¹⁸F für PET)
- **MRT-Prinzip**: B₀-Feld richtet ¹H-Spins aus → RF-Puls kippt sie → Relaxation → Signal; Gradientenfelder = Ortskodierung`,

      lernziele: [
        "Das Magnetfeld eines geraden Leiters und einer Spule berechnen",
        "Die Lorentz-Kraft auf bewegte Ladungen beschreiben und den Zyklotronradius berechnen",
        "Das Faradaysche Induktionsgesetz und die Lenzsche Regel erklären und anwenden",
        "Das Prinzip der MRT-Bildgebung physikalisch auf Magnetfeld, Larmor-Präzession und Induktion zurückführen",
        "Das elektromagnetische Spektrum und medizinische Anwendungen verschiedener Frequenzbereiche nennen",
      ],
      sections: [
        {
          heading: "Magnetfeld und Lorentz-Kraft",
          text: "Magnetfeld B [T] entsteht durch bewegte Ladungen/Ströme. Biot-Savart: B = μ₀·I/(2π·r) für geraden Leiter. Solenoid: B = μ₀·μᵣ·n·I. Lorentz-Kraft: F = q·v×B — senkrecht auf v und B, keine Arbeit. Kreisbahn: r = m·v/(q·B). Anwendungen: Massenspektrometrie (r → Masse), Zyklotron (PET-Isotope), MRT (B₀ = 1,5–7 T).",
          merksatz: "Lorentz-Kraft: F = q·v×B, senkrecht auf v und B → Kreisbahn. r = m·v/(q·B).",
        },
        {
          heading: "Elektromagnetische Induktion",
          text: "Faraday: ε = −N·dΦ/dt. Lenzsche Regel: induzierter Strom wirkt der Flussänderung entgegen. Transformator: U₁/U₂ = N₁/N₂. Generator: mechanische → elektrische Energie. MRT: präzedierende Protonenspins induzieren Signal in Empfangsspule (Faraday). Gradientenspulen schalten schnell → Wirbelströme → Klopfen. Selbstinduktion L: ε = −L·dI/dt; W = ½·L·I².",
          merksatz: "Faraday: ε = −N·dΦ/dt. Lenz: induzierter Strom hemmt seine Ursache.",
        },
        {
          heading: "MRT und elektromagnetisches Spektrum",
          text: "MRT: B₀ polarisiert ¹H-Spins. Larmor-Frequenz: f_L = γ·B₀/2π (bei 1,5 T: ~64 MHz). HF-Puls kippt Magnetisierung. Relaxation (T₁, T₂) gewebespezifisch → Bildkontrast. Gradientenspulen: Ortscodierung. EM-Spektrum: Radiowellen (MRT) → Mikrowellen → IR → sichtbar → UV → Röntgen → Gamma. Alle breiten sich mit c = 3×10⁸ m/s aus (c = λ·f).",
          merksatz:
            "c = λ·f = 3×10⁸ m/s. Larmor: f_L = γ·B₀/2π. MRT bei 1,5 T: f ≈ 64 MHz (Radiowelle).",
        },
        {
          heading: "Biomagnetismus und klinische Anwendungen",
          text: "Biologische Ströme erzeugen schwache Magnetfelder: Das Herz erzeugt ~10⁻¹⁰ T (MCG, Magnetkardiographie), das Gehirn ~10⁻¹³ T (MEG, Magnetenzephalographie). Gemessen mit SQUID-Sensoren (superconducting quantum interference devices) bei 4 K. MCG/MEG sind strahlungsfrei und zeitlich hochauflösend. Transkranielle Magnetstimulation (TMS): Kurze starke Magnetfeldpulse (Faraday-Induktion) depolarisieren kortikale Neuronen nicht-invasiv — therapeutisch bei Depression.",
          merksatz:
            "MEG: ~10⁻¹³ T (Gehirn). MCG: ~10⁻¹⁰ T (Herz). Messung mit SQUID-Sensoren. TMS: Magnetpuls → Nervenreiz.",
        },
      ],
      merksätze: [
        "Magnetfeld gerader Leiter: B = μ₀·I/(2π·r). Rechte-Hand-Regel für Richtung.",
        "Solenoid: B = μ₀·μᵣ·n·I — im Innern homogen.",
        "Lorentz-Kraft: F = q·v×B — senkrecht auf v und B, keine Arbeit.",
        "Zyklotronradius: r = m·v/(q·B) — Prinzip von Massenspektrometer und Zyklotron.",
        "Faraday: ε = −N·dΦ/dt — Flussänderung induziert Spannung.",
        "Lenzsche Regel: induzierter Strom wirkt Ursache entgegen (Energieerhaltung).",
        "Selbstinduktion: ε = −L·dI/dt. Energie: W = ½·L·I².",
        "c = λ·f = 3×10⁸ m/s — gilt für alle EM-Wellen im Vakuum.",
        "Larmor-Frequenz: f_L = γ·B₀/2π — bei 1,5 T für ¹H: ~64 MHz.",
        "TMS: Magnetfeldpuls induziert (Faraday) Strom im Kortex → Neuronenreizung.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie das physikalische Prinzip der Magnetresonanztomographie (MRT). Gehen Sie dabei auf das statische Magnetfeld, die Larmor-Präzession, HF-Pulse, Relaxation und die Signaldetektion via Faraday-Induktion ein.",
        answer: `1. Statisches Hauptmagnetfeld B₀ (1,5–7 T): Supraleitende Solenoide (Nb-Ti, 4 K) erzeugen ein starkes, homogenes Feld. Wasserstoffkerne (¹H-Protonen) mit Kernspin 1/2 können sich parallel oder antiparallel zu B₀ ausrichten. Bei Körpertemperatur ist die Parallelausrichtung (niedrigere Energie) leicht bevorzugt → netto-Magnetisierung M₀ parallel zu B₀.

2. Larmor-Präzession: Die Magnetisierung M präzediert um B₀ mit der Larmor-Frequenz: f_L = γ·B₀/(2π). Für ¹H: γ/2π = 42,58 MHz/T. Bei 1,5 T: f_L ≈ 64 MHz (Radiowellenbereich); bei 3 T: ~128 MHz.

3. HF-Anregungspuls: Ein Hochfrequenzpuls mit genau f_L (Resonanzbedingung) kippt M aus der z-Achse in die xy-Ebene (90°-Puls). Nach dem Puls präzediert M in der xy-Ebene — dies ist das detektierbare Signal.

4. Relaxation (T₁ und T₂): T₁ (Spin-Gitter-Relaxation): M kehrt längs zur z-Achse zurück (Wiederaufbau von M_z). T₂ (Spin-Spin-Relaxation): M_xy zerfällt durch Dephasierung (destruktive Interferenz der Spins). Beide Zeiten sind gewebespezifisch (z. B. Fett: T₁ kurz → hell in T₁-Bild; Wasser: T₂ lang → hell in T₂-Bild) und erzeugen den diagnostischen Kontrast.

5. Signaldetektion (Faraday-Induktion): Die präzedierende Quermagnetisierung M_xy induziert nach Faraday (ε = −dΦ/dt) in den Empfangsspulen eine Wechselspannung mit f = f_L. Dieses freie Induktionszerfallssignal (FID) wird fouriertransformiert → Frequenzspektrum → Ortscodierung durch Gradientenspulen → Bild.`,
      },
      klinischerBezug:
        "Die Magnetresonanztomographie (MRT) nutzt das Faradaysche Induktionsgesetz zur Signaldetektion: Präzedierende Protonenspins induzieren in Empfangsspulen eine messbare Wechselspannung — ohne ionisierende Strahlung, mit hervorragenden Weichteilkontrasten. Transkranielle Magnetstimulation (TMS) induziert durch kurze Magnetfeldpulse (Faraday) elektrische Ströme in kortikalen Neuronen und ermöglicht so nicht-invasive Hirnstimulation zur Behandlung von Depression und zur Kartierung kortikaler Areale. Das Elektrokardiogramm (EKG) misst elektrische Potentiale; das Magnetkardiogramm (MCG) erfasst direkt das durch Herzströme erzeugte Magnetfeld (~10⁻¹⁰ T) mit SQUID-Sensoren — strahlungsfrei und hochempfindlich.",
      selfTest: [
        {
          question:
            "Ein Proton (m = 1,67 × 10⁻²⁷ kg, q = 1,6 × 10⁻¹⁹ C) bewegt sich mit v = 10⁶ m/s senkrecht in ein Magnetfeld B = 0,5 T. Wie groß ist der Zyklotronradius?",
          options: ["r ≈ 0,21 mm", "r ≈ 2,1 cm", "r ≈ 21 mm", "r ≈ 210 µm", "r ≈ 2,1 m"],
          correctIndex: 1,
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
            "Lorentz-Kraft auf stromführende Gradientenspulen im starken Hauptmagnetfeld B₀",
            "Kavitation durch starke Schallwellen",
            "Thermische Ausdehnung der Kühlröhren bei Heliumzufuhr",
            "Resonanzschwingungen des Patienten im Magnetfeld",
          ],
          correctIndex: 1,
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
            "Elektromagnetische Induktion (Faraday): Magnetfeldpuls induziert elektrischen Strom im Kortex",
            "Thermische Aktivierung durch Joulesche Wärme",
            "Resonanzabsorption von Radiowellen durch Protonen",
            "Kapazitive Kopplung über die Schädelkalotte",
          ],
          correctIndex: 1,
          explanation:
            "TMS nutzt das Faradaysche Induktionsgesetz: Eine Spule über dem Schädel erzeugt einen kurzen (~100 µs), sehr starken Magnetfeldpuls (dB/dt bis zu 10⁴ T/s). Nach Faraday (ε = −dΦ/dt) wird dadurch ein elektrisches Feld im darunterliegenden Kortexgewebe induziert. Dieses Feld treibt einen elektrischen Strom durch die Neuronen — ausreichend stark (~1–2 V/m), um Aktionspotentiale auszulösen. Vorteil gegenüber direkter elektrischer Stimulation: kein schmerzhafter Hautstrom, nicht-invasiv. TMS wird therapeutisch bei therapieresistenter Depression eingesetzt (rTMS) und in der Forschung zur Kartierung kortikaler Areale.",
          hints: [
            "TMS: Magnetspule erzeugt schnell wechselndes Magnetfeld. Welches Gesetz verbindet ΔB mit einem elektrischen Feld?",
            "Faraday: Ein zeitlich veränderliches Magnetfeld induziert ein elektrisches Feld — auch ohne Leiter.",
          ],
          difficulty: 2,
          tags: ["tms", "faraday", "neurostimulation"],
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
      content: `## Einleitung

Eine Brille korrigiert Fehlsichtigkeit — aber wie? Ein Endoskop leitet Licht durch biegsame Glasfasern ins Körperinnere — warum geht das Licht nicht verloren? Beides erklärt die **geometrische Optik**: Reflexion, Brechung und Linsengleichung. Licht ändert beim Übergang zwischen Medien seine Richtung (Brechung), und ab einem kritischen Winkel wird es vollständig reflektiert (Totalreflexion — Basis der Glasfaser). Für den MedAT sind Snellius'sches Brechungsgesetz, Brechungsindex, Totalreflexion, Linsengleichung, Brechkraft (Dioptrien) und Endoskopie prüfungsrelevant.

## Reflexionsgesetz

**SVG-Hinweis (Reflexion, Snellius, Totalreflexion, Linsen):** Ein Schema mit Einfall = Ausfall, n₁·sin α₁ = n₂·sin α₂, Grenzwinkel und Brechkraft D unterstützt die Prüfungsvorbereitung. *Typ: Übersicht / Schema.*

Wenn Licht auf eine glatte Oberfläche trifft, wird es reflektiert. Das **Reflexionsgesetz** lautet:

> **Einfallswinkel α₁ = Ausfallswinkel α₂**

Beide Winkel werden stets zur **Flächennormalen** (dem Lot auf der Oberfläche) gemessen, nicht zur Oberfläche selbst. Bei einem ebenen Spiegel entsteht ein virtuelles, seitenvertauschtes Bild in gleicher Größe wie das Objekt. Der scheinbare Bildabstand hinter dem Spiegel entspricht dem realen Objektabstand vor dem Spiegel.

**Spiegeltypen und Anwendungen:**
- **Ebener Spiegel**: virtuelles, gleichgroßes Bild (Mundhöhleninspektion, Zahnarzt-Spiegel)
- **Konkaver Hohlspiegel**: reelles oder virtuelles vergrößertes Bild (Ophthalmoskop-Reflektoren, Zahnarzt-Kopfspiegel, Parabolantennen)
- **Konvexer Wölbspiegel**: virtuelles verkleinertes Bild, großes Sichtfeld (Überwachungsspiegel)

> **Merke:** Einfallswinkel = Ausfallswinkel, beide zur Flächennormalen gemessen. Bei rauhen Oberflächen: diffuse Reflexion (Streuung in alle Richtungen).

## Brechungsgesetz (Snellius)

Trifft Licht schräg auf die Grenzfläche zwischen zwei optisch unterschiedlichen Medien, ändert es seine Ausbreitungsrichtung. Das **Snellsche Brechungsgesetz** beschreibt diese Ablenkung:

> **n₁ · sin α₁ = n₂ · sin α₂**

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

## Linsen und Brechkraft

Linsen sind optische Elemente, die Lichtstrahlen durch Brechung an zwei Flächen ablenken.

**Sammellinse** (konvex, bikonvex): in der Mitte dicker, positive Brennweite f > 0. Parallel einfallendes Licht wird im realen **Brennpunkt F** gesammelt.

**Zerstreuungslinse** (konkav, bikonkav): am Rand dicker, negative Brennweite f < 0. Strahlen werden so abgelenkt, als kämen sie aus einem virtuellen Brennpunkt.

Die **Linsengleichung** (Abbildungsgleichung) verknüpft Brennweite f, Gegenstandsweite g und Bildweite b:

> **1/f = 1/g + 1/b**

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
Brechkraft der Linse: D = 1/f = 1/0,20 m = **5 dpt**.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Brechung (Snellius n₁·sin α = n₂·sin β), Brechzahl n, Totalreflexion (sin α_G = n₂/n₁), Grenzwinkel, Anwendung (Lichtleiter, Endoskopie).

**Ergänzend vertiefend:** Dispersion; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- "Was ist der Grenzwinkel für Totalreflexion bei Glas (n=1,5) → Luft (n=1)?" → sin α_G = 1/1,5 → α_G ≈ 41,8°
- "Wie berechnet man die Bildweite mit der Linsengleichung?" → 1/b = 1/f − 1/g
- "Welche Brille korrigiert Kurzsichtigkeit?" → Zerstreuungslinse (negatives D)
- "Wie addieren sich Brechkräfte mehrerer Linsen?" → D_ges = D₁ + D₂ + ...

**Typische Prüfungsfallen / Verwechslungen:**
- Totalreflexion nur vom dichteren zum dünneren Medium (n₁ > n₂), NICHT umgekehrt
- Winkel werden immer gegen das Lot (Flächennormale) gemessen, nicht gegen die Oberfläche
- Positives b → reelles Bild hinter der Linse; negatives b → virtuelles Bild auf der Gegenstandsseite

**Prüfungsrelevante Zahlen/Fakten:**
- Brechungsindizes: Vakuum = 1; Luft ≈ 1; Wasser = 1,33; Glas ≈ 1,5; Hornhaut = 1,376
- Brechkraft Auge: ~60 dpt gesamt (Hornhaut ~43 dpt + Linse ~17 dpt variabel)
- Glasfaser Grenzwinkel ≈ 70° (Kern n=1,62, Mantel n=1,52)
- D = 1/f [m]: positive D = Sammellinse; negative D = Zerstreuungslinse

---

## Zusammenfassung (ultrakompakt)

- **Reflexion**: Einfallswinkel α = Ausfallswinkel α' (beide gegen das Lot)
- **Snellius**: n₁·sin α₁ = n₂·sin α₂; in dichterem Medium (n↑) → Strahl bricht zum Lot
- **Brechungsindex**: Vakuum n=1; Luft ≈1; Wasser 1,33; Glas 1,5; Hornhaut 1,376
- **Totalreflexion**: nur beim Übergang von optisch dichter → dünner; Grenzwinkel α_G = arcsin(n₂/n₁)
- **Linsengleichung**: 1/f = 1/g + 1/b; Brechkraft D = 1/f [dpt]; Sammellinse f>0; Zerstreuungslinse f<0
- **Klinisch**: Endoskopie (Totalreflexion in Glasfaser); Brechkraft des Auges ~60 dpt (Hornhaut ~40 dpt, Linse ~20 dpt)`,
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
      diagram: "lens-imaging",

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
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie das Prinzip der Totalreflexion und beschreiben Sie deren Bedeutung für die medizinische Endoskopie.",
        answer:
          "Totalreflexion tritt auf, wenn Licht von einem optisch dichteren Medium (Brechungsindex n₁) auf die Grenzfläche zu einem optisch dünneren Medium (n₂ < n₁) trifft. Mit zunehmendem Einfallswinkel steigt der Brechungswinkel. Beim Grenzwinkel α_grenz, definiert durch sin α_grenz = n₂/n₁, läuft der gebrochene Strahl exakt entlang der Grenzfläche (Brechungswinkel = 90°). Bei Einfallswinkeln größer als α_grenz findet keinerlei Transmission mehr statt – das Licht wird vollständig reflektiert, ohne Energieverlust durch Absorption oder Transmission. Ein Beispiel: Für Glas (n=1,5) → Luft (n=1) beträgt der Grenzwinkel arcsin(1/1,5) ≈ 41,8°. In der medizinischen Endoskopie nutzt man Glasfaserbündel aus sehr dünnen Fasern (Kerndurchmesser 10–100 µm), deren Kern einen höheren Brechungsindex hat als der umgebende Mantel. Licht, das in den Kern eingekoppelt wird, trifft die Kern-Mantel-Grenzfläche stets unter einem Winkel größer als der Grenzwinkel und wird daher vollständig reflektiert. Dadurch kann Licht über Meter durch flexible, gebogene Kabel ohne wesentliche Verluste geführt werden. In modernen Endoskopen leitet eine Faser-Gruppe Beleuchtungslicht in den Körper (Kaltlicht, keine Wärme im Gewebe), während eine zweite Fasergruppe oder eine CCD-Kamera am distalen Ende das Bild zurückleitet. Diese Technik ermöglicht minimalinvasive Diagnostik (Gastroskopie, Koloskopie, Bronchoskopie, Laparoskopie) ohne große operative Zugänge.",
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
        "Kohärenz",
        "Abbe-Kriterium",
        "Numerische Apertur",
        "Auflösungsvermögen",
        "OCT",
        "Spektrum",
        "Wellenlänge",
        "Superposition",
        "Ölimmersion",
      ],
      content: `## Einleitung

Warum kann ein Lichtmikroskop keine Strukturen kleiner als ~200 nm auflösen? Warum leuchten Seifenblasen bunt? Warum kann OCT die Netzhautschichten schichtweise abbilden? Das Strahlmodell der geometrischen Optik reicht hier nicht — man muss Licht als **Welle** behandeln. Interferenz und Beugung bestimmen das Auflösungslimit (Abbe-Kriterium) und ermöglichen moderne Bildgebungsverfahren. Für den MedAT sind Interferenz, Abbe-Auflösungsgrenze, Numerische Apertur, Mikroskopie und OCT-Prinzip prüfungsrelevant.

## Licht als elektromagnetische Welle

**SVG-Hinweis (Interferenz, Beugung, Abbe):** Ein Schema mit Gangunterschied n·λ / (n+½)·λ, Doppelspalt und Auflösungsgrenze d_min ≈ λ/(2·NA) unterstützt die Prüfungsvorbereitung. *Typ: Übersicht / Schema.*

Licht ist eine transversale elektromagnetische Welle, bei der elektrisches und magnetisches Feld senkrecht zur Ausbreitungsrichtung schwingen. Kenngrößen sind:
- **Wellenlänge λ**: räumlicher Abstand zwischen zwei Wellenbergen
- **Frequenz f**: zeitliche Schwingungsfrequenz
- **Zusammenhang**: c = λ·f (c = Lichtgeschwindigkeit im Vakuum ≈ 3·10⁸ m/s)

Das **sichtbare Spektrum** umfasst Wellenlängen von ca. 380 nm (violett) bis 780 nm (rot). Unterhalb liegt UV-Strahlung (100–380 nm), oberhalb Infrarotstrahlung (780 nm–1 mm).

> **Merke:** c = λ·f = 3×10⁸ m/s im Vakuum. Im Medium sinkt die Geschwindigkeit (v = c/n), die Wellenlänge wird kürzer (λ_medium = λ₀/n), die Frequenz bleibt gleich.

**Dispersion:** Der Brechungsindex n hängt von der Wellenlänge ab — kurzwelliges Licht (blau/violett) wird stärker gebrochen als langwelliges (rot). Ein Prisma zerlegt weißes Licht in seine Spektralfarben. Medizinisch relevant: Polychromator in der Spektralphotometrie (Labordiagnostik) und chromatische Aberration in Linsen.

**Polarisation:** Licht ist transversal und kann polarisiert werden — das E-Feld schwingt nur in einer Ebene. Polarisationsfilter blocken Blendlicht. Chiroptische Methoden nutzen die Drehung der Polarisationsebene durch optisch aktive Substanzen (z. B. Glukose-Bestimmung im Polarimeter).

## Interferenz

**Interferenz** bezeichnet die Überlagerung (Superposition) zweier oder mehrerer kohärenter Wellen. Kohärenz bedeutet: gleiche Frequenz und feste Phasenbeziehung.

**Konstruktive Interferenz** (Verstärkung) tritt auf, wenn der Gangunterschied Δ ein ganzzahliges Vielfaches der Wellenlänge ist:
> **Δ = n · λ** (n = 0, 1, 2, …)

**Destruktive Interferenz** (Auslöschung) tritt auf, wenn der Gangunterschied ein halbzahliges Vielfaches ist:
> **Δ = (n + ½) · λ** (n = 0, 1, 2, …)

## Doppelspaltexperiment (Young)

Thomas Youngs klassisches Experiment (1801) bewies den Wellencharakter des Lichts. Licht trifft auf einen Doppelspalt mit Spaltabstand d. Hinter dem Spalt entstehen zwei kohärente Kugelwellen, die auf einem Schirm im Abstand L interferieren.

Der **Gangunterschied** für den Winkel θ ist:
> **Δ = d · sin θ ≈ d · y/L** (für kleine Winkel)

wobei y der Abstand des Maximums von der Mittelachse ist.

**Abstand zweier benachbarter Maxima (heller Streifen):**
> **Δy = λ · L / d**

Ein kleiner Spaltabstand d oder eine größere Wellenlänge λ ergibt ein weiteres Muster – die Streifen liegen weiter auseinander.

## Beugung

**Beugung** ist die Ablenkung von Wellen an Hindernissen oder Öffnungen. Sie tritt merklich auf, wenn die Hindernisgröße in der Größenordnung der Wellenlänge liegt.

- Kurzwelliges Licht (violett, ~400 nm) wird weniger gebeugt als langwelliges (rot, ~700 nm).
- Am Einzelspalt der Breite b entsteht das erste Minimum bei: sin α = λ/b
- Das zentrale Maximum hat doppelte Breite im Vergleich zu den Nebenmaxima.

## Auflösungsvermögen und Abbe-Kriterium

Das **Auflösungsvermögen** eines optischen Systems gibt an, wie nah zwei Punkte beieinander liegen dürfen, um noch als getrennt wahrgenommen zu werden.

Ernst Abbe zeigte, dass die minimale auflösbare Struktur durch Beugung begrenzt ist:
> **d_min = λ / (2 · NA)**

wobei **NA = n · sin α** die **numerische Apertur** des Objektivs ist (n = Brechungsindex des Mediums zwischen Probe und Objektiv, α = halber Öffnungswinkel).

**Konsequenzen:**
- Kleineres λ → bessere Auflösung (Elektronenmikroskop, Röntgen)
- Größere NA → bessere Auflösung (Ölimmersion: n_Öl ≈ 1,52 statt n_Luft = 1)
- Mit Licht (λ_min ≈ 400 nm) und maximaler NA ≈ 1,4 ergibt sich d_min ≈ 140 nm

## Kohärente Optik und klinische Anwendungen

**Optische Kohärenztomographie (OCT):** Nutzt Niederkohärenz-Interferometrie. Ein Lichtstrahl wird in Referenz- und Messstrahl aufgeteilt. Konstruktive Interferenz tritt nur auf, wenn beide Strahlen die gleiche optische Weglänge zurückgelegt haben. Durch Variation der Referenzarmlänge lässt sich ein tiefenaufgelöstes Schnittbild erzeugen (axiale Auflösung ~10 µm, nicht durch Beugung begrenzt). Klinisch wichtig für: Augendiagnostik (Netzhautschichten, Makuladegeneration), Koronargefäß-Bildgebung, Dermatologie.

## Rechenbeispiele

**Beispiel 1 — Doppelspalt-Streifenabstand (Spektroskopie):**
λ = 550 nm (grün), d = 0,1 mm = 10⁻⁴ m, L = 2 m.
Δy = λ·L/d = 550×10⁻⁹ · 2 / 10⁻⁴ = 1,1×10⁻⁶ / 10⁻⁴ = **11 mm**.
Bei rotem Licht (λ = 700 nm): Δy = 700×10⁻⁹ · 2 / 10⁻⁴ = **14 mm** — breiteres Muster.

**Beispiel 2 — Auflösungsgrenze (Abbe) bei verschiedenen Mikroskop-Konfigurationen:**
Trockenobjektiv (NA = 0,95), grün (λ = 520 nm): d_min = 520/(2·0,95) = **274 nm**.
Ölimmersion (NA = 1,3), grün: d_min = 520/(2·1,3) = **200 nm**.
Ölimmersion, UV (λ = 350 nm): d_min = 350/(2·1,3) = **135 nm** — kleinste Bakterien noch auflösbar.

**Beispiel 3 — Einzelspalt: erstes Minimum:**
Spaltbreite b = 10 µm = 10⁻⁵ m, λ = 500 nm.
sin α = λ/b = 500×10⁻⁹ / 10⁻⁵ = 0,05 → α ≈ **2,87°**.
Zentralmaximum-Breite auf einem Schirm in L = 1 m: 2y = 2·L·tan α ≈ 2·1·0,05 = **100 mm** (10 cm).

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Auflösungsgrenze d_min ≈ λ/(2·NA), numerische Apertur NA, Beugungsbegrenzung, Vergrößerung vs. Auflösung, Mikroskop (Objektiv, Okular).

**Ergänzend vertiefend:** Auflösung Auge; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- "Was ist die Auflösungsgrenze eines Mikroskops mit NA = 1,3 bei λ = 520 nm?" → d_min = 520/(2·1,3) = 200 nm
- "Wie verbessert Ölimmersion die Mikroskop-Auflösung?" → Erhöht NA = n·sin α (n_Öl ≈ 1,52 > n_Luft = 1)
- "Welcher Gangunterschied bewirkt konstruktive Interferenz?" → Δ = n·λ (ganzzahliges Vielfaches)
- "Wie groß ist der Streifenabstand beim Doppelspalt?" → Δy = λ·L/d

**Typische Prüfungsfallen / Verwechslungen:**
- Konstruktiv = ganzzahliges Vielfaches (Δ = nλ, hell); Destruktiv = halbzahliges (Δ = (n+½)λ, dunkel)
- Beugung wird stärker (nicht schwächer) bei längerer Wellenlänge
- OCT nutzt Interferenz (nicht Beugung) für Tiefenauflösung — axiale Auflösung durch Kohärenzlänge begrenzt

**Prüfungsrelevante Zahlen/Fakten:**
- Sichtbares Licht: λ = 380 nm (violett) bis 780 nm (rot)
- Abbe-Limit: d_min = λ/(2·NA) ≈ 200 nm (Standard-Lichtmikroskop mit Ölimmersion)
- Ölimmersion: n_Öl ≈ 1,52 → NA bis ~1,4
- OCT: axiale Auflösung ~5–15 µm (nicht beugungsbegrenzt, sondern durch Kohärenzlänge)

---

## Zusammenfassung (ultrakompakt)

- **Interferenz**: konstruktiv wenn Δ = m·λ (m = 0, 1, 2…); destruktiv wenn Δ = (m+½)·λ
- **Doppelspalt (Young)**: Streifenabstand Δy = λ·L/d; wichtig für Wellenlängenbestimmung
- **Beugung**: Licht biegt sich um Hindernisse/durch Spalte; erfordert kohärentes, monochromatisches Licht
- **Abbe-Kriterium**: d_min = λ/(2·NA); Standard-Mikroskop: ~200–300 nm; Ölimmersion verbessert NA
- **Numerische Apertur**: NA = n·sin(θ); Ölimmersion (n=1,5) > Luft (n=1) → kleineres d_min
- **OCT**: Niederkohärenz-Interferometrie; axiale Auflösung ~10 µm → Netzhautschichten, Koronargefäße`,
      lernziele: [
        "Das sichtbare Spektrum mit Wellenlängenbereich (380–780 nm) benennen.",
        "Konstruktive und destruktive Interferenz mit Gangunterschieds-Bedingungen erläutern.",
        "Den Streifenabstand beim Doppelspaltexperiment mit Δy = λ·L/d berechnen.",
        "Das Abbe-Kriterium formulieren und die Faktoren für besseres Auflösungsvermögen benennen.",
        "Das Prinzip der OCT als klinische Anwendung der Wellenoptik beschreiben.",
      ],
      sections: [
        {
          heading: "Interferenz: konstruktiv und destruktiv",
          text: "Wenn zwei kohärente Lichtwellen (gleiche Frequenz, konstante Phasenbeziehung) überlagern, addieren sich ihre Amplituden. Bei gleichem Gangunterschied Δ = n·λ (ganzzahliges Vielfaches der Wellenlänge) verstärken sich die Wellen konstruktiv – es entsteht Helligkeit. Bei Δ = (n+½)·λ löschen sie sich destruktiv aus – es entsteht Dunkelheit. Interferenz ist ein einzigartiges Wellenmerkmal; Teilchen zeigen dieses Verhalten nicht. Beim Youngschen Doppelspaltexperiment erzeugt die Überlagerung der Wellen aus zwei Spalten ein Streifenmuster auf einem Schirm.",
          merksatz: "Konstruktive Interferenz: Δ = n·λ (hell); destruktive: Δ = (n+½)·λ (dunkel).",
        },
        {
          heading: "Beugung und Auflösungsgrenze",
          text: "Beugung tritt auf, wenn Licht an Strukturen in Größenordnung seiner Wellenlänge vorbeizieht. Am Einzelspalt entsteht durch Beugung ein charakteristisches Intensitätsmuster mit breitem Zentralmaximum und schwächeren Nebenmaxima. Für optische Instrumente bedeutet dies: Zwei Punkte können nur dann getrennt aufgelöst werden, wenn ihr Beugungsscheibchen nicht überlappen. Das Abbe-Kriterium d_min = λ/(2·NA) setzt die fundamentale Auflösungsgrenze. Bessere Auflösung erfordert kürzeres λ oder größere numerische Apertur.",
          merksatz:
            "d_min = λ/(2·NA) – kürzere Wellenlänge und größere Apertur verbessern die Auflösung.",
        },
        {
          heading: "Optische Kohärenztomographie (OCT)",
          text: "OCT ist ein bildgebendes Verfahren, das auf Niederkohärenz-Interferometrie basiert. Breitband-Licht (kurze Kohärenzlänge ~10 µm) wird durch einen Strahlteiler in einen Referenz- und einen Probenarm aufgeteilt. Interferenz tritt nur auf, wenn die optischen Weglängen beider Arme übereinstimmen. Durch Scannen der Referenzarmlänge erhält man ein tiefenaufgelöstes Bild (A-Scan). Seitliches Scannen ergibt ein 2D-Querschnittsbild (B-Scan). In der Augenheilkunde wird OCT routinemäßig zur Darstellung der Netzhautschichten genutzt.",
          merksatz:
            "OCT nutzt Interferenz von Niederkohärenz-Licht für hochaufgelöste Tiefenbilder (~10 µm).",
        },
      ],
      diagram: "em-spectrum",

      merksätze: [
        "Sichtbares Licht: λ = 380 nm (violett) bis 780 nm (rot).",
        "c = λ·f – Lichtgeschwindigkeit ist Produkt aus Wellenlänge und Frequenz.",
        "Konstruktive Interferenz: Gangunterschied Δ = n·λ (Wellenberge treffen aufeinander).",
        "Destruktive Interferenz: Gangunterschied Δ = (n+½)·λ (Berg trifft Tal).",
        "Doppelspalt-Streifenabstand: Δy = λ·L/d – größeres λ oder kleineres d → weiteres Muster.",
        "Beugung ist merklich, wenn Hindernisbreite ≈ Wellenlänge.",
        "Kurzwelliges Licht (violett) wird weniger gebeugt als langwelliges (rot).",
        "Abbe-Kriterium: d_min = λ/(2·NA) – fundamentales Auflösungslimit optischer Systeme.",
        "Numerische Apertur NA = n·sin α – Öl-Immersionsobjektive erhöhen NA auf ~1,4.",
        "OCT nutzt Niederkohärenz-Interferometrie für ~10 µm Tiefenauflösung am Auge.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Was ist das Abbe-Kriterium, und wie kann die Auflösung eines Lichtmikroskops verbessert werden?",
        answer:
          "Das Abbe-Kriterium (Ernst Abbe, 1873) gibt die fundamentale Auflösungsgrenze eines lichtoptischen Systems an. Es besagt, dass zwei benachbarte Punkte nur dann getrennt sichtbar sind, wenn ihr Abstand d_min größer als λ/(2·NA) ist, wobei λ die Wellenlänge des verwendeten Lichts und NA = n·sin α die numerische Apertur des Objektivs sind (n = Brechungsindex des Mediums, α = halber Öffnungswinkel des Objektivs). Diese Grenze ergibt sich aus dem Wellencharakter des Lichts: Das von einem Punktobjekt erzeugte Beugungsmuster (Airy-Scheibchen) überlappen, sobald zwei Punkte zu nah beieinander liegen. Die Auflösung kann auf drei Wegen verbessert werden: (1) Kürzere Wellenlänge: Durch Verwendung von UV-Licht (λ ≈ 250 nm statt 500 nm) kann d_min auf etwa 100 nm halbiert werden. Noch kleinere Wellenlängen (Röntgen, Elektronen) ermöglichen Nanometer-Auflösung. (2) Größere numerische Apertur: Ölimmersionsobjektive ersetzen Luft (n=1) durch Immersionsöl (n≈1,52) zwischen Probe und Objektiv, was NA bis ≈1,4 ermöglicht und d_min auf ~140 nm senkt. (3) Moderne Superresolution-Techniken (STED, STORM, PALM) umgehen die Abbe-Grenze durch nicht-lineare Effekte oder stochastische Einzelmolekül-Lokalisierung und erreichen Auflösungen von wenigen Nanometern. Im klinischen Alltag sind konfokale Laser-Scanning-Mikroskope (NA~1,4, λ~488 nm) Standard in Pathologie und Forschung.",
      },
      klinischerBezug:
        "OCT am Auge erreicht ~10 µm axiale Auflösung via Interferometrie – Standard für Makuladiagnostik, Glaukom und Netzhautödem.",
      selfTest: [
        {
          question:
            "Beim Youngschen Doppelspaltexperiment beträgt der Spaltabstand 0,5 mm, der Abstand zum Schirm 1,5 m und die Wellenlänge 500 nm. Welchen Abstand haben zwei benachbarte helle Streifen?",
          options: ["0,15 mm", "0,75 mm", "1,5 mm", "3,0 mm", "7,5 mm"],
          correctIndex: 2,
          explanation:
            "Der Streifenabstand beim Doppelspalt ergibt sich aus Δy = λ·L/d. Mit λ = 500·10⁻⁹ m, L = 1,5 m, d = 0,5·10⁻³ m: Δy = (500·10⁻⁹ · 1,5) / (0,5·10⁻³) = 750·10⁻⁹ / 5·10⁻⁴ = 1,5·10⁻³ m = 1,5 mm. Die Streifen liegen also 1,5 mm voneinander entfernt. Halbiert man d auf 0,25 mm, würde sich der Abstand verdoppeln auf 3,0 mm.",
          hints: [
            "Formel: Δy = λ·L/d – alle Größen in SI-Einheiten (Meter) einsetzen.",
            "Lasse auf Einheiten achten: λ in Metern (1 nm = 10⁻⁹ m), d in Metern.",
          ],
          tags: ["doppelspalt", "streifenabstand", "interferenz"],
          difficulty: 2,
        },
        {
          question:
            "Ein Lichtmikroskop mit Luft als Medium (n=1) hat ein Objektiv mit halbem Öffnungswinkel α=70°. Wie groß ist die numerische Apertur ungefähr?",
          options: ["NA = 0,34", "NA = 0,50", "NA = 0,77", "NA = 0,94", "NA = 1,41"],
          correctIndex: 3,
          explanation:
            "Die numerische Apertur ist NA = n·sin α. Mit n = 1 (Luft) und α = 70°: NA = 1·sin 70° = 1·0,940 = 0,94. Dies ist ein realistischer Wert für ein Trockenobjektiv hoher Qualität. Mit Ölimmersion (n ≈ 1,52) und gleichem Winkel wäre NA = 1,52·0,940 ≈ 1,43. Werte über NA = 1,5 sind technisch kaum erreichbar. Höhere NA bedeutet direktes Ergebnis: bessere Auflösung nach dem Abbe-Kriterium d_min = λ/(2·NA).",
          hints: [
            "NA = n·sin α – bei Luft ist n = 1, also NA = sin α.",
            "sin 70° ≈ 0,94 – du kannst sin 60° = 0,866 und sin 90° = 1 als Grenzwerte nutzen.",
          ],
          tags: ["numerische-apertur", "mikroskop", "auflösung"],
          difficulty: 2,
        },
        {
          question:
            "Ein Mikroskop arbeitet mit grünem Licht (λ = 520 nm) und einer numerischen Apertur von 1,3. Was ist die theoretische Auflösungsgrenze nach Abbe?",
          options: ["200 nm", "400 nm", "260 nm", "100 nm", "520 nm"],
          correctIndex: 0,
          explanation:
            "Nach Abbe gilt d_min = λ/(2·NA) = 520 nm / (2·1,3) = 520/2,6 = 200 nm. Das bedeutet: Zwei Punkte mit weniger als 200 nm Abstand können mit diesem Mikroskop nicht mehr getrennt aufgelöst werden. Um die Auflösung weiter zu verbessern, könnte man kürzere Wellenlängen (z. B. UV mit 350 nm) nutzen oder die NA erhöhen. Mit λ=350 nm und NA=1,4 ergäbe sich d_min = 350/(2·1,4) = 125 nm.",
          hints: [
            "Formel direkt anwenden: d_min = λ/(2·NA) – Einheiten konsistent halten (nm).",
            "NA = 1,3 ist ein realistischer Wert für Ölimmersionsobjektive.",
          ],
          tags: ["abbe-kriterium", "auflösungsgrenze", "mikroskop"],
          difficulty: 2,
        },
        {
          question:
            "Wie verändert sich das Beugungsmuster am Doppelspalt, wenn die Wellenlänge des Lichts verdoppelt wird (bei konstantem Spaltabstand und Schirmabstand)?",
          options: [
            "Die Streifen werden halbiert",
            "Die Streifen verschwinden ganz",
            "Der Streifenabstand verdoppelt sich",
            "Der Streifenabstand halbiert sich",
            "Das Muster bleibt unverändert",
          ],
          correctIndex: 2,
          explanation:
            "Der Streifenabstand beim Doppelspalt ist Δy = λ·L/d. Da L und d konstant bleiben, ist Δy direkt proportional zu λ. Verdoppelt man λ, verdoppelt sich auch Δy. Beispiel: Wechsel von grünem Licht (λ=520 nm) zu infrarotem Licht (λ=1040 nm) verdoppelt die Streifenbreite. Dieses Prinzip wird in der Spektroskopie genutzt: Durch Messung des Streifenabstands kann man λ bestimmen. Bei blauem Licht (λ≈450 nm) ist Δy kleiner als bei rotem Licht (λ≈700 nm) – blaues Licht ergibt engere Streifen.",
          hints: [
            "Δy = λ·L/d – wie ändert sich Δy, wenn λ verdoppelt wird?",
            "Δy ist direkt proportional zu λ bei konstantem L und d.",
          ],
          tags: ["doppelspalt", "interferenz", "wellenlänge"],
          difficulty: 2,
        },
        {
          question: "Was ist das Prinzip der optischen Kohärenztomographie (OCT)?",
          options: [
            "Röntgenstrahlen werden durch das Auge geschickt und gebeugt",
            "Ultraschall reflektiert an Gewebegrenzen und liefert Tiefenbilder",
            "Fluoreszenzfarbstoffe absorbieren und emittieren Licht für Bilder",
            "Niederkohärentes Licht interferiert nur bei identischer optischer Weglänge im Referenz- und Probenarm",
            "Infrarotes Licht wird von Netzhautpigmenten absorbiert und thermisch detektiert",
          ],
          correctIndex: 3,
          explanation:
            "OCT basiert auf Niederkohärenz-Interferometrie (auch Weißlichtinterferometrie genannt). Breitbandiges Licht mit kurzer Kohärenzlänge (typisch ~10 µm) wird durch einen Strahlteiler in zwei Arme geleitet: den Referenzarm (bekannte Länge) und den Probenarm (ins Gewebe). Interferenz tritt nur dann auf, wenn die optischen Weglängen beider Arme innerhalb der Kohärenzlänge übereinstimmen. Durch Variation der Referenzarmlänge lässt sich ein tiefenaufgelöstes Rückstreuprofil des Gewebes aufnehmen. Die axiale Auflösung ist durch die Kohärenzlänge (nicht durch Beugung) limitiert und beträgt typisch 5–15 µm. OCT ist Standard in der Augenheilkunde für Netzhautschichtanalysen.",
          hints: [
            'OCT = Optische Kohärenztomographie – "Kohärenz" ist der Schlüsselbegriff.',
            "Das Prinzip ähnelt dem Ultraschall-Echo, aber mit Licht statt Schall.",
          ],
          tags: ["oct", "kohärenz", "interferometrie"],
          difficulty: 3,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK ph-6-03: Optische Instrumente
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "ph-6-03",
      diagram: "lens-imaging",
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
      content: `## Einleitung

Ohne Lupe kann ein Dermatologe keine Melanommerkmale (ABCDE) erkennen. Ohne Mikroskop keine Histologie, keine Bakterienidentifikation. Ohne Endoskop keine minimalinvasive Chirurgie. Optische Instrumente erweitern das Sehen — sie alle kombinieren Linsen nach denselben physikalischen Gesetzen. Die entscheidenden Konzepte: Vergrößerung, Auflösungsgrenze und numerische Apertur. Für den MedAT sind Lupen-/Mikroskop-/Teleskopvergrößerung, Auflösungsgrenze und klinische Anwendungen prüfungsrelevant.

## Lupe

**SVG-Hinweis (Lupe, Mikroskop, Vergrößerung):** Ein Schema mit Lupenvergrößerung M = S/f, Mikroskop M_ges = M_ob×M_ok und Auflösungsgrenze unterstützt die Prüfungsvorbereitung. *Typ: Übersicht / Schema.*

Die Lupe ist die einfachste Sehhilfe – eine einzelne Sammellinse. Das menschliche Auge kann einen Gegenstand bei der **deutlichen Sehweite** (konventionell S = 25 cm) scharf sehen. Bringt man eine Sammellinse mit Brennweite f vor das Auge und platziert das Objekt nahe am Brennpunkt, entsteht ein aufrechtes, vergrößertes virtuelles Bild bei der deutlichen Sehweite.

**Vergrößerung der Lupe:**
> **M = S / f** (S = 25 cm, f in cm)

Beispiel: Lupe mit f = 5 cm → M = 25/5 = 5-fache Vergrößerung.

> **Merke:** Lupe = Sammellinse, die das Objekt näher als die deutliche Sehweite bringt und es virtuell, aufrecht und vergrößert zeigt.

**Klinische Lupen:**
- **Dermatoskop** (f ≈ 4 cm, M ≈ 6×): Hautläsionen nach ABCDE-Kriterien beurteilen
- **Operationslupe** (2–6×): mikrochirurgische Eingriffe (Gefäß-, Nervennaht)
- **Kopflupe mit Beleuchtung**: HNO, Zahnheilkunde

## Lichtmikroskop

Das Lichtmikroskop besteht aus zwei Linsensystemen:
- **Objektiv** (dem Objekt zugewandt, kurze Brennweite f_ob): erzeugt ein vergrößertes, reelles Zwischenbild
- **Okular** (dem Auge zugewandt, mittlere Brennweite f_ok): wirkt als Lupe, die das Zwischenbild betrachtet

**Gesamtvergrößerung:**
> **M_ges = M_ob × M_ok**

wobei M_ob = Bildröhrenlänge / f_ob und M_ok = S / f_ok (S = 25 cm).

Typische Werte: Objektiv 40x, Okular 10x → Gesamtvergrößerung 400x.

Das **theoretische Auflösungslimit** (Abbe) beträgt bei Lichtmikroskopen ca. **200 nm** mit sichtbarem Licht und Ölimmersionsobjektiv (NA~1,4). Moderne STED- oder STORM-Mikroskope überwinden diese Grenze durch Spezialtechniken.

**Konfokales Mikroskop:** Ein Laserstrahl fokussiert auf einen Punkt, eine Lochblende (Pinhole) vor dem Detektor blendet Streulicht aus anderen Ebenen aus → optische Schnittbilder, 3D-Rekonstruktion möglich.

## Teleskop

Teleskope (Fernrohre) sind für ferne Objekte konzipiert. Im einfachsten Fall (Keplersches Fernrohr) sammelt ein Objektiv mit langer Brennweite f_ob paralleles Licht und erzeugt ein reelles Bild im hinteren Brennpunkt. Das Okular betrachtet dieses Bild als Lupe.

**Vergrößerung:**
> **M = f_ob / f_ok**

Beispiel: f_ob = 1000 mm, f_ok = 25 mm → M = 40x. Das erzeugte Bild ist umgekehrt; für aufrechte Bilder (terrestrisches Fernrohr) wird ein Umkehrsystem eingebaut.

## Endoskop

Das Endoskop ist das wichtigste minimal-invasive optische Instrument in der Medizin. Es kombiniert:

1. **Lichtleitung**: Glasfaserbündel leiten weißes LED- oder Xenon-Licht (Kaltlicht) zum Untersuchungsort ohne thermische Gewebelast.
2. **Bildübertragung**: Früher durch kohärente Glasfaserbündel (Faseroptik), heute fast ausschließlich durch CCD/CMOS-Chip am distalen Ende (Videoendoskop).
3. **Arbeitskanal**: Für Biopsiezangen, Polypektomieschlingen, Laser.
4. **Spülung und Absaugung**: Für klares Sichtfeld.

Das distale Ende ist biegbar (Steuerdraht-Mechanismus), sodass Windungen im Gastrointestinaltrakt oder Bronchialbaum navigiert werden können. Wichtige klinische Einsatzgebiete:
- **Gastroskopie**: Speiseröhre, Magen, Duodenum
- **Koloskopie**: Dickdarm (Polyp-Screening)
- **Bronchoskopie**: Bronchien (Biopsie, Lavage)
- **Laparoskopie**: Bauchhöhle (minimalinvasive Chirurgie)
- **Zystoskopie**: Blase

## Ophthalmoskop und Spaltlampe

Das **direkte Ophthalmoskop** (Augenspiegel) projiziert Licht durch die Pupille auf die Netzhaut. Eine Linsenoptik ermöglicht den Blick auf Papille, Makulabereich und Gefäße. Klinisch wichtig für Diagnose von Glaukomschäden, Papillenödem, diabetische Retinopathie.

Die **Spaltlampe** ist ein spezielles Auflichtmikroskop mit Spaltbeleuchtung. Sie beleuchtet das Auge mit einem feinen Lichtspalt und erlaubt Schnittdarstellungen von Hornhaut, Linse, Glaskörper. Kombination mit Kontaktlinsen ermöglicht Hintergrunduntersuchung.

## Elektronenmikroskop

Das **Transmissions-Elektronenmikroskop (TEM)** nutzt Elektronen statt Licht. De-Broglie-Wellenlänge der Elektronen (bei 100 kV: λ ≈ 0,004 nm) ist ~100.000× kleiner als Licht → Auflösung bis ~0,1 nm (Atomniveau). Das **Raster-Elektronenmikroskop (REM/SEM)** rastert die Oberfläche ab und liefert dreidimensionale Bilder mit großer Tiefenschärfe. Medizinisch: Virusdiagnostik (Negativkontrastierung), Gewebeultrastruktur, Biomaterialforschung.

> **Merke:** Elektronenmikroskopie überwindet die Abbe-Grenze durch extrem kurze De-Broglie-Wellenlänge der Elektronen.

## Rechenbeispiele

**Beispiel 1 — Lupen-Vergrößerung für dermatologische Untersuchung:**
Dermatoskop mit f = 4 cm. M = S/f = 25/4 = **6,25-fach**.
Lupe mit f = 2,5 cm: M = 25/2,5 = **10-fach** — Standard für Hautläsionen (ABCDE-Kriterien).

**Beispiel 2 — Mikroskop: Vergrößerung und Auflösungsgrenze:**
Objektiv 40× (f_ob = 4 mm), Okular 10× (f_ok = 25 mm). M_ges = 40 × 10 = **400×**.
Ölimmersion 100× (NA = 1,25), λ = 500 nm: d_min = λ/(2·NA) = 500/(2·1,25) = **200 nm**.
Vergrößerung über M_leer = 500·NA/M_ges = 500·1,25/1000 = 0,625 (Nyquist: M_leer < 1 → sinnvolle Vergrößerung).

**Beispiel 3 — Teleskop: Mondkrater beobachten:**
f_ob = 1200 mm, f_ok = 30 mm → M = 1200/30 = **40-fach**.
Monddurchmesser: 3474 km, Abstand 384.400 km → Winkeldurchmesser ≈ 0,52°.
Durch Teleskop: 0,52° × 40 = 20,8° → Mond füllt ~40 % des Gesichtsfelds. Kleinster auflösbarer Krater bei Auflösung 2" (Seeing): 384.400 · tan(2/3600°) ≈ **3,7 km**.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Linse (Brennweite f, Brechkraft D = 1/f in dpt), Lupe (Vergrößerung M = 25 cm/f), Abbildungsgleichung 1/f = 1/g + 1/b, reelles/virtuelles Bild.

**Ergänzend vertiefend:** Linsenfehler; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- "Welche Vergrößerung hat eine Lupe mit f = 5 cm?" → M = 25/5 = 5-fach
- "Wie berechnet sich die Gesamtvergrößerung eines Mikroskops?" → M_ges = M_Objektiv × M_Okular
- "Welche Vergrößerung hat ein Teleskop mit f_ob = 1000 mm und f_ok = 25 mm?" → M = 1000/25 = 40-fach
- "Wie wird Licht im Endoskop weitergeleitet?" → Totalreflexion in Glasfasern (Kaltlicht)

**Typische Prüfungsfallen / Verwechslungen:**
- Lupe: M = S/f mit S = 25 cm (deutliche Sehweite); f in cm einsetzen
- Mikroskop: M_ges = M_ob × M_ok (Produkt, nicht Summe!)
- Teleskop: M = f_ob/f_ok — langes Objektiv, kurzes Okular → hohe Vergrößerung
- Konfokalmikroskop: Pinhole blockt Out-of-focus-Licht → optische Schnittbilder (verbessert nicht die Vergrößerung)

**Prüfungsrelevante Zahlen/Fakten:**
- Deutliche Sehweite: S = 25 cm (Konvention für Vergrößerungsformeln)
- Auflösungsgrenze Lichtmikroskop: ~200 nm (Abbe-Limit mit Ölimmersion)
- Auflösungsgrenze Elektronenmikroskop: ~0,1 nm (De-Broglie-Wellenlänge bei 100 kV)
- Typische Vergrößerungen: Dermatoskop ~10×; Histologie 40–400×; TEM bis 500.000×

---

## Zusammenfassung (ultrakompakt)

- **Lupe**: M = S/f (S = 25 cm); f = 2,5 cm → 10-fache Vergrößerung; aufrechtes virtuelles Bild
- **Lichtmikroskop**: M_ges = M_Objektiv × M_Okular; d_min = λ/(2·NA); Ölimmersion verbessert NA auf ~1,3
- **Auflösungsgrenze**: Standard-Mikroskop ~200–300 nm; Elektronenmikroskop ~0,1 nm (De-Broglie-Wellenlänge)
- **Teleskop**: M = f_Objektiv/f_Okular; großes Objektiv → bessere Auflösung und Lichtstärke
- **Endoskop**: Totalreflexion in Glasfasern leitet Licht und Bild; starr (Laparoskop) oder flexibel
- **Klinisch**: Dermatoskop ~10×; Histologie-Mikroskop 40–400×; Elektronenmikroskop für Viren und Ultrastruktur`,
      lernziele: [
        "Die Vergrößerungsformel der Lupe M = S/f anwenden.",
        "Das Prinzip des Lichtmikroskops (Objektiv × Okular) und das Auflösungslimit erläutern.",
        "Die Vergrößerungsformel des Teleskops M = f_ob/f_ok anwenden.",
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
        "Teleskop-Vergrößerung: M = f_Objektiv / f_Okular.",
        "Endoskop: Glasfaser-Lichtleitung (Kaltlicht) + CCD-Sensor für Bild.",
        "Videoendoskop: CCD-Chip am distalen Ende – kein optisches Faserbündel für das Bild nötig.",
        "Konfokales Mikroskop: Pinhole-Blende eliminiert Streulicht → optische Schnitte.",
        "Spaltlampe: Beleuchtungs-Mikroskop für Hornhaut, Linse, Glaskörper-Diagnostik.",
        "Ophthalmoskop: direkte Netzhautbetrachtung durch die Pupille.",
        "Laparoskopie = minimal-invasive Bauchhöhlenchirurgie via Endoskop und Trokare.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie den Aufbau und die optischen Prinzipien des Lichtmikroskops, und beschreiben Sie, wie sich die Gesamtvergrößerung ergibt.",
        answer:
          "Das Lichtmikroskop ist ein zweistufiges optisches System. Die erste Stufe ist das Objektiv: eine Sammellinse (oder ein Linsensystem) mit sehr kurzer Brennweite (typisch 2–20 mm), die nahe an das Präparat herangeführt wird (Gegenstandsweite etwas größer als f_ob). Es erzeugt ein reelles, umgekehrtes und stark vergrößertes Zwischenbild in der Bildröhre des Mikroskops, üblicherweise 160 mm (Normtubuslänge) oder unendlich (Unendlich-Optik) vom Objekt entfernt. Die Vergrößerung des Objektivs ergibt sich bei Endlichoptik aus M_ob = Tubuslänge/f_ob; bei Unendlichoptik wird die Vergrößerung durch das nachgeschaltete Tubuslinsen-Okular-System definiert. Die zweite Stufe ist das Okular: eine Sammellinse (Brennweite typisch 20–25 mm), die als Lupe für das Zwischenbild fungiert. Das Okular erzeugt ein virtuelles aufrechtes Bild, das das Auge bei der deutlichen Sehweite (25 cm) wahrnimmt. Die Okularvergrößerung ist M_ok = S/f_ok = 25 cm/f_ok. Die Gesamtvergrößerung ist das Produkt: M_ges = M_ob × M_ok. Beispiel: 40x-Objektiv × 10x-Okular = 400x. Das theoretische Auflösungslimit wird durch das Abbe-Kriterium bestimmt: d_min = λ/(2·NA). Mit Ölimmersionsobjektiv (NA~1,4) und grünem Licht (λ~520 nm) ergibt sich d_min ≈ 185 nm. Modernere Techniken wie STED-Mikroskopie überwinden dieses Limit durch stimulierte Emission und erreichen Auflösungen von 20–50 nm.",
      },
      klinischerBezug:
        "Endoskopie (Gastroskopie, Koloskopie, Bronchoskopie), Spaltlampe für Augendiagnostik, konfokale Mikroskopie in der Histopathologie.",
      selfTest: [
        {
          question:
            "Eine Lupe hat eine Brennweite von 5 cm. Die deutliche Sehweite beträgt 25 cm. Welche Vergrößerung bietet die Lupe?",
          options: ["2-fach", "5-fach", "10-fach", "25-fach", "0,2-fach"],
          correctIndex: 1,
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
            "M=1000x, d_min ≈ 185 nm",
            "M=1000x, d_min ≈ 370 nm",
            "M=100x, d_min ≈ 185 nm",
            "M=1000x, d_min ≈ 500 nm",
          ],
          correctIndex: 1,
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
            "Ein Teleskop hat ein Objektiv mit f_ob = 800 mm und ein Okular mit f_ok = 20 mm. Welche Vergrößerung ergibt sich?",
          options: ["16-fach", "40-fach", "80-fach", "400-fach", "820-fach"],
          correctIndex: 1,
          explanation:
            "Die Vergrößerung eines Keplerteleskops berechnet sich als M = f_ob/f_ok = 800 mm/20 mm = 40. Dabei ist f_ob die Brennweite des Objektivs (lang) und f_ok die Brennweite des Okulars (kurz). Für ein Keplersches Fernrohr gilt: Das erzeugte Bild ist umgekehrt. Galileische Fernrohre verwenden eine Zerstreuungslinse als Okular und erzeugen aufrechte Bilder, sind aber durch kleineres Gesichtsfeld limitiert. Die Körperlänge des Teleskops ist ungefähr f_ob + f_ok = 820 mm.",
          hints: [
            "M = f_Objektiv / f_Okular – kurze Brennweite im Okular, lange im Objektiv.",
            "800/20 = ?",
          ],
          tags: ["teleskop", "vergrößerung", "brennweite"],
          difficulty: 1,
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
      diagram: "lens-imaging",
      title: "Optik des Auges und Sehfehler",
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
      content: `## Einleitung

Weltweit sind Milliarden Menschen kurzsichtig — Myopie ist die häufigste Fehlsichtigkeit. Ein 20-Jähriger kann seinen Fokus um 10 Dioptrien verändern (Akkommodation); ein 50-Jähriger kaum noch 2 Dioptrien (Presbyopie). Das Auge ist ein biologisches Linsensystem: Hornhaut (~43 dpt) und Linse (~20 dpt) bündeln Licht auf der Fovea. Wenn Brechkraft und Augenlänge nicht passen, entsteht Fehlsichtigkeit — die mit Linsen oder LASIK korrigierbar ist. Für den MedAT sind Akkommodation, Myopie/Hyperopie/Presbyopie/Astigmatismus, Korrektionslinsen und Dioptrienrechnung prüfungsrelevant.

## Anatomie und Optik des normalen Auges

**SVG-Hinweis (Auge, Akkommodation, Fehlsichtigkeit):** Ein Schema mit Brechkraft ~60 dpt, Myopie/Hyperopie/Presbyopie und Korrektionslinsen unterstützt die Prüfungsvorbereitung. *Typ: Übersicht / Schema.*

Das Auge besteht optisch aus mehreren brechenden Flächen:
- **Hornhaut (Kornea)**: liefert etwa 2/3 der gesamten Brechkraft (~43 dpt). Ihre stark gewölbte Vorderfläche ist der Hauptbrechungsort.
- **Kammerwasser**: füllt die Vorderkammer
- **Linse**: liefert das verbleibende 1/3 (~20 dpt in Ruhe) und ist die einzige veränderliche Brechkraft.
- **Glaskörper**: füllt den Hauptraum des Augapfels

Die **Gesamtbrechkraft** des entspannten Auges beträgt ca. **60 Dioptrien**, bei maximaler Akkommodation ca. 70 dpt.

Der **Augapfeldurchmesser** (Hornhaut → Netzhaut = optische Achse) beträgt beim Erwachsenen ca. 24 mm.

## Akkommodation

**Akkommodation** ist die Fähigkeit des Auges, durch Änderung der Linsenkrümmung auf unterschiedliche Entfernungen scharf zu stellen.

**Mechanismus:**
1. Ferne Objekte: Ziliarmuskel **entspannt** → Zonulafasern spannen die Linse flach → geringe Brechkraft (~60 dpt) → Fernpunkt liegt im Unendlichen.
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
Bei −6 dpt: t = 6 · 36 / 3 = **72 µm**. Hornhautdicke ~550 µm, mind. 250 µm Restdicke → max. Ablation ~150 µm → ca. −12 dpt Obergrenze.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Auge (Akkommodation, Nahpunkt), Myopie (Auge zu lang → Zerstreuungslinse, negativ D), Hyperopie (Sammellinse), Presbyopie (Alterssichtigkeit), Brechkraft in dpt.

**Ergänzend vertiefend:** Astigmatismus; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- "Welche Brille korrigiert Myopie?" → Zerstreuungslinse (negatives D); Myopie = Auge zu lang
- "Was passiert beim Akkommodieren auf Nähe mit dem Ziliarmuskel?" → Kontrahiert → Linse wölbt sich → Brechkraft steigt
- "Welche Korrektur benötigt Presbyopie?" → Sammellinse (+dpt) für Nahbereich (Lesebrille)
- "Fernpunkt eines Patienten liegt bei 50 cm — welche Brillenstärke?" → D = −1/0,5 m = −2,0 dpt

**Typische Prüfungsfallen / Verwechslungen:**
- Myopie: Auge zu LANG (zu stark brechend) → Zerstreuungslinse (−dpt)
- Hyperopie: Auge zu KURZ (zu schwach brechend) → Sammellinse (+dpt)
- Presbyopie ≠ Hyperopie: gleiche Korrektur (Lesebrille +dpt), aber unterschiedliche Ursache (Elastizitätsverlust vs. kurzes Auge)
- Akkommodation: Ziliarmuskel KONTRAHIERT → Linse wölbt sich (nicht flacher!)

**Prüfungsrelevante Zahlen/Fakten:**
- Gesamtbrechkraft Auge: ~60 dpt (Hornhaut ~43 dpt + Linse ~17–27 dpt variabel)
- Akkommodationsbreite: Jugendliche ~10 dpt; ab 50 Jahren nur noch ~2 dpt
- Normaler IOP: 10–21 mmHg; Glaukom oft >21 mmHg
- LASIK: Excimerlaser λ = 193 nm; Korrekturbereiche −10 bis +6 dpt
- Nahpunkt: ~10 cm (20-jährig) → >100 cm (60-jährig, Presbyopie)

---

## Zusammenfassung (ultrakompakt)

- **Brechkraft Auge**: ~60 dpt gesamt; Hornhaut ~43 dpt (fix), Linse ~17–20 dpt (variabel durch Akkommodation)
- **Akkommodation**: Ziliarmuskel spannt → Zonulafasern locker → Linse wölbt sich → f sinkt → Nahsicht
- **Myopie** (Kurzsichtigkeit): Auge zu lang / zu stark brechend → Fokus vor Retina → Zerstreuungslinse (−dpt)
- **Hyperopie** (Weitsichtigkeit): Auge zu kurz / schwach brechend → Fokus hinter Retina → Sammellinse (+dpt)
- **Presbyopie**: Elastizitätsverlust der Linse ab ~40 Jahren → Nahpunkt rückt → Lesebrille (+dpt)
- **Astigmatismus**: unregelmäßige Hornhautkrümmung → Zylinderlinse zur Korrektur
- **LASIK**: Hornhautabtrag mit Excimerlaser; Munnerlyn: t = D·d²/3; max. ~−12 dpt korrigierbar`,
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
          text: "Der Ziliarmuskel umgibt die Augenlinse ringförmig. Beim Entspannen kontrahiert er ringförmig und lockert die Zonulafasern – die Linse wölbt sich durch ihre Eigenelastizität und erhöht die Brechkraft (Nahsicht). Beim Anspannen (Ferne) vergrößert der Ziliarmuskel seinen Durchmesser, die Zonulafasern ziehen die Linse flach. Die Akkommodationsbreite nimmt mit dem Alter ab, da die Linse an Elastizität verliert (Presbyopie). Der Nahpunkt rückt dann in die Ferne, Lesebrille wird nötig.",
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
          text: "LASIK verändert dauerhaft die Hornhautkrümmung durch Excimer-Laser-Photoablation. Für Myopie wird die Hornhautmitte abgetragen (Abflachung), für Hyperopie die Peripherie. Das Glaukom schädigt den Sehnerv durch erhöhten Augeninnendruck (IOP >21 mmHg). Diagnostik: Applanationstonometrie misst IOP; OCT quantifiziert die peripapilläre Nervenfaserschichtdicke; Gesichtsfelduntersuchung erfasst Skotome. Therapie: drucksenkende Augentropfen, Lasertrabekuloplastik oder operative Fistulierung.",
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
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie die Physik der Myopie und Hyperopie, und begründen Sie physikalisch, welche Korrekturlinsen jeweils eingesetzt werden.",
        answer:
          "Das emmetrope (normalsichtige) Auge fokussiert parallele Strahlen aus dem Unendlichen bei entspanntem Ziliarmuskel genau auf der Netzhaut (Fovea centralis). Der Fernpunkt liegt im Unendlichen. Bei der Myopie (Kurzsichtigkeit) ist der Augapfel axial zu lang (häufigste Form: ~1 mm mehr Länge entspricht ca. –3 dpt Myopie) oder die brechenden Medien zu stark. Parallele Strahlen aus der Ferne fokussieren deshalb vor der Netzhaut – das Bild auf der Netzhaut ist unscharf (Zerstreuungsscheibchen). Der Fernpunkt rückt in eine endliche Entfernung; beispielsweise hat ein –3 dpt Auge einen Fernpunkt bei 33 cm. Nahe Objekte können durch Akkommodation scharf gestellt werden. Zur Korrektur wird eine Zerstreuungslinse (negative Brechkraft, D < 0) verwendet. Sie macht das parallele Licht aus der Ferne leicht divergent, sodass es vom Auge so gebündelt wird, als käme es aus dem Fernpunkt des myopen Auges – das Licht wird dann auf der Netzhaut fokussiert. Die Stärke der Zerstreuungslinse in Dioptrien entspricht dem negativen Kehrwert der Fernpunktdistanz (z. B. Fernpunkt 50 cm → –2,0 dpt). Bei der Hyperopie (Weitsichtigkeit) ist der Augapfel zu kurz oder die brechenden Medien zu schwach. Parallel einfallendes Licht würde hinter der Netzhaut fokussiert. Das Auge muss daher auch für ferne Objekte akkommodieren – was bei jungen Menschen noch möglich ist, aber zu Asthenopie (Augenmüdigkeit) führt. Für Nahsicht müssen hohe Akkommodationsreserven aufgebracht werden. Im Extremfall kann selbst maximale Akkommodation nicht ausreichen. Die Korrektur erfolgt mit einer Sammellinse (positive Brechkraft, D > 0). Diese bündelt das einfallende Licht bereits vor dem Eintritt ins Auge konvergent, sodass das Auge weniger Brechkraft aufbringen muss. Für Presbyopie (Altersweitsichtigkeit durch Linsenverhärtung) gilt das gleiche Korrekturprinzip für den Nahbereich – der Unterschied ist die Ursache: Hier ist nicht der Augapfel zu kurz, sondern die Linse kann nicht mehr akkommodieren.",
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
            "Nur Myopie",
            "Hyperopie und Astigmatismus kombiniert",
            "Nur Presbyopie",
            "Myopie und Astigmatismus kombiniert",
            "Nur Astigmatismus",
          ],
          correctIndex: 1,
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
            "Ihr Nahpunkt liegt ohnehin nahe, sodass sie ohne Brille noch lesen können, auch wenn die Akkommodation nachlässt",
            "Myope akkommodieren generell stärker als Emmetrope",
            "Kurzsichtige haben einen größeren Augeninnendruck, der die Linse flexibler hält",
            "Myopie schützt vor Linsenverhärtung durch bessere Linsenernährung",
          ],
          correctIndex: 1,
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
            "Eine asymmetrische Hornhautkrümmung, bei der verschiedene Meridiane unterschiedliche Brechkraft haben – Korrektur durch Zylinderlinse",
            "Eine verhärtete Linse, die eine Sammellinse als Lesebrille erfordert",
            "Eine zu kleine Pupille, die mit einer Prismenlinie korrigiert wird",
            "Ein Sehnerv-Defizit, das mit einer Bifokalgläser behandelt wird",
          ],
          correctIndex: 1,
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
