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

Die Genetik erklärt, wie Merkmale von einer Generation zur nächsten weitergegeben werden. Drei Begriffe stehen im Zentrum: **DNA** (der chemische Träger der Erbinformation), **Gene** (die funktionellen Einheiten auf der DNA) und **Chromosomen** (die verpackte Form der DNA bei der Zellteilung). Ohne den Zusammenhang zwischen diesen drei Ebenen sind weder Mitose und Meiose noch die Mendelschen Regeln oder Erbgänge verständlich. Dieses Unterkapitel legt das Fundament: Was ist wo gespeichert, und wie hängen die Begriffe zusammen?

**In diesem Kapitel lernst du:**
- den **Zusammenhang** zwischen DNA, Gen und Chromosom (Speicherort, Verpackung, funktionelle Einheit)
- was ein **Gen** und was ein **Allel** ist (Variantenform eines Gens)
- wo die Erbinformation liegt (DNA im Zellkern, bei Eukaryoten an Histonen verpackt)
- warum diese Begriffe für Vererbung und Meiose zentral sind

---

## DNA: Träger der Erbinformation

**DNA** (Desoxyribonukleinsäure) ist das Molekül, das die genetische Information speichert. Sie besteht aus zwei antiparallel gewundenen Strängen (**Doppelhelix**). Jeder Strang ist aus **Nukleotiden** aufgebaut: Ein Nukleotid enthält den Zucker Desoxyribose, ein Phosphat und eine von vier **Basen** — **A**denin (A), **T**hymin (T), **G**uanin (G), **C**ytosin (C). Die Basen der beiden Stränge paaren sich nach festen Regeln: A immer mit T (zwei Wasserstoffbrücken), G immer mit C (drei Wasserstoffbrücken). Daraus folgen die **Chargaff-Regeln**: In einem Doppelstrang ist die Menge an A gleich der von T, die von G gleich der von C. Die Abfolge der Basen (die **Sequenz**) codiert die Information für den Aufbau von Proteinen und die Steuerung der Zelle.

> **Merke:** DNA = Doppelhelix aus Nukleotiden; Basen A, T, G, C; A-T und G-C paaren. Die Sequenz der Basen ist die Erbinformation.

---

## Gen: funktionelle Einheit auf der DNA

Ein **Gen** ist ein **Abschnitt der DNA**, der die Information für ein bestimmtes Merkmal oder ein Produkt (z. B. ein Protein oder eine RNA) trägt. Gene liegen an festen Orten auf den Chromosomen; dieser Ort heißt **Locus** (Plural: Loci). Beim Menschen gibt es etwa 20.000–25.000 protein codierende Gene, verteilt auf 46 Chromosomen. Ein Gen kann in verschiedenen **Varianten** vorkommen — diese Varianten nennt man **Allele**. Beispiel: Das Gen für die Blütenfarbe bei Erbsen hat ein Allel für „rot“ und ein Allel für „weiß“. Ein diploider Organismus trägt pro Gen zwei Allele (eines von jedem Elternteil), die am gleichen Locus auf den beiden **homologen Chromosomen** sitzen.

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

**DNA** enthält die Information, **Gene** sind die Einheiten, die vererbt werden (jeweils als Allel-Paar), und **Chromosomen** sind die Strukturen, die bei Meiose und Mitose getrennt und auf die Tochterzellen verteilt werden. In der **Meiose** werden die homologen Chromosomen getrennt — deshalb erbt jede Keimzelle pro Gen nur ein Allel. Das erklärt die Mendelsche Spaltung: Jeder Elternteil gibt eines von zwei Allelen weiter, und die Kombination in der Nachkommenschaft folgt den Kreuzungsschemata.

> **Merke:** DNA → Gene (mit Allelen) → auf Chromosomen verpackt. Meiose trennt homologe Chromosomen → je ein Allel pro Gen in der Keimzelle.

---

## MedAT-Fokus

**Zentral prüfungsrelevant:**
- DNA = Träger der Erbinformation; Doppelhelix; Basen A, T, G, C; A-T und G-C paaren.
- Gen = funktioneller DNA-Abschnitt für ein Merkmal/Produkt; Locus = Ort des Gens.
- Allel = Variantenform eines Gens (z. B. A vs. a).
- Chromosom = verpackte DNA (mit Histonen); viele Gene pro Chromosom.
- Homologe Chromosomen = Paar aus mütterlich/väterlich, gleiche Genorte, oft verschiedene Allele.
- Schwesterchromatiden = zwei identische Chromosomenkopien nach Replikation, verbunden am Zentromer.
- Zusammenhang: DNA → Gene (Allele) → Chromosomen; Vererbung über Verteilung der Chromosomen in der Meiose.

**Häufige Prüfungsfragen:**
- Was ist der Unterschied zwischen Gen und Allel?
- Wo liegt die Erbinformation, und in welcher Form?
- Was sind homologe Chromosomen, was sind Schwesterchromatiden?

**Typische Prüfungsfallen:**
- Gen ≠ Allel (Gen = Ort/Information, Allel = konkrete Variante).
- Homologe Chromosomen sind nicht identisch (gleiche Gene, oft verschiedene Allele).
- Schwesterchromatiden sind identisch (Kopien nach Verdopplung).

**Wichtige Begriffe & Definitionen:**
- DNA, Gen, Locus, Allel, Chromosom, homologe Chromosomen, Schwesterchromatiden, Zentromer.

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

Chromosomen sind die sichtbare Form der DNA bei der Zellteilung. Ihr Aufbau (Zentromer, Arme, Telomere) und die korrekte Zahl und Struktur sind für die Vererbung und für die Medizin zentral: Abweichungen führen zu Syndromen wie Trisomie 21 oder Turner. Hier lernst du den Aufbau eines Chromosoms, die Bedeutung von Autosomen und Gonosomen sowie die Karyotyp-Notation — alles BMS-relevant.

