/**
 * Biologie BMS Pool 14 — 60 Fragen im offiziellen MedAT-Stil (Typ A + FALSCH).
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

export const biologiePool14: Question[] = [
  q(
    "bio-pool-14-001",
    "bio-kap1",
    "Welche Nukleotide kommen in der DNA vor?",
    ["A, U, G, C", "A, T, G, C", "nur A und G", "nur T und C", "A, T, U, C"],
    1,
    "DNA enthält Adenin, Thymin, Guanin, Cytosin (A, T, G, C). RNA hat Uracil statt Thymin.",
    "leicht",
    ["DNA", "Genetik"]
  ),
  q(
    "bio-pool-14-002",
    "bio-kap2",
    "Welches Organ filtert das Blut und bildet den Harn?",
    [
      "Leber",
      "Milz",
      "Niere",
      "Bauchspeicheldrüse",
      "Gallenblase (Vesica fellea) als Speicherort für die Lebergalle",
    ],
    2,
    "Die Niere filtert das Blut (Glomerulus), bildet den Primärharn und konzentriert ihn zum Endharn.",
    "leicht",
    ["Niere", "Anatomie"]
  ),
  q(
    "bio-pool-14-003",
    "bio-kap4",
    "Was ist ein Exon?",
    [
      "Ein nicht codierender Abschnitt (Intron) der prä-mRNA-Sequenz",
      "Ein codierender Abschnitt, der in der reifen mRNA bleibt",
      "Ein Intron (nicht codierende Sequenz, die beim Spleißen entfernt wird)",
      "Ein Ribosom (Ribonukleoprotein-Komplex aus rRNA und Proteinen)",
      "Ein Stopp-Codon (UAA, UAG oder UGA) für den Translationsabbruch",
    ],
    1,
    "Exons sind die Abschnitte, die nach dem Spleißen in der mRNA bleiben und codieren. Introns werden entfernt.",
    "mittel",
    ["Genetik", "Genexpression"]
  ),
  q(
    "bio-pool-14-004",
    "bio-kap5",
    "Was ist die zelluläre Immunantwort?",
    [
      "Nur humorale Antikörper (Immunglobuline von Plasmazellen gebildet)",
      "Abwehr durch T-Lymphozyten (z. B. T-Killerzellen)",
      "Nur Makrophagen (Gewebemakrophagen aus der Monozyten-Linie)",
      "Nur B-Zellen",
      "Nur Komplement (kaskadenartig aktiviertes Plasma-Proteasensystem)",
    ],
    1,
    "Zelluläre Abwehr: T-Zellen erkennen infizierte oder entartete Zellen und töten sie oder koordinieren die Abwehr.",
    "mittel",
    ["Immunologie", "zelluläre Abwehr"]
  ),
  q(
    "bio-pool-14-006",
    "bio-kap2",
    "Welches Hormon wird in der Schilddrüse gebildet?",
    [
      "Insulin (Peptidhormon der B-Zellen des Pankreas)",
      "Cortisol (Glucocorticoid der Nebennierenrinde)",
      "T3 und T4 (Thyroxin)",
      "Adrenalin (Katecholamin des Nebennierenmarks)",
      "Östrogen (Steroidhormon der Ovarien und Plazenta)",
    ],
    2,
    "Die Schilddrüse produziert die jodhaltigen Hormone T3 (Trijodthyronin) und T4 (Thyroxin).",
    "leicht",
    [
      "Hormone (Signalmoleküle des endokrinen Systems für die Fernwirkung)",
      "Schilddrüse (Glandula thyroidea) mit T3/T4-Sekretion",
    ]
  ),
  q(
    "bio-pool-14-007",
    "bio-kap4",
    "Was ist die Replikation?",
    [
      "Übersetzung von RNA in Protein",
      "Verdopplung der DNA vor der Zellteilung",
      "Transkription (Umschreibung von DNA in mRNA im Zellkern)",
      "Spleißen (Entfernung der Introns aus der Prä-mRNA)",
      "Mutation (permanente Veränderung der DNA-Basensequenz)",
    ],
    1,
    "Bei der Replikation wird die DNA verdoppelt (S-Phase), sodass jede Tochterzelle die gleiche Erbinformation erhält.",
    "leicht",
    ["Genetik", "Replikation"]
  ),
  q(
    "bio-pool-14-009",
    "bio-kap2",
    "Welche Aussage über die Speicheldrüsen trifft NICHT zu?",
    [
      "Sie produzieren Speichel",
      "Speichel enthält Amylase",
      "Sie produzieren Pepsin",
      "Speichel befeuchtet die Nahrung",
      "Es gibt mehrere Speicheldrüsen (z. B. Glandula parotis)",
    ],
    2,
    "Pepsin wird im Magen gebildet, nicht in den Speicheldrüsen (C falsch). Speichel enthält u. a. Amylase.",
    "leicht",
    ["Verdauung", "FALSCH"]
  ),
  q(
    "bio-pool-14-011",
    "bio-kap1",
    "Welches Organell ist der Ort der Proteinbiosynthese?",
    [
      "Zellkern (Nukleus mit Chromatin und Kernhülle aus Doppelmembran)",
      "Ribosom (rRNA-Protein-Komplex im Zytoplasma oder am rER)",
      "Lysosom (Verdauungsorganell mit sauren Hydrolasen im Zytoplasma)",
      "Golgi-Apparat (Zisternenstapel für posttranslationale Modifikation)",
      "Mitochondrium (Kraftwerk der Zelle mit eigener ringförmiger DNA)",
    ],
    1,
    "Ribosomen (frei im Zytosol oder am rauen ER) sind die Orte der Translation (Proteinbiosynthese).",
    "leicht",
    ["Zelle", "Ribosomen"]
  ),
  q(
    "bio-pool-14-012",
    "bio-kap2",
    "Welcher Teil des Auges bricht das Licht und ermöglicht die Fokussierung?",
    [
      "Netzhaut",
      "Iris",
      "Linse",
      "Hornhaut nur",
      "Glaskörper (Corpus vitreum) als gelartiges Stützmedium des Augapfels",
    ],
    2,
    "Die Linse (zusammen mit der Hornhaut) bricht das Licht; durch Änderung der Linsenkrümmung wird scharfgestellt (Akkommodation).",
    "leicht",
    ["Auge", "Sinnesorgane"]
  ),
  q(
    "bio-pool-14-013",
    "bio-kap4",
    "Was ist ein dominant vererbtes Merkmal?",
    [
      "Es tritt nur bei Homozygotie auf (beide Allele müssen betroffen sein)",
      "Es tritt bereits bei einem betroffenen Allel auf",
      "Nur Frauen betroffen (ausschließlich bei XX-Karyotyp-Individuen)",
      "Nur auf dem Y-Chromosom (holandrisch, von Vater auf alle Söhne)",
      "Es wird nie vererbt (entsteht nur durch somatische Neumutationen)",
    ],
    1,
    "Dominant: Ein betroffenes Allel reicht für die Ausprägung des Merkmals (z. B. Aa oder AA).",
    "leicht",
    ["Genetik", "dominant"]
  ),
  q(
    "bio-pool-14-014",
    "bio-kap5",
    "Was sind Prädatoren?",
    ["Pflanzenfresser", "Räuber (Beutegreifer)", "Zersetzer", "Produzenten", "Parasiten"],
    1,
    "Prädatoren sind Räuber, die andere Tiere erbeuten. Herbivoren = Pflanzenfresser.",
    "leicht",
    ["Ökologie", "Nahrungsbeziehungen"]
  ),
  q(
    "bio-pool-14-015",
    "bio-kap1",
    "Welche Aussage über Mitochondrien trifft NICHT zu?",
    [
      "Sie haben eine Doppelmembran",
      "Sie sind an der ATP-Produktion beteiligt",
      "Sie haben eigene DNA",
      "Sie kommen nur in Tieren vor",
      "Sie enthalten die Atmungskette",
    ],
    3,
    "Mitochondrien kommen in tierischen und pflanzlichen Zellen vor (D falsch).",
    "leicht",
    ["Zelle", "FALSCH"]
  ),
  q(
    "bio-pool-14-016",
    "bio-kap2",
    "Wo wird das Hormon Östrogen hauptsächlich gebildet?",
    [
      "Hypophyse (Hirnanhangsdrüse) als Master-Drüse des endokrinen Systems",
      "Nebenniere (Glandula suprarenalis) mit Cortisol und Adrenalin",
      "Eierstock (Follikel, Corpus luteum)",
      "Plazenta nur",
      "Schilddrüse (Glandula thyroidea) mit T3/T4-Sekretion",
    ],
    2,
    "Östrogen wird vor allem in den Eierstöcken (Follikel, Corpus luteum) gebildet; in der Schwangerschaft auch in der Plazenta.",
    "leicht",
    ["Hormone (Signalmoleküle des endokrinen Systems für die Fernwirkung)", "Reproduktion"]
  ),
  q(
    "bio-pool-14-017",
    "bio-kap4",
    "Was ist eine Insertion (Mutation)?",
    [
      "Verlust von DNA-Abschnitten (Deletion von Basen oder Chromosomensegmenten)",
      "Einbau zusätzlicher Basen bzw. eines Abschnitts",
      "Nur Punktmutation (Austausch einer einzelnen Base im DNA-Strang)",
      "Umlagerung der DNA-Sequenz ohne Veränderung der Gesamtlänge (Inversion)",
      "Reparatur (enzymatische Korrektur von DNA-Schäden durch Reparatursysteme)",
    ],
    1,
    "Bei einer Insertion werden eine oder mehrere Basen (oder ein Abschnitt) in die DNA eingefügt.",
    "mittel",
    ["Genetik", "Mutation (permanente Veränderung der DNA-Basensequenz)"]
  ),
  q(
    "bio-pool-14-018",
    "bio-kap3",
    "Was ist die Einnistung (Implantation)?",
    [
      "Die Befruchtung (Syngamie) der Oozyte durch das Spermium",
      "Das Einbetten der Blastozyste in die Gebärmutterschleimhaut",
      "Die Gastrulation (Bildung der drei Keimblätter im Embryo)",
      "Die Geburt (Partus) am Ende der Schwangerschaft (ca. 40. SSW)",
      "Die Organogenese (Anlage und Differenzierung der Organsysteme)",
    ],
    1,
    "Bei der Implantation nistet sich die Blastozyste in die Gebärmutterschleimhaut (Endometrium) ein.",
    "leicht",
    ["Embryologie", "Implantation"]
  ),
  q(
    "bio-pool-14-020",
    "bio-kap2",
    "Welche Vene führt Blut aus dem Kopf zum Herzen?",
    ["Pfortader", "Obere Hohlvene", "Lungenvene", "Aorta", "Nierenvene"],
    1,
    "Die obere Hohlvene sammelt Blut aus Kopf, Hals, Armen und oberem Rumpf und mündet in den rechten Vorhof.",
    "leicht",
    ["Kreislauf", "Blutgefäße"]
  ),
  q(
    "bio-pool-14-022",
    "bio-kap4",
    "Was ist die Meiose?",
    [
      "Teilung nur in somatischen Körperzellen (nicht in der Keimbahn)",
      "Reduktionsteilung zur Bildung von Keimzellen",
      "Gleich wie Mitose (gleichwertige Chromosomensatzteilung ohne Reduktion)",
      "Nur eine einzige meiotische Teilung ohne zweite Reduktionsteilung",
      "Ohne Crossing-over (keine Rekombination homologer Chromosomenabschnitte)",
    ],
    1,
    "Meiose: zwei aufeinanderfolgende Teilungen, Reduktion von 2n auf n, Bildung von Gameten.",
    "leicht",
    ["Meiose", "Genetik"]
  ),
  q(
    "bio-pool-14-023",
    "bio-kap2",
    "Welcher Darmabschnitt schließt an den Magen an?",
    ["Jejunum", "Ileum", "Duodenum", "Colon", "Rektum"],
    2,
    "Der Zwölffingerdarm (Duodenum) schließt direkt an den Magenausgang (Pylorus) an.",
    "leicht",
    ["Verdauung", "Dünndarm"]
  ),
  q(
    "bio-pool-14-025",
    "bio-kap1",
    "Wo wird bei der Zellatmung der meiste ATP gebildet?",
    [
      "In der Glykolyse (Glucoseabbau zu Pyruvat im zytosolischen Kompartiment)",
      "In der Atmungskette (oxidative Phosphorylierung)",
      "Im Citratzyklus direkt (über Substratkettenphosphorylierung in der Matrix)",
      "Bei der Gärung (anaerobe Regeneration von NAD+ ohne Sauerstoff)",
      "Im Zytosol (zytosolisches Kompartiment außerhalb der Mitochondrien)",
    ],
    1,
    "Der größte Teil des ATP entsteht in der Atmungskette an der inneren Mitochondrienmembran (oxidative Phosphorylierung).",
    "mittel",
    ["Stoffwechsel", "Zellatmung"]
  ),
  q(
    "bio-pool-14-026",
    "bio-kap2",
    "Welches Hormon senkt den Calciumspiegel im Blut?",
    [
      "Parathormon",
      "Calcitonin",
      "Vitamin D (Calciferol) für den Calcium- und Phosphatstoffwechsel",
      "Aldosteron (Mineralocorticoid der NNR für die Na+/K+-Regulation)",
      "Cortisol",
    ],
    1,
    "Calcitonin (aus der Schilddrüse) senkt den Calciumspiegel. Parathormon erhöht ihn.",
    "mittel",
    ["Hormone (Signalmoleküle des endokrinen Systems für die Fernwirkung)", "Calcium"]
  ),
  q(
    "bio-pool-14-028",
    "bio-kap3",
    "Aus welchem Keimblatt entsteht das Skelett?",
    [
      "Ektoderm (äußeres Keimblatt für Haut und Nervensystem)",
      "Entoderm (inneres Keimblatt für Darmtrakt und Drüsen)",
      "Mesoderm (mittleres Keimblatt für Muskeln und Bindegewebe)",
      "Trophoblast (äußere Zellschicht der Blastozyste für die Implantation)",
      "Amnion",
    ],
    2,
    "Mesoderm → Skelett, Muskulatur, Bindegewebe, Kreislauf, Urogenitalsystem.",
    "leicht",
    ["Embryologie", "Keimblätter"]
  ),
  q(
    "bio-pool-14-030",
    "bio-kap1",
    "Welche Aussage über die Glykolyse trifft NICHT zu?",
    [
      "Sie findet im Zytosol statt",
      "Sie benötigt keinen Sauerstoff",
      "Sie liefert Pyruvat",
      "Sie findet nur in Mitochondrien statt",
      "Sie liefert netto 2 ATP pro Glukose",
    ],
    3,
    "Die Glykolyse findet im Zytosol statt, nicht in Mitochondrien (D falsch).",
    "mittel",
    ["Stoffwechsel", "FALSCH"]
  ),
  q(
    "bio-pool-14-031",
    "bio-kap2",
    "Welcher Teil des Gehirns ist für die Regulation von Hunger, Durst und Temperatur wichtig?",
    [
      "Kleinhirn (Cerebellum) als Koordinationszentrum für Motorik und Gleichgewicht",
      "Hypothalamus als übergeordnetes Steuerungszentrum des Hormonsystems",
      "Großhirnrinde (Cortex cerebri) als Sitz höherer kognitiver Funktionen",
      "Thalamus (Tor zum Bewusstsein) als Umschaltstation sensorischer Bahnen",
      "Pons (Brücke) als Teil des Hirnstamms mit Regulationszentren",
    ],
    1,
    "Der Hypothalamus reguliert u. a. Hunger, Durst, Körpertemperatur, Schlaf und viele Hormone.",
    "leicht",
    ["ZNS", "Hypothalamus als übergeordnetes Steuerungszentrum des Hormonsystems"]
  ),
  q(
    "bio-pool-14-035",
    "bio-kap2",
    "Welche Aussage über die Milz trifft zu?",
    [
      "Sie produziert hepatische Galle für die Fettemulgierung im Duodenum",
      "Sie ist ein lymphatisches Organ und filtert gealterte Erythrozyten",
      "Sie produziert Insulin (Peptidhormon der pankreatischen Betazellen)",
      "Sie liegt im rechten Oberbauch unterhalb des Zwerchfells",
      "Sie ist ein direkter Bestandteil des gastrointestinalen Verdauungstrakts",
    ],
    1,
    "Die Milz ist lymphatisches Organ, Blutspeicher und filtert alte Erythrozyten. Galle kommt aus der Leber.",
    "leicht",
    ["Milz", "Immunologie"]
  ),
  q(
    "bio-pool-14-036",
    "bio-kap4",
    "In welcher Phase der Mitose teilt sich das Zytoplasma?",
    [
      "Prophase (Kondensation und Sichtbarwerden der Chromosomen)",
      "Metaphase (Anordnung der Chromosomen in der Äquatorialebene)",
      "Anaphase (Trennung der Chromatiden zu den Zellpolen)",
      "Telophase und Cytokinese",
      "Interphase (G1-, S- und G2-Phase des Zellzyklus)",
    ],
    3,
    "In der Telophase bilden sich neue Kerne; bei der Cytokinese teilt sich das Zytoplasma (Zellmembran).",
    "leicht",
    ["Mitose", "Zellteilung"]
  ),
  q(
    "bio-pool-14-038",
    "bio-kap5",
    "Was versteht man unter „Population“?",
    [
      "Alle Arten in einem definierten Gebiet (Biozönose einer Lebensgemeinschaft)",
      "Alle Individuen einer Art in einem definierten Gebiet",
      "Ein Ökosystem (Biotop und Biozönose in funktioneller Einheit)",
      "Eine Nahrungskette (lineare Abfolge trophischer Beziehungen)",
      "Ein Biotop (unbelebter Lebensraum mit seinen physikalischen Faktoren)",
    ],
    1,
    "Population = alle Individuen einer Art in einem räumlich und zeitlich definierten Gebiet.",
    "leicht",
    ["Ökologie", "Population"]
  ),
  q(
    "bio-pool-14-039",
    "bio-kap1",
    "Welches Organell baut Wasserstoffperoxid ab?",
    [
      "Lysosom (Verdauungsorganell mit sauren Hydrolasen im Zytoplasma)",
      "Ribosom (rRNA-Protein-Komplex im Zytoplasma oder am rER)",
      "Peroxisom",
      "Mitochondrium (Kraftwerk der Zelle mit eigener ringförmiger DNA)",
      "Golgi-Apparat (Zisternenstapel für posttranslationale Modifikation)",
    ],
    2,
    "Peroxisomen enthalten Katalase und bauen H₂O₂ zu Wasser und Sauerstoff ab.",
    "mittel",
    ["Zelle", "Peroxisomen"]
  ),
  q(
    "bio-pool-14-040",
    "bio-kap2",
    "Welches Hormon stimuliert die Kontraktion der Gebärmutter?",
    ["Prolactin", "Oxytocin", "Progesteron", "FSH", "Östrogen"],
    1,
    "Oxytocin fördert die Wehen (Kontraktion der Gebärmuttermuskulatur) und den Milchspendereflex.",
    "leicht",
    ["Hormone (Signalmoleküle des endokrinen Systems für die Fernwirkung)", "Oxytocin"]
  ),
  q(
    "bio-pool-14-041",
    "bio-kap4",
    "Was ist die DNA-Replikation?",
    [
      "Transkription (Umschreibung von DNA in mRNA im Zellkern)",
      "Verdopplung der DNA (S-Phase)",
      "Translation (Übersetzung der mRNA-Codons am Ribosom)",
      "Spleißen (Entfernung der Introns aus der Prä-mRNA)",
      "Mutation",
    ],
    1,
    "Bei der Replikation wird die DNA verdoppelt, sodass jede Tochterzelle eine Kopie erhält.",
    "leicht",
    ["Genetik", "Replikation"]
  ),
  q(
    "bio-pool-14-043",
    "bio-kap1",
    "Welche Aussage über Enzyme trifft NICHT zu?",
    [
      "Enzyme sind Biokatalysatoren",
      "Enzyme senken die Aktivierungsenergie",
      "Enzyme werden bei der Reaktion verbraucht",
      "Enzyme sind meist Proteine",
      "Enzyme sind substratspezifisch",
    ],
    2,
    "Enzyme werden nicht verbraucht; sie gehen unverändert aus der Reaktion hervor (C falsch).",
    "leicht",
    ["Enzyme (Biokatalysatoren für biochemische Reaktionen im Stoffwechsel)", "FALSCH"]
  ),
  q(
    "bio-pool-14-046",
    "bio-kap3",
    "Wann beginnt das Herz des Embryos zu schlagen?",
    [
      "Am 1. Tag",
      "In der 3.–4. Woche",
      "In der 8. Woche",
      "Nach der Implantation sofort",
      "Bei der Geburt",
    ],
    1,
    "Das Herz beginnt in der 3.–4. Entwicklungswoche zu schlagen.",
    "mittel",
    ["Embryologie", "Herz"]
  ),
  q(
    "bio-pool-14-049",
    "bio-kap2",
    "Welches Organ produziert Erythropoetin?",
    ["Milz", "Leber", "Niere", "Knochenmark", "Herz"],
    2,
    "EPO wird vor allem in der Niere gebildet und stimuliert die Bildung roter Blutkörperchen im Knochenmark.",
    "mittel",
    ["Hormone (Signalmoleküle des endokrinen Systems für die Fernwirkung)", "Blut"]
  ),
  q(
    "bio-pool-14-050",
    "bio-kap4",
    "Was ist eine Mutation?",
    [
      "Eine bewusste Änderung",
      "Eine dauerhafte Änderung der DNA-Sequenz",
      "Nur eine Änderung des Phänotyps",
      "Immer eine Rückmutation",
      "Nur eine Insertion",
    ],
    1,
    "Mutation = dauerhafte Änderung im Erbgut (DNA). Kann spontan oder durch Mutagene entstehen.",
    "leicht",
    ["Genetik", "Mutation"]
  ),
  q(
    "bio-pool-14-052",
    "bio-kap1",
    "Welches Organell enthält Verdauungsenzyme?",
    [
      "Ribosom (rRNA-Protein-Komplex im Zytoplasma oder am rER)",
      "Mitochondrium (Kraftwerk der Zelle mit eigener ringförmiger DNA)",
      "Lysosom (Verdauungsorganell mit sauren Hydrolasen im Zytoplasma)",
      "Zellkern (Nukleus mit Chromatin und Kernhülle aus Doppelmembran)",
      "Golgi-Apparat (Zisternenstapel für posttranslationale Modifikation)",
    ],
    2,
    "Lysosomen enthalten hydrolytische Enzyme und bauen Makromoleküle und Organellen ab.",
    "leicht",
    ["Zelle", "Lysosomen"]
  ),
  q(
    "bio-pool-14-053",
    "bio-kap2",
    "Welche Aussage über die Aorta trifft zu?",
    [
      "Sie entspringt der rechten Kammer",
      "Sie führt sauerstoffreiches Blut in den Körperkreislauf",
      "Sie mündet in den rechten Vorhof",
      "Sie führt nur Blut zur Lunge",
      "Sie hat nur eine Klappe",
    ],
    1,
    "Die Aorta entspringt der linken Kammer und führt sauerstoffreiches Blut in den Körperkreislauf.",
    "leicht",
    ["Kreislauf", "Aorta"]
  ),
  q(
    "bio-pool-14-057",
    "bio-kap1",
    "Was ist das Endprodukt der Glykolyse (pro Glukose)?",
    [
      "Ein einziges Pyruvat als alleiniges Glykolyseprodukt",
      "Zwei Pyruvatmoleküle",
      "Laktat als Endprodukt der anaeroben Glykolyse",
      "Ethanol als alkoholisches Gärungsprodukt bei Hefen",
      "CO₂ als gasförmiges Abfallprodukt der Zellatmung",
    ],
    1,
    "Aus einem Glukosemolekül entstehen bei der Glykolyse zwei Pyruvatmoleküle.",
    "mittel",
    ["Stoffwechsel", "Glykolyse"]
  ),
  q(
    "bio-pool-14-058",
    "bio-kap2",
    "Wo wird Renin gebildet?",
    [
      "Leber",
      "Niere",
      "Nebenniere (Glandula suprarenalis) mit Cortisol und Adrenalin",
      "Hypophyse (Hirnanhangsdrüse) als Master-Drüse des endokrinen Systems",
      "Herz",
    ],
    1,
    "Renin wird in den Nieren (juxtaglomeruläre Zellen) gebildet und ist Teil des RAAS (Blutdruckregulation).",
    "mittel",
    ["Hormone (Signalmoleküle des endokrinen Systems für die Fernwirkung)", "Niere"]
  ),
  q(
    "bio-pool-14-060",
    "bio-kap5",
    "Was ist Symbiose (im engeren Sinn)?",
    [
      "Nur Räuber-Beute-Interaktion (Prädation) zwischen trophischen Ebenen",
      "Längerfristige Wechselbeziehung zum gegenseitigen Vorteil",
      "Nur Parasitismus (einseitige Nutzung eines Wirtsorganismus)",
      "Nur Konkurrenz zwischen Individuen gleicher oder verschiedener Arten",
      "Nur Kommensalismus (einseitig vorteilhaftes Zusammenleben)",
    ],
    1,
    "Symbiose = wechselseitiger Nutzen (z. B. Mykorrhiza, Flechten, Darmbakterien).",
    "mittel",
    ["Ökologie", "Symbiose (wechselseitig vorteilhaftes Zusammenleben zweier Arten)"]
  ),
];
