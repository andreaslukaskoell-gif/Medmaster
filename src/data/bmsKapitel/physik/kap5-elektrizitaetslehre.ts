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
      title: 'Elektrische Ladung, Feld und Coulomb-Gesetz',
      content: `Elektrische Ladung ist eine fundamentale Eigenschaft der Materie. Es gibt zwei Arten: positive Ladung (Protonen) und negative Ladung (Elektronen). Gleiche Ladungen stoßen sich ab, ungleiche ziehen sich an. Die Elementarladung e = 1,602 × 10⁻¹⁹ C ist die kleinste frei vorkommende Ladung — alle beobachtbaren Ladungen sind ganzzahlige Vielfache davon (Ladungsquantisierung). Die SI-Einheit der Ladung ist Coulomb (C); 1 C = Ladung von etwa 6,24 × 10¹⁸ Elektronen.

Das Coulombsche Gesetz beschreibt die Kraft zwischen zwei ruhenden Punktladungen q₁ und q₂ im Abstand r: F = k·q₁·q₂/r², wobei k = 1/(4πε₀) = 8,99 × 10⁹ N·m²/C² die Coulombkonstante ist. Die Analogie zum Gravitationsgesetz ist auffällig — beide gehorchen dem Abstandsquadratgesetz. Der Unterschied: Die Coulombkraft kann abstoßend oder anziehend sein; die Gravitationskraft ist immer anziehend. Und: Die Coulombkraft ist etwa 10³⁶-mal stärker als die Gravitation — weshalb elektromagnetische Wechselwirkungen die Chemie (und damit die Biologie) dominieren.

Das elektrische Feld E ist eine Vektorgröße, die jedem Raumpunkt zugeordnet ist und die Kraft auf eine Probeladung q₀ angibt: F = q₀·E, also E = F/q₀ [N/C = V/m]. Elektrische Feldlinien verlaufen von Plus nach Minus und stehen immer senkrecht auf leitenden Oberflächen. Das elektrische Feld einer Punktladung Q: E = k·Q/r². In einem Plattenkondensator (zwei parallele Platten) ist das Feld homogen: E = U/d, wobei U die Spannung und d der Plattenabstand ist. Ein starkes homogenes elektrisches Feld wird genutzt, um Proteine in der Gelelektrophorese der Größe nach zu trennen.

Das elektrische Potential φ ist die potenzielle Energie einer Probeladung q₀ pro Einheitsladung: φ = E_pot/q₀ [V = J/C]. Die elektrische Spannung U = φ₁ − φ₂ ist die Potentialdifferenz zwischen zwei Punkten — sie gibt an, wie viel Arbeit pro Ladungseinheit vom Potential φ₁ zu φ₂ verrichtet wird (oder gewonnen werden kann). Für eine Punktladung Q: φ = k·Q/r. In Leitern im elektrostatischen Gleichgewicht ist das Potential überall gleich (Äquipotenzialfläche = Leiteroberfläche).

Der Gaußsche Satz verknüpft das elektrische Feld mit der eingeschlossenen Ladung: ΦE = ∮E·dA = Q_innen/ε₀. Er erlaubt, das Feld symmetrischer Ladungsverteilungen (Kugel, Zylinder, Platte) einfach zu berechnen. In der Medizin begegnet uns die Elektrostatik beim EKG: Das Herz als elektrischer Dipol erzeugt ein elektrisches Feld, das sich im ganzen Körper ausbreitet. An der Körperoberfläche gemessene Potentiale (Spannungen von 0,1–2 mV) erlauben Rückschlüsse auf die elektrische Aktivität des Herzens.`,
      lernziele: [
        'Coulombsches Gesetz formulieren und anwenden',
        'Elektrisches Feld und Potential berechnen',
        'Elektrische Feldlinien und Äquipotenzialflächen beschreiben',
        'Gaußschen Satz qualitativ erklären',
      ],
      sections: [
        {
          heading: 'Elektrische Ladung und Coulombgesetz',
          text: 'Elementarladung e = 1,602 × 10⁻¹⁹ C. Coulombkraft: F = k·q₁·q₂/r² mit k = 8,99 × 10⁹ N·m²/C². Abstoßung: gleiche Ladungen (q₁·q₂ > 0); Anziehung: ungleiche Ladungen (q₁·q₂ < 0). Ladungserhaltung: Gesamtladung eines abgeschlossenen Systems bleibt konstant. Elektrostatische Entladung: Gewitterblitz — Ladungstrennung in Gewitterwolke bis U ≈ 10⁸ V. Defibrillator: Kondensator (300–400 J) entlädt sich durch Brust des Patienten → Depolarisation des Herzens.',
          merksatz: 'F_Coulomb = k·q₁·q₂/r² — analoges Abstandsquadratgesetz wie Gravitation, aber viel stärker',
        },
        {
          heading: 'Elektrisches Feld und Potential',
          text: 'Elektrisches Feld: E = F/q₀ [V/m]. Für Punktladung: E = k·Q/r². Elektrisches Potential: φ = k·Q/r [V]. Spannung: U = Δφ [V]. In Leitern: E = 0 im Inneren (Faradayscher Käfig); φ = const an der Oberfläche. Plattenkondensator: E = U/d; homogenes Feld. Klinisch: EKG misst Potentialdifferenzen (0,1–2 mV) an Körperoberfläche; EMG (Elektromyographie) misst Muskelaktivität; EEG Hirnaktivität (5–100 μV).',
        },
        {
          heading: 'Medizinische Elektrodiagnostik',
          text: 'EKG-Grundlagen: Herz als elektrischer Dipol mit wechselnder Orientierung im Herzrhythmus. 12-Kanal-EKG: 6 Extremitätenableitungen (I, II, III, aVR, aVL, aVF) + 6 Brustwandableitungen (V1–V6). Normales EKG: P-Welle (Vorhof), PQ-Zeit (AV-Überleitung), QRS (Kammer), T-Welle (Repolarisation). Typische Amplituden: P ≈ 0,1–0,2 mV; R-Zacke ≈ 1–2 mV. Frequenz 60–100/min. Pathologie: Infarktzeichen (ST-Hebung), Rhythmusstörungen, Blockbilder.',
        },
      ],
      merksätze: [
        'Coulombgesetz: F = k·q₁·q₂/r²; k = 8,99 × 10⁹ N·m²/C²',
        'E = F/q₀ [V/m]; φ = k·Q/r [V]; U = Δφ [V]',
        'EKG misst elektrische Potentialdifferenzen des Herzens an der Körperoberfläche',
      ],
      altfrage: {
        question: 'Zwei Protonen (Ladung je e = 1,6 × 10⁻¹⁹ C) befinden sich in einem Abstand von 1 nm (10⁻⁹ m) voneinander. Wie groß ist die elektrostatische Abstoßungskraft? (k = 9 × 10⁹ N·m²/C²)',
        answer: 'F = k·e²/r² = 9 × 10⁹ × (1,6 × 10⁻¹⁹)² / (10⁻⁹)² = 9 × 10⁹ × 2,56 × 10⁻³⁸ / 10⁻¹⁸ = 9 × 2,56 × 10⁻²⁹⁺¹⁸ = 23,04 × 10⁻¹¹ = 2,3 × 10⁻¹⁰ N. Dies entspricht etwa 230 pN — scheinbar klein, aber auf Molekülebene enorm. Zum Vergleich: Gravitationskraft zwischen zwei Protonen im selben Abstand: F_G ≈ 1,87 × 10⁻⁴⁶ N — die Coulombkraft ist 10³⁶-mal stärker!',
      },
      klinischerBezug: 'Das EKG (Elektrokardiogramm) ist das wichtigste elektrodiagnostische Verfahren der Medizin. Elektrische Aktivierungswellen wandern als Depolarisationsfront durch den Herzmuskel und erzeugen ein sich änderndes elektrisches Dipolfeld. Dieses Feld breitet sich im leitfähigen Körpergewebe aus und kann an der Körperoberfläche als Potentialunterschied (mV-Bereich) gemessen werden. ST-Strecken-Hebung im EKG zeigt akute myokardiale Ischämie (STEMI): Verletzte Herzmuskelzellen verlieren ihr Ruhemembranpotential, was zu einem Strom (injury current) führt, der die ST-Hebung erzeugt. Der Defibrillator nutzt das umgekehrte Prinzip: Hochspannungsimpuls (200–360 J) depolarisiert alle Herzmuskelzellen gleichzeitig und unterbricht Kammerflimmern.',
      selfTest: [
        {
          question: 'Zwei Ladungen q₁ = 2 μC und q₂ = −3 μC sind 10 cm entfernt. Wie verhalten sie sich?',
          options: [
            'Sie stoßen sich ab, da beide Ladungen haben',
            'Sie stoßen sich ab, da die Ladungen unterschiedliche Vorzeichen haben',
            'Sie ziehen sich an, da die Ladungen unterschiedliche Vorzeichen haben',
            'Sie üben keine Kraft aufeinander aus',
            'Sie ziehen sich an, da q₂ größer als q₁ ist',
          ],
          correctIndex: 2,
          explanation: 'Ungleiche Ladungen (positive und negative) ziehen sich an. q₁·q₂ = 2 × (−3) = −6 μC² < 0 → anziehend. Die Kraftgröße: F = k·|q₁|·|q₂|/r² = 9×10⁹ × 2×10⁻⁶ × 3×10⁻⁶ / (0,1)² = 9×10⁹ × 6×10⁻¹²/0,01 = 5,4 N.',
          hints: ['Merke: Plus und Minus ziehen sich an; gleichnamige Ladungen stoßen sich ab.', 'q₁ = +2 μC (positiv), q₂ = −3 μC (negativ) → anziehend.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welche Einheit hat das elektrische Potential?',
          options: ['N/C', 'V (Volt)', 'A (Ampere)', 'J (Joule)', 'T (Tesla)'],
          correctIndex: 1,
          explanation: 'Das elektrische Potential hat die Einheit Volt (V = J/C = N·m/C). Spannung U = Δφ ist die Potentialdifferenz. 1 Volt entspricht einer Energie von 1 Joule pro Coulomb Ladung. Das EKG misst Potentiale in mV; Aktionspotentiale in Nervenzellen: 70 mV; Herzdefibrillator: mehrere kV.',
          hints: ['Potential = Energie pro Ladung: φ = E_pot/q [J/C] = [V].', 'Volt (V) = J/C — Energie pro Coulomb.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Im Inneren eines Faradayschen Käfigs (leitender Hohlraum):',
          options: [
            'Ist das elektrische Feld doppelt so stark wie außen',
            'Ist das elektrische Feld null',
            'Ist das elektrische Potential null',
            'Ist die Ladungsverteilung gleichmäßig',
            'Treten konstruktive Interferenzen auf',
          ],
          correctIndex: 1,
          explanation: 'Im Inneren eines leitenden Hohlraums (Faradayscher Käfig) ist das elektrische Feld E = 0. Äußere elektrische Felder werden vollständig abgeschirmt. Das Potential im Inneren ist konstant (nicht notwendigerweise null). Anwendung: Abschirmung elektronischer Geräte, Blitzschutz in Gebäuden, Schutz von Patienten vor elektrischen Störfeldern im OP.',
          hints: ['Faradayscher Käfig = leitender Hohlraum. Im Leiter gilt E = 0 im Gleichgewicht.', 'Freie Elektronen verteilen sich so, dass das Innenfeld aufgehoben wird.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Das EKG misst Spannungen in welcher Größenordnung?',
          options: ['Volt (V)', 'Millivolt (mV)', 'Mikrovolt (μV)', 'Kilovolt (kV)', 'Nanovolt (nV)'],
          correctIndex: 1,
          explanation: 'Das EKG misst Potentialdifferenzen in Millivolt (mV). Typische Amplituden: P-Welle 0,1–0,2 mV; R-Zacke 1–2 mV; T-Welle 0,1–0,5 mV. Das EEG misst kleinere Amplituden (10–100 μV). Aktionspotentiale haben Amplituden von 70–110 mV (intrazellulär). Defibrillator: Spannung von einigen kV.',
          hints: ['EKG-Normalwert der R-Zacke: etwa 1 mV. Das lässt sich gut mit mV assoziieren.', 'mV = 10⁻³ V; typische EKG-Amplituden: 0,1–2 mV.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Wie ändert sich die Coulombkraft, wenn der Abstand zwischen zwei Ladungen verdoppelt wird?',
          options: [
            'Die Kraft halbiert sich',
            'Die Kraft wird viermal kleiner',
            'Die Kraft verdoppelt sich',
            'Die Kraft wird viermal größer',
            'Die Kraft bleibt gleich',
          ],
          correctIndex: 1,
          explanation: 'F = k·q₁·q₂/r². Wenn r → 2r: F_neu = k·q₁·q₂/(2r)² = k·q₁·q₂/(4r²) = F/4. Die Kraft wird viermal kleiner — Abstandsquadratgesetz! Gleiches gilt für Gravitation und Lichtintensität. Das ist eine fundamentale Eigenschaft des dreidimensionalen Raumes.',
          hints: ['F ~ 1/r² → wenn r verdoppelt, r² vervierfacht, F viertelt.', '(2r)² = 4r² → F = k·q/(4r²) = F_alt/4.'],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ph-5-02',
      title: 'Strom, Widerstand und Ohmsches Gesetz',
      content: `Elektrischer Strom ist die gerichtete Bewegung von Ladungsträgern. In Metallen sind das freie Elektronen, die sich entgegen der konventionellen Stromrichtung bewegen. In Elektrolytlösungen (wie Blut oder Extrazellulärflüssigkeit) bewegen sich sowohl positive als auch negative Ionen. Die Stromstärke I = dQ/dt [Ampere = Coulomb/Sekunde] gibt die Ladungsmenge an, die pro Zeiteinheit durch einen Querschnitt fließt.

Das Ohmsche Gesetz U = R·I ist die fundamentale Beziehung zwischen Spannung, Widerstand und Strom. Ein Ohmscher Widerstand R [Ohm = V/A] ist definiert durch diese proportionale Beziehung — bei konstanter Temperatur. Der Widerstand eines zylindrischen Leiters der Länge L und Querschnittsfläche A mit spezifischem Widerstand ρ [Ohm·m] beträgt: R = ρ·L/A. Gute Leiter haben kleines ρ: Kupfer ρ = 1,72 × 10⁻⁸ Ω·m; Silber ρ = 1,59 × 10⁻⁸ Ω·m. Gute Isolatoren: Glas ρ ≈ 10¹² Ω·m; Luft noch höher. Menschliches Körpergewebe: ρ variiert stark — Blut ρ ≈ 1,5 Ω·m, Fett ρ ≈ 25 Ω·m, Haut ρ ≈ 100–10.000 Ω·m.

Bei der Serienschaltung (Reihenschaltung) von Widerständen fließt durch alle Bauteile derselbe Strom: R_reihe = R₁ + R₂ + R₃ + ... Die Gesamtspannung teilt sich proportional auf. Bei der Parallelschaltung liegt an allen Bauteilen dieselbe Spannung: 1/R_parallel = 1/R₁ + 1/R₂ + ... Der Gesamtwiderstand ist kleiner als der kleinste Einzelwiderstand. Im Körper: Blutgefäße in Reihe erhöhen den Gesamtwiderstand, parallel (kollaterale Gefäße) verringern ihn.

Die elektrische Leistung P = U·I = U²/R = I²·R [Watt] ist die Energie, die pro Zeiteinheit umgesetzt wird. In einem Heizwiderstand wird elektrische Energie in Wärme umgewandelt (Joulesches Gesetz: Q = P·t). Elektrochirurgische Geräte (Elektrokauterisation, HF-Chirurgie) nutzen Hochfrequenzstrom (100 kHz–4 MHz), der im Gewebe eine hohe Leistungsdichte erzeugt und das Gewebe erhitzt bzw. verdampft.

Der Kondensator speichert elektrische Energie in einem elektrischen Feld zwischen zwei Platten: Q = C·U, wobei C [Farad] die Kapazität ist. Energie: E = ½·C·U². Der Defibrillator ist im Wesentlichen ein großer Kondensator (C ≈ 100–200 μF), der auf 2000–5000 V aufgeladen und dann innerhalb von Millisekunden entladen wird. Die gespeicherte Energie: E = ½·C·U² = ½ × 150 × 10⁻⁶ × 3000² = 675 J. Das RC-Glied (Kondensator + Widerstand in Reihe) ist ein Tiefpassfilter: Hochfrequente Signale werden gedämpft; die Zeitkonstante τ = R·C gibt an, wie schnell der Kondensator lädt oder entlädt. RC-Glieder modellieren das Membranpotenzial von Nervenzellen.`,
      lernziele: [
        'Ohmsches Gesetz und Widerstandsberechnung anwenden',
        'Reihen- und Parallelschaltung von Widerständen berechnen',
        'Elektrische Leistung und Joulesches Gesetz berechnen',
        'Kondensator und RC-Zeitkonstante im biologischen Kontext verstehen',
      ],
      sections: [
        {
          heading: 'Ohmsches Gesetz und Widerstand',
          text: 'U = R·I; R [Ω = V/A]. Widerstand Zylinder: R = ρ·L/A. Reihenschaltung: R_ges = R₁ + R₂ + ... Parallelschaltung: 1/R_ges = 1/R₁ + 1/R₂ + ... In Reihe: gleicher Strom, Spannungen addieren sich. Parallel: gleiche Spannung, Ströme addieren sich. Körpergewebe als Widerstand: Haut (trocken) R ≈ 10–100 kΩ; nass: R ≈ 1 kΩ → Sicherheitsgrenzen für Elektrizität im OP. Physiologie: Membranwiderstand R_m und Kapazität C_m der Zellmembran als RC-Glied.',
          merksatz: 'U = R·I — Spannung = Widerstand × Strom (Ohmsches Gesetz)',
        },
        {
          heading: 'Elektrische Leistung und Kondensatoren',
          text: 'Leistung P = U·I = U²/R = I²·R [W]. Joule-Wärme: Q = P·t = I²·R·t. Kondensator: Q = C·U; E_Kond = ½·C·U² [J]. Defibrillator: C ≈ 150 μF, U ≈ 3–5 kV, E = ½ × 150×10⁻⁶ × (3000)² ≈ 675 J. RC-Zeitkonstante: τ = R·C [s]; nach τ: Kondensator auf 63% geladen (oder entladen auf 37%). Herzschrittmacher: Kondensator entlädt sich über Elektroden mit präziser Pulsform (τ = R·C steuerbar).',
        },
        {
          heading: 'Elektrische Sicherheit in der Medizin',
          text: 'Körperwiderstand: Haut trocken ≈ 10–100 kΩ; nass/durchtränkt: 1–5 kΩ; intravenöser Katheter direkt am Herzen: < 50 Ω. Gefährliche Ströme: 1 mA (Wahrnehmung), 10 mA (Loslassgrenze), 100 mA (Kammerflimmern), 1 A (Herzstillstand/Verbrennung). Mikrostrom-Gefahr: Katheter am Herzen leitet kleine Ströme direkt zum Myokard → bereits 10–100 μA können Kammerflimmern auslösen (Makroschock vs. Mikroschock). Erdung von Medizingeräten und galvanische Trennung sind kritische Sicherheitsmaßnahmen.',
        },
      ],
      merksätze: [
        'Ohm: U = R·I; Reihe: R_ges = ΣR; Parallel: 1/R_ges = Σ1/R',
        'Leistung P = U·I = U²/R = I²·R; Kondensator E = ½CU²',
        'Defibrillator: Kondensator 150 μF, 3–5 kV, Entladeenergie 200–400 J',
      ],
      altfrage: {
        question: 'Ein Körper mit Gesamtwiderstand R = 1000 Ω berührt eine 230-V-Steckdose. Welcher Strom fließt, und ist dieser gefährlich?',
        answer: 'I = U/R = 230 V / 1000 Ω = 0,23 A = 230 mA. Dieser Strom ist lebensgefährlich: Bereits 100 mA (0,1 A) können Kammerflimmern auslösen. Durch den feuchten, niederohmigen Körper (nasse Hände) kann der Strom noch höher sein. Die Joule-Wärme: P = I²·R = (0,23)² × 1000 = 52,9 W — in wenigen Sekunden würde erhebliche Verbrennung entstehen. Der FI-Schutzschalter (Fehlerstromschutzschalter) trennt bei > 30 mA (0,03 A) sofort ab.',
      },
      klinischerBezug: 'Herzschrittmacher sind lebensrettende elektrische Geräte. Moderne Herzschrittmacher erzeugen Impulse von 0,1–2 ms Dauer mit 0,5–5 V Amplitude, was Strömen von 0,5–10 mA entspricht. Der Kondensator im Schrittmacher wird mit präziser Zeitkonstante τ = R·C entladen, um eine optimale Reizwirkung zu erzielen. Implantierbare Kardioverter-Defibrillatoren (ICD) kombinieren Herzschrittmacher mit Defibrillator-Funktion: Sie erkennen Kammerflimmern (durch EKG-Analyse) und entladen einen internen Kondensator mit 30–40 J direkt am Herzen — viel effizienter als externe Defibrillation (200–360 J), da der Strom direkt durch das Herzgewebe fließt.',
      selfTest: [
        {
          question: 'Eine Glühlampe mit R = 100 Ω liegt an 230 V. Welche elektrische Leistung nimmt sie auf?',
          options: ['2,3 W', '23 W', '230 W', '529 W', '0,43 W'],
          correctIndex: 3,
          explanation: 'P = U²/R = 230²/100 = 52900/100 = 529 W. Das ist sehr viel für eine Glühlampe — solch hoher Widerstand im Haushalt ist unrealistisch. Eine typische 100-W-Glühbirne hat bei 230 V: R = U²/P = 52900/100 = 529 Ω. Merke: R = U²/P, also R der 100-W-Birne = 529 Ω.',
          hints: ['P = U²/R. Beachte: 230² = 52900.', '52900/100 = 529 W.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Drei Widerstände (10 Ω, 20 Ω, 30 Ω) werden parallel geschaltet. Welcher Gesamtwiderstand entsteht?',
          options: ['60 Ω', '6 Ω', '5,45 Ω', '3,33 Ω', '18 Ω'],
          correctIndex: 2,
          explanation: '1/R_ges = 1/10 + 1/20 + 1/30 = 6/60 + 3/60 + 2/60 = 11/60. R_ges = 60/11 ≈ 5,45 Ω. Bei Parallelschaltung ist der Gesamtwiderstand immer kleiner als der kleinste Einzelwiderstand (< 10 Ω). Jeder neue parallele Pfad bietet dem Strom eine weitere Möglichkeit, zu fließen.',
          hints: ['1/R_ges = 1/R₁ + 1/R₂ + 1/R₃. Gemeinsamer Nenner: 60.', '1/10 = 6/60; 1/20 = 3/60; 1/30 = 2/60. Summe: 11/60 → R_ges = 60/11 ≈ 5,45 Ω.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ist die Zeitkonstante τ eines RC-Glieds?',
          options: [
            'Die Zeit, in der der Kondensator vollständig geladen ist',
            'Die Zeit, in der die Spannung auf 1/e ≈ 37% ihres Anfangswerts gesunken ist',
            'Die Resonanzfrequenz des Schwingkreises',
            'Der Kehrwert der Kapazität',
            'Die maximale Ladezeit des Kondensators',
          ],
          correctIndex: 1,
          explanation: 'τ = R·C [s]. Nach einer Zeitkonstante τ ist die Kondensatorspannung beim Entladen auf e⁻¹ ≈ 37% gesunken (oder beim Laden auf 1 − e⁻¹ ≈ 63% gestiegen). Nach 5τ gilt der Kondensator als vollständig (99,3%) geladen/entladen. τ = R·C hat die Einheit Ω × F = (V/A) × (C/V) = C/A = s.',
          hints: ['τ = R·C. Nach τ Sekunden: Spannung auf 1/e ≈ 37% gesunken.', 'e ≈ 2,718; 1/e ≈ 0,368 ≈ 37%.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Ab welchem Strom kann Wechselstrom (50 Hz) durch den menschlichen Körper Kammerflimmern auslösen?',
          options: ['0,1 mA', '1 mA', '10 mA', '100 mA', '1 A'],
          correctIndex: 3,
          explanation: 'Ungefähr 100 mA Wechselstrom (50 Hz) durch den Brustkorb können Kammerflimmern auslösen. Schwellenwerte: 1 mA = kaum spürbar; 5–10 mA = Loslassgrenze (Muskelkrampf); 10–50 mA = Atemkrämpfe; 100 mA = Kammerflimmern; 1 A = Herzstillstand, schwere Verbrennungen. Gleichstrom ist weniger gefährlich (gilt als 3–5-mal ungefährlicher als Wechselstrom bei gleicher Stärke).',
          hints: ['Merke: 10 mA = Loslassgrenze; 100 mA = Kammerflimmern.', '100 mA = 0,1 A — bei 1000 Ω Körperwiderstand entspricht das 100 V.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welche Energie ist in einem Defibrillator-Kondensator mit C = 150 μF und U = 3000 V gespeichert?',
          options: ['225 J', '450 J', '675 J', '900 J', '2250 J'],
          correctIndex: 2,
          explanation: 'E = ½·C·U² = ½ × 150 × 10⁻⁶ F × (3000 V)² = ½ × 150 × 10⁻⁶ × 9 × 10⁶ = ½ × 1350 = 675 J. Diese Energie wird innerhalb von Millisekunden durch den Brustkorb entladen, um Kammerflimmern zu terminieren. Typische externe Defibrillatoren: 200–360 J; implantierbare ICDs nutzen nur 30–40 J (direkter Herzstrom).',
          hints: ['E = ½·C·U². 3000² = 9 × 10⁶.', '½ × 150 × 10⁻⁶ × 9 × 10⁶ = ½ × 1350 = 675 J.'],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ph-5-03',
      title: 'Kirchhoffsche Gesetze und Schaltkreise',
      content: `Komplexe Schaltkreise mit mehreren Spannungsquellen und Widerständen lassen sich mit den Kirchhoffschen Gesetzen systematisch analysieren. Diese 1845 von Gustav Kirchhoff aufgestellten Regeln sind direkte Konsequenzen der Ladungserhaltung (Knotenregel) und der Energieerhaltung (Maschenregel).

Die Kirchhoffsche Knotenregel (1. Kirchhoffscher Satz) besagt: Die Summe aller eingehenden Ströme an einem Knoten ist gleich der Summe aller ausgehenden Ströme. ΣI_ein = ΣI_aus, oder äquivalent: ΣI = 0 (mit Vorzeichen). Dies folgt direkt aus der Ladungserhaltung — Ladung kann sich nicht im Knoten ansammeln oder verschwinden. Analogie: Wasserfluss im Rohrsystem — was hineinfließt, muss auch abfließen.

Die Kirchhoffsche Maschenregel (2. Kirchhoffscher Satz) besagt: Die Summe aller Spannungen entlang einer geschlossenen Masche ist null. ΣU = 0, oder: ΣU_Quellen = ΣU_Verbraucher. Dies folgt aus der Energieerhaltung — eine Ladung, die einen geschlossenen Weg zurücklegt, gewinnt und verliert insgesamt gleich viel Energie. Analogie: Ein Fluss im Kreislauf — die Gesamthöhenänderung ist null.

Die Wheatstone-Brücke nutzt zwei Spannungsteiler, um unbekannte Widerstände präzise zu messen. Wenn R₁/R₂ = R₃/R₄, fließt kein Strom durch das Brückengalvanometer — die Brücke ist abgeglichen. Diese Methode ermöglicht sehr genaue Widerstandsmessungen (bis ≈ 0,01% Genauigkeit). Medizinische Anwendung: Dehnungsmessstreifen in Kraftmessgeräten (z.B. Blutdruck-Manschetten), Temperaturmessung mit Thermistoren (temperaturabhängiger Widerstand in Wheatstone-Brücke).

Wechselstrom (AC, Alternating Current) wechselt periodisch seine Richtung: I(t) = I₀·sin(ωt). Der Spitzenwert I₀ ist die Amplitude; der Effektivwert I_eff = I₀/√2 ≈ 0,707·I₀ entspricht dem Gleichstromwert, der dieselbe Leistung erzeugt. Hausstrom (230 V, 50 Hz): Spitzenspannung = 230 × √2 ≈ 325 V; 230 V ist der Effektivwert. Im Wechselstromkreis reagieren Kondensatoren und Spulen frequenzabhängig.

Der kapazitive Widerstand (Reaktanz) eines Kondensators im Wechselstromkreis: X_C = 1/(ω·C) = 1/(2π·f·C). Bei hoher Frequenz sinkt X_C → Kondensator leitet Hochfrequenz gut (ist für DC gesperrt). Der induktive Widerstand einer Spule: X_L = ω·L = 2π·f·L. Bei hoher Frequenz steigt X_L → Spule blockiert Hochfrequenz (ist für DC Durchleiter). Diese Eigenschaften nutzt man in Filtern: Tiefpass (RC) lässt tiefe Frequenzen durch; Hochpass (CR) lässt hohe Frequenzen durch. EKG-Verstärker nutzen Bandpassfilter (0,1–100 Hz), um das Herzfrequenzsignal von Gleichspannungsdrift und Hochfrequenzstörungen zu trennen.`,
      lernziele: [
        'Kirchhoffsche Knotenregel und Maschenregel anwenden',
        'Wechselstrom-Grundgrößen (Effektivwert, Spitzenwert, Frequenz) berechnen',
        'Kapazitiver und induktiver Widerstand im Wechselstromkreis berechnen',
        'Wheatstone-Brücke und ihre medizinische Anwendung kennen',
      ],
      sections: [
        {
          heading: 'Kirchhoffsche Gesetze',
          text: 'Knotenregel: ΣI = 0 an jedem Knoten (Ladungserhaltung). Maschenregel: ΣU = 0 in jeder Masche (Energieerhaltung). Anwendung: Für jeden Knoten eine Gleichung, für jede unabhängige Masche eine Gleichung aufstellen → Gleichungssystem lösen. Klinisch analog: Herzminutenvolumen verteilt sich auf parallele Kreisläufe (Lunge, Gehirn, Niere etc.); Knotenregel: HMV_ges = Σ(Organdurchfluss). Wheatstone-Brücke: Abgleich wenn R₁/R₂ = R₃/R₄.',
          merksatz: 'Knotenregel: ΣI = 0 (Ladungserhaltung); Maschenregel: ΣU = 0 (Energieerhaltung)',
        },
        {
          heading: 'Wechselstrom und Wechselstromwiderstände',
          text: 'Wechselstrom: I(t) = I₀·sin(ωt). Effektivwert: I_eff = I₀/√2; U_eff = U₀/√2. Hausstrom: 230 V (eff), 325 V (Spitze), 50 Hz. Kapazitiver Widerstand: X_C = 1/(ωC) — sinkt mit f (Kondensator leitet Hochfrequenz). Induktiver Widerstand: X_L = ωL — steigt mit f (Spule blockiert Hochfrequenz). Tiefpass: Kondensator parallel → kapazitiver Kurzschluss bei hohen f. Hochpass: Kondensator in Reihe → kapazitive Sperre bei niedrigen f.',
        },
        {
          heading: 'Filter und medizinische Elektronik',
          text: 'EKG-Verstärker: Bandpass 0,05–150 Hz. Tief < 0,05 Hz: Potentialdrift durch Elektroden. Hoch > 150 Hz: Muskelartefakte (EMG). EMG-Messung: Bandpass 20–3000 Hz. EEG: Bandpass 0,5–70 Hz. Herzschrittmacher: Sense-Verstärker mit schmalem Bandpass um QRS-Frequenz (10–50 Hz). Bioimpedanzanalyse (BIA): misst Körperzusammensetzung durch frequenzabhängige Impedanz (Fett vs. Wasser vs. Muskel haben unterschiedliche R und C).',
        },
      ],
      merksätze: [
        'Wechselstrom: U_eff = U₀/√2; 230 V (eff) = 325 V (Spitze) bei Hausstrom',
        'X_C = 1/(ωC): Kondensator blockiert Gleichstrom, leitet Hochfrequenz',
        'X_L = ωL: Spule leitet Gleichstrom, blockiert Hochfrequenz',
      ],
      altfrage: {
        question: 'In einer Masche liegen eine Batterie (12 V) und drei Widerstände R₁ = 2 Ω, R₂ = 3 Ω, R₃ = 1 Ω in Reihe. Wie groß ist der Strom? Welche Spannung fällt an R₂ ab?',
        answer: 'Maschenregel: U_Batterie = U_R₁ + U_R₂ + U_R₃. Gesamtwiderstand: R_ges = 2 + 3 + 1 = 6 Ω. Strom: I = U/R_ges = 12/6 = 2 A. Spannung an R₂: U_R₂ = I·R₂ = 2 × 3 = 6 V. Probe: U_R₁ = 4 V, U_R₂ = 6 V, U_R₃ = 2 V; Summe = 12 V = U_Batterie. Korrekt!',
      },
      klinischerBezug: 'Die Bioimpedanzanalyse (BIA) ist eine wichtige klinische Methode zur Bestimmung der Körperzusammensetzung (Fett, Muskelmasse, Wasser). Schwache Wechselströme (50–800 kHz, < 1 mA, völlig sicher) werden durch den Körper geleitet. Fettgewebe hat hohen Widerstand (wenig Wasser), Muskelgewebe hat niedrigen Widerstand (viel Wasser). Durch Messung der frequenzabhängigen Impedanz (Widerstand + Reaktanz) kann der Wassergehalt und die Zusammensetzung berechnet werden. BIA wird genutzt in der Nephrologie (Dialyse-Trockengewicht), Onkologie, Sportmedizin und für die Verlaufskontrolle bei Herzinsuffizienz.',
      selfTest: [
        {
          question: 'Was besagt die Kirchhoffsche Knotenregel?',
          options: [
            'Die Summe aller Widerstände in einem Knoten ist null',
            'Die Summe aller Ströme in einer Masche ist null',
            'Die Summe aller eingehenden Ströme an einem Knoten ist gleich der Summe der ausgehenden Ströme',
            'Die Summe aller Spannungsquellen ist gleich der Summe aller Verbraucher',
            'An jedem Knoten ist die Spannung null',
          ],
          correctIndex: 2,
          explanation: 'Knotenregel: ΣI_ein = ΣI_aus, d.h. was in einen Knoten hineinkommt, kommt auch heraus. Folgt aus Ladungserhaltung. Die Maschenregel sagt: ΣU = 0 in jeder Masche (Energieerhaltung). Knotenregel gilt für Ströme, Maschenregel für Spannungen.',
          hints: ['Knoten = Verzweigungspunkt. Was hineinkommt, muss heraus.', 'Analogie: Wasserfluss — kein Wasser kann verschwinden oder entstehen.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welcher Effektivwert hat Hausstrom mit Spitzenspannung U₀ = 325 V?',
          options: ['163 V', '230 V', '325 V', '460 V', '115 V'],
          correctIndex: 1,
          explanation: 'U_eff = U₀/√2 = 325/1,414 ≈ 230 V. Der Effektivwert ist die äquivalente Gleichspannung, die die gleiche Leistung in einem Widerstand erzeugt. Europäischer Hausstrom: 230 V (eff), 325 V (Spitze), 50 Hz. USA: 120 V (eff), 170 V (Spitze), 60 Hz.',
          hints: ['U_eff = U₀/√2. √2 ≈ 1,414.', '325/1,414 ≈ 230 V.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Ein Kondensator mit C = 10 μF liegt an einem Wechselstrom mit f = 1000 Hz. Wie groß ist der kapazitive Widerstand X_C?',
          options: ['6,28 Ω', '15,9 Ω', '63 mΩ', '1 Ω', '159 Ω'],
          correctIndex: 1,
          explanation: 'X_C = 1/(2π·f·C) = 1/(2π × 1000 × 10 × 10⁻⁶) = 1/(2π × 0,01) = 1/0,0628 ≈ 15,9 Ω. Bei höherer Frequenz wird X_C kleiner — der Kondensator bietet weniger Widerstand für schnell wechselnde Ströme. Bei f → 0 (Gleichstrom) wird X_C → ∞ (Kondensator sperrt DC).',
          hints: ['X_C = 1/(2π·f·C). Berechne 2π × 1000 × 10⁻⁵.', '2π × 10⁻² ≈ 0,0628; X_C = 1/0,0628 ≈ 15,9 Ω.'],
          difficulty: 3,
          tags: [],
        },
        {
          question: 'Welchen Frequenzbereich filtert ein EKG-Verstärker typischerweise?',
          options: [
            '0–1 Hz (nur DC)',
            '0,05–150 Hz (Bandpass)',
            '1 kHz–1 MHz (Hochfrequenz)',
            '0–10 MHz (alles)',
            '100–10000 Hz (mittlere Frequenzen)',
          ],
          correctIndex: 1,
          explanation: 'EKG-Verstärker verwenden Bandpassfilter 0,05–150 Hz. Unterhalb von 0,05 Hz: Gleichspannungsdrift durch Elektrodenpolarisation. Oberhalb von 150 Hz: hochfrequente Muskelartefakte (EMG-Kontamination). Das Herzsignal liegt im Bereich 0,05–40 Hz; höhere Frequenzen verbessern die QRS-Darstellung. Ambulantes EKG (Holter): 0,5–40 Hz.',
          hints: ['EKG-Frequenzbereich: der Herzrhythmus und die Wellenformen liegen im Hz-Bereich.', 'Zu tiefe Frequenzen: DC-Drift. Zu hohe Frequenzen: Muskelartefakte.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'In der Wheatstone-Brücke ist die Brücke abgeglichen (kein Brückenstrom), wenn:',
          options: [
            'Alle vier Widerstände gleich groß sind',
            'R₁/R₂ = R₃/R₄ (Verhältnis gegenüberliegender Widerstände gleich)',
            'Die Gesamtspannung null ist',
            'Der Gesamtstrom durch die Brücke null ist',
            'Zwei Widerstände parallel und zwei in Reihe geschaltet sind',
          ],
          correctIndex: 1,
          explanation: 'Die Brücke ist abgeglichen, wenn R₁/R₂ = R₃/R₄. Dann ist die Spannung über dem Galvanometer null, und kein Strom fließt durch die Brücke. Wenn einer der Widerstände unbekannt ist, kann er aus den anderen drei berechnet werden: R_x = R₂·R₃/R₁. Diese Methode ist sehr präzise, da keine absolute Strom- oder Spannungsmessung nötig ist.',
          hints: ['Abgeglichen = beide Halbbrücken haben gleiche Potentiale. Bedingung: Kreuzprodukt der Widerstände gleich.', 'R₁·R₄ = R₂·R₃ ist äquivalent zu R₁/R₂ = R₃/R₄.'],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: 'ph-5-04',
      title: 'Magnetismus und elektromagnetische Wellen',
      content: `Magnetismus und Elektrizität sind zwei Aspekte derselben fundamentalen Wechselwirkung — dem Elektromagnetismus. James Clerk Maxwell erkannte 1865, dass elektrische und magnetische Felder untrennbar miteinander verknüpft sind: Ein sich änderndes elektrisches Feld erzeugt ein Magnetfeld, und ein sich änderndes Magnetfeld erzeugt ein elektrisches Feld (Induktion). Aus diesen vier Maxwell-Gleichungen folgen alle elektromagnetischen Phänomene, einschließlich des Lichts.

Das Magnetfeld B [Tesla = Vs/m²] wird durch bewegte Ladungen (Ströme) erzeugt. Ein gerader Leiter mit Strom I erzeugt ein Magnetfeld B = μ₀·I/(2π·r) in Ringform um den Leiter. Eine Spule (n Windungen, Länge L) erzeugt im Inneren ein homogenes Feld: B = μ₀·n·I/L (Solenoid). Das MRI nutzt supraleitende Spulen, die Felder von 1,5–7 Tesla erzeugen — das 30.000–140.000-fache des Erdmagnetfelds (25–65 μT).

Die Lorentzkraft beschreibt die Kraft auf eine bewegte Ladung q im Magnetfeld B: F = q·v × B (Vektorprodukt). Die Kraft steht senkrecht auf Geschwindigkeit und Magnetfeld — sie verändert die Richtung der Bewegung, nicht die Geschwindigkeit (keine Arbeit!). Eine Ladung kreist daher im homogenen Magnetfeld: Kreisradius r = m·v/(q·B). In Massespektrometern werden Ionen nach ihrer Masse/Ladungs-Verhältnis getrennt: Leichte Ionen biegen sich stärker ab als schwere. Zyklotrone beschleunigen Teilchen durch alternierendes elektrisches Feld kombiniert mit Magnetfeld zur spiralförmigen Bahn — in der Protonentherapie werden Tumore mit hochenergetischen Protonen bestrahlt.

Das Faradaysche Induktionsgesetz: Eine sich ändernde magnetische Flussdichte Φ durch eine Leiterschleife induziert eine Spannung: U_ind = −dΦ/dt (Lenz'sche Regel: Das Minuszeichen bedeutet, dass die induzierte Spannung ihrer Ursache entgegenwirkt). Wenn ein Magnet in eine Spule gesteckt wird, wird ein Strom erzeugt. Transformatoren nutzen dieses Prinzip, um Wechselspannungen zu transformieren: U₂/U₁ = N₂/N₁ (Windungsverhältnis). Das MRI-Empfangssignal beruht auf Induktion: Die präzedierenden Protonen induzieren kleine Wechselspannungen in die Empfangsspulen.

Elektromagnetische Wellen entstehen durch beschleunigte Ladungen — schwingende elektrische Ladungen senden Wellen aus, die sich mit Lichtgeschwindigkeit c = 3 × 10⁸ m/s im Vakuum ausbreiten. Das elektromagnetische Spektrum umfasst: Radiowellen (Wellenlänge km bis cm), Mikrowellen (cm bis mm), Infrarot (mm bis 700 nm), sichtbares Licht (700–380 nm), UV (380–10 nm), Röntgenstrahlung (10–0,01 nm), Gammastrahlung (< 0,01 nm). Energie eines Photons: E = h·f = h·c/λ, wobei h = 6,626 × 10⁻³⁴ J·s die Planck-Konstante ist. Röntgenphotonen (f ≈ 10¹⁸ Hz) tragen 1000-fach mehr Energie als sichtbares Licht (f ≈ 5 × 10¹⁴ Hz) — daher sind sie ionisierend und biologisch aktiv.`,
      lernziele: [
        'Magnetisches Feld und Lorentzkraft beschreiben und anwenden',
        'Faradaysches Induktionsgesetz erläutern',
        'Elektromagnetisches Spektrum kennen und Photonenenergie berechnen',
        'MRI-Grundprinzip (Magnetfeld, Larmor-Resonanz, Induktion) erklären',
      ],
      sections: [
        {
          heading: 'Magnetfeld und Lorentzkraft',
          text: 'Magnetfeld B [T]. Lorentzkraft: F = q·v × B; senkrecht auf v und B → kreisförmige Bahn. Kreisradius: r = m·v/(q·B) — Grundprinzip des Zyklotrons und Massenspektrometers. Solenoid: B = μ₀·n·I/L. MRI: B₀ = 1,5–7 T (supraleitende Spulen, Nb-Ti, 4 K). Magnetkraft auf Leiter: F = I·L × B. Elektromotor: Kraft auf stromführenden Leiter im Magnetfeld. Galvanometer: Messung kleiner Ströme durch Magnetkraft.',
          merksatz: 'Lorentzkraft: F = q·v × B — senkrecht auf v und B, keine Arbeit, kreisförmige Bahn',
        },
        {
          heading: 'Elektromagnetische Induktion',
          text: 'Faraday: U_ind = −dΦ/dt (Lenz: Induktion wirkt der Ursache entgegen). Φ = B·A·cos(α) [Wb = V·s]. Transformator: U₂/U₁ = N₂/N₁; P₁ = P₂ (ideal). Wechselstromgenerator: rotierende Spule im Magnetfeld → Sinusspannung. MRI-Signal: präzedierende Protonen induzieren μV-Signale in Empfangsspule. EKG-Stör­signal: Netzspannung (50 Hz) kann durch Induktion in EKG-Kabeln aufgenommen werden (Abschirmung nötig).',
        },
        {
          heading: 'Elektromagnetisches Spektrum',
          text: 'c = λ·f = 3 × 10⁸ m/s. Photonenenergie: E = h·f. h = 6,626 × 10⁻³⁴ J·s. Spektrum (Wellenlänge abnehmen, Frequenz zunehmen, Energie zunehmen): Radio (km) → Mikrowellen (cm) → IR (μm) → Sichtbar (400–700 nm) → UV (nm) → Röntgen (Å) → Gamma (pm). Ionisierend: UV bis Gamma (E > 12 eV). Medizinisch: IR-Thermographie, sichtbares Licht (Ophthalmoskopie), UV (Sterilisation, Phototherapie), Röntgen, Gamma (Szintigraphie), MRI (Radiowellen).',
        },
      ],
      merksätze: [
        'Elektromagnetisches Spektrum: Radio → Mikro → IR → Sichtbar → UV → Röntgen → Gamma',
        'Photonenenergie: E = h·f = h·c/λ; ionisierend ab UV (E > 12 eV)',
        'MRI: Larmor-Resonanz + Induktion; kein ionisierender Strahlung!',
      ],
      altfrage: {
        question: 'Ein Röntgenphoton hat eine Wellenlänge von 0,1 nm = 10⁻¹⁰ m. Welche Energie hat es in Joule und in Elektronenvolt? (h = 6,626 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s, 1 eV = 1,6 × 10⁻¹⁹ J)',
        answer: 'E = h·c/λ = 6,626 × 10⁻³⁴ × 3 × 10⁸ / 10⁻¹⁰ = 19,878 × 10⁻²⁶ / 10⁻¹⁰ = 19,878 × 10⁻¹⁶ J ≈ 2 × 10⁻¹⁵ J. In eV: E = 2 × 10⁻¹⁵ / 1,6 × 10⁻¹⁹ = 12.500 eV = 12,5 keV. Typische diagnostische Röntgenphotonen: 30–150 keV. Dieses 0,1-nm-Photon liegt im weichen Röntgenbereich. Zum Vergleich: sichtbares Licht (500 nm) hat E = 2,5 eV — Röntgen hat 5000-fach mehr Energie!',
      },
      klinischerBezug: 'Die MRT (Magnetresonanztomographie) ist das leistungsfähigste bildgebende Verfahren der Medizin, weil sie keine ionisierende Strahlung verwendet. Das Grundprinzip: (1) Starkes Magnetfeld B₀ (1,5–7 T) richtet Protonenspins aus; (2) HF-Puls bei Larmor-Frequenz kippt die Spins um 90°; (3) Nach dem Puls relaxieren Spins zurück — T1-Relaxation (Längs) und T2-Relaxation (Quer); (4) Relaxierende Spins induzieren kleines Spannungssignal in Empfangsspulen; (5) Ortsauflösung durch Gradientenspulen (zusätzliche Felder, die B₀ ortsabhängig variieren → ortsabhängige Larmor-Frequenz → Frequenzkodierung). Kontrastmittel (Gadolinium) verkürzt T1 → beeinflusst MRT-Signal → Kontrastverbesserung bei Tumoren und Entzündungen.',
      selfTest: [
        {
          question: 'Welche Kraft wirkt auf ein Elektron (q = −1,6 × 10⁻¹⁹ C), das sich mit v = 10⁶ m/s senkrecht zu einem Magnetfeld B = 0,1 T bewegt?',
          options: [
            '1,6 × 10⁻¹⁴ N',
            '1,6 × 10⁻²⁶ N',
            '0 N (kein Magnetfeld auf ruhende Ladung)',
            '1,6 × 10⁻¹⁰ N',
            '1,6 × 10⁻²⁰ N',
          ],
          correctIndex: 0,
          explanation: 'F = |q|·v·B·sin(90°) = 1,6 × 10⁻¹⁹ × 10⁶ × 0,1 × 1 = 1,6 × 10⁻¹⁴ N. Diese Kraft ist die Lorentzkraft. Sie steht senkrecht auf v und B → kreisförmige Bahn. Im Zyklotron werden Protonen durch wiederholte Beschleunigung auf hohe Energien gebracht.',
          hints: ['F = |q|·v·B (bei senkrechter Bewegung zum Feld).', '1,6 × 10⁻¹⁹ × 10⁶ × 0,1 = 1,6 × 10⁻¹⁴ N.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welche Aussage zum Faradayschen Induktionsgesetz ist korrekt?',
          options: [
            'Ein konstantes Magnetfeld induziert eine konstante Spannung',
            'Nur ein sich ändernder magnetischer Fluss induziert eine Spannung in einer Leiterschleife',
            'Die induzierte Spannung ist proportional zum Betrag des Magnetfelds',
            'Induktion funktioniert nur mit ferromagnetischen Materialien',
            'Die Lenz-Regel besagt, dass die Induktion ihre Ursache verstärkt',
          ],
          correctIndex: 1,
          explanation: 'Faraday: U_ind = −dΦ/dt. Nur wenn sich der magnetische Fluss Φ = B·A·cos(α) ändert (B, A oder α variiert), wird eine Spannung induziert. Ein konstantes B erzeugt keine Induktion. Die Lenz-Regel (Minuszeichen) besagt: Die induzierte Spannung wirkt ihrer Ursache entgegen (Erhaltungsprinzip).',
          hints: ['U_ind = −dΦ/dt — nur Änderung erzeugt Spannung, nicht konstanter Fluss.', 'Lenz: induzierte Größen wirken der Ursache entgegen (Minus-Zeichen).'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welcher Teil des elektromagnetischen Spektrums wird beim MRI verwendet?',
          options: [
            'Röntgenstrahlung (0,01–10 nm)',
            'UV-Strahlung (10–380 nm)',
            'Radiowellen (cm bis m)',
            'Gammastrahlung (< 0,01 nm)',
            'Infrarotstrahlung (0,7–1000 μm)',
          ],
          correctIndex: 2,
          explanation: 'MRI verwendet Radiowellen im MHz-Bereich (Larmor-Frequenz): Bei 1,5 T ca. 64 MHz, Wellenlänge λ = c/f = 3×10⁸/64×10⁶ ≈ 4,7 m. Radiowellen sind nicht-ionisierend und biologisch harmlos bei den verwendeten Intensitäten. Dies macht MRI zur bevorzugten Methode für die Untersuchung strahlensensitiver Patientengruppen (Kinder, Schwangere, häufige Verlaufskontrollen).',
          hints: ['Larmor-Frequenz bei 1,5 T ≈ 64 MHz — das ist der MHz-Bereich.', 'Radiowellen: MHz bis GHz Frequenzbereich; λ = cm bis m.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welche Wellenlänge hat sichtbares Licht mit f = 6 × 10¹⁴ Hz? (c = 3 × 10⁸ m/s)',
          options: ['200 nm', '500 nm', '750 nm', '1000 nm', '50 nm'],
          correctIndex: 1,
          explanation: 'λ = c/f = 3 × 10⁸ / (6 × 10¹⁴) = 0,5 × 10⁻⁶ m = 500 nm. 500 nm entspricht grünem Licht (empfindlichster Bereich des menschlichen Auges). Sichtbares Licht: 380–700 nm; Violett 380–450 nm, Grün 490–560 nm, Rot 620–700 nm.',
          hints: ['λ = c/f. c = 3 × 10⁸ m/s, f = 6 × 10¹⁴ Hz.', '(3 × 10⁸)/(6 × 10¹⁴) = 0,5 × 10⁻⁶ m = 500 nm.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Was ist der wesentliche Vorteil des MRI gegenüber CT oder Röntgen?',
          options: [
            'MRI ist schneller als CT',
            'MRI kostet weniger als Röntgen',
            'MRI verwendet keine ionisierende Strahlung',
            'MRI kann nur Knochen darstellen',
            'MRI benötigt kein Kontrastmittel',
          ],
          correctIndex: 2,
          explanation: 'MRI verwendet Radiowellen und starke Magnetfelder — keine ionisierende Strahlung. Röntgen und CT verwenden ionisierende Röntgenstrahlung (Strahlendosis: Röntgen-Thorax 0,02 mSv; CT-Thorax 7 mSv). MRI ist daher für strahlenempfindliche Gruppen (Kinder, Schwangere) besonders geeignet und bei häufigen Verlaufskontrollen bevorzugt. Nachteil: MRI ist langsamer (5–60 Min) und teurer als CT; Kontraindikationen: Herzschrittmacher, Metallimplantate (Ferromagnetika).',
          hints: ['Ionisierend = kann DNA schädigen. Nicht-ionisierend = sicherer für häufige Anwendung.', 'MRI nutzt Radiowellen (nicht-ionisierend); CT/Röntgen nutzen Röntgenstrahlen (ionisierend).'],
          difficulty: 1,
          tags: [],
        },
      ],
    },
  ],
};
