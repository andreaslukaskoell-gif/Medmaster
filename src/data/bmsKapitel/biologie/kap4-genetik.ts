import type { Kapitel } from "../types";

export const bioKapGenetik: Kapitel = {
  id: "bio-kap4",
  title: "Genetik",
  subject: "biologie",
  icon: "🧬",
  estimatedTime: "180 min",
  unterkapitel: [
    // ─── 1. DNA, Gene und Chromosomen ───────────────────────────────────────
    {
      id: "bio-4-01",
      title: "DNA, Gene und Chromosomen",
      stichworte: ["DNA", "Gen", "Chromosom", "Allel", "Locus", "Doppelhelix", "Erbinformation"],
      content: `## Einleitung

Wenn Eltern sagen, ihr Kind habe “die Augen vom Vater und die Nase der Mutter”, beschreiben sie unbewusst ein biologisches Prinzip: Erbinformation wird in Form von DNA weitergegeben, in Gene gegliedert und in Chromosomen verpackt. Diese drei Ebenen -- Molekül, funktionelle Einheit und Verpackungsstruktur -- bilden das Fundament der Genetik. Wer den Unterschied zwischen Gen und Allel, zwischen homologen Chromosomen und Schwesterchromatiden sicher beherrscht, hat den Schlüssel zu allen weiteren Genetik-Themen in der Hand.

**In diesem Kapitel lernst du:**
- wie DNA, Gene und Chromosomen zusammenhängen und warum man alle drei Ebenen braucht
- worin sich ein Gen von einem Allel unterscheidet
- was homologe Chromosomen und Schwesterchromatiden jeweils sind und warum die Verwechslung so häufig ist
- warum diese Begriffe für Vererbung und Meiose unverzichtbar sind

{{DIAGRAM:dna-helix}}

---

## DNA: Träger der Erbinformation

**DNA** (Desoxyribonukleinsäure) ist das Molekül, das die genetische Information speichert. Sie besteht aus zwei antiparallel gewundenen Strängen (**Doppelhelix**). Jeder Strang ist aus **Nukleotiden** aufgebaut: Ein Nukleotid enthält den Zucker Desoxyribose, ein Phosphat und eine von vier **Basen** — **A**denin (A), **T**hymin (T), **G**uanin (G), **C**ytosin (C). Die Basen der beiden Stränge paaren sich nach festen Regeln: A immer mit T (zwei Wasserstoffbrücken), G immer mit C (drei Wasserstoffbrücken). Daraus folgen die **Chargaff-Regeln**: In einem Doppelstrang ist die Menge an A gleich der von T, die von G gleich der von C. Die Abfolge der Basen (die **Sequenz**) codiert die Information für den Aufbau von Proteinen und die Steuerung der Zelle.

> **Merke:** DNA = Doppelhelix aus Nukleotiden; Basen A, T, G, C; A-T und G-C paaren. Die Sequenz der Basen ist die Erbinformation.

---

## Gen: funktionelle Einheit auf der DNA

**Bisher haben wir gesehen:** DNA ist der Träger der Erbinformation — Doppelhelix, Basenpaarung, Sequenz. **Um die nächste Ebene zu verstehen** — wie die Information in funktionelle Einheiten gegliedert ist — schauen wir uns das **Gen** an.

{{DIAGRAM:transcription-translation}}

Ein **Gen** ist ein **Abschnitt der DNA**, der die Information für ein bestimmtes Merkmal oder ein Produkt (z. B. ein Protein oder eine RNA) trägt. Gene liegen an festen Orten auf den Chromosomen; dieser Ort heißt **Locus** (Plural: Loci). Beim Menschen gibt es etwa 20.000–25.000 protein codierende Gene, verteilt auf 46 Chromosomen. Ein Gen kann in verschiedenen **Varianten** vorkommen — diese Varianten nennt man **Allele**. Beispiel: Das Gen für die Blütenfarbe bei Erbsen hat ein Allel für „rot“ und ein Allel für „weiß“. Ein diploider Organismus trägt pro Gen zwei Allele (eines von jedem Elternteil), die am gleichen Locus auf den beiden **homologen Chromosomen** sitzen.

> **Merke:** Gen = DNA-Abschnitt für ein Merkmal/Produkt. Locus = Ort des Gens auf dem Chromosom. Allel = eine von mehreren Varianten eines Gens.

---

## Chromosom: verpackte DNA

**Bisher haben wir gesehen:** DNA trägt die Information, Gene sind die funktionellen Einheiten mit Allelen am Locus. **Damit die DNA bei der Zellteilung sauber verteilt werden kann,** liegt sie in verpackter Form vor — als **Chromosom**.

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

**Bisher haben wir gesehen:** DNA als Träger der Information, Gene als Einheiten mit Allelen, Chromosomen als verpackte Strukturen. **Für die Vererbung** ist der Zusammenhang entscheidend: **DNA** enthält die Information, **Gene** sind die Einheiten, die vererbt werden (jeweils als Allel-Paar), und **Chromosomen** sind die Strukturen, die bei Meiose und Mitose getrennt und auf die Tochterzellen verteilt werden. In der **Meiose** werden die homologen Chromosomen getrennt — deshalb erbt jede Keimzelle pro Gen nur ein Allel. Das erklärt die Mendelsche Spaltung: Jeder Elternteil gibt eines von zwei Allelen weiter, und die Kombination in der Nachkommenschaft folgt den Kreuzungsschemata.

> **Merke:** DNA → Gene (mit Allelen) → auf Chromosomen verpackt. Meiose trennt homologe Chromosomen → je ein Allel pro Gen in der Keimzelle.

---

## MedAT-Fokus

**Typische Prüfungsfragen:**
- Was ist der Unterschied zwischen Gen und Allel?
- Wo liegt die Erbinformation, und in welcher Form?
- Was sind homologe Chromosomen, was sind Schwesterchromatiden?

**Typische Fallen:**
- Gen und Allel verwechseln (Gen = Ort/Information, Allel = konkrete Variante)
- Homologe Chromosomen sind nicht identisch (gleiche Gene, oft verschiedene Allele)
- Schwesterchromatiden sind identisch (Kopien nach Verdopplung)

---

## Zusammenfassung (ultrakompakt)

- **DNA**: Träger der Erbinformation; Doppelhelix; Basen A, T, G, C; Paarung A-T, G-C.
- **Gen**: DNA-Abschnitt für ein Merkmal/Produkt; **Locus** = Ort auf dem Chromosom.
- **Allel**: Eine Variante eines Gens (z. B. dominant A, rezessiv a).
- **Chromosom**: Verpackte DNA mit vielen Genen; bei Zellteilung aus zwei **Schwesterchromatiden** (verbunden am Zentromer).
- **Homologe Chromosomen**: Paar mit gleichen Genorten (je eines von Mutter, eines von Vater).
- Zusammenhang: Vererbung läuft über Verteilung der Chromosomen (und damit der Allele) in Meiose und Befruchtung.`,
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
      content: `## Einleitung

Hast du dich schon mal gefragt, warum in der Pränataldiagnostik ein “Karyogramm” erstellt wird? Es zeigt die Chromosomen einer Zelle, geordnet nach Größe und Form. Aus einer einfachen Notation wie “47,XX,+21” lässt sich ablesen: weiblich, mit einer zusätzlichen Kopie von Chromosom 21 -- also Down-Syndrom. Um diese Notation zu verstehen, braucht man ein solides Bild vom Aufbau eines Chromosoms: Wo sitzt das Zentromer? Was sind p- und q-Arm? Und worin unterscheiden sich die 22 Autosomenpaare von den Geschlechtschromosomen?

**In diesem Kapitel lernst du:**
- wie ein Chromosom aufgebaut ist und welche Strukturen bei der Zellteilung entscheidend sind
- worin sich Autosomen und Gonosomen unterscheiden und was das Y-Chromosom besonders macht
- wie man die Karyotyp-Notation liest und Chromosomenstörungen erkennt

{{DIAGRAM:cell-cycle}}

---

## Aufbau eines Chromosoms

{{DIAGRAM:dna-helix}}

Ein metaphasisches Chromosom (in der Zellteilung sichtbar) besteht aus **zwei Schwesterchromatiden**, die am **Zentromer** zusammenhängen. Das Zentromer ist der Ansatzpunkt für die Spindelfasern; an ihm sitzt der **Kinetochor** (Protein komplex). Jede Chromatide hat zwei **Arme**: der **p-Arm** (petit = kurz) und der **q-Arm** (queue = lang). An den Enden der Chromosomen liegen die **Telomere** — repetitive DNA-Sequenzen (beim Menschen TTAGGG), die die Enden schützen und bei jeder Zellteilung etwas kürzer werden (ohne Telomerase).

> **Merke:** Zentromer verbindet die beiden Schwesterchromatiden; p-Arm = kurz, q-Arm = lang; Telomere schützen die Enden.

---

## Autosomen und Gonosomen

**Bisher haben wir gesehen:** Aufbau des Chromosoms (Zentromer, Arme, Telomere). **Um Chromosomen beim Menschen einzuordnen,** unterscheidet man **Autosomen** und **Gonosomen**.

Beim Menschen gibt es **46 Chromosomen** in jeder Körperzelle (diploider Satz): **22 Paare Autosomen** (Chromosomen 1–22, nicht geschlechtsbestimmend) und **ein Paar Geschlechtschromosomen** (**Gonosomen**): **XX** bei Frauen, **XY** bei Männern. Die Gonosomen bestimmen das genetische Geschlecht: Das **Y-Chromosom** trägt das **SRY-Gen**, das die männliche Geschlechtsentwicklung auslöst. Fehlt das Y, entwickelt sich weiblich (z. B. 46,XX oder 45,X).

> **Merke:** 46 Chromosomen = 22 Autosomenpaare + 1 Gonosomenpaar. XX = weiblich, XY = männlich; Geschlecht durch Y-Chromosom (SRY) bestimmt.

---

## Karyotyp und Notation

**Bisher haben wir gesehen:** 46 Chromosomen, davon 44 Autosomen + XX oder XY. **Um Abweichungen zu beschreiben und zu diagnostizieren,** nutzt man den **Karyotyp** und eine einheitliche **Notation**.

{{DIAGRAM:mitosis}}

Der **Karyotyp** ist die geordnete Darstellung aller Chromosomen einer Zelle (nach Größe, Zentromerlage, Färbemuster). Er wird in der **Metaphase** der Mitose erstellt (Chromosomen sind dann maximal kondensiert). Die **Karyotyp-Notation** gibt zuerst die **Chromosomenzahl**, dann die **Gonosomen** und bei Abweichungen die **Aberration** an:

- **46,XX** = weiblich, normal
- **46,XY** = männlich, normal
- **47,XX,+21** = weiblich, Trisomie 21 (Down-Syndrom) — drei Kopien von Chromosom 21
- **47,XXY** = Klinefelter-Syndrom (männlich, ein zusätzliches X)
- **45,X** = Turner-Syndrom (weiblich, ein X fehlt)

> **Merke:** Notation: Zahl, dann Gonosomen, dann Aberration (z. B. +21 für Trisomie 21). 46,XX = weiblich; 46,XY = männlich.

---

## MedAT-Fokus

**Typische Prüfungsfragen:**
- Wie lautet der normale weibliche bzw. männliche Karyotyp?
- Was bedeutet 47,XX,+21?
- Was verbindet die beiden Schwesterchromatiden?

**Typische Fallen:**
- p-Arm = kurz, q-Arm = lang (nicht umgekehrt)
- 47,XXY = männlich (Y vorhanden), 45,X = weiblich (kein Y)
- Karyotyp wird in der Metaphase erstellt, nicht in der Interphase

---

## Zusammenfassung (ultrakompakt)

- Chromosom: zwei **Schwesterchromatiden** am **Zentromer**; **p-Arm** kurz, **q-Arm** lang; **Telomere** an den Enden.
- Mensch: **46 Chromosomen** — 44 Autosomen + XX oder XY.
- **46,XX** = weiblich, **46,XY** = männlich; **47,XX,+21** = Trisomie 21; **47,XXY** = Klinefelter; **45,X** = Turner.
- Karyotyp = geordnete Darstellung aller Chromosomen (Metaphase).`,
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
      content: `## Einleitung

Jede Sekunde teilen sich in deinem Körper Millionen von Zellen -- und jedes Mal muss die gesamte DNA fehlerfrei kopiert und auf zwei Tochterzellen verteilt werden. Für Körperzellen erledigt das die Mitose: identische Kopien, immer 46 Chromosomen. Doch für Keimzellen reicht das nicht -- hier muss der Chromosomensatz halbiert werden, damit bei der Befruchtung wieder 46 herauskommen. Die Meiose leistet genau das, und sie tut noch etwas Entscheidendes: Durch Crossing-over werden die Karten neu gemischt, sodass jede Keimzelle genetisch einzigartig ist. Wenn bei dieser Verteilung etwas schiefgeht, kann Trisomie 21 die Folge sein.

**In diesem Kapitel lernst du:**
- worin sich Mitose und Meiose in Zweck, Ablauf und Ergebnis unterscheiden
- warum Keimzellen genau die Hälfte des Chromosomensatzes tragen müssen
- wie Crossing-over für genetische Vielfalt sorgt und warum das evolutionär so wichtig ist
- was passiert, wenn sich Chromosomen nicht korrekt trennen

---

## Zellzyklus und Chromosomenzahl

{{DIAGRAM:cell-cycle}}

Der **Zellzyklus** umfasst die Vorbereitung der Zellteilung und die Teilung selbst. In der **S-Phase** wird die DNA verdoppelt; danach hat jede Chromosom zwei Schwesterchromatiden. **Diploid (2n)** bedeutet: zwei Chromosomensätze (beim Menschen 2n = 46). **Haploid (n)** bedeutet: ein Chromosomensatz (beim Menschen n = 23). Körperzellen sind diploid; Keimzellen müssen haploid sein, damit nach der Befruchtung (Eizelle + Spermium) wieder 2n = 46 entsteht.

> **Merke:** Diploid (2n) = zwei Sätze; haploid (n) = ein Satz. Mensch: 2n = 46 in Körperzellen, n = 23 in Keimzellen.

---

## Mitose: Teilung der Körperzellen

**Bisher haben wir gesehen:** Zellzyklus, 2n und n. **Für Wachstum und Erneuerung** teilen sich Körperzellen durch **Mitose** — ohne Reduktion des Chromosomensatzes.

{{DIAGRAM:mitosis}}

**Mitose** dient der Vermehrung von Zellen bei Wachstum und Erneuerung. Ablauf (vereinfacht): Die Chromosomen kondensieren, die Kernmembran löst sich auf, die Chromosomen ordnen sich in der Äquatorialebene an (Metaphase), die **Schwesterchromatiden** werden getrennt und zu den Polen gezogen (Anaphase), zwei neue Kerne und Zellen entstehen. **Ergebnis:** Zwei Tochterzellen, jede mit derselben Chromosomenzahl (2n) und genetisch identisch zur Mutterzelle. Es gibt **keine** Reduktion der Chromosomenzahl und **kein** Crossing-over.

> **Merke:** Mitose: 1 Zelle (2n) → 2 Zellen (je 2n); genetisch identisch; Trennung der Schwesterchromatiden.

---

## Meiose: Entstehung der Keimzellen

**Bisher haben wir gesehen:** Mitose erhält den diploiden Satz. **Für die Bildung von Keimzellen** muss der Chromosomensatz halbiert werden — das leistet die **Meiose**.

{{DIAGRAM:meiosis}}

**Meiose** dient der Bildung von **Keimzellen** (Gameten). Sie besteht aus **zwei aufeinanderfolgenden Teilungen** (Meiose I und Meiose II), wobei nur vor der ersten Teilung die DNA verdoppelt wird.

**Meiose I:** Die **homologen Chromosomen** paaren sich (jedes Chromosom hat bereits zwei Schwesterchromatiden). In der **Prophase I** kann **Crossing-over** stattfinden: Homologe Chromosomen tauschen Stücke aus → **Rekombination** (neue Allelkombinationen). In der Anaphase I werden die **homologen Chromosomen** getrennt (nicht die Schwesterchromatiden!) — jede Tochterzelle erhält je ein Chromosom jedes Paars. Ergebnis: zwei Zellen mit je **haploidem** Chromosomensatz (n), aber jede Chromosom hat noch zwei Chromatiden.

**Meiose II:** In beiden Zellen werden die **Schwesterchromatiden** getrennt (ähnlich wie in der Mitose). Ergebnis: **vier Keimzellen** (bei Spermien) bzw. eine Eizelle plus Polkörper (bei Eizellen), alle **haploid (n)**.

> **Merke:** Meiose I: Trennung der **homologen Chromosomen** (Reduktion 2n → n); Crossing-over in Prophase I. Meiose II: Trennung der **Schwesterchromatiden** (wie Mitose). Ergebnis: 4 haploide Zellen (bzw. 1 Eizelle + Polkörper).

---

## Crossing-over und Rekombination

**Bisher haben wir gesehen:** Meiose I trennt homologe Chromosomen, Meiose II die Schwesterchromatiden. **Die genetische Vielfalt** der Keimzellen entsteht maßgeblich durch **Crossing-over** in der Prophase I.

**Crossing-over** (in der Prophase I der Meiose): Zwei homologe Chromosomen (je mit zwei Chromatiden) liegen gepaart; dabei können sich Chromatidenstücke kreuzen und austauschen. Dadurch entstehen **Rekombinanten** — Chromosomen mit neuer Kombination von Allelen. Gene auf demselben Chromosom sind zunächst **gekoppelt**; durch Crossing-over können sie dennoch neu kombiniert werden. Die **Rekombinationsfrequenz** (wie oft zwei Gene getrennt werden) hängt vom Abstand der Gene ab und wird in **centiMorgan (cM)** angegeben (1 cM ≈ 1 % Rekombination). Gene mit 50 % Rekombination verhalten sich wie unabhängig (entweder auf verschiedenen Chromosomen oder sehr weit auseinander).

> **Merke:** Crossing-over = Austausch zwischen Chromatiden homologer Chromosomen in Prophase I → Rekombination, genetische Vielfalt. Genkopplung wird dadurch teilweise aufgehoben.

---

## Nicht-Disjunktion und Aneuploidie

**Bisher haben wir gesehen:** Regelgerechte Trennung in Meiose I und II. **Wenn die Trennung fehlerhaft verläuft,** entstehen Keimzellen mit falscher Chromosomenzahl — **Nicht-Disjunktion** führt zu Trisomie oder Monosomie.

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
| **Genetische Identität** | Tochterzellen identisch | Keimzellen genetisch verschieden (Rekombination, zufällige Verteilung) |

---

## MedAT-Fokus

**Typische Prüfungsfragen:**
- Was wird in Meiose I getrennt -- homologe Chromosomen oder Schwesterchromatiden?
- Wodurch entsteht genetische Vielfalt bei der Meiose?
- Was ist der Unterschied zwischen Mitose und Meiose?

**Typische Fallen:**
- Mitose: Trennung der Schwesterchromatiden; Meiose I: Trennung der homologen Chromosomen (nicht der Schwesterchromatiden)
- Meiose II ähnelt Mitose, aber die Ausgangszelle ist bereits haploid
- Crossing-over findet nur in der Meiose (Prophase I) statt, nicht in der Mitose

---

## Zusammenfassung (ultrakompakt)

- **Mitose:** 1 Zelle (2n) → 2 Zellen (2n); Trennung der Schwesterchromatiden; für Körperzellen.
- **Meiose:** 1 Zelle (2n) → 4 Zellen (n); Meiose I trennt **homologe Chromosomen**, Meiose II trennt **Schwesterchromatiden**; für Keimzellen.
- **Crossing-over** (Prophase I) → Rekombination, genetische Vielfalt.
- **Nicht-Disjunktion** → Trisomie oder Monosomie (z. B. Trisomie 21, Turner 45,X); Risiko ↑ mit mütterlichem Alter.
- Diploid 2n, haploid n; Keimzellen haploid.`,
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
      content: `## Einleitung

Gregor Mendel kreuzte Erbsen und entdeckte dabei Gesetzmäßigkeiten, die bis heute die Grundlage jeder Genetik-Prüfung bilden. Wenn man reinerbig rote mit reinerbig weißen Erbsen kreuzt, sind alle Nachkommen rot -- aber in der nächsten Generation taucht Weiß wieder auf, in einem erstaunlich regelmäßigen Verhältnis. Diese Verhältnisse (3:1, 1:2:1, 9:3:3:1) zu kennen und mit dem Punnett-Quadrat berechnen zu können, ist für den BMS-Teil des MedAT unverzichtbar.

**In diesem Kapitel lernst du:**
- warum die Nachkommen reinerbiger Eltern immer gleich aussehen (1. Regel)
- wie sich versteckte Merkmale in der Enkelgeneration wieder zeigen (2. Regel)
- wann zwei Merkmale unabhängig voneinander vererbt werden und wann nicht (3. Regel)
- wie man mit dem Punnett-Quadrat systematisch Kreuzungsergebnisse vorhersagt

{{DIAGRAM:pedigree-analysis}}

---

## 1. Mendelsche Regel (Uniformitätsregel)

Kreuzt man **reinerbige (homozygote)** Eltern mit **unterschiedlichen Merkmalen**, so sind alle Nachkommen der **F₁-Generation** (erste Filialgeneration) **uniform** — gleicher Genotyp und gleicher Phänotyp. Beispiel: AA (rot) × aa (weiß) → alle F₁ sind **Aa** (rot, wenn A dominant). Die F₁ ist also **mischerbig (heterozygot)** und zeigt das dominante Merkmal.

> **Merke:** 1. Mendelsche Regel: Homozygote Eltern (AA × aa) → F₁ zu 100 % uniform heterozygot (Aa).

---

## 2. Mendelsche Regel (Spaltungsregel)

**Bisher haben wir gesehen:** Die 1. Regel liefert eine uniforme F₁ aus reinerbigen Eltern. **Um zu sehen, wie sich die Merkmale in der nächsten Generation aufspalten,** betrachten wir die **2. Mendelsche Regel**.

Kreuzt man die **F₁-Hybriden** untereinander (Aa × Aa), so **spaltet** die **F₂-Generation** in festen Verhältnissen auf. **Genotyp:** 1 AA : 2 Aa : 1 aa (Verhältnis 1:2:1). **Phänotyp** (bei dominant-rezessiv, A dominant über a): 3 dominant (rot) : 1 rezessiv (weiß), also **3:1**. Das Punnett-Quadrat (2×2) zeigt die vier möglichen Kombinationen der Gameten (A und a von jedem Elternteil).

> **Merke:** 2. Mendelsche Regel: Aa × Aa → F₂ Genotyp 1:2:1 (AA:Aa:aa), Phänotyp (dominant-rezessiv) 3:1.

---

## 3. Mendelsche Regel (Unabhängigkeitsregel)

**Bisher haben wir gesehen:** Ein Gen führt in F₂ zu Aufspaltung 3:1 (Phänotyp). **Sind zwei Merkmale im Spiel,** gilt die **3. Mendelsche Regel**.

{{DIAGRAM:meiosis}}

Betrachtet man **zwei Merkmale** (zwei Gene auf **verschiedenen Chromosomen** oder weit voneinander entfernt), so werden die Gene **unabhängig** voneinander verteilt. Kreuzung **RrGg × RrGg** (dihybrider Erbgang) ergibt in F₂ das **Phänotyp-Verhältnis 9:3:3:1** (9 R_G_, 3 R_gg, 3 rrG_, 1 rrgg). Das Punnett-Quadrat hat 4×4 = 16 Felder. Voraussetzung: **Unabhängigkeit** der Gene (keine Kopplung). Bei **gekoppelten Genen** (auf demselben Chromosom, nah beieinander) weicht das Verhältnis ab — dann überwiegen die Parentaltypen.

> **Merke:** 3. Mendelsche Regel: Zwei unabhängige Gene (RrGg × RrGg) → F₂ 9:3:3:1. Nur bei Genen auf verschiedenen Chromosomen oder ohne Kopplung.

---

## Punnett-Quadrat und Wahrscheinlichkeit

**Bisher haben wir gesehen:** Die drei Mendelschen Regeln beschreiben die Verhältnisse in F₁ und F₂. **Um diese Verhältnisse systematisch zu ermitteln,** nutzt man das **Punnett-Quadrat**.

Das **Punnett-Quadrat** stellt die möglichen Kombinationen der **Gameten** (Eizellen/Spermien) dar. Monohybrid: 2×2 = 4 Kombinationen (Aa × Aa → AA, Aa, Aa, aa). Dihybrid: 4×4 = 16 (je Elternteil 4 Gameten-Typen: RG, Rg, rG, rg). **Produktregel** bei unabhängigen Ereignissen: P(rrgg) = P(rr) × P(gg) = 1/4 × 1/4 = 1/16.

---

## MedAT-Fokus

**Typische Prüfungsfragen:**
- Welches Phänotyp-Verhältnis entsteht bei Aa x Aa?
- Welches Verhältnis bei RrGg x RrGg?
- Wann gilt die Unabhängigkeitsregel?

**Typische Fallen:**
- Genotyp 1:2:1 vs. Phänotyp 3:1 verwechseln (bei dominant-rezessiv)
- 9:3:3:1 gilt nur bei unabhängigen Genen; bei Kopplung weicht das Verhältnis ab
- 1. Regel: homozygote Eltern nötig; 2. Regel: heterozygote F1 nötig

---

## Zusammenfassung (ultrakompakt)

- **1. Regel:** AA × aa → F₁ 100 % Aa (uniform).
- **2. Regel:** Aa × Aa → F₂ Genotyp 1:2:1, Phänotyp 3:1 (dominant-rezessiv).
- **3. Regel:** RrGg × RrGg → F₂ 9:3:3:1 bei unabhängigen Genen.
- Punnett-Quadrat: Gameten-Kombinationen; Produktregel für Wahrscheinlichkeiten.`,
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
      content: `## Einleitung

Eine Pflanze mit roten Blüten kann genetisch reinerbig (AA) oder mischerbig (Aa) sein -- von außen sieht man keinen Unterschied. Der sichtbare Phänotyp verrät nicht immer den zugrunde liegenden Genotyp. Noch komplizierter wird es, wenn Allele nicht einfach dominant oder rezessiv sind: Bei der Blutgruppe AB sind beide Allele gleichzeitig sichtbar (Kodominanz), bei manchen Blütenfarben zeigt der Mischerbige eine Zwischenform (Intermediarität). Die Testkreuzung mit einem homozygot rezessiven Partner ist das klassische Werkzeug, um den verborgenen Genotyp zu enthüllen.

**In diesem Kapitel lernst du:**
- warum gleicher Phänotyp verschiedene Genotypen verbergen kann
- worin sich die vier Dominanzverhältnisse (dominant-rezessiv, intermediär, kodominant) unterscheiden
- wie man mit der Testkreuzung herausfindet, ob ein Individuum reinerbig oder mischerbig ist

{{DIAGRAM:dna-helix}}

---

## Genotyp und Phänotyp

Der **Genotyp** ist die **Allel-Kombination** eines Individuums für ein (oder mehrere) Gene — z. B. AA, Aa oder aa. Der **Phänotyp** ist die **sichtbare oder messbare Ausprägung** des Merkmals — z. B. rote oder weiße Blüte, Blutgruppe A, B, AB oder 0. Mehrere Genotypen können zum gleichen Phänotyp führen (z. B. AA und Aa zeigen beide den dominanten Phänotyp), wenn ein Allel dominant ist.

> **Merke:** Genotyp = genetische Ausstattung (Allel-Kombination). Phänotyp = sichtbares Merkmal.

---

## Homozygot und heterozygot

**Bisher haben wir gesehen:** Genotyp (Allel-Kombination) und Phänotyp (sichtbares Merkmal) sind die Grundbegriffe. **Für die Vererbung** ist entscheidend, ob ein Individuum **reinerbig** oder **mischerbig** ist.

**Homozygot** (reinerbig): Beide Allele sind gleich — **AA** (homozygot dominant) oder **aa** (homozygot rezessiv). **Heterozygot** (mischerbig): Die beiden Allele sind unterschiedlich — **Aa**. Bei der Vererbung gibt jeder Elternteil genau eines seiner beiden Allele weiter (über die Keimzelle); deshalb kann man mit Kreuzungsschemata die Genotyp- und Phänotyp-Verhältnisse vorhersagen.

---

## Dominanzverhältnisse

**Bisher haben wir gesehen:** Homozygot vs. heterozygot. **Wie sich die Allele im Phänotyp ausprägen,** hängt von den **Dominanzverhältnissen** ab.

**Dominant-rezessiv:** Das **dominante** Allel (üblicherweise Großbuchstabe, z. B. A) setzt sich auch im heterozygoten Zustand durch; das **rezessive** Allel (Kleinbuchstabe, a) ist nur im homozygoten Zustand (aa) sichtbar. Beispiel: Aa → gleicher Phänotyp wie AA (rot).

**Intermediär (unvollständige Dominanz):** Der Heterozygote (Aa) zeigt einen **Mischphänotyp** zwischen den beiden Homozygoten (z. B. AA rot, aa weiß, Aa rosa). Das F₂-Phänotyp-Verhältnis entspricht dann dem Genotyp-Verhältnis **1:2:1**.

**Kodominant:** Beide Allele kommen im Phänotyp **gleichzeitig** zur Geltung (nicht gemischt). Klassisches Beispiel: **Blutgruppe AB** — beide Antigene A und B werden exprimiert (I^A und I^B kodominant).

> **Merke:** Dominant-rezessiv: Aa = AA im Phänotyp. Intermediär: Aa = Mischung (1:2:1). Kodominant: beide Allele sichtbar (z. B. AB).

---

## Testkreuzung (Rückkreuzung)

**Bisher haben wir gesehen:** Genotyp, Phänotyp und Dominanzverhältnisse. **Um den Genotyp eines Individuums mit dominantem Phänotyp zu bestimmen,** wendet man die **Testkreuzung** an.

{{DIAGRAM:pedigree-analysis}}

Will man wissen, ob ein Individuum mit **dominantem Phänotyp** **homozygot (AA)** oder **heterozygot (Aa)** ist, kreuzt man es mit einem **homozygot rezessiven** Partner (aa). **Ergebnis:** Sind alle Nachkommen dominant → Elternteil war **AA**. Spaltet die Nachkommenschaft **1:1** (dominant : rezessiv) → Elternteil war **Aa**. Die Testkreuzung liefert also eine klare Aussage über den Genotyp.

> **Merke:** Testkreuzung × aa: 100 % dominant → AA; 1:1 (dominant : rezessiv) → Aa.

---

## MedAT-Fokus

**Typische Prüfungsfragen:**
- Was bedeutet kodominant? (Beide Allele sichtbar, z. B. Blutgruppe AB.)
- Wie unterscheidet man AA von Aa? (Testkreuzung mit aa.)
- Unterschied Genotyp vs. Phänotyp?

**Typische Fallen:**
- Dominant bedeutet nicht automatisch häufig in der Population.
- Gen und Allel verwechseln (Allel = Variante eines Gens).
- Intermediär (Mischphänotyp, z. B. rosa) vs. kodominant (beide Merkmale gleichzeitig sichtbar, z. B. AB) verwechseln.

---

## Zusammenfassung (ultrakompakt)

- **Genotyp** = Allel-Kombination; **Phänotyp** = sichtbares Merkmal.
- **Homozygot** AA oder aa; **heterozygot** Aa.
- **Dominant-rezessiv:** Aa = dominant; **intermediär:** Aa = Mischung (1:2:1); **kodominant:** beide Allele sichtbar (AB).
- **Testkreuzung** × aa: 100 % dominant → AA; 1:1 → Aa.`,
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
      content: `## Einleitung

Warum sind Bluter fast immer Jungen, und warum kann eine gesunde Mutter ein krankes Kind zur Welt bringen, obwohl auch der Vater gesund ist? Die Antwort liegt im Erbgang: Je nachdem, ob ein Gen auf einem Autosom oder dem X-Chromosom liegt und ob das kranke Allel dominant oder rezessiv ist, ergeben sich grundverschiedene Vererbungsmuster. Wer einen Stammbaum korrekt lesen kann, erkennt den Erbgang oft auf den ersten Blick.

**In diesem Kapitel lernst du:**
- warum der Ort des Gens (Autosom vs. X-Chromosom) das Vererbungsmuster bestimmt
- welche Stammbaum-Muster auf dominant, rezessiv oder X-chromosomal hindeuten
- warum bei X-chromosomal rezessiven Erkrankungen Männer häufiger betroffen sind
- woran man erkennt, dass ein kranker Vater alle Töchter, aber keinen Sohn betrifft

{{DIAGRAM:pedigree-analysis}}

---

## Autosomal vs. X-chromosomal

**Autosomal:** Das Gen liegt auf einem der **Autosomen** (Chromosomen 1–22). Beide Geschlechter sind gleich häufig betroffen (Männer und Frauen haben je zwei Kopien jedes Autosoms). **X-chromosomal:** Das Gen liegt auf dem **X-Chromosom**. Männer haben nur **ein** X-Chromosom (**Hemizygotie**) — sie tragen also nur ein Allel für X-chromosomale Gene. Daher manifestieren sich **X-chromosomal rezessive** Merkmale bei Männern häufiger (ein rezessives Allel reicht). Frauen haben zwei X-Chromosomen und können **Konduktorinnen** sein (heterozygot, phänotypisch gesund, geben das Allel weiter).

---

## Autosomal-dominant

**Bisher haben wir gesehen:** Autosomal vs. X-chromosomal und die Bedeutung der Hemizygotie bei Männern. **Für die Einordnung von Stammbäumen** unterscheidet man **dominante** und **rezessive** Erbgänge.

{{DIAGRAM:dna-helix}}

**Ein** krankes Allel genügt für die Erkrankung (Aa oder AA krank). Typisches Stammbaum-Muster: **In jeder Generation** Betroffene (vertikale Weitergabe); Männer und Frauen gleich häufig; ein betroffenes Elternteil gibt mit 50 % Wahrscheinlichkeit das kranke Allel weiter. Beispiele: Chorea Huntington, Marfan-Syndrom, Achondroplasie.

> **Merke:** Autosomal-dominant: jede Generation kann betroffen sein; 50 % Risiko für Kinder eines betroffenen Elternteils (wenn dieser heterozygot Aa ist).

---

## Autosomal-rezessiv

**Bisher haben wir gesehen:** Beim autosomal-dominanten Erbgang ist in jeder Generation mindestens ein Betroffener typisch. **Beim rezessiven Erbgang** müssen **beide** Allele krank sein — das führt zu einem anderen Stammbaum-Muster.

Die Erkrankung tritt nur auf, wenn **beide** Allele krank sind (**aa**). Heterozygote (Aa) sind **Konduktoren/Träger**, meist gesund. Typisches Muster: **Generationensprünge** (gesunde Eltern können betroffene Kinder haben, wenn beide Aa sind); Geschwister können betroffen sein; **Konsanguinität** (Verwandtenehe) erhöht das Risiko. Aa × Aa → 25 % aa (krank), 50 % Aa (Träger), 25 % AA (gesund). Beispiele: Mukoviszidose, Phenylketonurie (PKU), Sichelzellanämie.

> **Merke:** Autosomal-rezessiv: aa krank; Aa × Aa → 25 % krank, 50 % Träger, 25 % gesund. Generationensprünge typisch.

---

## X-chromosomal rezessiv

**Bisher haben wir gesehen:** Autosomal-dominant und -rezessiv. **Liegt das Gen auf dem X-Chromosom,** ergeben sich andere Verteilungsmuster — besonders bei **X-chromosomal rezessiv**.

{{DIAGRAM:blood-groups}}

Das kranke Allel liegt auf dem **X-Chromosom** und ist **rezessiv**. **Männer** sind häufiger betroffen (hemizygot: ein X^a reicht). **Frauen** können Konduktorinnen sein (X^A X^a, phänotypisch meist gesund). **Keine Vater-Sohn-Übertragung** (Vater gibt X nur an Töchter, Y an Söhne). Typisches Muster: Betroffene Männer; Töchter betroffener Väter sind obligate Konduktorinnen; Diagonal-Muster (Großvater → Enkel über Konduktorin). Beispiele: Hämophilie A, Duchenne-Muskeldystrophie, Rot-Grün-Blindheit.

> **Merke:** X-chromosomal rezessiv: Männer häufiger krank (hemizygot); keine Vater-Sohn-Übertragung; Konduktorin = heterozygote Frau, meist gesund.

---

## X-chromosomal dominant

**Bisher haben wir gesehen:** X-rezessiv führt zu mehr betroffenen Männern und keiner Vater-Sohn-Übertragung. **Bei X-chromosomal dominant** ist das Muster anders — hier ist das kranke Allel bereits in einfacher Dosis wirksam.

Das kranke Allel ist **dominant** auf dem X-Chromosom. **Kranker Vater (X^A Y):** Alle **Töchter** erhalten sein X^A → **100 % Töchter krank**; alle **Söhne** erhalten sein Y → **100 % Söhne gesund**. Dieses Muster ist sehr charakteristisch. Beispiele: Hypophosphatämische Rachitis, Rett-Syndrom (meist nur Mädchen, da bei Jungen oft letal).

> **Merke:** X-chromosomal dominant: kranker Vater → 100 % Töchter krank, 100 % Söhne gesund.

---

## Stammbaum: Symbole und Auswertung

**Bisher haben wir gesehen:** Die vier Haupterbgänge (autosomal-dominant/rezessiv, X-dominant/rezessiv) und ihre typischen Muster. **Um einen unbekannten Stammbaum einzuordnen,** braucht man die **Symbole** und eine **systematische Auswertung**.

**Symbole:** Quadrat = Mann, Kreis = Frau; ausgefüllt = betroffen; halb ausgefüllt = Konduktor/Träger; Doppellinie = Konsanguinität. **Systematische Erbgangbestimmung:** Beide Geschlechter betroffen? → autosomal möglich. Nur Männer? → Y-chromosomal oder X-rezessiv prüfen. Keine Vater-Sohn-Übertragung? → X-chromosomal. Jede Generation betroffen? → dominant. Generationensprünge? → rezessiv.

---

## MedAT-Fokus

**Typische Prüfungsfragen:**
- Warum sind bei X-chromosomal rezessiv mehr Männer betroffen?
- Welcher Erbgang liegt vor, wenn ein kranker Vater nur kranke Töchter und gesunde Söhne hat?
- Aa x Aa: Wie hoch ist das Erkrankungsrisiko? (25 %)

**Typische Fallen:**
- Autosomal-dominant (jede Generation betroffen) vs. autosomal-rezessiv (Generationensprünge) verwechseln.
- X-rezessiv: Vater gibt Y an Söhne, daher keine Vater-Sohn-Übertragung.
- Konduktorin ist heterozygot und phänotypisch meist gesund, kann aber kranke Söhne haben.

---

## Zusammenfassung (ultrakompakt)

- **Autosomal-dominant:** jede Generation; 50 % Risiko bei betroffenem Elternteil (Aa).
- **Autosomal-rezessiv:** aa krank; Aa × Aa → 25 % krank; Generationensprünge; Konsanguinität ↑ Risiko.
- **X-chromosomal rezessiv:** Männer häufiger; keine Vater-Sohn-Übertragung; Konduktorin (X^A X^a).
- **X-chromosomal dominant:** kranker Vater → 100 % Töchter krank, 100 % Söhne gesund.`,
      lernziele: [
        "Autosomal und X-chromosomal sowie dominant und rezessiv zuordnen.",
        "Die vier Haupterbgänge an Stammbaum-Mustern erkennen und Risiken berechnen.",
      ],
      sections: [],
      merksätze: [
        "Autosomal-rezessiv: Aa × Aa → 25 % krank. X-rezessiv: Männer häufiger, keine Vater-Sohn-Übertragung. X-dominant: kranker Vater → alle Töchter krank.",
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
      ],
    },

    // ─── 7. Blutgruppen: AB0-System ──────────────────────────────────────────
    {
      id: "bio-4-07",
      title: "Blutgruppen: AB0-System",
      stichworte: ["AB0", "Blutgruppe", "kodominant", "I^A", "I^B", "i", "Antigen", "Rhesus"],
      content: `## Einleitung

Vor jeder Bluttransfusion wird die Blutgruppe bestimmt, denn eine Verwechslung kann lebensbedrohlich sein. Das AB0-System ist dabei das wichtigste: Es zeigt, wie drei Allele und das Prinzip der Kodominanz zusammen vier Blutgruppen ergeben. Gleichzeitig liefert es klassische Prüfungsaufgaben, weil sich damit Kreuzungsaufgaben und Kodominanz an einem greifbaren Beispiel trainieren lassen.

**In diesem Kapitel lernst du:**
- warum drei Allele zu vier Blutgruppen führen und was Kodominanz dabei bedeutet
- wie man Kreuzungsaufgaben zu Blutgruppen systematisch löst
- warum Eltern mit Blutgruppe 0 und AB kein Kind mit Blutgruppe 0 haben können
- wie das Rhesus-System funktioniert und warum es in der Schwangerschaft relevant ist

{{DIAGRAM:blood-groups}}

---

## Allele und Phänotypen

Beim AB0-System gibt es **drei Allele** an einem Genort: **I^A** (Antigen A), **I^B** (Antigen B) und **i** (kein Antigen, rezessiv). Jeder Mensch trägt **zwei** Allele (diploid). **Dominanzverhältnisse:** I^A und I^B dominieren über i; I^A und I^B sind **kodominant** zueinander (beide werden exprimiert).

| Genotyp | Phänotyp (Blutgruppe) |
|---------|------------------------|
| I^A I^A, I^A i | A |
| I^B I^B, I^B i | B |
| I^A I^B | AB (beide Antigene) |
| i i | 0 (keine Antigene) |

> **Merke:** I^A und I^B kodominant → AB; beide dominant über i → 0. Sechs Genotypen, vier Phänotypen.

---

## Kreuzungsbeispiele

**Bisher haben wir gesehen:** Die drei Allele und vier Phänotypen des AB0-Systems. **Für typische Prüfungsfragen** sind **Kreuzungsbeispiele** zentral.

{{DIAGRAM:immune-response}}

**Eltern I^A i × I^B i:** Jeder Elternteil kann I^A oder i bzw. I^B oder i abgeben. Mögliche Genotypen der Kinder: I^A I^B (AB), I^A i (A), I^B i (B), i i (0) — **alle vier Blutgruppen** mit je 25 % möglich.

**Eltern 0 (ii) × AB (I^A I^B):** Kinder erhalten von einem Elternteil i, vom anderen I^A oder I^B → nur **I^A i (A)** oder **I^B i (B)**. Kinder mit Blutgruppe **0** oder **AB** sind **nicht** möglich (0 gibt nur i weiter; AB gibt nur I^A oder I^B weiter).

> **Merke:** I^A i × I^B i → A, B, AB, 0 je 25 %. Eltern 0 und AB → Kinder nur A oder B (nie 0 oder AB).

---

## Rhesus-System (kurz)

**Bisher haben wir gesehen:** AB0 mit drei Allelen und Kodominanz. **Neben AB0** ist das **Rhesus-System** für Blutgruppen und Schwangerschaft relevant.

{{DIAGRAM:pedigree-analysis}}

Das **Rhesus-System** (D/d) folgt einem **einfachen dominant-rezessiven** Erbgang: **D** (Rh-positiv) ist dominant über **d** (Rh-negativ). DD oder Dd = Rh-positiv; dd = Rh-negativ. **Rhesus-Inkompatibilität:** Rh-negative Mutter (dd), Rh-positives Kind (D von Vater) → Mutter kann Anti-D-Antikörper bilden; bei erneuter Schwangerschaft mit Rh-positivem Kind Gefahr für **Morbus haemolyticus neonatorum**. Durch **Anti-D-Prophylaxe** wird dies verhindert.

> **Merke:** Rhesus: D dominant, dd = Rh-negativ. Anti-D-Prophylaxe bei Rh-negativer Mutter.

---

## MedAT-Fokus

**Typische Prüfungsfragen:**
- Welche Blutgruppen können Kinder von I^A i x I^B i haben? (Alle vier, je 25 %.)
- Warum können Eltern mit 0 und AB kein Kind mit 0 haben?
- Was bedeutet kodominant beim AB0-System?

**Typische Fallen:**
- Kodominant (beide Allele gleichzeitig sichtbar, z. B. AB) vs. intermediär (Mischphänotyp) verwechseln.
- Eltern 0 x AB: Kinder nur A oder B, nie 0 oder AB.

---

## Zusammenfassung (ultrakompakt)

- **AB0:** I^A, I^B kodominant (AB); beide dominant über i (0). Sechs Genotypen → vier Phänotypen.
- **I^A i × I^B i** → A, B, AB, 0 je 25 %. **0 × AB** → nur A oder B.
- **Rhesus:** D dominant; dd = Rh-negativ; Anti-D-Prophylaxe bei Rh-neg. Mutter.`,
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
      content: `## Einleitung

In jedem Zellteilungszyklus werden rund sechs Milliarden Basenpaare kopiert. Dabei passieren Fehler, und genau diese Fehler sind Mutationen. Manche bleiben unbemerkt, andere verursachen schwere Erkrankungen. Entscheidend ist, auf welcher Ebene der Fehler liegt: Ist nur eine einzelne Base betroffen, ein ganzes Chromosomenstück oder gleich die Gesamtzahl der Chromosomen? Diese drei Ebenen zu unterscheiden ist einer der klassischen MedAT-Stolpersteine.

**In diesem Kapitel lernst du:**
- warum man Mutationen nach drei Ebenen einteilt (Gen, Chromosom, Genom) und woran man sie erkennt
- welche Folgen eine einzige Basenveränderung haben kann (von stumm bis tödlich)
- wie es dazu kommt, dass ein Mensch 47 statt 46 Chromosomen hat
- welche bekannten Krankheitsbilder sich den drei Ebenen zuordnen lassen

{{DIAGRAM:dna-helix}}

---

## Genmutation

**Genmutationen** betreffen die **DNA-Sequenz** eines Gens (einzelne Basen oder wenige Basen). **Punktmutation:** Austausch einer Base. Folgen: **stille Mutation** (gleiche Aminosäure durch Degeneriertheit des Codes), **Missense-Mutation** (andere Aminosäure), **Nonsense-Mutation** (Stopp-Codon → verkürztes, oft nicht-funktionales Protein). **Frameshift-Mutation:** Einfügung oder Deletion von nicht durch 3 teilbaren Basen → Verschiebung des Leserasters → meist schwerer Defekt. Genmutationen können in Keimzellen vererbt werden oder in Körperzellen (somatisch) auftreten (z. B. bei Krebs).

> **Merke:** Genmutation = Änderung der DNA-Sequenz eines Gens; Punktmutation (Austausch) vs. Frameshift (Einfügung/Deletion); Nonsense = Stopp-Codon.

---

## Chromosomenmutation

**Bisher haben wir gesehen:** Genmutationen betreffen die DNA-Sequenz eines Gens. **Auf der Ebene des Chromosoms** können **strukturelle** Veränderungen auftreten — **Chromosomenmutationen**.

{{DIAGRAM:cell-cycle}}

**Chromosomenmutationen** sind **strukturelle** Veränderungen von Chromosomenabschnitten (nicht der Gesamtzahl). **Deletion:** Verlust eines Stücks (z. B. Cri-du-chat: 5p-Deletion). **Duplikation:** Verdopplung eines Abschnitts. **Translokation:** Verlagerung eines Stücks auf ein anderes Chromosom (z. B. Robertsonsche Translokation bei Trisomie 21). **Inversion:** Drehung eines Abschnitts um 180°. **Balancierte** Translokation/Inversion: Kein Verlust von Material → Träger oft phänotypisch unauffällig, aber erhöhtes Risiko für unbalancierte Keimzellen (Nachkommen mit Über- oder Unterdosierung).

> **Merke:** Chromosomenmutation = strukturell (Deletion, Duplikation, Translokation, Inversion). Cri-du-chat = 5p-Deletion.

---

## Genommutation

**Bisher haben wir gesehen:** Genmutation (Sequenz) und Chromosomenmutation (Struktur). **Ändert sich die Anzahl der Chromosomen,** spricht man von **Genommutation**.

{{DIAGRAM:transcription-translation}}

**Genommutationen** betreffen die **Anzahl** der Chromosomen. **Aneuploidie:** Abweichung um einzelne Chromosomen — **Trisomie** (3 Kopien, z. B. Trisomie 21) oder **Monosomie** (1 Kopie, z. B. 45,X = Turner). Ursache meist **Nicht-Disjunktion** in der Meiose (Chromosomen trennen sich nicht). **Polyploidie:** Vervielfachung des gesamten Chromosomensatzes (3n, 4n); beim Menschen in der Regel letal. Trisomie 21 (Down-Syndrom) ist die häufigste lebensfähige Autosom-Trisomie; das Risiko steigt mit dem mütterlichen Alter.

> **Merke:** Genommutation = falsche Chromosomenzahl. Trisomie/Monosomie durch Nicht-Disjunktion; Polyploidie = 3n/4n.

---

## Übersicht

| Ebene | Typ | Beispiel |
|-------|-----|----------|
| Gen | Genmutation (Punkt-, Frameshift) | Sichelzellanämie (Missense), viele Erbkrankheiten |
| Chromosom | Chromosomenmutation (Deletion, Translokation …) | Cri-du-chat (5p-), Robertsonsche Translokation |
| Genom | Genommutation (Trisomie, Monosomie) | Trisomie 21, Turner (45,X), Klinefelter (47,XXY) |

---

## MedAT-Fokus

**Typische Prüfungsfragen:**
- Was ist der Unterschied zwischen Genmutation und Genommutation?
- Wodurch entsteht eine Trisomie? (Nicht-Disjunktion in der Meiose.)
- Welche Mutationsebene liegt bei Cri-du-chat vor? (Chromosomenmutation, Deletion 5p.)

**Typische Fallen:**
- Genmutation (Sequenz), Chromosomenmutation (Struktur) und Genommutation (Zahl) verwechseln.
- Nicht-Disjunktion betrifft die Chromosomenverteilung in der Meiose, nicht die DNA-Sequenz.
- Frameshift (Leserasterverschiebung) tritt nur auf, wenn die Zahl der eingefügten/deletierten Basen nicht durch 3 teilbar ist.

---

## Zusammenfassung (ultrakompakt)

- **Genmutation:** Änderung der DNA-Sequenz (Punkt-, Frameshift); Nonsense = Stopp-Codon.
- **Chromosomenmutation:** Deletion, Duplikation, Translokation, Inversion (Struktur); Cri-du-chat = 5p-.
- **Genommutation:** Trisomie/Monosomie (Nicht-Disjunktion), Polyploidie; Trisomie 21, Turner, Klinefelter.`,
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
      content: `## Einleitung

Stell dir die DNA als Kochbuch vor, das sicher im Tresor (Zellkern) liegt. Wenn die Zelle ein bestimmtes Gericht (Protein) braucht, wird nicht das ganze Buch herausgeholt, sondern nur das relevante Rezept abgeschrieben (Transkription) und in die Küche (Zytoplasma) gebracht, wo es umgesetzt wird (Translation). Dieser Informationsfluss von der DNA über RNA zum Protein ist das Zentraldogma der Molekularbiologie und die Grundlage dafür, dass aus Genen sichtbare Merkmale werden.

**In diesem Kapitel lernst du:**
- warum die Information immer in eine Richtung fließt: DNA zu RNA zu Protein
- was bei der Transkription und Translation jeweils passiert und wo es stattfindet
- wie Veränderungen in der DNA-Sequenz über Proteine den Phänotyp beeinflussen
- warum dieses Prinzip der Schlüssel ist, der Genetik und Vererbung verbindet

{{DIAGRAM:transcription-translation}}

---

## Zentraldogma

Das **Zentraldogma** der Molekularbiologie beschreibt den gerichteten Informationsfluss: **DNA → RNA → Protein**. Die DNA ist der **Speicher** der Information; die **RNA** (z. B. mRNA = Boten-RNA) ist die **Kopie**, die aus dem Zellkern ins Zytoplasma gelangt; das **Protein** ist das **Produkt**, das die Funktion ausübt (Enzym, Struktur, Signal). So wird ein **Gen** (DNA-Abschnitt) in ein **Protein** umgesetzt, das am Aufbau und an der Steuerung der Zelle mitwirkt und damit den **Phänotyp** mitprägt.

> **Merke:** DNA → (Transkription) → RNA → (Translation) → Protein. Genexpression = Umsetzung der genetischen Information in ein Produkt (Protein).

---

## Transkription und Translation (Konzept)

**Bisher haben wir gesehen:** Das Zentraldogma beschreibt den Fluss DNA → RNA → Protein. **Wie dieser Fluss im Detail abläuft,** zeigen **Transkription** und **Translation**.

{{DIAGRAM:dna-helix}}

**Transkription:** Im Zellkern wird die DNA eines Gens in eine **RNA-Kopie** (mRNA) umgeschrieben. Die Basenfolge der DNA bestimmt die Basenfolge der RNA (A, U, G, C in RNA; U ersetzt T). **Translation:** Im Zytoplasma lesen **Ribosomen** die mRNA und bauen anhand des **genetischen Codes** (je 3 Basen = 1 Codon = 1 Aminosäure) das **Protein** aus Aminosäuren. So bestimmt die **Gensequenz** die **Proteinsequenz** und damit die Funktion des Proteins. Mutationen in der DNA können die Proteinsequenz oder -menge verändern und so den Phänotyp verändern (z. B. Erbkrankheiten).

> **Merke:** Transkription = DNA → RNA (im Kern). Translation = RNA → Protein (an Ribosomen). Genetischer Code: Codon (3 Basen) → Aminosäure.

---

## Zusammenhang mit Genetik und Vererbung

**Bisher haben wir gesehen:** DNA → RNA → Protein als Grundprinzip der Genexpression. **Damit schließt sich der Bogen** von der Molekularebene zur **Vererbung** und zu den Erbgängen.

{{DIAGRAM:endomembrane-system}}

Die **Allele** eines Gens unterscheiden sich in ihrer **DNA-Sequenz** (oder Regulation). Dadurch entstehen unterschiedliche RNA- und Proteinvarianten → unterschiedlicher **Phänotyp**. Vererbung bedeutet: Die DNA (und damit die Allele) wird über Keimzellen weitergegeben; in der nächsten Generation wird sie wieder exprimiert (DNA → RNA → Protein) und prägt den Phänotyp. So schließt sich der Bogen von DNA, Gen, Chromosom und Meiose zur klassischen Genetik (Mendel, Erbgänge, Blutgruppen).

---

## MedAT-Fokus

**Typische Prüfungsfragen:**
- In welche Richtung geht der Informationsfluss laut Zentraldogma?
- Was bedeutet Genexpression?
- Wo findet die Translation statt? (An Ribosomen im Zytoplasma.)

**Typische Fallen:**
- Transkription (DNA zu RNA) und Translation (RNA zu Protein) verwechseln.
- Genetische Information fließt von DNA zu Protein, nicht umgekehrt.
- Transkription findet im Zellkern statt, Translation im Zytoplasma (bei Eukaryoten).

---

## Zusammenfassung (ultrakompakt)

- **Zentraldogma:** DNA → RNA → Protein (Transkription, Translation).
- **Genexpression** = Gen wird in Protein umgesetzt → prägt Phänotyp.
- Transkription = DNA → RNA; Translation = RNA → Protein (Ribosomen, Codon → Aminosäure).
- Allele = Varianten der DNA → können zu unterschiedlichen Proteinen und Phänotypen führen.`,
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
      ],
    },
  ],
};
