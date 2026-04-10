/**
 * Physik Typ-K Pool 4 (Kombinationsaufgaben) — 75 Fragen im Question-Format.
 * IDs: ph-typk-new4-001 bis ph-typk-new4-075.
 * Themen-Schwerpunkt: Arbeit/Energie/Leistung, Schwingungen, Elektrizität,
 * Optik, Medizinphysik, Strömungslehre.
 * Schwierigkeit: ~30 % leicht, ~45 % mittel, ~25 % schwer.
 */
import type { Question } from "./index";

export const physikTypKNew4: Question[] = [
  // ── 001 Arbeit – Grundlagen (leicht) ──
  {
    id: "ph-typk-new4-001",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur mechanischen Arbeit sind richtig?\n\n1. Mechanische Arbeit ist definiert als W = F · s · cos(α).\n2. Die Einheit der Arbeit ist Joule (J = N·m).\n3. Wird ein Körper senkrecht zur Bewegungsrichtung mit einer Kraft beaufschlagt, verrichtet diese Kraft keine Arbeit.\n4. Arbeit ist eine skalare Größe.\n5. Arbeit kann nur positiv sein.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Arbeit kann auch negativ sein (z. B. Reibungsarbeit oder wenn die Kraft der Bewegung entgegenwirkt).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 002 Kinetische Energie (leicht) ──
  {
    id: "ph-typk-new4-002",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur kinetischen Energie sind richtig?\n\n1. Die kinetische Energie ist E_kin = ½ m v².\n2. Sie verdoppelt sich, wenn die Geschwindigkeit verdoppelt wird.\n3. Die kinetische Energie ist immer positiv oder null.\n4. Sie hängt vom Bezugssystem ab.\n5. Die Einheit ist Joule.",
    options: [
      { id: "a", text: "Nur 1, 3, 4 und 5" },
      { id: "b", text: "Nur 1, 3 und 5" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 1, 2 und 3" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 3, 4, 5 korrekt. 2 falsch: Bei Verdopplung der Geschwindigkeit vervierfacht sich die kinetische Energie (v² → (2v)² = 4v²).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 003 Potentielle Energie (leicht) ──
  {
    id: "ph-typk-new4-003",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur potentiellen Energie sind richtig?\n\n1. Die Lageenergie ist E_pot = m · g · h.\n2. Sie hängt von der gewählten Bezugshöhe ab.\n3. Die Spannenergie einer Feder ist E_sp = ½ k x².\n4. Potentielle Energie kann in kinetische Energie umgewandelt werden.\n5. Die potentielle Energie ist immer positiv.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 3 und 4" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 1, 2 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Je nach Bezugshöhe kann die potentielle Energie auch negativ sein.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 004 Energieerhaltung (mittel) ──
  {
    id: "ph-typk-new4-004",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zum Energieerhaltungssatz sind richtig?\n\n1. In einem abgeschlossenen System bleibt die Gesamtenergie erhalten.\n2. Beim freien Fall ohne Reibung wird potentielle in kinetische Energie umgewandelt.\n3. Beim inelastischen Stoß geht kinetische Energie verloren (in Wärme/Verformung).\n4. Der Energieerhaltungssatz gilt nicht für Systeme mit Reibung.\n5. Energie kann von einer Form in eine andere umgewandelt werden.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Der Energieerhaltungssatz gilt universell — auch mit Reibung bleibt die Gesamtenergie erhalten, sie wird lediglich in Wärme umgewandelt.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 005 Leistung (leicht) ──
  {
    id: "ph-typk-new4-005",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur physikalischen Leistung sind richtig?\n\n1. Leistung ist definiert als P = W / t.\n2. Die Einheit ist Watt (W = J/s).\n3. Die momentane Leistung ist P = F · v.\n4. Leistung ist eine vektorielle Größe.\n5. 1 PS entspricht etwa 736 W.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Leistung ist eine skalare Größe (P = F · v · cos α).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 006 Wirkungsgrad (mittel) ──
  {
    id: "ph-typk-new4-006",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zum Wirkungsgrad sind richtig?\n\n1. Der Wirkungsgrad ist η = P_nutz / P_zu.\n2. Er liegt immer zwischen 0 und 1 (bzw. 0 % und 100 %).\n3. Ein Wirkungsgrad von 100 % ist bei realen Maschinen nicht erreichbar.\n4. Der Gesamtwirkungsgrad einer Kette ist das Produkt der Einzelwirkungsgrade.\n5. Eine Wärmepumpe kann einen Wirkungsgrad über 100 % haben.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 3 und 4" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Eine Wärmepumpe hat zwar eine Leistungszahl (COP) > 1, aber das ist kein Wirkungsgrad im klassischen Sinn. Der thermodynamische Wirkungsgrad bleibt ≤ 1.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 007 Arbeit und Weg-Kraft-Diagramm (mittel) ──
  {
    id: "ph-typk-new4-007",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zum Kraft-Weg-Diagramm sind richtig?\n\n1. Die Fläche unter der F(s)-Kurve entspricht der verrichteten Arbeit.\n2. Bei konstanter Kraft ist die Arbeit W = F · s.\n3. Bei einer Feder (Hookesches Gesetz) steigt die Kraft linear mit dem Weg.\n4. Die Arbeit an einer Feder entspricht der Dreiecksfläche im F(s)-Diagramm.\n5. Ein negativer Flächenanteil bedeutet, dass das System Arbeit aufnimmt.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Ein negativer Flächenanteil bedeutet, dass das System Arbeit abgibt (z. B. Rückstellkraft der Feder gibt Energie ab).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 008 Energieumwandlungen (leicht) ──
  {
    id: "ph-typk-new4-008",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zu Energieumwandlungen sind richtig?\n\n1. Im Generator wird mechanische Energie in elektrische Energie umgewandelt.\n2. In einer Glühlampe wird elektrische Energie in Licht und Wärme umgewandelt.\n3. In einer Batterie wird chemische Energie in elektrische Energie umgewandelt.\n4. Bei der Photosynthese wird Lichtenergie in chemische Energie umgewandelt.\n5. Bei jeder Energieumwandlung geht Energie verloren.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Energie geht nie verloren (Energieerhaltung); sie wird lediglich in weniger nutzbare Formen (z. B. Wärme) umgewandelt.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 009 Federschwingung – Grundlagen (leicht) ──
  {
    id: "ph-typk-new4-009",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur harmonischen Schwingung einer Feder sind richtig?\n\n1. Die Periodendauer ist T = 2π √(m/k).\n2. Die Frequenz ist unabhängig von der Amplitude.\n3. In der Gleichgewichtslage ist die Geschwindigkeit maximal.\n4. Die rücktreibende Kraft ist proportional zur Auslenkung.\n5. Die Periodendauer hängt von der Amplitude ab.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Bei der harmonischen Schwingung ist die Periodendauer unabhängig von der Amplitude (isochroner Schwinger).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 010 Fadenpendel (leicht) ──
  {
    id: "ph-typk-new4-010",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zum mathematischen Pendel sind richtig?\n\n1. Die Periodendauer ist T = 2π √(l/g) (für kleine Winkel).\n2. Die Periodendauer hängt nicht von der Masse ab.\n3. Die Periodendauer nimmt mit der Pendellänge zu.\n4. Auf dem Mond schwingt ein Pendel langsamer als auf der Erde.\n5. Die Periodendauer ist unabhängig von der Fadenlänge.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1 und 2" },
      { id: "c", text: "Nur 1, 2 und 4" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Periodendauer hängt von der Fadenlänge ab (T ∝ √l).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 011 Resonanz (mittel) ──
  {
    id: "ph-typk-new4-011",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur Resonanz sind richtig?\n\n1. Resonanz tritt auf, wenn die Erregerfrequenz gleich der Eigenfrequenz ist.\n2. Bei Resonanz ist die Amplitude maximal.\n3. Resonanz kann zu Zerstörung führen (z. B. Brücken).\n4. Dämpfung verringert die Resonanzamplitude.\n5. Die Resonanzfrequenz liegt bei einem gedämpften System immer exakt bei der Eigenfrequenz.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Bei Dämpfung verschiebt sich die Resonanzfrequenz leicht nach unten gegenüber der Eigenfrequenz.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 012 Dämpfung (mittel) ──
  {
    id: "ph-typk-new4-012",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur gedämpften Schwingung sind richtig?\n\n1. Die Amplitude nimmt mit der Zeit ab.\n2. Die Frequenz der gedämpften Schwingung ist etwas kleiner als die Eigenfrequenz.\n3. Bei starker Dämpfung kehrt das System ohne Schwingung in die Ruhelage zurück (Kriechfall).\n4. Der aperiodische Grenzfall ist die schnellste Rückkehr ohne Überschwingen.\n5. Gedämpfte Schwingungen haben eine konstante Amplitude.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 1, 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Bei gedämpften Schwingungen nimmt die Amplitude exponentiell ab.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 013 Erzwungene Schwingung (schwer) ──
  {
    id: "ph-typk-new4-013",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur erzwungenen Schwingung sind richtig?\n\n1. Eine periodische äußere Kraft hält die Schwingung aufrecht.\n2. Nach dem Einschwingvorgang schwingt das System mit der Erregerfrequenz.\n3. Die stationäre Amplitude hängt von der Differenz zwischen Erreger- und Eigenfrequenz ab.\n4. Ohne Dämpfung würde die Amplitude bei Resonanz unendlich groß.\n5. Bei Frequenzen weit oberhalb der Eigenfrequenz ist die Amplitude größer als bei Resonanz.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Bei Frequenzen weit über der Eigenfrequenz geht die Amplitude gegen null.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 014 Schwingungsenergie (mittel) ──
  {
    id: "ph-typk-new4-014",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur Energie bei Schwingungen sind richtig?\n\n1. Die Gesamtenergie einer ungedämpften Schwingung bleibt konstant.\n2. In der Gleichgewichtslage ist die kinetische Energie maximal.\n3. Am Umkehrpunkt ist die potentielle Energie maximal.\n4. Die Gesamtenergie ist proportional zum Quadrat der Amplitude.\n5. Kinetische und potentielle Energie sind stets gleich groß.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Kinetische und potentielle Energie wechseln ständig; sie sind nur im zeitlichen Mittel gleich groß.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 015 Elektrischer Widerstand (leicht) ──
  {
    id: "ph-typk-new4-015",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zum elektrischen Widerstand sind richtig?\n\n1. Der Widerstand ist R = U / I (Ohmsches Gesetz).\n2. Die Einheit ist Ohm (Ω).\n3. Der spezifische Widerstand hängt vom Material ab.\n4. Ein längerer Draht hat einen größeren Widerstand.\n5. Ein Draht mit größerem Querschnitt hat einen größeren Widerstand.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Ein größerer Querschnitt senkt den Widerstand (R = ρ · l / A).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 016 Reihenschaltung Widerstände (leicht) ──
  {
    id: "ph-typk-new4-016",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zur Reihenschaltung von Widerständen sind richtig?\n\n1. Der Gesamtwiderstand ist die Summe der Einzelwiderstände.\n2. Durch alle Widerstände fließt der gleiche Strom.\n3. Die Gesamtspannung teilt sich auf die Widerstände auf.\n4. Der Gesamtwiderstand ist stets größer als der größte Einzelwiderstand.\n5. Die Leistung verteilt sich gleichmäßig auf alle Widerstände.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Leistung verteilt sich proportional zum Widerstand (P = I²·R), nicht gleichmäßig.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 017 Parallelschaltung Widerstände (mittel) ──
  {
    id: "ph-typk-new4-017",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zur Parallelschaltung von Widerständen sind richtig?\n\n1. An allen Widerständen liegt die gleiche Spannung an.\n2. Der Gesamtwiderstand ist kleiner als der kleinste Einzelwiderstand.\n3. Der Gesamtstrom teilt sich auf die einzelnen Zweige auf.\n4. Für zwei Widerstände gilt R_ges = R₁ · R₂ / (R₁ + R₂).\n5. Bei Parallelschaltung addieren sich die Leitwerte.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 1, 2, 3 und 4" },
      { id: "e", text: "Nur 2, 4 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 Aussagen sind korrekt. Die Leitwerte addieren sich (1/R_ges = 1/R₁ + 1/R₂ + ...), was äquivalent zu Aussage 5 ist.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 018 Elektrische Leistung (mittel) ──
  {
    id: "ph-typk-new4-018",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zur elektrischen Leistung sind richtig?\n\n1. P = U · I.\n2. P = I² · R gilt für ohmsche Verbraucher.\n3. P = U² / R ist eine äquivalente Formulierung.\n4. Die Einheit ist Watt.\n5. Die elektrische Leistung ist immer gleich der Nutzleistung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1 und 4" },
      { id: "c", text: "Nur 1, 2 und 4" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Ein Teil der elektrischen Leistung geht als Verlustleistung (Wärme) verloren.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 019 Wechselstrom – Grundbegriffe (mittel) ──
  {
    id: "ph-typk-new4-019",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zum Wechselstrom sind richtig?\n\n1. Wechselstrom ändert periodisch seine Richtung.\n2. Die Netzfrequenz in Europa beträgt 50 Hz.\n3. Der Effektivwert der Spannung ist U_eff = U₀ / √2.\n4. Der Effektivwert entspricht der Gleichspannung mit gleicher Heizwirkung.\n5. Der Scheitelwert ist kleiner als der Effektivwert.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Der Scheitelwert (Amplitude) ist größer als der Effektivwert (U₀ = √2 · U_eff ≈ 325 V bei 230 V Netz).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 020 Impedanz (schwer) ──
  {
    id: "ph-typk-new4-020",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zur Impedanz sind richtig?\n\n1. Die Impedanz ist der Wechselstromwiderstand eines Schaltkreises.\n2. Sie setzt sich aus Wirkwiderstand und Blindwiderstand zusammen.\n3. Die Impedanz wird als Z = √(R² + X²) berechnet.\n4. Der Blindwiderstand einer Spule nimmt mit steigender Frequenz zu.\n5. Der Blindwiderstand eines Kondensators nimmt mit steigender Frequenz zu.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Der kapazitive Blindwiderstand X_C = 1/(ωC) nimmt mit steigender Frequenz ab.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 021 Kondensator im Wechselstromkreis (schwer) ──
  {
    id: "ph-typk-new4-021",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zum Kondensator im Wechselstromkreis sind richtig?\n\n1. Der kapazitive Blindwiderstand ist X_C = 1/(ωC).\n2. Der Strom eilt der Spannung um 90° voraus.\n3. Im Gleichstromkreis sperrt ein Kondensator nach dem Aufladen.\n4. Die gespeicherte Energie ist E = ½ C U².\n5. Im Wechselstromkreis verbraucht ein idealer Kondensator Wirkleistung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Ein idealer Kondensator nimmt nur Blindleistung auf, keine Wirkleistung.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 022 Spule im Wechselstromkreis (schwer) ──
  {
    id: "ph-typk-new4-022",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zur Spule im Wechselstromkreis sind richtig?\n\n1. Der induktive Blindwiderstand ist X_L = ωL.\n2. Die Spannung eilt dem Strom um 90° voraus.\n3. Bei höherer Frequenz steigt der induktive Widerstand.\n4. Im Gleichstromkreis stellt eine ideale Spule keinen Widerstand dar.\n5. Eine ideale Spule verbraucht Wirkleistung im Wechselstromkreis.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Eine ideale Spule nimmt nur Blindleistung auf, keine Wirkleistung.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 023 Reflexion am Spiegel (leicht) ──
  {
    id: "ph-typk-new4-023",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Reflexion an Spiegeln sind richtig?\n\n1. Einfallswinkel = Ausfallswinkel (Reflexionsgesetz).\n2. Ein Planspiegel erzeugt ein virtuelles, aufrechtes Bild.\n3. Das Bild im Planspiegel ist seitenverkehrt.\n4. Ein Hohlspiegel kann ein reelles Bild erzeugen.\n5. Der Planspiegel vergrößert das Bild.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Ein Planspiegel erzeugt ein gleich großes Bild (Vergrößerung = 1).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 024 Prisma und Dispersion (mittel) ──
  {
    id: "ph-typk-new4-024",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zu Prismen und Dispersion sind richtig?\n\n1. Ein Prisma zerlegt weißes Licht in seine Spektralfarben.\n2. Violettes Licht wird stärker gebrochen als rotes Licht.\n3. Dispersion beruht auf der Wellenlängenabhängigkeit des Brechungsindex.\n4. Der Regenbogen entsteht durch Dispersion an Wassertropfen.\n5. Alle Wellenlängen haben im Vakuum den gleichen Brechungsindex.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 1 und 2" },
      { id: "e", text: "Nur 2, 3 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 Aussagen sind korrekt. Im Vakuum ist n = 1 für alle Wellenlängen; Dispersion tritt nur in Medien auf.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 025 Totalreflexion (mittel) ──
  {
    id: "ph-typk-new4-025",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Totalreflexion sind richtig?\n\n1. Totalreflexion tritt beim Übergang vom optisch dichteren ins optisch dünnere Medium auf.\n2. Sie tritt auf, wenn der Einfallswinkel den Grenzwinkel überschreitet.\n3. Der Grenzwinkel hängt von den Brechungsindizes beider Medien ab.\n4. Glasfaserkabel nutzen Totalreflexion zur Lichtleitung.\n5. Totalreflexion kann beim Übergang vom optisch dünneren ins dichtere Medium auftreten.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1 und 2" },
      { id: "c", text: "Nur 1, 2 und 4" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Totalreflexion kann nur beim Übergang vom optisch dichteren ins dünnere Medium auftreten.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 026 Hohlspiegel (mittel) ──
  {
    id: "ph-typk-new4-026",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Hohlspiegel sind richtig?\n\n1. Der Brennpunkt liegt bei f = r/2 (r = Krümmungsradius).\n2. Parallele Strahlen werden im Brennpunkt fokussiert.\n3. Ein Gegenstand innerhalb der Brennweite erzeugt ein virtuelles, vergrößertes Bild.\n4. Die Abbildungsgleichung lautet 1/f = 1/g + 1/b.\n5. Ein Hohlspiegel erzeugt immer ein reelles Bild.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Bei Gegenständen innerhalb der Brennweite entsteht ein virtuelles Bild.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 027 Linsen – Sammellinse (leicht) ──
  {
    id: "ph-typk-new4-027",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Sammellinse sind richtig?\n\n1. Eine Sammellinse ist in der Mitte dicker als am Rand.\n2. Parallele Lichtstrahlen werden im Brennpunkt vereinigt.\n3. Die Brechkraft D = 1/f wird in Dioptrien gemessen.\n4. Die Abbildungsgleichung 1/f = 1/g + 1/b gilt auch für Linsen.\n5. Die Brennweite einer Sammellinse ist negativ.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Brennweite einer Sammellinse ist positiv (konvex).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 028 Optische Instrumente – Auge (mittel) ──
  {
    id: "ph-typk-new4-028",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum menschlichen Auge als optisches System sind richtig?\n\n1. Die Augenlinse hat eine veränderbare Brennweite (Akkommodation).\n2. Kurzsichtigkeit wird durch eine Zerstreuungslinse korrigiert.\n3. Weitsichtigkeit wird durch eine Sammellinse korrigiert.\n4. Das Bild auf der Netzhaut ist umgekehrt und verkleinert.\n5. Die Pupille reguliert die Lichtmenge, nicht die Brennweite.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 1, 4 und 5" },
      { id: "e", text: "Nur 2 und 3" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 Aussagen sind korrekt. Die Pupille wirkt als Blende, die Linse akkommodiert, und auf der Retina entsteht ein reelles, umgekehrtes, verkleinertes Bild.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 029 Mikroskop (schwer) ──
  {
    id: "ph-typk-new4-029",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Lichtmikroskop sind richtig?\n\n1. Es besteht aus Objektiv und Okular (beides Sammellinsen).\n2. Das Objektiv erzeugt ein reelles, vergrößertes Zwischenbild.\n3. Das Okular wirkt wie eine Lupe und erzeugt ein virtuelles Bild.\n4. Die Gesamtvergrößerung ist das Produkt aus Objektivvergrößerung und Okularvergrößerung.\n5. Die Auflösungsgrenze wird allein durch die Vergrößerung bestimmt.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Auflösungsgrenze wird durch die Wellenlänge des Lichts und die numerische Apertur begrenzt, nicht allein durch die Vergrößerung.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 030 Dosimetrie – Strahlendosis (mittel) ──
  {
    id: "ph-typk-new4-030",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zu Strahlendosis-Größen sind richtig?\n\n1. Die Energiedosis D wird in Gray (Gy) gemessen.\n2. 1 Gy = 1 J/kg.\n3. Die Äquivalentdosis berücksichtigt die biologische Wirksamkeit der Strahlung.\n4. Die Äquivalentdosis wird in Sievert (Sv) gemessen.\n5. Gray und Sievert haben für alle Strahlenarten denselben Zahlenwert.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1 und 2" },
      { id: "c", text: "Nur 1, 2 und 4" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Gray und Sievert stimmen nur für Photonen/Elektronen überein (Gewichtungsfaktor 1); für α-Strahlung z. B. ist der Faktor 20.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 031 Röntgenstrahlung in der Bildgebung (schwer) ──
  {
    id: "ph-typk-new4-031",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zur Röntgenbildgebung sind richtig?\n\n1. Röntgenstrahlen entstehen durch Abbremsung schneller Elektronen an einer Anode.\n2. Knochen absorbieren Röntgenstrahlung stärker als Weichgewebe.\n3. Die CT nutzt Röntgenstrahlen und berechnet Schnittbilder.\n4. Die Strahlendosis bei einer CT ist geringer als bei einer einfachen Röntgenaufnahme.\n5. Kontrastmittel erhöhen den Absorptionsunterschied zwischen Geweben.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Die CT-Dosis ist typischerweise deutlich höher als bei einer konventionellen Röntgenaufnahme.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 032 Ultraschall in der Medizin (mittel) ──
  {
    id: "ph-typk-new4-032",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zum medizinischen Ultraschall sind richtig?\n\n1. Ultraschall nutzt Schallwellen oberhalb der menschlichen Hörschwelle (> 20 kHz).\n2. Das Verfahren basiert auf der Reflexion von Schallwellen an Gewebegrenzen.\n3. Der Doppler-Ultraschall kann Blutflussgeschwindigkeiten messen.\n4. Ultraschall verwendet keine ionisierende Strahlung.\n5. Die Auflösung verbessert sich bei niedrigerer Frequenz.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Höhere Frequenz liefert bessere Auflösung (aber geringere Eindringtiefe).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 033 Laser in der Medizin (schwer) ──
  {
    id: "ph-typk-new4-033",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zum Laser in der Medizin sind richtig?\n\n1. Laserlicht ist monochromatisch (eine Wellenlänge).\n2. Laserlicht ist kohärent (feste Phasenbeziehung).\n3. Laser werden in der Augenheilkunde zum Schweißen der Netzhaut eingesetzt.\n4. Die Wirkung des Lasers im Gewebe hängt von der Wellenlänge ab.\n5. Laser erzeugen ausschließlich sichtbares Licht.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Laser können auch IR- oder UV-Licht erzeugen (z. B. CO₂-Laser im IR, Excimer-Laser im UV).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 034 MRT-Grundlagen (schwer) ──
  {
    id: "ph-typk-new4-034",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zur Magnetresonanztomographie (MRT) sind richtig?\n\n1. Die MRT nutzt starke Magnetfelder und Hochfrequenzpulse.\n2. Sie basiert auf dem Kernspin von Wasserstoffprotonen.\n3. Es wird keine ionisierende Strahlung verwendet.\n4. Verschiedene Gewebe liefern unterschiedliche Signale aufgrund verschiedener Relaxationszeiten.\n5. Metallimplantate stellen im MRT grundsätzlich kein Risiko dar.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Ferromagnetische Metallimplantate können im MRT gefährlich sein (Erwärmung, Bewegung, Artefakte).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 035 Reynolds-Zahl (mittel) ──
  {
    id: "ph-typk-new4-035",
    subject: "physik",
    chapter: "phys-kap2",
    text: "Welche der folgenden Aussagen zur Reynolds-Zahl sind richtig?\n\n1. Die Reynolds-Zahl ist eine dimensionslose Kennzahl.\n2. Sie beschreibt das Verhältnis von Trägheits- zu Zähigkeitskräften.\n3. Kleine Reynolds-Zahlen deuten auf laminare Strömung hin.\n4. Ab einer kritischen Reynolds-Zahl wird die Strömung turbulent.\n5. Die Reynolds-Zahl ist unabhängig von der Viskosität des Fluids.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Re = ρ·v·d / η — die Viskosität η geht direkt in die Berechnung ein.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 036 Laminare vs. turbulente Strömung (leicht) ──
  {
    id: "ph-typk-new4-036",
    subject: "physik",
    chapter: "phys-kap2",
    text: "Welche der folgenden Aussagen zu laminarer und turbulenter Strömung sind richtig?\n\n1. Bei laminarer Strömung bewegen sich die Fluidteilchen in geordneten Schichten.\n2. Turbulente Strömung ist durch Wirbel und unregelmäßige Bewegung gekennzeichnet.\n3. Bei laminarer Strömung in einem Rohr ist das Geschwindigkeitsprofil parabolisch.\n4. Der Strömungswiderstand ist bei turbulenter Strömung höher als bei laminarer.\n5. In Blutgefäßen tritt ausschließlich laminare Strömung auf.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: In Verzweigungen und bei hohen Flussraten (z. B. Aorta) kann auch turbulente Strömung auftreten.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 037 Viskosität (mittel) ──
  {
    id: "ph-typk-new4-037",
    subject: "physik",
    chapter: "phys-kap2",
    text: "Welche der folgenden Aussagen zur Viskosität sind richtig?\n\n1. Die dynamische Viskosität beschreibt die innere Reibung eines Fluids.\n2. Die Einheit der dynamischen Viskosität ist Pa·s.\n3. Wasser hat eine höhere Viskosität als Honig.\n4. Die Viskosität von Flüssigkeiten nimmt mit steigender Temperatur ab.\n5. Die kinematische Viskosität ist ν = η / ρ.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 1, 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Honig hat eine viel höhere Viskosität als Wasser.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 038 Gesetz von Hagen-Poiseuille (schwer) ──
  {
    id: "ph-typk-new4-038",
    subject: "physik",
    chapter: "phys-kap2",
    text: "Welche der folgenden Aussagen zum Gesetz von Hagen-Poiseuille sind richtig?\n\n1. Es beschreibt den Volumenstrom durch ein zylindrisches Rohr bei laminarer Strömung.\n2. Der Volumenstrom ist proportional zur vierten Potenz des Radius.\n3. Eine Halbierung des Rohrradius reduziert den Volumenstrom auf 1/16.\n4. Der Volumenstrom ist umgekehrt proportional zur Viskosität.\n5. Das Gesetz gilt auch für turbulente Strömungen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Hagen-Poiseuille gilt nur für laminare, stationäre Strömung in starren Rohren.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 039 Blutströmung (mittel) ──
  {
    id: "ph-typk-new4-039",
    subject: "physik",
    chapter: "phys-kap2",
    text: "Welche der folgenden Aussagen zur Blutströmung sind richtig?\n\n1. Die Strömungsgeschwindigkeit ist in den Kapillaren am geringsten.\n2. Der Gesamtquerschnitt der Kapillaren ist größer als der der Aorta.\n3. Der Blutdruck nimmt von der Aorta zu den Kapillaren ab.\n4. Blut verhält sich als Newton'sche Flüssigkeit.\n5. Strömungsgeräusche (Korotkow-Geräusche) entstehen durch turbulente Strömung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Blut ist eine nicht-Newton'sche Flüssigkeit (scherverdünnend), da es Zellen enthält.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 040 Bernoulli-Gleichung (schwer) ──
  {
    id: "ph-typk-new4-040",
    subject: "physik",
    chapter: "phys-kap2",
    text: "Welche der folgenden Aussagen zur Bernoulli-Gleichung sind richtig?\n\n1. Sie beschreibt den Zusammenhang von Druck, Geschwindigkeit und Höhe in einer strömenden Flüssigkeit.\n2. Bei höherer Strömungsgeschwindigkeit ist der statische Druck geringer.\n3. Die Gleichung gilt streng nur für ideale (reibungsfreie) Fluide.\n4. Der Venturi-Effekt lässt sich mit der Bernoulli-Gleichung erklären.\n5. Die Bernoulli-Gleichung gilt uneingeschränkt für kompressible Gase bei hohen Geschwindigkeiten.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1 und 2" },
      { id: "c", text: "Nur 1, 2 und 4" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Für kompressible Gase bei hohen Geschwindigkeiten (Mach > 0,3) muss die kompressible Form verwendet werden.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 041 Kontinuitätsgleichung (leicht) ──
  {
    id: "ph-typk-new4-041",
    subject: "physik",
    chapter: "phys-kap2",
    text: "Welche der folgenden Aussagen zur Kontinuitätsgleichung sind richtig?\n\n1. A₁ · v₁ = A₂ · v₂ gilt für inkompressible Fluide.\n2. In einer Verengung steigt die Strömungsgeschwindigkeit.\n3. Der Volumenstrom ist in jedem Querschnitt gleich.\n4. Die Gleichung drückt die Massenerhaltung aus.\n5. In einer Erweiterung steigt die Strömungsgeschwindigkeit.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: In einer Erweiterung sinkt die Geschwindigkeit (größerer Querschnitt → langsamere Strömung).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 042 Hubarbeit und Leistung (mittel) ──
  {
    id: "ph-typk-new4-042",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur Hubarbeit und -leistung sind richtig?\n\n1. Die Hubarbeit ist W_hub = m · g · h.\n2. Die Hubleistung ist P = m · g · h / t.\n3. Beim Heben eines Körpers wird Arbeit gegen die Schwerkraft verrichtet.\n4. Die Hubarbeit hängt nicht vom Weg ab, sondern nur von der Höhendifferenz.\n5. Die Hubarbeit verdoppelt sich, wenn der Weg auf einer Rampe doppelt so lang ist.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Hubarbeit hängt nur von der Höhendifferenz ab (konservative Kraft), nicht vom Wegverlauf.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 043 Einfache Maschinen – Hebel (leicht) ──
  {
    id: "ph-typk-new4-043",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zum Hebel sind richtig?\n\n1. Im Gleichgewicht gilt F₁ · l₁ = F₂ · l₂ (Hebelgesetz).\n2. Ein Hebel kann Kräfte vergrößern, aber nicht Arbeit.\n3. Beim zweiseitigen Hebel liegen Kraft und Last auf verschiedenen Seiten des Drehpunkts.\n4. Beim einseitigen Hebel liegen Kraft und Last auf derselben Seite.\n5. Mit einem Hebel kann man Energie erzeugen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1 und 2" },
      { id: "c", text: "Nur 1, 2 und 3" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Ein Hebel kann keine Energie erzeugen, sondern nur die Kraft-Weg-Verteilung ändern (goldene Regel der Mechanik).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 044 Goldene Regel der Mechanik (mittel) ──
  {
    id: "ph-typk-new4-044",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur goldenen Regel der Mechanik sind richtig?\n\n1. Was man an Kraft spart, muss man an Weg zusetzen.\n2. Die Arbeit bleibt bei idealen einfachen Maschinen gleich.\n3. Ein Flaschenzug mit 4 tragenden Seilen reduziert die Kraft auf ein Viertel.\n4. Bei einem Flaschenzug mit 4 tragenden Seilen muss man den vierfachen Weg ziehen.\n5. Einfache Maschinen können die zu verrichtende Arbeit verringern.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Arbeit kann durch einfache Maschinen nicht verringert werden (nur Kraft und Weg werden umverteilt).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 045 Temperaturabhängigkeit des Widerstands (mittel) ──
  {
    id: "ph-typk-new4-045",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zur Temperaturabhängigkeit des elektrischen Widerstands sind richtig?\n\n1. Bei Metallen steigt der Widerstand mit zunehmender Temperatur.\n2. Der Temperaturkoeffizient α beschreibt die relative Änderung pro Kelvin.\n3. Bei Halbleitern sinkt der Widerstand mit steigender Temperatur.\n4. Supraleiter haben bei der Sprungtemperatur einen Widerstand von null.\n5. Der Widerstand aller Materialien verhält sich gleich bei Temperaturänderung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Metalle, Halbleiter und Supraleiter zeigen völlig unterschiedliches Temperaturverhalten des Widerstands.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 046 Kirchhoffsche Regeln (mittel) ──
  {
    id: "ph-typk-new4-046",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zu den Kirchhoffschen Regeln sind richtig?\n\n1. Die Knotenregel besagt, dass die Summe aller Ströme an einem Knoten null ist.\n2. Die Maschenregel besagt, dass die Summe aller Spannungen in einer Masche null ist.\n3. Die Knotenregel basiert auf der Ladungserhaltung.\n4. Die Maschenregel basiert auf der Energieerhaltung.\n5. Die Kirchhoffschen Regeln gelten nur für Gleichstromkreise.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Kirchhoffschen Regeln gelten auch für Wechselstromkreise (dort mit komplexen Größen).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 047 Elektrische Feldstärke (schwer) ──
  {
    id: "ph-typk-new4-047",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zur elektrischen Feldstärke sind richtig?\n\n1. Die Feldstärke ist E = F / q.\n2. Die Einheit ist V/m oder N/C.\n3. Im homogenen Feld gilt E = U / d.\n4. Feldlinien zeigen von Plus nach Minus.\n5. Im Inneren eines metallischen Leiters ist die Feldstärke im elektrostatischen Fall maximal.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Im Inneren eines Leiters ist die elektrostatische Feldstärke null (Ladungen sitzen auf der Oberfläche).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 048 Magnetfeld stromdurchflossener Leiter (mittel) ──
  {
    id: "ph-typk-new4-048",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zum Magnetfeld eines stromdurchflossenen Leiters sind richtig?\n\n1. Ein gerader stromdurchflossener Leiter erzeugt konzentrische Magnetfeldlinien.\n2. Die Richtung des Feldes folgt der Rechte-Hand-Regel.\n3. Die Feldstärke nimmt mit dem Abstand vom Leiter ab.\n4. Eine stromdurchflossene Spule erzeugt ein Feld ähnlich einem Stabmagneten.\n5. Das Magnetfeld eines Leiters ist unabhängig von der Stromstärke.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die magnetische Feldstärke ist direkt proportional zur Stromstärke (B ∝ I).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 049 Strahlentherapie (schwer) ──
  {
    id: "ph-typk-new4-049",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zur Strahlentherapie sind richtig?\n\n1. Ionisierende Strahlung schädigt die DNA der Tumorzellen.\n2. Die Dosis wird in Gray (Gy) angegeben.\n3. Fraktionierung (Aufteilung der Dosis) schont gesundes Gewebe.\n4. Verschiedene Gewebearten haben unterschiedliche Strahlenempfindlichkeit.\n5. Strahlentherapie verursacht keinerlei Nebenwirkungen im gesunden Gewebe.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Strahlentherapie kann auch gesundes Gewebe schädigen (Hautrötung, Übelkeit, Erschöpfung).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 050 Lorentz-Kraft (schwer) ──
  {
    id: "ph-typk-new4-050",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zur Lorentz-Kraft sind richtig?\n\n1. Die Lorentz-Kraft wirkt auf eine bewegte Ladung im Magnetfeld.\n2. Sie steht senkrecht zur Geschwindigkeit und zum Magnetfeld.\n3. F = q · v · B · sin(α) mit α = Winkel zwischen v und B.\n4. Eine ruhende Ladung erfährt keine Lorentz-Kraft.\n5. Die Lorentz-Kraft verrichtet Arbeit an der Ladung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Da die Lorentz-Kraft stets senkrecht zur Geschwindigkeit steht, verrichtet sie keine Arbeit (ändert nur die Richtung).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 051 Elektromagnetische Induktion (mittel) ──
  {
    id: "ph-typk-new4-051",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zur elektromagnetischen Induktion sind richtig?\n\n1. Eine Änderung des magnetischen Flusses durch eine Leiterschleife induziert eine Spannung.\n2. Die induzierte Spannung ist proportional zur Änderungsrate des Flusses.\n3. Die Lenz'sche Regel bestimmt die Richtung des induzierten Stroms.\n4. Ein Generator wandelt mechanische in elektrische Energie um.\n5. Induktion tritt nur bei Gleichstrom auf.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Induktion erfordert eine zeitliche Änderung des magnetischen Flusses; sie tritt gerade bei Wechselstrom oder Bewegung auf, nicht bei konstantem Gleichstrom.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 052 Transformator (mittel) ──
  {
    id: "ph-typk-new4-052",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zum Transformator sind richtig?\n\n1. Er wandelt Wechselspannungen in andere Spannungswerte um.\n2. U₁/U₂ = N₁/N₂ (Windungszahlverhältnis).\n3. Ein idealer Transformator überträgt die Leistung verlustfrei.\n4. Der Transformator funktioniert nur mit Wechselstrom.\n5. Beim Herauftransformieren der Spannung steigt auch der Strom.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Beim Herauftransformieren der Spannung sinkt der Strom (Leistungserhaltung P = U · I).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 053 Brechungsgesetz (leicht) ──
  {
    id: "ph-typk-new4-053",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Brechungsgesetz (Snellius) sind richtig?\n\n1. n₁ · sin(α₁) = n₂ · sin(α₂).\n2. Beim Übergang in ein optisch dichteres Medium wird der Lichtstrahl zum Lot hin gebrochen.\n3. Der Brechungsindex n = c / c_Medium.\n4. Im Vakuum ist n = 1.\n5. Die Frequenz des Lichts ändert sich bei Brechung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Frequenz bleibt bei der Brechung konstant; es ändert sich die Wellenlänge und die Ausbreitungsgeschwindigkeit.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 054 Interferenz (schwer) ──
  {
    id: "ph-typk-new4-054",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Interferenz von Licht sind richtig?\n\n1. Konstruktive Interferenz tritt auf, wenn der Gangunterschied ein Vielfaches der Wellenlänge ist.\n2. Destruktive Interferenz tritt bei einem Gangunterschied von λ/2 auf.\n3. Interferenz ist ein Beweis für den Wellencharakter des Lichts.\n4. Das Doppelspaltexperiment zeigt Interferenzmuster.\n5. Interferenz kann nur mit Laserlicht beobachtet werden.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Interferenz kann auch mit normalem (kohärentem) Licht beobachtet werden (z. B. Seifenblasen, Ölfilm).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 055 Beugung (schwer) ──
  {
    id: "ph-typk-new4-055",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Beugung von Licht sind richtig?\n\n1. Beugung tritt auf, wenn Licht auf Hindernisse oder Spalte trifft.\n2. Der Beugungseffekt ist umso stärker, je kleiner der Spalt im Vergleich zur Wellenlänge ist.\n3. Beugung begrenzt die Auflösung optischer Instrumente.\n4. Das Beugungsmuster an einem Einzelspalt zeigt ein zentrales Maximum.\n5. Beugung tritt nur bei sichtbarem Licht auf.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Beugung ist ein Wellenphänomen und tritt bei allen Wellenlängen auf (auch Röntgen, Mikrowellen, Schall).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 056 Wärmelehre – Kalorimetrie (leicht) ──
  {
    id: "ph-typk-new4-056",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zur Kalorimetrie sind richtig?\n\n1. Q = m · c · ΔT beschreibt die aufgenommene oder abgegebene Wärme.\n2. Die spezifische Wärmekapazität c ist materialabhängig.\n3. Wasser hat eine besonders hohe spezifische Wärmekapazität.\n4. Im Kalorimeter gilt Q_ab = Q_auf (Energieerhaltung).\n5. Die spezifische Wärmekapazität hat die Einheit J/(kg·K²).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Einheit ist J/(kg·K), nicht J/(kg·K²).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 057 Phasenübergänge (mittel) ──
  {
    id: "ph-typk-new4-057",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zu Phasenübergängen sind richtig?\n\n1. Beim Schmelzen wird dem Stoff Wärme zugeführt, die Temperatur bleibt konstant.\n2. Die Schmelzwärme ist Q = m · L_s.\n3. Beim Verdampfen steigt die Temperatur.\n4. Sublimation ist der direkte Übergang von fest zu gasförmig.\n5. Die Verdampfungswärme von Wasser ist größer als die Schmelzwärme.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 1, 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Beim Verdampfen bleibt die Temperatur ebenfalls konstant (Siedetemperatur), solange beide Phasen koexistieren.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 058 Wärmeleitung (leicht) ──
  {
    id: "ph-typk-new4-058",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zur Wärmeleitung sind richtig?\n\n1. Wärme fließt immer von warm nach kalt.\n2. Metalle leiten Wärme besser als Luft.\n3. Die Wärmestromdichte ist proportional zum Temperaturgradienten (Fouriersches Gesetz).\n4. Wärmedämmung nutzt Materialien mit geringer Wärmeleitfähigkeit.\n5. Wärmeleitung erfordert Stofftransport.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Wärmeleitung erfolgt durch Energieübertragung zwischen benachbarten Teilchen ohne Stofftransport (im Gegensatz zur Konvektion).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 059 Wärmestrahlung (mittel) ──
  {
    id: "ph-typk-new4-059",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zur Wärmestrahlung sind richtig?\n\n1. Jeder Körper mit Temperatur über 0 K emittiert Wärmestrahlung.\n2. Die abgestrahlte Leistung ist proportional zu T⁴ (Stefan-Boltzmann-Gesetz).\n3. Das Wiensches Verschiebungsgesetz beschreibt die Verschiebung des Emissionsmaximums mit der Temperatur.\n4. Wärmestrahlung benötigt kein Medium zur Ausbreitung.\n5. Schwarze Körper reflektieren die gesamte einfallende Strahlung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Schwarze Körper absorbieren die gesamte einfallende Strahlung (und emittieren maximal).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 060 Hauptsätze der Thermodynamik (schwer) ──
  {
    id: "ph-typk-new4-060",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zu den Hauptsätzen der Thermodynamik sind richtig?\n\n1. Der 1. Hauptsatz ist der Energieerhaltungssatz für thermodynamische Systeme.\n2. ΔU = Q + W beschreibt die Änderung der inneren Energie.\n3. Der 2. Hauptsatz besagt, dass Wärme nicht von selbst von kalt nach warm fließt.\n4. Die Entropie eines abgeschlossenen Systems kann nur zunehmen oder gleich bleiben.\n5. Ein Perpetuum mobile zweiter Art ist möglich.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Der 2. Hauptsatz verbietet ein Perpetuum mobile zweiter Art.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 061 Spannungsteiler (mittel) ──
  {
    id: "ph-typk-new4-061",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zum Spannungsteiler sind richtig?\n\n1. An einem Spannungsteiler liegt die Teilspannung proportional zum Widerstand an.\n2. U₂ = U_ges · R₂ / (R₁ + R₂).\n3. Der Spannungsteiler funktioniert nur bei unbelastetem Ausgang exakt.\n4. Bei Belastung sinkt die Ausgangsspannung.\n5. Am kleineren Widerstand fällt die größere Spannung ab.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Am größeren Widerstand fällt die größere Spannung ab (U ∝ R bei gleichem Strom).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 062 Coulomb-Gesetz (leicht) ──
  {
    id: "ph-typk-new4-062",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zum Coulomb-Gesetz sind richtig?\n\n1. Die Kraft zwischen zwei Punktladungen ist proportional zum Produkt der Ladungen.\n2. Die Kraft nimmt mit dem Quadrat des Abstands ab.\n3. Gleichnamige Ladungen stoßen sich ab.\n4. Ungleichnamige Ladungen ziehen sich an.\n5. Die Coulomb-Kraft ist unabhängig vom Medium zwischen den Ladungen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Coulomb-Kraft hängt von der Dielektrizitätskonstante des Mediums ab (F ∝ 1/ε).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 063 Kapazität (mittel) ──
  {
    id: "ph-typk-new4-063",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zur Kapazität eines Kondensators sind richtig?\n\n1. Die Kapazität ist C = Q / U.\n2. Die Einheit ist Farad (F = C/V).\n3. Bei einem Plattenkondensator ist C = ε₀ · ε_r · A / d.\n4. Bei Reihenschaltung addieren sich die Kapazitäten.\n5. Ein Dielektrikum zwischen den Platten erhöht die Kapazität.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Bei Reihenschaltung gilt 1/C_ges = 1/C₁ + 1/C₂ (Kapazitäten addieren sich bei Parallelschaltung).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 064 Wellen – Grundbegriffe (leicht) ──
  {
    id: "ph-typk-new4-064",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zu mechanischen Wellen sind richtig?\n\n1. Wellen transportieren Energie, aber keine Materie.\n2. c = λ · f beschreibt die Ausbreitungsgeschwindigkeit.\n3. Bei Transversalwellen schwingt das Medium senkrecht zur Ausbreitungsrichtung.\n4. Bei Longitudinalwellen schwingt das Medium parallel zur Ausbreitungsrichtung.\n5. Schall breitet sich im Vakuum aus.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Schall ist eine mechanische Welle und benötigt ein Medium — im Vakuum gibt es keinen Schall.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 065 Doppler-Effekt (mittel) ──
  {
    id: "ph-typk-new4-065",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Doppler-Effekt sind richtig?\n\n1. Bei Annäherung der Quelle an den Beobachter steigt die wahrgenommene Frequenz.\n2. Bei Entfernung sinkt die wahrgenommene Frequenz.\n3. Der Doppler-Effekt tritt bei Schall und bei Licht auf.\n4. In der Medizin wird der Doppler-Ultraschall zur Blutflussmessung genutzt.\n5. Der Doppler-Effekt ändert die tatsächliche Frequenz der Quelle.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1 und 2" },
      { id: "c", text: "Nur 1, 2 und 4" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Quelle sendet weiterhin mit der gleichen Frequenz; nur die wahrgenommene Frequenz ändert sich.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 066 Stehende Wellen (schwer) ──
  {
    id: "ph-typk-new4-066",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zu stehenden Wellen sind richtig?\n\n1. Stehende Wellen entstehen durch Überlagerung zweier gegenläufiger Wellen.\n2. Knoten sind Punkte mit minimaler Amplitude.\n3. Bäuche sind Punkte mit maximaler Amplitude.\n4. Bei einer beidseitig eingespannten Saite ist die Grundfrequenz f₁ = c / (2L).\n5. Stehende Wellen transportieren Energie in Ausbreitungsrichtung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Stehende Wellen transportieren im Mittel keine Energie.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 067 Nuklearmedizin – Szintigraphie (schwer) ──
  {
    id: "ph-typk-new4-067",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zur Szintigraphie sind richtig?\n\n1. Radioaktive Tracer werden dem Patienten verabreicht.\n2. Gammastrahlung wird mit einer Gammakamera detektiert.\n3. Die Szintigraphie liefert funktionelle Informationen über Organe.\n4. Die verwendeten Radionuklide haben kurze Halbwertszeiten.\n5. Bei der Szintigraphie wird externe Strahlung durch den Körper geschickt.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Strahlung kommt von innen (injizierter Tracer), nicht von einer externen Quelle.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 068 Schallintensität und Dezibel (mittel) ──
  {
    id: "ph-typk-new4-068",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Schallintensität und zum Dezibel sind richtig?\n\n1. Der Schallpegel wird in Dezibel (dB) gemessen.\n2. Eine Verdoppelung der Schallintensität entspricht etwa +3 dB.\n3. Die Dezibel-Skala ist logarithmisch.\n4. Die Schmerzschwelle liegt bei etwa 120–130 dB.\n5. Eine Verdoppelung der Schallintensität wird als doppelt so laut empfunden.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Eine Verdoppelung der Lautstärkeempfindung erfordert etwa eine Verzehnfachung der Intensität (+10 dB).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 069 Carnot-Wirkungsgrad (schwer) ──
  {
    id: "ph-typk-new4-069",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zum Carnot-Wirkungsgrad sind richtig?\n\n1. η_Carnot = 1 − T_kalt / T_warm (Temperaturen in Kelvin).\n2. Er stellt den maximal erreichbaren Wirkungsgrad für Wärmekraftmaschinen dar.\n3. Der Carnot-Wirkungsgrad steigt mit zunehmender Temperaturdifferenz.\n4. Bei T_kalt = 0 K wäre η_Carnot = 100 %.\n5. Reale Maschinen erreichen immer den Carnot-Wirkungsgrad.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Reale Maschinen erreichen nie den Carnot-Wirkungsgrad, da Reibung und andere Verluste auftreten.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 070 Ideales Gas (leicht) ──
  {
    id: "ph-typk-new4-070",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zum idealen Gas sind richtig?\n\n1. pV = nRT ist die allgemeine Gasgleichung.\n2. Bei konstantem Volumen steigt der Druck proportional zur Temperatur (in Kelvin).\n3. Bei konstantem Druck ist das Volumen proportional zur Temperatur.\n4. Ideale Gasatome haben kein Eigenvolumen und keine Wechselwirkung.\n5. Reale Gase verhalten sich bei hohem Druck und tiefer Temperatur ideal.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Reale Gase weichen bei hohem Druck und tiefer Temperatur am stärksten vom idealen Verhalten ab.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 071 Konvektion (leicht) ──
  {
    id: "ph-typk-new4-071",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zur Konvektion sind richtig?\n\n1. Konvektion ist Wärmetransport durch Strömung eines Fluids.\n2. Warme Luft steigt auf (natürliche Konvektion).\n3. Ein Ventilator erzeugt erzwungene Konvektion.\n4. Konvektion tritt in Flüssigkeiten und Gasen auf.\n5. Konvektion funktioniert auch im Vakuum.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Konvektion benötigt ein Fluid (Flüssigkeit oder Gas) und funktioniert nicht im Vakuum.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 072 Federkombination (schwer) ──
  {
    id: "ph-typk-new4-072",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zu Federkombinationen sind richtig?\n\n1. Bei Parallelschaltung addieren sich die Federkonstanten: k_ges = k₁ + k₂.\n2. Bei Reihenschaltung gilt 1/k_ges = 1/k₁ + 1/k₂.\n3. Parallel geschaltete Federn sind steifer als die einzelne Feder.\n4. In Reihe geschaltete Federn sind weicher als die einzelne Feder.\n5. Parallel geschaltete Federn haben bei gleicher Belastung die gleiche Auslenkung.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 1 und 2" },
      { id: "e", text: "Nur 1, 3 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 Aussagen sind korrekt. Parallele Federn teilen sich die Last und haben dieselbe Auslenkung; Reihenfedern haben dieselbe Kraft, aber unterschiedliche Auslenkungen.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 073 Wheatstone-Brücke (schwer) ──
  {
    id: "ph-typk-new4-073",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zur Wheatstone-Brücke sind richtig?\n\n1. Sie dient zur genauen Messung eines unbekannten Widerstands.\n2. Die Brücke ist abgeglichen, wenn kein Strom durch das Messgerät fließt.\n3. Im abgeglichenen Zustand gilt R₁/R₂ = R₃/R₄.\n4. Die Methode ist unabhängig von der Versorgungsspannung.\n5. Die Wheatstone-Brücke funktioniert nur bei Wechselspannung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Wheatstone-Brücke funktioniert sowohl mit Gleich- als auch mit Wechselspannung.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 074 Photoelektrischer Effekt (schwer) ──
  {
    id: "ph-typk-new4-074",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum photoelektrischen Effekt sind richtig?\n\n1. Photonen mit ausreichender Energie können Elektronen aus einer Metalloberfläche lösen.\n2. Unterhalb der Grenzfrequenz findet kein Effekt statt, unabhängig von der Intensität.\n3. Die kinetische Energie der Elektronen steigt mit der Frequenz des Lichts.\n4. Einstein erklärte den Effekt mit dem Quantenmodell des Lichts.\n5. Eine höhere Lichtintensität erhöht die kinetische Energie der einzelnen Elektronen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Höhere Intensität bedeutet mehr Photonen → mehr Elektronen, aber jedes einzelne Elektron behält die gleiche kinetische Energie.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 075 Radioaktiver Zerfall (mittel) ──
  {
    id: "ph-typk-new4-075",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zum radioaktiven Zerfall sind richtig?\n\n1. Radioaktiver Zerfall ist ein statistischer Prozess.\n2. Die Halbwertszeit ist die Zeit, in der die Hälfte der Kerne zerfällt.\n3. Nach zwei Halbwertszeiten ist noch ein Viertel der ursprünglichen Kerne vorhanden.\n4. Die Zerfallskonstante λ ist der Kehrwert der mittleren Lebensdauer.\n5. Man kann vorhersagen, welcher einzelne Kern als nächstes zerfällt.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Der Zerfall ist ein rein statistischer Prozess — man kann nicht vorhersagen, welcher einzelne Kern zerfällt.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
];
