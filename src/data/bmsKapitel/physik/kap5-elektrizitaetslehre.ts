import type { Kapitel } from '../types';

export const physKap5: Kapitel = {
  id: 'phys-kap5',
  title: 'Elektrizitätslehre',
  subject: 'physik',
  icon: '⚡',
  estimatedTime: '60 min',
  unterkapitel: [
    {
      id: 'ph-5-01',
      diagram: 'circuit',
      title: 'Elektrische Ladung, Feld und Coulomb-Gesetz',
      content: `## Elektrische Ladung

Elektrische Ladung ist eine fundamentale, unveränderliche Eigenschaft der Materie. Es gibt genau zwei Arten: **positive Ladung** (getragen von Protonen) und **negative Ladung** (getragen von Elektronen). Das Grundprinzip der Elektrostatik lautet: Gleichnamige Ladungen stoßen sich ab, ungleichnamige Ladungen ziehen sich an.

Die kleinste frei vorkommende Ladung ist die **Elementarladung** e = 1,602 × 10⁻¹⁹ C. Alle beobachtbaren Ladungen sind ganzzahlige Vielfache davon — dieses Prinzip nennt man **Ladungsquantisierung**. Die SI-Einheit der Ladung ist das **Coulomb (C)**; 1 C entspricht der Ladung von ca. 6,24 × 10¹⁸ Elektronen. Das **Ladungserhaltungsgesetz** besagt: In einem abgeschlossenen System bleibt die Gesamtladung konstant. Ladung kann weder erzeugt noch vernichtet, sondern nur getrennt oder übertragen werden.

Körper werden durch **Reibung** (Triboelektrizität), **Influenz** (Ladungsverschiebung ohne Kontakt) oder **Kontakt** mit geladenen Körpern elektrisiert. Bei der Influenz wird ein leitender Körper in ein externes Feld gebracht; freie Elektronen verschieben sich, sodass eine Seite negativ und die andere positiv wird — ohne dass Ladung übertragen wird.

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

**Äquipotentialflächen** (Flächen gleichen Potentials) stehen immer senkrecht auf den Feldlinien. Entlang einer Äquipotentialfläche ist keine Arbeit zu verrichten. Biologische Zellmembranen sind Regionen mit steilem Potentialgradienten: das Ruhemembranpotential beträgt ca. −70 mV (innen negativ). Über eine Membrandicke von ~7 nm ergibt das ein elektrisches Feld von ~10⁷ V/m — vergleichbar mit dem Durchschlagsfeld von Luft.`,

      lernziele: [
        'Das Coulombsche Gesetz anwenden und die Kraftrichtung zwischen Ladungen bestimmen',
        'Das elektrische Feld als Kraftfeld beschreiben und Feldlinienbilder interpretieren',
        'Den Zusammenhang zwischen elektrischem Feld, Potential und Spannung erklären',
        'Die biologische Relevanz elektrostatischer Kräfte auf molekularer Ebene begründen',
        'Die Analogie und die Unterschiede zwischen Coulomb-Kraft und Gravitationskraft benennen',
      ],
      sections: [
        {
          heading: 'Ladung und Coulomb-Gesetz',
          text: 'Elektrische Ladung ist quantisiert (Vielfache von e = 1,602 × 10⁻¹⁹ C) und bleibt in abgeschlossenen Systemen erhalten. Das Coulombsche Gesetz F = k·|q₁·q₂|/r² beschreibt die elektrostatische Kraft zwischen Punktladungen. In Medien (z. B. Wasser, εᵣ ≈ 80) wird die Kraft drastisch reduziert, was die Löslichkeit von Ionen ermöglicht. Die Coulombkraft ist ca. 10³⁶-mal stärker als die Gravitation und dominiert daher alle chemischen und biologischen Prozesse.',
          merksatz: 'Gleichnamige Ladungen stoßen sich ab, ungleichnamige ziehen sich an — F = k·q₁·q₂/r². Im Medium: F reduziert sich um Faktor εᵣ.',
        },
        {
          heading: 'Elektrisches Feld und Potential',
          text: 'Das elektrische Feld E = F/q₀ gibt die Kraft pro Probeladung an. Feldlinien laufen von + nach −, stehen senkrecht auf Leitern. Das elektrische Potential φ = E_pot/q ist die potentielle Energie pro Ladung. Die Spannung U = φ_A − φ_B treibt Ladungsfluss an. Das Membranpotential (−70 mV über 7 nm) entspricht einem Feld von ~10⁷ V/m — einer enormen biologischen Feldstärke.',
          merksatz: 'E = U/d (Plattenkondensator). Äquipotentialflächen senkrecht auf Feldlinien. Leiterinneres: E = 0 (Faraday-Käfig).',
        },
        {
          heading: 'Biologische und medizinische Relevanz',
          text: 'Elektrostatische Kräfte halten Protein-Ligand-Komplexe zusammen, stabilisieren DNA-Doppelstränge (Phosphatrückgrat mit Gegenionen) und steuern Ionenkanäle. Die Gelelektrophorese trennt geladene Biomoleküle im homogenen Feld. Nervenimpulse entstehen durch spannungsgesteuerte Ionenkanäle, die auf das Membranpotential reagieren.',
          merksatz: 'Membranpotential: ca. −70 mV (innen negativ). Elektrisches Feld über der Membran: ~10⁷ V/m.',
        },
      ],
      merksätze: [
        'Elementarladung: e = 1,602 × 10⁻¹⁹ C — kleinste freie Ladungseinheit.',
        'Coulomb-Gesetz: F = k·|q₁·q₂|/r², k = 8,99 × 10⁹ N·m²/C².',
        'Ladungserhaltung: Gesamtladung eines abgeschlossenen Systems ist konstant.',
        'Elektrisches Feld: E = F/q₀ [V/m]; Feldlinien von + nach −.',
        'Plattenkondensator: homogenes Feld E = U/d.',
        'In Wasser (εᵣ ≈ 80): Coulombkraft 80-mal schwächer als im Vakuum.',
        'Membranpotential: −70 mV über 7 nm ergibt E ≈ 10⁷ V/m.',
        'Faraday-Käfig: Leiterinnen sind feldfrei; E = 0 im Innern.',
        'Potential φ [V = J/C]: potentielle Energie pro Ladungseinheit.',
        'Äquipotentialflächen stehen immer senkrecht auf Feldlinien.',
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: 'Erläutern Sie das Coulombsche Gesetz und seine Bedeutung für biologische Systeme. Gehen Sie dabei auf die Rolle des Mediums und den Vergleich zur Gravitationskraft ein.',
        answer: `Das Coulombsche Gesetz beschreibt die elektrostatische Kraft zwischen zwei ruhenden Punktladungen q₁ und q₂ im Abstand r: F = k·|q₁·q₂|/r², wobei k = 8,99 × 10⁹ N·m²/C². Die Kraft ist proportional zum Produkt der Ladungen und nimmt mit dem Quadrat des Abstands ab (inverses Quadratgesetz). Sie ist repulsiv bei gleichnamigen, attraktiv bei ungleichnamigen Ladungen.

Im Vergleich zur Gravitation (F = G·m₁·m₂/r²) ist die Coulombkraft um den Faktor ~10³⁶ stärker und kann beide Vorzeichen annehmen. Deshalb dominieren elektrostatische Wechselwirkungen alle chemischen und biologischen Prozesse auf molekularer Ebene: Ionenbindungen, Wasserstoffbrücken, Protein-Ligand-Wechselwirkungen und die Stabilisierung von DNA.

In einem Medium mit relativer Permittivität εᵣ gilt: F = k·|q₁·q₂|/(εᵣ·r²). Wasser hat εᵣ ≈ 80, was elektrostatische Kräfte zwischen Ionen um den Faktor 80 schwächt. Dadurch können Salze wie NaCl in Wasser vollständig dissoziieren — die thermische Energie (k_B·T) überwindet die abgeschirmte Coulombkraft. In Proteinen variiert εᵣ lokal (2–80), was Ionenpaarbindungen im hydrophoben Kern begünstigt.

Das Membranpotential (−70 mV über ~7 nm Membrandicke) entspricht einem elektrischen Feld von ~10⁷ V/m. Dieses Feld steuert spannungsabhängige Ionenkanäle und ist essenziell für die neuronale Signalübertragung.`,
      },
      klinischerBezug: 'Die Gelelektrophorese nutzt ein homogenes elektrisches Feld zur Trennung von DNA-Fragmenten und Proteinen nach Größe und Ladung — Grundlage der molekularbiologischen Diagnostik. Spannungsgesteuerte Na⁺- und K⁺-Kanäle an Nervenmembranen reagieren auf das elektrische Membranfeld (~10⁷ V/m) und erzeugen Aktionspotentiale. Ionenkanal-Mutationen führen zu Channelopathien wie dem Long-QT-Syndrom mit lebensbedrohlichen Herzrhythmusstörungen.',
      selfTest: [
        {
          question: 'Zwei Punktladungen q₁ = +2 µC und q₂ = −4 µC befinden sich 0,1 m voneinander entfernt. Welche Aussage zur Coulombkraft ist korrekt?',
          options: [
            'Die Kraft ist repulsiv mit F ≈ 7,2 N',
            'Die Kraft ist attraktiv mit F ≈ 7,2 N',
            'Die Kraft ist repulsiv mit F ≈ 0,72 N',
            'Die Kraft ist attraktiv mit F ≈ 0,72 N',
            'Die Kraft ist null, da sich die Ladungen aufheben',
          ],
          correctIndex: 1,
          explanation: 'F = k·|q₁·q₂|/r² = 8,99×10⁹ · 2×10⁻⁶ · 4×10⁻⁶ / (0,1)² = 8,99×10⁹ · 8×10⁻¹² / 0,01 ≈ 7,19 N ≈ 7,2 N. Da q₁ positiv und q₂ negativ sind (ungleichnamige Ladungen), ist die Kraft anziehend (attraktiv). Option A hat die richtige Zahl, aber die falsche Richtung. Option C und D haben einen Faktor-10-Fehler im Abstand. Option E ist falsch — Ladungen heben sich geometrisch nicht in der Kraftrechnung auf.',
          hints: [
            'F = k·|q₁·q₂|/r² — setze r = 0,1 m ein und berechne r² = 0,01 m².',
            'Ungleichnamige Ladungen (+ und −) ziehen sich immer an.',
          ],
          difficulty: 2,
          tags: ['coulomb', 'elektrostatik', 'ladung'],
        },
        {
          question: 'Das elektrische Feld im Innern eines metallischen Hohlkörpers (Faraday-Käfig) beträgt:',
          options: [
            'Den gleichen Wert wie außen',
            'Den halben Wert des Außenfeldes',
            'Exakt null',
            'Einen negativen Wert (entgegengesetzt zum Außenfeld)',
            'Nur null, wenn der Körper geerdet ist',
          ],
          correctIndex: 2,
          explanation: 'Im Innern eines leitenden Hohlkörpers ist das elektrische Feld exakt null, unabhängig von äußeren Feldern oder ob der Käfig geerdet ist. Freie Elektronen im Leiter verschieben sich so lange, bis das durch sie erzeugte Gegenfeld das externe Feld vollständig kompensiert. Dieses Prinzip (Faraday-Käfig) schützt empfindliche Elektronik vor elektromagnetischen Störungen und wird z. B. in MRT-Räumen (HF-Abschirmung) genutzt. Geerdetsein ändert das Innenpotential (auf 0 V gesetzt), aber das Innenfeld bleibt ohnehin null.',
          hints: [
            'In einem Leiter im Gleichgewicht können keine freien Ladungen fließen — was bedeutet das für E innen?',
            'Stichwort Influenz: Elektronen verschieben sich bis zum Kräftegleichgewicht.',
          ],
          difficulty: 1,
          tags: ['faraday-käfig', 'elektrostatik', 'influenz'],
        },
        {
          question: 'Welche Einheit ist äquivalent zu V/m (Volt pro Meter)?',
          options: [
            'J/C',
            'N/C',
            'W/A',
            'C/N',
            'kg/(A·s)',
          ],
          correctIndex: 1,
          explanation: 'Das elektrische Feld E hat die Einheit V/m. Da 1 V = 1 J/C = 1 N·m/C, folgt: 1 V/m = 1 N·m/(C·m) = 1 N/C. Also sind V/m und N/C äquivalente Einheiten für das elektrische Feld — beide beschreiben Kraft pro Ladung. J/C ist die Einheit des Potentials (= Volt), nicht des Feldes. W/A = V (Leistung durch Strom = Spannung). C/N wäre der Kehrwert der Feldeinheit.',
          hints: [
            'Feld E = F/q₀ — welche Einheit ergibt sich aus Kraft [N] geteilt durch Ladung [C]?',
            '1 V = 1 J/C = 1 N·m/C → 1 V/m = 1 N·m/(C·m) = 1 N/C.',
          ],
          difficulty: 2,
          tags: ['feldstärke', 'einheiten', 'elektrisches-feld'],
        },
        {
          question: 'Ein Plattenkondensator hat einen Plattenabstand von 2 mm und liegt an einer Spannung von 400 V. Wie groß ist das elektrische Feld zwischen den Platten?',
          options: [
            '0,2 × 10⁵ V/m',
            '2 × 10⁵ V/m',
            '8 × 10⁴ V/m',
            '4 × 10⁴ V/m',
            '2 × 10³ V/m',
          ],
          correctIndex: 1,
          explanation: 'Im homogenen Feld eines Plattenkondensators gilt: E = U/d = 400 V / (2×10⁻³ m) = 200.000 V/m = 2×10⁵ V/m. Das Feld ist homogen (überall gleich stark) und senkrecht zu den Platten gerichtet. Zum Vergleich: Das elektrische Feld über einer Neuronenmembran (−70 mV über 7 nm) beträgt ~10⁷ V/m — 50-mal stärker als in diesem Kondensator. Die Durchschlagsfeldstärke von Luft liegt bei ca. 3×10⁶ V/m.',
          hints: [
            'Für ein homogenes Feld gilt: E = U/d. Achte auf die Einheit von d (mm → m).',
            'd = 2 mm = 2 × 10⁻³ m. Teile die Spannung durch den Abstand.',
          ],
          difficulty: 1,
          tags: ['plattenkondensator', 'elektrisches-feld', 'spannung'],
        },
        {
          question: 'Warum sind elektrostatische Wechselwirkungen zwischen Ionen in wässriger Lösung viel schwächer als im Vakuum?',
          options: [
            'Weil Wasser die Ionen chemisch verändert',
            'Weil die Ionen in Wasser weiter auseinander liegen',
            'Weil die relative Permittivität εᵣ von Wasser (~80) die Coulombkraft um diesen Faktor reduziert',
            'Weil die Ladungen in Wasser neutralisiert werden',
            'Weil Wasser ein Magnetfeld erzeugt, das die elektrische Kraft kompensiert',
          ],
          correctIndex: 2,
          explanation: 'Im Coulombschen Gesetz in Medien gilt: F = k·|q₁·q₂|/(εᵣ·r²). Wasser hat eine sehr hohe relative Permittivität εᵣ ≈ 80, weil die polaren Wassermoleküle sich im Feld ausrichten und es abschirmen (Dielektrikum). Dadurch ist die Coulombkraft zwischen zwei Ionen in Wasser ca. 80-mal schwächer als im Vakuum. Das ermöglicht die Dissoziation von Salzen: Die reduzierte Anziehungskraft zwischen Na⁺ und Cl⁻ kann durch die thermische Energie (k_B·T ≈ 25 meV bei 37 °C) überwunden werden. Die Ladungen selbst bleiben unverändert.',
          hints: [
            'Das Coulombgesetz im Medium: F = k·|q₁·q₂|/(εᵣ·r²). Was bewirkt εᵣ?',
            'Polare Moleküle wie Wasser richten sich im elektrischen Feld aus und schwächen es ab.',
          ],
          difficulty: 2,
          tags: ['permittivität', 'wasser', 'ionenlösung'],
        },
        {
          question: 'Das Ruhemembranpotential einer Nervenzelle beträgt −70 mV. Bei welchem Wert öffnen sich spannungsgesteuerte Na⁺-Kanäle typischerweise (Schwellenpotential)?',
          options: [
            'Bei −90 mV (Hyperpolarisation)',
            'Bei −70 mV (Ruhepotential)',
            'Bei −55 mV (Schwellenpotential)',
            'Bei +30 mV (Overshoot)',
            'Bei 0 mV (isoelektrisch)',
          ],
          correctIndex: 2,
          explanation: 'Spannungsgesteuerte Na⁺-Kanäle öffnen sich, wenn das Membranpotential von −70 mV auf ca. −55 mV (Schwellenpotential) depolarisiert wird. Das entspricht einer Potentialänderung von +15 mV. Wird das Schwellenpotential erreicht, öffnen sich schlagartig viele Na⁺-Kanäle (positives Feedback, Hodgkin-Zyklus), Na⁺ strömt ein, und das Potential schießt auf +30 bis +40 mV (Overshoot). Danach öffnen K⁺-Kanäle, und das Potential fällt zurück. Bei −90 mV liegt Hyperpolarisation vor (z. B. nach dem Aktionspotential). Bei 0 mV wären Na⁺-Kanäle bereits inaktiviert.',
          hints: [
            'Das Schwellenpotential liegt zwischen Ruhe (−70 mV) und Overshoot (+30 mV).',
            'Spannungsgesteuerte Na⁺-Kanäle brauchen eine Depolarisation (weniger negativ) zum Öffnen.',
          ],
          difficulty: 3,
          tags: ['membranpotential', 'aktionspotential', 'ionenkanäle'],
        },
        {
          question: 'Welcher Effekt erklärt, warum Ladungen auf leitenden Körpern bevorzugt an spitzen Stellen (geringer Krümmungsradius) konzentriert sind?',
          options: [
            'Influenz durch benachbarte Ladungen',
            'Das Coulombsche Gesetz und die gegenseitige Abstoßung der Ladungen',
            'Die Massenanziehung an Spitzen',
            'Quantenmechanische Tunneleffekte',
            'Die höhere Permittivität an Spitzen',
          ],
          correctIndex: 1,
          explanation: 'Ladungen auf der Oberfläche eines Leiters stoßen sich gegenseitig ab und verteilen sich so, dass das Feld im Innern null ist. An Stellen mit kleinem Krümmungsradius (Spitzen) können die Ladungen weniger weit voneinander entfernt sein als auf flachen Flächen — die Abstoßung ist stärker — daher reichern sich Ladungen an Spitzen an, was zu sehr hohen lokalen Feldstärken führt. Diese können die Luft ionisieren (Spitzenentladung, Blitzableiter-Prinzip). Deshalb verwenden Hochspannungsanlagen abgerundete Elektroden.',
          hints: [
            'Ladungen im Leiter verteilen sich so, dass E innen = 0. Was passiert an Stellen mit kleinem Radius?',
            'Denke an den Blitzableiter: Warum ist er spitz?',
          ],
          difficulty: 3,
          tags: ['spitzenentladung', 'blitzableiter', 'ladungsverteilung'],
        },
        {
          question: 'Welche der folgenden Größen beschreibt die potentielle Energie pro Ladungseinheit an einem Punkt im elektrischen Feld?',
          options: [
            'Elektrische Feldstärke E',
            'Elektrische Flussdichte D',
            'Elektrisches Potential φ',
            'Elektrische Kapazität C',
            'Elektrischer Widerstand R',
          ],
          correctIndex: 2,
          explanation: 'Das elektrische Potential φ gibt die potentielle Energie pro Ladungseinheit an: φ = E_pot / q, Einheit: Volt (V = J/C). Es ist eine skalare Größe (kein Richtungsvektor). Die Spannung U zwischen zwei Punkten ist die Potentialdifferenz: U = φ_A − φ_B. Die Feldstärke E ist die Kraft pro Ladung (Vektorgröße). Die Flussdichte D = ε₀·E berücksichtigt das Medium. Die Kapazität C = Q/U beschreibt die Ladungsspeicherung. Der Widerstand R gehört zur Elektrokinetik.',
          hints: [
            'Potential φ ist analog zur Höhe h in der Mechanik: E_pot = m·g·h entspricht E_pot = q·φ.',
            'Einheit des Potentials: J/C = V (Volt).',
          ],
          difficulty: 1,
          tags: ['elektrisches-potential', 'spannung', 'potential'],
        },
      ],
    },
    {
      id: 'ph-5-02',
      title: 'Strom, Widerstand und Ohmsches Gesetz',
      content: `## Elektrischer Strom

**Elektrischer Strom I** ist der gerichtete Fluss elektrischer Ladungsträger. Die Stromstärke ist definiert als die pro Zeiteinheit durch einen Querschnitt fließende Ladung:

**I = ΔQ / Δt** [A = C/s]

Die Einheit ist Ampere (A). In Metallen fließen Elektronen (Leitungselektronen) — die technische Stromrichtung wurde konventionell entgegen der Elektronenflussrichtung definiert (von + nach −). In Elektrolyten (z. B. Blut, Zytoplasma) fließen positive und negative Ionen. In Halbleitern und Gasen gibt es weitere Trägerarten.

Die **Stromdichte j = I / A** [A/m²] beschreibt den Strom pro Querschnittsfläche — relevant für Heizeffekte. Mit der Driftgeschwindigkeit v_d der Elektronen und der Ladungsträgerdichte n gilt: j = n·e·v_d. Typische Driftgeschwindigkeiten in Kupfer sind winzig (~0,1 mm/s bei 1 A), während sich die elektromagnetische Wirkung mit Lichtgeschwindigkeit ausbreitet.

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

## Elektrochemische Spannungsquellen und Nernst-Potential

Eine **Spannungsquelle** (Batterie, Akkumulator) erzeugt durch chemische Reaktionen eine **elektromotorische Kraft (EMK) ε** [V]. Reale Quellen haben einen **Innenwiderstand r**: U_klemme = ε − I·r. Bei hoher Stromentnahme sinkt die Klemmenspannung. Das **Nernst-Potential** für einzelne Ionenarten ist die Gleichgewichtsspannung über einer semipermeablen Membran (z. B. E_K⁺ ≈ −90 mV, E_Na⁺ ≈ +60 mV) — berechnet mit der Nernst-Gleichung: E = (RT/zF) · ln([Ion]_außen / [Ion]_innen).`,

      lernziele: [
        'Das Ohmsche Gesetz anwenden und Strom, Spannung und Widerstand berechnen',
        'Den Zusammenhang zwischen Widerstand, Geometrie und spezifischem Widerstand erläutern',
        'Elektrische Leistung und Joulesche Wärme berechnen und medizinische Anwendungen nennen',
        'Die Temperaturabhängigkeit des Widerstands für Metalle, Halbleiter und Supraleiter erklären',
        'Das Nernst-Potential als elektrochemisches Konzept für Ionenkanäle einordnen',
      ],
      sections: [
        {
          heading: 'Elektrischer Strom und Ladungsfluss',
          text: 'Strom I = ΔQ/Δt [A]. In Metallen fließen Elektronen (Driftgeschwindigkeit ~0,1 mm/s), in Elektrolyten Ionen. Technische Stromrichtung: von + nach −. Stromdichte j = I/A [A/m²] ist relevant für Heizeffekte. Körpergewebe leitet über Ionen (spez. Widerstand 0,5–3 Ω·m). Die Signalübertragung entlang des Nervs ist elektrochemisch: Depolarisationswellen (Aktionspotentiale) laufen mit 1–100 m/s entlang der Membran.',
          merksatz: 'I = ΔQ/Δt [Ampere]. Technische Stromrichtung: + nach −. In Gewebe: Ionenleitung.',
        },
        {
          heading: 'Ohmsches Gesetz und Widerstand',
          text: 'U = R·I (Ohmsches Gesetz). R = ρ·L/A — abhängig von Material (ρ), Länge und Querschnitt. Leitwert G = 1/R [S]. Metallwiderstände steigen mit T (positiver α); Halbleiter fallen (negativer α, NTC). Supraleiter: R = 0 unter T_c. In der Physiologie: Ionenkanäle haben Leitfähigkeiten im pS-Bereich; einzelne Kanäle werden mit Patch-Clamp gemessen.',
          merksatz: 'U = R·I. R = ρ·L/A. Leitwert G = 1/R [S = A/V].',
        },
        {
          heading: 'Elektrische Leistung und medizinische Anwendungen',
          text: 'P = U·I = I²·R = U²/R [Watt]. Joulesche Wärme: Q = I²·R·t. Elektrochirurgie: HF-Strom (300–500 kHz) erzeugt lokale Wärme → Gewebeschnitt ohne Nervenreizung (zu schnell für Aktionspotential). Ablationstherapie: Hochfrequenzenergie zerstört arrhythmogenes Gewebe im Herz. Diathermie: Tiefenwärme durch hochfrequenten Strom. Defibrillation: Gleichstromstoß entsynchronisiert Kammerflimmern.',
          merksatz: 'P = I²·R (Joulesche Wärme). Elektrochirurgie: HF-Strom → Wärme ohne Muskelreizung.',
        },
      ],
      diagram: 'circuit',

      merksätze: [
        'Ohmsches Gesetz: U = R·I — gilt für lineare Widerstände.',
        'Stromstärke: I = ΔQ/Δt [A = C/s].',
        'Widerstand: R = ρ·L/A — größere Länge → mehr R; größerer Querschnitt → weniger R.',
        'Leistung: P = U·I = I²·R = U²/R [Watt].',
        'Joulesche Wärme: Q = I²·R·t — Basis der Elektrochirurgie.',
        'Metalle: R steigt mit T (positiver Temperaturkoeffizient α).',
        'Halbleiter/NTC: R sinkt mit T (negativer Temperaturkoeffizient).',
        'Supraleiter: R = 0 unterhalb T_c (MRT-Spulen).',
        'Leitwert G = 1/R [S = Siemens] — bevorzugt bei Ionenkanälen.',
        'Nernst-Potential: E = (RT/zF)·ln([außen]/[innen]) — Gleichgewichtsspannung für Ionen.',
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: 'Ein Patient erleidet einen Elektrounfall mit 230 V Wechselspannung. Erläutern Sie, welche physikalischen Größen den Schaden bestimmen, und welche Faktoren den Körperwiderstand beeinflussen. Gehen Sie auch auf den Unterschied zwischen Gleich- und Wechselstrom ein.',
        answer: `Der biologische Schaden durch elektrischen Strom hängt primär von der Stromstärke I ab, nicht von der Spannung. Nach dem Ohmschen Gesetz gilt: I = U/R. Der Körperwiderstand R bestimmt also, welcher Strom bei 230 V durch den Körper fließt.

Der Körperwiderstand variiert stark: Trockene Haut: 10.000–100.000 Ω; feuchte/verletzte Haut: 1.000–10.000 Ω; intern (Blut, Muskeln): ~500 Ω. Bei trockener Haut fließt bei 230 V ca. 2–23 mA; bei feuchter Haut 23–230 mA. Ströme über 10–20 mA erzeugen tetanische Muskelkontraktionen (Loslasssperre), über 100 mA Kammerflimmern (meist letal ohne Defibrillation), über 1 A direkte Herzschädigung und Verbrennungen.

Wechselstrom (AC, 50 Hz) ist gefährlicher als Gleichstrom (DC) gleicher Amplitude, weil: (1) AC reizt Muskeln mit 50 Hz → tetanische Kontraktionen; (2) DC führt eher zu Verbrennungen als zu Kammerflimmern. Die Joulesche Wärme (Q = I²·R·t) erzeugt Verbrennungen intern und an Eintritts-/Austrittspunkten.

Stromweg ist entscheidend: Hand-zu-Hand-Pfad (durch Thorax/Herz) ist lebensgefährlicher als Fuß-zu-Fuß. Defibrillation nutzt gezielt einen kurzen Gleichstromstoß hoher Energie (200–360 J), um das Kammerflimmern zu terminieren.`,
      },
      klinischerBezug: 'Die Elektrochirurgie nutzt hochfrequenten Wechselstrom (300–500 kHz), der im Gewebe durch Joulesche Wärme schneidet oder koaguliert, ohne Nerven- oder Muskelreize auszulösen (zu schnell für Aktionspotentiale). Bei der Hochfrequenz-Ablation werden arrhythmogene Herzareale durch lokale Wärmeentwicklung (I²·R) gezielt verödet. Patch-Clamp-Messungen erfassen den Leitwert einzelner Ionenkanäle im Picosiemens-Bereich und ermöglichen so die Charakterisierung von Kanalproteinen bei Herzerkrankungen.',
      selfTest: [
        {
          question: 'Ein Widerstand von 470 Ω liegt an einer Spannung von 12 V. Wie groß ist die elektrische Leistung?',
          options: [
            'P ≈ 0,026 W',
            'P ≈ 0,31 W',
            'P ≈ 5640 W',
            'P ≈ 25,5 mW',
            'P ≈ 5,76 W',
          ],
          correctIndex: 1,
          explanation: 'P = U²/R = (12 V)² / 470 Ω = 144 / 470 ≈ 0,306 W ≈ 0,31 W. Alternativ: I = U/R = 12/470 ≈ 0,02553 A; P = U·I = 12 · 0,02553 ≈ 0,306 W. Option A wäre P = U·R (falsch). Option C verwechselt Quotient mit Produkt. Option D ≈ 25,5 mW wäre P = I²·R mit falschem I. Die korrekte Formel lautet P = U²/R oder äquivalent P = I²·R oder P = U·I.',
          hints: [
            'P = U²/R. Setze U = 12 V und R = 470 Ω ein.',
            'Alternativ: Berechne erst I = U/R, dann P = U·I.',
          ],
          difficulty: 1,
          tags: ['leistung', 'ohmsches-gesetz', 'widerstand'],
        },
        {
          question: 'Welche Aussage zum spezifischen Widerstand von Körpergewebe im Vergleich zu Kupfer ist korrekt?',
          options: [
            'Körpergewebe und Kupfer haben ähnliche spezifische Widerstände (~10⁻⁸ Ω·m)',
            'Körpergewebe hat einen ca. 10⁷–10⁸-mal höheren spezifischen Widerstand als Kupfer',
            'Körpergewebe leitet besser als Kupfer, da es Wasser enthält',
            'Der spezifische Widerstand ist für alle Gewebe identisch (1 Ω·m)',
            'Kupfer leitet schlechter als Körpergewebe, da es kein ionisches Leitmedium ist',
          ],
          correctIndex: 1,
          explanation: 'Kupfer hat ρ ≈ 1,7 × 10⁻⁸ Ω·m (hervorragender metallischer Leiter durch freie Elektronen). Körpergewebe hat je nach Typ ρ ≈ 0,5–3 Ω·m (Leitung durch Ionen). Das Verhältnis beträgt ca. 0,5 / (1,7×10⁻⁸) ≈ 3 × 10⁷ — also ca. 10⁷–10⁸-mal höherer spezifischer Widerstand bei Gewebe. Deshalb ist Körpergewebe ein schlechter Leiter. Bei der Defibrillation muss die Energie so gewählt werden, dass trotz des hohen Körperwiderstands genug Strom das Herz erreicht.',
          hints: [
            'Kupfer: ρ ≈ 1,7 × 10⁻⁸ Ω·m. Gewebe: ρ ≈ 0,5–3 Ω·m. Berechne den Faktor.',
            'Gewebe leitet ionisch (viel langsamer und schwächer als metallische Leitung).',
          ],
          difficulty: 2,
          tags: ['spezifischer-widerstand', 'körpergewebe', 'leitfähigkeit'],
        },
        {
          question: 'Eine Nervenfaser mit Myelinisierung leitet Impulse schneller als eine unmyelinisierte. Was ist der physikalische Grund?',
          options: [
            'Myelinscheiden erhöhen die Leitfähigkeit der Membran',
            'Myelinscheiden verringern den Membranwiderstand zwischen Ranvierschen Schnürringen',
            'Myelinscheiden erhöhen die Kapazität der Membran und beschleunigen die Depolarisation',
            'Myelinscheiden wirken als Isolatoren und zwingen den Strom zur saltatorischen Erregungsleitung zwischen Ranvierschen Schnürringen',
            'Myelinscheiden erhöhen den Innenwiderstand des Axons',
          ],
          correctIndex: 3,
          explanation: 'Myelinscheiden bestehen aus mehrfach umgewickelten Lipiddoppelschichten und sind elektrische Isolatoren (hoher Widerstand, niedrige Kapazität). Sie bedecken das Axon zwischen den Ranvierschen Schnürringen, wo spannungsgesteuerte Ionenkanäle konzentriert sind. Da die Membran im myelinisierten Bereich kaum Strom lässt, springt das Aktionspotential von Schnürring zu Schnürring (saltatorische Erregungsleitung). Das spart Energie und beschleunigt die Leitung auf 70–120 m/s (vs. unter 2 m/s unmyelinisiert). Bei Multipler Sklerose werden Myelinscheiden zerstört → drastisch verlangsamte Leitung.',
          hints: [
            'Myelin ist ein elektrischer Isolator. Wo befinden sich die Ionenkanäle?',
            'Saltatorisch = springend. Wo springt das Aktionspotential hin?',
          ],
          difficulty: 3,
          tags: ['myelin', 'saltatorische-erregungsleitung', 'ranvier'],
        },
        {
          question: 'Wie ändert sich der Widerstand eines Drahtes, wenn man ihn bei gleichem Volumen doppelt so lang zieht (Querschnitt halbiert sich dabei)?',
          options: [
            'R bleibt gleich',
            'R verdoppelt sich',
            'R vervierfacht sich',
            'R achtfacht sich',
            'R halbiert sich',
          ],
          correctIndex: 2,
          explanation: 'Wenn der Draht bei konstantem Volumen auf doppelte Länge gestreckt wird, halbiert sich der Querschnitt (V = L·A = const → A_neu = A/2). Mit R = ρ·L/A gilt: R_neu = ρ·(2L)/(A/2) = ρ·2L·2/A = 4·ρ·L/A = 4·R_alt. Der Widerstand vervierfacht sich. In der Biologie ist analoges Denken anwendbar: Engere und längere Kapillaren haben viel höheren hydraulischen Widerstand (Hagen-Poiseuille analog zu Ohm).',
          hints: [
            'Volumen ist konstant: V = L·A. Wenn L sich verdoppelt, was passiert mit A?',
            'R = ρ·L/A. Setze L_neu = 2L und A_neu = A/2 ein.',
          ],
          difficulty: 2,
          tags: ['widerstand', 'geometrie', 'querschnitt'],
        },
        {
          question: 'Welche Stromstärke ist ab ca. 100 mA durch den menschlichen Körper typischerweise lebensbedrohlich?',
          options: [
            'Sie verursacht ein kaum wahrnehmbares Kribbeln',
            'Sie verursacht schmerzhafte Muskelkontraktionen, aber kein Kammerflimmern',
            'Sie kann Kammerflimmern auslösen',
            'Sie führt sofort zu Herzstillstand durch Asystolie',
            'Sie ist für den Menschen völlig harmlos',
          ],
          correctIndex: 2,
          explanation: 'Ab ca. 80–100 mA Körperstrom kann Kammerflimmern (ventrikuläre Fibrillation) ausgelöst werden — ein unkoordiniertes, ineffektives Zittern des Herzens, das ohne sofortige Defibrillation letal ist. Schon 1–2 mA sind wahrnehmbar (Kribbeln); 10–20 mA erzeugen tetanische Muskelkontraktionen (Loslasssperre); 50–100 mA sind schmerzhaft und können Atemmuskel-Verkrampfung auslösen; über 1 A entsteht direkte thermische Herzschädigung. Defibrillation nutzt einen kurzen Energiestoß (200–360 J), um das Kammerflimmern zu terminieren.',
          hints: [
            'Kammerflimmern ist ein unkoordiniertes Herzflimmern. Welcher Strom löst es aus?',
            '10 mA → Loslasssperre, 100 mA → Kammerflimmern, 1 A → Verbrennung.',
          ],
          difficulty: 2,
          tags: ['kammerflimmern', 'elektrounfall', 'strom'],
        },
        {
          question: 'Was beschreibt das Nernst-Potential für ein Ion an einer biologischen Membran?',
          options: [
            'Die maximale Stromstärke durch einen Ionenkanal',
            'Die Gleichgewichtsspannung, bei der elektrischer und osmotischer Gradient für dieses Ion ausgeglichen sind',
            'Den Widerstand der Lipiddoppelschicht für Ionen',
            'Die Geschwindigkeit der Ionendiffusion durch die Membran',
            'Die Kapazität der Zellmembran für elektrische Ladungen',
          ],
          correctIndex: 1,
          explanation: 'Das Nernst-Potential (Gleichgewichtspotential) E_ion ist die Membranspannung, bei der die elektrische Kraft auf ein Ion genau der entgegengesetzt wirkenden Diffusionskraft (osmotischer Gradient) das Gleichgewicht hält. Es wird berechnet mit der Nernst-Gleichung: E = (RT/zF) · ln([Ion]_außen / [Ion]_innen). Bei 37 °C: RT/F ≈ 26,7 mV. Für K⁺ (Gradient ~35:1 innen:außen): E_K ≈ −94 mV. Für Na⁺ (Gradient ~10:1 außen:innen): E_Na ≈ +61 mV. Das Ruhemembranpotential (−70 mV) liegt zwischen E_K und E_Na, da die Membran für beide Ionen teilweise permeabel ist.',
          hints: [
            'Nernst-Gleichung: E = (RT/zF)·ln([außen]/[innen]). Was passiert, wenn E_membran = E_nernst?',
            'Gleichgewicht: elektrischer Drift = Diffusion. Kein Nettostrom mehr für dieses Ion.',
          ],
          difficulty: 3,
          tags: ['nernst-potential', 'membranpotential', 'elektrochemie'],
        },
        {
          question: 'Welche der folgenden medizinischen Anwendungen nutzt primär den Effekt der Jouleschen Wärme (I²·R)?',
          options: [
            'EKG (Elektrokardiographie)',
            'EEG (Elektroenzephalographie)',
            'Hochfrequenz-Ablation bei Herzrhythmusstörungen',
            'EMG (Elektromyographie)',
            'Nervenleitgeschwindigkeitsmessung (NLG)',
          ],
          correctIndex: 2,
          explanation: 'Die Hochfrequenz-Ablation (HF-Ablation) nutzt gezielt Joulesche Wärme: Ein HF-Strom (300–500 kHz) wird über eine Katheterelektrode ins Herzgewebe geleitet. Im Gewebe (Widerstand R) erzeugt er Wärme Q = I²·R·t — lokal bis zu 50–70 °C — und koaguliert arrhythmogenes Gewebe (z. B. bei AV-Knoten-Reentry-Tachykardie, Vorhofflimmern). EKG, EEG und EMG messen elektrische Potentiale passiv (kein therapeutischer Strom appliziert). Nervenleitgeschwindigkeit: kurze Reizstromstöße zur Stimulation, Wärmeeffekt nicht das therapeutische Ziel.',
          hints: [
            'Joulesche Wärme = Wärme durch Stromfluss. Welche Anwendung nutzt Wärme therapeutisch?',
            'Ablation = Veröden von Gewebe. Welche physikalische Energie steckt dahinter?',
          ],
          difficulty: 2,
          tags: ['ablation', 'joulesche-wärme', 'elektrochirurgie'],
        },
        {
          question: 'Bei einem Supraleiter verschwindet der elektrische Widerstand unterhalb der kritischen Temperatur T_c. Welche Konsequenz hat das für MRT-Scanner?',
          options: [
            'Das Magnetfeld kann ohne kontinuierliche Energiezufuhr aufrechterhalten werden',
            'Die Elektronen bewegen sich mit Lichtgeschwindigkeit',
            'Das Magnetfeld ist proportional zur angelegten Spannung',
            'Der Strom muss ständig erhöht werden, um das Feld stabil zu halten',
            'Die Supraleitung erhöht den Widerstand auf einen definierten Wert',
          ],
          correctIndex: 0,
          explanation: 'In einem supraleitenden Stromkreis ist R = 0 unterhalb T_c. Nach dem Ohmschen Gesetz: U = R·I = 0·I = 0 — es wird keine Spannung benötigt, um den Strom aufrechtzuerhalten. Einmal angeregt, fließt der Strom ohne jeglichen Verlust weiter (persistenter Strom). MRT-Scanner nutzen Niob-Titan-Spulen (T_c ≈ 9 K), gekühlt mit flüssigem Helium auf 4 K. Der einmal eingespeiste Strom erzeugt dauerhaft ein starkes Magnetfeld (1,5–7 T) ohne weiteren Energiebedarf für den Stromerhalt — nur die Kryokühlung verbraucht Energie. Ein Quench (Verlust der Supraleitung) ist ein Notfall: schlagartiger Widerstandsanstieg, enorme Wärmeentwicklung, Helium-Verdampfung.',
          hints: [
            'R = 0 → U = R·I = 0. Was bedeutet das für die nötige Spannung zur Strommaintenance?',
            'Einmal eingekoppelter Strom bleibt ohne Verlust — deshalb persistenter Strom.',
          ],
          difficulty: 2,
          tags: ['supraleitung', 'mrt', 'widerstand'],
        },
      ],
    },
    {
      id: 'ph-5-03',
      title: 'Kirchhoffsche Gesetze und Schaltkreise',
      content: `## Grundlegende Schaltungstypen

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

Der **Spannungsteiler** teilt eine Spannung U₀ proportional zu den Widerständen auf: U₂ = U₀ · R₂/(R₁ + R₂). Die **Wheatstone-Brücke** detektiert minimale Widerstandsänderungen durch Vergleich zweier Spannungsteiler — genutzt in Dehnungsmessstreifen, Drucksensoren und Biosensoren (z. B. Glukosemessgeräte, Pulsoxymetrie-Schaltkreise).`,

      lernziele: [
        'Reihen- und Parallelschaltungen von Widerständen und Kondensatoren berechnen',
        'Die Kirchhoffschen Gesetze (Knoten- und Maschenregel) anwenden und ihre physikalischen Grundlagen nennen',
        'Das RC-Glied und seine Zeitkonstante τ = R·C für biologische Membrane erläutern',
        'Die frequenzabhängige Impedanz von Kondensatoren erklären und die Bioimpedanz einordnen',
        'Den Defibrillator als Kondensatorentladung physikalisch beschreiben',
      ],
      sections: [
        {
          heading: 'Reihen- und Parallelschaltung',
          text: 'Reihenschaltung: R_ges = ΣRᵢ (Ströme gleich, Spannungen addieren sich). Parallelschaltung: 1/R_ges = Σ(1/Rᵢ) (Spannungen gleich, Ströme addieren sich). Kondensatoren: umgekehrt (Parallel → C addiert sich, Reihe → 1/C addiert sich). Zellmembranen sind RC-Parallelglieder: Lipidschicht = Kondensator (C_m ≈ 1 µF/cm²), Kanäle = variable Widerstände. Hodgkin-Huxley-Modell beschreibt die Membran als Schaltkreis.',
          merksatz: 'R in Reihe: R_ges = R₁+R₂. R parallel: 1/R_ges = 1/R₁+1/R₂. C ist umgekehrt zu R.',
        },
        {
          heading: 'Kirchhoffsche Gesetze',
          text: 'Knotenregel (KCL): ΣI_ein = ΣI_aus — Ladungserhaltung. Maschenregel (KVL): ΣU = 0 in jeder Masche — Energieerhaltung. Mit U = R·I (Ohm) bilden die Kirchhoffgesetze das vollständige Gleichungssystem für Netzwerke. Anwendung: Analyse von Neuronennetzwerken, Herzschrittmacherkreisen, Messbrücken (Wheatstone).',
          merksatz: 'KCL: ΣI = 0 am Knoten (Ladungserhaltung). KVL: ΣU = 0 in Masche (Energieerhaltung).',
        },
        {
          heading: 'RC-Schaltkreis und Defibrillation',
          text: 'Zeitkonstante τ = R·C. Ladevorgang: U_C(t) = U₀·(1−e^(−t/τ)). Entladung: U_C(t) = U₀·e^(−t/τ). Nach τ: 63 % geladen/37 % entladen. Defibrillator: C ≈ 200 µF, U ≈ 1000–2000 V → W = ½·C·U² ≈ 100–400 J. Die gespeicherte Energie wird in ms über den Thorax entladen. Bioimpedanzanalyse: frequenzabhängige Impedanz des Körpers zur Messung von Fett- und Muskelmasse.',
          merksatz: 'τ = R·C (Zeitkonstante). W = ½·C·U² (gespeicherte Energie im Kondensator).',
        },
      ],
      diagram: 'circuit',

      merksätze: [
        'Reihenschaltung R: R_ges = R₁ + R₂ + ... (größer als jeder Einzelwert).',
        'Parallelschaltung R: 1/R_ges = 1/R₁ + 1/R₂ + ... (kleiner als jeder Einzelwert).',
        'Kondensatoren: Reihe → 1/C addieren; Parallel → C direkt addieren.',
        'KCL (Knotenregel): ΣI_ein = ΣI_aus — Ladungserhaltung.',
        'KVL (Maschenregel): ΣU = 0 in Masche — Energieerhaltung.',
        'RC-Zeitkonstante: τ = R·C [s]. Nach τ: 63 % geladen.',
        'Kondensatorenergie: W = ½·C·U².',
        'Kapazitive Reaktanz: X_C = 1/(2π·f·C) — sinkt mit Frequenz.',
        'Zellmembran als RC-Glied: C_m ≈ 1 µF/cm², R_m = Kanalwiderstand.',
        'Defibrillator: Kondensatorentladung ~200 J in ms → terminiert Kammerflimmern.',
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: 'Beschreiben Sie das elektrische Ersatzschaltbild der Zellmembran und erläutern Sie, wie die Kirchhoffschen Gesetze und das RC-Verhalten die Entstehung und Fortleitung von Aktionspotentialen erklären.',
        answer: `Die Zellmembran lässt sich als RC-Parallelglied modellieren: Die Lipiddoppelschicht ist ein Plattenkondensator mit Kapazität C_m ≈ 1 µF/cm². Ionenkanäle wirken als variable Widerstände (oder Leitfähigkeiten g = 1/R) für Na⁺, K⁺, Cl⁻ und Leck-Ionen. Das Hodgkin-Huxley-Modell (1952) beschreibt den Membranapparatstrom als: I_ges = C_m·dU/dt + g_Na·(U−E_Na) + g_K·(U−E_K) + g_L·(U−E_L).

Kirchhoffsche Knotenregel am Membranknoten: Der Gesamtstrom (kapazitiv + ionisch) muss null sein (geschlossener Kreis). Das RC-Verhalten erklärt die Zeitdynamik: Bei plötzlicher Depolarisation muss zuerst die Membrankapazität umgeladen werden (Zeitkonstante τ = R_m·C_m). Dies verursacht das charakteristische exponentielle Ansteigen der Spannung.

Erreicht die Depolarisation das Schwellenpotential (~−55 mV), öffnen sich spannungsgesteuerte Na⁺-Kanäle (g_Na steigt schlagartig): Positives Feedback → Overshoot bis +30 mV. Die Maschenregel in der Membranmasche: U_membran = U_Na-Batterie − I_Na·R_Na (Nernst-Potential als EMK). Nach dem Overshoot inaktivieren Na⁺-Kanäle; K⁺-Kanäle öffnen → Repolarisation. Die saltatorische Leitung kann mit Kirchhoffs Knotenregel am Ranvierschen Schnürring erklärt werden: Strom fließt axial durch das Axon (Längswiderstand) und lädt den nächsten Schnürring um — das Aktionspotential springt vorwärts.`,
      },
      klinischerBezug: 'Der Defibrillator nutzt einen Kondensator (C ≈ 200 µF, geladen auf ~1000–2000 V, W ≈ 200–360 J), der beim Entladen über Thoraxelektroden (R_körper ≈ 50–100 Ω) innerhalb von ca. 10 ms einen Stromstoß durch das Herz sendet — diese massenhafte Depolarisation terminiert Kammerflimmern. Die Bioimpedanzanalyse (BIA) nutzt das frequenzabhängige RC-Verhalten des Körpers: bei 50 kHz fließt Strom durch Extra- und Intrazellularraum; das Impedanzmuster erlaubt die Berechnung von Fettmasse, Muskelmasse und Körperwasser. Herzschrittmacher sind komplexe Schaltkreise aus Kondensatoren, Widerständen und integrierten Schaltungen.',
      selfTest: [
        {
          question: 'Drei Widerstände R₁ = 10 Ω, R₂ = 20 Ω, R₃ = 30 Ω sind parallel geschaltet. Welcher Gesamtwiderstand ergibt sich?',
          options: [
            '60 Ω',
            '5,45 Ω',
            '18,18 Ω',
            '10 Ω',
            '3,33 Ω',
          ],
          correctIndex: 1,
          explanation: '1/R_ges = 1/10 + 1/20 + 1/30 = 6/60 + 3/60 + 2/60 = 11/60. R_ges = 60/11 ≈ 5,45 Ω. Bei Parallelschaltung ist der Gesamtwiderstand immer kleiner als der kleinste Einzelwiderstand (hier < 10 Ω). Zur Kontrolle: 60 Ω wäre die Reihenschaltung. 3,33 Ω wäre nur 1/3 des kleinsten Widerstands (falsch). 18,18 Ω wäre der arithmetische Mittelwert (kein physikalisch sinnvoller Wert für Parallelschaltung).',
          hints: [
            '1/R_ges = 1/R₁ + 1/R₂ + 1/R₃. Bringe auf gemeinsamen Nenner (60).',
            'Parallelwiderstand ist immer kleiner als der kleinste Einzelwiderstand. Welche Antwort ist < 10 Ω?',
          ],
          difficulty: 1,
          tags: ['parallelschaltung', 'widerstand', 'schaltkreis'],
        },
        {
          question: 'Ein Kondensator (C = 100 µF) wird über einen Widerstand (R = 1000 Ω) geladen. Nach welcher Zeit ist er auf ca. 63 % seiner Endspannung geladen?',
          options: [
            'Nach 0,1 ms',
            'Nach 1 ms',
            'Nach 10 ms',
            'Nach 100 ms',
            'Nach 1 s',
          ],
          correctIndex: 3,
          explanation: 'Die Zeitkonstante τ = R·C = 1000 Ω · 100×10⁻⁶ F = 0,1 s = 100 ms. Nach genau einer Zeitkonstante τ ist der Kondensator auf U₀·(1−e⁻¹) = U₀ · 0,632 ≈ 63 % aufgeladen. Nach 5τ = 500 ms gilt der Kondensator als vollständig geladen (>99 %). Diese Zeitkonstante ist analog zur Membranzeitkonstante τ_m = R_m·C_m (typisch 1–20 ms für Neuronen), die die Reaktionsgeschwindigkeit auf Strompulse bestimmt.',
          hints: [
            'τ = R·C. Berechne: 1000 Ω × 100 µF = ?',
            '100 µF = 100 × 10⁻⁶ F = 10⁻⁴ F. 1000 × 10⁻⁴ = 0,1 s = 100 ms.',
          ],
          difficulty: 1,
          tags: ['kondensator', 'zeitkonstante', 'rc-glied'],
        },
        {
          question: 'Welches Kirchhoffsche Gesetz basiert physikalisch auf der Energieerhaltung?',
          options: [
            'Die Knotenregel (KCL)',
            'Die Maschenregel (KVL)',
            'Beide Gesetze basieren auf Energieerhaltung',
            'Beide Gesetze basieren auf Ladungserhaltung',
            'Keines der beiden — sie sind rein empirisch',
          ],
          correctIndex: 1,
          explanation: 'Die Maschenregel (KVL): ΣU = 0 beim Umlauf durch eine geschlossene Masche. Physikalische Basis: Das elektrische Feld ist konservativ — die Arbeit beim Umlauf ist null (Energieerhaltung). In einem konservativen Kraftfeld ist das Ringintegral des Feldes null. Die Knotenregel (KCL): ΣI = 0 am Knoten. Physikalische Basis: Ladungserhaltung — Ladung kann sich nicht im Knoten ansammeln. Beide Gesetze zusammen mit Ohm bilden das vollständige Analyswerkzeug für lineare Netzwerke.',
          hints: [
            'Knotenregel: Ströme am Knoten → Ladung. Maschenregel: Spannungen im Umlauf → Energie.',
            'Beim Umlauf durch eine Masche ist die Gesamtspannung null — was steckt dahinter?',
          ],
          difficulty: 2,
          tags: ['kirchhoff', 'maschenregel', 'knotenregel'],
        },
        {
          question: 'In welchem Schaltungselement fließt bei Gleichstrom (DC, f = 0) kein Strom im stationären Zustand?',
          options: [
            'Rein ohmscher Widerstand',
            'Ideale Spule (Induktivität)',
            'Idealer Kondensator',
            'Reale Batterie (mit Innenwiderstand)',
            'Supraleiter',
          ],
          correctIndex: 2,
          explanation: 'Ein idealer Kondensator lässt bei Gleichstrom im stationären Zustand keinen Strom durch. Die kapazitive Reaktanz X_C = 1/(2π·f·C) → unendlich bei f → 0. Beim Einschalten fließt kurz ein Ladestrom (transient), bis der Kondensator vollständig aufgeladen ist (U_C = U_Quelle) — dann ist ΔU = 0 und I = 0. Eine ideale Spule hingegen leitet DC ohne Widerstand (X_L = 0 bei f = 0). Dieser Blockiereffekt für DC macht Kondensatoren zu wichtigen Koppel- und Filterelementen (z. B. EKG-Verstärker).',
          hints: [
            'X_C = 1/(2π·f·C). Was passiert, wenn f = 0 (Gleichstrom)?',
            'Nach dem Laden: U_C = U_Quelle → keine Potentialdifferenz → kein Strom.',
          ],
          difficulty: 2,
          tags: ['kondensator', 'gleichstrom', 'reaktanz'],
        },
        {
          question: 'Ein Defibrillator wird auf 2000 V geladen (C = 150 µF). Welche Energie ist gespeichert?',
          options: [
            'W = 150 J',
            'W = 300 J',
            'W = 600 J',
            'W = 30 J',
            'W = 3000 J',
          ],
          correctIndex: 1,
          explanation: 'W = ½·C·U² = ½ · 150×10⁻⁶ F · (2000 V)² = ½ · 150×10⁻⁶ · 4×10⁶ = ½ · 600 = 300 J. Typische Defibrillatoren liefern 200–360 J. Diese Energie wird in ~10 ms über den Thorax entladen (R_thorax ≈ 50–100 Ω). Der resultierende Spitzenstrom beträgt I_max = U/R = 2000/75 ≈ 27 A — genug, um alle Herzmuskelzellen gleichzeitig zu depolarisieren und Kammerflimmern zu beenden. Moderne biphasische Defibrillatoren benötigen weniger Energie (100–200 J).',
          hints: [
            'W = ½·C·U². C = 150 µF = 150 × 10⁻⁶ F. U = 2000 V → U² = 4 × 10⁶ V².',
            '½ × 150 × 10⁻⁶ × 4 × 10⁶ = ½ × 600 = 300 J.',
          ],
          difficulty: 2,
          tags: ['defibrillator', 'kondensator', 'energie'],
        },
        {
          question: 'Die Wheatstone-Brücke ist im Gleichgewicht (kein Strom durch das Galvanometer), wenn gilt:',
          options: [
            'R₁ + R₂ = R₃ + R₄',
            'R₁ · R₄ = R₂ · R₃',
            'R₁/R₂ = R₃ + R₄',
            'R₁ · R₂ = R₃ · R₄',
            'R₁ = R₂ = R₃ = R₄',
          ],
          correctIndex: 1,
          explanation: 'Für die Wheatstone-Brücke im Gleichgewicht (U_Galvanometer = 0): R₁/R₂ = R₃/R₄, äquivalent zu R₁·R₄ = R₂·R₃ (Kreuzprodukt). Die Bedingung ergibt sich aus der Maschenregel: Beide Spannungsteiler teilen die Speisespannung im gleichen Verhältnis auf. Anwendungen: Präzisionsmessung von Widerstandsänderungen in Dehnungsmessstreifen, Drucksensoren (z. B. invasive Blutdruckmessung), Temperatursensoren und Biosensoren.',
          hints: [
            'Gleichgewicht: beide Spannungsteiler gleich. R₁/(R₁+R₂) = R₃/(R₃+R₄). Vereinfachen.',
            'Kreuzprodukt: R₁·R₄ = R₂·R₃.',
          ],
          difficulty: 3,
          tags: ['wheatstone-brücke', 'spannungsteiler', 'widerstandsmessung'],
        },
        {
          question: 'Warum modelliert man die Zellmembran als RC-Parallelglied statt als reinen Widerstand?',
          options: [
            'Weil die Membran keine Ionen leitet',
            'Weil die Lipiddoppelschicht Ladungen speichern kann (kapazitiver Anteil) und Ionenkanäle den resistiven Anteil bilden',
            'Weil der Widerstand der Membran konstant ist',
            'Weil Kondensatoren Gleichstrom leiten können',
            'Weil das Hodgkin-Huxley-Modell nur für Kondensatoren gilt',
          ],
          correctIndex: 1,
          explanation: 'Die Zellmembran hat zwei parallel wirkende elektrische Eigenschaften: (1) Die Lipiddoppelschicht ist ein hervorragendes Dielektrikum (εᵣ ≈ 5, Dicke ~7 nm) und wirkt als Kondensator C_m ≈ 1 µF/cm². Sie speichert Ladungen und bestimmt die Reaktionsgeschwindigkeit auf Spannungsänderungen (τ = R_m·C_m). (2) Ionenkanäle bilden parallele Widerstände (Leitfähigkeiten g_Na, g_K etc.) für den Ionenstrom. Ein reiner Widerstand hätte keine frequenzabhängigen Eigenschaften und könnte die Dynamik des Aktionspotentials nicht erklären. Das RC-Modell erlaubt die korrekte Beschreibung des Membranstroms: I = C_m·dU/dt + ΣI_ionisch.',
          hints: [
            'Lipiddoppelschicht: guter Isolator zwischen zwei Leiteroberflächen → Kondensator.',
            'Ionenkanäle lassen Ionen durch → parallele Widerstände/Leitfähigkeiten.',
          ],
          difficulty: 2,
          tags: ['zellmembran', 'rc-modell', 'membrankapazität'],
        },
        {
          question: 'Welche Kapazität hat ein Plattenkondensator mit A = 0,01 m², d = 1 mm und εᵣ = 4?',
          options: [
            'C ≈ 35 pF',
            'C ≈ 354 pF',
            'C ≈ 3,54 nF',
            'C ≈ 35,4 nF',
            'C ≈ 354 nF',
          ],
          correctIndex: 1,
          explanation: 'C = ε₀·εᵣ·A/d = (8,854×10⁻¹² · 4 · 0,01) / (1×10⁻³) = (8,854×10⁻¹² · 0,04) / (10⁻³) = 3,542×10⁻¹³ / 10⁻³ = 3,542×10⁻¹⁰ F ≈ 354 pF. Probe: 354 pF = 0,354 nF. Option A wäre ohne den Faktor εᵣ = 4 (nur ε₀). Option C wäre mit d = 0,1 mm (zehnmal kleiner). Bei biologischen Membranen gilt C_m ≈ 1 µF/cm² — eine typische Zelle (A ≈ 1000 µm²) hat eine Membrankapazität von ca. 10–100 pF.',
          hints: [
            'C = ε₀·εᵣ·A/d. ε₀ = 8,854 × 10⁻¹² F/m. d = 1 mm = 10⁻³ m.',
            'Zähler: 8,854×10⁻¹² × 4 × 0,01 = 3,54×10⁻¹³. Nenner: 10⁻³. Division ergibt C in Farad.',
          ],
          difficulty: 3,
          tags: ['kapazität', 'plattenkondensator', 'permittivität'],
        },
      ],
    },
    {
      id: 'ph-5-04',
      diagram: 'em-spectrum',
      title: 'Magnetismus und elektromagnetische Induktion',
      content: `## Grundlagen des Magnetismus

Magnetismus entsteht durch bewegte elektrische Ladungen (elektrische Ströme). Es gibt keine magnetischen Monopole (im Gegensatz zu elektrischen Ladungen): Magnete haben immer einen Nord- und einen Südpol. Das **Magnetfeld B** [Tesla, T] ist eine Vektorgröße.

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

Das negative Vorzeichen folgt aus der **Lenzschen Regel**: Die induzierte Spannung ist so gerichtet, dass der induzierte Strom der Flussänderung entgegenwirkt (Energieerhaltung). Anwendungen: **Transformator** (Wechselspannung transformieren); **Induktionskochplatte** (Wirbelströme); **Generator** (mechanische → elektrische Energie); **MRT** (empfangende Spulen messen induzierte Spannungen durch präzedierende Protonenspins).

## Selbstinduktion und Induktivität

Eine Spule mit Induktivität **L** [Henry, H] widersteht Stromänderungen durch Selbstinduktion: ε = −L · dI/dt. Gespeicherte Energie: **W = ½·L·I²**. MRT-Gradientenspulen erzeugen ortsabhängige Felder durch schnell schaltende Ströme — die dabei induzierten Wirbelströme begrenzen die Schaltgeschwindigkeit und erzeugen das charakteristische Klopfen des MRT.

## Elektromagnetische Wellen und das EM-Spektrum

Sich zeitlich ändernde elektrische Felder erzeugen Magnetfelder (Maxwell-Gleichungen) und umgekehrt. Elektromagnetische Wellen breiten sich im Vakuum mit Lichtgeschwindigkeit c = 3 × 10⁸ m/s aus: **c = λ · f** und **c = 1/√(ε₀·μ₀)**.

Das **elektromagnetische Spektrum**: Radiowellen (MRT, ~64–300 MHz); Mikrowellen (Diathermie); Infrarot (Wärme); Sichtbares Licht (400–700 nm); UV (Desinfektion, Vitamin-D-Synthese); Röntgen (Diagnostik, 0,01–10 nm); Gamma (PET, Szintigraphie).

**MRT im Detail:** Ein statisches Feld B₀ polarisiert Protonenspins. HF-Pulse (Larmor-Frequenz: f_L = γ·B₀/2π, für ¹H: γ/2π = 42,58 MHz/T) kippen die Magnetisierung. Nach dem Puls präzedieren und relaxieren die Spins — die Präzession induziert via Faraday eine Spannung in der Empfangsspule (das MRT-Signal). Gradientenspulen kodieren den Ort. T₁- und T₂-Relaxationszeiten sind gewebespezifisch und erzeugen den Bildkontrast.`,

      lernziele: [
        'Das Magnetfeld eines geraden Leiters und einer Spule berechnen',
        'Die Lorentz-Kraft auf bewegte Ladungen beschreiben und den Zyklotronradius berechnen',
        'Das Faradaysche Induktionsgesetz und die Lenzsche Regel erklären und anwenden',
        'Das Prinzip der MRT-Bildgebung physikalisch auf Magnetfeld, Larmor-Präzession und Induktion zurückführen',
        'Das elektromagnetische Spektrum und medizinische Anwendungen verschiedener Frequenzbereiche nennen',
      ],
      sections: [
        {
          heading: 'Magnetfeld und Lorentz-Kraft',
          text: 'Magnetfeld B [T] entsteht durch bewegte Ladungen/Ströme. Biot-Savart: B = μ₀·I/(2π·r) für geraden Leiter. Solenoid: B = μ₀·μᵣ·n·I. Lorentz-Kraft: F = q·v×B — senkrecht auf v und B, keine Arbeit. Kreisbahn: r = m·v/(q·B). Anwendungen: Massenspektrometrie (r → Masse), Zyklotron (PET-Isotope), MRT (B₀ = 1,5–7 T).',
          merksatz: 'Lorentz-Kraft: F = q·v×B, senkrecht auf v und B → Kreisbahn. r = m·v/(q·B).',
        },
        {
          heading: 'Elektromagnetische Induktion',
          text: 'Faraday: ε = −N·dΦ/dt. Lenzsche Regel: induzierter Strom wirkt der Flussänderung entgegen. Transformator: U₁/U₂ = N₁/N₂. Generator: mechanische → elektrische Energie. MRT: präzedierende Protonenspins induzieren Signal in Empfangsspule (Faraday). Gradientenspulen schalten schnell → Wirbelströme → Klopfen. Selbstinduktion L: ε = −L·dI/dt; W = ½·L·I².',
          merksatz: 'Faraday: ε = −N·dΦ/dt. Lenz: induzierter Strom hemmt seine Ursache.',
        },
        {
          heading: 'MRT und elektromagnetisches Spektrum',
          text: 'MRT: B₀ polarisiert ¹H-Spins. Larmor-Frequenz: f_L = γ·B₀/2π (bei 1,5 T: ~64 MHz). HF-Puls kippt Magnetisierung. Relaxation (T₁, T₂) gewebespezifisch → Bildkontrast. Gradientenspulen: Ortscodierung. EM-Spektrum: Radiowellen (MRT) → Mikrowellen → IR → sichtbar → UV → Röntgen → Gamma. Alle breiten sich mit c = 3×10⁸ m/s aus (c = λ·f).',
          merksatz: 'c = λ·f = 3×10⁸ m/s. Larmor: f_L = γ·B₀/2π. MRT bei 1,5 T: f ≈ 64 MHz (Radiowelle).',
        },
        {
          heading: 'Biomagnetismus und klinische Anwendungen',
          text: 'Biologische Ströme erzeugen schwache Magnetfelder: Das Herz erzeugt ~10⁻¹⁰ T (MCG, Magnetkardiographie), das Gehirn ~10⁻¹³ T (MEG, Magnetenzephalographie). Gemessen mit SQUID-Sensoren (superconducting quantum interference devices) bei 4 K. MCG/MEG sind strahlungsfrei und zeitlich hochauflösend. Transkranielle Magnetstimulation (TMS): Kurze starke Magnetfeldpulse (Faraday-Induktion) depolarisieren kortikale Neuronen nicht-invasiv — therapeutisch bei Depression.',
          merksatz: 'MEG: ~10⁻¹³ T (Gehirn). MCG: ~10⁻¹⁰ T (Herz). Messung mit SQUID-Sensoren. TMS: Magnetpuls → Nervenreiz.',
        },
      ],
      merksätze: [
        'Magnetfeld gerader Leiter: B = μ₀·I/(2π·r). Rechte-Hand-Regel für Richtung.',
        'Solenoid: B = μ₀·μᵣ·n·I — im Innern homogen.',
        'Lorentz-Kraft: F = q·v×B — senkrecht auf v und B, keine Arbeit.',
        'Zyklotronradius: r = m·v/(q·B) — Prinzip von Massenspektrometer und Zyklotron.',
        'Faraday: ε = −N·dΦ/dt — Flussänderung induziert Spannung.',
        'Lenzsche Regel: induzierter Strom wirkt Ursache entgegen (Energieerhaltung).',
        'Selbstinduktion: ε = −L·dI/dt. Energie: W = ½·L·I².',
        'c = λ·f = 3×10⁸ m/s — gilt für alle EM-Wellen im Vakuum.',
        'Larmor-Frequenz: f_L = γ·B₀/2π — bei 1,5 T für ¹H: ~64 MHz.',
        'TMS: Magnetfeldpuls induziert (Faraday) Strom im Kortex → Neuronenreizung.',
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: 'Erläutern Sie das physikalische Prinzip der Magnetresonanztomographie (MRT). Gehen Sie dabei auf das statische Magnetfeld, die Larmor-Präzession, HF-Pulse, Relaxation und die Signaldetektion via Faraday-Induktion ein.',
        answer: `1. Statisches Hauptmagnetfeld B₀ (1,5–7 T): Supraleitende Solenoide (Nb-Ti, 4 K) erzeugen ein starkes, homogenes Feld. Wasserstoffkerne (¹H-Protonen) mit Kernspin 1/2 können sich parallel oder antiparallel zu B₀ ausrichten. Bei Körpertemperatur ist die Parallelausrichtung (niedrigere Energie) leicht bevorzugt → netto-Magnetisierung M₀ parallel zu B₀.

2. Larmor-Präzession: Die Magnetisierung M präzediert um B₀ mit der Larmor-Frequenz: f_L = γ·B₀/(2π). Für ¹H: γ/2π = 42,58 MHz/T. Bei 1,5 T: f_L ≈ 64 MHz (Radiowellenbereich); bei 3 T: ~128 MHz.

3. HF-Anregungspuls: Ein Hochfrequenzpuls mit genau f_L (Resonanzbedingung) kippt M aus der z-Achse in die xy-Ebene (90°-Puls). Nach dem Puls präzediert M in der xy-Ebene — dies ist das detektierbare Signal.

4. Relaxation (T₁ und T₂): T₁ (Spin-Gitter-Relaxation): M kehrt längs zur z-Achse zurück (Wiederaufbau von M_z). T₂ (Spin-Spin-Relaxation): M_xy zerfällt durch Dephasierung (destruktive Interferenz der Spins). Beide Zeiten sind gewebespezifisch (z. B. Fett: T₁ kurz → hell in T₁-Bild; Wasser: T₂ lang → hell in T₂-Bild) und erzeugen den diagnostischen Kontrast.

5. Signaldetektion (Faraday-Induktion): Die präzedierende Quermagnetisierung M_xy induziert nach Faraday (ε = −dΦ/dt) in den Empfangsspulen eine Wechselspannung mit f = f_L. Dieses freie Induktionszerfallssignal (FID) wird fouriertransformiert → Frequenzspektrum → Ortscodierung durch Gradientenspulen → Bild.`,
      },
      klinischerBezug: 'Die Magnetresonanztomographie (MRT) nutzt das Faradaysche Induktionsgesetz zur Signaldetektion: Präzedierende Protonenspins induzieren in Empfangsspulen eine messbare Wechselspannung — ohne ionisierende Strahlung, mit hervorragenden Weichteilkontrasten. Transkranielle Magnetstimulation (TMS) induziert durch kurze Magnetfeldpulse (Faraday) elektrische Ströme in kortikalen Neuronen und ermöglicht so nicht-invasive Hirnstimulation zur Behandlung von Depression und zur Kartierung kortikaler Areale. Das Elektrokardiogramm (EKG) misst elektrische Potentiale; das Magnetkardiogramm (MCG) erfasst direkt das durch Herzströme erzeugte Magnetfeld (~10⁻¹⁰ T) mit SQUID-Sensoren — strahlungsfrei und hochempfindlich.',
      selfTest: [
        {
          question: 'Ein Proton (m = 1,67 × 10⁻²⁷ kg, q = 1,6 × 10⁻¹⁹ C) bewegt sich mit v = 10⁶ m/s senkrecht in ein Magnetfeld B = 0,5 T. Wie groß ist der Zyklotronradius?',
          options: [
            'r ≈ 0,21 mm',
            'r ≈ 2,1 cm',
            'r ≈ 21 mm',
            'r ≈ 210 µm',
            'r ≈ 2,1 m',
          ],
          correctIndex: 1,
          explanation: 'r = m·v/(q·B) = (1,67×10⁻²⁷ × 10⁶) / (1,6×10⁻¹⁹ × 0,5) = 1,67×10⁻²¹ / (8×10⁻²⁰) = 0,02088 m ≈ 2,1 cm. Dieses Prinzip nutzt das Zyklotron: Protonen werden durch wechselnde elektrische Felder beschleunigt und durch ein Magnetfeld auf Kreisbahnen gehalten. Mit steigender Geschwindigkeit wächst der Radius → spiralförmige Bahn nach außen. Bei ausreichend hoher Energie werden Protonen ausgekoppelt und für PET-Isotopen-Produktion (z. B. ¹⁸F) genutzt.',
          hints: [
            'r = m·v/(q·B). Setze alle Werte ein. Achte auf Zehnerpotenzen.',
            'Zähler: 1,67×10⁻²⁷ × 10⁶ = 1,67×10⁻²¹. Nenner: 1,6×10⁻¹⁹ × 0,5 = 8×10⁻²⁰.',
          ],
          difficulty: 2,
          tags: ['zyklotronradius', 'lorentz-kraft', 'magnetfeld'],
        },
        {
          question: 'Was beschreibt die Lenzsche Regel im Zusammenhang mit der elektromagnetischen Induktion?',
          options: [
            'Der induzierte Strom hat immer die gleiche Richtung wie der primäre Strom',
            'Der induzierte Strom wirkt der Ursache seiner Entstehung (der Flussänderung) entgegen',
            'Die induzierte Spannung ist proportional zum Magnetfeld (nicht zu seiner Änderung)',
            'Induktion tritt nur bei supraleitenden Materialien auf',
            'Die induzierte Spannung ist direkt proportional zur Induktivität L',
          ],
          correctIndex: 1,
          explanation: 'Die Lenzsche Regel ist eine Formulierung der Energieerhaltung für elektromagnetische Induktion: Der durch eine Flussänderung induzierte Strom erzeugt seinerseits ein Magnetfeld, das der ursprünglichen Flussänderung entgegenwirkt. Das negative Vorzeichen im Faradayschen Gesetz (ε = −dΦ/dt) formalisiert dies. Konsequenz: Um den Fluss durch eine Spule zu erhöhen, muss gegen die Rückwirkung (induzierte Gegenkraft) Arbeit verrichtet werden — Energie wird in der Spule gespeichert (W = ½·L·I²). Dies erklärt, warum Gradientenspulen im MRT durch das schnelle Schalten Wirbelströme induzieren, die das Schalten bremsen.',
          hints: [
            'Das Minuszeichen in ε = −N·dΦ/dt steht für die Richtung. Was bedeutet das physikalisch?',
            'Lenz: Induktion ist immer bremsend — sie wirkt der Ursache entgegen.',
          ],
          difficulty: 1,
          tags: ['lenzsche-regel', 'induktion', 'energieerhaltung'],
        },
        {
          question: 'Bei welcher Larmor-Frequenz präzedieren ¹H-Protonen in einem MRT-Gerät mit B₀ = 3 T? (γ/2π = 42,58 MHz/T)',
          options: [
            '42,58 MHz',
            '64 MHz',
            '127,74 MHz',
            '300 MHz',
            '14,2 MHz',
          ],
          correctIndex: 2,
          explanation: 'f_L = (γ/2π) · B₀ = 42,58 MHz/T × 3 T = 127,74 MHz ≈ 128 MHz. Diese Frequenz liegt im UKW-Radiobereich. Bei 1,5 T: f_L ≈ 64 MHz; bei 7 T: f_L ≈ 298 MHz. Die Resonanzbedingung (HF-Puls muss genau f_L haben) ist der Grund für den Begriff "Resonanz" in der Magnetresonanztomographie. Hochfeldgeräte (7 T) arbeiten im UHF-Bereich und haben besseres Signal-Rausch-Verhältnis, aber stärkere HF-Absorption im Gewebe (SAR-Limit).',
          hints: [
            'f_L = (γ/2π) · B₀. Multipliziere den gegebenen Wert mit B₀ = 3 T.',
            '42,58 MHz/T × 3 T = ?',
          ],
          difficulty: 1,
          tags: ['larmor-frequenz', 'mrt', 'kernspinresonanz'],
        },
        {
          question: 'Welcher Effekt erklärt das charakteristische Klopfen und Hämmern während einer MRT-Untersuchung?',
          options: [
            'Magnetostriktion der supraleitenden Spule bei 4 K',
            'Lorentz-Kraft auf stromführende Gradientenspulen im starken Hauptmagnetfeld B₀',
            'Kavitation durch starke Schallwellen',
            'Thermische Ausdehnung der Kühlröhren bei Heliumzufuhr',
            'Resonanzschwingungen des Patienten im Magnetfeld',
          ],
          correctIndex: 1,
          explanation: 'Die Gradientenspulen (x, y, z) überlagern dem statischen Feld B₀ schwache ortsabhängige Felder zur Ortscodierung. Beim Ein- und Ausschalten dieser Gradientenströme (I, wechselnd) erfährt die stromführende Spule eine Lorentz-Kraft: F = I·L×B₀. Da B₀ sehr stark ist (1,5–7 T), entstehen erhebliche mechanische Kräfte auf die Spulenleiter — Vibrationen → Schall (~60–120 dB). Deshalb werden MRT-Patienten mit Gehörschutz versehen. Neuere Sequenzen (Silent Scan) modulieren die Gradienten sanfter, um die Lärmentwicklung zu reduzieren.',
          hints: [
            'In einem starken Magnetfeld: Was passiert mit einem stromdurchflossenen Leiter? (F = I·L×B)',
            'Gradientenspulen werden schnell ein- und ausgeschaltet → wechselnde Kraft → Vibration → Schall.',
          ],
          difficulty: 3,
          tags: ['mrt-klopfen', 'lorentz-kraft', 'gradientenspulen'],
        },
        {
          question: 'Ein Transformator hat 200 Windungen in der Primärspule und 2000 in der Sekundärspule. Bei 230 V Primärspannung: Welche Sekundärspannung ergibt sich (idealer Transformator)?',
          options: [
            '23 V',
            '230 V',
            '2300 V',
            '460 V',
            '115 V',
          ],
          correctIndex: 2,
          explanation: 'Für einen idealen Transformator gilt: U₁/U₂ = N₁/N₂. Umgestellt: U₂ = U₁ · N₂/N₁ = 230 V · 2000/200 = 230 × 10 = 2300 V. Das Übersetzungsverhältnis N₂/N₁ = 10 → Hochspannungstransformator. Die Leistung bleibt bei idealem Transformator konstant: P = U₁·I₁ = U₂·I₂. Wenn die Spannung um Faktor 10 steigt, sinkt der Strom um Faktor 10. Anwendung in der Medizin: Transformatoren in der Hochspannungsversorgung von Röntgengeräten, galvanische Trennung von Patientenkreisen (Sicherheitstransformator, IEC 60601).',
          hints: [
            'U₁/U₂ = N₁/N₂. Umstellen: U₂ = U₁ · (N₂/N₁).',
            '230 V × (2000/200) = 230 × 10 = ?',
          ],
          difficulty: 1,
          tags: ['transformator', 'induktion', 'windungszahl'],
        },
        {
          question: 'Die Transkranielle Magnetstimulation (TMS) nutzt welches physikalische Prinzip zur Nervenreizung?',
          options: [
            'Direkte Magnetkraft (Lorentz-Kraft) auf Neuronen-Ionenkanäle',
            'Elektromagnetische Induktion (Faraday): Magnetfeldpuls induziert elektrischen Strom im Kortex',
            'Thermische Aktivierung durch Joulesche Wärme',
            'Resonanzabsorption von Radiowellen durch Protonen',
            'Kapazitive Kopplung über die Schädelkalotte',
          ],
          correctIndex: 1,
          explanation: 'TMS nutzt das Faradaysche Induktionsgesetz: Eine Spule über dem Schädel erzeugt einen kurzen (~100 µs), sehr starken Magnetfeldpuls (dB/dt bis zu 10⁴ T/s). Nach Faraday (ε = −dΦ/dt) wird dadurch ein elektrisches Feld im darunterliegenden Kortexgewebe induziert. Dieses Feld treibt einen elektrischen Strom durch die Neuronen — ausreichend stark (~1–2 V/m), um Aktionspotentiale auszulösen. Vorteil gegenüber direkter elektrischer Stimulation: kein schmerzhafter Hautstrom, nicht-invasiv. TMS wird therapeutisch bei therapieresistenter Depression eingesetzt (rTMS) und in der Forschung zur Kartierung kortikaler Areale.',
          hints: [
            'TMS: Magnetspule erzeugt schnell wechselndes Magnetfeld. Welches Gesetz verbindet ΔB mit einem elektrischen Feld?',
            'Faraday: Ein zeitlich veränderliches Magnetfeld induziert ein elektrisches Feld — auch ohne Leiter.',
          ],
          difficulty: 2,
          tags: ['tms', 'faraday', 'neurostimulation'],
        },
        {
          question: 'Welche Aussage zum elektromagnetischen Spektrum in der Medizin ist korrekt?',
          options: [
            'MRT nutzt Röntgenstrahlen; Röntgendiagnostik nutzt Radiowellen',
            'MRT nutzt Radiowellen (~64–300 MHz); Röntgendiagnostik nutzt ionisierende Strahlung (0,01–10 nm Wellenlänge)',
            'UV-Strahlung ist nicht ionisierend und ungefährlich für die DNA',
            'Infrarotstrahlung hat höhere Energie als sichtbares Licht',
            'PET verwendet ausschließlich sichtbares Licht zur Bildgebung',
          ],
          correctIndex: 1,
          explanation: 'MRT basiert auf Radiowellen: die Larmor-Frequenz für ¹H liegt bei 64 MHz (1,5 T) bis 298 MHz (7 T) — nicht ionisierend, biologisch unbedenklich bei zugelassenen SAR-Werten. Röntgendiagnostik (Rx, CT) nutzt ionisierende Strahlung mit Wellenlängen von 0,01–10 nm und Photonenenergien über 12 keV — kann DNA direkt schädigen (Doppelstrangbrüche). UV-Strahlung (100–400 nm) ist teilweise ionisierend (UV-C) und kann DNA durch Thymindimer-Bildung schädigen → Karzinogenese. Im EM-Spektrum nimmt die Energie mit sinkender Wellenlänge zu (E = h·f = h·c/λ): Gamma > Röntgen > UV > sichtbar > IR > Mikrowellen > Radio.',
          hints: [
            'MRT = Magnetresonanz → Resonanzfrequenz für ¹H bei 1,5 T ≈ 64 MHz → Radiofrequenz.',
            'Ionisierende Strahlung: E über 12 eV → UV-C, Röntgen, Gamma. MRT: Radiowellen → nicht ionisierend.',
          ],
          difficulty: 2,
          tags: ['em-spektrum', 'radiowellen', 'ionisierende-strahlung'],
        },
        {
          question: 'Welchen T₁- vs. T₂-Bildkontrast würde man für freies Wasser (z. B. Liquor) im MRT erwarten?',
          options: [
            'Kurzes T₁ (hell in T₁), kurzes T₂ (dunkel in T₂)',
            'Kurzes T₁ (hell in T₁), langes T₂ (hell in T₂)',
            'Langes T₁ (dunkel in T₁), kurzes T₂ (dunkel in T₂)',
            'Langes T₁ (dunkel in T₁), langes T₂ (hell in T₂)',
            'T₁ = T₂ (isointens in beiden Gewichtungen)',
          ],
          correctIndex: 3,
          explanation: 'Freies Wasser (z. B. Liquor cerebrospinalis, Zysten, Ödeme) hat charakteristisch: langes T₁ (Protonen in freiem Wasser haben wenig Wärmeaustausch mit der Umgebung → langsame Längsrelaxation → nach kurzer Repetitionszeit wenig Signal → dunkel in T₁-Bild) und langes T₂ (freie Wassermoleküle bewegen sich schnell → wenig lokale Feldinhomogenitäten → langsame Transversalrelaxation → viel Signal bleibt bei langer Echozeit → hell in T₂-Bild). Fett hat kurzes T₁ (hell in T₁) und kurzes T₂. Diese Kontrastverhältnisse sind die Basis der MRT-Diagnostik: T₂-Wichtung zeigt Ödeme, Entzündungen, Liquor hell; T₁ zeigt Fett/Gadolinium-Anreicherung hell.',
          hints: [
            'Freies Wasser: molekulare Beweglichkeit hoch → langsame Relaxation in beide Richtungen.',
            'Langes T₁ → wenig Signal in T₁-Bild (dunkel). Langes T₂ → viel Signal in T₂-Bild (hell).',
          ],
          difficulty: 3,
          tags: ['mrt', 't1-t2-kontrast', 'relaxation'],
        },
      ],
    },
  ],
};
