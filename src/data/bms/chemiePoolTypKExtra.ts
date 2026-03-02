/**
 * Chemie Typ K Extra — 20 Kombinationsaufgaben (IDs ch-pool-typk-011 bis -030).
 * Korrekte Option variiert über A–E. Schwierigkeit 1–3.
 */
import type { BMSFrage } from "@/lib/supabaseBMSFragen";

export const chemiePoolTypKExtra: BMSFrage[] = [
  {
    id: "ch-pool-typk-011",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-02",
    stamm:
      "Welche der folgenden Aussagen zur Elektronenkonfiguration und zu chemischen Bindungen sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Das Pauli-Prinzip besagt, dass kein Orbital mehr als zwei Elektronen mit antiparallelem Spin aufnehmen kann.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Die Hund-Regel besagt: Orbitale gleicher Energie werden zunächst einfach besetzt.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Eine kovalente Bindung entsteht durch vollständige Elektronenübertragung von einem Atom zum anderen.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Ionenbindungen entstehen zwischen Atomen mit großem Elektronegativitätsunterschied (z. B. Na und Cl).",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Bei einer Wasserstoffbrückenbindung interagieren ein Wasserstoffatom (gebunden an O, N oder F) mit einem freien Elektronenpaar.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 3, 4] },
      { key: "B", nummern: [1, 2, 4, 5] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [1, 2, 3, 5] },
      { key: "E", nummern: [3, 4, 5] },
    ],
    korrekte_option: "B",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Kovalente Bindungen entstehen durch gemeinsame Nutzung von Elektronen (Elektronenpaarbildung), nicht durch Übertragung (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "ch-pool-typk-012",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-2-01",
    stamm:
      "Welche der folgenden Aussagen zu Aggregatzuständen und Phasenübergängen sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Beim Schmelzen nimmt die Entropie zu, weil die Ordnung abnimmt.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Sublimation ist der direkte Übergang vom flüssigen in den gasförmigen Zustand.",
        korrekt: false,
      },
      {
        nr: 3,
        text: "Der Siedepunkt einer Flüssigkeit steigt bei erhöhtem Außendruck (Dampfdruckerhöhung).",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Am Tripelpunkt koexistieren alle drei Phasen (fest, flüssig, gasförmig) im Gleichgewicht.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Verdampfungsenthalpie und Kondensationsenthalpie haben denselben Betrag, aber entgegengesetzte Vorzeichen.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3] },
      { key: "B", nummern: [2, 4, 5] },
      { key: "C", nummern: [1, 3, 4, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [2, 3, 5] },
    ],
    korrekte_option: "C",
    erklaerung:
      "Richtig sind 1, 3, 4 und 5. Sublimation ist der direkte Übergang von fest zu gasförmig (z. B. Trockeneis); der flüssig→gasförmig-Übergang heißt Verdampfen/Sieden (2 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "ch-pool-typk-013",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-3-01",
    stamm: "Welche der folgenden Aussagen zu den Gasgesetzen sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Das ideale Gasgesetz lautet: p · V = n · R · T.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Das Gay-Lussac-Gesetz beschreibt den linearen Zusammenhang zwischen Druck und Temperatur bei konstantem Volumen.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Das Boyle-Mariotte-Gesetz besagt: Bei konstanter Temperatur sind Volumen und Druck proportional.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Das Avogadro-Gesetz besagt: Gleiche Volumina idealer Gase bei gleicher Temperatur und gleichem Druck enthalten gleich viele Teilchen.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Das molare Volumen eines idealen Gases bei 0 °C und 101,3 kPa beträgt ca. 22,4 L/mol.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [2, 3, 5] },
      { key: "C", nummern: [1, 3, 4] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [3, 4, 5] },
    ],
    korrekte_option: "D",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Das Boyle-Mariotte-Gesetz besagt: p und V sind bei konstanter Temperatur umgekehrt proportional (p · V = const.), nicht proportional (3 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "ch-pool-typk-014",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-02",
    stamm: "Welche der folgenden Aussagen zu Puffersystemen und pH-Wert sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Ein Puffersystem besteht aus einer schwachen Säure und ihrer konjugierten Base (oder umgekehrt).",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Der Henderson-Hasselbalch-Ausdruck lautet: pH = pKa + log([A⁻]/[HA]).",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Das Bikarbonat-Puffersystem (H₂CO₃/HCO₃⁻) ist das wichtigste Puffersystem im Blut.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Puffer funktionieren am besten, wenn pH weit vom pKa entfernt liegt.",
        korrekt: false,
      },
      {
        nr: 5,
        text: "Bei Azidose sinkt der pH des Blutes unter 7,35.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [2, 4, 5] },
      { key: "C", nummern: [1, 3, 4] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. Puffer wirken am besten, wenn pH nahe am pKa liegt (optimale Pufferkapazität bei pH = pKa ± 1) (4 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "ch-pool-typk-015",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm:
      "Welche der folgenden Aussagen zur organischen Chemie und funktionellen Gruppen sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Alkohole enthalten die funktionelle Gruppe –OH; primäre Alkohole haben die OH-Gruppe am Kohlenstoff mit zwei H-Atomen.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Aldehyde haben die funktionelle Gruppe –CHO; sie können zu Carbonsäuren oxidiert werden.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Ester entstehen aus Alkohol und Alkohol durch eine Kondensationsreaktion.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Amine sind Derivate des Ammoniaks (NH₃), bei denen H-Atome durch Alkyl- oder Arylgruppen ersetzt sind.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Carbonylgruppe (C=O) findet sich in Aldehyden, Ketonen, Carbonsäuren und Estern.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Ester entstehen aus Alkohol und Carbonsäure (nicht Alkohol + Alkohol) durch Kondensation unter Wasserabspaltung (3 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "ch-pool-typk-016",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-7-01",
    stamm:
      "Welche der folgenden Aussagen zu chemischen Gleichgewichten und Le Chatelier sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Das Massenwirkungsgesetz (MWG) beschreibt das Verhältnis der Produkt- zu Eduktkonzentrationen im Gleichgewicht.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Das Prinzip von Le Chatelier besagt: Ein Gleichgewicht weicht einem äußeren Eingriff so aus, dass es diesen abschwächt.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Bei einer exothermen Reaktion verschiebt sich das Gleichgewicht bei Temperaturerhöhung in Richtung der Produkte.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Druckerhöhung bei einer Gasreaktion verschiebt das Gleichgewicht zur Seite mit weniger Gasmol.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Ein Katalysator verändert die Gleichgewichtslage nicht, sondern senkt nur die Aktivierungsenergie.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [2, 3, 5] },
      { key: "B", nummern: [1, 2, 4, 5] },
      { key: "C", nummern: [1, 3, 4] },
      { key: "D", nummern: [3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4] },
    ],
    korrekte_option: "B",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Bei Temperaturerhöhung verschiebt sich das Gleichgewicht einer exothermen Reaktion in Richtung der Edukte (endotherme Gegenreaktion) (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "ch-pool-typk-017",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-8-02",
    stamm:
      "Welche der folgenden Aussagen zu Oxidation und Reduktion (Redoxreaktionen) sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Oxidation bedeutet Abgabe von Elektronen (Erhöhung der Oxidationszahl); Reduktion bedeutet Aufnahme von Elektronen.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "In einer galvanischen Zelle findet Oxidation an der Kathode statt.",
        korrekt: false,
      },
      {
        nr: 3,
        text: "Das Reduktionspotenzial der Standard-Wasserstoffelektrode (SHE) wird per Definition auf 0 V gesetzt.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Ein starkes Oxidationsmittel hat ein hohes Reduktionspotenzial (z. B. F₂, MnO₄⁻).",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Die Nernstschen Gleichung beschreibt die Abhängigkeit des Zellpotenzials von der Konzentration.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 3, 5] },
      { key: "B", nummern: [2, 3, 4] },
      { key: "C", nummern: [1, 2, 4, 5] },
      { key: "D", nummern: [1, 3, 4, 5] },
      { key: "E", nummern: [2, 4, 5] },
    ],
    korrekte_option: "D",
    erklaerung:
      "Richtig sind 1, 3, 4 und 5. In einer galvanischen Zelle findet Oxidation an der Anode statt; an der Kathode läuft Reduktion ab (2 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "ch-pool-typk-018",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-9-01",
    stamm:
      "Welche der folgenden Aussagen zu Biomolekülen (Kohlenhydrate, Lipide, Proteine) sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Glucose ist ein Monosaccharid; Saccharose ist ein Disaccharid aus Glucose und Fructose.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Triglyceride bestehen aus einem Glycerinmolekül und drei Fettsäuren, die durch Esterbindungen verknüpft sind.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Peptide werden durch Glykosidbindungen zwischen Aminosäuren geknüpft.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Sättigte Fettsäuren haben keine Doppelbindungen und sind bei Raumtemperatur meist fest.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Isoelektrischer Punkt (pI) einer Aminosäure ist der pH-Wert, bei dem die Nettoladung null ist.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [3, 4, 5] },
      { key: "C", nummern: [1, 2, 3, 5] },
      { key: "D", nummern: [2, 3, 4] },
      { key: "E", nummern: [1, 2, 4, 5] },
    ],
    korrekte_option: "E",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Aminosäuren werden durch Peptidbindungen (nicht Glykosidbindungen) verknüpft; Glykosidbindungen verbinden Monosaccharide (3 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "ch-pool-typk-019",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-10-01",
    stamm: "Welche der folgenden Aussagen zur Kinetik chemischer Reaktionen sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Die Reaktionsgeschwindigkeit hängt u. a. von Temperatur, Konzentration und Katalysatoren ab.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Die Arrhenius-Gleichung beschreibt den exponentiellen Zusammenhang zwischen Reaktionsgeschwindigkeit und Temperatur.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Bei einer Reaktion erster Ordnung ist die Halbwertszeit konzentrationsabhängig.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Katalysatoren senken die Aktivierungsenergie und werden dabei nicht verbraucht.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Eine Faustregel (RGT-Regel) besagt: Bei Temperaturerhöhung um 10 K verdoppelt bis verdreifacht sich oft die Reaktionsgeschwindigkeit.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Bei einer Reaktion erster Ordnung ist die Halbwertszeit konstant (t½ = ln2/k), also konzentrationsunabhängig (3 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  {
    id: "ch-pool-typk-020",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-11-01",
    stamm:
      "Welche der folgenden Aussagen zur Stöchiometrie und zu chemischen Berechnungen sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Die Avogadro-Konstante NA ≈ 6,022 × 10²³ mol⁻¹ gibt die Anzahl der Teilchen pro Mol an.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Molare Masse (g/mol) = Masse einer Substanz (g) / Stoffmenge (mol).",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Bei der Synthese von Wasser aus H₂ und O₂ reagieren 1 mol H₂ mit 1 mol O₂.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Ausbeuteberechnung: Tatsächliche Ausbeute / Theoretische Ausbeute × 100 %.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Der limitierende Reaktant (Mangel-Reaktant) bestimmt die maximale Produktmenge.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [1, 2, 4, 5] },
      { key: "D", nummern: [3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 5] },
    ],
    korrekte_option: "C",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Wasser-Synthese: 2 H₂ + O₂ → 2 H₂O — es reagieren 2 mol H₂ mit 1 mol O₂, nicht 1:1 (3 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "ch-pool-typk-021",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zur organischen Nomenklatur und Isomerie sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Konstitutionsisomere haben dieselbe Molekülformel, aber unterschiedliche Bindungsreihenfolgen.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Enantiomere sind Spiegelbildisomere, die sich wie Bild und Spiegelbild nicht zur Deckung bringen lassen.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Cis-Trans-Isomerie (geometrische Isomerie) tritt bei C-C-Doppelbindungen auf, wenn jedes Kohlenstoffatom zwei verschiedene Substituenten trägt.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Enantiomere unterscheiden sich in allen physikalischen Eigenschaften.",
        korrekt: false,
      },
      {
        nr: 5,
        text: "Das IUPAC-Nomenklatur-System basiert auf der längsten Kohlenstoffkette (Hauptkette) als Elternnamen.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [2, 4, 5] },
      { key: "C", nummern: [1, 3, 4] },
      { key: "D", nummern: [2, 3, 4, 5] },
      { key: "E", nummern: [1, 2, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. Enantiomere unterscheiden sich nur in der Drehrichtung des polarisierten Lichts; alle anderen physikalischen Eigenschaften (Schmelzpunkt, Siedepunkt etc.) sind gleich (4 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "ch-pool-typk-022",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Aussagen zum Periodensystem der Elemente (PSE) sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Elemente in derselben Gruppe haben die gleiche Anzahl an Valenzelektronen.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Der Atomradius nimmt innerhalb einer Periode von links nach rechts zu.",
        korrekt: false,
      },
      {
        nr: 3,
        text: "Die Elektronegativität steigt im PSE von unten links nach oben rechts (Ausnahme: Edelgase).",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Alkalimetalle (Gruppe 1) haben ein Valenzelektron und reagieren stark mit Wasser.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Halogene (Gruppe 17) haben 7 Valenzelektronen und neigen zur Aufnahme eines Elektrons.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4] },
      { key: "B", nummern: [2, 3, 5] },
      { key: "C", nummern: [1, 3, 4, 5] },
      { key: "D", nummern: [2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 5] },
    ],
    korrekte_option: "C",
    erklaerung:
      "Richtig sind 1, 3, 4 und 5. Innerhalb einer Periode nimmt der Atomradius von links nach rechts ab (zunehmende Kernladung zieht Elektronen stärker an) (2 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "ch-pool-typk-023",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-4-01",
    stamm: "Welche der folgenden Aussagen zur Thermochemie und Thermodynamik sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Der erste Hauptsatz der Thermodynamik beschreibt die Energieerhaltung.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Eine exotherme Reaktion hat eine negative Reaktionsenthalpie (ΔH < 0).",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Der zweite Hauptsatz besagt: Die Entropie des Universums nimmt bei spontanen Prozessen ab.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Gibbs-Energie: ΔG = ΔH − T·ΔS; spontane Reaktionen verlaufen bei ΔG < 0.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Hess'scher Satz: Reaktionsenthalpien können addiert werden, unabhängig vom Reaktionsweg.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 3, 5] },
      { key: "B", nummern: [2, 3, 4] },
      { key: "C", nummern: [1, 2, 3, 4] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [3, 4, 5] },
    ],
    korrekte_option: "D",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Der zweite Hauptsatz besagt: Die Entropie des Universums nimmt bei spontanen Prozessen ZU (nicht ab) (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "ch-pool-typk-024",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-02",
    stamm:
      "Welche der folgenden Aussagen zur Kohlenwasserstoffchemie und aromatischen Verbindungen sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Benzol (C₆H₆) ist ein aromatischer Kohlenwasserstoff mit delokalisierten π-Elektronen.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Alkane sind gesättigte Kohlenwasserstoffe mit der allgemeinen Formel CₙH₂ₙ₊₂.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Alkene reagieren bevorzugt durch elektrophile Substitution (wie Benzol).",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Cycloalkane haben die allgemeine Formel CₙH₂ₙ und sind ringförmig.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Alkine enthalten eine Dreifachbindung zwischen zwei Kohlenstoffatomen.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 3, 4] },
      { key: "B", nummern: [2, 3, 5] },
      { key: "C", nummern: [1, 2, 4, 5] },
      { key: "D", nummern: [3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 5] },
    ],
    korrekte_option: "C",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Alkene reagieren bevorzugt durch elektrophile ADDITION (nicht Substitution); elektrophile Substitution ist typisch für Aromaten (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "ch-pool-typk-025",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zu starken und schwachen Säuren/Basen sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Starke Säuren (z. B. HCl, H₂SO₄, HNO₃) sind in wässriger Lösung vollständig dissoziiert.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Schwache Säuren haben eine kleine Säurekonstante Ka und sind nur teilweise dissoziiert.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Die konjugierte Base einer starken Säure ist ebenfalls eine starke Base.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Bei einer Neutralisationsreaktion reagiert eine Säure mit einer Base zu Salz und Wasser.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Ammoniak (NH₃) ist eine schwache Base; sie reagiert mit Wasser zu NH₄⁺ und OH⁻.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3] },
      { key: "B", nummern: [1, 2, 4, 5] },
      { key: "C", nummern: [2, 3, 4] },
      { key: "D", nummern: [3, 4, 5] },
      { key: "E", nummern: [1, 3, 5] },
    ],
    korrekte_option: "B",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Die konjugierte Base einer starken Säure ist eine sehr schwache Base (z. B. Cl⁻ aus HCl), nicht eine starke Base (3 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "ch-pool-typk-026",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-9-02",
    stamm:
      "Welche der folgenden Aussagen zu Enzymen aus biochemisch-chemischer Sicht sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Enzyme sind meist Proteine; ihre dreidimensionale Struktur bestimmt die Substratspezifität.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Das aktive Zentrum des Enzyms enthält Aminosäureseitenketten, die die Substratbindung und Katalyse ermöglichen.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Kofaktoren und Koenzyme sind immer kovalent an das Enzym gebunden.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Denaturierung eines Enzyms durch Hitze oder extremen pH zerstört die Aktivität (irreversibel oder reversibel je nach Bedingung).",
        korrekt: true,
      },
      {
        nr: 5,
        text: "NAD⁺ und FAD sind wichtige Koenzyme, die als Elektronenüberträger in Redoxreaktionen wirken.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [2, 3, 4] },
      { key: "C", nummern: [1, 3, 4] },
      { key: "D", nummern: [3, 4, 5] },
      { key: "E", nummern: [1, 2, 4, 5] },
    ],
    korrekte_option: "E",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Kofaktoren können kovalent (prosthetische Gruppen) oder nicht-kovalent (Koenzyme wie NAD⁺) gebunden sein; die Aussage 'immer kovalent' ist falsch (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "ch-pool-typk-027",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-3-02",
    stamm:
      "Welche der folgenden Aussagen zu Löslichkeit und kolligativen Eigenschaften sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Kolligative Eigenschaften (Siedepunktserhöhung, Gefrierpunktserniedrigung, osmotischer Druck) hängen von der Anzahl gelöster Teilchen ab, nicht von ihrer Art.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Osmose ist der Nettofluss von Wasser durch eine semipermeable Membran von höherer zu niedrigerer Wasseraktivität.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Die Siedepunktserhöhung ist direkt proportional zur Molalität des gelösten Stoffs.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "NaCl erhöht den osmotischen Druck um denselben Faktor wie Glucose bei gleicher molaler Konzentration.",
        korrekt: false,
      },
      {
        nr: 5,
        text: "Henry-Gesetz: Die Löslichkeit eines Gases in einer Flüssigkeit ist proportional zum Partialdruck des Gases.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [2, 4, 5] },
      { key: "C", nummern: [1, 3, 4] },
      { key: "D", nummern: [3, 4, 5] },
      { key: "E", nummern: [1, 2, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. NaCl dissoziiert in Na⁺ und Cl⁻ (i=2), erzeugt also etwa doppelt so viele Teilchen wie Glucose → höherer osmotischer Druck bei gleicher molaler Konzentration (4 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  {
    id: "ch-pool-typk-028",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-03",
    stamm:
      "Welche der folgenden Aussagen zu Elektrolyten und elektrochemischen Prozessen sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Starke Elektrolyte dissoziieren in wässriger Lösung vollständig in Ionen.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Bei der Elektrolyse wird elektrische Energie genutzt, um eine nicht-spontane chemische Reaktion zu treiben.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "In einer Brennstoffzelle wird Wasser zu Wasserstoff und Sauerstoff gespalten.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Bei der Elektrolyse von Wasser entsteht an der Kathode Wasserstoff (H₂) und an der Anode Sauerstoff (O₂).",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Faraday-Gesetze beschreiben den Zusammenhang zwischen der Ladungsmenge und der abgeschiedenen Stoffmenge.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3] },
      { key: "B", nummern: [2, 3, 5] },
      { key: "C", nummern: [1, 3, 4] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [3, 4, 5] },
    ],
    korrekte_option: "D",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. In einer Brennstoffzelle reagieren Wasserstoff und Sauerstoff zu Wasser unter Freisetzung elektrischer Energie; die umgekehrte Reaktion (Wasserzerlegung) ist Elektrolyse (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "ch-pool-typk-029",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-10-02",
    stamm: "Welche der folgenden Aussagen zu Nukleinsäuren und Nucleotidchemie sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Nucleotide bestehen aus einer Nukleobase, einem Pentosezucker und ein bis drei Phosphatgruppen.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "In der DNA findet sich Desoxyribose; in der RNA Ribose als Zuckerkomponente.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "In der DNA paaren sich Adenin mit Cytosin und Guanin mit Thymin.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "ATP (Adenosintriphosphat) ist ein universeller Energieträger der Zelle und enthält Adenin, Ribose und drei Phosphate.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Phosphodiesterbindungen verbinden benachbarte Nucleotide im Rückgrat von DNA und RNA.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 3, 4] },
      { key: "D", nummern: [3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. In der DNA paaren sich Adenin mit Thymin (2 H-Brücken) und Guanin mit Cytosin (3 H-Brücken) — nicht A-C und G-T (3 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "ch-pool-typk-030",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-7-05",
    stamm: "Welche der folgenden Aussagen zur Thermodynamik biologischer Systeme sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Exergone Reaktionen (ΔG < 0) laufen spontan ab und können energiereiche Produkte liefern.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Endergone Reaktionen (ΔG > 0) können durch Kopplung an ATP-Hydrolyse angetrieben werden.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "ATP-Hydrolyse zu ADP + Pi hat ein ΔG° von ca. −30 kJ/mol (unter Standardbedingungen).",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Lebende Systeme sind Gleichgewichtssysteme (befinden sich immer im thermodynamischen Gleichgewicht).",
        korrekt: false,
      },
      {
        nr: 5,
        text: "Stoffwechselwege nutzen Reaktionskopplungen, um energetisch ungünstige Schritte mit günstigen zu verknüpfen.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 4, 5] },
      { key: "B", nummern: [2, 3, 4] },
      { key: "C", nummern: [1, 2, 3, 5] },
      { key: "D", nummern: [3, 4, 5] },
      { key: "E", nummern: [1, 2, 4] },
    ],
    korrekte_option: "C",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. Lebende Systeme sind offene, thermodynamische Nicht-Gleichgewichtssysteme — sie halten sich durch ständigen Energie- und Materieaustausch aufrecht (4 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
];
