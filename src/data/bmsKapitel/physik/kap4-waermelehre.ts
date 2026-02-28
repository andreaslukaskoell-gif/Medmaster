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
      diagram: "temperature-scales",
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

Stell dir vor, du kochst Wasser fuer Tee. Du merkst: Es dauert ziemlich lange, bis das Wasser heiss wird. Ein Metalltopf dagegen wird viel schneller heiss. Warum? Das liegt an der **Waermekapazitaet** -- Wasser braucht besonders viel Energie, um warm zu werden. Genau das macht Wasser so wichtig fuer deinen Koerper: Es haelt die Temperatur stabil.

**In diesem Kapitel lernst du:**
- wie du zwischen Celsius, Kelvin und Fahrenheit umrechnest
- was Waermekapazitaet bedeutet und warum Wasser so langsam warm wird
- warum sich Dinge beim Erwaermen ausdehnen (z. B. Bruecken im Sommer)
- wie du Mischungstemperaturen berechnest (heisses + kaltes Wasser)
- warum Wasser bei 4 °C am schwersten ist und Seen von oben zufrieren

---

{{DIAGRAM:thermodynamics}}

{{DIAGRAM:temperature-scales}}

## Temperaturskalen

**Temperatur** misst, wie stark sich die kleinen Teilchen in einem Stoff bewegen. Es gibt drei wichtige Skalen:

**Celsius (°C):** Die Alltagsskala. 0 °C = Wasser gefriert, 100 °C = Wasser kocht.

**Kelvin (K):** Die Skala der Physik. Der Nullpunkt (0 K = −273 °C) ist der kaelteste Punkt, der moeglich ist. Dort bewegen sich die Teilchen nicht mehr.

Umrechnung: **T [K] = T [°C] + 273**

Koerpertemperatur: 37 °C = 310 K. Zimmertemperatur: 20 °C = 293 K.

**Fahrenheit (°F):** In den USA ueblich. T [°F] = T [°C] x 1,8 + 32. Normal: 98,6 °F = 37 °C.

> **Merke:** Kelvin = Celsius + 273. Kelvin ist nie negativ. Fuer Temperaturdifferenzen gilt: 1 K = 1 °C.

---

## Thermische Ausdehnung

Wenn du etwas erwaermst, bewegen sich die Teilchen schneller. Sie brauchen mehr Platz -- der Koerper dehnt sich aus. Das ist der Grund, warum Bruecken **Dehnungsfugen** haben: Im Sommer sind sie laenger als im Winter.

Die Formel fuer die Laengenaenderung:

**DeltaL = alpha x L0 x DeltaT**

- L0 = Ausgangslaenge
- DeltaT = Temperaturerhoehung
- alpha = Ausdehnungskoeffizient (haengt vom Material ab)

Aluminium dehnt sich staerker aus als Stahl. Fuer Volumen gilt: Die Ausdehnung ist etwa dreimal so gross (gamma = 3 x alpha).

**Anomalie des Wassers:** Wasser ist bei **4 °C am dichtesten** -- nicht bei 0 °C! Zwischen 0 °C und 4 °C schrumpft Wasser beim Erwaermen. Deshalb frieren Seen **von oben** zu: Das schwere 4-°C-Wasser sinkt nach unten, und die Fische ueberleben im Winter.

> **Merke:** Wasser hat bei 4 °C die groesste Dichte. Seen frieren von oben -- das schuetzt die Tiere am Grund.

---

## Waerme und Waermekapazitaet

**Waerme Q** ist Energie, die von warm nach kalt fliesst. Die Einheit ist Joule [J].

Die **spezifische Waermekapazitaet c** sagt dir, wie viel Energie 1 kg eines Stoffes braucht, um 1 Grad waermer zu werden:

**Q = m x c x DeltaT**

Wasser hat c = 4180 J/(kg·K) -- das ist sehr viel. Deshalb dauert es lange, einen Topf Wasser zu erwaermen. Metalle (z. B. Eisen, c = 450) werden viel schneller heiss.

**Mischungstemperatur:** Wenn du heisses und kaltes Wasser mischst, liegt die Endtemperatur dazwischen:

**T_m = (m1 x T1 + m2 x T2) / (m1 + m2)**

Beispiel: 200 g heisses Wasser (80 °C) + 300 g kaltes Wasser (20 °C) ergibt T_m = 44 °C.

> **Merke:** Q = m x c x DeltaT. Wasser hat die hoechste Waermekapazitaet aller normalen Fluessigkeiten. Deshalb ist Wasser der beste Waermepuffer.

---

## MedAT-Fokus

**Zur gezielten Pruefungsvorbereitung:**

**Haeufige Fragen:**
- “37 °C in Kelvin?” -- T = 37 + 273 = 310 K
- “500 g Wasser um 60 K erwaermen?” -- Q = 0,5 x 4180 x 60 = 125 400 J
- “Mischtemperatur?” -- T_m = (m1 x T1 + m2 x T2) / (m1 + m2)

**Typische Fallen:**
- Temperaturdifferenzen sind in Kelvin und Celsius **gleich** (DeltaT = 10 K = 10 °C)
- Dichteanomalie: Wasser ist bei **4 °C** am dichtesten (nicht bei 0 °C!)
- c (Waermekapazitaet = Speichern) nicht verwechseln mit Waermeleitfaehigkeit (Transport)

---

## Zusammenfassung (ultrakompakt)

- **Temperaturskalen**: T[K] = T[°C] + 273; T[°F] = T[°C] x 1,8 + 32
- **Waermemenge**: Q = m x c x DeltaT; c(Wasser) = 4180 J/(kg·K)
- **Ausdehnung**: DeltaL = alpha x L0 x DeltaT; Volumen: gamma = 3 x alpha
- **Mischtemperatur**: T_m = (m1 x T1 + m2 x T2) / (m1 + m2)
- **Dichteanomalie**: Wasser bei 4 °C am dichtesten; Seen frieren von oben`,
      contentExtended: `## Einleitung

Du legst ein Fieberthermometer unter die Zunge und wartest. Nach einer Minute zeigt es 38,5 Grad Celsius. Aber was genau misst das Thermometer eigentlich? Temperatur ist ein Maß für die mittlere Bewegungsenergie der Teilchen -- und **Wärme** ist die Energie, die dabei von einem wärmeren zu einem kälteren Körper fließt. Stell dir einen Kochtopf auf dem Herd vor: Die Flamme liefert Wärme Q, das Wasser nimmt sie auf, und die Temperatur steigt -- wie schnell, hängt von der spezifischen Wärmekapazität ab. Wasser braucht besonders viel Energie pro Grad, weshalb es so lange dauert, einen Topf zum Kochen zu bringen. Genau diese Eigenschaft macht Wasser zum idealen Temperaturpuffer im menschlichen Körper.

