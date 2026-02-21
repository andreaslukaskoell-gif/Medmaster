import type { Kapitel } from '../types';

export const bioKap6: Kapitel = {
  id: 'bio-kap6',
  title: "Molekulargenetik",
  subject: 'biologie',
  icon: '🔬',
  estimatedTime: '100 min',
  unterkapitel: [
    {
      id: 'bio-6-01',
      title: "DNA Struktur",
      content: `# DNA-Struktur und Replikation – Biologie Kapitel 6 (Molekulare Genetik)

**Priorität:** HOCH
**Geschätzte Lesezeit:** 15 Minuten
**Stichwortliste-Abdeckung:** 10/10 Stichwörter

---

## Einleitung

**DNA (Desoxyribonukleinsäure)** ist:
1. **Träger der genetischen Information** (Gene, Erbinformation)
2. **Molekulare Struktur:** Doppelhelix (Watson & Crick, 1953)
3. **Funktion:** Speicherung, Replikation, Expression (Transkription → Translation)

---

## Kerninhalt

### 1. ⭐ DNA-Struktur (Doppelhelix)

**Baustein:** **Nukleotid** = Phosphat + Zucker (Desoxyribose) + Base

**Basen:**

| Typ | Basen | Struktur |
|-----|-------|----------|
| **Purine** (2 Ringe) | **Adenin (A), Guanin (G)** | Größer (Doppelring) |
| **Pyrimidine** (1 Ring) | **Cytosin (C), Thymin (T)** | Kleiner (Einzelring) |

⭐ **Chargaff-Regeln (Basenpaarung):**
- **A = T** (Adenin paart mit Thymin, 2 Wasserstoffbrücken)
- **G ≡ C** (Guanin paart mit Cytosin, **3** Wasserstoffbrücken → **stärkere Bindung**)
- **A + G = C + T** (Purine = Pyrimidine)

**Watson-Crick-Modell (Doppelhelix):**

| Merkmal | Beschreibung |
|---------|--------------|
| **Doppelstrang** | 2 DNA-Stränge, antiparallel (5''→3'' und 3''→5'') |
| **Helix** | Rechtsgängige Spirale, 1 Windung = 10 Basenpaare, 3,4 nm |
| **Komplementär** | A-T, G-C (Basenpaarung) |
| **Antiparallel** | Ein Strang 5''→3'', anderer 3''→5'' (wichtig für Replikation!) |
| **Große/kleine Furche** | Zugänglichkeit für Proteine (z.B. Transkriptionsfaktoren) |

**Wichtig:**
- **5''-Ende:** Phosphatgruppe frei
- **3''-Ende:** OH-Gruppe (Hydroxylgruppe) frei → **DNA-Polymerase verlängert hier** (5''→3''-Richtung)

---

### 2. ⭐ DNA-Replikation (Verdopplung)

**Prinzip:** **Semikonservativ** (Watson & Crick, 1953; Meselson & Stahl, 1958)
- Jeder Tochterstrang = **1 alter Strang** (Matrize) + **1 neuer Strang**

**Ablauf:**

#### 2a. ⭐ Initiation (Start)

1. **Origin of Replication (Ori):** Startpunkt (Prokaryoten: 1× oriC, Eukaryoten: viele Oris)
2. **Helicase:** Entwindet Doppelhelix → **Replikationsgabel** (Y-förmig)
3. **Einzelstrang-bindende Proteine (SSB):** Stabilisieren Einzelstränge (verhindern Rückfaltung)
4. **Topoisomerase (Gyrase):** Entspannt Supercoiling (Überdrehung vor Replikationsgabel)

---

#### 2b. ⭐ Elongation (Verlängerung)

**DNA-Polymerase III** (Prokaryoten) bzw. **DNA-Polymerase δ/ε** (Eukaryoten):
- **Syntheserichtung:** **5''→3''** (Nukleotide werden an 3''-OH angefügt)
- **Matrize:** 3''→5'' (komplementär)
- **Benötigt:** Primer (RNA, ~10 Nukleotide, von **Primase** synthetisiert)

⭐ **Leitstrang (Leading Strand):**
- **Kontinuierliche Synthese** (5''→3'' in Richtung der Replikationsgabel)
- **1× Primer** → durchgehende Synthese

⭐ **Folgestrang (Lagging Strand):**
- **Diskontinuierliche Synthese** (5''→3'' **weg** von Replikationsgabel)
- **Okazaki-Fragmente** (~1.000–2.000 nt bei Prokaryoten, ~100–200 nt bei Eukaryoten)
- **Viele Primer** (für jedes Fragment)

**Wichtig:** DNA-Polymerase kann **nicht de novo** starten → **benötigt 3''-OH (Primer)**

---

#### 2c. ⭐ Termination (Abschluss)

**Prokaryoten:**
- **Ter-Sequenzen** (Termination): Replikationsgabeln treffen sich → Abschluss

**Eukaryoten:**
- **Telomerase** (Ribonukleoprotein): Verlängert **Telomere** (TTAGGG-Repeats am Chromosomenende)
- **Problem:** DNA-Polymerase kann letzten Primer nicht ersetzen → Telomer-Verkürzung bei jeder Teilung → **Seneszenz** (Alterung)
- **Telomerase aktiv in:** Keimbahn-Zellen, Stammzellen, **Krebszellen** (Immortalisierung)

**Weitere Schritte:**
1. **DNA-Polymerase I** (Prokaryoten) bzw. **RNase H + DNA-Polymerase δ** (Eukaryoten): Entfernt RNA-Primer, ersetzt mit DNA
2. **DNA-Ligase:** Verbindet Okazaki-Fragmente (Phosphodiesterbindung zwischen 3''-OH und 5''-Phosphat)

---

### 3. ⭐ Enzyme der Replikation

| Enzym | Funktion | Wichtig |
|-------|----------|---------|
| **Helicase** | Entwindet Doppelhelix | Öffnet Replikationsgabel |
| **Topoisomerase (Gyrase)** | Entspannt Supercoiling (Überdrehung) | Verhindert Knoten vor Replikationsgabel |
| **Primase** | Synthetisiert RNA-Primer (~10 nt) | DNA-Polymerase benötigt 3''-OH zum Starten |
| **DNA-Polymerase III (δ/ε)** | Hauptsynthese (5''→3''), Korrekturlesen (3''→5'' Exonuklease) | Leit- + Folgestrang |
| **DNA-Polymerase I** | Entfernt Primer, ersetzt mit DNA | Nur Prokaryoten (Eukaryoten: RNase H + Pol δ) |
| **DNA-Ligase** | Verbindet DNA-Fragmente (Okazaki) | Schließt Lücken (Phosphodiesterbindung) |
| **Telomerase** | Verlängert Telomere (TTAGGG) | Nur Eukaryoten (Keimbahn, Stammzellen, Krebszellen) |

**Wichtig:** DNA-Polymerase hat **3''→5'' Exonuklease-Aktivität** (Korrekturlesen, Proofreading) → Fehlerrate ~10⁻⁹ (nach Korrektur)

---

### 4. Prokaryotische vs. Eukaryotische Replikation

| Merkmal | Prokaryoten (E. coli) | Eukaryoten (Mensch) |
|---------|----------------------|---------------------|
| **Origins** | 1× (oriC) | Viele (1.000–10.000) |
| **Geschwindigkeit** | ~1.000 nt/s | ~50 nt/s (langsamer) |
| **Okazaki-Fragmente** | 1.000–2.000 nt | 100–200 nt (kürzer) |
| **DNA-Polymerase** | Pol III (Hauptsynthese), Pol I (Primer-Ersatz) | Pol δ (Folgestrang), Pol ε (Leitstrang), Pol α (Primase-Komplex) |
| **Telomere** | Zirkuläres Chromosom (keine Telomere) | Lineare Chromosomen → **Telomerase** (TTAGGG) |
| **Histone** | Nein (Nukleoid, keine Histone) | Ja (Chromatin, Nukleosomen) |

---

## 📌 Prüfungsfokus

1. **Basenpaarung:** A-T (2 H-Brücken), G≡C (3 H-Brücken, stärker), Chargaff-Regeln (A=T, G=C)
2. **Antiparallel:** Ein Strang 5''→3'', anderer 3''→5'' (wichtig für Replikation!)
3. **Semikonservativ:** Jeder Tochterstrang = 1 alter + 1 neuer Strang (Meselson & Stahl)
4. **Leitstrang:** Kontinuierlich (5''→3'' in Richtung Replikationsgabel), 1× Primer
5. **Folgestrang:** Diskontinuierlich (Okazaki-Fragmente, viele Primer), 5''→3'' weg von Gabel
6. **DNA-Polymerase:** Syntheserichtung 5''→3'', benötigt Primer (3''-OH), Korrekturlesen (3''→5'' Exonuklease)
7. **Telomerase:** Verlängert Telomere (TTAGGG), aktiv in Keimbahn, Stammzellen, Krebszellen (Immortalisierung)

---

## Merksätze

>>>> **Basenpaarung (Chargaff):** „A = T (2 H-Brücken), G ≡ C (3 H-Brücken, stärker!). Purine (A, G, 2 Ringe) paaren mit Pyrimidinen (C, T, 1 Ring). A + G = C + T (Purine = Pyrimidine)!"

>>>> **Replikation semikonservativ:** „Jeder Tochterstrang = 1 alter Strang (Matrize) + 1 neuer Strang. Meselson & Stahl (1958): N15-schwer + N14-leicht → Hybrid-DNA (1 schwer, 1 leicht). Antiparallel: 5''→3'' und 3''→5''!"

>>>> **Leit- vs. Folgestrang:** „Leitstrang (Leading): Kontinuierlich (5''→3'' in Richtung Gabel), 1× Primer. Folgestrang (Lagging): Diskontinuierlich (Okazaki-Fragmente, 5''→3'' weg von Gabel), viele Primer. DNA-Polymerase nur 5''→3''!"

>>>> **Telomerase:** „Verlängert Telomere (TTAGGG-Repeats, Chromosomenenden). Aktiv in Keimbahn, Stammzellen, Krebszellen (Immortalisierung!). Ohne Telomerase → Telomer-Verkürzung → Seneszenz (Alterung, Hayflick-Limit ~50 Teilungen)!"

---

**Navigation:**
← [Zurück: Bio Kap 5 UK07 – Mutationen](../Bio_Kap5_UK07_Mutationen.md) | [Weiter: Bio Kap 6 UK02 – Transkription](Bio_Kap6_UK02_Transkription.md) →
`,
      lernziele: [],
      sections: [],
      diagram: 'dna-helix',

      merksätze: [],
      selfTest: [
        {
          question: "In einem DNA-Doppelstrang beträgt der Anteil von Adenin (A) **30%**. Wie hoch ist der Anteil von Cytosin (C) gemäß den Chargaff-Regeln?",
          options: [
          "30%, da A = C nach den Chargaff-Regeln",
          "20%, da A = T = 30%, Rest (40%) = G + C, also C = 20%",
          "15%, da der Anteil von Pyrimidinen immer geringer ist als der von Purinen",
          "40%, da C mit G paart und G die häufigste Base ist",
          "70%, da C den Rest der Basen ausmacht (100% - 30% A = 70%)"
          ],
          correctIndex: 1,
          explanation: "**Chargaff-Regeln:** **A = T** (Adenin paart mit Thymin), **G = C** (Guanin paart mit Cytosin). Wenn **A = 30%** → **T = 30%**. Rest: 100% - 60% = **40%** für G + C. Da **G = C** → **C = 20%, G = 20%**. Wichtig: **A = T**, **G = C**, **A + G = C + T** (Purine = Pyrimidine). G≡C hat 3 H-Brücken (stärker als A-T mit 2 H-Brücken).",
          hints: [
            "Laut Chargaff-Regeln paart A immer mit T und G immer mit C — daher müssen deren Prozentanteile jeweils gleich sein.",
            "Berechne zuerst A + T (= 60 %), dann teile den Rest gleichmäßig auf G und C auf.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage zur **antiparallelen Struktur** der DNA-Doppelhelix ist korrekt?",
          options: [
          "Beide DNA-Stränge verlaufen in dieselbe Richtung (5'→3' parallel zueinander)",
          "Ein Strang verläuft 5'→3', der komplementäre Strang 3'→5' (antiparallel)",
          "Die antiparallele Struktur bedeutet, dass Purine mit Pyrimidinen paaren (A-T, G-C)",
          "DNA-Polymerase kann beide Stränge in dieselbe Richtung synthetisieren, da sie parallel sind",
          "Antiparallel bedeutet, dass DNA und RNA in entgegengesetzten Richtungen synthetisiert werden"
          ],
          correctIndex: 1,
          explanation: "**Antiparallel:** Die beiden DNA-Stränge verlaufen in **entgegengesetzten Richtungen**. Ein Strang **5'→3'** (5'-Phosphat → 3'-OH), der komplementäre Strang **3'→5'**. Dies ist **entscheidend für die Replikation**, da DNA-Polymerase nur in **5'→3'-Richtung** synthetisieren kann → Leitstrang (kontinuierlich) vs. Folgestrang (diskontinuierlich, Okazaki-Fragmente). Wichtig: **5'-Ende** = Phosphat, **3'-Ende** = OH-Gruppe!",
          hints: [
            "Das 5'-Ende eines DNA-Strangs trägt eine freie Phosphatgruppe, das 3'-Ende eine freie OH-Gruppe — beide Stränge liegen einander gegenüber.",
            "DNA-Polymerase verlängert ausschließlich in 5'→3'-Richtung — überlege, was das für die Synthese beider Stränge bedeutet.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Das Meselson-Stahl-Experiment (1958) bewies, dass die DNA-Replikation **semikonservativ** ist. Was bedeutet \"semikonservativ\"?",
          options: [
          "Beide Tochterstränge bestehen aus komplett neu synthetisierter DNA (konservativ)",
          "Jeder Tochterstrang enthält einen alten (Matrize) und einen neuen DNA-Strang",
          "Die DNA wird nur teilweise repliziert, der Rest bleibt unverändert (partiell konservativ)",
          "Alte DNA-Stränge werden komplett abgebaut und durch neue ersetzt (dispersiv)",
          "DNA-Replikation findet nur in der S-Phase des Zellzyklus statt (zeitlich konservativ)"
          ],
          correctIndex: 1,
          explanation: "**Semikonservativ:** Jeder Tochterstrang besteht aus **1 altem (parentalen) Strang** (Matrize) + **1 neu synthetisierten Strang**. **Meselson & Stahl (1958):** N15-schwere DNA → Replikation in N14-Medium → 1. Generation: Hybrid-DNA (1 schwer, 1 leicht) → bewies semikonservative Replikation. Alternativen: **Konservativ** (1 Doppelstrang alt, 1 komplett neu), **Dispersiv** (alte + neue Abschnitte gemischt). Wichtig: **Semikonservativ** ist korrekt!",
          hints: [
            "'Semi' bedeutet 'halb' — überlege, welcher Teil des Tochtermoleküls erhalten bleibt und welcher neu gebildet wird.",
            "Im Meselson-Stahl-Experiment zeigte sich nach einer Replikationsrunde ausschließlich Hybrid-DNA (mittlere Dichte) — was sagt das über den Verbleib der alten Stränge aus?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Während der DNA-Replikation wird der **Leitstrang (Leading Strand)** kontinuierlich, der **Folgestrang (Lagging Strand)** diskontinuierlich synthetisiert. Welche Aussage ist korrekt?",
          options: [
          "Der Leitstrang wird 3'→5' synthetisiert, der Folgestrang 5'→3'",
          "Der Leitstrang benötigt viele RNA-Primer, der Folgestrang nur einen Primer",
          "Der Leitstrang wird in Richtung der Replikationsgabel synthetisiert (5'→3'), der Folgestrang weg von der Gabel (5'→3', Okazaki-Fragmente)",
          "Beide Stränge werden kontinuierlich synthetisiert, da DNA-Polymerase in beide Richtungen arbeiten kann",
          "Der Folgestrang wird von DNA-Polymerase I synthetisiert, der Leitstrang von DNA-Polymerase III"
          ],
          correctIndex: 2,
          explanation: "**Leitstrang (Leading Strand):** **Kontinuierliche Synthese** in **5'→3'-Richtung** (in Richtung der Replikationsgabel), benötigt **1× RNA-Primer**. **Folgestrang (Lagging Strand):** **Diskontinuierliche Synthese** (5'→3' **weg** von der Gabel) → **Okazaki-Fragmente** (~100–200 nt bei Eukaryoten), benötigt **viele Primer** (für jedes Fragment). **DNA-Polymerase kann nur 5'→3'** synthetisieren → Folgestrang = \"rückwärts\" in Fragmenten. DNA-Ligase verbindet Fragmente.",
          hints: [
            "DNA-Polymerase kann nur in 5'→3'-Richtung synthetisieren — betrachte, welcher Strang der Replikationsgabel entgegenläuft.",
            "Der Folgestrang wird in kleinen Fragmenten synthetisiert, die jedes Mal einen neuen Primer brauchen — diese heißen Okazaki-Fragmente.",
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: "DNA-Polymerase hat **3'→5' Exonuklease-Aktivität** (Korrekturlesen, Proofreading). Welche Funktion hat diese Aktivität?",
          options: [
          "Entfernung von RNA-Primern nach der Synthese (Ersatz durch DNA)",
          "Korrektur von fehlerhaft eingebauten Nukleotiden während der Replikation (Fehlerrate ↓ auf ~10⁻⁹)",
          "Synthese von DNA in 3'→5'-Richtung (zusätzlich zur 5'→3'-Synthese)",
          "Entspannung von Supercoiling (Überdrehung) vor der Replikationsgabel",
          "Verlängerung der Telomere (TTAGGG-Repeats) an Chromosomenenden"
          ],
          correctIndex: 1,
          explanation: "**3'→5' Exonuklease-Aktivität (Proofreading):** DNA-Polymerase **erkennt fehlerhaft eingebaute Nukleotide** und **entfernt** sie (3'→5'-Richtung, rückwärts), dann **korrekt wieder eingefügt** (5'→3'-Synthese). **Fehlerrate:** Ohne Korrektur ~10⁻⁶, **mit Proofreading ~10⁻⁹** (sehr niedrig!). Wichtig: **Synthese 5'→3'**, **Korrektur 3'→5'**. RNA-Primer-Entfernung: DNA-Pol I (Prokaryoten) oder RNase H (Eukaryoten), nicht 3'→5' Exonuklease!",
          hints: [
            "'Exonuklease' schneidet Nukleotide vom Ende eines Strangs ab — hier rückwärts (3'→5'), also gegen die Syntheserichtung.",
            "Stell dir vor, die Polymerase bemerkt einen falschen Baustein und macht einen Schritt zurück, um ihn zu entfernen — was verbessert das?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "**Telomerase** ist ein Ribonukleoprotein-Enzym, das Telomere (TTAGGG-Repeats) an Chromosomenenden verlängert. In welchen Zellen ist Telomerase **aktiv**, und welche klinische Bedeutung hat dies?",
          options: [
          "In allen somatischen Zellen, um DNA-Schäden zu reparieren und Alterung zu verhindern",
          "In Keimbahn-Zellen, Stammzellen und Krebszellen (Immortalisierung); inaktiv in den meisten somatischen Zellen",
          "Nur in Prokaryoten, da Eukaryoten keine Telomere benötigen (zirkuläre Chromosomen)",
          "In allen Zellen während der S-Phase, um DNA-Replikation zu ermöglichen",
          "Telomerase ist nur in Bakterien aktiv, da diese keine DNA-Polymerase I haben"
          ],
          correctIndex: 1,
          explanation: "**Telomerase aktiv in:** **Keimbahn-Zellen** (Spermien, Eizellen), **Stammzellen** (hämatopoetische, embryonale), **Krebszellen** (Immortalisierung, ~85–90% der Tumoren). **Inaktiv in:** Meisten somatischen Zellen → **Telomer-Verkürzung** bei jeder Teilung → **Seneszenz** (Hayflick-Limit ~50 Teilungen). **Klinisch:** Krebszellen reaktivieren Telomerase → unbegrenzte Teilung (Immortalisierung) → Therapieziel (Telomerase-Inhibitoren). Wichtig: **Telomerase = Krebs-Marker** (Diagnostik/Therapie)!",
          hints: [
            "Telomere werden bei jeder Replikation kürzer — welche Zellen müssen sich dauerhaft teilen und dürfen daher nicht seneszent werden?",
            "Krebszellen teilen sich unbegrenzt — überlege, welches Enzym sie reaktivieren müssen, um die Telomere nicht zu verlieren.",
          ],
          difficulty: 2,
          tags: [],
        }
      ],
    },
    {
      id: 'bio-6-02',
      title: "Transkription",
      content: `# Transkription und RNA-Prozessierung – Biologie Kapitel 6 (Molekulare Genetik)

**Priorität:** HOCH
**Geschätzte Lesezeit:** 16 Minuten
**Stichwortliste-Abdeckung:** 11/11 Stichwörter

---

## Einleitung

**Transkription** = Synthese von **RNA** aus **DNA-Matrize**

**Zentral** für Genexpression:
1. **DNA → RNA** (Transkription)
2. **RNA → Protein** (Translation)

**RNA-Typen:**
- **mRNA** (messenger RNA): Codiert Proteine
- **rRNA** (ribosomale RNA): Bestandteil der Ribosomen
- **tRNA** (Transfer-RNA): Bringt Aminosäuren zur Translation

---

## Kerninhalt

### 1. ⭐ Grundprinzip der Transkription

**Unterschiede DNA ↔ RNA:**

| Merkmal | DNA | RNA |
|---------|-----|-----|
| **Zucker** | Desoxyribose (ohne OH an 2''-Position) | **Ribose** (mit OH an 2''-Position) |
| **Basen** | A, T, G, C | A, **U** (Uracil statt Thymin), G, C |
| **Stränge** | Doppelstrang (Doppelhelix) | **Einzelstrang** (kann Sekundärstrukturen bilden) |
| **Stabilität** | Sehr stabil (2''-H statt OH) | Weniger stabil (2''-OH anfällig für Hydrolyse) |

**Basenpaarung bei Transkription:**
- DNA-Matrize: **T → A** (RNA)
- DNA-Matrize: **A → U** (RNA, nicht T!)
- DNA-Matrize: **G → C** (RNA)
- DNA-Matrize: **C → G** (RNA)

---

### 2. ⭐ Ablauf der Transkription

#### 2a. ⭐ Initiation (Start)

**Promotor:** DNA-Sequenz, an die **RNA-Polymerase** bindet (stromaufwärts vom Gen)

**Prokaryoten (E. coli):**
- **-10-Box (Pribnow-Box):** TATAAT (~10 Basenpaare vor Transkriptionsstart)
- **-35-Box:** TTGACA (~35 Basenpaare vor Start)
- **Sigma-Faktor (σ):** Hilft RNA-Polymerase (Holoenzym), Promotor zu erkennen

**Eukaryoten:**
- **TATA-Box:** TATAAA (~25 bp vor Start, ähnlich Pribnow-Box)
- **Transkriptionsfaktoren (TFs):**
  - **TFIID:** Bindet an TATA-Box (enthält **TBP** = TATA-Binding Protein)
  - **TFIIB, TFIIE, TFIIF, TFIIH:** Weitere TFs rekrutieren **RNA-Polymerase II**
- **Enhancer/Silencer:** Regulatorische Elemente (können weit entfernt sein)

**RNA-Polymerasen (Eukaryoten):**
- **RNA-Pol I:** rRNA (18S, 28S, 5,8S)
- **RNA-Pol II:** **mRNA**, miRNA, lncRNA (meiste Genexpression)
- **RNA-Pol III:** tRNA, 5S rRNA, U6 snRNA

---

#### 2b. Elongation (Verlängerung)

**RNA-Polymerase:**
- **Syntheserichtung:** **5''→3''** (wie DNA-Polymerase)
- **Matrize:** DNA-Strang (3''→5'', **Template Strand/Antisense Strand**)
- **Benötigt KEINEN Primer** (kann de novo starten, Unterschied zu DNA-Polymerase!)
- **Transkriptionsblase:** RNA-Polymerase öffnet DNA (~10–20 bp), RNA verlängert sich

**Codogener Strang vs. Matrize:**
- **Template Strand (Antisense):** 3''→5'', DNA-Matrize für RNA
- **Coding Strand (Sense):** 5''→3'', **gleiche Sequenz wie mRNA** (außer T → U)

**Beispiel:**
- **Coding Strand:** 5''-ATG-TCC-GAA-3''
- **Template Strand:** 3''-TAC-AGG-CTT-5''
- **mRNA:** 5''-AUG-UCC-GAA-3'' (wie Coding Strand, T → U)

---

#### 2c. ⭐ Termination (Abschluss)

**Prokaryoten:**
- **Rho-unabhängig:** GC-reiche Sequenz (Palindrom) → Haarnadelstruktur (Stem-Loop) → RNA-Polymerase löst sich ab
- **Rho-abhängig:** Rho-Protein (Helicase) löst RNA-DNA-Hybrid ab

**Eukaryoten:**
- **Polyadenylierung-Signal:** AAUAAA (~20 nt vor Ende)
- **Spaltung** + **Poly-A-Tail** (~200 Adenine) wird angefügt (Post-Transkription)
- RNA-Polymerase II wird freigesetzt

---

### 3. ⭐ RNA-Prozessierung (nur Eukaryoten!)

**Primärtranskript (pre-mRNA)** → **reife mRNA** (3 Schritte):

#### 3a. ⭐ 5''-Capping

**Prozess:**
- **7-Methylguanosin-Kappe** (m7G) wird an **5''-Ende** angefügt (während Transkription)
- **Funktion:**
  - Schutz vor Abbau (Exonukleasen)
  - Erkennung durch Ribosom (Translation)
  - Transport aus Kern (Export-Signal)

---

#### 3b. ⭐ 3''-Polyadenylierung

**Prozess:**
- **Poly-A-Tail** (~200 Adenine) wird an **3''-Ende** angefügt (nach AAUAAA-Signal)
- **Funktion:**
  - Schutz vor Abbau
  - Translation-Effizienz ↑
  - mRNA-Stabilität

---

#### 3c. ⭐ Splicing (Spleißen)

**Problem:** Eukaryotische Gene haben **Introns** (nicht-codierende Sequenzen) + **Exons** (codierende Sequenzen)

**Prozess:**
- **Spliceosom** (Ribonukleoprotein-Komplex: U1, U2, U4, U5, U6 snRNPs) entfernt **Introns**
- **Exons** werden verbunden → reife mRNA (nur Exons)

**Splice-Stellen:**
- **5''-Splice-Stelle:** GU (Intron-Beginn)
- **Branch Point:** Adenin (A, innerhalb Intron)
- **3''-Splice-Stelle:** AG (Intron-Ende)

**Beispiel:**
- **pre-mRNA:** Exon 1 - Intron - Exon 2 - Intron - Exon 3
- **Reife mRNA:** Exon 1 - Exon 2 - Exon 3 (Introns entfernt)

⭐ **Alternatives Splicing:**
- **Verschiedene Kombinationen** von Exons → **mehrere Proteine** von 1 Gen
- **Beispiel:** Titin-Gen (TTN): 363 Exons → viele Isoformen (Muskel-Varianten)
- **Bedeutung:** Proteom-Diversität (Mensch: ~20.000 Gene → >100.000 Proteine)

---

### 4. Prokaryoten vs. Eukaryoten

| Merkmal | Prokaryoten | Eukaryoten |
|---------|-------------|------------|
| **RNA-Polymerase** | 1× (alle Gene) | 3× (Pol I, II, III) |
| **Promotor** | -10-Box (Pribnow), -35-Box, Sigma-Faktor | TATA-Box, Transkriptionsfaktoren (TFIID, etc.) |
| **Introns** | **Keine** | Ja (Introns + Exons) |
| **Splicing** | **Nein** | Ja (Spliceosom) |
| **5''-Capping** | **Nein** | Ja (m7G-Kappe) |
| **Poly-A-Tail** | **Nein** | Ja (~200 A) |
| **Translation** | **Gekoppelt** (während Transkription, Polysom) | **Getrennt** (Transkription in Kern, Translation in Cytoplasma) |

**Wichtig:** Prokaryoten haben **keine RNA-Prozessierung** (keine Introns, keine Capping/Poly-A)!

---

### 5. Klinische Relevanz

#### 5a. β-Thalassämie (Splicing-Defekt)

**Gen:** β-Globin (HBB)
- **Mutation:** Splice-Stelle-Mutation (z.B. IVS1-110 G→A) → **Intron nicht entfernt** → fehlerhaftes β-Globin
- **Folge:** β-Globin ↓ oder fehlt → Anämie (Hämoglobin ↓)

**Vererbung:** Autosomal-rezessiv

---

#### 5a. α-Amanitin (Transkriptions-Inhibitor)

**Quelle:** Grüner Knollenblätterpilz (*Amanita phalloides*)
- **Wirkung:** **Hemmt RNA-Polymerase II** (mRNA-Synthese ↓) → Proteinbiosynthese ↓ → Lebernekrose, Nierenversagen
- **Klinisch:** Tödlich (Mortalität ~20–30%), keine spezifische Therapie (Lebertransplantation)

---

## 📌 Prüfungsfokus

1. **RNA vs. DNA:** RNA = Ribose (2''-OH), Uracil (statt Thymin), Einzelstrang; DNA = Desoxyribose, Thymin, Doppelstrang
2. **Promotor:** Prokaryoten (-10 Pribnow, -35, Sigma-Faktor), Eukaryoten (TATA-Box, TFIID/TBP, RNA-Pol II)
3. **RNA-Polymerase:** Syntheserichtung 5''→3'', benötigt KEINEN Primer (DNA-Pol benötigt Primer!)
4. **Template Strand:** 3''→5'' DNA-Matrize → RNA 5''→3''; Coding Strand = gleiche Sequenz wie mRNA (T → U)
5. **5''-Capping:** m7G-Kappe (Schutz, Ribosom-Erkennung, Export)
6. **Poly-A-Tail:** ~200 A (Schutz, Stabilität)
7. **Splicing:** Spliceosom entfernt Introns (GU...AG), Exons verbunden, alternatives Splicing → Proteom-Diversität
8. **Prokaryoten:** Keine Introns, keine RNA-Prozessierung, gekoppelte Transkription/Translation

---

## Merksätze

>>>> **RNA vs. DNA:** „RNA: Ribose (2''-OH), Uracil (U statt T), Einzelstrang. DNA: Desoxyribose, Thymin (T), Doppelstrang. Basenpaarung: A-U (RNA), A-T (DNA), G-C (beide). RNA weniger stabil (2''-OH anfällig für Hydrolyse)!"

>>>> **Transkription (Eukaryoten):** „RNA-Pol II (mRNA): TATA-Box (Promotor), TFIID (TBP bindet TATA), weitere TFs (TFIIB, E, F, H) rekrutieren RNA-Pol II. Syntheserichtung 5''→3'', KEIN Primer! Template Strand 3''→5'' (Matrize), Coding Strand 5''→3'' (= mRNA, T → U)!"

>>>> **RNA-Prozessierung (Eukaryoten):** „3 Schritte: (1) 5''-Capping (m7G-Kappe, Schutz + Ribosom-Erkennung), (2) 3''-Poly-A-Tail (~200 A, Stabilität), (3) Splicing (Spliceosom entfernt Introns GU...AG, Exons verbunden). Alternatives Splicing → viele Proteine von 1 Gen!"

>>>> **Prokaryoten vs. Eukaryoten:** „Prokaryoten: KEINE Introns, KEINE RNA-Prozessierung (Capping/Poly-A/Splicing), gekoppelte Transkription/Translation (Polysom). Eukaryoten: Introns + Exons, RNA-Prozessierung (Capping/Poly-A/Splicing), getrennte Transkription (Kern) + Translation (Cytoplasma)!"

---

**Navigation:**
← [Zurück: Bio Kap 6 UK01 – DNA-Struktur und Replikation](Bio_Kap6_UK01_DNA_Struktur.md) | [Weiter: Bio Kap 6 UK03 – Translation](Bio_Kap6_UK03_Translation.md) →
`,
      lernziele: [],
      sections: [],
      diagram: 'transcription-translation',

      merksätze: [],
      selfTest: [
        {
          question: "Welcher der folgenden Unterschiede zwischen **RNA** und **DNA** ist korrekt?",
          options: [
          "RNA enthält Thymin (T), DNA enthält Uracil (U) als Pyrimidin-Base",
          "RNA enthält Ribose (mit 2'-OH), DNA enthält Desoxyribose (ohne 2'-OH, nur H)",
          "RNA ist immer doppelsträngig (Doppelhelix), DNA ist einzelsträngig",
          "RNA ist stabiler als DNA, da die 2'-OH-Gruppe vor Hydrolyse schützt",
          "RNA und DNA verwenden beide Thymin (T) als Pyrimidin-Base"
          ],
          correctIndex: 1,
          explanation: "**RNA vs. DNA:** **RNA** = **Ribose** (Zucker mit 2'-OH), **Uracil (U)** statt Thymin, **Einzelstrang**. **DNA** = **Desoxyribose** (ohne 2'-OH, nur H an 2'-Position), **Thymin (T)**, **Doppelstrang**. Die **2'-OH-Gruppe** in RNA macht sie **weniger stabil** (anfällig für Hydrolyse), nicht stabiler! Basenpaarung: A-U (RNA), A-T (DNA), G-C (beide). Wichtig: **U in RNA**, **T in DNA**!",
          hints: [
            "Der Zucker in RNA heißt Ribose (daher der Name) — was unterscheidet ihn strukturell von der Desoxyribose der DNA?",
            "Denke an die vier Unterschiede: Zucker, Base (T vs. U), Stranganzahl und chemische Stabilität.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "RNA-Polymerase synthetisiert RNA während der Transkription. Welche Aussage über RNA-Polymerase ist korrekt?",
          options: [
          "RNA-Polymerase benötigt einen RNA-Primer (wie DNA-Polymerase) zum Starten der Synthese",
          "RNA-Polymerase kann de novo (ohne Primer) starten und synthetisiert in 5'→3'-Richtung",
          "RNA-Polymerase synthetisiert in 3'→5'-Richtung, während DNA-Polymerase in 5'→3'-Richtung arbeitet",
          "RNA-Polymerase kann nur Okazaki-Fragmente synthetisieren, nicht kontinuierlich",
          "RNA-Polymerase benötigt Telomerase zur Verlängerung von RNA-Enden"
          ],
          correctIndex: 1,
          explanation: "**RNA-Polymerase:** Kann **de novo** (ohne Primer) starten (Unterschied zu DNA-Polymerase, die Primer benötigt!). **Syntheserichtung: 5'→3'** (wie DNA-Pol). Die DNA-Matrize (**Template Strand**) wird in **3'→5'-Richtung** gelesen → RNA entsteht 5'→3'. **Wichtig:** DNA-Pol benötigt **Primer** (RNA, ~10 nt), RNA-Pol **nicht**! RNA-Pol öffnet DNA-Doppelhelix (Transkriptionsblase) und verlängert RNA kontinuierlich.",
          hints: [
            "Welches Enzym benötigt einen Primer zum Starten — RNA-Polymerase oder DNA-Polymerase? Das ist der Schlüsselunterschied.",
            "Beide Polymerasen arbeiten in derselben Richtung (5'→3') — prüfe jede Antwort auf Richtungsangaben.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Bei der Transkription wird der **Template Strand (Antisense Strand)** als Matrize verwendet. Welche Aussage ist korrekt?",
          options: [
          "Der Template Strand verläuft 5'→3' und wird von RNA-Polymerase in derselben Richtung gelesen",
          "Der Template Strand verläuft 3'→5' und wird als Matrize verwendet; die RNA wird 5'→3' synthetisiert",
          "Der Coding Strand (Sense Strand) wird als Matrize verwendet, nicht der Template Strand",
          "Template Strand und Coding Strand haben identische Sequenzen (außer T → U)",
          "Der Template Strand codiert direkt für Proteine, der Coding Strand ist nicht-codierend"
          ],
          correctIndex: 1,
          explanation: "**Template Strand (Antisense):** Verläuft **3'→5'**, wird als **DNA-Matrize** verwendet → RNA wird **5'→3'** synthetisiert (komplementär + antiparallel). **Coding Strand (Sense):** Verläuft **5'→3'**, hat **gleiche Sequenz wie mRNA** (außer T → U), wird **nicht** als Matrize verwendet. **Beispiel:** Coding 5'-ATG-TCC-3', Template 3'-TAC-AGG-5', mRNA 5'-AUG-UCC-3' (wie Coding, T → U). Wichtig: **Template = Matrize**, **Coding = wie mRNA**!",
          hints: [
            "RNA-Polymerase liest die Matrize in 3'→5'-Richtung und baut die RNA in 5'→3'-Richtung — welcher Strang muss also 3'→5' verlaufen?",
            "Der Coding Strand hat die gleiche Sequenz wie die mRNA (nur T statt U) — er ist demnach nicht die Matrize, sondern der 'Informationsstrang'.",
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Bei Eukaryoten bindet der Transkriptionsfaktor **TFIID** an die **TATA-Box** im Promotor. Welche Aussage ist korrekt?",
          options: [
          "TFIID bindet an die -10-Box (Pribnow-Box) und rekrutiert den Sigma-Faktor bei Prokaryoten",
          "TFIID enthält TBP (TATA-Binding Protein) und bindet an die TATA-Box (~25 bp vor Transkriptionsstart)",
          "TFIID ist eine RNA-Polymerase, die mRNA direkt synthetisiert (ohne weitere Faktoren)",
          "TFIID entfernt Introns während der Transkription (Splicing-Funktion)",
          "TFIID fügt die Poly-A-Tail an das 3'-Ende der mRNA an (Polyadenylierung)"
          ],
          correctIndex: 1,
          explanation: "**TFIID (Transkriptionsfaktor II D):** Bindet an **TATA-Box** (TATAAA, ~25 bp vor Transkriptionsstart) über **TBP** (TATA-Binding Protein). Weitere TFs (TFIIB, TFIIE, TFIIF, TFIIH) rekrutieren **RNA-Polymerase II** (mRNA-Synthese). **Prokaryoten:** -10-Box (Pribnow-Box, TATAAT), -35-Box, **Sigma-Faktor** (σ) hilft RNA-Pol, Promotor zu erkennen (nicht TFIID!). Wichtig: **TFIID = Eukaryoten**, **Sigma-Faktor = Prokaryoten**!",
          hints: [
            "TFIID ist ein eukaryotischer Transkriptionsfaktor — für Prokaryoten gibt es das analoge Sigma-Faktor-System.",
            "TBP (TATA-Binding Protein) ist eine Untereinheit von TFIID — es erkennt die TATA-Box und leitet die Bildung des Präinitiationskomplexes ein.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Während der **RNA-Prozessierung** bei Eukaryoten werden drei Modifikationen vorgenommen: 5'-Capping, 3'-Polyadenylierung und Splicing. Welche Aussage zur **5'-Capping** ist korrekt?",
          options: [
          "5'-Capping fügt ~200 Adenine (Poly-A-Tail) an das 5'-Ende der mRNA an",
          "5'-Capping fügt eine 7-Methylguanosin-Kappe (m7G) an das 5'-Ende an, was Schutz vor Abbau und Ribosom-Erkennung bietet",
          "5'-Capping entfernt Introns aus der pre-mRNA (Splicing-Funktion)",
          "5'-Capping findet nur bei tRNA statt, nicht bei mRNA",
          "5'-Capping ist ein prokaryotischer Prozess, der bei Eukaryoten nicht vorkommt"
          ],
          correctIndex: 1,
          explanation: "**5'-Capping (nur Eukaryoten):** **7-Methylguanosin-Kappe (m7G)** wird an **5'-Ende** der mRNA angefügt (während Transkription). **Funktionen:** (1) **Schutz vor Abbau** (Exonukleasen), (2) **Ribosom-Erkennung** (Translation-Initiation), (3) **Kern-Export** (Transport-Signal). **3'-Polyadenylierung:** ~200 Adenine (Poly-A-Tail) an **3'-Ende** (nicht 5'!). **Splicing:** Entfernt Introns. Wichtig: **Capping = 5'-Ende**, **Poly-A = 3'-Ende**, **nur Eukaryoten**!",
          hints: [
            "Die Kappe sitzt am 5'-Ende der mRNA — denke an ihre drei Schutz- und Signalfunktionen.",
            "Unterscheide 5'-Capping (m7G-Kappe, Schutz/Erkennung) von 3'-Polyadenylierung (Poly-A-Schwanz) — beides sind verschiedene Enden!",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "**Splicing** bei Eukaryoten entfernt Introns aus der pre-mRNA. Welche Aussage zum Splicing ist korrekt?",
          options: [
          "Introns sind codierende Sequenzen, Exons sind nicht-codierend; Splicing entfernt Exons",
          "Das Spliceosom (snRNPs: U1, U2, U4, U5, U6) entfernt Introns (GU...AG) und verbindet Exons",
          "Prokaryoten haben Introns und verwenden das Spliceosom zur RNA-Prozessierung",
          "Alternatives Splicing führt immer zu einem einzigen Protein pro Gen (keine Diversität)",
          "Splicing findet während der Translation im Cytoplasma statt, nicht im Zellkern"
          ],
          correctIndex: 1,
          explanation: "**Splicing (nur Eukaryoten):** **Spliceosom** (Ribonukleoprotein-Komplex: U1, U2, U4, U5, U6 snRNPs) erkennt **Splice-Stellen** (5'-GU, Branch Point A, 3'-AG) und entfernt **Introns** (nicht-codierend). **Exons** (codierend) werden verbunden → reife mRNA. **Alternatives Splicing:** Verschiedene Exon-Kombinationen → **viele Proteine von 1 Gen** (Proteom-Diversität, Mensch: ~20.000 Gene → >100.000 Proteine). **Prokaryoten:** KEINE Introns, KEIN Splicing! Splicing findet im **Kern** statt, nicht Cytoplasma.",
          hints: [
            "Merkhilfe: Introns werden 'herausgespleißt' (entfernt), Exons werden 'exprimiert' (behalten) — daher die Namen.",
            "Das Spliceosom erkennt die Konsensussequenzen GU am Intronbeginn und AG am Intronende — was bedeutet das für die Häufigkeit dieser Dinukleotide?",
          ],
          difficulty: 2,
          tags: [],
        }
      ],
    },
    {
      id: 'bio-6-03',
      title: "Translation",
      content: `# Translation (Proteinbiosynthese) – Biologie Kapitel 6 (Molekulare Genetik)

**Priorität:** HOCH
**Geschätzte Lesezeit:** 17 Minuten
**Stichwortliste-Abdeckung:** 12/12 Stichwörter

---

## Einleitung

**Translation** = Synthese von **Proteinen** aus **mRNA**

**Zentral** für Genexpression:
1. **DNA → RNA** (Transkription)
2. **RNA → Protein** (Translation)

**Ort:** **Ribosomen** (Cytoplasma, raues ER)

---

## Kerninhalt

### 1. ⭐ Genetischer Code

**Codon** = 3 Nukleotide (Triplett) → 1 Aminosäure

⭐ **Eigenschaften:**

| Eigenschaft | Beschreibung |
|-------------|--------------|
| **Triplett-Code** | 3 Basen = 1 Codon → 1 Aminosäure |
| **Universell** | Gleicher Code in fast allen Organismen (Ausnahmen: Mitochondrien, einige Protozoen) |
| **Degeneriert** | **Mehrere Codons** → **1 Aminosäure** (z.B. Leucin: 6 Codons UUA, UUG, CUU, CUC, CUA, CUG) |
| **Nicht-überlappend** | Jedes Nukleotid gehört zu genau 1 Codon (keine Überlappung) |
| **Kommafrei** | Keine Pausen zwischen Codons (durchgehend gelesen) |

**Start-Codon:**
- **AUG** (Methionin, Met) → **Translations-Start** (1. Aminosäure)

**Stopp-Codons:**
- **UAA, UAG, UGA** (keine Aminosäure, **Nonsense-Codons**) → Translation endet

**Wichtig:** **64 Codons** (4³) → **20 Aminosäuren** + 3 Stopp → Degeneration (viele Codons pro Aminosäure)

---

### 2. ⭐ Wobble-Hypothese (Wobble Base Pairing)

**Problem:** 61 codierende Codons, aber nur ~45 tRNAs (nicht 61!)

**Lösung (Crick, 1966):** **Wobble-Position** (3. Base des Codons, 1. Base des Anticodons)
- **Nicht-Watson-Crick-Paarung** möglich (z.B. G-U statt G-C)
- **1 tRNA** kann **mehrere Codons** erkennen (v.a. wenn 3. Base unterschiedlich)

**Beispiel:**
- **Codon:** UUU, UUC (beide codieren Phenylalanin, Phe)
- **Anticodon:** AAG (tRNA-Phe) paart mit UUU + UUC (Wobble: G-U möglich)

---

### 3. ⭐ tRNA (Transfer-RNA)

**Struktur:**
- **Kleeblatt-Struktur** (2D) → **L-förmig** (3D)
- **Anticodon-Arm:** 3 Basen (Anticodon, komplementär zum mRNA-Codon)
- **Akzeptor-Arm:** CCA-3''-Ende → Aminosäure wird hier gebunden (Aminoacyl-tRNA)
- **D-Arm, T-Arm:** Zusätzliche Loops (Dihydrouridin, Pseudouridin)

**Funktion:**
- **Bringt Aminosäure** zum Ribosom
- **Anticodon paart mit mRNA-Codon** → korrekte Aminosäure-Einbau

⭐ **Aminoacyl-tRNA-Synthetase:**
- **Enzym** (spezifisch für jede Aminosäure)
- **Belädt tRNA** mit passender Aminosäure (ATP-abhängig)
- **Fehlerrate:** ~10⁻⁴ (sehr niedrig, Korrektur-Mechanismus)

**Wichtig:** 1 Aminoacyl-tRNA-Synthetase pro Aminosäure (20 Enzyme), aber mehrere tRNAs pro Aminosäure (Wobble!)

---

### 4. ⭐ Ribosom

**Struktur:** 2 Untereinheiten (große + kleine)

**Prokaryoten (70S):**
- **Kleine Untereinheit:** 30S (16S rRNA + Proteine)
- **Große Untereinheit:** 50S (23S + 5S rRNA + Proteine)
- **S** = Svedberg (Sedimentationskoeffizient)

**Eukaryoten (80S):**
- **Kleine Untereinheit:** 40S (18S rRNA + Proteine)
- **Große Untereinheit:** 60S (28S + 5,8S + 5S rRNA + Proteine)

**Funktion:** Katalysiert Peptidbindung (Peptidyl-Transferase, rRNA-katalysiert = **Ribozym**)

⭐ **Bindungsstellen:**
- **A-Site (Aminoacyl):** Neue Aminoacyl-tRNA bindet hier
- **P-Site (Peptidyl):** tRNA mit wachsender Peptidkette
- **E-Site (Exit):** Entladene tRNA verlässt Ribosom

---

### 5. ⭐ Ablauf der Translation

#### 5a. ⭐ Initiation (Start)

**Prokaryoten:**
1. **Shine-Dalgarno-Sequenz** (AGGAGGU, ~10 bp vor AUG) → 16S rRNA erkennt, Ribosom bindet
2. **Initiator-tRNA:** fMet-tRNA (N-Formylmethionin, nur Prokaryoten) bindet an AUG (Start-Codon)
3. **Initiationsfaktoren (IF1, IF2, IF3):** Helfen Ribosom-Assemblierung

**Eukaryoten:**
1. **5''-Capping (m7G):** Ribosom erkennt Kappe, scannt mRNA bis zum **Start-AUG**
2. **Kozak-Sequenz:** GCCRCCAUGG (Konsensus-Sequenz um AUG) → optimale Translation
3. **Initiator-tRNA:** Met-tRNA (Methionin, **nicht** formyliert wie Prokaryoten)
4. **Initiationsfaktoren (eIF1, eIF2, eIF3, eIF4, etc.):** Helfen Ribosom-Rekrutierung

**Wichtig:** Prokaryoten = **fMet** (formyliert), Eukaryoten = **Met** (nicht formyliert)

---

#### 5b. Elongation (Verlängerung)

**Schritte:**

1. **Codon-Erkennung:** Aminoacyl-tRNA bindet an A-Site (passend zum Codon)
   - **Elongationsfaktor EF-Tu** (Prokaryoten) bzw. **eEF1A** (Eukaryoten): Bringt Aminoacyl-tRNA zur A-Site (GTP-abhängig)

2. **Peptidbindung:** **Peptidyl-Transferase** (rRNA-katalysiert, Ribozym) → Aminosäure von P-Site wird an A-Site-Aminosäure gebunden
   - **Peptidkette wächst** (jetzt an A-Site)

3. **Translokation:** Ribosom bewegt sich **1 Codon weiter** (5''→3'' auf mRNA)
   - **EF-G** (Prokaryoten) bzw. **eEF2** (Eukaryoten): Katalysiert Translokation (GTP-abhängig)
   - **tRNA-Bewegung:** A → P → E (entladene tRNA verlässt E-Site)

**Zykluszeit:** ~0,05 s pro Aminosäure (Prokaryoten schneller als Eukaryoten)

---

#### 5c. ⭐ Termination (Abschluss)

**Stopp-Codon** (UAA, UAG, UGA) erreicht A-Site:
- **Keine passende tRNA** (kein Anticodon für Stopp-Codons)
- **Release-Faktoren (RF):**
  - **Prokaryoten:** RF1 (UAA, UAG), RF2 (UAA, UGA), RF3 (GTP-abhängig, hilft RF1/2)
  - **Eukaryoten:** eRF1 (alle 3 Stopp-Codons), eRF3 (GTP-abhängig)

**Folge:**
- **Peptidyl-Transferase** hydrolysiert Bindung zwischen Peptid + tRNA (P-Site)
- **Protein freigesetzt**, Ribosom disassembliert (30S + 50S bzw. 40S + 60S)

---

### 6. Post-translationale Modifikation (PTM)

**Modifikationen nach Translation:**

| Modifikation | Beispiel | Funktion |
|--------------|----------|----------|
| **Faltung** | Chaperone (z.B. Hsp70, Hsp60) | Korrekte 3D-Struktur |
| **Glykosylierung** | N-Glykosylierung (Asn), O-Glykosylierung (Ser/Thr) | Stabilität, Zell-Erkennung |
| **Phosphorylierung** | Serin, Threonin, Tyrosin (Kinasen) | Signalübertragung, Regulation |
| **Acetylierung** | Histone (Lysin) | Gen-Regulation (Chromatin) |
| **Ubiquitinierung** | Ubiquitin-Tag → Proteasom | Protein-Abbau |
| **Proteolyse** | Insulin (Proinsulin → Insulin + C-Peptid) | Aktivierung, Reifung |

**Wichtig:** Viele Proteine sind **erst nach PTM funktional** (z.B. Insulin, Kollagen)

---

### 7. ⭐ Antibiotika (hemmen Translation)

**Ziel:** Prokaryotische Ribosomen (70S), **nicht** eukaryotische (80S) → selektive Toxizität

| Antibiotikum | Angriffspunkt | Wirkung |
|--------------|---------------|---------|
| **Tetracyclin** | 30S (kleine Untereinheit) | Blockiert Aminoacyl-tRNA-Bindung (A-Site) → Elongation ↓ |
| **Chloramphenicol** | 50S (große Untereinheit) | Hemmt Peptidyl-Transferase → Peptidbindung ↓ |
| **Erythromycin (Makrolid)** | 50S | Blockiert Translokation (Ribosom-Bewegung ↓) |
| **Streptomycin (Aminoglykosid)** | 30S | Fehlerhafte Codon-Erkennung → falsche Aminosäuren |

**Wichtig:** Mitochondrien haben **70S-Ribosomen** (prokaryotischen Ursprung) → Antibiotika können mitochondriale Translation hemmen (Nebenwirkung!)

---

## 📌 Prüfungsfokus

1. **Genetischer Code:** Triplett-Code (3 Basen → 1 AS), degeneriert (viele Codons → 1 AS), universell, Start-Codon AUG (Met), Stopp-Codons UAA/UAG/UGA
2. **Wobble-Hypothese:** 3. Base des Codons (1. Base des Anticodons) → Wobble-Paarung (z.B. G-U), 1 tRNA für mehrere Codons
3. **tRNA:** Kleeblatt-Struktur, Anticodon (paart mit mRNA-Codon), CCA-3''-Ende (Aminosäure-Bindung), Aminoacyl-tRNA-Synthetase (belädt tRNA)
4. **Ribosom:** Prokaryoten 70S (30S + 50S), Eukaryoten 80S (40S + 60S), A/P/E-Sites, Peptidyl-Transferase (rRNA-katalysiert = Ribozym)
5. **Initiation:** Prokaryoten (Shine-Dalgarno, fMet), Eukaryoten (5''-Capping, Kozak-Sequenz, Met)
6. **Elongation:** Codon-Erkennung (A-Site), Peptidbindung (Peptidyl-Transferase), Translokation (EF-G/eEF2, GTP)
7. **Termination:** Stopp-Codon (UAA/UAG/UGA), Release-Faktoren (RF1/2/3), Protein freigesetzt
8. **Antibiotika:** Tetracyclin (30S, A-Site), Chloramphenicol (50S, Peptidyl-Transferase), Erythromycin (50S, Translokation)

---

## Merksätze

>>>> **Genetischer Code:** „Triplett-Code (3 Basen → 1 AS), degeneriert (viele Codons → 1 AS, z.B. Leucin 6 Codons), universell. Start-Codon AUG (Met), Stopp-Codons UAA/UAG/UGA (Nonsense). 64 Codons (4³) → 20 AS + 3 Stopp!"

>>>> **tRNA + Aminoacyl-tRNA-Synthetase:** „tRNA: Kleeblatt-Struktur, Anticodon (paart mit mRNA-Codon), CCA-3''-Ende (Aminosäure-Bindung). Aminoacyl-tRNA-Synthetase (spezifisch für jede AS) belädt tRNA (ATP-abhängig), Fehlerrate ~10⁻⁴. Wobble: 1 tRNA für mehrere Codons (3. Base flexibel)!"

>>>> **Ribosom + A/P/E-Sites:** „Prokaryoten 70S (30S + 50S), Eukaryoten 80S (40S + 60S). A-Site (neue Aminoacyl-tRNA), P-Site (Peptidkette), E-Site (entladene tRNA). Peptidyl-Transferase (rRNA-katalysiert = Ribozym) → Peptidbindung!"

>>>> **Initiation (Prokaryoten vs. Eukaryoten):** „Prokaryoten: Shine-Dalgarno (AGGAGGU vor AUG), fMet-tRNA (formyliert), IF1/2/3. Eukaryoten: 5''-Capping (m7G, Ribosom-Erkennung), Kozak-Sequenz (GCCRCCAUGG), Met-tRNA (nicht formyliert), eIF1/2/3/4!"

---

**Navigation:**
← [Zurück: Bio Kap 6 UK02 – Transkription](Bio_Kap6_UK02_Transkription.md) | [Weiter: Bio Kap 6 UK04 – Genregulation](Bio_Kap6_UK04_Genregulation.md) →
`,
      lernziele: [],
      sections: [],
      diagram: 'transcription-translation',

      merksätze: [],
      selfTest: [
        {
          question: "Der genetische Code ist **degeneriert**. Was bedeutet dies?",
          options: [
          "Jedes Codon (3 Basen) codiert für mehrere verschiedene Aminosäuren (1 Codon → viele AS)",
          "Mehrere Codons können für dieselbe Aminosäure codieren (viele Codons → 1 AS, z.B. Leucin hat 6 Codons)",
          "Der genetische Code ist bei verschiedenen Organismen unterschiedlich (nicht universell)",
          "Codons überlappen sich, sodass ein Nukleotid zu mehreren Codons gehört",
          "Es gibt Pausen (Kommas) zwischen Codons, die nicht codierend sind"
          ],
          correctIndex: 1,
          explanation: "**Degeneriert (Degeneration):** **Mehrere Codons** → **1 Aminosäure**. Beispiel: **Leucin** wird von **6 Codons** codiert (UUA, UUG, CUU, CUC, CUA, CUG). **Grund:** 64 Codons (4³) → 20 Aminosäuren + 3 Stopp → viele Codons pro AS. **Vorteil:** Mutationen oft \"stille Mutationen\" (gleiche AS trotz Codon-Änderung). Wichtig: **1 Codon → 1 AS** (eindeutig), aber **1 AS → viele Codons** (degeneriert)!",
          hints: [
            "Es gibt 64 mögliche Codons (4³), aber nur 20 Aminosäuren plus 3 Stopp-Codons — was folgt daraus für die Zuordnung?",
            "'Degeneriert' heißt hier nicht 'kaputt', sondern 'redundant' — mehrere Codons zeigen auf dasselbe Ziel.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welches der folgenden Codons ist ein **Stopp-Codon** (Nonsense-Codon)?",
          options: [
          "AUG (codiert Methionin, Start-Codon)",
          "UUU (codiert Phenylalanin)",
          "UAA (Stopp-Codon, keine Aminosäure, Termination)",
          "GCU (codiert Alanin)",
          "CAU (codiert Histidin)"
          ],
          correctIndex: 2,
          explanation: "**Stopp-Codons (Nonsense-Codons):** **UAA, UAG, UGA** → **keine Aminosäure**, beenden Translation. **Start-Codon:** **AUG** (Methionin, Met) → Translations-Start (1. Aminosäure). Wichtig: **3 Stopp-Codons** (UAA \"Ochre\", UAG \"Amber\", UGA \"Opal\"), **1 Start-Codon** (AUG). Bei Stopp-Codon: **Release-Faktoren** (RF1/2 Prokaryoten, eRF1 Eukaryoten) binden → Protein freigesetzt.",
          hints: [
            "Es gibt genau drei Stopp-Codons: UAA, UAG und UGA — keines davon codiert eine Aminosäure.",
            "AUG ist das einzige Start-Codon und codiert Methionin — alle anderen Optionen außer den Stopp-Codons codieren reguläre Aminosäuren.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Die **Wobble-Hypothese** (Crick, 1966) erklärt, warum **45 tRNAs** ausreichen, um **61 codierende Codons** zu erkennen. Welche Aussage ist korrekt?",
          options: [
          "Jede tRNA kann nur ein einziges spezifisches Codon erkennen (61 tRNAs für 61 Codons)",
          "Die Wobble-Position (3. Base des Codons, 1. Base des Anticodons) erlaubt Nicht-Watson-Crick-Paarung (z.B. G-U)",
          "Die Wobble-Hypothese besagt, dass Codons überlappen und mehrere Aminosäuren gleichzeitig codieren",
          "Wobble bedeutet, dass tRNAs falsch geladen werden und fehlerhafte Aminosäuren einbauen",
          "Wobble-Paarung findet nur bei Stopp-Codons statt, nicht bei codierenden Codons"
          ],
          correctIndex: 1,
          explanation: "**Wobble-Hypothese:** **3. Base des Codons** (5'-Ende der mRNA) paart mit **1. Base des Anticodons** (5'-Ende der tRNA) → **Wobble-Position**. **Nicht-Watson-Crick-Paarung** möglich (z.B. **G-U** statt G-C). **Folge:** **1 tRNA** kann **mehrere Codons** erkennen (v.a. wenn 3. Base unterschiedlich). Beispiel: Codon UUU + UUC (beide Phe) → 1 tRNA-Phe (Anticodon AAG, Wobble G-U möglich). Wichtig: **45 tRNAs** für **61 Codons** (nicht 61 tRNAs!)!",
          hints: [
            "'Wobble' (Wackeln) beschreibt die flexible Basenpaarung an der 3. Codon-Position — dort sind auch Nicht-Watson-Crick-Paare erlaubt.",
            "Wenn 45 tRNAs für 61 Codons ausreichen, muss jede tRNA im Schnitt mehr als ein Codon lesen können — wie ist das möglich?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "**Aminoacyl-tRNA-Synthetase** ist ein Enzym, das tRNA mit der passenden Aminosäure belädt. Welche Aussage ist korrekt?",
          options: [
          "Es gibt nur 1 Aminoacyl-tRNA-Synthetase für alle 20 Aminosäuren (universelles Enzym)",
          "Es gibt 20 Aminoacyl-tRNA-Synthetasen (1 pro Aminosäure), jede spezifisch für eine AS und ihre tRNAs",
          "Aminoacyl-tRNA-Synthetase katalysiert die Peptidbindung zwischen Aminosäuren (Peptidyl-Transferase)",
          "Aminoacyl-tRNA-Synthetase entfernt Introns aus pre-mRNA (Splicing-Funktion)",
          "Aminoacyl-tRNA-Synthetase ist eine Untereinheit des Ribosoms (50S/60S)"
          ],
          correctIndex: 1,
          explanation: "**Aminoacyl-tRNA-Synthetase:** **20 Enzyme** (1 pro Aminosäure), jedes **spezifisch** für 1 AS und ihre tRNAs (kann mehrere tRNAs beladen, da Wobble). **Funktion:** Bindet Aminosäure an CCA-3'-Ende der tRNA (**Aminoacyl-tRNA**, ATP-abhängig). **Fehlerrate:** ~10⁻⁴ (sehr niedrig, Korrektur-Mechanismus). Wichtig: **1 Synthetase pro AS**, aber **mehrere tRNAs pro AS** (Wobble!). **Peptidyl-Transferase** = rRNA-katalysiert (Ribozym), nicht Synthetase!",
          hints: [
            "Es gibt 20 proteinogene Aminosäuren — wie viele Synthetasen werden daher benötigt?",
            "Die Aminoacyl-tRNA-Synthetase 'belädt' die tRNA am CCA-3'-Ende — verwechsle sie nicht mit der Peptidyl-Transferase, die die Peptidbindung knüpft.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Bei Prokaryoten bindet das Ribosom an die **Shine-Dalgarno-Sequenz**. Bei Eukaryoten erfolgt die Initiation über die **5'-Capping** und **Kozak-Sequenz**. Welche Aussage ist korrekt?",
          options: [
          "Prokaryoten: Shine-Dalgarno (AGGAGGU, ~10 bp vor AUG) erkennt 16S rRNA, Initiator-tRNA ist fMet-tRNA (formyliert)",
          "Eukaryoten: Shine-Dalgarno-Sequenz vor AUG, Initiator-tRNA ist fMet-tRNA (wie Prokaryoten)",
          "Prokaryoten und Eukaryoten verwenden beide die Kozak-Sequenz zur Ribosom-Bindung",
          "Eukaryoten benötigen keine 5'-Capping, da Ribosomen direkt an AUG binden (wie Prokaryoten)",
          "Prokaryoten verwenden Met-tRNA (nicht formyliert), Eukaryoten fMet-tRNA (formyliert)"
          ],
          correctIndex: 0,
          explanation: "**Prokaryoten:** **Shine-Dalgarno-Sequenz** (AGGAGGU, ~10 bp vor AUG) → **16S rRNA** (30S) erkennt → Ribosom bindet. **Initiator-tRNA:** **fMet-tRNA** (N-Formylmethionin, **formyliert**). **Eukaryoten:** **5'-Capping** (m7G) → Ribosom erkennt Kappe, scannt mRNA bis AUG. **Kozak-Sequenz** (GCCRCCAUGG, Konsensus um AUG) → optimale Translation. **Initiator-tRNA:** **Met-tRNA** (**nicht** formyliert). Wichtig: **fMet (Prokaryoten)**, **Met (Eukaryoten)**!",
          hints: [
            "Prokaryoten nutzen die Shine-Dalgarno-Sequenz zur Ribosom-Anlagerung — Eukaryoten hingegen 'scannen' von der m7G-Kappe aus bis zum ersten AUG.",
            "Merke: fMet (formyliertes Methionin) ist der Starter bei Prokaryoten — bei Eukaryoten ist es unformyliertes Met.",
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: "**Tetracyclin** ist ein Antibiotikum, das die bakterielle Proteinbiosynthese hemmt. Welcher Mechanismus liegt zugrunde?",
          options: [
          "Tetracyclin hemmt DNA-Replikation durch Blockierung der DNA-Polymerase",
          "Tetracyclin bindet an die 30S-Untereinheit (Prokaryoten) und blockiert die A-Site → Aminoacyl-tRNA kann nicht binden",
          "Tetracyclin bindet an die 50S-Untereinheit und hemmt die Peptidyl-Transferase (Peptidbindung ↓)",
          "Tetracyclin hemmt Transkription durch Blockierung der RNA-Polymerase",
          "Tetracyclin bindet an die 80S-Ribosomen (Eukaryoten) und hemmt Translation (keine selektive Toxizität)"
          ],
          correctIndex: 1,
          explanation: "**Tetracyclin:** Bindet an **30S-Untereinheit** (kleine, prokaryotische Ribosom-Untereinheit) → **blockiert A-Site** → **Aminoacyl-tRNA kann nicht binden** → **Elongation ↓**. **Selektive Toxizität:** Prokaryoten (70S = 30S + 50S), Eukaryoten (80S = 40S + 60S) → Tetracyclin wirkt nur auf 70S! **Andere Antibiotika:** Chloramphenicol (50S, Peptidyl-Transferase ↓), Erythromycin (50S, Translokation ↓), Streptomycin (30S, Codon-Erkennung fehlerhaft). Wichtig: **Mitochondrien = 70S** → Tetracyclin kann mitochondriale Translation hemmen (Nebenwirkung)!",
          hints: [
            "Bakterien haben 70S-Ribosomen (30S + 50S), Menschen 80S (40S + 60S) — diese Differenz erklärt die selektive Toxizität von Tetracyclin.",
            "An welcher Stelle des Ribosoms bindet die neu eintreffende Aminoacyl-tRNA? Das ist die A-Site — Tetracyclin blockiert genau diese.",
          ],
          difficulty: 2,
          tags: [],
        }
      ],
    },
    {
      id: 'bio-6-04',
      title: "Genregulation",
      content: `# Genregulation – Biologie Kapitel 6 (Molekulare Genetik)

**Priorität:** HOCH
**Geschätzte Lesezeit:** 18 Minuten
**Stichwortliste-Abdeckung:** 12/12 Stichwörter

---

## Einleitung

**Genregulation** = Kontrolle der **Genexpression** (wann, wo, wie viel ein Gen abgelesen wird)

**Ebenen:**
1. **Transkriptionell:** Transkription ↑/↓ (Hauptebene)
2. **Post-transkriptionell:** RNA-Prozessierung, Stabilität, miRNA
3. **Translationell:** Translation ↑/↓
4. **Post-translationell:** Protein-Modifikation, Abbau

**Wichtig:** Nicht alle Gene sind immer aktiv → **Differenzierung** (Zelltypen trotz gleicher DNA)

---

## Kerninhalt

### 1. ⭐ Prokaryotische Genregulation: Operon-Modell

**Operon** (Jacob & Monod, 1961): Gruppe von Genen, gemeinsam reguliert

#### 1a. ⭐ lac-Operon (induzierbares Operon)

**Funktion:** **Laktose-Abbau** (E. coli)

**Gene:**
- **lacZ:** β-Galactosidase (spaltet Laktose → Glukose + Galaktose)
- **lacY:** Permease (transportiert Laktose in Zelle)
- **lacA:** Transacetylase (Nebenreaktion)

**Regulation:**

⭐ **Ohne Laktose (Repression):**
1. **Repressor** (lacI-Gen) bindet an **Operator** (O) → **Transkription blockiert**
2. **RNA-Polymerase** kann nicht an Promotor (P) binden → **Gene AUS**

⭐ **Mit Laktose (Induktion):**
1. **Allolaktose** (aus Laktose) = **Induktor** → bindet an Repressor
2. **Repressor inaktiviert** → löst sich von Operator ab
3. **RNA-Polymerase** bindet an Promotor → **Transkription ↑**, **Gene AN**

**Positive Regulation (CAP-cAMP):**
- **Glukose ↓** → **cAMP ↑** → **CAP-cAMP-Komplex** bindet an Promotor → **Transkription ↑↑**
- **Glukose ↑** → cAMP ↓ → kein CAP-cAMP → **Transkription ↓** (auch mit Laktose)
- **Katabol-Repression:** Glukose bevorzugt (Laktose nur wenn Glukose fehlt)

**Zusammenfassung:**
- **Laktose + Glukose ↓:** **Maximale Transkription** (Induktor + CAP-cAMP)
- **Laktose + Glukose ↑:** Geringe Transkription (Induktor, aber kein CAP-cAMP)
- **Keine Laktose:** Keine Transkription (Repressor aktiv)

---

#### 1b. ⭐ trp-Operon (reprimierbares Operon)

**Funktion:** **Tryptophan-Biosynthese** (E. coli)

**Gene:** trpE, trpD, trpC, trpB, trpA (Enzyme für Tryptophan-Synthese)

**Regulation:**

⭐ **Ohne Tryptophan (Derepression):**
1. **Repressor** (trpR-Gen) **inaktiv** (benötigt Corepressor)
2. **RNA-Polymerase** bindet an Promotor → **Transkription ↑**, **Gene AN**

⭐ **Mit Tryptophan (Repression):**
1. **Tryptophan** = **Corepressor** → bindet an Repressor
2. **Repressor aktiv** → bindet an Operator → **Transkription blockiert**, **Gene AUS**

**Logik:** Tryptophan vorhanden → **keine Synthese nötig** → Gene AUS (Feedback-Hemmung)

**Vergleich:**
- **lac-Operon:** Induzierbares Operon (Substrat → Gene AN)
- **trp-Operon:** Reprimierbares Operon (Produkt → Gene AUS)

---

### 2. ⭐ Eukaryotische Genregulation

**Komplexer** als Prokaryoten (keine Operons, Chromatin-Struktur, Transkriptionsfaktoren)

#### 2a. ⭐ Transkriptionsfaktoren (TFs)

**Funktion:** Proteine, die an DNA binden → Transkription ↑/↓

**Typen:**

| Typ | Funktion | Beispiel |
|-----|----------|----------|
| **Basale TFs** | Rekrutieren RNA-Polymerase (essentiell) | TFIID (TBP, TATA-Box) |
| **Aktivatoren** | Binden an **Enhancer** (verstärkende Sequenzen) → Transkription ↑ | CREB, NF-κB |
| **Repressoren** | Binden an **Silencer** (unterdrückende Sequenzen) → Transkription ↓ | – |

**Enhancer/Silencer:**
- **Weit entfernt** vom Promotor (können 1 Mio. bp entfernt sein)
- **DNA-Looping:** Enhancer/Silencer bildet Schleife → interagiert mit Promotor (Mediator-Komplex)

---

#### 2b. ⭐ Epigenetische Regulation

**Definition:** Vererbbare Veränderungen der Genexpression **ohne DNA-Sequenz-Änderung**

⭐ **DNA-Methylierung:**
- **CpG-Inseln** (Cytosin-Guanin-Dinukleotide): Methylierung (5-Methylcytosin, 5mC) an Cytosin
- **Funktion:** **Genexpression ↓** (Promotor-Methylierung → Gen stillgelegt)
- **Beispiele:**
  - **X-Inaktivierung:** Inaktiviertes X-Chromosom (Barr-Körperchen) ist hypermethyliert
  - **Genomic Imprinting:** Eltern-spezifische Methylierung (z.B. IGF2-Gen: paternal exprimiert, maternal stillgelegt)

⭐ **Histone-Modifikationen:**
- **Histone:** Proteine, um die DNA gewickelt ist (Nukleosom)
- **Modifikationen:** Acetylierung, Methylierung, Phosphorylierung (an Lysin, Arginin)

**Histon-Acetylierung:**
- **Acetylierung (Acetyltransferase, HAT):** Lysin-NH₃⁺ → Lysin-NHCOCH₃ (neutral) → **DNA lockerer** → **Transkription ↑** (Euchromatin)
- **Deacetylierung (Deacetylase, HDAC):** Entfernt Acetyl-Gruppen → **DNA dichter** → **Transkription ↓** (Heterochromatin)

**Histon-Methylierung:**
- **Kontext-abhängig:** H3K4me3 (Histon H3, Lysin 4, Trimethylierung) → **Aktivierung**, H3K9me3 → **Repression**

**Chromatin-Zustand:**
- **Euchromatin:** Locker, acetyliert → **Genexpression ↑** (aktive Gene)
- **Heterochromatin:** Dicht, deacetyliert, methyliert → **Genexpression ↓** (inaktive Gene)

---

#### 2c. ⭐ RNA-Interferenz (RNAi): miRNA und siRNA

**Funktion:** **Post-transkriptionelle Genregulation** (mRNA-Abbau oder Translations-Blockierung)

**miRNA (microRNA):**
- **Endogen** (von Zelle selbst produziert)
- **Biogenese:** pri-miRNA (Primärtranskript) → Drosha (Kern) → pre-miRNA → Dicer (Cytoplasma) → **reife miRNA** (~22 nt)
- **Funktion:** Bindet an **3''-UTR** der Ziel-mRNA (nicht vollständig komplementär) → **Translations-Repression** oder **mRNA-Abbau**
- **Beispiel:** let-7 (Entwicklungskontrolle, Tumorsu ppressor)

**siRNA (small interfering RNA):**
- **Exogen** (z.B. virale doppelsträngige RNA) oder künstlich
- **Biogenese:** Lange dsRNA → **Dicer** → siRNA (~21–23 nt)
- **Funktion:** Bindet an mRNA (**vollständig komplementär**) → **mRNA-Abbau** (RISC-Komplex, Argonaute)
- **Therapeutisch:** Gen-Silencing (z.B. Patisiran: siRNA gegen Transthyretin bei Amyloidose)

**Vergleich:**
- **miRNA:** Endogen, nicht vollständig komplementär, Translations-Repression/Abbau
- **siRNA:** Exogen/künstlich, vollständig komplementär, mRNA-Abbau

---

### 3. Klinische Relevanz

#### 3a. Rett-Syndrom (Transkriptionsfaktor-Defekt)

**Gen:** MECP2 (Methyl-CpG-Binding Protein 2)
- **Funktion:** Bindet an methylierte CpG-Inseln → Transkriptions-Repression
- **Mutation:** MECP2-Defekt → aberrante Genexpression → neurologische Störungen
- **Phänotyp:** Mädchen (X-chromosomal dominant, **letal bei ♂**), normale Entwicklung bis ~6–18 Monate → Regression (Handbewegungen, geistige Behinderung, Autismus-Symptome)

---

#### 3b. Fragiles-X-Syndrom (Trinukleotid-Expansion)

**Gen:** FMR1 (Fragile X Mental Retardation 1)
- **Normal:** CGG-Repeats (~5–50)
- **Prämutation:** 55–200 Repeats (Träger, meist asymptomatisch)
- **Vollmutation:** >200 Repeats → **Hypermethylierung** des FMR1-Promotors → **Gen stillgelegt** → kein FMRP-Protein
- **Phänotyp:** Geistige Behinderung (häufigste erbliche Ursache bei ♂), langes Gesicht, große Ohren, Makroorchidie (große Hoden)

**Vererbung:** X-chromosomal (♂ schwerer betroffen), **Antizipation** (Repeat-Expansion in Generationen)

---

## 📌 Prüfungsfokus

1. **lac-Operon:** Induzierbares Operon (Laktose = Induktor, Allolaktose bindet Repressor → Gene AN), CAP-cAMP (Glukose ↓ → Transkription ↑↑)
2. **trp-Operon:** Reprimierbares Operon (Tryptophan = Corepressor, bindet Repressor → Gene AUS, Feedback-Hemmung)
3. **Transkriptionsfaktoren:** Basale TFs (TFIID/TBP), Aktivatoren (Enhancer → Transkription ↑), Repressoren (Silencer → Transkription ↓)
4. **DNA-Methylierung:** CpG-Inseln (5mC) → Genexpression ↓ (Promotor-Methylierung), X-Inaktivierung, Genomic Imprinting
5. **Histon-Acetylierung:** HAT (Acetylierung → Euchromatin → Transkription ↑), HDAC (Deacetylierung → Heterochromatin → Transkription ↓)
6. **miRNA:** Endogen, ~22 nt, 3''-UTR-Bindung (nicht vollständig komplementär), Translations-Repression/Abbau
7. **siRNA:** Exogen, ~21–23 nt, vollständig komplementär, mRNA-Abbau (RISC, Argonaute), therapeutisch (Gen-Silencing)

---

## Merksätze

>>>> **lac-Operon:** „Induzierbares Operon! OHNE Laktose: Repressor bindet Operator → Gene AUS. MIT Laktose: Allolaktose (Induktor) bindet Repressor → Repressor inaktiv → Gene AN. CAP-cAMP (Glukose ↓): Transkription ↑↑ (Katabol-Repression: Glukose bevorzugt)!"

>>>> **trp-Operon:** „Reprimierbares Operon! OHNE Tryptophan: Repressor inaktiv → Gene AN (Biosynthese). MIT Tryptophan: Tryptophan (Corepressor) bindet Repressor → Repressor aktiv → Gene AUS (Feedback-Hemmung: Produkt hemmt eigene Synthese)!"

>>>> **DNA-Methylierung + Histon-Acetylierung:** „DNA-Methylierung (CpG-Inseln, 5mC): Promotor methyliert → Gen AUS (X-Inaktivierung, Imprinting). Histon-Acetylierung (HAT): Acetyl-Gruppen → DNA locker (Euchromatin) → Transkription ↑. HDAC (Deacetylase): Acetyl weg → DNA dicht (Heterochromatin) → Transkription ↓!"

>>>> **miRNA vs. siRNA:** „miRNA: Endogen, ~22 nt, 3''-UTR-Bindung (nicht vollständig komplementär), Translations-Repression/Abbau (let-7). siRNA: Exogen, ~21–23 nt, vollständig komplementär, mRNA-Abbau (RISC, Argonaute), therapeutisch (Patisiran: Transthyretin-Amyloidose)!"

---

**Navigation:**
← [Zurück: Bio Kap 6 UK03 – Translation](Bio_Kap6_UK03_Translation.md) | [Weiter: Bio Kap 8 UK01 – Humangenetik (Diagnostik)](../Bio_Kap8_UK01_Humangenetik_Diagnostik.md) →
`,
      lernziele: [],
      sections: [],
      merksätze: [],
      selfTest: [
        {
          question: "E. coli wächst in einem Medium mit **Laktose** als einziger Kohlenstoffquelle (keine Glukose). Welche Aussage zum **lac-Operon** ist korrekt?",
          options: [
          "Der Repressor bindet an den Operator → Transkription ist blockiert, Gene sind AUS",
          "Allolaktose (aus Laktose) bindet an den Repressor → Repressor inaktiviert → Gene AN, maximale Transkription (CAP-cAMP vorhanden)",
          "Das lac-Operon ist ein reprimierbares Operon (wie trp-Operon), Laktose wirkt als Corepressor",
          "CAP-cAMP kann nicht binden, da Glukose fehlt → Transkription ist blockiert trotz Laktose",
          "Laktose hemmt die RNA-Polymerase direkt → keine Transkription möglich"
          ],
          correctIndex: 1,
          explanation: "**lac-Operon (induzierbares Operon):** **MIT Laktose:** **Allolaktose** (Induktor, aus Laktose) bindet an **Repressor** → Repressor **inaktiviert** → löst sich von Operator ab → **RNA-Polymerase** kann binden → **Gene AN** (lacZ, lacY, lacA). **Glukose fehlt** → **cAMP ↑** → **CAP-cAMP-Komplex** bindet an Promotor → **maximale Transkription ↑↑** (positive Regulation). **Ohne Laktose:** Repressor aktiv → Gene AUS. Wichtig: **Laktose = Induktor**, **Glukose ↓ = CAP-cAMP ↑**!",
          hints: [
            "Laktose wird zu Allolaktose umgewandelt, das als Induktor fungiert und den Repressor vom Operator löst — welcher Zustand der Gene ergibt sich daraus?",
            "Wenn Glukose fehlt, steigt cAMP — das CAP-cAMP-System verstärkt die Transkription zusätzlich (positive Regulation).",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Das **trp-Operon** reguliert die Tryptophan-Biosynthese in E. coli. Welche Aussage ist korrekt?",
          options: [
          "Tryptophan ist ein Induktor → bindet an Repressor → Repressor inaktiviert → Gene AN (Biosynthese ↑)",
          "Tryptophan ist ein Corepressor → bindet an Repressor → Repressor aktiv → Gene AUS (Feedback-Hemmung)",
          "Ohne Tryptophan bindet der Repressor an den Operator → Gene AUS (keine Biosynthese)",
          "Das trp-Operon ist ein induzierbares Operon (wie lac-Operon), Tryptophan aktiviert Transkription",
          "CAP-cAMP ist erforderlich für trp-Operon-Aktivierung (wie bei lac-Operon)"
          ],
          correctIndex: 1,
          explanation: "**trp-Operon (reprimierbares Operon):** **MIT Tryptophan:** **Tryptophan** = **Corepressor** → bindet an **Repressor** (trpR) → **Repressor aktiv** → bindet an Operator → **Gene AUS** (keine Biosynthese nötig, **Feedback-Hemmung**: Produkt hemmt eigene Synthese). **OHNE Tryptophan:** Repressor inaktiv → Gene AN (Biosynthese ↑). **Vergleich:** **lac-Operon** = induzierbares Operon (Substrat → Gene AN), **trp-Operon** = reprimierbares Operon (Produkt → Gene AUS).",
          hints: [
            "Das trp-Operon ist ein reprimierbares Operon — die Zelle produziert Tryptophan nur, wenn es gebraucht wird (Feedback-Hemmung).",
            "Wenn Tryptophan vorhanden ist, bindet es als Corepressor an den Repressor und schaltet die Gene ab — das ist das Gegenteil des lac-Operons.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Bei Eukaryoten können **Enhancer** (verstärkende Sequenzen) die Transkription erhöhen. Welche Aussage ist korrekt?",
          options: [
          "Enhancer müssen direkt neben dem Promotor liegen (~10 bp entfernt, wie Pribnow-Box)",
          "Enhancer können weit vom Promotor entfernt sein (bis zu 1 Mio. bp) und wirken durch DNA-Looping",
          "Enhancer sind nur bei Prokaryoten vorhanden (nicht bei Eukaryoten)",
          "Enhancer hemmen die Transkription (wie Silencer), nicht erhöhen",
          "Enhancer codieren für Repressor-Proteine, die an den Operator binden"
          ],
          correctIndex: 1,
          explanation: "**Enhancer (Eukaryoten):** **Verstärkende Sequenzen**, an die **Aktivatoren** (Transkriptionsfaktoren) binden → **Transkription ↑**. **Wichtig:** Enhancer können **weit entfernt** vom Promotor sein (bis zu **1 Mio. bp**!) → **DNA-Looping** (Schleifenbildung) bringt Enhancer + Promotor zusammen (**Mediator-Komplex** vermittelt). **Silencer:** Unterdrückende Sequenzen → Transkription ↓ (Repressoren binden). Prokaryoten haben **keine Enhancer** (Operons statt Enhancer/Silencer).",
          hints: [
            "Enhancer können sich tausende von Basenpaaren vom Promotor entfernt befinden — wie kann ein so weit entferntes Element den Promotor dennoch beeinflussen?",
            "Das Gegenteil eines Enhancers ist ein Silencer — Enhancer erhöhen, Silencer senken die Transkription.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "**DNA-Methylierung** an CpG-Inseln (Cytosin-Guanin-Dinukleotide) ist ein wichtiger epigenetischer Mechanismus. Welche Aussage ist korrekt?",
          options: [
          "DNA-Methylierung (5-Methylcytosin, 5mC) am Promotor führt zu erhöhter Genexpression (Transkription ↑)",
          "DNA-Methylierung am Promotor führt zu Gen-Stilllegung (Transkription ↓), z.B. bei X-Inaktivierung",
          "DNA-Methylierung ist keine vererbbare Modifikation (geht bei Zellteilung verloren)",
          "DNA-Methylierung ändert die DNA-Sequenz (Mutation) und ist irreversibel",
          "DNA-Methylierung findet nur bei Prokaryoten statt (nicht bei Eukaryoten)"
          ],
          correctIndex: 1,
          explanation: "**DNA-Methylierung (Epigenetik):** **CpG-Inseln** (Cytosin-Guanin) → Methylierung an Cytosin (**5-Methylcytosin, 5mC**) → **Genexpression ↓** (Promotor-Methylierung → Gen **stillgelegt**). **Beispiele:** **X-Inaktivierung** (inaktiviertes X hypermethyliert, Barr-Körperchen), **Genomic Imprinting** (eltern-spezifisch, z.B. IGF2-Gen: paternal exprimiert, maternal methyliert/stillgelegt). **Wichtig:** **Vererbbar** (bleibt bei Zellteilung erhalten), **keine Sequenz-Änderung** (epigenetisch!), **reversibel** (Demethylasen).",
          hints: [
            "Methylierung an CpG-Inseln im Promotor 'verstummt' ein Gen — denke an X-Inaktivierung als klassisches Beispiel.",
            "Epigenetische Veränderungen ändern nicht die DNA-Sequenz selbst, sind aber vererbbar — wie unterscheidet sich das von einer Mutation?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "**Histon-Acetylierung** durch Histon-Acetyltransferasen (HAT) ist ein wichtiger epigenetischer Mechanismus. Welche Aussage ist korrekt?",
          options: [
          "Histon-Acetylierung entfernt Acetyl-Gruppen von Lysinen → DNA dichter gepackt (Heterochromatin) → Transkription ↓",
          "Histon-Acetylierung fügt Acetyl-Gruppen an Lysine → DNA lockerer (Euchromatin) → Transkription ↑",
          "Histon-Deacetylasen (HDAC) acetylieren Histone → Transkription ↑",
          "Histon-Acetylierung ist irreversibel und ändert die DNA-Sequenz (Mutation)",
          "Histon-Acetylierung findet nur bei Prokaryoten statt (Prokaryoten haben Histone)"
          ],
          correctIndex: 1,
          explanation: "**Histon-Acetylierung (HAT):** **Acetyl-Gruppen** (COCH₃) werden an **Lysine** (K) der Histone angefügt → Lysin-NH₃⁺ (positiv) → Lysin-NHCOCH₃ (neutral) → **DNA-Histon-Interaktion ↓** → **DNA lockerer** (**Euchromatin**) → **Transkription ↑**. **Histon-Deacetylasen (HDAC):** **Entfernen** Acetyl-Gruppen → DNA dichter (**Heterochromatin**) → **Transkription ↓**. **Wichtig:** **HAT = Acetylierung = Transkription ↑**, **HDAC = Deacetylierung = Transkription ↓**. Prokaryoten haben **keine Histone** (Nukleoid, nicht Chromatin)!",
          hints: [
            "Acetylierung neutralisiert die positive Ladung der Histone — warum führt das zu einer lockereren DNA-Verpackung?",
            "Merke: HAT (Acetyltransferase) acetyliert → Transkription hoch; HDAC (Deacetylase) deacetyliert → Transkription runter.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "**miRNA** und **siRNA** sind kleine nicht-codierende RNAs, die die Genexpression regulieren. Welche Aussage ist korrekt?",
          options: [
          "miRNA ist exogen (von außen eingebracht), siRNA ist endogen (von Zelle produziert)",
          "miRNA ist endogen (~22 nt), bindet an 3'-UTR (nicht vollständig komplementär) → Translations-Repression/Abbau",
          "siRNA bindet an 5'-Capping der mRNA → verhindert Ribosom-Bindung (Translations-Blockierung)",
          "miRNA und siRNA haben identische Wirkmechanismen und Herkunft (keine Unterschiede)",
          "siRNA wird von Drosha prozessiert (im Kern), miRNA von Dicer (im Cytoplasma)"
          ],
          correctIndex: 1,
          explanation: "**miRNA (microRNA):** **Endogen** (von Zelle produziert), **~22 nt**, bindet an **3'-UTR** der Ziel-mRNA (**nicht vollständig komplementär**) → **Translations-Repression** oder **mRNA-Abbau** (RISC, Argonaute). **Biogenese:** pri-miRNA → **Drosha** (Kern) → pre-miRNA → **Dicer** (Cytoplasma) → reife miRNA. **siRNA (small interfering RNA):** **Exogen** (z.B. virale dsRNA) oder künstlich, **~21–23 nt**, bindet an mRNA (**vollständig komplementär**) → **mRNA-Abbau** (RISC). **Wichtig:** **miRNA = endogen**, **siRNA = exogen**, beide via Dicer!",
          hints: [
            "miRNA stammt aus der Zelle selbst (endogen) und bindet nur partiell komplementär — siRNA kommt von außen (exogen) und bindet vollständig.",
            "Beide RNA-Typen wirken über den RISC-Komplex — der entscheidende Unterschied liegt in ihrer Herkunft und der Vollständigkeit der Komplementarität.",
          ],
          difficulty: 3,
          tags: [],
        }
      ],
    }
  ],
};
