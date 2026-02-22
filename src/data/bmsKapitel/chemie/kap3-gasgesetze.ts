import type { Kapitel } from "../types";

export const chemKap3: Kapitel = {
  id: "chem-kap3",
  title: "Gasgesetze",
  subject: "chemie",
  icon: "💨",
  estimatedTime: "60 min",
  unterkapitel: [
    {
      id: "ch-3-01",
      title: "Ideale Gasgleichung pV=nRT",
      content: `## Die Ideale Gasgleichung

Die ideale Gasgleichung **pV = nRT** ist eine der fundamentalsten Gleichungen der physikalischen Chemie. Sie beschreibt das Verhalten eines hypothetischen idealen Gases und verknüpft vier makroskopische Zustandsgrößen:

- **p** = Druck [Pa = N/m²] oder [bar, atm, mmHg]: Der Druck ist die Kraft pro Fläche, die Gasteilchen durch Kollisionen auf die Behälterwand ausüben.
- **V** = Volumen [m³ oder L]: Das vom Gas eingenommene Raumvolumen.
- **n** = Stoffmenge [mol]: Gibt die Teilchenanzahl in Vielfachen der Avogadro-Zahl an (N_A = 6,022 × 10²³ mol⁻¹).
- **R** = universelle Gaskonstante = 8,314 J/(mol·K) = 8,314 Pa·m³/(mol·K) = 0,08314 L·bar/(mol·K) = 0,08206 L·atm/(mol·K).
- **T** = absolute Temperatur [K]: Kelvin = Celsius + 273,15. Niemals Celsius direkt einsetzen!

## Herleitung aus den Einzelgesetzen

Die ideale Gasgleichung ergibt sich aus der Kombination dreier historischer Gasgesetze:

**1. Gesetz von Boyle-Mariotte (1662):** Bei konstanter Temperatur (T = const) und konstanter Stoffmenge (n = const) ist das Produkt aus Druck und Volumen konstant: **p · V = const**, also p₁V₁ = p₂V₂. Physikalisch: Halbiert man das Volumen, verdoppelt sich die Stoßfrequenz der Teilchen auf die Wand → doppelter Druck.

**2. Gesetz von Charles/Gay-Lussac (1787/1802):** Bei konstantem Druck (p = const) ist das Volumen proportional zur absoluten Temperatur: **V/T = const**, also V₁/T₁ = V₂/T₂. Erhöht man T, steigt die kinetische Energie → Teilchen stoßen stärker → Volumen wächst, damit p konstant bleibt.

**3. Gesetz von Avogadro (1811):** Bei gleichem Druck und gleicher Temperatur enthalten gleiche Volumina aller idealen Gase gleich viele Teilchen: **V/n = const**. Das molare Volumen V_m = V/n ist bei STP stets 22,4 L/mol.

Kombiniert: p·V/(n·T) = R = const → **pV = nRT**.

## Umrechnungen und praktische Anwendung

Häufige Umformungen:

- Dichte eines Gases: ρ = m/V = M·p/(R·T), wobei M die molare Masse [g/mol] ist.
- Molare Masse aus Messung: M = m·R·T/(p·V)
- Konzentration: c = n/V = p/(R·T)

**Standardbedingungen:**
- STP (IUPAC seit 1982): 0 °C (273,15 K), 1 bar → V_m = 22,711 L/mol (exakt)
- Ältere Definition: 0 °C, 1 atm (101.325 Pa) → V_m = 22,414 L/mol (in vielen Büchern noch üblich)
- SATP: 25 °C (298,15 K), 1 bar → V_m = 24,790 L/mol

**Druckeinheiten im Überblick:**
- 1 atm = 101.325 Pa = 1,01325 bar = 760 mmHg (Torr)
- Normaldruck der Atmosphäre ≈ 101.300 Pa ≈ 1 bar
- Partialdruck: p_i = n_i·R·T/V (Anteil der Komponente i im Gemisch)

## Ideales vs. Reales Gas

Ein **ideales Gas** basiert auf zwei Modellannahmen:
1. Gasteilchen sind punktförmig (kein Eigenvolumen).
2. Keine intermolekularen Wechselwirkungen.

**Reale Gase** weichen davon ab, besonders bei:
- **Hohem Druck**: Eigenvolumen der Moleküle wird relevant → Gas schwerer komprimierbar → Kompressibilitätsfaktor Z = pV/(nRT) > 1.
- **Tiefer Temperatur**: Van-der-Waals-Anziehungskräfte dominieren → Gas leichter komprimierbar → Z < 1.
- **Nahe dem Kondensationspunkt**: Phasenübergänge treten auf.

## Van-der-Waals-Gleichung

Die van-der-Waals-Gleichung (1873) korrigiert das ideale Gasgesetz für reale Gase:

**(p + a·n²/V²) · (V − n·b) = n·R·T**

- **a** [L²·bar/mol²]: Korrigiert den Druck – intermolekulare Anziehung verringert den Wandstoß-Druck.
- **b** [L/mol]: Korrigiert das Volumen – Kovolumen (Eigenvolumen) der Moleküle.

Für H₂O: a = 5,537, b = 0,03049. Für He: a = 0,0346, b = 0,0238 (fast ideales Verhalten).

## Kinetische Gastheorie

Die mikroskopische Erklärung liefert die **kinetische Gastheorie** (Maxwell, Boltzmann):
- Mittlere kinetische Energie: E_kin = (3/2)·k_B·T, wobei k_B = 1,381 × 10⁻²³ J/K.
- Quadratischer Mittelwert der Geschwindigkeit: v_rms = √(3·R·T/M).
- Bei 25 °C hat N₂ (M = 0,028 kg/mol): v_rms = √(3 × 8,314 × 298 / 0,028) ≈ 515 m/s.`,
      lernziele: [
        "Die ideale Gasgleichung pV=nRT aus den Einzelgesetzen (Boyle-Mariotte, Charles, Avogadro) herleiten und auf Rechenaufgaben anwenden.",
        "Zustandsgrößen p, V, n, T mit korrekten Einheiten benennen und ineinander umrechnen (inkl. Druckeinheiten atm, bar, Pa, mmHg).",
        "Den Unterschied zwischen idealem und realem Gas erklären und die van-der-Waals-Gleichung interpretieren.",
        "Das molare Volumen bei Standardbedingungen (STP) kennen und zur Berechnung von Gasmassen/-mengen verwenden.",
        "Die kinetische Gastheorie als mikroskopische Grundlage der Gasgesetze beschreiben.",
      ],
      sections: [
        {
          heading: "Boyle-Mariotte: Druck und Volumen",
          text: "Das Gesetz von Boyle-Mariotte (1662) beschreibt das isothermische Verhalten idealer Gase: Bei konstanter Temperatur und Stoffmenge ist das Produkt p·V konstant. Verdoppelt man den Druck, halbiert sich das Volumen. Graphisch ergibt sich eine Hyperbel im p-V-Diagramm (Isotherme). Technisch genutzt wird dieses Prinzip bei Kompressoren, Fahrradpumpen und Tauchgeräten. Beim Auftauchen aus der Tiefe dehnen sich Gasblasen im Blut aus – dies ist die physikalische Grundlage der gefährlichen Dekompressionskrankheit.",
          merksatz:
            "p · V = const (bei T, n = const): Druck und Volumen sind umgekehrt proportional – halbiertes Volumen, doppelter Druck.",
        },
        {
          heading: "Charles und Gay-Lussac: Temperatur und Volumen/Druck",
          text: "Das Gesetz von Charles (isobar, p = const): V/T = const – Volumen und Kelvin-Temperatur sind direkt proportional. Das Gesetz von Gay-Lussac (isochor, V = const): p/T = const – Druck und Kelvin-Temperatur sind direkt proportional. Beide Gesetze erfordern die absolute Temperaturskala in Kelvin. Senkt man ein Gas auf 0 K ab, würde sein Volumen theoretisch null – der absolute Nullpunkt. Im Alltag: Ein Autoreifen zeigt im Sommer höheren Druck als im Winter, da bei höherer Temperatur die Gasmoleküle schneller sind und häufiger stoßen (isochore Näherung).",
          merksatz:
            "V/T = const (isobar) und p/T = const (isochor): Temperatur immer in Kelvin! T[K] = T[°C] + 273,15.",
        },
        {
          heading: "Avogadro und das molare Volumen",
          text: "Avogadros Gesetz (1811): Gleiche Volumina idealer Gase enthalten bei gleichem p und T gleich viele Teilchen, unabhängig von der chemischen Natur. V/n = const (bei p, T = const). Das molare Volumen V_m bei STP (0 °C, 1 bar) beträgt 22,4 L/mol. Damit gilt: 1 mol O₂ (32 g) und 1 mol CO₂ (44 g) nehmen bei STP dasselbe Volumen ein! Diese Erkenntnis ermöglicht es, aus gemessenem Gasvolumen direkt auf die Stoffmenge zu schließen – fundamental für Stöchiometrie und Gasanalyse.",
          merksatz:
            "V_m = 22,4 L/mol bei STP (0 °C, 1 bar): Jedes ideale Gas belegt bei Standardbedingungen dasselbe molare Volumen – unabhängig von seiner Molmasse!",
        },
        {
          heading: "Reale Gase und van-der-Waals-Gleichung",
          text: "Reale Gase weichen vom Idealverhalten ab, wenn der Druck hoch oder die Temperatur niedrig ist. Der Kompressibilitätsfaktor Z = pV/(nRT) misst die Abweichung: Z = 1 (ideal), Z > 1 (Eigenvolumen dominiert, Gas schwerer komprimierbar), Z < 1 (Anziehung dominiert). Die van-der-Waals-Gleichung korrigiert beide Effekte: (p + a·n²/V²)(V − nb) = nRT. In der Medizin relevant: Anästhesiegase wie Halothan oder Desfluran sind reale Gase; ihre Löslichkeit in Blut und Gewebe hängt von intermolekularen Kräften ab.",
          merksatz:
            "Z = pV/(nRT): Bei Z = 1 ideales Gas; Z > 1 Eigenvolumen dominiert; Z < 1 Anziehungskräfte dominieren.",
        },
      ],
      merksätze: [
        "pV = nRT: Druck mal Volumen gleich Stoffmenge mal Gaskonstante mal Temperatur (immer in Kelvin!).",
        "R = 8,314 J/(mol·K) = 0,08314 L·bar/(mol·K) = 0,08206 L·atm/(mol·K): Die universelle Gaskonstante.",
        "V_m = 22,4 L/mol bei STP (0 °C, 1 bar): Das molare Volumen jedes idealen Gases.",
        "Boyle-Mariotte: p·V = const (isotherm) – Druck und Volumen umgekehrt proportional.",
        "Charles: V/T = const (isobar) – Volumen und Kelvin-Temperatur direkt proportional.",
        "Gay-Lussac: p/T = const (isochor) – Druck und Kelvin-Temperatur direkt proportional.",
        "Avogadro: Gleiche Volumina idealer Gase (bei gleichem p, T) enthalten gleich viele Teilchen.",
        "K = °C + 273,15: Immer in Kelvin rechnen – negative Kelvin-Werte sind physikalisch unmöglich.",
        "Reales Gas weicht bei hohem Druck (Z > 1) und tiefer Temperatur (Z < 1) vom Idealverhalten ab.",
        "Van-der-Waals: (p + an²/V²)(V − nb) = nRT – a korrigiert Anziehung, b korrigiert Eigenvolumen.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie die ideale Gasgleichung pV = nRT und erklären Sie, unter welchen Bedingungen reale Gase davon abweichen. Welche Korrekturen nimmt die van-der-Waals-Gleichung vor?",
        answer: `Die ideale Gasgleichung pV = nRT verknüpft Druck (p), Volumen (V), Stoffmenge (n), universelle Gaskonstante (R = 8,314 J/(mol·K)) und absolute Temperatur (T in Kelvin). Sie entstand durch Kombination der Gesetze von Boyle-Mariotte (pV = const bei T = const), Charles (V/T = const bei p = const) und Avogadro (V/n = const bei p, T = const). Das Modell setzt voraus: (1) Gasteilchen sind punktförmig (kein Eigenvolumen), (2) keine intermolekularen Wechselwirkungen.

Reale Gase weichen besonders bei hohem Druck und tiefer Temperatur vom Idealverhalten ab. Bei hohem Druck wird das Eigenvolumen der Moleküle relevant – das freie Volumen ist kleiner als angenommen, der Kompressibilitätsfaktor Z = pV/(nRT) steigt über 1. Bei tiefer Temperatur überwiegen van-der-Waals-Anziehungskräfte (London-Dispersion, Dipol-Dipol-Wechselwirkungen), die den effektiven Wanddruck verringern – Z sinkt unter 1.

Die van-der-Waals-Gleichung (p + a·n²/V²)(V − n·b) = nRT korrigiert beide Effekte: Der Term a·n²/V² addiert zum gemessenen Druck, um den durch Anziehungskräfte verringerten Wandstoß-Druck zu kompensieren. Der Term nb subtrahiert das Kovolumen der Moleküle vom Gesamtvolumen (V − nb = freies Volumen). Die substanzspezifischen Konstanten a und b spiegeln Polarität und Molekülgröße wider: H₂O (a = 5,537, stark polar) weicht viel stärker ab als He (a = 0,0346, kaum Wechselwirkungen). Nahe dem Kondensationspunkt versagt die van-der-Waals-Gleichung ebenfalls.`,
      },
      klinischerBezug:
        "In der Anästhesiologie werden volatile Anästhetika (Sevofluran, Desfluran) als Gase dosiert; ihre Partialdruck-Verhältnisse im Blut folgen realen Gasgesetzen und bestimmen die Narkosetiefe (Blut-Gas-Löslichkeitskoeffizient). In der Pneumologie gilt: Der alveoläre Gasdruck ist die Summe der Partialdrücke von O₂ (≈13 kPa), CO₂ (≈5,3 kPa), N₂ und H₂O-Dampf bei 37 °C; Abweichungen zeigen pulmonale Erkrankungen an. Bei der Dekompressionserkrankung dehnen sich nach Boyle-Mariotte beim schnellen Auftauchen N₂-Blasen aus dem Blut aus und blockieren Gefäße.",
      selfTest: [
        {
          question:
            "Ein ideales Gas bei 27 °C und 2 bar hat ein Volumen von 5 L. Auf welches Volumen ändert es sich, wenn der Druck auf 4 bar steigt und die Temperatur auf 127 °C erhöht wird?",
          options: ["A) 3,33 L", "B) 2,50 L", "C) 4,17 L", "D) 6,67 L", "E) 1,25 L"],
          correctIndex: 0,
          explanation:
            "Kombinierte Gasgleichung: p₁V₁/T₁ = p₂V₂/T₂. T₁ = 27 + 273 = 300 K, T₂ = 127 + 273 = 400 K. V₂ = V₁ × (p₁/p₂) × (T₂/T₁) = 5 × (2/4) × (400/300) = 5 × 0,5 × 1,333 = 3,33 L. Der Druckanstieg von 2→4 bar halbiert das Volumen (Boyle-Mariotte), die Temperaturerhöhung von 300→400 K vergrößert es um Faktor 4/3 (Charles). Netto: 5 × 0,5 × 4/3 = 3,33 L. Merke: Celsius NIEMALS direkt in die Gasformel einsetzen – immer zuerst in Kelvin umrechnen!",
          hints: [
            "Verwende p₁V₁/T₁ = p₂V₂/T₂ und rechne Celsius in Kelvin um: K = °C + 273,15.",
            "Druckerhöhung verkleinert Volumen (Boyle); Temperaturerhöhung vergrößert es (Charles) – beide Effekte kombinieren.",
          ],
          difficulty: 2,
          tags: ["gasgesetze", "boyle-mariotte", "rechnen"],
        },
        {
          question: "Welches der folgenden Gase weicht am stärksten vom idealen Verhalten ab?",
          options: [
            "A) Helium (He) bei 100 °C und 1 bar",
            "B) Stickstoff (N₂) bei 25 °C und 1 bar",
            "C) Wasserdampf (H₂O) bei 200 °C und 100 bar",
            "D) Argon (Ar) bei 0 °C und 1 bar",
            "E) Wasserstoff (H₂) bei 50 °C und 2 bar",
          ],
          correctIndex: 2,
          explanation:
            "Reale Gase weichen vom Idealverhalten ab, wenn (1) der Druck hoch ist (Eigenvolumen der Moleküle relevant) und (2) die Temperatur niedrig ist (intermolekulare Kräfte stark). H₂O bei 200 °C und 100 bar erfüllt beide Bedingungen: extrem hoher Druck UND starke Dipol-Dipol-Wechselwirkungen sowie Wasserstoffbrückenbindungen (sehr großes a in van-der-Waals-Gleichung: a = 5,537 L²·bar/mol²). Edelgase wie He und Ar haben kaum Wechselwirkungen (kleines a) und verhalten sich auch unter moderatem Druck noch weitgehend ideal. H₂ und N₂ zeigen bei Normaldruck und mittlerer Temperatur kaum Abweichungen.",
          hints: [
            "Starke Abweichungen bei hohem Druck UND tiefer Temperatur und/oder polaren Molekülen.",
            "H₂O hat Wasserstoffbrückenbindungen – sehr großes a in van-der-Waals; 100 bar ist extrem hoher Druck.",
          ],
          difficulty: 2,
          tags: ["reale-gase", "van-der-waals", "abweichung"],
        },
        {
          question: "Was ist der korrekte Wert der universellen Gaskonstante R?",
          options: [
            "A) 8,314 J/(mol·K)",
            "B) 6,022 × 10²³ J/(mol·K)",
            "C) 1,381 × 10⁻²³ J/K",
            "D) 9,81 m/s²",
            "E) 22,4 J/(mol·K)",
          ],
          correctIndex: 0,
          explanation:
            "R = 8,314 J/(mol·K) ist die universelle Gaskonstante. Weitere Einheiten: 0,08314 L·bar/(mol·K) oder 0,08206 L·atm/(mol·K). Option B ist die Avogadro-Zahl N_A = 6,022 × 10²³ mol⁻¹ (keine Energieeinheit). Option C ist die Boltzmann-Konstante k_B = R/N_A = 1,381 × 10⁻²³ J/K, die für einzelne Teilchen gilt (nicht pro Mol). Option D ist die Erdbeschleunigung g. Option E entspricht dem molaren Volumen in L/mol, nicht der Gaskonstante. Merke: R und k_B sind verwandt durch R = k_B × N_A.",
          hints: [
            "R gilt pro Mol, k_B (Boltzmann) gilt pro Teilchen: R = k_B × N_A.",
            "Einheit von R muss mit pV=nRT konsistent sein: [Pa·m³/(mol·K)] = [J/(mol·K)].",
          ],
          difficulty: 1,
          tags: ["gaskonstante", "avogadro", "boltzmann"],
        },
        {
          question:
            "Wie viele Gramm CO₂ (M = 44 g/mol) befinden sich in einem 10-L-Behälter bei 0 °C und 2 bar?",
          options: ["A) 39,3 g", "B) 44,0 g", "C) 19,6 g", "D) 88,0 g", "E) 22,0 g"],
          correctIndex: 0,
          explanation:
            "Mit pV = nRT: n = pV/(RT). Einheiten L·bar: n = (2 bar × 10 L) / (0,08314 L·bar/(mol·K) × 273,15 K) = 20 / 22,71 = 0,881 mol. Masse: m = n × M = 0,881 mol × 44 g/mol = 38,8 g ≈ 39,3 g. Probe: Bei STP (1 bar, 0 °C) passen in 10 L genau 10/22,4 = 0,446 mol. Bei 2 bar (doppelter Druck) doppelt so viel: 0,892 mol → 39,3 g. Merke: 0 °C = 273,15 K – immer in Kelvin umrechnen!",
          hints: [
            "n = pV/(RT). Verwende R = 0,08314 L·bar/(mol·K) wenn p in bar und V in L.",
            "Bei STP passen 22,4 L = 1 mol. Bei 2 bar und 0 °C passen in 10 L doppelt so viel wie bei 1 bar.",
          ],
          difficulty: 2,
          tags: ["co2-masse", "pv-nrt", "rechnen"],
        },
        {
          question: "Welche Aussage zu Avogadros Gesetz ist korrekt?",
          options: [
            "A) Bei gleichem Druck und gleicher Temperatur enthalten gleiche Gasvolumina gleich viele Teilchen, unabhängig von der Molmasse.",
            "B) Schwerere Gase enthalten bei STP mehr Mol als leichtere Gase im gleichen Volumen.",
            "C) Das molare Volumen hängt bei STP von der Molmasse des Gases ab.",
            "D) Avogadros Gesetz gilt nur für einatomige Edelgase.",
            "E) 1 mol eines idealen Gases belegt bei STP stets 11,2 L.",
          ],
          correctIndex: 0,
          explanation:
            "Avogadros Gesetz (1811): Bei gleichen Bedingungen (p, T) enthalten gleiche Volumina aller idealen Gase gleich viele Teilchen, unabhängig von deren Masse oder chemischer Natur. Deshalb ist das molare Volumen V_m = 22,4 L/mol bei STP für ALLE idealen Gase gleich. 1 mol He (4 g), 1 mol N₂ (28 g) und 1 mol CO₂ (44 g) nehmen bei STP je 22,4 L ein. Option B und C sind falsch (Molmasse irrelevant für Teilchenanzahl). Option D ist falsch (gilt für alle idealen Gase). Option E ist falsch (22,4 L, nicht 11,2 L).",
          hints: [
            "V/n = const bei p, T = const. Die Teilchenzahl – nicht die Masse – bestimmt das Volumen.",
            "Das molare Volumen bei STP (0 °C, 1 bar) = 22,4 L/mol für jedes ideale Gas.",
          ],
          difficulty: 1,
          tags: ["avogadro", "molares-volumen", "stp"],
        },
        {
          question:
            "In der van-der-Waals-Gleichung (p + an²/V²)(V − nb) = nRT: Was korrigiert der Parameter b?",
          options: [
            "A) Das Eigenvolumen der Gasmoleküle (Kovolumen)",
            "B) Die intermolekularen Anziehungskräfte zwischen den Molekülen",
            "C) Die Temperaturabhängigkeit der Wechselwirkungen",
            "D) Den Druck bei hoher Teilchendichte",
            "E) Die Abweichung der Molmasse vom idealen Wert",
          ],
          correctIndex: 0,
          explanation:
            "In der van-der-Waals-Gleichung korrigiert b (Kovolumen) das Eigenvolumen der Gasmoleküle: Das tatsächlich freie Volumen ist nicht V, sondern (V − nb). Jedes Mol Moleküle beansprucht ein Ausschlussvolumen von b Litern. Bei hohem Druck ist (V − nb) deutlich kleiner als V – das erklärt Z > 1 (Gas schwerer komprimierbar). Der Parameter a korrigiert dagegen den Druck: Intermolekulare Anziehung verringert den Impuls der Wandstöße, der wahre Druck (p + an²/V²) ist höher als gemessen. Merke: a → Druckkorrektur (Anziehung), b → Volumenkorrektur (Eigenvolumen).",
          hints: [
            "b korrigiert das Volumen (Eigenvolumen), a korrigiert den Druck (Anziehungskräfte).",
            "(V − nb) = freies Volumen. nb = Gesamtvolumen aller Moleküle selbst.",
          ],
          difficulty: 2,
          tags: ["van-der-waals", "kovolumen", "eigenvolumen"],
        },
        {
          question:
            "Ein Taucher atmet bei 30 m Wassertiefe (Gesamtdruck ca. 4 bar) Luft. Wie ändert sich das Volumen einer 1-L-Luftblase beim Aufstieg zur Oberfläche (1 bar, T = const)?",
          options: [
            "A) Sie wird 4-mal größer (4 L)",
            "B) Sie bleibt gleich groß (1 L)",
            "C) Sie wird 2-mal größer (2 L)",
            "D) Sie wird 0,25-mal kleiner (0,25 L)",
            "E) Sie wird 3-mal größer (3 L)",
          ],
          correctIndex: 0,
          explanation:
            "Nach Boyle-Mariotte bei T = const: p₁V₁ = p₂V₂. Mit p₁ = 4 bar, V₁ = 1 L, p₂ = 1 bar: V₂ = p₁V₁/p₂ = 4 × 1/1 = 4 L. Die Blase vervierfacht ihr Volumen. Dies ist der physikalische Mechanismus der Dekompressionskrankheit: Unter hohem Druck löst sich N₂ vermehrt im Blut (Henry-Gesetz). Beim schnellen Auftauchen dehnen sich N₂-Blasen aus und blockieren Blutgefäße. Therapie: Rekompression in der Überdruckkammer, dann langsames kontrolliiertes Auftauchen mit Dekompressionsstopps.",
          hints: [
            "Boyle-Mariotte: p₁V₁ = p₂V₂. Wie verhält sich das Volumen bei Druckabfall von 4 auf 1 bar?",
            "Bei 30 m Tiefe: 1 bar Luftdruck + 3 bar Wassersäule (je 10 m ≈ 1 bar) = 4 bar gesamt.",
          ],
          difficulty: 1,
          tags: ["boyle-mariotte", "tauchen", "dekompressionskrankheit"],
        },
        {
          question:
            "Welchen Wert hat die quadratische Mittelgeschwindigkeit v_rms von N₂ (M = 0,028 kg/mol) bei 300 K? (R = 8,314 J/(mol·K))",
          options: ["A) ≈ 517 m/s", "B) ≈ 184 m/s", "C) ≈ 1034 m/s", "D) ≈ 299 m/s", "E) ≈ 89 m/s"],
          correctIndex: 0,
          explanation:
            "v_rms = √(3RT/M) aus der kinetischen Gastheorie. Mit R = 8,314 J/(mol·K), T = 300 K, M = 0,028 kg/mol: v_rms = √(3 × 8,314 × 300 / 0,028) = √(7482,6 / 0,028) = √(267.236) ≈ 517 m/s. Gasmoleküle bewegen sich bei Raumtemperatur mit über 500 m/s (ca. 1,5-fache Schallgeschwindigkeit)! Schwerere Gase sind langsamer: CO₂ (M = 0,044 kg/mol) hat v_rms ≈ 411 m/s bei 300 K. Diese hohen Geschwindigkeiten erklären die schnelle makroskopische Gasdiffusion. Merke: M muss in kg/mol eingesetzt werden!",
          hints: [
            "v_rms = √(3RT/M). M in kg/mol einsetzen (0,028, nicht 28).",
            "J/(mol·K) × K / (kg/mol) = J/kg = m²/s² → Wurzel ergibt m/s.",
          ],
          difficulty: 3,
          tags: ["v-rms", "kinetische-gastheorie", "rechnen"],
        },
      ],
    },
    {
      id: "ch-3-02",
      title: "Dalton's Partialdruck-Gesetz",
      content: `## Das Daltonsche Partialdruck-Gesetz

Das Daltonsche Gesetz (John Dalton, 1801) beschreibt das Druckverhalten von Gasgemischen:

**Der Gesamtdruck eines Gasgemisches ist gleich der Summe der Partialdrücke aller Komponenten:**

p_gesamt = p₁ + p₂ + p₃ + ... = Σ pᵢ

Dabei ist der **Partialdruck** pᵢ derjenige Druck, den jede Gaskomponente allein ausüben würde, wenn sie das gesamte Volumen des Behälters ausfüllte:

pᵢ = nᵢ · R · T / V = xᵢ · p_gesamt

**xᵢ = Molenbruch** der Komponente i: xᵢ = nᵢ / n_gesamt (dimensionslos, zwischen 0 und 1, Summe = 1).

## Physikalische Begründung

Das Daltonsche Gesetz gilt exakt für ideale Gase, da ideale Gasteilchen keine Wechselwirkungen haben. Jede Gassorte bewegt sich völlig unabhängig von den anderen und trägt unabhängig zum Gesamtdruck bei. Für reale Gase gilt es nur näherungsweise.

**Wichtig:** Bei feuchter Luft muss der Wasserdampfdruck berücksichtigt werden! Bei 37 °C (Körpertemperatur) beträgt p(H₂O) ≈ 6,27 kPa (47 mmHg).

## Alveolarer Gasaustausch

In der Atemphysiologie sind Partialdrücke zentral. Die **Alveolarluft** bei 37 °C und 101,325 kPa (nach Wasserdampfsättigung):

- p(O₂)_alveolär ≈ 13,3 kPa (100 mmHg)
- p(CO₂)_alveolär ≈ 5,3 kPa (40 mmHg)
- p(N₂) ≈ 76,4 kPa
- p(H₂O) = 6,27 kPa (37 °C, gesättigt)

O₂-Partialdruck im venösen Blut ≈ 5,3 kPa (40 mmHg) → O₂ diffundiert Alveole → Blut (Druckgradient). CO₂ im venösen Blut ≈ 6,1 kPa (46 mmHg) > 5,3 kPa alveolär → CO₂ diffundiert Blut → Alveole.

## Berechnung mit Molenbrüchen

**Beispiel:** Gasgemisch: 2 mol N₂, 1 mol O₂, 0,5 mol CO₂. Gesamtdruck 3 bar.
- n_gesamt = 3,5 mol
- x(N₂) = 2/3,5 = 0,571 → p(N₂) = 0,571 × 3 = 1,714 bar
- x(O₂) = 1/3,5 = 0,286 → p(O₂) = 0,286 × 3 = 0,857 bar
- x(CO₂) = 0,5/3,5 = 0,143 → p(CO₂) = 0,143 × 3 = 0,429 bar
- Kontrolle: 1,714 + 0,857 + 0,429 = 3,000 bar ✓

## Henry-Gesetz und Gaslöslichkeit

Das Henry-Gesetz ergänzt das Daltonsche Gesetz für Gaslöslichkeit in Flüssigkeiten:

**c = k_H · p**

wobei k_H die substanzspezifische Henry-Konstante ist. Bei erhöhtem O₂-Partialdruck (Sauerstofftherapie) löst sich mehr O₂ physikalisch im Plasma. Bei Kohlensäuregetränken wird CO₂ unter Druck gelöst; beim Öffnen sinkt p → CO₂ perlt aus.

## Gasgemische in der Medizin

- **Raumluft:** O₂ 21 % → p(O₂) ≈ 21 kPa
- **Sauerstofftherapie:** F_IO₂ = 0,4–1,0 → deutlich erhöhte p(O₂) → mehr physikalisch gelöstes O₂
- **Lachgas/O₂ (Entonox®):** 50:50 N₂O/O₂ als Analgetikum
- **Heliox (He/O₂):** Bei obstruktiver Atemwegserkrankung – He (leichter als N₂) senkt den Gasströmungswiderstand
- **Tauchgas:** Komprimierte Luft → erhöhte Partialdrücke aller Gase → N₂-Narkose (Tiefenrausch) ab p(N₂) > 3–4 bar`,
      lernziele: [
        "Das Daltonsche Partialdruck-Gesetz formulieren und Partialdrücke aus Molenbrüchen berechnen.",
        "Die atmosphärische Zusammensetzung (N₂, O₂, CO₂, H₂O) in Partialdrücken angeben und ihre Bedeutung in der Atemphysiologie erklären.",
        "Das Henry-Gesetz als Ergänzung des Daltonschen Gesetzes für Gaslöslichkeit beschreiben.",
        "Klinische Anwendungen (Sauerstofftherapie, Tauchen, Anästhesie) auf Basis von Partialdrücken erläutern.",
      ],
      sections: [
        {
          heading: "Partialdruck und Molenbruch",
          text: "Der Partialdruck pᵢ ist der Druck, den eine Gaskomponente allein im Gesamtvolumen ausüben würde. Er ist direkt proportional zum Molenbruch: pᵢ = xᵢ · p_gesamt, wobei xᵢ = nᵢ/n_gesamt. Da alle Molenbrüche sich zu 1 addieren, addieren sich alle Partialdrücke zum Gesamtdruck. Diese Beziehung gilt exakt für ideale Gase (keine Kreuzwechselwirkungen) und näherungsweise für reale Gase bei moderatem Druck. Bei feuchter Luft muss der Sättigungsdampfdruck des Wassers berücksichtigt werden: p(trocken) = p_gesamt − p(H₂O).",
          merksatz:
            "p_gesamt = Σ pᵢ = Σ xᵢ · p_gesamt: Jede Gaskomponente trägt mit ihrem Molenbruch zum Gesamtdruck bei.",
        },
        {
          heading: "Alveolarer Gasaustausch und Diffusionsgradienten",
          text: "O₂ diffundiert aus der Alveole (p(O₂) ≈ 13,3 kPa) ins venöse Blut (p(O₂) ≈ 5,3 kPa) – immer von höherem zu niedrigerem Partialdruck (Fick'sches Diffusionsgesetz). CO₂ diffundiert in Gegenrichtung: venöses Blut (6,1 kPa) → Alveole (5,3 kPa). Diese Gradienten werden durch die alveolo-kapilläre Membran ermöglicht, die nur 0,3–0,5 μm dick ist. Bei Lungenödem oder Fibrose verdickt sich diese Membran – Gasaustausch gestört, O₂-Sättigung sinkt. Sauerstofftherapie (hohe F_IO₂) erhöht p(O₂) alveolär und treibt trotz verminderter Diffusionskapazität mehr O₂ ins Blut.",
          merksatz:
            "Gase diffundieren immer von hohem zu niedrigem Partialdruck – der Gradient ist die Triebkraft des Gasaustauschs.",
        },
        {
          heading: "Henry-Gesetz und medizinische Anwendungen",
          text: "Das Henry-Gesetz c = k_H · p beschreibt die physikalische Löslichkeit von Gasen in Flüssigkeiten: Bei höherem Partialdruck löst sich mehr Gas. Anwendungen: (1) Taucherkrankheit: Hoher N₂-Partialdruck unter Wasser → viel N₂ im Blut gelöst; bei schnellem Druckabfall perlt N₂ aus (wie Sekt beim Öffnen) → Gasblasen in Gefäßen und Gewebe. (2) Hyperbare Sauerstofftherapie: 100 % O₂ bei 2–3 bar → physikalisch gelöstes O₂ im Plasma stark erhöht → Behandlung von CO-Vergiftung, Gasbrand, Wundheilungsstörungen. (3) CO₂ in Sprudel: Unter Druck gelöst, entweicht beim Öffnen.",
          merksatz:
            "Henry: c = k_H · p. Mehr Druck → mehr Gas gelöst. Plötzlicher Druckabfall → Gasblasenbildung (Taucherunfall).",
        },
        {
          heading: "Partialdrücke in der Atmosphäre",
          text: "Trockene Luft (bei 1 atm = 101,325 kPa) enthält folgende Gase mit ihren Molenbrüchen und Partialdrücken.",
          merksatz:
            "Luft: 78 % N₂ (≈79 kPa), 21 % O₂ (≈21 kPa), 1 % Ar, 0,04 % CO₂ – bei 101,3 kPa Normaldruck.",
          table: {
            headers: ["Gas", "Molenbruch", "Partialdruck"],
            rows: [
              ["N₂", "0,7808", "79,12 kPa"],
              ["O₂", "0,2095", "21,22 kPa"],
              ["Ar", "0,0093", "0,94 kPa"],
              ["CO₂", "0,0004", "0,04 kPa"],
            ],
          },
        },
      ],
      merksätze: [
        "Daltonsches Gesetz: p_gesamt = p₁ + p₂ + ... = Σ pᵢ (Summe aller Partialdrücke).",
        "Partialdruck: pᵢ = xᵢ · p_gesamt, wobei xᵢ = nᵢ/n_gesamt der Molenbruch ist.",
        "Alveolarer O₂-Partialdruck: ≈13,3 kPa (100 mmHg); venöses Blut: ≈5,3 kPa (40 mmHg).",
        "O₂ diffundiert Alveole → Blut; CO₂ diffundiert Blut → Alveole: immer von höherem zu niedrigerem Partialdruck.",
        "Wasserdampf bei 37 °C: p(H₂O) = 6,27 kPa (47 mmHg) – bei Körpertemperatur immer berücksichtigen!",
        "Henry-Gesetz: c = k_H · p. Gaslöslichkeit proportional zum Partialdruck über der Flüssigkeit.",
        "Taucherkrankheit: N₂ löst sich unter Druck im Blut; schneller Druckabfall → Blasenbildung (Henry + Boyle).",
        "Heliox (He/O₂): Helium (4 g/mol) senkt Gasdichte → weniger Strömungswiderstand bei Atemwegsobstruktion.",
        "mmHg ↔ kPa: 1 mmHg = 0,1333 kPa; 1 kPa = 7,5 mmHg. Klinisch oft mmHg, wissenschaftlich kPa.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie das Daltonsche Partialdruck-Gesetz und seine Bedeutung für den pulmonalen Gasaustausch. Welche Rolle spielt das Henry-Gesetz dabei?",
        answer: `Das Daltonsche Gesetz (1801) besagt: p_gesamt = Σ pᵢ. Der Partialdruck jeder Komponente ist pᵢ = xᵢ · p_gesamt, wobei xᵢ = nᵢ/n_gesamt. Jede Gaskomponente eines idealen Gemisches verhält sich unabhängig von den anderen.

In der Atemphysiologie ist dies fundamental: Atmosphärische Luft enthält bei 101,3 kPa ca. 21,2 kPa O₂ und 0,04 kPa CO₂. In der Alveole, gesättigt mit Wasserdampf bei 37 °C (p(H₂O) = 6,27 kPa), beträgt p(O₂) alveolär ≈ 13,3 kPa und p(CO₂) ≈ 5,3 kPa. Im venösen Blut ist p(O₂) ≈ 5,3 kPa und p(CO₂) ≈ 6,1 kPa. Diese Partialdruckgradienten treiben die Diffusion: O₂ diffundiert Alveole → Blut, CO₂ in entgegengesetzter Richtung.

Das Henry-Gesetz (c = k_H · p) beschreibt die physikalische Löslichkeit: Im Blut sind ca. 98,5 % des O₂ an Hämoglobin gebunden; nur 1,5 % physikalisch gelöst. Bei Sauerstofftherapie (hohe F_IO₂) steigt auch der physikalisch gelöste Anteil – entscheidend bei CO-Vergiftung (hyperbare O₂-Therapie verdrängt CO vom Hämoglobin). Die Taucherkrankheit illustriert beide Gesetze: Erhöhter Gesamtdruck → erhöhter N₂-Partialdruck → mehr N₂ gelöst (Henry). Schneller Druckabfall → N₂ perlt aus → Gasblasen in Gewebe (Boyle). Therapie: hyperbare Rekompression.`,
      },
      klinischerBezug:
        "In der Intensivmedizin wird die F_IO₂ (inspiratorische O₂-Fraktion) gezielt eingestellt: Bei F_IO₂ = 1,0 und 101,3 kPa beträgt p(O₂) alveolär nach H₂O-Abzug ca. 95 kPa – weit über den 13,3 kPa der Raumluft. Die hyperbare Oxygenierung (2–3 bar, 100 % O₂) nutzt das Henry-Gesetz: Physikalisch gelöstes O₂ im Plasma steigt auf > 6 ml/dl (normal: 0,3 ml/dl), sodass Gewebe auch ohne funktionstüchtiges Hämoglobin versorgt werden können – Therapieprinzip bei CO-Vergiftung und Gasbrand.",
      selfTest: [
        {
          question:
            "Ein Gasgemisch enthält 3 mol N₂, 1 mol O₂ und 1 mol CO₂. Der Gesamtdruck beträgt 5 bar. Wie groß ist der Partialdruck von O₂?",
          options: ["A) 1,0 bar", "B) 0,5 bar", "C) 2,0 bar", "D) 1,5 bar", "E) 0,2 bar"],
          correctIndex: 0,
          explanation:
            "n_gesamt = 3 + 1 + 1 = 5 mol. Molenbruch O₂: x(O₂) = 1/5 = 0,2. Partialdruck: p(O₂) = 0,2 × 5 bar = 1,0 bar. Kontrolle: p(N₂) = (3/5) × 5 = 3 bar; p(CO₂) = (1/5) × 5 = 1 bar. Summe: 3 + 1 + 1 = 5 bar ✓. Das Daltonsche Gesetz gilt für ideale Gase exakt: Jede Komponente trägt proportional zu ihrem Molenbruch zum Gesamtdruck bei, unabhängig von den anderen Gasen.",
          hints: [
            "x(O₂) = n(O₂)/n_gesamt = 1/5 = 0,2. Dann: p(O₂) = x(O₂) × p_gesamt.",
            "n_gesamt = Summe aller Molzahlen: 3 + 1 + 1 = 5 mol.",
          ],
          difficulty: 1,
          tags: ["partialdruck", "dalton", "molenbruch"],
        },
        {
          question:
            "Warum muss bei der Berechnung des alveolären O₂-Partialdrucks der Wasserdampfdruck berücksichtigt werden?",
          options: [
            "A) Weil Wasserdampf bei 37 °C einen Partialdruck von ca. 6,27 kPa hat, der den verfügbaren Anteil für O₂ und CO₂ reduziert.",
            "B) Weil Wasser O₂ chemisch bindet und so den Partialdruck senkt.",
            "C) Weil Wasserdampf den N₂-Partialdruck erhöht.",
            "D) Weil Wasserdampf bei 37 °C kondensiert und kein Gas mehr ist.",
            "E) Weil Wasser das Henry-Gesetz ungültig macht.",
          ],
          correctIndex: 0,
          explanation:
            "Bei 37 °C ist eingeatmete Luft in der Lunge vollständig mit Wasserdampf gesättigt. Der Sättigungsdampfdruck beträgt ca. 6,27 kPa (47 mmHg). Nach Dalton: p_gesamt = p(O₂) + p(CO₂) + p(N₂) + p(H₂O). Bei p_gesamt = 101,3 kPa verbleiben für O₂, CO₂ und N₂ zusammen nur 101,3 − 6,27 = 95,0 kPa. Der O₂-Anteil von 21 % trifft dann auf 95,0 kPa (minus CO₂-Anteil) → p(O₂)_alveolär ≈ 13,3 kPa statt der 21,2 kPa der trockenen Außenluft.",
          hints: [
            "Dalton: p_gesamt = Σ pᵢ. H₂O-Dampf belegt bei 37 °C schon 6,27 kPa des Gesamtdrucks.",
            "Sättigungsdampfdruck H₂O bei 37 °C = 6,27 kPa (47 mmHg) – diese Zahl im medizinischen Kontext wichtig.",
          ],
          difficulty: 2,
          tags: ["alveolarer-gasaustausch", "wasserdampfdruck", "partialdruck"],
        },
        {
          question:
            "Ein Taucher taucht auf 40 m Tiefe (Gesamtdruck 5 bar). Wie groß ist der N₂-Partialdruck in der Atemluft (Luft: 78 % N₂)?",
          options: ["A) 3,9 bar", "B) 0,78 bar", "C) 5,0 bar", "D) 2,5 bar", "E) 1,95 bar"],
          correctIndex: 0,
          explanation:
            "p(N₂) = x(N₂) × p_gesamt = 0,78 × 5 bar = 3,9 bar. An der Oberfläche (1 bar): p(N₂) = 0,78 bar. Unter Wasser steigt der N₂-Partialdruck auf das 5-fache! Nach Henry-Gesetz löst sich entsprechend 5× mehr N₂ im Blut. Ab p(N₂) ≈ 3 bar (≈ 30 m mit Luft) tritt Stickstoffnarkose (Tiefenrausch) auf: N₂ wirkt euphorisierend und sedierend, was unter Wasser lebensgefährlich werden kann. Je 10 m Wassertiefe erhöht sich der Druck um ca. 1 bar (Wasserdruck = ρgh ≈ 1000 × 9,81 × 10 = 98.100 Pa ≈ 1 bar).",
          hints: [
            "p(N₂) = 0,78 × p_gesamt. Bei 40 m Tiefe: Gesamtdruck = 1 bar Luft + 4 bar Wasser = 5 bar.",
            "Je 10 m Tiefe ≈ 1 bar Überdruck. Bei 40 m: 1 + 4 = 5 bar gesamt.",
          ],
          difficulty: 2,
          tags: ["partialdruck", "tauchmedizin", "stickstoffnarkose"],
        },
        {
          question: "Welche Aussage zum Henry-Gesetz ist korrekt?",
          options: [
            "A) Die Konzentration eines gelösten Gases ist proportional zu seinem Partialdruck über der Lösung.",
            "B) Bei höherer Temperatur löst sich mehr Gas in einer Flüssigkeit.",
            "C) Das Henry-Gesetz beschreibt die Druckverteilung in Gasgemischen.",
            "D) Alle Gase haben dieselbe Henry-Konstante in Wasser.",
            "E) Das Henry-Gesetz gilt nur für Edelgase.",
          ],
          correctIndex: 0,
          explanation:
            "Henry-Gesetz (William Henry, 1803): c = k_H · p. Die Gaslöslichkeit ist direkt proportional zum Partialdruck. Option B ist falsch: Bei höherer Temperatur sinkt die Gaslöslichkeit in Flüssigkeiten (thermische Bewegung überwindet Solvatation – deshalb entweicht CO₂ aus warmem Sprudel schneller als aus kaltem). Option C beschreibt das Daltonsche Gesetz. Option D ist falsch: k_H variiert stark – CO₂ ist ca. 25× löslicher als O₂ in Wasser (daher transportiert Blut CO₂ viel effizienter als O₂ auf dem physikalischen Weg). Option E ist falsch.",
          hints: [
            "Henry: c = k_H · p. Mehr Partialdruck → mehr gelöstes Gas.",
            "Gaslöslichkeit sinkt mit steigender Temperatur (anders als bei Feststoffen).",
          ],
          difficulty: 2,
          tags: ["henry-gesetz", "gaslöslichkeit", "temperatur"],
        },
        {
          question:
            "Ein Patient erhält F_IO₂ = 0,6 (60 % O₂) bei Atmosphärendruck (101,3 kPa). Wie groß ist p(O₂) näherungsweise (ohne Wasserdampfkorrektur)?",
          options: ["A) 60,8 kPa", "B) 21,0 kPa", "C) 40,0 kPa", "D) 101,3 kPa", "E) 13,3 kPa"],
          correctIndex: 0,
          explanation:
            "p(O₂) = F_IO₂ × p_gesamt = 0,6 × 101,3 kPa = 60,8 kPa. Das ist fast das Dreifache des normalen O₂-Partialdrucks von 21,2 kPa (Raumluft). Klinisch wird F_IO₂ (inspiratorische O₂-Fraktion) angepasst, um den alveolären p(O₂) zu steuern. Bei ARDS wird F_IO₂ auf 0,6–1,0 erhöht. Mit exakter Berechnung unter Berücksichtigung von Wasserdampf (6,27 kPa bei 37 °C): p(O₂) = 0,6 × (101,3 − 6,27) ≈ 57,0 kPa. Klinisches Ziel: arterieller p(O₂) > 10 kPa (> 75 mmHg).",
          hints: [
            "p(O₂) = F_IO₂ × p_gesamt. F_IO₂ = 0,6 bedeutet 60 % O₂-Anteil.",
            "Raumluft: F_IO₂ = 0,21 → p(O₂) ≈ 21 kPa. Bei 0,6 entsprechend knapp dreimal mehr.",
          ],
          difficulty: 2,
          tags: ["sauerstofftherapie", "partialdruck", "fio2"],
        },
        {
          question:
            "Was ist Heliox und welcher physikalische Vorteil macht es bei obstruktiven Atemwegserkrankungen nützlich?",
          options: [
            "A) He/O₂-Gemisch: Helium ist leichter als N₂ und reduziert die Gasdichte, was den Atemwiderstand senkt.",
            "B) H₂/O₂-Gemisch: Wasserstoff verbessert den O₂-Transport im Blut.",
            "C) N₂O/O₂-Gemisch (Lachgas): Wirkt analgetisch und erleichtert das Atmen.",
            "D) CO₂/O₂-Gemisch: CO₂ stimuliert das Atemzentrum und vertieft die Atmung.",
            "E) Ar/O₂-Gemisch: Argon schützt die Atemwege vor Entzündungen.",
          ],
          correctIndex: 0,
          explanation:
            "Heliox ist ein He/O₂-Gemisch (typisch 70:30 oder 80:20). Helium (M = 4 g/mol) ist viel leichter als Stickstoff (M = 28 g/mol) → Heliox hat deutlich geringere Gasdichte als Raumluft. Bei Atemwegsobstruktion dominiert turbulenter Gasfluss, dessen Widerstand mit der Gasdichte skaliert (∝ √ρ). Geringere Dichte → weniger turbulenter Widerstand → geringere Atemarbeit. Anwendung: Asthmaanfall, Krupp, obstruktive Tumoren. Nachteil: Begrenzte O₂-Konzentration (20–30 %). N₂O/O₂ (Entonox) ist ein Analgetikum ohne Dichtevorteil. Das Grahamsches Gesetz gilt für Effusion, aber auch hier ist die leichtere Masse von He ein Vorteil.",
          hints: [
            "He (4 g/mol) ist 7× leichter als N₂ (28 g/mol) → Heliox hat viel geringere Dichte als Luft.",
            "Bei Obstruktion (Asthma, Krupp) dominiert turbulenter Fluss – Heliox reduziert diesen durch geringere Dichte.",
          ],
          difficulty: 3,
          tags: ["heliox", "gasdichte", "atemwegsobstruktion"],
        },
        {
          question: "Was beschreibt der Molenbruch xᵢ einer Komponente in einem Gasgemisch?",
          options: [
            "A) Das Verhältnis der Molzahl der Komponente zur Gesamtmolzahl: xᵢ = nᵢ / n_gesamt.",
            "B) Das Verhältnis der Masse der Komponente zur Gesamtmasse des Gemisches.",
            "C) Das Verhältnis des Volumens der Komponente zum Gesamtvolumen bei verschiedenen Drücken.",
            "D) Die Anzahl der Mole pro Liter Lösung (molare Konzentration).",
            "E) Der Prozentsatz der Moleküle in Masseneinheiten.",
          ],
          correctIndex: 0,
          explanation:
            "Molenbruch xᵢ = nᵢ/n_gesamt ist dimensionslos (0 bis 1). Er gibt an, welcher Anteil aller Gasteilchen auf Komponente i entfällt. Σ xᵢ = 1 (alle Molenbrüche summieren sich zu 1). Für ideale Gase bei konstantem p und T ist Molenbruch = Volumenanteil. Luft: x(N₂) ≈ 0,78, x(O₂) ≈ 0,21, x(Ar) ≈ 0,01. Der Massenanteil ωᵢ = mᵢ/m_gesamt ist eine andere Größe – er berücksichtigt Molmassen und ist für Gase mit verschiedenen M ≠ xᵢ. Direkte Anwendung: pᵢ = xᵢ · p_gesamt (nur mit Molenbruch, nicht mit Massenanteil!).",
          hints: [
            "Molenbruch = nᵢ/n_gesamt (0 bis 1). Nicht mit Massenanteil (ω = mᵢ/m_gesamt) verwechseln!",
            "Σ xᵢ = 1 und Σ pᵢ = p_gesamt: Der Molenbruch verbindet Zusammensetzung direkt mit Partialdruck.",
          ],
          difficulty: 1,
          tags: ["molenbruch", "dalton", "gasgemisch"],
        },
      ],
    },
    {
      id: "ch-3-03",
      title: "Diffusion und Effusion (Graham'sches Gesetz)",
      content: `## Diffusion von Gasen

**Diffusion** ist der spontane, thermisch getriebene Transport von Gasteilchen von Orten höherer Konzentration zu Orten niedrigerer Konzentration. Der Antrieb ist die Entropiezunahme: Systeme streben zum Zustand maximaler Unordnung.

Makroskopisch beschreibt das **erste Ficksche Diffusionsgesetz** die Diffusion:

**J = −D · (dc/dx)**

- J: Diffusionsstromdichte [mol/(m²·s)] – Stofffluss pro Fläche und Zeit
- D: Diffusionskoeffizient [m²/s] – substanz- und mediumspezifisch
- dc/dx: Konzentrationsgradient (negatives Vorzeichen: Fluss von hoher zu niedriger Konzentration)

## Grahamsches Gesetz der Diffusion und Effusion

Thomas Graham (1848) entdeckte: Die Diffusionsrate eines Gases ist **umgekehrt proportional zur Wurzel seiner molaren Masse**:

**r₁/r₂ = √(M₂/M₁)**

Gleiches gilt für **Effusion** (Ausströmen durch eine sehr kleine Öffnung ins Vakuum). Das Grahamsche Gesetz folgt direkt aus der kinetischen Gastheorie: Bei gleicher Temperatur haben alle Gasmoleküle dieselbe mittlere kinetische Energie (½Mv² = 3/2 k_BT → v ∝ 1/√M).

**Beispiele:**
- H₂ (M = 2) vs. O₂ (M = 32): r(H₂)/r(O₂) = √(32/2) = √16 = 4 → H₂ diffundiert 4-mal schneller!
- N₂ (M = 28) vs. CO₂ (M = 44): r(N₂)/r(CO₂) = √(44/28) ≈ 1,25 → N₂ 25 % schneller.

## Mittlere freie Weglänge

In einem Gas kollidieren Moleküle ständig. Die **mittlere freie Weglänge** λ ist die Durchschnittsstrecke zwischen zwei Kollisionen:

**λ = k_BT / (√2 · π · d² · p)**

Bei Atmosphärendruck und 25 °C: λ ≈ 60–70 nm für N₂. Kollisionsfrequenz z ≈ 5 × 10⁹ s⁻¹ (5 Milliarden/s!). Trotz hoher Molekülgeschwindigkeit (v_rms ≈ 515 m/s) ist die Nettoausbreitung durch ständige Richtungsänderungen langsam.

## Ficksche Gesetze in der Lungendiffusion

Für den pulmonalen Gasaustausch gilt (Ficks Gesetz für Membranen):

**Fluss = (D × A × Δp) / d**

- A: Alveolarfläche (60–80 m² – entspricht einem Tennisplatz!)
- D: Diffusionskoeffizient (∝ Löslichkeit / √Molmasse)
- Δp: Partialdruckgradient über der Membran
- d: Diffusionsstrecke (alveolo-kapilläre Membran: 0,3–0,5 μm)

CO₂ diffundiert ca. 20-mal schneller als O₂ in der Lunge, obwohl es schwerer ist, weil CO₂ in wässrigen Medien viel löslicher ist (Löslichkeit geht linear in D ein, Masse nur als Wurzel).

## Anwendung: Isotopentrennung

Grahams Effusionsgesetz ermöglicht die Trennung von Gasisotopen. Urananreicherung für Kernkraftwerke nutzt Effusion von UF₆:

r(²³⁵UF₆)/r(²³⁸UF₆) = √(352/349) = 1,0043

Nur 0,43 % Unterschied pro Stufe → tausende Kaskadenstufen nötig!

## Zweites Ficksches Gesetz

Das zweite Ficksche Gesetz beschreibt die zeitliche Konzentrationsänderung:

**∂c/∂t = D · ∂²c/∂x²**

Charakteristische Diffusionszeitskala: t ≈ x²/(2D). Diffusion ist über kurze Strecken (Zellmembran: nm) extrem schnell, über große Distanzen (Organe: cm) viel zu langsam – deshalb brauchen höhere Organismen Kreislaufsysteme.`,
      lernziele: [
        "Das Grahamsche Gesetz der Diffusion/Effusion formulieren und anwenden: r₁/r₂ = √(M₂/M₁).",
        "Das erste Ficksche Gesetz (J = −D·dc/dx) interpretieren und auf pulmonale Diffusion anwenden.",
        "Die Faktoren nennen, die die Diffusionskapazität der Lunge beeinflussen (Fläche, Gradient, Strecke, Löslichkeit).",
        "Den Begriff der mittleren freien Weglänge erklären und dessen Bedeutung für Gasdiffusion verstehen.",
      ],
      sections: [
        {
          heading: "Grahamsches Gesetz: Leichtere Gase diffundieren schneller",
          text: "Grahams Gesetz (1848) folgt aus der Gleichverteilung kinetischer Energie: ½M₁v₁² = ½M₂v₂² → v₁/v₂ = √(M₂/M₁). Leichtere Gase bewegen sich schneller und diffundieren rascher. Klassisches Experiment: NH₃ (M = 17) und HCl (M = 36,5) werden in ein Rohr eingebracht. NH₃ diffundiert schneller (r-Verhältnis = √(36,5/17) ≈ 1,47) – der weiße NH₄Cl-Niederschlag (NH₃ + HCl → NH₄Cl) bildet sich näher an der HCl-Quelle. Dies ist ein direkter experimenteller Nachweis des Grahamschen Gesetzes.",
          merksatz:
            "Graham: r ∝ 1/√M. Leichtes Gas diffundiert schnell – viermal leichteres Gas diffundiert doppelt so schnell.",
        },
        {
          heading: "Ficks Gesetz und pulmonale Diffusion",
          text: "In der Lunge diffundiert O₂ durch die alveolo-kapilläre Membran (0,3–0,5 μm dünn). Nach Fick: Fluss = D·A·Δp/d. Die riesige Alveolarfläche (60–80 m²!) und die hauchzarte Membran maximieren den Gasaustausch. CO₂ diffundiert 20× schneller als O₂ (trotz höherer Molmasse) wegen viel höherer Wasserlöslichkeit. Bei Erkrankungen: Lungenfibrose (d↑) und Emphysem (A↓) reduzieren den Fluss. Der DLCO-Test (CO-Diffusionskapazität) misst klinisch die Diffusionsfähigkeit: CO als Tracergas (extrem hohe Hb-Affinität → p_Blut ≈ 0 → maximaler Gradient).",
          merksatz:
            "Fick: Fluss = D·A·Δp/d. Große Fläche, hoher Gradient, kurze Strecke, hohe Löslichkeit → maximale Diffusion.",
        },
        {
          heading: "Mittlere freie Weglänge und Diffusionsgeschwindigkeit",
          text: "Obwohl N₂ bei Raumtemperatur mit v_rms ≈ 515 m/s rast, diffundiert es langsam durch ein Gasmedium, weil ständige Kollisionen (ca. 5 × 10⁹/s, freie Weglänge λ ≈ 66 nm) die Richtung ändern. Der Diffusionskoeffizient D ≈ (1/3)·v_mittl·λ ≈ 2 × 10⁻⁵ m²/s für Gase in Luft. In Wasser: D ≈ 10⁻⁹ m²/s (10.000× langsamer!). Biologisch optimierte Lösung: Alveolarmembran (nm-dünn), maximale Oberfläche (60 m²), und für große Distanzen ein Kreislaufsystem.",
          merksatz:
            "λ bei 1 bar ≈ 60–70 nm (N₂). Höherer Druck → kürzere λ → langsamere Diffusion im Gas. In Wasser ist D 10.000× kleiner als in Luft.",
        },
      ],
      merksätze: [
        "Graham: r₁/r₂ = √(M₂/M₁) – Diffusions-/Effusionsrate umgekehrt proportional zur Wurzel der molaren Masse.",
        "Bei gleicher T: ½Mv² = const für alle idealen Gase – leichtere Moleküle bewegen sich schneller.",
        "H₂ (2 g/mol) diffundiert 4× schneller als O₂ (32 g/mol): √(32/2) = √16 = 4.",
        "Ficks 1. Gesetz: J = −D·dc/dx – Fluss proportional zum Konzentrationsgradienten (von hoch nach niedrig).",
        "Ficks Gesetz in der Lunge: Fluss = D·A·Δp/d – optimiert durch große A und kleines d.",
        "CO₂ diffundiert in der Lunge 20× schneller als O₂ (wegen höherer Wasserlöslichkeit, trotz größerer Molmasse).",
        "Mittlere freie Weglänge λ bei 1 bar ≈ 60–70 nm (N₂). Kollisionsfrequenz ≈ 5 Mrd./s.",
        "Diffusionszeitskala: t ≈ x²/(2D). Über nm: Nanosekunden. Über 1 cm: Stunden!",
        "Effusion: Ausströmen durch winzige Öffnung ins Vakuum – ebenfalls ∝ 1/√M (Graham gilt).",
        "Isotopentrennung UF₆: Nur 0,43 % Unterschied pro Effusionsstufe → Tausende Kaskadenstufen nötig.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Formulieren Sie das Grahamsche Gesetz und erläutern Sie seine physikalische Grundlage. Wie wird das Ficksche Gesetz in der Lungendiffusion angewendet?",
        answer: `Das Grahamsche Gesetz (1848): r₁/r₂ = √(M₂/M₁). Es folgt aus der kinetischen Gastheorie: Bei gleicher Temperatur haben alle Gasmoleküle dieselbe mittlere kinetische Energie (½Mv² = 3/2 k_BT), woraus v ∝ 1/√M folgt. Leichtere Moleküle bewegen sich schneller und diffundieren/effundieren rascher. Beispiel: H₂ (M = 2) diffundiert √(32/2) = 4-mal schneller als O₂ (M = 32).

Das Ficksche Diffusionsgesetz (1. Gesetz): J = −D·dc/dx, wobei D der Diffusionskoeffizient und dc/dx der Konzentrationsgradient ist. In der Lunge: Fluss = (D × A × Δp)/d. Die riesige Alveolarfläche A (60–80 m²) und die hauchzarte alveolo-kapilläre Membran (d = 0,3–0,5 μm) maximieren den Gasaustausch. Der Druckgradient Δp(O₂) ≈ 8 kPa (Alveole 13,3 kPa – venöses Blut 5,3 kPa) treibt die Diffusion.

D ist proportional zur Gaslöslichkeit und umgekehrt proportional zu √M: D ∝ α/√M. Obwohl CO₂ (44 g/mol) schwerer als O₂ (32 g/mol) ist, diffundiert CO₂ ca. 20× schneller, weil seine Wasserlöslichkeit 24× höher ist (24/1,17 ≈ 20). Deshalb ist CO₂-Elimination kaum beeinträchtigt, wenn die Diffusionskapazität sinkt, während O₂-Aufnahme bereits früh leidet. Klinisch misst der DLCO-Test die Diffusionskapazität – reduziert bei Fibrose (d↑), Emphysem (A↓) und pulmonaler Hypertonie.`,
      },
      klinischerBezug:
        "Der DLCO-Test (Diffusionskapazität für CO) nutzt Ficks Gesetz direkt: CO hat extrem hohe Hb-Affinität (200× > O₂), sodass p_Blut(CO) ≈ 0 und der maximale Partialdruckgradient immer gewährleistet ist – nur die Membranparameter (A, d, D) limitieren. Reduzierter DLCO ist diagnostisch für Lungenfibrose (d↑), Emphysem (A↓) und pulmonale Hypertonie (Gefäßverdickung). Die Heliox-Therapie (He/O₂) bei obstruktiver Lungenerkrankung nutzt die geringere Gasdichte von He (M = 4 g/mol vs. N₂: 28 g/mol), die nach Grahamschen Prinzipien zu höherem Diffusionskoeffizienten und geringerem turbulentem Atemwiderstand führt.",
      selfTest: [
        {
          question:
            "Wie viel mal schneller diffundiert CH₄ (M = 16 g/mol) im Vergleich zu SO₂ (M = 64 g/mol)?",
          options: [
            "A) 2-mal schneller",
            "B) 4-mal schneller",
            "C) 0,5-mal (halb so schnell)",
            "D) 8-mal schneller",
            "E) 1,4-mal schneller",
          ],
          correctIndex: 0,
          explanation:
            "Graham: r(CH₄)/r(SO₂) = √(M(SO₂)/M(CH₄)) = √(64/16) = √4 = 2. CH₄ diffundiert genau 2× schneller als SO₂. Merke: Das Massenverhältnis (64/16 = 4) muss GEWURZELT werden → √4 = 2. Häufiger Fehler: Massenverhältnis nicht wurzeln → falsche Antwort 4. Oder falsch herum: √(16/64) = 0,5 → SO₂ wäre schneller, was falsch ist. Das schwerere Gas (SO₂, 64 g/mol) ist langsamer. Das Verhältnis der Molmassen 64:16 = 4:1 ergibt ein Geschwindigkeitsverhältnis von √4 = 2:1.",
          hints: [
            "Graham: r₁/r₂ = √(M₂/M₁). Das schwerere Gas kommt in den Zähler unter der Wurzel.",
            "√(64/16) = √4 = 2. Das Massenverhältnis 4:1 ergibt Geschwindigkeitsverhältnis 2:1 (nicht 4:1!).",
          ],
          difficulty: 1,
          tags: ["grahamsches-gesetz", "diffusion", "rechnen"],
        },
        {
          question:
            "Warum diffundiert CO₂ in der Lunge ca. 20-mal schneller als O₂, obwohl CO₂ schwerer ist?",
          options: [
            "A) Weil CO₂ eine viel höhere Löslichkeit in wässrigen Medien hat als O₂ – Löslichkeit geht linear in D ein, Molmasse nur als Wurzel.",
            "B) Weil CO₂ kleiner ist als O₂.",
            "C) Weil CO₂ einen höheren Partialdruck hat als O₂ in der Alveole.",
            "D) Weil CO₂ chemisch mit Wasser reagiert und dadurch schneller transportiert wird.",
            "E) Weil das Grahamsche Gesetz für CO₂ in Flüssigkeiten nicht gilt.",
          ],
          correctIndex: 0,
          explanation:
            "In biologischen Medien gilt: D ∝ α/√M, wobei α die Bunsensche Löslichkeit ist. CO₂ ist in Wasser ca. 24× löslicher als O₂ (α(CO₂) ≈ 0,592 vs. α(O₂) ≈ 0,024 ml/(ml·atm) bei 37 °C). Der Molmassen-Nachteil: √(44)/√(32) = 1,17-fach. Effektiv: 24/1,17 ≈ 20× schnellere Diffusion. Die chemische Reaktion von CO₂ mit Wasser (CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻, katalysiert durch Carboanhydrase) erhöht zwar den Gesamttransport, ist aber vom physikalischen Diffusionskoeffizienten zu trennen.",
          hints: [
            "D ∝ Löslichkeit/√M. Löslichkeit (linear) schlägt Molmasse (als Wurzel) bei CO₂ deutlich.",
            "CO₂-Löslichkeit in Wasser ≈ 24× höher als O₂. Molmassen-Nachteil von CO₂ nur 1,17×. Netto: 20×.",
          ],
          difficulty: 3,
          tags: ["co2-diffusion", "lunge", "ficksches-gesetz"],
        },
        {
          question: "Was ist die mittlere freie Weglänge eines Gasmoleküls?",
          options: [
            "A) Die durchschnittliche Strecke zwischen zwei aufeinanderfolgenden Kollisionen.",
            "B) Die Gesamtstrecke, die ein Molekül pro Sekunde zurücklegt.",
            "C) Der Moleküldurchmesser.",
            "D) Die Strecke vom Molekül zur nächsten Behälterwand.",
            "E) Die Wellenlänge thermischer Strahlung des Moleküls.",
          ],
          correctIndex: 0,
          explanation:
            "Die mittlere freie Weglänge λ ist die Durchschnittsstrecke zwischen zwei Kollisionen: λ = k_BT/(√2·π·d²·p). Bei 1 bar und 25 °C beträgt λ für N₂ ca. 66 nm – winzig gegenüber v_rms ≈ 515 m/s. Das Molekül kollidiert ca. 5 Milliarden Mal pro Sekunde! Die Nettoausbreitung durch einen Konzentrationsgradienten ist trotzdem langsam, da jede Kollision die Richtung ändert (Random Walk). Bei niedrigem Druck (λ >> Behälterdurchmesser) spricht man vom Knudsen-Regime: Moleküle kollidieren eher mit Wänden als miteinander – Effusion dominiert.",
          hints: [
            "λ = k_BT/(√2·π·d²·p). Bei niedrigem p ist λ groß (weniger Partnermoleküle zum Kollidieren).",
            "Erklärt, warum Diffusion trotz hoher Molekülgeschwindigkeit makroskopisch langsam ist (ständige Richtungsänderungen).",
          ],
          difficulty: 2,
          tags: ["mittlere-freie-weglänge", "kollision", "diffusion"],
        },
        {
          question:
            "Welches der folgenden Gase effundiert am langsamsten durch eine kleine Öffnung?",
          options: [
            "A) UF₆ (M = 352 g/mol)",
            "B) H₂ (M = 2 g/mol)",
            "C) He (M = 4 g/mol)",
            "D) CH₄ (M = 16 g/mol)",
            "E) N₂ (M = 28 g/mol)",
          ],
          correctIndex: 0,
          explanation:
            "Nach Graham: r ∝ 1/√M. Das schwerste Gas effundiert am langsamsten. UF₆ (M = 352 g/mol) ist das schwerste: r(H₂)/r(UF₆) = √(352/2) = √176 ≈ 13,3 – H₂ ist 13,3× schneller! Technisch wichtig: Die geringfügig unterschiedliche Effusionsrate von ²³⁵UF₆ (M = 349) und ²³⁸UF₆ (M = 352) – Verhältnis: √(352/349) ≈ 1,0043 – wird in der Urananreicherung genutzt. Der Unterschied beträgt nur 0,43 % pro Stufe, weshalb tausende Effusionsstufen nötig sind (Gasdiffusionskaskade). M(UF₆) = 238 + 6 × 19 = 352 g/mol.",
          hints: [
            "Graham: r ∝ 1/√M. Das schwerste Gas effundiert am langsamsten.",
            "UF₆ = 1 U-Atom (238 g/mol) + 6 F-Atome (6×19 = 114 g/mol) = 352 g/mol – das Schwerste in der Liste.",
          ],
          difficulty: 1,
          tags: ["effusion", "grahamsches-gesetz", "uf6"],
        },
        {
          question: "Welche Aussage zu Ficks erstem Gesetz (J = −D·dc/dx) ist korrekt?",
          options: [
            "A) Der Diffusionsfluss ist proportional zum Konzentrationsgradienten und zeigt in Richtung abnehmender Konzentration (von hoch nach niedrig).",
            "B) Der Diffusionsfluss ist proportional zum Quadrat des Konzentrationsgradienten.",
            "C) Bei höherer Temperatur ist D kleiner, weil Gase dann langsamer diffundieren.",
            "D) Das Minuszeichen zeigt an, dass Diffusion ein reversibler Prozess ist.",
            "E) D ist für alle Gase in allen Medien gleich groß.",
          ],
          correctIndex: 0,
          explanation:
            "Ficks 1. Gesetz J = −D·dc/dx: Fluss J ist proportional zum Konzentrationsgradienten dc/dx. Das Minuszeichen besagt: Fluss fließt ENTGEGEN dem Gradienten (von hoher zu niedriger Konzentration). D ist substanz- und mediumspezifisch: O₂ in Luft D ≈ 2 × 10⁻⁵ m²/s; CO₂ in Wasser D ≈ 1,9 × 10⁻⁹ m²/s (10.000× kleiner!). Bei höherer Temperatur steigt D für Gase (D ∝ T^(3/2)/p nach kinetischer Gastheorie). Option B ist falsch (linear, nicht quadratisch). Option D ist falsch (Minuszeichen = Richtung des Flusses, nicht Reversibilität).",
          hints: [
            "Minuszeichen: dc/dx > 0 (Konzentration steigt in x-Richtung) → Fluss in −x-Richtung (von hoch nach niedrig).",
            "D ist groß in Gasen (~10⁻⁵ m²/s) und viel kleiner in Flüssigkeiten (~10⁻⁹ m²/s).",
          ],
          difficulty: 2,
          tags: ["ficksches-gesetz", "diffusionskoeffizient", "konzentrationsgradient"],
        },
        {
          question:
            "Ein Patient mit Lungenfibrose hat 40 % der normalen Alveolarfläche und eine doppelt so dicke alveolo-kapilläre Membran. Auf welchen Prozentsatz der Norm sinkt die Diffusionskapazität?",
          options: ["A) 20 %", "B) 40 %", "C) 80 %", "D) 50 %", "E) 60 %"],
          correctIndex: 0,
          explanation:
            "Diffusionskapazität ∝ A/d (nach Fick). Neue Kapazität = (0,4·A_norm)/(2·d_norm) = 0,2 × (A_norm/d_norm). Nur 20 % der Norm! Beide Faktoren wirken gleichzeitig: Fläche halbiert sich effektiv auf 40 % → das allein würde 40 % ergeben. Zusätzlich doppelte Membrandicke → durch 2 dividieren → 40 % / 2 = 20 %. Klinisch: Eine so schwere kombinierte Schädigung führt zu massiver Hypoxämie, die trotz hoher F_IO₂ schwer zu korrigieren ist. Der DLCO-Test würde ebenfalls nur ca. 20 % des Sollwerts ergeben.",
          hints: [
            "Diffusionskapazität ∝ A/d. Neue Kapazität = (0,4·A)/(2·d) = 0,2 × (A/d) → 20 % der Norm.",
            "A sinkt auf 40 %, d steigt auf 200 % → beide Effekte: 0,4 / 2 = 0,2 = 20 %.",
          ],
          difficulty: 3,
          tags: ["lungenfibrose", "diffusionskapazität", "rechnen"],
        },
        {
          question:
            "Welcher Faktor verdoppelt die Effusionsrate eines Gases nach dem Grahamschen Gesetz?",
          options: [
            "A) Die molare Masse auf 1/4 reduzieren (von M auf M/4)",
            "B) Die Temperatur auf 200 % erhöhen",
            "C) Den Druck auf 200 % erhöhen",
            "D) Die molare Masse auf 1/2 reduzieren (von M auf M/2)",
            "E) Die Öffnungsfläche verdoppeln",
          ],
          correctIndex: 0,
          explanation:
            "Graham: r ∝ 1/√M. Um r zu verdoppeln: 1/√M_neu = 2/√M_alt → √M_neu = √M_alt/2 → M_neu = M_alt/4. Masse auf ein VIERTEL reduzieren! Option D (M/2) würde r nur um √2 ≈ 1,41× erhöhen – nicht verdoppeln. Der Wurzel-Zusammenhang täuscht: Man denkt an Halbierung der Masse für doppelte Rate, aber es ist Viertelung nötig. Merke: Wegen der Wurzel in Grahams Gesetz braucht man das 4-fache Massenverhältnis für das 2-fache Geschwindigkeitsverhältnis. Analogie: v_rms ∝ 1/√M – genau dasselbe Prinzip.",
          hints: [
            "r ∝ 1/√M. Für doppelte r: √(M_neu) = √(M_alt)/2 → M_neu = M_alt/4.",
            "Achtung Wurzelfalle: Masse HALBIEREN gibt nur √2 ≈ 1,41× Rate, nicht 2×. Masse auf 1/4 für 2× Rate.",
          ],
          difficulty: 3,
          tags: ["effusion", "grahamsches-gesetz", "masse"],
        },
      ],
    },
  ],
};