**In diesem Kapitel lernst du:**
- wie Celsius, Kelvin und Fahrenheit zusammenhängen und wann du welche Skala brauchst
- was spezifische Wärmekapazität bedeutet und warum Wasser der beste Wärmepuffer der Natur ist
- warum sich Körper bei Erwärmung ausdehnen und was die Dichteanomalie des Wassers für Ökosysteme bedeutet
- wie man Mischungstemperaturen berechnet (Energieerhaltung bei gleichen und verschiedenen Stoffen)
- warum Temperaturdifferenzen in Kelvin und Celsius identisch sind, absolute Werte aber nicht

**Kontext — worum geht es und wofür brauchst du das?**
Hier geht es um **Temperatur und Wärmeübertragung**: Wie misst man Temperatur (Skalen), wie viel Energie braucht Erwärmung (Wärmekapazität), und wie dehnen sich Körper aus (α, Dichteanomalie)? Klinisch: Fieber, Hypothermie, Wärmetherapie, Kalorimetrie. Du brauchst es für Wärmeübertragung und Thermodynamik (Hauptsätze) und für MedAT-Aufgaben zu Q, c und ΔT.

---

{{DIAGRAM:thermodynamics}}

{{DIAGRAM:temperature-scales}}

## Temperaturskalen



Temperatur ist ein Maß für die mittlere kinetische Energie der Teilchen eines Stoffes. Drei Skalen sind praxisrelevant:

**Celsius (°C)**: Die historische Alltagsskala. Der Nullpunkt liegt beim Gefrierpunkt des Wassers (bei 1 atm), 100 °C beim Siedepunkt. Negative Werte sind möglich.

**Kelvin (K)**: Die SI-Einheit der Thermodynamik. Der Nullpunkt (0 K = −273,15 °C) ist der absolute Nullpunkt – die Temperatur, bei der die thermische Bewegung der Teilchen aufhört. Negative Kelvin-Temperaturen existieren im klassischen Sinn nicht.

Umrechnungsformel: **T [K] = T [°C] + 273,15**

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

Wasser hat die höchste spezifische Wärmekapazität aller gängigen Flüssigkeiten – ein biologisch zentraler Fakt. Der menschliche Körper (≈ 60 % Wasser) kann große Wärmemengen aufnehmen/abgeben ohne starke Temperaturschwankungen.



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

**Beispiel 2 — Mischungstemperatur:**
200 g Wasser (80 °C) + 300 g Wasser (20 °C): T_m = (200 · 80 + 300 · 20) / (200 + 300) = (16000 + 6000) / 500 = 44 °C.

**Beispiel 3 — Energie zum Erwärmen eines Patienten:**
Patient (70 kg, c ≈ 3500 J/(kg·K)) von 34 °C auf 37 °C erwärmen (Hypothermie-Behandlung):
Q = 70 · 3500 · 3 = 735.000 J = 735 kJ ≈ 176 kcal. Diese Energiemenge muss der Körper durch Metabolismus, Wärmedecken oder Infusionserwärmer aufbringen.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Häufige Fragen:**
- “Welche Temperatur in K entspricht 37 °C?” → T[K] = 37 + 273,15 = 310 K
- “Wie viel Energie braucht man, um 500 g Wasser um 60 K zu erwärmen?” → Q = 0,5 · 4180 · 60 = 125 400 J
- “Mischtemperatur zweier Wassermengen?” → T_m = (m₁·T₁ + m₂·T₂) / (m₁ + m₂)

**Typische Prüfungsfallen / Verwechslungen:**
- **Thermische Ausdehnung:** Ursache = mittlere Teilchengeschwindigkeit ↑ → heftigere Stöße → mittlerer Abstand ↑. Falsch: „Wärme braucht Platz”, „Körper wird weicher”, „Gase treiben aus dem Körper”.
- **Anomalie des Wassers:** Dichte bei **4 °C** am größten; Seen frieren **von oben** zu (nicht von unten). Nicht: „Wasser verhält sich normal” oder „Dichte bei 0 °C am größten”.
- **ΔT:** Temperaturdifferenzen sind in Kelvin und Celsius **gleich** (ΔT = 10 K = 10 °C). Nur bei absoluten Werten: T in Formeln (z. B. ideales Gas) in **Kelvin** einsetzen.
- Wärmekapazität **c** [J/(kg·K)] = Speichern von Wärme — **nicht** verwechseln mit Wärmeleitfähigkeit **λ** [W/(m·K)] = Transport von Wärme.
- Dichteanomalie: Wasser ist bei **4 °C** am dichtesten (nicht bei 0 °C!). Körpertemperatur **37 °C = 310 K** (nicht 273 + 37 = 310 — genau 310,15 K).

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
      diagram: "thermodynamics",
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

Warum frierst du bei Wind schneller als bei Windstille, obwohl es gleich kalt ist? Und warum waermt eine dicke Daunenjacke besser als ein duennes T-Shirt? Es gibt drei Wege, wie Waerme von einem Ort zum anderen kommt: **Leitung**, **Stroemung** (Konvektion) und **Strahlung**. Dein Koerper nutzt alle drei gleichzeitig.

**In diesem Kapitel lernst du:**
- wie Waerme durch Material geleitet wird (z. B. Metalltopf vs. Holzloeffel)
- warum warme Luft aufsteigt und was das mit der Heizung zu tun hat (Konvektion)
- warum jeder Koerper Waerme abstrahlt und wie das von der Temperatur abhaengt
- wie dein Koerper seine 37 °C haelt (Schwitzen, Frieren, Blutfluss)

---

{{DIAGRAM:temperature-scales}}

{{DIAGRAM:thermodynamics}}

## Waermeleitung

Wenn du einen Metalloeffel in heisse Suppe stellst, wird der Griff schnell heiss. Die Waerme wandert durch das Material -- das ist **Waermeleitung**. Die Formel dafuer:

**Waermestrom = lambda x A x DeltaT / d**

- lambda = Waermeleitfaehigkeit (wie gut ein Material Waerme leitet)
- A = Flaeche
- DeltaT = Temperaturdifferenz
- d = Dicke der Schicht

Metalle leiten Waerme sehr gut (hohe lambda). Luft leitet Waerme schlecht -- deshalb isolieren Daunenjacken so gut: Sie schliessen viel Luft ein.

> **Merke:** Gute Waermeleiter: Metalle. Gute Isolatoren: Luft, Fett, Wolle. Je dicker die Schicht, desto weniger Waerme geht durch.

---

## Konvektion (Stroemung)

Bei der Konvektion wird Waerme durch bewegte Luft oder Fluessigkeit transportiert.

**Natuerliche Konvektion:** Warme Luft steigt auf, kalte sinkt ab. So funktioniert eine Heizung -- die warme Luft verteilt sich im Raum.