**In diesem Kapitel lernst du:**
- den **Aufbau** eines Chromosoms (Zentromer, p- und q-Arm, Telomere)
- **Autosomen** vs. **Gonosomen** (Geschlechtschromosomen)
- die **Karyotyp-Notation** (z. B. 46,XX und 46,XY) lesen und interpretieren
- warum Chromosomenzahl und -struktur für Vererbung und Klinik wichtig sind

---

## Aufbau eines Chromosoms

Ein metaphasisches Chromosom (in der Zellteilung sichtbar) besteht aus **zwei Schwesterchromatiden**, die am **Zentromer** zusammenhängen. Das Zentromer ist der Ansatzpunkt für die Spindelfasern; an ihm sitzt der **Kinetochor** (Protein komplex). Jede Chromatide hat zwei **Arme**: der **p-Arm** (petit = kurz) und der **q-Arm** (queue = lang). An den Enden der Chromosomen liegen die **Telomere** — repetitive DNA-Sequenzen (beim Menschen TTAGGG), die die Enden schützen und bei jeder Zellteilung etwas kürzer werden (ohne Telomerase).

> **Merke:** Zentromer verbindet die beiden Schwesterchromatiden; p-Arm = kurz, q-Arm = lang; Telomere schützen die Enden.

---

## Autosomen und Gonosomen

Beim Menschen gibt es **46 Chromosomen** in jeder Körperzelle (diploider Satz): **22 Paare Autosomen** (Chromosomen 1–22, nicht geschlechtsbestimmend) und **ein Paar Geschlechtschromosomen** (**Gonosomen**): **XX** bei Frauen, **XY** bei Männern. Die Gonosomen bestimmen das genetische Geschlecht: Das **Y-Chromosom** trägt das **SRY-Gen**, das die männliche Geschlechtsentwicklung auslöst. Fehlt das Y, entwickelt sich weiblich (z. B. 46,XX oder 45,X).

> **Merke:** 46 Chromosomen = 22 Autosomenpaare + 1 Gonosomenpaar. XX = weiblich, XY = männlich; Geschlecht durch Y-Chromosom (SRY) bestimmt.

---

## Karyotyp und Notation

Der **Karyotyp** ist die geordnete Darstellung aller Chromosomen einer Zelle (nach Größe, Zentromerlage, Färbemuster). Er wird in der **Metaphase** der Mitose erstellt (Chromosomen sind dann maximal kondensiert). Die **Karyotyp-Notation** gibt zuerst die **Chromosomenzahl**, dann die **Gonosomen** und bei Abweichungen die **Aberration** an:

- **46,XX** = weiblich, normal
- **46,XY** = männlich, normal
- **47,XX,+21** = weiblich, Trisomie 21 (Down-Syndrom) — drei Kopien von Chromosom 21
- **47,XXY** = Klinefelter-Syndrom (männlich, ein zusätzliches X)
- **45,X** = Turner-Syndrom (weiblich, ein X fehlt)

> **Merke:** Notation: Zahl, dann Gonosomen, dann Aberration (z. B. +21 für Trisomie 21). 46,XX = weiblich; 46,XY = männlich.

---

## MedAT-Fokus

**Zentral prüfungsrelevant:**
- Chromosomenaufbau: Zentromer, p-Arm (kurz), q-Arm (lang), Telomere; zwei Schwesterchromatiden pro Chromosom in der Metaphase.
- Mensch: 46 Chromosomen (2n); 22 Autosomenpaare + XX oder XY.
- Karyotyp: 46,XX (weiblich), 46,XY (männlich); 47,XX,+21 = Trisomie 21; 47,XXY = Klinefelter; 45,X = Turner.
- Autosomen = Chromosomen 1–22; Gonosomen = X und Y; SRY auf Y für männliche Entwicklung.

**Häufige Prüfungsfragen:**
- Wie lautet der normale weibliche bzw. männliche Karyotyp?
- Was bedeutet 47,XX,+21?
- Was verbindet die beiden Schwesterchromatiden?

**Typische Prüfungsfallen:**
- p-Arm = kurz, q-Arm = lang (nicht umgekehrt).
- 47,XXY = männlich (Y vorhanden), 45,X = weiblich (kein Y).
- Karyotyp wird in der Metaphase erstellt, nicht in der Interphase.

**Wichtige Begriffe & Definitionen:**
- Zentromer, Kinetochor, p-Arm, q-Arm, Telomere, Autosomen, Gonosomen, Karyotyp.

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

Körperzellen vermehren sich durch **Mitose** — dabei entstehen aus einer Zelle zwei genetisch gleiche Tochterzellen. **Keimzellen** (Eizellen, Spermien) entstehen dagegen durch **Meiose** — dabei wird der Chromosomensatz halbiert (von diploid 2n auf haploid n), und durch **Crossing-over** entsteht neue Allelkombinationen. Für den MedAT ist der Unterschied zwischen Mitose und Meiose (Zweck, Ablauf, Ergebnis) sowie die Rolle der Meiose für die Mendelsche Vererbung und für Fehler wie Trisomie (Nicht-Disjunktion) zentral.

**In diesem Kapitel lernst du:**
- **Mitose** vs. **Meiose** (Zweck, Ablauf, Ergebnis) sicher unterscheiden
- warum Keimzellen **haploid** (n) sind und was **diploid** (2n) bedeutet
- **Crossing-over** in der Meiose (Rekombination, Bedeutung für genetische Vielfalt)
- **Nicht-Disjunktion** als Ursache von Trisomie/Monosomie

