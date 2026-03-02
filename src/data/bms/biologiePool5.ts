/**
 * Biology BMS pool — questions 311–380 (MedAT style).
 * Focus: clinical/applied biology — Organsysteme (bio-kap2), Immunologie/Mikrobiologie (bio-kap5).
 * Mostly "Falsch-Aussagen" style.
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

export const biologiePool5: Question[] = [
  // ── Herz-Kreislauf (bio-kap2) ──────────────────────────────────────
  q(
    "bio-pool-311",
    "bio-kap2",
    "Welche Aussage zum Herzen trifft NICHT zu?",
    [
      "Der Sinusknoten liegt im rechten Vorhof.",
      "Der AV-Knoten verzögert die Erregungsüberleitung.",
      "Die Purkinje-Fasern leiten die Erregung in die Vorhöfe.",
      "Das His-Bündel verbindet AV-Knoten und Kammerschenkel.",
      "Der Sinusknoten ist der primäre Schrittmacher des Herzens.",
    ],
    2,
    "Die Purkinje-Fasern leiten die Erregung in die Kammermuskulatur, nicht in die Vorhöfe. Die Vorhöfe werden direkt vom Sinusknoten erregt. Alle anderen Aussagen sind korrekt.",
    "leicht",
    ["herz", "erregungsleitung", "falsch-aussage"]
  ),
  q(
    "bio-pool-312",
    "bio-kap2",
    "Welche Aussage zum Blutkreislauf ist FALSCH?",
    [
      "Die Aorta führt sauerstoffreiches Blut vom linken Ventrikel weg.",
      "Die Vena cava inferior sammelt Blut aus der unteren Körperhälfte.",
      "Die Lungenvenen führen sauerstoffarmes Blut zum linken Vorhof.",
      "Die Pulmonalarterie führt sauerstoffarmes Blut zur Lunge.",
      "Die Koronararterien versorgen das Myokard mit Sauerstoff.",
    ],
    2,
    "Die Lungenvenen (Venae pulmonales) führen sauerstoffREICHES Blut von der Lunge zum linken Vorhof. Das ist eine häufige Verwechslung: Venen = zum Herzen, unabhängig vom Sauerstoffgehalt.",
    "leicht",
    ["blutkreislauf", "lungenvenen", "falsch-aussage"]
  ),
  q(
    "bio-pool-313",
    "bio-kap2",
    "Welche Aussage zur Herzaktion trifft NICHT zu?",
    [
      "Während der Systole kontrahieren sich die Kammern.",
      "Während der Diastole füllen sich die Kammern mit Blut.",
      "Die Segelklappen verhindern den Rückfluss von den Kammern in die Vorhöfe.",
      "Die Taschenklappen öffnen sich während der Diastole.",
      "Das Schlagvolumen beträgt in Ruhe ca. 70 ml.",
    ],
    3,
    "Die Taschenklappen (Aorten- und Pulmonalklappe) öffnen sich während der Systole, wenn der Kammerdruck den arteriellen Druck übersteigt. Während der Diastole sind sie geschlossen, um den Rückfluss in die Kammern zu verhindern.",
    "leicht",
    ["herzaktion", "herzklappen", "falsch-aussage"]
  ),
  q(
    "bio-pool-314",
    "bio-kap2",
    "Welche Aussage zum Blutdruck ist FALSCH?",
    [
      "Der systolische Wert entsteht durch die Kammerkontraktion.",
      "Der diastolische Wert entspricht dem Restdruck während der Erschlaffung.",
      "Normaler Blutdruck beim Erwachsenen liegt bei ca. 120/80 mmHg.",
      "In den Kapillaren ist der Blutdruck höher als in der Aorta.",
      "Hypertonie erhöht das Risiko für Schlaganfall und Herzinfarkt.",
    ],
    3,
    "Der Blutdruck nimmt von der Aorta zu den Kapillaren kontinuierlich ab. In den Kapillaren beträgt er nur noch ca. 25–35 mmHg, in der Aorta hingegen ca. 120 mmHg systolisch. Der Druckabfall entsteht durch den Widerstand der Arteriolen.",
    "leicht",
    ["blutdruck", "kapillaren", "falsch-aussage"]
  ),
  q(
    "bio-pool-315",
    "bio-kap2",
    "Welche Aussage zu den Blutgefäßen trifft NICHT zu?",
    [
      "Arterien haben eine dickere Muskelschicht als Venen.",
      "Venen besitzen Klappen, die den Rückfluss verhindern.",
      "Kapillaren bestehen aus einer einschichtigen Endothelschicht.",
      "Arteriolen sind die Hauptwiderstandsgefäße des Kreislaufs.",
      "Die Gesamtquerschnittsfläche ist in den Arterien am größten.",
    ],
    4,
    "Die Gesamtquerschnittsfläche ist in den Kapillaren am größten (ca. 3000 cm²), nicht in den Arterien. Dadurch wird die Strömungsgeschwindigkeit in den Kapillaren minimal, was den Stoffaustausch begünstigt.",
    "mittel",
    ["blutgefäße", "querschnittsfläche", "falsch-aussage"]
  ),
  q(
    "bio-pool-316",
    "bio-kap2",
    "Welche Aussage zum fetalen Kreislauf ist FALSCH?",
    [
      "Das Foramen ovale verbindet rechten und linken Vorhof.",
      "Der Ductus arteriosus verbindet Pulmonalarterie und Aorta.",
      "Die Nabelvene führt sauerstoffreiches Blut von der Plazenta zum Fetus.",
      "Der Ductus venosus umgeht die Leber vollständig.",
      "Nach der Geburt verschließt sich das Foramen ovale in der Regel.",
    ],
    3,
    "Der Ductus venosus umgeht die Leber TEILWEISE, nicht vollständig. Ein Teil des Blutes aus der Nabelvene fließt durch die Leber, der Rest wird über den Ductus venosus direkt zur Vena cava inferior geleitet.",
    "schwer",
    ["fetaler kreislauf", "ductus venosus", "falsch-aussage"]
  ),
  q(
    "bio-pool-317",
    "bio-kap2",
    "Welche Aussage zur Blutgerinnung trifft NICHT zu?",
    [
      "Thrombozyten bilden zunächst einen weißen Thrombus.",
      "Fibrinogen wird durch Thrombin zu Fibrin umgewandelt.",
      "Vitamin K ist für die Synthese bestimmter Gerinnungsfaktoren notwendig.",
      "Die intrinsische Gerinnungskaskade wird durch Gewebefaktor (Tissue Factor) ausgelöst.",
      "Heparin wirkt als Antikoagulans durch Verstärkung von Antithrombin.",
    ],
    3,
    "Der Gewebefaktor (Tissue Factor, Faktor III) löst die EXTRINSISCHE Gerinnungskaskade aus. Die intrinsische Kaskade wird durch Kontaktaktivierung (Faktor XII an negativ geladenen Oberflächen) initiiert.",
    "mittel",
    ["blutgerinnung", "gerinnungskaskade", "falsch-aussage"]
  ),
  // ── Niere/Harnwege (bio-kap2) ──────────────────────────────────────
  q(
    "bio-pool-318",
    "bio-kap2",
    "Welche Aussage zur Niere ist FALSCH?",
    [
      "Das Nephron ist die funktionelle Grundeinheit der Niere.",
      "Im Glomerulus wird das Blut filtriert.",
      "Der proximale Tubulus resorbiert den Großteil des Primärharns.",
      "Jede Niere enthält etwa 100.000 Nephrone.",
      "Die Henle-Schleife ist am Gegenstromprinzip beteiligt.",
    ],
    3,
    "Jede Niere enthält etwa 1 Million (1.000.000) Nephrone, nicht nur 100.000. Diese hohe Zahl ist prüfungsrelevant und wird häufig abgefragt.",
    "leicht",
    ["niere", "nephron", "falsch-aussage"]
  ),
  q(
    "bio-pool-319",
    "bio-kap2",
    "Welche Aussage zum Harnleiter (Ureter) trifft NICHT zu?",
    [
      "Der Ureter verbindet Nierenbecken und Harnblase.",
      "Er besitzt eine glatte Muskelschicht für die Peristaltik.",
      "Er mündet von hinten in die Harnblase.",
      "Harnleitersteine können zu einer Nierenkolik führen.",
      "Der Ureter verläuft ventral der großen Bauchgefäße.",
    ],
    4,
    "Die Ureteren verlaufen DORSAL (retroperitoneal) der großen Bauchgefäße, nicht ventral. Sie liegen hinter dem Peritoneum an der hinteren Bauchwand.",
    "mittel",
    ["ureter", "harnwege", "falsch-aussage"]
  ),
  q(
    "bio-pool-320",
    "bio-kap2",
    "Welche Aussage zur Harnkonzentrierung ist FALSCH?",
    [
      "ADH (Antidiuretisches Hormon) fördert den Einbau von Aquaporinen im Sammelrohr.",
      "Bei Wassermangel wird mehr ADH ausgeschüttet.",
      "Die Henle-Schleife erzeugt einen osmotischen Gradienten im Nierenmark.",
      "Aldosteron hemmt die Natriumrückresorption im distalen Tubulus.",
      "Der Primärharn wird auf etwa 1 % seines Volumens konzentriert.",
    ],
    3,
    "Aldosteron FÖRDERT die Natriumrückresorption im distalen Tubulus und Sammelrohr (nicht hemmt). Es wird in der Nebennierenrinde gebildet und steigert die Na⁺-Resorption sowie die K⁺-Sekretion.",
    "mittel",
    ["harnkonzentrierung", "aldosteron", "falsch-aussage"]
  ),
  q(
    "bio-pool-321",
    "bio-kap2",
    "Welche Substanz wird normalerweise NICHT im Glomerulus filtriert?",
    ["Glucose", "Harnstoff", "Albumin", "Natriumionen", "Kreatinin"],
    2,
    "Albumin (ca. 66 kDa) ist zu groß, um die Filtrationsbarriere des Glomerulus zu passieren. Glucose, Harnstoff, Na⁺ und Kreatinin sind klein genug und werden frei filtriert. Albuminurie ist ein Zeichen für eine Nierenschädigung.",
    "leicht",
    ["niere", "glomerulus", "filtration"]
  ),
  q(
    "bio-pool-322",
    "bio-kap2",
    "Welche Aussage zur Harnblase trifft NICHT zu?",
    [
      "Die Harnblase ist von Übergangsepithel (Urothel) ausgekleidet.",
      "Der Musculus detrusor vesicae kontrahiert sich bei der Miktion.",
      "Die Harnblase fasst beim Erwachsenen ca. 500–700 ml.",
      "Der innere Sphinkter der Harnblase besteht aus quergestreifter Muskulatur.",
      "Der Harndrang beginnt ab ca. 200–350 ml Füllvolumen.",
    ],
    3,
    "Der INNERE Sphinkter besteht aus GLATTER Muskulatur und wird unwillkürlich gesteuert. Nur der ÄUSSERE Sphinkter (M. sphincter urethrae externus) besteht aus quergestreifter Muskulatur und ist willkürlich kontrollierbar.",
    "mittel",
    ["harnblase", "sphinkter", "falsch-aussage"]
  ),
  // ── Leber (bio-kap2) ──────────────────────────────────────────────
  q(
    "bio-pool-323",
    "bio-kap2",
    "Welche Aussage zur Leber ist FALSCH?",
    [
      "Die Leber produziert Gallensäuren für die Fettverdauung.",
      "Die Pfortader führt nährstoffreiches Blut vom Darm zur Leber.",
      "Die Leber ist das zentrale Organ des Kohlenhydratstoffwechsels.",
      "Die Leber erhält ihr gesamtes Blut über die Arteria hepatica.",
      "Hepatozyten können Glykogen speichern und bei Bedarf Glucose freisetzen.",
    ],
    3,
    "Die Leber erhält ihr Blut über ZWEI Gefäße: die Arteria hepatica (ca. 25 %, sauerstoffreich) und die Vena portae/Pfortader (ca. 75 %, nährstoffreich). Die duale Blutversorgung ist ein klassisches Prüfungsthema.",
    "leicht",
    ["leber", "blutversorgung", "falsch-aussage"]
  ),
  q(
    "bio-pool-324",
    "bio-kap2",
    "Welche Funktion erfüllt die Leber NICHT?",
    [
      "Synthese von Albumin",
      "Abbau von Hämoglobin zu Bilirubin",
      "Produktion von Erythropoetin",
      "Entgiftung von Ammoniak zu Harnstoff",
      "Speicherung von fettlöslichen Vitaminen",
    ],
    2,
    "Erythropoetin (EPO) wird hauptsächlich in der Niere produziert (peritubulären Zellen), nicht in der Leber. Die Leber übernimmt alle anderen genannten Funktionen: Albuminsynthese, Bilirubinstoffwechsel, Harnstoffzyklus und Vitaminspeicherung.",
    "mittel",
    ["leber", "erythropoetin", "funktionen"]
  ),
  q(
    "bio-pool-325",
    "bio-kap2",
    "Welche Aussage zur Gallenblase trifft NICHT zu?",
    [
      "Die Gallenblase speichert und konzentriert die Galle.",
      "Cholezystokinin (CCK) stimuliert die Gallenblasenkontraktion.",
      "Die Galle wird in der Gallenblase produziert.",
      "Gallensteine können den Ductus choledochus verschließen.",
      "Gallensäuren emulgieren Fette im Dünndarm.",
    ],
    2,
    "Die Galle wird in den Hepatozyten der LEBER produziert, nicht in der Gallenblase. Die Gallenblase dient nur als Speicher- und Konzentrierungsorgan. Etwa 500–1000 ml Galle werden täglich von der Leber gebildet.",
    "leicht",
    ["gallenblase", "galle", "falsch-aussage"]
  ),
  q(
    "bio-pool-326",
    "bio-kap2",
    "Welche Aussage zum Bilirubinstoffwechsel ist FALSCH?",
    [
      "Indirektes Bilirubin entsteht beim Abbau von Hämoglobin.",
      "Indirektes Bilirubin wird in der Leber an Glucuronsäure konjugiert.",
      "Direktes (konjugiertes) Bilirubin ist wasserlöslich.",
      "Direktes Bilirubin wird über die Niere als Hauptweg ausgeschieden.",
      "Urobilinogen entsteht durch bakteriellen Abbau im Darm.",
    ],
    3,
    "Der Hauptausscheidungsweg des konjugierten Bilirubins führt über die GALLE in den DARM, nicht über die Niere. Im Darm wird es zu Urobilinogen umgewandelt. Nur ein kleiner Teil des Urobilinogens wird renal ausgeschieden.",
    "schwer",
    ["bilirubin", "leberstoffwechsel", "falsch-aussage"]
  ),
  // ── Nervensystem (bio-kap2) ────────────────────────────────────────
  q(
    "bio-pool-327",
    "bio-kap2",
    "Welche Aussage zum vegetativen Nervensystem trifft NICHT zu?",
    [
      "Der Sympathikus nutzt Noradrenalin als postganglionären Transmitter.",
      "Der Parasympathikus nutzt Acetylcholin als postganglionären Transmitter.",
      "Der Sympathikus erweitert die Bronchien.",
      "Der Parasympathikus beschleunigt die Herzfrequenz.",
      "Beide Systeme wirken an den meisten Organen antagonistisch.",
    ],
    3,
    "Der Parasympathikus VERLANGSAMT die Herzfrequenz (negativ chronotrop) über den Nervus vagus. Eine Beschleunigung der Herzfrequenz ist Aufgabe des Sympathikus. Dies ist ein klassischer MedAT-Stolperstein.",
    "leicht",
    ["vegetatives nervensystem", "parasympathikus", "falsch-aussage"]
  ),
  q(
    "bio-pool-328",
    "bio-kap2",
    "Welche Aussage zum Aktionspotenzial trifft NICHT zu?",
    [
      "In der Depolarisationsphase strömen Na⁺-Ionen in die Zelle.",
      "In der Repolarisationsphase strömen K⁺-Ionen aus der Zelle.",
      "Das Ruhemembranpotenzial einer Nervenzelle liegt bei ca. −70 mV.",
      "Während der absoluten Refraktärzeit kann ein überschwelliger Reiz ein neues AP auslösen.",
      "Die Erregungsleitung am myelinisierten Axon ist saltatorisch.",
    ],
    3,
    "Während der ABSOLUTEN Refraktärzeit kann KEIN neues Aktionspotenzial ausgelöst werden, auch nicht durch überschwellige Reize. Erst in der relativen Refraktärzeit ist dies mit stärkeren Reizen möglich.",
    "leicht",
    ["aktionspotenzial", "refraktärzeit", "falsch-aussage"]
  ),
  q(
    "bio-pool-329",
    "bio-kap2",
    "Welche Aussage zu Neurotransmittern ist FALSCH?",
    [
      "Acetylcholin wird an der motorischen Endplatte freigesetzt.",
      "GABA ist der wichtigste inhibitorische Neurotransmitter im ZNS.",
      "Glutamat ist der wichtigste exzitatorische Neurotransmitter im ZNS.",
      "Dopamin wird ausschließlich im Nebennierenmark produziert.",
      "Serotonin wird hauptsächlich im Darm synthetisiert.",
    ],
    3,
    "Dopamin wird NICHT ausschließlich im Nebennierenmark produziert. Es wird vor allem in dopaminergen Neuronen des ZNS synthetisiert (Substantia nigra, ventrales Tegmentum). Im Nebennierenmark ist es vor allem Vorstufe von Noradrenalin und Adrenalin.",
    "mittel",
    ["neurotransmitter", "dopamin", "falsch-aussage"]
  ),
  q(
    "bio-pool-330",
    "bio-kap2",
    "Welche Aussage zu den Hirnhäuten (Meningen) ist FALSCH?",
    [
      "Die Dura mater ist die äußerste Hirnhaut.",
      "Die Arachnoidea liegt zwischen Dura mater und Pia mater.",
      "Der Subarachnoidalraum enthält Liquor cerebrospinalis.",
      "Die Pia mater liegt direkt auf der Hirnoberfläche.",
      "Zwischen Dura mater und Arachnoidea liegt der Subarachnoidalraum.",
    ],
    4,
    "Zwischen Dura mater und Arachnoidea liegt der SUBDURALRAUM (Spatium subdurale), nicht der Subarachnoidalraum. Der Subarachnoidalraum liegt zwischen Arachnoidea und Pia mater und enthält den Liquor.",
    "mittel",
    ["hirnhäute", "meningen", "falsch-aussage"]
  ),
  q(
    "bio-pool-331",
    "bio-kap2",
    "Welche Aussage zur synaptischen Übertragung trifft NICHT zu?",
    [
      "Neurotransmitter werden in synaptischen Vesikeln gespeichert.",
      "Ca²⁺-Einstrom in die Präsynapse löst die Vesikelexozytose aus.",
      "Neurotransmitter binden an Rezeptoren der postsynaptischen Membran.",
      "Die synaptische Übertragung ist bidirektional.",
      "Acetylcholinesterase baut Acetylcholin im synaptischen Spalt ab.",
    ],
    3,
    "Die chemische synaptische Übertragung ist UNIDIREKTIONAL (von prä- nach postsynaptisch). Nur elektrische Synapsen (Gap Junctions) können bidirektional übertragen. Die Richtung ergibt sich aus der Lage der Vesikel in der Präsynapse.",
    "leicht",
    ["synapse", "übertragung", "falsch-aussage"]
  ),
  // ── Endokrinologie (bio-kap2) ──────────────────────────────────────
  q(
    "bio-pool-332",
    "bio-kap2",
    "Welche Aussage zur Schilddrüse trifft NICHT zu?",
    [
      "T3 ist biologisch aktiver als T4.",
      "TSH wird im Hypothalamus gebildet.",
      "Jod ist für die Synthese von Schilddrüsenhormonen essenziell.",
      "Calcitonin wird in den C-Zellen der Schilddrüse produziert.",
      "Schilddrüsenhormone steigern den Grundumsatz.",
    ],
    1,
    "TSH (Thyreoidea-stimulierendes Hormon) wird in der HYPOPHYSE (Adenohypophyse) gebildet, nicht im Hypothalamus. Der Hypothalamus produziert TRH (Thyreotropin-Releasing-Hormon), das die TSH-Freisetzung stimuliert.",
    "leicht",
    ["schilddrüse", "tsh", "falsch-aussage"]
  ),
  q(
    "bio-pool-333",
    "bio-kap2",
    "Welche Aussage zur Nebenniere ist FALSCH?",
    [
      "Die Nebennierenrinde produziert Cortisol.",
      "Aldosteron reguliert den Natrium- und Kaliumhaushalt.",
      "Das Nebennierenmark produziert Adrenalin und Noradrenalin.",
      "ACTH stimuliert die Hormonproduktion des Nebennierenmarks.",
      "Die Nebennierenrinde bildet auch Androgene.",
    ],
    3,
    "ACTH (adrenocorticotropes Hormon) stimuliert die NEBENNIERENRINDE, insbesondere die Cortisolproduktion, nicht das Nebennierenmark. Das Mark wird direkt durch den Sympathikus (präganglionäre cholinerge Neurone) stimuliert.",
    "mittel",
    ["nebenniere", "acth", "falsch-aussage"]
  ),
  q(
    "bio-pool-334",
    "bio-kap2",
    "Welche Aussage zum Insulin trifft NICHT zu?",
    [
      "Insulin wird in den Beta-Zellen der Langerhans-Inseln produziert.",
      "Insulin senkt den Blutzuckerspiegel.",
      "Insulin fördert die Glykogensynthese in der Leber.",
      "Insulin fördert die Lipolyse im Fettgewebe.",
      "Insulin fördert die Glucoseaufnahme in Muskel- und Fettzellen.",
    ],
    3,
    "Insulin HEMMT die Lipolyse und fördert stattdessen die LIPOGENESE (Fettspeicherung). Die Lipolyse wird durch Glucagon, Adrenalin und Cortisol gefördert. Insulin ist das zentrale anabole Hormon.",
    "leicht",
    ["insulin", "lipolyse", "falsch-aussage"]
  ),
  q(
    "bio-pool-335",
    "bio-kap2",
    "Welche Aussage zu den Nebenschilddrüsen (Glandulae parathyroideae) ist FALSCH?",
    [
      "Sie produzieren Parathormon (PTH).",
      "PTH steigert den Calciumspiegel im Blut.",
      "PTH fördert die Calciumresorption aus dem Knochen.",
      "PTH hemmt die Vitamin-D-Aktivierung in der Niere.",
      "Es gibt in der Regel vier Nebenschilddrüsen.",
    ],
    3,
    "PTH FÖRDERT die Vitamin-D-Aktivierung in der Niere (Umwandlung von 25-OH-Vitamin-D zu 1,25-(OH)₂-Vitamin-D durch die 1α-Hydroxylase). Aktives Vitamin D steigert dann die intestinale Calciumresorption.",
    "mittel",
    ["nebenschilddrüse", "parathormon", "falsch-aussage"]
  ),
  q(
    "bio-pool-336",
    "bio-kap2",
    "Welche Hormonzuordnung ist FALSCH?",
    [
      "Oxytocin – Neurohypophyse",
      "Prolaktin – Adenohypophyse",
      "ADH – Neurohypophyse",
      "Wachstumshormon (GH) – Neurohypophyse",
      "FSH – Adenohypophyse",
    ],
    3,
    "Wachstumshormon (GH, Somatotropin) wird in der ADENOHYPOPHYSE (Vorderlappen) produziert, nicht in der Neurohypophyse. Die Neurohypophyse speichert und sezerniert nur Oxytocin und ADH (im Hypothalamus gebildet).",
    "mittel",
    ["hypophyse", "hormone", "falsch-aussage"]
  ),
  // ── Verdauung (bio-kap2) ───────────────────────────────────────────
  q(
    "bio-pool-337",
    "bio-kap2",
    "Welche Aussage zur Verdauung im Magen trifft NICHT zu?",
    [
      "Die Belegzellen (Parietalzellen) produzieren Salzsäure.",
      "Pepsinogen wird durch HCl zu Pepsin aktiviert.",
      "Die Hauptzellen produzieren Pepsinogen.",
      "Im Magen findet die vollständige Proteinverdauung statt.",
      "Der Intrinsic Factor ist für die Vitamin-B12-Resorption notwendig.",
    ],
    3,
    "Im Magen findet nur der BEGINN der Proteinverdauung statt (Pepsin spaltet Proteine zu Polypeptiden). Die vollständige Verdauung zu Aminosäuren erfolgt im Dünndarm durch Trypsin, Chymotrypsin und Peptidasen.",
    "leicht",
    ["magen", "proteinverdauung", "falsch-aussage"]
  ),
  q(
    "bio-pool-338",
    "bio-kap2",
    "Welche Aussage zum Dünndarm ist FALSCH?",
    [
      "Der Dünndarm gliedert sich in Duodenum, Jejunum und Ileum.",
      "Die Resorption findet hauptsächlich über die Mikrovilli statt.",
      "Vitamin B12 wird überwiegend im Ileum resorbiert.",
      "Das Duodenum ist der längste Abschnitt des Dünndarms.",
      "Pankreasenzyme gelangen über den Ductus pancreaticus ins Duodenum.",
    ],
    3,
    "Das Duodenum (Zwölffingerdarm) ist mit ca. 25–30 cm der KÜRZESTE Abschnitt des Dünndarms. Das Jejunum (ca. 2,5 m) und Ileum (ca. 3,5 m) sind deutlich länger. Der Gesamtdünndarm misst ca. 5–6 m.",
    "leicht",
    ["dünndarm", "duodenum", "falsch-aussage"]
  ),
  q(
    "bio-pool-339",
    "bio-kap2",
    "Welche Aussage zum Pankreas ist FALSCH?",
    [
      "Das exokrine Pankreas produziert Verdauungsenzyme.",
      "Trypsinogen wird durch Enterokinase im Duodenum aktiviert.",
      "Das endokrine Pankreas (Langerhans-Inseln) produziert Insulin und Glucagon.",
      "Lipase des Pankreas spaltet Triglyceride zu Glycerin und Fettsäuren.",
      "Die Pankreasenzyme sind im Pankreassaft bei saurem pH am aktivsten.",
    ],
    4,
    "Die Pankreasenzyme sind bei ALKALISCHEM pH optimal aktiv (pH 7–8). Der Pankreassaft enthält Bicarbonat, das den sauren Chymus aus dem Magen neutralisiert. Bei saurem pH wären die Enzyme inaktiv.",
    "mittel",
    ["pankreas", "verdauungsenzyme", "falsch-aussage"]
  ),
  q(
    "bio-pool-340",
    "bio-kap2",
    "Welche Aussage zum Dickdarm trifft NICHT zu?",
    [
      "Im Dickdarm wird Wasser aus dem Darminhalt resorbiert.",
      "Die Darmflora im Dickdarm produziert Vitamin K.",
      "Der Dickdarm besitzt Zotten zur Oberflächenvergrößerung.",
      "Der Appendix vermiformis ist ein Teil des Zäkums.",
      "Haustrien sind typisch für den Dickdarm.",
    ],
    2,
    "Der Dickdarm besitzt KEINE Zotten. Zotten (Villi) sind charakteristisch für den Dünndarm und dienen der Resorption. Der Dickdarm hat stattdessen Krypten (Lieberkühn-Krypten) mit Becherzellen für die Schleimproduktion.",
    "leicht",
    ["dickdarm", "zotten", "falsch-aussage"]
  ),
  // ── Atmung (bio-kap2) ─────────────────────────────────────────────
  q(
    "bio-pool-341",
    "bio-kap2",
    "Welche Aussage zur Atmung trifft NICHT zu?",
    [
      "Der Gasaustausch findet in den Alveolen statt.",
      "Surfactant verringert die Oberflächenspannung in den Alveolen.",
      "Das Zwerchfell (Diaphragma) ist der wichtigste Atemmuskel.",
      "Bei der Exspiration wird die Lunge aktiv zusammengezogen.",
      "Die Atemfrequenz wird durch das Atemzentrum in der Medulla oblongata gesteuert.",
    ],
    3,
    "Die Ruhige Exspiration ist ein PASSIVER Vorgang: Die Lunge wird nicht aktiv zusammengezogen, sondern zieht sich durch ihre elastischen Rückstellkräfte zusammen, wenn die Atemmuskeln erschlaffen. Nur die forcierte Exspiration ist aktiv (Interkostal- und Bauchmuskeln).",
    "leicht",
    ["atmung", "exspiration", "falsch-aussage"]
  ),
  q(
    "bio-pool-342",
    "bio-kap2",
    "Welche Aussage zum Sauerstofftransport im Blut ist FALSCH?",
    [
      "Ca. 98 % des O₂ wird an Hämoglobin gebunden transportiert.",
      "Die Sauerstoffbindungskurve des Hämoglobins ist sigmoidal.",
      "Ein Abfall des pH-Werts (Bohr-Effekt) erleichtert die O₂-Abgabe.",
      "CO₂ erhöht die Sauerstoffaffinität des Hämoglobins.",
      "Jedes Hämoglobinmolekül kann maximal 4 O₂-Moleküle binden.",
    ],
    3,
    "CO₂ SENKT die Sauerstoffaffinität des Hämoglobins (Rechtsverschiebung der O₂-Bindungskurve). Dies ist Teil des Bohr-Effekts: erhöhtes CO₂ und erniedrigter pH im Gewebe fördern die O₂-Abgabe, was physiologisch sinnvoll ist.",
    "mittel",
    ["sauerstofftransport", "bohr-effekt", "falsch-aussage"]
  ),
  q(
    "bio-pool-343",
    "bio-kap2",
    "Welche Aussage zu den Atemvolumina ist FALSCH?",
    [
      "Das Atemzugvolumen beträgt in Ruhe ca. 500 ml.",
      "Das Residualvolumen bleibt nach maximaler Exspiration in der Lunge.",
      "Die Vitalkapazität ist die maximale Luftmenge, die ein- und ausgeatmet werden kann.",
      "Das Residualvolumen kann mit einem einfachen Spirometer gemessen werden.",
      "Die funktionelle Residualkapazität umfasst Residualvolumen und exspiratorisches Reservevolumen.",
    ],
    3,
    "Das Residualvolumen kann NICHT mit einem einfachen Spirometer gemessen werden, da es nach maximaler Ausatmung in der Lunge verbleibt. Zur Messung werden spezielle Methoden wie Helium-Verdünnungsmethode oder Bodyplethysmographie benötigt.",
    "mittel",
    ["atemvolumina", "residualvolumen", "falsch-aussage"]
  ),
  q(
    "bio-pool-344",
    "bio-kap2",
    "Welche Aussage zum Larynx (Kehlkopf) trifft NICHT zu?",
    [
      "Die Epiglottis verschließt beim Schlucken den Kehlkopfeingang.",
      "Die Stimmbänder (Ligamenta vocalia) erzeugen durch Vibration die Stimme.",
      "Der Nervus recurrens innerviert die meisten Kehlkopfmuskeln.",
      "Der Kehlkopf liegt unterhalb des Zungenbeins.",
      "Der Kehlkopf besteht ausschließlich aus Knochen.",
    ],
    4,
    "Der Kehlkopf besteht aus KNORPEL, nicht aus Knochen. Die wichtigsten Kehlkopfknorpel sind Schildknorpel (Cartilago thyroidea), Ringknorpel (Cartilago cricoidea) und Stellknorpel (Cartilagines arytenoideae).",
    "leicht",
    ["kehlkopf", "larynx", "falsch-aussage"]
  ),
  // ── Immunologie (bio-kap5) ────────────────────────────────────────
  q(
    "bio-pool-345",
    "bio-kap5",
    "Welche Aussage zur angeborenen Immunabwehr trifft NICHT zu?",
    [
      "Makrophagen phagozytieren Pathogene.",
      "Natürliche Killerzellen erkennen virusinfizierte Zellen.",
      "Das Komplementsystem unterstützt die Opsonisierung.",
      "Dendritische Zellen präsentieren Antigene über MHC-I und MHC-II.",
      "Die angeborene Immunabwehr bildet ein immunologisches Gedächtnis.",
    ],
    4,
    "Die angeborene (unspezifische) Immunabwehr bildet KEIN immunologisches Gedächtnis. Das immunologische Gedächtnis ist eine Eigenschaft der ADAPTIVEN Immunabwehr (B- und T-Gedächtniszellen).",
    "leicht",
    ["angeborene immunität", "gedächtnis", "falsch-aussage"]
  ),
  q(
    "bio-pool-346",
    "bio-kap5",
    "Welche Aussage zu Antikörpern (Immunglobulinen) ist FALSCH?",
    [
      "IgG ist der häufigste Antikörper im Blut.",
      "IgA kommt vor allem in Schleimhautsekreten vor.",
      "IgE ist bei allergischen Reaktionen (Typ I) beteiligt.",
      "IgM wird als erster Antikörper bei einer Erstinfektion gebildet.",
      "IgD kann die Plazentaschranke überwinden.",
    ],
    4,
    "IgG (nicht IgD) kann die Plazentaschranke überwinden und sorgt so für den Nestschutz des Neugeborenen. IgD kommt hauptsächlich membrangebunden auf B-Zellen vor und hat eine geringe Serumkonzentration.",
    "mittel",
    ["antikörper", "immunglobuline", "falsch-aussage"]
  ),
  q(
    "bio-pool-347",
    "bio-kap5",
    "Welche Aussage zur T-Zell-vermittelten Immunantwort trifft NICHT zu?",
    [
      "Zytotoxische T-Zellen (CD8⁺) erkennen Antigene auf MHC-I-Molekülen.",
      "T-Helferzellen (CD4⁺) erkennen Antigene auf MHC-II-Molekülen.",
      "T-Zellen reifen im Thymus.",
      "T-Helferzellen produzieren große Mengen Antikörper.",
      "Regulatorische T-Zellen unterdrücken überschießende Immunreaktionen.",
    ],
    3,
    "T-Helferzellen produzieren KEINE Antikörper. Antikörper werden von B-Zellen (bzw. Plasmazellen) produziert. T-Helferzellen unterstützen die Immunantwort durch Zytokinfreisetzung und Aktivierung von B-Zellen und Makrophagen.",
    "leicht",
    ["t-zellen", "antikörper", "falsch-aussage"]
  ),
  q(
    "bio-pool-348",
    "bio-kap5",
    "Welche Aussage zu den MHC-Molekülen ist FALSCH?",
    [
      "MHC-I-Moleküle finden sich auf fast allen kernhaltigen Zellen.",
      "MHC-II-Moleküle finden sich vor allem auf antigenpräsentierenden Zellen.",
      "MHC-I präsentiert intrazelluläre Peptide (z. B. virale Proteine).",
      "MHC-II präsentiert extrazelluläre Antigene nach Phagozytose.",
      "MHC-I-Moleküle werden von CD4⁺-T-Zellen erkannt.",
    ],
    4,
    "MHC-I-Moleküle werden von CD8⁺-T-Zellen (zytotoxischen T-Zellen) erkannt, nicht von CD4⁺-T-Zellen. CD4⁺-T-Helferzellen erkennen Antigene auf MHC-II-Molekülen. Die Regel lautet: 8×1=8 (CD8+MHC-I), 4×2=8 (CD4+MHC-II).",
    "mittel",
    ["mhc", "antigenpräsentation", "falsch-aussage"]
  ),
  q(
    "bio-pool-349",
    "bio-kap5",
    "Welche Aussage zum Komplementsystem trifft NICHT zu?",
    [
      "Es besteht aus über 30 Plasmaproteinen.",
      "Der klassische Weg wird durch Antigen-Antikörper-Komplexe aktiviert.",
      "Der MAC (Membrane Attack Complex) bildet Poren in Zellmembranen.",
      "C3a und C5a wirken als Anaphylatoxine (Entzündungsmediatoren).",
      "Das Komplementsystem gehört ausschließlich zur adaptiven Immunantwort.",
    ],
    4,
    "Das Komplementsystem gehört primär zur ANGEBORENEN (unspezifischen) Immunabwehr, nicht ausschließlich zur adaptiven. Es kann auch ohne Antikörper aktiviert werden (alternativer Weg, Lektin-Weg). Der klassische Weg verbindet es mit der adaptiven Immunantwort.",
    "mittel",
    ["komplementsystem", "immunabwehr", "falsch-aussage"]
  ),
  // ── Infektionskrankheiten (bio-kap5) ──────────────────────────────
  q(
    "bio-pool-350",
    "bio-kap5",
    "Welche Aussage zu Bakterien trifft NICHT zu?",
    [
      "Bakterien besitzen keinen membranumhüllten Zellkern.",
      "Die bakterielle Zellwand enthält Peptidoglykan (Murein).",
      "Grampositive Bakterien haben eine dickere Peptidoglykanschicht als gramnegative.",
      "Bakterien vermehren sich durch Mitose.",
      "Plasmide können Antibiotikaresistenzgene tragen.",
    ],
    3,
    "Bakterien vermehren sich durch BINÄRE FISSION (Zweiteilung), nicht durch Mitose. Mitose ist ein Zellteilungsprozess eukaryotischer Zellen mit Spindelapparat und Chromosomenkondensation, was bei Prokaryoten nicht vorkommt.",
    "leicht",
    ["bakterien", "zellteilung", "falsch-aussage"]
  ),
  q(
    "bio-pool-351",
    "bio-kap5",
    "Welche Aussage zu Viren ist FALSCH?",
    [
      "Viren besitzen keinen eigenen Stoffwechsel.",
      "Viren benötigen eine Wirtszelle zur Vermehrung.",
      "Viren können DNA oder RNA als Erbmaterial besitzen.",
      "Antibiotika sind wirksam gegen Virusinfektionen.",
      "Retroviren (z. B. HIV) nutzen Reverse Transkriptase.",
    ],
    3,
    "Antibiotika sind NICHT wirksam gegen Viren. Sie greifen bakterielle Strukturen an (Zellwand, Ribosomen, DNA-Gyrase). Gegen Viren werden antivirale Medikamente (Virostatika) eingesetzt, z. B. Aciclovir, Oseltamivir.",
    "mittel",
    ["viren", "antibiotika", "falsch-aussage"]
  ),
  q(
    "bio-pool-352",
    "bio-kap5",
    "Welche Zuordnung Erreger-Krankheit ist FALSCH?",
    [
      "Mycobacterium tuberculosis – Tuberkulose",
      "Plasmodium falciparum – Malaria tropica",
      "Treponema pallidum – Syphilis",
      "Borrelia burgdorferi – Tollwut",
      "Clostridium tetani – Tetanus",
    ],
    3,
    "Borrelia burgdorferi verursacht BORRELIOSE (Lyme-Krankheit), nicht Tollwut. Tollwut (Rabies) wird durch das Rabiesvirus verursacht. Borreliose wird durch Zeckenbisse übertragen.",
    "mittel",
    ["infektionskrankheiten", "erreger", "falsch-aussage"]
  ),
  q(
    "bio-pool-353",
    "bio-kap5",
    "Welche Aussage zu Prionen ist FALSCH?",
    [
      "Prionen bestehen aus fehlgefalteten Proteinen.",
      "Prionen enthalten keine Nukleinsäure.",
      "Creutzfeldt-Jakob-Krankheit wird durch Prionen verursacht.",
      "Prionen können durch normale Sterilisation zerstört werden.",
      "BSE (Rinderwahnsinn) ist eine Prionenerkrankung.",
    ],
    3,
    "Prionen sind extrem resistent gegen normale Sterilisationsverfahren (Autoklavieren bei 121 °C reicht nicht). Sie erfordern spezielle Dekontaminationsmaßnahmen wie NaOH (1 M, 1 Stunde) oder Autoklavieren bei 134 °C für 18 Minuten.",
    "schwer",
    ["prionen", "sterilisation", "falsch-aussage"]
  ),
  q(
    "bio-pool-354",
    "bio-kap5",
    "Welche Aussage zu Pilzinfektionen (Mykosen) ist FALSCH?",
    [
      "Candidosen werden häufig durch Candida albicans verursacht.",
      "Dermatomykosen betreffen Haut, Haare und Nägel.",
      "Systemische Mykosen können bei Immunsupprimierten lebensbedrohlich sein.",
      "Pilze sind wie Bakterien Prokaryoten.",
      "Antimykotika wie Amphotericin B greifen die Pilzmembran an.",
    ],
    3,
    "Pilze sind EUKARYOTEN, keine Prokaryoten. Sie besitzen einen membranumhüllten Zellkern, ein Endomembransystem und Organellen. Dies unterscheidet sie grundlegend von Bakterien und ist wichtig für die Wahl des Therapeutikums.",
    "leicht",
    ["mykosen", "pilze", "falsch-aussage"]
  ),
  // ── Impfungen (bio-kap5) ──────────────────────────────────────────
  q(
    "bio-pool-355",
    "bio-kap5",
    "Welche Aussage zu Impfungen trifft NICHT zu?",
    [
      "Aktivimpfungen regen die körpereigene Antikörperproduktion an.",
      "Passivimpfungen bieten sofortigen, aber kurzfristigen Schutz.",
      "Totimpfstoffe enthalten abgetötete Erreger oder Erregerbestandteile.",
      "Lebendimpfstoffe enthalten abgeschwächte, vermehrungsfähige Erreger.",
      "Passivimpfungen führen zu einem langfristigen immunologischen Gedächtnis.",
    ],
    4,
    "Passivimpfungen führen NICHT zu einem immunologischen Gedächtnis, da dem Körper fertige Antikörper verabreicht werden und keine eigene Immunantwort mit Gedächtniszellenbildung stattfindet. Der Schutz hält nur wenige Wochen.",
    "leicht",
    ["impfung", "passivimmunisierung", "falsch-aussage"]
  ),
  q(
    "bio-pool-356",
    "bio-kap5",
    "Welche der folgenden Impfungen ist eine Lebendimpfung?",
    [
      "Tetanus",
      "Masern-Mumps-Röteln (MMR)",
      "Hepatitis B",
      "Influenza (Totimpfstoff)",
      "Diphtherie",
    ],
    1,
    "MMR (Masern-Mumps-Röteln) ist eine klassische Lebendimpfung mit attenuierten (abgeschwächten) Erregern. Tetanus und Diphtherie sind Toxoidimpfstoffe, Hepatitis B ist ein rekombinanter Proteinimpfstoff — alle Totimpfstoffe.",
    "mittel",
    ["impfung", "lebendimpfstoff", "mmr"]
  ),
  q(
    "bio-pool-357",
    "bio-kap5",
    "Welche Aussage zur Herdenimmunität ist FALSCH?",
    [
      "Sie schützt auch nicht geimpfte Personen in einer Population.",
      "Der notwendige Durchimpfungsgrad hängt von der Basisreproduktionszahl ab.",
      "Bei Masern wird eine Durchimpfungsrate von > 95 % angestrebt.",
      "Herdenimmunität funktioniert nur bei Erregern, die von Mensch zu Mensch übertragen werden.",
      "Herdenimmunität macht individuelle Impfungen überflüssig.",
    ],
    4,
    "Herdenimmunität macht individuelle Impfungen NICHT überflüssig. Sie funktioniert nur, wenn ein ausreichend hoher Anteil der Population geimpft ist. Sinkt die Durchimpfungsrate, bricht der Herdenschutz zusammen und Ausbrüche werden wieder möglich.",
    "mittel",
    ["herdenimmunität", "impfung", "falsch-aussage"]
  ),
  // ── Transplantation (bio-kap5) ────────────────────────────────────
  q(
    "bio-pool-358",
    "bio-kap5",
    "Welche Aussage zur Organtransplantation trifft NICHT zu?",
    [
      "Die HLA-Kompatibilität ist wichtig für den Transplantationserfolg.",
      "Immunsuppressiva werden eingesetzt, um Abstoßungsreaktionen zu verhindern.",
      "Bei der autologen Transplantation wird Gewebe vom eigenen Körper verwendet.",
      "Bei der allogenen Transplantation stammt das Organ von einer anderen Spezies.",
      "Die akute Abstoßungsreaktion wird hauptsächlich durch T-Zellen vermittelt.",
    ],
    3,
    "Bei der ALLOGENEN Transplantation stammt das Organ von einem anderen Individuum DERSELBEN Spezies. Eine Transplantation zwischen verschiedenen Spezies heißt XENOGEN (xenogene Transplantation), z. B. Schweineherzklappen.",
    "mittel",
    ["transplantation", "allogen", "falsch-aussage"]
  ),
  q(
    "bio-pool-359",
    "bio-kap5",
    "Welche Abstoßungsreaktion tritt innerhalb von Minuten bis Stunden nach Transplantation auf?",
    [
      "Akute Abstoßung",
      "Chronische Abstoßung",
      "Hyperakute Abstoßung",
      "Graft-versus-Host-Reaktion",
      "Delayed-type Hypersensitivität",
    ],
    2,
    "Die HYPERAKUTE Abstoßung tritt innerhalb von Minuten bis Stunden auf und wird durch präformierte Antikörper gegen Spender-HLA-Antigene vermittelt. Die akute Abstoßung dauert Tage bis Wochen, die chronische Monate bis Jahre.",
    "schwer",
    ["transplantation", "abstoßung", "hyperakut"]
  ),
  q(
    "bio-pool-360",
    "bio-kap5",
    "Welche Aussage zur Graft-versus-Host-Reaktion (GvHD) ist FALSCH?",
    [
      "Sie tritt vor allem nach Knochenmarktransplantation auf.",
      "Dabei greifen Spender-T-Zellen das Empfängergewebe an.",
      "Haut, Leber und Darm sind häufig betroffene Organe.",
      "GvHD tritt vor allem auf, wenn der Empfänger immunkompetent ist.",
      "Immunsuppressive Therapie kann die GvHD abschwächen.",
    ],
    3,
    "GvHD tritt vor allem auf, wenn der Empfänger IMMUNSUPPRIMIERT ist (z. B. nach Chemotherapie vor Knochenmarktransplantation). Die immunkompetenten Spender-T-Zellen im Transplantat können dann das geschwächte Empfängergewebe ungehindert angreifen.",
    "schwer",
    ["gvhd", "transplantation", "falsch-aussage"]
  ),
  // ── Weitere Immunologie (bio-kap5) ────────────────────────────────
  q(
    "bio-pool-361",
    "bio-kap5",
    "Welche Aussage zu allergischen Reaktionen trifft NICHT zu?",
    [
      "Typ-I-Allergien (Soforttyp) werden durch IgE vermittelt.",
      "Bei Typ-I-Allergien setzen Mastzellen Histamin frei.",
      "Typ-IV-Allergien (Spättyp) werden durch T-Zellen vermittelt.",
      "Der anaphylaktische Schock ist eine lebensbedrohliche Typ-IV-Reaktion.",
      "Typ-II-Allergien (zytotoxisch) werden durch IgG oder IgM vermittelt.",
    ],
    3,
    "Der anaphylaktische Schock ist eine lebensbedrohliche Typ-I-Reaktion (IgE-vermittelt, Soforttyp), nicht Typ IV. Typ-IV-Reaktionen sind verzögert (48–72 h) und T-Zell-vermittelt, z. B. Kontaktekzem oder Tuberkulintest.",
    "mittel",
    ["allergie", "anaphylaxie", "falsch-aussage"]
  ),
  q(
    "bio-pool-362",
    "bio-kap5",
    "Welche Aussage zu Autoimmunerkrankungen ist FALSCH?",
    [
      "Bei Autoimmunerkrankungen richtet sich das Immunsystem gegen körpereigene Strukturen.",
      "Rheumatoide Arthritis ist eine Autoimmunerkrankung.",
      "Typ-1-Diabetes entsteht durch Autoimmunzerstörung der Beta-Zellen.",
      "Autoimmunerkrankungen treten nur bei immunsupprimierten Patienten auf.",
      "Multiple Sklerose ist eine Autoimmunerkrankung des ZNS.",
    ],
    3,
    "Autoimmunerkrankungen treten bei Personen mit einem ÜBERAKTIVEN/FEHLGELEITETEN Immunsystem auf, nicht bei Immunsupprimierten. Im Gegenteil: Immunsuppressiva werden therapeutisch eingesetzt, um die überschießende Immunreaktion zu dämpfen.",
    "leicht",
    ["autoimmun", "immunsuppression", "falsch-aussage"]
  ),
  q(
    "bio-pool-363",
    "bio-kap5",
    "Welche Aussage zu Zytokinen trifft NICHT zu?",
    [
      "Interleukine vermitteln die Kommunikation zwischen Leukozyten.",
      "Interferone wirken antiviral.",
      "TNF-α (Tumornekrosefaktor) spielt eine Rolle bei Entzündungsreaktionen.",
      "Zytokine wirken ausschließlich systemisch (endokrin) über den Blutweg.",
      "Chemokine locken Immunzellen zum Infektionsort (Chemotaxis).",
    ],
    3,
    "Zytokine wirken NICHT ausschließlich systemisch. Sie wirken vor allem PARAKRIN (auf Nachbarzellen) und AUTOKRIN (auf die produzierende Zelle selbst). Nur in hohen Konzentrationen wirken manche Zytokine auch endokrin (z. B. IL-6, TNF-α bei Sepsis).",
    "schwer",
    ["zytokine", "wirkungsweise", "falsch-aussage"]
  ),
  q(
    "bio-pool-364",
    "bio-kap5",
    "Welche Aussage zur Entzündungsreaktion ist FALSCH?",
    [
      "Die fünf Kardinalsymptome sind Rubor, Calor, Tumor, Dolor und Functio laesa.",
      "Histamin bewirkt eine Vasodilatation und erhöhte Gefäßpermeabilität.",
      "Neutrophile Granulozyten wandern als erste Immunzellen zum Entzündungsort.",
      "Prostaglandine werden durch Cyclooxygenase (COX) synthetisiert.",
      "Entzündungsmediatoren führen zu einer Vasokonstriktion im betroffenen Gebiet.",
    ],
    4,
    "Entzündungsmediatoren (Histamin, Prostaglandine, Bradykinin) führen zu einer VASODILATATION, nicht Vasokonstriktion. Die Gefäßerweiterung verursacht die lokale Rötung (Rubor) und Überwärmung (Calor), erhöhte Permeabilität führt zum Ödem (Tumor).",
    "leicht",
    ["entzündung", "vasodilatation", "falsch-aussage"]
  ),
  // ── Weitere Organsysteme (bio-kap2) ───────────────────────────────
  q(
    "bio-pool-365",
    "bio-kap2",
    "Welche Aussage zum Knochen trifft NICHT zu?",
    [
      "Osteoblasten bilden neue Knochensubstanz.",
      "Osteoklasten bauen Knochensubstanz ab.",
      "Osteozyten sind in die Knochenmatrix eingebettete ehemalige Osteoblasten.",
      "Knochen wird ausschließlich desmal (bindegewebig) gebildet.",
      "Parathormon stimuliert indirekt die Osteoklasten.",
    ],
    3,
    "Knochen wird NICHT ausschließlich desmal gebildet. Es gibt zwei Ossifikationsformen: DESMALE (direkte, bindegewebige) Ossifikation (z. B. Schädelknochen) und CHONDRALE (indirekte, knorpelige) Ossifikation (z. B. Röhrenknochen). Letztere ist häufiger.",
    "mittel",
    ["knochen", "ossifikation", "falsch-aussage"]
  ),
  q(
    "bio-pool-366",
    "bio-kap2",
    "Welche Aussage zur Skelettmuskulatur trifft NICHT zu?",
    [
      "Sie besteht aus quergestreiften Muskelfasern.",
      "Die kontraktile Einheit ist das Sarkomer.",
      "Aktin und Myosin gleiten bei der Kontraktion ineinander (Gleitfilamenttheorie).",
      "Ca²⁺-Ionen werden aus dem sarkoplasmatischen Retikulum freigesetzt.",
      "Die Kontraktion der Skelettmuskulatur erfolgt unwillkürlich.",
    ],
    4,
    "Die Skelettmuskulatur wird WILLKÜRLICH gesteuert (über somatomotorische Nerven). Die unwillkürliche Kontraktion ist typisch für die glatte Muskulatur und die Herzmuskulatur. Ausnahme: Reflexe sind unwillkürliche Skelettmuskelkontraktionen.",
    "leicht",
    ["skelettmuskulatur", "willkürlich", "falsch-aussage"]
  ),
  q(
    "bio-pool-367",
    "bio-kap2",
    "Welche Aussage zum Auge trifft NICHT zu?",
    [
      "Stäbchen ermöglichen das Sehen bei Dämmerung (skotopisches Sehen).",
      "Zapfen sind für das Farbsehen verantwortlich.",
      "Die Fovea centralis (gelber Fleck) hat die höchste Zapfendichte.",
      "Der blinde Fleck entsteht an der Stelle, wo der Sehnerv die Retina verlässt.",
      "Die Linse wird durch den Musculus ciliaris abgeflacht (Nahakkommodation).",
    ],
    4,
    "Bei der Nahakkommodation wird die Linse ABGERUNDET (dicker), nicht abgeflacht. Der Ziliarmuskel kontrahiert sich, die Zonulafasern erschlaffen, und die elastische Linse nimmt ihre Kugelform an. Abflachung erfolgt bei Fernakkommodation (Ziliarmuskel entspannt).",
    "mittel",
    ["auge", "akkommodation", "falsch-aussage"]
  ),
  q(
    "bio-pool-368",
    "bio-kap2",
    "Welche Aussage zum Ohr trifft NICHT zu?",
    [
      "Das Trommelfell überträgt Schallwellen auf die Gehörknöchelchen.",
      "Die Gehörknöchelchen (Hammer, Amboss, Steigbügel) verstärken den Schall.",
      "Die Cochlea (Schnecke) enthält das Corti-Organ als Hörorgan.",
      "Die Bogengänge des Innenohrs sind für das Hören zuständig.",
      "Der Nervus vestibulocochlearis leitet akustische und vestibuläre Signale.",
    ],
    3,
    "Die Bogengänge sind für das GLEICHGEWICHT zuständig (Drehbeschleunigung), nicht für das Hören. Für das Hören ist die Cochlea mit dem Corti-Organ verantwortlich. Die Bogengänge, Utriculus und Sacculus bilden zusammen das Vestibularorgan.",
    "leicht",
    ["ohr", "bogengänge", "falsch-aussage"]
  ),
  q(
    "bio-pool-369",
    "bio-kap2",
    "Welche Aussage zur Haut trifft NICHT zu?",
    [
      "Die Epidermis besteht aus mehrschichtigem verhorntem Plattenepithel.",
      "Melanozyten produzieren das Pigment Melanin.",
      "Die Dermis enthält Blutgefäße, Nerven und Haarfollikel.",
      "Die Subcutis besteht hauptsächlich aus Fettgewebe.",
      "Die Epidermis enthält zahlreiche Blutgefäße.",
    ],
    4,
    "Die Epidermis ist GEFÄSSFREI (avaskulär). Sie wird durch Diffusion aus der darunter liegenden Dermis (Lederhaut) ernährt. Blutgefäße finden sich erst in der Dermis. Eine Verletzung nur der Epidermis blutet daher nicht.",
    "schwer",
    ["haut", "epidermis", "falsch-aussage"]
  ),
  q(
    "bio-pool-370",
    "bio-kap2",
    "Welche Aussage zum lymphatischen System trifft NICHT zu?",
    [
      "Die Milz filtert Blut und baut alte Erythrozyten ab.",
      "Lymphknoten filtern die Lymphe und enthalten Immunzellen.",
      "Der Thymus ist für die T-Zell-Reifung essenziell.",
      "Die Tonsillen gehören zum lymphatischen System.",
      "Die Lymphe fließt über den Ductus thoracicus direkt ins arterielle System.",
    ],
    4,
    "Die Lymphe fließt über den Ductus thoracicus in das VENÖSE System (Venenwinkel, Zusammenfluss von V. jugularis interna und V. subclavia links), nicht in das arterielle System.",
    "schwer",
    ["lymphsystem", "ductus thoracicus", "falsch-aussage"]
  ),
  // ── Schwere klinische Fragen ──────────────────────────────────────
  q(
    "bio-pool-371",
    "bio-kap5",
    "Welche Aussage zu HIV/AIDS trifft NICHT zu?",
    [
      "HIV infiziert primär CD4⁺-T-Helferzellen.",
      "HIV ist ein Retrovirus mit Reverser Transkriptase.",
      "Eine CD4⁺-Zellzahl < 200/µl definiert AIDS.",
      "HIV wird durch Tröpfcheninfektion übertragen.",
      "Antiretrovirale Therapie (ART) kann die Viruslast unter die Nachweisgrenze senken.",
    ],
    3,
    "HIV wird NICHT durch Tröpfcheninfektion übertragen. Die Übertragungswege sind: ungeschützter Geschlechtsverkehr, Blut-zu-Blut-Kontakt (z. B. kontaminierte Nadeln), vertikale Übertragung (Mutter → Kind). HIV ist im Alltag nicht durch Tröpfchen, Händeschütteln oder gemeinsames Essen übertragbar.",
    "mittel",
    ["hiv", "aids", "übertragung", "falsch-aussage"]
  ),
  q(
    "bio-pool-372",
    "bio-kap5",
    "Welche Aussage zur Immuntoleranz ist FALSCH?",
    [
      "Zentrale Toleranz findet im Thymus (T-Zellen) und Knochenmark (B-Zellen) statt.",
      "Autoreaktive T-Zellen werden im Thymus durch negative Selektion eliminiert.",
      "Regulatorische T-Zellen tragen zur peripheren Toleranz bei.",
      "Anergie bezeichnet die funktionelle Inaktivierung von Lymphozyten.",
      "Die klonale Deletion im Thymus eliminiert alle potenziell gefährlichen Immunzellen zu 100 %.",
    ],
    4,
    "Die klonale Deletion im Thymus eliminiert NICHT alle autoreaktiven T-Zellen zu 100 %. Einige autoreaktive Zellen entgehen der negativen Selektion und gelangen in die Peripherie. Deshalb sind PERIPHERE Toleranzmechanismen (Anergie, Treg-Zellen, Deletion) essenziell.",
    "schwer",
    ["immuntoleranz", "klonale deletion", "falsch-aussage"]
  ),
  q(
    "bio-pool-373",
    "bio-kap2",
    "Welche Aussage zum Renin-Angiotensin-Aldosteron-System (RAAS) ist FALSCH?",
    [
      "Renin wird in den juxtaglomerulären Zellen der Niere gebildet.",
      "Angiotensin II wirkt stark vasokonstriktorisch.",
      "ACE (Angiotensin-Converting-Enzyme) wandelt Angiotensin I in Angiotensin II um.",
      "Aldosteron wird in der Nebennierenrinde freigesetzt.",
      "Das RAAS wird bei erhöhtem Blutdruck aktiviert.",
    ],
    4,
    "Das RAAS wird bei ERNIEDRIGTEM Blutdruck (oder Volumenmangel) aktiviert, nicht bei erhöhtem. Der Blutdruckabfall stimuliert die Reninfreisetzung, was über Angiotensin II zu Vasokonstriktion und über Aldosteron zu Natriumretention führt — beides erhöht den Blutdruck.",
    "mittel",
    ["raas", "blutdruck", "falsch-aussage"]
  ),
  q(
    "bio-pool-374",
    "bio-kap2",
    "Welche Aussage zur Blut-Hirn-Schranke trifft NICHT zu?",
    [
      "Sie wird durch Tight Junctions zwischen Endothelzellen gebildet.",
      "Astrozyten-Endfüße umgeben die Kapillaren und tragen zur Barrierefunktion bei.",
      "Lipophile Substanzen können die Blut-Hirn-Schranke leichter überwinden.",
      "Glucose passiert die Blut-Hirn-Schranke über GLUT-1-Transporter.",
      "Die Blut-Hirn-Schranke ist im Bereich der zirkumventrikulären Organe besonders stark ausgeprägt.",
    ],
    4,
    "In den zirkumventrikulären Organen (z. B. Area postrema, Eminentia mediana) ist die Blut-Hirn-Schranke DURCHLÄSSIG (fenestriertes Endothel), nicht besonders stark ausgeprägt. Dies ermöglicht z. B. die Hormonfreisetzung ins Blut und die Detektion von Toxinen.",
    "schwer",
    ["blut-hirn-schranke", "zirkumventrikulär", "falsch-aussage"]
  ),
  q(
    "bio-pool-375",
    "bio-kap2",
    "Welche Aussage zur Erythropoese ist FALSCH?",
    [
      "Erythropoetin (EPO) stimuliert die Bildung roter Blutkörperchen.",
      "EPO wird hauptsächlich in der Niere produziert.",
      "Retikulozyten sind unreife Erythrozyten, die noch RNA enthalten.",
      "Eisen ist für die Hämoglobinsynthese essenziell.",
      "Reife Erythrozyten haben eine Lebensdauer von ca. 30 Tagen.",
    ],
    4,
    "Reife Erythrozyten haben eine Lebensdauer von ca. 120 TAGEN (nicht 30). Nach etwa 120 Tagen werden sie in der Milz und Leber abgebaut. Die Zahl 120 Tage ist ein häufig abgefragter Prüfungswert.",
    "leicht",
    ["erythropoese", "erythrozyten", "lebensdauer", "falsch-aussage"]
  ),
  q(
    "bio-pool-376",
    "bio-kap5",
    "Welche Aussage zur Antigenpräsentation ist FALSCH?",
    [
      "Dendritische Zellen sind die effizientesten antigenpräsentierenden Zellen.",
      "Makrophagen können ebenfalls Antigene präsentieren.",
      "B-Zellen präsentieren Antigene über MHC-II nach Aufnahme durch den B-Zell-Rezeptor.",
      "Erythrozyten sind wichtige antigenpräsentierende Zellen.",
      "Die Antigenpräsentation ist essenziell für die Aktivierung von T-Zellen.",
    ],
    3,
    "Erythrozyten sind KEINE antigenpräsentierenden Zellen. Sie besitzen keinen Zellkern und kein MHC-II auf ihrer Oberfläche. Professionelle APCs sind dendritische Zellen, Makrophagen und B-Zellen.",
    "mittel",
    ["antigenpräsentation", "erythrozyten", "falsch-aussage"]
  ),
  q(
    "bio-pool-377",
    "bio-kap5",
    "Welche Aussage zur Sepsis ist FALSCH?",
    [
      "Sepsis ist eine lebensbedrohliche Organdysfunktion durch eine fehlgeleitete Immunantwort auf eine Infektion.",
      "Typische Symptome sind Fieber, Tachykardie und Hypotonie.",
      "Sepsis wird häufig durch Bakterien verursacht.",
      "Bei der Sepsis kommt es zu einer kontrollierten, lokalen Immunantwort.",
      "Der septische Schock ist durch therapierefraktäre Hypotonie gekennzeichnet.",
    ],
    3,
    "Bei der Sepsis kommt es gerade NICHT zu einer kontrollierten, lokalen Immunantwort, sondern zu einer SYSTEMISCHEN, überschießenden Immunreaktion (SIRS). Die unkontrollierte Ausschüttung von Zytokinen (Zytokinsturm) führt zu Organversagen.",
    "schwer",
    ["sepsis", "immunantwort", "falsch-aussage"]
  ),
  q(
    "bio-pool-378",
    "bio-kap2",
    "Welche Aussage zum Gleichgewichtsorgan ist FALSCH?",
    [
      "Die drei Bogengänge detektieren Drehbeschleunigungen.",
      "Utriculus und Sacculus detektieren lineare Beschleunigungen.",
      "Die Otolithen (Statolithen) bestehen aus Calciumcarbonat-Kristallen.",
      "Das Gleichgewichtsorgan liegt im Mittelohr.",
      "Der Nervus vestibularis leitet die Gleichgewichtsinformationen zum Gehirn.",
    ],
    3,
    "Das Gleichgewichtsorgan liegt im INNENOHR (Labyrinth), nicht im Mittelohr. Das Mittelohr enthält die Gehörknöchelchen (Hammer, Amboss, Steigbügel) und dient der Schallverstärkung und -weiterleitung.",
    "schwer",
    ["gleichgewicht", "innenohr", "falsch-aussage"]
  ),
  q(
    "bio-pool-379",
    "bio-kap5",
    "Welche Aussage zur Bluttransfusion trifft NICHT zu?",
    [
      "Bei der AB0-Blutgruppeninkompatibilität kann es zur Hämolyse kommen.",
      "Blutgruppe 0 wird als Universalspender bezeichnet.",
      "Blutgruppe AB wird als Universalempfänger bezeichnet.",
      "Der Rhesusfaktor D ist das klinisch wichtigste Rhesusantigen.",
      "Anti-D-Antikörper sind natürlicherweise im Blut Rh-negativer Personen vorhanden.",
    ],
    4,
    "Anti-D-Antikörper sind NICHT natürlicherweise vorhanden. Sie werden erst nach Sensibilisierung gebildet (z. B. nach Rh-inkompatiler Transfusion oder Schwangerschaft). Im Gegensatz dazu sind Anti-A- und Anti-B-Antikörper (Isoagglutinine) natürlich vorhandene Antikörper.",
    "schwer",
    ["bluttransfusion", "rhesusfaktor", "falsch-aussage"]
  ),
  q(
    "bio-pool-380",
    "bio-kap5",
    "Welche Aussage zur Tumorimmunologie trifft NICHT zu?",
    [
      "Tumorzellen können Neoantigene auf ihrer Oberfläche exprimieren.",
      "Zytotoxische T-Zellen können Tumorzellen erkennen und abtöten.",
      "Tumorzellen können der Immunüberwachung durch MHC-I-Herunterregulation entgehen.",
      "Checkpoint-Inhibitoren (z. B. Anti-PD-1) verstärken die Antitumor-Immunantwort.",
      "Das Immunsystem spielt keine Rolle bei der Kontrolle von Tumorwachstum.",
    ],
    4,
    "Das Immunsystem spielt eine WICHTIGE Rolle bei der Tumorkontrolle (Immunosurveillance). Das zeigt sich u. a. daran, dass Immunsupprimierte ein erhöhtes Krebsrisiko haben. Die Immuntherapie mit Checkpoint-Inhibitoren nutzt gezielt die Antitumor-Immunantwort.",
    "schwer",
    ["tumorimmunologie", "immunsurveillance", "falsch-aussage"]
  ),
];
