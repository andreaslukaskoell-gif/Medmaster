/**
 * Biology BMS pool — questions 101–170 (MedAT style).
 * Topics: Zellbiologie, Histologie/Organsysteme, Evolution/Oekologie, Genetik, Mikrobiologie/Immunologie.
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
    options: options.map((text, i) => ({ id: ids[i], text })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags,
  };
}

export const biologiePool2: Question[] = [
  // ── bio-kap1 Zellbiologie (14 Fragen) ──────────────────────────────
  q(
    "bio-pool-101",
    "bio-kap1",
    "Welche Aussage zum rauen endoplasmatischen Retikulum (rER) trifft zu?",
    [
      "Es ist der Hauptort der Lipidsynthese und des Phospholipid-Metabolismus in der Zelle.",
      "Die Ribosomen auf seiner Oberfläche translatieren vor allem sekretorische und membranständige Proteine.",
      "Es besitzt keine direkte Verbindung zur äußeren Membran der Kernhülle.",
      "Es ist ausschließlich in Nervenzellen als Nissl-Substanz vorhanden.",
      "Seine Membran enthält keine integralen Transmembranproteine für den Stofftransport.",
    ],
    1,
    "Das raue ER trägt Ribosomen, die Proteine für den sekretorischen Weg und für Membranen synthetisieren. Die Lipidsynthese findet überwiegend am glatten ER statt. Das rER ist kontinuierlich mit der äußeren Kernmembran verbunden.",
    "leicht",
    ["er", "ribosomen", "proteinsynthese"]
  ),
  q(
    "bio-pool-102",
    "bio-kap1",
    "Ein Pharmakologe untersucht eine Substanz, die die Protonenpumpe (Komplex V) der mitochondrialen Atmungskette hemmt. Welche unmittelbare Folge ist zu erwarten?",
    [
      "Der Protonengradient bleibt bestehen, aber die ATP-Synthese stoppt.",
      "Die Elektronentransportkette stoppt sofort vollständig und irreversibel.",
      "Der Citratzyklus wird direkt und unmittelbar durch das Oligomycin gehemmt.",
      "Die Glykolyse im Cytoplasma wird unmittelbar gestoppt.",
      "NADH wird vermehrt in der Matrix oxidiert.",
    ],
    0,
    "Komplex V (ATP-Synthase) nutzt den Protonengradienten zur ATP-Synthese. Wird sie gehemmt, bleibt der Gradient zunächst bestehen, aber ATP kann nicht mehr produziert werden. Sekundär staut sich der Gradient, was die Elektronentransportkette verlangsamt.",
    "schwer",
    ["mitochondrien", "atmungskette", "atp-synthase"]
  ),
  q(
    "bio-pool-103",
    "bio-kap1",
    "In welcher Phase des Zellzyklus wird die DNA repliziert?",
    ["G1-Phase", "S-Phase", "G2-Phase", "M-Phase", "G0-Phase"],
    1,
    "Die S-Phase (Synthese-Phase) ist der Abschnitt der Interphase, in dem die gesamte DNA verdoppelt wird. G1 dient dem Zellwachstum vor der Replikation, G2 der Vorbereitung auf die Mitose.",
    "leicht",
    ["zellzyklus", "replikation", "s-phase"]
  ),
  q(
    "bio-pool-104",
    "bio-kap1",
    "Welche Aussage zur Mitose ist FALSCH?",
    [
      "In der Metaphase ordnen sich die Chromosomen in der Äquatorialebene an.",
      "In der Anaphase werden die Schwesterchromatiden getrennt.",
      "In der Prophase kondensiert das Chromatin zu sichtbaren Chromosomen.",
      "In der Telophase beginnt die erneute DNA-Replikation.",
      "Die Zytokinese teilt das Cytoplasma in zwei Tochterzellen.",
    ],
    3,
    "Die DNA-Replikation findet in der S-Phase statt, nicht in der Telophase. In der Telophase dekondensieren die Chromosomen, die Kernhülle bildet sich neu, und die Zelle bereitet die Zytokinese vor.",
    "leicht",
    ["mitose", "zellteilung", "telophase"]
  ),
  q(
    "bio-pool-105",
    "bio-kap1",
    "Welche Funktion hat der Golgi-Apparat bei der posttranslationalen Modifikation von Proteinen?",
    [
      "Er entfernt sämtliche Signalpeptide von Proteinen.",
      "Er modifiziert Oligosaccharidketten und sortiert Proteine in Transportvesikel.",
      "Er synthetisiert Proteine de novo aus freien Aminosäuren.",
      "Er baut falsch gefaltete Proteine durch Autophagie ab.",
      "Er phosphoryliert ausschließlich Kernproteine.",
    ],
    1,
    "Der Golgi-Apparat ist die zentrale Sortier- und Modifikationsstation der Zelle. Er glykosyliert Proteine weiter, sulfatiert und phosphoryliert sie und verpackt sie in Transportvesikel für ihren Bestimmungsort.",
    "mittel",
    ["golgi", "proteinmodifikation", "glykosylierung"]
  ),
  q(
    "bio-pool-106",
    "bio-kap1",
    "Eine Zelle wird in eine hypotonische Lösung gegeben. Welcher Vorgang findet an der Zellmembran statt?",
    [
      "Wasser strömt per Osmose aus der Zelle heraus.",
      "Wasser strömt per Osmose in die Zelle hinein, die Zelle schwillt an.",
      "Gelöste Ionen strömen entlang ihres Konzentrationsgradienten in die Zelle.",
      "Die Membran wird für alle gelösten Stoffe vollständig permeabel.",
      "Der onkotische Druck in der Zelle sinkt auf null.",
    ],
    1,
    "In einer hypotonischen Lösung ist die Konzentration gelöster Teilchen außen geringer als innen. Wasser folgt dem osmotischen Gradienten und strömt in die Zelle, wodurch diese anschwillt. Bei tierischen Zellen kann dies zur Lyse führen.",
    "leicht",
    ["osmose", "hypotonisch", "zellmembran"]
  ),
  q(
    "bio-pool-107",
    "bio-kap1",
    "Welche Aussage zum Cytoskelett trifft NICHT zu?",
    [
      "Mikrotubuli bestehen aus Tubulin-Dimeren und bilden den Spindelapparat während der Mitose.",
      "Aktinfilamente sind am Aufbau von Mikrovilli im Dünndarmepithel beteiligt.",
      "Intermediärfilamente verleihen Zellen mechanische Stabilität.",
      "Mikrotubuli haben einen Durchmesser von etwa 7 nm, kleiner als Aktinfilamente.",
      "Motorproteine wie Dynein und Kinesin bewegen sich entlang von Mikrotubuli.",
    ],
    3,
    "Mikrotubuli haben einen Durchmesser von ca. 25 nm und sind damit die größten Cytoskelettelemente. Aktinfilamente (Mikrofilamente) messen ca. 7 nm. Die Aussage in Option D vertauscht die Größenverhältnisse.",
    "mittel",
    ["cytoskelett", "mikrotubuli", "aktinfilamente"]
  ),
  q(
    "bio-pool-108",
    "bio-kap1",
    "Welche der folgenden Aussagen beschreibt den Unterschied zwischen aktivem und passivem Transport korrekt?",
    [
      "Passiver Transport erfordert ATP, aktiver Transport nicht.",
      "Aktiver Transport erfolgt immer entlang des Konzentrationsgradienten.",
      "Aktiver Transport benötigt Energie, um Stoffe gegen den Konzentrationsgradienten zu befördern.",
      "Passiver Transport findet ausschließlich über Ionenkanäle statt.",
      "Aktiver und passiver Transport nutzen dieselben Membranproteine.",
    ],
    2,
    "Aktiver Transport verbraucht metabolische Energie, um Moleküle entgegen ihrem Konzentrationsgradienten zu transportieren. Passiver Transport hingegen erfolgt ohne Energieverbrauch entlang des Gradienten.",
    "leicht",
    ["transport", "aktiv", "passiv", "atp"]
  ),
  q(
    "bio-pool-109",
    "bio-kap1",
    "Ein Patient erhält ein Medikament, das die Polymerisation von Tubulin hemmt (z. B. Colchicin). Welcher zelluläre Prozess ist am stärksten beeinträchtigt?",
    [
      "Die oxidative Phosphorylierung in den Mitochondrien",
      "Die Proteinbiosynthese an freien Ribosomen",
      "Die Zellteilung, da der Spindelapparat nicht gebildet werden kann",
      "Die Transkription im Zellkern",
      "Die Lipidsynthese am glatten ER",
    ],
    2,
    "Colchicin hemmt die Polymerisation von Tubulin zu Mikrotubuli. Da der mitotische Spindelapparat aus Mikrotubuli besteht, kann die Chromosomentrennung während der Mitose nicht stattfinden. Die Zellteilung wird blockiert.",
    "mittel",
    ["colchicin", "mikrotubuli", "mitose", "spindelapparat"]
  ),
  q(
    "bio-pool-110",
    "bio-kap1",
    "Welches Organell ist für den Abbau zelleigener defekter Organellen durch Autophagie hauptverantwortlich?",
    [
      "Raues endoplasmatisches Retikulum",
      "Peroxisom",
      "Lysosom",
      "Golgi-Apparat",
      "Glattes endoplasmatisches Retikulum",
    ],
    2,
    "Lysosomen enthalten saure Hydrolasen (pH ~4,5–5), die Makromoleküle, defekte Organellen und aufgenommene Partikel abbauen. Bei der Autophagie werden zelleigene Strukturen in Autophagosomen eingeschlossen und mit Lysosomen fusioniert.",
    "leicht",
    ["lysosom", "autophagie", "organellen"]
  ),
  q(
    "bio-pool-111",
    "bio-kap1",
    "In der Glykolyse wird Glucose zu Pyruvat abgebaut. Wie lautet die Nettobilanz pro Molekül Glucose?",
    [
      "2 Pyruvat, 2 ATP, 2 NADH",
      "2 Pyruvat, 4 ATP, 2 FADH₂",
      "1 Pyruvat, 2 ATP, 1 NADH",
      "2 Pyruvat, 38 ATP, 2 NADH",
      "2 Pyruvat, 2 GTP, 4 NADH",
    ],
    0,
    "Die Glykolyse liefert netto 2 Pyruvat, 2 ATP und 2 NADH pro Molekül Glucose. Die 38 ATP beziehen sich auf die gesamte aerobe Oxidation inklusive Citratzyklus und Atmungskette.",
    "mittel",
    ["glykolyse", "atp", "pyruvat"]
  ),
  q(
    "bio-pool-112",
    "bio-kap1",
    "Welche Aussage zur Apoptose (programmierter Zelltod) trifft zu?",
    [
      "Sie löst stets eine starke Entzündungsreaktion im umliegenden Gewebe aus.",
      "Caspasen spielen als Proteasen eine zentrale Rolle bei der Ausführung des apoptotischen Programms.",
      "Die Zellmembran reißt sofort auf, sodass der Zellinhalt austritt.",
      "Apoptose betrifft ausschließlich Tumorzellen.",
      "Sie wird nur durch extrazelluläre Signale über den extrinsischen Weg ausgelöst.",
    ],
    1,
    "Caspasen sind Cystein-Proteasen, die bei der Apoptose aktiviert werden und zelluläre Substrate spalten. Im Gegensatz zur Nekrose bleibt die Membranintegrität zunächst erhalten (keine Entzündung), und die Zelle wird geordnet in apoptotische Körperchen zerlegt.",
    "mittel",
    ["apoptose", "caspasen", "zelltod"]
  ),
  q(
    "bio-pool-113",
    "bio-kap1",
    "In welchem Kompartiment der Zelle findet der Citratzyklus statt?",
    [
      "Im Cytoplasma",
      "Im Intermembranraum der Mitochondrien",
      "In der mitochondrialen Matrix",
      "Am rauen endoplasmatischen Retikulum",
      "Im Zellkern",
    ],
    2,
    "Der Citratzyklus läuft in der mitochondrialen Matrix ab. Hier wird Acetyl-CoA schrittweise oxidiert, wobei CO₂, NADH, FADH₂ und GTP entstehen. Die Glykolyse hingegen findet im Cytoplasma statt.",
    "leicht",
    ["citratzyklus", "mitochondrien", "matrix"]
  ),
  q(
    "bio-pool-114",
    "bio-kap1",
    "Welche Eigenschaft der Zellmembran wird durch das Flüssig-Mosaik-Modell am besten beschrieben?",
    [
      "Die Membran ist eine starre, kristalline Struktur ohne Proteinbewegung.",
      "Phospholipide und Proteine können sich lateral in der Membran bewegen, was eine dynamische, fluide Struktur ergibt.",
      "Alle Membranproteine durchspannen die gesamte Lipiddoppelschicht.",
      "Cholesterin kommt ausschließlich in der äußeren Schicht der Membran vor.",
      "Die Membran besteht aus einer einzelnen Phospholipidschicht mit eingelagerten Kohlenhydraten.",
    ],
    1,
    "Das Flüssig-Mosaik-Modell beschreibt die Zellmembran als fluide Lipiddoppelschicht, in der Phospholipide und Proteine lateral diffundieren können. Cholesterin moduliert die Fluidität und kommt in beiden Schichten vor.",
    "leicht",
    ["zellmembran", "flüssig-mosaik-modell", "phospholipide"]
  ),

  // ── bio-kap2 Histologie / Organsysteme (14 Fragen) ─────────────────
  q(
    "bio-pool-115",
    "bio-kap2",
    "Welcher Abschnitt des Nephrons ist für die Rückresorption von ca. 65 % des filtrierten Natriums und Wassers verantwortlich?",
    ["Distaler Tubulus", "Sammelrohr", "Henle-Schleife", "Proximaler Tubulus", "Glomerulus"],
    3,
    "Der proximale Tubulus resorbiert ca. 65 % des filtrierten Na⁺ und Wassers sowie den Großteil der Glucose und Aminosäuren. Der Glomerulus ist der Ort der Filtration, nicht der Resorption.",
    "mittel",
    ["nephron", "niere", "proximaler tubulus"]
  ),
  q(
    "bio-pool-116",
    "bio-kap2",
    "Welche Aussage zum Blutkreislauf des Menschen trifft zu?",
    [
      "Die Pulmonalarterie führt sauerstoffreiches Blut von der Lunge zum linken Vorhof.",
      "Die Aorta entspringt dem rechten Ventrikel.",
      "Der Lungenkreislauf beginnt im rechten Ventrikel und endet im linken Vorhof.",
      "Die Vena cava inferior mündet in den linken Vorhof.",
      "Die Pulmonalvenen führen sauerstoffarmes Blut.",
    ],
    2,
    "Der kleine Kreislauf (Lungenkreislauf) beginnt im rechten Ventrikel, führt über die Pulmonalarterie (O₂-arm!) zur Lunge und kehrt über die Pulmonalvenen (O₂-reich!) zum linken Vorhof zurück. Die Aorta entspringt dem linken Ventrikel.",
    "leicht",
    ["kreislauf", "lungenkreislauf", "herz"]
  ),
  q(
    "bio-pool-117",
    "bio-kap2",
    "Welche Zellen des Magens produzieren Salzsäure (HCl)?",
    [
      "Hauptzellen",
      "Belegzellen (Parietalzellen)",
      "Nebenzellen",
      "G-Zellen",
      "Enterochromaffine Zellen",
    ],
    1,
    "Belegzellen (Parietalzellen) der Magenschleimhaut produzieren Salzsäure über die H⁺/K⁺-ATPase. Hauptzellen sezernieren Pepsinogen, Nebenzellen schützendes Mukus und G-Zellen das Hormon Gastrin.",
    "leicht",
    ["magen", "belegzellen", "salzsäure"]
  ),
  q(
    "bio-pool-118",
    "bio-kap2",
    "Welche Aussage zum Erregungsleitungssystem des Herzens ist FALSCH?",
    [
      "Der Sinusknoten ist der primäre Schrittmacher mit einer Frequenz von ca. 60–80/min.",
      "Der AV-Knoten verzögert die Erregungsweiterleitung, um eine koordinierte Ventrikelfüllung zu ermöglichen.",
      "Das His-Bündel leitet die Erregung vom AV-Knoten zu den Tawara-Schenkeln.",
      "Die Purkinje-Fasern erregen die Ventrikel von der Herzspitze ausgehend.",
      "Der AV-Knoten hat eine höhere Eigenfrequenz als der Sinusknoten.",
    ],
    4,
    "Der Sinusknoten besitzt die höchste Eigenfrequenz (~60–80/min) und ist daher der primäre Schrittmacher. Der AV-Knoten hat eine niedrigere Eigenfrequenz (~40–50/min) und übernimmt nur bei Ausfall des Sinusknotens die Schrittmacherfunktion.",
    "mittel",
    ["herz", "erregungsleitung", "sinusknoten"]
  ),
  q(
    "bio-pool-119",
    "bio-kap2",
    "Ein Patient hat eine Schädigung des N. recurrens. Welche Funktion ist am wahrscheinlichsten beeinträchtigt?",
    [
      "Schluckreflex im Ösophagus",
      "Stimmbandbewegung im Kehlkopf",
      "Zwerchfellkontraktion bei der Atmung",
      "Pupillenverengung bei Lichteinfall",
      "Speichelsekretion der Parotis",
    ],
    1,
    "Der N. laryngeus recurrens innerviert die meisten Kehlkopfmuskeln. Eine Schädigung führt zu Heiserkeit oder Stimmbandlähmung. Das Zwerchfell wird vom N. phrenicus innerviert.",
    "schwer",
    ["nervus recurrens", "kehlkopf", "vagus"]
  ),
  q(
    "bio-pool-120",
    "bio-kap2",
    "Welches Hormon wird vom Hypophysenhinterlappen (Neurohypophyse) freigesetzt und steigert die Wasserrückresorption in den Sammelrohren der Niere?",
    [
      "Aldosteron",
      "Atriales natriuretisches Peptid (ANP)",
      "Antidiuretisches Hormon",
      "Renin",
      "Erythropoetin",
    ],
    2,
    "ADH (Vasopressin) wird im Hypothalamus synthetisiert und über die Neurohypophyse freigesetzt. Es fördert den Einbau von Aquaporin-2 in die Sammelrohre und steigert so die Wasserrückresorption. Aldosteron stammt aus der Nebennierenrinde.",
    "mittel",
    ["adh", "niere", "neurohypophyse"]
  ),
  q(
    "bio-pool-121",
    "bio-kap2",
    "Welche Aussage über Erythrozyten trifft NICHT zu?",
    [
      "Sie haben eine Lebensdauer von ca. 120 Tagen.",
      "Sie werden im roten Knochenmark gebildet.",
      "Ihr Abbau erfolgt hauptsächlich in Milz und Leber.",
      "Sie enthalten Mitochondrien für die aerobe ATP-Gewinnung.",
      "Sie transportieren Sauerstoff über Hämoglobin.",
    ],
    3,
    "Reife Erythrozyten besitzen weder Mitochondrien noch einen Zellkern. Ihre ATP-Gewinnung erfolgt ausschließlich anaerob über die Glykolyse. Dies ist eine häufig geprüfte Tatsache im MedAT.",
    "leicht",
    ["erythrozyten", "mitochondrien", "blut"]
  ),
  q(
    "bio-pool-122",
    "bio-kap2",
    "Welches Epithel kleidet die Harnblase aus?",
    [
      "Einschichtiges Plattenepithel",
      "Mehrreihiges Flimmerepithel",
      "Übergangsepithel (Urothel)",
      "Mehrschichtiges verhorntes Plattenepithel",
      "Einschichtiges Zylinderepithel",
    ],
    2,
    "Die Harnblase wird von Übergangsepithel (Urothel) ausgekleidet, das sich bei Dehnung flacher stellt und bei Entleerung dicker wird. Das mehrreihige Flimmerepithel findet sich in den Atemwegen.",
    "leicht",
    ["epithel", "harnblase", "urothel"]
  ),
  q(
    "bio-pool-123",
    "bio-kap2",
    "Welche Verdauungsenzyme werden von der exokrinen Bauchspeicheldrüse (Pankreas) sezerniert?",
    [
      "Pepsin und Salzsäure",
      "Trypsin, Lipase und Amylase",
      "Laktase und Saccharase",
      "Gallensalze und Bilirubin",
      "Lysozym und Defensine",
    ],
    1,
    "Das exokrine Pankreas sezerniert Trypsinogen, Lipase, Amylase und weitere Enzyme (Chymotrypsin, Elastase, Carboxypeptidasen) in das Duodenum. Pepsin stammt aus dem Magen, Gallensalze aus der Leber.",
    "leicht",
    ["pankreas", "verdauung", "enzyme"]
  ),
  q(
    "bio-pool-124",
    "bio-kap2",
    "Bei einer Leberbiopsie zeigt sich eine ausgeprägte Fibrose. Welcher Zelltyp ist hauptsächlich für die übermäßige Kollagenproduktion in der Leber verantwortlich?",
    [
      "Hepatozyten",
      "Kupffer-Zellen",
      "Hepatische Sternzellen (Ito-Zellen)",
      "Sinusendothelzellen",
      "Gallengangsepithelzellen (Cholangiozyten)",
    ],
    2,
    "Hepatische Sternzellen (Ito-Zellen) speichern im Ruhezustand Vitamin A. Bei Leberschädigung werden sie aktiviert und differenzieren zu Myofibroblasten, die exzessiv Kollagen produzieren und so zur Fibrose beitragen.",
    "schwer",
    ["leber", "fibrose", "ito-zellen"]
  ),
  q(
    "bio-pool-125",
    "bio-kap2",
    "Welcher Abschnitt des Gastrointestinaltrakts besitzt Zotten (Villi) zur Oberflächenvergrößerung für die Nährstoffresorption?",
    [
      "Ösophagus (Speiseröhre)",
      "Magen (Gaster)",
      "Duodenum und Jejunum",
      "Colon (Dickdarm)",
      "Rektum (Mastdarm)",
    ],
    2,
    "Dünndarmzotten finden sich vor allem im Duodenum und Jejunum, wo die Hauptresorption von Nährstoffen stattfindet. Das Ileum hat kürzere Zotten. Der Dickdarm besitzt keine Zotten, sondern Krypten.",
    "mittel",
    ["dünndarm", "villi", "resorption"]
  ),
  q(
    "bio-pool-126",
    "bio-kap2",
    "Welche Aussage zur Skelettmuskulatur trifft zu?",
    [
      "Die funktionelle Einheit ist das Sarkomer, begrenzt durch Z-Scheiben.",
      "Aktin bildet die dicken Filamente, Myosin die dünnen.",
      "Die Kontraktion erfordert kein Calcium.",
      "Die Skelettmuskulatur wird ausschließlich parasympathisch innerviert.",
      "T-Tubuli spielen keine Rolle bei der elektromechanischen Kopplung.",
    ],
    0,
    "Das Sarkomer ist die kleinste kontraktile Einheit der quergestreiften Muskulatur, begrenzt durch zwei Z-Scheiben. Myosin bildet die dicken, Aktin die dünnen Filamente. Calcium ist essenziell für die Kontraktion.",
    "mittel",
    ["skelettmuskulatur", "sarkomer", "kontraktion"]
  ),
  q(
    "bio-pool-127",
    "bio-kap2",
    "Welche Funktion hat Surfactant in den Alveolen der Lunge?",
    [
      "Es erhöht die Oberflächenspannung und verhindert eine Überblähung.",
      "Es senkt die Oberflächenspannung und verhindert den Kollaps der Alveolen.",
      "Es transportiert Sauerstoff direkt ins Blut.",
      "Es neutralisiert eingeatmete Krankheitserreger enzymatisch.",
      "Es produziert Immunglobulin A für die lokale Abwehr.",
    ],
    1,
    "Surfactant wird von Typ-II-Pneumozyten produziert und besteht hauptsächlich aus Dipalmitoylphosphatidylcholin. Es senkt die Oberflächenspannung in den Alveolen und verhindert deren Kollaps (Atelektase), besonders bei der Exspiration.",
    "mittel",
    ["lunge", "surfactant", "alveolen"]
  ),
  q(
    "bio-pool-128",
    "bio-kap2",
    "Ein Neugeborenes zeigt kurz nach der Geburt eine schwere Atemnot. Die Lungenreife ist unvollständig. Welche Substanz fehlt am wahrscheinlichsten?",
    [
      "Mukus der Becherzellen",
      "Elastin in den Alveolarwänden",
      "Surfactant der Typ-II-Pneumozyten",
      "Kollagen Typ I der Pleura",
      "Immunglobulin G aus dem mütterlichen Blut",
    ],
    2,
    "Das Atemnotsyndrom des Neugeborenen (IRDS) wird durch Surfactant-Mangel verursacht, da Typ-II-Pneumozyten erst ab ca. der 35. Schwangerschaftswoche ausreichend Surfactant produzieren. Ohne Surfactant kollabieren die Alveolen.",
    "schwer",
    ["irds", "surfactant", "neugeborenes"]
  ),

  // ── bio-kap3 Evolution / Ökologie (14 Fragen) ──────────────────────
  q(
    "bio-pool-129",
    "bio-kap3",
    "Welche Aussage beschreibt die natürliche Selektion nach Darwin korrekt?",
    [
      "Individuen passen sich aktiv an ihre Umwelt an, indem sie ihre Gene verändern.",
      "Individuen mit vorteilhaften Merkmalen haben eine höhere Überlebens- und Reproduktionswahrscheinlichkeit.",
      "Mutationen treten gezielt auf, um die Fitness der Art zu erhöhen.",
      "Natürliche Selektion wirkt auf die Art, nicht auf das Individuum.",
      "Nur sexuelle Selektion führt zu evolutionärem Wandel.",
    ],
    1,
    "Nach Darwin überleben und reproduzieren sich diejenigen Individuen häufiger, deren erbliche Merkmale in der jeweiligen Umwelt vorteilhaft sind. Mutationen treten zufällig auf, nicht gezielt. Selektion wirkt primär auf Individuen.",
    "leicht",
    ["darwin", "selektion", "evolution"]
  ),
  q(
    "bio-pool-130",
    "bio-kap3",
    "Welche Aussage zu homologen Organen ist richtig?",
    [
      "Sie haben immer dieselbe Funktion, aber einen unterschiedlichen Grundbauplan.",
      "Sie haben denselben Grundbauplan, können aber unterschiedliche Funktionen erfüllen.",
      "Sie treten nur bei Wirbeltieren auf.",
      "Sie sind ein Beweis für Konvergenz, nicht für gemeinsame Abstammung.",
      "Homologe Organe kommen ausschließlich bei eng verwandten Arten vor.",
    ],
    1,
    "Homologe Organe teilen denselben embryonalen Grundbauplan, können aber unterschiedliche Funktionen erfüllen (Arm, Flosse, Flügel). Sie belegen gemeinsame Abstammung (Divergenz), nicht Konvergenz.",
    "leicht",
    ["homologie", "evolution", "vergleichende anatomie"]
  ),
  q(
    "bio-pool-131",
    "bio-kap3",
    "In einer Population mit 1000 Individuen besitzen 160 den homozygoten rezessiven Phänotyp (aa). Unter der Annahme des Hardy-Weinberg-Gleichgewichts: Wie hoch ist die Frequenz des dominanten Allels (p)?",
    ["0,16", "0,40", "0,60", "0,84", "0,36"],
    2,
    "q² = 160/1000 = 0,16 → q = 0,4 → p = 1 – q = 0,6. Die Frequenz des dominanten Allels beträgt 0,6 (60 %). Dies ist eine klassische Hardy-Weinberg-Berechnung.",
    "mittel",
    ["hardy-weinberg", "allelfrequenz", "populationsgenetik"]
  ),
  q(
    "bio-pool-132",
    "bio-kap3",
    "Welche Aussage zur Symbiose ist FALSCH?",
    [
      "Mutualismus bezeichnet eine Wechselbeziehung, von der beide Partner profitieren.",
      "Kommensalismus bedeutet, dass ein Partner profitiert, der andere weder Vor- noch Nachteil hat.",
      "Parasitismus ist eine Beziehung, bei der ein Partner auf Kosten des anderen lebt.",
      "Mykorrhiza ist ein Beispiel für Parasitismus zwischen Pilz und Pflanze.",
      "Flechten sind ein Beispiel für Mutualismus zwischen Pilz und Alge bzw. Cyanobakterium.",
    ],
    3,
    "Mykorrhiza ist ein klassisches Beispiel für Mutualismus: Der Pilz liefert Wasser und Mineralstoffe, die Pflanze organische Verbindungen. Es handelt sich nicht um Parasitismus, da beide Partner profitieren.",
    "leicht",
    ["symbiose", "mykorrhiza", "mutualismus"]
  ),
  q(
    "bio-pool-133",
    "bio-kap3",
    "Welcher Evolutionsmechanismus führt besonders in kleinen Populationen zu zufälligen Änderungen der Allelfrequenzen?",
    [
      "Natürliche Selektion",
      "Sexuelle Selektion",
      "Genetische Drift",
      "Gerichtete Mutation",
      "Genfluss zwischen Populationen",
    ],
    2,
    "Genetische Drift beschreibt zufällige Schwankungen der Allelfrequenzen, die in kleinen Populationen besonders stark wirken. Anders als Selektion ist sie richtungslos. Spezialfälle sind der Flaschenhalseffekt und der Gründereffekt.",
    "mittel",
    ["genetische drift", "populationsgenetik", "evolution"]
  ),
  q(
    "bio-pool-134",
    "bio-kap3",
    "Welche Aussage zur biologischen Artdefinition (nach Mayr) trifft zu?",
    [
      "Arten werden ausschließlich über morphologische Ähnlichkeit definiert.",
      "Alle Individuen einer Art sind genetisch identisch.",
      "Gruppen von Populationen, die sich natürlich fortpflanzen und fertile Nachkommen hervorbringen.",
      "Arten können nur über DNA-Sequenzierung voneinander unterschieden werden.",
      "Asexuell reproduzierende Organismen können keiner Art zugeordnet werden.",
    ],
    2,
    "Das biologische Artkonzept (Ernst Mayr) definiert Arten über reproduktive Isolation: Mitglieder einer Art können sich untereinander kreuzen und fruchtbare Nachkommen erzeugen. Für asexuelle Organismen werden alternative Artkonzepte verwendet.",
    "leicht",
    ["artbegriff", "mayr", "reproduktive isolation"]
  ),
  q(
    "bio-pool-135",
    "bio-kap3",
    "In einem Ökosystem werden Produzenten, Konsumenten und Destruenten unterschieden. Welche Aussage ist korrekt?",
    [
      "Konsumenten erster Ordnung ernähren sich von anderen Konsumenten.",
      "Destruenten wandeln anorganische in organische Substanzen um.",
      "Bei jedem Trophiestufen-Übergang geht ca. 90 % der Energie als Wärme verloren.",
      "Produzenten sind ausschließlich photosynthetisch aktive Pflanzen.",
      "Tertiärkonsumenten stehen auf der niedrigsten Trophiestufe.",
    ],
    2,
    "Pro Trophiestufe werden ca. 90 % der aufgenommenen Energie für Stoffwechsel und Wärme verbraucht, nur ca. 10 % stehen der nächsten Stufe zur Verfügung (Lindeman-Regel). Produzenten können auch chemoautotroph sein.",
    "mittel",
    ["ökologie", "trophiestufen", "energiefluss"]
  ),
  q(
    "bio-pool-136",
    "bio-kap3",
    "Welche Form der Speziation tritt auf, wenn eine Population durch eine geografische Barriere getrennt wird?",
    [
      "Sympatrische Speziation",
      "Allopatrische Speziation",
      "Parapatrische Speziation",
      "Peripatrische Speziation",
      "Adaptive Radiation",
    ],
    1,
    "Allopatrische Speziation entsteht durch geografische Trennung (Fluss, Gebirge, Meerarm) einer Population. Die isolierten Teilpopulationen entwickeln sich unabhängig und können nach genügend Divergenz keine fruchtbaren Nachkommen mehr zeugen.",
    "mittel",
    ["speziation", "allopatrisch", "geographische isolation"]
  ),
  q(
    "bio-pool-137",
    "bio-kap3",
    "Ein Forscher beobachtet, dass Schmetterlinge einer Art mit ähnlicher Flügelfärbung wie eine giftige Art von Fressfeinden gemieden werden. Welches Phänomen liegt vor?",
    [
      "Kryptische Färbung (Tarnung)",
      "Müller'sche Mimikry",
      "Bates'sche Mimikry",
      "Aposematismus der ungiftigen Art",
      "Koevolution ohne Selektionsvorteil",
    ],
    2,
    "Bates'sche Mimikry bezeichnet die Nachahmung einer giftigen oder gefährlichen Art durch eine ungiftige Art. Fressfeinde meiden beide aufgrund der Ähnlichkeit. Bei Müller'scher Mimikry sind beide Arten tatsächlich giftig.",
    "mittel",
    ["mimikry", "bates", "evolution"]
  ),
  q(
    "bio-pool-138",
    "bio-kap3",
    "Welche Aussage zu rudimentären Organen trifft zu?",
    [
      "Sie haben bei der betreffenden Art noch die volle ursprüngliche Funktion.",
      "Sie sind Organe, die keine homologe Entsprechung bei Vorfahren haben.",
      "Sie sind funktionslos oder funktionsreduziert und belegen die Abstammung von Vorfahren, bei denen sie funktionstüchtig waren.",
      "Sie kommen ausschließlich beim Menschen vor.",
      "Sie entstehen durch Konvergenz, nicht durch gemeinsame Abstammung.",
    ],
    2,
    "Rudimentäre Organe sind Rückbildungen ehemals funktionsfähiger Strukturen. Sie sind ein wichtiger Beleg für die Evolution und gemeinsame Abstammung.",
    "leicht",
    ["rudimentäre organe", "evolution", "homologie"]
  ),
  q(
    "bio-pool-139",
    "bio-kap3",
    "Eine Population von Buntbarschen in einem See differenziert sich durch unterschiedliche Nahrungspräferenzen in mehrere spezialisierte Formen. Welcher Evolutionsprozess liegt vor?",
    [
      "Allopatrische Speziation",
      "Adaptive Radiation",
      "Konvergente Evolution",
      "Stabilisierende Selektion",
      "Koevolution",
    ],
    1,
    "Adaptive Radiation bezeichnet die Aufspaltung einer Stammform in viele spezialisierte Arten, die verschiedene ökologische Nischen besetzen. Klassische Beispiele sind Darwinfinken und ostafrikanische Buntbarsche.",
    "mittel",
    ["adaptive radiation", "speziation", "buntbarsche"]
  ),
  q(
    "bio-pool-140",
    "bio-kap3",
    "Welche Bedingung gehört NICHT zu den Voraussetzungen des Hardy-Weinberg-Gleichgewichts?",
    [
      "Keine Mutation",
      "Keine Selektion",
      "Keine Migration",
      "Kleine Populationsgröße",
      "Zufällige Paarung (Panmixie)",
    ],
    3,
    "Das Hardy-Weinberg-Gleichgewicht setzt eine unendlich große Population voraus (keine genetische Drift). Kleine Populationen verletzen diese Bedingung. Weitere Voraussetzungen: keine Mutation, keine Selektion, kein Genfluss und Panmixie.",
    "mittel",
    ["hardy-weinberg", "populationsgenetik", "gleichgewicht"]
  ),
  q(
    "bio-pool-141",
    "bio-kap3",
    "Ein Ökologe stellt fest, dass zwei Vogelarten im selben Wald leben, aber unterschiedliche Stockwerke zur Nahrungssuche nutzen. Welches ökologische Prinzip erklärt diese Aufteilung?",
    [
      "Kompetitive Exklusion (Gause-Prinzip)",
      "Ökologische Nischendifferenzierung",
      "Schlüsselarten-Hypothese",
      "Trophische Kaskade",
      "Allelopathie",
    ],
    1,
    "Koexistierende Arten mit ähnlichen Ansprüchen weichen auf verschiedene ökologische Nischen aus (Nischendifferenzierung/character displacement). Das Gause-Prinzip besagt, dass zwei Arten mit identischer Nische nicht dauerhaft koexistieren können.",
    "mittel",
    ["nische", "koexistenz", "ökologie"]
  ),
  q(
    "bio-pool-142",
    "bio-kap3",
    "Welche Aussage zum Kohlenstoffkreislauf trifft NICHT zu?",
    [
      "Photosynthese fixiert CO₂ aus der Atmosphäre in organische Moleküle.",
      "Zellatmung setzt CO₂ frei, das wieder in die Atmosphäre gelangt.",
      "Fossile Brennstoffe enthalten Kohlenstoff, der über Millionen Jahre gebunden wurde.",
      "Destruenten spielen keine Rolle im Kohlenstoffkreislauf.",
      "Ozeane sind eine wichtige Kohlenstoffsenke.",
    ],
    3,
    "Destruenten (Bakterien, Pilze) spielen eine entscheidende Rolle, indem sie organisches Material abbauen und CO₂ freisetzen. Ohne sie würde sich totes organisches Material unzersetzt anhäufen und der Kohlenstoffkreislauf wäre unterbrochen.",
    "leicht",
    ["kohlenstoffkreislauf", "destruenten", "ökologie"]
  ),

  // ── bio-kap4 Genetik (14 Fragen) ───────────────────────────────────
  q(
    "bio-pool-143",
    "bio-kap4",
    "Welche Aussage zur Meiose trifft zu?",
    [
      "Die Meiose erzeugt vier genetisch identische Tochterzellen.",
      "In der Meiose I werden die homologen Chromosomen getrennt (Reduktionsteilung).",
      "Crossing-over findet in der Meiose II statt.",
      "Am Ende der Meiose hat jede Zelle den diploiden Chromosomensatz.",
      "Die Meiose findet ausschließlich in somatischen Zellen statt.",
    ],
    1,
    "In der Meiose I (Reduktionsteilung) werden homologe Chromosomenpaare getrennt, sodass der Chromosomensatz halbiert wird. Crossing-over findet in der Prophase I statt. Die resultierenden vier Zellen sind haploid und genetisch verschieden.",
    "leicht",
    ["meiose", "reduktionsteilung", "crossing-over"]
  ),
  q(
    "bio-pool-144",
    "bio-kap4",
    "Beim Menschen ist die Blutgruppe AB im AB0-System ein Beispiel für welchen Erbgang?",
    [
      "Autosomal-rezessiv mit Manifestation nur bei Homozygotie",
      "X-chromosomal-rezessiv mit häufigerer Manifestation bei Männern",
      "Kodominanz",
      "Unvollständige Dominanz",
      "Epistasie",
    ],
    2,
    "Bei der Blutgruppe AB werden sowohl das A- als auch das B-Antigen auf der Erythrozytenoberfläche exprimiert. Da beide Allele gleich stark ausgeprägt werden, liegt Kodominanz vor. Weder A noch B dominiert über das andere.",
    "leicht",
    ["blutgruppen", "kodominanz", "ab0-system"]
  ),
  q(
    "bio-pool-145",
    "bio-kap4",
    "Bei der Proteinbiosynthese wird mRNA am Ribosom in eine Aminosäuresequenz übersetzt. Welche RNA bringt die Aminosäuren zum Ribosom?",
    ["mRNA (messenger-RNA)", "rRNA", "tRNA (transfer-RNA)", "snRNA", "miRNA (micro-RNA)"],
    2,
    "Die tRNA besitzt ein Anticodon, das mit dem mRNA-Codon paart, und trägt die entsprechende Aminosäure an ihrem 3'-Ende (CCA-Sequenz). Aminoacyl-tRNA-Synthetasen beladen die tRNA spezifisch mit der richtigen Aminosäure.",
    "leicht",
    ["translation", "trna", "proteinbiosynthese"]
  ),
  q(
    "bio-pool-146",
    "bio-kap4",
    "Ein Ehepaar, bei dem beide Partner heterozygot für Mukoviszidose (Aa) sind, erwartet ein Kind. Wie hoch ist die Wahrscheinlichkeit, dass das Kind an Mukoviszidose erkrankt?",
    ["0 %", "25 %", "50 %", "75 %", "100 %"],
    1,
    "Mukoviszidose ist autosomal-rezessiv: Aa × Aa → 1 AA : 2 Aa : 1 aa. Nur aa-Individuen erkranken, also beträgt die Wahrscheinlichkeit 25 %. Die Hälfte der Kinder wäre heterozygote Träger (Aa).",
    "leicht",
    ["mukoviszidose", "autosomal-rezessiv", "mendel"]
  ),
  q(
    "bio-pool-147",
    "bio-kap4",
    "Welche Aussage zur DNA-Replikation ist FALSCH?",
    [
      "Die DNA-Replikation verläuft semikonservativ.",
      "Die DNA-Polymerase synthetisiert den neuen Strang in 5'→3'-Richtung.",
      "Am Leitstrang (leading strand) erfolgt die Synthese kontinuierlich.",
      "Am Folgestrang (lagging strand) entstehen Okazaki-Fragmente.",
      "Die DNA-Polymerase kann die Synthese ohne Primer starten.",
    ],
    4,
    "DNA-Polymerasen benötigen einen RNA-Primer als Startpunkt, da sie nur an ein bestehendes 3'-OH-Ende Nukleotide anhängen können. Die Primase synthetisiert diesen kurzen RNA-Primer. Alle anderen Aussagen sind korrekt.",
    "mittel",
    ["replikation", "dna-polymerase", "primer"]
  ),
  q(
    "bio-pool-148",
    "bio-kap4",
    "Eine Punktmutation führt zum Austausch einer Aminosäure in der Polypeptidkette. Wie wird dieser Mutationstyp bezeichnet?",
    [
      "Nonsense-Mutation",
      "Frameshift-Mutation",
      "Missense-Mutation",
      "Stille Mutation",
      "Deletion",
    ],
    2,
    "Eine Missense-Mutation verändert ein Codon so, dass eine andere Aminosäure eingebaut wird. Eine Nonsense-Mutation erzeugt ein Stoppcodon, eine stille Mutation ändert die Aminosäure nicht.",
    "mittel",
    ["mutation", "missense", "punktmutation"]
  ),
  q(
    "bio-pool-149",
    "bio-kap4",
    "Ein Junge hat eine Rot-Grün-Farbenblindheit. Die Mutter ist phänotypisch normalsichtig. Welche Aussage zum Genotyp der Mutter ist am wahrscheinlichsten?",
    [
      "Die Mutter ist homozygot für das Normalallel (X^A X^A).",
      "Die Mutter ist heterozygote Konduktorin (X^A X^a).",
      "Die Mutter ist selbst farbenblind (X^a X^a).",
      "Das Merkmal wurde vom Vater vererbt.",
      "Die Mutation ist beim Sohn neu entstanden (de novo).",
    ],
    1,
    "Rot-Grün-Farbenblindheit ist X-chromosomal-rezessiv. Ein betroffener Sohn (X^a Y) muss das Allel von seiner Mutter erhalten haben. Da die Mutter phänotypisch normal sieht, ist sie heterozygote Konduktorin (X^A X^a).",
    "mittel",
    ["x-chromosomal", "farbenblindheit", "konduktorin"]
  ),
  q(
    "bio-pool-150",
    "bio-kap4",
    "Welcher Vorgang findet während der Transkription statt?",
    [
      "DNA wird in DNA kopiert.",
      "DNA wird in mRNA umgeschrieben.",
      "mRNA wird in eine Aminosäuresequenz übersetzt.",
      "tRNA wird an Aminosäuren gekoppelt.",
      "Histone werden acetyliert.",
    ],
    1,
    "Bei der Transkription wird ein DNA-Abschnitt durch die RNA-Polymerase in eine komplementäre mRNA-Sequenz umgeschrieben. Die Translation (mRNA → Protein) ist ein nachfolgender, separater Schritt der Genexpression.",
    "leicht",
    ["transkription", "mrna", "rna-polymerase"]
  ),
  q(
    "bio-pool-151",
    "bio-kap4",
    "Welche Aussage zum Karyotyp des Menschen ist korrekt?",
    [
      "Der Mensch hat 44 Autosomen und 2 Gonosomen.",
      "Frauen haben den Karyotyp 46,XY.",
      "Männer haben 48 Chromosomen.",
      "Autosomen bestimmen das Geschlecht.",
      "Jede menschliche Zelle enthält stets 23 Chromosomen.",
    ],
    0,
    "Der diploide menschliche Karyotyp umfasst 46 Chromosomen: 22 Paare Autosomen und 1 Paar Gonosomen. Haploide Keimzellen enthalten 23 Chromosomen.",
    "leicht",
    ["karyotyp", "chromosomen", "gonosomen"]
  ),
  q(
    "bio-pool-152",
    "bio-kap4",
    "Bei der PCR (Polymerase-Kettenreaktion) durchläuft die Reaktion drei wiederkehrende Temperaturschritte. Welche Reihenfolge ist korrekt?",
    [
      "Annealing → Denaturierung → Elongation",
      "Elongation → Denaturierung → Annealing",
      "Denaturierung → Annealing → Elongation",
      "Denaturierung → Elongation → Annealing",
      "Annealing → Elongation → Denaturierung",
    ],
    2,
    "Die PCR-Schritte: 1. Denaturierung (~95 °C): DNA-Doppelstrang wird getrennt. 2. Annealing (~55–65 °C): Primer lagern sich an die Einzelstränge an. 3. Elongation (~72 °C): Taq-Polymerase verlängert die Primer. Dies wird 25–35 Zyklen wiederholt.",
    "mittel",
    ["pcr", "denaturierung", "molekularbiologie"]
  ),
  q(
    "bio-pool-153",
    "bio-kap4",
    "Bei einer Frau wird eine balancierte Robertson-Translokation t(14;21) festgestellt. Welches Risiko besteht für ihre Nachkommen?",
    [
      "Kein erhöhtes Risiko, da balancierte Translokationen immer vollständig weitergegeben werden.",
      "Ein erhöhtes Risiko für Trisomie 21 (Down-Syndrom)",
      "Ein erhöhtes Risiko für Turner-Syndrom.",
      "Ein erhöhtes Risiko für Chorea Huntington.",
      "Die Translokation kann nur an Söhne weitergegeben werden.",
    ],
    1,
    "Bei der Robertson-Translokation t(14;21) kann während der Meiose eine unbalancierte Segregation auftreten, bei der ein Kind zusätzliches Chromosom-21-Material erhält (Translokations-Trisomie 21). Das empirische Risiko liegt bei ca. 10–15 % bei maternaler Trägerin.",
    "schwer",
    ["translokation", "trisomie 21", "chromosomenaberration"]
  ),
  q(
    "bio-pool-154",
    "bio-kap4",
    "Welches Enzym entwindet die DNA-Doppelhelix vor der Replikationsgabel?",
    ["DNA-Polymerase III", "Ligase", "Helikase", "Topoisomerase II", "Primase"],
    2,
    "Die Helikase trennt die Wasserstoffbrückenbindungen zwischen den komplementären Basenpaaren und entwindet die Doppelhelix. Topoisomerase löst die entstehende Torsionsspannung, Primase synthetisiert RNA-Primer, Ligase verbindet Okazaki-Fragmente.",
    "leicht",
    ["helikase", "replikation", "dna"]
  ),
  q(
    "bio-pool-155",
    "bio-kap4",
    "Epigenetische Modifikationen verändern die Genexpression, ohne die DNA-Sequenz zu ändern. Welcher Mechanismus zählt dazu?",
    [
      "Punktmutation",
      "DNA-Methylierung von CpG-Inseln",
      "Deletion eines Exons",
      "Insertion eines Transposons",
      "Chromosomentranslokation",
    ],
    1,
    "DNA-Methylierung ist ein klassischer epigenetischer Mechanismus. Methylierte Promotorregionen führen typischerweise zur Genabschaltung. Punktmutationen, Deletionen und Translokationen verändern die DNA-Sequenz selbst.",
    "mittel",
    ["epigenetik", "methylierung", "genexpression"]
  ),
  q(
    "bio-pool-156",
    "bio-kap4",
    "Welche Aussage zur Genregulation bei Eukaryoten trifft NICHT zu?",
    [
      "Enhancer können die Transkription auch aus großer Entfernung verstärken.",
      "Splicing entfernt Introns aus der prä-mRNA.",
      "Transkriptionsfaktoren binden an spezifische DNA-Sequenzen und regulieren die RNA-Polymerase.",
      "Bei Eukaryoten gibt es keine posttranskriptionale Regulation — die mRNA wird direkt translatiert.",
      "Die 5'-Cap-Struktur schützt die mRNA vor enzymatischem Abbau.",
    ],
    3,
    "Eukaryoten haben vielfältige posttranskriptionale Regulationsmechanismen: Splicing, RNA-Editing, mRNA-Stabilität, miRNA-vermittelte Degradation und Translationskontrolle. Die Aussage, es gäbe keine posttranskriptionale Regulation, ist falsch.",
    "schwer",
    ["genregulation", "eukaryoten", "posttranskriptional"]
  ),

  // ── bio-kap5 Mikrobiologie / Immunologie (14 Fragen) ───────────────
  q(
    "bio-pool-157",
    "bio-kap5",
    "Welche Zellen des Immunsystems sind für die Produktion von Antikörpern verantwortlich?",
    [
      "Makrophagen",
      "T-Helferzellen",
      "Natürliche Killerzellen (NK-Zellen)",
      "Plasmazellen",
      "Dendritische Zellen",
    ],
    3,
    "Plasmazellen sind terminal differenzierte B-Lymphozyten, die große Mengen Antikörper (Immunglobuline) sezernieren. T-Helferzellen unterstützen die B-Zell-Aktivierung, produzieren aber selbst keine Antikörper.",
    "leicht",
    ["antikörper", "plasmazellen", "b-lymphozyten"]
  ),
  q(
    "bio-pool-158",
    "bio-kap5",
    "Welche Aussage zum MHC-Klasse-I-Komplex trifft zu?",
    [
      "Er wird nur auf antigenpräsentierenden Zellen exprimiert.",
      "Er präsentiert exogene Peptide den T-Helferzellen.",
      "Er wird auf nahezu allen kernhaltigen Zellen exprimiert und präsentiert endogene Peptide.",
      "Er besteht aus zwei identischen Polypeptidketten.",
      "Er ist ausschließlich für die Abstoßung von Transplantaten relevant.",
    ],
    2,
    "MHC-I-Moleküle finden sich auf fast allen kernhaltigen Zellen. Sie präsentieren Peptidfragmente intrazellulärer Proteine an CD8⁺-zytotoxische T-Zellen. MHC-II ist auf professionelle antigenpräsentierende Zellen beschränkt.",
    "mittel",
    ["mhc", "antigenpräsentation", "zytotoxische t-zellen"]
  ),
  q(
    "bio-pool-159",
    "bio-kap5",
    "Welche Struktur ist bei gramnegativen Bakterien vorhanden, fehlt aber bei grampositiven?",
    [
      "Zellwand aus Peptidoglykan",
      "Äußere Membran mit Lipopolysacchariden (LPS)",
      "Ribosomen (70S)",
      "Zirkuläre DNA (Nukleoid)",
      "Zellmembran",
    ],
    1,
    "Gramnegative Bakterien besitzen eine äußere Membran mit Lipopolysacchariden (LPS, Endotoxin), die bei grampositiven Bakterien fehlt. Grampositive Bakterien haben stattdessen eine dicke Peptidoglykanschicht. Beide besitzen 70S-Ribosomen und eine Zellmembran.",
    "mittel",
    ["bakterien", "gramnegativ", "lps"]
  ),
  q(
    "bio-pool-160",
    "bio-kap5",
    "Eine Patientin zeigt nach einer Bluttransfusion eine akute hämolytische Reaktion. Welcher immunologische Mechanismus ist am wahrscheinlichsten beteiligt?",
    [
      "Typ-I-Überempfindlichkeit (IgE-vermittelt)",
      "Typ-II-Überempfindlichkeit (zytotoxische Antikörperreaktion)",
      "Typ-III-Überempfindlichkeit (Immunkomplexreaktion)",
      "Typ-IV-Überempfindlichkeit",
      "Autoimmune Neutropenie",
    ],
    1,
    "Transfusionsreaktionen bei Blutgruppenunverträglichkeit sind Typ-II-Überempfindlichkeitsreaktionen. IgM- oder IgG-Antikörper binden an die Erythrozyten-Antigene und aktivieren das Komplementsystem, was zur Hämolyse führt.",
    "schwer",
    ["transfusionsreaktion", "typ-ii", "hämolyse"]
  ),
  q(
    "bio-pool-161",
    "bio-kap5",
    "Welche Aussage zu Viren trifft NICHT zu?",
    [
      "Viren besitzen keinen eigenen Stoffwechsel.",
      "Sie benötigen eine Wirtszelle zur Vermehrung.",
      "Sie können DNA oder RNA als Erbmaterial enthalten.",
      "Alle Viren sind von einer Lipidmembran (Hülle) umgeben.",
      "Viren können Bakterien infizieren (Bakteriophagen).",
    ],
    3,
    "Nicht alle Viren besitzen eine Lipidhülle. Unbehüllte Viren haben lediglich ein Kapsid aus Proteinen. Behüllte Viren tragen zusätzlich eine Lipidmembran aus der Wirtszellmembran.",
    "leicht",
    ["viren", "hülle", "kapsid"]
  ),
  q(
    "bio-pool-162",
    "bio-kap5",
    "Welches Immunglobulin wird bei einer Erstinfektion zuerst gebildet und ist daher ein Marker für eine akute Infektion?",
    ["IgG", "IgA", "IgM", "IgE", "IgD"],
    2,
    "IgM ist der erste Antikörper, der bei einer Immunantwort produziert wird (Primärantwort). Sein Nachweis im Serum deutet auf eine akute oder kürzlich durchgemachte Infektion hin. IgG dominiert die Sekundärantwort und das immunologische Gedächtnis.",
    "mittel",
    ["igm", "primärantwort", "immunglobuline"]
  ),
  q(
    "bio-pool-163",
    "bio-kap5",
    "Welche Rolle spielen T-Helferzellen (CD4⁺) in der adaptiven Immunantwort?",
    [
      "Sie lysieren virusinfizierte Zellen direkt über Perforin und Granzyme.",
      "Sie aktivieren und koordinieren andere Immunzellen durch Zytokinausschüttung.",
      "Sie phagozytieren Bakterien als erste Verteidigungslinie.",
      "Sie produzieren Antikörper in großen Mengen.",
      "Sie sind für die Antigenpräsentation auf MHC-I verantwortlich.",
    ],
    1,
    "CD4⁺-T-Helferzellen sind Koordinatoren der adaptiven Immunantwort. Sie sezernieren Zytokine, die B-Zellen zur Antikörperproduktion, Makrophagen zur Aktivierung und CD8⁺-T-Zellen zur Zytotoxizität stimulieren.",
    "mittel",
    ["t-helferzellen", "cd4", "zytokine"]
  ),
  q(
    "bio-pool-164",
    "bio-kap5",
    "Bei einem Patienten mit AIDS sinkt die Zahl der CD4⁺-T-Zellen unter 200/µl. Welche Infektionen treten typischerweise als opportunistische Erkrankungen auf?",
    [
      "Rhinovirus-Schnupfen und banale Erkältung",
      "Pneumocystis-jirovecii-Pneumonie und orale Candidiasis",
      "Masern und Windpocken (Erstinfektion)",
      "Akuter Myokardinfarkt",
      "Autoimmune Schilddrüsenentzündung (Hashimoto)",
    ],
    1,
    "Bei schwerem Immundefekt (CD4⁺ < 200/µl) treten opportunistische Infektionen auf, die ein gesundes Immunsystem kontrollieren könnte. Typisch sind Pneumocystis-jirovecii-Pneumonie, orale/ösophageale Candidiasis, Toxoplasmose und CMV-Retinitis.",
    "schwer",
    ["aids", "opportunistische infektionen", "cd4"]
  ),
  q(
    "bio-pool-165",
    "bio-kap5",
    "Welche Aussage zum Komplementsystem ist korrekt?",
    [
      "Es gehört ausschließlich zur adaptiven Immunantwort.",
      "Es besteht aus kaskadenartig aktivierten Plasmaproteinen zur Erregerlyse.",
      "Seine Aktivierung hemmt die Phagozytose.",
      "Es wird nur über den klassischen Weg aktiviert.",
      "Komplementfaktoren werden in den T-Zellen synthetisiert.",
    ],
    1,
    "Das Komplementsystem ist ein kaskadenartiges System aus über 30 Plasmaproteinen. Es kann über drei Wege aktiviert werden (klassisch, alternativ, Lektin) und führt zu Opsonierung, Entzündung und Membranangriffskomplex (MAC).",
    "mittel",
    ["komplement", "mac", "angeborene immunität"]
  ),
  q(
    "bio-pool-166",
    "bio-kap5",
    "Welcher Impfstofftyp enthält abgetötete, nicht mehr vermehrungsfähige Erreger?",
    ["Lebendimpfstoff", "Totimpfstoff", "mRNA-Impfstoff", "Toxoid-Impfstoff", "Konjugatimpfstoff"],
    1,
    "Totimpfstoffe enthalten inaktivierte (abgetötete) Erreger oder deren Bestandteile. Sie können keine Infektion auslösen, sind aber oft weniger immunogen als Lebendimpfstoffe und erfordern daher häufig Booster-Impfungen. Beispiele: Polio-Salk, Hepatitis A.",
    "leicht",
    ["impfstoff", "totimpfstoff", "immunisierung"]
  ),
  q(
    "bio-pool-167",
    "bio-kap5",
    "Eine Forscherin isoliert ein Bakterium, das bei der Gram-Färbung blau-violett erscheint. Welche Zellwandstruktur ist zu erwarten?",
    [
      "Dünne Peptidoglykanschicht mit äußerer Membran",
      "Dicke Peptidoglykanschicht ohne äußere Membran",
      "Zellwand aus Chitin",
      "Zellwand aus Cellulose",
      "Keine Zellwand",
    ],
    1,
    "Grampositive Bakterien erscheinen nach der Gram-Färbung blau-violett, da ihre dicke Peptidoglykanschicht (20–80 nm) den Kristallviolett-Jod-Komplex festhält. Gramnegative Bakterien haben nur eine dünne Peptidoglykanschicht und eine äußere Membran.",
    "leicht",
    ["gramfärbung", "peptidoglykan", "grampositiv"]
  ),
  q(
    "bio-pool-168",
    "bio-kap5",
    "Welcher Mechanismus ermöglicht es Bakterien, Antibiotikaresistenzen durch horizontalen Gentransfer zu erwerben?",
    [
      "Mitose",
      "Meiose und Crossing-over",
      "Konjugation über Pili mit Plasmidtransfer",
      "Endosymbiose",
      "Apoptose",
    ],
    2,
    "Konjugation ist ein horizontaler Gentransfermechanismus, bei dem Bakterien über einen Sexpilus Plasmide direkt an andere Bakterien weitergeben. Weitere Mechanismen sind Transformation (freie DNA) und Transduktion (über Phagen).",
    "mittel",
    ["konjugation", "antibiotikaresistenz", "plasmid"]
  ),
  q(
    "bio-pool-169",
    "bio-kap5",
    "Welche Aussage zur aktiven Immunisierung trifft zu?",
    [
      "Sie bietet sofortigen Schutz nach Applikation.",
      "Der Körper bildet selbst Antikörper und Gedächtniszellen nach Kontakt mit dem Antigen.",
      "Es werden fertige Antikörper injiziert.",
      "Der Schutz hält nur wenige Wochen an.",
      "Sie wird nur bei bereits bestehender Infektion durchgeführt.",
    ],
    1,
    "Bei der aktiven Immunisierung wird das Immunsystem mit einem Antigen konfrontiert. Es bildet eigene Antikörper und Gedächtniszellen, was einen lang anhaltenden Schutz bietet. Die passive Immunisierung injiziert fertige Antikörper.",
    "leicht",
    ["aktive immunisierung", "gedächtniszellen", "impfung"]
  ),
  q(
    "bio-pool-170",
    "bio-kap5",
    "Ein Labortest zeigt, dass ein Patient stark erhöhte IgE-Spiegel im Serum hat. Welche Erkrankung ist am wahrscheinlichsten?",
    [
      "Bakterielle Pneumonie",
      "Allergische Rhinitis (Heuschnupfen)",
      "Autoimmunhepatitis",
      "Chronische Hepatitis B",
      "Akute myeloische Leukämie",
    ],
    1,
    "Erhöhte IgE-Spiegel sind typisch für allergische Erkrankungen (Typ-I-Allergie) wie Heuschnupfen, Asthma bronchiale und atopische Dermatitis. IgE bindet an Mastzellen und löst bei erneutem Allergenkontakt die Histaminfreisetzung aus. Auch Parasiteninfektionen können IgE erhöhen.",
    "schwer",
    ["ige", "allergie", "heuschnupfen"]
  ),
];