---

## Zellzyklus und Chromosomenzahl

Der **Zellzyklus** umfasst die Vorbereitung der Zellteilung und die Teilung selbst. In der **S-Phase** wird die DNA verdoppelt; danach hat jede Chromosom zwei Schwesterchromatiden. **Diploid (2n)** bedeutet: zwei Chromosomensätze (beim Menschen 2n = 46). **Haploid (n)** bedeutet: ein Chromosomensatz (beim Menschen n = 23). Körperzellen sind diploid; Keimzellen müssen haploid sein, damit nach der Befruchtung (Eizelle + Spermium) wieder 2n = 46 entsteht.

> **Merke:** Diploid (2n) = zwei Sätze; haploid (n) = ein Satz. Mensch: 2n = 46 in Körperzellen, n = 23 in Keimzellen.

---

## Mitose: Teilung der Körperzellen

**Mitose** dient der Vermehrung von Zellen bei Wachstum und Erneuerung. Ablauf (vereinfacht): Die Chromosomen kondensieren, die Kernmembran löst sich auf, die Chromosomen ordnen sich in der Äquatorialebene an (Metaphase), die **Schwesterchromatiden** werden getrennt und zu den Polen gezogen (Anaphase), zwei neue Kerne und Zellen entstehen. **Ergebnis:** Zwei Tochterzellen, jede mit derselben Chromosomenzahl (2n) und genetisch identisch zur Mutterzelle. Es gibt **keine** Reduktion der Chromosomenzahl und **kein** Crossing-over.

> **Merke:** Mitose: 1 Zelle (2n) → 2 Zellen (je 2n); genetisch identisch; Trennung der Schwesterchromatiden.

---

## Meiose: Entstehung der Keimzellen

**Meiose** dient der Bildung von **Keimzellen** (Gameten). Sie besteht aus **zwei aufeinanderfolgenden Teilungen** (Meiose I und Meiose II), wobei nur vor der ersten Teilung die DNA verdoppelt wird.

**Meiose I:** Die **homologen Chromosomen** paaren sich (jedes Chromosom hat bereits zwei Schwesterchromatiden). In der **Prophase I** kann **Crossing-over** stattfinden: Homologe Chromosomen tauschen Stücke aus → **Rekombination** (neue Allelkombinationen). In der Anaphase I werden die **homologen Chromosomen** getrennt (nicht die Schwesterchromatiden!) — jede Tochterzelle erhält je ein Chromosom jedes Paars. Ergebnis: zwei Zellen mit je **haploidem** Chromosomensatz (n), aber jede Chromosom hat noch zwei Chromatiden.

**Meiose II:** In beiden Zellen werden die **Schwesterchromatiden** getrennt (ähnlich wie in der Mitose). Ergebnis: **vier Keimzellen** (bei Spermien) bzw. eine Eizelle plus Polkörper (bei Eizellen), alle **haploid (n)**.

> **Merke:** Meiose I: Trennung der **homologen Chromosomen** (Reduktion 2n → n); Crossing-over in Prophase I. Meiose II: Trennung der **Schwesterchromatiden** (wie Mitose). Ergebnis: 4 haploide Zellen (bzw. 1 Eizelle + Polkörper).

---

## Crossing-over und Rekombination

**Crossing-over** (in der Prophase I der Meiose): Zwei homologe Chromosomen (je mit zwei Chromatiden) liegen gepaart; dabei können sich Chromatidenstücke kreuzen und austauschen. Dadurch entstehen **Rekombinanten** — Chromosomen mit neuer Kombination von Allelen. Gene auf demselben Chromosom sind zunächst **gekoppelt**; durch Crossing-over können sie dennoch neu kombiniert werden. Die **Rekombinationsfrequenz** (wie oft zwei Gene getrennt werden) hängt vom Abstand der Gene ab und wird in **centiMorgan (cM)** angegeben (1 cM ≈ 1 % Rekombination). Gene mit 50 % Rekombination verhalten sich wie unabhängig (entweder auf verschiedenen Chromosomen oder sehr weit auseinander).

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
| **Genetische Identität** | Tochterzellen identisch | Keimzellen genetisch verschieden (Rekombination, zufällige Verteilung) |

---

## MedAT-Fokus

**Zentral prüfungsrelevant:**
- Mitose: 1 Zelle (2n) → 2 Zellen (2n); Trennung der Schwesterchromatiden; keine Reduktion.
- Meiose: 1 Zelle (2n) → 4 haploide Zellen (n); Meiose I = Trennung der **homologen Chromosomen**, Meiose II = Trennung der **Schwesterchromatiden**.
- Crossing-over in Prophase I der Meiose → Rekombination; Genkopplung kann dadurch aufgehoben werden.
- Nicht-Disjunktion → Trisomie (z. B. 47,+21) oder Monosomie (z. B. 45,X); Risiko für Trisomie 21 steigt mit mütterlichem Alter.
- Diploid (2n) = zwei Chromosomensätze; haploid (n) = ein Satz; Keimzellen sind haploid.

**Häufige Prüfungsfragen:**
- Was wird in Meiose I getrennt — homologe Chromosomen oder Schwesterchromatiden?
- Wodurch entsteht genetische Vielfalt bei der Meiose?
- Was ist der Unterschied zwischen Mitose und Meiose hinsichtlich Chromosomenzahl und Zweck?

**Typische Prüfungsfallen:**
- Mitose: Trennung der **Schwesterchromatiden**; Meiose I: Trennung der **homologen Chromosomen** (nicht der Schwesterchromatiden).
- Meiose II ähnelt Mitose (Trennung der Schwesterchromatiden), aber Ausgangszelle ist bereits haploid.
- Crossing-over findet nur in der **Meiose** (Prophase I) statt, nicht in der Mitose.

