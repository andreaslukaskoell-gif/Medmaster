/**
 * Chemie Pool — \"Was ist falsch?" (Typ A: eine Aussage ist falsch, diese auswählen).
 * Stoff aus bmsKapitel/chemie.
 * 60 Fragen, 10 pro Kapitel: chem-kap1, chem-kap2, chem-kap-stoech, chem-kap4, chem-kap5, chem-kap6/chem-kap3.
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
    subject: "chemie",
    chapter,
    text,
    options: options.map((t, i) => ({ id: ids[i], text: t })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags: ["falsch-aussage", ...tags],
  };
}

export const chemieWasIstFalsch: Question[] = [
  // ─── chem-kap1: Atombau und Periodensystem (10 Fragen) ───
  wif(
    "ch-wif-001",
    "chem-kap1",
    "Welche der folgenden Aussagen zum Atombau ist FALSCH?",
    [
      "Protonen und Neutronen befinden sich im Atomkern.",
      "Elektronen bewegen sich in Orbitalen um den Kern.",
      "Die Massenzahl A ist die Summe aus Protonen und Elektronen.",
      "Isotope unterscheiden sich in der Neutronenzahl.",
      "Die Ordnungszahl Z entspricht der Protonenanzahl.",
    ],
    2,
    "Option C ist falsch. Die Massenzahl A ist die Summe aus Protonen und Neutronen (nicht Elektronen). Elektronen tragen praktisch nichts zur Masse bei.",
    "leicht",
    ["atombau", "massenzahl"]
  ),
  wif(
    "ch-wif-002",
    "chem-kap1",
    "Welche der folgenden Aussagen zum Periodensystem ist FALSCH?",
    [
      "Innerhalb einer Periode nimmt die Elektronegativität von links nach rechts zu.",
      "Die Ionisierungsenergie nimmt innerhalb einer Gruppe von oben nach unten ab.",
      "Der Atomradius nimmt innerhalb einer Periode von links nach rechts zu.",
      "Edelgase stehen in der 18. Gruppe (VIII. Hauptgruppe).",
      "Die Elemente einer Gruppe haben die gleiche Anzahl an Valenzelektronen.",
    ],
    2,
    "Option C ist falsch. Der Atomradius nimmt innerhalb einer Periode von links nach rechts ab, weil die steigende Kernladung die Elektronenhülle stärker anzieht.",
    "leicht",
    ["periodensystem", "atomradius"]
  ),
  wif(
    "ch-wif-003",
    "chem-kap1",
    "Welche der folgenden Aussagen zur Elektronenkonfiguration ist FALSCH?",
    [
      "Die Hundsche Regel besagt, dass Orbitale gleicher Energie zuerst einfach besetzt werden.",
      "Das Pauli-Prinzip besagt, dass maximal zwei Elektronen ein Orbital besetzen dürfen.",
      "Ein p-Orbital kann maximal 6 Elektronen aufnehmen.",
      "Die Aufbauregel (Klechkowski-Regel) gibt die energetische Reihenfolge der Orbitale an.",
      "Das 3d-Orbital wird nach dem 4s-Orbital besetzt.",
    ],
    2,
    "Option C ist falsch. Ein einzelnes p-Orbital kann maximal 2 Elektronen aufnehmen. Eine p-Unterschale (mit drei p-Orbitalen) fasst insgesamt 6 Elektronen.",
    "mittel",
    ["elektronenkonfiguration", "orbitale"]
  ),
  wif(
    "ch-wif-004",
    "chem-kap1",
    "Welche der folgenden Aussagen zu Ionen ist FALSCH?",
    [
      "Kationen entstehen durch Abgabe von Elektronen.",
      "Anionen sind negativ geladen.",
      "Na⁺ hat die gleiche Elektronenkonfiguration wie Neon.",
      "Das Chlorid-Ion Cl⁻ ist kleiner als das Chlor-Atom Cl.",
      "Metalle bilden bevorzugt Kationen.",
    ],
    3,
    "Option D ist falsch. Das Chlorid-Ion Cl⁻ ist grösser als das neutrale Chlor-Atom, weil das zusätzliche Elektron die Elektronenhülle durch erhöhte Elektron-Elektron-Abstossung ausdehnt.",
    "mittel",
    ["ionen", "ionenradius"]
  ),
  wif(
    "ch-wif-005",
    "chem-kap1",
    "Welche der folgenden Aussagen zu Hauptgruppen des PSE ist FALSCH?",
    [
      "Alkalimetalle haben ein Valenzelektron.",
      "Halogene sind starke Oxidationsmittel.",
      "Erdalkalimetalle bilden bevorzugt zweiwertige Kationen.",
      "Stickstoff gehört zur 6. Hauptgruppe (Chalkogene).",
      "Edelgase haben eine vollständig besetzte Valenzschale.",
    ],
    3,
    "Option D ist falsch. Stickstoff gehört zur 5. Hauptgruppe (Pnikogene). Die 6. Hauptgruppe (Chalkogene) umfasst Sauerstoff, Schwefel, Selen, Tellur und Polonium.",
    "leicht",
    ["hauptgruppen", "periodensystem"]
  ),
  wif(
    "ch-wif-006",
    "chem-kap1",
    "Welche der folgenden Aussagen zur Elektronegativität ist FALSCH?",
    [
      "Fluor hat die höchste Elektronegativität aller Elemente.",
      "Die Elektronegativität steigt in einer Hauptgruppe von oben nach unten.",
      "Grosse Elektronegativitätsdifferenzen führen zu polaren oder ionischen Bindungen.",
      "Kohlenstoff hat eine mittlere Elektronegativität (ca. 2,5 nach Pauling).",
      "Edelgasen wird üblicherweise keine Elektronegativität zugeordnet.",
    ],
    1,
    "Option B ist falsch. Die Elektronegativität nimmt in einer Hauptgruppe von oben nach unten ab, weil der Atomradius zunimmt und die Anziehung auf Bindungselektronen schwächer wird.",
    "leicht",
    ["elektronegativitaet", "periodensystem"]
  ),
  wif(
    "ch-wif-007",
    "chem-kap1",
    "Welche der folgenden Aussagen zu Quantenzahlen ist FALSCH?",
    [
      "Die Hauptquantenzahl n bestimmt die Energiestufe (Schale).",
      "Die Nebenquantenzahl l kann Werte von 0 bis n annehmen.",
      "Die magnetische Quantenzahl m_l bestimmt die räumliche Orientierung eines Orbitals.",
      "Die Spinquantenzahl m_s kann die Werte +½ oder −½ annehmen.",
      "Für n = 3 existieren s-, p- und d-Orbitale.",
    ],
    1,
    "Option B ist falsch. Die Nebenquantenzahl l kann Werte von 0 bis n−1 annehmen (nicht bis n). Für n = 3 gilt also l = 0, 1 oder 2.",
    "mittel",
    ["quantenzahlen", "orbitale"]
  ),
  wif(
    "ch-wif-008",
    "chem-kap1",
    "Welche der folgenden Aussagen zu Übergangsmetallen ist FALSCH?",
    [
      "Übergangsmetalle können variable Oxidationsstufen annehmen.",
      "Viele Übergangsmetallverbindungen sind farbig.",
      "Übergangsmetalle stehen in den Nebengruppen des PSE.",
      "Alle Übergangsmetalle sind bei Raumtemperatur fest.",
      "Übergangsmetalle können Komplexverbindungen bilden.",
    ],
    3,
    "Option D ist falsch. Quecksilber (Hg) ist ein Übergangsmetall und bei Raumtemperatur flüssig.",
    "mittel",
    ["uebergangsmetalle", "periodensystem"]
  ),
  wif(
    "ch-wif-009",
    "chem-kap1",
    "Welche der folgenden Aussagen zur Ionisierungsenergie ist FALSCH?",
    [
      "Die erste Ionisierungsenergie ist die Energie, die zur Entfernung des ersten Elektrons nötig ist.",
      "Edelgase haben besonders hohe Ionisierungsenergien.",
      "Die zweite Ionisierungsenergie ist immer grösser als die erste.",
      "Innerhalb einer Periode nimmt die Ionisierungsenergie stetig und ohne Ausnahme zu.",
      "Alkalimetalle haben niedrige erste Ionisierungsenergien.",
    ],
    3,
    "Option D ist falsch. Innerhalb einer Periode gibt es Unregelmässigkeiten: z. B. hat Bor eine niedrigere Ionisierungsenergie als Beryllium (wegen des leichter entfernbaren 2p-Elektrons), und Sauerstoff eine niedrigere als Stickstoff (wegen der Elektron-Elektron-Abstossung im doppelt besetzten 2p-Orbital).",
    "schwer",
    ["ionisierungsenergie", "periodensystem"]
  ),
  wif(
    "ch-wif-010",
    "chem-kap1",
    "Welche der folgenden Aussagen zu Isotopen ist FALSCH?",
    [
      "Isotope eines Elements haben die gleiche Ordnungszahl.",
      "Isotope unterscheiden sich in der Masse.",
      "Isotope haben identische chemische Eigenschaften.",
      "Radioaktive Isotope können zur Altersbestimmung genutzt werden (z. B. ¹⁴C).",
      "Deuterium (²H) ist ein stabiles Isotop des Wasserstoffs.",
    ],
    2,
    "Option C ist falsch. Isotope haben sehr ähnliche, aber nicht identische chemische Eigenschaften. Unterschiedliche Massen führen zum kinetischen Isotopeneffekt, der Reaktionsgeschwindigkeiten beeinflusst (besonders ausgeprägt bei H vs. D).",
    "schwer",
    ["isotope", "isotopeneffekt"]
  ),

  // ─── chem-kap2: Materie und Aggregatzustände (10 Fragen) ───
  wif(
    "ch-wif-011",
    "chem-kap2",
    "Welche der folgenden Aussagen zu Aggregatzuständen ist FALSCH?",
    [
      "Beim Schmelzen wird Energie zugeführt (endotherm).",
      "Sublimation ist der direkte Übergang von fest zu gasförmig.",
      "Resublimation ist der Übergang von gasförmig zu fest.",
      "Beim Kondensieren wird Energie aufgenommen.",
      "Am Tripelpunkt existieren alle drei Phasen gleichzeitig.",
    ],
    3,
    "Option D ist falsch. Beim Kondensieren (gasförmig → flüssig) wird Energie abgegeben (exotherm), nicht aufgenommen. Die kinetische Energie der Teilchen nimmt ab.",
    "leicht",
    ["aggregatzustaende", "phasenuebergaenge"]
  ),
  wif(
    "ch-wif-012",
    "chem-kap2",
    "Welche der folgenden Aussagen zum idealen Gas ist FALSCH?",
    [
      "Das ideale Gasgesetz lautet pV = nRT.",
      "Bei idealen Gasen werden keine zwischenmolekularen Wechselwirkungen angenommen.",
      "Das Volumen der Gasteilchen wird beim idealen Gas als vernachlässigbar angenommen.",
      "Unter Normalbedingungen (0 °C, 1 atm) beträgt das Molvolumen eines idealen Gases 22,4 L.",
      "Reale Gase verhalten sich bei hohem Druck und tiefer Temperatur besonders ideal.",
    ],
    4,
    "Option E ist falsch. Reale Gase verhalten sich bei hohem Druck und tiefer Temperatur besonders wenig ideal, weil dann zwischenmolekulare Wechselwirkungen und das Eigenvolumen der Teilchen nicht mehr vernachlässigbar sind.",
    "mittel",
    ["ideales gas", "gasgesetze"]
  ),
  wif(
    "ch-wif-013",
    "chem-kap2",
    "Welche der folgenden Aussagen zu Stoffgemischen ist FALSCH?",
    [
      "Eine Lösung ist ein homogenes Gemisch.",
      "Suspensionen sind heterogene Gemische aus einer Flüssigkeit und einem Feststoff.",
      "Legierungen sind homogene Gemische aus Metallen.",
      "Emulsionen sind homogene Gemische zweier Flüssigkeiten.",
      "Rauch ist ein heterogenes Gemisch aus Gas und festen Partikeln.",
    ],
    3,
    "Option D ist falsch. Emulsionen sind heterogene Gemische (nicht homogene) aus zwei nicht mischbaren Flüssigkeiten (z. B. Öl und Wasser). Homogene Mischungen zweier Flüssigkeiten heissen Lösungen.",
    "leicht",
    ["stoffgemische", "emulsion"]
  ),
  wif(
    "ch-wif-014",
    "chem-kap2",
    "Welche der folgenden Aussagen zu Trennverfahren ist FALSCH?",
    [
      "Destillation trennt Stoffe nach unterschiedlichen Siedepunkten.",
      "Filtration trennt unlösliche Feststoffe von Flüssigkeiten.",
      "Chromatographie trennt Stoffe nach ihrer unterschiedlichen Affinität zur stationären Phase.",
      "Extraktion nutzt Unterschiede in der Dichte zur Stofftrennung.",
      "Zentrifugation trennt Bestandteile durch Fliehkraft.",
    ],
    3,
    "Option D ist falsch. Extraktion nutzt Unterschiede in der Löslichkeit eines Stoffes in zwei nicht mischbaren Lösungsmitteln, nicht Unterschiede in der Dichte.",
    "mittel",
    ["trennverfahren", "extraktion"]
  ),
  wif(
    "ch-wif-015",
    "chem-kap2",
    "Welche der folgenden Aussagen zu zwischenmolekularen Kräften ist FALSCH?",
    [
      "Van-der-Waals-Kräfte sind die schwächsten zwischenmolekularen Wechselwirkungen.",
      "Wasserstoffbrücken treten auf, wenn H an F, O oder N gebunden ist.",
      "Dipol-Dipol-Wechselwirkungen treten zwischen polaren Molekülen auf.",
      "Van-der-Waals-Kräfte nehmen mit steigender Molekülgrösse ab.",
      "Ionische Wechselwirkungen sind stärker als Wasserstoffbrücken.",
    ],
    3,
    "Option D ist falsch. Van-der-Waals-Kräfte (London-Dispersionskräfte) nehmen mit steigender Molekülgrösse zu, weil grössere Elektronenwolken leichter polarisierbar sind.",
    "mittel",
    ["zwischenmolekulare kraefte", "van-der-waals"]
  ),
  wif(
    "ch-wif-016",
    "chem-kap2",
    "Welche der folgenden Aussagen zum Dampfdruck ist FALSCH?",
    [
      "Der Dampfdruck steigt mit zunehmender Temperatur.",
      "Am Siedepunkt entspricht der Dampfdruck dem Umgebungsdruck.",
      "Flüssigkeiten mit starken intermolekularen Kräften haben einen niedrigen Dampfdruck.",
      "Der Dampfdruck ist unabhängig vom Volumen des Gasraums über der Flüssigkeit.",
      "Stoffe mit hohem Dampfdruck bei Raumtemperatur sieden bei hohen Temperaturen.",
    ],
    4,
    "Option E ist falsch. Stoffe mit hohem Dampfdruck bei Raumtemperatur haben schwache intermolekulare Kräfte und sieden bei niedrigen Temperaturen (z. B. Diethylether).",
    "mittel",
    ["dampfdruck", "siedepunkt"]
  ),
  wif(
    "ch-wif-017",
    "chem-kap2",
    "Welche der folgenden Aussagen zu Wasser ist FALSCH?",
    [
      "Wasser hat eine hohe spezifische Wärmekapazität.",
      "Die Dichteanomalie des Wassers bewirkt, dass Eis auf Wasser schwimmt.",
      "Wasser hat seinen Dichtemaximum bei 4 °C.",
      "Die hohe Siedetemperatur von Wasser beruht auf Wasserstoffbrücken.",
      "In Eis ist jedes Wassermolekül von genau sechs anderen Wassermolekülen umgeben.",
    ],
    4,
    "Option E ist falsch. In der Eisstruktur (hexagonales Eis) ist jedes Wassermolekül tetraedrisch von vier (nicht sechs) anderen Wassermolekülen über Wasserstoffbrücken umgeben.",
    "schwer",
    ["wasser", "anomalie", "eisstruktur"]
  ),
  wif(
    "ch-wif-018",
    "chem-kap2",
    "Welche der folgenden Aussagen zur Diffusion ist FALSCH?",
    [
      "Diffusion ist die selbstständige Durchmischung von Stoffen durch Teilchenbewegung.",
      "Die Diffusionsgeschwindigkeit steigt mit der Temperatur.",
      "Schwere Moleküle diffundieren schneller als leichte bei gleicher Temperatur.",
      "Diffusion findet in Gasen schneller statt als in Flüssigkeiten.",
      "Osmose ist eine spezielle Form der Diffusion durch eine semipermeable Membran.",
    ],
    2,
    "Option C ist falsch. Schwere Moleküle diffundieren langsamer als leichte bei gleicher Temperatur, weil sie bei gleicher kinetischer Energie eine geringere Geschwindigkeit haben (Graham-Gesetz: v ∝ 1/√M).",
    "leicht",
    ["diffusion", "graham"]
  ),
  wif(
    "ch-wif-019",
    "chem-kap2",
    "Welche der folgenden Aussagen zu Phasendiagrammen ist FALSCH?",
    [
      "Am kritischen Punkt lässt sich die Flüssig- von der Gasphase nicht mehr unterscheiden.",
      "Der Tripelpunkt liegt bei genau definiertem Druck und definierter Temperatur.",
      "Oberhalb des kritischen Drucks existiert keine Gasphase mehr.",
      "Die Schmelzkurve von Wasser hat eine negative Steigung.",
      "Oberhalb des kritischen Punkts existiert eine Flüssig-Gas-Grenzfläche.",
    ],
    4,
    "Option E ist falsch. Oberhalb des kritischen Punkts existiert ein überkritisches Fluid — es gibt keine Phasengrenze und somit keine Flüssig-Gas-Grenzfläche mehr.",
    "schwer",
    ["phasendiagramm", "kritischer punkt"]
  ),
  wif(
    "ch-wif-020",
    "chem-kap2",
    "Welche der folgenden Aussagen zu Reinstoffen und Gemischen ist FALSCH?",
    [
      "Reinstoffe haben definierte Schmelz- und Siedepunkte.",
      "Elemente bestehen aus Atomen mit gleicher Ordnungszahl.",
      "Verbindungen können durch physikalische Verfahren in ihre Elemente zerlegt werden.",
      "Bronze ist eine Legierung aus Kupfer und Zinn.",
      "Luft ist ein homogenes Stoffgemisch.",
    ],
    2,
    "Option C ist falsch. Verbindungen können nur durch chemische Reaktionen in ihre Elemente zerlegt werden, nicht durch physikalische Verfahren. Physikalische Trennverfahren (Destillation, Filtration) trennen Gemische, nicht Verbindungen.",
    "leicht",
    ["reinstoffe", "gemische", "verbindungen"]
  ),

  // ─── chem-kap-stoech: Stöchiometrie und Lösungen (10 Fragen) ───
  wif(
    "ch-wif-021",
    "chem-kap-stoech",
    "Welche der folgenden Aussagen zur Stöchiometrie ist FALSCH?",
    [
      "Die molare Masse von Wasser beträgt ca. 18 g/mol.",
      "1 mol eines idealen Gases nimmt bei Normalbedingungen 22,4 L ein.",
      "Die Avogadro-Konstante beträgt ca. 6,022 × 10²³ mol⁻¹.",
      "Die Stoffmenge n berechnet sich als n = m × M (Masse mal molare Masse).",
      "Bei einer vollständigen Reaktion bestimmt der Stoff im Unterschuss die Produktmenge.",
    ],
    3,
    "Option D ist falsch. Die Stoffmenge berechnet sich als n = m / M (Masse geteilt durch molare Masse), nicht als Masse mal molare Masse.",
    "leicht",
    ["stoechiometrie", "stoffmenge"]
  ),
  wif(
    "ch-wif-022",
    "chem-kap-stoech",
    "Welche der folgenden Aussagen zu Konzentrationsangaben ist FALSCH?",
    [
      "Die Molarität gibt die Stoffmenge pro Liter Lösung an (mol/L).",
      "Die Massenkonzentration gibt die Masse des gelösten Stoffs pro Volumen Lösung an.",
      "Der Massenanteil w ist dimensionslos und wird oft in Prozent angegeben.",
      "Die Molalität gibt die Stoffmenge pro Liter Lösungsmittel an.",
      "Eine 1-molare NaCl-Lösung enthält 1 mol NaCl in 1 L Lösung.",
    ],
    3,
    "Option D ist falsch. Die Molalität gibt die Stoffmenge pro Kilogramm Lösungsmittel an (mol/kg), nicht pro Liter Lösungsmittel.",
    "mittel",
    ["konzentration", "molalitaet"]
  ),
  wif(
    "ch-wif-023",
    "chem-kap-stoech",
    "Welche der folgenden Aussagen zum Lösungsvorgang ist FALSCH?",
    [
      "Beim Lösen von NaCl in Wasser werden die Ionen hydratisiert.",
      "Die Lösungsenthalpie kann exotherm oder endotherm sein.",
      "Die Löslichkeit von Gasen in Wasser steigt mit zunehmender Temperatur.",
      "Der Lösungsvorgang erfordert die Überwindung von Gitterenergie bei ionischen Stoffen.",
      "Die Hydrationsenergie stabilisiert die gelösten Ionen in Wasser.",
    ],
    2,
    "Option C ist falsch. Die Löslichkeit von Gasen in Wasser sinkt mit zunehmender Temperatur (Henry-Gesetz). Für die meisten Feststoffe hingegen steigt die Löslichkeit mit der Temperatur.",
    "mittel",
    ["loeslichkeit", "gasloeslichkeit"]
  ),
  wif(
    "ch-wif-024",
    "chem-kap-stoech",
    "Welche der folgenden Aussagen zu Redox-Gleichungen ist FALSCH?",
    [
      "In einer ausgeglichenen Redox-Gleichung ist die Anzahl abgegebener Elektronen gleich der Anzahl aufgenommener.",
      "Die Oxidationszahl von Elementen im elementaren Zustand ist 0.",
      "Sauerstoff hat in Verbindungen fast immer die Oxidationszahl −2.",
      "In einer ausgeglichenen Gleichung sind links und rechts gleich viele Atome jedes Elements.",
      "Die Summe der Oxidationszahlen in einem neutralen Molekül ergibt +1.",
    ],
    4,
    "Option E ist falsch. Die Summe aller Oxidationszahlen in einem neutralen Molekül ergibt 0, nicht +1. Bei einem Ion ergibt die Summe die Ionenladung.",
    "leicht",
    ["redox", "oxidationszahlen"]
  ),
  wif(
    "ch-wif-025",
    "chem-kap-stoech",
    "Welche der folgenden Aussagen zu kolligativen Eigenschaften ist FALSCH?",
    [
      "Die Siedepunkterhöhung hängt von der Teilchenzahl des gelösten Stoffes ab.",
      "Die Gefrierpunktserniedrigung wird in der Kryoskopie genutzt.",
      "Der osmotische Druck ist proportional zur Konzentration des gelösten Stoffes.",
      "Kolligative Eigenschaften hängen von der Art des gelösten Stoffes ab.",
      "Die Dampfdruckerniedrigung wird durch das Raoultsche Gesetz beschrieben.",
    ],
    3,
    "Option D ist falsch. Kolligative Eigenschaften hängen nur von der Anzahl der gelösten Teilchen ab, nicht von deren Art oder chemischer Natur.",
    "mittel",
    ["kolligative eigenschaften", "osmose"]
  ),
  wif(
    "ch-wif-026",
    "chem-kap-stoech",
    "Welche der folgenden Aussagen zur Verdünnung ist FALSCH?",
    [
      "Beim Verdünnen gilt: c₁ × V₁ = c₂ × V₂.",
      "Verdünnung ändert die Stoffmenge des gelösten Stoffes nicht.",
      "Eine 1:10-Verdünnung bedeutet 1 Teil Lösung + 9 Teile Lösungsmittel.",
      "Beim Verdünnen konzentrierter Schwefelsäure gibt man die Säure zum Wasser.",
      "Verdünnung erhöht die Konzentration der gelösten Teilchen.",
    ],
    4,
    "Option E ist falsch. Verdünnung verringert (nicht erhöht) die Konzentration der gelösten Teilchen, da das Volumen zunimmt, während die Stoffmenge konstant bleibt.",
    "leicht",
    ["verduennung", "konzentration"]
  ),
  wif(
    "ch-wif-027",
    "chem-kap-stoech",
    "Welche der folgenden Aussagen zur empirischen Formel ist FALSCH?",
    [
      "Die empirische Formel gibt das kleinstmögliche ganzzahlige Verhältnis der Atome an.",
      "Die Molekülformel ist ein ganzzahliges Vielfaches der empirischen Formel.",
      "Glucose (C₆H₁₂O₆) hat die empirische Formel CH₂O.",
      "Die empirische Formel von Essigsäure (C₂H₄O₂) ist C₂H₄O₂.",
      "Zur Bestimmung der empirischen Formel benötigt man die prozentuale Zusammensetzung.",
    ],
    3,
    "Option D ist falsch. Die empirische Formel von Essigsäure (C₂H₄O₂) ist CH₂O (Verhältnis 1:2:1), nicht C₂H₄O₂. Die Molekülformel ist das Doppelte der empirischen Formel.",
    "mittel",
    ["empirische formel", "molekuelformel"]
  ),
  wif(
    "ch-wif-028",
    "chem-kap-stoech",
    "Welche der folgenden Aussagen zum Löslichkeitsprodukt ist FALSCH?",
    [
      "Das Löslichkeitsprodukt K_sp ist temperaturabhängig.",
      "Wird K_sp überschritten, fällt ein Niederschlag aus.",
      "K_sp von AgCl: K_sp = [Ag⁺] × [Cl⁻].",
      "Ein grösseres K_sp bedeutet eine geringere Löslichkeit.",
      "Durch Zugabe eines gemeinsamen Ions sinkt die Löslichkeit (gleichioniger Zusatz).",
    ],
    3,
    "Option D ist falsch. Ein grösseres K_sp bedeutet eine höhere Löslichkeit, da eine grössere Ionenkonzentration im Gleichgewicht vorliegt.",
    "mittel",
    ["loeslichkeitsprodukt", "gleichgewicht"]
  ),
  wif(
    "ch-wif-029",
    "chem-kap-stoech",
    "Welche der folgenden Aussagen zur Gasberechnung ist FALSCH?",
    [
      "Bei konstantem Druck ist das Volumen proportional zur Temperatur (Gay-Lussac).",
      "Bei konstanter Temperatur ist das Volumen umgekehrt proportional zum Druck (Boyle-Mariotte).",
      "Bei gleichem Druck und gleicher Temperatur enthalten gleiche Volumina idealer Gase die gleiche Teilchenzahl.",
      "Der Partialdruck eines Gases ist sein Anteil am Gesamtdruck.",
      "Verdoppelt man die Temperatur in °C, verdoppelt sich das Volumen bei konstantem Druck.",
    ],
    4,
    "Option E ist falsch. Das Gasgesetz verwendet die absolute Temperatur in Kelvin. Eine Verdopplung der Celsius-Temperatur (z. B. von 20 °C auf 40 °C) entspricht nicht einer Verdopplung der Kelvin-Temperatur (293 K auf 313 K).",
    "schwer",
    ["gasgesetze", "temperatur"]
  ),
  wif(
    "ch-wif-030",
    "chem-kap-stoech",
    "Welche der folgenden Aussagen zum pH-Wert ist FALSCH?",
    [
      "Der pH-Wert ist definiert als −log₁₀[H₃O⁺].",
      "Reines Wasser hat bei 25 °C einen pH-Wert von 7.",
      "Ein pH-Wert unter 7 zeigt eine saure Lösung an.",
      "Eine Änderung des pH-Werts um 1 entspricht einer Verzehnfachung der H₃O⁺-Konzentration.",
      "Der pH-Wert einer starken Säure mit c = 0,01 mol/L beträgt 3.",
    ],
    4,
    "Option E ist falsch. Der pH-Wert einer starken Säure (vollständig dissoziiert) mit c = 0,01 mol/L = 10⁻² mol/L beträgt pH = −log(10⁻²) = 2, nicht 3.",
    "leicht",
    ["ph-wert", "saeure"]
  ),

  // ─── chem-kap4: Reaktionen und Gleichgewicht (10 Fragen) ───
  wif(
    "ch-wif-031",
    "chem-kap4",
    "Welche der folgenden Aussagen zum chemischen Gleichgewicht ist FALSCH?",
    [
      "Im Gleichgewicht sind die Geschwindigkeiten der Hin- und Rückreaktion gleich.",
      "Die Gleichgewichtskonstante K ändert sich mit der Temperatur.",
      "Ein Katalysator verschiebt das chemische Gleichgewicht zugunsten der Produkte.",
      "Das Massenwirkungsgesetz beschreibt das Verhältnis der Konzentrationen im Gleichgewicht.",
      "Nach Le Chatelier weicht das System einem äusseren Zwang aus.",
    ],
    2,
    "Option C ist falsch. Ein Katalysator beschleunigt die Einstellung des Gleichgewichts, verschiebt es aber nicht. Er senkt die Aktivierungsenergie für Hin- und Rückreaktion gleichermassen.",
    "leicht",
    ["gleichgewicht", "katalysator"]
  ),
  wif(
    "ch-wif-032",
    "chem-kap4",
    "Welche der folgenden Aussagen zu Reaktionsgeschwindigkeiten ist FALSCH?",
    [
      "Die Reaktionsgeschwindigkeit steigt mit zunehmender Temperatur.",
      "Katalysatoren erhöhen die Aktivierungsenergie einer Reaktion.",
      "Die Konzentration der Edukte beeinflusst die Reaktionsgeschwindigkeit.",
      "Die RGT-Regel besagt, dass eine Temperaturerhöhung um 10 °C die Geschwindigkeit ungefähr verdoppelt bis verdreifacht.",
      "Die Reaktionsordnung wird experimentell bestimmt.",
    ],
    1,
    "Option B ist falsch. Katalysatoren senken (nicht erhöhen) die Aktivierungsenergie einer Reaktion, wodurch mehr Teilchen die Energiebarriere überwinden können.",
    "leicht",
    ["reaktionsgeschwindigkeit", "aktivierungsenergie"]
  ),
  wif(
    "ch-wif-033",
    "chem-kap4",
    "Welche der folgenden Aussagen zu exothermen und endothermen Reaktionen ist FALSCH?",
    [
      "Exotherme Reaktionen geben Wärme an die Umgebung ab (ΔH < 0).",
      "Endotherme Reaktionen nehmen Wärme aus der Umgebung auf (ΔH > 0).",
      "Die Verbrennung von Methan ist eine exotherme Reaktion.",
      "Alle exothermen Reaktionen laufen spontan ab.",
      "Die Enthalpie ist eine Zustandsgrösse.",
    ],
    3,
    "Option D ist falsch. Nicht alle exothermen Reaktionen laufen spontan ab. Die Spontanität einer Reaktion wird durch die freie Enthalpie ΔG bestimmt (ΔG = ΔH − TΔS), nicht allein durch ΔH. Auch die Entropieänderung spielt eine Rolle.",
    "mittel",
    ["thermodynamik", "enthalpie", "spontanitaet"]
  ),
  wif(
    "ch-wif-034",
    "chem-kap4",
    "Welche der folgenden Aussagen zum Prinzip von Le Chatelier ist FALSCH?",
    [
      "Erhöhung der Eduktkonzentration verschiebt das Gleichgewicht Richtung Produkte.",
      "Druckerhöhung verschiebt das Gleichgewicht zur Seite mit weniger Gasmolekülen.",
      "Temperaturerhöhung begünstigt die endotherme Reaktionsrichtung.",
      "Entfernung eines Produkts verschiebt das Gleichgewicht Richtung Produkte.",
      "Zugabe eines Katalysators verschiebt das Gleichgewicht zur Produktseite.",
    ],
    4,
    "Option E ist falsch. Ein Katalysator hat keinen Einfluss auf die Lage des Gleichgewichts. Er beschleunigt lediglich die Einstellung des Gleichgewichts, indem er Hin- und Rückreaktion gleichermassen beschleunigt.",
    "mittel",
    ["le chatelier", "gleichgewicht"]
  ),
  wif(
    "ch-wif-035",
    "chem-kap4",
    "Welche der folgenden Aussagen zu Säuren und Basen ist FALSCH?",
    [
      "Nach Brønsted sind Säuren Protonendonatoren.",
      "Nach Brønsted sind Basen Protonenakzeptoren.",
      "Wasser ist amphoter — es kann als Säure und als Base reagieren.",
      "Starke Säuren haben einen hohen pKs-Wert.",
      "Die konjugierte Base einer starken Säure ist eine schwache Base.",
    ],
    3,
    "Option D ist falsch. Starke Säuren haben einen niedrigen (oft negativen) pKs-Wert, nicht einen hohen. Ein hoher pKs-Wert kennzeichnet eine schwache Säure.",
    "mittel",
    ["saeure-base", "pks-wert"]
  ),
  wif(
    "ch-wif-036",
    "chem-kap4",
    "Welche der folgenden Aussagen zur Elektrochemie ist FALSCH?",
    [
      "An der Anode findet die Oxidation statt.",
      "An der Kathode findet die Reduktion statt.",
      "In einer galvanischen Zelle wird chemische Energie in elektrische Energie umgewandelt.",
      "Bei der Elektrolyse wird elektrische Energie in chemische Energie umgewandelt.",
      "In einer galvanischen Zelle ist die Anode der Pluspol.",
    ],
    4,
    "Option E ist falsch. In einer galvanischen Zelle ist die Anode der Minuspol (hier findet die Oxidation statt). In einer Elektrolysezelle hingegen ist die Anode der Pluspol. Diese Verwechslung ist ein häufiger MedAT-Fallstrick.",
    "mittel",
    ["elektrochemie", "galvanische zelle"]
  ),
  wif(
    "ch-wif-037",
    "chem-kap4",
    "Welche der folgenden Aussagen zu Pufferlösungen ist FALSCH?",
    [
      "Pufferlösungen bestehen aus einer schwachen Säure und ihrer konjugierten Base.",
      "Puffer stabilisieren den pH-Wert bei Zugabe kleiner Mengen Säure oder Base.",
      "Die Henderson-Hasselbalch-Gleichung beschreibt den pH-Wert eines Puffers.",
      "Die Pufferkapazität ist unbegrenzt, solange Puffersubstanzen vorhanden sind.",
      "Der Blut-pH wird unter anderem durch den Hydrogencarbonat-Puffer reguliert.",
    ],
    3,
    "Option D ist falsch. Die Pufferkapazität ist begrenzt. Sie ist am grössten, wenn die Konzentrationen von Säure und konjugierter Base gleich sind (pH = pKs), und nimmt ab, wenn eine Komponente verbraucht wird.",
    "schwer",
    ["puffer", "henderson-hasselbalch"]
  ),
  wif(
    "ch-wif-038",
    "chem-kap4",
    "Welche der folgenden Aussagen zur Entropie ist FALSCH?",
    [
      "Die Entropie ist ein Mass für die Unordnung eines Systems.",
      "Die Entropie nimmt beim Übergang von fest zu gasförmig zu.",
      "Der dritte Hauptsatz der Thermodynamik besagt, dass die Entropie eines perfekten Kristalls bei 0 K gleich null ist.",
      "Bei spontanen Prozessen nimmt die Gesamtentropie des Universums ab.",
      "Die Entropie ist eine Zustandsgrösse.",
    ],
    3,
    "Option D ist falsch. Der zweite Hauptsatz der Thermodynamik besagt, dass die Gesamtentropie des Universums bei spontanen Prozessen zunimmt (nicht abnimmt), also ΔS_gesamt > 0.",
    "mittel",
    ["entropie", "thermodynamik"]
  ),
  wif(
    "ch-wif-039",
    "chem-kap4",
    "Welche der folgenden Aussagen zu Redoxreaktionen ist FALSCH?",
    [
      "Bei der Oxidation werden Elektronen abgegeben.",
      "Bei der Reduktion werden Elektronen aufgenommen.",
      "Ein Oxidationsmittel wird selbst reduziert.",
      "Ein Reduktionsmittel wird selbst oxidiert.",
      "In einer Redoxreaktion ändert sich die Oxidationszahl des Oxidationsmittels zu höheren Werten.",
    ],
    4,
    "Option E ist falsch. Das Oxidationsmittel nimmt Elektronen auf und wird selbst reduziert — seine Oxidationszahl sinkt (wird niedriger), nicht höher.",
    "leicht",
    ["redoxreaktion", "oxidationsmittel"]
  ),
  wif(
    "ch-wif-040",
    "chem-kap4",
    "Welche der folgenden Aussagen zu Reaktionsenthalpien ist FALSCH?",
    [
      "Der Satz von Hess besagt, dass die Reaktionsenthalpie wegunabhängig ist.",
      "Standardbildungsenthalpien beziehen sich auf die Bildung aus den Elementen im Standardzustand.",
      "Die Bindungsdissoziationsenergie ist immer negativ.",
      "Die Reaktionsenthalpie kann aus Bindungsenergien abgeschätzt werden.",
      "Die Standardbildungsenthalpie von Elementen in ihrem stabilsten Zustand ist null.",
    ],
    2,
    "Option C ist falsch. Die Bindungsdissoziationsenergie ist immer positiv, da zum Aufbrechen einer Bindung Energie aufgewendet werden muss (endothermer Vorgang).",
    "schwer",
    ["enthalpie", "bindungsenergie", "hess"]
  ),

  // ─── chem-kap5: Anorganische Chemie (10 Fragen) ───
  wif(
    "ch-wif-041",
    "chem-kap5",
    "Welche der folgenden Aussagen zu Salzen ist FALSCH?",
    [
      "Salze bestehen aus Kationen und Anionen.",
      "NaCl bildet ein kubisch-flächenzentriertes Gitter.",
      "Salze leiten im festen Zustand den elektrischen Strom.",
      "In Salzlösungen sind die Ionen frei beweglich.",
      "Die Gitterenergie steigt mit zunehmender Ladung der Ionen.",
    ],
    2,
    "Option C ist falsch. Salze leiten im festen Zustand keinen elektrischen Strom, da die Ionen im Kristallgitter fixiert sind. Erst in der Schmelze oder in Lösung sind die Ionen frei beweglich und ermöglichen Stromleitung.",
    "leicht",
    ["salze", "ionengitter", "leitfaehigkeit"]
  ),
  wif(
    "ch-wif-042",
    "chem-kap5",
    "Welche der folgenden Aussagen zu Säuren ist FALSCH?",
    [
      "Salzsäure (HCl) ist eine starke einprotonige Säure.",
      "Schwefelsäure (H₂SO₄) ist eine zweiprotonige Säure.",
      "Phosphorsäure (H₃PO₄) ist eine dreiprotonige Säure.",
      "Essigsäure (CH₃COOH) ist eine starke Säure.",
      "Salpetersäure (HNO₃) ist eine starke Säure und ein Oxidationsmittel.",
    ],
    3,
    "Option D ist falsch. Essigsäure ist eine schwache Säure (pKs = 4,76), die in Wasser nur teilweise dissoziiert. Starke Säuren wie HCl, H₂SO₄ oder HNO₃ dissoziieren praktisch vollständig.",
    "leicht",
    ["saeuren", "essigsaeure"]
  ),
  wif(
    "ch-wif-043",
    "chem-kap5",
    "Welche der folgenden Aussagen zu Metallen ist FALSCH?",
    [
      "Metalle besitzen eine hohe elektrische Leitfähigkeit.",
      "Die metallische Bindung beruht auf delokalisierten Elektronen.",
      "Metalle sind in der Regel duktil (dehnbar) und malleabel (verformbar).",
      "Alle Metalle haben höhere Schmelzpunkte als Nichtmetalle.",
      "Natrium reagiert heftig mit Wasser unter Bildung von NaOH und H₂.",
    ],
    3,
    "Option D ist falsch. Nicht alle Metalle haben höhere Schmelzpunkte als Nichtmetalle. Z. B. schmilzt Quecksilber bei −39 °C und Gallium bei 30 °C, während Kohlenstoff (Diamant, ~3550 °C) oder Silicium (1414 °C) deutlich höhere Schmelzpunkte haben.",
    "mittel",
    ["metalle", "schmelzpunkt"]
  ),
  wif(
    "ch-wif-044",
    "chem-kap5",
    "Welche der folgenden Aussagen zu Halogenen ist FALSCH?",
    [
      "Fluor ist das elektronegativste Element.",
      "Chlor ist bei Raumtemperatur ein gelbgrünes Gas.",
      "Brom ist bei Raumtemperatur eine braune Flüssigkeit.",
      "Iod ist bei Raumtemperatur ein violettes Gas.",
      "Halogene bilden bevorzugt einfach negativ geladene Anionen.",
    ],
    3,
    "Option D ist falsch. Iod ist bei Raumtemperatur ein grauschwarzer Feststoff mit metallischem Glanz. Es sublimiert bei Erwärmung zu einem violetten Gas, ist aber bei Raumtemperatur fest.",
    "leicht",
    ["halogene", "aggregatzustand"]
  ),
  wif(
    "ch-wif-045",
    "chem-kap5",
    "Welche der folgenden Aussagen zu Komplexverbindungen ist FALSCH?",
    [
      "Komplexverbindungen bestehen aus einem Zentralatom und Liganden.",
      "Liganden sind Lewis-Basen, die freie Elektronenpaare zur Verfügung stellen.",
      "Die Koordinationszahl gibt die Anzahl der Bindungsstellen zum Zentralatom an.",
      "EDTA ist ein einzähniger Ligand.",
      "Hämoglobin enthält einen Eisen-Komplex (Häm).",
    ],
    3,
    "Option D ist falsch. EDTA (Ethylendiamintetraacetat) ist ein sechszähniger Chelat-Ligand (hexadentat), kein einzähniger. Es kann mit sechs Donoratomen an das Zentralion koordinieren.",
    "schwer",
    ["komplexchemie", "liganden", "edta"]
  ),
  wif(
    "ch-wif-046",
    "chem-kap5",
    "Welche der folgenden Aussagen zur Nomenklatur anorganischer Verbindungen ist FALSCH?",
    [
      "Die Endung -id kennzeichnet einatomige Anionen (z. B. Chlorid Cl⁻).",
      "Die Endung -at kennzeichnet Oxoanionen (z. B. Sulfat SO₄²⁻).",
      "Die Endung -it kennzeichnet Oxoanionen mit weniger Sauerstoff (z. B. Sulfit SO₃²⁻).",
      "Natriumhydroxid (NaOH) ist ein Salz.",
      "Calciumcarbonat (CaCO₃) ist ein schwerlösliches Salz.",
    ],
    3,
    "Option D ist falsch. Natriumhydroxid (NaOH) ist eine Base (Lauge), kein Salz. Es enthält Hydroxid-Ionen (OH⁻) und ist eine der stärksten anorganischen Basen. Salze entstehen durch Neutralisation einer Säure mit einer Base.",
    "mittel",
    ["nomenklatur", "hydroxide"]
  ),
  wif(
    "ch-wif-047",
    "chem-kap5",
    "Welche der folgenden Aussagen zur Elektrochemischen Spannungsreihe ist FALSCH?",
    [
      "Die Standardwasserstoffelektrode hat ein Potential von 0 V.",
      "Edle Metalle haben ein positives Standardpotential.",
      "Unedle Metalle haben ein negatives Standardpotential.",
      "Gold (Au) hat das positivste Standardpotential aller Metalle.",
      "Lithium hat das negativste Standardpotential aller Metalle.",
    ],
    3,
    "Option D ist falsch. Gold hat zwar ein sehr positives Standardpotential (+1,50 V fuer Au3+/Au), aber Platin hat ebenfalls ein sehr hohes Potential. Unter den Standardpotentialen hat Fluor (F2/F- mit +2,87 V) den hoechsten Wert. Unter den Metallen hat Gold nicht das absolut positivste Potential. Die Aussage 'aller Metalle' ist eine haeufige Vereinfachung, die nicht exakt stimmt.",
    "schwer",
    ["spannungsreihe", "standardpotential"]
  ),
  wif(
    "ch-wif-048",
    "chem-kap5",
    "Welche der folgenden Aussagen zu Wasserstoff ist FALSCH?",
    [
      "Wasserstoff ist das leichteste Element im Periodensystem.",
      "Molekularer Wasserstoff (H₂) ist ein farbloses, geruchloses Gas.",
      "Wasserstoff kann die Oxidationszahl +1 und −1 annehmen.",
      "Die Knallgasreaktion (2 H₂ + O₂ → 2 H₂O) ist endotherm.",
      "Wasserstoff wird industriell durch Dampfreformierung von Erdgas gewonnen.",
    ],
    3,
    "Option D ist falsch. Die Knallgasreaktion ist stark exotherm (ΔH = −572 kJ/mol), nicht endotherm. Sie setzt grosse Mengen Energie frei, daher der Name 'Knallgas'.",
    "leicht",
    ["wasserstoff", "knallgas"]
  ),
  wif(
    "ch-wif-049",
    "chem-kap5",
    "Welche der folgenden Aussagen zur Schwefelsäure ist FALSCH?",
    [
      "Konzentrierte Schwefelsäure wirkt wasserentziehend (hygroskopisch).",
      "Schwefelsäure wird im Kontaktverfahren hergestellt.",
      "Schwefelsäure ist die weltweit meistproduzierte Säure.",
      "Beim Verdünnen von Schwefelsäure gibt man Wasser zur Säure.",
      "Verdünnte Schwefelsäure reagiert mit unedlen Metallen unter Wasserstoffentwicklung.",
    ],
    3,
    "Option D ist falsch. Man gibt stets die Säure zum Wasser, niemals umgekehrt. Die Eselsbrücke lautet: 'Erst das Wasser, dann die Säure, sonst geschieht das Ungeheure.' Gibt man Wasser in konzentrierte Schwefelsäure, kann die starke Wärmeentwicklung zum Siedeverzug und Spritzen führen.",
    "leicht",
    ["schwefelsaeure", "sicherheit"]
  ),
  wif(
    "ch-wif-050",
    "chem-kap5",
    "Welche der folgenden Aussagen zu Kohlenstoffverbindungen in der anorganischen Chemie ist FALSCH?",
    [
      "CO₂ ist ein lineares Molekül.",
      "CO ist ein starkes Gift, weil es Hämoglobin blockiert.",
      "Carbonate reagieren mit Säuren unter CO₂-Entwicklung.",
      "Kohlenstoffdioxid ist ein unpolares Molekül.",
      "Hydrogencarbonat (HCO₃⁻) entsteht bei der Reaktion von CO₂ mit Natronlauge als einziges Produkt.",
    ],
    4,
    "Option E ist falsch. Bei der Reaktion von CO₂ mit Natronlauge entsteht je nach Mengenverhältnis zunächst Natriumhydrogencarbonat (NaHCO₃) und bei Überschuss an NaOH auch Natriumcarbonat (Na₂CO₃). Hydrogencarbonat ist also nicht das einzige Produkt.",
    "schwer",
    ["kohlenstoffdioxid", "carbonate"]
  ),

  // ─── chem-kap6 / chem-kap3: Organische Chemie und Bindungslehre (10 Fragen) ───
  wif(
    "ch-wif-051",
    "chem-kap6",
    "Welche der folgenden Aussagen zu funktionellen Gruppen ist FALSCH?",
    [
      "Die Hydroxylgruppe (−OH) charakterisiert Alkohole.",
      "Die Carboxylgruppe (−COOH) charakterisiert Carbonsäuren.",
      "Die Aminogruppe (−NH₂) charakterisiert Amine.",
      "Die Aldehydgruppe (−CHO) charakterisiert Ketone.",
      "Die Estergruppe (−COO−) entsteht durch Reaktion einer Carbonsäure mit einem Alkohol.",
    ],
    3,
    "Option D ist falsch. Die Aldehydgruppe (−CHO) charakterisiert Aldehyde, nicht Ketone. Ketone haben die Carbonylgruppe (C=O) zwischen zwei Kohlenstoffatomen (R−CO−R').",
    "leicht",
    ["funktionelle gruppen", "aldehyd", "keton"]
  ),
  wif(
    "ch-wif-052",
    "chem-kap6",
    "Welche der folgenden Aussagen zu Alkanen ist FALSCH?",
    [
      "Alkane sind gesättigte Kohlenwasserstoffe mit Einfachbindungen.",
      "Methan (CH₄) hat eine tetraedrische Geometrie.",
      "Alkane zeigen Konstitutionsisomerie ab Butan (C₄H₁₀).",
      "Die Siedepunkte der Alkane steigen mit zunehmender Kettenlänge.",
      "Alkane sind sehr reaktiv gegenüber Säuren und Basen.",
    ],
    4,
    "Option E ist falsch. Alkane sind unter Normalbedingungen chemisch sehr unreaktiv (daher der Name 'Paraffine' = parum affinis = wenig reaktionsfreudig). Sie reagieren weder mit Säuren noch mit Basen, sondern nur unter drastischen Bedingungen (z. B. radikalische Substitution mit Halogenen).",
    "leicht",
    ["alkane", "reaktivitaet"]
  ),
  wif(
    "ch-wif-053",
    "chem-kap6",
    "Welche der folgenden Aussagen zu Isomerie ist FALSCH?",
    [
      "Konstitutionsisomere haben die gleiche Summenformel, aber unterschiedliche Verknüpfung der Atome.",
      "Enantiomere verhalten sich wie Bild und Spiegelbild.",
      "cis-trans-Isomerie tritt an Doppelbindungen auf.",
      "Enantiomere haben unterschiedliche Schmelzpunkte.",
      "Chirale Moleküle besitzen keinen Symmetrieebene.",
    ],
    3,
    "Option D ist falsch. Enantiomere haben identische physikalische Eigenschaften (Schmelz-, Siedepunkt, Löslichkeit) und unterscheiden sich nur in der Drehung von polarisiertem Licht und in der Wechselwirkung mit anderen chiralen Molekülen.",
    "mittel",
    ["isomerie", "enantiomere", "chiralitaet"]
  ),
  wif(
    "ch-wif-054",
    "chem-kap3",
    "Welche der folgenden Aussagen zur kovalenten Bindung ist FALSCH?",
    [
      "Kovalente Bindungen entstehen durch gemeinsame Elektronenpaare.",
      "Die Bindungsenergie einer Dreifachbindung ist grösser als die einer Einfachbindung.",
      "Sigma-Bindungen (σ) entstehen durch frontale Orbitalüberlappung.",
      "Pi-Bindungen (π) sind frei drehbar.",
      "Die Bindungslänge einer Dreifachbindung ist kürzer als die einer Einfachbindung.",
    ],
    3,
    "Option D ist falsch. Pi-Bindungen (π) sind nicht frei drehbar, da sie durch seitliche Überlappung von p-Orbitalen entstehen. Eine Drehung würde die Überlappung zerstören. Nur um Sigma-Bindungen ist freie Rotation möglich.",
    "mittel",
    ["kovalente bindung", "pi-bindung"]
  ),
  wif(
    "ch-wif-055",
    "chem-kap6",
    "Welche der folgenden Aussagen zur Veresterung ist FALSCH?",
    [
      "Bei der Veresterung reagiert eine Carbonsäure mit einem Alkohol.",
      "Wasser wird als Nebenprodukt abgespalten (Kondensationsreaktion).",
      "Die Veresterung ist eine irreversible Reaktion.",
      "Ester sind häufig für den Geruch von Früchten verantwortlich.",
      "Schwefelsäure kann als Katalysator eingesetzt werden.",
    ],
    2,
    "Option C ist falsch. Die Veresterung ist eine reversible Gleichgewichtsreaktion. Durch Entfernen des Wassers (z. B. mit einem Trockenmittel) oder durch Überschuss eines Edukts lässt sich das Gleichgewicht zugunsten des Esters verschieben.",
    "mittel",
    ["veresterung", "gleichgewicht"]
  ),
  wif(
    "ch-wif-056",
    "chem-kap3",
    "Welche der folgenden Aussagen zur Hybridisierung ist FALSCH?",
    [
      "sp³-hybridisierte Kohlenstoffatome haben eine tetraedrische Geometrie.",
      "sp²-hybridisierte Kohlenstoffatome haben eine trigonal-planare Geometrie.",
      "sp-hybridisierte Kohlenstoffatome haben eine lineare Geometrie.",
      "Methan (CH₄) enthält sp²-hybridisierten Kohlenstoff.",
      "Die Hybridisierung bestimmt die Geometrie um ein Atom.",
    ],
    3,
    "Option D ist falsch. Der Kohlenstoff in Methan (CH₄) ist sp³-hybridisiert (nicht sp²), was zu der tetraedrischen Geometrie mit Bindungswinkeln von 109,5° führt.",
    "mittel",
    ["hybridisierung", "geometrie"]
  ),
  wif(
    "ch-wif-057",
    "chem-kap6",
    "Welche der folgenden Aussagen zu Aromaten ist FALSCH?",
    [
      "Benzol hat 6 delokalisierte π-Elektronen.",
      "Die Hückel-Regel gilt für planare, cyclische Systeme mit 4n+2 π-Elektronen.",
      "Benzol reagiert bevorzugt durch elektrophile Substitution, nicht Addition.",
      "Alle C−C-Bindungen in Benzol sind gleich lang.",
      "Benzol hat abwechselnd Einfach- und Doppelbindungen.",
    ],
    4,
    "Option E ist falsch. Benzol hat keine abwechselnden Einfach- und Doppelbindungen. Die 6 π-Elektronen sind vollständig delokalisiert, sodass alle C−C-Bindungen gleich lang sind (ca. 140 pm, zwischen Einfach- und Doppelbindung).",
    "mittel",
    ["aromaten", "benzol", "delokalisierung"]
  ),
  wif(
    "ch-wif-058",
    "chem-kap3",
    "Welche der folgenden Aussagen zur ionischen Bindung ist FALSCH?",
    [
      "Ionische Bindungen entstehen zwischen Metallen und Nichtmetallen.",
      "Die Gitterenergie ist ein Mass für die Stärke des Ionengitters.",
      "Ionisch gebundene Stoffe haben hohe Schmelzpunkte.",
      "Die Gitterenergie nimmt mit zunehmendem Ionenradius zu.",
      "NaCl ist ein typisches Beispiel für eine ionische Verbindung.",
    ],
    3,
    "Option D ist falsch. Die Gitterenergie nimmt mit zunehmendem Ionenradius ab (nicht zu), da der Abstand zwischen den Ionen grösser wird und die elektrostatische Anziehung nachlässt (Coulomb-Gesetz: F ∝ 1/r²).",
    "mittel",
    ["ionische bindung", "gitterenergie"]
  ),
  wif(
    "ch-wif-059",
    "chem-kap6",
    "Welche der folgenden Aussagen zu Kohlenhydraten ist FALSCH?",
    [
      "Glucose ist eine Hexose (C₆H₁₂O₆).",
      "Saccharose besteht aus Glucose und Fructose.",
      "Stärke ist ein Polysaccharid aus Glucose-Einheiten.",
      "Cellulose kann vom Menschen enzymatisch verdaut werden.",
      "Lactose ist ein Disaccharid aus Glucose und Galactose.",
    ],
    3,
    "Option D ist falsch. Cellulose kann vom Menschen nicht verdaut werden, da uns das Enzym Cellulase fehlt. Die β-1,4-glykosidischen Bindungen der Cellulose können nur von bestimmten Mikroorganismen (z. B. bei Wiederkäuern) gespalten werden.",
    "leicht",
    ["kohlenhydrate", "cellulose"]
  ),
  wif(
    "ch-wif-060",
    "chem-kap3",
    "Welche der folgenden Aussagen zur Metallbindung ist FALSCH?",
    [
      "In der Metallbindung bilden die Atomrümpfe ein Gitter, umgeben von einem Elektronengas.",
      "Die hohe elektrische Leitfähigkeit von Metallen beruht auf den delokalisierten Elektronen.",
      "Die Wärmeleitfähigkeit von Metallen wird hauptsächlich durch die Elektronen vermittelt.",
      "Metalle sind spröde und brechen bei mechanischer Belastung.",
      "Metallischer Glanz entsteht durch die Wechselwirkung von Licht mit dem Elektronengas.",
    ],
    3,
    "Option D ist falsch. Metalle sind im Gegensatz zu ionischen oder kovalenten Kristallen nicht spröde, sondern duktil (dehnbar) und malleabel (verformbar). Die Gitterebenen können übereinander gleiten, ohne dass die Bindung bricht, da das Elektronengas sich anpasst.",
    "leicht",
    ["metallbindung", "duktilitaet"]
  ),
];
