/**
 * Chemie BMS Pool 20 — 60 Fragen im offiziellen MedAT-Stil (Typ A).
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

export const chemiePool20: Question[] = [
  q(
    "ch-pool-20-001",
    KAP[0],
    "Welches Teilchen hat keine elektrische Ladung?",
    ["Proton", "Elektron", "Neutron", "Kation", "Anion"],
    2,
    "Neutron: elektrisch neutral. Proton positiv, Elektron negativ.",
    "leicht",
    ["Neutron"]
  ),
  q(
    "ch-pool-20-002",
    KAP[1],
    "Die Stoffmenge n ist proportional zu:",
    [
      "nur der Masse",
      "der Teilchenzahl N (n = N/N_A)",
      "nur dem Volumen",
      "nur dem Druck",
      "der Temperatur",
    ],
    1,
    "n = N / N_A (Teilchenzahl durch Avogadro-Konstante). Auch n = m/M.",
    "leicht",
    ["Stoffmenge", "Avogadro"]
  ),
  q(
    "ch-pool-20-003",
    KAP[2],
    "Welche Verbindung ist ein Riesenmolekül (Netzwerk)?",
    ["Ethanol", "Diamant", "Methan", "Chlor", "Wasser"],
    1,
    "Diamant: Kohlenstoffatome in einem dreidimensionalen kovalenten Netzwerk (sp³).",
    "leicht",
    ["Riesenmolekül", "Diamant"]
  ),
  q(
    "ch-pool-20-004",
    KAP[3],
    "Die Umkehrbarkeit einer Reaktion wird beschrieben durch:",
    [
      "nur die Aktivierungsenergie",
      "die Gleichgewichtskonstante K und ΔG",
      "nur die Geschwindigkeit",
      "nur den Katalysator",
      "nur die Temperatur",
    ],
    1,
    "ΔG bestimmt die Richtung; K beschreibt die Gleichgewichtslage. Beide hängen mit ΔG° zusammen.",
    "mittel",
    ["Gleichgewicht", "freie Enthalpie"]
  ),
  q(
    "ch-pool-20-005",
    KAP[4],
    "Welcher pH-Wert kennzeichnet eine stark basische Lösung?",
    ["1", "5", "7", "10", "14"],
    4,
    "pH = 14: stark basisch ([OH⁻] = 1 mol/L). pH 7 = neutral.",
    "leicht",
    ["pH", "basisch"]
  ),
  q(
    "ch-pool-20-006",
    KAP[5],
    "Welche Summenformel hat Ethin?",
    ["C₂H₂", "C₂H₄", "C₂H₆", "C₂H₅OH", "C₂H₄O₂"],
    0,
    "Ethin (Acetylen): C₂H₂, C≡C-Dreifachbindung. Alkin.",
    "leicht",
    ["Ethin", "Alkin"]
  ),
  q(
    "ch-pool-20-007",
    KAP[0],
    "Die Nebenquantenzahl l kann Werte annehmen von:",
    ["nur 0", "0 bis n−1", "nur n", "nur 1", "−1 bis +1"],
    1,
    "l = 0, 1, …, n−1. Bestimmt die Form des Orbitals (s, p, d, f).",
    "mittel",
    ["Nebenquantenzahl", "l"]
  ),
  q(
    "ch-pool-20-008",
    KAP[1],
    "Die Enthalpie H ist definiert als:",
    ["U − pV", "U + pV", "nur U", "nur pV", "T·S"],
    1,
    "H = U + pV (Enthalpie = innere Energie + Druck·Volumen). Bei konstantem p: ΔH = Q_p.",
    "mittel",
    ["Enthalpie"]
  ),
  q(
    "ch-pool-20-009",
    KAP[2],
    "Welche Bindung ist in einem N₂-Molekül vorhanden?",
    ["Einfachbindung", "Doppelbindung", "Dreifachbindung", "Ionenbindung", "Metallbindung"],
    2,
    "Stickstoff: N≡N (Dreifachbindung), sehr stabil.",
    "leicht",
    ["Stickstoff", "Dreifachbindung"]
  ),
  q(
    "ch-pool-20-010",
    KAP[3],
    "Ein Gleichgewicht A + B ⇌ C + D verschiebt sich auf die Produktseite, wenn:",
    [
      "ein Produkt zugesetzt wird",
      "ein Edukt zugesetzt wird",
      "ein Katalysator zugesetzt wird",
      "die Temperatur konstant gehalten wird",
      "nichts geändert wird",
    ],
    1,
    "Mehr Edukt begünstigt die Hinreaktion (Le Chatelier). Katalysator verschiebt nicht.",
    "mittel",
    ["Le Chatelier", "Konzentration"]
  ),
  q(
    "ch-pool-20-011",
    KAP[4],
    "Welche Säure liegt in der Magensäure vor?",
    ["Schwefelsäure", "Salpetersäure", "Salzsäure", "Kohlensäure", "Phosphorsäure"],
    2,
    "Magensäure: HCl (Salzsäure), ca. 0,1 M. Aktiviert Pepsin, tötet Keime.",
    "leicht",
    ["Magensäure", "HCl"]
  ),
  q(
    "ch-pool-20-012",
    KAP[5],
    "Die Carbonylgruppe C=O kommt vor in:",
    ["Alkanen", "Aldehyden und Ketonen", "nur Alkenen", "nur Alkinen", "Alkanen und Cycloalkanen"],
    1,
    "Carbonyl C=O: Aldehyde (−CHO), Ketone (−CO−), Carbonsäuren (−COOH), Ester (−COO−).",
    "leicht",
    ["Carbonyl", "Aldehyd", "Keton"]
  ),
  q(
    "ch-pool-20-013",
    KAP[0],
    "Die Anzahl der Elektronen in der äußersten Schale (Valenzelektronen) bestimmt bei Hauptgruppenelementen:",
    [
      "die Massenzahl",
      "die Gruppe und typische Reaktivität",
      "nur die Periode",
      "nur die Isotopie",
      "die Neutronenzahl",
    ],
    1,
    "Valenzelektronen = Gruppenummer (bei Hauptgruppen 1–2, 13–18). Bestimmt chemisches Verhalten.",
    "mittel",
    ["Valenzelektronen", "Hauptgruppe"]
  ),
  q(
    "ch-pool-20-014",
    KAP[1],
    "Die Entropie S eines Stoffes ist bei tiefer Temperatur:",
    [
      "maximal",
      "minimal (3. Hauptsatz: S → 0 für T → 0)",
      "immer gleich",
      "unabhängig von T",
      "immer null",
    ],
    1,
    "3. Hauptsatz: Die Entropie eines idealen Kristalls geht bei T → 0 gegen null.",
    "mittel",
    ["Entropie", "3. Hauptsatz"]
  ),
  q(
    "ch-pool-20-015",
    KAP[2],
    "Welche Verbindung enthält Wasserstoffbrücken?",
    ["n-Hexan", "Methan", "Fluorwasserstoff (HF)", "Benzol", "Tetrachlormethan"],
    2,
    "HF: H an F, starke Wasserstoffbrücken (hoher Siedepunkt trotz kleiner molarer Masse).",
    "mittel",
    ["Wasserstoffbrücken", "HF"]
  ),
  q(
    "ch-pool-20-016",
    KAP[3],
    "Die Reaktionsenthalpie ΔH° unter Standardbedingungen kann berechnet werden aus:",
    [
      "nur der Geschwindigkeit",
      "Standardbildungsenthalpien (Hess)",
      "nur der Aktivierungsenergie",
      "nur dem Katalysator",
      "der Konzentration",
    ],
    1,
    "ΔH° = Σ ν_i · ΔH_f°(Produkte) − Σ ν_i · ΔH_f°(Edukte).",
    "mittel",
    ["Hess", "Bildungsenthalpie"]
  ),
  q(
    "ch-pool-20-017",
    KAP[4],
    "Welches Oxid reagiert mit Wasser zu einer Säure?",
    ["Na₂O", "CaO", "SO₃", "MgO", "K₂O"],
    2,
    "Nichtmetalloxide + Wasser → Säure. SO₃ + H₂O → H₂SO₄. Metalloxide → Base.",
    "mittel",
    ["Nichtmetalloxid", "Säure"]
  ),
  q(
    "ch-pool-20-018",
    KAP[5],
    "Ein Alkohol mit drei OH-Gruppen heißt:",
    ["Monol", "Diol", "Triol", "Phenol", "Enol"],
    2,
    "Triol: drei Hydroxylgruppen (z. B. Glycerin = Propan-1,2,3-triol).",
    "leicht",
    ["Triol", "Alkohol"]
  ),
  q(
    "ch-pool-20-019",
    KAP[0],
    "Welches Element hat die Elektronenkonfiguration [Ne] 3s² 3p¹?",
    ["Natrium", "Magnesium", "Aluminium", "Silicium", "Phosphor"],
    2,
    "[Ne] 3s² 3p¹ = 13 Elektronen = Aluminium (Z=13).",
    "mittel",
    ["Aluminium", "Elektronenkonfiguration"]
  ),
  q(
    "ch-pool-20-020",
    KAP[1],
    "Die freie Enthalpie G ist definiert als:",
    ["H + TS", "H − TS", "U − TS", "nur H", "nur S"],
    1,
    "G = H − TS (Gibbs-Energie). ΔG = ΔH − TΔS. Bei konstantem p, T: ΔG < 0 → Reaktion läuft freiwillig ab.",
    "mittel",
    ["freie Enthalpie", "Gibbs"]
  ),
  q(
    "ch-pool-20-021",
    KAP[2],
    "Welche Aussage zu Ionenkristallen trifft zu?",
    [
      "Sie leiten im Festkörper gut",
      "Sie haben oft hohe Schmelzpunkte",
      "Sie bestehen aus neutralen Molekülen",
      "Sie sind immer weich",
      "Sie haben keine Gitterenergie",
    ],
    1,
    "Ionenkristalle: hohe Schmelzpunkte (starke Gitterenergie), leiten in Schmelze/Lösung.",
    "mittel",
    ["Ionenkristall"]
  ),
  q(
    "ch-pool-20-022",
    KAP[3],
    "Bei einer Reaktion mit ΔG < 0:",
    [
      "ist die Reaktion im Gleichgewicht",
      "läuft die Reaktion freiwillig in die angegebene Richtung ab",
      "läuft die Reaktion nicht ab",
      "ist ΔH immer null",
      "ist ΔS immer null",
    ],
    1,
    "ΔG < 0: Reaktion ist exergon, läuft freiwillig ab (bei konstantem p, T). ΔG = 0: Gleichgewicht.",
    "mittel",
    ["freie Enthalpie", "exergon"]
  ),
  q(
    "ch-pool-20-023",
    KAP[4],
    "Welche Oxidationszahl hat Kohlenstoff in CO₂?",
    ["−4", "−2", "0", "+2", "+4"],
    4,
    "CO₂: O jeweils −2, Summe 0 → C + 2·(−2) = 0 → C = +4.",
    "leicht",
    ["Oxidationszahl", "CO2"]
  ),
  q(
    "ch-pool-20-024",
    KAP[5],
    "Die Hydrolyse eines Amids ergibt:",
    [
      "Alkohol und Ester",
      "Carbonsäure und Amin/Ammoniak",
      "nur Alkohol",
      "Aldehyd und Keton",
      "Ether",
    ],
    1,
    "Amid + H₂O (Säure oder Base katalysiert) → Carbonsäure + Ammoniak/Amin.",
    "mittel",
    ["Amid", "Hydrolyse"]
  ),
  q(
    "ch-pool-20-025",
    KAP[0],
    "Die Masse eines Protons ist etwa:",
    [
      "gleich der eines Elektrons",
      "etwa 2000-mal größer als die eines Elektrons",
      "gleich der eines Neutrons",
      "null",
      "negativ",
    ],
    2,
    "Proton und Neutron haben etwa gleiche Masse (ca. 1 u). Elektron ca. 1/1840 u.",
    "leicht",
    ["Proton", "Masse"]
  ),
  q(
    "ch-pool-20-026",
    KAP[1],
    "Die Verdampfungsenthalpie wird beim Verdampfen:",
    ["abgegeben", "aufgenommen", "nicht umgesetzt", "nur bei 100 °C umgesetzt", "verdoppelt"],
    1,
    "Verdampfen erfordert Energiezufuhr (Aufbrechen zwischenmolekularer Kräfte) → ΔH_vap > 0.",
    "leicht",
    ["Verdampfung"]
  ),
  q(
    "ch-pool-20-027",
    KAP[2],
    "Welche Bindung ist in einem Cl₂-Molekül vorhanden?",
    [
      "Ionenbindung",
      "kovalente Einfachbindung",
      "Doppelbindung",
      "Metallbindung",
      "Wasserstoffbrücke",
    ],
    1,
    "Chlor: Cl−Cl, ein gemeinsames Elektronenpaar (kovalente Einfachbindung).",
    "leicht",
    ["Chlor", "kovalente Bindung"]
  ),
  q(
    "ch-pool-20-028",
    KAP[3],
    "Die Gleichgewichtskonstante K und die freie Reaktionsenthalpie ΔG° hängen zusammen über:",
    [
      "ΔG° = R T ln K",
      "ΔG° = −R T ln K",
      "ΔG° = K",
      "ΔG° = R T / K",
      "es gibt keinen Zusammenhang",
    ],
    1,
    "ΔG° = −R T ln K. K > 1 → ΔG° < 0 (Produkte begünstigt).",
    "mittel",
    ["Gleichgewicht", "Delta G"]
  ),
  q(
    "ch-pool-20-029",
    KAP[4],
    "Welche Base ist eine starke Base?",
    ["Ammoniak", "Kaliumhydroxid (KOH)", "Wasser", "Kohlensäure", "Essigsäure"],
    1,
    "KOH ist eine starke Base (vollständig zu K⁺ + OH⁻ dissoziiert). NH₃ und H₂O sind schwache Basen.",
    "leicht",
    ["starke Base", "KOH"]
  ),
  q(
    "ch-pool-20-030",
    KAP[5],
    "Ein Lactam ist:",
    [
      "ein Lacton",
      "ein cyclisches Amid (Amid in einem Ring)",
      "ein Ether",
      "ein Alkan",
      "ein Keton",
    ],
    1,
    "Lactam: cyclisches Amid (z. B. β-Lactam in Penicillinen).",
    "schwer",
    ["Lactam"]
  ),
  q(
    "ch-pool-20-031",
    KAP[0],
    "Die Anzahl der Isotope eines Elements kann sein:",
    ["immer 1", "1 oder mehr", "immer 2", "nur bei Metallen", "immer 0"],
    1,
    "Elemente haben mindestens ein stabiles oder langlebiges Isotop; viele haben mehrere (z. B. Kohlenstoff: ¹²C, ¹³C, ¹⁴C).",
    "leicht",
    ["Isotop"]
  ),
  q(
    "ch-pool-20-032",
    KAP[1],
    "Die spezifische Wärmekapazität c hat die Einheit:",
    ["J", "J/(kg·K) oder J/(g·K)", "kg/K", "nur K", "mol/L"],
    1,
    "c = Q/(m·ΔT) → J/(kg·K) oder J/(g·K).",
    "mittel",
    ["Wärmekapazität", "Einheit"]
  ),
  q(
    "ch-pool-20-033",
    KAP[2],
    "Welche Aussage zu Elektronegativität trifft zu?",
    [
      "Sie ist für alle Elemente gleich",
      "Sie nimmt in einer Periode typischerweise von links nach rechts zu",
      "Sie nimmt in einer Gruppe von oben nach unten zu",
      "Sie ist nur für Metalle definiert",
      "Sie hat die Einheit Coulomb",
    ],
    1,
    "EN nimmt in einer Periode von links nach rechts zu (Ausnahme Edelgase) und in einer Gruppe von oben nach unten ab.",
    "mittel",
    ["Elektronegativität"]
  ),
  q(
    "ch-pool-20-034",
    KAP[3],
    "Ein Katalysator ändert die Aktivierungsenergie und:",
    [
      "die Gleichgewichtslage",
      "die Reaktionsenthalpie ΔH",
      "nicht die Gleichgewichtskonstante K",
      "die Stöchiometrie",
      "die Produktzusammensetzung",
    ],
    2,
    "Katalysator senkt E_A, ändert aber nicht K, ΔH oder Stöchiometrie.",
    "mittel",
    ["Katalysator"]
  ),
  q(
    "ch-pool-20-035",
    KAP[4],
    "Welches Salz ist gut wasserlöslich?",
    ["AgCl", "PbCl₂", "KNO₃", "BaSO₄", "CaCO₃"],
    2,
    "KNO₃ (Kaliumnitrat) ist gut löslich. AgCl, PbCl₂, BaSO₄, CaCO₃ schwer löslich.",
    "leicht",
    ["Löslichkeit", "Salze"]
  ),
  q(
    "ch-pool-20-036",
    KAP[5],
    "Die Addition von Wasser an ein Alkin (mit Katalysator) kann ergeben:",
    ["Alkan", "Alken oder Keton (je nach Struktur)", "nur Alkan", "nur Ester", "nur Säure"],
    1,
    "Alkin + H₂O (Hg²⁺/H⁺) → Enol → Keton (oder Aldehyd bei Ethin). Markovnikov.",
    "mittel",
    ["Alkin", "Hydratation"]
  ),
  q(
    "ch-pool-20-037",
    KAP[0],
    "Welches Element hat 12 Protonen?",
    ["Natrium", "Magnesium", "Aluminium", "Silicium", "Phosphor"],
    1,
    "Z = 12 = Magnesium (Mg).",
    "leicht",
    ["Magnesium", "Ordnungszahl"]
  ),
  q(
    "ch-pool-20-038",
    KAP[1],
    "Die Schmelzenthalpie ΔH_schmelz ist:",
    [
      "die beim Erstarren freigesetzte Energie",
      "die beim Schmelzen aufgenommene Energie",
      "immer null",
      "die Verdampfungsenthalpie",
      "nur bei Metallen definiert",
    ],
    1,
    "Beim Schmelzen wird Energie aufgenommen (ΔH_schmelz > 0). Beim Erstarren wird sie abgegeben.",
    "mittel",
    ["Schmelzenthalpie"]
  ),
  q(
    "ch-pool-20-039",
    KAP[2],
    "Welche Geometrie hat ein CO₂-Molekül?",
    ["gewinkelt", "linear", "tetraedrisch", "trigonal planar", "pyramidal"],
    1,
    "CO₂: O=C=O, linear (sp-Hybridisierung am C).",
    "leicht",
    ["CO2", "Geometrie"]
  ),
  q(
    "ch-pool-20-040",
    KAP[3],
    "Die Reaktionsordnung wird experimentell bestimmt durch:",
    [
      "nur die Stöchiometrie",
      "Variation der Anfangskonzentrationen und Messung der Anfangsgeschwindigkeit",
      "nur die Temperatur",
      "nur den Katalysator",
      "die Gleichgewichtskonstante",
    ],
    1,
    "Aus v = k·[A]^a·[B]^b: Konzentrationen variieren, v messen → Exponenten a, b bestimmen.",
    "mittel",
    ["Reaktionsordnung"]
  ),
  q(
    "ch-pool-20-041",
    KAP[4],
    "Welche Oxidationszahl hat Stickstoff in NH₄⁺?",
    ["+5", "+3", "0", "−3", "+1"],
    3,
    "NH₄⁺: H jeweils +1, Summe +1 → N + 4·(+1) = +1 → N = −3.",
    "mittel",
    ["Oxidationszahl", "Ammonium"]
  ),
  q(
    "ch-pool-20-042",
    KAP[5],
    "Ein Phosphat hat die Form:",
    ["−PO₃", "PO₄³⁻ bzw. −OPO₃²⁻", "−OH", "−COOH", "−NH₂"],
    1,
    "Phosphat: PO₄³⁻ (Orthophosphat). Organische Phosphate: −OPO₃²⁻ oder verestert.",
    "mittel",
    ["Phosphat"]
  ),
  q(
    "ch-pool-20-043",
    KAP[0],
    "Die maximale Anzahl der Elektronen in einem f-Orbital beträgt:",
    ["1", "2", "6", "10", "14"],
    1,
    "Jedes Orbital maximal 2 Elektronen. Es gibt 7 f-Orbitale → maximal 14 f-Elektronen.",
    "leicht",
    ["f-Orbital", "Orbital"]
  ),
  q(
    "ch-pool-20-044",
    KAP[1],
    "Die innere Energie U eines Systems kann geändert werden durch:",
    [
      "nur Volumenänderung",
      "Wärme Q und Arbeit W (ΔU = Q + W)",
      "nur Temperatur",
      "nur Druck",
      "nur Stoffmenge",
    ],
    1,
    "1. Hauptsatz: ΔU = Q + W (Wärme + Arbeit).",
    "mittel",
    ["innere Energie", "1. Hauptsatz"]
  ),
  q(
    "ch-pool-20-045",
    KAP[2],
    "Welche Verbindung hat die höchste Schmelztemperatur unter MgO, NaCl, Eis, Ethanol, Benzol?",
    ["NaCl", "Ethanol", "Eis", "Benzol", "MgO"],
    4,
    "MgO: Ionenverbindung mit Mg²⁺ und O²⁻, kleine Ionen, hohe Ladung → sehr hoher Schmelzpunkt. NaCl, Eis, Ethanol, Benzol niedriger.",
    "mittel",
    ["Schmelzpunkt", "MgO"]
  ),
  q(
    "ch-pool-20-046",
    KAP[3],
    "Bei einer Reaktion mit ΔG > 0:",
    [
      "läuft die Hinreaktion freiwillig ab",
      "läuft die Rückreaktion freiwillig ab",
      "ist das System im Gleichgewicht",
      "ändert sich nichts",
      "ist ΔH immer positiv",
    ],
    1,
    "ΔG > 0: Hinreaktion nicht freiwillig; die Rückreaktion (mit ΔG < 0) läuft freiwillig ab.",
    "mittel",
    ["freie Enthalpie"]
  ),
  q(
    "ch-pool-20-047",
    KAP[4],
    "Welche Aussage zu Pufferlösungen trifft zu?",
    [
      "Sie haben immer pH 7",
      "Sie halten den pH bei Zugabe von wenig Säure oder Base annähernd konstant",
      "Sie enthalten keine Säure oder Base",
      "Sie ändern den pH stark",
      "Sie sind immer stark sauer",
    ],
    1,
    "Puffer: konjugiertes Säure-Base-Paar puffert H⁺/OH⁻-Zugaben ab; pH ändert sich nur wenig.",
    "mittel",
    ["Puffer"]
  ),
  q(
    "ch-pool-20-048",
    KAP[5],
    "Die Bromierung von Benzol erfordert:",
    [
      "keinen Katalysator",
      "einen Katalysator (z. B. FeBr₃ oder Fe)",
      "nur UV-Licht",
      "nur hohe Temperatur",
      "nur Druck",
    ],
    1,
    "Benzol reagiert mit Br₂ nur in Gegenwart eines Katalysators (z. B. FeBr₃) zu Brombenzol (elektrophile Substitution).",
    "mittel",
    ["Benzol", "Bromierung"]
  ),
  q(
    "ch-pool-20-049",
    KAP[0],
    "Die 1. Ionisierungsenergie ist die Energie für:",
    [
      "die Aufnahme eines Elektrons",
      "die Abgabe eines Elektrons aus dem neutralen Atom",
      "die Abgabe eines Protons",
      "die Abgabe eines Neutrons",
      "die Bildung einer Bindung",
    ],
    1,
    "1. Ionisierungsenergie: M → M⁺ + e⁻ (Abtrennung des ersten Elektrons).",
    "mittel",
    ["Ionisierungsenergie"]
  ),
  q(
    "ch-pool-20-050",
    KAP[1],
    "Die kritische Temperatur ist die Temperatur, oberhalb der:",
    [
      "eine Flüssigkeit nicht mehr existiert (bei beliebigem Druck)",
      "ein Gas nicht mehr verflüssigt werden kann",
      "kein Stoff existiert",
      "immer 0 °C ist",
      "der Druck null ist",
    ],
    1,
    "Oberhalb der kritischen Temperatur gibt es keine flüssige Phase mehr; das Fluid ist überkritisch.",
    "mittel",
    ["kritische Temperatur"]
  ),
  q(
    "ch-pool-20-051",
    KAP[2],
    "Welche Bindung ist in einem LiF-Kristall vorhanden?",
    ["kovalent", "Ionenbindung", "metallisch", "nur van-der-Waals", "Wasserstoffbrücke"],
    1,
    "LiF: Lithiumfluorid, Ionenverbindung aus Li⁺ und F⁻.",
    "leicht",
    ["Lithiumfluorid", "Ionenbindung"]
  ),
  q(
    "ch-pool-20-052",
    KAP[3],
    "Die Geschwindigkeit einer Reaktion kann abnehmen durch:",
    [
      "Temperaturerhöhung",
      "Temperaturerniedrigung",
      "Katalysatorzugabe",
      "Konzentrationserhöhung",
      "Druckerhöhung (bei Gasen)",
    ],
    1,
    "Niedrigere Temperatur → geringere kinetische Energie → langsamere Reaktion.",
    "leicht",
    ["Reaktionsgeschwindigkeit", "Temperatur"]
  ),
  q(
    "ch-pool-20-053",
    KAP[4],
    "Welche Oxidationszahl hat Schwefel in H₂S?",
    ["+6", "+2", "0", "−2", "+4"],
    3,
    "H₂S: H jeweils +1, Summe 0 → S + 2·(+1) = 0 → S = −2.",
    "mittel",
    ["Oxidationszahl", "Schwefelwasserstoff"]
  ),
  q(
    "ch-pool-20-054",
    KAP[5],
    "Ein Keton entsteht aus einem sekundären Alkohol durch:",
    ["Reduktion", "Oxidation", "Substitution", "Addition", "Eliminierung"],
    1,
    "Sekundärer Alkohol → Oxidation (z. B. K₂Cr₂O₇, KMnO₄) → Keton.",
    "mittel",
    ["Keton", "Oxidation"]
  ),
  q(
    "ch-pool-20-055",
    KAP[0],
    "Welche Gruppe des PSE enthält die Erdalkalimetalle?",
    ["Gruppe 1", "Gruppe 2", "Gruppe 17", "Gruppe 18", "Gruppe 16"],
    1,
    "Erdalkalimetalle: Be, Mg, Ca, Sr, Ba, Ra – Gruppe 2.",
    "leicht",
    ["Erdalkalimetalle", "Periodensystem"]
  ),
  q(
    "ch-pool-20-056",
    KAP[1],
    "Die Siedetemperatur von Wasser auf dem Mount Everest (niedriger Luftdruck) ist:",
    ["höher als 100 °C", "niedriger als 100 °C", "genau 100 °C", "0 °C", "unabhängig vom Druck"],
    1,
    "Sieden, wenn Dampfdruck = Außendruck. Auf dem Everest ist p geringer → Wasser siedet bei tieferer Temperatur (< 100 °C).",
    "mittel",
    ["Siedepunkt", "Druck"]
  ),
  q(
    "ch-pool-20-057",
    KAP[2],
    "Welche Aussage zu Metallbindung trifft zu?",
    [
      "Metalle sind nicht leitfähig",
      "Die Leitfähigkeit beruht auf beweglichen (delokalisierten) Elektronen",
      "Es gibt nur Ionen",
      "Metalle haben keine Valenzelektronen",
      "Die Bindung ist kovalent",
    ],
    1,
    "Metallbindung: delokalisiertes Elektronengas → elektrische und thermische Leitfähigkeit.",
    "mittel",
    ["Metallbindung"]
  ),
  q(
    "ch-pool-20-058",
    KAP[3],
    "Die Gleichgewichtskonstante K hat bei gegebener Temperatur einen festen Wert, weil:",
    [
      "der Katalysator sie festlegt",
      "die Konzentrationen im Gleichgewicht durch das Massenwirkungsgesetz verknüpft sind",
      "der Druck sie festlegt",
      "sie immer 1 ist",
      "die Reaktion dann stoppt",
    ],
    1,
    "Massenwirkungsgesetz: Bei Gleichgewicht ist [C]^c[D]^d/([A]^a[B]^b) = K (konstant bei fester T).",
    "mittel",
    ["Massenwirkungsgesetz"]
  ),
  q(
    "ch-pool-20-059",
    KAP[4],
    "Welches Element ist ein Edelgas?",
    ["Chlor", "Stickstoff", "Argon", "Sauerstoff", "Kohlenstoff"],
    2,
    "Edelgase: He, Ne, Ar, Kr, Xe, Rn (Gruppe 18).",
    "leicht",
    ["Edelgas", "Argon"]
  ),
  q(
    "ch-pool-20-060",
    KAP[5],
    "Die Friedel-Crafts-Alkylierung führt am Aromaten zu:",
    [
      "Addition",
      "substituiertem Aromat (Alkylrest wird eingeführt)",
      "Oxidation",
      "Reduktion",
      "Esterbildung",
    ],
    1,
    "Friedel-Crafts: elektrophile Substitution am Benzol mit Alkylhalogenid (Katalysator: AlCl₃) → Alkylbenzol.",
    "mittel",
    ["Friedel-Crafts", "Aromat"]
  ),
];