**Wichtige Begriffe & Definitionen:**
- Mitose, Meiose I/II, homologe Chromosomen, Schwesterchromatiden, Crossing-over, Rekombination, haploid, diploid, Nicht-Disjunktion, Trisomie, Monosomie.

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

Gregor Mendel formulierte anhand von Kreuzungsversuchen mit Erbsen drei Regeln, die bis heute das Fundament der Vererbungslehre bilden. Sie beschreiben, wie sich Merkmale in der Nachkommenschaft verteilen, wenn man reinerbige bzw. mischerbige Eltern kreuzt. Für den MedAT sind die drei Mendelschen Regeln, die zugehörigen Kreuzungsschemata (Punnett-Quadrat) und die typischen Zahlenverhältnisse (3:1, 1:2:1, 9:3:3:1) unverzichtbar.

**In diesem Kapitel lernst du:**
- die **1. Mendelsche Regel** (Uniformität): Kreuzung reinerbiger Eltern → einheitliche F₁
- die **2. Mendelsche Regel** (Spaltung): Kreuzung von F₁-Hybriden → Aufspaltung in F₂ (3:1 Phänotyp, 1:2:1 Genotyp)
- die **3. Mendelsche Regel** (Unabhängigkeit): zwei unabhängige Gene → F₂-Verhältnis 9:3:3:1
- **Punnett-Quadrat** und **monohybrider** vs. **dihybrider** Erbgang

---

## 1. Mendelsche Regel (Uniformitätsregel)

Kreuzt man **reinerbige (homozygote)** Eltern mit **unterschiedlichen Merkmalen**, so sind alle Nachkommen der **F₁-Generation** (erste Filialgeneration) **uniform** — gleicher Genotyp und gleicher Phänotyp. Beispiel: AA (rot) × aa (weiß) → alle F₁ sind **Aa** (rot, wenn A dominant). Die F₁ ist also **mischerbig (heterozygot)** und zeigt das dominante Merkmal.

> **Merke:** 1. Mendelsche Regel: Homozygote Eltern (AA × aa) → F₁ zu 100 % uniform heterozygot (Aa).

---

## 2. Mendelsche Regel (Spaltungsregel)

Kreuzt man die **F₁-Hybriden** untereinander (Aa × Aa), so **spaltet** die **F₂-Generation** in festen Verhältnissen auf. **Genotyp:** 1 AA : 2 Aa : 1 aa (Verhältnis 1:2:1). **Phänotyp** (bei dominant-rezessiv, A dominant über a): 3 dominant (rot) : 1 rezessiv (weiß), also **3:1**. Das Punnett-Quadrat (2×2) zeigt die vier möglichen Kombinationen der Gameten (A und a von jedem Elternteil).

> **Merke:** 2. Mendelsche Regel: Aa × Aa → F₂ Genotyp 1:2:1 (AA:Aa:aa), Phänotyp (dominant-rezessiv) 3:1.

---

## 3. Mendelsche Regel (Unabhängigkeitsregel)

Betrachtet man **zwei Merkmale** (zwei Gene auf **verschiedenen Chromosomen** oder weit voneinander entfernt), so werden die Gene **unabhängig** voneinander verteilt. Kreuzung **RrGg × RrGg** (dihybrider Erbgang) ergibt in F₂ das **Phänotyp-Verhältnis 9:3:3:1** (9 R_G_, 3 R_gg, 3 rrG_, 1 rrgg). Das Punnett-Quadrat hat 4×4 = 16 Felder. Voraussetzung: **Unabhängigkeit** der Gene (keine Kopplung). Bei **gekoppelten Genen** (auf demselben Chromosom, nah beieinander) weicht das Verhältnis ab — dann überwiegen die Parentaltypen.

> **Merke:** 3. Mendelsche Regel: Zwei unabhängige Gene (RrGg × RrGg) → F₂ 9:3:3:1. Nur bei Genen auf verschiedenen Chromosomen oder ohne Kopplung.

---

## Punnett-Quadrat und Wahrscheinlichkeit

Das **Punnett-Quadrat** stellt die möglichen Kombinationen der **Gameten** (Eizellen/Spermien) dar. Monohybrid: 2×2 = 4 Kombinationen (Aa × Aa → AA, Aa, Aa, aa). Dihybrid: 4×4 = 16 (je Elternteil 4 Gameten-Typen: RG, Rg, rG, rg). **Produktregel** bei unabhängigen Ereignissen: P(rrgg) = P(rr) × P(gg) = 1/4 × 1/4 = 1/16.

---

## MedAT-Fokus

**Zentral prüfungsrelevant:**
- 1. Regel: AA × aa → F₁ 100 % Aa (uniform).
- 2. Regel: Aa × Aa → F₂ Genotyp 1:2:1, Phänotyp (dominant-rezessiv) 3:1.
- 3. Regel: RrGg × RrGg → F₂ 9:3:3:1 (nur bei Unabhängigkeit der Gene).
- Punnett-Quadrat: monohybrid 2×2, dihybrid 4×4; Produktregel für Wahrscheinlichkeiten.

**Häufige Prüfungsfragen:**
- Welches Phänotyp-Verhältnis entsteht bei Aa × Aa? (3:1)
- Welches Verhältnis bei RrGg × RrGg? (9:3:3:1)
- Wann gilt die Unabhängigkeitsregel? (Gene auf verschiedenen Chromosomen bzw. nicht gekoppelt)

**Typische Prüfungsfallen:**
- Genotyp 1:2:1 vs. Phänotyp 3:1 verwechseln (bei dominant-rezessiv).
- 9:3:3:1 nur bei **unabhängigen** Genen; bei Kopplung abweichendes Verhältnis.
- 1. Regel: homozygote Eltern → F₁ uniform; 2. Regel: heterozygote F₁ → F₂ spaltet.

