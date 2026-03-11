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
      content: `## Die Ideale Gasgleichung

Kaum eine Gleichung begegnet angehenden Medizinerinnen und Medizinern so häufig wie **pV = nRT**. Sie verknüpft vier messbare Zustandsgrößen eines Gases in einer einzigen, eleganten Beziehung und bildet damit das Fundament der physikalischen Chemie der Gase. Ob Beatmungsmedizin, Blutgasanalyse oder Tauchphysiologie – wer diese Gleichung sicher beherrscht, versteht die physikalischen Grundlagen zahlreicher klinischer Situationen.

Die vier Zustandsgrößen im Detail: Der **Druck p** (gemessen in Pascal, bar oder mmHg) beschreibt die Kraft pro Fläche, die Gasteilchen durch ihre Wandstöße erzeugen. Das **Volumen V** (in Litern oder Kubikmetern) gibt den Raum an, den das Gas einnimmt. Die **Stoffmenge n** (in Mol) zählt die Teilchen in Vielfachen der Avogadro-Zahl (N_A = 6,022 × 10²³ mol⁻¹). Die **absolute Temperatur T** muss stets in Kelvin angegeben werden: K = °C + 273,15. Die **universelle Gaskonstante R** = 8,314 J/(mol·K) verbindet alle Größen miteinander. In der Einheit L·bar/(mol·K) beträgt sie 0,08314 – dieser Wert ist für Aufgaben mit Druck in bar und Volumen in Litern besonders praktisch.

> 💡 **Prüfungstipp:** Die häufigste Fehlerquelle bei Gasrechnungen ist das Vergessen der Kelvin-Umrechnung. Celsius-Werte **niemals** direkt in pV = nRT einsetzen! 27 °C = 300 K, 0 °C = 273 K – diese Werte kommen in fast jeder MedAT-Aufgabe vor.

## Herleitung aus den historischen Einzelgesetzen

Die ideale Gasgleichung ist kein willkürlich aufgestelltes Gesetz, sondern ergibt sich zwingend aus der Kombination dreier experimentell entdeckter Zusammenhänge.

Das **Gesetz von Boyle-Mariotte** (1662) beschreibt das Verhalten bei konstanter Temperatur: Komprimiert man ein Gas auf das halbe Volumen, verdoppelt sich der Druck, denn die Teilchen treffen auf die Wand in doppelter Frequenz. Mathematisch ausgedrückt: **p · V = const** bei konstantem T und n, also p₁V₁ = p₂V₂. Im p-V-Diagramm zeichnen sich die Isothermen als Hyperbeln ab. Praktisch begegnet uns dieses Gesetz beim Tauchen: In 10 m Tiefe herrscht bereits der doppelte Atmosphärendruck, und eine Luftblase hat nur noch das halbe Volumen.

Das **Gesetz von Charles und Gay-Lussac** (1787/1802) betrifft die Temperaturabhängigkeit: Bei konstantem Druck ist das Volumen direkt proportional zur absoluten Temperatur, **V/T = const**. Erhöht man die Temperatur, steigt die kinetische Energie der Teilchen, sie stoßen härter gegen die Wände, und das Gas expandiert, bis der Druck wieder ausgeglichen ist. Der verwandte Fall bei konstantem Volumen (Gay-Lussac im engeren Sinn) lautet **p/T = const** – hier steigt der Druck mit der Temperatur, was man im Alltag am Autoreifendruck im Sommer beobachtet.

Das **Gesetz von Avogadro** (1811) fügt die Stoffmenge hinzu: Bei gleichem Druck und gleicher Temperatur enthalten gleiche Volumina **aller** idealen Gase dieselbe Teilchenzahl. Das molare Volumen V_m beträgt bei Standardbedingungen (STP: 0 °C, 1 bar) rund 22,4 L/mol – ob Helium, Sauerstoff oder Kohlendioxid.

Kombiniert man alle drei Gesetze, erhält man: p·V/(n·T) = R = const, also **pV = nRT**.

> 💡 **Prüfungstipp:** Ein beliebter MedAT-Sonderfall: Werden bei konstanter Stoffmenge sowohl V als auch T (in Kelvin) verdoppelt, bleibt der Druck **unverändert**, denn p = nR·(2T)/(2V) = nRT/V. Solche „Kompensationsfragen” tauchen regelmäßig auf.

## Umrechnungen und Standardbedingungen

Die ideale Gasgleichung lässt sich zu zahlreichen nützlichen Ausdrücken umformen. Die **Gasdichte** ergibt sich als ρ = M·p/(R·T), wobei M die molare Masse ist – schwere Gase sind bei gleichen Bedingungen dichter. Die **Konzentration** eines Gases beträgt c = n/V = p/(R·T), und die **molare Masse** lässt sich experimentell aus m, p, V und T bestimmen: M = m·R·T/(p·V).

Bei den **Standardbedingungen** herrscht gelegentlich Verwirrung. Die aktuelle IUPAC-Definition (STP) legt 0 °C und 1 bar fest, woraus V_m = 22,711 L/mol folgt. Viele ältere Lehrbücher verwenden 0 °C und 1 atm (= 101.325 Pa), was V_m = 22,414 L/mol ergibt. Bei SATP (25 °C, 1 bar) beträgt V_m = 24,790 L/mol. Für die Praxis genügt es, mit 22,4 L/mol bei STP zu rechnen.

Die wichtigsten **Druckumrechnungen**: 1 atm = 101.325 Pa = 1,01325 bar = 760 mmHg. In der Klinik werden Blutgaswerte häufig in mmHg angegeben, während die Physik Pascal oder bar bevorzugt.

## Ideales versus reales Gas

Das Modell des idealen Gases beruht auf zwei vereinfachenden Annahmen: Die Gasteilchen sind punktförmig (kein Eigenvolumen), und zwischen ihnen wirken keine Anziehungs- oder Abstoßungskräfte. Unter Normalbedingungen – also bei moderatem Druck und nicht zu tiefer Temperatur – beschreibt dieses Modell die Wirklichkeit erstaunlich gut.

Reale Gase weichen jedoch spürbar ab, wenn der Druck hoch oder die Temperatur niedrig ist. Bei **hohem Druck** wird das Eigenvolumen der Moleküle im Verhältnis zum Gesamtvolumen nicht mehr vernachlässigbar – das Gas lässt sich schwerer komprimieren als vorhergesagt, und der Kompressibilitätsfaktor Z = pV/(nRT) steigt über 1. Bei **tiefer Temperatur** dominieren die intermolekularen Anziehungskräfte (Van-der-Waals-Kräfte), die den effektiven Wandstoßdruck verringern – Z sinkt unter 1. In der Nähe des **Kondensationspunkts** versagt das ideale Modell vollständig.

## Die Van-der-Waals-Gleichung

Johannes Diderik van der Waals stellte 1873 eine korrigierte Zustandsgleichung auf, die beide Abweichungen berücksichtigt:

**(p + a·n²/V²) · (V − n·b) = n·R·T**

Der Parameter **a** (in L²·bar/mol²) korrigiert den Druck nach oben: Die intermolekularen Anziehungskräfte verringern die Wucht der Wandstöße, sodass der gemessene Druck niedriger ist als der „ideale” Druck. Der Parameter **b** (in L/mol) korrigiert das Volumen nach unten: Das tatsächlich für die Gasbewegung verfügbare Volumen ist kleiner als V, da die Moleküle selbst Raum beanspruchen (Kovolumen). Wasser zeigt mit a = 5,537 und b = 0,03049 eine starke Abweichung vom Idealverhalten (starke Dipol-Dipol-Kräfte und Wasserstoffbrücken), während Helium mit a = 0,0346 und b = 0,0238 nahezu ideal bleibt.

> 💡 **Prüfungstipp:** Merkhilfe für die Van-der-Waals-Parameter: **a = Anziehung** (korrigiert Druck), **b = Braucht Platz** (korrigiert Volumen). In MedAT-Fragen wird oft gefragt, welcher Parameter was korrigiert.

## Rechenbeispiel: Gasvolumen nach Temperatur- und Druckänderung

**Aufgabe:** 3 mol O₂ befinden sich in einem Behälter bei 27 °C und 1 bar. Welches Volumen nehmen sie ein? Was passiert bei Kompression auf 5 bar bei gleichzeitiger Erwärmung auf 227 °C?

**Schritt 1 – Ausgangsvolumen:** Zunächst die Temperatur in Kelvin umrechnen: T₁ = 27 + 273 = 300 K. Dann einsetzen: V = nRT/p = 3 × 0,08314 × 300 / 1 = **74,8 L**.

**Schritt 2 – Neues Volumen:** Die kombinierte Gasgleichung p₁V₁/T₁ = p₂V₂/T₂ verknüpft Ausgangs- und Endzustand direkt. Mit T₂ = 227 + 273 = 500 K ergibt sich: V₂ = V₁ × (p₁/p₂) × (T₂/T₁) = 74,8 × (1/5) × (500/300) = 74,8 × 0,2 × 1,667 = **24,9 L**. Die Druckerhöhung auf das Fünffache verkleinert das Volumen (Boyle-Mariotte), die Temperaturerhöhung um den Faktor 5/3 vergrößert es (Charles) – beide Effekte wirken gleichzeitig.

> **Merke:** Druckerhöhung (Boyle-Mariotte) verkleinert das Volumen, Temperaturerhöhung (Charles) vergrößert es. Beide Effekte müssen stets kombiniert werden. Celsius NIEMALS direkt einsetzen – immer erst in Kelvin umrechnen!

## Klinische Relevanz: Beatmungsmedizin

In der Intensivmedizin begegnet die ideale Gasgleichung bei jeder maschinellen Beatmung. Bei der **volumenkontrollierten Beatmung** wird ein definiertes Tidalvolumen (Atemzugvolumen, V_T ≈ 6–8 ml/kg Idealgewicht) appliziert. Der resultierende Atemwegsdruck hängt von der **Compliance** (Dehnbarkeit) der Lunge ab: p = V_T / C_stat. Bei **ARDS** (Acute Respiratory Distress Syndrome, akutes Lungenversagen) sinkt die Compliance drastisch – der gleiche Volumenhub erzeugt wesentlich höhere Drücke, was zu einem Barotrauma (druckbedingte Gewebeschädigung) führen kann. Die lungenprotektive Beatmung mit niedrigem Tidalvolumen und begrenztem Spitzendruck ist die logische Konsequenz aus dieser physikalischen Beziehung.

Auch die Anästhesie nutzt Gasgesetze täglich: Volatile Anästhetika wie Sevofluran und Desfluran werden als Gase in definierten Partialdrücken verabreicht. Ihre Verteilung zwischen Alveolarluft und Blut folgt dem Henry-Gesetz – der Blut-Gas-Verteilungskoeffizient bestimmt, wie schnell die Narkose ein- und abflutet.

> **Merke:** In der Beatmungsmedizin gilt: gleiches Tidalvolumen bei sinkender Compliance = steigender Atemwegsdruck → Barotrauma-Risiko bei ARDS.

## Eigenschaften von Gasen

Vier Grundeigenschaften von Gasen sind prüfungsrelevant und werden häufig als Richtig-Falsch-Aussagen abgefragt: Erstens verteilt sich ein Gas durch Diffusion **gleichmäßig** im gesamten verfügbaren Raum. Zweitens ist ein Gas **komprimierbar** – eine Druckerhöhung verringert das Volumen gemäß Boyle-Mariotte. Drittens lassen sich Gase durch **Abkühlung verflüssigen** (Kondensation), sofern die Temperatur unter die kritische Temperatur sinkt. Viertens ist das **Mischen von Gasen in jedem Verhältnis** möglich.

> **Merke:** Richtig sind: (1) Gas verteilt sich gleichmäßig, (2) Gas ist komprimierbar, (3) Gase lassen sich verflüssigen, (4) Gase sind in jedem Verhältnis mischbar. Die Falschaussage „Ein Gas kann nicht komprimiert werden” ist eine beliebte Prüfungsfalle.

## Kinetische Gastheorie

Die mikroskopische Begründung für die makroskopischen Gasgesetze liefert die **kinetische Gastheorie** von Maxwell und Boltzmann. Ihr zentrales Ergebnis: Die mittlere kinetische Energie eines Gasteilchens hängt ausschließlich von der Temperatur ab – E_kin = (3/2)·k_B·T, wobei k_B = 1,381 × 10⁻²³ J/K die Boltzmann-Konstante ist. Daraus folgt unmittelbar der **quadratische Mittelwert der Geschwindigkeit**: v_rms = √(3·R·T/M). Bei 25 °C rasen Stickstoffmoleküle (M = 0,028 kg/mol) mit v_rms ≈ 515 m/s durch den Raum – schneller als der Schall!

Die **Maxwell-Boltzmann-Verteilung** beschreibt, wie die Geschwindigkeiten der einzelnen Moleküle um diesen Mittelwert verteilt sind. Die meisten bewegen sich nahe der wahrscheinlichsten Geschwindigkeit, aber ein kleiner Bruchteil ist deutlich schneller. Genau diese energiereichen Ausreißer ermöglichen die Verdunstung unterhalb des Siedepunkts: Oberflächenmoleküle mit überdurchschnittlicher Energie überwinden die intermolekularen Anziehungskräfte und treten in die Gasphase über.

> **Merke:** Leichtere Gase sind bei gleicher Temperatur schneller: v_rms = √(3RT/M) – M muss in kg/mol eingesetzt werden!

`,

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
          options: ["D) 6,67 L", "B) 2,50 L", "C) 4,17 L", "A) 3,33 L", "E) 1,25 L"],
          correctIndex: 3,
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
            "E) Wasserstoff (H₂) bei 50 °C und 2 bar",
            "D) Argon (Ar) bei 0 °C und 1 bar",
            "C) Wasserdampf (H₂O) bei 200 °C und 100 bar",
          ],
          correctIndex: 4,
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
          options: ["B) 44,0 g", "A) 39,3 g", "C) 19,6 g", "D) 88,0 g", "E) 22,0 g"],
          correctIndex: 1,
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
            "C) Das molare Volumen hängt bei STP von der Molmasse des Gases ab.",
            "B) Schwerere Gase enthalten bei STP mehr Mol als leichtere Gase im gleichen Volumen.",
            "A) Bei gleichem Druck und gleicher Temperatur enthalten gleiche Gasvolumina gleich viele Teilchen, unabhängig von der Molmasse.",
            "D) Avogadros Gesetz gilt nur für einatomige Edelgase.",
            "E) 1 mol eines idealen Gases belegt bei STP stets 11,2 L.",
          ],
          correctIndex: 2,
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
            "D) Den Druck bei hoher Teilchendichte",
            "B) Die intermolekularen Anziehungskräfte zwischen den Molekülen",
            "C) Die Temperaturabhängigkeit der Wechselwirkungen",
            "A) Das Eigenvolumen der Gasmoleküle (Kovolumen)",
            "E) Die Abweichung der Molmasse vom idealen Wert",
          ],
          correctIndex: 3,
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
            "E) Sie wird 3-mal größer (3 L)",
            "B) Sie bleibt gleich groß (1 L)",
            "C) Sie wird 2-mal größer (2 L)",
            "D) Sie wird 0,25-mal kleiner (0,25 L)",
            "A) Sie wird 4-mal größer (4 L)",
          ],
          correctIndex: 4,
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
    // [ARCHIVED → _archiv/chemie/kap2-archived-uks.ts] ch-3-02: Daltons Partialdruck-Gesetz — NOT in scope
    // [ARCHIVED → _archiv/chemie/kap2-archived-uks.ts] ch-3-03: Diffusion und Effusion — NOT in scope
    // === from kap4-aggregatzustände ===
    {
      id: "ch-4-01",
      title: "Aggregatzustände und molekulare Basis",
      imageUrl: "/images/bms/ch-aggregatzustaende.jpg",
      imageCaption: "Abb.: Die drei Aggregatzustände auf molekularer Ebene (OpenStax, CC BY 4.0)",
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
      content: `## Die vier Aggregatzustände der Materie

Materie tritt in vier grundlegenden Aggregatzuständen auf, die sich durch Energie, Anordnung und Beweglichkeit ihrer Teilchen fundamental unterscheiden. Welcher Aggregatzustand vorliegt, hängt von der Bilanz zwischen der **kinetischen Energie der Teilchen** (Wärmebewegung) und der **potentiellen Energie** durch intermolekulare Wechselwirkungen ab.

{{IMAGE}}

### Fester Aggregatzustand (solid)

Im festen Zustand überwiegen die intermolekularen Anziehungskräfte bei weitem über die thermische Bewegungsenergie. Die Teilchen sind in einer geordneten dreidimensionalen Struktur – dem **Kristallgitter** – fixiert. Sie verlassen ihre Gleichgewichtslage nicht, sondern führen nur kleine Schwingungen um diese aus (**Gitterschwingungen**, auch Phononen genannt). Feste Stoffe haben ein **definiertes Volumen** und eine **definierte Form**, sie sind praktisch **inkompressibel**.

Es werden mehrere Kristalltypen unterschieden:
- **Ionenkristalle** (NaCl, CaCO₃): Kationen und Anionen wechselwirken elektrostatisch. Hohe Schmelzpunkte (NaCl: 801°C), hart, spröde, leitend nur in Schmelze/Lösung.
- **Molekülkristalle** (Eis, Naphthalin, I₂): Moleküle werden durch Van-der-Waals-Kräfte oder Wasserstoffbrücken zusammengehalten. Niedrige Schmelzpunkte, weich.
- **Kovalente Netzwerkkristalle** (Diamant, SiO₂): Atome durch kovalente Bindungen verknüpft. Extrem hart, sehr hohe Schmelzpunkte (Diamant: >3550°C).
- **Metallkristalle** (Fe, Cu, Al): Positive Ionenrümpfe in einem Elektronengas. Gut elektrisch leitend, duktil (verformbar ohne zu brechen), metallischer Glanz.

### Flüssiger Aggregatzustand (liquid)

Im flüssigen Zustand sind kinetische und potentielle Energie ähnlich groß. Teilchen befinden sich in unmittelbarer Nachbarschaft (**Nahordnung**, also nur lokale Struktur, statt Fernordnung), können sich aber relativ zueinander bewegen. Flüssigkeiten haben ein **definiertes Volumen**, aber **keine eigene Form** – sie nehmen die Form ihres Behälters an.

Die **Oberflächenspannung** ist eine direkte Folge der intermolekularen Kohäsionskräfte (Anziehung gleichartiger Teilchen): Moleküle an der Oberfläche haben nach außen hin keine Nachbarn und erfahren eine resultierende Kraft nach innen. Wasser hat eine besonders hohe Oberflächenspannung (72 mN/m bei 20°C) aufgrund seiner Wasserstoffbrücken – dies ermöglicht den Kapillartransport (Aufstieg von Flüssigkeit in engen Röhrchen) in Pflanzen und im menschlichen Gefäßsystem.

Die **Viskosität** beschreibt den Fließwiderstand einer Flüssigkeit. Wasser hat bei 20°C eine dynamische Viskosität von 1,002 mPa·s, Blut etwa 3–4 mPa·s (bedingt durch Erythrozyten und Plasmaproteine). Erhöhte Blutviskosität (Polyzythämie, Paraproteinämie (krankhaft erhöhte Eiweiße im Blut)) erhöht den peripheren Gefäßwiderstand und belastet das Herz.

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

## Siedepunktvergleiche: Intermolekulare Kräfte

Die Stärke der intermolekularen Kräfte bestimmt den Siedepunkt direkt. Folgende Vergleiche sind für den MedAT zentral:

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

Nicht alle Feststoffe sind kristallin. **Amorphe Feststoffe** (Glas, viele Kunststoffe, Schokolade) besitzen keine Fernordnung im atomaren Aufbau. Sie haben keinen scharfen Schmelzpunkt, sondern einen **Glasübergangsbereich** (T_g, Temperatur des Erweichens), in dem sie graduell erweichen. Technisch und pharmazeutisch relevant: Viele Arzneistoffe können in amorpher Form vorliegen, die eine höhere Löslichkeitsrate aufweist als die kristalline Form – wichtig für die Bioverfügbarkeit (Anteil des Wirkstoffs, der den Kreislauf erreicht).

> **Merke:** Amorph = keine Fernordnung, kein scharfer Schmelzpunkt, höhere Löslichkeit → pharmazeutisch bedeutsam für Bioverfügbarkeit von Arzneistoffen.`,

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
            "Teilchen haben Nahordnung, können sich relativ zueinander bewegen, bleiben aber durch Kohäsionskräfte im Verband",
            "Teilchen bewegen sich frei und unabhängig, intermolekulare Wechselwirkungen sind vernachlässigbar",
            "Teilchen sind in einem geordneten Kristallgitter fixiert und führen nur Gitterschwingungen aus",
            "Teilchen sind ionisiert und bewegen sich in einem gemeinsamen Elektronengas",
            "Teilchen haben keine kinetische Energie und bilden ein starres Netzwerk mit maximaler H-Brücken-Zahl",
          ],
          correctIndex: 0,
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
            "Ionische Wechselwirkungen zwischen entgegengesetzt geladenen Ionen",
            "Wasserstoffbrückenbindungen",
            "Hydrophobe Wechselwirkungen zwischen unpolaren Molekülen",
          ],
          correctIndex: 2,
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
            "Schneeflocken können in der Luft schweben und damit Niederschlag bilden",
            "Das Blut des Menschen kann leichter vom Herzen durch den Körper gepumpt werden",
            "Aquatische Organismen überleben den Winter, weil Gewässer von oben gefrieren und eine isolierende Eisschicht bilden",
            "Wasservögel können auf dem Wasser laufen dank der Oberflächenspannung des Eises",
          ],
          correctIndex: 3,
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
            "Molekülkristall mit Wasserstoffbrücken (z.B. NH₃ fest)",
            "Metallkristall (z.B. Kupfer)",
          ],
          correctIndex: 4,
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
            "Zwischen einem H-Atom, das an N, O oder F gebunden ist, und einem freien Elektronenpaar eines N-, O- oder F-Atoms",
            "Nur zwischen zwei O-Atomen über ein H-Atom",
            "Zwischen jedem H-Atom und jedem Atom mit freiem Elektronenpaar",
            "Zwischen einem H-Atom und jedem negativen Ion",
            "Nur zwischen O-H-Gruppen in Wasser und Alkoholen",
          ],
          correctIndex: 0,
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
      content: `## Phasenübergänge: Überblick und Nomenklatur

Phasenübergänge sind Zustandsänderungen zwischen den Aggregatzuständen, die bei definierten Temperatur-Druck-Bedingungen stattfinden. Sie sind stets mit einer Enthalpieänderung (Wärmeänderung bei konstantem Druck) verbunden (latente Wärme), die **nicht** zur Temperaturänderung, sondern zur Änderung der Molekülanordnung und der intermolekularen Abstände verwendet wird. Auf einer **Heizkurve** (Temperatur gegen Zeit bei konstanter Wärmezufuhr) erscheinen Phasenübergänge als **Plateaus** – die Temperatur bleibt konstant, obwohl weiterhin Energie zugeführt wird.

Die sechs Phasenübergänge (Richtung und Name — prüfungssicher):

| Von → Nach | Name des Übergangs |
|------------|---------------------|
| fest → flüssig | **Schmelzen** (endotherm) |
| flüssig → fest | **Erstarren** (exotherm) |
| flüssig → gasförmig | **Verdampfen / Sieden** (endotherm) |
| gasförmig → flüssig | **Kondensieren** (exotherm) |
| fest → gasförmig | **Sublimieren** (endotherm) |
| gasförmig → fest | **Resublimieren / Desublimieren** (exotherm) |

{{IMAGE}}

- **Schmelzen** (fest → flüssig): endotherm, ΔH > 0; Gitterstruktur wird aufgebrochen
- **Erstarren** (flüssig → fest): exotherm, ΔH < 0; Kristallgitter bildet sich. **Merke:** Von flüssig nach fest heißt immer **Erstarren**, nicht „Sublimieren“ oder „Verdampfen“.
- **Verdampfen** (flüssig → gasförmig): endotherm; **Sieden** = Verdampfen bei Siedepunkt (Blasenbildung)
- **Kondensieren** (gasförmig → flüssig): exotherm. **Falle:** Von gasförmig nach **fest** heißt Resublimieren, nicht Kondensieren.
- **Sublimieren** (fest → gasförmig): endotherm; **Falle:** Von fest nach gasförmig = Sublimieren, nicht „Verdampfen“.
- **Resublimieren** (gasförmig → fest): exotherm; z.B. Reifbildung

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

- K_f (kryoskopische Konstante, stoffspezifische Gefrierkonstante, für Wasser) = **1,86 K·kg/mol**
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

**Sieden** tritt auf, wenn der Sättigungsdampfdruck (maximaler Dampfdruck über Flüssigkeit) der Flüssigkeit den Umgebungsdruck erreicht (Blasenbildung im Volumen).

**Verdunstung** findet bei jeder Temperatur unterhalb des Siedepunkts an der **Oberfläche** statt. Gemäß der Maxwell-Boltzmann-Verteilung haben immer einige Oberflächenmoleküle genug kinetische Energie, um die intermolekularen Bindungen zu überwinden und zu entweichen. Verdunstung kühlt die Oberfläche (Abtransport energiereicher Moleküle) – dies ist der physikalische Grund für das Kältegefühl nach dem Schwimmen oder beim Auftragen von Desinfektionsmittel (Ethanol verdunstet schnell).

## Phasendiagramm und Tripelpunkt

Das **Phasendiagramm** zeigt die Stabilitätsbereiche der Aggregatzustände als Funktion von Druck und Temperatur. Drei wichtige Punkte:

- **Tripelpunkt**: Alle drei Phasen koexistieren im Gleichgewicht. Für Wasser: T = 0,01 °C, p = 611 Pa (= 6,11 hPa). Nur bei exakt diesen Bedingungen existieren Eis, flüssiges Wasser und Dampf gleichzeitig.
- **Kritischer Punkt**: Oberhalb der kritischen Temperatur (T_c) und des kritischen Drucks (p_c) gibt es keinen Unterschied mehr zwischen Flüssigkeit und Gas → **überkritisches Fluid**. Für Wasser: T_c = 374 °C, p_c = 221 bar. Für CO₂: T_c = 31 °C, p_c = 74 bar (überkritisches CO₂ wird als Extraktionslösungsmittel für Koffein verwendet).
- **Siedepunktskurve**: Verbindet Tripelpunkt und kritischen Punkt. Der Siedepunkt hängt vom Druck ab: Auf dem Mount Everest (ca. 340 hPa) siedet Wasser bei etwa 70 °C, im Schnellkochtopf (ca. 2 bar) bei etwa 120 °C.

> **Merke:** Sublimation (fest → gasförmig ohne flüssige Phase) ist nur unterhalb des Tripelpunktdrucks möglich. Bei der Gefriertrocknung wird der Druck unter 611 Pa gesenkt, damit Eis direkt sublimiert.

## Dampfdruck und Clausius-Clapeyron-Gleichung

Der Sättigungsdampfdruck steigt exponentiell mit der Temperatur (Clausius-Clapeyron-Gleichung: Mathematisches Modell für Dampfdruckabhängigkeit):

**ln(p₂/p₁) = (ΔH_v/R) × (1/T₁ − 1/T₂)**

Damit lässt sich berechnen, bei welcher Temperatur eine Flüssigkeit unter gegebenem Druck siedet. Klinisch relevant: Bei Fieber (z.B. 40 °C statt 37 °C) steigt der Wasserdampfdruck der Atemluft – der Patient verliert mehr Wasser über die Atmung (**Perspiratio insensibilis** steigt um ca. 12 % pro °C Fieber).

> **Merke:** Auf dem Everest (340 hPa) siedet Wasser bei nur ~70 °C. Im Schnellkochtopf (2 bar) bei ~120 °C. Druck verändert den Siedepunkt!

## Rechenbeispiel: Gefrierpunktserniedrigung

**Aufgabe:** Wie stark senkt eine physiologische NaCl-Lösung (0,9 %, d.h. 9 g NaCl pro 1000 g H₂O) den Gefrierpunkt?

**Lösung:**
- M(NaCl) = 58,44 g/mol → n = 9/58,44 = 0,154 mol
- b = 0,154 mol / 1,0 kg = 0,154 mol/kg
- NaCl dissoziiert: Na⁺ + Cl⁻ → i = 2
- ΔT_f = K_f × b × i = 1,86 × 0,154 × 2 = **0,573 K**
- Gefrierpunkt: −0,573 °C (nahe dem gemessenen Wert für Blutplasma: −0,52 °C)

> **Merke:** Die physiologische Kochsalzlösung (0,9 %) hat nahezu die gleiche Osmolalität wie Blutplasma (≈ 290 mosmol/kg) und einen Gefrierpunkt von ca. −0,52 °C. Diese Isotonie ist der Grund, warum 0,9 % NaCl als Infusionslösung verträglich ist.`,

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
      selfTest: [
        {
          question: "Welche Phasenübergänge sind endotherm?",
          options: [
            "Erstarren, Kondensieren, Resublimieren",
            "Nur Schmelzen und Verdampfen",
            "Nur Verdampfen",
            "Schmelzen, Verdampfen, Sublimieren",
            "Alle sechs Phasenübergänge",
          ],
          correctIndex: 3,
          explanation:
            "Endotherm (Energie wird zugeführt) sind die Übergänge zum „freierem“ Zustand: Schmelzen (fest→flüssig), Verdampfen (flüssig→gas), Sublimieren (fest→gas). Exotherm sind Erstarren, Kondensieren, Resublimieren.",
          hints: ["Endotherm = Energie rein. Welche Übergänge brauchen Energiezufuhr?"],
          difficulty: 1,
          tags: ["phasenübergänge", "endotherm", "energetik"],
        },
        {
          question:
            "Warum bleibt die Temperatur bei einem Phasenübergang (z. B. Schmelzen) konstant?",
          options: [
            "Weil keine Wärme zugeführt wird",
            "Nur bei Wasser, bei anderen Stoffen steigt T",
            "Weil der Druck abnimmt",
            "Weil die Teilchen sich nicht bewegen",
            "Weil die zugeführte Energie für die Umordnung der Teilchen (latente Wärme) genutzt wird, nicht für Temperaturerhöhung",
          ],
          correctIndex: 4,
          explanation:
            "An der Heizkurve zeigen Phasenübergänge Plateaus: Die zugeführte Wärme wird als latente Wärme (z. B. Schmelzenthalpie) verbraucht, um die Gitterstruktur aufzubrechen bzw. die Molekülanordnung zu ändern — ohne Temperaturänderung.",
          hints: ["Latente Wärme = Enthalpieänderung beim Phasenübergang."],
          difficulty: 1,
          tags: ["heizkurve", "latente-wärme", "phasenübergang"],
        },
        {
          question: "Wie viel Energie braucht 1 g Wasser zum Verdampfen (bei 100 °C, 1 bar)?",
          options: ["2257 J", "333 J", "4,18 J", "40,7 J", "Gleich viel wie zum Schmelzen"],
          correctIndex: 0,
          explanation:
            "Verdampfungsenthalpie von Wasser: ΔH_v = 2257 J/g (40,7 kJ/mol). Schmelzenthalpie ΔH_s = 333 J/g. Verdampfen braucht etwa 7× mehr Energie als Schmelzen, weil alle H-Brücken gebrochen werden müssen.",
          hints: ["Verdampfen >> Schmelzen. 2257 J/g ist der große Wert."],
          difficulty: 1,
          tags: ["verdampfungsenthalpie", "wasser", "enthalpie"],
        },
        {
          question: "Was besagt der Van't-Hoff-Faktor i bei der Gefrierpunktserniedrigung?",
          options: [
            "Er gibt die Temperatur in °C an",
            "Er gibt die Anzahl der Teilchen pro Formeleinheit in Lösung an (z. B. NaCl → 2, CaCl₂ → 3)",
            "Er ist immer 1",
            "Er hängt nur von der Masse des Gelösten ab",
            "Er gilt nur für Nichtelektrolyte",
          ],
          correctIndex: 1,
          explanation:
            "Der Van't-Hoff-Faktor i ist die Anzahl der Teilchen, die eine Formeleinheit in Lösung liefert: Glucose i = 1 (nicht dissozierend), NaCl i ≈ 2 (Na⁺ + Cl⁻), CaCl₂ i ≈ 3. In ΔT_f = K_f·b·i bestimmt i, wie stark Elektrolyte den Gefrierpunkt senken.",
          hints: ["Kolligativ = nur Teilchenanzahl zählt. NaCl dissoziiert in 2 Ionen."],
          difficulty: 2,
          tags: ["van-t-hoff", "kolligativ", "gefrierpunktserniedrigung"],
        },
        {
          question:
            "Was bedeutet eine erhöhte Osmolalitätslücke im Blutplasma (gemessen − berechnet > 10 mosmol/kg)?",
          options: [
            "Normale Schwankung, ohne Bedeutung",
            "Beweis für Diabetes mellitus",
            "Hinweis auf osmotisch wirksame Substanzen, die in der Berechnung nicht erfasst sind (z. B. Ethanol, Methanol, Ethylenglykol bei Intoxikation)",
            "Zeichen für Nierenversagen ohne weitere Ursache",
            "Nur bei Kryoskopie-Messfehlern möglich",
          ],
          correctIndex: 2,
          explanation:
            "Die Osmolalitätslücke ist die Differenz aus gemessener (Kryoskopie) und berechneter Osmolalität (z. B. 2×Na⁺ + Glucose/18 + Harnstoff/2,8). Eine Lücke > 10 mosmol/kg weist auf osmotisch aktive Substanzen hin, die nicht in der Formel vorkommen — typisch bei Intoxikation mit Methanol oder Ethylenglykol.",
          hints: [
            "Kryoskopie misst alle Teilchen. Die Formel berücksichtigt nur Na⁺, Glucose, Harnstoff.",
          ],
          difficulty: 2,
          tags: ["osmolalitätslücke", "kryoskopie", "intoxikation"],
        },
      ],
    },
  ],
};