**Erzwungene Konvektion:** Ein Ventilator oder eine Pumpe bewegt die Luft oder Fluessigkeit. Dein Blutkreislauf ist ein gutes Beispiel: Das Blut transportiert Waerme vom Koerperinneren zur Haut.

Bei Kaelte verengen sich die Blutgefaesse in der Haut -- so verlierst du weniger Waerme. Bei Hitze weiten sie sich.

---

## Waermestrahlung

Jeder Koerper gibt unsichtbare Waermestrahlung (Infrarot) ab. Je heisser der Koerper, desto mehr strahlt er ab. Die Formel:

**P = sigma x epsilon x A x T hoch 4**

Wichtig: T muss in **Kelvin** eingesetzt werden! Weil T hoch 4 in der Formel steht, wirkt sich schon eine kleine Temperaturaenderung stark aus.

Waermestrahlung braucht kein Material -- sie funktioniert auch im leeren Raum (Vakuum). So kommt die Waerme der Sonne zu uns. Der Mensch verliert etwa die Haelfte seiner Koerperwaerme durch Strahlung.

> **Merke:** Drei Wege der Waermeuebertragung: Leitung (durch Material), Konvektion (durch Stroemung), Strahlung (durch Infrarot, auch im Vakuum).

---

## MedAT-Fokus

**Zur gezielten Pruefungsvorbereitung:**

**Haeufige Fragen:**
- "Waermestrom durch eine Fettschicht berechnen?" -- Formel: lambda x A x DeltaT / d
- "Wie aendert sich Strahlung bei Fieber?" -- P ist proportional zu T hoch 4, schon 5 K mehr ergibt ca. 6-7 % mehr Strahlung

**Typische Fallen:**
- Stefan-Boltzmann: T immer in **Kelvin** (nicht °C!)
- Leitung braucht Materialkontakt; **Strahlung** funktioniert auch im Vakuum
- lambda = Waermeleitfaehigkeit (Transport), nicht verwechseln mit c = Waermekapazitaet (Speichern)

---

## Zusammenfassung (ultrakompakt)

- **Leitung**: Waermestrom = lambda x A x DeltaT / d; Metalle leiten gut, Luft isoliert
- **Konvektion**: warme Luft steigt auf; Blutkreislauf = koerpereigene Konvektion
- **Strahlung**: P = sigma x epsilon x A x T hoch 4; Mensch strahlt bei ca. 9,4 Mikrometer (Infrarot)
- **Koerper**: 50 % Waermeverlust durch Strahlung, 25 % Konvektion, 25 % Verdunstung
- **Isolation**: dicke Kleidung, Fettschicht, ruhende Luft = weniger Waermeverlust`,
      contentExtended: `## Einleitung

Warum friert man bei Wind viel schneller als bei Windstille -- obwohl die Lufttemperatur gleich ist? Und warum isoliert eine Daunenjacke besser als ein dünner Pullover, obwohl beide aus Stoff bestehen? Die Antworten liegen in den drei grundlegenden Wegen der **Wärmeübertragung**: Leitung (Konduktion), Mitführung durch strömende Medien (Konvektion) und Strahlung. Der menschliche Körper nutzt alle drei gleichzeitig, um seine Kerntemperatur konstant bei 37 Grad Celsius zu halten.

**In diesem Kapitel lernst du:**
- wie Wärmeleitung durch Material funktioniert und warum Fett und Luft gute Isolatoren sind
- worin sich natürliche und erzwungene Konvektion unterscheiden (Heizung vs. Blutkreislauf)
- warum Strahlungsleistung mit der vierten Potenz der Temperatur steigt und was das für Fieber bedeutet
- wie der Gegenstrom-Wärmeaustausch in Extremitäten Wärmeverlust minimiert
- warum Frühgeborene Inkubatoren brauchen und wie Infrarot-Thermografie funktioniert

**Kontext — worum geht es und wofür brauchst du das?**
Hier geht es um **wie Wärme von einem Ort zum anderen gelangt**: Leitung durch Material, Mitführung durch strömende Luft/Flüssigkeit, Strahlung (Infrarot). Im Körper: Isolierung durch Fett, Vasokonstriktion/Vasodilatation, Schwitzen. Du brauchst es für Thermodynamik (Hauptsätze) und für MedAT-Aufgaben zu λ, Stefan-Boltzmann und Gegenstrom.

---

{{DIAGRAM:temperature-scales}}

{{DIAGRAM:thermodynamics}}

## Wärmeleitung (Konduktion)



Bei der Wärmeleitung wird Energie durch direkte Wechselwirkung benachbarter Teilchen übertragen, ohne dass Materie transportiert wird. Das **Fouriersche Gesetz** beschreibt den stationären Wärmestrom:

**Q̇ = λ · A · ΔT / d**

- Q̇: Wärmestrom [W]
- λ: Wärmeleitfähigkeit [W/(m·K)] — materialspezifisch
- A: Querschnittsfläche [m²]
- ΔT: Temperaturdifferenz [K]
- d: Schichtdicke [m]

**Formelklartext:** Q̇ = λ·A·ΔT/d heißt: Der **Wärmestrom** (Leistung in Watt) durch eine Schicht ist proportional zur **Fläche** A und zur **Temperaturdifferenz** ΔT, und **umgekehrt proportional** zur **Dicke** d. Hohes λ (Metalle) → viel Wärme pro Zeit; niedriges λ (Luft, Fett) → gute Isolierung. **Einheiten:** [λ]·[A]·[ΔT]/[d] = (W/(m·K))·m²·K/m = W ✓. **Nicht verwechseln:** λ = Wärmeleitfähigkeit (Transport); c = spezifische Wärmekapazität (Speichern).

Metalle leiten Wärme gut (hohe λ), Gase und Isolatoren schlecht. Körperfett wirkt als Wärmeisolator (niedrige λ). Verbände aus Wolle oder Schaumstoff halten Körperwärme, weil eingeschlossene Luft (λ ≈ 0,026) schlecht leitet.

Der **Widerstand** R_th = d/(λ·A) ist das thermische Analogon zum elektrischen Widerstand; Schichten können wie Widerstände in Reihe addiert werden (Bauphysik, Kleidung).



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

> **Merke:** Der erste Hauptsatz der Thermodynamik (Energieerhaltung): ΔU = Q + W. Die innere Energie eines Systems ändert sich durch Wärmezufuhr (Q) und/oder verrichtete Arbeit (W).