**Wichtige Begriffe & Definitionen:**
- Uniformitätsregel, Spaltungsregel, Unabhängigkeitsregel, F₁, F₂, Punnett-Quadrat, monohybrid, dihybrid.

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

**Genotyp** ist die genetische Ausstattung (welche Allele ein Individuum trägt); **Phänotyp** ist das sichtbare oder messbare Merkmal. Ob ein Allel im Phänotyp zur Geltung kommt, hängt vom **Dominanzverhältnis** ab: dominant-rezessiv, intermediär oder kodominant. Mit der **Testkreuzung** (Rückkreuzung mit homozygot Rezessivem) kann man prüfen, ob ein dominanter Phänotyp homozygot (AA) oder heterozygot (Aa) ist. Das ist BMS-Grundwissen für alle Erbgangsaufgaben.

**In diesem Kapitel lernst du:**
- **Genotyp** (AA, Aa, aa) vs. **Phänotyp** (sichtbares Merkmal)
- **homozygot** (reinerbig) vs. **heterozygot** (mischerbig)
- **dominant**, **rezessiv**, **kodominant**, **intermediär** unterscheiden
- **Testkreuzung** zur Genotypbestimmung anwenden

---

## Genotyp und Phänotyp

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

Will man wissen, ob ein Individuum mit **dominantem Phänotyp** **homozygot (AA)** oder **heterozygot (Aa)** ist, kreuzt man es mit einem **homozygot rezessiven** Partner (aa). **Ergebnis:** Sind alle Nachkommen dominant → Elternteil war **AA**. Spaltet die Nachkommenschaft **1:1** (dominant : rezessiv) → Elternteil war **Aa**. Die Testkreuzung liefert also eine klare Aussage über den Genotyp.

> **Merke:** Testkreuzung × aa: 100 % dominant → AA; 1:1 (dominant : rezessiv) → Aa.

---

## MedAT-Fokus

**Zentral prüfungsrelevant:**
- Genotyp = Allel-Kombination (AA, Aa, aa); Phänotyp = sichtbares Merkmal.
- Homozygot = beide Allele gleich; heterozygot = Aa.
- Dominant-rezessiv: Aa zeigt dominanten Phänotyp; rezessiv nur bei aa.
- Intermediär: Aa = Mischphänotyp; F₂ 1:2:1. Kodominant: beide Allele exprimiert (z. B. AB).
- Testkreuzung mit aa: 100 % dominant → AA; 1:1 → Aa.

**Häufige Prüfungsfragen:**
- Was bedeutet kodominant? (Beide Allele sichtbar, z. B. Blutgruppe AB.)
- Wie unterscheidet man AA von Aa? (Testkreuzung mit aa.)
- Unterschied Genotyp vs. Phänotyp?

**Typische Prüfungsfallen:**
- Dominant ≠ häufig (Häufigkeit in der Population ist unabhängig von Dominanz).
- Gen ≠ Allel (Allel = Variante des Gens).
- Intermediär (Mischphänotyp) vs. kodominant (beide Merkmale gleichzeitig) verwechseln.

**Wichtige Begriffe & Definitionen:**
- Genotyp, Phänotyp, homozygot, heterozygot, dominant, rezessiv, kodominant, intermediär, Testkreuzung.

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

Ein **Erbgang** beschreibt, wie ein Merkmal (z. B. eine Erbkrankheit) in einer Familie weitergegeben wird. Entscheidend sind: Liegt das Gen auf einem **Autosom** oder auf dem **X-Chromosom**? Ist das krankheitsauslösende Allel **dominant** oder **rezessiv**? Daraus ergeben sich vier Grundtypen: autosomal-dominant, autosomal-rezessiv, X-chromosomal-dominant, X-chromosomal-rezessiv. Für den MedAT sind Stammbaum-Muster und die Unterscheidung dieser Erbgänge zentral.

**In diesem Kapitel lernst du:**
- **autosomal** vs. **X-chromosomal** (Ort des Gens)
- **autosomal-dominant** und **autosomal-rezessiv** (typische Stammbaum-Muster)
- **X-chromosomal rezessiv** (Männer häufiger betroffen, keine Vater-Sohn-Übertragung, Konduktorin)
- **X-chromosomal dominant** (z. B. kranker Vater → alle Töchter krank)

---

## Autosomal vs. X-chromosomal

**Autosomal:** Das Gen liegt auf einem der **Autosomen** (Chromosomen 1–22). Beide Geschlechter sind gleich häufig betroffen (Männer und Frauen haben je zwei Kopien jedes Autosoms). **X-chromosomal:** Das Gen liegt auf dem **X-Chromosom**. Männer haben nur **ein** X-Chromosom (**Hemizygotie**) — sie tragen also nur ein Allel für X-chromosomale Gene. Daher manifestieren sich **X-chromosomal rezessive** Merkmale bei Männern häufiger (ein rezessives Allel reicht). Frauen haben zwei X-Chromosomen und können **Konduktorinnen** sein (heterozygot, phänotypisch gesund, geben das Allel weiter).

---

## Autosomal-dominant

**Ein** krankes Allel genügt für die Erkrankung (Aa oder AA krank). Typisches Stammbaum-Muster: **In jeder Generation** Betroffene (vertikale Weitergabe); Männer und Frauen gleich häufig; ein betroffenes Elternteil gibt mit 50 % Wahrscheinlichkeit das kranke Allel weiter. Beispiele: Chorea Huntington, Marfan-Syndrom, Achondroplasie.

