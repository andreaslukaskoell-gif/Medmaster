/**
 * Chemie BMS Pool 14 — 60 Fragen im offiziellen MedAT-Stil (Typ A).
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

export const chemiePool14: Question[] = [
  q(
    "ch-pool-14-001",
    KAP[0],
    "Welche Teilchen befinden sich im Atomkern?",
    [
      "Nur Elektronen",
      "Protonen und Neutronen",
      "Nur Protonen",
      "Protonen und Elektronen",
      "Neutronen und Elektronen",
    ],
    1,
    "Der Kern enthält Protonen (positiv) und Neutronen (neutral). Elektronen umkreisen den Kern.",
    "leicht",
    ["Atomkern"]
  ),
  q(
    "ch-pool-14-002",
    KAP[1],
    "Bei konstantem Druck verdoppelt sich das Volumen eines idealen Gases, wenn:",
    [
      "der Druck verdoppelt wird",
      "die Temperatur (in Kelvin) verdoppelt wird",
      "die Stoffmenge halbiert wird",
      "die Dichte verdoppelt wird",
      "die Masse konstant bleibt",
    ],
    1,
    "Charles: V ∝ T bei p = const. Verdopplung von T (in K) → Verdopplung von V.",
    "mittel",
    ["Charles", "Gasgesetze"]
  ),
  q(
    "ch-pool-14-003",
    KAP[2],
    "Welche Verbindung ist ein typischer Ionenkristall?",
    ["Wasser", "Kochsalz (NaCl)", "Methan", "Ethanol", "Benzol"],
    1,
    "NaCl: Natrium- und Chloridionen im Gitter; typischer Ionenkristall. Die anderen sind molekular.",
    "leicht",
    ["Ionenkristall", "NaCl"]
  ),
  q(
    "ch-pool-14-004",
    KAP[3],
    "Ein Oxidationsmittel:",
    [
      "gibt Elektronen ab",
      "nimmt Elektronen auf",
      "gibt Protonen ab",
      "nimmt Protonen auf",
      "ändert die Temperatur",
    ],
    1,
    "Oxidationsmittel nimmt Elektronen auf (wird reduziert). Reduktionsmittel gibt Elektronen ab (wird oxidiert).",
    "mittel",
    ["Oxidationsmittel", "Redox"]
  ),
  q(
    "ch-pool-14-005",
    KAP[4],
    "Eine Lösung mit [OH⁻] = 10⁻³ mol/L hat bei 25 °C den pH:",
    ["3", "11", "7", "−3", "14"],
    1,
    "pOH = 3 → pH = 14 − 3 = 11. Die Lösung ist basisch.",
    "leicht",
    ["pH", "pOH"]
  ),
  q(
    "ch-pool-14-006",
    KAP[5],
    "Butan (C₄H₁₀) hat die Summenformel eines:",
    ["Alkens", "Alkins", "Alkans", "Alkohols", "Aldehyds"],
    2,
    "C₄H₁₀ entspricht CₙH₂ₙ₊₂ → Alkan. Butan ist ein gesättigter Kohlenwasserstoff.",
    "leicht",
    ["Alkane", "Butan"]
  ),
  q(
    "ch-pool-14-007",
    KAP[0],
    "Die Massenzahl A eines Isotops ist definiert als:",
    [
      "nur Protonenzahl",
      "Protonenzahl + Neutronenzahl",
      "nur Neutronenzahl",
      "Elektronenzahl",
      "Ordnungszahl",
    ],
    1,
    "A = Z + N (Protonen + Neutronen). Sie steht links oben beim Elementsymbol.",
    "leicht",
    ["Massenzahl", "Isotop"]
  ),
  q(
    "ch-pool-14-008",
    KAP[1],
    "Welcher Aggregatzustand hat Wasser bei 120 °C und Normaldruck?",
    ["fest", "flüssig", "gasförmig", "überkritisch", "je nach Volumen unterschiedlich"],
    2,
    "Bei 1 bar siedet Wasser bei 100 °C. Bei 120 °C ist Wasser Dampf (gasförmig).",
    "leicht",
    ["Aggregatzustand", "Wasser"]
  ),
  q(
    "ch-pool-14-009",
    KAP[2],
    "Welche Bindung ist am stärksten polar?",
    ["C−C", "C−H", "C−F", "C−N", "N−H"],
    2,
    "C−F hat die größte Elektronegativitätsdifferenz unter den Optionen → stärkste Polarität.",
    "mittel",
    ["polare Bindung", "Elektronegativität"]
  ),
  q(
    "ch-pool-14-010",
    KAP[3],
    "Die Aktivierungsenergie ist:",
    [
      "die Reaktionsenthalpie",
      "die Energie, die zur Einleitung der Reaktion nötig ist",
      "die freie Enthalpie",
      "immer null",
      "die Gleichgewichtskonstante",
    ],
    1,
    "Aktivierungsenergie: Energiebarriere, die überwunden werden muss, damit die Reaktion ablaufen kann.",
    "mittel",
    ["Aktivierungsenergie"]
  ),
  q(
    "ch-pool-14-011",
    KAP[4],
    "Welche Aussage zu Salzen trifft zu?",
    [
      "Sie sind immer sauer",
      "Sie entstehen bei Neutralisation aus Säure und Base",
      "Sie leiten nie Strom",
      "Sie haben immer pH 7",
      "Sie sind immer organisch",
    ],
    1,
    "Neutralisation: Säure + Base → Salz + Wasser. Salze können in Lösung Ionen liefern und Strom leiten.",
    "leicht",
    ["Salz", "Neutralisation"]
  ),
  q(
    "ch-pool-14-012",
    KAP[5],
    "Ein sekundärer Alkohol hat die OH-Gruppe an einem C-Atom mit:",
    [
      "einem C-Nachbarn",
      "zwei C-Nachbarn",
      "drei C-Nachbarn",
      "keinem C-Nachbarn",
      "vier C-Nachbarn",
    ],
    1,
    "Sekundär: C−OH mit zwei weiteren C-Atomen. Primär: 1, tertiär: 3.",
    "mittel",
    ["Alkohol", "sekundär"]
  ),
  q(
    "ch-pool-14-013",
    KAP[0],
    "In welcher Gruppe des PSE steht Chlor?",
    ["Gruppe 1", "Gruppe 2", "Gruppe 16", "Gruppe 17", "Gruppe 18"],
    3,
    "Chlor (Cl) gehört zu den Halogenen, Gruppe 17 (7 Valenzelektronen).",
    "leicht",
    ["Periodensystem", "Chlor"]
  ),
  q(
    "ch-pool-14-014",
    KAP[1],
    "Die kritische Temperatur ist:",
    [
      "die Siedetemperatur bei 1 bar",
      "die Temperatur, oberhalb der ein Gas nicht mehr durch Druck verflüssigt werden kann",
      "0 °C",
      "die Schmelztemperatur",
      "immer 100 °C",
    ],
    1,
    "Oberhalb der kritischen Temperatur gibt es keine flüssige Phase mehr; das Fluid ist überkritisch.",
    "schwer",
    ["kritische Temperatur"]
  ),
  q(
    "ch-pool-14-015",
    KAP[2],
    "London-Kräfte (Dispersionskräfte) sind:",
    [
      "stärker als kovalente Bindungen",
      "schwache zwischenmolekulare Kräfte zwischen allen Molekülen",
      "nur zwischen polaren Molekülen",
      "nur in Festkörpern",
      "gleich Wasserstoffbrücken",
    ],
    1,
    "London-Kräfte entstehen durch temporäre Dipole und wirken zwischen allen Molekülen; sie sind relativ schwach.",
    "mittel",
    ["London-Kräfte", "van-der-Waals"]
  ),
  q(
    "ch-pool-14-016",
    KAP[3],
    "Bei der Reaktion 2 KClO₃ → 2 KCl + 3 O₂ handelt es sich um:",
    ["Synthese", "Neutralisation", "Zersetzung", "Substitution", "Addition"],
    2,
    "Eine Verbindung (KClO₃) zerfällt in zwei einfachere Stoffe (KCl und O₂) → Zersetzung.",
    "leicht",
    ["Zersetzung", "Reaktionstyp"]
  ),
  q(
    "ch-pool-14-017",
    KAP[4],
    "Hydroxidionen (OH⁻) sind charakteristisch für:",
    ["Säuren", "Basen in wässriger Lösung", "Salze", "reine Alkohole", "Oxide"],
    1,
    "Basen liefern in Wasser OH⁻ (Arrhenius). NaOH → Na⁺ + OH⁻.",
    "leicht",
    ["Base", "Hydroxid"]
  ),
  q(
    "ch-pool-14-018",
    KAP[5],
    "Welche Verbindung reagiert mit Bromwasser unter Entfärbung?",
    ["Hexan", "Cyclohexan", "Ethen", "Benzol (ohne Katalysator)", "Methan"],
    2,
    "Alkene und Alkine addieren Brom; Bromwasser entfärbt sich. Alkane und Benzol (ohne Katalysator) nicht.",
    "mittel",
    ["Bromwassertest", "Alkene"]
  ),
  q(
    "ch-pool-14-019",
    KAP[0],
    "Wie viele Elektronenschalen hat ein Atom der 4. Periode voll besetzt?",
    ["1", "2", "3", "4", "5"],
    3,
    "Die Periode gibt die höchste besetzte Schale an. 4. Periode → mindestens 4 Schalen (n=1 bis n=4).",
    "leicht",
    ["Periode", "Schale"]
  ),
  q(
    "ch-pool-14-020",
    KAP[1],
    "Die Einheit der Stoffmenge ist:",
    ["Gramm", "Mol", "Liter", "Pascal", "Kelvin"],
    1,
    "Stoffmenge n hat die SI-Einheit Mol (mol).",
    "leicht",
    ["Stoffmenge", "Mol"]
  ),
  q(
    "ch-pool-14-021",
    KAP[2],
    "Welche Aussage zur Hydratation von Ionen trifft zu?",
    [
      "Sie schwächt die Gitterenergie",
      "Wasser umgibt Ionen und stabilisiert sie in Lösung",
      "Sie tritt nur bei Kationen auf",
      "Sie verhindert Dissoziation",
      "Sie ist unabhängig von der Ionenladung",
    ],
    1,
    "Hydratation: Wassermoleküle umgeben Ionen (Hydrathülle); die Hydratationsenergie trägt zur Lösungsenthalpie bei.",
    "mittel",
    ["Hydratation", "Ionen"]
  ),
  q(
    "ch-pool-14-022",
    KAP[3],
    "Le Chatelier: Wird bei N₂ + 3 H₂ ⇌ 2 NH₃ Stickstoff zugegeben, verschiebt sich das Gleichgewicht:",
    [
      "nicht",
      "auf die Eduktseite",
      "auf die Produktseite",
      "zu niedrigerem Druck",
      "nur bei Katalysator",
    ],
    2,
    "Mehr Edukt (N₂) begünstigt die Hinreaktion → mehr NH₃ (Produktseite).",
    "mittel",
    ["Le Chatelier", "Konzentration"]
  ),
  q(
    "ch-pool-14-023",
    KAP[4],
    "Welche Oxidationszahl hat Mangan in KMnO₄ (Kaliumpermanganat)?",
    ["+2", "+4", "+7", "−1", "0"],
    2,
    "K⁺, O jeweils −2. Summe 0: +1 + Mn + 4·(−2) = 0 → Mn = +7.",
    "mittel",
    ["Oxidationszahl", "Permanganat"]
  ),
  q(
    "ch-pool-14-024",
    KAP[5],
    "Die Veresterung ist eine Reaktion zwischen:",
    [
      "Alkan und Alken",
      "Carbonsäure und Alkohol",
      "zwei Aldehyden",
      "Alkin und Halogen",
      "Amin und Alkohol",
    ],
    1,
    "Veresterung: Carbonsäure + Alkohol ⇌ Ester + Wasser (saurer Katalysator).",
    "mittel",
    ["Veresterung", "Ester"]
  ),
  q(
    "ch-pool-14-025",
    KAP[0],
    "Ein Element der 2. Hauptgruppe hat wie viele Valenzelektronen?",
    ["1", "2", "3", "7", "8"],
    1,
    "Hauptgruppe 2 (Erdalkalimetalle): 2 Valenzelektronen (ns²).",
    "leicht",
    ["Valenzelektronen", "Hauptgruppe"]
  ),
  q(
    "ch-pool-14-026",
    KAP[1],
    "Der Tripelpunkt einer Substanz ist:",
    [
      "der Siedepunkt",
      "der Punkt, an dem fest, flüssig und gasförmig im Gleichgewicht stehen",
      "der Schmelzpunkt bei 0 bar",
      "nur für Wasser definiert",
      "immer bei 0 °C",
    ],
    1,
    "Am Tripelpunkt koexistieren feste, flüssige und gasförmige Phase im Gleichgewicht (eindeutige p,T-Kombination).",
    "mittel",
    ["Tripelpunkt"]
  ),
  q(
    "ch-pool-14-027",
    KAP[2],
    "Welche Geometrie hat ein Methan-Molekül (CH₄)?",
    ["quadratisch", "linear", "tetraedrisch", "trigonal planar", "oktaedrisch"],
    2,
    "CH₄: Kohlenstoff sp³-hybridisiert, 4 Bindungen → tetraedrische Geometrie (ca. 109,5°).",
    "mittel",
    ["Methan", "Geometrie"]
  ),
  q(
    "ch-pool-14-028",
    KAP[3],
    "Die Reaktionsgeschwindigkeit wird unter anderem erhöht durch:",
    [
      "Verdünnung",
      "Temperaturerhöhung",
      "Entfernen des Katalysators",
      "Verminderung der Konzentration",
      "Abkühlung",
    ],
    1,
    "Höhere Temperatur erhöht die kinetische Energie und die Reaktionsgeschwindigkeit; oft auch Katalysator und höhere Konzentration.",
    "leicht",
    ["Reaktionsgeschwindigkeit", "Temperatur"]
  ),
  q(
    "ch-pool-14-029",
    KAP[4],
    "Welcher Stoff wirkt als Ampholyt?",
    ["nur HCl", "nur NaOH", "Wasser (H₂O)", "NaCl", "O₂"],
    2,
    "Wasser kann H⁺ abgeben (Base) oder aufnehmen (Säure) → Ampholyt. Auch HCO₃⁻, H₂PO₄⁻ etc.",
    "mittel",
    ["Ampholyt", "Wasser"]
  ),
  q(
    "ch-pool-14-030",
    KAP[5],
    "Ethansäure ist ein anderer Name für:",
    ["Ethanol", "Essigsäure", "Ethen", "Ethin", "Ameisensäure"],
    1,
    "Ethansäure = Essigsäure = CH₃COOH. Ameisensäure = Methansäure = HCOOH.",
    "leicht",
    ["Essigsäure", "Ethansäure"]
  ),
  q(
    "ch-pool-14-031",
    KAP[0],
    "Die Anzahl der Neutronen in ¹⁹F beträgt:",
    ["9", "10", "19", "28", "8"],
    1,
    "¹⁹F: A=19, Z=9 (Fluor). Neutronen N = A − Z = 10.",
    "leicht",
    ["Neutronen", "Isotop"]
  ),
  q(
    "ch-pool-14-032",
    KAP[1],
    "Ein ideales Gas bei 2 bar und 300 K hat bei 1 bar (T konstant) welches Volumen (bezogen auf das Ausgangsvolumen V)?",
    ["V/2", "2V", "V", "V/4", "4V"],
    1,
    "Boyle: p₁V₁ = p₂V₂. 2·V = 1·V₂ → V₂ = 2V.",
    "mittel",
    ["Boyle", "ideales Gas"]
  ),
  q(
    "ch-pool-14-033",
    KAP[2],
    "Welche Aussage zu sp³-Hybridisierung trifft zu?",
    [
      "Es gibt nur ein Orbital",
      "Kohlenstoff bildet 4 gleichwertige Bindungen (z. B. in CH₄)",
      "Sie kommt nur bei Metallen vor",
      "Es entstehen nur Doppelbindungen",
      "Sie gilt nur für Sauerstoff",
    ],
    1,
    "sp³: Ein s- und drei p-Orbitale mischen zu 4 äquivalenten Orbitalen (Tetraeder, z. B. CH₄, NH₃).",
    "mittel",
    ["Hybridisierung", "sp3"]
  ),
  q(
    "ch-pool-14-034",
    KAP[3],
    "Bei einer Redoxreaktion:",
    [
      "werden nur Protonen übertragen",
      "ändert sich die Oxidationszahl mindestens eines Elements",
      "bleiben alle Oxidationszahlen konstant",
      "entsteht immer Wasser",
      "reagieren nur Metalle",
    ],
    1,
    "Redox: Elektronenübertragung; mindestens ein Element wird oxidiert (Oxidationszahl steigt) und eines reduziert (sinkt).",
    "mittel",
    ["Redox", "Oxidationszahl"]
  ),
  q(
    "ch-pool-14-035",
    KAP[4],
    "Salzsäure (HCl) in Wasser liegt vor allem vor als:",
    ["HCl-Moleküle", "H₃O⁺ und Cl⁻", "H⁺ und Cl⁻ getrennt", "nur Cl⁻", "H₂ und Cl₂"],
    1,
    "Starke Säure: HCl + H₂O → H₃O⁺ + Cl⁻. In Wasser liegen praktisch nur H₃O⁺ und Cl⁻ vor.",
    "leicht",
    ["Salzsäure", "Dissoziation"]
  ),
  q(
    "ch-pool-14-036",
    KAP[5],
    "Ein Ether enthält die funktionelle Gruppe:",
    ["−OH", "−COOH", "−O− (Sauerstoff zwischen zwei C-Atomen)", "−CHO", "−NH₂"],
    2,
    "Ether: R−O−R'. Zwei Kohlenstoffatome sind über ein Sauerstoffatom verbunden.",
    "mittel",
    ["Ether", "funktionelle Gruppe"]
  ),
  q(
    "ch-pool-14-037",
    KAP[0],
    "Welches Element hat die höchste Elektronegativität?",
    ["Kohlenstoff", "Stickstoff", "Sauerstoff", "Fluor", "Chlor"],
    3,
    "Fluor hat die höchste Elektronegativität (EN ≈ 4,0 nach Pauling).",
    "leicht",
    ["Elektronegativität", "Fluor"]
  ),
  q(
    "ch-pool-14-038",
    KAP[1],
    "Die molare Masse M hat die Einheit:",
    ["mol", "g/mol", "g", "L/mol", "mol/L"],
    1,
    "Molare Masse M = Masse pro Stoffmenge → Einheit g/mol (oder kg/mol).",
    "leicht",
    ["molare Masse"]
  ),
  q(
    "ch-pool-14-039",
    KAP[2],
    "In einem Diamanten sind die Kohlenstoffatome:",
    [
      "molekular gebunden",
      "in einem Riesenmolekül (Netzwerk) kovalent verknüpft",
      "ionisch gebunden",
      "nur durch van-der-Waals-Kräfte zusammengehalten",
      "metallisch gebunden",
    ],
    1,
    "Diamant: Kohlenstoff-Riesenmolekül (sp³), jedes C mit 4 C-Atomen verbunden; sehr hart, nicht leitend.",
    "mittel",
    ["Diamant", "Riesenmolekül"]
  ),
  q(
    "ch-pool-14-040",
    KAP[3],
    "Ein chemisches Gleichgewicht ist:",
    [
      "statisch (keine Reaktion mehr)",
      "dynamisch (Hin- und Rückreaktion laufen weiter)",
      "nur bei 0 °C möglich",
      "unabhängig von der Temperatur",
      "immer auf der Produktseite",
    ],
    1,
    "Im Gleichgewicht laufen Hin- und Rückreaktion weiter, aber mit gleicher Geschwindigkeit → Konzentrationen konstant.",
    "mittel",
    ["Gleichgewicht", "dynamisch"]
  ),
  q(
    "ch-pool-14-041",
    KAP[4],
    "Welche Oxidationszahl hat Eisen in Fe₂O₃?",
    ["0", "+2", "+3", "+4", "−2"],
    2,
    "O hat −2, Summe 0: 2·Fe + 3·(−2) = 0 → Fe = +3. Fe₂O₃ = Eisen(III)-oxid.",
    "mittel",
    ["Oxidationszahl", "Eisen"]
  ),
  q(
    "ch-pool-14-042",
    KAP[5],
    "Ein Amin enthält die funktionelle Gruppe:",
    ["−OH", "−COOH", "−NH₂ (bzw. −NR₂)", "−CHO", "−O−"],
    2,
    "Amine: −NH₂ (primär), −NHR (sekundär), −NR₂ (tertiär). Stickstoff mit freiem Elektronenpaar.",
    "mittel",
    ["Amin", "funktionelle Gruppe"]
  ),
  q(
    "ch-pool-14-043",
    KAP[0],
    "Die K-Schale (n=1) kann maximal wie viele Elektronen aufnehmen?",
    ["1", "2", "8", "18", "32"],
    1,
    "Maximale Elektronenzahl pro Schale: 2n². n=1 → 2·1 = 2.",
    "leicht",
    ["Schale", "K-Schale"]
  ),
  q(
    "ch-pool-14-044",
    KAP[1],
    "Was beschreibt die Konzentration c?",
    [
      "Masse pro Volumen",
      "Stoffmenge pro Volumen",
      "Volumen pro Stoffmenge",
      "Teilchenzahl",
      "Dichte",
    ],
    1,
    "Stoffmengenkonzentration c = n/V, Einheit mol/L (bzw. mol/m³).",
    "leicht",
    ["Konzentration"]
  ),
  q(
    "ch-pool-14-045",
    KAP[2],
    "Welche Bindungslänge ist bei C−C-Einfach-, Doppel- und Dreifachbindung zu erwarten?",
    [
      "Einfach > Doppel > Dreifach",
      "Doppel > Einfach > Dreifach",
      "Dreifach < Doppel < Einfach",
      "alle gleich",
      "Dreifach > Einfach > Doppel",
    ],
    2,
    "Mehrfachbindungen sind kürzer und stärker: C≡C < C=C < C−C.",
    "mittel",
    ["Bindungslänge", "Kohlenstoff"]
  ),
  q(
    "ch-pool-14-046",
    KAP[3],
    "Die freie Enthalpie ΔG bestimmt:",
    [
      "nur die Reaktionsgeschwindigkeit",
      "die Richtung und das Gleichgewicht (bei konstantem p, T)",
      "nur die Aktivierungsenergie",
      "nur bei Katalysatoren",
      "nur in der Gasphase",
    ],
    1,
    "ΔG < 0: Reaktion läuft freiwillig ab. ΔG = 0: Gleichgewicht. ΔG = ΔH − TΔS.",
    "mittel",
    ["freie Enthalpie", "Delta G"]
  ),
  q(
    "ch-pool-14-047",
    KAP[4],
    "Lauge ist eine Bezeichnung für:",
    ["eine Säure", "eine wässrige Lösung einer Base", "ein Salz", "reines Wasser", "ein Oxid"],
    1,
    "Lauge = wässrige Lösung einer Base (z. B. Natronlauge = NaOH in Wasser).",
    "leicht",
    ["Lauge", "Base"]
  ),
  q(
    "ch-pool-14-048",
    KAP[5],
    "Welche Verbindung hat eine C≡C-Dreifachbindung?",
    ["Ethan", "Ethen", "Ethin", "Benzol", "Cyclohexan"],
    2,
    "Ethin (Acetylen) C₂H₂ hat eine C≡C-Dreifachbindung (Alkin).",
    "leicht",
    ["Alkin", "Ethin"]
  ),
  q(
    "ch-pool-14-049",
    KAP[0],
    "Ein Atom mit 15 Protonen ist:",
    ["Stickstoff", "Phosphor", "Sauerstoff", "Schwefel", "Chlor"],
    1,
    "Ordnungszahl 15 = Phosphor (P). Stickstoff = 7, Sauerstoff = 8, Schwefel = 16, Chlor = 17.",
    "leicht",
    ["Ordnungszahl", "Phosphor"]
  ),
  q(
    "ch-pool-14-050",
    KAP[1],
    "Bei isobarer Erwärmung eines idealen Gases:",
    [
      "bleibt das Volumen konstant",
      "nimmt das Volumen zu (Charles)",
      "nimmt der Druck ab",
      "bleibt die Dichte konstant",
      "nimmt die Stoffmenge zu",
    ],
    1,
    "Isobar (p const): Nach Charles steigt bei Erwärmung das Volumen (V ∝ T).",
    "mittel",
    ["Charles", "isobar"]
  ),
  q(
    "ch-pool-14-051",
    KAP[2],
    "Welche Moleküle können untereinander Wasserstoffbrücken ausbilden?",
    ["nur CH₄", "Ethanol (CH₃CH₂OH)", "nur Benzol", "nur n-Hexan", "CO₂"],
    1,
    "Ethanol hat O−H und freies Elektronenpaar am O → Wasserstoffbrücken zwischen Molekülen.",
    "mittel",
    ["Wasserstoffbrücken", "Ethanol"]
  ),
  q(
    "ch-pool-14-052",
    KAP[3],
    "Eine Eliminierung ist eine Reaktion, bei der:",
    [
      "Atome addiert werden",
      "ein Molekül in zwei Teile gespalten wird und dabei oft eine Doppelbindung entsteht",
      "nur oxidiert wird",
      "nur substituiert wird",
      "ein Ester gebildet wird",
    ],
    1,
    "Eliminierung: Abspaltung von Atomen/Gruppen, oft unter Bildung einer Doppelbindung (z. B. Alken aus Halogenalkan).",
    "mittel",
    ["Eliminierung", "Reaktionstyp"]
  ),
  q(
    "ch-pool-14-053",
    KAP[4],
    "Der pH-Wert von reinem Wasser bei 25 °C beträgt:",
    ["0", "5", "7", "10", "14"],
    2,
    "Reines Wasser: [H₃O⁺] = [OH⁻] = 10⁻⁷ mol/L → pH = 7 (neutral).",
    "leicht",
    ["pH", "Wasser"]
  ),
  q(
    "ch-pool-14-054",
    KAP[5],
    "Formaldehyd ist der Trivialname für:",
    ["Methanol", "Methanal (HCHO)", "Ameisensäure", "Ethanal", "Aceton"],
    1,
    "Formaldehyd = Methanal = HCHO (Aldehyd mit einem C-Atom).",
    "leicht",
    ["Formaldehyd", "Aldehyd"]
  ),
  q(
    "ch-pool-14-055",
    KAP[0],
    "Die L-Schale (n=2) kann maximal wie viele Elektronen aufnehmen?",
    ["2", "4", "8", "18", "32"],
    2,
    "2n² = 2·4 = 8. L-Schale: maximal 8 Elektronen.",
    "leicht",
    ["L-Schale", "Schale"]
  ),
  q(
    "ch-pool-14-056",
    KAP[1],
    "Reale Gase weichen vom idealen Verhalten besonders ab bei:",
    [
      "niedrigem Druck und hoher Temperatur",
      "hohem Druck und tiefer Temperatur",
      "immer",
      "nur Edelgasen",
      "nur bei 0 °C",
    ],
    1,
    "Bei hohem Druck und tiefer Temperatur: Eigenvolumen und Anziehungskräfte der Teilchen werden bedeutsam.",
    "mittel",
    ["reales Gas", "ideales Gas"]
  ),
  q(
    "ch-pool-14-057",
    KAP[2],
    "Welche Aussage zu π-Bindungen trifft zu?",
    [
      "Sie sind rotationssymmetrisch um die Bindungsachse",
      "π-Bindungen entstehen durch Überlappung von p-Orbitalen seitlich zur Bindungsachse",
      "Es gibt sie nur in Ionen",
      "Sie sind stärker als σ-Bindungen",
      "Sie kommen nur in Einfachbindungen vor",
    ],
    1,
    "π-Bindung: Überlappung p-Orbitale seitlich zur Verbindungslinie (z. B. in C=C, C≡C). σ-Bindung entlang der Achse.",
    "mittel",
    ["Pi-Bindung", "Mehrfachbindung"]
  ),
  q(
    "ch-pool-14-058",
    KAP[3],
    "Die Gleichgewichtslage einer Reaktion wird beeinflusst durch:",
    [
      "nur den Katalysator",
      "Temperatur (K ist temperaturabhängig)",
      "nur den Druck bei Flüssigkeiten",
      "nur die Konzentration der Katalysatoren",
      "nicht durch die Temperatur",
    ],
    1,
    "K = f(T). Temperaturänderung verschiebt das Gleichgewicht (K ändert sich). Katalysator ändert K nicht.",
    "mittel",
    ["Gleichgewicht", "Temperatur"]
  ),
  q(
    "ch-pool-14-059",
    KAP[4],
    "Welches Metall bildet mit Säure kein Wasserstoffgas?",
    ["Zink", "Eisen", "Kupfer", "Magnesium", "Aluminium"],
    2,
    "Kupfer steht in der Spannungsreihe unter Wasserstoff (unedle Metalle geben H₂ ab). Kupfer ist edel, reagiert nicht mit verd. Säure zu H₂.",
    "mittel",
    ["Spannungsreihe", "Kupfer"]
  ),
  q(
    "ch-pool-14-060",
    KAP[5],
    "Glycerin (Propan-1,2,3-triol) enthält:",
    ["eine OH-Gruppe", "zwei OH-Gruppen", "drei OH-Gruppen", "keine OH-Gruppe", "eine COOH-Gruppe"],
    2,
    "Glycerin = Propan-1,2,3-triol: drei Hydroxylgruppen an den drei C-Atomen.",
    "leicht",
    ["Glycerin", "Alkohol"]
  ),
];
