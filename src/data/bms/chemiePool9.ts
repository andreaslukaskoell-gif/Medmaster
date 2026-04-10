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
export const chemiePool9: Question[] = [
  // ── chem-kap1: Atombau / Periodensystem ──────────────────────────────────

  q(
    "ch-pool-9-001",
    "chem-kap1",
    "Ein Patient erhält eine PET-Untersuchung mit ¹⁸F (9 Protonen, 9 Neutronen). Wie viele Elektronen besitzt ein neutrales ¹⁸F-Atom?",
    ["8", "9", "10", "18", "17"],
    1,
    "Ein neutrales Atom hat gleich viele Elektronen wie Protonen. ¹⁸F hat 9 Protonen, also 9 Elektronen.",
    "schwer",
    ["atombau", "elektronen"]
  ),

  q(
    "ch-pool-9-002",
    "chem-kap1",
    "Welche der folgenden Aussagen zum Periodensystem ist falsch?",
    [
      "Die Elektronegativität nimmt innerhalb einer Periode von links nach rechts zu",
      "Der Atomradius nimmt innerhalb einer Periode von links nach rechts ab",
      "Die Ionisierungsenergie nimmt innerhalb einer Gruppe von oben nach unten zu",
      "Die Elektronenaffinität ist bei Halogenen besonders hoch",
      "Edelgase stehen in der 18. Gruppe (VIII. Hauptgruppe)",
    ],
    2,
    "Die Ionisierungsenergie nimmt innerhalb einer Gruppe von oben nach unten AB (nicht zu), da die Valenzelektronen weiter vom Kern entfernt und stärker abgeschirmt sind.",
    "schwer",
    ["periodensystem", "falsch-aussage"]
  ),

  q(
    "ch-pool-9-003",
    "chem-kap1",
    "Welche Elektronenkonfiguration hat das Calcium-Ion (Ca²⁺)?",
    [
      "1s² 2s² 2p⁶ 3s² 3p⁶ 4s²",
      "1s² 2s² 2p⁶ 3s² 3p⁶",
      "1s² 2s² 2p⁶ 3s² 3p⁴",
      "1s² 2s² 2p⁶ 3s² 3p⁶ 3d²",
      "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹",
    ],
    1,
    "Ca (Z = 20) hat die Konfiguration [Ar] 4s². Ca²⁺ verliert die zwei 4s-Elektronen → [Ar] = 1s² 2s² 2p⁶ 3s² 3p⁶ (Edelgaskonfiguration).",
    "leicht",
    ["elektronenkonfiguration", "ionen"]
  ),

  q(
    "ch-pool-9-004",
    "chem-kap1",
    "In der Röntgendiagnostik nutzt man Barium (Z = 56) als Kontrastmittel. Welche Aussage zur Elektronenkonfiguration von Barium ist korrekt?",
    [
      "Die Valenzelektronen befinden sich im 5d-Orbital",
      "Ba hat 2 Valenzelektronen im 6s-Orbital",
      "Ba gehört zu den Übergangsmetallen",
      "Die Elektronenkonfiguration endet mit 5p⁶",
      "Ba hat 6 Valenzelektronen",
    ],
    1,
    "Barium (Z = 56) ist ein Erdalkalimetall (2. Hauptgruppe) mit der Konfiguration [Xe] 6s². Es hat 2 Valenzelektronen im 6s-Orbital.",
    "mittel",
    ["elektronenkonfiguration", "periodensystem"]
  ),

  q(
    "ch-pool-9-005",
    "chem-kap1",
    "Welche der folgenden Aussagen über Isotope ist falsch?",
    [
      "Isotope eines Elements haben die gleiche Ordnungszahl",
      "Isotope unterscheiden sich in der Neutronenzahl",
      "Isotope haben identische chemische Eigenschaften",
      "Isotope haben unterschiedliche Massenzahlen",
      "Isotope eines Elements haben unterschiedliche Elektronenzahlen im neutralen Zustand",
    ],
    4,
    "Isotope haben die gleiche Ordnungszahl (= gleiche Protonenzahl = gleiche Elektronenzahl im neutralen Zustand). Sie unterscheiden sich nur in der Neutronenzahl und damit der Massenzahl.",
    "mittel",
    ["isotope", "falsch-aussage"]
  ),

  q(
    "ch-pool-9-006",
    "chem-kap1",
    "Jod-131 wird in der Nuklearmedizin zur Schilddrüsentherapie eingesetzt. ¹³¹I hat 53 Protonen. Wie viele Neutronen enthält der Kern?",
    ["53", "78", "131", "184", "64"],
    1,
    "Neutronenzahl = Massenzahl − Protonenzahl = 131 − 53 = 78.",
    "mittel",
    ["atombau", "rechenfrage"]
  ),

  q(
    "ch-pool-9-007",
    "chem-kap1",
    "Welche der folgenden Aussagen zum Bohr'schen Atommodell ist falsch?",
    [
      "Elektronen bewegen sich auf festen Kreisbahnen um den Kern",
      "Beim Übergang auf eine niedrigere Schale wird Energie als Photon emittiert",
      "Das Modell erklärt die Linienspektren des Wasserstoffs",
      "Die Energie der Bahnen ist quantisiert",
      "Es beschreibt die Aufenthaltswahrscheinlichkeit der Elektronen als Orbitalwolke",
    ],
    4,
    "Das Bohr'sche Modell verwendet feste Kreisbahnen, nicht Orbitalwolken. Die Beschreibung als Aufenthaltswahrscheinlichkeit gehört zum quantenmechanischen Orbitalmodell.",
    "mittel",
    ["atommodell", "falsch-aussage"]
  ),

  q(
    "ch-pool-9-008",
    "chem-kap1",
    "Technetium-99m (⁹⁹ᵐTc) ist das häufigste Radionuklid in der Szintigraphie. Es entsteht durch γ-Zerfall aus ⁹⁹Mo. Welche Aussage ist korrekt?",
    [
      "Beim γ-Zerfall ändert sich die Massenzahl um 4",
      "Beim γ-Zerfall wird ein Neutron in ein Proton umgewandelt",
      "Beim γ-Zerfall ändert sich weder Massen- noch Ordnungszahl",
      "Beim γ-Zerfall wird ein Heliumkern emittiert",
      "Beim γ-Zerfall erhöht sich die Ordnungszahl um 1",
    ],
    2,
    "Beim γ-Zerfall geht der Kern von einem angeregten in einen energieärmeren Zustand über. Es wird nur ein γ-Photon emittiert, Massen- und Ordnungszahl bleiben unverändert.",
    "mittel",
    ["radioaktivitaet", "kernzerfall"]
  ),

  q(
    "ch-pool-9-009",
    "chem-kap1",
    "Ein Kation mit der Elektronenkonfiguration 1s² 2s² 2p⁶ hat die Ladung 1+. Um welches Element handelt es sich?",
    ["Fluor (F)", "Neon (Ne)", "Natrium (Na)", "Sauerstoff (O)", "Magnesium (Mg)"],
    2,
    "Die Konfiguration 1s² 2s² 2p⁶ entspricht 10 Elektronen. Bei Ladung 1+ hat das Atom 11 Protonen → Z = 11 = Natrium. Na⁺ hat Neon-Konfiguration.",
    "mittel",
    ["elektronenkonfiguration", "ionen"]
  ),

  q(
    "ch-pool-9-010",
    "chem-kap1",
    "Lithium (Z = 3) wird als Lithiumcarbonat in der Psychiatrie eingesetzt. Welche Aussage zu Li ist falsch?",
    [
      "Li hat 1 Valenzelektron",
      "Li gehört zur 1. Hauptgruppe (Alkalimetalle)",
      "Li hat den kleinsten Atomradius unter den Alkalimetallen",
      "Li bildet bevorzugt das Kation Li⁺",
      "Li hat eine höhere Elektronegativität als Caesium, da es mehr Protonen hat",
    ],
    4,
    "Die höhere Elektronegativität von Li gegenüber Cs liegt am kleineren Atomradius (stärkere Anziehung der Valenzelektronen), nicht an der Protonenzahl allein. Allerdings ist die Aussage E irreführend formuliert – die Begründung 'da es mehr Protonen hat' ist falsch (Li hat weniger Protonen als Cs). Die höhere EN beruht auf dem kleineren Radius.",
    "schwer",
    ["periodensystem", "falsch-aussage"]
  ),

  q(
    "ch-pool-9-011",
    "chem-kap1",
    "Welches der folgenden Elemente hat die höchste erste Ionisierungsenergie?",
    ["Natrium (Na)", "Magnesium (Mg)", "Aluminium (Al)", "Silicium (Si)", "Neon (Ne)"],
    4,
    "Neon ist ein Edelgas mit vollständig gefüllter Elektronenschale. Die vollständige Oktettkonfiguration bedingt die höchste Ionisierungsenergie in der 2. Periode.",
    "mittel",
    ["ionisierungsenergie", "periodensystem"]
  ),

  // ── chem-kap2: Materie / Aggregatzustände / Löslichkeit ──────────────────

  q(
    "ch-pool-9-012",
    "chem-kap2",
    "Welche der folgenden Aussagen zum Dampfdruck ist falsch?",
    [
      "Der Dampfdruck steigt mit zunehmender Temperatur",
      "Am Siedepunkt entspricht der Dampfdruck dem Umgebungsdruck",
      "Flüchtige Substanzen haben bei gleicher Temperatur einen höheren Dampfdruck",
      "Der Dampfdruck ist unabhängig von der Oberfläche der Flüssigkeit",
      "Der Dampfdruck hängt vom Volumen des Gasraums über der Flüssigkeit ab",
    ],
    4,
    "Der Dampfdruck ist eine stoffspezifische Größe, die nur von der Temperatur und der Natur der Flüssigkeit abhängt – nicht vom Volumen des Gasraums. Aussage E ist falsch.",
    "schwer",
    ["dampfdruck", "falsch-aussage"]
  ),

  q(
    "ch-pool-9-013",
    "chem-kap2",
    "Eine physiologische Kochsalzlösung (0,9 % NaCl) wird intravenös verabreicht. Welche Aussage zu dieser Lösung ist korrekt?",
    [
      "Sie ist hypertonisch gegenüber dem Blutplasma",
      "Sie ist isotonisch gegenüber dem Blutplasma",
      "NaCl dissoziiert in Wasser nicht in Ionen",
      "Die Lösung enthält 9 g NaCl pro Liter",
      "NaCl ist in dieser Lösung der Lösungsmittels",
    ],
    1,
    "0,9 % NaCl (9 g/L) ist isotonisch zum Blutplasma (~290 mOsmol/L). NaCl dissoziiert vollständig in Na⁺ und Cl⁻.",
    "mittel",
    ["loesungen", "osmolaritaet"]
  ),

  q(
    "ch-pool-9-014",
    "chem-kap2",
    "Welche der folgenden Aussagen zu Wasserstoffbrückenbindungen ist falsch?",
    [
      "Sie sind stärker als Van-der-Waals-Kräfte, aber schwächer als kovalente Bindungen",
      "Sie erklären den anomal hohen Siedepunkt von Wasser",
      "Sie treten zwischen einem H-Atom an einem elektronegativen Atom und einem freien Elektronenpaar auf",
      "Sie sind der Grund für die Dichteanomalie des Wassers",
      "Sie treten nur zwischen gleichen Molekülen auf, nicht zwischen verschiedenen",
    ],
    4,
    "Wasserstoffbrücken treten auch zwischen verschiedenen Molekülen auf, z. B. zwischen Wasser und Ethanol oder zwischen DNA-Basenpaaren (A–T, G–C).",
    "schwer",
    ["wasserstoffbruecken", "falsch-aussage"]
  ),

  q(
    "ch-pool-9-015",
    "chem-kap2",
    "Bei der Narkose wird Sevofluran verwendet, eine leicht flüchtige Flüssigkeit. Welcher Zusammenhang zwischen intermolekularen Kräften und Siedepunkt ist korrekt?",
    [
      "Je stärker die intermolekularen Kräfte, desto niedriger der Siedepunkt",
      "Je stärker die intermolekularen Kräfte, desto höher der Siedepunkt",
      "Der Siedepunkt hängt ausschließlich von der Molmasse ab",
      "Van-der-Waals-Kräfte haben keinen Einfluss auf den Siedepunkt",
      "Dipol-Dipol-Wechselwirkungen senken den Siedepunkt",
    ],
    1,
    "Stärkere intermolekulare Kräfte → mehr Energie nötig, um Moleküle in die Gasphase zu überführen → höherer Siedepunkt.",
    "schwer",
    ["intermolekulare-kraefte", "siedepunkt"]
  ),

  q(
    "ch-pool-9-016",
    "chem-kap2",
    "Welche der folgenden Substanzen hat den höchsten Siedepunkt?",
    [
      "Methan (CH₄)",
      "Dimethylether (CH₃OCH₃)",
      "Ethanol (C₂H₅OH)",
      "Ethan (C₂H₆)",
      "Propan (C₃H₈)",
    ],
    2,
    "Ethanol bildet Wasserstoffbrücken (OH-Gruppe), was zu einem deutlich höheren Siedepunkt (78 °C) führt als bei den anderen Substanzen, die nur Van-der-Waals- oder Dipol-Wechselwirkungen zeigen.",
    "mittel",
    ["siedepunkt", "intermolekulare-kraefte"]
  ),

  q(
    "ch-pool-9-017",
    "chem-kap2",
    "In einem geschlossenen Gefäß befindet sich Wasser bei 100 °C und 1 atm. Welche Aussage beschreibt den Zustand korrekt?",
    [
      "Alles Wasser liegt als Dampf vor",
      "Es liegt ein dynamisches Gleichgewicht zwischen flüssiger und gasförmiger Phase vor",
      "Das Wasser verdampft vollständig, da der Siedepunkt erreicht ist",
      "Der Dampfdruck ist größer als der Umgebungsdruck",
      "Verdampfung findet nur an der Oberfläche statt, kein Sieden",
    ],
    1,
    "Am Siedepunkt in einem geschlossenen Gefäß stellt sich ein Gleichgewicht zwischen Verdampfung und Kondensation ein. Der Dampfdruck entspricht dem Umgebungsdruck.",
    "mittel",
    ["phasengleichgewicht", "siedepunkt"]
  ),

  q(
    "ch-pool-9-018",
    "chem-kap2",
    "Die Siedepunkterhöhung einer Infusionslösung gegenüber reinem Wasser beträgt 0,52 °C. Die ebullioskopische Konstante von Wasser ist Kb = 0,52 °C·kg/mol. Welche Molalität hat die Lösung (unter der Annahme, dass der gelöste Stoff nicht dissoziiert)?",
    ["0,5 mol/kg", "1,0 mol/kg", "0,52 mol/kg", "2,0 mol/kg", "0,26 mol/kg"],
    1,
    "ΔT = Kb · m → m = ΔT / Kb = 0,52 / 0,52 = 1,0 mol/kg.",
    "schwer",
    ["kolligative-eigenschaften", "rechenfrage"]
  ),

  q(
    "ch-pool-9-019",
    "chem-kap2",
    "Welche Eigenschaft von Wasser ist NICHT auf Wasserstoffbrückenbindungen zurückzuführen?",
    [
      "Hohe spezifische Wärmekapazität",
      "Hohe Oberflächenspannung",
      "Dichteanomalie bei 4 °C",
      "Fähigkeit, ionische Verbindungen zu lösen",
      "Hohe Verdampfungsenthalpie",
    ],
    3,
    "Die Fähigkeit von Wasser, ionische Verbindungen zu lösen, beruht auf der hohen Dielektrizitätskonstante und der Fähigkeit zur Ion-Dipol-Wechselwirkung, nicht primär auf H-Brücken.",
    "mittel",
    ["wasser", "loesungsmittel"]
  ),

  q(
    "ch-pool-9-020",
    "chem-kap2",
    "Eine Lösung enthält 180 g Glucose (M = 180 g/mol) in 1 kg Wasser. Wie groß ist die Gefrierpunkterniedrigung? (Kf(Wasser) = 1,86 °C·kg/mol)",
    ["0,93 °C", "1,86 °C", "3,72 °C", "0,186 °C", "18,6 °C"],
    1,
    "n = 180 g / 180 g/mol = 1 mol. Molalität = 1 mol/kg. ΔT = Kf · m = 1,86 · 1 = 1,86 °C. Der Gefrierpunkt liegt bei −1,86 °C.",
    "mittel",
    ["kolligative-eigenschaften", "rechenfrage"]
  ),

  q(
    "ch-pool-9-021",
    "chem-kap2",
    "Welche der folgenden Aussagen zur Osmose ist falsch?",
    [
      "Osmose ist die Diffusion von Lösungsmittel durch eine semipermeable Membran",
      "Der osmotische Druck ist proportional zur Konzentration gelöster Teilchen",
      "In einer hypertonen Lösung schrumpfen Erythrozyten (Krenation)",
      "Der osmotische Druck wird durch die Van-'t-Hoff-Gleichung beschrieben",
      "Bei der Osmose wandert das Lösungsmittel von der konzentrierteren zur verdünnteren Seite",
    ],
    4,
    "Bei der Osmose wandert das Lösungsmittel von der verdünnteren zur konzentrierteren Seite (entlang des Konzentrationsgefälles des Lösungsmittels). Aussage E kehrt die Richtung um.",
    "mittel",
    ["osmose", "falsch-aussage"]
  ),

  q(
    "ch-pool-9-022",
    "chem-kap2",
    "Beim Sublimieren von Trockeneis (CO₂) in der Dermatologie geht das CO₂ direkt vom festen in den gasförmigen Zustand über. Welche Aussage ist korrekt?",
    [
      "Der Prozess ist exotherm",
      "Der Prozess findet unterhalb des Tripelpunkts von CO₂ bei Normaldruck statt",
      "CO₂ durchläuft dabei kurzzeitig die flüssige Phase",
      "Die Sublimation erfordert weniger Energie als die Verdampfung",
      "Der Tripelpunkt von CO₂ liegt bei 1 atm",
    ],
    1,
    "Der Tripelpunkt von CO₂ liegt bei 5,11 atm und −56,6 °C. Bei Normaldruck (1 atm) existiert keine flüssige Phase – CO₂ sublimiert direkt. Der Prozess ist endotherm.",
    "schwer",
    ["phasendiagramm", "sublimation"]
  ),

  q(
    "ch-pool-9-023",
    "chem-kap2",
    "In einem Labor wird eine 5-molare NaCl-Lösung hergestellt. NaCl dissoziiert vollständig. Wie groß ist die Osmolarität?",
    ["5 Osmol/L", "10 Osmol/L", "2,5 Osmol/L", "15 Osmol/L", "7,5 Osmol/L"],
    1,
    "NaCl → Na⁺ + Cl⁻ (2 Teilchen pro Formeleinheit). Osmolarität = Molarität × Anzahl Teilchen = 5 × 2 = 10 Osmol/L.",
    "schwer",
    ["osmolaritaet", "rechenfrage"]
  ),

  // ── chem-kap3: Chemische Bindung ─────────────────────────────────────────

  q(
    "ch-pool-9-024",
    "chem-kap3",
    "Welche der folgenden Aussagen zur Ionenbindung ist falsch?",
    [
      "Ionenbindungen entstehen durch Elektronenübertragung zwischen Metall und Nichtmetall",
      "Ionenverbindungen bilden Kristallgitter",
      "Ionenverbindungen leiten im festen Zustand den elektrischen Strom",
      "Die Stärke der Ionenbindung wird durch die Gitterenergie beschrieben",
      "NaCl ist ein typisches Beispiel für eine Ionenverbindung",
    ],
    2,
    "Ionenverbindungen leiten im festen Zustand NICHT den elektrischen Strom, da die Ionen im Gitter fixiert sind. Erst in Lösung oder Schmelze sind die Ionen beweglich und leiten.",
    "mittel",
    ["ionenbindung", "falsch-aussage"]
  ),

  q(
    "ch-pool-9-025",
    "chem-kap3",
    "In der Anästhesie wird Lachgas (N₂O) verwendet. Welche Bindungsart liegt zwischen den Atomen im N₂O-Molekül vor?",
    [
      "Ausschließlich Ionenbindungen",
      "Kovalente Bindungen (Atombindungen)",
      "Metallische Bindungen",
      "Ausschließlich Van-der-Waals-Kräfte",
      "Koordinative Bindungen ohne σ-Anteil",
    ],
    1,
    "N₂O besteht aus Nichtmetallen, die Elektronen teilen → kovalente Bindungen. Die Struktur ist N=N=O (mit formalen Ladungen).",
    "leicht",
    ["kovalente-bindung", "bindungstypen"]
  ),

  q(
    "ch-pool-9-026",
    "chem-kap3",
    "Welche Aussage zur metallischen Bindung ist korrekt?",
    [
      "Die Valenzelektronen sind fest an einzelne Atome gebunden",
      "Metalle sind aufgrund starrer Gitterstrukturen spröde",
      "Die delokalisierte Elektronenwolke erklärt die elektrische Leitfähigkeit",
      "Metallische Bindungen existieren nur in reinen Elementen, nicht in Legierungen",
      "Die Bindungsstärke ist unabhängig von der Anzahl der Valenzelektronen",
    ],
    2,
    "Im Metallgitter sind die Valenzelektronen delokalisiert ('Elektronengas'). Diese frei beweglichen Elektronen ermöglichen die hohe elektrische und thermische Leitfähigkeit.",
    "leicht",
    ["metallische-bindung"]
  ),

  q(
    "ch-pool-9-027",
    "chem-kap3",
    "Welche der folgenden Moleküle ist polar?",
    ["CO₂", "CH₄", "H₂O", "BF₃", "CCl₄"],
    2,
    "H₂O hat eine gewinkelte Struktur (sp³, 2 freie Elektronenpaare). Die Dipolmomente der O–H-Bindungen heben sich nicht auf → polares Molekül. CO₂ (linear), CH₄ (tetraedrisch), BF₃ (trigonal-planar) und CCl₄ (tetraedrisch) sind symmetrisch → unpolar.",
    "mittel",
    ["polaritaet", "molekuelgeometrie"]
  ),

  q(
    "ch-pool-9-028",
    "chem-kap3",
    "Welche der folgenden Aussagen zu Dipol-Dipol-Wechselwirkungen ist falsch?",
    [
      "Sie treten zwischen polaren Molekülen auf",
      "Sie sind schwächer als kovalente Bindungen",
      "Sie beeinflussen den Siedepunkt einer Substanz",
      "Sie sind bei Gasen unter Normalbedingungen die stärkste intermolekulare Kraft",
      "Aceton zeigt Dipol-Dipol-Wechselwirkungen aufgrund der C=O-Gruppe",
    ],
    3,
    "Bei Gasen unter Normalbedingungen sind die Moleküle so weit voneinander entfernt, dass intermolekulare Kräfte generell sehr schwach sind. Die Aussage, Dipol-Dipol-Kräfte seien die 'stärkste intermolekulare Kraft' bei Gasen, ist irreführend – bei vielen Gasen dominieren London-Dispersionskräfte.",
    "schwer",
    ["dipol", "falsch-aussage"]
  ),

  q(
    "ch-pool-9-029",
    "chem-kap3",
    "Wie viele σ- und π-Bindungen enthält ein Molekül Ethin (Acetylen, HC≡CH)?",
    ["2 σ, 3 π", "3 σ, 2 π", "5 σ, 0 π", "1 σ, 4 π", "4 σ, 1 π"],
    1,
    "HC≡CH: 2× C–H σ-Bindung + 1× C–C σ-Bindung = 3 σ. Die Dreifachbindung enthält zusätzlich 2 π-Bindungen. Gesamt: 3 σ + 2 π.",
    "mittel",
    ["sigma-pi-bindungen", "rechenfrage"]
  ),

  q(
    "ch-pool-9-030",
    "chem-kap3",
    "Ammoniak (NH₃) hat ein freies Elektronenpaar am Stickstoff. Welche Molekülgeometrie resultiert nach dem VSEPR-Modell?",
    ["Tetraedrisch", "Trigonal-planar", "Trigonal-pyramidal", "Gewinkelt", "Linear"],
    2,
    "NH₃: 3 Bindungspaare + 1 freies Elektronenpaar → Elektronenpaargeometrie tetraedrisch, Molekülgeometrie trigonal-pyramidal (das freie Paar drückt die H-Atome nach unten).",
    "leicht",
    ["vsepr", "molekuelgeometrie"]
  ),

  // ── chem-kap-stoech: Stöchiometrie ──────────────────────────────────────

  q(
    "ch-pool-9-031",
    "chem-kap-stoech",
    "Wie viele Mol Sauerstoff (O₂) werden benötigt, um 2 mol Glucose (C₆H₁₂O₆) vollständig zu verbrennen? Reaktionsgleichung: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O",
    ["6 mol", "12 mol", "2 mol", "18 mol", "3 mol"],
    1,
    "Pro mol Glucose werden 6 mol O₂ benötigt. Für 2 mol Glucose: 2 × 6 = 12 mol O₂.",
    "mittel",
    ["stoechiometrie", "rechenfrage"]
  ),

  q(
    "ch-pool-9-032",
    "chem-kap-stoech",
    "Wie viel Gramm NaOH (M = 40 g/mol) werden benötigt, um 500 mL einer 0,1-molaren Lösung herzustellen?",
    ["4 g", "2 g", "0,5 g", "20 g", "40 g"],
    1,
    "n = c × V = 0,1 mol/L × 0,5 L = 0,05 mol. m = n × M = 0,05 × 40 = 2 g.",
    "leicht",
    ["stoechiometrie", "rechenfrage"]
  ),

  q(
    "ch-pool-9-033",
    "chem-kap-stoech",
    "Bei der Reaktion von Magnesium mit Salzsäure (Mg + 2 HCl → MgCl₂ + H₂) werden 24,3 g Mg eingesetzt. Wie viel Liter H₂ entstehen bei STP (M(Mg) = 24,3 g/mol, Vm = 22,4 L/mol)?",
    ["11,2 L", "22,4 L", "44,8 L", "2,24 L", "33,6 L"],
    1,
    "n(Mg) = 24,3 / 24,3 = 1 mol. Laut Gleichung entsteht 1 mol H₂ pro mol Mg. V = 1 mol × 22,4 L/mol = 22,4 L.",
    "mittel",
    ["stoechiometrie", "rechenfrage"]
  ),

  q(
    "ch-pool-9-034",
    "chem-kap-stoech",
    "In einem pharmazeutischen Labor wird eine Verdünnung hergestellt: 50 mL einer 2-molaren HCl-Lösung werden auf 500 mL verdünnt. Welche Konzentration hat die verdünnte Lösung?",
    ["0,1 mol/L", "0,2 mol/L", "0,5 mol/L", "1,0 mol/L", "0,02 mol/L"],
    1,
    "Verdünnungsgleichung: c₁V₁ = c₂V₂ → c₂ = (2 × 0,05) / 0,5 = 0,2 mol/L.",
    "mittel",
    ["verduennung", "rechenfrage"]
  ),

  q(
    "ch-pool-9-035",
    "chem-kap-stoech",
    "Wie viel Gramm Eisen(III)-oxid (Fe₂O₃, M = 160 g/mol) entstehen bei der vollständigen Oxidation von 112 g Eisen (M(Fe) = 56 g/mol)? Gleichung: 4 Fe + 3 O₂ → 2 Fe₂O₃",
    ["80 g", "160 g", "320 g", "240 g", "64 g"],
    1,
    "n(Fe) = 112/56 = 2 mol. Laut Gleichung: 4 mol Fe → 2 mol Fe₂O₃, also 2 mol Fe → 1 mol Fe₂O₃. m = 1 × 160 = 160 g.",
    "schwer",
    ["stoechiometrie", "rechenfrage"]
  ),

  q(
    "ch-pool-9-036",
    "chem-kap-stoech",
    "Eine Probe von 5,0 g CaCO₃ (M = 100 g/mol) wird mit überschüssiger HCl versetzt: CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂. Wie viele Liter CO₂ entstehen bei STP?",
    ["0,56 L", "1,12 L", "2,24 L", "5,60 L", "11,2 L"],
    1,
    "n(CaCO₃) = 5,0/100 = 0,05 mol. 1:1-Verhältnis → 0,05 mol CO₂. V = 0,05 × 22,4 = 1,12 L.",
    "schwer",
    ["stoechiometrie", "rechenfrage"]
  ),

  q(
    "ch-pool-9-037",
    "chem-kap-stoech",
    "Bei einer Titration werden 25 mL einer NaOH-Lösung unbekannter Konzentration mit 0,1 M HCl neutralisiert. Es werden 20 mL HCl verbraucht. Welche Konzentration hat die NaOH-Lösung?",
    ["0,04 mol/L", "0,08 mol/L", "0,10 mol/L", "0,125 mol/L", "0,20 mol/L"],
    1,
    "NaOH + HCl → NaCl + H₂O (1:1). n(HCl) = 0,1 × 0,020 = 0,002 mol = n(NaOH). c(NaOH) = 0,002/0,025 = 0,08 mol/L.",
    "schwer",
    ["titration", "rechenfrage"]
  ),

  q(
    "ch-pool-9-038",
    "chem-kap-stoech",
    "Welche Masse an Wasser entsteht bei der Verbrennung von 8 g Methan (CH₄, M = 16 g/mol)? Gleichung: CH₄ + 2 O₂ → CO₂ + 2 H₂O",
    ["9 g", "18 g", "36 g", "4,5 g", "72 g"],
    1,
    "n(CH₄) = 8/16 = 0,5 mol. Pro mol CH₄ entstehen 2 mol H₂O → 0,5 × 2 = 1 mol H₂O. m = 1 × 18 = 18 g.",
    "mittel",
    ["stoechiometrie", "rechenfrage"]
  ),

  q(
    "ch-pool-9-039",
    "chem-kap-stoech",
    "Ein Patient nimmt 500 mg Acetylsalicylsäure (Aspirin, M = 180 g/mol) ein. Wie viele Moleküle ASS nimmt er zu sich? (NA = 6,022 × 10²³ /mol)",
    ["1,67 × 10²¹", "1,67 × 10²⁰", "6,02 × 10²³", "2,78 × 10²⁰", "3,01 × 10²³"],
    0,
    "n = 0,5 g / 180 g/mol ≈ 0,00278 mol. N = 0,00278 × 6,022 × 10²³ ≈ 1,67 × 10²¹ Moleküle.",
    "schwer",
    ["stoechiometrie", "rechenfrage"]
  ),

  q(
    "ch-pool-9-040",
    "chem-kap-stoech",
    "Welche der folgenden Aussagen zum Mol ist falsch?",
    [
      "1 mol enthält 6,022 × 10²³ Teilchen (Avogadro-Zahl)",
      "Die molare Masse eines Elements in g/mol entspricht numerisch der relativen Atommasse",
      "1 mol eines idealen Gases nimmt bei STP ein Volumen von 22,4 L ein",
      "Die Stoffmenge n ist definiert als n = m / M",
      "1 mol Wasser enthält 1 mol Sauerstoffatome und 1 mol Wasserstoffatome",
    ],
    4,
    "1 mol Wasser (H₂O) enthält 1 mol O-Atome, aber 2 mol H-Atome (da jedes Wassermolekül 2 H-Atome hat). Aussage E ist falsch.",
    "mittel",
    ["mol", "falsch-aussage"]
  ),

  q(
    "ch-pool-9-041",
    "chem-kap-stoech",
    "Bei der Synthese von Ammoniak (N₂ + 3 H₂ → 2 NH₃) werden 14 g N₂ (M = 28 g/mol) und 6 g H₂ (M = 2 g/mol) eingesetzt. Welcher Stoff ist das Edukt im Überschuss?",
    [
      "N₂ ist im Überschuss",
      "H₂ ist im Überschuss",
      "Beide sind stöchiometrisch eingesetzt",
      "Es kann nicht bestimmt werden",
      "NH₃ ist im Überschuss",
    ],
    1,
    "n(N₂) = 14/28 = 0,5 mol. n(H₂) = 6/2 = 3 mol. Für 0,5 mol N₂ braucht man 1,5 mol H₂ (Verhältnis 1:3). Vorhanden: 3 mol H₂ → H₂ ist im Überschuss (1,5 mol übrig).",
    "schwer",
    ["stoechiometrie", "limitierendes-edukt"]
  ),

  q(
    "ch-pool-9-042",
    "chem-kap-stoech",
    "Wie viel mL einer 96%igen Schwefelsäure (ρ = 1,84 g/mL, M = 98 g/mol) werden benötigt, um 250 mL einer 1-molaren H₂SO₄-Lösung herzustellen?",
    ["13,9 mL", "27,8 mL", "7,0 mL", "1,39 mL", "139 mL"],
    0,
    "Benötigt: 0,25 mol H₂SO₄ → m = 0,25 × 98 = 24,5 g reine H₂SO₄. Aus 96%iger Lösung: m(Lösung) = 24,5/0,96 = 25,52 g. V = m/ρ = 25,52/1,84 ≈ 13,9 mL.",
    "schwer",
    ["stoechiometrie", "rechenfrage"]
  ),

  // ── chem-kap4: Thermodynamik / Kinetik ──────────────────────────────────

  q(
    "ch-pool-9-043",
    "chem-kap4",
    "Welche der folgenden Aussagen zum 1. Hauptsatz der Thermodynamik ist korrekt?",
    [
      "Energie kann erzeugt, aber unter keinen Umständen vernichtet oder in andere Formen umgewandelt werden",
      "Die innere Energie eines geschlossenen Systems ist konstant, wenn keine Wärme oder Arbeit ausgetauscht wird",
      "Bei exothermen Reaktionen nimmt die Entropie der Umgebung immer zu, unabhängig von der Temperatur",
      "ΔU = q + w gilt ausschließlich für ideale Gase, nicht für Flüssigkeiten oder kondensierte Phasen",
      "Die Enthalpie H ist eine reine Prozessgröße und vollständig unabhängig vom Druck des Systems",
    ],
    1,
    "Der 1. Hauptsatz besagt: ΔU = q + w (Energieerhaltung). Ohne Wärme- oder Arbeitsaustausch bleibt die innere Energie konstant.",
    "leicht",
    ["thermodynamik", "hauptsatz"]
  ),

  q(
    "ch-pool-9-044",
    "chem-kap4",
    "Die Verbrennung von Glucose (C₆H₁₂O₆) liefert ΔH = −2800 kJ/mol. Wie viel Energie wird bei der Verbrennung von 45 g Glucose frei? (M = 180 g/mol)",
    ["350 kJ", "700 kJ", "1400 kJ", "2800 kJ", "5600 kJ"],
    1,
    "n = 45/180 = 0,25 mol. Energie = 0,25 × 2800 = 700 kJ.",
    "mittel",
    ["enthalpie", "rechenfrage"]
  ),

  q(
    "ch-pool-9-045",
    "chem-kap4",
    "Welche der folgenden Aussagen zur Gibbs-Energie (ΔG) ist falsch?",
    [
      "ΔG < 0 bedeutet, dass die Reaktion spontan abläuft",
      "ΔG = ΔH − TΔS",
      "Am Gleichgewicht ist ΔG = 0",
      "Eine Reaktion mit ΔH > 0 und ΔS < 0 ist bei jeder Temperatur spontan",
      "ΔG hängt von Enthalpie, Entropie und Temperatur ab",
    ],
    3,
    "ΔH > 0 (endotherm) und ΔS < 0 (Entropieabnahme) → ΔG = ΔH − TΔS > 0 bei jeder Temperatur → die Reaktion ist NIEMALS spontan. Aussage D ist falsch.",
    "schwer",
    ["gibbs-energie", "falsch-aussage"]
  ),

  q(
    "ch-pool-9-046",
    "chem-kap4",
    "Ein Katalysator beschleunigt eine chemische Reaktion. Welche Aussage ist korrekt?",
    [
      "Er verschiebt das Gleichgewicht zugunsten der Produkte",
      "Er senkt die Aktivierungsenergie der Hin- und Rückreaktion",
      "Er wird bei der Reaktion verbraucht",
      "Er ändert die Enthalpie der Reaktion",
      "Er beeinflusst nur die Geschwindigkeit der Hinreaktion",
    ],
    1,
    "Ein Katalysator senkt die Aktivierungsenergie beider Richtungen gleichermaßen. Er wird nicht verbraucht, ändert nicht ΔH und verschiebt nicht das Gleichgewicht.",
    "leicht",
    ["katalyse", "aktivierungsenergie"]
  ),

  q(
    "ch-pool-9-047",
    "chem-kap4",
    "Bei Erhöhung der Temperatur um 10 °C verdoppelt sich die Reaktionsgeschwindigkeit (RGT-Regel). Um welchen Faktor steigt die Geschwindigkeit bei einer Erhöhung um 30 °C?",
    ["3", "6", "8", "16", "4"],
    2,
    "30 °C / 10 °C = 3 Verdopplungen. Faktor = 2³ = 8.",
    "schwer",
    ["reaktionsgeschwindigkeit", "rechenfrage"]
  ),

  q(
    "ch-pool-9-048",
    "chem-kap4",
    "Welche der folgenden Aussagen zum chemischen Gleichgewicht ist falsch?",
    [
      "Im Gleichgewicht sind die Geschwindigkeiten der Hin- und Rückreaktion gleich",
      "Die Konzentrationen der Edukte und Produkte sind im Gleichgewicht konstant",
      "Das Gleichgewicht ist dynamisch, nicht statisch",
      "Die Gleichgewichtskonstante K ändert sich bei Konzentrationsänderungen",
      "Nach Le Chatelier verschiebt eine Temperaturerhöhung das Gleichgewicht in endotherme Richtung",
    ],
    3,
    "Die Gleichgewichtskonstante K hängt nur von der Temperatur ab, nicht von den Konzentrationen. Konzentrationsänderungen verschieben den Quotienten Q, bis Q = K wiederhergestellt ist.",
    "schwer",
    ["gleichgewicht", "falsch-aussage"]
  ),

  q(
    "ch-pool-9-049",
    "chem-kap4",
    "Die Reaktion A → B hat eine Aktivierungsenergie von 60 kJ/mol. Die Rückreaktion B → A hat Ea = 100 kJ/mol. Wie groß ist ΔH der Hinreaktion?",
    ["+40 kJ/mol", "−40 kJ/mol", "+160 kJ/mol", "−60 kJ/mol", "0 kJ/mol"],
    1,
    "ΔH = Ea(hin) − Ea(rück) = 60 − 100 = −40 kJ/mol. Die Hinreaktion ist exotherm.",
    "schwer",
    ["aktivierungsenergie", "rechenfrage"]
  ),

  q(
    "ch-pool-9-050",
    "chem-kap4",
    "Welche der folgenden Reaktionen hat die größte positive Entropieänderung (ΔS)?",
    [
      "H₂O(l) → H₂O(s)",
      "N₂(g) + 3 H₂(g) → 2 NH₃(g)",
      "CaCO₃(s) → CaO(s) + CO₂(g)",
      "2 H₂(g) + O₂(g) → 2 H₂O(l)",
      "NaCl(s) → NaCl(aq) in gesättigter Lösung",
    ],
    2,
    "CaCO₃(s) → CaO(s) + CO₂(g): Aus einem Feststoff entstehen ein Feststoff + ein Gas. Die Bildung eines Gasmoleküls erhöht die Entropie am stärksten. Die anderen Reaktionen verringern die Entropie (Phasenübergang zu fester Phase, Volumenabnahme).",
    "schwer",
    ["entropie", "thermodynamik"]
  ),

  q(
    "ch-pool-9-051",
    "chem-kap4",
    "Enzyme in der klinischen Biochemie fungieren als Biokatalysatoren. Welche Aussage ist falsch?",
    [
      "Enzyme senken die Aktivierungsenergie einer Reaktion",
      "Enzyme sind substratspezifisch",
      "Enzyme verändern die Lage des chemischen Gleichgewichts",
      "Die Enzymaktivität hängt von Temperatur und pH-Wert ab",
      "Enzyme werden bei der Reaktion nicht verbraucht",
    ],
    2,
    "Enzyme (wie alle Katalysatoren) verändern NICHT die Lage des Gleichgewichts – sie beschleunigen nur die Einstellung des Gleichgewichts, indem sie die Aktivierungsenergie senken.",
    "mittel",
    ["katalyse", "enzyme", "falsch-aussage"]
  ),

  q(
    "ch-pool-9-052",
    "chem-kap4",
    "Für eine Gleichgewichtsreaktion 2 NO₂(g) ⇌ N₂O₄(g) beträgt Kc = 4,0 bei 25 °C. Im Gleichgewicht ist c(N₂O₄) = 0,4 mol/L. Welche Konzentration hat NO₂?",
    ["0,1 mol/L", "0,2 mol/L", "√0,1 mol/L", "0,316 mol/L", "0,4 mol/L"],
    3,
    "Kc = c(N₂O₄)/c(NO₂)². → c(NO₂)² = c(N₂O₄)/Kc = 0,4/4,0 = 0,1. → c(NO₂) = √0,1 ≈ 0,316 mol/L.",
    "schwer",
    ["gleichgewicht", "rechenfrage"]
  ),

  q(
    "ch-pool-9-053",
    "chem-kap4",
    "Le Chatelier: Die Synthese von SO₃ ist exotherm: 2 SO₂ + O₂ ⇌ 2 SO₃, ΔH < 0. Welche Maßnahme erhöht die SO₃-Ausbeute?",
    [
      "Temperaturerhöhung",
      "Verringerung des Drucks",
      "Entfernung von SO₂ aus dem Gleichgewicht",
      "Erhöhung des Drucks",
      "Zugabe eines Katalysators",
    ],
    3,
    "Links: 3 mol Gas (2 SO₂ + 1 O₂), rechts: 2 mol Gas (2 SO₃). Druckerhöhung verschiebt das Gleichgewicht zur Seite mit weniger Gasmolen → mehr SO₃. Temperaturerhöhung würde exotherme Rückreaktion begünstigen.",
    "schwer",
    ["le-chatelier", "gleichgewicht"]
  ),

  // ── chem-kap5: Säure-Base / Puffer ──────────────────────────────────────

  q(
    "ch-pool-9-054",
    "chem-kap5",
    "Welchen pH-Wert hat eine 0,001 M HCl-Lösung (starke Säure, vollständige Dissoziation)?",
    ["1", "2", "3", "4", "0,001"],
    2,
    "HCl ist eine starke Säure: c(H⁺) = 0,001 M = 10⁻³ M. pH = −log(10⁻³) = 3.",
    "leicht",
    ["ph-wert", "rechenfrage"]
  ),

  q(
    "ch-pool-9-055",
    "chem-kap5",
    "Welche der folgenden Aussagen nach Brønsted ist falsch?",
    [
      "Eine Säure ist ein Protonendonator",
      "Eine Base ist ein Protonenakzeptor",
      "Wasser kann sowohl als Säure als auch als Base reagieren (Ampholyt)",
      "Die konjugierte Base einer starken Säure ist eine starke Base",
      "HCl ist eine Brønsted-Säure",
    ],
    3,
    "Die konjugierte Base einer starken Säure ist eine SCHWACHE Base (nicht starke). Beispiel: Cl⁻ (konjugierte Base von HCl) ist eine sehr schwache Base.",
    "mittel",
    ["saeure-base", "falsch-aussage"]
  ),

  q(
    "ch-pool-9-056",
    "chem-kap5",
    "Der Blut-pH liegt normalerweise bei 7,40. Welchen pOH-Wert hat das Blut bei 37 °C (Kw ≈ 10⁻¹⁴ bei 25 °C)?",
    ["6,60", "7,40", "7,00", "5,60", "8,40"],
    0,
    "Bei 25 °C: pH + pOH = 14. pOH = 14 − 7,40 = 6,60. (Hinweis: Bei 37 °C ist Kw etwas größer, aber für MedAT-Rechnungen wird standardmäßig Kw = 10⁻¹⁴ verwendet.)",
    "leicht",
    ["ph-wert", "rechenfrage"]
  ),

  q(
    "ch-pool-9-057",
    "chem-kap5",
    "Eine Essigsäurelösung hat einen pH von 3. Welche H⁺-Konzentration liegt vor?",
    ["10⁻¹ mol/L", "10⁻² mol/L", "10⁻³ mol/L", "10⁻⁴ mol/L", "3 mol/L"],
    2,
    "pH = −log c(H⁺) → c(H⁺) = 10⁻pH = 10⁻³ mol/L = 0,001 mol/L.",
    "leicht",
    ["ph-wert", "rechenfrage"]
  ),

  q(
    "ch-pool-9-058",
    "chem-kap5",
    "Welchen pH-Wert hat eine 0,01 M NaOH-Lösung?",
    ["2", "10", "12", "14", "7"],
    2,
    "NaOH ist eine starke Base: c(OH⁻) = 0,01 M = 10⁻² M. pOH = 2. pH = 14 − 2 = 12.",
    "mittel",
    ["ph-wert", "rechenfrage"]
  ),

  q(
    "ch-pool-9-059",
    "chem-kap5",
    "Das Bicarbonat-Puffersystem im Blut: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻. Welche Aussage ist falsch?",
    [
      "Bei Zugabe von H⁺ wird das Gleichgewicht nach links verschoben",
      "HCO₃⁻ ist die konjugierte Base der Kohlensäure",
      "Das System puffert sowohl Säure- als auch Basenzugabe",
      "Die Pufferkapazität ist am größten, wenn pH = pKs",
      "Bei metabolischer Azidose sinkt die HCO₃⁻-Konzentration und der pH steigt",
    ],
    4,
    "Bei metabolischer Azidose sinkt die HCO₃⁻-Konzentration, aber der pH SINKT (nicht steigt), da sich das Gleichgewicht zur Säureseite verschiebt. Aussage E ist falsch.",
    "schwer",
    ["puffer", "falsch-aussage"]
  ),

  q(
    "ch-pool-9-060",
    "chem-kap5",
    "Wie viel mL 0,1 M NaOH werden benötigt, um 50 mL 0,1 M HCl vollständig zu neutralisieren?",
    ["25 mL", "50 mL", "100 mL", "10 mL", "75 mL"],
    1,
    "NaOH + HCl → NaCl + H₂O (1:1). n(HCl) = 0,1 × 0,05 = 0,005 mol = n(NaOH). V(NaOH) = 0,005/0,1 = 0,05 L = 50 mL.",
    "leicht",
    ["neutralisation", "rechenfrage"]
  ),

  q(
    "ch-pool-9-061",
    "chem-kap5",
    "Welche der folgenden Säuren ist eine schwache Säure?",
    [
      "HCl (Salzsäure)",
      "HNO₃ (Salpetersäure)",
      "H₂SO₄ (Schwefelsäure)",
      "CH₃COOH (Essigsäure)",
      "HBr (Bromwasserstoffsäure)",
    ],
    3,
    "Essigsäure (CH₃COOH, pKs = 4,76) ist eine schwache Säure, die nur teilweise dissoziiert. HCl, HNO₃, H₂SO₄ (1. Stufe) und HBr sind starke Säuren mit vollständiger Dissoziation.",
    "leicht",
    ["saeure-base", "starke-schwache-saeure"]
  ),

  q(
    "ch-pool-9-062",
    "chem-kap5",
    "Ein Phosphatpuffer (pKs₂ = 7,20) wird mit c(H₂PO₄⁻) = 0,1 M und c(HPO₄²⁻) = 0,1 M angesetzt. Welchen pH-Wert hat die Lösung nach Henderson-Hasselbalch?",
    ["6,20", "7,00", "7,20", "7,40", "8,20"],
    2,
    "Henderson-Hasselbalch: pH = pKs + log([A⁻]/[HA]) = 7,20 + log(0,1/0,1) = 7,20 + 0 = 7,20.",
    "schwer",
    ["puffer", "rechenfrage"]
  ),

  q(
    "ch-pool-9-063",
    "chem-kap5",
    "Welche Aussage über Indikatoren bei Säure-Base-Titrationen ist korrekt?",
    [
      "Der Indikator muss immer bei pH 7 umschlagen",
      "Phenolphthalein ist geeignet für die Titration einer starken Säure mit einer starken Base",
      "Der Indikator verändert das Ergebnis der Titration erheblich",
      "Methylorange ist geeignet für die Titration im stark basischen Bereich",
      "Indikatoren sind selbst starke Säuren oder Basen",
    ],
    1,
    "Phenolphthalein (Umschlagsbereich pH 8,2–10,0) eignet sich für Titrationen starker Säure/starker Base (Äquivalenzpunkt pH 7, aber steiler Anstieg im Bereich pH 4–10). Indikatoren werden in minimalen Mengen zugesetzt und beeinflussen das Ergebnis kaum.",
    "mittel",
    ["titration", "indikatoren"]
  ),

  // ── chem-kap6: Organische Chemie ─────────────────────────────────────────

  q(
    "ch-pool-9-064",
    "chem-kap6",
    "Welche funktionelle Gruppe ist charakteristisch für Aldehyde?",
    [
      "−OH (Hydroxylgruppe)",
      "−COOH (Carboxylgruppe)",
      "−CHO (Aldehydgruppe/Formylgruppe)",
      "−CO− (Ketogruppe)",
      "−NH₂ (Aminogruppe)",
    ],
    2,
    "Aldehyde tragen die Formylgruppe (−CHO), bestehend aus einer Carbonylgruppe (C=O) mit einem Wasserstoffatom am Carbonyl-C.",
    "leicht",
    ["funktionelle-gruppen", "aldehyde"]
  ),

  q(
    "ch-pool-9-065",
    "chem-kap6",
    "Welche der folgenden Aussagen zur Isomerie ist falsch?",
    [
      "Konstitutionsisomere haben die gleiche Summenformel, aber unterschiedliche Verknüpfung der Atome",
      "Enantiomere verhalten sich wie Bild und Spiegelbild",
      "cis-trans-Isomerie tritt an C=C-Doppelbindungen auf",
      "Enantiomere haben identische physikalische Eigenschaften in achiraler Umgebung",
      "Diastereomere sind immer optisch aktiv",
    ],
    4,
    "Nicht alle Diastereomere sind optisch aktiv. Meso-Verbindungen sind Diastereomere mit Chiralitätszentren, die durch eine innere Spiegelebene optisch inaktiv sind.",
    "schwer",
    ["isomerie", "falsch-aussage"]
  ),

  q(
    "ch-pool-9-066",
    "chem-kap6",
    "In der Pharmazie ist Ibuprofen ein Racemat. Welche Aussage zu Racematen ist korrekt?",
    [
      "Ein Racemat besteht aus gleichen Teilen zweier Diastereomere",
      "Ein Racemat dreht die Ebene des polarisierten Lichts nach rechts",
      "Ein Racemat ist ein 1:1-Gemisch zweier Enantiomere und optisch inaktiv",
      "Racematspaltung ist in der Pharmazie irrelevant",
      "Enantiomere in einem Racemat haben unterschiedliche Schmelzpunkte",
    ],
    2,
    "Ein Racemat ist ein äquimolares Gemisch beider Enantiomere (R und S). Die optischen Drehungen heben sich gegenseitig auf → optisch inaktiv.",
    "mittel",
    ["chiralitaet", "racemat"]
  ),

  q(
    "ch-pool-9-067",
    "chem-kap6",
    "Welche der folgenden Verbindungen ist aromatisch nach der Hückel-Regel?",
    [
      "Cyclohexan (C₆H₁₂)",
      "Cyclooctatetraen (C₈H₈)",
      "Benzol (C₆H₆)",
      "Cyclohexen (C₆H₁₀)",
      "Buta-1,3-dien (C₄H₆)",
    ],
    2,
    "Hückel-Regel: 4n+2 π-Elektronen in einem planaren, zyklisch konjugierten System. Benzol hat 6 π-Elektronen (n = 1) → aromatisch. Cyclooctatetraen hat 8 π-Elektronen (nicht 4n+2), ist nicht planar → antiaromatisch.",
    "schwer",
    ["aromatizitaet", "hueckel"]
  ),

  q(
    "ch-pool-9-068",
    "chem-kap6",
    "Welche der folgenden Aminosäuren hat eine unpolare Seitenkette?",
    ["Serin (Ser)", "Glutaminsäure (Glu)", "Lysin (Lys)", "Leucin (Leu)", "Asparaginsäure (Asp)"],
    3,
    "Leucin hat eine verzweigte aliphatische Seitenkette (Isobutylgruppe) → unpolar/hydrophob. Serin (OH), Glu (COO⁻), Lys (NH₃⁺) und Asp (COO⁻) haben polare bzw. geladene Seitenketten.",
    "mittel",
    ["aminosaeuren", "polaritaet"]
  ),

  q(
    "ch-pool-9-069",
    "chem-kap6",
    "Bei der Veresterung reagiert Essigsäure mit Ethanol. Welches Produkt entsteht neben Wasser?",
    [
      "Diethylether",
      "Ethylacetat (Essigsäureethylester)",
      "Acetaldehyd (Ethanal)",
      "Aceton (Propanon)",
      "Natriumacetat (CH₃COONa)",
    ],
    1,
    "CH₃COOH + C₂H₅OH → CH₃COOC₂H₅ + H₂O. Es entsteht Ethylacetat (Essigsäureethylester), ein häufig verwendetes Lösungsmittel in der Pharmazie.",
    "leicht",
    ["veresterung", "organische-reaktionen"]
  ),

  q(
    "ch-pool-9-070",
    "chem-kap6",
    "Welche der folgenden Aussagen zur Peptidbindung ist falsch?",
    [
      "Sie entsteht durch Kondensation der α-Aminogruppe einer Aminosäure mit der α-Carboxylgruppe einer anderen",
      "Die Peptidbindung hat partiellen Doppelbindungscharakter",
      "Die Atome C, O, N und H der Peptidbindung liegen in einer Ebene",
      "Die Rotation um die C–N-Bindung der Peptidbindung ist frei möglich",
      "Bei der Bildung wird ein Molekül Wasser abgespalten",
    ],
    3,
    "Die Peptidbindung hat partiellen Doppelbindungscharakter (Mesomerie der C=O- und C–N-Bindung), wodurch die Rotation um die C–N-Bindung eingeschränkt ist (planar, trans-Konfiguration bevorzugt). Aussage D ist falsch.",
    "schwer",
    ["peptidbindung", "falsch-aussage"]
  ),
];