> **Merke:** Autosomal-dominant: jede Generation kann betroffen sein; 50 % Risiko für Kinder eines betroffenen Elternteils (wenn dieser heterozygot Aa ist).

---

## Autosomal-rezessiv

Die Erkrankung tritt nur auf, wenn **beide** Allele krank sind (**aa**). Heterozygote (Aa) sind **Konduktoren/Träger**, meist gesund. Typisches Muster: **Generationensprünge** (gesunde Eltern können betroffene Kinder haben, wenn beide Aa sind); Geschwister können betroffen sein; **Konsanguinität** (Verwandtenehe) erhöht das Risiko. Aa × Aa → 25 % aa (krank), 50 % Aa (Träger), 25 % AA (gesund). Beispiele: Mukoviszidose, Phenylketonurie (PKU), Sichelzellanämie.

> **Merke:** Autosomal-rezessiv: aa krank; Aa × Aa → 25 % krank, 50 % Träger, 25 % gesund. Generationensprünge typisch.

---

## X-chromosomal rezessiv

Das kranke Allel liegt auf dem **X-Chromosom** und ist **rezessiv**. **Männer** sind häufiger betroffen (hemizygot: ein X^a reicht). **Frauen** können Konduktorinnen sein (X^A X^a, phänotypisch meist gesund). **Keine Vater-Sohn-Übertragung** (Vater gibt X nur an Töchter, Y an Söhne). Typisches Muster: Betroffene Männer; Töchter betroffener Väter sind obligate Konduktorinnen; Diagonal-Muster (Großvater → Enkel über Konduktorin). Beispiele: Hämophilie A, Duchenne-Muskeldystrophie, Rot-Grün-Blindheit.

> **Merke:** X-chromosomal rezessiv: Männer häufiger krank (hemizygot); keine Vater-Sohn-Übertragung; Konduktorin = heterozygote Frau, meist gesund.

---

## X-chromosomal dominant

Das kranke Allel ist **dominant** auf dem X-Chromosom. **Kranker Vater (X^A Y):** Alle **Töchter** erhalten sein X^A → **100 % Töchter krank**; alle **Söhne** erhalten sein Y → **100 % Söhne gesund**. Dieses Muster ist sehr charakteristisch. Beispiele: Hypophosphatämische Rachitis, Rett-Syndrom (meist nur Mädchen, da bei Jungen oft letal).

> **Merke:** X-chromosomal dominant: kranker Vater → 100 % Töchter krank, 100 % Söhne gesund.

---

## Stammbaum: Symbole und Auswertung

**Symbole:** Quadrat = Mann, Kreis = Frau; ausgefüllt = betroffen; halb ausgefüllt = Konduktor/Träger; Doppellinie = Konsanguinität. **Systematische Erbgangbestimmung:** Beide Geschlechter betroffen? → autosomal möglich. Nur Männer? → Y-chromosomal oder X-rezessiv prüfen. Keine Vater-Sohn-Übertragung? → X-chromosomal. Jede Generation betroffen? → dominant. Generationensprünge? → rezessiv.

---

## MedAT-Fokus

**Zentral prüfungsrelevant:**
- Autosomal: Gen auf Autosom; ♂ und ♀ gleich häufig.
- Autosomal-dominant: jede Generation; 50 % Risiko bei Aa × aa.
- Autosomal-rezessiv: aa krank; Aa × Aa → 25 % krank; Generationensprünge; Konsanguinität erhöht Risiko.
- X-chromosomal rezessiv: Männer häufiger (hemizygot); keine Vater-Sohn-Übertragung; Konduktorin.
- X-chromosomal dominant: kranker Vater → 100 % Töchter krank, 100 % Söhne gesund.

**Häufige Prüfungsfragen:**
- Warum sind bei X-chromosomal rezessiv mehr Männer betroffen?
- Welcher Erbgang liegt vor, wenn ein kranker Vater nur kranke Töchter und gesunde Söhne hat?
- Aa × Aa: Wie hoch ist das Erkrankungsrisiko für ein Kind? (25 %)

**Typische Prüfungsfallen:**
- Autosomal-dominant vs. autosomal-rezessiv (Generationen vs. Sprünge).
- X-rezessiv: keine Vater-Sohn-Übertragung (Vater gibt Y an Söhne).
- Konduktorin = heterozygot, phänotypisch meist gesund.

**Wichtige Begriffe & Definitionen:**
- Autosomal, X-chromosomal, autosomal-dominant, autosomal-rezessiv, Konduktorin, Hemizygotie, Stammbaum.

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

Das **AB0-Blutgruppensystem** ist ein klassisches Prüfungsbeispiel für **mehrere Allele** und **Kodominanz**. Drei Allele (I^A, I^B, i) ergeben vier Phänotypen (A, B, AB, 0). I^A und I^B sind **kodominant** zueinander (Blutgruppe AB trägt beide Antigene); beide dominieren über **i** (Blutgruppe 0). Für den MedAT sind Kreuzungsaufgaben (welche Blutgruppen können die Kinder haben?) und die Grundlogik des Systems unverzichtbar.

**In diesem Kapitel lernst du:**
- die **drei Allele** I^A, I^B und i sowie die **vier Phänotypen** A, B, AB, 0
- **Kodominanz** von I^A und I^B (AB = beide Antigene)
- **Kreuzungsaufgaben** (z. B. I^A i × I^B i → alle vier Blutgruppen möglich)
- **Rhesus-System** (D dominant über d) kurz

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

**Eltern I^A i × I^B i:** Jeder Elternteil kann I^A oder i bzw. I^B oder i abgeben. Mögliche Genotypen der Kinder: I^A I^B (AB), I^A i (A), I^B i (B), i i (0) — **alle vier Blutgruppen** mit je 25 % möglich.

