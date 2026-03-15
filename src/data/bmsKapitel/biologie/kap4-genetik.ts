import type { Kapitel } from "../types";

export const bioKapGenetik: Kapitel = {
  id: "bio-kap4",
  title: "Genetik",
  subject: "biologie",
  icon: "🧬",
  estimatedTime: "240 min",
  unterkapitel: [
    // ─── 1. DNA, Gene und Chromosomen ───────────────────────────────────────
    {
      id: "bio-4-01",
      title: "DNA, Gene und Chromosomen",
      imageUrl: "/images/bms/bio-dna-makrostruktur.jpg",
      imageCaption:
        "Abb.: DNA-Doppelhelix mit Basenpaaren und Zucker-Phosphat-Rückgrat (OpenStax, CC BY 4.0)",
      stichworte: ["DNA", "Gen", "Chromosom", "Allel", "Locus", "Doppelhelix", "Erbinformation"],
      content: `## DNA: Träger der Erbinformation

**DNA** (Desoxyribonukleinsäure) ist das Molekül, das die genetische Information speichert. Sie besteht aus zwei antiparallel (gegenläufig orientiert) gewundenen Strängen (**Doppelhelix**). Jeder Strang ist aus **Nukleotiden** aufgebaut: Ein Nukleotid enthält den Zucker Desoxyribose (Fünffachzucker ohne Sauerstoff an C2), ein Phosphat und eine von vier **Basen** — **A**denin (A), **T**hymin (T), **G**uanin (G), **C**ytosin (C). Die Basen der beiden Stränge paaren sich nach festen Regeln: A immer mit T (zwei Wasserstoffbrücken), G immer mit C (drei Wasserstoffbrücken). Daraus folgen die **Chargaff-Regeln**: In einem Doppelstrang ist die Menge an A gleich der von T, die von G gleich der von C. Die Abfolge der Basen (die **Sequenz**) codiert die Information für den Aufbau von Proteinen und die Steuerung der Zelle.

> **Merke:** DNA = Doppelhelix aus Nukleotiden; Basen A, T, G, C; A-T und G-C paaren. Die Sequenz der Basen ist die Erbinformation.

**Chargaff-Regeln (1950):** Erwin Chargaff wies 1950 nach, dass in jeder doppelsträngigen DNA gilt: **%A = %T** und **%G = %C** — eine direkte Folge der komplementären Basenpaarung. Rechenbeispiel: Wenn A = 27 %, dann T = 27 %, und G = C = (100 % − 54 %) / 2 = **23 %**. Daraus folgt auch: A + G = T + C (Purine (Zweiring-Basen: A, G) = Pyrimidine (Einring-Basen: T, C)).

> **Merke:** **Chargaff-Regel:** A = T und G = C (in Prozent). Wenn A = 27 % → T = 27 %, G = C = 23 %.

{{IMAGE}}

---

## Gen: funktionelle Einheit auf der DNA

Ein **Gen** ist ein **Abschnitt der DNA**, der die Information für ein bestimmtes Merkmal oder ein Produkt (z. B. ein Protein oder eine RNA) trägt. Gene liegen an festen Orten auf den Chromosomen; dieser Ort heißt **Locus** (Plural: Loci). Beim Menschen gibt es etwa 20.000–25.000 protein codierende Gene, verteilt auf 46 Chromosomen. Ein Gen kann in verschiedenen **Varianten** vorkommen — diese Varianten nennt man **Allele**. Beispiel: Das Gen für die Blütenfarbe bei Erbsen hat ein Allel für „rot” und ein Allel für „weiß”. Ein diploider Organismus trägt pro Gen zwei Allele (eines von jedem Elternteil), die am gleichen Locus auf den beiden **homologen Chromosomen** sitzen.

> **Merke:** Gen = DNA-Abschnitt für ein Merkmal/Produkt. Locus = Ort des Gens auf dem Chromosom. Allel = eine von mehreren Varianten eines Gens.

---

## Chromosom: verpackte DNA


Ein **Chromosom** ist ein langer DNA-Faden, der zusammen mit **Histonen** (Verpackungsproteinen) und weiteren Proteinen zu einer kompakten Struktur organisiert ist. So kann die DNA bei der Zellteilung sauber verteilt werden. Beim Menschen liegt die DNA im Zellkern in 46 Chromosomen vor (23 von der Mutter, 23 vom Vater). Vor der Zellteilung wird jede DNA verdoppelt; dann besteht jedes Chromosom aus zwei identischen **Schwesterchromatiden**, die am **Zentromer** zusammenhängen. Zwei Chromosomen, die dasselbe Set von Genen tragen (eins vom Vater, eins von der Mutter), heißen **homologe Chromosomen** — sie sind nicht identisch, aber entsprechen einander (gleiche Loci, oft unterschiedliche Allele).

| Begriff | Bedeutung |
|--------|-----------|
| **DNA** | Molekül mit der Erbinformation (Doppelhelix, Basen A, T, G, C) |
| **Gen** | DNA-Abschnitt, der für ein Merkmal/ein Produkt codiert |
| **Locus** | Ort eines Gens auf dem Chromosom |
| **Allel** | Eine konkrete Variante eines Gens (z. B. A oder a) |
| **Chromosom** | Verpackter DNA-Strang (mit Histonen); Träger vieler Gene |
| **Homologe Chromosomen** | Paar aus mütterlichem und väterlichem Chromosom mit gleichen Genorten |
| **Schwesterchromatiden** | Zwei identische Kopien eines Chromosoms nach Verdopplung, verbunden am Zentromer |

---

## Zusammenhang für die Vererbung


> **Merke:** DNA → Gene (mit Allelen) → auf Chromosomen verpackt. Meiose trennt homologe Chromosomen → je ein Allel pro Gen in der Keimzelle.`,
      lernziele: [
        "Den Zusammenhang zwischen DNA, Gen und Chromosom beschreiben.",
        "Gen und Allel unterscheiden und Locus erklären.",
        "Homologe Chromosomen und Schwesterchromatiden definieren und voneinander abgrenzen.",
      ],
      sections: [],
      merksätze: [
        "DNA = Erbinformation; Gen = funktioneller Abschnitt; Allel = Variante des Gens; Chromosom = verpackte DNA mit vielen Genen.",
        "Homologe Chromosomen = Paar (mütterlich/väterlich), gleiche Loci; Schwesterchromatiden = identische Kopien nach Replikation.",
      ],
      selfTest: [
        {
          question: "Was ist der Unterschied zwischen einem Gen und einem Allel?",
          options: [
            "Ein Gen ist ein Chromosom, ein Allel ist ein Gen.",
            "Ein Gen ist ein DNA-Abschnitt, der für ein Merkmal codiert; ein Allel ist eine von mehreren Varianten dieses Gens (z. B. A oder a).",
            "Gen und Allel sind dasselbe.",
            "Ein Allel ist immer dominant, ein Gen rezessiv.",
            "Gene liegen auf der RNA, Allele auf der DNA.",
          ],
          correctIndex: 1,
          explanation:
            "Ein **Gen** ist der DNA-Abschnitt an einem bestimmten **Locus**, der die Information für ein Merkmal oder Produkt trägt. Ein **Allel** ist eine konkrete **Variantenform** dieses Gens — z. B. das Allel für rote Blütenfarbe (A) vs. weiße Blütenfarbe (a). Ein diploider Organismus hat pro Gen zwei Allele (eines auf jedem homologen Chromosom).",
          difficulty: 1,
          tags: ["gen", "allel", "locus"],
        },
        {
          question: "Was sind homologe Chromosomen?",
          options: [
            "Zwei identische Kopien eines Chromosoms nach der Replikation.",
            "Ein Paar Chromosomen mit gleichen Genorten (Loci), von denen eines von der Mutter und eines vom Vater stammt; sie tragen oft unterschiedliche Allele.",
            "Die Geschlechtschromosomen X und Y.",
            "Chromosomen ohne Gene.",
            "Nur die Autosomen.",
          ],
          correctIndex: 1,
          explanation:
            "**Homologe Chromosomen** sind ein Paar: eines mütterlicher, eines väterlicher Herkunft. Sie tragen dieselben Gene an denselben Loci, aber oft **unterschiedliche Allele** (z. B. auf dem einen A, auf dem anderen a). Sie sind also **nicht identisch**. Identisch sind dagegen die **Schwesterchromatiden** (die beiden Kopien eines Chromosoms nach der DNA-Verdopplung).",
          difficulty: 1,
          tags: ["homologe chromosomen", "meiose"],
        },
        {
          question: "Wo liegt die Erbinformation bei Eukaryoten?",
          options: [
            "In den Ribosomen.",
            "In der DNA im Zellkern, an Histonen verpackt in Chromosomen.",
            "Nur in den Mitochondrien.",
            "In der Zellmembran.",
            "In der RNA außerhalb des Zellkerns.",
          ],
          correctIndex: 1,
          explanation:
            "Die **Erbinformation** liegt in der **DNA** im **Zellkern**. Bei Eukaryoten ist die DNA an **Histonen** verpackt und als **Chromosomen** organisiert. Mitochondrien haben eigene DNA (mtDNA), aber der Großteil der Erbinformation ist im Zellkern.",
          difficulty: 1,
          tags: ["dna", "zellkern", "chromosom"],
        },
        {
          question: "Wie viele proteincodierende Gene hat der Mensch ungefähr?",
          options: [
            "Etwa 200–500",
            "Etwa 2.000–5.000",
            "Etwa 20.000–25.000",
            "Etwa 200.000–250.000",
            "Etwa 6 Milliarden",
          ],
          correctIndex: 2,
          explanation:
            "Der Mensch hat etwa **20.000–25.000 proteincodierende Gene**, verteilt auf 46 Chromosomen. Die Zahl 6 Milliarden bezieht sich auf die Basenpaare der DNA, nicht auf die Gene.",
          difficulty: 1,
          tags: ["gen", "genom", "chromosom"],
        },
        {
          question: "Welche Basenpaarungsregel gilt in der DNA?",
          options: [
            "A-G und T-C",
            "A-T und G-C (komplementäre Basenpaarung)",
            "A-C und G-T",
            "A-U und G-C",
            "Alle Basen paaren mit allen",
          ],
          correctIndex: 1,
          explanation:
            "In der DNA gilt: **A paart mit T** (2 Wasserstoffbrücken) und **G paart mit C** (3 Wasserstoffbrücken). A-U gilt für RNA (Uracil ersetzt Thymin).",
          difficulty: 1,
          tags: ["basenpaarung", "dna", "chargaff"],
        },
      ],
      altfrage: {
        text: "In einer DNA-Probe beträgt der Adenin-Anteil 32 %. Wie hoch ist der Guanin-Anteil?",
        options: [
          { id: "a", text: "32 %" },
          { id: "b", text: "18 %" },
          { id: "c", text: "36 %" },
          { id: "d", text: "68 %" },
          { id: "e", text: "16 %" },
        ],
        correctOptionId: "b",
        explanation:
          "Nach den **Chargaff-Regeln** gilt: A = T und G = C. Wenn A = 32 %, dann T = 32 %. Zusammen: A + T = 64 %. Der Rest entfällt auf G + C = 100 % - 64 % = 36 %. Da G = C, ist **G = 18 %** (und C = 18 %). Diese Rechenaufgabe ist ein MedAT-Klassiker.",
      },
    },

    // ─── 2. Chromosomen: Aufbau und Karyotyp ──────────────────────────────────
    {
      id: "bio-4-02",
      title: "Chromosomen: Aufbau und Karyotyp",
      imageUrl: "/images/bms/bio-homologe-chromosomen.jpg",
      imageCaption: "Abb.: Homologe Chromosomenpaare im Karyogramm (OpenStax, CC BY 4.0)",
      stichworte: [
        "Zentromer",
        "Telomere",
        "p-Arm",
        "q-Arm",
        "Karyotyp",
        "Autosomen",
        "Gonosomen",
        "46,XX",
        "46,XY",
      ],
      content: `## Aufbau eines Chromosoms

{{DIAGRAM:dna-helix}}

Ein metaphasisches (in der Metaphase befindliches) Chromosom (in der Zellteilung sichtbar) besteht aus **zwei Schwesterchromatiden**, die am **Zentromer** zusammenhängen. Das Zentromer ist der Ansatzpunkt für die Spindelfasern; an ihm sitzt der **Kinetochor** (Proteinkomplex). Jede Chromatide hat zwei **Arme**: der **p-Arm** (petit = kurz) und der **q-Arm** (queue = lang). An den Enden der Chromosomen liegen die **Telomere** — repetitive DNA-Sequenzen (beim Menschen TTAGGG), die die Enden schützen und bei jeder Zellteilung etwas kürzer werden (ohne Telomerase (Enzym, das Telomere verlängert)).

> **Merke:** Zentromer verbindet die beiden Schwesterchromatiden; p-Arm = kurz, q-Arm = lang; Telomere schützen die Enden.

{{IMAGE}}

---

## Chromatinstruktur: Euchromatin und Heterochromatin

DNA liegt im Zellkern nicht nackt vor, sondern ist um **Histonproteine** gewickelt. Die Grundeinheit heißt **Nukleosom**: ~147 bp DNA umwickeln ein Histonoktamer (je 2× H2A, H2B, H3, H4). Zwischen den Nukleosomen verbindet **Linker-DNA** (~50 bp) die Einheiten; Histon H1 stabilisiert die übergeordnete Faltung. Je nach Verpackungsgrad unterscheidet man zwei Chromatinzustände:

- **Euchromatin**: Locker gepackt, transkriptionell **aktiv** — Gene werden abgelesen. Hell im Elektronenmikroskop, repliziert früh in der S-Phase
- **Heterochromatin**: Dicht gepackt, transkriptionell **inaktiv** — Gene sind stillgelegt. Dunkel im EM, repliziert spät. Zwei Subtypen:
  - **Konstitutives Heterochromatin**: Dauerhaft kondensiert (z. B. Zentromer-Regionen, Telomere). Keine Gene
  - **Fakultatives Heterochromatin**: Reversibel stillgelegt, kann reaktiviert werden. Beispiel: **Barr-Körperchen** — das inaktivierte zweite X-Chromosom bei Frauen (Lyon-Hypothese)

> **Merke:** Euchromatin = locker, aktiv. Heterochromatin = dicht, inaktiv. Barr-Körperchen = fakultatives Heterochromatin (inaktiviertes X bei XX).

---

## Chromosomen-Banding (G-Banding)

Zur Identifikation einzelner Chromosomen wird die **G-Banding-Technik** (Giemsa-Banding) eingesetzt: Chromosomen werden mit **Trypsin** angedaut (denaturiert AT-reiche Regionen) und anschließend mit **Giemsa-Farbstoff** gefärbt. Daraus entsteht ein charakteristisches **Bandenmuster** aus hellen und dunklen Streifen:

- **Dunkle Banden** (G-positiv): AT-reich, genarm, spät replizierend, Heterochromatin
- **Helle Banden** (G-negativ): GC-reich, genreich, früh replizierend, Euchromatin

Jede Bande erhält eine **Nummer** (z. B. 21q22 = Chromosom 21, langer Arm, Region 2, Bande 2). Mit ~400–850 Banden pro haploidem Satz lassen sich Deletionen, Duplikationen und Translokationen ab ~5–10 Mb Größe erkennen. Für feinere Auflösung: **FISH** (Fluoreszenz-in-situ-Hybridisierung) mit fluoreszenzmarkierten DNA-Sonden.

> **Merke:** G-Banding: Trypsin + Giemsa → Bandenmuster. Dunkle Banden = AT-reich, genarm. Helle Banden = GC-reich, genreich. Nomenklatur: Chromosom → Arm → Region → Bande (z. B. 21q22).

---

## Autosomen und Gonosomen


Beim Menschen gibt es **46 Chromosomen** in jeder Körperzelle (diploider Satz): **22 Paare Autosomen** (Chromosomen 1–22, nicht geschlechtsbestimmend) und **ein Paar Geschlechtschromosomen** (**Gonosomen**): **XX** bei Frauen, **XY** bei Männern. Die Gonosomen bestimmen das genetische Geschlecht: Das **Y-Chromosom** trägt das **SRY-Gen** (Sex-determining Region Y), das die männliche Geschlechtsentwicklung auslöst. Fehlt das Y, entwickelt sich weiblich (z. B. 46,XX oder 45,X).

> **Merke:** 46 Chromosomen = 22 Autosomenpaare + 1 Gonosomenpaar. XX = weiblich, XY = männlich; Geschlecht durch Y-Chromosom (SRY) bestimmt.

---

## Karyotyp, Notation und Karyogramm-Erstellung


{{DIAGRAM:mitosis}}

Der **Karyotyp** ist die geordnete Darstellung aller Chromosomen einer Zelle (nach Größe, Zentromerlage, Färbemuster). Er wird in der **Metaphase** der Mitose erstellt (Chromosomen sind dann maximal kondensiert). Die **Karyotyp-Notation** gibt zuerst die **Chromosomenzahl**, dann die **Gonosomen** und bei Abweichungen die **Aberration** (chromosomale Abweichung) an:

- **46,XX** = weiblich, normal
- **46,XY** = männlich, normal
- **47,XX,+21** = weiblich, Trisomie 21 (Down-Syndrom) — drei Kopien von Chromosom 21
- **47,XXY** = Klinefelter-Syndrom (männlich, ein zusätzliches X)
- **45,X** = Turner-Syndrom (weiblich, ein X fehlt)

**Karyogramm-Erstellung:** Lymphozyten aus peripherem Blut werden mit **Phytohämagglutinin** (PHA, Mitogen) zur Teilung angeregt → nach ~72 h Zugabe von **Colchicin** (hemmt Spindelapparat, arretiert Zellen in Metaphase) → hypotone Lösung (Zellen schwellen, Chromosomen spreizen) → Fixierung → G-Banding → Mikroskopie → Chromosomen werden digital sortiert und als **Ideogramm** (schematische Karyotyp-Darstellung) angeordnet.

> **Merke:** Karyogramm: Lymphozyten + PHA (Mitose-Induktion) + Colchicin (Metaphase-Arrest) + G-Banding → Chromosomen nach Größe und Zentromerlage ordnen.

---

## Klinische Chromosomenaberrationen

Chromosomenaberrationen (numerisch oder strukturell) verursachen schwerwiegende klinische Syndrome:

| Aberration | Karyotyp | Merkmale |
|---|---|---|
| **Trisomie 21** (Down) | 47,XX/XY,+21 | Geistige Retardierung, Epikanthus (Lidfalte), Vierfingerfurche, AV-Kanal (Herzfehler), erhöhtes Leukämie-Risiko. Häufigste Trisomie (~1:700) |
| **Trisomie 18** (Edwards) | 47,XX/XY,+18 | Schwere Fehlbildungen, Faust mit überkreuzenden Fingern, ~90 % sterben im 1. Lebensjahr |
| **Trisomie 13** (Pätau) | 47,XX/XY,+13 | Lippen-Kiefer-Gaumenspalte, Holoprosenzephalie, Polydaktylie (überzählige Finger) |
| **Turner** | 45,X | Weiblich, Kleinwuchs, Schildthorax, Infertilität (Streifengonaden), Aortenisthmusstenose |
| **Klinefelter** | 47,XXY | Männlich, Hochwuchs, Gynäkomastie (Brustentwicklung), Infertilität, Hypogonadismus |
| **Triple-X** | 47,XXX | Weiblich, meist klinisch unauffällig, gelegentlich Lernprobleme |

**Ursache numerischer Aberrationen:** Meist **Non-Disjunction** (Nicht-Trennung homologer Chromosomen in Meiose I oder Schwesterchromatiden in Meiose II). Risiko steigt mit mütterlichem Alter (besonders Trisomie 21: ~1:1500 bei 20 Jahren, ~1:100 bei 40 Jahren).

> **Merke:** Non-Disjunction = häufigste Ursache numerischer Aberrationen. Mütterliches Alter ↑ → Trisomie-Risiko ↑. Trisomie 21 häufigste, Turner (45,X) häufigste Monosomie.`,
      lernziele: [
        "Aufbau eines Chromosoms (Zentromer, Arme, Telomere) beschreiben.",
        "Autosomen und Gonosomen unterscheiden und Karyotyp-Notation anwenden.",
      ],
      sections: [],
      merksätze: [
        "Zentromer verbindet Schwesterchromatiden; p-Arm kurz, q-Arm lang; Telomere an den Enden.",
        "46,XX = weiblich; 46,XY = männlich. Trisomie 21 = 47,XX,+21 oder 47,XY,+21.",
      ],
      selfTest: [
        {
          question: "Welche Karyotyp-Notation beschreibt eine Frau mit Down-Syndrom?",
          options: ["46,XX", "47,XY,+21", "47,XX,+21", "45,X", "47,XXY"],
          correctIndex: 2,
          explanation:
            "Trisomie 21 (Down-Syndrom) bedeutet drei Kopien von Chromosom 21. Die Notation gibt zuerst die Gesamtzahl der Chromosomen an (47), dann die Gonosomen (XX = weiblich), dann die Aberration (+21). 47,XY,+21 wäre ein Mann mit Trisomie 21.",
          difficulty: 1,
          tags: ["karyotyp", "trisomie 21", "down-syndrom"],
        },
        {
          question: "Was verbindet die beiden Schwesterchromatiden eines Chromosoms?",
          options: [
            "Die Telomere",
            "Das Zentromer",
            "Der p-Arm",
            "Die Kernmembran",
            "Die Spindelfasern",
          ],
          correctIndex: 1,
          explanation:
            "Die beiden **Schwesterchromatiden** (identische DNA-Kopien nach Replikation) sind am **Zentromer** verbunden. Dort sitzt auch der **Kinetochor**, an dem die Spindelfasern bei der Zellteilung angreifen.",
          difficulty: 1,
          tags: ["zentromer", "schwesterchromatiden", "chromosom"],
        },
        {
          question: "Was bedeutet die Karyotyp-Notation 47,XXY?",
          options: [
            "Weiblich mit Trisomie 21",
            "Männlich, normal",
            "Klinefelter-Syndrom (männlich, ein zusätzliches X)",
            "Turner-Syndrom",
            "Weiblich mit drei X-Chromosomen",
          ],
          correctIndex: 2,
          explanation:
            "**47,XXY** = 47 Chromosomen, Gonosomen XXY → **Klinefelter-Syndrom** (phänotypisch männlich, da Y vorhanden, aber mit einem zusätzlichen X-Chromosom). Turner wäre 45,X; Triple-X wäre 47,XXX.",
          difficulty: 1,
          tags: ["karyotyp", "klinefelter", "gonosomen"],
        },
        {
          question: "Was sind Telomere und welche Funktion haben sie?",
          options: [
            "Proteine, die die DNA verpacken",
            "Repetitive DNA-Sequenzen an den Chromosomenenden, die die Enden vor Abbau schützen",
            "Enzyme, die die DNA verdoppeln",
            "Strukturen, die die Geschlechtschromosomen verbinden",
            "Teile der Kernmembran",
          ],
          correctIndex: 1,
          explanation:
            "**Telomere** sind repetitive DNA-Sequenzen (beim Menschen **TTAGGG**) an den **Chromosomenenden**. Sie schützen die Enden vor Abbau und Fusion. Bei jeder Zellteilung werden sie etwas kürzer (ohne Telomerase).",
          difficulty: 1,
          tags: ["telomere", "chromosom", "TTAGGG"],
        },
        {
          question: "In welcher Phase des Zellzyklus wird der Karyotyp erstellt?",
          options: [
            "In der S-Phase (DNA-Replikation)",
            "In der G1-Phase",
            "In der Metaphase der Mitose (Chromosomen maximal kondensiert)",
            "In der Interphase",
            "In der Telophase",
          ],
          correctIndex: 2,
          explanation:
            "Der Karyotyp wird in der **Metaphase** erstellt, weil die Chromosomen dann **maximal kondensiert** und unter dem Mikroskop am besten sichtbar und unterscheidbar sind.",
          difficulty: 2,
          tags: ["karyotyp", "metaphase", "zellzyklus"],
        },
      ],
      altfrage: {
        text: "Der Karyotyp 47,XXY entspricht welchem Syndrom?",
        options: [
          { id: "a", text: "Turner-Syndrom" },
          { id: "b", text: "Down-Syndrom (Trisomie 21)" },
          { id: "c", text: "Klinefelter-Syndrom" },
          { id: "d", text: "Edwards-Syndrom (Trisomie 18)" },
          { id: "e", text: "Pätau-Syndrom (Trisomie 13)" },
        ],
        correctOptionId: "c",
        explanation:
          "Der Karyotyp **47,XXY** bedeutet: 47 Chromosomen, zwei X- und ein Y-Chromosom — das ist das **Klinefelter-Syndrom**. Betroffene sind phänotypisch männlich (Y vorhanden), aber mit überzähligem X-Chromosom. Typische Merkmale: Hochwuchs, Gynäkomastie, Infertilität. Turner-Syndrom = **45,X** (A falsch). Down-Syndrom = **47,XX,+21** oder **47,XY,+21** (B falsch).",
      },
    },

    // ─── 3. Zellzyklus, Mitose und Meiose ─────────────────────────────────────
    {
      id: "bio-4-03",
      title: "Zellzyklus, Mitose und Meiose",
      imageUrl: "/images/bms/bio-zellzyklus.jpg",
      imageCaption: "Abb.: Phasen des Zellzyklus mit Interphase und M-Phase (OpenStax, CC BY 4.0)",
      stichworte: [
        "Mitose",
        "Meiose",
        "Zellzyklus",
        "Crossing-over",
        "Rekombination",
        "Nicht-Disjunktion",
        "Keimzelle",
        "haploid",
        "diploid",
      ],
      content: `## Zellzyklus und Chromosomenzahl

{{DIAGRAM:cell-cycle}}

Der **Zellzyklus** umfasst die Vorbereitung der Zellteilung und die Teilung selbst. In der **S-Phase** wird die DNA verdoppelt; danach hat jede Chromosom zwei Schwesterchromatiden. **Diploid (2n)** bedeutet: zwei Chromosomensätze (beim Menschen 2n = 46). **Haploid (n)** bedeutet: ein Chromosomensatz (beim Menschen n = 23). Körperzellen sind diploid; Keimzellen müssen haploid sein, damit nach der Befruchtung (Eizelle + Spermium) wieder 2n = 46 entsteht.

> **Merke:** Diploid (2n) = zwei Sätze; haploid (n) = ein Satz. Mensch: 2n = 46 in Körperzellen, n = 23 in Keimzellen.

{{IMAGE}}

---

## Mitose: Teilung der Körperzellen


{{DIAGRAM:mitosis}}

**Mitose** dient der Vermehrung von Zellen bei Wachstum und Erneuerung. Ablauf (vereinfacht): Die Chromosomen kondensieren, die Kernmembran löst sich auf, die Chromosomen ordnen sich in der Äquatorialebene (Zellemitte) an (Metaphase), die **Schwesterchromatiden** werden getrennt und zu den Polen gezogen (Anaphase), zwei neue Kerne und Zellen entstehen. **Ergebnis:** Zwei Tochterzellen, jede mit derselben Chromosomenzahl (2n) und genetisch identisch zur Mutterzelle. Es gibt **keine** Reduktion der Chromosomenzahl und **kein** Crossing-over.

> **Merke:** Mitose: 1 Zelle (2n) → 2 Zellen (je 2n); genetisch identisch; Trennung der Schwesterchromatiden.

---

## Meiose: Entstehung der Keimzellen


{{DIAGRAM:meiosis}}

**Meiose** dient der Bildung von **Keimzellen** (Gameten). Sie besteht aus **zwei aufeinanderfolgenden Teilungen** (Meiose I und Meiose II), wobei nur vor der ersten Teilung die DNA verdoppelt wird.

**Meiose I:** Die **homologen Chromosomen** paaren sich (jedes Chromosom hat bereits zwei Schwesterchromatiden). In der **Prophase I** kann **Crossing-over** stattfinden: Homologe Chromosomen tauschen Stücke aus → **Rekombination** (neue Allelkombinationen). In der Anaphase I werden die **homologen Chromosomen** getrennt (nicht die Schwesterchromatiden!) — jede Tochterzelle erhält je ein Chromosom jedes Paars. Ergebnis: zwei Zellen mit je **haploidem** Chromosomensatz (n), aber jede Chromosom hat noch zwei Chromatiden.

**Meiose II:** In beiden Zellen werden die **Schwesterchromatiden** getrennt (ähnlich wie in der Mitose). Ergebnis: **vier Keimzellen** (bei Spermien) bzw. eine Eizelle plus Polkörper (kleine, funktionslose Restzellen) (bei Eizellen), alle **haploid (n)**.

> **Merke:** Meiose I: Trennung der **homologen Chromosomen** (Reduktion 2n → n); Crossing-over in Prophase I. Meiose II: Trennung der **Schwesterchromatiden** (wie Mitose). Ergebnis: 4 haploide Zellen (bzw. 1 Eizelle + Polkörper).

---

## Crossing-over und Rekombination


**Crossing-over** (in der Prophase I der Meiose): Zwei homologe Chromosomen (je mit zwei Chromatiden) liegen gepaart; dabei können sich Chromatidenstücke kreuzen und austauschen. Dadurch entstehen **Rekombinanten** — Chromosomen mit neuer Kombination von Allelen. Gene auf demselben Chromosom sind zunächst **gekoppelt**; durch Crossing-over können sie dennoch neu kombiniert werden. Die **Rekombinationsfrequenz** (wie oft zwei Gene getrennt werden) hängt vom Abstand der Gene ab und wird in **centiMorgan (cM)** (Einheit für genetischen Abstand) angegeben (1 cM ≈ 1 % Rekombination). Gene mit 50 % Rekombination verhalten sich wie unabhängig (entweder auf verschiedenen Chromosomen oder sehr weit auseinander).

> **Merke:** Crossing-over = Austausch zwischen Chromatiden homologer Chromosomen in Prophase I → Rekombination, genetische Vielfalt. Genkopplung wird dadurch teilweise aufgehoben.

---

## Nicht-Disjunktion und Aneuploidie


**Nicht-Disjunktion** bedeutet: Bei der Meiose (oder seltener Mitose) trennen sich Chromosomen oder Chromatiden nicht korrekt. Eine Keimzelle erhält dann z. B. zwei Kopien eines Chromosoms statt einer, eine andere erhält keine. Nach Befruchtung: **Trisomie** (3 Kopien eines Chromosoms, z. B. Trisomie 21 = Down-Syndrom) oder **Monosomie** (nur 1 Kopie, z. B. 45,X = Turner-Syndrom). Das Risiko für Nicht-Disjunktion (besonders Trisomie 21) steigt mit dem **mütterlichen Alter**.

> **Merke:** Nicht-Disjunktion = fehlerhafte Trennung in Meiose (oder Mitose) → Trisomie oder Monosomie. Trisomie 21 häufigste lebensfähige Autosom-Trisomie; Risiko steigt mit mütterlichem Alter.

---

## Mitose vs. Meiose im Überblick

| Merkmal | Mitose | Meiose |
|--------|--------|--------|
| **Zweck** | Vermehrung von Körperzellen | Bildung von Keimzellen |
| **Ausgang** | 1 Zelle (2n) | 1 Zelle (2n) |
| **Ergebnis** | 2 Zellen (je 2n) | 4 Zellen (je n) bzw. 1 Eizelle + Polkörper |
| **Trennung in 1. Teilung** | Schwesterchromatiden | Homologe Chromosomen |
| **Crossing-over** | Nein | Ja (Prophase I) |
| **Genetische Identität** | Tochterzellen identisch | Keimzellen genetisch verschieden (Rekombination, zufällige Verteilung) |`,
      lernziele: [
        "Mitose und Meiose in Zweck, Ablauf und Ergebnis unterscheiden.",
        "Meiose I (Trennung homologer Chromosomen) und Meiose II (Trennung der Schwesterchromatiden) beschreiben.",
        "Crossing-over und Rekombination erklären sowie Nicht-Disjunktion und Aneuploidie zuordnen.",
      ],
      sections: [],
      merksätze: [
        "Mitose: Schwesterchromatiden trennen → 2 gleiche Tochterzellen (2n). Meiose I: homologe Chromosomen trennen → Reduktion auf n; Meiose II: Schwesterchromatiden trennen.",
        "Crossing-over in Prophase I der Meiose → Rekombination. Nicht-Disjunktion → Trisomie/Monosomie.",
      ],
      selfTest: [
        {
          question: "Was wird in der Anaphase I der Meiose getrennt?",
          options: [
            "Die Schwesterchromatiden",
            "Die homologen Chromosomen",
            "Die Zentromere",
            "Die Telomere",
            "Die DNA-Stränge",
          ],
          correctIndex: 1,
          explanation:
            "In der **Meiose I** werden die **homologen Chromosomen** (jeweils mit zwei Schwesterchromatiden) getrennt — jede Tochterzelle erhält je ein Chromosom jedes Paars, also den haploiden Satz. Die **Schwesterchromatiden** werden erst in der **Meiose II** getrennt (dann ähnlich wie in der Mitose).",
          difficulty: 1,
          tags: ["meiose", "anaphase", "homologe chromosomen"],
        },
        {
          question: "Wo findet Crossing-over statt?",
          options: [
            "In der Mitose",
            "In der Prophase I der Meiose",
            "In der Anaphase II der Meiose",
            "Nur in der S-Phase",
            "In der Interphase",
          ],
          correctIndex: 1,
          explanation:
            "**Crossing-over** (Austausch von Chromosomenstücken zwischen homologen Chromosomen) findet in der **Prophase I der Meiose** statt, wenn die homologen Chromosomen gepaart sind. Es führt zu **Rekombination** und erhöhter genetischer Vielfalt. In der Mitose gibt es kein Crossing-over.",
          difficulty: 1,
          tags: ["crossing-over", "meiose", "rekombination"],
        },
        {
          question:
            "Wie viele Tochterzellen entstehen bei der Meiose und welchen Chromosomensatz haben sie?",
          options: [
            "2 Zellen, diploid (2n)",
            "4 Zellen, diploid (2n)",
            "4 Zellen, haploid (n)",
            "2 Zellen, haploid (n)",
            "1 Zelle, tetraploid (4n)",
          ],
          correctIndex: 2,
          explanation:
            "Die Meiose erzeugt **4 haploide Zellen (n)** aus einer diploiden Ausgangszelle (2n). Meiose I halbiert den Chromosomensatz (2n → n), Meiose II trennt die Schwesterchromatiden. Bei der Oogenese entsteht allerdings nur 1 Eizelle + 3 Polkörper.",
          difficulty: 1,
          tags: ["meiose", "haploid", "keimzelle"],
        },
        {
          question: "Wodurch steigt das Risiko für Trisomie 21 (Down-Syndrom)?",
          options: [
            "Durch Crossing-over",
            "Durch das Alter des Vaters",
            "Durch steigendes mütterliches Alter (Nicht-Disjunktion in der Meiose)",
            "Durch zu viel Mitose",
            "Durch X-Inaktivierung",
          ],
          correctIndex: 2,
          explanation:
            "Das Risiko für **Nicht-Disjunktion** (fehlerhafte Chromosomentrennung in der Meiose) steigt mit dem **mütterlichen Alter**. Eizellen verharren jahrzehntelang in der Meiose I; je älter die Frau, desto häufiger Trennungsfehler → Trisomie 21.",
          difficulty: 2,
          tags: ["trisomie 21", "nicht-disjunktion", "mütterliches alter"],
        },
        {
          question:
            "Was ist der entscheidende Unterschied zwischen Mitose und Meiose I bezüglich der Chromosomentrennung?",
          options: [
            "In der Mitose werden homologe Chromosomen getrennt, in Meiose I die Schwesterchromatiden",
            "In der Mitose werden Schwesterchromatiden getrennt, in Meiose I die homologen Chromosomen",
            "Beide trennen Schwesterchromatiden",
            "Beide trennen homologe Chromosomen",
            "Nur in der Meiose II werden Chromosomen getrennt",
          ],
          correctIndex: 1,
          explanation:
            "**Mitose:** Trennung der **Schwesterchromatiden** → 2 identische Tochterzellen (2n). **Meiose I:** Trennung der **homologen Chromosomen** → Reduktion auf haploid (n). Meiose II ähnelt der Mitose (Trennung der Schwesterchromatiden).",
          difficulty: 1,
          tags: ["mitose", "meiose", "vergleich"],
        },
      ],
      altfrage: {
        text: "In welcher Phase der Meiose findet das Crossing-over statt?",
        options: [
          { id: "a", text: "Prophase II" },
          { id: "b", text: "Metaphase I" },
          { id: "c", text: "Prophase I (Pachytän)" },
          { id: "d", text: "Anaphase I" },
          { id: "e", text: "Interphase (S-Phase)" },
        ],
        correctOptionId: "c",
        explanation:
          "Das **Crossing-over** (Rekombination) findet in der **Prophase I** statt, genauer im **Pachytän** (Pachytän-Stadium). Dabei lagern sich homologe Chromosomen als **Bivalente** (Tetraden) aneinander und tauschen Chromatiden-Abschnitte über **Chiasmata** aus. Dies erhöht die genetische Vielfalt der Keimzellen. In der Metaphase I sind die Bivalente bereits an der Äquatorialplatte ausgerichtet (B falsch). In der Prophase II und Anaphase I findet kein Crossing-over statt.",
      },
    },

    // ─── 4. Mendelsche Regeln ─────────────────────────────────────────────────
    {
      id: "bio-4-04",
      title: "Mendelsche Regeln",
      imageUrl: "/images/bms/bio-zellzyklus.jpg",
      imageCaption:
        "Abb.: Kreuzungsschema nach Mendel — Vererbung über Generationen (OpenStax, CC BY 4.0)",
      stichworte: [
        "Uniformitätsregel",
        "Spaltungsregel",
        "Unabhängigkeitsregel",
        "F₁",
        "F₂",
        "Punnett-Quadrat",
        "monohybrid",
        "dihybrid",
        "Testkreuzung",
        "Mukoviszidose",
        "Huntington",
        "Epistasie",
      ],
      content: `## Warum bekommt ein Viertel der Kinder Mukoviszidose?

Beide Eltern sind gesund. Kein Familienmitglied war je auffällig. Trotzdem wird jedes vierte Kind mit **Mukoviszidose** (zystische Fibrose) geboren — einer schweren Lungenerkrankung. Die Erklärung liegt in drei Regeln, die der Augustinermönch Gregor Mendel 1865 an Erbsenpflanzen entdeckte. Sie gelten unverändert für den Menschen und sind die Grundlage jeder genetischen Beratung.

Die Meiose (vorheriges Kapitel) liefert den Mechanismus: Während der Keimzellbildung werden die Allele auf die Gameten verteilt. Mendels Regeln beschreiben, **welche Kombinationen** dabei entstehen und in **welchen Verhältnissen** sie in der nächsten Generation auftreten.

---

## 1. Mendelsche Regel — Uniformitätsregel

{{DIAGRAM:meiosis}}

Kreuzt man zwei **reinerbige (homozygote)** Eltern mit unterschiedlichen Merkmalen, sind alle Nachkommen der **F₁-Generation** (erste Filialgeneration) **uniform** — sie haben denselben Genotyp und denselben Phänotyp.

**Kreuzungsschema (monohybrid):**

| | **A** (Vater) | **A** (Vater) |
|---|---|---|
| **a** (Mutter) | Aa | Aa |
| **a** (Mutter) | Aa | Aa |

Ergebnis: **100 % Aa** — alle F₁ heterozygot, alle zeigen das dominante Merkmal.

**Klinisches Beispiel:** Beide Eltern homozygot — einer AA (gesund, kein CF-Träger), einer aa (Mukoviszidose). Alle Kinder sind **Aa** (gesunde Träger, Carrier).

> **Merke:** 1. Mendelsche Regel: Homozygote Eltern (AA × aa) → F₁ zu 100 % uniform heterozygot (Aa). Gilt für jedes Merkmal mit zwei Allelen.

---

## 2. Mendelsche Regel — Spaltungsregel

Kreuzt man die **F₁-Hybriden** (Aa × Aa), **spaltet** die F₂-Generation in festen Verhältnissen auf. Hier liegt der Schlüssel zur Mukoviszidose-Frage.

### Punnett-Quadrat (monohybrid, 2×2)

| | **A** (Vater) | **a** (Vater) |
|---|---|---|
| **A** (Mutter) | **AA** | **Aa** |
| **a** (Mutter) | **Aa** | **aa** |

**Genotyp-Verhältnis:** 1 AA : 2 Aa : 1 aa = **1 : 2 : 1**

**Phänotyp-Verhältnis** (bei vollständiger Dominanz): 3 dominant : 1 rezessiv = **3 : 1**

Zurück zum Mukoviszidose-Beispiel: Beide Eltern sind **Aa** (gesunde Träger). Die Wahrscheinlichkeit für ein krankes Kind (aa) beträgt **1/4 = 25 %**. Drei von vier Kindern sind phänotypisch gesund (1 AA + 2 Aa), aber zwei davon sind Träger.

### Rückkreuzung (Testkreuzung)

Wie unterscheidet man AA von Aa, wenn beide denselben Phänotyp zeigen? Durch **Testkreuzung** mit einem homozygot rezessiven Partner (aa):

- **AA × aa** → alle Nachkommen Aa (100 % dominant)
- **Aa × aa** → 50 % Aa, 50 % aa (Aufspaltung **1 : 1**)

Spaltet die Nachkommenschaft auf, war der Elternteil **heterozygot**.

> **Merke:** 2. Mendelsche Regel: Aa × Aa → Genotyp 1:2:1, Phänotyp 3:1. Testkreuzung mit aa entlarvt den Genotyp: 100 % dominant → AA; Aufspaltung 1:1 → Aa.

---

## 3. Mendelsche Regel — Unabhängigkeitsregel

{{DIAGRAM:pedigree-analysis}}

Betrachtet man **zwei Merkmale** gleichzeitig (dihybrider Erbgang), werden Gene auf **verschiedenen Chromosomen** unabhängig voneinander vererbt. Die unabhängige Verteilung in der Meiose I (zufällige Orientierung der Bivalente) ist der zelluläre Mechanismus dahinter.

### Dihybrides Punnett-Quadrat (4×4)

Kreuzung **RrGg × RrGg** — jeder Elternteil bildet vier Gametentypen: RG, Rg, rG, rg (je 25 %).

| | **RG** | **Rg** | **rG** | **rg** |
|---|---|---|---|---|
| **RG** | RRGG | RRGg | RrGG | RrGg |
| **Rg** | RRGg | RRgg | RrGg | Rrgg |
| **rG** | RrGG | RrGg | rrGG | rrGg |
| **rg** | RrGg | Rrgg | rrGg | rrgg |

**Phänotyp-Verhältnis:** 9 R_G_ : 3 R_gg : 3 rrG_ : 1 rrgg = **9 : 3 : 3 : 1**

**Produktregel:** P(rrgg) = P(rr) × P(gg) = 1/4 × 1/4 = **1/16**

### Ausnahme: Genkopplung

Gene auf **demselben Chromosom**, die nahe beieinander liegen, werden **gemeinsam vererbt** (Kopplung). Dann weicht das Verhältnis von 9:3:3:1 ab — Parentaltypen überwiegen. Nur durch **Crossing-over** (Prophase I) können gekoppelte Gene rekombiniert werden.

> **Merke:** 3. Mendelsche Regel: Zwei unabhängige Gene (RrGg × RrGg) → F₂ 9:3:3:1. Voraussetzung: Gene auf verschiedenen Chromosomen oder nicht gekoppelt. Bei Kopplung überwiegen Parentaltypen.

---

## Klinische Erbgänge — Mendel in der Medizin

Die Mendelschen Regeln erklären die Vererbungsmuster monogener Erkrankungen:

| Erbgang | Beispiel | Merkmal |
|---------|----------|---------|
| **Autosomal-rezessiv** | Mukoviszidose (CFTR-Gen) | Beide Allele defekt nötig (aa); Träger (Aa) gesund; Eltern Aa × Aa → 25 % betroffen |
| **Autosomal-dominant** | Chorea Huntington (HTT-Gen) | Ein defektes Allel reicht (Aa); 50 % Risiko bei Aa × aa; vollständige Penetranz |
| **Kodominanz** | ABO-Blutgruppen | I^A und I^B gleichzeitig exprimiert → Blutgruppe AB (→ nächstes Kapitel) |

**Mukoviszidose** ist die häufigste autosomal-rezessive Erkrankung bei Europäern. Etwa 1 von 25 Personen ist Träger (Aa). P(aa) = 1/4 bei Aa × Aa — exakt Mendels Spaltungsregel.

**Huntington** zeigt autosomal-dominante Vererbung: Ein Elternteil Aa, der andere aa → 50 % der Kinder betroffen. Die Krankheit manifestiert sich erst im Erwachsenenalter (Spätmanifestation), die Penetranz beträgt 100 %.

> **Merke:** Mukoviszidose = autosomal-rezessiv (Aa × Aa → 25 % aa). Huntington = autosomal-dominant (Aa × aa → 50 % Aa). Blutgruppen AB = Kodominanz.

---

## Abweichungen von Mendel — kurzer Überblick

Nicht alle Merkmale folgen dem einfachen Mendel-Schema. Drei wichtige Phänomene:

- **Epistasie** (Überdeckung): Ein Gen maskiert die Wirkung eines anderen Gens. Beispiel: Labrador-Fellfarbe — Gen E (epistatisch) bestimmt, ob Pigment eingelagert wird; Gen B die Farbe (schwarz/braun). Genotyp ee = immer gelb, unabhängig von B. F₂-Verhältnis verschiebt sich (z. B. 9:3:4 statt 9:3:3:1).
- **Polygenie** (polygene Vererbung): Viele Gene beeinflussen ein Merkmal additiv → kontinuierliche Verteilung (Körpergröße, Hautfarbe). Keine diskreten Mendel-Klassen.
- **Pleiotropie**: Ein Gen beeinflusst mehrere Merkmale. Beispiel: Sichelzellanämie — eine Mutation (Glu→Val im β-Globin) → sichelförmige Erythrozyten, Anämie, Milzinfarkte, Malariaschutz bei Heterozygoten.

> **Merke:** Epistasie = ein Gen maskiert ein anderes (veränderte Spaltungsverhältnisse). Polygenie = viele Gene → ein Merkmal. Pleiotropie = ein Gen → viele Merkmale.

---

## Zusammenfassung der Mendelschen Regeln

| Regel | Kreuzung | Ergebnis |
|-------|----------|----------|
| **1. Uniformität** | AA × aa | F₁: 100 % Aa (uniform) |
| **2. Spaltung** | Aa × Aa | F₂: Genotyp 1:2:1, Phänotyp 3:1 |
| **3. Unabhängigkeit** | RrGg × RrGg | F₂: 9:3:3:1 (bei freier Kombination) |
| **Testkreuzung** | ? × aa | 100 % dominant → AA; 1:1 → Aa |`,
      lernziele: [
        "Die drei Mendelschen Regeln formulieren und auf Kreuzungsbeispiele anwenden.",
        "Punnett-Quadrat für mono- und dihybride Erbgänge zeichnen und Verhältnisse ableiten.",
      ],
      sections: [],
      merksätze: [
        "1. Uniformität: AA × aa → 100 % Aa. 2. Spaltung: Aa × Aa → F₂ 3:1 Phänotyp, 1:2:1 Genotyp. 3. Unabhängigkeit: RrGg × RrGg → 9:3:3:1.",
      ],
      selfTest: [
        {
          question: "Bei Aa × Aa beträgt das Phänotyp-Verhältnis in F₂ (dominant-rezessiv):",
          options: ["1:2:1", "1:1", "3:1", "9:3:3:1", "1:1:1:1"],
          correctIndex: 2,
          explanation:
            "Bei dominant-rezessivem Erbgang (A dominant über a) zeigen AA und Aa denselben Phänotyp. In F₂ entstehen 1/4 AA, 2/4 Aa, 1/4 aa → Phänotyp 3 dominant : 1 rezessiv = **3:1**. Das **Genotyp**-Verhältnis ist 1:2:1.",
          difficulty: 1,
          tags: ["mendel", "spaltungsregel", "f2"],
        },
        {
          question: "Was besagt die 1. Mendelsche Regel (Uniformitätsregel)?",
          options: [
            "In F₂ spalten die Merkmale 3:1 auf",
            "Kreuzt man reinerbige (homozygote) Eltern mit verschiedenen Merkmalen, sind alle F₁-Nachkommen uniform (gleicher Genotyp und Phänotyp)",
            "Gene auf verschiedenen Chromosomen werden unabhängig vererbt",
            "Alle Nachkommen sind homozygot",
            "Dominante Allele sind häufiger als rezessive",
          ],
          correctIndex: 1,
          explanation:
            "Die **1. Mendelsche Regel** besagt: Kreuzt man **reinerbige** Eltern (AA × aa), sind alle F₁-Nachkommen **uniform** heterozygot (Aa) und zeigen den gleichen Phänotyp (das dominante Merkmal).",
          difficulty: 1,
          tags: ["mendel", "uniformitätsregel", "f1"],
        },
        {
          question: "Bei einem dihybriden Erbgang (RrGg × RrGg) beträgt das Phänotyp-Verhältnis:",
          options: ["3:1", "1:2:1", "1:1:1:1", "9:3:3:1", "1:1"],
          correctIndex: 3,
          explanation:
            "Bei zwei unabhängigen Genen (dihybrid) ergibt RrGg × RrGg das Phänotyp-Verhältnis **9:3:3:1** (9 beide dominant, 3 erstes dominant/zweites rezessiv, 3 umgekehrt, 1 beide rezessiv). Das Punnett-Quadrat hat 4×4 = 16 Felder.",
          difficulty: 2,
          tags: ["mendel", "dihybrid", "9:3:3:1"],
        },
        {
          question: "Was ist die Voraussetzung für die 3. Mendelsche Regel (Unabhängigkeitsregel)?",
          options: [
            "Die Gene müssen auf demselben Chromosom liegen",
            "Die Gene müssen auf verschiedenen Chromosomen liegen (oder nicht gekoppelt sein)",
            "Beide Eltern müssen heterozygot sein",
            "Nur ein Gen darf betrachtet werden",
            "Es darf kein Crossing-over stattfinden",
          ],
          correctIndex: 1,
          explanation:
            "Die **3. Mendelsche Regel** gilt nur, wenn die betrachteten Gene **auf verschiedenen Chromosomen** liegen oder so weit auseinander, dass sie **nicht gekoppelt** sind. Bei Genkopplung (Gene nahe beieinander auf demselben Chromosom) weicht das Verhältnis von 9:3:3:1 ab.",
          difficulty: 2,
          tags: ["mendel", "unabhängigkeitsregel", "genkopplung"],
        },
        {
          question:
            "Wie hoch ist die Wahrscheinlichkeit, bei RrGg × RrGg ein Kind mit Genotyp rrgg zu bekommen?",
          options: ["1/2", "1/4", "1/8", "1/16", "1/32"],
          correctIndex: 3,
          explanation:
            "Bei unabhängigen Genen gilt die **Produktregel**: P(rr) = 1/4 und P(gg) = 1/4. P(rrgg) = 1/4 × 1/4 = **1/16**. Im 4×4-Punnett-Quadrat (16 Felder) gibt es genau 1 Feld mit rrgg.",
          difficulty: 2,
          tags: ["produktregel", "dihybrid", "wahrscheinlichkeit"],
        },
      ],
      altfrage: {
        text: "Zwei heterozygote Eltern (Aa) bekommen vier Kinder. Wie hoch ist die Wahrscheinlichkeit, dass ein einzelnes Kind den homozygot rezessiven Genotyp (aa) hat?",
        options: [
          { id: "a", text: "0 %" },
          { id: "b", text: "25 %" },
          { id: "c", text: "50 %" },
          { id: "d", text: "75 %" },
          { id: "e", text: "100 %" },
        ],
        correctOptionId: "b",
        explanation:
          "Nach der **2. Mendelschen Regel** (Spaltungsregel) ergibt die Kreuzung Aa x Aa die Genotypen **AA : Aa : aa = 1 : 2 : 1**. Die Wahrscheinlichkeit für **aa** beträgt **1/4 = 25 %** pro Kind. Wichtig: Diese Wahrscheinlichkeit gilt für **jedes einzelne Kind** unabhängig — sie sagt nicht, dass von 4 Kindern genau eines aa sein muss.",
      },
    },

    // ─── 5. Genotyp, Phänotyp und Dominanzverhältnisse ────────────────────────
    {
      id: "bio-4-05",
      title: "Genotyp, Phänotyp und Dominanzverhältnisse",
      stichworte: [
        "Genotyp",
        "Phänotyp",
        "homozygot",
        "heterozygot",
        "dominant",
        "rezessiv",
        "kodominant",
        "intermediär",
        "Epistasie",
        "Penetranz",
        "Expressivität",
        "Pleiotropie",
        "polygene Vererbung",
        "multiple Allele",
        "Testkreuzung",
        "ABO-Blutgruppen",
        "Sichelzellanämie",
      ],
      content: `## Gleicher Genotyp, unterschiedlicher Phänotyp — warum?

Zwei Menschen tragen dieselbe Mutation im BRCA1-Gen. Die eine erkrankt mit 40 an Brustkrebs, die andere bleibt ihr Leben lang gesund. Die Allel-Kombination (der **Genotyp**) ist identisch — das sichtbare Ergebnis (der **Phänotyp**) nicht. Zwischen Genotyp und Phänotyp liegen Dominanzverhältnisse, Wechselwirkungen zwischen Genen und Umwelteinflüsse. Dieses Kapitel zeigt, welche Mechanismen dafür sorgen, dass gleiche Gene zu verschiedenen Ergebnissen führen können.

---

## Genotyp → Phänotyp: Die Grundregel

Der **Genotyp** ist die Allel-Kombination eines Individuums an einem Genort — z. B. **AA**, **Aa** oder **aa**. Der **Phänotyp** ist das beobachtbare Merkmal: Blütenfarbe, Blutgruppe, Körpergröße. Die zentrale Erkenntnis: Vom Genotyp zum Phänotyp ist es kein 1:1-Weg — Dominanzverhältnisse, andere Gene und die Umwelt modulieren das Ergebnis.

**Homozygot** (reinerbig): Beide Allele gleich — **AA** (homozygot dominant) oder **aa** (homozygot rezessiv). **Heterozygot** (mischerbig): Zwei verschiedene Allele — **Aa**. Welcher Phänotyp beim Heterozygoten entsteht, hängt vom Dominanzverhältnis ab.

> **Merke:** Genotyp = Allel-Kombination (AA, Aa, aa). Phänotyp = sichtbares Merkmal. Homozygot = gleiche Allele; heterozygot = verschiedene Allele.

---

## Vollständige Dominanz (dominant-rezessiv)

Das häufigste Verhältnis: Das **dominante** Allel (Großbuchstabe, z. B. A) bestimmt den Phänotyp allein, auch wenn nur eine Kopie vorliegt. Das **rezessive** Allel (Kleinbuchstabe, a) zeigt sich erst im homozygoten Zustand (aa). Der Heterozygote Aa sieht aus wie AA.

- **AA** → dominanter Phänotyp (z. B. rote Blüte)
- **Aa** → dominanter Phänotyp (äußerlich nicht von AA unterscheidbar)
- **aa** → rezessiver Phänotyp (z. B. weiße Blüte)

Kreuzung Aa × Aa ergibt im F₂: **3:1** (Phänotyp), **1:2:1** (Genotyp).

Die **Testkreuzung** klärt, ob ein dominant-phänotypisches Individuum AA oder Aa ist: Kreuzung mit **aa**. Alle Nachkommen dominant → **AA**. Aufspaltung 1:1 → **Aa**.

> **Merke:** Dominant-rezessiv: Aa = AA im Phänotyp. Testkreuzung × aa entlarvt den Genotyp (100 % dominant → AA; 1:1 → Aa).

---

## Unvollständige Dominanz (intermediär)

{{DIAGRAM:pedigree-analysis}}

Keines der Allele setzt sich vollständig durch. Der Heterozygote zeigt einen **Mischphänotyp** zwischen den beiden Homozygoten. Klassisches Beispiel: Die **Wunderblume** (*Mirabilis jalapa*) — rote Blüte (AA) × weiße Blüte (aa) ergibt **rosa** Blüten (Aa). Hier „verdünnt" das fehlende Allel die Farbintensität.

**Entscheidend:** Das Phänotyp-Verhältnis im F₂ entspricht dem Genotyp-Verhältnis **1:2:1** (rot : rosa : weiß = 1 : 2 : 1), weil jeder Genotyp einen eigenen Phänotyp hat.

> **Merke:** Intermediär = Mischphänotyp im Heterozygoten. F₂ = 1:2:1 (nicht 3:1!). Wunderblume: rot × weiß = rosa.

---

## Kodominanz — beide Allele voll exprimiert

Bei Kodominanz werden **beide Allele gleichzeitig und vollständig** exprimiert — kein Mischen, sondern Nebeneinander. Das wichtigste Beispiel für den MedAT: die **ABO-Blutgruppen**.

### ABO-Blutgruppen als Musterbeispiel

Das ABO-Gen hat **drei Allele** (multiple Allele): **I^A**, **I^B** und **i**. I^A und I^B sind **kodominant** zueinander, beide sind **dominant über i** (rezessiv).

| Genotyp | Blutgruppe (Phänotyp) | Antigene auf Erythrozyten | Antikörper im Serum |
|---------|----------------------|---------------------------|---------------------|
| I^A I^A oder I^A i | **A** | A-Antigen | Anti-B |
| I^B I^B oder I^B i | **B** | B-Antigen | Anti-A |
| I^A I^B | **AB** | A- **und** B-Antigen | keine |
| ii | **0** | keine | Anti-A und Anti-B |

- **AB = Universalempfänger** (keine Antikörper → verträgt A, B, AB, 0)
- **0 = Universalspender** (keine Antigene → wird von keinem Empfänger abgestoßen)

Dieses System zeigt drei Konzepte gleichzeitig: **Kodominanz** (I^A I^B → AB), **Dominanz** (I^A über i) und **multiple Allele** (drei Allele an einem Locus).

> **Merke:** ABO: I^A und I^B kodominant, beide dominant über i. AB = Universalempfänger (keine Antikörper), 0 = Universalspender (keine Antigene).

---

## Intermediär ≠ kodominant — der häufigste Fehler

Beide betreffen Heterozygote, aber der Mechanismus ist grundverschieden:

| | Intermediär | Kodominant |
|--|-------------|------------|
| **Phänotyp Aa** | Mischform (Zwischenstufe) | Beide Merkmale nebeneinander |
| **Beispiel** | Rosa Blüte (rot + weiß gemischt) | Blutgruppe AB (A-Antigen UND B-Antigen) |
| **Molekular** | Halbe Menge Genprodukt | Volle Menge beider Genprodukte |

> **Merke:** Intermediär = Blending (rosa). Kodominant = beide voll da (A + B nebeneinander). Nie verwechseln!

---

## Multiple Allele

Ein Gen kann in einer Population in **mehr als zwei Varianten** vorkommen. Jedes Individuum trägt aber weiterhin nur **zwei Allele** (diploid). Beispiel: ABO mit drei Allelen (I^A, I^B, i) ergibt sechs mögliche Genotypen, aber nur vier Phänotypen. Weiteres Beispiel: Das Fellfarben-Gen bei Kaninchen hat vier Allele (Wildtyp > Chinchilla > Himalaya > Albino) mit einer Dominanzhierarchie.

---

## Epistasie — ein Gen maskiert ein anderes

**Epistasie** (griech. „Darüberstehen") liegt vor, wenn ein Gen die Ausprägung eines **anderen Gens** beeinflusst oder unterdrückt. Das übergeordnete Gen heißt **epistatisch**, das unterdrückte **hypostatisch**.

Beispiel: **Labrador-Fellfarbe** — Gen E bestimmt, ob Pigment eingelagert wird (E_) oder nicht (ee = gelb, egal ob B_ oder bb). Gen B bestimmt die Pigmentfarbe (B_ = schwarz, bb = braun). Genotyp bbee = gelb, nicht braun — Gen E ist epistatisch über Gen B.

Bei Epistasie weichen die F₂-Spaltungsverhältnisse vom erwarteten 9:3:3:1 ab (z. B. **9:3:4** bei rezessiver Epistasie).

> **Merke:** Epistasie = ein Gen maskiert die Wirkung eines anderen Gens. Ergebnis: veränderte Mendel-Verhältnisse im F₂.

---

## Penetranz und Expressivität

Nicht jeder Träger einer krankheitsverursachenden Mutation wird krank — und wenn doch, nicht gleich schwer. Zwei Begriffe fassen das:

**Penetranz** = Anteil der Genotyp-Träger, die den Phänotyp tatsächlich zeigen (in Prozent). **Vollständige Penetranz** (100 %): Jeder Träger ist betroffen — z. B. **Chorea Huntington**. **Unvollständige Penetranz**: Nicht jeder Träger erkrankt — z. B. **BRCA1-Mutationen** mit ca. **70 % Penetranz** (70 von 100 Trägerinnen entwickeln Brustkrebs).

**Expressivität** = **Schweregrad** der Merkmalsausprägung bei denjenigen, die betroffen sind. Variable Expressivität bedeutet: Betroffene zeigen das Merkmal unterschiedlich stark. Beispiel: **Neurofibromatose Typ 1** — manche Patienten haben nur wenige Café-au-lait-Flecken, andere entwickeln hunderte Neurofibrome.

| Begriff | Frage | Beispiel |
|---------|-------|----------|
| **Penetranz** | Ob? (betroffen ja/nein) | BRCA1: 70 % Penetranz |
| **Expressivität** | Wie stark? (Schweregrad) | NF1: wenige Flecken bis schwere Tumoren |

> **Merke:** Penetranz = ob ein Merkmal auftritt (%). Expressivität = wie stark es auftritt. Huntington = 100 % Penetranz. BRCA1 ≈ 70 % Penetranz.

---

## Polygene Vererbung — viele Gene, ein Merkmal

Merkmale wie **Körpergröße**, **Hautfarbe** oder **Blutdruck** werden nicht von einem Gen bestimmt, sondern von vielen Genen gleichzeitig — das nennt man **polygene Vererbung**. Jedes einzelne Gen trägt einen kleinen additiven Effekt bei. Die Umwelt (Ernährung, Klima, Training) moduliert zusätzlich. Das Ergebnis ist eine **kontinuierliche Verteilung** (Normalverteilung/Glockenkurve) statt diskreter Klassen.

> **Merke:** Polygene Vererbung = viele Gene beeinflussen ein Merkmal additiv → Normalverteilung (z. B. Körpergröße). Nicht mendelnde Verhältnisse.

---

## Pleiotropie — ein Gen, viele Merkmale

Das Gegenstück zur polygenen Vererbung: Ein einzelnes Gen beeinflusst **mehrere, scheinbar unverbundene Merkmale**. Beispiel: Beim **Marfan-Syndrom** führt eine Mutation im Fibrillin-1-Gen (FBN1) zu langen Fingern, Linsenluxation, Aortenaneurysma und Überstreckbarkeit der Gelenke — ein Gen, vier Organsysteme betroffen. Auch die **Sichelzellanämie** ist pleiotrop: Die HbS-Mutation verursacht sichelförmige Erythrozyten, Anämie, Milzinfarkte und Organschäden.

> **Merke:** Pleiotropie = ein Gen → viele Merkmale. Marfan: FBN1 betrifft Herz, Auge, Skelett, Gelenke. Gegenstück: polygene Vererbung (viele Gene → ein Merkmal).

---

## Klinische Anwendung: Sichelzellanämie

Die **Sichelzellanämie** vereint mehrere Konzepte dieses Kapitels:

- **Kodominanz auf molekularer Ebene:** Heterozygote (HbA/HbS) produzieren **beide** Hämoglobin-Varianten — HbA und HbS sind nebeneinander nachweisbar (Elektrophorese zeigt zwei Banden).
- **Unvollständige Dominanz auf klinischer Ebene:** HbA/HbS-Träger sind unter Normalbedingungen symptomfrei, können aber unter Sauerstoffmangel (Höhe, Narkose) Sichelzellkrisen erleiden — ein intermediärer Phänotyp.
- **Heterozygotenvorteil:** In Malariagebieten haben HbA/HbS-Träger einen **Selektionsvorteil** — die Sichelzellen erschweren dem Malaria-Parasiten (*Plasmodium falciparum*) die Vermehrung. Deshalb bleibt das HbS-Allel in diesen Regionen häufig, obwohl HbS/HbS schwer krank macht.
- **Pleiotropie:** Die eine Mutation (Glu → Val in der β-Globin-Kette) verursacht sichelförmige Erythrozyten, chronische Anämie, Gefäßverschlüsse, Milzinfarkte und Organschäden.

> **Merke:** Sichelzellanämie = Kodominanz (beide Hb nachweisbar) + Heterozygotenvorteil (Malariaresistenz) + Pleiotropie (eine Mutation, viele Organschäden).

---

## Häufige Missverständnisse

**„Dominant = häufiger/besser"** — Falsch. Dominanz beschreibt nur die Ausprägung im Heterozygoten, nicht die Allel-Häufigkeit in der Population. Polydaktylie (überzählige Finger) ist dominant, aber selten. Blaue Augen sind rezessiv, aber in Nordeuropa sehr häufig.

**„Intermediär und kodominant sind dasselbe"** — Falsch. Intermediär = Mischung (rosa). Kodominant = beide vollständig da (A + B). Der Unterschied liegt im molekularen Mechanismus.

**„Rezessive Merkmale verschwinden"** — Falsch. Rezessive Allele werden im Heterozygoten „versteckt" weitergegeben. In großen Populationen bleiben sie über das Hardy-Weinberg-Gleichgewicht stabil erhalten.

---

## Zusammenfassung (ultrakompakt)

| Konzept | Kernaussage |
|---------|-------------|
| **Genotyp → Phänotyp** | Allel-Kombination → sichtbares Merkmal (kein 1:1-Weg) |
| **Vollständig dominant** | Aa = AA; F₂ = 3:1 |
| **Intermediär** | Aa = Mischform; F₂ = 1:2:1 |
| **Kodominant** | Aa = beide Merkmale sichtbar (ABO: I^A I^B = AB) |
| **Multiple Allele** | >2 Varianten in Population, aber 2 pro Individuum |
| **Epistasie** | Ein Gen maskiert ein anderes (Labrador-Farbe) |
| **Penetranz** | Ob? — Huntington 100 %, BRCA1 ~70 % |
| **Expressivität** | Wie stark? — NF1 variabel |
| **Polygen** | Viele Gene → ein Merkmal (Körpergröße) |
| **Pleiotrop** | Ein Gen → viele Merkmale (Marfan, Sichelzelle) |`,
      lernziele: [
        "Genotyp und Phänotyp sowie homozygot und heterozygot definieren.",
        "Vollständige Dominanz, intermediäre Vererbung und Kodominanz unterscheiden und Beispiele nennen.",
        "Das ABO-Blutgruppensystem als Beispiel für Kodominanz, Dominanz und multiple Allele erklären.",
        "Epistasie, Penetranz, Expressivität, polygene Vererbung und Pleiotropie definieren und klinische Beispiele zuordnen.",
        "Die Testkreuzung erklären und anwenden.",
      ],
      sections: [],
      merksätze: [
        "Genotyp = Allel-Kombination; Phänotyp = sichtbares Merkmal. AA/Aa/aa = homo-dom./hetero./homo-rez.",
        "Intermediär = Mischung (1:2:1), Kodominant = beide voll exprimiert (AB). Nie verwechseln!",
        "Penetranz = ob (%), Expressivität = wie stark. Polygen = viele Gene → 1 Merkmal, Pleiotrop = 1 Gen → viele Merkmale.",
      ],
      selfTest: [
        {
          question: "Welches Blutgruppen-Genotyp-Paar zeigt Kodominanz?",
          options: [
            "I^A I^A und I^B I^B",
            "I^A I^B → Blutgruppe AB, da beide Antigene gleichzeitig exprimiert werden",
            "I^A i → Blutgruppe A, da I^A dominant über i ist",
            "ii → Blutgruppe 0, da beide Allele rezessiv sind",
            "I^B i → Blutgruppe B, da I^B dominant über i ist",
          ],
          correctIndex: 1,
          explanation:
            "**Kodominanz** bedeutet, dass beide Allele im Heterozygoten **gleichzeitig und vollständig** exprimiert werden. Bei **I^A I^B** werden sowohl das A-Antigen als auch das B-Antigen auf den Erythrozyten gebildet → **Blutgruppe AB**. Bei I^A i hingegen liegt Dominanz (nicht Kodominanz) vor: I^A ist dominant über i.",
          difficulty: 1,
          tags: ["kodominanz", "blutgruppe", "abo"],
        },
        {
          question:
            "Die Wunderblume zeigt bei der Kreuzung rot (AA) × weiß (aa) rosa Blüten in der F₁. Welches Phänotyp-Verhältnis zeigt die F₂ (Aa × Aa)?",
          options: [
            "3:1 (rot : weiß)",
            "1:2:1 (rot : rosa : weiß)",
            "9:3:3:1",
            "1:1 (rot : weiß)",
            "Alle rosa",
          ],
          correctIndex: 1,
          explanation:
            "Bei **intermediärer** Vererbung hat jeder Genotyp einen eigenen Phänotyp: AA = rot, Aa = rosa, aa = weiß. Daher entspricht das Phänotyp-Verhältnis dem Genotyp-Verhältnis **1:2:1**. Das 3:1-Verhältnis gilt nur bei vollständiger Dominanz.",
          difficulty: 1,
          tags: ["intermediär", "1:2:1", "wunderblume"],
        },
        {
          question:
            "Ein Individuum mit dominantem Phänotyp wird mit aa gekreuzt. Die Nachkommen spalten 1:1 (dominant : rezessiv). Welchen Genotyp hatte das getestete Individuum?",
          options: [
            "AA (homozygot dominant)",
            "aa (homozygot rezessiv)",
            "Aa (heterozygot)",
            "A (hemizygot)",
            "Der Genotyp lässt sich nicht bestimmen",
          ],
          correctIndex: 2,
          explanation:
            "Bei der **Testkreuzung** (× aa): 1:1-Aufspaltung bedeutet, das Individuum war **Aa** (heterozygot). Wäre es AA gewesen, wären **alle** Nachkommen dominant (Aa). Die Testkreuzung ist die Standardmethode, um zwischen AA und Aa zu unterscheiden.",
          difficulty: 1,
          tags: ["testkreuzung", "heterozygot", "genotyp"],
        },
        {
          question:
            "BRCA1-Mutationsträgerinnen erkranken zu ca. 70 % an Brustkrebs. Welcher Fachbegriff beschreibt dieses Phänomen?",
          options: [
            "Variable Expressivität",
            "Unvollständige Penetranz",
            "Kodominanz",
            "Epistasie",
            "Polygene Vererbung",
          ],
          correctIndex: 1,
          explanation:
            "**Penetranz** gibt an, welcher Anteil der Genotyp-Träger den Phänotyp tatsächlich zeigt. Bei BRCA1 liegt die Penetranz bei ca. 70 % — nicht alle Trägerinnen erkranken. Das ist **unvollständige Penetranz**. **Expressivität** beschreibt dagegen den Schweregrad bei denjenigen, die erkranken.",
          difficulty: 2,
          tags: ["penetranz", "brca1", "klinisch"],
        },
        {
          question:
            "Beim Marfan-Syndrom verursacht eine einzige Mutation im FBN1-Gen gleichzeitig Aortenaneurysma, Linsenluxation und lange Finger. Wie nennt man dieses Phänomen?",
          options: [
            "Polygene Vererbung",
            "Epistasie",
            "Pleiotropie",
            "Multiple Allele",
            "Intermediäre Dominanz",
          ],
          correctIndex: 2,
          explanation:
            "**Pleiotropie** bedeutet: Ein Gen beeinflusst **mehrere, scheinbar unverbundene Merkmale**. Beim Marfan-Syndrom betrifft die FBN1-Mutation Herz (Aorta), Auge (Linse) und Skelett (Finger) gleichzeitig. Das Gegenstück ist **polygene Vererbung** (viele Gene → ein Merkmal).",
          difficulty: 2,
          tags: ["pleiotropie", "marfan", "klinisch"],
        },
        {
          question:
            "Bei Labrador Retrievern bestimmt Gen B die Pigmentfarbe (B_ = schwarz, bb = braun) und Gen E, ob Pigment eingelagert wird (ee = gelb, egal ob B_ oder bb). Wie heißt diese Wechselwirkung?",
          options: [
            "Kodominanz",
            "Intermediäre Vererbung",
            "Epistasie",
            "Pleiotropie",
            "Polygene Vererbung",
          ],
          correctIndex: 2,
          explanation:
            "**Epistasie** liegt vor, wenn ein Gen die Ausprägung eines **anderen Gens** maskiert. Hier ist Gen E epistatisch über Gen B: Bei ee wird kein Pigment eingelagert → der Hund ist gelb, unabhängig vom B-Genotyp. Das Gen E 'überschreibt' die Wirkung von Gen B.",
          difficulty: 2,
          tags: ["epistasie", "labrador", "geninteraktion"],
        },
      ],
      altfrage: {
        text: "Bei der Kreuzung zweier heterozygot roter Blumen (Rr x Rr) einer Pflanze mit intermediärem Erbgang treten in der F₂-Generation weiße Blumen auf. Welchen Genotyp haben diese?",
        options: [
          { id: "a", text: "RR" },
          { id: "b", text: "Rr" },
          { id: "c", text: "rr" },
          { id: "d", text: "RR oder Rr" },
          { id: "e", text: "Der Genotyp lässt sich nicht bestimmen." },
        ],
        correctOptionId: "c",
        explanation:
          "Beim **intermediären Erbgang** zeigt der **Heterozygote** (Rr) einen Mischphänotyp (z. B. rosa bei roter und weißer Kreuzung). In der F₂-Generation (Rr x Rr) entstehen: **RR** (rot), **Rr** (rosa/Mischform), **rr** (weiß) im Verhältnis 1:2:1. Weiße Blumen haben den Genotyp **rr** (homozygot rezessiv). Im Unterschied zum dominant-rezessiven Erbgang kann man beim intermediären Erbgang den Genotyp direkt am Phänotyp ablesen.",
      },
    },

    // ─── 6. Erbgänge: autosomal und X-chromosomal ─────────────────────────────
    {
      id: "bio-4-06",
      title: "Erbgänge: autosomal und X-chromosomal",
      stichworte: [
        "autosomal",
        "X-chromosomal",
        "Stammbaum",
        "Konduktorin",
        "Hemizygotie",
        "autosomal dominant",
        "autosomal rezessiv",
      ],
      content: `## Autosomal vs. X-chromosomal

**Autosomal:** Das Gen liegt auf einem der **Autosomen** (Chromosomen 1–22). Beide Geschlechter sind gleich häufig betroffen (Männer und Frauen haben je zwei Kopien jedes Autosoms). **X-chromosomal:** Das Gen liegt auf dem **X-Chromosom**. Männer haben nur **ein** X-Chromosom (**Hemizygotie**) — sie tragen also nur ein Allel für X-chromosomale Gene. Daher manifestieren sich **X-chromosomal rezessive** Merkmale bei Männern häufiger (ein rezessives Allel reicht). Frauen haben zwei X-Chromosomen und können **Konduktorinnen** sein (heterozygot, phänotypisch gesund, geben das Allel weiter).

---

## Autosomal-dominant

**Ein** krankes Allel genügt für die Erkrankung (Aa oder AA krank). Typisches Stammbaum-Muster: **In jeder Generation** Betroffene (vertikale Weitergabe); Männer und Frauen gleich häufig; ein betroffenes Elternteil gibt mit 50 % Wahrscheinlichkeit das kranke Allel weiter. Beispiele: Chorea Huntington (neurodegenerative Bewegungsstörung), Marfan-Syndrom (Bindegewebserkrankung), Achondroplasie (häufigste Form des Kleinwuchses).

> **Merke:** Autosomal-dominant: jede Generation kann betroffen sein; 50 % Risiko für Kinder eines betroffenen Elternteils (wenn dieser heterozygot Aa ist).

---

## Autosomal-rezessiv


Die Erkrankung tritt nur auf, wenn **beide** Allele krank sind (**aa**). Heterozygote (Aa) sind **Konduktoren/Träger**, meist gesund. Typisches Muster: **Generationensprünge** (gesunde Eltern können betroffene Kinder haben, wenn beide Aa sind); Geschwister können betroffen sein; **Konsanguinität** (Verwandtenehe) erhöht das Risiko. Aa × Aa → 25 % aa (krank), 50 % Aa (Träger), 25 % AA (gesund). Beispiele: Mukoviszidose (zystische Fibrose, zäher Schleim in Lunge/Pankreas), Phenylketonurie (PKU) (gestörter Phenylalanin-Abbau), Sichelzellanämie (sichelförmige Erythrozyten).

> **Merke:** Autosomal-rezessiv: aa krank; Aa × Aa → 25 % krank, 50 % Träger, 25 % gesund. Generationensprünge typisch.

---

## X-chromosomal rezessiv

Das kranke Allel liegt auf dem **X-Chromosom** und ist **rezessiv**. **Männer** sind häufiger betroffen (hemizygot: ein X^a reicht). **Frauen** können Konduktorinnen sein (X^A X^a, phänotypisch meist gesund). **Keine Vater-Sohn-Übertragung** (Vater gibt X nur an Töchter, Y an Söhne). Typisches Muster: Betroffene Männer; Töchter betroffener Väter sind obligate Konduktorinnen; Diagonal-Muster (Großvater → Enkel über Konduktorin). Beispiele: Hämophilie A (Bluterkrankheit, Faktor-VIII-Mangel), Duchenne-Muskeldystrophie (fortschreitender Muskelschwund), Rot-Grün-Blindheit.

> **Merke:** X-chromosomal rezessiv: Männer häufiger krank (hemizygot); keine Vater-Sohn-Übertragung; Konduktorin = heterozygote Frau, meist gesund.

---

## X-chromosomal dominant


Das kranke Allel ist **dominant** auf dem X-Chromosom. **Kranker Vater (X^A Y):** Alle **Töchter** erhalten sein X^A → **100 % Töchter krank**; alle **Söhne** erhalten sein Y → **100 % Söhne gesund**. Dieses Muster ist sehr charakteristisch. Beispiele: Hypophosphatämische Rachitis (Vitamin-D-resistente Knochenerweichung), Rett-Syndrom (neurologische Entwicklungsstörung, meist nur Mädchen, da bei Jungen oft letal).

> **Merke:** X-chromosomal dominant: kranker Vater → 100 % Töchter krank, 100 % Söhne gesund.

---

## Stammbaum: Symbole und Auswertung


**Symbole im Stammbaum:**

| Symbol | Bedeutung |
|--------|-----------|
| □ (Quadrat) | Mann |
| ○ (Kreis) | Frau |
| ■ / ● (ausgefüllt) | Betroffen (erkrankt) |
| ◧ / ◑ (halb ausgefüllt) | Konduktor/Überträger (heterozygot, phänotypisch gesund) |
| □—○ (Verbindungslinie) | Paarung/Eltern |
| □══○ (Doppellinie) | Konsanguinität (Verwandtenehe) |
| ◇ (Raute) | Geschlecht unbekannt |
| ∅ oder / (durchgestrichen) | Verstorben |

**Generationen** werden mit römischen Zahlen (I, II, III) beschriftet; Individuen innerhalb einer Generation mit arabischen Zahlen (II-1, II-2 …). Nachkommen hängen an einer horizontalen Geschwisterlinie.

> **Merke:** □ = Mann, ○ = Frau; ausgefüllt = betroffen; halb = Überträger; Doppellinie = Konsanguinität. Generationen: I, II, III.

---

## Stammbaumanalyse: Systematisches Vorgehen (MedAT-Standardaufgabe)


{{DIAGRAM:pedigree-analysis}}

**Schritt-für-Schritt-Analyse:**

**Schritt 1 — Geschlechterverteilung prüfen:**
- Sind beide Geschlechter betroffen? → **autosomal** wahrscheinlich.
- Sind fast nur Männer betroffen? → **X-chromosomal rezessiv** prüfen.

**Schritt 2 — Generationenmuster prüfen:**
- In **jeder** Generation Betroffene (vertikale Weitergabe)? → **dominant**.
- Generationen werden **übersprungen** (gesunde Eltern, kranke Kinder)? → **rezessiv**.

**Schritt 3 — Vater-Sohn-Übertragung prüfen:**
- Gibt ein betroffener Vater die Krankheit an Söhne weiter? → Falls **ja**: **nicht X-chromosomal** (Vater gibt Y, nicht X an Söhne).
- Gibt ein betroffener Vater die Krankheit **nur an Töchter** weiter? → **X-chromosomal dominant** prüfen.

**Schritt 4 — Konsanguinität und Überträger:**
- Verwandtenehe im Stammbaum? → Hinweis auf **autosomal-rezessiv** (seltenes Allel wird homozygot).

> **Merke:** Schema: 1) Geschlechterverteilung → 2) Generationenmuster → 3) Vater-Sohn-Übertragung → 4) Konsanguinität. Damit lässt sich der Erbgang in >90 % der Fälle eindeutig bestimmen.

---

## Entscheidungsbaum der vier Erbgänge

| Kriterium | Autosomal-dominant | Autosomal-rezessiv | X-rezessiv | X-dominant |
|-----------|-------------------|--------------------|------------|------------|
| **Geschlechter** | ♂ = ♀ betroffen | ♂ = ♀ betroffen | fast nur ♂ | ♀ häufiger als ♂ |
| **Generationen** | jede Generation | Sprünge möglich | Sprünge (Diagonal) | jede Generation |
| **Vater → Sohn** | ja, möglich | ja, möglich | **nein** (nie!) | **nein** |
| **Kranker Vater** | 50 % aller Kinder | nur wenn Mutter Aa | Töchter = Konduktorinnen | 100 % Töchter krank |
| **Konsanguinität** | selten relevant | Risiko ↑ | selten relevant | selten relevant |
| **Beispiele** | Huntington, Marfan | Mukoviszidose, PKU | Hämophilie, Duchenne | Rett-Syndrom, Vit-D-Rachitis |

---

## Stammbaumanalyse: Durchgerechnetes Beispiel


**Stammbaum:** Eine Familie mit einer Erbkrankheit. In Generation I sind beide Eltern gesund. In Generation II haben sie vier Kinder: zwei gesunde Töchter, einen gesunden Sohn und einen betroffenen Sohn. Eine der gesunden Töchter heiratet einen gesunden Mann; sie haben einen betroffenen Sohn.

**Analyse nach Schema:**
1. **Geschlechter:** Nur Männer betroffen → X-rezessiv oder autosomal-rezessiv möglich.
2. **Generationen:** Generationensprung (I gesund, II betroffen) → rezessiv.
3. **Vater-Sohn:** Vater in Gen. I ist gesund, trotzdem betroffener Sohn → Gen muss von der Mutter kommen. In Gen. III: betroffener Enkel hat gesunden Vater → keine Vater-Sohn-Übertragung → **X-chromosomal rezessiv** wahrscheinlich.
4. **Genotypen:** Großmutter (Gen. I) = X^A X^a (Konduktorin); Großvater = X^A Y (gesund). Betroffene Söhne = X^a Y. Gesunde Tochter in Gen. II, die betroffenen Sohn hat = X^A X^a (Konduktorin wie Großmutter).

**Wahrscheinlichkeiten:** Konduktorin (X^A X^a) × gesunder Mann (X^A Y): Töchter 50 % Konduktorinnen, 50 % gesund (X^A X^A); Söhne 50 % betroffen (X^a Y), 50 % gesund (X^A Y).

> **Merke:** X-chromosomal rezessiv erkennt man am Diagonal-Muster: Großvater mütterlicherseits → Enkel über Konduktorin-Tochter. Keine Vater-Sohn-Übertragung ist das Schlüsselkriterium gegen autosomal.`,
      lernziele: [
        "Autosomal und X-chromosomal sowie dominant und rezessiv zuordnen.",
        "Die vier Haupterbgänge an Stammbaum-Mustern erkennen und Risiken berechnen.",
        "Stammbaum-Symbole lesen und das systematische Analyse-Schema anwenden.",
        "Konduktorin-Status und Wiederholungsrisiken berechnen.",
      ],
      sections: [],
      merksätze: [
        "Autosomal-rezessiv: Aa × Aa → 25 % krank. X-rezessiv: Männer häufiger, keine Vater-Sohn-Übertragung. X-dominant: kranker Vater → alle Töchter krank.",
        "Stammbaum-Schema: 1) Geschlecht, 2) Generationen, 3) Vater-Sohn, 4) Konsanguinität → Erbgang.",
      ],
      selfTest: [
        {
          question:
            "Ein kranker Vater und eine gesunde Mutter haben nur Töchter, die alle krank sind, und Söhne, die alle gesund sind. Welcher Erbgang ist am ehesten?",
          options: [
            "Autosomal-dominant",
            "Autosomal-rezessiv",
            "X-chromosomal dominant",
            "X-chromosomal rezessiv",
            "Y-chromosomal",
          ],
          correctIndex: 2,
          explanation:
            "Das Muster **kranker Vater → 100 % Töchter krank, 100 % Söhne gesund** ist typisch für **X-chromosomal dominante** Vererbung. Der Vater (X^A Y) gibt sein X^A an alle Töchter (→ krank) und sein Y an alle Söhne (→ gesund, da sie das X der Mutter erhalten).",
          difficulty: 2,
          tags: ["x-chromosomal dominant", "erbgang", "stammbaum"],
        },
        {
          question:
            "Beide Eltern sind phänotypisch gesund, aber zwei von vier Kindern sind von einer Erbkrankheit betroffen. Beide Geschlechter sind betroffen. Welcher Erbgang ist am wahrscheinlichsten?",
          options: [
            "Autosomal-dominant",
            "X-chromosomal dominant",
            "Autosomal-rezessiv",
            "X-chromosomal rezessiv",
            "Mitochondrial",
          ],
          correctIndex: 2,
          explanation:
            "Gesunde Eltern mit betroffenen Kindern → **rezessiver** Erbgang (Eltern sind Überträger Aa). Beide Geschlechter betroffen → **autosomal** (nicht X-chromosomal, dort wären fast nur Jungen krank). Aa × Aa → 25 % der Kinder betroffen (aa).",
          difficulty: 2,
          tags: ["autosomal-rezessiv", "stammbaum", "überträger"],
        },
        {
          question: "Welches Kriterium schließt einen X-chromosomalen Erbgang am sichersten aus?",
          options: [
            "Mehr Frauen als Männer sind betroffen",
            "Die Krankheit überspringt eine Generation",
            "Ein betroffener Vater hat betroffene Söhne (Vater-Sohn-Übertragung)",
            "Konsanguinität liegt vor",
            "Nur eine Generation ist betroffen",
          ],
          correctIndex: 2,
          explanation:
            "**Vater-Sohn-Übertragung** schließt X-chromosomal aus, weil der Vater sein **Y-Chromosom** (nicht das X) an den Sohn weitergibt. Ein betroffener Sohn kann sein X-chromosomales Allel daher nicht vom Vater, sondern nur von der Mutter erhalten haben.",
          difficulty: 2,
          tags: ["x-chromosomal", "vater-sohn", "stammbaum"],
        },
        {
          question:
            "In einem Stammbaum ist der Großvater mütterlicherseits betroffen, die Mutter gesund, und der Enkel (Sohn der Mutter) ist betroffen. Welcher Erbgang liegt vor?",
          options: [
            "Autosomal-dominant",
            "Autosomal-rezessiv",
            "X-chromosomal rezessiv (Diagonal-Muster)",
            "X-chromosomal dominant",
            "Y-chromosomal",
          ],
          correctIndex: 2,
          explanation:
            "Das **Diagonal-Muster** (betroffener Großvater mütterlicherseits → gesunde Tochter als Konduktorin → betroffener Enkel) ist typisch für **X-chromosomal rezessiv**. Der Großvater (X^a Y) gibt X^a an alle Töchter → die Mutter ist Konduktorin (X^A X^a) → 50 % ihrer Söhne erhalten X^a und sind betroffen.",
          difficulty: 2,
          tags: ["x-chromosomal rezessiv", "diagonal-muster", "konduktorin"],
        },
        {
          question: "Welches Symbol im Stammbaum kennzeichnet eine Konsanguinität (Verwandtenehe)?",
          options: [
            "Einfache waagerechte Linie zwischen den Partnern",
            "Doppellinie (══) zwischen den Partnern",
            "Gestrichelte Linie",
            "Halb ausgefülltes Symbol",
            "Kreuz (✝) neben dem Symbol",
          ],
          correctIndex: 1,
          explanation:
            "Eine **Doppellinie** (══) zwischen zwei Partnern zeigt eine **Konsanguinität** (Verwandtenehe) an. Dies ist besonders relevant bei **autosomal-rezessiven** Erbgängen, da verwandte Eltern häufiger dasselbe rezessive Allel tragen.",
          difficulty: 1,
          tags: ["stammbaum", "symbole", "konsanguinität"],
        },
      ],
      altfrage: {
        text: "Ein Paar bekommt eine Tochter mit Hämophilie A (X-chromosomal rezessiv). Was lässt sich über die Eltern sagen?",
        options: [
          { id: "a", text: "Der Vater ist gesund, die Mutter ist homozygot krank." },
          {
            id: "b",
            text: "Der Vater ist hemizygot betroffen (krank), die Mutter ist Konduktorin (heterozygot).",
          },
          { id: "c", text: "Beide Eltern müssen krank sein." },
          { id: "d", text: "Der Vater ist Konduktor, die Mutter ist gesund." },
          { id: "e", text: "Der Erbgang ist autosomal-dominant." },
        ],
        correctOptionId: "b",
        explanation:
          "Damit eine **Tochter** (XX) an einer **X-chromosomal rezessiven** Erkrankung leidet, muss sie **zwei** kranke X-Allele haben: eines vom Vater (der hemizygot betroffen sein muss, X^a Y) und eines von der Mutter (die mindestens **Konduktorin** sein muss, X^A X^a). Der Vater kann kein Konduktor sein (D falsch, Männer haben nur ein X). Der Erbgang ist X-chromosomal rezessiv, nicht autosomal-dominant (E falsch).",
      },
    },

    // ─── 7. Blutgruppen: AB0-System ──────────────────────────────────────────
    {
      id: "bio-4-07",
      title: "Blutgruppen: AB0-System",
      imageUrl: "/images/bms/bio-blutgruppen.jpg",
      imageCaption:
        "Abb.: AB0-Blutgruppensystem mit Antigenen und Antikörpern (OpenStax, CC BY 4.0)",
      stichworte: ["AB0", "Blutgruppe", "kodominant", "I^A", "I^B", "i", "Antigen", "Rhesus"],
      content: `## Multiple Allelie und das AB0-System

Im Gegensatz zu einfachen Erbgängen mit nur zwei Allelen besitzt das AB0-System **drei Allele** an einem einzigen Genort auf Chromosom 9: **I^A**, **I^B** und **i**. Das Gen codiert für eine Glycosyltransferase (Enzym, das Zucker überträgt), die Zuckerreste an ein Vorläuferantigen (H-Antigen) auf der Erythrozytenoberfläche (Oberfläche der roten Blutkörperchen) anhängt:

- **I^A**: hängt N-Acetylgalactosamin an → **Antigen A**
- **I^B**: hängt Galactose an → **Antigen B**
- **i**: codiert für ein nicht-funktionales Enzym → **kein Antigen** (nur H-Antigen bleibt)

Da jeder Mensch diploid ist, trägt er genau **zwei** dieser drei Allele. Daraus ergeben sich **sechs mögliche Genotypen**, die aber nur **vier Phänotypen** (Blutgruppen) erzeugen:

| Genotyp | Blutgruppe | Antigene auf Erythrozyten | Antikörper im Serum |
|---------|-----------|---------------------------|---------------------|
| I^A I^A, I^A i | A | A | Anti-B |
| I^B I^B, I^B i | B | B | Anti-A |
| I^A I^B | AB | A und B | keine (Universalempfänger) |
| i i | 0 | keines (nur H) | Anti-A und Anti-B (Universalspender) |

**Dominanzverhältnisse:** I^A und I^B sind beide **dominant** über i (das rezessive Allel). Untereinander sind I^A und I^B **kodominant** — bei Genotyp I^A I^B werden **beide** Antigene gleichzeitig und vollständig auf der Erythrozytenoberfläche exprimiert. Das ist der entscheidende Unterschied zur **intermediären Vererbung**, bei der ein Mischphänotyp entsteht (z. B. rosa Blüten bei Wunderblume).

> **Merke:** Kodominanz (AB0): Beide Allele werden vollständig exprimiert (A UND B sichtbar). Intermediär: Mischphänotyp. I^A und I^B dominant über i. Sechs Genotypen → vier Phänotypen.

{{IMAGE}}

**Isoagglutinine (natürliche Antikörper):** Im Serum befinden sich Antikörper gegen die Antigene, die man selbst NICHT hat. Blutgruppe A hat Anti-B; Blutgruppe B hat Anti-A; Blutgruppe 0 hat Anti-A und Anti-B; Blutgruppe AB hat keine Antikörper. Diese Regel ist die Grundlage für die Transfusionsmedizin.

---

## Kreuzungsaufgaben — systematische Lösung

**Kreuzung 1: Vater I^A i (Blutgruppe A) x Mutter I^B i (Blutgruppe B)**

|  | I^B | i |
|--|-----|---|
| **I^A** | I^A I^B (AB) | I^A i (A) |
| **i** | I^B i (B) | i i (0) |

Ergebnis: Alle vier Blutgruppen sind möglich, jeweils mit **25 % Wahrscheinlichkeit**. Das ist die einzige Elternkombination, bei der alle vier Blutgruppen auftreten können!

**Kreuzung 2: Vater i i (Blutgruppe 0) x Mutter I^A I^B (Blutgruppe AB)**

|  | I^A | I^B |
|--|-----|-----|
| **i** | I^A i (A) | I^B i (B) |
| **i** | I^A i (A) | I^B i (B) |

Ergebnis: Kinder können nur Blutgruppe **A** (50 %) oder **B** (50 %) haben. Blutgruppe **0** und **AB** sind **ausgeschlossen** — der 0-Elternteil kann nur i weitergeben, der AB-Elternteil nur I^A oder I^B.

**Kreuzung 3: Vater I^A I^A (Blutgruppe A) x Mutter I^B I^B (Blutgruppe B)**
Alle Kinder: I^A I^B → Blutgruppe **AB** (100 %). Kein Kind kann A, B oder 0 sein.

**Kreuzung 4: Beide Eltern I^A i (Blutgruppe A)**
Kinder: I^A I^A (A, 25 %), I^A i (A, 50 %), i i (0, 25 %) → 75 % Blutgruppe A, 25 % Blutgruppe 0.

> **Merke:** I^A i x I^B i → alle vier Blutgruppen je 25 %. Eltern 0 x AB → nur A oder B (nie 0, nie AB). Punnett-Quadrat immer aufstellen!

---

## Rhesus-System

Das Rhesus-System wird durch das **RHD-Gen** auf Chromosom 1 bestimmt. Das zentrale Antigen ist das **D-Antigen** (Rh-Faktor). Der Erbgang folgt einem **einfachen dominant-rezessiven Muster**:

- **D** (Rh-positiv) ist **dominant** über **d** (Rh-negativ)
- **DD** und **Dd** = Rh-positiv (ca. 85 % der europäischen Bevölkerung)
- **dd** = Rh-negativ (ca. 15 %)

**Rhesus-Inkompatibilität und Morbus haemolyticus neonatorum:**
Wenn eine **Rh-negative Mutter (dd)** ein **Rh-positives Kind (Dd)** austrägt, können fetale Erythrozyten mit D-Antigen in den mütterlichen Kreislauf gelangen (v. a. bei der Geburt). Die Mutter bildet daraufhin **Anti-D-Antikörper** (IgG-Klasse). Bei einer **zweiten Schwangerschaft** mit einem Rh-positiven Kind können diese IgG-Antikörper die Plazenta passieren, die fetalen Erythrozyten angreifen und einen **Morbus haemolyticus neonatorum** (Blutzerfall beim Neugeborenen) auslösen (Hämolyse, Anämie, Ikterus (Gelbsucht), im Extremfall Hydrops fetalis (generalisierte Flüssigkeitseinlagerung)).

**Prävention:** Die **Anti-D-Prophylaxe** (Gabe von Anti-D-Immunglobulin an die Rh-negative Mutter während der Schwangerschaft und nach der Geburt) verhindert die Sensibilisierung, indem sie fetale D-positive Erythrozyten neutralisiert, bevor das mütterliche Immunsystem reagiert.

> **Merke:** Rhesus: D dominant, dd = Rh-negativ (~15 %). Sensibilisierung bei Rh-neg. Mutter + Rh-pos. Kind → Anti-D-Antikörper (IgG) → Morbus haemolyticus neonatorum bei Folgeschwangerschaft. Anti-D-Prophylaxe verhindert Sensibilisierung.

---

## Bombay-Phänotyp (Sonderfall)

Ein seltener Sonderfall: Menschen mit dem **Bombay-Phänotyp** (h/h) können das **H-Antigen** nicht bilden, das als Vorläufer für A- und B-Antigene dient. Selbst wenn sie I^A oder I^B tragen, erscheinen **keine** Antigene auf der Erythrozytenoberfläche → sie testen als **Blutgruppe 0**, sind es genetisch aber nicht. Häufigkeit: ca. 1:10.000 (in Indien häufiger). MedAT-Relevanz: gelegentlich als Vertiefungsfrage.`,
      lernziele: [
        "AB0-System: Allele, Phänotypen und Kodominanz erklären.",
        "Kreuzungsaufgaben zu Blutgruppen lösen (z. B. welche Blutgruppen können Kinder haben?).",
      ],
      sections: [],
      merksätze: [
        "AB0: I^A und I^B kodominant (AB); beide dominant über i. I^A i × I^B i → alle vier Blutgruppen möglich.",
      ],
      selfTest: [
        {
          question:
            "Ein Vater hat Blutgruppe A (Genotyp I^A i), die Mutter Blutgruppe B (Genotyp I^B i). Welche Blutgruppen können die Kinder haben?",
          options: [
            "Nur A oder B",
            "Nur A, B oder AB",
            "Nur 0",
            "A, B, AB und 0 (alle vier möglich)",
            "Nur AB",
          ],
          correctIndex: 3,
          explanation:
            "Vater gibt I^A oder i, Mutter gibt I^B oder i. Kombinationen: I^A I^B (AB), I^A i (A), I^B i (B), i i (0). Alle vier Blutgruppen sind mit je 25 % möglich.",
          difficulty: 1,
          tags: ["blutgruppe", "ab0", "kreuzung"],
        },
        {
          question:
            "Können Eltern mit Blutgruppe 0 (ii) und AB (I^A I^B) ein Kind mit Blutgruppe 0 haben?",
          options: [
            "Ja, mit 25 % Wahrscheinlichkeit",
            "Ja, mit 50 % Wahrscheinlichkeit",
            "Nein — Kinder können nur Blutgruppe A oder B haben",
            "Ja, mit 12,5 % Wahrscheinlichkeit",
            "Nein — alle Kinder haben Blutgruppe AB",
          ],
          correctIndex: 2,
          explanation:
            "Elternteil 0 (ii) gibt immer i weiter. Elternteil AB (I^A I^B) gibt I^A oder I^B weiter. Kinder: I^A i (Blutgruppe A) oder I^B i (Blutgruppe B). Blutgruppe 0 (ii) oder AB (I^A I^B) ist **nicht** möglich.",
          difficulty: 1,
          tags: ["blutgruppe", "ab0", "kreuzung"],
        },
        {
          question: "Was bedeutet Kodominanz beim AB0-System?",
          options: [
            "I^A unterdrückt I^B",
            "I^A und I^B werden beide gleichzeitig exprimiert — Blutgruppe AB hat A- UND B-Antigene",
            "I^A und I^B bilden einen Mischphänotyp",
            "Nur i wird exprimiert",
            "Kodominanz gibt es beim AB0-System nicht",
          ],
          correctIndex: 1,
          explanation:
            "**Kodominanz** bei AB0: I^A und I^B sind **kodominant** — bei Genotyp I^A I^B werden **beide** Antigene (A und B) auf der Erythrozytenoberfläche exprimiert → Blutgruppe **AB**. Das ist keine Mischung (intermediär), sondern beide Merkmale gleichzeitig.",
          difficulty: 1,
          tags: ["kodominant", "ab0", "blutgruppe"],
        },
        {
          question:
            "Eine Rh-negative Mutter (dd) bekommt ein Rh-positives Kind (Dd). Welches Risiko besteht?",
          options: [
            "Kein Risiko",
            "Das Kind wird Blutgruppe 0",
            "Die Mutter kann Anti-D-Antikörper bilden → Gefahr für Morbus haemolyticus neonatorum bei Folgeschwangerschaften",
            "Das Kind wird automatisch Rh-negativ",
            "Die Mutter wird Rh-positiv",
          ],
          correctIndex: 2,
          explanation:
            "Die Rh-negative Mutter (dd) kann gegen das D-Antigen des Kindes **Anti-D-Antikörper** bilden (Sensibilisierung, meist bei der Geburt). Bei einer **erneuten Schwangerschaft** mit Rh-positivem Kind können diese Antikörper die Plazenta passieren → **Morbus haemolyticus neonatorum**. Prävention: **Anti-D-Prophylaxe**.",
          difficulty: 2,
          tags: ["rhesus", "anti-d", "schwangerschaft"],
        },
        {
          question: "Wie viele verschiedene Genotypen gibt es beim AB0-System?",
          options: ["3", "4", "5", "6", "8"],
          correctIndex: 3,
          explanation:
            "Es gibt **6 Genotypen**: I^A I^A, I^A i, I^B I^B, I^B i, I^A I^B, ii. Diese ergeben **4 Phänotypen** (Blutgruppen): A, B, AB, 0. Der Unterschied zwischen Genotyp- und Phänotyp-Anzahl ist typisch bei Dominanz.",
          difficulty: 1,
          tags: ["ab0", "genotyp", "phänotyp"],
        },
      ],
      altfrage: {
        text: "Eine Mutter hat die Blutgruppe A (Genotyp I^A i), der Vater hat Blutgruppe B (Genotyp I^B i). Welche Blutgruppe kann bei den Kindern NICHT auftreten?",
        options: [
          { id: "a", text: "Blutgruppe A" },
          { id: "b", text: "Blutgruppe B" },
          { id: "c", text: "Blutgruppe AB" },
          { id: "d", text: "Blutgruppe 0" },
          { id: "e", text: "Alle vier Blutgruppen (A, B, AB, 0) sind möglich." },
        ],
        correctOptionId: "e",
        explanation:
          "Bei Mutter I^A i und Vater I^B i ergeben sich im Punnett-Quadrat vier mögliche Genotypen: **I^A I^B** (AB), **I^A i** (A), **I^B i** (B), **ii** (0). Alle vier Blutgruppen sind möglich — es gibt **keine**, die ausgeschlossen wäre. Die richtige Antwort ist E, weil die Frage nach einer unmöglichen Blutgruppe fragt und tatsächlich alle auftreten können.",
      },
    },

    // ─── 8. Mutationen ───────────────────────────────────────────────────────
    {
      id: "bio-4-08",
      title: "Mutationen",
      imageUrl: "/images/bms/bio-dna-replikation.jpg",
      imageCaption: "Abb.: DNA-Replikation mit Leit- und Folgestrang (OpenStax, CC BY 4.0)",
      stichworte: [
        "Genmutation",
        "Chromosomenmutation",
        "Genommutation",
        "Punktmutation",
        "Deletion",
        "Trisomie",
        "Nicht-Disjunktion",
      ],
      content: `## Eine einzige Base verändert ein Leben

Ein Austausch von Adenin gegen Thymin im β-Globin-Gen — sechs Buchstaben im drei Milliarden Buchstaben langen menschlichen Genom — reicht aus, um aus normalen runden Erythrozyten sichelförmige, starre Zellen zu machen. Die **Sichelzellanämie** zeigt eindrücklich: Mutationen können auf der kleinsten Ebene auftreten und trotzdem das gesamte Organsystem betreffen. Dieses Kapitel ordnet Mutationen systematisch nach drei Ebenen (Gen, Chromosom, Genom), erklärt ihre Ursachen und stellt die wichtigsten DNA-Reparaturmechanismen vor.

---

## Genmutationen — Veränderungen der DNA-Sequenz

{{DIAGRAM:mutation-types}}

Genmutationen betreffen einzelne oder wenige Basenpaare innerhalb eines Gens. Man unterscheidet **Punktmutationen** (Austausch einer Base) und **Frameshift-Mutationen** (Einfügung oder Deletion von Basen).

### Punktmutationen

Bei einer Punktmutation wird eine einzelne Base gegen eine andere ausgetauscht. Je nach Auswirkung auf das Protein ergeben sich drei Typen:

- **Stille Mutation (Silent):** Das neue Codon codiert dieselbe Aminosäure (dank der Degeneriertheit des genetischen Codes). Beispiel: GAA → GAG — beide codieren Glutamat. Kein Effekt auf das Protein.
- **Missense-Mutation:** Das neue Codon codiert eine **andere Aminosäure**. Die Auswirkung hängt von der Position und der chemischen Ähnlichkeit ab. Konservative Missense (ähnliche Aminosäure) sind oft toleriert, nicht-konservative können das Protein zerstören. Beispiel: Sichelzellanämie — GAG → GTG: Glutamat → Valin im β-Globin.
- **Nonsense-Mutation:** Das neue Codon ist ein **Stopp-Codon** (UAA, UAG, UGA). Die Translation bricht vorzeitig ab → verkürztes, meist funktionsloses Protein. Beispiel: Viele Fälle von Mukoviszidose (CFTR-Gen) und Duchenne-Muskeldystrophie.

### Frameshift-Mutationen

Werden Basen eingefügt (**Insertion**) oder entfernt (**Deletion**), und ist die Zahl **nicht durch 3 teilbar**, verschiebt sich das gesamte Leseraster ab der Mutationsstelle. Alle nachfolgenden Codons werden falsch gelesen, oft entsteht ein vorzeitiges Stopp-Codon. Frameshift-Mutationen führen fast immer zu einem **schwer defekten Protein**. Ist die Insertion/Deletion durch 3 teilbar, bleibt das Leseraster erhalten (In-frame-Mutation) — es wird eine Aminosäure eingefügt oder entfernt, das restliche Protein bleibt intakt.

| Mutationstyp | Mechanismus | Auswirkung | Beispiel |
|---|---|---|---|
| Silent | Basenaustausch, gleiches AS-Codon | Keine | GAA → GAG (Glu → Glu) |
| Missense | Basenaustausch, andere Aminosäure | Mild bis schwer | Sichelzellanämie (Glu → Val) |
| Nonsense | Basenaustausch → Stopp-Codon | Verkürztes Protein | Mukoviszidose (CFTR) |
| Frameshift | Insertion/Deletion (nicht ÷3) | Leseraster verschoben | Tay-Sachs-Krankheit |
| In-frame | Insertion/Deletion (÷3) | ±1 Aminosäure | ΔF508-CFTR (Deletion von Phe508) |

> **Merke:** Punktmutation = Austausch einer Base (Silent / Missense / Nonsense). Frameshift = Insertion oder Deletion, Basenzahl nicht durch 3 teilbar → Leserasterverschiebung. Nonsense erzeugt ein Stopp-Codon.

Genmutationen können **somatisch** auftreten (nur im betroffenen Gewebe, z. B. bei Krebs) oder in **Keimzellen** (vererbbar an die nächste Generation).

---

## Chromosomenmutationen — strukturelle Veränderungen

{{DIAGRAM:chromosomal-mutations}}

Chromosomenmutationen verändern die **Struktur** ganzer Chromosomenabschnitte — sie betreffen Tausende bis Millionen Basenpaare, nicht einzelne Gene. Vier Grundtypen:

### Deletion

Verlust eines Chromosomenabschnitts. Die Gene dieses Abschnitts fehlen → **Haploinsuffizienz** (eine Kopie reicht nicht für normale Funktion). Klinisches Beispiel: **Cri-du-chat-Syndrom** (Katzenschrei-Syndrom) — Deletion am kurzen Arm von Chromosom 5 (del 5p). Betroffene Kinder zeigen einen charakteristischen hohen Schrei, geistige Retardierung und Mikrozephalie (kleiner Kopf).

### Duplikation

Verdopplung eines Chromosomenabschnitts → Gendosiseffekt (zu viel Genprodukt). Duplikationen können zu Genfamilien führen und sind ein Motor der Evolution (das Duplikat kann neue Funktionen erwerben).

### Inversion

Ein Chromosomenabschnitt wird **herausgeschnitten und um 180° gedreht** wieder eingebaut. Perizentrische Inversion (umfasst das Zentromer) vs. parazentrische Inversion (nur ein Arm). Inversionsträger sind oft phänotypisch unauffällig, aber bei der Meiose können **unbalancierte Keimzellen** entstehen.

### Translokation

Verlagerung eines Chromosomenstücks auf ein **anderes Chromosom**:

- **Reziproke Translokation:** Zwei Chromosomen tauschen Stücke aus. Klinisches Beispiel: **Philadelphia-Chromosom** — t(9;22): Das ABL-Gen (Chromosom 9) fusioniert mit dem BCR-Gen (Chromosom 22) → BCR-ABL-Fusionsprotein (dauerhafte Tyrosinkinase-Aktivität) → **Chronische myeloische Leukämie (CML)**. Therapie: Imatinib (Tyrosinkinase-Inhibitor).
- **Robertsonsche Translokation:** Fusion zweier **akrozentrischer Chromosomen** (13, 14, 15, 21, 22) an ihren Zentromeren. Träger haben 45 Chromosomen, sind aber phänotypisch unauffällig (**balanciert**). Risiko: unbalancierte Keimzellen → **Translokations-Trisomie 21** (ca. 4 % aller Down-Syndrom-Fälle, altersunabhängig).

> **Merke:** Chromosomenmutation = Deletion, Duplikation, Inversion, Translokation. Klinische Schlüsselbeispiele: Cri-du-chat (del 5p), CML (t(9;22) Philadelphia-Chromosom), Robertsonsche Translokation (Trisomie 21). Balancierte Träger sind phänotypisch unauffällig, haben aber ein Risiko für unbalancierte Nachkommen.

---

## Genommutationen — veränderte Chromosomenzahl

Genommutationen betreffen die **Anzahl** ganzer Chromosomen. Man unterscheidet Aneuploidie und Polyploidie.

### Aneuploidie

Abweichung um **einzelne Chromosomen** — Ursache ist fast immer **Nicht-Disjunktion** in der Meiose (homologe Chromosomen oder Schwesterchromatiden trennen sich nicht korrekt). Eine Keimzelle erhält ein Chromosom zu viel, die andere zu wenig.

| Aneuploidie | Karyotyp | Syndrom | Leitsymptome |
|---|---|---|---|
| Trisomie 21 | 47,XX/XY,+21 | Down-Syndrom | Geistige Retardierung, Epikanthus, Vierfingerfurche, Herzfehler |
| Trisomie 18 | 47,XX/XY,+18 | Edwards-Syndrom | Schwere Fehlbildungen, Überkreuzen der Finger, meist letal im 1. Lebensjahr |
| Trisomie 13 | 47,XX/XY,+13 | Pätau-Syndrom | Holoprosenzephalie, Lippen-Kiefer-Gaumenspalte, meist letal |
| Monosomie X | 45,X | Turner-Syndrom | Kleinwuchs, Flügelfell (Pterygium colli), Infertilität |
| 47,XXY | 47,XXY | Klinefelter-Syndrom | Hochwuchs, Gynäkomastie, Infertilität |

Das Risiko für Trisomien (besonders Trisomie 21) steigt mit dem **mütterlichen Alter**, da die Eizellen jahrzehntelang in der Meiose-I-Prophase arretiert sind und die Kohäsin-Proteine (halten Chromosomen zusammen) mit der Zeit degenerieren.

### Polyploidie

Vervielfachung des **gesamten** Chromosomensatzes (3n = triploid, 4n = tetraploid). Ursache: Befruchtung durch zwei Spermien (Dispermie) oder Ausfall der ersten meiotischen Teilung. Beim Menschen ist Polyploidie **in der Regel letal** (Spontanabort im ersten Trimester). In der Pflanzenwelt ist Polyploidie dagegen verbreitet und ein wichtiger Mechanismus der Artbildung.

> **Merke:** Aneuploidie = Abweichung einzelner Chromosomen (Trisomie/Monosomie) durch Nicht-Disjunktion. Polyploidie = Vervielfachung des gesamten Satzes (3n, 4n), beim Menschen letal. Trisomie 21 = häufigste lebensfähige Autosomentrisomie, Risiko steigt mit mütterlichem Alter.

---

## Mutationsursachen: Spontan vs. induziert

Mutationen entstehen entweder **spontan** (ohne äußere Einwirkung) oder **induziert** (durch Mutagene):

**Spontane Mutationen:**
- Replikationsfehler (Einbau falscher Basen, Schlupf bei repetitiven Sequenzen)
- Tautomerie (seltene Keto-Enol-Tautomere führen zu Fehlpaarungen)
- Depurinierung (Verlust einer Purinbase, ~5.000×/Zelle/Tag)
- Desaminierung (Cytosin → Uracil, 5-Methylcytosin → Thymin)
- Oxidativer Schaden durch reaktive Sauerstoffspezies (ROS)

**Induzierte Mutationen (Mutagene):**
- **UV-Strahlung:** Thymin-Dimere (kovalente Verbindung benachbarter Pyrimidine) → NER-Reparatur nötig. Defekte NER: **Xeroderma pigmentosum** (extreme Sonnenempfindlichkeit, Hautkrebsrisiko ×1000)
- **Ionisierende Strahlung** (Röntgen, Gamma): Doppelstrangbrüche → Chromosomenaberrationen
- **Chemische Mutagene:** Basenanaloga (z. B. 5-Bromuracil), alkylierende Agenzien (z. B. Ethylmethansulfonat), interkalierende Substanzen (z. B. Ethidiumbromid → Frameshifts), Aflatoxin B1 (Schimmelpilz → Leberkrebs, G→T-Transversion in p53)

> **Merke:** Spontane Mutationen: Replikationsfehler, Depurinierung, Desaminierung, ROS. Induzierte Mutagene: UV (Thymin-Dimere), ionisierende Strahlung (Doppelstrangbrüche), Chemikalien (Basenanaloga, Alkylanzien, Interkalatoren).

---

## DNA-Reparaturmechanismen

Die Zelle besitzt mehrere Reparatursysteme, um Mutationen zu korrigieren, **bevor** sie an Tochterzellen weitergegeben werden:

- **Mismatch-Reparatur (MMR):** Erkennt Fehlpaarungen, die der Polymerase-Proofreading entgangen sind. Das MutS/MutL-System schneidet den fehlerhaften Strang heraus und ersetzt ihn. Defekte: **Lynch-Syndrom** (hereditäres nicht-polypöses Kolonkarzinom, HNPCC).
- **Basenexzisionsreparatur (BER):** Erkennt kleine Basenschäden (Desaminierung, Oxidation). DNA-Glykosylase entfernt die beschädigte Base → AP-Stelle → Auffüllung durch Polymerase + Ligase.
- **Nukleotidexzisionsreparatur (NER):** Erkennt sperrige Schäden (Thymin-Dimere, kovalente Addukte). Schneidet ein ~25–30 Nukleotide langes Stück heraus. Defekt: **Xeroderma pigmentosum**.
- **Nicht-homologes Endjoining (NHEJ):** Repariert **Doppelstrangbrüche** durch direktes Zusammenfügen der Enden — schnell, aber fehleranfällig (kann kleine Deletionen/Insertionen verursachen).
- **Homologe Rekombinationsreparatur (HR):** Nutzt die Schwesterchromatide als Vorlage → fehlerfrei, aber nur in der S/G2-Phase möglich. Defekte in BRCA1/BRCA2 erhöhen das Risiko für Brust- und Eierstockkrebs.

> **Merke:** MMR = Fehlpaarungen (Lynch-Syndrom). BER = kleine Basenschäden. NER = sperrige Schäden wie Thymin-Dimere (Xeroderma pigmentosum). NHEJ = Doppelstrangbrüche (schnell, fehleranfällig). HR = fehlerfreie DSB-Reparatur via Schwesterchromatid (BRCA1/2).

---

## Klinische Bedeutung: Gain-of-function vs. Loss-of-function

Mutationen lassen sich nach ihrem Effekt auf das Genprodukt einteilen:

- **Loss-of-function (LOF):** Das Protein verliert seine Funktion (z. B. durch Nonsense, Frameshift oder Deletion). Oft **rezessiv** — eine funktionierende Kopie reicht aus. Wird beide Kopien betroffen, entsteht die Erkrankung. Beispiel: Mukoviszidose (CFTR), Phenylketonurie (PAH).
- **Gain-of-function (GOF):** Das Protein erhält eine **neue oder übermäßige** Funktion. Oft **dominant** — eine mutierte Kopie genügt für den Phänotyp. Beispiel: Achondroplasie (FGFR3 konstitutiv aktiv → Minderwuchs), Huntington-Krankheit (Trinukleotid-Repeat-Expansion → toxisches Protein).
- **Dominant-negativ:** Das mutierte Protein stört die Funktion des normalen Proteins (z. B. bei Multimeren wie Kollagen → Osteogenesis imperfecta).

Im Kontext der Tumorbiologie: **Onkogene** (GOF in Protoonkogenen, z. B. RAS-Mutation) treiben das Zellwachstum an; **Tumorsuppressorgene** (LOF, z. B. p53, RB1) verlieren ihre Bremsfunktion. Krebs entsteht typischerweise durch **Akkumulation mehrerer Mutationen** (Multi-Hit-Hypothese nach Knudson).

> **Merke:** LOF = Funktionsverlust (oft rezessiv). GOF = neue/übermäßige Funktion (oft dominant). Onkogene = GOF in Protoonkogenen; Tumorsuppressoren = LOF. Krebs = Akkumulation mehrerer Mutationen.

---

## Übersicht: Die drei Mutationsebenen

| Ebene | Definition | Beispiel-Typen | Klinisches Beispiel |
|---|---|---|---|
| **Genmutation** | Veränderung der DNA-Sequenz eines Gens | Silent, Missense, Nonsense, Frameshift | Sichelzellanämie, Mukoviszidose, Tay-Sachs |
| **Chromosomenmutation** | Strukturelle Veränderung von Chromosomenabschnitten | Deletion, Duplikation, Inversion, Translokation | Cri-du-chat (del 5p), CML (t(9;22)), Translokations-Trisomie 21 |
| **Genommutation** | Veränderte Chromosomenzahl | Aneuploidie (Trisomie, Monosomie), Polyploidie | Down-Syndrom, Turner (45,X), Edwards, Pätau |`,
      lernziele: [
        "Genmutation, Chromosomenmutation und Genommutation unterscheiden und Beispiele zuordnen.",
        "Nicht-Disjunktion als Ursache von Trisomie/Monosomie erklären.",
      ],
      sections: [],
      merksätze: [
        "Genmutation = Sequenz; Chromosomenmutation = Struktur (Deletion, Translokation …); Genommutation = Zahl (Trisomie, Monosomie).",
      ],
      selfTest: [
        {
          question:
            "Durch welchen Mechanismus entsteht beim Menschen typischerweise eine Trisomie (z. B. Trisomie 21)?",
          options: [
            "Genmutation (Punktmutation)",
            "Chromosomenmutation (Deletion)",
            "Nicht-Disjunktion in der Meiose",
            "Frameshift-Mutation",
            "Translokation",
          ],
          correctIndex: 2,
          explanation:
            "**Trisomie** (3 Kopien eines Chromosoms) entsteht typischerweise durch **Nicht-Disjunktion** in der Meiose: Die homologen Chromosomen (oder in Meiose II die Schwesterchromatiden) trennen sich nicht → eine Keimzelle erhält zwei Kopien, eine erhält keine. Nach Befruchtung: 47 Chromosomen mit Trisomie. Genmutationen ändern die Sequenz, nicht die Chromosomenzahl.",
          difficulty: 1,
          tags: ["trisomie", "nicht-disjunktion", "meiose"],
        },
        {
          question: "Welche Mutationsebene liegt bei Cri-du-chat-Syndrom vor?",
          options: [
            "Genmutation (Punktmutation)",
            "Genommutation (Trisomie)",
            "Chromosomenmutation (Deletion 5p)",
            "Polyploidie",
            "Frameshift-Mutation",
          ],
          correctIndex: 2,
          explanation:
            "Cri-du-chat (Katzenschrei-Syndrom) entsteht durch eine **Deletion** am kurzen Arm von Chromosom 5 (**5p-Deletion**). Das ist eine **Chromosomenmutation** (strukturelle Veränderung eines Chromosomenabschnitts), keine Genmutation (Sequenz) und keine Genommutation (Zahl).",
          difficulty: 1,
          tags: ["chromosomenmutation", "deletion", "cri-du-chat"],
        },
        {
          question: "Was ist eine Nonsense-Mutation?",
          options: [
            "Eine Mutation, die keine Auswirkung hat",
            "Eine Punktmutation, die ein Stopp-Codon erzeugt → verkürztes Protein",
            "Eine Deletion eines ganzen Chromosoms",
            "Eine Verdopplung eines DNA-Abschnitts",
            "Eine Inversion eines Chromosomenarms",
          ],
          correctIndex: 1,
          explanation:
            "Eine **Nonsense-Mutation** ist eine Punktmutation, die ein normales Codon in ein **Stopp-Codon** umwandelt. Die Translation bricht vorzeitig ab → das Protein ist **verkürzt** und meist nicht funktional. Beispiel: Viele Fälle von Mukoviszidose.",
          difficulty: 1,
          tags: ["nonsense-mutation", "stopp-codon", "genmutation"],
        },
        {
          question: "Wann entsteht eine Frameshift-Mutation?",
          options: [
            "Bei Austausch einer einzelnen Base",
            "Bei Einfügung oder Deletion von Basen, deren Zahl NICHT durch 3 teilbar ist",
            "Bei Polyploidie",
            "Bei Translokation",
            "Bei Einfügung von genau 3 Basen",
          ],
          correctIndex: 1,
          explanation:
            "Eine **Frameshift-Mutation** entsteht, wenn Basen eingefügt oder deletiert werden und die Zahl **nicht durch 3 teilbar** ist. Dadurch verschiebt sich das **Leseraster** → alle nachfolgenden Codons werden falsch gelesen → meist schwer defektes Protein. Bei Einfügung/Deletion von 3 Basen bleibt das Leseraster erhalten (kein Frameshift).",
          difficulty: 2,
          tags: ["frameshift", "genmutation", "leseraster"],
        },
        {
          question: "Was ist eine balancierte Translokation?",
          options: [
            "Ein kompletter Verlust eines Chromosoms",
            "Eine Verlagerung von Chromosomenmaterial ohne Nettoverlust — Träger oft phänotypisch unauffällig",
            "Eine Verdopplung des gesamten Genoms",
            "Eine Punktmutation ohne Auswirkung",
            "Eine Trisomie",
          ],
          correctIndex: 1,
          explanation:
            "Bei einer **balancierten Translokation** wird Chromosomenmaterial auf ein anderes Chromosom verlagert, aber es geht **kein Material verloren**. Der Träger ist phänotypisch meist unauffällig, hat aber ein **erhöhtes Risiko** für unbalancierte Keimzellen → Nachkommen mit Über- oder Unterdosierung (z. B. Translokations-Trisomie 21).",
          difficulty: 2,
          tags: ["translokation", "chromosomenmutation", "balanciert"],
        },
      ],
      altfrage: {
        text: "Welche Mutation führt zu einer Verschiebung des Leserasters (Frameshift)?",
        options: [
          { id: "a", text: "Substitution einer Base durch eine andere (Punktmutation)" },
          { id: "b", text: "Deletion von drei aufeinanderfolgenden Basenpaaren" },
          { id: "c", text: "Insertion eines einzelnen Nukleotids in die codierende Sequenz" },
          { id: "d", text: "Stille Mutation, die dieselbe Aminosäure codiert" },
          { id: "e", text: "Duplikation eines ganzen Chromosoms" },
        ],
        correctOptionId: "c",
        explanation:
          "Eine **Frameshift-Mutation** entsteht, wenn die Anzahl eingefügter oder deletierter Basen **nicht durch 3 teilbar** ist. Die Insertion eines **einzelnen Nukleotids** verschiebt das Leseraster aller nachfolgenden Codons → komplett verändertes Protein. Eine Substitution (A) ändert nur ein Codon. Die Deletion von 3 Basen (B) entfernt eine Aminosäure ohne Frameshift. Stille Mutationen (D) haben keinen Effekt. Chromosomenduplikation (E) ist eine Genommutation.",
      },
    },

    // ─── 9. Genexpression (Grundprinzip) ─────────────────────────────────────
    {
      id: "bio-4-09",
      title: "Von der DNA zum Merkmal: Genexpression",
      imageUrl: "/images/bms/bio-transkription-translation.jpg",
      imageCaption:
        "Abb.: Vom Gen zum Protein — Transkription und Translation (OpenStax, CC BY 4.0)",
      stichworte: [
        "Genexpression",
        "Transkription",
        "Translation",
        "DNA",
        "RNA",
        "Protein",
        "Zentraldogma",
      ],
      content: `## Das Zentraldogma der Molekularbiologie

Das Zentraldogma beschreibt den gerichteten Informationsfluss in biologischen Systemen: **DNA → RNA → Protein**. Die DNA ist der permanente **Informationsspeicher** im Zellkern. Die **mRNA** (messenger RNA, Boten-RNA) ist eine temporäre **Arbeitskopie** eines bestimmten Gens, die aus dem Zellkern ins Zytoplasma transportiert wird. Das **Protein** ist das funktionelle **Endprodukt**, das Enzyme, Strukturproteine, Transportmoleküle, Rezeptoren oder Signalmoleküle bildet.

**Warum diese Richtung?** Die DNA bleibt geschützt im Zellkern; nur Kopien (mRNA) gelangen ins Zytoplasma. Diese Kopien werden nach Gebrauch abgebaut (Halbwertszeit wenige Minuten bis Stunden). So kann die Zelle die Genexpression **regulieren**: Gene können nach Bedarf ein- und ausgeschaltet werden, ohne die DNA selbst zu verändern.

**Genexpression** = die Gesamtheit aller Schritte, durch die die Information eines Gens in ein funktionelles Produkt (meist ein Protein) umgesetzt wird. Ein Gen, das gerade abgelesen wird, ist "exprimiert"; ein stillgelegtes Gen ist "reprimiert".

> **Merke:** DNA → (Transkription) → mRNA → (Translation) → Protein. Genexpression = Umsetzung der genetischen Information in ein Produkt. Die DNA bleibt als Originalspeicher im Kern erhalten.

{{IMAGE}}

---

## Transkription — von der DNA zur mRNA


{{DIAGRAM:dna-helix}}

Die Transkription findet im **Zellkern** statt und wird von der **RNA-Polymerase** (bei Eukaryoten: RNA-Polymerase II für mRNA) katalysiert.

**Ablauf in drei Phasen:**

1. **Initiation:** Die RNA-Polymerase bindet an die **Promotorregion** (spezifische DNA-Sequenz vor dem Gen, z. B. TATA-Box (AT-reiche Erkennungssequenz)). Transkriptionsfaktoren helfen bei der Erkennung und Bindung. Der DNA-Doppelstrang wird lokal entmolgen (Transkriptionsblase).

2. **Elongation:** Die RNA-Polymerase liest den **Matrizenstrang** (Vorlagenstrang, 3' → 5') und synthetisiert die mRNA in **5' → 3'-Richtung**. Basenpaarungsregeln: A-U, T-A, G-C, C-G. In der RNA ersetzt **Uracil (U)** das Thymin (T) der DNA. Die mRNA-Sequenz entspricht dem **codogenen Strang** (Sinnstrang) (Nicht-Matrizenstrang), nur mit U statt T.

3. **Termination:** Die RNA-Polymerase erreicht ein **Terminationssignal** und löst sich von der DNA. Die fertige **Prä-mRNA** (pre-mRNA) wird prozessiert.

**mRNA-Prozessierung (bei Eukaryoten):**
- **5'-Capping:** Methylguanosin-Kappe schützt vor Abbau und unterstützt die Ribosomenbindung
- **3'-Polyadenylierung:** Poly-A-Schwanz (~200 Adenine) stabilisiert die mRNA
- **Spleißen (Splicing):** **Introns** (nicht-codierende Abschnitte) werden entfernt; **Exons** (codierende Abschnitte) werden zusammengesetzt. Alternatives Spleißen ermöglicht, dass ein Gen mehrere verschiedene Proteine codieren kann.

Die reife mRNA wird dann durch die **Kernporen** ins Zytoplasma exportiert.

> **Merke:** Transkription = DNA → mRNA im Zellkern (RNA-Polymerase). Basen: A, U, G, C (U statt T). Eukaryoten: Capping, Polyadenylierung, Spleißen. Matrizenstrang 3'→5', mRNA wächst 5'→3'.

---

## Der genetische Code


Der genetische Code ist die **Übersetzungsregel** von Nucleotidsequenz in Aminosäure-Sequenz:

- **Codon:** 3 aufeinanderfolgende Basen der mRNA codieren für eine Aminosäure (oder ein Stoppsignal)
- **64 Codons** insgesamt (4^3 = 64) für nur **20 Aminosäuren** → der Code ist **degeneriert** (redundant): mehrere Codons können dieselbe Aminosäure codieren (z. B. GCU, GCC, GCA, GCG → alle Alanin)
- **Startcodon:** AUG (codiert Methionin) — markiert den Beginn der Translation
- **Stoppcodons:** UAA, UAG, UGA — signalisieren das Ende der Translation (keine Aminosäure)
- Der Code ist **universell** (fast alle Organismen verwenden denselben Code) und wird **ohne Überlappung** und **ohne Lücken** gelesen (Leseraster)

**Leserasterverschiebung (Frameshift):** Wenn durch Insertion oder Deletion die Dreiergruppierung verschoben wird, ändern sich alle nachfolgenden Codons → meist nicht-funktionales Protein. Das erklärt, warum Frameshift-Mutationen besonders schädlich sind.

> **Merke:** 3 Basen = 1 Codon = 1 Aminosäure. 64 Codons, 20 Aminosäuren → degenerierter Code. AUG = Start (Met), UAA/UAG/UGA = Stopp. Leseraster entscheidend!

---

## Translation — von der mRNA zum Protein


Die Translation benötigt: **mRNA** (Vorlage), **Ribosomen** (Übersetzungsmaschine, bestehend aus rRNA und Proteinen), **tRNA** (Transfer-RNA, bringt die passende Aminosäure) und **Aminosäuren** als Bausteine.

**Ablauf in drei Phasen:**

1. **Initiation:** Die kleine ribosomale Untereinheit bindet an die mRNA und findet das **Startcodon AUG**. Die Initiator-tRNA (mit Methionin beladen) bindet. Die große Untereinheit lagert sich an → funktionsfähiges Ribosom mit drei Bindungsstellen (A-, P-, E-Stelle).

2. **Elongation:** Jedes Codon der mRNA wird abgelesen. Die passende **tRNA** mit dem komplementären **Anticodon** bindet an der **A-Stelle**. Durch **Peptidbindung** wird die Aminosäure an die wachsende Polypeptidkette angefügt (katalysiert durch die rRNA = Ribozym (katalytisch aktive RNA)). Das Ribosom rückt um ein Codon weiter (Translokation). Dieser Zyklus wiederholt sich für jedes Codon.

3. **Termination:** Wenn ein **Stoppcodon** (UAA, UAG, UGA) erreicht wird, bindet ein **Release-Faktor** (kein tRNA). Die Polypeptidkette wird freigesetzt, das Ribosom zerfällt in seine Untereinheiten.

**Nach der Translation:** Das Polypeptid faltet sich in seine dreidimensionale **Tertiärstruktur** (mithilfe von Chaperonen (Faltungshelfern)). Ggf. posttranslationale Modifikationen (Glykosylierung, Phosphorylierung) im ER und Golgi-Apparat. Erst das korrekt gefaltete Protein ist funktionsfähig.

**Polyribosomen (Polysomen):** Mehrere Ribosomen können gleichzeitig dieselbe mRNA ablesen → effiziente Proteinproduktion.

> **Merke:** Translation = mRNA → Protein an Ribosomen im Zytoplasma. tRNA bringt Aminosäuren (Anticodon erkennt Codon). Initiation (AUG) → Elongation (Peptidbindung) → Termination (Stoppcodon). Polypeptid faltet sich zum funktionellen Protein.

---

## Zusammenhang mit Genetik und Vererbung


{{DIAGRAM:endomembrane-system}}

Die **Allele** eines Gens unterscheiden sich in ihrer **DNA-Sequenz** (z. B. Punktmutation). Unterschiedliche DNA-Sequenz → unterschiedliche mRNA → unterschiedliches Protein (veränderte Aminosäure-Sequenz, veränderte Faltung/Funktion) → unterschiedlicher **Phänotyp**.

**Molekulare Erklärung von Dominanz und Rezessivität:**
- **Dominantes Allel:** Das Protein ist funktionsfähig; bereits eine Kopie reicht für den normalen Phänotyp (= Haploinsuffizienz ist nicht vorhanden).
- **Rezessives Allel:** Das Protein ist nicht-funktional oder fehlt; bei Heterozygoten kompensiert das dominante Allel. Nur bei **Homozygotie** (aa) fehlt die Funktion → rezessiver Phänotyp.
- **Kodominanz:** Beide Allele produzieren unterschiedliche, aber funktionelle Proteine → beide Merkmale sichtbar (z. B. AB0-Blutgruppen).

Vererbung bedeutet: Die DNA (Allele) wird über Keimzellen (Meiose) von Generation zu Generation weitergegeben. In jeder neuen Zelle wird sie erneut exprimiert (DNA → RNA → Protein) und prägt den Phänotyp.

---

## Ausnahmen vom Zentraldogma

- **Reverse Transkriptase:** Bei **Retroviren** (z. B. HIV) wird RNA in DNA umgeschrieben (RNA → DNA). Diese DNA wird ins Wirtsgenom integriert (Provirus). Auch **Telomerase** nutzt eine Reverse-Transkriptase-Aktivität.
- **RNA-Replikation:** Einige RNA-Viren replizieren RNA direkt (RNA → RNA).
- **Nicht-codierende RNA:** Nicht alle Gene codieren für Proteine. rRNA, tRNA, miRNA, siRNA, lncRNA haben direkte Funktionen als RNA-Moleküle.

> **Merke:** Reverse Transkriptase (Retroviren, Telomerase): RNA → DNA. Nicht alle Gene codieren Proteine — viele RNA-Typen haben eigene Funktionen.`,
      lernziele: [
        "Zentraldogma (DNA → RNA → Protein) und Genexpression als Konzept beschreiben.",
        "Transkription und Translation begrifflich unterscheiden.",
      ],
      sections: [],
      merksätze: [
        "DNA → Transkription → RNA → Translation → Protein. Genexpression = Umsetzung des Gens in ein Produkt (Protein).",
      ],
      selfTest: [
        {
          question: "In welche Richtung geht der Informationsfluss beim Zentraldogma?",
          options: [
            "Protein → RNA → DNA",
            "DNA → RNA → Protein",
            "RNA → DNA → Protein",
            "Protein → DNA → RNA",
            "Nur DNA → Protein (ohne RNA)",
          ],
          correctIndex: 1,
          explanation:
            "Das **Zentraldogma** beschreibt den Informationsfluss **DNA → RNA → Protein**. Zuerst wird die DNA in RNA umgeschrieben (**Transkription**), dann wird die RNA an den Ribosomen in Protein übersetzt (**Translation**). Die Umkehrung (Protein → RNA → DNA) gilt nicht als normaler Weg der Genexpression.",
          difficulty: 1,
          tags: ["zentraldogma", "genexpression", "transkription"],
        },
        {
          question: "Wo findet bei Eukaryoten die Transkription statt?",
          options: [
            "An den Ribosomen im Zytoplasma",
            "Im Zellkern",
            "In den Mitochondrien (ausschließlich)",
            "An der Zellmembran",
            "Im endoplasmatischen Retikulum",
          ],
          correctIndex: 1,
          explanation:
            "Die **Transkription** (DNA → mRNA) findet bei Eukaryoten im **Zellkern** statt. Die fertige mRNA wird dann ins **Zytoplasma** transportiert, wo die **Translation** (mRNA → Protein) an den **Ribosomen** stattfindet.",
          difficulty: 1,
          tags: ["transkription", "zellkern", "eukaryoten"],
        },
        {
          question: "Was bestimmt die Aminosäuresequenz eines Proteins?",
          options: [
            "Die Lipidmembran der Zelle",
            "Die Basensequenz der mRNA (über den genetischen Code: je 3 Basen = 1 Codon = 1 Aminosäure)",
            "Die Form der Ribosomen",
            "Die Anzahl der Chromosomen",
            "Die Histonproteine",
          ],
          correctIndex: 1,
          explanation:
            "Die **Basensequenz** der mRNA wird in Dreiergruppen (**Codons**) gelesen. Jedes Codon steht für eine bestimmte **Aminosäure** (genetischer Code). So bestimmt die DNA-Sequenz (über die mRNA) die Proteinsequenz und damit die Funktion des Proteins.",
          difficulty: 1,
          tags: ["genetischer code", "codon", "translation"],
        },
        {
          question: "Welche Aussage zum Zentraldogma ist korrekt?",
          options: [
            "Proteine können in DNA rückübersetzt werden",
            "RNA wird direkt aus Proteinen hergestellt",
            "Reverse Transkriptase schreibt RNA in DNA um — eine Ausnahme vom klassischen Fluss",
            "Translation findet immer im Zellkern statt",
            "Transkription und Translation finden gleichzeitig am selben Ort statt",
          ],
          correctIndex: 2,
          explanation:
            "Die **Reverse Transkriptase** (z. B. bei Retroviren wie HIV) schreibt RNA in DNA um — das ist eine bekannte Ausnahme vom klassischen Zentraldogma (DNA → RNA → Protein). Proteine werden jedoch nie in Nukleinsäuren rückübersetzt.",
          difficulty: 2,
          tags: ["zentraldogma", "reverse transkriptase", "retrovirus"],
        },
      ],
      altfrage: {
        text: "Welche Aussage zur Genexpression ist richtig?",
        options: [
          { id: "a", text: "Die Transkription findet an den Ribosomen im Zytoplasma statt." },
          {
            id: "b",
            text: "Die RNA-Polymerase benötigt einen Primer, um die Transkription zu starten.",
          },
          {
            id: "c",
            text: "Beim Spleißen werden Introns aus der prä-mRNA entfernt und Exons zur reifen mRNA zusammengefügt.",
          },
          { id: "d", text: "Das Startcodon AUG codiert für Tryptophan." },
          { id: "e", text: "Die Translation verläuft in 5'→3'-Richtung am codogenen Strang." },
        ],
        correctOptionId: "c",
        explanation:
          "Beim **Spleißen** (Splicing) wird die prä-mRNA prozessiert: **Introns** (nicht-codierende Abschnitte) werden herausgeschnitten und die **Exons** (codierende Abschnitte) zur reifen mRNA verbunden. Dies geschieht durch das **Spleißosom** (snRNPs) im Zellkern. Die Transkription findet im **Zellkern** statt (A falsch). RNA-Polymerase braucht **keinen Primer** (B falsch). AUG codiert für **Methionin** (D falsch). Die Translation liest die **mRNA** in 5'→3'-Richtung, nicht den codogenen Strang (E falsch).",
      },
    },

    // ─── 10. Tumorgenetik ──────────────────────────────────────────────────────
    {
      id: "bio-4-10",
      title: "Tumorgenetik",
      stichworte: [
        "Tumorgenetik",
        "Onkogen",
        "Proto-Onkogen",
        "Tumorsuppressorgen",
        "p53",
        "RB",
        "BRCA",
        "Two-Hit-Hypothese",
        "Karzinogenese",
        "Hallmarks of Cancer",
        "Knudson",
        "Metastase",
      ],
      content: `## Krebs ist eine genetische Erkrankung

Krebs entsteht, wenn eine Zelle die Kontrolle über ihr eigenes Wachstum verliert. Dahinter stecken **Mutationen** in Genen, die normalerweise das Zellwachstum steuern. Keine einzelne Mutation reicht aus — es braucht typischerweise **5–7 unabhängige Mutationen**, die sich über Jahre ansammeln, bis eine Zelle alle Kontrollmechanismen umgangen hat. Deshalb steigt das Krebsrisiko mit dem Alter: Je mehr Zellteilungen, desto mehr Gelegenheiten für Mutationsereignisse.

**Der Grundmechanismus:** Normale Zelle → Mutationen in wachstumskontrollierenden Genen → unkontrollierte Teilung → **Tumor** (Neoplasie (Neubildung von Gewebe)) → Einwachsen in Nachbargewebe und Streuung über Blut/Lymphe → **Metastasen** (Tochtergeschwülste in entfernten Organen).

> **Merke:** Krebs = Akkumulation von 5–7 Mutationen in wachstumskontrollierenden Genen. Nicht eine Mutation, sondern das Zusammenspiel vieler genetischer Treffer macht eine Zelle bösartig.

---

## Proto-Onkogene und Onkogene — das festgeklemmte Gaspedal

**Proto-Onkogene** sind normale Gene, die das Zellwachstum **fördern** — sie codieren z. B. für Wachstumsfaktoren, Rezeptoren oder Signalproteine, die der Zelle sagen: „Teile dich!" Sie sind essentiell für normales Wachstum und Gewebeerneuerung.

Wird ein Proto-Onkogen durch eine Mutation **überaktiviert**, entsteht ein **Onkogen** (griech. onkos = Geschwulst). Das Onkogen sendet dauerhaft Wachstumssignale — wie ein **Gaspedal, das festklemmt**. Die Zelle teilt sich ständig, auch wenn kein Wachstumssignal von außen kommt.

**Aktivierungsmechanismen (gain of function):**
- **Punktmutation:** Ein einziger Basenaustausch macht das Protein dauerhaft aktiv (z. B. RAS)
- **Genamplifikation:** Das Gen wird vervielfacht → zu viel Protein (z. B. HER2)
- **Chromosomentranslokation:** Das Gen gerät unter einen starken Promotor oder verschmilzt mit einem anderen Gen → Fusionsprotein (z. B. BCR-ABL bei CML)

| Onkogen | Normales Protein | Aktivierung | Tumor |
|---------|-----------------|-------------|-------|
| **RAS** | GTPase (Signalschalter) | Punktmutation → dauerhaft „an" | ~30 % aller Karzinome |
| **MYC** | Transkriptionsfaktor | Amplifikation/Translokation | Burkitt-Lymphom, viele Karzinome |
| **HER2** (ERBB2) | Wachstumsfaktor-Rezeptor | Amplifikation → zu viele Rezeptoren | ~20 % der Mammakarzinome |
| **BCR-ABL** | Fusionsprotein (Tyrosinkinase) | Translokation t(9;22) „Philadelphia-Chromosom" | Chronische myeloische Leukämie (CML) |

**Wichtig:** Es genügt, wenn **ein Allel** mutiert ist (dominant wirkend). Ein defektes Gaspedal reicht, um die Zelle anzutreiben.

> **Merke:** Proto-Onkogen (normal) → Onkogen (mutiert, überaktiv) = Gain of function. Wirkt dominant: eine mutierte Kopie reicht. Eselsbrücke: Onkogen = festgeklemmtes Gaspedal.

---

## Tumorsuppressorgene — die kaputte Bremse

**Tumorsuppressorgene** (TSG) sind die Gegenspieler: Sie **bremsen** das Zellwachstum, lösen bei DNA-Schäden einen **Zellzyklusarrest** aus oder leiten den programmierten Zelltod (**Apoptose**) ein. Wenn beide Kopien eines Tumorsuppressorgens ausfallen, fehlt die Bremse — die Zelle kann sich trotz Schäden weiterteilen.

| Tumorsuppressorgen | Funktion | Klinisches Syndrom |
|-------------------|----------|-------------------|
| **TP53** (p53) | „Guardian of the Genome": stoppt Zellzyklus bei DNA-Schaden, aktiviert Reparatur oder Apoptose | Li-Fraumeni-Syndrom; **in >50 % aller Tumoren mutiert** |
| **RB1** | Kontrolliert G1/S-Übergang im Zellzyklus | Retinoblastom (Knudson-Modell!) |
| **BRCA1/BRCA2** | DNA-Reparatur durch homologe Rekombination | Hereditäres Mamma-/Ovarialkarzinom |
| **APC** | Reguliert Wnt-Signalweg (Wachstumssignalkaskade), kontrolliert Zellproliferation im Darm | Familiäre adenomatöse Polyposis (FAP) → Darmkrebs |

**p53 — der wichtigste Tumorsuppressor:** Wird die DNA beschädigt (z. B. durch UV, Chemikalien, Replikationsfehler), steigt die Konzentration von p53 in der Zelle. p53 stoppt den Zellzyklus (in G1), aktiviert DNA-Reparaturgene und löst bei irreparablem Schaden die Apoptose aus. Fällt p53 aus, teilen sich geschädigte Zellen weiter und sammeln immer mehr Mutationen an.

**Unterschied zu Onkogenen:** Tumorsuppressorgene wirken **rezessiv** — beide Allele müssen ausfallen (loss of function), damit die Bremse versagt.

> **Merke:** Tumorsuppressorgen = Bremse. Beide Kopien müssen ausfallen (rezessiv). p53 = „Guardian of the Genome" — in über der Hälfte aller Tumoren mutiert. Eselsbrücke: Gaspedal klemmt (Onkogen) UND Bremse kaputt (TSG) — dann wird die Zelle zum Tumor.

---

## Two-Hit-Hypothese (Knudson) — warum zwei Treffer nötig sind

Alfred Knudson formulierte 1971 die **Two-Hit-Hypothese** am Beispiel des **Retinoblastoms** (Netzhauttumor bei Kindern): Da Tumorsuppressorgene rezessiv wirken, müssen **beide Allele** inaktiviert werden, bevor die Schutzfunktion verloren geht.

**Hereditäre Form (familiär):**
- Kind erbt **ein defektes Allel** (1. Hit = Keimbahnmutation, in jeder Zelle vorhanden)
- Nur **ein weiterer Hit** (somatische Mutation) in einer Netzhautzelle reicht → Tumor
- Folge: **Frühes Auftreten**, oft **bilateral** (beide Augen), erhöhtes Risiko für Zweittumoren

**Sporadische Form:**
- Kind hat **zwei normale Allele**
- **Beide Hits** müssen zufällig in derselben Netzhautzelle auftreten → sehr unwahrscheinlich
- Folge: **Spätes Auftreten**, fast immer **unilateral** (ein Auge)

| | Hereditär | Sporadisch |
|---|----------|-----------|
| **Keimbahnmutation** | Ja (1. Hit ererbt) | Nein |
| **Somatische Mutationen nötig** | 1 (nur 2. Hit) | 2 (beide Hits) |
| **Auftreten** | Früh (Kindesalter) | Spät |
| **Seitigkeit** | Oft bilateral | Fast immer unilateral |
| **Familiäre Häufung** | Ja | Nein |

> **Merke:** Two-Hit-Hypothese (Knudson): Beide Allele eines TSG müssen ausfallen. Hereditär: 1. Hit ererbt → nur 1 somatischer Hit nötig → frühes, oft bilaterales Retinoblastom. Sporadisch: 2 somatische Hits in derselben Zelle → spät, unilateral.

---

## Mehrstufenmodell der Karzinogenese — vom Adenom zum Karzinom

Krebs entsteht nicht plötzlich, sondern in einem **mehrstufigen Prozess**. Das Paradebeispiel ist das **Vogelstein-Modell** des kolorektalen Karzinoms (Darmkrebs), das zeigt, wie sich über Jahre Mutationen anhäufen:

**Normales Epithel** → APC-Mutation → **Adenom (Polyp, gutartig)** → KRAS-Mutation → **Größeres Adenom** → SMAD4-Verlust → **Fortgeschrittenes Adenom** → TP53-Mutation → **Karzinom (bösartig)** → weitere Mutationen → **Metastasen**

**Drei Phasen der Karzinogenese (Mehrstufenmodell):**

| Phase | Was passiert | Beispiel |
|-------|-------------|---------|
| **Initiation** | Erste irreversible Mutation in einer Zelle | APC-Mutation im Darmepithel |
| **Promotion** | Klonale Expansion (Vermehrung der mutierten Zelle), weitere Mutationen | Polyp wächst, KRAS-Mutation |
| **Progression** | Übergang zur Bösartigkeit, Invasion und Metastasierung | TP53-Verlust → Karzinom |

Jeder Schritt dauert Jahre — deshalb entwickelt sich Darmkrebs typischerweise über 10–15 Jahre aus einem gutartigen Polypen. Das erklärt den Wert der **Vorsorgekoloskopie**: Polypen können entfernt werden, bevor sie entarten.

> **Merke:** Karzinogenese = mehrstufig (Initiation → Promotion → Progression). Vogelstein-Modell: APC → KRAS → SMAD4 → TP53. Darmkrebs braucht ~10–15 Jahre vom Polyp zum Karzinom.

---

## DNA-Reparaturgene — die dritte Säule

Neben Onkogenen und Tumorsuppressorgenen gibt es eine dritte Gruppe krebsrelevanter Gene: **DNA-Reparaturgene**. Fallen sie aus, steigt die Mutationsrate dramatisch — ein Zustand namens **genomische Instabilität**. Die Zelle sammelt Mutationen viel schneller an als normal.

**Mismatch-Reparatur (MMR):**
- Korrigiert Fehler, die bei der DNA-Replikation entstehen (falsch eingebaute Basen)
- Ausfall → **Lynch-Syndrom** (hereditäres nicht-polypöses kolorektales Karzinom, HNPCC)
- Betroffene haben ein stark erhöhtes Risiko für Darm-, Endometrium- und andere Karzinome

**BRCA1/BRCA2 (homologe Rekombination):**
- Reparieren Doppelstrangbrüche der DNA durch homologe Rekombination (fehlerfreie Reparatur)
- Ausfall → Doppelstrangbrüche werden fehlerhaft repariert → genomische Instabilität
- **BRCA1/2-Keimbahnmutationen** → 60–80 % Lebenszeitrisiko für Brustkrebs, 20–40 % für Eierstockkrebs
- Klinisch: BRCA-Screening in Risikofamilien, prophylaktische Maßnahmen möglich

> **Merke:** DNA-Reparaturgene: Ausfall → genomische Instabilität → beschleunigte Krebsentstehung. Lynch-Syndrom = Mismatch-Reparatur-Defekt (Darmkrebs). BRCA1/2-Defekt = Brust-/Eierstockkrebs.

---

## Hallmarks of Cancer — die zehn Kennzeichen

Hanahan und Weinberg definierten sechs (2000), später zehn (2011) **Hallmarks of Cancer** — universelle Eigenschaften, die eine Krebszelle von einer normalen Zelle unterscheiden:

| Hallmark | Bedeutung | Genetisches Beispiel |
|----------|-----------|---------------------|
| **Proliferative Signale** | Zelle sendet sich selbst Wachstumssignale | RAS-Onkogen dauerhaft aktiv |
| **Wachstumssuppression umgehen** | Bremsen werden ignoriert | RB- oder p53-Verlust |
| **Apoptose-Resistenz** | Programmierter Zelltod wird blockiert | BCL2-Überexpression, p53-Ausfall |
| **Replikative Unsterblichkeit** | Telomerase (Enzym, das Chromosomenenden verlängert) reaktiviert → kein Hayflick-Limit | Telomerase (TERT) in >85 % der Tumoren |
| **Angiogenese** | Tumor lockt Blutgefäße an (Nährstoffversorgung) | VEGF-Hochregulation |
| **Invasion und Metastasierung** | Zellen lösen sich, wandern, besiedeln andere Organe | E-Cadherin-Verlust, EMT (epithelial-mesenchymale Transition) |

Weitere Hallmarks (2011): genomische Instabilität, tumorförderliche Entzündung, Energiestoffwechsel-Umprogrammierung (Warburg-Effekt: Tumorzellen vergären Glukose auch bei Sauerstoffangebot), Immunevasion (Verstecken vor dem Immunsystem).

> **Merke:** Hallmarks of Cancer: 1) eigene Wachstumssignale, 2) Bremsen ignorieren, 3) Apoptose blockieren, 4) unsterblich (Telomerase), 5) Angiogenese, 6) Invasion/Metastasen. Jeder Hallmark korreliert mit bestimmten Genmutationen.

---

## Häufige Irrtümer

**„Eine einzige Mutation verursacht Krebs"** — Falsch. Es braucht typischerweise 5–7 Mutationen in verschiedenen Genen (Onkogene + Tumorsuppressorgene + Reparaturgene). Deshalb dauert die Krebsentstehung meist Jahrzehnte.

**„Krebs ist erblich"** — Nur ~5–10 % aller Krebserkrankungen sind hereditär (z. B. BRCA1/2, Lynch-Syndrom, FAP). Die überwiegende Mehrheit (~90 %) entsteht durch **somatische Mutationen** (im Laufe des Lebens erworben, nicht vererbbar). Hereditäre Formen fallen durch frühes Auftreten, familiäre Häufung und bilaterales Auftreten auf.

**„Gutartige Tumoren sind harmlos"** — Gutartige Tumoren (benigne) sind zwar nicht invasiv und metastasieren nicht, können aber durch Kompression (z. B. Hirntumor) oder Hormonproduktion gefährlich werden. Zudem können manche entarten (z. B. Darmpolyp → Karzinom).

---

## Klinische Relevanz: Gezielte Krebstherapie

Das Verständnis der Tumorgenetik hat die Krebstherapie revolutioniert — Medikamente können gezielt gegen die mutierten Proteine gerichtet werden:

| Medikament | Zielstruktur | Erkrankung | Mechanismus |
|-----------|-------------|------------|-------------|
| **Imatinib** (Gleevec) | BCR-ABL-Fusionsprotein | CML (Philadelphia-Chromosom) | Tyrosinkinase-Inhibitor blockiert das dauerhaft aktive Fusionsprotein |
| **Trastuzumab** (Herceptin) | HER2-Rezeptor | HER2-positiver Brustkrebs | Antikörper gegen überexprimierten Rezeptor |
| **PARP-Inhibitoren** | PARP-Enzym | BRCA1/2-mutierter Brustkrebs | Nutzt den Reparaturdefekt: Zellen ohne BRCA können DNA-Schäden nicht mehr reparieren → synthetische Letalität |

**Vorsorge bei hereditären Syndromen:**
- **BRCA1/2-Screening:** Genetische Testung in Risikofamilien → intensivierte Früherkennung oder prophylaktische OP
- **Lynch-Syndrom:** Regelmäßige Koloskopie ab 25 Jahren
- **FAP (APC-Mutation):** Prophylaktische Kolektomie, da nahezu 100 % Darmkrebsrisiko`,
      lernziele: [
        "Proto-Onkogene und Tumorsuppressorgene unterscheiden und ihre Aktivierungsmechanismen erklären.",
        "Die Two-Hit-Hypothese (Knudson) am Beispiel des Retinoblastoms erklären.",
        "Das Mehrstufenmodell der Karzinogenese (Vogelstein-Modell) beschreiben.",
        "Die sechs Hallmarks of Cancer benennen und ihren genetischen Hintergrund erklären.",
        "Klinische Beispiele gezielter Krebstherapie (Imatinib, Trastuzumab) den zugehörigen Mutationen zuordnen.",
      ],
      sections: [],
      merksätze: [
        "Onkogen = festgeklemmtes Gaspedal (gain of function, dominant). Tumorsuppressorgen = kaputte Bremse (loss of function, rezessiv — Two-Hit).",
        "Two-Hit (Knudson): Hereditäres Retinoblastom = 1. Hit ererbt → früh, bilateral. Sporadisch = 2 Hits in derselben Zelle → spät, unilateral.",
        "Vogelstein-Modell: APC → KRAS → SMAD4 → TP53 = mehrstufige Karzinogenese (Polyp → Karzinom in 10–15 Jahren).",
        "p53 = Guardian of the Genome, in >50 % aller Tumoren mutiert. BRCA1/2 = Doppelstrangbruch-Reparatur, Ausfall → Brust-/Eierstockkrebs.",
      ],
      selfTest: [
        {
          question: "Was ist der Unterschied zwischen einem Proto-Onkogen und einem Onkogen?",
          options: [
            "Proto-Onkogene hemmen das Zellwachstum, Onkogene fördern es.",
            "Ein Proto-Onkogen ist ein normales Gen für Zellwachstum; durch eine Mutation wird es zum Onkogen, das dauerhaft Wachstumssignale sendet.",
            "Proto-Onkogene kommen nur in Krebszellen vor.",
            "Onkogene sind Tumorsuppressorgene mit verlorener Funktion.",
            "Es gibt keinen Unterschied — die Begriffe sind synonym.",
          ],
          correctIndex: 1,
          explanation:
            "Ein **Proto-Onkogen** ist ein normales Gen, das das Zellwachstum fördert (z. B. Wachstumsfaktor-Rezeptor). Durch eine **Gain-of-function-Mutation** (Punktmutation, Amplifikation, Translokation) wird es zum **Onkogen** — es ist dauerhaft aktiv wie ein festgeklemmtes Gaspedal. Schon **ein mutiertes Allel** reicht (dominant).",
          difficulty: 1,
          tags: ["onkogen", "proto-onkogen", "tumorgenetik"],
        },
        {
          question:
            "Wie viele Mutationen sind typischerweise nötig, damit eine normale Zelle zu einer Krebszelle wird?",
          options: [
            "Genau 1 Mutation",
            "Genau 2 Mutationen",
            "Typischerweise 5–7 Mutationen in verschiedenen Genen",
            "Mindestens 20 Mutationen",
            "Es ist keine Mutation nötig — Krebs ist rein umweltbedingt",
          ],
          correctIndex: 2,
          explanation:
            "Krebs ist ein **mehrstufiger Prozess**: Typischerweise müssen **5–7 Mutationen** in verschiedenen Genen (Onkogene, Tumorsuppressorgene, Reparaturgene) zusammenkommen. Deshalb dauert die Krebsentstehung meist Jahre bis Jahrzehnte, und das Risiko steigt mit dem Alter.",
          difficulty: 1,
          tags: ["karzinogenese", "mehrstufenmodell"],
        },
        {
          question:
            "Ein Kind erkrankt im Alter von 2 Jahren an einem bilateralen Retinoblastom. Was ist die wahrscheinlichste genetische Erklärung?",
          options: [
            "Zwei unabhängige somatische Mutationen im RB1-Gen in beiden Augen (sporadisch).",
            "Eine Keimbahnmutation im RB1-Gen (1. Hit ererbt), mit einer somatischen Mutation als 2. Hit in beiden Augen (hereditär).",
            "Eine Onkogenaktivierung im RAS-Gen.",
            "Ein Defekt im Mismatch-Reparatursystem.",
            "Eine p53-Mutation allein verursacht das Retinoblastom.",
          ],
          correctIndex: 1,
          explanation:
            "Frühes Auftreten + bilateral = typisch **hereditär**. Das Kind hat eine **Keimbahnmutation** im RB1-Gen (1. Hit in jeder Zelle). Es braucht nur noch **einen somatischen 2. Hit** pro Auge → Tumor entsteht in beiden Augen. Das ist die **Two-Hit-Hypothese nach Knudson**.",
          difficulty: 2,
          tags: ["two-hit", "knudson", "retinoblastom"],
        },
        {
          question:
            "Welche Reihenfolge beschreibt das Vogelstein-Modell der Darmkrebsentstehung korrekt?",
          options: [
            "TP53 → RAS → APC → SMAD4",
            "APC → KRAS → SMAD4 → TP53",
            "BRCA1 → BRCA2 → RAS → MYC",
            "HER2 → BCR-ABL → RB → p53",
            "RAS → APC → TP53 → SMAD4",
          ],
          correctIndex: 1,
          explanation:
            "Das **Vogelstein-Modell** beschreibt die schrittweise Karzinogenese im Dickdarm: **APC**-Mutation (Adenom) → **KRAS**-Mutation (Adenomwachstum) → **SMAD4**-Verlust (Progression) → **TP53**-Mutation (Übergang zum Karzinom). Dieser Prozess dauert typischerweise 10–15 Jahre.",
          difficulty: 2,
          tags: ["vogelstein", "karzinogenese", "darmkrebs"],
        },
        {
          question: "Welche Aussage zu p53 (TP53) ist FALSCH?",
          options: [
            "p53 wird als \u201EGuardian of the Genome\u201C bezeichnet.",
            "p53 kann den Zellzyklus in G1 arretieren.",
            "p53 aktiviert bei irreparablem DNA-Schaden die Apoptose.",
            "Eine einzige funktionsfähige Kopie von TP53 reicht für vollständigen Tumorschutz, da p53 dominant wirkt.",
            "p53 ist in über 50 % aller menschlichen Tumoren mutiert.",
          ],
          correctIndex: 3,
          explanation:
            "TP53 ist ein **Tumorsuppressorgen** und folgt grundsätzlich dem **Two-Hit-Prinzip** — beide Allele müssen ausfallen. Die Aussage, dass eine Kopie für \u201Evollständigen Tumorschutz\u201C reicht, ist irreführend: Viele TP53-Mutationen wirken sogar **dominant-negativ** (das mutierte Protein inaktiviert das normale). Alle anderen Aussagen sind korrekt.",
          difficulty: 3,
          tags: ["p53", "tumorsuppressor", "guardian-of-genome"],
        },
        {
          question:
            "Welches Medikament wird gezielt gegen das BCR-ABL-Fusionsprotein bei chronischer myeloischer Leukämie (CML) eingesetzt?",
          options: [
            "Trastuzumab (Herceptin)",
            "Imatinib (Gleevec)",
            "Tamoxifen",
            "Cisplatin",
            "PARP-Inhibitoren",
          ],
          correctIndex: 1,
          explanation:
            "**Imatinib** (Gleevec) ist ein **Tyrosinkinase-Inhibitor**, der spezifisch das **BCR-ABL-Fusionsprotein** blockiert. Dieses entsteht durch die Translokation t(9;22) — das **Philadelphia-Chromosom** — und treibt die CML an. Imatinib war eines der ersten Beispiele für gezielte Krebstherapie und hat die Prognose der CML dramatisch verbessert.",
          difficulty: 2,
          tags: ["imatinib", "bcr-abl", "cml", "targeted-therapy"],
        },
      ],
      altfrage: {
        text: "Welche Aussage zur Tumorgenetik ist richtig?",
        options: [
          { id: "a", text: "Tumorsuppressorgene fördern das Zellwachstum." },
          {
            id: "b",
            text: "Ein einziger Treffer (Mutation) in einem Tumorsuppressorgen reicht für den Funktionsverlust.",
          },
          { id: "c", text: "Proto-Onkogene sind bereits mutierte, krebsfördernde Gene." },
          {
            id: "d",
            text: "Nach der Two-Hit-Hypothese (Knudson) müssen beide Allele eines Tumorsuppressorgens inaktiviert werden, damit die Schutzfunktion verloren geht.",
          },
          { id: "e", text: "p53 ist ein Proto-Onkogen, das Zellteilung stimuliert." },
        ],
        correctOptionId: "d",
        explanation:
          "Die **Two-Hit-Hypothese** (Knudson, 1971) besagt, dass Tumorsuppressorgene **rezessiv** wirken: Erst wenn **beide Allele** durch Mutation, Deletion oder epigenetisches Silencing ausgeschaltet sind, geht die Schutzfunktion verloren. Bei hereditären Tumoren ist bereits ein Allel keimbahnmutiert (1. Hit), sodass nur noch ein somatischer 2. Hit nötig ist. Tumorsuppressorgene **bremsen** das Wachstum (A falsch). Proto-Onkogene sind **normale** Gene (C falsch). p53 ist ein **Tumorsuppressorgen** (E falsch).",
      },
    },

    // ─── 11. Epigenetik ────────────────────────────────────────────────────────
    {
      id: "bio-4-11",
      title: "Epigenetik",
      stichworte: [
        "Epigenetik",
        "DNA-Methylierung",
        "Histonmodifikation",
        "Imprinting",
        "X-Inaktivierung",
        "CpG-Inseln",
        "Barr-Körperchen",
        "Prader-Willi",
        "Angelman",
      ],
      content: `## Was ist Epigenetik?

**Epigenetik** (griech. epi = „über, darüber") beschreibt **vererbbare Veränderungen der Genaktivität**, die **nicht** auf einer Änderung der **DNA-Sequenz** beruhen. Stattdessen werden **chemische Markierungen** auf der DNA oder den Histonen angebracht oder entfernt, die bestimmen, ob ein Gen **abgelesen** (exprimiert) oder **stillgelegt** (silenced) wird.

**Schlüsselunterschied zur Genetik:**
- **Genetik:** Veränderung der DNA-Sequenz (z. B. Mutation A → G) → dauerhaft, in jeder Zelle gleich.
- **Epigenetik:** Veränderung **über** der DNA (Methylierung, Histonmodifikation) → potenziell **reversibel**, kann **zelltypspezifisch** und **umweltabhängig** sein.

Epigenetische Markierungen werden bei der **Zellteilung** an Tochterzellen weitergegeben (mitotisch vererbbar) und können teilweise auch über die **Keimbahn** an die nächste Generation vererbt werden (meiotisch vererbbar — transgenerationelle Epigenetik).

> **Merke:** Epigenetik = Steuerung der Genaktivität ohne Änderung der DNA-Sequenz. Mechanismen: DNA-Methylierung und Histonmodifikation. Potenziell reversibel und zelltypspezifisch.

---

## DNA-Methylierung


{{DIAGRAM:transcription-translation}}

Bei der **DNA-Methylierung** wird eine **Methylgruppe (-CH₃)** an die Base **Cytosin** angehängt, und zwar an **CpG-Dinukleotiden** (Cytosin-Guanin-Abfolge). In **Promotorregionen** von Genen liegen oft viele CpG-Dinukleotide gehäuft — sogenannte **CpG-Inseln**.

**Grundregel:** Methylierung einer CpG-Insel im Promotor → **Gen wird stillgelegt** (silenced). Demethylierung → Gen kann abgelesen werden.

**Wie funktioniert das?**
- Methylgruppen verändern die DNA-Oberfläche → **Transkriptionsfaktoren** können nicht mehr binden.
- Methylierte DNA rekrutiert Proteine, die die **Chromatinstruktur verdichten** → das Gen wird unzugänglich.

**Enzyme:** **DNA-Methyltransferasen (DNMTs)** fügen die Methylgruppen an. DNMT1 erhält die Methylierung bei der DNA-Replikation (kopiert das Muster auf den neuen Strang → **Vererbung** der Markierung).

> **Merke:** CpG-Inseln im Promotor methyliert → Gen stumm. Demethyliert → Gen aktiv. DNMT1 kopiert das Methylierungsmuster bei Zellteilung → epigenetische Vererbung.

---

## Histonmodifikation


Die DNA ist um **Histonproteine** gewickelt (Nukleosomen (DNA-Histon-Verpackungseinheiten)). Histone haben „Schwänze" (N-terminale Enden), die aus dem Nukleosom herausragen. An diesen Schwänzen können verschiedene **chemische Gruppen** angehängt werden:

| Modifikation | Effekt | Enzym |
|-------------|--------|-------|
| **Acetylierung** (Lysinreste) | Öffnet Chromatin → **Gen aktiv** (Euchromatin) | Histonacetyltransferasen (HATs) |
| **Deacetylierung** | Verdichtet Chromatin → **Gen stumm** (Heterochromatin) | Histondeacetylasen (HDACs) |
| **Methylierung** (Lysin/Arginin) | Kann aktivierend **oder** stilllegend wirken, je nach Position | Histonmethyltransferasen |

**Zusammenspiel:** DNA-Methylierung und Histonmodifikation wirken oft **zusammen**: Methylierte DNA zieht HDACs an → Histone werden deacetyliert → Chromatin verdichtet → Gen stumm.

> **Merke:** Histonacetylierung → offenes Chromatin → Gen AN. Deacetylierung → geschlossenes Chromatin → Gen AUS. DNA-Methylierung und Histonmodifikation verstärken sich gegenseitig.

---

## Genomisches Imprinting (Prader-Willi vs. Angelman)

Beim **genomischen Imprinting** (dt. genomische Prägung) wird eines der beiden **elterlichen Allele** durch epigenetische Markierung **stillgelegt** — und zwar abhängig davon, ob es vom **Vater** oder von der **Mutter** stammt. Das Kind exprimiert also nur **ein** Allel (monoallelische Expression), obwohl es zwei hat.

**Beispiel: Chromosom 15q11-13:**
- Auf diesem Bereich liegen Gene, die normalerweise nur vom **väterlichen** Chromosom exprimiert werden (mütterliches Allel ist imprinted/stillgelegt) → **UBE3A** ist die Ausnahme (nur mütterliches Allel aktiv).

| Syndrom | Ursache | Betroffenes Allel | Klinik |
|---------|---------|-------------------|--------|
| **Prader-Willi-Syndrom** | Verlust/Defekt des **väterlichen** 15q11-13 | Väterliche Gene fehlen (mütterliche sind imprinted) | Hypotonie, Adipositas, Kleinwuchs, Hypogonadismus |
| **Angelman-Syndrom** | Verlust/Defekt des **mütterlichen** 15q11-13 (UBE3A) | Mütterliches UBE3A fehlt (väterliches ist imprinted) | Schwere geistige Behinderung, Ataxie, „Happy Puppet" |

**Spiegelbild:** Derselbe chromosomale Bereich — aber je nachdem, welches **elterliche Allel** betroffen ist, entsteht ein **völlig anderes Krankheitsbild**. Das ist nur durch Imprinting erklärbar.

**Mechanismus:** Imprinting-Markierungen werden in der **Keimzellentwicklung** gesetzt (Methylierung) und in der **Embryonalentwicklung** aufrechterhalten. In jeder Generation werden sie zuerst gelöscht und dann geschlechtsspezifisch neu gesetzt.

> **Merke:** Imprinting = elternspezifische Stilllegung eines Allels. Prader-Willi: väterliches 15q fehlt. Angelman: mütterliches UBE3A fehlt. Gleiche Region, verschiedene Krankheit — je nach elterlicher Herkunft.

---

## X-Inaktivierung (Barr-Körperchen und Schildpattkatze)

Frauen haben zwei X-Chromosomen (XX), Männer nur eines (XY). Damit Frauen nicht **doppelt so viel** X-chromosomale Genprodukte haben wie Männer, wird in jeder weiblichen Zelle eines der beiden X-Chromosomen **inaktiviert** — es wird zu einem dichten, methylierten **Barr-Körperchen** (fakultatives Heterochromatin), das im Zellkern als dunkler Punkt sichtbar ist.

**Schlüsselpunkte:**
- **Zeitpunkt:** Früh in der Embryonalentwicklung (ca. Tag 5–7, Blastocyste).
- **Zufällig:** In jeder Zelle wird **zufällig** das mütterliche ODER das väterliche X inaktiviert.
- **Stabil:** Einmal inaktiviert, bleibt dasselbe X in allen Tochterzellen inaktiviert (klonale Vererbung).
- **Mechanismus:** Das **XIST-Gen** auf dem zu inaktivierenden X produziert eine lange nichtcodierende RNA, die das Chromosom „ummantelt" → Methylierung → Heterochromatinbildung.
- **Folge:** Jede Frau ist ein **Mosaik** aus Zellen, in denen das mütterliche oder das väterliche X aktiv ist.

**Schildpattkatze als Beispiel:** Das Gen für die Fellfarbe liegt auf dem X-Chromosom (Orange vs. Nicht-Orange). Heterozygote Katzen (X^O X^o) inaktivieren zufällig eines der beiden X-Chromosomen → manche Hautbereiche exprimieren Orange, andere Nicht-Orange → **Schildpattmuster** (Calico). Deshalb sind Schildpattkatzen fast immer **weiblich** (XX).

**Barr-Körperchen und Chromosomenzahl:**
- **Anzahl Barr-Körperchen = Anzahl X-Chromosomen − 1**
- XX (Frau): 1 Barr-Körperchen
- XY (Mann): 0
- XXX: 2 Barr-Körperchen
- XXY (Klinefelter): 1 Barr-Körperchen

> **Merke:** X-Inaktivierung: Eines von zwei X-Chromosomen wird in jeder weiblichen Zelle stillgelegt (Barr-Körperchen). Zufällig und stabil → Mosaik. Barr-Körperchen = X − 1. Schildpattkatze = X-Mosaik.

---

## Klinische Relevanz der Epigenetik


- **Krebs:** Tumorsuppressorgene können durch **Hypermethylierung** stillgelegt werden (z. B. p16, BRCA1) → kein Schutz vor unkontrolliertem Wachstum. Umgekehrt: **Hypomethylierung** kann Onkogene aktivieren.
- **Epigenetische Therapie:** DNMT-Inhibitoren (z. B. Azacitidin bei MDS/AML) und HDAC-Inhibitoren können epigenetische Markierungen rückgängig machen → Gene werden wieder aktiviert.
- **Umwelt und Epigenetik:** Ernährung, Stress, Toxine können epigenetische Markierungen verändern → potenziell transgenerationelle Effekte (Forschungsgebiet).

> **Merke:** Krebsentstehung: Tumorsuppressoren durch Hypermethylierung stillgelegt. Epigenetische Therapie (DNMT-/HDAC-Inhibitoren) kann Markierungen reversibel rückgängig machen — im Gegensatz zu genetischen Mutationen.`,
      lernziele: [
        "DNA-Methylierung und Histonmodifikation als epigenetische Mechanismen beschreiben.",
        "Genomisches Imprinting am Beispiel Prader-Willi vs. Angelman erklären.",
        "X-Inaktivierung, Barr-Körperchen und die Mosaik-Folge verstehen.",
        "Epigenetik von Genetik (Sequenzänderung) abgrenzen.",
      ],
      sections: [],
      merksätze: [
        "Epigenetik ≠ Genetik: keine Sequenzänderung, aber Steuerung der Genaktivität (Methylierung, Histonmodifikation).",
        "Imprinting: Prader-Willi (väterliches 15q fehlt) vs. Angelman (mütterliches UBE3A fehlt) — gleiche Region, unterschiedliches Syndrom.",
        "X-Inaktivierung: 1 X wird zum Barr-Körperchen (X − 1); zufällig, stabil, klonal → Mosaik.",
      ],
      selfTest: [
        {
          question: "Was bewirkt die Methylierung einer CpG-Insel im Promotorbereich eines Gens?",
          options: [
            "Das Gen wird stärker exprimiert",
            "Die DNA-Sequenz wird verändert",
            "Das Gen wird stillgelegt (silenced)",
            "Das Protein wird phosphoryliert",
            "Das Chromosom wird verdoppelt",
          ],
          correctIndex: 2,
          explanation:
            "Methylierung der **CpG-Insel** im Promotor verhindert die Bindung von Transkriptionsfaktoren und rekrutiert Proteine, die das Chromatin verdichten → das Gen wird **stillgelegt** (silenced). Die DNA-Sequenz selbst wird dabei **nicht** verändert.",
          difficulty: 1,
          tags: ["dna-methylierung", "cpg-insel", "genregulation"],
        },
        {
          question:
            "Ein Kind zeigt Hypotonie, Adipositas und Hypogonadismus. Eine Deletion auf Chromosom 15q11-13 wird nachgewiesen. Welches Syndrom liegt vor, wenn die Deletion das VÄTERLICHE Chromosom betrifft?",
          options: [
            "Angelman-Syndrom",
            "Turner-Syndrom",
            "Prader-Willi-Syndrom",
            "Klinefelter-Syndrom",
            "Down-Syndrom",
          ],
          correctIndex: 2,
          explanation:
            "**Prader-Willi-Syndrom** entsteht durch Verlust des **väterlichen** 15q11-13. Die mütterlichen Gene in dieser Region sind durch **Imprinting** stillgelegt, daher fehlt bei Verlust des väterlichen Allels die Genexpression vollständig. **Angelman** entsteht dagegen bei Verlust des **mütterlichen** UBE3A in derselben Region.",
          difficulty: 2,
          tags: ["imprinting", "prader-willi", "chromosom 15"],
        },
        {
          question: "Wie viele Barr-Körperchen findet man in einer Zelle mit dem Karyotyp 47,XXX?",
          options: ["0", "1", "2", "3", "47"],
          correctIndex: 2,
          explanation:
            "Die Formel lautet: **Barr-Körperchen = Anzahl X-Chromosomen − 1**. Bei 47,XXX sind es 3 X-Chromosomen, also **3 − 1 = 2 Barr-Körperchen**. Bei einer normalen Frau (46,XX): 2 − 1 = 1. Bei einem normalen Mann (46,XY): 1 − 1 = 0.",
          difficulty: 1,
          tags: ["x-inaktivierung", "barr-körperchen", "karyotyp"],
        },
        {
          question: "Warum sind Schildpattkatzen fast immer weiblich?",
          options: [
            "Weil das Schildpattgen autosomal-rezessiv ist",
            "Weil das Fellfarben-Gen auf dem Y-Chromosom liegt",
            "Weil weibliche Katzen (XX) durch zufällige X-Inaktivierung ein Mosaik aus zwei Fellfarben bilden",
            "Weil männliche Katzen immer schwarz sind",
            "Weil Schildpatt durch eine Genommutation entsteht",
          ],
          correctIndex: 2,
          explanation:
            "Das Gen für Orange/Nicht-Orange liegt auf dem **X-Chromosom**. Heterozygote Katzen (X^O X^o) inaktivieren zufällig ein X pro Zelle → manche Hautzellen exprimieren Orange, andere Nicht-Orange → **Schildpattmuster**. Männliche Katzen (XY) haben nur ein X und können daher kein Mosaik bilden (Ausnahme: XXY-Kater).",
          difficulty: 2,
          tags: ["x-inaktivierung", "mosaik", "schildpattkatze"],
        },
        {
          question:
            "Was unterscheidet epigenetische Veränderungen grundsätzlich von genetischen Mutationen?",
          options: [
            "Epigenetische Veränderungen betreffen nur Mitochondrien",
            "Epigenetische Veränderungen sind immer letal",
            "Epigenetische Veränderungen verändern die DNA-Sequenz nicht, sondern die Genaktivität — und sind potenziell reversibel",
            "Genetische Mutationen sind immer reversibel, epigenetische nicht",
            "Epigenetische Veränderungen betreffen nur Prokaryoten",
          ],
          correctIndex: 2,
          explanation:
            "Der **Schlüsselunterschied**: Genetische Mutationen verändern die **DNA-Sequenz** (z. B. A → G) und sind meist dauerhaft. Epigenetische Veränderungen betreffen **Markierungen** auf/über der DNA (Methylierung, Histonmodifikation) ohne die Sequenz zu ändern — sie sind potenziell **reversibel** (z. B. durch epigenetische Therapie).",
          difficulty: 1,
          tags: ["epigenetik", "mutation", "reversibel"],
        },
      ],
      altfrage: {
        text: "Welche Aussage zur Epigenetik ist richtig?",
        options: [
          { id: "a", text: "Epigenetische Veränderungen verändern die DNA-Sequenz direkt." },
          {
            id: "b",
            text: "DNA-Methylierung an CpG-Inseln führt typischerweise zur Genaktivierung.",
          },
          {
            id: "c",
            text: "Genomisches Imprinting bewirkt, dass bestimmte Gene nur vom mütterlichen oder väterlichen Allel exprimiert werden.",
          },
          {
            id: "d",
            text: "X-Inaktivierung betrifft bei Frauen immer das väterliche X-Chromosom.",
          },
          { id: "e", text: "Histonacetylierung führt zu einer Verdichtung des Chromatins." },
        ],
        correctOptionId: "c",
        explanation:
          "Beim **genomischen Imprinting** werden bestimmte Gene durch epigenetische Markierungen (v. a. DNA-Methylierung) so modifiziert, dass nur das **mütterliche** oder nur das **väterliche Allel** exprimiert wird. Beispiele: Prader-Willi-Syndrom (väterliche Deletion auf Chr. 15) und Angelman-Syndrom (mütterliche Deletion auf Chr. 15). Epigenetik verändert nicht die DNA-Sequenz (A falsch). DNA-Methylierung an CpG-Inseln **silenced** Gene (B falsch). X-Inaktivierung ist **zufällig** (D falsch). Histonacetylierung **lockert** Chromatin (E falsch).",
      },
    },
    // ─── 12. Methoden der Genetik & Gentechnik ─────────────────────────────────
    {
      id: "bio-4-12",
      title: "Methoden der Genetik & Gentechnik",
      stichworte: [
        "PCR",
        "Polymerase-Kettenreaktion",
        "Restriktionsenzyme",
        "Gelelektrophorese",
        "Klonierung",
        "CRISPR",
        "Cas9",
        "Gentechnik",
        "DNA-Sequenzierung",
        "Sanger-Methode",
        "Genetischer Fingerabdruck",
        "Plasmid",
        "Vektor",
        "Transformation",
        "Taq-Polymerase",
        "Primer",
        "GVO",
      ],
      content: `## PCR — DNA millionenfach kopieren

Die **Polymerase-Kettenreaktion** (PCR, engl. polymerase chain reaction) ist die wichtigste Methode der modernen Molekularbiologie. Sie erlaubt es, einen bestimmten DNA-Abschnitt innerhalb weniger Stunden **millionenfach zu vervielfältigen** (Amplifikation), selbst wenn nur winzige Mengen Ausgangs-DNA vorhanden sind — etwa aus einem Blutstropfen, einem Haar oder einer archäologischen Probe.

**Benötigte Komponenten:**
- **Template-DNA** — der DNA-Abschnitt, der kopiert werden soll
- **Zwei Primer** (kurze einzelsträngige DNA-Stücke, ~20 Nukleotide) — markieren Anfang und Ende des Zielbereichs
- **Taq-Polymerase** — eine hitzestabile DNA-Polymerase aus dem Bakterium *Thermus aquaticus* (lebt in heißen Quellen, daher hitzestabil bis ~95 °C)
- **dNTPs** (Desoxynukleosidtriphosphate) — die vier DNA-Bausteine (dATP, dTTP, dGTP, dCTP)
- **Puffer mit Mg²⁺** — Cofaktor der Polymerase

> **Merke:** PCR-Zutaten = Template + 2 Primer + Taq-Polymerase + dNTPs + Mg²⁺-Puffer. Die Taq-Polymerase ist hitzestabil, weil sie aus einem thermophilen Bakterium stammt.

---

## Die drei Schritte eines PCR-Zyklus

Jeder PCR-Zyklus besteht aus drei Temperaturschritten, die im **Thermocycler** (programmierbares Heiz-/Kühlgerät) ablaufen:

| Schritt | Temperatur | Was passiert |
|---------|-----------|-------------|
| **1. Denaturierung** | ~95 °C | DNA-Doppelstrang wird in Einzelstränge aufgetrennt (H-Brücken brechen) |
| **2. Annealing** (Primer-Hybridisierung) | ~55–65 °C | Primer lagern sich an die komplementären Bereiche der Einzelstränge an |
| **3. Elongation** (Verlängerung) | ~72 °C | Taq-Polymerase verlängert die Primer → neuer Doppelstrang |

Nach **n Zyklen** entstehen theoretisch **2ⁿ** Kopien des Zielabschnitts. Typisch sind 25–35 Zyklen → 2³⁰ ≈ **1 Milliarde Kopien**.

> **Merke:** PCR = Denaturierung (95 °C) → Annealing (~60 °C) → Elongation (72 °C). Pro Zyklus verdoppelt sich die DNA-Menge → nach 30 Zyklen ca. 10⁹ Kopien. Eselsbrücke: **D-A-E** (Denaturierung–Annealing–Elongation).

**Prüfungstipp:** Rechenaufgabe: „Nach 20 PCR-Zyklen, wie viele Kopien?" → 2²⁰ = 1.048.576 ≈ **1 Million**. Formel: 2ⁿ (n = Anzahl Zyklen).

---

## Gelelektrophorese — DNA nach Größe sortieren

Nach der PCR (oder nach einem Restriktionsverdau) muss man die entstandenen DNA-Fragmente **sichtbar machen** und **nach Größe auftrennen**. Dazu dient die **Gelelektrophorese**.

**Prinzip:** DNA ist **negativ geladen** (Phosphatgruppen). In einem elektrischen Feld wandert sie daher zum **Pluspol** (Anode). Kleine Fragmente bewegen sich schneller durch die Gelporen als große → **Auftrennung nach Größe**.

**Ablauf:**
1. DNA-Proben in Taschen eines Agarosegels (Polysaccharid-Gel aus Algen) pipettieren
2. Spannung anlegen → DNA wandert Richtung Anode
3. Gel färben (z. B. mit Ethidiumbromid oder SYBR Green) → unter UV-Licht werden **Banden** sichtbar
4. Größe der Fragmente durch Vergleich mit einem **Größenstandard** (DNA-Leiter, Marker mit bekannten Fragmentlängen) bestimmen

> **Merke:** Gelelektrophorese trennt DNA-Fragmente nach Größe: kleine Fragmente wandern weit (schnell), große bleiben oben (langsam). DNA wandert zur Anode (+), weil sie negativ geladen ist.

---

## Restriktionsenzyme — die molekulare Schere

**Restriktionsenzyme** (Restriktionsendonukleasen) sind bakterielle Enzyme, die DNA an **spezifischen Erkennungssequenzen** (meist 4–8 bp lang, oft palindromisch (von beiden Seiten gleich lesbar)) schneiden. Bakterien nutzen sie als Abwehr gegen Fremd-DNA (z. B. Phagen-DNA). Die eigene DNA schützen sie durch **Methylierung** der Erkennungssequenzen.

**Beispiele:**

| Enzym | Erkennungssequenz | Schnittmuster |
|-------|------------------|--------------|
| **EcoRI** | 5'-G↓AATTC-3' | Sticky Ends (überhängende Einzelstrangenden) |
| **HindIII** | 5'-A↓AGCTT-3' | Sticky Ends |
| **SmaI** | 5'-CCC↓GGG-3' | Blunt Ends (glatte Enden) |

**Sticky Ends vs. Blunt Ends:**
- **Sticky Ends** (klebrige Enden): Versetzter Schnitt → komplementäre Einzelstrangüberhänge → können mit kompatiblen Enden ligiert (verbunden) werden → bevorzugt für **Klonierung**
- **Blunt Ends** (glatte Enden): Gerader Schnitt → keine Überhänge → weniger effizient, aber universell kombinierbar

> **Merke:** Restriktionsenzyme schneiden DNA an palindromischen Erkennungssequenzen. Sticky Ends = versetzter Schnitt (Überhänge) → ideal für Klonierung. Blunt Ends = gerader Schnitt. Name: Enzym stammt vom Bakterium (z. B. EcoRI = *Escherichia coli* Stamm RY13).

---

## Klonierung — ein Gen in einen Vektor einbauen

Bei der **Klonierung** (molekulare Klonierung, nicht zu verwechseln mit dem Klonen von Organismen) wird ein bestimmtes DNA-Fragment (z. B. ein Gen) in einen **Vektor** (Transportmolekül) eingebaut und in eine Wirtszelle eingeschleust, um es dort zu vermehren oder zur Expression zu bringen.

**Ablauf Schritt für Schritt:**
1. **Ziel-DNA und Vektor** mit demselben Restriktionsenzym schneiden → kompatible Sticky Ends
2. **Ligation:** DNA-Ligase verbindet Ziel-DNA und Vektor → **rekombinantes Plasmid**
3. **Transformation:** Rekombinantes Plasmid in Bakterien (meist *E. coli*) einschleusen (z. B. durch Hitzeschock oder Elektroporation (kurzer elektrischer Puls öffnet Membranporen))
4. **Selektion:** Nur Bakterien mit Plasmid überleben auf Antibiotikum-haltigem Nährboden (Plasmid trägt Antibiotikaresistenzgen)
5. **Vermehrung:** Bakterien vermehren sich → Plasmid wird mitkopiert → viele Kopien des eingesetzten Gens

**Vektoren:**
- **Plasmide** — kleine, ringförmige DNA-Moleküle in Bakterien (häufigster Vektor, nimmt Fragmente bis ~10 kb auf)
- **Bakteriophagen** (Phagen) — für größere Inserts (~25 kb)
- **BACs** (Bacterial Artificial Chromosomes) — für sehr große Inserts (~300 kb)

> **Merke:** Klonierung = Ziel-DNA + Vektor mit gleichem Restriktionsenzym schneiden → Ligase verbindet → Transformation in Bakterien → Selektion über Antibiotikum. Plasmide sind die Standardvektoren.

---

## DNA-Sequenzierung — die Basenabfolge lesen

Die **Sanger-Sequenzierung** (Kettenabbruchmethode, entwickelt von Frederick Sanger, 1977) war die erste Methode, um die Basenabfolge von DNA zu bestimmen.

**Prinzip:** Der Reaktionsansatz enthält neben normalen dNTPs auch **ddNTPs** (Didesoxyribonukleosidtriphosphate) — ihnen fehlt die 3'-OH-Gruppe, sodass die DNA-Kette bei ihrem Einbau **abbricht**. Da der Einbau zufällig erfolgt, entstehen Fragmente unterschiedlicher Länge, die jeweils an einer bestimmten Base enden. Trennung per Kapillarelektrophorese → Reihenfolge der Basen ablesen.

**Moderne Variante:** **Next-Generation-Sequencing** (NGS) — massiv parallele Sequenzierung von Millionen DNA-Fragmenten gleichzeitig. Ermöglicht die Sequenzierung ganzer Genome in wenigen Stunden.

> **Merke:** Sanger-Sequenzierung: ddNTPs brechen die Kettenverlängerung ab → Fragmente unterschiedlicher Länge → Basenreihenfolge ablesen. NGS = massiv parallel, schneller, günstiger → Whole Genome Sequencing.

---

## Genetischer Fingerabdruck — DNA-Profil zur Identifikation

Jeder Mensch (außer eineiige Zwillinge) hat ein **einzigartiges DNA-Profil**. Genutzt werden **STRs** (Short Tandem Repeats) — kurze, sich wiederholende DNA-Sequenzen (z. B. AGAT wiederholt 8–20×), deren Anzahl zwischen Individuen variiert.

**Ablauf:**
1. DNA isolieren (z. B. aus Blut, Speichel, Haaren)
2. STR-Loci per **PCR** amplifizieren (standardisierte Marker, z. B. 16 STR-Loci)
3. Fragmente per **Kapillarelektrophorese** auftrennen → STR-Profil
4. Profile vergleichen: Übereinstimmung bei allen Loci → Identifikation

**Anwendungen:** Forensik (Tatorte), Vaterschaftstest, Identifizierung von Katastrophenopfern, Abstammungsgutachten.

> **Merke:** Genetischer Fingerabdruck = STR-Analyse per PCR + Elektrophorese. STRs sind kurze Tandem-Wiederholungen, deren Anzahl individuell variiert. 16 STR-Loci = praktisch eindeutig.

---

## CRISPR/Cas9 — Genom gezielt editieren

**CRISPR/Cas9** (Clustered Regularly Interspaced Short Palindromic Repeats) ist ein revolutionäres Werkzeug zur gezielten **Genomeditierung**. Ursprünglich ist es ein **bakterielles Immunsystem** gegen Phagen.

**Prinzip:**
1. Eine **guide-RNA** (gRNA, ~20 Nukleotide) wird so designt, dass sie **komplementär** zur Zielsequenz im Genom ist
2. Die gRNA führt das **Cas9-Protein** (eine Endonuklease) zur Zielstelle
3. Cas9 erzeugt einen **Doppelstrangbruch** an der exakten Zielstelle
4. Die Zelle repariert den Bruch — dabei kann man:
   - **Gen ausschalten** (Knock-out): Reparatur durch NHEJ (Non-Homologous End Joining) → fehlerhafte Reparatur → Gen defekt
   - **Gen einfügen/korrigieren** (Knock-in): Reparatur durch HDR (Homology-Directed Repair) mit einer mitgelieferten DNA-Vorlage → präzise Änderung

**Vorteile gegenüber älteren Methoden** (Zinkfingernukleasen, TALENs): Einfacher zu designen (nur gRNA anpassen), günstiger, effizienter, multiplexing-fähig (mehrere Gene gleichzeitig).

> **Merke:** CRISPR/Cas9 = guide-RNA führt Cas9-Nuklease zur Zielstelle → Doppelstrangbruch → Gen ausschalten (NHEJ) oder korrigieren (HDR). Nobelpreis 2020 (Charpentier & Doudna). Einfacher und präziser als alle Vorgängermethoden.

---

## Gentechnisch veränderte Organismen (GVO)

**GVO** (gentechnisch veränderte Organismen, engl. GMO) enthalten Fremd-DNA, die gezielt eingebracht wurde. Das Grundprinzip: Ein **Transgen** (gewünschtes Gen) wird mithilfe eines Vektors in das Genom eines Organismus integriert.

**Herstellung transgener Organismen:**
- **Bakterien:** Transformation mit rekombinantem Plasmid → z. B. *E. coli* produziert **humanes Insulin** (erstes gentechnisches Medikament, 1982)
- **Pflanzen:** Agrobacterium tumefaciens überträgt T-DNA (natürlicher Gentransfer) oder Genkanone (Biolistik) → z. B. Bt-Mais (trägt Insektizidgen aus *Bacillus thuringiensis*)
- **Tiere:** Mikroinjektion in befruchtete Eizelle oder CRISPR → z. B. transgene Mäuse für Krankheitsmodelle

**Ethische Aspekte und Regulierung:**
- GVO-Kennzeichnungspflicht in der EU (> 0,9 % GVO-Anteil)
- Debatte: Chancen (Ertragssteigerung, Vitaminanreicherung wie Golden Rice) vs. Risiken (Auskreuzung, Biodiversitätsverlust, unbekannte Langzeiteffekte)

> **Merke:** GVO = Organismus mit eingebautem Transgen. Herstellung über Vektoren (Plasmide, Agrobacterium) oder CRISPR. Insulin aus *E. coli* = erstes gentechnisches Medikament. EU: Kennzeichnungspflicht ab 0,9 % GVO.

---

## Klonen von Organismen

Beim **reproduktiven Klonen** wird ein genetisch identischer Organismus erzeugt. Die bekannteste Methode ist der **somatische Kerntransfer** (SCNT):

1. Entkernung einer **Eizelle** (Kern wird entfernt)
2. **Zellkern** einer Körperzelle (somatische Zelle) des zu klonenden Organismus wird in die entkernte Eizelle übertragen
3. Elektrische Stimulation → Eizelle beginnt sich zu teilen
4. Embryo wird in eine Leihmutter übertragen → genetisch identischer Klon

**Dolly** (1996, Roslin Institute, Edinburgh) war das erste aus einer adulten Zelle geklonte Säugetier (Schaf). Dolly starb 2003 mit 6 Jahren (Arthritis, Lungenerkrankung) — Diskussion über beschleunigte Alterung bei Klonen.

**Therapeutisches Klonen:** Ziel ist nicht ein ganzer Organismus, sondern die Gewinnung von **embryonalen Stammzellen** aus dem geklonten Embryo (Blastozysten-Stadium) → potenzielle Therapie für degenerative Erkrankungen. Ethisch umstritten, da Embryonen zerstört werden.

> **Merke:** Reproduktives Klonen = somatischer Kerntransfer (SCNT) → genetisch identischer Organismus (Dolly, 1996). Therapeutisches Klonen → embryonale Stammzellen. Ethisch stark diskutiert.`,
      lernziele: [
        "PCR-Prinzip und die drei Zyklusschritte (Denaturierung, Annealing, Elongation) erklären.",
        "Gelelektrophorese als Methode zur Größenauftrennung von DNA-Fragmenten beschreiben.",
        "Funktion von Restriktionsenzymen und den Unterschied Sticky/Blunt Ends kennen.",
        "Den Ablauf einer molekularen Klonierung (Schneiden → Ligieren → Transformation → Selektion) darstellen.",
        "CRISPR/Cas9 als Methode zur gezielten Genomeditierung verstehen.",
        "Sanger-Sequenzierung und genetischen Fingerabdruck (STR-Analyse) erklären.",
      ],
      sections: [],
      merksätze: [
        "PCR = Denaturierung (95 °C) → Annealing (~60 °C) → Elongation (72 °C); nach n Zyklen 2ⁿ Kopien.",
        "Restriktionsenzyme schneiden DNA an palindromischen Sequenzen: Sticky Ends (versetzt) oder Blunt Ends (glatt).",
        "Klonierung: Ziel-DNA + Vektor mit gleichem Restriktionsenzym schneiden → Ligase → Transformation → Selektion.",
        "CRISPR/Cas9: guide-RNA führt Cas9 zur Zielstelle → Doppelstrangbruch → Knock-out (NHEJ) oder Knock-in (HDR).",
      ],
      selfTest: [
        {
          question: "Welche Temperatur wird beim Annealing-Schritt der PCR verwendet?",
          options: ["95 °C", "37 °C", "55–65 °C", "72 °C", "4 °C"],
          correctIndex: 2,
          explanation:
            "Beim **Annealing** (Primer-Hybridisierung) wird die Temperatur auf **55–65 °C** gesenkt, damit sich die Primer an die komplementären Bereiche der Einzelstränge anlagern können. 95 °C = Denaturierung, 72 °C = Elongation.",
          difficulty: 1,
          tags: ["pcr", "annealing", "temperatur"],
        },
        {
          question:
            "Warum wird bei der PCR die Taq-Polymerase verwendet und nicht eine herkömmliche DNA-Polymerase?",
          options: [
            "Taq-Polymerase ist billiger",
            "Taq-Polymerase hat Proofreading-Aktivität",
            "Taq-Polymerase ist hitzestabil und übersteht den Denaturierungsschritt bei 95 °C",
            "Taq-Polymerase benötigt keine Primer",
            "Taq-Polymerase arbeitet nur bei Raumtemperatur",
          ],
          correctIndex: 2,
          explanation:
            "Die **Taq-Polymerase** stammt aus dem thermophilen Bakterium *Thermus aquaticus* und ist **hitzestabil** — sie übersteht die Denaturierung bei 95 °C, ohne ihre Aktivität zu verlieren. Eine herkömmliche DNA-Polymerase würde bei dieser Temperatur denaturieren.",
          difficulty: 1,
          tags: ["pcr", "taq-polymerase", "thermostabil"],
        },
        {
          question: "Was sind Sticky Ends bei Restriktionsenzymen?",
          options: [
            "Glatte DNA-Enden ohne Überhänge",
            "Überhängende komplementäre Einzelstrangenden nach versetztem Schnitt",
            "Ringförmig geschlossene DNA-Enden",
            "DNA-Enden mit angehängten Proteinen",
            "Methylierte Erkennungssequenzen",
          ],
          correctIndex: 1,
          explanation:
            "**Sticky Ends** (klebrige Enden) entstehen durch einen **versetzten Schnitt** des Restriktionsenzyms und haben **komplementäre Einzelstrangüberhänge**. Diese können mit kompatiblen Sticky Ends anderer Fragmente hybridisieren und durch DNA-Ligase verbunden werden — ideal für die Klonierung.",
          difficulty: 1,
          tags: ["restriktionsenzyme", "sticky-ends", "klonierung"],
        },
        {
          question:
            "Bei der Gelelektrophorese wandern DNA-Fragmente zur Anode (+). Welche Fragmente wandern am weitesten?",
          options: [
            "Die größten Fragmente",
            "Die kleinsten Fragmente",
            "Alle Fragmente wandern gleich weit",
            "Nur ringförmige DNA wandert",
            "Nur einzelsträngige DNA wandert",
          ],
          correctIndex: 1,
          explanation:
            "**Kleine DNA-Fragmente** wandern am weitesten durch das Agarosegel, weil sie leichter durch die Gelporen schlüpfen. Große Fragmente werden stärker gebremst und bleiben näher an der Auftragsstelle. DNA wandert zur Anode (+), weil sie durch die Phosphatgruppen **negativ geladen** ist.",
          difficulty: 1,
          tags: ["gelelektrophorese", "dna-auftrennung"],
        },
        {
          question: "Wie funktioniert CRISPR/Cas9 bei einem Gen-Knockout?",
          options: [
            "Cas9 methyliert die Ziel-DNA",
            "Die guide-RNA ersetzt das defekte Gen",
            "Cas9 erzeugt einen Doppelstrangbruch, der durch fehlerhafte NHEJ-Reparatur das Gen zerstört",
            "CRISPR entfernt das gesamte Chromosom",
            "Cas9 blockiert die Transkription ohne die DNA zu schneiden",
          ],
          correctIndex: 2,
          explanation:
            "Beim **Gen-Knockout** mit CRISPR/Cas9 führt die **guide-RNA** das Cas9-Protein zur Zielsequenz. Cas9 erzeugt einen **Doppelstrangbruch**. Die Zelle repariert diesen durch **NHEJ** (Non-Homologous End Joining), wobei oft Insertionen oder Deletionen entstehen → **Leserasterverschiebung** → Gen wird funktionsunfähig.",
          difficulty: 2,
          tags: ["crispr", "cas9", "knockout", "nhej"],
        },
        {
          question:
            "Nach 25 PCR-Zyklen: Wie viele Kopien des Zielabschnitts sind theoretisch entstanden (ausgehend von einem DNA-Molekül)?",
          options: ["25", "50", "2⁵ = 32", "2²⁵ ≈ 33,5 Millionen", "25² = 625"],
          correctIndex: 3,
          explanation:
            "Bei der PCR **verdoppelt** sich die DNA-Menge in jedem Zyklus. Nach **n Zyklen** gibt es **2ⁿ** Kopien. Nach 25 Zyklen: 2²⁵ = 33.554.432 ≈ **33,5 Millionen** Kopien. Dies ist eine häufige MedAT-Rechenaufgabe.",
          difficulty: 2,
          tags: ["pcr", "rechenfrage", "amplifikation"],
        },
      ],
      altfrage: {
        text: "Welche Aussage zur Polymerase-Kettenreaktion (PCR) ist richtig?",
        options: [
          { id: "a", text: "Beim Annealing wird die DNA bei 95 °C denaturiert." },
          {
            id: "b",
            text: "Die Taq-Polymerase stammt aus einem thermophilen Bakterium und ist hitzestabil.",
          },
          { id: "c", text: "Nach 10 Zyklen liegen theoretisch 20 Kopien der Ziel-DNA vor." },
          { id: "d", text: "Für die PCR werden keine Primer benötigt." },
          { id: "e", text: "Die Elongation erfolgt bei 4 °C." },
        ],
        correctOptionId: "b",
        explanation:
          "Die **Taq-Polymerase** stammt aus *Thermus aquaticus*, einem **thermophilen Bakterium** aus heißen Quellen, und ist daher **hitzestabil** (übersteht 95 °C). A ist falsch: 95 °C ist die Denaturierungstemperatur, nicht die Annealing-Temperatur (~55–65 °C). C ist falsch: Nach 10 Zyklen liegen 2¹⁰ = 1024 Kopien vor (nicht 20). D ist falsch: Primer sind essenziell. E ist falsch: Elongation erfolgt bei ~72 °C.",
      },
    },

    // ─── 13. Humangenetik — Stammbaumanalyse und Besondere Erbgänge ──────────
    {
      id: "bio-4-13",
      title: "Humangenetik — Stammbaumanalyse und Besondere Erbgänge",
      stichworte: [
        "Stammbaumanalyse",
        "autosomal-dominant",
        "autosomal-rezessiv",
        "X-chromosomal",
        "Konduktorin",
        "Kodominanz",
        "Polygenie",
        "Pleiotropie",
        "mitochondriale Vererbung",
        "Kopplungsanalyse",
      ],
      content: `## Stammbaumanalyse — Methodik

Die **Stammbaumanalyse** (Pedigree-Analyse) ist das zentrale Werkzeug der Humangenetik, um **Erbgänge** in Familien zu identifizieren. Da kontrollierte Kreuzungsexperimente beim Menschen nicht möglich sind, werden stattdessen bereits vorhandene Familienstammbäume ausgewertet.

### Standardsymbole

| Symbol | Bedeutung |
|--------|-----------|
| **Quadrat** (□) | männlich |
| **Kreis** (○) | weiblich |
| **ausgefüllt** (■ / ●) | betroffen (Merkmalsträger) |
| **halb ausgefüllt** (◐) | Konduktor/in (heterozygot, phänotypisch gesund) |
| **Raute** (◇) | Geschlecht unbekannt |
| **horizontale Linie** | Paarung/Partnerschaft |
| **vertikale Linie** | Eltern-Kind-Beziehung |
| **Doppellinie** | konsanguine Verbindung (Verwandtenehe) |

> **Merke:** Im Stammbaum gilt: Quadrat = männlich, Kreis = weiblich, ausgefüllt = betroffen, halb ausgefüllt = Konduktor/in. Eine Doppellinie signalisiert Verwandtenehe (erhöhtes Risiko für rezessive Erkrankungen).

---

## Erbgänge erkennen — Entscheidungsbaum

### Autosomal-dominant (AD)

- Merkmal tritt **in jeder Generation** auf (keine Generationensprünge)
- Betroffene haben mindestens **einen betroffenen Elternteil**
- Beide Geschlechter **gleich häufig** betroffen
- Beispiele: **Huntington-Krankheit**, Marfan-Syndrom, Achondroplasie (Kleinwuchs)
- Genotypen: Aa = betroffen, aa = gesund (ein Allel reicht)

### Autosomal-rezessiv (AR)

- Merkmal kann **Generationen überspringen** (gesunde Eltern → betroffenes Kind)
- Betroffene sind **homozygot** (aa); heterozygote Eltern (Aa) sind **Konduktoren**
- Beide Geschlechter gleich häufig betroffen
- **Konsanguinität** (Verwandtenehe) erhöht die Wahrscheinlichkeit
- Beispiele: **Mukoviszidose** (Zystische Fibrose), Phenylketonurie (PKU), Sichelzellanämie

### X-chromosomal-rezessiv (XR)

- **Männer** deutlich häufiger betroffen (hemizygot: nur ein X)
- Betroffene Männer erben das Allel von der **Mutter** (Konduktorin)
- **Keine Vater-zu-Sohn-Übertragung** (Vater gibt Y, nicht X)
- Beispiele: **Hämophilie A/B** (Bluterkrankheit), Rot-Grün-Blindheit, Duchenne-Muskeldystrophie

| Erbgang | Generations­sprünge | Geschlechter­verteilung | Konduktoren | Schlüsselhinweis |
|---------|---------------------|------------------------|-------------|------------------|
| **AD** | Nein | Gleich | Nein | Jede Generation betroffen |
| **AR** | Ja | Gleich | Ja (Aa) | Gesunde Eltern → betroffenes Kind |
| **XR** | Ja | v. a. ♂ | ♀ (X^a X^A) | Keine Vater→Sohn-Übertragung |

> **Merke:** Drei Leitfragen: (1) Generationensprünge? Ja → rezessiv. (2) Geschlechterverteilung? Nur Männer → X-chromosomal. (3) Vater→Sohn? Ja → autosomal, nicht X-gekoppelt.

---

## Besondere Erbgänge

### Kodominanz

Beide Allele werden **gleichzeitig und vollständig** exprimiert. Bekanntestes Beispiel: **ABO-Blutgruppen** — die Allele I^A und I^B sind kodominant (Blutgruppe AB zeigt beide Antigene; Details siehe UK Blutgruppen). Weiteres Beispiel: MN-Blutgruppensystem.

### Unvollständige Dominanz (intermediärer Erbgang)

Der Heterozygote zeigt einen **Zwischenphänotyp**. Beispiel bei Pflanzen: Rot (RR) × Weiß (rr) → Rosa (Rr). Beim Menschen selten in Reinform, aber: **Sichelzellanämie** — Heterozygote (HbA/HbS) zeigen unter Sauerstoffmangel leichte Sichelung (Sichelzellmerkmal), ohne die schwere Krankheit der Homozygoten (HbS/HbS).

### Polygenie

Ein Merkmal wird durch **viele Gene** beeinflusst. Beispiele: **Körpergröße**, Hautfarbe, Intelligenz, Blutdruck. Die Verteilung in der Bevölkerung folgt einer **Normalverteilung** (Gaußkurve). Umweltfaktoren modulieren zusätzlich (**multifaktoriell**).

### Pleiotropie

Ein **einzelnes Gen** beeinflusst **mehrere** scheinbar unabhängige Merkmale. Beispiel: **Mukoviszidose** — das defekte CFTR-Gen (Chloridkanal) verursacht gleichzeitig Lungenprobleme, Pankreasinsuffizienz (unzureichende Enzymproduktion der Bauchspeicheldrüse), Infertilität bei Männern und salzigen Schweiß.

### Mitochondriale Vererbung (maternale Vererbung)

Die **mtDNA** (mitochondriale DNA, ringförmig, ~16.500 bp) wird ausschließlich von der **Mutter** vererbt — Spermien tragen kaum Mitochondrien bei. Merkmale: **alle Kinder** einer betroffenen Mutter sind betroffen, ein betroffener Vater gibt das Merkmal **nicht** weiter. Beispiel: **LHON** (Leber-Hereditäre-Optikus-Neuropathie), MELAS-Syndrom.

---

## Kopplungsanalyse und Rekombination

Gene, die auf **demselben Chromosom** nahe beieinander liegen, werden häufig **gemeinsam vererbt** (genetische Kopplung). Die **Rekombinationsfrequenz** (RF) gibt an, wie oft Crossing-over zwischen zwei Loci stattfindet:

- RF = 0 % → Gene liegen direkt nebeneinander (vollständige Kopplung)
- RF = 50 % → Gene segregieren unabhängig (wie auf verschiedenen Chromosomen)
- 1 % RF ≈ 1 **centiMorgan** (cM) Abstand auf der genetischen Karte

Die Kopplungsanalyse wurde historisch genutzt, um **Krankheitsgene zu kartieren** (z. B. Huntington-Gen auf Chromosom 4p16.3).`,
      lernziele: [
        "Die Standardsymbole eines Stammbaums benennen und einen Stammbaum lesen.",
        "Autosomal-dominante, autosomal-rezessive und X-chromosomale Erbgänge anhand eines Stammbaums unterscheiden.",
        "Kodominanz, Polygenie, Pleiotropie und mitochondriale Vererbung erklären.",
      ],
      sections: [],
      merksätze: [
        "Generationensprünge → rezessiv; keine Sprünge → dominant. Nur Männer betroffen + keine Vater→Sohn-Übertragung → X-chromosomal.",
        "Polygenie = viele Gene → ein Merkmal (z. B. Körpergröße). Pleiotropie = ein Gen → viele Merkmale (z. B. Mukoviszidose).",
      ],
      selfTest: [
        {
          question: "Gesunde Eltern haben ein Kind mit Mukoviszidose. Welcher Erbgang liegt vor?",
          options: [
            "Autosomal-dominant",
            "X-chromosomal-dominant",
            "Autosomal-rezessiv",
            "Mitochondrial",
            "Y-chromosomal",
          ],
          correctIndex: 2,
          explanation:
            "Wenn **gesunde Eltern** ein betroffenes Kind haben, liegt ein **autosomal-rezessiver** Erbgang vor. Beide Eltern sind heterozygote **Konduktoren** (Aa × Aa → 25 % aa). Mukoviszidose ist das Paradebeispiel für autosomal-rezessive Vererbung.",
          difficulty: 1,
          tags: ["erbgang", "autosomal-rezessiv", "mukoviszidose"],
        },
        {
          question: "Welches Merkmal spricht gegen einen X-chromosomal-rezessiven Erbgang?",
          options: [
            "Vor allem Männer sind betroffen",
            "Die Mutter ist Konduktorin",
            "Ein betroffener Vater gibt das Merkmal an seinen Sohn weiter",
            "Es gibt Generationensprünge",
            "Betroffene Männer sind hemizygot",
          ],
          correctIndex: 2,
          explanation:
            "Beim X-chromosomalen Erbgang gibt der Vater sein **X** an die Töchter und sein **Y** an die Söhne. Daher ist eine **Vater→Sohn-Übertragung** ausgeschlossen — der Sohn erhält das X von der Mutter. Wenn ein betroffener Vater betroffene Söhne hat, spricht das gegen X-Kopplung.",
          difficulty: 2,
          tags: ["x-chromosomal", "erbgang", "stammbaum"],
        },
        {
          question: "Was versteht man unter Pleiotropie?",
          options: [
            "Viele Gene beeinflussen ein Merkmal",
            "Ein Gen beeinflusst mehrere scheinbar unabhängige Merkmale",
            "Beide Allele werden gleichzeitig exprimiert",
            "Der Heterozygote zeigt einen Zwischenphänotyp",
            "Gene auf demselben Chromosom werden gemeinsam vererbt",
          ],
          correctIndex: 1,
          explanation:
            "**Pleiotropie** bedeutet, dass **ein einzelnes Gen** mehrere verschiedene Phänotypen beeinflusst. Beispiel: Das CFTR-Gen bei Mukoviszidose verursacht Lungenprobleme, Pankreasinsuffizienz und Infertilität bei Männern. Antwort A beschreibt **Polygenie** (das Gegenteil).",
          difficulty: 1,
          tags: ["pleiotropie", "polygenie", "genetik"],
        },
        {
          question:
            "Eine Mutter mit einer mitochondrialen Erkrankung bekommt Kinder. Welche Aussage ist richtig?",
          options: [
            "Nur die Söhne erben die Erkrankung",
            "Nur die Töchter erben die Erkrankung",
            "Alle Kinder erben die mitochondriale DNA von der Mutter",
            "Die Vererbung folgt den Mendelschen Regeln",
            "Der Vater bestimmt, ob die Kinder betroffen sind",
          ],
          correctIndex: 2,
          explanation:
            "**Mitochondriale Vererbung** ist **maternal**: Die mtDNA stammt ausschließlich von der Eizelle. **Alle Kinder** (Söhne und Töchter) einer betroffenen Mutter erben die mtDNA-Mutation. Der Vater trägt seine mtDNA nicht an die Nachkommen weiter.",
          difficulty: 2,
          tags: ["mitochondriale vererbung", "mtdna", "maternal"],
        },
        {
          question: "Zwei Genloci haben eine Rekombinationsfrequenz von 5 %. Was bedeutet das?",
          options: [
            "Die Gene liegen auf verschiedenen Chromosomen",
            "Die Gene segregieren vollständig unabhängig",
            "Die Gene liegen nahe beieinander auf demselben Chromosom (ca. 5 cM Abstand)",
            "Bei 5 % der Individuen sind beide Gene mutiert",
            "Die Gene zeigen Kodominanz",
          ],
          correctIndex: 2,
          explanation:
            "Eine **Rekombinationsfrequenz** von 5 % bedeutet, dass in 5 % der Meiosen ein Crossing-over zwischen den beiden Loci stattfindet. Das entspricht einem Abstand von ca. **5 centiMorgan** (cM) auf der genetischen Karte. Je geringer die RF, desto näher liegen die Gene beieinander und desto stärker sind sie **gekoppelt**.",
          difficulty: 3,
          tags: ["kopplung", "rekombination", "centimorgan"],
        },
      ],
      altfrage: {
        text: "In einem Stammbaum sind ausschließlich Männer von einer Erkrankung betroffen. Die Mütter betroffener Söhne sind phänotypisch gesund. Kein betroffener Vater hat betroffene Söhne. Welcher Erbgang liegt am wahrscheinlichsten vor?",
        options: [
          { id: "a", text: "Autosomal-dominant" },
          { id: "b", text: "Autosomal-rezessiv" },
          { id: "c", text: "X-chromosomal-rezessiv" },
          { id: "d", text: "Mitochondrial" },
          { id: "e", text: "Y-chromosomal" },
        ],
        correctOptionId: "c",
        explanation:
          "Die drei Schlüsselhinweise sprechen eindeutig für **X-chromosomal-rezessiv**: (1) Ausschließlich **Männer** betroffen (hemizygot, nur ein X). (2) Mütter sind gesunde **Konduktorinnen** (X^A X^a). (3) **Keine Vater→Sohn-Übertragung** — der Vater gibt sein Y an Söhne, nicht sein X. Y-chromosomal wäre möglich, aber dann hätten betroffene Väter immer betroffene Söhne (widerspricht dem Stammbaum).",
      },
    },

    // ─── 14. Genetische Diagnostik — PID, PND und Genetische Beratung ────────
    {
      id: "bio-4-14",
      title: "Genetische Diagnostik — PID, PND und Genetische Beratung",
      stichworte: [
        "Genetische Beratung",
        "Pränataldiagnostik",
        "PND",
        "Präimplantationsdiagnostik",
        "PID",
        "Amniozentese",
        "Chorionzottenbiopsie",
        "NIPT",
        "Ersttrimester-Screening",
        "nicht-direktive Beratung",
      ],
      content: `## Genetische Beratung

Die **genetische Beratung** ist ein Informations- und Kommunikationsprozess, bei dem Ratsuchende über **Ursachen, Verlauf und Wiederholungsrisiken** genetischer Erkrankungen aufgeklärt werden. Zentrales Prinzip: die Beratung erfolgt **nicht-direktiv** — der Berater gibt keine Handlungsempfehlung, sondern befähigt die Ratsuchenden zu einer **eigenständigen, informierten Entscheidung**.

### Indikationen (Wann wird genetische Beratung empfohlen?)

- **Mütterliches Alter ≥ 35 Jahre** (erhöhtes Risiko für Trisomien, v. a. Trisomie 21)
- **Familiäre Häufung** einer Erbkrankheit (z. B. Mukoviszidose, Huntington)
- **Konsanguinität** (Verwandtenehe) — erhöhtes Risiko für autosomal-rezessive Erkrankungen
- **Auffälliger Befund** in der Pränataldiagnostik (z. B. erhöhte Nackentransparenz)
- **Habitueller Abort** (≥ 3 Fehlgeburten) — mögliche chromosomale Ursache
- **Kinderwunsch** bei bekannter genetischer Belastung

### Ablauf

1. **Anamnese** — Familienstammbaum (Pedigree) über mindestens 3 Generationen
2. **Risikoberechnung** — Wiederholungswahrscheinlichkeit nach Mendel oder empirischen Daten
3. **Aufklärung** — verständliche Erklärung der Erkrankung, Prognose, Handlungsoptionen
4. **Nicht-direktive Begleitung** — die Entscheidung (z. B. über PND, PID oder Schwangerschaftsabbruch) liegt allein bei den Ratsuchenden

> **Merke:** Genetische Beratung ist **nicht-direktiv**: Information und Risikoaufklärung ja, Handlungsanweisung nein. Indikationen merken: Alter ≥ 35, familiäre Belastung, Konsanguinität, auffällige Befunde, habituelle Aborte.

---

## Pränataldiagnostik (PND)

Die **Pränataldiagnostik** umfasst alle Untersuchungen am ungeborenen Kind **während der Schwangerschaft**. Man unterscheidet **nicht-invasive** und **invasive** Verfahren.

### Nicht-invasive Verfahren

| Verfahren | Zeitpunkt | Was wird untersucht? |
|-----------|-----------|---------------------|
| **Ultraschall** | Ab 6. SSW, routinemäßig 3× | Morphologie, Wachstum, Organentwicklung |
| **Ersttrimester-Screening** | 11.–14. SSW | Nackentransparenz (NT) + Blutmarker (PAPP-A, freies β-hCG) → Risikoberechnung für Trisomie 21/18/13 |
| **NIPT** (Nicht-invasiver Pränataltest) | Ab 10. SSW | Analyse zellfreier fetaler DNA (cffDNA) im mütterlichen Blut → Trisomie 21/18/13 mit >99 % Detektionsrate |
| **Triple-Test** | 15.–18. SSW | AFP + β-hCG + Östriol im mütterlichen Blut → Risikoschätzung (geringere Aussagekraft als NIPT, wird zunehmend ersetzt) |

### Invasive Verfahren

| Verfahren | Zeitpunkt | Methode | Risiko |
|-----------|-----------|---------|--------|
| **Chorionzottenbiopsie** (CVS) | 10.–12. SSW | Entnahme von Chorionzottengewebe (Plazenta) per Punktion | Fehlgeburtsrisiko ~0,5–1 % |
| **Amniozentese** (Fruchtwasserpunktion) | 15.–18. SSW | Entnahme von Fruchtwasser mit fetalen Zellen per Nadel | Fehlgeburtsrisiko ~0,3–0,5 % |
| **Cordozentese** (Nabelschnurpunktion) | Ab 18. SSW | Punktion der Nabelschnurvene unter Ultraschall → fetales Blut | Fehlgeburtsrisiko ~1–2 %; selten, bei speziellen Fragestellungen |

Invasive Verfahren ermöglichen eine **Karyotypisierung** (Chromosomenanalyse), **FISH** (Fluoreszenz-in-situ-Hybridisierung für schnelle Trisomie-Detektion) und **molekulargenetische** Tests (z. B. auf Mukoviszidose-Mutationen).

> **Merke:** Nicht-invasiv = kein Fehlgeburtsrisiko (Ultraschall, NIPT, Ersttrimester-Screening). Invasiv = direktes Zellmaterial, aber Fehlgeburtsrisiko (Chorionzottenbiopsie ~0,5–1 %, Amniozentese ~0,3–0,5 %). NIPT hat die höchste Detektionsrate für Trisomien unter den nicht-invasiven Verfahren.

---

## Präimplantationsdiagnostik (PID)

Die **PID** (Preimplantation Genetic Testing, PGT) untersucht Embryonen **vor der Einnistung** in die Gebärmutter — also im Rahmen einer **In-vitro-Fertilisation** (IVF).

### Ablauf

1. **IVF** — Eizellen werden entnommen und im Labor befruchtet
2. **Embryokultur** — Entwicklung bis zum **Blastozystenstadium** (Tag 5–6, ca. 100–200 Zellen)
3. **Biopsie** — Entnahme weniger Zellen aus dem **Trophoblasten** (äußere Zellschicht, wird später Plazenta)
4. **Genetische Analyse** — je nach Fragestellung:
   - **PGT-M** (Monogene Erkrankungen): z. B. Mukoviszidose, Huntington
   - **PGT-SR** (Strukturelle Chromosomenaberrationen): z. B. Translokationen
   - **PGT-A** (Aneuploidie-Screening): Chromosomenzahl
5. **Transfer** — nur genetisch unauffällige Embryonen werden übertragen

### Rechtliche Lage in Österreich

Seit dem **Fortpflanzungsmedizinrechts-Änderungsgesetz 2015** (FMedRÄG 2015) ist PID in Österreich unter **strengen Auflagen** erlaubt:
- Nur bei **schweren Erbkrankheiten** oder nach **mindestens 3 erfolglosen IVF-Versuchen** bzw. **3 Fehlgeburten**
- Genehmigung durch eine **Ethikkommission** erforderlich
- Geschlechtsselektion ohne medizinische Indikation ist **verboten**

---

## PND vs. PID — Vergleich

| Kriterium | **PND** | **PID** |
|-----------|---------|---------|
| **Zeitpunkt** | Während der Schwangerschaft | Vor der Einnistung (IVF) |
| **Voraussetzung** | Natürliche/künstliche Schwangerschaft | IVF notwendig |
| **Untersuchungsmaterial** | Fruchtwasser, Chorionzotten, mütterliches Blut | Trophoblastzellen der Blastozyste |
| **Konsequenz bei Befund** | Schwangerschaftsabbruch oder Vorbereitung | Nicht-Transfer des Embryos |
| **Belastung** | Psychisch (Entscheidung in laufender SS) | IVF-Prozedur (hormonell, zeitlich) |
| **Rechtlich in AT** | Grundsätzlich erlaubt | Seit 2015 unter strengen Auflagen |

---

## Ethische Aspekte (Kurzüberblick)

Die genetische Diagnostik wirft fundamentale Fragen auf, die im MedAT neutral verstanden werden sollten:

- **Recht auf Wissen vs. Recht auf Nichtwissen** — jede Person hat das Recht, das Ergebnis zu erfahren oder nicht
- **Diskriminierungsverbot** — genetische Daten dürfen nicht zu Benachteiligung führen (Gendiagnostikgesetz)
- **Selektion** — Kritiker sehen in PID eine Form der Embryonenselektion; Befürworter betonen die Vermeidung schweren Leids
- **Informierte Einwilligung** (Informed Consent) — Voraussetzung für jede genetische Untersuchung`,
      lernziele: [
        "Indikationen und Prinzipien der genetischen Beratung (nicht-direktiv) erklären.",
        "Invasive und nicht-invasive Verfahren der Pränataldiagnostik benennen und vergleichen.",
        "Ablauf und rechtliche Rahmenbedingungen der PID in Österreich beschreiben.",
      ],
      sections: [],
      merksätze: [
        "Genetische Beratung = nicht-direktiv, Indikationen: Alter ≥ 35, familiäre Belastung, Konsanguinität, auffällige Befunde.",
        "PND = während der Schwangerschaft (invasiv/nicht-invasiv). PID = vor Einnistung (IVF + Blastozystenbiopsie). Österreich: PID seit 2015 unter strengen Auflagen erlaubt.",
      ],
      selfTest: [
        {
          question: "Was ist das zentrale Prinzip der genetischen Beratung?",
          options: [
            "Der Berater empfiehlt den Schwangerschaftsabbruch bei genetischem Befund",
            "Die Beratung erfolgt nicht-direktiv — die Ratsuchenden treffen die Entscheidung selbst",
            "Genetische Beratung ist nur bei Konsanguinität vorgeschrieben",
            "Der Berater entscheidet über die Durchführung einer PID",
            "Genetische Beratung ersetzt die Pränataldiagnostik",
          ],
          correctIndex: 1,
          explanation:
            "Das zentrale Prinzip ist die **Nicht-Direktivität**: Der Berater informiert über Risiken, Erkrankungen und Optionen, gibt aber **keine Handlungsanweisung**. Die Entscheidung (z. B. für oder gegen PND/PID) liegt allein bei den Ratsuchenden.",
          difficulty: 1,
          tags: ["genetische beratung", "nicht-direktiv"],
        },
        {
          question:
            "Welches nicht-invasive Verfahren hat die höchste Detektionsrate für Trisomie 21?",
          options: [
            "Triple-Test",
            "Amniozentese",
            "NIPT (Nicht-invasiver Pränataltest)",
            "Chorionzottenbiopsie",
            "Cordozentese",
          ],
          correctIndex: 2,
          explanation:
            "Der **NIPT** analysiert zellfreie fetale DNA (cffDNA) im mütterlichen Blut und erreicht eine Detektionsrate von **> 99 %** für Trisomie 21 — deutlich höher als der Triple-Test. Amniozentese und Chorionzottenbiopsie sind **invasiv**, nicht nicht-invasiv.",
          difficulty: 1,
          tags: ["nipt", "pränataldiagnostik", "trisomie"],
        },
        {
          question:
            "Bei welchem Verfahren der Pränataldiagnostik ist das Fehlgeburtsrisiko am höchsten?",
          options: [
            "Ultraschall",
            "NIPT",
            "Amniozentese (0,3–0,5 %)",
            "Cordozentese (1–2 %)",
            "Ersttrimester-Screening",
          ],
          correctIndex: 3,
          explanation:
            "Die **Cordozentese** (Nabelschnurpunktion) hat mit **1–2 %** das höchste Fehlgeburtsrisiko unter den PND-Verfahren. Amniozentese liegt bei 0,3–0,5 %, Chorionzottenbiopsie bei 0,5–1 %. Ultraschall, NIPT und Ersttrimester-Screening sind **nicht-invasiv** und haben kein Fehlgeburtsrisiko.",
          difficulty: 2,
          tags: ["cordozentese", "pnd", "fehlgeburtsrisiko"],
        },
        {
          question: "Seit wann ist die Präimplantationsdiagnostik (PID) in Österreich erlaubt?",
          options: [
            "Sie ist in Österreich generell verboten",
            "Seit 2005 ohne Einschränkungen",
            "Seit 2015 unter strengen Auflagen (FMedRÄG 2015)",
            "Seit 2020 nur bei Trisomie 21",
            "Seit 1990 für alle IVF-Behandlungen",
          ],
          correctIndex: 2,
          explanation:
            "In Österreich ist PID seit dem **Fortpflanzungsmedizinrechts-Änderungsgesetz 2015** (FMedRÄG 2015) unter **strengen Auflagen** erlaubt: nur bei schweren Erbkrankheiten oder nach ≥ 3 erfolglosen IVF-Versuchen/Fehlgeburten, mit Genehmigung einer Ethikkommission.",
          difficulty: 2,
          tags: ["pid", "österreich", "fmedrÄg"],
        },
        {
          question: "Was ist der Hauptunterschied zwischen PND und PID?",
          options: [
            "PND untersucht die Mutter, PID den Vater",
            "PND erfolgt während der Schwangerschaft, PID vor der Einnistung des Embryos (IVF)",
            "PND ist invasiv, PID ist nicht-invasiv",
            "PND analysiert DNA, PID analysiert Proteine",
            "PND ist in Österreich verboten, PID erlaubt",
          ],
          correctIndex: 1,
          explanation:
            "Der Hauptunterschied: **PND** (Pränataldiagnostik) untersucht das ungeborene Kind **während der Schwangerschaft**. **PID** (Präimplantationsdiagnostik) untersucht Embryonen **vor dem Transfer** in die Gebärmutter, also im Rahmen einer **IVF**. Bei PND ist die Schwangerschaft bereits eingetreten, bei PID noch nicht.",
          difficulty: 1,
          tags: ["pnd", "pid", "vergleich"],
        },
      ],
      altfrage: {
        text: "Eine 38-jährige Schwangere möchte eine Chromosomenanalyse ihres ungeborenen Kindes. Welches Verfahren liefert fetale Zellen für eine Karyotypisierung bei geringstem Fehlgeburtsrisiko?",
        options: [
          { id: "a", text: "Cordozentese" },
          { id: "b", text: "Chorionzottenbiopsie" },
          { id: "c", text: "Amniozentese" },
          { id: "d", text: "NIPT" },
          { id: "e", text: "Triple-Test" },
        ],
        correctOptionId: "c",
        explanation:
          "Für eine vollständige **Karyotypisierung** werden fetale Zellen benötigt — das schließt NIPT (nur cffDNA, keine Zellen) und Triple-Test (nur Blutmarker) aus. Unter den invasiven Verfahren hat die **Amniozentese** mit **0,3–0,5 %** das geringste Fehlgeburtsrisiko (vs. Chorionzottenbiopsie 0,5–1 % und Cordozentese 1–2 %). Sie ist das Standardverfahren für die Karyotypisierung ab der 15. SSW.",
      },
    },
  ],
};
