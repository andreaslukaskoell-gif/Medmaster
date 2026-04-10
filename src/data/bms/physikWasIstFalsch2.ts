/**
 * Physik Pool 2 — "Was ist falsch?" (Typ A: eine Aussage ist falsch, diese auswählen).
 * Stoff aus bmsKapitel/physik.
 * 60 Fragen: je 10 pro Kapitelbereich (kap1–kap5, kap7).
 * Schwierigkeit: 18 leicht, 27 mittel, 15 schwer.
 */
import type { Question } from "./index";

const ids = ["a", "b", "c", "d", "e"] as const;

function wif(
  id: string,
  chapter: string,
  text: string,
  options: [string, string, string, string, string],
  correctIndex: 0 | 1 | 2 | 3 | 4,
  explanation: string,
  difficulty: "leicht" | "mittel" | "schwer",
  tags: string[]
): Question {
  return {
    id,
    subject: "physik",
    chapter,
    text,
    options: options.map((t, i) => ({ id: ids[i], text: t })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags: ["falsch-frage", ...tags],
  };
}

export const physikWasIstFalsch2: Question[] = [
  // ─── phys-kap1: Mechanik (10 Fragen) ─────────────────────────────

  wif(
    "ph-falsch2-001",
    "phys-kap1",
    "Welche der folgenden Aussagen zur gleichmäßig beschleunigten Bewegung ist FALSCH?",
    [
      "Die Geschwindigkeit nimmt linear mit der Zeit zu.",
      "Der zurückgelegte Weg nimmt quadratisch mit der Zeit zu.",
      "Die Beschleunigung ist konstant.",
      "Die Momentangeschwindigkeit ist an jedem Punkt gleich der Durchschnittsgeschwindigkeit.",
      "Im v-t-Diagramm ist die Fläche unter der Geraden gleich dem zurückgelegten Weg.",
    ],
    3,
    "Bei einer gleichmäßig beschleunigten Bewegung ist die Momentangeschwindigkeit NICHT gleich der Durchschnittsgeschwindigkeit (außer am Mittelpunkt der Zeitspanne). Die Durchschnittsgeschwindigkeit ist v̄ = (v₀ + v)/2.",
    "mittel",
    ["kinematik", "beschleunigung"]
  ),


  wif(
    "ph-falsch2-003",
    "phys-kap1",
    "Welche Aussage über die Gravitationskraft ist FALSCH?",
    [
      "Die Gravitationskraft wirkt zwischen allen Massen.",
      "Sie nimmt mit dem Quadrat des Abstands ab.",
      "Die Gravitationskonstante G hat den Wert 6,674 · 10⁻¹¹ N·m²/kg².",
      "Auf der Mondoberfläche ist die Fallbeschleunigung gleich groß wie auf der Erde.",
      "Die Gravitationskraft ist stets anziehend.",
    ],
    3,
    "Die Fallbeschleunigung auf dem Mond beträgt nur etwa 1,62 m/s², also rund ein Sechstel der Erdbeschleunigung (9,81 m/s²). Der Mond hat eine geringere Masse und einen kleineren Radius.",
    "leicht",
    ["gravitation", "mond"]
  ),


  wif(
    "ph-falsch2-005",
    "phys-kap1",
    "Welche der folgenden Aussagen zur Kreisbewegung ist FALSCH?",
    [
      "Die Zentripetalkraft zeigt zum Mittelpunkt der Kreisbahn.",
      "Die Zentripetalbeschleunigung beträgt a = v²/r.",
      "Die Winkelgeschwindigkeit ω hat die Einheit rad/s.",
      "Bei einer gleichförmigen Kreisbewegung ist die Geschwindigkeit konstant.",
      "Bei einer gleichförmigen Kreisbewegung wirkt keine Beschleunigung.",
    ],
    4,
    "Bei einer gleichförmigen Kreisbewegung wirkt sehr wohl eine Beschleunigung: die Zentripetalbeschleunigung. Sie ändert die RICHTUNG der Geschwindigkeit, nicht ihren Betrag. Der Betrag der Geschwindigkeit ist konstant, aber der Vektor ändert sich ständig.",
    "mittel",
    ["kreisbewegung", "zentripetalkraft"]
  ),

  wif(
    "ph-falsch2-006",
    "phys-kap1",
    "Welche Aussage über den schiefen Wurf ist FALSCH?",
    [
      "Die horizontale Geschwindigkeitskomponente bleibt konstant (ohne Luftwiderstand).",
      "Die maximale Wurfweite wird bei einem Abwurfwinkel von 45° erreicht.",
      "Die Bahnkurve ist eine Parabel.",
      "Die Flugzeit hängt nicht von der Anfangsgeschwindigkeit ab.",
      "Am höchsten Punkt der Bahn ist die vertikale Geschwindigkeitskomponente null.",
    ],
    3,
    "Die Flugzeit hängt sehr wohl von der Anfangsgeschwindigkeit ab. Sie beträgt t = 2·v₀·sin(α)/g. Je größer v₀, desto länger ist die Flugzeit.",
    "leicht",
    ["schiefer-wurf", "kinematik"]
  ),

  wif(
    "ph-falsch2-007",
    "phys-kap1",
    "Welche der folgenden Aussagen zur Arbeit in der Physik ist FALSCH?",
    [
      "Arbeit ist das Skalarprodukt aus Kraft und Weg.",
      "Die Einheit der Arbeit ist Joule (J = N·m).",
      "Wenn die Kraft senkrecht zur Bewegungsrichtung steht, wird keine Arbeit verrichtet.",
      "Arbeit ist immer positiv.",
      "Die Hubarbeit berechnet sich als W = m · g · h.",
    ],
    3,
    "Arbeit ist NICHT immer positiv. Wenn die Kraft entgegen der Bewegungsrichtung wirkt (z. B. Reibungskraft), ist die Arbeit negativ. Das Vorzeichen hängt vom Winkel zwischen Kraft und Weg ab.",
    "leicht",
    ["arbeit", "energie"]
  ),

  wif(
    "ph-falsch2-008",
    "phys-kap1",
    "Welche Aussage über Drehmoment und Hebel ist FALSCH?",
    [
      "Das Drehmoment ist das Produkt aus Kraft und Hebelarm.",
      "Im Gleichgewicht ist die Summe aller Drehmomente null.",
      "Der Hebelarm ist der senkrechte Abstand der Wirklinie der Kraft vom Drehpunkt.",
      "Ein Hebel verringert die benötigte Kraft und gleichzeitig den benötigten Weg.",
      "Bei einem zweiseitigen Hebel befinden sich Last und Kraft auf verschiedenen Seiten des Drehpunkts.",
    ],
    3,
    "Ein Hebel verringert zwar die benötigte Kraft, verlängert aber gleichzeitig den Weg (Goldene Regel der Mechanik). Die Arbeit bleibt gleich: W = F · s. Kraft und Weg verhalten sich gegenläufig.",
    "mittel",
    ["drehmoment", "hebel"]
  ),

  wif(
    "ph-falsch2-009",
    "phys-kap1",
    "Welche der folgenden Aussagen zur Leistung ist FALSCH?",
    [
      "Die Leistung ist Arbeit pro Zeit (P = W/t).",
      "Die Einheit der Leistung ist Watt (W = J/s).",
      "1 PS entspricht exakt 1000 Watt.",
      "Die momentane Leistung kann als P = F · v berechnet werden.",
      "Ein Watt entspricht einem Joule pro Sekunde.",
    ],
    2,
    "1 PS entspricht NICHT 1000 Watt, sondern ca. 735,5 Watt. 1 kW = 1000 W ≈ 1,36 PS.",
    "leicht",
    ["leistung", "einheiten"]
  ),

  wif(
    "ph-falsch2-010",
    "phys-kap1",
    "Welche Aussage zur Dichte ist FALSCH?",
    [
      "Die Dichte ist der Quotient aus Masse und Volumen.",
      "Wasser hat bei 4 °C seine maximale Dichte.",
      "Eis hat eine geringere Dichte als flüssiges Wasser.",
      "Die Dichte aller Stoffe nimmt mit steigender Temperatur zu.",
      "Die Einheit der Dichte ist kg/m³.",
    ],
    3,
    "Die Dichte der MEISTEN Stoffe nimmt mit steigender Temperatur AB (nicht zu), da sich die Stoffe ausdehnen. Ausnahme: Wasser zwischen 0 °C und 4 °C (Anomalie des Wassers).",
    "leicht",
    ["dichte", "temperatur"]
  ),

  // ─── phys-kap2: Fluidmechanik (10 Fragen) ───────────────────────


  wif(
    "ph-falsch2-012",
    "phys-kap2",
    "Welche Aussage zum Auftrieb ist FALSCH?",
    [
      "Die Auftriebskraft ist gleich der Gewichtskraft der verdrängten Flüssigkeit (Archimedes).",
      "Ein Körper schwimmt, wenn seine Dichte kleiner als die der Flüssigkeit ist.",
      "Die Auftriebskraft hängt von der Eintauchtiefe bei vollständig eingetauchten Körpern ab.",
      "Archimedes' Prinzip gilt auch für Gase.",
      "Die Auftriebskraft wirkt entgegen der Gewichtskraft.",
    ],
    2,
    "Die Auftriebskraft hängt bei VOLLSTÄNDIG eingetauchten Körpern NICHT von der Eintauchtiefe ab. Sie hängt nur vom Volumen des Körpers und der Dichte der Flüssigkeit ab: F_A = ρ_Fl · g · V.",
    "mittel",
    ["auftrieb", "archimedes"]
  ),

  wif(
    "ph-falsch2-013",
    "phys-kap2",
    "Welche der folgenden Aussagen zur Bernoulli-Gleichung ist FALSCH?",
    [
      "In einem Rohr mit Verengung steigt die Strömungsgeschwindigkeit.",
      "Wo die Geschwindigkeit steigt, sinkt der statische Druck.",
      "Die Bernoulli-Gleichung gilt für reibungsfreie, inkompressible Strömungen.",
      "In einem Rohr mit Verengung steigt der statische Druck.",
      "Die Kontinuitätsgleichung besagt: A₁ · v₁ = A₂ · v₂.",
    ],
    3,
    "In einem Rohr mit Verengung SINKT der statische Druck (Venturi-Effekt), er steigt NICHT. Wenn die Geschwindigkeit zunimmt, muss laut Bernoulli der Druck abnehmen.",
    "mittel",
    ["bernoulli", "stroemung"]
  ),

  wif(
    "ph-falsch2-014",
    "phys-kap2",
    "Welche Aussage zur Viskosität ist FALSCH?",
    [
      "Die Viskosität beschreibt die innere Reibung einer Flüssigkeit.",
      "Honig hat eine höhere Viskosität als Wasser.",
      "Die Viskosität von Flüssigkeiten nimmt mit steigender Temperatur zu.",
      "Das Gesetz von Hagen-Poiseuille beschreibt die laminare Strömung in Rohren.",
      "Die kinematische Viskosität ist der Quotient aus dynamischer Viskosität und Dichte.",
    ],
    2,
    "Die Viskosität von Flüssigkeiten nimmt mit steigender Temperatur AB, nicht zu. Bei höherer Temperatur bewegen sich die Moleküle schneller und die intermolekularen Kräfte werden leichter überwunden.",
    "mittel",
    ["viskositaet", "temperatur"]
  ),


  wif(
    "ph-falsch2-016",
    "phys-kap2",
    "Welche Aussage über die Reynolds-Zahl ist FALSCH?",
    [
      "Die Reynolds-Zahl kennzeichnet den Übergang von laminarer zu turbulenter Strömung.",
      "Hohe Reynolds-Zahlen deuten auf turbulente Strömung hin.",
      "Die Reynolds-Zahl ist eine dimensionslose Kennzahl.",
      "Eine hohe Viskosität führt zu einer hohen Reynolds-Zahl.",
      "Die kritische Reynolds-Zahl für Rohrströmungen liegt bei ca. 2300.",
    ],
    3,
    "Eine hohe Viskosität führt zu einer NIEDRIGEN Reynolds-Zahl (Re = ρ·v·L/η). Die Viskosität steht im Nenner, daher senkt hohe Viskosität die Reynolds-Zahl und stabilisiert die laminare Strömung.",
    "schwer",
    ["reynolds-zahl", "stroemung"]
  ),


  wif(
    "ph-falsch2-018",
    "phys-kap2",
    "Welche Aussage zur Kapillarität ist FALSCH?",
    [
      "Wasser steigt in engen Glasröhren nach oben (kapillarer Aufstieg).",
      "Quecksilber wird in engen Glasröhren abgesenkt (kapillare Depression).",
      "Die Kapillarität hängt von der Oberflächenspannung und dem Benetzungswinkel ab.",
      "Je weiter das Kapillarrohr, desto höher steigt das Wasser.",
      "Kapillarität spielt beim Wassertransport in Pflanzen eine Rolle.",
    ],
    3,
    "Je ENGER das Kapillarrohr, desto HÖHER steigt das Wasser. Die Steighöhe ist umgekehrt proportional zum Rohrradius: h = 2·σ·cos(θ)/(ρ·g·r).",
    "mittel",
    ["kapillaritaet", "oberflaechenspannung"]
  ),

  wif(
    "ph-falsch2-019",
    "phys-kap2",
    "Welche der folgenden Aussagen zum Druck ist FALSCH?",
    [
      "1 atm = 101 325 Pa.",
      "Der Atmosphärendruck nimmt mit der Höhe ab.",
      "Die Einheit Pascal ist definiert als N/m².",
      "Druck ist eine vektorielle Größe.",
      "Der Druck in Flüssigkeiten wirkt isotrop (in alle Richtungen gleich).",
    ],
    3,
    "Druck ist eine SKALARE Größe, keine vektorielle. Druck wirkt in einer Flüssigkeit in alle Richtungen gleich und hat daher keine bevorzugte Richtung.",
    "leicht",
    ["druck", "einheiten"]
  ),

  wif(
    "ph-falsch2-020",
    "phys-kap2",
    "Welche Aussage über die Manometrie ist FALSCH?",
    [
      "Ein U-Rohr-Manometer nutzt eine Flüssigkeitssäule zur Druckmessung.",
      "Der Höhenunterschied der Flüssigkeit ist proportional zur Druckdifferenz.",
      "Quecksilber wird wegen seiner hohen Dichte häufig in Manometern verwendet.",
      "Ein Barometer misst den Relativdruck zum Atmosphärendruck.",
      "Der Atmosphärendruck entspricht einer Quecksilbersäule von ca. 760 mm.",
    ],
    3,
    "Ein Barometer misst den ABSOLUTEN Atmosphärendruck, nicht den Relativdruck. Ein Manometer hingegen kann Relativdruck (Überdruck) messen. Die Verwechslung von Barometer und Manometer ist ein häufiger Fehler.",
    "schwer",
    ["manometer", "barometer"]
  ),

  // ─── phys-kap3: Schwingungen und Wellen (10 Fragen) ──────────────

  wif(
    "ph-falsch2-021",
    "phys-kap3",
    "Welche der folgenden Aussagen zu mechanischen Wellen ist FALSCH?",
    [
      "Schallwellen sind Longitudinalwellen.",
      "Lichtwellen sind mechanische Wellen und brauchen ein Medium.",
      "Die Wellenlänge ist der Abstand zwischen zwei aufeinanderfolgenden Wellenbergen.",
      "Die Ausbreitungsgeschwindigkeit hängt vom Medium ab.",
      "v = f · λ beschreibt den Zusammenhang zwischen Geschwindigkeit, Frequenz und Wellenlänge.",
    ],
    1,
    "Lichtwellen sind KEINE mechanischen Wellen. Licht ist eine elektromagnetische Welle und braucht KEIN Medium zur Ausbreitung. Es kann sich auch im Vakuum ausbreiten.",
    "leicht",
    ["wellen", "licht"]
  ),

  wif(
    "ph-falsch2-022",
    "phys-kap3",
    "Welche Aussage über den Doppler-Effekt ist FALSCH?",
    [
      "Bei Annäherung der Schallquelle erscheint die Frequenz höher.",
      "Bei Entfernung der Schallquelle erscheint die Frequenz niedriger.",
      "Der Doppler-Effekt tritt nur bei Schallwellen auf.",
      "Der Doppler-Effekt wird in der Medizin bei der Ultraschalldiagnostik genutzt.",
      "Die beobachtete Frequenzänderung hängt von der Relativgeschwindigkeit ab.",
    ],
    2,
    "Der Doppler-Effekt tritt NICHT nur bei Schallwellen auf. Er tritt bei allen Wellenarten auf, auch bei elektromagnetischen Wellen (z. B. Rotverschiebung in der Astronomie, Radar).",
    "mittel",
    ["doppler-effekt", "wellen"]
  ),

  wif(
    "ph-falsch2-023",
    "phys-kap3",
    "Welche der folgenden Aussagen zur harmonischen Schwingung ist FALSCH?",
    [
      "Die Rückstellkraft ist proportional zur Auslenkung.",
      "Die Schwingungsdauer T eines Fadenpendels hängt von der Fadenlänge ab.",
      "Die Schwingungsdauer eines Fadenpendels hängt von der Masse des Pendelkörpers ab.",
      "Die Frequenz ist der Kehrwert der Schwingungsdauer.",
      "Die Amplitude ist die maximale Auslenkung aus der Ruhelage.",
    ],
    2,
    "Die Schwingungsdauer eines (idealen) Fadenpendels hängt NICHT von der Masse ab. Sie beträgt T = 2π·√(l/g) und hängt nur von der Fadenlänge l und der Erdbeschleunigung g ab.",
    "mittel",
    ["schwingung", "pendel"]
  ),

  wif(
    "ph-falsch2-024",
    "phys-kap3",
    "Welche Aussage über stehende Wellen ist FALSCH?",
    [
      "Stehende Wellen entstehen durch Überlagerung zweier gegenläufiger Wellen gleicher Frequenz.",
      "Knoten sind Punkte maximaler Auslenkung.",
      "Bäuche sind Punkte maximaler Amplitude.",
      "Die Grundschwingung hat die niedrigste Frequenz.",
      "Oberschwingungen sind ganzzahlige Vielfache der Grundfrequenz.",
    ],
    1,
    "Knoten sind Punkte MINIMALER (null) Auslenkung, nicht maximaler. An Knoten findet keine Schwingung statt, da sich die beiden gegenläufigen Wellen dort destruktiv überlagern.",
    "leicht",
    ["stehende-wellen", "knoten"]
  ),

  wif(
    "ph-falsch2-025",
    "phys-kap3",
    "Welche der folgenden Aussagen zum Schall ist FALSCH?",
    [
      "Die Schallgeschwindigkeit in Luft bei 20 °C beträgt ca. 343 m/s.",
      "Schall breitet sich in Festkörpern schneller aus als in Gasen.",
      "Die Lautstärke wird in Dezibel (dB) gemessen.",
      "Die Schmerzgrenze liegt bei ca. 130 dB.",
      "Schall kann sich im Vakuum ausbreiten.",
    ],
    4,
    "Schall kann sich im Vakuum NICHT ausbreiten. Als mechanische Welle benötigt Schall ein materielles Medium (Gas, Flüssigkeit oder Festkörper) zur Ausbreitung.",
    "leicht",
    ["schall", "vakuum"]
  ),

  wif(
    "ph-falsch2-026",
    "phys-kap3",
    "Welche Aussage zur Resonanz ist FALSCH?",
    [
      "Resonanz tritt auf, wenn die Erregerfrequenz gleich der Eigenfrequenz ist.",
      "Bei Resonanz ist die Amplitude maximal.",
      "Dämpfung verbreitert die Resonanzkurve.",
      "Resonanz kann nur bei mechanischen Systemen auftreten.",
      "Die Tacoma-Narrows-Brücke ist ein berühmtes Beispiel für Resonanzkatastrophen.",
    ],
    3,
    "Resonanz tritt NICHT nur bei mechanischen Systemen auf. Auch elektrische Schwingkreise (LC-Kreise), akustische und optische Systeme können Resonanz zeigen.",
    "mittel",
    ["resonanz", "schwingung"]
  ),


  wif(
    "ph-falsch2-028",
    "phys-kap3",
    "Welche Aussage über Ultraschall ist FALSCH?",
    [
      "Ultraschall hat Frequenzen oberhalb von 20 kHz.",
      "Ultraschall wird in der medizinischen Bildgebung eingesetzt.",
      "Ultraschall breitet sich im Gewebe mit Lichtgeschwindigkeit aus.",
      "Reflexion und Brechung von Ultraschall folgen den gleichen Gesetzen wie bei anderen Wellen.",
      "Die Auflösung der Ultraschallbildgebung hängt von der Frequenz ab.",
    ],
    2,
    "Ultraschall breitet sich im Gewebe NICHT mit Lichtgeschwindigkeit aus, sondern mit Schallgeschwindigkeit (ca. 1540 m/s in Weichteilgewebe). Das ist etwa 200 000 mal langsamer als Licht.",
    "mittel",
    ["ultraschall", "medizin"]
  ),

  wif(
    "ph-falsch2-029",
    "phys-kap3",
    "Welche der folgenden Aussagen zur Beugung ist FALSCH?",
    [
      "Beugung tritt auf, wenn Wellen auf Hindernisse oder Spalte treffen.",
      "Je kleiner die Öffnung im Vergleich zur Wellenlänge, desto stärker die Beugung.",
      "Beugung ist ein Beweis für den Wellencharakter.",
      "Nur Lichtwellen zeigen Beugung, Schallwellen nicht.",
      "Beugung führt dazu, dass Wellen um Ecken laufen können.",
    ],
    3,
    "Beugung tritt bei ALLEN Wellenarten auf, nicht nur bei Lichtwellen. Schallwellen zeigen ebenfalls Beugung (deshalb kann man z. B. um Ecken hören). Beugung ist eine fundamentale Welleneigenschaft.",
    "leicht",
    ["beugung", "wellen"]
  ),

  wif(
    "ph-falsch2-030",
    "phys-kap3",
    "Welche Aussage zur Energieerhaltung bei Schwingungen ist FALSCH?",
    [
      "Bei einer ungedämpften Schwingung ist die Gesamtenergie konstant.",
      "An den Umkehrpunkten ist die gesamte Energie potenzielle Energie.",
      "In der Gleichgewichtslage ist die gesamte Energie kinetische Energie.",
      "Bei einer gedämpften Schwingung nimmt die Gesamtenergie zu.",
      "Die Gesamtenergie einer harmonischen Schwingung ist proportional zum Quadrat der Amplitude.",
    ],
    3,
    "Bei einer gedämpften Schwingung nimmt die Gesamtenergie AB, nicht zu. Durch Reibung und andere Verluste wird mechanische Energie in Wärme umgewandelt und die Amplitude verringert sich.",
    "mittel",
    ["schwingung", "energieerhaltung"]
  ),

  // ─── phys-kap4: Wärmelehre (10 Fragen) ───────────────────────────


  wif(
    "ph-falsch2-032",
    "phys-kap4",
    "Welche Aussage über die spezifische Wärmekapazität ist FALSCH?",
    [
      "Sie gibt an, wie viel Energie nötig ist, um 1 kg eines Stoffes um 1 K zu erwärmen.",
      "Wasser hat eine besonders hohe spezifische Wärmekapazität.",
      "Die Einheit ist J/(kg·K).",
      "Alle Metalle haben die gleiche spezifische Wärmekapazität.",
      "Q = m · c · ΔT berechnet die aufgenommene oder abgegebene Wärme.",
    ],
    3,
    "Metalle haben NICHT alle die gleiche spezifische Wärmekapazität. Die Werte variieren stark: z. B. Aluminium (0,90 kJ/(kg·K)), Kupfer (0,39 kJ/(kg·K)), Blei (0,13 kJ/(kg·K)).",
    "leicht",
    ["waermekapazitaet", "metalle"]
  ),


  wif(
    "ph-falsch2-034",
    "phys-kap4",
    "Welche Aussage zur Wärmeausdehnung ist FALSCH?",
    [
      "Die meisten Stoffe dehnen sich bei Erwärmung aus.",
      "Die Längenausdehnung ist proportional zur Temperaturänderung (ΔL = α · L₀ · ΔT).",
      "Wasser zeigt zwischen 0 °C und 4 °C eine Dichteanomalie.",
      "Bimetallstreifen nutzen unterschiedliche Ausdehnungskoeffizienten.",
      "Gase dehnen sich bei Erwärmung weniger aus als Festkörper.",
    ],
    4,
    "Gase dehnen sich bei Erwärmung STÄRKER aus als Festkörper, nicht weniger. Bei Gasen ist die Volumenausdehnung bei konstantem Druck proportional zur absoluten Temperatur (Charles-Gesetz), was zu deutlich größeren relativen Volumenänderungen führt.",
    "mittel",
    ["waermeausdehnung", "gase"]
  ),


  wif(
    "ph-falsch2-036",
    "phys-kap4",
    "Welche Aussage zur latenten Wärme ist FALSCH?",
    [
      "Beim Schmelzen wird Energie zugeführt, ohne dass die Temperatur steigt.",
      "Die Schmelzwärme ist die Energie, die zum Schmelzen eines Stoffes nötig ist.",
      "Die Verdampfungswärme von Wasser ist größer als seine Schmelzwärme.",
      "Beim Kondensieren wird latente Wärme aufgenommen.",
      "Während des Phasenübergangs bleibt die Temperatur konstant.",
    ],
    3,
    "Beim Kondensieren wird latente Wärme ABGEGEBEN (freigesetzt), nicht aufgenommen. Der Übergang von gasförmig zu flüssig ist exotherm.",
    "mittel",
    ["latente-waerme", "phasenuebergang"]
  ),


  wif(
    "ph-falsch2-038",
    "phys-kap4",
    "Welche Aussage über den Wärmetransport durch Konvektion ist FALSCH?",
    [
      "Konvektion tritt in Flüssigkeiten und Gasen auf.",
      "Bei der natürlichen Konvektion entsteht die Strömung durch Dichteunterschiede.",
      "Erzwungene Konvektion wird z. B. durch einen Ventilator verursacht.",
      "Konvektion spielt in Festkörpern die wichtigste Rolle.",
      "Warmwasserheizungen nutzen Konvektion zur Wärmeverteilung.",
    ],
    3,
    "Konvektion spielt in Festkörpern KEINE Rolle, da die Teilchen ortsfest gebunden sind und keine Strömung möglich ist. In Festkörpern dominiert die Wärmeleitung.",
    "leicht",
    ["konvektion", "waermetransport"]
  ),

  wif(
    "ph-falsch2-039",
    "phys-kap4",
    "Welche der folgenden Aussagen zur Temperaturmessung ist FALSCH?",
    [
      "Die Kelvin-Skala beginnt beim absoluten Nullpunkt (0 K = −273,15 °C).",
      "Die Celsius-Skala hat ihren Nullpunkt beim Gefrierpunkt von Wasser.",
      "Eine Temperaturdifferenz von 1 K entspricht einer Differenz von 1 °C.",
      "0 °F entspricht 0 °C.",
      "Fieberthermometer nutzen die Wärmeausdehnung von Flüssigkeiten.",
    ],
    3,
    "0 °F entspricht NICHT 0 °C. 0 °F = −17,78 °C. Der Gefrierpunkt von Wasser liegt bei 32 °F. Die Fahrenheit-Skala hat einen anderen Nullpunkt und eine andere Skalierung als die Celsius-Skala.",
    "leicht",
    ["temperaturskalen", "fahrenheit"]
  ),

  wif(
    "ph-falsch2-040",
    "phys-kap4",
    "Welche Aussage über das Stefan-Boltzmann-Gesetz ist FALSCH?",
    [
      "Die Strahlungsleistung eines Schwarzen Körpers ist proportional zur vierten Potenz der absoluten Temperatur.",
      "P = σ · A · T⁴ beschreibt die Strahlungsleistung.",
      "σ ist die Stefan-Boltzmann-Konstante.",
      "Ein Schwarzer Körper absorbiert nur rotes Licht.",
      "Das Wiener Verschiebungsgesetz beschreibt das Intensitätsmaximum.",
    ],
    3,
    "Ein Schwarzer Körper absorbiert ALLE einfallende Strahlung aller Wellenlängen, nicht nur rotes Licht. Er ist ein idealisierter Körper mit einem Absorptionsgrad von 1 für das gesamte elektromagnetische Spektrum.",
    "schwer",
    ["stefan-boltzmann", "schwarzer-koerper"]
  ),

  // ─── phys-kap5: Elektrizitätslehre und Optik (10 Fragen) ─────────

  wif(
    "ph-falsch2-041",
    "phys-kap5",
    "Welche der folgenden Aussagen zum elektrischen Strom ist FALSCH?",
    [
      "Die Stromstärke wird in Ampere (A) gemessen.",
      "In metallischen Leitern bewegen sich die Elektronen.",
      "Die technische Stromrichtung verläuft von Plus nach Minus.",
      "Die physikalische Stromrichtung verläuft von Plus nach Minus.",
      "Die Stromstärke ist die Ladung pro Zeit (I = Q/t).",
    ],
    3,
    "Die PHYSIKALISCHE Stromrichtung (Elektronenfluss) verläuft von MINUS nach PLUS, nicht von Plus nach Minus. Die TECHNISCHE Stromrichtung ist konventionell von Plus nach Minus definiert.",
    "leicht",
    ["strom", "stromrichtung"]
  ),

  wif(
    "ph-falsch2-042",
    "phys-kap5",
    "Welche Aussage über das Ohmsche Gesetz ist FALSCH?",
    [
      "U = R · I beschreibt den Zusammenhang zwischen Spannung, Widerstand und Strom.",
      "Der Widerstand wird in Ohm (Ω) gemessen.",
      "Der Widerstand eines Leiters hängt von seiner Länge und Querschnittsfläche ab.",
      "Alle elektrischen Bauelemente verhalten sich ohmsch.",
      "Der spezifische Widerstand ist eine Materialkonstante.",
    ],
    3,
    "NICHT alle elektrischen Bauelemente verhalten sich ohmsch. Dioden, LEDs, Transistoren und viele andere Halbleiterbauelemente zeigen eine nichtlineare Strom-Spannungs-Kennlinie.",
    "mittel",
    ["ohmsches-gesetz", "widerstand"]
  ),

  wif(
    "ph-falsch2-043",
    "phys-kap5",
    "Welche der folgenden Aussagen zu Reihen- und Parallelschaltung ist FALSCH?",
    [
      "In einer Reihenschaltung fließt durch alle Widerstände der gleiche Strom.",
      "In einer Parallelschaltung liegt an allen Widerständen die gleiche Spannung an.",
      "Der Gesamtwiderstand einer Reihenschaltung ist die Summe der Einzelwiderstände.",
      "Der Gesamtwiderstand einer Parallelschaltung ist größer als der größte Einzelwiderstand.",
      "In einer Reihenschaltung teilt sich die Gesamtspannung auf die Widerstände auf.",
    ],
    3,
    "Der Gesamtwiderstand einer Parallelschaltung ist KLEINER als der kleinste Einzelwiderstand, nicht größer als der größte. Durch Parallelschalten eröffnet man dem Strom zusätzliche Wege.",
    "mittel",
    ["reihen-parallel", "widerstand"]
  ),

  wif(
    "ph-falsch2-044",
    "phys-kap5",
    "Welche Aussage über das elektrische Feld ist FALSCH?",
    [
      "Das elektrische Feld wird durch Ladungen erzeugt.",
      "Die Feldstärke E hat die Einheit V/m.",
      "Feldlinien zeigen von Plus nach Minus.",
      "Das elektrische Feld innerhalb eines Plattenkondensators ist homogen.",
      "Gleichnamige Ladungen ziehen sich an.",
    ],
    4,
    "Gleichnamige Ladungen STOSSEN sich AB, sie ziehen sich nicht an. Nur ungleichnamige Ladungen (positive und negative) ziehen sich gegenseitig an.",
    "leicht",
    ["elektrisches-feld", "ladungen"]
  ),


  wif(
    "ph-falsch2-046",
    "phys-kap5",
    "Welche Aussage zur Brechung von Licht ist FALSCH?",
    [
      "Beim Übergang von einem optisch dünneren in ein optisch dichteres Medium wird Licht zum Lot hin gebrochen.",
      "Das Brechungsgesetz lautet n₁ · sin(α₁) = n₂ · sin(α₂).",
      "Die Totalreflexion tritt beim Übergang vom optisch dichteren ins optisch dünnere Medium auf.",
      "Totalreflexion tritt bei jedem Einfallswinkel auf.",
      "Der Brechungsindex von Wasser beträgt ca. 1,33.",
    ],
    3,
    "Totalreflexion tritt NICHT bei jedem Einfallswinkel auf. Sie tritt nur auf, wenn der Einfallswinkel größer als der Grenzwinkel der Totalreflexion ist (und beim Übergang ins optisch dünnere Medium).",
    "mittel",
    ["brechung", "totalreflexion"]
  ),


  wif(
    "ph-falsch2-048",
    "phys-kap5",
    "Welche Aussage über den Kondensator ist FALSCH?",
    [
      "Ein Plattenkondensator speichert Energie im elektrischen Feld.",
      "Die Kapazität wird in Farad (F) gemessen.",
      "Die Kapazität ist proportional zur Plattenfläche.",
      "Ein Dielektrikum zwischen den Platten verringert die Kapazität.",
      "Die gespeicherte Energie beträgt W = ½ · C · U².",
    ],
    3,
    "Ein Dielektrikum zwischen den Platten ERHÖHT die Kapazität, es verringert sie nicht. Das Dielektrikum schwächt das elektrische Feld zwischen den Platten und ermöglicht bei gleicher Spannung mehr Ladungsspeicherung.",
    "schwer",
    ["kondensator", "dielektrikum"]
  ),


  wif(
    "ph-falsch2-050",
    "phys-kap5",
    "Welche Aussage über das Magnetfeld ist FALSCH?",
    [
      "Magnetische Feldlinien verlaufen von Nord nach Süd (außerhalb des Magneten).",
      "Die magnetische Feldstärke wird in Tesla (T) gemessen.",
      "Bewegte Ladungen erzeugen ein Magnetfeld.",
      "Magnetische Monopole können leicht isoliert werden.",
      "Die Lorentzkraft wirkt auf bewegte Ladungen im Magnetfeld.",
    ],
    3,
    "Magnetische Monopole können NICHT isoliert werden. Magnete haben immer einen Nord- und einen Südpol. Teilt man einen Magneten, entstehen zwei vollständige Magnete mit je Nord- und Südpol.",
    "mittel",
    ["magnetfeld", "monopol"]
  ),

  // ─── phys-kap7: Atomphysik (10 Fragen) ───────────────────────────


  wif(
    "ph-falsch2-052",
    "phys-kap7",
    "Welche Aussage zum radioaktiven Zerfall ist FALSCH?",
    [
      "Die Halbwertszeit ist die Zeit, nach der die Hälfte der Kerne zerfallen ist.",
      "Der radioaktive Zerfall folgt einem exponentiellen Gesetz.",
      "α-Strahlung besteht aus Heliumkernen.",
      "β-Strahlung besteht aus Neutronen.",
      "γ-Strahlung ist elektromagnetische Strahlung hoher Energie.",
    ],
    3,
    "β-Strahlung besteht NICHT aus Neutronen, sondern aus Elektronen (β⁻) oder Positronen (β⁺). Neutronenemission ist ein eigenständiger Prozess und NICHT β-Strahlung.",
    "leicht",
    ["radioaktivitaet", "beta-strahlung"]
  ),

  wif(
    "ph-falsch2-053",
    "phys-kap7",
    "Welche der folgenden Aussagen zum Photoeffekt ist FALSCH?",
    [
      "Einstein erklärte den Photoeffekt mit der Quantennatur des Lichts.",
      "Die kinetische Energie der Photoelektronen hängt von der Frequenz des Lichts ab.",
      "Es gibt eine Grenzfrequenz, unterhalb derer keine Elektronen ausgelöst werden.",
      "Die Anzahl der ausgelösten Elektronen hängt von der Intensität des Lichts ab.",
      "Die kinetische Energie der Photoelektronen hängt von der Intensität des Lichts ab.",
    ],
    4,
    "Die kinetische Energie der Photoelektronen hängt NICHT von der Intensität ab, sondern nur von der Frequenz. Die Intensität bestimmt die ANZAHL der ausgelösten Elektronen, nicht deren Energie. E_kin = h·f − W_A.",
    "schwer",
    ["photoeffekt", "einstein"]
  ),

  wif(
    "ph-falsch2-054",
    "phys-kap7",
    "Welche Aussage über die Kernspaltung ist FALSCH?",
    [
      "Bei der Kernspaltung wird ein schwerer Kern in leichtere Kerne gespalten.",
      "Kernspaltung kann durch Beschuss mit Neutronen ausgelöst werden.",
      "Bei der Kernspaltung wird Energie frei (Massendefekt).",
      "Uran-235 ist ein spaltbares Material.",
      "Bei der Kernspaltung wird Masse erzeugt.",
    ],
    4,
    "Bei der Kernspaltung wird KEINE Masse erzeugt. Im Gegenteil: Ein kleiner Teil der Masse wird in Energie umgewandelt (E = mc²). Die Gesamtmasse der Spaltprodukte ist geringer als die des Ausgangskerns (Massendefekt).",
    "mittel",
    ["kernspaltung", "massendefekt"]
  ),


  wif(
    "ph-falsch2-056",
    "phys-kap7",
    "Welche Aussage über die Heisenbergsche Unschärferelation ist FALSCH?",
    [
      "Ort und Impuls eines Teilchens können nicht gleichzeitig beliebig genau bestimmt werden.",
      "Δx · Δp ≥ ℏ/2 beschreibt die Unschärfe.",
      "Die Unschärfe ist eine fundamentale Eigenschaft der Quantenmechanik.",
      "Die Unschärferelation ist nur eine Folge ungenauer Messgeräte.",
      "Auch Energie und Zeit unterliegen einer Unschärferelation.",
    ],
    3,
    "Die Unschärferelation ist NICHT nur eine Folge ungenauer Messgeräte. Sie ist eine FUNDAMENTALE Eigenschaft der Natur auf quantenmechanischer Ebene. Auch mit perfekten Messgeräten bleibt die Unschärfe bestehen.",
    "schwer",
    ["unschaerfe", "heisenberg"]
  ),

  wif(
    "ph-falsch2-057",
    "phys-kap7",
    "Welche der folgenden Aussagen zur Röntgenstrahlung ist FALSCH?",
    [
      "Röntgenstrahlung ist elektromagnetische Strahlung mit kurzer Wellenlänge.",
      "Röntgenstrahlung entsteht beim Abbremsen schneller Elektronen.",
      "Röntgenstrahlung kann Materie durchdringen.",
      "Röntgenstrahlung ist ungefährlich für lebendes Gewebe.",
      "Röntgenstrahlung wird in der medizinischen Diagnostik verwendet.",
    ],
    3,
    "Röntgenstrahlung ist NICHT ungefährlich für lebendes Gewebe. Sie ist ionisierende Strahlung und kann DNA-Schäden, Mutationen und bei hohen Dosen Strahlenkrankheit verursachen. Daher gelten strenge Strahlenschutzregeln.",
    "leicht",
    ["roentgen", "strahlung"]
  ),

  wif(
    "ph-falsch2-058",
    "phys-kap7",
    "Welche Aussage über die Kernfusion ist FALSCH?",
    [
      "Bei der Kernfusion verschmelzen leichte Kerne zu schwereren.",
      "Die Sonne gewinnt ihre Energie aus Kernfusion (Wasserstoff zu Helium).",
      "Kernfusion setzt Energie frei bei Kernen leichter als Eisen.",
      "Kernfusion funktioniert problemlos bei Raumtemperatur.",
      "Die Coulomb-Barriere muss überwunden werden, damit Fusion stattfinden kann.",
    ],
    3,
    "Kernfusion funktioniert NICHT problemlos bei Raumtemperatur. Sie erfordert extrem hohe Temperaturen (Millionen Grad), damit die positiv geladenen Kerne genug kinetische Energie haben, um die elektrostatische Abstoßung (Coulomb-Barriere) zu überwinden.",
    "mittel",
    ["kernfusion", "coulomb-barriere"]
  ),


  wif(
    "ph-falsch2-060",
    "phys-kap7",
    "Welche Aussage über Spektrallinien ist FALSCH?",
    [
      "Jedes Element hat ein charakteristisches Linienspektrum.",
      "Emissionsspektren entstehen, wenn angeregte Atome Photonen aussenden.",
      "Absorptionsspektren zeigen dunkle Linien in einem kontinuierlichen Spektrum.",
      "Die Fraunhofer-Linien im Sonnenspektrum sind Emissionslinien.",
      "Die Wellenlänge einer Spektrallinie entspricht dem Energieunterschied zwischen zwei Niveaus.",
    ],
    3,
    "Die Fraunhofer-Linien im Sonnenspektrum sind ABSORPTIONSLINIEN, keine Emissionslinien. Sie entstehen, weil Gase in der Sonnenatmosphäre bestimmte Wellenlängen absorbieren und als dunkle Linien im Spektrum erscheinen.",
    "schwer",
    ["spektrallinien", "fraunhofer"]
  ),
];