> **Merke:** Wärmekapazität c gibt an, wie viel Energie nötig ist, um 1 kg eines Stoffes um 1 K zu erwärmen: Q = m · c · ΔT. Wasser hat mit c = 4,18 kJ/(kg·K) eine besonders hohe Wärmekapazität — deshalb stabilisiert es das Körperklima.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Häufige Fragen:**
- "Wärmestrom durch Fettschicht: λ = 0,2, A = 0,5 m², ΔT = 4 K, d = 2 cm?" → Q̇ = 0,2 · 0,5 · 4 / 0,02 = 20 W
- "Wie ändert sich die Strahlungsleistung bei Fieber 37 → 42 °C?" → P ∝ T⁴; (315/310)⁴ ≈ 1,066 → +6,6 %
- "Bei welcher Wellenlänge strahlt der Mensch maximal?" → λ_max = 2898/310 ≈ 9,4 μm (mittleres Infrarot)

**Typische Prüfungsfallen / Verwechslungen:**
- Stefan-Boltzmann: T **unbedingt in Kelvin** einsetzen (nicht °C!)
- Wärmeleitung (Konduktion) braucht Materialkontakt; **Strahlung** funktioniert auch im Vakuum
- ε(Menschliche Haut) ≈ 0,97 — fast idealer Schwarzkörper im Infrarot, aber nicht exakt 1

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
      diagram: "thermodynamics",
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

Warum wird dein Tee kalt, aber nie von selbst wieder heiss? Und warum kann kein Motor der Welt alle Waerme in Bewegung umwandeln? Die Antwort geben die **Hauptsaetze der Thermodynamik**. Der erste sagt: Energie geht nie verloren. Der zweite sagt: Aber Waerme fliesst immer nur von warm nach kalt -- nie umgekehrt.

**In diesem Kapitel lernst du:**
- warum Energie nie verschwindet (1. Hauptsatz)
- warum Waerme immer von warm nach kalt fliesst (2. Hauptsatz)
- was der Carnot-Wirkungsgrad ist und wie du ihn berechnest
- was bei verschiedenen Prozessen passiert (gleiches Volumen, gleicher Druck, gleiche Temperatur, keine Waerme)

---

{{DIAGRAM:thermodynamics}}

{{DIAGRAM:temperature-scales}}

## Nullter Hauptsatz

Wenn ein Thermometer die gleiche Temperatur wie dein Koerper hat, sind beide im **thermischen Gleichgewicht**. Das ist die Grundlage jeder Temperaturmessung.

---

## Erster Hauptsatz: Energie geht nie verloren

**DeltaU = Q + W**

- DeltaU = Aenderung der inneren Energie
- Q = zugefuehrte Waerme
- W = Arbeit am System (z. B. Zusammendruecken)

Stell dir einen Fahrradreifen vor: Wenn du die Pumpe drueckst (Arbeit W), wird die Luft waermer (DeltaU steigt). Die Energie verschwindet nicht -- sie wird nur umgewandelt.

Vier wichtige Spezialfaelle:
- **Gleiches Volumen** (isochor): Keine Arbeit moeglich, W = 0. Alle Waerme erhoet die innere Energie: DeltaU = Q
- **Gleicher Druck** (isobar): Das Gas kann sich ausdehnen und Arbeit leisten
- **Gleiche Temperatur** (isotherm): DeltaU = 0, Waerme wird komplett in Arbeit umgewandelt
- **Keine Waerme** (adiabatisch): Q = 0. Wird das Gas zusammengedrueckt, wird es heisser

> **Merke:** DeltaU = Q + W. Energie kann nicht erzeugt oder vernichtet werden -- nur umgewandelt. Eine Maschine, die Energie aus dem Nichts erzeugt (Perpetuum mobile), ist unmoeglich.

---

## Zweiter Hauptsatz: Waerme fliesst nur in eine Richtung

Waerme fliesst **immer** von warm nach kalt -- nie umgekehrt. Das ist wie ein Eiswuerfel im warmen Wasser: Er schmilzt, aber das Wasser gefriert nie von selbst.

**Entropie** ist ein Mass fuer die Unordnung. In einem geschlossenen System nimmt die Unordnung immer zu. Deshalb kann keine Maschine Waerme zu 100 % in Arbeit umwandeln.

Lebewesen scheinen Ordnung zu schaffen (z. B. Zellen bauen). Aber sie sind **offene Systeme** -- sie geben Waerme und Abfall an die Umgebung ab. Insgesamt nimmt die Unordnung trotzdem zu.

---

## Carnot-Wirkungsgrad

Der beste Wirkungsgrad, den ein Motor theoretisch erreichen kann:

**eta = 1 - T_kalt / T_warm**

Wichtig: T muss in **Kelvin** eingesetzt werden!

Beispiel: T_warm = 600 K, T_kalt = 300 K. Dann eta = 1 - 300/600 = 50 %. Das heisst: Maximal die Haelfte der Waerme kann in Arbeit umgewandelt werden. In der Realitaet ist es wegen Reibung noch weniger.

> **Merke:** Carnot-Wirkungsgrad eta = 1 - T_kalt/T_warm. T immer in Kelvin! Je groesser der Temperaturunterschied, desto besser der Wirkungsgrad.

---

## MedAT-Fokus

**Zur gezielten Pruefungsvorbereitung:**

**Haeufige Fragen:**
- "Carnot bei T_warm = 600 K, T_kalt = 300 K?" -- eta = 1 - 300/600 = 50 %
- "Was passiert bei adiabatischer Kompression?" -- Temperatur steigt (Q = 0, W > 0)
- "Was passiert bei isochorer Erwaermung?" -- W = 0, daher DeltaU = Q

**Typische Fallen:**
- Carnot: T immer in **Kelvin** (nicht °C!)
- Perpetuum mobile 1. Art (Energie aus nichts) verletzt den 1. Hauptsatz
- Perpetuum mobile 2. Art (100 % Waerme in Arbeit) verletzt den 2. Hauptsatz

---

## Zusammenfassung (ultrakompakt)

- **0. Hauptsatz**: Thermisches Gleichgewicht -- Grundlage der Temperaturmessung
- **1. Hauptsatz**: DeltaU = Q + W (Energieerhaltung)
- **Spezialfaelle**: isochor (W=0), isobar (p=const), isotherm (DeltaU=0), adiabatisch (Q=0)
- **2. Hauptsatz**: Waerme fliesst nur von warm nach kalt; Entropie nimmt zu
- **Carnot**: eta = 1 - T_kalt/T_warm (T in Kelvin!)
- **Lebewesen**: offene Systeme, verletzen den 2. Hauptsatz nicht`,
      contentExtended: `## Einleitung

Warum wird ein Kaffee kalt, aber nie von selbst wieder heiß? Und warum kann kein Motor der Welt Wärme vollständig in Arbeit umwandeln? Die Antworten liefern die **Hauptsätze der Thermodynamik** -- die grundlegendsten Spielregeln der Energieumwandlung. Der erste Hauptsatz sagt: Energie kann nicht verloren gehen (Energieerhaltung). Der zweite Hauptsatz sagt: Aber sie fließt immer in eine bestimmte Richtung (Entropie nimmt zu). Beide Prinzipien bestimmen auch die Biochemie des Körpers, von der ATP-Synthese bis zur Körperwärme.

