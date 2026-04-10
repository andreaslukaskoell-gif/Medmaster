/**
 * Physik Typ-K Pool (Kombinationsaufgaben) — 75 Fragen im Question-Format.
 * IDs: ph-typk-new-001 bis ph-typk-new-075.
 * Themen: Mechanik, Optik, Akustik, Elektrizität, Wärmelehre, Atomphysik, Strahlung.
 * Schwierigkeit: ~30 % leicht, ~45 % mittel, ~25 % schwer.
 */
import type { Question } from "./index";

export const physikTypKNew: Question[] = [
  // ── 001 Mechanik (leicht) ──
  {
    id: "ph-typk-new-001",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen über die gleichförmige Bewegung sind richtig?\n\n1. Die Geschwindigkeit ist konstant.\n2. Die Beschleunigung ist null.\n3. Der zurückgelegte Weg ist proportional zur Zeit.\n4. Die Geschwindigkeit nimmt gleichmäßig zu.\n5. Im v-t-Diagramm ergibt sich eine horizontale Linie.",
    options: [
      { id: "a", text: "Nur 1, 2 und 3" },
      { id: "b", text: "Nur 1, 2, 3 und 5" },
      { id: "c", text: "Nur 2, 3 und 5" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "b",
    explanation:
      "Bei gleichförmiger Bewegung ist v = const (1), a = 0 (2), s = v·t also proportional (3), und das v-t-Diagramm zeigt eine Horizontale (5). Aussage 4 beschreibt eine gleichmäßig beschleunigte Bewegung.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 002 Optik (mittel) ──
  {
    id: "ph-typk-new-002",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Brechung von Licht sind richtig?\n\n1. Beim Übergang von einem optisch dünneren in ein optisch dichteres Medium wird das Licht zum Lot hin gebrochen.\n2. Es gilt das Snellius'sche Brechungsgesetz: n₁ · sin α₁ = n₂ · sin α₂.\n3. Die Totalreflexion tritt auf, wenn Licht vom optisch dichteren ins optisch dünnere Medium unter einem Winkel größer als der Grenzwinkel einfällt.\n4. Beim Übergang in ein optisch dichteres Medium wird die Wellenlänge des Lichts größer.\n5. Der Brechungsindex eines Mediums ist das Verhältnis der Lichtgeschwindigkeit im Vakuum zur Lichtgeschwindigkeit im Medium.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 2, 3 und 5" },
      { id: "d", text: "Nur 1, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Aussagen 1, 2, 3 und 5 sind korrekt. Aussage 4 ist falsch: Im optisch dichteren Medium ist die Wellenlänge kleiner (λ = λ₀/n), nicht größer.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 003 Wärmelehre (leicht) ──
  {
    id: "ph-typk-new-003",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zur Wärmeübertragung sind richtig?\n\n1. Wärmeleitung erfordert direkten Kontakt zwischen den Körpern.\n2. Konvektion findet nur in Gasen statt, nicht in Flüssigkeiten.\n3. Wärmestrahlung kann sich auch im Vakuum ausbreiten.\n4. Metalle sind in der Regel gute Wärmeleiter.\n5. Bei der Wärmeleitung wandern Teilchen vom heißen zum kalten Ort.",
    options: [
      { id: "a", text: "Nur 1, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3, 4 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig sind 1, 3 und 4. Konvektion findet auch in Flüssigkeiten statt (2 falsch). Bei Wärmeleitung geben Teilchen Energie an Nachbarteilchen weiter, sie wandern nicht selbst (5 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 004 Elektrizität (mittel) ──
  {
    id: "ph-typk-new-004",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum elektrischen Widerstand sind richtig?\n\n1. Der Widerstand eines Leiters ist proportional zu seiner Länge.\n2. Der Widerstand nimmt mit zunehmendem Querschnitt zu.\n3. Bei metallischen Leitern steigt der Widerstand mit der Temperatur.\n4. Die Einheit des Widerstands ist Ohm (Ω).\n5. Bei einer Parallelschaltung ist der Gesamtwiderstand kleiner als der kleinste Einzelwiderstand.",
    options: [
      { id: "a", text: "Nur 1, 3, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "R = ρ·l/A: proportional zur Länge (1 richtig), umgekehrt proportional zum Querschnitt (2 falsch). Bei Metallen steigt R mit T (3 richtig). Einheit Ohm (4 richtig). In Parallelschaltung ist R_ges < R_min (5 richtig).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 005 Atomphysik (mittel) ──
  {
    id: "ph-typk-new-005",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zum radioaktiven Zerfall sind richtig?\n\n1. Beim α-Zerfall verringert sich die Massenzahl um 4.\n2. Beim β⁻-Zerfall wird ein Neutron in ein Proton umgewandelt.\n3. γ-Strahlung besteht aus Heliumkernen.\n4. Die Halbwertszeit ist die Zeit, nach der die Hälfte der Atomkerne zerfallen ist.\n5. Radioaktiver Zerfall ist ein statistischer Prozess.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 3 und 4" },
      { id: "c", text: "Nur 2, 4 und 5" },
      { id: "d", text: "Nur 1, 2 und 3" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Massenzahl −4), 2 (n → p + e⁻ + ν̄), 4 (Definition Halbwertszeit), 5 (statistischer Prozess). Aussage 3 ist falsch: γ-Strahlung ist elektromagnetische Strahlung, α-Strahlung besteht aus Heliumkernen.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 006 Mechanik (schwer) ──
  {
    id: "ph-typk-new-006",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zum schiefen Wurf sind richtig?\n\n1. Die horizontale Geschwindigkeitskomponente bleibt während des Flugs konstant (Luftwiderstand vernachlässigt).\n2. Am höchsten Punkt ist die Geschwindigkeit null.\n3. Die Flugbahn ist eine Parabel.\n4. Die maximale Wurfweite wird bei einem Abwurfwinkel von 45° erreicht.\n5. Die Flugzeit hängt nur von der vertikalen Komponente der Anfangsgeschwindigkeit ab.",
    options: [
      { id: "a", text: "Nur 1, 3, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (vₓ = const), 3 (Parabel), 4 (45° für max. Weite), 5 (Flugzeit = 2v₀ sin α / g). Am höchsten Punkt ist nur vᵧ = 0, aber vₓ ≠ 0, also v ≠ 0 (2 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 007 Akustik (leicht) ──
  {
    id: "ph-typk-new-007",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zu Schallwellen sind richtig?\n\n1. Schall breitet sich als Longitudinalwelle aus.\n2. Schall kann sich im Vakuum ausbreiten.\n3. Die Schallgeschwindigkeit in Luft beträgt bei 20 °C etwa 343 m/s.\n4. Lautstärke wird in Dezibel (dB) gemessen.\n5. Schall breitet sich in Festkörpern schneller aus als in Luft.",
    options: [
      { id: "a", text: "Nur 1, 3, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 1, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Longitudinalwelle), 3 (343 m/s), 4 (Dezibel), 5 (schneller in Festkörpern). Schall braucht ein Medium und kann sich nicht im Vakuum ausbreiten (2 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 008 Wärmelehre (mittel) ──
  {
    id: "ph-typk-new-008",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zu den Hauptsätzen der Thermodynamik sind richtig?\n\n1. Der erste Hauptsatz ist die Energieerhaltung: ΔU = Q + W.\n2. Der zweite Hauptsatz besagt, dass Wärme spontan nur von warm nach kalt fließt.\n3. Der dritte Hauptsatz besagt, dass der absolute Nullpunkt exakt erreicht werden kann.\n4. Entropie ist ein Maß für die Unordnung eines Systems.\n5. In einem abgeschlossenen System kann die Entropie nicht abnehmen.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 2, 4 und 5" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Energieerhaltung), 2 (Wärmefluss warm → kalt), 4 (Entropie = Unordnung), 5 (Entropie nimmt nie ab). Aussage 3 ist falsch: Der absolute Nullpunkt (0 K) kann nicht exakt erreicht werden (3. Hauptsatz).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 009 Elektrizität (leicht) ──
  {
    id: "ph-typk-new-009",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur elektrischen Ladung sind richtig?\n\n1. Es gibt positive und negative Ladungen.\n2. Gleichnamige Ladungen ziehen sich an.\n3. Die Elementarladung beträgt etwa 1,6 · 10⁻¹⁹ C.\n4. Ladung ist eine erhaltene Größe.\n5. Protonen tragen eine positive Ladung.",
    options: [
      { id: "a", text: "Nur 1, 3, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1, 3 (e ≈ 1,6·10⁻¹⁹ C), 4 (Ladungserhaltung), 5 (Protonen positiv). Gleichnamige Ladungen stoßen sich ab, ziehen sich nicht an (2 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 010 Mechanik (mittel) ──
  {
    id: "ph-typk-new-010",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zu Newtons Gesetzen sind richtig?\n\n1. Das Trägheitsgesetz besagt, dass ein Körper ohne äußere Kraft in Ruhe bleibt oder sich gleichförmig bewegt.\n2. F = m · a gilt nur für konstante Massen.\n3. Das Wechselwirkungsgesetz besagt: actio = reactio.\n4. Kraft und Gegenkraft greifen am selben Körper an.\n5. Die Einheit der Kraft ist Newton (1 N = 1 kg · m/s²).",
    options: [
      { id: "a", text: "Nur 1, 3 und 5" },
      { id: "b", text: "Nur 1, 2, 3 und 5" },
      { id: "c", text: "Nur 1, 2 und 5" },
      { id: "d", text: "Nur 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "b",
    explanation:
      "Richtig: 1 (Trägheitsgesetz), 2 (F = m·a für m = const, allgemein F = dp/dt), 3 (actio = reactio), 5 (Newton-Definition). Kraft und Gegenkraft greifen an verschiedenen Körpern an (4 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 011 Optik (schwer) ──
  {
    id: "ph-typk-new-011",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zu Linsen sind richtig?\n\n1. Eine Sammellinse bündelt parallel einfallendes Licht im Brennpunkt.\n2. Eine Zerstreuungslinse hat eine positive Brennweite.\n3. Die Linsengleichung lautet 1/f = 1/b + 1/g.\n4. Die Brechkraft einer Linse wird in Dioptrien (dpt) angegeben.\n5. Bei einem Gegenstand zwischen Brennpunkt und Linse erzeugt eine Sammellinse ein virtuelles, aufrechtes, vergrößertes Bild.",
    options: [
      { id: "a", text: "Nur 1, 3, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Sammellinse bündelt), 3 (Linsengleichung), 4 (Dioptrie = 1/f in m), 5 (Lupe: virtuell, aufrecht, vergrößert). Zerstreuungslinsen haben eine negative Brennweite (2 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 012 Fluidmechanik (mittel) ──
  {
    id: "ph-typk-new-012",
    subject: "physik",
    chapter: "phys-kap2",
    text: "Welche der folgenden Aussagen zum Auftrieb sind richtig?\n\n1. Die Auftriebskraft ist gleich der Gewichtskraft der verdrängten Flüssigkeit (Archimedisches Prinzip).\n2. Ein Körper schwimmt, wenn seine Dichte kleiner als die der Flüssigkeit ist.\n3. Der Auftrieb hängt von der Form des Körpers ab.\n4. Im Vakuum gibt es keinen Auftrieb.\n5. Die Auftriebskraft wirkt entgegen der Schwerkraft.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Archimedes), 2 (Schwimmbedingung ρ_Körper < ρ_Fluid), 4 (kein Fluid = kein Auftrieb), 5 (entgegen g). Der Auftrieb hängt nur vom Volumen ab, nicht von der Form (3 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 013 Strahlung (schwer) ──
  {
    id: "ph-typk-new-013",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zur ionisierenden Strahlung sind richtig?\n\n1. α-Strahlung hat die geringste Reichweite in Luft.\n2. β-Strahlung wird im Magnetfeld abgelenkt.\n3. γ-Strahlung hat die höchste Durchdringungsfähigkeit.\n4. α-Strahlung kann bereits durch ein Blatt Papier abgeschirmt werden.\n5. γ-Strahlung besteht aus geladenen Teilchen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 3 und 5" },
      { id: "c", text: "Nur 2, 3 und 4" },
      { id: "d", text: "Nur 1, 2 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (α wenige cm in Luft), 2 (β geladen → Ablenkung im B-Feld), 3 (γ höchste Durchdringung), 4 (Papier reicht für α). γ-Strahlung ist elektromagnetisch, also ungeladen (5 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 014 Mechanik (leicht) ──
  {
    id: "ph-typk-new-014",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur Dichte sind richtig?\n\n1. Dichte ist definiert als Masse pro Volumen (ρ = m/V).\n2. Wasser hat bei 4 °C seine maximale Dichte.\n3. Die SI-Einheit der Dichte ist kg/m³.\n4. Gase haben eine höhere Dichte als Festkörper.\n5. Die Dichte von Eis ist geringer als die von flüssigem Wasser.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1 und 3" },
      { id: "c", text: "Nur 1, 2 und 3" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (ρ = m/V), 2 (Dichteanomalie bei 4 °C), 3 (kg/m³), 5 (Eis schwimmt auf Wasser). Gase haben in der Regel eine geringere Dichte als Festkörper (4 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 015 Wärmelehre (schwer) ──
  {
    id: "ph-typk-new-015",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zum idealen Gas sind richtig?\n\n1. Für ein ideales Gas gilt p·V = n·R·T.\n2. Bei isothermer Expansion bleibt die innere Energie konstant.\n3. Bei adiabatischer Kompression steigt die Temperatur.\n4. Bei isobarer Erwärmung bleibt das Volumen konstant.\n5. Die mittlere kinetische Energie der Gasteilchen ist proportional zur absoluten Temperatur.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 3 und 4" },
      { id: "c", text: "Nur 1, 2 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (ideale Gasgleichung), 2 (isotherm: T = const → U = const für ideales Gas), 3 (adiabatisch: Q = 0, W erhöht U → T steigt), 5 (E_kin ∝ T). Bei isobarer Erwärmung dehnt sich das Gas aus — V steigt (4 falsch: isochor = V = const).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 016 Elektrizität (mittel) ──
  {
    id: "ph-typk-new-016",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Kondensator sind richtig?\n\n1. Ein Plattenkondensator speichert elektrische Energie im elektrischen Feld.\n2. Die Kapazität C = Q/U.\n3. Die Kapazität steigt mit größerem Plattenabstand.\n4. Ein Dielektrikum zwischen den Platten erhöht die Kapazität.\n5. Die gespeicherte Energie beträgt W = ½ C U².",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 2, 4 und 5" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Energiespeicher im E-Feld), 2 (C = Q/U), 4 (Dielektrikum erhöht C), 5 (W = ½CU²). Die Kapazität sinkt mit größerem Abstand: C = ε₀εᵣA/d (3 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 017 Schwingungen (leicht) ──
  {
    id: "ph-typk-new-017",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zum Federpendel sind richtig?\n\n1. Die Schwingungsdauer hängt von der Federkonstante ab.\n2. Die Schwingungsdauer ist unabhängig von der Amplitude (bei kleinen Auslenkungen).\n3. Die rücktreibende Kraft ist proportional zur Auslenkung (Hookesches Gesetz).\n4. Im Umkehrpunkt ist die kinetische Energie maximal.\n5. Die Schwingungsdauer T = 2π√(m/k).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 3 und 4" },
      { id: "c", text: "Nur 2, 3 und 5" },
      { id: "d", text: "Nur 1, 2 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (T abhängig von k), 2 (Isochronismus), 3 (F = −k·x), 5 (T = 2π√(m/k)). Im Umkehrpunkt ist v = 0, also E_kin = 0, maximal ist E_pot (4 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 018 Atomphysik (mittel) ──
  {
    id: "ph-typk-new-018",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zum Bohrschen Atommodell sind richtig?\n\n1. Elektronen bewegen sich auf diskreten Bahnen um den Kern.\n2. Bei einem Übergang auf eine niedrigere Bahn wird ein Photon emittiert.\n3. Die Energie der Bahnen ist quantisiert.\n4. Das Modell erklärt das Linienspektrum des Wasserstoffs.\n5. Elektronen können sich auf beliebigen Bahnen bewegen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 3 und 5" },
      { id: "c", text: "Nur 2, 3 und 4" },
      { id: "d", text: "Nur 1, 2 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (diskrete Bahnen), 2 (Photonenemission), 3 (quantisierte Energieniveaus), 4 (Linienspektrum H). Gerade die Quantisierung schließt beliebige Bahnen aus (5 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 019 Mechanik (mittel) ──
  {
    id: "ph-typk-new-019",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur Reibung sind richtig?\n\n1. Haftreibung ist in der Regel größer als Gleitreibung.\n2. Die Reibungskraft hängt von der Normalkraft ab.\n3. Die Gleitreibungskraft ist unabhängig von der Geschwindigkeit.\n4. Die Reibungskraft ist proportional zur Kontaktfläche.\n5. Reibung wandelt kinetische Energie in Wärme um.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (μ_H > μ_G), 2 (F_R = μ·F_N), 3 (Coulombsche Reibung: v-unabhängig), 5 (Dissipation). Die Reibungskraft ist im einfachen Modell unabhängig von der Kontaktfläche (4 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 020 Optik (leicht) ──
  {
    id: "ph-typk-new-020",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Reflexion von Licht sind richtig?\n\n1. Einfallswinkel = Ausfallswinkel.\n2. Bei diffuser Reflexion wird Licht in alle Richtungen gestreut.\n3. Reflexion tritt nur an spiegelnden Oberflächen auf.\n4. Das Reflexionsgesetz gilt für alle Arten elektromagnetischer Wellen.\n5. Bei der Reflexion ändert sich die Wellenlänge des Lichts nicht.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 1, 2 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Reflexionsgesetz), 2 (diffuse Reflexion), 4 (gilt für alle EM-Wellen), 5 (λ bleibt gleich). Reflexion tritt an allen Oberflächen auf, nicht nur an spiegelnden (3 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 021 Wärmelehre (mittel) ──
  {
    id: "ph-typk-new-021",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zu Phasenübergängen sind richtig?\n\n1. Beim Schmelzen wird Energie zugeführt, ohne dass die Temperatur steigt.\n2. Die Schmelzwärme ist die Energie, die zum Schmelzen eines Stoffes nötig ist.\n3. Beim Verdampfen sinkt die Temperatur der umgebenden Flüssigkeit.\n4. Sublimation ist der direkte Übergang von fest zu gasförmig.\n5. Beim Kondensieren wird Energie frei.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2, 3, 4 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 4 und 5" },
      { id: "e", text: "Nur 1, 2 und 5" },
    ],
    correctOptionId: "b",
    explanation:
      "Alle fünf Aussagen sind korrekt: 1 (latente Wärme), 2 (Schmelzwärme), 3 (Verdunstungskälte), 4 (Sublimation), 5 (Kondensation setzt Energie frei).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 022 Elektrizität (schwer) ──
  {
    id: "ph-typk-new-022",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur elektromagnetischen Induktion sind richtig?\n\n1. Eine Änderung des magnetischen Flusses durch eine Leiterschleife induziert eine Spannung.\n2. Die induzierte Spannung ist proportional zur Änderungsrate des Flusses (Faradaysches Gesetz).\n3. Die Lenzsche Regel besagt, dass der induzierte Strom der Ursache seiner Entstehung entgegenwirkt.\n4. In einem homogenen, zeitlich konstanten Magnetfeld wird in einer ruhenden Schleife eine Spannung induziert.\n5. Generatoren und Transformatoren basieren auf dem Prinzip der elektromagnetischen Induktion.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Induktionsgesetz), 2 (Faraday: U_ind = −dΦ/dt), 3 (Lenzsche Regel), 5 (Generator/Trafo). In einem zeitlich konstanten, homogenen Feld mit ruhender Schleife ändert sich der Fluss nicht → keine Induktion (4 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 023 Mechanik (leicht) ──
  {
    id: "ph-typk-new-023",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur Kreisbewegung sind richtig?\n\n1. Die Zentripetalkraft wirkt zum Kreismittelpunkt hin.\n2. Die Geschwindigkeit bei einer gleichförmigen Kreisbewegung ist konstant im Betrag.\n3. Die Zentripetalbeschleunigung ist a = v²/r.\n4. Bei einer gleichförmigen Kreisbewegung wirkt keine Kraft auf den Körper.\n5. Die Winkelgeschwindigkeit ω = 2π/T.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 3 und 4" },
      { id: "c", text: "Nur 1, 2 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Zentripetalkraft zum Mittelpunkt), 2 (|v| = const), 3 (a = v²/r), 5 (ω = 2π/T). Eine Kreisbewegung erfordert stets eine Zentripetalkraft (4 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 024 Atomphysik (schwer) ──
  {
    id: "ph-typk-new-024",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zur Kernspaltung und Kernfusion sind richtig?\n\n1. Bei der Kernspaltung wird ein schwerer Kern in leichtere Kerne gespalten.\n2. Bei der Kernfusion verschmelzen leichte Kerne zu schwereren.\n3. Beide Prozesse setzen Energie frei, da die Bindungsenergie pro Nukleon sich ändert.\n4. Die Kernfusion findet in der Sonne statt.\n5. Bei der Kernspaltung entstehen keine radioaktiven Produkte.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Spaltung schwerer Kerne), 2 (Fusion leichter Kerne), 3 (Bindungsenergie-Kurve), 4 (Sonne = Fusion). Bei der Kernspaltung entstehen radioaktive Spaltprodukte (5 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 025 Fluidmechanik (mittel) ──
  {
    id: "ph-typk-new-025",
    subject: "physik",
    chapter: "phys-kap2",
    text: "Welche der folgenden Aussagen zum hydrostatischen Druck sind richtig?\n\n1. Der hydrostatische Druck steigt mit der Tiefe.\n2. Der Druck ist unabhängig von der Form des Gefäßes (hydrostatisches Paradoxon).\n3. p = ρ · g · h gilt für inkompressible Fluide.\n4. Der hydrostatische Druck wirkt nur nach unten.\n5. Die Einheit des Drucks ist Pascal (1 Pa = 1 N/m²).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 3 und 4" },
      { id: "c", text: "Nur 1, 2 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (p steigt mit h), 2 (hydrostatisches Paradoxon), 3 (p = ρgh), 5 (Pascal). Der hydrostatische Druck wirkt allseitig, nicht nur nach unten (4 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 026 Elektrizität (leicht) ──
  {
    id: "ph-typk-new-026",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Ohmschen Gesetz sind richtig?\n\n1. U = R · I beschreibt den Zusammenhang zwischen Spannung, Widerstand und Strom.\n2. Bei konstantem Widerstand ist der Strom proportional zur Spannung.\n3. Das Ohmsche Gesetz gilt für alle Materialien.\n4. Die Stromstärke wird in Ampere (A) gemessen.\n5. Bei Verdopplung der Spannung verdoppelt sich der Strom (bei konstantem R).",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 3 und 4" },
      { id: "c", text: "Nur 1, 2 und 5" },
      { id: "d", text: "Nur 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (U = R·I), 2 (I ∝ U bei R = const), 4 (Ampere), 5 (Proportionalität). Das Ohmsche Gesetz gilt nur für ohmsche Leiter, nicht für alle Materialien (z. B. Halbleiter, Dioden) (3 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 027 Mechanik (schwer) ──
  {
    id: "ph-typk-new-027",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zum Drehmoment und Gleichgewicht sind richtig?\n\n1. Das Drehmoment M = F · r · sin α.\n2. Im statischen Gleichgewicht ist die Summe aller Drehmomente null.\n3. Ein Hebel im Gleichgewicht: F₁ · l₁ = F₂ · l₂.\n4. Das Drehmoment hat die Einheit Nm (Newtonmeter).\n5. Das Drehmoment ist maximal, wenn die Kraft senkrecht zum Hebelarm wirkt.",
    options: [
      { id: "a", text: "Nur 1, 2 und 3" },
      { id: "b", text: "Nur 2, 3, 4 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 3, 4 und 5" },
      { id: "e", text: "Nur 2, 3 und 5" },
    ],
    correctOptionId: "d",
    explanation:
      "Alle fünf Aussagen sind korrekt: 1 (M = F·r·sin α), 2 (Gleichgewichtsbedingung ΣM = 0), 3 (Hebelgesetz), 4 (Einheit Nm), 5 (sin 90° = 1 → Maximum).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 028 Akustik (mittel) ──
  {
    id: "ph-typk-new-028",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zum Dopplereffekt sind richtig?\n\n1. Bewegt sich eine Schallquelle auf den Beobachter zu, steigt die wahrgenommene Frequenz.\n2. Der Dopplereffekt tritt nur bei Schallwellen auf.\n3. Entfernt sich die Schallquelle, sinkt die wahrgenommene Frequenz.\n4. Die tatsächliche Frequenz der Quelle ändert sich dabei nicht.\n5. Das Martinshorn eines sich nähernden Rettungswagens klingt höher als im Stand.",
    options: [
      { id: "a", text: "Nur 1, 3, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Annäherung → höhere f), 3 (Entfernung → niedrigere f), 4 (Quellfrequenz bleibt gleich), 5 (Alltagsbeispiel). Der Dopplereffekt tritt bei allen Wellenarten auf, auch bei Licht (2 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 029 Wärmelehre (leicht) ──
  {
    id: "ph-typk-new-029",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zur Wärmeausdehnung sind richtig?\n\n1. Die meisten Stoffe dehnen sich bei Erwärmung aus.\n2. Die Längenausdehnung ist proportional zur Temperaturdifferenz.\n3. Wasser dehnt sich beim Gefrieren aus (Anomalie des Wassers).\n4. Bimetalle nutzen die unterschiedliche Ausdehnung zweier Metalle.\n5. Gase dehnen sich bei Erwärmung weniger aus als Festkörper.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 3 und 5" },
      { id: "c", text: "Nur 1, 2 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Ausdehnung bei Erwärmung), 2 (ΔL = α·L·ΔT), 3 (Anomalie: Eis hat größeres Volumen), 4 (Bimetall). Gase dehnen sich bei gleicher ΔT stärker aus als Festkörper (5 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 030 Elektrizität (mittel) ──
  {
    id: "ph-typk-new-030",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Leistung im Stromkreis sind richtig?\n\n1. Die elektrische Leistung P = U · I.\n2. P = I² · R gilt für ohmsche Verbraucher.\n3. P = U²/R ist eine äquivalente Darstellung.\n4. Die Einheit der Leistung ist Watt (W).\n5. Die elektrische Arbeit W = P/t.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (P = U·I), 2 (P = I²R), 3 (P = U²/R), 4 (Watt). Die Arbeit ist W = P·t, nicht P/t (5 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 031 Mechanik (mittel) ──
  {
    id: "ph-typk-new-031",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zum freien Fall sind richtig?\n\n1. Im freien Fall ist die Beschleunigung g ≈ 9,81 m/s² (nahe Erdoberfläche).\n2. Die Fallgeschwindigkeit ist v = g · t.\n3. Die Fallstrecke beträgt s = ½ g t².\n4. Schwere Körper fallen schneller als leichte (im Vakuum).\n5. Im freien Fall sind alle Körper schwerelos.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (g ≈ 9,81 m/s²), 2 (v = gt bei v₀ = 0), 3 (s = ½gt²), 5 (Schwerelosigkeit im freien Fall). Im Vakuum fallen alle Körper gleich schnell, unabhängig von der Masse (4 falsch — Galilei).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 032 Strahlung (mittel) ──
  {
    id: "ph-typk-new-032",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zum elektromagnetischen Spektrum sind richtig?\n\n1. Sichtbares Licht ist ein Teil des elektromagnetischen Spektrums.\n2. Röntgenstrahlung hat eine kürzere Wellenlänge als UV-Strahlung.\n3. Infrarotstrahlung hat eine höhere Frequenz als sichtbares Licht.\n4. Alle elektromagnetischen Wellen breiten sich im Vakuum mit Lichtgeschwindigkeit aus.\n5. Radiowellen haben die längste Wellenlänge im EM-Spektrum.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Licht = EM-Welle), 2 (Röntgen: kürzere λ als UV), 4 (c = 3·10⁸ m/s), 5 (Radiowellen: längste λ). Infrarot hat eine niedrigere Frequenz als sichtbares Licht (3 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 033 Mechanik (schwer) ──
  {
    id: "ph-typk-new-033",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zum Impuls und Impulserhaltung sind richtig?\n\n1. Der Impuls ist definiert als p = m · v.\n2. In einem abgeschlossenen System bleibt der Gesamtimpuls erhalten.\n3. Beim elastischen Stoß bleibt die kinetische Energie erhalten.\n4. Beim inelastischen Stoß bleibt der Impuls nicht erhalten.\n5. Die Einheit des Impulses ist kg·m/s.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (p = mv), 2 (Impulserhaltung), 3 (elastisch: E_kin erhalten), 5 (kg·m/s). Auch beim inelastischen Stoß bleibt der Impuls erhalten — nur die kinetische Energie nicht (4 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 034 Optik (mittel) ──
  {
    id: "ph-typk-new-034",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Dispersion sind richtig?\n\n1. Dispersion ist die Zerlegung von weißem Licht in seine Spektralfarben.\n2. Rotes Licht wird stärker gebrochen als blaues Licht.\n3. Ein Prisma erzeugt Dispersion.\n4. Der Regenbogen entsteht durch Dispersion an Wassertropfen.\n5. Verschiedene Wellenlängen haben in einem Medium verschiedene Brechungsindizes.",
    options: [
      { id: "a", text: "Nur 1, 3, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Zerlegung), 3 (Prisma), 4 (Regenbogen), 5 (wellenlängenabhängiger n). Blaues Licht wird stärker gebrochen als rotes (2 falsch — umgekehrt).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 035 Wärmelehre (schwer) ──
  {
    id: "ph-typk-new-035",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zum Carnot-Prozess sind richtig?\n\n1. Der Carnot-Prozess ist ein idealer Kreisprozess mit maximalem Wirkungsgrad.\n2. Der Wirkungsgrad hängt nur von den Temperaturen der Wärmereservoire ab.\n3. η = 1 − T_kalt/T_warm (in Kelvin).\n4. Der Carnot-Wirkungsgrad kann 100 % erreichen, wenn T_kalt = 0 K.\n5. Reale Maschinen haben einen höheren Wirkungsgrad als der Carnot-Prozess.",
    options: [
      { id: "a", text: "Nur 1, 2 und 3" },
      { id: "b", text: "Nur 1, 2, 3 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Carnot = max. η), 2 (nur T-abhängig), 3 (η = 1 − T_k/T_w). T_kalt = 0 K ist nach dem 3. Hauptsatz unerreichbar (4 falsch). Reale Maschinen haben stets niedrigeren η als Carnot (5 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 036 Elektrizität (leicht) ──
  {
    id: "ph-typk-new-036",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Magnetismus sind richtig?\n\n1. Jeder Magnet hat einen Nord- und einen Südpol.\n2. Gleichnamige Pole stoßen sich ab.\n3. Magnetische Feldlinien verlaufen außerhalb des Magneten von Nord nach Süd.\n4. Magnetische Monopole existieren in der Natur.\n5. Elektromagnete erzeugen ein Magnetfeld durch Stromfluss.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 3 und 4" },
      { id: "c", text: "Nur 1, 2 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Dipole), 2 (gleichnamig → Abstoßung), 3 (Feldlinien N→S außen), 5 (Elektromagnet). Magnetische Monopole wurden nie beobachtet (4 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 037 Schwingungen (schwer) ──
  {
    id: "ph-typk-new-037",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zur Resonanz sind richtig?\n\n1. Resonanz tritt auf, wenn die Erregerfrequenz gleich der Eigenfrequenz des Systems ist.\n2. Bei Resonanz ist die Amplitude maximal.\n3. Dämpfung verringert die Resonanzamplitude.\n4. Bei Resonanz wird keine Energie zugeführt.\n5. Eine Brücke kann durch Resonanz zum Einsturz gebracht werden (z. B. Tacoma Narrows).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (f_Erreger = f_Eigen), 2 (maximale Amplitude), 3 (Dämpfung reduziert Peak), 5 (Tacoma Narrows). Bei Resonanz wird dem System kontinuierlich Energie zugeführt (4 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 038 Atomphysik (leicht) ──
  {
    id: "ph-typk-new-038",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zum Aufbau des Atoms sind richtig?\n\n1. Protonen tragen eine positive Ladung.\n2. Neutronen sind elektrisch neutral.\n3. Elektronen befinden sich im Atomkern.\n4. Die Massenzahl A = Protonen + Neutronen.\n5. Die Ordnungszahl Z gibt die Anzahl der Protonen an.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Proton +), 2 (Neutron neutral), 4 (A = Z + N), 5 (Z = Protonenzahl). Elektronen befinden sich in der Elektronenhülle, nicht im Kern (3 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 039 Mechanik (mittel) ──
  {
    id: "ph-typk-new-039",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur potentiellen und kinetischen Energie sind richtig?\n\n1. Kinetische Energie E_kin = ½ m v².\n2. Potentielle Energie im Schwerefeld E_pot = m g h.\n3. Bei einem frei fallenden Körper bleibt die Gesamtenergie konstant.\n4. Am tiefsten Punkt einer Pendelschwingung ist E_pot maximal.\n5. Die Einheit der Energie ist Joule (J).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (½mv²), 2 (mgh), 3 (Energieerhaltung), 5 (Joule). Am tiefsten Punkt ist E_kin maximal und E_pot minimal (4 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 040 Elektrizität (schwer) ──
  {
    id: "ph-typk-new-040",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zu Wechselstrom sind richtig?\n\n1. Wechselstrom ändert periodisch seine Richtung.\n2. Die Netzfrequenz in Europa beträgt 50 Hz.\n3. Der Effektivwert des Stroms ist I_eff = I₀/√2.\n4. Ein Transformator funktioniert nur mit Wechselstrom.\n5. Die Netzspannung von 230 V ist der Scheitelwert.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (periodischer Richtungswechsel), 2 (50 Hz Europa), 3 (I_eff = I₀/√2), 4 (Trafo braucht Wechselstrom für Induktion). 230 V ist der Effektivwert, nicht der Scheitelwert (5 falsch; Scheitelwert ≈ 325 V).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 041 Fluidmechanik (leicht) ──
  {
    id: "ph-typk-new-041",
    subject: "physik",
    chapter: "phys-kap2",
    text: "Welche der folgenden Aussagen zur Kontinuitätsgleichung sind richtig?\n\n1. A₁ · v₁ = A₂ · v₂ gilt für inkompressible Fluide.\n2. Wenn sich der Querschnitt verringert, steigt die Strömungsgeschwindigkeit.\n3. Der Volumenstrom bleibt in einem Rohr konstant.\n4. Die Kontinuitätsgleichung gilt nur für Gase.\n5. Bei Verengung eines Rohres sinkt der Druck (Venturi-Effekt).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Kontinuität), 2 (A↓ → v↑), 3 (V̇ = const), 5 (Venturi-Effekt). Die Kontinuitätsgleichung gilt für alle Fluide, nicht nur Gase (4 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 042 Optik (schwer) ──
  {
    id: "ph-typk-new-042",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Interferenz von Licht sind richtig?\n\n1. Konstruktive Interferenz tritt auf, wenn der Gangunterschied ein ganzzahliges Vielfaches der Wellenlänge ist.\n2. Destruktive Interferenz führt zur Auslöschung der Wellen.\n3. Interferenz kann nur mit kohärentem Licht beobachtet werden.\n4. Am Doppelspalt entstehen Interferenzmuster.\n5. Die Interferenz widerspricht der Teilchennatur des Lichts.",
    options: [
      { id: "a", text: "Nur 1, 2 und 4" },
      { id: "b", text: "Nur 1, 2, 3 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "b",
    explanation:
      "Richtig: 1 (konstruktiv bei Δs = nλ), 2 (destruktiv → Auslöschung), 3 (Kohärenz nötig), 4 (Doppelspalt). Interferenz zeigt die Wellennatur des Lichts, widerspricht aber nicht der Teilchennatur — Welle-Teilchen-Dualismus (5 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 043 Wärmelehre (leicht) ──
  {
    id: "ph-typk-new-043",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zu Temperaturskalen sind richtig?\n\n1. 0 °C entspricht 273,15 K.\n2. Der absolute Nullpunkt liegt bei −273,15 °C.\n3. Kelvin und Celsius haben die gleiche Skalenteilung.\n4. 100 °C entspricht dem Siedepunkt von Wasser bei Normaldruck.\n5. Die Fahrenheit-Skala wird in der Physik bevorzugt.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (0 °C = 273,15 K), 2 (0 K = −273,15 °C), 3 (1 K = 1 °C Differenz), 4 (Siedepunkt H₂O). In der Physik wird Kelvin bevorzugt, nicht Fahrenheit (5 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 044 Mechanik (mittel) ──
  {
    id: "ph-typk-new-044",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur gleichmäßig beschleunigten Bewegung sind richtig?\n\n1. Die Geschwindigkeit nimmt linear mit der Zeit zu: v = v₀ + a·t.\n2. Der Weg nimmt quadratisch mit der Zeit zu: s = v₀·t + ½a·t².\n3. Im v-t-Diagramm ergibt sich eine Gerade.\n4. Die Beschleunigung ist die zeitliche Änderung des Weges.\n5. Im s-t-Diagramm ergibt sich eine Parabel.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (v = v₀ + at), 2 (s = v₀t + ½at²), 3 (v-t: Gerade), 5 (s-t: Parabel). Die Beschleunigung ist die zeitliche Änderung der Geschwindigkeit, nicht des Weges (4 falsch: a = dv/dt).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 045 Elektrizität (mittel) ──
  {
    id: "ph-typk-new-045",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zu Reihen- und Parallelschaltung sind richtig?\n\n1. In einer Reihenschaltung fließt durch alle Widerstände der gleiche Strom.\n2. In einer Parallelschaltung liegt an allen Widerständen die gleiche Spannung.\n3. In einer Reihenschaltung addieren sich die Widerstände.\n4. In einer Parallelschaltung addieren sich die Widerstände.\n5. In einer Reihenschaltung teilt sich die Gesamtspannung auf die Widerstände auf.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (gleicher I in Reihe), 2 (gleiche U in parallel), 3 (R_ges = R₁ + R₂ + ... in Reihe), 5 (Spannungsteilung). In Parallelschaltung addieren sich die Kehrwerte (1/R_ges = 1/R₁ + 1/R₂ + ...), nicht die Widerstände (4 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 046 Akustik (schwer) ──
  {
    id: "ph-typk-new-046",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zur Schalldämpfung und Schallintensität sind richtig?\n\n1. Die Schallintensität nimmt mit dem Quadrat der Entfernung ab.\n2. Der Schallpegel wird in Dezibel (dB) gemessen und ist logarithmisch.\n3. Eine Verdopplung der Schallintensität entspricht +3 dB.\n4. Die Schmerzgrenze liegt bei etwa 130 dB.\n5. 0 dB bedeutet absolute Stille.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Abstandsgesetz 1/r²), 2 (logarithmische dB-Skala), 3 (+3 dB ≈ Verdopplung), 4 (Schmerzgrenze ~130 dB). 0 dB ist die Hörschwelle, nicht Stille — darunter gibt es noch Schall (5 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 047 Mechanik (leicht) ──
  {
    id: "ph-typk-new-047",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zu Kraft und Masse sind richtig?\n\n1. Masse ist ein Maß für die Trägheit eines Körpers.\n2. Gewichtskraft = m · g.\n3. Masse und Gewicht sind dasselbe.\n4. 1 kg hat auf der Erde eine Gewichtskraft von etwa 9,81 N.\n5. Die Masse ist ortsunabhängig.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Trägheit), 2 (F_G = mg), 4 (F_G ≈ 9,81 N), 5 (Masse ortsunabhängig). Masse (kg) und Gewicht (N) sind verschiedene Größen (3 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 048 Wärmelehre (mittel) ──
  {
    id: "ph-typk-new-048",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zur spezifischen Wärmekapazität sind richtig?\n\n1. Die spezifische Wärmekapazität c gibt an, wie viel Energie 1 kg eines Stoffes um 1 K erwärmt.\n2. Wasser hat eine besonders hohe spezifische Wärmekapazität.\n3. Q = m · c · ΔT berechnet die zugeführte Wärme.\n4. Die Einheit von c ist J/(kg·K).\n5. Alle Metalle haben die gleiche spezifische Wärmekapazität.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 3 und 5" },
      { id: "c", text: "Nur 2, 3 und 4" },
      { id: "d", text: "Nur 1, 2 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Definition c), 2 (c_Wasser ≈ 4186 J/(kg·K)), 3 (Q = mcΔT), 4 (J/(kg·K)). Verschiedene Metalle haben unterschiedliche c-Werte (5 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 049 Strahlung (schwer) ──
  {
    id: "ph-typk-new-049",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zum Photoeffekt sind richtig?\n\n1. Licht kann Elektronen aus einer Metalloberfläche herauslösen.\n2. Die Energie eines Photons ist E = h · f.\n3. Unterhalb einer bestimmten Grenzfrequenz werden keine Elektronen ausgelöst.\n4. Die kinetische Energie der Elektronen hängt von der Lichtintensität ab, nicht von der Frequenz.\n5. Einstein erhielt für die Erklärung des Photoeffekts den Nobelpreis.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Photoeffekt), 2 (E = hf), 3 (Grenzfrequenz), 5 (Nobel 1921). Die kinetische Energie hängt von der Frequenz ab (E_kin = hf − W_A), die Intensität bestimmt die Anzahl der Elektronen (4 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 050 Fluidmechanik (mittel) ──
  {
    id: "ph-typk-new-050",
    subject: "physik",
    chapter: "phys-kap2",
    text: "Welche der folgenden Aussagen zur Oberflächenspannung sind richtig?\n\n1. Oberflächenspannung entsteht durch Kohäsionskräfte zwischen Molekülen.\n2. Wasserläufer können dank Oberflächenspannung auf Wasser laufen.\n3. Tenside erhöhen die Oberflächenspannung.\n4. Die Einheit der Oberflächenspannung ist N/m.\n5. Die Oberflächenspannung nimmt mit steigender Temperatur ab.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Kohäsion), 2 (Wasserläufer), 4 (N/m), 5 (σ sinkt mit T). Tenside verringern die Oberflächenspannung, nicht erhöhen (3 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 051 Mechanik (schwer) ──
  {
    id: "ph-typk-new-051",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur Elastizität und zum Hookeschen Gesetz sind richtig?\n\n1. Das Hookesche Gesetz gilt: F = k · Δx (im elastischen Bereich).\n2. Die Federkonstante k hat die Einheit N/m.\n3. Bei Überschreitung der Elastizitätsgrenze verformt sich der Körper plastisch.\n4. Das Elastizitätsmodul E beschreibt die Steifigkeit eines Materials.\n5. Gummi hat ein höheres Elastizitätsmodul als Stahl.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Hooke), 2 (N/m), 3 (plastische Verformung), 4 (E-Modul). Stahl hat ein viel höheres E-Modul als Gummi (5 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 052 Optik (leicht) ──
  {
    id: "ph-typk-new-052",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Spiegel sind richtig?\n\n1. Ein ebener Spiegel erzeugt ein virtuelles, seitenverkehrtes Bild.\n2. Bei einem Hohlspiegel werden parallele Strahlen im Brennpunkt gebündelt.\n3. Ein Konvexspiegel erzeugt stets ein verkleinertes, virtuelles Bild.\n4. Der Krümmungsradius eines Hohlspiegels ist doppelt so groß wie die Brennweite.\n5. Ein ebener Spiegel vergrößert das Bild.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 2, 3 und 4" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (virtuell, seitenverkehrt), 2 (Hohlspiegel: Brennpunkt), 3 (Konvexspiegel: verkleinert, virtuell), 4 (r = 2f). Ein ebener Spiegel erzeugt ein gleich großes Bild (5 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 053 Elektrizität (schwer) ──
  {
    id: "ph-typk-new-053",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Lorentzkraft sind richtig?\n\n1. Die Lorentzkraft wirkt auf bewegte Ladungen in einem Magnetfeld.\n2. Die Richtung wird durch die Drei-Finger-Regel bestimmt.\n3. Die Lorentzkraft verrichtet Arbeit an der Ladung.\n4. F_L = q · v · B · sin α.\n5. Die Lorentzkraft steht senkrecht zur Bewegungsrichtung und zum Magnetfeld.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 3 und 4" },
      { id: "c", text: "Nur 1, 2 und 5" },
      { id: "d", text: "Nur 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (bewegte Ladung im B-Feld), 2 (Drei-Finger-Regel), 4 (F = qvB sin α), 5 (senkrecht zu v und B). Da F ⊥ v, verrichtet die Lorentzkraft keine Arbeit (3 falsch; W = F·s·cos 90° = 0).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 054 Schwingungen (mittel) ──
  {
    id: "ph-typk-new-054",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zum mathematischen Pendel sind richtig?\n\n1. Die Schwingungsdauer T = 2π√(l/g).\n2. Die Schwingungsdauer hängt nicht von der Masse ab.\n3. Für kleine Winkel ist die Schwingung harmonisch.\n4. Die Schwingungsdauer hängt von der Amplitude ab.\n5. Am tiefsten Punkt ist die Geschwindigkeit maximal.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (T = 2π√(l/g)), 2 (masseunabhängig), 3 (harmonisch für kleine Winkel), 5 (v_max am tiefsten Punkt). Für kleine Winkel ist T unabhängig von der Amplitude — Isochronismus (4 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 055 Atomphysik (mittel) ──
  {
    id: "ph-typk-new-055",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zu Isotopen sind richtig?\n\n1. Isotope haben die gleiche Ordnungszahl, aber verschiedene Massenzahlen.\n2. Isotope unterscheiden sich in der Anzahl der Neutronen.\n3. Isotope eines Elements haben identische chemische Eigenschaften.\n4. Kohlenstoff-14 ist ein radioaktives Isotop.\n5. Alle Isotope eines Elements sind radioaktiv.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (gleiche Z, verschiedene A), 2 (Neutronenzahl variiert), 3 (nahezu identische Chemie), 4 (C-14 radioaktiv). Nicht alle Isotope sind radioaktiv — z. B. C-12 und C-13 sind stabil (5 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 056 Mechanik (leicht) ──
  {
    id: "ph-typk-new-056",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zu Geschwindigkeit und Beschleunigung sind richtig?\n\n1. Geschwindigkeit ist eine vektorielle Größe.\n2. Beschleunigung ist die zeitliche Änderung der Geschwindigkeit.\n3. Negative Beschleunigung bedeutet Bremsen (bei positiver Anfangsgeschwindigkeit).\n4. Die Einheit der Beschleunigung ist m/s.\n5. Geschwindigkeit hat Betrag und Richtung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Vektor), 2 (a = dv/dt), 3 (negatives a → Bremsen), 5 (Betrag + Richtung). Die Einheit der Beschleunigung ist m/s², nicht m/s (4 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 057 Wärmelehre (schwer) ──
  {
    id: "ph-typk-new-057",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zum Stefan-Boltzmann-Gesetz sind richtig?\n\n1. Die Strahlungsleistung eines schwarzen Körpers ist proportional zu T⁴.\n2. Das Gesetz lautet P = σ · A · T⁴.\n3. Ein schwarzer Körper absorbiert alle einfallende Strahlung.\n4. Das Wiensches Verschiebungsgesetz besagt: λ_max · T = const.\n5. Kältere Körper strahlen mehr Energie ab als heißere.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (P ∝ T⁴), 2 (Stefan-Boltzmann), 3 (schwarzer Körper), 4 (Wien: λ_max·T = const). Heißere Körper strahlen mehr Energie ab (5 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 058 Elektrizität (mittel) ──
  {
    id: "ph-typk-new-058",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum elektrischen Feld sind richtig?\n\n1. Elektrische Feldlinien verlaufen von positiven zu negativen Ladungen.\n2. Die elektrische Feldstärke E = F/q.\n3. Das Feld eines Plattenkondensators ist homogen.\n4. Die Einheit der Feldstärke ist V/m.\n5. Elektrische Feldlinien können sich kreuzen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (+ → −), 2 (E = F/q), 3 (homogen im Plattenkondensator), 4 (V/m = N/C). Feldlinien kreuzen sich nie, da die Feldrichtung an jedem Punkt eindeutig ist (5 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 059 Mechanik (mittel) ──
  {
    id: "ph-typk-new-059",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zu einfachen Maschinen sind richtig?\n\n1. Ein Hebel kann die benötigte Kraft verringern.\n2. Eine schiefe Ebene verlängert den Weg und verringert die Kraft.\n3. Die goldene Regel der Mechanik: Was man an Kraft spart, muss man an Weg zusetzen.\n4. Der Wirkungsgrad einer realen Maschine ist stets kleiner als 100 %.\n5. Ein Flaschenzug kann die aufzuwendende Kraft beliebig vergrößern.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Hebel verringert Kraft), 2 (schiefe Ebene), 3 (goldene Regel), 4 (η < 100 % real). Ein Flaschenzug verringert die Kraft, vergrößert sie nicht (5 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 060 Atomphysik (schwer) ──
  {
    id: "ph-typk-new-060",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zur Äquivalenz von Masse und Energie sind richtig?\n\n1. E = mc² beschreibt den Zusammenhang zwischen Masse und Energie.\n2. Bei Kernreaktionen wird ein Massendefekt in Energie umgewandelt.\n3. Die Lichtgeschwindigkeit c ≈ 3 · 10⁸ m/s.\n4. Eine kleine Masse entspricht einer enormen Energie.\n5. E = mc² gilt nur für ruhende Objekte.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2, 3, 4 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Nur 1, 2 und 3" },
    ],
    correctOptionId: "b",
    explanation:
      "Alle fünf Aussagen sind korrekt: 1 (E = mc²), 2 (Massendefekt), 3 (c ≈ 3·10⁸ m/s), 4 (c² = riesiger Faktor), 5 (E₀ = mc² ist die Ruheenergie; für bewegte Objekte gilt E² = (pc)² + (mc²)²).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 061 Optik (mittel) ──
  {
    id: "ph-typk-new-061",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum menschlichen Auge sind richtig?\n\n1. Die Augenlinse passt ihre Brennweite durch Akkommodation an.\n2. Kurzsichtigkeit wird mit Zerstreuungslinsen korrigiert.\n3. Weitsichtigkeit wird mit Sammellinsen korrigiert.\n4. Die Netzhaut enthält Stäbchen und Zapfen als Photorezeptoren.\n5. Bei Kurzsichtigkeit liegt der Brennpunkt hinter der Netzhaut.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Akkommodation), 2 (Myopie → Zerstreuungslinse), 3 (Hyperopie → Sammellinse), 4 (Stäbchen + Zapfen). Bei Kurzsichtigkeit liegt der Brennpunkt vor der Netzhaut, nicht dahinter (5 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 062 Wärmelehre (leicht) ──
  {
    id: "ph-typk-new-062",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zur Wärme und inneren Energie sind richtig?\n\n1. Wärme ist eine Form der Energieübertragung.\n2. Die innere Energie eines Körpers hängt von seiner Temperatur ab.\n3. Wärme fließt spontan von kalt nach warm.\n4. Temperatur ist ein Maß für die mittlere kinetische Energie der Teilchen.\n5. Die Einheit der Wärme ist Joule.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 3 und 5" },
      { id: "c", text: "Nur 1, 2 und 4" },
      { id: "d", text: "Nur 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Energieübertragung), 2 (U ∝ T), 4 (T ∝ E_kin), 5 (Joule). Wärme fließt spontan von warm nach kalt, nicht umgekehrt (3 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 063 Elektrizität (leicht) ──
  {
    id: "ph-typk-new-063",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur elektrischen Spannung sind richtig?\n\n1. Spannung ist die Energiedifferenz pro Ladung zwischen zwei Punkten.\n2. Die Einheit der Spannung ist Volt (V).\n3. Eine Batterie liefert Gleichspannung.\n4. Spannung ist eine skalare Größe.\n5. Ohne Spannung fließt kein Strom (in einem ohmschen Leiter).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2, 3, 4 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Nur 1, 2 und 4" },
    ],
    correctOptionId: "b",
    explanation:
      "Alle fünf Aussagen sind korrekt: 1 (U = W/q), 2 (Volt), 3 (Batterie = DC), 4 (Spannung ist skalar), 5 (U = 0 → I = 0 bei ohmschem Leiter).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 064 Mechanik (schwer) ──
  {
    id: "ph-typk-new-064",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur Rotationsbewegung sind richtig?\n\n1. Das Trägheitsmoment hängt von der Massenverteilung relativ zur Drehachse ab.\n2. Drehimpuls L = I · ω.\n3. In einem abgeschlossenen System bleibt der Drehimpuls erhalten.\n4. Die kinetische Energie der Rotation ist E_rot = ½ I ω².\n5. Das Trägheitsmoment eines Vollzylinders ist I = m·r².",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (I abhängig von Massenverteilung), 2 (L = Iω), 3 (Drehimpulserhaltung), 4 (E_rot = ½Iω²). Der Vollzylinder hat I = ½mr², nicht mr² (5 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 065 Akustik (leicht) ──
  {
    id: "ph-typk-new-065",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zu Ultraschall sind richtig?\n\n1. Ultraschall hat eine Frequenz oberhalb von 20 kHz.\n2. Ultraschall wird in der medizinischen Diagnostik eingesetzt.\n3. Ultraschall kann sich im Vakuum ausbreiten.\n4. Fledermäuse nutzen Ultraschall zur Echoortung.\n5. Ultraschall ist für das menschliche Ohr nicht hörbar.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (f > 20 kHz), 2 (Sonografie), 4 (Fledermäuse), 5 (nicht hörbar). Ultraschall ist Schall und braucht ein Medium — im Vakuum keine Ausbreitung (3 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 066 Fluidmechanik (schwer) ──
  {
    id: "ph-typk-new-066",
    subject: "physik",
    chapter: "phys-kap2",
    text: "Welche der folgenden Aussagen zur Bernoulli-Gleichung sind richtig?\n\n1. p + ½ρv² + ρgh = const entlang einer Stromlinie.\n2. Wo die Strömungsgeschwindigkeit steigt, sinkt der statische Druck.\n3. Die Bernoulli-Gleichung gilt für ideale, inkompressible Fluide.\n4. Der Venturi-Effekt folgt aus der Bernoulli-Gleichung.\n5. Die Bernoulli-Gleichung berücksichtigt Reibungsverluste.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Bernoulli-Gleichung), 2 (v↑ → p↓), 3 (ideales Fluid), 4 (Venturi). Die Bernoulli-Gleichung gilt für reibungsfreie Strömung (5 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 067 Wärmelehre (mittel) ──
  {
    id: "ph-typk-new-067",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zur Wärmeleitung sind richtig?\n\n1. Der Wärmestrom ist proportional zum Temperaturgradienten (Fourier-Gesetz).\n2. Metalle leiten Wärme gut, weil freie Elektronen Energie übertragen.\n3. Luft ist ein guter Wärmeleiter.\n4. Die Wärmeleitfähigkeit hat die Einheit W/(m·K).\n5. Doppelverglasungen nutzen den schlechten Wärmeleitungswert von Luft.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Fourier), 2 (freie Elektronen), 4 (W/(m·K)), 5 (Doppelverglasung). Luft ist ein schlechter Wärmeleiter, daher auch Isolator (3 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 068 Mechanik (mittel) ──
  {
    id: "ph-typk-new-068",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur Schwerpunktbewegung sind richtig?\n\n1. Der Schwerpunkt eines Systems bewegt sich so, als wäre die gesamte Masse dort konzentriert.\n2. Bei einem symmetrischen, homogenen Körper liegt der Schwerpunkt im geometrischen Zentrum.\n3. Der Schwerpunkt muss innerhalb des Körpers liegen.\n4. Die Schwerpunktgeschwindigkeit bleibt ohne äußere Kräfte konstant.\n5. Beim Wurf eines rotierenden Gegenstands bewegt sich der Schwerpunkt auf einer Parabel.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Schwerpunktbewegung), 2 (Symmetrie → Zentrum), 4 (p = const → v_SP = const), 5 (Parabel im Schwerefeld). Der Schwerpunkt kann auch außerhalb liegen (z. B. Ring, Hufeisen) (3 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 069 Strahlung (mittel) ──
  {
    id: "ph-typk-new-069",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zur Röntgenstrahlung sind richtig?\n\n1. Röntgenstrahlung entsteht, wenn schnelle Elektronen auf ein Metall treffen.\n2. Röntgenstrahlung kann Knochen durchdringen.\n3. Röntgenstrahlung ist eine Form elektromagnetischer Strahlung.\n4. Röntgenstrahlung hat eine längere Wellenlänge als sichtbares Licht.\n5. Röntgenstrahlung wird in der medizinischen Bildgebung verwendet.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Bremsstrahlung), 2 (durchdringt Weichgewebe), 3 (EM-Strahlung), 5 (Radiologie). Röntgenstrahlung hat eine kürzere Wellenlänge als sichtbares Licht (4 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 070 Mechanik (leicht) ──
  {
    id: "ph-typk-new-070",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zu Arbeit und Energie sind richtig?\n\n1. Arbeit W = F · s · cos α.\n2. Wenn Kraft und Weg senkrecht stehen, wird keine Arbeit verrichtet.\n3. Die kinetische Energie eines Körpers kann negativ sein.\n4. Die Einheit der Arbeit ist Joule (J = N · m).\n5. Energieerhaltung besagt, dass Energie weder erzeugt noch vernichtet wird.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (W = Fs cos α), 2 (cos 90° = 0 → W = 0), 4 (Joule), 5 (Energieerhaltung). E_kin = ½mv² ist stets ≥ 0, nie negativ (3 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 071 Elektrizität (mittel) ──
  {
    id: "ph-typk-new-071",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zu Halbleitern sind richtig?\n\n1. Halbleiter haben eine Leitfähigkeit zwischen der von Metallen und Isolatoren.\n2. Dotierung verändert die Leitfähigkeit von Halbleitern.\n3. Silizium ist ein häufig verwendeter Halbleiter.\n4. Bei Halbleitern sinkt der Widerstand mit steigender Temperatur.\n5. p-Dotierung bedeutet Einbau von Atomen mit mehr Valenzelektronen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (zwischen Leiter und Isolator), 2 (Dotierung), 3 (Silizium), 4 (R sinkt bei T↑ — Heißleiter). p-Dotierung = Einbau von Atomen mit weniger Valenzelektronen (z. B. Bor in Si) → Löcher (5 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 072 Schwingungen (mittel) ──
  {
    id: "ph-typk-new-072",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zu stehenden Wellen sind richtig?\n\n1. Stehende Wellen entstehen durch Überlagerung zweier gegenläufiger Wellen gleicher Frequenz.\n2. Knoten sind Punkte ohne Auslenkung.\n3. Bäuche sind Punkte maximaler Auslenkung.\n4. Stehende Wellen transportieren Energie in eine Richtung.\n5. Auf einer beidseitig eingespannten Saite können nur bestimmte Frequenzen stehende Wellen erzeugen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Superposition gegenläufiger Wellen), 2 (Knoten: Δx = 0), 3 (Bäuche: max. Δx), 5 (Eigenfrequenzen). Stehende Wellen transportieren keine Energie (4 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 073 Atomphysik (leicht) ──
  {
    id: "ph-typk-new-073",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zur Kernbindungsenergie sind richtig?\n\n1. Die Bindungsenergie pro Nukleon ist bei Eisen am höchsten.\n2. Ein Massendefekt entsteht, weil ein Teil der Masse in Bindungsenergie umgewandelt wird.\n3. Die Bindungsenergie hält Protonen und Neutronen im Kern zusammen.\n4. Die starke Kernkraft ist auf sehr kurze Distanzen beschränkt.\n5. Die Bindungsenergie pro Nukleon steigt bei allen Elementen mit der Massenzahl.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 3 und 5" },
      { id: "c", text: "Nur 1, 2 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Fe-Maximum), 2 (Massendefekt), 3 (Bindungsenergie), 4 (starke Kraft kurzreichweitig). Die Bindungsenergie/Nukleon steigt bis Fe und fällt dann wieder — nicht monoton (5 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 074 Wärmelehre (mittel) ──
  {
    id: "ph-typk-new-074",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zum Druck in Gasen sind richtig?\n\n1. Der Gasdruck entsteht durch Stöße der Gasteilchen gegen die Gefäßwand.\n2. Bei konstantem Volumen steigt der Druck mit der Temperatur (Gay-Lussac).\n3. Bei konstantem Druck dehnt sich ein Gas bei Erwärmung aus (Charles).\n4. Das Boylesche Gesetz beschreibt p · V = const bei konstanter Temperatur.\n5. Der Normaldruck auf Meereshöhe beträgt etwa 10 Pa.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 3 und 5" },
      { id: "c", text: "Nur 1, 2 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (kinetische Gastheorie), 2 (Gay-Lussac: p ∝ T bei V = const), 3 (Charles: V ∝ T bei p = const), 4 (Boyle: pV = const). Der Normaldruck beträgt ca. 101.325 Pa ≈ 1013 hPa (5 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 075 Elektrizität (schwer) ──
  {
    id: "ph-typk-new-075",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Coulombschen Gesetz sind richtig?\n\n1. Die Kraft zwischen zwei Ladungen ist proportional zum Produkt der Ladungen.\n2. Die Kraft nimmt mit dem Quadrat des Abstands ab.\n3. F = k · q₁ · q₂ / r².\n4. Gleichnamige Ladungen stoßen sich ab, ungleichnamige ziehen sich an.\n5. Die Coulombkraft wirkt nur in Festkörpern.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (F ∝ q₁q₂), 2 (1/r²), 3 (Coulomb-Gesetz), 4 (Anziehung/Abstoßung). Die Coulombkraft wirkt überall — im Vakuum, in Flüssigkeiten etc., nicht nur in Festkörpern (5 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
];