**Eltern 0 (ii) × AB (I^A I^B):** Kinder erhalten von einem Elternteil i, vom anderen I^A oder I^B → nur **I^A i (A)** oder **I^B i (B)**. Kinder mit Blutgruppe **0** oder **AB** sind **nicht** möglich (0 gibt nur i weiter; AB gibt nur I^A oder I^B weiter).

> **Merke:** I^A i × I^B i → A, B, AB, 0 je 25 %. Eltern 0 und AB → Kinder nur A oder B (nie 0 oder AB).

---

## Rhesus-System (kurz)

Das **Rhesus-System** (D/d) folgt einem **einfachen dominant-rezessiven** Erbgang: **D** (Rh-positiv) ist dominant über **d** (Rh-negativ). DD oder Dd = Rh-positiv; dd = Rh-negativ. **Rhesus-Inkompatibilität:** Rh-negative Mutter (dd), Rh-positives Kind (D von Vater) → Mutter kann Anti-D-Antikörper bilden; bei erneuter Schwangerschaft mit Rh-positivem Kind Gefahr für **Morbus haemolyticus neonatorum**. Durch **Anti-D-Prophylaxe** wird dies verhindert.

> **Merke:** Rhesus: D dominant, dd = Rh-negativ. Anti-D-Prophylaxe bei Rh-negativer Mutter.

---

## MedAT-Fokus

**Zentral prüfungsrelevant:**
- AB0: drei Allele I^A, I^B, i; I^A und I^B kodominant (AB); beide dominant über i (0).
- Genotypen: I^A I^A oder I^A i → A; I^B I^B oder I^B i → B; I^A I^B → AB; i i → 0.
- I^A i × I^B i → alle vier Blutgruppen möglich (je 25 %).
- Eltern 0 (ii) und AB (I^A I^B) → Kinder nur A oder B (nie 0 oder AB).
- Rhesus: D dominant; dd = Rh-negativ; Anti-D-Prophylaxe bei Rh-neg. Mutter.

**Häufige Prüfungsfragen:**
- Welche Blutgruppen können Kinder von I^A i × I^B i haben?
- Warum können Eltern mit Blutgruppe 0 und AB kein Kind mit Blutgruppe 0 haben?
- Was bedeutet kodominant beim AB0-System?

**Typische Prüfungsfallen:**
- Kodominant (beide Allele sichtbar, AB) vs. intermediär (Mischung).
- Eltern 0 × AB → Kinder nur A oder B (nicht 0 oder AB).

**Wichtige Begriffe & Definitionen:**
- AB0-System, I^A, I^B, i, kodominant, Rhesus, Rh-positiv/Rh-negativ.

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

**Mutationen** sind vererbbare Änderungen des Erbguts. Man unterscheidet grob **Genmutationen** (Änderung auf Ebene einzelner Gene/Basen), **Chromosomenmutationen** (strukturelle Änderungen von Chromosomenabschnitten) und **Genommutationen** (Änderung der Chromosomenzahl). Für den BMS reicht die Einordnung: Was passiert wo, und welche Folgen haben die wichtigsten Typen (z. B. Trisomie durch Nicht-Disjunktion, Deletion bei Cri-du-chat)?

**In diesem Kapitel lernst du:**
- **Genmutation** (Punktmutation, z. B. Basenaustausch; Folgen: stille, Missense-, Nonsense-, Frameshift-Mutation)
- **Chromosomenmutation** (Deletion, Duplikation, Translokation, Inversion — strukturell)
- **Genommutation** (Trisomie, Monosomie durch Nicht-Disjunktion; Polyploidie)
- typische Beispiele zuordnen können

---

## Genmutation

**Genmutationen** betreffen die **DNA-Sequenz** eines Gens (einzelne Basen oder wenige Basen). **Punktmutation:** Austausch einer Base. Folgen: **stille Mutation** (gleiche Aminosäure durch Degeneriertheit des Codes), **Missense-Mutation** (andere Aminosäure), **Nonsense-Mutation** (Stopp-Codon → verkürztes, oft nicht-funktionales Protein). **Frameshift-Mutation:** Einfügung oder Deletion von nicht durch 3 teilbaren Basen → Verschiebung des Leserasters → meist schwerer Defekt. Genmutationen können in Keimzellen vererbt werden oder in Körperzellen (somatisch) auftreten (z. B. bei Krebs).

> **Merke:** Genmutation = Änderung der DNA-Sequenz eines Gens; Punktmutation (Austausch) vs. Frameshift (Einfügung/Deletion); Nonsense = Stopp-Codon.

---

## Chromosomenmutation

**Chromosomenmutationen** sind **strukturelle** Veränderungen von Chromosomenabschnitten (nicht der Gesamtzahl). **Deletion:** Verlust eines Stücks (z. B. Cri-du-chat: 5p-Deletion). **Duplikation:** Verdopplung eines Abschnitts. **Translokation:** Verlagerung eines Stücks auf ein anderes Chromosom (z. B. Robertsonsche Translokation bei Trisomie 21). **Inversion:** Drehung eines Abschnitts um 180°. **Balancierte** Translokation/Inversion: Kein Verlust von Material → Träger oft phänotypisch unauffällig, aber erhöhtes Risiko für unbalancierte Keimzellen (Nachkommen mit Über- oder Unterdosierung).

> **Merke:** Chromosomenmutation = strukturell (Deletion, Duplikation, Translokation, Inversion). Cri-du-chat = 5p-Deletion.

---

## Genommutation

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

