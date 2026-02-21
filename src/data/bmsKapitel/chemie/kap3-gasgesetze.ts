import type { Kapitel } from '../types';

export const chemKap3: Kapitel = {
  id: 'chem-kap3',
  title: 'Gasgesetze',
  subject: 'chemie',
  icon: '💨',
  estimatedTime: '45 min',
  unterkapitel: [
    {
      id: 'ch-3-01',
      title: 'Ideale Gasgleichung pV=nRT',
      content: `## Die Ideale Gasgleichung

Die ideale Gasgleichung **pV = nRT** ist eine der fundamentalsten Gleichungen der Chemie. Sie verknüpft vier Zustandsgrößen eines Gases:

- **p** = Druck [Pa = N/m² = kg/(m·s²)] oder [bar, atm]: Der Druck, den das Gas auf seine Behälterwände ausübt
- **V** = Volumen [m³] oder [L]: Das von Gas eingenommene Volumen
- **n** = Stoffmenge [mol]: Die Anzahl der Gasteilchen in Einheiten der Avogadrozahl
- **R** = universelle Gaskonstante = 8,314 J/(mol·K) = 8,314 Pa·m³/(mol·K) = 0,08314 L·bar/(mol·K)
- **T** = absolute Temperatur [K]: Kelvin = Celsius + 273,15

## Ideales vs. reales Gas

Ein **ideales Gas** ist ein Modell mit zwei Vereinfachungen: (1) Gasteilchen haben kein Eigenvolumen (Punktmassen) und (2) es gibt keine intermolekularen Wechselwirkungen. In der Realität haben Moleküle Eigenvolumen und ziehen sich an (van-der-Waals-Kräfte). Reale Gase weichen besonders bei **hohem Druck** (Eigenvolumen wird relevant) und **tiefer Temperatur** (Wechselwirkungen stärker) vom idealen Verhalten ab.

## Van-der-Waals-Gleichung

Die van-der-Waals-Gleichung korrigiert das ideale Gasgesetz für reale Gase: (p + a·n²/V²)(V − nb) = nRT. Dabei korrigiert der Term a·n²/V² den Druck wegen intermolekularer Anziehung und nb das Volumen wegen Eigengröße der Moleküle (a und b sind substanzspezifische Konstanten).

## Standardbedingungen

**STP** (Standard Temperature and Pressure): 0°C (273,15 K) und 1 bar (früher 1 atm). Bei STP beträgt das molare Volumen eines idealen Gases: V_m = RT/p = 8,314 × 273,15 / 100.000 = **22,4 L/mol**. Das bedeutet: 1 mol eines beliebigen idealen Gases nimmt bei STP stets 22,4 Liter ein.`,
      lernziele: [
        "Die ideale Gasgleichung pV=nRT mit allen Variablen und Einheiten erklären",
        "Den Unterschied zwischen idealem und realem Gas beschreiben und die van-der-Waals-Korrektur erläutern",
        "Das molare Volumen bei STP berechnen und anwenden",
      ],
      sections: [
        {
          heading: "Rechnen mit der Gasgleichung",
          text: "Die Gasgleichung pV=nRT kann nach jeder der vier Größen umgestellt werden. Beispiel 1: Wie viel mol CO₂ befinden sich in einem 10-L-Behälter bei 2 bar und 27°C (=300 K)? n = pV/(RT) = (2×10⁵ Pa × 0,01 m³) / (8,314 × 300) = 2000/2494 ≈ 0,80 mol. Beispiel 2: Welchen Druck übt 0,5 mol N₂ in einem 5-L-Gefäß bei 25°C aus? p = nRT/V = (0,5 × 8,314 × 298) / 0,005 = 248.486 Pa ≈ 2,48 bar. Wichtig: Temperatur immer in Kelvin, Druck in Pascal und Volumen in m³ für konsistente SI-Einheiten.",
        },
        {
          heading: "Molares Volumen und seine Bedeutung",
          text: "Das molare Volumen V_m = 22,4 L/mol bei STP ist eine wichtige Größe in der Stöchiometrie. Es gilt für jedes ideale Gas unabhängig von der Molekülidentität (Avogadro-Prinzip: Gleiche Volumina verschiedener Gase bei gleichen Bedingungen enthalten gleich viele Teilchen). Anwendung: Bei einer Reaktion entstehen 88 g CO₂ (M=44 g/mol → n=2 mol). Bei STP nimmt das CO₂ ein Volumen von 2 × 22,4 = 44,8 L ein. Bei anderen Bedingungen (z.B. Körpertemperatur 37°C=310 K, 1 bar): V_m = RT/p = 8,314 × 310 / 100.000 = 25,77 L/mol.",
        },
      ],
      merksätze: [
        "pV=nRT: Druck × Volumen = Mol × Gaskonstante × Temperatur (in Kelvin!)",
        "Molares Volumen bei STP: 22,4 L/mol für ideale Gase",
        "Reale Gase weichen ab bei: hohem Druck und tiefer Temperatur",
      ],
      klinischerBezug: "Die ideale Gasgleichung ist Grundlage der Blutgasanalyse: Aus dem gemessenen Partialdruck von O₂ und CO₂ im Blut werden die gelösten Gasmengen berechnet. Die Beatmungstherapie nutzt pV=nRT zur Berechnung des Atemzugvolumens in Abhängigkeit von Druck und Temperatur.",
      altfrage: {
        question: "Wie viel Liter nimmt 1 mol eines idealen Gases bei 0°C und 1 bar ein?",
        answer: "V = nRT/p = 1 mol × 8,314 J/(mol·K) × 273,15 K / 100.000 Pa = 22,71 J/Pa = 22,71×10⁻³ m³ ≈ 22,4 L. Dies ist das molare Volumen bei STP, eine Standardgröße in der Chemie.",
      },
      selfTest: [
        {
          question: "Welche Temperatur in Kelvin entspricht 37°C (Körpertemperatur)?",
          options: [
            "237 K",
            "273 K",
            "300 K",
            "310 K",
            "373 K",
          ],
          correctIndex: 3,
          explanation: "T(K) = T(°C) + 273,15 ≈ T(°C) + 273. Für 37°C: T = 37 + 273 = 310 K.",
          hints: [
            "Kelvin = Celsius + 273 (gerundet)",
            "0°C = 273 K, 100°C = 373 K",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welchen Druck übt 2 mol eines idealen Gases in einem 10-L-Behälter bei 300 K aus? (R = 8,314 J/mol·K; 1 L = 10⁻³ m³)",
          options: [
            "0,5 bar",
            "2,5 bar",
            "4,99 bar",
            "24,9 bar",
            "49,9 bar",
          ],
          correctIndex: 2,
          explanation: "p = nRT/V = (2 × 8,314 × 300) / (10×10⁻³) = 4988,4 / 0,01 = 498.840 Pa ≈ 4,99 bar.",
          hints: [
            "Umstellen nach p: p = nRT/V",
            "Volumen in m³: 10 L = 0,01 m³",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was ist das molare Volumen eines idealen Gases bei STP (0°C, 1 bar)?",
          options: [
            "11,2 L/mol",
            "22,4 L/mol",
            "24,5 L/mol",
            "44,8 L/mol",
            "8,31 L/mol",
          ],
          correctIndex: 1,
          explanation: "Bei STP (0°C = 273 K, 1 bar = 10⁵ Pa) gilt: V_m = RT/p = 8,314 × 273 / 100.000 ≈ 0,0227 m³/mol = 22,7 L/mol ≈ 22,4 L/mol (Merkwert).",
          hints: [
            "Das molare Volumen bei STP ist ein wichtiger Merkwert",
            "Es gilt für jedes ideale Gas bei STP",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Bei welchen Bedingungen weicht ein reales Gas am stärksten vom idealen Verhalten ab?",
          options: [
            "Hohe Temperatur und niedriger Druck",
            "Niedrige Temperatur und niedriger Druck",
            "Hohe Temperatur und hoher Druck",
            "Niedrige Temperatur und hoher Druck",
            "Das ideale Gas und das reale Gas verhalten sich immer gleich",
          ],
          correctIndex: 3,
          explanation: "Bei niedrigen Temperaturen werden intermolekulare Wechselwirkungen stärker (Teilchen bewegen sich langsamer), und bei hohem Druck wird das Eigenvolumen der Moleküle relevant. Beide Effekte werden im idealen Gasmodell vernachlässigt.",
          hints: [
            "Reale Gase haben Eigenvolumen und intermolekulare Kräfte",
            "Wann werden diese Effekte bedeutsam?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Einheit hat die universelle Gaskonstante R in der Gleichung pV=nRT?",
          options: [
            "J/mol",
            "J/(mol·K)",
            "Pa·L/mol",
            "bar/K",
            "mol·K/J",
          ],
          correctIndex: 1,
          explanation: "R = pV/(nT). Mit [p]=Pa=J/m³, [V]=m³, [n]=mol, [T]=K ergibt sich [R] = (J/m³ × m³)/(mol × K) = J/(mol·K). R = 8,314 J/(mol·K).",
          hints: [
            "Leite die Einheit aus pV=nRT ab: R = pV/(nT)",
            "Einheiten von p×V geben Energie (Joule)",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ch-3-02',
      title: 'Gasgesetze mit Rechenbeispielen',
      content: `## Boyle-Mariotte'sches Gesetz (T=const)

Bei konstanter Temperatur (isothermer Prozess) ist das Produkt aus Druck und Volumen konstant: **p₁V₁ = p₂V₂**. Volumen und Druck sind antiproportional — halbiert man das Volumen, verdoppelt sich der Druck.

**Beispiel**: Ein Gasvolumen von 4 L bei 2 bar wird auf 1 L komprimiert. Neuer Druck: p₂ = p₁V₁/V₂ = (2×4)/1 = **8 bar**.

## Gay-Lussac'sches Gesetz (p=const)

Bei konstantem Druck (isobarer Prozess) ist das Verhältnis von Volumen zu Temperatur konstant: **V₁/T₁ = V₂/T₂** (Volumen und Temperatur sind proportional). Ein Gas dehnt sich bei Erwärmung aus.

**Beispiel**: 2 L Gas bei 300 K werden auf 600 K erhitzt. Neues Volumen: V₂ = V₁×T₂/T₁ = 2×600/300 = **4 L**.

## Amonton'sches Gesetz (V=const)

Bei konstantem Volumen (isochorer Prozess) ist das Verhältnis von Druck zu Temperatur konstant: **p₁/T₁ = p₂/T₂** (Druck und Temperatur sind proportional).

**Beispiel**: Autoreifen bei 20°C (293 K) hat 2,2 bar. Nach Fahrt bei 50°C (323 K): p₂ = 2,2×323/293 = **2,43 bar**.

## Kombinierte Gasgleichung

Alle drei Gesetze lassen sich kombinieren (wenn n=const): **p₁V₁/T₁ = p₂V₂/T₂**. Diese Gleichung erlaubt die Berechnung jeder der sechs Größen, wenn die anderen fünf bekannt sind.

**Beispiel**: 5 L Gas bei 1 bar und 300 K werden auf 2 bar und 400 K gebracht: V₂ = (p₁V₁T₂)/(T₁p₂) = (1×5×400)/(300×2) = **3,33 L**.`,
      lernziele: [
        "Die drei Einzelgasgesetze (Boyle-Mariotte, Gay-Lussac, Amonton) anwenden und korrekte Bedingungen nennen",
        "Die kombinierte Gasgleichung aufstellen und Rechenaufgaben lösen",
        "Proportionalitäten und Antiproportionalitäten zwischen p, V und T benennen",
      ],
      sections: [
        {
          heading: "Überblick der Gasgesetze",
          text: "Die drei klassischen Gasgesetze sind Sonderfälle der idealen Gasgleichung pV=nRT bei jeweils einer konstanten Zustandsgröße. Boyle-Mariotte (T=const, isotherm): p·V = const → p antiproportional zu V. Gay-Lussac (p=const, isobar): V/T = const → V proportional zu T. Amonton (V=const, isochor): p/T = const → p proportional zu T. Ein Hilfsmittel: Stellt man sich ein Gas als Kiste mit Billardkugeln vor, die gegen die Wände prallen, so erklärt sich intuitiv: mehr Kugeln (n), mehr Kollisionen → mehr Druck; kleinere Kiste (V) → mehr Kollisionen → mehr Druck; höhere Temperatur → schnellere Kugeln → mehr Druck.",
        },
        {
          heading: "Kombinierte Gasgleichung in der Praxis",
          text: "Die kombinierte Gasgleichung p₁V₁/T₁ = p₂V₂/T₂ gilt, wenn die Stoffmenge n konstant bleibt (geschlossenes System). Sie ist das wichtigste Werkzeug für Berechnungen beim Wechsel zwischen zwei Zuständen. Vorgehen: Bekannte Größen einsetzen, nach der gesuchten umstellen. Häufige Fehler: Celsius statt Kelvin verwenden (immer +273!), Druckeinheiten mischen. Beispiel aus der Praxis: Ein Sauerstoffzylinder (10 L, 150 bar, 20°C) bei 37°C: V₂ = p₁V₁T₂/(T₁p₂). Bei Umgebungsdruck (1 bar): V₂ = 150×10×310/(293×1) = 1587 L Sauerstoff — genug für viele Stunden Beatmung.",
        },
      ],
      merksätze: [
        "Boyle-Mariotte: p₁V₁ = p₂V₂ (T=const) — Druck und Volumen antiproportional",
        "Gay-Lussac: V₁/T₁ = V₂/T₂ (p=const) — Volumen und Temperatur proportional",
        "Kombiniert: p₁V₁/T₁ = p₂V₂/T₂ — immer T in Kelvin!",
      ],
      klinischerBezug: "Boyle-Mariotte gilt direkt in der Beatmungsmedizin: Der Beatmungsdruck bestimmt das in die Lunge einströmende Volumen. In der Druckkammer (hyperbare Therapie) wird der Umgebungsdruck erhöht, was nach Boyle-Mariotte Gasblasen im Körper komprimiert und so die Dekompressionskrankheit behandelt.",
      altfrage: {
        question: "Ein Autoreifen hat bei 10°C einen Druck von 2,0 bar. Welchen Druck hat er nach langer Fahrt bei 60°C (isochorer Prozess)?",
        answer: "T₁=283 K, T₂=333 K, p₁=2,0 bar. Nach Amonton: p₂ = p₁×T₂/T₁ = 2,0×333/283 ≈ 2,35 bar. Der Reifendruck steigt bei Erwärmung an — deshalb sollte man Reifendruck stets kalt messen.",
      },
      selfTest: [
        {
          question: "Ein Gas nimmt bei 1 bar ein Volumen von 6 L ein. Bei konstantem Temperatur wird der Druck auf 3 bar erhöht. Was ist das neue Volumen?",
          options: [
            "18 L",
            "9 L",
            "3 L",
            "2 L",
            "1 L",
          ],
          correctIndex: 3,
          explanation: "Boyle-Mariotte (T=const): p₁V₁ = p₂V₂ → V₂ = p₁V₁/p₂ = (1×6)/3 = 2 L. Druckverdreifachung → Volumendrittelung.",
          hints: [
            "Verwende p₁V₁ = p₂V₂",
            "Wenn Druck steigt, sinkt Volumen (antiproportional)",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Gas bei 200 K hat ein Volumen von 2 L (p=const). Auf welches Volumen dehnt es sich bei 400 K aus?",
          options: [
            "1 L",
            "2 L",
            "4 L",
            "8 L",
            "16 L",
          ],
          correctIndex: 2,
          explanation: "Gay-Lussac (p=const): V₁/T₁ = V₂/T₂ → V₂ = V₁×T₂/T₁ = 2×400/200 = 4 L. Temperaturverdopplung → Volumenverdopplung.",
          hints: [
            "Verwende V₁/T₁ = V₂/T₂ (Temperatur in Kelvin!)",
            "Wenn Temperatur steigt, steigt Volumen proportional",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Gas bei 1 bar, 300 K, 10 L wird auf 2 bar und 600 K gebracht. Welches Volumen nimmt es ein?",
          options: [
            "5 L",
            "10 L",
            "20 L",
            "40 L",
            "2,5 L",
          ],
          correctIndex: 1,
          explanation: "Kombinierte Gasgleichung: V₂ = (p₁V₁T₂)/(T₁p₂) = (1×10×600)/(300×2) = 6000/600 = 10 L. Druckverdopplung und Temperaturverdopplung heben sich gerade auf.",
          hints: [
            "Verwende p₁V₁/T₁ = p₂V₂/T₂",
            "Überlege, welche Effekte sich aufheben könnten",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welches Gasgesetz gilt bei konstantem Druck?",
          options: [
            "Boyle-Mariotte: p₁V₁=p₂V₂",
            "Gay-Lussac: V/T=const",
            "Amonton: p/T=const",
            "Dalton: p_ges=Σp_i",
            "Van der Waals: (p+a/V²)(V-b)=RT",
          ],
          correctIndex: 1,
          explanation: "Bei konstantem Druck (isobar) gilt das Gay-Lussac'sche Gesetz: V/T = const, also V₁/T₁ = V₂/T₂. Volumen und Temperatur sind direkt proportional. Boyle-Mariotte gilt bei T=const, Amonton bei V=const.",
          hints: [
            "Gay-Lussac und isobar (p=const) gehören zusammen",
            "Merke: Volumen und Temperatur sind bei p=const proportional",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Ein Gasvolumen von 3 L bei 27°C und 1 bar wird auf 127°C erhitzt und auf 0,5 bar entspannt. Welches Volumen ergibt sich?",
          options: [
            "6 L",
            "4 L",
            "8 L",
            "3 L",
            "12 L",
          ],
          correctIndex: 2,
          explanation: "T₁=300 K, T₂=400 K. V₂ = p₁V₁T₂/(T₁p₂) = (1×3×400)/(300×0,5) = 1200/150 = 8 L. Druckhalbierung verdoppelt Volumen, Temperaturerhöhung von 300 auf 400 K (4/3-fach) vergrößert es zusätzlich.",
          hints: [
            "Temperatur in Kelvin umrechnen: 27°C→300 K, 127°C→400 K",
            "Kombinierte Gasgleichung: V₂ = V₁×(p₁/p₂)×(T₂/T₁)",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: 'ch-3-03',
      title: 'Mol, Avogadro und Stöchiometrie der Gase',
      content: `## Das Mol als chemische Einheit

Das **Mol** (mol) ist die SI-Einheit der Stoffmenge. 1 mol enthält genau **N_A = 6,022×10²³** Teilchen (Avogadro-Konstante). Diese Zahl ist so gewählt, dass 1 mol ¹²C genau 12 g wiegt. Die **molare Masse M** eines Elements oder einer Verbindung gibt an, wie viel Gramm 1 mol der Substanz wiegt (Einheit: g/mol) und entspricht zahlenmäßig der relativen Atommasse bzw. Molmasse.

Beziehung: **n = m/M** → Stoffmenge (mol) = Masse (g) / molare Masse (g/mol)

Beispiele: M(H₂O) = 2×1 + 16 = 18 g/mol; M(NaCl) = 23 + 35,5 = 58,5 g/mol; M(CO₂) = 12 + 2×16 = 44 g/mol.

## Avogadro'sches Gesetz und Molvolumen

Avogadro erkannte, dass gleiche Volumina verschiedener idealer Gase bei gleichen Bedingungen (T, p) gleich viele Gasteilchen enthalten. Daraus folgt das **molare Volumen**: 1 mol eines idealen Gases nimmt bei STP (0°C, 1 bar) stets 22,4 L ein — unabhängig von der Molekülart.

## Dalton'sches Partialdruckgesetz

In einem Gasgemisch übt jede Komponente i einen **Partialdruck p_i** aus, als wäre sie allein im Behälter. Der Gesamtdruck ist die Summe aller Partialdrücke: **p_ges = p₁ + p₂ + p₃ + ...** = Σp_i. Der Partialdruck hängt vom Molenbruch x_i ab: p_i = x_i × p_ges.

Beispiel: Luft (p=1 bar): p(N₂) ≈ 0,78 bar, p(O₂) ≈ 0,21 bar, p(Ar) ≈ 0,01 bar.

## Stöchiometrische Gasberechnung

Aus einer Reaktionsgleichung lassen sich Gasvolumina berechnen: Bei der Reaktion 2H₂ + O₂ → 2H₂O verbrennen 2 mol H₂ mit 1 mol O₂. Bei STP: 2×22,4 L H₂ + 22,4 L O₂ → 2×18 g H₂O (flüssig).`,
      lernziele: [
        "n = m/M berechnen und die Avogadro-Konstante erklären",
        "Das Dalton'sche Partialdruckgesetz formulieren und Partialdrücke berechnen",
        "Stöchiometrische Berechnungen mit Gasen durchführen",
      ],
      sections: [
        {
          heading: "Mol-Berechnungen: Schritt für Schritt",
          text: "Typische Mol-Berechnungen folgen einem Schema: (1) Molare Masse aus dem Periodensystem bestimmen. (2) n = m/M berechnen. Beispiel: Wie viele Mol CO₂ sind in 22 g CO₂? M(CO₂)=12+2×16=44 g/mol → n=22/44=0,5 mol. Umgekehrt: Welche Masse haben 0,25 mol NaCl? m=n×M=0,25×58,5=14,6 g. Für Gase: Welches Volumen nehmen 0,5 mol CO₂ bei STP ein? V=n×V_m=0,5×22,4=11,2 L. Oder mit Gasgleichung: V=nRT/p=0,5×8,314×273/100.000=0,01135 m³=11,35 L.",
        },
        {
          heading: "Dalton'sches Gesetz und medizinische Gasgemische",
          text: "Das Dalton'sche Gesetz hat direkte klinische Relevanz. Beim Atmen der normalen Atmosphäre (p≈1 atm=101,3 kPa) gilt: p(O₂)=0,21×101,3=21,3 kPa. In der Alveole wird durch CO₂ und Wasserdampf der O₂-Partialdruck auf ~13,3 kPa reduziert. Bei der Hyperoxietherapie (100% O₂, 1 atm) steigt p(O₂) auf 101,3 kPa → fünffach höherer Partialdruck → mehr O₂ gelöst im Blut. In der hyperbaren Sauerstofftherapie (2-3 atm, 100% O₂) steigt p(O₂) auf 200-300 kPa → 10-15-fach erhöhte O₂-Lösung.",
        },
      ],
      merksätze: [
        "n = m/M: Mol = Gramm durch molare Masse",
        "N_A = 6,022×10²³ Teilchen pro Mol (Avogadro-Konstante)",
        "Dalton: p_ges = Σp_i — Partialdrücke addieren sich",
      ],
      klinischerBezug: "Das Dalton'sche Partialdruckgesetz erklärt die arterielle Sauerstoffversorgung: Der alveoläre O₂-Partialdruck (pAO₂) bestimmt die O₂-Sättigung des Hämoglobins. Bei Höhenkrankheit sinkt p_ges → p(O₂) sinkt → Hypoxie. Supplementärer Sauerstoff erhöht p(O₂) und korrigiert die Hypoxie.",
      altfrage: {
        question: "Wie viele Moleküle CO₂ sind in 44 g CO₂ enthalten?",
        answer: "M(CO₂) = 44 g/mol → n = 44/44 = 1 mol CO₂. Anzahl der Moleküle: N = n × N_A = 1 × 6,022×10²³ = 6,022×10²³ Moleküle.",
      },
      selfTest: [
        {
          question: "Wie viele Mol enthält 36 g Wasser (M(H₂O) = 18 g/mol)?",
          options: [
            "0,5 mol",
            "1 mol",
            "2 mol",
            "18 mol",
            "36 mol",
          ],
          correctIndex: 2,
          explanation: "n = m/M = 36 g / 18 g/mol = 2 mol. 36 g Wasser entsprechen 2 mol und enthalten 2 × 6,022×10²³ Wassermoleküle.",
          hints: [
            "Verwende n = m/M",
            "Teile die Masse durch die molare Masse",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Luft enthält 78% N₂ und 21% O₂ (Volumenprozent). Wie groß ist der O₂-Partialdruck bei p_ges = 1000 hPa?",
          options: [
            "78 hPa",
            "210 hPa",
            "780 hPa",
            "21 hPa",
            "1000 hPa",
          ],
          correctIndex: 1,
          explanation: "p(O₂) = Molenbruch × p_ges = 0,21 × 1000 hPa = 210 hPa. Volumenprozent = Molprozent = Molenbruch für ideale Gase.",
          hints: [
            "p_i = x_i × p_ges, wobei x_i der Molenbruch ist",
            "21% O₂ entspricht x(O₂) = 0,21",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Wie viele Liter nimmt 0,5 mol N₂ bei STP ein?",
          options: [
            "5,6 L",
            "11,2 L",
            "22,4 L",
            "44,8 L",
            "28 L",
          ],
          correctIndex: 1,
          explanation: "Bei STP gilt V_m = 22,4 L/mol für jedes ideale Gas. Für 0,5 mol: V = 0,5 × 22,4 = 11,2 L.",
          hints: [
            "Molares Volumen bei STP: 22,4 L/mol",
            "V = n × V_m",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was besagt die Avogadro-Konstante N_A = 6,022×10²³ mol⁻¹?",
          options: [
            "1 mol enthält immer 6,022×10²³ Teilchen (Atome, Moleküle, Ionen o.ä.)",
            "1 g jedes Elements enthält 6,022×10²³ Atome",
            "1 L eines Gases enthält bei STP 6,022×10²³ Moleküle",
            "Kohlenstoff-12 hat eine Masse von 6,022×10²³ g",
            "Die Lichtgeschwindigkeit beträgt 6,022×10²³ m/s",
          ],
          correctIndex: 0,
          explanation: "Die Avogadro-Konstante N_A = 6,022×10²³ mol⁻¹ gibt an, wie viele Teilchen in 1 mol einer Substanz enthalten sind — unabhängig davon, ob es sich um Atome, Moleküle, Ionen oder andere Einheiten handelt.",
          hints: [
            "N_A verknüpft die makroskopische (Mol) mit der mikroskopischen Ebene (Teilchenanzahl)",
            "1 mol = immer N_A Teilchen",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Bei der Reaktion C + O₂ → CO₂ verbrennt Kohlenstoff. Welches Volumen CO₂ entsteht aus 24 g Kohlenstoff bei STP? (M(C)=12 g/mol)",
          options: [
            "11,2 L",
            "22,4 L",
            "44,8 L",
            "33,6 L",
            "5,6 L",
          ],
          correctIndex: 2,
          explanation: "n(C) = 24/12 = 2 mol. Da C und CO₂ im Verhältnis 1:1 reagieren, entstehen ebenfalls 2 mol CO₂. Bei STP: V = 2 × 22,4 = 44,8 L.",
          hints: [
            "Berechne zuerst n(C) = m/M",
            "Stöchiometrisches Verhältnis C:CO₂ = 1:1",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ch-3-04',
      title: 'Gasgesetze in der Medizin',
      content: `## Atemphysik und Boyle-Mariotte

Die Lungenatmung folgt direkt dem Boyle-Mariotte'schen Gesetz (T≈const). Bei der **Inspiration** kontrahiert das Zwerchfell und vergrößert das Lungenvolumen. Nach Boyle-Mariotte sinkt dadurch der Druck in der Lunge unter den Atmosphärendruck → Luft strömt ein. Bei der **Exspiration** entspannt das Zwerchfell, das Volumen sinkt, der Druck steigt → Luft strömt aus. Der Druckunterschied beträgt beim normalen Atmen nur ~1-3 mmHg (130-400 Pa).

## Tauchmedizin und Dekompressionskrankheit

Unter Wasser steigt der Druck mit der Tiefe: pro 10 m Wassertiefe nimmt der Druck um ~1 bar zu. In 30 m Tiefe: p = 4 bar absolut. Nach Boyle-Mariotte: Das Gasvolumen im Körper (z.B. Lunge, Nebenhöhlen) wird auf 1/4 komprimiert.

**Henry'sches Gesetz**: Die Menge eines Gases, die sich in einer Flüssigkeit löst, ist proportional zum Partialdruck dieses Gases: c = k_H × p. Bei 4 bar löst sich viermal mehr N₂ im Blut als bei 1 bar. Beim zu schnellen Auftauchen bilden sich N₂-Bläschen im Blut und Gewebe (Dekompressionskrankheit, "Taucherkrankheit") → Schmerzen, Lähmungen, Embolien.

## Hyperbare Sauerstofftherapie (HBO)

In der Druckkammer (2-3 bar, 100% O₂) wird nach Dalton und Henry ein wesentlich höherer O₂-Partialdruck erzielt. Nach Henry löst sich bis zu 10-mal mehr O₂ im Plasma. Anwendungen: Kohlenmonoxidvergiftung (CO verdrängt O₂ vom Hämoglobin, HBO-O₂ verdrängt CO zurück), Wundheilung (Hypoxie-Therapie), nekrotisierende Fasziitis.

## Höhenkrankheit

Mit steigender Höhe nimmt der Luftdruck ab. Bei 4000 m Höhe: p ≈ 0,62 bar → p(O₂) = 0,21 × 0,62 = 0,13 bar (statt 0,21 bar). Der reduzierte O₂-Partialdruck führt zu verminderter O₂-Sättigung des Hämoglobins → Höhenkrankheit (Kopfschmerzen, Schwindel, Übelkeit, im Extremfall Lungenödem).`,
      lernziele: [
        "Den Mechanismus der Lungenatmung mit Boyle-Mariotte erklären",
        "Die Dekompressionskrankheit mit Henry'schem Gesetz und Druckveränderungen begründen",
        "Den Effekt von Höhe und hyperbarem Druck auf den O₂-Partialdruck berechnen",
      ],
      sections: [
        {
          heading: "Henry'sches Gesetz und Gaslöslichkeit",
          text: "Das Henry'sche Gesetz beschreibt die Löslichkeit von Gasen in Flüssigkeiten: c = k_H × p, wobei c die Konzentration des gelösten Gases, k_H die Henry-Konstante (substanzspezifisch) und p der Partialdruck des Gases über der Flüssigkeit ist. N₂ hat eine geringe Henry-Konstante in Wasser/Blut, löst sich aber bei Tauchtiefe trotzdem erheblich mehr. O₂ hat eine etwas höhere Löslichkeit und ist zudem an Hämoglobin gebunden. CO₂ hat eine sehr hohe Löslichkeit (k_H = 0,034 mol/L/bar) und reagiert mit Wasser zu H₂CO₃. Das Henry-Gesetz erklärt auch, warum in Sprudel gelöstes CO₂ beim Öffnen der Flasche (Druckabfall) aufschäumt.",
        },
        {
          heading: "Höhenkrankheit: Physik und Klinik",
          text: "Die barometrische Höhenformel beschreibt den exponentiellen Druckabfall mit der Höhe. Auf dem Mount Everest (8848 m) beträgt der Luftdruck nur noch ~0,33 bar → p(O₂) ≈ 0,07 bar (statt 0,21 bar auf Meereshöhe). Die Hämoglobin-Sauerstoffbindungskurve zeigt, dass bei niedrigem p(O₂) die O₂-Sättigung stark sinkt. Akklimatisation erfolgt durch Erythropoiese (mehr rote Blutkörperchen), Hyperventilation und erhöhtes 2,3-Bisphosphoglycerat (verschiebt Bindungskurve). Sauerstoffgabe (supplementärer O₂) erhöht den p(O₂) in der Einatemluft und behandelt akut die Höhenkrankheit.",
        },
      ],
      merksätze: [
        "Inspiration: Lungenvolumen↑ → Druck↓ → Luft strömt ein (Boyle-Mariotte)",
        "Henry: c = k_H × p — mehr Druck = mehr Gas gelöst (Dekompressions-Risiko!)",
        "Höhe: p↓ → p(O₂)↓ → Hypoxie; HBO: p↑ → p(O₂)↑ → mehr O₂ gelöst",
      ],
      klinischerBezug: "Bei der Narkosebeatmung werden Gasgesetze direkt angewendet: Das Atemzugvolumen, der PEEP (positiver endexspiratorischer Druck) und die Sauerstoffkonzentration werden nach physikalischen Prinzipien eingestellt, um eine adäquate O₂-Versorgung und CO₂-Elimination zu gewährleisten.",
      altfrage: {
        question: "Warum sollte ein Taucher beim Auftauchen niemals die Luft anhalten?",
        answer: "Beim Auftauchen sinkt der Umgebungsdruck. Nach Boyle-Mariotte dehnt sich das Gas in der Lunge aus (V ~ 1/p). Wenn man die Luft anhält und von 30 m (4 bar) auf die Oberfläche (1 bar) auftaucht, vervierfacht sich das Lungenvolumen theoretisch — dies führt zur Überblähung und Ruptur der Alveolen (Barotrauma, Pneumothorax, Luftembolie).",
      },
      selfTest: [
        {
          question: "Was passiert physikalisch beim Einatmen (Inspiration)?",
          options: [
            "Das Zwerchfell entspannt sich, das Lungenvolumen sinkt, der Druck steigt, Luft strömt ein",
            "Das Zwerchfell kontrahiert, das Lungenvolumen steigt, der Druck sinkt unter Atmosphärendruck, Luft strömt ein",
            "Die Rippen senken sich, das Lungenvolumen sinkt, ein Sog entsteht, Luft wird eingesaugt",
            "Das Zwerchfell kontrahiert, der Druck steigt über Atmosphärendruck, Luft wird hineingepresst",
            "Die Lunge dehnt sich aktiv aus und saugt Luft aktiv an",
          ],
          correctIndex: 1,
          explanation: "Bei der Inspiration kontrahiert das Zwerchfell und senkt sich, die äußeren Intercostalmuskeln heben die Rippen. Das Lungenvolumen nimmt zu → nach Boyle-Mariotte sinkt der intrapulmonale Druck unter den Atmosphärendruck → Luft strömt passiv ein.",
          hints: [
            "Die Lunge kann sich nicht selbst bewegen — was bewegt sie?",
            "Boyle-Mariotte: Volumen↑ → Druck↓",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was ist die physikalische Ursache der Dekompressionskrankheit?",
          options: [
            "Zu viel O₂ löst sich beim Tauchen im Blut und vergiftet den Körper",
            "Der Druck auf die Lunge verhindert die Atmung in der Tiefe",
            "N₂ löst sich bei Tauchdruck im Blut; beim schnellen Auftauchen bilden sich Gasblasen",
            "CO₂ kann bei hohem Druck nicht mehr abgeatmet werden",
            "Das Blut gefriert bei hohem Unterwasserdruck",
          ],
          correctIndex: 2,
          explanation: "Nach Henry's Gesetz (c = k_H × p) löst sich bei hohem Druck mehr N₂ im Blut. Beim zu schnellen Auftauchen sinkt der Druck zu rasch → N₂ kann nicht über die Lunge abgeatmet werden → Gasblasen entstehen im Blut und Gewebe → Dekompressionskrankheit.",
          hints: [
            "Henry'sches Gesetz: Mehr Druck = mehr Gas gelöst",
            "Was passiert beim Entspannen einer Sprudelflasche?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Auf 4000 m Höhe beträgt der Luftdruck 0,6 bar. Wie groß ist der O₂-Partialdruck? (O₂-Anteil in Luft: 21%)",
          options: [
            "0,21 bar",
            "0,13 bar",
            "0,063 bar",
            "0,6 bar",
            "0,042 bar",
          ],
          correctIndex: 1,
          explanation: "p(O₂) = x(O₂) × p_ges = 0,21 × 0,6 bar = 0,126 bar ≈ 0,13 bar. Das sind nur 62% des normalen O₂-Partialdrucks auf Meereshöhe (0,21 bar).",
          hints: [
            "p(O₂) = Molenbruch × Gesamtdruck",
            "x(O₂) = 21% = 0,21",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Warum wirkt die hyperbare Sauerstofftherapie bei CO-Vergiftung?",
          options: [
            "O₂ bei hohem Druck neutralisiert CO chemisch zu CO₂",
            "Hoher p(O₂) verdrängt CO vom Hämoglobin und erhöht physikalisch gelöstes O₂ im Plasma",
            "Hoher Druck zerstört CO-Moleküle in der Lunge",
            "O₂ bei hohem Druck wird schneller vom Hämoglobin aufgenommen",
            "Hoher Druck verhindert, dass CO aus dem Körper transportiert wird",
          ],
          correctIndex: 1,
          explanation: "CO bindet ~240-mal stärker an Hämoglobin als O₂ (Carboxyhämoglobin). Bei hohem p(O₂) (HBO: bis 300 kPa) verschiebt das Massenwirkungsgesetz das Gleichgewicht zurück → O₂ verdrängt CO. Zudem löst sich mehr O₂ physikalisch im Plasma (nach Henry), genug zur Versorgung ohne Hämoglobin.",
          hints: [
            "CO blockiert Hämoglobin — wie kann O₂ es verdrängen?",
            "Henry'sches Gesetz: Mehr p(O₂) → mehr O₂ im Plasma gelöst",
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Ein Taucher atmet in 40 m Tiefe (p=5 bar, T=const). Welches Volumen hat sein Atemgas, wenn es auf Meereshöhe (1 bar) ausgedehnt wird?",
          options: [
            "Es bleibt gleich",
            "Es verdoppelt sich",
            "Es wird 5-mal größer",
            "Es wird 5-mal kleiner",
            "Es wird 25-mal größer",
          ],
          correctIndex: 2,
          explanation: "Boyle-Mariotte: p₁V₁ = p₂V₂ → V₂ = V₁ × p₁/p₂ = V₁ × 5/1 = 5V₁. Das Gasvolumen verfünffacht sich — deshalb ist das Anhalten der Luft beim Auftauchen lebensgefährlich (Lungenüberblähung).",
          hints: [
            "Boyle-Mariotte: p₁V₁ = p₂V₂ (T=const)",
            "Druckverhältnis: 5 bar / 1 bar = 5",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
  ],
};
