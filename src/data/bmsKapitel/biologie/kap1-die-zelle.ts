import type { Kapitel } from '../types';

export const bioKap1: Kapitel = {
  id: 'bio-kap1',
  title: 'Die Zelle',
  subject: 'biologie',
  icon: '🔬',
  estimatedTime: '180 min',
  unterkapitel: [
    // ─── UK1 ────────────────────────────────────────────────────────────────
    {
      id: 'bio-1-01',
      title: 'Kennzeichen des Lebens und Systembiologie',
      content: `## Einleitung

Was unterscheidet Lebendiges von Nicht-Lebendigem? Diese fundamentale Frage beantwortet die Biologie durch die **Kennzeichen des Lebens** – eine Sammlung von Eigenschaften, die allen Lebewesen gemeinsam sind. Kein einzelnes Merkmal allein definiert Leben; erst die Kombination aller Merkmale kennzeichnet ein lebendes System.

## Die Kennzeichen des Lebens im Überblick

**Stoffwechsel (Metabolismus):** Alle Lebewesen nehmen Stoffe und Energie aus der Umwelt auf, wandeln sie um und geben Abbauprodukte ab. Dabei wird zwischen Katabolismus (Abbau) und Anabolismus (Aufbau) unterschieden. Ohne Stoffwechsel kann eine Zelle weder wachsen noch auf Reize reagieren.

**Reizbarkeit (Irritabilität):** Lebewesen nehmen Reize aus der Umwelt wahr und reagieren darauf. Diese Fähigkeit reicht vom einfachen Tropismus einer Pflanze bis zur komplexen Nervenreizleitung beim Menschen. Reizbarkeit sichert das Überleben in einer sich verändernden Umgebung.

**Fortpflanzung:** Lebewesen erzeugen Nachkommen – entweder sexuell (mit genetischer Rekombination) oder asexuell (durch Teilung, Sprossung oder Klonierung). Fortpflanzung ist die Voraussetzung für die Weitergabe genetischer Information und damit für Evolution.

**Wachstum und Entwicklung:** Lebewesen wachsen durch Zellvermehrung und Zelldifferenzierung. Wachstum ist nicht nur Größenzunahme, sondern auch die geordnete Entwicklung von der befruchteten Eizelle zum ausdifferenzierten Organismus.

**Evolution:** Lebewesen verändern sich über Generationen durch Mutation und Selektion. Evolution ist die übergeordnete Eigenschaft, die alle anderen Kennzeichen miteinander verbindet – sie erklärt die Vielfalt und Anpassung des Lebens.

**Weitere Kennzeichen:** Bewegung (aktiv oder passiv), Homöostase (inneres Gleichgewicht), zellulärer Aufbau (Zelltheorie: alle Lebewesen bestehen aus Zellen).

## Systembiologie

Die Systembiologie betrachtet Lebewesen als komplexe, vernetzte Systeme – nicht als bloße Summe ihrer Teile. Biologische Systeme zeigen **Emergenz**: Eigenschaften, die auf höherer Ebene auftreten, aber auf niedrigerer Ebene nicht vorhersagbar sind. Eine einzelne Nervenzelle denkt nicht – ein Netzwerk von Milliarden Nervenzellen erzeugt Bewusstsein.

**Hierarchische Organisation des Lebens:**
Moleküle → Organellen → Zellen → Gewebe → Organe → Organsysteme → Organismus → Population → Ökosystem → Biosphäre

Auf jeder Ebene entstehen neue emergente Eigenschaften, die die Komplexität des Lebens ausmachen. Die Systembiologie nutzt mathematische Modelle und Computeranalysen, um diese Netzwerke zu verstehen.

## Homöostase

Lebende Systeme halten ihre inneren Bedingungen konstant, obwohl die Umwelt schwankt. Körpertemperatur, Blut-pH, Blutzucker – all diese Größen werden durch **negative Rückkopplungsschleifen** reguliert. Beispiel: Steigt der Blutzucker, schüttet die Bauchspeicheldrüse Insulin aus, das den Blutzucker senkt – ein klassisches Regelkreismodell.`,
      lernziele: [
        "Die sieben Kennzeichen des Lebens benennen und erläutern",
        "Den Begriff Emergenz im Kontext der Systembiologie erklären",
        "Homöostase und negative Rückkopplung am Beispiel des Blutzuckers beschreiben",
      ],
      sections: [
        {
          heading: "Die sieben Kennzeichen des Lebens",
          text: "Alle Lebewesen teilen sieben grundlegende Eigenschaften: Stoffwechsel (Katabolismus + Anabolismus), Reizbarkeit (Wahrnehmung und Reaktion auf Umweltreize), Fortpflanzung (sexuell oder asexuell), Wachstum und Entwicklung (Zellteilung und Differenzierung), Evolution (Anpassung über Generationen durch Mutation und Selektion), Bewegung (aktiv oder passiv) sowie Homöostase (Aufrechterhaltung eines inneren Gleichgewichts). Kein Merkmal allein definiert Leben – erst ihre Kombination kennzeichnet ein lebendes System. Viren sind ein Grenzfall: Sie zeigen Fortpflanzung und Evolution, aber keinen eigenständigen Stoffwechsel und keine Zellstruktur.",
          merksatz: "StReForWaEvoBeHo: Stoffwechsel – Reizbarkeit – Fortpflanzung – Wachstum – Evolution – Bewegung – Homöostase.",
        },
        {
          heading: "Systembiologie und Emergenz",
          text: "Die Systembiologie analysiert Lebewesen als vernetzte Systeme. Emergenz beschreibt Eigenschaften, die auf höherer Organisationsebene entstehen und aus den Eigenschaften der einzelnen Komponenten nicht direkt vorhersagbar sind. Das bekannteste Beispiel: Bewusstsein entsteht aus dem Zusammenspiel von Nervenzellen, ist aber keine Eigenschaft einer einzelnen Zelle. Biologische Systeme werden durch Regelkreise (Rückkopplungsschleifen) stabilisiert. Negative Rückkopplung wirkt dem auslösenden Reiz entgegen und hält Parameter wie Körpertemperatur oder Blut-pH im physiologischen Bereich.",
        },
        {
          heading: "Hierarchische Organisation des Lebens",
          text: "Leben ist hierarchisch organisiert: von subatomaren Teilchen über Moleküle, Organellen, Zellen, Gewebe, Organe und Organsysteme bis zum Organismus, Populationen und der Biosphäre. Auf jeder Ebene entstehen neue emergente Eigenschaften. Diese Hierarchie erklärt, warum Medizin auf mehreren Ebenen gleichzeitig operiert – von der Molekularbiologie (Gentherapie) über die Zellbiologie (Krebs) bis zur Physiologie (Organsysteme) und Epidemiologie (Populationen). Die Reduktion komplexer Phänomene auf untergeordnete Ebenen (Reduktionismus) ist eine wichtige Methode, muss aber durch systemische Betrachtung ergänzt werden.",
        },
      ],
      merksätze: [
        "StReForWaEvoBeHo: Stoffwechsel – Reizbarkeit – Fortpflanzung – Wachstum – Evolution – Bewegung – Homöostase.",
        "Emergenz: Das Ganze ist mehr als die Summe seiner Teile – neue Eigenschaften entstehen auf höherer Organisationsebene.",
        "Homöostase durch negative Rückkopplung: Der Effekt wirkt dem auslösenden Reiz entgegen und stabilisiert das System.",
      ],
      klinischerBezug: "Diabetes mellitus ist eine Störung der Homöostase: Die negative Rückkopplung des Blutzuckerregelkreises versagt, weil Insulin fehlt (Typ 1) oder nicht wirkt (Typ 2). Ohne Behandlung führt chronisch erhöhter Blutzucker zu Folgeschäden an Gefäßen, Nieren und Nerven.",
      altfrage: {
        question: "Warum gelten Viren nicht als Lebewesen im klassischen Sinne?",
        answer: "Viren zeigen zwar Fortpflanzung und Evolution, besitzen aber keinen eigenständigen Stoffwechsel und keine Zellstruktur. Sie sind auf den Stoffwechsel einer Wirtszelle angewiesen, um sich zu replizieren. Da sie nicht alle Kennzeichen des Lebens erfüllen – insbesondere keinen autonomen Metabolismus – werden sie als Grenzfall zwischen belebter und unbelebter Welt betrachtet.",
      },
      selfTest: [
        {
          question: "Welches der folgenden Merkmale ist KEIN Kennzeichen des Lebens?",
          options: [
            "Stoffwechsel",
            "Kristallisation",
            "Reizbarkeit",
            "Fortpflanzung",
            "Homöostase",
          ],
          correctIndex: 1,
          explanation: "Kristallisation ist ein physikalisch-chemischer Prozess, der auch bei unbelebter Materie auftritt (z.B. Salzkristalle). Alle anderen Optionen – Stoffwechsel, Reizbarkeit, Fortpflanzung und Homöostase – sind echte Kennzeichen des Lebens. Die sieben Kennzeichen sind: Stoffwechsel, Reizbarkeit, Fortpflanzung, Wachstum, Evolution, Bewegung und Homöostase.",
          hints: [
            "Überlege: Kann auch unbelebte Materie diese Eigenschaft zeigen?",
            "Schnee und Salz können es – aber sie leben nicht.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was versteht man unter Emergenz in der Systembiologie?",
          options: [
            "Den Abbau komplexer Strukturen in einfachere Bestandteile",
            "Die Entstehung neuer Eigenschaften auf höherer Organisationsebene",
            "Die Fähigkeit von Zellen, sich zu teilen",
            "Den Energietransfer zwischen Zellen",
            "Die Mutation von Genen durch Umwelteinflüsse",
          ],
          correctIndex: 1,
          explanation: "Emergenz bezeichnet die Entstehung neuer Eigenschaften auf höherer Organisationsebene, die aus den Eigenschaften der einzelnen Komponenten nicht direkt vorhersagbar sind. Bewusstsein ist eine emergente Eigenschaft des Gehirns – keine einzelne Nervenzelle denkt. Emergenz ist das Gegenteil von Reduktionismus (Option A) und erklärt, warum biologische Systeme mehr sind als die Summe ihrer Teile.",
          hints: [
            "Das Ganze ist mehr als die Summe seiner Teile.",
            "Kann eine einzelne Nervenzelle denken?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Art der Rückkopplung hält die Homöostase aufrecht?",
          options: [
            "Positive Rückkopplung",
            "Nullrückkopplung",
            "Negative Rückkopplung",
            "Laterale Inhibition",
            "Vorwärtskopplung",
          ],
          correctIndex: 2,
          explanation: "Negative Rückkopplung ist der zentrale Mechanismus der Homöostase. Der Effekt wirkt dem auslösenden Reiz entgegen und führt das System zurück zum Sollwert. Beispiel: Hoher Blutzucker → Insulin → Blutzucker sinkt → weniger Insulin. Positive Rückkopplung (Option A) verstärkt dagegen den ursprünglichen Reiz und führt zu explosivem Wachstum (z.B. Wehen, Blutgerinnung) – kein Gleichgewicht.",
          hints: [
            "Negativ bedeutet: Der Effekt wirkt dem Auslöser entgegen.",
            "Thermostat-Prinzip: Zu warm → Kühlung einschalten.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Auf welcher Ebene der biologischen Hierarchie sind Gewebe angesiedelt?",
          options: [
            "Zwischen Molekülen und Organellen",
            "Zwischen Organellen und Zellen",
            "Zwischen Zellen und Organen",
            "Zwischen Organen und Organsystemen",
            "Zwischen Organsystemen und Organismen",
          ],
          correctIndex: 2,
          explanation: "Die hierarchische Organisation lautet: Moleküle → Organellen → Zellen → Gewebe → Organe → Organsysteme → Organismus. Gewebe bestehen aus gleichartigen Zellen mit gemeinsamer Funktion (z.B. Epithelgewebe, Muskelgewebe). Auf jeder Ebene entstehen emergente Eigenschaften: Einzelne Muskelzellen kontrahieren, aber erst das Muskelgewebe erzeugt koordinierte Kraftentwicklung.",
          hints: [
            "Denke an die Stufenleiter: Zellen schließen sich zu ... zusammen.",
            "Skelettmuskeln bestehen aus vielen Muskelfasern (= spezialisierten Zellen).",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Warum erfüllen Viren nicht alle Kennzeichen des Lebens?",
          options: [
            "Weil Viren keine Nukleinsäuren besitzen",
            "Weil Viren keinen eigenen Stoffwechsel haben",
            "Weil Viren sich nicht fortpflanzen",
            "Weil Viren keine Evolution durchlaufen",
            "Weil Viren zu klein sind",
          ],
          correctIndex: 1,
          explanation: "Viren besitzen keine Ribosomen, keine Mitochondrien und keine Enzyme für den Energiestoffwechsel. Sie können sich nur vermehren, indem sie den Stoffwechsel einer Wirtszelle kapern. Ohne Wirt sind sie metabolisch inaktiv. Da ein eigenständiger Stoffwechsel zu den grundlegenden Kennzeichen des Lebens gehört, gelten Viren als Grenzfall. Sie besitzen Nukleinsäuren (Option A falsch), pflanzen sich fort (C falsch) und unterliegen Evolution (D falsch).",
          hints: [
            "Was braucht ein Virus, um sich zu vermehren?",
            "Kann ein Virus außerhalb einer Wirtszelle Energie gewinnen?",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },

    // ─── UK2 ────────────────────────────────────────────────────────────────
    {
      id: 'bio-1-02',
      title: 'Prokaryoten vs. Eukaryoten',
      content: `## Einleitung

Die grundlegendste Einteilung aller Lebewesen trennt Prokaryoten von Eukaryoten. Dieser Unterschied – das Vorhandensein oder Fehlen eines membranumschlossenen Zellkerns – hat weitreichende Konsequenzen für Zellbau, Physiologie und Evolutionsgeschichte. In der Medizin ist diese Unterscheidung entscheidend: Antibiotika nutzen die Differenzen gezielt aus.

## Prokaryoten

Der Begriff **Prokaryot** stammt vom Griechischen "pro" (vor) und "karyon" (Kern) – also "vor dem Kern". Prokaryoten besitzen keinen membranumschlossenen Zellkern. Ihre DNA liegt als zirkuläres Chromosom frei im **Nukleoid**, einer Region im Zytoplasma ohne Membrangrenze.

**Domänen:** Prokaryoten umfassen zwei Domänen des Lebens: **Bakterien** und **Archaeen** (früher Archaebakterien). Archaeen leben oft in Extrembiotopen (heiße Quellen, Salzseen) und unterscheiden sich biochemisch von Bakterien.

**Charakteristika von Prokaryoten:**
- Kein membranumschlossener Zellkern (DNA liegt frei im Nukleoid)
- Zirkuläre DNA (kein Histon-umhülltes Chromatin wie Eukaryoten)
- Keine membranumschlossenen Organellen (keine Mitochondrien, kein ER, kein Golgi)
- Kleinere Ribosomen: **70S** (zusammengesetzt aus 30S + 50S Untereinheit)
- Oft Zellwand (bei Bakterien aus **Peptidoglykan/Murein**, bei Archaeen aus anderen Polymeren)
- Kleiner (~1–10 µm), meist einzellig
- Plasmide: kleine, zirkuläre Extra-DNA (wichtig für Antibiotikaresistenz)
- Fortpflanzung durch **binäre Teilung** (asexuell, sehr schnell – E. coli: 20 min)
- Geißeln aus Flagellin (strukturell anders als eukaryotische Flagellen)

## Eukaryoten

**Eukaryoten** (griech. "eu" = echt, "karyon" = Kern) besitzen einen echten, membranumschlossenen Zellkern sowie zahlreiche Membranorganellen. Eukaryoten umfassen Tiere, Pflanzen, Pilze und Protisten.

**Charakteristika von Eukaryoten:**
- Membranumschlossener Zellkern mit linearer DNA (an Histonen verpackt als Chromatin)
- Membranorganellen: Mitochondrien, ER, Golgi-Apparat, Lysosomen
- Größere Ribosomen: **80S** (zusammengesetzt aus 40S + 60S Untereinheit)
- Größer (~10–100 µm)
- Zytoskelett (Mikrotubuli, Mikrofilamente, Intermediärfilamente)
- Mitose/Meiose als Teilungsmechanismen
- Pflanzen: zusätzlich Chloroplasten und Zellwand aus Zellulose

## Vergleichstabelle

| Merkmal | Prokaryoten | Eukaryoten |
|---|---|---|
| Zellkern | Kein membranumschlossener Kern (Nukleoid) | Echter membranumschlossener Kern |
| DNA-Form | Zirkulär | Linear (Chromosomen) |
| Ribosomen | 70S (30S + 50S) | 80S (40S + 60S) |
| Organellen | Keine membranumschlossenen | Mitochondrien, ER, Golgi, etc. |
| Zellwand | Oft (Peptidoglykan bei Bakterien) | Nur Pflanzen (Zellulose) und Pilze (Chitin) |
| Größe | 1–10 µm | 10–100 µm |
| Beispiele | E. coli, Staphylokokken, Archaeen | Tiere, Pflanzen, Pilze, Protisten |

## Endosymbiontentheorie

Mitochondrien und Chloroplasten entstammen nach der **Endosymbiontentheorie** (Lynn Margulis) uralten Prokaryoten, die von einer Wirtszelle aufgenommen wurden. Belege: eigene zirkuläre DNA, 70S-Ribosomen, Doppelmembran, Vermehrung durch Teilung. Diese Theorie erklärt die Brücke zwischen Prokaryoten und Eukaryoten.`,
      lernziele: [
        "Prokaryoten und Eukaryoten anhand von mindestens fünf Merkmalen unterscheiden",
        "Die Bedeutung der Ribosomengröße (70S vs. 80S) für die Antibiotikatherapie erklären",
        "Die Endosymbiontentheorie und ihre Belege beschreiben",
      ],
      sections: [
        {
          heading: "Strukturelle Unterschiede auf einen Blick",
          text: "Der entscheidende Unterschied zwischen Prokaryoten und Eukaryoten ist das Fehlen eines membranumschlossenen Zellkerns bei Prokaryoten. Die DNA von Prokaryoten liegt als zirkuläres Chromosom frei im Nukleoid. Eukaryoten dagegen haben lineare Chromosomen, die an Histonen verpackt sind, und einen echten Kern mit Doppelmembran und Kernporen. Prokaryoten besitzen außerdem keine Membranorganellen: keine Mitochondrien, kein ER, keinen Golgi-Apparat. Stattdessen laufen alle Stoffwechselprozesse im Zytoplasma oder an der Plasmamembran ab. Eukaryoten nutzen Kompartimentierung für räumliche Trennung von Reaktionen.",
          merksatz: "Prokaryoten = Keine Membranorganellen, kein Kern, 70S-Ribosomen. Eukaryoten = Kern + Organellen + 80S-Ribosomen.",
        },
        {
          heading: "Medizinische Relevanz: Antibiotika und Ribosomen",
          text: "Die unterschiedliche Ribosomengröße (Prokaryoten: 70S; Eukaryoten: 80S) ist die molekulare Grundlage vieler Antibiotika. Aminoglykoside (z.B. Streptomycin), Tetracycline, Makrolide (z.B. Erythromycin) und Chloramphenicol binden spezifisch an prokaryotische 70S-Ribosomen und hemmen die bakterielle Proteinsynthese. Menschliche 80S-Ribosomen werden nicht gebunden – daher keine (oder geringe) Toxizität für den Patienten. Ausnahme: Mitochondrien haben ebenfalls 70S-Ribosomen (Endosymbiontentheorie), weshalb manche Antibiotika in hohen Dosen mitochondriale Nebenwirkungen zeigen können.",
        },
        {
          heading: "Archaeen – die dritte Domäne",
          text: "Archaeen sind Prokaryoten, unterscheiden sich aber biochemisch erheblich von Bakterien. Ihre Zellmembranen bestehen aus Isoprenoid-Etherlipiden (nicht Fettsäure-Esterlipiden wie bei Bakterien und Eukaryoten), und ihre Zellwand enthält kein Peptidoglykan. Archaeen besiedeln oft Extremstandorte: Thermophile (heiße Quellen, bis 121°C), Halophile (Salzseen), Methanogene (Sumpfböden, Darm). Trotz prokaryotischem Grundbauplan zeigen Archaeen in Geneexpression und DNA-Replikation mehr Ähnlichkeit mit Eukaryoten – was evolutionär bedeutsam ist.",
        },
      ],
      merksätze: [
        "Pro = kein Kern: Prokaryoten haben kein membranumschlossenes Nukleoplasma, die DNA liegt frei im Nukleoid.",
        "70S (Prokaryoten) vs. 80S (Eukaryoten): Diese Unterschied ist die Zielstruktur vieler Antibiotika.",
        "Endosymbiontentheorie: Mitochondrien stammen von α-Proteobakterien, Chloroplasten von Cyanobakterien ab – belegt durch zirkuläre DNA und 70S-Ribosomen.",
      ],
      klinischerBezug: "Penicillin hemmt die Synthese der bakteriellen Peptidoglykan-Zellwand – menschliche Zellen besitzen keine solche Zellwand und sind daher unempfindlich. Tetracycline binden an die prokaryotische 30S-Ribosomenuntereinheit und blockieren die Anlagerung der tRNA – ein klares Beispiel dafür, wie strukturelle Unterschiede zwischen Prokaryoten und Eukaryoten therapeutisch genutzt werden.",
      altfrage: {
        question: "Ein Patient erhält Chloramphenicol. Warum ist dieses Antibiotikum für Prokaryoten toxisch, nicht aber für menschliche Zellen?",
        answer: "Chloramphenicol bindet spezifisch an die 50S-Untereinheit des prokaryotischen 70S-Ribosoms und blockiert die Peptidyltransferase-Reaktion. Menschliche 80S-Ribosomen (Untereinheiten: 40S + 60S) werden nicht gebunden. Da menschliche Mitochondrien jedoch 70S-Ribosomen besitzen, kann Chloramphenicol in hohen Dosen mitochondriale Toxizität verursachen (aplastische Anämie).",
      },
      selfTest: [
        {
          question: "Welches Merkmal unterscheidet Prokaryoten von Eukaryoten am grundlegendsten?",
          options: [
            "Prokaryoten haben keine DNA",
            "Prokaryoten besitzen keinen membranumschlossenen Zellkern",
            "Prokaryoten sind immer größer als Eukaryoten",
            "Prokaryoten haben keine Ribosomen",
            "Prokaryoten können sich nicht fortpflanzen",
          ],
          correctIndex: 1,
          explanation: "Das defininierende Merkmal ist das Fehlen eines membranumschlossenen Zellkerns bei Prokaryoten. Die DNA liegt als zirkuläres Chromosom frei im Nukleoid. Prokaryoten haben sehr wohl DNA (A falsch) und Ribosomen (D falsch), sind aber typischerweise kleiner als Eukaryoten (C falsch) und pflanzen sich durch binäre Teilung fort (E falsch).",
          hints: [
            "Der Name gibt es bereits an: 'Pro' = vor, 'karyon' = Kern.",
            "Haben Bakterien einen Zellkern mit Membran?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Ribosomengröße haben Prokaryoten?",
          options: [
            "80S (40S + 60S)",
            "60S (30S + 30S)",
            "70S (30S + 50S)",
            "100S (50S + 50S)",
            "50S (20S + 30S)",
          ],
          correctIndex: 2,
          explanation: "Prokaryotische Ribosomen haben eine Sedimentationskoeffizient von 70S, zusammengesetzt aus einer kleinen 30S- und einer großen 50S-Untereinheit. Eukaryotische Ribosomen sind 80S (40S + 60S). Diese Unterschiede sind die Zielstruktur zahlreicher Antibiotika: Aminoglykoside binden an 30S, Makrolide und Chloramphenicol an 50S.",
          hints: [
            "Prokaryoten haben kleinere Ribosomen als Eukaryoten.",
            "70S = 30S + 50S (Sedimentationskoeffizienten addieren sich nicht linear).",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Aus welchem Material besteht die bakterielle Zellwand?",
          options: [
            "Zellulose",
            "Chitin",
            "Peptidoglykan (Murein)",
            "Kollagen",
            "Phospholipid",
          ],
          correctIndex: 2,
          explanation: "Bakterielle Zellwände bestehen aus Peptidoglykan (auch Murein genannt), einem Netz aus Zuckerketten (N-Acetylglucosamin und N-Acetylmuraminsäure), die durch kurze Peptide quervernetzt sind. Penicillin hemmt genau diese Quervernetzung. Zellulose (A) ist Pflanzenzellwand, Chitin (B) Pilzzellwand, Kollagen (D) ein tierisches Strukturprotein, Phospholipide (E) bilden Membranen.",
          hints: [
            "Penicillin greift die Zellwand an – aus welchem Stoff besteht sie?",
            "Murein ist ein anderer Name für dasselbe Material.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche der folgenden Eigenschaften belegt die Endosymbiontentheorie für Mitochondrien?",
          options: [
            "Mitochondrien befinden sich im Zellkern",
            "Mitochondrien besitzen eigene zirkuläre DNA und 70S-Ribosomen",
            "Mitochondrien synthetisieren alle ihre eigenen Proteine selbst",
            "Mitochondrien können Photosynthese betreiben",
            "Mitochondrien teilen sich durch Mitose",
          ],
          correctIndex: 1,
          explanation: "Die Endosymbiontentheorie wird durch mehrere Befunde gestützt: Mitochondrien besitzen eigene zirkuläre DNA (wie Bakterien), haben 70S-Ribosomen (nicht die eukaryotischen 80S), vermehren sich durch Teilung (binär, nicht durch Mitose) und sind von einer Doppelmembran umhüllt (äußere = ehemalige Wirtsphagosomenmembran). Allerdings kodiert die mtDNA nur ~13 Proteine – der Rest wird im Zellkern kodiert und importiert (C falsch).",
          hints: [
            "Was haben Mitochondrien mit Bakterien gemeinsam?",
            "Welche Ribosomdgröße haben Bakterien?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Zu welcher Domäne gehören Archaeen?",
          options: [
            "Bakterien",
            "Eukaryoten",
            "Sie bilden eine eigene Domäne (Archaea)",
            "Protisten",
            "Pilze",
          ],
          correctIndex: 2,
          explanation: "Das Leben ist in drei Domänen eingeteilt: Bacteria, Archaea und Eukarya. Archaeen sind Prokaryoten (kein membranumschlossener Kern), bilden aber eine eigenständige Domäne, die sich biochemisch deutlich von Bakterien unterscheidet (andere Membranlipidzusammensetzung, kein Peptidoglykan in der Zellwand). Archaeen zeigen in der Genregulation und DNA-Replikation mehr Ähnlichkeit mit Eukaryoten als mit Bakterien.",
          hints: [
            "Carl Woese entdeckte auf Basis der rRNA-Sequenzanalyse, dass Archaeen eigenständig sind.",
            "Drei Domänen des Lebens: Bacteria, Archaea, Eukarya.",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },

    // ─── UK3 ────────────────────────────────────────────────────────────────
    {
      id: 'bio-1-03',
      title: 'Zellmembran und Zytoplasma',
      content: `## Einleitung

Die Plasmamembran ist weit mehr als eine passive Barriere – sie ist eine dynamische, hochspezialisierte Struktur, die Kommunikation, Transport und Identität der Zelle ermöglicht. Das **Flüssig-Mosaik-Modell** (Singer & Nicolson, 1972) beschreibt ihren grundlegenden Aufbau. Das Zytoplasma, der flüssige Innenraum der Zelle, ist der Ort zahlreicher Stoffwechselreaktionen.

## Das Flüssig-Mosaik-Modell

Die Zellmembran besteht aus einer **Phospholipid-Doppelschicht** (Bilayer), in der Proteine wie in einem Mosaik eingebettet sind. "Flüssig" bedeutet, dass Lipide und Proteine lateral innerhalb der Schicht beweglich sind (laterale Diffusion).

**Phospholipide** haben eine amphiphile Struktur:
- Hydrophiler Kopf (Phosphatgruppe + Glycerin): zeigt zur wässrigen Umgebung
- Hydrophobe Schwänze (zwei Fettsäureketten): bilden das Innere der Doppelschicht

Diese Anordnung ist thermodynamisch stabil: Die hydrophoben Schwänze schirmen sich vor Wasser ab, während die hydrophilen Köpfe mit Wasser interagieren.

## Membrankomponenten

**Cholesterin:** Eingelagert zwischen den Phospholipiden, reguliert Membranfluidität:
- Bei hohen Temperaturen: Cholesterin reduziert Fluidität (verhindert zu flüssige Membran)
- Bei tiefen Temperaturen: Cholesterin erhöht Fluidität (verhindert zu starre Membran)
Cholesterin stabilisiert Lipid-Rafts – geordnete Mikrodomänen mit spezifischen Signalproteinen.

**Membranproteine** haben diverse Funktionen:
- **Integrale Proteine** (Transmembranproteine): Durchspannen die Membran vollständig; Beispiele: Ionenkanäle (Na⁺-, K⁺-Kanäle), Transporter (GLUT-Glucose-Transporter), Rezeptoren (G-Protein-gekoppelte Rezeptoren)
- **Periphere Proteine:** Assoziiert mit der Membranoberfläche (innen oder außen); leicht ablösbar

**Glykokalix:** Kohlenhydratketten auf der Außenseite der Membran (an Lipide: Glykolipide; an Proteine: Glykoproteine). Funktionen: Zellerkennung, Blutgruppenantigene (ABO-System), Immunerkennung, Schutz.

## Membranfluidität und ihre Regulation

Die Fluidität der Membran hängt von der Zusammensetzung der Fettsäuren ab:
- **Ungesättigte Fettsäuren** (mit Doppelbindungen, geknickte Ketten): erhöhen Fluidität
- **Gesättigte Fettsäuren** (gerade Ketten, dichte Packung): reduzieren Fluidität

Organismen passen ihre Membrankomposition an Temperaturveränderungen an (Homöoviskose Adaptation).

## Das Zytoplasma (Zytosol)

Das Zytoplasma ist der gesamte Zellinhalt außerhalb des Zellkerns. Das **Zytosol** ist die wässrige Phase des Zytoplasmas, in der Organellen, Ribosomen und das Zytoskelett eingebettet sind.

**Zusammensetzung des Zytosols:**
- ~70% Wasser
- Gelöste Ionen (K⁺, Mg²⁺, etc.)
- Enzyme (Glykolyse-Enzyme, Ribosomen)
- Metabolite (ATP, Glucose, Aminosäuren)
- Strukturproteine (Zytoskelett-Monomere)

**Zytosolische Reaktionen:** Glykolyse, Proteinsynthese an freien Ribosomen, Fettsäuresynthese, Signaltransduktion.

Die hochviskose Konsistenz des Zytosols (kolloidale Lösung) ermöglicht räumlich getrennte Reaktionen und schnelle Diffusion kleiner Moleküle.`,
      lernziele: [
        "Das Flüssig-Mosaik-Modell mit allen Komponenten erklären",
        "Die Rolle von Cholesterin und Fettsäuren für die Membranfluidität beschreiben",
        "Integrale und periphere Membranproteine sowie ihre Funktionen unterscheiden",
      ],
      sections: [
        {
          heading: "Phospholipid-Doppelschicht: Aufbau und Selbstorganisation",
          text: "Phospholipide sind amphiphile Moleküle: Sie haben einen hydrophilen Kopf (Phosphat + Glycerin + polarer Rest) und zwei hydrophobe Fettsäureschwänze. In wässrigem Milieu ordnen sich Phospholipide spontan zur Doppelschicht an, wobei die hydrophoben Schwänze im Innern und die hydrophilen Köpfe außen liegen. Diese Selbstorganisation ist entropisch getrieben (hydrophober Effekt). Die Doppelschicht ist semipermabel: Kleine unpolare Moleküle (O₂, CO₂, Ethanol) diffundieren frei hindurch, während geladene Ionen und große polare Moleküle blockiert werden. Wasser kann eingeschränkt passieren, bevorzugt aber durch Aquaporin-Kanäle.",
          merksatz: "Phospholipid = amphiphil: hydrophiler Kopf + hydrophobe Schwänze → spontane Bilayer-Bildung im Wasser.",
        },
        {
          heading: "Membranproteine: Tore, Transporter und Signalempfänger",
          text: "Integrale Transmembranproteine durchspannen die Lipiddoppelschicht mit hydrophoben Helices und sind nicht ohne Detergenzien löslich. Zu ihnen gehören Ionenkanäle (selektiv für Na⁺, K⁺, Ca²⁺, Cl⁻), Carrier/Transporter (für Glucose, Aminosäuren) und Rezeptoren (für Hormone, Neurotransmitter). Periphere Proteine sind an der Membranoberfläche verankert (oft über Lipidanker oder elektrostatische Wechselwirkungen) und leichter ablösbar. Glykoproteine auf der Außenseite bilden die Glykokalix und sind für Zellerkennung, Blutgruppenantigene (ABO-System) und Immunantworten verantwortlich. Das Fehlen bestimmter Glykoproteine auf Erythrozyten definiert die Blutgruppen.",
        },
        {
          heading: "Cholesterin und Membranfluidität",
          text: "Cholesterin ist ein Steroidmolekül, das zwischen den Phospholipiden eingelagert ist. Bei hoher Temperatur begrenzt es die Beweglichkeit der Fettsäureketten (Pufferung gegen übermäßige Verflüssigung). Bei niedriger Temperatur verhindert es die enge Packung der Fettsäuren (Pufferung gegen Erstarrung). Diese bidirektionale Regulationsfunktion macht Cholesterin unentbehrlich für die Membranstabilität in Säugerzellen. In Lipid-Rafts reichert sich Cholesterin zusammen mit gesättigten Phospholipiden an und schafft geordnete Mikrodomänen, die bestimmte Signalproteine konzentrieren.",
          merksatz: "Cholesterin = Membranfluiditätspuffer: verhindert sowohl Erstarren (Kälte) als auch übermäßiges Verflüssigen (Wärme).",
        },
      ],
      merksätze: [
        "Flüssig-Mosaik-Modell: Die Membran ist eine flüssige Phospholipid-Doppelschicht, in der Proteine lateral beweglich eingebettet sind.",
        "Amphiphil = amphiphil: hydrophiler Kopf + hydrophobe Schwänze – erklärt die spontane Selbstorganisation zur Doppelschicht.",
        "Cholesterin reguliert Fluidität bidirektional: Bei Wärme versteift es, bei Kälte verflüssigt es die Membran.",
      ],
      klinischerBezug: "Statine (z.B. Atorvastatin) hemmen die Cholesterinsynthese in der Leber und senken den Blutcholesterinspiegel. Überschüssiges LDL-Cholesterin lagert sich in Arterienwänden ab (Atherosklerose) und erhöht das Herzinfarktrisiko. Das ABO-Blutgruppensystem basiert auf Glykoproteinen und Glykolipiden der Erythrozytenoberfläche – falsche Blutgruppe bei Transfusion führt zu Hämolyse durch Antikörper.",
      altfrage: {
        question: "Warum können Ionen wie Na⁺ und K⁺ die Lipiddoppelschicht nicht frei passieren?",
        answer: "Das Innere der Lipiddoppelschicht ist stark hydrophob (Fettsäureketten). Ionen wie Na⁺ und K⁺ sind geladen und von einer Hydrathülle aus Wassermolekülen umgeben. Der Übertritt in die hydrophobe Phase würde die Hydrathülle entfernen, was eine hohe Energiebarriere darstellt. Deshalb benötigen Ionen spezifische Membranproteine – Ionenkanäle oder aktive Transporter – um die Membran zu überqueren.",
      },
      selfTest: [
        {
          question: "Was beschreibt das Flüssig-Mosaik-Modell der Zellmembran?",
          options: [
            "Eine starre Phospholipidschicht mit fest verankerten Proteinen",
            "Eine fluide Phospholipid-Doppelschicht mit lateral beweglichen Proteinen",
            "Eine einzelne Lipidschicht mit Kohlenhydraten",
            "Ein Netzwerk aus Proteinfilamenten",
            "Eine Doppelmembran wie bei Mitochondrien",
          ],
          correctIndex: 1,
          explanation: "Das Flüssig-Mosaik-Modell (Singer & Nicolson, 1972) beschreibt die Membran als fluide Phospholipid-Doppelschicht, in der Proteine und Lipide lateral beweglich sind. 'Flüssig' bezieht sich auf die Mobilität der Membrankomponenten, 'Mosaik' auf die heterogene Verteilung der Proteine. Die Membran ist nicht starr (A falsch) und besteht aus zwei Lipidschichten (nicht einer, C falsch).",
          hints: [
            "Flüssig = die Membrankomponenten können sich seitlich bewegen.",
            "Mosaik = die verschiedenen Proteine ergeben wie Mosaiksteine ein Gesamtbild.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Funktion hat Cholesterin in der Zellmembran?",
          options: [
            "Es bildet den Hauptbestandteil der Lipiddoppelschicht",
            "Es transportiert Ionen durch die Membran",
            "Es reguliert die Membranfluidität als Puffer",
            "Es ist ein Membranrezeptor für Hormone",
            "Es verbindet die Membran mit dem Zytoskelett",
          ],
          correctIndex: 2,
          explanation: "Cholesterin ist zwischen den Phospholipiden eingelagert und reguliert die Membranfluidität. Bei hohen Temperaturen begrenzt es die Beweglichkeit der Fettsäureketten (verhindert übermäßige Verflüssigung); bei tiefen Temperaturen verhindert es die dichte Packung (verhindert Erstarrung). Cholesterin ist nicht der Hauptbestandteil (das sind Phospholipide, A falsch) und transportiert keine Ionen direkt (B falsch).",
          hints: [
            "Cholesterin wirkt wie ein Temperaturpuffer für die Membran.",
            "Was passiert mit Butter bei verschiedenen Temperaturen?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was sind integrale Membranproteine?",
          options: [
            "Proteine, die nur an der Außenseite der Membran sitzen",
            "Proteine, die die Membran vollständig durchspannen",
            "Proteine im Zytosol ohne Membrankontakt",
            "Proteine, die Phospholipide synthetisieren",
            "Proteine, die ausschließlich für den Zellkern bestimmt sind",
          ],
          correctIndex: 1,
          explanation: "Integrale Membranproteine (Transmembranproteine) durchspannen die Lipiddoppelschicht vollständig mit hydrophoben Helices und sind nicht ohne Detergenzien von der Membran zu lösen. Zu ihnen gehören Ionenkanäle, Transporter und Rezeptoren. Periphere Proteine (Option A) sitzen nur an der Oberfläche und sind leichter ablösbar. Option C beschreibt zytosolische Proteine ohne Membrankontakt.",
          hints: [
            "Integral = vollständig eingebettet in die Membran.",
            "Transmembranproteine haben hydrophobe Helices im Membrankern.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Eigenschaft der Fettsäuren erhöht die Membranfluidität?",
          options: [
            "Hohe Sättigungsgrad (viele Einfachbindungen)",
            "Lange Kettenlänge",
            "Ungesättigte Fettsäuren mit Doppelbindungen",
            "Hohe Konzentration an Cholesterin",
            "Gesättigte kurzkettige Fettsäuren",
          ],
          correctIndex: 2,
          explanation: "Ungesättigte Fettsäuren haben Doppelbindungen, die zu einem Knick in der Kohlenstoffkette führen. Dieser Knick verhindert die dichte Packung der Fettsäureketten und erhöht die Fluidität. Gesättigte Fettsäuren (gerade Ketten) packen sich dicht und reduzieren Fluidität. Cholesterin (Option D) wirkt als Puffer in beide Richtungen, nicht als reiner Fluiditätssteigerer. Lange Ketten (B) erhöhen die Stabilität.",
          hints: [
            "Doppelbindungen erzeugen Knicke in der Fettsäurekette.",
            "Flüssige Pflanzenöle vs. feste Butter – was ist der Unterschied?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was ist die Funktion der Glykokalix?",
          options: [
            "ATP-Synthese an der Membranoberfläche",
            "Zellerkennung, Blutgruppenantigene und Immunschutz",
            "Transport von Ionen in die Zelle",
            "Verbindung der Zellmembran mit dem Zytoskelett",
            "Photosynthese in Pflanzenzellen",
          ],
          correctIndex: 1,
          explanation: "Die Glykokalix besteht aus Kohlenhydratketten auf der äußeren Oberfläche der Zellmembran (gebunden an Glykoproteine und Glykolipide). Sie ermöglicht Zellerkennung (z.B. Immunzellen erkennen körpereigene Zellen), trägt Blutgruppenantigene (ABO-System) und schützt die Zelloberfläche. Das ABO-Blutgruppensystem basiert auf unterschiedlichen Glykolipid-/Glykoproteinstrukturen auf Erythrozyten.",
          hints: [
            "Glykos = Zucker. Die Glykokalix ist eine Zuckerschicht auf der Zelloberfläche.",
            "Blutgruppen A, B, AB, 0 – worauf beruht dieser Unterschied?",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },

    // ─── UK4 ────────────────────────────────────────────────────────────────
    {
      id: 'bio-1-05',
      title: 'Der Zellkern — Steuerzentrale der Zelle',
      content: `## Einleitung

Der Zellkern (Nucleus) ist das größte Organell eukaryotischer Zellen und die "Steuerzentrale": Hier ist das genetische Programm gespeichert, hier wird es abgelesen (Transkription) und reguliert. Das strikte Trennen von Transkription (Kern) und Translation (Zytoplasma) ist ein fundamentales Prinzip eukaryotischer Zellen – und unterscheidet sie von Prokaryoten.

## Struktur des Zellkerns

**Kernhülle (Kernmembran):** Der Zellkern ist von einer Doppelmembran umgeben (äußere + innere Kernmembran). Die äußere Kernmembran ist mit dem rauen ER verbunden. Im Innern befindet sich das Kernlumen (Perinukleärraum), das mit dem ER-Lumen verbunden ist.

**Kernporen:** Die Kernhülle ist von Kernporenkomplexen (NPC, Nuclear Pore Complex) durchbrochen – ca. 2.000–4.000 pro Kern. Kernporen sind große Proteinkomplexe (~125 MDa) mit einem wässrigen Kanal. Sie regulieren den bidirektionalen Transport:
- **Import:** Proteine (Transkriptionsfaktoren, Histone, DNA-Polymerase) werden mit Kernlokalisierungssignal (NLS) aktiv transportiert
- **Export:** mRNA (als mRNP-Komplex), ribosomale Untereinheiten

**Kernlamina:** Unterhalb der inneren Kernmembran liegt ein Netz aus Lamin-Intermediärfilamenten (Lamine A, B, C). Die Kernlamina gibt dem Kern mechanische Stabilität und verankert Chromatin.

## Chromatin und Chromosomen

Die DNA im Zellkern liegt nicht nackt vor, sondern ist an **Histonproteine** gepackt. Die grundlegende Verpackungseinheit ist das **Nukleosom**: ~147 bp DNA sind um einen Histon-Oktamer (H2A, H2B, H3, H4, je 2 Kopien) gewickelt. Nukleosomen sitzen wie Perlen auf einer Schnur.

**Kompaktierungsgrade:**
- Euchromatin: weniger kompakt, transkriptionell aktiv (hell im Mikroskop)
- Heterochromatin: stark kompakt, transkriptionell inaktiv (dunkel im Mikroskop). Barr-Körper = inaktives X-Chromosom (Heterochromatin)

**Chromosome vs. Chromatin:** Chromatin ist der Begriff für DNA + Histone im Interphase-Kern. Chromosomen entstehen durch maximale Kondensation des Chromatins in der Mitose (dort sichtbar und zählbar).

## Der Nucleolus

Der **Nucleolus** (Kernkörperchen) ist eine membranlose Substruktur im Kern, die durch spezielle chromosomale Regionen (nukleolare Organisationsregionen, NOR) organisiert wird. Im Nucleolus findet statt:
- Synthese der ribosomalen RNA (rRNA: 28S, 18S, 5.8S)
- Assemblierung der Ribosomenuntereinheiten (rRNA + ribosomale Proteine)
- Die fertigen Untereinheiten werden durch Kernporen ins Zytoplasma exportiert

Zellen mit hoher Proteinsyntheserate (z.B. Tumorzellen, aktive Drüsenzellen) haben auffällig vergrößerte Nucleoli.

## Transkription im Kern

Im Zellkern findet die **Transkription** statt: RNA-Polymerase II liest die DNA-Matrize und synthetisiert prä-mRNA. Diese wird prozessiert (5'-Capping, Spleißen der Introns, 3'-Polyadenylierung) bevor sie als reife mRNA durch Kernporen ins Zytoplasma exportiert wird.

Die räumliche Trennung von Transkription und Translation ermöglicht bei Eukaryoten ausgedehnte mRNA-Prozessierung – ein Vorteil, der die Genregulation erheblich erweitert.`,
      lernziele: [
        "Die Struktur des Zellkerns (Kernhülle, Kernporen, Kernlamina, Nucleolus) beschreiben",
        "Chromatin-Kompaktierung und den Unterschied zwischen Euchromatin und Heterochromatin erklären",
        "Die Funktion des Nucleolus und den Transport durch Kernporen erläutern",
      ],
      sections: [
        {
          heading: "Kernhülle und Kernporen: selektive Barriere",
          text: "Die doppelte Kernmembran trennt das Nukleoplasma vom Zytoplasma. Kernporenkomplexe (NPCs) sind die einzigen Kommunikationskanäle zwischen diesen Kompartimenten. Ein NPC besteht aus ~30 verschiedenen Nucleoporinen (Nups) und bildet einen selektiven wässrigen Kanal. Kleine Moleküle (<40 kDa) können frei diffundieren, größere Moleküle (Proteine, RNA) müssen aktiv transportiert werden. Proteine benötigen ein Kernlokalisierungssignal (NLS) – eine Sequenz aus basischen Aminosäuren (Lys, Arg), die von Importinen erkannt wird. RNA verlässt den Kern als Ribonukleoprotein-Komplex (mRNP). Diese Regulierung des nukleären Transports ist entscheidend für die Genregulation.",
          merksatz: "Kernporen sind der einzige Weg in den und aus dem Zellkern – alle größeren Moleküle brauchen ein Ticket (NLS oder Exportsequenz).",
        },
        {
          heading: "Chromatin: DNA verpackt und reguliert",
          text: "Das menschliche Genom (3,2 Milliarden Basenpaare pro haploidem Satz) würde ausgestreckt ca. 2 Meter messen. Es muss in einen ~6 µm großen Zellkern passen – eine Kompaktierung um den Faktor ~10.000. Dies gelingt durch hierarchische Verpackung: Nukleosom (DNA um Histon-Oktamer, ~10 nm) → 30 nm-Chromatin-Faser → Schleifen (loop domains) → höhergeordnete Strukturen. Die Histon-Modifikation (Azetylierung, Methylierung, Phosphorylierung) reguliert die Chromatinkompaktierung und damit die Zugänglichkeit für Transkriptionsfaktoren (Epigenetik). Azetylierte Histone → offenes Euchromatin → aktive Transkription.",
        },
        {
          heading: "Nucleolus und Ribosomensynthese",
          text: "Der Nucleolus ist keine membranumschlossene Organelle, sondern eine membranlose Kondensatstruktur (Phase-Separation-Prinzip). Er entsteht um nukleolare Organisationsregionen (NOR) – Chromosomenregionen mit rRNA-Genen (Chromosomen 13, 14, 15, 21, 22 beim Menschen). Die Produktion ribosomaler RNA und die Assemblierung ribosomaler Untereinheiten ist eine der größten zellulären Syntheseleistungen: Ruhende Zellen haben kleine, aktive Zellen (Tumorzellen, Hepatozyten) sehr große Nucleoli. Ein prominenter Nucleolus in der Pathologie weist auf hohe Proliferationsaktivität hin.",
          merksatz: "Großer Nucleolus = viel Proteinsynthese (= viele Ribosomen werden hergestellt) – ein Zeichen aktiver oder proliferierender Zellen.",
        },
      ],
      merksätze: [
        "Zellkern = Ort der Transkription; Zytoplasma = Ort der Translation. Diese räumliche Trennung ist ein Grundmerkmal der Eukaryoten.",
        "Nukleosom = 147 bp DNA um Histon-Oktamer (H2A, H2B, H3, H4, je 2×). Grundeinheit der Chromatinverpackung.",
        "Nucleolus = Fabrik für ribosomale RNA und Ribosomenuntereinheiten; ein großer Nucleolus zeigt hohe Proteinsynthese-Aktivität an.",
      ],
      klinischerBezug: "Progeria (Hutchinson-Gilford-Syndrom) wird durch eine Mutation im Lamin-A-Gen verursacht. Das veränderte Protein (Progerin) destabilisiert die Kernlamina, der Kern wird verformt und die Zelle altert rapide. Kinder mit Progeria altern etwa zehnmal schneller als normal. Dies zeigt die essentielle Rolle der Kernlamina für Zellstruktur und -funktion.",
      altfrage: {
        question: "Warum führt ein defekter Kernporenkomplex zur Katastrophe für die Zelle?",
        answer: "Der Kernporenkomplex (NPC) reguliert alle Transportprozesse zwischen Kern und Zytoplasma. Ein defekter NPC würde den Import von Transkriptionsfaktoren, Histonen und DNA-Reparaturproteinen in den Kern blockieren und gleichzeitig den Export von mRNA und Ribosomenuntereinheiten verhindern. Die Folgen wären: keine Genregulation, keine mRNA-Ausleitung, keine Proteinsynthese – die Zelle würde schnell sterben. Viren (z.B. HIV) nutzen den NPC aktiv, um ihr Erbgut in den Kern einzuschleusen.",
      },
      selfTest: [
        {
          question: "Welche Aussage zur Kernhülle ist korrekt?",
          options: [
            "Die Kernhülle besteht aus einer einzelnen Membranschicht",
            "Die äußere Kernmembran ist mit dem rauen ER verbunden",
            "Kernporen lassen alle Moleküle ohne Unterschied passieren",
            "Die Kernlamina besteht aus Aktin-Filamenten",
            "Die Kernhülle fehlt bei Eukaryoten",
          ],
          correctIndex: 1,
          explanation: "Die äußere Kernmembran ist direkt mit dem rauen ER verbunden (und damit mit dem glatten ER und dem Perinukleärraum mit dem ER-Lumen). Die Kernhülle besteht aus zwei Membranen (A falsch). Kernporen sind selektiv – kleine Moleküle diffundieren frei, große Moleküle werden aktiv und selektiv transportiert (C falsch). Die Kernlamina besteht aus Lamin-Intermediärfilamenten, nicht aus Aktin (D falsch). Eukaryoten haben eine Kernhülle (E falsch).",
          hints: [
            "Die äußere Kernmembran gehört zum selben Membransystem wie das ER.",
            "Kernporen sind selektive Tore – nicht offen für alles.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was ist ein Nukleosom?",
          options: [
            "Der gesamte DNA-Strang ohne Proteine",
            "Eine DNA-Abschnitt um einen Histon-Oktamer gewickelt",
            "Ein Ribonukleinsäure-Komplex im Nucleolus",
            "Eine Untereinheit des Kernporenkomplexes",
            "Ein Chromosom in der Metaphase",
          ],
          correctIndex: 1,
          explanation: "Das Nukleosom ist die Grundeinheit der Chromatinverpackung: ~147 Basenpaare DNA sind um einen Oktamer aus je 2 Kopien der Histone H2A, H2B, H3 und H4 gewickelt. Nukleosomen sind wie Perlen auf einer Schnur aufgereiht (beverbindende DNA = Linker-DNA, assoziiert mit Histon H1). Die hierarchische Verdichtung von Nukleosomen ermöglicht die extreme Kompaktierung des Genoms in den Zellkern.",
          hints: [
            "Nukleosom = DNA-Perle auf der Histon-Schnur.",
            "Vier verschiedene Histone, jeweils doppelt = Oktamer.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Funktion hat der Nucleolus?",
          options: [
            "Speicherung der gesamten zellulären DNA",
            "Synthese ribosomaler RNA und Assemblierung von Ribosomenuntereinheiten",
            "Regulation des Zellzyklus durch Cycline",
            "Transport von mRNA ins Zytoplasma",
            "Synthese von Membranproteinen",
          ],
          correctIndex: 1,
          explanation: "Der Nucleolus ist der Ort der rRNA-Synthese (28S, 18S, 5.8S rRNA) und der Assemblierung ribosomaler Untereinheiten (rRNA + ribosomale Proteine). Die fertigen Untereinheiten (40S und 60S) werden durch Kernporen ins Zytoplasma exportiert und dort zu funktionsfähigen 80S-Ribosomen zusammengesetzt. Der Nucleolus ist nicht membranumschlossen, sondern eine durch Phase-Separation organisierte Kondensatstruktur.",
          hints: [
            "Nucleolus = Fabrik für Ribosomen.",
            "Was enthält ein Ribosom außer Proteinen?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was ist Heterochromatin?",
          options: [
            "Transkriptionell aktives, wenig verdichtetes Chromatin",
            "DNA ohne Histone",
            "Stark verdichtetes, transkriptionell inaktives Chromatin",
            "Chromatin nur in Mitosezellen",
            "Chromatin mit besonders vielen Genen",
          ],
          correctIndex: 2,
          explanation: "Heterochromatin ist stark kompaktiertes Chromatin, das transkriptionell inaktiv ist. Es erscheint im Mikroskop als dunkle Bereiche. Das Barr-Körperchen (inaktives X-Chromosom bei XX-Individuen) ist ein klassisches Beispiel für Heterochromatin. Euchromatin (Option A) ist dagegen weniger kompakt und transkriptionell aktiv. Die Kompaktierung wird durch Histon-Modifikationen reguliert (z.B. deacetylierte Histone → Heterochromatin).",
          hints: [
            "Hetero = anders, dichter. Eu = gut, zugänglich.",
            "Barr-Körperchen in weiblichen Zellen – was ist das?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Warum benötigen Proteine ein Kernlokalisierungssignal (NLS)?",
          options: [
            "Weil der Kern keine Membran hat",
            "Weil der Kern unter Überdruck steht",
            "Weil große Proteine nicht frei durch Kernporen diffundieren können",
            "Weil alle Proteine im Kern synthetisiert werden",
            "Weil NLS Proteine vor Abbau schützt",
          ],
          correctIndex: 2,
          explanation: "Kernporen ermöglichen die freie Diffusion kleiner Moleküle (<40 kDa), aber große Proteine können den wässrigen Kanal nicht ohne Hilfe passieren. Das Kernlokalisierungssignal (NLS) ist eine Erkennungssequenz aus basischen Aminosäuren (Lysine, Arginine), die von zytoplasmatischen Importinen erkannt wird. Der Importin-Cargo-Komplex wird dann aktiv durch den NPC transportiert – ein energieabhängiger Prozess, der durch den RanGAP/RanGEF-Zyklus (GTP-Hydrolyse) angetrieben wird.",
          hints: [
            "Stell dir den Kernporen-Komplex wie eine Sicherheitsschleuse vor.",
            "Proteine brauchen ein 'Ticket' (NLS) für den Einlass in den Kern.",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },

    // ─── UK5 ────────────────────────────────────────────────────────────────
    {
      id: 'bio-1-06',
      title: 'Mitochondrien — Energiefabriken und Endosymbionten',
      content: `## Einleitung

Mitochondrien sind die Kraftwerke der Zelle – hier wird chemische Energie aus Nährstoffen in ATP umgewandelt. Ein Mensch produziert täglich sein eigenes Körpergewicht an ATP. Mitochondrien spielen zudem zentrale Rollen bei Apoptose, Calciumhomöostase und Thermogenese.

## Struktur der Mitochondrien

**Äußere Mitochondrienmembran (OMM):** Enthält Porine (VDAC), relativ durchlässig für Moleküle <5 kDa.

**Innere Mitochondrienmembran (IMM):** Stark gefaltet zu **Cristae**, undurchlässig für die meisten Moleküle. Enthält Atmungskettenkomplexe I–IV und ATP-Synthase (Komplex V).

**Mitochondrienmatrix:** Enthält Citratzyklus-Enzyme, zirkuläre mtDNA, 70S-Ribosomen.

**Intermembranraum (IMS):** Beherbergt Cytochrom c (Apoptose-Signal).

## Energiegewinnung

**Schritt 1 – Pyruvat-Dehydrogenase:** Pyruvat → Acetyl-CoA + CO₂ + NADH

**Schritt 2 – Citratzyklus:** Acetyl-CoA → 3 NADH + 1 FADH₂ + 1 GTP + 2 CO₂ pro Runde

**Schritt 3 – Atmungskette:** NADH/FADH₂ geben Elektronen ab → fließen auf O₂ → Protonengradient entsteht

**Schritt 4 – ATP-Synthase:** Protonengradient treibt F₀F₁-ATPase an → ~30–32 ATP pro Glucose

## Endosymbiontentheorie

Mitochondrien entstammen einem α-Proteobakterium (Lynn Margulis, 1967). Belege: zirkuläre mtDNA, 70S-Ribosomen, Doppelmembran, Teilung durch Fission. mtDNA wird maternal vererbt.

## Mitochondrien und Apoptose

MOMP (äußere Membran-Permeabilisierung durch Bax/Bak) → Cytochrom c ins Zytoplasma → Apoptosom → Caspase-9 → Caspase-3 → Zelltod.`,
      lernziele: [
        "Den Aufbau der Mitochondrien mit Doppelmembran, Cristae und Matrix beschreiben",
        "Die vier Schritte der Energiegewinnung von Pyruvat bis ATP erläutern",
        "Die Endosymbiontentheorie und maternale Vererbung der mtDNA erklären",
      ],
      sections: [
        {
          heading: "Atmungskette: Elektronenfluss und Protonengradient",
          text: "Die vier Proteinkomplexe der Atmungskette sitzen in der inneren Mitochondrienmembran. NADH gibt Elektronen an Komplex I (NADH-Dehydrogenase) ab, FADH₂ an Komplex II. Elektronen fließen via Ubichinon (CoQ) zu Komplex III (Cytochrom-bc₁-Komplex) und via Cytochrom c zu Komplex IV (Cytochrom-c-Oxidase), die O₂ zu H₂O reduziert. Komplexe I, III und IV pumpen dabei Protonen vom Matrix in den Intermembranraum. Der Protonengradient (protonenmotorische Kraft = pH-Gradient + elektrisches Potential) treibt die ATP-Synthase an. Cyanid blockiert Komplex IV: kein O₂-Verbrauch, Atmungskette kollabiert, Zelltod.",
          merksatz: "Elektronenfluss: NADH → Komplex I → CoQ → Komplex III → Cytochrom c → Komplex IV → O₂. Protonenpumpe → ATP-Synthase.",
        },
        {
          heading: "Citratzyklus: Bilanz und Bedeutung",
          text: "Der Citratzyklus findet in der Mitochondrienmatrix statt. Pro Acetyl-CoA (2 Kohlenstoffatome): 3 NADH, 1 FADH₂, 1 GTP und 2 CO₂. Pro Glucose (2 Pyruvat → 2 Acetyl-CoA): 6 NADH, 2 FADH₂, 2 GTP im Citratzyklus + 2 NADH aus Pyruvat-Dehydrogenase. Die Reduktionsäquivalente liefern Elektronen für die Atmungskette. Der Zyklus liefert auch Biosynthese-Vorläufer: Oxalacetat → Aspartat, Succinyl-CoA → Häm-Synthese, α-Ketoglutarat → Glutamat.",
        },
        {
          heading: "mtDNA und maternale Vererbung",
          text: "Die humane mtDNA ist zirkulär und 16.569 bp groß. Sie kodiert 13 Atmungskettenproteine, 22 tRNAs und 2 rRNAs. Die restlichen ~1.500 mitochondrialen Proteine werden von nukleärer DNA kodiert und in die Mitochondrien importiert. Spermien-Mitochondrien werden nach der Befruchtung ubiquitiniert und abgebaut – die Zygote erhält Mitochondrien praktisch ausschließlich von der Mutter. Mitochondriale Erkrankungen (MELAS, MERRF, Leber-Optikusatrophie) folgen matrilinearer Vererbung. Die Endosymbiontentheorie erklärt 70S-Ribosomen, zirkuläre DNA und Doppelmembran als Erbschaft eines α-Proteobakterien-Vorläufers.",
          merksatz: "Maternale Vererbung: Alle Mitochondrien kommen von der Mutter. Mitochondriale Erkrankungen folgen der mütterlichen Linie.",
        },
      ],
      merksätze: [
        "Cristae = Faltungen der IMM: maximale Oberfläche für Atmungskette und ATP-Synthase.",
        "Pro Glucose ~30–32 ATP gesamt: 2 (Glykolyse) + ~28–30 (Citratzyklus + Atmungskette).",
        "Maternale Vererbung der mtDNA: Spermien-Mitochondrien werden nach Befruchtung abgebaut.",
      ],
      klinischerBezug: "MELAS-Syndrom (mitochondriale Enzephalomyopathie) entsteht durch mtDNA-Punkt-Mutationen und folgt matrilinearer Vererbung. Cyanidvergiftung blockiert Komplex IV – kein O₂-Verbrauch mehr, rasch letaler Energiemangel. Klinisch charakteristisch: kirschrote Hautfarbe durch nicht-genutztes Oxyhämoglobin.",
      altfrage: {
        question: "Warum vergrößern Cristae die ATP-Synthesekapazität?",
        answer: "Cristae sind Faltungen der inneren Mitochondrienmembran. Da Atmungskettenkomplexe I–IV und ATP-Synthase in dieser Membran verankert sind, erhöht eine größere Membranoberfläche direkt die Anzahl der Komplexe pro Mitochondrium und damit die ATP-Produktionsrate. Zellen mit hohem Energiebedarf (Herzmuskel, Skelettmuskel) haben besonders ausgeprägte Cristae.",
      },
      selfTest: [
        {
          question: "Wo findet der Citratzyklus statt?",
          options: [
            "Im Zytosol",
            "Im Intermembranraum",
            "In der Mitochondrienmatrix",
            "An der äußeren Mitochondrienmembran",
            "Im Zellkern",
          ],
          correctIndex: 2,
          explanation: "Der Citratzyklus findet in der Mitochondrienmatrix statt. Die Glykolyse läuft im Zytosol, die Atmungskette an der inneren Mitochondrienmembran. In der Matrix befinden sich auch mtDNA und mitochondriale Ribosomen.",
          hints: [
            "Matrix = innerster Raum des Mitochondriums.",
            "Wo liegt die mtDNA? Im selben Kompartiment.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welches Molekül ist der finale Elektronenakzeptor der Atmungskette?",
          options: [
            "CO₂",
            "NADH",
            "ATP",
            "Molekularer Sauerstoff (O₂)",
            "Glucose",
          ],
          correctIndex: 3,
          explanation: "O₂ ist der finale Elektronenakzeptor. Komplex IV überträgt 4 Elektronen auf O₂ → 2H₂O. Ohne O₂ stoppt die Atmungskette. Dies erklärt die tödliche Wirkung von Sauerstoffmangel und Cyanid-Vergiftung.",
          hints: [
            "Am Ende der Kette fließen Elektronen auf ein finales Molekül.",
            "Warum brauchen wir O₂ zum Leben?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was treibt die ATP-Synthase an?",
          options: [
            "Direkte NADH-Oxidation",
            "Protonengradient über die innere Mitochondrienmembran",
            "GTP-Hydrolyse",
            "Glucoseabbau im Citratzyklus",
            "Kondensation von ADP und Pyruvat",
          ],
          correctIndex: 1,
          explanation: "Der Protonengradient (protonenmotorische Kraft) treibt die F₀F₁-ATP-Synthase an. Protonen fließen durch F₀ zurück in die Matrix → Rotation des F₀-Rings → F₁ kondensiert ADP + Pi → ATP. Dieses Prinzip der Chemiosmose wurde von Peter Mitchell formuliert (Nobelpreis 1978).",
          hints: [
            "Protonengradient = gespeicherte Energie, die durch die Synthase abfließt.",
            "F₀-Kanal als molekulare Turbine.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage zur maternalen Vererbung der mtDNA ist korrekt?",
          options: [
            "mtDNA wird von beiden Eltern zu gleichen Teilen vererbt",
            "mtDNA wird nur vom Vater vererbt",
            "mtDNA wird nur von der Mutter vererbt, da Spermien-Mitochondrien abgebaut werden",
            "mtDNA liegt im Zellkern und wird biparental vererbt",
            "mtDNA ist identisch mit nukleärer DNA",
          ],
          correctIndex: 2,
          explanation: "mtDNA wird ausschließlich maternal vererbt. Nach der Befruchtung werden Spermien-Mitochondrien durch Ubiquitinierung und Proteasom-Abbau eliminiert. Alle Mitochondrien der Zygote stammen aus der Eizelle. Dies erklärt das matrilineare Vererbungsmuster mitochondrialer Erkrankungen.",
          hints: [
            "Welche Keimzelle liefert das Zytoplasma der Zygote?",
            "Spermien-Mitochondrien werden post-Befruchtung abgebaut.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welchen Atmungsketten-Komplex hemmt Cyanid?",
          options: [
            "Komplex I",
            "Komplex II",
            "Komplex III",
            "Komplex IV (Cytochrom-c-Oxidase)",
            "Komplex V (ATP-Synthase)",
          ],
          correctIndex: 3,
          explanation: "Cyanid (CN⁻) bindet an das Eisen im Häm-a₃-Zentrum von Komplex IV und blockiert die O₂-Reduktion. Ohne O₂-Verbrauch baut sich kein Protonengradient auf, keine ATP-Synthese → akuter Zelltod. Klinisches Zeichen: kirschrote Haut durch nicht-genutztes Oxyhämoglobin.",
          hints: [
            "Cyanid verhindert O₂-Nutzung – welcher Komplex arbeitet mit O₂?",
            "Finaler Schritt der Atmungskette = Elektronenübertragung auf O₂.",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },

    // ─── UK6 ────────────────────────────────────────────────────────────────
    {
      id: 'bio-1-08',
      title: 'ER, Golgi-Apparat und Plastiden — Der sekretorische Weg',
      content: `## Einleitung

Der **sekretorische Weg** ist die intrazelluläre Route für Proteine, die für Export, Plasmamembran oder Lysosomen bestimmt sind: Raues ER → Golgi-Apparat → Vesikel → Ziel. Dieses System ist fundamental für Hormon- und Antikörpersekretion, Membranproteinbiosynthese und Lysosomenfüllung.

## Raues ER (RER)

Das RER ist mit Ribosomen besetzt. Proteine mit N-terminalem **Signalpeptid** werden co-translational ins ER-Lumen oder in die ER-Membran eingebaut (via SRP-Erkennung und Translokon Sec61).

**Im RER-Lumen:**
- Proteinfaltung (Chaperone: BiP/GRP78)
- N-Glykosylierung (Zuckeranlagerung an Asparagin, co-translational)
- Qualitätskontrolle (ERAD: fehlfaltete Proteine → Proteasom)
- Disulfidbrückenbildung (PDI)

## Glattes ER (SER)

Keine Ribosomen. Funktionen: Lipid- und Steroidhormonsynthese (Cortisol in Nebenniere, Testosteron in Leydig-Zellen), IP₃-sensitiver Ca²⁺-Speicher, Entgiftung durch Cytochrom P450 (Leber-Phase-I-Metabolismus).

## Golgi-Apparat

Gestapelte Zisternen: **cis** (ER-nah) → medial → **trans-Golgi-Netz (TGN)**.

**Funktionen:**
- O-Glykosylierung, Sulfatierung, Phosphorylierung
- Pro-Hormon-Prozessierung (Pro-Insulin → Insulin)
- Sortierung: Mannose-6-Phosphat-Signal → Lysosomen; kein Signal → Exozytose (default)

## Plastiden (Pflanzenzellen)

Endosymbiotischen Ursprungs (Cyanobakterien), eigene zirkuläre DNA, 70S-Ribosomen.

**Chloroplasten:** Lichtreaktionen in Thylakoiden (→ ATP, NADPH), Calvin-Zyklus im Stroma (CO₂ + RuBisCO → Glucose).

**Leukoplasten:** Farblos, Speicherung (Amyloplasten: Stärke; Elaioplasten: Fette).

**Chromoplasten:** Carotinoide (Orange/Rot in Früchten, aus Chloroplasten entstehend).`,
      lernziele: [
        "Den sekretorischen Weg von RER über Golgi zur Zielstruktur beschreiben",
        "Raues und glattes ER in Struktur und Funktion unterscheiden",
        "Plastidentypen und ihre Funktionen benennen",
      ],
      sections: [
        {
          heading: "Signalpeptid und co-translationale Translokation",
          text: "Sekretorische und membranständige Proteine tragen ein N-terminales Signalpeptid (hydrophobe Sequenz ~15–30 AS). Das Signal Recognition Particle (SRP) bindet es sobald es aus dem Ribosom austritt, hält Translation an und dirigiert den Ribosom-mRNA-Komplex an den Translokon (Sec61-Komplex) in der RER-Membran. Die Translation wird dann co-translational fortgesetzt: Lösliche Proteine gelangen ins ER-Lumen, Transmembranproteine werden in der Membran verankert. Das Signalpeptid wird post-translational von einer Signalpeptidase abgespalten. Im Lumen falten Chaperone (BiP) das Protein; N-Glykosylierung erfolgt co-translational durch die Oligosaccharyltransferase.",
          merksatz: "Signalpeptid → SRP erkennt → Ribosom andockt an Sec61-Translokon → co-translationale Translokation ins RER-Lumen.",
        },
        {
          heading: "Golgi als Sortier- und Modifikationszentrum",
          text: "Proteine verlassen das RER in COPII-umhüllten Vesikeln und gelangen zum cis-Golgi. Im Golgi werden N-Glykane modifiziert, O-Glykane neu angefügt, Pro-Hormone gespalten (Pro-Insulin → Insulin + C-Peptid in Beta-Zell-Granula). Das trans-Golgi-Netz (TGN) ist die finale Sortierstation: Mannose-6-Phosphat-Rezeptoren erkennen lysosomale Enzyme und leiten sie in Clathrin-umhüllte Vesikel zu Lysosomen. Proteine ohne Sortiersignal verlassen die Zelle konstitutiv (default secretory pathway). Regulierte Sekretion (Hormongranula, Neurotransmitter-Vesikel) benötigt ein Stimulussignal für Exozytose.",
          merksatz: "TGN-Sortierung: Mannose-6-P → Lysosom; kein Signal → konstitutive Exozytose (default).",
        },
        {
          heading: "Chloroplasten: Struktur und Photosynthese",
          text: "Chloroplasten besitzen eine äußere und innere Membran (Hülle) sowie ein internes Thylakoidsystem. Thylakoide sind flache Membransäckchen, die zu Grana gestapelt sind und durch Stromathylakoide verbunden werden. In den Thylakoidmembranen sitzen: Photosystem II (P680), Cytochrom-b₆f-Komplex, Photosystem I (P700) und ATP-Synthase (Lichtreaktionen → ATP + NADPH + O₂). Im Stroma laufen die Dunkelreaktionen: CO₂ wird durch RuBisCO an Ribulose-1,5-bisphosphat fixiert → 3-Phosphoglycerat → G3P → Glucose. Chloroplasten teilen sich durch Fission und haben eigene zirkuläre DNA (endosymbiotischer Ursprung von Cyanobakterien).",
          merksatz: "Chloroplast: Lichtreaktionen in Thylakoiden (ATP + NADPH + O₂), Calvin-Zyklus im Stroma (CO₂ → Glucose via RuBisCO).",
        },
      ],
      merksätze: [
        "Sekretorischer Weg: Signalpeptid → RER (Faltung, N-Glyko) → Golgi (Modifikation, Sortierung) → Vesikel → Ziel.",
        "TGN-Sortierung: Mannose-6-Phosphat → Lysosom; kein Signal → Exozytose (default pathway).",
        "Chloroplast: Lichtreaktionen Thylakoide (ATP, NADPH), Calvin-Zyklus Stroma (CO₂ → Glucose).",
      ],
      klinischerBezug: "Mukoviszidose (CFTR-Δ508-Mutation): Das fehlgefaltete CFTR-Protein wird im RER durch ERAD abgebaut und erreicht nie die Plasmamembran. Chronischer Alkohol induziert CYP2E1 im SER der Leber (Toleranzentwicklung, aber auch erhöhte Paracetamol-Toxizität durch toxische Metaboliten).",
      altfrage: {
        question: "Was ist das Mannose-6-Phosphat-Signal?",
        answer: "Mannose-6-Phosphat (M6P) ist eine Markierung, die im Golgi-Apparat an lysosomale Hydrolasen angehängt wird. M6P-Rezeptoren im TGN erkennen dieses Signal und dirigieren die Enzyme in clathrinumhüllte Vesikel zu Lysosomen. Fehlt die M6P-Markierung (z.B. bei Mukolipidose II), werden lysosomale Enzyme fälschlich sezerniert statt sortiert.",
      },
      selfTest: [
        {
          question: "In welcher Reihenfolge durchlaufen sekretierte Proteine die Kompartimente?",
          options: [
            "Golgi → RER → Exozytose",
            "Zytoplasma → Lysosom → Golgi → Exozytose",
            "RER → Golgi (cis→trans) → Sekretionsvesikel → Exozytose",
            "Zellkern → Golgi → RER → Exozytose",
            "Mitochondrium → RER → Golgi → Lysosom",
          ],
          correctIndex: 2,
          explanation: "Der sekretorische Weg: Synthese im RER → COPII-Vesikel → cis-Golgi → mediales Golgi → TGN → Sekretionsvesikel → Exozytose. Alle anderen Optionen haben eine falsche Reihenfolge.",
          hints: [
            "Proteine mit Signalpeptid werden zuerst im RER synthetisiert.",
            "Nach RER kommt immer zuerst der Golgi.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was erkennt das Signal Recognition Particle (SRP)?",
          options: [
            "O-Glykane im Golgi",
            "Das N-terminale Signalpeptid eines nasszenten Proteins",
            "Mannose-6-Phosphat-Reste",
            "Die Poly-Ubiquitin-Kette",
            "Die Kernlokalisierungssequenz (NLS)",
          ],
          correctIndex: 1,
          explanation: "SRP erkennt das hydrophobe N-terminale Signalpeptid, das aus dem Ribosom austritt. SRP hält die Translation an und dirigiert den Ribosom-Komplex zum Sec61-Translokon im RER. Ohne SRP würden sekretorische Proteine frei im Zytosol synthetisiert und nicht ins ER-Lumen transportiert.",
          hints: [
            "SRP = Signal Recognition Particle – was ist das 'Signal'?",
            "SRP wirkt sehr früh bei der Translation – was erscheint zuerst?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Modifikation findet ausschließlich co-translational im RER statt?",
          options: [
            "O-Glykosylierung",
            "N-Glykosylierung (Kernstruktur, co-translational durch OST)",
            "Sulfatierung",
            "Mannose-6-Phosphat-Markierung",
            "Proteolytische Spaltung von Pro-Hormonen",
          ],
          correctIndex: 1,
          explanation: "Die N-Glykosylierung (Anlagerung eines vorgefertigten Glykans an Asparagin-Reste durch Oligosaccharyltransferase, OST) erfolgt co-translational direkt im RER. O-Glykosylierung, Sulfatierung und M6P-Markierung erfolgen im Golgi. Proteolytische Spaltung von Pro-Hormonen findet in Sekretionsgranula oder im TGN statt.",
          hints: [
            "N-Glykosylierung = an Asparagin (N), co-translational.",
            "O-Glykosylierung = an Serin/Threonin, im Golgi.",
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Welcher Plastidentyp betreibt Photosynthese?",
          options: [
            "Leukoplast",
            "Chromoplast",
            "Chloroplast",
            "Amyloplast",
            "Elaioplast",
          ],
          correctIndex: 2,
          explanation: "Chloroplasten führen die Photosynthese durch: Lichtreaktionen (Thylakoide → ATP, NADPH, O₂) und Calvin-Zyklus (Stroma → CO₂-Fixierung → Glucose). Leukoplasten und Amyloplasten sind farblose Speicher-Plastiden. Chromoplasten enthalten Carotinoide für Farbe, betreiben keine Photosynthese.",
          hints: [
            "Chlorophyll steckt im Namen: Chloro = grün.",
            "Grüne Blätter betreiben Photosynthese – welche Plastiden sind grün?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was ist die Funktion von Cytochrom P450 im SER der Leber?",
          options: [
            "Synthese von rRNA",
            "Elektronentransport in der Atmungskette",
            "Oxidation hydrophober Substanzen (Phase-I-Biotransformation)",
            "Synthese von ATP",
            "Proteolytischer Abbau von Proteinen",
          ],
          correctIndex: 2,
          explanation: "CYP-Enzyme (Cytochrom P450) im SER der Hepatozyten katalysieren Phase-I-Biotransformation: Oxidation hydrophober Substanzen (Medikamente, Toxine) → wasserlöslichere Produkte für renale Ausscheidung. CYP3A4 metabolisiert ~50% aller Arzneimittel. Induktoren (Rifampicin) beschleunigen den Abbau, Inhibitoren (Grapefruitsaft) verlangsamen ihn – klinisch relevante Wechselwirkungen.",
          hints: [
            "Leber = Entgiftungsorgan. CYP macht Fremdstoffe wasserlöslicher.",
            "Phase-I = Oxidation. Wozu macht man Fremdstoffe wasserlöslicher?",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },

    // ─── UK7 ────────────────────────────────────────────────────────────────
    {
      id: 'bio-1-10',
      title: 'Lysosomen, Peroxisomen und zelluläre Abbausysteme',
      content: `## Einleitung

Zelluläre Abbausysteme halten die Proteinhomöostase aufrecht und schützen die Zelle vor Akkumulation beschädigter Komponenten. **Lysosomen** verdauen extern aufgenommene und zellinterne Materialien. **Peroxisomen** entgiften H₂O₂ und bauen sehr lange Fettsäuren ab. **Autophagie** recycelt zelleigene Organellen bei Nährstoffmangel.

## Lysosomen

Membranumschlossene Organellen mit **pH ~4,5–5,0** (durch V-Typ-H⁺-ATPase). ~50 Säurehydrolasen (Cathepsine, Lipasen, Nukleasen, Glykosidasen).

**Transportwege:**
- Rezeptor-vermittelte Endozytose → frühe → späte Endosomen → Lysosomen
- Phagozytose → Phagosom + Lysosom = Phagolysosm
- Autophagie → Phagophor → Autophagosom (Doppelmembranvesikel) → Autolysosom

**Sicherheitsmechanismus:** Enzyme sind bei neutralem Zytosol-pH (7,2) inaktiv. Lysosomenmembran durch LAMP1/LAMP2 (stark glykosilierte Proteine) geschützt.

## Endosomen

- Frühe Endosomen (pH ~6,5): Ligand-Rezeptor-Dissoziation
- Späte Endosomen (pH ~5,5): Reifen zu Lysosomen, bilden Multivesikuläre Körper (MVB)
- Recycling-Endosomen: Rezeptoren zurück zur Plasmamembran (LDL-Rezeptor-Recycling)

## Peroxisomen

Membranumschlossen, **keine Doppelmembran, keine eigene DNA**. Entstehen durch Teilung.

**Funktionen:**
- β-Oxidation sehr langer Fettsäuren (VLCFA, >22 C) – exklusiv in Peroxisomen
- H₂O₂-Entgiftung: 2H₂O₂ → 2H₂O + O₂ (durch Katalase)
- Ether-Phospholipid-Synthese (Plasmalogene für Myelin)

## Autophagie-Regulation

mTOR aktiv (Nährstoffe vorhanden) → ULK1 gehemmt → keine Autophagie.
mTOR inaktiv (Hunger) → ULK1 aktiv → Phagophor-Bildung → Autophagosom → Autolysosom → Recycling.
Rapamycin (mTOR-Inhibitor) → induziert Autophagie.`,
      lernziele: [
        "Lysosomen in Struktur, pH und Funktion beschreiben sowie ihre drei Transportwege erläutern",
        "Peroxisomen von Lysosomen in Struktur und Funktion abgrenzen (kein Doppelmembran, eigene DNA)",
        "Die Autophagie und ihre Regulation durch mTOR erklären",
      ],
      sections: [
        {
          heading: "Lysosomale Funktion und Speicherkrankheiten",
          text: "Der saure pH (~4,5–5) der Lysosomen ist essentiell für die Aktivität der Säurehydrolasen und dient als Sicherheitsmechanismus: Im neutralen Zytosol wären freigesetzte Enzyme inaktiv. Lysosomale Speicherkrankheiten entstehen, wenn ein einzelnes Enzym fehlt oder defekt ist: Das Substrat akkumuliert in Lysosomen, die Organellen werden dysfunktional, und die Zelle stirbt. Beispiele: Morbus Gaucher (Glucocerebrosidase-Mangel → Glucocerebroside in Makrophagen), Tay-Sachs (Hexosaminidase-A-Mangel → GM2-Gangliosid-Akkumulation in Neuronen → frühe Neurodegeneration), Morbus Fabry (α-Galaktosidase-A-Mangel). Enzymersatztherapien sind für einige dieser Erkrankungen verfügbar.",
          merksatz: "Lysosomale Speicherkrankheit = defektes Abbauenzym → Substrat akkumuliert → Zelltod. Sicherheit: neutrale Enzyme außerhalb sind inaktiv.",
        },
        {
          heading: "Peroxisomen: β-Oxidation und H₂O₂-Abbau",
          text: "Peroxisomen sind einmembranige Organellen ohne eigene DNA. Sie oxidieren sehr lange Fettsäuren (VLCFA, >22 Kohlenstoffe) durch β-Oxidation – ein Prozess, den Mitochondrien nicht direkt ausführen können. Die so verkürzten Fettsäuren werden dann in Mitochondrien vollständig oxidiert. Als Nebenprodukt entsteht H₂O₂, das sofort durch Katalase gespalten wird: 2H₂O₂ → 2H₂O + O₂. Der Katalase-Test (Gewebe + H₂O₂ → Gasblasen) nutzt diese Reaktion diagnostisch. Peroxisomen synthetisieren auch Plasmalogene (Ether-Phospholipide, wichtig für Myelinscheiden im ZNS). Defekte Peroxisom-Biogenese → Zellweger-Syndrom.",
        },
        {
          heading: "Autophagie im Krankheitskontext",
          text: "Autophagie ist lebenswichtig für die Proteinhomöostase, besonders in post-mitotischen Zellen (Neuronen, Herzmuskelzellen), die sich nicht durch Teilung erneuern können. Bei Morbus Parkinson akkumuliert α-Synuclein (Lewy-Körper), weil Autophagie und UPS überlastet sind. Bei Morbus Alzheimer akkumulieren Tau-Fibrillen und Amyloid-β. Mitophagie (selektive Autophagie beschädigter Mitochondrien) reguliert die mitochondriale Qualitätskontrolle. PINK1-Parkin-Weg: beschädigte Mitochondrien werden durch PINK1-Kinase markiert → Parkin (E3-Ligase) ubiquitiniert mitochondriale Proteine → Autophagosom-Rekrutierung → Mitophagie.",
          merksatz: "Autophagie: mTOR aktiv (satt) = aus. mTOR inaktiv (Hunger) = ein. Phagophor → Autophagosom (Doppelmembran) → Autolysosom → Recycling.",
        },
      ],
      merksätze: [
        "Lysosomen: pH ~4,5, Säurehydrolasen, 3 Wege: Endozytose / Phagozytose / Autophagie.",
        "Peroxisomen: einmembranig, keine eigene DNA, β-Oxidation VLCFA + Katalase-Entgiftung von H₂O₂.",
        "Autophagie-Regelkreis: mTOR aktiv = Autophagie aus; mTOR inaktiv (Hunger) = Autophagie ein (via ULK1).",
      ],
      klinischerBezug: "Morbus Gaucher (Glucocerebrosidase-Mangel) ist die häufigste lysosomale Speicherkrankheit. Enzymersatztherapie mit Imiglucerase ist möglich. Beim Zellweger-Syndrom (PEX-Mutationen) fehlen Peroxisomen, was zu VLCFA-Akkumulation, Myelinisierungsdefekten und frühem Tod führt.",
      altfrage: {
        question: "Warum sind lysosomale Enzyme bei neutralem pH ungefährlich?",
        answer: "Lysosomale Säurehydrolasen (Cathepsine etc.) haben ihr pH-Optimum bei 4,5–5. Im Zytosol (pH 7,2) sind sie weitgehend inaktiv. Ein Austreten von Enzymen aus dem Lysosom führt daher nicht zur massiven Selbstverdauung, da die Enzyme im neutralen Zytosol kaum aktiv sind. Dieser Sicherheitsmechanismus schützt die Zelle, ermöglicht aber dennoch – bei massiver Lysosom-Ruptur (z.B. durch Silikose) – einen entzündlichen Zelltod.",
      },
      selfTest: [
        {
          question: "Welchen pH-Wert hat das Lysosom-Lumen?",
          options: [
            "pH 7,2 (neutral)",
            "pH 6,0 (leicht sauer)",
            "pH 4,5–5,0 (stark sauer)",
            "pH 8,0 (alkalisch)",
            "pH 1,5 (wie Magensäure)",
          ],
          correctIndex: 2,
          explanation: "Lysosomen haben pH ~4,5–5,0, aufrechterhalten durch eine protonenpumpende V-Typ-H⁺-ATPase. Dieser saure pH ist Voraussetzung für die Aktivität der Säurehydrolasen. Im Zytosol (pH 7,2) wären freigesetzte Enzyme inaktiv – doppelte Sicherheit gegen Selbstverdauung.",
          hints: [
            "Lysosom = 'Säurebeutel' der Zelle.",
            "Wie heißen Enzyme die im Sauren arbeiten? Säurehydrolasen.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was macht Katalase in Peroxisomen?",
          options: [
            "Synthese von ATP aus H₂O₂",
            "Spaltung von H₂O₂ zu H₂O und O₂",
            "Transport von Fettsäuren in Mitochondrien",
            "Regulation von Autophagie",
            "Produktion von H₂O₂",
          ],
          correctIndex: 1,
          explanation: "Katalase: 2H₂O₂ → 2H₂O + O₂. Peroxisomale Oxidationen erzeugen H₂O₂ als Nebenprodukt. Katalase entgiftet es sofort. Der Katalase-Test (Gewebe + H₂O₂ → Gasblasen = O₂) nutzt diese Reaktion zum Nachweis katalasepositiver Bakterien.",
          hints: [
            "H₂O₂ ist zelltoxisch. Katalase neutralisiert es sofort.",
            "Katalase-Test: Blasen entstehen – welches Gas ist das?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was ist Autophagie?",
          options: [
            "Aufnahme externer Partikel durch Phagozytose",
            "Abbau zelleigener Organellen und Proteine durch Lysosomen",
            "Exozytose von Sekretionsvesikeln",
            "Rezeptor-vermittelte Endozytose",
            "Apoptose durch Caspase-Aktivierung",
          ],
          correctIndex: 1,
          explanation: "Autophagie (griech. 'Selbstessen') ist der lysosomale Abbau zelleigener Komponenten: Phagophor umschließt Cargo (Organellen, Proteinaggregate) → Autophagosom (Doppelmembranvesikel) → Fusion mit Lysosom → Autolysosom → enzymatischer Abbau → Recycling der Bausteine. Phagozytose (A) ist Aufnahme externer Partikel, Endozytose (D) Aufnahme von Liganden/Flüssigkeit.",
          hints: [
            "Auto = selbst. Was verdaut die Zelle bei der Autophagie?",
            "Nährstoffmangel aktiviert Autophagie – wozu?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was verursacht das Zellweger-Syndrom?",
          options: [
            "Lysosomaler Glucocerebrosidase-Mangel",
            "Mitochondriale mtDNA-Mutation",
            "Generaliserter Peroxisomen-Biogenesedefekt (PEX-Mutationen)",
            "Kernporenkomplex-Defekt",
            "ER-assoziierter Abbau (ERAD)-Versagen",
          ],
          correctIndex: 2,
          explanation: "Das Zellweger-Syndrom (zerebrohepatorenales Syndrom) entsteht durch Mutationen in PEX-Genen (kodieren Peroxine für Peroxisomen-Biogenese). Ohne funktionsfähige Peroxisomen: VLCFA akkumulieren, Ether-Phospholipide (Plasmalogene für Myelin) fehlen, Gallensäuresynthese gestört → schwere neurologische Defekte, Hepatomegalie, frühzeitiger Tod.",
          hints: [
            "PEX = Peroxin-Gene, für Peroxisomen-Aufbau.",
            "Welche Organelle fehlt beim Zellweger-Syndrom?",
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Welches Molekül hemmt Autophagie bei ausreichend Nährstoffen?",
          options: [
            "p53-Tumorsuppressor",
            "mTOR (mechanistic Target of Rapamycin)",
            "Caspase-3",
            "Beclin-1",
            "ULK1-Kinase",
          ],
          correctIndex: 1,
          explanation: "mTOR ist der zentrale Nährstoffsensor. Aminosäuren und Wachstumsfaktoren aktivieren mTOR. Aktives mTOR phosphoryliert und inaktiviert ULK1 (Autophagie-initiierende Kinase). Nährstoffmangel → mTOR inaktiv → ULK1 aktiv → Phagophor-Bildung → Autophagie. Rapamycin (mTOR-Inhibitor) induziert Autophagie und ist Immunsuppressivum.",
          hints: [
            "mTOR = molekularer Sattheitssensor. Aktiv = satt = kein Abbau nötig.",
            "Was passiert, wenn Zellen hungern?",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },

    // ─── UK8 ────────────────────────────────────────────────────────────────
    {
      id: 'bio-1-12',
      title: 'Ribosomen, Proteasomen und Zentriolen',
      content: `## Einleitung

Ribosomen synthetisieren alle zellulären Proteine. Das Ubiquitin-Proteasom-System (UPS) baut ubiquitinierte Proteine gezielt ab. Zentriolen organisieren den Spindelapparat der Mitose und bilden Basalkörper für Zilien. Diese drei Strukturen sind exemplarisch für die molekulare Präzision der Zelle.

## Ribosomen: Proteinsynthese-Maschinen

Ribosomen sind **Ribonukleoprotein-Komplexe** (keine Membran), bestehend aus rRNA und Proteinen.

**Eukaryotisch (80S):**
- Kleine Untereinheit: 40S (18S-rRNA + ~33 Proteine)
- Große Untereinheit: 60S (28S, 5.8S, 5S rRNA + ~49 Proteine)
- Sites: **A-Site** (neue Aminoacyl-tRNA), **P-Site** (Peptidyl-tRNA, Peptidbindung), **E-Site** (Exit, leere tRNA)

**Prokaryotisch (70S):**
- 30S (16S-rRNA) + 50S (23S, 5S rRNA)
- Ziel zahlreicher Antibiotika (Tetracycline → 30S; Makrolide, Chloramphenicol → 50S)

**Vorkommen:** Freie Ribosomen (zytosolische Proteine), membrangebundene am RER (sekretorischer Weg), Organellen-Ribosomen (70S in Mitochondrien, Chloroplasten).

**Polysomen:** Mehrere Ribosomen an einer mRNA = erhöhte Translationseffizienz.

## Ubiquitin-Proteasom-System (UPS)

**Drei-Stufen-Ubiquitinierung:**
1. **E1** (Ubiquitin-aktivierendes Enzym): Ubiquitin + ATP → Ubiquitin~E1
2. **E2** (Ubiquitin-konjugierendes Enzym): Ubiquitin-Weitergabe
3. **E3** (Ubiquitin-Ligase): Substrat-Erkennung + Ubiquitin → Substrat-Lysin. >600 E3s = hohe Spezifität

Poly-Ubiquitin-Kette (Lys-48) = Abbausignal.

**26S-Proteasom:**
- 20S-Kernpartikel (Barrel-Struktur, Protease-Aktivitäten)
- 2× 19S-Regulatorkappen (Ubiquitin-Erkennung, Entfaltung, Einschleusung)

## Zentriolen und Zentrosom

**Zentriol:** Zylindrisch, ~500 nm, aus **9×3-Triplett-Mikrotubuli** (stabiler als 9+2 in Zilien).

**Zentrosom (MTOC):** 2 Zentriolen + perizentrioläres Material (PCM, enthält γ-Tubulin-Ringe). Dupliziert in S-Phase, organisiert bipolaren Spindelapparat in Mitose.

**Basalkörper:** Zentriol migriert an Zelloberfläche → Basalkörper → Zilien-Axonem (9+2) wächst daraus.`,
      lernziele: [
        "Eukaryotische und prokaryotische Ribosomen mit Untereinheiten und Antibiotika-Targets beschreiben",
        "Das Ubiquitin-Proteasom-System (E1/E2/E3, 26S-Proteasom) und seine Bedeutung erläutern",
        "Zentriolen, Zentrosom, Basalkörper und ihre Rollen bei Zellteilung und Zilienbildung beschreiben",
      ],
      sections: [
        {
          heading: "Ribosom: Translationszyklus und A/P/E-Sites",
          text: "Der Translationszyklus läuft in drei Schritten: (1) Aminoacyl-tRNA-Bindung an A-Site (Codon-Anticodon-Erkennung, durch Elongationsfaktor EF1A/eEF1A mit GTP). (2) Peptidyltransferase-Reaktion: Peptidyl-tRNA (P-Site) überträgt Peptid auf Aminoacyl-tRNA (A-Site) – Peptidbindung entsteht. Die Peptidyltransferase ist eine Ribozym-Aktivität der 23S/28S-rRNA – Beleg für RNA-Welt-Hypothese. (3) Translokation (durch EF-G/eEF2 mit GTP): A→P, P→E. Leere tRNA verlässt E-Site. Pro Aminosäure: ~4 GTP (2 für Aminoacyl-tRNA-Synthese, 2 für Elongation). Polysomen (mehrere Ribosomen an einer mRNA) steigern den Proteindurchsatz.",
          merksatz: "Translation: A (Anlagerung) → Peptidbindung in P → E (Exit leere tRNA). Pro Aminosäure ~4 GTP + 1 ATP.",
        },
        {
          heading: "UPS: Präzision des Proteinabbaus",
          text: "Das UPS ist die primäre Degradationsmaschinerie für kurzlebige, beschädigte oder überflüssige zytosolische und nukleäre Proteine. E3-Ubiquitin-Ligasen (>600 Varianten) gewährleisten exquisite Substrat-Spezifität. Bekannte E3-Substrat-Paare: SCF-Komplex → Cycline (Zellzyklus), MDM2 → p53 (Tumorsuppressor), VHL → HIF-1α (Hypoxiefaktor). Das 26S-Proteasom: AAA-ATPasen im 19S entfalten Substrate unter ATP-Verbrauch. Das 20S-Barrel enthält drei Protease-Aktivitäten: Chymotrypsin-ähnlich, Trypsin-ähnlich, Caspase-ähnlich. Bortezomib blockiert das 20S-Proteasom reversibel – effektiv gegen Multiples Myelom.",
          merksatz: "UPS: E3-Spezifität (>600 Ligasen) + Lys48-Poly-Ubiquitin-Kette → 26S-Proteasom → ATP-abhängiger Abbau.",
        },
        {
          heading: "Zentriolen: Struktur und Funktion",
          text: "Jedes Zentriol besteht aus neun Triplett-Mikrotubuli (A-, B-, C-Tubulus), die spiralförmig angeordnet sind. Das Mutterzentriol trägt appendages (distale und subdistale Anhänge), die bei Zilienbildung und Zellteilung wichtig sind. Das Zentrosom wird in der S-Phase dupliziert: An jedem bestehenden Zentriol (Mutterzentriol) entsteht ein Tochterzentriol. In der G2/Mitose separieren die zwei Zentrosomen zu den Polen. γ-Tubulin-Ringe im PCM dienen als Nukleationszentren für Mikrotubuli-Plus-Enden. Zentrosom-Überduplikation ist in Tumorzellen häufig (→ multipolare Mitosen, chromosomale Instabilität, Aneuploidie).",
          merksatz: "Zentriol = 9×3-Triplett. Zentrosom = MTOC (2 Zentriolen + PCM). S-Phase: Duplikation. Mitose: Separation zu Polen.",
        },
      ],
      merksätze: [
        "80S (Eukaryoten) = 40S + 60S; 70S (Prokaryoten) = 30S + 50S. Tetracycline → 30S; Makrolide/Chloramphenicol → 50S.",
        "UPS: E1 aktiviert, E2 konjugiert, E3 spezifiziert (>600!). Lys48-Poly-Ubiquitin → 26S-Proteasom-Abbau.",
        "Zentriol = 9×3-Triplett → Zentrosom (MTOC) → bipolarer Spindel; als Basalkörper → Zilien (9+2-Axonem).",
      ],
      klinischerBezug: "Bortezomib (Velcade) hemmt das 26S-Proteasom und ist first-line-Therapie beim Multiplen Myelom. Myelomzellen synthetisieren exzessiv Immunglobuline und sind besonders sensitiv auf Proteinhomöostase-Störungen. Bei Morbus Alzheimer überwältigen Tau-Fibrillen und Amyloid-β-Plaques das UPS und die Autophagie.",
      altfrage: {
        question: "Warum hemmen Makrolide selektiv Bakterien?",
        answer: "Makrolide (Erythromycin, Azithromycin) binden an die 23S-rRNA der 50S-Untereinheit des prokaryotischen 70S-Ribosoms und blockieren die Translokation. Eukaryotische 80S-Ribosomen (60S mit 28S-rRNA) werden wegen struktureller Unterschiede nicht gebunden. Mitochondriale 70S-Ribosomen können bei hohen Konzentrationen betroffen sein (seltene mitochondriale Nebenwirkungen).",
      },
      selfTest: [
        {
          question: "Aus welchen Untereinheiten besteht das eukaryotische Ribosom?",
          options: [
            "30S + 50S = 70S",
            "40S + 60S = 80S",
            "40S + 50S = 80S",
            "30S + 60S = 80S",
            "20S + 60S = 70S",
          ],
          correctIndex: 1,
          explanation: "Eukaryotisches Ribosom: 80S = 40S (18S-rRNA + ~33 Proteine) + 60S (28S + 5.8S + 5S rRNA + ~49 Proteine). Prokaryotisches Ribosom: 70S = 30S + 50S. Sedimentationskoeffizienten (S) addieren sich nicht linear.",
          hints: [
            "Eukaryoten = 80S. Prokaryoten = 70S.",
            "Kleine Untereinheit: 40S (Euk) oder 30S (Prok).",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Enzymklasse bestimmt die Substrat-Spezifität im UPS?",
          options: [
            "E1-Enzyme (Ubiquitin-aktivierende Enzyme)",
            "E3-Ubiquitin-Ligasen",
            "Deubiquitinasen (DUBs)",
            "Proteasom-20S-Proteasen",
            "AAA-ATPasen des 19S-Komplexes",
          ],
          correctIndex: 1,
          explanation: "E3-Ubiquitin-Ligasen (>600 im menschlichen Genom) erkennen spezifische Substrate und übertragen Ubiquitin auf deren Lysin-Reste. Die hohe Anzahl der E3s gewährleistet die exquisite Substrat-Spezifität. E1 aktiviert Ubiquitin allgemein, E2 konjugiert – beide sind deutlich weniger divers.",
          hints: [
            "E3 = Entscheider. Viele E3s (>600) = viele verschiedene Substrate.",
            "Warum gibt es so viele E3s?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Mikrotubuli-Anordnung haben Zentriolen?",
          options: [
            "9+2 (Dupletts + 2 zentrale)",
            "9+0 (Dupletts, keine zentralen)",
            "9×3 (Triplett-Mikrotubuli)",
            "6×2 (6 Dupletts)",
            "Einzelne Mikrotubuli ohne Muster",
          ],
          correctIndex: 2,
          explanation: "Zentriolen haben 9×3-Triplett-Mikrotubuli (A-, B-, C-Tubulus je Gruppe). Dies ist stabiler als die 9+2-Anordnung des Zilien-Axonems (9 Dupletts + 2 zentrale Mikrotubuli). Primärzilien haben 9+0 (keine zentralen Mikrotubuli, unbeweglich, sensorisch).",
          hints: [
            "Zentriolen sind strukturell stabiler als Zilien.",
            "9×3 = 9 Dreiergruppen; 9+2 = 9 Paare + 2 zentrale.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "An welcher Site bindet die neue Aminoacyl-tRNA während der Translation?",
          options: [
            "E-Site (Exit)",
            "P-Site (Peptidyl)",
            "A-Site (Aminoacyl)",
            "D-Site (Donor)",
            "T-Site (Transfer)",
          ],
          correctIndex: 2,
          explanation: "Die A-Site (Aminoacyl-tRNA-Site) ist der Eingang für neue Aminoacyl-tRNAs. Hier erfolgt Codon-Anticodon-Paarung. Dann knüpft die Peptidyltransferase (rRNA-Ribozym) die Peptidbindung zwischen dem Peptid der P-Site und der Aminosäure der A-Site. Translokation: A→P, P→E. Leere tRNA verlässt E-Site.",
          hints: [
            "A wie Aminoacyl – die neue Aminosäure kommt an die A-Site.",
            "P-Site = Peptid wächst hier. E-Site = leere tRNA verlässt.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welches Antibiotikum hemmt prokaryotische Translation an der 30S-Untereinheit?",
          options: [
            "Penicillin",
            "Vancomycin",
            "Tetracyclin",
            "Metronidazol",
            "Fluconazol",
          ],
          correctIndex: 2,
          explanation: "Tetracycline binden an die 30S-Untereinheit prokaryotischer 70S-Ribosomen und blockieren die Anlagerung von Aminoacyl-tRNA an die A-Site → Translationshemmung. Eukaryotische 40S-Untereinheiten sind strukturell verschieden und werden nicht gebunden. Penicillin und Vancomycin hemmen die Zellwandsynthese. Metronidazol schädigt DNA anaerober Keime. Fluconazol ist ein Antimykotikum.",
          hints: [
            "30S = kleine prokaryotische Untereinheit. Blockade der A-Site verhindert Translation.",
            "Breitspektrum-Antibiotikum, wirkt auf 30S.",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },

    // ─── UK9 ────────────────────────────────────────────────────────────────
    {
      id: 'bio-1-14',
      title: 'Zytoskelett, Kinozilien und Mikrovilli',
      content: `## Einleitung

Das Zytoskelett ist das dynamische innere Gerüst der Zelle – es verleiht Form, Stabilität und Mobilität. Drei Filamenttypen arbeiten zusammen: Mikrofilamente (Aktin), Mikrotubuli (Tubulin) und Intermediärfilamente. Motorproteine nutzen dieses Netzwerk als Schienen. Kinozilien und Mikrovilli sind spezialisierte Oberflächenstrukturen aus Zytoskelettkomponenten.

## Mikrofilamente (Aktinfilamente)

Dünnste Filamente (~7 nm), aus polymerisiertem G-Aktin → F-Aktin. Polar: Plus-Ende (Wachstum) und Minus-Ende.

**Funktionen:** Muskelkontraktion (Aktin-Myosin), Zellbewegung (Lamellipodien), Zytokinese (kontraktiler Ring), Mikrovilli-Bildung, kortikales Zytoskelett.

## Mikrotubuli

Hohlröhren (~25 nm) aus α-/β-Tubulin-Dimeren. Polar: Plus-Ende (peripher), Minus-Ende (Zentrosom). Dynamische Instabilität: wechseln zwischen Wachstum und Katastrophe.

**Funktionen:** Spindelapparat (Mitose), intrazellulärer Transport (Kinesin anterograd/Plus-Ende; Dynein retrograd/Minus-Ende), Zilien, axonaler Transport.

## Intermediärfilamente

~10 nm, nicht polar, sehr stabil. Zelltyp-spezifisch: Keratine (Epithel), Vimentin (Bindegewebe), Neurofilamente (Neuron), Desmin (Muskel), Lamine (Kernhülle).

**Funktion:** Mechanische Stabilität unter Zugspannung.

## Motorproteine

- **Kinesin:** Plus-Ende-gerichtet (anterograd, peripherwärts)
- **Dynein:** Minus-Ende-gerichtet (retrograd, zentralwärts); Dynein-Arme in Zilien
- **Myosin II:** Aktin-basiert (Muskelkontraktion)

## Kinozilien (bewegliche Zilien): 9+2-Axonem

9 äußere Duplett-Mikrotubuli + 2 zentrale Mikrotubuli. Dynein-Arme erzeugen Schlagbewegung (ATP). Vorkommen: Atemwegsepithel (mukoziliäre Clearance), Eileiter, Ependym.

**Primärzilien (9+0):** Keine zentralen Mikrotubuli, unbeweglich, sensorisch (Niere, Retina).

## Mikrovilli

Fingerförmige Ausstülpungen aus Aktin-Bündeln (~1–2 µm). Funktion: Oberflächenvergrößerung (~600-fach im Dünndarm = Bürstensaum). Enthalten SGLT1, Saccharase, Laktase.`,
      lernziele: [
        "Mikrofilamente, Mikrotubuli und Intermediärfilamente nach Größe, Aufbau und Funktion unterscheiden",
        "Kinesin und Dynein als Motorproteine auf Mikrotubuli mit Transportrichtung beschreiben",
        "Den 9+2-Aufbau von Kinozilien und die Funktion von Mikrovilli erläutern",
      ],
      sections: [
        {
          heading: "Drei Zytoskelettfilamente im Vergleich",
          text: "Mikrofilamente (7 nm, Aktin) sind die dünnsten und dynamischsten Filamente. Sie polymerisieren und depolymerisieren schnell, ermöglichen Zellbewegung (Lamellipodien, Pseudopodien), Zytokinese und bilden Mikrovilli. Mikrotubuli (25 nm, α/β-Tubulin) sind die dicksten, stiffsten Filamente. Sie wachsen vom Zentrosom (Minus-Ende) aus zum Plus-Ende in der Zellperipherie. Dynamische Instabilität erlaubt schnelle Umstrukturierung. Intermediärfilamente (10 nm) sind nicht polar, mechanisch sehr stabil und zelltyp-spezifisch zusammengesetzt. Pharmakologische Beispiele: Taxol stabilisiert Mikrotubuli exzessiv (Mitose-Stopp, Krebstherapie); Colchicin hemmt Mikrotubuli-Polymerisation (Gicht-Therapie, Mitose-Stopp); Cytochalasin depolymerisiert Aktin.",
          merksatz: "Filamente: Aktin/Mikrofilament = 7 nm, polar; Tubulin/Mikrotubulus = 25 nm, polar; Intermediär = 10 nm, nicht polar, stabil.",
        },
        {
          heading: "Motorproteine: Kinesin vs. Dynein",
          text: "Motorproteine sind ATPasen, die mechanische Arbeit leisten. Kinesin-1 bewegt Cargo zum Plus-Ende der Mikrotubuli (anterograd = vom Zentrosom weg zur Peripherie). In Neuronen: Transport von Vesikeln vom Zellkörper zur Synapse. Zytoplasmatisches Dynein bewegt Cargo zum Minus-Ende (retrograd = von der Peripherie zum Zellkörper). In Neuronen: retrograder Transport von Signalmolekülen zurück zum Soma. Axonales Dynein in Zilien ist für die Schlagbewegung verantwortlich: Es verbindet benachbarte Duplett-Mikrotubuli und erzeugt durch ATP-abhängige Gleitbewegung das Zilien-Schlagen. Kinesin-5 (Eg5) ist ein bipolares Motorprotein, das die zwei Halbspindeln der Mitose auseinander treibt.",
          merksatz: "Kinesin = anterograd (Plus-Ende, peripherwärts). Dynein = retrograd (Minus-Ende, zentralwärts). Merke: Dy-back.",
        },
        {
          heading: "Kinozilien: 9+2-Struktur und klinische Relevanz",
          text: "Das 9+2-Axonem besteht aus 9 äußeren Duplett-Mikrotubuli (A- und B-Tubulus), die durch Nexin-Links verbunden sind, und 2 zentralen Einzelmikrotubuli (zentrales Paar). Dynein-Arme (äußere und innere) erzeugen Gleitbewegungen zwischen benachbarten Dupletts, die durch das Nexin-Netz in eine Biegebewegung umgewandelt werden. Das Kartagener-Syndrom (Primäre Ciliäre Dyskinesie) entsteht durch Mutationen in Dynein-Arm-Genen → Zilien unbeweglich → chronische Sinusitis, Bronchiektasen, Situs inversus (50%), Infertilität. Primärzilien (9+0) sind unbeweglich und sensorisch: Polyzystin-1/2 in Nierenprimärzilien erkennen Harnfluss; Mutationen → Polyzystische Nierenerkrankung (ADPKD).",
          merksatz: "9+2 = 9 Duplett + 2 zentrale Mikrotubuli. Dynein-Arme erzeugen Schlag. Kartagener: kein Dynein → keine Bewegung → Sinusitis, Bronchiektasen, Infertilität.",
        },
      ],
      merksätze: [
        "Zytoskelettgrößen: Aktin = 7 nm; Mikrotubuli = 25 nm; Intermediärfilamente = 10 nm (nicht polar).",
        "Kinesin = Plus-Ende = anterograd. Dynein = Minus-Ende = retrograd. Merke: Dynein = Dy-back.",
        "9+2-Kinozilien: Dynein-Arme erzeugen Schlag. Kartagener-Syndrom = Dynein-Defekt → Zilien starr → chronische Atemwegsinfekte.",
      ],
      klinischerBezug: "Kartagener-Syndrom: Dynein-Arm-Defekt → Zilien bewegen sich nicht → mukoziliäre Clearance versagt → chronische Sinusitis und Bronchiektasen; Spermien bewegungslos (Infertilität); 50% Situs inversus (Zilien legen L-R-Achse im Embryo fest). Paclitaxel (Taxol) fixiert Mikrotubuli → SAC-Aktivierung → Mitose-Stopp → Apoptose von Tumorzellen. Epidermolysis bullosa: Keratin-Mutationen → mechanisch fragile Haut → Blasen bei geringer Reibung.",
      altfrage: {
        question: "Warum verursacht ein Dynein-Arm-Defekt in Embryonalzilien Situs inversus?",
        answer: "Im Primitiven Knoten (Hensens Knoten) des frühen Embryos erzeugen monociliäre Zellen durch Rotation einen nach links gerichteten Flüssigkeitsstrom (nodal flow). Dieser asymmetrische Fluss aktiviert Mechanosensoren auf der linken Seite und initiiert die Links-Rechts-Achsen-Festlegung. Bei Kartagener-Syndrom sind die Zilien des Primitiven Knotens bewegungslos → kein gerichteter Fluss → zufällige L-R-Bestimmung → 50% Situs inversus.",
      },
      selfTest: [
        {
          question: "Welches Zytoskelettprotein stützt Mikrovilli?",
          options: [
            "Tubulin",
            "Lamin A",
            "Aktin",
            "Desmin",
            "Vimentin",
          ],
          correctIndex: 2,
          explanation: "Mikrovilli werden von gebündelten Aktinfilamenten gestützt, die durch Fimbrin und Espin quervernetzt sind. An der Basis sind sie über Myosin-II und Tropomyosin mit dem Zellkortex verbunden. Mikrovilli vergrößern die Epitheloberfläche (Bürstensaum im Dünndarm ~600-fach). Tubulin (A) bildet Mikrotubuli (Zilien-Axonem), Lamine (B) und Desmin (D) und Vimentin (E) sind Intermediärfilamente.",
          hints: [
            "Mikrovilli = Aktinbündel-gestützte Membranausstülpungen.",
            "Was bewegt sich bei Muskelkontraktion? Das gleiche Protein stützt Mikrovilli.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "In welche Richtung transportiert Kinesin auf Mikrotubuli?",
          options: [
            "Zum Minus-Ende (retrograd, zentralwärts)",
            "Zum Plus-Ende (anterograd, peripherwärts)",
            "Nur auf Aktinfilamenten",
            "Bidirektional ohne Präferenz",
            "Nur in der Mitose aktiv",
          ],
          correctIndex: 1,
          explanation: "Kinesin-1 transportiert Cargo zum Plus-Ende der Mikrotubuli – vom Zentrosom weg zur Zellperipherie (anterograd). In Neuronen: Vesikel und Organellen vom Soma zur Synapse. Dynein geht in die entgegengesetzte Richtung (Minus-Ende, retrograd). Plus-Ende ist typischerweise in der Peripherie, Minus-Ende am Zentrosom.",
          hints: [
            "Kinesin = vorwärts (peripher). Dynein = rückwärts (zentral).",
            "Plus-Ende der Mikrotubuli zeigt zur Zellperipherie.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was charakterisiert das 9+2-Axonem?",
          options: [
            "9 Triplett-Mikrotubuli ohne zentrale",
            "9 Duplett-Mikrotubuli + 2 zentrale Mikrotubuli",
            "9 Einzelmikrotubuli + 2 Aktinfilamente",
            "6 Dupletts + 3 zentrale Mikrotubuli",
            "9 Dupletts ohne zentrale Mikrotubuli",
          ],
          correctIndex: 1,
          explanation: "Das 9+2-Axonem beweglicher Kinozilien besteht aus 9 äußeren Duplett-Mikrotubuli (A- und B-Tubulus) und 2 zentralen Einzelmikrotubuli. Dynein-Arme verbinden die äußeren Dupletts und erzeugen durch ATP-Hydrolyse die Schlagbewegung. Primärzilien haben 9+0 (keine zentralen Mikrotubuli). Zentriolen haben 9×3-Triplett.",
          hints: [
            "9+2: neun außen, zwei in der Mitte.",
            "Bewegliche Zilien brauchen Dynein-Arme zwischen den Dupletts.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Erkrankung entsteht durch defekte Dynein-Arme in Zilien?",
          options: [
            "Mukoviszidose",
            "Kartagener-Syndrom",
            "Epidermolysis bullosa",
            "Zellweger-Syndrom",
            "Morbus Gaucher",
          ],
          correctIndex: 1,
          explanation: "Das Kartagener-Syndrom (Primäre Ciliäre Dyskinesie) entsteht durch Mutationen in Dynein-Arm-Genen. Ohne Dynein-Arme können Zilien nicht schlagen → Schleim staut in Atemwegen (chronische Sinusitis, Bronchiektasen); Spermiengeißeln unbeweglich (männliche Infertilität); 50% Situs inversus (Zilien legen L-R-Achse im Embryo fest). Mukoviszidose (A) ist ein CFTR-Chloridkanal-Defekt, kein Zilienstrukturdefekt.",
          hints: [
            "Dynein-Arme erzeugen die Schlagkraft der Zilien.",
            "Was passiert, wenn Atemwegs-Zilien nicht schlagen?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage zu Intermediärfilamenten ist korrekt?",
          options: [
            "Sie sind polar wie Mikrotubuli",
            "Sie bestehen aus Tubulin-Dimeren",
            "Sie sind nicht polar und mechanisch sehr stabil",
            "Sie bilden den Spindelapparat in der Mitose",
            "Sie zeigen dynamische Instabilität",
          ],
          correctIndex: 2,
          explanation: "Intermediärfilamente sind nicht polar und besonders zugfest/stabil – sie bauen sich langsam auf und ab. Je nach Zelltyp verschiedene Proteine: Keratine (Epithel), Vimentin (Mesenchym), Neurofilamente, Desmin (Muskel), Lamine (Kernhülle). Mikrotubuli (nicht Intermediärfilamente) bilden den Spindelapparat (D falsch) und zeigen dynamische Instabilität (E falsch).",
          hints: [
            "Intermediär = mittlere Größe. Aber die stabilsten!",
            "Polar oder nicht polar – ein wichtiges Unterscheidungsmerkmal.",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },

    // ─── UK10 ───────────────────────────────────────────────────────────────
    {
      id: 'bio-1-15',
      title: 'Zellkontakte — Tight Junctions, Desmosomen, Gap Junctions',
      content: `## Einleitung

Mehrzellige Organismen benötigen mechanisch stabile und kommunikationsfähige Zellverbände. **Zellkontakte** erfüllen drei Grundaufgaben: Abdichtung (Tight Junctions), mechanische Verbindung (Desmosomen, Hemidesmosomen, Adhärenz-Junctions) und Kommunikation (Gap Junctions). Diese Strukturen sind Grundlage von Epithelbarrieren, Gewebe-Integrität und elektrischer Synchronisation.

## Tight Junctions (Zonulae occludentes)

**Funktion:** Parazelluläre Abdichtung – kein Molekül passiert zwischen Zellen. Definition der Zellpolarität (apikale vs. basolaterale Membrandomäne).

**Aufbau:** Transmembranproteine **Claudine** (bestimmen Selektivität/Permeabilität) und **Occludin** bilden Strangnetze. Intrazellulär: Adaptoren ZO-1/2/3 → Aktin-Kortex.

**Variabilität:** Claudin-Zusammensetzung bestimmt Durchlässigkeit: Nierentrischicht (Claudin-16 → Mg²⁺-Durchlass), Blut-Hirn-Schranke (Claudin-5 → sehr dicht).

## Adhärenz-Junctions

Transmembranprotein **E-Cadherin** (Ca²⁺-abhängig) → β-Catenin + α-Catenin → Aktin. Bilden Adhärensgürtel (Zonula adhaerens). β-Catenin auch Teil des Wnt-Signalwegs.

## Desmosomen (Maculae adhaerentes)

**Funktion:** Punktförmige, sehr stabile mechanische Verbindungen unter Zugspannung.

**Aufbau:** Transmembran: **Desmoglein + Desmocollin** (Cadherine, Ca²⁺-abhängig). Intrazelluläre Plaque: Desmoplakin + Plakoglobin → verankert in **Intermediärfilamenten** (Keratine in Epithel, Desmin in Herzmuskel).

**Vorkommen:** Epidermis (Stratum spinosum), Herzmuskel (Glanzstreifen/Disci intercalares).

## Hemidesmosomen

Halbseitige Verankerung von Epithelzellen in der Basallamina. Transmembran: **Integrin α6β4** → Laminin-332 (extrazelluläre Matrix). Intrazellulär: Plectin → Keratin-Intermediärfilamente.

## Gap Junctions (Nexus)

**Funktion:** Direkter interzellulärer Austausch kleiner Moleküle <1.000 Da (Ionen, cAMP, IP₃, Glucose).

**Aufbau:** Je 6 **Connexine** bilden ein Connexon (Hemikanal). 2 Connexone benachbarter Zellen = vollständiger Kanal (~1,5 nm Durchmesser). Kanal ist regulierbar (Spannung, pH, Ca²⁺).

**Vorkommen:** Herzmuskel (Cx43, elektrische Synchronisation), Innenohr (Cx26, K⁺-Rezirkulation), glatte Muskulatur, Astrozyten.`,
      lernziele: [
        "Die vier Junctiontypen (Tight, Adhärenz, Desmosom, Gap Junction) in Molekülen und Funktion beschreiben",
        "Claudine, Cadherine und Connexine als spezifische Strukturmoleküle benennen",
        "Klinische Relevanz von Junction-Defekten (Pemphigus, Bullöses Pemphigoid, Cx-Mutationen) erläutern",
      ],
      sections: [
        {
          heading: "Abdichtende und mechanische Junctions im Epithel",
          text: "In Epithelzellen bilden Junctions eine apikobасale Hierarchie: Tight Junctions (apikal) dichten parazellulären Raum ab und definieren Zellpolarität. Adhärenz-Junctions (Zonula adhaerens) liegen basal von Tight Junctions und verbinden Zellen über E-Cadherin-Catenin-Aktin-Komplexe. Desmosomen (Maculae adhaerentes) bilden punktförmige mechanische Anker, verankert in Intermediärfilamenten. Dieser 'Junctional Complex' (TJ + AJ + Desmosom) macht Epithel mechanisch stabil und selektiv abdichtend. Hemidesmosomen verankern die gesamte Epithelschicht in der Basallamina.",
          merksatz: "Apikobасale Junctions-Hierarchie: Tight Junction (Abdichtung) → Adhärenz-Junction (Aktin-Anker) → Desmosom (Intermediärfilament-Anker).",
        },
        {
          heading: "Gap Junctions: elektrische und metabolische Kopplung",
          text: "Gap Junctions sind die einzigen Strukturen für direkten Zell-Zell-Austausch ohne Extrazellulärstoff. Im Herzmuskel ermöglichen Gap Junctions (hauptsächlich Cx43, kodiert von GJA1) die schnelle Ausbreitung des Aktionspotentials als funktionelles Syncytium: Das Herz schlägt synchron, weil die elektrische Erregung durch Gap Junctions von Zelle zu Zelle springt. Connexin-26 (Cx26, GJB2) im Innenohr rezirkuliert K⁺ von Haarzellen zurück zur Stria vascularis – essentiell für Endolymphe-Homöostase. GJB2-Mutationen → kongenitale nichtsyndromale Schwerhörigkeit (häufigste genetische Ursache für Taubheit).",
          merksatz: "Gap Junction = Connexon + Connexon = Kanal für Moleküle <1 kDa. Herzmuskel: Cx43 für synchrones Schlagen. Innenohr: Cx26 für K⁺-Rezirkulation.",
        },
        {
          heading: "Klinische Relevanz von Zellkontakt-Defekten",
          text: "Pemphigus vulgaris: Autoantikörper gegen Desmoglein-3 (und -1) zerstören Desmosomen in der Epidermis → Akantholyse (Keratinozyten lösen sich voneinander) → intraepidermale Blasenbildung → schmerzhafte Erosionen der Haut und Schleimhäute. Therapie: Corticosteroide, Rituximab (B-Zell-Depletion). Bullöses Pemphigoid: Autoantikörper gegen BP180 (Kollagen XVII, Hemidesmosomen) und BP230 → subepidermale Blasen. Brugada-Syndrom: Connexin-43-Mutationen → Störung der kardialen elektrischen Kopplung → ventrikuläre Arrhythmien, plötzlicher Herztod. Arrhythmogene Kardiomyopathie (ARVC): Desmoplakin/Desmoglein-Mutationen → strukturelle Herzmuskeldefekte.",
          merksatz: "Pemphigus vulgaris = Anti-Desmoglein → intraepidermale Blasen. Bullöses Pemphigoid = Anti-Hemidesmosom (BP180) → subepidermale Blasen.",
        },
      ],
      merksätze: [
        "Tight Junction: Claudine + Occludin + ZO-Proteine → parazelluläre Abdichtung + Zellpolarität.",
        "Desmosom: Desmoglein/Desmocollin + Desmoplakin → verankert in Intermediärfilamenten (stärkste mechanische Verbindung).",
        "Gap Junction: 6 Connexine = Connexon; 2 Connexone = Kanal. Moleküle <1 kDa passieren. Herzmuskel: Cx43 (elektrische Synchronisation).",
      ],
      klinischerBezug: "Pemphigus vulgaris: Autoantikörper gegen Desmoglein-3 → Desmosomen-Zerstörung → intraepidermale Blasen. Bullöses Pemphigoid: Autoantikörper gegen BP180 (Hemidesmosom) → subepidermale Blasen. GJB2-Mutationen (Cx26): häufigste Ursache kongenitaler Schwerhörigkeit weltweit.",
      altfrage: {
        question: "Warum sind Tight Junctions essentiell für die Blut-Hirn-Schranke?",
        answer: "Die Blut-Hirn-Schranke (BBB) besteht aus Gehirn-Kapillarendothelzellen, die durch besonders dichte Tight Junctions (reich an Claudin-5 und Occludin) verbunden sind. Diese verhindern das parazelluläre Eindringen von Molekülen und Mikroorganismen ins ZNS. Nur lipophile Moleküle oder Substanzen mit spezifischen Transportern (Glucose via GLUT1, Aminosäuren via LAT1) können passieren. Dies schützt das Gehirn, erschwert aber auch die Arzneimitteltherapie von ZNS-Erkrankungen.",
      },
      selfTest: [
        {
          question: "Welches Protein ist hauptsächlich für die parazelluläre Abdichtung in Tight Junctions verantwortlich?",
          options: [
            "Desmoglein",
            "Connexin",
            "Claudin",
            "E-Cadherin",
            "Integrin α6β4",
          ],
          correctIndex: 2,
          explanation: "Claudine sind die wichtigsten Transmembranproteine der Tight Junctions. Sie bilden durch homophile Interaktionen auf benachbarten Zellen Strangnetze, die den parazellulären Raum abdichten. Die Claudin-Subtypen bestimmen die Selektivität. Desmoglein (A) gehört zu Desmosomen, Connexin (B) zu Gap Junctions, E-Cadherin (D) zu Adhärenz-Junctions, Integrin α6β4 (E) zu Hemidesmosomen.",
          hints: [
            "Tight = dicht. Welches Protein macht die Verbindung dicht?",
            "Blut-Hirn-Schranke: Claudin-5 macht sie besonders dicht.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Mit welchen Zytoskelettfilamenten sind Desmosomen intrazellulär verbunden?",
          options: [
            "Aktinfilamenten",
            "Mikrotubuli",
            "Intermediärfilamenten",
            "Myosinfilamenten",
            "Titin-Filamenten",
          ],
          correctIndex: 2,
          explanation: "Desmosomen sind über ihre Plaque (Desmoplakin, Plakoglobin) mit Intermediärfilamenten verbunden: Keratine in Epithelzellen, Desmin in Herzmuskelzellen. Diese Verbindung überträgt mechanische Zugkräfte über den Intermediärfilament-Verbund. Adhärenz-Junctions sind mit Aktinfilamenten (A) verbunden (via Catenine). Dieser Unterschied ist klinisch relevant und MedAT-Prüfungsstoff.",
          hints: [
            "Desmosomen = zugfest. Welche Filamente sind mechanisch stabil?",
            "Adhärenz-Junctions → Aktin. Desmosomen → ?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Funktion haben Gap Junctions?",
          options: [
            "Parazelluläre Abdichtung des Epithels",
            "Mechanische Verbindung unter Zugspannung",
            "Direkter Austausch kleiner Moleküle zwischen Zellen",
            "Verankerung in der Basallamina",
            "Signaltransduktion durch Rezeptortyrosinkinasen",
          ],
          correctIndex: 2,
          explanation: "Gap Junctions bilden hydrophile Kanäle (~1,5 nm) zwischen benachbarten Zellen, durch die Moleküle <1.000 Da direkt fließen können: Ionen, cAMP, IP₃, Glucose. Dies ermöglicht elektrische Kopplung (Herzmuskel: synchrones Schlagen; glatte Muskulatur: koordinierte Kontraktion) und metabolische Koordination.",
          hints: [
            "Gap = Lücke. Junctions = Verbindung. Was fließt durch diese Kanäle?",
            "Herzmuskel schlägt synchron – wie kommunizieren die Zellen?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Erkrankung entsteht durch Autoantikörper gegen Desmoglein-3?",
          options: [
            "Brugada-Syndrom",
            "Pemphigus vulgaris",
            "Bullöses Pemphigoid",
            "Kartagener-Syndrom",
            "Epidermolysis bullosa",
          ],
          correctIndex: 1,
          explanation: "Pemphigus vulgaris ist eine Autoimmunerkrankung mit Antikörpern gegen Desmoglein-3 (Desmosomenprotein). Desmoglein-Inaktivierung → Akantholyse (Keratinozyten lösen sich voneinander) → intraepidermale Blasenbildung. Bullöses Pemphigoid (C) hat Antikörper gegen Hemidesmosomen-Proteine (BP180). Der anatomische Ort der Blasenbildung (intraepidermal vs. subepidermal) unterscheidet beide Erkrankungen.",
          hints: [
            "Pemphigus = Blasen in der Haut. Desmoglein hält Hautzellen zusammen.",
            "Intraepidermal (innerhalb der Epidermis) vs. subepidermal (unter der Epidermis) – wo liegt der Unterschied?",
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Welches Connexin ist häufig bei kongenitaler Schwerhörigkeit mutiert?",
          options: [
            "Connexin-43 (GJA1)",
            "Connexin-32 (GJB1)",
            "Connexin-26 (GJB2)",
            "Connexin-30 (GJB6)",
            "Connexin-40 (GJA5)",
          ],
          correctIndex: 2,
          explanation: "Connexin-26 (Cx26, GJB2-Gen) ist die häufigste Ursache kongenitaler nicht-syndromaler Schwerhörigkeit. Cx26-Gap-Junctions in der Cochlea rezirkulieren K⁺ von Haarzellen zurück zur Stria vascularis – essentiell für den Endolymphe-K⁺-Haushalt. Cx43 (A, GJA1) ist das Herz-Connexin. Cx32 (B, GJB1) ist in Schwann-Zellen und Leber exprimiert, Mutationen → Charcot-Marie-Tooth-Neuropathie Typ 1X.",
          hints: [
            "GJB2 = häufigste genetische Ursache für Taubheit.",
            "Connexin-26 im Innenohr: K⁺-Recycling in der Cochlea.",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },

    // ─── UK11 ───────────────────────────────────────────────────────────────
    {
      id: 'bio-1-17',
      title: 'Stofftransport — Von Diffusion bis Na⁺/K⁺-ATPase',
      content: `## Einleitung

Jede Zelle muss Nährstoffe aufnehmen, Abfallprodukte abgeben und ihr inneres Milieu konstant halten. Transportmechanismen durch die Zellmembran sind dafür fundamental. Grundunterscheidung: **passiver Transport** (folgt dem Gradienten, kein ATP) vs. **aktiver Transport** (gegen den Gradienten, benötigt ATP direkt oder indirekt).

## Passiver Transport

**Einfache Diffusion:** Kleine unpolare Moleküle (O₂, CO₂, Ethanol, Steroidhormone) diffundieren direkt durch die hydrophobe Lipiddoppelschicht. Triebkraft: Konzentrationsgradient.

**Osmose:** Diffusion von Wasser durch eine semipermeable Membran vom hypotonen zum hypertonen Kompartiment. **Aquaporine** (AQP1–4) beschleunigen Wassertransport (AQP2 in Nierens-Sammelrohr, ADH-reguliert).

**Erleichterte Diffusion:** Polare/geladene Moleküle nutzen Kanal- oder Carrier-Proteine, folgen aber dem Gradienten ohne ATP. Beispiele: GLUT1–4 (Glucose), Ionenkanäle (Na⁺, K⁺, Ca²⁺, Cl⁻-Kanäle).

## Primär aktiver Transport

Direkter ATP-Einsatz durch ATPase-Pumpen.

**Na⁺/K⁺-ATPase:**
- 3 Na⁺ aus Zelle + 2 K⁺ in Zelle pro ATP-Hydrolyse
- Elektrogenisch (3+ raus, 2+ rein = netto -1 pro Zyklus) → Ruhemembranpotential ~-70 mV
- Hemmer: Herzglykoside (Digoxin, Digitoxin) → positive Inotropie

**Weitere P-Typ-ATPasen:** Ca²⁺-ATPase/SERCA (→ SER), H⁺/K⁺-ATPase (Magen, Protonenpumpenhemmer-Target).

## Sekundär aktiver Transport

Nutzt Na⁺-Gradient (von Na⁺/K⁺-ATPase erzeugt) ohne direkte ATP-Hydrolyse.

- **Symport:** Na⁺ + Glucose gleichzeitig in Zelle (SGLT1 im Darm, SGLT2 in Niere). SGLT2-Inhibitoren (Gliflozine) = Diabetes-Therapie.
- **Antiport:** Na⁺ und H⁺ in entgegengesetzte Richtungen (NHE1: Na⁺ rein, H⁺ raus).

## Endozytose und Exozytose

**Endozytose:** Rezeptor-vermittelt (Clathrin-Vesikel, z.B. LDL-Rezeptor), Pinozytose, Phagozytose.

**Exozytose:** Konstitutiv (stetig) oder reguliert (Ca²⁺-Trigger, z.B. Neurotransmitter-Freisetzung).

**Transzytose:** Endozytose → Transport durch Zelle → Exozytose (z.B. IgG-Transport durch Darmepithel via FcRn).`,
      lernziele: [
        "Passiven von aktivem Transport unterscheiden und Beispiele nennen",
        "Na⁺/K⁺-ATPase in Stöchiometrie (3 Na⁺ raus, 2 K⁺ rein, 1 ATP), elektrogenischer Wirkung und pharmakologischer Relevanz beschreiben",
        "Sekundär aktiven Transport (Symport/Antiport) am Beispiel SGLT1 erläutern",
      ],
      sections: [
        {
          heading: "Passiver Transport: Diffusion, Osmose, erleichterte Diffusion",
          text: "Einfache Diffusion: Nur kleine unpolare Moleküle (O₂, CO₂, N₂, Steroidhormone, Ethanol, <~150 Da) können die hydrophobe Kernzone der Lipiddoppelschicht passieren. Das Fick'sche Gesetz beschreibt den Fluss: J = D × A × (ΔC / Δx), wobei D = Diffusionskoeffizient, A = Fläche, ΔC = Konzentrationsdifferenz, Δx = Membrandicke. Osmose: Wasserbewegung durch semipermeable Membran; Tonizität bestimmt Netto-Wasserfluss (isoton = kein Fluss, hypoton = Zelle schwillt, hyperton = Zelle schrumpft). Erleichterte Diffusion: sättigbar (begrenzte Kanäle/Carrier), selektiv (Ionenkanäle diskriminieren nach Ionengröße und Ladung), thermodynamisch passiv (kein ATP), aber schneller als einfache Diffusion.",
          merksatz: "Passiver Transport = bergab (Gradient). Aktiver Transport = bergauf (gegen Gradient, braucht Energie direkt oder indirekt).",
        },
        {
          heading: "Na⁺/K⁺-ATPase: Mechanismus und Pharmakologie",
          text: "Die Na⁺/K⁺-ATPase ist ein P-Typ-ATPase (bildet Phosphoenzym-Zwischenprodukt). Jeder Zyklus: 3 Na⁺ intrazellulär binden → ATP-Hydrolyse → Phosphorylierung (E1P-Konformation) → 3 Na⁺ nach außen → 2 K⁺ extrazellulär binden → Dephosphorylierung (E2-Konformation) → 2 K⁺ ins Innere. Ergebnis: 3 Na⁺ raus, 2 K⁺ rein, 1 ATP verbraucht. Elektrogenisch: Netto-1 positive Ladung verlässt die Zelle pro Zyklus → beiträgt ~-5 mV zum Ruhemembranpotential. Herzglykoside (Digoxin): hemmen Na⁺/K⁺-ATPase → Na⁺ akkumuliert → Na⁺/Ca²⁺-Austauscher (NCX) kann Ca²⁺ schlechter herausbefördern → Ca²⁺-Anstieg → stärkere Herzkontraktion (positive Inotropie). Enge therapeutische Breite: Toxizität = AV-Block, Arrhythmien, Nausea.",
          merksatz: "Na⁺/K⁺-ATPase: 3 Na⁺ raus + 2 K⁺ rein = 1 ATP. Herzglykoside hemmen sie → Na⁺↑ → Ca²⁺↑ → stärkere Kontraktion.",
        },
        {
          heading: "Sekundär aktiver Transport: SGLT-Familie und SGLT2-Inhibitoren",
          text: "Sekundär aktiver Transport nutzt den durch die Na⁺/K⁺-ATPase erzeugten Na⁺-Gradienten als indirekte Energiequelle. SGLT1 (SLC5A1, im Dünndarmepithel): 2 Na⁺ + 1 Glucose in Symport. Der Na⁺-Einstrom treibt die Glucose-Aufnahme auch gegen einen Glucosegradienten. SGLT2 (SLC5A2, im proximalen Nierentubulus): 1 Na⁺ + 1 Glucose Symport, zuständig für ~90% der renalen Glucose-Reabsorption. SGLT2-Inhibitoren (Gliflozine: Empagliflozin, Dapagliflozin, Canagliflozin) blockieren SGLT2 → Glucosurie → Blutzzuckersenkung bei Typ-2-Diabetes. Zusätzliche Effekte: kardioprotektiv, nephroprotektiv (Reduktion von HbA1c, Blutdruck, Körpergewicht, Herzinsuffizienz-Hospitalisierungen).",
          merksatz: "SGLT1 (Darm): 2 Na⁺ + Glucose Symport. SGLT2 (Niere): Na⁺ + Glucose Symport → 90% Reabsorption. Gliflozine hemmen SGLT2 → Glucose im Urin.",
        },
      ],
      merksätze: [
        "Na⁺/K⁺-ATPase: 3 Na⁺ raus, 2 K⁺ rein, 1 ATP → elektrogenisch → Ruhemembranpotential -70 mV.",
        "Einfache Diffusion: nur kleine unpolare Moleküle (O₂, CO₂). Erleichterte Diffusion: polar, mit Kanal/Carrier, kein ATP. Primär aktiv: gegen Gradient, direkte ATP-Hydrolyse. Sekundär aktiv: Na⁺-Gradient als Antrieb.",
        "SGLT2-Inhibitoren (Gliflozine): Blockade der renalen Glucose-Reabsorption → Glucosurie → Blutzzuckersenkung + kardioprotektiv.",
      ],
      klinischerBezug: "Herzglykoside (Digoxin) hemmen die Na⁺/K⁺-ATPase → Na⁺-Akkumulation → Ca²⁺-Anstieg → positive Inotropie. Indikation: Herzinsuffizienz, Vorhofflimmern. Toxizität: enge therapeutische Breite (Zielbereich 0,5–2 ng/ml). SGLT2-Inhibitoren (Empagliflozin) senken nicht nur den Blutzucker, sondern reduzieren kardiovaskuläre Ereignisse und Progression von diabetischer Nephropathie.",
      altfrage: {
        question: "Warum erzeugt die Na⁺/K⁺-ATPase ein negatives Ruhemembranpotential?",
        answer: "Die Na⁺/K⁺-ATPase pumpt pro ATP-Zyklus 3 Na⁺ aus der Zelle und 2 K⁺ hinein. Netto verlässt 1 positive Ladung die Zelle (elektrogenisch). Zusammen mit dem K⁺-Leckstrom (K⁺ diffundiert entlang seines Konzentrationsgradienten durch K⁺-Leckkanäle nach außen) entsteht ein Ruhemembranpotential von ca. -70 mV in Neuronen. Die Na⁺/K⁺-ATPase hält die ionalen Gradienten aufrecht, die diesen K⁺-Leckstrom antreiben.",
      },
      selfTest: [
        {
          question: "Welcher Transportmechanismus benötigt ATP?",
          options: [
            "Einfache Diffusion von O₂",
            "Osmose von Wasser",
            "Erleichterte Diffusion von Glucose via GLUT2",
            "Na⁺/K⁺-ATPase",
            "Diffusion von CO₂",
          ],
          correctIndex: 3,
          explanation: "Die Na⁺/K⁺-ATPase ist ein primär aktiver Transporter, der ATP direkt hydrolysiert, um 3 Na⁺ aus und 2 K⁺ in die Zelle zu pumpen – gegen deren Konzentrationsgradienten. Alle anderen Optionen sind passiv: O₂-Diffusion (A), Osmose (B) und erleichterte Diffusion (C) folgen dem Gradienten ohne ATP.",
          hints: [
            "ATP = Energie für Transport gegen den Gradienten.",
            "Passiv = bergab. Aktiv = bergauf = braucht Energie.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Wie viele Na⁺-Ionen transportiert die Na⁺/K⁺-ATPase pro ATP nach außen?",
          options: [
            "2 Na⁺ raus, 3 K⁺ rein",
            "3 Na⁺ raus, 2 K⁺ rein",
            "1 Na⁺ raus, 1 K⁺ rein",
            "4 Na⁺ raus, 2 K⁺ rein",
            "3 Na⁺ rein, 2 K⁺ raus",
          ],
          correctIndex: 1,
          explanation: "Die Na⁺/K⁺-ATPase transportiert pro ATP 3 Na⁺ nach außen und 2 K⁺ nach innen. Diese Asymmetrie (3 > 2) erzeugt einen Netto-Ladungsausstrom (elektrogenisch) und trägt zum negativen Ruhemembranpotential bei. Die Zahlen 3 Na⁺ raus und 2 K⁺ rein sind MedAT-Klassiker.",
          hints: [
            "3 Natrium raus, 2 Kalium rein: 3 > 2 → netto negativ innen.",
            "Elektrogenisch: mehr Kationen verlassen die Zelle als eintreten.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was ist Osmose?",
          options: [
            "Transport gelöster Stoffe durch eine Membran",
            "Aktiver Transport von Wasser gegen den Gradienten",
            "Passive Diffusion von Wasser durch eine semipermeable Membran",
            "Endozytose von Wassermolekülen",
            "Transport von Ionen durch Kanalproteine",
          ],
          correctIndex: 2,
          explanation: "Osmose ist die passive Diffusion von Wasser durch eine semipermeable Membran entlang des osmotischen Gradienten – vom Kompartiment mit niedriger gelöster Stoffkonzentration (hohe Wasseraktivität) zum Kompartiment mit hoher Konzentration. Kein ATP nötig. Aquaporine beschleunigen den Wasserfluss, sind aber keine Voraussetzung.",
          hints: [
            "Osmose betrifft Wasser, nicht gelöste Stoffe.",
            "Passiv oder aktiv? Wasser folgt dem osmotischen Gradienten.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welchen Mechanismus nutzt SGLT1 für die Glucoseaufnahme im Dünndarm?",
          options: [
            "Einfache Diffusion",
            "Primär aktiven Transport mit ATP-Hydrolyse",
            "Sekundär aktiven Symport (2 Na⁺ + Glucose in gleiche Richtung)",
            "Erleichterte Diffusion ohne Ionenkopplung",
            "Antiport: Na⁺ rein, Glucose raus",
          ],
          correctIndex: 2,
          explanation: "SGLT1 (Sodium-Glucose Linked Transporter 1) ist ein sekundär aktiver Symporter: 2 Na⁺ und 1 Glucose werden gemeinsam in die Epithelzelle transportiert. Die Triebkraft ist der Na⁺-Gradient, aufrechterhalten durch die basolaterale Na⁺/K⁺-ATPase. SGLT1 benötigt kein ATP direkt, ist aber indirekt von ATP abhängig (über den Na⁺-Gradienten).",
          hints: [
            "SGLT = Sodium-Glucose Linked Transporter. Energie kommt vom Na⁺-Gradienten.",
            "Sekundär aktiv = Na⁺-Gradient als Treibkraft statt direkter ATP-Hydrolyse.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Über welchen Mechanismus wirken Herzglykoside positiv inotrop?",
          options: [
            "Direkte Aktivierung der Myosin-ATPase",
            "Hemmung der Na⁺/K⁺-ATPase → Na⁺-Akkumulation → Ca²⁺-Anstieg via Na⁺/Ca²⁺-Austauscher",
            "Öffnung spannungsabhängiger Ca²⁺-Kanäle",
            "Aktivierung der mitochondrialen ATP-Synthase",
            "Hemmung der Phosphodiesterase → cAMP-Anstieg",
          ],
          correctIndex: 1,
          explanation: "Herzglykoside (Digoxin) hemmen die Na⁺/K⁺-ATPase → intrazelluläres Na⁺ steigt. Der Na⁺/Ca²⁺-Austauscher (NCX) nutzt normalerweise den einströmenden Na⁺-Strom für den Ca²⁺-Export – bei erhöhtem intrazellulären Na⁺ nimmt seine Effizienz ab → Ca²⁺ akkumuliert → stärkere Herzkontraktion (positive Inotropie).",
          hints: [
            "Digoxin hemmt die Natriumpumpe. Was passiert dann mit Na⁺?",
            "Wenn Na⁺ steigt, kann der Na⁺/Ca²⁺-Austauscher Ca²⁺ schlechter herausbefördern.",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },

    // ─── UK12 ───────────────────────────────────────────────────────────────
    {
      id: 'bio-1-18',
      title: 'Zellteilung, Zellzyklus und Zelltod',
      content: `## Einleitung

Der Zellzyklus koordiniert Wachstum, DNA-Replikation und Zellteilung mit molekularer Präzision. Fehler in der Regulation führen zu Krebs oder verfrühtem Zelltod. Apoptose (programmierter Tod) und Nekrose (pathologischer Tod) haben grundlegend verschiedene Mechanismen und Konsequenzen für den Organismus.

## Phasen des Zellzyklus

**G1-Phase:** Zellwachstum, Proteinsynthese. Restriktionspunkt (R): Rb-Protein hält Zelle fest, bis Cyclin D/CDK4-6 Rb phosphoryliert → Übergang zu S. Zellen ohne Wachstumssignale treten in G0 (Ruhephase) ein.

**S-Phase (Synthese):** DNA-Replikation: Chromosomen werden verdoppelt. DNA-Gehalt: G1 = 2C → Ende S = 4C. Histone werden co-synthetisiert.

**G2-Phase:** Kontrolle der DNA-Replikation (G2/M-Checkpoint, ATM/ATR), Synthese von Mitoseproteinen (Tubulin, Mitosekinasen).

## Mitosephasen

**Prophase:** Chromosomen kondensieren, Zentrosomen wandern auseinander, Spindel beginnt sich zu formen, Kernhülle beginnt aufzulösen.

**Prometaphase:** Kernhülle vollständig aufgelöst, Kinetochor-Mikrotubuli haften an Zentromeren.

**Metaphase:** Chromosomen in Äquatorialebene (Metaphaseplatte). SAC (Spindel-Checkpoint) prüft korrekte Anheftung aller Kinetochore.

**Anaphase:** Kohäsin gespalten (Separase) → Schwesterchromatiden trennen sich → zu Polen gezogen.

**Telophase:** Chromosomen dekondensieren, Kernhülle bildet sich neu.

**Zytokinese:** Kontraktiler Aktin-Myosin-Ring schnürt Zelle durch → 2 Tochterzellen (2n, 2C).

## Checkpoints und p53

- G1/S: Rb, p53, Cyclin D/CDK4-6
- G2/M: ATM/ATR → Chk1/2 → Cdc25-Hemmung
- SAC: Mad2, BubR1 → APC/C-Hemmung bis korrekte Anheftung

**p53:** Bei DNA-Schäden stabilisiert → aktiviert p21 (CDK-Inhibitor, Arrest) oder BAX/PUMA (Apoptose). In >50% aller Tumoren mutiert.

## Meiose

2 Teilungen (I + II) ohne dazwischenliegende Replikation → 4 haploide Tochterzellen (1n, 1C). Crossing-over in Prophase I → genetische Rekombination. Non-Disjunction → Trisomie (21 = Down, 18 = Edwards, 13 = Pätau).

## Apoptose vs. Nekrose

**Apoptose:** Aktiv, ATP-abhängig, Caspase-vermittelt. Intrinsisch: Cytochrom c → Apoptosom → Caspase-9 → Caspase-3. Extrinsisch: FasL/FasR → Caspase-8 → Caspase-3. Morphologie: Schrumpfung, Chromatinkondensation, Apoptosekörperchen, **keine Entzündung**.

**Nekrose:** Passiv, durch Schädigung, Membranruptur, Zellinhalt-Freisetzung → **Entzündung**.`,
      lernziele: [
        "Die Phasen des Zellzyklus (G1, S, G2, M) und die drei Checkpoints beschreiben",
        "Die Mitosephasen in korrekter Reihenfolge mit wesentlichen Ereignissen nennen",
        "Apoptose und Nekrose in Mechanismus, Morphologie und klinischer Bedeutung unterscheiden",
      ],
      sections: [
        {
          heading: "Zellzyklusregulation: Cycline und CDKs",
          text: "Der Zellzyklus wird von Cyclin-CDK-Komplexen vorangetrieben. Cycline akkumulieren und werden nach Erfüllung ihrer Funktion abgebaut. Cyclin D/CDK4-6 → Rb-Phosphorylierung → E2F-Aktivierung → S-Phase-Gene. Cyclin E/CDK2 → S-Phase-Eintritt. Cyclin A/CDK2 → DNA-Replikation. Cyclin B/CDK1 (MPF) → Mitose-Eintritt. CDK-Inhibitoren (CKIs): p21 (p53-Zielgen, bei DNA-Schäden), p27 (bei Nährstoffmangel), p16 (CDKN2A, Tumorsuppressor). Rb ist klassischer Tumorsuppressor: Biallelische Inaktivierung → Retinoblastom (kindlicher Augentumor). CDK4/6-Inhibitoren (Palbociclib, Ribociclib) hemmen Rb-Phosphorylierung → G1-Arrest → Krebstherapie (Brustkrebs).",
          merksatz: "Cycline oszillieren; CDKs sind konstant. Cyclin-CDK-Komplexe treiben voran; CKIs (p21, p27, p16) bremsen. Rb hält in G1 fest.",
        },
        {
          heading: "Apoptose: zwei Wege, eine Exekution",
          text: "Apoptose ist genetisch programmierter, aktiver Zelltod mit zwei Hauptwegen, die bei Effektorcaspase-3 konvergieren. Intrinsischer (mitochondrialer) Weg: Stress/DNA-Schäden aktivieren pro-apoptotische Bcl-2-Proteine (Bax, Bak) → MOMP (mitochondriale äußere Membran-Permeabilisierung) → Cytochrom c + Apaf-1 + Procaspase-9 = Apoptosom → Caspase-9 (Initiator) → Caspase-3/7 (Effektoren). Extrinsischer (Todesrezeptor-)Weg: FasL bindet FasR (CD95) → DISC (Death-Inducing Signaling Complex) → Caspase-8 → Caspase-3. Anti-apoptotische Bcl-2-Familie (Bcl-2, Bcl-XL) hemmt MOMP. BH3-Mimetics (Venetoclax) inhibieren Bcl-2 → Apoptose in Tumorzellen (CLL-Therapie).",
          merksatz: "Apoptose-Wege: intrinsisch (Cytochrom c → Apoptosom → Caspase-9) + extrinsisch (Todesrezeptor → Caspase-8) → beide → Caspase-3 → Zelltod.",
        },
        {
          heading: "Meiose und Non-Disjunction",
          text: "Meiose I (reduktionelle Teilung): Homologe Chromosomen paaren sich in Prophase I (Synapsis, Bivalent = Tetrade). Crossing-over (Chiasmata) → genetische Rekombination. Anaphase I: Homologe Chromosomen trennen sich. Ergebnis: 2 Zellen mit 1n (aber noch doppelten Chromatiden). Meiose II (äquationelle Teilung): Schwesterchromatiden trennen sich (wie Mitose). Ergebnis: 4 haploide Zellen (1n, 1C). Non-Disjunction (Fehlverteilung von Chromosomen): In Meiose I → alle Gameten betroffen; in Meiose II → die Hälfte. Trisomie 21 (Down-Syndrom): häufigste autosomale Trisomie, Risiko steigt exponentiell mit mütterlichem Alter (wegen verlängerter Prophase-I-Pause der Oozyten). Monosomie X (Turner-Syndrom): häufigste Monosomie.",
          merksatz: "Meiose I trennt homologe Chromosomen (2n → 1n). Meiose II trennt Schwesterchromatiden (wie Mitose). Non-Disjunction → Trisomie oder Monosomie.",
        },
      ],
      merksätze: [
        "Zellzyklus: G1 (Wachstum, Rb-Checkpoint) → S (DNA-Rep, 2C→4C) → G2 (Kontrolle) → M (Mitose). Phasen: Prophase-Prometaphase-Metaphase-Anaphase-Telophase.",
        "Apoptose: Caspase-Kaskade, Chromatinkondensation, Apoptosekörperchen, KEINE Entzündung. Nekrose: Membranruptur, Freisetzung von Zellinhalt, Entzündung.",
        "Meiose: 2 Teilungen → 4 haploide Zellen (1n). Non-Disjunction → Trisomie 21 (Down), 18 (Edwards), 13 (Pätau).",
      ],
      klinischerBezug: "p53 ist in >50% aller Tumoren mutiert – ohne p53 proliferieren Zellen trotz DNA-Schäden. CDK4/6-Inhibitoren (Palbociclib) blockieren Rb-Phosphorylierung und sind Standard bei HR+/HER2-Brustkrebs. Venetoclax (Bcl-2-Inhibitor) induziert Apoptose in CLL-Zellen und ist zugelassen für chronische lymphatische Leukämie.",
      altfrage: {
        question: "Wie unterscheiden sich Apoptose und Nekrose morphologisch und funktionell?",
        answer: "Apoptose ist aktiver, ATP-abhängiger, Caspase-vermittelter Zelltod: Zellschrumpfung, Chromatinkondensation, Membran-Blebbing, Bildung von Apoptosekörperchen, die von Makrophagen phagozytiert werden – ohne Entzündung. Physiologisch essentiell (Entwicklung, Immuntoleranz). Nekrose ist passiv durch Schädigung (Ischämie, Toxine): Zellschwellung, Membranruptur, Freisetzung des Zellinhalts → DAMP-Aktivierung → Entzündungsreaktion. Immer pathologisch.",
      },
      selfTest: [
        {
          question: "In welcher Phase findet die DNA-Replikation statt?",
          options: [
            "G1-Phase",
            "S-Phase",
            "G2-Phase",
            "M-Phase",
            "G0-Phase",
          ],
          correctIndex: 1,
          explanation: "Die DNA-Replikation findet in der S-Phase (Synthese-Phase) statt. Alle Chromosomen werden verdoppelt – aus 1-Chromatid-Chromosomen (2C) werden 2-Chromatid-Chromosomen (4C). Chromosomenzahl 2n bleibt konstant. G1 ist Wachstumsphase vor der Replikation, G2 Vorbereitung nach Replikation, M ist Zellteilung, G0 Ruhephase.",
          hints: [
            "S = Synthese. Was wird synthetisiert?",
            "DNA muss verdoppelt werden, damit beide Tochterzellen einen vollständigen Satz bekommen.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "In welcher Mitosephase stehen alle Chromosomen in der Äquatorialebene?",
          options: [
            "Prophase",
            "Prometaphase",
            "Metaphase",
            "Anaphase",
            "Telophase",
          ],
          correctIndex: 2,
          explanation: "In der Metaphase ordnen sich alle Chromosomen in der Äquatorialebene (Metaphaseplatte) an. Alle Kinetochore sind korrekt an Spindelmikrotubuli beider Pole befestigt. Der SAC (Spindel-Checkpoint) prüft dies und hält die Anaphase zurück, bis alle korrekt angeheftet sind.",
          hints: [
            "Meta = Mitte. Chromosomen in der Mitte.",
            "Metaphase ist ideal für Karyotypanalyse – maximal kondensierte, sichtbare Chromosomen.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was passiert in der Anaphase der Mitose?",
          options: [
            "Chromosomen kondensieren",
            "Kernhülle löst sich auf",
            "Kohäsin wird gespalten, Schwesterchromatiden trennen sich",
            "Chromosomen in Äquatorialebene",
            "Kernhülle bildet sich neu",
          ],
          correctIndex: 2,
          explanation: "In der Anaphase wird das Kohäsin-Protein (hält Schwesterchromatiden zusammen) durch die Protease Separase gespalten. Schwesterchromatiden trennen sich und werden durch Verkürzung der Kinetochor-Mikrotubuli zu den Polen gezogen. Kondensation (A) in Prophase, Kernhüllauflösung (B) in Prometaphase, Äquatorialausrichtung (D) in Metaphase, Kernhüllneubildung (E) in Telophase.",
          hints: [
            "Ana = auseinander. Chromatiden trennen sich.",
            "Was hält Schwesterchromatiden zusammen? Kohäsin.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage zur Apoptose ist korrekt?",
          options: [
            "Apoptose verursacht Entzündungsreaktion",
            "Apoptose erfolgt durch Membranruptur",
            "Apoptose ist aktiver, Caspase-vermittelter Prozess ohne Entzündung",
            "Apoptose und Nekrose sind funktionell identisch",
            "Apoptose ist immer pathologisch",
          ],
          correctIndex: 2,
          explanation: "Apoptose ist aktiver, ATP-abhängiger, Caspase-vermittelter Zelltod: Zellschrumpfung, Chromatinkondensation, Apoptosekörperchen → Phagozytose ohne Entzündung. Nekrose (nicht Apoptose) verursacht Entzündung durch Membranruptur. Apoptose ist physiologisch essentiell (Entwicklung: Fingerbildung; Immuntoleranz: klonale Deletion autoreaktiver T-Zellen).",
          hints: [
            "Apoptose = sauberer Tod. Nekrose = chaotischer Tod mit Entzündung.",
            "Caspasen sind die Ausführungsenzyme der Apoptose.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Funktion hat p53 bei DNA-Schäden?",
          options: [
            "Beschleunigt die Zellteilung",
            "Aktiviert Wachstumsfaktoren",
            "Stoppt Zellzyklus via p21 oder löst Apoptose via BAX/PUMA aus",
            "Hemmt die DNA-Reparatur",
            "Aktiviert den Nucleolus",
          ],
          correctIndex: 2,
          explanation: "p53 (Wächter des Genoms) wird bei DNA-Schäden durch ATM/ATR stabilisiert. p53 aktiviert: (1) p21 → CDK-Hemmung → G1-Arrest (Zeit für Reparatur), (2) BAX, PUMA → pro-apoptotische Proteine → Apoptose bei irreparablem Schaden. Mutiertes p53 in >50% aller Tumoren ermöglicht unkontrollierte Proliferation trotz DNA-Schäden.",
          hints: [
            "p53 = Wächter des Genoms. Was bewacht er?",
            "Bei irreparablen Schäden: lieber Zelltod als fehlerhafte Weitergabe.",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
  ],
};
