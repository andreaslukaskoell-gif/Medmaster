/**
 * Weitere TV-Übungstexte (tv-ueb-16 bis tv-ueb-40) – gleiches Vorbild.
 * Format: 5 Optionen A–E, 1 Punkt pro richtige Antwort.
 */
import type { TVText } from "./kffTextverstaendnis";

const topics: {
  title: string;
  topic: string;
  difficulty: 1 | 2;
  text: string;
  q1: string;
  q1opts: string[];
  q1cor: number;
  q1exp: string;
  q2: string;
  q2opts: string[];
  q2cor: number;
  q2exp: string;
}[] = [
  {
    title: "Glykolyse",
    topic: "Biochemie",
    difficulty: 2,
    text: `Die Glykolyse ist der Abbau von Glukose zu Pyruvat und läuft im Zytosol nahezu aller Zellen ab. In zehn Schritten wird eine Glukosemolekül unter Netto-Gewinn von zwei ATP und zwei NADH zu zwei Molekülen Pyruvat umgesetzt. Die Glykolyse benötigt keinen Sauerstoff und ist der zentrale Weg zur Energiegewinnung in anaeroben Zellen sowie der erste Schritt der aeroben Atmung.

Key-Enzyme sind unter anderem die Hexokinase (erster Schritt), die Phosphofructokinase (geschwindigkeitsbestimmend) und die Pyruvatkinase. Bei Sauerstoffmangel wird Pyruvat zu Lactat reduziert (Milchsäuregärung), wobei NADH zu NAD+ regeneriert wird. Unter aeroben Bedingungen wird Pyruvat in die Mitochondrien transportiert und dort weiter verstoffwechselt.

Die Glykolyse wird durch Hormone wie Insulin und Glucagon sowie durch den Energiestatus der Zelle reguliert. Bei starkem Training kann die Lactatbildung in der Muskulatur zu Übersäuerung und Ermüdung beitragen.`,
    q1: "Welche der Aussagen zur Glykolyse ist/sind richtig? (1) Sie läuft im Zytosol ab. (2) Sie benötigt Sauerstoff. (3) Es entstehen netto zwei ATP pro Glukose. (4) Pyruvat kann zu Lactat reduziert werden.",
    q1opts: [
      "1., 3. und 4. sind richtig.",
      "Nur 2. ist richtig.",
      "Alle sind richtig.",
      "1. und 2. sind richtig.",
      "2. und 4. sind richtig.",
    ],
    q1cor: 0,
    q1exp:
      "Zytosol, netto 2 ATP und Lactatbildung werden genannt; die Glykolyse benötigt keinen Sauerstoff.",
    q2: "Was wird im Text über die Regulation der Glykolyse gesagt?",
    q2opts: [
      "Sie wird nicht reguliert.",
      "Insulin und Glucagon sowie der Energiestatus der Zelle beeinflussen sie.",
      "Nur Lactat reguliert sie.",
      "Sie wird nur im Gehirn reguliert.",
      "Regulation wird im Text nicht erwähnt.",
    ],
    q2cor: 1,
    q2exp: "Der Text nennt Insulin, Glucagon und den Energiestatus der Zelle.",
  },
  {
    title: "Schilddrüsenhormone",
    topic: "Physiologie",
    difficulty: 2,
    text: `Die Schilddrüse produziert die jodhaltigen Hormone Trijodthyronin (T3) und Thyroxin (T4). T4 wird in den Zielgeweben zu dem wirksameren T3 umgewandelt. Die Ausschüttung wird über die Hypophyse und den Hypothalamus gesteuert: TRH aus dem Hypothalamus stimuliert die Freisetzung von TSH aus der Hypophyse, TSH regt die Schilddrüse zur Hormonbildung an. Steigen die Schilddrüsenhormone im Blut, wird TRH und TSH gehemmt (negative Rückkopplung).

Schilddrüsenhormone steigern den Grundumsatz, beeinflussen Wachstum und Entwicklung, insbesondere des Nervensystems, und wirken auf Herzfrequenz und Wärmehaushalt. Ein Mangel in der Kindheit kann zu Kretinismus führen; beim Erwachsenen zu Müdigkeit, Kälteempfindlichkeit und Gewichtszunahme. Überschuss führt zu Unruhe, Gewichtsverlust und Wärmeintoleranz.

Jodmangel ist weltweit eine häufige Ursache von Schilddrüsenvergrößerung (Kropf). Die Bestimmung von TSH und freiem T3/T4 im Blut ist Standard in der Schilddrüsendiagnostik.`,
    q1: "Welche der Aussagen zu Schilddrüsenhormonen ist/sind richtig? (1) T4 wird in den Zielgeweben zu T3 umgewandelt. (2) TSH stammt aus der Hypophyse. (3) Hohe Schilddrüsenhormone hemmen TRH und TSH. (4) Schilddrüsenhormone senken den Grundumsatz.",
    q1opts: [
      "1., 2. und 3. sind richtig.",
      "Nur 4. ist richtig.",
      "Alle sind richtig.",
      "2. und 4. sind richtig.",
      "1. und 3. sind richtig.",
    ],
    q1cor: 0,
    q1exp:
      "T4 zu T3, TSH aus Hypophyse und negative Rückkopplung werden genannt; die Hormone steigern den Grundumsatz.",
    q2: "Was wird im Text über Jodmangel gesagt?",
    q2opts: [
      "Jodmangel spielt keine Rolle.",
      "Jodmangel ist eine häufige Ursache von Kropf (Schilddrüsenvergrößerung).",
      "Jodmangel betrifft nur Kinder.",
      "Jod wird im Text nicht erwähnt.",
      "Jodmangel erhöht immer T3 und T4.",
    ],
    q2cor: 1,
    q2exp: "Der Text nennt Jodmangel als häufige Ursache von Kropf.",
  },
  {
    title: "Viren – Aufbau und Vermehrung",
    topic: "Mikrobiologie",
    difficulty: 2,
    text: `Viren bestehen aus Erbmaterial (DNA oder RNA), umgeben von einer Proteinhülle (Kapsid); manche besitzen zusätzlich eine Lipidmembran (Envelope). Sie haben keinen eigenen Stoffwechsel und keine Ribosomen und sind auf Wirtszellen angewiesen. Die Vermehrung erfolgt durch Anheftung an Rezeptoren der Wirtszelle, Einschleusen des Erbmaterials und Nutzung der zellulären Maschinerie zur Synthese von Virusproteinen und zur Vervielfältigung der Virusnukleinsäure.

Nach der Assemblierung neuer Viruspartikel werden diese freigesetzt – bei behüllten Viren oft durch Knospung aus der Zellmembran. Viren sind artspezifisch oder gewebespezifisch; die Rezeptorbindung bestimmt den Wirt. Antivirale Medikamente zielen oft auf virus-spezifische Enzyme wie Reverse Transkriptase oder Protease ab.

Impfungen können die Bildung neutralisierender Antikörper und T-Zell-Antworten anregen und so vor Infektion oder schwerem Verlauf schützen. Einige Viren (z. B. HIV, Herpesviren) integrieren ihre Erbinformation in das Wirtsgenom und können latent persistieren.`,
    q1: "Welche der Aussagen zu Viren ist/sind richtig? (1) Sie haben keinen eigenen Stoffwechsel. (2) Sie bestehen aus Erbmaterial und Kapsid. (3) Sie vermehren sich unabhängig von Wirtszellen. (4) Manche Viren besitzen eine Lipidmembran (Envelope).",
    q1opts: [
      "1., 2. und 4. sind richtig.",
      "Nur 3. ist richtig.",
      "Alle sind richtig.",
      "2. und 3. sind richtig.",
      "1. und 4. sind richtig.",
    ],
    q1cor: 0,
    q1exp:
      "Kein Stoffwechsel, Aufbau aus Erbmaterial/Kapsid und Envelope werden genannt; Vermehrung ist abhängig von Wirtszellen.",
    q2: "Was wird im Text über antivirale Medikamente gesagt?",
    q2opts: [
      "Sie wirken wie Antibiotika gegen Bakterien.",
      "Sie können auf virus-spezifische Enzyme wie Reverse Transkriptase oder Protease abzielen.",
      "Es gibt keine antiviralen Medikamente.",
      "Sie zerstören immer die Wirtszelle.",
      "Antivirale Medikamente werden im Text nicht erwähnt.",
    ],
    q2cor: 1,
    q2exp:
      "Der Text nennt virus-spezifische Enzyme wie Reverse Transkriptase und Protease als Angriffspunkte.",
  },
  {
    title: "Ökologie – Nahrungsnetze",
    topic: "Ökologie",
    difficulty: 1,
    text: `In einem Ökosystem sind die Organismen durch Nahrungsbeziehungen verbunden: Produzenten (vor allem Pflanzen, Algen) bauen mit Licht oder chemischer Energie organische Substanz auf; Konsumenten fressen Produzenten oder andere Konsumenten; Destruenten zersetzen tote Biomasse und setzen Nährstoffe frei. Die Gesamtheit der Nahrungsketten bildet ein Nahrungsnetz, da viele Arten mehrere Beute- oder Fressfeinde haben.

Energie fließt linear durch die Trophieebenen und geht dabei als Wärme verloren; typischerweise werden nur etwa 10 Prozent der Energie von einer Stufe zur nächsten weitergegeben. Stoffe (Kohlenstoff, Stickstoff, Phosphor) zirkulieren in biogeochemischen Kreisläufen. Störungen – etwa das Verschwinden einer Schlüsselart – können das Gleichgewicht verschieben und Kaskadeneffekte auslösen.

Der Mensch greift durch Nutzung von Flächen, Einleitung von Nährstoffen oder Klimawandel in Ökosysteme ein. Artenschutz und nachhaltige Nutzung zielen darauf ab, Ökosystemleistungen und Biodiversität zu erhalten.`,
    q1: "Welche der Aussagen zu Nahrungsnetzen ist/sind richtig? (1) Produzenten bauen organische Substanz auf. (2) Energie wird zu etwa 90 Prozent von einer Trophieebene zur nächsten weitergegeben. (3) Destruenten zersetzen tote Biomasse. (4) Stoffe zirkulieren in Kreisläufen.",
    q1opts: [
      "1., 3. und 4. sind richtig.",
      "Nur 2. ist richtig.",
      "Alle sind richtig.",
      "2. und 4. sind richtig.",
      "1. und 3. sind richtig.",
    ],
    q1cor: 0,
    q1exp:
      "Produzenten, Destruenten und Stoffkreisläufe werden genannt; nur etwa 10 % Energie werden weitergegeben.",
    q2: "Was wird im Text über Störungen im Ökosystem gesagt?",
    q2opts: [
      "Störungen haben keine Auswirkungen.",
      "Das Verschwinden einer Schlüsselart kann Kaskadeneffekte auslösen.",
      "Nur der Mensch stört Ökosysteme.",
      "Störungen werden im Text nicht erwähnt.",
      "Energie zirkuliert wie Stoffe.",
    ],
    q2cor: 1,
    q2exp: "Der Text nennt das Verschwinden einer Schlüsselart und Kaskadeneffekte.",
  },
  {
    title: "Osmose und Diffusion",
    topic: "Zellbiologie",
    difficulty: 1,
    text: `Diffusion ist die passive Bewegung von Teilchen entlang eines Konzentrationsgefälles, bis ein Gleichgewicht erreicht ist. Sie benötigt keine Energie und erfolgt in Flüssigkeiten und Gasen. In Zellen können kleine ungeladene Moleküle (z. B. Sauerstoff, CO2) durch die Lipiddoppelschicht der Membran diffundieren; für polare oder geladene Teilchen sind oft Kanäle oder Transporter nötig.

Osmose ist die Diffusion von Wasser durch eine semipermeable Membran: Wasser strömt von der Seite mit niedrigerer Konzentration gelöster Stoffe zur Seite mit höherer Konzentration, bis die osmotischen Drücke ausgeglichen sind. In verdünnter Umgebung nehmen Zellen Wasser auf und können anschwellen; in konzentrierter Umgebung geben sie Wasser ab und schrumpfen. Zellen regulieren ihren Volumenhaushalt durch Ionenpumpen und osmotisch aktive Substanzen.

In der Medizin spielen isotonische Lösungen eine Rolle – sie haben dieselbe osmotische Konzentration wie das Blut und führen bei Infusion nicht zur Schädigung von Erythrozyten.`,
    q1: "Welche der Aussagen zu Diffusion und Osmose ist/sind richtig? (1) Diffusion erfolgt entlang eines Konzentrationsgefälles. (2) Osmose ist die Diffusion von Wasser durch eine semipermeable Membran. (3) Bei Osmose strömt Wasser zur Seite mit höherer Konzentration gelöster Stoffe. (4) Diffusion benötigt ständig Energie.",
    q1opts: [
      "1., 2. und 3. sind richtig.",
      "Nur 4. ist richtig.",
      "Alle sind richtig.",
      "2. und 4. sind richtig.",
      "1. und 3. sind richtig.",
    ],
    q1cor: 0,
    q1exp:
      "Konzentrationsgefälle, Osmose als Wasserdiffusion und Richtung zum höheren Konzentrat werden genannt; Diffusion benötigt keine Energie.",
    q2: "Was wird im Text über isotonische Lösungen gesagt?",
    q2opts: [
      "Sie haben eine höhere Konzentration als Blut.",
      "Sie haben dieselbe osmotische Konzentration wie das Blut und schädigen bei Infusion Erythrozyten nicht.",
      "Isotonie wird im Text nicht erwähnt.",
      "Sie werden nur in der Forschung verwendet.",
      "Isotonische Lösungen entziehen Zellen Wasser.",
    ],
    q2cor: 1,
    q2exp:
      "Der Text nennt dieselbe osmotische Konzentration wie Blut und keine Schädigung von Erythrozyten bei Infusion.",
  },
  {
    title: "Proteinbiosynthese",
    topic: "Genetik",
    difficulty: 2,
    text: `Die Proteinbiosynthese umfasst Transkription (Kopie der DNA in mRNA im Zellkern) und Translation (Übersetzung der mRNA in eine Aminosäuresequenz an den Ribosomen). Bei der Transkription wird ein DNA-Strang als Matrize verwendet; die RNA-Polymerase synthetisiert die mRNA in 5'-3'-Richtung. Nach Prozessierung (z. B. Spleißen, Kappen) gelangt die mRNA ins Zytoplasma.

An den Ribosomen wird die mRNA von Transfer-RNA (tRNA) Molekülen abgelesen: Jede tRNA bringt die zur Codon-Sequenz passende Aminosäure; die Aminosäuren werden zu einer Kette verknüpft. Der genetische Code ist nahezu universell – dieselben Codons kodieren in den meisten Organismen für dieselbe Aminosäure. Ein Startcodon (AUG) initiiert die Translation, Stoppcodons beenden sie.

Mutationen in der DNA können die Aminosäuresequenz verändern und so die Proteinfunktion beeinträchtigen. Viele Antibiotika hemmen die bakterielle Proteinbiosynthese an den Ribosomen, ohne die menschlichen Ribosomen gleichermaßen zu treffen.`,
    q1: "Welche der Aussagen zur Proteinbiosynthese ist/sind richtig? (1) Die Transkription erzeugt mRNA. (2) Die Translation erfolgt an den Ribosomen. (3) tRNA bringt Aminosäuren zum Ribosom. (4) Der genetische Code ist nur bei Menschen gültig.",
    q1opts: [
      "1., 2. und 3. sind richtig.",
      "Nur 4. ist richtig.",
      "Alle sind richtig.",
      "2. und 4. sind richtig.",
      "1. und 3. sind richtig.",
    ],
    q1cor: 0,
    q1exp:
      "Transkription erzeugt mRNA, Translation an Ribosomen und tRNA werden genannt; der Code ist nahezu universell.",
    q2: "Was wird im Text über Antibiotika gesagt?",
    q2opts: [
      "Antibiotika hemmen die menschliche Proteinbiosynthese.",
      "Viele Antibiotika hemmen die bakterielle Proteinbiosynthese an den Ribosomen.",
      "Antibiotika werden im Text nicht erwähnt.",
      "Antibiotika verändern die DNA.",
      "Antibiotika wirken nur bei Viren.",
    ],
    q2cor: 1,
    q2exp:
      "Der Text nennt die Hemmung der bakteriellen Proteinbiosynthese an Ribosomen durch viele Antibiotika.",
  },
  {
    title: "Herz-Kreislauf-System",
    topic: "Physiologie",
    difficulty: 1,
    text: `Das Herz pumpt das Blut durch zwei Kreisläufe: den Lungenkreislauf (rechte Herzhälfte – Lunge – linke Herzhälfte) und den Körperkreislauf (linke Herzhälfte – Organe – rechte Herzhälfte). Die rechte Kammer fördert sauerstoffarmes Blut in die Lunge, die linke Kammer sauerstoffreiches Blut in die Aorta und damit in den Körper. Herzklappen sorgen für die Flussrichtung.

Der Herzschlag wird durch den Sinusknoten im rechten Vorhof initiiert; die Erregung breitet sich über spezialisierte Leitungsbahnen aus. Sympathikus und Parasympathikus sowie Hormone beeinflussen Frequenz und Kontraktionskraft. Der Blutdruck entsteht durch die Pumpleistung des Herzens und den Widerstand der Gefäße; er wird in Systole (Auswurfphase) und Diastole (Füllungsphase) gemessen.

Erkrankungen wie Koronare Herzkrankheit, Herzinsuffizienz oder Bluthochdruck gehören zu den häufigsten Todesursachen in Industrieländern. Regelmäßige körperliche Aktivität und eine ausgewogene Ernährung wirken präventiv.`,
    q1: "Welche der Aussagen zum Herz-Kreislauf-System ist/sind richtig? (1) Die linke Kammer pumpt Blut in den Körperkreislauf. (2) Der Sinusknoten liegt im rechten Vorhof. (3) Herzklappen sichern die Flussrichtung. (4) Der Lungenkreislauf führt sauerstoffreiches Blut zur Lunge.",
    q1opts: [
      "1., 2. und 3. sind richtig.",
      "Nur 4. ist richtig.",
      "Alle sind richtig.",
      "2. und 4. sind richtig.",
      "1. und 3. sind richtig.",
    ],
    q1cor: 0,
    q1exp:
      "Linke Kammer, Sinusknoten und Klappen werden genannt; der Lungenkreislauf führt sauerstoffarmes Blut zur Lunge.",
    q2: "Was wird im Text über Blutdruck gesagt?",
    q2opts: [
      "Blutdruck wird nicht erwähnt.",
      "Blutdruck entsteht durch Pumpleistung und Gefäßwiderstand; er wird in Systole und Diastole gemessen.",
      "Nur die Systole ist relevant.",
      "Blutdruck ist nur in der Lunge wichtig.",
      "Diastole ist die Auswurfphase.",
    ],
    q2cor: 1,
    q2exp: "Der Text nennt Pumpleistung, Gefäßwiderstand sowie Systole und Diastole.",
  },
  {
    title: "Keimblätter und Embryonalentwicklung",
    topic: "Embryologie",
    difficulty: 2,
    text: `In der frühen Embryonalentwicklung entstehen aus der Blastula durch Gastrulation die drei Keimblätter: Ektoderm (außen), Mesoderm (Mitte) und Entoderm (innen). Aus dem Ektoderm gehen unter anderem Epidermis, Nervensystem und Sinnesorgane hervor. Das Mesoderm bildet Muskulatur, Skelett, Kreislaufsystem, Nieren und Teile der Geschlechtsorgane. Aus dem Entoderm entwickeln sich die Auskleidung des Verdauungstrakts, Leber, Bauchspeicheldrüse sowie die Atemwege.

Die Ausbildung der Körperachse und die räumliche Gliederung werden durch Signalstoffe und Genkaskaden gesteuert. Störungen in dieser Phase können zu Fehlbildungen führen. Die Plazenta versorgt den Embryo mit Nährstoffen und Sauerstoff und entsorgt Abfallprodukte; sie bildet auch Hormone, die die Schwangerschaft aufrechterhalten.

Die Kenntnis der Keimblattabstammung hilft bei der Einordnung von Fehlbildungen und Tumoren. Viele angeborene Syndrome lassen sich auf Defekte in bestimmten Entwicklungsphasen zurückführen.`,
    q1: "Welche der Aussagen zu den Keimblättern ist/sind richtig? (1) Aus dem Ektoderm entstehen unter anderem Nervensystem und Epidermis. (2) Das Mesoderm bildet Muskulatur und Skelett. (3) Das Entoderm liefert die Auskleidung des Verdauungstrakts. (4) Die Keimblätter entstehen vor der Gastrulation.",
    q1opts: [
      "1., 2. und 3. sind richtig.",
      "Nur 4. ist richtig.",
      "Alle sind richtig.",
      "2. und 4. sind richtig.",
      "1. und 3. sind richtig.",
    ],
    q1cor: 0,
    q1exp:
      "Ektoderm (Nervensystem, Epidermis), Mesoderm (Muskulatur, Skelett) und Entoderm (Verdauungstrakt) werden genannt; die Keimblätter entstehen durch Gastrulation.",
    q2: "Was wird im Text über die Plazenta gesagt?",
    q2opts: [
      "Die Plazenta wird nicht erwähnt.",
      "Sie versorgt den Embryo mit Nährstoffen und Sauerstoff und bildet Hormone.",
      "Sie entsteht aus dem Ektoderm.",
      "Sie hat keine hormonelle Funktion.",
      "Sie ersetzt die Keimblätter.",
    ],
    q2cor: 1,
    q2exp: "Der Text nennt Versorgung mit Nährstoffen und Sauerstoff sowie Hormonbildung.",
  },
  {
    title: "Blutgruppen und Rhesusfaktor",
    topic: "Physiologie",
    difficulty: 1,
    text: `Die wichtigsten Blutgruppensysteme sind das AB0-System und der Rhesusfaktor. Beim AB0-System werden die Antigene A und B auf der Oberfläche der Erythrozyten bestimmt; die Blutgruppe kann A, B, AB oder 0 sein. Im Plasma finden sich Antikörper gegen die Antigene, die die Person nicht besitzt: Bei Blutgruppe A sind Anti-B-Antikörper vorhanden, bei Blutgruppe B Anti-A, bei AB keine gegen A oder B, bei 0 beide.

Der Rhesusfaktor (D-Antigen) ist bei den meisten Menschen positiv (Rh+); Rh-negative Personen bilden nach Kontakt mit Rh-positivem Blut Anti-D-Antikörper. Das ist besonders in der Schwangerschaft relevant: Eine Rh-negative Mutter mit Rh-positivem Kind kann Antikörper bilden, die bei einer weiteren Schwangerschaft die Erythrozyten des Kindes zerstören können (Morbus haemolyticus). Durch Gabe von Anti-D-Immunglobulin kann dies verhindert werden.

Bei Bluttransfusionen müssen Spender und Empfänger hinsichtlich AB0 und Rhesus kompatibel sein, um schwere Abwehrreaktionen zu vermeiden.`,
    q1: "Welche der Aussagen zu Blutgruppen ist/sind richtig? (1) Bei Blutgruppe 0 sind weder A- noch B-Antigene auf den Erythrozyten. (2) Bei Blutgruppe AB hat man keine Anti-A- und keine Anti-B-Antikörper. (3) Der Rhesusfaktor bezieht sich auf das D-Antigen. (4) Rh-negative Personen können nach Kontakt Anti-D bilden.",
    q1opts: [
      "Alle sind richtig.",
      "Nur 2. ist richtig.",
      "1., 2. und 4. sind richtig.",
      "2. und 3. sind richtig.",
      "1. und 3. sind richtig.",
    ],
    q1cor: 0,
    q1exp:
      "Blutgruppe 0 (keine A/B-Antigene), AB (keine Antikörper), Rhesus D-Antigen und Anti-D-Bildung werden genannt.",
    q2: "Was wird im Text über die Schwangerschaft bei Rhesus-Unverträglichkeit gesagt?",
    q2opts: [
      "Es gibt kein Risiko.",
      "Eine Rh-negative Mutter kann bei Rh-positivem Kind Antikörper bilden; Anti-D-Immunglobulin kann das verhindern.",
      "Nur die erste Schwangerschaft ist betroffen.",
      "Rhesus wird in der Schwangerschaft nicht erwähnt.",
      "Das Kind ist immer Rh-negativ.",
    ],
    q2cor: 1,
    q2exp:
      "Der Text beschreibt Antikörperbildung bei Rh-negativer Mutter und die Prophylaxe mit Anti-D-Immunglobulin.",
  },
  {
    title: "Verdauungsenzyme",
    topic: "Physiologie",
    difficulty: 2,
    text: `Die Verdauung baut Nahrungsmittel in resorbierbare Einheiten ab. Im Mund beginnt die Alpha-Amylase mit dem Abbau von Stärke zu Maltose. Im Magen sezernieren Belegzellen Salzsäure und Hauptzellen Pepsinogen, das zu Pepsin aktiviert wird und Proteine spaltet. Die Magensäure tötet viele Keime ab und denaturiert Proteine.

Im Dünndarm wirken Pankreassekret (Amylase, Lipase, Proteasen wie Trypsin) und Gallenflüssigkeit (Emulgierung von Fetten). Die Bürstensaummembran der Enterozyten trägt Disaccharidasen und Peptidasen; hier entstehen die letzten Spaltprodukte (Monosaccharide, Aminosäuren, Fettsäuren), die ins Blut oder in die Lymphe aufgenommen werden. Die Regulation erfolgt durch Nerven und Hormone (z. B. Gastrin, Sekretin, Cholecystokinin).

Enzymmangel oder -defekte können zu Malabsorption führen. Laktoseintoleranz beruht auf einem Mangel an Laktase im Dünndarm.`,
    q1: "Welche der Aussagen zu Verdauungsenzymen ist/sind richtig? (1) Pepsin wird im Magen aus Pepsinogen gebildet und spaltet Proteine. (2) Pankreassekret enthält Amylase, Lipase und Proteasen. (3) Die Gallenflüssigkeit emulgiert Fette. (4) Die Alpha-Amylase wirkt nur im Dünndarm.",
    q1opts: [
      "1., 2. und 3. sind richtig.",
      "Nur 4. ist richtig.",
      "Alle sind richtig.",
      "2. und 4. sind richtig.",
      "1. und 3. sind richtig.",
    ],
    q1cor: 0,
    q1exp:
      "Pepsin, Pankreassekret (Amylase, Lipase, Proteasen) und Gallenflüssigkeit (Emulgierung) werden genannt; Alpha-Amylase wirkt bereits im Mund.",
    q2: "Was wird im Text über Laktoseintoleranz gesagt?",
    q2opts: [
      "Sie wird nicht erwähnt.",
      "Sie beruht auf einem Mangel an Laktase im Dünndarm.",
      "Sie betrifft nur Kinder.",
      "Sie wird durch Pepsinmangel verursacht.",
      "Sie betrifft die Magensäure.",
    ],
    q2cor: 1,
    q2exp: "Der Text nennt Laktase-Mangel im Dünndarm als Ursache.",
  },
  {
    title: "Evolution durch natürliche Selektion",
    topic: "Evolution",
    difficulty: 2,
    text: `Charles Darwin und Alfred Russel Wallace formulierten die Theorie der Evolution durch natürliche Selektion: Individuen einer Population unterscheiden sich in vererbbaren Merkmalen; Nachkommen entstehen in großer Zahl, aber Ressourcen sind begrenzt; daher überleben und reproduzieren sich jene Individuen tendenziell besser, deren Merkmale unter den gegebenen Bedingungen vorteilhaft sind. Diese Merkmale häufen sich in der Population an, ungünstige werden seltener – die Art „passt sich an“.

Die genetische Variation entsteht durch Mutationen und bei sexueller Fortpflanzung durch Rekombination. Selektion wirkt auf den Phänotyp, der vom Genotyp und von Umwelteinflüssen abhängt. Neben der gerichteten Selektion gibt es stabilisierende Selektion (Extremwerte werden benachteiligt) und disruptive Selektion (mittlere Werte werden benachteiligt). Artbildung kann entstehen, wenn Populationen räumlich oder reproduktiv getrennt werden und sich genetisch auseinanderentwickeln.

Die Evolutionstheorie vereint Erkenntnisse aus Genetik, Paläontologie und Ökologie. Sie erklärt die Anpassung von Organismen an ihre Umwelt und die Verwandtschaft aller Lebewesen.`,
    q1: "Welche der Aussagen zur natürlichen Selektion ist/sind richtig? (1) Individuen unterscheiden sich in vererbbaren Merkmalen. (2) Ressourcen sind begrenzt. (3) Vorteilhafte Merkmale häufen sich an. (4) Selektion wirkt direkt auf den Genotyp ohne Umweg über den Phänotyp.",
    q1opts: [
      "1., 2. und 3. sind richtig.",
      "Nur 4. ist richtig.",
      "Alle sind richtig.",
      "2. und 4. sind richtig.",
      "1. und 3. sind richtig.",
    ],
    q1cor: 0,
    q1exp:
      "Vererbbare Variation, begrenzte Ressourcen und Anreicherung vorteilhafter Merkmale werden genannt; Selektion wirkt auf den Phänotyp.",
    q2: "Was wird im Text über die Entstehung genetischer Variation gesagt?",
    q2opts: [
      "Es gibt keine Variation.",
      "Variation entsteht durch Mutationen und bei sexueller Fortpflanzung durch Rekombination.",
      "Nur Mutationen spielen eine Rolle.",
      "Variation wird im Text nicht erwähnt.",
      "Nur die Umwelt erzeugt Variation.",
    ],
    q2cor: 1,
    q2exp: "Der Text nennt Mutationen und Rekombination bei sexueller Fortpflanzung.",
  },
  {
    title: "Schlaf und Gedächtniskonsolidierung",
    topic: "Neurobiologie",
    difficulty: 2,
    text: `Schlaf ist für die Erholung und die Konsolidierung von Gedächtnisinhalten wichtig. Man unterscheidet REM-Schlaf (mit raschen Augenbewegungen und lebhaften Träumen) und Non-REM-Schlaf mit verschiedenen Tiefenstadien. Im Tiefschlaf werden Wachstumshormone ausgeschüttet und körperliche Reparaturprozesse gefördert. Im REM-Schlaf und in bestimmten Non-REM-Phasen werden Erlebnisse und Gelerntes verarbeitet und ins Langzeitgedächtnis überführt.

Experimente zeigen, dass Probanden, die nach dem Lernen schlafen, Gelerntes besser behalten als solche, die wach bleiben. Dabei scheinen unterschiedliche Schlafphasen für deklaratives (Fakten, Ereignisse) und prozedurales (Fertigkeiten) Gedächtnis relevant zu sein. Chronischer Schlafmangel beeinträchtigt Konzentration, Stimmung und langfristig die Gesundheit.

Die genauen Mechanismen der Gedächtniskonsolidierung im Schlaf sind noch nicht vollständig geklärt; beteiligt sind unter anderem die Reaktivierung von Nervenmustern und die Stärkung synaptischer Verbindungen.`,
    q1: "Welche der Aussagen zu Schlaf und Gedächtnis ist/sind richtig? (1) Schlaf unterstützt die Konsolidierung von Gedächtnisinhalten. (2) REM-Schlaf ist durch rasche Augenbewegungen gekennzeichnet. (3) Nach dem Lernen schlafen verbessert die Behaltensleistung. (4) Chronischer Schlafmangel hat keine Auswirkungen auf das Gedächtnis.",
    q1opts: [
      "1., 2. und 3. sind richtig.",
      "Nur 4. ist richtig.",
      "Alle sind richtig.",
      "2. und 4. sind richtig.",
      "1. und 3. sind richtig.",
    ],
    q1cor: 0,
    q1exp:
      "Konsolidierung, REM mit Augenbewegungen und besseres Behalten nach Schlaf werden genannt; Schlafmangel beeinträchtigt.",
    q2: "Was wird im Text über den Tiefschlaf gesagt?",
    q2opts: [
      "Tiefschlaf wird nicht erwähnt.",
      "Im Tiefschlaf werden Wachstumshormone ausgeschüttet und Reparaturprozesse gefördert.",
      "Tiefschlaf ist nur bei Kindern wichtig.",
      "Im Tiefschlaf träumt man ausschließlich.",
      "Tiefschlaf verhindert Gedächtniskonsolidierung.",
    ],
    q2cor: 1,
    q2exp: "Der Text nennt Wachstumshormone und körperliche Reparaturprozesse im Tiefschlaf.",
  },
  {
    title: "Hormone der Bauchspeicheldrüse",
    topic: "Physiologie",
    difficulty: 2,
    text: `Die Bauchspeicheldrüse (Pankreas) hat exokrine und endokrine Funktionen. Die endokrinen Zellen liegen in den Langerhans-Inseln. Beta-Zellen sezernieren Insulin bei hohem Blutzucker: Insulin fördert die Aufnahme von Glukose in Muskel- und Fettzellen, hemmt die Glukoneogenese in der Leber und senkt so den Blutzuckerspiegel. Alpha-Zellen setzen Glucagon frei, vor allem bei niedrigem Blutzucker: Glucagon stimuliert den Abbau von Glykogen in der Leber und die Glukoneogenese und erhöht den Blutzucker.

Die Regulation von Insulin und Glucagon hält den Blutzucker in engen Grenzen. Bei Diabetes mellitus Typ 1 fehlt Insulin (autoimmune Zerstörung der Beta-Zellen); bei Typ 2 besteht eine Insulinresistenz der Zielzellen, oft bei Übergewicht. Unbehandelt führt Diabetes zu Gefäßschäden, Nieren- und Nervenschäden. Therapie umfasst Lebensstiländerung, orale Antidiabetika und/oder Insulin.

Weitere Hormone des Pankreas sind Somatostatin (hemmt unter anderem Insulin- und Glucagonfreisetzung) und pankreatisches Polypeptid.`,
    q1: "Welche der Aussagen zu Insulin und Glucagon ist/sind richtig? (1) Insulin senkt den Blutzuckerspiegel. (2) Glucagon wird bei niedrigem Blutzucker freigesetzt. (3) Insulin fördert die Glukoseaufnahme in Muskel- und Fettzellen. (4) Glucagon hemmt den Glykogenabbau in der Leber.",
    q1opts: [
      "1., 2. und 3. sind richtig.",
      "Nur 4. ist richtig.",
      "Alle sind richtig.",
      "2. und 4. sind richtig.",
      "1. und 3. sind richtig.",
    ],
    q1cor: 0,
    q1exp:
      "Insulin senkt Blutzucker und fördert Glukoseaufnahme; Glucagon bei niedrigem Blutzucker und stimuliert Glykogenabbau (nicht hemmt).",
    q2: "Was wird im Text über Diabetes Typ 1 gesagt?",
    q2opts: [
      "Typ 1 ist immer mit Übergewicht verbunden.",
      "Bei Typ 1 fehlt Insulin durch autoimmune Zerstörung der Beta-Zellen.",
      "Typ 1 wird nur mit Diät behandelt.",
      "Diabetes wird im Text nicht unterschieden.",
      "Typ 1 entsteht durch Glucagonmangel.",
    ],
    q2cor: 1,
    q2exp: "Der Text nennt fehlendes Insulin und autoimmune Zerstörung der Beta-Zellen bei Typ 1.",
  },
  {
    title: "Lymphatisches System",
    topic: "Physiologie",
    difficulty: 2,
    text: `Das lymphatische System umfasst Lymphgefäße, Lymphknoten, Milz, Thymus und lymphatisches Gewebe in Schleimhäuten (z. B. Tonsillen, Peyersche Plaques). Die Lymphe entsteht aus Gewebsflüssigkeit, die nicht über die Venen abtransportiert wird; sie wird in den Lymphkapillaren aufgenommen und fließt über größere Lymphgefäße schließlich in die Venen (Ductus thoracicus, rechter Lymphgang) zurück. Damit unterstützt das Lymphsystem den Flüssigkeitshaushalt und den Rücktransport von Eiweißen aus dem Gewebe.

Lymphknoten filtern die Lymphe und sind Orte, an denen Immunzellen (B- und T-Lymphozyten) mit Antigenen in Kontakt kommen. Bei Infektionen können sie anschwellen. Die Milz filtert altes Blut, speichert Blutplättchen und enthält lymphatisches Gewebe. Der Thymus ist für die Reifung von T-Zellen wichtig, vor allem in der Kindheit.

Metastasen mancher Tumoren breiten sich über die Lymphbahnen aus; daher werden bei Krebsoperationen oft regionäre Lymphknoten mit entfernt und untersucht.`,
    q1: "Welche der Aussagen zum lymphatischen System ist/sind richtig? (1) Lymphe fließt letztlich in Venen zurück. (2) Lymphknoten filtern die Lymphe und sind Orte der Immunantwort. (3) Der Thymus ist für die Reifung von T-Zellen wichtig. (4) Die Milz produziert alle Blutzellen.",
    q1opts: [
      "1., 2. und 3. sind richtig.",
      "Nur 4. ist richtig.",
      "Alle sind richtig.",
      "2. und 4. sind richtig.",
      "1. und 3. sind richtig.",
    ],
    q1cor: 0,
    q1exp:
      "Rückfluss in Venen, Lymphknoten (Filter, Immunantwort) und Thymus (T-Zellen) werden genannt; die Milz filtert und speichert, produziert nicht alle Blutzellen.",
    q2: "Was wird im Text über Tumoren und Lymphknoten gesagt?",
    q2opts: [
      "Tumoren breiten sich nie über Lymphbahnen aus.",
      "Metastasen können sich über Lymphbahnen ausbreiten; bei Krebsoperationen werden oft Lymphknoten mit entfernt.",
      "Lymphknoten werden bei Krebs nie entfernt.",
      "Tumoren werden im Text nicht erwähnt.",
      "Nur die Milz ist bei Krebs relevant.",
    ],
    q2cor: 1,
    q2exp:
      "Der Text nennt Lymphbahn-Metastasen und die Entfernung regionärer Lymphknoten bei Krebsoperationen.",
  },
  {
    title: "Immunologische Toleranz",
    topic: "Immunologie",
    difficulty: 2,
    text: `Das Immunsystem muss zwischen körpereigenen und körperfremden Strukturen unterscheiden. Toleranz gegenüber körpereigenen Antigenen entsteht während der Entwicklung: T-Zellen, die stark auf Selbstantigene reagieren, werden im Thymus durch negative Selektion eliminiert (zentrale Toleranz). In den peripheren Geweben sorgen regulatorische T-Zellen und andere Mechanismen dafür, dass verbleibende selbstreaktive Zellen nicht aktiv werden (periphere Toleranz).

Eine Durchbrechung der Toleranz kann zu Autoimmunerkrankungen führen, bei denen das Immunsystem körpereigenes Gewebe angreift – z. B. Typ-1-Diabetes, Multiple Sklerose oder rheumatoide Arthritis. Umgekehrt müssen Tumorzellen oder persistierende Erreger erkannt werden; manche Erreger und Tumoren entziehen sich der Immunantwort durch Toleranzmechanismen oder Immunescape.

Die Erforschung von Toleranz und Autoimmunität hat zu gezielten Therapien geführt, die entweder die überschießende Immunantwort dämpfen oder die Immunantwort gegen Tumoren verstärken.`,
    q1: "Welche der Aussagen zur immunologischen Toleranz ist/sind richtig? (1) Im Thymus werden stark selbstreaktive T-Zellen eliminiert. (2) Regulatorische T-Zellen tragen zur peripheren Toleranz bei. (3) Autoimmunerkrankungen können bei Durchbrechung der Toleranz entstehen. (4) Toleranz betrifft nur B-Zellen.",
    q1opts: [
      "1., 2. und 3. sind richtig.",
      "Nur 4. ist richtig.",
      "Alle sind richtig.",
      "2. und 4. sind richtig.",
      "1. und 3. sind richtig.",
    ],
    q1cor: 0,
    q1exp:
      "Thymus-Elimination, regulatorische T-Zellen und Autoimmunität werden genannt; Toleranz betrifft auch T-Zellen.",
    q2: "Was wird im Text über Tumoren gesagt?",
    q2opts: [
      "Tumoren werden nicht erwähnt.",
      "Tumorzellen können sich durch Toleranz oder Immunescape der Immunantwort entziehen.",
      "Tumoren lösen nie eine Immunantwort aus.",
      "Nur B-Zellen bekämpfen Tumoren.",
      "Toleranz schützt nicht vor Tumoren.",
    ],
    q2cor: 1,
    q2exp: "Der Text nennt Immunescape und Toleranzmechanismen bei Tumoren.",
  },
  {
    title: "Atmungskette und oxidative Phosphorylierung",
    topic: "Biochemie",
    difficulty: 2,
    text: `In den Mitochondrien läuft die Atmungskette ab: Die Reduktionsäquivalente NADH und FADH2 aus Glykolyse, Pyruvatabbau und Citratzyklus geben Elektronen an einen Redox-Cascade ab (Komplex I bis IV). Der Elektronentransport ist mit einem Protonentransport aus der Matrix in den Intermembranraum verbunden – es entsteht ein elektrochemischer Gradient.

Die ATP-Synthase nutzt den Rückfluss der Protonen in die Matrix zur Synthese von ATP aus ADP und Phosphat (oxidative Phosphorylierung). Pro NADH werden etwa drei ATP gebildet, pro FADH2 etwa zwei. Sauerstoff ist der finale Elektronenakzeptor und wird zu Wasser reduziert. Ohne Sauerstoff kommt die Kette zum Erliegen; die Zelle weicht auf anaerobe Wege (z. B. Glykolyse mit Lactatbildung) aus.

Verschiedene Gifte blockieren einzelne Komplexe der Atmungskette (z. B. Cyanid am Komplex IV). Defekte der mitochondrialen Atmungskette führen zu schweren Stoffwechselerkrankungen.`,
    q1: "Welche der Aussagen zur Atmungskette ist/sind richtig? (1) Sie läuft in den Mitochondrien ab. (2) Sauerstoff ist der finale Elektronenakzeptor. (3) Die ATP-Synthase nutzt den Protonengradienten. (4) Ohne Sauerstoff kann die Kette unverändert weiterlaufen.",
    q1opts: [
      "1., 2. und 3. sind richtig.",
      "Nur 4. ist richtig.",
      "Alle sind richtig.",
      "2. und 4. sind richtig.",
      "1. und 3. sind richtig.",
    ],
    q1cor: 0,
    q1exp:
      "Mitochondrien, Sauerstoff als Akzeptor und ATP-Synthase werden genannt; ohne Sauerstoff stoppt die Kette.",
    q2: "Was wird im Text über Gifte gesagt?",
    q2opts: [
      "Gifte werden nicht erwähnt.",
      "Bestimmte Gifte können einzelne Komplexe der Atmungskette blockieren (z. B. Cyanid am Komplex IV).",
      "Gifte wirken nur außerhalb der Zelle.",
      "Nur die ATP-Synthase kann blockiert werden.",
      "Cyanid aktiviert die Atmungskette.",
    ],
    q2cor: 1,
    q2exp: "Der Text nennt Blockade einzelner Komplexe, z. B. Cyanid am Komplex IV.",
  },
  {
    title: "Nervenleitung und Aktionspotenzial",
    topic: "Neurobiologie",
    difficulty: 2,
    text: `Nervenzellen leiten Erregung in Form von Aktionspotenzialen weiter. Ein Aktionspotenzial entsteht, wenn durch einen Reiz das Membranpotenzial einen Schwellenwert überschreitet: Spannungsgesteuerte Natriumkanäle öffnen sich, Natrium strömt ein, das Potenzial wird positiv (Depolarisation). Anschließend inaktivieren die Natriumkanäle und Kaliumkanäle öffnen sich; Kalium strömt aus, das Potenzial repolarisiert und unterschreitet kurz den Ruhewert (Hyperpolarisation).

Das Aktionspotenzial pflanzt sich ohne Verstärkung entlang des Axons fort („Alles-oder-nichts“). Bei myelinisierten Axonen springt die Erregung von Ranvier-Schnürring zu Schnürring (saltatorische Leitung), was schneller und energieeffizienter ist. Die Erregungsübertragung auf die nächste Zelle erfolgt an Synapsen über Neurotransmitter.

Lokale Betäubungsmittel blockieren Natriumkanäle und unterbrechen so die Schmerzweiterleitung. Bei Multipler Sklerose wird die Myelinscheide angegriffen, was die Leitungsgeschwindigkeit beeinträchtigt.`,
    q1: "Welche der Aussagen zum Aktionspotenzial ist/sind richtig? (1) Natrium-Einstrom führt zur Depolarisation. (2) Kalium-Ausstrom trägt zur Repolarisation bei. (3) Bei myelinisierten Axonen erfolgt saltatorische Leitung. (4) Das Aktionspotenzial kann beliebig stark variieren.",
    q1opts: [
      "1., 2. und 3. sind richtig.",
      "Nur 4. ist richtig.",
      "Alle sind richtig.",
      "2. und 4. sind richtig.",
      "1. und 3. sind richtig.",
    ],
    q1cor: 0,
    q1exp:
      "Natrium/Depolarisation, Kalium/Repolarisation und saltatorische Leitung werden genannt; Aktionspotenzial ist Alles-oder-nichts.",
    q2: "Was wird im Text über Lokalanästhetika gesagt?",
    q2opts: [
      "Sie werden nicht erwähnt.",
      "Lokale Betäubungsmittel blockieren Natriumkanäle und unterbrechen die Schmerzweiterleitung.",
      "Sie wirken nur an Synapsen.",
      "Sie verstärken die Natriumkanäle.",
      "Sie blockieren nur Kaliumkanäle.",
    ],
    q2cor: 1,
    q2exp: "Der Text nennt Blockade von Natriumkanälen und Unterbrechung der Schmerzweiterleitung.",
  },
  {
    title: "Ökologie – Konkurrenz und Nische",
    topic: "Ökologie",
    difficulty: 1,
    text: `Wenn Arten dieselbe begrenzte Ressource nutzen, konkurrieren sie. Intraspezifische Konkurrenz herrscht zwischen Individuen derselben Art, interspezifische zwischen verschiedenen Arten. Nach dem Konkurrenzausschlussprinzip können zwei Arten nicht dauerhaft dieselbe ökologische Nische besetzen – eine wird verdrängt oder die Arten differenzieren sich (Ressourcenaufteilung, Nischenverschiebung).

Die ökologische Nische umfasst die Gesamtheit der abiotischen und biotischen Faktoren, unter denen eine Art existieren kann – nicht nur den Lebensraum, sondern auch Nahrung, Temperatur, Feinde und Konkurrenten. Generalisten haben breite Nischen, Spezialisten enge. Änderungen der Umwelt (Klima, invasive Arten) können Nischen verschieben und Arten gefährden.

In der Medizin wird das Nischenkonzept manchmal auf Krankheitserreger und Resistenzbildung angewendet: Antibiotika verändern die „Nische“ für Bakterien und begünstigen resistente Stämme.`,
    q1: "Welche der Aussagen zu Konkurrenz und Nische ist/sind richtig? (1) Interspezifische Konkurrenz herrscht zwischen verschiedenen Arten. (2) Zwei Arten können nicht dauerhaft dieselbe Nische besetzen (Konkurrenzausschlussprinzip). (3) Die Nische umfasst abiotische und biotische Faktoren. (4) Generalisten haben enge Nischen.",
    q1opts: [
      "1., 2. und 3. sind richtig.",
      "Nur 4. ist richtig.",
      "Alle sind richtig.",
      "2. und 4. sind richtig.",
      "1. und 3. sind richtig.",
    ],
    q1cor: 0,
    q1exp:
      "Interspezifische Konkurrenz, Konkurrenzausschluss und Nische werden genannt; Generalisten haben breite Nischen.",
    q2: "Was wird im Text über die Medizin gesagt?",
    q2opts: [
      "Medizin wird nicht erwähnt.",
      "Das Nischenkonzept kann auf Erreger und Resistenzbildung angewendet werden; Antibiotika begünstigen resistente Stämme.",
      "Nur Pflanzen haben Nischen.",
      "Antibiotika spielen keine Rolle.",
      "Resistenz hat nichts mit Nischen zu tun.",
    ],
    q2cor: 1,
    q2exp: "Der Text nennt Nischenkonzept bei Erregern und Resistenz sowie Rolle von Antibiotika.",
  },
  {
    title: "Renin-Angiotensin-Aldosteron-System",
    topic: "Physiologie",
    difficulty: 2,
    text: `Das Renin-Angiotensin-Aldosteron-System (RAAS) reguliert den Blutdruck und den Wasser- und Elektrolythaushalt. Bei niedrigem Blutdruck oder verminderter Nierendurchblutung setzen die Nieren Renin frei. Renin spaltet Angiotensinogen zu Angiotensin I; das Angiotensin-konvertierende Enzym (ACE) wandelt Angiotensin I in Angiotensin II um. Angiotensin II verengt die Gefäße, steigert die Aldosteronfreisetzung aus der Nebennierenrinde und fördert die ADH-Ausschüttung – alles erhöht den Blutdruck und hält Flüssigkeit zurück.

Aldosteron wirkt in der Niere: Es fördert die Rückresorption von Natrium und damit von Wasser und erhöht die Kaliumausscheidung. ACE-Hemmer und AT1-Rezeptorantagonisten werden als Blutdrucksenker eingesetzt; Aldosteronantagonisten bei Herzinsuffizienz. Eine Überaktivierung des RAAS trägt zu Bluthochdruck und Herz-Kreislauf-Erkrankungen bei.

Das RAAS steht in Wechselwirkung mit dem natriuretischen Peptidsystem, das bei Volumenüberladung gegengesteuert wirkt.`,
    q1: "Welche der Aussagen zum RAAS ist/sind richtig? (1) Renin wird bei niedrigem Blutdruck von den Nieren freigesetzt. (2) Angiotensin II verengt Gefäße und fördert Aldosteronfreisetzung. (3) Aldosteron fördert die Natriumrückresorption in der Niere. (4) ACE-Hemmer erhöhen den Blutdruck.",
    q1opts: [
      "1., 2. und 3. sind richtig.",
      "Nur 4. ist richtig.",
      "Alle sind richtig.",
      "2. und 4. sind richtig.",
      "1. und 3. sind richtig.",
    ],
    q1cor: 0,
    q1exp:
      "Renin bei niedrigem Druck, Angiotensin II (Gefäße, Aldosteron) und Aldosteron (Natrium) werden genannt; ACE-Hemmer senken den Blutdruck.",
    q2: "Was wird im Text über ACE-Hemmer gesagt?",
    q2opts: [
      "ACE-Hemmer werden nicht erwähnt.",
      "ACE-Hemmer werden als Blutdrucksenker eingesetzt.",
      "ACE-Hemmer erhöhen Renin.",
      "Sie wirken nur in der Leber.",
      "Sie ersetzen Aldosteron.",
    ],
    q2cor: 1,
    q2exp: "Der Text nennt den Einsatz von ACE-Hemmern als Blutdrucksenker.",
  },
  {
    title: "Bakterien – Aufbau und Vermehrung",
    topic: "Mikrobiologie",
    difficulty: 1,
    text: `Bakterien sind Prokaryoten: Sie haben keinen Zellkern, die DNA liegt als ringförmiges Chromosom im Zytoplasma; viele besitzen zusätzlich Plasmide. Die Zellwand (bei den meisten Bakterien aus Murein) gibt Form und Schutz; sie unterscheidet sich zwischen Gram-positiven und Gram-negativen Bakterien und ist Ziel vieler Antibiotika (z. B. Penicillin hemmt die Mureinsynthese). Manche Bakterien haben Geißeln zur Fortbewegung oder Pili für Anheftung und Konjugation.

Bakterien vermehren sich ungeschlechtlich durch Zellteilung (binäre Fission); unter günstigen Bedingungen kann die Population rasch wachsen. Genetische Variation entsteht durch Mutationen, Konjugation (Übertragung von Plasmiden), Transduktion (Übertragung durch Phagen) und Transformation (Aufnahme freier DNA). Resistenzgene können so zwischen Bakterien weitergegeben werden.

Antibiotika wirken nur gegen Bakterien, nicht gegen Viren. Der unsachgemäße Einsatz fördert Resistenzen.`,
    q1: "Welche der Aussagen zu Bakterien ist/sind richtig? (1) Bakterien haben keinen Zellkern. (2) Die Zellwand kann aus Murein bestehen. (3) Bakterien vermehren sich durch binäre Fission. (4) Antibiotika wirken gegen Bakterien und Viren gleichermaßen.",
    q1opts: [
      "1., 2. und 3. sind richtig.",
      "Nur 4. ist richtig.",
      "Alle sind richtig.",
      "2. und 4. sind richtig.",
      "1. und 3. sind richtig.",
    ],
    q1cor: 0,
    q1exp:
      "Kein Zellkern, Murein-Zellwand und binäre Fission werden genannt; Antibiotika wirken nicht gegen Viren.",
    q2: "Was wird im Text über Resistenzgene gesagt?",
    q2opts: [
      "Resistenzgene werden nicht erwähnt.",
      "Resistenzgene können durch Konjugation, Transduktion oder Transformation zwischen Bakterien weitergegeben werden.",
      "Nur Mutationen erzeugen Resistenz.",
      "Resistenz gibt es nur bei Viren.",
      "Plasmide spielen keine Rolle.",
    ],
    q2cor: 1,
    q2exp: "Der Text nennt Konjugation, Transduktion und Transformation als Wege der Weitergabe.",
  },
  {
    title: "Hormonelle Regulation der Niere",
    topic: "Physiologie",
    difficulty: 2,
    text: `Die Niere reguliert Volumen, Osmolarität und Elektrolytkonzentration des Blutes. Das antidiuretische Hormon (ADH, Vasopressin) wird im Hypothalamus gebildet und bei Volumenmangel oder erhöhter Osmolarität aus der Hypophyse freigesetzt. ADH erhöht die Wasserdurchlässigkeit der Sammelrohre – mehr Wasser wird rückresorbiert, der Urin wird konzentriert. Fehlt ADH (Diabetes insipidus centralis), scheidet die Niere große Mengen verdünnten Urins aus.

Aldosteron (aus dem RAAS) fördert die Natriumrückresorption und die Kaliumausscheidung in den Sammelrohren. Atriales natriuretisches Peptid (ANP) wird bei Volumenüberladung aus dem Vorhof ausgeschüttet und hemmt die Natriumrückresorption – es wirkt dem RAAS entgegen. Die Niere produziert selbst Erythropoetin (Epo) bei Sauerstoffmangel und aktiviert Vitamin D.

Störungen der Hormonregulation führen zu Elektrolyt- und Volumenentgleisungen. Die Bestimmung von ADH, Aldosteron und Renin hilft bei der Diagnose von Bluthochdruck und Nierenerkrankungen.`,
    q1: "Welche der Aussagen zu Nierenhormonen ist/sind richtig? (1) ADH erhöht die Wasserrückresorption in den Sammelrohren. (2) Bei ADH-Mangel kann Diabetes insipidus entstehen. (3) Aldosteron fördert die Natriumrückresorption. (4) ANP hemmt die Natriumrückresorption.",
    q1opts: [
      "Alle sind richtig.",
      "Nur 2. ist richtig.",
      "1., 2. und 3. sind richtig.",
      "2. und 4. sind richtig.",
      "1. und 3. sind richtig.",
    ],
    q1cor: 0,
    q1exp:
      "ADH (Wasser), ADH-Mangel/Diabetes insipidus, Aldosteron (Natrium) und ANP (Hemmung) werden genannt.",
    q2: "Was wird im Text über die Niere und Vitamin D gesagt?",
    q2opts: [
      "Vitamin D wird nicht erwähnt.",
      "Die Niere aktiviert Vitamin D.",
      "Vitamin D wird nur in der Leber gebildet.",
      "Die Niere speichert Vitamin D.",
      "Vitamin D hemmt die Niere.",
    ],
    q2cor: 1,
    q2exp: "Der Text nennt die Aktivierung von Vitamin D durch die Niere.",
  },
  {
    title: "Stoffwechsel der Leber",
    topic: "Physiologie",
    difficulty: 2,
    text: `Die Leber ist das zentrale Stoffwechselorgan. Sie speichert und setzt Glukose frei (Glykogenbildung und -abbau, Glukoneogenese), baut Fettsäuren um (z. B. Ketogenese bei Hunger) und synthetisiert Cholesterin und Lipoproteine. Die Entgiftung von Ammoniak zu Harnstoff (Harnstoffzyklus) und der Abbau vieler Medikamente und Giftstoffe finden in der Leber statt. Sie produziert Gallenflüssigkeit zur Fettverdauung und speichert Vitamine sowie Spurenelemente.

Bei Hunger oder Diabetes kann die Glukoneogenese aus Aminosäuren, Glycerin und Lactat die Glukoseversorgung sichern. Alkoholabbau belastet die Leber; chronischer Alkoholkonsum kann zu Fettleber, Hepatitis und Zirrhose führen. Leberwerte im Blut (z. B. Transaminasen, Bilirubin, alkalische Phosphatase) dienen der Diagnostik von Lebererkrankungen.

Die Leber hat eine große Regenerationsfähigkeit; bei schwerem Leberschaden kann jedoch ein Leberversagen eintreten, das ohne Transplantation tödlich sein kann.`,
    q1: "Welche der Aussagen zum Leberstoffwechsel ist/sind richtig? (1) Die Leber bildet Harnstoff aus Ammoniak. (2) Sie produziert Gallenflüssigkeit. (3) Glukoneogenese kann bei Hunger die Glukoseversorgung sichern. (4) Die Leber kann nicht regenerieren.",
    q1opts: [
      "1., 2. und 3. sind richtig.",
      "Nur 4. ist richtig.",
      "Alle sind richtig.",
      "2. und 4. sind richtig.",
      "1. und 3. sind richtig.",
    ],
    q1cor: 0,
    q1exp:
      "Harnstoff, Galle und Glukoneogenese werden genannt; die Leber hat Regenerationsfähigkeit.",
    q2: "Was wird im Text über Alkohol gesagt?",
    q2opts: [
      "Alkohol wird nicht erwähnt.",
      "Alkoholabbau belastet die Leber; chronischer Konsum kann zu Fettleber, Hepatitis und Zirrhose führen.",
      "Alkohol schädigt nur die Niere.",
      "Die Leber baut keinen Alkohol ab.",
      "Alkohol fördert die Regeneration.",
    ],
    q2cor: 1,
    q2exp: "Der Text nennt Alkoholabbau und Folgen wie Fettleber, Hepatitis und Zirrhose.",
  },
  {
    title: "Skelettmuskulatur – Kontraktion",
    topic: "Physiologie",
    difficulty: 2,
    text: `Die quergestreifte Skelettmuskulatur besteht aus Muskelfasern, die viele Myofibrillen enthalten. In den Myofibrillen liegen dünne Filamente (Aktin) und dicke Filamente (Myosin) in sich wiederholenden Einheiten (Sarkomere). Bei der Kontraktion gleiten die Aktinfilamente zwischen die Myosinfilamente (Gleitfilamenttheorie); die Sarkomere verkürzen sich. Die Energie liefert ATP; Myosin wirkt als ATPase.

Die Kontraktion wird ausgelöst, wenn ein Aktionspotenzial an der motorischen Endplatte Acetylcholin freisetzt und die Muskelfaser depolarisiert. Die Depolarisation breitet sich in die T-Tubuli aus und setzt Calcium aus dem sarkoplasmatischen Retikulum frei. Calcium bindet an Troponin, wodurch Tropomyosin von den Bindungsstellen am Aktin weicht – Myosin kann binden und die Kontraktion starten.

Ermüdung entsteht durch ATP-Mangel, Anhäufung von Lactat oder Erschöpfung der Calcium-Speicher. Bei Muskelkater werden feine Risse in den Muskelfasern und Entzündungsreaktionen diskutiert.`,
    q1: "Welche der Aussagen zur Muskelkontraktion ist/sind richtig? (1) Bei der Kontraktion gleiten Aktin und Myosin (Gleitfilamenttheorie). (2) ATP liefert die Energie. (3) Calcium wird aus dem sarkoplasmatischen Retikulum freigesetzt. (4) Calcium hemmt die Bindung von Myosin an Aktin.",
    q1opts: [
      "1., 2. und 3. sind richtig.",
      "Nur 4. ist richtig.",
      "Alle sind richtig.",
      "2. und 4. sind richtig.",
      "1. und 3. sind richtig.",
    ],
    q1cor: 0,
    q1exp:
      "Gleitfilamenttheorie, ATP und Calcium aus sarkoplasmatischem Retikulum werden genannt; Calcium ermöglicht die Bindung (hemmt nicht).",
    q2: "Was wird im Text über die Auslösung der Kontraktion gesagt?",
    q2opts: [
      "Sie wird nicht beschrieben.",
      "Aktionspotenzial setzt Acetylcholin frei; Depolarisation und Calcium-Freisetzung führen zur Kontraktion.",
      "Nur ATP löst sie aus.",
      "Calcium wird nicht gebraucht.",
      "T-Tubuli werden nicht erwähnt.",
    ],
    q2cor: 1,
    q2exp: "Der Text nennt Acetylcholin, Depolarisation, T-Tubuli und Calcium-Freisetzung.",
  },
  {
    title: "Genregulation bei Prokaryoten",
    topic: "Genetik",
    difficulty: 2,
    text: `Bei Bakterien wird die Genexpression oft durch Operons gesteuert. Ein Operon umfasst Promotor, Operator und mehrere Strukturgene, die gemeinsam transkribiert werden. Beim lac-Operon von E. coli werden die Gene für den Lactatabbau nur exprimiert, wenn Lactose vorhanden ist und Glukose fehlt: Lactose inaktiviert den Repressor, der sonst am Operator sitzt und die Transkription blockiert; bei Glukose wird die Transkription zusätzlich durch Katabolit-Repression (cAMP-abhängig) gehemmt.

Bei der Trp-Operon-Regulation wirkt Tryptophan als Korepressor – bei ausreichend Tryptophan blockiert der Repressor die Transkription. Die Genregulation spart Ressourcen und passt den Stoffwechsel an die Umwelt an. Viele Prinzipien – Promotor, Repressor, Induktion – finden sich in abgewandelter Form auch in der Genregulation der Eukaryoten.

Die Kenntnis der Genregulation bei Bakterien hat die Gentechnik und die Synthetische Biologie geprägt.`,
    q1: "Welche der Aussagen zum lac-Operon ist/sind richtig? (1) Ein Operon umfasst Promotor, Operator und Strukturgene. (2) Lactose inaktiviert den Repressor. (3) Bei Glukose wird die Transkription zusätzlich gehemmt (Katabolit-Repression). (4) Das lac-Operon ist nur in Eukaryoten zu finden.",
    q1opts: [
      "1., 2. und 3. sind richtig.",
      "Nur 4. ist richtig.",
      "Alle sind richtig.",
      "2. und 4. sind richtig.",
      "1. und 3. sind richtig.",
    ],
    q1cor: 0,
    q1exp:
      "Operon-Aufbau, Lactose/Repressor und Katabolit-Repression werden genannt; lac-Operon ist bei E. coli (Prokaryot).",
    q2: "Was wird im Text über Tryptophan gesagt?",
    q2opts: [
      "Tryptophan wird nicht erwähnt.",
      "Beim Trp-Operon wirkt Tryptophan als Korepressor und blockiert bei ausreichend Vorhandensein die Transkription.",
      "Tryptophan aktiviert immer die Transkription.",
      "Es gibt kein Trp-Operon.",
      "Tryptophan ist nur bei Eukaryoten relevant.",
    ],
    q2cor: 1,
    q2exp: "Der Text nennt Tryptophan als Korepressor beim Trp-Operon.",
  },
  {
    title: "Vegetatives Nervensystem",
    topic: "Neurobiologie",
    difficulty: 1,
    text: `Das vegetative (autonome) Nervensystem steuert unwillkürliche Funktionen wie Verdauung, Kreislauf, Atmung und Stoffwechsel. Es gliedert sich in Sympathikus und Parasympathikus, die oft antagonistisch wirken. Der Sympathikus wird bei Stress und körperlicher Aktivität aktiviert: Er erhöht Herzfrequenz und Blutdruck, erweitert die Bronchien, hemmt die Verdauung und erweitert die Pupillen. Der Parasympathikus dominiert in Ruhe: Er senkt Herzfrequenz, fördert Verdauung und Speichelfluss und verengt die Pupillen.

Beide Systeme nutzen präganglionäre und postganglionäre Neurone; der wichtigste Neurotransmitter des Parasympathikus ist Acetylcholin, beim Sympathikus Noradrenalin (postganglionär). Ein dritter Anteil ist das enterische Nervensystem im Verdauungstrakt, das weitgehend eigenständig arbeitet.

Viele Medikamente wirken auf Rezeptoren des vegetativen Nervensystems – z. B. Betablocker am Sympathikus oder Parasympathikomimetika bei bestimmten Augenerkrankungen.`,
    q1: "Welche der Aussagen zum vegetativen Nervensystem ist/sind richtig? (1) Sympathikus und Parasympathikus wirken oft antagonistisch. (2) Der Sympathikus erhöht Herzfrequenz und hemmt die Verdauung. (3) Der Parasympathikus fördert Verdauung und Speichelfluss. (4) Beide nutzen nur einen einzigen Neuron.",
    q1opts: [
      "1., 2. und 3. sind richtig.",
      "Nur 4. ist richtig.",
      "Alle sind richtig.",
      "2. und 4. sind richtig.",
      "1. und 3. sind richtig.",
    ],
    q1cor: 0,
    q1exp:
      "Antagonismus, Sympathikus (Herz, Verdauung hemmend) und Parasympathikus (Verdauung, Speichel) werden genannt; es gibt prä- und postganglionäre Neurone.",
    q2: "Was wird im Text über das enterische Nervensystem gesagt?",
    q2opts: [
      "Es wird nicht erwähnt.",
      "Es liegt im Verdauungstrakt und arbeitet weitgehend eigenständig.",
      "Es gehört nur zum Sympathikus.",
      "Es steuert nur die Pupillen.",
      "Es ersetzt Sympathikus und Parasympathikus.",
    ],
    q2cor: 1,
    q2exp:
      "Der Text nennt das enterische Nervensystem im Verdauungstrakt und seine weitgehende Eigenständigkeit.",
  },
];

function buildText(id: string, t: (typeof topics)[0]): TVText {
  return {
    id,
    title: t.title,
    topic: t.topic,
    difficulty: t.difficulty,
    text: t.text,
    questions: [
      {
        question: t.q1,
        options: t.q1opts,
        correctAnswer: t.q1cor,
        explanation: t.q1exp,
      },
      {
        question: t.q2,
        options: t.q2opts,
        correctAnswer: t.q2cor,
        explanation: t.q2exp,
      },
    ],
  };
}

export const tvUebungstexteZusatz2: TVText[] = topics.map((t, i) =>
  buildText(`tv-ueb-${16 + i}`, t)
);
