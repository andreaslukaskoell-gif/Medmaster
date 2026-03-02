/**
 * Biologie BMS Pool 15 — 60 Fragen im offiziellen MedAT-Stil (Typ A + FALSCH).
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

export const biologiePool15: Question[] = [
  q(
    "bio-pool-15-002",
    "bio-kap2",
    "Welcher Teil des Gehirns koordiniert Bewegungen und Gleichgewicht?",
    ["Großhirn", "Kleinhirn", "Thalamus", "Hypothalamus", "Medulla oblongata"],
    1,
    "Das Kleinhirn (Zerebellum) koordiniert Motorik, Gleichgewicht und Haltung.",
    "leicht",
    ["ZNS", "Gehirn"]
  ),
  q(
    "bio-pool-15-003",
    "bio-kap4",
    "Wie viele Chromosomen hat eine menschliche Körperzelle?",
    ["23", "46", "92", "22", "44"],
    1,
    "Körperzellen sind diploid: 46 Chromosomen (23 Paare). Keimzellen haploid: 23.",
    "leicht",
    ["Genetik", "Chromosomen"]
  ),
  q(
    "bio-pool-15-004",
    "bio-kap5",
    "Was sind Antikörper?",
    [
      "Nukleinsäuren",
      "Proteine (Immunglobuline), die von Plasmazellen gebildet werden",
      "Zellen",
      "Hormone",
      "Enzyme",
    ],
    1,
    "Antikörper (Immunglobuline) sind Proteine der humoralen Abwehr, gebildet von Plasmazellen.",
    "leicht",
    ["Immunologie", "Antikörper"]
  ),
  q(
    "bio-pool-15-006",
    "bio-kap2",
    "Welches Hormon senkt den Blutzucker?",
    ["Glukagon", "Insulin", "Cortisol", "Adrenalin", "Wachstumshormon"],
    1,
    "Insulin (Beta-Zellen der Bauchspeicheldrüse) senkt den Blutzucker; Glukagon erhöht ihn.",
    "leicht",
    ["Hormone", "Blutzucker"]
  ),
  q(
    "bio-pool-15-010",
    "bio-kap5",
    "Was ist ein Produzent?",
    [
      "Ein Tier",
      "Organismus, der aus anorganischen Stoffen organische Substanz aufbaut (z. B. Pflanzen)",
      "Ein Pilz",
      "Ein Zersetzer",
      "Ein Räuber",
    ],
    1,
    "Produzenten (Pflanzen, Algen) betreiben Fotosynthese und bauen Biomasse auf.",
    "leicht",
    ["Ökologie", "Produzent"]
  ),
  q(
    "bio-pool-15-011",
    "bio-kap1",
    "Welches Organell enthält die Erbinformation?",
    ["Ribosom", "Zellkern", "Mitochondrium nur", "Lysosom", "Golgi-Apparat"],
    1,
    "Der Zellkern enthält die Hauptmenge der DNA (Erbinformation). Mitochondrien haben eigene kleine DNA.",
    "leicht",
    ["Zelle", "Zellkern"]
  ),
  q(
    "bio-pool-15-012",
    "bio-kap2",
    "Welcher Darmabschnitt hat Zotten und Krypten für die Resorption?",
    ["Colon", "Duodenum und Jejunum", "Magen", "Rektum", "Ösophagus"],
    1,
    "Dünndarm (Duodenum, Jejunum, Ileum) hat Zotten und Krypten für die Nährstoffresorption.",
    "leicht",
    ["Verdauung", "Dünndarm"]
  ),
  q(
    "bio-pool-15-016",
    "bio-kap2",
    "Wo wird Testosteron beim Mann gebildet?",
    ["Nebenniere", "Hypophyse", "Hoden", "Prostata", "Nebenhoden"],
    2,
    "Testosteron wird in den Leydig-Zellen der Hoden gebildet.",
    "leicht",
    ["Hormone", "Reproduktion"]
  ),
  q(
    "bio-pool-15-021",
    "bio-kap1",
    "Welches Vitamin wird in der Haut unter UV-Licht gebildet?",
    ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D", "Vitamin K"],
    3,
    "Vitamin D wird in der Haut durch UV-B-Strahlung gebildet (aus 7-Dehydrocholesterol).",
    "leicht",
    ["Vitamine", "Haut"]
  ),
  q(
    "bio-pool-15-023",
    "bio-kap2",
    "Welches Epithel kleidet die Luftröhre aus?",
    ["Urothel", "Flimmerepithel", "Plattenepithel", "Verhornendes Epithel", "Übergangsepithel"],
    1,
    "Die Trachea ist von Flimmerepithel (Zilien) ausgekleidet; Schleim transportiert Partikel ab.",
    "mittel",
    ["Gewebe", "Atmung"]
  ),
  q(
    "bio-pool-15-024",
    "bio-kap5",
    "Was sind T-Killerzellen?",
    [
      "B-Lymphozyten",
      "Zytotoxische T-Zellen, die virusinfizierte Zellen abtöten können",
      "Plasmazellen",
      "Makrophagen",
      "NK-Zellen nur",
    ],
    1,
    "T-Killerzellen (zytotoxische T-Zellen) erkennen infizierte Zellen über MHC-I und töten sie ab.",
    "mittel",
    ["Immunologie", "T-Zellen"]
  ),
  q(
    "bio-pool-15-028",
    "bio-kap3",
    "Wann ist die Organogenese weitgehend abgeschlossen?",
    ["Ende 2. Woche", "Ende 4. Woche", "Ende 8. Woche", "Ende 12. Woche", "Bei der Geburt"],
    2,
    "Nach der 8. Woche sind die Organanlagen angelegt; ab dann spricht man vom Fetus.",
    "mittel",
    ["Embryologie", "Organogenese"]
  ),
  q(
    "bio-pool-15-031",
    "bio-kap2",
    "Welche Vene führt sauerstoffreiches Blut zum Herzen?",
    ["Lungenarterie", "Aorta", "Obere Hohlvene", "Lungenvene", "Pfortader"],
    3,
    "Die Lungenvenen führen sauerstoffreiches Blut aus der Lunge zum linken Vorhof.",
    "leicht",
    ["Kreislauf", "Blutgefäße"]
  ),
  q(
    "bio-pool-15-036",
    "bio-kap4",
    "In welcher Phase der Mitose kondensieren die Chromosomen?",
    ["Metaphase", "Prophase", "Anaphase", "Telophase", "Interphase"],
    1,
    "In der Prophase kondensieren die Chromosomen und werden unter dem Mikroskop sichtbar.",
    "leicht",
    ["Mitose", "Zellzyklus"]
  ),
  q(
    "bio-pool-15-040",
    "bio-kap2",
    "Wo wird Aldosteron gebildet?",
    ["Nebennierenmark", "Nebennierenrinde", "Niere", "Hypophyse", "Schilddrüse"],
    1,
    "Aldosteron (Mineralokortikoid) wird in der Nebennierenrinde gebildet (Natrium-Kalium-Haushalt, Blutdruck).",
    "mittel",
    ["Hormone", "Nebenniere"]
  ),
  q(
    "bio-pool-15-043",
    "bio-kap1",
    "Welche Aussage über das raue ER trifft zu?",
    [
      "Es hat keine Ribosomen",
      "Es ist an der Synthese von Membran- und Sekretproteinen beteiligt",
      "Es kommt nur in Pflanzen vor",
      "Es enthält die DNA",
      "Es baut Proteine ab",
    ],
    1,
    "Das raue ER ist mit Ribosomen besetzt und synthetisiert Proteine für Export und Membranen.",
    "mittel",
    ["Zelle", "ER"]
  ),
  q(
    "bio-pool-15-049",
    "bio-kap2",
    "Welches Hormon erhöht den Blutzucker?",
    ["Insulin", "Glukagon", "Somatostatin", "Östrogen", "Calcitonin"],
    1,
    "Glukagon (Alpha-Zellen der Bauchspeicheldrüse) erhöht den Blutzucker (Glykogenabbau, Gluconeogenese).",
    "leicht",
    ["Hormone", "Blutzucker"]
  ),
  q(
    "bio-pool-15-051",
    "bio-kap5",
    "Was ist ein Konsument?",
    [
      "Produzent",
      "Organismus, der organische Substanz von anderen aufnimmt",
      "Zersetzer nur",
      "Pilz nur",
      "Pflanze",
    ],
    1,
    "Konsumenten ernähren sich von anderen Organismen (Herbivoren, Karnivoren, Omnivoren).",
    "leicht",
    ["Ökologie", "Konsument"]
  ),
  q(
    "bio-pool-15-056",
    "bio-kap5",
    "Was ist die ökologische Nische?",
    [
      "Der konkrete Lebensort",
      "Die Gesamtheit der abiotischen und biotischen Faktoren, die eine Art nutzt bzw. erfordert",
      "Eine Nahrungskette",
      "Ein Biotop",
      "Eine Population",
    ],
    1,
    "Die Nische beschreibt die „Rolle“ einer Art (Ressourcen, Lebensweise). Habitat = konkreter Ort.",
    "mittel",
    ["Ökologie", "Nische"]
  ),
  q(
    "bio-pool-15-058",
    "bio-kap2",
    "Wo münden die Ureteren ein?",
    [
      "In die Harnröhre",
      "In die Harnblase",
      "In die Niere",
      "In die Nebenniere",
      "Direkt aus der Niere in die Urethra",
    ],
    1,
    "Die Harnleiter (Ureteren) münden in die Harnblase. Die Harnröhre führt von der Blase nach außen.",
    "leicht",
    ["Niere", "Anatomie"]
  ),
];