**In diesem Kapitel lernst du:**
- was der erste Hauptsatz der Thermodynamik aussagt und wie Wärme, Arbeit und innere Energie zusammenhängen
- warum der zweite Hauptsatz eine Richtung vorgibt und was Entropie anschaulich bedeutet
- warum kein realer Motor den Carnot-Wirkungsgrad erreichen kann und wie man ihn berechnet
- wie sich isochore, isobare, isotherme und adiabatische Prozesse unterscheiden
- warum lebende Organismen keine Widerlegung des zweiten Hauptsatzes sind (offene Systeme)

**Kontext — worum geht es und wofür brauchst du das?**
Hier geht es um **Energie und Richtung** thermischer Prozesse: Der 1. Hauptsatz (Energieerhaltung) und der 2. Hauptsatz (Entropie, irreversibler Ablauf) begrenzen, was möglich ist. Klinisch: ATP-Synthese, Körperwärme, Warum Kühlung Energie braucht. Du brauchst es für Biochemie und für MedAT-Aufgaben zu ΔU, Carnot und Entropie.

---

{{DIAGRAM:thermodynamics}}

{{DIAGRAM:temperature-scales}}

## Nullter Hauptsatz: Thermisches Gleichgewicht



"Wenn zwei Systeme je im thermischen Gleichgewicht mit einem dritten System stehen, dann stehen sie auch untereinander im thermischen Gleichgewicht."

Dies ist die physikalische Grundlage der Temperaturmessung: Ein Thermometer erreicht mit dem Körper ein Gleichgewicht und zeigt dann denselben Temperaturwert an.

## Erster Hauptsatz: Energieerhaltung

**ΔU = Q + W**

- ΔU: Änderung der inneren Energie [J]
- Q: dem System zugeführte Wärme [J] (positiv: Wärme zugeführt)
- W: am System verrichtete Arbeit [J] (positiv: Kompression/Arbeit von außen)

**Formelklartext:** ΔU = Q + W ist die **Energieerhaltung** der Thermodynamik: Die Änderung der inneren Energie des Systems ist gleich der **zugeführten Wärme** plus der **am System verrichteten Arbeit**. Wärme zuführen (Q > 0) oder Kompression (W > 0) erhöht U. **Vorzeichenkonvention prüfen:** Manche Bücher schreiben ΔU = Q − W, wenn W = vom System verrichtete Arbeit (z. B. Expansion). Bei isochoren Prozessen: W = 0 → ΔU = Q; bei adiabatischen: Q = 0 → ΔU = W.

Alternativform: ΔU = Q − W_System (wenn W_System die vom System verrichtete Arbeit ist).

Die innere Energie U ist die Gesamtenergie aller Mikrozustände (Translation, Rotation, Vibration der Teilchen, Bindungsenergien). Bei idealen Gasen gilt U ∝ T.

Spezielle Zustandsänderungen:
- **Isochor** (V = const): W = 0 → ΔU = Q (gesamte Wärme erhöht innere Energie)
- **Isobar** (p = const): W = −p·ΔV → ΔU = Q − p·ΔV

Bei **isobaren Prozessen** (p = const) leistet das System Volumenarbeit gegen den konstanten Außendruck. Klinisch relevant: Lungenbelüftung bei Spontanatmung ist näherungsweise isobar (Atmosphärendruck bleibt konstant, Volumen ändert sich durch Diaphragmakontration).

- **Isotherm** (T = const): ΔU = 0 → Q = −W (beim idealen Gas)
- **Adiabatisch** (Q = 0): ΔU = W (alle Arbeit geht in innere Energie, Temperatur ändert sich)

Kein Perpetuum mobile erster Art kann existieren (Maschine, die Energie erzeugt).



## Zweiter Hauptsatz: Entropie und Irreversibilität

**Formulierungen** (äquivalent):
1. Wärme fließt nicht spontan von kalt nach warm (Clausius).
2. Es gibt keine Maschine, die Wärme vollständig in Arbeit umwandelt (Kelvin-Planck).
3. Die Entropie eines abgeschlossenen Systems nimmt bei irreversiblen Prozessen zu: **ΔS ≥ 0**.

**Entropie S** ist ein Maß für die Unordnung (Anzahl der Mikrozustände W): S = k_B · ln(W) (Boltzmann-Relation). Je größer die Entropie, desto wahrscheinlicher der Zustand.

Folgen:
- Keine thermische Maschine kann 100 % der Wärme in Arbeit umwandeln.
- Biologie scheinbar im Widerspruch? Nein: Lebewesen sind **offene Systeme** — sie exportieren Entropie in die Umgebung (Wärme, Abfall), um intern Ordnung aufrechtzuerhalten.



## Carnotscher Wirkungsgrad

Der maximal erreichbare Wirkungsgrad η einer Wärmekraftmaschine zwischen zwei Temperaturreservoirs:

**η_Carnot = 1 − T_kalt / T_warm**

(T in Kelvin!)

**Formelklartext:** Der **Carnot-Wirkungsgrad** ist der theoretisch **maximale** Wirkungsgrad einer Wärmekraftmaschine zwischen zwei Temperaturreservoirs. Er hängt **nur** von den Temperaturen ab: Je größer T_warm oder je kleiner T_kalt, desto höher η. **Unbedingt T in Kelvin** einsetzen – 1 − (30+273)/(600+273) ≠ 1 − 30/600! Reale Maschinen haben immer η < η_Carnot wegen Reibung und Irreversibilität.

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

> **Merke:** Der zweite Hauptsatz der Thermodynamik: Die Entropie eines abgeschlossenen Systems nimmt nie ab (ΔS ≥ 0). Wärme fließt spontan nur von warm nach kalt — nie umgekehrt.

> **Merke:** Der Carnot-Wirkungsgrad η = 1 − T_kalt/T_warm ist der maximal mögliche Wirkungsgrad einer Wärmekraftmaschine. Kein realer Prozess kann diesen Wert übertreffen.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Häufige Fragen:**
- "Carnot-Wirkungsgrad bei T_warm = 600 K, T_kalt = 300 K?" → η = 1 − 300/600 = 50 %
- "Was passiert bei adiabatischer Kompression?" → T steigt, weil ΔU = W > 0 (Q = 0)
- "Was passiert bei isochorer Erwärmung?" → W = 0, daher ΔU = Q (gesamte Wärme erhöht innere Energie)

