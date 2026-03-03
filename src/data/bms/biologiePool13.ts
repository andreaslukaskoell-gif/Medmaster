/**
 * Biologie BMS Pool 13 — 60 Fragen im offiziellen MedAT-Stil (Typ A + FALSCH).
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

export const biologiePool13: Question[] = [
  q(
    "bio-pool-13-002",
    "bio-kap2",
    "Welcher Knochen ist der längste des menschlichen Körpers?",
    ["Tibia", "Femur", "Humerus", "Wirbelsäule", "Radius"],
    1,
    "Der Oberschenkelknochen (Femur) ist der längste und kräftigste Röhrenknochen.",
    "leicht",
    ["Skelett", "Anatomie"]
  ),
  q(
    "bio-pool-13-003",
    "bio-kap4",
    "Was ist ein Stopp-Codon?",
    [
      "Codiert für eine Aminosäure",
      "Signalisiert das Ende der Translation",
      "Startet die Transkription",
      "Bindet an Ribosomen",
      "Ist nur in der DNA",
    ],
    1,
    "Stopp-Codons (UAA, UAG, UGA) beenden die Translation; kein tRNA-Molekül bindet dafür.",
    "mittel",
    ["Genetik", "Translation"]
  ),
  q(
    "bio-pool-13-004",
    "bio-kap5",
    "Was sind Mastzellen?",
    [
      "Erythrozyten (bikonkave, kernlose rote Blutkörperchen)",
      "Zellen des Bindegewebes, die bei Aktivierung Histamin freisetzen",
      "T-Killerzellen",
      "Plasmazellen (terminal differenzierte B-Zellen, Antikörpersekretion)",
      "Thrombozyten (kernlose Blutplättchen für die Hämostase)",
    ],
    1,
    "Mastzellen speichern Histamin und andere Mediatoren; bei Allergenkontakt (IgE) setzen sie diese frei.",
    "mittel",
    ["Immunologie", "Mastzellen (histaminhaltige Granulozyten im Bindegewebe)"]
  ),
  q(
    "bio-pool-13-005",
    "bio-kap1",
    "Welche Aussage über die Zellatmung trifft zu?",
    [
      "Sie findet nur in Pflanzen statt",
      "Sie verbraucht nur Zucker",
      "Sie liefert ATP durch Oxidation organischer Stoffe",
      "Sie produziert nur Laktat",
      "Sie benötigt kein Sauerstoff",
    ],
    2,
    "Zellatmung: organische Stoffe werden oxidiert, dabei wird ATP gebildet (Glykolyse, Citratzyklus, Atmungskette).",
    "leicht",
    ["Stoffwechsel", "Zellatmung"]
  ),
  q(
    "bio-pool-13-008",
    "bio-kap3",
    "Was ist die Gastrulation?",
    [
      "Die Befruchtung (Syngamie) der Oozyte durch das Spermium",
      "Die Einstülpung und Bildung der Keimblätter",
      "Die Implantation (Einnistung der Blastozyste ins Endometrium)",
      "Die Organogenese (Anlage und Differenzierung der Organsysteme)",
      "Die Geburt (Partus) am Ende der Schwangerschaft (ca. 40. SSW)",
    ],
    1,
    "Bei der Gastrulation entstehen durch Einstülpung die drei Keimblätter (Ektoderm, Mesoderm, Entoderm).",
    "mittel",
    ["Embryologie", "Gastrulation (Keimblattbildung mit Ektoderm, Mesoderm und Entoderm)"]
  ),
  q(
    "bio-pool-13-009",
    "bio-kap2",
    "Welche Aussage über das Herz trifft NICHT zu?",
    [
      "Das Herz hat vier Kammern",
      "Das Herz pumpt Blut durch den Körper",
      "Das Herz produziert Hormone (z. B. ANP)",
      "Das Herz liegt vollständig links im Brustkorb",
      "Das Herz hat Klappen",
    ],
    3,
    "Das Herz liegt im Mediastinum, größtenteils links, aber nicht vollständig links (D falsch).",
    "leicht",
    ["Herz", "FALSCH"]
  ),
  q(
    "bio-pool-13-010",
    "bio-kap5",
    "Was ist die humorale Immunantwort?",
    [
      "Abwehr durch zelluläre Immunzellen (T-Killerzellen, Phagozyten)",
      "Abwehr durch lösliche Antikörper im Blut und in Gewebeflüssigkeit",
      "Nur die angeborene unspezifische Abwehr (Barrieren und Phagozyten)",
      "Nur T-Zellen (thymusgereifte Lymphozyten der zellulären Immunantwort)",
      "Nur Makrophagen (Gewebemakrophagen aus der Monozyten-Linie)",
    ],
    1,
    "Humoral = durch Antikörper (von B-Zellen/Plasmazellen) in Körperflüssigkeiten. Zellulär = durch T-Zellen.",
    "mittel",
    ["Immunologie", "humorale Abwehr"]
  ),
  q(
    "bio-pool-13-011",
    "bio-kap1",
    "Welches Organell enthält Chlorophyll und kommt in Pflanzen vor?",
    [
      "Mitochondrium (Kraftwerk der Zelle mit eigener ringförmiger DNA)",
      "Chloroplast",
      "Lysosom (Verdauungsorganell mit saurer Hydrolase)",
      "Peroxisom (Organell für den H₂O₂-Stoffwechsel)",
      "Golgi-Apparat (Zisternenstapel für posttranslationale Modifikation)",
    ],
    1,
    "Chloroplasten enthalten Chlorophyll und sind der Ort der Fotosynthese in Pflanzen und Algen.",
    "leicht",
    ["Zelle", "Chloroplast"]
  ),
  q(
    "bio-pool-13-012",
    "bio-kap2",
    "Welcher Muskel streckt das Kniegelenk?",
    [
      "M. biceps femoris",
      "M. quadriceps femoris",
      "M. gastrocnemius",
      "M. sartorius",
      "M. gracilis",
    ],
    1,
    "Der M. quadriceps femoris (vierköpfiger Oberschenkelmuskel) streckt das Knie. Biceps femoris beugt.",
    "mittel",
    ["Anatomie", "Muskulatur"]
  ),
  q(
    "bio-pool-13-013",
    "bio-kap4",
    "Was ist ein diploider Chromosomensatz?",
    [
      "Ein einfacher Chromosomensatz (n), wie er in Keimzellen vorliegt",
      "Ein doppelter Satz (2n), je ein Chromosom von jedem Elternteil",
      "Nur in Keimzellen (Gameten nach der meiotischen Reduktionsteilung)",
      "92 Chromosomen (tetraploid, 4n) als Chromosomensatz beim Menschen",
      "Nur bei Pflanzen (Angiospermen und Gymnospermen) als Organisationsform",
    ],
    1,
    "Diploid (2n) = zwei Chromosomensätze (beim Menschen 46). Haploid (n) = ein Satz (23 in Keimzellen).",
    "leicht",
    ["Genetik", "Chromosomen"]
  ),
  q(
    "bio-pool-13-014",
    "bio-kap5",
    "Was versteht man unter „Konkurrenz“ in der Ökologie?",
    [
      "Nur Räuber-Beute-Interaktion (Prädation) zwischen trophischen Ebenen",
      "Nutzung derselben begrenzten Ressource durch verschiedene Individuen/Arten",
      "Nur symbiotische Beziehung (Mutualismus) zwischen zwei verschiedenen Arten",
      "Nur Parasitismus (einseitige Nutzung eines Wirtsorganismus)",
      "Nur zwischen Pflanzen (autotrophen Organismen) als interspezifische Interaktion",
    ],
    1,
    "Konkurrenz entsteht, wenn Individuen/Arten um dieselbe begrenzte Ressource konkurrieren (Nahrung, Raum, Licht).",
    "leicht",
    ["Ökologie", "Konkurrenz (Wettbewerb um begrenzte Ressourcen zwischen Organismen)"]
  ),
  q(
    "bio-pool-13-015",
    "bio-kap1",
    "Welche Aussage über ATP trifft zu?",
    [
      "ATP ist ein Speicher für Erbinformation",
      "ATP ist der universelle Energieträger der Zelle",
      "ATP kommt nur in Mitochondrien vor",
      "ATP wird nur bei der Fotosynthese gebildet",
      "ATP enthält keine Phosphatgruppen",
    ],
    1,
    "ATP (Adenosintriphosphat) speichert und liefert Energie durch Abspaltung von Phosphat.",
    "leicht",
    ["Stoffwechsel", "ATP"]
  ),
  q(
    "bio-pool-13-016",
    "bio-kap2",
    "Welches Hormon stimuliert die Eierstockreifung bei der Frau?",
    ["Prolactin", "FSH", "Oxytocin", "LH nur ohne FSH", "Cortisol"],
    1,
    "FSH (follikelstimulierendes Hormon) aus dem Hypophysenvorderlappen stimuliert die Follikelreifung.",
    "mittel",
    ["Hormone (Signalmoleküle des endokrinen Systems für die Fernwirkung)", "Reproduktion"]
  ),
  q(
    "bio-pool-13-017",
    "bio-kap4",
    "Was ist die Mitose?",
    [
      "Teilung zur Bildung haploider Keimzellen (meiotische Reduktionsteilung)",
      "Teilung von Körperzellen mit Erhalt des Chromosomensatzes",
      "Nur eine einzige Phase ohne Prophase, Metaphase oder Anaphase",
      "Reduktion der Chromosomenzahl von diploid (2n) auf haploid (n)",
      "Nur in Keimzellen (Gameten nach der meiotischen Reduktionsteilung)",
    ],
    1,
    "Mitose: eine Zelle teilt sich in zwei genetisch gleiche Tochterzellen mit gleichem Chromosomensatz.",
    "leicht",
    ["Mitose", "Zellteilung"]
  ),
  q(
    "bio-pool-13-018",
    "bio-kap3",
    "Aus welchem Keimblatt entsteht die Darmschleimhaut?",
    [
      "Ektoderm (äußeres Keimblatt für Haut und Nervensystem)",
      "Mesoderm (mittleres Keimblatt für Muskeln und Bindegewebe)",
      "Entoderm (inneres Keimblatt für Darmtrakt und Drüsen)",
      "Trophoblast (äußere Zellschicht der Blastozyste für die Implantation)",
      "Aus allen drei",
    ],
    2,
    "Entoderm → Epithel von Verdauungstrakt (außer Mund/Anus), Leber, Bauchspeicheldrüse, Atemwege.",
    "leicht",
    ["Embryologie", "Keimblätter"]
  ),
  q(
    "bio-pool-13-019",
    "bio-kap5",
    "Was ist ein Parasit?",
    [
      "Ein Räuber (Prädator, der Beute aktiv erjagt und konsumiert)",
      "Ein Organismus, der auf Kosten eines Wirts lebt und ihn schädigt",
      "Ein Zersetzer (Destruent, z. B. Pilze und Bakterien) für die Mineralisierung",
      "Ein Produzent (autotropher Organismus an der Basis der Nahrungskette)",
      "Ein Symbiont (Organismus in wechselseitig vorteilhafter Beziehung)",
    ],
    1,
    "Parasiten leben in oder auf einem Wirt und schädigen ihn (z. B. Bandwurm, Malariaerreger).",
    "leicht",
    ["Ökologie", "Parasitismus (einseitig nützliche Beziehung auf Kosten des Wirts)"]
  ),
  q(
    "bio-pool-13-020",
    "bio-kap2",
    "Welche Struktur trennt Brust- und Bauchhöhle?",
    ["Peritoneum", "Zwerchfell", "Pleura", "Perikard", "Dura mater"],
    1,
    "Das Zwerchfell ist der wichtigste Atemmuskel und trennt Thorax und Abdomen.",
    "leicht",
    ["Anatomie", "Zwerchfell"]
  ),
  q(
    "bio-pool-13-021",
    "bio-kap1",
    "Welche Aussage über Osmose trifft zu?",
    [
      "Wasser diffundiert von geringerer zu höherer Konzentration gelöster Stoffe",
      "Nur geladene Ionen wandern durch semipermeable Membranen per Diffusion",
      "Es gibt keinen relevanten Wasseraustausch zwischen den Kompartimenten",
      "Osmose betrifft nur gasförmige Moleküle in der Atemphysiologie",
      "Osmose benötigt ATP als direkten Energielieferanten für den Transport",
    ],
    0,
    "Bei Osmose diffundiert Wasser durch eine semipermeable Membran in Richtung der höheren Konzentration gelöster Stoffe.",
    "mittel",
    ["Zellmembran (Zytoplasmamembran als Permeabilitätsbarriere aller Zellen)", "Osmose"]
  ),
  q(
    "bio-pool-13-022",
    "bio-kap2",
    "Welcher Nerv leitet Signale vom Auge zum Gehirn?",
    ["N. opticus", "N. oculomotorius", "N. trigeminus", "N. facialis", "N. vestibulocochlearis"],
    0,
    "Der Sehnerv (N. opticus) leitet die visuellen Informationen von der Netzhaut zum Gehirn.",
    "leicht",
    ["Auge", "Nerven"]
  ),
  q(
    "bio-pool-13-023",
    "bio-kap4",
    "Was ist ein autosomal-dominanter Erbgang?",
    [
      "Nur Frauen betroffen (ausschließlich bei XX-Karyotyp-Individuen)",
      "Das Merkmal tritt auf, wenn mindestens ein betroffenes Allel vorliegt",
      "Nur Männer betroffen (ausschließlich bei XY-Karyotyp-Individuen)",
      "Immer rezessiv und nur bei Homozygotie phänotypisch erkennbar",
      "Nur auf dem X-Chromosom (gonosomal-gebundene Vererbung)",
    ],
    1,
    "Autosomal-dominant: ein betroffenes Allel reicht für den Phänotyp (z. B. Huntington).",
    "mittel",
    ["Vererbung", "dominant"]
  ),
  q(
    "bio-pool-13-024",
    "bio-kap5",
    "Welche Aussage zu Ökosystemen trifft NICHT zu?",
    [
      "Energie fließt durch das Ökosystem",
      "Nährstoffe werden recycelt",
      "Produzenten stehen am Anfang",
      "Energie wird vollständig recycelt",
      "Destenten bauen ab",
    ],
    3,
    "Energie wird nicht recycelt; sie fließt ein und geht als Wärme verloren (D falsch).",
    "mittel",
    ["Ökologie", "FALSCH"]
  ),
  q(
    "bio-pool-13-025",
    "bio-kap1",
    "Welches Organell ist von einer Doppelmembran umgeben und enthält eigene DNA?",
    [
      "Ribosom (Ort der Proteinbiosynthese im Zytoplasma)",
      "Lysosom (Verdauungsorganell mit sauren Hydrolasen im Zytoplasma)",
      "Mitochondrium (Kraftwerk der Zelle mit eigener ringförmiger DNA)",
      "Golgi-Apparat (Zisternenstapel für posttranslationale Modifikation)",
      "Peroxisom",
    ],
    2,
    "Mitochondrien (und Chloroplasten) haben Doppelmembran und eigene DNA (Endosymbiontentheorie).",
    "leicht",
    ["Zelle", "Mitochondrien"]
  ),
  q(
    "bio-pool-13-026",
    "bio-kap2",
    "Wo wird das Hormon Progesteron gebildet?",
    [
      "Hypophyse (Hirnanhangsdrüse) als Master-Drüse des endokrinen Systems",
      "Eierstock (Corpus luteum) und Plazenta",
      "Nebenniere nur",
      "Schilddrüse (Glandula thyroidea) mit T3/T4-Sekretion",
      "Bauchspeicheldrüse",
    ],
    1,
    "Progesteron wird im Gelbkörper (Corpus luteum) und in der Plazenta gebildet; es erhält die Schwangerschaft.",
    "mittel",
    ["Hormone (Signalmoleküle des endokrinen Systems für die Fernwirkung)", "Reproduktion"]
  ),
  q(
    "bio-pool-13-027",
    "bio-kap4",
    "Was ist die Translation?",
    [
      "Kopieren der DNA",
      "Übersetzung von mRNA in Protein an den Ribosomen",
      "Replikation",
      "Spleißen (Entfernung der Introns aus der Prä-mRNA)",
      "Transkription (Umschreibung von DNA in mRNA im Zellkern)",
    ],
    1,
    "Translation = Übersetzung der mRNA in eine Aminosäuresequenz (Protein) an den Ribosomen.",
    "leicht",
    ["Genetik", "Translation"]
  ),
  q(
    "bio-pool-13-028",
    "bio-kap3",
    "Wann spricht man vom Fetus?",
    [
      "Ab der Befruchtung",
      "Ab der 8. Entwicklungswoche",
      "Ab der Implantation",
      "Ab der Gastrulation",
      "Ab der Geburt",
    ],
    1,
    "Nach der Organogenese (ab etwa 8. Woche) wird der Embryo als Fetus bezeichnet.",
    "leicht",
    ["Embryologie", "Fetus"]
  ),
  q(
    "bio-pool-13-029",
    "bio-kap5",
    "Was sind Plasmazellen?",
    [
      "T-Lymphozyten (thymusgereift, zelluläre Immunantwort und Zytokinsekretion)",
      "Aus B-Zellen entstandene Zellen, die Antikörper sezernieren",
      "Erythrozyten (bikonkave, kernlose rote Blutkörperchen)",
      "Makrophagen (phagozytierende Antigenpräsentierende Zellen des Immunsystems)",
      "NK-Zellen",
    ],
    1,
    "Plasmazellen sind aus B-Lymphozyten entstanden und produzieren große Mengen spezifischer Antikörper.",
    "mittel",
    ["Immunologie", "Plasmazellen (terminal differenzierte B-Zellen, Antikörpersekretion)"]
  ),
  q(
    "bio-pool-13-030",
    "bio-kap1",
    "Welche Aussage über aktiven Transport trifft zu?",
    [
      "Er erfolgt nur entlang dem Konzentrationsgefälle",
      "Er benötigt Energie (z. B. ATP)",
      "Er betrifft nur Wasser",
      "Es gibt keinen aktiven Transport bei Zellen",
      "Er erfolgt nur bei Pflanzen",
    ],
    1,
    "Beim aktiven Transport werden Stoffe gegen das Konzentrationsgefälle unter Energieverbrauch transportiert.",
    "mittel",
    ["Zellmembran (Zytoplasmamembran als Permeabilitätsbarriere aller Zellen)", "Transport"]
  ),
  q(
    "bio-pool-13-031",
    "bio-kap2",
    "Welcher Knochen bildet die Basis des Schädels?",
    ["Stirnbein", "Occipitalbein", "Scheitelbein", "Jochbein", "Nasenbein"],
    1,
    "Das Hinterhauptsbein (Os occipitale) bildet die Schädelbasis und enthält das Foramen magnum.",
    "mittel",
    ["Skelett", "Schädel"]
  ),
  q(
    "bio-pool-13-032",
    "bio-kap4",
    "Was ist ein rezessives Allel?",
    [
      "Es kommt nur bei Männern vor",
      "Es kommt nur bei Frauen vor",
      "Es prägt sich nur aus, wenn homozygot vorliegend",
      "Es dominiert immer",
      "Es liegt nur auf dem Y-Chromosom",
    ],
    2,
    "Rezessiv: Das Merkmal tritt nur auf, wenn beide Allele rezessiv sind (z. B. aa).",
    "leicht",
    ["Genetik", "rezessiv"]
  ),
  q(
    "bio-pool-13-033",
    "bio-kap5",
    "Was ist ein Herbivor?",
    [
      "Räuber",
      "Pflanzenfresser",
      "Zersetzer",
      "Produzent (autotropher Organismus an der Basis der Nahrungskette)",
      "Parasit",
    ],
    1,
    "Herbivoren (Pflanzenfresser) ernähren sich von Pflanzen. Prädatoren = Räuber.",
    "leicht",
    ["Ökologie", "Nahrungskette (lineare Darstellung der trophischen Beziehungen zwischen Arten)"]
  ),
  q(
    "bio-pool-13-035",
    "bio-kap2",
    "Welches Organ produziert Amylase für die Kohlenhydratverdauung?",
    [
      "Nur Magen (Gaster) mit Pepsin und Salzsäure als Verdauungsenzyme",
      "Speicheldrüsen und Bauchspeicheldrüse",
      "Nur Leber (Hepar) als exokrine Drüse mit Gallensekretion",
      "Nur Dünndarm (Intestinum tenue) mit Becherzellen und Krypten",
      "Gallenblase (Vesica fellea) als Speicherort für die Lebergalle",
    ],
    1,
    "Amylase (Spaltung von Stärke) wird in Speicheldrüsen und in der Bauchspeicheldrüse gebildet.",
    "mittel",
    ["Verdauung", "Enzyme (Biokatalysatoren für biochemische Reaktionen im Stoffwechsel)"]
  ),
  q(
    "bio-pool-13-036",
    "bio-kap4",
    "In welcher Phase der Meiose findet das Crossing-over statt?",
    ["Metaphase I", "Prophase I", "Anaphase I", "Telophase I", "Metaphase II"],
    1,
    "Crossing-over erfolgt in der Prophase I der Meiose zwischen homologen Chromosomen.",
    "mittel",
    ["Meiose", "Crossing-over (Rekombination homologer Chromosomenabschnitte in der Prophase I)"]
  ),
  q(
    "bio-pool-13-037",
    "bio-kap3",
    "Was ist die Nabelschnur?",
    [
      "Teil der Plazenta (Mutterkuchen, materno-fetale Austauschstruktur)",
      "Verbindung zwischen Fetus und Plazenta mit Blutgefäßen",
      "Die Fruchtblase (Amnionhöhle mit Fruchtwasser zum Schutz)",
      "Der Dottersack (Vesica umbilicalis der frühen Embryonalentwicklung)",
      "Die Amnionhöhle (Fruchtblase mit schützender Amnionflüssigkeit)",
    ],
    1,
    "Die Nabelschnur enthält Nabelvene und Nabelarterien und verbindet den Fetus mit der Plazenta.",
    "leicht",
    ["Embryologie", "Nabelschnur"]
  ),
  q(
    "bio-pool-13-038",
    "bio-kap5",
    "Was versteht man unter „angeborener Immunität“?",
    [
      "Nur humorale Antikörper (Immunglobuline von Plasmazellen gebildet)",
      "Unspezifische, angeborene Abwehrmechanismen (Barrieren, Phagozyten, NK-Zellen)",
      "Nur T-Zellen (thymusgereifte Lymphozyten der zellulären Immunantwort)",
      "Nur nach Impfung (aktive Immunisierung mit Antigenstimulation)",
      "Nur die erworbene (adaptive) Immunabwehr mit Gedächtniszellen",
    ],
    1,
    "Angeborene Abwehr: Haut, Schleimhäute, Phagozyten, NK-Zellen, Komplement – unspezifisch und sofort wirksam.",
    "mittel",
    ["Immunologie", "angeborene Abwehr"]
  ),
  q(
    "bio-pool-13-039",
    "bio-kap1",
    "Welches Vitamin wird für die Blutbildung (Erythropoese) benötigt?",
    [
      "Vitamin A (Retinol) für die Sehfunktion",
      "Vitamin B12 und Folsäure",
      "Vitamin C (Ascorbinsäure) als Antioxidans",
      "Vitamin D (Calciferol) für den Calciumstoffwechsel",
      "Vitamin K (Phyllochinon) für die Blutgerinnung",
    ],
    1,
    "Vitamin B12 und Folsäure sind für die DNA-Synthese und damit für die Bildung roter Blutkörperchen nötig.",
    "mittel",
    ["Vitamine", "Blut"]
  ),
  q(
    "bio-pool-13-040",
    "bio-kap2",
    "Welche Aussage über die Lunge trifft zu?",
    [
      "Sie hat nur einen Lappen rechts",
      "Der Gasaustausch findet in den Alveolen statt",
      "Sie produziert Surfactant nur in der Pleura",
      "Die Bronchien haben keine Knorpelspangen",
      "Sie liegt unter dem Zwerchfell",
    ],
    1,
    "In den Lungenbläschen (Alveolen) erfolgt der Gasaustausch (O2 aufnehmen, CO2 abgeben).",
    "leicht",
    ["Atmung", "Lunge"]
  ),
  q(
    "bio-pool-13-041",
    "bio-kap4",
    "Was ist ein Genom?",
    [
      "Ein einzelnes Gen (DNA-Abschnitt für ein bestimmtes Genprodukt)",
      "Die Gesamtheit der Erbinformation eines Organismus",
      "Ein Chromosom (kondensierte Chromatinstruktur aus DNA und Histonen)",
      "Nur die codierende DNA (Exome) ohne regulatorische Sequenzen",
      "Ein Protein (Polypeptidkette aus Aminosäuren mit Raumstruktur)",
    ],
    1,
    "Das Genom umfasst die gesamte DNA eines Organismus (alle Gene und nichtcodierende Bereiche).",
    "leicht",
    ["Genetik", "Genom"]
  ),
  q(
    "bio-pool-13-042",
    "bio-kap5",
    "Was ist eine Art (biologischer Artbegriff)?",
    [
      "Alle Lebewesen (Gesamtheit der Organismen aller Domänen und Reiche)",
      "Gruppe von Individuen, die sich untereinander fortpflanzen können und fertile Nachkommen haben",
      "Eine Gattung (Genus) als taxonomische Einheit verwandter Arten",
      "Eine Familie (Familia) als übergeordnete taxonomische Kategorie",
      "Eine Population (alle Individuen einer Art in einem bestimmten Gebiet)",
    ],
    1,
    "Biologischer Artbegriff: Fortpflanzungsgemeinschaft mit fruchtbaren Nachkommen.",
    "leicht",
    ["Ökologie", "Art"]
  ),
  q(
    "bio-pool-13-043",
    "bio-kap1",
    "Wo findet der Citratzyklus statt?",
    [
      "Im Zytosol (zytosolisches Kompartiment außerhalb der Mitochondrien)",
      "In der Mitochondrienmatrix",
      "Im Zellkern (Nukleus) während der Transkription von DNA zu mRNA",
      "An der Zellmembran (membrangebundene Ribosomen für sekretorische Proteine)",
      "Am Golgi-Apparat (Zisternenstapel für Proteinmodifikation und -sortierung)",
    ],
    1,
    "Der Citratzyklus (Krebszyklus) läuft in der Matrix der Mitochondrien ab.",
    "mittel",
    ["Stoffwechsel", "Citratzyklus"]
  ),
  q(
    "bio-pool-13-044",
    "bio-kap2",
    "Welcher Teil des Dünndarms folgt auf das Duodenum?",
    ["Ileum", "Jejunum", "Colon", "Zökum", "Rektum"],
    1,
    "Reihenfolge: Duodenum → Jejunum → Ileum. Dann Dickdarm (Colon).",
    "leicht",
    ["Verdauung", "Dünndarm"]
  ),
  q(
    "bio-pool-13-045",
    "bio-kap4",
    "Was ist eine Deletion?",
    [
      "Verdopplung eines Abschnitts",
      "Verlust eines DNA-Abschnitts",
      "Einbau einer Base",
      "Umlagerung ohne Verlust",
      "Punktmutation",
    ],
    1,
    "Bei einer Deletion geht ein Stück DNA verloren. Kann zu Verschiebung des Leserasters führen.",
    "mittel",
    ["Genetik", "Mutation"]
  ),
  q(
    "bio-pool-13-046",
    "bio-kap3",
    "Aus welchem Keimblatt entstehen die Nieren?",
    [
      "Ektoderm (äußeres Keimblatt für Haut und Nervensystem)",
      "Entoderm (inneres Keimblatt für Darmtrakt und Drüsen)",
      "Mesoderm (mittleres Keimblatt für Muskeln und Bindegewebe)",
      "Trophoblast (äußere Zellschicht der Blastozyste für die Implantation)",
      "Aus dem Amnion",
    ],
    2,
    "Nieren und ableitende Harnwege entstehen aus dem Mesoderm (intermediäres Mesoderm).",
    "mittel",
    ["Embryologie", "Keimblätter"]
  ),
  q(
    "bio-pool-13-047",
    "bio-kap5",
    "Welche Aussage zu T-Helferzellen trifft zu?",
    [
      "Sie produzieren spezifische Antikörper gegen extrazelluläre Pathogene",
      "Sie erkennen Antigene über MHC-II und unterstützen B-Zellen und andere Immunzellen",
      "Sie töten nur Bakterien direkt durch Phagozytose und Lysozym",
      "Sie gehören zur angeborenen unspezifischen Immunabwehr (Innate Immunity)",
      "Sie reifen in der Milz (Splen) als sekundäres lymphatisches Organ",
    ],
    1,
    "T-Helferzellen (CD4+) erkennen Antigene auf MHC-II und unterstützen B-Zellen, Makrophagen und zytotoxische T-Zellen.",
    "mittel",
    ["Immunologie", "T-Helferzellen (CD4-positiv, Zytokinfreisetzung)"]
  ),
  q(
    "bio-pool-13-048",
    "bio-kap1",
    "Welche Aussage über NADH trifft zu?",
    [
      "Es ist ein Strukturprotein",
      "Es ist ein Coenzym, das Elektronen überträgt",
      "Es kommt nur in der DNA vor",
      "Es ist ein Hormon",
      "Es wird nur bei der Fotosynthese gebildet",
    ],
    1,
    "NADH (und FADH2) übertragen Elektronen in der Atmungskette; dabei wird ATP gebildet.",
    "mittel",
    ["Stoffwechsel", "Coenzyme"]
  ),
  q(
    "bio-pool-13-049",
    "bio-kap2",
    "Welches Hormon wird in der Nebenschilddrüse gebildet?",
    ["Calcitonin", "Parathormon", "T3", "Cortisol", "Insulin"],
    1,
    "Parathormon (PTH) aus den Nebenschilddrüsen erhöht den Calciumspiegel im Blut. Calcitonin (Schilddrüse) senkt ihn.",
    "mittel",
    ["Hormone (Signalmoleküle des endokrinen Systems für die Fernwirkung)", "Calcium"]
  ),
  q(
    "bio-pool-13-050",
    "bio-kap4",
    "Was ist ein Karyotyp?",
    [
      "Ein Gen (codierender DNA-Abschnitt für ein Genprodukt)",
      "Die Darstellung der Chromosomen einer Zelle (Anzahl und Form)",
      "Ein Phänotyp (sichtbare oder messbare Merkmalsausprägung des Genotyps)",
      "Eine Mutation (permanente Veränderung der DNA-Basensequenz im Genom)",
      "Ein Protein (Polypeptidkette aus Aminosäuren mit Raumstruktur)",
    ],
    1,
    "Der Karyotyp zeigt die Chromosomen einer Zelle (Anzahl, Größe, Bandenmuster) – z. B. zur Diagnostik.",
    "mittel",
    ["Genetik", "Karyotyp"]
  ),
  q(
    "bio-pool-13-051",
    "bio-kap5",
    "Was ist ein Ökologisches Gleichgewicht?",
    [
      "Keine Wechselwirkungen zwischen den biotischen und abiotischen Faktoren",
      "Dynamisches Gleichgewicht mit Schwankungen",
      "Keine Artenvielfalt (Biodiversität) innerhalb des ökologischen Systems",
      "Nur abiotische Faktoren (Temperatur, Licht, Wasser) ohne Lebewesen",
      "Statisches System ohne Veränderungen und Sukzessionsprozesse",
    ],
    1,
    "Ökosysteme sind dynamisch; Gleichgewicht bedeutet stabile Schwankungen um einen Mittelwert, nicht Starre.",
    "mittel",
    ["Ökologie", "Gleichgewicht"]
  ),
  q(
    "bio-pool-13-052",
    "bio-kap1",
    "Welches Organell ist für die Zellteilung (Spindelbildung) wichtig?",
    [
      "Lysosom (Verdauungsorganell mit sauren Hydrolasen im Zytoplasma)",
      "Centrosom (Zentriol)",
      "Peroxisom",
      "Golgi-Apparat (Zisternenstapel für posttranslationale Modifikation)",
      "Ribosom (rRNA-Protein-Komplex im Zytoplasma oder am rER)",
    ],
    1,
    "Centrosomen (mit Zentriolen) organisieren die Mikrotubuli der Teilungsspindel bei Mitose und Meiose.",
    "mittel",
    ["Zelle", "Zellteilung"]
  ),
  q(
    "bio-pool-13-053",
    "bio-kap2",
    "Welche Aussage über die Bauchspeicheldrüse trifft NICHT zu?",
    [
      "Sie produziert Verdauungsenzyme",
      "Sie produziert Insulin (Peptidhormon der pankreatischen Betazellen)",
      "Sie liegt retroperitoneal",
      "Sie produziert hepatische Galle für die Fettemulgierung im Duodenum",
      "Sie hat Langerhans-Inseln",
    ],
    3,
    "Galle wird von der Leber produziert, nicht von der Bauchspeicheldrüse (D falsch).",
    "leicht",
    ["Bauchspeicheldrüse", "FALSCH"]
  ),
  q(
    "bio-pool-13-054",
    "bio-kap4",
    "Was ist die Anaphase der Mitose?",
    [
      "Chromosomen kondensieren durch Histon-Kompaktierung in der Prophase",
      "Chromosomen ordnen sich an der Äquatorialplatte in der Metaphase an",
      "Schwesterchromatiden trennen sich und wandern zu den Polen",
      "Kernmembran bildet sich aus ER-Vesikeln um die Chromatiden neu",
      "Zellmembran teilt sich durch Einschnürung in der Zytokinese",
    ],
    2,
    "In der Anaphase trennen sich die Schwesterchromatiden und werden zu den Spindelpolen gezogen.",
    "leicht",
    ["Mitose", "Zellzyklus"]
  ),
  q(
    "bio-pool-13-055",
    "bio-kap3",
    "Was ist die Chorionhöhle?",
    [
      "Die Amnionhöhle (Fruchtblase mit schützender Amnionflüssigkeit)",
      "Der Raum zwischen Trophoblast und Embryoblast in der frühen Blastozyste",
      "Die Gebärmutterhöhle (Cavum uteri, ausgekleidet mit Endometrium)",
      "Die Fruchtblase (Amnionhöhle mit Fruchtwasser zum Schutz)",
      "Die Plazenta (Mutterkuchen als materno-fetales Austauschorgan)",
    ],
    1,
    "Die Chorionhöhle (extraembryonales Zölom) liegt außerhalb des Embryos, zwischen Trophoblast und Amnion.",
    "schwer",
    ["Embryologie", "Chorion (äußere Eihaut mit Zotten für den Stoffaustausch)"]
  ),
  q(
    "bio-pool-13-056",
    "bio-kap5",
    "Was sind Zytokine?",
    [
      "Antikörper (Immunglobuline zur spezifischen Antigenerkennung und -bindung)",
      "Signalmoleküle des Immunsystems (z. B. Interleukine)",
      "Nur Hormone",
      "Nur Enzyme",
      "Nur Toxine",
    ],
    1,
    "Zytokine (z. B. Interleukine, Interferone) steuern die Kommunikation zwischen Immunzellen.",
    "mittel",
    ["Immunologie", "Zytokine"]
  ),
  q(
    "bio-pool-13-057",
    "bio-kap1",
    "Welche Aussage über die Diffusion trifft zu?",
    [
      "Sie benötigt immer Energie",
      "Stoffe bewegen sich entlang dem Konzentrationsgefälle",
      "Sie betrifft nur große Moleküle",
      "Sie erfolgt nur durch Kanäle",
      "Sie gibt es nur in Flüssigkeiten",
    ],
    1,
    "Bei Diffusion bewegen sich Teilchen vom Ort höherer zum Ort geringerer Konzentration (passiv).",
    "leicht",
    ["Zellmembran (Zytoplasmamembran als Permeabilitätsbarriere aller Zellen)", "Diffusion"]
  ),
  q(
    "bio-pool-13-058",
    "bio-kap2",
    "Welcher Muskel ist der Hauptatemmuskel?",
    ["Interkostalmuskeln", "Zwerchfell", "M. pectoralis", "M. scalenus", "Bauchmuskeln"],
    1,
    "Das Zwerchfell ist der wichtigste Inspirationsmuskel; bei Kontraktion vergrößert sich der Thorax.",
    "leicht",
    ["Atmung", "Zwerchfell"]
  ),
  q(
    "bio-pool-13-059",
    "bio-kap4",
    "Was ist ein polygener Erbgang?",
    [
      "Nur ein einzelnes Gen beteiligt (monogene, mendelsche Vererbung)",
      "Mehrere Gene und oft Umweltfaktoren beeinflussen ein Merkmal",
      "Nur auf dem X-Chromosom (gonosomal-gebundene Vererbung)",
      "Nur rezessiv (Merkmal zeigt sich nur bei homozygotem Genotyp)",
      "Nur dominant (Merkmal manifestiert sich bereits bei einem Allel)",
    ],
    1,
    "Bei polygener Vererbung (z. B. Körpergröße, Hautfarbe) wirken viele Gene und die Umwelt zusammen.",
    "mittel",
    ["Genetik", "polygen (mehrere Gene bestimmen ein Merkmal additiv)"]
  ),
  q(
    "bio-pool-13-060",
    "bio-kap5",
    "Was ist ein Konsument in einem Ökosystem?",
    [
      "Ein Produzent (autotropher Organismus an der Basis der Nahrungskette)",
      "Ein Organismus, der organische Substanz von anderen aufnimmt (Pflanzenfresser, Räuber etc.)",
      "Ein Zersetzer (Destruent) ohne Rolle als Konsument in der Nahrungskette",
      "Ein Pilz (Eukaryot mit Chitin-Zellwand) ohne autotrophe Ernährung",
      "Eine Pflanze (autotropher Organismus mit Photosynthese und Zellwand)",
    ],
    1,
    "Konsumenten ernähren sich von anderen Organismen (Herbivoren, Karnivoren, Omnivoren).",
    "leicht",
    ["Ökologie", "Konsument (heterotropher Organismus auf höherer trophischer Ebene)"]
  ),
];
