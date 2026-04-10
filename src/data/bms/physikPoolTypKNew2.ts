/**
 * Physik Typ-K Pool 2 (Kombinationsaufgaben) — 75 Fragen im Question-Format.
 * IDs: ph-typk-new2-001 bis ph-typk-new2-075.
 * Themen-Schwerpunkt: Optik, Akustik, Atomphysik, Elektrizität, Medizinische Physik.
 * Schwierigkeit: ~30 % leicht, ~45 % mittel, ~25 % schwer.
 */
import type { Question } from "./index";

export const physikTypKNew2: Question[] = [
  // ── 001 Optik – Brechung (leicht) ──
  {
    id: "ph-typk-new2-001",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Lichtbrechung sind richtig?\n\n1. Beim Übergang vom optisch dünneren ins dichtere Medium wird Licht zum Lot hin gebrochen.\n2. Der Brechungsindex von Wasser beträgt etwa 1,33.\n3. Totalreflexion kann beim Übergang vom optisch dünneren ins dichtere Medium auftreten.\n4. Die Frequenz des Lichts ändert sich bei der Brechung nicht.\n5. Der Brechungswinkel ist stets kleiner als der Einfallswinkel.",
    options: [
      { id: "a", text: "Nur 1, 2 und 4" },
      { id: "b", text: "Nur 1, 2, 4 und 5" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1 korrekt (zum Lot bei n₂ > n₁). 2 korrekt (n_Wasser ≈ 1,33). 4 korrekt (Frequenz bleibt konstant). 3 falsch: Totalreflexion tritt nur beim Übergang vom dichteren ins dünnere Medium auf. 5 falsch: nur beim Übergang ins dichtere Medium, nicht beim umgekehrten.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 002 Optik – Linsen (mittel) ──
  {
    id: "ph-typk-new2-002",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen über Sammellinsen sind richtig?\n\n1. Parallel zur optischen Achse einfallende Strahlen werden im Brennpunkt vereinigt.\n2. Die Brechkraft D ist der Kehrwert der Brennweite f.\n3. Ein Gegenstand innerhalb der Brennweite erzeugt ein reelles Bild.\n4. Die Einheit der Brechkraft ist Dioptrie (dpt).\n5. Je kürzer die Brennweite, desto stärker die Brechkraft.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1 und 2" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Innerhalb der Brennweite entsteht ein virtuelles, aufrechtes, vergrößertes Bild (Lupe).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 003 Akustik – Schallwellen (leicht) ──
  {
    id: "ph-typk-new2-003",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen über Schallwellen sind richtig?\n\n1. Schall breitet sich im Vakuum nicht aus.\n2. Schallwellen sind Longitudinalwellen.\n3. Die Schallgeschwindigkeit in Luft beträgt etwa 340 m/s.\n4. Die Lautstärke wird in Hertz gemessen.\n5. Schall breitet sich in Festkörpern schneller aus als in Luft.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 2, 3 und 5" },
      { id: "d", text: "Nur 1, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Lautstärke wird in Dezibel (dB) gemessen; Hertz ist die Einheit der Frequenz.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 005 Elektrizität – Kirchhoff (mittel) ──
  {
    id: "ph-typk-new2-005",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zu den Kirchhoff'schen Regeln sind richtig?\n\n1. Die Knotenregel besagt, dass die Summe aller Ströme in einem Knoten null ist.\n2. Die Maschenregel besagt, dass die Summe aller Spannungen in einer Masche null ist.\n3. Die Knotenregel basiert auf der Energieerhaltung.\n4. In einer Reihenschaltung ist der Strom überall gleich.\n5. Die Maschenregel basiert auf der Energieerhaltung.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 1 und 2" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Die Knotenregel basiert auf der Ladungserhaltung, nicht der Energieerhaltung. Die Maschenregel (5) basiert auf der Energieerhaltung.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 007 Akustik – Doppler-Effekt (mittel) ──
  {
    id: "ph-typk-new2-007",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zum Doppler-Effekt bei Schall sind richtig?\n\n1. Nähert sich die Schallquelle dem Beobachter, nimmt die wahrgenommene Frequenz zu.\n2. Entfernt sich der Beobachter von der Quelle, nimmt die wahrgenommene Frequenz ab.\n3. Der Doppler-Effekt tritt nur bei Schallwellen auf.\n4. Bei Überschallgeschwindigkeit der Quelle entsteht ein Machkegel.\n5. Die wahrgenommene Wellenlänge ändert sich bei Relativbewegung.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1 und 2" },
      { id: "c", text: "Nur 1, 2 und 5" },
      { id: "d", text: "Nur 1, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Der Doppler-Effekt tritt bei allen Wellenarten auf, auch bei Licht (Rotverschiebung).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 008 Atomphysik – Strahlenarten (leicht) ──
  {
    id: "ph-typk-new2-008",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zu den Strahlenarten sind richtig?\n\n1. α-Strahlung besteht aus Heliumkernen.\n2. β-Strahlung besteht aus Elektronen oder Positronen.\n3. γ-Strahlung ist elektromagnetische Strahlung.\n4. α-Strahlung hat die größte Reichweite in Luft.\n5. γ-Strahlung ist ungeladen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3, 4 und 5" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: α-Strahlung hat die geringste Reichweite (wenige cm in Luft); γ-Strahlung hat die größte.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 009 Elektrizität – Kondensatoren (schwer) ──
  {
    id: "ph-typk-new2-009",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zu Kondensatoren sind richtig?\n\n1. Die Kapazität C eines Plattenkondensators ist proportional zur Fläche A.\n2. Die Kapazität ist umgekehrt proportional zum Plattenabstand d.\n3. Die gespeicherte Energie beträgt W = ½ · C · U².\n4. Bei Parallelschaltung addieren sich die Kapazitäten.\n5. Bei Reihenschaltung addieren sich die Kapazitäten.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Bei Reihenschaltung gilt 1/C_ges = 1/C₁ + 1/C₂ + ..., die Kapazitäten addieren sich nicht direkt.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 011 Optik – Polarisation (schwer) ──
  {
    id: "ph-typk-new2-011",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Polarisation von Licht sind richtig?\n\n1. Nur Transversalwellen können polarisiert werden.\n2. Ein Polarisationsfilter lässt nur eine Schwingungsebene durch.\n3. Reflexion an Glas kann Licht teilweise polarisieren.\n4. Longitudinalwellen können ebenfalls polarisiert werden.\n5. Beim Brewster-Winkel ist das reflektierte Licht vollständig polarisiert.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Longitudinalwellen (z. B. Schall) können nicht polarisiert werden, da sie nur eine Schwingungsrichtung haben.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 012 Akustik – Dezibel (leicht) ──
  {
    id: "ph-typk-new2-012",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zur Dezibel-Skala sind richtig?\n\n1. Die Dezibel-Skala ist logarithmisch.\n2. Eine Verdopplung der Schallintensität entspricht einer Erhöhung um 3 dB.\n3. 0 dB bedeutet absolute Stille.\n4. Die Schmerzschwelle liegt bei etwa 120–130 dB.\n5. 10 dB Erhöhung entspricht einer Verzehnfachung der Schallintensität.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 1, 2 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: 0 dB ist die Hörschwelle (I₀ = 10⁻¹² W/m²), nicht absolute Stille.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 013 Elektrizität – Magnetismus (mittel) ──
  {
    id: "ph-typk-new2-013",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Magnetismus sind richtig?\n\n1. Gleichnamige Magnetpole stoßen sich ab.\n2. Die magnetische Flussdichte B wird in Tesla gemessen.\n3. Ein stromdurchflossener Leiter erzeugt ein Magnetfeld.\n4. Magnetische Monopole kommen in der Natur häufig vor.\n5. Die Lorentzkraft wirkt auf bewegte Ladungen in einem Magnetfeld.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1 und 2" },
      { id: "c", text: "Nur 1, 2, 3, 4 und 5" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Nur 1, 3 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Magnetische Monopole wurden bisher nicht nachgewiesen; Magnete haben immer Nord- und Südpol.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 014 Atomphysik – Halbwertszeit (leicht) ──
  {
    id: "ph-typk-new2-014",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zur Halbwertszeit sind richtig?\n\n1. Nach einer Halbwertszeit ist die Hälfte der ursprünglichen Kerne zerfallen.\n2. Nach zwei Halbwertszeiten ist noch ein Viertel der Kerne übrig.\n3. Die Halbwertszeit ist für jedes Isotop eine konstante Größe.\n4. Die Halbwertszeit kann durch äußere Bedingungen (Druck, Temperatur) verändert werden.\n5. N(t) = N₀ · (1/2)^(t/t₁/₂) beschreibt den Zerfall.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1 und 2" },
      { id: "c", text: "Nur 1, 2, 4 und 5" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Die Halbwertszeit ist eine Kerneigenschaft und wird durch äußere Bedingungen praktisch nicht beeinflusst.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 015 Medizinische Physik – Ultraschall (mittel) ──
  {
    id: "ph-typk-new2-015",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zum Ultraschall in der Medizin sind richtig?\n\n1. Ultraschall nutzt Frequenzen oberhalb von 20 kHz.\n2. Die Bildgebung basiert auf der Reflexion von Schallwellen an Gewebegrenzen.\n3. Ultraschall verwendet ionisierende Strahlung.\n4. Der piezoelektrische Effekt wird zur Erzeugung und zum Empfang genutzt.\n5. Die Eindringtiefe nimmt mit steigender Frequenz ab.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 2, 4 und 5" },
      { id: "d", text: "Nur 1, 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Ultraschall ist keine ionisierende Strahlung, weshalb er als besonders sicheres Diagnoseverfahren gilt.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 016 Optik – Dispersion (mittel) ──
  {
    id: "ph-typk-new2-016",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Dispersion von Licht sind richtig?\n\n1. Dispersion ist die Abhängigkeit des Brechungsindex von der Wellenlänge.\n2. Ein Prisma kann weißes Licht in sein Spektrum zerlegen.\n3. Blaues Licht wird stärker gebrochen als rotes Licht.\n4. Dispersion verursacht den Regenbogen.\n5. Bei Dispersion ändert sich die Frequenz des Lichts.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Bei Dispersion ändert sich die Ausbreitungsgeschwindigkeit und die Wellenlänge, aber nicht die Frequenz.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 018 Akustik – Resonanz (mittel) ──
  {
    id: "ph-typk-new2-018",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zur akustischen Resonanz sind richtig?\n\n1. Resonanz tritt auf, wenn die Erregerfrequenz gleich der Eigenfrequenz ist.\n2. Bei Resonanz ist die Amplitude maximal.\n3. Resonanz kann nur bei Schallwellen auftreten.\n4. Eine Stimmgabel schwingt in ihrer Eigenfrequenz.\n5. Dämpfung verringert die Resonanzamplitude.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 2 und 5" },
      { id: "d", text: "Nur 1, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Resonanz ist ein allgemeines physikalisches Phänomen und tritt bei allen schwingungsfähigen Systemen auf.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 019 Optik – Spiegel (leicht) ──
  {
    id: "ph-typk-new2-019",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zu Spiegeln sind richtig?\n\n1. Bei einem Planspiegel ist das Bild virtuell und seitenverkehrt.\n2. Einfallswinkel ist gleich Reflexionswinkel.\n3. Ein Hohlspiegel erzeugt immer ein vergrößertes Bild.\n4. Der Brennpunkt eines Hohlspiegels liegt bei r/2.\n5. Ein Konvexspiegel erzeugt immer ein virtuelles, verkleinertes Bild.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 2, 4 und 5" },
      { id: "d", text: "Nur 1, 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Ein Hohlspiegel erzeugt je nach Gegenstandsweite verschiedene Bilder (vergrößert, verkleinert, reell oder virtuell).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 020 Medizinische Physik – MRT (schwer) ──
  {
    id: "ph-typk-new2-020",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zum MRT-Prinzip sind richtig?\n\n1. MRT nutzt starke Magnetfelder und Hochfrequenzpulse.\n2. Die Kernspinresonanz von Wasserstoffkernen wird detektiert.\n3. MRT verwendet Röntgenstrahlung zur Bildgebung.\n4. Die Relaxationszeiten T1 und T2 ermöglichen Gewebekontraste.\n5. MRT liefert besonders gute Weichteildarstellungen.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: MRT verwendet keine Röntgenstrahlung, sondern Magnetfelder und Hochfrequenzpulse (nicht-ionisierend).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 021 Optik – Farben (leicht) ──
  {
    id: "ph-typk-new2-021",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zu Licht und Farben sind richtig?\n\n1. Weißes Licht besteht aus allen Spektralfarben.\n2. Rotes Licht hat eine größere Wellenlänge als blaues Licht.\n3. Die Wellenlänge des sichtbaren Lichts liegt zwischen ca. 380 nm und 780 nm.\n4. Grünes Licht hat eine höhere Frequenz als rotes Licht.\n5. Alle Farben haben im Vakuum die gleiche Ausbreitungsgeschwindigkeit.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2, 3, 4 und 5" },
      { id: "c", text: "Nur 1, 2 und 3" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "e",
    explanation:
      "Alle 5 Aussagen sind korrekt. Weißes Licht = Spektralfarben (1), λ_rot > λ_blau (2), sichtbar 380–780 nm (3), f_grün > f_rot (4), im Vakuum gleiche Geschwindigkeit c (5).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 022 Elektrizität – Wechselstrom (schwer) ──
  {
    id: "ph-typk-new2-022",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Wechselstrom sind richtig?\n\n1. Die Netzfrequenz in Europa beträgt 50 Hz.\n2. Der Effektivwert der Spannung beträgt U_eff = U₀/√2.\n3. Die Momentanleistung ist zeitlich konstant.\n4. Ein Transformator kann Wechselspannungen umwandeln.\n5. Im Haushalt beträgt die Effektivspannung 230 V.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 4 und 5" },
      { id: "c", text: "Nur 1, 2 und 5" },
      { id: "d", text: "Nur 1, 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Die Momentanleistung bei Wechselstrom schwankt sinusförmig und ist nicht konstant.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 023 Atomphysik – Kernspaltung (mittel) ──
  {
    id: "ph-typk-new2-023",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zur Kernspaltung sind richtig?\n\n1. Bei der Kernspaltung wird ein schwerer Kern in leichtere Kerne gespalten.\n2. Die Kettenreaktion wird durch Neutronen aufrechterhalten.\n3. Die freigesetzte Energie stammt aus dem Massendefekt.\n4. Uran-238 ist besser spaltbar als Uran-235.\n5. E = mc² beschreibt die Äquivalenz von Masse und Energie.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3, 4 und 5" },
      { id: "d", text: "Nur 1, 2 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Uran-235 ist das besser spaltbare Isotop; Uran-238 ist das häufigere, aber schwerer spaltbare Isotop.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 024 Optik – Lupe und Mikroskop (mittel) ──
  {
    id: "ph-typk-new2-024",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zu Lupe und Mikroskop sind richtig?\n\n1. Eine Lupe erzeugt ein virtuelles, vergrößertes Bild.\n2. Die Vergrößerung der Lupe ist V = 25 cm / f.\n3. Ein Mikroskop besteht aus Objektiv und Okular.\n4. Das Objektiv erzeugt ein reelles Zwischenbild.\n5. Das Mikroskop erzeugt ein aufrechtes Endbild.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3, 4 und 5" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Das Lichtmikroskop erzeugt ein umgekehrtes (auf dem Kopf stehendes) Endbild.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 025 Elektrizität – Elektrisches Feld (leicht) ──
  {
    id: "ph-typk-new2-025",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum elektrischen Feld sind richtig?\n\n1. Die elektrische Feldstärke E hat die Einheit V/m.\n2. Feldlinien zeigen von positiven zu negativen Ladungen.\n3. Im Inneren eines Leiters ist das elektrische Feld null.\n4. Die Kraft auf eine Ladung ist F = q · E.\n5. Elektrische Feldlinien können sich kreuzen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Elektrische Feldlinien kreuzen sich nie, da an jedem Punkt nur eine eindeutige Feldrichtung existiert.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 027 Medizinische Physik – Strahlentherapie (schwer) ──
  {
    id: "ph-typk-new2-027",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zur Strahlentherapie sind richtig?\n\n1. In der Strahlentherapie wird ionisierende Strahlung eingesetzt.\n2. Die Dosis wird in Gray (Gy) angegeben.\n3. Tumorzellen sind empfindlicher als gesunde Zellen, weil sie sich häufiger teilen.\n4. Die Äquivalentdosis berücksichtigt die biologische Wirksamkeit und wird in Sievert (Sv) gemessen.\n5. Alle Strahlungsarten haben die gleiche biologische Wirksamkeit.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 2, 3 und 5" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: α-Strahlung hat einen höheren Strahlungswichtungsfaktor (20) als γ- oder β-Strahlung (1).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 028 Optik – Totalreflexion (mittel) ──
  {
    id: "ph-typk-new2-028",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Totalreflexion sind richtig?\n\n1. Totalreflexion tritt beim Übergang vom optisch dichteren ins dünnere Medium auf.\n2. Der Grenzwinkel hängt vom Brechungsindex beider Medien ab.\n3. Lichtleitkabel (Glasfasern) nutzen das Prinzip der Totalreflexion.\n4. Bei Totalreflexion geht kein Licht ins zweite Medium über.\n5. Totalreflexion kann auch beim Übergang vom dünneren ins dichtere Medium auftreten.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Totalreflexion tritt nur beim Übergang vom optisch dichteren ins dünnere Medium auf.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 029 Elektrizität – Elektrische Leistung (leicht) ──
  {
    id: "ph-typk-new2-029",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur elektrischen Leistung sind richtig?\n\n1. Die elektrische Leistung ist P = U · I.\n2. Die Einheit der Leistung ist Watt (W).\n3. P = I² · R gilt für ohmsche Widerstände.\n4. P = U² / R gilt für ohmsche Widerstände.\n5. Die elektrische Arbeit ist W = P / t.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die elektrische Arbeit ist W = P · t (nicht P / t).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 031 Optik – Beugung (schwer) ──
  {
    id: "ph-typk-new2-031",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Beugung von Licht sind richtig?\n\n1. Beugung tritt auf, wenn Licht auf ein Hindernis oder eine Öffnung trifft.\n2. Das Ausmaß der Beugung hängt vom Verhältnis Wellenlänge zu Spaltbreite ab.\n3. Am Einzelspalt entstehen Beugungsminima bei sin α = n · λ/b.\n4. Beugung ist ein reines Teilchenphänomen.\n5. Je kleiner die Spaltöffnung, desto stärker die Beugung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 1, 2 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Beugung ist ein typisches Wellenphänomen und kann nicht mit dem Teilchenmodell erklärt werden.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 032 Elektrizität – Coulomb-Gesetz (mittel) ──
  {
    id: "ph-typk-new2-032",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Coulomb-Gesetz sind richtig?\n\n1. Die Kraft zwischen zwei Ladungen ist proportional zum Produkt der Ladungen.\n2. Die Kraft nimmt mit dem Quadrat des Abstands ab.\n3. Gleichnamige Ladungen ziehen sich an.\n4. Die Coulomb-Kraft ist eine Zentralkraft.\n5. Die Einheit der elektrischen Ladung ist Coulomb (C).",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 1, 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Gleichnamige Ladungen stoßen sich ab; ungleichnamige ziehen sich an.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 033 Akustik – Obertöne (schwer) ──
  {
    id: "ph-typk-new2-033",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zu Obertönen und Klangfarbe sind richtig?\n\n1. Die Klangfarbe wird durch das Obertonspektrum bestimmt.\n2. Der Grundton hat die niedrigste Frequenz.\n3. Obertöne sind ganzzahlige Vielfache der Grundfrequenz bei Saiteninstrumenten.\n4. Ein reiner Sinuston enthält keine Obertöne.\n5. Alle Instrumente haben identische Obertonspektren.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Jedes Instrument hat ein charakteristisches Obertonspektrum, was die unterschiedliche Klangfarbe ausmacht.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 034 Medizinische Physik – CT (mittel) ──
  {
    id: "ph-typk-new2-034",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zur Computertomographie (CT) sind richtig?\n\n1. CT verwendet Röntgenstrahlung.\n2. Aus vielen Projektionen wird ein Schnittbild berechnet.\n3. CT liefert dreidimensionale Bilddaten.\n4. Die Strahlenbelastung bei CT ist geringer als bei einer einfachen Röntgenaufnahme.\n5. Die Hounsfield-Skala ordnet jedem Gewebe einen Dichtewert zu.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2 und 5" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: CT hat eine deutlich höhere Strahlenbelastung als eine einfache Röntgenaufnahme.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 035 Optik – Optische Instrumente (leicht) ──
  {
    id: "ph-typk-new2-035",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum menschlichen Auge sind richtig?\n\n1. Die Linse des Auges kann ihre Brechkraft ändern (Akkommodation).\n2. Bei Kurzsichtigkeit ist der Augapfel zu lang.\n3. Kurzsichtigkeit wird mit einer Sammellinse korrigiert.\n4. Die Netzhaut enthält Stäbchen und Zapfen als Photorezeptoren.\n5. Der Gelbe Fleck ist der Ort des schärfsten Sehens.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Kurzsichtigkeit wird mit einer Zerstreuungslinse (Konkavlinse) korrigiert, nicht mit einer Sammellinse.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 037 Atomphysik – Photoeffekt (schwer) ──
  {
    id: "ph-typk-new2-037",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zum Photoeffekt sind richtig?\n\n1. Licht muss eine Mindestfrequenz haben, um Elektronen aus einer Metalloberfläche zu lösen.\n2. Die kinetische Energie der Elektronen steigt mit der Intensität des Lichts.\n3. Die Austrittsarbeit ist materialabhängig.\n4. E = h · f beschreibt die Energie eines Photons.\n5. Der Photoeffekt bestätigt den Teilchencharakter des Lichts.",
    options: [
      { id: "a", text: "Nur 1, 3, 4 und 5" },
      { id: "b", text: "Nur 1, 4 und 5" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 3, 4, 5 korrekt. 2 falsch: Die kinetische Energie steigt mit der Frequenz (nicht der Intensität); die Intensität beeinflusst die Anzahl der Elektronen.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 038 Optik – Lichtgeschwindigkeit (mittel) ──
  {
    id: "ph-typk-new2-038",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Lichtgeschwindigkeit sind richtig?\n\n1. Die Lichtgeschwindigkeit im Vakuum beträgt ca. 3 · 10⁸ m/s.\n2. In einem Medium ist die Lichtgeschwindigkeit geringer als im Vakuum.\n3. Die Lichtgeschwindigkeit ist die maximale Geschwindigkeit, mit der Informationen übertragen werden können.\n4. In Glas ist die Lichtgeschwindigkeit größer als in Wasser.\n5. Die Lichtgeschwindigkeit hängt im Vakuum von der Wellenlänge ab.",
    options: [
      { id: "a", text: "Nur 1, 2 und 3" },
      { id: "b", text: "Nur 1, 2, 3 und 4" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3 korrekt. 4 falsch: Glas hat einen höheren Brechungsindex (n ≈ 1,5) als Wasser (n ≈ 1,33), daher ist Licht in Glas langsamer. 5 falsch: Im Vakuum ist c für alle Wellenlängen gleich.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 039 Akustik – Schallintensität (leicht) ──
  {
    id: "ph-typk-new2-039",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zur Schallintensität sind richtig?\n\n1. Die Schallintensität ist die Schallleistung pro Fläche.\n2. Die Einheit der Schallintensität ist W/m².\n3. Die Schallintensität nimmt mit dem Quadrat des Abstands ab.\n4. Die Hörschwelle liegt bei etwa 10⁻¹² W/m².\n5. Die Schallintensität ist proportional zum Quadrat der Amplitude.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2, 3, 4 und 5" },
      { id: "c", text: "Nur 1, 2 und 3" },
      { id: "d", text: "Nur 1, 4 und 5" },
      { id: "e", text: "Nur 2, 3 und 5" },
    ],
    correctOptionId: "b",
    explanation:
      "Alle 5 Aussagen sind korrekt: I = P/A (1), Einheit W/m² (2), I ∝ 1/r² (3), I₀ = 10⁻¹² W/m² (4), I ∝ A² (5).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 040 Elektrizität – Spulen (schwer) ──
  {
    id: "ph-typk-new2-040",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zu Spulen und Induktivität sind richtig?\n\n1. Eine Spule erzeugt ein Magnetfeld, wenn Strom fließt.\n2. Die Induktivität L hat die Einheit Henry (H).\n3. Die Selbstinduktionsspannung wirkt der Stromänderung entgegen.\n4. Die gespeicherte Energie in einer Spule beträgt W = ½ · L · I².\n5. Die Induktivität einer Spule ist unabhängig von der Windungszahl.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Induktivität steigt mit dem Quadrat der Windungszahl (L ∝ N²).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 041 Atomphysik – Kernfusion (mittel) ──
  {
    id: "ph-typk-new2-041",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zur Kernfusion sind richtig?\n\n1. Bei der Kernfusion verschmelzen leichte Kerne zu schwereren.\n2. Die Sonne gewinnt ihre Energie durch Kernfusion.\n3. Für die Kernfusion sind sehr hohe Temperaturen notwendig.\n4. Bei der Fusion von Deuterium und Tritium entsteht Helium.\n5. Kernfusion setzt weniger Energie frei als Kernspaltung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Pro Nukleon setzt Kernfusion mehr Energie frei als Kernspaltung.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 042 Optik – Wellenoptik vs. Strahlenoptik (mittel) ──
  {
    id: "ph-typk-new2-042",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zu Wellen- und Strahlenoptik sind richtig?\n\n1. Die Strahlenoptik ist ein Grenzfall der Wellenoptik für kleine Wellenlängen.\n2. Beugung und Interferenz werden durch die Wellenoptik beschrieben.\n3. Reflexion und Brechung können mit der Strahlenoptik erklärt werden.\n4. Die Wellenoptik erklärt die geradlinige Ausbreitung von Licht.\n5. Die Strahlenoptik versagt bei Spaltbreiten in der Größenordnung der Wellenlänge.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 2, 3 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Die geradlinige Ausbreitung wird durch die Strahlenoptik beschrieben; die Wellenoptik erklärt gerade Beugung und Interferenz.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 043 Elektrizität – Halbleiter (schwer) ──
  {
    id: "ph-typk-new2-043",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zu Halbleitern sind richtig?\n\n1. Silizium und Germanium sind typische Halbleiter.\n2. Durch Dotierung kann die Leitfähigkeit eines Halbleiters verändert werden.\n3. Bei n-Dotierung werden Donatoren eingebaut, die zusätzliche Elektronen liefern.\n4. Halbleiter leiten den Strom bei tiefen Temperaturen besser als bei hohen.\n5. Die Leitfähigkeit von Halbleitern nimmt mit steigender Temperatur zu.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Halbleiter leiten bei tiefen Temperaturen schlechter; mit steigender Temperatur werden mehr Ladungsträger freigesetzt.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 044 Medizinische Physik – Dosimetrie (mittel) ──
  {
    id: "ph-typk-new2-044",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zur Strahlendosimetrie sind richtig?\n\n1. Die Energiedosis hat die Einheit Gray (1 Gy = 1 J/kg).\n2. Die Äquivalentdosis berücksichtigt den Strahlungswichtungsfaktor.\n3. Die effektive Dosis berücksichtigt die Empfindlichkeit verschiedener Organe.\n4. Die natürliche Strahlenbelastung beträgt in Österreich etwa 2–3 mSv pro Jahr.\n5. Die Energiedosis und die Äquivalentdosis sind bei γ-Strahlung numerisch gleich.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2, 3, 4 und 5" },
      { id: "c", text: "Nur 1, 2 und 3" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Nur 2, 3 und 4" },
    ],
    correctOptionId: "b",
    explanation:
      "Alle 5 korrekt: Gray = J/kg (1), Äquivalentdosis = D × w_R (2), effektive Dosis = Σ w_T × H_T (3), natürliche Belastung ≈ 2–3 mSv/a (4), w_R für γ = 1, daher Gy = Sv numerisch gleich (5).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 045 Optik – Farbmischung (leicht) ──
  {
    id: "ph-typk-new2-045",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Farbmischung sind richtig?\n\n1. Die additive Farbmischung arbeitet mit Lichtquellen.\n2. Die Grundfarben der additiven Mischung sind Rot, Grün und Blau.\n3. Die subtraktive Farbmischung arbeitet mit Pigmenten und Filtern.\n4. Rot + Grün ergibt bei additiver Mischung Gelb.\n5. Die Grundfarben der subtraktiven Mischung sind Rot, Grün und Blau.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2 und 4" },
      { id: "d", text: "Nur 1, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Grundfarben der subtraktiven Mischung sind Cyan, Magenta und Gelb (CMY).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 046 Elektrizität – Energie und Spannung (mittel) ──
  {
    id: "ph-typk-new2-046",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur elektrischen Spannung sind richtig?\n\n1. Die Spannung ist die Potentialdifferenz zwischen zwei Punkten.\n2. Die Einheit der Spannung ist Volt (V = J/C).\n3. In einer Reihenschaltung teilt sich die Gesamtspannung auf die Widerstände auf.\n4. In einer Parallelschaltung ist die Spannung an allen Widerständen gleich.\n5. Die Spannung einer Batterie hängt vom angeschlossenen Widerstand ab.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 4 und 5" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Leerlaufspannung (EMK) einer idealen Batterie ist konstant und hängt nicht vom Widerstand ab (bei realer Batterie sinkt die Klemmenspannung durch den Innenwiderstand, aber die EMK bleibt gleich).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 047 Akustik – Schallausbreitung (mittel) ──
  {
    id: "ph-typk-new2-047",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zur Schallausbreitung sind richtig?\n\n1. Schallgeschwindigkeit in Luft steigt mit der Temperatur.\n2. In Wasser ist die Schallgeschwindigkeit etwa 1500 m/s.\n3. Die Wellenlänge des Schalls ist λ = v/f.\n4. Infraschall liegt unter 16 Hz.\n5. Die Schallgeschwindigkeit in Luft hängt vom Luftdruck ab.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 2, 3, 4 und 5" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Schallgeschwindigkeit in Luft hängt primär von der Temperatur ab, nicht vom Druck (bei idealen Gasen hebt sich der Druckeffekt auf).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 048 Atomphysik – Isotope (leicht) ──
  {
    id: "ph-typk-new2-048",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zu Isotopen sind richtig?\n\n1. Isotope eines Elements haben die gleiche Protonenzahl.\n2. Isotope unterscheiden sich in der Neutronenzahl.\n3. Isotope haben identische chemische Eigenschaften.\n4. Nicht alle Isotope eines Elements sind radioaktiv.\n5. Die Massenzahl A gibt die Summe aus Protonen und Neutronen an.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2, 3, 4 und 5" },
      { id: "c", text: "Nur 1, 2 und 5" },
      { id: "d", text: "Nur 1, 4 und 5" },
      { id: "e", text: "Nur 1, 2, 3 und 5" },
    ],
    correctOptionId: "b",
    explanation:
      "Alle 5 Aussagen sind korrekt: gleiche Protonenzahl (1), verschiedene Neutronenzahl (2), nahezu identische chemische Eigenschaften (3), stabile und instabile Isotope existieren (4), A = Z + N (5).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 049 Optik – Glasfaser (schwer) ──
  {
    id: "ph-typk-new2-049",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zu Glasfasern (Lichtleitern) sind richtig?\n\n1. Das Licht wird durch Totalreflexion im Kern gehalten.\n2. Der Brechungsindex des Kerns muss größer sein als der des Mantels.\n3. Glasfasern können nur infrarotes Licht übertragen.\n4. Signalverluste in Glasfasern werden als Dämpfung bezeichnet.\n5. Multimodefasern haben einen größeren Kerndurchmesser als Singlemodefasern.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 1, 2 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Glasfasern können sichtbares Licht und nahes Infrarot übertragen, nicht nur Infrarot.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 050 Elektrizität – Elektromotor (mittel) ──
  {
    id: "ph-typk-new2-050",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Elektromotor sind richtig?\n\n1. Ein Elektromotor wandelt elektrische Energie in mechanische Energie um.\n2. Die Lorentzkraft bewirkt die Drehbewegung des Rotors.\n3. Ein Kommutator sorgt bei Gleichstrommotoren für die Stromumkehr.\n4. Der Wirkungsgrad eines Elektromotors beträgt immer 100 %.\n5. Das Drehmoment hängt von Strom und Magnetfeldstärke ab.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Durch Reibung, ohmsche Verluste etc. ist der Wirkungsgrad stets unter 100 %.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 051 Mechanik – Impuls (leicht) ──
  {
    id: "ph-typk-new2-051",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zum Impuls sind richtig?\n\n1. Der Impuls ist p = m · v.\n2. Der Impuls ist eine vektorielle Größe.\n3. In einem abgeschlossenen System ist der Gesamtimpuls erhalten.\n4. Die Einheit des Impulses ist kg · m/s.\n5. Der Impuls ist immer positiv.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Als Vektorgröße kann der Impuls je nach Richtung auch negative Komponenten haben.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 052 Optik – Laser (schwer) ──
  {
    id: "ph-typk-new2-052",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Laser sind richtig?\n\n1. Laserlicht ist kohärent.\n2. Laserlicht ist monochromatisch.\n3. Die stimulierte Emission ist das zentrale Prinzip des Lasers.\n4. Laserlicht ist unpolarisiert.\n5. Laserlicht hat eine sehr geringe Divergenz (hohe Bündelung).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Laserlicht ist in der Regel polarisiert, nicht unpolarisiert.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 054 Elektrizität – Magnetische Flussdichte (mittel) ──
  {
    id: "ph-typk-new2-054",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur magnetischen Flussdichte B sind richtig?\n\n1. Die Einheit von B ist Tesla (T).\n2. B = μ₀ · n · I gilt für eine lange Spule.\n3. Die magnetische Flussdichte ist eine skalare Größe.\n4. Außerhalb einer langen Spule ist B nahezu null.\n5. 1 T = 1 kg/(A · s²).",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1 und 2" },
      { id: "c", text: "Nur 1, 2 und 4" },
      { id: "d", text: "Nur 1, 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Die magnetische Flussdichte B ist eine vektorielle Größe.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 055 Wärmelehre – Ideales Gas (mittel) ──
  {
    id: "ph-typk-new2-055",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zum idealen Gas sind richtig?\n\n1. p · V = n · R · T ist die ideale Gasgleichung.\n2. Bei konstantem Volumen ist der Druck proportional zur Temperatur.\n3. Bei isothermer Expansion sinkt der Druck.\n4. Die Teilchen eines idealen Gases haben kein Eigenvolumen.\n5. Zwischen den Teilchen eines idealen Gases wirken starke Anziehungskräfte.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Im Modell des idealen Gases gibt es keine Wechselwirkungskräfte zwischen den Teilchen.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 056 Atomphysik – Welle-Teilchen-Dualismus (schwer) ──
  {
    id: "ph-typk-new2-056",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zum Welle-Teilchen-Dualismus sind richtig?\n\n1. Licht zeigt sowohl Wellen- als auch Teilcheneigenschaften.\n2. Die De-Broglie-Wellenlänge eines Teilchens ist λ = h/p.\n3. Elektronen zeigen Beugungsmuster, wenn sie durch enge Spalte gehen.\n4. Der Dualismus gilt nur für Licht, nicht für Materie.\n5. Die Heisenbergsche Unschärferelation ist eine Folge des Dualismus.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Der Welle-Teilchen-Dualismus gilt für alle Quantenobjekte, auch für Materie (Elektronen, Neutronen etc.).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 057 Mechanik – Drehbewegung (mittel) ──
  {
    id: "ph-typk-new2-057",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur Drehbewegung sind richtig?\n\n1. Das Drehmoment ist M = F · r · sin α.\n2. Die Einheit des Drehmoments ist Nm.\n3. Ein Körper ist im Gleichgewicht, wenn die Summe aller Drehmomente null ist.\n4. Das Trägheitsmoment hängt von der Massenverteilung ab.\n5. Die Winkelgeschwindigkeit ω hat die Einheit m/s.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Winkelgeschwindigkeit ω hat die Einheit rad/s (nicht m/s).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 058 Optik – Linsenfehler (schwer) ──
  {
    id: "ph-typk-new2-058",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zu Abbildungsfehlern bei Linsen sind richtig?\n\n1. Sphärische Aberration entsteht durch unterschiedliche Brechung am Linsenrand.\n2. Chromatische Aberration entsteht durch die Wellenlängenabhängigkeit des Brechungsindex.\n3. Astigmatismus führt zu einer punktförmigen Abbildung.\n4. Chromatische Aberration kann durch achromatische Linsensysteme reduziert werden.\n5. Sphärische Aberration kann durch Blenden verringert werden.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 1, 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Astigmatismus führt zu einer verzerrten, nicht punktförmigen Abbildung (Punkt wird zu Strich).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 060 Elektrizität – Dioden (schwer) ──
  {
    id: "ph-typk-new2-060",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zu Dioden sind richtig?\n\n1. Eine Diode besteht aus einem p-n-Übergang.\n2. In Durchlassrichtung fließt Strom ab einer Schwellenspannung.\n3. In Sperrrichtung fließt praktisch kein Strom.\n4. LEDs wandeln elektrische Energie in Licht um.\n5. Eine Diode leitet den Strom in beide Richtungen gleich gut.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Eine Diode leitet nur in Durchlassrichtung; in Sperrrichtung ist sie praktisch nicht leitend.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 061 Medizinische Physik – Endoskopie (mittel) ──
  {
    id: "ph-typk-new2-061",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Endoskopie sind richtig?\n\n1. Endoskope nutzen Glasfasern zur Licht- und Bildübertragung.\n2. Das Prinzip der Totalreflexion ist entscheidend für die Funktion.\n3. Moderne Videoendoskope verwenden CCD-Chips an der Spitze.\n4. Endoskopie erfordert ionisierende Strahlung.\n5. Endoskopie ermöglicht minimalinvasive Diagnostik und Therapie.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Endoskopie nutzt sichtbares Licht, keine ionisierende Strahlung.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 062 Akustik – Schallschutz (leicht) ──
  {
    id: "ph-typk-new2-062",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zum Schallschutz sind richtig?\n\n1. Schallschutzwände reflektieren und absorbieren Schallwellen.\n2. Poren und weiche Materialien absorbieren Schall besonders gut.\n3. Die Schalldämmung wird in Dezibel angegeben.\n4. Doppelverglasungen verbessern die Schalldämmung.\n5. Schallschutz ist nur bei Frequenzen über 1000 Hz möglich.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 2 und 3" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Schallschutz ist über den gesamten hörbaren Frequenzbereich (und darüber hinaus) möglich, nicht nur über 1000 Hz.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 063 Fluidmechanik – Bernoulli (schwer) ──
  {
    id: "ph-typk-new2-063",
    subject: "physik",
    chapter: "phys-kap2",
    text: "Welche der folgenden Aussagen zum Bernoulli-Effekt sind richtig?\n\n1. In einer Verengung steigt die Strömungsgeschwindigkeit.\n2. In einer Verengung sinkt der statische Druck.\n3. Die Bernoulli-Gleichung beschreibt die Energieerhaltung in strömenden Fluiden.\n4. Der dynamische Druck ist ½ · ρ · v².\n5. Die Bernoulli-Gleichung gilt exakt für kompressible, viskose Fluide.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 2 und 3" },
      { id: "d", text: "Nur 1, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Bernoulli-Gleichung gilt streng nur für inkompressible, reibungsfreie (nicht-viskose) Fluide.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 064 Mechanik – Reibung (mittel) ──
  {
    id: "ph-typk-new2-064",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur Reibung sind richtig?\n\n1. Die Haftreibungskraft ist in der Regel größer als die Gleitreibungskraft.\n2. Die Reibungskraft ist proportional zur Normalkraft.\n3. Der Reibungskoeffizient ist dimensionslos.\n4. Die Reibungskraft hängt von der Auflagefläche ab.\n5. Rollreibung ist in der Regel kleiner als Gleitreibung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Nach dem Coulombschen Reibungsgesetz hängt die Reibungskraft nicht von der Auflagefläche ab.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 065 Atomphysik – Spektrallinien (mittel) ──
  {
    id: "ph-typk-new2-065",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zu Spektrallinien sind richtig?\n\n1. Emissionsspektren entstehen, wenn angeregte Atome Licht aussenden.\n2. Absorptionsspektren zeigen dunkle Linien im kontinuierlichen Spektrum.\n3. Jedes Element hat ein charakteristisches Linienspektrum.\n4. Die Wellenlänge der emittierten Photonen hängt vom Energieunterschied der Niveaus ab.\n5. Alle Elemente haben identische Spektrallinien.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Jedes Element hat ein einzigartiges Linienspektrum — der spektrale Fingerabdruck.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 066 Optik – Doppelbrechung (schwer) ──
  {
    id: "ph-typk-new2-066",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Doppelbrechung sind richtig?\n\n1. Doppelbrechung tritt in anisotropen Kristallen auf.\n2. Einfallendes Licht wird in einen ordentlichen und einen außerordentlichen Strahl aufgeteilt.\n3. Beide Strahlen haben den gleichen Brechungsindex.\n4. Kalkspat (Calcit) ist ein klassisches Beispiel für ein doppelbrechendes Material.\n5. Die beiden Strahlen sind senkrecht zueinander polarisiert.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 1, 2 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Die beiden Strahlen haben unterschiedliche Brechungsindizes — genau das macht die Doppelbrechung aus.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 067 Mechanik – Energie (leicht) ──
  {
    id: "ph-typk-new2-067",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur Energie in der Mechanik sind richtig?\n\n1. Die kinetische Energie ist E_kin = ½ · m · v².\n2. Die potenzielle Energie im Schwerefeld ist E_pot = m · g · h.\n3. Die Gesamtenergie ist in einem konservativen System erhalten.\n4. Die Einheit der Energie ist Joule (J).\n5. Kinetische Energie kann negativ sein.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Kinetische Energie ist stets positiv oder null (E_kin = ½mv² ≥ 0).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 068 Elektrizität – Elektrische Arbeit (mittel) ──
  {
    id: "ph-typk-new2-068",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur elektrischen Arbeit und Energie sind richtig?\n\n1. Die elektrische Arbeit ist W = U · I · t.\n2. Eine Kilowattstunde (kWh) entspricht 3,6 · 10⁶ J.\n3. Die elektrische Arbeit wird in Joule gemessen.\n4. Die Stromrechnung basiert auf der verbrauchten elektrischen Arbeit.\n5. Die elektrische Arbeit ist unabhängig von der Zeit.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: W = U · I · t zeigt, dass die Arbeit direkt von der Zeit abhängt.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 069 Medizinische Physik – PET (schwer) ──
  {
    id: "ph-typk-new2-069",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zur Positronen-Emissions-Tomographie (PET) sind richtig?\n\n1. PET nutzt positronenemittierende Radionuklide (z. B. ¹⁸F).\n2. Bei der Annihilation eines Positrons mit einem Elektron entstehen zwei γ-Photonen.\n3. Die beiden Photonen werden in entgegengesetzter Richtung emittiert (180°).\n4. PET liefert funktionelle (nicht nur anatomische) Informationen.\n5. PET verwendet Ultraschallwellen zur Bildgebung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: PET verwendet γ-Photonen aus Annihilation, nicht Ultraschall.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 070 Mechanik – Kreisbewegung (mittel) ──
  {
    id: "ph-typk-new2-070",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur gleichförmigen Kreisbewegung sind richtig?\n\n1. Die Zentripetalbeschleunigung zeigt zum Mittelpunkt.\n2. Die Geschwindigkeit des Körpers ändert ständig ihre Richtung.\n3. Die Zentripetalkraft ist F = m · v² / r.\n4. Die Umlaufzeit T und die Frequenz f sind zueinander umgekehrt proportional.\n5. Bei gleichförmiger Kreisbewegung ändert sich der Betrag der Geschwindigkeit.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Bei gleichförmiger Kreisbewegung bleibt der Betrag der Geschwindigkeit konstant; nur die Richtung ändert sich.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 071 Optik – Hohlspiegel (leicht) ──
  {
    id: "ph-typk-new2-071",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Hohlspiegel sind richtig?\n\n1. Parallele Strahlen werden im Brennpunkt reflektiert.\n2. Der Krümmungsradius ist doppelt so groß wie die Brennweite.\n3. Steht der Gegenstand im Brennpunkt, entsteht kein Bild (Strahlen verlaufen parallel).\n4. Die Abbildungsgleichung lautet 1/f = 1/g + 1/b.\n5. Ein Hohlspiegel kann nur reelle Bilder erzeugen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1 und 2" },
      { id: "c", text: "Nur 1, 2 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Steht der Gegenstand innerhalb der Brennweite, erzeugt der Hohlspiegel ein virtuelles, vergrößertes Bild.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 073 Atomphysik – Strahlenschutz (leicht) ──
  {
    id: "ph-typk-new2-073",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zum Strahlenschutz sind richtig?\n\n1. Abstand, Abschirmung und Aufenthaltsdauer sind die drei Grundprinzipien.\n2. Blei eignet sich gut zur Abschirmung von γ-Strahlung.\n3. α-Strahlung wird bereits durch ein Blatt Papier abgeschirmt.\n4. Die Dosisleistung nimmt mit dem Quadrat des Abstands ab.\n5. Strahlenschutz ist nur bei künstlicher Strahlung notwendig.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Auch natürliche Strahlung (z. B. Radon) kann einen Strahlenschutz erfordern.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 074 Elektrizität – Supraleitfähigkeit (schwer) ──
  {
    id: "ph-typk-new2-074",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Supraleitung sind richtig?\n\n1. Bei Supraleitern sinkt der elektrische Widerstand unter der Sprungtemperatur auf null.\n2. Supraleiter verdrängen Magnetfelder aus ihrem Inneren (Meißner-Ochsenfeld-Effekt).\n3. Die Sprungtemperatur liegt bei konventionellen Supraleitern nahe dem absoluten Nullpunkt.\n4. Supraleiter werden in MRT-Magneten eingesetzt.\n5. Alle Metalle werden bei genügend tiefen Temperaturen supraleitend.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 2 und 3" },
      { id: "d", text: "Nur 1, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Nicht alle Metalle werden supraleitend (z. B. Kupfer, Gold und Silber zeigen keine konventionelle Supraleitung).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 075 Fluidmechanik – Viskosität (mittel) ──
  {
    id: "ph-typk-new2-075",
    subject: "physik",
    chapter: "phys-kap2",
    text: "Welche der folgenden Aussagen zur Viskosität sind richtig?\n\n1. Die Viskosität beschreibt die Zähflüssigkeit eines Fluids.\n2. Die Einheit der dynamischen Viskosität ist Pa · s.\n3. Die Viskosität von Wasser nimmt mit steigender Temperatur ab.\n4. Das Gesetz von Hagen-Poiseuille beschreibt die laminare Rohrströmung.\n5. Die Viskosität hat keinen Einfluss auf den Strömungswiderstand.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Viskosität hat direkten Einfluss auf den Strömungswiderstand — höhere Viskosität bedeutet höheren Widerstand.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
];