**Zentral prüfungsrelevant:**
- **Genmutation:** Änderung der DNA-Sequenz (Punktmutation: stille, Missense, Nonsense; Frameshift).
- **Chromosomenmutation:** strukturell — Deletion, Duplikation, Translokation, Inversion; Beispiel Cri-du-chat (5p-).
- **Genommutation:** Trisomie/Monosomie (Nicht-Disjunktion); Polyploidie (3n, 4n). Trisomie 21, Turner (45,X), Klinefelter (47,XXY).

**Häufige Prüfungsfragen:**
- Was ist der Unterschied zwischen Genmutation und Genommutation?
- Wodurch entsteht eine Trisomie? (Nicht-Disjunktion.)
- Welche Mutationsebene liegt bei Cri-du-chat vor? (Chromosomenmutation, Deletion 5p.)

**Typische Prüfungsfallen:**
- Genmutation (Sequenz) vs. Chromosomenmutation (Struktur) vs. Genommutation (Zahl).
- Nicht-Disjunktion betrifft die Verteilung in der Meiose, nicht die DNA-Sequenz.

**Wichtige Begriffe & Definitionen:**
- Genmutation, Punktmutation, Chromosomenmutation, Genommutation, Trisomie, Monosomie, Nicht-Disjunktion, Deletion, Translokation.

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

Wie wird aus der in der DNA gespeicherten Information ein sichtbares Merkmal? Der Weg heißt **Genexpression**: Die DNA wird in **RNA** umgeschrieben (**Transkription**), und die RNA wird in **Proteine** übersetzt (**Translation**). Proteine sind die Wirkstoffe der Zelle (Enzyme, Strukturproteine, Rezeptoren) und prägen den Phänotyp. Für den BMS reicht das **Konzept** (DNA → RNA → Protein → Merkmal); molekulare Details von Replikation, Transkription und Translation sind nicht prüfungsrelevant.

**In diesem Kapitel lernst du:**
- das **Zentraldogma** (DNA → RNA → Protein) als Grundprinzip der Genexpression
- **Transkription** (DNA wird in RNA umgeschrieben) und **Translation** (RNA wird in Protein übersetzt)
- warum Gene den Phänotyp prägen (über Proteine)
- Begriffe DNA, RNA, Protein und Genexpression verknüpfen

---

## Zentraldogma

Das **Zentraldogma** der Molekularbiologie beschreibt den gerichteten Informationsfluss: **DNA → RNA → Protein**. Die DNA ist der **Speicher** der Information; die **RNA** (z. B. mRNA = Boten-RNA) ist die **Kopie**, die aus dem Zellkern ins Zytoplasma gelangt; das **Protein** ist das **Produkt**, das die Funktion ausübt (Enzym, Struktur, Signal). So wird ein **Gen** (DNA-Abschnitt) in ein **Protein** umgesetzt, das am Aufbau und an der Steuerung der Zelle mitwirkt und damit den **Phänotyp** mitprägt.

> **Merke:** DNA → (Transkription) → RNA → (Translation) → Protein. Genexpression = Umsetzung der genetischen Information in ein Produkt (Protein).

---

## Transkription und Translation (Konzept)

**Transkription:** Im Zellkern wird die DNA eines Gens in eine **RNA-Kopie** (mRNA) umgeschrieben. Die Basenfolge der DNA bestimmt die Basenfolge der RNA (A, U, G, C in RNA; U ersetzt T). **Translation:** Im Zytoplasma lesen **Ribosomen** die mRNA und bauen anhand des **genetischen Codes** (je 3 Basen = 1 Codon = 1 Aminosäure) das **Protein** aus Aminosäuren. So bestimmt die **Gensequenz** die **Proteinsequenz** und damit die Funktion des Proteins. Mutationen in der DNA können die Proteinsequenz oder -menge verändern und so den Phänotyp verändern (z. B. Erbkrankheiten).

> **Merke:** Transkription = DNA → RNA (im Kern). Translation = RNA → Protein (an Ribosomen). Genetischer Code: Codon (3 Basen) → Aminosäure.

---

## Zusammenhang mit Genetik und Vererbung

Die **Allele** eines Gens unterscheiden sich in ihrer **DNA-Sequenz** (oder Regulation). Dadurch entstehen unterschiedliche RNA- und Proteinvarianten → unterschiedlicher **Phänotyp**. Vererbung bedeutet: Die DNA (und damit die Allele) wird über Keimzellen weitergegeben; in der nächsten Generation wird sie wieder exprimiert (DNA → RNA → Protein) und prägt den Phänotyp. So schließt sich der Bogen von DNA, Gen, Chromosom und Meiose zur klassischen Genetik (Mendel, Erbgänge, Blutgruppen).

---

## MedAT-Fokus

**Zentral prüfungsrelevant:**
- **Zentraldogma:** DNA → RNA → Protein (Transkription, dann Translation).
- **Genexpression** = Umsetzung der genetischen Information in ein Produkt (Protein).
- Transkription = DNA wird in RNA umgeschrieben; Translation = RNA wird in Protein übersetzt (Ribosomen, genetischer Code).
- Zusammenhang: Gen (DNA) → Protein → Phänotyp; Allel-Unterschiede = Sequenz-/Regulationsunterschiede → unterschiedlicher Phänotyp.

**Häufige Prüfungsfragen:**
- In welche Richtung geht der Informationsfluss von DNA zu Protein?
- Was bedeutet Genexpression?
- Wo findet die Translation statt? (An Ribosomen, im Zytoplasma.)

**Typische Prüfungsfallen:**
- Transkription = DNA → RNA (nicht Translation). Translation = RNA → Protein.
- Genetische Information fließt von DNA zu Protein, nicht umgekehrt (Zentraldogma).

**Wichtige Begriffe & Definitionen:**
- Genexpression, Zentraldogma, Transkription, Translation, DNA, RNA, Protein, genetischer Code, Codon.

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
