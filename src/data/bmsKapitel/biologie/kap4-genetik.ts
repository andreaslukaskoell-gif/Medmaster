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
      stichworte: ["DNA", "Gen", "Chromosom", "Allel", "Locus", "Doppelhelix", "Erbinformation"],
      content: `## DNA: Träger der Erbinformation

**DNA** (Desoxyribonukleinsäure) ist das Molekül, das die genetische Information speichert. Sie besteht aus zwei antiparallel (gegenläufig orientiert) gewundenen Strängen (**Doppelhelix**). Jeder Strang ist aus **Nukleotiden** aufgebaut: Ein Nukleotid enthält den Zucker Desoxyribose (Fünffachzucker ohne Sauerstoff an C2), ein Phosphat und eine von vier **Basen** — **A**denin (A), **T**hymin (T), **G**uanin (G), **C**ytosin (C). Die Basen der beiden Stränge paaren sich nach festen Regeln: A immer mit T (zwei Wasserstoffbrücken), G immer mit C (drei Wasserstoffbrücken). Daraus folgen die **Chargaff-Regeln**: In einem Doppelstrang ist die Menge an A gleich der von T, die von G gleich der von C. Die Abfolge der Basen (die **Sequenz**) codiert die Information für den Aufbau von Proteinen und die Steuerung der Zelle.

> **Merke:** DNA = Doppelhelix aus Nukleotiden; Basen A, T, G, C; A-T und G-C paaren. Die Sequenz der Basen ist die Erbinformation.

**Chargaff-Regeln (1950):** Erwin Chargaff wies 1950 nach, dass in jeder doppelsträngigen DNA gilt: **%A = %T** und **%G = %C** — eine direkte Folge der komplementären Basenpaarung. Rechenbeispiel: Wenn A = 27 %, dann T = 27 %, und G = C = (100 % − 54 %) / 2 = **23 %**. Daraus folgt auch: A + G = T + C (Purine (Zweiring-Basen: A, G) = Pyrimidine (Einring-Basen: T, C)).

> **Merke:** **Chargaff-Regel:** A = T und G = C (in Prozent). Wenn A = 27 % → T = 27 %, G = C = 23 %.

---

## Gen: funktionelle Einheit auf der DNA


{{DIAGRAM:transcription-translation}}

Ein **Gen** ist ein **Abschnitt der DNA**, der die Information für ein bestimmtes Merkmal oder ein Produkt (z. B. ein Protein oder eine RNA) trägt. Gene liegen an festen Orten auf den Chromosomen; dieser Ort heißt **Locus** (Plural: Loci). Beim Menschen gibt es etwa 20.000–25.000 protein codierende Gene, verteilt auf 46 Chromosomen. Ein Gen kann in verschiedenen **Varianten** vorkommen — diese Varianten nennt man **Allele**. Beispiel: Das Gen für die Blütenfarbe bei Erbsen hat ein Allel für „rot” und ein Allel für „weiß”. Ein diploider Organismus trägt pro Gen zwei Allele (eines von jedem Elternteil), die am gleichen Locus auf den beiden **homologen Chromosomen** sitzen.

> **Merke:** Gen = DNA-Abschnitt für ein Merkmal/Produkt. Locus = Ort des Gens auf dem Chromosom. Allel = eine von mehreren Varianten eines Gens.

---

## Chromosom: verpackte DNA


Ein **Chromosom** ist ein langer DNA-Faden, der zusammen mit **Histonen** (Verpackungsproteinen) und weiteren Proteinen zu einer kompakten Struktur organisiert ist. So kann die DNA bei der Zellteilung sauber verteilt werden. Beim Menschen liegt die DNA im Zellkern in 46 Chromosomen vor (23 von der Mutter, 23 vom Vater). Vor der Zellteilung wird jede DNA verdoppelt; dann besteht jedes Chromosom aus zwei identischen **Schwesterchromatiden**, die am **Zentromer** zusammenhängen. Zwei Chromosomen, die dasselbe setzen von Genen tragen (eins vom Vater, eins von der Mutter), heißen **homologe Chromosomen** — sie sind nicht identisch, aber entsprechen einander (gleiche Loci, oft unterschiedliche Allele).

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
    },

    // ─── 2. Chromosomen: Aufbau und Karyotyp ──────────────────────────────────
    {
      id: "bio-4-02",
      title: "Chromosomen: Aufbau und Karyotyp",
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

Ein metaphasisches (in der Metaphase befindliches) Chromosom (in der Zellteilung sichtbar) besteht aus **zwei Schwesterchromatiden**, die am **Zentromer** zusammenhängen. Das Zentromer ist der Ansatzpunkt für die Spindelfasern; an ihm sitzt der **Kinetochor** (Protein komplex). Jede Chromatide hat zwei **Arme**: der **p-Arm** (petit = kurz) und der **q-Arm** (queue = lang). An den Enden der Chromosomen liegen die **Telomere** — repetitive DNA-Sequenzen (beim Menschen TTAGGG), die die Enden schützen und bei jeder Zellteilung etwas kürzer werden (ohne Telomerase (Enzym, das Telomere verlängert)).

> **Merke:** Zentromer verbindet die beiden Schwesterchromatiden; p-Arm = kurz, q-Arm = lang; Telomere schützen die Enden.

---

## Autosomen und Gonosomen


Beim Menschen gibt es **46 Chromosomen** in jeder Körperzelle (diploider Satz): **22 Paare Autosomen** (Chromosomen 1–22, nicht geschlechtsbestimmend) und **ein Paar Geschlechtschromosomen** (**Gonosomen**): **XX** bei Frauen, **XY** bei Männern. Die Gonosomen bestimmen das genetische Geschlecht: Das **Y-Chromosom** trägt das **SRY-Gen** (Sex-determining Region Y), das die männliche Geschlechtsentwicklung auslöst. Fehlt das Y, entwickelt sich weiblich (z. B. 46,XX oder 45,X).

> **Merke:** 46 Chromosomen = 22 Autosomenpaare + 1 Gonosomenpaar. XX = weiblich, XY = männlich; Geschlecht durch Y-Chromosom (SRY) bestimmt.

---

## Karyotyp und Notation


{{DIAGRAM:mitosis}}

Der **Karyotyp** ist die geordnete Darstellung aller Chromosomen einer Zelle (nach Größe, Zentromerlage, Färbemuster). Er wird in der **Metaphase** der Mitose erstellt (Chromosomen sind dann maximal kondensiert). Die **Karyotyp-Notation** gibt zuerst die **Chromosomenzahl**, dann die **Gonosomen** und bei Abweichungen die **Aberration** (chromosomale Abweichung) an:

- **46,XX** = weiblich, normal
- **46,XY** = männlich, normal
- **47,XX,+21** = weiblich, Trisomie 21 (Down-Syndrom) — drei Kopien von Chromosom 21
- **47,XXY** = Klinefelter-Syndrom (männlich, ein zusätzliches X)
- **45,X** = Turner-Syndrom (weiblich, ein X fehlt)

> **Merke:** Notation: Zahl, dann Gonosomen, dann Aberration (z. B. +21 für Trisomie 21). 46,XX = weiblich; 46,XY = männlich.`,
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
    },

    // ─── 3. Zellzyklus, Mitose und Meiose ─────────────────────────────────────
    {
      id: "bio-4-03",
      title: "Zellzyklus, Mitose und Meiose",
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
    },

    // ─── 4. Mendelsche Regeln ─────────────────────────────────────────────────
    {
      id: "bio-4-04",
      title: "Mendelsche Regeln",
      stichworte: [
        "Uniformitätsregel",
        "Spaltungsregel",
        "Unabhängigkeitsregel",
        "F₁",
        "F₂",
        "Punnett-Quadrat",
        "monohybrid",
        "dihybrid",
      ],
      content: `## 1. Mendelsche Regel (Uniformitätsregel)

Kreuzt man **reinerbige (homozygote)** Eltern mit **unterschiedlichen Merkmalen**, so sind alle Nachkommen der **F₁-Generation** (erste Filialgeneration) **uniform** — gleicher Genotyp und gleicher Phänotyp. Beispiel: AA (rot) × aa (weiß) → alle F₁ sind **Aa** (rot, wenn A dominant). Die F₁ ist also **mischerbig (heterozygot)** und zeigt das dominante Merkmal.

> **Merke:** 1. Mendelsche Regel: Homozygote Eltern (AA × aa) → F₁ zu 100 % uniform heterozygot (Aa).

---

## 2. Mendelsche Regel (Spaltungsregel)


Kreuzt man die **F₁-Hybriden** untereinander (Aa × Aa), so **spaltet** die **F₂-Generation** in festen Verhältnissen auf. **Genotyp:** 1 AA : 2 Aa : 1 aa (Verhältnis 1:2:1). **Phänotyp** (bei dominant-rezessiv, A dominant über a): 3 dominant (rot) : 1 rezessiv (weiß), also **3:1**. Das Punnett-Quadrat (2×2) zeigt die vier möglichen Kombinationen der Gameten (A und a von jedem Elternteil).

> **Merke:** 2. Mendelsche Regel: Aa × Aa → F₂ Genotyp 1:2:1 (AA:Aa:aa), Phänotyp (dominant-rezessiv) 3:1.

---

## 3. Mendelsche Regel (Unabhängigkeitsregel)


{{DIAGRAM:meiosis}}

Betrachtet man **zwei Merkmale** (zwei Gene auf **verschiedenen Chromosomen** oder weit voneinander entfernt), so werden die Gene **unabhängig** voneinander verteilt. Kreuzung **RrGg × RrGg** (dihybrider Erbgang) ergibt in F₂ das **Phänotyp-Verhältnis 9:3:3:1** (9 R_G_, 3 R_gg, 3 rrG_, 1 rrgg). Das Punnett-Quadrat hat 4×4 = 16 Felder. Voraussetzung: **Unabhängigkeit** der Gene (keine Kopplung). Bei **gekoppelten Genen** (auf demselben Chromosom, nah beieinander) weicht das Verhältnis ab — dann überwiegen die Parentaltypen.

> **Merke:** 3. Mendelsche Regel: Zwei unabhängige Gene (RrGg × RrGg) → F₂ 9:3:3:1. Nur bei Genen auf verschiedenen Chromosomen oder ohne Kopplung.

---

## Punnett-Quadrat und Wahrscheinlichkeit


Das **Punnett-Quadrat** stellt die möglichen Kombinationen der **Gameten** (Eizellen/Spermien) dar. Monohybrid: 2×2 = 4 Kombinationen (Aa × Aa → AA, Aa, Aa, aa). Dihybrid: 4×4 = 16 (je Elternteil 4 Gameten-Typen: RG, Rg, rG, rg). **Produktregel** bei unabhängigen Ereignissen: P(rrgg) = P(rr) × P(gg) = 1/4 × 1/4 = 1/16.`,
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
        "Testkreuzung",
      ],
      content: `## Genotyp und Phänotyp

Der **Genotyp** ist die **Allel-Kombination** eines Individuums für ein (oder mehrere) Gene — z. B. AA, Aa oder aa. Der **Phänotyp** ist die **sichtbare oder messbare Ausprägung** des Merkmals — z. B. rote oder weiße Blüte, Blutgruppe A, B, AB oder 0. Mehrere Genotypen können zum gleichen Phänotyp führen (z. B. AA und Aa zeigen beide den dominanten Phänotyp), wenn ein Allel dominant ist.

> **Merke:** Genotyp = genetische Ausstattung (Allel-Kombination). Phänotyp = sichtbares Merkmal.

---

## Homozygot und heterozygot


**Homozygot** (reinerbig): Beide Allele sind gleich — **AA** (homozygot dominant) oder **aa** (homozygot rezessiv). **Heterozygot** (mischerbig): Die beiden Allele sind unterschiedlich — **Aa**. Bei der Vererbung gibt jeder Elternteil genau eines seiner beiden Allele weiter (über die Keimzelle); deshalb kann man mit Kreuzungsschemata die Genotyp- und Phänotyp-Verhältnisse vorhersagen.

---

## Dominanzverhältnisse


**Dominant-rezessiv:** Das **dominante** Allel (üblicherweise Großbuchstabe, z. B. A) setzt sich auch im heterozygoten Zustand durch; das **rezessive** Allel (Kleinbuchstabe, a) ist nur im homozygoten Zustand (aa) sichtbar. Beispiel: Aa → gleicher Phänotyp wie AA (rot).

**Intermediär (unvollständige Dominanz):** Der Heterozygote (Aa) zeigt einen **Mischphänotyp** zwischen den beiden Homozygoten (z. B. AA rot, aa weiß, Aa rosa). Das F₂-Phänotyp-Verhältnis entspricht dann dem Genotyp-Verhältnis **1:2:1**.

**Kodominant:** Beide Allele kommen im Phänotyp **gleichzeitig** zur Geltung (nicht gemischt). Klassisches Beispiel: **Blutgruppe AB** — beide Antigene A und B werden exprimiert (I^A und I^B kodominant).

> **Merke:** Dominant-rezessiv: Aa = AA im Phänotyp. Intermediär: Aa = Mischung (1:2:1). Kodominant: beide Allele sichtbar (z. B. AB).

---

## Testkreuzung (Rückkreuzung)


{{DIAGRAM:pedigree-analysis}}

Will man wissen, ob ein Individuum mit **dominantem Phänotyp** **homozygot (AA)** oder **heterozygot (Aa)** ist, kreuzt man es mit einem **homozygot rezessiven** Partner (aa). **Ergebnis:** Sind alle Nachkommen dominant → Elternteil war **AA**. Spaltet die Nachkommenschaft **1:1** (dominant : rezessiv) → Elternteil war **Aa**. Die Testkreuzung liefert also eine klare Aussage über den Genotyp.

> **Merke:** Testkreuzung × aa: 100 % dominant → AA; 1:1 (dominant : rezessiv) → Aa.`,
      lernziele: [
        "Genotyp und Phänotyp sowie homozygot und heterozygot definieren.",
        "Dominant-rezessiv, intermediär und kodominant unterscheiden und die Testkreuzung anwenden.",
      ],
      sections: [],
      merksätze: [
        "Genotyp = genetische Ausstattung; Phänotyp = sichtbares Merkmal. Testkreuzung × aa: 100 % dominant = AA, 1:1 = Aa.",
      ],
      selfTest: [
        {
          question:
            "Bei welchem Dominanzverhältnis zeigt der Heterozygote (Aa) einen Mischphänotyp (z. B. rosa zwischen rot und weiß)?",
          options: [
            "Dominant-rezessiv",
            "Kodominant",
            "Intermediär (unvollständige Dominanz)",
            "Rezessiv",
            "X-chromosomal",
          ],
          correctIndex: 2,
          explanation:
            "Bei **intermediärer** (unvollständiger) Dominanz zeigt der Heterozygote Aa einen **Mischphänotyp** zwischen den beiden Homozygoten (z. B. rosa zwischen rot und weiß). Bei **kodominant** werden beide Allele **gleichzeitig** exprimiert (nicht gemischt), z. B. Blutgruppe AB mit A- und B-Antigen. Bei **dominant-rezessiv** zeigt Aa den gleichen Phänotyp wie AA.",
          difficulty: 1,
          tags: ["intermediär", "dominanz", "phänotyp"],
        },
        {
          question:
            "Ein Individuum mit dominantem Phänotyp wird mit einem homozygot rezessiven Partner gekreuzt. Die Nachkommen spalten 1:1 (dominant : rezessiv). Welchen Genotyp hatte das erste Individuum?",
          options: [
            "AA (homozygot dominant)",
            "aa (homozygot rezessiv)",
            "Aa (heterozygot)",
            "A (hemizygot)",
            "Der Genotyp kann nicht bestimmt werden",
          ],
          correctIndex: 2,
          explanation:
            "Bei der **Testkreuzung** (× aa): Wenn die Nachkommen **1:1** aufspalten (dominant : rezessiv), muss das getestete Individuum **heterozygot (Aa)** gewesen sein. Bei AA wären **alle** Nachkommen dominant.",
          difficulty: 1,
          tags: ["testkreuzung", "heterozygot", "genotyp"],
        },
        {
          question:
            "Bei welchem Dominanzverhältnis sind im Heterozygoten beide Allele gleichzeitig phänotypisch sichtbar (nicht gemischt)?",
          options: ["Dominant-rezessiv", "Intermediär", "Kodominant", "Rezessiv", "Epistasie"],
          correctIndex: 2,
          explanation:
            "**Kodominanz** bedeutet: Beide Allele werden **gleichzeitig** exprimiert und sind im Phänotyp sichtbar (z. B. Blutgruppe AB: A-Antigen UND B-Antigen). Das ist anders als **intermediär**, wo ein **Mischphänotyp** entsteht (z. B. rosa).",
          difficulty: 1,
          tags: ["kodominant", "blutgruppe", "phänotyp"],
        },
        {
          question:
            "Welches Phänotyp-Verhältnis zeigt die F₂-Generation bei intermediärer Vererbung (Aa × Aa)?",
          options: ["3:1", "1:2:1 (entspricht dem Genotyp-Verhältnis)", "9:3:3:1", "1:1", "2:1"],
          correctIndex: 1,
          explanation:
            "Bei **intermediärer** Dominanz zeigt jeder Genotyp einen eigenen Phänotyp: AA = rot, Aa = rosa, aa = weiß. Daher entspricht das **Phänotyp-Verhältnis** dem **Genotyp-Verhältnis: 1:2:1**. Bei dominant-rezessiv wäre es 3:1.",
          difficulty: 2,
          tags: ["intermediär", "1:2:1", "f2"],
        },
        {
          question: "Warum bedeutet 'dominant' NICHT automatisch 'häufig in der Population'?",
          options: [
            "Weil dominante Allele immer letal sind",
            "Weil Dominanz die Phänotyp-Ausprägung im Heterozygoten beschreibt, nicht die Häufigkeit eines Allels in der Population",
            "Weil rezessive Allele immer häufiger sind",
            "Weil Dominanz nur bei X-chromosomalen Genen vorkommt",
            "Weil alle Allele gleich häufig sind",
          ],
          correctIndex: 1,
          explanation:
            "**Dominanz** beschreibt, wie sich Allele im **Heterozygoten** (Aa) auswirken — ob A den Phänotyp allein bestimmt oder nicht. Die **Häufigkeit** eines Allels in der Population ist davon unabhängig. Beispiel: Polydaktylie ist dominant, aber selten.",
          difficulty: 2,
          tags: ["dominant", "häufigkeit", "population"],
        },
      ],
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


