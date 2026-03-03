/**
 * Biologie BMS Pool 16 — 60 Fragen im offiziellen MedAT-Stil (Typ A + FALSCH).
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

export const biologiePool16: Question[] = [
  q(
    "bio-pool-16-002",
    "bio-kap2",
    "Welcher Teil des Auges regelt den Lichteinfall?",
    [
      "Linse",
      "Hornhaut (Kornea) als stärkstes lichtbrechendes Medium des Auges",
      "Iris",
      "Netzhaut",
      "Glaskörper (Corpus vitreum) als gelartiges Stützmedium des Augapfels",
    ],
    2,
    "Die Iris regelt die Pupillenweite und damit den Lichteinfall.",
    "leicht",
    ["Auge", "Sinnesorgane"]
  ),
  q(
    "bio-pool-16-003",
    "bio-kap4",
    "Wie viele Tochterzellen entstehen bei der Meiose aus einer Zelle?",
    ["1", "2", "4", "8", "46"],
    2,
    "Meiose: 1 diploide Zelle → 4 haploide Tochterzellen.",
    "leicht",
    ["Meiose", "Genetik"]
  ),
  q(
    "bio-pool-16-006",
    "bio-kap2",
    "Wo wird ADH gebildet?",
    [
      "Nebenniere (Glandula suprarenalis) mit Cortisol und Adrenalin",
      "Hypophysenvorderlappen",
      "Hypothalamus als übergeordnetes Steuerungszentrum des Hormonsystems",
      "Niere",
      "Schilddrüse (Glandula thyroidea) mit T3/T4-Sekretion",
    ],
    2,
    "ADH (Vasopressin) wird im Hypothalamus gebildet und im Hypophysenhinterlappen gespeichert.",
    "mittel",
    ["Hormone (Signalmoleküle des endokrinen Systems für die Fernwirkung)", "ADH"]
  ),
  q(
    "bio-pool-16-011",
    "bio-kap1",
    "Welches Organell enthält Chlorophyll?",
    [
      "Mitochondrium (Kraftwerk der Zelle mit eigener ringförmiger DNA)",
      "Chloroplast",
      "Lysosom (Verdauungsorganell mit saurer Hydrolase)",
      "Peroxisom (Organell für den H₂O₂-Stoffwechsel)",
      "Golgi-Apparat (Zisternenstapel für posttranslationale Modifikation)",
    ],
    1,
    "Chloroplasten enthalten Chlorophyll und sind Ort der Fotosynthese.",
    "leicht",
    ["Zelle", "Chloroplast"]
  ),
  q(
    "bio-pool-16-012",
    "bio-kap2",
    "Welcher Muskel streckt das Knie?",
    [
      "M. biceps femoris",
      "M. quadriceps femoris",
      "M. gastrocnemius",
      "M. sartorius",
      "M. gracilis",
    ],
    1,
    "Der M. quadriceps femoris streckt das Knie.",
    "mittel",
    ["Anatomie", "Muskulatur"]
  ),
  q(
    "bio-pool-16-014",
    "bio-kap5",
    "Was versteht man unter Konkurrenz?",
    [
      "Nur Räuber-Beute-Interaktion (Prädation) zwischen trophischen Ebenen",
      "Nutzung derselben begrenzten Ressource",
      "Nur symbiotische Beziehung (Mutualismus) zwischen zwei verschiedenen Arten",
      "Nur Parasitismus (einseitige Nutzung eines Wirtsorganismus)",
      "Nur zwischen Pflanzen (autotrophen Organismen) als interspezifische Interaktion",
    ],
    1,
    "Konkurrenz entsteht um dieselbe begrenzte Ressource (Nahrung, Raum, Licht).",
    "leicht",
    ["Ökologie", "Konkurrenz (Wettbewerb um begrenzte Ressourcen zwischen Organismen)"]
  ),
  q(
    "bio-pool-16-016",
    "bio-kap2",
    "Welches Hormon stimuliert die Follikelreifung?",
    [
      "Prolactin",
      "FSH",
      "Oxytocin",
      "Cortisol",
      "Aldosteron (Mineralocorticoid der NNR für die Na+/K+-Regulation)",
    ],
    1,
    "FSH (follikelstimulierendes Hormon) stimuliert die Follikelreifung im Eierstock.",
    "mittel",
    ["Hormone (Signalmoleküle des endokrinen Systems für die Fernwirkung)", "Reproduktion"]
  ),
  q(
    "bio-pool-16-025",
    "bio-kap1",
    "Welches Organell hat Doppelmembran und eigene DNA?",
    [
      "Ribosom (Ort der Proteinbiosynthese im Zytoplasma)",
      "Lysosom (Verdauungsorganell mit sauren Hydrolasen im Zytoplasma)",
      "Mitochondrium (Kraftwerk der Zelle mit eigener ringförmiger DNA)",
      "Golgi-Apparat (Zisternenstapel für posttranslationale Modifikation)",
      "Peroxisom",
    ],
    2,
    "Mitochondrien (und Chloroplasten) haben Doppelmembran und eigene DNA.",
    "leicht",
    ["Zelle", "Mitochondrien"]
  ),
  q(
    "bio-pool-16-026",
    "bio-kap2",
    "Wo wird Progesteron gebildet?",
    [
      "Hypophyse (Hirnanhangsdrüse) als Master-Drüse des endokrinen Systems",
      "Eierstock (Corpus luteum) und Plazenta",
      "Nebenniere nur",
      "Schilddrüse (Glandula thyroidea) mit T3/T4-Sekretion",
      "Bauchspeicheldrüse",
    ],
    1,
    "Progesteron wird im Gelbkörper und in der Plazenta gebildet.",
    "mittel",
    ["Hormone (Signalmoleküle des endokrinen Systems für die Fernwirkung)", "Reproduktion"]
  ),
  q(
    "bio-pool-16-031",
    "bio-kap2",
    "Welcher Knochen bildet die Schädelbasis?",
    ["Stirnbein", "Occipitalbein", "Scheitelbein", "Jochbein", "Nasenbein"],
    1,
    "Das Hinterhauptsbein (Os occipitale) bildet die Schädelbasis mit Foramen magnum.",
    "mittel",
    ["Skelett", "Schädel"]
  ),
  q(
    "bio-pool-16-035",
    "bio-kap2",
    "Welches Organ produziert Amylase?",
    [
      "Nur Magen (Gaster) mit Pepsin und Salzsäure als Verdauungsenzyme",
      "Speicheldrüsen und Bauchspeicheldrüse",
      "Nur Leber (Hepar) als exokrine Drüse mit Gallensekretion",
      "Nur Dünndarm (Intestinum tenue) mit Becherzellen und Krypten",
      "Gallenblase (Vesica fellea) als Speicherort für die Lebergalle",
    ],
    1,
    "Amylase (Stärkespaltung) wird in Speicheldrüsen und Bauchspeicheldrüse gebildet.",
    "mittel",
    ["Verdauung", "Enzyme (Biokatalysatoren für biochemische Reaktionen im Stoffwechsel)"]
  ),
  q(
    "bio-pool-16-036",
    "bio-kap4",
    "In welcher Phase der Meiose findet Crossing-over statt?",
    ["Metaphase I", "Prophase I", "Anaphase I", "Telophase I", "Metaphase II"],
    1,
    "Crossing-over erfolgt in der Prophase I der Meiose.",
    "mittel",
    ["Meiose", "Crossing-over (Rekombination homologer Chromosomenabschnitte in der Prophase I)"]
  ),
  q(
    "bio-pool-16-038",
    "bio-kap5",
    "Was versteht man unter angeborener Immunität?",
    [
      "Nur humorale Antikörper (Immunglobuline von Plasmazellen gebildet)",
      "Unspezifische, angeborene Abwehr (Barrieren, Phagozyten, NK-Zellen)",
      "Nur T-Zellen (thymusgereifte Lymphozyten der zellulären Immunantwort)",
      "Nur nach Impfung (aktive Immunisierung mit Antigenstimulation)",
      "Nur die erworbene (adaptive) Immunabwehr mit Gedächtniszellen",
    ],
    1,
    "Angeborene Abwehr: Haut, Schleimhäute, Phagozyten, NK-Zellen, Komplement – unspezifisch.",
    "mittel",
    ["Immunologie", "angeborene Abwehr"]
  ),
  q(
    "bio-pool-16-039",
    "bio-kap1",
    "Welches Vitamin ist für die Blutbildung wichtig?",
    [
      "Vitamin A (Retinol) für die Sehfunktion",
      "Vitamin B12 und Folsäure",
      "Vitamin C (Ascorbinsäure) als Antioxidans",
      "Vitamin D (Calciferol) für den Calciumstoffwechsel",
      "Vitamin K (Phyllochinon) für die Blutgerinnung",
    ],
    1,
    "Vitamin B12 und Folsäure sind für die DNA-Synthese und Erythropoese nötig.",
    "mittel",
    ["Vitamine", "Blut"]
  ),
  q(
    "bio-pool-16-040",
    "bio-kap2",
    "Wo findet der Gasaustausch in der Lunge statt?",
    [
      "In den Bronchien (luftleitende Atemwege mit Knorpelspangen)",
      "In den Alveolen",
      "Nur in der Pleura",
      "In der Trachea (Luftröhre mit C-förmigen Knorpelspangen)",
      "Unter dem Zwerchfell",
    ],
    1,
    "In den Lungenbläschen (Alveolen) erfolgt der Gasaustausch (O2 aufnehmen, CO2 abgeben).",
    "leicht",
    ["Atmung", "Lunge"]
  ),
  q(
    "bio-pool-16-049",
    "bio-kap2",
    "Wo wird Parathormon gebildet?",
    ["Calcitonin-Schilddrüse", "Nebenschilddrüse", "T3/T4", "Cortisol", "Insulin"],
    1,
    "Parathormon (PTH) aus den Nebenschilddrüsen erhöht den Calciumspiegel.",
    "mittel",
    ["Hormone (Signalmoleküle des endokrinen Systems für die Fernwirkung)", "Calcium"]
  ),
  q(
    "bio-pool-16-052",
    "bio-kap1",
    "Welches Organell ist für die Spindelbildung bei der Zellteilung wichtig?",
    [
      "Lysosom (Verdauungsorganell mit sauren Hydrolasen im Zytoplasma)",
      "Centrosom (Zentriol)",
      "Peroxisom",
      "Golgi-Apparat (Zisternenstapel für posttranslationale Modifikation)",
      "Ribosom (rRNA-Protein-Komplex im Zytoplasma oder am rER)",
    ],
    1,
    "Centrosomen organisieren die Mikrotubuli der Teilungsspindel.",
    "mittel",
    ["Zelle", "Zellteilung"]
  ),
  q(
    "bio-pool-16-054",
    "bio-kap4",
    "Was passiert in der Anaphase der Mitose?",
    [
      "Chromosomen kondensieren durch Histon-Kompaktierung in der Prophase",
      "Chromosomen ordnen sich an der Äquatorialplatte in der Metaphase an",
      "Schwesterchromatiden trennen sich",
      "Kernmembran bildet sich aus ER-Vesikeln um die Chromatiden neu",
      "Zellmembran teilt sich durch Einschnürung in der Zytokinese",
    ],
    2,
    "In der Anaphase trennen sich die Schwesterchromatiden und wandern zu den Polen.",
    "leicht",
    ["Mitose", "Zellzyklus"]
  ),
];
