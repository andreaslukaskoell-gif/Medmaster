/**
 * Physik Typ-K Pool 5 (Kombinationsaufgaben) — 75 Fragen im Question-Format.
 * IDs: ph-typk-new5-001 bis ph-typk-new5-075.
 * Themen: Energie/Energieerhaltung, Halbleiter/Elektronik, Spez. Relativitätstheorie,
 * Biophysik, Strahlenphysik, Astronomie/Astrophysik.
 * Schwierigkeit: ~30 % leicht, ~45 % mittel, ~25 % schwer.
 */
import type { Question } from "./index";

export const physikTypKNew5: Question[] = [
  // ══════════════════════════════════════════════════
  //  ENERGIE UND ENERGIEERHALTUNG (001–013)
  // ══════════════════════════════════════════════════

  // ── 001 Kinetische Energie (leicht) ──
  {
    id: "ph-typk-new5-001",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur kinetischen Energie sind richtig?\n\n1. Die kinetische Energie ist proportional zum Quadrat der Geschwindigkeit.\n2. Die Einheit der kinetischen Energie ist Joule.\n3. Bei doppelter Geschwindigkeit verdoppelt sich die kinetische Energie.\n4. Die kinetische Energie ist stets positiv oder null.\n5. Die Formel lautet E_kin = ½ · m · v².",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Bei doppelter Geschwindigkeit vervierfacht sich die kinetische Energie (v² → (2v)² = 4v²).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 002 Potentielle Energie (leicht) ──
  {
    id: "ph-typk-new5-002",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur potentiellen Energie sind richtig?\n\n1. Die Lageenergie im Schwerefeld berechnet sich mit E_pot = m · g · h.\n2. Der Nullpunkt der potentiellen Energie kann frei gewählt werden.\n3. Die potentielle Energie ist stets positiv.\n4. Bei doppelter Höhe verdoppelt sich die potentielle Energie.\n5. Die Einheit ist Joule.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Die potentielle Energie kann negativ sein, wenn der Bezugspunkt oberhalb des Körpers gewählt wird.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 003 Energieerhaltungssatz (leicht) ──
  {
    id: "ph-typk-new5-003",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zum Energieerhaltungssatz sind richtig?\n\n1. Energie kann weder erzeugt noch vernichtet werden.\n2. Energie kann von einer Form in eine andere umgewandelt werden.\n3. Der Energieerhaltungssatz gilt nur in abgeschlossenen Systemen.\n4. Reibung vernichtet Energie.\n5. Die Gesamtenergie eines abgeschlossenen Systems bleibt konstant.",
    options: [
      { id: "a", text: "Nur 1, 2 und 5" },
      { id: "b", text: "Nur 1, 2, 3 und 5" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 2 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 5 korrekt. 3 falsch: Der Energieerhaltungssatz gilt universell, nicht nur in abgeschlossenen Systemen (dort ist nur die Gesamtenergie konstant). 4 falsch: Reibung wandelt Energie in Wärme um, vernichtet sie aber nicht.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 004 Thermische Energie (mittel) ──
  {
    id: "ph-typk-new5-004",
    subject: "physik",
    chapter: "phys-kap2",
    text: "Welche der folgenden Aussagen zur thermischen Energie sind richtig?\n\n1. Thermische Energie ist die Summe der kinetischen Energien aller Teilchen eines Systems.\n2. Die thermische Energie steigt mit der Temperatur.\n3. Beim Phasenübergang bleibt die thermische Energie konstant.\n4. Die Einheit der thermischen Energie ist Joule.\n5. Wärme ist die übertragene thermische Energie zwischen Systemen unterschiedlicher Temperatur.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 2 und 5" },
      { id: "d", text: "Nur 1, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Beim Phasenübergang wird Energie zugeführt oder abgegeben (Schmelz-/Verdampfungswärme), die thermische Energie ändert sich also.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 005 Energieumwandlung bei Pendel (mittel) ──
  {
    id: "ph-typk-new5-005",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur Energieumwandlung beim Fadenpendel sind richtig?\n\n1. Am höchsten Punkt ist die potentielle Energie maximal.\n2. Am tiefsten Punkt ist die kinetische Energie maximal.\n3. Die Summe aus kinetischer und potentieller Energie bleibt ohne Reibung konstant.\n4. Die Schwingungsdauer hängt von der Amplitude ab.\n5. Im tiefsten Punkt ist die potentielle Energie null (bei dortigem Bezugsniveau).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Beim mathematischen Pendel (kleine Auslenkungen) ist die Schwingungsdauer unabhängig von der Amplitude (T = 2π√(l/g)).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 006 Spannenergie (mittel) ──
  {
    id: "ph-typk-new5-006",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur elastischen (Spann-)Energie sind richtig?\n\n1. Die Spannenergie einer Feder ist E = ½ · k · x².\n2. Sie ist proportional zum Quadrat der Auslenkung.\n3. Bei doppelter Auslenkung verdoppelt sich die Spannenergie.\n4. Beim Loslassen wird die Spannenergie in kinetische Energie umgewandelt.\n5. Die Federkonstante k hat die Einheit N/m.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Bei doppelter Auslenkung vervierfacht sich die Spannenergie (x² → (2x)² = 4x²).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 007 Leistung und Energie (mittel) ──
  {
    id: "ph-typk-new5-007",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur Leistung sind richtig?\n\n1. Leistung ist die pro Zeiteinheit verrichtete Arbeit.\n2. Die Einheit der Leistung ist Watt (W = J/s).\n3. Bei doppelter Leistung wird die gleiche Arbeit in der halben Zeit verrichtet.\n4. Die Leistung kann auch als P = F · v berechnet werden.\n5. 1 PS entspricht genau 1000 Watt.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: 1 PS ≈ 735,5 W, nicht 1000 W.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 008 Wirkungsgrad (mittel) ──
  {
    id: "ph-typk-new5-008",
    subject: "physik",
    chapter: "phys-kap2",
    text: "Welche der folgenden Aussagen zum Wirkungsgrad sind richtig?\n\n1. Der Wirkungsgrad ist das Verhältnis von Nutzenergie zu zugeführter Energie.\n2. Der Wirkungsgrad hat keine Einheit.\n3. Ein Wirkungsgrad von über 100 % ist bei Wärmekraftmaschinen möglich.\n4. Der maximale Wirkungsgrad einer Wärmekraftmaschine wird durch den Carnot-Prozess begrenzt.\n5. Der Carnot-Wirkungsgrad ist η = 1 − T_kalt/T_warm.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Ein Wirkungsgrad über 100 % widerspricht dem Energieerhaltungssatz; bei Wärmekraftmaschinen ist er stets unter 100 %.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 009 Energieformen (leicht) ──
  {
    id: "ph-typk-new5-009",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zu Energieformen sind richtig?\n\n1. Chemische Energie wird in Batterien gespeichert.\n2. Elektrische Energie kann direkt in Licht umgewandelt werden.\n3. Kernenergie beruht auf der Umwandlung von Masse in Energie.\n4. Schallenergie ist eine Form mechanischer Energie.\n5. Alle Energieformen lassen sich vollständig in jede andere umwandeln.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Der zweite Hauptsatz der Thermodynamik beschränkt die Umwandlung — Wärme kann nicht vollständig in Arbeit umgewandelt werden.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 010 Arbeit (leicht) ──
  {
    id: "ph-typk-new5-010",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur mechanischen Arbeit sind richtig?\n\n1. Arbeit wird verrichtet, wenn eine Kraft einen Körper entlang eines Weges verschiebt.\n2. Die Einheit der Arbeit ist Joule.\n3. Steht die Kraft senkrecht zur Bewegungsrichtung, wird keine Arbeit verrichtet.\n4. Arbeit ist eine vektorielle Größe.\n5. Die Hubarbeit berechnet sich als W = m · g · h.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Arbeit ist eine skalare Größe (Skalarprodukt aus Kraft- und Wegvektor: W = F⃗ · s⃗).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 011 Energieerhaltung beim freien Fall (mittel) ──
  {
    id: "ph-typk-new5-011",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zum freien Fall (ohne Luftwiderstand) sind richtig?\n\n1. Die potentielle Energie nimmt mit zunehmender Fallstrecke ab.\n2. Die kinetische Energie nimmt mit zunehmender Fallstrecke zu.\n3. Die mechanische Gesamtenergie bleibt konstant.\n4. Die Auftreffgeschwindigkeit hängt von der Masse des Körpers ab.\n5. Die Fallzeit aus der Höhe h berechnet sich als t = √(2h/g).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Die Auftreffgeschwindigkeit im Vakuum ist unabhängig von der Masse (v = √(2gh)).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 012 Elastischer Stoß (schwer) ──
  {
    id: "ph-typk-new5-012",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zum elastischen Stoß sind richtig?\n\n1. Sowohl der Impuls als auch die kinetische Energie bleiben erhalten.\n2. Bei gleichem Stoßpartner (gleiche Masse) tauschen die Körper ihre Geschwindigkeiten.\n3. Ein elastischer Stoß kommt in der Natur exakt nur bei Atomkernen und Teilchen vor.\n4. Die Relativgeschwindigkeit kehrt beim elastischen Stoß ihr Vorzeichen um.\n5. Ein Ball, der vom Boden zurückprallt, vollzieht immer einen elastischen Stoß.",
    options: [
      { id: "a", text: "Nur 1, 2 und 4" },
      { id: "b", text: "Nur 1 und 2" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "c",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Beim Ball geht Energie als Wärme und Verformung verloren — der Stoß ist teilelastisch.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 013 Rotationsenergie (schwer) ──
  {
    id: "ph-typk-new5-013",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur Rotationsenergie sind richtig?\n\n1. Die Rotationsenergie berechnet sich mit E_rot = ½ · I · ω².\n2. I ist das Trägheitsmoment des Körpers.\n3. Bei einer Eisläuferin, die die Arme anzieht, steigt ω und damit E_rot, weil I sinkt.\n4. Die Rotationsenergie ist proportional zum Quadrat der Winkelgeschwindigkeit.\n5. Bei Erhaltung des Drehimpulses bleibt die Rotationsenergie stets konstant.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Bei Erhaltung des Drehimpulses L = I·ω ändert sich E_rot = L²/(2I), wenn I variiert — die Eisläuferin leistet Muskelarbeit.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },

  // ══════════════════════════════════════════════════
  //  HALBLEITER UND ELEKTRONIK (014–025)
  // ══════════════════════════════════════════════════

  // ── 014 Halbleiter Grundlagen (leicht) ──
  {
    id: "ph-typk-new5-014",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zu Halbleitern sind richtig?\n\n1. Silizium und Germanium sind typische Halbleitermaterialien.\n2. Die Leitfähigkeit von Halbleitern steigt mit der Temperatur.\n3. Halbleiter leiten Strom besser als Metalle.\n4. Durch Dotierung kann die Leitfähigkeit von Halbleitern gezielt verändert werden.\n5. Im reinen Halbleiter entstehen Elektron-Loch-Paare durch thermische Anregung.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Halbleiter leiten schlechter als Metalle, aber besser als Isolatoren.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 015 n- und p-Dotierung (mittel) ──
  {
    id: "ph-typk-new5-015",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zur Dotierung von Halbleitern sind richtig?\n\n1. Bei n-Dotierung werden Donatoren mit 5 Valenzelektronen eingebracht.\n2. Bei p-Dotierung entstehen Löcher als Majoritätsladungsträger.\n3. Ein n-dotierter Halbleiter ist negativ geladen.\n4. Phosphor ist ein typischer n-Dotand für Silizium.\n5. Bor ist ein typischer p-Dotand für Silizium.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1 und 2" },
      { id: "c", text: "Nur 1, 2 und 4" },
      { id: "d", text: "Nur 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Ein n-dotierter Halbleiter ist insgesamt elektrisch neutral — die überschüssigen Elektronen kompensieren die positiven Donatorkerne.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 016 Diode (mittel) ──
  {
    id: "ph-typk-new5-016",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zur Halbleiterdiode sind richtig?\n\n1. Eine Diode besteht aus einem p-n-Übergang.\n2. In Durchlassrichtung fließt ab einer bestimmten Schwellenspannung Strom.\n3. Die Schwellenspannung einer Siliziumdiode beträgt ca. 0,7 V.\n4. In Sperrrichtung fließt immer exakt null Strom.\n5. Die Diode wirkt wie ein elektrisches Ventil.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: In Sperrrichtung fließt ein sehr kleiner Sperrstrom (Leckstrom), der nicht exakt null ist.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 017 LED (leicht) ──
  {
    id: "ph-typk-new5-017",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zur LED (Leuchtdiode) sind richtig?\n\n1. Eine LED wandelt elektrische Energie direkt in Licht um.\n2. Die Farbe des emittierten Lichts hängt vom Halbleitermaterial ab.\n3. LEDs haben einen höheren Wirkungsgrad als Glühlampen.\n4. LEDs funktionieren in beiden Stromrichtungen.\n5. Die Schwellenspannung einer LED ist materialabhängig.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: LEDs leuchten nur in Durchlassrichtung; in Sperrrichtung emittieren sie kein Licht.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 018 Transistor (schwer) ──
  {
    id: "ph-typk-new5-018",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zum Bipolartransistor sind richtig?\n\n1. Ein NPN-Transistor besteht aus zwei n-dotierten und einer p-dotierten Schicht.\n2. Der Transistor kann als Schalter oder Verstärker eingesetzt werden.\n3. Der Basisstrom steuert den Kollektorstrom.\n4. Im gesperrten Zustand fließt kein Strom zwischen Kollektor und Emitter.\n5. Der Stromverstärkungsfaktor β gibt das Verhältnis I_C / I_B an.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Nur 1, 3 und 5" },
    ],
    correctOptionId: "c",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Auch im gesperrten Zustand fließt ein kleiner Leckstrom (I_CE0) zwischen Kollektor und Emitter.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 019 Photovoltaik (mittel) ──
  {
    id: "ph-typk-new5-019",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zur Photovoltaik sind richtig?\n\n1. Solarzellen wandeln Lichtenergie direkt in elektrische Energie um.\n2. Der photovoltaische Effekt beruht auf dem inneren photoelektrischen Effekt.\n3. Die erzeugte Spannung ist proportional zur Lichtintensität.\n4. Typische Wirkungsgrade kommerzieller Silizium-Solarzellen liegen bei 15–25 %.\n5. Solarzellen erzeugen Gleichstrom.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Die Leerlaufspannung einer Solarzelle ist nahezu unabhängig von der Lichtintensität — der Strom steigt proportional, die Spannung nur logarithmisch.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 020 Bändermodell (schwer) ──
  {
    id: "ph-typk-new5-020",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zum Bändermodell sind richtig?\n\n1. Im Leiter überlappen Valenz- und Leitungsband.\n2. Beim Isolator ist die Bandlücke größer als ca. 3 eV.\n3. Beim Halbleiter liegt die Bandlücke typisch bei 0,5–2 eV.\n4. Elektronen im Leitungsband sind frei beweglich.\n5. Die Bandlücke von Silizium beträgt ca. 5 eV.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Bandlücke von Silizium beträgt ca. 1,1 eV — das ist typisch für Halbleiter, nicht für Isolatoren.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 021 Gleichrichter (mittel) ──
  {
    id: "ph-typk-new5-021",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zum Gleichrichter sind richtig?\n\n1. Ein Gleichrichter wandelt Wechselspannung in Gleichspannung um.\n2. Der Einweggleichrichter nutzt nur eine Halbwelle.\n3. Der Brückengleichrichter nutzt beide Halbwellen.\n4. Nach dem Gleichrichten ist die Spannung völlig glatt.\n5. Zur Glättung wird ein Kondensator parallel geschaltet.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Nach dem Gleichrichten enthält die Spannung eine Restwelligkeit (Brummspannung); erst durch Glättung wird sie annähernd konstant.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 022 Photoelektrischer Effekt (mittel) ──
  {
    id: "ph-typk-new5-022",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum äußeren photoelektrischen Effekt sind richtig?\n\n1. Licht unterhalb einer Grenzfrequenz löst keine Elektronen aus der Metalloberfläche.\n2. Die kinetische Energie der ausgelösten Elektronen steigt mit der Lichtfrequenz.\n3. Die Anzahl der ausgelösten Elektronen steigt mit der Lichtintensität.\n4. Einstein erhielt den Nobelpreis für die Erklärung dieses Effekts.\n5. Die maximale kinetische Energie hängt von der Intensität ab.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die maximale kinetische Energie hängt von der Frequenz des Lichts ab, nicht von der Intensität (E_kin,max = h·f − W_A).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 023 Supraleitfähigkeit (schwer) ──
  {
    id: "ph-typk-new5-023",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zur Supraleitung sind richtig?\n\n1. Unterhalb der kritischen Temperatur sinkt der elektrische Widerstand auf null.\n2. Supraleiter verdrängen Magnetfelder aus ihrem Inneren (Meißner-Ochsenfeld-Effekt).\n3. Alle Metalle werden bei hinreichend tiefer Temperatur supraleitend.\n4. Cooper-Paare sind für die Supraleitung verantwortlich.\n5. Supraleitung wurde erstmals an Quecksilber beobachtet.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Nicht alle Metalle werden supraleitend — Gold, Silber und Kupfer zeigen z. B. keine Supraleitung.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 024 Halbleiter-Sensor (mittel) ──
  {
    id: "ph-typk-new5-024",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zu Halbleiter-Sensoren sind richtig?\n\n1. Ein NTC-Widerstand (Heißleiter) hat einen negativen Temperaturkoeffizienten.\n2. Ein PTC-Widerstand (Kaltleiter) hat einen positiven Temperaturkoeffizienten.\n3. Photowiderstände ändern ihren Widerstand bei Lichteinfall.\n4. Hall-Sensoren messen Magnetfelder.\n5. Die Leitfähigkeit eines NTC-Widerstands sinkt bei steigender Temperatur.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Beim NTC-Widerstand steigt die Leitfähigkeit bei steigender Temperatur (negativer Temperaturkoeffizient → Widerstand sinkt).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 025 Integrierte Schaltkreise (leicht) ──
  {
    id: "ph-typk-new5-025",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zu integrierten Schaltkreisen (ICs) sind richtig?\n\n1. ICs enthalten viele Transistoren auf einem Halbleiterchip.\n2. Die Miniaturisierung folgt dem Moore'schen Gesetz.\n3. Silizium ist das meistverwendete Substratmaterial.\n4. ICs können nur digitale Signale verarbeiten.\n5. Die Strukturgröße moderner Chips liegt im Nanometerbereich.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Es gibt auch analoge ICs (Operationsverstärker, Spannungsregler etc.).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },

  // ══════════════════════════════════════════════════
  //  SPEZIELLE RELATIVITÄTSTHEORIE (026–037)
  // ══════════════════════════════════════════════════

  // ── 026 Postulate der SRT (leicht) ──
  {
    id: "ph-typk-new5-026",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zu den Postulaten der speziellen Relativitätstheorie sind richtig?\n\n1. Die Lichtgeschwindigkeit im Vakuum ist in allen Inertialsystemen gleich.\n2. Die physikalischen Gesetze haben in allen Inertialsystemen dieselbe Form.\n3. Die spezielle Relativitätstheorie wurde von Einstein 1905 publiziert.\n4. Die SRT gilt nur bei Geschwindigkeiten nahe der Lichtgeschwindigkeit.\n5. Es gibt kein ausgezeichnetes Bezugssystem (keinen Äther).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Die SRT gilt für alle Geschwindigkeiten — ihre Effekte werden nur bei hohen Geschwindigkeiten signifikant.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 027 Zeitdilatation (mittel) ──
  {
    id: "ph-typk-new5-027",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Zeitdilatation sind richtig?\n\n1. Eine bewegte Uhr geht langsamer als eine ruhende Uhr.\n2. Der Effekt wird durch den Lorentzfaktor γ = 1/√(1 − v²/c²) beschrieben.\n3. Bei v = 0,87 c beträgt γ ungefähr 2.\n4. Die Zeitdilatation wurde experimentell bestätigt (z. B. Myonen).\n5. Bei Alltagsgeschwindigkeiten ist die Zeitdilatation leicht messbar.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt (bei v = 0,87c: γ ≈ 1/√(1−0,757) ≈ 1/√0,243 ≈ 2,03). 5 falsch: Bei Alltagsgeschwindigkeiten ist der Effekt extrem klein und nur mit Atomuhren messbar.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 028 Längenkontraktion (mittel) ──
  {
    id: "ph-typk-new5-028",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Längenkontraktion sind richtig?\n\n1. Ein bewegtes Objekt erscheint in Bewegungsrichtung verkürzt.\n2. Die verkürzte Länge berechnet sich mit L = L₀/γ.\n3. Die Kontraktion tritt nur in Bewegungsrichtung auf.\n4. Bei Lichtgeschwindigkeit würde die Länge auf null schrumpfen.\n5. Die Längenkontraktion ist eine optische Täuschung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Längenkontraktion ist ein realer physikalischer Effekt, keine optische Täuschung.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 029 Masse-Energie-Äquivalenz (leicht) ──
  {
    id: "ph-typk-new5-029",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Masse-Energie-Äquivalenz sind richtig?\n\n1. Die Formel lautet E = m · c².\n2. Auch ruhende Körper besitzen Energie (Ruheenergie).\n3. c ist die Lichtgeschwindigkeit im Vakuum.\n4. Bei Kernspaltung wird ein Teil der Masse in Energie umgewandelt.\n5. Die Formel gilt nur für Objekte, die sich mit Lichtgeschwindigkeit bewegen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1 und 3" },
      { id: "c", text: "Nur 1, 2 und 3" },
      { id: "d", text: "Nur 2 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: E = mc² beschreibt die Ruheenergie und gilt für jedes Objekt unabhängig von seiner Geschwindigkeit.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 030 Relativistische Masse (schwer) ──
  {
    id: "ph-typk-new5-030",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur relativistischen Dynamik sind richtig?\n\n1. Der relativistische Impuls ist p = γ · m · v.\n2. Bei v → c wächst der Impuls über alle Grenzen.\n3. Ein Objekt mit Ruhemasse kann nie Lichtgeschwindigkeit erreichen.\n4. Photonen haben keine Ruhemasse, aber einen Impuls p = E/c.\n5. Die relativistische kinetische Energie ist E_kin = ½ · m · v² auch bei v nahe c.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Bei v nahe c muss die relativistische Formel E_kin = (γ−1)·m·c² verwendet werden; ½mv² ist nur eine Näherung für v << c.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 031 Lorentzfaktor (schwer) ──
  {
    id: "ph-typk-new5-031",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Lorentzfaktor γ sind richtig?\n\n1. γ ist stets ≥ 1.\n2. Für v = 0 ist γ = 1.\n3. Für v → c geht γ gegen unendlich.\n4. γ = 1/√(1 − v²/c²).\n5. Bei v = 0,6c beträgt γ = 2.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Bei v = 0,6c ist γ = 1/√(1 − 0,36) = 1/√0,64 = 1/0,8 = 1,25 (nicht 2).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 032 Gleichzeitigkeit (mittel) ──
  {
    id: "ph-typk-new5-032",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Relativität der Gleichzeitigkeit sind richtig?\n\n1. Zwei Ereignisse, die in einem Bezugssystem gleichzeitig stattfinden, sind nicht unbedingt in einem anderen gleichzeitig.\n2. Dieser Effekt folgt aus der Konstanz der Lichtgeschwindigkeit.\n3. Die Kausalordnung zeitartiger Ereignisse bleibt in allen Bezugssystemen erhalten.\n4. Gleichzeitigkeit ist ein absolutes Konzept in der SRT.\n5. Das Gedankenexperiment mit dem fahrenden Zug illustriert diesen Effekt.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: In der SRT ist Gleichzeitigkeit relativ, nicht absolut — sie hängt vom Bezugssystem ab.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 033 GPS und Relativität (mittel) ──
  {
    id: "ph-typk-new5-033",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Relativitätstheorie und GPS sind richtig?\n\n1. Ohne relativistische Korrekturen würde GPS-Navigation ungenau werden.\n2. Die spezielle Relativitätstheorie bewirkt, dass Satellitenuhren langsamer gehen.\n3. Die allgemeine Relativitätstheorie bewirkt, dass Satellitenuhren schneller gehen.\n4. Der Nettoeffekt ist, dass Satellitenuhren schneller gehen als Bodenuhren.\n5. Die tägliche Abweichung ohne Korrektur wäre nur wenige Nanosekunden.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die tägliche Abweichung wäre ca. 38 µs — das entspricht einem Positionsfehler von ca. 10 km/Tag.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 034 Zwillingsparadoxon (schwer) ──
  {
    id: "ph-typk-new5-034",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Zwillingsparadoxon sind richtig?\n\n1. Der reisende Zwilling altert weniger als der auf der Erde gebliebene.\n2. Die Asymmetrie entsteht durch die Beschleunigungsphasen des Reisenden.\n3. Das Paradoxon wurde experimentell bestätigt.\n4. Beide Zwillinge altern aus Symmetriegründen gleich schnell.\n5. Der Effekt beruht auf der Zeitdilatation.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Die Situation ist nicht symmetrisch — der Reisende wechselt das Inertialsystem, der Daheimgebliebene nicht.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 035 Raumzeit (schwer) ──
  {
    id: "ph-typk-new5-035",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Raumzeit sind richtig?\n\n1. In der SRT sind Raum und Zeit zu einer vierdimensionalen Raumzeit vereint.\n2. Das Raumzeitintervall ist in allen Inertialsystemen invariant.\n3. Minkowski hat die mathematische Formulierung der Raumzeit eingeführt.\n4. Lichtartige Abstände haben ein Raumzeitintervall von null.\n5. Die Raumzeit ist in der SRT flach (euklidisch).",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2, 3 und 4" },
      { id: "c", text: "Nur 1, 2 und 3" },
      { id: "d", text: "Nur 1 und 2" },
      { id: "e", text: "Nur 2, 3 und 4" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 korrekt. Die Raumzeit der SRT ist tatsächlich flach (pseudo-euklidisch/Minkowski-Geometrie) — erst in der ART wird die Raumzeit durch Massen gekrümmt.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 036 Additionstheorem der Geschwindigkeiten (mittel) ──
  {
    id: "ph-typk-new5-036",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum relativistischen Additionstheorem der Geschwindigkeiten sind richtig?\n\n1. Geschwindigkeiten addieren sich nicht einfach wie in der klassischen Mechanik.\n2. Die Formel lautet v_ges = (v₁ + v₂)/(1 + v₁·v₂/c²).\n3. Für v₁, v₂ << c ergibt sich näherungsweise die klassische Addition.\n4. Zwei Objekte mit je 0,5c zueinander bewegen sich mit c relativ zueinander.\n5. Die resultierende Geschwindigkeit kann nie c überschreiten.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: (0,5c + 0,5c)/(1 + 0,25) = 1,0c/1,25 = 0,8c (nicht c).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 037 Massendefekt (mittel) ──
  {
    id: "ph-typk-new5-037",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Massendefekt sind richtig?\n\n1. Die Masse eines Atomkerns ist kleiner als die Summe der Massen seiner Nukleonen.\n2. Die Massendifferenz entspricht der Bindungsenergie nach E = Δm · c².\n3. Eisen-56 hat die höchste Bindungsenergie pro Nukleon.\n4. Sowohl bei Kernspaltung als auch bei Kernfusion wird Energie frei.\n5. Der Massendefekt ist bei leichten Kernen am größten.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Der Massendefekt pro Nukleon ist bei mittelschweren Kernen (um Fe-56) am größten, nicht bei leichten.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },

  // ══════════════════════════════════════════════════
  //  BIOPHYSIK (038–050)
  // ══════════════════════════════════════════════════

  // ── 038 Membranpotential (leicht) ──
  {
    id: "ph-typk-new5-038",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zum Ruhemembranpotential sind richtig?\n\n1. Das Ruhepotential einer typischen Nervenzelle beträgt ca. −70 mV.\n2. Es entsteht durch ungleiche Ionenverteilung innen und außen.\n3. Die Na⁺/K⁺-ATPase trägt zur Aufrechterhaltung bei.\n4. Kalium ist intrazellulär höher konzentriert als extrazellulär.\n5. Das Ruhepotential ist positiv.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Das Ruhepotential ist negativ (ca. −70 mV), das Zellinnere ist negativ gegenüber dem Außenraum.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 039 Aktionspotential (mittel) ──
  {
    id: "ph-typk-new5-039",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zum Aktionspotential sind richtig?\n\n1. Bei Depolarisation über die Schwelle öffnen sich spannungsgesteuerte Na⁺-Kanäle.\n2. Das Aktionspotential folgt dem Alles-oder-Nichts-Prinzip.\n3. Die Refraktärzeit verhindert eine Rückausbreitung des Signals.\n4. Während der Repolarisation öffnen sich K⁺-Kanäle.\n5. Die Amplitude des Aktionspotentials nimmt mit der Entfernung vom Reizort ab.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Das Aktionspotential wird bei Nervenzellen regenerativ weitergeleitet — seine Amplitude bleibt konstant.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 040 Nervenleitung (mittel) ──
  {
    id: "ph-typk-new5-040",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zur Nervenleitung sind richtig?\n\n1. Myelinisierte Nervenfasern leiten schneller als unmyelinisierte.\n2. Die saltatorische Erregungsleitung springt von Ranvier-Knoten zu Ranvier-Knoten.\n3. Die Leitungsgeschwindigkeit steigt mit dem Faserdurchmesser.\n4. Die maximale Leitungsgeschwindigkeit beim Menschen beträgt ca. 120 m/s.\n5. Myelinisierung verringert die Membrankapazität.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Nur 1, 3 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 korrekt. Die Myelinscheide verringert die Membrankapazität und erhöht den Membranwiderstand, wodurch die saltatorische Leitung ermöglicht wird.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 041 Diffusion (leicht) ──
  {
    id: "ph-typk-new5-041",
    subject: "physik",
    chapter: "phys-kap2",
    text: "Welche der folgenden Aussagen zur Diffusion sind richtig?\n\n1. Diffusion ist der Nettotransport von Teilchen entlang eines Konzentrationsgradienten.\n2. Diffusion wird durch die Brown'sche Molekularbewegung angetrieben.\n3. Die Diffusionsgeschwindigkeit steigt mit der Temperatur.\n4. Das Fick'sche Gesetz beschreibt die Diffusion quantitativ.\n5. Diffusion benötigt stets ein semipermeables Membran.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Diffusion findet auch ohne Membran statt (z. B. Parfüm im Raum). Osmose benötigt eine semipermeable Membran, Diffusion nicht.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 042 Osmose (mittel) ──
  {
    id: "ph-typk-new5-042",
    subject: "physik",
    chapter: "phys-kap2",
    text: "Welche der folgenden Aussagen zur Osmose sind richtig?\n\n1. Osmose ist der Nettotransport von Wasser durch eine semipermeable Membran.\n2. Wasser fließt von der niedrig konzentrierten zur hoch konzentrierten Seite.\n3. Der osmotische Druck kann mit π = c · R · T berechnet werden.\n4. Eine hypertonische Lösung hat eine höhere Teilchenkonzentration als die Zelle.\n5. In einer isotonischen Lösung kommt es zu keinem Nettowassertransport.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 5" },
      { id: "d", text: "Nur 2, 4 und 5" },
      { id: "e", text: "Nur 1, 3 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 korrekt. Die Van-'t-Hoff-Gleichung π = c·R·T beschreibt den osmotischen Druck; in isotonischer Lösung herrscht Gleichgewicht.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 043 Nernst-Gleichung (schwer) ──
  {
    id: "ph-typk-new5-043",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zur Nernst-Gleichung sind richtig?\n\n1. Sie beschreibt das Gleichgewichtspotential eines einzelnen Ions.\n2. Die Formel enthält den natürlichen Logarithmus des Konzentrationsverhältnisses.\n3. Bei 37 °C beträgt der Faktor RT/F ca. 26,7 mV.\n4. Das Gleichgewichtspotential für K⁺ liegt bei ca. −90 mV.\n5. Die Nernst-Gleichung berücksichtigt alle Ionensorten gleichzeitig.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Nernst-Gleichung gilt für ein einzelnes Ion; für mehrere Ionen gleichzeitig wird die Goldman-Gleichung verwendet.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 044 Donnan-Gleichgewicht (schwer) ──
  {
    id: "ph-typk-new5-044",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zum Donnan-Gleichgewicht sind richtig?\n\n1. Es entsteht, wenn nicht-permeable Ionen auf einer Seite einer Membran vorliegen.\n2. Die permeablen Ionen verteilen sich ungleichmäßig.\n3. Es entsteht eine elektrische Potentialdifferenz über die Membran.\n4. Proteine in der Zelle wirken als nicht-permeable Anionen.\n5. Im Donnan-Gleichgewicht ist das chemische Potential aller Ionen auf beiden Seiten gleich.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Nur 1 und 3" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 korrekt. Im Donnan-Gleichgewicht ist das elektrochemische Potential (chemisches Potential + elektrisches Potential) der permeablen Ionen auf beiden Seiten gleich.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 045 Blutdruck und Hämodynamik (mittel) ──
  {
    id: "ph-typk-new5-045",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur Hämodynamik sind richtig?\n\n1. Der Blutdruck wird in mmHg gemessen.\n2. Das Hagen-Poiseuille-Gesetz beschreibt den Strömungswiderstand in Röhren.\n3. Der Strömungswiderstand ist proportional zur vierten Potenz des Radius.\n4. Turbulente Strömung tritt bei hoher Reynolds-Zahl auf.\n5. In den Kapillaren ist die Strömungsgeschwindigkeit am höchsten.",
    options: [
      { id: "a", text: "Nur 1, 2 und 4" },
      { id: "b", text: "Nur 1, 2, 3 und 4" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 2 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4 korrekt. 3 falsch: Der Strömungswiderstand ist umgekehrt proportional zur vierten Potenz des Radius (R ∝ 1/r⁴). 5 falsch: In den Kapillaren ist die Strömungsgeschwindigkeit am niedrigsten wegen des großen Gesamtquerschnitts.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 046 Ultraschall in der Medizin (leicht) ──
  {
    id: "ph-typk-new5-046",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zum medizinischen Ultraschall sind richtig?\n\n1. Medizinischer Ultraschall nutzt Frequenzen oberhalb von 20 kHz.\n2. Ultraschall wird an Gewebegrenzen reflektiert.\n3. Je größer der Impedanzunterschied, desto stärker die Reflexion.\n4. Ultraschall erzeugt ionisierende Strahlung.\n5. Der Doppler-Effekt ermöglicht die Messung von Blutflussgeschwindigkeiten.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Ultraschall ist mechanische Wellenenergie und erzeugt keine ionisierende Strahlung.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 047 Oberflächenspannung (mittel) ──
  {
    id: "ph-typk-new5-047",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur Oberflächenspannung sind richtig?\n\n1. Die Oberflächenspannung entsteht durch Kohäsionskräfte an der Flüssigkeitsoberfläche.\n2. Tenside verringern die Oberflächenspannung.\n3. Surfactant in den Lungenbläschen verringert die Oberflächenspannung.\n4. Die Einheit der Oberflächenspannung ist N/m.\n5. Die Oberflächenspannung steigt mit der Temperatur.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Oberflächenspannung sinkt mit steigender Temperatur, da die Kohäsionskräfte durch die stärkere Teilchenbewegung geschwächt werden.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 048 Viskosität (mittel) ──
  {
    id: "ph-typk-new5-048",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur Viskosität sind richtig?\n\n1. Viskosität ist ein Maß für die Zähflüssigkeit einer Flüssigkeit.\n2. Die dynamische Viskosität hat die Einheit Pa·s.\n3. Die Viskosität von Wasser steigt mit der Temperatur.\n4. Blut ist eine nicht-newtonsche Flüssigkeit.\n5. Eine hohe Viskosität bedeutet einen größeren Strömungswiderstand.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Die Viskosität von Wasser sinkt mit steigender Temperatur (die Moleküle bewegen sich schneller und überwinden die intermolekularen Kräfte leichter).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 049 Kapillarkräfte (leicht) ──
  {
    id: "ph-typk-new5-049",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zu Kapillarkräften sind richtig?\n\n1. Kapillarkräfte entstehen durch das Zusammenspiel von Kohäsion und Adhäsion.\n2. In dünnen Röhren steigt Wasser höher als in dicken.\n3. Bei Quecksilber ist der Meniskus konvex (Kapillardepression).\n4. Die Steighöhe ist umgekehrt proportional zum Röhrenradius.\n5. Kapillarkräfte spielen beim Wassertransport in Pflanzen eine Rolle.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Nur 1, 4 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 korrekt. Kapillarkräfte beruhen auf dem Verhältnis von Adhäsion (Wand) zu Kohäsion (Flüssigkeit) und treiben den Wassertransport in Pflanzen mit an.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 050 Elektrophorese (schwer) ──
  {
    id: "ph-typk-new5-050",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zur Elektrophorese sind richtig?\n\n1. Geladene Teilchen wandern im elektrischen Feld.\n2. Die Wanderungsgeschwindigkeit hängt von der Ladung des Teilchens ab.\n3. Die Wanderungsgeschwindigkeit hängt von der Größe des Teilchens ab.\n4. Die SDS-PAGE trennt Proteine nach ihrem isoelektrischen Punkt.\n5. Die Gelelektrophorese wird zur DNA-Trennung eingesetzt.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: SDS-PAGE trennt Proteine primär nach Molekülmasse, nicht nach isoelektrischem Punkt (dafür dient die isoelektrische Fokussierung).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },

  // ══════════════════════════════════════════════════
  //  STRAHLENPHYSIK (051–062)
  // ══════════════════════════════════════════════════

  // ── 051 Röntgenstrahlung (leicht) ──
  {
    id: "ph-typk-new5-051",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Röntgenstrahlung sind richtig?\n\n1. Röntgenstrahlung ist elektromagnetische Strahlung.\n2. Sie entsteht beim Abbremsen schneller Elektronen an einem Target.\n3. Röntgenstrahlung hat kürzere Wellenlängen als sichtbares Licht.\n4. Sie kann Materie durchdringen.\n5. Röntgenstrahlung hat eine längere Wellenlänge als Gammastrahlung.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Nur 1, 3 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 korrekt. Röntgenstrahlung hat typisch Wellenlängen von 0,01–10 nm, kürzer als sichtbares Licht (400–700 nm) und im Mittel länger als Gammastrahlung.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 052 Gammastrahlung (mittel) ──
  {
    id: "ph-typk-new5-052",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Gammastrahlung sind richtig?\n\n1. Gammastrahlung entsteht bei Kernzerfällen.\n2. Sie hat die höchste Energie im elektromagnetischen Spektrum.\n3. Gammastrahlung besteht aus Heliumkernen.\n4. Blei ist ein geeignetes Abschirmmaterial.\n5. Gammastrahlung hat keine Ruhemasse.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Heliumkerne sind Alpha-Teilchen, nicht Gammastrahlung. Gammastrahlung sind hochenergetische Photonen.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 053 Alphastrahlung (leicht) ──
  {
    id: "ph-typk-new5-053",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Alphastrahlung sind richtig?\n\n1. Alphateilchen bestehen aus 2 Protonen und 2 Neutronen.\n2. Alphastrahlung hat eine geringe Reichweite in Luft (wenige cm).\n3. Ein Blatt Papier reicht zur Abschirmung.\n4. Alphastrahlung ist doppelt positiv geladen.\n5. Bei Alpha-Zerfall verringert sich die Massenzahl um 2.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Bei Alpha-Zerfall verringert sich die Massenzahl um 4 (nicht 2), da ein He-4-Kern abgestrahlt wird.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 054 Betastrahlung (mittel) ──
  {
    id: "ph-typk-new5-054",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Betastrahlung sind richtig?\n\n1. Bei β⁻-Zerfall wird ein Neutron in ein Proton umgewandelt.\n2. Dabei wird ein Elektron emittiert.\n3. Betastrahlung hat ein kontinuierliches Energiespektrum.\n4. Die Reichweite von Betastrahlung in Luft beträgt einige Meter.\n5. Bei β⁻-Zerfall bleibt die Massenzahl unverändert.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Nur 1, 3 und 4" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 korrekt. Betastrahlung hat ein kontinuierliches Spektrum wegen des emittierten Antineutrinos, und die Massenzahl bleibt erhalten (nur die Ordnungszahl ändert sich).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 055 Halbwertszeit (leicht) ──
  {
    id: "ph-typk-new5-055",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Halbwertszeit sind richtig?\n\n1. Die Halbwertszeit ist die Zeit, in der die Hälfte der Atomkerne zerfallen ist.\n2. Sie ist charakteristisch für jedes Isotop.\n3. Die Halbwertszeit kann durch äußere Bedingungen (Druck, Temperatur) verändert werden.\n4. Nach zwei Halbwertszeiten ist noch ein Viertel der ursprünglichen Kerne vorhanden.\n5. Radioaktiver Zerfall folgt einem Exponentialgesetz.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Die Halbwertszeit ist eine Kernkonstante und kann durch äußere physikalische Bedingungen wie Temperatur oder Druck nicht beeinflusst werden.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 056 Dosimetrie (mittel) ──
  {
    id: "ph-typk-new5-056",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Strahlendosimetrie sind richtig?\n\n1. Die Energiedosis wird in Gray (Gy) gemessen.\n2. 1 Gy = 1 J/kg.\n3. Die Äquivalentdosis wird in Sievert (Sv) gemessen.\n4. Die Äquivalentdosis berücksichtigt die biologische Wirksamkeit.\n5. Alphastrahlung hat den gleichen Strahlungswichtungsfaktor wie Betastrahlung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Alphastrahlung hat einen Strahlungswichtungsfaktor von 20, Betastrahlung nur 1.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 057 Abschirmung (mittel) ──
  {
    id: "ph-typk-new5-057",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Abschirmung ionisierender Strahlung sind richtig?\n\n1. Alphastrahlung wird durch ein Blatt Papier abgeschirmt.\n2. Betastrahlung wird durch wenige mm Aluminium abgeschirmt.\n3. Gammastrahlung erfordert dicke Blei- oder Betonschichten.\n4. Die Abschirmwirkung steigt mit der Ordnungszahl des Materials (bei γ).\n5. Neutronenstrahlung wird am besten durch Wasser oder Paraffin abgeschirmt.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Nur 1, 3 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 korrekt. Wasserstoffreiche Materialien (Wasser, Paraffin) bremsen Neutronen effektiv ab, da die Neutronenmasse nahe der Protonenmasse liegt.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 058 Strahlenbiologie (schwer) ──
  {
    id: "ph-typk-new5-058",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur biologischen Strahlenwirkung sind richtig?\n\n1. Ionisierende Strahlung kann DNA-Schäden verursachen.\n2. Direkte Strahlenwirkung trifft das Zielmolekül selbst.\n3. Indirekte Strahlenwirkung wirkt über Radikale (z. B. OH·).\n4. Sich schnell teilende Zellen sind strahlenempfindlicher.\n5. Nervenzellen sind besonders strahlenempfindlich.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Nervenzellen teilen sich kaum und sind daher relativ strahlenresistent. Strahlenempfindlich sind v. a. Stammzellen, Lymphozyten und Keimzellen.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 059 CT und Röntgen (mittel) ──
  {
    id: "ph-typk-new5-059",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Computertomographie (CT) sind richtig?\n\n1. CT nutzt Röntgenstrahlung zur Bilderzeugung.\n2. Durch Rotation der Röntgenröhre werden Schnittbilder berechnet.\n3. Die Hounsfield-Einheit beschreibt die Dichte des Gewebes.\n4. Knochen erscheinen im CT dunkel.\n5. CT liefert eine höhere Strahlenbelastung als ein einzelnes Röntgenbild.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Knochen erscheinen im CT hell (hoher Hounsfield-Wert), da sie die Röntgenstrahlung stark absorbieren.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 060 Strahlentherapie (schwer) ──
  {
    id: "ph-typk-new5-060",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Strahlentherapie sind richtig?\n\n1. Ionisierende Strahlung wird gezielt zur Tumorzerstörung eingesetzt.\n2. Die Fraktionierung verteilt die Gesamtdosis auf mehrere Sitzungen.\n3. Fraktionierung schont gesundes Gewebe, da es sich besser erholt.\n4. Protonen haben einen schärferen Bragg-Peak als Photonen.\n5. Die Strahlentherapie heilt Tumorzellen, statt sie zu zerstören.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Strahlentherapie zerstört Tumorzellen durch DNA-Schäden und Apoptose, sie heilt sie nicht.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 061 Radioaktive Zerfallsreihe (schwer) ──
  {
    id: "ph-typk-new5-061",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zu radioaktiven Zerfallsreihen sind richtig?\n\n1. Uran-238 zerfällt über eine Reihe von Zwischenprodukten zu Blei-206.\n2. In einer Zerfallsreihe wechseln sich α- und β-Zerfälle ab.\n3. Radon ist ein gasförmiges Zwischenprodukt der Uran-Reihe.\n4. Das radioaktive Gleichgewicht wird erreicht, wenn die Aktivitäten aller Glieder gleich sind.\n5. Es gibt insgesamt drei natürliche Zerfallsreihen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Es gibt vier natürliche Zerfallsreihen (Uran-238, Uran-235, Thorium-232 und die ausgestorbene Neptunium-237-Reihe).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 062 Geigerzähler (leicht) ──
  {
    id: "ph-typk-new5-062",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Geiger-Müller-Zählrohr sind richtig?\n\n1. Es detektiert ionisierende Strahlung.\n2. Die Strahlung ionisiert Gas im Zählrohr und erzeugt einen Stromimpuls.\n3. Es kann die Energie der Strahlung genau messen.\n4. Es eignet sich zum Nachweis von Alpha-, Beta- und Gammastrahlung.\n5. Die Totzeit begrenzt die maximal messbare Zählrate.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Das Geiger-Müller-Zählrohr kann nur Strahlungsereignisse zählen, aber nicht deren Energie messen (dafür benötigt man z. B. Szintillationsdetektoren).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },

  // ══════════════════════════════════════════════════
  //  ASTRONOMIE / ASTROPHYSIK (063–075)
  // ══════════════════════════════════════════════════

  // ── 063 Kepler-Gesetze (leicht) ──
  {
    id: "ph-typk-new5-063",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zu den Kepler'schen Gesetzen sind richtig?\n\n1. Planeten bewegen sich auf Ellipsen mit der Sonne in einem Brennpunkt.\n2. Die Verbindungslinie Sonne–Planet überstreicht in gleichen Zeiten gleiche Flächen.\n3. Die Quadrate der Umlaufzeiten verhalten sich wie die Kuben der großen Halbachsen.\n4. Die Kepler-Gesetze gelten nur im Sonnensystem.\n5. Kepler formulierte seine Gesetze im 17. Jahrhundert.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Die Kepler-Gesetze gelten universell für alle gravitativ gebundenen Systeme (z. B. Exoplaneten, Doppelsterne).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 064 Gravitationsgesetz (leicht) ──
  {
    id: "ph-typk-new5-064",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zum Newton'schen Gravitationsgesetz sind richtig?\n\n1. Die Gravitationskraft ist proportional zum Produkt der Massen.\n2. Die Gravitationskraft nimmt mit dem Quadrat des Abstands ab.\n3. Die Gravitationskonstante G hat den Wert 6,67 × 10⁻¹¹ N·m²/kg².\n4. Die Gravitationskraft wirkt nur anziehend.\n5. Die Gravitationskraft hängt von der elektrischen Ladung der Körper ab.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Gravitationskraft hängt nur von den Massen ab, nicht von der Ladung. Ladungsabhängig ist die Coulomb-Kraft.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 065 Sonnensystem (leicht) ──
  {
    id: "ph-typk-new5-065",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zum Sonnensystem sind richtig?\n\n1. Jupiter ist der massereichste Planet im Sonnensystem.\n2. Die Erde ist der dritte Planet von der Sonne.\n3. Alle Planeten umkreisen die Sonne in der gleichen Richtung.\n4. Mars hat eine dichtere Atmosphäre als die Erde.\n5. Die Sonne enthält über 99 % der Masse des Sonnensystems.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Die Marsatmosphäre ist extrem dünn (ca. 1 % des Erddrucks).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 066 Sterne und Hertzsprung-Russell-Diagramm (mittel) ──
  {
    id: "ph-typk-new5-066",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Hertzsprung-Russell-Diagramm sind richtig?\n\n1. Es stellt die Leuchtkraft von Sternen gegen ihre Oberflächentemperatur dar.\n2. Die Hauptreihe enthält die meisten Sterne.\n3. Rote Riesen befinden sich oberhalb der Hauptreihe.\n4. Weiße Zwerge befinden sich unterhalb der Hauptreihe.\n5. Blaue Sterne sind kühler als rote Sterne.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Blaue Sterne sind heißer als rote Sterne (blaue: >10.000 K, rote: <3.500 K).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 067 Kernfusion in Sternen (mittel) ──
  {
    id: "ph-typk-new5-067",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Kernfusion in Sternen sind richtig?\n\n1. In der Sonne verschmelzen Wasserstoffkerne zu Helium.\n2. Die Energiequelle der Sonne ist die Proton-Proton-Kette.\n3. Für die Kernfusion sind extrem hohe Temperaturen nötig.\n4. Bei der Fusion wird Masse in Energie umgewandelt (E = mc²).\n5. Schwerere Sterne können bis zu Uran fusionieren.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Kernfusion in Sternen endet bei Eisen (Fe-56), da schwerere Elemente Energie verbrauchen statt freisetzen.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 068 Schwarze Löcher (schwer) ──
  {
    id: "ph-typk-new5-068",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zu Schwarzen Löchern sind richtig?\n\n1. Ab dem Ereignishorizont kann nichts, auch kein Licht, entkommen.\n2. Die Fluchtgeschwindigkeit am Ereignishorizont entspricht der Lichtgeschwindigkeit.\n3. Schwarze Löcher entstehen beim Kollaps massereicher Sterne.\n4. Der Schwarzschild-Radius beschreibt die Größe des Ereignishorizonts.\n5. Schwarze Löcher haben unendliche Ausdehnung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Schwarze Löcher haben eine endliche Größe (Schwarzschild-Radius) — die Singularität im Zentrum hat zwar theoretisch keine Ausdehnung, das Schwarze Loch selbst aber schon.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 069 Lichtjahr und Parsec (leicht) ──
  {
    id: "ph-typk-new5-069",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zu astronomischen Entfernungseinheiten sind richtig?\n\n1. Ein Lichtjahr ist die Strecke, die Licht in einem Jahr zurücklegt.\n2. 1 Lichtjahr ≈ 9,46 × 10¹² km.\n3. Ein Parsec ist größer als ein Lichtjahr.\n4. Die astronomische Einheit (AE) ist der mittlere Abstand Erde–Sonne.\n5. Ein Lichtjahr ist eine Zeiteinheit.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt (1 pc ≈ 3,26 Lj). 5 falsch: Ein Lichtjahr ist eine Entfernungseinheit, keine Zeiteinheit.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 070 Doppler-Effekt in Astronomie (mittel) ──
  {
    id: "ph-typk-new5-070",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zum Doppler-Effekt in der Astronomie sind richtig?\n\n1. Sich entfernende Galaxien zeigen eine Rotverschiebung.\n2. Sich nähernde Sterne zeigen eine Blauverschiebung.\n3. Die Rotverschiebung belegt die Expansion des Universums.\n4. Der Doppler-Effekt ermöglicht die Messung von Radialgeschwindigkeiten.\n5. Die kosmologische Rotverschiebung ist identisch mit dem klassischen Doppler-Effekt.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die kosmologische Rotverschiebung entsteht durch die Expansion des Raumes selbst, nicht durch eine Relativbewegung im Raum (klassischer Doppler).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 071 Hubble-Gesetz (mittel) ──
  {
    id: "ph-typk-new5-071",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Hubble-Gesetz sind richtig?\n\n1. Die Fluchtgeschwindigkeit einer Galaxie ist proportional zu ihrer Entfernung.\n2. Die Hubble-Konstante H₀ hat die Einheit km/s/Mpc.\n3. Aus dem Hubble-Gesetz lässt sich das Alter des Universums abschätzen.\n4. Das Hubble-Gesetz zeigt, dass sich das Universum ausdehnt.\n5. Nahegelegene Galaxien bewegen sich immer von uns weg.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Nahegelegene Galaxien können sich auch auf uns zubewegen (z. B. Andromeda-Galaxie), da lokale Gravitationskräfte die kosmische Expansion überwiegen können.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 072 Urknall (mittel) ──
  {
    id: "ph-typk-new5-072",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Urknall sind richtig?\n\n1. Das Universum entstand vor ca. 13,8 Milliarden Jahren.\n2. Die kosmische Hintergrundstrahlung ist ein Überrest des Urknalls.\n3. Die Hintergrundstrahlung hat eine Temperatur von ca. 2,7 K.\n4. Wasserstoff und Helium entstanden in den ersten Minuten nach dem Urknall.\n5. Der Urknall fand an einem bestimmten Punkt im Raum statt.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Der Urknall fand nicht an einem bestimmten Punkt statt — der gesamte Raum dehnte sich aus. Es gibt keinen Mittelpunkt der Expansion.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 073 Neutronensterne (schwer) ──
  {
    id: "ph-typk-new5-073",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zu Neutronensternen sind richtig?\n\n1. Neutronensterne entstehen bei Supernova-Explosionen.\n2. Sie bestehen überwiegend aus Neutronen.\n3. Ihre Dichte ist vergleichbar mit der eines Atomkerns.\n4. Pulsare sind rotierende Neutronensterne mit gebündelter Strahlung.\n5. Neutronensterne haben einen Durchmesser von ca. 10.000 km.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Neutronensterne haben einen Durchmesser von nur ca. 20 km, nicht 10.000 km (das entspricht eher dem Erddurchmesser).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 074 Dunkle Materie (schwer) ──
  {
    id: "ph-typk-new5-074",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Dunklen Materie sind richtig?\n\n1. Dunkle Materie ist nicht direkt beobachtbar, da sie kein Licht emittiert.\n2. Ihre Existenz wird aus der Rotationsgeschwindigkeit von Galaxien abgeleitet.\n3. Dunkle Materie macht ca. 27 % des Universums aus.\n4. Sie wechselwirkt gravitativ mit normaler Materie.\n5. Dunkle Materie besteht aus Neutrinos.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Natur der Dunklen Materie ist unbekannt. Neutrinos tragen nur einen kleinen Teil bei; Hauptkandidaten sind WIMPs oder Axionen.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 075 Kosmische Strahlung (schwer) ──
  {
    id: "ph-typk-new5-075",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur kosmischen Strahlung sind richtig?\n\n1. Kosmische Strahlung besteht hauptsächlich aus hochenergetischen Protonen.\n2. Sie stammt aus Quellen wie Supernovae und aktiven Galaxienkernen.\n3. Die Erdatmosphäre schirmt einen Großteil der kosmischen Strahlung ab.\n4. In großen Höhen und bei Flugreisen ist die Belastung höher.\n5. Kosmische Strahlung bewegt sich langsamer als Licht.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Einige kosmische Teilchen haben so extrem hohe Energien, dass sie sich mit nahezu Lichtgeschwindigkeit bewegen — langsamer als c, aber der Unterschied ist vernachlässigbar gering. Die Aussage 'langsamer als Licht' suggeriert deutlich langsamer, was für die hochenergetischen Teilchen nicht zutrifft.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
];
