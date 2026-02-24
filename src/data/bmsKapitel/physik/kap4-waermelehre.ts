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
      content: `## Einleitung

Fieber über 40 °C ist lebensgefährlich — aber warum? Hypothermie unter 35 °C ebenfalls. Die Körperkerntemperatur ist ein kritischer Vitalparameter. Dahinter steckt **Temperatur** (Maß für die mittlere kinetische Energie der Teilchen) und **Wärme** (Energieübertragung von heiß nach kalt). Für den MedAT sind Temperaturskalen (Celsius/Kelvin/Fahrenheit), spezifische Wärmekapazität, thermische Ausdehnung und Körpertemperaturregulation prüfungsrelevant.

**In diesem Kapitel lernst du:**
- **Temperaturskalen**: Kelvin T = °C + 273,15 (absoluter Nullpunkt 0 K); Fahrenheit T[°F] = T[°C]·1,8 + 32
- **Wärme** Q = m·c·ΔT; **spezifische Wärmekapazität** c (Wasser ≈ 4180 J/(kg·K))
- **Thermische Ausdehnung** ΔL = α·L₀·ΔT; **Dichteanomalie** des Wassers (Maximum bei 4 °C)
- **Mischungstemperatur** T_m = (m₁·T₁ + m₂·T₂)/(m₁ + m₂) bei gleichem Stoff
- typische Prüfungsfallen (ΔT in K oder °C gleich; Wasser dichtest bei 4 °C) zu vermeiden

**Kontext — worum geht es und wofür brauchst du das?**  
Hier geht es um **Temperatur und Wärmeübertragung**: Wie misst man Temperatur (Skalen), wie viel Energie braucht Erwärmung (Wärmekapazität), und wie dehnen sich Körper aus (α, Dichteanomalie)? Klinisch: Fieber, Hypothermie, Wärmetherapie, Kalorimetrie. Du brauchst es für Wärmeübertragung und Thermodynamik (Hauptsätze) und für MedAT-Aufgaben zu Q, c und ΔT.

---

## Temperaturskalen

![Temperatur Waermekapazitaet](/grafik-thermodynamik.svg)

**Erklärung zur Grafik:** Die Abbildung zeigt die Celsius/Kelvin-Umrechnung, die spezifische Wärmekapazität c (Q = m·c·ΔT) und die lineare Wärmedehnung ΔL = α·L₀·ΔT.

Temperatur ist ein Maß für die mittlere kinetische Energie der Teilchen eines Stoffes. Drei Skalen sind praxisrelevant:

**Celsius (°C)**: Die historische Alltagsskala. Der Nullpunkt liegt beim Gefrierpunkt des Wassers (bei 1 atm), 100 °C beim Siedepunkt. Negative Werte sind möglich.

**Kelvin (K)**: Die SI-Einheit der Thermodynamik. Der Nullpunkt (0 K = −273,15 °C) ist der absolute Nullpunkt – die Temperatur, bei der die thermische Bewegung der Teilchen aufhört. Negative Kelvin-Temperaturen existieren im klassischen Sinn nicht.

Umrechnungsformel: **T [K] = T [°C] + 273,15**

Umgekehrt: T [°C] = T [K] − 273,15

Typische Werte: Zimmertemperatur 293 K (20 °C), Körpertemperatur 310 K (37 °C), Siedepunkt Wasser 373 K (100 °C).

**Fahrenheit (°F)** (angloamerikanisch): T [°F] = T [°C] × 1,8 + 32. Klinisch relevant bei internationalen Normbefunden: 98,6 °F = 37 °C.

## Thermische Ausdehnung

Feste Stoffe dehnen sich bei Erwärmung aus, weil die Schwingungsamplitude der Gitteratome zunimmt. Die **lineare Wärmedehnung** gilt für stabförmige Körper:

**ΔL = α · L₀ · ΔT**

- L₀: Ausgangslänge [m]
- ΔT: Temperaturänderung [K oder °C]
- α: linearer Ausdehnungskoeffizient [1/K] (Stahl ≈ 12 × 10⁻⁶ /K, Glas ≈ 9 × 10⁻⁶ /K, Aluminium ≈ 23 × 10⁻⁶ /K)

Für Flächen gilt entsprechend β ≈ 2α, für Volumina γ ≈ 3α.

> **Merke:** Die Volumenausdehnung ist dreimal so groß wie die lineare Ausdehnung desselben Materials (γ ≈ 3α). Bei Flüssigkeiten wird direkt der Volumenausdehnungskoeffizient γ verwendet.

**Technische Konsequenzen:**
- Brücken und Gleise benötigen **Dehnungsfugen**, um thermische Spannungen zu vermeiden
- Bimetallstreifen (zwei Metalle mit verschiedenem α) biegen sich bei Temperaturänderung — Grundlage von Thermoschaltern und Bimetallthermometern
- Zahnfüllungen müssen einen ähnlichen α wie Zahnschmelz haben, um Rissbildung zu verhindern

Besonderheit Wasser: Die **Dichteanomalie** macht Wasser bei 4 °C am dichtesten. Von 0 °C bis 4 °C schrumpft es beim Erwärmen (negatives α), darüber dehnt es sich normal aus. Die Ursache liegt in den Wasserstoffbrückenbindungen: Unter 4 °C bilden sich zunehmend eisähnliche, hexagonale Strukturen, die ein größeres Volumen einnehmen. Biologisch entscheidend: Seen frieren von oben nach unten, das wärmere 4 °C-Wasser am Grund schützt Aquaorganismen im Winter.

## Wärme und Wärmekapazität

**Wärme Q** ist keine Zustandsgröße, sondern eine Energieübertragungsgröße: Sie fließt beim Temperaturunterschied vom wärmeren zum kälteren Körper (2. Hauptsatz). Einheit: Joule [J].

Die **spezifische Wärmekapazität c** gibt an, wie viel Energie nötig ist, um 1 kg eines Stoffes um 1 K zu erwärmen:

**Q = m · c · ΔT**

Wasser hat die höchste spezifische Wärmekapazität aller gängigen Flüssigkeiten – ein biologisch zentraler Fakt. Der menschliche Körper (≈ 60 % Wasser) kann große Wärmemengen aufnehmen/abgeben ohne starke Temperaturschwankungen.

**Mischungstemperatur**: Werden zwei Wassermengen vermischt, gilt Energieerhaltung:
Q_abgegeben = Q_aufgenommen → m₁ · c · (T₁ − T_m) = m₂ · c · (T_m − T₂)
→ T_m = (m₁ · T₁ + m₂ · T₂) / (m₁ + m₂)

> **Merke:** Bei der Mischkalorimetrie kürzt sich c heraus, wenn beide Flüssigkeiten denselben Stoff darstellen. Die Mischtemperatur liegt stets zwischen den beiden Ausgangstemperaturen, gewichtet nach den Massen.

![Zustand und Temperatur](/grafik-ideales-gas.svg)

**Erklärung zur Grafik:** Zusammenhang von Temperatur, Druck und Volumen (ideales Gas) — Grundlage für Temperaturskalen und Wärmeausdehnung.

**Wärmekapazität verschiedener Stoffe im Vergleich:**
- Wasser: c = 4180 J/(kg·K) — biologisch essenziell als Temperaturpuffer
- Eis: c = 2090 J/(kg·K) — nur halb so viel wie flüssiges Wasser
- Ethanol: c = 2440 J/(kg·K) — relevant in der Pharmakologie
- Aluminium: c = 900 J/(kg·K)
- Eisen/Stahl: c = 450 J/(kg·K) — Metalle erwärmen sich schnell

## Klinischer Bezug

Fiebermessung nutzt die Temperaturausdehnung (Quecksilber/Alkohol-Thermometer) oder elektronische Sensoren (Infrarot-Ohrthermometer, NTC-Widerstände). Hypothermie (<35 °C) und Hyperthermie (>40 °C) sind lebensbedrohlich — bereits 2 °C Abweichung vom Normwert (37 °C) beeinträchtigen die Enzymaktivität signifikant.

**Therapeutische Anwendungen:**
- Wärmetherapie (Wärmekissen, Infrarotlicht) fördert Durchblutung und Schmerzlinderung
- Therapeutische Hypothermie nach Herzstillstand: Kühlung auf 32–34 °C senkt den cerebralen Metabolismus
- Kalorimetrie in der Ernährungsmedizin: Q = m · c · ΔT bestimmt den physiologischen Brennwert der Nahrung

## Rechenbeispiele

**Beispiel 1 — Temperaturumrechnung:**
Körpertemperatur 37,0 °C: In Kelvin: T = 37,0 + 273,15 = 310,15 K. In Fahrenheit: T = 37,0 × 1,8 + 32 = 98,6 °F. Fieber bei 39,5 °C: T = 39,5 × 1,8 + 32 = 103,1 °F.

**Beispiel 2 — Wärmedehnung Metallstab:**
Stahlschiene L₀ = 30 m, Temperaturanstieg ΔT = 40 K, α = 12 × 10⁻⁶ /K:
ΔL = 12 × 10⁻⁶ · 30 · 40 = 0,0144 m = 14,4 mm. Dehnungsfugen an Gleisen und Brücken kompensieren diese Ausdehnung.

**Beispiel 3 — Mischungstemperatur:**
200 g Wasser (80 °C) + 300 g Wasser (20 °C): T_m = (200 · 80 + 300 · 20) / (200 + 300) = (16000 + 6000) / 500 = 44 °C.

**Beispiel 4 — Energie zum Erwärmen eines Patienten:**
Patient (70 kg, c ≈ 3500 J/(kg·K)) von 34 °C auf 37 °C erwärmen (Hypothermie-Behandlung):
Q = 70 · 3500 · 3 = 735.000 J = 735 kJ ≈ 176 kcal. Diese Energiemenge muss der Körper durch Metabolismus, Wärmedecken oder Infusionserwärmer aufbringen.

**Beispiel 5 — Verdunstungskühlung:**
Beim Schwitzen werden pro Gramm Schweiss ca. 2400 J (Verdampfungsenthalpie) der Haut entzogen. Bei 1 Liter Schweiss = 1000 g: Q = 1000 · 2400 = 2,4 MJ. Das reicht, um den Metabolismus einer Stunde Sport (~600 W × 3600 s = 2,16 MJ) fast vollständig abzuleiten.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Temperatur (Kelvin T = °C + 273,15), Wärme Q = c·m·ΔT, spezifische Wärmekapazität, Phasenübergang (latente Wärme), Wärmebilanz.

**Ergänzend vertiefend:** Absolute Temperatur (0 K); Volumenausdehnung γ ≈ 3α; Verdampfungsenthalpie (Schwitzen); typische Verwechslungen (c vs. λ, Dichteanomalie bei 4 °C) — siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- "Welche Temperatur in K entspricht 37 °C?" → T[K] = 37 + 273,15 = 310 K
- "Wie viel Energie braucht man, um 500 g Wasser um 60 K zu erwärmen?" → Q = 0,5 · 4180 · 60 = 125 400 J
- "Mischtemperatur zweier Wassermengen?" → T_m = (m₁·T₁ + m₂·T₂) / (m₁ + m₂)

**Typische Prüfungsfallen / Verwechslungen:**
- Bei Temperaturdifferenzen (ΔT) sind °C und K gleichwertig — bei absoluten Temperaturen in Formeln immer Kelvin!
- Wärmekapazität c [J/(kg·K)] beschreibt Speichern von Wärme — nicht verwechseln mit Wärmeleitfähigkeit λ [W/(m·K)]
- Dichteanomalie: Wasser ist bei **4 °C** am dichtesten (nicht bei 0 °C!)

**Prüfungsrelevante Zahlen/Fakten:**
- c(Wasser) = 4180 J/(kg·K); c(Eis) = 2090 J/(kg·K); c(Luft) ≈ 1005 J/(kg·K)
- Körpertemperatur: 37 °C = 310 K = 98,6 °F
- Fieber ab 38 °C, klinisch kritisch ab 40 °C; Hypothermie unter 35 °C

---

## Zusammenfassung (ultrakompakt)

- **Temperaturskalen**: T[K] = T[°C] + 273,15; T[°F] = T[°C] · 9/5 + 32; 0 K = absoluter Nullpunkt
- **Wärmemenge**: Q = m·c·ΔT; c(Wasser) = 4180 J/(kg·K) — höchste natürliche spez. Wärmekapazität
- **Wärmekapazität des Körpers**: c ≈ 3500 J/(kg·K); Fieber 37→40 °C bei 70 kg = ~735 kJ
- **Thermische Ausdehnung**: ΔL = α·L₀·ΔT; ΔV = γ·V₀·ΔT (γ ≈ 3α für isotrope Stoffe)
- **Mischungstemperatur**: T_m = (m₁·c₁·T₁ + m₂·c₂·T₂) / (m₁·c₁ + m₂·c₂)
- **Klinisch**: Fieber = T > 38 °C; Hypothermie = T < 35 °C; Schwitzen (Verdunstungskühlung) ≈ 2400 J/g`,

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
            "Wasser ist der beste Wärmespeicher unter den Alltagsstoffen — biologisch essenziell für Homöothermie.",
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
          options: ["27 °C", "37 °C", "47 °C", "310 °C", "0 °C"],
          correctIndex: 1,
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
          options: ["0,12 mm", "2,4 mm", "0,24 mm", "12 mm", "1,2 mm"],
          correctIndex: 1,
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
          options: ["45 °C", "52 °C", "60 °C", "40 °C", "35 °C"],
          correctIndex: 1,
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
            "Wegen der Wasserstoffbrückenbindungen, die beim Abkühlen unter 4 °C ein offenes Gitterwerk bilden und das Wasser ausdehnen.",
            "Weil der osmotische Druck bei 4 °C maximal ist.",
            "Weil Wasser bei 0 °C gasförmig vorliegt.",
            "Wegen der kovalenten Bindungen im Wassermolekül.",
          ],
          correctIndex: 1,
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
          options: ["98,6 °F", "103,1 °F", "100,0 °F", "107,1 °F", "39,5 °F"],
          correctIndex: 1,
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
      content: `## Einleitung

Warum wärmt eine Wollmütze, obwohl Wolle keine Wärme produziert? Warum kühlt Schweiß die Haut? Wärmeübertragung geschieht auf drei Wegen — **Konduktion** (Leitung), **Konvektion** (Strömung) und **Strahlung** — und alle drei sind im Körper aktiv. Das **Fourier-Gesetz** beschreibt den Wärmefluss durch Gewebe und Kleidung. Für den MedAT sind Wärmeleitfähigkeit, Fourier-Gesetz, Strahlung (Stefan-Boltzmann), Gegenstrom-Wärmeaustausch und klinische Wärmetherapie prüfungsrelevant.

**In diesem Kapitel lernst du:**
- **Wärmeleitung** (Konduktion): Fourier Q̇ = λ·A·ΔT/d; **Wärmeleitfähigkeit** λ [W/(m·K)]
- **Konvektion** (Wärmetransport mit strömendem Medium) und **Wärmestrahlung** (Stefan-Boltzmann P ∝ T⁴)
- **Gegenstrom-Wärmeaustausch** (z. B. Gefäße in Extremitäten) und **Thermoregulation**
- **Wiensches Verschiebungsgesetz** (T·λ_max = const) und Infrarot in der Medizin
- typische Prüfungsfallen (Q̇ vs. Q, λ vs. c) zu vermeiden

**Kontext — worum geht es und wofür brauchst du das?**  
Hier geht es um **wie Wärme von einem Ort zum anderen gelangt**: Leitung durch Material, Mitführung durch strömende Luft/Flüssigkeit, Strahlung (Infrarot). Im Körper: Isolierung durch Fett, Vasokonstriktion/Vasodilatation, Schwitzen. Du brauchst es für Thermodynamik (Hauptsätze) und für MedAT-Aufgaben zu λ, Stefan-Boltzmann und Gegenstrom.

---

## Wärmeleitung (Konduktion)

![Waermeuebertragung](/grafik-thermodynamik.svg)

**Erklärung zur Grafik:** Die Grafik veranschaulicht die drei Wärmeübertragungswege (Konduktion, Konvektion, Strahlung), das Fourier-Gesetz Q̇ = λ·A·ΔT/d und Stefan-Boltzmann.

Bei der Wärmeleitung wird Energie durch direkte Wechselwirkung benachbarter Teilchen übertragen, ohne dass Materie transportiert wird. Das **Fouriersche Gesetz** beschreibt den stationären Wärmestrom:

**Q̇ = λ · A · ΔT / d**

- Q̇: Wärmestrom [W]
- λ: Wärmeleitfähigkeit [W/(m·K)] — materialspezifisch
- A: Querschnittsfläche [m²]
- ΔT: Temperaturdifferenz [K]
- d: Schichtdicke [m]

Metalle leiten Wärme gut (hohe λ), Gase und Isolatoren schlecht. Körperfett wirkt als Wärmeisolator (niedrige λ). Verbände aus Wolle oder Schaumstoff halten Körperwärme, weil eingeschlossene Luft (λ ≈ 0,026) schlecht leitet.

Der **Widerstand** R_th = d/(λ·A) ist das thermische Analogon zum elektrischen Widerstand; Schichten können wie Widerstände in Reihe addiert werden (Bauphysik, Kleidung).

![Druck und Temperatur](/grafik-ideales-gas.svg)

**Erklärung zur Grafik:** Wärmeübertragung ändert Temperatur und damit Druck/Volumen; die Grafik zeigt den Zusammenhang p·V = n·R·T für Gase.

## Konvektion

Konvektion überträgt Wärme durch Materialtransport (Strömung) in Flüssigkeiten und Gasen.

**Natürliche Konvektion**: Erwärmte Flüssigkeit/Gas dehnt sich aus, wird leichter, steigt auf; kühlere, dichtere Flüssigkeit sinkt nach unten. Ergebnis: Konvektionswalze (z. B. Heizung, Meeresströmungen, Mantelkonvektion).

**Erzwungene Konvektion**: Externes Gebläse oder Pumpe beschleunigt den Transport (z. B. Luftkühlung von Fieber durch Ventilator, Blutkreislauf als Wärmetransportsystem).

Im menschlichen Körper transportiert das Blut Wärme aus dem Körperkern zur Peripherie (Haut). Bei Kälte wird die Hautdurchblutung durch Vasokonstriktion reduziert, um Wärmeverlust zu minimieren.

## Wärmestrahlung

Jeder Körper emittiert elektromagnetische Strahlung (Infrarotstrahlung) in Abhängigkeit von seiner Temperatur. Das **Stefan-Boltzmann-Gesetz** für ideale Schwarzkörper:

**P = σ · ε · A · T⁴**

- P: abgestrahlte Leistung [W]
- σ: Stefan-Boltzmann-Konstante = 5,67 × 10⁻⁸ W/(m²·K⁴)
- ε: Emissionsgrad (dimensionslos; Schwarzkörper: ε = 1; menschliche Haut: ε ≈ 0,97)
- A: Oberfläche [m²]
- T: Temperatur in Kelvin [K]

Wichtige Eigenschaften:
- Die Strahlung ist proportional zu **T⁴** — kleine Temperaturänderungen haben große Auswirkungen auf die abgestrahlte Leistung.
- Wärmestrahlung braucht kein Medium (funktioniert im Vakuum).
- Dunkle/matte Körper strahlen mehr ab und absorbieren mehr (ε → 1); helle/glänzende Körper weniger (ε → 0).
- Der Mensch verliert im Ruhezustand ≈ 50 % der Körperwärme durch Strahlung.

**Wiens Verschiebungsgesetz**: λ_max = b/T (b = 2,898 × 10⁻³ m·K). Bei 37 °C (310 K) emittiert der Mensch bei λ_max ≈ 9,4 μm — mittleres Infrarot. Grundlage der Thermokamera-Medizin.

## Thermoregulation im Überblick

Der Mensch ist ein Homöotherm (Gleichwarmer); die Körperkerntemperatur wird auf ≈ 37 °C gehalten.

Mechanismen:
1. **Wärmeerzeugung**: ATP-Hydrolyse, Muskelzittern, braunes Fettgewebe (Säuglinge)
2. **Wärmeabgabe**: Strahlung (≈50 %), Konvektion/Konduktion (≈25 %), Verdunstung/Schwitzen (≈25 %)
3. **Regulation**: Hypothalamus als Thermostat, Vasomotorik, Schweißproduktion

Bei Fieber wird der Hypothalamus-Sollwert durch Pyrogene (z. B. IL-1, Prostaglandin E₂) nach oben verstellt. Antipyretika (z. B. Paracetamol, ASS) hemmen die Prostaglandin-Synthese (COX-Hemmung) und senken den Sollwert wieder.

## Rechenbeispiele

**Beispiel 1 — Wärmestrom durch Fensterglas:**
Einfachverglasung: d = 4 mm = 0,004 m, A = 1,5 m², λ_Glas = 1,0 W/(m·K), ΔT = 20 K (innen 22 °C, außen 2 °C):
Q̇ = λ · A · ΔT / d = 1,0 × 1,5 × 20 / 0,004 = 7500 W = 7,5 kW. Enorm! Doppelverglasung mit Luftspalt (λ_Luft = 0,026, d = 12 mm) reduziert den Wärmestrom: Q̇ = 0,026 × 1,5 × 20 / 0,012 = 65 W — Reduktion um Faktor 115.

**Beispiel 2 — Strahlungsverlust des Menschen (Stefan-Boltzmann):**
Körperoberfläche A = 1,8 m², T_Haut = 33 °C = 306 K, T_Raum = 20 °C = 293 K, ε = 0,97:
P_ab = σ · ε · A · T_Haut⁴ = 5,67 × 10⁻⁸ × 0,97 × 1,8 × 306⁴ = 5,67 × 10⁻⁸ × 0,97 × 1,8 × 8,76 × 10⁹ ≈ 868 W.
P_auf = σ · ε · A · T_Raum⁴ = 5,67 × 10⁻⁸ × 0,97 × 1,8 × 293⁴ ≈ 726 W.
Netto-Strahlungsverlust: ΔP = 868 − 726 ≈ 142 W. Bei einem Ruhemetabolismus von ~80 W macht Strahlung also den Hauptanteil der Wärmeabgabe aus.

**Beispiel 3 — Wien: Emissionsmaximum bei Körpertemperatur:**
λ_max = b / T = 2,898 × 10⁻³ m·K / 310 K = 9,35 × 10⁻⁶ m = 9,35 μm (mittleres Infrarot). Thermokameras müssen in diesem Wellenlängenbereich empfindlich sein (typisch 8–14 μm). Zum Vergleich: Sonnenoberfläche (T ≈ 5778 K) → λ_max ≈ 500 nm (sichtbares Licht, gelb-grün).

**Beispiel 4 — Wärmeverlust durch Kleidung:**
T-Shirt-Stoff: d = 1 mm, λ ≈ 0,04 W/(m·K), A = 1,2 m² (Rumpf), ΔT = 10 K:
Q̇ = 0,04 × 1,2 × 10 / 0,001 = 480 W.
Winterjacke: d = 5 cm, λ ≈ 0,04:
Q̇ = 0,04 × 1,2 × 10 / 0,05 = 9,6 W. Die 50-fache Dicke reduziert den Wärmeverlust 50-fach — linearer Zusammenhang bestätigt das Fouriersche Gesetz.

## Klinische Vertiefung

**Therapeutische Hypothermie:** Nach Herzstillstand wird die Körperkerntemperatur auf 32–34 °C gesenkt (konvektive Kühlung durch gekühlte Infusionslösung + externe Kühlpads). Dies senkt den Hirnmetabolismus um ~6 % pro °C und schützt Neurone vor Reperfusionsschäden.

**Wärmflasche vs. Rotlichtlampe:** Wärmflasche überträgt Wärme durch Konduktion (direkter Kontakt, λ_Wasser = 0,6 W/(m·K)) und Konvektion (Wasserströmung im Inneren). Rotlichtlampe überträgt durch Infrarotstrahlung (berührungslos, tiefere Gewebepenetration bei λ = 780–1400 nm). Die Infrarotlampe hat den Vorteil, dass sie Wärme direkt im Gewebe deponiert, ohne die Hautoberfläche zuerst maximal zu erwärmen — geringeres Verbrennungsrisiko.

**Gegenstrom-Wärmeaustausch:** In den Extremitäten verlaufen Arterien und Venen eng beieinander. Das warme arterielle Blut gibt Wärme an das kühle venöse Blut ab, bevor es die Peripherie erreicht. Dies minimiert den Wärmeverlust über die Akren bei Kälte und ist ein wichtiger Überlebensmechanismus. Das gleiche Prinzip wird in der Dialyse (Bluterwärmung) und bei Herz-Lungen-Maschinen eingesetzt.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Wärmeleitung (Fourier: Q̇ = λ·A·ΔT/d), Wärmeleitfähigkeit λ, Isolation (Fett, Luft), Wärmestrom, Anwendung (Körpertemperatur, Wärmedämmung).

**Ergänzend vertiefend:** Konvektion, Strahlung; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- "Wärmestrom durch Fettschicht: λ = 0,2, A = 0,5 m², ΔT = 4 K, d = 2 cm?" → Q̇ = 0,2 · 0,5 · 4 / 0,02 = 20 W
- "Wie ändert sich die Strahlungsleistung bei Fieber 37 → 42 °C?" → P ∝ T⁴; (315/310)⁴ ≈ 1,066 → +6,6 %
- "Bei welcher Wellenlänge strahlt der Mensch maximal?" → λ_max = 2898/310 ≈ 9,4 μm (mittleres Infrarot)

**Typische Prüfungsfallen / Verwechslungen:**
- Stefan-Boltzmann: T **unbedingt in Kelvin** einsetzen (nicht °C!)
- Wärmeleitung (Konduktion) braucht Materialkontakt; **Strahlung** funktioniert auch im Vakuum
- ε(Menschliche Haut) ≈ 0,97 — fast idealer Schwarzkörper im Infrarot, aber nicht exakt 1

**Prüfungsrelevante Zahlen/Fakten:**
- λ(Luft) ≈ 0,026; λ(Körperfett) ≈ 0,2; λ(Wasser) ≈ 0,6; λ(Stahl) ≈ 50 W/(m·K)
- σ = 5,67 × 10⁻⁸ W/(m²·K⁴); typische Körperoberfläche ≈ 1,8 m²
- Wärmeabgabe im Ruhezustand: Strahlung ≈ 50 %, Konvektion ≈ 25 %, Verdunstung ≈ 25 %

---

## Zusammenfassung (ultrakompakt)

- **Konduktion**: Q̇ = λ·A·ΔT/d [W]; λ(Luft) = 0,025, λ(Wasser) = 0,6, λ(Fett) = 0,2, λ(Knochen) = 0,3 W/(m·K)
- **Konvektion**: erzwungen (Wind, Blutfluss) effektiver als freie; Kühlung durch Luftbewegung am Körper
- **Strahlung**: P = ε·σ·A·T⁴ (Stefan-Boltzmann); Wien: λ_max = 2897/T; Körper (37 °C = 310 K) strahlt bei ~9,4 µm (Infrarot)
- **Wärmeleitfähigkeit Haut-Fett**: schlechte Wärmeleiter → thermische Isolation; Adipositas → schlechtere Wärmeabgabe
- **Gegenstrom-Wärmeaustausch**: Arterien-Venen-Bündel in Extremitäten; reduziert Wärmeverlust; Prinzip auch in Dialyse/HLM
- **Klinisch**: therapeutische Hypothermie (32–34 °C); Winterjacke 50× weniger Wärmeverlust als T-Shirt`,

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
          options: ["2 W", "20 W", "200 W", "0,2 W", "10 W"],
          correctIndex: 1,
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
            "Schaumstoffverband (λ ≈ 0,04 W/(m·K), enthält viel Luft)",
            "Aluminiumfolie (λ = 200 W/(m·K))",
            "Feuchte Gaze (λ = 0,6 W/(m·K))",
            "Stahlgitter (λ = 50 W/(m·K))",
          ],
          correctIndex: 1,
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
            "Sie steigt um etwa 6,6 %",
            "Sie steigt um etwa 13,2 %",
            "Sie verdoppelt sich",
            "Sie sinkt um 1,6 %",
          ],
          correctIndex: 1,
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
            "Wegen des ungünstigen Verhältnisses von Körperoberfläche zu Körpervolumen und geringer Fettschicht",
            "Weil sie mehr Schweißdrüsen haben",
            "Weil ihr Herzschlag langsamer ist",
            "Weil ihre Lungenkapazität kleiner ist",
          ],
          correctIndex: 1,
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
        "Entropie",
        "Innere Energie",
        "Carnot-Wirkungsgrad",
        "Energieerhaltung",
        "Isochor",
        "Isobar",
        "Isotherm",
        "Adiabatisch",
        "ATP-Synthese",
        "Perpetuum mobile",
      ],
      content: `## Einleitung

Kein Perpetuum mobile, kein 100-prozentiger Wirkungsgrad, kein spontaner Wärmefluss von kalt nach warm — das sind die Aussagen der **Thermodynamik**. Die Hauptsätze stecken das Mögliche ab. Für den MedAT sind 1. bis 3. Hauptsatz, ΔU = Q + W, Carnot-Wirkungsgrad und Entropie prüfungsrelevant.

**In diesem Kapitel lernst du:**
- **1. Hauptsatz**: ΔU = Q + W (innere Energie, Wärme, Arbeit); Energieerhaltung in thermischen Prozessen
- **2. Hauptsatz**: Entropie nimmt in abgeschlossenen Systemen zu; Wärme fließt spontan nur von heiß nach kalt
- **Carnot-Wirkungsgrad** η_C = 1 − T_kalt/T_warm (maximaler Wirkungsgrad einer Wärmekraftmaschine)
- **Prozessarten**: isochor (V=const), isobar (p=const), isotherm (T=const), adiabatisch (Q=0)
- typische Prüfungsfallen (Vorzeichenkonvention W, η < 1) zu vermeiden

**Kontext — worum geht es und wofür brauchst du das?**  
Hier geht es um **Energie und Richtung** thermischer Prozesse: Der 1. Hauptsatz (Energieerhaltung) und der 2. Hauptsatz (Entropie, irreversibler Ablauf) begrenzen, was möglich ist. Klinisch: ATP-Synthese, Körperwärme, Warum Kühlung Energie braucht. Du brauchst es für Biochemie und für MedAT-Aufgaben zu ΔU, Carnot und Entropie.

---

## Nullter Hauptsatz: Thermisches Gleichgewicht

![Hauptsaetze Carnot](/grafik-thermodynamik.svg)

**Erklärung zur Grafik:** Die Abbildung fasst den 1. und 2. Hauptsatz, ΔU = Q + W, Entropie und den Carnot-Wirkungsgrad η = 1 − T_kalt/T_warm zusammen.

"Wenn zwei Systeme je im thermischen Gleichgewicht mit einem dritten System stehen, dann stehen sie auch untereinander im thermischen Gleichgewicht."

Dies ist die physikalische Grundlage der Temperaturmessung: Ein Thermometer erreicht mit dem Körper ein Gleichgewicht und zeigt dann denselben Temperaturwert an.

## Erster Hauptsatz: Energieerhaltung

**ΔU = Q + W**

- ΔU: Änderung der inneren Energie [J]
- Q: dem System zugeführte Wärme [J] (positiv: Wärme zugeführt)
- W: am System verrichtete Arbeit [J] (positiv: Kompression/Arbeit von außen)

Alternativform: ΔU = Q − W_System (wenn W_System die vom System verrichtete Arbeit ist).

Die innere Energie U ist die Gesamtenergie aller Mikrozustände (Translation, Rotation, Vibration der Teilchen, Bindungsenergien). Bei idealen Gasen gilt U ∝ T.

Spezielle Zustandsänderungen:
- **Isochor** (V = const): W = 0 → ΔU = Q (gesamte Wärme erhöht innere Energie)
- **Isobar** (p = const): W = −p·ΔV → ΔU = Q − p·ΔV

Bei **isobaren Prozessen** (p = const) leistet das System Volumenarbeit gegen den konstanten Außendruck. Klinisch relevant: Lungenbelüftung bei Spontanatmung ist näherungsweise isobar (Atmosphärendruck bleibt konstant, Volumen ändert sich durch Diaphragmakontration).

- **Isotherm** (T = const): ΔU = 0 → Q = −W (beim idealen Gas)
- **Adiabatisch** (Q = 0): ΔU = W (alle Arbeit geht in innere Energie, Temperatur ändert sich)

Kein Perpetuum mobile erster Art kann existieren (Maschine, die Energie erzeugt).

![Zustandsänderungen](/grafik-ideales-gas.svg)

**Erklärung zur Grafik:** Isochore, isobare, isotherme und adiabatische Prozesse im p-V- bzw. p-T-Diagramm — Grundlage für ΔU = Q + W und Carnot-Prozess.

## Zweiter Hauptsatz: Entropie und Irreversibilität

**Formulierungen** (äquivalent):
1. Wärme fließt nicht spontan von kalt nach warm (Clausius).
2. Es gibt keine Maschine, die Wärme vollständig in Arbeit umwandelt (Kelvin-Planck).
3. Die Entropie eines abgeschlossenen Systems nimmt bei irreversiblen Prozessen zu: **ΔS ≥ 0**.

**Entropie S** ist ein Maß für die Unordnung (Anzahl der Mikrozustände W): S = k_B · ln(W) (Boltzmann-Relation). Je größer die Entropie, desto wahrscheinlicher der Zustand.

Folgen:
- Keine thermische Maschine kann 100 % der Wärme in Arbeit umwandeln.
- Biologie scheinbar im Widerspruch? Nein: Lebewesen sind **offene Systeme** — sie exportieren Entropie in die Umgebung (Wärme, Abfall), um intern Ordnung aufrechtzuerhalten.

![Prozesse und Wirkungsgrad](/grafik-ideales-gas.svg)

**Erklärung zur Grafik:** Carnot-Prozess und Zustandsänderungen (isotherm, adiabatisch) im p-V-Diagramm — Grundlage für den maximalen Wirkungsgrad.

## Carnotscher Wirkungsgrad

Der maximal erreichbare Wirkungsgrad η einer Wärmekraftmaschine zwischen zwei Temperaturreservoirs:

**η_Carnot = 1 − T_kalt / T_warm**

(T in Kelvin!)

- Reale Maschinen haben immer η < η_Carnot (Reibung, Wärmeverluste, Irreversibilität).
- Beispiel: T_warm = 600 K, T_kalt = 300 K → η = 1 − 300/600 = 50 %.

## Biologische Anwendung: ATP-Synthese

Mitochondrien arbeiten nicht wie Wärmekraftmaschinen, sondern nutzen elektrochemische Gradienten. Der bioenergische Wirkungsgrad der oxidativen Phosphorylierung beträgt ≈ 38–40 %. Die restliche Energie (~60 %) wird als Wärme abgegeben und hält die Körpertemperatur aufrecht. Bei körperlicher Aktivität steigt die Wärmeproduktion proportional zur Arbeit.

Formell: Verbrennungsenergie von Glucose (ΔG = −2870 kJ/mol) → ≈ 30 mol ATP (≈ 30 × 30,5 kJ = 915 kJ) → η ≈ 32 %.

## Dritter Hauptsatz (ergänzend)

Beim absoluten Nullpunkt (0 K) ist die Entropie eines perfekten Kristalls null: S(T→0) = 0. Der absolute Nullpunkt ist nicht erreichbar (Nernst).

## Rechenbeispiele

**Beispiel 1 — Carnot-Wirkungsgrad eines Dampfkraftwerks:**
T_warm = 550 °C = 823 K (Dampf), T_kalt = 30 °C = 303 K (Flusswasser):
η_Carnot = 1 − 303/823 = 1 − 0,368 = 0,632 = 63,2 %. Reales Kraftwerk: η ≈ 40 %. Verbesserung? T_warm erhöhen (Hochdruck-Dampf) oder T_kalt senken (kaltes Kühlwasser).

**Beispiel 2 — Energiebilanz der Glucose-Oxidation:**
Glucose: ΔG° = −2870 kJ/mol. Daraus werden ≈ 30 mol ATP synthetisiert, je 30,5 kJ/mol freie Enthalpie:
Genutzte Energie: 30 × 30,5 = 915 kJ. Wirkungsgrad: η = 915/2870 = 31,9 %. Die restlichen 1955 kJ (68 %) werden als Wärme freigesetzt.
Pro Tag (2000 kcal ≈ 8400 kJ): ~5700 kJ = 5,7 MJ Wärme → Durchschnittsleistung: 5 700 000 J / 86 400 s ≈ 66 W (Ruhemetabolismus).

**Beispiel 3 — Wärmekraftmaschine: Arbeit und Abwärme:**
Maschine nimmt Q_warm = 1200 J auf, verrichtet W = 400 J Nutzarbeit.
Abwärme: Q_kalt = Q_warm − W = 800 J. Wirkungsgrad: η = W/Q_warm = 400/1200 = 33,3 %.
Zum Vergleich Carnot bei T_warm = 600 K, T_kalt = 300 K: η = 1 − 300/600 = 50 %. Die Maschine schöpft also nur 33,3/50 = 66,6 % des theoretischen Maximums aus.

**Beispiel 4 — Entropieänderung beim Eisschmelzen:**
1 kg Eis schmilzt bei T = 273 K (0 °C). Schmelzwärme: Q = m · L_f = 1 × 334 000 = 334 000 J.
Entropieänderung: ΔS = Q/T = 334 000 / 273 = 1224 J/K. Große Entropiezunahme, weil die geordnete Kristallstruktur des Eises in die ungeordnete Flüssigkeitsstruktur übergeht.

## Klinische Vertiefung

**Kalorimetrie und Ernährungsmedizin:** Der Brennwert der Nahrung (kcal/kJ) wird kalorimetrisch bestimmt: Vollständige Verbrennung im Bombenkalorimeter (Q = ΔU bei V = const). Der physiologische Brennwert ist etwas geringer (Proteine werden nicht vollständig oxidiert → Harnstoff). Grundumsatz (Basal Metabolic Rate): ≈ 4,2 kJ/(kg·h) für Männer, ≈ 3,5 kJ/(kg·h) für Frauen — Harris-Benedict-Formel in der Ernährungsberatung.

**Maligne Hyperthermie:** Eine pharmakogenetische Störung, bei der volatile Anästhetika (z. B. Halothan) und Succinylcholin eine unkontrollierte Calciumfreisetzung im Muskel auslösen → maximaler Metabolismus → Körpertemperatur steigt auf >40 °C in Minuten. Thermodynamisch betrachtet: Die metabolische Wärmeproduktion übersteigt die Wärmeabgabekapazität (Strahlung + Konvektion + Verdunstung) massiv. Therapie: Dantrolen (blockiert Ryanodinrezeptor) + aggressive Kühlung.

**Kryotherapie und Kryochirurgie:** Kontrolliertes Einfrieren von Gewebe (−20 bis −196 °C mit flüssigem Stickstoff). Der Phasenübergang Wasser→Eis in den Zellen zerstört diese durch Eiskristallbildung und osmotischen Stress. Nutzung: Warzenentfernung, Tumortherapie (Leber, Prostata). Thermodynamisch: Dem Gewebe wird die Schmelzwärme entzogen (Q = m · L_f), die Temperatur bleibt während des Phasenübergangs konstant bei 0 °C.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Carnot-Wirkungsgrad η = 1 − T_kalt/T_warm (Kelvin!), 2. Hauptsatz (Wärme nicht vollständig in Arbeit), Wärmekraftmaschine, maximaler Wirkungsgrad.

**Ergänzend vertiefend:** Entropie; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- "Carnot-Wirkungsgrad bei T_warm = 600 K, T_kalt = 300 K?" → η = 1 − 300/600 = 50 %
- "Was passiert bei adiabatischer Kompression?" → T steigt, weil ΔU = W > 0 (Q = 0)
- "Was passiert bei isochorer Erwärmung?" → W = 0, daher ΔU = Q (gesamte Wärme erhöht innere Energie)

**Typische Prüfungsfallen / Verwechslungen:**
- Carnot-Formel: **T immer in Kelvin** — mit °C-Werten liefert die Formel falsche Ergebnisse!
- 1. Hauptsatz-Vorzeichenkonvention: ΔU = Q + W (W = Arbeit AM System) — oder ΔU = Q − W_System (W = Arbeit DURCH das System); Konvention prüfen!
- Perpetuum mobile 1. Art (Energie aus nichts) verletzt 1. HS; Perpetuum mobile 2. Art (vollständige Wärme→Arbeit) verletzt 2. HS

**Prüfungsrelevante Zahlen/Fakten:**
- ATP-Synthese-Wirkungsgrad ≈ 38 %; restliche ≈ 62 % werden als Körperwärme abgegeben
- Ruhemetabolismus: ~80 W Gesamtenergieumsatz, davon ~50–60 W als Wärme
- ΔS = Q/T [J/K]; Entropie abgeschlossener Systeme nimmt bei irreversiblen Prozessen zu (ΔS ≥ 0)

---

## Zusammenfassung (ultrakompakt)

- **0. Hauptsatz**: Thermisches Gleichgewicht ist transitiv — Grundlage der Temperaturmessung
- **1. Hauptsatz**: ΔU = Q + W (Energieerhaltung); Q > 0 = Wärme zugeführt, W > 0 = Arbeit am System
- **Zustandsänderungen**: isochor (V=const, W=0), isobar (p=const), isotherm (T=const, ΔU=0), adiabatisch (Q=0)
- **2. Hauptsatz**: Wärme fließt nie spontan von kalt nach warm; Entropie S nimmt in abgeschl. Systemen zu; kein Perpetuum mobile 2. Art
- **Carnot-Wirkungsgrad**: η_max = 1 − T_kalt/T_warm; Körper (~37 °C) = keine Wärmekraftmaschine
- **3. Hauptsatz**: S → 0 bei T → 0 K; absoluter Nullpunkt unerreichbar`,

      lernziele: [
        "Die vier thermodynamischen Hauptsätze mit Formeln und Formulierungen wiedergeben",
        "ΔU = Q + W auf konkrete Zustandsänderungen (isochor, isobar, isotherm, adiabatisch) anwenden",
        "Den Carnot-Wirkungsgrad berechnen und interpretieren",
        "Die Bedeutung der Entropie und den zweiten Hauptsatz auf biologische Systeme anwenden",
        "Den bioenergischen Wirkungsgrad der ATP-Synthese mit thermodynamischen Konzepten verknüpfen",
      ],

      sections: [
        {
          heading: "Erster Hauptsatz: Energieerhaltung in der Thermodynamik",
          text: "ΔU = Q + W besagt, dass die innere Energie eines Systems nur durch Wärme (Q) und Arbeit (W) geändert werden kann. Energia wird nicht erzeugt oder vernichtet. Bei isochorer Änderung (V = const) ist W = 0, sodass ΔU = Q. Bei isothermer Änderung eines idealen Gases ist ΔU = 0 (T = const → U = const), also Q = −W. Bei adiabatischer Kompression (Q = 0) steigt die Temperatur, weil ΔU = W > 0. Diese Fälle sind MedAT-relevant: Kenntnis der Vorzeichen und Bedingungen wird geprüft.",
          merksatz:
            "ΔU = Q + W — Energieerhaltung gilt immer; Energie kann nur umgewandelt, nie erzeugt oder vernichtet werden.",
        },
        {
          heading: "Zweiter Hauptsatz und Carnot-Wirkungsgrad",
          text: "Der zweite Hauptsatz verbietet perfekte Maschinen: Keine Maschine kann Wärme vollständig in Arbeit umwandeln. Der Carnot-Prozess definiert die theoretische Obergrenze: η = 1 − T_kalt/T_warm (Kelvin). Um den Wirkungsgrad zu verbessern, muss man die Quelltemperatur T_warm erhöhen oder die Senkentemperatur T_kalt senken. Reale Kraftwerke (Dampfturbinen) erreichen η ≈ 35–45 %, weit unterhalb des Carnot-Werts, da Reibung und Irreversibilität auftreten.",
          merksatz:
            "η_Carnot = 1 − T_kalt/T_warm — T immer in Kelvin; je größer der Temperaturunterschied, desto höher der maximal mögliche Wirkungsgrad.",
        },
        {
          heading: "Entropie und Biologie",
          text: "Lebende Systeme sind offene Systeme: Sie nehmen hoch strukturierte Energie (Nahrung, Licht) auf und geben unstrukturierte Wärme ab, wodurch sie intern Ordnung aufrechterhalten können (Protein-Synthese, Zellteilung). Der Gesamtentropie des Universums nimmt trotzdem zu — das Leben verletzt den zweiten Hauptsatz nicht. ATP-Synthese hat einen Wirkungsgrad von ≈ 38 %, die verbleibenden 62 % der Glucose-Verbrennungsenergie dienen der Körperwärmeerzeugung.",
          merksatz:
            "Lebewesen sind offene Systeme — sie exportieren Entropie, um intern Ordnung zu erzeugen. Kein Widerspruch zum 2. Hauptsatz.",
        },
      ],

      merksätze: [
        "0. Hauptsatz: Thermisches Gleichgewicht — Grundlage der Temperaturmessung.",
        "1. Hauptsatz: ΔU = Q + W — Energieerhaltung, kein Perpetuum mobile erster Art.",
        "2. Hauptsatz: Entropie abgeschlossener Systeme nimmt nie ab (ΔS ≥ 0).",
        "Carnot-Wirkungsgrad: η = 1 − T_kalt/T_warm — maximaler Wirkungsgrad, T in Kelvin.",
        "Adiabatisch + Kompression → Temperatur steigt (Q = 0, W > 0 → ΔU > 0).",
        "Isotherm + ideales Gas: ΔU = 0 → Q = −W (Wärme = negative Arbeit des Systems).",
        "ATP-Wirkungsgrad ≈ 38 % — restliche 62 % werden als Körperwärme abgegeben.",
        "Lebewesen verletzen den 2. Hauptsatz nicht: Sie sind offene Systeme, die Entropie exportieren.",
        "Drittes Hauptsatz: Bei T = 0 K ist S = 0 (perfekter Kristall) — 0 K nicht erreichbar.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie den zweiten Hauptsatz der Thermodynamik und diskutieren Sie, ob lebende Systeme diesen scheinbar verletzen.",
        answer:
          "Der zweite Hauptsatz der Thermodynamik lässt sich auf mehrere äquivalente Weisen formulieren: (1) Wärme fließt nicht spontan von einem kälteren zu einem wärmeren Körper (Clausius). (2) Es existiert keine zyklisch arbeitende Maschine, die Wärme aus einem Reservoir vollständig in Arbeit umwandelt (Kelvin-Planck). (3) Bei irreversiblen Prozessen in abgeschlossenen Systemen nimmt die Entropie zu (ΔS ≥ 0). Die Entropie S ist ein Maß für die Unordnung eines Systems: S = k_B · ln(W), wobei W die Anzahl der Mikrozustände ist. Lebende Systeme scheinen dem zu widersprechen: Sie bauen aus einfachen Molekülen hochstrukturierte Proteine, DNA und Organellen — offenbar Abnahme der Entropie. Dies ist jedoch kein Widerspruch, da Lebewesen offene Systeme sind. Sie nehmen hoch strukturierte Energie (z. B. chemische Energie der Nahrung, Lichtenergie) auf und geben niedrig strukturierte Energie (Wärme, CO₂, Metaboliten) ab. Die Entropie in der Umgebung steigt dabei stärker als die Entropie im Organismus sinkt. Die Gesamtentropie des Universums nimmt zu — der zweite Hauptsatz wird nicht verletzt. Praktisch bedeutet das: Kein Lebewesen kann ohne Energiezufuhr Ordnung erzeugen; der permanente Energiestrom ist Voraussetzung für Lebensprozesse.",
      },

      klinischerBezug:
        "ATP-Synthese (~38 % Wirkungsgrad), Körperwärme als metabolisches Nebenprodukt (Fieber bei erhöhtem Stoffwechsel), Wärmekraftmaschinen-Analogie für Herz-Kreislaufarbeit.",

      selfTest: [
        {
          question:
            "Ein ideales Gas wird isochor von 20 °C auf 80 °C erhitzt. Welche Aussage ist korrekt?",
          options: [
            "Das Gas verrichtet Arbeit an der Umgebung.",
            "Die gesamte zugeführte Wärme geht in die Erhöhung der inneren Energie.",
            "Die innere Energie bleibt konstant.",
            "Das Gas kühlt sich ab.",
            "Es findet kein Wärmeaustausch statt.",
          ],
          correctIndex: 1,
          explanation:
            "Bei isochorer Zustandsänderung gilt V = const, daher ist die Volumenarbeit W = −p·ΔV = 0. Nach dem ersten Hauptsatz folgt: ΔU = Q + 0 = Q. Die gesamte zugeführte Wärme erhöht die innere Energie des Gases, was sich als Temperaturanstieg manifestiert. Bei konstantem Volumen findet also kein Energieaustausch durch mechanische Arbeit statt.",
          hints: [
            "Isochor: V = const → Volumenänderung ΔV = 0 → Arbeit W = p·ΔV = 0.",
            "1. Hauptsatz: ΔU = Q + W. Wenn W = 0, dann ΔU = Q.",
          ],
          tags: ["thermodynamik", "isochor", "erster-hauptsatz"],
          difficulty: 1,
        },
        {
          question:
            "Eine Wärmekraftmaschine arbeitet zwischen T_warm = 500 K und T_kalt = 250 K. Welchen maximalen Wirkungsgrad kann sie theoretisch erreichen?",
          options: ["25 %", "50 %", "75 %", "100 %", "38 %"],
          correctIndex: 1,
          explanation:
            "Der Carnot-Wirkungsgrad gibt die theoretische Obergrenze an: η = 1 − T_kalt/T_warm = 1 − 250/500 = 1 − 0,5 = 0,5 = 50 %. Reale Maschinen erreichen diesen Wert nie, da Reibung, Wärmeleitung und andere Irreversibilitäten auftreten. Ein Wirkungsgrad von 100 % würde den zweiten Hauptsatz verletzen.",
          hints: [
            "Carnot: η = 1 − T_kalt/T_warm. T muss in Kelvin angegeben sein.",
            "Beide Temperaturen sind schon in Kelvin: η = 1 − 250/500.",
          ],
          tags: ["carnot", "wirkungsgrad", "wärmekraftmaschine"],
          difficulty: 1,
        },
        {
          question: "Ein Gas wird adiabatisch komprimiert. Was passiert mit der Temperatur?",
          options: [
            "Die Temperatur bleibt konstant.",
            "Die Temperatur steigt.",
            "Die Temperatur sinkt.",
            "Die Temperatur hängt nur vom Volumen ab.",
            "Keine Temperaturänderung, da Q = 0.",
          ],
          correctIndex: 1,
          explanation:
            "Adiabatisch bedeutet Q = 0 (kein Wärmeaustausch). Bei Kompression wird Arbeit am System verrichtet: W > 0. Aus dem ersten Hauptsatz folgt: ΔU = Q + W = 0 + W = W > 0. Steigende innere Energie bedeutet steigende Temperatur (da U ∝ T für ideale Gase). Praktisches Beispiel: Dieselmotor — Luft wird adiabatisch so stark komprimiert, dass die Temperatur über den Zündpunkt des Kraftstoffs steigt.",
          hints: [
            "Adiabatisch: Q = 0. Kompression: Arbeit wird am Gas verrichtet → W > 0.",
            "ΔU = Q + W = 0 + W > 0 → innere Energie steigt → Temperatur steigt.",
          ],
          tags: ["adiabatisch", "kompression", "temperatur"],
          difficulty: 2,
        },
        {
          question:
            "Die ATP-Synthese in den Mitochondrien hat einen Wirkungsgrad von ca. 38 %. Was geschieht mit den restlichen 62 % der Energie der Nahrung?",
          options: [
            "Sie werden in ADP gespeichert.",
            "Sie werden als Wärme an den Körper und die Umgebung abgegeben.",
            "Sie verlassen den Körper als Licht.",
            "Sie werden in Fett umgewandelt.",
            "Sie werden direkt als mechanische Arbeit genutzt.",
          ],
          correctIndex: 1,
          explanation:
            "Gemäß dem zweiten Hauptsatz kann kein Prozess 100 % der Energie in eine andere Form umwandeln. Bei der oxidativen Phosphorylierung werden ≈ 38 % der freien Enthalpie der Glucose (ΔG° = −2870 kJ/mol) in ATP-Bindungsenergie überführt. Die verbleibenden ≈ 62 % werden als Wärme freigesetzt und halten die Körpertemperatur bei 37 °C aufrecht. Bei körperlicher Aktivität steigt die Wärmeproduktion proportional zum Energieumsatz — daher erhöht sich die Körpertemperatur bei Sport leicht.",
          hints: [
            "Wirkungsgrad 38 % bedeutet: Von 100 % Nahrungsenergie werden 38 % nutzbar (ATP), der Rest?",
            "Thermodynamisches Prinzip: Nicht nutzbare Energie wird als Wärme abgegeben (2. Hauptsatz).",
          ],
          tags: ["atp-synthese", "wirkungsgrad", "thermodynamik"],
          difficulty: 2,
        },
        {
          question:
            "Eine Wärmekraftmaschine nimmt Q_warm = 800 J Wärme aus dem heißen Reservoir auf und gibt Q_kalt = 500 J an das kalte Reservoir ab. Welchen Wirkungsgrad hat sie?",
          options: ["62,5 %", "37,5 %", "50 %", "25 %", "100 %"],
          correctIndex: 1,
          explanation:
            "Die verrichtete Arbeit beträgt W = Q_warm − Q_kalt = 800 J − 500 J = 300 J. Der Wirkungsgrad ist η = W/Q_warm = 300/800 = 0,375 = 37,5 %. Dies ist deutlich unter dem Carnot-Wirkungsgrad (der nur von den Temperaturen abhängt) — reale Maschinen haben immer Verluste. Erinnerung: η = W/Q_warm = 1 − Q_kalt/Q_warm.",
          hints: [
            "Nutzarbeit: W = Q_warm − Q_kalt. Wirkungsgrad: η = W/Q_warm.",
            "W = 800 − 500 = 300 J. η = 300/800.",
          ],
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
      content: `## Einleitung

Der **Autoklav** sterilisiert bei 121 °C / 2 bar — möglich, weil Druck den Siedepunkt erhöht. Stickstoffnarkose beim Tauchen entsteht, weil Gase unter Druck mehr im Blut lösen (**Henry-Gesetz**). Hinter all dem stecken das **ideale Gasgesetz** und die Physik der **Phasenübergänge**. Für den MedAT sind pV = nRT, Boyle/Gay-Lussac/Charles, Phasendiagramm, Latentwärme und Anwendungen (Autoklav, Tauchmedizin) prüfungsrelevant.

**In diesem Kapitel lernst du:**
- **Ideales Gasgesetz** pV = nRT; **Boyle** (T=const: p ∝ 1/V), **Gay-Lussac/Charles** (p ∝ T, V ∝ T)
- **Phasendiagramm**: Tripelpunkt, kritischer Punkt; **latente Wärme** (Schmelzen, Verdampfen)
- **Dampfdruck** und Siedepunkt; warum Autoklav bei Überdruck höhere Temperatur erreicht
- **Henry-Gesetz** (Gaslöslichkeit ∝ Partialdruck) — Tauchmedizin, Narkose
- typische Prüfungsfallen (T in Kelvin in pV = nRT; latente Wärme ohne ΔT) zu vermeiden

**Kontext — worum geht es und wofür brauchst du das?**  
Hier geht es um **Gase und Phasen**: Wie hängen Druck, Volumen und Temperatur zusammen (ideales Gas)? Was passiert beim Schmelzen und Verdampfen (latente Wärme)? Klinisch: Autoklav, Atemgase, Henry-Gesetz (Tauchen, Narkose). Du brauchst es für Physiologie (Atmung, Partialdrücke) und für MedAT-Aufgaben zu pV = nRT und Phasenübergängen.

---

## Ideales Gasgesetz

![Ideales Gas Phasendiagramm](/grafik-ideales-gas.svg)

**Erklärung zur Grafik:** Die Grafik zeigt die ideale Gasgleichung pV = nRT, die Einzelgesetze (Boyle, Gay-Lussac, Charles) und das Phasendiagramm mit Tripelpunkt und kritischem Punkt.

Das ideale Gas ist ein Modell, bei dem Wechselwirkungen zwischen den Teilchen und das Eigenvolumen der Teilchen vernachlässigt werden. Bei niedrigem Druck und hoher Temperatur verhalten sich viele reale Gase näherungsweise ideal.

**Allgemeine Zustandsgleichung des idealen Gases:**

**p · V = n · R · T**

- p: Druck [Pa]
- V: Volumen [m³]
- n: Stoffmenge [mol]
- R: universelle Gaskonstante = 8,314 J/(mol·K)
- T: Temperatur [K] (unbedingt in Kelvin!)

Aus dieser Gleichung lassen sich alle Spezialfälle ableiten:
- **Boyle-Mariotte** (T = const): p·V = const (isotherm)
- **Gay-Lussac** (p = const): V/T = const (isobar)
- **Charles** (V = const): p/T = const (isochor)

Normzustand: p₀ = 101 325 Pa = 1 atm = 1,01325 bar; T₀ = 273,15 K (0 °C).
Molvolumen bei Normzustand: V_m = RT₀/p₀ = 22,4 L/mol.

## Phasendiagramm

Ein Phasendiagramm stellt die Gleichgewichtszustände eines Stoffes als Funktion von Druck und Temperatur dar. Die drei Hauptphasen — **fest, flüssig, gasförmig** — sind durch Phasengrenzkurven getrennt:

- **Schmelzkurve**: Fest-Flüssig-Grenze (fast senkrecht, da Schmelzpunkt wenig druckabhängig)
- **Dampfdruckkurve**: Flüssig-Gasförmig-Grenze (endet am kritischen Punkt)
- **Sublimationskurve**: Fest-Gasförmig-Grenze

![Wärme und Phasen](/grafik-thermodynamik.svg)

**Erklärung zur Grafik:** Wärmeübertragung bei Phasenübergängen (latente Wärme) und der Zusammenhang von Temperatur mit innerer Energie — Ergänzung zum Phasendiagramm.

![Thermodynamik und Phasen](/grafik-thermodynamik.svg)

**Erklärung zur Grafik:** Wärmeübertragung und Hauptsätze bilden die Grundlage für Phasenübergänge; die Grafik fasst Energiebilanz und latente Wärme zusammen.

**Tripelpunkt**: Alle drei Phasen koexistieren. Für Wasser: T_triple = 273,16 K, p_triple = 611,7 Pa.

**Kritischer Punkt**: Oberhalb von T_krit und p_krit gibt es keine Unterscheidung mehr zwischen flüssig und gasförmig (überkritisches Fluid). Für Wasser: T_krit = 647 K, p_krit = 221 bar.

Wasser: Die Schmelzkurve hat eine negative Steigung (einzigartig) — Erhöhung des Drucks senkt den Schmelzpunkt (ermöglicht z. B. Schlittschuhlaufen, Gletscherbewegung).

## Latentwärmen (Phasenübergangswärme)

Bei Phasenübergängen ändert sich die Temperatur nicht, obwohl Wärme zu- oder abgeführt wird. Die Energie geht in die Änderung der potentiellen Energie (Bindungen zwischen Teilchen).

**Schmelzwärme (Enthalpie der Fusion):** Q = m · L_f
**Verdampfungswärme (Enthalpie der Vaporisation):** Q = m · L_v

Die Verdampfungswärme ist etwa 7-mal größer als die Schmelzwärme!

## Dampfdruck und Siedepunkt

Der **Dampfdruck** p_D(T) ist der Gleichgewichtsdruck des Dampfes über einer Flüssigkeit. Er steigt mit der Temperatur (Clausius-Clapeyron-Gleichung). **Sieden** tritt auf, wenn p_D = p_Außen.

Konsequenzen:
- Im Hochgebirge ist p_Außen kleiner → Wasser siedet unter 100 °C (z. B. auf 3000 m Höhe bei ≈ 90 °C).
- Im Dampfkochtopf wird der Druck erhöht → Siedepunkt steigt → Lebensmittel garen bei höherer Temperatur.
- **Autoklav**: Sterilisation bei 121 °C / 2 bar → alle Keime (inkl. Sporen) werden abgetötet.

## Klinisch wichtige Gesetze

**Henry-Gesetz**: Die im Blut gelöste Gasmenge ist proportional zum Partialdruck des Gases über der Flüssigkeit: c = k_H · p. Klinische Relevanz:
- Taucherkrankheit (Dekompressionskrankheit): Bei schnellem Auftauchen fällt der Stickstoffpartialdruck rasch → N₂ bildet Gasblasen im Gewebe/Blut → Embolien, Schmerzen.
- Hyperbare Sauerstofftherapie: 100 % O₂ bei erhöhtem Druck → mehr O₂ im Blutplasma gelöst.

**Verdunstungskühlung (Schwitzen)**: Pro Gramm Schweiß werden bei 37 °C ≈ 2430 J abgeführt. Bei 1 L/h Schweißproduktion: Kühlleistung ≈ 675 W. Essentiell für Thermoregulation bei Sport.

## Rechenbeispiele

**Beispiel 1 — Boyle-Mariotte (isotherme Kompression):**
Spritze mit V₁ = 50 mL Luft bei p₁ = 1 bar. Der Kolben wird auf V₂ = 10 mL komprimiert (T = const):
p₂ = p₁ · V₁/V₂ = 1 × 50/10 = 5 bar. Anwendung: Druckinfusor in der Notfallmedizin — Infusionsbeutel wird unter Druck gesetzt, um Flüssigkeit schneller zu infundieren.

**Beispiel 2 — Eis schmelzen und dann erwärmen (Kombinationsaufgabe):**
500 g Eis bei 0 °C → flüssiges Wasser bei 37 °C. Schritt 1: Schmelzen: Q₁ = 0,5 × 334 000 = 167 000 J.
Schritt 2: Erwärmen: Q₂ = 0,5 × 4180 × 37 = 77 330 J.
Gesamt: Q = Q₁ + Q₂ = 244 330 J ≈ 244 kJ. Der Schmelzvorgang braucht mehr als doppelt so viel Energie wie das anschließende Erwärmen um 37 K!

**Beispiel 3 — Henry-Gesetz und Tauchen:**
An der Oberfläche (1 bar): c(N₂) = k_H × 0,79 bar (N₂-Anteil der Luft). In 30 m Tiefe (4 bar): c(N₂) = k_H × 0,79 × 4 = 4-fache N₂-Konzentration im Blut. Dekompression nötig: Aufstiegsgeschwindigkeit ≤ 9 m/min mit Sicherheitsstopp auf 5 m für 3 Minuten (Standardtauchtabelle).

**Beispiel 4 — Gay-Lussac (isobare Expansion einer Lunge):**
Einatmungsvolumen V₁ = 500 mL bei T₁ = 20 °C = 293 K (kalte Außenluft). In der Lunge auf T₂ = 37 °C = 310 K erwärmt (p = const):
V₂ = V₁ × T₂/T₁ = 500 × 310/293 = 529 mL. Die eingeatmete Luft expandiert um ≈ 6 % beim Erwärmen in der Lunge.

## Klinische Vertiefung

**Dampfsterilisation (Autoklav):** Standard-Sterilisationszyklus: 121 °C / 2 bar / 15 min für chirurgische Instrumente. Für Prionen-kontaminiertes Material (Creutzfeldt-Jakob): 134 °C / 3 bar / 18 min. Das Prinzip: Erhöhter Dampfdruck verschiebt den Siedepunkt nach oben → feuchte Hitze denaturiert Proteine und DNA effizienter als trockene Hitze (trockene Sterilisation: 180 °C / 30 min nötig).

**Pulsoxymetrie und Gaspartialdrücke:** Die O₂-Sättigung des Hämoglobins hängt vom pO₂ ab (Sauerstoff-Bindungskurve). Nach dem Henry-Gesetz bestimmt der pO₂ auch die physikalisch gelöste O₂-Menge im Plasma (≈ 0,3 mL O₂ pro 100 mL Blut bei pO₂ = 100 mmHg). Bei hyperbarer Therapie (3 bar reiner O₂) steigt der physikalisch gelöste Anteil auf ≈ 6 mL/100 mL — genug, um Gewebe auch ohne Hämoglobin zu versorgen.

**Sublimation in der Medizin (Gefriertrocknung):** Impfstoffe und Blutplasma werden durch Lyophilisation haltbar gemacht: Einfrieren → Druck senken unter den Tripelpunkt → Eis sublimiert direkt zu Dampf. Das Produkt behält seine Struktur (Proteine bleiben funktionsfähig) und ist bei Raumtemperatur lagerbar. Beim Rekonstituieren wird Wasser zugefügt — die ursprüngliche Lösung entsteht wieder.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Ideales Gas (pV=nRT), isochor (V const → p/T const), isobar (p const → V/T const), isotherm (T const → pV const), Gay-Lussac, Boyle-Mariotte.

**Ergänzend vertiefend:** Adiabatisch; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- "Gas bei 27 °C und 2 bar, isochor auf 127 °C erhitzt — neuer Druck?" → p₂ = 2 × (400/300) ≈ 2,67 bar
- "Energie zum Schmelzen von 200 g Eis?" → Q = 0,2 · 334 000 = 66 800 J
- "Warum siedet Wasser im Autoklav bei 121 °C?" → Außendruck 2 bar verschiebt Siedepunkt nach oben

**Typische Prüfungsfallen / Verwechslungen:**
- Ideales Gasgesetz: **T immer in Kelvin** einsetzen! (27 °C → 300 K, 127 °C → 400 K)
- Boyle-Mariotte (p·V = const) gilt nur bei **konstanter Temperatur** (isotherm)
- Latentwärme (Q = m·L): während des Phasenübergangs bleibt T konstant — keine Temperaturänderung!

**Prüfungsrelevante Zahlen/Fakten:**
- L_Schmelz(Eis) = 334 kJ/kg; L_Verdampf(Wasser, 100 °C) = 2260 kJ/kg (≈ 7-mal größer!)
- Autoklav: 121 °C / 2 bar (Standard); 134 °C / 3 bar (für Prionen)
- Henry-Gesetz: c = k_H · p; in 30 m Tiefe (4 bar) → 4× mehr N₂ im Blut gelöst
- Normvolumen ideales Gas: V_m = 22,4 L/mol bei 0 °C und 1 atm

---

## Zusammenfassung (ultrakompakt)

- **Ideales Gasgesetz**: pV = nRT; R = 8,314 J/(mol·K); Sonderfälle: Boyle (T=const), Gay-Lussac (V=const), Charles (p=const)
- **Latentwärme**: Q = m·L; während Phasenübergang konstante Temperatur; L_Schmelz(Eis) = 334 kJ/kg, L_Verdampf(Wasser) = 2260 kJ/kg
- **Phasendiagramm**: Tripelpunkt (alle 3 Phasen koexistieren); kritischer Punkt (flüssig und gasförmig ununterscheidbar)
- **Henry-Gesetz**: c(gelöst) = k_H·p; N₂-Lösung im Blut bei 4 bar (30 m Tiefe) → 4× erhöht → Dekompressionspflicht
- **Autoklav**: 121 °C bei 2 bar (Siedepunkt Wasser erhöht); 134 °C bei 3 bar für Prionen
- **Gefriertrocknung (Lyophilisation)**: Unter Tripelpunkt-Druck → Eis sublimiert → Protein-/Impfstofferhalt bei RT`,

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
        "pV = nRT — die universelle Zustandsgleichung des idealen Gases; R = 8,314 J/(mol·K).",
        "Normvolumen: 1 mol ideales Gas = 22,4 L bei 0 °C und 1 atm.",
        "Siedepunkt hängt vom Außendruck ab: höherer Druck → höherer Siedepunkt.",
        "Autoklav: 121 °C bei 2 bar → Sterilisation (Sporenabtötung).",
        "Im Hochgebirge siedet Wasser unter 100 °C (p_Außen < 1 atm).",
        "Verdampfungswärme Wasser (100 °C): 2260 kJ/kg >> Schmelzwärme: 334 kJ/kg.",
        "Henry-Gesetz: c = k_H · p — Gaslöslichkeit proportional zum Partialdruck.",
        "Taucherkrankheit: schnelles Auftauchen → N₂-Blasenbildung im Blut → Embolie.",
        "Schweiß-Verdunstung: ≈ 2430 J/g — effektivster Kühlmechanismus des Körpers.",
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
          options: ["3 bar", "2,67 bar", "4 bar", "1,5 bar", "2 bar"],
          correctIndex: 1,
          explanation:
            "Bei isochorer (V = const) Zustandsänderung gilt: p₁/T₁ = p₂/T₂ (aus pV = nRT mit V, n = const). T₁ = 27 + 273 = 300 K, T₂ = 127 + 273 = 400 K. Also p₂ = p₁ × T₂/T₁ = 2 bar × 400/300 = 2 × 4/3 ≈ 2,67 bar. Wichtig: Temperaturen müssen in Kelvin eingesetzt werden!",
          hints: [
            "Isochor: V = const. Aus pV = nRT folgt p/T = const, also p₁/T₁ = p₂/T₂.",
            "Temperaturen in Kelvin umrechnen: T₁ = 300 K, T₂ = 400 K. Dann p₂ berechnen.",
          ],
          tags: ["ideales-gas", "isochor", "zustandsänderung"],
          difficulty: 2,
        },
        {
          question:
            "Wie viel Energie ist nötig, um 200 g Eis (0 °C) vollständig zu Wasser (0 °C) zu schmelzen? (L_Schmelz = 334 kJ/kg)",
          options: ["334 J", "66 800 J", "334 000 J", "1670 J", "33 400 J"],
          correctIndex: 1,
          explanation:
            "Die Schmelzwärme berechnet sich mit Q = m · L_f = 0,2 kg × 334 000 J/kg = 66 800 J = 66,8 kJ. Während des Schmelzens bleibt die Temperatur bei 0 °C konstant — die gesamte Energie geht in das Aufbrechen der Wasserstoffbrücken im Eiskristall. Erst danach, wenn alles Eis geschmolzen ist, kann die Temperatur des Wassers steigen.",
          hints: [
            "Latentwärme beim Schmelzen: Q = m · L_f. m = 200 g = 0,2 kg einsetzen.",
            "L_f = 334 kJ/kg = 334 000 J/kg. Berechnen: 0,2 × 334 000.",
          ],
          tags: ["schmelzwärme", "phasenübergang", "eis"],
          difficulty: 1,
        },
        {
          question:
            "Ein Taucher atmet in 30 m Tiefe Druckluft. Der N₂-Partialdruck in seinem Blut steigt auf das Vierfache des Normalwerts. Warum darf er nicht sofort auftauchen?",
          options: [
            "Weil der Auftrieb zu groß wäre",
            "Weil der rasche Druckabfall nach Henry-Gesetz zur Blasenbildung von N₂ im Blut führt",
            "Weil er sonst zu schnell Sauerstoff verliert",
            "Weil das Trommelfell platzen würde",
            "Weil bei 30 m Tiefe kein Blutfluss möglich ist",
          ],
          correctIndex: 1,
          explanation:
            "Nach dem Henry-Gesetz (c = k_H · p) hat sich in 30 m Tiefe (Druck ≈ 4 bar) etwa viermal mehr N₂ im Blut und Gewebe gelöst als an der Oberfläche. Bei schnellem Auftauchen fällt der Druck rasch ab; das gelöste N₂ kann nicht schnell genug durch die Lunge abgeatmet werden und bildet Gasblasen (analog: geöffnete Sprudelflasche). Diese Blasen können Embolien, Gelenkschmerzen (Bends) und neurologische Ausfälle verursachen. Therapie: sofortige Rekompression in der Überdruckkammer, anschließend langsames Dekomprimieren mit Stopps nach Tauchtabellen.",
          hints: [
            "Henry-Gesetz: mehr Druck → mehr Gas löst sich. Bei Druckabfall: Was passiert mit dem gelösten Gas?",
            "Analogie: Öffnet man eine Sprudelflasche langsam oder schnell — was passiert mit dem gelösten CO₂?",
          ],
          tags: ["henry-gesetz", "tauchen", "dekompression"],
          difficulty: 2,
        },
        {
          question:
            "Warum sterilisiert ein Autoklav bei 121 °C statt bei 100 °C, und wie wird diese Temperatur erreicht?",
          options: [
            "Der Autoklav heizt mit Mikrowellen, die 121 °C erzeugen",
            "Durch Erhöhung des Dampfdrucks auf 2 bar steigt der Siedepunkt auf 121 °C, was Sporenabtötung ermöglicht",
            "Bei 121 °C gefriert Wasser und tötet Keime durch Eiskristallbildung",
            "Der Autoklav nutzt Ultraschall, der 121 °C erzeugt",
            "100 °C reicht aus; 121 °C ist nur eine Konvention",
          ],
          correctIndex: 1,
          explanation:
            "Wasser siedet, wenn sein Dampfdruck den Außendruck erreicht. Bei erhöhtem Außendruck (2 bar im Autoklav) muss Wasser stärker erhitzt werden, bis der Dampfdruck wieder 2 bar erreicht — das ist bei ≈ 121 °C der Fall. Diese Temperatur ist für die Sterilisation notwendig, weil bakterielle Endosporen (z. B. von Clostridium botulinum) bei 100 °C unter Umständen überleben. Bei 121 °C / 2 bar / 15–20 min werden alle Mikroorganismen einschließlich resistenter Sporen sicher abgetötet. Das Prinzip basiert direkt auf der Druckabhängigkeit des Siedepunkts.",
          hints: [
            "Siedepunkt des Wassers hängt vom Außendruck ab: höherer Druck → höherer Siedepunkt.",
            "Warum reicht 100 °C nicht zur Sterilisation? Bakteriensporen überleben kochendes Wasser.",
          ],
          tags: ["siedepunkt", "autoklav", "dampfdruck"],
          difficulty: 2,
        },
        {
          question:
            "1 kg Wasser bei 100 °C soll vollständig verdampft werden. Wie viel Energie wird dafür benötigt? (L_v = 2260 kJ/kg)",
          options: ["2260 J", "2 260 000 J", "226 000 J", "22 600 J", "334 000 J"],
          correctIndex: 1,
          explanation:
            "Verdampfungswärme: Q = m · L_v = 1 kg × 2 260 000 J/kg = 2 260 000 J = 2260 kJ. Dies ist die Energie, die bei konstanter Temperatur (100 °C) zugeführt werden muss, um alle intermolekularen Bindungen des flüssigen Wassers zu überwinden und den Phasenübergang flüssig → gasförmig zu vollziehen. Zum Vergleich: Das gleiche Kilogramm Wasser von 0 °C auf 100 °C zu erwärmen braucht nur Q = 1 × 4180 × 100 = 418 000 J = 418 kJ — gut fünfmal weniger.",
          hints: [
            "Verdampfungswärme: Q = m · L_v. Einheit von L_v beachten: J/kg oder kJ/kg.",
            "m = 1 kg, L_v = 2 260 000 J/kg (oder 2260 kJ/kg).",
          ],
          tags: ["verdampfungswärme", "phasenübergang", "wasser"],
          difficulty: 1,
        },
      ],
    },
  ],
};
