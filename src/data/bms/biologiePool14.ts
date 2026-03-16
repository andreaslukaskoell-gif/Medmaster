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
    "DNA enthält Adenin, Thymin, Guanin, Cytosin. RNA hat Uracil statt Thymin.",
    "leicht",
    ["DNA", "Genetik"]
  ),
  q(
    "bio-pool-14-002",
    "bio-kap2",
    "Welches Organ filtert das Blut und bildet den Harn?",
    ["Leber", "Milz", "Niere", "Bauchspeicheldrüse", "Gallenblase (Vesica fellea)"],
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
      "Ein nicht codierender Abschnitt (Intron)",
      "Ein codierender Abschnitt, der in der reifen mRNA bleibt",
      "Ein Intron",
      "Ein Ribosom",
      "Ein Stopp-Codon für den Translationsabbruch",
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
      "Nur humorale Antikörper",
      "Abwehr durch T-Lymphozyten",
      "Nur Makrophagen",
      "Nur B-Zellen",
      "Nur Komplement",
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
    ["Insulin", "Cortisol", "T3 und T4 (Thyroxin)", "Adrenalin", "Östrogen"],
    2,
    "Die Schilddrüse produziert die jodhaltigen Hormone T3 (Trijodthyronin) und T4 (Thyroxin).",
    "leicht",
    ["Hormone", "Schilddrüse (Glandula thyroidea) mit T3/T4-Sekretion"]
  ),
  q(
    "bio-pool-14-007",
    "bio-kap4",
    "Was ist die Replikation?",
    [
      "Übersetzung von RNA in Protein",
      "Verdopplung der DNA vor der Zellteilung",
      "Transkription",
      "Spleißen",
      "Mutation",
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
      "Es gibt mehrere Speicheldrüsen",
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
    ["Zellkern", "Ribosom", "Lysosom", "Golgi-Apparat", "Mitochondrium"],
    1,
    "Ribosomen sind die Orte der Translation (Proteinbiosynthese).",
    "leicht",
    ["Zelle", "Ribosomen"]
  ),
  q(
    "bio-pool-14-012",
    "bio-kap2",
    "Welcher Teil des Auges bricht das Licht und ermöglicht die Fokussierung?",
    ["Netzhaut", "Iris", "Linse", "Hornhaut nur", "Glaskörper (Corpus vitreum)"],
    2,
    "Die Linse bricht das Licht; durch Änderung der Linsenkrümmung wird scharfgestellt (Akkommodation).",
    "leicht",
    ["Auge", "Sinnesorgane"]
  ),
  q(
    "bio-pool-14-013",
    "bio-kap4",
    "Was ist ein dominant vererbtes Merkmal?",
    [
      "Es tritt nur bei Homozygotie auf",
      "Es tritt bereits bei einem betroffenen Allel auf",
      "Nur Frauen betroffen",
      "Nur auf dem Y-Chromosom",
      "Es wird nie vererbt",
    ],
    1,
    "Dominant: Ein betroffenes Allel reicht für die Ausprägung des Merkmals.",
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
      "Hypophyse (Hirnanhangsdrüse)",
      "Nebenniere (Glandula suprarenalis)",
      "Eierstock",
      "Plazenta nur",
      "Schilddrüse (Glandula thyroidea)",
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
      "Verlust von DNA-Abschnitten",
      "Einbau zusätzlicher Basen bzw. eines Abschnitts",
      "Nur Punktmutation",
      "Umlagerung der DNA-Sequenz ohne Veränderung der Gesamtlänge (Inversion)",
      "Reparatur",
    ],
    1,
    "Bei einer Insertion werden eine oder mehrere Basen in die DNA eingefügt.",
    "mittel",
    ["Genetik", "Mutation (permanente Veränderung der DNA-Basensequenz)"]
  ),
  q(
    "bio-pool-14-018",
    "bio-kap3",
    "Was ist die Einnistung (Implantation)?",
    [
      "Die Befruchtung (Syngamie)",
      "Das Einbetten der Blastozyste in die Gebärmutterschleimhaut",
      "Die Gastrulation",
      "Die Geburt (Partus)",
      "Die Organogenese",
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
      "Teilung nur in somatischen Körperzellen",
      "Reduktionsteilung zur Bildung von Keimzellen",
      "Gleich wie Mitose",
      "Nur eine einzige meiotische Teilung ohne zweite Reduktionsteilung",
      "Ohne Crossing-over",
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
      "In der Glykolyse",
      "In der Atmungskette (oxidative Phosphorylierung)",
      "Im Citratzyklus direkt",
      "Bei der Gärung",
      "Im Zytosol",
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
    ["Parathormon", "Calcitonin", "Vitamin D (Calciferol)", "Aldosteron", "Cortisol"],
    1,
    "Calcitonin senkt den Calciumspiegel. Parathormon erhöht ihn.",
    "mittel",
    ["Hormone (Signalmoleküle des endokrinen Systems für die Fernwirkung)", "Calcium"]
  ),
  q(
    "bio-pool-14-028",
    "bio-kap3",
    "Aus welchem Keimblatt entsteht das Skelett?",
    ["Ektoderm", "Entoderm", "Mesoderm", "Trophoblast", "Amnion"],
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
    "bio-pool-14-035",
    "bio-kap2",
    "Welche Aussage über die Milz trifft zu?",
    [
      "Sie produziert hepatische Galle für die Fettemulgierung im Duodenum",
      "Sie ist ein lymphatisches Organ und filtert gealterte Erythrozyten",
      "Sie produziert Insulin",
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
    ["Prophase", "Metaphase", "Anaphase", "Telophase und Cytokinese", "Interphase"],
    3,
    "In der Telophase bilden sich neue Kerne; bei der Cytokinese teilt sich das Zytoplasma (Zellmembran).",
    "leicht",
    ["Mitose", "Zellteilung"]
  ),
  q(
    “bio-pool-14-040”,
    "bio-kap2",
    "Welches Hormon stimuliert die Kontraktion der Gebärmutter?",
    ["Prolactin", "Oxytocin", "Progesteron", "FSH", "Östrogen"],
    1,
    "Oxytocin fördert die Wehen und den Milchspendereflex.",
    "leicht",
    ["Hormone (Signalmoleküle des endokrinen Systems für die Fernwirkung)", "Oxytocin"]
  ),
  q(
    "bio-pool-14-041",
    "bio-kap4",
    "Was ist die DNA-Replikation?",
    ["Transkription", "Verdopplung der DNA (S-Phase)", "Translation", "Spleißen", "Mutation"],
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
    ["Ribosom", "Mitochondrium", "Lysosom", "Zellkern", "Golgi-Apparat"],
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
      "Nebenniere (Glandula suprarenalis)",
      "Hypophyse (Hirnanhangsdrüse)",
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
    "Was ist Symbiose?",
    [
      "Nur Räuber-Beute-Interaktion (Prädation) zwischen trophischen Ebenen",
      "Längerfristige Wechselbeziehung zum gegenseitigen Vorteil",
      "Nur Parasitismus",
      "Nur Konkurrenz zwischen Individuen gleicher oder verschiedener Arten",
      "Nur Kommensalismus",
    ],
    1,
    "Symbiose = wechselseitiger Nutzen.",
    "mittel",
    ["Ökologie", "Symbiose (wechselseitig vorteilhaftes Zusammenleben zweier Arten)"]
  ),
];
