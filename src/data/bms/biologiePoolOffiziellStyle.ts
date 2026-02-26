/**
 * Biologie BMS Pool — im Stil und in der Tiefe der offiziellen MedAT-Biologie-Fragen.
 * Formate: Typ A (Single Choice), „Welche Aussage ist FALSCH?“ / „trifft NICHT zu?“ (eine falsche Option), gleiche Themenbreite.
 * Stoff aus bmsKapitel/biologie.
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
    subject: "biologie",
    chapter,
    text,
    options: options.map((t, i) => ({ id: ids[i], text: t })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags,
  };
}

export const biologiePoolOffiziellStyle: Question[] = [
  // —— Typ A: Anatomie/Physiologie, klare Stammfrage, 5 Optionen ——
  q(
    "bio-off-001",
    "bio-kap2",
    "Nervenzellen besitzen einen Zellkörper und Fortsätze. Wie nennt man die Fortsätze, über die Erregungen zum Zellkörper hingleiten?",
    ["Axone", "Aktionspotentiale", "Dendriten", "Synapsen", "Ranvier-Schnürringe"],
    2,
    "Dendriten leiten Erregungen zum Zellkörper hin (afferente Fortsätze). Axone leiten vom Zellkörper weg (efferent).",
    "leicht",
    ["Nervenzelle", "Neuroanatomie"]
  ),
  q(
    "bio-off-002",
    "bio-kap2",
    "Wo wird das proteinspaltende Enzym Trypsin als inaktive Vorstufe (Trypsinogen) gebildet?",
    [
      "in der Magenschleimhaut",
      "in der Darmschleimhaut",
      "in der Leber",
      "in den Mundspeicheldrüsen",
      "in der Bauchspeicheldrüse",
    ],
    4,
    "Trypsinogen wird in der Bauchspeicheldrüse gebildet und im Dünndarm zu Trypsin aktiviert. Pepsinogen kommt aus der Magenschleimhaut.",
    "mittel",
    ["Verdauung", "Enzyme"]
  ),
  q(
    "bio-off-003",
    "bio-kap2",
    "In welchem Abschnitt des Zentralnervensystems befinden sich unter anderem die Kerne für die Steuerung von Atmung und Kreislauf?",
    ["Kleinhirn", "Großhirn", "Zwischenhirn", "Hirnstamm", "Rückenmark"],
    3,
    "Atem- und Kreislaufzentrum liegen im Hirnstamm (Medulla oblongata, Pons).",
    "leicht",
    ["ZNS", "Hirnstamm"]
  ),
  q(
    "bio-off-004",
    "bio-kap2",
    "Von den meisten Zellen in den Langerhans-Inseln der Bauchspeicheldrüse wird Insulin gebildet. Welches Hormon wird von den übrigen endokrinen Zellen dieser Inseln gebildet und wirkt blutzuckererhöhend?",
    ["Cortison", "Glukagon", "Adrenalin", "Glykogen", "Glukose"],
    1,
    "Glukagon (Alpha-Zellen) wirkt antagonistisch zu Insulin und erhöht den Blutzucker. Glykogen und Glukose sind keine Hormone.",
    "leicht",
    ["Bauchspeicheldrüse", "Hormone"]
  ),
  q(
    "bio-off-005",
    "bio-kap2",
    "Welche Struktur des Auges ist primär für die Änderung der Krümmung der Linse (Akkommodation) verantwortlich?",
    ["Hornhaut", "Ziliarkörper", "Regenbogenhaut", "äußere Augenmuskeln", "Glaskörper"],
    1,
    "Der Ziliarkörper enthält den Ziliarmuskel; durch dessen Kontraktion wird die Aufhängung der Linse verändert und die Linse gekrümmt.",
    "mittel",
    ["Auge", "Akkommodation"]
  ),
  q(
    "bio-off-006",
    "bio-kap1",
    "Welche der folgenden Strukturen liegt im Zellkern?",
    ["Lysosom", "Zentriol", "Nukleolus", "Ribosom", "Mitochondrium"],
    2,
    "Der Nukleolus (Kernkörperchen) liegt im Zellkern und ist an der Ribosomenbildung beteiligt. Die anderen genannten liegen im Zytoplasma.",
    "leicht",
    ["Zellkern", "Zelle"]
  ),
  q(
    "bio-off-007",
    "bio-kap5",
    "Das Körperwachstum wird unter anderem durch das Wachstumshormon Somatotropin stimuliert. Wo wird dieses Hormon überwiegend gebildet?",
    ["Nebenschilddrüse", "Schilddrüse", "Keimdrüsen", "Nebenniere", "Hypophyse"],
    4,
    "Somatotropin (STH) wird im Hypophysenvorderlappen gebildet. Mangel führt zu Kleinwuchs, Überschuss zu Riesenwuchs.",
    "leicht",
    ["Hormone", "Hypophyse"]
  ),
  q(
    "bio-off-008",
    "bio-kap2",
    "Durch welche Strukturen sind die Herzmuskelzellen untereinander elektrisch leitend verbunden?",
    ["Fokale Kontakte", "Gap Junctions", "Desmosomen", "Tight Junctions", "Adhärens-Kontakte"],
    1,
    "Gap Junctions ermöglichen den direkten Ionenaustausch zwischen Herzmuskelzellen und damit die schnelle Erregungsausbreitung.",
    "mittel",
    ["Herz", "Zellkontakte"]
  ),
  q(
    "bio-off-009",
    "bio-kap5",
    "Welche ist die zutreffendste Erklärung einer Autoimmunerkrankung? Es handelt sich um eine Erkrankung, die hervorgerufen wird durch:",
    [
      "eine Abstoßungsreaktion auf ein transplantiertes Organ",
      "eine allergische Reaktion auf körperfremde Antigene",
      "eine Injektion von Immunglobulinen",
      "eine Immunreaktion auf körpereigene Antigene",
      "eine gesteigerte Aktivität körpereigener natürlicher Killerzellen",
    ],
    3,
    "Bei Autoimmunerkrankungen richtet sich die Immunantwort gegen körpereigene Strukturen (z. B. bei Typ-1-Diabetes, MS, Rheuma).",
    "mittel",
    ["Immunologie", "Autoimmunität"]
  ),
  q(
    "bio-off-010",
    "bio-kap2",
    "Die männlichen Samenzellen entstehen in den Samenkanälchen der Hoden und reifen heran. Bis zur Ejakulation werden sie vor allem gespeichert in:",
    ["Samenbläschen", "Samenkanälchen", "Samenleitern", "Prostata", "Nebenhodengängen"],
    4,
    "Die Spermien reifen und werden in den Nebenhodengängen gespeichert. Samenbläschen und Prostata produzieren Bestandteile der Samenflüssigkeit.",
    "leicht",
    ["Reproduktion", "Spermien"]
  ),
  q(
    "bio-off-011",
    "bio-kap1",
    "Die RNA-Synthese an der DNA als Matrize wird bezeichnet als:",
    ["Replikation", "Transfektion", "Transkription", "Translation", "Transformation"],
    2,
    "Transkription = Umschreibung DNA → RNA. Translation = Übersetzung mRNA → Protein an den Ribosomen. Replikation = DNA-Verdopplung.",
    "leicht",
    ["Genetik", "Zentrales Dogma"]
  ),
  q(
    "bio-off-012",
    "bio-kap2",
    "Die Lungenvenen des Lungenkreislaufs münden in:",
    [
      "die Aorta (Körperschlagader)",
      "die linke Kammer",
      "den rechten Vorhof (Vorkammer)",
      "den linken Vorhof (Vorkammer)",
      "die rechte Kammer",
    ],
    3,
    "Sauerstoffreiches Blut aus der Lunge fließt über die Lungenvenen in den linken Vorhof, dann in die linke Kammer und in die Aorta.",
    "mittel",
    ["Kreislauf", "Herz"]
  ),
  q(
    "bio-off-013",
    "bio-kap2",
    "Welcher systolische Blutdruckwert, gemessen am Oberarm, gilt bei einem gesunden jungen Erwachsenen in Ruhe als normal?",
    ["140 mm Hg", "ca. 120 mm Hg", "80 mm Hg", "90 mm Hg", "65 mm Hg"],
    1,
    "Normaler systolischer Wert etwa 120 mm Hg (bis ca. 130). 140 und darüber gilt als erhöht. Diastolisch etwa 80 mm Hg.",
    "leicht",
    ["Kreislauf", "Blutdruck"]
  ),
  q(
    "bio-off-014",
    "bio-kap2",
    "In teils gewunden, teils gestreckt verlaufenden Kanälchen der Niere wird aus dem Primärharn der endgültige Harn gebildet. Wie lautet die korrekte Abflussreihenfolge aus den Nieren nach außen?",
    [
      "Harnleiter – Harnblase – Harnröhre",
      "Harnblase – Harnleiter – Harnröhre",
      "Harnröhre – Harnblase – Harnleiter",
      "Harnleiter – Harnblase – linke und rechte Harnröhre",
      "Harnblase – Harnleiter – Harnröhre",
    ],
    0,
    "Aus den Nierenbecken → Harnleiter (Ureter) → Harnblase → Harnröhre (Urethra). Es gibt nur eine Harnröhre.",
    "leicht",
    ["Niere", "Anatomie"]
  ),
  q(
    "bio-off-015",
    "bio-kap2",
    "Das Eindringen eines Spermiums in die Eizelle (Befruchtung) erfolgt in der Regel:",
    [
      "in der Vagina",
      "im Ovar",
      "in der Uterushöhle",
      "in der Uterusschleimhaut",
      "in der Tuba uterina (Eileiter)",
    ],
    4,
    "Die Befruchtung findet typischerweise in der Ampulle des Eileiters (Tuba uterina) statt, nicht in der Gebärmutter.",
    "leicht",
    ["Befruchtung", "Reproduktion"]
  ),
  q(
    "bio-off-016",
    "bio-kap2",
    "Die in der Gallenblase gespeicherte Galle wird abgegeben in:",
    ["den Dünndarm", "die Pfortader", "den Magen", "die Leber", "den Dickdarm"],
    0,
    "Die Galle wird über den Ductus choledochus in den Dünndarm (Duodenum) abgegeben und unterstützt die Fettverdauung.",
    "leicht",
    ["Verdauung", "Galle"]
  ),
  q(
    "bio-off-017",
    "bio-kap1",
    "Bei welchen der folgenden Zellorganellen sind zwei Membranen (Doppelmembran) vorhanden?",
    ["Mitochondrien", "Ribosomen", "Lysosomen", "Peroxisomen", "Dictyosomen (Golgi-Apparat)"],
    0,
    "Mitochondrien und Zellkern haben eine Doppelmembran (äußere + innere). Ribosomen haben keine Membran; Lysosomen, Peroxisomen und Golgi haben eine Einzelmembran.",
    "mittel",
    ["Zelle", "Organellen"]
  ),
  q(
    "bio-off-018",
    "bio-kap2",
    "Das Epithelgewebe ist mit dem darunterliegenden Bindegewebe verbunden über:",
    [
      "den Bürstensaum des Epithels",
      "die apikalen Fortsätze der Epithelzellen",
      "eine Lipid-Doppelschicht",
      "eine Basalmembran",
      "die basalen Fortsätze der Bindegewebszellen",
    ],
    3,
    "Die Basalmembran liegt zwischen Epithel und Bindegewebe und enthält u. a. Kollagen Typ IV und Glykoproteine.",
    "mittel",
    ["Epithel", "Gewebe"]
  ),
  q(
    "bio-off-019",
    "bio-kap1",
    "Ein Anticodon ist zu finden in:",
    ["dem Protein", "einem Gen", "der mRNA", "der tRNA", "einem Exon"],
    3,
    "Die tRNA trägt am einen Ende das Anticodon, das zur Codon-Sequenz der mRNA komplementär ist und die Aminosäure zum Ribosom bringt.",
    "leicht",
    ["Genetik", "Translation"]
  ),
  q(
    "bio-off-020",
    "bio-kap4",
    "In einer DNA-Probe liegt die Base Adenin zu 28 % vor. Zu wie viel Prozent liegt die Base Thymin vor?",
    ["28 %", "24 %", "36 %", "50 %", "72 %"],
    0,
    "Nach den Chargaff-Regeln: A = T und G = C. Daher liegt Thymin ebenfalls zu 28 % vor.",
    "leicht",
    ["DNA", "Basenpaarung", "rechenfrage"]
  ),
  // —— „Welche Aussage ist FALSCH?“ / „trifft NICHT zu?“ ——
  q(
    "bio-off-021",
    "bio-kap2",
    "Welche der folgenden Aussagen über Chromosomen ist FALSCH?",
    [
      "Das Centromer ist für die richtige Aufteilung der Chromosomen bei der Mitose wichtig.",
      "Sie enthalten basische Proteine (Histone).",
      "Die DNA wird durch die Telomer-Regionen an den Enden vor Abbau geschützt.",
      "Das Centromer ist für die richtige Aufteilung der Chromosomen bei der Meiose wichtig.",
      "Sie erlauben die freie Kombination der Gene.",
    ],
    4,
    "Die freie Kombination der Gene entsteht durch Crossing-over und unabhängige Verteilung in der Meiose, nicht durch die Chromosomenstruktur an sich. Die Aussage ist in dieser Form falsch bzw. irreführend.",
    "mittel",
    ["Chromosomen", "FALSCH"]
  ),
  q(
    "bio-off-022",
    "bio-kap2",
    "Welche der folgenden Aussagen zur Embryonalentwicklung ist NICHT zutreffend?",
    [
      "Der Embryo entwickelt sich in der mit Fruchtwasser gefüllten Amnionhöhle.",
      "Aus Ektoderm, Mesoderm und Entoderm entwickeln sich alle Organe des Embryos.",
      "Am Ende der 8. Entwicklungswoche sind Finger und Zehen des Embryos ausgebildet.",
      "In der 4.–8. Woche ist der Embryo gegenüber schädigenden Faktoren besonders anfällig.",
      "Das Herz des Embryos beginnt am Ende der 8. Entwicklungswoche zu schlagen.",
    ],
    4,
    "Das Herz beginnt bereits in der 3.–4. Woche zu schlagen, nicht erst am Ende der 8. Woche (E falsch).",
    "mittel",
    ["Embryonalentwicklung", "FALSCH"]
  ),
  q(
    "bio-off-023",
    "bio-kap2",
    "Welche der folgenden Aussagen zur Atmung ist FALSCH?",
    [
      "In der Lunge wird mit jedem Atemzug nur ein Teil der Luft erneuert.",
      "In den Bronchien findet der Gasaustausch (Sauerstoff/Kohlendioxid) statt.",
      "Sauerstoff wird im Blut an das Hämoglobin der roten Blutkörperchen gebunden.",
      "Ein Teil der CO₂-Moleküle wird an das Hämoglobin der roten Blutkörperchen gebunden.",
      "Die Bronchien leiten die Luft zu den Alveolen.",
    ],
    1,
    "Der Gasaustausch findet in den Alveolen statt, nicht in den Bronchien. Die Bronchien sind die Leitungsbahn (B falsch).",
    "mittel",
    ["Atmung", "FALSCH"]
  ),
  q(
    "bio-off-024",
    "bio-kap2",
    "Welche der folgenden Aussagen zum Ohr trifft NICHT zu?",
    [
      "Das ovale Fenster verbindet das Mittelohr mit dem Innenohr.",
      "Das Mittelohr wird vom Gehörgang durch das Trommelfell abgegrenzt.",
      "Der Gehörgang stellt eine Verbindung zwischen Paukenhöhle und Rachen her.",
      "Die Bogengänge im Mittelohr haben die Aufgabe der Schallweiterleitung.",
      "Im Mittelohr sind drei Gehörknöchelchen vorhanden.",
    ],
    3,
    "Die Bogengänge liegen im Innenohr und dienen dem Gleichgewichtssinn, nicht der Schallweiterleitung. Schallweiterleitung erfolgt über Gehörknöchelchen im Mittelohr (D falsch).",
    "mittel",
    ["Ohr", "FALSCH"]
  ),
  q(
    "bio-off-025",
    "bio-kap1",
    "Welche der folgenden Aussagen über Zellmembranen trifft NICHT zu?",
    [
      "Membranen von Zellorganellen zeigen den gleichen Grundaufbau wie die Plasmamembran der Zelle.",
      "Zellmembranen bestehen aus einer Doppelschicht aus Lipiden mit hydrophoben und hydrophilen Anteilen.",
      "Über Transportproteine der Zellmembran werden Sauerstoffmoleküle in das Zellinnere transportiert.",
      "Das heute gültige Membranmodell wird als „Flüssig-Mosaik-Modell“ bezeichnet.",
      "Proteine können in die Zellmembran eingelagert oder an die Zellmembran angelagert sein.",
    ],
    2,
    "Sauerstoff ist klein und lipophil und diffundiert frei durch die Lipidschicht; dafür sind keine Transportproteine nötig (C falsch).",
    "mittel",
    ["Zellmembran", "FALSCH"]
  ),
  q(
    "bio-off-026",
    "bio-kap4",
    "Welcher Prozess spielt sich während der Mitose NICHT ab?",
    [
      "Crossing-over zwischen Schwesterchromatiden (Crossing-over erfolgt in der Meiose zwischen homologen Chromosomen).",
      "Aufteilung eines diploiden Chromosomensatzes auf zwei diploide Tochterzellen.",
      "Kondensation der Chromosomen und Sichtbarwerden.",
      "Trennung der Schwesterchromatiden in der Anaphase und Wanderung zu den Polen.",
      "In der Metaphase treten die Spindelfasern mit den Centromeren in Verbindung.",
    ],
    0,
    "Crossing-over findet in der Prophase I der Meiose zwischen homologen Chromosomen (nicht zwischen Schwesterchromatiden) statt, nicht in der Mitose.",
    "mittel",
    ["Mitose", "Meiose", "FALSCH"]
  ),
  q(
    "bio-off-027",
    "bio-kap2",
    "Blutserum und Blutplasma unterscheiden sich durch das Vorhandensein bzw. Fehlen von:",
    ["Immunglobulinen", "Gerinnungsfaktoren", "Erythrozyten", "Leukozyten", "Elektrolyten"],
    1,
    "Blutplasma enthält Fibrinogen und andere Gerinnungsfaktoren. Serum ist Plasma ohne Gerinnungsfaktoren (nach Ausfällung z. B. durch Gerinnung).",
    "mittel",
    ["Blut", "Serum", "Plasma"]
  ),
  q(
    "bio-off-028",
    "bio-kap2",
    "Welche der genannten Zellen des menschlichen Körpers besitzen keinen Zellkern?",
    ["Muskelzellen", "Erythrozyten (reif)", "Knochenzellen", "Knorpelzellen", "Eizellen"],
    1,
    "Reife menschliche Erythrozyten haben keinen Zellkern (und keine Mitochondrien), um mehr Platz für Hämoglobin zu haben.",
    "leicht",
    ["Blut", "Erythrozyten"]
  ),
  q(
    "bio-off-029",
    "bio-kap5",
    "Was ist KEINE typische Wirkung des Sympathikus?",
    [
      "Verminderung der Schlagfrequenz des Herzens",
      "Abgabe von Adrenalin und Noradrenalin aus dem Nebennierenmark",
      "Erweiterung der Bronchien",
      "Verminderung der Speichelsekretion",
      "Erweiterung der Pupillen",
    ],
    0,
    "Der Sympathikus erhöht die Herzfrequenz. Verminderung der Herzfrequenz ist eine Wirkung des Parasympathikus.",
    "mittel",
    ["Vegetatives Nervensystem", "Sympathikus"]
  ),
  q(
    "bio-off-030",
    "bio-kap5",
    "Wie wird eine „ökologische Nische“ in der Ökologie definiert?",
    [
      "kaum belebter Lebensraum, der für die meisten Lebewesen nicht bewohnbar ist",
      "Bereich eines Umweltfaktors (z. B. Temperatur), innerhalb dessen eine Art gedeihen kann",
      "Gesamtheit aller abiotischen Faktoren in einem Biotop, die von mehreren Arten genutzt wird",
      "Gesamtheit aller biotischen und abiotischen Umweltfaktoren, die für die Existenz und das Überleben einer Art bedeutsam sind",
      "Lebensgemeinschaft von Pflanzen und Tieren in einem bestimmten Lebensraum",
    ],
    3,
    "Die ökologische Nische umfasst die Gesamtheit der Umweltfaktoren (biotisch und abiotisch), die für eine Art relevant sind – nicht nur ein Faktor (B) und nicht die Lebensgemeinschaft (E = Biozönose).",
    "mittel",
    ["Ökologie", "Nische"]
  ),
];
