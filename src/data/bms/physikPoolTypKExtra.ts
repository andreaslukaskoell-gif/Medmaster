/**
 * Physik Typ K Extra — 20 Kombinationsaufgaben (IDs ph-pool-typk-001 bis -020).
 * Korrekte Option variiert über A–E. Schwierigkeit 1–3 (8×1, 8×2, 4×3).
 */
import type { BMSFrage } from "@/lib/supabaseBMSFragen";

export const physikPoolTypKExtra: BMSFrage[] = [
  {
    id: "ph-pool-typk-001",
    typ: "K",
    fach: "physik",
    uk_id: "ph-1-01",
    stamm: "Welche der folgenden Aussagen zu den Newtonschen Gesetzen sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Das Trägheitsgesetz besagt, dass ein kräftefreier Körper in Ruhe bleibt oder sich geradlinig gleichförmig bewegt.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Die Beschleunigung eines Körpers ist proportional zur einwirkenden Kraft und umgekehrt proportional zu seiner Masse (F = m · a).",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Actio und Reactio wirken auf denselben Körper und heben sich daher stets auf.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Die Gewichtskraft eines Körpers auf der Erde beträgt F_G = m · g mit g ≈ 9,81 m/s².",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Reibungskräfte wirken immer entgegen der Bewegungsrichtung und sind von der Geschwindigkeit unabhängig (Gleitreibung).",
        korrekt: false,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 3, 4] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2 und 4. Actio und Reactio wirken auf verschiedene Körper (3 falsch). Die Aussage 5 ist vereinfacht falsch: Gleitreibung hängt von der Normalkraft ab, nicht nur von der Richtung, und es gibt auch geschwindigkeitsabhängige Reibung (Strömungswiderstand).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "ph-pool-typk-002",
    typ: "K",
    fach: "physik",
    uk_id: "ph-1-01",
    stamm: "Welche der folgenden Aussagen zur gleichmäßig beschleunigten Bewegung sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Die Geschwindigkeit nimmt linear mit der Zeit zu: v(t) = v₀ + a · t.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Der zurückgelegte Weg wächst quadratisch mit der Zeit: s(t) = v₀ · t + ½ · a · t².",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Beim freien Fall im Vakuum fallen schwere Körper schneller als leichte.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Der schiefe Wurf ist eine Überlagerung von gleichförmiger Horizontal- und beschleunigter Vertikalbewegung.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Die Beschleunigung beim freien Fall hängt von der Masse des Körpers ab.",
        korrekt: false,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 3, 4] },
      { key: "B", nummern: [1, 2, 4] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "B",
    erklaerung:
      "Richtig sind 1, 2 und 4. Im Vakuum fallen alle Körper gleich schnell (3 falsch). Die Fallbeschleunigung g ist massenunabhängig (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "ph-pool-typk-003",
    typ: "K",
    fach: "physik",
    uk_id: "ph-1-01",
    stamm: "Welche der folgenden Aussagen zu Arbeit, Energie und Leistung sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Kinetische Energie berechnet sich als E_kin = ½ · m · v².",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Die potenzielle Energie im Schwerefeld beträgt E_pot = m · g · h.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Die Leistung ist definiert als P = W / t (Arbeit pro Zeit).",
        korrekt: true,
      },
      {
        nr: 4,
        text: "In einem geschlossenen System ist die mechanische Gesamtenergie bei Reibung konstant.",
        korrekt: false,
      },
      {
        nr: 5,
        text: "Arbeit wird nur verrichtet, wenn die Kraft eine Komponente in Wegrichtung hat.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [1, 2, 3, 5] },
      { key: "D", nummern: [2, 4, 5] },
      { key: "E", nummern: [1, 2, 4, 5] },
    ],
    korrekte_option: "C",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. Bei Reibung wird mechanische Energie in Wärme umgewandelt — die mechanische Energie ist nicht erhalten (4 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "ph-pool-typk-004",
    typ: "K",
    fach: "physik",
    uk_id: "ph-2-01",
    stamm: "Welche der folgenden Aussagen zur Thermodynamik und Wärmelehre sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Wärme fließt spontan immer vom Körper höherer Temperatur zum Körper niedrigerer Temperatur.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Die spezifische Wärmekapazität c gibt an, wie viel Energie nötig ist, um 1 kg eines Stoffes um 1 K zu erwärmen.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Bei einem adiabatischen Prozess findet kein Wärmeaustausch mit der Umgebung statt.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Der Wirkungsgrad einer idealen Carnot-Maschine hängt nur von den Temperaturen der Wärmereservoire ab.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Die Entropie eines geschlossenen Systems kann bei irreversiblen Prozessen abnehmen.",
        korrekt: false,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 3, 4, 5] },
      { key: "D", nummern: [1, 2, 4] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 3 und 4. Bei irreversiblen Prozessen nimmt die Entropie eines geschlossenen Systems stets zu (2. Hauptsatz der Thermodynamik) (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "ph-pool-typk-005",
    typ: "K",
    fach: "physik",
    uk_id: "ph-2-01",
    stamm: "Welche der folgenden Aussagen zum idealen Gas und den Gasgesetzen sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Bei konstantem Druck ist das Volumen eines idealen Gases proportional zur absoluten Temperatur (Gesetz von Gay-Lussac).",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Die allgemeine Gasgleichung lautet p · V = n · R · T.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Die mittlere kinetische Energie der Gasteilchen ist proportional zur Celsius-Temperatur.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Bei isothermer Kompression bleibt die Temperatur konstant und der Druck steigt (Boyle-Mariotte).",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Reale Gase verhalten sich bei hohen Temperaturen und niedrigen Drücken annähernd ideal.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 3, 4] },
      { key: "B", nummern: [1, 2, 4, 5] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [1, 2, 3, 4, 5] },
      { key: "E", nummern: [2, 4, 5] },
    ],
    korrekte_option: "B",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Die mittlere kinetische Energie ist proportional zur absoluten Temperatur in Kelvin, nicht zur Celsius-Temperatur (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "ph-pool-typk-006",
    typ: "K",
    fach: "physik",
    uk_id: "ph-2-01",
    stamm:
      "Welche der folgenden Aussagen zu Wärmeübertragung und Phasenübergängen sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Bei einem Phasenübergang (z. B. Schmelzen) bleibt die Temperatur trotz Wärmezufuhr konstant.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Wärmeleitung erfolgt durch Teilchenbewegung und ist in Metallen besonders effektiv.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Konvektion ist Wärmetransport durch Strömung und kann nur in Flüssigkeiten auftreten.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Wärmestrahlung (Infrarotstrahlung) benötigt kein Medium und kann auch im Vakuum übertragen werden.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Die Verdampfungswärme von Wasser beträgt ca. 2260 kJ/kg bei 100 °C.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [2, 3, 4] },
      { key: "C", nummern: [1, 3, 4, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "D",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Konvektion tritt sowohl in Flüssigkeiten als auch in Gasen auf (z. B. Warmluft steigt auf) (3 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "ph-pool-typk-007",
    typ: "K",
    fach: "physik",
    uk_id: "ph-3-01",
    stamm:
      "Welche der folgenden Aussagen zur Fluidmechanik (Hydrostatik und Hydrodynamik) sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Der hydrostatische Druck nimmt mit der Tiefe linear zu: p = ρ · g · h.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Das Archimedische Prinzip besagt: Die Auftriebskraft entspricht der Gewichtskraft der verdrängten Flüssigkeit.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Die Bernoulli-Gleichung gilt für reibungsfreie, inkompressible Strömungen und verknüpft Druck, Geschwindigkeit und Höhe.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "In einer Rohrverengung (Kontinuitätsgleichung) nimmt die Strömungsgeschwindigkeit ab.",
        korrekt: false,
      },
      {
        nr: 5,
        text: "Laminare Strömung herrscht bei niedrigen Reynolds-Zahlen; turbulente bei hohen.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 2, 3, 4] },
      { key: "C", nummern: [2, 3, 4, 5] },
      { key: "D", nummern: [1, 3, 4] },
      { key: "E", nummern: [1, 2, 3, 5] },
    ],
    korrekte_option: "E",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. Bei einer Rohrverengung nimmt die Geschwindigkeit nach der Kontinuitätsgleichung (A₁v₁ = A₂v₂) zu, nicht ab (4 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "ph-pool-typk-008",
    typ: "K",
    fach: "physik",
    uk_id: "ph-3-01",
    stamm: "Welche der folgenden Aussagen zu Oberflächenspannung und Kapillarität sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Oberflächenspannung entsteht durch die Kohäsionskräfte der Flüssigkeitsmoleküle an der Oberfläche.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "In einem engen Kapillarrohr steigt Wasser aufgrund der Adhäsion zwischen Wasser und Glas auf.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Quecksilber bildet in einer Glaskapillare einen konkaven Meniskus.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Die Steighöhe in einer Kapillare ist umgekehrt proportional zum Radius der Kapillare.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Tenside (Detergenzien) erhöhen die Oberflächenspannung von Wasser.",
        korrekt: false,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 3, 4] },
      { key: "D", nummern: [1, 2, 3, 4] },
      { key: "E", nummern: [1, 2, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2 und 4. Quecksilber bildet einen konvexen Meniskus in Glas (Kohäsion > Adhäsion) (3 falsch). Tenside setzen die Oberflächenspannung herab, sie erhöhen sie nicht (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "ph-pool-typk-009",
    typ: "K",
    fach: "physik",
    uk_id: "ph-4-01",
    stamm: "Welche der folgenden Aussagen zu Schwingungen und Wellen sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Bei einer harmonischen Schwingung ist die Rückstellkraft proportional zur Auslenkung (Hookesches Gesetz).",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Die Frequenz eines Fadenpendels hängt von der Masse des Pendelkörpers ab.",
        korrekt: false,
      },
      {
        nr: 3,
        text: "Bei einer Transversalwelle schwingen die Teilchen senkrecht zur Ausbreitungsrichtung.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Schallwellen in Luft sind Longitudinalwellen.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Die Wellenlänge λ, Frequenz f und Ausbreitungsgeschwindigkeit c hängen zusammen: c = λ · f.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [2, 3, 4] },
      { key: "C", nummern: [1, 3, 4, 5] },
      { key: "D", nummern: [1, 2, 4] },
      { key: "E", nummern: [1, 3, 5] },
    ],
    korrekte_option: "C",
    erklaerung:
      "Richtig sind 1, 3, 4 und 5. Die Frequenz eines Fadenpendels hängt nur von der Fadenlänge und der Erdbeschleunigung ab, nicht von der Masse (2 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "ph-pool-typk-010",
    typ: "K",
    fach: "physik",
    uk_id: "ph-4-01",
    stamm: "Welche der folgenden Aussagen zur Akustik und zum Schall sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Die Schallgeschwindigkeit in Luft beträgt bei 20 °C etwa 343 m/s.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Die Lautstärke wird in Dezibel (dB) gemessen und die Skala ist logarithmisch.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Der Doppler-Effekt beschreibt die Frequenzänderung bei relativer Bewegung zwischen Quelle und Beobachter.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Ultraschall hat eine Frequenz unterhalb von 20 Hz.",
        korrekt: false,
      },
      {
        nr: 5,
        text: "Eine Verdopplung der Schallintensität entspricht einer Erhöhung um ca. 3 dB.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 2, 3, 5] },
      { key: "C", nummern: [2, 3, 4] },
      { key: "D", nummern: [1, 3, 4, 5] },
      { key: "E", nummern: [3, 4, 5] },
    ],
    korrekte_option: "B",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. Ultraschall liegt oberhalb von 20 kHz (nicht unterhalb von 20 Hz — das wäre Infraschall) (4 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "ph-pool-typk-011",
    typ: "K",
    fach: "physik",
    uk_id: "ph-5-01",
    stamm: "Welche der folgenden Aussagen zur geometrischen Optik sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Das Brechungsgesetz (Snellius) lautet n₁ · sin(α₁) = n₂ · sin(α₂).",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Totalreflexion tritt auf, wenn Licht vom optisch dünneren ins optisch dichtere Medium übergeht.",
        korrekt: false,
      },
      {
        nr: 3,
        text: "Bei einer Sammellinse liegt der Brennpunkt auf der gegenüberliegenden Seite des einfallenden Lichts.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Die Linsengleichung lautet 1/f = 1/g + 1/b (mit Gegenstandsweite g und Bildweite b).",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Ein Hohlspiegel erzeugt immer ein reelles, verkleinertes Bild.",
        korrekt: false,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [1, 3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "B",
    erklaerung:
      "Richtig sind 1, 3 und 4. Totalreflexion tritt beim Übergang vom optisch dichteren ins optisch dünnere Medium auf (2 falsch). Ein Hohlspiegel erzeugt je nach Objektposition reelle/virtuelle und vergrößerte/verkleinerte Bilder (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "ph-pool-typk-012",
    typ: "K",
    fach: "physik",
    uk_id: "ph-5-01",
    stamm:
      "Welche der folgenden Aussagen zur Wellenoptik (Interferenz, Beugung, Polarisation) sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Bei der Beugung am Einzelspalt entsteht ein zentrales Maximum, dessen Breite umgekehrt proportional zur Spaltbreite ist.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Konstruktive Interferenz tritt auf, wenn der Gangunterschied ein ganzzahliges Vielfaches der Wellenlänge beträgt.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Polarisiertes Licht schwingt nur in einer Ebene; durch einen Polarisationsfilter wird die Intensität halbiert (unpolarisiertes Licht).",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Beim Doppelspaltversuch (Young) entstehen äquidistante Interferenzstreifen.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Beugung tritt nur bei Schallwellen auf, nicht bei Lichtwellen.",
        korrekt: false,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 3 und 4. Beugung ist ein allgemeines Wellenphänomen und tritt bei Licht, Schall und allen Wellen auf (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "ph-pool-typk-013",
    typ: "K",
    fach: "physik",
    uk_id: "ph-6-01",
    stamm:
      "Welche der folgenden Aussagen zur Elektrostatik und zum elektrischen Feld sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Das Coulombsche Gesetz beschreibt die Kraft zwischen zwei Punktladungen: F ∝ q₁ · q₂ / r².",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Elektrische Feldlinien zeigen vom negativen zum positiven Pol.",
        korrekt: false,
      },
      {
        nr: 3,
        text: "Die elektrische Feldstärke E ist definiert als Kraft pro Ladung: E = F / q.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "In einem Plattenkondensator ist das Feld zwischen den Platten nahezu homogen.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Die Kapazität eines Plattenkondensators beträgt C = ε₀ · ε_r · A / d.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [2, 3, 4] },
      { key: "C", nummern: [1, 3, 4, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 3, 5] },
    ],
    korrekte_option: "C",
    erklaerung:
      "Richtig sind 1, 3, 4 und 5. Elektrische Feldlinien zeigen konventionell vom positiven zum negativen Pol (2 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "ph-pool-typk-014",
    typ: "K",
    fach: "physik",
    uk_id: "ph-6-01",
    stamm: "Welche der folgenden Aussagen zu Stromkreisen und Ohm'schem Gesetz sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Das Ohm'sche Gesetz lautet U = R · I (Spannung = Widerstand × Stromstärke).",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Bei einer Reihenschaltung von Widerständen addieren sich die Gesamtwiderstände: R_ges = R₁ + R₂ + … .",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Bei einer Parallelschaltung ist die Gesamtspannung gleich der Summe der Teilspannungen.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Die elektrische Leistung berechnet sich als P = U · I.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "In einem Parallelkreis teilt sich der Strom auf die einzelnen Zweige auf.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 3, 4] },
      { key: "B", nummern: [1, 2, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "D",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Bei einer Parallelschaltung liegt an allen Zweigen die gleiche Spannung an — die Teilspannungen addieren sich bei Reihenschaltung (3 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "ph-pool-typk-015",
    typ: "K",
    fach: "physik",
    uk_id: "ph-6-01",
    stamm: "Welche der folgenden Aussagen zum Magnetismus und zur Lorentzkraft sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Bewegte Ladungsträger erzeugen ein Magnetfeld; die Richtung folgt der Rechte-Hand-Regel.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Die Lorentzkraft wirkt auf eine ruhende Ladung in einem Magnetfeld.",
        korrekt: false,
      },
      {
        nr: 3,
        text: "Die Lorentzkraft steht senkrecht zur Geschwindigkeit und zum Magnetfeld: F = q · v × B.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Ein stromdurchflossener Leiter im Magnetfeld erfährt eine Kraft (Prinzip des Elektromotors).",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Elektromagnetische Induktion besagt: Durch eine Flussänderung wird eine Spannung induziert (Faraday'sches Gesetz).",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [2, 4, 5] },
      { key: "C", nummern: [1, 3, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 3, 5] },
    ],
    korrekte_option: "C",
    erklaerung:
      "Richtig sind 1, 3, 4 und 5. Die Lorentzkraft wirkt nur auf bewegte Ladungen (v ≠ 0); auf ruhende Ladungen wirkt keine magnetische Kraft (2 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "ph-pool-typk-016",
    typ: "K",
    fach: "physik",
    uk_id: "ph-7-01",
    stamm: "Welche der folgenden Aussagen zur Atomphysik und zum Atommodell sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Im Bohrschen Atommodell bewegen sich Elektronen auf diskreten Bahnen mit quantisierten Energieniveaus.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Beim Übergang eines Elektrons von einem höheren auf ein niedrigeres Energieniveau wird ein Photon emittiert.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Die Energie eines Photons ist E = h · f (h = Planck-Konstante, f = Frequenz).",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Röntgenstrahlung hat eine längere Wellenlänge als sichtbares Licht.",
        korrekt: false,
      },
      {
        nr: 5,
        text: "Die Heisenbergsche Unschärferelation besagt, dass Ort und Impuls eines Teilchens nicht gleichzeitig beliebig genau bestimmbar sind.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 4, 5] },
      { key: "C", nummern: [2, 3, 4, 5] },
      { key: "D", nummern: [1, 2, 3, 5] },
      { key: "E", nummern: [1, 2, 4, 5] },
    ],
    korrekte_option: "D",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. Röntgenstrahlung hat eine kürzere Wellenlänge (ca. 0,01–10 nm) als sichtbares Licht (ca. 380–780 nm) (4 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "ph-pool-typk-017",
    typ: "K",
    fach: "physik",
    uk_id: "ph-7-01",
    stamm: "Welche der folgenden Aussagen zur Radioaktivität und zum Kernzerfall sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Beim α-Zerfall emittiert der Kern ein Helium-4-Teilchen (²He²⁺); die Ordnungszahl sinkt um 2.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Beim β⁻-Zerfall wandelt sich ein Neutron in ein Proton um; ein Elektron und ein Antineutrino werden emittiert.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "γ-Strahlung besteht aus Heliumkernen und hat die höchste Reichweite.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Die Halbwertszeit ist die Zeit, nach der die Hälfte der ursprünglichen radioaktiven Atome zerfallen ist.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Die Aktivität A (in Becquerel) gibt die Anzahl der Zerfälle pro Sekunde an.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 3, 4] },
      { key: "B", nummern: [1, 2, 4, 5] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [1, 2, 3, 4, 5] },
      { key: "E", nummern: [2, 4, 5] },
    ],
    korrekte_option: "B",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. γ-Strahlung besteht aus hochenergetischen Photonen (nicht Heliumkernen — das ist α-Strahlung). γ-Strahlung hat die höchste Durchdringungsfähigkeit, α-Strahlung die geringste Reichweite (3 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "ph-pool-typk-018",
    typ: "K",
    fach: "physik",
    uk_id: "ph-1-01",
    stamm: "Welche der folgenden Aussagen zu Drehbewegung und Drehmoment sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Das Drehmoment M = F · r · sin(α), wobei α der Winkel zwischen Kraft und Hebelarm ist.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Das Trägheitsmoment J ist das Rotationsanalogon zur Masse und hängt von der Massenverteilung ab.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Der Drehimpuls L = J · ω ist bei Abwesenheit äußerer Drehmomente erhalten (Drehimpulserhaltung).",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Ein Eiskunstläufer, der die Arme anzieht, rotiert langsamer, weil das Trägheitsmoment zunimmt.",
        korrekt: false,
      },
      {
        nr: 5,
        text: "Die Winkelgeschwindigkeit ω hat die Einheit rad/s und ist mit der Frequenz verknüpft: ω = 2π · f.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [1, 4, 5] },
      { key: "C", nummern: [2, 3, 4] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. Ein Eiskunstläufer rotiert beim Anziehen der Arme schneller, weil das Trägheitsmoment sinkt und der Drehimpuls erhalten bleibt (L = J · ω → ω steigt) (4 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  {
    id: "ph-pool-typk-019",
    typ: "K",
    fach: "physik",
    uk_id: "ph-5-01",
    stamm:
      "Welche der folgenden Aussagen zum elektromagnetischen Spektrum und zur Strahlung sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Das elektromagnetische Spektrum reicht von Radiowellen (große λ) bis zu Gammastrahlung (kleine λ).",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Alle elektromagnetischen Wellen breiten sich im Vakuum mit Lichtgeschwindigkeit c ≈ 3 · 10⁸ m/s aus.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "UV-Strahlung hat eine größere Wellenlänge als Infrarotstrahlung.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Nach dem Wien'schen Verschiebungsgesetz verschiebt sich das Emissionsmaximum mit steigender Temperatur zu kürzeren Wellenlängen.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Der Photoelektrische Effekt zeigt, dass Licht Teilcheneigenschaften besitzt (Photonen).",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 3, 4, 5] },
      { key: "B", nummern: [1, 2, 3, 4] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "D",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. UV-Strahlung hat eine kürzere Wellenlänge (10–400 nm) als Infrarot (780 nm – 1 mm) (3 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  {
    id: "ph-pool-typk-020",
    typ: "K",
    fach: "physik",
    uk_id: "ph-6-01",
    stamm:
      "Welche der folgenden Aussagen zu Wechselstrom und elektromagnetischen Schwingkreisen sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Wechselstrom wird durch Generatoren erzeugt, die auf dem Prinzip der elektromagnetischen Induktion beruhen.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Der Effektivwert einer sinusförmigen Wechselspannung beträgt U_eff = U₀ / √2.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Ein Transformator kann nur Gleichspannungen umwandeln.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Im LC-Schwingkreis oszilliert die Energie periodisch zwischen elektrischer (Kondensator) und magnetischer Energie (Spule).",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Der kapazitive Widerstand (Blindwiderstand eines Kondensators) nimmt mit steigender Frequenz zu.",
        korrekt: false,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3] },
      { key: "B", nummern: [1, 3, 4, 5] },
      { key: "C", nummern: [1, 2, 4] },
      { key: "D", nummern: [2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "C",
    erklaerung:
      "Richtig sind 1, 2 und 4. Ein Transformator funktioniert nur mit Wechselspannung (3 falsch). Der kapazitive Blindwiderstand X_C = 1/(2π·f·C) nimmt mit steigender Frequenz ab, nicht zu (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
];