**Typische Prüfungsfallen / Verwechslungen:**
- Carnot-Formel: **T immer in Kelvin** — mit °C-Werten liefert die Formel falsche Ergebnisse!
- 1. Hauptsatz-Vorzeichenkonvention: ΔU = Q + W (W = Arbeit AM System) — oder ΔU = Q − W_System (W = Arbeit DURCH das System); Konvention prüfen!
- Perpetuum mobile 1. Art (Energie aus nichts) verletzt 1. HS; Perpetuum mobile 2. Art (vollständige Wärme→Arbeit) verletzt 2. HS

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
      diagram: "temperature-scales",
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
      content: `## Gase und Phasenuebergaenge — einfach erklaert

Warum wird eine Luftblase beim Auftauchen groesser? Warum kocht Wasser auf dem Berg schneller? Und warum braucht man im Krankenhaus einen Autoklav? Hier lernst du die Physik dahinter — mit Alltagsbeispielen.

**In diesem Kapitel lernst du:**
- wie Druck, Volumen und Temperatur von Gasen zusammenhaengen
- was bei Schmelzen und Verdampfen passiert (und warum die Temperatur dabei konstant bleibt)
- warum ein Autoklav heisser wird als ein normaler Topf
- warum Taucher langsam auftauchen muessen

---

{{DIAGRAM:temperature-scales}}

{{DIAGRAM:thermodynamics}}

## Das ideale Gasgesetz — die wichtigste Formel

Stell dir eine Spritze mit Luft vor. Wenn du den Kolben reindrueckst (Volumen kleiner), steigt der Druck. Das beschreibt die Formel:

**p mal V = n mal R mal T**

- p = Druck, V = Volumen, T = Temperatur (IMMER in Kelvin!)
- n = Stoffmenge (mol), R = 8,314 J/(mol K)

**Drei Spezialfaelle, die du kennen musst:**
- **Boyle-Mariotte** (Temperatur bleibt gleich): p mal V = konstant. Halb so viel Platz = doppelter Druck.
- **Gay-Lussac** (Druck bleibt gleich): Waermere Luft dehnt sich aus (V/T = konstant).
- **Charles** (Volumen bleibt gleich): Waermere Luft hat mehr Druck (p/T = konstant).

**Alltagsbeispiel:** Eine Luftblase in 10 m Tiefe steht unter doppeltem Druck (2 bar). Wenn sie aufsteigt auf 1 bar, verdoppelt sich ihr Volumen — Boyle-Mariotte!

> **Merke:** p mal V = n mal R mal T. Temperatur IMMER in Kelvin! 0 Grad C = 273 K, 27 Grad C = 300 K.

---

## Phasenuebergaenge — Schmelzen, Verdampfen, Sublimieren

Wenn Eis schmilzt, bleibt die Temperatur bei 0 Grad C, obwohl du weiter Waerme zufuehrst. Die Energie wird gebraucht, um die Bindungen zwischen den Wassermolekuelen zu loesen. Das ist **latente Waerme**.

**Formel:** Q = m mal L

- Schmelzwaerme von Eis: L = 334 kJ/kg
- Verdampfungswaerme von Wasser: L = 2260 kJ/kg (fast 7x mehr!)

**Alltagsbeispiel:** Deshalb kuehlt Schwitzen so effektiv — pro Gramm Schweiss werden ca. 2430 Joule Waerme abgefuehrt. Ein Liter Schweiss pro Stunde = ca. 675 Watt Kuehlleistung!

**Phasendiagramm:** Ein Bild, das zeigt, bei welchem Druck und welcher Temperatur ein Stoff fest, fluessig oder gasfoermig ist. Wichtige Punkte:
- **Tripelpunkt:** Alle drei Phasen existieren gleichzeitig (Wasser: 273,16 K)
- **Kritischer Punkt:** Oberhalb davon gibt es keinen Unterschied mehr zwischen fluessig und gasfoermig

> **Merke:** Bei Phasenuebergaengen bleibt die Temperatur konstant! Die Energie geht in die Aenderung der Bindungen, nicht in die Temperatur.

---

## Dampfdruck und Siedepunkt — warum der Autoklav funktioniert

Wasser siedet, wenn sein Dampfdruck den Aussendruck erreicht. Bei 1 bar = 100 Grad C. Aber:

- **Auf dem Berg** (weniger Druck): Wasser kocht schon bei 90 Grad C — das Essen wird nicht richtig gar!
- **Im Dampfkochtopf** (mehr Druck): Wasser kocht erst bei 120 Grad C — schnelleres Kochen!
- **Im Autoklav** (2 bar): 121 Grad C — toetet alle Keime und Sporen ab. Fuer Prionen: 134 Grad C bei 3 bar.

> **Merke:** Hoeherer Druck = hoeherer Siedepunkt. Autoklav nutzt das zur Sterilisation (121 Grad C bei 2 bar).

---

## Henry-Gesetz — warum Taucher aufpassen muessen

Das **Henry-Gesetz** sagt: Je hoeger der Druck, desto mehr Gas loest sich in einer Fluessigkeit.

**Formel:** c = k_H mal p

**Beim Tauchen:** In 30 m Tiefe herrscht 4-facher Druck. Also loest sich 4-mal so viel Stickstoff im Blut. Taucht man zu schnell auf, bildet der Stickstoff Blasen im Blut — wie beim Oeffnen einer Sprudelflasche! Das ist die **Taucherkrankheit** (Dekompressionskrankheit).

**Deshalb:** Langsam auftauchen, Sicherheitsstopp einlegen.

> **Merke:** Henry-Gesetz: c = k_H mal p. Mehr Druck = mehr geloestes Gas. Schnelles Auftauchen = Gasblasen im Blut = Taucherkrankheit.

---

## Rechenbeispiel

**Eis schmelzen und erwaermen:**
500 g Eis bei 0 Grad C soll zu 37 Grad C warmem Wasser werden.
1. Schmelzen: Q1 = 0,5 kg mal 334 000 J/kg = 167 000 J
2. Erwaermen: Q2 = 0,5 kg mal 4180 J/(kg K) mal 37 K = 77 330 J
3. Gesamt: ca. 244 kJ

Ueberraschung: Das Schmelzen braucht doppelt so viel Energie wie das Erwaermen!

---

## MedAT-Fokus

**Zentral pruefungsrelevant:**
- Ideales Gasgesetz: pV = nRT (T in Kelvin!)
- Boyle-Mariotte: p mal V = konstant bei gleicher Temperatur
- Latente Waerme: Q = m mal L (Temperatur bleibt konstant beim Phasenuebergang)
- Henry-Gesetz: c = k_H mal p (Taucherkrankheit!)
- Autoklav: 121 Grad C / 2 bar sterilisiert Sporen

**Typische Fallen:**
- Temperatur IMMER in Kelvin! (27 Grad C = 300 K, nicht 27)
- Boyle-Mariotte gilt NUR bei konstanter Temperatur
- Beim Schmelzen/Verdampfen aendert sich die Temperatur NICHT

## Zusammenfassung

- **Gasgesetz:** pV = nRT; Boyle (T const): pV = const; Gay-Lussac (p const): V/T = const
- **Latente Waerme:** Q = m mal L; Schmelzen 334 kJ/kg; Verdampfen 2260 kJ/kg; Temperatur bleibt konstant
- **Phasendiagramm:** Tripelpunkt (3 Phasen gleichzeitig); kritischer Punkt (fluessig = gasfoermig)
- **Henry:** Mehr Druck = mehr Gas geloest; Taucherkrankheit bei schnellem Auftauchen
- **Autoklav:** 121 Grad C bei 2 bar; Prionen: 134 Grad C bei 3 bar`,

      contentExtended: `## Einleitung

Warum platzt eine Luftblase beim Aufstieg aus 10 Metern Tauchtiefe auf das doppelte Volumen? Und warum sterilisiert ein Autoklav bei 121 Grad Celsius, obwohl Wasser normalerweise bei 100 Grad siedet? Die Antworten stecken im **idealen Gasgesetz** pV = nRT und in der Physik der **Phasenuebergaenge**. Vom Dampfkochtopf ueber die Tauchmedizin bis zur Narkose -- Gase, Druck und Phasenwechsel begegnen dir in der Medizin ueberall.

**In diesem Kapitel lernst du:**
- wie Druck, Volumen und Temperatur eines Gases zusammenhaengen und wann Boyle-Mariotte gilt
- was bei Phasenuebergaengen passiert und warum dabei die Temperatur trotz Waermezufuhr konstant bleibt
- warum ein Autoklav hoehere Temperaturen erreicht als ein offener Topf (Dampfdruck und Siedepunkt)
- wie das Henry-Gesetz erklaert, warum Taucher Dekompressionskrankheit bekommen koennen
- wo im Phasendiagramm Tripelpunkt und kritischer Punkt liegen und was sie bedeuten

**Kontext — worum geht es und wofuer brauchst du das?**
Hier geht es um **Gase und Phasen**: Wie haengen Druck, Volumen und Temperatur zusammen (ideales Gas)? Was passiert beim Schmelzen und Verdampfen (latente Waerme)? Klinisch: Autoklav, Atemgase, Henry-Gesetz (Tauchen, Narkose). Du brauchst es fuer Physiologie (Atmung, Partialdruecke) und fuer MedAT-Aufgaben zu pV = nRT und Phasenuebergaengen.

---

{{DIAGRAM:temperature-scales}}

{{DIAGRAM:thermodynamics}}

## Ideales Gasgesetz

Das ideale Gas ist ein Modell, bei dem Wechselwirkungen zwischen den Teilchen und das Eigenvolumen der Teilchen vernachlaessigt werden. Bei niedrigem Druck und hoher Temperatur verhalten sich viele reale Gase naeherungsweise ideal.

**Allgemeine Zustandsgleichung des idealen Gases:**

**p mal V = n mal R mal T**

- p: Druck [Pa]
- V: Volumen [m^3]
- n: Stoffmenge [mol]
- R: universelle Gaskonstante = 8,314 J/(mol K)
- T: Temperatur [K] (unbedingt in Kelvin!)

Aus dieser Gleichung lassen sich alle Spezialfaelle ableiten:
- **Boyle-Mariotte** (T = const): p mal V = const (isotherm)
- **Gay-Lussac** (p = const): V/T = const (isobar)
- **Charles** (V = const): p/T = const (isochor)

Normzustand: p0 = 101 325 Pa = 1 atm = 1,01325 bar; T0 = 273,15 K (0 Grad C).
Molvolumen bei Normzustand: V_m = RT0/p0 = 22,4 L/mol.

## Phasendiagramm

Ein Phasendiagramm stellt die Gleichgewichtszustaende eines Stoffes als Funktion von Druck und Temperatur dar. Die drei Hauptphasen — **fest, fluessig, gasfoermig** — sind durch Phasengrenzkurven getrennt:

- **Schmelzkurve**: Fest-Fluessig-Grenze (fast senkrecht, da Schmelzpunkt wenig druckabhaengig)
- **Dampfdruckkurve**: Fluessig-Gasfoermig-Grenze (endet am kritischen Punkt)
- **Sublimationskurve**: Fest-Gasfoermig-Grenze

**Tripelpunkt**: Alle drei Phasen koexistieren. Fuer Wasser: T_triple = 273,16 K, p_triple = 611,7 Pa.

**Kritischer Punkt**: Oberhalb von T_krit und p_krit gibt es keine Unterscheidung mehr zwischen fluessig und gasfoermig (ueberkritisches Fluid). Fuer Wasser: T_krit = 647 K, p_krit = 221 bar.

Wasser: Die Schmelzkurve hat eine negative Steigung (einzigartig) — Erhoehung des Drucks senkt den Schmelzpunkt (ermoeglicht z. B. Schlittschuhlaufen, Gletscherbewegung).

## Latenwaermen (Phasenuebergangwaerme)

Bei Phasenuebergaengen aendert sich die Temperatur nicht, obwohl Waerme zu- oder abgefuehrt wird. Die Energie geht in die Aenderung der potentiellen Energie (Bindungen zwischen Teilchen).

**Schmelzwaerme (Enthalpie der Fusion):** Q = m mal L_f
**Verdampfungswaerme (Enthalpie der Vaporisation):** Q = m mal L_v

Die Verdampfungswaerme ist etwa 7-mal groesser als die Schmelzwaerme!

## Dampfdruck und Siedepunkt

Der **Dampfdruck** p_D(T) ist der Gleichgewichtsdruck des Dampfes ueber einer Fluessigkeit. Er steigt mit der Temperatur (Clausius-Clapeyron-Gleichung). **Sieden** tritt auf, wenn p_D = p_Aussen.

Konsequenzen:
- Im Hochgebirge ist p_Aussen kleiner: Wasser siedet unter 100 Grad C (z. B. auf 3000 m Hoehe bei ungefaehr 90 Grad C).
- Im Dampfkochtopf wird der Druck erhoeht: Siedepunkt steigt: Lebensmittel garen bei hoeherer Temperatur.
- **Autoklav**: Sterilisation bei 121 Grad C / 2 bar: alle Keime (inkl. Sporen) werden abgetoetet.

## Klinisch wichtige Gesetze

**Henry-Gesetz**: Die im Blut geloeste Gasmenge ist proportional zum Partialdruck des Gases ueber der Fluessigkeit: c = k_H mal p. Klinische Relevanz:
- Taucherkrankheit (Dekompressionskrankheit): Bei schnellem Auftauchen faellt der Stickstoffpartialdruck rasch: N2 bildet Gasblasen im Gewebe/Blut: Embolien, Schmerzen.
- Hyperbare Sauerstofftherapie: 100 % O2 bei erhoehtem Druck: mehr O2 im Blutplasma geloest.

**Verdunstungskuehlung (Schwitzen)**: Pro Gramm Schweiss werden bei 37 Grad C ungefaehr 2430 J abgefuehrt. Bei 1 L/h Schweissproduktion: Kuehlleistung ungefaehr 675 W. Essentiell fuer Thermoregulation bei Sport.

## Rechenbeispiele

**Beispiel 1 — Boyle-Mariotte (isotherme Kompression):**
Spritze mit V1 = 50 mL Luft bei p1 = 1 bar. Der Kolben wird auf V2 = 10 mL komprimiert (T = const):
p2 = p1 mal V1/V2 = 1 x 50/10 = 5 bar. Anwendung: Druckinfusor in der Notfallmedizin.

**Beispiel 2 — Eis schmelzen und dann erwaermen (Kombinationsaufgabe):**
500 g Eis bei 0 Grad C zu fluessigem Wasser bei 37 Grad C. Schritt 1: Schmelzen: Q1 = 0,5 x 334 000 = 167 000 J.
Schritt 2: Erwaermen: Q2 = 0,5 x 4180 x 37 = 77 330 J.
Gesamt: Q = Q1 + Q2 = 244 330 J ungefaehr 244 kJ. Der Schmelzvorgang braucht mehr als doppelt so viel Energie wie das anschliessende Erwaermen um 37 K!

**Beispiel 3 — Henry-Gesetz und Tauchen:**
An der Oberflaeche (1 bar): c(N2) = k_H x 0,79 bar (N2-Anteil der Luft). In 30 m Tiefe (4 bar): c(N2) = k_H x 0,79 x 4 = 4-fache N2-Konzentration im Blut. Dekompression noetig: Aufstiegsgeschwindigkeit kleiner-gleich 9 m/min mit Sicherheitsstopp auf 5 m fuer 3 Minuten (Standardtauchtabelle).

**Beispiel 4 — Gay-Lussac (isobare Expansion einer Lunge):**
Einatmungsvolumen V1 = 500 mL bei T1 = 20 Grad C = 293 K (kalte Aussenluft). In der Lunge auf T2 = 37 Grad C = 310 K erwaermt (p = const):
V2 = V1 x T2/T1 = 500 x 310/293 = 529 mL. Die eingeatmete Luft expandiert um ungefaehr 6 % beim Erwaermen in der Lunge.

## Klinische Vertiefung

**Dampfsterilisation (Autoklav):** Standard-Sterilisationszyklus: 121 Grad C / 2 bar / 15 min fuer chirurgische Instrumente. Fuer Prionen-kontaminiertes Material (Creutzfeldt-Jakob): 134 Grad C / 3 bar / 18 min. Das Prinzip: Erhoehter Dampfdruck verschiebt den Siedepunkt nach oben: feuchte Hitze denaturiert Proteine und DNA effizienter als trockene Hitze (trockene Sterilisation: 180 Grad C / 30 min noetig).

**Pulsoxymetrie und Gaspartialdruecke:** Die O2-Saettigung des Haemoglobins haengt vom pO2 ab (Sauerstoff-Bindungskurve). Nach dem Henry-Gesetz bestimmt der pO2 auch die physikalisch geloeste O2-Menge im Plasma (ungefaehr 0,3 mL O2 pro 100 mL Blut bei pO2 = 100 mmHg). Bei hyperbarer Therapie (3 bar reiner O2) steigt der physikalisch geloeste Anteil auf ungefaehr 6 mL/100 mL — genug, um Gewebe auch ohne Haemoglobin zu versorgen.

**Sublimation in der Medizin (Gefriertrocknung):** Impfstoffe und Blutplasma werden durch Lyophilisation haltbar gemacht: Einfrieren: Druck senken unter den Tripelpunkt: Eis sublimiert direkt zu Dampf. Das Produkt behaelt seine Struktur (Proteine bleiben funktionsfaehig) und ist bei Raumtemperatur lagerbar. Beim Rekonstituieren wird Wasser zugefuegt — die urspruengliche Loesung entsteht wieder.

> **Merke:** Phasenuebergaenge (Schmelzen, Verdampfen, Sublimieren) benoetigen Energie (latente Waerme), ohne dass sich die Temperatur aendert. Am Tripelpunkt koexistieren alle drei Phasen im Gleichgewicht.

> **Merke:** Der Dampfdruck steigt exponentiell mit der Temperatur (Clausius-Clapeyron). Eine Fluessigkeit siedet, wenn ihr Dampfdruck den Umgebungsdruck erreicht — deshalb kocht Wasser auf dem Berg frueher (niedrigerer Luftdruck).

## MedAT-Fokus

**Zur gezielten Pruefungsvorbereitung** im Ueberblick:

**Haeufige Fragen:**
- "Gas bei 27 Grad C und 2 bar, isochor auf 127 Grad C erhitzt — neuer Druck?" p2 = 2 x (400/300) ungefaehr 2,67 bar
- "Energie zum Schmelzen von 200 g Eis?" Q = 0,2 mal 334 000 = 66 800 J
- "Warum siedet Wasser im Autoklav bei 121 Grad C?" Aussendruck 2 bar verschiebt Siedepunkt nach oben

**Typische Pruefungsfallen / Verwechslungen:**
- Ideales Gasgesetz: **T immer in Kelvin** einsetzen! (27 Grad C = 300 K, 127 Grad C = 400 K)
- Boyle-Mariotte (p mal V = const) gilt nur bei **konstanter Temperatur** (isotherm)
- Latentwaerme (Q = m mal L): waehrend des Phasenuebergangs bleibt T konstant — keine Temperaturaenderung!

---

## Zusammenfassung (ultrakompakt)

- **Ideales Gasgesetz**: pV = nRT; R = 8,314 J/(mol K); Sonderfaelle: Boyle (T=const), Gay-Lussac (V=const), Charles (p=const)
- **Latentwaerme**: Q = m mal L; waehrend Phasenuebergang konstante Temperatur; L_Schmelz(Eis) = 334 kJ/kg, L_Verdampf(Wasser) = 2260 kJ/kg
- **Phasendiagramm**: Tripelpunkt (alle 3 Phasen koexistieren); kritischer Punkt (fluessig und gasfoermig ununterscheidbar)
- **Henry-Gesetz**: c(geloest) = k_H mal p; N2-Loesung im Blut bei 4 bar (30 m Tiefe): 4x erhoeht: Dekompressionspflicht
- **Autoklav**: 121 Grad C bei 2 bar (Siedepunkt Wasser erhoeht); 134 Grad C bei 3 bar fuer Prionen
- **Gefriertrocknung (Lyophilisation)**: Unter Tripelpunkt-Druck: Eis sublimiert: Protein-/Impfstofferhalt bei RT`,

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
