import type { Kapitel } from "../types";

export const bioKapEntwicklung: Kapitel = {
  id: "bio-kap3",
  title: "Entwicklungsbiologie & Evolution",
  subject: "biologie",
  icon: "🧬",
  estimatedTime: "90 min",
  unterkapitel: [
    // === from kap4-entwicklungsbiologie ===
    {
      id: "bio-4-01",
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
          merksatz: "Akrosom = Enzympaket; Kortikalreaktion = Polyspermie-Block nach Befruchtung.",
        },
        {
          heading: "Blastozyste: Trophoblast und Embryoblast",
          text: "Die Blastozyste (Tag 5–6) ist das erste Stadium mit zwei zellulär verschiedenen Populationen. Der Trophoblast (äußere Schicht) differenziert sich in den Zytotrophoblast (innere Stammzellschicht) und den Synzytiotrophoblast (äußere, mehrkernige, hochinvasive Schicht). Letzterer ist für die Invasion ins Endometrium und die Produktion von hCG verantwortlich. Der Embryoblast (innere Zellmasse) differenziert sich um Tag 8 in Epiblast (obere Schicht; Quelle aller drei Keimblätter und des Amnions) und Hypoblast (untere Schicht; bildet den primären Dottersack). Das Blastozoel ist ein flüssigkeitsgefüllter Hohlraum, dessen Ausdehnung zur typischen Blastozysten-Morphologie führt.",
          merksatz:
            "Blastozyste: Trophoblast (→ Plazenta, hCG), Embryoblast (→ Embryo), Blastozoel (Hohlraum).",
        },
        {
          heading: "hCG und die Corpus-luteum-Erhaltung",
          text: "hCG (humanes Choriongonadotropin) ist ein Glykoproteinhormon, das strukturell dem LH ähnelt und an LH-Rezeptoren bindet. Es wird vom Trophoblast (vorwiegend Synzytiotrophoblast) ab Beginn der Implantation produziert. Seine Hauptaufgabe besteht darin, das Corpus luteum im Ovar zu erhalten, das andernfalls gegen Ende des Zyklus atretisch würde. Das erhaltene Corpus luteum produziert weiterhin Progesteron (und Östrogen), das das Endometrium sekretorisch hält und die Menstruation verhindert. Die hCG-Konzentration steigt exponentiell bis zur 8.–12. SSW (Schwangerschaftswoche), danach übernimmt die Plazenta die Progesteron-Eigenproduktion und hCG fällt ab. Der Schwangerschaftstest weist hCG im Urin mithilfe von Anti-hCG-Antikörpern nach.",
          merksatz:
            "Implantation Tag 6–7; hCG erhält Corpus luteum → Progesteron ↑ → keine Menstruation.",
        },
      ],
      diagram: "cell-cycle",

      merksätze: [],
      klinischerBezug:
        "Die Extrauteringravidität (ektope Schwangerschaft, 95 % im Eileiter) entsteht, wenn die Blastozyste sich außerhalb des Uterus implantiert; sie kann zur Eileiterruptur und lebensbedrohlicher innerer Blutung führen. Ein erhöhter oder nicht regelrecht ansteigender hCG-Spiegel ist ein diagnostisches Hilfsmittel zur Unterscheidung von normaler Intrauteringravidität und Ektopie.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Welche Reaktion der Eizelle verhindert unmittelbar nach der Befruchtung die Polyspermie, und was ist ihr zellulärer Mechanismus?",
        answer:
          "Die Kortikalreaktion: Kortikale Granula der Eizelle exozytieren infolge des Ca²⁺-Anstiegs in den perivitellinen Spalt und verändern die Zona pellucida chemisch (Zona-Reaktion, ZP2-Modifikation), sodass kein weiteres Spermium binden oder eindringen kann.",
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
          explanation:
            "Die Befruchtung findet physiologischerweise in der Ampulle des Eileiters (Tuba uterina) statt, dem weitesten Abschnitt im äußeren Drittel. Hier treffen Oozyte und Spermien aufeinander. Findet die Implantation nicht im Uterus, sondern z. B. im Isthmus oder Infundibulum statt, spricht man von einer Eileiterschwangerschaft (Extrauteringravidität).",
          hints: [
            "Denk an den weitesten Abschnitt der Tuba uterina.",
            "Ampulle = äußeres Drittel.",
          ],
          difficulty: 1,
          tags: ["befruchtung", "ampulle", "eileiter"],
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
          explanation:
            "Die Akrosom-Reaktion ist ein Vorgang am Spermium: Das Akrosom setzt Enzyme (Akrosin, Hyaluronidase) frei, die die Zona pellucida durchdringen. Die Kortikalreaktion ist ein Vorgang der Eizelle: Ca²⁺-Anstieg → kortikale Granula-Exozytose → Zona-Modifikation → Polyspermie-Block. Beide Vorgänge sind getrennt, aber zeitlich eng verknüpft.",
          hints: [
            "Akrosom gehört zum Spermium, kortikale Granula gehören zur Eizelle.",
            "Kortikalreaktion = Schutz vor Polyspermie.",
          ],
          difficulty: 2,
          tags: ["akrosom-reaktion", "kortikalreaktion", "polyspermie"],
        },
        {
          question:
            "Welche Struktur der Blastozyste entwickelt sich zur Plazenta und produziert hCG?",
          options: [
            "Embryoblast (innere Zellmasse)",
            "Hypoblast",
            "Trophoblast",
            "Epiblast",
            "Blastozoel",
          ],
          correctIndex: 2,
          explanation:
            "Der Trophoblast (äußere Zellschicht der Blastozyste) entwickelt sich zur Plazenta (Chorion) und ist die Quelle von hCG (humanes Choriongonadotropin). Der Embryoblast (= innere Zellmasse) entwickelt sich zum eigentlichen Embryo. Das Blastozoel ist nur der flüssigkeitsgefüllte Hohlraum.",
          hints: [
            "Tropho- = ernährend → Plazenta.",
            "hCG = humanes Choriongonadotropin → Chorion kommt vom Trophoblast.",
          ],
          difficulty: 1,
          tags: ["trophoblast", "plazenta", "hcg"],
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
          explanation:
            "Die Implantation (Nidation) findet am Tag 6–7 nach der Befruchtung statt, was dem Tag 20–21 des Menstruationszyklus entspricht (Lutealphase, Progesteron-Hochphase). Zu diesem Zeitpunkt liegt die Blastozyste vor, während Morula und frühe Blastozyste noch im Eileiter/Uterus wandern.",
          hints: [
            "Blastozyste bildet sich Tag 5–6, Implantation kurz danach.",
            "Lutealphase = Tage 15–28 des Zyklus.",
          ],
          difficulty: 1,
          tags: ["implantation", "blastozyste", "endometrium"],
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
          explanation:
            "hCG wird vom Trophoblast produziert und bindet an LH-Rezeptoren des Corpus luteum, das dadurch erhalten bleibt und Progesteron weiter sezerniert. Dies stabilisiert das Endometrium und verhindert die Menstruation. hCG ist im Blut ab Tag ~10, im Urin ab Tag ~14 nach Befruchtung nachweisbar und erreicht sein Maximum in der 8.–12. SSW.",
          hints: [
            "hCG wirkt wie LH → bindet an LH-Rezeptoren.",
            "Schwangerschaftstest misst hCG im Urin.",
          ],
          difficulty: 2,
          tags: ["hcg", "corpus luteum", "progesteron"],
        },
      ],
    },
    {
      id: "bio-4-02",
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
          merksatz: "Primitivstreifen → Invagination: Endo → Meso; Rest des Epiblasts → Ekto.",
        },
        {
          heading: "Neurulation und Neuralleiste",
          text: "Die Neurulation beginnt mit der Induktion der Neuralplatte durch Signale des Notochords (insbesondere Sonic Hedgehog ventral, Bone Morphogenetic Proteins dorsal). Die Neuralplatte verdickt sich, die Ränder heben sich als Neuralwülste an, und die Mitte faltet sich zur Neuralrinne. Durch Fusion der Neuralwülste entsteht das Neuralrohr. Die Schließung beginnt in der Mitte und schreitet in beide Richtungen fort; die offenen Enden heißen anteriorer (kranial) und posteriorer (kaudal) Neuroporus. Der anteriore Neuroporus schließt am Tag 25, der posteriore am Tag 27. Bleibt der Neuroporus offen, entstehen Neuralrohrdefekte (Anenzephalie kranial, Spina bifida kaudal). Neuralleistenzellen wandern aus und bilden ein breites Spektrum von Geweben: sensorische und autonome Ganglien, Schwann-Zellen, Melanozyten, Kieferknorpel und -knochen, Nebennierenmark (Chromaffin-Zellen).",
          merksatz:
            "Ektoderm: Haut + Nerven; Mesoderm: Muskel + Knochen + Herz + Niere; Endoderm: Darm + Lunge + Drüsen.",
        },
        {
          heading: "Somiten und ihre Derivate",
          text: "Somiten sind paarige Mesoderm-Segmente, die beiderseits des Neuralrohrs entstehen. Beim Menschen entstehen in der 3.–5. Woche ca. 42–44 Somiten-Paare. Jeder Somit differenziert sich in drei Bereiche: Das Sklerotom (ventral) liefert Chondrozyten und Osteoblasten für Wirbelkörper, Rippen und Teile des Schädels. Das Myotom (mittig) liefert Skelettmuskeln des Rumpfes und der Extremitäten. Das Dermatom (dorsal) liefert das dermale Bindegewebe der Haut (nicht die Epidermis, die vom Ektoderm kommt). Die Anzahl der Somiten korreliert mit dem Entwicklungsalter des Embryos und wird bei der klinischen Beurteilung von Frühaborten genutzt.",
          merksatz:
            "Notochord induziert Neuralplatte → Neuralrinne → Neuralrohr (ZNS); offener Neuroporus = Neuralrohrdefekt.",
        },
      ],
      merksätze: [],
      klinischerBezug:
        "Neuralrohrdefekte (Spina bifida, Anenzephalie) entstehen, wenn der posteriore oder anteriore Neuroporus nicht schließt. Folsäure-Supplementierung (0,4 mg/Tag präkonzeptionell) reduziert das Risiko um ca. 70 %, da Folat für die Zellteilung beim Neuralrohrschluss essenziell ist.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Aus welchem Keimblatt entstehen Gehirn und Rückenmark, und durch welchen embryonalen Prozess?",
        answer:
          "Gehirn und Rückenmark entstehen aus dem Ektoderm durch die Neurulation: Das Notochord (Mesoderm) induziert die Bildung der Neuralplatte (Ektoderm), die sich zur Neuralrinne einfaltet und zum Neuralrohr schließt, aus dem ZNS und PNS hervorgehen.",
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
          explanation:
            "Der Primitivstreifen ist eine Verdickung am kaudalen Ende des Epiblasts der zweischichtigen Keimscheibe. Epiblastzellen wandern dorthin, invaginieren durch die Primitivrinne und bilden Endoderm (verdrängt Hypoblast) und Mesoderm. Die auf der Oberfläche verbleibenden Epiblastzellen werden Ektoderm. So entstehen alle drei Keimblätter aus dem Epiblast.",
          hints: [
            "Gastrulation = drei Keimblätter aus dem Epiblast.",
            "Primitivstreifen = Invaginations-Ort am kaudalen Pol.",
          ],
          difficulty: 2,
          tags: ["primitivstreifen", "gastrulation", "keimblätter"],
        },
        {
          question:
            "Welches Keimblatt ist die Quelle für Skelettmuskel, Herzmuskel, Nieren und Gonaden?",
          options: ["Ektoderm", "Endoderm", "Neuralleiste", "Mesoderm", "Trophoblast"],
          correctIndex: 3,
          explanation:
            "Das Mesoderm (mittleres Keimblatt) gibt Skelettmuskel (aus Myotom der Somiten), Herzmuskel, glatte Muskulatur, Nieren, Gonaden, Milz, Gefäßsystem, Knochen und Bindegewebe. Ektoderm → Haut und Nervensystem; Endoderm → Darmauskleidung, Atemwege, Drüsen.",
          hints: [
            "Meso = Mitte → gibt 'innere' Körperstrukturen außer Darmauskleidung.",
            "Nieren und Gonaden = Mesoderm (Intermediärmesoderm).",
          ],
          difficulty: 1,
          tags: ["mesoderm", "skelettmuskel", "nieren"],
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
          explanation:
            "Das Notochord ist eine transiente Achsenstruktur, die aus dem Primitiv-Knoten (Hensen-Knoten) entsteht und Mesoderm-Ursprungs ist. Es sezerniert Signalmoleküle (z. B. Sonic Hedgehog), die das darüber liegende Ektoderm zur Bildung der Neuralplatte veranlassen (Neurulation). Das Notochord wird später zum Nucleus pulposus der Bandscheiben.",
          hints: [
            "Notochord = transiente Längsachse, Mesoderm-Derivat.",
            "Induktion: Notochord → Neuralplatte.",
          ],
          difficulty: 2,
          tags: ["notochord", "neuralplatte", "neurulation"],
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
          explanation:
            "Das Endoderm bildet das Epithel des gesamten Gastrointestinaltrakts (Speiseröhre bis Rektum), der Lunge (Bronchialepithel), der Harnblase und der Drüsen (Leber, Pankreas, Schilddrüse, Thymus). Epidermis → Ektoderm; Skelettmuskel, Herzmuskel → Mesoderm; Neuralleiste → Ektoderm-Derivat.",
          hints: [
            "Endoderm = innen → Auskleidung innerer Organe.",
            "Leber und Pankreas: endodermale Ausstülpungen.",
          ],
          difficulty: 1,
          tags: ["endoderm", "darmtrakt", "leber"],
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
          explanation:
            "Somiten sind paarige Mesoderm-Blöcke, die segmental beiderseits des Neuralrohrs entstehen (Woche 3–5). Jeder Somit differenziert sich in: Sklerotom (ventral → Wirbel, Rippen), Myotom (mittig → Skelettmuskulatur) und Dermatom (dorsal → dermales Bindegewebe unter der Haut). Sie sind wichtige Muster-Einheiten des Körperbaus.",
          hints: [
            "Somit = Mesoderm-Segment.",
            "Sklero → Knochen; Myo → Muskel; Derma → Haut-Bindegewebe.",
          ],
          difficulty: 2,
          tags: ["somiten", "sklerotom", "myotom"],
        },
      ],
    },
    {
      id: "bio-4-03",
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
          merksatz:
            "Embryonalperiode (Wochen 1–8) = Organogenese; Fetalperiode (ab Woche 9) = Wachstum und Reifung.",
        },
        {
          heading: "Teratogene und das Alles-oder-Nichts-Prinzip",
          text: "Teratogene können physikalischer (ionisierende Strahlung), chemischer (Thalidomid, Alkohol, Retinoide) oder biologischer Natur (Viren wie Röteln, CMV, Toxoplasma) sein. Die Schädlichkeit hängt von Dosis, Expositionszeitpunkt und genetischer Vulnerabilität des Embryos ab. Das Alles-oder-Nichts-Prinzip (Woche 1–2): In der Präimplantationsphase führt eine schwere Noxe entweder zum Absterben des Embryos oder – wenn nur wenige totipotente Zellen betroffen sind – zu einer vollständig normalen Weiterentwicklung, da verbleibende Zellen kompensieren. Ab Woche 3 gilt dieses Prinzip nicht mehr: Teratogene können spezifische Organfehlbildungen verursachen, abhängig davon, welches Organ in seiner kritischen Periode betroffen ist.",
          merksatz:
            "Kritische Periode: Teratogene in der aktivsten Differenzierungsphase → organspezifische Fehlbildung.",
        },
        {
          heading: "Fetalperiode: Wachstum und Reifung",
          text: "In der Fetalperiode (Woche 9–40) nimmt das Gewicht exponentiell zu: von ca. 10 g (Woche 12) auf ca. 3.400 g (Woche 40). Wichtige klinische Meilensteine: Die Viabilität (außerhalb des Mutterleibs überlebensfähig) wird ab ca. Woche 22–24 angesetzt, wobei intensivmedizinische Betreuung nötig ist. Ab Woche 24 produzieren Typ-II-Pneumozyten Surfactant (Dipalmitoylphosphatidylcholin), das die Alveolen bei Ausatmung offen hält. Fehlt Surfactant (Frühgeburt), kollabieren die Alveolen → Atemnotsyndrom (Respiratory Distress Syndrome, RDS). Kortikosteroide (Betamethason i.m.) werden bei drohender Frühgeburt <34 SSW verabreicht, um die Surfactant-Produktion zu beschleunigen.",
          merksatz:
            "Lungenreife / Surfactant: ab Woche 24; Frühgeburt <28 SSW → Atemnotsyndrom (RDS).",
        },
      ],
      merksätze: [],
      klinischerBezug:
        "Thalidomid (Contergan) verursachte in den 1960er Jahren Phokomelie (Flipper-artige Extremitäten), wenn es in der kritischen Periode der Extremitätenanlage (Woche 4–8) eingenommen wurde. Dies verdeutlicht, dass kritische Perioden organspezifisch sind und selbst kurze Exposition mit einem Teratogen irreversible Fehlbildungen hervorrufen kann.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Was versteht man unter dem 'Alles-oder-Nichts-Prinzip' in der Embryonalentwicklung und für welchen Zeitraum gilt es?",
        answer:
          "Das Alles-oder-Nichts-Prinzip gilt für die Präimplantationsphase (Wochen 1–2): Eine teratogene Noxe führt entweder zum Absterben des Embryos (alle/viele Zellen geschädigt) oder – da die frühen Blastomere noch totipotent sind und sich gegenseitig ersetzen können – zu einem vollständig normal weiterentwickelnden Embryo.",
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
          explanation:
            "Die Embryonalperiode umfasst Wochen 1–8 und endet nach Woche 8. In dieser Zeit findet die Organogenese statt. Ab Woche 9 beginnt die Fetalperiode mit Schwerpunkt auf Wachstum und Reifung bereits angelegter Organe. SSL am Ende Woche 8 ca. 3 cm.",
          hints: [
            "Embryo → Fötus: Wechsel nach Abschluss der Organogenese.",
            "Organogenese = Woche 3–8.",
          ],
          difficulty: 1,
          tags: ["embryonalperiode", "fetalperiode", "organogenese"],
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
          explanation:
            "Das Alles-oder-Nichts-Prinzip gilt nur für die Präimplantationsphase (Woche 1–2): Da frühe Blastomere totipotent sind, können verbleibende gesunde Zellen zerstörte ersetzen → kein Defekt. Sind zu viele Zellen geschädigt, stirbt der Embryo. Ab Woche 3 (Gastrulation, Differenzierung) gilt es nicht mehr: Teratogene können dann spezifische Fehlbildungen verursachen.",
          hints: ["Gilt nur für Woche 1–2.", "Totipotenz erlaubt Kompensation."],
          difficulty: 2,
          tags: ["alles-oder-nichts-prinzip", "teratogen", "totipotenz"],
        },
        {
          question:
            "In welcher Schwangerschaftswoche beginnt die Surfactant-Produktion der Typ-II-Pneumozyten?",
          options: ["Ab Woche 12", "Ab Woche 16", "Ab Woche 20", "Ab Woche 24", "Ab Woche 32"],
          correctIndex: 3,
          explanation:
            "Typ-II-Pneumozyten beginnen ab ca. Woche 24 mit der Produktion von Surfactant (hauptsächlich Dipalmitoylphosphatidylcholin, DPPC). Surfactant reduziert die Oberflächenspannung in Alveolen und verhindert deren Kollaps beim Ausatmen. Frühgeburten vor Woche 28 haben kritisch wenig Surfactant → Atemnotsyndrom (RDS). Kortikosteroide (Betamethason) beschleunigen die Reifung.",
          hints: ["Surfactant-Reife: 'Vierfach' = Woche 24.", "Viabilität = ab ca. Woche 22–24."],
          difficulty: 2,
          tags: ["surfactant", "typ-ii-pneumozyten", "lungenreife"],
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
          explanation:
            "Die kritische Periode ist die Zeit der intensivsten Differenzierung eines Organs. In dieser Zeit ist es am empfindlichsten gegenüber Teratogenen. Das ZNS hat die längste kritische Periode (Woche 3 bis postnatal). Alkohol wirkt während der gesamten Schwangerschaft. Ionisierende Strahlung ist ein anerkanntes physikalisches Teratogen.",
          hints: ["Kritisch = aktivste Differenzierungsphase.", "ZNS = längste kritische Periode."],
          difficulty: 1,
          tags: ["teratogen", "kritische periode", "fehlbildung"],
        },
        {
          question:
            "Welcher Entwicklungsmeilenstein entspricht ca. der 16.–20. Schwangerschaftswoche?",
          options: [
            "Beginn des Herzschlags",
            "Surfactant-Produktion beginnt",
            "Erste wahrnehmbare Kindsbewegungen (Quickening) und Lanugo-Behaarung",
            "Vollständige Lungenreife",
            "Differenzierung der äußeren Genitalien",
          ],
          correctIndex: 2,
          explanation:
            "In der 16.–20. SSW spüren Mütter erstmalig die Kindsbewegungen (Quickening); das Fetus ist mit Lanugo-Haar bedeckt. Der Herzschlag beginnt in Woche 3–4; äußere Genitalien differenzieren bis Woche 12; Surfactant-Produktion beginnt ab Woche 24; vollständige Lungenreife erst um Woche 35–37.",
          hints: [
            "Quickening = erstmalige Kindsbewegungen, Mitte der Schwangerschaft.",
            "Lanugo = feines Flaumhaar auf fetaler Haut.",
          ],
          difficulty: 1,
          tags: ["quickening", "kindsbewegungen", "lanugo"],
        },
      ],
    },
    {
      id: "bio-4-04",
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
          merksatz:
            "Plazenta: fetal (Chorionzotten) + mütterlich (Decidua basalis); kein direkter Blut-Kontakt zwischen Mutter und Kind.",
        },
        {
          heading: "Plazentare Hormonsynthese",
          text: "Die Plazenta ist ein endokrin aktives Organ. In der Frühschwangerschaft dominiert hCG (Synzytiotrophoblast), das das Corpus luteum erhält. Ab Woche 8–10 übernimmt die Plazenta zunehmend die Progesteronsynthese (aus mütterlichem Cholesterin) → hCG fällt nach der 12. SSW ab. Östrogenproduktion der Plazenta erfordert androgene Vorstufen (DHEA-S) aus der fetalen Nebenniere → das fetoplazentar-mütterliche Einheit-Konzept. Plazentares Laktogen (hPL, Humanes Plazenta-Laktogen) wird ab Woche 5 produziert: Es wirkt insulin-antagonistisch bei der Mutter (Glukose für den Fötus) und fördert das Brustwachstum.",
          merksatz:
            "Nabelschnur: 2 Arterien (sauerstoffarm vom Kind) + 1 Vene (sauerstoffreich zum Kind) – AVA.",
        },
        {
          heading: "Nabelschnur und Eihäute",
          text: "Die Nabelschnur enthält 2 Nabelarterien (Aa. umbilicales) und 1 Nabelvene (V. umbilicalis), eingehüllt in Wharton-Sulze. Merkhilfe: 'AVA' (Arterie-Vene-Arterie). Sauerstoffarmes, kohlendioxidreiches fetales Blut fließt durch die Arterien zur Plazenta; sauerstoffreiches Blut kehrt über die Vene zum Fötus zurück – also umgekehrt zur konventionellen Arterie/Vene-Definition (fetale Arterien führen 'venöses' Blut). Fehlt eine Nabelarterie (Single Umbilical Artery, SUA), ist dies mit erhöhtem Risiko für Fehlbildungen assoziiert. Das Amnion (innere Membran) produziert und umgibt Fruchtwasser (Amnionflüssigkeit, ca. 800 ml am Termin). Das Chorion (äußere Membran) liegt dem Amnion an und grenzt an die Decidua.",
          merksatz:
            "Plazentaschranke: lipophile Stoffe (Alkohol, Nikotin, viele Viren) passieren sie; IgG wird aktiv per Transzytose transferiert.",
        },
      ],
      diagram: "membrane-transport",
      merksätze: [],
      klinischerBezug:
        "Plazenta praevia (Plazenta liegt über dem inneren Muttermund) kann zu schweren Blutungen sub partu führen und ist eine Indikation für einen Kaiserschnitt. Die Placenta accreta (abnormal tiefe Invasion der Chorionzotten in das Myometrium) führt zu schweren postpartalen Blutungen, da sich die Plazenta nicht spontan löst.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Wie viele Arterien und Venen enthält die normale Nabelschnur, und welches Blut (sauerstoffreich/arm) führen sie?",
        answer:
          "Die normale Nabelschnur enthält 2 Nabelarterien (führen sauerstoffarmes, CO₂-reiches Blut vom Fötus zur Plazenta) und 1 Nabelvene (führt sauerstoffreiches Blut von der Plazenta zum Fötus). Merkhilfe: AVA.",
      },
      selfTest: [
        {
          question:
            "Aus welchen Anteilen besteht die Plazenta, und welcher ist fetalen bzw. mütterlichen Ursprungs?",
          options: [
            "Fetaler Anteil: Decidua basalis; mütterlicher Anteil: Chorionzotten.",
            "Fetaler Anteil: Chorion frondosum (Chorionzotten); mütterlicher Anteil: Decidua basalis.",
            "Beide Anteile sind mütterlichen Ursprungs.",
            "Fetaler Anteil: Amnion; mütterlicher Anteil: Chorion.",
            "Fetaler Anteil: Dottersack; mütterlicher Anteil: Decidua capsularis.",
          ],
          correctIndex: 1,
          explanation:
            "Die Plazenta hat zwei Anteile: Der fetale Anteil ist das Chorion frondosum (Chorionzotten des Trophoblasten), der mütterliche Anteil ist die Decidua basalis (transformiertes Endometrium unter der Plazenta). Die Chorionzotten tauchen in mütterliche Blutseen (intervillöse Räume) ein, mischen ihr Blut aber nicht direkt mit mütterlichem Blut.",
          hints: [
            "Chorion = Trophoblast-Derivat = fetal.",
            "Decidua = umgebautes Endometrium = mütterlich.",
          ],
          difficulty: 1,
          tags: ["plazenta", "chorionzotten", "decidua basalis"],
        },
        {
          question:
            "Welches Hormon wird von der Plazenta produziert, um in der frühen Schwangerschaft das Corpus luteum zu erhalten?",
          options: [
            "Progesteron",
            "Östrogen",
            "Luteinisierendes Hormon (LH)",
            "Humanes Choriongonadotropin (hCG)",
            "Humanes Plazentalaktogen (hPL)",
          ],
          correctIndex: 3,
          explanation:
            "hCG (humanes Choriongonadotropin) wird vom Synzytiotrophoblast der Plazenta produziert und erhält das Corpus luteum, das seinerseits Progesteron für den Endometrium-Erhalt produziert. hCG wirkt wie LH (bindet an LH-Rezeptoren). Ab Woche 8–10 übernimmt die Plazenta zunehmend die Progesteronsynthese selbst, und hCG fällt ab.",
          hints: [
            "hCG = 'Schwangerschaftshormon' = Schwangerschaftstest.",
            "LH-Analogon → erhält Corpus luteum.",
          ],
          difficulty: 1,
          tags: ["hcg", "corpus luteum", "progesteron"],
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
          explanation:
            "IgG (der einzige Immunglobulin-Isotyp, der die Plazenta passiert) wird aktiv durch Transzytose über FcRn-Rezeptoren (neonatale Fc-Rezeptoren) im Synzytiotrophoblast transportiert. Dies ist die Basis der passiven Immunität des Neugeborenen (Leihimmunität, Nestschutz). IgM, IgA, IgE und IgD passieren die Plazenta nicht.",
          hints: ["FcRn = neonataler Fc-Rezeptor.", "Nur IgG passiert Plazenta aktiv."],
          difficulty: 2,
          tags: ["igg", "plazentaschranke", "transzytose"],
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
          explanation:
            "Die Nabelvene (1×) führt sauerstoffreiches, nährstoffreiches Blut von der Plazenta zum Fötus. Die beiden Nabelarterien (2×) führen sauerstoffarmes, CO₂-reiches Blut vom Fötus zur Plazenta. Merkhilfe: AVA (Arterie-Vene-Arterie). Dies ist das Gegenteil der systemischen Konvention: fetale Arterien führen 'venöses' Blut.",
          hints: [
            "AVA = Arterie-Vene-Arterie in der Nabelschnur.",
            "Vene führt immer Blut zum Herz/Fötus hin.",
          ],
          difficulty: 1,
          tags: ["nabelvene", "nabelschnur", "sauerstoff"],
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
          explanation:
            "Die Plazentaschranke ist keine absolute Barriere. Lipophile (fettlösliche) Moleküle – darunter Alkohol, Nikotin, CO (aus Rauchen), viele Medikamente (Thalidomid, Retinoide) und lipophile Viren – können sie passieren. Im dritten Trimester wird sie tatsächlich dünner (weniger Zytotrophoblastzellen), was den Austausch erleichtert, aber auch die Permeabilität erhöht.",
          hints: [
            "Lipophil = fettlöslich = passiert Membranen leicht.",
            "Alkohol und Nikotin passieren die Plazenta.",
          ],
          difficulty: 2,
          tags: ["plazentaschranke", "lipophile stoffe", "alkohol"],
        },
      ],
    },

    // === from kap9-evolution ===
    {
      id: "bio-9-01",
      title: "Entstehung des Lebens und Endosymbiontentheorie",
      content: `## Entstehung des Lebens — Grundüberlegungen

Wie entstand das erste Leben auf der Erde vor ca. 3,8 Milliarden Jahren? Die Wissenschaft untersucht chemische und physikalische Prozesse, die zur Bildung erster biologischer Moleküle und schließlich lebender Zellen führten. Religiöse und philosophische Ansichten liegen außerhalb des naturwissenschaftlichen Rahmens.

## Miller-Urey-Experiment (1953)

Stanley Miller und Harold Urey simulierten die **präbiotische Atmosphäre** der frühen Erde: ein Gemisch aus Methan (CH₄), Ammoniak (NH₃), molekularem Wasserstoff (H₂) und Wasserdampf (H₂O). Durch elektrische Entladungen (simulierter Blitz) als Energiequelle entstanden nach wenigen Tagen **Aminosäuren** und andere organische Moleküle — die Bausteine des Lebens.

Das Experiment bewies: Organische Moleküle können aus anorganischen Verbindungen unter abiotischen Bedingungen entstehen (chemische Evolution). Kritik: Die genaue Zusammensetzung der Urathmo sphäre war anders (mehr CO₂ und N₂), aber auch mit modifizierten Zusammensetzungen entstehen organische Verbindungen.

## RNA-Welt-Hypothese

Die **RNA-Welt-Hypothese** postuliert, dass RNA die erste Informationsmolekül UND erste Katalysatormolekül war. RNA kann sowohl genetische Information speichern (wie DNA) als auch enzymatische Aktivität besitzen (Ribozyme). Dies löst das Henne-Ei-Problem: Proteine brauchen DNA/RNA für ihre Synthese, aber DNA/RNA brauchen Proteine (Enzyme). In einer RNA-Welt übernahm RNA beide Rollen. Erst später wurden DNA (stabiler für Informationsspeicherung) und Proteine (effektivere Katalyse) von der RNA übernommen.

## Protobionten

**Protobionten** (z. B. Coacervate, Liposomen) sind einfache, abgegrenzte Systeme, die durch spontane Aggregation entstehen können. Lipide bilden in wässriger Umgebung spontan Doppelschichten (Vesikel) — eine primitive Membran. Innerhalb dieser Membran konnten chemische Reaktionen isoliert ablaufen.

## Endosymbiontentheorie

Die **Endosymbiontentheorie** (Lynn Margulis, 1967) erklärt die Entstehung eukaryotischer Organellen. Mitochondrien und Chloroplasten entstanden durch **Endosymbiose**: ein größeres Prokaryot nahm ein kleineres auf, ohne es zu verdauen. Das internalisierte Bakterium wurde zum Organell.

Belege:
- Eigenes, ringförmiges DNA-Genom (ähnlich Bakterien)
- Eigene 70S-Ribosomen (wie Bakterien, nicht 80S wie Eukaryoten)
- Doppelmembran (innere Membran = ehemalige Bakterienmembran)
- Vermehrung durch binäre Teilung (unabhängig von Wirtszelle)
- Phylogenetische Ähnlichkeit zu Alphaproteobakterien (Mitochondrien) und Cyanobakterien (Chloroplasten)`,
      lernziele: [
        "Das Miller-Urey-Experiment und seine Bedeutung für die chemische Evolution erläutern",
        "Die RNA-Welt-Hypothese und ihre Begründung beschreiben",
        "Die Endosymbiontentheorie mit mindestens drei Belegen stützen",
      ],
      sections: [
        {
          heading: "RNA-Welt — Das Henne-Ei-Problem lösen",
          text: "Das zentrale Paradoxon der Lebensentstehung: Proteine katalysieren die Synthese von DNA und RNA, aber DNA und RNA sind nötig für die Proteinherstellung. Was kam zuerst? Die RNA-Welt-Hypothese löst dies: RNA-Moleküle können als Ribozyme enzymatische Aktivität entfalten (z. B. das Ribosom ist im Kern ein Ribozym — rRNA katalysiert die Peptidylübertragung). RNA kann sich selbst replizieren, mutieren und durch natürliche Selektion weiterentwickeln. Aktuelle Forschung zeigt, dass RNA unter präbiotischen Bedingungen spontan gebildet werden kann und dass primitive RNA-Enzyme (Ribozyme) einfache Reaktionen katalysieren. Mit der Zeit entwickelten sich DNA (thermodynamisch stabiler) als dauerhafteres Speichermedium und Proteine als effektivere Katalysatoren.",
          merksatz:
            "RNA-Welt: RNA war erstes Informations- UND Katalysemolekül (Ribozyme). Löst das Henne-Ei-Problem zwischen DNA/Protein.",
        },
        {
          heading: "Endosymbiontentheorie — Belege und Bedeutung",
          text: "Lynn Margulis' Theorie, die sie 1967 vorlegte und die zunächst stark kritisiert wurde, gilt heute als gesichert. Die Belege sind vielfältig und unabhängig voneinander: Mitochondrien haben ein eigenes ringförmiges Genom mit bakteriellen Merkmalen (keine Histone, kein Splicing). Ihre Ribosomen sedimentieren wie bakterielle (70S) und werden durch Antibiotika gehemmt, die auch Bakterien hemmen (z. B. Chloramphenicol, Tetracyclin). Phylogenetische Analysen zeigen, dass die mitochondriale 16S-rRNA am engsten mit Alphaproteobakterien (speziell Rickettsiales) verwandt ist. Für Chloroplasten gilt analoge Verwandtschaft mit Cyanobakterien. Die Theorie erklärt, warum eukaryotische Zellen so viel komplexer sind als prokaryotische — sie sind im Wesentlichen Chimären.",
          merksatz:
            "Endosymbiose-Belege: eigenes Genom, 70S-Ribosomen, Antibiotikasensitivität, Doppelmembran, binäre Teilung, phylogenetische Ähnlichkeit zu Bakterien.",
        },
      ],
      merksätze: [
        "Miller-Urey: CH₄ + NH₃ + H₂ + H₂O + Blitz → Aminosäuren (1953). Beweis: abiotische Entstehung organischer Moleküle.",
        "RNA-Welt: RNA als erstes Informations- und Katalysemolekül. Ribozyme = RNA-Enzyme.",
        "Endosymbiontentheorie (Margulis): Mitochondrien ← Alphaproteobakterien; Chloroplasten ← Cyanobakterien. Belege: eigenes Genom, 70S-Ribosomen, Doppelmembran.",
      ],
      klinischerBezug:
        "Die 70S-Ribosomen der Mitochondrien erklären die mitochondriale Toxizität mancher Antibiotika (z. B. Chloramphenicol hemmt 70S-Ribosomen von Bakterien UND Mitochondrien → aplastische Anämie als Nebenwirkung). Mutationen im mitochondrialen Genom (maternal vererbt) verursachen mitochondriale Erkrankungen wie das MELAS-Syndrom.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Nennen Sie drei Belege für die Endosymbiontentheorie (dass Mitochondrien aus Prokaryoten entstanden).",
        answer:
          "1. Eigenes ringförmiges DNA-Genom ohne Histone (wie Bakterien). 2. Eigene 70S-Ribosomen (wie Bakterien, nicht 80S wie eukaryotische Cytoplasma-Ribosomen). 3. Doppelmembran (innere Membran entspricht der ehemaligen Bakterienmembran, äußere dem phagozytischen Vesikel). 4. Vermehrung durch binäre Teilung unabhängig vom Zellzyklus. 5. Antibiotika hemmen mitochondriale Ribosomen (wie bei Bakterien). 6. Phylogenetische Ähnlichkeit zu Alphaproteobakterien.",
      },
      selfTest: [
        {
          question: "Was bewiesen Miller und Urey mit ihrem Experiment von 1953?",
          options: [
            "Dass das erste Leben aus dem Weltall auf die Erde kam (Panspermie)",
            "Dass organische Moleküle (z. B. Aminosäuren) unter abiotischen Bedingungen aus anorganischen Verbindungen entstehen können",
            "Dass RNA das erste Informationsmolekül war",
            "Dass eukaryotische Zellen durch Endosymbiose entstanden sind",
            "Dass die Erde anfangs sauerstoffreich war",
          ],
          correctIndex: 1,
          explanation:
            "Das Miller-Urey-Experiment zeigte, dass Aminosäuren und andere organische Moleküle spontan aus einfachen anorganischen Verbindungen (CH₄, NH₃, H₂, H₂O) unter Energiezufuhr (elektrische Entladungen) entstehen können. Dies belegt die Möglichkeit einer chemischen Evolution — der abiotischen Entstehung organischer Bausteine des Lebens auf der frühen Erde.",
          hints: [
            "Das Experiment simulierte Bedingungen der frühen Erde — welches Ergebnis war überraschend?",
            "Aminosäuren aus anorganischen Ausgangsstoffen — das war der Kern des Experiments.",
          ],
          difficulty: 1,
          tags: ["miller-urey", "aminosaeuren", "abiotisch", "chemische-evolution"],
        },
        {
          question:
            "Warum ist die RNA-Welt-Hypothese für die Erklärung des Ursprungs des Lebens wichtig?",
          options: [
            "Sie erklärt, wie das erste Wasser auf der Erde entstand",
            "Sie löst das Henne-Ei-Problem: RNA kann sowohl Informationen speichern als auch enzymatisch aktiv sein",
            "Sie belegt, dass DNA vor RNA entstanden ist",
            "Sie erklärt die Entstehung der ersten Zellmembranen",
            "Sie zeigt, dass Proteine die ersten Katalysatoren waren",
          ],
          correctIndex: 1,
          explanation:
            "Das Henne-Ei-Problem der Lebensentstehung: Proteine brauchen Nukleinsäuren für ihre Synthese, aber Nukleinsäuren brauchen Proteine (Enzyme) für ihre Replikation. Die RNA-Welt-Hypothese löst dies: RNA kann als Ribozym enzymatische Aktivität entfalten (Katalyse) UND genetische Information speichern. Eine RNA-Welt braucht daher anfangs keine Proteine.",
          hints: [
            "Was ist das besondere an Ribozymen? RNA als Enzym?",
            "Welches Paradoxon wird gelöst, wenn RNA sowohl Information speichern als auch Enzyme ersetzen kann?",
          ],
          difficulty: 2,
          tags: ["rna-welt", "ribozyme", "henne-ei-problem", "lebensentstehung"],
        },
        {
          question:
            "Welches der folgenden Merkmale von Mitochondrien stützt die Endosymbiontentheorie am stärksten?",
          options: [
            "Mitochondrien befinden sich im Cytoplasma der Zelle",
            "Mitochondrien produzieren ATP durch oxidative Phosphorylierung",
            "Mitochondrien haben eigene 70S-Ribosomen und ein ringförmiges DNA-Genom",
            "Mitochondrien sind von einer Doppelmembran umgeben",
            "Mitochondrien sind in fast allen eukaryotischen Zellen vorhanden",
          ],
          correctIndex: 2,
          explanation:
            "Die eigenen 70S-Ribosomen (wie in Bakterien, nicht 80S wie im eukaryotischen Cytoplasma) und das eigene ringförmige Genom ohne Histone sind die stärksten Belege für den bakteriellen Ursprung der Mitochondrien. Diese Merkmale sind so fundamental verschieden vom Rest der eukaryotischen Zelle, dass sie nur durch einen prokaryotischen Vorläufer erklärt werden können.",
          hints: [
            "70S vs. 80S-Ribosomen — was haben 70S mit Bakterien gemein?",
            "Ein eigenes Genom bedeutet, dass Mitochondrien genetisch eigenständig sind — wie bei welchen Organismen sonst?",
          ],
          difficulty: 2,
          tags: ["endosymbiose", "mitochondrien", "70s-ribosomen", "prokaryot"],
        },
        {
          question:
            "Welche zwei Organellen entstanden gemäß der Endosymbiontentheorie durch Endosymbiose prokaryotischer Vorläufer?",
          options: [
            "Zellkern und Ribosomen",
            "Golgi-Apparat und endoplasmatisches Retikulum",
            "Mitochondrien und Chloroplasten",
            "Lysosomen und Peroxisomen",
            "Zentriolen und Flagellen",
          ],
          correctIndex: 2,
          explanation:
            "Laut Endosymbiontentheorie entstanden Mitochondrien durch Aufnahme von Alphaproteobakterien und Chloroplasten durch Aufnahme von Cyanobakterien in eine Wirtszelle. Beide Organellen haben Merkmale, die auf ihren prokaryotischen Ursprung hinweisen: eigenes Genom, 70S-Ribosomen, Doppelmembran, binäre Teilung.",
          hints: [
            "Welche Organellen haben ein eigenes Genom? Das ist ein starker Hinweis auf endosymbiontischen Ursprung.",
            "Mitochondrien = Energiegewinnung; Chloroplasten = Photosynthese. Welche Bakterien betreiben Photosynthese?",
          ],
          difficulty: 1,
          tags: ["endosymbiose", "mitochondrien", "chloroplasten", "organellen"],
        },
        {
          question:
            "Welches Experiment lieferte den ersten Beweis für die abiotische Synthese organischer Moleküle?",
          options: [
            "Das Griffith-Experiment (Transformation von Bakterien, 1928)",
            "Das Hershey-Chase-Experiment (DNA ist Erbmaterial, 1952)",
            "Das Miller-Urey-Experiment (Aminosäurenbildung aus anorganischen Gasen, 1953)",
            "Das Meselson-Stahl-Experiment (semikonservative DNA-Replikation, 1958)",
            "Das Pasteur-Experiment (Widerlegung der Urzeugung, 1859)",
          ],
          correctIndex: 2,
          explanation:
            "Das Miller-Urey-Experiment (1953) zeigte erstmals, dass Aminosäuren und andere organische Moleküle aus einem Gemisch anorganischer Gase (CH₄, NH₃, H₂, H₂O) unter Energiezufurf (elektrische Entladungen) entstehen können. Dies legte die experimentelle Grundlage für die Theorie der chemischen Evolution.",
          hints: [
            "Miller und Urey simulierten die Bedingungen der frühen Erde — was entstand dabei überraschenderweise?",
            "Das Experiment widerlegte nicht die Urzeugung, sondern zeigte, wie organische Moleküle abiotisch entstehen können.",
          ],
          difficulty: 1,
          tags: ["miller-urey", "experiment", "organische-molekuele", "chemische-evolution"],
        },
      ],
    },
    {
      id: "bio-9-03",
      title: "Phylogenetik — Stammbäume, Homologie und Analogie",
      content: `## Überblick

Die **Phylogenetik** ist die Wissenschaft von den Verwandtschaftsbeziehungen zwischen Lebewesen und deren Evolutionsgeschichte. Sie beantwortet die Frage: Wer ist mit wem wie eng verwandt, und wann haben sich Abstammungslinien getrennt? Das Werkzeug der Phylogenetik ist der **phylogenetische Stammbaum**.

Das Wichtigste auf einen Blick:
- Stammbaum: Äste = Evolutionslinien; Nodes = gemeinsame Vorfahren; Wurzel = gemeinsamer Ursprung
- Homologie: gleicher Ursprung, evtl. verschiedene Funktion (Wirbeltier-Vorderextremitäten)
- Analogie: verschiedener Ursprung, gleiche Funktion (konvergente Evolution)
- Cladistik: Klassifikation nur nach Synapomorphien; Clade = gemeinsamer Vorfahre + ALLE Nachkommen
- Molekulare Phylogenie: DNA-Sequenzvergleiche (16S-rRNA, Cytochrom c) für präzise Verwandtschaft

---

## Phylogenetische Stammbäume lesen

Ein phylogenetischer Stammbaum (Phylogramm/Kladogramm) visualisiert Evolutionsgeschichte als verzweigtes Diagramm:

- **Äste (branches):** repräsentieren evolutionäre Abstammungslinien
- **Knoten (nodes):** Verzweigungspunkte = hypothetische gemeinsame Vorfahren zweier Linien
- **Terminale Taxa:** die rezenten (noch lebenden) oder fossilen Organismen an den Astspitzen
- **Wurzel (root):** gemeinsamer Vorfahre aller dargestellten Organismen

**Kladogramme** zeigen nur die Topologie (Verwandtschaftsverhältnisse), ohne Rücksicht auf die Astlängen. **Phylogramme** geben Astlängen proportional zur evolutionären Distanz (z. B. Anzahl Nukleotid-Substitutionen) an.

> **Merke:** Schwestertaxa teilen den nächsten gemeinsamen Vorfahren — sie sind direkte Verwandte. Die Position im Baum sagt nichts über "primitiv" oder "fortgeschritten" aus, sondern nur über Verwandtschaft.

Wichtig beim Lesen: Zwei Arten, die im Stammbaum weit voneinander entfernt sind, sind weniger eng verwandt als zwei Arten am selben Ast. Der Mensch ist näher mit Schimpansen verwandt als mit Gorillas (obwohl alle drei eng verwandt sind) — das ergibt sich aus dem molekularen Stammbaum.

---

## Die Cladistik und das Konzept der Monophylie

Die **Cladistik** (phylogenetische Systematik, Hennig 1950) klassifiziert Organismen ausschließlich nach evolutionären Verwandtschaftsbeziehungen, nicht nach äußerlicher Ähnlichkeit.

Grundbegriffe:
- **Clade (Klade):** eine **monophyletische** Gruppe = ein gemeinsamer Vorfahre + ALLE seine Nachkommen. Nur Claden sind in der modernen Systematik akzeptiert.
- **Paraphyletische Gruppe:** enthält einen gemeinsamen Vorfahren, aber nicht alle Nachkommen. Beispiel: "Reptilien" ohne Vögel — Vögel sind evolutionäre Dinosaurier-Nachkommen und gehören zum "Reptilien"-Clade.
- **Polyphyletische Gruppe:** enthält Mitglieder verschiedener Abstammungslinien ohne gemeinsamen Vorfahren. Beispiel: "warmblütige Tiere" (Vögel + Säugetiere) hat keinen gemeinsamen warmblütigen Vorfahren.

Merkmalstypen in der Cladistik:
- **Synapomorphie:** gemeinsames abgeleitetes Merkmal, das zwei Taxa von einem gemeinsamen Vorfahren geerbt haben → beweist gemeinsame Abstammung
- **Symplesiomorphie:** primitives Merkmal, das viele Taxa teilen (z. B. Wirbelsäule bei Wirbeltieren) → belegt keine enge Verwandtschaft zwischen allen Wirbeltieren

> **Merke:** Monophyletisch = vollständige Klade (Vorfahre + ALLE Nachkommen) — das Einzige, was die Cladistik akzeptiert. Paraphyletisch = unvollständig; Polyphyletisch = verschiedene Ursprünge.

---

## Homologie — Gemeinsame Abstammung trotz verschiedener Funktion

**Homologe Strukturen** sind ähnlich, weil sie vom selben Vorfahren abstammen. Die Funktion kann dabei völlig verschieden sein — entscheidend ist der gemeinsame evolutionäre Ursprung.

Das Paradebeispiel ist der **Pentadactyl-Grundbauplan der Wirbeltier-Vorderextremität:**

| Struktur | Funktion | Knochen |
|---------|---------|---------|
| Menschlicher Arm | Greifen | Humerus, Radius, Ulna, Karpalknochen, Phalangen |
| Wal-Flosse | Schwimmen | Humerus, Radius, Ulna, Karpalknochen, Phalangen |
| Vogel-Flügel | Fliegen | Humerus, Radius, Ulna, mod. Karpalknochen, fusionierte Phalangen |
| Pferde-Vorderbein | Laufen | Humerus, Radius, Ulna, Karpalknochen, 1 Phalange (Huf) |

Trotz völlig verschiedener Funktionen: immer dasselbe Grundmuster. Das kann nur durch gemeinsame Abstammung von einem Tetrapoden-Vorfahren erklärt werden.

Weitere Homologien:
- **Vestigiale Strukturen:** rudimentäre Überreste einer früher funktionellen Homologie. Beispiele: Steißbein beim Menschen (Rest einer Schwanzwirbelsäule), Beckenknochen bei Schlangen, Blinddarm-Überrest.
- **Embryologische Homologien:** Alle Wirbeltier-Embryonen durchlaufen ähnliche frühe Entwicklungsstadien (Kiemenbogen, Schwanz) — Belege für gemeinsamen Ursprung.

> **Merke:** Homologie = gleicher Ursprung → gemeinsame Abstammung bewiesen. Funktionell verschiedene, aber strukturell ähnliche Organe = Homologie.

---

## Analogie — Konvergente Evolution ohne gemeinsamen Ursprung

**Analoge Strukturen** entstehen durch **konvergente Evolution**: Verschiedene Abstammungslinien entwickeln unabhängig voneinander ähnliche Lösungen für dieselben Umweltprobleme. Der Schlüsselunterschied: Analogie erklärt sich durch selektiven Druck, nicht durch gemeinsame Abstammung.

Klassische Analogien:

- **Flügel:** Vogelflügel (modifizierte Knochen-Vorderextremität) vs. Insektenflügel (Chitinausstülpung des Exoskeletts) — beide fliegen, aber strukturell völlig verschieden. Kein gemeinsamer "geflügelter" Vorfahre.
- **Linsenauge:** Menschenauge vs. Tintenfisch-Auge — beide haben Linse, Retina und Iris, aber der Nerv tritt beim Menschenauge von innen ein (blinder Fleck), beim Tintenfisch-Auge von außen (kein blinder Fleck). Unabhängige Entstehung — konvergente Evolution.
- **Stromlinienförmiger Körper:** Hai (Fisch), Delfin (Säugetier), Ichthyosaurier (Reptil) — alle an Schnellschwimmen angepasst, aber systematisch weit entfernt.
- **Giftstachel:** Bienen (Insekten), Skorpione (Spinnentiere) — analoges Abwehrmittel ohne gemeinsamen "Stachel-Vorfahren".

> **Merke:** Analogie = gleiche Funktion, verschiedener Ursprung = konvergente Evolution. Kein Beweis für Verwandtschaft!

---

## Molekulare Phylogenie und die Molekulare Uhr

Die **molekulare Phylogenie** vergleicht DNA-, RNA- oder Protein-Sequenzen, um Verwandtschaftsbeziehungen zu rekonstruieren. Vorteil gegenüber morphologischer Phylogenie: Sequenzen sind objektiv messbar und für alle Organismen vergleichbar.

Wichtige molekulare Marker:
- **16S-rRNA:** Standardmarker für Prokaryoten-Phylogenie — universell vorhanden, hochkonserviert, aber genug variabel. Carl Woese nutzte 16S-rRNA zur Entdeckung der **Archaea** als drittes Reich des Lebens.
- **18S-rRNA:** Analog für Eukaryoten
- **Cytochrom c:** Mitochondriales Protein; Sequenzunterschiede proportional zur evolutionären Distanz
- **Mitochondriale DNA (mtDNA):** Maternal vererbt, mutiert schneller als nukleäre DNA → geeignet für jüngere Divergenzen (z. B. Menschenpopulationen)

**Molekulare Uhr:** Neutrale Mutationen in bestimmten Genen akkumulieren mit nahezu konstanter Rate. Dadurch wird der Sequenzunterschied zwischen zwei Arten zum "Zeitzeiger": Je mehr Mutationen, desto länger ist die Divergenz her. Kalibrierung mit Fossilbefunden ermöglicht absolute Zeitangaben.

Limitationen der molekularen Uhr:
- Mutationsraten variieren zwischen Genen und Organismen
- "Generation Time Effect": Organismen mit kurzen Generationszeiten akkumulieren schneller Mutationen
- Selektion kann Mutationsraten verzerren (nicht-neutrale Sequenzen)

> **Merke:** Molekulare Uhr: Sequenzunterschied ∝ Divergenzzeit. Je mehr Unterschiede, desto länger getrennt. Kalibrierung mit Fossilien für absolute Datierung.

---

## MedAT-Fokus

**Häufige Prüfungsthemen:**
- Homologie vs. Analogie unterscheiden (Beispiele: Vorderextremitäten vs. Flügel Vogel/Insekt)
- Definition Clade/monophyletisch — Warum sind "Reptilien" ohne Vögel paraphyletisch?
- Stammbäume lesen: Welche Arten sind nächste Verwandte? Wer ist der gemeinsame Vorfahre?
- Molekulare Uhr: Was misst sie? (neutrale Mutationsrate als Zeitmaß)

**Typische Verwechslungen:**
- Homolog = gleicher Ursprung (NICHT gleiche Funktion)
- Analog = gleiche Funktion (NICHT gleicher Ursprung)
- "Reptilien" ohne Vögel ist eine **paraphyletische** Gruppe, kein akzeptierter Clade
- 16S-rRNA = Bakterien; 18S-rRNA = Eukaryoten`,
      lernziele: [
        "Homologe von analogen Strukturen anhand von Beispielen unterscheiden",
        "Phylogenetische Stammbäume lesen und Verwandtschaftsbeziehungen ableiten",
        "Die Bedeutung molekularer Phylogenie für die Rekonstruktion von Evolutionsgeschichte erläutern",
      ],
      sections: [
        {
          heading: "Homologie vs. Analogie — Ein kritischer Unterschied",
          text: "Homologie und Analogie werden häufig verwechselt. Der entscheidende Unterschied liegt im Ursprung: Homologe Strukturen haben denselben evolutionären Ursprung (common ancestry) — sie sind strukturell oft ähnlich, obwohl die Funktion verschieden ist. Analoge Strukturen haben unterschiedliche evolutionäre Ursprünge — sie sind funktionell ähnlich (durch konvergente Evolution auf dasselbe Problem gestoßen), aber strukturell verschieden. Als Faustregel: Homologie → gemeinsame Herkunft, ähnlicher Bau; Analogie → unabhängige Entstehung, ähnliche Funktion. Ein besonders eindrucksvolles Analogiebeispiel ist das Linsenauge von Tintenfischen und Wirbeltieren: Beide haben unabhängig ein optisches System mit Linse, Retina und Iris entwickelt — aber die Photorezeptoren zeigen grundlegend verschiedene Struktur und Entwicklung.",
          merksatz:
            "Homologie = gleicher Ursprung, verschiedene Funktion (Vogelflügel und Menschenarm). Analogie = verschiedener Ursprung, gleiche Funktion (Vogelflügel und Insektenflügel).",
        },
        {
          heading: "Molekulare Uhr — Evolution zeitlich datieren",
          text: "Die Idee der molekularen Uhr basiert auf der Beobachtung, dass neutrale Mutationen in bestimmten Genen mit einer nahezu konstanten Rate akkumulieren. Je mehr Sequenzunterschiede zwischen zwei Arten, desto weiter sind ihre Abstammungslinien auseinander gelaufen (desto länger ist der gemeinsame Vorfahre her). Durch Kalibrierung mit datierten Fossilien können absolute Zeitpunkte berechnet werden. Beispiel: Der molekulare Vergleich von Cytochrom c zwischen Mensch und Schimpanse zeigt sehr wenige Unterschiede (beide divergierten vor ca. 6–7 Millionen Jahren). Molekulare Uhren haben Diskrepanzen zu fossilen Befunden aufgedeckt (z. B. die frühere Trennung von Wirbeltier-Klassen als bisher angenommen). Probleme: Mutationsraten sind nicht immer konstant (Generation Time Effect, unterschiedliche Selektionsdrücke).",
          merksatz:
            "Molekulare Uhr: neutrale Mutationen akkumulieren konstant → Sequenzunterschiede proportional zu Zeit seit Divergenz. Kalibrierung mit Fossilien.",
        },
      ],
      merksätze: [
        "Homologe Strukturen: gleicher evolutionärer Ursprung, verschiedene Funktion (Wirbeltier-Vorderextremitäten).",
        "Analoge Strukturen: konvergente Evolution, verschiedener Ursprung, gleiche Funktion (Flügel von Vogel und Insekt).",
        "Cladistik: Klassifikation nach Synapomorphien (gemeinsamen abgeleiteten Merkmalen). Monophyletisch = gemeinsamer Vorfahre + alle Nachkommen.",
      ],
      klinischerBezug:
        "Molekulare Phylogenie ist in der Infektionsmedizin essenziell: Phylogenetische Analysen von Virussequenzen (z. B. HIV, SARS-CoV-2) rekonstruieren Ausbreitungswege von Epidemien (Genomic Epidemiology) und identifizieren Ursprungsorte von Pandemien. Bei SARS-CoV-2 konnte die phylogenetische Analyse zeigen, dass das Virus einmalig in Menschen eingetreten ist und sich danach weltweit verbreitet hat.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie den Unterschied zwischen homologen und analogen Strukturen und nennen Sie je ein Beispiel.",
        answer:
          "Homologe Strukturen sind auf gemeinsame Abstammung zurückzuführen — sie haben denselben evolutionären Ursprung und oft einen ähnlichen Grundbauplan, obwohl die Funktion verschieden sein kann. Beispiel: Arm des Menschen und Vorderflosse des Wals (beide haben Humerus, Radius, Ulna — gemeinsamer Vorfahre). Analoge Strukturen entstanden durch konvergente Evolution unabhängig voneinander als Anpassung an ähnliche Umweltbedingungen — sie haben verschiedenen Ursprung, erfüllen aber dieselbe Funktion. Beispiel: Flügel des Vogels (modifizierter Knochenarm) und Flügel des Insekts (Exoskelett-Ausstülpung).",
      },
      selfTest: [
        {
          question:
            "Der Arm des Menschen, die Flosse des Wals und der Flügel des Vogels sind strukturell ähnlich (Humerus, Radius, Ulna). Wie bezeichnet man dieses Verhältnis?",
          options: [
            "Analoge Strukturen (konvergente Evolution)",
            "Konvergente Merkmale ohne gemeinsamen Ursprung",
            "Homologe Strukturen (gemeinsame Abstammung)",
            "Rudimentäre Strukturen ohne Funktion",
            "Atavismen (Rückschlag zu ursprünglicheren Merkmalen)",
          ],
          correctIndex: 2,
          explanation:
            "Arm, Flosse und Flügel sind homologe Strukturen — sie teilen denselben Grundbauplan (Humerus, Radius, Ulna, Karpalknochen, Phalangen) aufgrund gemeinsamer Abstammung von einem Tetrapoden-Vorfahren. Obwohl die Funktionen verschieden sind (Greifen, Schwimmen, Fliegen), belegt der identische Bauplan die gemeinsame Evolutionsgeschichte.",
          hints: [
            "Gleicher Bauplan trotz verschiedener Funktion — welches Konzept beschreibt das?",
            "Homolog = gleicher Ursprung; analog = gleiche Funktion, unterschiedlicher Ursprung.",
          ],
          difficulty: 1,
          tags: ["homologie", "gemeinsamer-ursprung", "wirbeltiere", "vorderextremitaet"],
        },
        {
          question:
            "Vogelflügel und Insektenflügel sind beides Flugorgane. Warum sind sie analog, nicht homolog?",
          options: [
            "Weil sie beide aus demselben genetischen Grundbauplan entstanden",
            "Weil sie keine funktionelle Ähnlichkeit haben",
            "Weil sie unabhängig in verschiedenen Abstammungslinien entstanden und strukturell grundlegend verschieden sind",
            "Weil Vogelflügel aus Federn bestehen und Insektenflügel nicht",
            "Weil Vögel und Insekten beide zu den Arthropoden gehören",
          ],
          correctIndex: 2,
          explanation:
            "Vogelflügel sind modifizierte Vorderextremitäten (Knochen: Humerus, Radius, Ulna, modifizierte Karpalknochen). Insektenflügel sind Ausstülpungen des Exoskeletts und haben keinen knöchernen Grundbauplan. Beide entstanden unabhängig voneinander in verschiedenen evolutionären Abstammungslinien (Wirbeltiere vs. Arthropoden) als Lösung für dasselbe Problem (Fliegen) — das ist konvergente Evolution und führt zu analogen, nicht homologen Strukturen.",
          hints: [
            "Analoge Strukturen lösen dasselbe Problem, entstehen aber unabhängig in verschiedenen Abstammungslinien.",
            "Was ist der strukturelle Aufbau eines Vogelflügels? Und was der eines Insektenflügels?",
          ],
          difficulty: 2,
          tags: ["analogie", "konvergente-evolution", "fluegel", "verschiedener-ursprung"],
        },
        {
          question: "Was ist ein 'Clade' in der Cladistik?",
          options: [
            "Eine Art, die ausgestorben ist",
            "Eine Gruppe von Organismen ohne gemeinsamen Vorfahren",
            "Eine monophyletische Gruppe: ein gemeinsamer Vorfahre und ALLE seine Nachkommen",
            "Zwei Arten, die eine konvergente Merkmal teilen",
            "Ein Ast in einem phylogenetischen Stammbaum ohne Verzweigung",
          ],
          correctIndex: 2,
          explanation:
            "Ein Clade (Klade) ist eine monophyletische Gruppe, die aus einem gemeinsamen Vorfahren und ALLEN seinen Nachkommen besteht. Die Cladistik klassifiziert Organismen ausschließlich nach Claden — polyphyletische (verschiedene Vorfahren) und paraphyletische (gemeinsamer Vorfahre, aber nicht alle Nachkommen) Gruppen werden abgelehnt. Beispiel: 'Reptilien' ohne Vögel ist eine paraphyletische Gruppe — Vögel sind evolutionäre Nachkommen der Dinosaurier und gehören daher zum 'Reptilien'-Clade.",
          hints: [
            "Clade = monophyletisch = ein Vorfahre + ALLE Nachkommen (kein Ausschluss).",
            "Die Cladistik lehnt paraphyletische Gruppen ab — was ist das Problem mit 'Reptilien' ohne Vögel?",
          ],
          difficulty: 2,
          tags: ["cladistik", "monophyletisch", "stammbaum", "phylogenetik"],
        },
        {
          question: "Was misst die 'Molekulare Uhr' in der Phylogenetik?",
          options: [
            "Die Geburtenrate einer Art über geologische Zeiträume",
            "Die Akkumulation neutraler Mutationen über Zeit zur Datierung von Divergenzereignissen",
            "Die Körpergröße von Organismen im Verhältnis zur Evolutionsgeschwindigkeit",
            "Die Anzahl der Fossilfunde pro Million Jahre",
            "Den Zeitpunkt, zu dem die ersten Zellen auf der Erde entstanden",
          ],
          correctIndex: 1,
          explanation:
            "Die molekulare Uhr basiert auf der Idee, dass neutrale Mutationen in bestimmten Genen mit einer nahezu konstanten Rate akkumulieren. Durch Vergleich der Sequenzunterschiede zwischen zwei Arten und Kalibrierung mit datierten Fossilien kann der Zeitpunkt der Divergenz abgeschätzt werden: Je mehr Sequenzunterschiede, desto länger liegt der gemeinsame Vorfahre zurück.",
          hints: [
            "Eine 'Uhr' misst Zeit — welche molekulare Eigenschaft dient als Zeitmaß?",
            "Neutrale Mutationen akkumulieren ohne Selektionsdruck — wie hängt das mit vergangener Zeit zusammen?",
          ],
          difficulty: 2,
          tags: ["molekulare-uhr", "mutationsrate", "divergenz", "fossilien"],
        },
        {
          question:
            "Welche Sequenz wird häufig für phylogenetische Analysen von Bakterien verwendet und warum?",
          options: [
            "Die Sequenz des Insulingens — weil es in allen Lebewesen vorkommt",
            "Die 16S-rRNA-Sequenz — weil sie hochkonserviert ist, aber genug Variabilität für Verwandtschaftsanalysen zeigt",
            "Die Sequenz des Histon H1-Gens — weil Histone nur in Eukaryoten vorkommen",
            "Die mitochondriale DNA — weil sie schnell mutiert",
            "Die Telomersequenz — weil sie in allen Zellen identisch ist",
          ],
          correctIndex: 1,
          explanation:
            "Die 16S-rRNA ist das Standardmolekül für bakterielle Phylogenetik: Sie ist in allen Bakterien vorhanden (universell), ihr Grundbauplan ist stark konserviert (Funktion im Ribosom muss erhalten bleiben), hat aber genug variable Regionen, um Verwandtschaftsgrade zu unterscheiden. Carl Woese nutzte 16S-rRNA-Vergleiche zur Entdeckung der Archaea als drittes Domäne des Lebens.",
          hints: [
            "Ein Marker für Phylogenie muss universal und hochkonserviert, aber doch variabel genug sein.",
            "Carl Woese entdeckte mit diesem Molekül die Archaea als eigenständige Domäne.",
          ],
          difficulty: 3,
          tags: ["16s-rrna", "bakterielle-phylogenie", "archaea", "woese"],
        },
      ],
    },
    {
      id: "bio-9-04",
      title: "Evolutionstheorie — Darwin, Selektion und Synthetische Theorie",
      content: `## Überblick

Die Evolutionstheorie erklärt, wie die Vielfalt des Lebens entstanden ist und sich verändert. Charles Darwin lieferte 1859 mit "On the Origin of Species" das erste kohärente mechanistische Modell: die **natürliche Selektion**. Die **Synthetische Evolutionstheorie** des 20. Jahrhunderts verknüpfte Darwins Ideen mit der Mendelschen Genetik und der Populationsgenetik zu einem mathematisch fundierten Rahmen.

Das Wichtigste auf einen Blick:
- Darwin: 4 Prinzipien → natürliche Selektion: Variation, Erblichkeit, Überproduktion, Differentialreproduktion
- 3 Selektionsarten: stabilisierend (Mittelwert bleibt), gerichtet (Mittelwert verschiebt sich), disruptiv (Extreme bevorzugt)
- Sexuelle Selektion: intrasexuell (Konkurrenz) vs. intersexuell (Partnerwahl) → sexueller Dimorphismus
- Fitness = reproduktiver Erfolg, NICHT physische Stärke
- Neue Synthese: Evolution = Veränderung der Allelfrequenzen (Darwin + Mendel + Populationsgenetik)

---

## Darwin und Wallace — Die Entdeckung der natürlichen Selektion

**Charles Darwin** und **Alfred Russel Wallace** entwickelten unabhängig voneinander dieselbe Idee. Darwin hatte sie seit 1838 ausgearbeitet, zögerte aber mit der Veröffentlichung. Erst als Wallace ihm 1858 ein Manuskript mit derselben Theorie schickte, veröffentlichten beide gemeinsam (Linnean Society, 1858). 1859 erschien Darwins Hauptwerk "On the Origin of Species".

Darwins entscheidende Beobachtungen:
- **Galapagos-Finken:** 13–15 Arten mit verschiedenen Schnabelformen, je nach Nahrungsquelle auf verschiedenen Inseln → adaptive Radiation aus einer Gründerpopulation
- **Fossilienbefunde:** ausgestorbene Formen ähneln modernen Formen derselben Region → Abstammung mit Wandel
- **Malthus-Prinzip:** Bevölkerungen wachsen schneller als Ressourcen → Kampf ums Dasein, nicht alle können überleben

> **Merke:** Darwin kannte Mendels Genetik (veröffentlicht 1866) nicht — er wusste, dass Merkmale vererbt werden, aber nicht wie. Das war die entscheidende Lücke seiner Theorie.

---

## Darwins vier Kernprinzipien der natürlichen Selektion

Natürliche Selektion setzt vier Bedingungen voraus:

1. **Variation:** Individuen einer Population unterscheiden sich in erblichen Merkmalen (z. B. Schnabellänge, Körpergröße, Fellfarbe). Ohne Variation: keine Selektion möglich.
2. **Erblichkeit (Heredity):** Merkmale werden von Eltern an Nachkommen weitergegeben. Selektion wirkt nur, wenn Merkmale vererbt werden (nicht erworbene, nicht-genetische Eigenschaften).
3. **Überproduktion:** Mehr Individuen werden geboren/produziert, als die Umwelt tragen kann (Nahrung, Raum, Paarungspartner sind begrenzt). → Kampf ums Dasein.
4. **Differential-Reproduktion (unterschiedliche Fitness):** Individuen mit vorteilhaften Merkmalen überleben häufiger und produzieren mehr überlebensfähige Nachkommen → vorteilhafte Merkmale häufen sich über Generationen an.

**Das Ergebnis:** Die Zusammensetzung der Population verändert sich über Generationen — die angepassteren Varianten werden häufiger. Das ist **natürliche Selektion**.

> **Merke:** Selektion wirkt auf Phänotypen (was sichtbar ist), aber vererbt werden Genotypen. Selektion verändert Allelhäufigkeiten.

---

## Fitness — Was bedeutet "Überleben des Tüchtigsten"?

"Survival of the Fittest" (Herbert Spencer, nicht Darwin) wird häufig missverstanden. In der Evolutionsbiologie bedeutet **Fitness** ausschließlich **reproduktiven Erfolg** — die Fähigkeit, überlebensfähige, fertile Nachkommen zu erzeugen.

- Ein körperlich starkes, aber infertiles Individuum hat **Fitness = 0**
- Ein kleines, schwächliches Individuum, das 20 Nachkommen hinterlässt, hat **hohe Fitness**
- Fitness ist immer **relativ** (zur aktuellen Population) und **umweltabhängig** (was heute vorteilhaft ist, kann in veränderter Umwelt neutral oder schädlich sein)

**Inklusive Fitness (Hamilton):** Neben der direkten Reproduktion (eigene Nachkommen) kann Fitness auch durch Verwandtenunterstützung erhöht werden. Ein Individuum kann seine Gene durch Hilfe für genetisch verwandte Individuen verbreiten (Kin Selection). Beispiel: Arbeiterbienen, die auf eigene Reproduktion verzichten und die Königin unterstützen — da sie mit den Königin-Nachkommen zu 75% verwandt sind (haplodiploide Genetik), profitiert ihre inklusive Fitness.

> **Merke:** Fitness ≠ Stärke. Fitness = reproduktiver Erfolg. Inklusive Fitness = direkte + indirekte Reproduktion durch Verwandte.

---

## Die drei Selektionsarten

Alle drei verändern die Verteilung eines Merkmals in der Population, aber auf verschiedene Weisen:

**1. Stabilisierende Selektion:**
- Beide Extreme werden benachteiligt, der **Mittelwert** wird begünstigt
- Die Merkmalsvarianz nimmt ab; der Mittelwert bleibt gleich
- Beispiele: Geburtsgewicht beim Menschen (zu leicht → Organunreife; zu schwer → Geburtskomplikationen; mittleres Gewicht optimal); Nestgröße bei Vögeln (zu groß → wenig Futter pro Küken; zu klein → geringe Reproduktion)
- Häufig bei gut adaptierten Populationen in stabiler Umwelt

**2. Gerichtete Selektion:**
- Ein Extrem wird bevorzugt → der **Mittelwert verschiebt sich** in eine Richtung
- Die Merkmalsvarianz kann sinken (wenn Extreme benachteiligt), bleibt oder steigt
- Beispiele: Antibiotikaresistenz (resistente Bakterien überleben, nicht-resistente sterben → Resistenzallel häuft sich an); Körpergröße bei Tieren in kälteren Klimata (Bergmann'sche Regel); industrieller Melanismus (Birkenspanner — dunkle Form in verschmutzten Gebieten bevorzugt)
- Treibt rasche Anpassung in veränderter Umwelt

**3. Disruptive Selektion:**
- Beide **Extreme** werden bevorzugt, der Mittelwert benachteiligt
- Die Merkmalsvarianz nimmt zu; Population kann in zwei Gruppen aufgespalten werden
- Kann zur **sympatrischen Artbildung** führen
- Beispiele: Schnabelgröße bei Darwinfinken (großer Schnabel für harte Samen; kleiner Schnabel für Insekten; mittlerer Schnabel ineffizient für beides); Körpergröße bei manchen Schnecken (kleine Schnecken passen in eine Spalte, große Schnecken überwältigen Räuber; mittlere werden gefressen)

> **Merke:** Stabilisierend = Mittelwert bleibt, Varianz sinkt. Gerichtet = Mittelwert verschiebt sich. Disruptiv = Extreme bevorzugt, Varianz steigt, Gefahr der Aufspaltung.

---

## Sexuelle Selektion

Darwin erkannte 1871, dass nicht alle Merkmale durch Überlebensvorteil erklärbar sind. Pfauenfedern erscheinen für das Überleben eher nachteilig (groß, auffällig, Fressfeinde). Die Erklärung: **Sexuelle Selektion** — Selektion durch Konkurrenz um Paarungspartner.

**Intrasexuelle Selektion (male-male competition):**
- Konkurrenz zwischen Individuen desselben Geschlechts (meist Männchen) um Zugang zu Paarungspartnern
- Beispiele: Hirschkämpfe (Geweih als Waffe), Elefantenrobben (Kämpfe um Harem), Hahnen-Kämpfe
- Ergebnis: Merkmale, die im Kampf vorteilhaft sind, werden selektiert (Körpergröße, Waffen)

**Intersexuelle Selektion (female choice):**
- Das eine Geschlecht (meist Weibchen) wählt aktiv unter Paarungskandidaten aus
- Beispiele: Pfauenweibchen wählen Männchen mit besonders auffälligem Schwanzgefieder; Schwalbenweibchen bevorzugen symmetrische Schwanzfedern; Guppy-Weibchen wählen farbenprächtige Männchen
- **Hypothesen warum:** "Honest signal" — aufwendige Merkmale sind nur bei gesunden Individuen möglich (Handicap-Prinzip, Zahavi); "Gute Gene" — auffällige Merkmale zeigen genetische Qualität

Sexuelle Selektion erklärt **sexuellen Dimorphismus** (morphologische Unterschiede zwischen Männchen und Weibchen derselben Art) — häufig sind Männchen größer, bunter oder stärker bewaffnet.

> **Merke:** Intrasexuell = Konkurrenz innerhalb eines Geschlechts. Intersexuell = Wahl durch das andere Geschlecht. Beide → sexueller Dimorphismus.

---

## Synthetische Evolutionstheorie (Neue Synthese)

Darwin kannte Mendels Genetik nicht — sein fundamentales Problem: Wie wird Variation vererbt? Er postulierte "Pangenes" (falsch). **Gregor Mendel** (1866) lieferte die Antwort mit Erbgesetzen, aber seine Arbeit blieb bis 1900 unbeachtet.

Die **Synthetische Evolutionstheorie (Neue Synthese, 1930–1950er)** vereinte:
- **Darwins Selektionstheorie** (natürliche Selektion als Motor)
- **Mendelsche Genetik** (erbliche Variation durch diskrete Allele)
- **Populationsgenetik** (Hardy-Weinberg, Allelfrequenzveränderungen; R.A. Fisher, J.B.S. Haldane, Sewall Wright)
- **Paläontologie** (Fossilbefunde als Evolutionsbelege; G.G. Simpson)
- **Systematik** (Artbegriff, Artbildung; Ernst Mayr)

**Kernaussage:** Evolution = **Veränderung der Allelfrequenzen in einer Population über Zeit**

Vier Evolutionsfaktoren (Kräfte, die Allelfrequenzen verändern):
1. **Mutation** — einziger Mechanismus, der neue Allele erzeugt (Rohstoff)
2. **Selektion** — nicht-zufällige, gerichtete Veränderung
3. **Gendrift** — zufällige Veränderungen in kleinen Populationen
4. **Genfluss** — Alleltransfer zwischen Populationen durch Migration

> **Merke:** Neue Synthese: Darwin + Mendel + Populationsgenetik. Evolution = Allelfrequenzänderung. Faktoren: Mutation (Rohstoff), Selektion (Richtung), Gendrift (Zufall), Genfluss (Austausch).

---

## MedAT-Fokus

**Häufige Prüfungsthemen:**
- Darwins 4 Prinzipien (Variation, Erblichkeit, Überproduktion, Differentialreproduktion)
- Selektionsarten mit Beispielen: stabilisierend (Geburtsgewicht), gerichtet (Antibiotikaresistenz), disruptiv (zwei Nahrungsquellen)
- Fitness als reproduktiver Erfolg, NICHT physische Stärke
- Sexuelle Selektion: intrasexuell vs. intersexuell unterscheiden

**Typische Verwechslungen:**
- "Survival of the Fittest" bedeutet NICHT "der Stärkste überlebt", sondern "der Fortpflanzungsfähigste"
- Lamarckismus (Vererbung erworbener Eigenschaften) ist FALSCH — nicht mit Darwin verwechseln
- Selektion wirkt auf Phänotypen, verändert aber Genotyp-Häufigkeiten`,
      lernziele: [
        "Darwins vier Kernprinzipien der natürlichen Selektion nennen und erläutern",
        "Die drei Selektionsarten (stabilisierend, gerichtet, disruptiv) unterscheiden und mit Beispielen belegen",
        "Die Synthetische Evolutionstheorie und ihre Integration von Genetik und Darwinismus beschreiben",
      ],
      sections: [
        {
          heading: "Fitness — Was bedeutet 'Überleben des Tüchtigsten'?",
          text: "Der Begriff 'Survival of the Fittest' (Spencer, nicht Darwin) wird oft missverstanden. In der Evolutionsbiologie bedeutet Fitness nicht physische Stärke, sondern **reproduktive Fitness**: die Fähigkeit eines Individuums, überlebensfähige, fertile Nachkommen zu erzeugen. Ein schwächliches, aber besonders fertiles Individuum hat höhere Fitness als ein starkes, nicht-reproduktives Individuum. Inklusive Fitness (Hamilton) erweitert das Konzept: Indirekte Fitness durch Verwandtenunterstützung (Altruismus gegenüber genetisch verwandten Individuen). Beispiel: Eine Biene, die zugunsten der Königin auf eigene Reproduktion verzichtet, aber die gemeinsamen Gene durch die Königin weitervererbt (kin selection). Fitness ist immer relativ zur aktuellen Umwelt — was heute vorteilhaft ist, kann in veränderter Umwelt neutral oder nachteilig sein.",
          merksatz:
            "Fitness = reproduktive Erfolg (nicht Kraft). Inklusive Fitness = eigene + indirekte Reproduktion durch Verwandte (Kin Selection).",
        },
        {
          heading: "Synthetische Evolutionstheorie — Integration der Erkenntnisse",
          text: "Darwin kannte Mendels Arbeit nicht (obwohl sie 1866 veröffentlicht wurde). Die Neue Synthese der 1930–1950er Jahre integrierte beide: Mutationen im Mendelschen Sinne liefern die genetische Variation, auf der natürliche Selektion wirkt. R.A. Fisher (The Genetical Theory of Natural Selection, 1930) zeigte mathematisch, dass Darwinismus und Mendelsche Genetik kompatibel sind. Theodosius Dobzhansky ('Genetics and the Origin of Species', 1937) verknüpfte Populationsgenetik mit Evolutionsbiologie. Ernst Mayr definierte den biologischen Artbegriff und analysierte Artbildungsmechanismen. Das Ergebnis: Die Synthetische Evolutionstheorie definiert Evolution als Veränderung der Allelfrequenzen in einer Population — eine präzise, quantifizierbare Definition.",
          merksatz:
            "Neue Synthese = Darwin (Selektion) + Mendel (Genetik) + Populationsgenetik. Evolution = Veränderung der Allelfrequenzen in Populationen über Zeit.",
        },
      ],
      merksätze: [
        "Darwin: Variation + Erblichkeit + Überproduktion + Differentialreproduktion → natürliche Selektion.",
        "Selektionsarten: stabilisierend (Mittelwert bleibt) | gerichtet (Mittelwert verschiebt sich) | disruptiv (Extreme bevorzugt).",
        "Synthetische Theorie: Evolution = Veränderung der Allelfrequenzen. Faktoren: Mutation, Selektion, Gendrift, Genfluss.",
      ],
      klinischerBezug:
        "Gerichtete Selektion ist in der Medizin hoch relevant: Antibiotika-Einsatz selektiert resistente Bakterienstämme (MRSA, multiresistente Tuberkulose). Das Verständnis der Selektionsdynamik ist essenziell für die Entwicklung von Resistenz-Präventionsstrategien (Antibiotic Stewardship, Therapierotation).",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Was versteht Darwin unter 'natürlicher Selektion'? Erläutern Sie die vier Voraussetzungen.",
        answer:
          "Natürliche Selektion setzt vier Bedingungen voraus: (1) Variation: Individuen einer Population unterscheiden sich in vererbbaren Merkmalen. (2) Erblichkeit: Diese Merkmale werden an Nachkommen weitergegeben. (3) Überproduktion: Es werden mehr Individuen geboren als die Umwelt tragen kann (Kampf ums Dasein). (4) Differential-Reproduktion: Individuen mit vorteilhaften Merkmalen überleben und reproduzieren sich häufiger. Das Ergebnis: Vorteilhafte Merkmale nehmen in der Population über Generationen zu — die Population verändert sich (Evolution).",
      },
      selfTest: [
        {
          question:
            "Welche Selektionsform ist zu erwarten, wenn in einer Population zwei verschiedene Nahrungsquellen verfügbar sind und Individuen mit extremen Merkmalswerten (z. B. sehr großer oder sehr kleiner Schnabel) bevorzugt werden?",
          options: [
            "Stabilisierende Selektion",
            "Gerichtete Selektion",
            "Disruptive Selektion",
            "Sexuelle Selektion",
            "Balancierte Selektion",
          ],
          correctIndex: 2,
          explanation:
            "Disruptive Selektion bevorzugt beide Extreme des Merkmalsspektrums und selektiert gegen den Mittelwert. Wenn zwei verschiedene Nahrungsquellen vorhanden sind (z. B. harte Samen und weiche Insekten), sind Individuen mit sehr großem Schnabel (hart) und sehr kleinem Schnabel (weich) am vorteilhaftesten, während Individuen mit mittlerem Schnabel weder das eine noch das andere gut können. Disruptive Selektion kann zur sympatrischen Artbildung führen.",
          hints: [
            "Wenn zwei verschiedene Nischen besetzt werden, welche Merkmale werden bevorzugt — die mittleren oder die Extreme?",
            "Disruptiv = auseinanderreißend. Welche Selektionsform teilt eine Population auf?",
          ],
          difficulty: 2,
          tags: ["disruptive-selektion", "selektion", "artbildung", "nahrungsnischen"],
        },
        {
          question: "Was bedeutet 'Fitness' in der Evolutionsbiologie?",
          options: [
            "Die physische Stärke und Ausdauer eines Individuums",
            "Die Körpergröße eines Individuums im Vergleich zum Durchschnitt",
            "Der reproduktive Erfolg eines Individuums — die Fähigkeit, überlebensfähige Nachkommen zu erzeugen",
            "Die Geschwindigkeit, mit der ein Individuum mutiert",
            "Die Immunstärke eines Organismus gegenüber Pathogenen",
          ],
          correctIndex: 2,
          explanation:
            "In der Evolutionsbiologie bezeichnet Fitness den relativen reproduktiven Erfolg — wie viele überlebensfähige, fertile Nachkommen ein Individuum im Vergleich zu anderen Individuen der Population erzeugt. Ein Individuum mit hoher Fitness muss nicht physisch stark sein, sondern muss mehr Nachkommen hinterlassen, die selbst wieder Nachkommen erzeugen. Fitness ist immer relativ und umweltabhängig.",
          hints: [
            "Evolution durch natürliche Selektion misst Erfolg durch Reproduktion, nicht durch Überleben allein.",
            "'Survival of the Fittest' bedeutet 'Überleben des Fortpflanzungsfähigsten', nicht des Stärksten.",
          ],
          difficulty: 1,
          tags: ["fitness", "reproduktiver-erfolg", "selektion", "darwin"],
        },
        {
          question: "Was integriert die Synthetische Evolutionstheorie (Neue Synthese)?",
          options: [
            "Darwins Selektionstheorie und die Epigenetik",
            "Darwins Selektionstheorie, die Mendelsche Genetik und die Populationsgenetik",
            "Lamarckismus und Darwinismus",
            "Panspermie-Theorie und die RNA-Welt-Hypothese",
            "Endosymbiontentheorie und Cladistik",
          ],
          correctIndex: 1,
          explanation:
            "Die Synthetische Evolutionstheorie (1930–1950er) verbindet Darwins Theorie der natürlichen Selektion mit der Mendelschen Genetik (erbliche Variation durch Allele) und der Populationsgenetik (Allelfrequenzveränderungen, Hardy-Weinberg). Diese Integration definiert Evolution präzise als Veränderung der Allelfrequenzen in Populationen und erklärt die genetischen Grundlagen von Variation und Selektion.",
          hints: [
            "Darwin kannte Mendels Genetik nicht — was hat die Neue Synthese hinzugefügt?",
            "Evolution = Veränderung der Allelfrequenzen — welche Disziplin untersucht Allelfrequenzen?",
          ],
          difficulty: 2,
          tags: [
            "synthetische-evolutionstheorie",
            "neue-synthese",
            "darwin-mendel",
            "allelfrequenz",
          ],
        },
        {
          question:
            "Beim menschlichen Geburtsgewicht ist bekannt, dass sehr leichte und sehr schwere Babys höhere Sterblichkeit haben, Babys mit mittlerem Gewicht am besten überleben. Welche Selektionsform ist das?",
          options: [
            "Gerichtete Selektion",
            "Disruptive Selektion",
            "Stabilisierende Selektion",
            "Sexuelle Selektion",
            "Künstliche Selektion",
          ],
          correctIndex: 2,
          explanation:
            "Stabilisierende Selektion bevorzugt den Mittelwert des Merkmalsspektrums und selektiert gegen beide Extreme. Beim Geburtsgewicht überleben Babys mit durchschnittlichem Gewicht am besten — zu leichte Babys haben unentwickelte Organe, zu schwere Babys können zu Geburtskomplikationen führen. Die Folge: Das durchschnittliche Geburtsgewicht bleibt über Generationen relativ konstant.",
          hints: [
            "Stabilisierend = der Mittelwert wird bevorzugt, Extreme werden benachteiligt.",
            "Was passiert mit der Varianz des Merkmals unter stabilisierender Selektion — nimmt sie zu oder ab?",
          ],
          difficulty: 2,
          tags: ["stabilisierende-selektion", "geburtsgewicht", "mittelwert", "selektion"],
        },
        {
          question: "Was ist der Unterschied zwischen intrasexueller und intersexueller Selektion?",
          options: [
            "Intrasexuelle Selektion betrifft nur Männchen; intersexuelle nur Weibchen",
            "Intrasexuelle Selektion = Konkurrenz zwischen Individuen desselben Geschlechts; intersexuelle = Wahl durch das andere Geschlecht",
            "Intrasexuelle Selektion führt zu sexuellem Dimorphismus; intersexuelle nicht",
            "Intrasexuelle Selektion ist eine Form der natürlichen Selektion; intersexuelle ist davon getrennt",
            "Es gibt keinen bedeutenden Unterschied zwischen beiden Formen",
          ],
          correctIndex: 1,
          explanation:
            "Intrasexuelle Selektion bezeichnet die Konkurrenz zwischen Individuen desselben Geschlechts um Paarungsmöglichkeiten (z. B. Kampf zwischen Hirschmännchen um Weibchen — der Sieger paart sich). Intersexuelle Selektion bezeichnet die Wahl eines Paarungspartners durch das andere Geschlecht (z. B. Pfauenweibchen wählen Männchen mit besonders auffälligem Schwanzgefieder). Beide Formen können zu sexuellem Dimorphismus führen.",
          hints: [
            "Intra = innerhalb (derselben Gruppe); inter = zwischen (verschiedenen Gruppen).",
            "Pfauenfedern: Weibchen wählen aus — ist das Konkurrenz unter Männchen oder Wahl durch Weibchen?",
          ],
          difficulty: 2,
          tags: ["sexuelle-selektion", "intrasexuell", "intersexuell", "dimorphismus"],
        },
      ],
    },
    {
      id: "bio-9-05",
      title: "Artbegriff und Artbildung — Isolationsmechanismen",
      content: `## Überblick

Wann ist eine Art eine Art? Diese Frage klingt einfach, ist aber biologisch komplex. Der **biologische Artbegriff** (Ernst Mayr, 1942) ist die häufigste Definition im MedAT-Kontext: Populationen, die sich tatsächlich oder potenziell untereinander fortpflanzen und von anderen Gruppen reproduktiv isoliert sind. Artbildung (**Speziation**) entsteht, wenn Populationen derselben Art reproduktiv isoliert werden und dann divergieren.

Das Wichtigste auf einen Blick:
- Biologischer Artbegriff (Mayr): Reproduktionsgemeinschaft + reproduktive Isolation von anderen
- Isolationsmechanismen: präzygotisch (vor Befruchtung) vs. postzygotisch (nach Befruchtung)
- Allopatrisch: geografische Trennung → unabhängige Divergenz → neue Arten
- Sympatrisch: im selben Gebiet (v. a. durch Polyploidie bei Pflanzen)
- Maultier = Hybridsterilität (postzygotisch); Eselhengst × Pferdestute möglich, aber steril

---

## Artkonzepte — Wie definiert man eine Art?

Es gibt über 20 verschiedene Artkonzepte in der Biologie — jedes hat Vor- und Nachteile:

**Biologischer Artbegriff (Mayr, 1942):**
- "Eine Art ist eine Gruppe von Populationen, deren Mitglieder sich in der Natur tatsächlich oder potenziell untereinander fortpflanzen und von anderen solchen Gruppen reproduktiv isoliert sind."
- Stärken: klar, operationalisierbar, funktional sinnvoll
- Schwächen: gilt nicht für asexuelle Organismen (Bakterien, Parthenogeneten), nicht für Fossilien, problematisch bei allopatrischen Populationen ohne aktuellen Kontakt, Hybriden in Kontaktzonen stellen das Konzept in Frage

**Phylogenetischer Artbegriff:**
- "Kleinste monophyletische Gruppe von Individuen mit gemeinsam abgeleitetem Merkmal"
- Vorteile: gilt auch für asexuelle Organismen und Fossilien; Stärke: kompatibel mit Cladistik
- Nachteil: führt zu sehr vielen "Arten" (jede geografisch isolierte Population wäre eine eigene Art)

**Morphologischer Artbegriff (ältester):**
- Klassifikation nach äußerlicher Ähnlichkeit
- Problem: viele morphologisch identische Arten ("Kryptische Arten", z. B. Malaria-Mücken-Komplex) sind genetisch und reproduktiv verschieden; umgekehrt zeigen manche Arten extremen Dimorphismus (Männchen/Weibchen sehen völlig verschieden aus)

**Ökologischer Artbegriff:**
- "Eine Art ist eine Gruppe von Organismen, die dieselbe ökologische Nische besetzen"
- Nützlich in manchen Kontexten, aber unpräzise

> **Merke:** Für den MedAT: Biologischer Artbegriff (Mayr) ist der Standard. Reproduktive Isolation = das Kernkriterium. Schwäche: gilt nicht für Bakterien und Fossilien.

---

## Reproduktive Isolation — Mechanismen

Reproduktive Isolation verhindert Genfluss zwischen Populationen. Es gibt zwei große Kategorien:

### Präzygotische Isolationsmechanismen (vor Befruchtung)

Präzygotische Mechanismen verhindern, dass es überhaupt zur Bildung einer Zygote kommt. Sie sind energetisch "effizienter" (keine Ressourcen in Paarung/Befruchtung/Embryo verschwendet):

- **Geografische/Habitatisolation:** räumliche Trennung verhindert Begegnung überhaupt (z. B. verschiedene Gebirgsseiten; verschiedene Tiefen im See)
- **Zeitliche (saisonale/tageszeitliche) Isolation:** verschiedene Fortpflanzungszeiten oder Blütezeiten (z. B. zwei Eichenarten blühen im selben Wald zu verschiedenen Zeiten)
- **Verhaltensisolation (ethologische Isolation):** artspezifische Balzrituale, Rufe, Duftstoffe (Pheromone) sprechen nur Artgenossen an. Beispiel: Leuchtsignalmuster verschiedener Glühwürmchen-Arten
- **Mechanische Isolation:** morphologische Inkompatibilität der Geschlechtsorgane oder Blütenstrukturen (z. B. Blütenform passt nur zu bestimmten Bestäubern)
- **Gametische Isolation:** Gameten interagieren nicht (Proteine auf Sperma/Eizellen erkennen nur artspezifische Partner; nach Kontakt: keine Befruchtung)

### Postzygotische Isolationsmechanismen (nach Befruchtung)

Postzygotische Mechanismen wirken, nachdem eine Zygote gebildet wurde. Sie sind "teurer" (Ressourcen in Paarung/Befruchtung investiert, aber Hybrid nicht lebensfähig oder nicht fertil):

- **Hybridlethalität:** Hybridembryo stirbt früh ab (genetische Inkompatibilitäten verhindern normale Entwicklung)
- **Hybridvitalitätsschwäche (Hybrid Inviability):** Hybriden sind weniger vital, sterben früher, reproduzieren weniger
- **Hybridsterilität:** Hybride sind lebensfähig, aber **unfruchtbar**. Klassisches Beispiel: **Maultier** (Equus asinus × Equus caballus) — vital, arbeitsfähig, aber steril. Ursache: Pferd (2n=64) + Esel (2n=62) → Hybride (2n=63) können in der Meiose keine normalen homologen Chromosomenpaare bilden → keine funktionsfähigen Gameten.

> **Merke:** Prä-zygotisch = vor Befruchtung (geografisch, zeitlich, Verhalten, mechanisch, gametisch). Post-zygotisch = nach Befruchtung (Lethalität, Vitalitätsschwäche, Sterilität). Maultier = Hybridsterilität (postzygotisch).

---

## Allopatrische Artbildung

**Allopatrische Artbildung** ist der häufigste Artbildungsmechanismus. "Allopatrisch" = in verschiedenen Gebieten. Das Grundprinzip:

1. **Ausgangspopulation** ist genetisch durchmischt (Genfluss hält die Population homogen)
2. **Geografische Barriere** trennt die Population physisch: Gebirge, Ozean, Fluss, Gletscher, Wüste
3. **Isolierte Teilpopulationen** akkumulieren unabhängig voneinander: verschiedene Mutationen, verschiedene Selektionsdrücke (verschiedene Umwelten), Gendrift (v. a. in kleinen Gründerpopulationen)
4. **Divergenz** über viele Generationen: Genotypen, Phänotypen, Verhaltensweisen weichen auseinander
5. **Reproduktionsisolation** entsteht als Nebenprodukt der Divergenz — keine direkte Selektion für Isolation
6. **Wiedervereinigung** (Abbau der Barriere): Beide Linien treffen aufeinander. Vollständige Isolation → zwei Arten. Partielle Hybridisierung → Sekundärzone (oft instabil, Selektion gegen Hybriden kann Isolation verstärken = "Verstärkung")

Klassische Beispiele:
- **Darwin-Finken (Galapagos):** 13–15 Arten aus einer einzigen Gründerpopulation (adaptive Radiation). Jede Insel → verschiedene Selektion → verschiedene Schnabelformen.
- **Eichhörnchen am Grand Canyon:** Abert's Squirrel (Südseite) und Kaibab Squirrel (Nordseite) — durch den Canyon getrennt, morphologisch divergiert.
- **Eisbären vs. Braunbären:** geografische Isolation in arktischen Gebieten → Artbildung (können aber noch Hybriden bilden = unvollständige Isolation)

> **Merke:** Allopatrisch = geografisch getrennt → divergieren → Reproduktionsisolation als Nebenprodukt. Häufigster Artbildungsmechanismus.

---

## Sympatrische Artbildung

**Sympatrische Artbildung** erfolgt im selben geografischen Gebiet, ohne physische Barriere. Das ist konzeptuell schwieriger zu erklären, weil Genfluss die Divergenz hemmt. Zwei Hauptmechanismen:

### Polyploidie (wichtigster Mechanismus, v. a. bei Pflanzen)

**Polyploidie** = Verdoppelung des Chromosomensatzes — ein sofortiger sympatrischer Artbildungsmechanismus in einer einzigen Generation:

- **Autopolyploidie:** fehlerhafte Meiose erzeugt diploide Gameten (2n statt n). Vereinigung zweier diploider Gameten → tetraploider Organismus (4n). Der Tetraploide kann sich nicht mit Diploiden fortpflanzen (Triploid-Hybride wären steril), aber Tetraploide untereinander können sich fortpflanzen → neue Art sofort.
- **Allopolyploidie:** interspezifischer Diploid-Hybrid (2 verschiedene Chromosomensätze, unfruchtbar, weil keine homologen Paare) → zufällige Chromosomensatzverdoppelung → jedes Chromosom hat jetzt ein Homologes → fertile allopolyploide Art.

**Beispiel Weizen (Triticum aestivum):** Hexaploid (6n = 42). Entstanden aus drei diploiden Vorläuferarten (Einkorn T. urartu, Emmer-Vorläufer, Aegilops tauschii — je 2n=14) durch zwei Allopolyploidisierungsereignisse über Jahrtausende. Heute kultivierter Brotweizen.

Weitere Beispiele: Raps (Brassica napus = B. oleracea × B. rapa), Erdbeer (Gartenerdbeere Fragaria × ananassa, oktoploid 8n=56).

> **Merke:** Polyploidie = Chromosomensatzverdoppelung → Reproduktionsisolation von Elternart in einer Generation → sympatrische Artbildung. Extrem wichtig bei Kulturpflanzen! Beim Menschen: Polyploidie ist letal.

### Ökologische Speziation (ohne Polyploidie)

Auch ohne Polyploidie kann sympatrische Artbildung stattfinden, wenn **disruptive Selektion** zwei Phänotyp-Extreme bevorzugt, die sich dann assortativ paaren (Gleiches bevorzugt Gleiches). Umstritten, ob das häufig vorkommt.

---

## MedAT-Fokus

**Häufige Prüfungsthemen:**
- Biologischer Artbegriff (Mayr): Definition + Schwächen (Bakterien, Fossilien)
- Maultier = Hybridsterilität (postzygotisch) — klassisches Beispiel
- Prä- vs. postzygotisch: welches Beispiel fällt in welche Kategorie?
- Allopatrisch vs. sympatrisch: Unterschied + Beispiel je
- Polyploidie = sympatrische Artbildung in einer Generation (Kulturpflanzen-Beispiele)

**Typische Verwechslungen:**
- Postzygotisch = NACH Befruchtung (Maultier ist lebend → postzygotisch, nicht präzygotisch!)
- Allopatrisch = räumlich getrennt; sympatrisch = im selben Gebiet
- Polyploidie bei Pflanzen normal und häufig; beim Menschen stets letal`,
      lernziele: [
        "Den biologischen Artbegriff (Mayr) definieren und seine Grenzen benennen",
        "Präzygotische von postzygotischen Isolationsmechanismen unterscheiden und Beispiele nennen",
        "Allopatrische von sympatrischer Artbildung unterscheiden und je ein Beispiel nennen",
      ],
      sections: [
        {
          heading: "Allopatrische Artbildung — Schritt für Schritt",
          text: "Allopatrische Artbildung verläuft in typischen Schritten: (1) Ausgangs-Population ist genetisch durchmischt. (2) Eine geografische Barriere (Fluss, Gebirge, Gletschervorstoß, Meereseinbruch) teilt die Population. (3) Beide Teilpopulationen akkumulieren unabhängig Mutationen, unterliegen verschiedenen Selektionsdrücken und erleben Gendrift (v. a. in kleinen Gründerpopulationen). (4) Divergenz der Genotypen und Phänotypen über viele Generationen. (5) Bei Wiedervereinigung (Abbau der Barriere): Test auf Reproduktionsisolation. Wenn vollständige Isolation besteht → zwei Arten. Wenn noch Hybridisierung möglich → Sekundärzone, möglicherweise vollständige Isolation durch Auslese gegen Hybriden (Verstärkung). Die Darwin-Finken auf den Galapagos-Inseln (13–15 Arten aus einer Gründerpopulation) sind das klassische Beispiel für adaptive Radiation (rasche allopatrische Artbildung in verschiedene ökologische Nischen).",
          merksatz:
            "Allopatrische Artbildung: geografische Barriere → Isolation → unabhängige Divergenz → Reproduktionsisolation → neue Arten.",
        },
        {
          heading: "Polyploidie — Sympatrische Artbildung in einer Generation",
          text: "Polyploidie ist der wichtigste Mechanismus sympatrischer Artbildung, besonders bei Pflanzen. Wenn die Meiose fehlerhaft verläuft, können diploide Gameten entstehen (statt haploider). Vereinigung zweier diploider Gameten → tetraploider Organismus (Autopolyploidie). Dieser kann sich nicht mehr mit den Ausgangsdiploiden fortpflanzen (Hybride sind triploid und steril), aber tetraploide Individuen können sich untereinander fortpflanzen → neue Art. Allopolyploidie: Ein interspezifischer Hybrid (steril) verdoppelt seinen Chromosomensatz → jedes Chromosom hat ein Homologes → fertil. Beispiele: Weizen (Triticum aestivum, 6n=42 aus drei diploiden Vorfahren), Raps (Brassica napus, aus Kohl und Rübsen). Beim Menschen führt Polyploidie zum Tod (Ausnahme: einzelne Gewebe).",
          merksatz:
            "Polyploidie: Chromosomensatzverdoppelung → Reproduktionsisolation vom Ausgangsorganismus → sympatrische Artbildung in einer Generation.",
        },
      ],
      merksätze: [
        "Biologischer Artbegriff (Mayr): Populationen, die sich untereinander fortpflanzen und von anderen reproduktiv isoliert sind.",
        "Präzygotisch: Isolation vor Befruchtung (geografisch, zeitlich, Verhalten). Postzygotisch: nach Befruchtung (Hybridsterilität, -lethalität).",
        "Allopatrisch = geografische Isolation; sympatrisch = keine geografische Isolation (z. B. Polyploidie bei Pflanzen).",
      ],
      klinischerBezug:
        "Polyploidie ist in der Humanmedizin teratogen: Triploide (3n=69) und tetraploide Embryonen sind nicht lebensfähig und führen zu Frühaborten. In der Krebsbiologie sind viele Tumorzellen aneuplooid oder polyplooid — Chromosomeninstabilität ist ein Hallmark of Cancer.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: "Was unterscheidet allopatrische von sympatrischer Artbildung?",
        answer:
          "Allopatrische Artbildung erfolgt durch geografische Trennung einer Population durch eine Barriere (Gebirge, Ozean). Die getrennten Populationen divergieren durch Mutation, Selektion und Gendrift, bis sie reproduktiv isoliert sind. Sympatrische Artbildung erfolgt im selben geografischen Gebiet ohne physische Trennung. Bei Pflanzen ist Polyploidie der häufigste Mechanismus: Ein polyploider Organismus kann sich nicht mehr mit den Elterndiploiden fortpflanzen, wohl aber mit anderen Polyploiden derselben Art — eine neue Art entsteht in einer Generation.",
      },
      selfTest: [
        {
          question:
            "Ein Maultier (Hybrid aus Pferd und Esel) ist lebensfähig, aber steril. Welcher Isolationsmechanismus liegt vor?",
          options: [
            "Präzygotische Isolation durch geografische Trennung",
            "Präzygotische Isolation durch Verhaltensinkompatibilität",
            "Postzygotische Isolation durch Hybridsterilität",
            "Postzygotische Isolation durch Hybridlethalität",
            "Präzygotische Isolation durch mechanische Inkompatibilität",
          ],
          correctIndex: 2,
          explanation:
            "Das Maultier (Hybrid aus Pferde-Stute × Esel-Hengst) ist lebensfähig und phänotypisch gesund, aber unfruchtbar (steril). Dies ist ein klassisches Beispiel für postzygotische Isolation durch Hybridsterilität: Die Zygote und der Hybrid entstehen normal (präzygotische Barrieren versagen), aber der Hybrid kann keine Gameten bilden. Ursache: Pferd hat 64 Chromosomen, Esel 62 — im Hybriden können die Chromosomen in der Meiose nicht normal paaren.",
          hints: [
            "Post-zygotisch = nach der Befruchtung. Das Maultier ist ja bereits geboren.",
            "Steril = kann keine Nachkommen erzeugen. Ist das Maultier lebensfähig? Ja. Kann es sich fortpflanzen? Nein.",
          ],
          difficulty: 1,
          tags: ["maultier", "hybridsterilität", "postzygotisch", "isolation"],
        },
        {
          question:
            "Der biologische Artbegriff von Mayr hat Grenzen. Für welche Organismen ist er am wenigsten geeignet?",
          options: [
            "Für sexuell reproduzierende Vögel",
            "Für Säugetiere mit bekannten Kreuzungsbarrieren",
            "Für asexuell reproduzierende Organismen (z. B. Bakterien) und Fossilien",
            "Für Insekten mit territorialem Verhalten",
            "Für Meeresorganismen mit großen Verbreitungsgebieten",
          ],
          correctIndex: 2,
          explanation:
            "Der biologische Artbegriff basiert auf sexueller Reproduktion und reproduktiver Isolation. Für asexuell reproduzierende Organismen (Bakterien, viele Protisten, parthenogenetische Tiere) ist er nicht anwendbar, da diese sich nicht sexuell fortpflanzen. Für Fossilien ist er ebenfalls nicht anwendbar, da man das Fortpflanzungsverhalten ausgestorbener Organismen nicht direkt beobachten kann.",
          hints: [
            "Wenn eine Art sich nicht sexuell fortpflanzt, gibt es keine 'reproduktive Isolation' — was fehlt dem Konzept dann?",
            "Fossilien können keine Kreuzungsexperimente durchführen — wie soll man ihre Artgrenzen bestimmen?",
          ],
          difficulty: 2,
          tags: ["artbegriff", "mayr", "asexuell", "grenzen-artbegriff"],
        },
        {
          question:
            "Auf einer Insel wurden zwei verwandte Vogelarten gefunden, die sich nicht miteinander fortpflanzen. Beide sind von einer einzigen Population auf dem Festland abgeleitet, die durch eine glaziale Periode getrennt wurde. Welcher Artbildungsmechanismus liegt vor?",
          options: [
            "Sympatrische Artbildung durch Polyploidie",
            "Sympatrische Artbildung durch Habitattrennung",
            "Allopatrische Artbildung durch geografische Isolation",
            "Parapatrische Artbildung in einer Kontaktzone",
            "Instantane Artbildung durch Chromosomenmutation",
          ],
          correctIndex: 2,
          explanation:
            "Die Beschreibung passt zur allopatrischen Artbildung: Eine ursprünglich einheitliche Population wurde durch eine geografische Barriere (glaziale Periode → Gletschervorstoß oder Meereseinbruch) getrennt. Beide Teilpopulationen divergierten unabhängig voneinander, bis sie reproduktiv isoliert waren. Nach dem Ende der glazialen Periode kamen die Nachkommen wieder in Kontakt, konnten sich aber nicht mehr miteinander fortpflanzen.",
          hints: [
            "Die geografische Trennung (glaziale Periode) ist das Schlüsselmerkmal — welches Artbildungsmodell setzt eine solche Trennung voraus?",
            "Allopatrisch = verschiedene Orte (allos = verschieden, patria = Heimat).",
          ],
          difficulty: 2,
          tags: ["allopatrische-artbildung", "geografische-isolation", "divergenz", "vogel"],
        },
        {
          question:
            "Weizen (Triticum aestivum) ist hexaploid (6n = 42) und entstand aus drei diploiden Vorfahrenarten. Welcher Artbildungsmechanismus war beteiligt?",
          options: [
            "Allopatrische Artbildung durch geografische Isolation",
            "Stabilisierende Selektion auf die Chromosomenzahl",
            "Allopolyploidie (Hybridisierung + Chromosomensatzverdoppelung)",
            "Gendrift in einer kleinen Gründerpopulation",
            "Disruptive Selektion auf verschiedene Nahrungsquellen",
          ],
          correctIndex: 2,
          explanation:
            "Die Entstehung von hexaploidem Weizen ist ein klassisches Beispiel für Allopolyploidie: Drei verschiedene diploide Vorfahrenarten (je 2n=14) kreuzten sich. Die Hybriden waren zunächst steril (keine homologen Chromosomenpaare für die Meiose). Durch zufällige Verdoppelungen des Chromosomensatzes (Allopolyploidie) entstanden fertile Pflanzen mit je zwei Kopien jedes Genoms (6n=42). Diese können sich nicht mehr mit den Ausgangsarten kreuzen — eine neue Art in wenigen Generationen.",
          hints: [
            "Hexaploid = 6 Chromosomensätze. Wenn drei diploide Arten sich vereinigen und die Chromosomen verdoppeln, wie viele Sätze entstehen?",
            "Polyploidie bei Pflanzen ist der wichtigste Mechanismus der sympatrischen Artbildung.",
          ],
          difficulty: 3,
          tags: ["polyploidie", "weizen", "sympatrische-artbildung", "allopolyploidie"],
        },
        {
          question: "Welche Aussage über präzygotische Isolationsmechanismen ist korrekt?",
          options: [
            "Sie treten nach der Befruchtung auf und verhindern die Entwicklung des Hybriden",
            "Sie verhindern die Bildung einer Zygote und reduzieren damit den Energieaufwand für erfolglose Kreuzungsversuche",
            "Sie betreffen ausschließlich geografische Trennung",
            "Sie führen immer zur vollständigen genetischen Isolation innerhalb einer Generation",
            "Sie treten nur bei pflanzlichen Organismen auf",
          ],
          correctIndex: 1,
          explanation:
            "Präzygotische Isolationsmechanismen verhindern die Bildung einer Zygote — sie wirken vor der Befruchtung. Dies ist energetisch effizienter als postzygotische Mechanismen, bei denen bereits Ressourcen in Paarung und Befruchtung investiert wurden. Präzygotische Mechanismen umfassen: geografische Isolation, ökologische Isolation, zeitliche Isolation, Verhaltensisolation und mechanische Inkompatibilität.",
          hints: [
            "Prä- = vor. Zygote = befruchtete Eizelle. Präzygotisch = vor der Befruchtung.",
            "Welchen Vorteil hat es, eine Hybridisierung vor der Befruchtung zu verhindern?",
          ],
          difficulty: 2,
          tags: ["praezygotisch", "isolation", "vor-befruchtung", "artbildung"],
        },
      ],
    },
    {
      id: "bio-9-06",
      title: "Evolutionsfaktoren — Mutation, Drift und Hardy-Weinberg",
      content: `## Überblick

Die **Synthetische Evolutionstheorie** definiert Evolution als Veränderung der Allelfrequenzen in einer Population. Vier Hauptfaktoren können diese Allelfrequenzen verändern — sie sind die "Motoren" der Evolution. Das **Hardy-Weinberg-Gesetz** beschreibt den Referenzzustand ohne Evolution: eine ideale Population, in der alle Faktoren fehlen.

Das Wichtigste auf einen Blick:
- 4 Evolutionsfaktoren: Mutation (Rohstoff), Selektion (gerichtet), Gendrift (Zufall), Genfluss (homogenisierend)
- Gendrift: besonders stark in kleinen Populationen; zwei Spezialformen: Flaschenhals und Gründereffekt
- Hardy-Weinberg: p² + 2pq + q² = 1; Gleichgewicht ohne Evolution; Abweichung = Evolutionskraft aktiv
- Heterozygotenvorteil: Sichelzell-Beispiel; balancierte Selektion hält beide Allele in der Population

---

## Die vier Evolutionsfaktoren

### 1. Mutation — Der einzige Erzeuger von Neuheit

**Mutationen** sind zufällige Veränderungen in der DNA-Sequenz. Sie sind der **einzige Mechanismus**, der tatsächlich neue Allele erzeugt — also neuen genetischen Rohstoff einführt. Alle anderen Evolutionsfaktoren verschieben nur bestehende Allele.

Arten von Mutationen (mit evolutionärer Relevanz):
- **Punktmutationen:** Einzelnukleotid-Austausch (SNP). Synonym (keine Aminosäureänderung) → neutral. Nicht-synonym → Aminosäureänderung → evtl. Fitnesswirkung.
- **Frameshift-Mutationen:** Insertion/Deletion ändert den Leserahmen → meist deleterisch
- **Chromosomenmutationen:** Inversionen, Translokationen → können Genfunktionen verändern; auch Polyploidie
- **Genmutationen im regulatorischen Bereich:** Promotor-Mutationen → Expressionsänderungen (oft evolutionär bedeutsam)

Mutationsrate: ca. 10⁻⁸ Mutationen pro Nukleotid pro Generation (Mensch). Bei ~3 Milliarden Basenpaaren: ca. 30–100 neue Mutationen pro Mensch pro Generation. Die meisten sind neutral oder deleterisch; sehr selten ist eine Mutation vorteilhaft — aber genau diese kann durch Selektion zum Häufigwerden gebracht werden.

> **Merke:** Mutation allein = schwacher Evolutionsfaktor (Mutationsdruck). Erst in Kombination mit Selektion oder Gendrift entsteht merkliche Allelfrequenzänderung.

### 2. Selektion — Die gerichtete Kraft

Selektion wirkt nicht zufällig: Individuen mit höherer Fitness (= reproduktiver Erfolg) hinterlassen mehr Nachkommen → ihre Allele werden häufiger. Selektion ist die einzige nicht-zufällige evolutionäre Kraft.

Selektionsarten (Details in Kapitel bio-9-04):
- **Stabilisierende Selektion:** Mittelwert wird bevorzugt; eliminiert Extremallele
- **Gerichtete Selektion:** Ein Extrem wird bevorzugt; Allelfrequenz verschiebt sich
- **Disruptive Selektion:** Beide Extreme bevorzugt; kann zur Aufspaltung führen

### 3. Gendrift — Zufall in kleinen Populationen

**Gendrift** bezeichnet zufällige Allelfrequenzveränderungen, die durch zufällige Reproduktionsereignisse entstehen — nicht durch Selektion. In großen Populationen mittelt sich der Zufall aus; in kleinen Populationen dominiert der Zufall.

Mechanismus: Stellen Sie vor, eine Population hat Allel A (60%) und Allel a (40%). Wenn zufällig alle Individuen mit Allel a in einer Generation keine Nachkommen haben (durch Zufall, nicht wegen Fitnessnachteil), verschwindet Allel a aus der Population ("Fixierung" von A). Das ist Gendrift — auch vorteilhafte Allele können durch Drift verloren gehen, auch schädliche Allele können durch Drift fixiert werden.

Konsequenzen von Gendrift:
- Verlust genetischer Diversität über Zeit
- Fixierung zufälliger Allele (nicht notwendig die "besten")
- Besonders stark bei kleinen Populationen; abnehmend bei wachsender Populationsgröße
- Kann Selektion überlagern (kleine Populationen: Drift > Selektion)

> **Merke:** Gendrift = Zufall, nicht Selektion. Je kleiner die Population, desto stärker der Drift. Kann neutrale, vorteilhafte und schädliche Allele fixieren.

### 4. Genfluss — Homogenisierung durch Migration

**Genfluss** (Migrationseffekt) ist der Transfer von Allelen zwischen Populationen durch wandernde Individuen (oder Pollen/Samen bei Pflanzen). Wenn ein Individuum aus Population A in Population B einwandert und sich fortpflanzt, bringt es seine Allele mit → verändert die Allelfrequenzen in B.

Effekte:
- **Homogenisierung:** Allelfrequenzunterschiede zwischen Populationen werden angeglichen → hemmt Divergenz
- **Einführung neuer Allele:** seltene Allele können von einer Population in eine andere übertragen werden
- **Wirkt der Artbildung entgegen:** Genfluss verhindert Divergenz; geografische Isolation (= Unterbrechung des Genflusses) ist Voraussetzung für allopatrische Artbildung

> **Merke:** Genfluss = homogenisierend = hemmt Divergenz und Artbildung. Geografische Isolation unterbricht Genfluss → Divergenz möglich.

---

## Flaschenhals-Effekt und Gründereffekt — Gendrift in Extremform

Beide sind Sonderformen des Gendrifts, bei denen eine besonders kleine Population entsteht:

### Flaschenhals-Effekt (Bottleneck Effect)

Eine **große, bestehende Population** wird durch ein katastrophales Ereignis drastisch reduziert:
- Ursachen: Epidemien (Pest, Seuchen), Naturkatastrophen (Vulkaneruptionen, Dürren), Jagd durch Menschen
- Die überlebenden wenigen Individuen repräsentieren nur einen **zufälligen Ausschnitt** der ursprünglichen genetischen Vielfalt — viele Allele gehen für immer verloren
- Die Nachfolgepopulation zeigt **geringe genetische Diversität** und atypische Allelfrequenzen

Beispiele:
- **Nördliche Elefantenrobbe** (Mirounga angustirostris): Im 19. Jahrhundert durch Jagd auf ~20 Individuen reduziert. Heute wieder ~200.000, aber extreme genetische Uniformität (kaum Variation in MHC-Genen → höhere Krankheitsanfälligkeit)
- **Gepard** (Acinonyx jubatus): genetisch so einheitlich, dass Hauttransplantationen zwischen Geparden ohne Abstoßung möglich sind → Flaschenhals vor ca. 10.000 Jahren (Ende der letzten Eiszeit)
- **Homo sapiens:** Genetische Analysen zeigen Evidenz für mindestens einen Flaschenhals vor ~70.000 Jahren (möglicherweise Toba-Supervulkan-Eruption → Population auf wenige Tausend reduziert)

### Gründereffekt (Founder Effect)

Eine **kleine Gruppe von Individuen** verlässt eine große Population und gründet eine neue Population an einem neuen Ort:
- Die Gründer tragen nur einen zufälligen Ausschnitt der Allele der Ausgangspopulation mit
- Seltene Allele, die zufällig bei Gründerindividuen vorhanden waren, können in der neuen Population häufig werden
- Häufig in isolierten Insel- oder Gemeinschaftspopulationen

Beispiele:
- **Ellis-van-Creveld-Syndrom** bei den Amischen in Pennsylvania: normalerweise extrem seltene autosomal-rezessive Erkrankung, bei den Amischen viel häufiger → auf wenige Gründerindividuen (1700er Jahre aus der Schweiz) mit dem Allel zurückzuführen
- **Tay-Sachs-Krankheit** bei aschkenasischen Juden: erhöhte Häufigkeit durch Gründereffekt und spätere Isolation
- **Darwin-Finken auf Galapagos:** jede Inselpopulation startete mit einer kleinen Gründerpopulation → Gründereffekt + allopatrische Artbildung

> **Merke:** Flaschenhals = bestehende große Population wird drastisch reduziert (Katastrophe). Gründereffekt = kleine Gruppe gründet neue Population (Migration + Isolation). Beide → Gendrift, genetische Verarmung, Überrepräsentation zufälliger Allele.

---

## Das Hardy-Weinberg-Gesetz

Das **Hardy-Weinberg-Gesetz** (G.H. Hardy & W. Weinberg, 1908) beschreibt den Zustand einer Population **ohne Evolution**: Allelfrequenzen und Genotypfrequenzen bleiben über Generationen konstant, wenn bestimmte ideale Bedingungen erfüllt sind.

**Formel:**
- **p + q = 1** (Allelfrequenzen; p = Häufigkeit Allel A; q = Häufigkeit Allel a)
- **p² + 2pq + q² = 1** (Genotypfrequenzen)
  - p² = Häufigkeit der Homozygoten AA
  - 2pq = Häufigkeit der Heterozygoten Aa
  - q² = Häufigkeit der Homozygoten aa

**Bedingungen für das Hardy-Weinberg-Gleichgewicht** (alle müssen erfüllt sein):
1. Große (theoretisch unendliche) Population → kein Gendrift
2. Zufällige Paarung (Panmixie) → keine assortative Paarung
3. Keine Mutation → keine neuen Allele
4. Keine Selektion → alle Genotypen gleich fit
5. Kein Genfluss → keine Migration in oder aus der Population

**Interpretation:** Das Hardy-Weinberg-Gleichgewicht ist ein theoretisches Referenzmodell. Reale Populationen weichen immer ab — aber die **Richtung der Abweichung** zeigt, welche evolutionären Kräfte wirken.

**Anwendungen:**
- **Trägerfrequenzberechnung:** Wenn q² = Häufigkeit der Erkrankten (Homozygote aa) bekannt ist → q = √(q²) → p = 1 - q → 2pq = Trägerfrequenz (Heterozygote). Beispiel: Mukoviszidose: 1/2500 erkrankt → q² = 1/2500 → q = 1/50 → p = 49/50 → Träger = 2pq ≈ 2/50 ≈ 1/25
- **Test auf Selektion oder anderen Evolutionsdruck:** Abweichung von Hardy-Weinberg-Erwartung → aktive evolutionäre Kraft nachweisbar

> **Merke:** Hardy-Weinberg: p² + 2pq + q² = 1. Im Gleichgewicht = keine Evolution. Abweichung = mindestens ein Evolutionsfaktor aktiv. Fünf Bedingungen (große Population, Panmixie, keine Mutation, Selektion, Migration).

---

## Heterozygotenvorteil — Balancierte Selektion

Der **Heterozygotenvorteil (Überdominanz)** ist ein Beispiel für **balancierte Selektion**: ein Phänomen, das erklärt, warum scheinbar schädliche Allele in bestimmten Populationen häufig bleiben.

**Sichelzellanämie-Beispiel:**
- Allel HbS (Sichelzell-Allel) bewirkt bei Homozygoten (HbS/HbS) schwere, lebensbedrohliche Sichelzellanämie
- Bei Homozygoten HbA/HbA: normale Blutfunktion, aber voll empfänglich für schwere Malaria (Plasmodium falciparum)
- Bei Heterozygoten (HbA/HbS): Sichelzelleigenschaften in roten Blutkörperchen → Malaria-Erreger kann sich schlechter vermehren → **Schutz vor schwerer Malaria**, aber keine Sichelzellanämie

In Malariaregionen Afrikas haben Heterozygote **höhere Fitness** als beide Homozygoten → balancierte Selektion hält das HbS-Allel in der Population → das Allel bleibt häufiger als durch Mutation allein zu erwarten wäre.

Das Hardy-Weinberg-Gleichgewicht gilt hier nicht (Selektion ist aktiv), aber es gibt ein neues Gleichgewicht (balancierten Polymorphismus), in dem beide Allele erhalten bleiben.

> **Merke:** Heterozygotenvorteil: Heterozygote fitness > beide Homozygoten → Allel bleibt in Population trotz Schädlichkeit bei Homozygoten. Sichelzell-Malaria ist das Paradebeispiel.

---

## MedAT-Fokus

**Häufige Prüfungsthemen:**
- Die vier Evolutionsfaktoren benennen und erklären
- Flaschenhals vs. Gründereffekt unterscheiden (Ursache und Beispiele)
- Hardy-Weinberg-Formel p² + 2pq + q² = 1 und Bedingungen
- Trägerfrequenzberechnung mit Hardy-Weinberg (q² → q → 2pq)
- Sichelzell-Heterozygotenvorteil als Beispiel balancierter Selektion

**Typische Verwechslungen:**
- Gendrift = Zufall (NICHT Selektion). Gendrift kann auch vorteilhafte Allele eliminieren.
- Flaschenhals ≠ Gründereffekt: Flaschenhals = Katastrophe reduziert bestehende Population; Gründer = kleine Gruppe wandert aus
- Hardy-Weinberg-Gleichgewicht = KEIN Evolutionsdruck. Abweichung = Evolution aktiv.`,
      lernziele: [
        "Die vier Evolutionsfaktoren (Mutation, Selektion, Gendrift, Genfluss) und ihre Wirkungsweisen beschreiben",
        "Flaschenhals-Effekt und Gründereffekt als Formen des Gendrifts unterscheiden",
        "Das Hardy-Weinberg-Gesetz formulieren und seine Bedingungen und Anwendungen erläutern",
      ],
      sections: [
        {
          heading: "Flaschenhals-Effekt vs. Gründereffekt",
          text: "Beide sind Formen des Gendrifts in kleinen Populationen, haben aber verschiedene Ursachen. Der Flaschenhals-Effekt entsteht, wenn eine bestehende große Population durch ein Ereignis (Epidemie, Naturkatastrophe) drastisch reduziert wird — die überlebenden wenigen Individuen repräsentieren nur einen Ausschnitt der ursprünglichen genetischen Vielfalt (genetische Verarmung). Der Gründereffekt tritt auf, wenn eine kleine Gruppe von Individuen eine neue Population kolonisiert — die Allele der Gründer (zufällig, nicht representativ) dominieren die neue Population. Beide können zur Fixierung seltener Allele führen (einschließlich Krankheitsallele) und genetische Vielfalt reduzieren. Das Northern Elephant Seal-Beispiel ist ein Flaschenhals; die Amischen mit hoher Ellis-van-Creveld-Häufigkeit sind ein Gründereffekt-Beispiel.",
          merksatz:
            "Flaschenhals: bestehende Population wird stark reduziert. Gründereffekt: kleine Gruppe gründet neue Population. Beide → Gendrift, genetische Verarmung.",
        },
        {
          heading: "Hardy-Weinberg-Gleichgewicht und Heterozygotenvorteil",
          text: "Das Hardy-Weinberg-Gesetz beschreibt eine sich nicht verändernde Population — einen Referenzzustand ohne Evolution. Abweichungen zeigen, welche evolutionären Kräfte aktiv sind. Ein wichtiges Abweichungsbeispiel ist der Heterozygotenvorteil (Überdominanz): In Malariaregionen Afrikas sind Sichelzellanämie-Allele (HbS) in höherer Frequenz vorhanden als durch Mutation allein zu erwarten wäre. Der Grund: Heterozygote (HbA/HbS) sind resistenter gegen schwere Malaria als normale Homozygote (HbA/HbA) — balancierende Selektion hält das Sichelzellallel in der Population. Das Hardy-Weinberg-Gleichgewicht gilt hier nicht, weil Selektion aktiv wirkt (Heterozygotenvorteil). Dies ist ein Beispiel für balancierte Polymorphismus.",
          merksatz:
            "Heterozygotenvorteil: HbA/HbS (Sichelzellträger) widerstandsfähiger gegen Malaria → HbS-Allel bleibt häufig in Malariaregionen (balancierte Selektion).",
        },
      ],
      merksätze: [
        "4 Evolutionsfaktoren: Mutation (Rohstoff), Selektion (gerichtet), Gendrift (Zufall, kleine Population), Genfluss (homogenisierend).",
        "Gendrift: Flaschenhals (Katastrophe) oder Gründereffekt (neue Kolonie) → genetische Verarmung, Fixierung zufälliger Allele.",
        "Hardy-Weinberg: p²+2pq+q²=1. Im Gleichgewicht = keine Evolution. Abweichungen zeigen aktive evolutionäre Kräfte.",
      ],
      klinischerBezug:
        "Der Gründereffekt erklärt die erhöhte Häufigkeit bestimmter genetischer Erkrankungen in isolierten Gemeinschaften: Tay-Sachs bei aschkenasischen Juden, Ellis-van-Creveld-Syndrom bei Amischen. In der Pharmakogenetik erklärt der Gründereffekt populationsspezifische Häufigkeiten von Medikamentenmetabolismus-Varianten (z. B. CYP2D6-Allele).",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: "Erklären Sie den Unterschied zwischen Flaschenhals-Effekt und Gründereffekt.",
        answer:
          "Beide sind Sonderformen des Gendrifts. Der Flaschenhals-Effekt tritt auf, wenn eine große bestehende Population durch ein katastrophales Ereignis (Seuche, Naturkatastrophe) auf wenige Individuen reduziert wird. Die überlebenden Individuen repräsentieren nur einen zufälligen Ausschnitt der ursprünglichen genetischen Variation — Allelfrequenzen ändern sich zufällig, Diversität geht verloren. Der Gründereffekt tritt auf, wenn eine kleine Gruppe von Individuen aus einer großen Population eine neue Population gründet (z. B. auf einer neuen Insel). Die zufälligen Allele der Gründer sind in der neuen Population überrepräsentiert.",
      },
      selfTest: [
        {
          question:
            "Welcher Evolutionsfaktor hat in kleinen, isolierten Populationen den stärksten Einfluss auf die Allelfrequenzveränderung?",
          options: ["Mutation", "Selektion", "Gendrift", "Genfluss", "Rekombination"],
          correctIndex: 2,
          explanation:
            "In kleinen Populationen dominiert Gendrift als Evolutionsfaktor. Durch Zufallsprozesse (Überleben und Reproduktion sind nicht determiniert) können Allelfrequenzen stark schwanken. In sehr kleinen Populationen kann ein Allel allein durch Zufall fixiert oder eliminiert werden, unabhängig von seiner Fitness. In großen Populationen mittelt sich der Zufall aus und Selektion dominiert.",
          hints: [
            "Je kleiner die Population, desto größer die zufälligen Schwankungen — welcher Faktor ist per Definition zufällig?",
            "Gendrift = genetischer Drift = zufällige Veränderungen durch Stichprobenfehler in kleinen Populationen.",
          ],
          difficulty: 1,
          tags: ["gendrift", "kleine-population", "zufaellig", "evolutionsfaktoren"],
        },
        {
          question:
            "Eine Population von Robben wird durch eine Seuche von 10.000 auf 50 Individuen reduziert. Die überlebenden Tiere zeigen sehr geringe genetische Diversität. Welcher Effekt liegt vor?",
          options: [
            "Gründereffekt",
            "Flaschenhals-Effekt",
            "Selektionsvorteil der überlebenden Individuen",
            "Mutationsdruck",
            "Genfluss von benachbarten Populationen",
          ],
          correctIndex: 1,
          explanation:
            "Der Flaschenhals-Effekt tritt auf, wenn eine bestehende Population durch ein Ereignis (hier: Seuche) drastisch reduziert wird. Die wenigen überlebenden Individuen repräsentieren nur einen zufälligen Ausschnitt der ursprünglichen genetischen Vielfalt — viele Allele gehen verloren. Die resultierende Population zeigt daher geringe genetische Diversität. Das ist kein Gründereffekt (der betrifft neue Kolonien), sondern ein Flaschenhals.",
          hints: [
            "Die Population war groß und wurde durch ein Ereignis reduziert — das ist der Schlüssel zur Unterscheidung.",
            "Flaschenhals = eine bestehende große Population wird 'durch einen engen Hals gezwungen' (nur wenige überleben).",
          ],
          difficulty: 2,
          tags: ["flaschenhals", "gendrift", "genetische-diversitaet", "populationsreduktion"],
        },
        {
          question:
            "Das Hardy-Weinberg-Gleichgewicht gilt unter der Bedingung 'keine Selektion'. Was bedeutet es, wenn eine Population in einer solchen idealen Population analysiert wird und das Gleichgewicht NICHT vorliegt?",
          options: [
            "Die Population ist sehr groß und stabil",
            "Mindestens einer der Evolutionsfaktoren (Selektion, Mutation, Gendrift, Genfluss) wirkt auf diese Population",
            "Die Mutation ist zu schnell, um das Gleichgewicht zu messen",
            "Das Hardy-Weinberg-Gesetz gilt nur für Menschen, nicht für Tiere",
            "Die Population hat gerade einen Gründereffekt durchlaufen und ist nun im Gleichgewicht",
          ],
          correctIndex: 1,
          explanation:
            "Das Hardy-Weinberg-Gleichgewicht beschreibt einen Zustand ohne Evolution. Wenn eine reale Population vom Hardy-Weinberg-Gleichgewicht abweicht, bedeutet das, dass mindestens einer der fünf idealen Bedingungen nicht erfüllt ist — also mindestens ein Evolutionsfaktor aktiv ist: Selektion, Mutation, Gendrift, Genfluss oder Nicht-Zufälligkeit der Paarung. Die Abweichung kann genutzt werden, um aktive evolutionäre Kräfte nachzuweisen.",
          hints: [
            "Hardy-Weinberg = kein Evolutionsdruck. Abweichung = Evolution ist aktiv.",
            "Welche fünf Bedingungen müssen erfüllt sein? Verletzung einer davon → Abweichung vom Gleichgewicht.",
          ],
          difficulty: 2,
          tags: ["hardy-weinberg", "gleichgewicht", "abweichung", "evolution-aktiv"],
        },
        {
          question:
            "In einer kleinen isolierten Gemeinschaft tritt eine seltene autosomal rezessive Erkrankung mit einer Häufigkeit von 1:100 auf, obwohl sie in der Allgemeinbevölkerung nur 1:10.000 vorkommt. Was erklärt dies am wahrscheinlichsten?",
          options: [
            "Starke Selektion zugunsten der Erkrankung in dieser Gemeinschaft",
            "Hohe Mutationsrate durch Umweltgifte in dieser Region",
            "Gründereffekt: wenige Gründerindividuen trugen das Allel, das in der isolierten Gemeinschaft gehäuft wurde",
            "Das Hardy-Weinberg-Gleichgewicht gilt nicht für kleine Gemeinschaften",
            "Die Erkrankung wird durch Infektionen übertragen, nicht genetisch",
          ],
          correctIndex: 2,
          explanation:
            "Der Gründereffekt erklärt die Häufung seltener Erbkrankheiten in isolierten Gemeinschaften: Wenn die Gemeinschaft von wenigen Gründerindividuen abstammt, die zufällig das pathogene Allel trugen, ist dieses Allel in der Nachfolgepopulation überrepräsentiert. Durch Inzucht (Heirat innerhalb der Gemeinschaft) erhöht sich die Trägerfrequenz weiter. Klassisches Beispiel: Amische in Pennsylvania (Ellis-van-Creveld, Ahornsirup-Krankheit).",
          hints: [
            "Isolierte Gemeinschaft + seltene Erkrankung häufiger als normal → Welcher Effekt erklärt das Auftreten in isolierten Gründerpopulationen?",
            "Gründereffekt: zufällige Allele der Gründer werden überrepräsentiert.",
          ],
          difficulty: 2,
          tags: ["gruendereffekt", "isolierte-gemeinschaft", "gendrift", "erberkrankung"],
        },
        {
          question: "Welche Aussage über Genfluss als Evolutionsfaktor ist korrekt?",
          options: [
            "Genfluss erhöht die genetische Differenzierung zwischen Populationen",
            "Genfluss tritt nur bei pflanzlichen Organismen durch Pollenausbreitung auf",
            "Genfluss homogenisiert Populationen genetisch und wirkt der Artbildung entgegen",
            "Genfluss ist ein zufälliger Prozess ohne gerichtete Wirkung",
            "Genfluss erhöht die Häufigkeit vorteilhafter Mutationen spezifisch",
          ],
          correctIndex: 2,
          explanation:
            "Genfluss (Migration von Individuen zwischen Populationen) überträgt Allele von einer Population zur anderen. Dies homogenisiert Populationen genetisch: Allelfrequenzunterschiede, die durch Selektion oder Gendrift entstanden sind, werden durch Genfluss wieder angeglichen. Genfluss wirkt damit der genetischen Divergenz entgegen und verhindert oder verlangsamt die Artbildung. Geografische Isolation verhindert Genfluss — das ist der erste Schritt bei allopatrischer Artbildung.",
          hints: [
            "Genfluss = Allele fließen zwischen Populationen — was passiert mit Unterschieden, wenn Allele ausgetauscht werden?",
            "Genfluss und Artbildung: Warum ist geografische Isolation Voraussetzung für allopatrische Artbildung?",
          ],
          difficulty: 2,
          tags: ["genfluss", "migration", "homogenisierung", "artbildung"],
        },
      ],
    },
    {
      id: "bio-9-07",
      title: "Entwicklung des Menschen — Hominiden",
      content: `## Überblick

Die Evolution des Menschen (**Hominisation**) ist ein faszinierender, gut dokumentierter Prozess. Der Mensch ist kein Nachkomme moderner Affen, sondern Affen und Menschen teilen gemeinsame Vorfahren. Fossilien, Genetik und molekulare Phylogenie ermöglichen eine präzise Rekonstruktion unserer Evolutionsgeschichte.

Das Wichtigste auf einen Blick:
- Hominiden = Menschenaffen + Mensch (Familie Hominidae); Hominini = Mensch + Schimpanse (Tribus)
- Divergenz Mensch/Schimpanse: vor ca. 6–7 Millionen Jahren (kein gemeinsamer Schimpansen-Vorfahre!)
- Bipedie evolvierte VOR der Gehirnvergrößerung (Lucy: aufrecht bei 3,9 Mya, Hirnvolumen ~450 ccm)
- Hirnvolumen-Entwicklung: ~450 ccm (Australopithecus) → ~630 (H. habilis) → ~1.000 (H. erectus) → ~1.350 (H. sapiens)
- Out-of-Africa: H. sapiens entstand in Afrika (~300.000 Jahre), migrierte vor ~60.000–70.000 Jahren

---

## Systematik — Hominiden und Hominini

**Hominidae (Große Menschenaffen + Mensch):**
Die Familie Hominidae umfasst heute: Orang-Utan (Pongo), Gorilla, Schimpanse (Pan troglodytes), Bonobo (Pan paniscus) und den Menschen (Homo sapiens). In der modernen Phylogenetik werden Schimpansen und Menschen näher miteinander verwandt angesehen als Schimpansen mit Gorillas.

**Tribus Hominini:**
Innerhalb der Hominidae bilden Mensch und Schimpanse (+ Bonobo) die Tribus Hominini. Die Divergenzzeit zwischen der Menschenlinie und der Schimpansen-Linie lag vor ca. **6–7 Millionen Jahren** (basierend auf molekularen Uhren und Fossilbefunden).

> **Merke:** Der Mensch stammt nicht vom Schimpansen ab! Beide teilen einen **gemeinsamen Vorfahren** vor 6–7 Mya. Schimpansen und Gorillas sind evolutionär unsere nächsten Verwandten.

Genetische Verwandtschaft:
- Mensch–Schimpanse: ~98,7% DNA-Identität (je nach Methode und Bereich)
- Mensch–Gorilla: ~98,3% DNA-Identität
- Mensch–Orang-Utan: ~96,9% DNA-Identität

---

## Frühe Homininen (vor 7–2 Millionen Jahren)

### Sahelanthropus tchadensis (~7 Mya)
Bisher ältester bekannter Hominin, gefunden im Tschad. Kleines Gehirn (~350 ccm), aber das **Foramen magnum** (Schädelbasisöffnung für das Rückenmark) deutet auf eine Zwischenstellung bei der Körperhaltung hin. Umstritten: echter Hominin oder Vorfahre beider Linien?

### Ardipithecus ramidus (~4,4 Mya)
"Ardi" aus Äthiopien (1994 entdeckt, 2009 beschrieben). Bereits bipede Anzeichen, aber noch stark an Baum angepasst (Kletterfuß mit oppositionellem Zeh). Kleines Hirnvolumen (~300–350 ccm). Zeigt, dass die frühe Bipedieentwicklung graduell war.

### Australopithecus afarensis (~3,9–2,9 Mya)
**"Lucy"** (1974, Donald Johanson, Hadar, Äthiopien) ist das berühmteste Skelett der Paläoanthropologie. Wichtige Merkmale:
- **Aufrechter Gang** (Becken, Femur, Kniegelenk wie beim Menschen) — aber noch Kletteranlage in Armen und Fußstruktur
- Hirnvolumen: **~450 ccm** (Schimpansen-Niveau!)
- Geschlechtsdimorhismus ausgeprägt (Männchen deutlich größer als Weibchen)
- Laetoli-Fußspuren (Tanzania): eindeutige Bipediespuren von ~3,6 Mya

> **Merke:** Lucy belegt: **Bipedie evolvierte VOR der Gehirnvergrößerung** — die "great leap forward" im Gehirn kam erst viel später.

### Weitere Australopithecinen (~3–1 Mya)
- **Australopithecus africanus** (~3–2 Mya): Südafrika; leicht größeres Hirn als A. afarensis
- **Paranthropus (Australopithecus) robustus/boisei** (~2,5–1 Mya): "Robusten" = massive Kaumuskulatur, sagittaler Kamm, spezialisiert auf harte Pflanzenkost. Evolutionäre Sackgasse — keine Nachkommen.

---

## Genus Homo — Der Weg zum modernen Menschen

### Homo habilis (~2,4–1,5 Mya)
- "Geschickter Mensch" — erster Hominide, dem regelmäßiger **Werkzeuggebrauch** nachgewiesen wurde
- **Oldowan-Werkzeugkultur:** einfache Geröllgeräte, Abschläge zum Schneiden
- Hirnvolumen: **~600–750 ccm** — deutlicher Anstieg gegenüber Australopithecinen
- Anatomisch noch mosaikartig (manche Merkmale eher australopithecin)
- Umstritten: ob H. habilis wirklich zum Genus Homo gehört oder eine fortgeschrittene Australopithecus-Art ist

### Homo erectus (~1,9 Mya – 100.000 Jahre)
- **Erster Hominin außerhalb Afrikas:** Fossilfunde in Java ("Java-Mensch", Dubois 1891), China ("Peking-Mensch"), Georgien (Dmanisi), Europa
- Hirnvolumen: **~900–1.100 ccm** (deutlich größer als H. habilis)
- **Acheuléen-Werkzeugkultur:** symmetrische Faustkeile, präzisere Herstellung
- Kontrolle des **Feuers:** umstrittene Belege ab ~1,5 Mya; sichere Belege ab ~400.000 Jahre (Hearths in Höhlen)
- Körperbau: bereits sehr menschenähnlich (langer Schritt, reduzierter Haarkleid)
- Überlebte bis vor ~100.000–50.000 Jahren auf Java und Sumatra

### Homo heidelbergensis (~700.000–200.000 Jahre)
- Archaischeck H. sapiens oder Vorläufer
- Hirnvolumen: ~1.100–1.400 ccm
- Gilt als **gemeinsamer Vorfahre** von H. neanderthalensis (Europa) und H. sapiens (Afrika)
- Schöninger Speere (~400.000 Jahre, Deutschland): älteste Jagdwaffen

### Homo neanderthalensis (~400.000–40.000 Jahre)
Der Neanderthaler ist die am besten untersuchte ausgestorbene Homininen-Art:
- Verbreitung: Europa und Westasien
- Hirnvolumen: **~1.400–1.600 ccm** — ähnlich oder etwas größer als H. sapiens, aber anders verteilt (mehr okzipital, weniger frontal)
- Morphologie: robuster Körperbau, prominente Überaugenwülste, kein Kinn, großes Gesicht
- Anpassungen ans Kälteklima: kurze Extremitäten (Bergmann'sche Regel)
- Verhalten: Bestattungen mit Grabbeigaben, **Schmuck** (Muschelperlen, Pigmentnutzung), Pflege Verletzter, Lagerfeuer
- **Genetisch mit H. sapiens hybridisiert:** Svante Pääbo (Nobelpreis Physiologie/Medizin 2022) sequenzierte neanderthalische DNA aus Fossilien → moderne Menschen außerhalb Afrikas tragen **1–4% neanderthalische DNA**
- Aussterben vor ~40.000 Jahren: Konkurrenz mit H. sapiens (technologisch überlegen?), Klimawandel, demografische Effekte (kleinere Populationen)

> **Merke:** Neanderthaler ≠ primitive Vorstufe. Eigenständige Art, kognitiv komplex, hybridisierte mit H. sapiens. 1–4% Neanderthaler-DNA in modernen Nicht-Afrikanern. Pääbo: Nobelpreis 2022.

---

## Homo sapiens und die Out-of-Africa-Migration

**Homo sapiens** entstand vor ca. **300.000 Jahren** in Afrika (älteste Fossilien: Jebel Irhoud, Marokko, 2017 beschrieben).

### Out-of-Africa-Theorie (mehrheitlich akzeptiert)
- H. sapiens migrierte vor **60.000–70.000 Jahren** aus Afrika in den Rest der Welt
- Verdrängte oder hybridisierte mit älteren Hominiden (Neanderthaler in Europa, Denisova-Menschen in Asien)
- **Genetische Belege:**
  - Maximale genetische Diversität in afrikanischen Populationen → alle Nicht-Afrikaner sind Teilmengen dieser Diversität (Gründereffekt)
  - Mitochondriale DNA (mütterliche Linie) und Y-Chromosom (väterliche Linie) konvergieren auf afrikanische Ursprünge
  - 1–4% neanderthalische DNA in Nicht-Afrikanern belegt Hybridisierung nach Verlassen Afrikas
  - Denisova-Menschen (sibirische Höhle): 4–6% Denisova-DNA in manchen melanesischen und ozeanischen Völkern

Gegenhypothese (Multiregionales Modell): H. sapiens entstand gleichzeitig in mehreren Regionen aus H. erectus — **weitgehend widerlegt** durch genetische Analysen.

---

## Wichtige Trends der Homininen-Evolution

| Merkmal | Australopithecus | H. habilis | H. erectus | H. sapiens |
|--------|-----------------|-----------|-----------|-----------|
| Hirnvolumen | ~450 ccm | ~630 ccm | ~900–1.100 ccm | ~1.350 ccm |
| Bipedie | Vollständig | Vollständig | Vollständig | Vollständig |
| Werkzeuge | Keine/einfach | Oldowan | Acheuléen | Komplex |
| Feuer | Nein | Nein | Möglicherweise | Ja |
| Verbreitung | Afrika | Afrika | Afrika, Asien, Europa | Weltweit |

**Bipedie vor Gehirnvergrößerung:** Dieser Befund (erstmals durch Lucy klar) widerlegte die frühere Annahme, dass Gehirnvergrößerung der erste Schritt war. Selektionsvorteile der Bipedie: Hände frei für Transport und Werkzeuge, thermoregulatorischer Vorteil (weniger Körperfläche der Sonne ausgesetzt), effizientere Fortbewegung auf langen Distanzen.

**Sprachentwicklung:** Indikatoren: Broca-Areal (Sprachproduktion, linker Frontallappen) ist bei H. heidelbergensis und Neanderthalern bereits angedeutet. **Hyoid-Knochen** (Kehlkopfknochen): Neandertalerhyoid ist nahezu identisch mit dem menschlichen → Voraussetzung für komplexe Lautproduktion. FOXP2-Gen ("Sprachgen"): beim Menschen durch positive Selektion verändert; auch Neanderthaler haben die menschliche Variante.

---

## MedAT-Fokus

**Häufige Prüfungsthemen:**
- Chronologische Reihenfolge: Australopithecus → H. habilis → H. erectus → H. sapiens
- Hirnvolumina (Zahlen!) auswendig kennen
- Bipedie VOR Gehirnvergrößerung — Lucy als Beleg
- H. erectus = erster Hominide außerhalb Afrikas (Java, China)
- Neanderthaler: 1–4% DNA in modernen Nicht-Afrikanern; Pääbo Nobelpreis 2022
- Out-of-Africa: ~60.000–70.000 Jahren; höchste Diversität in Afrika

**Typische Verwechslungen:**
- "Mensch stammt vom Schimpansen ab" → FALSCH: gemeinsamer Vorfahre vor 6–7 Mya
- "Neanderthaler war primitiv" → FALSCH: Bestattungen, Kunst, ähnliches Hirnvolumen
- H. habilis verlässt Afrika → FALSCH: Das war H. erectus`,
      lernziele: [
        "Die wichtigsten Homininen (Australopithecus afarensis, H. habilis, H. erectus, H. neanderthalensis, H. sapiens) in chronologische Reihenfolge bringen und ihre Merkmale nennen",
        "Die Out-of-Africa-Theorie und genetische Belege (Neanderthaler-DNA) beschreiben",
        "Wichtige Trends der Homininen-Evolution (Bipedie, Hirnvolumen, Werkzeuggebrauch) erläutern",
      ],
      sections: [
        {
          heading: "Bipedie vor Gehirnvergrößerung — Eine wichtige Erkenntnis",
          text: "Lange glaubte man, dass Gehirnvergrößerung und aufrechter Gang parallel evolvierten. Die Fossil-Befunde zeigen jedoch klar: Frühe Homininen wie Australopithecus afarensis (Lucy, 3,2 Mya) gingen bereits aufrecht, hatten aber ein Hirnvolumen von nur ~450 ccm (ähnlich einem Schimpansen). Die Gehirnvergrößerung folgte deutlich später. Warum Bipedie? Mehrere Hypothesen: Freisetzen der Hände für Werkzeuge (aber Werkzeuge kamen viel später), thermoregulatorische Vorteile (aufrechter Gang reduziert Sonneneinstrahlung auf den Körper), effizientere Fortbewegung über lange Strecken in offener Savanne, bessere Übersicht in der Savanne. Wahrscheinlich kombinierten mehrere Selektionsvortei le. Die bipede Anatomie hat auch Nachteile: Beckenerweiterung für Geburt kollidiiert mit großem Kopf (Neugeborenenkopf muss gedreht werden), erhöhte Risiken für Rückenschmerzen, Krampfadern, Leistenbrüche.",
          merksatz:
            "Bipedie evolovierte vor Gehirnvergrößerung: Australopithecus aufrecht (3,9 Mya), Hirnvolumen erst ab Homo (1,5 Mya) deutlich vergrößert.",
        },
        {
          heading: "Neanderthaler — Verwandte, keine Vorfahren",
          text: "Homo neanderthalensis war keine primitive Vorstufe des modernen Menschen, sondern eine eigenständige, an Kälteklima adaptierte Menschenart in Europa. Neanderthaler hatten ein vergleichbares oder sogar etwas größeres Hirnvolumen als wir (~1.400–1.600 ccm), bestatteten ihre Toten, nutzten Schmuck (Muschelperlen, Pigmente) und pflegten Kranke. Genetische Analysen (Svante Pääbo, Nobelpreis 2022) zeigen, dass moderne Menschen außerhalb Afrikas 1–4% neanderthalische DNA tragen — Beweis für Hybridisierung nach dem Out-of-Africa-Ereignis. Einige neanderthalische Allele haben Konsequenzen für moderne Menschen: TLR-Allele (Immunabwehr), Allergie-Risiko, COVID-19-Schwere-Risikofaktoren. Das Aussterben der Neanderthaler vor ca. 40.000 Jahren war wahrscheinlich eine Kombination aus Konkurrenz mit H. sapiens, Klimawandel und demografischen Effekten.",
          merksatz:
            "Neanderthaler: eigenständige Art, nicht Vorstufe. 1–4% ihrer DNA in modernen Menschen. Svante Pääbo: Paläogenomik, Nobelpreis 2022.",
        },
      ],
      merksätze: [
        "Homininen-Reihe: Ardipithecus → Australopithecus afarensis (Lucy) → H. habilis → H. erectus → H. sapiens.",
        "Hirnvolumen-Zunahme: ~450 ccm (Australopithecus) → ~630 (H. habilis) → ~1.000 (H. erectus) → ~1.350 (H. sapiens).",
        "Out-of-Africa: H. sapiens entstand in Afrika, migrierte vor ~60.000–70.000 Jahren. Neanderthaler-DNA in modernen Menschen (1–4%).",
      ],
      klinischerBezug:
        "Svante Pääbos Arbeit (Nobelpreis Medizin 2022) zur Paläogenomik der Neanderthaler zeigte, dass bestimmte neanderthalische Allele das COVID-19-Schwereverlaufsrisiko erhöhen (Chromosom 3-Risikohaplotyp). Dies verbindet prähistorische Homininen-Forschung direkt mit klinisch relevanten Fragestellungen der modernen Medizin.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Was sagt die Out-of-Africa-Theorie aus und welche genetischen Belege stützen sie?",
        answer:
          "Die Out-of-Africa-Theorie besagt, dass Homo sapiens in Afrika entstand (vor ca. 300.000 Jahren) und dann vor ca. 60.000–70.000 Jahren aus Afrika in den Rest der Welt migrierte. Genetische Belege: (1) Maximale genetische Diversität bei afrikanischen Populationen (alle anderen Populationen sind Teilmengen dieser Diversität — Gründereffekt bei Auswanderung). (2) Mitochondriale DNA (maternale Linie) und Y-Chromosom (paternale Linie) konvergieren auf afrikanische Ursprünge (Mitochondrielle Eva, Chromosomaler Adam). (3) 1–4% neanderthalische DNA in Nicht-Afrikanern belegt Hybridisierung nach der afrikanischen Migration.",
      },
      selfTest: [
        {
          question: "In welcher chronologischer Reihenfolge erschienen die folgenden Homininen?",
          options: [
            "H. sapiens → H. erectus → H. habilis → Australopithecus afarensis",
            "Australopithecus afarensis → H. habilis → H. erectus → H. sapiens",
            "H. habilis → Australopithecus afarensis → H. erectus → H. sapiens",
            "H. erectus → H. habilis → H. sapiens → Australopithecus afarensis",
            "Alle Homininen existierten gleichzeitig und entwickelten sich unabhängig",
          ],
          correctIndex: 1,
          explanation:
            "Die chronologische Reihenfolge ist: Australopithecus afarensis (Lucy, ~3,9–2,9 Mya), dann Homo habilis (~2,4–1,5 Mya), gefolgt von Homo erectus (~1,9 Mya–100.000 Jahre), und schließlich Homo sapiens (vor ca. 300.000 Jahren bis heute). Dies entspricht einer zunehmenden Hirnvolumenzunahme und Werkzeugkomplexität über die Zeit.",
          hints: [
            "Lucy (Australopithecus afarensis) ist der älteste der genannten. Wer folgte als erster Homo?",
            "Die Reihenfolge spiegelt sich im Hirnvolumen wider: 450 ccm → 630 ccm → 1.000 ccm → 1.350 ccm.",
          ],
          difficulty: 1,
          tags: ["homininen", "reihenfolge", "australopithecus", "evolution-mensch"],
        },
        {
          question: "Welche Aussage über Homo neanderthalensis ist korrekt?",
          options: [
            "Neanderthaler hatten ein deutlich kleineres Hirnvolumen als Homo sapiens",
            "Neanderthaler waren Vorfahren von Homo sapiens, nicht von Homo erectus",
            "Neanderthaler lebten nur in Afrika und migrierten nie nach Europa",
            "Moderne Menschen außerhalb Afrikas tragen 1–4% neanderthalische DNA",
            "Neanderthaler nutzten keine Werkzeuge oder symbolisches Verhalten",
          ],
          correctIndex: 3,
          explanation:
            "Genetische Analysen (Svante Pääbo, Max-Planck-Institut) zeigen, dass moderne Menschen nicht-afrikanischer Abstammung zwischen 1–4% neanderthalische DNA tragen. Dies belegt, dass Homo sapiens nach dem Out-of-Africa-Ereignis mit Neanderthalern hybridisierte, bevor diese ausstarben. Afrikanische Populationen haben dagegen kaum oder keine neanderthalische DNA, da ihre Vorfahren Afrika nicht verließen, als die Hybridisierung stattfand.",
          hints: [
            "Genetische Analysen von Neanderthaler-Genome (Svante Pääbo, Nobelpreis 2022) lieferten direkte Belege.",
            "1–4% in Nicht-Afrikanern — wo fand die Hybridisierung statt, wenn Afrikaner kaum neanderthalische DNA haben?",
          ],
          difficulty: 2,
          tags: ["neanderthaler", "dna", "hybridisierung", "paabo"],
        },
        {
          question:
            "Welcher der folgenden Homininen verließ als erster den afrikanischen Kontinent?",
          options: [
            "Australopithecus afarensis",
            "Homo habilis",
            "Homo erectus",
            "Homo neanderthalensis",
            "Homo sapiens",
          ],
          correctIndex: 2,
          explanation:
            "Homo erectus war der erste Hominin, der Afrika verließ und andere Kontinente besiedelte. Fossile Funde von H. erectus wurden in Java (Indonesien, Dubois 1891), China (Peking-Mensch) und Europa gefunden, datiert auf bis zu 1,8 Millionen Jahre. Australopithecus und H. habilis blieben auf Afrika beschränkt. H. sapiens verließ Afrika erst vor ca. 60.000–70.000 Jahren im Rahmen der Out-of-Africa-Migration.",
          hints: [
            "Welcher Hominid ist für seine weite Verbreitung außerhalb Afrikas bekannt (Java, Peking)?",
            "Homo erectus = 'aufrecht gehender Mensch' — er wanderte weit.",
          ],
          difficulty: 2,
          tags: ["homo-erectus", "migration", "afrika", "homininen"],
        },
        {
          question: "Was belegt die Out-of-Africa-Theorie durch genetische Daten?",
          options: [
            "Africaner haben die geringste genetische Diversität aller Populationen",
            "Die maximale genetische Diversität findet sich in afrikanischen Populationen, was auf den Ursprung von H. sapiens in Afrika hinweist",
            "Alle modernen Menschen haben identische mitochondriale DNA",
            "Neanderthaler und H. sapiens haben identische Genome",
            "Australopithecus afarensis-DNA wurde in modernen Populationen gefunden",
          ],
          correctIndex: 1,
          explanation:
            "Ein Hauptbeleg der Out-of-Africa-Theorie ist die maximale genetische Diversität in afrikanischen Populationen: Da alle nicht-afrikanischen Populationen von einer kleinen Gruppe auswandernder H. sapiens abstammen (Gründereffekt), haben sie einen Ausschnitt der afrikanischen genetischen Vielfalt. Dies entspricht dem Erwartungsmuster, wenn Afrika der Ursprungskontinent ist — die älteste Population zeigt die größte Diversität.",
          hints: [
            "Gründereffekt bei Auswanderung aus Afrika: Was passiert mit der genetischen Diversität der auswandernden Gruppe?",
            "Mehr genetische Diversität = ältere Population (mehr Zeit für Mutationsakkumulation).",
          ],
          difficulty: 2,
          tags: ["out-of-africa", "genetische-diversitaet", "homo-sapiens", "belege"],
        },
        {
          question:
            "Warum war die Entdeckung, dass Australopithecus afarensis bereits aufrecht ging, evolutionär so bedeutsam?",
          options: [
            "Weil sie zeigte, dass der aufrechte Gang nach der Gehirnvergrößerung evolvierte",
            "Weil sie bewies, dass Australopithecus kein Vorfahre des Menschen ist",
            "Weil sie zeigte, dass Bipedie vor der Gehirnvergrößerung evolvierte — der aufrechte Gang war der erste Schritt der Homininisation",
            "Weil sie Australopithecus als ersten Werkzeugbenutzer identifizierte",
            "Weil sie das Aussterben von Australopithecus erklärte",
          ],
          correctIndex: 2,
          explanation:
            "Die Entdeckung von Lucy (Australopithecus afarensis, 3,2 Mya) mit bipeder Anatomie, aber kleinem Hirnvolumen (~450 ccm) widerlegte die frühere Annahme, dass Gehirnvergrößerung und Bipedie parallel evolvierten. Bipedie war der erste evolutionäre Schritt der Homininisation — lange bevor der Homo-Typ mit großem Gehirn erschien. Dies veränderte das Bild der Menschheitsevolution grundlegend.",
          hints: [
            "Hirnvolumen von Australopithecus: ~450 ccm (Schimpansen-Niveau). Geht er aufrecht? Ja!",
            "Was war also chronologisch früher: aufrechter Gang oder großes Gehirn?",
          ],
          difficulty: 2,
          tags: ["bipedie", "lucy", "australopithecus", "hirnvolumen"],
        },
      ],
    },
  ],
};
