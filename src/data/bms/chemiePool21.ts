/**
 * Chemie BMS Pool 21 — 60 Fragen im offiziellen MedAT-Stil (Typ A).
 * Stoff: chem-kap1–chem-kap6 (Atombau, Materie, Bindung, Reaktionen, Anorganik, Organik).
 */
import type { Question } from "./index";

function q(
  id: string,
  chapter: string,
  text: string,
  options: [string, string, string, string, string],
  correctIndex: 0 | 1 | 2 | 3 | 4,
  explanation: string,
  difficulty: "leicht" | "mittel" | "schwer" = "mittel",
  tags: string[] = []
): Question {
  const ids = ["a", "b", "c", "d", "e"] as const;
  return {
    id,
    subject: "chemie",
    chapter,
    text,
    options: options.map((t, i) => ({ id: ids[i], text: t })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags,
  };
}

const KAP = ["chem-kap1", "chem-kap2", "chem-kap3", "chem-kap4", "chem-kap5", "chem-kap6"] as const;

export const chemiePool21: Question[] = [
  q(
    "ch-pool-21-001",
    KAP[0],
    "Die Ordnungszahl Z im Periodensystem gibt an:",
    [
      "die Massenzahl",
      "die Protonenzahl im Kern",
      "die Neutronenzahl",
      "die Elektronenzahl in der äußersten Schale",
      "die Atommasse",
    ],
    1,
    "Z = Anzahl der Protonen im Kern; definiert das Element. In neutralen Atomen auch Anzahl der Elektronen.",
    "leicht",
    ["Ordnungszahl"]
  ),
  q(
    "ch-pool-21-002",
    KAP[1],
    "Die Einheit Liter (L) gehört zu:",
    ["Masse", "Stoffmenge", "Volumen", "Druck", "Temperatur"],
    2,
    "Liter (L) = Volumeneinheit. 1 L = 1 dm³.",
    "leicht",
    ["Volumen", "Liter"]
  ),
  q(
    "ch-pool-21-003",
    KAP[2],
    "Welche Verbindung enthält vorwiegend kovalente Bindungen zwischen verschiedenen Elementen?",
    ["NaCl", "KBr", "HCl", "CaO", "MgCl₂"],
    2,
    "HCl: Wasserstoff und Chlor teilen ein Elektronenpaar (kovalent polar). Die anderen sind ionisch.",
    "leicht",
    ["kovalente Bindung", "HCl"]
  ),
  q(
    "ch-pool-21-004",
    KAP[3],
    "Bei einer Säure-Base-Reaktion nach Brønsted:",
    [
      "werden Elektronen übertragen",
      "werden Protonen (H⁺) übertragen",
      "entstehen nur Oxide",
      "wird kein Wasser gebildet",
      "reagieren nur Metalle",
    ],
    1,
    "Brønsted: Säure = Protonendonator, Base = Protonenakzeptor. Protonenübertragung.",
    "leicht",
    ["Brønsted", "Säure-Base"]
  ),
  q(
    "ch-pool-21-005",
    KAP[4],
    "Der pH-Wert einer Lösung mit [H₃O⁺] = 10⁻³ mol/L beträgt:",
    ["3", "−3", "11", "7", "14"],
    0,
    "pH = −log₁₀(10⁻³) = 3. Saure Lösung.",
    "leicht",
    ["pH", "Berechnung"]
  ),
  q(
    "ch-pool-21-006",
    KAP[5],
    "Welche Verbindung ist ein Alken?",
    ["Ethan", "Ethen", "Ethin", "Benzol", "Cyclohexan"],
    1,
    "Ethen C₂H₄ hat eine C=C-Doppelbindung (Alken). Ethan = Alkan, Ethin = Alkin.",
    "leicht",
    ["Alkene", "Ethen"]
  ),
  q(
    "ch-pool-21-007",
    KAP[0],
    "Wie viele Elektronen passen maximal in die 3. Schale (n=3)?",
    ["2", "8", "18", "32", "50"],
    2,
    "2n² = 2·9 = 18. Maximale Elektronenzahl in der M-Schale.",
    "leicht",
    ["Schale", "Elektronen"]
  ),
  q(
    "ch-pool-21-008",
    KAP[1],
    "Die Dichte ρ wird berechnet als:",
    ["m · V", "m / V", "V / m", "n / V", "m / n"],
    1,
    "ρ = m / V (Masse pro Volumen). Einheit z. B. g/cm³.",
    "leicht",
    ["Dichte"]
  ),
  q(
    "ch-pool-21-009",
    KAP[2],
    "Welche Bindung ist in einem H₂O-Molekül zwischen O und H vorhanden?",
    [
      "ionisch",
      "kovalent polar",
      "metallisch",
      "nur van-der-Waals",
      "Wasserstoffbrücke (innerhalb des Moleküls)",
    ],
    1,
    "H₂O: O−H-Bindung ist kovalent polar (EN-Differenz). Wasserstoffbrücken wirken zwischen Molekülen.",
    "leicht",
    ["Wasser", "kovalente Bindung"]
  ),
  q(
    "ch-pool-21-010",
    KAP[3],
    "Ein chemisches Gleichgewicht ist dynamisch, das bedeutet:",
    [
      "es läuft keine Reaktion mehr",
      "Hin- und Rückreaktion laufen weiter, mit gleicher Geschwindigkeit",
      "nur die Hinreaktion läuft",
      "nur die Rückreaktion läuft",
      "die Konzentrationen sind null",
    ],
    1,
    "Dynamisches Gleichgewicht: v_hin = v_rück; Konzentrationen konstant, aber Reaktionen laufen weiter.",
    "mittel",
    ["Gleichgewicht", "dynamisch"]
  ),
  q(
    "ch-pool-21-011",
    KAP[4],
    "Welche Aussage zu Säuren nach Arrhenius trifft zu?",
    [
      "Sie liefern OH⁻ in Wasser",
      "Sie liefern H₃O⁺ (bzw. H⁺) in Wasser",
      "Sie sind immer fest",
      "Sie haben immer pH 7",
      "Sie reagieren nicht mit Basen",
    ],
    1,
    "Arrhenius-Säure: bildet in wässriger Lösung H₃O⁺ (Protonen).",
    "leicht",
    ["Arrhenius", "Säure"]
  ),
  q(
    "ch-pool-21-012",
    KAP[5],
    "Die funktionelle Gruppe −OH (Hydroxylgruppe) findet sich in:",
    ["Alkanen", "Alkoholen", "Alkenen", "Alkinen", "nur in Carbonsäuren"],
    1,
    "Alkohole: R−OH. Carbonsäuren haben −COOH (darin auch O, aber Carboxylgruppe).",
    "leicht",
    ["Alkohol", "funktionelle Gruppe"]
  ),
  q(
    "ch-pool-21-013",
    KAP[0],
    "Welches Element hat die Elektronenkonfiguration 1s² 2s² 2p⁶ 3s²?",
    ["Neon", "Natrium", "Magnesium", "Aluminium", "Silicium"],
    2,
    "12 Elektronen = Magnesium (Z=12). Na = 11, Al = 13.",
    "mittel",
    ["Magnesium", "Elektronenkonfiguration"]
  ),
  q(
    "ch-pool-21-014",
    KAP[1],
    "Die Gefrierpunktserniedrigung ΔT_f ist proportional zur:",
    [
      "Temperatur",
      "Molalität des gelösten Stoffs",
      "Dichte",
      "Verdampfungsenthalpie",
      "Oberflächenspannung",
    ],
    1,
    "ΔT_f = K_kry · b (kolligative Eigenschaft).",
    "mittel",
    ["Gefrierpunktserniedrigung"]
  ),
  q(
    "ch-pool-21-015",
    KAP[2],
    "Welche Verbindung bildet ein ionisches Gitter?",
    ["CO₂", "SiO₂ (Quarz)", "Na₂O", "Diamant", "Iod"],
    2,
    "Na₂O: Natriumoxid, Ionenverbindung aus Na⁺ und O²⁻. CO₂, I₂ molekular; SiO₂, Diamant kovalent.",
    "mittel",
    ["Ionenverbindung", "Na2O"]
  ),
  q(
    "ch-pool-21-016",
    KAP[3],
    "Die Reaktionsenthalpie ΔH einer Reaktion:",
    [
      "bestimmt die Reaktionsgeschwindigkeit",
      "gibt die bei konstantem Druck umgesetzte Wärme an",
      "ist immer null",
      "bestimmt nur die Aktivierungsenergie",
      "hängt nur vom Katalysator ab",
    ],
    1,
    "Bei konstantem Druck: ΔH = Q_p (Reaktionswärme). Unabhängig von Geschwindigkeit und Katalysator.",
    "mittel",
    ["Reaktionsenthalpie"]
  ),
  q(
    "ch-pool-21-017",
    KAP[4],
    "Welche Oxidationszahl hat Mangan in Mn²⁺?",
    ["0", "+2", "+4", "+7", "−2"],
    1,
    "Mn²⁺: einfach positiv geladenes Ion → Oxidationszahl +2.",
    "leicht",
    ["Oxidationszahl", "Mangan"]
  ),
  q(
    "ch-pool-21-018",
    KAP[5],
    "Die Addition von HBr an ein unsymmetrisches Alken folgt der:",
    ["Hund-Regel", "Markovnikov-Regel", "Pauli-Prinzip", "Oktettregel", "Le-Chatelier-Regel"],
    1,
    "Markovnikov: H geht an das C-Atom mit mehr H-Atomen, Br an das andere (stabileres Carbeniumion).",
    "mittel",
    ["Markovnikov", "Alkene"]
  ),
  q(
    "ch-pool-21-019",
    KAP[0],
    "Die Massenzahl A steht im Elementsymbol:",
    ["rechts unten", "links oben", "rechts oben", "links unten", "in der Mitte"],
    1,
    "Schreibweise: ˣ_y E mit x = Massenzahl (links oben), y = Ordnungszahl (links unten).",
    "leicht",
    ["Massenzahl", "Elementsymbol"]
  ),
  q(
    "ch-pool-21-020",
    KAP[1],
    "Die Konzentration c hat die Einheit:",
    ["g/L", "mol/L (bzw. mol/dm³)", "L/mol", "mol·L", "g/mol"],
    1,
    "Stoffmengenkonzentration c = n/V in mol/L (Molarität).",
    "leicht",
    ["Konzentration", "Einheit"]
  ),
  q(
    "ch-pool-21-021",
    KAP[2],
    "Welche Aussage zu Elektronegativität und Bindungstyp trifft zu?",
    [
      "Große EN-Differenz → eher kovalent",
      "Kleine EN-Differenz → eher kovalent",
      "EN hat keinen Einfluss",
      "Gleiche EN → immer Ionenbindung",
      "EN gilt nur für Metalle",
    ],
    1,
    "Ähnliche EN (kleine Differenz) → Elektronen geteilt → kovalent. Große EN-Differenz → Ionenbindung.",
    "mittel",
    ["Elektronegativität", "Bindungstyp"]
  ),
  q(
    "ch-pool-21-022",
    KAP[3],
    "Bei einer Reaktion A → B mit Reaktion 1. Ordnung gilt:",
    ["v = k", "v = k·[A]", "v = k·[A]²", "v = k/[A]", "v ist unabhängig von [A]"],
    1,
    "Reaktion 1. Ordnung: v = k·[A]. Geschwindigkeit proportional zur Konzentration von A.",
    "mittel",
    ["Reaktion 1. Ordnung"]
  ),
  q(
    "ch-pool-21-023",
    KAP[4],
    "Welche Oxidationszahl hat Kohlenstoff in Ethanol (CH₃CH₂OH)?",
    ["+4", "+2", "0", "−2", "−4 (und 0 an C2)"],
    3,
    "In Ethanol: C der CH₃-Gruppe hat −3, C der CH₂OH-Gruppe hat −1. Oft wird vereinfacht −2 angegeben (Mittelwert bzw. oxidierbarer C).",
    "mittel",
    ["Oxidationszahl", "Ethanol"]
  ),
  q(
    "ch-pool-21-024",
    KAP[5],
    "Ein Ester entsteht aus Carbonsäure und Alkohol unter:",
    [
      "Abspaltung von H₂",
      "Abspaltung von H₂O (Wasser)",
      "Abspaltung von CO₂",
      "Abspaltung von NH₃",
      "Addition von H₂",
    ],
    1,
    "Veresterung: RCOOH + R'OH ⇌ RCOOR' + H₂O. Wasser wird abgespalten.",
    "mittel",
    ["Veresterung", "Ester"]
  ),
  q(
    "ch-pool-21-025",
    KAP[0],
    "Welche Hauptgruppe enthält die Edelmetalle Kupfer, Silber, Gold?",
    ["Gruppe 1", "Gruppe 2", "Gruppe 11 (Nebengruppe)", "Gruppe 17", "Gruppe 18"],
    2,
    "Cu, Ag, Au sind Übergangsmetalle in Gruppe 11 (1b in alter Zählung).",
    "leicht",
    ["Edelmetalle", "Periodensystem"]
  ),
  q(
    "ch-pool-21-026",
    KAP[1],
    "Die molare Masse M berechnet sich aus:",
    ["n / m", "m / n", "V / n", "n · V", "m · V"],
    1,
    "M = m / n (Masse pro Stoffmenge). Einheit g/mol.",
    "leicht",
    ["molare Masse"]
  ),
  q(
    "ch-pool-21-027",
    KAP[2],
    "Welche Bindung ist in einem CH₄-Molekül zwischen C und H vorhanden?",
    ["ionisch", "kovalent (nahezu unpolar)", "metallisch", "Wasserstoffbrücke", "Dipol-Dipol"],
    1,
    "CH₄: vier C−H-Bindungen, kovalent (kleine EN-Differenz, nahezu unpolar).",
    "leicht",
    ["Methan", "kovalente Bindung"]
  ),
  q(
    "ch-pool-21-028",
    KAP[3],
    "Die Aktivierungsenergie E_A:",
    [
      "wird bei Reaktionen freigesetzt",
      "muss von den Reaktanden aufgebracht werden, um den Übergangszustand zu erreichen",
      "ist immer null",
      "bestimmt die Gleichgewichtslage",
      "ist unabhängig von der Temperatur",
    ],
    1,
    "E_A: Energiebarriere vom Edukt zum Übergangszustand; muss durch Stöße/Energiezufuhr überwunden werden.",
    "mittel",
    ["Aktivierungsenergie"]
  ),
  q(
    "ch-pool-21-029",
    KAP[4],
    "Welches Anion entsteht aus Phosphorsäure (H₃PO₄) nach Abgabe eines Protons?",
    ["PO₄³⁻", "HPO₄²⁻", "H₂PO₄⁻", "P³⁻", "H₃PO₄⁻"],
    2,
    "H₃PO₄ → H⁺ + H₂PO₄⁻ (Dihydrogenphosphat). Weiter: H₂PO₄⁻ → H⁺ + HPO₄²⁻; HPO₄²⁻ → H⁺ + PO₄³⁻.",
    "mittel",
    ["Phosphorsäure", "Phosphat"]
  ),
  q(
    "ch-pool-21-030",
    KAP[5],
    "Ein Aminosäure-Molekül enthält typischerweise:",
    [
      "nur eine Carboxylgruppe",
      "mindestens eine Amino- und eine Carboxylgruppe",
      "nur eine Aminogruppe",
      "nur Ester",
      "nur Ether",
    ],
    1,
    "Aminosäuren: −NH₂ und −COOH am gleichen C-Atom (α-Aminosäuren).",
    "leicht",
    ["Aminosäure"]
  ),
  q(
    "ch-pool-21-031",
    KAP[0],
    "Wie viele Neutronen hat ¹⁶O?",
    ["6", "7", "8", "16", "10"],
    2,
    "¹⁶O: A=16, Z=8. N = A−Z = 8 Neutronen.",
    "leicht",
    ["Sauerstoff", "Neutronen"]
  ),
  q(
    "ch-pool-21-032",
    KAP[1],
    "Die Siedetemperatur einer Flüssigkeit ist die Temperatur, bei der:",
    [
      "der Dampfdruck null ist",
      "der Dampfdruck gleich dem Außendruck ist",
      "die Flüssigkeit gefriert",
      "keine Verdampfung stattfindet",
      "die Dichte minimal ist",
    ],
    1,
    "Sieden: Dampfdruck der Flüssigkeit = Außendruck. Dann bilden sich Dampfblasen im Inneren.",
    "mittel",
    ["Siedepunkt"]
  ),
  q(
    "ch-pool-21-033",
    KAP[2],
    "Welche Geometrie hat ein BeCl₂-Molekül (in der Gasphase)?",
    ["gewinkelt", "linear", "tetraedrisch", "trigonal planar", "pyramidal"],
    1,
    "BeCl₂: Be hat 2 Bindungen, kein freies Paar → linear (sp-Hybridisierung).",
    "mittel",
    ["Berylliumchlorid", "Geometrie"]
  ),
  q(
    "ch-pool-21-034",
    KAP[3],
    "Die Gleichgewichtskonstante K einer Reaktion wird durch Erhöhung der Eduktkonzentration:",
    [
      "vergrößert",
      "nicht geändert (K ist konstant bei fester T)",
      "verkleinert",
      "verdoppelt",
      "auf null gesetzt",
    ],
    1,
    "K ist eine Stoff- und temperaturabhängige Konstante; Konzentrationsänderungen verschieben das Gleichgewicht, ändern aber nicht K.",
    "mittel",
    ["Gleichgewichtskonstante"]
  ),
  q(
    "ch-pool-21-035",
    KAP[4],
    "Welche Lösung hat einen pH < 7?",
    ["reines Wasser", "Natronlauge", "Salzsäure", "Kochsalzlösung (neutral)", "Kalilauge"],
    2,
    "Salzsäure (HCl) liefert H₃O⁺ → pH < 7. Laugen haben pH > 7, Wasser und NaCl etwa pH 7.",
    "leicht",
    ["pH", "Säure"]
  ),
  q(
    "ch-pool-21-036",
    KAP[5],
    "Die Oxidation eines primären Alkohols kann ergeben:",
    ["Alkan", "Alken", "Aldehyd oder Carbonsäure", "Keton", "Ether"],
    2,
    "Primärer Alkohol → Oxidation → Aldehyd (weiter zu Carbonsäure möglich).",
    "mittel",
    ["Alkohol", "Oxidation"]
  ),
  q(
    "ch-pool-21-037",
    KAP[0],
    "Das Elementsymbol Ag steht für:",
    ["Gold", "Silber", "Argon", "Aluminium", "Arsen"],
    1,
    "Ag = Argentum = Silber. Au = Gold.",
    "leicht",
    ["Elementsymbol", "Silber"]
  ),
  q(
    "ch-pool-21-038",
    KAP[1],
    "Die absolute Temperatur 0 K entspricht:",
    ["0 °C", "−273,15 °C", "273,15 °C", "100 °C", "−100 °C"],
    1,
    "0 K = absoluter Nullpunkt = −273,15 °C. T (K) = θ (°C) + 273,15.",
    "leicht",
    ["Kelvin", "absoluter Nullpunkt"]
  ),
  q(
    "ch-pool-21-039",
    KAP[2],
    "Welche Verbindung hat die geringste Leitfähigkeit in reinem (festem) Zustand?",
    ["Kupfer", "Graphit", "Kochsalz", "Silber", "Eisen"],
    2,
    "Festes NaCl: Ionen ortsfest → keine Leitfähigkeit. Metalle und Graphit leiten im Festkörper.",
    "mittel",
    ["Leitfähigkeit"]
  ),
  q(
    "ch-pool-21-040",
    KAP[3],
    "Ein Inhibitor verlangsamt eine Reaktion, indem er typischerweise:",
    [
      "die Aktivierungsenergie senkt",
      "den Katalysator oder das aktive Zentrum blockiert bzw. die Reaktion hemmt",
      "die Gleichgewichtslage verschiebt",
      "ΔH ändert",
      "die Temperatur erhöht",
    ],
    1,
    "Inhibitor blockiert z. B. das aktive Zentrum eines Enzyms oder bindet an den Katalysator → Reaktion verlangsamt.",
    "mittel",
    ["Inhibitor"]
  ),
  q(
    "ch-pool-21-041",
    KAP[4],
    "Welche Oxidationszahl hat Eisen in FeO?",
    ["0", "+1", "+2", "+3", "−2"],
    2,
    "FeO: Eisen(II)-oxid. O hat −2 → Fe = +2.",
    "leicht",
    ["Oxidationszahl", "Eisen"]
  ),
  q(
    "ch-pool-21-042",
    KAP[5],
    "Die Silbernitrat-Lösung zum Nachweis von Halogeniden ergibt mit Iodid:",
    [
      "weißen Niederschlag",
      "gelben Niederschlag (AgI)",
      "roten Niederschlag",
      "blauen Niederschlag",
      "keinen Niederschlag",
    ],
    1,
    "Ag⁺ + I⁻ → AgI (gelber, schwer löslicher Niederschlag). AgCl weiß, AgBr hellgelb.",
    "leicht",
    ["Halogenidnachweis", "Iodid"]
  ),
  q(
    "ch-pool-21-043",
    KAP[0],
    "Die K-Schale entspricht der Hauptquantenzahl:",
    ["0", "1", "2", "3", "4"],
    1,
    "K: n=1, L: n=2, M: n=3, N: n=4.",
    "leicht",
    ["K-Schale"]
  ),
  q(
    "ch-pool-21-044",
    KAP[1],
    "Die Löslichkeit eines festen Stoffs in einer Flüssigkeit kann erhöht werden durch:",
    [
      "nur Abkühlung",
      "Erwärmung (oft), Rühren, feinere Verteilung",
      "nur Druck",
      "nur Zugabe von mehr Feststoff",
      "nur Verdünnung",
    ],
    1,
    "Oft steigt die Löslichkeit mit der Temperatur; Rühren und feine Verteilung beschleunigen das Lösen.",
    "leicht",
    ["Löslichkeit"]
  ),
  q(
    "ch-pool-21-045",
    KAP[2],
    "Welche Aussage zu Wasserstoffbrücken trifft zu?",
    [
      "Sie sind kovalente Bindungen zwischen Molekülen",
      "Sie sind zwischenmolekulare Kräfte (H an O/N/F gebunden)",
      "Sie sind stärker als C−C-Bindungen",
      "Sie treten nur in Ionen auf",
      "Sie wirken nur in Alkanen",
    ],
    1,
    "Wasserstoffbrücken: zwischenmolekulare Wechselwirkung, H an elektronegativem Atom (O, N, F), mit anderem O/N/F.",
    "mittel",
    ["Wasserstoffbrücken"]
  ),
  q(
    "ch-pool-21-046",
    KAP[3],
    "Die Reaktionsgeschwindigkeit steigt typischerweise mit der Temperatur, weil:",
    [
      "die Gleichgewichtslage sich verschiebt",
      "mehr Teilchen die Aktivierungsenergie überschreiten (Boltzmann)",
      "der Katalysator dann wirkt",
      "die Konzentration steigt",
      "ΔH sich ändert",
    ],
    1,
    "Höhere Temperatur → höhere kinetische Energie → mehr erfolgreiche Stöße (Arrhenius, Boltzmann).",
    "mittel",
    ["Reaktionsgeschwindigkeit", "Temperatur"]
  ),
  q(
    "ch-pool-21-047",
    KAP[4],
    "Welches Salz entsteht bei der Neutralisation von HNO₃ mit KOH?",
    ["KNO₂", "KNO₃", "K₂NO₃", "KCl", "K₂SO₄"],
    1,
    "HNO₃ + KOH → KNO₃ + H₂O. Kaliumnitrat.",
    "leicht",
    ["Neutralisation", "Kaliumnitrat"]
  ),
  q(
    "ch-pool-21-048",
    KAP[5],
    "Die Fehling-Reaktion weist nach:",
    ["Alkane", "reduzierende Zucker oder Aldehyde", "Carbonsäuren", "Ether", "Alkene (nur)"],
    1,
    "Fehling (Cu²⁺ in alkalischer Lösung): wird von Aldehyden und reduzierenden Zuckern zu Cu⁺ (rot/orange) reduziert.",
    "mittel",
    ["Fehling", "Aldehyd"]
  ),
  q(
    "ch-pool-21-049",
    KAP[0],
    "Welches Element hat 8 Protonen?",
    ["Stickstoff", "Sauerstoff", "Fluor", "Neon", "Kohlenstoff"],
    1,
    "Z = 8 = Sauerstoff (O).",
    "leicht",
    ["Sauerstoff", "Ordnungszahl"]
  ),
  q(
    "ch-pool-21-050",
    KAP[1],
    "Die allgemeine Gasgleichung pV = nRT gilt für:",
    [
      "nur Flüssigkeiten",
      "ideale Gase (in guter Näherung bei niedrigem p, hohem T)",
      "nur Feststoffe",
      "nur reale Gase bei hohem Druck",
      "nur bei 0 °C",
    ],
    1,
    "pV = nRT beschreibt ideale Gase; gute Näherung bei niedrigem Druck und nicht zu tiefer Temperatur.",
    "mittel",
    ["ideales Gas"]
  ),
  q(
    "ch-pool-21-051",
    KAP[2],
    "In einem Kaliumoxid (K₂O) liegen vor:",
    ["K- und O-Atome kovalent", "K⁺- und O²⁻-Ionen", "K- und O₂-Moleküle", "nur K⁺", "nur O²⁻"],
    1,
    "K₂O: Ionenverbindung aus 2 K⁺ und O²⁻.",
    "leicht",
    ["Kaliumoxid", "Ionen"]
  ),
  q(
    "ch-pool-21-052",
    KAP[3],
    "Le Chatelier: Bei Entzug eines Produkts aus dem Gleichgewicht:",
    [
      "verschiebt sich nichts",
      "verschiebt sich das Gleichgewicht auf die Produktseite",
      "verschiebt sich das Gleichgewicht auf die Eduktseite",
      "verschwindet der Katalysator",
      "ändert sich K",
    ],
    1,
    "Entzug eines Produkts verringert die Rückreaktion → Netto-Hinreaktion → mehr Produkte (Nachbildung).",
    "mittel",
    ["Le Chatelier"]
  ),
  q(
    "ch-pool-21-053",
    KAP[4],
    "Welche Oxidationszahl hat Blei in PbO₂?",
    ["0", "+2", "+4", "+6", "−2"],
    2,
    "PbO₂: O jeweils −2, Summe 0 → Pb + 2·(−2) = 0 → Pb = +4.",
    "mittel",
    ["Oxidationszahl", "Blei"]
  ),
  q(
    "ch-pool-21-054",
    KAP[5],
    "Ein Acetal entsteht aus Aldehyd/Keton und:",
    ["nur Wasser", "Alkohol (unter Säurekatalyse)", "nur Säure", "nur Base", "nur Salz"],
    1,
    "Acetal: Carbonyl + 2 Äquivalente Alkohol, säurekatalysiert → R₂C(OR')₂.",
    "schwer",
    ["Acetal"]
  ),
  q(
    "ch-pool-21-055",
    KAP[0],
    "Die Anzahl der Elektronen in einem neutralen Atom ist gleich:",
    [
      "der Neutronenzahl",
      "der Protonenzahl (Ordnungszahl Z)",
      "der Massenzahl",
      "immer 8",
      "der doppelten Protonenzahl",
    ],
    1,
    "Neutral: Anzahl Elektronen = Anzahl Protonen = Z.",
    "leicht",
    ["neutrales Atom"]
  ),
  q(
    "ch-pool-21-056",
    KAP[1],
    "Die Oberflächenspannung einer Flüssigkeit hat die Einheit:",
    ["J", "N/m (bzw. J/m²)", "Pa", "mol/L", "K"],
    1,
    "Oberflächenspannung γ = Kraft/Länge = N/m = J/m².",
    "mittel",
    ["Oberflächenspannung"]
  ),
  q(
    "ch-pool-21-057",
    KAP[2],
    "Welche Bindung ist in einem CaO-Kristall vorhanden?",
    ["kovalent", "Ionenbindung", "metallisch", "nur van-der-Waals", "Wasserstoffbrücke"],
    1,
    "CaO: Calciumoxid, Ionenverbindung aus Ca²⁺ und O²⁻.",
    "leicht",
    ["Calciumoxid", "Ionenbindung"]
  ),
  q(
    "ch-pool-21-058",
    KAP[3],
    "Die Reaktionswärme bei konstantem Druck entspricht:",
    ["ΔU", "ΔH", "nur ΔS", "der Aktivierungsenergie", "der Geschwindigkeitskonstante"],
    1,
    "Bei konstantem Druck: Q_p = ΔH (Reaktionsenthalpie).",
    "mittel",
    ["Reaktionsenthalpie"]
  ),
  q(
    "ch-pool-21-059",
    KAP[4],
    "Welches Element ist ein Halogen?",
    ["Sauerstoff", "Stickstoff", "Brom", "Schwefel", "Kohlenstoff"],
    2,
    "Halogene: F, Cl, Br, I, At (Gruppe 17). Brom = Br.",
    "leicht",
    ["Halogen", "Brom"]
  ),
  q(
    "ch-pool-21-060",
    KAP[5],
    "Die radikalische Substitution an Alkanen mit Chlor verläuft über:",
    [
      "nur Ionen",
      "Radikale (Cl·, R·) in Start-, Ketten- und Abbruchschritten",
      "nur Gleichgewicht",
      "nur Addition",
      "nur Eliminierung",
    ],
    1,
    "Radikalische Substitution: Start (Cl₂ → 2 Cl·), Propagation (Cl· + RH → HCl + R·; R· + Cl₂ → RCl + Cl·), Termination.",
    "mittel",
    ["radikalische Substitution", "Alkane"]
  ),
];
