import type { Kapitel } from "../types";

export const physKap4: Kapitel = {
  id: "phys-kap4",
  title: "Wärmelehre",
  subject: "physik",
  icon: "🌡️",
  estimatedTime: "90 min",
  unterkapitel: [
    // ─────────────────────────────────────────────────────────────────
    // UK ph-4-01: Temperatur und Wärme
    // ─────────────────────────────────────────────────────────────────
    {
      id: "ph-4-01",
      title: "Temperatur und Wärme",
      stichworte: [
        "Temperatur",
        "Wärme",
        "Kelvin",
        "Celsius",
        "Fahrenheit",
        "Wärmekapazität",
        "Wärmedehnung",
        "Dichteanomalie",
        "Mischungstemperatur",
        "Kalorimetrie",
        "Ausdehnungskoeffizient",
        "Absoluter Nullpunkt",
      ],
      content: `Zwei Grad Fieber können Enzyme zum Stillstand bringen, ein Grad Hypothermie den Herzrhythmus stören — Temperatur ist die unterschätzte Vitalgröße der Medizin.

## Temperaturskalen



Temperatur ist ein Maß für die mittlere kinetische Energie der Teilchen eines Stoffes. Drei Skalen sind praxisrelevant:

{{DIAGRAM:temperature-scales}}

**Celsius (°C)**: Die historische Alltagsskala. Der Nullpunkt liegt beim Gefrierpunkt des Wassers (bei 1 atm), 100 °C beim Siedepunkt. Negative Werte sind möglich.

**Kelvin (K)**: Die SI-Einheit der Thermodynamik. Der Nullpunkt (0 K = −273,15 °C) ist der absolute Nullpunkt – die Temperatur, bei der die thermische Bewegung der Teilchen aufhört. Negative Kelvin-Temperaturen existieren im klassischen Sinn nicht.

Umrechnungsformel: **T [K] = T [°C] + 273,15**

> 💡 **Prüfungstipp:** Bei Temperaturdifferenzen (ΔT) sind °C und K austauschbar: ΔT = 10 °C = 10 K. Aber bei absoluten Temperaturen nicht verwechseln: 20 °C ≠ 20 K!

Umgekehrt: T [°C] = T [K] − 273,15

Typische Werte: Zimmertemperatur 293 K (20 °C), Körpertemperatur 310 K (37 °C), Siedepunkt Wasser 373 K (100 °C).

**Fahrenheit (°F)** (angloamerikanisch): T [°F] = T [°C] × 1,8 + 32. Klinisch relevant bei internationalen Normbefunden: 98,6 °F = 37 °C.

## Thermische Ausdehnung

**Wie kommt die Ausdehnung eines Körpers bei Erwärmung zustande?** Durch die Erwärmung **steigt die mittlere Geschwindigkeit** der Teilchen (Atome/Moleküle). Dadurch werden die **Zusammenstöße** zwischen den Teilchen heftiger, und der **mittlere Abstand** zwischen den Teilchen wird **größer** – der Körper dehnt sich aus. (Nicht: „die Wärme braucht Platz” oder „der Körper wird weicher”; auch nicht: Gase treiben aus dem Körper.) Feste Stoffe dehnen sich zusätzlich aus, weil die Schwingungsamplitude der Gitteratome zunimmt. Die **lineare Wärmedehnung** gilt für stabförmige Körper:

**ΔL = α · L₀ · ΔT**

- L₀: Ausgangslänge [m]
- ΔT: Temperaturänderung [K oder °C]
- α: linearer Ausdehnungskoeffizient [1/K] (Stahl ≈ 12 × 10⁻⁶ /K, Glas ≈ 9 × 10⁻⁶ /K, Aluminium ≈ 23 × 10⁻⁶ /K)

**Formelklartext:** ΔL = α·L₀·ΔT heißt: Die **Längenänderung** ist proportional zur **Ausgangslänge** und zur **Temperaturänderung**. α ist materialabhängig – Aluminium dehnt sich stärker aus als Stahl bei gleichem ΔT. **Ursache:** Erwärmung → höhere mittlere Teilchengeschwindigkeit → heftigere Stöße → größerer mittlerer Abstand. **Einheiten:** [α] = 1/K, [ΔT] = K → [ΔL] = m ✓. Für ΔT dürfen °C oder K verwendet werden (Skalenverschiebung spielt bei Differenzen keine Rolle).

**Größenordnung:** Stahlschiene 30 m, ΔT = 40 K → ΔL ≈ 14 mm. Bimetall: zwei Metalle mit unterschiedlichem α → Verbiegung bei Temperaturänderung.

Für Flächen gilt entsprechend β ≈ 2α, für Volumina γ ≈ 3α.

> **Merke:** Die Volumenausdehnung ist dreimal so groß wie die lineare Ausdehnung desselben Materials (γ ≈ 3α). Bei Flüssigkeiten wird direkt der Volumenausdehnungskoeffizient γ verwendet.

**Technische Konsequenzen:**
- Brücken und Gleise benötigen **Dehnungsfugen**, um thermische Spannungen zu vermeiden
- Bimetallstreifen (zwei Metalle mit verschiedenem α) biegen sich bei Temperaturänderung — Grundlage von Thermoschaltern und Bimetallthermometern
- Zahnfüllungen müssen einen ähnlichen α wie Zahnschmelz haben, um Rissbildung zu verhindern

**Anomalie des Wassers:** Die **Dichte des Wassers ist bei 4 °C am größten** (nicht bei 0 °C). Von 0 °C bis 4 °C schrumpft Wasser beim Erwärmen (Dichte steigt), darüber dehnt es sich normal aus. Die Ursache liegt in den Wasserstoffbrückenbindungen: Unter 4 °C bilden sich zunehmend eisähnliche, hexagonale Strukturen, die ein größeres Volumen einnehmen. **Deswegen frieren Seen im Winter von oben zu** (nicht von unten): Das dichtere 4 °C-Wasser sinkt nach unten, kälteres Wasser und Eis bleiben oben – das 4 °C-Wasser am Grund schützt Wasserorganismen.

{{DIAGRAM:thermodynamics}}

## Wärme und Wärmekapazität

**Wärme Q** ist keine Zustandsgröße, sondern eine Energieübertragungsgröße: Sie fließt beim Temperaturunterschied vom wärmeren zum kälteren Körper (2. Hauptsatz). Einheit: Joule [J].

Die **spezifische Wärmekapazität c** gibt an, wie viel Energie nötig ist, um 1 kg eines Stoffes um 1 K zu erwärmen:

**Q = m · c · ΔT**

**Formelklartext:** Q = m·c·ΔT bedeutet: Die **Wärmemenge** (Energie), die ein Körper aufnimmt oder abgibt, ist proportional zu seiner **Masse**, seiner **spezifischen Wärmekapazität** c und der **Temperaturänderung** ΔT. Große c → gleiche Masse und ΔT speichern mehr Energie (Wasser „puffert” Temperatur). **Einheiten:** [Q] = J, [m] = kg, [c] = J/(kg·K), [ΔT] = K → J = kg · (J/(kg·K)) · K ✓. **Nicht verwechseln:** c = Wärmekapazität (Speichern); λ (Lambda) = Wärmeleitfähigkeit (Transport).

**Größenordnung:** c(Wasser) = 4180 J/(kg·K); 1 kg Wasser um 1 K erwärmen = 4180 J ≈ 1 kcal. Mensch (70 kg, c ≈ 3500 J/(kg·K)) von 34 °C auf 37 °C: Q ≈ 735 kJ.

**Mischungstemperatur**: Werden zwei Wassermengen vermischt, gilt Energieerhaltung:
Q_abgegeben = Q_aufgenommen → m₁ · c · (T₁ − T_m) = m₂ · c · (T_m − T₂)
→ **T_m = (m₁ · T₁ + m₂ · T₂) / (m₁ + m₂)**

**Formelklartext:** T_m ist der **massengewichtete Mittelwert** der Ausgangstemperaturen. Gleiche Stoffe → c kürzt sich heraus; T_m liegt immer **zwischen** T₁ und T₂. Mehr Masse der kälteren Flüssigkeit → T_m näher an T₂. **Einheiten:** Alle T in °C oder K (einheitlich); [T_m] = K bzw. °C.

> **Merke:** Bei der Mischkalorimetrie kürzt sich c heraus, wenn beide Flüssigkeiten denselben Stoff darstellen. Die Mischtemperatur liegt stets zwischen den beiden Ausgangstemperaturen, gewichtet nach den Massen.

> 💡 **Prüfungstipp:** Mischungstemperatur-Aufgaben: T_m = (m₁·T₁ + m₂·T₂)/(m₁ + m₂). Die Mischtemperatur liegt IMMER zwischen T₁ und T₂ — nie darüber oder darunter!

Wasser hat die höchste spezifische Wärmekapazität aller gängigen Flüssigkeiten – ein biologisch zentraler Fakt. Der menschliche Körper (≈ 60 % Wasser) kann große Wärmemengen aufnehmen/abgeben ohne starke Temperaturschwankungen.



**Wärmekapazität verschiedener Stoffe im Vergleich:**
- Wasser: c = 4180 J/(kg·K) — biologisch essenziell als Temperaturpuffer
- Eis: c = 2090 J/(kg·K) — nur halb so viel wie flüssiges Wasser
- Ethanol: c = 2440 J/(kg·K) — relevant in der Pharmakologie
- Aluminium: c = 900 J/(kg·K)
- Eisen/Stahl: c = 450 J/(kg·K) — Metalle erwärmen sich schnell

## Klinischer Bezug

Fiebermessung nutzt die Temperaturausdehnung (Quecksilber/Alkohol-Thermometer) oder elektronische Sensoren (Infrarot-Ohrthermometer, NTC-Widerstände/Heißleiter). Hypothermie (<35 °C) und Hyperthermie (>40 °C) sind lebensbedrohlich — bereits 2 °C Abweichung vom Normwert (37 °C) beeinträchtigen die Enzymaktivität signifikant.

**Therapeutische Anwendungen:**
- Wärmetherapie (Wärmekissen, Infrarotlicht) fördert Durchblutung und Schmerzlinderung
- Therapeutische Hypothermie nach Herzstillstand: Kühlung auf 32–34 °C senkt den cerebralen Metabolismus
- Kalorimetrie in der Ernährungsmedizin: Q = m · c · ΔT bestimmt den physiologischen Brennwert der Nahrung

## Rechenbeispiele

**Beispiel 1 — Temperaturumrechnung:**
Körpertemperatur 37,0 °C: In Kelvin: T = 37,0 + 273,15 = 310,15 K. In Fahrenheit: T = 37,0 × 1,8 + 32 = 98,6 °F. Fieber bei 39,5 °C: T = 39,5 × 1,8 + 32 = 103,1 °F.

**Beispiel 2 — Mischungstemperatur:**
200 g Wasser (80 °C) + 300 g Wasser (20 °C): T_m = (200 · 80 + 300 · 20) / (200 + 300) = (16000 + 6000) / 500 = 44 °C.

**Beispiel 3 — Energie zum Erwärmen eines Patienten:**
Patient (70 kg, c ≈ 3500 J/(kg·K)) von 34 °C auf 37 °C erwärmen (Hypothermie-Behandlung):
Q = 70 · 3500 · 3 = 735.000 J = 735 kJ ≈ 176 kcal. Diese Energiemenge muss der Körper durch Metabolismus, Wärmedecken oder Infusionserwärmer aufbringen.`,

      diagram: "temperature-scales",
      lernziele: [
        "Die drei Temperaturskalen (Celsius, Kelvin, Fahrenheit) ineinanderumrechnen können",
        "Die Formel der linearen Wärmedehnung ΔL = α·L₀·ΔT anwenden und interpretieren",
        "Die Wärmekapazitätsformel Q = m·c·ΔT bei Erwärmungs- und Mischungsaufgaben einsetzen",
        "Die besondere biologische Bedeutung der hohen Wärmekapazität von Wasser erklären",
        "Die Dichteanomalie des Wassers und ihre ökologische Relevanz beschreiben",
      ],

      sections: [
        {
          heading: "Spezifische Wärmekapazitäten wichtiger Stoffe",
          text: "Die spezifische Wärmekapazität c gibt an, wie viel Energie nötig ist, um 1 kg eines Stoffes um 1 K zu erwärmen (Formel: Q = m · c · ΔT). Wasser hat mit Abstand die höchste Wärmekapazität unter den gängigen Stoffen.",
          table: {
            headers: ["Stoff", "c [J/(kg·K)]"],
            rows: [
              ["Wasser (flüssig)", "4180"],
              ["Eis", "2090"],
              ["Ethanol", "2440"],
              ["Aluminium", "900"],
              ["Eisen/Stahl", "450"],
              ["Luft", "1005"],
            ],
          },
          merksatz:
            "Spezifische Wärmekapazität Wasser: c = 4180 J/(kg·K) — höchster Wert aller gängigen Flüssigkeiten.",
        },
        {
          heading: "Temperaturskalen im Vergleich",
          text: "Celsius und Kelvin unterscheiden sich nur im Nullpunkt: 0 K = −273,15 °C. Kelvin ist die thermodynamisch korrekte Skala, da sie immer positiv ist und direkt proportional zur mittleren kinetischen Energie der Teilchen ist (E_kin ∝ T). Fahrenheit teilt den Bereich zwischen Gefrieren und Sieden des Wassers in 180 Teile (vs. 100 bei Celsius). Im medizinischen Alltag begegnet man allen drei Skalen: deutsche Klinik nutzt Celsius, US-Literatur Fahrenheit, Physik und Biochemie Kelvin.",
          merksatz:
            "Kelvin = Celsius + 273,15 — niemals negativ, direkt proportional zur Teilchenenergie.",
        },
        {
          heading: "Wärmekapazität und Energiebilanz",
          text: "Q = m · c · ΔT ist die zentrale Formel der Kalorimetrie. Je größer c, desto mehr Energie muss zugeführt werden, um die gleiche Temperaturänderung zu erzielen. Wasser (c = 4180 J/(kg·K)) speichert etwa neunmal mehr Energie pro Kilogramm als Eisen (c ≈ 450 J/(kg·K)). Bei Mischkalorimetrie gilt: abgegebene Wärme = aufgenommene Wärme (Energieerhaltung, Wärmeverluste vernachlässigt). Die Mischungstemperatur liegt immer zwischen den Ausgangstemperaturen.",
          merksatz:
            "Wasser ist der beste Wärmespeicher unter den Alltagsstoffen — biologisch essenziell für Homöothermie (gleichbleibende Körpertemperatur).",
        },
        {
          heading: "Thermische Ausdehnung und Anomalie des Wassers",
          text: "Bei den meisten Stoffen gilt: Erwärmung → Ausdehnung, Abkühlung → Kontraktion. Wasser verhält sich zwischen 0 °C und 4 °C umgekehrt: es schrumpft beim Erwärmen und erreicht bei 4 °C sein Dichtemaximum (ρ_max ≈ 1000 kg/m³). Daher sinkt 4 °C-Wasser auf den Seegrund, während 0 °C-Wasser oben bleibt und gefriert. Eis (ρ_Eis ≈ 917 kg/m³) schwimmt auf Wasser. Diese Anomalie schützt aquatische Ökosysteme im Winter.",
          merksatz:
            "Dichtemaximum des Wassers bei 4 °C: Seen frieren von oben — Fische überleben den Winter.",
        },
      ],

      merksätze: [
        "T [K] = T [°C] + 273,15 — der absolute Nullpunkt liegt bei −273,15 °C.",
        "Q = m · c · ΔT — Wärme ist proportional zu Masse, Wärmekapazität und Temperaturänderung.",
        "Thermische Längenausdehnung: ΔL = α · L₀ · ΔT — α ist stoffspezifisch.",
        "Wärme fließt stets vom wärmeren zum kälteren Körper (spontaner Prozess).",
        "Dichteanomalie des Wassers: Maximaldichte bei 4 °C, Eis schwimmt auf Wasser.",
        "Körpertemperatur: 37 °C = 310 K — relevant für alle biochemischen Gleichgewichte.",
        "Mischungstemperatur: T_m = (m₁T₁ + m₂T₂)/(m₁+m₂) — aus Energieerhaltung.",
        "Fieber beginnt bei >38 °C, klinisch kritisch ab 40 °C (Hyperthermie).",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie den Begriff der spezifischen Wärmekapazität und erklären Sie, warum die hohe Wärmekapazität des Wassers für biologische Systeme von besonderer Bedeutung ist.",
        answer:
          "Die spezifische Wärmekapazität c eines Stoffes gibt die Energiemenge an, die benötigt wird, um 1 kg dieses Stoffes um 1 K (bzw. 1 °C) zu erwärmen. Sie ist eine intrinsische Materialeigenschaft und hat die Einheit J/(kg·K). Die Beziehung lautet Q = m · c · ΔT. Wasser besitzt mit c ≈ 4180 J/(kg·K) die höchste spezifische Wärmekapazität aller gängigen Flüssigkeiten. Diese außergewöhnliche Eigenschaft hat mehrere biologische Konsequenzen: Erstens fungiert der menschliche Körper (ca. 60 % Wasser) als hervorragender Wärmepuffer. Durch Stoffwechselprozesse entsteht kontinuierlich Wärme; die hohe Wärmekapazität verhindert, dass die Körpertemperatur dabei stark schwankt. Zweitens ermöglicht Wasser als Lösungsmittel eine gleichmäßige Wärmeverteilung im Organismus über Blutkreislauf und Lymphe. Drittens schützt die hohe Wärmekapazität aquatische Ökosysteme: Gewässer erwärmen und kühlen viel langsamer als die Luft, sodass Temperaturextreme abgepuffert werden. Viertens ist Verdunstungskühlung (Schwitzen) effektiv, weil pro Gramm Wasser ≈ 2440 J Verdampfungswärme abgeführt werden. Insgesamt ermöglicht die hohe Wärmekapazität des Wassers die thermische Homöostase, die Voraussetzung für stabiles Enzymfunktionieren und damit für das Leben.",
      },

      klinischerBezug:
        "Fiebermessung, Hypothermie-Protokolle bei Herzoperationen (Kühlung auf 18 °C), Wärmetherapie bei Muskelverspannungen und Infrarotbehandlung von Gelenken.",

      selfTest: [
        {
          question: "Welcher Temperatur in °C entspricht 310 K?",
          options: ["37 °C", "27 °C", "47 °C", "310 °C", "0 °C"],
          correctIndex: 0,
          explanation:
            "Die Umrechnung lautet T[°C] = T[K] − 273,15. Einsetzen: 310 K − 273,15 = 36,85 °C ≈ 37 °C. Dies entspricht der normalen menschlichen Körperkerntemperatur. Merkhilfe: Kelvin ist immer ca. 273 größer als der entsprechende Celsius-Wert.",
          hints: [
            "Die Umrechnungsformel verbindet Kelvin und Celsius durch eine einfache Addition bzw. Subtraktion.",
            "T[°C] = T[K] − 273,15 — setze T = 310 K ein.",
          ],
          tags: ["temperatur", "kelvin", "celsius"],
          difficulty: 1,
        },
        {
          question:
            "Wie viel Wärmeenergie wird benötigt, um 500 g Wasser von 20 °C auf 80 °C zu erwärmen? (c_Wasser = 4180 J/(kg·K))",
          options: ["62 700 J", "125 400 J", "41 800 J", "250 800 J", "83 600 J"],
          correctIndex: 1,
          explanation:
            "Mit Q = m · c · ΔT: m = 0,5 kg, c = 4180 J/(kg·K), ΔT = 80 − 20 = 60 K. Ergebnis: Q = 0,5 × 4180 × 60 = 125 400 J = 125,4 kJ. Diese Energiemenge entspricht etwa der Nahrungsenergie einer kleinen Portion Nudeln (≈ 30 kcal).",
          hints: [
            "Formel: Q = m · c · ΔT. Achte auf die korrekte Einheit von m (kg, nicht g).",
            "ΔT = 80 °C − 20 °C = 60 K. Dann m = 0,5 kg einsetzen.",
          ],
          tags: ["wärmekapazität", "kalorimetrie", "energie"],
          difficulty: 1,
        },
        {
          question:
            "Ein Stahlstab (α = 12 × 10⁻⁶ /K) hat bei 20 °C eine Länge von 2 m. Um wie viel verlängert er sich bei 120 °C?",
          options: ["0,12 mm", "0,24 mm", "2,4 mm", "12 mm", "1,2 mm"],
          correctIndex: 2,
          explanation:
            "ΔL = α · L₀ · ΔT = 12 × 10⁻⁶ /K × 2 m × (120 − 20) K = 12 × 10⁻⁶ × 2 × 100 m = 2400 × 10⁻⁶ m = 2,4 × 10⁻³ m = 2,4 mm. Dieser scheinbar kleine Wert ist technisch relevant: Brücken und Schienen müssen Dehnungsfugen aufweisen, um Spannungen zu vermeiden.",
          hints: [
            "Formel: ΔL = α · L₀ · ΔT. ΔT = 120 °C − 20 °C = 100 K.",
            "Einheiten prüfen: α ist in /K, L₀ in m, ΔT in K → ΔL in m. Dann in mm umrechnen.",
          ],
          tags: ["wärmedehnung", "ausdehnungskoeffizient", "länge"],
          difficulty: 2,
        },
        {
          question:
            "300 g Wasser bei 80 °C werden mit 200 g Wasser bei 10 °C gemischt. Welche Mischtemperatur entsteht? (Wärmeverluste vernachlässigt)",
          options: ["45 °C", "40 °C", "60 °C", "52 °C", "35 °C"],
          correctIndex: 3,
          explanation:
            "Energieerhaltung: m₁(T₁ − T_m) = m₂(T_m − T₂). Umstellen: T_m = (m₁T₁ + m₂T₂)/(m₁ + m₂) = (300 × 80 + 200 × 10)/(300 + 200) = (24000 + 2000)/500 = 26000/500 = 52 °C. Die Mischtemperatur liegt stets zwischen den Ausgangswerten, gewichtet nach den Massen.",
          hints: [
            "Energieerhaltung: abgegebene Wärme = aufgenommene Wärme. Da c gleich, kürzt es sich heraus.",
            "T_m = (m₁·T₁ + m₂·T₂)/(m₁ + m₂) — Massen in gleicher Einheit (g oder kg), Temperaturen in °C.",
          ],
          tags: ["mischtemperatur", "kalorimetrie", "wärmekapazität"],
          difficulty: 2,
        },
        {
          question: "Warum hat Wasser sein Dichtemaximum bei 4 °C und nicht bei 0 °C?",
          options: [
            "Weil Wasser bei 4 °C siedet.",
            "Wegen der kovalenten Bindungen im Wassermolekül.",
            "Weil der osmotische Druck bei 4 °C maximal ist.",
            "Weil Wasser bei 0 °C gasförmig vorliegt.",
            "Wegen der Wasserstoffbrückenbindungen, die beim Abkühlen unter 4 °C ein offenes Gitterwerk bilden und das Wasser ausdehnen.",
          ],
          correctIndex: 4,
          explanation:
            "Zwischen 0 und 4 °C bilden sich zunehmend geordnete Wasserstoffbrückennetzwerke im Wasser, die das Volumen vergrößern (weniger dichte Packung). Bei 4 °C ist der Kompromiss zwischen thermischer Bewegung und Netzwerkbildung optimal — maximale Dichte. Unter 4 °C dominiert die Gitterstruktur (wie im Eis), das Volumen nimmt zu, die Dichte sinkt. Diese Anomalie ist biologisch fundamental: Seen frieren von oben, Grundwasser bleibt bei 4 °C und schützt aquatische Organismen.",
          hints: [
            "Denke an die Wasserstoffbrückenstruktur des Eises: offenes hexagonales Gitter, weniger dicht als flüssiges Wasser.",
            "Zwischen 0 und 4 °C nimmt die Netzwerkbildung zu → Volumen steigt → Dichte sinkt.",
          ],
          tags: ["wasser", "dichteanomalie", "wasserstoffbrücke"],
          difficulty: 2,
        },
        {
          question: "Ein Patient hat 39,5 °C Fieber. Wie viel Grad Fahrenheit entspricht das?",
          options: ["103,1 °F", "98,6 °F", "100,0 °F", "107,1 °F", "39,5 °F"],
          correctIndex: 0,
          explanation:
            "Umrechnung: T[°F] = T[°C] × 1,8 + 32 = 39,5 × 1,8 + 32 = 71,1 + 32 = 103,1 °F. Zum Vergleich: Normaltemperatur 37 °C = 98,6 °F. Werte über 103 °F gelten in US-amerikanischer Klinik als hohes Fieber und erfordern in der Regel antifebrile Behandlung.",
          hints: [
            "Formel: T[°F] = T[°C] × 1,8 + 32.",
            "39,5 × 1,8 = 71,1; dann 71,1 + 32 berechnen.",
          ],
          tags: ["temperatur", "fahrenheit", "celsius"],
          difficulty: 1,
        },
        {
          question: "Welche der folgenden Aussagen zur spezifischen Wärmekapazität ist korrekt?",
          options: [
            "Eisen hat eine höhere spezifische Wärmekapazität als Wasser.",
            "Die spezifische Wärmekapazität von Wasser beträgt etwa 4180 J/(kg·K) und ist damit außergewöhnlich hoch.",
            "Die spezifische Wärmekapazität ist unabhängig vom Stoff und immer gleich.",
            "Eine hohe spezifische Wärmekapazität bedeutet, dass ein Stoff sich schnell erwärmt.",
            "Eis hat eine höhere spezifische Wärmekapazität als flüssiges Wasser.",
          ],
          correctIndex: 1,
          explanation:
            "Wasser hat mit c ≈ 4180 J/(kg·K) die höchste spezifische Wärmekapazität aller gängigen Flüssigkeiten und die meisten Feststoffe haben deutlich niedrigere Werte (Eisen ≈ 450, Aluminium ≈ 900 J/(kg·K)). Eine hohe spezifische Wärmekapazität bedeutet, dass viel Energie benötigt wird, um den Stoff zu erwärmen — er erwärmt sich also langsam. Eis hat nur c ≈ 2090 J/(kg·K), etwa halb so viel wie flüssiges Wasser.",
          hints: [
            "Spezifische Wärmekapazität: je höher c, desto mehr Energie braucht man pro kg und Kelvin.",
            "Vergleichswerte: Wasser 4180, Eis 2090, Eisen 450, Aluminium 900 J/(kg·K).",
          ],
          tags: ["wärmekapazität", "wasser", "spezifisch"],
          difficulty: 1,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────
    // UK ph-4-02: Wärmeübertragung
    // ─────────────────────────────────────────────────────────────────
    {
      id: "ph-4-02",
      title: "Wärmeübertragung",
      stichworte: [
        "Wärmeleitung",
        "Konvektion",
        "Wärmestrahlung",
        "Fouriersches Gesetz",
        "Stefan-Boltzmann-Gesetz",
        "Wärmeleitfähigkeit",
        "Thermoregulation",
        "Infrarotstrahlung",
        "Vasokonstriktion",
        "Emissionsgrad",
        "Wiensches Verschiebungsgesetz",
        "Gegenstrom-Wärmeaustausch",
      ],
      content: `Warum fühlt sich ein Metallgriff kalt an, obwohl er dieselbe Raumtemperatur hat wie ein Holzgriff? Die Antwort liegt in der Art, wie Wärme transportiert wird.

Wärme kann auf drei physikalisch grundverschiedene Arten transportiert werden: durch **Wärmeleitung** (Konduktion), **Konvektion** und **Wärmestrahlung**. Im menschlichen Körper wirken alle drei Mechanismen gleichzeitig — ihr Zusammenspiel bestimmt, ob wir frieren, schwitzen oder eine stabile Kerntemperatur halten. Die Physik dahinter ist direkt prüfungsrelevant, weil sie Thermoregulation, Fieber, Hypothermie und viele klinische Verfahren erklärt.

---

{{DIAGRAM:temperature-scales}}

## Wärmeleitung (Konduktion)

Bei der Wärmeleitung wird thermische Energie durch direkte Wechselwirkung benachbarter Teilchen weitergegeben — Molekül stößt Molekül an, ohne dass Materie insgesamt transportiert wird. Deshalb funktioniert Wärmeleitung auch in Festkörpern, wo die Teilchen ortsfest schwingen.

Das **Fouriersche Gesetz** beschreibt den stationären Wärmestrom durch eine ebene Schicht:

**Q̇ = λ · A · ΔT / d**

| Größe | Bedeutung | Einheit |
|-------|-----------|---------|
| Q̇ | Wärmestrom (Leistung) | W |
| λ | Wärmeleitfähigkeit (materialspezifisch) | W/(m·K) |
| A | Querschnittsfläche | m² |
| ΔT | Temperaturdifferenz | K |
| d | Schichtdicke | m |

Die Formel sagt: Je größer die Fläche und die Temperaturdifferenz, desto mehr Wärme fließt pro Sekunde. Je dicker die Schicht, desto weniger. Der entscheidende Materialparameter ist die **Wärmeleitfähigkeit λ** — sie unterscheidet gute Leiter von Isolatoren um mehrere Größenordnungen:

| Material | λ [W/(m·K)] | Bedeutung |
|----------|-------------|-----------|
| Kupfer | 380 | Exzellenter Wärmeleiter (frei bewegliche Elektronen) |
| Stahl | 50 | Guter Leiter |
| Knochen (kompakt) | 0,4–0,6 | Moderater Leiter |
| Wasser | 0,6 | Leitet besser als Gewebe, schlechter als Metalle |
| Muskelgewebe | 0,5 | Ähnlich wie Wasser (hoher Wassergehalt) |
| Körperfett | 0,2 | Biologischer Isolator |
| Luft (ruhend) | 0,026 | Hervorragender Isolator |

Warum tragen wir im Winter dicke Jacken? Nicht wegen des Stoffes selbst — sondern wegen der **eingeschlossenen Luft**. Luft hat mit λ ≈ 0,026 W/(m·K) eine extrem niedrige Wärmeleitfähigkeit. Daunen, Wolle und Schaumstoff funktionieren als Isolatoren, weil sie Luftpolster einschließen und Konvektion unterdrücken.

Analog dazu wirkt **subkutanes Fettgewebe** (λ ≈ 0,2) als körpereigene Wärmeisolation — ein Grund, warum schlankere Menschen schneller frieren. Der **thermische Widerstand** R_th = d/(λ·A) ist das Analogon zum elektrischen Widerstand; mehrere Schichten (Fett → Kleidung → Luftgrenzschicht) addieren sich wie Widerstände in Reihe.

> **Merke:** Q̇ = λ · A · ΔT / d — hohe Wärmeleitfähigkeit λ (Metalle) bedeutet schnellen Wärmetransport; niedrige λ (Luft, Fett) bedeutet gute Isolation. Nicht verwechseln: λ beschreibt *Transport*, die spezifische Wärmekapazität c beschreibt *Speicherung* von Wärme.

---

## Konvektion

Bei der Konvektion wird Wärme durch **strömende Materie** transportiert — das Medium selbst bewegt sich und nimmt seine thermische Energie mit. Konvektion tritt nur in Fluiden (Flüssigkeiten und Gasen) auf, nie in Festkörpern.

### Natürliche Konvektion

Erwärmtes Fluid dehnt sich aus, wird weniger dicht und steigt auf; kühleres, dichteres Fluid sinkt ab. So entsteht eine zirkuläre Strömung — die **Konvektionswalze**. Beispiele: warme Luft über einer Heizung, Meeresströmungen, die Mantelkonvektion im Erdinneren. Die treibende Kraft ist der temperaturbedingte Dichteunterschied im Schwerefeld.

### Erzwungene Konvektion

Eine externe Pumpe oder ein Gebläse beschleunigt den Wärmetransport weit über die natürliche Konvektion hinaus. Der klinisch wichtigste Fall: Der **Blutkreislauf** ist ein hocheffizientes System erzwungener Konvektion. Das Herz pumpt pro Minute etwa 5 Liter Blut, das im Körperkern (Leber, aktive Muskulatur) Wärme aufnimmt und zur Hautoberfläche transportiert, wo die Wärme an die Umgebung abgegeben wird.

Warum ist das relevant? Weil der Körper die **Durchblutung der Haut** als Stellschraube nutzt: Bei Hitze weiten sich die Hautgefäße (**Vasodilatation**), mehr warmes Blut gelangt an die Oberfläche, die Wärmeabgabe steigt. Bei Kälte verengen sich die Gefäße (**Vasokonstriktion**), weniger Blut erreicht die Peripherie, der Wärmeverlust sinkt. Dieser Mechanismus erklärt, warum kalte Finger blass werden und warme Wangen rot.

> **Merke:** Natürliche Konvektion beruht auf Dichteunterschieden durch Temperaturgradienten; erzwungene Konvektion braucht eine Pumpe. Der Blutkreislauf ist das wichtigste erzwungene Konvektionssystem des Körpers — er verbindet Wärmeproduktion im Kern mit Wärmeabgabe an der Haut.

---

## Wärmestrahlung

Jeder Körper mit einer Temperatur über dem absoluten Nullpunkt emittiert **elektromagnetische Strahlung** (Infrarotstrahlung). Im Gegensatz zu Leitung und Konvektion braucht Strahlung **kein Medium** — sie funktioniert auch im Vakuum (so erreicht uns die Sonnenwärme).

### Stefan-Boltzmann-Gesetz

Die gesamte abgestrahlte Leistung eines Körpers folgt dem **Stefan-Boltzmann-Gesetz**:

**P = σ · ε · A · T⁴**

| Größe | Bedeutung | Wert/Einheit |
|-------|-----------|--------------|
| P | Abgestrahlte Leistung | W |
| σ | Stefan-Boltzmann-Konstante | 5,67 × 10⁻⁸ W/(m²·K⁴) |
| ε | Emissionsgrad (0–1) | Haut: ≈ 0,97; Schwarzkörper: 1 |
| A | Körperoberfläche | m² |
| T | Absolute Temperatur | K |

Die **T⁴-Abhängigkeit** ist entscheidend: Schon eine kleine Temperaturerhöhung bewirkt eine überproportionale Zunahme der Strahlungsleistung. Steigt die Körpertemperatur von 37 °C (310 K) auf 42 °C (315 K) — also nur um 1,6 % in Kelvin —, nimmt die Strahlungsleistung um ca. 6,6 % zu, weil (315/310)⁴ ≈ 1,066.

Menschliche Haut hat einen Emissionsgrad von ε ≈ 0,97 — sie ist im Infraroten nahezu ein idealer Schwarzkörper. Im Ruhezustand verliert der Mensch etwa **50 % seiner Körperwärme** durch Strahlung. Dunkle, matte Oberflächen strahlen mehr ab und absorbieren mehr (ε → 1); helle, reflektierende Oberflächen weniger (ε → 0) — deshalb reflektieren Rettungsdecken Infrarotstrahlung und reduzieren den Wärmeverlust.

### Wien'sches Verschiebungsgesetz

Das Wien'sche Verschiebungsgesetz (Verschiebungsgesetz) gibt an, bei welcher Wellenlänge ein Körper am stärksten strahlt:

**λ_max = b / T** (b = 2,898 × 10⁻³ m·K)

Für den menschlichen Körper bei 37 °C (310 K): λ_max = 2,898 × 10⁻³ / 310 ≈ **9,3 μm** — mittleres Infrarot. Genau in diesem Bereich (8–14 μm) arbeiten **Infrarot-Fieberthermometer** und **Thermografiekameras**. Sie messen die von der Haut emittierte IR-Strahlung und rechnen über Stefan-Boltzmann auf die Oberflächentemperatur zurück. Die Methode ist kontaktlos, schnell und hygienisch — deshalb wurde sie in der COVID-19-Pandemie massenhaft an Flughäfen eingesetzt.

Zum Vergleich: Die Sonnenoberfläche (T ≈ 5778 K) strahlt bei λ_max ≈ 500 nm — das ist sichtbares Licht im gelb-grünen Bereich.

> **Merke:** Stefan-Boltzmann: P = σ · ε · A · T⁴ — die vierte Potenz macht kleine Temperaturänderungen wirksam. Wien: λ_max = b/T — der Mensch strahlt bei ~9 μm (Infrarot), die Sonne bei ~500 nm (sichtbar). Strahlung braucht kein Medium und macht ~50 % des Ruhewärmeverlusts aus.

---

{{DIAGRAM:thermodynamics}}

## Thermoregulation

Der Mensch ist ein **Homöotherm** (Gleichwarmer): Die Körperkerntemperatur wird auf etwa 37 °C ± 0,5 °C gehalten — unabhängig davon, ob draußen −20 °C oder +40 °C herrschen. Diese Präzision erfordert ein ausgeklügeltes Regelsystem.

### Kern- und Schalentemperatur

Der Körper lässt sich in zwei thermische Zonen unterteilen: Den **Kern** (Gehirn, Rumpforgane, tiefe Muskulatur) mit konstant ~37 °C und die **Schale** (Haut, Extremitäten), deren Temperatur stark variiert — von ~33 °C bei angenehmer Raumtemperatur bis hinunter zu 28 °C in den Fingerspitzen bei Kälte. Je kälter die Umgebung, desto dicker wird die Schale, weil der Körper die Durchblutung der Peripherie drosselt.

### Mechanismen der Wärmeabgabe

Im Ruhezustand verteilt sich die Wärmeabgabe ungefähr so:
- **Strahlung:** ~50 % (Stefan-Boltzmann, abhängig von Hauttemperatur und Umgebung)
- **Konvektion und Konduktion:** ~25 % (Luftbewegung an der Haut, Kontakt mit Oberflächen)
- **Verdunstung (Evaporation):** ~25 % (Schweiß, Atemluft)

### Schwitzen — Verdunstungskühlung

Schweiß ist das wirksamste Kühlmittel des Körpers. Die Verdunstung von 1 Liter Schweiß entzieht dem Körper etwa **2400 kJ** (Verdampfungswärme von Wasser). Bei maximaler Schweißproduktion (~1–2 L/h bei trainierten Sportlern) kann der Körper theoretisch 600–1200 W Wärmeleistung abführen — weit mehr als die metabolische Wärmeproduktion bei schwerer Arbeit (~500 W). Allerdings funktioniert Verdunstung nur, wenn die Umgebungsluft trocken genug ist. Bei hoher Luftfeuchtigkeit (z. B. Tropen, Sauna) verdunstet der Schweiß kaum — er tropft ab, ohne zu kühlen. Deshalb ist **schwüle Hitze** gefährlicher als trockene.

### Kältezittern (Shivering)

Sinkt die Kerntemperatur, aktiviert der Hypothalamus unwillkürliche, rhythmische Muskelkontraktionen — **Kältezittern**. Da Muskeln bei Kontraktion nur ~25 % der Energie als mechanische Arbeit nutzen und ~75 % als Wärme freisetzen, kann Zittern die Wärmeproduktion auf das 4- bis 5-Fache des Ruheumsatzes steigern. Bei Säuglingen, die noch nicht zittern können, übernimmt das **braune Fettgewebe** (brown adipose tissue, BAT) diese Funktion: Es enthält viele Mitochondrien mit dem Entkopplungsprotein Thermogenin (UCP1), das die oxidative Phosphorylierung von der ATP-Synthese abkoppelt und die Energie direkt als Wärme freisetzt.

### Regulation durch den Hypothalamus

Der **Hypothalamus** fungiert als Thermostat. Er empfängt Temperaturinformationen von peripheren Thermorezeptoren (Haut) und zentralen Sensoren (Bluttemperatur) und steuert die Effektoren:
- **Wärmeabwehr** (Kerntemperatur zu hoch): Vasodilatation → mehr Blut an die Haut, Schweißproduktion ↑, Verhaltensanpassung (Schatten suchen)
- **Kälteabwehr** (Kerntemperatur zu niedrig): Vasokonstriktion → weniger Blut an die Peripherie, Kältezittern, Piloerektion (Gänsehaut, beim Menschen rudimentär), Hormonelle Thermogenese (Thyroxin, Katecholamine)

Bei **Fieber** wird der hypothalamische Sollwert durch Pyrogene (z. B. Interleukin-1, Prostaglandin E₂) nach oben verstellt — der Körper „denkt", die aktuelle Temperatur sei zu niedrig, und aktiviert Wärmebildungsmechanismen (Schüttelfrost). Antipyretika (Paracetamol, ASS) hemmen die Cyclooxygenase (COX) und senken die Prostaglandin-Synthese, wodurch der Sollwert zurückfällt.

> **Merke:** Vasodilatation bei Hitze → mehr Blut an der Haut → mehr Wärmeabgabe. Vasokonstriktion bei Kälte → weniger peripheres Blut → Wärmeerhalt. Schwitzen entzieht ~2400 kJ/L durch Verdunstung. Kältezittern steigert die Wärmeproduktion auf das 4–5-Fache.

---

## Klinische Bezüge

### Therapeutische Hypothermie

Nach einem **Herzstillstand** mit erfolgreicher Reanimation wird die Körperkerntemperatur gezielt auf 32–36 °C gesenkt (Targeted Temperature Management, TTM). Methoden: gekühlte Infusionslösungen (erzwungene Konvektion), externe Kühlpads (Konduktion), endovaskuläre Katheter. Warum hilft Kühlung? Der zerebrale Metabolismus sinkt um etwa **6 % pro °C** Temperaturabsenkung. Weniger Stoffwechsel bedeutet weniger Sauerstoffbedarf und weniger Bildung toxischer Radikale — das schützt Neurone vor **Reperfusionsschäden** (Zellschäden, die paradoxerweise bei Wiederdurchblutung nach Ischämie auftreten).

### Hyperthermie und Hitzschlag

Wenn die Wärmeabgabe versagt (z. B. bei Dehydratation, hoher Luftfeuchtigkeit oder intensiver körperlicher Belastung in der Hitze), kann die Kerntemperatur auf über 40 °C steigen. Ab ~41,5 °C beginnt die **Proteindenaturierung** — Enzyme verlieren ihre Funktion, Zellmembranen werden instabil, das ZNS versagt (Bewusstseinstrübung, Krampfanfälle). Ein **Hitzschlag** (Kerntemperatur > 40 °C + ZNS-Symptome) ist ein lebensbedrohlicher Notfall, der sofortige Kühlung erfordert: Eisbeutel an Leisten und Achseln (große Gefäße nahe der Oberfläche → maximale konvektive Kühlung), kalte Infusionen, verdunstende Tücher.

### Wärmetherapie

**Wärmflaschen** übertragen Wärme durch Konduktion (direkter Kontakt, λ_Wasser = 0,6 W/(m·K)) und interne Konvektion. **Rotlichtlampen** nutzen Infrarotstrahlung (λ = 780–1400 nm), die berührungslos Wärme direkt im Gewebe deponiert — mit tieferer Gewebepenetration und geringerem Verbrennungsrisiko an der Hautoberfläche. **Ultraschall-Diathermie** erzeugt Wärme durch Absorption hochfrequenter Schallwellen im Gewebe und erreicht tiefere Schichten als Infrarot. Alle drei Verfahren nutzen unterschiedliche physikalische Übertragungswege für das gleiche Ziel: lokale Durchblutungssteigerung und Schmerzlinderung.

### Gegenstrom-Wärmeaustausch

In den Extremitäten verlaufen Arterien und Venen eng beieinander. Das warme arterielle Blut gibt auf dem Weg zur Peripherie Wärme an das kühle, rückströmende venöse Blut ab. Dadurch kommt in den Fingerspitzen bereits vorgekühltes Blut an — der Wärmeverlust über die Akren wird drastisch reduziert. Dieses **Gegenstromprinzip** findet sich auch beim Rete mirabile (Wundernetz) mancher Tiere (z. B. in den Flossen von Walen und Delfinen) und wird technisch in der **Dialyse** (Bluterwärmung) sowie bei **Herz-Lungen-Maschinen** eingesetzt. Der Wirkungsgrad des Wärmeaustauschs steigt, weil über die gesamte Strecke ein Temperaturgradient aufrechterhalten wird — im Unterschied zum Gleichstrom, bei dem sich die Temperaturen schnell angleichen.

> **Merke:** Therapeutische Hypothermie senkt den Hirnmetabolismus um ~6 %/°C und schützt vor Reperfusionsschäden. Hitzschlag (> 40 °C + ZNS-Symptome) erfordert sofortige Kühlung. Gegenstrom-Wärmeaustausch in den Extremitäten minimiert peripheren Wärmeverlust — gleiches Prinzip in Dialyse und Herz-Lungen-Maschine.

---

## Rechenbeispiele

**Beispiel 1 — Wärmestrom durch Fettschicht (Fourier):**
Subkutanes Fett: d = 2 cm = 0,02 m, λ = 0,2 W/(m·K), A = 0,5 m², ΔT = 4 K (Kern 37 °C, Hautoberfläche 33 °C):
Q̇ = 0,2 × 0,5 × 4 / 0,02 = **20 W**. Das ist die Leistung einer schwachen Glühbirne — eine realistische Abschätzung des konduktiven Wärmeverlusts über den Rumpf.

**Beispiel 2 — Netto-Strahlungsverlust (Stefan-Boltzmann):**
A = 1,8 m², T_Haut = 33 °C = 306 K, T_Raum = 20 °C = 293 K, ε = 0,97:
P_ab = 5,67 × 10⁻⁸ × 0,97 × 1,8 × 306⁴ ≈ 868 W; P_auf = 5,67 × 10⁻⁸ × 0,97 × 1,8 × 293⁴ ≈ 726 W.
Netto: **ΔP ≈ 142 W** — der größte Einzelbeitrag zur Wärmeabgabe in Ruhe.

**Beispiel 3 — Wien: Emissionsmaximum:**
λ_max = 2,898 × 10⁻³ / 310 = **9,35 μm** (mittleres Infrarot). Fieberthermometer arbeiten deshalb im Bereich 8–14 μm.

**Beispiel 4 — Verdunstungskühlung beim Sport:**
Ein Läufer schwitzt 1,5 L/h. Verdampfungswärme: 1,5 × 2400 kJ = 3600 kJ/h = **1000 W** Kühlleistung. Bei einer metabolischen Wärmeproduktion von ~800 W beim Laufen reicht das aus — solange der Schweiß tatsächlich verdunstet.`,

      lernziele: [
        "Das Fouriersche Gesetz der Wärmeleitung anwenden und die Bedeutung der Wärmeleitfähigkeit λ erklären",
        "Den Unterschied zwischen natürlicher und erzwungener Konvektion beschreiben",
        "Das Stefan-Boltzmann-Gesetz interpretieren und die T⁴-Abhängigkeit verstehen",
        "Die drei Wärmeübertragungsmechanismen im Kontext der menschlichen Thermoregulation erläutern",
        "Den Fiebermechanismus auf molekularer und physikalischer Ebene erklären",
      ],

      sections: [
        {
          heading: "Typische Wärmeleitfähigkeiten",
          text: "Die Wärmeleitfähigkeit λ [W/(m·K)] ist eine materialspezifische Größe, die angibt, wie gut ein Stoff Wärme leitet. Metalle leiten gut (hohes λ), Gase und Fett isolieren (niedriges λ).",
          table: {
            headers: ["Material", "λ [W/(m·K)]"],
            rows: [
              ["Kupfer", "380"],
              ["Stahl", "50"],
              ["Glas", "1,0"],
              ["Körperfett", "0,2"],
              ["Muskelgewebe", "0,5"],
              ["Luft (ruhend)", "0,026"],
              ["Wasser", "0,6"],
              ["Wollgewebe", "0,04"],
            ],
          },
          merksatz: "Wärmeleitfähigkeit λ: Kupfer (380) >> Wasser (0,6) >> Luft (0,026) W/(m·K).",
        },
        {
          heading: "Wärmeleitung: Fouriersches Gesetz",
          text: "Der Wärmestrom Q̇ durch eine Schicht ist proportional zur Temperaturdifferenz ΔT, zur Fläche A und umgekehrt proportional zur Dicke d. Der Proportionalitätsfaktor ist die materialspezifische Wärmeleitfähigkeit λ in W/(m·K). Metalle (Kupfer λ = 380) leiten exzellent, Körperfett (λ = 0,2) und Luft (λ = 0,026) isolieren. Verbände und Kleidung wirken durch eingeschlossene Luft als thermische Isolatoren. In der Bauphysik werden Schichten wie Widerstände in Reihe geschaltet: R_th = d/(λ·A).",
          merksatz:
            "Q̇ = λ · A · ΔT / d — hohe Wärmeleitfähigkeit λ bedeutet gute Wärmeleitung (Metalle), niedrige bedeutet gute Isolation (Luft, Fett).",
        },
        {
          heading: "Konvektion und Wärmestrahlung",
          text: "Konvektion erfordert ein strömendes Medium; natürliche Konvektion entsteht durch Auftrieb erwärmter Fluide, erzwungene durch Pumpen oder Gebläse. Der menschliche Blutkreislauf ist ein hocheffizientes erzwungenes Konvektionssystem, das Wärme vom Kern zur Haut transportiert. Wärmestrahlung (Infrarot) braucht kein Medium. Die Stefan-Boltzmann-Relation P ∝ T⁴ erklärt, warum Fiebertemperaturen die Strahlungsabgabe deutlich erhöhen. Die menschliche Haut hat ε ≈ 0,97 — nahezu idealer Schwarzkörper für Infrarot.",
          merksatz:
            "Mensch verliert Wärme durch Strahlung (~50 %), Konvektion (~25 %), Verdunstung (~25 %) — alle drei Mechanismen gleichzeitig.",
        },
        {
          heading: "Klinische Relevanz: Inkubatoren und Wundversorgung",
          text: "Frühgeborene verlieren rasch Wärme durch alle drei Mechanismen (große Körperoberfläche, wenig Fettgewebe). Inkubatoren kompensieren dies: warme Luft (Konvektion), beheizte Wände (Strahlung), isolierende Wände (Wärmeleitung). Wundverbände reduzieren Wärmeverlust durch Evaporation (feuchte Wunden kühlen durch Verdunstung) und Konduktion. Silberhaltige Verbände kombinieren antibakterielle Wirkung mit guter Wärmeregulation.",
          merksatz:
            "Frühgeborene brauchen Inkubatoren, weil alle drei Wärmeverlustmechanismen unkontrolliert wirken — Kompensation durch kontrollierte Umgebungstemperatur und -feuchte.",
        },
      ],

      merksätze: [
        "Wärmeleitung: Q̇ = λ · A · ΔT / d — proportional zu Fläche und Temperaturdifferenz, umgekehrt zu Dicke.",
        "Konvektion benötigt ein strömendes Medium; Strahlung kann im Vakuum stattfinden.",
        "Stefan-Boltzmann: P = σ · ε · A · T⁴ — die T⁴-Abhängigkeit ist entscheidend.",
        "Menschliche Haut: ε ≈ 0,97 (fast idealer Strahler im Infrarot), Grundlage der Thermografie.",
        "Bei Fieber erhöht der Hypothalamus den Sollwert durch Prostaglandine — kein Fehlfunktion, sondern Abwehrreaktion.",
        "Blutkreislauf = erzwungenes Konvektionssystem für Wärmeverteilung im Körper.",
        "Vasodilatation bei Hitze → mehr Wärmeabgabe über Haut; Vasokonstriktion bei Kälte → Wärmeerhalt.",
        "Frühgeborene: hohes Oberfläche/Volumen-Verhältnis → rasche Wärmeverluste → Inkubator nötig.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Beschreiben Sie die drei Mechanismen der Wärmeübertragung und erläutern Sie, wie der menschliche Organismus diese zur Thermoregulation nutzt.",
        answer:
          "Wärmeübertragung erfolgt durch Wärmeleitung (Konduktion), Konvektion und Strahlung. Bei der Wärmeleitung (Fouriersches Gesetz: Q̇ = λ·A·ΔT/d) fließt Energie durch direkten Teilchenkontakt; Körperfett wirkt als Isolator (λ ≈ 0,2 W/(m·K)), Blut als Wärmeleiter. Bei der Konvektion transportiert ein strömendes Medium die Wärme; der Blutkreislauf ist das körpereigene Konvektionssystem: Blut nimmt im Kern (Leber, Muskeln) Wärme auf und gibt sie an der Haut ab. Wärmestrahlung (Stefan-Boltzmann: P = σ·ε·A·T⁴) stellt im Ruhezustand den größten Wärmeverlust dar (≈50 %). Die Thermoregulation wird vom Hypothalamus koordiniert: Bei Überhitzung → Vasodilatation in der Haut (erhöht Konvektion und Strahlung) + Schweißproduktion (Verdunstungskühlung, ≈2440 J/g). Bei Unterkühlung → Vasokonstriktion (reduziert periphere Wärmeabgabe) + Muskelzittern (metabolische Wärmeerzeugung). Fieber entsteht durch pyrogene Substanzen (z. B. bakterielles Lipopolysaccharid, Interleukin-1), die über Prostaglandin E₂ den hypothalamischen Sollwert erhöhen. Antipyretika wie Paracetamol hemmen die COX-Enzyme und senken so die Prostaglandinsynthese.",
      },

      klinischerBezug:
        "Thermoregulation (Fieber, Hypothermie), Inkubatoren für Frühgeborene, Wundverbände, Infrarot-Thermografie zur kontaktlosen Fiebermessung und Entzündungsdiagnostik.",

      selfTest: [
        {
          question:
            "Eine Fettschicht von 2 cm Dicke (λ = 0,2 W/(m·K)) bedeckt eine Fläche von 0,5 m². Die Körperkerntemperatur beträgt 37 °C, die Hautoberfläche 33 °C. Welcher Wärmestrom fließt durch die Fettschicht?",
          options: ["20 W", "2 W", "200 W", "0,2 W", "10 W"],
          correctIndex: 0,
          explanation:
            "Fouriersches Gesetz: Q̇ = λ · A · ΔT / d = 0,2 W/(m·K) × 0,5 m² × (37 − 33) K / 0,02 m = 0,2 × 0,5 × 4 / 0,02 = 0,4 / 0,02 = 20 W. Dies entspricht etwa der Leistung einer schwachen Glühbirne und ist eine realistische Abschätzung des Wärmeverlusts des ruhenden Menschen durch Konduktion.",
          hints: [
            "Fouriersches Gesetz: Q̇ = λ · A · ΔT / d. Einheiten prüfen: λ in W/(m·K), A in m², ΔT in K, d in m → Ergebnis in W.",
            "ΔT = 37 − 33 = 4 K, d = 2 cm = 0,02 m einsetzen.",
          ],
          tags: ["wärmeleitung", "fouriergesetz", "wärmestrom"],
          difficulty: 2,
        },
        {
          question:
            "Welche der folgenden Materialien eignet sich am besten als Wärmeisolation bei Wundverbänden?",
          options: [
            "Kupferdraht (λ = 380 W/(m·K))",
            "Aluminiumfolie (λ = 200 W/(m·K))",
            "Schaumstoffverband (λ ≈ 0,04 W/(m·K), enthält viel Luft)",
            "Feuchte Gaze (λ = 0,6 W/(m·K))",
            "Stahlgitter (λ = 50 W/(m·K))",
          ],
          correctIndex: 2,
          explanation:
            "Isolierende Materialien haben eine niedrige Wärmeleitfähigkeit λ. Schaumstoffverbände enthalten viel eingeschlossene Luft (λ_Luft ≈ 0,026 W/(m·K)), was die effektive λ des Verbands auf ≈ 0,04 W/(m·K) senkt. Kupfer und Aluminium (hohe λ) würden Wärme rasch ableiten und die Wundheilung beeinträchtigen. Feuchte Gaze leitet besser als trockener Schaumstoff, da Wasser λ = 0,6 W/(m·K) hat.",
          hints: [
            "Niedrige Wärmeleitfähigkeit λ = gute Isolation. Was enthält viel eingeschlossene Luft?",
            "Luft hat λ ≈ 0,026 W/(m·K) — die niedrigste aller gängigen Stoffe. Materialien, die Luft einschließen, isolieren gut.",
          ],
          tags: ["isolation", "wärmeleitfähigkeit", "verbände"],
          difficulty: 1,
        },
        {
          question:
            "Ein Körper strahlt bei 37 °C (310 K) eine bestimmte Leistung P₁ ab. Bei 42 °C (315 K) beträgt die abgestrahlte Leistung P₂. Wie ändert sich die Strahlungsleistung näherungsweise? (Stefan-Boltzmann-Gesetz)",
          options: [
            "Sie steigt um etwa 1,6 %",
            "Sie verdoppelt sich",
            "Sie steigt um etwa 13,2 %",
            "Sie steigt um etwa 6,6 %",
            "Sie sinkt um 1,6 %",
          ],
          correctIndex: 3,
          explanation:
            "P ∝ T⁴. Verhältnis: P₂/P₁ = (T₂/T₁)⁴ = (315/310)⁴ = (1,01613)⁴ ≈ 1,066 → Zunahme um ≈ 6,6 %. Obwohl die Temperaturdifferenz nur 5 K beträgt (≈ 1,6 % mehr in Kelvin), steigt die Strahlungsleistung wegen der vierten Potenz um 6,6 %. Bei Fieber erhöht sich die Wärmeabgabe durch Strahlung merklich.",
          hints: [
            "Stefan-Boltzmann: P ∝ T⁴. Wichtig: T muss in Kelvin angegeben werden.",
            "P₂/P₁ = (T₂/T₁)⁴ = (315/310)⁴ berechnen. (315/310) ≈ 1,016.",
          ],
          tags: ["wärmestrahlung", "stefan-boltzmann", "temperatur"],
          difficulty: 3,
        },
        {
          question: "Warum frieren Frühgeborene schneller als reife Neugeborene?",
          options: [
            "Weil ihr Blutvolumen größer ist",
            "Weil ihre Lungenkapazität kleiner ist",
            "Weil sie mehr Schweißdrüsen haben",
            "Weil ihr Herzschlag langsamer ist",
            "Wegen des ungünstigen Verhältnisses von Körperoberfläche zu Körpervolumen und geringer Fettschicht",
          ],
          correctIndex: 4,
          explanation:
            "Frühgeborene haben aufgrund ihrer geringen Größe ein ungünstiges Verhältnis von Oberfläche (A) zu Volumen (V): A/V ∝ 1/r. Je kleiner der Körper, desto größer ist die relative Oberfläche. Da Wärmeverlust durch Strahlung (∝ A) und Konduktion (∝ A) proportional zur Oberfläche ist, verlieren kleine Körper relativ mehr Wärme. Zusätzlich fehlt Frühgeborenen die isolierende Unterhautfettschicht (wenig subkutanes Fettgewebe), was λ_gesamt erhöht. Auch braunes Fettgewebe ist weniger entwickelt, sodass sie weniger thermogenetisch reagieren können.",
          hints: [
            "Denke an das Oberfläche/Volumen-Verhältnis: kleine Körper haben relativ mehr Oberfläche.",
            "Wärmeabgabe ∝ Oberfläche A; Wärmeerzeugung ∝ Volumen V. Frühgeborene haben weniger Fett (Isolation).",
          ],
          tags: ["thermoregulation", "frühgeborene", "oberfläche-volumen"],
          difficulty: 2,
        },
        {
          question:
            "Wie funktioniert Infrarot-Thermografie in der medizinischen Diagnostik physikalisch?",
          options: [
            "Sie misst Röntgenstrahlung, die von entzündetem Gewebe abgegeben wird",
            "Sie detektiert die von der Körperoberfläche emittierte Infrarotstrahlung, deren Intensität mit T⁴ steigt",
            "Sie misst elektrische Signale der Haut",
            "Sie nutzt Ultraschall zur Temperaturbestimmung",
            "Sie misst reflektiertes sichtbares Licht",
          ],
          correctIndex: 1,
          explanation:
            "Jeder Körper emittiert elektromagnetische Strahlung entsprechend seiner Temperatur (Stefan-Boltzmann-Gesetz: P = σ·ε·A·T⁴). Die menschliche Haut bei ≈37 °C emittiert hauptsächlich im mittleren Infrarot (λ_max ≈ 9–10 μm nach Wien). Thermografiekameras detektieren diese IR-Strahlung und erstellen Farbbilder der Oberflächentemperaturverteilung. Entzündungen, Tumore und erhöhte Stoffwechselaktivität erhöhen die lokale Temperatur → mehr IR-Strahlung → heller im Thermobild. Die Methode ist nicht-invasiv und kontaktlos.",
          hints: [
            "Stefan-Boltzmann: Jeder Körper strahlt elektromagnetische Wellen ab, deren Intensität mit T⁴ steigt.",
            "Wien: Bei 37 °C (310 K) liegt das Maximum der Emission im Infrarotbereich bei λ ≈ 9,4 μm.",
          ],
          tags: ["thermografie", "infrarotstrahlung", "diagnostik"],
          difficulty: 2,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────
    // UK ph-4-03: Thermodynamische Hauptsätze
    // ─────────────────────────────────────────────────────────────────
    {
      id: "ph-4-03",
      title: "Thermodynamische Hauptsätze",
      stichworte: [
        "Erster Hauptsatz",
        "Zweiter Hauptsatz",
        "Dritter Hauptsatz",
        "Entropie",
        "Innere Energie",
        "Carnot-Wirkungsgrad",
        "Energieerhaltung",
        "Isochor",
        "Isobar",
        "Isotherm",
        "Adiabatisch",
        "Gibbs-Energie",
        "ATP-Synthese",
        "Perpetuum mobile",
        "Mikrozustände",
      ],
      content: `Die Hauptsätze der Thermodynamik erklären, warum Wärme von heiß nach kalt fließt, warum ein Perpetuum mobile unmöglich ist und warum dein Kaffee immer kalt wird — aber nie spontan wieder heiß. Die Kernidee: Energie bleibt erhalten (1. Hauptsatz), aber ihre Qualität nimmt unaufhaltsam ab (2. Hauptsatz).

{{DIAGRAM:thermodynamics}}

---

## Nullter Hauptsatz: Was Temperatur überhaupt bedeutet

Wenn System A im thermischen Gleichgewicht mit System C steht und System B ebenfalls im Gleichgewicht mit C steht, dann sind auch A und B im Gleichgewicht miteinander. Das klingt trivial — ist aber die physikalische Grundlage jeder Temperaturmessung: Ein Thermometer (C) erreicht mit deinem Körper (A) ein Gleichgewicht und zeigt dann denselben Temperaturwert an.

> **Merke:** Der nullte Hauptsatz definiert Temperatur als messbare Größe. Ohne ihn wäre Fiebermessen physikalisch nicht begründbar.

---

## Erster Hauptsatz: Energieerhaltung

Die innere Energie U eines Systems kann sich nur auf zwei Wegen ändern: durch Wärmezufuhr (Q) oder durch mechanische Arbeit (W).

**ΔU = Q + W**

- **ΔU** = Änderung der inneren Energie [J]
- **Q** = dem System zugeführte Wärme [J] (positiv bei Zufuhr)
- **W** = am System verrichtete Arbeit [J] (positiv bei Kompression)

Die **innere Energie** U umfasst alle Bewegungsformen der Teilchen: Translation (geradlinige Bewegung), Rotation, Vibration und Bindungsenergien. Bei idealen Gasen hängt U nur von der Temperatur ab: U ∝ T.

> 💡 **Prüfungstipp — Vorzeichenkonvention:** Manche Lehrbücher schreiben ΔU = Q − W, wobei W dann die vom System verrichtete Arbeit ist (z. B. bei Expansion). Im MedAT-Kontext: Immer prüfen, welche Konvention angegeben ist. Merke: Bei ΔU = Q + W ist W positiv, wenn Arbeit am System geleistet wird (Kompression). Bei ΔU = Q − W ist W positiv, wenn das System Arbeit leistet (Expansion).

Konsequenz: Energie kann weder erzeugt noch vernichtet werden — ein **Perpetuum mobile erster Art** (Maschine, die Energie aus dem Nichts erzeugt) ist unmöglich.

> **Merke:** ΔU = Q + W ist die Energieerhaltung der Thermodynamik. Jedes Joule, das ein System gewinnt, muss als Wärme oder Arbeit zugeführt worden sein.

---

## Spezielle Zustandsänderungen

Je nachdem, welche Größe konstant gehalten wird, vereinfacht sich der erste Hauptsatz auf charakteristische Weise:

| Prozess | Konstant | W | 1. Hauptsatz | Anschauung |
|---|---|---|---|---|
| **Isochor** | V = const | W = 0 | **ΔU = Q** | Druckkochtopf: Volumen fest, Druck steigt mit T |
| **Isobar** | p = const | W = −p·ΔV | **ΔU = Q − p·ΔV** | Kolben frei beweglich: Volumen passt sich an |
| **Isotherm** | T = const | W ≠ 0 | **ΔU = 0 → Q = −W** | Langsame Expansion mit Wärmebad: T bleibt gleich |
| **Adiabatisch** | Q = 0 | W ≠ 0 | **ΔU = W** | Schnelle Kompression: keine Zeit für Wärmeaustausch |

**Isochor** — Beispiel: Ein verschlossener Druckkochtopf wird erhitzt. Das Volumen kann sich nicht ändern, also ist die Volumenarbeit null. Die gesamte zugeführte Wärme erhöht direkt die innere Energie → die Temperatur steigt, der Druck steigt. Klinisch: Gasflaschen dürfen nicht erhitzt werden (Berstgefahr).

**Isobar** — Beispiel: Ein Kolben, der sich frei bewegen kann. Der Druck bleibt gleich (Atmosphärendruck), aber das Volumen ändert sich. Ein Teil der zugeführten Wärme wird für Volumenarbeit (p·ΔV) verbraucht — deshalb ist die Temperaturerhöhung bei isobarer Erwärmung geringer als bei isochorer. Lungenbelüftung bei Spontanatmung ist näherungsweise isobar.

**Isotherm** — Beispiel: Ein Gas dehnt sich langsam aus, während es permanent Wärme aus der Umgebung aufnimmt. Die Temperatur bleibt konstant → bei idealem Gas bleibt U konstant → die aufgenommene Wärme wird vollständig in Arbeit umgewandelt: Q = −W.

**Adiabatisch** — Beispiel: Schnelle Kompression, so schnell, dass kein Wärmeaustausch stattfinden kann (Q = 0). Die gesamte Kompressionsarbeit geht in innere Energie → die Temperatur steigt. Deshalb wird eine Fahrradpumpe heiß. Dieselmotor: Luft wird adiabatisch so stark komprimiert, dass T über den Zündpunkt des Kraftstoffs steigt.

> **Merke:** Isotherme Expansion: das Gas leistet Arbeit und nimmt dafür Wärme auf. Adiabatische Kompression: die gesamte Arbeit wird in innere Energie umgewandelt — darum wird die Pumpe heiß.

---

## Zweiter Hauptsatz: Entropie und Irreversibilität

Der zweite Hauptsatz beantwortet die Frage, die der erste offen lässt: Wenn Energie erhalten bleibt, warum fließt Wärme dann nur in eine Richtung? Warum wird Kaffee kalt, statt die Tasse spontan heißer zu machen?

### Drei äquivalente Formulierungen

1. **Clausius:** Wärme fließt spontan nur von warm nach kalt — nie umgekehrt. (Einen Kühlschrank betreiben erfordert Arbeit.)
2. **Kelvin-Planck:** Es gibt keine Maschine, die Wärme vollständig in Arbeit umwandelt. (Kein Perpetuum mobile zweiter Art.)
3. **Entropie:** Die Gesamtentropie eines abgeschlossenen Systems nimmt bei irreversiblen Prozessen zu: **ΔS_gesamt ≥ 0**.

Alle drei Formulierungen sind logisch äquivalent — wer eine akzeptiert, muss die anderen ebenfalls akzeptieren.

### Entropie: Intuition zuerst

Bevor wir zur Formel kommen, das Bild: **Entropie misst die Anzahl möglicher Mikrozustände** — also auf wie viele verschiedene Weisen sich die Teilchen eines Systems anordnen können.

- **Eis** (niedriges S): Wassermoleküle sitzen in einem regelmäßigen Kristallgitter. Wenige Anordnungsmöglichkeiten.
- **Flüssiges Wasser** (höheres S): Moleküle bewegen sich frei. Viel mehr mögliche Positionen und Geschwindigkeiten.
- **Wasserdampf** (höchstes S): Moleküle füllen den gesamten verfügbaren Raum. Enormes Volumen an Mikrozuständen.

Ein weiteres Beispiel: Ein Gas, das in eine Hälfte einer Box eingesperrt ist, hat weniger Mikrozustände als dasselbe Gas in der gesamten Box. Öffnet man die Trennwand, expandiert das Gas spontan — weil der expandierte Zustand wahrscheinlicher ist (mehr Mikrozustände). Es wird nie spontan in die Hälfte zurückkehren, obwohl das energetisch erlaubt wäre.

**Die fundamentale Einsicht:** Systeme entwickeln sich spontan zu Zuständen mit höherer Wahrscheinlichkeit. Das ist der zweite Hauptsatz.

### Entropie: Formale Definition

**Boltzmann-Relation:** S = k_B · ln(W)

Dabei ist k_B = 1,381 × 10⁻²³ J/K die Boltzmann-Konstante und W die Anzahl der Mikrozustände. Je mehr Mikrozustände, desto höher die Entropie.

**Clausius-Definition (makroskopisch):** ΔS = Q_rev / T

Die Entropieänderung eines reversiblen Prozesses ist die zugeführte Wärme geteilt durch die absolute Temperatur. Wichtig: Q_rev ist die Wärme bei einem reversiblen Prozess. Für irreversible Prozesse gilt: ΔS > Q/T.

> **Merke:** Entropie ist kein Chaos — sie misst die Anzahl möglicher Mikrozustände. Mehr Mikrozustände = wahrscheinlicherer Zustand = höhere Entropie. Systeme entwickeln sich spontan zum wahrscheinlichsten Zustand.

---

## Dritter Hauptsatz: Der absolute Nullpunkt

Beim absoluten Nullpunkt (T = 0 K = −273,15 °C) hat ein perfekter Kristall die Entropie null: **S(T → 0) = 0**. Das bedeutet: Es gibt nur einen einzigen Mikrozustand — alle Atome sitzen an ihrem Platz, keine Bewegung, keine Unordnung, W = 1, also S = k_B · ln(1) = 0.

Der absolute Nullpunkt ist prinzipiell nicht erreichbar (Nernst-Theorem) — man kann ihm nur asymptotisch näherkommen.

---

{{DIAGRAM:ideal-gas-laws}}

## Carnot-Wirkungsgrad: Die theoretische Obergrenze

Jede Wärmekraftmaschine (Dampfturbine, Verbrennungsmotor) nimmt Wärme Q_warm aus einem heißen Reservoir auf, wandelt einen Teil in Arbeit W um und gibt den Rest als Abwärme Q_kalt an ein kaltes Reservoir ab. Der **Carnot-Wirkungsgrad** gibt die theoretisch maximal mögliche Effizienz an:

**η_Carnot = 1 − T_kalt / T_warm**

**T muss in Kelvin eingesetzt werden!** Häufiger Fehler: 1 − 30/600 statt 1 − 303/873.

- T_warm = 600 K, T_kalt = 300 K → η = 1 − 300/600 = **50 %**
- Reale Maschinen erreichen weniger (Reibung, Wärmeleitung, Irreversibilitäten): Dampfkraftwerke ~35–45 %, Automotoren ~25–35 %
- Verbesserung: T_warm erhöhen (Hochdruck-Dampf) oder T_kalt senken (kaltes Kühlwasser)

> **Merke:** η_Carnot = 1 − T_kalt/T_warm — T immer in Kelvin. Je größer der Temperaturunterschied, desto höher der maximal mögliche Wirkungsgrad. Kein realer Prozess kann diesen Wert übertreffen.

---

## Gibbs-Energie: Spontaneität vorhersagen

In Chemie und Biologie arbeitet man selten mit abgeschlossenen Systemen. Die **freie Enthalpie** (Gibbs-Energie) G verknüpft Enthalpie und Entropie bei konstantem Druck und Temperatur:

**ΔG = ΔH − T · ΔS**

- **ΔG < 0** → Reaktion läuft spontan (exergonisch)
- **ΔG > 0** → Reaktion läuft nicht spontan (endergonisch, braucht Energiezufuhr)
- **ΔG = 0** → Gleichgewicht

Die vier Kombinationen von ΔH und ΔS:

| ΔH | ΔS | ΔG | Spontaneität |
|---|---|---|---|
| − (exotherm) | + (Entropie steigt) | immer < 0 | **immer spontan** |
| − (exotherm) | − (Entropie sinkt) | < 0 bei niedrigem T | spontan bei **niedrigen T** |
| + (endotherm) | + (Entropie steigt) | < 0 bei hohem T | spontan bei **hohen T** |
| + (endotherm) | − (Entropie sinkt) | immer > 0 | **nie spontan** |

Beispiel: Eis schmelzen (ΔH > 0, ΔS > 0) — spontan erst oberhalb von 0 °C, wenn T·ΔS > ΔH.

> **Merke:** ΔG = ΔH − TΔS. Spontan wenn ΔG < 0. Bei endothermen Reaktionen mit Entropiezunahme entscheidet die Temperatur.

---

## Biologie und der zweite Hauptsatz

Lebende Organismen bauen aus einfachen Molekülen hochstrukturierte Proteine, DNA und Zellorganellen — scheinbar eine Abnahme der Entropie. Widerspricht das dem zweiten Hauptsatz?

**Nein.** Der zweite Hauptsatz gilt für **abgeschlossene Systeme** (kein Energie- oder Materieaustausch mit der Umgebung). Lebewesen sind **offene Systeme**: Sie nehmen hochgeordnete Nahrung (niedrige Entropie) auf und geben Wärme, CO₂ und Abfallprodukte ab (hohe Entropie). Die Entropie der Umgebung steigt dabei stärker als die Entropie im Organismus sinkt. Die **Gesamtentropie** (Organismus + Umgebung) nimmt zu — der zweite Hauptsatz bleibt gewahrt.

**ATP-Hydrolyse als Motor:** Viele biochemische Reaktionen sind endergonisch (ΔG > 0) und würden allein nie ablaufen — etwa Proteinsynthese oder Ionenpumpen. Sie werden an die Hydrolyse von ATP gekoppelt (ΔG° = −30,5 kJ/mol). Die Summe der ΔG-Werte wird negativ → der gekoppelte Prozess wird spontan. ATP ist somit die universelle Energiewährung, die nicht-spontane Reaktionen thermodynamisch ermöglicht.

**Körpertemperatur:** Von der Verbrennungsenergie der Glucose (ΔG° = −2870 kJ/mol) werden ≈ 30 mol ATP synthetisiert (30 × 30,5 = 915 kJ), also η ≈ 34 %. Die restlichen ~66 % werden als Wärme freigesetzt und halten die Körpertemperatur bei 37 °C aufrecht. Pro Tag (2000 kcal ≈ 8400 kJ) ergibt das ~5500 kJ Wärme — eine Durchschnittsleistung von etwa 64 W im Ruhezustand.

> **Merke:** Lebewesen verletzen den zweiten Hauptsatz nicht — sie sind offene Systeme, die Entropie in die Umgebung exportieren. ATP-Hydrolyse treibt nicht-spontane Reaktionen an, indem sie ΔG der Gesamtreaktion negativ macht.

---

## Kalorimetrie: Brennwerte messen

Im **Bombenkalorimeter** verbrennt eine Probe vollständig bei V = const in reinem O₂; die freigesetzte Wärme Q = ΔU (isochor) liefert den **physikalischen Brennwert**: Kohlenhydrate ~17 kJ/g, Fette ~39 kJ/g, Proteine ~23 kJ/g. Der **physiologische Brennwert** von Proteinen ist mit ~17 kJ/g geringer, weil der Körper Stickstoff nicht zu N₂ oxidiert, sondern als Harnstoff ausscheidet.

Die **indirekte Kalorimetrie** misst O₂-Verbrauch und CO₂-Produktion → Grundumsatz (BMR). Standardverfahren in Ernährungsmedizin und Intensivpflege.

> **Merke:** Der physiologische Brennwert von Proteinen (~17 kJ/g) ist geringer als der physikalische (~23 kJ/g), weil der Körper Stickstoff als Harnstoff statt als N₂ ausscheidet.

---

## Häufige Missverständnisse

- **"Entropie = Chaos/Unordnung"** — zu vereinfacht. Entropie misst die Anzahl der Mikrozustände (Wahrscheinlichkeit), nicht Unordnung im Alltagssinn. Ein Kartenspiel hat dieselbe Entropie, egal ob sortiert oder gemischt.
- **"Lebewesen widerlegen den 2. Hauptsatz"** — falsch. Sie verringern ihre eigene Entropie lokal, aber die Gesamtentropie (inkl. Umgebung) steigt immer.
- **"T in Celsius beim Carnot-Wirkungsgrad"** — der häufigste Rechenfehler. Immer Kelvin verwenden.
- **"Adiabatisch = isotherm"** — Verwechslungsgefahr. Adiabatisch: kein Wärmeaustausch (Q = 0), Temperatur ändert sich. Isotherm: Temperatur konstant, aber Wärmeaustausch findet statt.

---

## Rechenbeispiele

**Beispiel 1 — Carnot-Wirkungsgrad eines Dampfkraftwerks:**
T_warm = 550 °C = 823 K, T_kalt = 30 °C = 303 K:
η_Carnot = 1 − 303/823 = 1 − 0,368 = **63,2 %**. Reales Kraftwerk: η ≈ 40 %.

**Beispiel 2 — Wärmekraftmaschine: Arbeit und Abwärme:**
Q_warm = 1200 J, W = 400 J → Q_kalt = 1200 − 400 = 800 J.
η = W/Q_warm = 400/1200 = **33,3 %**. Carnot bei 600 K / 300 K: η = 50 % → Maschine schöpft 66,6 % des Maximums aus.

**Beispiel 3 — Entropieänderung beim Eisschmelzen:**
1 kg Eis bei 273 K: Q = m · L_f = 1 × 334 000 = 334 000 J.
ΔS = Q/T = 334 000 / 273 = **1224 J/K** — große Entropiezunahme, weil die geordnete Kristallstruktur in ungeordnete Flüssigkeit übergeht.

**Beispiel 4 — Gibbs-Energie der ATP-Hydrolyse:**
ΔG° = −30,5 kJ/mol. Negatives ΔG → spontan. In der Zelle ist ΔG sogar noch negativer (~−54 kJ/mol), weil die ATP-Konzentration hoch und die ADP-Konzentration niedrig ist. Diese große negative ΔG treibt gekoppelte endergonische Reaktionen an.

---

## Klinische Vertiefung

**Maligne Hyperthermie:** Volatile Anästhetika (Halothan) und Succinylcholin können eine unkontrollierte Ca²⁺-Freisetzung im Muskel auslösen → maximaler Metabolismus → Körpertemperatur steigt auf >40 °C in Minuten. Thermodynamisch: Die metabolische Wärmeproduktion übersteigt die Abgabekapazität (Strahlung + Konvektion + Verdunstung) massiv. Therapie: Dantrolen (blockiert Ryanodinrezeptor) + aggressive Kühlung.

**Therapeutische Hypothermie:** Bei Herzoperationen wird die Körpertemperatur auf 28–32 °C gesenkt. Van-'t-Hoff-Regel: Pro 1 °C Temperaturabfall sinkt der Grundumsatz um ~13 % (Q₁₀ ≈ 2–3). Bei 28 °C ist der O₂-Verbrauch um ~50 % reduziert — das schützt das Gehirn bei Kreislaufstillstand.

**Kryochirurgie:** Kontrolliertes Einfrieren von Gewebe (−20 bis −196 °C mit flüssigem N₂). Der Phasenübergang Wasser → Eis zerstört Zellen durch Eiskristallbildung und osmotischen Stress. Dem Gewebe wird die Schmelzwärme entzogen (Q = m · L_f); die Temperatur bleibt während des Phasenübergangs konstant bei 0 °C.`,

      diagram: "thermodynamics",
      lernziele: [
        "Die vier thermodynamischen Hauptsätze mit Formeln und Formulierungen wiedergeben",
        "ΔU = Q + W auf konkrete Zustandsänderungen (isochor, isobar, isotherm, adiabatisch) anwenden",
        "Den Carnot-Wirkungsgrad berechnen und interpretieren",
        "Entropie als Anzahl der Mikrozustände erklären und die drei Formulierungen des 2. Hauptsatzes unterscheiden",
        "ΔG = ΔH − TΔS anwenden und die Spontaneität von Reaktionen beurteilen",
        "Erklären, warum Lebewesen den zweiten Hauptsatz nicht verletzen",
      ],

      sections: [
        {
          heading: "Erster Hauptsatz: Energieerhaltung",
          text: "ΔU = Q + W — die innere Energie eines Systems ändert sich nur durch Wärme (Q) und Arbeit (W). Isochor (V=const): W=0 → ΔU=Q. Isotherm (T=const, ideales Gas): ΔU=0 → Q=−W. Adiabatisch (Q=0): ΔU=W — Kompression erhöht T. Isobar (p=const): ΔU=Q−p·ΔV. Vorzeichenkonvention beachten: Bei ΔU=Q+W ist W positiv bei Kompression (Arbeit am System).",
          merksatz:
            "ΔU = Q + W — Energieerhaltung der Thermodynamik. Energie wird nie erzeugt oder vernichtet, nur umgewandelt.",
        },
        {
          heading: "Zweiter Hauptsatz: Entropie und Carnot",
          text: "Drei äquivalente Formulierungen: (1) Clausius: Wärme fließt spontan nur von warm nach kalt. (2) Kelvin-Planck: Keine Maschine wandelt Wärme vollständig in Arbeit um. (3) ΔS_gesamt ≥ 0. Entropie misst die Anzahl der Mikrozustände (S = k_B · ln W) — nicht 'Unordnung'. Carnot-Wirkungsgrad η = 1 − T_kalt/T_warm (T in Kelvin!) ist die theoretische Obergrenze jeder Wärmekraftmaschine.",
          merksatz:
            "Entropie misst Mikrozustände, nicht Chaos. η_Carnot = 1 − T_kalt/T_warm — T immer in Kelvin, kein realer Prozess übertrifft diesen Wert.",
        },
        {
          heading: "Gibbs-Energie und Biologie",
          text: "ΔG = ΔH − TΔS bestimmt die Spontaneität bei konstantem p und T: ΔG < 0 = spontan. Lebewesen sind offene Systeme — sie exportieren Entropie (Wärme, CO₂) an die Umgebung. ATP-Hydrolyse (ΔG° = −30,5 kJ/mol) treibt endergonische Reaktionen an, indem sie ΔG der Gesamtreaktion negativ macht. ATP-Synthese: η ≈ 34 %, ~66 % werden als Körperwärme freigesetzt.",
          merksatz:
            "ΔG = ΔH − TΔS — spontan wenn ΔG < 0. Lebewesen verletzen den 2. Hauptsatz nicht: offene Systeme, die Entropie exportieren.",
        },
      ],

      merksätze: [
        "0. Hauptsatz: Thermisches Gleichgewicht definiert Temperatur — Grundlage der Temperaturmessung.",
        "1. Hauptsatz: ΔU = Q + W — Energieerhaltung, kein Perpetuum mobile erster Art.",
        "2. Hauptsatz: ΔS_gesamt ≥ 0. Drei äquivalente Formulierungen: Clausius, Kelvin-Planck, Entropie.",
        "Entropie = Anzahl der Mikrozustände (S = k_B · ln W), nicht einfach 'Unordnung'.",
        "3. Hauptsatz: Bei T = 0 K ist S = 0 (perfekter Kristall) — 0 K nicht erreichbar.",
        "Carnot: η = 1 − T_kalt/T_warm — T in Kelvin, theoretisches Maximum.",
        "ΔG = ΔH − TΔS — spontan wenn ΔG < 0. Endotherme Reaktion mit ΔS > 0: spontan ab T > ΔH/ΔS.",
        "ATP-Wirkungsgrad ≈ 34 % — restliche ~66 % werden als Körperwärme abgegeben.",
        "Lebewesen sind offene Systeme, die lokal Entropie senken, aber global die Gesamtentropie erhöhen.",
        "Adiabatische Kompression: Q=0 → ΔU=W → Temperatur steigt (Fahrradpumpe, Dieselmotor).",
      ],

      altfrage: {
        question:
          "Erläutern Sie den zweiten Hauptsatz der Thermodynamik und diskutieren Sie, ob lebende Systeme diesen scheinbar verletzen.",
        answer:
          "Der zweite Hauptsatz lässt sich auf drei äquivalente Weisen formulieren: (1) Wärme fließt spontan nur von warm nach kalt (Clausius). (2) Keine zyklisch arbeitende Maschine kann Wärme vollständig in Arbeit umwandeln (Kelvin-Planck). (3) Die Gesamtentropie eines abgeschlossenen Systems nimmt bei irreversiblen Prozessen zu (ΔS_gesamt ≥ 0). Entropie S misst die Anzahl der Mikrozustände: S = k_B · ln(W). Lebewesen scheinen dem zu widersprechen, da sie aus einfachen Molekülen hochstrukturierte Proteine und DNA aufbauen — scheinbar eine Entropieabnahme. Dies ist kein Widerspruch, weil Lebewesen offene Systeme sind: Sie nehmen niedrigentropische Nahrung auf und geben hochentropische Wärme und Abfallprodukte ab. Die Entropie der Umgebung steigt stärker als die Entropie im Organismus sinkt → die Gesamtentropie nimmt zu. ATP-Hydrolyse (ΔG° = −30,5 kJ/mol) koppelt endergonische Reaktionen an exergonische und macht so nicht-spontane Prozesse thermodynamisch möglich.",
      },

      klinischerBezug:
        "ATP-Synthese (~34 % Wirkungsgrad), Körperwärme als metabolisches Nebenprodukt, maligne Hyperthermie (unkontrollierte Wärmeproduktion), therapeutische Hypothermie (O₂-Verbrauchssenkung bei Herzchirurgie), Gibbs-Energie als Kriterium für biochemische Spontaneität.",

      selfTest: [
        {
          question:
            "Ein ideales Gas wird isochor von 20 °C auf 80 °C erhitzt. Welche Aussage ist korrekt?",
          options: [
            "Die gesamte zugeführte Wärme geht in die Erhöhung der inneren Energie.",
            "Das Gas verrichtet Arbeit an der Umgebung.",
            "Die innere Energie bleibt konstant.",
            "Das Gas kühlt sich ab.",
            "Es findet kein Wärmeaustausch statt.",
          ],
          correctIndex: 0,
          explanation:
            "Isochor: V = const → ΔV = 0 → Volumenarbeit W = 0. Nach dem ersten Hauptsatz: ΔU = Q + 0 = Q. Die gesamte zugeführte Wärme erhöht die innere Energie, was sich als Temperaturanstieg zeigt.",
          hints: [
            "Isochor: V = const → W = p·ΔV = 0.",
            "1. Hauptsatz: ΔU = Q + W. Wenn W = 0, dann ΔU = Q.",
          ],
          tags: ["thermodynamik", "isochor", "erster-hauptsatz"],
          difficulty: 1,
        },
        {
          question:
            "Eine Wärmekraftmaschine arbeitet zwischen T_warm = 500 K und T_kalt = 250 K. Welchen maximalen Wirkungsgrad kann sie theoretisch erreichen?",
          options: ["25 %", "75 %", "50 %", "100 %", "38 %"],
          correctIndex: 2,
          explanation:
            "Carnot-Wirkungsgrad: η = 1 − T_kalt/T_warm = 1 − 250/500 = 0,5 = 50 %. Reale Maschinen erreichen weniger wegen Reibung und Irreversibilitäten. 100 % würde den zweiten Hauptsatz verletzen.",
          hints: [
            "Carnot: η = 1 − T_kalt/T_warm. T in Kelvin.",
            "Beide Temperaturen sind schon in Kelvin: η = 1 − 250/500.",
          ],
          tags: ["carnot", "wirkungsgrad", "wärmekraftmaschine"],
          difficulty: 1,
        },
        {
          question: "Welche der folgenden Aussagen über Entropie ist FALSCH?",
          options: [
            "Entropie misst die Anzahl möglicher Mikrozustände eines Systems.",
            "Beim Schmelzen von Eis nimmt die Entropie zu.",
            "In einem abgeschlossenen System kann die Gesamtentropie abnehmen, wenn ein Teil des Systems Ordnung aufbaut.",
            "Die Boltzmann-Relation lautet S = k_B · ln(W).",
            "Am absoluten Nullpunkt hat ein perfekter Kristall die Entropie null.",
          ],
          correctIndex: 2,
          explanation:
            "In einem abgeschlossenen System kann die Gesamtentropie nie abnehmen (ΔS_gesamt ≥ 0, zweiter Hauptsatz). Ein Teil kann lokal Entropie verringern, aber nur wenn ein anderer Teil mindestens ebenso viel Entropie gewinnt. Die Gesamtbilanz ist immer positiv oder null.",
          hints: [
            "Was sagt der zweite Hauptsatz über abgeschlossene Systeme?",
            "Lokal kann Entropie sinken — aber was gilt für die Gesamtentropie?",
          ],
          tags: ["entropie", "zweiter-hauptsatz", "mikrozustände"],
          difficulty: 2,
        },
        {
          question:
            "Eine Reaktion hat ΔH = +40 kJ/mol und ΔS = +120 J/(mol·K). Ab welcher Temperatur wird sie spontan?",
          options: [
            "Bei jeder Temperatur spontan",
            "Nie spontan",
            "Ab ca. 333 K (60 °C)",
            "Ab ca. 480 K (207 °C)",
            "Ab ca. 40 K (−233 °C)",
          ],
          correctIndex: 2,
          explanation:
            "ΔG = ΔH − TΔS. Spontan wenn ΔG < 0, also ΔH < TΔS → T > ΔH/ΔS = 40 000 J / 120 J/K = 333 K (≈ 60 °C). Unterhalb dieser Temperatur ist ΔG > 0 (nicht spontan), darüber ΔG < 0 (spontan). Achtung: ΔH in J umrechnen (40 kJ = 40 000 J)!",
          hints: [
            "ΔG = ΔH − TΔS. Spontan wenn ΔG < 0.",
            "Grenztemperatur: ΔG = 0 → T = ΔH/ΔS. Einheiten beachten!",
          ],
          tags: ["gibbs-energie", "spontaneität", "thermodynamik"],
          difficulty: 3,
        },
        {
          question:
            "Warum verletzen lebende Organismen den zweiten Hauptsatz der Thermodynamik NICHT?",
          options: [
            "Weil biologische Reaktionen reversibel ablaufen.",
            "Weil Lebewesen offene Systeme sind, die Entropie an die Umgebung exportieren.",
            "Weil ATP die Entropie im gesamten Universum verringert.",
            "Weil der zweite Hauptsatz nur für Gase gilt, nicht für Flüssigkeiten.",
            "Weil Enzyme die Entropieänderung einer Reaktion umkehren können.",
          ],
          correctIndex: 1,
          explanation:
            "Der zweite Hauptsatz gilt für abgeschlossene Systeme. Lebewesen sind offene Systeme: Sie nehmen niedrigentropische Nahrung auf und geben hochentropische Wärme und Abfallprodukte ab. Die Gesamtentropie (Organismus + Umgebung) steigt — der zweite Hauptsatz bleibt gewahrt.",
          hints: [
            "Welcher Systemtyp ist ein Lebewesen — offen, geschlossen oder abgeschlossen?",
            "Was passiert mit der Entropie der Umgebung, wenn ein Organismus Ordnung aufbaut?",
          ],
          tags: ["entropie", "biologie", "zweiter-hauptsatz"],
          difficulty: 2,
        },
        {
          question:
            "Eine Wärmekraftmaschine nimmt Q_warm = 800 J auf und gibt Q_kalt = 500 J ab. Welchen Wirkungsgrad hat sie?",
          options: ["62,5 %", "37,5 %", "50 %", "25 %", "100 %"],
          correctIndex: 1,
          explanation:
            "Nutzarbeit: W = Q_warm − Q_kalt = 800 − 500 = 300 J. Wirkungsgrad: η = W/Q_warm = 300/800 = 0,375 = 37,5 %. Alternativ: η = 1 − Q_kalt/Q_warm = 1 − 500/800 = 37,5 %.",
          hints: ["W = Q_warm − Q_kalt. η = W/Q_warm.", "300/800 = ?"],
          tags: ["wärmekraftmaschine", "wirkungsgrad", "thermodynamik"],
          difficulty: 2,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────
    // UK ph-4-04: Phasenübergänge und Ideales Gas
    // ─────────────────────────────────────────────────────────────────
    {
      id: "ph-4-04",
      title: "Phasenübergänge und Ideales Gas",
      stichworte: [
        "Ideales Gasgesetz",
        "Phasendiagramm",
        "Tripelpunkt",
        "Kritischer Punkt",
        "Latentwärme",
        "Schmelzwärme",
        "Verdampfungswärme",
        "Dampfdruck",
        "Siedepunkt",
        "Henry-Gesetz",
        "Boyle-Mariotte",
        "Autoklav",
      ],
      content: `Warum kocht Wasser auf dem Mount Everest schon bei 70 °C, im Autoklav aber erst bei 121 °C? Warum perlt Stickstoff im Blut eines Tauchers wie CO₂ in einer Sprudelflasche? Die Antwort steckt in zwei Konzepten: dem **idealen Gasgesetz** und den **Phasenübergängen**. Beide sind MedAT-Dauerbrenner — und beide lassen sich mit wenigen Formeln vollständig beherrschen.

---

## Ideales Gasgesetz

Das Modell des **idealen Gases** beschreibt Gasteilchen als punktförmig, ohne gegenseitige Anziehung und mit vernachlässigbarem Eigenvolumen. Trotz dieser Vereinfachung liefert es für Lungenphysiologie und Blutgasanalysen exzellente Ergebnisse, solange Druck nicht extrem hoch und Temperatur nicht extrem niedrig ist.

Die zentrale Gleichung verknüpft alle Zustandsgrößen:

**p · V = n · R · T**

| Größe | Bedeutung | Einheit |
|-------|-----------|---------|
| p | Druck | Pa |
| V | Volumen | m³ |
| n | Stoffmenge | mol |
| R | Universelle Gaskonstante | 8,314 J/(mol·K) |
| T | Absolute Temperatur | K (nie °C!) |

Die physikalische Intuition: Mehr Teilchen oder schnellere Teilchen (= höheres T) erzeugen mehr Wandstöße und damit höheren Druck.

> **Merke:** T muss in der Zustandsgleichung **immer in Kelvin** stehen. Umrechnung: T [K] = T [°C] + 273,15. Bei 20 °C einzusetzen als 293 K, nicht als 20!

---

## Spezialfälle des Gasgesetzes

Hält man jeweils eine Zustandsgröße konstant, ergeben sich die klassischen Gasgesetze:

| Gesetz | Konstant | Beziehung | Klinisches Beispiel |
|--------|----------|-----------|---------------------|
| **Boyle-Mariotte** | T (isotherm) | p₁·V₁ = p₂·V₂ | Lungenkompression beim Tauchen |
| **Gay-Lussac** | p (isobar) | V₁/T₁ = V₂/T₂ | Atemluft erwärmt sich in der Lunge |
| **Charles** | V (isochor) | p₁/T₁ = p₂/T₂ | Druck in starrem Gascontainer |

Unter **Normbedingungen** (p₀ = 101 325 Pa, T₀ = 273,15 K) nimmt 1 mol ideales Gas exakt **22,4 Liter** ein — das **Molvolumen**, eine zentrale Bezugsgröße in Chemie und Physiologie.

{{DIAGRAM:ideal-gas-laws}}

> **Merke:** Boyle-Mariotte (p·V = const bei T = const) ist das am häufigsten geprüfte Gasgesetz im MedAT. Doppelter Druck = halbes Volumen — direkt anwendbar auf Tauchen, Spritzen und Beatmung.

---

## Phasendiagramm

Jeder Stoff kann je nach Druck und Temperatur fest, flüssig oder gasförmig vorliegen. Das **Phasendiagramm** (Druck auf der y-Achse, Temperatur auf der x-Achse) zeigt alle drei Phasen, getrennt durch **Phasengrenzkurven**, entlang derer jeweils zwei Phasen im Gleichgewicht koexistieren.

{{DIAGRAM:phase-diagram-water}}

Drei Kurven, drei besondere Punkte:

| Kurve / Punkt | Beschreibung | Wasser-Werte |
|---------------|-------------|--------------|
| **Schmelzkurve** | Trennt fest ↔ flüssig; verläuft meist nahezu senkrecht | Negative Steigung bei Wasser! |
| **Dampfdruckkurve** | Trennt flüssig ↔ gasförmig; endet am kritischen Punkt | Bis 647 K / 221 bar |
| **Sublimationskurve** | Trennt fest ↔ gasförmig (direkter Übergang) | Unterhalb des Tripelpunkts |
| **Tripelpunkt** | Alle drei Phasen koexistieren gleichzeitig | 273,16 K / 611,7 Pa |
| **Kritischer Punkt** | Oberhalb verschwindet die Grenze flüssig/gasförmig | 647 K / 221 bar |

**Anomalie des Wassers:** Die Schmelzkurve hat eine **negative Steigung** — Druckerhöhung senkt den Schmelzpunkt. Ursache: Eis (917 kg/m³) ist weniger dicht als flüssiges Wasser (1000 kg/m³). Nach Le Chatelier verschiebt Druck das Gleichgewicht zur dichteren Phase (flüssig). Deshalb können Gletscher an ihrer Unterseite unter dem eigenen Gewicht fließen.

> **Merke:** Am Tripelpunkt koexistieren alle drei Phasen im Gleichgewicht. Für Wasser: T = 273,16 K bei nur 611,7 Pa. Der kritische Punkt von Wasser liegt bei 647 K / 221 bar — darüber gibt es keinen Unterschied zwischen Flüssigkeit und Gas.

---

## Latentwärmen (Phasenübergangswärme)

Bei Phasenübergängen bleibt die Temperatur konstant, obwohl Wärme zugeführt wird — die Energie geht vollständig in das Aufbrechen (oder Bilden) intermolekularer Bindungen. Diese „verborgene" Energie heißt **latente Wärme** (lat. *latere* = verborgen):

**Q = m · L**

| Phasenübergang | Temperatur | L [kJ/kg] | Was passiert? |
|----------------|-----------|-----------|---------------|
| Schmelzen (Eis → Wasser) | 0 °C | 334 | Kristallgitter wird gelockert |
| Verdampfen (Wasser → Dampf) | 100 °C | 2 260 | Alle H-Brücken werden aufgebrochen |
| Verdunsten bei Körpertemperatur | 37 °C | 2 430 | Schweiß kühlt die Haut |

Die Verdampfungswärme ist fast **siebenmal größer** als die Schmelzwärme — beim Verdampfen müssen sämtliche intermolekularen Kräfte überwunden werden, beim Schmelzen wird nur die Gitterordnung aufgelöst.

> **Merke:** Latentwärme Q = m · L — Temperatur bleibt während des gesamten Phasenübergangs konstant (Plateau in der Heizkurve). Bei Kombinationsaufgaben: erst Q_Schmelz = m · L_f, dann Q_Erwärm = m · c · ΔT, dann addieren!

---

## Dampfdruck und Siedepunkt

Über jeder Flüssigkeit herrscht ein Gleichgewicht zwischen verdampfenden und kondensierenden Molekülen. Der dabei entstehende **Dampfdruck** p_D(T) steigt exponentiell mit der Temperatur. Die **Clausius-Clapeyron-Gleichung** beschreibt diesen Zusammenhang:

**ln(p₂/p₁) = −ΔH_vap/R · (1/T₂ − 1/T₁)**

(ΔH_vap = molare Verdampfungsenthalpie; Wasser: 40,7 kJ/mol)

Eine Flüssigkeit beginnt zu **sieden**, sobald ihr Dampfdruck den Umgebungsdruck erreicht (p_D = p_außen). Das erklärt drei prüfungsrelevante Situationen:

| Situation | Druck | Siedepunkt | Konsequenz |
|-----------|-------|------------|------------|
| Hochgebirge (3000 m) | ~0,7 bar | ~90 °C | Eier brauchen länger zum Kochen |
| Meereshöhe | 1,013 bar | 100 °C | Normaler Siedepunkt |
| **Autoklav** | 2 bar | **121 °C** | Sporenabtötung in 15 min |
| Autoklav (Prionen) | 3 bar | 134 °C | CJK-Sterilisation in 18 min |

> **Merke:** Siedepunkt = Temperatur, bei der Dampfdruck = Außendruck. Höherer Außendruck = höherer Siedepunkt. Der Autoklav nutzt genau dieses Prinzip: 2 bar Dampfdruck → 121 °C → Sterilisation.

---

## Henry-Gesetz und Gaslöslichkeit

Das **Henry-Gesetz** beschreibt, wie viel Gas sich in einer Flüssigkeit löst:

**c = k_H · p**

Die Konzentration c des gelösten Gases ist direkt proportional zu seinem **Partialdruck** p über der Flüssigkeit. Doppelter Druck = doppelte Löslichkeit — ein linearer Zusammenhang mit enormer klinischer Bedeutung.

**Taucherkrankheit (Dekompressionskrankheit):** In 30 m Tiefe herrscht ~4 bar Gesamtdruck. Der N₂-Partialdruck (79 % der Atemluft) vervierfacht sich, und nach Henry löst sich die vierfache Menge N₂ im Blut. Bei zu schnellem Auftauchen fällt der Druck rasch — der überschüssige Stickstoff perlt als Gasblasen aus (wie eine geöffnete Sprudelflasche). Folgen: Gelenkschmerzen (Bends), Embolien, neurologische Ausfälle. Therapie: Rekompression in der Überdruckkammer, dann langsames Dekomprimieren.

**Hyperbare O₂-Therapie:** 100 % O₂ bei 3 bar löst physikalisch ~6 mL O₂ pro 100 mL Plasma (normal: 0,3 mL) — genug zur Gewebeversorgung auch ohne Hämoglobin. Indikationen: CO-Vergiftung, chronische Wunden, Gasgangrän.

> **Merke:** Henry-Gesetz: c = k_H · p. Klinisch zentral für Tauchen (N₂-Löslichkeit), Blutgasanalyse (pO₂, pCO₂) und hyperbare Therapie. Bei Rechenaufgaben den N₂-Anteil der Luft (79 %) nicht vergessen!

---

## Verdunstungskühlung

**Schweiß** ist der effektivste Kühlmechanismus des Körpers. Der Phasenübergang flüssig → gasförmig entzieht der Haut die gesamte Verdampfungswärme (L_v = 2430 kJ/kg bei 37 °C), ohne dass die Dampftemperatur steigt.

**Rechenbeispiel:** 1 L Schweiß/h → Kühlleistung = 1 kg × 2 430 000 J/kg / 3600 s ≈ **675 W** — mehr als das Zehnfache des Ruhemetabolismus (~70 W).

Bei hoher Luftfeuchtigkeit (>80 %) ist die Luft wasserdampfgesättigt → Verdunstung blockiert → Hitzestau-Gefahr bis zum Hitzschlag.

**Infusionswärmung:** Kalte Infusionslösungen (20 °C) entziehen dem Körper Wärme: Q = m · c · ΔT = 1 kg · 4000 J/(kg·K) · 17 K = 68 kJ pro Liter. Bei massiver Transfusion (>10 L) droht Hypothermie → Bluterwärmer auf 37 °C ist vorgeschrieben.

> **Merke:** Schwitzen kühlt durch den Phasenübergang flüssig → gasförmig. Pro Liter verdunstetem Schweiß: ~2430 kJ Wärmeabfuhr. Hohe Luftfeuchtigkeit blockiert die Verdunstung → Hitzschlag-Gefahr.

---

## Rechenbeispiele

**Beispiel 1 — Boyle-Mariotte:** Spritze mit V₁ = 50 mL bei p₁ = 1 bar, isotherme Kompression auf V₂ = 10 mL. p₂ = p₁ · V₁/V₂ = 1 · 50/10 = **5 bar**.

**Beispiel 2 — Eis schmelzen + erwärmen:** 500 g Eis (0 °C) → Wasser (37 °C).
- Schmelzen: Q₁ = 0,5 kg · 334 000 J/kg = 167 000 J
- Erwärmen: Q₂ = 0,5 kg · 4180 J/(kg·K) · 37 K = 77 330 J
- Gesamt: Q = 167 000 + 77 330 = **244 kJ** (Schmelzen allein > doppelt so viel wie Erwärmen!)

**Beispiel 3 — Henry-Gesetz:** Oberfläche (1 bar): c₁ = k_H · 0,79 bar. In 30 m Tiefe (4 bar): c₂ = k_H · 0,79 · 4 = **4 × c₁**. Aufstieg: ≤ 9 m/min + Sicherheitsstopp auf 5 m (3 min).

**Beispiel 4 — Gay-Lussac in der Lunge:** V₁ = 500 mL, T₁ = 293 K (20 °C), T₂ = 310 K (37 °C). V₂ = 500 · 310/293 = **529 mL** (~6 % Expansion → BTPS-Korrektur bei Spirometrie).

---

## Klinische Vertiefung

**Sublimation in der Medizin (Gefriertrocknung/Lyophilisation):** Impfstoffe und Blutplasma werden eingefroren, dann wird der Druck unter den Tripelpunkt gesenkt. Das Eis sublimiert direkt zu Dampf — die Proteinstruktur bleibt erhalten, das Produkt ist bei Raumtemperatur lagerbar und wird durch Zugabe von sterilem Wasser rekonstituiert.

**Pulsoxymetrie:** Die O₂-Sättigung des Hämoglobins hängt vom pO₂ ab. Zusätzlich bestimmt das Henry-Gesetz die physikalisch gelöste O₂-Menge: ~0,3 mL O₂/100 mL Blut bei pO₂ = 100 mmHg. Bei hyperbarer Therapie (3 bar) steigt dieser Anteil auf ~6 mL/100 mL.

---

## Prüfungsrelevante Zahlen und Fakten

| Größe | Wert |
|-------|------|
| Gaskonstante R | 8,314 J/(mol·K) |
| Molvolumen (Normbedingungen) | 22,4 L/mol |
| Schmelzwärme Wasser (L_f) | 334 kJ/kg |
| Verdampfungswärme Wasser 100 °C (L_v) | 2 260 kJ/kg |
| Verdampfungswärme Schweiß 37 °C | 2 430 kJ/kg |
| Tripelpunkt Wasser | 273,16 K / 611,7 Pa |
| Kritischer Punkt Wasser | 647 K / 221 bar |
| Autoklav Standard | 121 °C / 2 bar / 15 min |
| Autoklav Prionen | 134 °C / 3 bar / 18 min |
| N₂-Anteil Atemluft | 79 % |
| Henry: Gelöster O₂ bei pO₂ = 100 mmHg | 0,3 mL/100 mL Blut |`,

      lernziele: [
        "Die allgemeine Zustandsgleichung des idealen Gases pV = nRT anwenden und Sonderfälle ableiten",
        "Phasendiagramme lesen und Tripelpunkt, kritischen Punkt sowie Phasengrenzkurven erklären",
        "Latentwärme berechnen und den Unterschied zur sensiblen Wärme erklären",
        "Die Druckabhängigkeit des Siedepunkts auf Autoklav und Hochgebirge anwenden",
        "Das Henry-Gesetz auf Taucherkrankheit und O₂-Transport im Blut anwenden",
      ],

      sections: [
        {
          heading: "Latentwärmen von Wasser",
          text: "Bei Phasenübergängen ändert sich die Temperatur nicht, obwohl Wärme zu- oder abgeführt wird. Die spezifische Latentwärme L gibt die Energiemenge pro Kilogramm an (Q = m · L). Die Verdampfungswärme ist deutlich größer als die Schmelzwärme.",
          table: {
            headers: ["Übergang", "Temperatur", "L [J/kg]"],
            rows: [
              ["Schmelzen (Eis → Wasser)", "0 °C", "334 000"],
              ["Verdampfen (Wasser → Dampf)", "100 °C", "2 260 000"],
              ["Verdunsten bei 37 °C", "37 °C", "2 430 000"],
            ],
          },
          merksatz: "Latentwärme: Q = m · L (keine Temperaturänderung beim Phasenübergang).",
        },
        {
          heading: "Ideales Gasgesetz und Spezialfälle",
          text: "pV = nRT verknüpft alle vier Zustandsgrößen des idealen Gases. Bei zwei konstanten Größen ergeben sich die klassischen Gasgesetze: Boyle-Mariotte (T = const: p₁V₁ = p₂V₂), Gay-Lussac (p = const: V₁/T₁ = V₂/T₂) und Charles (V = const: p₁/T₁ = p₂/T₂). Das Molvolumen bei Normzustand beträgt 22,4 L/mol. MedAT-Aufgaben kombinieren häufig zwei der Größen und fragen die dritte. Wichtig: T immer in Kelvin einsetzen!",
          merksatz:
            "pV = nRT — T immer in Kelvin. Normvolumen: 1 mol ideales Gas nimmt bei 0 °C, 1 atm genau 22,4 L ein.",
        },
        {
          heading: "Phasenübergänge und latente Wärme",
          text: "Bei Phasenübergängen bleibt die Temperatur konstant (Plateau in der Heizungskurve), obwohl Wärme zugeführt wird. Diese Latentwärme bricht oder bildet intermolekulare Bindungen. Schmelzwärme von Wasser: L_f = 334 kJ/kg; Verdampfungswärme bei 100 °C: L_v = 2260 kJ/kg. Die Verdampfungswärme ist fast siebenmal größer, da beim Verdampfen alle intermolekularen Kräfte überwunden werden müssen. Klinisch: Schweiß kühlt durch Verdunstung (≈ 2430 J/g bei 37 °C), Kompresse mit kaltem Wasser kühlt durch Verdunstung und Wärmeleitung.",
          merksatz:
            "Schmelzwärme Wasser: 334 kJ/kg. Verdampfungswärme: 2260 kJ/kg (≈ 7-fach größer) — Schwitzen ist sehr effektiv.",
        },
        {
          heading: "Dampfdruck, Siedepunkt und klinische Anwendungen",
          text: "Sieden beginnt, wenn der Dampfdruck p_D(T) den Außendruck p_A erreicht. Im Autoklav wird p_A auf 2 bar erhöht → Siedepunkt steigt auf 121 °C → ausreichend für Sporenabtötung (Sterilisation). Im Hochgebirge (p_A < 1 bar) siedet Wasser unter 100 °C → Nahrungszubereitung dauert länger (Temperatur zu niedrig). Das Henry-Gesetz (c = k_H · p) regelt die Gaslöslichkeit: Bei erhöhtem Druck löst sich mehr Gas im Blut (Taucher); bei plötzlichem Druckabfall entweicht das Gas als Blasen (Dekompressionskrankheit).",
          merksatz:
            "Autoklav: 121 °C/2 bar sterilisiert Spororen — möglich durch Druckerhöhung des Siedepunkts. Taucher: schnelles Auftauchen → N₂-Blasen → Dekompressionskrankheit.",
        },
      ],

      merksätze: [
        "pV = nRT — T immer in Kelvin! R = 8,314 J/(mol·K). Molvolumen: 22,4 L bei 0 °C / 1 atm.",
        "Boyle-Mariotte (T = const): p·V = const. Doppelter Druck = halbes Volumen.",
        "Latentwärme Q = m · L: Temperatur bleibt beim Phasenübergang konstant. L_v ≈ 7 × L_f bei Wasser.",
        "Siedepunkt = Temperatur bei Dampfdruck = Außendruck. Autoklav: 2 bar → 121 °C → Sporenabtötung.",
        "Henry-Gesetz: c = k_H · p. Doppelter Druck = doppelte Gaslöslichkeit. Basis für Taucher- und O₂-Therapie.",
        "Tripelpunkt Wasser: 273,16 K / 611,7 Pa — alle drei Phasen koexistieren im Gleichgewicht.",
        "Verdunstungskühlung: ~2430 kJ/kg bei 37 °C — effektivster Kühlmechanismus. Hohe Luftfeuchtigkeit blockiert Verdunstung.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie das Henry-Gesetz und erklären Sie seine Bedeutung für die Entstehung und Behandlung der Taucherkrankheit (Dekompressionskrankheit).",
        answer:
          "Das Henry-Gesetz beschreibt die Löslichkeit von Gasen in Flüssigkeiten: c = k_H · p, wobei c die Konzentration des gelösten Gases, k_H die Henry-Konstante (stoff- und temperaturabhängig) und p der Partialdruck des Gases über der Flüssigkeit ist. Je höher der Gasdruck, desto mehr Gas löst sich in der Flüssigkeit. Beim Tauchen in größere Tiefen steigt der Umgebungsdruck proportional zur Wassertiefe (p ≈ p_0 + ρ·g·h; pro 10 m Tiefe ≈ +1 atm). Durch das Henry-Gesetz löst sich daher mehr Stickstoff (N₂) aus der Atemluft im Blut und in den Geweben. Steigt der Taucher nun zu schnell auf, sinkt der Außendruck rasch ab. Der N₂ kann nicht schnell genug über die Lunge abgeatmet werden und bildet Gasblasen in Blutgefäßen, Gelenken und Geweben — analog zu einer geöffneten Sprudelflasche. Diese Blasen verursachen Schmerzen (Bends), Embolien, neurologische Ausfälle und können tödlich sein. Therapie: Sofortige Rückführung in die Überdruckkammer (Rekompression), damit die Blasen sich wieder auflösen. Anschließend langsames, kontrolliertes Druckabsenken mit Dekompressionsstopps nach standardisierten Tauchtabellen, damit N₂ kontrolliert ausatembar ist. Prophylaxe: Tauchen mit Helium-Sauerstoff-Gemisch (Heliox) statt Stickstoff, da He weniger im Gewebe löslich ist und schneller ausatembar ist.",
      },

      klinischerBezug:
        "Autoklav-Sterilisation (121 °C/2 bar), Taucherkrankheit und Dekompression, hyperbare Sauerstofftherapie, Verdunstungskühlung beim Schwitzen, Blutgase und Partialdrucke (pO₂, pCO₂).",

      selfTest: [
        {
          question:
            "Ein ideales Gas bei 27 °C und 2 bar wird isochor auf 127 °C erhitzt. Welcher Druck stellt sich ein?",
          options: ["2,67 bar", "3 bar", "4 bar", "1,5 bar", "2 bar"],
          correctIndex: 0,
          explanation:
            "Isochor (V = const): p₁/T₁ = p₂/T₂. T₁ = 27 + 273 = 300 K, T₂ = 127 + 273 = 400 K. p₂ = 2 · 400/300 = 2,67 bar. Häufigster Fehler: Temperaturen in °C statt Kelvin einsetzen!",
          hints: [
            "Isochor: V = const → p/T = const → p₁/T₁ = p₂/T₂.",
            "Erst in Kelvin umrechnen: 27 °C = 300 K, 127 °C = 400 K.",
          ],
          tags: ["ideales-gas", "isochor", "zustandsänderung"],
          difficulty: 2,
        },
        {
          question:
            "Wie viel Energie ist nötig, um 200 g Eis (0 °C) vollständig zu Wasser (0 °C) zu schmelzen? (L_f = 334 kJ/kg)",
          options: ["334 J", "334 000 J", "66 800 J", "1670 J", "33 400 J"],
          correctIndex: 2,
          explanation:
            "Q = m · L_f = 0,2 kg · 334 000 J/kg = 66 800 J. Während des Schmelzens bleibt T = 0 °C konstant — die gesamte Energie bricht die Wasserstoffbrücken im Eiskristall auf. Erst wenn alles Eis geschmolzen ist, steigt die Temperatur.",
          hints: ["Latentwärme: Q = m · L_f. Masse in kg: 200 g = 0,2 kg.", "0,2 · 334 000 = ?"],
          tags: ["schmelzwärme", "phasenübergang", "eis"],
          difficulty: 1,
        },
        {
          question: "Welche Aussage zum Phasendiagramm von Wasser ist FALSCH?",
          options: [
            "Am Tripelpunkt koexistieren feste, flüssige und gasförmige Phase",
            "Oberhalb des kritischen Punktes existiert kein Unterschied zwischen Flüssigkeit und Gas",
            "Die Schmelzkurve von Wasser hat eine positive Steigung wie bei den meisten Stoffen",
            "Die Dampfdruckkurve endet am kritischen Punkt",
            "Der Tripelpunkt von Wasser liegt bei etwa 273,16 K und 611,7 Pa",
          ],
          correctIndex: 2,
          explanation:
            "Die Schmelzkurve von Wasser hat eine NEGATIVE Steigung — eine Anomalie. Eis ist weniger dicht als Wasser (917 vs. 1000 kg/m³), daher senkt Druckerhöhung den Schmelzpunkt (Le Chatelier: Gleichgewicht verschiebt sich zur dichteren Phase). Bei den meisten anderen Stoffen ist die Schmelzkurve tatsächlich positiv.",
          hints: [
            "Was ist die berühmte Anomalie des Wassers im Phasendiagramm?",
            "Eis schwimmt auf Wasser — was sagt das über die Dichte und die Schmelzkurve?",
          ],
          tags: ["phasendiagramm", "wasser-anomalie", "schmelzkurve"],
          difficulty: 2,
        },
        {
          question:
            "Ein Taucher atmet in 30 m Tiefe Druckluft (Gesamtdruck 4 bar). Um welchen Faktor steigt die im Blut gelöste N₂-Menge gegenüber der Oberfläche?",
          options: [
            "Um den Faktor 2",
            "Um den Faktor 3",
            "Um den Faktor 4",
            "Um den Faktor 0,79",
            "Gar nicht — N₂ ist ein Inertgas",
          ],
          correctIndex: 2,
          explanation:
            "Nach dem Henry-Gesetz (c = k_H · p) ist die gelöste Gasmenge proportional zum Partialdruck. Der N₂-Partialdruck an der Oberfläche: 0,79 · 1 bar = 0,79 bar. In 30 m Tiefe: 0,79 · 4 bar = 3,16 bar. Das Verhältnis: 3,16/0,79 = 4. Die gelöste N₂-Menge vervierfacht sich. Bei schnellem Auftauchen perlt dieser Überschuss als Gasblasen aus — Dekompressionskrankheit.",
          hints: [
            "Henry-Gesetz: c = k_H · p. Wie ändert sich p_N₂ von Oberfläche zu 30 m Tiefe?",
            "Gesamtdruck in 30 m = 4 bar. N₂-Anteil bleibt 79 %. Verhältnis zu Oberfläche?",
          ],
          tags: ["henry-gesetz", "tauchen", "dekompression"],
          difficulty: 2,
        },
        {
          question:
            "Warum sterilisiert ein Autoklav bei 121 °C statt bei 100 °C, und wie wird diese Temperatur erreicht?",
          options: [
            "Der Autoklav heizt mit Mikrowellen, die 121 °C erzeugen",
            "100 °C reicht aus; 121 °C ist nur eine Konvention",
            "Bei 121 °C gefriert Wasser und tötet Keime durch Eiskristallbildung",
            "Der Autoklav nutzt Ultraschall, der 121 °C erzeugt",
            "Durch Erhöhung des Dampfdrucks auf 2 bar steigt der Siedepunkt auf 121 °C, was Sporenabtötung ermöglicht",
          ],
          correctIndex: 4,
          explanation:
            "Siedepunkt = Temperatur bei Dampfdruck = Außendruck. Bei 2 bar im Autoklav muss Wasser auf 121 °C erhitzt werden, bis sein Dampfdruck 2 bar erreicht. Diese Temperatur tötet auch hitzeresistente Endosporen (z. B. Clostridium botulinum) sicher ab, die bei 100 °C überleben können.",
          hints: [
            "Siedepunkt hängt vom Außendruck ab: höherer Druck → höherer Siedepunkt.",
            "Warum reicht 100 °C nicht? Bakteriensporen können kochendes Wasser überleben.",
          ],
          tags: ["siedepunkt", "autoklav", "dampfdruck"],
          difficulty: 1,
        },
        {
          question:
            "300 g Eis bei 0 °C sollen zu Wasser bei 50 °C erwärmt werden. Wie viel Gesamtenergie wird benötigt? (L_f = 334 kJ/kg, c_Wasser = 4,18 kJ/(kg·K))",
          options: ["100,2 kJ", "162,9 kJ", "37,6 kJ", "334 kJ", "163 000 kJ"],
          correctIndex: 1,
          explanation:
            "Zwei Schritte: (1) Schmelzen: Q₁ = m · L_f = 0,3 · 334 = 100,2 kJ. (2) Erwärmen: Q₂ = m · c · ΔT = 0,3 · 4,18 · 50 = 62,7 kJ. Gesamt: Q = 100,2 + 62,7 = 162,9 kJ. Der Schmelzvorgang verbraucht deutlich mehr Energie als das Erwärmen um 50 K — typisch für Phasenübergangs-Aufgaben.",
          hints: [
            "Erst schmelzen (Q = m · L_f), dann erwärmen (Q = m · c · ΔT). Beide Energien addieren.",
            "m = 0,3 kg. Schmelzen: 0,3 · 334 kJ. Erwärmen: 0,3 · 4,18 · 50 kJ.",
          ],
          tags: ["latentwärme", "kombinationsaufgabe", "phasenübergang"],
          difficulty: 3,
        },
      ],
    },
  ],
};