{{DIAGRAM:dna-helix}}

**Ein** krankes Allel genügt für die Erkrankung (Aa oder AA krank). Typisches Stammbaum-Muster: **In jeder Generation** Betroffene (vertikale Weitergabe); Männer und Frauen gleich häufig; ein betroffenes Elternteil gibt mit 50 % Wahrscheinlichkeit das kranke Allel weiter. Beispiele: Chorea Huntington (neurodegenerative Bewegungsstörung), Marfan-Syndrom (Bindegewebserkrankung), Achondroplasie (häufigste Form des Kleinwuchses).

> **Merke:** Autosomal-dominant: jede Generation kann betroffen sein; 50 % Risiko für Kinder eines betroffenen Elternteils (wenn dieser heterozygot Aa ist).

---

## Autosomal-rezessiv


Die Erkrankung tritt nur auf, wenn **beide** Allele krank sind (**aa**). Heterozygote (Aa) sind **Konduktoren/Träger**, meist gesund. Typisches Muster: **Generationensprünge** (gesunde Eltern können betroffene Kinder haben, wenn beide Aa sind); Geschwister können betroffen sein; **Konsanguinität** (Verwandtenehe) erhöht das Risiko. Aa × Aa → 25 % aa (krank), 50 % Aa (Träger), 25 % AA (gesund). Beispiele: Mukoviszidose (zystische Fibrose, zäher Schleim in Lunge/Pankreas), Phenylketonurie (PKU) (gestörter Phenylalanin-Abbau), Sichelzellanämie (sichelförmige Erythrozyten).

