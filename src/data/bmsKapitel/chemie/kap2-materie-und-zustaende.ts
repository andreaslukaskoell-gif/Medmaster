import type { Kapitel } from "../types";

export const chemKapMaterie: Kapitel = {
  id: "chem-kap2",
  title: "Materie & Aggregatzustände",
  subject: "chemie",
  icon: "🌡️",
  estimatedTime: "90 min",
  unterkapitel: [
    // === from kap3-gasgesetze ===
    {
      id: "ch-3-01",
      title: "Ideale Gasgleichung pV=nRT",
      stichworte: [
        "Ideale Gasgleichung",
        "Druck",
        "Volumen",
        "Stoffmenge",
        "Gaskonstante",
        "Boyle-Mariotte",
        "Charles/Gay-Lussac",
        "Avogadro",
        "Molares Volumen",
        "Van-der-Waals-Gleichung",
        "Kinetische Gastheorie",
        "Kompressibilitätsfaktor",
      ],
      content: `## Einleitung

Gase sind überall — in unserer Atemluft, in den Alveolen, im Beatmungsgerät. Um ihr Verhalten vorherzusagen, brauchen wir eine Gleichung, die Druck, Volumen, Temperatur und Stoffmenge miteinander verbindet: die **ideale Gasgleichung pV = nRT**. Sie fasst drei historische Gasgesetze (Boyle-Mariotte, Charles, Avogadro) zusammen und ist eine der wichtigsten Formeln in Chemie und Physik. Für den MedAT sind Rechenaufgaben mit der Gasgleichung, das Umrechnen zwischen verschiedenen Druckeinheiten und die klinische Anwendung in der Beatmungsmedizin prüfungsrelevant.

## Die Ideale Gasgleichung

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

## Rechenbeispiel: Gasvolumen nach Temperatur- und Druckänderung

**Aufgabe:** 3 mol O₂ befinden sich in einem Behälter bei 27 °C und 1 bar. Welches Volumen nehmen sie ein? Was passiert bei Kompression auf 5 bar bei gleichzeitiger Erwärmung auf 227 °C?

**Lösung Schritt 1:** V = nRT/p = 3 × 0,08314 × 300 / 1 = **74,8 L**

**Lösung Schritt 2:** Kombinierte Gasgleichung: p₁V₁/T₁ = p₂V₂/T₂
- T₁ = 300 K, T₂ = 500 K, p₁ = 1 bar, p₂ = 5 bar
- V₂ = V₁ × (p₁/p₂) × (T₂/T₁) = 74,8 × (1/5) × (500/300) = 74,8 × 0,2 × 1,667 = **24,9 L**

> **Merke:** Druckerhöhung (Boyle-Mariotte) verkleinert das Volumen, Temperaturerhöhung (Charles) vergrößert es. Beide Effekte müssen stets kombiniert werden. Celsius NIEMALS direkt einsetzen – immer erst in Kelvin umrechnen!

## MedAT-relevante Zahlenwerte

Für die MedAT-Prüfung sind folgende Werte auswendig zu lernen:
- R = **8,314 J/(mol·K)** = 0,08314 L·bar/(mol·K)
- V_m bei STP = **22,4 L/mol** (0 °C, 1 bar)
- N_A = **6,022 × 10²³ mol⁻¹** (Avogadro-Zahl)
- k_B = **1,381 × 10⁻²³ J/K** (Boltzmann-Konstante, R/N_A)
- 0 °C = **273,15 K** (absoluter Nullpunkt bei 0 K = −273,15 °C)
- 1 atm = **101.325 Pa** = 760 mmHg = 1,013 bar

## Klinische Relevanz: Beatmungsmedizin

In der Intensivmedizin ist die ideale Gasgleichung bei der maschinellen Beatmung direkt relevant. Bei der **Volumen-kontrollierten Beatmung** wird ein definiertes Tidalvolumen (V_T ≈ 6–8 ml/kg Idealgewicht) appliziert. Der resultierende Atemwegsdruck hängt von der Compliance (Dehnbarkeit) der Lunge ab: p = V_T / C_stat. Bei **ARDS** (Acute Respiratory Distress Syndrome) sinkt die Compliance drastisch – der gleiche Volumenhub erzeugt höhere Drücke, was Barotrauma verursachen kann. Zudem muss bei der Befeuchtung der Atemgase der Wasserdampfdruck bei 37 °C (6,27 kPa) berücksichtigt werden (Dalton).

## Kinetische Gastheorie

Die mikroskopische Erklärung liefert die **kinetische Gastheorie** (Maxwell, Boltzmann):
- Mittlere kinetische Energie: E_kin = (3/2)·k_B·T, wobei k_B = 1,381 × 10⁻²³ J/K.
- Quadratischer Mittelwert der Geschwindigkeit: v_rms = √(3·R·T/M).
- Bei 25 °C hat N₂ (M = 0,028 kg/mol): v_rms = √(3 × 8,314 × 298 / 0,028) ≈ 515 m/s.
- Die **Maxwell-Boltzmann-Verteilung** beschreibt die Geschwindigkeitsverteilung: Die meisten Moleküle bewegen sich nahe der wahrscheinlichsten Geschwindigkeit v_p = √(2RT/M), einige wenige sind deutlich schneller. Diese schnellen Moleküle ermöglichen die Verdunstung unterhalb des Siedepunkts.

## Zusammenfassung

- **pV = nRT**: p [Pa oder bar], V [L oder m³], n [mol], R = 8,314 J/(mol·K), T [Kelvin!]
- Herkunft: Boyle-Mariotte (p·V = const bei T,n = const), Charles (V/T = const bei p,n = const), Avogadro (V/n = const bei p,T = const)
- **Molares Volumen** bei STP (0 °C, 1 bar): V_m = 22,4 L/mol
- **Umrechnungen**: T[K] = T[°C] + 273,15; 1 atm = 101.325 Pa = 760 mmHg = 1,013 bar; **niemals Celsius direkt einsetzen!**
- Kombiniertes Gasgesetz: p₁V₁/T₁ = p₂V₂/T₂ (bei konstanter Stoffmenge)
- **Kinetische Gastheorie**: E_kin = ³⁄₂ k_B T; v_rms = √(3RT/M) → leichtere Gase sind schneller
- **Reale Gase** weichen ab: van-der-Waals-Gleichung berücksichtigt Teilchenvolumen (b) und Wechselwirkungen (a)
- Klinisch: **Beatmung** (pV-Zusammenhang), Druckausgleich beim Tauchen, CO₂-Abatmung`,
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
      stichworte: [
        "Partialdruck",
        "Dalton",
        "Molenbruch",
        "Gasgemisch",
        "Alveolarer Gasaustausch",
        "Henry-Gesetz",
        "Gaslöslichkeit",
        "Wasserdampfdruck",
        "Sauerstofftherapie",
        "Tauchmedizin",
        "Heliox",
      ],
      content: `## Einleitung

Die Luft, die wir einatmen, ist kein reines Gas — sie ist ein Gemisch aus Stickstoff (~78 %), Sauerstoff (~21 %), Argon, CO₂ und Wasserdampf. Jedes Gas übt dabei seinen eigenen **Partialdruck** aus, als wäre es allein. Das beschreibt das **Daltonsche Gesetz**: Der Gesamtdruck eines Gasgemisches ist die Summe aller Partialdrücke. In der Medizin sind Partialdrücke fundamental: Ob O₂ von der Alveole ins Blut diffundiert, hängt vom Druckgradienten zwischen Alveole und Kapillarblut ab. Auch das Verständnis von Hyperoxie, Sauerstofftoxizität und Höhenkrankheit basiert auf Partialdrücken.

## Das Daltonsche Partialdruck-Gesetz

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
- **Tauchgas:** Komprimierte Luft → erhöhte Partialdrücke aller Gase → N₂-Narkose (Tiefenrausch) ab p(N₂) > 3–4 bar

## Rechenbeispiel: Alveolärer O₂-Partialdruck

**Aufgabe:** Ein Patient atmet Raumluft (21 % O₂) bei Normaldruck (101,3 kPa). Wie hoch ist der alveoläre O₂-Partialdruck unter Berücksichtigung des Wasserdampfdrucks (6,27 kPa bei 37 °C) und des CO₂-Partialdrucks (5,3 kPa)?

**Lösung:** Vereinfachte Alveolargasgleichung:
- p(O₂)_alv = F_IO₂ × (p_atm − p_H₂O) − p(CO₂)/RQ
- Mit RQ (respiratorischer Quotient) ≈ 0,8:
- p(O₂)_alv = 0,21 × (101,3 − 6,27) − 5,3/0,8
- p(O₂)_alv = 0,21 × 95,03 − 6,625 = 19,96 − 6,63 = **13,3 kPa** (≈ 100 mmHg)

> **Merke:** Die vollständige Alveolargasgleichung berücksichtigt Wasserdampf UND CO₂-Produktion. Der alveoläre p(O₂) von 13,3 kPa ist deutlich niedriger als der inspiratorische von 21 kPa – das wird in der MedAT-Prüfung gerne abgefragt!

## MedAT-relevante Zahlenwerte für Partialdrücke

| Parameter | Wert | Einheit |
|-----------|------|---------|
| p(O₂) Raumluft | 21,2 | kPa (159 mmHg) |
| p(O₂) alveolär | 13,3 | kPa (100 mmHg) |
| p(O₂) arteriell | 10,7–13,3 | kPa (80–100 mmHg) |
| p(O₂) venös | 5,3 | kPa (40 mmHg) |
| p(CO₂) arteriell | 4,7–6,0 | kPa (35–45 mmHg) |
| p(CO₂) venös | 6,1 | kPa (46 mmHg) |
| p(H₂O) bei 37 °C | 6,27 | kPa (47 mmHg) |

## Sauerstofftoxizität und Hyperoxie

Zu hohe O₂-Partialdrücke sind schädlich! Bei F_IO₂ > 0,6 über längere Zeit drohen:
- **Lorrain-Smith-Effekt**: Pulmonale O₂-Toxizität – Entzündung der Alveolarepithelien, Surfactant-Schädigung, ARDS-ähnliches Bild
- **Paul-Bert-Effekt**: Zerebrale O₂-Toxizität bei p(O₂) > 160 kPa (Tauchen mit reinem O₂ tiefer als 6 m) – Krampfanfälle
- **Retinopathia praematurorum**: Bei Frühgeborenen führt hoher p(O₂) zu pathologischer Gefäßneubildung in der Retina → Erblindungsgefahr

> **Merke:** Sauerstoff ist ein Medikament mit therapeutischer Breite! Zu wenig (Hypoxie) ist lebensbedrohlich, zu viel (Hyperoxie) schädigt Lunge, Gehirn und Retina. Zielwert: p(O₂)_art = 8–13 kPa (60–100 mmHg).

## Umrechnung kPa und mmHg

In der Klinik werden Blutgaswerte oft in mmHg angegeben, in der Physiologie häufig in kPa:
- **1 kPa = 7,5 mmHg** (Faktor 7,5)
- **1 mmHg = 0,1333 kPa** (Faktor 0,133)
- Schnelle Umrechnung: kPa × 7,5 = mmHg; mmHg / 7,5 = kPa

## Zusammenfassung

- **Daltonsches Gesetz**: p_gesamt = Σ pᵢ; pᵢ = xᵢ × p_gesamt (xᵢ = Molenbruch)
- Luft: 78 % N₂, 21 % O₂, ~0,04 % CO₂; p(O₂) in Raumluft ≈ 21,2 kPa (159 mmHg)
- **Alveolarer O₂-Partialdruck**: ~13,3 kPa (100 mmHg); venös ~5,3 kPa → O₂ diffundiert ins Blut
- **CO₂**: arteriell ~4,7–6,0 kPa; venös ~6,1 kPa → CO₂ diffundiert aus Blut in Alveole
- **Wasserdampf** bei 37 °C: p(H₂O) = 6,27 kPa (47 mmHg) → muss von Gesamtdruck abgezogen werden
- **Henry-Gesetz**: c_gas = k_H × p_gas; mehr Druck → mehr Gas gelöst → Druckkochtopf, Taucherkrankheit
- **Hyperoxie-Risiken**: Pulmonaltoxizität (Lorrain-Smith), Zerebralkonvulsionen (Paul-Bert), Retinopathie bei Frühgeborenen
- Umrechnung: 1 kPa = 7,5 mmHg; arterieller Ziel-pO₂: 8–13 kPa (60–100 mmHg)`,
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
      stichworte: [
        "Diffusion",
        "Effusion",
        "Grahamsches Gesetz",
        "Ficksches Gesetz",
        "Konzentrationsgradient",
        "Mittlere freie Weglänge",
        "Diffusionskoeffizient",
        "Alveolarer Gasaustausch",
        "DLCO-Test",
        "Isotopentrennung",
      ],
      content: `## Einleitung

Wie gelangt Sauerstoff von der Alveole ins Blut? Warum können Zellen nicht größer als ~50 μm sein? Die Antwort ist **Diffusion** — der passive Transport von Teilchen entlang eines Konzentrationsgradienten, angetrieben allein durch thermische Zufallsbewegung. Das **Ficksche Gesetz** beschreibt diesen Prozess quantitativ: Je größer der Konzentrationsunterschied und je größer die Fläche, desto schneller die Diffusion. Diese Physik erklärt, warum die Lunge ~70 m² Austauschfläche benötigt — und was passiert, wenn diese Fläche (Emphysem) oder die Dicke der Membran (Fibrose) sich verändert.

## Diffusion von Gasen

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

Charakteristische Diffusionszeitskala: t ≈ x²/(2D). Diffusion ist über kurze Strecken (Zellmembran: nm) extrem schnell, über große Distanzen (Organe: cm) viel zu langsam – deshalb brauchen höhere Organismen Kreislaufsysteme.

## Rechenbeispiel: Grahamsches Gesetz

**Aufgabe:** In einem Demonstrationsexperiment werden NH₃-Gas (M = 17 g/mol) und HCl-Gas (M = 36,5 g/mol) gleichzeitig an den gegenüberliegenden Enden eines 1 m langen Glasrohrs freigesetzt. Wo bildet sich der weiße NH₄Cl-Niederschlag?

**Lösung:**
- r(NH₃)/r(HCl) = √(36,5/17) = √2,147 ≈ **1,47**
- NH₃ diffundiert 1,47× schneller als HCl
- Entfernungsverhältnis: d(NH₃)/d(HCl) = 1,47
- d(NH₃) + d(HCl) = 100 cm → 1,47·d(HCl) + d(HCl) = 100 → d(HCl) = 40,5 cm
- Der weiße Ring bildet sich **59,5 cm von der NH₃-Quelle** (40,5 cm von der HCl-Quelle) – also näher an der HCl-Seite

> **Merke:** Das leichtere Gas legt den größeren Weg zurück. Der Treffpunkt liegt NICHT in der Mitte, sondern verschoben zur Seite des schwereren Gases. Dies ist ein klassisches Prüfungsbeispiel für Grahams Gesetz!

## Diffusionskoeffizienten: Vergleichswerte

| Medium | D (m²/s) | Beispiel |
|--------|----------|----------|
| Gas in Gas | ~10⁻⁵ | O₂ in Luft: 2,1 × 10⁻⁵ |
| Gas in Wasser | ~10⁻⁹ | O₂ in H₂O: 2,1 × 10⁻⁹ |
| Protein in Wasser | ~10⁻¹¹ | Hämoglobin: 6,9 × 10⁻¹¹ |

Der Diffusionskoeffizient in Wasser ist ca. **10.000× kleiner** als in Luft – dies hat fundamentale biologische Konsequenzen. Zellen müssen klein sein (typisch 10–50 μm), damit Nährstoffe per Diffusion alle Bereiche rechtzeitig erreichen. Größere Organismen benötigen konvektive Transportsysteme (Kreislauf, Atemwege).

## Klinischer Bezug: DLCO-Test und Diffusionsstörungen

Der **DLCO-Test** (Transfer-Faktor für CO) ist die wichtigste klinische Messung der Diffusionskapazität. Das Prinzip nutzt Ficks Gesetz direkt:
- Patient atmet eine geringe CO-Konzentration (0,3 %) ein und hält 10 s die Luft an
- CO hat eine **210× höhere Hb-Affinität als O₂** → p_Blut(CO) ≈ 0 → maximaler Gradient ist immer gewährleistet
- Der gemessene CO-Uptake reflektiert ausschließlich die Membranparameter (A, d, D)

**Erniedrigter DLCO** bei:
- Lungenfibrose (d↑ → dickere Membran)
- Emphysem (A↓ → zerstörte Alveolarfläche)
- Pulmonale Hypertonie (Gefäßverdickung)
- Anämie (weniger Hb zur CO-Bindung)

**Erhöhter DLCO** bei:
- Alveolärer Hämorrhagie (Blut in Alveolen bindet CO)
- Polyzythämie (mehr Hb)
- Links-Rechts-Shunt (erhöhtes pulmonales Blutvolumen)

## Zusammenfassung

- **Diffusion**: spontaner Transport von hoher → niedriger Konzentration; Antrieb = Entropiezunahme
- **1. Ficksches Gesetz**: J = −D · (dc/dx); J ∝ Fläche × Gradient / Strecke
- **Grahamsches Gesetz**: r₁/r₂ = √(M₂/M₁) — leichtere Gase diffundieren schneller (CO₂ vs. O₂: CO₂ ca. 1,2× schneller)
- **2. Ficksches Gesetz** für Lunge: V̇_gas = (A × D × ΔP) / d — Fläche A ↑ und Membrandicke d ↓ → bessere Diffusion
- Diffusionskoeffizient in Wasser ~10.000× kleiner als in Luft → Zellen müssen klein sein (max. ~50 μm)
- **Erniedrigter DLCO**: Emphysem (A ↓), Fibrose (d ↑), Pulmonale Hypertonie, Anämie
- **Erhöhter DLCO**: Alveoläre Hämorrhagie, Polyzythämie, Links-Rechts-Shunt
- CO hat 210× höhere Hb-Affinität als O₂ → p_Blut(CO) ≈ 0 → DLCO-Test misst reine Membraneigenschaften`,
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
    // === from kap4-aggregatzustaende ===
    {
      id: "ch-4-01",
      title: "Aggregatzustände und molekulare Basis",
      stichworte: [
        "Aggregatzustände",
        "Kristalltypen",
        "Ionenkristall",
        "Molekülkristall",
        "Metallkristall",
        "Netzwerkkristall",
        "Wasserstoffbrücken",
        "Van-der-Waals-Kräfte",
        "Oberflächenspannung",
        "Viskosität",
        "Dichteanomalie Wasser",
        "Plasma",
      ],
      content: `## Einleitung

Eis, Wasser und Dampf bestehen aus denselben Molekülen (H₂O) — doch sie sehen und verhalten sich vollständig unterschiedlich. Das liegt am **Aggregatzustand**: In welchem Zustand ein Stoff vorliegt, hängt davon ab, ob die Wärmebewegung der Teilchen die Anziehungskräfte zwischen ihnen überwindet. Es gibt vier Aggregatzustände (fest, flüssig, gasförmig, Plasma), und jede Substanz kann je nach Temperatur und Druck in verschiedenen Zuständen vorliegen. Für den MedAT sind die Eigenschaften von Wasser (Anomalie, Wasserstoffbrücken), Kristalltypen und der Zusammenhang zwischen intermolekularen Kräften und Siedepunkten wichtig.

## Die vier Aggregatzustände der Materie

Materie tritt in vier grundlegenden Aggregatzuständen auf, die sich durch Energie, Anordnung und Beweglichkeit ihrer Teilchen fundamental unterscheiden. Welcher Aggregatzustand vorliegt, hängt von der Bilanz zwischen der **kinetischen Energie der Teilchen** (Wärmebewegung) und der **potentiellen Energie** durch intermolekulare Wechselwirkungen ab.

### Fester Aggregatzustand (solid)

Im festen Zustand überwiegen die intermolekularen Anziehungskräfte bei weitem über die thermische Bewegungsenergie. Die Teilchen sind in einer geordneten dreidimensionalen Struktur – dem **Kristallgitter** – fixiert. Sie verlassen ihre Gleichgewichtslage nicht, sondern führen nur kleine Schwingungen um diese aus (**Gitterschwingungen**). Feste Stoffe haben ein **definiertes Volumen** und eine **definierte Form**, sie sind praktisch **inkompressibel**.

Es werden mehrere Kristalltypen unterschieden:
- **Ionenkristalle** (NaCl, CaCO₃): Kationen und Anionen wechselwirken elektrostatisch. Hohe Schmelzpunkte (NaCl: 801°C), hart, spröde, leitend nur in Schmelze/Lösung.
- **Molekülkristalle** (Eis, Naphthalin, I₂): Moleküle werden durch Van-der-Waals-Kräfte oder Wasserstoffbrücken zusammengehalten. Niedrige Schmelzpunkte, weich.
- **Kovalente Netzwerkkristalle** (Diamant, SiO₂): Atome durch kovalente Bindungen verknüpft. Extrem hart, sehr hohe Schmelzpunkte (Diamant: >3550°C).
- **Metallkristalle** (Fe, Cu, Al): Positive Ionenrümpfe in einem Elektronengas. Gut elektrisch leitend, duktil, metallischer Glanz.

### Flüssiger Aggregatzustand (liquid)

Im flüssigen Zustand sind kinetische und potentielle Energie ähnlich groß. Teilchen befinden sich in unmittelbarer Nachbarschaft (**Nahordnung** statt Fernordnung), können sich aber relativ zueinander bewegen. Flüssigkeiten haben ein **definiertes Volumen**, aber **keine eigene Form** – sie nehmen die Form ihres Behälters an.

Die **Oberflächenspannung** ist eine direkte Folge der intermolekularen Kohäsionskräfte: Moleküle an der Oberfläche haben nach außen hin keine Nachbarn und erfahren eine resultierende Kraft nach innen. Wasser hat eine besonders hohe Oberflächenspannung (72 mN/m bei 20°C) aufgrund seiner Wasserstoffbrücken – dies ermöglicht den Kapillartransport in Pflanzen und im menschlichen Gefäßsystem.

Die **Viskosität** beschreibt den Fließwiderstand einer Flüssigkeit. Wasser hat bei 20°C eine dynamische Viskosität von 1,002 mPa·s, Blut etwa 3–4 mPa·s (bedingt durch Erythrozyten und Plasmaproteine). Erhöhte Blutviskosität (Polyzythämie, Paraproteinämie) erhöht den peripheren Gefäßwiderstand und belastet das Herz.

### Gasförmiger Aggregatzustand (gaseous)

Im gasförmigen Zustand dominiert die kinetische Energie vollständig. Teilchen bewegen sich chaotisch und schnell – bei 25°C beträgt die mittlere Geschwindigkeit von N₂-Molekülen etwa 515 m/s, von H₂O-Dampf etwa 640 m/s (nach der **Maxwell-Boltzmann-Verteilung**). Intermolekulare Wechselwirkungen sind vernachlässigbar gering. Gase sind hochgradig kompressibel, nehmen jeden verfügbaren Raum ein und können vollständig diffundieren.

Das **ideale Gasgesetz** (pV = nRT) gilt für verdünnte Gase gut: p = Druck (Pa), V = Volumen (m³), n = Stoffmenge (mol), R = 8,314 J/(mol·K), T = Temperatur (K). Reale Gase weichen davon ab – die Van-der-Waals-Gleichung berücksichtigt Eigenvolumen der Moleküle und intermolekulare Anziehungen.

### Plasma

Plasma ist ionisiertes Gas, in dem Elektronen von Atomkernen getrennt sind. Es ist der bei weitem häufigste Zustand sichtbarer Materie im Universum (Sterne, Blitze, Fluoreszenzlampen). Im medizinischen Sprachgebrauch bezeichnet "Blutplasma" den flüssigen Bestandteil des Blutes nach Entfernung der Zellen – ein biologischer Begriff ohne Bezug zum physikalischen Plasma.

## Anomalie des Wassers – ein Leben ermöglichendes Phänomen

Wasser zeigt ein physikalisch einzigartiges Verhalten: Seine Dichte nimmt beim Abkühlen von 100°C zunächst zu, erreicht ein **Maximum bei 3,98°C** (ρ = 0,9998 g/cm³) und nimmt dann beim weiteren Abkühlen bis 0°C wieder ab. Beim Gefrieren zu Eis sinkt die Dichte abrupt auf **ρ_Eis ≈ 0,917 g/cm³** – Eis ist also leichter als flüssiges Wasser.

**Ursache**: Wassermoleküle sind gewinkelt (Bindungswinkel 104,5°) und stark polar (Dipolmoment 1,85 D). Im flüssigen Wasser bestehen dynamische Wasserstoffbrückennetzwerke – jedes Molekül bildet im Mittel 3,4 Wasserstoffbrücken. Im Eiskristall (hexagonale Struktur) sind es genau 4 Wasserstoffbrücken pro Molekül, die ein offenes, weiträumiges hexagonales Gitter bilden. Diese Gitterstruktur ist weniger dicht gepackt als die Flüssigkeit.

**Biologische Bedeutung**: Diese Anomalie ist entscheidend für das Leben in gemäßigten Klimazonen:
1. Im Winter sinkt das dichtere 4°C-Wasser auf den Grund von Gewässern (Dichteausgleich)
2. Das leichtere kältere Wasser bleibt an der Oberfläche und gefriert zu Eis
3. Das Eis bildet eine isolierende Decke und schützt das darunter liegende flüssige Wasser
4. Fische und Mikroorganismen überleben bei ~4°C unter der Eisdecke

Ohne diese Anomalie würden Seen vollständig von unten nach oben gefrieren – aquatisches Leben wäre in gemäßigten Klimazonen unmöglich.

## Intermolekulare Wechselwirkungen als Grundlage der Aggregatzustände

Die Art und Stärke der intermolekularen Wechselwirkungen bestimmt maßgeblich, bei welcher Temperatur ein Stoff welchen Aggregatzustand einnimmt:

**Van-der-Waals-Kräfte** (London-Dispersionskräfte): Entstehen durch temporäre Dipole in allen Molekülen. Stärke steigt mit Molekülmasse und -größe. CH₄ (16 g/mol) siedet bei −162°C, C₈H₁₈ (114 g/mol) bei 126°C.

**Dipol-Dipol-Wechselwirkungen**: Zwischen permanenten Dipolen. HCl hat trotz ähnlicher Masse einen höheren Siedepunkt als Ar, weil HCl ein Dipol ist.

**Wasserstoffbrückenbindungen** (H-Brücken): Besonders starke Dipol-Dipol-Wechselwirkung zwischen H-Atom (gebunden an N, O oder F) und freiem Elektronenpaar von N, O oder F. Energie 10–40 kJ/mol. H₂O, HF und NH₃ haben anomal hohe Siedepunkte für ihre Molekülmasse.

**Ionische Wechselwirkungen**: Elektrische Anziehung zwischen entgegengesetzt geladenen Ionen. Energie bis zu 1000 kJ/mol. Ionische Verbindungen haben extrem hohe Schmelzpunkte.

## MedAT-relevante Siedepunktvergleiche

Die Stärke der intermolekularen Kräfte bestimmt den Siedepunkt direkt. Folgende Vergleiche werden im MedAT häufig abgefragt:

| Substanz | M (g/mol) | Kp (°C) | Dominante Kraft |
|----------|-----------|---------|-----------------|
| He | 4 | −269 | London (minimal) |
| CH₄ | 16 | −162 | London |
| NH₃ | 17 | −33 | H-Brücken |
| H₂O | 18 | +100 | H-Brücken (stark) |
| C₂H₅OH | 46 | +78 | H-Brücken |
| CH₃-O-CH₃ | 46 | −24 | Dipol-Dipol |
| NaCl | 58 | +1413 | Ionisch |

> **Merke:** H₂O siedet bei +100 °C, obwohl seine Molmasse (18 g/mol) kleiner ist als die von CH₄ (16 g/mol, Kp = −162 °C). Der Unterschied von 262 °C wird allein durch die Wasserstoffbrücken verursacht. Ethanol und Dimethylether haben identische Molmassen (46 g/mol), aber 102 °C Siedepunktdifferenz – Ethanol bildet H-Brücken, Dimethylether nicht.

## Amorphe Feststoffe vs. Kristalline Feststoffe

Nicht alle Feststoffe sind kristallin. **Amorphe Feststoffe** (Glas, viele Kunststoffe, Schokolade) besitzen keine Fernordnung im atomaren Aufbau. Sie haben keinen scharfen Schmelzpunkt, sondern einen **Glasübergangsbereich** (T_g), in dem sie graduell erweichen. Technisch und pharmazeutisch relevant: Viele Arzneistoffe können in amorpher Form vorliegen, die eine höhere Löslichkeitsrate aufweist als die kristalline Form – wichtig für die Bioverfügbarkeit.

## Zusammenfassung

- **Aggregatzustände**: fest (Kristallgitter, definiertes V + Form), flüssig (Nahordnung, fließfähig), gasförmig (keine Ordnung, kompressibel), Plasma (ionisiert)
- Kristalltypen: Ionenkristall (NaCl, hohe Smp.), Molekülkristall (Eis, niedrige Smp.), Netzwerkkristall (Diamant, extrem hart), Metallkristall (leitend, duktil)
- **Anomalie des Wassers**: Dichtemaximum bei 4 °C; Eis weniger dicht als Wasser (H-Brücken-Netzwerk); biolog. wichtig: Seen frieren von oben → Leben bleibt am Grund erhalten
- Siedepunkt ∝ Stärke der intermolekularen Kräfte: H₂O (100 °C) >> CH₄ (−162 °C) trotz ähnlicher Molmasse
- Ionische > Wasserstoffbrücken > Dipol-Dipol > London; NaCl-Gitter 786 kJ/mol vs. H₂O-H-Brücke ~20 kJ/mol
- **Amorphe Feststoffe**: kein scharfer Schmelzpunkt, Glasübergangstemperatur T_g; höhere Löslichkeit → relevant für Bioverfügbarkeit von Arzneistoffen`,
      lernziele: [
        "Die vier Aggregatzustände anhand von Teilchenanordnung, Energie und makroskopischen Eigenschaften beschreiben und vergleichen",
        "Die vier Typen intermolekularer Wechselwirkungen (Van-der-Waals, Dipol-Dipol, Wasserstoffbrücken, ionisch) in ihrer Stärke einordnen und Beispiele nennen",
        "Die Anomalie des Wassers (Dichtemaximum bei 4°C, Ausdehnung beim Gefrieren) mechanistisch erklären und ihre biologische Bedeutung darlegen",
        "Den Zusammenhang zwischen Aggregatzustand und dem Verhältnis von kinetischer zu potentieller Energie der Teilchen erläutern",
        "Die verschiedenen Kristalltypen (Ionenkristall, Molekülkristall, Netzwerkkristall, Metallkristall) mit Beispielen und Eigenschaften nennen",
      ],
      sections: [
        {
          heading: "Molekulare Grundlage der Aggregatzustände: Energiebilanz",
          text: "Der Aggregatzustand einer Substanz ist das Ergebnis einer energetischen Konkurrenz. Die thermische Bewegungsenergie (kinetische Energie E_kin ∝ T) strebt danach, die Teilchen voneinander zu trennen und chaotisch zu bewegen. Die intermolekularen Wechselwirkungen (potentielle Energie E_pot) streben danach, die Teilchen zusammenzuhalten und zu ordnen. Im festen Zustand: E_pot >> E_kin – Teilchen sitzen in tiefen Potenzialmulden ihrer Nachbarn und schwingen darin. In der Flüssigkeit: E_pot ≈ E_kin – Teilchen können Nachbarn wechseln, verlassen aber den Verband nicht. Im Gas: E_kin >> E_pot – Teilchen bewegen sich nahezu frei. Diese Bilanz erklärt, warum polar-protonische Lösungsmittel wie Wasser bei viel höheren Temperaturen sieden als unpolare Moleküle gleicher Masse: Ethanol (M = 46 g/mol, Kp = 78°C) vs. Propan (M = 44 g/mol, Kp = −42°C) – ein Siedepunktunterschied von 120°C allein durch die OH-Gruppe und ihre Wasserstoffbrücken.",
          merksatz:
            "E_kin > E_pot → Gas; E_kin ≈ E_pot → Flüssigkeit; E_kin < E_pot → Festkörper. Je stärker die intermolekularen Kräfte, desto höher der Siedepunkt.",
        },
        {
          heading: "Anomalie des Wassers: Mechanismus und Konsequenzen",
          text: "Die Dichteanomalie des Wassers ist eine direkte Folge seiner Wasserstoffbrückenstruktur. Im flüssigen Wasser bei hoher Temperatur überwiegt die thermische Bewegung: das H-Brücken-Netzwerk ist unvollständig und dynamisch, die Moleküle sind eng gepackt. Beim Abkühlen auf 4°C ordnen sich die Moleküle zunehmend in ein vollständigeres H-Brücken-Netzwerk – die engste Packung vor der Kristallisation. Unterhalb von 4°C beginnt die Ausbildung der hexagonalen Gitterstruktur, die trotz vollständigerem H-Brücken-Netzwerk eine geringere Packungsdichte aufweist (offenes Gitter mit Hohlräumen). Beim Gefrieren zu Eis dehnt sich Wasser um ca. 9% aus. Diese Ausdehnung hat praktische Folgen: Wasserleitungen können bei Frost platzen (Frostsprengung), Gesteinsspalten werden durch gefrierendes Wasser erweitert (Frostverwitterung), und Zellmembranen werden durch Eiskristallbildung zerstört – klinisch relevant bei Erfrierungen und beim Einfrieren von Gewebe ohne Kryoprotektiva.",
          merksatz:
            "Wasser: Dichtemaximum bei 3,98°C, Eis ist leichter (ρ ≈ 0,917 g/cm³) → Seen gefrieren von oben → aquatisches Leben überlebt den Winter.",
        },
        {
          heading: "Intermolekulare Wechselwirkungen und ihre Stärken",
          text: "Die Stärke der intermolekularen Wechselwirkungen folgt der Hierarchie: Ionische Wechselwirkungen (bis 1000 kJ/mol) > Wasserstoffbrücken (10–40 kJ/mol) > Dipol-Dipol (1–10 kJ/mol) > London-Dispersion (0,05–40 kJ/mol, steigt mit Molekülgröße). London-Dispersionskräfte entstehen durch spontane Fluktuationen der Elektronenverteilung, die temporäre Dipole erzeugen und in Nachbarmolekülen induzierte Dipole induzieren. Wasserstoffbrücken entstehen durch die starke Polarisierung des H-Atoms, wenn es an elektronegative Atome (N, O, F) gebunden ist. H-Brücken sind richtungsabhängig und für viele biologische Strukturen konstitutiv: DNA-Doppelhelix (A-T: 2 H-Brücken; G-C: 3 H-Brücken), Proteinsekundärstruktur (α-Helix, β-Faltblatt).",
          merksatz:
            "H-Brücken nur zwischen H (gebunden an N, O, F) und freiem Elektronenpaar von N, O oder F. Stärke: ionisch > H-Brücke > Dipol-Dipol > London.",
        },
      ],
      merksätze: [
        "Fest: geordnetes Gitter, definierte Form und Volumen, Gitterschwingungen",
        "Flüssig: Nahordnung, definiertes Volumen, nimmt Behälterform an, fließfähig",
        "Gasförmig: keine Ordnung, kein Eigenvolumen, vollständig kompressibel, chaotische Bewegung",
        "Plasma: ionisiertes Gas mit freien Elektronen – häufigster Zustand im Universum",
        "Wasser: Dichtemaximum bei 3,98°C → Eis schwimmt → Seen gefrieren von oben",
        "H-Brücken: H gebunden an N, O oder F wechselwirkt mit freiem Elektronenpaar von N, O, F",
        "Stärke intermol. Kräfte: ionisch > H-Brücke > Dipol-Dipol > London-Dispersion",
        "Wasserstoffbrücken erklären: hoher Siedepunkt von H₂O, DNA-Stabilität, Proteinstruktur",
        "Ionenkristall (NaCl): hoher Smp., spröde; Metallkristall: duktil, leitend; Netzwerkkristall (Diamant): härtester Stoff",
        "Viskosität Blut (3–4 mPa·s) > Wasser (1 mPa·s) → erhöhte Blutviskosität belastet das Herz",
      ],
      klinischerBezug:
        "Die Viskosität des Blutes wird durch den Hämatokrit und die Plasmaproteine bestimmt. Bei Erkrankungen wie Polyzythämia vera oder multiplem Myelom (Paraproteinämie) steigt die Blutviskosität stark an, erhöht den peripheren Widerstand und kann zu Thrombosen, Schlaganfall und Herzversagen führen – Hyperviskositätssyndrom. Kryoprotektiva (z.B. Glycerin, DMSO) schützen bei der Kryokonservierung von Stammzellen vor der durch Eiskristallbildung bedingten Zellzerstörung, indem sie H-Brücken mit Wasser eingehen und die Kristallisation hemmen.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie mechanistisch, warum Wasser bei 4°C seine maximale Dichte hat und welche biologischen Konsequenzen die Dichteanomalie hat.",
        answer:
          "Die Dichteanomalie des Wassers hat ihre Ursache in der Konkurrenz zwischen thermischer Bewegung und Wasserstoffbrücken-Netzwerkbildung. Bei hohen Temperaturen ist das H-Brücken-Netzwerk unvollständig und dynamisch, die Moleküle sind relativ eng gepackt. Beim Abkühlen nimmt die kinetische Energie ab, das H-Brücken-Netzwerk wird vollständiger – die Packungsdichte steigt zunächst (Dichte nimmt zu). Unterhalb von 4°C beginnt die Ausbildung der hexagonalen Eiskristallstruktur, die trotz maximaler H-Brücken-Verknüpfung (4 H-Brücken pro Molekül) ein offenes Gitter mit Hohlräumen bildet – die Dichte nimmt wieder ab. Im Eis liegt die Dichte bei 0,917 g/cm³, also rund 8% unter der des flüssigen Wassers. Biologische Konsequenzen: (1) In Gewässern sinkt das dichtere 4°C-Wasser auf den Grund, an der Oberfläche gefriert das kältere, leichtere Wasser zu Eis. Die Eisdecke isoliert thermisch – aquatische Organismen überleben bei ca. 4°C. Ohne diese Anomalie würden Seen vollständig durchgefrieren. (2) Die Ausdehnung beim Gefrieren (ca. 9%) führt zu Frostsprengung in Gesteinsspalten und zum Platzen von Wasserleitungen. (3) In lebenden Zellen bilden Eiskristalle scharfkantige Strukturen, die Zellmembranen zerstören – relevant bei Erfrierungen und in der Kryokonservierung, wo Kryoprotektiva (Glycerin, DMSO) die Kristallisation hemmen.",
      },
      selfTest: [
        {
          question:
            "Was charakterisiert den flüssigen Aggregatzustand auf molekularer Ebene am besten?",
          options: [
            "Teilchen sind in einem geordneten Kristallgitter fixiert und führen nur Gitterschwingungen aus",
            "Teilchen bewegen sich frei und unabhängig, intermolekulare Wechselwirkungen sind vernachlässigbar",
            "Teilchen haben Nahordnung, können sich relativ zueinander bewegen, bleiben aber durch Kohäsionskräfte im Verband",
            "Teilchen sind ionisiert und bewegen sich in einem gemeinsamen Elektronengas",
            "Teilchen haben keine kinetische Energie und bilden ein starres Netzwerk mit maximaler H-Brücken-Zahl",
          ],
          correctIndex: 2,
          explanation:
            "Im flüssigen Zustand besteht eine Nahordnung (im Gegensatz zur Fernordnung im Kristall und zur vollständigen Unordnung im Gas). Teilchen können sich relativ zueinander bewegen (daher Fließfähigkeit), verlassen aber den Flüssigkeitsverband nicht, da intermolekulare Kohäsionskräfte (Van-der-Waals, H-Brücken, Dipol-Dipol) noch wirksam sind. Daher haben Flüssigkeiten ein definiertes Volumen (im Gegensatz zum Gas), aber keine eigene Form (im Gegensatz zum Festkörper). Diese Struktur erklärt auch Phänomene wie Oberflächenspannung und Viskosität.",
          hints: [
            "Flüssigkeiten fließen (Teilchen beweglich), aber haben ein eigenes Volumen (Teilchen bleiben zusammen)",
            "Nahordnung bedeutet: lokale Struktur ja, aber kein langreichweitiges Gitter",
          ],
          difficulty: 1,
          tags: ["aggregatzustände", "flüssigkeit", "nahordnung"],
        },
        {
          question: "Bei welcher Temperatur hat flüssiges Wasser seine maximale Dichte?",
          options: [
            "0°C (Gefrierpunkt)",
            "3,98°C (ca. 4°C)",
            "20°C (Raumtemperatur)",
            "37°C (Körpertemperatur)",
            "100°C (Siedepunkt)",
          ],
          correctIndex: 1,
          explanation:
            "Wasser hat sein Dichtemaximum bei exakt 3,98°C (gerundet 4°C) mit ρ = 0,9998 g/cm³. Diese Dichteanomalie ist eine Folge der Konkurrenz zwischen thermischer Kontraktion (bei Abkühlung) und der Ausbildung des offenen hexagonalen H-Brücken-Netzwerks (das die Dichte verringert). Unterhalb von 4°C nimmt die Dichte wieder ab – ein für fast alle anderen Flüssigkeiten unbekanntes Verhalten. Das Dichtemaximum bei 4°C bewirkt, dass der Boden von Seen im Winter die wärmste Schicht (4°C) enthält, was das Überleben aquatischer Organismen ermöglicht.",
          hints: [
            "Die Dichteanomalie des Wassers ist ein zentrales Merkwissen in Chemie und Biologie",
            "Zwischen 0°C und 4°C nimmt die Dichte von Wasser mit steigender Temperatur zu – ungewöhnlich!",
          ],
          difficulty: 1,
          tags: ["wasser", "dichteanomalie", "dichtemaximum"],
        },
        {
          question: "Welche intermolekulare Wechselwirkung ist am stärksten?",
          options: [
            "London-Dispersionskräfte zwischen großen Molekülen",
            "Dipol-Dipol-Wechselwirkungen zwischen polaren Molekülen",
            "Wasserstoffbrückenbindungen",
            "Ionische Wechselwirkungen zwischen entgegengesetzt geladenen Ionen",
            "Hydrophobe Wechselwirkungen zwischen unpolaren Molekülen",
          ],
          correctIndex: 3,
          explanation:
            "Ionische Wechselwirkungen sind mit Energien von mehreren hundert bis über 1000 kJ/mol die stärksten intermolekularen Wechselwirkungen. Die Hierarchie der Stärke lautet: ionisch (bis ~1000 kJ/mol) > Wasserstoffbrücken (10–40 kJ/mol) > Dipol-Dipol (1–10 kJ/mol) > London-Dispersion (0,05–40 kJ/mol, je nach Molekülgröße). Diese Hierarchie spiegelt sich direkt in den Schmelzpunkten wider: Ionenkristalle (NaCl: 801°C) schmelzen bei viel höheren Temperaturen als Molekülkristalle (Eis: 0°C) oder Van-der-Waals-Feststoffe.",
          hints: [
            "Ionenkristalle (NaCl) haben sehr hohe Schmelzpunkte – was sagt das über die Bindungsstärke?",
            "Denken Sie an die Hierarchie: ionisch > H-Brücken > Dipol-Dipol > London",
          ],
          difficulty: 2,
          tags: ["intermolekulare-kräfte", "ionische-wechselwirkung", "hierarchie"],
        },
        {
          question:
            "Was ist die biologische Hauptbedeutung der Tatsache, dass Eis eine geringere Dichte als flüssiges Wasser hat?",
          options: [
            "Pflanzen können Wasser leichter durch Kapillarkräfte aufsteigen lassen",
            "Aquatische Organismen überleben den Winter, weil Gewässer von oben gefrieren und eine isolierende Eisschicht bilden",
            "Das Blut des Menschen kann leichter vom Herzen durch den Körper gepumpt werden",
            "Schneeflocken können in der Luft schweben und damit Niederschlag bilden",
            "Wasservögel können auf dem Wasser laufen dank der Oberflächenspannung des Eises",
          ],
          correctIndex: 1,
          explanation:
            "Da Eis (ρ ≈ 0,917 g/cm³) leichter als flüssiges Wasser ist, schwimmt es oben. Im Winter kühlt sich die Wasseroberfläche ab – unter 4°C wird das Wasser leichter und gefriert schließlich an der Oberfläche. Das Eis bildet eine thermische Isolierschicht, die das darunter liegende Wasser vor weiterer Abkühlung schützt. Unter der Eisdecke bleibt das Wasser flüssig (bei ~4°C), und Fische, Mikroorganismen sowie andere aquatische Lebewesen können überleben. Ohne diese Anomalie würden Seen von unten nach oben vollständig durchgefrieren, und aquatisches Leben in gemäßigten Klimazonen wäre weitgehend unmöglich.",
          hints: [
            "Was passiert in einem See im Winter, wenn die Außentemperatur unter 0°C fällt?",
            "Die Eisschicht oben wirkt wie ein Isolator für das Wasser darunter",
          ],
          difficulty: 2,
          tags: ["dichteanomalie", "eis", "biologische-bedeutung"],
        },
        {
          question:
            "Welcher Kristalltyp ist elektrisch leitend, duktil (verformbar) und hat einen metallischen Glanz?",
          options: [
            "Ionenkristall (z.B. NaCl)",
            "Molekülkristall (z.B. Eis)",
            "Kovalenter Netzwerkkristall (z.B. Diamant)",
            "Metallkristall (z.B. Kupfer)",
            "Molekülkristall mit Wasserstoffbrücken (z.B. NH₃ fest)",
          ],
          correctIndex: 3,
          explanation:
            "Metallkristalle bestehen aus positiv geladenen Ionenrümpfen, die in einem delokalisierten Elektronengas eingebettet sind. Die frei beweglichen Elektronen ermöglichen elektrische Leitfähigkeit und Wärmeleitung. Die nicht-direktionale Natur der Metallbindung erlaubt plastische Verformung (Duktilität, Hämmerbarkeit) ohne Sprödbruch. Der metallische Glanz entsteht durch Absorption und Reemission von Licht durch die freien Elektronen. Ionenkristalle sind bei Raumtemperatur nicht leitend (Ionen fixiert im Gitter), bei Schmelze oder in Lösung hingegen leitend. Diamant ist das härteste natürliche Material, aber elektrisch nicht leitend und spröde.",
          hints: [
            "Welcher Kristalltyp enthält frei bewegliche Elektronen?",
            "Kupferdraht leitet Strom und lässt sich biegen – welchem Kristalltyp entspricht das?",
          ],
          difficulty: 2,
          tags: ["kristalltypen", "metallkristall", "duktilität"],
        },
        {
          question: "Zwischen welchen Atomen können Wasserstoffbrückenbindungen gebildet werden?",
          options: [
            "Zwischen jedem H-Atom und jedem Atom mit freiem Elektronenpaar",
            "Nur zwischen zwei O-Atomen über ein H-Atom",
            "Zwischen einem H-Atom, das an N, O oder F gebunden ist, und einem freien Elektronenpaar eines N-, O- oder F-Atoms",
            "Zwischen einem H-Atom und jedem negativen Ion",
            "Nur zwischen O-H-Gruppen in Wasser und Alkoholen",
          ],
          correctIndex: 2,
          explanation:
            "Wasserstoffbrückenbindungen entstehen durch die starke Polarisierung des H-Atoms, wenn es kovalent an ein stark elektronegatiges Atom (N, O oder F) gebunden ist. Das H-Atom trägt dann eine ausgeprägte positive Partialladung (δ+) und kann mit dem freien Elektronenpaar eines benachbarten N-, O- oder F-Atoms in Wechselwirkung treten. Die Stärke (10–40 kJ/mol) liegt zwischen kovalenten Bindungen (~350 kJ/mol für C-H) und gewöhnlichen Van-der-Waals-Kräften (~1 kJ/mol). H-Brücken sind essentiell für DNA-Struktur (A-T: 2 H-Brücken, G-C: 3 H-Brücken), Proteinsekundärstruktur (α-Helix, β-Faltblatt) und die einzigartigen Eigenschaften von Wasser.",
          hints: [
            "Nur die elektronegativsten Elemente: N, O und F können H-Brücken ausbilden",
            "Das H-Atom muss an eines dieser Elemente gebunden sein UND mit einem freien Elektronenpaar wechselwirken",
          ],
          difficulty: 2,
          tags: ["wasserstoffbrücken", "h-brücken", "n-o-f"],
        },
        {
          question:
            "Warum hat Ethanol (C₂H₅OH, M = 46 g/mol, Kp = 78°C) einen viel höheren Siedepunkt als Dimethylether (CH₃-O-CH₃, M = 46 g/mol, Kp = −24°C), obwohl beide die gleiche Molmasse haben?",
          options: [
            "Ethanol hat eine größere Moleküloberfläche und damit stärkere London-Kräfte",
            "Ethanol kann über seine OH-Gruppe Wasserstoffbrückenbindungen mit anderen Ethanolmolekülen ausbilden, Dimethylether hingegen nicht",
            "Ethanol ist ein stärkerer Elektrolyt und dissoziiert in Lösung",
            "Dimethylether hat ein größeres Dipolmoment als Ethanol",
            "Ethanol hat eine höhere Dichte und damit stärkere ionische Wechselwirkungen",
          ],
          correctIndex: 1,
          explanation:
            "Trotz gleicher Molmasse (M = 46 g/mol) unterscheiden sich die Siedepunkte von Ethanol (78°C) und Dimethylether (−24°C) um 102°C. Der entscheidende Unterschied liegt in der Fähigkeit zur Wasserstoffbrückenbildung: Ethanol besitzt eine OH-Gruppe, deren H-Atom starke H-Brücken mit dem freien Elektronenpaar des O-Atoms benachbarter Ethanolmoleküle ausbilden kann. Zum Sieden müssen diese H-Brücken gebrochen werden – das erfordert erheblich mehr Energie. Dimethylether hat zwar auch ein O-Atom mit freien Elektronenpaaren (kann H-Brücken akzeptieren), aber kein H an O oder N – es kann keine H-Brücken als Donor bilden. Es wirken nur schwächere Dipol-Dipol-Kräfte und London-Kräfte.",
          hints: [
            "H-Brückenbildung erfordert H an N, O oder F",
            "Gleiche Masse, aber fundamental andere Wechselwirkungen – welches Molekül hat eine OH-Gruppe?",
          ],
          difficulty: 3,
          tags: ["siedepunkt", "wasserstoffbrücken", "ethanol"],
        },
        {
          question:
            "Ein Patient mit multiplem Myelom hat eine stark erhöhte Konzentration von Immunglobulinen im Blut. Welche physikalische Eigenschaft des Blutes ändert sich und welche klinische Konsequenz folgt?",
          options: [
            "Die Oberflächenspannung steigt, was zu Hämolyse führt",
            "Der osmotische Druck sinkt, was zu generalisiertem Ödem führt",
            "Die Viskosität steigt, was den peripheren Widerstand erhöht und Thrombosen begünstigt",
            "Die Dichte sinkt, was zu einem verringerten venösen Rückfluss führt",
            "Der pH-Wert steigt (Alkalose), da Immunglobuline basische Proteine sind",
          ],
          correctIndex: 2,
          explanation:
            "Beim multiplen Myelom produzieren maligne Plasmazellen große Mengen monoklonaler Immunglobuline (Paraproteine). Diese hochmolekularen Proteine erhöhen die Viskosität des Blutplasmas erheblich. Erhöhte Blutviskosität (Hyperviskositätssyndrom) führt zu: erhöhtem peripherem Gefäßwiderstand, vermindertem Blutfluss in Kapillaren, erhöhtem Thromboserisiko durch verlangsamten Blutfluss (Stase), und neurologischen Symptomen (Kopfschmerzen, Sehstörungen, Verwirrtheit) durch gestörte Hirndurchblutung. Therapeutisch kann eine Plasmapherese (Plasmatrennverfahren) die Viskosität akut senken.",
          hints: [
            "Hohe Proteinkonzentration im Plasma – wie beeinflusst das die Fließeigenschaften?",
            "Denken Sie an die Viskosität und ihre Bedeutung für den Blutfluss",
          ],
          difficulty: 3,
          tags: ["viskosität", "multiples-myelom", "hyperviskosität"],
        },
      ],
    },
    {
      id: "ch-4-02",
      title: "Phasenübergänge – Energetik und Bedingungen",
      stichworte: [
        "Phasenübergänge",
        "Schmelzenthalpie",
        "Verdampfungsenthalpie",
        "Heizkurve",
        "Latente Wärme",
        "Kolligative Eigenschaften",
        "Gefrierpunktserniedrigung",
        "Siedepunktserhöhung",
        "Osmolalität",
        "Van't-Hoff-Faktor",
        "Sublimation",
        "Thermoregulation",
      ],
      content: `## Einleitung

Wenn Wasser zu Eis wird oder Eis zu Dampf — das ist ein **Phasenübergang**. Was passiert dabei mit der Energie? Bei jedem Übergang zu einem "freieren" Zustand (fest → flüssig → gasförmig) muss Energie **zugeführt** werden (endotherm), um die intermolekularen Bindungen aufzubrechen. Diese Energie bewirkt keine Temperaturänderung — sie steckt in der Umordnung der Teilchen. Auf der Heizkurve sieht man das als Plateau. Medizinisch zentral: Dampfverbrennungen sind schlimmer als Wasserverbrennungen (Kondensationswärme frei), Schwitzen kühlt durch Verdampfungswärme, und Gefriertrocknung von Impfstoffen nutzt Sublimation. Das Phasendiagramm zeigt zudem, wann Wasser sublimiert — das ist die Grundlage der Lyophilisation.

## Phasenübergänge: Überblick und Nomenklatur

Phasenübergänge sind Zustandsänderungen zwischen den Aggregatzuständen, die bei definierten Temperatur-Druck-Bedingungen stattfinden. Sie sind stets mit einer Enthalpieänderung verbunden (latente Wärme), die **nicht** zur Temperaturänderung, sondern zur Änderung der Molekülanordnung und der intermolekularen Abstände verwendet wird. Auf einer **Heizkurve** (Temperatur gegen Zeit bei konstanter Wärmezufuhr) erscheinen Phasenübergänge als **Plateaus** – die Temperatur bleibt konstant, obwohl weiterhin Energie zugeführt wird.

Die sechs Phasenübergänge:
- **Schmelzen** (fest → flüssig): endotherm, ΔH > 0; Gitterstruktur wird aufgebrochen
- **Erstarren** (flüssig → fest): exotherm, ΔH < 0; Kristallgitter bildet sich
- **Verdampfen** (flüssig → gasförmig): endotherm, ΔH > 0; alle intermolekularen Bindungen werden gelöst
- **Kondensieren** (gasförmig → flüssig): exotherm, ΔH < 0; intermolekulare Bindungen bilden sich
- **Sublimieren** (fest → gasförmig): endotherm, ΔH > 0; ΔH_sub = ΔH_s + ΔH_v
- **Resublimieren** (gasförmig → fest): exotherm, ΔH < 0; z.B. Reifbildung

Die Enthalpie eines Phasenübergangs und seines Umkehrprozesses sind stets betragsmäßig gleich und haben entgegengesetztes Vorzeichen (Hess'scher Satz).

## Schmelzenthalpie und Verdampfungsenthalpie von Wasser

**Schmelzenthalpie**: ΔH_s(H₂O) = **6,01 kJ/mol = 333 J/g** (bei 0°C, 1 bar)
Zum Schmelzen von 1 g Eis bei 0°C werden 333 J benötigt – deutlich mehr als zum Erwärmen von 1 g flüssigem Wasser um 1°C (4,18 J). Ein Gramm schmelzendes Eis bei 0°C entnimmt der Umgebung dieselbe Wärmemenge wie die Abkühlung von 80 g Wasser um 1°C – deshalb kühlt Eis im Getränk so effizient.

**Verdampfungsenthalpie**: ΔH_v(H₂O) = **40,7 kJ/mol = 2257 J/g** (bei 100°C, 1 bar)
Dies ist ein außergewöhnlich hoher Wert – verursacht durch die starken Wasserstoffbrücken, die beim Verdampfen vollständig gebrochen werden müssen. Verglichen mit: Methanol: 1104 J/g; Benzol: 393 J/g; Diethylether: 358 J/g.

**Verhältnis**: ΔH_v / ΔH_s = 2257 / 333 ≈ 6,8 – Verdampfen erfordert fast siebmal mehr Energie als Schmelzen, weil beim Verdampfen alle verbleibenden intermolekularen Wechselwirkungen gebrochen werden müssen, beim Schmelzen hingegen nur die Gitterstruktur aufgelöst wird (Moleküle bleiben in Kontakt).

## Thermoregulation durch Schweiß

Der menschliche Körper nutzt die hohe Verdampfungsenthalpie des Wassers zur Thermoregulation:
- Bei starker körperlicher Aktivität können 1–2 Liter Schweiß pro Stunde produziert werden
- Verdunstung von 1 Liter Wasser entzieht der Haut: 1000 g × 2257 J/g = 2.257.000 J = **2,26 MJ/h ≈ 627 W**
- Bei Hypohidrose (verminderte Schweißsekretion, z.B. durch anticholinerge Medikamente) ist die Thermoregulation gestört → Hyperthermierisiko

## Kolligative Eigenschaften: Siedepunktserhöhung und Gefrierpunktserniedrigung

Gelöste Stoffe verändern Siedepunkt und Gefrierpunkt des Lösungsmittels. Diese **kolligativen Eigenschaften** hängen ausschließlich von der **Anzahl der gelösten Teilchen** (Molalität b), nicht von deren chemischer Natur ab:

### Gefrierpunktserniedrigung
ΔT_f = K_f × b × i

- K_f (kryoskopische Konstante für Wasser) = **1,86 K·kg/mol**
- b = Molalität (mol gelöster Stoff pro kg Lösungsmittel)
- i = Van't-Hoff-Faktor (Teilchenanzahl pro Formeleinheit bei Dissoziation)

Beispiele:
- Glucose (nicht-Elektrolyt, i = 1): 1 mol/kg → ΔT_f = 1,86 K
- NaCl (i ≈ 2, da Na⁺ + Cl⁻): 1 mol/kg → ΔT_f ≈ 3,72 K
- CaCl₂ (i ≈ 3, da Ca²⁺ + 2Cl⁻): 1 mol/kg → ΔT_f ≈ 5,58 K

### Siedepunktserhöhung
ΔT_s = K_s × b × i

- K_s (ebullioskopische Konstante für Wasser) = **0,512 K·kg/mol**

### Klinische Anwendung: Osmolalität des Blutes

Die Blutosmolalität (normal: 280–300 mosmol/kg) kann durch Kryoskopie (Messung der Gefrierpunktserniedrigung) exakt bestimmt werden. Normaler Gefrierpunkt des Blutes: ca. −0,52°C. Osmolalitätslücke (gemessen − berechnet) > 10 mosmol/kg → Hinweis auf osmotisch wirksame unbekannte Substanzen (z.B. Ethanol, Methanol, Ethylenglykol bei Intoxikationen).

## Verdunstung vs. Sieden

**Sieden** tritt auf, wenn der Sättigungsdampfdruck der Flüssigkeit den Umgebungsdruck erreicht (Blasenbildung im Volumen).

**Verdunstung** findet bei jeder Temperatur unterhalb des Siedepunkts an der **Oberfläche** statt. Gemäß der Maxwell-Boltzmann-Verteilung haben immer einige Oberflächenmoleküle genug kinetische Energie, um die intermolekularen Bindungen zu überwinden und zu entweichen. Verdunstung kühlt die Oberfläche (Abtransport energiereicher Moleküle) – dies ist der physikalische Grund für das Kältegefühl nach dem Schwimmen oder beim Auftragen von Desinfektionsmittel (Ethanol verdunstet schnell).

## Phasendiagramm und Tripelpunkt

Das **Phasendiagramm** zeigt die Stabilitätsbereiche der Aggregatzustände als Funktion von Druck und Temperatur. Drei wichtige Punkte:

- **Tripelpunkt**: Alle drei Phasen koexistieren im Gleichgewicht. Für Wasser: T = 0,01 °C, p = 611 Pa (= 6,11 hPa). Nur bei exakt diesen Bedingungen existieren Eis, flüssiges Wasser und Dampf gleichzeitig.
- **Kritischer Punkt**: Oberhalb der kritischen Temperatur (T_c) und des kritischen Drucks (p_c) gibt es keinen Unterschied mehr zwischen Flüssigkeit und Gas → **überkritisches Fluid**. Für Wasser: T_c = 374 °C, p_c = 221 bar. Für CO₂: T_c = 31 °C, p_c = 74 bar (überkritisches CO₂ wird als Extraktionslösungsmittel für Koffein verwendet).
- **Siedepunktskurve**: Verbindet Tripelpunkt und kritischen Punkt. Der Siedepunkt hängt vom Druck ab: Auf dem Mount Everest (ca. 340 hPa) siedet Wasser bei etwa 70 °C, im Schnellkochtopf (ca. 2 bar) bei etwa 120 °C.

> **Merke:** Sublimation (fest → gasförmig ohne flüssige Phase) ist nur unterhalb des Tripelpunktdrucks möglich. Bei der Gefriertrocknung wird der Druck unter 611 Pa gesenkt, damit Eis direkt sublimiert.

## Rechenbeispiel: Gefrierpunktserniedrigung

**Aufgabe:** Wie stark senkt eine physiologische NaCl-Lösung (0,9 %, d.h. 9 g NaCl pro 1000 g H₂O) den Gefrierpunkt?

**Lösung:**
- M(NaCl) = 58,44 g/mol → n = 9/58,44 = 0,154 mol
- b = 0,154 mol / 1,0 kg = 0,154 mol/kg
- NaCl dissoziiert: Na⁺ + Cl⁻ → i = 2
- ΔT_f = K_f × b × i = 1,86 × 0,154 × 2 = **0,573 K**
- Gefrierpunkt: −0,573 °C (nahe dem gemessenen Wert für Blutplasma: −0,52 °C)

> **Merke:** Die physiologische Kochsalzlösung (0,9 %) hat nahezu die gleiche Osmolalität wie Blutplasma (≈ 290 mosmol/kg) und einen Gefrierpunkt von ca. −0,52 °C. Diese Isotonie ist der Grund, warum 0,9 % NaCl als Infusionslösung verträglich ist.

## Dampfdruck und Clausius-Clapeyron-Gleichung

Der Sättigungsdampfdruck steigt exponentiell mit der Temperatur (Clausius-Clapeyron):

**ln(p₂/p₁) = (ΔH_v/R) × (1/T₁ − 1/T₂)**

Damit lässt sich berechnen, bei welcher Temperatur eine Flüssigkeit unter gegebenem Druck siedet. Klinisch relevant: Bei Fieber (z.B. 40 °C statt 37 °C) steigt der Wasserdampfdruck der Atemluft – der Patient verliert mehr Wasser über die Atmung (**Perspiratio insensibilis** steigt um ca. 12 % pro °C Fieber).

## Zusammenfassung

- **6 Phasenübergänge**: Schmelzen, Erstarren, Verdampfen, Kondensieren, Sublimieren, Resublimieren; Übergänge zu "freierem" Zustand = **endotherm**
- Während Phasenübergang: Temperatur konstant (Plateau in Heizkurve) — Energie für Umordnung genutzt
- **Schmelzenthalpie Wasser**: 333 J/g (6,01 kJ/mol); **Verdampfungsenthalpie**: 2257 J/g (40,7 kJ/mol)
- Dampfverbrennungen schlimmer als Wasserverbrennungen: Kondensationswärme (2257 J/g) wird zusätzlich frei
- **Schwitzen** kühlt durch Verdampfung (~2,4 kJ/g bei Körpertemp.) → Thermoregulation; Perspiratio insensibilis ↑ mit Fieber
- **Sublimation**: fest → gasförmig ohne Flüssigphase; CO₂ (trockenes Eis), Iod, Naphthalin; Gefriertrocknung = Sublimation unter <611 Pa
- **Tripelpunkt** Wasser: 0,01 °C, 611 Pa — alle 3 Phasen koexistieren; **kritischer Punkt**: 374 °C, 221 bar
- Kolligative Eigenschaften: **Gefrierpunktserniedrigung** ΔT_f = K_f × b × i (K_f(H₂O) = 1,86 K·kg/mol)`,
      lernziele: [
        "Alle sechs Phasenübergänge benennen, in der Energetik (endo-/exotherm) einordnen und mit Beispielen illustrieren",
        "Die Schmelzenthalpie (333 J/g) und Verdampfungsenthalpie (2257 J/g) von Wasser kennen, den Unterschied erklären und einfache Berechnungen durchführen",
        "Siedepunktserhöhung und Gefrierpunktserniedrigung als kolligative Eigenschaften erläutern, die Formeln anwenden und den Van't-Hoff-Faktor bei Elektrolyten berücksichtigen",
        "Den Unterschied zwischen Verdunstung und Sieden erklären und auf die Thermoregulation des Menschen anwenden",
        "Die klinische Bedeutung der Osmolalitätsmessung (Kryoskopie) und der Gefrierpunktserniedrigung für die Diagnostik erläutern",
      ],
      sections: [
        {
          heading: "Energetik der Phasenübergänge: Heizkurven und latente Wärme",
          text: "Bei der Erwärmung einer Substanz von tiefer Temperatur bis zum Dampfzustand zeigt die Heizkurve (T gegen t bei konstanter Wärmezufuhr) charakteristische Plateaus. Beim Schmelzpunkt steigt die Temperatur nicht mehr an, obwohl weiterhin Energie zugeführt wird: Die zugeführte Wärme wird als latente Wärme (Schmelzenthalpie) verbraucht, um die Gitterstruktur aufzubrechen – ohne Temperaturänderung. Für Wasser zeigt die Heizkurve von −20°C bis 150°C bei 1 bar: Anstieg (Eis erwärmt sich, c_Eis = 2,09 J/(g·K)), Plateau bei 0°C (Schmelzen, 333 J/g), Anstieg (Wasser erwärmt sich, c_Wasser = 4,18 J/(g·K)), Plateau bei 100°C (Verdampfen, 2257 J/g), Anstieg (Dampf erwärmt sich, c_Dampf = 2,01 J/(g·K)). Das Verhältnis der Plateaulängen spiegelt das Verhältnis der Enthalpien wider: Das Siedeplatz-Plateau ist etwa sechsmal breiter als das Schmelzplateau.",
          merksatz:
            "An Phasenübergängen bleibt T konstant (Plateaus in der Heizkurve) – Energie ändert die Molekülanordnung, nicht die Temperatur. ΔH_v(H₂O) = 2257 J/g >> ΔH_s(H₂O) = 333 J/g.",
        },
        {
          heading: "Kolligative Eigenschaften: Osmolalität und klinische Diagnostik",
          text: "Kolligative Eigenschaften sind Eigenschaften von Lösungen, die nur von der Anzahl (Konzentration) der gelösten Teilchen abhängen, nicht von deren Art. Neben Siedepunktserhöhung und Gefrierpunktserniedrigung zählen dazu auch der osmotische Druck (π = i·c·R·T) und die Dampfdruckerniedrigung (Raoult'sches Gesetz). Klinisch zentral ist die Osmolalität des Blutes, abgeschätzt durch: 2 × Na⁺ (mmol/L) + Glucose (mg/dL)/18 + Harnstoff (mg/dL)/2,8. Die Osmolalitätslücke (gemessene − berechnete Osmolalität) > 10 mosmol/kg weist auf osmotisch wirksame Substanzen hin – klassischerweise bei Intoxikation mit Ethanol, Methanol, Ethylenglykol oder Isopropanol. Methanol- und Ethylenglykolintoxikationen sind lebensbedrohlich und medizinische Notfälle (Therapie: Fomepizol hemmt die Alkoholdehydrogenase).",
          merksatz:
            "ΔT_f = K_f · b · i (H₂O: K_f = 1,86 K·kg/mol). Osmolalitätslücke > 10 mosmol/kg → Verdacht auf osmotisch wirksame Toxine (Methanol, Ethylenglykol).",
        },
        {
          heading: "Thermoregulation und Sublimation in der Medizin",
          text: "Die Gefriertrocknung (Lyophilisation) ist das wichtigste medizintechnische Verfahren, das auf Sublimation basiert. Wasserhaltige Präparate (Impfstoffe, Blutprodukte, Antibiotika) werden zunächst schockgefroren (bei −40°C bis −80°C). Dann wird der Umgebungsdruck unter den Tripelpunkts-Druck von Wasser (611 Pa) abgesenkt. Bei diesem niedrigen Druck sublimiert das Eis direkt in die Gasphase, ohne flüssig zu werden. Das Ergebnis ist ein trockenes, poröses Pulver, das bei Raumtemperatur jahrelang lagerfähig ist und durch Zugabe von Wasser (Rekonstitution) schnell wieder gelöst werden kann. Vorteile: kein Hitze-Schaden an Proteinen und Nukleinsäuren, geringe Schrumpfung. Sublimation tritt auch in der Natur auf: Schnee und Eis sublimieren bei trockener, kalter Luft.",
          merksatz:
            "Lyophilisation: Gefrieren + Vakuum → Sublimation (fest → gasförmig, ohne flüssig zu werden) → trockenes, lagerfähiges Produkt. Grundlage für haltbare Impfstoffe und Blutprodukte.",
        },
      ],
      merksätze: [
        "Sechs Phasenübergänge: Schmelzen, Erstarren, Verdampfen, Kondensieren, Sublimieren, Resublimieren",
        "Endotherm (Energie wird aufgenommen): Schmelzen, Verdampfen, Sublimieren",
        "Exotherm (Energie wird abgegeben): Erstarren, Kondensieren, Resublimieren",
        "ΔH_s(H₂O) = 333 J/g (6,01 kJ/mol); ΔH_v(H₂O) = 2257 J/g (40,7 kJ/mol)",
        "Verdampfen braucht ~7× mehr Energie als Schmelzen → alle H-Brücken müssen gebrochen werden",
        "Kolligativ: nur Teilchenanzahl (Molalität) zählt, nicht die Art des gelösten Stoffs",
        "ΔT_f = K_f · b · i (H₂O: K_f = 1,86); ΔT_s = K_s · b · i (H₂O: K_s = 0,512)",
        "Elektrolyte: NaCl (i ≈ 2), CaCl₂ (i ≈ 3) → stärkere Gefrierpunktserniedrigung",
        "Osmolalitätslücke > 10 mosmol/kg → Verdacht auf Toxine (Methanol, Ethylenglykol)",
        "Schweiß: 1 L/h Verdunstung → ~627 W Wärmeabgabe (2257 kJ/L)",
      ],
      klinischerBezug:
        "Die Kryoskopie (Messung der Gefrierpunktserniedrigung) ist eine Standardmethode zur Bestimmung der Plasmaosmolalität. Eine erhöhte Osmolalitätslücke (gemessen minus berechnet > 10 mosmol/kg) ist ein wichtiger diagnostischer Hinweis auf eine Vergiftung mit osmotisch aktiven Substanzen wie Methanol oder Ethylenglykol (Frostschutzmittel) – beide lebensbedrohlich. Die hohe Verdampfungsenthalpie des Wassers (2257 J/g) ist physiologisch zentral für die Thermoregulation durch Schwitzen; anticholinerge Medikamente, die die Schweißsekretion hemmen, können bei körperlicher Belastung oder hohen Umgebungstemperaturen zu gefährlicher Hyperthermie führen.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Ein Patient trinkt versehentlich Frostschutzmittel (Ethylenglykol). Wie kann man dies laborchemisch durch Messung der Gefrierpunktserniedrigung erkennen, und warum ist der Van't-Hoff-Faktor bei der Interpretation zu beachten?",
        answer:
          "Ethylenglykol (Ethandiol, C₂H₆O₂, M = 62 g/mol) ist ein nicht-elektrolytischer, organischer Alkohol (i = 1 – er dissoziiert nicht in Ionen). Im Blutplasma erhöht er die Osmolalität, da jedes gelöste Molekül als ein Osmolyt zählt. Klinische Erkennung durch Osmolalitätslücke: Die gemessene Plasma-Osmolalität (durch Kryoskopie) übersteigt die berechnete Osmolalität (aus Na⁺, Glucose, Harnstoff) deutlich. Die Differenz – die Osmolalitätslücke – ist erhöht (>10 mosmol/kg, bei Vergiftung oft >30–50 mosmol/kg). Van't-Hoff-Faktor: Ethylenglykol ist kein Elektrolyt (i = 1), erzeugt also pro Mol nur eine Teilcheneinheit. NaCl hingegen ergibt i = 2 (Na⁺ + Cl⁻), was eine doppelt so starke Gefrierpunktserniedrigung pro Mol verursacht. Bei der Interpretation muss daher die Art des Gelösten berücksichtigt werden. Ethylenglykol wird zu toxischen Metaboliten (Glykolsäure, Oxalsäure → Hyperoxalurie, Nierenversagen durch Calciumoxalat-Kristalle) abgebaut. Therapie: Fomepizol oder Ethanol hemmen die Alkoholdehydrogenase kompetitiv und verhindern die Bildung der toxischen Metabolite. Frühzeitige Diagnose ist lebenswichtig.",
      },
      selfTest: [],
    },
  ],
};
