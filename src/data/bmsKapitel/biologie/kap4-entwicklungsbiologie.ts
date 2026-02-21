import type { Kapitel } from '../types';

export const bioKap4: Kapitel = {
  id: 'bio-kap4',
  title: "Entwicklungsbiologie",
  subject: 'biologie',
  icon: '🥚',
  estimatedTime: '60 min',
  unterkapitel: [
    {
      id: 'bio-4-01',
      title: "Befruchtung, Furchung und Implantation",
      content: `## Befruchtung

Die **Befruchtung** (Fertilisation) findet im äußeren Drittel des **Eileiters (Tuba uterina), der Ampulle**, statt. Beim Kontakt eines Spermiums mit der Eizelle löst die Bindung an die **Zona pellucida** (speziell an das Glykoprotein ZP3) die **Akrosom-Reaktion** aus: Das Akrosom am Spermien-Kopf fusioniert mit der Plasmamembran und setzt Enzyme frei – insbesondere **Akrosin** und **Hyaluronidase** – die die Zona pellucida enzymatisch durchdringen. Nach der Fusion der Zellmembranen von Spermium und Eizelle erfolgt die **Kortikalreaktion**: kortikale Granula der Eizelle exozytieren und modifizieren die Zona pellucida, sodass keine weiteren Spermien eindringen können (**Polyspermie-Block**). Gleichzeitig wird die durch die Ovulation arretierte sekundäre Oozyte (Arrest in **Metaphase II**) durch einen Ca²⁺-Anstieg zur Vollendung der Meiose II angetrieben: Es entsteht eine reife Eizelle (n) plus das 2. Polkörperchen (n). Die Vorkerne von Spermium und Eizelle verschmelzen im Schritt der **Syngamie** zur diploiden **Zygote** (2n).

## Furchung (Cleavage)

Die **Furchung** bezeichnet mitotische Zellteilungen **ohne Zellwachstum**: Die Zellzahl steigt, während die Einzelzellgröße (Blastomere) abnimmt. Beim Menschen verläuft die Furchung **holoblastisch** (die gesamte Zygote teilt sich) und **rotational**. Die Stadien: Zygote (Tag 0) → 2-Zell (Tag 1) → 4-Zell (Tag 2) → 8-Zell (Tag 3) → **Morula** (16–32 Zellen, Tag 3–4, kompakter Zellhaufen mit Tight Junctions) → **Blastozyste** (Tag 5–6, ca. 100–200 Zellen). Die Blastozyste besteht aus drei Kompartimenten: dem **Trophoblast** (äußere Zellschicht → zukünftige Plazenta, produziert hCG), dem **Embryoblast** (innere Zellmasse, ICM → zukünftiger Embryo) und dem **Blastozoel** (flüssigkeitsgefüllter Hohlraum). Morula und frühe Blastozyste wandern durch den Eileiter in den Uterus; die Blastozyste trifft um Tag 4–5 im Cavum uteri ein.

## Blastozyste und Implantation

Am Tag 6–7 nach der Befruchtung beginnt die **Implantation (Nidation)** im **Endometrium des Uterus** (bevorzugt posterior-superior). Die Blastozyste verlässt ihre Zona pellucida ("Hatching") und lagert sich zunächst an das Endometrium an (**Apposition**), heftet sich dann fest (**Adhäsion** via Integrine/Selektine) und dringt schließlich durch aktive Invasion des **Synzytiotrophoblasten** in das Stratum functionale des Endometriums ein. Der Synzytiotrophoblast (mehrkernige, invasive Außenschicht) erodiert mütterliche Blutgefäße und schafft so lakunäre Blutseen für die embryonale Ernährung. Ab Tag 6–7 produziert der Trophoblast **hCG (humanes Choriongonadotropin)**, das das **Corpus luteum** erhält und so die Progesteronproduktion aufrechterhält – damit bleibt das Endometrium erhalten und die Menstruation aus. hCG ist im Blut ab ca. Tag 10, im Urin ab ca. Tag 14 nach Befruchtung nachweisbar (Grundlage des Schwangerschaftstests); sein Maximum erreicht es in der 8.–12. Schwangerschaftswoche.`,
      lernziele: [
        "Die Akrosom-Reaktion und Kortikalreaktion bei der Befruchtung erklären und voneinander abgrenzen.",
        "Die Furchungsstadien (Morula, Blastozyste) mit korrekten Zeitangaben und strukturellen Merkmalen beschreiben.",
        "Den Ablauf der Implantation und die Rolle von hCG für die Corpus-luteum-Erhaltung erläutern.",
      ],
      sections: [
        {
          heading: "Akrosom-Reaktion und Kortikalreaktion",
          text: "Die Akrosom-Reaktion wird durch die Bindung des Spermiums an ZP3 der Zona pellucida ausgelöst: Das Akrosom (ein lysosomenartiges Organell im Spermien-Kopf) fusioniert mit der Spermien-Plasmamembran und setzt Enzyme frei, darunter Akrosin (eine Serinprotease) und Hyaluronidase. Diese Enzyme durchdringen die Zona pellucida, sodass das Spermium die Eizellmembran erreichen kann. Nach der Fusion beider Zellmembranen löst ein intrazellulärer Ca²⁺-Anstieg in der Eizelle die Kortikalreaktion aus: Kortikale Granula sezernieren ihren Inhalt in den perivitellinen Spalt, was die Zona pellucida biochemisch verändert (Zona-Reaktion, ZP2-Modifikation) und für weitere Spermien undurchdringbar macht. Dieser Mechanismus verhindert die Polyspermie (Befruchtung durch mehr als ein Spermium), die zur Triploidie und meist zum Absterben des Embryos führen würde.",
        },
        {
          heading: "Blastozyste: Trophoblast und Embryoblast",
          text: "Die Blastozyste (Tag 5–6) ist das erste Stadium mit zwei zellulär verschiedenen Populationen. Der Trophoblast (äußere Schicht) differenziert sich in den Zytotrophoblast (innere Stammzellschicht) und den Synzytiotrophoblast (äußere, mehrkernige, hochinvasive Schicht). Letzterer ist für die Invasion ins Endometrium und die Produktion von hCG verantwortlich. Der Embryoblast (innere Zellmasse) differenziert sich um Tag 8 in Epiblast (obere Schicht; Quelle aller drei Keimblätter und des Amnions) und Hypoblast (untere Schicht; bildet den primären Dottersack). Das Blastozoel ist ein flüssigkeitsgefüllter Hohlraum, dessen Ausdehnung zur typischen Blastozysten-Morphologie führt.",
        },
        {
          heading: "hCG und die Corpus-luteum-Erhaltung",
          text: "hCG (humanes Choriongonadotropin) ist ein Glykoproteinhormon, das strukturell dem LH ähnelt und an LH-Rezeptoren bindet. Es wird vom Trophoblast (vorwiegend Synzytiotrophoblast) ab Beginn der Implantation produziert. Seine Hauptaufgabe besteht darin, das Corpus luteum im Ovar zu erhalten, das andernfalls gegen Ende des Zyklus atretisch würde. Das erhaltene Corpus luteum produziert weiterhin Progesteron (und Östrogen), das das Endometrium sekretorisch hält und die Menstruation verhindert. Die hCG-Konzentration steigt exponentiell bis zur 8.–12. SSW (Schwangerschaftswoche), danach übernimmt die Plazenta die Progesteron-Eigenproduktion und hCG fällt ab. Der Schwangerschaftstest weist hCG im Urin mithilfe von Anti-hCG-Antikörpern nach.",
        },
      ],
      diagram: 'cell-cycle',

      merksätze: [
        "Akrosom = Enzympaket; Kortikalreaktion = Polyspermie-Block nach Befruchtung.",
        "Blastozyste: Trophoblast (→ Plazenta, hCG), Embryoblast (→ Embryo), Blastozoel (Hohlraum).",
        "Implantation Tag 6–7; hCG erhält Corpus luteum → Progesteron ↑ → keine Menstruation.",
      ],
      klinischerBezug: "Die Extrauteringravidität (ektope Schwangerschaft, 95 % im Eileiter) entsteht, wenn die Blastozyste sich außerhalb des Uterus implantiert; sie kann zur Eileiterruptur und lebensbedrohlicher innerer Blutung führen. Ein erhöhter oder nicht regelrecht ansteigender hCG-Spiegel ist ein diagnostisches Hilfsmittel zur Unterscheidung von normaler Intrauteringravidität und Ektopie.",
      altfrage: {
        question: "Welche Reaktion der Eizelle verhindert unmittelbar nach der Befruchtung die Polyspermie, und was ist ihr zellulärer Mechanismus?",
        answer: "Die Kortikalreaktion: Kortikale Granula der Eizelle exozytieren infolge des Ca²⁺-Anstiegs in den perivitellinen Spalt und verändern die Zona pellucida chemisch (Zona-Reaktion, ZP2-Modifikation), sodass kein weiteres Spermium binden oder eindringen kann.",
      },
      selfTest: [
        {
          question: "Wo findet die Befruchtung beim Menschen normalerweise statt?",
          options: [
            "Im Uterus (Gebärmutterhöhle)",
            "Im Infundibulum des Eileiters",
            "In der Ampulle des Eileiters (äußeres Drittel)",
            "Im Isthmus des Eileiters",
            "Im Cavum uteri nahe der Tubenöffnung",
          ],
          correctIndex: 2,
          explanation: "Die Befruchtung findet physiologischerweise in der Ampulle des Eileiters (Tuba uterina) statt, dem weitesten Abschnitt im äußeren Drittel. Hier treffen Oozyte und Spermien aufeinander. Findet die Implantation nicht im Uterus, sondern z. B. im Isthmus oder Infundibulum statt, spricht man von einer Eileiterschwangerschaft (Extrauteringravidität).",
          hints: ["Denk an den weitesten Abschnitt der Tuba uterina.", "Ampulle = äußeres Drittel."],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Aussage zur Akrosom-Reaktion und Kortikalreaktion ist korrekt?",
          options: [
            "Die Kortikalreaktion setzt Akrosin frei, die Akrosom-Reaktion verhindert Polyspermie.",
            "Beide Reaktionen werden durch denselben Mechanismus ausgelöst und dienen demselben Zweck.",
            "Die Akrosom-Reaktion ermöglicht dem Spermium das Durchdringen der Zona pellucida; die Kortikalreaktion der Eizelle verhindert danach den Eintritt weiterer Spermien.",
            "Die Akrosom-Reaktion findet in der Eizelle statt, die Kortikalreaktion im Spermium.",
            "Die Kortikalreaktion findet vor der Akrosom-Reaktion statt.",
          ],
          correctIndex: 2,
          explanation: "Die Akrosom-Reaktion ist ein Vorgang am Spermium: Das Akrosom setzt Enzyme (Akrosin, Hyaluronidase) frei, die die Zona pellucida durchdringen. Die Kortikalreaktion ist ein Vorgang der Eizelle: Ca²⁺-Anstieg → kortikale Granula-Exozytose → Zona-Modifikation → Polyspermie-Block. Beide Vorgänge sind getrennt, aber zeitlich eng verknüpft.",
          hints: ["Akrosom gehört zum Spermium, kortikale Granula gehören zur Eizelle.", "Kortikalreaktion = Schutz vor Polyspermie."],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Struktur der Blastozyste entwickelt sich zur Plazenta und produziert hCG?",
          options: [
            "Embryoblast (innere Zellmasse)",
            "Hypoblast",
            "Trophoblast",
            "Epiblast",
            "Blastozoel",
          ],
          correctIndex: 2,
          explanation: "Der Trophoblast (äußere Zellschicht der Blastozyste) entwickelt sich zur Plazenta (Chorion) und ist die Quelle von hCG (humanes Choriongonadotropin). Der Embryoblast (= innere Zellmasse) entwickelt sich zum eigentlichen Embryo. Das Blastozoel ist nur der flüssigkeitsgefüllte Hohlraum.",
          hints: ["Tropho- = ernährend → Plazenta.", "hCG = humanes Choriongonadotropin → Chorion kommt vom Trophoblast."],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Wann findet die Implantation der Blastozyste im Endometrium statt?",
          options: [
            "Tag 1–2 nach der Befruchtung",
            "Tag 3–4 nach der Befruchtung (Morula-Stadium)",
            "Tag 6–7 nach der Befruchtung (entspricht ca. Tag 20–21 des Menstruationszyklus)",
            "Tag 14 nach der Befruchtung",
            "Erst in der 4. Schwangerschaftswoche (Tag 28)",
          ],
          correctIndex: 2,
          explanation: "Die Implantation (Nidation) findet am Tag 6–7 nach der Befruchtung statt, was dem Tag 20–21 des Menstruationszyklus entspricht (Lutealphase, Progesteron-Hochphase). Zu diesem Zeitpunkt liegt die Blastozyste vor, während Morula und frühe Blastozyste noch im Eileiter/Uterus wandern.",
          hints: ["Blastozyste bildet sich Tag 5–6, Implantation kurz danach.", "Lutealphase = Tage 15–28 des Zyklus."],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Funktion hat hCG in der frühen Schwangerschaft?",
          options: [
            "hCG hemmt das Corpus luteum und senkt den Progesteronspiegel.",
            "hCG stimuliert die Ovulation eines weiteren Follikels.",
            "hCG erhält das Corpus luteum, das weiterhin Progesteron produziert, und verhindert so die Menstruation; es ist ab ca. Tag 10 im Blut nachweisbar.",
            "hCG wird von der Decidua (mütterlichem Gewebe) produziert und fördert die Blastozysten-Reifung.",
            "hCG ist erst ab der 20. Schwangerschaftswoche im Urin nachweisbar.",
          ],
          correctIndex: 2,
          explanation: "hCG wird vom Trophoblast produziert und bindet an LH-Rezeptoren des Corpus luteum, das dadurch erhalten bleibt und Progesteron weiter sezerniert. Dies stabilisiert das Endometrium und verhindert die Menstruation. hCG ist im Blut ab Tag ~10, im Urin ab Tag ~14 nach Befruchtung nachweisbar und erreicht sein Maximum in der 8.–12. SSW.",
          hints: ["hCG wirkt wie LH → bindet an LH-Rezeptoren.", "Schwangerschaftstest misst hCG im Urin."],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'bio-4-02',
      title: "Gastrulation, Neurulation und die drei Keimblätter",
      content: `## Gastrulation

Die **Gastrulation** (3. Entwicklungswoche, Tag 15–21) ist der Prozess, durch den aus der zweischichtigen Keimscheibe (Epiblast + Hypoblast) die **dreiblättrige Keimscheibe** entsteht. Ausgangspunkt ist der **Epiblast**. Am kaudalen Ende der Keimscheibe bildet sich der **Primitivstreifen** – eine Verdickung der Epiblastzellen an der Mittellinie. Kranial des Primitivstreifens liegt der **Primitiv-Knoten (Hensen-Knoten)**, das Organisationszentrum der Gastrulation (analog zum Spemann-Organisator bei Amphibien). Epiblastzellen wandern zum Primitivstreifen, invaginieren durch die **Primitivrinne** und migrieren als neues **Mesoderm** zwischen Epiblast und Hypoblast. Ein Teil der invaginierenden Zellen verdrängt den Hypoblast und bildet das **definitive Endoderm**. Die nicht involvierten, auf der Oberfläche verbleibenden Epiblastzellen werden zum **Ektoderm**. So entstehen die drei primären Keimblätter.

## Keimblatt-Derivate

Das **Ektoderm** (äußeres Keimblatt) bildet Epidermis, Haar, Nägel, Drüsen der Haut, Zahnschmelz sowie das gesamte **Nervensystem** (ZNS, PNS, Neuralleiste → autonome Ganglien, Melanozyten, Nebennierenmark). Das **Mesoderm** (mittleres Keimblatt) gibt **Somiten** (→ Skelettmuskel, Knochen, Bindegewebe), Herzmuskel, glatte Muskulatur, Nieren, Gonaden, Milz und das Gefäßsystem. Das **Endoderm** (inneres Keimblatt) kleidet den Verdauungstrakt, Atemwege und Harnblase aus und bildet Leber, Pankreas, Schilddrüse und Lunge.

## Neurulation

**Neurulation** (Woche 3–4, Tag 18–28) ist die Entstehung des Nervensystems aus dem Ektoderm. Das **Notochord** (Mesoderm-Derivat, Axial-Stützstruktur) sezerniert induktive Signale (z. B. Sonic Hedgehog), die den darüber liegenden Epiblast/Ektoderm veranlassen, sich zur **Neuralplatte** zu verdicken. Die Seitenränder der Neuralplatte heben sich als **Neuralwülste** an, die Mittellinie invaginiert zur **Neuralrinne** und schließlich schließen sich die Wülste zum **Neuralrohr** (→ Gehirn kranial, Rückenmark kaudal). Zellen, die beim Schließen des Neuralrohrs abgelöst werden, bilden die **Neuralleiste** mit ihren vielfältigen Derivaten. **Somiten** sind paarige, segmental angeordnete Mesoderm-Blöcke beiderseits des Neuralrohrs; sie differenzieren sich in Sklerotom (→ Wirbel, Rippen), Myotom (→ Skelettmuskel) und Dermatom (→ dermale Bindegewebe).`,
      lernziele: [
        "Den Ablauf der Gastrulation (Primitivstreifen, drei Keimblätter) und die Herkunft jedes Keimblattes aus dem Epiblast erklären.",
        "Die wichtigsten Derivate von Ektoderm, Mesoderm und Endoderm aufzählen und korrekt zuordnen.",
        "Die Neurulation (Neuralplatte → Neuralrohr → ZNS) und die Entstehung der Neuralleiste beschreiben.",
      ],
      sections: [
        {
          heading: "Primitivstreifen und Keimblatt-Entstehung",
          text: "Der Primitivstreifen ist die morphologische Achse der Gastrulation und erscheint am kaudalen Pol der zweischichtigen Keimscheibe. Er legt die Körperachsen fest (kranial-kaudal, dorsal-ventral, links-rechts). Epiblastzellen durchlaufen eine epithelial-mesenchymale Transition (EMT), wandern zum Primitivstreifen, schieben sich durch die Primitivrinne unter den Epiblast und bewegen sich seitlich wie kranial. Die erste Welle von Zellen bildet das definitive Endoderm, indem sie den Hypoblast lateral verdrängen. Die zweite Welle bildet das intra- und extraembryonale Mesoderm. Die verbleibenden Epiblastzellen auf der Oberfläche werden zum Ektoderm. Das Notochord entsteht aus dem Primitiv-Knoten und bildet die transiente Längsachse; es induziert das Neuralrohr und wird später zu den Nucleus-pulposus-Kernen der Bandscheiben.",
        },
        {
          heading: "Neurulation und Neuralleiste",
          text: "Die Neurulation beginnt mit der Induktion der Neuralplatte durch Signale des Notochords (insbesondere Sonic Hedgehog ventral, Bone Morphogenetic Proteins dorsal). Die Neuralplatte verdickt sich, die Ränder heben sich als Neuralwülste an, und die Mitte faltet sich zur Neuralrinne. Durch Fusion der Neuralwülste entsteht das Neuralrohr. Die Schließung beginnt in der Mitte und schreitet in beide Richtungen fort; die offenen Enden heißen anteriorer (kranial) und posteriorer (kaudal) Neuroporus. Der anteriore Neuroporus schließt am Tag 25, der posteriore am Tag 27. Bleibt der Neuroporus offen, entstehen Neuralrohrdefekte (Anenzephalie kranial, Spina bifida kaudal). Neuralleistenzellen wandern aus und bilden ein breites Spektrum von Geweben: sensorische und autonome Ganglien, Schwann-Zellen, Melanozyten, Kieferknorpel und -knochen, Nebennierenmark (Chromaffin-Zellen).",
        },
        {
          heading: "Somiten und ihre Derivate",
          text: "Somiten sind paarige Mesoderm-Segmente, die beiderseits des Neuralrohrs entstehen. Beim Menschen entstehen in der 3.–5. Woche ca. 42–44 Somiten-Paare. Jeder Somit differenziert sich in drei Bereiche: Das Sklerotom (ventral) liefert Chondrozyten und Osteoblasten für Wirbelkörper, Rippen und Teile des Schädels. Das Myotom (mittig) liefert Skelettmuskeln des Rumpfes und der Extremitäten. Das Dermatom (dorsal) liefert das dermale Bindegewebe der Haut (nicht die Epidermis, die vom Ektoderm kommt). Die Anzahl der Somiten korreliert mit dem Entwicklungsalter des Embryos und wird bei der klinischen Beurteilung von Frühaborten genutzt.",
        },
      ],
      merksätze: [
        "Primitivstreifen → Invagination: Endo → Meso; Rest des Epiblasts → Ekto.",
        "Ektoderm: Haut + Nerven; Mesoderm: Muskel + Knochen + Herz + Niere; Endoderm: Darm + Lunge + Drüsen.",
        "Notochord induziert Neuralplatte → Neuralrinne → Neuralrohr (ZNS); offener Neuroporus = Neuralrohrdefekt.",
      ],
      klinischerBezug: "Neuralrohrdefekte (Spina bifida, Anenzephalie) entstehen, wenn der posteriore oder anteriore Neuroporus nicht schließt. Folsäure-Supplementierung (0,4 mg/Tag präkonzeptionell) reduziert das Risiko um ca. 70 %, da Folat für die Zellteilung beim Neuralrohrschluss essenziell ist.",
      altfrage: {
        question: "Aus welchem Keimblatt entstehen Gehirn und Rückenmark, und durch welchen embryonalen Prozess?",
        answer: "Gehirn und Rückenmark entstehen aus dem Ektoderm durch die Neurulation: Das Notochord (Mesoderm) induziert die Bildung der Neuralplatte (Ektoderm), die sich zur Neuralrinne einfaltet und zum Neuralrohr schließt, aus dem ZNS und PNS hervorgehen.",
      },
      selfTest: [
        {
          question: "Was ist der Primitivstreifen und welche Rolle spielt er bei der Gastrulation?",
          options: [
            "Eine Verdickung des Endoderms, die das Mesoderm induziert.",
            "Eine Vertiefung im Trophoblasten, die die Implantation steuert.",
            "Eine Verdickung am kaudalen Pol des Epiblasts, durch die invaginierende Epiblastzellen Mesoderm und Endoderm bilden, während der Rest zum Ektoderm wird.",
            "Ein Bündel von Neuralleistenzellen, das die Somiten segmentiert.",
            "Der erste Bereich des Embryos, der Blutgefäße ausbildet.",
          ],
          correctIndex: 2,
          explanation: "Der Primitivstreifen ist eine Verdickung am kaudalen Ende des Epiblasts der zweischichtigen Keimscheibe. Epiblastzellen wandern dorthin, invaginieren durch die Primitivrinne und bilden Endoderm (verdrängt Hypoblast) und Mesoderm. Die auf der Oberfläche verbleibenden Epiblastzellen werden Ektoderm. So entstehen alle drei Keimblätter aus dem Epiblast.",
          hints: ["Gastrulation = drei Keimblätter aus dem Epiblast.", "Primitivstreifen = Invaginations-Ort am kaudalen Pol."],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welches Keimblatt ist die Quelle für Skelettmuskel, Herzmuskel, Nieren und Gonaden?",
          options: [
            "Ektoderm",
            "Endoderm",
            "Neuralleiste",
            "Mesoderm",
            "Trophoblast",
          ],
          correctIndex: 3,
          explanation: "Das Mesoderm (mittleres Keimblatt) gibt Skelettmuskel (aus Myotom der Somiten), Herzmuskel, glatte Muskulatur, Nieren, Gonaden, Milz, Gefäßsystem, Knochen und Bindegewebe. Ektoderm → Haut und Nervensystem; Endoderm → Darmauskleidung, Atemwege, Drüsen.",
          hints: ["Meso = Mitte → gibt 'innere' Körperstrukturen außer Darmauskleidung.", "Nieren und Gonaden = Mesoderm (Intermediärmesoderm)."],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Struktur induziert die Bildung der Neuralplatte aus dem Ektoderm?",
          options: [
            "Der Trophoblast",
            "Das Endoderm",
            "Das Notochord (Mesoderm-Derivat des Primitiv-Knotens)",
            "Die kortikale Granula",
            "Das Blastozoel",
          ],
          correctIndex: 2,
          explanation: "Das Notochord ist eine transiente Achsenstruktur, die aus dem Primitiv-Knoten (Hensen-Knoten) entsteht und Mesoderm-Ursprungs ist. Es sezerniert Signalmoleküle (z. B. Sonic Hedgehog), die das darüber liegende Ektoderm zur Bildung der Neuralplatte veranlassen (Neurulation). Das Notochord wird später zum Nucleus pulposus der Bandscheiben.",
          hints: ["Notochord = transiente Längsachse, Mesoderm-Derivat.", "Induktion: Notochord → Neuralplatte."],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welches Organ/Gewebe stammt vom Endoderm?",
          options: [
            "Epidermis der Haut",
            "Skelettmuskel",
            "Auskleidung des Darmtrakts, Lunge und Leber",
            "Neuralleistenzellen",
            "Herzmuskel",
          ],
          correctIndex: 2,
          explanation: "Das Endoderm bildet das Epithel des gesamten Gastrointestinaltrakts (Speiseröhre bis Rektum), der Lunge (Bronchialepithel), der Harnblase und der Drüsen (Leber, Pankreas, Schilddrüse, Thymus). Epidermis → Ektoderm; Skelettmuskel, Herzmuskel → Mesoderm; Neuralleiste → Ektoderm-Derivat.",
          hints: ["Endoderm = innen → Auskleidung innerer Organe.", "Leber und Pankreas: endodermale Ausstülpungen."],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was sind Somiten und welche drei Bereiche differenzieren sie aus?",
          options: [
            "Epithelzellen des Endoderms; differenzieren zu Drüsen, Atemwegen und Darm.",
            "Paarige Mesoderm-Segmente beiderseits des Neuralrohrs; differenzieren in Sklerotom (→ Knochen/Knorpel), Myotom (→ Skelettmuskel) und Dermatom (→ Bindegewebe der Haut).",
            "Neuralleistenzellen; differenzieren zu Melanozyten, Ganglien und Kieferknochen.",
            "Trophoblast-Derivate; bilden Plazentazotten und deciduale Zellen.",
            "Epiblast-Zellen; bilden direkt die drei Keimblätter ohne weiteren Umweg.",
          ],
          correctIndex: 1,
          explanation: "Somiten sind paarige Mesoderm-Blöcke, die segmental beiderseits des Neuralrohrs entstehen (Woche 3–5). Jeder Somit differenziert sich in: Sklerotom (ventral → Wirbel, Rippen), Myotom (mittig → Skelettmuskulatur) und Dermatom (dorsal → dermales Bindegewebe unter der Haut). Sie sind wichtige Muster-Einheiten des Körperbaus.",
          hints: ["Somit = Mesoderm-Segment.", "Sklero → Knochen; Myo → Muskel; Derma → Haut-Bindegewebe."],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'bio-4-03',
      title: "Embryonal- und Fetalentwicklung",
      content: `## Embryonalperiode (Wochen 1–8)

Die **Embryonalperiode** umfasst die ersten 8 Wochen nach der Befruchtung. In dieser Zeit findet die **Organogenese** (Organanlage) statt: Aus den drei Keimblättern entstehen alle primären Organanlagen. Die Entwicklung schreitet cephalo-caudal (vom Kopf zum Schwanz) und proximo-distal (von der Körpermitte zu den Extremitäten) fort. In Woche 3 bilden sich Neuralrohr und Herzschlauch; in Woche 4 beginnt das Herz zu schlagen (der erste funktionelle Schlag erfolgt um Tag 22–23). In Woche 4–8 entstehen Gliedmaßenleisten (Arm- und Beinleisten), Augenlinsengruben, Ohrgrübchen und Gesichtsgaumen. Am Ende der Woche 8 sind alle wesentlichen Organsysteme angelegt, wenn auch noch nicht ausgereift. Das Embryo ist ca. 3 cm groß (SSL – Scheitel-Steiß-Länge). Während dieser Periode ist der Embryo besonders **vulnerabel** gegenüber teratogenen Noxen.

## Kritische Perioden und Teratogene

Als **Teratogen** bezeichnet man einen Faktor, der die normale Embryonalentwicklung stört und zu Fehlbildungen führt. Die **kritische Periode** eines Organs ist der Zeitraum seiner aktivsten Differenzierung – meist in der Embryonalperiode. Das Herz ist in Woche 3–6 am vulnerabelsten, Extremitäten in Woche 4–8, das ZNS von Woche 3 bis zur Geburt (und danach). Klassische Teratogene: **Thalidomid** (Contergan, Woche 4–8 → Phokomelie), **Alkohol** (fetales Alkoholsyndrom, gesamte Schwangerschaft), **Rubella-Virus** (Woche 1–12 → Herzfehler, Taubheit, Katarakt), **Isotretinoin** (Akne-Medikament → kraniofaziale Defekte, ZNS-Fehlbildungen), ionisierende Strahlung. Das **Alles-oder-Nichts-Prinzip** gilt für die ersten 2 Wochen: Noxen führen entweder zum Fruchttod oder zu keiner Schädigung, da Zellen sich gegenseitig kompensieren können.

## Fetalperiode (ab Woche 9)

Ab der 9. Woche beginnt die **Fetalperiode**: Organwachstum und -reifung stehen im Vordergrund, während neue Organanlagen kaum noch entstehen. Wichtige Meilensteine: Woche 9–12: äußere Genitalien differenzieren (bis Woche 12 erkennbar), Knochen beginnen zu verknöchern; Woche 16–20: erste Kindsbewegungen spürbar (Quickening), Lanugo-Behaarung; Woche 20–28: Lungenreifung (Surfactant-Produktion der Typ-II-Pneumozyten beginnt ~Woche 24); Woche 28–40: Fetales Gewichtswachstum, Myelinisierung, Gehirnfaltung (Gyrierung). Die **Lungenreife** (Surfactant) ist klinisch entscheidend: Frühgeborene unter 28 Wochen haben ein hohes Risiko für das **Atemnotsyndrom** (Hyaline-Membran-Krankheit). Kortikosteroide (Betamethason) können die Lungenreife beschleunigen.`,
      lernziele: [
        "Embryonal- und Fetalperiode zeitlich und inhaltlich abgrenzen sowie die Organogenese in der Embryonalperiode beschreiben.",
        "Das Konzept der kritischen Perioden erklären und wichtige Teratogene mit ihren Zielorganen und -zeiträumen nennen.",
        "Wichtige Entwicklungsmeilensteine der Fetalperiode (Kindsbewegungen, Lungenreife) den korrekten Schwangerschaftswochen zuordnen.",
      ],
      sections: [
        {
          heading: "Organogenese in der Embryonalperiode",
          text: "Die Organogenese bezeichnet die Anlage aller Organsysteme während der Wochen 3–8. Sie beginnt mit der Gastrulation (Woche 3) und der Entstehung des Neuralrohrs (Neurulation, Woche 3–4). In Woche 4 faltet sich der Embryo vom flachen Scheibenstadium zur zylindrischen Körperform (laterale und cephalo-caudale Faltung), wodurch der Darm entsteht. Das Herzschlauch-Paar fusioniert und beginnt zu schlagen (Tag 22–23). Die Gliedmaßenleisten erscheinen in Woche 4 (Arm) und Woche 5 (Bein). Bis Ende Woche 8 sind Finger und Zehen (durch Apoptose zwischen den Strahlungen) sichtbar, Augen und Ohren angelegt, und alle Organsysteme zumindest rudimentär vorhanden. Die SSL (Scheitel-Steiß-Länge) beträgt am Ende der Woche 8 ca. 3 cm; das Gewicht ca. 3 g.",
        },
        {
          heading: "Teratogene und das Alles-oder-Nichts-Prinzip",
          text: "Teratogene können physikalischer (ionisierende Strahlung), chemischer (Thalidomid, Alkohol, Retinoide) oder biologischer Natur (Viren wie Röteln, CMV, Toxoplasma) sein. Die Schädlichkeit hängt von Dosis, Expositionszeitpunkt und genetischer Vulnerabilität des Embryos ab. Das Alles-oder-Nichts-Prinzip (Woche 1–2): In der Präimplantationsphase führt eine schwere Noxe entweder zum Absterben des Embryos oder – wenn nur wenige totipotente Zellen betroffen sind – zu einer vollständig normalen Weiterentwicklung, da verbleibende Zellen kompensieren. Ab Woche 3 gilt dieses Prinzip nicht mehr: Teratogene können spezifische Organfehlbildungen verursachen, abhängig davon, welches Organ in seiner kritischen Periode betroffen ist.",
        },
        {
          heading: "Fetalperiode: Wachstum und Reifung",
          text: "In der Fetalperiode (Woche 9–40) nimmt das Gewicht exponentiell zu: von ca. 10 g (Woche 12) auf ca. 3.400 g (Woche 40). Wichtige klinische Meilensteine: Die Viabilität (außerhalb des Mutterleibs überlebensfähig) wird ab ca. Woche 22–24 angesetzt, wobei intensivmedizinische Betreuung nötig ist. Ab Woche 24 produzieren Typ-II-Pneumozyten Surfactant (Dipalmitoylphosphatidylcholin), das die Alveolen bei Ausatmung offen hält. Fehlt Surfactant (Frühgeburt), kollabieren die Alveolen → Atemnotsyndrom (Respiratory Distress Syndrome, RDS). Kortikosteroide (Betamethason i.m.) werden bei drohender Frühgeburt <34 SSW verabreicht, um die Surfactant-Produktion zu beschleunigen.",
        },
      ],
      merksätze: [
        "Embryonalperiode (Wochen 1–8) = Organogenese; Fetalperiode (ab Woche 9) = Wachstum und Reifung.",
        "Kritische Periode: Teratogene in der aktivsten Differenzierungsphase → organspezifische Fehlbildung.",
        "Lungenreife / Surfactant: ab Woche 24; Frühgeburt <28 SSW → Atemnotsyndrom (RDS).",
      ],
      klinischerBezug: "Thalidomid (Contergan) verursachte in den 1960er Jahren Phokomelie (Flipper-artige Extremitäten), wenn es in der kritischen Periode der Extremitätenanlage (Woche 4–8) eingenommen wurde. Dies verdeutlicht, dass kritische Perioden organspezifisch sind und selbst kurze Exposition mit einem Teratogen irreversible Fehlbildungen hervorrufen kann.",
      altfrage: {
        question: "Was versteht man unter dem 'Alles-oder-Nichts-Prinzip' in der Embryonalentwicklung und für welchen Zeitraum gilt es?",
        answer: "Das Alles-oder-Nichts-Prinzip gilt für die Präimplantationsphase (Wochen 1–2): Eine teratogene Noxe führt entweder zum Absterben des Embryos (alle/viele Zellen geschädigt) oder – da die frühen Blastomere noch totipotent sind und sich gegenseitig ersetzen können – zu einem vollständig normal weiterentwickelnden Embryo.",
      },
      selfTest: [
        {
          question: "Wann endet die Embryonalperiode und beginnt die Fetalperiode?",
          options: [
            "Nach Woche 4 (Ende der Organogenese)",
            "Nach Woche 6 (Herzschlag etabliert)",
            "Nach Woche 8 (Ende der Organogenese; alle Organsysteme angelegt)",
            "Nach Woche 12 (Ende des ersten Trimesters)",
            "Nach Woche 20 (Kindsbewegungen spürbar)",
          ],
          correctIndex: 2,
          explanation: "Die Embryonalperiode umfasst Wochen 1–8 und endet nach Woche 8. In dieser Zeit findet die Organogenese statt. Ab Woche 9 beginnt die Fetalperiode mit Schwerpunkt auf Wachstum und Reifung bereits angelegter Organe. SSL am Ende Woche 8 ca. 3 cm.",
          hints: ["Embryo → Fötus: Wechsel nach Abschluss der Organogenese.", "Organogenese = Woche 3–8."],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was beschreibt das 'Alles-oder-Nichts-Prinzip' in der Embryologie?",
          options: [
            "Jedes Organ ist entweder vollständig ausgebildet oder fehlt ganz.",
            "In der Fetalperiode führen Teratogene entweder zu letalem Ausgang oder keiner Schädigung.",
            "In den ersten 2 Wochen (Präimplantation) führt eine Noxe entweder zum Fruchttod oder – da totipotente Zellen kompensieren können – zu keiner bleibenden Fehlbildung.",
            "Entweder die Blastozyste implantiert erfolgreich oder es kommt zur Fehlgeburt.",
            "Neuralrohrdefekte entstehen entweder vollständig (Anenzephalie) oder gar nicht.",
          ],
          correctIndex: 2,
          explanation: "Das Alles-oder-Nichts-Prinzip gilt nur für die Präimplantationsphase (Woche 1–2): Da frühe Blastomere totipotent sind, können verbleibende gesunde Zellen zerstörte ersetzen → kein Defekt. Sind zu viele Zellen geschädigt, stirbt der Embryo. Ab Woche 3 (Gastrulation, Differenzierung) gilt es nicht mehr: Teratogene können dann spezifische Fehlbildungen verursachen.",
          hints: ["Gilt nur für Woche 1–2.", "Totipotenz erlaubt Kompensation."],
          difficulty: 2,
          tags: [],
        },
        {
          question: "In welcher Schwangerschaftswoche beginnt die Surfactant-Produktion der Typ-II-Pneumozyten?",
          options: [
            "Ab Woche 12",
            "Ab Woche 16",
            "Ab Woche 20",
            "Ab Woche 24",
            "Ab Woche 32",
          ],
          correctIndex: 3,
          explanation: "Typ-II-Pneumozyten beginnen ab ca. Woche 24 mit der Produktion von Surfactant (hauptsächlich Dipalmitoylphosphatidylcholin, DPPC). Surfactant reduziert die Oberflächenspannung in Alveolen und verhindert deren Kollaps beim Ausatmen. Frühgeburten vor Woche 28 haben kritisch wenig Surfactant → Atemnotsyndrom (RDS). Kortikosteroide (Betamethason) beschleunigen die Reifung.",
          hints: ["Surfactant-Reife: 'Vierfach' = Woche 24.", "Viabilität = ab ca. Woche 22–24."],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage zu Teratogenen und kritischen Perioden ist korrekt?",
          options: [
            "Teratogene wirken in der Fetalperiode stärker als in der Embryonalperiode.",
            "Die kritische Periode eines Organs ist der Zeitraum seiner aktivsten Differenzierung, in dem es am vulnerabelsten gegenüber Teratogenen ist.",
            "Alkohol ist nur in Woche 4–6 teratogen und danach unbedenklich.",
            "Ionisierende Strahlung ist kein anerkanntes Teratogen.",
            "Das ZNS ist nur in Woche 3–4 (Neurulation) vulnerabel.",
          ],
          correctIndex: 1,
          explanation: "Die kritische Periode ist die Zeit der intensivsten Differenzierung eines Organs. In dieser Zeit ist es am empfindlichsten gegenüber Teratogenen. Das ZNS hat die längste kritische Periode (Woche 3 bis postnatal). Alkohol wirkt während der gesamten Schwangerschaft. Ionisierende Strahlung ist ein anerkanntes physikalisches Teratogen.",
          hints: ["Kritisch = aktivste Differenzierungsphase.", "ZNS = längste kritische Periode."],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welcher Entwicklungsmeilenstein entspricht ca. der 16.–20. Schwangerschaftswoche?",
          options: [
            "Beginn des Herzschlags",
            "Surfactant-Produktion beginnt",
            "Erste wahrnehmbare Kindsbewegungen (Quickening) und Lanugo-Behaarung",
            "Vollständige Lungenreife",
            "Differenzierung der äußeren Genitalien",
          ],
          correctIndex: 2,
          explanation: "In der 16.–20. SSW spüren Mütter erstmalig die Kindsbewegungen (Quickening); das Fetus ist mit Lanugo-Haar bedeckt. Der Herzschlag beginnt in Woche 3–4; äußere Genitalien differenzieren bis Woche 12; Surfactant-Produktion beginnt ab Woche 24; vollständige Lungenreife erst um Woche 35–37.",
          hints: ["Quickening = erstmalige Kindsbewegungen, Mitte der Schwangerschaft.", "Lanugo = feines Flaumhaar auf fetaler Haut."],
          difficulty: 1,
          tags: [],
        },
      ],
    },
    {
      id: 'bio-4-04',
      title: "Plazenta, Eihäute und Plazentaschranke",
      content: `## Aufbau der Plazenta

Die **Plazenta** ist ein temporäres Organ, das den Fötus mit der Mutter verbindet und aus zwei Anteilen besteht: dem **fetalen Anteil** (Chorion frondosum, bestehend aus **Chorionzotten** des Trophoblasten) und dem **mütterlichen Anteil** (Decidua basalis, umgebautes Endometrium). Chorionzotten tauchen in **intervillöse Räume** (Blutseen) ein, die mit mütterlichem Blut gefüllt sind. Fetales und mütterliches Blut **mischen sich nicht direkt**; der Austausch erfolgt durch Diffusion und aktiven Transport. Die voll entwickelte Plazenta (ab Woche 12–16) ist scheibenförmig, ca. 500 g schwer und 20 cm im Durchmesser. Die Decidua ist das transformierte Endometrium und gliedert sich in Decidua basalis (unter der Plazenta, mütterlicher Plazenta-Anteil), Decidua capsularis (über dem Embryo) und Decidua parietalis (restliches Endometrium).

## Plazentafunktionen und Hormonproduktion

Die Plazenta erfüllt multiple Funktionen: (1) **Gasaustausch**: O₂ gelangt vom mütterlichen Blut via Diffusion zu Hämoglobin F (fetales Hämoglobin, höhere O₂-Affinität als adultes Hb); CO₂ in umgekehrter Richtung. (2) **Nährstofftransfer**: Glukose (erleichterte Diffusion via GLUT-Transporter), Aminosäuren (aktiver Transport), Fettsäuren. (3) **Hormonsynthese**: Im ersten Trimester produziert der Synzytiotrophoblast **hCG** (Corpus-luteum-Erhalt), ab 2. Trimester übernimmt die Plazenta die **Progesteron-** und **Östrogenproduktion** (Östrogen benötigt androgenase Vorstufen aus der fetalen Nebennierenrinde → maternofetale Einheit). (4) **Immunologische Barriere**: IgG-Antikörper werden aktiv per FcRn-Rezeptor-vermitteltem Transzytose von Mutter auf Fetus übertragen (passive Immunisierung des Neugeborenen). (5) **Ausscheidung**: Harnstoff und CO₂ diffundieren zu mütterlichem Kreislauf.

## Plazentaschranke und Eihäute

Die **Plazentaschranke** (Histo-hämatische Schranke) trennt mütterliches von fetalem Blut und besteht aus: Synzytiotrophoblast, Zytotrophoblast (in früher Schwangerschaft), Basalmembran des Trophoblasten, Bindegewebe der Zotte, Basalmembran der fetalen Kapillare und Endothel der fetalen Kapillare. Sie ist nicht absolut dicht: Kleine lipophile Moleküle (Alkohol, CO, Nikotin, viele Medikamente und fettlösliche Viren) passieren sie. Die **Nabelschnur** verbindet Fötus und Plazenta: Sie enthält 2 **Nabelarterien** (führen sauerstoffarmes Blut von Fötus zur Plazenta) und 1 **Nabelvene** (führt sauerstoffreiches Blut von Plazenta zum Fötus), eingebettet in **Wharton-Sulze** (gallertartiges Bindegewebe). Eihäute: Das **Amnion** (innere Membran) umgibt die Fruchtwasserhöhle; das **Chorion** (äußere Membran, Trophoblast-Derivat) liegt außen. Fruchtwasser (Amnionflüssigkeit) schützt den Fötus mechanisch, hält die Temperatur konstant und ermöglicht Bewegung.`,
      lernziele: [
        "Den fetalen und mütterlichen Anteil der Plazenta, den Aufbau der Chorionzotten und der Plazentaschranke beschreiben.",
        "Die Hauptfunktionen der Plazenta (Gasaustausch, Nährstofftransfer, Hormonsynthese) erläutern und die Hormone hCG und Progesteron zeitlich korrekt einordnen.",
        "Den Aufbau der Nabelschnur (2 Arterien, 1 Vene) und die Funktion der Eihäute (Amnion, Chorion) erklären.",
      ],
      sections: [
        {
          heading: "Chorionzotten und intervillöse Räume",
          text: "Chorionzotten sind fingerartige Ausstülpungen des Trophoblasten in den intervillösen Raum, der von mütterlichem Blut durchströmt wird. Primäre Zotten (Woche 2) bestehen nur aus Trophoblast; sekundäre Zotten (Woche 3) enthalten Mesoderm; tertiäre Zotten (Woche 3–4) besitzen fetale Kapillaren. Über tertiäre Zotten findet der eigentliche Stoff- und Gasaustausch statt. Die Gesamtoberfläche aller Chorionzotten beträgt zum Geburtstermin ca. 10–14 m². Die Außenschicht der Zotten bildet der Synzytiotrophoblast (mehrkernig, kontinuierlich), darunter liegen Zytotrophoblastzellen (Langhan-Zellen). Im dritten Trimester wird die Plazentaschranke dünner (Zytotrophoblast weitgehend verschwunden), was den Austausch erleichtert.",
        },
        {
          heading: "Plazentare Hormonsynthese",
          text: "Die Plazenta ist ein endokrin aktives Organ. In der Frühschwangerschaft dominiert hCG (Synzytiotrophoblast), das das Corpus luteum erhält. Ab Woche 8–10 übernimmt die Plazenta zunehmend die Progesteronsynthese (aus mütterlichem Cholesterin) → hCG fällt nach der 12. SSW ab. Östrogenproduktion der Plazenta erfordert androgene Vorstufen (DHEA-S) aus der fetalen Nebenniere → das fetoplazentar-mütterliche Einheit-Konzept. Plazentares Laktogen (hPL, Humanes Plazenta-Laktogen) wird ab Woche 5 produziert: Es wirkt insulin-antagonistisch bei der Mutter (Glukose für den Fötus) und fördert das Brustwachstum.",
        },
        {
          heading: "Nabelschnur und Eihäute",
          text: "Die Nabelschnur enthält 2 Nabelarterien (Aa. umbilicales) und 1 Nabelvene (V. umbilicalis), eingehüllt in Wharton-Sulze. Merkhilfe: 'AVA' (Arterie-Vene-Arterie). Sauerstoffarmes, kohlendioxidreiches fetales Blut fließt durch die Arterien zur Plazenta; sauerstoffreiches Blut kehrt über die Vene zum Fötus zurück – also umgekehrt zur konventionellen Arterie/Vene-Definition (fetale Arterien führen 'venöses' Blut). Fehlt eine Nabelarterie (Single Umbilical Artery, SUA), ist dies mit erhöhtem Risiko für Fehlbildungen assoziiert. Das Amnion (innere Membran) produziert und umgibt Fruchtwasser (Amnionflüssigkeit, ca. 800 ml am Termin). Das Chorion (äußere Membran) liegt dem Amnion an und grenzt an die Decidua.",
        },
      ],
      diagram: 'membrane-transport',
      merksätze: [
        "Plazenta: fetal (Chorionzotten) + mütterlich (Decidua basalis); kein direkter Blut-Kontakt zwischen Mutter und Kind.",
        "Nabelschnur: 2 Arterien (sauerstoffarm vom Kind) + 1 Vene (sauerstoffreich zum Kind) – AVA.",
        "Plazentaschranke: lipophile Stoffe (Alkohol, Nikotin, viele Viren) passieren sie; IgG wird aktiv per Transzytose transferiert.",
      ],
      klinischerBezug: "Plazenta praevia (Plazenta liegt über dem inneren Muttermund) kann zu schweren Blutungen sub partu führen und ist eine Indikation für einen Kaiserschnitt. Die Placenta accreta (abnormal tiefe Invasion der Chorionzotten in das Myometrium) führt zu schweren postpartalen Blutungen, da sich die Plazenta nicht spontan löst.",
      altfrage: {
        question: "Wie viele Arterien und Venen enthält die normale Nabelschnur, und welches Blut (sauerstoffreich/arm) führen sie?",
        answer: "Die normale Nabelschnur enthält 2 Nabelarterien (führen sauerstoffarmes, CO₂-reiches Blut vom Fötus zur Plazenta) und 1 Nabelvene (führt sauerstoffreiches Blut von der Plazenta zum Fötus). Merkhilfe: AVA.",
      },
      selfTest: [
        {
          question: "Aus welchen Anteilen besteht die Plazenta, und welcher ist fetalen bzw. mütterlichen Ursprungs?",
          options: [
            "Fetaler Anteil: Decidua basalis; mütterlicher Anteil: Chorionzotten.",
            "Fetaler Anteil: Chorion frondosum (Chorionzotten); mütterlicher Anteil: Decidua basalis.",
            "Beide Anteile sind mütterlichen Ursprungs.",
            "Fetaler Anteil: Amnion; mütterlicher Anteil: Chorion.",
            "Fetaler Anteil: Dottersack; mütterlicher Anteil: Decidua capsularis.",
          ],
          correctIndex: 1,
          explanation: "Die Plazenta hat zwei Anteile: Der fetale Anteil ist das Chorion frondosum (Chorionzotten des Trophoblasten), der mütterliche Anteil ist die Decidua basalis (transformiertes Endometrium unter der Plazenta). Die Chorionzotten tauchen in mütterliche Blutseen (intervillöse Räume) ein, mischen ihr Blut aber nicht direkt mit mütterlichem Blut.",
          hints: ["Chorion = Trophoblast-Derivat = fetal.", "Decidua = umgebautes Endometrium = mütterlich."],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welches Hormon wird von der Plazenta produziert, um in der frühen Schwangerschaft das Corpus luteum zu erhalten?",
          options: [
            "Progesteron",
            "Östrogen",
            "Luteinisierendes Hormon (LH)",
            "Humanes Choriongonadotropin (hCG)",
            "Humanes Plazentalaktogen (hPL)",
          ],
          correctIndex: 3,
          explanation: "hCG (humanes Choriongonadotropin) wird vom Synzytiotrophoblast der Plazenta produziert und erhält das Corpus luteum, das seinerseits Progesteron für den Endometrium-Erhalt produziert. hCG wirkt wie LH (bindet an LH-Rezeptoren). Ab Woche 8–10 übernimmt die Plazenta zunehmend die Progesteronsynthese selbst, und hCG fällt ab.",
          hints: ["hCG = 'Schwangerschaftshormon' = Schwangerschaftstest.", "LH-Analogon → erhält Corpus luteum."],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Wie gelangt IgG von der Mutter auf den Fötus?",
          options: [
            "Durch einfache Diffusion durch die Plazentaschranke",
            "Durch direkten Blutaustausch zwischen Mutter und Fötus in der Plazenta",
            "Per Transzytose durch den Synzytiotrophoblast via FcRn-Rezeptoren (aktiver, rezeptorvermittelter Transport)",
            "Über das Fruchtwasser und die fetale Haut",
            "IgG kann die Plazentaschranke nicht passieren",
          ],
          correctIndex: 2,
          explanation: "IgG (der einzige Immunglobulin-Isotyp, der die Plazenta passiert) wird aktiv durch Transzytose über FcRn-Rezeptoren (neonatale Fc-Rezeptoren) im Synzytiotrophoblast transportiert. Dies ist die Basis der passiven Immunität des Neugeborenen (Leihimmunität, Nestschutz). IgM, IgA, IgE und IgD passieren die Plazenta nicht.",
          hints: ["FcRn = neonataler Fc-Rezeptor.", "Nur IgG passiert Plazenta aktiv."],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welches Blut führt die Nabelvene zum Fötus?",
          options: [
            "Sauerstoffarmes, CO₂-reiches Blut",
            "Mütterliches Blut direkt aus dem Uterus",
            "Sauerstoffreiches Blut von der Plazenta zum Fötus",
            "Lymphe aus dem intervillösen Raum",
            "Gemischtes Blut aus beiden Kreisläufen",
          ],
          correctIndex: 2,
          explanation: "Die Nabelvene (1×) führt sauerstoffreiches, nährstoffreiches Blut von der Plazenta zum Fötus. Die beiden Nabelarterien (2×) führen sauerstoffarmes, CO₂-reiches Blut vom Fötus zur Plazenta. Merkhilfe: AVA (Arterie-Vene-Arterie). Dies ist das Gegenteil der systemischen Konvention: fetale Arterien führen 'venöses' Blut.",
          hints: ["AVA = Arterie-Vene-Arterie in der Nabelschnur.", "Vene führt immer Blut zum Herz/Fötus hin."],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Aussage zur Plazentaschranke ist korrekt?",
          options: [
            "Die Plazentaschranke ist absolut undurchlässig für alle Fremdstoffe.",
            "Nur wasserige (hydrophile) Moleküle können die Plazentaschranke passieren.",
            "Mütterliches und fetales Blut mischen sich im intervillösen Raum direkt.",
            "Lipophile Moleküle wie Alkohol, Nikotin und viele Medikamente können die Plazentaschranke passieren und den Fötus schädigen.",
            "Die Plazentaschranke wird mit fortschreitender Schwangerschaft dicker und undurchlässiger.",
          ],
          correctIndex: 3,
          explanation: "Die Plazentaschranke ist keine absolute Barriere. Lipophile (fettlösliche) Moleküle – darunter Alkohol, Nikotin, CO (aus Rauchen), viele Medikamente (Thalidomid, Retinoide) und lipophile Viren – können sie passieren. Im dritten Trimester wird sie tatsächlich dünner (weniger Zytotrophoblastzellen), was den Austausch erleichtert, aber auch die Permeabilität erhöht.",
          hints: ["Lipophil = fettlöslich = passiert Membranen leicht.", "Alkohol und Nikotin passieren die Plazenta."],
          difficulty: 2,
          tags: [],
        },
      ],
    },
  ],
};