> **Merke:** Autosomal-rezessiv: aa krank; Aa × Aa → 25 % krank, 50 % Träger, 25 % gesund. Generationensprünge typisch.

---

## X-chromosomal rezessiv


{{DIAGRAM:blood-groups}}

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
    },

    // ─── 7. Blutgruppen: AB0-System ──────────────────────────────────────────
    {
      id: "bio-4-07",
      title: "Blutgruppen: AB0-System",
      stichworte: ["AB0", "Blutgruppe", "kodominant", "I^A", "I^B", "i", "Antigen", "Rhesus"],
      content: `## Multiple Allelie und das AB0-System

Im Gegensatz zu einfachen Erbgaengen mit nur zwei Allelen besitzt das AB0-System **drei Allele** an einem einzigen Genort auf Chromosom 9: **I^A**, **I^B** und **i**. Das Gen codiert fuer eine Glycosyltransferase (Enzym, das Zucker überträgt), die Zuckerreste an ein Vorlaeuferantigen (H-Antigen) auf der Erythrozytenoberflaeche (Oberfläche der roten Blutkörperchen) anhaengt:

- **I^A**: haengt N-Acetylgalactosamin an → **Antigen A**
- **I^B**: haengt Galactose an → **Antigen B**
- **i**: codiert fuer ein nicht-funktionales Enzym → **kein Antigen** (nur H-Antigen bleibt)

Da jeder Mensch diploid ist, traegt er genau **zwei** dieser drei Allele. Daraus ergeben sich **sechs moegliche Genotypen**, die aber nur **vier Phaenotypen** (Blutgruppen) erzeugen:

| Genotyp | Blutgruppe | Antigene auf Erythrozyten | Antikoerper im Serum |
|---------|-----------|---------------------------|---------------------|
| I^A I^A, I^A i | A | A | Anti-B |
| I^B I^B, I^B i | B | B | Anti-A |
| I^A I^B | AB | A und B | keine (Universalempfaenger) |
| i i | 0 | keines (nur H) | Anti-A und Anti-B (Universalspender) |

**Dominanzverhaeltnisse:** I^A und I^B sind beide **dominant** ueber i (das rezessive Allel). Untereinander sind I^A und I^B **kodominant** -- bei Genotyp I^A I^B werden **beide** Antigene gleichzeitig und vollstaendig auf der Erythrozytenoberflaeche exprimiert. Das ist der entscheidende Unterschied zur **intermediaeren Vererbung**, bei der ein Mischphaenotyp entsteht (z. B. rosa Blueten bei Wunderblume).

> **Merke:** Kodominanz (AB0): Beide Allele werden vollstaendig exprimiert (A UND B sichtbar). Intermediaer: Mischphaenotyp. I^A und I^B dominant ueber i. Sechs Genotypen → vier Phaenotypen.

**Isoagglutinine (natuerliche Antikoerper):** Im Serum befinden sich Antikoerper gegen die Antigene, die man selbst NICHT hat. Blutgruppe A hat Anti-B; Blutgruppe B hat Anti-A; Blutgruppe 0 hat Anti-A und Anti-B; Blutgruppe AB hat keine Antikoerper. Diese Regel ist die Grundlage fuer die Transfusionsmedizin.

---

## Kreuzungsaufgaben -- systematische Loesung


{{DIAGRAM:immune-response}}

**Kreuzung 1: Vater I^A i (Blutgruppe A) x Mutter I^B i (Blutgruppe B)**

|  | I^B | i |
|--|-----|---|
| **I^A** | I^A I^B (AB) | I^A i (A) |
| **i** | I^B i (B) | i i (0) |

Ergebnis: Alle vier Blutgruppen sind moeglich, jeweils mit **25 % Wahrscheinlichkeit**. Das ist die einzige Elternkombination, bei der alle vier Blutgruppen auftreten koennen!

**Kreuzung 2: Vater i i (Blutgruppe 0) x Mutter I^A I^B (Blutgruppe AB)**

|  | I^A | I^B |
|--|-----|-----|
| **i** | I^A i (A) | I^B i (B) |
| **i** | I^A i (A) | I^B i (B) |

Ergebnis: Kinder koennen nur Blutgruppe **A** (50 %) oder **B** (50 %) haben. Blutgruppe **0** und **AB** sind **ausgeschlossen** -- der 0-Elternteil kann nur i weitergeben, der AB-Elternteil nur I^A oder I^B.

**Kreuzung 3: Vater I^A I^A (Blutgruppe A) x Mutter I^B I^B (Blutgruppe B)**
Alle Kinder: I^A I^B → Blutgruppe **AB** (100 %). Kein Kind kann A, B oder 0 sein.

**Kreuzung 4: Beide Eltern I^A i (Blutgruppe A)**
Kinder: I^A I^A (A, 25 %), I^A i (A, 50 %), i i (0, 25 %) → 75 % Blutgruppe A, 25 % Blutgruppe 0.

> **Merke:** I^A i x I^B i → alle vier Blutgruppen je 25 %. Eltern 0 x AB → nur A oder B (nie 0, nie AB). Punnett-Quadrat immer aufstellen!

---

## Rhesus-System


{{DIAGRAM:pedigree-analysis}}

Das Rhesus-System wird durch das **RHD-Gen** auf Chromosom 1 bestimmt. Das zentrale Antigen ist das **D-Antigen** (Rh-Faktor). Der Erbgang folgt einem **einfachen dominant-rezessiven Muster**:

- **D** (Rh-positiv) ist **dominant** ueber **d** (Rh-negativ)
- **DD** und **Dd** = Rh-positiv (ca. 85 % der europaeischen Bevoelkerung)
- **dd** = Rh-negativ (ca. 15 %)

**Rhesus-Inkompatibilitaet und Morbus haemolyticus neonatorum:**
Wenn eine **Rh-negative Mutter (dd)** ein **Rh-positives Kind (Dd)** ausraegt, koennen fetale Erythrozyten mit D-Antigen in den muetterlichen Kreislauf gelangen (v. a. bei der Geburt). Die Mutter bildet daraufhin **Anti-D-Antikoerper** (IgG-Klasse). Bei einer **zweiten Schwangerschaft** mit einem Rh-positiven Kind koennen diese IgG-Antikoerper die Plazenta passieren, die fetalen Erythrozyten angreifen und einen **Morbus haemolyticus neonatorum** (Blutzerfall beim Neugeborenen) ausloesen (Haemolyse, Anaemie, Ikterus (Gelbsucht), im Extremfall Hydrops fetalis (generalisierte Flüssigkeitseinlagerung)).

**Praevention:** Die **Anti-D-Prophylaxe** (Gabe von Anti-D-Immunglobulin an die Rh-negative Mutter waehrend der Schwangerschaft und nach der Geburt) verhindert die Sensibilisierung, indem sie fetale D-positive Erythrozyten neutralisiert, bevor das muetterliche Immunsystem reagiert.

> **Merke:** Rhesus: D dominant, dd = Rh-negativ (~15 %). Sensibilisierung bei Rh-neg. Mutter + Rh-pos. Kind → Anti-D-Antikoerper (IgG) → Morbus haemolyticus neonatorum bei Folgeschwangerschaft. Anti-D-Prophylaxe verhindert Sensibilisierung.

---

## Bombay-Phaenotyp (Sonderfall)

Ein seltener Sonderfall: Menschen mit dem **Bombay-Phaenotyp** (h/h) koennen das **H-Antigen** nicht bilden, das als Vorlaeufer fuer A- und B-Antigene dient. Selbst wenn sie I^A oder I^B tragen, erscheinen **keine** Antigene auf der Erythrozytenoberflaeche → sie testen als **Blutgruppe 0**, sind es genetisch aber nicht. Haeufigkeit: ca. 1:10.000 (in Indien haeufiger). MedAT-Relevanz: gelegentlich als Vertiefungsfrage.`,
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
    },

    // ─── 8. Mutationen ───────────────────────────────────────────────────────
    {
      id: "bio-4-08",
      title: "Mutationen",
      stichworte: [
        "Genmutation",
        "Chromosomenmutation",
        "Genommutation",
        "Punktmutation",
        "Deletion",
        "Trisomie",
        "Nicht-Disjunktion",
      ],
      content: `## Genmutation

**Genmutationen** betreffen die **DNA-Sequenz** eines Gens (einzelne Basen oder wenige Basen). **Punktmutation:** Austausch einer Base. Folgen: **stille Mutation** (gleiche Aminosäure durch Degeneriertheit des Codes), **Missense-Mutation** (andere Aminosäure wird eingebaut), **Nonsense-Mutation** (Stopp-Codon → verkürztes, oft nicht-funktionales Protein). **Frameshift-Mutation:** Einfügung oder Deletion von nicht durch 3 teilbaren Basen → Verschiebung des Leserasters → meist schwerer Defekt. Genmutationen können in Keimzellen vererbt werden oder in Körperzellen (somatisch) auftreten (z. B. bei Krebs).

> **Merke:** Genmutation = Änderung der DNA-Sequenz eines Gens; Punktmutation (Austausch) vs. Frameshift (Einfügung/Deletion); Nonsense = Stopp-Codon.

---

## Chromosomenmutation


{{DIAGRAM:cell-cycle}}

**Chromosomenmutationen** sind **strukturelle** Veränderungen von Chromosomenabschnitten (nicht der Gesamtzahl). **Deletion:** Verlust eines Stücks (z. B. Cri-du-chat: 5p-Deletion). **Duplikation:** Verdopplung eines Abschnitts. **Translokation:** Verlagerung eines Stücks auf ein anderes Chromosom (z. B. Robertsonsche Translokation (Fusion zweier akrozentrischer Chromosomen) bei Trisomie 21). **Inversion:** Drehung eines Abschnitts um 180°. **Balancierte** Translokation/Inversion: Kein Verlust von Material → Träger oft phänotypisch unauffällig, aber erhöhtes Risiko für unbalancierte Keimzellen (Nachkommen mit Über- oder Unterdosierung).

> **Merke:** Chromosomenmutation = strukturell (Deletion, Duplikation, Translokation, Inversion). Cri-du-chat = 5p-Deletion.

---

## Genommutation


{{DIAGRAM:transcription-translation}}

**Genommutationen** betreffen die **Anzahl** der Chromosomen. **Aneuploidie:** Abweichung um einzelne Chromosomen — **Trisomie** (3 Kopien, z. B. Trisomie 21) oder **Monosomie** (1 Kopie, z. B. 45,X = Turner). Ursache meist **Nicht-Disjunktion** in der Meiose (Chromosomen trennen sich nicht). **Polyploidie:** Vervielfachung des gesamten Chromosomensatzes (3n, 4n); beim Menschen in der Regel letal. Trisomie 21 (Down-Syndrom) ist die häufigste lebensfähige Autosom-Trisomie; das Risiko steigt mit dem mütterlichen Alter.

> **Merke:** Genommutation = falsche Chromosomenzahl. Trisomie/Monosomie durch Nicht-Disjunktion; Polyploidie = 3n/4n.

---

## Übersicht

| Ebene | Typ | Beispiel |
|-------|-----|----------|
| Gen | Genmutation (Punkt-, Frameshift) | Sichelzellanämie (Missense), viele Erbkrankheiten |
| Chromosom | Chromosomenmutation (Deletion, Translokation …) | Cri-du-chat (5p-), Robertsonsche Translokation |
| Genom | Genommutation (Trisomie, Monosomie) | Trisomie 21, Turner (45,X), Klinefelter (47,XXY) |`,
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
    },

    // ─── 9. Genexpression (Grundprinzip) ─────────────────────────────────────
    {
      id: "bio-4-09",
      title: "Von der DNA zum Merkmal: Genexpression",
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

Das Zentraldogma beschreibt den gerichteten Informationsfluss in biologischen Systemen: **DNA → RNA → Protein**. Die DNA ist der permanente **Informationsspeicher** im Zellkern. Die **mRNA** (messenger RNA, Boten-RNA) ist eine temporaere **Arbeitskopie** eines bestimmten Gens, die aus dem Zellkern ins Zytoplasma transportiert wird. Das **Protein** ist das funktionelle **Endprodukt**, das Enzyme, Strukturproteine, Transportmolekuele, Rezeptoren oder Signalmolekuele bildet.

**Warum diese Richtung?** Die DNA bleibt geschuetzt im Zellkern; nur Kopien (mRNA) gelangen ins Zytoplasma. Diese Kopien werden nach Gebrauch abgebaut (Halbwertszeit wenige Minuten bis Stunden). So kann die Zelle die Genexpression **regulieren**: Gene koennen nach Bedarf ein- und ausgeschaltet werden, ohne die DNA selbst zu veraendern.

**Genexpression** = die Gesamtheit aller Schritte, durch die die Information eines Gens in ein funktionelles Produkt (meist ein Protein) umgesetzt wird. Ein Gen, das gerade abgelesen wird, ist "exprimiert"; ein stillgelegtes Gen ist "reprimiert".

> **Merke:** DNA → (Transkription) → mRNA → (Translation) → Protein. Genexpression = Umsetzung der genetischen Information in ein Produkt. Die DNA bleibt als Originalspeicher im Kern erhalten.

---

## Transkription -- von der DNA zur mRNA


{{DIAGRAM:dna-helix}}

Die Transkription findet im **Zellkern** statt und wird von der **RNA-Polymerase** (bei Eukaryoten: RNA-Polymerase II fuer mRNA) katalysiert.

**Ablauf in drei Phasen:**

1. **Initiation:** Die RNA-Polymerase bindet an die **Promotorregion** (spezifische DNA-Sequenz vor dem Gen, z. B. TATA-Box (AT-reiche Erkennungssequenz)). Transkriptionsfaktoren helfen bei der Erkennung und Bindung. Der DNA-Doppelstrang wird lokal entmolgen (Transkriptionsblase).

2. **Elongation:** Die RNA-Polymerase liest den **Matrizenstrang** (Vorlagenstrang, 3' → 5') und synthetisiert die mRNA in **5' → 3'-Richtung**. Basenpaarungsregeln: A-U, T-A, G-C, C-G. In der RNA ersetzt **Uracil (U)** das Thymin (T) der DNA. Die mRNA-Sequenz entspricht dem **codogenen Strang** (Sinnstrang) (Nicht-Matrizenstrang), nur mit U statt T.

3. **Termination:** Die RNA-Polymerase erreicht ein **Terminationssignal** und loest sich von der DNA. Die fertige **Praematur-mRNA** (pre-mRNA) wird prozessiert.

**mRNA-Prozessierung (bei Eukaryoten):**
- **5'-Capping:** Methylguanosin-Kappe schuetzt vor Abbau und unterstuetzt die Ribosomenbindung
- **3'-Polyadenylierung:** Poly-A-Schwanz (~200 Adenine) stabilisiert die mRNA
- **Spleissen (Splicing):** **Introns** (nicht-codierende Abschnitte) werden entfernt; **Exons** (codierende Abschnitte) werden zusammengesetzt. Alternatives Spleissen ermoeglicht, dass ein Gen mehrere verschiedene Proteine codieren kann.

Die reife mRNA wird dann durch die **Kernporen** ins Zytoplasma exportiert.

> **Merke:** Transkription = DNA → mRNA im Zellkern (RNA-Polymerase). Basen: A, U, G, C (U statt T). Eukaryoten: Capping, Polyadenylierung, Spleissen. Matrizenstrang 3'→5', mRNA waechst 5'→3'.

---

## Der genetische Code


Der genetische Code ist die **Uebersetzungsregel** von Nucleotidsequenz in Aminosaeure-Sequenz:

- **Codon:** 3 aufeinanderfolgende Basen der mRNA codieren fuer eine Aminosaeure (oder ein Stoppsignal)
- **64 Codons** insgesamt (4^3 = 64) fuer nur **20 Aminosaeuren** → der Code ist **degeneriert** (redundant): mehrere Codons koennen dieselbe Aminosaeure codieren (z. B. GCU, GCC, GCA, GCG → alle Alanin)
- **Startcodon:** AUG (codiert Methionin) — markiert den Beginn der Translation
- **Stoppcodons:** UAA, UAG, UGA — signalisieren das Ende der Translation (keine Aminosaeure)
- Der Code ist **universell** (fast alle Organismen verwenden denselben Code) und wird **ohne Ueberlappung** und **ohne Luecken** gelesen (Leseraster)

**Leserasterverschiebung (Frameshift):** Wenn durch Insertion oder Deletion die Dreiergruppierung verschoben wird, aendern sich alle nachfolgenden Codons → meist nicht-funktionales Protein. Das erklaert, warum Frameshift-Mutationen besonders schaedlich sind.

> **Merke:** 3 Basen = 1 Codon = 1 Aminosaeure. 64 Codons, 20 Aminosaeuren → degenerierter Code. AUG = Start (Met), UAA/UAG/UGA = Stopp. Leseraster entscheidend!

---

## Translation -- von der mRNA zum Protein


Die Translation benoetigt: **mRNA** (Vorlage), **Ribosomen** (Uebersetzungsmaschine, bestehend aus rRNA und Proteinen), **tRNA** (Transfer-RNA, bringt die passende Aminosaeure) und **Aminosaeuren** als Bausteine.

**Ablauf in drei Phasen:**

1. **Initiation:** Die kleine ribosomale Untereinheit bindet an die mRNA und findet das **Startcodon AUG**. Die Initiator-tRNA (mit Methionin beladen) bindet. Die grosse Untereinheit lagert sich an → funktionsfaehiges Ribosom mit drei Bindungsstellen (A-, P-, E-Stelle).

2. **Elongation:** Jedes Codon der mRNA wird abgelesen. Die passende **tRNA** mit dem komplementaeren **Anticodon** bindet an der **A-Stelle**. Durch **Peptidbindung** wird die Aminosaeure an die wachsende Polypeptidkette angefuegt (katalysiert durch die rRNA = Ribozym (katalytisch aktive RNA)). Das Ribosom rueckt um ein Codon weiter (Translokation). Dieser Zyklus wiederholt sich fuer jedes Codon.

3. **Termination:** Wenn ein **Stoppcodon** (UAA, UAG, UGA) erreicht wird, bindet ein **Release-Faktor** (kein tRNA). Die Polypeptidkette wird freigesetzt, das Ribosom zerfaellt in seine Untereinheiten.

**Nach der Translation:** Das Polypeptid faltet sich in seine dreidimensionale **Tertiaestruktur** (mithilfe von Chaperonen (Faltungshelfern)). Ggf. posttranslationale Modifikationen (Glykosylierung, Phosphorylierung) im ER und Golgi-Apparat. Erst das korrekt gefaltete Protein ist funktionsfaehig.

**Polyribosomen (Polysomen):** Mehrere Ribosomen koennen gleichzeitig dieselbe mRNA ablesen → effiziente Proteinproduktion.

> **Merke:** Translation = mRNA → Protein an Ribosomen im Zytoplasma. tRNA bringt Aminosaeuren (Anticodon erkennt Codon). Initiation (AUG) → Elongation (Peptidbindung) → Termination (Stoppcodon). Polypeptid faltet sich zum funktionellen Protein.

---

## Zusammenhang mit Genetik und Vererbung


{{DIAGRAM:endomembrane-system}}

Die **Allele** eines Gens unterscheiden sich in ihrer **DNA-Sequenz** (z. B. Punktmutation). Unterschiedliche DNA-Sequenz → unterschiedliche mRNA → unterschiedliches Protein (veraenderte Aminosaeure-Sequenz, veraenderte Faltung/Funktion) → unterschiedlicher **Phaenotyp**.

**Molekulare Erklaerung von Dominanz und Rezessivitaet:**
- **Dominantes Allel:** Das Protein ist funktionsfaehig; bereits eine Kopie reicht fuer den normalen Phaenotyp (= Haploinsuffizienz ist nicht vorhanden).
- **Rezessives Allel:** Das Protein ist nicht-funktional oder fehlt; bei Heterozygoten kompensiert das dominante Allel. Nur bei **Homozygotie** (aa) fehlt die Funktion → rezessiver Phaenotyp.
- **Kodominanz:** Beide Allele produzieren unterschiedliche, aber funktionelle Proteine → beide Merkmale sichtbar (z. B. AB0-Blutgruppen).

Vererbung bedeutet: Die DNA (Allele) wird ueber Keimzellen (Meiose) von Generation zu Generation weitergegeben. In jeder neuen Zelle wird sie erneut exprimiert (DNA → RNA → Protein) und praegt den Phaenotyp.

---

## Ausnahmen vom Zentraldogma

- **Reverse Transkriptase:** Bei **Retroviren** (z. B. HIV) wird RNA in DNA umgeschrieben (RNA → DNA). Diese DNA wird ins Wirtsgenom integriert (Provirus). Auch **Telomerase** nutzt eine Reverse-Transkriptase-Aktivitaet.
- **RNA-Replikation:** Einige RNA-Viren replizieren RNA direkt (RNA → RNA).
- **Nicht-codierende RNA:** Nicht alle Gene codieren fuer Proteine. rRNA, tRNA, miRNA, siRNA, lncRNA haben direkte Funktionen als RNA-Molekuele.

> **Merke:** Reverse Transkriptase (Retroviren, Telomerase): RNA → DNA. Nicht alle Gene codieren Proteine -- viele RNA-Typen haben eigene Funktionen.`,
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
    },

    // ─── 10. Hardy-Weinberg-Gleichgewicht ──────────────────────────────────────
    {
      id: "bio-4-10",
      title: "Hardy-Weinberg-Gleichgewicht",
      stichworte: [
        "Hardy-Weinberg",
        "Allelfrequenz",
        "Genotypfrequenz",
        "Heterozygotenfrequenz",
        "Panmixie",
        "Populationsgenetik",
        "p² + 2pq + q²",
      ],
      content: `## Grundbegriffe der Populationsgenetik

In der **Populationsgenetik** betrachtet man nicht einzelne Familien, sondern ganze **Populationen**. Statt nach dem Genotyp eines Individuums zu fragen, fragt man: Wie häufig ist ein bestimmtes **Allel** in der gesamten Population?

**Allelfrequenz (= Allelhäufigkeit):** Der Anteil eines bestimmten Allels an allen Allelen eines Genorts in der Population. Bei einem Gen mit zwei Allelen (A und a) gilt:
- **p** = Frequenz des dominanten Allels A
- **q** = Frequenz des rezessiven Allels a
- Es gilt immer: **p + q = 1** (da es nur zwei Allele gibt)

**Genotypfrequenz:** Der Anteil eines bestimmten Genotyps (AA, Aa oder aa) in der Population.

> **Merke:** p = Frequenz von A, q = Frequenz von a. p + q = 1 (die Summe aller Allelfrequenzen ist immer 1).

---

## Die Hardy-Weinberg-Gleichung


{{DIAGRAM:dna-helix}}

Wenn bestimmte Voraussetzungen erfüllt sind (siehe unten), lassen sich die **Genotypfrequenzen** direkt aus den Allelfrequenzen berechnen:

**p² + 2pq + q² = 1**

| Genotyp | Frequenz | Bedeutung |
|---------|----------|-----------|
| **AA** (homozygot dominant) | p² | Häufigkeit der Homozygoten für A |
| **Aa** (heterozygot) | 2pq | Häufigkeit der Überträger/Heterozygoten |
| **aa** (homozygot rezessiv) | q² | Häufigkeit der Homozygoten für a (bei rezessiven Erkrankungen = Erkrankte) |

Die Formel entspricht dem Ausmultiplizieren von **(p + q)²** — sie beschreibt die zufällige Kombination von Gameten bei der Befruchtung.

> **Merke:** p² + 2pq + q² = 1 verknüpft Allelfrequenzen (p, q) mit Genotypfrequenzen (AA, Aa, aa). Die Heterozygotenfrequenz ist 2pq.

---

## Voraussetzungen des Hardy-Weinberg-Gleichgewichts


1. **Große Population** — kein genetischer Drift (keine zufälligen Schwankungen durch kleine Populationsgrößen)
2. **Keine Selektion** — kein Genotyp hat einen Überlebens- oder Fortpflanzungsvorteil
3. **Keine Mutation** — keine neuen Allele entstehen
4. **Panmixie** (Zufallspaarung) — die Partnerwahl ist nicht vom Genotyp abhängig (keine Assortative Paarung, keine Inzucht)
5. **Keine Migration** — kein Zu- oder Abwandern von Individuen mit anderen Allelfrequenzen

In der Realität sind diese Bedingungen nie vollständig erfüllt. Das Hardy-Weinberg-Gleichgewicht dient als **Nullmodell**: Abweichungen deuten auf Evolution (Selektion, Drift, Migration, Mutation) hin.

> **Merke:** 5 Voraussetzungen: große Population, keine Selektion, keine Mutation, Panmixie, keine Migration. In der Natur nie vollständig erfüllt — aber als Modell für Berechnungen im MedAT unverzichtbar.

---

## Rechenbeispiel: Von der Phänotyp-Häufigkeit zur Überträgerfrequenz


**Aufgabe:** Mukoviszidose (CF) ist autosomal-rezessiv. In Österreich ist etwa 1 von 3.500 Neugeborenen betroffen. Wie hoch ist die Überträgerfrequenz?

**Schritt 1:** Erkrankte sind homozygot rezessiv (aa). Deren Frequenz ist q².
q² = 1/3.500 ≈ 0,000286

**Schritt 2:** q berechnen (Wurzel ziehen):
q = √(1/3.500) ≈ √0,000286 ≈ 0,0169 ≈ 1/59

**Schritt 3:** p berechnen:
p = 1 − q = 1 − 0,0169 ≈ 0,983

**Schritt 4:** Heterozygotenfrequenz (Überträger) berechnen:
2pq = 2 × 0,983 × 0,0169 ≈ 0,0332 ≈ **1 in 30**

**Ergebnis:** Etwa **jeder 30. Mensch in Österreich** ist symptomloser Überträger (Aa) für Mukoviszidose — obwohl nur 1 von 3.500 erkrankt ist!

> **Merke:** Rechenschema: q² (Erkrankte) → q = √q² → p = 1 − q → 2pq (Überträger). Bei CF: q² = 1/3.500, Überträgerfrequenz ≈ 1/30. Die Überträger sind viel häufiger als die Erkrankten!

---

## Weiteres Rechenbeispiel: Sichelzellanämie


**Aufgabe:** In einer westafrikanischen Population sind 2 % der Bevölkerung homozygot für das Sichelzellallel (HbS/HbS = krank). Wie viele sind Überträger (HbA/HbS)?

q² = 0,02 → q = √0,02 ≈ 0,141
p = 1 − 0,141 = 0,859
2pq = 2 × 0,859 × 0,141 ≈ **0,242 ≈ 24,2 %**

Fast ein Viertel der Population sind Überträger! Der Grund: Heterozygote (HbA/HbS) haben einen **Selektionsvorteil** gegen Malaria (**Heterozygotenvorteil**). Dieser Vorteil hält das „kranke" Allel in der Population, obwohl Homozygote (HbS/HbS) schwer krank sind.

> **Merke:** Sichelzellanämie: Heterozygotenvorteil (Malariaresistenz) hält HbS-Allel in der Population. q² = 0,02 → 2pq ≈ 24 % Überträger. Der Heterozygotenvorteil ist eine Form der Selektion, die das HW-Gleichgewicht beeinflusst.

---

## Klinische Anwendungen

| Erkrankung | q² (Erkrankte) | q | 2pq (Überträger) | Besonderheit |
|-----------|---------------|---|-------------------|-------------|
| **Mukoviszidose** | 1/3.500 | 1/59 | ~1/30 | Häufigste autosomal-rezessive Erkrankung in Österreich |
| **Sichelzellanämie** | ~2 % (Westafrika) | ~0,14 | ~24 % | Heterozygotenvorteil (Malaria) |
| **Phenylketonurie** | 1/10.000 | 1/100 | ~1/50 | PKU-Screening bei Neugeborenen |
| **Hämochromatose** | ~1/200 (Nordeuropa) | ~1/14 | ~1/7 | Sehr häufige Überträger |`,
      lernziele: [
        "Die Hardy-Weinberg-Gleichung (p² + 2pq + q² = 1) anwenden.",
        "Aus Phänotyp-Häufigkeiten Allel- und Genotypfrequenzen berechnen.",
        "Die fünf Voraussetzungen des HW-Gleichgewichts nennen.",
        "Heterozygotenfrequenz für klinisch relevante Erkrankungen berechnen.",
      ],
      sections: [],
      merksätze: [
        "p + q = 1 (Allelfrequenzen); p² + 2pq + q² = 1 (Genotypfrequenzen). Rechenschema: q² → q → p → 2pq.",
        "5 Voraussetzungen: große Population, keine Selektion, keine Mutation, Panmixie, keine Migration.",
        "Mukoviszidose: q² = 1/3.500 → Überträger 2pq ≈ 1/30 (viel häufiger als Erkrankte!).",
      ],
      selfTest: [
        {
          question:
            "In einer Population sind 1 % der Individuen von einer autosomal-rezessiven Erkrankung betroffen (aa). Wie hoch ist q?",
          options: ["0,01", "0,1", "0,5", "0,99", "0,001"],
          correctIndex: 1,
          explanation:
            "q² = 0,01 (1 % sind homozygot rezessiv). Daraus folgt q = √0,01 = **0,1**. Die Allelfrequenz des rezessiven Allels beträgt also 10 %, obwohl nur 1 % erkrankt sind.",
          difficulty: 1,
          tags: ["hardy-weinberg", "allelfrequenz", "rechnung"],
        },
        {
          question:
            "Welche Formel beschreibt die Genotypfrequenzen im Hardy-Weinberg-Gleichgewicht?",
          options: ["p + q = 2", "p² + q² = 1", "p² + 2pq + q² = 1", "2p + 2q = 1", "p³ + q³ = 1"],
          correctIndex: 2,
          explanation:
            "Die **Hardy-Weinberg-Gleichung** lautet **p² + 2pq + q² = 1**. p² = Frequenz von AA, 2pq = Frequenz von Aa (Heterozygote), q² = Frequenz von aa. Die Summe aller Genotypfrequenzen ist 1.",
          difficulty: 1,
          tags: ["hardy-weinberg", "formel", "genotypfrequenz"],
        },
        {
          question:
            "Mukoviszidose betrifft 1 von 3.500 Neugeborenen (autosomal-rezessiv). Wie hoch ist ungefähr die Überträgerfrequenz (2pq)?",
          options: ["1 von 3.500", "1 von 350", "1 von 30", "1 von 3", "1 von 59"],
          correctIndex: 2,
          explanation:
            "q² = 1/3.500 → q = √(1/3.500) ≈ 1/59 → p ≈ 1 − 1/59 ≈ 58/59 ≈ 1. Überträger: 2pq ≈ 2 × 1 × 1/59 ≈ 2/59 ≈ **1/30**. Etwa jeder 30. Mensch in Österreich ist symptomloser CF-Überträger.",
          difficulty: 2,
          tags: ["hardy-weinberg", "mukoviszidose", "überträger", "rechnung"],
        },
        {
          question:
            "Welche der folgenden Bedingungen ist KEINE Voraussetzung des Hardy-Weinberg-Gleichgewichts?",
          options: [
            "Große Population",
            "Keine Selektion",
            "Panmixie (Zufallspaarung)",
            "Hohe Mutationsrate",
            "Keine Migration",
          ],
          correctIndex: 3,
          explanation:
            "Eine **hohe Mutationsrate** ist keine Voraussetzung — im Gegenteil: HW setzt **keine Mutation** voraus. Die fünf Voraussetzungen sind: große Population, keine Selektion, keine Mutation, Panmixie und keine Migration.",
          difficulty: 1,
          tags: ["hardy-weinberg", "voraussetzungen"],
        },
        {
          question:
            "Warum bleibt das Sichelzellallel (HbS) in Malariagebieten so häufig, obwohl homozygote Träger (HbS/HbS) schwer erkranken?",
          options: [
            "Weil HbS dominant über HbA ist",
            "Weil es keine Selektion gegen HbS gibt",
            "Weil heterozygote Träger (HbA/HbS) einen Selektionsvorteil gegen Malaria haben (Heterozygotenvorteil)",
            "Weil HbS durch häufige Neumutationen entsteht",
            "Weil homozygote HbS/HbS immun gegen Malaria sind",
          ],
          correctIndex: 2,
          explanation:
            "Heterozygote (HbA/HbS) haben einen **Überlebensvorteil** in Malariagebieten (Malariaparasiten können sich in Sichelzellen schlechter vermehren). Dieser **Heterozygotenvorteil** (= balancierende Selektion) hält das HbS-Allel in der Population, obwohl HbS/HbS homozygot krank macht.",
          difficulty: 2,
          tags: ["sichelzellanämie", "heterozygotenvorteil", "selektion"],
        },
      ],
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


{{DIAGRAM:meiosis}}

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


{{DIAGRAM:cell-cycle}}

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
    },
  ],
};
