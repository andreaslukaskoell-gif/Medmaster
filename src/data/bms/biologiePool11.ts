/**
 * Biologie BMS Pool 11 — 60 Fragen im offiziellen MedAT-Stil (Typ A + FALSCH).
 * Stoff: Kap1–Kap5.
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

export const biologiePool11: Question[] = [
  q(
    "bio-pool-11-001",
    "bio-kap1",
    "Welche Aussage über Enzyme trifft zu?",
    [
      "Enzyme verbrauchen sich bei jeder Reaktion",
      "Enzyme senken die Aktivierungsenergie",
      "Enzyme arbeiten nur bei hohem pH",
      "Enzyme sind ausschließlich aus DNA",
      "Enzyme erhöhen die Aktivierungsenergie",
    ],
    1,
    "Enzyme sind Biokatalysatoren und senken die Aktivierungsenergie. Sie werden nicht verbraucht.",
    "leicht",
    ["Enzyme", "Stoffwechsel"]
  ),
  q(
    "bio-pool-11-002",
    "bio-kap2",
    "Welcher Darmabschnitt hat die größte Oberfläche durch Zotten und Krypten?",
    ["Colon", "Duodenum und Jejunum", "Rektum", "Magen", "Ösophagus"],
    1,
    "Duodenum und vor allem Jejunum haben Zotten und Krypten für die Nährstoffresorption. Colon resorbiert vor allem Wasser.",
    "mittel",
    ["Verdauung", "Dünndarm"]
  ),
  q(
    "bio-pool-11-003",
    "bio-kap4",
    "Was ist ein Gen?",
    [
      "Ein Chromosom",
      "Ein DNA-Abschnitt, der für ein Merkmal oder Produkt codiert",
      "Ein Protein",
      "Eine RNA-Art",
      "Ein Organell",
    ],
    1,
    "Ein Gen ist ein DNA-Abschnitt mit der Information für ein Merkmal oder ein Genprodukt (z. B. Protein, rRNA).",
    "leicht",
    ["Genetik", "Gen"]
  ),
  q(
    "bio-pool-11-004",
    "bio-kap2",
    "Wo wird das Hormon Testosteron beim Mann hauptsächlich gebildet?",
    ["Nebenniere", "Hypophyse", "Hoden", "Prostata", "Nebenhoden"],
    2,
    "Testosteron wird vor allem in den Leydig-Zellen der Hoden gebildet. Die Nebenniere produziert geringe Mengen Androgene.",
    "leicht",
    ["Hormone", "Reproduktion"]
  ),
  q(
    "bio-pool-11-005",
    "bio-kap5",
    "Welche Aussage zu Ökosystemen trifft zu?",
    [
      "Energie wird im Ökosystem recycelt",
      "Nährstoffe werden im Ökosystem recycelt",
      "Es gibt keine Nahrungsketten",
      "Produzenten verbrauchen Sauerstoff",
      "Destenten stehen am Anfang der Nahrungskette",
    ],
    1,
    "Nährstoffe (C, N, P …) werden im Ökosystem recycelt. Energie fließt linear und geht als Wärme verloren.",
    "mittel",
    ["Ökologie"]
  ),
  q(
    "bio-pool-11-006",
    "bio-kap1",
    "Welches Organell ist von einer Doppelmembran umgeben und enthält die Erbinformation?",
    ["Ribosom", "Mitochondrium", "Zellkern", "Lysosom", "Golgi-Apparat"],
    2,
    "Der Zellkern hat eine Doppelmembran (Kernhülle) und enthält die DNA. Mitochondrien haben auch Doppelmembran, aber die Haupt-DNA liegt im Kern.",
    "leicht",
    ["Zelle", "Zellkern"]
  ),
  q(
    "bio-pool-11-007",
    "bio-kap2",
    "Die Aorta entspringt aus:",
    [
      "dem rechten Vorhof",
      "der rechten Kammer",
      "dem linken Vorhof",
      "der linken Kammer",
      "der Lungenarterie",
    ],
    3,
    "Die Aorta (Körperschlagader) entspringt aus der linken Kammer und versorgt den Körper mit sauerstoffreichem Blut.",
    "leicht",
    ["Kreislauf", "Herz"]
  ),
  q(
    "bio-pool-11-008",
    "bio-kap4",
    "Welche Basen kommen in der RNA vor?",
    ["A, T, G, C", "A, U, G, C", "nur A und T", "nur G und C", "A, T, U, C"],
    1,
    "RNA enthält Adenin, Uracil, Guanin, Cytosin (A, U, G, C). In der DNA ersetzt Thymin das Uracil.",
    "leicht",
    ["RNA", "Genetik"]
  ),
  q(
    "bio-pool-11-009",
    "bio-kap2",
    "Welches Epithel kleidet die Luftröhre (Trachea) aus?",
    [
      "Urothel",
      "Flimmerepithel (respiratorisches Epithel)",
      "Einschichtiges Plattenepithel",
      "Verhornendes Plattenepithel",
      "Übergangsepithel",
    ],
    1,
    "Die Trachea ist von Flimmerepithel (Zilien) ausgekleidet; der Schleim transportiert Partikel Richtung Rachen. Urothel kleidet Harnwege aus.",
    "mittel",
    ["Gewebe", "Atmung"]
  ),
  q(
    "bio-pool-11-010",
    "bio-kap3",
    "Wann beginnt beim menschlichen Embryo das Herz zu schlagen?",
    [
      "Ende der 8. Woche",
      "In der 3.–4. Woche",
      "In der 1. Woche",
      "Nach der Geburt",
      "Ende der 2. Woche",
    ],
    1,
    "Das Herz beginnt in der 3.–4. Entwicklungswoche zu schlagen. Die Organogenese (4.–8. Woche) ist besonders empfindlich für Teratogene.",
    "mittel",
    ["Embryologie", "Herz"]
  ),
  q(
    "bio-pool-11-011",
    "bio-kap5",
    "Was sind Gedächtniszellen?",
    [
      "Erythrozyten mit Speicherfunktion",
      "Lymphozyten, die nach Antigenkontakt bei erneutem Kontakt schneller reagieren",
      "Nervenzellen im Hippocampus",
      "Thrombozyten",
      "Mastzellen",
    ],
    1,
    "Gedächtniszellen (B- und T-Gedächtniszellen) entstehen nach Antigenkontakt und ermöglichen eine schnellere Immunantwort bei erneutem Kontakt.",
    "mittel",
    ["Immunologie"]
  ),
  q(
    "bio-pool-11-012",
    "bio-kap1",
    "Wo findet die oxidative Phosphorylierung statt?",
    [
      "Im Zytosol",
      "In der Mitochondrienmatrix",
      "An der inneren Mitochondrienmembran",
      "Im Zellkern",
      "Am Golgi-Apparat",
    ],
    2,
    "Die Atmungskette (oxidative Phosphorylierung) sitzt an der inneren Mitochondrienmembran. Citratzyklus in der Matrix.",
    "mittel",
    ["Zelle", "Stoffwechsel"]
  ),
  q(
    "bio-pool-11-013",
    "bio-kap2",
    "Welcher Teil des Auges regelt den Lichteinfall (Pupillenweite)?",
    ["Linse", "Hornhaut", "Iris (Regenbogenhaut)", "Netzhaut", "Glaskörper"],
    2,
    "Die Iris enthält glatte Muskulatur und regelt die Pupillenweite (Lichteinfall). Die Linse ist für die Akkommodation zuständig.",
    "leicht",
    ["Auge", "Sinnesorgane"]
  ),
  q(
    "bio-pool-11-014",
    "bio-kap4",
    "Wie viele Chromosomen hat eine menschliche Körperzelle (diploid)?",
    ["23", "46", "92", "22", "44"],
    1,
    "Körperzellen sind diploid: 46 Chromosomen (23 Paare). Keimzellen sind haploid: 23 Chromosomen.",
    "leicht",
    ["Genetik", "Chromosomen"]
  ),
  q(
    "bio-pool-11-015",
    "bio-kap2",
    "Welche Aussage über die Milz trifft NICHT zu?",
    [
      "Die Milz kann Blutzellen speichern",
      "Die Milz ist an der Immunabwehr beteiligt",
      "Die Milz filtert gealterte Erythrozyten aus dem Blut",
      "Die Milz produziert Galle",
      "Die Milz liegt im linken Oberbauch",
    ],
    3,
    "Galle wird von der Leber produziert, nicht von der Milz (D falsch). Die Milz ist lymphatisches Organ und Blutspeicher.",
    "mittel",
    ["Milz", "FALSCH"]
  ),
  q(
    "bio-pool-11-016",
    "bio-kap1",
    "Was ist das Endprodukt der Glykolyse (pro Glukosemolekül)?",
    ["Zwei Pyruvatmoleküle", "Ein Pyruvatmolekül", "Laktat", "Ethanol", "CO₂"],
    0,
    "Aus einem Glukosemolekül entstehen bei der Glykolyse zwei Pyruvatmoleküle (und netto 2 ATP, 2 NADH).",
    "mittel",
    ["Stoffwechsel", "Glykolyse"]
  ),
  q(
    "bio-pool-11-017",
    "bio-kap5",
    "Was versteht man unter einer „Population“ in der Ökologie?",
    [
      "Alle Lebewesen in einem Biotop",
      "Alle Individuen einer Art in einem definierten Gebiet",
      "Eine Art",
      "Ein Ökosystem",
      "Eine Nahrungskette",
    ],
    1,
    "Eine Population umfasst alle Individuen einer Art in einem räumlich und zeitlich definierten Gebiet.",
    "leicht",
    ["Ökologie", "Population"]
  ),
  q(
    "bio-pool-11-018",
    "bio-kap2",
    "Welches Hormon stimuliert die Kontraktion der Gebärmutter bei der Geburt?",
    ["Östrogen", "Prolactin", "Oxytocin", "Progesteron", "FSH"],
    2,
    "Oxytocin wird im Hypothalamus gebildet, im Hypophysenhinterlappen gespeichert und fördert Wehen und Milchausschüttung.",
    "mittel",
    ["Hormone", "Geburt"]
  ),
  q(
    "bio-pool-11-019",
    "bio-kap4",
    "Bei einem X-chromosomal-rezessiven Erbgang:",
    [
      "sind nur Frauen betroffen",
      "sind Männer häufiger betroffen, da sie nur ein X-Chromosom haben",
      "sind nur Männer betroffen",
      "können Frauen nicht Konduktorinnen sein",
      "sind Männer nie betroffen",
    ],
    1,
    "Männer (XY) haben nur ein X-Chromosom; ein rezessives Allel auf dem X führt bereits zum Phänotyp. Frauen (XX) können Konduktorinnen sein.",
    "mittel",
    ["Vererbung", "X-chromosomal"]
  ),
  q(
    "bio-pool-11-020",
    "bio-kap2",
    "In welchem Organ wird das Hormon Renin gebildet?",
    ["Leber", "Niere", "Nebenniere", "Hypophyse", "Herz"],
    1,
    "Renin wird in den Nieren (juxtaglomeruläre Zellen) gebildet und ist Teil des Renin-Angiotensin-Aldosteron-Systems (Blutdruckregulation).",
    "mittel",
    ["Hormone", "Niere"]
  ),
  q(
    "bio-pool-11-021",
    "bio-kap1",
    "Welche Aussage über die Zellteilung trifft zu?",
    [
      "Bei der Mitose entstehen vier Tochterzellen",
      "Die Mitose erhält den ploiden Chromosomensatz",
      "Crossing-over findet in der Mitose statt",
      "Die Meiose dient dem Wachstum",
      "Bei der Meiose entstehen zwei haploide Zellen",
    ],
    1,
    "Mitose: 1 Zelle → 2 genetisch gleiche Tochterzellen, gleicher Ploidiegrad. Meiose: 1 → 4 haploide Zellen.",
    "leicht",
    ["Mitose", "Zellteilung"]
  ),
  q(
    "bio-pool-11-022",
    "bio-kap2",
    "Welcher Knochen gehört zum Oberschenkel?",
    ["Tibia", "Fibula", "Humerus", "Femur", "Radius"],
    3,
    "Der Femur ist der Oberschenkelknochen. Tibia und Fibula sind Unterschenkel, Humerus Oberarm, Radius Unterarm.",
    "leicht",
    ["Skelett", "Anatomie"]
  ),
  q(
    "bio-pool-11-023",
    "bio-kap5",
    "Welche Zellen gehören zur unspezifischen Abwehr?",
    [
      "B-Lymphozyten",
      "T-Lymphozyten",
      "Neutrophile Granulozyten",
      "Plasmazellen",
      "Gedächtniszellen",
    ],
    2,
    "Neutrophile Granulozyten (und Makrophagen, natürliche Killerzellen) gehören zur unspezifischen Abwehr. B/T-Lymphozyten zur spezifischen.",
    "leicht",
    ["Immunologie", "Blut"]
  ),
  q(
    "bio-pool-11-024",
    "bio-kap3",
    "Was ist die Plazenta?",
    [
      "Ein Teil der Eizelle",
      "Das Organ zum Stoffaustausch zwischen Mutter und Fetus",
      "Die Fruchtblase",
      "Die Nabelschnur",
      "Der Gelbkörper",
    ],
    1,
    "Die Plazenta (Mutterkuchen) entsteht aus Trophoblast und mütterlichem Gewebe und ermöglicht Stoffaustausch und Hormonproduktion.",
    "leicht",
    ["Embryologie", "Plazenta"]
  ),
  q(
    "bio-pool-11-025",
    "bio-kap4",
    "Welche Aussage zur DNA trifft zu?",
    [
      "DNA kommt nur im Zellkern vor",
      "DNA besteht aus zwei komplementären Strängen (Doppelhelix)",
      "DNA enthält Uracil",
      "DNA wird direkt in Proteine übersetzt",
      "DNA ist ein Protein",
    ],
    1,
    "Die DNA liegt als Doppelhelix mit zwei komplementären Strängen vor (Watson-Crick). Uracil ist in der RNA.",
    "leicht",
    ["DNA", "Genetik"]
  ),
  q(
    "bio-pool-11-026",
    "bio-kap2",
    "Wo münden die ableitenden Harnwege (Ureteren) ein?",
    [
      "In die Harnröhre",
      "In die Harnblase",
      "In die Niere",
      "In die Nebenniere",
      "In die Urethra direkt aus der Niere",
    ],
    1,
    "Die Harnleiter (Ureteren) münden in die Harnblase. Die Harnröhre (Urethra) führt von der Harnblase nach außen.",
    "leicht",
    ["Niere", "Anatomie"]
  ),
  q(
    "bio-pool-11-027",
    "bio-kap1",
    "Welches Vitamin wird in der Haut unter Einwirkung von UV-Licht gebildet?",
    ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D", "Vitamin K"],
    3,
    "Vitamin D wird in der Haut durch UV-B-Strahlung aus 7-Dehydrocholesterol gebildet. Es ist wichtig für den Calciumstoffwechsel.",
    "leicht",
    ["Vitamine", "Haut"]
  ),
  q(
    "bio-pool-11-028",
    "bio-kap5",
    "Was ist ein Habitat?",
    [
      "Die ökologische Nische einer Art",
      "Der konkrete Lebensort einer Art",
      "Eine Nahrungskette",
      "Die Biozönose",
      "Ein Biotoptyp",
    ],
    1,
    "Das Habitat ist der konkrete Lebensraum/Lebensort einer Art. Die Nische beschreibt die Rolle und Anforderungen der Art.",
    "mittel",
    ["Ökologie", "Habitat"]
  ),
  q(
    "bio-pool-11-029",
    "bio-kap2",
    "Welches Hormon senkt den Blutzuckerspiegel?",
    ["Glukagon", "Cortisol", "Adrenalin", "Insulin", "Wachstumshormon"],
    3,
    "Insulin (aus den Beta-Zellen der Langerhans-Inseln) senkt den Blutzucker (Glukoseaufnahme in Zellen, Glykogenaufbau). Glukagon erhöht ihn.",
    "leicht",
    ["Hormone", "Blutzucker"]
  ),
  q(
    "bio-pool-11-030",
    "bio-kap4",
    "Was ist ein Phänotyp?",
    [
      "Die genetische Ausprägung",
      "Die sichtbare bzw. messbare Ausprägung eines Merkmals",
      "Ein Chromosom",
      "Ein Allel",
      "Die Summe aller Gene",
    ],
    1,
    "Der Phänotyp ist die beobachtbare Ausprägung (Erscheinung, Verhalten). Der Genotyp ist die genetische Information.",
    "leicht",
    ["Genetik", "Phänotyp"]
  ),
  q(
    "bio-pool-11-031",
    "bio-kap2",
    "Welche Aussage über das Ohr trifft zu?",
    [
      "Das Trommelfell grenzt das Außenohr vom Mittelohr ab",
      "Die Gehörknöchelchen liegen im Innenohr",
      "Die Cochlea ist für den Gleichgewichtssinn zuständig",
      "Der Gehörgang verbindet Mittelohr und Rachen",
      "Die Bogengänge leiten den Schall",
    ],
    0,
    "Das Trommelfell trennt Gehörgang (Außenohr) und Paukenhöhle (Mittelohr). Gehörknöchelchen im Mittelohr, Cochlea im Innenohr für Hören, Bogengänge für Gleichgewicht.",
    "mittel",
    ["Ohr", "Sinnesorgane"]
  ),
  q(
    "bio-pool-11-032",
    "bio-kap1",
    "Welche Zellorganelle enthält Verdauungsenzyme?",
    ["Ribosom", "Mitochondrium", "Lysosom", "Zellkern", "Golgi-Apparat"],
    2,
    "Lysosomen enthalten hydrolytische Enzyme und dienen dem Abbau von Makromolekülen und Organellen.",
    "leicht",
    ["Zelle", "Lysosomen"]
  ),
  q(
    "bio-pool-11-033",
    "bio-kap3",
    "Aus welchem Keimblatt entsteht die Epidermis?",
    ["Mesoderm", "Entoderm", "Ektoderm", "Aus allen drei", "Aus dem Trophoblasten"],
    2,
    "Ektoderm → Epidermis, Hautanhangsgebilde, Nervensystem. Mesoderm → Bindegewebe, Muskulatur. Entoderm → Darmschleimhaut.",
    "mittel",
    ["Embryologie", "Keimblätter"]
  ),
  q(
    "bio-pool-11-034",
    "bio-kap5",
    "Was versteht man unter „Prädatoren“?",
    ["Pflanzenfresser", "Räuber (Beutegreifer)", "Aasfresser", "Parasiten", "Destenten"],
    1,
    "Prädatoren (Räuber) erbeuten andere Tiere. Herbivoren = Pflanzenfresser. Destenten = Zersetzer.",
    "leicht",
    ["Ökologie", "Nahrungsbeziehungen"]
  ),
  q(
    "bio-pool-11-035",
    "bio-kap2",
    "Welches Organ produziert das Hormon Erythropoetin?",
    ["Milz", "Leber", "Niere", "Knochenmark", "Herz"],
    2,
    "Erythropoetin (EPO) wird vor allem in der Niere gebildet und stimuliert die Bildung roter Blutkörperchen im Knochenmark.",
    "mittel",
    ["Hormone", "Blut", "Niere"]
  ),
  q(
    "bio-pool-11-036",
    "bio-kap4",
    "In welcher Phase der Meiose I trennen sich die homologen Chromosomen?",
    ["Prophase I", "Metaphase I", "Anaphase I", "Telophase I", "Interphase"],
    2,
    "In der Anaphase I der Meiose werden die homologen Chromosomen (nicht die Schwesterchromatiden) getrennt. In der Mitose trennen sich in der Anaphase die Schwesterchromatiden.",
    "mittel",
    ["Meiose", "Genetik"]
  ),
  q(
    "bio-pool-11-037",
    "bio-kap2",
    "Welcher Teil des Dünndarms schließt sich direkt an den Magen an?",
    ["Jejunum", "Ileum", "Duodenum", "Colon", "Zökum"],
    2,
    "Duodenum (Zwölffingerdarm) schließt an den Magen an, dann Jejunum und Ileum.",
    "leicht",
    ["Verdauung", "Dünndarm"]
  ),
  q(
    "bio-pool-11-038",
    "bio-kap1",
    "Welche Aussage über Mitochondrien trifft zu?",
    [
      "Sie haben keine eigene DNA",
      "Sie sind von einer einfachen Membran umgeben",
      "Sie sind der Hauptort der ATP-Produktion (aerob)",
      "Sie kommen nur in Pflanzen vor",
      "Sie synthetisieren Proteine für den Export",
    ],
    2,
    "Mitochondrien haben Doppelmembran und eigene DNA und sind der Ort der oxidativen Phosphorylierung (ATP-Produktion).",
    "leicht",
    ["Zelle", "Mitochondrien"]
  ),
  q(
    "bio-pool-11-039",
    "bio-kap5",
    "Welche Aussage zu Antikörpern trifft zu?",
    [
      "Antikörper werden von T-Killerzellen gebildet",
      "Antikörper sind Proteine (Immunglobuline)",
      "Antikörper kommen nur im Zellkern vor",
      "Antikörper werden von allen Leukozyten gebildet",
      "Antikörper sind Nukleinsäuren",
    ],
    1,
    "Antikörper (Immunglobuline) werden von Plasmazellen (aus B-Lymphozyten) gebildet und sind Proteine der humoralen Abwehr.",
    "leicht",
    ["Immunologie", "Antikörper"]
  ),
  q(
    "bio-pool-11-040",
    "bio-kap2",
    "Welches Blutgefäß führt sauerstoffreiches Blut zum Herzen?",
    ["Lungenarterie", "Aorta", "Obere Hohlvene", "Lungenvene", "Pfortader"],
    3,
    "Die Lungenvenen führen sauerstoffreiches Blut aus der Lunge zum linken Vorhof. Lungenarterie führt sauerstoffarmes Blut zur Lunge.",
    "leicht",
    ["Kreislauf", "Blutgefäße"]
  ),
  q(
    "bio-pool-11-041",
    "bio-kap4",
    "Was bedeutet „homozygot“?",
    [
      "Zwei gleiche Allele an einem Genort",
      "Zwei verschiedene Allele an einem Genort",
      "Ein Allel pro Genort",
      "Kein Allel",
      "Diploider Chromosomensatz",
    ],
    0,
    "Homozygot = gleiche Allele (z. B. AA oder aa). Heterozygot = verschiedene Allele (z. B. Aa).",
    "leicht",
    ["Genetik", "Vererbung"]
  ),
  q(
    "bio-pool-11-042",
    "bio-kap1",
    "Welcher Stoff wird bei der Gärung (z. B. in Muskelzellen bei Sauerstoffmangel) aus Pyruvat gebildet?",
    ["Ethanol", "Acetyl-CoA", "Laktat", "CO₂", "Oxalacetat"],
    2,
    "Bei der Milchsäuregärung (z. B. in Skelettmuskeln bei Anaerobiose) entsteht aus Pyruvat Laktat. Bei alkoholischer Gärung Ethanol.",
    "mittel",
    ["Stoffwechsel", "Gärung"]
  ),
  q(
    "bio-pool-11-043",
    "bio-kap2",
    "Wo wird das Hormon Aldosteron gebildet?",
    ["Nebennierenmark", "Nebennierenrinde", "Niere", "Hypophyse", "Schilddrüse"],
    1,
    "Aldosteron (Mineralokortikoid) wird in der Nebennierenrinde gebildet und reguliert den Natrium-Kalium-Haushalt und den Blutdruck.",
    "mittel",
    ["Hormone", "Nebenniere"]
  ),
  q(
    "bio-pool-11-044",
    "bio-kap5",
    "Was ist die Biozönose?",
    [
      "Der unbelebte Lebensraum",
      "Die Lebensgemeinschaft aller Arten in einem Gebiet",
      "Eine einzelne Art",
      "Ein Individuum",
      "Die Gesamtheit der abiotischen Faktoren",
    ],
    1,
    "Biozönose = Lebensgemeinschaft (Pflanzen, Tiere, Pilze, Mikroorganismen). Biotop = unbelebter Lebensraum.",
    "leicht",
    ["Ökologie", "Biozönose"]
  ),
  q(
    "bio-pool-11-045",
    "bio-kap3",
    "Was ist die Amnionhöhle?",
    [
      "Die Höhle der Plazenta",
      "Der mit Fruchtwasser gefüllte Raum um den Embryo",
      "Die Gebärmutterhöhle",
      "Die Eileiterhöhle",
      "Die Keimhöhle der Blastozyste",
    ],
    1,
    "Die Amnionhöhle ist von der Amnionmembran umgeben und enthält das Fruchtwasser, in dem der Embryo liegt.",
    "mittel",
    ["Embryologie", "Amnion"]
  ),
  q(
    "bio-pool-11-046",
    "bio-kap2",
    "Welche Aussage über die Schilddrüse trifft NICHT zu?",
    [
      "Sie bildet jodhaltige Hormone (T3, T4)",
      "Sie liegt am Hals unterhalb des Kehlkopfs",
      "Sie produziert Calcitonin",
      "Sie produziert Parathormon",
      "Sie wird durch TSH stimuliert",
    ],
    3,
    "Parathormon wird in den Nebenschilddrüsen gebildet, nicht in der Schilddrüse (D falsch). Die Schilddrüse bildet T3, T4 und Calcitonin.",
    "mittel",
    ["Schilddrüse", "FALSCH"]
  ),
  q(
    "bio-pool-11-047",
    "bio-kap4",
    "Was passiert in der Prophase der Mitose?",
    [
      "Die Schwesterchromatiden trennen sich",
      "Die Chromosomen kondensieren und werden sichtbar",
      "Die Zellmembran teilt sich",
      "Die DNA wird repliziert",
      "Die Chromosomen ordnen sich in der Äquatorialebene an",
    ],
    1,
    "In der Prophase kondensieren die Chromosomen, die Kernmembran löst sich auf. Trennung der Chromatiden in der Anaphase.",
    "leicht",
    ["Mitose", "Zellzyklus"]
  ),
  q(
    "bio-pool-11-048",
    "bio-kap1",
    "Welche Aussage über das raue endoplasmatische Retikulum trifft zu?",
    [
      "Es hat keine Ribosomen",
      "Es ist an der Synthese von Membran- und Sekretproteinen beteiligt",
      "Es kommt nur in Pflanzen vor",
      "Es enthält die DNA",
      "Es baut Proteine ab",
    ],
    1,
    "Das raue ER ist mit Ribosomen besetzt und dient der Synthese von Proteinen für Membranen und für den Export (z. B. Sekretion).",
    "mittel",
    ["Zelle", "ER"]
  ),
  q(
    "bio-pool-11-049",
    "bio-kap2",
    "Welcher Muskel zieht beim Menschen das Schulterblatt nach vorne?",
    [
      "M. trapezius",
      "M. latissimus dorsi",
      "M. pectoralis major",
      "M. serratus anterior",
      "M. deltoideus",
    ],
    3,
    "Der M. serratus anterior zieht die Scapula nach vorne (Protraction) und dreht sie. Pectoralis major zieht den Arm.",
    "schwer",
    ["Anatomie", "Muskulatur"]
  ),
  q(
    "bio-pool-11-050",
    "bio-kap5",
    "Was versteht man unter „Symbiose“?",
    [
      "Nur Räuber-Beute-Beziehung",
      "Längerfristige Wechselbeziehung zwischen Arten zum gegenseitigen Vorteil",
      "Nur Konkurrenz",
      "Nur Parasitismus",
      "Nur Kommensalismus",
    ],
    1,
    "Symbiose im engeren Sinn = wechselseitiger Nutzen (z. B. Mykorrhiza, Flechten). Oft wird der Begriff auch für enge Lebensgemeinschaften verwendet.",
    "mittel",
    ["Ökologie", "Symbiose"]
  ),
  q(
    "bio-pool-11-051",
    "bio-kap4",
    "Welche Aussage zur Meiose trifft zu?",
    [
      "Sie dient dem Wachstum",
      "Sie reduziert den Chromosomensatz von diploid auf haploid",
      "Sie erfolgt nur in Körperzellen",
      "Sie hat nur eine Teilung",
      "Es gibt kein Crossing-over",
    ],
    1,
    "Meiose dient der Bildung von Keimzellen und reduziert den Chromosomensatz (diploid → haploid). Zwei aufeinanderfolgende Teilungen.",
    "leicht",
    ["Meiose", "Genetik"]
  ),
  q(
    "bio-pool-11-052",
    "bio-kap2",
    "Wo wird das Hormon Gastrin gebildet?",
    [
      "Im Dünndarm",
      "In der Magenschleimhaut",
      "In der Bauchspeicheldrüse",
      "In der Leber",
      "In der Gallenblase",
    ],
    1,
    "Gastrin wird in der Magenschleimhaut (Antrum) gebildet und stimuliert die Magensäureproduktion.",
    "mittel",
    ["Verdauung", "Hormone"]
  ),
  q(
    "bio-pool-11-053",
    "bio-kap1",
    "Welche Aussage über die Zellmembran trifft zu?",
    [
      "Sie ist undurchlässig für alle Moleküle",
      "Sie besteht aus einer Lipiddoppelschicht mit eingelagerten Proteinen",
      "Sie enthält nur Kohlenhydrate",
      "Sie hat keine Proteine",
      "Sie umgibt nur den Zellkern",
    ],
    1,
    "Das Flüssig-Mosaik-Modell: Lipiddoppelschicht mit eingelagerten und aufgelagerten Proteinen (und Kohlenhydraten).",
    "leicht",
    ["Zellmembran", "Zelle"]
  ),
  q(
    "bio-pool-11-054",
    "bio-kap3",
    "Wann ist die Organogenese beim menschlichen Embryo weitgehend abgeschlossen?",
    [
      "Ende der 2. Woche",
      "Ende der 4. Woche",
      "Ende der 8. Woche",
      "Ende der 12. Woche",
      "Bei der Geburt",
    ],
    2,
    "Nach der 8. Woche sind die Organanlagen angelegt (Organogenese). Ab dann spricht man vom Fetus.",
    "mittel",
    ["Embryologie", "Organogenese"]
  ),
  q(
    "bio-pool-11-055",
    "bio-kap5",
    "Welche Aussage zu T-Lymphozyten trifft zu?",
    [
      "Sie produzieren Antikörper",
      "Sie reifen im Knochenmark (beim Menschen)",
      "Sie können virusinfizierte Zellen erkennen und abtöten (T-Killerzellen)",
      "Sie kommen nur im Blut vor",
      "Sie gehören zur unspezifischen Abwehr",
    ],
    2,
    "T-Killerzellen (zytotoxische T-Zellen) erkennen virusinfizierte Zellen über MHC-I und können sie abtöten. T-Zellen reifen im Thymus.",
    "mittel",
    ["Immunologie", "T-Zellen"]
  ),
  q(
    "bio-pool-11-056",
    "bio-kap2",
    "Welcher Teil des Gehirns ist vor allem für die Koordination von Bewegungen und das Gleichgewicht zuständig?",
    ["Großhirn", "Zwischenhirn", "Kleinhirn", "Hirnstamm", "Rückenmark"],
    2,
    "Das Kleinhirn (Zerebellum) koordiniert Bewegungen, Gleichgewicht und Haltung. Großhirn = höhere Funktionen, Hirnstamm = lebenswichtige Zentren.",
    "leicht",
    ["ZNS", "Gehirn"]
  ),
  q(
    "bio-pool-11-057",
    "bio-kap4",
    "Was ist die Mutation?",
    [
      "Eine bewusste Änderung des Genotyps",
      "Eine dauerhafte Änderung der DNA-Sequenz",
      "Eine Änderung nur des Phänotyps",
      "Eine Rückmutation immer zum Wildtyp",
      "Nur eine Deletion",
    ],
    1,
    "Eine Mutation ist eine dauerhafte Änderung im Erbgut (DNA). Sie kann spontan oder durch Mutagene entstehen.",
    "leicht",
    ["Genetik", "Mutation"]
  ),
  q(
    "bio-pool-11-058",
    "bio-kap1",
    "Welches Organell ist am Abbau von Wasserstoffperoxid beteiligt?",
    ["Lysosom", "Ribosom", "Peroxisom", "Mitochondrium", "Golgi-Apparat"],
    2,
    "Peroxisomen enthalten Katalase und bauen Wasserstoffperoxid (H₂O₂) zu Wasser und Sauerstoff ab.",
    "mittel",
    ["Zelle", "Peroxisomen"]
  ),
  q(
    "bio-pool-11-059",
    "bio-kap2",
    "Welche Aussage über die Bauchspeicheldrüse trifft zu?",
    [
      "Sie produziert nur Hormone",
      "Sie hat nur eine exokrine Funktion",
      "Sie produziert Verdauungsenzyme (exokrin) und Hormone wie Insulin (endokrin)",
      "Sie liegt im Brustkorb",
      "Sie produziert Galle",
    ],
    2,
    "Die Bauchspeicheldrüse ist exokrin (Verdauungsenzyme in den Pankreassaft) und endokrin (Langerhans-Inseln: Insulin, Glukagon).",
    "leicht",
    ["Verdauung", "Bauchspeicheldrüse"]
  ),
  q(
    "bio-pool-11-060",
    "bio-kap5",
    "Was ist ein Ökosystem?",
    [
      "Nur die unbelebte Umwelt",
      "Nur die Lebensgemeinschaft",
      "Die funktionale Einheit aus Biotop und Biozönose",
      "Eine einzelne Art",
      "Eine Nahrungskette",
    ],
    2,
    "Ein Ökosystem umfasst den Biotop (abiotische Faktoren) und die Biozönose (Lebewesen) in Wechselwirkung.",
    "leicht",
    ["Ökologie", "Ökosystem"]
  ),
];
