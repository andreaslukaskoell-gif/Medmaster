import type { Kapitel } from "../types";

export const bioKapGenetik: Kapitel = {
  id: "bio-kap4",
  title: "Genetik & Molekularbiologie",
  subject: "biologie",
  icon: "🧬",
  estimatedTime: "180 min",
  unterkapitel: [
    // === from kap5-klassische-genetik ===
    {
      id: "bio-5-01",
      title: "Klassische Genetik",
      content: `## Einleitung

Die **Klassische Genetik** (Mendelsche Genetik) untersucht:
1. **Vererbungsregeln** (Mendelsche Regeln)
2. **Genotyp** (genetische Ausstattung) vs. **Phänotyp** (sichtbares Merkmal)
3. **Dominanz**-Verhältnisse (dominant, rezessiv, intermediär, kodominant)

**Gregor Mendel** (1822–1884): Augustinermönch, Kreuzungsversuche mit Erbsen (Pisum sativum), Grundlagen der Vererbungslehre

---

## Kerninhalt

### 1. Grundbegriffe

| Begriff | Definition | Beispiel |
|---------|------------|----------|
| **Gen** | DNA-Abschnitt, kodiert für ein Merkmal | Gen für Blütenfarbe |
| **Allel** | Variante eines Gens | A (Blütenfarbe rot), a (Blütenfarbe weiß) |
| **Genotyp** | Genetische Ausstattung (Allel-Kombination) | AA, Aa, aa |
| **Phänotyp** | Sichtbares Merkmal (Ausprägung) | Rote Blüte, weiße Blüte |
| **Homozygot** | Beide Allele gleich | **AA** (homozygot dominant), **aa** (homozygot rezessiv) |
| **Heterozygot** | Beide Allele unterschiedlich | **Aa** |
| **Dominant** | Allel setzt sich durch (auch heterozygot sichtbar) | **A** (dominant): AA + Aa → rot |
| **Rezessiv** | Allel nur homozygot sichtbar | **a** (rezessiv): aa → weiß |

**Notation:**
- **Dominant:** Großbuchstabe (A, B, C)
- **Rezessiv:** Kleinbuchstabe (a, b, c)

---

### 2. Mendelsche Regeln

#### 2a. 1. Mendelsche Regel (Uniformitätsregel, F₁-Generation)

**Regel:** Kreuzt man **reinerbige (homozygote)** Eltern mit unterschiedlichen Merkmalen, sind **alle Nachkommen (F₁) uniform** (gleich im Genotyp + Phänotyp).

**Beispiel:** Blütenfarbe (dominant-rezessiv)
- **P** (Eltern): AA (rot, homozygot dominant) × aa (weiß, homozygot rezessiv)
- **Gameten:** A × a
- **F₁:** **100% Aa** (heterozygot)
- **Phänotyp F₁:** **100% rot** (A dominant über a)

**Wichtig:** F₁ ist **uniform** (alle Aa, alle rot)

---

#### 2b. 2. Mendelsche Regel (Spaltungsregel, F₂-Generation)

**Regel:** Kreuzt man **F₁-Hybriden** (Aa × Aa), **spaltet** sich F₂ in einem bestimmten Verhältnis auf.

**Monohybrider Erbgang (1 Gen, 2 Allele):**

**Kreuzung:** Aa × Aa

**Punnett-Quadrat:**

|       | **A** | **a** |
|-------|-------|-------|
| **A** | **AA** | **Aa** |
| **a** | **Aa** | **aa** |

**F₂-Genotyp:** 1 AA : 2 Aa : 1 aa (1:2:1)
**F₂-Phänotyp (dominant-rezessiv):** **3 rot : 1 weiß** (3:1)

**Erklärung:**
- **AA** (1/4) → rot (dominant)
- **Aa** (2/4) → rot (A dominant)
- **aa** (1/4) → weiß (rezessiv)
- **Phänotyp-Verhältnis:** **3:1** (rot:weiß)

---

#### 2c. 3. Mendelsche Regel (Unabhängigkeitsregel, Neukombinationsregel)

**Regel:** Gene für **verschiedene Merkmale** werden **unabhängig** voneinander vererbt (wenn sie auf **verschiedenen Chromosomen** liegen oder weit auseinander auf demselben Chromosom).

**Dihybrider Erbgang (2 Gene, je 2 Allele):**

**Beispiel:** Samenform (rund R, runzelig r) + Samenfarbe (gelb G, grün g)

**Kreuzung:** RRGG (rund, gelb) × rrgg (runzelig, grün)
- **F₁:** **100% RrGg** (rund, gelb, uniform)

**F₁ × F₁:** RrGg × RrGg

**Gameten (F₁):** RG, Rg, rG, rg (je 1/4, **unabhängige Verteilung**)

**Punnett-Quadrat (4×4):**

|       | **RG** | **Rg** | **rG** | **rg** |
|-------|--------|--------|--------|--------|
| **RG** | RRGG  | RRGg  | RrGG  | RrGg  |
| **Rg** | RRGg  | RRgg  | RrGg  | Rrgg  |
| **rG** | RrGG  | RrGg  | rrGG  | rrGg  |
| **rg** | RrGg  | Rrgg  | rrGg  | rrgg  |

**F₂-Phänotyp-Verhältnis:** **9:3:3:1**

- **9** rund, gelb (R_G_: RRGG, RRGg, RrGG, RrGg)
- **3** rund, grün (R_gg: RRgg, Rrgg)
- **3** runzelig, gelb (rrG_: rrGG, rrGg)
- **1** runzelig, grün (rrgg)

**Wichtig:** Dieses Verhältnis gilt nur, wenn **Gene unabhängig** vererbt werden (verschiedene Chromosomen oder keine Kopplung).

---

### 3. Dominanz-Verhältnisse

**Varianten der Dominanz:**

| Typ | Genotyp | Phänotyp | Beispiel |
|-----|---------|----------|----------|
| **Dominant-rezessiv** | AA, Aa → dominant; aa → rezessiv | AA = Aa ≠ aa | Blütenfarbe (A rot, a weiß): AA/Aa → rot, aa → weiß |
| **Intermediär** (unvollständige Dominanz) | Aa → **Mischphänotyp** | AA ≠ Aa ≠ aa | Wunderblume: AA rot, Aa rosa, aa weiß (1:2:1 Phänotyp = Genotyp) |
| **Kodominanz** | Beide Allele **gleichzeitig** sichtbar | AA, AB, BB (beide exprimiert) | **AB0-Blutgruppen:** A^A^A, A^A^B → A; B^B^B, A^B^B → B; **A^A B^B → AB** (kodominant); 00 → 0 |

**Intermediäre Dominanz (F₂-Verhältnis):**
- **Genotyp:** 1 AA : 2 Aa : 1 aa (1:2:1)
- **Phänotyp:** 1 rot : 2 rosa : 1 weiß (**1:2:1**, nicht 3:1!)

**Kodominanz (AB0-System):**
- **A^A, A^B** (Allele): A^A dominant über 0, B^B dominant über 0, **A^A + B^B kodominant**
- **Genotyp → Phänotyp:**
  - A^A^A, A^A0 → **A**
  - B^BB^B, B^B0 → **B**
  - **A^AB^B** → **AB** (beide Antigene exprimiert)
  - 00 → **0** (keine Antigene)

---

### 4. Rückkreuzung (Testkreuzung)

**Problem:** Individuum mit **dominantem Phänotyp** (z. B. rot) → Genotyp **AA** oder **Aa**?

**Lösung:** **Rückkreuzung** (Testkreuzung) mit **homozygot rezessivem** Partner (aa)

**Kreuzung 1:** AA × aa
- **Nachkommen:** 100% Aa → **100% rot**
- **Schluss:** Elternteil war **AA** (homozygot dominant)

**Kreuzung 2:** Aa × aa
- **Nachkommen:** 50% Aa (rot), 50% aa (weiß) → **1:1**
- **Schluss:** Elternteil war **Aa** (heterozygot)

---

### 5. Klinische Beispiele (Mendelsche Vererbung beim Menschen)

**Autosomal-dominant:**
- **Heterozygot krank** (Aa), homozygot rezessiv gesund (aa)
- **Beispiele:** **Marfan-Syndrom** (Bindegewebs-Erkrankung), **Achondroplasie** (Kleinwuchs), **Huntington-Krankheit** (Chorea Huntington, neurodegenerativ)
- **Vererbung:** 50% Risiko bei erkranktem Elternteil (Aa) × gesundem Partner (aa)

**Autosomal-rezessiv:**
- **Homozygot rezessiv krank** (aa), heterozygot gesund (Aa, Carrier/Träger)
- **Beispiele:** **Mukoviszidose** (CF, CFTR-Gen), **Sichelzellanämie** (HbS), **Phenylketonurie** (PKU, Phenylalanin-Abbau ↓)
- **Vererbung:** 25% Risiko bei beiden Eltern heterozygot (Aa × Aa)

`,
      lernziele: [
        "Die Mendelschen Regeln (Uniformitäts-, Spaltungs- und Unabhängigkeitsregel) erklären und auf Kreuzungsbeispiele anwenden können.",
        "Den Unterschied zwischen Genotyp und Phänotyp sowie zwischen homozygot und heterozygot beschreiben können.",
        "Dominant-rezessive, intermediäre und kodominante Dominanzverhältnisse unterscheiden und Beispiele nennen können.",
        "Die Testkreuzung (Rückkreuzung) erklären und zur Genotypbestimmung einsetzen können.",
        "Klinische Beispiele autosomal-dominanter und autosomal-rezessiver Erbkrankheiten beim Menschen benennen können.",
      ],
      sections: [
        {
          heading: "Grundbegriffe der Genetik",
          text: "Gen, Allel, Genotyp und Phänotyp sind die Grundbegriffe der klassischen Genetik. Homozygote Individuen tragen zwei gleiche Allele (AA oder aa), heterozygote zwei verschiedene (Aa). Dominante Allele setzen sich auch im heterozygoten Zustand durch, rezessive nur bei Homozygotie.",
          merksatz:
            "Genotyp = genetische Ausstattung (AA, Aa, aa); Phänotyp = sichtbares Merkmal. Dominant setzt sich durch, rezessiv nur bei aa sichtbar.",
        },
        {
          heading: "Mendelsche Regeln",
          text: "Die 1. Mendelsche Regel (Uniformitätsregel) besagt: Homozygote Eltern (AA × aa) liefern in F₁ 100% uniforme Heterozygote (Aa). Die 2. Regel (Spaltungsregel): F₁-Hybriden (Aa × Aa) spalten in F₂ im Verhältnis 3:1 (Phänotyp) bzw. 1:2:1 (Genotyp). Die 3. Regel (Unabhängigkeitsregel): Zwei unabhängige Gene (RrGg × RrGg) ergeben in F₂ das Verhältnis 9:3:3:1.",
          merksatz:
            "1. Uniformität (AA × aa → 100% Aa), 2. Spaltung (Aa × Aa → 3:1 Phänotyp), 3. Unabhängigkeit (RrGg × RrGg → 9:3:3:1).",
        },
        {
          heading: "Dominanzverhältnisse und Testkreuzung",
          text: "Bei intermediärer Dominanz zeigt Aa einen Mischphänotyp (F₂-Verhältnis 1:2:1). Bei Kodominanz werden beide Allele gleichzeitig exprimiert (AB0-System: A^AB^B → AB). Die Testkreuzung mit einem homozygot rezessiven Partner (aa) klärt, ob ein dominanter Phänotyp AA oder Aa zugrunde liegt: 100% dominant → AA, 1:1 → Aa.",
          merksatz: "Testkreuzung × aa: 100% dominant = AA; 1:1 (dominant:rezessiv) = Aa.",
        },
      ],
      merksätze: [
        "Mendelsche Regeln: 1. Uniformität (AA × aa → 100% Aa, uniform), 2. Spaltung (Aa × Aa → 3:1 Phänotyp, 1:2:1 Genotyp), 3. Unabhängigkeit (RrGg × RrGg → 9:3:3:1, 2 Gene unabhängig).",
        "Dominanz-Typen: Dominant-rezessiv: AA = Aa ≠ aa (3:1 Phänotyp). Intermediär: AA ≠ Aa ≠ aa (1:2:1 Phänotyp = Genotyp). Kodominanz: Beide exprimiert (AB0: A^AB^B → AB).",
        "Autosomal-rezessiv: aa krank, Aa gesund (Carrier). Aa × Aa → 25% krank (aa), 50% Carrier (Aa), 25% gesund (AA). Beispiele: Mukoviszidose, Sichelzellanämie, PKU.",
      ],
      diagram: "blood-groups",
      selfTest: [
        {
          question: "Welche Aussage über genetische Grundbegriffe ist korrekt?",
          options: [
            "Der Genotyp ist das sichtbare Merkmal eines Organismus.",
            "Ein heterozygoter Organismus hat zwei identische Allele für ein Gen.",
            "Der Genotyp ist die genetische Ausstattung (Allel-Kombination), der Phänotyp ist das sichtbare Merkmal. Homozygot bedeutet beide Allele gleich (AA oder aa), heterozygot bedeutet beide Allele unterschiedlich (Aa). Ein dominantes Allel (A) setzt sich auch bei Heterozygoten durch, ein rezessives Allel (a) ist nur bei Homozygoten (aa) sichtbar.",
            "Allele sind unterschiedliche Gene auf verschiedenen Chromosomen.",
            "Ein rezessives Allel setzt sich auch bei Heterozygoten durch.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** **Genetische Grundbegriffe:**\n\n**Gen vs. Allel:**\n- **Gen:** DNA-Abschnitt, kodiert für ein Merkmal (z. B. Gen für Blütenfarbe)\n- **Allel:** **Variante** eines Gens (z. B. A [rot], a [weiß])\n\n**Genotyp vs. Phänotyp:**\n- **Genotyp:** **Genetische Ausstattung** (Allel-Kombination, z. B. AA, Aa, aa)\n- **Phänotyp:** **Sichtbares Merkmal** (Ausprägung, z. B. rote Blüte, weiße Blüte)\n\n**Homozygot vs. Heterozygot:**\n- **Homozygot:** Beide Allele **gleich**\n  - **AA** (homozygot dominant)\n  - **aa** (homozygot rezessiv)\n- **Heterozygot:** Beide Allele **unterschiedlich** (**Aa**)\n\n**Dominant vs. Rezessiv:**\n- **Dominant** (Großbuchstabe, A):\n  - Setzt sich durch, auch bei **Heterozygoten** (Aa) sichtbar\n  - **AA** → dominant Phänotyp (z. B. rot)\n  - **Aa** → dominant Phänotyp (z. B. rot)\n- **Rezessiv** (Kleinbuchstabe, a):\n  - Nur bei **Homozygoten** (aa) sichtbar\n  - **aa** → rezessiv Phänotyp (z. B. weiß)\n\n**Falsch (A):** **Phänotyp** (nicht Genotyp) = sichtbares Merkmal. Genotyp = genetische Ausstattung.\n\n**Falsch (B):** **Homozygot** (nicht heterozygot) = zwei identische Allele. Heterozygot = unterschiedliche Allele (Aa).\n\n**Falsch (D):** Allele = **Varianten desselben Gens** (auf homologen Chromosomen), nicht unterschiedliche Gene.\n\n**Falsch (E):** **Dominantes** (nicht rezessives) Allel setzt sich bei Heterozygoten durch. Rezessiv nur sichtbar bei aa.",
          difficulty: 1,
          tags: ["genotyp", "phänotyp", "allele"],
        },
        {
          question: "Welche Aussage über die 1. Mendelsche Regel (Uniformitätsregel) ist korrekt?",
          options: [
            "Bei Kreuzung zweier heterozygoter Eltern (Aa × Aa) ist die F₁-Generation uniform.",
            "Bei Kreuzung zweier homozygoter Eltern mit unterschiedlichen Merkmalen (AA × aa) ist die F₁-Generation uniform (100% Aa) und zeigt den dominanten Phänotyp (100% rot, wenn A dominant).",
            "Die F₁-Generation zeigt ein Spaltungsverhältnis von 3:1.",
            "Die 1. Mendelsche Regel beschreibt die Vererbung von zwei Merkmalen gleichzeitig.",
            "Bei Kreuzung AA × aa ist die F₁-Generation zu 50% AA und 50% aa.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** **1. Mendelsche Regel** (Uniformitätsregel):\n\n**Regel:** Kreuzt man **reinerbige (homozygote)** Eltern mit **unterschiedlichen Merkmalen**, sind alle Nachkommen der **F₁-Generation uniform** (gleich im Genotyp + Phänotyp).\n\n**Beispiel:** Blütenfarbe (A rot dominant, a weiß rezessiv)\n\n**Kreuzung:**\n- **P** (Elterngeneration): **AA** (rot, homozygot dominant) × **aa** (weiß, homozygot rezessiv)\n- **Gameten:** A × a\n- **F₁:** **100% Aa** (heterozygot)\n- **Phänotyp F₁:** **100% rot** (A dominant über a)\n\n**Wichtig:**\n- F₁ ist **uniform** (alle Aa, alle rot)\n- **Kein** Spaltungsverhältnis (das kommt erst in F₂, 2. Mendelsche Regel)\n\n**Falsch (A):** Heterozygote Eltern (Aa × Aa) → F₁ **nicht uniform** (Spaltung 3:1, 2. Mendelsche Regel). 1. Regel gilt nur für **homozygote** Eltern.\n\n**Falsch (C):** **3:1-Spaltung** tritt in **F₂** auf (Aa × Aa), nicht F₁. F₁ ist uniform.\n\n**Falsch (D):** 1. Mendelsche Regel = **monohybrider** Erbgang (1 Merkmal). **2 Merkmale** = 3. Mendelsche Regel (Unabhängigkeitsregel, dihybrider Erbgang).\n\n**Falsch (E):** AA × aa → F₁ **100% Aa** (nicht 50% AA, 50% aa). Alle F₁ sind heterozygot (Aa).",
          difficulty: 1,
          tags: ["mendel", "uniformitätsregel", "f1-generation"],
        },
        {
          question: "Welche Aussage über die 2. Mendelsche Regel (Spaltungsregel) ist korrekt?",
          options: [
            "Bei Kreuzung zweier F₁-Hybriden (Aa × Aa) ist die F₂-Generation uniform.",
            "Bei Kreuzung Aa × Aa beträgt das Phänotyp-Verhältnis in F₂ immer 1:2:1.",
            "Bei Kreuzung zweier F₁-Hybriden (Aa × Aa) spaltet sich die F₂-Generation auf. Das Genotyp-Verhältnis ist 1 AA : 2 Aa : 1 aa (1:2:1). Bei dominant-rezessiver Vererbung ist das Phänotyp-Verhältnis 3 dominant : 1 rezessiv (3:1), da AA und Aa beide den dominanten Phänotyp zeigen.",
            "Das Genotyp-Verhältnis in F₂ beträgt 3:1.",
            "Die 2. Mendelsche Regel gilt nur für die Vererbung von zwei Merkmalen.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** **2. Mendelsche Regel** (Spaltungsregel):\n\n**Regel:** Kreuzt man **F₁-Hybriden** (Aa × Aa), **spaltet** sich die F₂-Generation in einem bestimmten Verhältnis auf.\n\n**Kreuzung:** Aa × Aa (beide heterozygot)\n\n**Punnett-Quadrat:**\n\n|       | **A** | **a** |\n|-------|-------|-------|\n| **A** | **AA** | **Aa** |\n| **a** | **Aa** | **aa** |\n\n**Ergebnis:**\n\n**Genotyp-Verhältnis:** **1 AA : 2 Aa : 1 aa** (1:2:1)\n- 1/4 AA (homozygot dominant)\n- 2/4 Aa (heterozygot)\n- 1/4 aa (homozygot rezessiv)\n\n**Phänotyp-Verhältnis (dominant-rezessiv):** **3:1**\n- **AA** (1/4) → dominant Phänotyp (z. B. rot)\n- **Aa** (2/4) → dominant Phänotyp (z. B. rot, A dominant)\n- **aa** (1/4) → rezessiv Phänotyp (z. B. weiß)\n- **3 dominant : 1 rezessiv** (3:1)\n\n**WICHTIG:** Phänotyp-Verhältnis **3:1** gilt nur bei **dominant-rezessiver** Vererbung. Bei **intermediärer** Dominanz: Phänotyp = Genotyp (1:2:1).\n\n**Falsch (A):** F₂ ist **nicht uniform**, sondern **spaltet** auf (3:1 Phänotyp). Uniform = F₁ (1. Mendelsche Regel).\n\n**Falsch (B):** Phänotyp-Verhältnis **3:1** (nicht 1:2:1) bei dominant-rezessiver Vererbung. **1:2:1** = Genotyp-Verhältnis (oder Phänotyp bei intermediär).\n\n**Falsch (D):** **Genotyp-Verhältnis 1:2:1** (nicht 3:1). **3:1** = Phänotyp-Verhältnis.\n\n**Falsch (E):** 2. Mendelsche Regel = **monohybrider** Erbgang (1 Merkmal). **2 Merkmale** = 3. Mendelsche Regel.",
          difficulty: 2,
          tags: ["spaltungsregel", "f2-generation", "mendel"],
        },
        {
          question:
            "Welche Aussage über die 3. Mendelsche Regel (Unabhängigkeitsregel) ist korrekt?",
          options: [
            "Die 3. Mendelsche Regel beschreibt die Vererbung eines einzelnen Merkmals.",
            "Bei Kreuzung RrGg × RrGg beträgt das Phänotyp-Verhältnis in F₂ immer 3:1.",
            "Gene für verschiedene Merkmale werden unabhängig voneinander vererbt (wenn auf verschiedenen Chromosomen oder weit auseinander). Bei dihybridem Erbgang (RrGg × RrGg) beträgt das F₂-Phänotyp-Verhältnis 9:3:3:1 (9 R_G_, 3 R_gg, 3 rrG_, 1 rrgg), wenn beide Merkmale dominant-rezessiv vererbt werden.",
            "Die 3. Mendelsche Regel gilt nur, wenn die Gene auf demselben Chromosom gekoppelt sind.",
            "Das Verhältnis 9:3:3:1 tritt in der F₁-Generation auf.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** **3. Mendelsche Regel** (Unabhängigkeitsregel, Neukombinationsregel):\n\n**Regel:** Gene für **verschiedene Merkmale** werden **unabhängig** voneinander vererbt (wenn auf **verschiedenen Chromosomen** liegen oder weit auseinander auf demselben Chromosom → keine Kopplung).\n\n**Dihybrider Erbgang** (2 Merkmale):\n\n**Beispiel:** Samenform (R rund dominant, r runzelig rezessiv) + Samenfarbe (G gelb dominant, g grün rezessiv)\n\n**Kreuzung:**\n- **P:** RRGG (rund, gelb) × rrgg (runzelig, grün)\n- **F₁:** **100% RrGg** (rund, gelb, uniform)\n\n**F₁ × F₁:** RrGg × RrGg\n\n**Gameten (F₁):** RG, Rg, rG, rg (je 1/4, **unabhängige Verteilung**)\n\n**F₂-Phänotyp-Verhältnis:** **9:3:3:1**\n- **9/16** rund, gelb (R_G_: RRGG, RRGg, RrGG, RrGg)\n- **3/16** rund, grün (R_gg: RRgg, Rrgg)\n- **3/16** runzelig, gelb (rrG_: rrGG, rrGg)\n- **1/16** runzelig, grün (rrgg)\n\n**Voraussetzung:** **Unabhängige Vererbung** (verschiedene Chromosomen oder keine Kopplung). Bei **Kopplung** (Gene auf demselben Chromosom, nah beieinander) → **abweichendes** Verhältnis.\n\n**Falsch (A):** 3. Mendelsche Regel = **mehrere Merkmale** (dihybrider Erbgang), nicht ein einzelnes Merkmal (das wäre 2. Regel).\n\n**Falsch (B):** **9:3:3:1** (nicht 3:1) bei dihybridem Erbgang. **3:1** = monohybrider Erbgang (1 Merkmal, 2. Mendelsche Regel).\n\n**Falsch (D):** 3. Mendelsche Regel gilt bei **unabhängiger** Vererbung (verschiedene Chromosomen oder keine Kopplung). Bei **Kopplung** (Gene nah beieinander auf demselben Chromosom) → abweichendes Verhältnis.\n\n**Falsch (E):** **9:3:3:1** tritt in **F₂** auf (nicht F₁). F₁ ist uniform (100% RrGg).",
          difficulty: 3,
          tags: ["unabhängigkeitsregel", "dihybrider erbgang", "mendel"],
        },
        {
          question: "Welche Aussage über Dominanz-Verhältnisse ist korrekt?",
          options: [
            "Bei intermediärer Dominanz zeigen AA und Aa denselben Phänotyp.",
            "Bei Kodominanz zeigt Aa einen Mischphänotyp.",
            "Bei intermediärer (unvollständiger) Dominanz zeigt Aa einen Mischphänotyp (z. B. Wunderblume: AA rot, Aa rosa, aa weiß), das F₂-Phänotyp-Verhältnis ist 1:2:1 (= Genotyp). Bei Kodominanz werden beide Allele gleichzeitig exprimiert (z. B. AB0-Blutgruppen: A^A B^B → AB, beide Antigene vorhanden).",
            "Bei dominant-rezessiver Vererbung ist das F₂-Phänotyp-Verhältnis immer 1:2:1.",
            "Kodominanz bedeutet, dass ein Allel vollständig dominant über das andere ist.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** **Dominanz-Verhältnisse:**\n\n**1. Dominant-rezessiv:**\n- **Genotyp → Phänotyp:** AA = Aa ≠ aa\n- **Beispiel:** Blütenfarbe (A rot, a weiß): AA/Aa → rot, aa → weiß\n- **F₂-Verhältnis (Aa × Aa):** Genotyp 1:2:1 (AA:Aa:aa), Phänotyp **3:1** (rot:weiß)\n\n**2. Intermediär** (unvollständige Dominanz):\n- **Heterozygot (Aa):** **Mischphänotyp** (zwischen AA und aa)\n- **Beispiel:** Wunderblume (Mirabilis jalapa):\n  - AA → rot\n  - **Aa → rosa** (Mischung)\n  - aa → weiß\n- **F₂-Verhältnis (Aa × Aa):** Genotyp 1:2:1 (AA:Aa:aa), Phänotyp **1:2:1** (1 rot : 2 rosa : 1 weiß)\n- **WICHTIG:** Phänotyp = Genotyp (1:2:1), nicht 3:1!\n\n**3. Kodominanz:**\n- **Beide Allele gleichzeitig exprimiert** (nicht gemischt!)\n- **Beispiel:** **AB0-Blutgruppen**\n  - Allele: A^A, B^B, 0\n  - A^A dominant über 0, B^B dominant über 0, **A^A + B^B kodominant**\n  - **Genotyp → Phänotyp:**\n    - A^A^A, A^A0 → **A** (A-Antigen)\n    - B^BB^B, B^B0 → **B** (B-Antigen)\n    - **A^AB^B** → **AB** (beide Antigene gleichzeitig exprimiert)\n    - 00 → **0** (keine Antigene)\n- **WICHTIG:** Bei AB sind **beide Allele sichtbar** (A + B Antigene), nicht gemischt!\n\n**Falsch (A):** Bei **intermediär** zeigt Aa **Mischphänotyp** (rosa), nicht gleich wie AA (rot). AA ≠ Aa ≠ aa.\n\n**Falsch (B):** Bei **Kodominanz** werden **beide Allele exprimiert** (z. B. AB: A + B Antigene), nicht gemischt. **Intermediär** = Mischphänotyp.\n\n**Falsch (D):** Bei dominant-rezessiv: F₂-Phänotyp **3:1** (nicht 1:2:1). **1:2:1** = Genotyp oder Phänotyp bei intermediär.\n\n**Falsch (E):** Kodominanz = **beide Allele gleichzeitig exprimiert** (nicht ein Allel dominant über das andere).",
          difficulty: 3,
          tags: ["dominanz", "intermediär", "kodominanz"],
        },
      ],
    },
    {
      id: "bio-5-02",
      title: "Chromosomen",
      content: `## Einleitung

**Chromosomen** sind:
1. **DNA-Protein-Komplexe** (DNA + Histone)
2. **Träger der genetischen Information**
3. In **Zellkern** lokalisiert (Eukaryoten)

**Mensch:** **46 Chromosomen** (23 Paare), **2n = 46** (diploid)
- **22 Autosomenpaare** (Chromosom 1–22)
- **1 Gonosomenpaar** (Geschlechtschromosomen: XX ♀, XY ♂)

---

## Kerninhalt

### 1. Chromosomen-Struktur

**Chromatid vs. Chromosom:**
- **Chromatid:** **1 DNA-Doppelstrang** + Histone (nach DNA-Replikation, vor Zellteilung)
- **Chromosom (metaphasisch):** **2 Schwester-Chromatiden** (identisch), verbunden am **Zentromer** (Centromer)

**Chromosomen-Komponenten:**

| Struktur | Funktion |
|----------|----------|
| **Zentromer** (Centromer) | Verbindung der 2 Schwester-Chromatiden, Ansatz für **Kinetochor** (Spindelfasern, Zellteilung) |
| **Kinetochor** | Protein-Komplex am Zentromer → Spindelfasern (Mikrotubuli) heften an → Chromatiden-Trennung (Anaphase) |
| **Telomere** | Chromosomenenden (TTAGGG-Repeats), Schutz vor Abbau, verkürzen sich bei jeder Teilung → Seneszenz (Alterung) |
| **Chromatid-Arm** | **p-Arm** (kurz, petit), **q-Arm** (lang) |

**Zentromer-Position:**
- **Metazentrisch:** Zentromer in Mitte → p-Arm ≈ q-Arm (z. B. Chromosom 1)
- **Submetazentrisch:** Zentromer leicht verschoben → p-Arm < q-Arm (z. B. Chromosom 2)
- **Akrozentrisch:** Zentromer sehr nah am Ende → p-Arm sehr kurz (z. B. Chromosom 13, 14, 15, 21, 22)

---

### 2. Karyotyp

**Definition:** Geordnete Darstellung aller Chromosomen einer Zelle (Größe, Zentromer-Position)

**Karyotyp-Notation:**
- **46,XX:** Normal weiblich (46 Chromosomen, XX)
- **46,XY:** Normal männlich (46 Chromosomen, XY)
- **47,XX,+21:** Trisomie 21 (Down-Syndrom, weiblich, extra Chromosom 21)
- **47,XXY:** Klinefelter-Syndrom (männlich, extra X-Chromosom)

**Karyogramm-Erstellung:**
1. **Zellkultur** (Lymphozyten, Fruchtwasser-Zellen)
2. **Mitose-Arrest** (Metaphase, Colchicin blockiert Spindel)
3. **Chromosomen-Färbung** (Giemsa → **G-Banding**, Hell-Dunkel-Muster)
4. **Fotografie + Sortierung** (nach Größe, Banding-Muster)

**Indikationen:** Verdacht auf Chromosomenaberration (Fehlgeburt, Entwicklungsstörung, Infertilität), pränatale Diagnostik

---

### 3. Chromosomenaberrationen

**Klassifikation:**
- **Numerische Aberrationen:** Chromosomenzahl-Abweichung (Aneuploidie, Polyploidie)
- **Strukturelle Aberrationen:** Chromosomenstruktur-Veränderung (Deletion, Duplikation, Translokation, Inversion)

---

#### 3a. Numerische Aberrationen

**Aneuploidie:** Chromosomenzahl ≠ Vielfaches von 23 (z. B. 45, 47)

**Trisomie** (2n+1 = 47, 1 extra Chromosom):

| Trisomie | Karyotyp | Klinisches Bild | Inzidenz |
|----------|----------|-----------------|----------|
| **Trisomie 21** (Down-Syndrom) | 47,XX/XY,+21 | **Häufigste Autosom-Trisomie**, faziale Dysmorphie (Epikanthus, flaches Profil), Herzfehler (AV-Kanal, VSD), Hypotonie, geistige Behinderung (variabel), erhöhtes Leukämie-Risiko | 1:700 (↑ mit Mutter-Alter) |
| **Trisomie 18** (Edwards-Syndrom) | 47,XX/XY,+18 | Schwere Fehlbildungen (Herz, Nieren, ZNS), geballte Fäuste (overlapping fingers), **letal** (90% sterben im 1. Lebensjahr) | 1:6.000 |
| **Trisomie 13** (Pätau-Syndrom) | 47,XX/XY,+13 | Schwere Fehlbildungen (Holoprosenzephalie, Lippen-Kiefer-Gaumenspalte, Polydaktylie), **letal** (90% sterben im 1. Jahr) | 1:10.000 |

**Monosomie** (2n-1 = 45, 1 fehlendes Chromosom):
- **Autosom-Monosomie:** **Letal** (nicht mit Leben vereinbar, Fehlgeburt)
- **Monosomie X** (Turner-Syndrom): 45,X (siehe Gonosomen-Aberrationen)

**Polyploidie** (Vielfaches von 23, z. B. 3n = 69 [Triploidie], 4n = 92 [Tetraploidie]):
- **Beim Menschen:** **Letal** (Fehlgeburt, nicht lebensfähig)
- **Ursache:** Polyspermie (Triploidie), Fehler bei Meiose/Mitose

---

#### 3b. Gonosomen-Aberrationen (Geschlechtschromosomen)

| Aberration | Karyotyp | Phänotyp | Klinisches Bild |
|------------|----------|----------|-----------------|
| **Klinefelter-Syndrom** | **47,XXY** (häufigste Form), 48,XXXY | **Männlich** (Y vorhanden) | Hypogonadismus (kleine Hoden), Infertilität (Azoospermie), Gynäkomastie (Brustentwicklung), hoher Wuchs, leichte kognitive Defizite (variabel) |
| **Turner-Syndrom** | **45,X** (Monosomie X) | **Weiblich** | Kleinwuchs, Pterygium colli (Flügelfell Nacken), Herzfehler (Aortenisthmusstenose), Nierenfehlbildungen, Ovarial-Dysgenesie (Streak-Gonaden, Infertilität, primäre Amenorrhö), normale Intelligenz |
| **Triple-X-Syndrom** | 47,XXX | **Weiblich** | Meist **unauffällig** (oft unentdeckt), hoher Wuchs, leichte Lern-/Verhaltensprobleme (variabel), Fertilität meist normal |
| **XYY-Syndrom** | 47,XYY | **Männlich** | Meist **unauffällig**, hoher Wuchs, leichte Lern-/Verhaltensprobleme (variabel), Fertilität meist normal |

**Wichtig:**
- **Y-Chromosom vorhanden → männlich** (auch bei XXY, XYY)
- **Kein Y-Chromosom → weiblich** (45,X, 47,XXX)

---

#### 3c. Strukturelle Aberrationen

**Deletion:** Verlust eines Chromosomenabschnitts

| Syndrom | Deletion | Klinisches Bild |
|---------|----------|-----------------|
| **Cri-du-chat-Syndrom** (Katzenschrei-Syndrom) | **5p-** (kurzer Arm Chromosom 5) | Charakteristischer Schrei (katzenartig, Larynx-Hypoplasie), Mikrozephalie, faziale Dysmorphie, geistige Behinderung |
| **Williams-Beuren-Syndrom** | **7q11.23** (Elastin-Gen-Deletion) | Elfengesicht, Aortenstenose (supravalvulär), Hyperkalzämie, geistige Behinderung, hypersozialer Charakter |
| **DiGeorge-Syndrom** | **22q11** (CATCH-22: Cardiac, Abnormal face, Thymus-Hypoplasie, Cleft palate, Hypokalzämie, 22) | Herzfehler, Gaumenspalte, Thymus-Hypoplasie (T-Zell-Defizienz), Nebenschilddrüsen-Hypoplasie (Hypokalzämie) |

**Duplikation:** Verdopplung eines Chromosomenabschnitts → meist Imbalance → Fehlbildungen

**Translokation:** Transfer eines Chromosomenabschnitts auf anderes Chromosom

- **Balancierte Translokation:** Kein Materialverlust → **Träger meist gesund**, aber erhöhtes Risiko für **unbalancierte Translokation** in Nachkommen (Fehlgeburt, Trisomie)
  - **Beispiel:** Robertsonsche Translokation (Fusion akrozentrischer Chromosomen, z. B. 14;21) → Elternteil 45 Chromosomen (balanciert, gesund), Kind kann Trisomie 21 haben (unbalanciert)

**Inversion:** Chromosomenabschnitt um 180° gedreht → meist **klinisch unauffällig** (keine Imbalance), aber erhöhtes Risiko für Fehlgeburten (unbalancierte Gameten)

---

### 4. Nicht-Disjunktion (Non-Disjunction)

**Definition:** Fehlerhafte Chromosomen-Verteilung während **Meiose** oder **Mitose**

**Meiose I:** Homologe Chromosomen trennen sich nicht → Gameten mit n+1 oder n-1
**Meiose II:** Schwester-Chromatiden trennen sich nicht → Gameten mit n+1 oder n-1

**Folge:** Aneuploidie (Trisomie, Monosomie)

**Risikofaktoren:**
- **Mütterliches Alter ↑:** Hauptrisikofaktor für Trisomie 21 (Meiose-I-Fehler)
  - 20 Jahre: ~1:1.500
  - 35 Jahre: ~1:350
  - 40 Jahre: ~1:100

`,
      lernziele: [
        "Den Aufbau eines Chromosoms (Zentromer, Telomere, p- und q-Arm) beschreiben können.",
        "Karyotyp-Notation lesen und interpretieren können (z. B. 46,XX; 47,XY,+21).",
        "Die häufigsten numerischen Chromosomenaberrationen (Trisomie 21, Klinefelter, Turner) mit Karyotyp und Klinik benennen können.",
        "Strukturelle Aberrationen (Deletion, Duplikation, Translokation, Inversion) unterscheiden und klinische Syndrome zuordnen können.",
        "Die Nicht-Disjunktion als Ursache von Aneuploidie erklären und den Einfluss des mütterlichen Alters kennen.",
      ],
      sections: [
        {
          heading: "Chromosomenstruktur und Karyotyp",
          text: "Chromosomen bestehen aus DNA und Histonen. Das Zentromer verbindet die beiden Schwester-Chromatiden und dient als Ansatz für Spindelfasern. Telomere schützen die Chromosomenenden und verkürzen sich bei jeder Teilung. Der normale menschliche Karyotyp umfasst 46 Chromosomen (22 Autosomenpaare + XX/XY).",
          merksatz:
            "46,XX = weiblich; 46,XY = männlich. p-Arm = kurz, q-Arm = lang. Telomere schützen, verkürzen sich bei jeder Teilung.",
        },
        {
          heading: "Numerische Chromosomenaberrationen",
          text: "Trisomie 21 (Down-Syndrom, 47,+21) ist die häufigste Autosom-Trisomie (1:700), mit fazialer Dysmorphie, Herzfehlern und geistiger Behinderung. Klinefelter-Syndrom (47,XXY) ist männlich mit Hypogonadismus und Infertilität. Turner-Syndrom (45,X) ist weiblich mit Kleinwuchs, Pterygium colli und Ovarial-Dysgenesie. Das Risiko für Nicht-Disjunktionsfehler steigt mit dem mütterlichen Alter.",
          merksatz:
            "Klinefelter (47,XXY): männlich, Hypogonadismus, Infertilität. Turner (45,X): weiblich, Kleinwuchs, Streak-Gonaden.",
        },
        {
          heading: "Strukturelle Chromosomenaberrationen",
          text: "Deletion (Verlust), Duplikation (Verdopplung), Translokation (Verlagerung) und Inversion (Drehung) sind strukturelle Aberrationen. Wichtige klinische Syndrome: Cri-du-chat (5p-Deletion), Williams-Beuren (7q11.23) und DiGeorge (22q11, CATCH-22). Balancierte Translokationen sind beim Träger oft klinisch unauffällig, erhöhen aber das Risiko für unbalancierte Nachkommen.",
          merksatz:
            "Cri-du-chat = 5p-Deletion (Katzenschrei). DiGeorge = 22q11 (CATCH-22: Cardiac, Abnormal face, Thymus, Cleft, Hypokalzämie).",
        },
      ],
      diagram: "mitosis-phases",

      merksätze: [
        "Karyotyp-Notation: 46,XX = weiblich, 46,XY = männlich. 47,XX,+21 = Trisomie 21 weiblich (Down-Syndrom). 47,XXY = Klinefelter (männlich, Y vorhanden), 45,X = Turner (weiblich, kein Y).",
        "Trisomie 21 (Down): Häufigste Autosom-Trisomie (1:700), Inzidenz steigt mit Mutter-Alter. Faziale Dysmorphie (Epikanthus, flaches Profil), Herzfehler (AV-Kanal, VSD).",
        "Deletion-Syndrome: Cri-du-chat (5p-): Katzenschrei, Mikrozephalie. Williams-Beuren (7q11.23): Elfengesicht, Aortenstenose. DiGeorge (22q11, CATCH-22): Cardiac, Abnormal face, Thymus, Cleft, Hypokalzämie.",
      ],
      selfTest: [
        {
          question: "Welche Aussage über die Chromosomen-Struktur ist korrekt?",
          options: [
            "Ein Chromosom besteht aus einem einzelnen DNA-Strang ohne Proteine.",
            "Das Zentromer (Centromer) verbindet die beiden Schwester-Chromatiden und dient als Ansatzpunkt für Kinetochor (Spindelfasern). Telomere sind Chromosomenenden mit TTAGGG-Repeats, die vor Abbau schützen und sich bei jeder Teilung verkürzen. Die Chromosomenarme werden als p-Arm (kurz) und q-Arm (lang) bezeichnet.",
            "Telomere verlängern sich bei jeder Zellteilung.",
            "Der p-Arm ist immer länger als der q-Arm.",
            "Das Kinetochor ist ein DNA-Abschnitt auf dem Chromosom.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** **Chromosomen-Struktur:**\n\n**Chromatid vs. Chromosom:**\n- **Chromatid:** 1 DNA-Doppelstrang + Histone (nach Replikation)\n- **Chromosom** (metaphasisch): **2 Schwester-Chromatiden** (identisch), verbunden am Zentromer\n\n**Komponenten:**\n\n1. **Zentromer** (Centromer):\n   - **Verbindet** die 2 Schwester-Chromatiden\n   - Ansatzpunkt für **Kinetochor**\n   - Position definiert Chromosomentyp: metazentrisch (Mitte), submetazentrisch (leicht verschoben), akrozentrisch (sehr nah am Ende)\n\n2. **Kinetochor:**\n   - **Protein-Komplex** am Zentromer\n   - **Spindelfasern** (Mikrotubuli) heften an → Chromatiden-Trennung (Anaphase)\n\n3. **Telomere:**\n   - **Chromosomenenden**\n   - DNA-Sequenz: **TTAGGG-Repeats** (Tandem-Repeats, hunderte Wiederholungen)\n   - **Funktionen:**\n     - **Schutz** vor Abbau durch Exonukleasen\n     - Verhindern Fusion mit anderen Chromosomen\n   - **Verkürzung:** Bei jeder **Zellteilung** (DNA-Polymerase kann Enden nicht vollständig replizieren) → Seneszenz (Alterung, Hayflick-Limit ~50–70 Teilungen)\n   - **Telomerase:** Enzym (in Keimzellen, Stammzellen, Krebszellen) → verlängert Telomere\n\n4. **Chromatid-Arme:**\n   - **p-Arm** (petit, **kurz**)\n   - **q-Arm** (queue, **lang**)\n\n**Falsch (A):** Chromosom = DNA + **Histone** (Proteine) → Chromatin. Nicht nur DNA.\n\n**Falsch (C):** Telomere **verkürzen** sich bei jeder Teilung (nicht verlängern), außer Telomerase aktiv (Keimzellen, Stammzellen, Krebszellen).\n\n**Falsch (D):** **q-Arm** (nicht p-Arm) ist länger. p-Arm = kurz (petit).\n\n**Falsch (E):** Kinetochor = **Protein-Komplex** (nicht DNA-Abschnitt) am Zentromer.",
          difficulty: 1,
          tags: ["chromosomenstruktur", "zentromer", "telomere"],
        },
        {
          question: "Welche Aussage über den Karyotyp ist korrekt?",
          options: [
            "Der normale weibliche Karyotyp ist 46,XY.",
            "Der normale männliche Karyotyp ist 46,XX.",
            "Der normale Karyotyp ist 46,XX (weiblich, 22 Autosomenpaare + XX) oder 46,XY (männlich, 22 Autosomenpaare + XY). Notation: 47,XX,+21 bedeutet Trisomie 21 (Down-Syndrom) bei weiblichem Individuum. Karyotyp-Erstellung erfolgt durch Mitose-Arrest in Metaphase, Chromosomen-Färbung (G-Banding) und Sortierung.",
            "Der Karyotyp zeigt nur die Geschlechtschromosomen.",
            "Der Karyotyp wird in der Interphase erstellt.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** **Karyotyp:**\n\n**Definition:** Geordnete Darstellung **aller Chromosomen** einer Zelle (nach Größe, Zentromer-Position, Banding-Muster)\n\n**Normaler Karyotyp (Mensch):**\n- **46 Chromosomen** (23 Paare)\n- **22 Autosomenpaare** (Chromosom 1–22, nicht geschlechtsbestimmend)\n- **1 Gonosomenpaar** (Geschlechtschromosomen):\n  - **46,XX:** Weiblich (2 X-Chromosomen)\n  - **46,XY:** Männlich (1 X + 1 Y-Chromosom)\n\n**Karyotyp-Notation:**\n- **Chromosomenzahl, Gonosomen, Aberration**\n- **47,XX,+21:** 47 Chromosomen, weiblich (XX), zusätzliches Chromosom 21 (Trisomie 21, Down-Syndrom)\n- **47,XXY:** 47 Chromosomen, männlich (Y vorhanden), zusätzliches X (Klinefelter-Syndrom)\n- **45,X:** 45 Chromosomen, weiblich (kein Y), fehlendes X (Turner-Syndrom)\n\n**Karyogramm-Erstellung:**\n1. **Zellkultur:** Lymphozyten (Blut), Fruchtwasser-Zellen (pränatale Diagnostik)\n2. **Mitose-Arrest:** **Metaphase** (Colchicin blockiert Spindel → Chromosomen maximal kondensiert, sichtbar)\n3. **Chromosomen-Färbung:** Giemsa → **G-Banding** (Hell-Dunkel-Muster, charakteristisch für jedes Chromosom)\n4. **Fotografie + Sortierung:** Nach Größe, Zentromer-Position, Banding\n\n**Falsch (A):** 46,XX = **weiblich** (nicht männlich). 46,XY = männlich.\n\n**Falsch (B):** 46,XX = weiblich. 46,XY = **männlich** (nicht 46,XX).\n\n**Falsch (D):** Karyotyp zeigt **alle** Chromosomen (22 Autosomenpaare + 1 Gonosomenpaar), nicht nur Gonosomen.\n\n**Falsch (E):** Karyotyp wird in **Metaphase** erstellt (Mitose-Arrest, Chromosomen maximal kondensiert). Interphase: Chromatin dekondensiert, nicht sichtbar.",
          difficulty: 1,
          tags: ["karyotyp", "chromosomenzahl", "karyogramm"],
        },
        {
          question: "Welche Aussage über Trisomie 21 (Down-Syndrom) ist korrekt?",
          options: [
            "Trisomie 21 ist die seltenste Autosom-Trisomie.",
            "Trisomie 21 ist letal und nicht mit dem Leben vereinbar.",
            "Trisomie 21 (Down-Syndrom, 47,XX/XY,+21) ist die häufigste Autosom-Trisomie (1:700). Klinische Merkmale umfassen faziale Dysmorphie (Epikanthus, flaches Profil), Herzfehler (AV-Kanal, VSD), Hypotonie und geistige Behinderung (variabel). Die Inzidenz steigt mit dem mütterlichen Alter (40 Jahre: ~1:100).",
            "Trisomie 21 entsteht nur durch Robertsonsche Translokation.",
            "Das Risiko für Trisomie 21 ist unabhängig vom mütterlichen Alter.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** **Trisomie 21** (Down-Syndrom):\n\n**Karyotyp:** **47,XX,+21** (weiblich) oder **47,XY,+21** (männlich) – 3 Kopien von Chromosom 21\n\n**Häufigkeit:**\n- **Häufigste Autosom-Trisomie** (lebensfähig)\n- **Inzidenz:** ~1:700 Geburten (Durchschnitt)\n- **Starke Altersabhängigkeit** (mütterliches Alter):\n  - 20 Jahre: ~1:1.500\n  - 35 Jahre: ~1:350\n  - **40 Jahre: ~1:100**\n  - 45 Jahre: ~1:30\n\n**Klinische Merkmale:**\n\n1. **Faziale Dysmorphie:**\n   - **Epikanthus** (Hautfalte am inneren Augenwinkel)\n   - **Flaches Profil** (flache Nasenwurzel)\n   - **Makroglossie** (große Zunge)\n   - **Brushfield-Spots** (Iris)\n\n2. **Herzfehler** (40–50%):\n   - **AV-Kanal-Defekt** (Atrioventrikulärer Septumdefekt)\n   - **VSD** (Ventrikelseptumdefekt)\n\n3. **Weitere:**\n   - **Hypotonie** (Muskelschwäche)\n   - **Geistige Behinderung** (variabel, IQ 25–70)\n   - **Erhöhtes Leukämie-Risiko** (ALL, AML)\n   - **Frühe Alzheimer-Demenz** (>40 Jahre)\n\n**Ursachen:**\n- **Freie Trisomie 21** (95%): **Nicht-Disjunktion** (Meiose-Fehler, meist maternal, Meiose I)\n- **Translokations-Trisomie** (4%): Robertsonsche Translokation (z. B. 14;21), balancierter Träger-Elternteil\n- **Mosaik-Trisomie** (1%): Mitose-Fehler, nur Teil der Zellen trisomisch → milderer Phänotyp\n\n**Falsch (A):** Trisomie 21 = **häufigste** (nicht seltenste) Autosom-Trisomie.\n\n**Falsch (B):** Trisomie 21 ist **lebensfähig** (nicht letal). Trisomie 18/13 sind häufig letal. Autosom-Monosomie ist letal.\n\n**Falsch (D):** Trisomie 21 entsteht **meist** (95%) durch **Nicht-Disjunktion** (freie Trisomie), nur 4% durch Translokation.\n\n**Falsch (E):** Risiko **steigt stark** mit mütterlichem Alter (40 Jahre: ~1:100 vs. 20 Jahre: ~1:1.500).",
          difficulty: 2,
          tags: ["trisomie 21", "down-syndrom", "aneuploidie"],
        },
        {
          question: "Welche Aussage über Gonosomen-Aberrationen ist korrekt?",
          options: [
            "Klinefelter-Syndrom (47,XXY) ist weiblich.",
            "Turner-Syndrom (45,X) ist männlich.",
            "Klinefelter-Syndrom (47,XXY) ist männlich (Y vorhanden), klinische Merkmale sind Hypogonadismus (kleine Hoden), Infertilität (Azoospermie), Gynäkomastie und hoher Wuchs. Turner-Syndrom (45,X) ist weiblich, klinische Merkmale sind Kleinwuchs, Pterygium colli (Flügelfell Nacken), Ovarial-Dysgenesie (Streak-Gonaden, Infertilität) und normale Intelligenz.",
            "Turner-Syndrom ist fertil mit normaler Ovar-Funktion.",
            "Triple-X-Syndrom (47,XXX) ist letal.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** **Gonosomen-Aberrationen:**\n\n**Klinefelter-Syndrom:**\n- **Karyotyp:** **47,XXY** (häufigste Form), 48,XXXY, 48,XXYY\n- **Phänotyp:** **Männlich** (Y-Chromosom vorhanden → SRY-Gen → Hoden)\n- **Klinische Merkmale:**\n  - **Hypogonadismus:** Kleine Hoden (Testosteron ↓)\n  - **Infertilität:** Azoospermie (keine Spermien)\n  - **Gynäkomastie:** Brustentwicklung\n  - **Hoher Wuchs:** Lange Gliedmaßen\n  - **Kognitive Defizite:** Leicht (variabel, Sprach-/Lernprobleme)\n- **Häufigkeit:** 1:500 männliche Geburten\n\n**Turner-Syndrom:**\n- **Karyotyp:** **45,X** (Monosomie X)\n- **Phänotyp:** **Weiblich** (kein Y-Chromosom)\n- **Klinische Merkmale:**\n  - **Kleinwuchs:** ~140–150 cm (Wachstumshormon-Therapie möglich)\n  - **Pterygium colli:** Flügelfell am Nacken (Lymphödem fetal → Hautfalte)\n  - **Herzfehler:** Aortenisthmusstenose (40%)\n  - **Nierenfehlbildungen:** Hufeisennicre\n  - **Ovarial-Dysgenesie:** **Streak-Gonaden** (Bindegewebe, keine Eizellen) → **Infertilität**, **primäre Amenorrhö** (keine Menstruation), Östrogen ↓\n  - **Intelligenz:** **Normal** (keine geistige Behinderung)\n- **Häufigkeit:** 1:2.500 weibliche Geburten\n\n**Triple-X-Syndrom (47,XXX):**\n- **Phänotyp:** Weiblich\n- **Klinisch:** Meist **unauffällig**, hoher Wuchs, leichte Lern-/Verhaltensprobleme (variabel), Fertilität meist **normal**\n\n**XYY-Syndrom (47,XYY):**\n- **Phänotyp:** Männlich\n- **Klinisch:** Meist **unauffällig**, hoher Wuchs, leichte Lern-/Verhaltensprobleme, Fertilität meist **normal**\n\n**Falsch (A):** Klinefelter (47,XXY) = **männlich** (Y vorhanden), nicht weiblich.\n\n**Falsch (B):** Turner (45,X) = **weiblich** (kein Y), nicht männlich.\n\n**Falsch (D):** Turner = **infertil** (Streak-Gonaden, keine Eizellen), nicht fertil.\n\n**Falsch (E):** Triple-X (47,XXX) = meist **unauffällig** (nicht letal), Fertilität meist normal.",
          difficulty: 3,
          tags: ["klinefelter", "turner", "gonosomenaberrationen"],
        },
        {
          question: "Welche Aussage über Deletion-Syndrome ist korrekt?",
          options: [
            "Cri-du-chat-Syndrom entsteht durch Deletion von Chromosom 21.",
            "Williams-Beuren-Syndrom ist eine Duplikation von Chromosom 7.",
            "Cri-du-chat-Syndrom (5p-Deletion, kurzer Arm von Chromosom 5) zeigt charakteristischen Katzenschrei (Larynx-Hypoplasie), Mikrozephalie und geistige Behinderung. Williams-Beuren-Syndrom (7q11.23-Deletion, Elastin-Gen) zeigt Elfengesicht, supravalvuläre Aortenstenose und hypersozialen Charakter. DiGeorge-Syndrom (22q11-Deletion, CATCH-22) zeigt Herzfehler, Thymus-Hypoplasie und Hypokalzämie.",
            "DiGeorge-Syndrom ist eine Trisomie von Chromosom 22.",
            "Deletion-Syndrome sind immer balanciert und klinisch unauffällig.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** **Deletion-Syndrome:**\n\n**Cri-du-chat-Syndrom** (Katzenschrei-Syndrom):\n- **Deletion:** **5p-** (kurzer Arm [p-Arm] von Chromosom 5)\n- **Klinische Merkmale:**\n  - **Charakteristischer Schrei:** Katzenartig, schrill (Larynx-Hypoplasie)\n  - **Mikrozephalie** (kleiner Kopf)\n  - **Faziale Dysmorphie** (rundes Gesicht, Hypertelorismus [weiter Augenabstand])\n  - **Geistige Behinderung** (schwer)\n- **Häufigkeit:** 1:50.000\n\n**Williams-Beuren-Syndrom:**\n- **Deletion:** **7q11.23** (langer Arm [q-Arm] von Chromosom 7)\n- **Gen:** **Elastin-Gen-Deletion** (ELN) → Gefäß-/Bindegewebs-Störung\n- **Klinische Merkmale:**\n  - **Elfengesicht** (kleine Nase, volle Lippen, breite Stirn)\n  - **Supravalvuläre Aortenstenose** (oberhalb der Aortenklappe, Elastin-Mangel)\n  - **Hyperkalzämie** (infancy)\n  - **Geistige Behinderung** (leicht-mittel)\n  - **Hypersozialer Charakter** (extrem freundlich, vertrauensselig)\n- **Häufigkeit:** 1:10.000\n\n**DiGeorge-Syndrom** (22q11-Deletions-Syndrom, Velocardiofaciales Syndrom):\n- **Deletion:** **22q11** (langer Arm von Chromosom 22)\n- **Merkspruch:** **CATCH-22**:\n  - **C**ardiac defects (Herzfehler: Fallot-Tetralogie, Truncus arteriosus)\n  - **A**bnormal face (faziale Dysmorphie)\n  - **T**hymus-Hypoplasie (T-Zell-Defizienz, Immunschwäche)\n  - **C**left palate (Gaumenspalte)\n  - **H**ypokalzämie (Nebenschilddrüsen-Hypoplasie, PTH ↓)\n  - **22** (Chromosom 22)\n- **Häufigkeit:** 1:4.000\n\n**Falsch (A):** Cri-du-chat = **5p-Deletion** (nicht Chromosom 21). Chromosom 21 → Trisomie 21 (Down-Syndrom).\n\n**Falsch (B):** Williams-Beuren = **Deletion** (nicht Duplikation) von 7q11.23.\n\n**Falsch (D):** DiGeorge = **22q11-Deletion** (nicht Trisomie 22). Trisomie 22 ist meist letal (Fehlgeburt).\n\n**Falsch (E):** Deletion-Syndrome sind **unbalanciert** (Materialverlust) → klinisch **auffällig** (nicht unauffällig). **Balancierte** Translokation/Inversion → meist unauffällig.",
          difficulty: 3,
          tags: ["deletion", "cri-du-chat", "digeorge"],
        },
      ],
    },
    {
      id: "bio-5-03",
      title: "Geninteraktion",
      content: `## Einleitung

**Geninteraktion** beschreibt, wie:
1. **Mehrere Gene** ein **Merkmal** beeinflussen
2. **Ein Gen** mehrere **Merkmale** beeinflusst
3. Gene **miteinander interagieren** (Epistase, Komplementierung)

**Abweichungen** von Mendelschen Verhältnissen (9:3:3:1, 3:1) durch Geninteraktion

---

## Kerninhalt

### 1. Epistase

**Definition:** Ein Gen (**epistatisches Gen**) **überdeckt** die Wirkung eines anderen Gens (**hypostatisches Gen**)

**Beispiel: Fellfarbe bei Mäusen**

**Gene:**
- **B-Locus:** B (schwarz, dominant), b (braun, rezessiv)
- **C-Locus:** C (Farbbildung, dominant), c (keine Farbbildung [Albino], rezessiv)

**Interaktion:**
- **C (dominant):** Farbbildung möglich → B-Locus bestimmt Farbe
  - **B_C_** (B vorhanden, C vorhanden): **Schwarz** (9/16)
  - **bbC_** (bb, C vorhanden): **Braun** (3/16)
- **cc (homozygot rezessiv):** **Keine Farbbildung** → **Weiß (Albino)**, unabhängig von B-Locus
  - **B_cc**: Weiß (3/16)
  - **bbcc**: Weiß (1/16)

**Kreuzung:** BbCc × BbCc (dihybrider Erbgang)

**Erwartetes Mendel-Verhältnis (ohne Epistase):** 9:3:3:1

**Tatsächliches Verhältnis (mit Epistase):**
- **9** Schwarz (B_C_)
- **3** Braun (bbC_)
- **4** Weiß (B_cc + bbcc = 3+1)
- **Verhältnis:** **9:3:4**

**Erklärung:** **c** (epistatisch) überdeckt **B/b** (hypostatisch) → cc ist immer weiß, unabhängig von B

---

### 2. Polygenie (Polygenetische Vererbung)

**Definition:** **Mehrere Gene** (Polygene) beeinflussen **ein Merkmal** → kontinuierliche Variation

**Beispiel: Hautfarbe beim Menschen**

**Gene:** Mindestens 3–6 Gene (vereinfacht: A, B, C), jeweils mit Allelen (Großbuchstaben = Pigmentierung ↑, Kleinbuchstaben = Pigmentierung ↓)

**Prinzip:**
- **Additive Wirkung:** Jedes dominante/großbuchstabige Allel (A, B, C) trägt zur Pigmentierung bei
- **Anzahl dominanter Allele** bestimmt Hautfarbe-Intensität
- **Kontinuierliche Variation:** Viele Abstufungen (nicht diskrete Kategorien)

**Kreuzung (vereinfacht, 2 Gene):** AaBb × AaBb

**Phänotyp-Verteilung:**
- **AABB** (4 dominante Allele): Dunkelste Hautfarbe (1/16)
- **AABb, AaBB** (3 dominante Allele): Dunkel (4/16)
- **AAbb, AaBb, aaBB** (2 dominante Allele): Mittel (6/16)
- **Aabb, aaBb** (1 dominantes Allel): Hell (4/16)
- **aabb** (0 dominante Allele): Hellste Hautfarbe (1/16)

**Verhältnis:** **1:4:6:4:1** (glockenförmige Verteilung)

**Weitere Beispiele:**
- **Körpergröße:** 100+ Gene, Umweltfaktoren (Ernährung)
- **Hautfarbe, Augenfarbe**
- **Intelligenz** (sehr viele Gene + Umwelt)

---

### 3. Pleiotropie

**Definition:** **Ein Gen** beeinflusst **mehrere Merkmale** (phänotypische Effekte)

**Beispiel: Sichelzellanämie (HbS)**

**Gen:** β-Globin-Gen (Hämoglobin)
- **Mutation:** Glu → Val (Position 6) → HbS (Sichelzell-Hämoglobin)

**Ein Gen (HbS) → Viele Effekte:**
1. **Erythrozyten:** Sichelform bei Hypoxie (niedrig O₂)
2. **Hämolyse:** Vorzeitiger Erythrozyten-Abbau → Anämie
3. **Gefäßverschlüsse:** Sichelzellen blockieren Kapillaren → Schmerz (Schmerzkrisen), Organschäden (Milz, Knochen, Niere)
4. **Malaria-Resistenz:** Heterozygote (HbA/HbS) → partielle Resistenz gegen *Plasmodium falciparum* (Malaria)
  - **Balancing Selection:** Heterozygoten-Vorteil in Malaria-Gebieten

**Genotyp → Phänotyp:**
- **HbA/HbA:** Normal, keine Sichelzellen, Malaria-anfällig
- **HbA/HbS:** Heterozygot (**Sichelzellträger**), meist asymptomatisch (leichte Anämie bei Hypoxie), **Malaria-Resistenz**
- **HbS/HbS:** Homozygot, **Sichelzellanämie** (schwer), Schmerzkrisen, Organschäden, frühe Mortalität (ohne Behandlung)

**Weitere Beispiele:**
- **Marfan-Syndrom:** Fibrillin-1-Mutation → Aortenerweiterung, Linsenluxation, langes Skelett, Arachnodaktylie
- **Phenylketonurie (PKU):** Phenylalanin-Hydroxylase-Mangel → Geistige Behinderung, helle Haut/Haare (Melanin ↓), Maus-Geruch

---

### 4. Komplementierung

**Definition:** **Zwei rezessive Mutationen** in **verschiedenen Genen** → **komplementieren** sich → **Wildtyp-Phänotyp** (normal)

**Prinzip:**
- **Gen A defekt (aa) + Gen B funktional (BB):** Produkt von Gen B kompensiert → normal
- **Gen A funktional (AA) + Gen B defekt (bb):** Produkt von Gen A kompensiert → normal
- **Beide Gene defekt (aabb):** Keine Kompensation → mutanter Phänotyp

**Beispiel: Blütenfarbe (vereinfacht)**

**Gene:**
- **Gen A:** Enzym A (Vorstufe → Zwischenprodukt)
- **Gen B:** Enzym B (Zwischenprodukt → Pigment [Farbe])

**Kreuzung:** aaBB (weiß, Enzym A defekt) × AAbb (weiß, Enzym B defekt)
- **F₁:** AaBb → **Farbe** (beide Enzyme funktional, komplementieren sich)
- **F₂:** 9 A_B_ (Farbe), 7 weiß (A_bb + aaB_ + aabb)
- **Verhältnis:** **9:7**

**Erklärung:** Nur wenn **beide** Enzyme funktional (A_B_) → Pigment → Farbe. Fehlt eines → weiß.

---

### 5. Zusammenfassung: Modifizierte Mendel-Verhältnisse

**Dihybrider Erbgang (AaBb × AaBb):**

| Interaktion | Verhältnis | Beispiel |
|-------------|------------|----------|
| **Keine Interaktion** (unabhängig) | **9:3:3:1** | Klassische Mendel (3. Regel) |
| **Epistase** | **9:3:4** | Fellfarbe Maus (C epistatisch über B) |
| **Komplementierung** | **9:7** | Blütenfarbe (beide Gene nötig) |
| **Doppelt-rezessiv epistatisch** | **9:7** | (wie Komplementierung) |
| **Dominant epistatisch** | **12:3:1** | Gen A dominant epistatisch über B |

**Wichtig:** Abweichungen von 9:3:3:1 → Geninteraktion (Epistase, Komplementierung, etc.)

`,
      lernziele: [
        "Den Begriff Epistase erklären und das modifizierte Phänotypverhältnis 9:3:4 ableiten können.",
        "Polygenie von Pleiotropie unterscheiden und je ein Beispiel nennen können.",
        "Den Heterozygoten-Vorteil der Sichelzellanämie als Beispiel für Pleiotropie und Selektion erläutern können.",
        "Das Prinzip der Komplementierung und das F₂-Verhältnis 9:7 erklären können.",
        "Abweichungen von Mendelschen Verhältnissen (9:3:3:1) als Hinweis auf Geninteraktion erkennen können.",
      ],
      sections: [
        {
          heading: "Epistase",
          text: "Epistase bedeutet, dass ein Gen (das epistatische) die Wirkung eines anderen (des hypostatischen) überdeckt. Beim klassischen Maus-Beispiel maskiert cc (Albino) die Fellfarbe des B-Locus vollständig. Die Kreuzung BbCc × BbCc ergibt statt 9:3:3:1 das Verhältnis 9:3:4 (schwarz:braun:weiß).",
          merksatz: "Epistatisches Gen (cc) überdeckt hypostatisches Gen (B/b). Verhältnis 9:3:4.",
        },
        {
          heading: "Polygenie und Pleiotropie",
          text: "Polygenie: Mehrere Gene beeinflussen ein Merkmal additiv (z. B. Hautfarbe), was zu kontinuierlicher Variation und glockenförmiger Verteilung führt. Pleiotropie: Ein Gen beeinflusst mehrere Merkmale (z. B. HbS → Sichelzellen, Anämie, Gefäßverschlüsse und Malaria-Resistenz bei Heterozygoten).",
          merksatz:
            "Polygenie: viele Gene → ein Merkmal (glockenförmig). Pleiotropie: ein Gen → viele Merkmale (z. B. Sichelzellanämie).",
        },
        {
          heading: "Komplementierung und modifizierte Verhältnisse",
          text: "Komplementierung: Zwei rezessive Mutationen in verschiedenen Genen (aaBB × AAbb) ergeben in F₁ einen Wildtyp-Phänotyp (AaBb), da sich die funktionalen Allele gegenseitig ergänzen. In F₂ entsteht ein 9:7-Verhältnis. Abweichungen von 9:3:3:1 zeigen stets Geninteraktion an.",
          merksatz: "Komplementierung (aaBB × AAbb) → F₁ normal, F₂ = 9:7.",
        },
      ],
      merksätze: [
        "Epistase: Epistatisches Gen (c) überdeckt hypostatisches Gen (B/b). Maus-Beispiel: cc (Albino) immer weiß, unabhängig von B. Verhältnis 9:3:4.",
        "Polygenie: Mehrere Gene → ein Merkmal (Hautfarbe, Körpergröße). Additive Wirkung → kontinuierliche Variation (glockenförmig, 1:4:6:4:1).",
        "Pleiotropie: Ein Gen → viele Merkmale. Sichelzellanämie (HbS): Sichelzellen + Anämie + Gefäßverschlüsse + Malaria-Resistenz (Heterozygoten-Vorteil).",
        "Komplementierung: Zwei rezessive Mutationen in verschiedenen Genen (aaBB × AAbb) → F₁ AaBb normal. F₂-Verhältnis 9:7.",
      ],
      diagram: "blood-groups",
      selfTest: [
        {
          question: "Welche Aussage über Epistase ist korrekt?",
          options: [
            "Epistase bedeutet, dass ein Gen mehrere Merkmale beeinflusst.",
            "Bei Epistase zeigt die F₂-Generation eines dihybriden Erbgangs immer ein 9:3:3:1-Verhältnis.",
            "Epistase bedeutet, dass ein Gen (epistatisches Gen) die Wirkung eines anderen Gens (hypostatisches Gen) überdeckt. Beispiel: Bei Mäusen ist cc (Albino) epistatisch über den B-Locus (Fellfarbe). Die Kreuzung BbCc × BbCc ergibt ein 9:3:4-Verhältnis (9 schwarz, 3 braun, 4 weiß), da cc immer weiß ist, unabhängig vom B-Genotyp.",
            "Epistatische Gene liegen immer auf demselben Chromosom wie hypostatische Gene.",
            "Das epistatische Gen wird immer durch das hypostatische Gen überdeckt.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** **Epistase:**\n\n**Definition:** Ein Gen (**epistatisches Gen**) **überdeckt** (maskiert) die Wirkung eines anderen Gens (**hypostatisches Gen**)\n\n**Beispiel: Fellfarbe bei Mäusen**\n\n**Gene:**\n- **B-Locus:** B (schwarz, dominant), b (braun, rezessiv)\n- **C-Locus:** C (Farbbildung, dominant), c (keine Farbbildung [Albino], rezessiv)\n\n**Interaktion:**\n- **C_ (C vorhanden):** Farbbildung möglich → **B-Locus** bestimmt Farbe:\n  - B_C_ (B vorhanden, C vorhanden): **Schwarz**\n  - bbC_ (bb, C vorhanden): **Braun**\n- **cc (homozygot rezessiv):** **Keine Farbbildung** → **Weiß (Albino)**, **unabhängig** von B-Locus:\n  - B_cc: Weiß (c epistatisch, überdeckt B)\n  - bbcc: Weiß\n\n**Kreuzung:** BbCc × BbCc (dihybrider Erbgang)\n\n**Erwartetes Mendel-Verhältnis (keine Epistase):** 9:3:3:1\n\n**Tatsächliches Verhältnis (mit Epistase):**\n- **9/16** Schwarz (B_C_)\n- **3/16** Braun (bbC_)\n- **3/16** Weiß (B_cc)\n- **1/16** Weiß (bbcc)\n- **Gesamt:** 9 schwarz : 3 braun : **4 weiß** (3+1)\n- **Verhältnis:** **9:3:4**\n\n**Erklärung:** **cc** ist **epistatisch** über **B/b** (hypostatisch). cc maskiert die Wirkung von B → immer weiß, unabhängig von B-Genotyp.\n\n**Falsch (A):** **Pleiotropie** (nicht Epistase) = ein Gen → mehrere Merkmale. Epistase = Gen-Gen-Interaktion (Überdeckung).\n\n**Falsch (B):** Bei Epistase weicht das Verhältnis von 9:3:3:1 ab (z. B. **9:3:4**). 9:3:3:1 = keine Geninteraktion.\n\n**Falsch (D):** Epistatische + hypostatische Gene können auf **verschiedenen Chromosomen** liegen (wie B und C). Lokalisation ist nicht definierend.\n\n**Falsch (E):** **Epistatisches** Gen überdeckt **hypostatisches** (nicht umgekehrt). Epistatisch = überdeckend, hypostatisch = überdeckt.",
          difficulty: 2,
          tags: ["epistase", "geninteraktion", "phänotyp"],
        },
        {
          question: "Welche Aussage über Polygenie (polygenetische Vererbung) ist korrekt?",
          options: [
            "Bei Polygenie beeinflusst ein Gen mehrere Merkmale.",
            "Polygenetische Merkmale zeigen diskrete Kategorien ohne Zwischenstufen.",
            "Polygenie bedeutet, dass mehrere Gene (Polygene) ein Merkmal beeinflussen. Die Allele wirken additiv, was zu einer kontinuierlichen Variation führt (z. B. Hautfarbe, Körpergröße). Bei zwei Genen (AaBb × AaBb) entsteht eine glockenförmige Verteilung mit einem 1:4:6:4:1-Phänotyp-Verhältnis, wobei die Anzahl dominanter Allele die Merkmalsausprägung bestimmt.",
            "Polygenetische Vererbung folgt immer einem 9:3:3:1-Verhältnis.",
            "Polygenie ist identisch mit Pleiotropie.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** **Polygenie** (Polygenetische Vererbung):\n\n**Definition:** **Mehrere Gene** (Polygene) beeinflussen **ein Merkmal** → **kontinuierliche Variation** (viele Abstufungen)\n\n**Prinzip:**\n- **Additive Wirkung:** Jedes dominante/großbuchstabige Allel (A, B, C, ...) trägt zur Merkmalsausprägung bei\n- **Anzahl dominanter Allele** bestimmt Intensität des Merkmals\n- **Kontinuierliches Spektrum:** Viele Zwischenstufen (nicht diskrete Kategorien)\n\n**Beispiel: Hautfarbe (vereinfacht, 2 Gene)**\n\n**Kreuzung:** AaBb × AaBb\n\n**Phänotyp-Verteilung:**\n- **AABB** (4 dominante Allele): Dunkelste Hautfarbe (1/16)\n- **AABb, AaBB** (3 dominante Allele): Dunkel (4/16)\n- **AAbb, AaBb, aaBB** (2 dominante Allele): Mittel (6/16)\n- **Aabb, aaBb** (1 dominantes Allel): Hell (4/16)\n- **aabb** (0 dominante Allele): Hellste Hautfarbe (1/16)\n\n**Verhältnis:** **1:4:6:4:1** (glockenförmige Verteilung)\n\n**Realität:** Hautfarbe wird von 3–6+ Genen beeinflusst → noch mehr Abstufungen, noch glattere Glockenform\n\n**Weitere Beispiele:**\n- **Körpergröße:** 100+ Gene + Umweltfaktoren (Ernährung)\n- **Intelligenz:** Viele Gene + Umwelt\n- **Blutdruck**\n\n**Merkmale polygenetischer Vererbung:**\n- **Kontinuierliche Variation** (fließende Übergänge)\n- **Glockenförmige Verteilung** (Normalverteilung)\n- **Umwelteinfluss** (oft erheblich)\n\n**Falsch (A):** **Pleiotropie** (nicht Polygenie) = ein Gen → mehrere Merkmale. **Polygenie** = viele Gene → ein Merkmal.\n\n**Falsch (B):** Polygenetische Merkmale zeigen **kontinuierliche Variation** (viele Zwischenstufen), nicht diskrete Kategorien.\n\n**Falsch (D):** Polygenetische Vererbung → **1:4:6:4:1** (2 Gene) oder glattere Glockenform (mehr Gene), nicht 9:3:3:1. 9:3:3:1 = dihybrider Erbgang ohne Geninteraktion.\n\n**Falsch (E):** Polygenie ≠ Pleiotropie. **Polygenie:** Viele Gene → ein Merkmal. **Pleiotropie:** Ein Gen → viele Merkmale.",
          difficulty: 1,
          tags: ["polygenie", "quantitative merkmale", "kontinuierliche variabilität"],
        },
        {
          question: "Welche Aussage über Pleiotropie ist korrekt?",
          options: [
            "Pleiotropie bedeutet, dass mehrere Gene ein Merkmal beeinflussen.",
            "Bei Pleiotropie zeigen alle Merkmale denselben Phänotyp.",
            "Pleiotropie bedeutet, dass ein Gen mehrere Merkmale (phänotypische Effekte) beeinflusst. Beispiel: Sichelzellanämie (HbS-Mutation) führt zu Sichelzellen, Hämolyse (Anämie), Gefäßverschlüssen (Schmerzkrisen, Organschäden) und Malaria-Resistenz bei Heterozygoten (HbA/HbS). Dies ist ein Beispiel für balancing selection (Heterozygoten-Vorteil).",
            "Pleiotropie tritt nur bei X-chromosomaler Vererbung auf.",
            "Sichelzellanämie ist ein Beispiel für Polygenie.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** **Pleiotropie:**\n\n**Definition:** **Ein Gen** beeinflusst **mehrere Merkmale** (phänotypische Effekte)\n\n**Beispiel: Sichelzellanämie (HbS)**\n\n**Gen:** β-Globin-Gen (Hämoglobin)\n- **Mutation:** Glu → Val (Position 6, GAG → GTG) → **HbS** (Sichelzell-Hämoglobin)\n\n**Ein Gen (HbS) → Viele Effekte:**\n\n1. **Erythrozyten:** Sichelform bei Hypoxie (niedrig O₂, desoxygeniert)\n2. **Hämolyse:** Vorzeitiger Erythrozyten-Abbau → **Anämie** (Hb ↓)\n3. **Gefäßverschlüsse:** Sichelzellen blockieren Kapillaren → **Schmerzkrisen** (Knochen, Abdomen), **Organschäden** (Milz-Infarkte, Nierenschäden, Schlaganfall)\n4. **Malaria-Resistenz:** Heterozygote (**HbA/HbS**) → partielle Resistenz gegen *Plasmodium falciparum* (Malaria-Parasit)\n   - **Mechanismus:** Parasit kann in Sichelzellen schlechter überleben\n   - **Balancing Selection:** Heterozygoten-Vorteil in Malaria-Gebieten (Afrika, Mittelmeer) → HbS-Allel bleibt in Population (trotz Nachteil bei Homozygoten)\n\n**Genotyp → Phänotyp:**\n- **HbA/HbA:** Normal, keine Sichelzellen, Malaria-anfällig\n- **HbA/HbS:** Heterozygot (**Sichelzellträger**, Sickle Cell Trait), meist asymptomatisch (leichte Anämie nur bei extremer Hypoxie), **Malaria-Resistenz**\n- **HbS/HbS:** Homozygot, **Sichelzellanämie** (schwer), Schmerzkrisen, Organschäden, frühe Mortalität (ohne Behandlung)\n\n**Weitere Beispiele:**\n- **Marfan-Syndrom:** Fibrillin-1-Mutation → Aortenerweiterung (Dissektions-Risiko), Linsenluxation (Auge), langes Skelett, Arachnodaktylie (Spinnenfinger)\n- **Phenylketonurie (PKU):** Phenylalanin-Hydroxylase-Mangel → Geistige Behinderung (Phenylalanin toxisch fürs ZNS), helle Haut/Haare (Melanin ↓, Tyrosin-Mangel)\n\n**Falsch (A):** **Polygenie** (nicht Pleiotropie) = mehrere Gene → ein Merkmal. **Pleiotropie** = ein Gen → mehrere Merkmale.\n\n**Falsch (B):** Bei Pleiotropie zeigen Merkmale **verschiedene** Phänotypen (z. B. Sichelzellen + Anämie + Schmerzkrisen), nicht denselben.\n\n**Falsch (D):** Pleiotropie kann bei **allen Vererbungstypen** auftreten (autosomal, X-chromosomal), nicht nur X-chromosomal.\n\n**Falsch (E):** Sichelzellanämie = **Pleiotropie** (ein Gen → viele Merkmale), nicht Polygenie (viele Gene → ein Merkmal).",
          difficulty: 3,
          tags: ["pleiotropie", "ein-gen-mehrere-merkmale", "geninteraktion"],
        },
        {
          question: "Welche Aussage über Komplementierung ist korrekt?",
          options: [
            "Bei Komplementierung haben beide Eltern denselben genetischen Defekt.",
            "Komplementierung führt zu einem 3:1-Phänotyp-Verhältnis in der F₂-Generation.",
            "Komplementierung bedeutet, dass zwei rezessive Mutationen in verschiedenen Genen sich gegenseitig kompensieren, sodass die F₁-Generation einen Wildtyp-Phänotyp (normal) zeigt. In der F₂-Generation (F₁ × F₁) ergibt sich ein 9:7-Verhältnis: 9/16 zeigen den Wildtyp-Phänotyp (A_B_), 7/16 den mutanten Phänotyp (A_bb + aaB_ + aabb), da beide funktionale Gene für den normalen Phänotyp erforderlich sind.",
            "Komplementierung kann nur bei monohybriden Erbgängen auftreten.",
            "Bei Komplementierung sind alle F₁-Nachkommen mutant.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** **Komplementierung:**\n\n**Definition:** **Zwei rezessive Mutationen** in **verschiedenen Genen** → **komplementieren** sich → **Wildtyp-Phänotyp** (normal) in F₁\n\n**Prinzip:**\n- **Elternteil 1:** Gen A defekt (aa), Gen B funktional (BB) → mutanter Phänotyp (Produkt A fehlt)\n- **Elternteil 2:** Gen A funktional (AA), Gen B defekt (bb) → mutanter Phänotyp (Produkt B fehlt)\n- **F₁:** AaBb → **beide Gene funktional** (A von Elter 2, B von Elter 1) → **Wildtyp-Phänotyp** (normal)\n\n**Beispiel: Blütenfarbe (vereinfacht)**\n\n**Gene:**\n- **Gen A:** Enzym A (Vorstufe → Zwischenprodukt)\n- **Gen B:** Enzym B (Zwischenprodukt → Pigment [Farbe])\n\n**Kreuzung:** aaBB (weiß, Enzym A defekt) × AAbb (weiß, Enzym B defekt)\n- **F₁:** AaBb → **Farbe** (beide Enzyme funktional, Biosynthese-Weg komplett)\n\n**F₁ × F₁:** AaBb × AaBb\n\n**F₂-Phänotyp:**\n- **9/16 A_B_** (beide Enzyme funktional): **Farbe** (Wildtyp)\n- **3/16 A_bb** (Enzym B defekt): Weiß (kein Pigment)\n- **3/16 aaB_** (Enzym A defekt): Weiß (kein Zwischenprodukt)\n- **1/16 aabb** (beide Enzyme defekt): Weiß\n- **Verhältnis:** **9:7** (9 Farbe : 7 weiß)\n\n**Erklärung:** Nur wenn **beide** Enzyme funktional (A_B_) → Biosynthese-Weg vollständig → Pigment → Farbe. Fehlt mindestens eines → kein Pigment → weiß.\n\n**Komplementations-Test:**\n- **Zweck:** Bestimmen, ob zwei Mutationen im **gleichen Gen** (keine Komplementierung) oder in **verschiedenen Genen** (Komplementierung) liegen\n- **F₁ Wildtyp:** Verschiedene Gene (Komplementierung)\n- **F₁ mutant:** Gleiches Gen (keine Komplementierung, beide Allele des gleichen Gens defekt)\n\n**Falsch (A):** Bei Komplementierung haben Eltern **verschiedene** genetische Defekte (Gen A vs. Gen B), nicht denselben.\n\n**Falsch (B):** Komplementierung → **9:7** (nicht 3:1). 3:1 = monohybrider Erbgang (Aa × Aa).\n\n**Falsch (D):** Komplementierung ist typischerweise **dihybrider** Erbgang (2 Gene, AaBb × AaBb), nicht monohybrid.\n\n**Falsch (E):** Bei Komplementierung sind alle **F₁** Nachkommen **Wildtyp** (normal, AaBb), nicht mutant.",
          difficulty: 3,
          tags: ["komplementierung", "zwei-gen-modell", "komplementäre gene"],
        },
        {
          question: "Welche Aussage über modifizierte Mendel-Verhältnisse ist korrekt?",
          options: [
            "Ein 9:3:3:1-Verhältnis zeigt immer Geninteraktion an.",
            "Ein 9:3:4-Verhältnis entsteht durch Komplementierung.",
            "Bei dihybridem Erbgang (AaBb × AaBb) entstehen verschiedene Phänotyp-Verhältnisse je nach Geninteraktion: 9:3:3:1 (keine Interaktion), 9:3:4 (Epistase, z. B. cc epistatisch), 9:7 (Komplementierung, beide Gene erforderlich), 12:3:1 (dominant epistatisch). Abweichungen von 9:3:3:1 zeigen Geninteraktion an.",
            "Ein 9:7-Verhältnis zeigt keine Geninteraktion.",
            "Alle Geninteraktionen führen zum gleichen Phänotyp-Verhältnis.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** **Modifizierte Mendel-Verhältnisse:**\n\n**Dihybrider Erbgang:** AaBb × AaBb (2 Gene, je 2 Allele)\n\n**Standard-Mendel (keine Geninteraktion):**\n- **Verhältnis:** **9:3:3:1**\n- **Phänotypen:** 9 A_B_, 3 A_bb, 3 aaB_, 1 aabb\n- **Interpretation:** Gene vererben **unabhängig**, keine Interaktion\n\n**Geninteraktion → Abweichungen von 9:3:3:1:**\n\n1. **Epistase (9:3:4):**\n   - **Beispiel:** Fellfarbe Maus (cc epistatisch über B/b)\n   - **Phänotypen:** 9 schwarz (B_C_), 3 braun (bbC_), 4 weiß (B_cc + bbcc)\n   - **Erklärung:** cc überdeckt B/b → immer weiß\n\n2. **Komplementierung (9:7):**\n   - **Beispiel:** Blütenfarbe (beide Enzyme A + B nötig)\n   - **Phänotypen:** 9 Farbe (A_B_), 7 weiß (A_bb + aaB_ + aabb)\n   - **Erklärung:** Mindestens ein Gen defekt → kein Pigment → weiß\n\n3. **Dominant epistatisch (12:3:1):**\n   - **Beispiel:** Gen A (A_) epistatisch über B/b\n   - **Phänotypen:** 12 (A_B_ + A_bb), 3 (aaB_), 1 (aabb)\n   - **Erklärung:** A_ maskiert B/b → gleicher Phänotyp\n\n4. **Doppelt-rezessiv epistatisch (9:7):**\n   - Wie Komplementierung (beide Gene nötig)\n\n**Regel:** **Abweichung von 9:3:3:1** → **Geninteraktion** (Epistase, Komplementierung, etc.)\n\n**Falsch (A):** **9:3:3:1** zeigt **keine** Geninteraktion (unabhängige Vererbung, 3. Mendelsche Regel). **Abweichungen** (9:3:4, 9:7, 12:3:1) zeigen Geninteraktion.\n\n**Falsch (B):** **9:3:4** = **Epistase** (nicht Komplementierung). **9:7** = Komplementierung.\n\n**Falsch (D):** **9:7** zeigt **Geninteraktion** (Komplementierung, beide Gene erforderlich für Wildtyp), nicht keine Geninteraktion.\n\n**Falsch (E):** Verschiedene Geninteraktionen → **verschiedene** Verhältnisse (9:3:4, 9:7, 12:3:1), nicht gleich.",
          difficulty: 2,
          tags: ["modifizierte mendel-verhältnisse", "epistase", "phänotyp-verhältnis"],
        },
      ],
    },
    {
      id: "bio-5-04",
      title: "Geschlechtsgebundene Vererbung",
      content: `## Einleitung

**Geschlechtsgebundene Vererbung** (Gonosomale Vererbung) betrifft Gene auf:
1. **X-Chromosom** (X-chromosomal, X-linked)
2. **Y-Chromosom** (Y-chromosomal, Y-linked)

**Besonderheit:** **Hemizygotie** bei Männern (XY) → nur 1 Kopie von X-chromosomalen Genen → rezessive Merkmale häufiger sichtbar

---

## Kerninhalt

### 1. X-chromosomale rezessive Vererbung

**Merkmal:** Gen auf **X-Chromosom**, **rezessiv**

**Genotyp → Phänotyp:**

| Genotyp | Phänotyp | Erklärung |
|---------|----------|-----------|
| **X^A X^A** (♀) | Gesund | Homozygot dominant |
| **X^A X^a** (♀) | **Gesund** (Konduktorin, Carrier) | Heterozygot, **A dominant** über a |
| **X^a X^a** (♀) | Krank | Homozygot rezessiv (selten!) |
| **X^A Y** (♂) | Gesund | Hemizygot, A dominant |
| **X^a Y** (♂) | **Krank** | **Hemizygot, rezessiv**, kein zweites X zur Kompensation |

**Vererbungsmuster:**

**Konduktorin (X^A X^a) × Gesunder Mann (X^A Y):**
- **Nachkommen:**
  - 50% Töchter: X^A X^A (gesund), X^A X^a (Konduktorin)
  - 50% Söhne: X^A Y (gesund), **X^a Y (krank)**
- **Verhältnis:** 50% der **Söhne** krank, **Töchter** gesund (oder Konduktorinnen)

**Wichtig:**
- **Männer häufiger betroffen** (hemizygot, nur 1 X)
- **Töchter meist gesund** (brauchen X^a X^a → selten, da kranke Väter oft nicht reproduzieren)
- **Keine Vater-Sohn-Übertragung** (Vater gibt Y an Sohn, X an Tochter)
- **Kreuzverwandtschaft** ↑ Risiko (z. B. Cousin-Cousine)

**Beispiele:**

**Hämophilie A** (Bluterkrankheit):
- **Gen:** F8 (Faktor VIII, Gerinnungsfaktor)
- **Phänotyp:** Blutungsneigung (Gelenke, Muskeln, spontan/Trauma)
- **Häufigkeit:** 1:5.000 ♂
- **Therapie:** Faktor VIII-Substitution

**Rot-Grün-Blindheit** (Farbsinnstörung):
- **Gene:** OPN1LW (Rot-Opsin), OPN1MW (Grün-Opsin) auf X-Chromosom
- **Typen:** Protanopie (Rot-Blindheit), Deuteranopie (Grün-Blindheit)
- **Häufigkeit:** ~8% ♂, ~0,5% ♀ (Europa)

**Muskeldystrophie Duchenne:**
- **Gen:** DMD (Dystrophin, Muskelprotein)
- **Phänotyp:** Progressive Muskelschwäche (Beginn ~3–5 Jahre), Rollstuhl ~12 Jahre, frühe Mortalität (~20–30 Jahre, Herz-/Ateminsuffizienz)
- **Häufigkeit:** 1:3.500 ♂
- **Klinisch:** Gowers-Zeichen (Aufstehen über Hände → Knie → Hüfte), Wadenpseudohypertrophie (Fett-/Bindegewebe ersetzt Muskel), CPK ↑↑↑

---

### 2. X-chromosomale dominante Vererbung

**Merkmal:** Gen auf X-Chromosom, **dominant**

**Genotyp → Phänotyp:**
- **X^A X^A** (♀): Krank
- **X^A X^-** (♀): **Krank** (A dominant)
- **X^- X^-** (♀): Gesund
- **X^A Y** (♂): **Krank**
- **X^- Y** (♂): Gesund

**Vererbungsmuster:**

**Kranker Vater (X^A Y) × Gesunde Mutter (X^- X^-):**
- **Nachkommen:**
  - **100% Töchter krank** (X^A X^-, erhalten X^A vom Vater)
  - **100% Söhne gesund** (X^- Y, erhalten Y vom Vater)

**Kranke Mutter (X^A X^-) × Gesunder Vater (X^- Y):**
- **Nachkommen:**
  - 50% Töchter krank, 50% gesund
  - 50% Söhne krank, 50% gesund

**Wichtig:**
- **Frauen häufiger betroffen** als Männer (2 X-Chromosomen → 2× Chance)
- **Vater-Tochter-Übertragung** (nicht Vater-Sohn)
- **Keine gesunden Töchter** von krankem Vater (außer Mutter homozygot rezessiv)

**Beispiele:**
- **Hypophosphatämische Rachitis** (Vitamin-D-resistente Rachitis): PHEX-Gen (Phosphat-Reabsorption ↓), Skelettdeformitäten, Kleinwuchs
- **Rett-Syndrom:** MECP2-Gen (Neurodevelopmental), **letal bei ♂** (meist), nur ♀ betroffen (X-Inaktivierung mildert)

---

### 3. X-Inaktivierung (Lyon-Hypothese)

**Prinzip:** Bei **weiblichen Zellen** (XX) wird **1 X-Chromosom inaktiviert** → Dosiskompensation (Männer XY haben nur 1 aktives X)

**Mechanismus:**
1. **Frühe Embryonalentwicklung** (~Tag 16, Blastozyste)
2. **Zufällige Inaktivierung:** Väterliches oder mütterliches X (50:50)
3. **Barr-Körperchen:** Inaktiviertes X = heterochromatisch, am Kernrand sichtbar
4. **XIST-Gen:** Kodiert long non-coding RNA (lncRNA) → beschichtet X-Chromosom → Inaktivierung
5. **Klonale Vererbung:** Alle Tochterzellen inaktivieren **dasselbe** X

**Folgen:**
- **Mosaik:** Weibliche Zellen haben entweder väterliches oder mütterliches X aktiv → **Mosaik-Muster**
- **Beispiel:** **Kaliko-Katzen** (Schildpatt): X^O (Orange-Fell), X^B (Schwarz-Fell) → Mosaik aus orangenen + schwarzen Flecken (nur ♀!)

**Klinische Relevanz:**
- **Konduktorinnen (X^A X^a):** Meist asymptomatisch (gesundes X kompensiert), aber **variable Penetranz** (wenn inaktiviertes X zufällig häufiger gesund → Symptome möglich)
- **Beispiel:** Hämophilie-Konduktorinnen: Meist gesund, aber ~10% leichte Blutungsneigung (ungünstige X-Inaktivierung)

---

### 4. Y-chromosomale Vererbung (Holandrische Vererbung)

**Merkmal:** Gen auf **Y-Chromosom** → nur **Männer** betroffen

**Vererbungsmuster:**
- **Vater-Sohn-Übertragung** (100% der Söhne erben Y vom Vater)
- **Keine Töchter betroffen** (erhalten X vom Vater, nicht Y)

**Gene auf Y-Chromosom:**
- **SRY** (Sex-determining Region Y): Hoden-Entwicklung → männlich
- **AZF** (Azoospermie-Faktor): Spermatogenese (Deletion → Infertilität)

**Beispiele:**
- **Hairy Ears** (Hypertrichose Ohrmuschel): Dichter Haarwuchs am Ohr (umstritten, ob rein Y-chromosomal)
- **Männliche Infertilität:** AZF-Deletionen (Y-Chromosom) → Azoospermie, Oligospermie

`,
      lernziele: [
        "X-chromosomal rezessive und dominante Vererbungsmuster anhand von Genotypen und Vererbungsregeln erklären können.",
        "Den Begriff Hemizygotie verstehen und erklären, warum Männer bei X-chromosomal rezessiven Erkrankungen häufiger betroffen sind.",
        "Das Prinzip der X-Inaktivierung (Lyon-Hypothese) und seine klinischen Konsequenzen beschreiben können.",
        "Y-chromosomale Vererbung (holandrisch) von anderen Erbgängen unterscheiden und Beispiele nennen können.",
        "Klinische Beispiele X-chromosomaler Erkrankungen (Hämophilie A, Duchenne, Rot-Grün-Blindheit) benennen und zuordnen können.",
      ],
      sections: [
        {
          heading: "X-chromosomal rezessive Vererbung",
          text: "Bei X-chromosomal rezessiver Vererbung sind Männer (X^a Y, hemizygot) häufiger krank, da sie nur ein X-Chromosom besitzen. Frauen sind als Konduktorinnen (X^A X^a) meist gesund. Es gibt keine Vater-Sohn-Übertragung (Vater gibt Y an Söhne). Klinische Beispiele: Hämophilie A, Rot-Grün-Blindheit, Muskeldystrophie Duchenne.",
          merksatz:
            "Männer häufiger krank (hemizygot, X^a Y). Töchter meist gesund (Konduktorin). Keine Vater-Sohn-Übertragung.",
        },
        {
          heading: "X-chromosomal dominante Vererbung und X-Inaktivierung",
          text: "Bei X-chromosomal dominanter Vererbung gibt ein kranker Vater (X^A Y) sein X^A an alle Töchter (100% krank) und sein Y an alle Söhne (100% gesund). Die X-Inaktivierung (Lyon-Hypothese) inaktiviert in weiblichen Zellen zufällig eines der beiden X-Chromosomen (Barr-Körperchen), was ein Mosaik-Muster erzeugt (z. B. Kaliko-Katzen).",
          merksatz:
            "Kranker Vater (X^A Y) → 100% Töchter krank, 100% Söhne gesund. X-Inaktivierung = Barr-Körperchen, Mosaik-Muster.",
        },
        {
          heading: "Y-chromosomale Vererbung",
          text: "Y-chromosomale Gene betreffen ausschließlich Männer. Die Übertragung erfolgt zu 100% vom Vater auf alle Söhne, Töchter sind nie betroffen. Wichtige Gene: SRY (Hoden-Entwicklung → männlicher Phänotyp), AZF (Spermatogenese; Deletion → Infertilität).",
          merksatz:
            "Y-chromosomal: Nur Männer, Vater → 100% Söhne. SRY = Hoden, AZF = Spermatogenese.",
        },
      ],
      merksätze: [
        "X-chromosomal rezessiv: Männer häufiger krank (hemizygot, X^a Y, nur 1 X). Töchter meist gesund (X^A X^a Konduktorin). Keine Vater-Sohn-Übertragung. Beispiele: Hämophilie A, Rot-Grün-Blindheit, Duchenne.",
        "X-chromosomal dominant: Frauen häufiger betroffen (2 X). Kranker Vater (X^A Y) → 100% Töchter krank, 100% Söhne gesund. Beispiel: Hypophosphatämische Rachitis.",
        "X-Inaktivierung: Weibliche Zellen (XX) → 1 X inaktiviert (zufällig, Barr-Körperchen, XIST). Mosaik-Muster (Kaliko-Katzen: X^O X^B → Orange + Schwarz, nur bei Weibchen).",
        "Y-chromosomal: Nur Männer betroffen. Vater → 100% Söhne. SRY (Hoden-Entwicklung → männlich), AZF (Spermatogenese, Deletion → Infertilität).",
      ],
      diagram: "meiosis-overview",
      selfTest: [
        {
          question:
            "Ein Junge leidet an Hämophilie A. Seine Mutter und Großmutter väterlicherseits sind gesund, sein Vater und Großvater mütterlicherseits sind ebenfalls gesund. Welche Aussage zum Erbgang ist korrekt?",
          options: [
            "Der Junge hat das defekte F8-Gen von seinem Vater geerbt, da Hämophilie A Y-chromosomal vererbt wird",
            "Die Mutter ist Konduktorin (X^A X^a) und hat das defekte Allel mit 50% Wahrscheinlichkeit an den Sohn weitergegeben",
            "Der Junge ist heterozygot für das F8-Gen und zeigt eine inkomplette Dominanz",
            "Beide Eltern müssen homozygot rezessiv (X^a X^a bzw. X^a Y) sein, damit der Sohn erkrankt",
            "Eine Vater-Sohn-Übertragung ist bei Hämophilie A der häufigste Vererbungsweg",
          ],
          correctIndex: 1,
          explanation:
            "Hämophilie A ist **X-chromosomal rezessiv** vererbt. Der Junge ist **hemizygot** (X^a Y) und hat das defekte F8-Gen auf dem X-Chromosom. Da der **Vater sein Y-Chromosom an den Sohn** gibt (nicht X), muss die **Mutter Konduktorin** (X^A X^a) sein und hat das X^a-Allel mit 50% Wahrscheinlichkeit weitergegeben. Wichtig: **Keine Vater-Sohn-Übertragung** bei X-chromosomalen Merkmalen!",
          difficulty: 2,
          tags: ["hämophilie", "x-chromosomal rezessiv", "blutgerinnungsstörung"],
        },
        {
          question:
            "Bei einer Stammbaumanalyse fällt auf, dass ein kranker Vater **ausschließlich kranke Töchter** hat, während **alle Söhne gesund** sind. Die gesunde Mutter hat sowohl gesunde als auch kranke Kinder. Welcher Erbgang liegt vor?",
          options: [
            "X-chromosomal rezessiv, da Männer häufiger betroffen sind und keine Vater-Sohn-Übertragung stattfindet",
            "Y-chromosomal (holandrisch), da der Vater das Y-Chromosom an alle Söhne weitergibt",
            "X-chromosomal dominant, da der kranke Vater (X^A Y) sein X^A-Chromosom an alle Töchter weitergibt",
            "Autosomal dominant, da sowohl Töchter als auch Söhne betroffen sein können",
            "Mitochondrial, da die Vererbung über die mütterliche Linie erfolgt",
          ],
          correctIndex: 2,
          explanation:
            "Das Muster **kranker Vater → 100% kranke Töchter, 100% gesunde Söhne** ist **pathognomonisch für X-chromosomal dominante Vererbung**. Der Vater (X^A Y) gibt sein **X^A-Chromosom an alle Töchter** (→ X^A X^- krank) und sein **Y-Chromosom an alle Söhne** (→ X^- Y gesund). Die gesunde Mutter (X^- X^-) kann nur X^- weitergeben. Beispiel: Hypophosphatämische Rachitis (PHEX-Gen).",
          difficulty: 2,
          tags: ["x-chromosomal dominant", "erbgang", "töchter betroffen"],
        },
        {
          question:
            "Eine Frau ist heterozygot für ein X-chromosomal rezessives Merkmal (z.B. Rot-Grün-Blindheit, X^A X^a). Welche Aussage zur **X-Inaktivierung** (Lyon-Hypothese) ist korrekt?",
          options: [
            "In allen Zellen der Frau wird dasselbe X-Chromosom (entweder väterlich oder mütterlich) inaktiviert",
            "Die X-Inaktivierung erfolgt zufällig in jeder Zelle (~Tag 16), sodass ein Mosaik-Muster entsteht (Barr-Körperchen)",
            "Das inaktivierte X-Chromosom wird vollständig abgebaut und ist im Karyotyp nicht mehr sichtbar",
            "Die Frau ist immer symptomatisch, da in 50% der Zellen das defekte X^a-Chromosom aktiv ist",
            "X-Inaktivierung findet nur bei homozygot rezessiven Frauen (X^a X^a) statt, nicht bei Konduktorinnen",
          ],
          correctIndex: 1,
          explanation:
            "**X-Inaktivierung** (Lyon-Hypothese): Bei weiblichen Zellen (XX) wird **1 X-Chromosom zufällig inaktiviert** (~Tag 16, Blastozyste) → **Dosiskompensation**. Das inaktivierte X bildet ein **Barr-Körperchen** (heterochromatisch, am Kernrand). Die Inaktivierung ist **zufällig** (50:50 väterlich/mütterlich) → **Mosaik-Muster** (z.B. Kaliko-Katzen: X^O X^B → Orange + Schwarz, nur ♀). Konduktorinnen sind **meist asymptomatisch**, da das gesunde X kompensiert.",
          difficulty: 2,
          tags: ["x-inaktivierung", "lyon-hypothese", "barr-körper"],
        },
        {
          question:
            "Ein 5-jähriger Junge zeigt progressive Muskelschwäche (Beginn ~3 Jahre), Gowers-Zeichen beim Aufstehen und Wadenpseudohypertrophie. Die CPK (Creatinkinase) ist stark erhöht. Die Familienanamnese ergibt, dass ein Bruder der Mutter ebenfalls betroffen war. Welche Diagnose ist am wahrscheinlichsten?",
          options: [
            "Hämophilie A – X-chromosomal rezessive Gerinnungsstörung mit Blutungsneigung",
            "Muskeldystrophie Duchenne – X-chromosomal rezessive Dystrophin-Mutation (DMD-Gen)",
            "Hypophosphatämische Rachitis – X-chromosomal dominante PHEX-Mutation",
            "Trisomie 21 (Down-Syndrom) – numerische Chromosomenaberration mit Muskelhypotonie",
            "Y-chromosomale Myopathie – holandrische Vererbung mit Vater-Sohn-Übertragung",
          ],
          correctIndex: 1,
          explanation:
            "**Muskeldystrophie Duchenne** (DMD): **X-chromosomal rezessive** Dystrophin-Mutation. Klinisch: Progressive Muskelschwäche (Beginn ~3–5 Jahre), **Gowers-Zeichen** (Aufstehen über Hände → Knie → Hüfte), **Wadenpseudohypertrophie** (Fett-/Bindegewebe ersetzt Muskel), **CPK ↑↑↑** (massiv erhöht). Rollstuhl ~12 Jahre, frühe Mortalität (~20–30 Jahre, Herz-/Ateminsuffizienz). Inzidenz: 1:3.500 ♂. Betroffener Bruder der Mutter → Mutter ist Konduktorin.",
          difficulty: 3,
          tags: ["duchenne", "muskeldystrophie", "x-chromosomal rezessiv"],
        },
        {
          question:
            "Welche Aussage zur **Y-chromosomalen Vererbung** (holandrische Vererbung) ist korrekt?",
          options: [
            "Das SRY-Gen auf dem Y-Chromosom kodiert für Dystrophin und ist essentiell für die Muskelentwicklung",
            "Y-chromosomale Merkmale werden von Vätern auf **alle Söhne** übertragen, während Töchter nicht betroffen sind",
            "Deletionen im AZF-Bereich (Azoospermie-Faktor) des Y-Chromosoms führen zu Rot-Grün-Blindheit",
            "Y-chromosomale Vererbung ist die häufigste Ursache für Hämophilie A und Muskeldystrophie Duchenne",
            "Frauen können ebenfalls Y-chromosomale Merkmale erben, wenn die Mutter Konduktorin ist",
          ],
          correctIndex: 1,
          explanation:
            "**Y-chromosomale Vererbung** (holandrisch): Gene auf **Y-Chromosom** → nur **Männer** betroffen. **Vater-Sohn-Übertragung** (100% der Söhne erben Y vom Vater), **keine Töchter betroffen** (erhalten X vom Vater). **SRY** (Sex-determining Region Y) → Hoden-Entwicklung → männlich. **AZF** (Azoospermie-Faktor) → Spermatogenese (Deletion → Infertilität, Azoospermie/Oligospermie). Beispiel: Männliche Infertilität durch AZF-Deletionen.",
          difficulty: 1,
          tags: ["y-chromosomale vererbung", "holandrisch", "vater-sohn"],
        },
      ],
    },
    {
      id: "bio-5-05",
      title: "Stammbaumanalyse",
      content: `## Einleitung

**Stammbaumanalyse** (Pedigree-Analyse) ist die Methode zur:
1. **Darstellung** von Vererbungsmustern in Familien
2. **Identifikation** des Erbgangs (autosomal, gonosomal, dominant, rezessiv)
3. **Risikoabschätzung** für Nachkommen

**Ziel:** Genetische Beratung, Vorhersage von Erkrankungsrisiken

---

## Kerninhalt

### 1. Stammbaumsymbole

**Standardsymbole:**

| Symbol | Bedeutung |
|--------|-----------|
| **Quadrat (□)** | Männlich |
| **Kreis (○)** | Weiblich |
| **Ausgefüllt (■ ●)** | Betroffen (phänotypisch krank) |
| **Halb ausgefüllt (◧)** | Heterozygot/Konduktor (Carrier) |
| **Doppellinie (=)** | Konsanguinität (Verwandtenehe, z.B. Cousin-Cousine) |
| **Horizontale Linie (─)** | Partnerschaft/Elternpaar |
| **Vertikale Linie (\|)** | Abstammung (Eltern → Kinder) |
| **Römische Ziffern (I, II, III)** | Generationen (oben nach unten) |
| **Arabische Ziffern (1, 2, 3)** | Individuen (links nach rechts) |

**Beispiel-Notation:** **II-3** = Generation II, Individuum 3

---

### 2. Erbgangsmuster erkennen

#### 2a. Autosomal-dominant

**Merkmale:**
- **Jede Generation betroffen** (vertikale Transmission, kein Generationensprung)
- **Männer = Frauen** (beide gleich häufig)
- **Betroffene Eltern → ~50% Kinder betroffen** (Aa × aa → 1:1)
- **Gesunde Eltern → gesunde Kinder** (aa × aa → aa)

**Typische Muster:**
- **Durchgehende Linie** durch Stammbaum (I → II → III)
- **Homozygot dominant (AA)** sehr selten (meist letal oder schwer → geringe Reproduktion)

**Beispiele:** Marfan-Syndrom, Achondroplasie (Kleinwuchs), Chorea Huntington

---

#### 2b. Autosomal-rezessiv

**Merkmale:**
- **Generationensprünge** (horizontal transmission, Eltern gesund → Kinder krank)
- **Männer = Frauen** (beide gleich häufig)
- **Gesunde Eltern (Aa × Aa) → 25% Kinder krank** (aa)
- **Konsanguinität ↑ Risiko** (verwandte Eltern → höhere Wahrscheinlichkeit für gemeinsame rezessive Allele)

**Typische Muster:**
- **Geschwister betroffen**, Eltern gesund (Aa × Aa → aa-Kinder)
- **Konsanguinität** oft sichtbar (Doppellinie bei Eltern)

**Beispiele:** Phenylketonurie (PKU), Mukoviszidose (Cystic Fibrosis, CFTR), Sichelzellanämie (HbS/HbS)

---

#### 2c. X-chromosomal rezessiv

**Merkmale:**
- **Männer häufiger betroffen** (hemizygot, X^a Y)
- **Töchter meist gesund** (X^A X^a Konduktorinnen)
- **Keine Vater-Sohn-Übertragung** (Vater gibt Y an Sohn, X an Tochter)
- **Betroffene Männer + Konduktorin → 50% Söhne krank, 50% Töchter Konduktorinnen**

**Typische Muster:**
- **Diagonal-Übertragung:** Großvater (betroffen) → Tochter (Konduktorin) → Enkel (betroffen)
- **"Springer-Generation":** Generation II gesund (Konduktorinnen), Generation III betroffen (Söhne)

**Beispiele:** Hämophilie A, Rot-Grün-Blindheit, Muskeldystrophie Duchenne

---

#### 2d. X-chromosomal dominant

**Merkmale:**
- **Frauen häufiger betroffen** (2 X-Chromosomen → 2× Chance)
- **Kranker Vater (X^A Y) → 100% Töchter krank, 100% Söhne gesund**
- **Kranke Mutter (X^A X^-) → 50% Töchter krank, 50% Söhne krank**

**Typische Muster:**
- **Vater-Tochter-Übertragung** (nicht Vater-Sohn)
- **Frauen > Männer** (2:1 Verhältnis)

**Beispiele:** Hypophosphatämische Rachitis, Rett-Syndrom (♂ meist letal)

---

#### 2e. Y-chromosomal (holandrisch)

**Merkmale:**
- **Nur Männer betroffen**
- **Vater-Sohn-Übertragung (100%)**
- **Keine Töchter betroffen**

**Typische Muster:**
- **Vertikale Linie** nur durch männliche Linie (Vater → Sohn → Enkel)

**Beispiele:** Hairy Ears (umstritten), männliche Infertilität (AZF-Deletionen)

---

### 3. Wahrscheinlichkeitsberechnung

**Szenario:** Eltern Aa × Aa (autosomal-rezessiv, beide Konduktoren)

**Frage:** Wahrscheinlichkeit, dass **3. Kind gesund** ist?

**Analyse:**
- **Jede Geburt unabhängig** (kein Einfluss früherer Kinder)
- **P(gesund) = 3/4** (AA oder Aa, autosomal-dominant bzw. phänotypisch gesund)
- **P(krank) = 1/4** (aa)

**Antwort:** **3/4 = 75%** (unabhängig von vorherigen Kindern)

---

**Bedingte Wahrscheinlichkeit:**

**Frage:** Eltern Aa × Aa haben 2 gesunde Kinder. Wie hoch ist die Wahrscheinlichkeit, dass das **1. Kind Konduktor** (Aa) ist?

**Gegeben:** Kind ist gesund (AA oder Aa)
**Gesucht:** P(Aa | gesund)

**Bayes-Theorem:**
- **P(AA) = 1/4, P(Aa) = 2/4, P(aa) = 1/4**
- **P(gesund) = P(AA) + P(Aa) = 3/4**
- **P(Aa | gesund) = P(Aa) / P(gesund) = (2/4) / (3/4) = 2/3**

**Antwort:** **2/3 = 67%**

---

### 4. Konsanguinität (Verwandtenehe)

**Definition:** Partnerschaft zwischen **Blutsverwandten** (z.B. Cousin-Cousine 1. Grades)

**Risiko:**
- **Erhöhte Wahrscheinlichkeit für gemeinsame rezessive Allele** (IBD = Identical By Descent)
- **Autosomal-rezessive Erkrankungen ↑** (z.B. PKU, Mukoviszidose)
- **Koeffizient der Inzucht (F):** Maß für Verwandtschaft
  - **Cousin-Cousine 1. Grades:** F = 1/16 = 6,25%

**Stammbaum-Symbol:** **Doppellinie** (=) zwischen Partnern

`,
      lernziele: [
        "Die Standardsymbole der Stammbaumanalyse (Quadrat, Kreis, ausgefüllt, Doppellinie) kennen und anwenden können.",
        "Autosomal-dominante, autosomal-rezessive, X-chromosomale und Y-chromosomale Erbgänge anhand typischer Stammbaummerkmale erkennen können.",
        "Vererbungswahrscheinlichkeiten (z. B. 25% Erkrankungsrisiko bei Aa × Aa) berechnen können.",
        "Bedingte Wahrscheinlichkeit nach Bayes (P(Aa | gesund) = 2/3) anwenden können.",
        "Den Einfluss von Konsanguinität auf das Auftreten autosomal-rezessiver Erkrankungen erklären können.",
      ],
      sections: [
        {
          heading: "Stammbaumsymbole und Erbgangserkennung",
          text: "Quadrate symbolisieren Männer, Kreise Frauen; ausgefüllte Symbole zeigen Betroffene, halbe Symbole Konduktoren. Die Doppellinie kennzeichnet Konsanguinität. Autosomal-dominante Erbgänge zeigen vertikale Transmission (jede Generation betroffen), autosomal-rezessive zeigen Generationensprünge mit gesunden Eltern und kranken Geschwistern.",
          merksatz:
            "Autosomal-dominant: jede Generation betroffen. Autosomal-rezessiv: Generationensprünge, gesunde Eltern, Doppellinie = Konsanguinität.",
        },
        {
          heading: "Gonosomale Erbgänge im Stammbaum",
          text: "X-chromosomal rezessiv: Männer häufiger betroffen, kein Vater-Sohn-Übertragung, Diagonal-Muster (Großvater → Tochter als Konduktorin → Enkel). X-chromosomal dominant: kranker Vater → 100% Töchter krank, 100% Söhne gesund. Y-chromosomal: nur Männer betroffen, Vater-Sohn-Übertragung zu 100%.",
          merksatz:
            "X-rez.: kein Vater-Sohn, diagonal. X-dom.: kranker Vater → alle Töchter krank. Y-chr.: nur Männer, Vater-Sohn 100%.",
        },
        {
          heading: "Wahrscheinlichkeitsberechnung",
          text: "Bei Aa × Aa beträgt P(aa, krank) = 1/4, P(gesund) = 3/4. Jede Geburt ist unabhängig. Die bedingte Wahrscheinlichkeit P(Aa | gesund) = 2/3 ergibt sich über das Bayes-Theorem, da von drei möglichen gesunden Genotypen zwei heterozygot sind.",
          merksatz:
            "Aa × Aa: 1/4 krank, 3/4 gesund. P(Aa | gesund) = 2/3. Jede Geburt ist unabhängig!",
        },
      ],
      diagram: "pedigree-analysis",

      merksätze: [
        "Autosomal-dominant: Jede Generation betroffen (vertikale Linie I → II → III). Männer = Frauen. Betroffene Eltern (Aa) → ~50% Kinder krank. Beispiel: Marfan, Achondroplasie.",
        "Autosomal-rezessiv: Generationensprünge! Gesunde Eltern (Aa × Aa) → 25% Kinder krank (aa). Konsanguinität erhöht Risiko (Doppellinie). Beispiel: PKU, Mukoviszidose.",
        "X-chromosomal rezessiv: Männer häufiger krank. Keine Vater-Sohn-Übertragung. Diagonal-Muster: Großvater → Tochter (Konduktorin) → Enkel. Beispiel: Hämophilie A, Duchenne.",
        "Wahrscheinlichkeit Aa × Aa: Jede Geburt unabhängig. P(krank aa) = 1/4 = 25%. P(gesund) = 3/4. Bedingt: P(Aa | gesund) = 2/3.",
      ],
      selfTest: [
        {
          question:
            "In einem Stammbaum sind Generation I (Eltern) gesund, Generation II zeigt 2 von 4 Geschwistern betroffen (1 Bruder, 1 Schwester), Generation III ist noch nicht vorhanden. Die Eltern in Generation I sind durch eine Doppellinie (=) verbunden. Welcher Erbgang ist am wahrscheinlichsten?",
          options: [
            "Autosomal-dominant, da beide Geschlechter gleich häufig betroffen sind",
            "Autosomal-rezessiv mit Konsanguinität (Verwandtenehe), da gesunde Eltern betroffene Kinder haben",
            "X-chromosomal rezessiv, da sowohl Männer als auch Frauen betroffen sind",
            "Y-chromosomal (holandrisch), da eine Vater-Sohn-Übertragung vorliegt",
            "X-chromosomal dominant, da mehr Frauen als Männer betroffen sind",
          ],
          correctIndex: 1,
          explanation:
            "**Autosomal-rezessiv mit Konsanguinität**: **Generationensprung** (gesunde Eltern → kranke Kinder) ist typisch für rezessiven Erbgang (Aa × Aa → aa). Die **Doppellinie (=)** kennzeichnet **Konsanguinität** (Verwandtenehe, z.B. Cousin-Cousine) → erhöhtes Risiko für gemeinsame rezessive Allele (IBD). **Beide Geschlechter gleich häufig** betroffen (autosomal, nicht gonosomal). Beispiele: PKU, Mukoviszidose.",
          difficulty: 2,
          tags: ["stammbaumanalyse", "autosomal rezessiv", "konsanguinität"],
        },
        {
          question:
            "Ein Stammbaum zeigt folgendes Muster: Generation I (Großvater betroffen, Großmutter gesund), Generation II (alle 3 Töchter gesund, 2 Söhne gesund), Generation III (1 Enkel betroffen, 2 Enkelinnen gesund). Der betroffene Enkel ist der Sohn einer Tochter aus Generation II. Welcher Erbgang liegt vor?",
          options: [
            "Autosomal-dominant, da der Großvater betroffen ist und das Merkmal weitervererbt wird",
            "X-chromosomal rezessiv mit diagonal-Übertragung (Großvater → Tochter als Konduktorin → Enkel)",
            "Y-chromosomal, da nur männliche Individuen (Großvater und Enkel) betroffen sind",
            "Autosomal-rezessiv, da ein Generationensprung von Generation I nach Generation III vorliegt",
            "X-chromosomal dominant, da die Töchter des Großvaters alle betroffen sein müssten",
          ],
          correctIndex: 1,
          explanation:
            '**X-chromosomal rezessiv mit diagonal-Übertragung** ("Springer-Generation"): Großvater (X^a Y, betroffen) → Töchter (X^A X^a, Konduktorinnen, gesund) → Enkel (X^a Y, betroffen, 50% Risiko). **Keine Vater-Sohn-Übertragung** (Großvater hat keine betroffenen Söhne → Y-chromosomal ausgeschlossen). Das **diagonale Muster** (Generation I → III, II übersprungen) ist **pathognomonisch** für X-chromosomal rezessiv. Beispiele: Hämophilie A, Duchenne.',
          difficulty: 3,
          tags: ["x-chromosomal rezessiv", "mütterliche linie", "stammbaumanalyse"],
        },
        {
          question:
            "Zwei heterozygote Eltern (Aa × Aa) für eine autosomal-rezessive Erkrankung haben bereits 2 gesunde Kinder. Wie hoch ist die Wahrscheinlichkeit, dass das **3. Kind ebenfalls gesund** ist?",
          options: [
            '100%, da bereits 2 gesunde Kinder geboren wurden und das kranke Allel "verbraucht" ist',
            "75% (3/4), da jede Geburt unabhängig ist und P(gesund) = P(AA) + P(Aa) = 3/4",
            "50% (1/2), da die Eltern heterozygot sind und das Risiko bei jedem Kind gleich ist",
            "25% (1/4), da die Wahrscheinlichkeit für aa (krank) bei Aa × Aa immer 1/4 ist",
            "67% (2/3), da bereits 2 gesunde Kinder geboren wurden (bedingte Wahrscheinlichkeit)",
          ],
          correctIndex: 1,
          explanation:
            "**Jede Geburt ist unabhängig** (kein Einfluss früherer Kinder). Bei **Aa × Aa** (autosomal-rezessiv): P(AA) = 1/4, P(Aa) = 2/4, P(aa) = 1/4. **P(gesund) = P(AA) + P(Aa) = 1/4 + 2/4 = 3/4 = 75%**. Die vorherigen 2 gesunden Kinder ändern nichts an der Wahrscheinlichkeit für das 3. Kind. **Wichtig:** Genetische Wahrscheinlichkeiten sind **unabhängig** bei jeder Konzeption!",
          difficulty: 2,
          tags: ["wahrscheinlichkeit", "autosomal rezessiv", "mendel"],
        },
        {
          question:
            "Ein Stammbaum zeigt: Vater betroffen (Generation I), Mutter gesund. In Generation II sind **alle 3 Töchter betroffen**, aber **beide Söhne gesund**. Welcher Erbgang ist am wahrscheinlichsten?",
          options: [
            "Autosomal-dominant, da das Merkmal von einer Generation zur nächsten weitergegeben wird",
            "X-chromosomal rezessiv, da keine Vater-Sohn-Übertragung stattfindet",
            "X-chromosomal dominant, da der kranke Vater (X^A Y) sein X^A-Chromosom an alle Töchter weitergibt",
            "Y-chromosomal, da der Vater betroffen ist und nur männliche Nachkommen betroffen sein sollten",
            "Autosomal-rezessiv mit Konsanguinität, da Geschwister betroffen sind",
          ],
          correctIndex: 2,
          explanation:
            "**X-chromosomal dominant**: Das Muster **kranker Vater → 100% Töchter krank, 100% Söhne gesund** ist **pathognomonisch**. Der Vater (X^A Y) gibt sein **X^A-Chromosom an alle Töchter** (→ X^A X^- krank) und sein **Y-Chromosom an alle Söhne** (→ X^- Y gesund). Die gesunde Mutter (X^- X^-) gibt nur X^- weiter. Beispiele: Hypophosphatämische Rachitis (PHEX-Gen), Rett-Syndrom.",
          difficulty: 1,
          tags: ["x-chromosomal dominant", "töchter betroffen", "erbgang"],
        },
        {
          question:
            "Eltern Aa × Aa (autosomal-rezessiv) haben ein **gesundes** Kind. Wie hoch ist die Wahrscheinlichkeit, dass dieses Kind **Konduktor** (Aa) ist?",
          options: [
            "25% (1/4), da P(Aa) bei Aa × Aa immer 1/4 ist",
            "50% (1/2), da heterozygote Eltern zu 50% Aa-Nachkommen führen",
            "67% (2/3), da von 3 gesunden Genotypen (AA, Aa, Aa) zwei Aa sind (bedingte Wahrscheinlichkeit)",
            "75% (3/4), da P(gesund) = 3/4 ist und davon alle Aa sein könnten",
            "100%, da gesunde Kinder von Aa × Aa immer heterozygot sind",
          ],
          correctIndex: 2,
          explanation:
            "**Bedingte Wahrscheinlichkeit** (Bayes-Theorem): **Gegeben:** Kind ist gesund (AA oder Aa, nicht aa). Bei **Aa × Aa**: P(AA) = 1/4, P(Aa) = 2/4, P(aa) = 1/4. **P(gesund) = 3/4** (AA oder Aa). **P(Aa | gesund) = P(Aa) / P(gesund) = (2/4) / (3/4) = 2/3 = 67%**. Von den 3 gesunden Genotypen (1× AA, 2× Aa) sind **2 von 3 Konduktoren**. Wichtig für genetische Beratung!",
          difficulty: 3,
          tags: ["konduktor", "träger", "heterozygot"],
        },
      ],
    },
    {
      id: "bio-5-06",
      title: "Populationsgenetik",
      content: `## Einleitung

**Populationsgenetik** untersucht:
1. **Allelfrequenzen** in Populationen
2. **Genotypfrequenzen** und deren Veränderungen
3. **Evolutionäre Prozesse** (Selektion, Drift, Migration, Mutation)

**Hardy-Weinberg-Gleichgewicht (HWE):** Modell für **stabile Allelfrequenzen** unter idealen Bedingungen

---

## Kerninhalt

### 1. Hardy-Weinberg-Gleichgewicht (HWE)

**Prinzip:** Unter bestimmten Bedingungen bleiben **Allelfrequenzen konstant** über Generationen

**Formel:**

**p² + 2pq + q² = 1**

**Legende:**
- **p** = Frequenz des dominanten Allels **A** (z.B. p = 0,7)
- **q** = Frequenz des rezessiven Allels **a** (z.B. q = 0,3)
- **p + q = 1** (100% der Allele)

**Genotypfrequenzen:**
- **p²** = Frequenz von **AA** (homozygot dominant)
- **2pq** = Frequenz von **Aa** (heterozygot)
- **q²** = Frequenz von **aa** (homozygot rezessiv)

**Beispiel:**
- p = 0,6, q = 0,4
- **AA (p²)** = 0,36 (36%)
- **Aa (2pq)** = 2 × 0,6 × 0,4 = 0,48 (48%)
- **aa (q²)** = 0,16 (16%)
- **Summe:** 0,36 + 0,48 + 0,16 = 1 ✓

---

### 2. Bedingungen für HWE

**5 Voraussetzungen** (idealisierende Annahmen):

| Bedingung | Erklärung | Wenn verletzt → Folge |
|-----------|-----------|----------------------|
| **1. Keine Mutation** | Keine neuen Allele entstehen | Mutation → neue Allele, p/q ändern sich |
| **2. Zufällige Paarung** (Random Mating) | Keine Präferenz für bestimmte Genotypen | Inzucht → Homozygotie ↑, Assortative Mating → Heterozygotie ↓ |
| **3. Keine Selektion** | Alle Genotypen gleiche Fitness (Überlebens-/Reproduktionsrate) | Selektion → vorteilhafte Allele ↑, nachteilige ↓ |
| **4. Große Population** | Unendlich groß (kein genetischer Drift) | Kleine Population → Drift (zufällige Frequenzänderungen) |
| **5. Keine Migration** (Genfluss) | Kein Zu-/Abwandern von Individuen | Migration → Allelfrequenzen ändern sich (Genfluss) |

**Wichtig:** In **realen Populationen** sind diese Bedingungen **nie erfüllt** → HWE ist ein **theoretisches Modell** (Nullhypothese)

---

### 3. Berechnung von Allelfrequenzen

**Szenario:** Population mit 100 Individuen (autosomal, diploid)

**Gegeben:** 64 AA, 32 Aa, 4 aa

**Gesucht:** p (Frequenz von A), q (Frequenz von a)

**Methode 1: Allele zählen**
- **Gesamt-Allele:** 100 Individuen × 2 = 200 Allele
- **A-Allele:** (64 × 2) + (32 × 1) = 128 + 32 = 160
- **a-Allele:** (4 × 2) + (32 × 1) = 8 + 32 = 40
- **p = 160/200 = 0,8**
- **q = 40/200 = 0,2**
- **Kontrolle:** p + q = 0,8 + 0,2 = 1 ✓

**Methode 2: Aus Genotypfrequenzen**
- **Frequenz AA:** 64/100 = 0,64 = p²
- **p = √0,64 = 0,8**
- **q = 1 - p = 0,2**

---

**Beispiel: Rezessive Erkrankung**

**Gegeben:** 1 von 10.000 Neugeborenen hat Phenylketonurie (PKU, autosomal-rezessiv, aa)

**Gesucht:** Konduktor-Frequenz (Aa)?

**Lösung:**
1. **Frequenz aa (q²):** 1/10.000 = 0,0001
2. **q = √0,0001 = 0,01**
3. **p = 1 - q = 0,99**
4. **Konduktor-Frequenz (2pq):** 2 × 0,99 × 0,01 = 0,0198 ≈ **2%** (1 von 50)

**Wichtig:** Bei seltenen rezessiven Erkrankungen sind **Konduktoren viel häufiger** als Betroffene!

---

### 4. Abweichungen vom HWE

#### 4a. Selektion

**Definition:** Unterschiedliche **Fitness** (Überlebens-/Reproduktionsrate) der Genotypen

**Beispiel: Sichelzellanämie (HbS)**
- **HbA/HbA:** Normal, Malaria-anfällig (Fitness in Malaria-Gebieten ↓)
- **HbA/HbS:** Heterozygot, **Malaria-Resistenz** (Fitness ↑, **Heterozygoten-Vorteil**)
- **HbS/HbS:** Sichelzellanämie, schwer (Fitness ↓↓)

**Folge:** In Malaria-Gebieten → **HbS-Allel bleibt erhalten** (Balancing Selection, Heterozygoten-Vorteil)

**Weitere Selektionstypen:**
- **Positive Selektion:** Vorteilhaftes Allel wird häufiger (z.B. Antibiotika-Resistenz)
- **Negative Selektion:** Nachteiliges Allel wird seltener (z.B. letal-rezessiv)

---

#### 4b. Genetischer Drift

**Definition:** **Zufällige Frequenzänderungen** in **kleinen Populationen** (Stichprobeneffekt)

**Ursachen:**
- **Gründereffekt (Founder Effect):** Kleine Gründerpopulation → zufällige Allelfrequenzen (nicht repräsentativ)
- **Flaschenhals-Effekt (Bottleneck Effect):** Population schrumpft drastisch → zufälliger Allelverlust

**Beispiel Flaschenhals:** Geparden (sehr geringe genetische Diversität nach Populationsrückgang vor ~10.000 Jahren)

**Folge:** In kleinen Populationen → zufälliger **Allelverlust**, **Fixierung** (p = 1 oder 0)

---

#### 4c. Migration (Genfluss)

**Definition:** **Zu-/Abwandern** von Individuen → Allelfrequenzen ändern sich

**Beispiel:** Population A (p = 0,8, q = 0,2), Population B (p = 0,5, q = 0,5) → Migration von B nach A → p in A sinkt, nähert sich B an

**Folge:** **Genfluss homogenisiert** Populationen (Allelfrequenzen gleichen sich an)

---

#### 4d. Mutation

**Definition:** Neue Allele entstehen durch **spontane DNA-Veränderungen**

**Rate:** Sehr niedrig (~10⁻⁶ bis 10⁻⁹ pro Gen pro Generation)

**Folge:** Langfristig → neue genetische Variation (Rohstoff für Evolution), kurzfristig → vernachlässigbarer Effekt auf Allelfrequenzen

---

#### 4e. Nicht-zufällige Paarung

**Typen:**
- **Inzucht (Inbreeding):** Paarung verwandter Individuen → **Homozygotie ↑**, Heterozygotie ↓
  - **Folge:** Rezessive Erkrankungen ↑ (z.B. Konsanguinität)
- **Assortative Mating:** Paarung ähnlicher Phänotypen (z.B. groß × groß) → Extremphänotypen ↑

**Wichtig:** Nicht-zufällige Paarung ändert **Genotypfrequenzen**, aber **nicht Allelfrequenzen** (p, q bleiben gleich, aber p², 2pq, q² ändern sich)

`,
      lernziele: [
        "Die Hardy-Weinberg-Formel (p² + 2pq + q² = 1) anwenden und Genotypfrequenzen aus Allelfrequenzen berechnen können.",
        "Die fünf Voraussetzungen des Hardy-Weinberg-Gleichgewichts nennen und erklären können.",
        "Allelfrequenzen und Konduktorfrequenzen bei autosomal-rezessiven Erkrankungen berechnen können.",
        "Selektion (insbesondere Heterozygoten-Vorteil bei Sichelzellanämie) als Abweichung vom HWE beschreiben können.",
        "Genetischen Drift, Gründereffekt und Flaschenhals-Effekt als evolutionäre Kräfte erklären können.",
      ],
      sections: [
        {
          heading: "Hardy-Weinberg-Gleichgewicht",
          text: "Das Hardy-Weinberg-Gleichgewicht beschreibt stabile Allelfrequenzen unter idealen Bedingungen: keine Mutation, zufällige Paarung, keine Selektion, große Population, keine Migration. Die Formel p² + 2pq + q² = 1 verbindet Allel- und Genotypfrequenzen (p² = AA, 2pq = Aa, q² = aa). Bei seltenen rezessiven Erkrankungen (q² = 1/10.000) sind Konduktoren (2pq ≈ 2%) viel häufiger als Betroffene.",
          merksatz:
            "p² + 2pq + q² = 1, p + q = 1. q = √(Erkrankungsfrequenz). Konduktoren (2pq) viel häufiger als Betroffene (q²).",
        },
        {
          heading: "Selektion und Heterozygoten-Vorteil",
          text: "Selektion verändert Allelfrequenzen durch unterschiedliche Fitness der Genotypen. Beim Heterozygoten-Vorteil (Balancing Selection) haben Heterozygote den höchsten Reproduktionserfolg. Das HbS-Allel bleibt in Malaria-Gebieten erhalten, weil HbA/HbS-Heterozygote Malaria-resistent sind (höhere Fitness als beide Homozygoten).",
          merksatz:
            "Heterozygoten-Vorteil (Sichelzellanämie): HbA/HbS → Malaria-Resistenz, Fitness am höchsten. HbS-Allel bleibt erhalten (Balancing Selection).",
        },
        {
          heading: "Genetischer Drift und Migration",
          text: "Genetischer Drift bezeichnet zufällige Frequenzänderungen in kleinen Populationen. Gründereffekt: kleine Gründerpopulation trägt zufällige Allelfrequenzen. Flaschenhals-Effekt: drastische Populationsreduktion führt zu Allelverlust. Migration (Genfluss) gleicht Allelfrequenzen zwischen Populationen an. Inzucht erhöht Homozygotie, ändert aber nicht die Allelfrequenzen p und q.",
          merksatz:
            "Drift: Zufällige Frequenzänderungen in kleinen Populationen. Flaschenhals → Allelverlust (Geparden). Inzucht → Homozygotie ↑, aber p/q unverändert.",
        },
      ],
      merksätze: [
        "Hardy-Weinberg-Formel: p² + 2pq + q² = 1 (Genotypfrequenzen), p + q = 1 (Allelfrequenzen). p² = AA, 2pq = Aa, q² = aa. Bedingungen: keine Mutation, zufällige Paarung, keine Selektion, große Population, keine Migration.",
        "Konduktor-Berechnung: Rezessive Erkrankung (q² = 1/10.000) → q = 0,01, p = 0,99. Konduktor-Frequenz 2pq ≈ 2% (1 von 50). Konduktoren viel häufiger als Betroffene.",
        "Selektion (Sichelzellanämie): Heterozygoten-Vorteil in Malaria-Gebieten. HbA/HbS → Malaria-Resistenz, Fitness ↑. HbS-Allel bleibt erhalten (Balancing Selection).",
        "Genetischer Drift: Zufällige Frequenzänderungen in kleinen Populationen. Gründereffekt, Flaschenhals → Allelverlust, Fixierung. Beispiel: Geparden.",
      ],
      diagram: "meiosis-overview",
      selfTest: [
        {
          question:
            "Eine Population befindet sich im Hardy-Weinberg-Gleichgewicht. Die Frequenz des rezessiven Allels **a** beträgt **q = 0,2**. Wie hoch ist die Frequenz der **heterozygoten Individuen** (Aa)?",
          options: [
            "4% (0,04), da q² = 0,2² = 0,04",
            "20% (0,2), da die Frequenz von Aa gleich q ist",
            "32% (0,32), da 2pq = 2 × 0,8 × 0,2 = 0,32",
            "64% (0,64), da p² = 0,8² = 0,64",
            "40% (0,4), da 2q = 2 × 0,2 = 0,4",
          ],
          correctIndex: 2,
          explanation:
            "**Hardy-Weinberg-Formel:** p² + 2pq + q² = 1. Gegeben: **q = 0,2** → **p = 1 - q = 0,8**. **Heterozygote Frequenz (2pq):** 2 × 0,8 × 0,2 = **0,32 = 32%**. Wichtig: **2pq** ist die Formel für Heterozygote (Aa), nicht q oder q². Kontrolle: p² (AA) = 0,64, 2pq (Aa) = 0,32, q² (aa) = 0,04 → Summe = 1 ✓",
          difficulty: 2,
          tags: ["hardy-weinberg", "heterozygotfrequenz", "allelfrequenz"],
        },
        {
          question:
            "In einer Population von 100 Individuen gibt es 49 AA, 42 Aa und 9 aa. Wie hoch ist die Frequenz des **Allels a** (q)?",
          options: [
            "9% (0,09), da 9 von 100 Individuen aa sind",
            "21% (0,21), da die Hälfte der Aa-Individuen a-Allele haben",
            "30% (0,3), da (9 × 2 + 42 × 1) / 200 = 60/200 = 0,3",
            "42% (0,42), da 42 Aa-Individuen vorhanden sind",
            "51% (0,51), da 9 aa + 42 Aa = 51 Individuen a tragen",
          ],
          correctIndex: 2,
          explanation:
            "**Allele zählen:** Gesamt-Allele = 100 Individuen × 2 = 200 Allele. **a-Allele:** (9 aa × 2) + (42 Aa × 1) = 18 + 42 = **60 a-Allele**. **q = 60/200 = 0,3 = 30%**. Alternativ: q² = 9/100 = 0,09 → q = √0,09 = 0,3. Wichtig: **Jedes Individuum hat 2 Allele** (diploid), daher × 2!",
          difficulty: 2,
          tags: ["allelfrequenz", "q-berechnung", "hardy-weinberg"],
        },
        {
          question:
            "Mukoviszidose (Cystic Fibrosis) ist autosomal-rezessiv und tritt bei 1 von 2.500 Neugeborenen auf (q² = 1/2.500). Wie hoch ist die **Konduktor-Frequenz** (Träger, Aa) in der Bevölkerung?",
          options: [
            "1/2.500 (0,04%), da die Konduktor-Frequenz gleich der Erkrankungsfrequenz ist",
            "1/50 (2%), da q = √(1/2.500) = 0,02, p ≈ 0,98, 2pq ≈ 2 × 0,98 × 0,02 ≈ 0,04 = 4%",
            "1/25 (4%), da q = 0,02, p = 0,98, 2pq = 2 × 0,98 × 0,02 = 0,0392 ≈ 4%",
            "1/100 (1%), da die Konduktor-Frequenz immer viel niedriger als die Erkrankungsfrequenz ist",
            "1/10 (10%), da Konduktoren sehr häufig sind bei rezessiven Erkrankungen",
          ],
          correctIndex: 2,
          explanation:
            "**Konduktor-Berechnung:** Gegeben: **q² = 1/2.500 = 0,0004**. **q = √0,0004 = 0,02**. **p = 1 - q = 0,98**. **Konduktor-Frequenz (2pq):** 2 × 0,98 × 0,02 = **0,0392 ≈ 4% = 1/25**. Wichtig: Bei **seltenen rezessiven Erkrankungen** sind **Konduktoren viel häufiger** als Betroffene (4% vs. 0,04%)! Beispiel: ~1 von 25 ist Träger von Mukoviszidose.",
          difficulty: 3,
          tags: ["mukoviszidose", "konduktorfrequenz", "hardy-weinberg"],
        },
        {
          question:
            "Welche der folgenden Bedingungen ist **KEINE** Voraussetzung für das Hardy-Weinberg-Gleichgewicht?",
          options: [
            "Keine Mutation (keine neuen Allele entstehen)",
            "Zufällige Paarung (Random Mating, keine Präferenz für bestimmte Genotypen)",
            "Dominante Allele sind immer häufiger als rezessive Allele in der Population",
            "Keine Selektion (alle Genotypen haben gleiche Fitness)",
            "Große Population (kein genetischer Drift)",
          ],
          correctIndex: 2,
          explanation:
            "**HWE-Bedingungen:** (1) Keine Mutation, (2) Zufällige Paarung, (3) **Keine Selektion**, (4) Große Population, (5) Keine Migration. **Aussage C ist falsch:** Dominante Allele müssen **nicht häufiger** sein als rezessive! Die Frequenzen (p, q) können **beliebig** sein (z.B. p = 0,2, q = 0,8), solange die 5 Bedingungen erfüllt sind. HWE beschreibt **stabile Frequenzen**, nicht deren absolute Werte.",
          difficulty: 1,
          tags: ["hardy-weinberg-gleichgewicht", "voraussetzungen", "zufallspaarung"],
        },
        {
          question:
            "In Malaria-Gebieten Afrikas hat das **HbS-Allel** (Sichelzell-Allel) eine hohe Frequenz (~10–20%), obwohl homozygote HbS/HbS-Individuen an schwerer Sichelzellanämie leiden. Welches evolutionäre Prinzip erklärt dies am besten?",
          options: [
            "Genetischer Drift – zufällige Frequenzerhöhung in kleinen Populationen",
            "Heterozygoten-Vorteil (Balancing Selection) – HbA/HbS-Individuen haben Malaria-Resistenz (höhere Fitness)",
            "Positive Selektion für HbS/HbS-Homozygote, da Sichelzellanämie Schutz vor Malaria bietet",
            "Migration – Einwanderung von HbS-Trägern aus anderen Regionen",
            "Mutation – hohe Mutationsrate von HbA zu HbS in Malaria-Gebieten",
          ],
          correctIndex: 1,
          explanation:
            "**Heterozygoten-Vorteil (Balancing Selection):** In Malaria-Gebieten: **HbA/HbA** (normal) → Malaria-anfällig (Fitness ↓), **HbA/HbS** (Heterozygot) → **Malaria-Resistenz** (Fitness ↑, Vorteil!), **HbS/HbS** (homozygot) → Sichelzellanämie (Fitness ↓↓). **HbS-Allel bleibt erhalten**, da Heterozygote den höchsten reproduktiven Erfolg haben. Dies erklärt die hohe HbS-Frequenz trotz nachteiliger Homozygotie. Wichtig: **Selektion**, nicht Drift!",
          difficulty: 2,
          tags: ["sichelzellanämie", "heterozygotenvorteil", "balancing-selection"],
        },
      ],
    },
    {
      id: "bio-5-07",
      title: "Mutationen",
      content: `## Einleitung

**Mutation** = dauerhafte **Veränderung der DNA-Sequenz**

**Klassifikation:**
1. **Genmutationen** (Punktmutationen): Einzelne Nukleotid-Veränderungen
2. **Chromosomenmutationen** (strukturell): Chromosomen-Abschnitte (Deletion, Duplikation, Translokation, Inversion)
3. **Genommutationen** (numerisch): Chromosomenzahl (Aneuploidie, Polyploidie)

**Bedeutung:**
- **Genetische Variation** (Rohstoff für Evolution)
- **Erbkrankheiten** (z.B. Sichelzellanämie, Mukoviszidose)
- **Krebs** (somatische Mutationen in Onkogenen, Tumorsuppressoren)

---

## Kerninhalt

### 1. Genmutationen (Punktmutationen)

**Definition:** Veränderung **einzelner Nukleotide** (Basenpaare)

#### 1a. Substitution (Basenaustausch)

**Typen:**

| Typ | Definition | Beispiel | Folge |
|-----|------------|----------|-------|
| **Transition** | Purin → Purin (A ↔ G) oder Pyrimidin → Pyrimidin (C ↔ T) | A → G, T → C | Häufigste Substitution (~2/3) |
| **Transversion** | Purin → Pyrimidin oder umgekehrt | A → C, G → T | Seltener (~1/3) |

**Auswirkungen auf Protein:**

**Stille Mutation (Silent Mutation):**
- **Codon-Änderung**, aber **gleiche Aminosäure** (Degeneration des genetischen Codes)
- **Beispiel:** GAA (Glu) → GAG (Glu) – keine Proteinänderung
- **Folge:** Meist **keine klinische Relevanz** (funktionelles Protein unverändert)

**Missense-Mutation:**
- **Codon-Änderung** → **andere Aminosäure**
- **Beispiel:** GAA (Glu) → GUA (Val) – **Sichelzellanämie** (β-Globin Position 6)
- **Folge:** Protein **funktional verändert** (kann harmlos oder pathogen sein)

**Nonsense-Mutation:**
- **Codon-Änderung** → **Stopp-Codon** (UAA, UAG, UGA)
- **Beispiel:** CAA (Gln) → UAA (Stopp)
- **Folge:** **Vorzeitiger Translationsabbruch** → verkürztes, meist **nicht-funktionales Protein**

---

#### 1b. Insertion/Deletion (Indel)

**Definition:** **Einfügen** (Insertion) oder **Entfernen** (Deletion) von Nukleotiden

**Frameshift-Mutation:**
- **Insertion/Deletion ≠ Vielfaches von 3** (z.B. 1, 2, 4 Nukleotide)
- **Leserahmen verschoben** → alle nachfolgenden Codons falsch gelesen
- **Folge:** **Komplett anderes Protein** (meist nicht-funktional, oft vorzeitiges Stopp-Codon)

**Beispiel Frameshift:**
- **Original:** AUG-UCC-GAA-GUU (Met-Ser-Glu-Val)
- **Deletion 1 Nukleotid (U):** AUG-CCG-AAG-UU... (Met-Pro-Lys-...) → **komplett anderes Protein**

**In-Frame-Insertion/Deletion:**
- **Vielfaches von 3** (z.B. 3, 6 Nukleotide)
- **Leserahmen erhalten** → Aminosäure eingefügt/entfernt
- **Beispiel:** **Mukoviszidose** (Cystic Fibrosis): Δ**F508** (Deletion von 3 Nukleotiden → Phenylalanin 508 fehlt)

---

### 2. Chromosomenmutationen (strukturell)

**Bereits in UK02 behandelt** (Chromosomen und Chromosomenaberrationen)

**Kurz-Überblick:**
- **Deletion:** Chromosomenabschnitt verloren (z.B. Cri-du-chat: 5p-)
- **Duplikation:** Chromosomenabschnitt verdoppelt
- **Translokation:** Abschnitt auf anderes Chromosom verlagert (balanciert/unbalanciert)
- **Inversion:** Abschnitt um 180° gedreht

---

### 3. Genommutationen (numerisch)

**Bereits in UK02 behandelt** (Chromosomen und Chromosomenaberrationen)

**Kurz-Überblick:**
- **Aneuploidie:** Trisomie (2n+1, z.B. Trisomie 21), Monosomie (2n-1, z.B. Turner 45,X)
- **Polyploidie:** Triploidie (3n), Tetraploidie (4n) – beim Menschen letal

---

### 4. Ursachen von Mutationen

#### 4a. Spontane Mutationen

**Endogene Ursachen:**
- **DNA-Replikationsfehler:** DNA-Polymerase macht Fehler (~1 von 10¹⁰ Nukleotiden nach Korrekturlesen)
- **Spontane Basenveränderungen:**
  - **Deaminierung:** Cytosin (C) → Uracil (U) → wird als Thymin (T) gelesen → C-G → T-A
  - **Depurinierung:** Verlust von Adenin/Guanin → apurinische Stelle
- **Oxidative Schäden:** Reaktive Sauerstoffspezies (ROS) → DNA-Schäden (z.B. 8-Oxoguanin)

**Rate:** ~10⁻⁹ bis 10⁻⁶ pro Basenpaar pro Zellteilung

---

#### 4b. Induzierte Mutationen (Mutagene)

**Physikalische Mutagene:**
- **UV-Strahlung:** Thymin-Dimere (benachbarte Thymidine vernetzen) → Replikationsfehler
- **Ionisierende Strahlung:** Röntgen, γ-Strahlung → Doppelstrangbrüche, Basenschäden

**Chemische Mutagene:**
- **Basenanaloga:** 5-Bromouracil (ähnelt Thymin) → Fehlpaarung (A-BrU statt A-T)
- **Alkylierende Substanzen:** Ethylmethansulfonat (EMS) → Basenmodi fikation (z.B. O⁶-Methylguanin)
- **Interkalanzien:** Ethidiumbromid, Aflatoxin → lagert sich zwischen Basen ein → Frameshift

**Biologische Mutagene:**
- **Viren:** HPV, EBV → Onkogene aktivieren, Tumorsuppressoren inaktivieren
- **Transposons:** "Springende Gene" (z.B. LINE, SINE) → Insertion → Frameshift, Gen-Disruption

---

### 5. DNA-Reparaturmechanismen

**Zellen haben mehrere Reparatursysteme:**

| Mechanismus | Funktion | Defekt → Erkrankung |
|-------------|----------|---------------------|
| **Mismatch-Reparatur (MMR)** | Korrigiert Basenfehlpaarungen (z.B. G-T statt G-C) | **Lynch-Syndrom** (HNPCC): ↑ Darmkrebs-Risiko |
| **Basenexzisionsreparatur (BER)** | Entfernt beschädigte Basen (z.B. Uracil aus Deaminierung) | – |
| **Nukleotidexzisionsreparatur (NER)** | Entfernt Thymin-Dimere (UV-Schäden), große Addukte | **Xeroderma pigmentosum** (XP): ↑ Hautkrebs (UV-Sensitivität) |
| **Doppelstrangbruch-Reparatur** | Repariert Doppelstrangbrüche (NHEJ, homologe Rekombination) | **BRCA1/2-Mutation**: ↑ Brust-/Ovarialkarzinom |

**Wichtig:** Defekte Reparaturmechanismen → **Mutationshäufung** → **Krebs-Prädisposition**

---

### 6. Klinische Beispiele

#### 6a. Sichelzellanämie (Missense-Mutation)

**Gen:** β-Globin (HBB)
- **Mutation:** Nukleotid 17: GAG → GTG (Missense)
- **Aminosäure-Änderung:** Glutamat (Glu, Position 6) → Valin (Val)
- **Folge:** HbS (Sichelzell-Hämoglobin) → Erythrozyten sichelförmig bei Hypoxie → Hämolyse, Gefäßverschlüsse

**Vererbung:** Autosomal-kodominant (HbA/HbS: Sichelzellträger, meist asymptomatisch; HbS/HbS: Sichelzellanämie)

---

#### 6b. Mukoviszidose (In-Frame-Deletion)

**Gen:** CFTR (Cystic Fibrosis Transmembrane Conductance Regulator)
- **Häufigste Mutation:** **ΔF508** (Deletion von 3 Nukleotiden → Phenylalanin 508 fehlt)
- **Folge:** CFTR-Protein fehlgefaltet → Abbau (ER-assoziierte Degradation) → Chlorid-Transport ↓ → zähes Sekret (Lunge, Pankreas, Schweiß)

**Vererbung:** Autosomal-rezessiv

---

#### 6c. Nonsense-Mutation: Duchenne-Muskeldystrophie

**Gen:** DMD (Dystrophin)
- **Viele Mutationen:** Nonsense-Mutationen (ca. 10–15%), Deletionen/Duplikationen (ca. 65%)
- **Folge:** Dystrophin fehlt oder verkürzt → Muskelschwäche

**Vererbung:** X-chromosomal rezessiv

`,
      lernziele: [
        "Die drei Typen von Genmutationen (stille Mutation, Missense, Nonsense) unterscheiden und klinische Beispiele zuordnen können.",
        "Frameshift-Mutationen und In-Frame-Indels erklären und deren Folgen für das Protein beschreiben können.",
        "Physikalische, chemische und biologische Mutagene mit ihren DNA-Schäden benennen können.",
        "Die wichtigsten DNA-Reparaturmechanismen (MMR, NER, BRCA) und ihre Defekte als Krebs-Prädispositionen kennen.",
        "Die molekulare Grundlage der Sichelzellanämie (Missense) und Mukoviszidose (In-Frame-Deletion ΔF508) erklären können.",
      ],
      sections: [
        {
          heading: "Genmutationen: Substitutionen",
          text: "Stille Mutationen ändern ein Codon, ohne die Aminosäure zu verändern (genetische Degeneration). Missense-Mutationen führen zu einem Aminosäureaustausch (z. B. GAG → GTG: Glu → Val bei Sichelzellanämie). Nonsense-Mutationen erzeugen ein vorzeitiges Stopp-Codon und führen zu einem verkürzten, meist nicht-funktionalen Protein.",
          merksatz:
            "Still = gleiche AS. Missense = andere AS (Sichelzelle: Glu → Val). Nonsense = Stopp-Codon, verkürztes Protein.",
        },
        {
          heading: "Insertionen, Deletionen und Reparaturmechanismen",
          text: "Frameshift-Mutationen entstehen, wenn Insertionen oder Deletionen kein Vielfaches von 3 Nukleotiden umfassen — der Leserahmen verschiebt sich, alle nachfolgenden Codons werden falsch gelesen. In-Frame-Indels (Vielfaches von 3) entfernen oder fügen Aminosäuren ein, ohne den Leserahmen zu verschieben (z. B. ΔF508 bei Mukoviszidose). Defekte DNA-Reparatur prädisponiert zu Krebs: MMR-Defekt → Lynch-Syndrom, NER-Defekt → Xeroderma pigmentosum, BRCA1/2-Defekt → Brustkrebs.",
          merksatz:
            "Frameshift ≠ 3n Nukleotide → Leserahmen verschoben. In-Frame = 3n, Aminosäure fehlt (ΔF508). MMR-Defekt → Lynch, NER-Defekt → Xeroderma pigmentosum.",
        },
      ],
      merksätze: [
        "Stille (Silent) Mutation: Codon ändert sich, Aminosäure gleich (keine Folge). Missense: Codon → andere Aminosäure (Sichelzelle: Glu → Val). Nonsense: Codon → Stopp (vorzeitiger Abbruch, Protein verkürzt).",
        "Frameshift-Mutation: Insertion/Deletion ungleich 3n Nukleotide → Leserahmen verschoben. Alle nachfolgenden Codons falsch → komplett anderes Protein. In-Frame (3n): Aminosäure fehlt, Leserahmen OK (z. B. ΔF508 Mukoviszidose).",
        "DNA-Reparatur-Defekte: MMR-Defekt → Lynch-Syndrom (Darmkrebs ↑). NER-Defekt → Xeroderma pigmentosum (Hautkrebs ↑, UV-Sensitivität). BRCA1/2-Mutation → Brustkrebs ↑.",
      ],
      diagram: "dna-helix",
      selfTest: [
        {
          question:
            "Eine Punktmutation im β-Globin-Gen führt zur Veränderung des Codons GAG (Glutamat) zu GTG (Valin) an Position 6. Welcher Mutationstyp liegt vor, und welche Erkrankung entsteht?",
          options: [
            "Stille Mutation (Silent Mutation) – keine Proteinveränderung, keine klinische Relevanz",
            "Missense-Mutation – Aminosäure-Austausch (Glu → Val), führt zu Sichelzellanämie (HbS)",
            "Nonsense-Mutation – vorzeitiger Stopp-Codon, verkürztes β-Globin-Protein",
            "Frameshift-Mutation – Leserahmen verschoben, komplett anderes Protein",
            "In-Frame-Deletion – Phenylalanin 508 fehlt, führt zu Mukoviszidose",
          ],
          correctIndex: 1,
          explanation:
            "**Missense-Mutation:** Codon-Änderung → **andere Aminosäure**. GAG (Glu) → GTG (Val) an Position 6 des β-Globins → **HbS (Sichelzell-Hämoglobin)**. Folge: **Sichelzellanämie** (Erythrozyten sichelförmig bei Hypoxie, Hämolyse, Gefäßverschlüsse). Vererbung: Autosomal-kodominant (HbA/HbS Träger meist asymptomatisch, HbS/HbS schwere Anämie). Wichtig: **Einzelne Aminosäure-Änderung** kann massive klinische Folgen haben!",
          difficulty: 2,
          tags: ["punktmutation", "missense", "sichelzellanämie"],
        },
        {
          question:
            "Ein Gen hat die Sequenz **AUG-UCC-GAA-GUU**. Durch Deletion eines einzelnen Nukleotids (C an Position 5) entsteht **AUG-UCG-AAG-UU**. Welcher Mutationstyp liegt vor, und was ist die Folge?",
          options: [
            "Stille Mutation – gleiche Aminosäuresequenz, keine Proteinveränderung",
            "Missense-Mutation – eine Aminosäure geändert, Protein leicht verändert",
            "Frameshift-Mutation – Leserahmen verschoben, alle nachfolgenden Codons falsch gelesen",
            "In-Frame-Deletion – eine Aminosäure fehlt, Leserahmen erhalten",
            "Nonsense-Mutation – vorzeitiger Stopp-Codon, Translationsabbruch",
          ],
          correctIndex: 2,
          explanation:
            "**Frameshift-Mutation:** Deletion von **1 Nukleotid** (≠ Vielfaches von 3) → **Leserahmen verschoben**. Original: AUG (Met) - UCC (Ser) - GAA (Glu) - GUU (Val). Nach Deletion: AUG (Met) - **UCG (Ser)** - **AAG (Lys)** - ... → alle **nachfolgenden Codons falsch**. Folge: **Komplett anderes Protein** (meist nicht-funktional, oft vorzeitiges Stopp-Codon). Wichtig: **In-Frame** (3n Nukleotide) → Aminosäure fehlt, **Frameshift** (≠ 3n) → komplett falsch!",
          difficulty: 3,
          tags: ["frameshift", "deletion", "leserasterverschiebung"],
        },
        {
          question:
            "Die häufigste Mutation bei Mukoviszidose (Cystic Fibrosis) ist **ΔF508** (Deletion von 3 Nukleotiden im CFTR-Gen). Welche Aussage ist korrekt?",
          options: [
            "Frameshift-Mutation – der Leserahmen ist verschoben, das CFTR-Protein ist komplett verändert",
            "In-Frame-Deletion – Phenylalanin an Position 508 fehlt, Leserahmen bleibt erhalten, CFTR fehlgefaltet",
            "Nonsense-Mutation – vorzeitiger Stopp-Codon an Position 508, verkürztes CFTR-Protein",
            "Missense-Mutation – Phenylalanin 508 wird zu Valin ausgetauscht, CFTR funktional verändert",
            "Stille Mutation – keine Proteinveränderung, Mukoviszidose entsteht durch regulatorische Mutation",
          ],
          correctIndex: 1,
          explanation:
            "**ΔF508 (In-Frame-Deletion):** Deletion von **3 Nukleotiden** (Vielfaches von 3) → **Phenylalanin an Position 508 fehlt**, aber **Leserahmen erhalten**. CFTR-Protein ist **fehlgefaltet** → ER-assoziierte Degradation (Abbau) → Chlorid-Transport ↓ → zähes Sekret (Lunge, Pankreas). Wichtig: **In-Frame** (3n) vs. **Frameshift** (≠ 3n)! Vererbung: Autosomal-rezessiv. ~70% der Mukoviszidose-Fälle haben ΔF508.",
          difficulty: 2,
          tags: ["deltaF508", "mukoviszidose", "fehlende aminosäure"],
        },
        {
          question:
            "UV-Strahlung führt zur Bildung von **Thymin-Dimeren** (benachbarte Thymidine vernetzen sich). Welcher DNA-Reparaturmechanismus behebt diesen Schaden, und welche Erkrankung entsteht bei Defekt?",
          options: [
            "Mismatch-Reparatur (MMR) – Defekt führt zu Lynch-Syndrom (Darmkrebs ↑)",
            "Basenexzisionsreparatur (BER) – Defekt führt zu allgemeiner Mutationshäufung",
            "Nukleotidexzisionsreparatur (NER) – Defekt führt zu Xeroderma pigmentosum (Hautkrebs ↑, UV-Sensitivität)",
            "Doppelstrangbruch-Reparatur (NHEJ/HR) – Defekt führt zu BRCA-assoziiertem Brustkrebs",
            "Direkte Reparatur (O6-Methylguanin-DNA-Methyltransferase) – Defekt führt zu Gliomen",
          ],
          correctIndex: 2,
          explanation:
            "**Nukleotidexzisionsreparatur (NER):** Behebt **Thymin-Dimere** (UV-Schäden) und große DNA-Addukte. **Defekt → Xeroderma pigmentosum (XP):** Autosomal-rezessive Erkrankung, **extreme UV-Sensitivität** → **Hautkrebs ↑** (Basalzellkarzinom, Melanom), Photodermatitis, neurologische Störungen. Wichtig: **NER entfernt UV-Schäden**, MMR korrigiert Basenfehlpaarungen (Lynch-Syndrom), BRCA repariert Doppelstrangbrüche (Brustkrebs).",
          difficulty: 2,
          tags: ["thymin-dimer", "nukleotid-exzisionsreparatur", "xeroderma pigmentosum"],
        },
        {
          question:
            "Eine Mutation führt zur Veränderung des Codons **CAA** (Glutamin) zu **UAA** (Stopp-Codon). Welcher Mutationstyp liegt vor, und was ist die wahrscheinlichste Folge?",
          options: [
            "Stille Mutation – gleiche Aminosäure (Glutamin), keine Proteinveränderung",
            "Missense-Mutation – Glutamin wird zu einer anderen Aminosäure ausgetauscht",
            "Nonsense-Mutation – vorzeitiger Translationsabbruch, verkürztes, meist nicht-funktionales Protein",
            "Frameshift-Mutation – Leserahmen verschoben, alle nachfolgenden Codons falsch",
            "In-Frame-Insertion – zusätzliche Aminosäure eingefügt, Protein verlängert",
          ],
          correctIndex: 2,
          explanation:
            "**Nonsense-Mutation:** Codon-Änderung → **Stopp-Codon** (UAA, UAG, UGA). CAA (Glutamin) → UAA (Stopp) → **vorzeitiger Translationsabbruch**. Folge: **Verkürztes Protein** (meist **nicht-funktional**, da C-Terminus fehlt). Klinische Beispiele: ~10–15% der Duchenne-Muskeldystrophie-Fälle (Nonsense-Mutationen im DMD-Gen). Wichtig: **Stopp-Codon** statt Aminosäure → Translation endet vorzeitig!",
          difficulty: 1,
          tags: ["nonsense-mutation", "stopp-codon", "trunkiertes protein"],
        },
      ],
    },

    // === from kap6-molekulargenetik ===
    {
      id: "bio-6-01",
      title: "DNA Struktur",
      content: `# DNA-Struktur und Replikation – Biologie Kapitel 6 (Molekulare Genetik)

## Einleitung

**DNA (Desoxyribonukleinsäure)** ist:
1. **Träger der genetischen Information** (Gene, Erbinformation)
2. **Molekulare Struktur:** Doppelhelix (Watson & Crick, 1953)
3. **Funktion:** Speicherung, Replikation, Expression (Transkription → Translation)

## DNA-Struktur (Doppelhelix)

**Baustein:** **Nukleotid** = Phosphat + Zucker (Desoxyribose) + Base

**Basen:**

| Typ | Basen | Struktur |
|-----|-------|----------|
| **Purine** (2 Ringe) | **Adenin (A), Guanin (G)** | Größer (Doppelring) |
| **Pyrimidine** (1 Ring) | **Cytosin (C), Thymin (T)** | Kleiner (Einzelring) |

**Chargaff-Regeln (Basenpaarung):**
- **A = T** (Adenin paart mit Thymin, 2 Wasserstoffbrücken)
- **G ≡ C** (Guanin paart mit Cytosin, **3** Wasserstoffbrücken → **stärkere Bindung**)
- **A + G = C + T** (Purine = Pyrimidine)

**Watson-Crick-Modell (Doppelhelix):**

| Merkmal | Beschreibung |
|---------|--------------|
| **Doppelstrang** | 2 DNA-Stränge, antiparallel (5'→3' und 3'→5') |
| **Helix** | Rechtsgängige Spirale, 1 Windung = 10 Basenpaare, 3,4 nm |
| **Komplementär** | A-T, G-C (Basenpaarung) |
| **Antiparallel** | Ein Strang 5'→3', anderer 3'→5' (wichtig für Replikation!) |
| **Große/kleine Furche** | Zugänglichkeit für Proteine (z.B. Transkriptionsfaktoren) |

**Wichtig:**
- **5'-Ende:** Phosphatgruppe frei
- **3'-Ende:** OH-Gruppe (Hydroxylgruppe) frei → **DNA-Polymerase verlängert hier** (5'→3'-Richtung)

## DNA-Replikation (Verdopplung)

**Prinzip:** **Semikonservativ** (Watson & Crick, 1953; Meselson & Stahl, 1958)
- Jeder Tochterstrang = **1 alter Strang** (Matrize) + **1 neuer Strang**

**Ablauf:**

**Initiation (Start):**
1. **Origin of Replication (Ori):** Startpunkt (Prokaryoten: 1× oriC, Eukaryoten: viele Oris)
2. **Helicase:** Entwindet Doppelhelix → **Replikationsgabel** (Y-förmig)
3. **Einzelstrang-bindende Proteine (SSB):** Stabilisieren Einzelstränge (verhindern Rückfaltung)
4. **Topoisomerase (Gyrase):** Entspannt Supercoiling (Überdrehung vor Replikationsgabel)

**Elongation (Verlängerung):**

**DNA-Polymerase III** (Prokaryoten) bzw. **DNA-Polymerase δ/ε** (Eukaryoten):
- **Syntheserichtung:** **5'→3'** (Nukleotide werden an 3'-OH angefügt)
- **Matrize:** 3'→5' (komplementär)
- **Benötigt:** Primer (RNA, ~10 Nukleotide, von **Primase** synthetisiert)

**Leitstrang (Leading Strand):**
- **Kontinuierliche Synthese** (5'→3' in Richtung der Replikationsgabel)
- **1× Primer** → durchgehende Synthese

**Folgestrang (Lagging Strand):**
- **Diskontinuierliche Synthese** (5'→3' **weg** von Replikationsgabel)
- **Okazaki-Fragmente** (~1.000–2.000 nt bei Prokaryoten, ~100–200 nt bei Eukaryoten)
- **Viele Primer** (für jedes Fragment)

**Wichtig:** DNA-Polymerase kann **nicht de novo** starten → **benötigt 3'-OH (Primer)**

**Termination (Abschluss):**

**Prokaryoten:**
- **Ter-Sequenzen** (Termination): Replikationsgabeln treffen sich → Abschluss

**Eukaryoten:**
- **Telomerase** (Ribonukleoprotein): Verlängert **Telomere** (TTAGGG-Repeats am Chromosomenende)
- **Problem:** DNA-Polymerase kann letzten Primer nicht ersetzen → Telomer-Verkürzung bei jeder Teilung → **Seneszenz** (Alterung)
- **Telomerase aktiv in:** Keimbahn-Zellen, Stammzellen, **Krebszellen** (Immortalisierung)

**Weitere Schritte:**
1. **DNA-Polymerase I** (Prokaryoten) bzw. **RNase H + DNA-Polymerase δ** (Eukaryoten): Entfernt RNA-Primer, ersetzt mit DNA
2. **DNA-Ligase:** Verbindet Okazaki-Fragmente (Phosphodiesterbindung zwischen 3'-OH und 5'-Phosphat)

## Enzyme der Replikation

| Enzym | Funktion | Wichtig |
|-------|----------|---------|
| **Helicase** | Entwindet Doppelhelix | Öffnet Replikationsgabel |
| **Topoisomerase (Gyrase)** | Entspannt Supercoiling (Überdrehung) | Verhindert Knoten vor Replikationsgabel |
| **Primase** | Synthetisiert RNA-Primer (~10 nt) | DNA-Polymerase benötigt 3'-OH zum Starten |
| **DNA-Polymerase III (δ/ε)** | Hauptsynthese (5'→3'), Korrekturlesen (3'→5' Exonuklease) | Leit- + Folgestrang |
| **DNA-Polymerase I** | Entfernt Primer, ersetzt mit DNA | Nur Prokaryoten (Eukaryoten: RNase H + Pol δ) |
| **DNA-Ligase** | Verbindet DNA-Fragmente (Okazaki) | Schließt Lücken (Phosphodiesterbindung) |
| **Telomerase** | Verlängert Telomere (TTAGGG) | Nur Eukaryoten (Keimbahn, Stammzellen, Krebszellen) |

**Wichtig:** DNA-Polymerase hat **3'→5' Exonuklease-Aktivität** (Korrekturlesen, Proofreading) → Fehlerrate ~10⁻⁹ (nach Korrektur)

## Prokaryotische vs. Eukaryotische Replikation

| Merkmal | Prokaryoten (E. coli) | Eukaryoten (Mensch) |
|---------|----------------------|---------------------|
| **Origins** | 1× (oriC) | Viele (1.000–10.000) |
| **Geschwindigkeit** | ~1.000 nt/s | ~50 nt/s (langsamer) |
| **Okazaki-Fragmente** | 1.000–2.000 nt | 100–200 nt (kürzer) |
| **DNA-Polymerase** | Pol III (Hauptsynthese), Pol I (Primer-Ersatz) | Pol δ (Folgestrang), Pol ε (Leitstrang), Pol α (Primase-Komplex) |
| **Telomere** | Zirkuläres Chromosom (keine Telomere) | Lineare Chromosomen → **Telomerase** (TTAGGG) |
| **Histone** | Nein (Nukleoid, keine Histone) | Ja (Chromatin, Nukleosomen) |
`,
      lernziele: [
        "Den Aufbau der DNA-Doppelhelix und die Chargaff-Regeln (A=T, G≡C) erklären können.",
        "Das semikonservative Prinzip der DNA-Replikation beschreiben und das Meselson-Stahl-Experiment interpretieren können.",
        "Den Unterschied zwischen Leitstrang (kontinuierlich) und Folgestrang (diskontinuierlich, Okazaki-Fragmente) erläutern können.",
        "Die Enzyme der Replikation (Helicase, Primase, DNA-Polymerase, Ligase, Telomerase) und ihre Funktionen nennen können.",
        "Die Rolle der Telomerase bei Seneszenz und Krebsentstehung erklären können.",
      ],
      sections: [
        {
          heading: "DNA-Struktur (Doppelhelix)",
          text: "Die DNA besteht aus Nukleotiden (Phosphat + Desoxyribose + Base). Purine (A, G) paaren mit Pyrimidinen (C, T): A-T mit 2 H-Brücken, G-C mit 3 H-Brücken. Die Doppelhelix ist antiparallel (5'→3' und 3'→5') und rechtsgängig.",
          merksatz:
            "A = T (2 H-Brücken), G ≡ C (3 H-Brücken, stärker). Purine (A, G, 2 Ringe) paaren mit Pyrimidinen (C, T, 1 Ring). A + G = C + T (Purine = Pyrimidine).",
        },
        {
          heading: "DNA-Replikation (Verdopplung)",
          text: "Replikation verläuft semikonservativ: jeder Tochterstrang enthält einen alten und einen neuen Strang. Helicase öffnet die Gabel, Primase liefert RNA-Primer, DNA-Polymerase synthetisiert 5'→3'. Der Leitstrang wird kontinuierlich, der Folgestrang diskontinuierlich (Okazaki-Fragmente) synthetisiert.",
          merksatz:
            "Leitstrang (Leading): Kontinuierlich (5'→3' in Richtung Gabel), 1× Primer. Folgestrang (Lagging): Diskontinuierlich (Okazaki-Fragmente, 5'→3' weg von Gabel), viele Primer. DNA-Polymerase nur 5'→3'.",
        },
        {
          heading: "Enzyme der Replikation",
          text: "Helicase entwirrt, Topoisomerase entspannt Supercoiling, Primase synthetisiert RNA-Primer, DNA-Polymerase III/δ/ε verlängert mit Proofreading (3'→5'-Exonuklease), DNA-Ligase verbindet Fragmente. Telomerase verlängert Telomere (TTAGGG) in Keimbahn-, Stamm- und Krebszellen.",
          merksatz:
            "Telomerase verlängert Telomere (TTAGGG-Repeats). Aktiv in Keimbahn, Stammzellen, Krebszellen (Immortalisierung). Ohne Telomerase → Telomer-Verkürzung → Seneszenz (Hayflick-Limit ~50 Teilungen).",
        },
        {
          heading: "Prokaryotische vs. Eukaryotische Replikation",
          text: "Prokaryoten haben 1 Origin (oriC), eukaryotische Chromosomen haben viele Origins. Prokaryoten replizieren schneller (~1.000 nt/s), Okazaki-Fragmente sind länger. Eukaryoten benötigen Telomerase für lineare Chromosomen; Prokaryoten haben zirkuläre DNA ohne Telomere.",
          merksatz:
            "Semikonservativ: Jeder Tochterstrang = 1 alter Strang (Matrize) + 1 neuer Strang. Meselson & Stahl (1958): N15-schwer + N14-leicht → Hybrid-DNA. Antiparallel: 5'→3' und 3'→5'.",
        },
      ],
      diagram: "dna-helix",

      merksätze: [],
      selfTest: [
        {
          question:
            "In einem DNA-Doppelstrang beträgt der Anteil von Adenin (A) **30%**. Wie hoch ist der Anteil von Cytosin (C) gemäß den Chargaff-Regeln?",
          options: [
            "30%, da A = C nach den Chargaff-Regeln",
            "20%, da A = T = 30%, Rest (40%) = G + C, also C = 20%",
            "15%, da der Anteil von Pyrimidinen immer geringer ist als der von Purinen",
            "40%, da C mit G paart und G die häufigste Base ist",
            "70%, da C den Rest der Basen ausmacht (100% - 30% A = 70%)",
          ],
          correctIndex: 1,
          explanation:
            "**Chargaff-Regeln:** **A = T** (Adenin paart mit Thymin), **G = C** (Guanin paart mit Cytosin). Wenn **A = 30%** → **T = 30%**. Rest: 100% - 60% = **40%** für G + C. Da **G = C** → **C = 20%, G = 20%**. Wichtig: **A = T**, **G = C**, **A + G = C + T** (Purine = Pyrimidine). G≡C hat 3 H-Brücken (stärker als A-T mit 2 H-Brücken).",
          hints: [
            "Laut Chargaff-Regeln paart A immer mit T und G immer mit C — daher müssen deren Prozentanteile jeweils gleich sein.",
            "Berechne zuerst A + T (= 60 %), dann teile den Rest gleichmäßig auf G und C auf.",
          ],
          difficulty: 2,
          tags: ["chargaff-regeln", "adenin cytosin", "basenpaarung"],
        },
        {
          question:
            "Welche Aussage zur **antiparallelen Struktur** der DNA-Doppelhelix ist korrekt?",
          options: [
            "Beide DNA-Stränge verlaufen in dieselbe Richtung (5'→3' parallel zueinander)",
            "Ein Strang verläuft 5'→3', der komplementäre Strang 3'→5' (antiparallel)",
            "Die antiparallele Struktur bedeutet, dass Purine mit Pyrimidinen paaren (A-T, G-C)",
            "DNA-Polymerase kann beide Stränge in dieselbe Richtung synthetisieren, da sie parallel sind",
            "Antiparallel bedeutet, dass DNA und RNA in entgegengesetzten Richtungen synthetisiert werden",
          ],
          correctIndex: 1,
          explanation:
            "**Antiparallel:** Die beiden DNA-Stränge verlaufen in **entgegengesetzten Richtungen**. Ein Strang **5'→3'** (5'-Phosphat → 3'-OH), der komplementäre Strang **3'→5'**. Dies ist **entscheidend für die Replikation**, da DNA-Polymerase nur in **5'→3'-Richtung** synthetisieren kann → Leitstrang (kontinuierlich) vs. Folgestrang (diskontinuierlich, Okazaki-Fragmente). Wichtig: **5'-Ende** = Phosphat, **3'-Ende** = OH-Gruppe!",
          hints: [
            "Das 5'-Ende eines DNA-Strangs trägt eine freie Phosphatgruppe, das 3'-Ende eine freie OH-Gruppe — beide Stränge liegen einander gegenüber.",
            "DNA-Polymerase verlängert ausschließlich in 5'→3'-Richtung — überlege, was das für die Synthese beider Stränge bedeutet.",
          ],
          difficulty: 1,
          tags: ["antiparallel", "doppelhelix", "dna-strang"],
        },
        {
          question:
            'Das Meselson-Stahl-Experiment (1958) bewies, dass die DNA-Replikation **semikonservativ** ist. Was bedeutet "semikonservativ"?',
          options: [
            "Beide Tochterstränge bestehen aus komplett neu synthetisierter DNA (konservativ)",
            "Jeder Tochterstrang enthält einen alten (Matrize) und einen neuen DNA-Strang",
            "Die DNA wird nur teilweise repliziert, der Rest bleibt unverändert (partiell konservativ)",
            "Alte DNA-Stränge werden komplett abgebaut und durch neue ersetzt (dispersiv)",
            "DNA-Replikation findet nur in der S-Phase des Zellzyklus statt (zeitlich konservativ)",
          ],
          correctIndex: 1,
          explanation:
            "**Semikonservativ:** Jeder Tochterstrang besteht aus **1 altem (parentalen) Strang** (Matrize) + **1 neu synthetisierten Strang**. **Meselson & Stahl (1958):** N15-schwere DNA → Replikation in N14-Medium → 1. Generation: Hybrid-DNA (1 schwer, 1 leicht) → bewies semikonservative Replikation. Alternativen: **Konservativ** (1 Doppelstrang alt, 1 komplett neu), **Dispersiv** (alte + neue Abschnitte gemischt). Wichtig: **Semikonservativ** ist korrekt!",
          hints: [
            "'Semi' bedeutet 'halb' — überlege, welcher Teil des Tochtermoleküls erhalten bleibt und welcher neu gebildet wird.",
            "Im Meselson-Stahl-Experiment zeigte sich nach einer Replikationsrunde ausschließlich Hybrid-DNA (mittlere Dichte) — was sagt das über den Verbleib der alten Stränge aus?",
          ],
          difficulty: 2,
          tags: ["semikonservativ", "replikation", "meselson-stahl"],
        },
        {
          question:
            "Während der DNA-Replikation wird der **Leitstrang (Leading Strand)** kontinuierlich, der **Folgestrang (Lagging Strand)** diskontinuierlich synthetisiert. Welche Aussage ist korrekt?",
          options: [
            "Der Leitstrang wird 3'→5' synthetisiert, der Folgestrang 5'→3'",
            "Der Leitstrang benötigt viele RNA-Primer, der Folgestrang nur einen Primer",
            "Der Leitstrang wird in Richtung der Replikationsgabel synthetisiert (5'→3'), der Folgestrang weg von der Gabel (5'→3', Okazaki-Fragmente)",
            "Beide Stränge werden kontinuierlich synthetisiert, da DNA-Polymerase in beide Richtungen arbeiten kann",
            "Der Folgestrang wird von DNA-Polymerase I synthetisiert, der Leitstrang von DNA-Polymerase III",
          ],
          correctIndex: 2,
          explanation:
            "**Leitstrang (Leading Strand):** **Kontinuierliche Synthese** in **5'→3'-Richtung** (in Richtung der Replikationsgabel), benötigt **1× RNA-Primer**. **Folgestrang (Lagging Strand):** **Diskontinuierliche Synthese** (5'→3' **weg** von der Gabel) → **Okazaki-Fragmente** (~100–200 nt bei Eukaryoten), benötigt **viele Primer** (für jedes Fragment). **DNA-Polymerase kann nur 5'→3'** synthetisieren → Folgestrang = \"rückwärts\" in Fragmenten. DNA-Ligase verbindet Fragmente.",
          hints: [
            "DNA-Polymerase kann nur in 5'→3'-Richtung synthetisieren — betrachte, welcher Strang der Replikationsgabel entgegenläuft.",
            "Der Folgestrang wird in kleinen Fragmenten synthetisiert, die jedes Mal einen neuen Primer brauchen — diese heißen Okazaki-Fragmente.",
          ],
          difficulty: 3,
          tags: ["leitstrang", "folgestrang", "okazaki-fragmente"],
        },
        {
          question:
            "DNA-Polymerase hat **3'→5' Exonuklease-Aktivität** (Korrekturlesen, Proofreading). Welche Funktion hat diese Aktivität?",
          options: [
            "Entfernung von RNA-Primern nach der Synthese (Ersatz durch DNA)",
            "Korrektur von fehlerhaft eingebauten Nukleotiden während der Replikation (Fehlerrate ↓ auf ~10⁻⁹)",
            "Synthese von DNA in 3'→5'-Richtung (zusätzlich zur 5'→3'-Synthese)",
            "Entspannung von Supercoiling (Überdrehung) vor der Replikationsgabel",
            "Verlängerung der Telomere (TTAGGG-Repeats) an Chromosomenenden",
          ],
          correctIndex: 1,
          explanation:
            "**3'→5' Exonuklease-Aktivität (Proofreading):** DNA-Polymerase **erkennt fehlerhaft eingebaute Nukleotide** und **entfernt** sie (3'→5'-Richtung, rückwärts), dann **korrekt wieder eingefügt** (5'→3'-Synthese). **Fehlerrate:** Ohne Korrektur ~10⁻⁶, **mit Proofreading ~10⁻⁹** (sehr niedrig!). Wichtig: **Synthese 5'→3'**, **Korrektur 3'→5'**. RNA-Primer-Entfernung: DNA-Pol I (Prokaryoten) oder RNase H (Eukaryoten), nicht 3'→5' Exonuklease!",
          hints: [
            "'Exonuklease' schneidet Nukleotide vom Ende eines Strangs ab — hier rückwärts (3'→5'), also gegen die Syntheserichtung.",
            "Stell dir vor, die Polymerase bemerkt einen falschen Baustein und macht einen Schritt zurück, um ihn zu entfernen — was verbessert das?",
          ],
          difficulty: 2,
          tags: ["proofreading", "dna-polymerase", "exonuklease"],
        },
        {
          question:
            "**Telomerase** ist ein Ribonukleoprotein-Enzym, das Telomere (TTAGGG-Repeats) an Chromosomenenden verlängert. In welchen Zellen ist Telomerase **aktiv**, und welche klinische Bedeutung hat dies?",
          options: [
            "In allen somatischen Zellen, um DNA-Schäden zu reparieren und Alterung zu verhindern",
            "In Keimbahn-Zellen, Stammzellen und Krebszellen (Immortalisierung); inaktiv in den meisten somatischen Zellen",
            "Nur in Prokaryoten, da Eukaryoten keine Telomere benötigen (zirkuläre Chromosomen)",
            "In allen Zellen während der S-Phase, um DNA-Replikation zu ermöglichen",
            "Telomerase ist nur in Bakterien aktiv, da diese keine DNA-Polymerase I haben",
          ],
          correctIndex: 1,
          explanation:
            "**Telomerase aktiv in:** **Keimbahn-Zellen** (Spermien, Eizellen), **Stammzellen** (hämatopoetische, embryonale), **Krebszellen** (Immortalisierung, ~85–90% der Tumoren). **Inaktiv in:** Meisten somatischen Zellen → **Telomer-Verkürzung** bei jeder Teilung → **Seneszenz** (Hayflick-Limit ~50 Teilungen). **Klinisch:** Krebszellen reaktivieren Telomerase → unbegrenzte Teilung (Immortalisierung) → Therapieziel (Telomerase-Inhibitoren). Wichtig: **Telomerase = Krebs-Marker** (Diagnostik/Therapie)!",
          hints: [
            "Telomere werden bei jeder Replikation kürzer — welche Zellen müssen sich dauerhaft teilen und dürfen daher nicht seneszent werden?",
            "Krebszellen teilen sich unbegrenzt — überlege, welches Enzym sie reaktivieren müssen, um die Telomere nicht zu verlieren.",
          ],
          difficulty: 2,
          tags: ["telomerase", "telomere", "seneszenz"],
        },
      ],
    },
    {
      id: "bio-6-02",
      title: "Transkription",
      content: `# Transkription und RNA-Prozessierung – Biologie Kapitel 6 (Molekulare Genetik)

## Einleitung

**Transkription** = Synthese von **RNA** aus **DNA-Matrize**

**Zentral** für Genexpression:
1. **DNA → RNA** (Transkription)
2. **RNA → Protein** (Translation)

**RNA-Typen:**
- **mRNA** (messenger RNA): Codiert Proteine
- **rRNA** (ribosomale RNA): Bestandteil der Ribosomen
- **tRNA** (Transfer-RNA): Bringt Aminosäuren zur Translation

## Grundprinzip der Transkription

**Unterschiede DNA ↔ RNA:**

| Merkmal | DNA | RNA |
|---------|-----|-----|
| **Zucker** | Desoxyribose (ohne OH an 2'-Position) | **Ribose** (mit OH an 2'-Position) |
| **Basen** | A, T, G, C | A, **U** (Uracil statt Thymin), G, C |
| **Stränge** | Doppelstrang (Doppelhelix) | **Einzelstrang** (kann Sekundärstrukturen bilden) |
| **Stabilität** | Sehr stabil (2'-H statt OH) | Weniger stabil (2'-OH anfällig für Hydrolyse) |

**Basenpaarung bei Transkription:**
- DNA-Matrize: **T → A** (RNA)
- DNA-Matrize: **A → U** (RNA, nicht T!)
- DNA-Matrize: **G → C** (RNA)
- DNA-Matrize: **C → G** (RNA)

## Ablauf der Transkription

**Initiation (Start):**

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

**Elongation (Verlängerung):**

**RNA-Polymerase:**
- **Syntheserichtung:** **5'→3'** (wie DNA-Polymerase)
- **Matrize:** DNA-Strang (3'→5', **Template Strand/Antisense Strand**)
- **Benötigt KEINEN Primer** (kann de novo starten, Unterschied zu DNA-Polymerase!)
- **Transkriptionsblase:** RNA-Polymerase öffnet DNA (~10–20 bp), RNA verlängert sich

**Codogener Strang vs. Matrize:**
- **Template Strand (Antisense):** 3'→5', DNA-Matrize für RNA
- **Coding Strand (Sense):** 5'→3', **gleiche Sequenz wie mRNA** (außer T → U)

**Beispiel:**
- **Coding Strand:** 5'-ATG-TCC-GAA-3'
- **Template Strand:** 3'-TAC-AGG-CTT-5'
- **mRNA:** 5'-AUG-UCC-GAA-3' (wie Coding Strand, T → U)

**Termination (Abschluss):**

**Prokaryoten:**
- **Rho-unabhängig:** GC-reiche Sequenz (Palindrom) → Haarnadelstruktur (Stem-Loop) → RNA-Polymerase löst sich ab
- **Rho-abhängig:** Rho-Protein (Helicase) löst RNA-DNA-Hybrid ab

**Eukaryoten:**
- **Polyadenylierung-Signal:** AAUAAA (~20 nt vor Ende)
- **Spaltung** + **Poly-A-Tail** (~200 Adenine) wird angefügt (Post-Transkription)
- RNA-Polymerase II wird freigesetzt

## RNA-Prozessierung (nur Eukaryoten!)

**Primärtranskript (pre-mRNA)** → **reife mRNA** (3 Schritte):

**5'-Capping:**
- **7-Methylguanosin-Kappe** (m7G) wird an **5'-Ende** angefügt (während Transkription)
- **Funktion:**
  - Schutz vor Abbau (Exonukleasen)
  - Erkennung durch Ribosom (Translation)
  - Transport aus Kern (Export-Signal)

**3'-Polyadenylierung:**
- **Poly-A-Tail** (~200 Adenine) wird an **3'-Ende** angefügt (nach AAUAAA-Signal)
- **Funktion:**
  - Schutz vor Abbau
  - Translation-Effizienz ↑
  - mRNA-Stabilität

**Splicing (Spleißen):**

**Problem:** Eukaryotische Gene haben **Introns** (nicht-codierende Sequenzen) + **Exons** (codierende Sequenzen)

**Prozess:**
- **Spliceosom** (Ribonukleoprotein-Komplex: U1, U2, U4, U5, U6 snRNPs) entfernt **Introns**
- **Exons** werden verbunden → reife mRNA (nur Exons)

**Splice-Stellen:**
- **5'-Splice-Stelle:** GU (Intron-Beginn)
- **Branch Point:** Adenin (A, innerhalb Intron)
- **3'-Splice-Stelle:** AG (Intron-Ende)

**Beispiel:**
- **pre-mRNA:** Exon 1 - Intron - Exon 2 - Intron - Exon 3
- **Reife mRNA:** Exon 1 - Exon 2 - Exon 3 (Introns entfernt)

**Alternatives Splicing:**
- **Verschiedene Kombinationen** von Exons → **mehrere Proteine** von 1 Gen
- **Beispiel:** Titin-Gen (TTN): 363 Exons → viele Isoformen (Muskel-Varianten)
- **Bedeutung:** Proteom-Diversität (Mensch: ~20.000 Gene → >100.000 Proteine)

## Prokaryoten vs. Eukaryoten

| Merkmal | Prokaryoten | Eukaryoten |
|---------|-------------|------------|
| **RNA-Polymerase** | 1× (alle Gene) | 3× (Pol I, II, III) |
| **Promotor** | -10-Box (Pribnow), -35-Box, Sigma-Faktor | TATA-Box, Transkriptionsfaktoren (TFIID, etc.) |
| **Introns** | **Keine** | Ja (Introns + Exons) |
| **Splicing** | **Nein** | Ja (Spliceosom) |
| **5'-Capping** | **Nein** | Ja (m7G-Kappe) |
| **Poly-A-Tail** | **Nein** | Ja (~200 A) |
| **Translation** | **Gekoppelt** (während Transkription, Polysom) | **Getrennt** (Transkription in Kern, Translation in Cytoplasma) |

**Wichtig:** Prokaryoten haben **keine RNA-Prozessierung** (keine Introns, keine Capping/Poly-A)!

## Klinische Relevanz

**β-Thalassämie (Splicing-Defekt):**

**Gen:** β-Globin (HBB)
- **Mutation:** Splice-Stelle-Mutation (z.B. IVS1-110 G→A) → **Intron nicht entfernt** → fehlerhaftes β-Globin
- **Folge:** β-Globin ↓ oder fehlt → Anämie (Hämoglobin ↓)
- **Vererbung:** Autosomal-rezessiv

**α-Amanitin (Transkriptions-Inhibitor):**

**Quelle:** Grüner Knollenblätterpilz (*Amanita phalloides*)
- **Wirkung:** **Hemmt RNA-Polymerase II** (mRNA-Synthese ↓) → Proteinbiosynthese ↓ → Lebernekrose, Nierenversagen
- **Klinisch:** Tödlich (Mortalität ~20–30%), keine spezifische Therapie (Lebertransplantation)
`,
      lernziele: [
        "Den Unterschied zwischen DNA und RNA (Zucker, Basen, Strangigkeit) erklären können.",
        "Die drei Phasen der Transkription (Initiation, Elongation, Termination) bei Pro- und Eukaryoten beschreiben können.",
        "Die drei RNA-Prozessierungsschritte bei Eukaryoten (5'-Capping, Poly-A-Tail, Splicing) und ihre Funktion erläutern können.",
        "Den Unterschied zwischen Template Strand und Coding Strand sowie die Syntheserichtung der RNA-Polymerase erklären können.",
        "Klinische Bedeutung von Splicing-Defekten (β-Thalassämie) und Transkriptionshemmung (α-Amanitin) benennen können.",
      ],
      sections: [
        {
          heading: "Grundprinzip der Transkription",
          text: "RNA unterscheidet sich von DNA durch Ribose (statt Desoxyribose), Uracil (statt Thymin) und ist einzelsträngig. Bei der Transkription liest RNA-Polymerase den Template Strand (3'→5') und synthetisiert RNA in 5'→3'-Richtung — ohne Primer.",
          merksatz:
            "RNA: Ribose (2'-OH), Uracil (U statt T), Einzelstrang. DNA: Desoxyribose, Thymin (T), Doppelstrang. Basenpaarung: A-U (RNA), A-T (DNA), G-C (beide). RNA weniger stabil (2'-OH anfällig für Hydrolyse).",
        },
        {
          heading: "Ablauf der Transkription",
          text: "Bei Prokaryoten erkennt der Sigma-Faktor den Promotor (-10 Pribnow-Box, -35-Box). Bei Eukaryoten bindet TFIID (TBP) an die TATA-Box und rekrutiert RNA-Pol II. Termination erfolgt prokaryotisch durch Haarnadelstrukturen oder Rho-Protein; eukaryotisch durch Polyadenylierungssignal (AAUAAA).",
          merksatz:
            "RNA-Pol II (mRNA): TATA-Box (Promotor), TFIID (TBP bindet TATA), weitere TFs (TFIIB, E, F, H) rekrutieren RNA-Pol II. Syntheserichtung 5'→3', KEIN Primer. Template Strand 3'→5' (Matrize), Coding Strand 5'→3' (= mRNA, T → U).",
        },
        {
          heading: "RNA-Prozessierung (nur Eukaryoten!)",
          text: "Drei Schritte: 5'-Capping (m7G-Kappe: Schutz, Ribosom-Erkennung, Kernexport), 3'-Polyadenylierung (~200 Adenine: Stabilität, Schutz), Splicing (Spliceosom entfernt Introns GU...AG, verbindet Exons). Alternatives Splicing erzeugt Proteom-Diversität.",
          merksatz:
            "3 Schritte: (1) 5'-Capping (m7G-Kappe, Schutz + Ribosom-Erkennung), (2) 3'-Poly-A-Tail (~200 A, Stabilität), (3) Splicing (Spliceosom entfernt Introns GU...AG, Exons verbunden). Alternatives Splicing → viele Proteine von 1 Gen.",
        },
        {
          heading: "Prokaryoten vs. Eukaryoten",
          text: "Prokaryoten haben 1 RNA-Polymerase, keine Introns, keine RNA-Prozessierung und gekoppelte Transkription/Translation. Eukaryoten haben 3 RNA-Polymerasen, Introns, alle drei Prozessierungsschritte und räumlich getrennte Transkription (Kern) und Translation (Cytoplasma).",
          merksatz:
            "Prokaryoten: KEINE Introns, KEINE RNA-Prozessierung, gekoppelte Transkription/Translation. Eukaryoten: Introns + Exons, RNA-Prozessierung (Capping/Poly-A/Splicing), getrennte Transkription (Kern) + Translation (Cytoplasma).",
        },
      ],
      diagram: "transcription-translation",

      merksätze: [],
      selfTest: [
        {
          question: "Welcher der folgenden Unterschiede zwischen **RNA** und **DNA** ist korrekt?",
          options: [
            "RNA enthält Thymin (T), DNA enthält Uracil (U) als Pyrimidin-Base",
            "RNA enthält Ribose (mit 2'-OH), DNA enthält Desoxyribose (ohne 2'-OH, nur H)",
            "RNA ist immer doppelsträngig (Doppelhelix), DNA ist einzelsträngig",
            "RNA ist stabiler als DNA, da die 2'-OH-Gruppe vor Hydrolyse schützt",
            "RNA und DNA verwenden beide Thymin (T) als Pyrimidin-Base",
          ],
          correctIndex: 1,
          explanation:
            "**RNA vs. DNA:** **RNA** = **Ribose** (Zucker mit 2'-OH), **Uracil (U)** statt Thymin, **Einzelstrang**. **DNA** = **Desoxyribose** (ohne 2'-OH, nur H an 2'-Position), **Thymin (T)**, **Doppelstrang**. Die **2'-OH-Gruppe** in RNA macht sie **weniger stabil** (anfällig für Hydrolyse), nicht stabiler! Basenpaarung: A-U (RNA), A-T (DNA), G-C (beide). Wichtig: **U in RNA**, **T in DNA**!",
          hints: [
            "Der Zucker in RNA heißt Ribose (daher der Name) — was unterscheidet ihn strukturell von der Desoxyribose der DNA?",
            "Denke an die vier Unterschiede: Zucker, Base (T vs. U), Stranganzahl und chemische Stabilität.",
          ],
          difficulty: 1,
          tags: ["rna dna unterschied", "ribose", "uracil"],
        },
        {
          question:
            "RNA-Polymerase synthetisiert RNA während der Transkription. Welche Aussage über RNA-Polymerase ist korrekt?",
          options: [
            "RNA-Polymerase benötigt einen RNA-Primer (wie DNA-Polymerase) zum Starten der Synthese",
            "RNA-Polymerase kann de novo (ohne Primer) starten und synthetisiert in 5'→3'-Richtung",
            "RNA-Polymerase synthetisiert in 3'→5'-Richtung, während DNA-Polymerase in 5'→3'-Richtung arbeitet",
            "RNA-Polymerase kann nur Okazaki-Fragmente synthetisieren, nicht kontinuierlich",
            "RNA-Polymerase benötigt Telomerase zur Verlängerung von RNA-Enden",
          ],
          correctIndex: 1,
          explanation:
            "**RNA-Polymerase:** Kann **de novo** (ohne Primer) starten (Unterschied zu DNA-Polymerase, die Primer benötigt!). **Syntheserichtung: 5'→3'** (wie DNA-Pol). Die DNA-Matrize (**Template Strand**) wird in **3'→5'-Richtung** gelesen → RNA entsteht 5'→3'. **Wichtig:** DNA-Pol benötigt **Primer** (RNA, ~10 nt), RNA-Pol **nicht**! RNA-Pol öffnet DNA-Doppelhelix (Transkriptionsblase) und verlängert RNA kontinuierlich.",
          hints: [
            "Welches Enzym benötigt einen Primer zum Starten — RNA-Polymerase oder DNA-Polymerase? Das ist der Schlüsselunterschied.",
            "Beide Polymerasen arbeiten in derselben Richtung (5'→3') — prüfe jede Antwort auf Richtungsangaben.",
          ],
          difficulty: 2,
          tags: ["rna-polymerase", "transkription", "promotor"],
        },
        {
          question:
            "Bei der Transkription wird der **Template Strand (Antisense Strand)** als Matrize verwendet. Welche Aussage ist korrekt?",
          options: [
            "Der Template Strand verläuft 5'→3' und wird von RNA-Polymerase in derselben Richtung gelesen",
            "Der Template Strand verläuft 3'→5' und wird als Matrize verwendet; die RNA wird 5'→3' synthetisiert",
            "Der Coding Strand (Sense Strand) wird als Matrize verwendet, nicht der Template Strand",
            "Template Strand und Coding Strand haben identische Sequenzen (außer T → U)",
            "Der Template Strand codiert direkt für Proteine, der Coding Strand ist nicht-codierend",
          ],
          correctIndex: 1,
          explanation:
            "**Template Strand (Antisense):** Verläuft **3'→5'**, wird als **DNA-Matrize** verwendet → RNA wird **5'→3'** synthetisiert (komplementär + antiparallel). **Coding Strand (Sense):** Verläuft **5'→3'**, hat **gleiche Sequenz wie mRNA** (außer T → U), wird **nicht** als Matrize verwendet. **Beispiel:** Coding 5'-ATG-TCC-3', Template 3'-TAC-AGG-5', mRNA 5'-AUG-UCC-3' (wie Coding, T → U). Wichtig: **Template = Matrize**, **Coding = wie mRNA**!",
          hints: [
            "RNA-Polymerase liest die Matrize in 3'→5'-Richtung und baut die RNA in 5'→3'-Richtung — welcher Strang muss also 3'→5' verlaufen?",
            "Der Coding Strand hat die gleiche Sequenz wie die mRNA (nur T statt U) — er ist demnach nicht die Matrize, sondern der 'Informationsstrang'.",
          ],
          difficulty: 3,
          tags: ["template strand", "antisense", "transkription"],
        },
        {
          question:
            "Bei Eukaryoten bindet der Transkriptionsfaktor **TFIID** an die **TATA-Box** im Promotor. Welche Aussage ist korrekt?",
          options: [
            "TFIID bindet an die -10-Box (Pribnow-Box) und rekrutiert den Sigma-Faktor bei Prokaryoten",
            "TFIID enthält TBP (TATA-Binding Protein) und bindet an die TATA-Box (~25 bp vor Transkriptionsstart)",
            "TFIID ist eine RNA-Polymerase, die mRNA direkt synthetisiert (ohne weitere Faktoren)",
            "TFIID entfernt Introns während der Transkription (Splicing-Funktion)",
            "TFIID fügt die Poly-A-Tail an das 3'-Ende der mRNA an (Polyadenylierung)",
          ],
          correctIndex: 1,
          explanation:
            "**TFIID (Transkriptionsfaktor II D):** Bindet an **TATA-Box** (TATAAA, ~25 bp vor Transkriptionsstart) über **TBP** (TATA-Binding Protein). Weitere TFs (TFIIB, TFIIE, TFIIF, TFIIH) rekrutieren **RNA-Polymerase II** (mRNA-Synthese). **Prokaryoten:** -10-Box (Pribnow-Box, TATAAT), -35-Box, **Sigma-Faktor** (σ) hilft RNA-Pol, Promotor zu erkennen (nicht TFIID!). Wichtig: **TFIID = Eukaryoten**, **Sigma-Faktor = Prokaryoten**!",
          hints: [
            "TFIID ist ein eukaryotischer Transkriptionsfaktor — für Prokaryoten gibt es das analoge Sigma-Faktor-System.",
            "TBP (TATA-Binding Protein) ist eine Untereinheit von TFIID — es erkennt die TATA-Box und leitet die Bildung des Präinitiationskomplexes ein.",
          ],
          difficulty: 2,
          tags: ["tfiid", "tata-box", "promotor"],
        },
        {
          question:
            "Während der **RNA-Prozessierung** bei Eukaryoten werden drei Modifikationen vorgenommen: 5'-Capping, 3'-Polyadenylierung und Splicing. Welche Aussage zur **5'-Capping** ist korrekt?",
          options: [
            "5'-Capping fügt ~200 Adenine (Poly-A-Tail) an das 5'-Ende der mRNA an",
            "5'-Capping fügt eine 7-Methylguanosin-Kappe (m7G) an das 5'-Ende an, was Schutz vor Abbau und Ribosom-Erkennung bietet",
            "5'-Capping entfernt Introns aus der pre-mRNA (Splicing-Funktion)",
            "5'-Capping findet nur bei tRNA statt, nicht bei mRNA",
            "5'-Capping ist ein prokaryotischer Prozess, der bei Eukaryoten nicht vorkommt",
          ],
          correctIndex: 1,
          explanation:
            "**5'-Capping (nur Eukaryoten):** **7-Methylguanosin-Kappe (m7G)** wird an **5'-Ende** der mRNA angefügt (während Transkription). **Funktionen:** (1) **Schutz vor Abbau** (Exonukleasen), (2) **Ribosom-Erkennung** (Translation-Initiation), (3) **Kern-Export** (Transport-Signal). **3'-Polyadenylierung:** ~200 Adenine (Poly-A-Tail) an **3'-Ende** (nicht 5'!). **Splicing:** Entfernt Introns. Wichtig: **Capping = 5'-Ende**, **Poly-A = 3'-Ende**, **nur Eukaryoten**!",
          hints: [
            "Die Kappe sitzt am 5'-Ende der mRNA — denke an ihre drei Schutz- und Signalfunktionen.",
            "Unterscheide 5'-Capping (m7G-Kappe, Schutz/Erkennung) von 3'-Polyadenylierung (Poly-A-Schwanz) — beides sind verschiedene Enden!",
          ],
          difficulty: 1,
          tags: ["5-capping", "rna-prozessierung", "mrna"],
        },
        {
          question:
            "**Splicing** bei Eukaryoten entfernt Introns aus der pre-mRNA. Welche Aussage zum Splicing ist korrekt?",
          options: [
            "Introns sind codierende Sequenzen, Exons sind nicht-codierend; Splicing entfernt Exons",
            "Das Spliceosom (snRNPs: U1, U2, U4, U5, U6) entfernt Introns (GU...AG) und verbindet Exons",
            "Prokaryoten haben Introns und verwenden das Spliceosom zur RNA-Prozessierung",
            "Alternatives Splicing führt immer zu einem einzigen Protein pro Gen (keine Diversität)",
            "Splicing findet während der Translation im Cytoplasma statt, nicht im Zellkern",
          ],
          correctIndex: 1,
          explanation:
            "**Splicing (nur Eukaryoten):** **Spliceosom** (Ribonukleoprotein-Komplex: U1, U2, U4, U5, U6 snRNPs) erkennt **Splice-Stellen** (5'-GU, Branch Point A, 3'-AG) und entfernt **Introns** (nicht-codierend). **Exons** (codierend) werden verbunden → reife mRNA. **Alternatives Splicing:** Verschiedene Exon-Kombinationen → **viele Proteine von 1 Gen** (Proteom-Diversität, Mensch: ~20.000 Gene → >100.000 Proteine). **Prokaryoten:** KEINE Introns, KEIN Splicing! Splicing findet im **Kern** statt, nicht Cytoplasma.",
          hints: [
            "Merkhilfe: Introns werden 'herausgespleißt' (entfernt), Exons werden 'exprimiert' (behalten) — daher die Namen.",
            "Das Spliceosom erkennt die Konsensussequenzen GU am Intronbeginn und AG am Intronende — was bedeutet das für die Häufigkeit dieser Dinukleotide?",
          ],
          difficulty: 2,
          tags: ["splicing", "introns", "spleißosom"],
        },
      ],
    },
    {
      id: "bio-6-03",
      title: "Translation",
      content: `# Translation (Proteinbiosynthese) – Biologie Kapitel 6 (Molekulare Genetik)

## Einleitung

**Translation** = Synthese von **Proteinen** aus **mRNA**

**Zentral** für Genexpression:
1. **DNA → RNA** (Transkription)
2. **RNA → Protein** (Translation)

**Ort:** **Ribosomen** (Cytoplasma, raues ER)

## Genetischer Code

**Codon** = 3 Nukleotide (Triplett) → 1 Aminosäure

**Eigenschaften:**

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

## Wobble-Hypothese und tRNA

**Wobble-Hypothese (Crick, 1966):**

**Problem:** 61 codierende Codons, aber nur ~45 tRNAs (nicht 61!)

**Lösung:** **Wobble-Position** (3. Base des Codons, 1. Base des Anticodons)
- **Nicht-Watson-Crick-Paarung** möglich (z.B. G-U statt G-C)
- **1 tRNA** kann **mehrere Codons** erkennen (v.a. wenn 3. Base unterschiedlich)

**tRNA-Struktur:**
- **Kleeblatt-Struktur** (2D) → **L-förmig** (3D)
- **Anticodon-Arm:** 3 Basen (Anticodon, komplementär zum mRNA-Codon)
- **Akzeptor-Arm:** CCA-3'-Ende → Aminosäure wird hier gebunden (Aminoacyl-tRNA)

**Aminoacyl-tRNA-Synthetase:**
- **20 Enzyme** (1 pro Aminosäure), belädt tRNA mit passender Aminosäure (ATP-abhängig)
- **Fehlerrate:** ~10⁻⁴ (sehr niedrig, Korrektur-Mechanismus)

## Ribosom

**Struktur:** 2 Untereinheiten (große + kleine)

**Prokaryoten (70S):**
- **Kleine Untereinheit:** 30S (16S rRNA + Proteine)
- **Große Untereinheit:** 50S (23S + 5S rRNA + Proteine)

**Eukaryoten (80S):**
- **Kleine Untereinheit:** 40S (18S rRNA + Proteine)
- **Große Untereinheit:** 60S (28S + 5,8S + 5S rRNA + Proteine)

**Funktion:** Katalysiert Peptidbindung (Peptidyl-Transferase, rRNA-katalysiert = **Ribozym**)

**Bindungsstellen:**
- **A-Site (Aminoacyl):** Neue Aminoacyl-tRNA bindet hier
- **P-Site (Peptidyl):** tRNA mit wachsender Peptidkette
- **E-Site (Exit):** Entladene tRNA verlässt Ribosom

## Ablauf der Translation

**Initiation (Start):**

**Prokaryoten:**
1. **Shine-Dalgarno-Sequenz** (AGGAGGU, ~10 bp vor AUG) → 16S rRNA erkennt, Ribosom bindet
2. **Initiator-tRNA:** fMet-tRNA (N-Formylmethionin, nur Prokaryoten) bindet an AUG (Start-Codon)
3. **Initiationsfaktoren (IF1, IF2, IF3):** Helfen Ribosom-Assemblierung

**Eukaryoten:**
1. **5'-Capping (m7G):** Ribosom erkennt Kappe, scannt mRNA bis zum **Start-AUG**
2. **Kozak-Sequenz:** GCCRCCAUGG (Konsensus-Sequenz um AUG) → optimale Translation
3. **Initiator-tRNA:** Met-tRNA (Methionin, **nicht** formyliert wie Prokaryoten)
4. **Initiationsfaktoren (eIF1, eIF2, eIF3, eIF4, etc.):** Helfen Ribosom-Rekrutierung

**Wichtig:** Prokaryoten = **fMet** (formyliert), Eukaryoten = **Met** (nicht formyliert)

**Elongation (Verlängerung):**

1. **Codon-Erkennung:** Aminoacyl-tRNA bindet an A-Site (passend zum Codon)
   - **EF-Tu** (Prokaryoten) bzw. **eEF1A** (Eukaryoten): Bringt Aminoacyl-tRNA zur A-Site (GTP-abhängig)

2. **Peptidbindung:** **Peptidyl-Transferase** (rRNA-katalysiert, Ribozym) → Aminosäure von P-Site wird an A-Site-Aminosäure gebunden

3. **Translokation:** Ribosom bewegt sich **1 Codon weiter** (5'→3' auf mRNA)
   - **EF-G** (Prokaryoten) bzw. **eEF2** (Eukaryoten): Katalysiert Translokation (GTP-abhängig)
   - **tRNA-Bewegung:** A → P → E (entladene tRNA verlässt E-Site)

**Termination (Abschluss):**

**Stopp-Codon** (UAA, UAG, UGA) erreicht A-Site:
- **Keine passende tRNA** (kein Anticodon für Stopp-Codons)
- **Release-Faktoren (RF):**
  - **Prokaryoten:** RF1 (UAA, UAG), RF2 (UAA, UGA), RF3 (GTP-abhängig)
  - **Eukaryoten:** eRF1 (alle 3 Stopp-Codons), eRF3 (GTP-abhängig)
- **Protein freigesetzt**, Ribosom disassembliert

## Post-translationale Modifikation (PTM)

| Modifikation | Beispiel | Funktion |
|--------------|----------|----------|
| **Faltung** | Chaperone (z.B. Hsp70, Hsp60) | Korrekte 3D-Struktur |
| **Glykosylierung** | N-Glykosylierung (Asn), O-Glykosylierung (Ser/Thr) | Stabilität, Zell-Erkennung |
| **Phosphorylierung** | Serin, Threonin, Tyrosin (Kinasen) | Signalübertragung, Regulation |
| **Acetylierung** | Histone (Lysin) | Gen-Regulation (Chromatin) |
| **Ubiquitinierung** | Ubiquitin-Tag → Proteasom | Protein-Abbau |
| **Proteolyse** | Insulin (Proinsulin → Insulin + C-Peptid) | Aktivierung, Reifung |

**Wichtig:** Viele Proteine sind **erst nach PTM funktional** (z.B. Insulin, Kollagen)

## Antibiotika (hemmen Translation)

**Ziel:** Prokaryotische Ribosomen (70S), **nicht** eukaryotische (80S) → selektive Toxizität

| Antibiotikum | Angriffspunkt | Wirkung |
|--------------|---------------|---------|
| **Tetracyclin** | 30S (kleine Untereinheit) | Blockiert Aminoacyl-tRNA-Bindung (A-Site) → Elongation ↓ |
| **Chloramphenicol** | 50S (große Untereinheit) | Hemmt Peptidyl-Transferase → Peptidbindung ↓ |
| **Erythromycin (Makrolid)** | 50S | Blockiert Translokation (Ribosom-Bewegung ↓) |
| **Streptomycin (Aminoglykosid)** | 30S | Fehlerhafte Codon-Erkennung → falsche Aminosäuren |

**Wichtig:** Mitochondrien haben **70S-Ribosomen** (prokaryotischen Ursprung) → Antibiotika können mitochondriale Translation hemmen (Nebenwirkung!)
`,
      lernziele: [
        "Die Eigenschaften des genetischen Codes (Triplett, universell, degeneriert, kommafrei) erklären können.",
        "Start- und Stopp-Codons sowie die Wobble-Hypothese und die Rolle der tRNA beschreiben können.",
        "Den Aufbau prokaryotischer (70S) und eukaryotischer (80S) Ribosomen und die A/P/E-Sites erläutern können.",
        "Die drei Phasen der Translation (Initiation, Elongation, Termination) mit Unterschieden Pro-/Eukaryoten beschreiben können.",
        "Den Wirkmechanismus der wichtigsten Antibiotika (Tetracyclin, Chloramphenicol, Erythromycin) auf die Translation erklären können.",
      ],
      sections: [
        {
          heading: "Genetischer Code",
          text: "Der genetische Code ist ein Triplett-Code: je 3 Basen (Codon) codieren für 1 Aminosäure. 64 Codons für 20 Aminosäuren + 3 Stopp → der Code ist degeneriert (mehrere Codons pro Aminosäure). Start-Codon ist AUG (Met), Stopp-Codons sind UAA, UAG, UGA.",
          merksatz:
            "Triplett-Code (3 Basen → 1 AS), degeneriert (viele Codons → 1 AS, z.B. Leucin 6 Codons), universell. Start-Codon AUG (Met), Stopp-Codons UAA/UAG/UGA. 64 Codons (4³) → 20 AS + 3 Stopp.",
        },
        {
          heading: "Wobble-Hypothese und tRNA",
          text: "Die Wobble-Hypothese erklärt, warum ~45 tRNAs für 61 Codons ausreichen: die 3. Codon-Base (Wobble-Position) erlaubt nicht-Watson-Crick-Paarung (z.B. G-U). tRNAs haben Kleeblattstruktur mit Anticodon-Arm und CCA-3'-Ende zur Aminosäure-Bindung. Aminoacyl-tRNA-Synthetasen (20 Enzyme) beladen tRNAs ATP-abhängig.",
          merksatz:
            "tRNA: Kleeblatt-Struktur, Anticodon (paart mit mRNA-Codon), CCA-3'-Ende (Aminosäure-Bindung). Aminoacyl-tRNA-Synthetase (spezifisch für jede AS) belädt tRNA (ATP-abhängig). Wobble: 1 tRNA für mehrere Codons (3. Base flexibel).",
        },
        {
          heading: "Ribosom",
          text: "Prokaryotische Ribosomen sind 70S (30S + 50S), eukaryotische 80S (40S + 60S). Die drei Bindungsstellen A-Site (neue Aminoacyl-tRNA), P-Site (Peptidkette) und E-Site (entladene tRNA) ermöglichen die schrittweise Peptidbindung durch die Peptidyl-Transferase (ein Ribozym).",
          merksatz:
            "Prokaryoten 70S (30S + 50S), Eukaryoten 80S (40S + 60S). A-Site (neue Aminoacyl-tRNA), P-Site (Peptidkette), E-Site (entladene tRNA). Peptidyl-Transferase (rRNA-katalysiert = Ribozym) → Peptidbindung.",
        },
        {
          heading: "Ablauf der Translation",
          text: "Bei Prokaryoten erkennt die Shine-Dalgarno-Sequenz das Ribosom (fMet-Start). Eukaryoten scannen von der m7G-Kappe bis zum ersten AUG (Kozak-Sequenz, Met-Start). Elongation: Codon-Erkennung (A-Site) → Peptidbindung → Translokation (GTP). Stopp-Codons rekrutieren Release-Faktoren → Protein freigesetzt.",
          merksatz:
            "Prokaryoten: Shine-Dalgarno (AGGAGGU vor AUG), fMet-tRNA (formyliert), IF1/2/3. Eukaryoten: 5'-Capping (m7G), Kozak-Sequenz (GCCRCCAUGG), Met-tRNA (nicht formyliert), eIF1/2/3/4.",
        },
        {
          heading: "Antibiotika (hemmen Translation)",
          text: "Antibiotika nutzen den Unterschied zwischen 70S (Prokaryoten) und 80S (Eukaryoten) aus. Tetracyclin blockiert die A-Site (30S), Chloramphenicol hemmt die Peptidyl-Transferase (50S), Erythromycin blockiert die Translokation (50S). Mitochondrien (70S-Ribosomen) können ebenfalls betroffen sein.",
        },
      ],
      diagram: "transcription-translation",

      merksätze: [],
      selfTest: [
        {
          question: "Der genetische Code ist **degeneriert**. Was bedeutet dies?",
          options: [
            "Jedes Codon (3 Basen) codiert für mehrere verschiedene Aminosäuren (1 Codon → viele AS)",
            "Mehrere Codons können für dieselbe Aminosäure codieren (viele Codons → 1 AS, z.B. Leucin hat 6 Codons)",
            "Der genetische Code ist bei verschiedenen Organismen unterschiedlich (nicht universell)",
            "Codons überlappen sich, sodass ein Nukleotid zu mehreren Codons gehört",
            "Es gibt Pausen (Kommas) zwischen Codons, die nicht codierend sind",
          ],
          correctIndex: 1,
          explanation:
            '**Degeneriert (Degeneration):** **Mehrere Codons** → **1 Aminosäure**. Beispiel: **Leucin** wird von **6 Codons** codiert (UUA, UUG, CUU, CUC, CUA, CUG). **Grund:** 64 Codons (4³) → 20 Aminosäuren + 3 Stopp → viele Codons pro AS. **Vorteil:** Mutationen oft "stille Mutationen" (gleiche AS trotz Codon-Änderung). Wichtig: **1 Codon → 1 AS** (eindeutig), aber **1 AS → viele Codons** (degeneriert)!',
          hints: [
            "Es gibt 64 mögliche Codons (4³), aber nur 20 Aminosäuren plus 3 Stopp-Codons — was folgt daraus für die Zuordnung?",
            "'Degeneriert' heißt hier nicht 'kaputt', sondern 'redundant' — mehrere Codons zeigen auf dasselbe Ziel.",
          ],
          difficulty: 1,
          tags: ["genetischer code", "degeneriertheit", "codons"],
        },
        {
          question: "Welches der folgenden Codons ist ein **Stopp-Codon** (Nonsense-Codon)?",
          options: [
            "AUG (codiert Methionin, Start-Codon)",
            "UUU (codiert Phenylalanin)",
            "UAA (Stopp-Codon, keine Aminosäure, Termination)",
            "GCU (codiert Alanin)",
            "CAU (codiert Histidin)",
          ],
          correctIndex: 2,
          explanation:
            '**Stopp-Codons (Nonsense-Codons):** **UAA, UAG, UGA** → **keine Aminosäure**, beenden Translation. **Start-Codon:** **AUG** (Methionin, Met) → Translations-Start (1. Aminosäure). Wichtig: **3 Stopp-Codons** (UAA "Ochre", UAG "Amber", UGA "Opal"), **1 Start-Codon** (AUG). Bei Stopp-Codon: **Release-Faktoren** (RF1/2 Prokaryoten, eRF1 Eukaryoten) binden → Protein freigesetzt.',
          hints: [
            "Es gibt genau drei Stopp-Codons: UAA, UAG und UGA — keines davon codiert eine Aminosäure.",
            "AUG ist das einzige Start-Codon und codiert Methionin — alle anderen Optionen außer den Stopp-Codons codieren reguläre Aminosäuren.",
          ],
          difficulty: 1,
          tags: ["stopp-codon", "nonsense-codon", "uaa"],
        },
        {
          question:
            "Die **Wobble-Hypothese** (Crick, 1966) erklärt, warum **45 tRNAs** ausreichen, um **61 codierende Codons** zu erkennen. Welche Aussage ist korrekt?",
          options: [
            "Jede tRNA kann nur ein einziges spezifisches Codon erkennen (61 tRNAs für 61 Codons)",
            "Die Wobble-Position (3. Base des Codons, 1. Base des Anticodons) erlaubt Nicht-Watson-Crick-Paarung (z.B. G-U)",
            "Die Wobble-Hypothese besagt, dass Codons überlappen und mehrere Aminosäuren gleichzeitig codieren",
            "Wobble bedeutet, dass tRNAs falsch geladen werden und fehlerhafte Aminosäuren einbauen",
            "Wobble-Paarung findet nur bei Stopp-Codons statt, nicht bei codierenden Codons",
          ],
          correctIndex: 1,
          explanation:
            "**Wobble-Hypothese:** **3. Base des Codons** (5'-Ende der mRNA) paart mit **1. Base des Anticodons** (5'-Ende der tRNA) → **Wobble-Position**. **Nicht-Watson-Crick-Paarung** möglich (z.B. **G-U** statt G-C). **Folge:** **1 tRNA** kann **mehrere Codons** erkennen (v.a. wenn 3. Base unterschiedlich). Beispiel: Codon UUU + UUC (beide Phe) → 1 tRNA-Phe (Anticodon AAG, Wobble G-U möglich). Wichtig: **45 tRNAs** für **61 Codons** (nicht 61 tRNAs!)!",
          hints: [
            "'Wobble' (Wackeln) beschreibt die flexible Basenpaarung an der 3. Codon-Position — dort sind auch Nicht-Watson-Crick-Paare erlaubt.",
            "Wenn 45 tRNAs für 61 Codons ausreichen, muss jede tRNA im Schnitt mehr als ein Codon lesen können — wie ist das möglich?",
          ],
          difficulty: 2,
          tags: ["wobble-hypothese", "trna", "anticodon"],
        },
        {
          question:
            "**Aminoacyl-tRNA-Synthetase** ist ein Enzym, das tRNA mit der passenden Aminosäure belädt. Welche Aussage ist korrekt?",
          options: [
            "Es gibt nur 1 Aminoacyl-tRNA-Synthetase für alle 20 Aminosäuren (universelles Enzym)",
            "Es gibt 20 Aminoacyl-tRNA-Synthetasen (1 pro Aminosäure), jede spezifisch für eine AS und ihre tRNAs",
            "Aminoacyl-tRNA-Synthetase katalysiert die Peptidbindung zwischen Aminosäuren (Peptidyl-Transferase)",
            "Aminoacyl-tRNA-Synthetase entfernt Introns aus pre-mRNA (Splicing-Funktion)",
            "Aminoacyl-tRNA-Synthetase ist eine Untereinheit des Ribosoms (50S/60S)",
          ],
          correctIndex: 1,
          explanation:
            "**Aminoacyl-tRNA-Synthetase:** **20 Enzyme** (1 pro Aminosäure), jedes **spezifisch** für 1 AS und ihre tRNAs (kann mehrere tRNAs beladen, da Wobble). **Funktion:** Bindet Aminosäure an CCA-3'-Ende der tRNA (**Aminoacyl-tRNA**, ATP-abhängig). **Fehlerrate:** ~10⁻⁴ (sehr niedrig, Korrektur-Mechanismus). Wichtig: **1 Synthetase pro AS**, aber **mehrere tRNAs pro AS** (Wobble!). **Peptidyl-Transferase** = rRNA-katalysiert (Ribozym), nicht Synthetase!",
          hints: [
            "Es gibt 20 proteinogene Aminosäuren — wie viele Synthetasen werden daher benötigt?",
            "Die Aminoacyl-tRNA-Synthetase 'belädt' die tRNA am CCA-3'-Ende — verwechsle sie nicht mit der Peptidyl-Transferase, die die Peptidbindung knüpft.",
          ],
          difficulty: 2,
          tags: ["aminoacyl-trna-synthetase", "trna-beladung", "aminosäure"],
        },
        {
          question:
            "Bei Prokaryoten bindet das Ribosom an die **Shine-Dalgarno-Sequenz**. Bei Eukaryoten erfolgt die Initiation über die **5'-Capping** und **Kozak-Sequenz**. Welche Aussage ist korrekt?",
          options: [
            "Prokaryoten: Shine-Dalgarno (AGGAGGU, ~10 bp vor AUG) erkennt 16S rRNA, Initiator-tRNA ist fMet-tRNA (formyliert)",
            "Eukaryoten: Shine-Dalgarno-Sequenz vor AUG, Initiator-tRNA ist fMet-tRNA (wie Prokaryoten)",
            "Prokaryoten und Eukaryoten verwenden beide die Kozak-Sequenz zur Ribosom-Bindung",
            "Eukaryoten benötigen keine 5'-Capping, da Ribosomen direkt an AUG binden (wie Prokaryoten)",
            "Prokaryoten verwenden Met-tRNA (nicht formyliert), Eukaryoten fMet-tRNA (formyliert)",
          ],
          correctIndex: 0,
          explanation:
            "**Prokaryoten:** **Shine-Dalgarno-Sequenz** (AGGAGGU, ~10 bp vor AUG) → **16S rRNA** (30S) erkennt → Ribosom bindet. **Initiator-tRNA:** **fMet-tRNA** (N-Formylmethionin, **formyliert**). **Eukaryoten:** **5'-Capping** (m7G) → Ribosom erkennt Kappe, scannt mRNA bis AUG. **Kozak-Sequenz** (GCCRCCAUGG, Konsensus um AUG) → optimale Translation. **Initiator-tRNA:** **Met-tRNA** (**nicht** formyliert). Wichtig: **fMet (Prokaryoten)**, **Met (Eukaryoten)**!",
          hints: [
            "Prokaryoten nutzen die Shine-Dalgarno-Sequenz zur Ribosom-Anlagerung — Eukaryoten hingegen 'scannen' von der m7G-Kappe aus bis zum ersten AUG.",
            "Merke: fMet (formyliertes Methionin) ist der Starter bei Prokaryoten — bei Eukaryoten ist es unformyliertes Met.",
          ],
          difficulty: 3,
          tags: ["ribosomale initiation", "shine-dalgarno", "kozak-sequenz"],
        },
        {
          question:
            "**Tetracyclin** ist ein Antibiotikum, das die bakterielle Proteinbiosynthese hemmt. Welcher Mechanismus liegt zugrunde?",
          options: [
            "Tetracyclin hemmt DNA-Replikation durch Blockierung der DNA-Polymerase",
            "Tetracyclin bindet an die 30S-Untereinheit (Prokaryoten) und blockiert die A-Site → Aminoacyl-tRNA kann nicht binden",
            "Tetracyclin bindet an die 50S-Untereinheit und hemmt die Peptidyl-Transferase (Peptidbindung ↓)",
            "Tetracyclin hemmt Transkription durch Blockierung der RNA-Polymerase",
            "Tetracyclin bindet an die 80S-Ribosomen (Eukaryoten) und hemmt Translation (keine selektive Toxizität)",
          ],
          correctIndex: 1,
          explanation:
            "**Tetracyclin:** Bindet an **30S-Untereinheit** (kleine, prokaryotische Ribosom-Untereinheit) → **blockiert A-Site** → **Aminoacyl-tRNA kann nicht binden** → **Elongation ↓**. **Selektive Toxizität:** Prokaryoten (70S = 30S + 50S), Eukaryoten (80S = 40S + 60S) → Tetracyclin wirkt nur auf 70S! **Andere Antibiotika:** Chloramphenicol (50S, Peptidyl-Transferase ↓), Erythromycin (50S, Translokation ↓), Streptomycin (30S, Codon-Erkennung fehlerhaft). Wichtig: **Mitochondrien = 70S** → Tetracyclin kann mitochondriale Translation hemmen (Nebenwirkung)!",
          hints: [
            "Bakterien haben 70S-Ribosomen (30S + 50S), Menschen 80S (40S + 60S) — diese Differenz erklärt die selektive Toxizität von Tetracyclin.",
            "An welcher Stelle des Ribosoms bindet die neu eintreffende Aminoacyl-tRNA? Das ist die A-Site — Tetracyclin blockiert genau diese.",
          ],
          difficulty: 2,
          tags: ["tetracyclin", "proteinsynthese", "antibiotikum"],
        },
      ],
    },
    {
      id: "bio-6-04",
      title: "Genregulation",
      content: `# Genregulation – Biologie Kapitel 6 (Molekulare Genetik)

## Einleitung

**Genregulation** = Kontrolle der **Genexpression** (wann, wo, wie viel ein Gen abgelesen wird)

**Ebenen:**
1. **Transkriptionell:** Transkription ↑/↓ (Hauptebene)
2. **Post-transkriptionell:** RNA-Prozessierung, Stabilität, miRNA
3. **Translationell:** Translation ↑/↓
4. **Post-translationell:** Protein-Modifikation, Abbau

**Wichtig:** Nicht alle Gene sind immer aktiv → **Differenzierung** (Zelltypen trotz gleicher DNA)

## Prokaryotische Genregulation: Operon-Modell

**Operon** (Jacob & Monod, 1961): Gruppe von Genen, gemeinsam reguliert

**lac-Operon (induzierbares Operon):**

**Funktion:** **Laktose-Abbau** (E. coli)

**Gene:**
- **lacZ:** β-Galactosidase (spaltet Laktose → Glukose + Galaktose)
- **lacY:** Permease (transportiert Laktose in Zelle)
- **lacA:** Transacetylase (Nebenreaktion)

**Regulation:**

**Ohne Laktose (Repression):**
1. **Repressor** (lacI-Gen) bindet an **Operator** (O) → **Transkription blockiert**
2. **RNA-Polymerase** kann nicht an Promotor (P) binden → **Gene AUS**

**Mit Laktose (Induktion):**
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

**trp-Operon (reprimierbares Operon):**

**Funktion:** **Tryptophan-Biosynthese** (E. coli)

**Gene:** trpE, trpD, trpC, trpB, trpA (Enzyme für Tryptophan-Synthese)

**Regulation:**

**Ohne Tryptophan (Derepression):**
1. **Repressor** (trpR-Gen) **inaktiv** (benötigt Corepressor)
2. **RNA-Polymerase** bindet an Promotor → **Transkription ↑**, **Gene AN**

**Mit Tryptophan (Repression):**
1. **Tryptophan** = **Corepressor** → bindet an Repressor
2. **Repressor aktiv** → bindet an Operator → **Transkription blockiert**, **Gene AUS**

**Logik:** Tryptophan vorhanden → **keine Synthese nötig** → Gene AUS (Feedback-Hemmung)

**Vergleich:**
- **lac-Operon:** Induzierbares Operon (Substrat → Gene AN)
- **trp-Operon:** Reprimierbares Operon (Produkt → Gene AUS)

## Eukaryotische Genregulation

**Komplexer** als Prokaryoten (keine Operons, Chromatin-Struktur, Transkriptionsfaktoren)

**Transkriptionsfaktoren (TFs):**

**Funktion:** Proteine, die an DNA binden → Transkription ↑/↓

| Typ | Funktion | Beispiel |
|-----|----------|----------|
| **Basale TFs** | Rekrutieren RNA-Polymerase (essentiell) | TFIID (TBP, TATA-Box) |
| **Aktivatoren** | Binden an **Enhancer** (verstärkende Sequenzen) → Transkription ↑ | CREB, NF-κB |
| **Repressoren** | Binden an **Silencer** (unterdrückende Sequenzen) → Transkription ↓ | – |

**Enhancer/Silencer:**
- **Weit entfernt** vom Promotor (können 1 Mio. bp entfernt sein)
- **DNA-Looping:** Enhancer/Silencer bildet Schleife → interagiert mit Promotor (Mediator-Komplex)

## Epigenetische Regulation

**Definition:** Vererbbare Veränderungen der Genexpression **ohne DNA-Sequenz-Änderung**

**DNA-Methylierung:**
- **CpG-Inseln** (Cytosin-Guanin-Dinukleotide): Methylierung (5-Methylcytosin, 5mC) an Cytosin
- **Funktion:** **Genexpression ↓** (Promotor-Methylierung → Gen stillgelegt)
- **Beispiele:**
  - **X-Inaktivierung:** Inaktiviertes X-Chromosom (Barr-Körperchen) ist hypermethyliert
  - **Genomic Imprinting:** Eltern-spezifische Methylierung (z.B. IGF2-Gen: paternal exprimiert, maternal stillgelegt)

**Histone-Modifikationen:**
- **Histone:** Proteine, um die DNA gewickelt ist (Nukleosom)

**Histon-Acetylierung:**
- **Acetylierung (Acetyltransferase, HAT):** Lysin-NH₃⁺ → Lysin-NHCOCH₃ (neutral) → **DNA lockerer** → **Transkription ↑** (Euchromatin)
- **Deacetylierung (Deacetylase, HDAC):** Entfernt Acetyl-Gruppen → **DNA dichter** → **Transkription ↓** (Heterochromatin)

**Histon-Methylierung:**
- **Kontext-abhängig:** H3K4me3 → **Aktivierung**, H3K9me3 → **Repression**

**Chromatin-Zustand:**
- **Euchromatin:** Locker, acetyliert → **Genexpression ↑** (aktive Gene)
- **Heterochromatin:** Dicht, deacetyliert, methyliert → **Genexpression ↓** (inaktive Gene)

## RNA-Interferenz (RNAi): miRNA und siRNA

**Funktion:** **Post-transkriptionelle Genregulation** (mRNA-Abbau oder Translations-Blockierung)

**miRNA (microRNA):**
- **Endogen** (von Zelle selbst produziert)
- **Biogenese:** pri-miRNA → Drosha (Kern) → pre-miRNA → Dicer (Cytoplasma) → **reife miRNA** (~22 nt)
- **Funktion:** Bindet an **3'-UTR** der Ziel-mRNA (nicht vollständig komplementär) → **Translations-Repression** oder **mRNA-Abbau**
- **Beispiel:** let-7 (Entwicklungskontrolle, Tumorsuppressor)

**siRNA (small interfering RNA):**
- **Exogen** (z.B. virale doppelsträngige RNA) oder künstlich
- **Biogenese:** Lange dsRNA → **Dicer** → siRNA (~21–23 nt)
- **Funktion:** Bindet an mRNA (**vollständig komplementär**) → **mRNA-Abbau** (RISC-Komplex, Argonaute)
- **Therapeutisch:** Gen-Silencing (z.B. Patisiran: siRNA gegen Transthyretin bei Amyloidose)

**Vergleich:**
- **miRNA:** Endogen, nicht vollständig komplementär, Translations-Repression/Abbau
- **siRNA:** Exogen/künstlich, vollständig komplementär, mRNA-Abbau

## Klinische Relevanz

**Rett-Syndrom (Transkriptionsfaktor-Defekt):**

**Gen:** MECP2 (Methyl-CpG-Binding Protein 2)
- **Funktion:** Bindet an methylierte CpG-Inseln → Transkriptions-Repression
- **Mutation:** MECP2-Defekt → aberrante Genexpression → neurologische Störungen
- **Phänotyp:** Mädchen (X-chromosomal dominant, **letal bei ♂**), normale Entwicklung bis ~6–18 Monate → Regression (Handbewegungen, geistige Behinderung, Autismus-Symptome)

**Fragiles-X-Syndrom (Trinukleotid-Expansion):**

**Gen:** FMR1 (Fragile X Mental Retardation 1)
- **Normal:** CGG-Repeats (~5–50)
- **Prämutation:** 55–200 Repeats (Träger, meist asymptomatisch)
- **Vollmutation:** >200 Repeats → **Hypermethylierung** des FMR1-Promotors → **Gen stillgelegt** → kein FMRP-Protein
- **Phänotyp:** Geistige Behinderung (häufigste erbliche Ursache bei ♂), langes Gesicht, große Ohren, Makroorchidie
- **Vererbung:** X-chromosomal (♂ schwerer betroffen), **Antizipation** (Repeat-Expansion in Generationen)
`,
      lernziele: [
        "Das lac- und trp-Operon als Beispiele für induzierbare und reprimierbare Operons erklären können.",
        "Die Rolle von Transkriptionsfaktoren, Enhancern und Silencern bei der eukaryotischen Genregulation beschreiben können.",
        "Epigenetische Mechanismen (DNA-Methylierung, Histon-Acetylierung) und ihre Auswirkungen auf die Genexpression erläutern können.",
        "Den Unterschied zwischen miRNA und siRNA (Herkunft, Komplementarität, Wirkmechanismus) erklären können.",
        "Klinische Bedeutung gestörter Genregulation (Rett-Syndrom, Fragiles-X-Syndrom) benennen können.",
      ],
      sections: [
        {
          heading: "Prokaryotische Genregulation: Operon-Modell",
          text: "Das lac-Operon (induzierbares Operon) wird durch Allolaktose (Induktor) aktiviert: ohne Laktose blockiert der Repressor den Operator (Gene AUS), mit Laktose ist der Repressor inaktiv (Gene AN). Glukosemangel steigert cAMP → CAP-cAMP verstärkt Transkription zusätzlich. Das trp-Operon (reprimierbares Operon) funktioniert umgekehrt: Tryptophan als Corepressor aktiviert den Repressor → Gene AUS (Feedback-Hemmung).",
          merksatz:
            "lac-Operon: Induzierbares Operon! OHNE Laktose: Repressor AN → Gene AUS. MIT Laktose: Allolaktose → Repressor inaktiv → Gene AN. CAP-cAMP (Glukose ↓): Transkription ↑↑. trp-Operon: MIT Tryptophan (Corepressor) → Repressor aktiv → Gene AUS.",
        },
        {
          heading: "Eukaryotische Genregulation",
          text: "Eukaryoten regulieren Gene über Transkriptionsfaktoren: basale TFs (TFIID/TBP an TATA-Box), Aktivatoren (an Enhancer) und Repressoren (an Silencer). Enhancer können Millionen Basenpaare vom Promotor entfernt liegen und wirken via DNA-Looping (Mediator-Komplex). Kein Operon-Prinzip.",
          merksatz:
            "Enhancer können weit entfernt vom Promotor sein (bis 1 Mio. bp) → DNA-Looping bringt Enhancer + Promotor zusammen. Aktivatoren (Enhancer → Transkription ↑), Repressoren (Silencer → Transkription ↓).",
        },
        {
          heading: "Epigenetische Regulation",
          text: "DNA-Methylierung (5mC an CpG-Inseln) stillegt Gene ohne Sequenzänderung — vererbbar und reversibel. Histon-Acetylierung (HAT) lockert Chromatin → Euchromatin → Transkription ↑; Deacetylierung (HDAC) verdichtet → Heterochromatin → Transkription ↓. Beispiele: X-Inaktivierung, Genomic Imprinting.",
          merksatz:
            "DNA-Methylierung (CpG-Inseln, 5mC): Promotor methyliert → Gen AUS. HAT (Acetylierung) → Euchromatin → Transkription ↑. HDAC (Deacetylierung) → Heterochromatin → Transkription ↓.",
        },
        {
          heading: "RNA-Interferenz (RNAi): miRNA und siRNA",
          text: "miRNA (endogen, ~22 nt) bindet unvollständig an die 3'-UTR der Ziel-mRNA → Translations-Repression oder Abbau. siRNA (exogen/künstlich, ~21–23 nt) bindet vollständig komplementär → mRNA-Abbau via RISC-Komplex. Beide nutzen Dicer zur Prozessierung; miRNA zusätzlich Drosha im Kern.",
          merksatz:
            "miRNA: Endogen, ~22 nt, 3'-UTR-Bindung (nicht vollständig komplementär), Translations-Repression/Abbau. siRNA: Exogen, ~21–23 nt, vollständig komplementär, mRNA-Abbau (RISC, Argonaute), therapeutisch (Patisiran).",
        },
      ],
      merksätze: [],
      diagram: "dna-helix",
      selfTest: [
        {
          question:
            "E. coli wächst in einem Medium mit **Laktose** als einziger Kohlenstoffquelle (keine Glukose). Welche Aussage zum **lac-Operon** ist korrekt?",
          options: [
            "Der Repressor bindet an den Operator → Transkription ist blockiert, Gene sind AUS",
            "Allolaktose (aus Laktose) bindet an den Repressor → Repressor inaktiviert → Gene AN, maximale Transkription (CAP-cAMP vorhanden)",
            "Das lac-Operon ist ein reprimierbares Operon (wie trp-Operon), Laktose wirkt als Corepressor",
            "CAP-cAMP kann nicht binden, da Glukose fehlt → Transkription ist blockiert trotz Laktose",
            "Laktose hemmt die RNA-Polymerase direkt → keine Transkription möglich",
          ],
          correctIndex: 1,
          explanation:
            "**lac-Operon (induzierbares Operon):** **MIT Laktose:** **Allolaktose** (Induktor, aus Laktose) bindet an **Repressor** → Repressor **inaktiviert** → löst sich von Operator ab → **RNA-Polymerase** kann binden → **Gene AN** (lacZ, lacY, lacA). **Glukose fehlt** → **cAMP ↑** → **CAP-cAMP-Komplex** bindet an Promotor → **maximale Transkription ↑↑** (positive Regulation). **Ohne Laktose:** Repressor aktiv → Gene AUS. Wichtig: **Laktose = Induktor**, **Glukose ↓ = CAP-cAMP ↑**!",
          hints: [
            "Laktose wird zu Allolaktose umgewandelt, das als Induktor fungiert und den Repressor vom Operator löst — welcher Zustand der Gene ergibt sich daraus?",
            "Wenn Glukose fehlt, steigt cAMP — das CAP-cAMP-System verstärkt die Transkription zusätzlich (positive Regulation).",
          ],
          difficulty: 2,
          tags: ["lac-operon", "genregulation", "induktion"],
        },
        {
          question:
            "Das **trp-Operon** reguliert die Tryptophan-Biosynthese in E. coli. Welche Aussage ist korrekt?",
          options: [
            "Tryptophan ist ein Induktor → bindet an Repressor → Repressor inaktiviert → Gene AN (Biosynthese ↑)",
            "Tryptophan ist ein Corepressor → bindet an Repressor → Repressor aktiv → Gene AUS (Feedback-Hemmung)",
            "Ohne Tryptophan bindet der Repressor an den Operator → Gene AUS (keine Biosynthese)",
            "Das trp-Operon ist ein induzierbares Operon (wie lac-Operon), Tryptophan aktiviert Transkription",
            "CAP-cAMP ist erforderlich für trp-Operon-Aktivierung (wie bei lac-Operon)",
          ],
          correctIndex: 1,
          explanation:
            "**trp-Operon (reprimierbares Operon):** **MIT Tryptophan:** **Tryptophan** = **Corepressor** → bindet an **Repressor** (trpR) → **Repressor aktiv** → bindet an Operator → **Gene AUS** (keine Biosynthese nötig, **Feedback-Hemmung**: Produkt hemmt eigene Synthese). **OHNE Tryptophan:** Repressor inaktiv → Gene AN (Biosynthese ↑). **Vergleich:** **lac-Operon** = induzierbares Operon (Substrat → Gene AN), **trp-Operon** = reprimierbares Operon (Produkt → Gene AUS).",
          hints: [
            "Das trp-Operon ist ein reprimierbares Operon — die Zelle produziert Tryptophan nur, wenn es gebraucht wird (Feedback-Hemmung).",
            "Wenn Tryptophan vorhanden ist, bindet es als Corepressor an den Repressor und schaltet die Gene ab — das ist das Gegenteil des lac-Operons.",
          ],
          difficulty: 2,
          tags: ["trp-operon", "repression", "tryptophan"],
        },
        {
          question:
            "Bei Eukaryoten können **Enhancer** (verstärkende Sequenzen) die Transkription erhöhen. Welche Aussage ist korrekt?",
          options: [
            "Enhancer müssen direkt neben dem Promotor liegen (~10 bp entfernt, wie Pribnow-Box)",
            "Enhancer können weit vom Promotor entfernt sein (bis zu 1 Mio. bp) und wirken durch DNA-Looping",
            "Enhancer sind nur bei Prokaryoten vorhanden (nicht bei Eukaryoten)",
            "Enhancer hemmen die Transkription (wie Silencer), nicht erhöhen",
            "Enhancer codieren für Repressor-Proteine, die an den Operator binden",
          ],
          correctIndex: 1,
          explanation:
            "**Enhancer (Eukaryoten):** **Verstärkende Sequenzen**, an die **Aktivatoren** (Transkriptionsfaktoren) binden → **Transkription ↑**. **Wichtig:** Enhancer können **weit entfernt** vom Promotor sein (bis zu **1 Mio. bp**!) → **DNA-Looping** (Schleifenbildung) bringt Enhancer + Promotor zusammen (**Mediator-Komplex** vermittelt). **Silencer:** Unterdrückende Sequenzen → Transkription ↓ (Repressoren binden). Prokaryoten haben **keine Enhancer** (Operons statt Enhancer/Silencer).",
          hints: [
            "Enhancer können sich tausende von Basenpaaren vom Promotor entfernt befinden — wie kann ein so weit entferntes Element den Promotor dennoch beeinflussen?",
            "Das Gegenteil eines Enhancers ist ein Silencer — Enhancer erhöhen, Silencer senken die Transkription.",
          ],
          difficulty: 1,
          tags: ["enhancer", "transkriptionsfaktoren", "eukaryoten"],
        },
        {
          question:
            "**DNA-Methylierung** an CpG-Inseln (Cytosin-Guanin-Dinukleotide) ist ein wichtiger epigenetischer Mechanismus. Welche Aussage ist korrekt?",
          options: [
            "DNA-Methylierung (5-Methylcytosin, 5mC) am Promotor führt zu erhöhter Genexpression (Transkription ↑)",
            "DNA-Methylierung am Promotor führt zu Gen-Stilllegung (Transkription ↓), z.B. bei X-Inaktivierung",
            "DNA-Methylierung ist keine vererbbare Modifikation (geht bei Zellteilung verloren)",
            "DNA-Methylierung ändert die DNA-Sequenz (Mutation) und ist irreversibel",
            "DNA-Methylierung findet nur bei Prokaryoten statt (nicht bei Eukaryoten)",
          ],
          correctIndex: 1,
          explanation:
            "**DNA-Methylierung (Epigenetik):** **CpG-Inseln** (Cytosin-Guanin) → Methylierung an Cytosin (**5-Methylcytosin, 5mC**) → **Genexpression ↓** (Promotor-Methylierung → Gen **stillgelegt**). **Beispiele:** **X-Inaktivierung** (inaktiviertes X hypermethyliert, Barr-Körperchen), **Genomic Imprinting** (eltern-spezifisch, z.B. IGF2-Gen: paternal exprimiert, maternal methyliert/stillgelegt). **Wichtig:** **Vererbbar** (bleibt bei Zellteilung erhalten), **keine Sequenz-Änderung** (epigenetisch!), **reversibel** (Demethylasen).",
          hints: [
            "Methylierung an CpG-Inseln im Promotor 'verstummt' ein Gen — denke an X-Inaktivierung als klassisches Beispiel.",
            "Epigenetische Veränderungen ändern nicht die DNA-Sequenz selbst, sind aber vererbbar — wie unterscheidet sich das von einer Mutation?",
          ],
          difficulty: 2,
          tags: ["dna-methylierung", "epigenetik", "cpg-inseln"],
        },
        {
          question:
            "**Histon-Acetylierung** durch Histon-Acetyltransferasen (HAT) ist ein wichtiger epigenetischer Mechanismus. Welche Aussage ist korrekt?",
          options: [
            "Histon-Acetylierung entfernt Acetyl-Gruppen von Lysinen → DNA dichter gepackt (Heterochromatin) → Transkription ↓",
            "Histon-Acetylierung fügt Acetyl-Gruppen an Lysine → DNA lockerer (Euchromatin) → Transkription ↑",
            "Histon-Deacetylasen (HDAC) acetylieren Histone → Transkription ↑",
            "Histon-Acetylierung ist irreversibel und ändert die DNA-Sequenz (Mutation)",
            "Histon-Acetylierung findet nur bei Prokaryoten statt (Prokaryoten haben Histone)",
          ],
          correctIndex: 1,
          explanation:
            "**Histon-Acetylierung (HAT):** **Acetyl-Gruppen** (COCH₃) werden an **Lysine** (K) der Histone angefügt → Lysin-NH₃⁺ (positiv) → Lysin-NHCOCH₃ (neutral) → **DNA-Histon-Interaktion ↓** → **DNA lockerer** (**Euchromatin**) → **Transkription ↑**. **Histon-Deacetylasen (HDAC):** **Entfernen** Acetyl-Gruppen → DNA dichter (**Heterochromatin**) → **Transkription ↓**. **Wichtig:** **HAT = Acetylierung = Transkription ↑**, **HDAC = Deacetylierung = Transkription ↓**. Prokaryoten haben **keine Histone** (Nukleoid, nicht Chromatin)!",
          hints: [
            "Acetylierung neutralisiert die positive Ladung der Histone — warum führt das zu einer lockereren DNA-Verpackung?",
            "Merke: HAT (Acetyltransferase) acetyliert → Transkription hoch; HDAC (Deacetylase) deacetyliert → Transkription runter.",
          ],
          difficulty: 2,
          tags: ["histon-acetylierung", "epigenetik", "chromatinstruktur"],
        },
        {
          question:
            "**miRNA** und **siRNA** sind kleine nicht-codierende RNAs, die die Genexpression regulieren. Welche Aussage ist korrekt?",
          options: [
            "miRNA ist exogen (von außen eingebracht), siRNA ist endogen (von Zelle produziert)",
            "miRNA ist endogen (~22 nt), bindet an 3'-UTR (nicht vollständig komplementär) → Translations-Repression/Abbau",
            "siRNA bindet an 5'-Capping der mRNA → verhindert Ribosom-Bindung (Translations-Blockierung)",
            "miRNA und siRNA haben identische Wirkmechanismen und Herkunft (keine Unterschiede)",
            "siRNA wird von Drosha prozessiert (im Kern), miRNA von Dicer (im Cytoplasma)",
          ],
          correctIndex: 1,
          explanation:
            "**miRNA (microRNA):** **Endogen** (von Zelle produziert), **~22 nt**, bindet an **3'-UTR** der Ziel-mRNA (**nicht vollständig komplementär**) → **Translations-Repression** oder **mRNA-Abbau** (RISC, Argonaute). **Biogenese:** pri-miRNA → **Drosha** (Kern) → pre-miRNA → **Dicer** (Cytoplasma) → reife miRNA. **siRNA (small interfering RNA):** **Exogen** (z.B. virale dsRNA) oder künstlich, **~21–23 nt**, bindet an mRNA (**vollständig komplementär**) → **mRNA-Abbau** (RISC). **Wichtig:** **miRNA = endogen**, **siRNA = exogen**, beide via Dicer!",
          hints: [
            "miRNA stammt aus der Zelle selbst (endogen) und bindet nur partiell komplementär — siRNA kommt von außen (exogen) und bindet vollständig.",
            "Beide RNA-Typen wirken über den RISC-Komplex — der entscheidende Unterschied liegt in ihrer Herkunft und der Vollständigkeit der Komplementarität.",
          ],
          difficulty: 3,
          tags: ["mirna", "sirna", "genexpression"],
        },
      ],
    },

    // === from kap7-methoden-der-genetik ===
    {
      id: "bio-7-01",
      title: "PCR — Prinzip, Ablauf und klinische Anwendung",
      content: `## Polymerase-Kettenreaktion (PCR) — Historischer Kontext

Die **Polymerase-Kettenreaktion (PCR)** ist eine der bedeutendsten Erfindungen der modernen Biologie. Kary Mullis entwickelte das Grundprinzip 1983 während einer nächtlichen Autofahrt in Nordkalifornien — eine Erkenntnis, die ihm 1993 den Nobelpreis für Chemie einbrachte. Vor der PCR mussten Wissenschaftler große Mengen biologischen Materials für DNA-Analysen verwenden und mühsam klonieren. Die PCR ermöglichte erstmals die Vervielfältigung winziger DNA-Mengen in vitro innerhalb weniger Stunden. Heute ist die PCR aus keinem molekularbiologischen oder diagnostischen Labor mehr wegzudenken.

## Das Grundprinzip: Exponentiell, zyklisch, spezifisch

Das Kernprinzip der PCR beruht auf drei sich wiederholenden Schritten in einem sogenannten **Thermocycler** (automatisiertes Gerät zur präzisen Temperatursteuerung). Nach jedem Zyklus verdoppelt sich die Anzahl der Zielsequenz-Kopien theoretisch. Nach n Zyklen entstehen aus einem einzigen DNA-Molekül **2ⁿ Kopien** — ein exponentielles Wachstum. Nach 30 Zyklen sind bereits über eine Milliarde Kopien vorhanden (2³⁰ ≈ 1.073.741.824), nach 35 Zyklen über 34 Milliarden.

Für die PCR werden folgende Komponenten benötigt:
- **Matrizen-DNA (Template):** Die zu amplifizierende DNA (genomische DNA, cDNA, Plasmid etc.)
- **Primer (2 Stück):** Kurze einzelsträngige Oligonukleotide (18–25 Basen), die komplementär zu den Rändern des Zielbereichs sind — ein Vorwärtsprimer (forward) und ein Rückwärtsprimer (reverse)
- **dNTPs:** Desoxynukleosidtriphosphate (dATP, dTTP, dGTP, dCTP) als Bausteine
- **Taq-Polymerase:** Hitzestabile DNA-Polymerase (aus Thermus aquaticus)
- **Pufferlösung:** Mit optimaler Ionenkonzentration (Mg²⁺ ist als Cofaktor der Taq-Polymerase essenziell)

## Die drei Schritte eines PCR-Zyklus im Detail

**Schritt 1 — Denaturierung (94–95 °C, 30–60 Sekunden):**
Die doppelsträngige DNA wird durch intensive Hitze denaturiert. Die Wasserstoffbrückenbindungen zwischen den komplementären Basenpaaren (A-T: 2 Bindungen; G-C: 3 Bindungen) werden aufgebrochen. Die Doppelhelix trennt sich vollständig in zwei Einzelstränge, die als Matrizen für die Neusynthese dienen. Bei GC-reichen Regionen kann eine höhere Temperatur oder längere Denaturierungszeit nötig sein.

**Schritt 2 — Annealing/Primerhybridisierung (50–68 °C, 20–60 Sekunden):**
Die Temperatur wird auf die spezifische Anlagerungstemperatur (Ta) der Primer gesenkt. Die Primer — kurze synthetische Oligonukleotide — lagern sich durch komplementäre Basenpaarung an ihre Zielsequenzen auf den Einzelsträngen an. Die optimale Annealing-Temperatur liegt typischerweise 5 °C unterhalb des Schmelzpunkts (Tm) der Primer: Tm ≈ 4°C × (G+C) + 2°C × (A+T). Zu niedrige Ta: unspezifische Bindungen (falsche Produkte); zu hohe Ta: kein Annealing (kein Produkt).

**Schritt 3 — Elongation/Synthese (72 °C, 1 Minute pro 1 kb Produktlänge):**
Bei 72 °C — dem Temperaturoptimum der Taq-Polymerase — synthetisiert das Enzym ausgehend von den Primern neue DNA-Stränge in 5'→3'-Richtung. Die Taq-Polymerase fügt dNTPs entsprechend der Matrizensequenz an. Die Synthesegeschwindigkeit beträgt etwa 1.000 bp/Minute. Am Ende jedes Zyklus liegt die Zielsequenz als Doppelstrang vor.

## Taq-Polymerase — Das Herzstück der PCR

Die **Taq-Polymerase** (aus Thermus aquaticus, isoliert 1976 von Alice Chien) ist hitzestabil bis ca. 95 °C und übersteht daher die Denaturierungsphase unbeschadet. Sie muss nur einmal zu Beginn der PCR zugesetzt werden — der Thermocycler übernimmt alles weitere automatisch. Ohne Taq-Polymerase müsste nach jedem Zyklus manuell neue Polymerase hinzugefügt werden (wie bei frühen PCR-Versionen, die auch deshalb langsam und teuer waren).

Wichtige Eigenschaften der Taq-Polymerase:
- Hitzestabilität: bis ~95 °C stabil
- Syntheserichtung: 5'→3'
- **Keine 3'→5'-Exonuklease-Aktivität (kein Proofreading):** Fehlerrate ~10⁻⁴ bis 10⁻⁵ pro Nukleotid pro Zyklus
- Terminale Transferase-Aktivität: fügt am 3'-Ende ein A-Überhang an (wichtig für TA-Klonierung)

Für Anwendungen, die hohe Genauigkeit erfordern (z. B. Klonierung für Expression), wird die **Pfu-Polymerase** (aus Pyrococcus furiosus) bevorzugt — sie hat eine 3'→5'-Korrekturlesefunktion (Proofreading) und eine 10–20-fach niedrigere Fehlerrate, ist aber langsamer.

## Primerfunktion und -design

Primer sind die eigentlichen Spezifitätsdeterminanten der PCR. Sie definieren, welcher Abschnitt der DNA amplifiziert wird. Anforderungen an gute Primer:
- Länge 18–25 Nukleotide (Spezifität)
- GC-Gehalt 40–60%
- Keine Komplementarität zwischen Vorwärts- und Rückwärtsprimer (vermeidet Primer-Dimere)
- Keine interne Haarnadelstrukturen (Sekundärstrukturen)
- Ähnliche Tm-Werte beider Primer

## PCR-Varianten

**RT-PCR (Reverse Transkriptase-PCR):**
RNA (z. B. mRNA oder virale RNA) kann nicht direkt als PCR-Matrize dienen, da die Taq-Polymerase DNA-abhängig ist. Zunächst wird die RNA durch das Enzym **Reverse Transkriptase** (RNA-abhängige DNA-Polymerase, natürlich in Retroviren vorkommend) in komplementäre DNA (**cDNA**) umgeschrieben. Die cDNA dient dann als PCR-Matrize. Anwendung: Nachweis von RNA-Viren (HIV, SARS-CoV-2, Influenza), Genexpressionsanalyse.

**qPCR / Real-time-PCR (quantitative PCR):**
Bei der qPCR wird die Produktmenge in Echtzeit (real-time) durch Fluoreszenz gemessen. Zwei Nachweisprinzipien:
1. **SYBR Green:** Interkalierender Farbstoff, der in doppelsträngige DNA bindet und fluoresziert — einfach, aber unspezifisch (erkennt jede dsDNA, auch Primer-Dimere)
2. **TaqMan-Sonden:** Sequenzspezifische Sonden mit Fluorophor und Quencher; beim Einbau durch die Taq-Polymerase (5'→3'-Exonuklease-Aktivität) wird das Fluorophor freigesetzt — spezifisch und quantitativ

Der **CT-Wert (Cycle Threshold):** Gibt an, nach wie vielen PCR-Zyklen das Fluoreszenzsignal einen festgelegten Schwellenwert überschreitet. Je mehr Ausgangsmaterial vorhanden ist, desto früher steigt das Signal → niedrigerer CT-Wert. Typisch bei COVID-19:
- CT < 20: sehr hohe Viruslast, hochinfektiös
- CT 20–30: moderate Viruslast
- CT > 35: grenzwertig, geringe oder keine Infektiosität

**RT-qPCR** kombiniert beide: RT-PCR für RNA-Umschreibung + qPCR für Quantifizierung → Goldstandard für SARS-CoV-2-Diagnostik.

**Nested PCR:**
Zwei aufeinanderfolgende PCR-Runden mit zwei Primerpaaren: Das äußere Primerpaar amplifiziert einen großen Bereich; das innere Primerpaar liegt innerhalb des ersten Produkts und wird in der zweiten Runde verwendet. Ergebnis: massive Erhöhung von Spezifität und Sensitivität. Anwendung: Nachweis von HIV-DNA in Zellen mit sehr niedrigem Virusreservoir.

**Allel-spezifische PCR:**
Primer, die exakt auf ein bestimmtes Allel (z. B. eine Punktmutation) ausgerichtet sind. Nur bei perfekter Komplementarität am 3'-Ende des Primers erfolgt Amplifikation. Anwendung: Genotypisierung bekannter SNPs, z. B. Thrombophilie-Tests (Faktor-V-Leiden).

**Multiplex-PCR:**
Mehrere Primerpaare in einem einzigen Reaktionsansatz — gleichzeitige Amplifikation mehrerer Zielsequenzen. Anwendung: Simultane Detektion mehrerer Erreger, STR-Panel für forensische Analyse.

## Klinische Anwendungen der PCR im Überblick

- **Infektionsdiagnostik:** COVID-19, HIV-Viruslast, Tuberkulose (Xpert MTB/RIF), HPV-Genotypisierung, MRSA-Screening, Sepsis-Panel
- **Onkologie:** BCR-ABL-Transkript bei CML (Therapiemonitoring), EGFR-Mutationen bei Lungenkarzinom, BRCA1/2-Diagnostik, Mikrosatelliteninstabilität (MSI)
- **Pränatale Diagnostik:** Nachweis fetaler DNA-Varianten aus Fruchtwasser (Amniozentese) oder cfDNA (zellfreier fetaler DNA im mütterlichen Blut — nicht-invasive Pränataldiagnostik, NIPD)
- **Forensik:** STR-Amplifikation für DNA-Fingerabdruck
- **Transplantationsmedizin:** HLA-Typisierung per PCR-SSP (Sequence-Specific Primers)

## Limitationen der PCR

- **Kontaminationsgefahr:** Bereits kleinste Mengen Fremd-DNA können zu falsch-positiven Ergebnissen führen — strikte Labortrennung essenziell
- **Primerspezifität:** Fehlende Zielsequenz kann nicht nachgewiesen werden — blinde Flecken bei unbekannten Erregern
- **Taq-Fehlerrate:** Für Klonierungsanwendungen ist Proofreading-Polymerase nötig
- **PCR-Inhibitoren:** Blut, Gewebe, Stuhl enthalten Substanzen, die Taq hemmen können (z. B. Hämoglobin, Gallensalze) — Probenaufbereitung wichtig`,

      lernziele: [
        "Die drei PCR-Schritte (Denaturierung, Annealing, Elongation) mit Temperaturen, Dauer und molekularen Vorgängen präzise erklären",
        "Die exponentielle Amplifikation (2ⁿ) berechnen und die Bedeutung der Taq-Polymerase begründen",
        "RT-PCR, qPCR und RT-qPCR unterscheiden und jeweils zwei klinische Anwendungsbeispiele nennen",
        "Den CT-Wert definieren und seine klinische Bedeutung am Beispiel COVID-19 erläutern",
        "Mindestens drei weitere PCR-Varianten (Nested, Allel-spezifisch, Multiplex) erklären",
      ],

      sections: [
        {
          heading: "Taq-Polymerase — Warum ein Enzym aus einer heißen Quelle?",
          text: "Normale DNA-Polymerasen aus mesophilen Organismen (z. B. E. coli DNA-Pol I) denaturieren irreversibel bei Temperaturen über 50 °C. Die Taq-Polymerase stammt aus dem thermophilen Bakterium Thermus aquaticus, das in heißen Quellen des Yellowstone-Nationalparks bei 70–75 °C gedeiht. Sie ist bis ca. 95 °C stabil und kehrt nach der Denaturierungsphase bei 72 °C sofort in ihre aktive Konformation zurück. Dies ermöglicht die vollständige Automatisierung im Thermocycler — kein manueller Enzymaustausch zwischen den Zyklen. Ein wesentlicher Nachteil ist die fehlende Korrekturlesefunktion (keine 3'→5'-Exonuklease), was bei 30 Zyklen etwa eine Mutation pro 10 kb bedeutet. Für präzise Klonierungen wird daher Pfu-Polymerase (mit Proofreading) eingesetzt, die aber 10-fach langsamer ist.",
          merksatz:
            "Taq: hitzestabil (Thermus aquaticus, Yellowstone), kein Proofreading → Fehlerrate 10⁻⁴; Pfu: Proofreading, präziser, langsamer.",
        },
        {
          heading: "RT-PCR und COVID-19-Diagnostik: Schritt für Schritt",
          text: "SARS-CoV-2 besitzt ein positiv-strängiges RNA-Genom von ~30.000 Nukleotiden. Der Nachweis per RT-qPCR erfolgt in drei Phasen: (1) RNA-Extraktion aus Nasen-Rachen-Abstrich — Lyse der Virushülle, Bindung der RNA an Silicamembran, Waschen, Elution; (2) Reverse Transkription — die Reverse Transkriptase (RT) schreibt die virale RNA mit einem Random-Hexamer- oder Oligo-dT-Primer in cDNA um; (3) qPCR — zielspezifische Primer amplifizieren Abschnitte des E-Gens (Envelope), N-Gens (Nucleocapsid) oder ORF1ab. TaqMan-Sonden detektieren die Produkte fluoreszenzbasiert. Der CT-Wert des N-Gen-Assays korreliert mit der Infektiosität: CT < 25 → Patient hochwahrscheinlich infektiös; CT > 35 → kaum Infektiosität, möglicherweise RNA-Fragmente toter Viren. Die Sensitivität beträgt >95%, die Spezifität >99,5% — deshalb gilt RT-qPCR als Goldstandard gegenüber Antigen-Schnelltests (Sensitivität ~70–80%).",
          merksatz:
            "RT-qPCR COVID-19: RNA-Extraktion → RT (RNA→cDNA) → qPCR mit TaqMan-Sonde → CT-Wert. Niedrigerer CT = höhere Viruslast.",
        },
        {
          heading: "Mg²⁺ als essenzieller Cofaktor",
          text: "Magnesiumionen (Mg²⁺) sind unverzichtbar für die katalytische Aktivität der Taq-Polymerase. Mg²⁺ koordiniert die Triphosphatgruppe der einzubauenden dNTPs und stabilisiert den Übergangszustand der Phosphodiesterbindungsbildung. Die optimale Mg²⁺-Konzentration liegt bei 1,5–2,5 mM. Zu viel Mg²⁺: erhöht die Fehlerrate und fördert unspezifische Amplifikation. Zu wenig Mg²⁺: reduziert die Polymeraseaktivität, kein oder schwaches Produkt. EDTA (ein Chelator) hemmt die PCR durch Komplexierung von Mg²⁺ — deshalb darf EDTA nicht in PCR-Puffern enthalten sein.",
          merksatz:
            "Mg²⁺: Cofaktor der Taq-Polymerase (1,5–2,5 mM optimal). Zu viel → Fehler; zu wenig → kein Produkt.",
        },
      ],
      diagram: "dna-helix",

      merksätze: [
        "PCR-Formel: n Zyklen → 2ⁿ Kopien. 30 Zyklen ≈ 10⁹, 35 Zyklen ≈ 3,4 × 10¹⁰ Kopien.",
        "Drei Phasen: Denaturierung 94–95 °C (H-Brücken brechen) | Annealing 50–68 °C (Primer binden) | Elongation 72 °C (Taq synthetisiert).",
        "Taq-Polymerase: hitzestabil (Thermus aquaticus), kein Proofreading, 5'→3'-Synthese, terminale A-Transferase-Aktivität.",
        "Primer: 18–25 nt, flankieren Zielbereich, definieren Spezifität. Tm ≈ 4(G+C) + 2(A+T) °C.",
        "RT-PCR: RNA → (Reverse Transkriptase) → cDNA → Standard-PCR. Für RNA-Viren (HIV, SARS-CoV-2) und Genexpression.",
        "qPCR: Fluoreszenz in Echtzeit (SYBR Green = unspezifisch; TaqMan-Sonde = spezifisch). CT-Wert ∝ 1/Ausgangsmenge.",
        "RT-qPCR: Goldstandard COVID-19-Test. CT < 25 = hochinfektiös; CT > 35 = kaum infektiös.",
        "Nested PCR: 2 Primerpaare, 2 Runden → maximale Sensitivität bei geringer Template-Menge.",
        "Mg²⁺ (1,5–2,5 mM): essenzieller Cofaktor. Fehlt → keine PCR. EDTA hemmt durch Mg²⁺-Chelation.",
        "Pfu-Polymerase: Proofreading (3'→5'-Exonuklease), 10–20× niedrigere Fehlerrate als Taq, aber langsamer.",
      ],

      klinischerBezug:
        "PCR ist Goldstandard für Infektionsdiagnostik (COVID-19, HIV-VL), Genotypisierung und pränatale Diagnostik.",

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Welche Temperatur wird beim Annealing-Schritt der PCR typischerweise verwendet, und welche molekulare Reaktion findet dabei statt?",
        answer:
          "Beim Annealing wird die Temperatur auf 50–68 °C gesenkt. In diesem Schritt lagern sich die kurzen synthetischen Primer (18–25 nt Oligonukleotide) spezifisch an komplementäre Sequenzen der einzelsträngigen Ziel-DNA an (Hybridisierung durch Wasserstoffbrückenbindungen). Die genaue Temperatur hängt vom Schmelzpunkt (Tm) der Primer ab und liegt typischerweise 5 °C darunter. Zu hohe Annealing-Temperatur verhindert Primerbindung, zu niedrige führt zu unspezifischer Amplifikation falscher Sequenzen.",
      },

      selfTest: [
        {
          question:
            "Ein Wissenschaftler führt 35 PCR-Zyklen mit einem einzelnen DNA-Ausgangsmolekül durch. Wie viele DNA-Moleküle sind theoretisch nach Abschluss vorhanden?",
          options: [
            "35 Moleküle",
            "70 Moleküle",
            "Etwa 34 Milliarden Moleküle (2³⁵)",
            "Etwa eine Million Moleküle (2²⁰)",
            "Exakt 1.000 Moleküle",
          ],
          correctIndex: 2,
          explanation:
            "Nach n Zyklen entstehen 2ⁿ Kopien. 2³⁵ = 34.359.738.368 — etwa 34 Milliarden Moleküle. Die exponentielle Amplifikation (Verdopplung pro Zyklus) ist das Kernprinzip der PCR und ermöglicht den Nachweis selbst kleinster DNA-Mengen (theoretisch ab einem einzigen Molekül). Nach 30 Zyklen sind es bereits ~10⁹ Kopien.",
          hints: [
            "Die Formel lautet 2ⁿ, wobei n die Anzahl der Zyklen ist — pro Zyklus verdoppelt sich die Kopienzahl.",
            "2¹⁰ ≈ 1.000; 2²⁰ ≈ 1 Million; 2³⁰ ≈ 1 Milliarde — für 2³⁵ entsprechend weiterdenken.",
          ],
          difficulty: 2,
          tags: ["pcr", "amplifikation", "zyklen", "exponentiell"],
        },
        {
          question:
            "Warum wird bei der PCR die Taq-Polymerase anstelle einer normalen E.-coli-DNA-Polymerase verwendet?",
          options: [
            "Taq-Polymerase hat eine bessere Korrekturlesefunktion (Proofreading)",
            "Taq-Polymerase ist hitzestabil und übersteht die Denaturierungsphase bei 94–95 °C unbeschadet",
            "Taq-Polymerase kann RNA direkt als Matrize nutzen",
            "Taq-Polymerase arbeitet bei Raumtemperatur und spart Energie",
            "Taq-Polymerase synthetisiert in 3'→5'-Richtung",
          ],
          correctIndex: 1,
          explanation:
            "Die Taq-Polymerase aus Thermus aquaticus ist bis ca. 95 °C stabil. Normale Polymerasen (z. B. E.-coli-Pol I) denaturieren bei diesen Temperaturen irreversibel. Die Hitzestabilität ermöglicht die vollautomatische Durchführung im Thermocycler, ohne nach jedem Zyklus neues Enzym hinzufügen zu müssen. Taq hat kein Proofreading (höhere Fehlerrate als Pfu) und synthetisiert wie alle DNA-Polymerasen in 5'→3'-Richtung.",
          hints: [
            "Thermus aquaticus lebt in heißen Quellen des Yellowstone-Nationalparks — was folgt daraus für seine Proteine?",
            "Was passiert mit normalen Proteinen bei 95 °C? Und warum wäre das für die PCR problematisch?",
          ],
          difficulty: 1,
          tags: ["pcr", "taq-polymerase", "hitzestabilität", "thermus-aquaticus"],
        },
        {
          question:
            "Ein Labor möchte den RNA-Gehalt des SARS-CoV-2-Virus in einem Patientenabstrich quantifizieren. Welche PCR-Variante ist am besten geeignet?",
          options: [
            "Standard-PCR mit anschließender Gelelektrophorese",
            "Nested PCR mit zwei Primerpaaren",
            "RT-qPCR (Reverse Transkriptase quantitative PCR)",
            "Allel-spezifische PCR",
            "Multiplex-PCR mit fünf Primern",
          ],
          correctIndex: 2,
          explanation:
            "RT-qPCR kombiniert Reverse Transkription (RNA→cDNA, nötig da SARS-CoV-2 ein RNA-Virus ist) mit quantitativer Echtzeit-PCR (Fluoreszenzbasierte Mengenmessung). Der CT-Wert korreliert invers mit der Ausgangsmenge an Virus-RNA. Standard-PCR ist nicht quantitativ; Nested PCR erhöht Sensitivität, nicht Quantifizierbarkeit; allel-spezifische PCR dient der Genotypisierung.",
          hints: [
            "SARS-CoV-2 hat ein RNA-Genom — welcher Schritt muss vor der eigentlichen PCR stattfinden?",
            'Das "q" in qPCR steht für quantitativ, "RT" für Reverse Transkriptase — welche Methode vereint beides?',
          ],
          difficulty: 2,
          tags: ["rt-qpcr", "sars-cov-2", "covid-19", "rna-viren"],
        },
        {
          question: "In welcher Reihenfolge finden die Schritte eines PCR-Zyklus statt?",
          options: [
            "Annealing → Denaturierung → Elongation",
            "Elongation → Annealing → Denaturierung",
            "Denaturierung → Elongation → Annealing",
            "Denaturierung → Annealing → Elongation",
            "Annealing → Elongation → Denaturierung",
          ],
          correctIndex: 3,
          explanation:
            "Ein PCR-Zyklus folgt immer: (1) Denaturierung 94–95 °C — Stränge trennen; (2) Annealing 50–68 °C — Primer hybridisieren; (3) Elongation 72 °C — Taq synthetisiert neuen Strang. Diese Abfolge wird 25–40 Mal wiederholt. Zuerst muss die doppelsträngige DNA in Einzelstränge getrennt werden (Denaturierung), bevor Primer binden können (Annealing) und die Polymerase mit der Synthese beginnen kann (Elongation).",
          hints: [
            "Zuerst muss die DNA als Doppelstrang aufgetrennt werden — welcher Schritt erreicht das?",
            "Die Taq-Polymerase kann erst nach der Primerbindung ihren Job beginnen — was kommt also zuerst?",
          ],
          difficulty: 1,
          tags: ["pcr", "denaturierung", "annealing", "elongation"],
        },
        {
          question:
            "Bei der RT-PCR wird das Enzym Reverse Transkriptase verwendet. Was ist die Funktion dieses Enzyms?",
          options: [
            "Es denaturiert die RNA bei hohen Temperaturen vor der PCR",
            "Es synthetisiert RNA aus einer DNA-Matrize (Transkription)",
            "Es synthetisiert cDNA aus einer RNA-Matrize (RNA→DNA)",
            "Es repariert Einzelstrangbrüche in der Matrizen-DNA",
            "Es phosphoryliert die Primer vor dem Annealing",
          ],
          correctIndex: 2,
          explanation:
            "Reverse Transkriptase ist eine RNA-abhängige DNA-Polymerase, die natürlich in Retroviren (z. B. HIV) vorkommt. Sie schreibt RNA in komplementäre DNA (cDNA) um — also entgegen dem normalen Informationsfluss (DNA→RNA→Protein, Crick'sches Zentraldogma). Die erzeugte cDNA dient dann als Matrize für die Standard-PCR. Retrotranskription: RNA + Primer → RNA:DNA-Hybrid → einzelsträngige cDNA → doppelsträngige cDNA.",
          hints: [
            "Das Enzym stammt aus Retroviren wie HIV — was macht HIV mit seinem RNA-Genom?",
            'Das Präfix "Revers-" deutet auf die umgekehrte Richtung hin: entgegen dem normalen Informationsfluss.',
          ],
          difficulty: 2,
          tags: ["reverse-transkriptase", "rt-pcr", "cdna", "retroviren"],
        },
        {
          question: "Was ist der Unterschied zwischen SYBR Green und TaqMan-Sonden bei der qPCR?",
          options: [
            "SYBR Green ist spezifischer; TaqMan-Sonden sind unspezifisch",
            "TaqMan-Sonden erkennen jede doppelsträngige DNA; SYBR Green erkennt nur Zielsequenzen",
            "SYBR Green interkaliert in alle dsDNA (unspezifisch); TaqMan-Sonden sind sequenzspezifisch (spezifisch)",
            "Beide sind identisch — nur verschiedene Handelsnamen",
            "SYBR Green misst nur nach der PCR; TaqMan-Sonden erlauben keine Echtzeitmessung",
          ],
          correctIndex: 2,
          explanation:
            "SYBR Green ist ein Fluoreszenzfarbstoff, der unspezifisch in jede doppelsträngige DNA interkaliert — er fluoresziert bei jeder Amplifikation, also auch bei Primer-Dimeren oder unspezifischen Produkten. TaqMan-Sonden sind sequenzspezifische Oligonukleotide mit einem Fluorophor am 5'-Ende und einem Quencher am 3'-Ende. Solange die Sonde intakt ist, dämpft der Quencher die Fluoreszenz. Die 5'→3'-Exonuklease-Aktivität der Taq-Polymerase spaltet die Sonde beim Passieren → Fluorophor wird freigesetzt → Signal. Daher: TaqMan = spezifisch, für klinische Diagnostik bevorzugt.",
          hints: [
            "Was würde passieren, wenn ein unspezifisches PCR-Produkt entsteht — würde SYBR Green oder TaqMan darauf anschlagen?",
            "TaqMan-Sonden haben einen Quencher — was passiert mit dem Fluoreszenz-Signal, wenn die Sonde intakt ist vs. gespalten wird?",
          ],
          difficulty: 3,
          tags: ["qpcr", "sybr-green", "taqman", "fluoreszenz"],
        },
        {
          question:
            "Ein Patient mit Verdacht auf CML (chronische myeloische Leukämie) wird nach Therapiebeginn mit Imatinib (BCR-ABL-Tyrosinkinasehemmer) überwacht. Welche PCR-Methode wird zur Therapiekontrolle eingesetzt und was wird gemessen?",
          options: [
            "Standard-PCR zur Detektion der BCR-ABL-DNA-Mutation",
            "RT-qPCR zur Quantifizierung des BCR-ABL-Fusionstranskripts (mRNA)",
            "Nested PCR zur Sequenzierung des ABL-Kinase-Domäne-Gens",
            "Allel-spezifische PCR zur Bestimmung der Philadelphia-Chromosom-Kopienzahl",
            "Multiplex-PCR zur simultanen Detektion von BCR-ABL und JAK2",
          ],
          correctIndex: 1,
          explanation:
            'Bei CML entsteht durch t(9;22) das Philadelphia-Chromosom mit dem BCR-ABL-Fusionsgen, das eine konstitutiv aktive Tyrosinkinase kodiert. Zur Therapiekontrolle wird RT-qPCR eingesetzt: Die BCR-ABL-mRNA wird in cDNA umgeschrieben und per qPCR quantifiziert. Das Ergebnis wird als prozentualer Anteil am internationalen Standard (IS) ausgedrückt. Ein Rückgang auf ≤0,1% (MR3.0, "Major Molecular Response") gilt als gutes Therapieansprechen. Bei Therapieversagen steigt der BCR-ABL-Wert an — ein Signal für Resistenz.',
          hints: [
            "CML wird durch das BCR-ABL-Fusionsgen verursacht — was produziert dieses Gen?",
            "Zur Quantifizierung von mRNA-Transkripten ist welche PCR-Kombination nötig?",
          ],
          difficulty: 3,
          tags: ["cml", "bcr-abl", "rt-qpcr", "therapiemonitoring"],
        },
        {
          question: "Warum ist die Mg²⁺-Konzentration im PCR-Puffer kritisch für das Ergebnis?",
          options: [
            "Mg²⁺ stabilisiert die doppelsträngige DNA und verhindert Denaturierung",
            "Mg²⁺ ist Cofaktor der Taq-Polymerase; zu viel fördert unspezifische Amplifikation, zu wenig inhibiert die Polymerase",
            "Mg²⁺ puffert den pH-Wert im Reaktionsansatz",
            "Mg²⁺ verhindert die Bildung von Primer-Dimeren",
            "Mg²⁺ erhöht die Schmelztemperatur der Primer",
          ],
          correctIndex: 1,
          explanation:
            "Mg²⁺ ist ein essenzieller Cofaktor der Taq-Polymerase: Es koordiniert die Triphosphatgruppe der eingehenden dNTPs und stabilisiert den katalytischen Übergangszustand der Phosphodiesterbindungsbildung. Optimale Konzentration: 1,5–2,5 mM. Zu viel Mg²⁺ (>3 mM): erhöhte Fehlerrate, mehr unspezifische Produkte (niedrigere Stringenz). Zu wenig Mg²⁺ (<1 mM): Polymerase inaktiv, kein oder schwaches Produkt. EDTA hemmt PCR durch Mg²⁺-Chelation.",
          hints: [
            "Cofaktor bedeutet, dass das Enzym ohne ihn nicht funktioniert — was ist die Konsequenz bei zu wenig Mg²⁺?",
            "Bei zu hoher Mg²⁺-Konzentration bindet die Polymerase auch an nicht-perfekt-komplementäre Sequenzen — welcher Begriff beschreibt das?",
          ],
          difficulty: 2,
          tags: ["pcr", "magnesium", "cofaktor", "taq-polymerase"],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK bio-7-02: DNA-Sequenzierung
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "bio-7-02",
      title: "DNA-Sequenzierung — Sanger, NGS und Nanopore",
      content: `## DNA-Sequenzierung — Vom Sanger-Verfahren zur Genommedizin

Die DNA-Sequenzierung — also die Bestimmung der exakten Basenfolge (A, T, G, C) eines DNA-Abschnitts — hat die Biologie und Medizin revolutioniert. Seit dem ersten vollständig sequenzierten Menschengenom (Human Genome Project, 2003, Kosten ~3 Milliarden USD, Dauer ~13 Jahre) erlaubt die Technologie heute die Sequenzierung eines kompletten Genoms in 24 Stunden für wenige hundert Euro. Dies ist das Ergebnis mehrerer Technologiegenerationen.

## Sanger-Sequenzierung (1977, 1. Generation)

Die **Sanger-Sequenzierung** (Frederick Sanger, Nobelpreis 1980) basiert auf dem Einbau von **Didesoxynukleosidtriphosphaten (ddNTPs)** als Kettenabbrecher. Das Prinzip:

1. **Reaktionsansatz:** Template-DNA + Primer + DNA-Polymerase + dNTPs (normal) + ddNTPs (Kettenabbrecher, 4 Farben: ddATP, ddTTP, ddGTP, ddCTP in einem modernen Kapillaransatz)
2. **Elongation:** Die Polymerase synthetisiert neue Stränge; bei zufälligem Einbau eines ddNTP (fehlt die 3'-OH-Gruppe) bricht die Synthese ab — es entstehen Fragmente unterschiedlicher Länge, deren Ende jeweils ein fluoreszenzmarkiertes ddNTP ist
3. **Kapillarelektrophorese:** Die Fragmente wandern durch ein Kapillarpolymer nach Größe getrennt; ein Laser detektiert die Fluoreszenzfarbe am Ende jedes Fragments → direkte Ablesung der Sequenz

**Leistung:** Reads von 500–1.000 bp, hohe Genauigkeit (>99,9%), Kosten ~1 € pro 1.000 bp. Ideal für Einzelgen-Sequenzierung (z. B. Bestätigung einer Punktmutation, BRCA1/2-Gendiagnostik). Standardmethode für Sanger-Sequenzierungen im klinischen Labor.

## Next-Generation Sequencing (NGS, 2. Generation)

**NGS** (auch: Massively Parallel Sequencing, MPS) ermöglicht die gleichzeitige Sequenzierung von Millionen bis Milliarden DNA-Fragmenten in einem Lauf — daher der Begriff "massiv parallel".

**Illumina — Sequencing by Synthesis (SBS):**
Das marktführende NGS-Verfahren. Schritte:
1. **Library Preparation:** DNA wird fragmentiert, Adapter-Oligonukleotide werden an beide Enden ligiert
2. **Cluster-Amplifikation (Bridge PCR):** Fragmente binden an eine Flusszelle (flow cell), werden durch Brücken-PCR zu Clustern aus ~1.000 identischen Kopien amplifiziert — erhöht das Fluoreszenzsignal
3. **Sequencing by Synthesis:** Reversibel blockierte, fluoreszenzmarkierte dNTPs (je Farbe eine Base) werden eingebaut; nach jedem Einbau wird die Farbe detektiert und die Blockierung entfernt → Schritt für Schritt
4. **Bioinformatische Auswertung:** Short Reads (150–300 bp) werden auf ein Referenzgenom gemappt; Varianten werden per Variant Calling identifiziert

**Ion Torrent (Life Technologies):** Misst pH-Änderungen (H⁺-Freisetzung beim dNTP-Einbau) statt Fluoreszenz — schneller, ohne Optik, aber anfällig bei Homopolymeren.

**454-Pyrosequenzierung (Roche, historisch):** Erste kommerzielle NGS-Plattform (2005, nicht mehr aktiv). Detektiert Pyrophosphat-Freisetzung beim dNTP-Einbau über Luziferin-Reaktion.

## Nanopore-Sequenzierung (3. Generation, Oxford Nanopore)

Die **Nanopore-Sequenzierung** liest DNA-Sequenzen in Echtzeit an einem Nanoporen-Protein (MspA, CsgG). Das Prinzip:
- Ein einzelnes DNA-Molekül wird durch eine Nanopore in einer Membran gefädelt
- Beim Durchtritt jeder Base ändert sich der ionische Strom durch die Pore charakteristisch
- Ein Algorithmus (Basecaller, z. B. Guppy) übersetzt die Stromsignale in Basensequenzen

**Vorteile:** Sehr lange Reads (10 kb – 2 Mb), Echtzeitanalyse, portables Gerät (MinION, USB-Stick-Größe), kann native DNA sequenzieren (keine Amplifikation nötig) — ermöglicht auch Detektion von Methylierungen (epigenetische Markierungen).
**Nachteile:** Höhere Fehlerrate (~5–10% bei einzelnen Reads, wird durch Hochabdeckung kompensiert).

## Bioinformatische Auswertung

Jedes Sequenzierungsexperiment produziert massive Datenmengen (Exom: ~5 GB, Gesamtgenom: ~100 GB). Standardpipeline:
1. **Qualitätskontrolle:** FastQC, Trimming schlechter Basen
2. **Mapping/Alignment:** Reads werden auf das humane Referenzgenom (GRCh38) ausgerichtet (Tools: BWA, STAR für RNA)
3. **Variant Calling:** Identifizierung von SNVs (Einzelbasenaustausche), Indels, Kopienzahlvarianten (CNVs) — Tools: GATK HaplotypeCaller, DeepVariant
4. **Annotation:** Varianten werden klassifiziert (pathogen/benign/unbekannte Signifikanz — VUS) nach ClinVar, OMIM, ACMG-Kriterien

## Klinische Anwendungen

- **Exomsequenzierung (WES):** Sequenzierung aller ~22.000 Exons (~1,5% des Genoms); erste Wahl bei unklaren genetischen Syndromen — Diagnoseausbeute ~25–40% bei bisher ungelösten Fällen
- **Tumor-NGS (Liquid Biopsy):** Analyse von Tumorbiopsien auf somatische Mutationen (EGFR, KRAS, BRAF, PIK3CA) für zielgerichtete Therapien; zirkulierende Tumor-DNA (ctDNA) im Blut für nicht-invasives Monitoring
- **Pharmakogenomik:** CYP2D6-, CYP2C19-Genotypisierung zur Vorhersage von Medikamentenstoffwechsel (z. B. Codein-Metabolisierung, Clopidogrel-Aktivierung)
- **Infektionserreger-Diagnostik:** Metagenomisches Sequenzieren von Liquor/BAL bei unklarer Meningitis/Pneumonie — detektiert alle Erreger ohne vorherigen Verdacht`,

      lernziele: [
        "Das Sanger-Verfahren mit der Funktion von ddNTPs als Kettenabbrecher und der Kapillarelektrophorese erklären",
        "Den NGS-Ablauf (Illumina SBS) von der Library Preparation bis zum Variant Calling in Grundzügen darstellen",
        "Die Nanopore-Sequenzierung vom NGS in Bezug auf Read-Länge, Fehlerrate und Portabilität abgrenzen",
        "Klinische Indikationen für Exomsequenzierung, Tumor-NGS und Pharmakogenomik nennen",
        "Den Unterschied zwischen SNV, Indel und CNV als Variationstypen erläutern",
      ],

      sections: [
        {
          heading: "Sanger vs. NGS — Wann welche Methode?",
          text: "Die Sanger-Sequenzierung ist für gezielte Einzelgenanalysen nach wie vor die erste Wahl: hohe Genauigkeit, einfache Auswertung, keine aufwendige Bioinformatik. Typische Indikation: Bestätigung einer bereits bekannten Pathogenmutation (z. B. CFTR-Exon 10 bei Mukoviszidose-Verdacht) oder Sequenzierung eines kurzen Abschnitts (PCR-Produkt-Sequenzierung). NGS ist dann überlegen, wenn viele Gene gleichzeitig untersucht werden müssen: Gendiagnostikpanel (z. B. Kardiomyopathie-Panel mit 50+ Genen), Exomsequenzierung bei unklarem Syndrom, oder Tumorsequenzierung. Die Kosten für ein klinisches NGS-Panel (~500 Gene, ~200 €) sind heute deutlich günstiger als die sukzessive Sanger-Sequenzierung von 500 Einzelgenen.",
          merksatz:
            "Sanger: Einzelgen, hohe Präzision, kein Bioinformatik-Aufwand. NGS: viele Gene parallel, große Datenmenge, Bioinformatik nötig.",
        },
        {
          heading: "Variant Calling und klinische Interpretation",
          text: "NGS-Daten liefern pro Probe Tausende von Varianten — die meisten sind benigne Polymorphismen (SNPs), die in der Bevölkerung häufig sind (>1% Frequenz in gnomAD). Die klinische Herausforderung ist die Interpretation seltener Varianten. Die ACMG/AMP-Klassifikation (American College of Medical Genetics) teilt Varianten in fünf Klassen ein: (1) Pathogen, (2) Wahrscheinlich pathogen, (3) Unbekannte Signifikanz (VUS), (4) Wahrscheinlich benigne, (5) Benigne. VUS stellen klinisch eine Herausforderung dar, da weder Diagnose noch Ausschluss möglich ist. Datenbankresourcen: ClinVar (klinische Varianten), gnomAD (Populationsfrequenzen), OMIM (Phänotyp-Gen-Assoziationen).",
          merksatz:
            "ACMG-Klassifikation: Pathogen → Benigne (5 Klassen). VUS = unbekannte Signifikanz — klinisch nicht handlungsweisend ohne weitere Evidenz.",
        },
        {
          heading: "Nanopore in der Klinik — Ausbruchsdiagnostik und Direktsequenzierung",
          text: "Das Oxford Nanopore MinION-Gerät (USB-Stick-Format) hat die Point-of-Care-Sequenzierung ermöglicht. Während der COVID-19-Pandemie wurde es für das ARTIC-Protokoll genutzt: SARS-CoV-2-Genome wurden innerhalb von 6–8 Stunden sequenziert, um neue Varianten (Alpha, Delta, Omikron) frühzeitig zu identifizieren. In Ländern mit eingeschränkter Laborinfrastruktur wird MinION für Ebola-Ausbruchsdiagnostik eingesetzt. Die langen Reads der Nanopore-Technologie erlauben zudem die direkte Phasierung (Haplotyping) von Heterozygoten und die Charakterisierung struktureller Varianten, die mit Short-Read-NGS schwer zu erfassen sind.",
          merksatz:
            "Nanopore: lange Reads (>10 kb), portabel (MinION), Echtzeit, hohe Fehlerrate. Gut für Strukturvarianten, Methylierungsanalyse, Ausbruchsdiagnostik.",
        },
      ],
      diagram: "dna-helix",

      merksätze: [
        "Sanger-Sequenzierung: ddNTPs brechen die Kette ab (kein 3'-OH) → Fragmente verschiedener Länge → Kapillarelektrophorese → Sequenz.",
        "NGS (Illumina): Library-Prep → Cluster-Amplifikation (Bridge-PCR) → Sequencing by Synthesis (reversibel blockierte dNTPs) → Short Reads 150–300 bp.",
        "Exomsequenzierung (WES): nur Exons (~1,5% des Genoms) → Diagnoseausbeute ~25–40% bei unklaren genetischen Erkrankungen.",
        "Nanopore: einzelne DNA-Moleküle passieren Proteinpore → Ionenstromänderung → Basensequenz. Reads bis 2 Mb, aber ~5% Fehlerrate.",
        "Variant Calling: SNV (Einzelbase), Indel (Insertion/Deletion), CNV (Kopienzahlvariation) — alle drei klinisch relevant.",
        "ACMG-Klassen: Pathogen | Wahrsch. pathogen | VUS | Wahrsch. benigne | Benigne. VUS = unklare Bedeutung.",
        "Pharmakogenomik: CYP2D6 (Codein-Metabolismus), CYP2C19 (Clopidogrel-Aktivierung) — NGS-basierte Typisierung optimiert Dosierung.",
        "Liquid Biopsy: ctDNA im Blut — nicht-invasives Tumormonitoring, Resistenzmutationsnachweis ohne Rebiopsie.",
        "gnomAD: Datenbank mit Allelhäufigkeiten aus >140.000 Genomen — hilft bei Unterscheidung von pathogenen Varianten vs. häufigen Polymorphismen.",
        "Human Genome Project (abgeschlossen 2003): 3 Milliarden USD, 13 Jahre. Heute: komplettes Genom in 24 h für ~300 €.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie das Prinzip der Sanger-Sequenzierung. Welche Rolle spielen ddNTPs, und wie unterscheidet sich das Verfahren von der NGS (Illumina)?",
        answer:
          "Die Sanger-Sequenzierung nutzt Didesoxynukleosidtriphosphate (ddNTPs), die im Gegensatz zu normalen dNTPs keine 3'-OH-Gruppe besitzen. Wird ein ddNTP von der DNA-Polymerase eingebaut, kann keine weitere Phosphodiesterbindung geknüpft werden — die Kettensynthese bricht ab. In einem Ansatz mit allen vier ddNTPs (fluoreszenzmarkiert je Base) entstehen Fragmente jeder möglichen Länge, wobei das 3'-Ende jeweils ein farbiges ddNTP trägt. Kapillarelektrophorese trennt die Fragmente nach Größe; ein Laser liest die Farbensequenz und leitet daraus die Basensequenz ab. Reads: 500–1.000 bp, sehr hohe Genauigkeit. Im Gegensatz dazu sequenziert Illumina-NGS Millionen kurze Fragmente (150–300 bp) gleichzeitig (massiv parallel) durch reversibel blockierte Fluoreszenz-dNTPs — viel höherer Durchsatz, aber kürzere Reads und Bedarf an bioinformatischer Auswertung.",
      },

      klinischerBezug:
        "Exomsequenzierung liefert bei unklaren genetischen Syndromen in ~30% einen Diagnosebefund; Tumor-NGS ermöglicht zielgerichtete Therapiewahl.",

      selfTest: [
        {
          question:
            "Welche Funktion haben ddNTPs (Didesoxynukleosidtriphosphate) bei der Sanger-Sequenzierung?",
          options: [
            "Sie markieren den Startpunkt der DNA-Synthese fluoreszenzbasiert",
            "Sie binden an die Matrizen-DNA und verhindern die Denaturierung",
            "Sie brechen die DNA-Kettensynthese ab, da ihnen die 3'-OH-Gruppe fehlt",
            "Sie erhöhen die Spezifität der Primer-Hybridisierung",
            "Sie sind Cofaktoren der DNA-Polymerase bei hohen Temperaturen",
          ],
          correctIndex: 2,
          explanation:
            "ddNTPs (Didesoxynukleosidtriphosphate) fehlt die 3'-Hydroxylgruppe, die für die Bildung der nächsten Phosphodiesterbindung nötig ist. Wird ein ddNTP eingebaut, kann keine weitere Base angehängt werden — die Synthese bricht ab. Da alle vier ddNTPs unterschiedlich fluoreszenzmarkiert sind und zufällig eingebaut werden, entstehen Fragmente jeder möglichen Länge, wobei das 3'-Ende die Farbe der letzten Base kodiert. Kapillarelektrophorese trennt nach Länge und ein Laser liest die Farbsequenz → Basensequenz ablesbar.",
          hints: [
            'Das Präfix "Di-desoxy-" bedeutet, dass zwei Hydroxylgruppen fehlen — welche Gruppe am 3\'-Ende ist für die Kettenverlängerung essenziell?',
            "Vergleiche ddNTP mit dNTP: was ist der strukturelle Unterschied und was folgt für die Polymerase?",
          ],
          difficulty: 2,
          tags: ["sanger-sequenzierung", "ddntp", "kettenabbruch", "kapillarelektrophorese"],
        },
        {
          question:
            "Was ist der Hauptvorteil der NGS (Next-Generation Sequencing) gegenüber der Sanger-Sequenzierung?",
          options: [
            "NGS liefert längere Reads (>5.000 bp) als Sanger",
            "NGS sequenziert Millionen Fragmente gleichzeitig (massiv parallel) und ist damit kostengünstiger pro Base",
            "NGS erfordert keine Bioinformatik zur Auswertung",
            "NGS hat eine niedrigere Fehlerrate als Sanger",
            "NGS kann RNA direkt ohne Reverse Transkription sequenzieren",
          ],
          correctIndex: 1,
          explanation:
            "Der entscheidende Vorteil von NGS ist die massiv parallele Sequenzierung: Anstatt ein Fragment nach dem anderen (wie bei Sanger) werden Millionen bis Milliarden Fragmente gleichzeitig sequenziert. Dies reduziert die Kosten pro Base dramatisch. Sanger liefert tatsächlich längere Reads (500–1.000 bp) und ist präziser — NGS-Short-Reads sind nur 150–300 bp lang und erfordern umfangreiche Bioinformatik für das Mapping auf ein Referenzgenom.",
          hints: [
            'Der Name "Massively Parallel Sequencing" beschreibt den Kernvorteil — was bedeutet "parallel" in diesem Kontext?',
            "Stell dir vor, ein ganzes Menschengenom (3 Milliarden bp) müsste per Sanger sequenziert werden — wie lange im Vergleich zu NGS?",
          ],
          difficulty: 1,
          tags: ["ngs", "massiv-parallel", "sequenzierung", "illumina"],
        },
        {
          question:
            "Ein Arzt behandelt einen Patienten mit Lungenkrebs. Welche Sequenziermethode ist für die Auswahl einer zielgerichteten Therapie am sinnvollsten?",
          options: [
            "Sanger-Sequenzierung des EGFR-Gens Exon 19",
            "Exomsequenzierung aller ~22.000 Gene",
            "Tumor-NGS-Panel für klinisch relevante Onkogene (EGFR, KRAS, ALK, ROS1, BRAF)",
            "Nanopore-Sequenzierung des gesamten Genoms",
            "Northern Blot zur mRNA-Expressionsanalyse",
          ],
          correctIndex: 2,
          explanation:
            "Beim Lungenkarzinom stehen zielgerichtete Therapien zur Verfügung, deren Wirksamkeit von spezifischen Mutationen abhängt: EGFR-Mutationen → EGFR-Inhibitoren (Erlotinib, Osimertinib); ALK-Fusionen → ALK-Inhibitoren (Crizotinib); KRAS G12C → Sotorasib. Ein klinisches NGS-Panel analysiert simultan alle relevanten Genloci aus der Tumorbiopsie in einem Lauf. Sanger wäre für viele Gene zu langsam; Exomsequenzierung ist überdimensioniert und klinisch unüblich für reine Therapieentscheidung; Nanopore wird klinisch selten eingesetzt.",
          hints: [
            "Beim Lungenkarzinom gibt es viele verschiedene genomische Treibermutationen — welche Methode analysiert mehrere Gene gleichzeitig?",
            "Welche zielgerichtete Therapie funktioniert nur, wenn die passende Mutation in einem relevanten Gen nachgewiesen wurde?",
          ],
          difficulty: 2,
          tags: ["tumor-ngs", "lungenkarzinom", "egfr", "zielgerichtete-therapie"],
        },
        {
          question: "Was beschreibt die ACMG-Klassifikation für genetische Varianten?",
          options: [
            "Eine Einteilung von Genmutationen nach ihrer Lokalisation im Exon oder Intron",
            "Ein System zur Bewertung der Varianten in fünf Klassen von pathogen bis benigne (inkl. VUS)",
            "Eine Methode zur Berechnung der Allelfrequenz in der Bevölkerung",
            "Ein NGS-Qualitätsstandard für die Read-Tiefe bei klinischen Analysen",
            "Eine Klassifikation des Erbgangs (autosomal-dominant, rezessiv etc.)",
          ],
          correctIndex: 1,
          explanation:
            "Die ACMG/AMP-Klassifikation kategorisiert genetische Varianten in fünf Klassen: (1) Pathogen — kausal; (2) Wahrscheinlich pathogen; (3) VUS (Variant of Uncertain Significance) — unklare Bedeutung; (4) Wahrscheinlich benigne; (5) Benigne. VUS sind klinisch problematisch: Sie erlauben keine therapeutischen Schlussfolgerungen. Die Klassifikation basiert auf Allelfrequenz (gnomAD), funktionellen Studien, Co-Segregation und Daten aus ClinVar.",
          hints: [
            "ACMG steht für American College of Medical Genetics — welches Problem in der NGS-Diagnostik hat dieses Gremium standardisiert?",
            "VUS ist eine der fünf Klassen — was ist das klinische Problem bei einer VUS-Diagnose?",
          ],
          difficulty: 2,
          tags: ["acmg", "varianten-klassifikation", "vus", "ngs"],
        },
        {
          question: "Welches Prinzip liegt der Nanopore-Sequenzierung zugrunde?",
          options: [
            "Fluoreszenzmarkierte ddNTPs werden eingebaut und nach Farbe detektiert",
            "DNA-Fragmente binden an eine Flusszelle und werden durch Bridge-PCR amplifiziert",
            "DNA-Einzelmoleküle passieren eine Proteinpore; jede Base erzeugt eine charakteristische Änderung des Ionenstroms",
            "Pyrophosphat-Freisetzung beim dNTP-Einbau wird durch Luziferin-Reaktion detektiert",
            "pH-Änderungen (H⁺-Freisetzung) beim dNTP-Einbau werden von Ionen-sensitiven Transistoren gemessen",
          ],
          correctIndex: 2,
          explanation:
            "Die Nanopore-Sequenzierung (Oxford Nanopore Technologies) basiert auf dem Durchtritt einzelner DNA-Moleküle durch eine Proteinpore in einer Lipidmembran. Beim Durchtritt jeder Base wird der Ionenstrom durch die Pore charakteristisch verändert. Ein bioinformatischer Algorithmus (Basecaller) übersetzt die Stromsignale in Basensequenzen. Option A beschreibt Sanger; B ist Illumina; D ist 454-Pyrosequenzierung; E ist Ion Torrent. Vorteile der Nanopore: sehr lange Reads (bis 2 Mb), Echtzeit, portabel (MinION).",
          hints: [
            "Das Prinzip basiert auf elektrischen Messungen — welche physikalische Größe ändert sich beim Durchtritt einer Base durch eine winzige Pore?",
            "Nanopore = Proteinpore in einer Membran; was passiert mit dem Ionenstrom, wenn ein DNA-Strang hindurchfädelt?",
          ],
          difficulty: 3,
          tags: ["nanopore", "ionenstrom", "oxford-nanopore", "sequenzierung"],
        },
        {
          question:
            "Ein Forschungsteam führt eine Exomsequenzierung bei einem Kind mit unklarer intellektueller Behinderung durch. Welche Aussage ist korrekt?",
          options: [
            "Die Exomsequenzierung analysiert 100% der genomischen DNA",
            "Die Exomsequenzierung sequenziert nur die ~22.000 Exons (~1,5% des Genoms) und liefert bei ~25–40% der Fälle eine Diagnose",
            "Die Exomsequenzierung kann keine Kopienzahlvarianten (CNVs) detektieren",
            "Die Exomsequenzierung ist bei allen genetischen Erkrankungen der erste diagnostische Schritt",
            "Die Exomsequenzierung identifiziert ausschließlich autosomal-dominante Mutationen",
          ],
          correctIndex: 1,
          explanation:
            "Die Exomsequenzierung (WES) analysiert selektiv alle ~22.000 Exons — das entspricht nur ~1,5% des Genoms, enthält aber ~85% aller bekannten krankheitsverursachenden Mutationen. Die Diagnoseausbeute bei Kindern mit unklarer Entwicklungsstörung liegt bei ~25–40%. WES ist kein Erstlinientest (vorher: Chromosomenanalyse, spezifische Panels), aber ein wichtiges Diagnosewerkzeug für ungelöste Fälle.",
          hints: [
            '"Exom" = alle Exons — welchen Anteil am Gesamtgenom (~3 Mrd. bp) macht das aus?',
            "Wenn die meisten Krankheitsmutationen in kodierenden Regionen liegen — warum ist WES kostengünstiger als Gesamtgenomsequenzierung?",
          ],
          difficulty: 2,
          tags: ["exomsequenzierung", "wes", "genetische-erkrankung", "ngs"],
        },
        {
          question: "Was ist Pharmakogenomik und welches Enzym ist klinisch am bedeutsamsten?",
          options: [
            "Pharmakogenomik untersucht, wie Medikamente die Genexpression verändern",
            "Pharmakogenomik analysiert genetische Varianten in arzneimittel-metabolisierenden Enzymen (z. B. CYP2D6) zur personalisierten Dosierung",
            "Pharmakogenomik beschreibt die Entwicklung von Gentherapeutika",
            "Pharmakogenomik nutzt CRISPR zur Modifikation von Metabolismusgenen",
            "Pharmakogenomik ist ein Verfahren zur NGS-Qualitätskontrolle",
          ],
          correctIndex: 1,
          explanation:
            "Pharmakogenomik untersucht, wie genetische Varianten den Arzneimittelmetabolismus beeinflussen. CYP2D6 metabolisiert ~25% aller Arzneimittel. Poor Metabolizer (PM): kein aktives CYP2D6 → Codein wird nicht zu Morphin aktiviert → keine Analgesie, aber auch reduzierte Nebenwirkungen. Ultra-Rapid Metabolizer (UM): sehr schneller Abbau → Unterdosierung. CYP2C19 bestimmt Clopidogrel-Aktivierung (Prodrug → aktive Form). NGS-basierte Pharmakogenomik-Panels ermöglichen präventive Typisierung vor Erstverordnung.",
          hints: [
            "CYP2D6 metabolisiert Codein zu Morphin — was passiert bei einem Poor Metabolizer mit der Schmerztherapie?",
            "Pharmako- (Arzneimittel) + Genomik = wie beeinflusst das individuelle Genom die Medikamentenwirkung?",
          ],
          difficulty: 3,
          tags: [
            "pharmakogenomik",
            "cyp2d6",
            "arzneimittelmetabolismus",
            "personalisierte-medizin",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK bio-7-03: Gel-Elektrophorese und Blot-Techniken
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "bio-7-03",
      title: "Gel-Elektrophorese, Restriktionsenzyme und Blot-Techniken",
      content: `## Gel-Elektrophorese — Trennung von Nukleinsäuren nach Größe

Die **Agarosegel-Elektrophorese** ist eine der grundlegendsten Methoden der Molekularbiologie. Sie trennt DNA- (oder RNA-)Fragmente nach ihrer Größe in einem elektrischen Feld.

**Prinzip:**
- Agarose (aus Meeresalgen gewonnenes Polysaccharid) wird in Puffer (TAE oder TBE) aufgekocht und in eine Form gegossen; beim Abkühlen bildet sich ein poröses Gel
- DNA ist durch die Phosphatgruppen im Rückgrat negativ geladen → wandert im elektrischen Feld zur Anode (+)
- Kleine Fragmente wandern schneller durch die Poren des Gels als große → Trennung nach Größe
- Visualisierung: Ethidiumbromid (interkalierende Substanz, fluoresziert unter UV-Licht, mutagen!) oder modernere Farbstoffe (SYBR Safe, GelRed)
- **Größenmarker (Ladder):** DNA-Fragmente bekannter Größe werden parallel aufgetragen → Abschätzung der Fragmentgrößen der Proben

**Agarosekonzentration:** 0,5–1% für große Fragmente (>5 kb); 2–3% für kleine Fragmente (<500 bp). Je höher die Konzentration, desto enger die Poren → bessere Auflösung kleiner Fragmente.

## Restriktionsenzyme (Restriktionsendonukleasen)

**Restriktionsenzyme** sind bakterielle Enzyme, die doppelsträngige DNA an spezifischen Erkennungssequenzen schneiden — sie schützen Bakterien vor Fremd-DNA (Phagen). Für die Molekularbiologie sind sie unverzichtbare Werkzeuge.

Eigenschaften:
- Erkennen kurze (4–8 bp) **palindromische Sequenzen** (lesen auf beiden Strängen in 5'→3'-Richtung gleich, z. B. EcoRI: 5'-GAATTC-3')
- Schneiden: entweder **stumpf (blunt ends)** oder mit **Überhängen (sticky ends/cohesive ends)**
  - EcoRI: 5'-G↓AATTC-3' → 5'-AATT-Überhänge (kompatibel mit anderen EcoRI-geschnittenen Enden — wichtig für Ligation)
  - SmaI: 5'-CCC↓GGG-3' → stumpfe Enden
- Inkubation: 37 °C (die meisten), spezifischer Puffer essenziell
- Inaktivierung: 65 °C für 20 min (hitzeinaktivierbar) oder Phenol-Chloroform-Extraktion

**RFLP (Restriction Fragment Length Polymorphism):** Einzelne Basenveränderungen in Erkennungssequenzen führen dazu, dass ein Restriktionsenzym an dieser Stelle nicht mehr schneidet — das ergibt ein anderes Bandenmuster in der Gelelektrophorese → genetischer Marker (früher genutzt für genetische Kartierung und Diagnostik).

## Southern Blot (DNA-Nachweis)

Der **Southern Blot** (Edwin Southern, 1975) ist eine Methode zum Nachweis spezifischer DNA-Sequenzen nach Gelelektrophorese.

Ablauf:
1. **Restriktionsverdau** der genomischen DNA → Fragmente
2. **Agarosegel-Elektrophorese** → Trennung nach Größe
3. **Denaturierung** im Gel (NaOH → Einzelstränge)
4. **Transfer (Blot)** auf Nylonmembran (Kapillartransfer, Vakuum-Blot oder elektrischer Transfer)
5. **UV-Crosslinking:** DNA wird kovalent an Membran gebunden
6. **Hybridisierung** mit markierter Sonde (radioaktiv ³²P oder Fluoreszenz/Chemilumineszenz) — Sonde bindet komplementär an Zielsequenz
7. **Autoradiographie/Chemilumineszenz-Detektion:** Banden sichtbar machen

Klinische Anwendung: Früher für Diagnose von Deletion/Duplikation großer DNA-Segmente (z. B. Muskeldystrophie Duchenne); heute weitgehend durch PCR-basierte und NGS-Methoden ersetzt.

## Northern Blot (RNA-Nachweis)

Der **Northern Blot** ist analog zum Southern Blot, aber für **RNA**. Er detektiert spezifische mRNA-Sequenzen und gibt Auskunft über die Größe und Menge eines Transkripts.

Besonderheiten:
- RNA-Gel läuft unter denaturierenden Bedingungen (Formaldehyd → verhindert Sekundärstrukturen)
- Detektiert mRNA → Aussage über Genexpression auf Transkriptionsebene
- Heute weitgehend durch RT-qPCR und RNA-Seq ersetzt (sensitiver, quantitativer)

Merkhilfe: **S**outhern = **D**NA; **N**orthern = R**N**A; **W**estern = Protein (geographische Himmelsrichtungen).

## Western Blot (Proteinnachweis)

Der **Western Blot** (auch: Immunblot) ist die wichtigste Methode zum Nachweis spezifischer Proteine.

Ablauf:
1. **Proteinextraktion** aus Zellen/Gewebe (Lyse, Proteasehemmer)
2. **SDS-PAGE (Sodium Dodecyl Sulfate Polyacrylamidgel-Elektrophorese):**
   - SDS denaturiert Proteine und lädt sie gleichmäßig negativ
   - Trennung nach Molekulargewicht (kDa) — kleine Proteine wandern weiter
3. **Transfer** auf PVDF- oder Nitrozellulose-Membran
4. **Blocking:** Absättigung unspezifischer Bindungsstellen (Magermilchpulver oder BSA)
5. **Primärantikörper:** Bindet spezifisch an Zielprotein
6. **Sekundärantikörper:** Horseradish-Peroxidase (HRP)- oder Alkalische-Phosphatase-konjugiert, bindet an Primärantikörper
7. **Detektion:** ECL (Enhanced Chemiluminescence) oder Fluoreszenz → Bande bei spezifischem Molekulargewicht

**Klinisch: HIV-Western-Blot** war jahrelang der Bestätigungstest nach positivem HIV-ELISA. Banden gegen gp41, gp120, p24 werden gewertet — drei positive Banden = HIV-bestätigt. Heute wurde der Western Blot beim HIV-Bestätigungstest in vielen Ländern durch den HIV-1/2-Antikörper-Differenzierungsimmunassay ersetzt.`,

      lernziele: [
        "Das Prinzip der Agarosegel-Elektrophorese mit Wanderungsrichtung und Größentrennung erklären",
        "Restriktionsenzyme, palindromische Erkennungssequenzen und sticky/blunt ends beschreiben",
        "Southern, Northern und Western Blot in Bezug auf Zielmolekül und Ablauf unterscheiden",
        "Den HIV-Western-Blot als klinischen Bestätigungstest einordnen und interpretieren",
        "RFLP als genetischen Marker und seine frühere diagnostische Bedeutung erläutern",
      ],

      sections: [
        {
          heading: "Restriktionsenzyme und ihre Erkennungssequenzen",
          text: "Restriktionsendonukleasen sind nach Typ I, II und III klassifiziert — für die Molekularbiologie sind **Typ-II-Enzyme** von Bedeutung (schneiden innerhalb oder nahe der Erkennungssequenz, definierte Fragmente). Bekannte Beispiele: EcoRI (aus E. coli, erkennt GAATTC, 4-nt-5'-Überhang), HindIII (AAGCTT, 4-nt-5'-Überhang), BamHI (GGATCC, 4-nt-5'-Überhang), NotI (GCGGCCGC, 8-bp-Erkennungssequenz, schneidet selten → für große Fragmente). Statistische Häufigkeit einer 4-bp-Sequenz: 1/4⁴ = 1/256 bp; 6-bp: 1/4096 bp; 8-bp: 1/65.536 bp. Sticky ends erleichtern die gerichtete Klonierung: kompatible Überhänge hybridisieren spontan und werden durch DNA-Ligase kovalent verknüpft.",
          merksatz:
            "EcoRI: GAATTC (palindromisch) → 5'-AATT-Überhänge (sticky ends). Je länger die Erkennungssequenz, desto seltener der Schnitt.",
        },
        {
          heading: "SDS-PAGE und Western Blot — Proteingrößenbestimmung",
          text: 'SDS (Natriumdodecylsulfat) ist ein Detergenz, das Proteine denaturiert und proportional zur Polypeptidlänge negative Ladungen aufbringt (~1,4 g SDS/g Protein). Im Polyacrylamidgel wandern alle Proteine als negativ geladene "Stäbchen" zur Anode — die Migrationsgeschwindigkeit hängt nur vom Molekulargewicht ab. Der Molekulargewichtsmarker (Protein-Ladder) enthält Proteine bekannter Größe (z. B. 10, 15, 20, 25, 37, 50, 75, 100, 150, 250 kDa). Klinisch relevant: Bande des HIV-Hüllproteins gp120 bei ~120 kDa, Kapsidprotein p24 bei ~24 kDa. Im Western Blot werden diese Banden durch Antikörper visualisiert.',
          merksatz:
            "SDS-PAGE trennt Proteine nur nach Größe (kDa). Western Blot = SDS-PAGE + Transfer + Antikörperdetektion.",
        },
        {
          heading: "Southern/Northern/Western — Merkhilfe und Unterschiede",
          text: "Die drei klassischen Blot-Verfahren unterscheiden sich in der Zielmolekülebene: Southern Blot detektiert spezifische DNA-Sequenzen mittels markierter DNA/RNA-Sonde nach Restriktionsverdau und Gelelektrophorese. Northern Blot detektiert RNA (typischerweise mRNA) unter denaturierenden Bedingungen — liefert Aussage über Transkriptgröße und -menge. Western Blot detektiert Proteine über spezifische Antikörper nach SDS-PAGE. Merkhilfe: S→N→W (Süd→Nord→West) entspricht DNA→RNA→Protein, also dem Informationsfluss des Zentraldogmas. In modernen Labors wurden alle drei weitgehend durch PCR-basierte Methoden (für DNA/RNA) und ELISA/Proteomik (für Proteine) ersetzt — sie sind aber für das Verständnis klassischer Diagnostik und Prüfungsfragen weiterhin prüfungsrelevant.",
          merksatz:
            "S=DNA (Sonde), N=RNA, W=Protein (Antikörper). Merkhilfe: Süd-Nord-West = DNA-RNA-Protein = Zentraldogma.",
        },
      ],

      merksätze: [
        "Agarosegel: DNA negativ geladen → Anode (+). Kleine Fragmente schneller. Größenmarker gibt Referenz.",
        "Restriktionsenzyme Typ II: erkennen palindromische 4–8 bp-Sequenzen, schneiden definiert. EcoRI: GAATTC → AATT-Sticky-Ends.",
        "Sticky ends (klebrige Enden): komplementäre Einzelstrang-Überhänge erleichtern Ligation → gerichtete Klonierung.",
        "Blunt ends (stumpfe Enden): keine Überhänge. Ligation möglich, aber ineffizienter und ungerichtet.",
        "Southern Blot: DNA → Gel → Transfer → Hybridisierung mit markierter Sonde. Detektiert spezifische DNA-Sequenz.",
        "Northern Blot: RNA → denaturierendes Gel → Transfer → Sonde. Detektiert mRNA (Transkriptgröße und -menge).",
        "Western Blot: Protein → SDS-PAGE → Transfer → Primär-AK + HRP-Sekundär-AK → ECL. Detektiert spezifisches Protein.",
        "SDS-PAGE: SDS denaturiert Proteine, lädt gleichmäßig negativ → Trennung nur nach Masse (kDa).",
        "HIV-Western-Blot: Bestätigungstest nach positivem ELISA. Banden gegen gp41/gp120/p24 → positiv bei ≥2 Banden.",
        "RFLP: Punktmutation in Erkennungssequenz → Enzym schneidet nicht → anderes Bandenmuster → genetischer Marker.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Ein Arzt möchte einen HIV-positiven ELISA-Befund bestätigen. Erklären Sie das Prinzip des HIV-Western-Blots und was ein positives Ergebnis bedeutet.",
        answer:
          "Der HIV-Western-Blot ist ein Bestätigungstest nach positivem ELISA-Screening. HIV-Proteine (aus inaktivierten Viren) werden zunächst per SDS-PAGE nach Molekulargewicht getrennt und auf eine Membran transferiert. Die Patientenprobe (Serum) wird aufgetragen — enthält das Serum HIV-spezifische Antikörper (bei HIV-Infektion), binden diese an die entsprechenden Virusproteine auf der Membran. Ein enzymkonjugierter Sekundärantikörper detektiert die Bindung. Ein positiver Western Blot zeigt Banden bei spezifischen Molekulargewichten: gp120 (Hüllglykoprotein, 120 kDa), gp41 (Transmembranprotein, 41 kDa), p24 (Kapsidprotein, 24 kDa). Die WHO-Kriterien verlangen mindestens zwei positive Banden (inkl. einer Hüllbande) für ein positives Ergebnis. Heute wird in vielen Leitlinien der HIV-1/2-Differenzierungsimmunoassay bevorzugt, da er schneller und sensitiver ist.",
      },

      klinischerBezug:
        "HIV-Western-Blot war jahrzehntelang Goldstandard zur Bestätigung positiver HIV-ELISA-Befunde; heute teils durch Differenzierungsimmunoassays ersetzt.",

      selfTest: [
        {
          question: "Warum wandert DNA im Agarosegel zur Anode und nicht zur Kathode?",
          options: [
            "DNA ist positiv geladen wegen der Nukleotidbasen",
            "DNA ist negativ geladen durch die Phosphatgruppen im Rückgrat und wandert zur positiven Elektrode (Anode)",
            "DNA ist neutral geladen und wandert durch den Osmosedruck",
            "DNA wird durch das Ethidiumbromid positiv aufgeladen",
            "Die Wanderungsrichtung hängt von der DNA-Konzentration ab",
          ],
          correctIndex: 1,
          explanation:
            "DNA trägt durch die Phosphatgruppen im Zucker-Phosphat-Rückgrat bei physiologischem pH eine starke negative Gesamtladung. Im elektrischen Feld wandern negativ geladene Moleküle zur positiven Elektrode (Anode). Diese Ladung ist proportional zur DNA-Länge — kürzere Fragmente haben weniger Ladung, werden aber durch das Gel proportional weniger gehemmt und wandern daher schneller als lange Fragmente. Der Größenmarker (Ladder) mit Fragmenten bekannter Länge erlaubt die Größenbestimmung unbekannter Proben.",
          hints: [
            "Welche chemische Gruppe der DNA trägt eine negative Ladung bei pH 7?",
            "In der Elektrophorese: negative Ladung → welche Elektrode ist das Ziel?",
          ],
          difficulty: 1,
          tags: ["gelelektrophorese", "agarosegel", "phosphatgruppen", "elektrophorese"],
        },
        {
          question: "Was sind Restriktionsenzyme, und warum erkennen sie palindromische Sequenzen?",
          options: [
            "Restriktionsenzyme sind RNA-Polymerasen, die palindromische Promotoren erkennen",
            "Restriktionsenzyme sind bakterielle Endonukleasen, die doppelsträngige DNA an spezifischen palindromischen Sequenzen schneiden",
            "Restriktionsenzyme sind Ligasen, die DNA-Fragmente an palindromischen Enden verbinden",
            "Restriktionsenzyme sind Helikasen, die palindromische DNA-Bereiche öffnen",
            "Restriktionsenzyme sind Reparaturenzyme für doppelsträngige DNA-Brüche",
          ],
          correctIndex: 1,
          explanation:
            "Restriktionsendonukleasen (Typ II) sind bakterielle Enzyme, die doppelsträngige DNA an kurzen (4–8 bp) palindromischen Erkennungssequenzen schneiden. Palindromisch bedeutet: Die Sequenz liest sich auf beiden Strängen in 5'→3'-Richtung gleich (z. B. EcoRI: 5'-GAATTC-3' auf einem Strang, 5'-GAATTC-3' auf dem komplementären Gegenstrang). Diese Symmetrie ermöglicht es einem Homodimer-Enzym, beide Stränge symmetrisch zu erkennen und zu schneiden. Biologische Funktion: Schutz bakterieller DNA vor Phagen-DNA.",
          hints: [
            'Palindrom = Wort, das vorwärts und rückwärts gleich lautet (z. B. "Rentner") — auf DNA-Ebene: gleiche Sequenz auf beiden Strängen?',
            "Restriktionsenzyme schützen Bakterien — wovor?",
          ],
          difficulty: 2,
          tags: ["restriktionsenzyme", "palindrom", "erkennungssequenz", "molekularbiologie"],
        },
        {
          question:
            'Was ist der Unterschied zwischen "sticky ends" und "blunt ends" beim Restriktionsverdau?',
          options: [
            "Sticky ends entstehen bei Typ-I-Enzymen, blunt ends bei Typ-II-Enzymen",
            "Sticky ends haben einzelsträngige Überhänge (kompatibel für Ligation); blunt ends sind glatt ohne Überhänge",
            "Sticky ends entstehen nur bei GC-reichen Sequenzen; blunt ends nur bei AT-reichen Sequenzen",
            "Blunt ends sind stabiler als sticky ends und werden bevorzugt für Klonierung verwendet",
            "Sticky ends und blunt ends bezeichnen die Aktivität des Enzyms, nicht die DNA-Enden",
          ],
          correctIndex: 1,
          explanation:
            "Restriktionsenzyme schneiden unterschiedlich: EcoRI (GAATTC) schneidet versetzt (staggered cut) → 5'-AATT-Einzelstrang-Überhänge (sticky/cohesive ends). Diese Überhänge können mit komplementären Enden anderer EcoRI-geschnittener DNA hybridisieren → erleichtert Ligation erheblich (gerichtete Klonierung). SmaI (CCCGGG) schneidet genau in der Mitte → keine Überhänge (blunt ends). Blunt-end-Ligation ist weniger effizient und ungerichtet (Insert kann in beide Richtungen eingebaut werden).",
          hints: [
            'Sticky = klebrig — was macht DNA-Enden "klebrig" im molekularbiologischen Sinne?',
            "Welcher Vorteil haben einzelsträngige Überhänge für das Klonieren eines Inserts in einen Vektor?",
          ],
          difficulty: 2,
          tags: ["sticky-ends", "blunt-ends", "restriktionsverdau", "klonierung"],
        },
        {
          question:
            "Ein Student verwechselt Southern Blot, Northern Blot und Western Blot. Welche Zuordnung (Blot-Typ → detektiertes Molekül) ist korrekt?",
          options: [
            "Southern = RNA, Northern = DNA, Western = Protein",
            "Southern = Protein, Northern = RNA, Western = DNA",
            "Southern = DNA, Northern = RNA, Western = Protein",
            "Southern = DNA, Northern = Protein, Western = RNA",
            "Southern = RNA, Northern = Protein, Western = DNA",
          ],
          correctIndex: 2,
          explanation:
            'Die Merhregel: S→N→W (Süd→Nord→West) entspricht DNA→RNA→Protein, also dem Informationsfluss des Zentraldogmas. Southern Blot (Edwin Southern, 1975) detektiert spezifische DNA-Sequenzen mittels markierter Sonde. Northern Blot detektiert RNA (mRNA) — liefert Transkriptgröße und -expression. Western Blot (Immunblot) detektiert Proteine mittels spezifischer Antikörper nach SDS-PAGE. Merkhilfe: "Süden→Norden→Westen = DNA→RNA→Protein" oder "Kein Mensch Weiß" (Kein=Keimzell, Merkhilfe für Reihenfolge).',
          hints: [
            "S→N→W folgt dem Zentraldogma — DNA wird transkribiert zu RNA, die translatiert wird zu Protein.",
            "Western Blot verwendet Antikörper — Antikörper erkennen spezifisch welche Biomoleküle?",
          ],
          difficulty: 1,
          tags: ["southern-blot", "northern-blot", "western-blot", "blot-techniken"],
        },
        {
          question: "Warum wird beim SDS-PAGE-Western-Blot SDS (Natriumdodecylsulfat) verwendet?",
          options: [
            "SDS erhöht den pH-Wert, was die Proteine positiv lädt",
            "SDS denaturiert Proteine und lädt sie gleichmäßig negativ, sodass die Trennung nur nach Molekulargewicht erfolgt",
            "SDS stabilisiert native Proteinstrukturen für die Antikörperdetektion",
            "SDS dient als Fluoreszenzfarbstoff zur Proteindetektion im Gel",
            "SDS erhöht die elektrische Leitfähigkeit im Gel",
          ],
          correctIndex: 1,
          explanation:
            "SDS (Natriumdodecylsulfat) ist ein anionisches Detergenz, das Proteine denaturiert (zerstört Sekundär- und Tertiärstruktur) und proportional zur Polypeptidlänge negative Ladungen aufbringt (~1,4 g SDS/g Protein). Dadurch sind alle Proteine im Gel gleichmäßig negativ geladen — die native Ladung des Proteins spielt keine Rolle mehr. Im Polyacrylamidgel hängt die Migrationsgeschwindigkeit nur noch vom Molekulargewicht (kDa) ab: kleine Proteine migrieren schneller. Ohne SDS würden Proteine nach ihrer nativen Ladung UND Form UND Größe getrennt — nicht vergleichbar.",
          hints: [
            'Was bedeutet "denaturieren" für eine Proteinstruktur? Und warum will man das bei SDS-PAGE?',
            "Wenn alle Proteine gleich geladen sind, was ist dann die einzige Variable, die ihre Wandergeschwindigkeit bestimmt?",
          ],
          difficulty: 2,
          tags: ["sds-page", "western-blot", "proteine", "denaturierung"],
        },
        {
          question:
            "Ein Patient hat einen positiven HIV-ELISA. Welche Aussage zum HIV-Western-Blot-Bestätigungstest ist korrekt?",
          options: [
            "Der Western Blot amplifiziert HIV-DNA per PCR und weist sie elektrophoretisch nach",
            "Der Western Blot trennt HIV-Proteine per SDS-PAGE, transferiert sie auf eine Membran und detektiert HIV-spezifische Antikörper im Patientenserum",
            "Ein positiver Western Blot erfordert nur eine einzige Bande (p24) für die Diagnose",
            "Der Western Blot ist weniger spezifisch als der ELISA und dient nur zur Schnelldiagnostik",
            "Der Western Blot kann nicht zwischen HIV-1 und HIV-2 unterscheiden",
          ],
          correctIndex: 1,
          explanation:
            "Beim HIV-Western-Blot werden HIV-Proteine (aus inaktivierten Viren) zunächst per SDS-PAGE nach Molekulargewicht getrennt und auf eine Nitrozellulose-Membran transferiert. Das Patientenserum wird aufgetragen — HIV-spezifische Antikörper (bei HIV-Infektion) binden an die entsprechenden Virusproteine. Ein enzymkonjugierter Sekundärantikörper macht die Bindung durch Chemilumineszenz sichtbar. Positiv: Banden gegen gp120, gp41, p24 — mind. 2 Banden (inkl. einer Hüllbande) nach WHO-Kriterien. Heute wird oft HIV-1/2-Differenzierungsimmunoassay verwendet.",
          hints: [
            "Der Western Blot kombiniert zwei Techniken — welche Elektrophorese und was danach?",
            "Im Western Blot erkennt man HIV-Antikörper im Serum — was bedeutet das: Patient hat Antikörper gegen welches Molekül?",
          ],
          difficulty: 2,
          tags: ["hiv", "western-blot", "bestätigungstest", "diagnostik"],
        },
        {
          question:
            "Was ist RFLP (Restriction Fragment Length Polymorphism) und warum ist es genetisch informativ?",
          options: [
            "RFLP ist eine PCR-Methode zur Amplifikation repetitiver DNA-Sequenzen",
            "RFLP nutzt Restriktionsenzyme; eine Punktmutation in der Erkennungssequenz verhindert den Schnitt → unterschiedliche Bandenmuster zwischen Individuen",
            "RFLP ist ein Blot-Verfahren zum Nachweis von RNA-Expression",
            "RFLP beschreibt die Länge von PCR-Produkten bei der STR-Analyse",
            "RFLP ist eine Methode zur Bestimmung der DNA-Konzentration vor der Sequenzierung",
          ],
          correctIndex: 1,
          explanation:
            "RFLP (Restriction Fragment Length Polymorphism) nutzt die Tatsache, dass Einzelnukleotidvariationen (SNPs) in der Erkennungssequenz eines Restriktionsenzyms den Schnitt verhindern können. Wenn Individuum A die Erkennungssequenz GAATTC (EcoRI-Stelle) trägt, wird DNA in zwei Fragmente geschnitten. Individuum B hat eine Mutation (z. B. GAATCC), EcoRI schneidet nicht → ein größeres Fragment. Nach Gelelektrophorese zeigen beide Individuen unterschiedliche Bandenmuster → genetischer Marker. RFLP war ein früher Standard für genetische Kartierung und pränatale Diagnostik; heute weitgehend durch SNP-Arrays und NGS ersetzt.",
          hints: [
            "Was passiert, wenn eine Punktmutation genau in der Erkennungssequenz eines Restriktionsenzyms liegt?",
            "Verschiedene Bandenmuster nach Restriktionsverdau zwischen zwei Individuen — was kann man daraus schließen?",
          ],
          difficulty: 3,
          tags: ["rflp", "restriktionsenzyme", "genetischer-marker", "polymorphismus"],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK bio-7-04: Genetischer Fingerabdruck und DNA-Analyse
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "bio-7-04",
      title: "Genetischer Fingerabdruck und DNA-Analyse",
      content: `## Genetischer Fingerabdruck — Individuelle DNA-Identität

Der **genetische Fingerabdruck** (DNA-Fingerprinting, DNA-Profiling) ermöglicht die eindeutige Identifizierung eines Individuums anhand seines DNA-Musters. Das Verfahren basiert auf der Analyse hochvariabler, repetitiver DNA-Sequenzen im menschlichen Genom.

## STR-Analyse — das moderne Standardverfahren

**STR (Short Tandem Repeats)**, auch Mikrosatelliten genannt, sind kurze repetitive DNA-Sequenzen von 2–6 Basenpaaren Länge, die im Genom tandem wiederholt vorkommen (z. B. (CA)n, (AGAT)n). Die Anzahl der Wiederholungen ist zwischen Individuen hochvariabel (polymorph) — dies macht STRs zu idealen genetischen Markern.

**Eigenschaften von STRs:**
- Im gesamten Genom verteilt (autosomale + X-/Y-chromosomale STRs)
- Hohe Heterozygotierate (viele verschiedene Allele in der Population)
- Stabile Vererbung (Mendel), aber mit mäßiger Mutationsrate (~0,1–0,2% pro Locus pro Generation durch Polymerase-Slippage)
- Für jedes STR-Locus gibt es zwei Allele (maternales + paternales) → zwei Banden oder eine (wenn beide Allele gleich = Homozygot)

**Ablauf der STR-Analyse:**
1. **DNA-Extraktion** aus Spurenmaterial (Blut, Speichel, Haar mit Wurzel, Sperma, Knochen)
2. **PCR-Amplifikation** der STR-Loci mit fluoreszenzmarkierten Primern — typischerweise Multiplex-PCR (mehrere Loci simultan)
3. **Kapillarelektrophorese (CE):** Fluoreszenzmarkierte PCR-Produkte werden nach Fragmentlänge getrennt; jeder Locus ergibt ein oder zwei Peaks im Elektropherogramm
4. **Allel-Calling:** Software (z. B. GeneMapper) ordnet Peaks Allelnummern zu (basierend auf internem Größenstandard und Allelleitern)
5. **Profil-Vergleich:** Übereinstimmung zwischen Probe und Referenz wird statistisch ausgewertet (Match-Wahrscheinlichkeit, Random Match Probability)

## CODIS — Das forensische STR-System

In den USA verwaltet das **FBI CODIS (Combined DNA Index System)** die nationale Datenbank für forensische DNA-Profile. Ab 2017 wurden **20 STR-Kernloci** (CODIS Core Loci) verwendet — zuvor 13. Bei 20 Loci und typischen Allelfrequenzen beträgt die **Random Match Probability** (Wahrscheinlichkeit, dass eine zufällige Person das gleiche Profil hat) etwa 1 in 10²⁶ — damit ist eine individuelle Zuordnung für praktische Zwecke als absolut eindeutig anzusehen.

In Europa wird das **ESS (European Standard Set)** mit 16+2 Loci verwendet; Interpol nutzt einen gemeinsamen Kernsatz für internationale Vergleiche.

## Vaterschaftstest

Beim **Vaterschaftstest** wird die STR-Analyse genutzt, um zu bestimmen, ob ein Mann der biologische Vater eines Kindes ist. Prinzip:
- Jedes Allel des Kindes muss von einem der Elternteile stammen
- Die Mutter liefert ein Allel, der (potenzielle) Vater das andere
- Wenn ein Allel des Kindes nicht im väterlichen Profil vorhanden ist → **Ausschluss** (Nicht-Vaterschaft)
- Wenn alle Allele kompatibel sind → **Einschluss** mit einem Vaterschaftsindex (PI) → Vaterschaftswahrscheinlichkeit typischerweise >99,9%
- Statistisch: Wahrscheinlichkeit einer zufälligen Übereinstimmung bei 16 Loci <1:100.000

## Mitochondriale DNA (mtDNA) in der Forensik

Die **mitochondriale DNA** ist ein ringförmiges Molekül von ~16.569 bp mit 37 Genen. Forensisch relevant sind zwei hypervariable Regionen (HV1, HV2) in der nicht-kodierenden Kontrollregion (D-Loop).

Forensische Vorteile der mtDNA:
- **Hohe Kopienzahl:** 100–1.000 Kopien pro Zelle (vs. 2 Kopien nukleärer DNA) → Analyse selbst aus sehr altem oder degradiertem Material möglich (Knochen, Haare ohne Kern, verbrannte Reste)
- **Maternale Vererbung:** Alle Kinder einer Mutter haben identische mtDNA (maternale Linie rückwärts verfolgbar)
- **Identifikation unbekannter Leichname** via mtDNA-Vergleich mit Verwandten mütterlicherseits (z. B. Romanov-Identifikation 1991)

Nachteile:
- Keine individuelle Identifizierung möglich (alle maternalen Verwandten haben identische mtDNA)
- Niedrigere Diskriminierungskraft als STR-Analyse

## Klinische Anwendungen

- **Vaterschaftstest:** Rechtlich bindend bei akkreditierten Labors; in Deutschland §1600d BGB
- **Forensische Identifikation:** Massengräber, Katastrophenopfer (z. B. 9/11: >2.000 Identifikationen), Kriegsgefallene
- **Pränataler Vaterschaftstest (pränatal):** Seit ~2012 möglich aus mütterlichem Blut (cfDNA des Fetus) — nicht-invasiv, ab SSW 10
- **Transplantationsmedizin:** STR-Analyse zur Überprüfung der Spender-Empfänger-Chimärisierung nach Stammzelltransplantation`,

      lernziele: [
        "STR (Short Tandem Repeats) als Grundlage des genetischen Fingerabdrucks definieren und die Analyse in Schritten erklären",
        "Das CODIS-System und die statistische Aussagekraft des DNA-Profils (Random Match Probability) einordnen",
        "Den Vaterschaftstest auf Basis der STR-Analyse und das Prinzip des Ausschlusses erläutern",
        "Die forensischen Vorteile der mtDNA-Analyse (hohe Kopienzahl, maternale Vererbung) im Vergleich zur STR-Analyse darstellen",
        "Drei klinische/forensische Anwendungen der DNA-Analyse nennen",
      ],

      sections: [
        {
          heading: "STR-Polymorphismus — Warum sind Menschen verschieden?",
          text: 'Die hohe Variabilität von STR-Loci entsteht durch einen Mechanismus namens **Replication Slippage (Polymerase-Slippage)**: Während der DNA-Replikation kann die Polymerase bei repetitiven Sequenzen "ausrutschen" — der neusynthetisierte Strang bildet eine Haarnadelschleife, und beim Weitersyntetisieren entstehen mehr oder weniger Wiederholungen als im Elternstrang. Dies erklärt die hohe Mutationsrate von STRs (~0,1–0,2%/Generation/Locus). Ein Mensch mit 17 CA-Wiederholungen an Locus D3S1358 hat dort das Allel "17"; ein anderer mit 20 Wiederholungen hat "Allel 20". Die Kombination aus 20 Loci ergibt ein statistisch einzigartiges Profil. VNTR (Variable Number of Tandem Repeats, 10–100 bp) sind größer als STRs und wurden bei der ursprünglichen Alec-Jeffreys-Methode (1984) verwendet — heute durch STRs ersetzt.',
          merksatz:
            "STR: 2–6 bp-Wiederholungen, hochpolymorph. Polymerase-Slippage erklärt variable Wiederholungszahl. 20 CODIS-Loci → Profil einzigartig in 10²⁶.",
        },
        {
          heading: "Spurenanalyse — Degradierte DNA und Low-Copy-Number-PCR",
          text: "In der forensischen Praxis ist die Qualität der DNA-Spur oft limitierend. Degradierte DNA (durch UV, Feuchtigkeit, Bakterien hydrolysiert) liefert nur kurze Fragmente → ein vollständiges STR-Profil kann nicht erstellt werden (Dropout von Allelen → falsch-homozygotes Ergebnis). Lösungen: (1) **Miniaturisierte STR-Kits (mini-STRs):** Primer so nahe an den STR-Kern gesetzt, dass Amplifikate <100 bp sind — funktioniert bei degradierter DNA; (2) **Low-Copy-Number PCR (LCN):** Mehr PCR-Zyklen (34 statt 28) für Spuren mit <100 pg DNA — erhöht die Kontaminationsgefahr erheblich; (3) **SNP-Analyse:** Als Ergänzung bei sehr degradierter DNA. Bei Mischspuren (mehrere Personen) ist die Interpretation komplex — bioinformatische Deconvolution-Software wird eingesetzt.",
          merksatz:
            "Degradierte DNA → Allel-Dropout möglich. Mini-STR-Kits und erhöhte PCR-Zyklen (LCN) helfen — aber höhere Kontaminationsgefahr.",
        },
        {
          heading: "Chimärismus nach Stammzelltransplantation",
          text: "Nach allogener Stammzelltransplantation (SZT) koexistieren Spender- und Empfänger-hämatopoetische Zellen im Blut des Patienten — ein Zustand des **Chimärismus**. STR-Analyse des Bluts erlaubt die Quantifizierung: Vollchimärismus (100% Spender-DNA) vs. gemischter Chimärismus (beide Donor-Allele + Patient-Allele). Bei gemischtem Chimärismus besteht das Risiko eines Rückfalls der hämatologischen Erkrankung — der Anstieg des Empfänger-Anteils ist ein frühes Warnsignal für Relapse. Technik: STR-PCR mit Fluoreszenzmarkierung, Kapillarelektrophorese → quantitative Auswertung der Allel-Peak-Flächen (Spender-Anteil in %).",
          merksatz:
            "Post-SZT-Chimärismus-Monitoring: STR-Analyse misst Spender-Anteil in %. Zunehmender Empfänger-Anteil → Relapse-Warnsignal.",
        },
      ],

      merksätze: [
        "STR (Mikrosatelliten): 2–6 bp Wiederholungen, tandem, hochpolymorph → ideale forensische Marker.",
        "STR-Analyse: DNA-Extraktion → Multiplex-PCR (fluoreszenzmarkiert) → Kapillarelektrophorese → Allel-Calling → Profilvergleich.",
        "CODIS: 20 STR-Kernloci (USA), Random Match Probability ~1:10²⁶ → individuell eindeutig.",
        "Vaterschaftstest: alle Allele des Kindes müssen von Eltern stammen. Fehlendes väterliches Allel = Ausschluss. Übereinstimmung → PI >99,9%.",
        "mtDNA: maternale Vererbung, 100–1.000 Kopien/Zelle, gut für alte/degradierte Proben (Haare ohne Kern, Knochen).",
        "mtDNA-Nachteil: keine individuelle Identifikation — alle maternalen Verwandten haben identische Sequenz.",
        "Allel-Dropout: bei degradierter DNA fehlt ein Allel im Profil → scheinbare Homozygotie → Fehlinterpretation möglich.",
        "Polymerase-Slippage: Mechanismus für STR-Mutation (~0,1–0,2%/Locus/Generation) → Entstehung neuer Allele.",
        "Chimärismus nach SZT: STR-PCR quantifiziert Spender- vs. Empfänger-Anteil → Relapse-Früherkennung.",
        "VNTR (Variable Number Tandem Repeats): 10–100 bp, historische Basis des DNA-Fingerprints (Jeffreys 1984) — heute durch STR ersetzt.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Ein Forensiker analysiert eine Blutprobe vom Tatort. Erklären Sie das Prinzip der STR-Analyse und warum 20 STR-Loci für eine eindeutige Identifikation ausreichen.",
        answer:
          "STRs (Short Tandem Repeats) sind 2–6 bp-Wiederholungseinheiten, die im Genom variabel viele Male hintereinander wiederholt vorliegen. Die Anzahl der Wiederholungen (Allel) ist zwischen Individuen hochpolymorph. Jedes Individuum trägt an jedem STR-Locus zwei Allele (mütterlich + väterlich). Per Multiplex-PCR mit fluoreszenzmarkierten Primern werden 20 CODIS-Loci gleichzeitig amplifikiert; Kapillarelektrophorese trennt die PCR-Produkte nach Fragmentlänge, und Software erkennt die Allele als Peaks im Elektropherogramm. Die Random Match Probability bei 20 unabhängigen Loci ergibt sich als Produkt der Einzelwahrscheinlichkeiten: Wenn ein Locus eine Übereinstimmungswahrscheinlichkeit von 1:100 hat, ergibt das Produkt über 20 Loci etwa 1:10⁴⁰ — in der Praxis ~1:10²⁶ wegen tatsächlicher Allelhäufigkeiten. Das bedeutet, dass statistisch kein zweites Individuum auf der Erde dasselbe Profil trägt (Erdbevölkerung: ~8 × 10⁹). Der Vergleich mit einer Referenzprobe (z. B. Wangenabstrich vom Verdächtigen) erlaubt eine Identifikation mit richterlich anerkannter Sicherheit.",
      },

      klinischerBezug:
        "Genetischer Fingerabdruck per STR-Analyse ist Standard in Forensik, Vaterschaftstests und post-SZT-Chimärismus-Monitoring.",

      selfTest: [
        {
          question:
            "Was sind STRs (Short Tandem Repeats) und warum sind sie als forensische Marker geeignet?",
          options: [
            "STRs sind lange repetitive Sequenzen (>100 bp), die in allen Menschen identisch sind",
            "STRs sind kurze (2–6 bp) tandemartig wiederholte Sequenzen, die zwischen Individuen in der Anzahl der Wiederholungen variieren",
            "STRs sind Einzelnukleotidvariationen (SNPs) an bekannten Genorten",
            "STRs sind RNA-Sequenzen, die aus Mitochondrien stammen",
            "STRs sind Restriktions-Fragmentlängen-Polymorphismen im Exom",
          ],
          correctIndex: 1,
          explanation:
            "STRs (Short Tandem Repeats, Mikrosatelliten) sind 2–6 bp-Einheiten, die in direkter Aufeinanderfolge (tandem) im Genom wiederholt vorkommen, z. B. (CA)₁₅ oder (AGAT)₁₂. Die Anzahl der Wiederholungen an einem Locus ist zwischen Individuen hochvariabel (polymorph) — ein Locus kann in der Population 5–40 verschiedene Allele haben. Diese Polymorphie entsteht durch Polymerase-Slippage bei der Replikation. Jeder Mensch trägt an jedem STR-Locus zwei Allele (maternal + paternal). Die Kombination aus 20 unabhängigen Loci ergibt ein statistisch einzigartiges Profil.",
          hints: [
            "Short = kurz, Tandem = direkte Aufeinanderfolge, Repeat = Wiederholung — was wiederholt sich hier?",
            "Warum eignen sich Variable (polymorphe) Sequenzen besser für die Identifikation als konstante Sequenzen?",
          ],
          difficulty: 1,
          tags: ["str", "mikrosatelliten", "forensik", "dna-fingerabdruck"],
        },
        {
          question: "Welche Schritte umfasst die STR-Analyse für ein forensisches DNA-Profil?",
          options: [
            "RNA-Extraktion → Reverse Transkription → Northern Blot → Autoradiographie",
            "DNA-Extraktion → Multiplex-PCR → Kapillarelektrophorese → Allel-Calling",
            "DNA-Extraktion → Restriktionsverdau → Southern Blot → Sequenzierung",
            "Proteinextraktion → SDS-PAGE → Western Blot → Antikörperdetektion",
            "DNA-Extraktion → Sanger-Sequenzierung → Bioinformatik → Datenbankvergleich",
          ],
          correctIndex: 1,
          explanation:
            "Die forensische STR-Analyse läuft in vier Hauptschritten ab: (1) DNA-Extraktion aus Spurenmaterial (Blut, Speichel, Haare mit Wurzel, Sperma) — Lyse, Aufreinigung; (2) Multiplex-PCR: gleichzeitige Amplifikation aller 20 STR-Loci mit fluoreszenzmarkierten Primern in einer Reaktion; (3) Kapillarelektrophorese: Fragmente nach Länge getrennt, Fluoreszenz detektiert; (4) Allel-Calling: Software ordnet Peaks Allelnummern zu. Das Profil wird mit einer Referenzprobe (z. B. Wangenabstrich) verglichen. Die Random Match Probability bei 20 CODIS-Loci beträgt ~1:10²⁶.",
          hints: [
            "STR-Analyse beginnt mit dem Spurenmaterial — welches Molekül wird analysiert?",
            "Multiplex-PCR bedeutet: viele Primer-Paare in einem Ansatz — welche Loci werden gleichzeitig amplifiziert?",
          ],
          difficulty: 1,
          tags: ["str-analyse", "forensik", "pcr", "kapillarelektrophorese"],
        },
        {
          question:
            "Bei einem Vaterschaftstest zeigt das Kind an Locus D3S1358 die Allele 15 und 18. Die Mutter hat die Allele 15 und 17. Der vermeintliche Vater hat die Allele 14 und 16. Was ist die Schlussfolgerung?",
          options: [
            "Die Vaterschaft ist bewiesen — Allel 15 des Kindes kommt von der Mutter",
            "Der Mann kann der Vater sein — Allel 18 könnte von ihm stammen",
            "Der Mann ist ausgeschlossen — Allel 18 des Kindes kann weder von der Mutter (15/17) noch vom Vater (14/16) stammen",
            "Das Ergebnis ist nicht aussagekräftig — weitere Loci müssen analysiert werden",
            "Allel 18 könnte durch eine Mutation entstanden sein — Vaterschaft nicht ausgeschlossen",
          ],
          correctIndex: 2,
          explanation:
            "Bei der Vaterschaftsanalyse muss jedes Allel des Kindes von einem Elternteil stammen. Das Kind hat Allele 15 und 18. Allel 15 kommt von der Mutter (sie trägt 15). Allel 18 muss vom Vater kommen — aber der vermeintliche Vater trägt nur die Allele 14 und 16, nicht 18. Daher ist ein Ausschluss an diesem Locus gegeben: Der Mann kann biologisch nicht der Vater sein. Ein Ausschluss an nur einem Locus reicht für den definitiven Nicht-Vaterschaft-Befund (Ausschlusswahrscheinlichkeit = 100%, wenn Mutation ausgeschlossen).",
          hints: [
            "Das Kind hat Allele 15 + 18. Mutter: 15 + 17 → welches Allel gibt die Mutter weiter?",
            "Das übrige Allel (18) muss vom Vater kommen — hat der vermeintliche Vater Allel 18?",
          ],
          difficulty: 2,
          tags: ["vaterschaftstest", "str", "erbgang", "forensik"],
        },
        {
          question:
            "Warum ist mitochondriale DNA (mtDNA) für forensische Analysen bei alten oder degradierten Proben besonders geeignet?",
          options: [
            "mtDNA hat eine niedrigere Mutationsrate als nukleäre DNA und ist daher stabiler",
            "mtDNA liegt in 100–1.000 Kopien pro Zelle vor (vs. 2 Kopien nukleärer DNA) und bleibt daher auch in alten Proben detektierbar",
            "mtDNA ist doppelsträngig und daher stabiler als einzelsträngige nukleäre DNA",
            "mtDNA ist größer als nukleäre DNA und enthält mehr forensische Informationen",
            "mtDNA wird paternal vererbt und ermöglicht daher die Vaterschaftsanalyse",
          ],
          correctIndex: 1,
          explanation:
            "Mitochondrien enthalten 100–1.000 mtDNA-Kopien pro Zelle, während jede Zelle nur 2 Kopien nukleärer DNA hat. Bei alten, degradierten Proben (Knochen, Haare ohne Kern, verbrannte Reste) ist nukleäre DNA oft zu stark abgebaut für die STR-Analyse — aber einzelne mtDNA-Kopien sind noch nachweisbar. Forensisch analysierte Regionen: HV1 und HV2 im D-Loop (nicht-kodierende Kontrollregion). Nachteil: mtDNA wird maternal vererbt → alle Kinder einer Mutter haben identische mtDNA → keine individuelle Identifikation, aber Abgleich mit maternalen Verwandten möglich.",
          hints: [
            "Vergleich: nukleäre DNA: 2 Kopien/Zelle. mtDNA: wie viele Kopien/Zelle?",
            "Was passiert mit nukleärer DNA in einem 1.000 Jahre alten Knochen im Vergleich zu mtDNA?",
          ],
          difficulty: 2,
          tags: ["mtdna", "forensik", "mitochondrien", "degradierte-dna"],
        },
        {
          question:
            "Was ist Polymerase-Slippage und welche Konsequenz hat dieser Mechanismus für STR-Loci?",
          options: [
            "Polymerase-Slippage ist ein Fehler bei der Transkription, der zu falschem mRNA-Spleißen führt",
            "Polymerase-Slippage beschreibt das Ausrutschen der Polymerase bei repetitiven Sequenzen → Entstehung neuer Allele mit veränderter Wiederholungszahl",
            "Polymerase-Slippage ist die Ursache für Frameshift-Mutationen durch ddNTP-Einbau",
            "Polymerase-Slippage bezeichnet den Verlust der Polymerase-Aktivität bei extremen Temperaturen",
            "Polymerase-Slippage ist eine Reparaturmethode für Doppelstrangbrüche",
          ],
          correctIndex: 1,
          explanation:
            'Bei der DNA-Replikation kann die Polymerase an repetitiven Sequenzen (STRs) "ausrutschen" — der neusynthetisierte Strang bildet eine Haarnadelschleife mit einem der Wiederholungsabschnitte. Beim Weitersyntetisieren entstehen dann mehr Wiederholungen (Insertion) oder weniger (Deletion) als im Elternstrang. Dieser Mechanismus erklärt, warum STR-Loci eine hohe Mutationsrate haben (~0,1–0,2% pro Locus pro Generation) und warum so viele verschiedene Allele in der Population existieren. Diese Variabilität macht STRs zu idealen genetischen Markern.',
          hints: [
            'Stell dir vor, die Polymerase "liest" (CA)₁₅ — bei der 8. Wiederholung rutscht sie zurück zur 5. — was passiert bei der weiteren Synthese?',
            "Was folgt aus der hohen Mutationsrate der STRs für die Anzahl verschiedener Allele in der Bevölkerung?",
          ],
          difficulty: 3,
          tags: ["polymerase-slippage", "str", "mutation", "mikrosatelliten"],
        },
        {
          question:
            "Wie wird STR-Analyse zur Überwachung nach allogener Stammzelltransplantation (SZT) eingesetzt?",
          options: [
            "STR-Analyse identifiziert den HLA-Typ des Spenders für die Kompatibilitätsprüfung vor SZT",
            "STR-Analyse quantifiziert nach SZT den Anteil der Spender-DNA im Blut des Empfängers (Chimärismus-Monitoring)",
            "STR-Analyse detektiert Mutationen im Spendermark, die Transplantatabstoßung verursachen könnten",
            "STR-Analyse ersetzt die PCR für den Nachweis minimaler Resterkrankung (MRD) nach SZT",
            "STR-Analyse wird nur bei Abstoßungsreaktionen eingesetzt, nicht zur Routineüberwachung",
          ],
          correctIndex: 1,
          explanation:
            "Nach allogener SZT ko-existieren Spender- und Empfänger-hämatopoetische Zellen im Blut — ein Zustand des Chimärismus. Da Spender und Empfänger unterschiedliche STR-Profile haben, lässt sich per Kapillarelektrophorese der prozentuale Anteil der Spender-DNA quantifizieren. Vollchimärismus (100% Spender) ist das Therapieziel. Zunehmender Empfänger-Anteil (gemischter Chimärismus) ist ein Frühzeichen für Relapse der hämatologischen Grunderkrankung → frühzeitige therapeutische Intervention (z. B. Donor-Lymphozyten-Infusion) möglich.",
          hints: [
            "Chimärismus = Mischung von Spender- und Empfänger-Zellen. Wie erkennt man, welche Zellen vom Spender stammen?",
            "Wenn der Empfänger-Anteil wieder zunimmt, was könnte das bedeuten für die Grunderkrankung?",
          ],
          difficulty: 3,
          tags: ["str", "stammzelltransplantation", "chimerismus", "transplantationsmedizin"],
        },
        {
          question:
            "Was ist der Nachteil der mtDNA-Analyse im Vergleich zur STR-Analyse für forensische Identifikation?",
          options: [
            "mtDNA ist instabiler als nukleäre STR-DNA in alten Proben",
            "mtDNA kann keine individuelle Identifikation leisten, da alle maternalen Verwandten identische mtDNA tragen",
            "mtDNA-Analyse ist teurer als STR-Analyse und daher nicht routinemäßig einsetzbar",
            "mtDNA hat keine hypervariablen Regionen und ist daher nicht polymorph",
            "mtDNA wird paternal vererbt und eignet sich daher nicht für Verwandtschaftsanalysen",
          ],
          correctIndex: 1,
          explanation:
            "Der entscheidende Nachteil der mtDNA-Analyse ist die maternale Vererbung: Alle Kinder einer Mutter haben identische mtDNA (da Mitochondrien aus dem Zytoplasma der Eizelle stammen, nicht aus Sperma). Das bedeutet: Geschwister, Mutter, Großmutter und alle anderen maternalen Verwandten tragen identische mtDNA-Sequenzen in HV1/HV2. Eine mtDNA-Übereinstimmung kann nicht beweisen, wer von diesen Verwandten die Probe hinterlassen hat. STR-Analyse (nukleäre DNA) ist daher für individuelle Identifikation überlegen — mtDNA ist nur für den Ausschluss oder die Eingrenzung auf eine maternale Linie geeignet.",
          hints: [
            "mtDNA wird maternal vererbt — was bedeutet das für Geschwister mit derselben Mutter?",
            "Wenn Bruder, Schwester und Mutter identische mtDNA haben — was kann man bei einem Fund mit mtDNA-Übereinstimmung sagen?",
          ],
          difficulty: 2,
          tags: ["mtdna", "str", "forensik", "identifikation"],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK bio-7-05: Gentechnik — Klonierung und Vektoren
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "bio-7-05",
      title: "Gentechnik — Klonierung, Vektoren und rekombinante Proteine",
      content: `## Molekulare Klonierung — Ein Gen in einem Wirtsorganismus

**Molekulare Klonierung** bezeichnet die Einbringung eines DNA-Fragments (Zielgen) in einen Vektor (Träger-DNA), der das Fragment in einem Wirtsorganismus (meist E. coli) vermehrt und exprimiert. Ziel: unbegrenzte Kopienproduktion eines Gens oder seines Proteins.

## Klonierungsschritte im Detail

**1. Isolierung des Inserts (Zielgen):**
- Genomische DNA: Restriktionsverdau → spezifisches Fragment
- cDNA: RT-PCR aus mRNA → fügt nur Exons ein (kein Introns — wichtig für Expression in Prokaryoten, da kein Spleißen möglich)
- Synthetisch: chemische DNA-Synthese (für kurze Gene oder optimierte Kodons)

**2. Vektorvorbereitung:**
- Plasmid wird mit demselben Restriktionsenzym geschnitten → kompatible Sticky Ends
- Optional: **Dephosphorylierung** des Vektors (Alkalische Phosphatase entfernt 5'-Phosphat) → verhindert Religation des Vektors ohne Insert

**3. Ligation:**
- **DNA-Ligase** (T4-Ligase) verbindet Insert und Vektor durch Phosphodiesterbindungen — benötigt ATP
- Gerichtete Klonierung: zwei verschiedene Enzyme schneiden Insert und Vektor → Insert kann nur in einer Orientierung eingebaut werden

**4. Transformation:**
- Einbringen der rekombinanten Plasmide in kompetente Wirtszellen (E. coli)
- Chemische Kompetenz: CaCl₂-Behandlung + Hitzeschock (42 °C, 90 sec) — macht Zellmembran vorübergehend permeabel
- Elektroporation: kurze elektrische Pulse öffnen Membranporen — effizienter für bestimmte Organismen

**5. Selektion rekombinanter Klone:**
- Platten mit **Antibiotikum** (z. B. Ampicillin) → nur Zellen mit Plasmid (das Resistenzgen trägt) überleben
- **Blau-Weiß-Selektion:** Das Plasmid-lacZ-Gen (kodiert α-Fragment der β-Galaktosidase) ist durch die **Multiple Cloning Site (MCS)** unterbrochen → Insert in MCS → lacZ zerstört → keine β-Galaktosidase → **weiße Kolonien** = rekombinant; leeres Plasmid (kein Insert) → lacZ intakt → Blau-Substrat (X-Gal) wird gespalten → **blaue Kolonien** = kein Insert

**6. Screening und Verifikation:**
- Kolonie-PCR: direkter PCR-Nachweis des Inserts aus Kolonie
- Restriktionsverdau des isolierten Plasmids → erwartetete Bandenmuster
- Sanger-Sequenzierung des Inserts → exakte Sequenzverifikation

## Expressionsvektoren und rekombinante Proteine

Für die **Proteinexpression** benötigt der Vektor zusätzliche Elemente:
- **Starker Promotor** (z. B. T7-Promotor in E. coli, CMV-Promotor in Säugerzellen)
- **Ribosom-Bindestelle (RBS/Shine-Dalgarno)** für bakterielle Expression
- **His-Tag, GST-Tag, FLAG-Tag:** kurze Aminosäuresequenzen am N- oder C-Terminus des Proteins → Affinitätschromatographie zur Aufreinigung
- **Terminationssequenz**

**Insulin-Produktion per rekombinanter DNA-Technologie:**
Vor 1982 wurde Insulin aus Schweine-/Rinderpankreas gewonnen. Heute wird **rekombinantes Humaninsulin** in E. coli oder Hefe (Saccharomyces cerevisiae) produziert:
1. Synthetisches Insulin-Gen (codon-optimiert für E. coli) → Klonierung in Expressionsvektor
2. Expression in E. coli als Fusionsprotein
3. Aufreinigung, In-vitro-Faltung, Spaltung → aktives Insulin

Weitere rekombinante Proteine in der Medizin: Erythropoetin (EPO, Nierenversagen/Anämie), Wachstumshormon (GH), Faktor VIII (Hämophilie A), monoklonale Antikörper (Trastuzumab, Rituximab), Impfstoffantigene (HBsAg für Hepatitis-B-Impfstoff).

## Genbibliotheken

- **Genomische Bibliothek (gDNA-Library):** Gesamtes Genom fragmentiert und in Vektoren kloniert → enthält alle DNA-Sequenzen inkl. Introns, Promotoren, nicht-kodierende Bereiche
- **cDNA-Bibliothek:** Aus mRNA per RT umgeschriebene cDNA in Vektoren → repräsentiert nur die exprimierten Gene eines bestimmten Zelltyps zum Zeitpunkt der Extraktion → kein Introns, kein nicht-transkribierten Bereiche`,

      lernziele: [
        "Die Klonierungsschritte (Restriktionsverdau, Ligation, Transformation, Selektion) in der richtigen Reihenfolge und mit molekularen Details beschreiben",
        "Das Prinzip der Blau-Weiß-Selektion erklären und wissen, was weiße vs. blaue Kolonien bedeuten",
        "Plasmide, Phagen-Vektoren, BAC und YAC in Bezug auf Kapazität und Anwendung unterscheiden",
        "Mindestens drei rekombinante Proteine (Insulin, EPO, monoklonale AK) und ihre medizinische Bedeutung nennen",
        "Den Unterschied zwischen genomischer Bibliothek und cDNA-Bibliothek erläutern",
      ],

      sections: [
        {
          heading: "Blau-Weiß-Selektion — Elegante Identifikation rekombinanter Klone",
          text: "Das pUC-Plasmid-System (und viele moderne Klonierungsvektoren) nutzt das lacZ-α-Komplementationssystem. Das Plasmid trägt ein α-Fragment des lacZ-Gens (β-Galaktosidase). Die Multiple Cloning Site (MCS) liegt mitten im lacZ-α-Fragment. Wenn ein Insert kloniert wird, unterbricht es das Leseraster → kein funktionelles α-Fragment → keine β-Galaktosidase → keine Spaltung des farblosen Substrats X-Gal (5-Bromo-4-Chloro-3-Indolyl-β-D-Galactopyranoside) → weiße Kolonie. Kein Insert (Plasmid religation): lacZ-α intakt → β-Galaktosidase aktiv → X-Gal wird zu blauem Indolderivat gespalten → blaue Kolonie. Fazit: Weiß = potenziell rekombinant (muss durch PCR/Sequenzierung bestätigt werden). Die Platten enthalten IPTG (Induktor von lacZ-Transkription) + X-Gal + Ampicillin.",
          merksatz:
            "Blau-Weiß: Blau = kein Insert (lacZ intakt), Weiß = Insert vorhanden (lacZ unterbrochen). IPTG + X-Gal + Ampicillin auf Platte.",
        },
        {
          heading: "Kompetente Zellen und Transformationseffizienz",
          text: 'Nicht alle E.-coli-Zellen nehmen Plasmide auf — sie müssen zunächst "kompetent" gemacht werden. Chemische Kompetenz: CaCl₂-Behandlung in der Kälte verändert die Membranstruktur; ein kurzer Hitzeschock (42 °C, 45–90 s) öffnet transiente Poren → Plasmid tritt ein. Typische Transformationseffizienz: 10⁵–10⁸ cfu/µg Plasmid-DNA. Elektroporation (2,5 kV, 25 µF) ist effizienter (~10⁸–10¹⁰ cfu/µg) — wichtig für große Plasmide oder schwierig zu transformierende Stämme. Nach der Transformation werden Zellen in flüssigem Medium 1 h bei 37 °C inkubiert (Recovery) — das Ampicillin-Resistenzgen muss exprimiert werden, bevor Ampicillin-Platten verwendet werden.',
          merksatz:
            "Kompetenz: CaCl₂ + Hitzeschock (chem.) oder Elektroporation. Recovery-Schritt vor Selektion wichtig.",
        },
        {
          heading: "Rekombinante Antikörper — Von der Hybridomtechnologie zum Display",
          text: "Monoklonale Antikörper (mAbs) werden heute überwiegend gentechnisch hergestellt. Traditionell: Hybridom-Technologie (Köhler & Milstein 1975, Nobelpreis 1984) — Fusion immunisierter Maus-B-Zellen mit Myelomzellen → immortale Hybridome. Heute: Phagen-Display und Hefe-Display erlauben vollständig humane mAbs ohne Immunisierung — Antikörper-Gene werden aus einer Bibliothek selektiert. Rekombinante Antikörperformate: vollständiger IgG (150 kDa) für therapeutische mAbs (z. B. Trastuzumab/Herceptin gegen HER2+), scFv (25 kDa, single chain variable fragment) für diagnostische Anwendungen, BiTE (bispezifische T-Zell-Engager, z. B. Blinatumomab für ALL). Produktion: CHO-Zellen (Chinese Hamster Ovary) für komplexe Glykosylierung, E. coli für nicht-glykosylierte Fragmente.",
          merksatz:
            "mAbs: Hybridom (Maus) → chimäre/humanisierte → vollhumane (Phagen-Display). CHO-Zellen für glykosylierte Therapeutika.",
        },
        {
          heading: "Vektoren — Übersicht",
          text: "Klonierungsvektoren unterscheiden sich in ihrer Kapazität (maximale Insertgröße), dem Wirtsorganismus und besonderen Eigenschaften. Die Wahl des Vektors richtet sich nach der Größe des zu klonierenden DNA-Fragments.",
          table: {
            headers: ["Vektor", "Kapazität", "Wirt", "Besonderheit"],
            rows: [
              ["Plasmid", "~15 kb", "E. coli", "Standard-Klonierung, einfach"],
              ["Phage λ", "20–25 kb", "E. coli", "Phagen-Infektion, hohe Effizienz"],
              ["Cosmid", "40–50 kb", "E. coli", "Phagen-Hülle + Plasmid-Replikation"],
              [
                "BAC (Bacterial Artificial Chromosome)",
                "100–300 kb",
                "E. coli",
                "Für große genomische Fragmente",
              ],
              [
                "YAC (Yeast Artificial Chromosome)",
                "200–2.000 kb",
                "Hefe",
                "Für sehr große Inserts (Chromosomensegmente)",
              ],
              [
                "Expressionsvektor",
                "variabel",
                "E. coli/Hefe/CHO",
                "Promotor, RBS, Tags für Proteinproduktion",
              ],
            ],
          },
        },
      ],
      diagram: "dna-helix",

      merksätze: [
        "Klonierungsschritte: Restriktionsverdau → Ligation (T4-Ligase) → Transformation → Selektion (Antibiotikum) → Screening.",
        "Insert: gerichtete Klonierung mit 2 verschiedenen Enzymen → Insert nur in eine Richtung einbaubar.",
        "Blau-Weiß-Selektion: weiß = Insert (lacZ unterbrochen); blau = kein Insert (lacZ intakt). X-Gal + IPTG + Ampicillin.",
        "Plasmid: bis ~15 kb. BAC: bis 300 kb. YAC: bis 2 Mb. Je größer das Insert, desto speziellerer Vektor.",
        "Expressionsvektor: Promotor + RBS + Insert + Terminationssequenz + selektierbarer Marker + Replikationsursprung.",
        "Rekombinantes Insulin (E. coli/Hefe): seit 1982. Vorher aus Schwein/Rind. Codon-Optimierung für E. coli.",
        "cDNA-Bibliothek: nur exprimierte Gene (mRNA→cDNA), kein Introns. Genomische Bibliothek: gesamtes Genom inkl. Introns.",
        "His-Tag (6× His): Affinitätschromatographie über Ni²⁺-Harz → schnelle Aufreinigung des Zielproteins.",
        "Dephosphorylierung des Vektors (CIP/SAP): entfernt 5'-Phosphat → verhindert Religation ohne Insert.",
        "Monoklonale Antikörper: Hybridomtechnologie (Köhler/Milstein 1975) → heute Phagen-Display für humane mAbs. CHO-Zellen für Produktion.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie, wie rekombinantes Humaninsulin hergestellt wird. Welche molekularbiologischen Schritte sind nötig, und warum wird cDNA statt genomischer DNA verwendet?",
        answer:
          "Die Herstellung von rekombinantem Humaninsulin umfasst folgende Schritte: (1) Gewinnung der Insulin-cDNA: Aus Pankreas-B-Zellen wird mRNA der Insulinvorstufe (Proinsulin) isoliert; Reverse Transkriptase schreibt die mRNA in cDNA um. Alternativ wird das Insulingen synthetisch nach der bekannten Aminosäuresequenz synthetisiert (codon-optimiert für E. coli). cDNA (nicht genomische DNA) wird verwendet, da E. coli keine Introns spleißen kann — genomische DNA enthält Introns, die nicht entfernt würden, was zu einem nicht-funktionellen Protein führte. (2) Klonierung in Expressionsvektor: Die Insulin-cDNA wird in einen E.-coli-Expressionsvektor mit starkem Promotor (T7 oder tac), Ribosom-Bindestelle und Antibiotikaresistenz-Gen kloniert. (3) Transformation und Expression: Kompetente E.-coli-Zellen werden transformiert; nach Selektion auf Ampicillin-Platten werden Kolonien in Fermentern vermehrt; Insulinsynthese wird durch IPTG induziert. (4) Aufreinigung: Zelllyse → Inclusion Bodies auflösen → In-vitro-Faltung → chromatographische Aufreinigung → Aktivierung (Abspaltung des C-Peptids). Das Produkt (Humulin, Novolin) ist seit 1982 klinisch zugelassen.",
      },

      klinischerBezug:
        "Rekombinante Proteine (Insulin, EPO, Wachstumshormon, monoklonale Antikörper) sind Grundlage moderner Pharmakotherapie seit den 1980ern.",

      selfTest: [
        {
          question: "Was ist die Funktion der DNA-Ligase (T4-Ligase) beim Klonieren?",
          options: [
            "Sie schneidet das Insert an spezifischen Erkennungssequenzen",
            "Sie phosphoryliert die Primer vor dem Annealing im PCR-Schritt",
            "Sie knüpft kovalente Phosphodiesterbindungen zwischen Insert und Vektor (Ligation)",
            "Sie denaturiert die Plasmid-DNA vor der Transformation",
            "Sie inaktiviert das Restriktionsenzym nach dem Verdau",
          ],
          correctIndex: 2,
          explanation:
            "DNA-Ligase (T4-Ligase, aus Phage T4) katalysiert die Bildung von Phosphodiesterbindungen zwischen dem 3'-OH-Ende eines DNA-Strangs und dem 5'-Phosphat-Ende des nächsten Strangs — sie \"näht\" die DNA-Enden zusammen. Bei der Klonierung verbindet sie das Insert mit dem linearisierten Vektor. Die Reaktion benötigt ATP als Energielieferant und funktioniert am besten bei 16 °C über Nacht (long ligation) oder 25 °C für 1 h (quick ligation). Sticky ends erleichtern die Ligation durch spontane Hybridisierung der komplementären Überhänge vor dem enzymatischen Versiegeln.",
          hints: [
            "Liga- (lat.: binden) — was bindet die Ligase?",
            "Nach dem Restriktionsverdau entstehen DNA-Enden — was muss passieren, damit Insert und Vektor permanent verbunden sind?",
          ],
          difficulty: 1,
          tags: ["dna-ligase", "klonierung", "phosphodiesterbindung", "gentechnik"],
        },
        {
          question:
            "Was bedeutet das Ergebnis einer blauen Kolonie bei der Blau-Weiß-Selektion auf Ampicillin-X-Gal-IPTG-Platten?",
          options: [
            "Die Kolonie trägt ein rekombinantes Plasmid mit erfolgreich kloniertem Insert",
            "Die Kolonie trägt ein Plasmid ohne Insert — das lacZ-Gen ist intakt und spaltet X-Gal zu blauem Indolderivat",
            "Die Kolonie enthält kein Plasmid und ist daher für die Klonierung ungeeignet",
            "Die Kolonie hat eine Mutation im Ampicillin-Resistenzgen und ist resistent",
            "Die blaue Farbe entsteht durch Ethidiumbromid-Fluoreszenz im Agarosegel",
          ],
          correctIndex: 1,
          explanation:
            "Bei der Blau-Weiß-Selektion gilt: blaue Kolonie = kein Insert. Das Plasmid trägt das lacZ-α-Fragment in der Multiple Cloning Site (MCS). Wenn kein Insert kloniert wird (leeres Plasmid), bleibt das lacZ-α intakt → β-Galaktosidase wird gebildet → das farblose Substrat X-Gal wird zu einem blauen Indolderivat gespalten → blaue Kolonie. Weiße Kolonie = Insert unterbrochen das lacZ-Gen → kein funktionelles Enzym → kein Farbumschlag → weiße Kolonie = potenziell rekombinant (muss per PCR/Sequenzierung bestätigt werden). Alle Kolonien auf Ampicillin-Platten tragen ein Plasmid (Resistenzgen).",
          hints: [
            "lacZ kodiert β-Galaktosidase, die X-Gal blau spaltet — wenn ein Insert ins lacZ eingebaut ist, was passiert mit dem Enzym?",
            "Blau = lacZ funktioniert. Weiß = lacZ unterbrochen. Was unterbricht lacZ?",
          ],
          difficulty: 2,
          tags: ["blau-weiß-selektion", "lacz", "klonierung", "selektion"],
        },
        {
          question:
            "Warum wird für die Expression eines humanen Proteins in E. coli cDNA (nicht genomische DNA) verwendet?",
          options: [
            "cDNA ist stabiler als genomische DNA und wird vom Plasmid besser repliziert",
            "E. coli besitzt kein Spleißsystem — genomische DNA enthält Introns, die nicht entfernt würden → kein funktionelles Protein; cDNA enthält nur Exons",
            "cDNA hat einen höheren GC-Gehalt als genomische DNA und wird daher effizienter transkribiert",
            "Genomische DNA ist zu groß für Plasmid-Vektoren; cDNA ist kürzer",
            "E. coli erkennt nur cDNA als Matrize, da es keine RNA-Polymerase II besitzt",
          ],
          correctIndex: 1,
          explanation:
            "In eukaryotischen Zellen werden Primärtranskripte (prä-mRNA) durch Spleißen prozessiert: Introns werden entfernt, Exons zu reifer mRNA zusammengefügt. E. coli besitzt keinen Spleißapparat (keine Spleißosomen). Wenn genomische DNA eines humanen Gens in E. coli exprimiert wird, bleibt die Intron-RNA im Transkript → Ribosomen lesen Intron-Sequenzen mit → vorzeitige Stoppcodons oder Frameshift → kein funktionelles Protein. cDNA wird per Reverse Transkription aus reifer mRNA hergestellt → enthält nur Exons → direkte Translation in E. coli möglich. Zusätzlich: Codon-Optimierung (Anpassung an E.-coli-Kodon-Verwendung) erhöht die Expressionseffizienz.",
          hints: [
            "Was ist der Unterschied zwischen prä-mRNA (vor dem Spleißen) und reifer mRNA (nach dem Spleißen)?",
            "cDNA wird aus reifer mRNA gewonnen — enthält sie Introns?",
          ],
          difficulty: 2,
          tags: ["cdna", "e-coli", "expression", "introns"],
        },
        {
          question:
            "Was ist der Unterschied zwischen einer genomischen DNA-Bibliothek und einer cDNA-Bibliothek?",
          options: [
            "Die genomische Bibliothek enthält nur Exons; die cDNA-Bibliothek enthält Exons und Introns",
            "Die genomische Bibliothek enthält das gesamte Genom (inkl. Introns, Promotoren, nicht-kodierende Bereiche); die cDNA-Bibliothek enthält nur die zu einem Zeitpunkt exprimierten Gene (ohne Introns)",
            "Die cDNA-Bibliothek ist für prokaryotische Organismen, die genomische Bibliothek für eukaryotische",
            'Beide Bibliotheken sind identisch — "genomisch" und "cDNA" sind Synonyme',
            "Die cDNA-Bibliothek enthält alle Gene eines Organismus, die genomische nur die regulatorischen Sequenzen",
          ],
          correctIndex: 1,
          explanation:
            "Genomische DNA-Bibliothek: Gesamtes Genom wird fragmentiert und in Vektoren (BAC, YAC, Phagen) kloniert → repräsentiert alle DNA-Sequenzen, inkl. Introns, Promotoren, Enhancer, Repetitive Elemente, nicht-kodierende Regionen. Vollständig für alle Zellen eines Organismus. cDNA-Bibliothek: Aus mRNA per Reverse Transkriptase gewonnene cDNA → repräsentiert nur die Gene, die in einem bestimmten Zelltyp zu einem bestimmten Zeitpunkt exprimiert werden → keine Introns, keine nicht-transkribierten Sequenzen. Eine Leberzell-cDNA-Bibliothek enthält andere Gene als eine Gehirn-cDNA-Bibliothek.",
          hints: [
            "cDNA wird aus mRNA hergestellt — welche Gene sind in einer Leberzelle zu einem bestimmten Zeitpunkt in mRNA vorhanden?",
            "Enthält die genomische Bibliothek alle Gene (auch nicht-exprimierte)? Enthält die cDNA-Bibliothek auch nicht-exprimierte Gene?",
          ],
          difficulty: 2,
          tags: ["cdna-bibliothek", "genomische-bibliothek", "gentechnik", "mrna"],
        },
        {
          question:
            "Welcher Vektor ist für das Klonieren von DNA-Fragmenten >300 kb am geeignetsten?",
          options: [
            "Standard-Plasmid (bis ~15 kb)",
            "Lambda-Phage (bis 25 kb)",
            "Cosmid (bis 50 kb)",
            "BAC (Bacterial Artificial Chromosome, bis 300 kb)",
            "YAC (Yeast Artificial Chromosome, bis 2.000 kb)",
          ],
          correctIndex: 4,
          explanation:
            "Für sehr große DNA-Inserts (>300 kb) sind YACs (Yeast Artificial Chromosomes) die geeignetsten Vektoren. YACs wurden für das Human Genome Project verwendet und können Inserts von 200–2.000 kb aufnehmen. Sie werden in Hefe (Saccharomyces cerevisiae) repliziert und enthalten Telomere, Zentromere und einen Replikationsursprung — also alle notwendigen chromosomalen Elemente. BACs (Bacterial Artificial Chromosomes) können bis ~300 kb aufnehmen und sind stabilere Alternativen für das mittlere Größensegment. Normale Plasmide kollabieren bei großen Inserts — Replikation wird ineffizient.",
          hints: [
            "Wenn Plasmide ~15 kb, Phagen ~25 kb, Cosmide ~50 kb, BAC ~300 kb — was kommt für >300 kb?",
            "YAC = Yeast Artificial Chromosome. In welchem Organismus wird es repliziert, und was ermöglicht dieses System?",
          ],
          difficulty: 2,
          tags: ["yac", "klonierungsvektoren", "bac", "grosse-fragmente"],
        },
        {
          question:
            "Welches Selektionsprinzip wird bei der Klonierung mit Antibiotikaresistenz-Genen genutzt?",
          options: [
            "Alle Zellen sterben ab — nur das Antibiotikum selektiert überlebende Klone",
            "Nur Zellen, die das Plasmid mit dem Resistenzgen aufgenommen haben, überleben auf Antibiotikum-Platten",
            "Das Antibiotikum aktiviert die Plasmid-Replikation in kompetenten Zellen",
            "Das Resistenzgen im Plasmid inaktiviert das Antibiotikum im Medium direkt",
            "Alle transformierten Zellen werden durch das Antibiotikum markiert und können isoliert werden",
          ],
          correctIndex: 1,
          explanation:
            "Klonierungsvektoren (z. B. pUC19) tragen ein Antibiotikaresistenz-Gen (z. B. Ampicillin-Resistenz, β-Laktamase). Nach der Transformation werden die Zellen auf Agarplatten mit dem entsprechenden Antibiotikum ausgestrichen. Zellen ohne Plasmid (nicht transformiert) → haben kein Resistenzgen → sterben ab. Zellen mit Plasmid → exprimieren β-Laktamase → inaktivieren Ampicillin → überleben → bilden Kolonien. Dieses einfache Prinzip stellt sicher, dass jede gewachsene Kolonie ein Plasmid enthält. Ob das Plasmid ein Insert trägt, wird dann durch Blau-Weiß-Selektion oder PCR bestimmt.",
          hints: [
            "Warum sterben nicht-transformierte Zellen auf Ampicillin-Platten ab?",
            "Was codiert das Resistenzgen — und welche Reaktion rettet die Zelle vor dem Antibiotikum?",
          ],
          difficulty: 1,
          tags: ["antibiotikaresistenz", "selektion", "klonierung", "ampicillin"],
        },
        {
          question:
            "Welches rekombinante Protein war das erste, das in E. coli produziert und klinisch zugelassen wurde?",
          options: [
            "Erythropoetin (EPO) — 1989",
            "Wachstumshormon (GH) — 1985",
            "Humaninsulin (Humulin) — 1982",
            "Faktor VIII für Hämophilie A — 1984",
            "Hepatitis-B-Oberflächenantigen (HBsAg) für Impfstoff — 1986",
          ],
          correctIndex: 2,
          explanation:
            "Humaninsulin (Humulin, von Eli Lilly/Genentech) war das erste rekombinante DNA-Therapeutikum, das 1982 von der FDA zugelassen wurde. Das Insulingen wurde synthetisch hergestellt (codon-optimiert für E. coli) und in E. coli exprimiert. Dies beendete die Abhängigkeit von tierischem Insulin (Schwein/Rind) und war ein Meilenstein der Biotechnologie. Wachstumshormon wurde 1985 zugelassen; EPO 1989 (aus CHO-Zellen, da Glykosylierung nötig). Hepatitis-B-Impfstoff (rekombinantes HBsAg aus Hefe) wurde 1986 zugelassen.",
          hints: [
            "Vor den 1980er Jahren wurde Insulin aus Schweinen und Rindern gewonnen — wann änderte sich das?",
            "Rekombinant, E. coli, 1982 — welches lebensnotwendige Hormon für Diabetiker wird damit produziert?",
          ],
          difficulty: 1,
          tags: ["insulin", "rekombinante-proteine", "e-coli", "gentechnik"],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK bio-7-06: Genomeditierung — CRISPR-Cas9 und GVO
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "bio-7-06",
      title: "Genomeditierung — CRISPR-Cas9, Gentherapie und GVO",
      content: `## CRISPR-Cas9 — Molekulare Schere mit Navigationssystem

**CRISPR-Cas9** (Clustered Regularly Interspaced Short Palindromic Repeats — CRISPR-associated protein 9) ist das revolutionärste Werkzeug der Genomeditierung. Jennifer Doudna und Emmanuelle Charpentier erhielten 2020 den Nobelpreis für Chemie für seine Entwicklung. Das System stammt ursprünglich aus dem bakteriellen Immunsystem: Bakterien speichern kurze DNA-Sequenzen von früheren Phagen-Infektionen im CRISPR-Locus; bei erneuter Infektion erkennt das Cas9-Protein mit Guide-RNA die Phagen-DNA und schneidet sie.

## Molekularer Mechanismus von CRISPR-Cas9

**Komponenten:**
- **Cas9-Protein:** Eine Endonuklease aus Streptococcus pyogenes (SpCas9, 1.368 Aminosäuren) mit zwei Nuklease-Domänen (RuvC und HNH) — jede schneidet einen DNA-Strang → doppelsträngiger Bruch (DSB)
- **Guide-RNA (gRNA):** Eine synthetische RNA, bestehend aus:
  - **crRNA-Anteil (20 nt):** komplementär zur Zielsequenz in der genomischen DNA (Spacer)
  - **tracrRNA-Anteil (scaffold):** bindet an Cas9 und formt die korrekte 3D-Struktur
  - In der Praxis als **single guide RNA (sgRNA)** fusioniert

**Targetfindung:**
1. Die sgRNA durchsucht das Genom nach komplementären Sequenzen
2. Cas9 erkennt zunächst ein **PAM-Motiv** (Protospacer Adjacent Motif): für SpCas9 ist das 5'-NGG-3' (direkt 3' der Zielsequenz auf dem nicht-komplementären Strang)
3. Bei PAM-Erkennung öffnet Cas9 die DNA-Doppelhelix und prüft Komplementarität der sgRNA zu den 20 nt 5' des PAM — bei perfekter Hybridisierung: Konformationsänderung von Cas9 → Aktivierung beider Nuklease-Domänen → doppelsträngiger Schnitt 3 bp vor dem PAM

**Spezifität:** Die 20 nt-Spacersequenz + PAM-Anforderung schränkt mögliche Off-Target-Schnitte ein, ist aber nicht perfekt — Off-Target-Schnitte an ähnlichen Sequenzen im Genom sind eine klinische Sorge.

## DNA-Reparaturwege nach dem Schnitt

Nach dem DSB wird die Zelle repariert — zwei konkurrierende Wege:

**1. NHEJ (Non-Homologous End Joining):**
- Dominanter Weg in nicht-teilenden Zellen und in G1-Phase
- Ligiert die DNA-Enden direkt, ohne Vorlage
- Fehleranfällig: **Insertionen/Deletionen (Indels)** von 1–20 bp entstehen
- Konsequenz: **Frameshift-Mutation → vorzeitiges Stoppcodon → Knockout des Gens**
- Anwendung: gezielter Genknockout (Loss-of-function) für Forschung und Therapie

**2. HDR (Homology-Directed Repair):**
- Aktiv hauptsächlich in S/G2-Phase (nach DNA-Replikation), wenn Schwesterchromatid als Vorlage dient
- Wenn ein **Reparaturtemplate (Donor-DNA)** mit homologen Flanken bereitgestellt wird, kopiert die Zelle die gewünschte Sequenz
- Ermöglicht **präzise Genkorrekturen** (Einzelbasenänderung, Insertionen eines Transgens)
- Nachteil: ineffizienter als NHEJ in den meisten Zelltypen (besonders post-mitotische Zellen)
- Anwendung: therapeutische Genkorrekturen (z. B. Sichelzellanämie)

**Base Editing und Prime Editing (neuere Varianten):**
- **Base Editing:** Nickase-Cas9 (nur ein Strang wird geschnitten) + Deaminase → direkte Umwandlung C→T oder A→G ohne DSB — weniger genotoxisch
- **Prime Editing (2019, David Liu):** Cas9-Nickase + Reverse Transkriptase + pegRNA → schreibt neue Sequenz direkt in Zielort → präziseste CRISPR-Variante bisher

## Gentherapie — Gene in Patienten bringen

**Ex-vivo-Gentherapie:**
1. Zellen werden dem Patienten entnommen (z. B. hämatopoetische Stammzellen aus Knochenmark)
2. Genetische Modifikation in vitro (CRISPR, lentiviraler Vektor)
3. Qualitätsprüfung
4. Reinfusion in den Patienten (nach konditionierender Chemotherapie)
- Vorteile: Kontrolle über bearbeitete Zellen, sichere Qualitätsprüfung möglich
- Beispiel: **CTX001/Casgevy (Vertex/CRISPR Therapeutics):** CRISPR-basierte Ex-vivo-Therapie für Sichelzellanämie und β-Thalassämie; reaktiviert fetales Hämoglobin (HbF) durch Knockout des BCL11A-Repressors in HSCs; FDA-Zulassung Dezember 2023

**In-vivo-Gentherapie:**
- Therapeutische Gene direkt in den Patienten (systemisch oder lokal) eingebracht
- Vektoren: **AAV (Adeno-assoziiertes Virus):** nicht-integrierend, geringes Immunogenitätsprofil; verschiedene Serotypen (AAV9 für ZNS/Muskel, AAV8 für Leber); **lentiviraler Vektor:** integriert ins Wirtsgenom (dauerhaft) — Insertionsmutagenese-Risiko; **Lipid-Nanopartikel (LNP):** für mRNA/siRNA-Delivery (Beispiel: Alnylam-Therapien, Onpattro für Transthyretin-Amyloidose)
- Beispiele: Zolgensma (Spinale Muskelatrophie, AAV9-SMN1); Luxturna (Netzhautdystrophie, AAV2-RPE65); Hemgenix (Hämophilie B, AAV5-FIX)

## Ethische Aspekte der Genomeditierung

**Somatische Gentherapie:** Modifikation nicht-reproduktiver Zellen → Änderungen werden nicht an Nachkommen vererbt → ethisch weitgehend akzeptiert (als erweitertes Arzneimittel betrachtet)

**Keimbahn-Editierung:** Modifikation von Keimzellen (Spermien, Eizellen) oder frühen Embryonen → Änderungen werden an alle Nachkommen vererbt → International (bis auf wenige Ausnahmen) verboten
- 2018 sorgte der chinesische Wissenschaftler He Jiankui für internationalen Skandal: Er editierte menschliche Embryonen per CRISPR (CCR5-Gen für HIV-Resistenz) → weltweite Verurteilung, Strafverfolgung

**Off-Target-Effekte:** CRISPR schneidet manchmal an ähnlichen (nicht identischen) Genomstellen → potenzielle Onkogenaktivierung, chromosomale Umbauten; Screening per GUIDE-seq, CIRCLE-seq

**CAR-T-Zellen:** Chimeric Antigen Receptor T-Zellen — Patienteigene T-Zellen werden per Lentivirus/CRISPR mit einem künstlichen Rezeptor ausgestattet (z. B. CD19-CAR → Angriff auf B-Zell-Leukämien). CRISPR wird verwendet, um zusätzliche Checkpoints zu entfernen (PD-1-Knockout) und allogene "universal" CAR-T-Zellen ohne GvH-Reaktion zu erzeugen.`,

      lernziele: [
        "Den CRISPR-Cas9-Mechanismus (sgRNA, PAM, DSB) molekular erklären",
        "NHEJ und HDR als Reparaturwege unterscheiden und ihre Konsequenzen (Knockout vs. Korrektur) ableiten",
        "Ex-vivo- und In-vivo-Gentherapie mit Beispielen (Casgevy, Zolgensma) unterscheiden",
        "AAV, lentivirale Vektoren und Lipid-Nanopartikel als Vehikel der Gentherapie vergleichen",
        "Ethische Aspekte der somatischen vs. Keimbahn-Gentherapie darlegen und die He-Jiankui-Kontroverse einordnen",
      ],

      sections: [
        {
          heading: "CRISPR-Cas9 vs. klassische Genomeditierungswerkzeuge",
          text: 'Vor CRISPR-Cas9 gab es zwei Hauptwerkzeuge für gezielte Genomschnitte: **Zinkfinger-Nukleasen (ZFNs)** und **TALENs (Transcription Activator-Like Effector Nucleases)**. Beide erfordern für jede neue Zielsequenz die aufwendige Proteintechnik — neue Zinkfinger- oder TALE-Domänen müssen maßgeschneidert kloniert werden (Wochen bis Monate). CRISPR-Cas9 revolutionierte dies: Die Spezifität wird allein durch die 20-nt-sgRNA-Sequenz kodiert — eine neue Zielsequenz erfordert lediglich die Synthese einer neuen sgRNA (Tage, Kosten ~200 €). Dieses "Plug-and-play"-Prinzip macht CRISPR extrem zugänglich. Einschränkungen: SpCas9 benötigt das PAM-Motiv NGG — für Targets ohne passendes PAM wurden alternative Cas-Proteine (Cas12a/Cpf1 mit TTTV-PAM, SaCas9 mit NNGRRT-PAM) entwickelt.',
          merksatz:
            "CRISPR: neue Zielsequenz → neue sgRNA (Tage). ZFN/TALEN: neue Zielsequenz → neues Protein (Wochen). Cas9 braucht PAM (NGG für SpCas9).",
        },
        {
          heading: "Casgevy — Erste CRISPR-Therapie in der klinischen Praxis",
          text: "Casgevy (Exa-cel, früher CTX001) ist die erste behördlich zugelassene CRISPR-Therapie (FDA: Dezember 2023; EMA: Februar 2024) für Sichelzellanämie und transfusionsabhängige β-Thalassämie. Prinzip: Hämatopoetische Stammzellen (HSCs) des Patienten werden entnommen. Ex vivo wird per CRISPR-Cas9 der Transkriptionsrepressor **BCL11A** im Erythrozyten-Enhancer gezielt ausgeknockt. BCL11A unterdrückt normalerweise das fetale Hämoglobin-Gen (HBG1/2) nach der Geburt. Knockout → HbF-Reaktivierung → fetales Hämoglobin (γ-Ketten) ersetzt die defekten β-Ketten → keine Sichelung. Klinische Daten: >97% der behandelten Patienten schmerzfrei nach 1 Jahr; bei β-Thalassämie >90% transfusionsfrei. Preis: ca. 2,2 Millionen USD pro Behandlung.",
          merksatz:
            "Casgevy (Exa-cel): CRISPR-Knockout von BCL11A in HSCs → HbF-Reaktivierung → Sichelzellanämie geheilt. FDA-Zulassung Dez. 2023.",
        },
        {
          heading: "Lipid-Nanopartikel und mRNA-Therapie — jenseits von COVID-Impfstoffen",
          text: "Lipid-Nanopartikel (LNPs) wurden durch COVID-19-mRNA-Impfstoffe (BNT162b2, mRNA-1273) bekannt, sind aber die Basis einer breiteren Therapeutikklasse. LNPs kapseln mRNA oder siRNA ein, schützen vor Nuklease-Abbau und ermöglichen zelluläre Aufnahme (Endozytose) und Freisetzung ins Zytoplasma. Alnylam Pharmaceuticals entwickelte **Onpattro (Patisiran)**: siRNA in LNPs gegen Transthyretin-mRNA bei hereditärer Transthyretin-Amyloidose (hATTR) — erste klinisch zugelassene siRNA-Therapie (2018). In der Gentherapie werden LNPs für mRNA-basierte CRISPR-Cas9-Delivery entwickelt: transiente Expression ohne genomische Integration des Cas9-Gens (geringeres Off-Target-Risiko). Leber ist bevorzugtes Zielorgan (hohe LNP-Akkumulation durch ApoE-vermittelte Aufnahme über LDL-Rezeptoren).",
          merksatz:
            "LNPs: kapseln mRNA/siRNA, schützen vor Abbau, ermöglichen zelluläre Aufnahme. Onpattro = erste siRNA-Therapie (hATTR, 2018).",
        },
      ],
      diagram: "dna-helix",

      merksätze: [
        "CRISPR-Cas9: sgRNA (20 nt + PAM) führt Cas9 zur Zielsequenz → doppelsträngiger Bruch 3 bp vor PAM (NGG).",
        "NHEJ: fehleranfällige Reparatur → Indels → Frameshift → Genknockout. HDR: präzise Korrektur mit Template → Geneditierung.",
        "Ex-vivo-Gentherapie: Zellen entnehmen → in vitro editieren → reinfundieren. In-vivo: Vektor direkt in Patient.",
        "AAV: nicht-integrierend, geringes Immunogenitätsprofil, serotypspezifisch (AAV9 → Muskel/ZNS, AAV8 → Leber).",
        "Lentiviraler Vektor: integriert ins Wirtsgenom → dauerhafte Expression, aber Insertionsmutagenese-Risiko.",
        "Casgevy (Exa-cel): CRISPR-BCL11A-Knockout → HbF-Reaktivierung → Sichelzellanämie-Heilung. FDA-Zulassung Dez. 2023.",
        "Keimbahn-Editierung: international weitgehend verboten. He Jiankui 2018: CCR5-Knockout in Embryo → Skandal und Strafverfolgung.",
        "Off-Target-Effekte: Cas9 schneidet an ähnlichen Nicht-Zielsequenzen → mögliche Onkogenaktivierung → Screening nötig.",
        "CAR-T-Zellen: T-Zellen + lentiviraler CAR-Vektor → CD19-Targeting (B-Zell-ALL). CRISPR → PD-1-Knockout für Effizienzsteigerung.",
        "Base Editing: Nickase-Cas9 + Deaminase → C→T oder A→G ohne DSB. Prime Editing: pegRNA + RT → präziseste Einfügung.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie, wie CRISPR-Cas9 funktioniert und welche Reparaturwege nach dem Doppelstrangbruch zu unterschiedlichen Ergebnissen führen. Geben Sie ein klinisches Anwendungsbeispiel.",
        answer:
          "CRISPR-Cas9 ist ein RNA-geführtes Endonuklease-System. Die single guide RNA (sgRNA) besteht aus einem 20-Nukleotid-Spacer, der komplementär zur Zielsequenz in der genomischen DNA ist, und einem Scaffold, der an Cas9 bindet. Cas9 sucht das Genom nach PAM-Motiven (5'-NGG-3') ab; bei Erkennung öffnet es die Doppelhelix und prüft Komplementarität des Spacers — bei Übereinstimmung schneiden beide Nuklease-Domänen (RuvC und HNH) je einen Strang → doppelsträngiger Bruch (DSB) 3 bp vor dem PAM. Nach dem DSB gibt es zwei Reparaturwege: NHEJ (Non-Homologous End Joining) ligiert die Enden fehleranfällig → Insertionen/Deletionen (Indels) → oft Frameshift → Genknockout. HDR (Homology-Directed Repair) nutzt ein bereitgestelltes Donor-Template → präzise Sequenzkorrektur, aber ineffizienter. Klinisches Beispiel: Casgevy (Exa-cel) für Sichelzellanämie — CRISPR-Cas9 knockt per NHEJ den BCL11A-Repressor in hämatopoetischen Stammzellen aus → Reaktivierung des fetalen Hämoglobins (HbF) → kein pathologisches HbS mehr gebildet. FDA-Zulassung Dezember 2023.",
      },

      klinischerBezug:
        "Casgevy ist die erste CRISPR-basierte Therapie (FDA Dez. 2023); AAV-Gentherapien (Zolgensma, Luxturna) revolutionieren seltene Erbkrankheiten.",

      selfTest: [
        {
          question:
            "Welche Rolle spielt das PAM-Motiv (Protospacer Adjacent Motif) beim CRISPR-Cas9-System?",
          options: [
            "Das PAM-Motiv ist Teil der Guide-RNA und bestimmt die Spezifität der Cas9-Bindung",
            "Das PAM-Motiv ist eine kurze DNA-Sequenz (z. B. 5'-NGG-3' für SpCas9) auf dem Zielstrang, die von Cas9 erkannt werden muss, bevor es die DNA öffnet und schneidet",
            "Das PAM-Motiv verhindert Off-Target-Schnitte, indem es die Cas9-Aktivität blockiert",
            "Das PAM-Motiv ist eine RNA-Sequenz im Cas9-Transkript, die die Translation reguliert",
            "Das PAM-Motiv ist der Bereich, in dem Cas9 den doppelsträngigen Bruch erzeugt",
          ],
          correctIndex: 1,
          explanation:
            "Das PAM-Motiv (für SpCas9: 5'-NGG-3') ist eine kurze Sequenz direkt 3' der Zielsequenz auf dem nicht-komplementären DNA-Strang. Cas9 scannt das Genom nach PAM-Motiven — erst wenn ein NGG-Motiv gefunden wird, öffnet Cas9 die doppelsträngige DNA und prüft, ob die sgRNA komplementär zu den 20 nt 5' des PAM ist. Nur bei Übereinstimmung wird geschnitten (3 bp vor dem PAM). Das PAM ist für die Erkennung essenziell, aber nicht Teil des Zielsequenz-Spacers in der sgRNA. Verschiedene Cas9-Homologe (SaCas9, Cas12a) haben andere PAM-Anforderungen.",
          hints: [
            "SpCas9 kommt aus Streptococcus pyogenes — was ist das spezifische PAM-Motiv dieses Enzyms?",
            "Wenn das PAM fehlt, kann Cas9 nicht schneiden — welche Bedeutung hat das für die Wahl der Zielsequenz?",
          ],
          difficulty: 2,
          tags: ["crispr", "cas9", "pam-motiv", "genomeditierung"],
        },
        {
          question:
            "Was ist der Unterschied zwischen NHEJ und HDR als Reparaturwege nach einem CRISPR-Cas9-induzierten Doppelstrangbruch?",
          options: [
            "NHEJ repariert präzise mit einem Template; HDR ist fehleranfällig und erzeugt Indels",
            "NHEJ ist fehleranfällig und erzeugt Indels (→ Genknockout); HDR repariert präzise mittels Donor-Template (→ Genkorrektur)",
            "NHEJ ist nur in teilenden Zellen aktiv; HDR funktioniert in allen Zellphasen",
            "NHEJ und HDR liefern identische Ergebnisse — nur die Geschwindigkeit unterscheidet sich",
            "NHEJ benötigt ein Donor-Template mit homologen Sequenzen; HDR nicht",
          ],
          correctIndex: 1,
          explanation:
            "NHEJ (Non-Homologous End Joining) ist der dominante Reparaturweg: Die DNA-Enden werden ohne Matrize direkt ligiert → fehleranfällig → Insertionen/Deletionen (Indels) von 1–20 bp → oft Frameshift → vorzeitiges Stoppcodon → Protein-Knockout. Anwendung: Gezielter Genknockout. HDR (Homology-Directed Repair) nutzt ein bereitgestelltes Donor-Template (mit homologen Flanken) für die präzise Korrektur → gewünschte Sequenzänderung wird exakt eingefügt. Nachteil: HDR ist ineffizienter (v. a. in post-mitotischen Zellen in G1-Phase), da es hauptsächlich in S/G2 aktiv ist.",
          hints: [
            "NHEJ = ohne Vorlage. Was passiert, wenn man die Enden ohne Vorlage zusammenfügt?",
            "HDR = mit Donor-DNA als Vorlage (homologous = mit Homologie). Welche Art von Reparatur ermöglicht das?",
          ],
          difficulty: 2,
          tags: ["nhej", "hdr", "crispr", "dna-reparatur"],
        },
        {
          question:
            "Was ist Casgevy (Exa-cel) und welches Gen wird dabei per CRISPR-Cas9 editiert?",
          options: [
            "Eine Gentherapie, die das HBB-Gen (β-Globin) direkt korrigiert, um normale rote Blutzellen herzustellen",
            "Eine Ex-vivo-CRISPR-Therapie, die BCL11A in hämatopoetischen Stammzellen knockout, um fetales Hämoglobin zu reaktivieren",
            "Eine in-vivo-Therapie mit AAV-Vektor, der Cas9 in Knochenmarkzellen einschleust",
            "Eine siRNA-Therapie gegen HbS-mRNA, die Sichelzellhämoglobin direkt abbaut",
            "Eine CAR-T-Zell-Therapie gegen Erythrozytenvorläufer bei Sichelzellanämie",
          ],
          correctIndex: 1,
          explanation:
            "Casgevy (Exa-cel, früher CTX001, Vertex/CRISPR Therapeutics) ist die erste klinisch zugelassene CRISPR-Therapie (FDA: Dez. 2023, EMA: Feb. 2024) für Sichelzellanämie und transfusionsabhängige β-Thalassämie. Ex-vivo-Ansatz: Hämatopoetische Stammzellen des Patienten werden entnommen → CRISPR-Cas9 knockout BCL11A (genauer: den erythrozytären Enhancer von BCL11A) → BCL11A-Protein wird in roten Blutzellen nicht mehr exprimiert → BCL11A ist ein Repressor der fetalen Hämoglobin-Gene (HBG1/2) → HbF wird reaktiviert → Fetales Hämoglobin kompensiert das defekte HbS. Klinische Daten: >97% Patienten schmerzfrei nach 1 Jahr.",
          hints: [
            "BCL11A unterdrückt fetales Hämoglobin (HbF) nach der Geburt — was passiert, wenn BCL11A ausgeknockt wird?",
            "Ex vivo = außerhalb des Körpers — welche Zellen werden dem Patienten entnommen und editiert?",
          ],
          difficulty: 2,
          tags: ["casgevy", "crispr", "sichelzellanämie", "thalassämie"],
        },
        {
          question:
            "Warum ist die Keimbahn-Genomeditierung beim Menschen international weitgehend verboten?",
          options: [
            "Weil CRISPR-Cas9 in Keimzellen technisch nicht funktioniert",
            "Weil Keimbahn-Editierungen an alle Nachkommen vererbt werden, ohne deren Einwilligung, und mit unbekannten Off-Target-Risiken",
            "Weil somatische Gentherapie effektiver und billiger ist",
            "Weil Keimzellen kein NHEJ-System besitzen und Edits nicht stabil sind",
            "Weil internationale Patentrechte für CRISPR die Nutzung in Keimzellen verbieten",
          ],
          correctIndex: 1,
          explanation:
            "Keimbahn-Editierung (Modifikation von Spermien, Eizellen oder frühen Embryonen) führt zu Änderungen, die an alle Nachkommen vererbt werden — ohne deren Einwilligung. Ethische Hauptprobleme: (1) Fehlende Einwilligung zukünftiger Generationen; (2) Off-Target-Effekte (Cas9 schneidet auch unbeabsichtigt an ähnlichen Sequenzen → unbekannte Langzeitrisiken in der Keimbahn); (3) Mosaizismus (nicht alle Zellen des Embryos werden editiert → heterogenes Ergebnis); (4) Eugenik-Bedenken (Enhancement). He Jiankuis Experiment 2018 (CCR5-Knockout → HIV-Resistenz) führte zu weltweiter Verurteilung und seiner Inhaftierung.",
          hints: [
            "Somatische Therapie verändert nur die eigenen Zellen — was ist der Unterschied bei Keimbahntherapie für zukünftige Kinder?",
            "He Jiankui editierte menschliche Embryonen 2018 — was war die internationale Reaktion und warum?",
          ],
          difficulty: 2,
          tags: ["keimbahn", "genomeditierung", "ethik", "crispr"],
        },
        {
          question:
            "Was ist der Unterschied zwischen AAV (Adeno-assoziierter Virus) und lentiviralen Vektoren als Gentherapie-Vehikel?",
          options: [
            "AAV integriert ins Wirtsgenom (dauerhafte Expression); lentivirale Vektoren bleiben episomal (vorübergehend)",
            "AAV bleibt überwiegend episomal (nicht-integrierend); lentivirale Vektoren integrieren ins Wirtsgenom (dauerhaft)",
            "Beide Vektoren sind identisch — der Unterschied liegt nur in der Produktionskosten",
            "AAV wird nur für ZNS-Anwendungen verwendet; lentivirale Vektoren nur für Bluterkrankungen",
            "Lentivirale Vektoren haben ein höheres Immunogenitätsprofil als AAV",
          ],
          correctIndex: 1,
          explanation:
            "AAV (Adeno-assoziierter Virus): bleibt nach Infektion überwiegend episomal (als zirkuläre DNA außerhalb des Chromosoms) → keine Insertionsmutagenese (Risiko einer Onkogenaktivierung ist sehr gering). Verschiedene Serotypen: AAV9 → Muskel/ZNS (Zolgensma bei SMA), AAV8 → Leber. Nachteil: limitierte Kapazität (~4,7 kb) und Immunantwort bei Dosierung. Lentiviraler Vektor (aus HIV-1 abgeleitet, inaktiviert): integriert in Wirtsgenom → dauerhafter Geneinbau, auch in nicht-teilenden Zellen (Vorteil) → aber Insertionsmutagenese-Risiko (Insertionsstelle kann Onkogen aktivieren oder Tumorsuppressor inaktivieren). Anwendung: CAR-T-Zellen, ex-vivo HSC-Therapien.",
          hints: [
            "Episomal = außerhalb der Chromosomen. Was passiert, wenn eine Zelle sich teilt und die episomale DNA nicht repliziert wird?",
            "Was ist Insertionsmutagenese — und welcher Vektor hat dieses Risiko?",
          ],
          difficulty: 3,
          tags: ["gentherapie", "aav", "lentivirus", "virale-vektoren"],
        },
        {
          question: "Was sind CAR-T-Zellen und wie werden sie hergestellt?",
          options: [
            "CAR-T-Zellen sind T-Zellen, die durch UV-Strahlung aktiviert werden, um Tumorzellen zu erkennen",
            "CAR-T-Zellen sind gentechnisch modifizierte T-Zellen mit einem chimären Antigenrezeptor, der spezifisch Tumorzellen erkennt; hergestellt durch lentivirale/retroviralen Vektortransduktion",
            "CAR-T-Zellen sind natürliche Killer-T-Zellen, die ohne genetische Modifikation Tumorzellen abtöten",
            "CAR-T-Zellen sind monoklonale Antikörper, die an T-Zellen gekoppelt werden",
            "CAR-T-Zellen werden durch CRISPR-Knockout des TCR hergestellt, um allogene Transplantat-Reaktionen zu vermeiden",
          ],
          correctIndex: 1,
          explanation:
            "CAR-T-Zellen (Chimeric Antigen Receptor T-cells) sind patienteneigene (autologe) oder Spender-T-Zellen (allogene), die gentechnisch mit einem künstlichen Rezeptor ausgestattet wurden. Herstellung: Leukapherese → T-Zellen isolieren → Transduktion mit lentiviralen/retroviralem Vektor, der CAR kodiert → CAR-T-Zellen expandieren → Reinfusion. Der CAR besteht aus einem extrazellulären Antikörper-Fragment (z. B. anti-CD19 für B-Zell-ALL), einer Transmembrandomäne und intrazellulären Signaldomänen (CD3ζ, CD28 oder 4-1BB). Bei Antigenbindung werden T-Zellen aktiviert → Tumorzelle tötet. CRISPR-Knockout von PD-1 oder TCR verbessert allogene CAR-T-Zellen.",
          hints: [
            'CAR = Chimeric Antigen Receptor — "chimär" bedeutet aus verschiedenen Teilen zusammengesetzt. Was kombiniert ein CAR?',
            "Wie wird der CAR-Rezeptor in die T-Zelle eingebracht?",
          ],
          difficulty: 2,
          tags: ["car-t-zellen", "immuntherapie", "onkologie", "gentherapie"],
        },
        {
          question: "Was ist der Unterschied zwischen Base Editing und klassischem CRISPR-Cas9?",
          options: [
            "Base Editing erzeugt einen doppelsträngigen Bruch (DSB); klassisches CRISPR-Cas9 nicht",
            "Base Editing nutzt eine Nickase-Cas9 (schneidet nur einen Strang) + Deaminase und ändert direkt C→T oder A→G ohne Doppelstrangbruch",
            "Base Editing erfordert ein Donor-Template (HDR); CRISPR-Cas9 funktioniert ohne Template",
            "Base Editing ist weniger spezifisch als CRISPR-Cas9 und wird nicht klinisch verwendet",
            "Base Editing kann nur in E. coli, nicht in menschlichen Zellen angewendet werden",
          ],
          correctIndex: 1,
          explanation:
            "Klassisches CRISPR-Cas9 erzeugt einen doppelsträngigen Bruch (DSB) → Reparatur via NHEJ (Indels) oder HDR (präzise). Das Problem: DSBs können zu chromosomalen Umbauten, Translokationen oder p53-Aktivierung führen. Base Editing (David Liu, Broad Institute) ist weniger invasiv: Eine Nickase-Cas9 (nCas9 = schneidet nur einen DNA-Strang) ist mit einer Deaminase fusioniert. Cytosine Base Editor (CBE): Deaminase konvertiert C→U (→ T) im Zielbereich ohne DSB. Adenine Base Editor (ABE): konvertiert A→I (→ G). Ergebnis: präzise Punktmutationskorrektur ohne DSB → weniger genotoxisch. Limitierung: nur bestimmte Basenaustausche möglich.",
          hints: [
            "Warum ist ein Doppelstrangbruch (DSB) potenziell gefährlicher als ein Einzelstrangbruch (nick)?",
            "Base Editing = direkte chemische Modifikation einer Base. Welche Enzyme katalysieren eine solche Reaktion?",
          ],
          difficulty: 3,
          tags: ["base-editing", "crispr", "punktmutation", "genomeditierung"],
        },
      ],
    },

    // === from kap8-humangenetik ===
    {
      id: "bio-8-01",
      title: "Stammbaumanalyse — Alle 4 Erbgänge mit Beispielen",
      content: `## Stammbaumanalyse — Grundlagen

Die **Stammbaumanalyse** (Pedigreee-Analyse) ermöglicht die Bestimmung des Erbgangs einer Erkrankung durch systematische Auswertung betroffener Familienmitglieder. Standardsymbole: Kreis = weiblich, Quadrat = männlich, ausgefüllte Symbole = betroffen, Horizontalstrich = Elternpaar, Vertikalstrich = Nachkommen.

## Autosomal dominanter Erbgang

Merkmale: (1) Erkrankung in jeder Generation (kein Generationssprung), (2) jedes Geschlecht gleich häufig betroffen, (3) betroffener Elternteil gibt Allel mit 50% Wahrscheinlichkeit weiter, (4) heterozygote Anlageträger sind krank.

Beispiele:
- **Marfan-Syndrom:** Mutation im FBN1-Gen (Fibrillin-1). Phänotyp: Hochwuchs, Arachnodaktylie, Augenlinsenektopie, Aortenerweiterung (Rupturrisiko)
- **Huntington-Krankheit:** CAG-Trinukleotidwiederholung im HTT-Gen. Vollständige Penetranz, Beginn meist nach dem 40. Lebensjahr, progrediente Neurodegeneration. Antizipation: Wiederholungen nehmen über Generationen zu (v. a. väterliche Weitergabe)

## Autosomal rezessiver Erbgang

Merkmale: (1) Generationssprung möglich (gesunde Trägereltern), (2) beide Geschlechter gleich häufig betroffen, (3) Konsanguinität erhöht Erkrankungsrisiko, (4) zwei pathogene Allele nötig (homozygot oder compound-heterozygot).

Beispiele:
- **Mukoviszidose (Cystische Fibrose):** Mutation im CFTR-Gen (häufigste: deltaF508). Chloridkanaldefekt → zähes Mukus in Lunge, Pankreas, Darm
- **Phenylketonurie (PKU):** Phenylalanin-Hydroxylase-Defekt → Phenylalanin-Akkumulation → Hirnschäden (Neugeborenenscreening!)

## X-chromosomal rezessiver Erbgang

Merkmale: (1) Söhne betroffener Väter sind nicht betroffen (Vater gibt Y an Söhne), (2) Töchter betroffener Väter sind obligate Konduktorinnen, (3) Söhne von Konduktorinnen zu 50% betroffen, (4) Männer sind häufiger klinisch betroffen (hemizygot).

Beispiele:
- **Hämophilie A:** Faktor-VIII-Mangel (F8-Gen auf Xq28), Blutungsneigung
- **Hämophilie B:** Faktor-IX-Mangel (F9-Gen)
- **Duchenne Muskeldystrophie:** Dystrophin-Gen (größtes menschliches Gen), progressive Muskelschwäche ab Kleinkindalter

## X-chromosomal dominanter Erbgang

Merkmale: (1) Töchter betroffener Väter sind alle betroffen, (2) Söhne betroffener Väter alle gesund, (3) betroffene Mütter geben Merkmal an 50% der Söhne und Töchter weiter.

Beispiele: Hypophosphatämie (Vitamin-D-resistente Rachitis), Rett-Syndrom (MECP2, lethal für hemizygote Männer)`,
      lernziele: [
        "Die vier Erbgänge (autosomal dominant/rezessiv, X-chromosomal dominant/rezessiv) anhand von Stammbaum-Merkmalen erkennen",
        "Konkrete Krankheitsbeispiele jedem Erbgang zuordnen und klinische Merkmale nennen",
        "Erkrankungswahrscheinlichkeiten für Nachkommen anhand eines Stammbaums berechnen",
      ],
      sections: [
        {
          heading: "Der Begriff 'Konduktorin' beim X-chromosomal rezessiven Erbgang",
          text: "Eine Konduktorin (Überträgerin) ist eine Frau, die heterozygot für ein X-chromosomal rezessives Allel ist (X^A X^a). Sie ist selbst nicht klinisch krank (das zweite, gesunde X-Chromosom kompensiert), aber sie kann das pathogene Allel weitergeben. Söhne einer Konduktorin haben ein 50%iges Risiko, das Allel zu erben und zu erkranken (da sie hemizygot sind: X^a Y). Töchter haben ein 50%iges Risiko, selbst Konduktorin zu werden. Eine obligate Konduktorin ist eine Frau, bei der die Trägerschaft aufgrund des Stammbaums sicher feststeht (z. B. Mutter eines betroffenen Sohnes, Tochter eines betroffenen Vaters). Bei der Hämophilie war Victoria I. von England eine berühmte obligate Konduktorin.",
          merksatz:
            "Konduktorin: heterozygot X^A X^a, phänotypisch gesund, gibt pathogenes Allel an 50% der Söhne (krank) und 50% der Töchter (Konduktorin) weiter.",
        },
        {
          heading: "Huntington — Besonderheiten des autosomal dominanten Erbgangs",
          text: "Die Huntington-Krankheit zeigt mehrere Besonderheiten: Erstens vollständige Penetranz — jeder Träger des mutierten HTT-Allels (> 40 CAG-Wiederholungen) erkrankt. Zweitens spätes Manifestationsalter (meist 30–50 Jahre) — Betroffene haben oft bereits Kinder bekommen, bevor sie wissen, ob sie das Allel tragen. Drittens Antizipation — bei väterlicher Weitergabe nehmen die CAG-Wiederholungen oft zu, was zu früherem und schwererem Erkrankungsbeginn in Folge-Generationen führt. Die Prädiktivdiagnostik (genetischer Test vor Symptomausbruch) ist ethisch belastet: Wer möchte wissen, ob er in 20 Jahren erkranken wird?",
          merksatz:
            "Huntington: CAG-Repeats > 40 → vollständige Penetranz, Antizipation (Repeats nehmen zu). Prädiktivdiagnostik ethisch komplex.",
        },
      ],
      diagram: "pedigree-analysis",

      merksätze: [
        "AD: jede Generation betroffen, 50% Risiko, kein Generationssprung. Beispiele: Marfan, Huntington.",
        "AR: Generationssprung möglich, beide Eltern Träger, 25% Risiko bei Trägerpaar. Beispiele: Mukoviszidose, PKU.",
        "XR: Männer betroffen (hemizygot), Frauen meist Konduktorin. Beispiele: Hämophilie A/B, Duchenne.",
      ],
      klinischerBezug:
        "Duchenne Muskeldystrophie (X-rezessiv) betrifft ca. 1:3.500 Knaben und führt unbehandelt zur Rollstuhlpflichtigkeit im zweiten Lebensjahrzehnt. Exon-Skipping-Therapien (Antisense-Oligonukleotide) und Gentherapien befinden sich in klinischen Studien und zeigen erste Erfolge in der Verlangsamung der Progression.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Ein Stammbaum zeigt, dass ausschließlich Söhne erkrankt sind, erkrankte Väter keine erkrankten Söhne haben, und Töchter von erkrankten Vätern alle Konduktorinnen sind. Welcher Erbgang liegt vor?",
        answer:
          "Es liegt ein X-chromosomal rezessiver Erbgang vor. Da erkrankte Väter ihr X-Chromosom nur an Töchter (nicht an Söhne) weitergeben, erkranken Söhne betroffener Väter nicht. Töchter betroffener Väter erhalten das pathogene X-Allel sicher und sind obligate Konduktorinnen. Das Muster — nur Söhne betroffen, Übertragung durch klinisch gesunde Frauen — ist charakteristisch für X-chromosomal rezessiv.",
      },
      selfTest: [
        {
          question:
            "Welcher Erbgang liegt vor, wenn eine Erkrankung in jeder Generation vorkommt, Männer und Frauen gleich häufig betroffen sind, und ein betroffener Elternteil das Merkmal mit 50% Wahrscheinlichkeit weitergibt?",
          options: [
            "Autosomal rezessiv",
            "X-chromosomal rezessiv",
            "Autosomal dominant",
            "X-chromosomal dominant",
            "Mitochondrial",
          ],
          correctIndex: 2,
          explanation:
            "Autosomal dominanter Erbgang zeigt folgende Merkmale: Die Erkrankung tritt in jeder Generation auf (kein Generationssprung), beide Geschlechter sind gleich häufig betroffen (da das Gen auf einem Autosom liegt), und jeder Betroffene gibt das Allel mit 50% Wahrscheinlichkeit an seine Nachkommen weiter (heterozygot). Beispiele: Marfan-Syndrom, Huntington-Krankheit.",
          hints: [
            "Wenn die Erkrankung in jeder Generation auftaucht, muss das pathogene Allel dominant sein.",
            "Gleiches Verhältnis bei Männern und Frauen schließt X-chromosomale Erbgänge weitgehend aus.",
          ],
          difficulty: 1,
          tags: ["autosomal-dominant", "erbgang", "stammbaumanalyse", "mendel"],
        },
        {
          question:
            "Beide Eltern sind phänotypisch gesund, ihr Kind leidet an Mukoviszidose. Welche Aussage ist korrekt?",
          options: [
            "Mukoviszidose muss eine neue Mutation (de novo) sein",
            "Beide Eltern sind heterozygote Träger des CFTR-Allels (autosomal rezessiv)",
            "Die Mutter ist Konduktorin, der Vater ist gesund",
            "Das Kind hat das Allel nur von der Mutter geerbt",
            "Mukoviszidose folgt einem X-chromosomal rezessiven Erbgang",
          ],
          correctIndex: 1,
          explanation:
            "Mukoviszidose folgt einem autosomal rezessiven Erbgang. Wenn beide Eltern phänotypisch gesund, aber das Kind betroffen ist, müssen beide Eltern heterozygote Anlageträger (Aa) sein. Das Erkrankungsrisiko für jedes Kind beträgt 25% (aa). Die häufigste Mutation ist deltaF508 im CFTR-Gen auf Chromosom 7.",
          hints: [
            "Autosomal rezessiv: Beide Kopien des Gens müssen mutiert sein, um zu erkranken.",
            "Wenn gesunde Eltern ein erkranktes Kind haben, müssen beide Eltern Träger sein.",
          ],
          difficulty: 2,
          tags: ["autosomal-rezessiv", "mukoviszidose", "träger", "erbgang"],
        },
        {
          question:
            "Eine Frau ist Konduktorin für Hämophilie A (X^H X^h). Ihr Partner ist gesund. Wie hoch ist die Wahrscheinlichkeit, dass ihr Sohn an Hämophilie A erkrankt?",
          options: ["100%", "75%", "50%", "25%", "0%"],
          correctIndex: 2,
          explanation:
            "Die Konduktorin (X^H X^h) gibt entweder X^H oder X^h mit je 50% Wahrscheinlichkeit weiter. Der Vater ist gesund (X^H Y) und gibt das Y-Chromosom an Söhne weiter. Söhne erhalten also entweder X^H Y (gesund, 50%) oder X^h Y (erkrankt, 50%). Die Erkrankungswahrscheinlichkeit für jeden Sohn beträgt daher 50%.",
          hints: [
            "Söhne erhalten ihr X-Chromosom immer von der Mutter und das Y vom Vater.",
            "Die Konduktorin trägt das pathogene Allel auf einem ihrer X-Chromosomen — mit welcher Wahrscheinlichkeit gibt sie dieses weiter?",
          ],
          difficulty: 2,
          tags: ["haemophilie", "x-chromosomal", "konduktorin", "erbgang"],
        },
        {
          question:
            "Welches der folgenden Merkmale spricht GEGEN einen X-chromosomal rezessiven Erbgang?",
          options: [
            "Nur Söhne sind betroffen",
            "Töchter von erkrankten Vätern sind Konduktorinnen",
            "Ein erkrankter Vater hat einen erkrankten Sohn",
            "Gesunde Mütter haben erkrankte Söhne",
            "Erkrankungsrisiko für Söhne von Konduktorinnen beträgt 50%",
          ],
          correctIndex: 2,
          explanation:
            "Beim X-chromosomal rezessiven Erbgang geben Väter ihr X-Chromosom ausschließlich an Töchter weiter — niemals an Söhne (Söhne erhalten das Y-Chromosom vom Vater). Daher kann ein erkrankter Vater (X^h Y) sein pathogenes X-Allel NICHT an Söhne weitergeben. Ein erkrankter Vater mit erkranktem Sohn widerspricht damit dem X-chromosomal rezessiven Erbgang — es müsste ein anderer Erbgang (z. B. autosomal rezessiv) vorliegen.",
          hints: [
            "Welches Chromosom geben Väter an ihre Söhne weiter?",
            "Können Söhne das X-Chromosom ihres Vaters erhalten? Nein — sie erhalten das Y.",
          ],
          difficulty: 3,
          tags: ["x-chromosomal-rezessiv", "stammbaumanalyse", "erbgang", "diagnostik"],
        },
        {
          question: "Welche Erkrankung zeigt das Phänomen der 'Antizipation'?",
          options: [
            "Mukoviszidose",
            "Hämophilie A",
            "Huntington-Krankheit",
            "Marfan-Syndrom",
            "Duchenne Muskeldystrophie",
          ],
          correctIndex: 2,
          explanation:
            "Antizipation bezeichnet das Phänomen, dass eine erbliche Erkrankung in aufeinanderfolgenden Generationen früher auftritt und/oder schwerer verläuft. Bei der Huntington-Krankheit nimmt die Anzahl der CAG-Trinukleotidwiederholungen im HTT-Gen über Generationen zu — besonders bei väterlicher Weitergabe. Mehr Wiederholungen korrelieren mit früherem Erkrankungsbeginn.",
          hints: [
            "Antizipation ist typisch für Trinukleotidrepeat-Erkrankungen.",
            "Welche der genannten Erkrankungen basiert auf einer CAG-Wiederholungsexpansion?",
          ],
          difficulty: 2,
          tags: ["antizipation", "huntington", "trinukleotid-repeat", "erbgang"],
        },
      ],
    },
    {
      id: "bio-8-03",
      title: "Erbgänge vertieft — Polygenie, Pleiotropie, Penetranz",
      content: `## Über die Mendelschen Regeln hinaus

Die klassischen Mendelschen Regeln (Uniformitäts-, Spaltungs-, Unabhängigkeitsregel) beschreiben Erbgänge für einzelne Gene mit klarer Dominant-Rezessiv-Beziehung. Viele Merkmale und Erkrankungen folgen jedoch komplexeren Mustern.

## Multifaktorielle Vererbung

**Multifaktorielle Erkrankungen** entstehen durch das Zusammenwirken mehrerer Gene (Polygenie) und Umweltfaktoren. Merkmale: (1) Erkrankung häuft sich in Familien, folgt aber nicht einem einfachen Mendel-Erbgang, (2) eineiige Zwillinge haben höhere Konkordanz als zweieiige, aber keine 100%, (3) je mehr Gene betroffen sind, desto stärker der Umwelteinfluss.

Beispiele: Typ-2-Diabetes, arterielle Hypertonie, koronare Herzerkrankung, Schizophrenie, Lippen-Kiefer-Gaumen-Spalte

## Polygenie

Bei **Polygenie** beeinflussen mehrere Gene (Polygene) dasselbe Merkmal. Jedes einzelne Gen hat einen kleinen additiven Beitrag. Das Merkmal ist **quantitativ** — es zeigt eine **Normalverteilung** in der Population (z. B. Körpergröße, Hautfarbe, Intelligenz).

Körpergröße: Mehrere Hundert Genloci mit je kleinem Effekt plus starke Umweltkomponente (Ernährung, Hormonstatus)
Hautfarbe: Mindestens 6 Gene (z. B. MC1R, OCA2, SLC24A5) → kontinuierliches Spektrum

## Pleiotropie

**Pleiotropie** bezeichnet das Phänomen, dass ein einziges Gen mehrere scheinbar unabhängige Phänotypen beeinflusst. Ursache: Das Genprodukt (Protein) ist in mehreren Geweben oder Stoffwechselwegen aktiv.

Beispiele:
- **Phenylketonurie (PKU):** Phenylalanin-Hydroxylase-Defekt → erhöhtes Phenylalanin → Hirnentwicklungsstörung, Hypopigmentierung, Mausurin-Geruch (alle Symptome durch ein Gen)
- **Marfan-Syndrom:** FBN1-Mutation → Bindegewebsschwäche in Aorta, Augenlinse, Skelett

## Penetranz und Expressivität

**Penetranz:** Anteil der Genträger, die den Phänotyp tatsächlich zeigen.
- **Vollständige Penetranz (100%):** Jeder Träger erkrankt (z. B. Huntington mit >40 Repeats)
- **Unvollständige Penetranz:** Nur ein Teil der Träger zeigt den Phänotyp (z. B. BRCA1-Mutationen: ca. 70% Brustkrebs-Lebensrisiko)

**Expressivität:** Beschreibt, wie stark der Phänotyp bei Trägern ausgeprägt ist.
- **Variable Expressivität:** Träger zeigen unterschiedlich schwere Ausprägung (z. B. Neurofibromatose Typ 1: von wenigen Café-au-lait-Flecken bis massiven Tumoren)

Ursachen für variable Penetranz/Expressivität: modifizierende Gene, Umweltfaktoren, epigenetische Einflüsse`,
      lernziele: [
        "Polygenie und Pleiotropie definieren und mit je einem Beispiel erläutern",
        "Vollständige und unvollständige Penetranz sowie variable Expressivität unterscheiden",
        "Multifaktorielle Erkrankungen von monogenen Erkrankungen abgrenzen",
      ],
      sections: [
        {
          heading: "Penetranz vs. Expressivität — Ein klinisch wichtiger Unterschied",
          text: "Penetranz und Expressivität werden häufig verwechselt. Penetranz ist binär: Entweder zeigt der Genträger den Phänotyp oder nicht (Prozentsatz der Träger, die betroffen sind). Expressivität beschreibt die Schwere des Phänotyps bei denjenigen, die bereits betroffen sind (quantitatives Ausmaß). Beispiel: Bei der Neurofibromatose Typ 1 (NF1, autosomal dominant) beträgt die Penetranz fast 100% — fast alle Träger zeigen irgendein Symptom. Die Expressivität ist jedoch sehr variabel: Von minimalen Café-au-lait-Flecken bis zu multiplen Neurofibromen und kognitiven Beeinträchtigungen. Selbst innerhalb einer Familie können Eltern und Kinder sehr unterschiedlich stark betroffen sein.",
          merksatz:
            "Penetranz: Wie viele Träger erkranken? (0–100%). Expressivität: Wie schwer erkranken die Betroffenen? (variabel/konstant).",
        },
        {
          heading: "Polygenie und Normalverteilung",
          text: "Wenn viele Gene mit kleinen, additiven Effekten ein Merkmal beeinflussen, entsteht durch den Zentralen Grenzwertsatz eine Normalverteilung in der Population. Die Körpergröße ist das klassische Lehrbuchbeispiel: Hunderte von Genloci tragen je wenige Millimeter bei. Dazu kommt eine große Umweltkomponente (Ernährung, chronische Erkrankungen, Hormonstatus). Zwillingsstudien quantifizieren die genetische Komponente: Bei eineiigen Zwillingen korrelieren Körpergrößen stärker als bei zweieiigen. Die Heritabilität (h²) der Körpergröße beträgt etwa 80% in westlichen Populationen. GWAS-Studien (Genome-Wide Association Studies) haben bereits über 3.000 Varianten identifiziert, die gemeinsam aber nur ~25% der Varianz erklären — die 'missing heritability' ist Gegenstand aktueller Forschung.",
          merksatz:
            "Polygenie → viele Gene mit kleinen additiven Effekten → Merkmal normalverteilt in Population. Körpergröße, Hautfarbe: klassische Beispiele.",
        },
      ],
      merksätze: [
        "Polygenie: Ein Merkmal wird durch viele Gene beeinflusst → Normalverteilung (Körpergröße, Hautfarbe).",
        "Pleiotropie: Ein Gen → viele Phänotypen (PKU: Hirnschaden + Hypopigmentierung + Geruch).",
        "Penetranz: Anteil erkrankter Träger (vollständig 100% vs. unvollständig). Expressivität: Schwere bei Betroffenen (variabel).",
      ],
      klinischerBezug:
        "BRCA1/2-Mutationen zeigen unvollständige Penetranz: Das Lebenszeitrisiko für Brustkrebs beträgt ca. 70% (nicht 100%). Das prädiktive Testen und prophylaktische Operationen (Mastektomie, Salpingo-Oophorektomie) werden im Rahmen der Genberatung diskutiert. Die variable Expressivität des Marfan-Syndroms kann dazu führen, dass mildere Fälle jahrelang undiagnostiziert bleiben.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Was ist der Unterschied zwischen Penetranz und Expressivität? Erläutern Sie an einem Beispiel.",
        answer:
          "Penetranz bezeichnet den Anteil der Genträger, die den zugehörigen Phänotyp zeigen (prozentual). Vollständige Penetranz bedeutet, dass 100% der Träger erkranken. Expressivität beschreibt die Schwere des Phänotyps bei denjenigen, die bereits betroffen sind. Beispiel: Neurofibromatose Typ 1 hat nahezu vollständige Penetranz (fast alle Träger zeigen Symptome), aber variable Expressivität (von minimalen Hautveränderungen bis zu multiplen Tumoren und kognitiven Einschränkungen).",
      },
      selfTest: [
        {
          question: "Was beschreibt der Begriff 'Pleiotropie'?",
          options: [
            "Mehrere Gene beeinflussen dasselbe Merkmal",
            "Ein einziges Gen beeinflusst mehrere scheinbar unabhängige Phänotypen",
            "Ein Allel ist in manchen Trägern dominant, in anderen rezessiv",
            "Ein Merkmal wird ausschließlich durch Umweltfaktoren bestimmt",
            "Zwei verschiedene Gene liegen auf demselben Chromosom (Kopplung)",
          ],
          correctIndex: 1,
          explanation:
            "Pleiotropie bezeichnet das Phänomen, dass ein einziges Gen (bzw. sein Produkt) mehrere, scheinbar unabhängige Phänotypen beeinflusst. Ursache ist, dass das Genprodukt in verschiedenen Geweben oder Stoffwechselwegen eine Rolle spielt. Beispiel: FBN1-Mutation (Marfan-Syndrom) → Bindegewebsschwäche in Aorta, Augenlinse und Skelett durch ein einziges Gen.",
          hints: [
            "Pleio (griech.) = vielfach. Ein Gen, viele Wirkungen.",
            "Vergleichen Sie mit Polygenie (umgekehrt): viele Gene, ein Merkmal.",
          ],
          difficulty: 1,
          tags: ["pleiotropie", "phänotyp", "genprodukt", "mehrsystemerkrankung"],
        },
        {
          question:
            "Welche der folgenden Erkrankungen ist ein klassisches Beispiel für Pleiotropie?",
          options: [
            "Körpergröße (multifaktoriell beeinflusst)",
            "Typ-2-Diabetes (polygenetisch und umweltbedingt)",
            "Phenylketonurie (PKU): ein Gen → Hirnschäden, Hypopigmentierung, Uringeruch",
            "Trisomie 21 (Chromosomenstörung)",
            "Duchenne Muskeldystrophie (X-chromosomal rezessiv)",
          ],
          correctIndex: 2,
          explanation:
            "Phenylketonurie (PKU) ist ein Paradebeispiel für Pleiotropie: Die Mutation im PAH-Gen (Phenylalanin-Hydroxylase) führt zu erhöhtem Phenylalanin, das mehrere Organsysteme schädigt: Hirnentwicklungsstörung (geistige Behinderung), Hypopigmentierung der Haut und Haare (Phenylalanin hemmt Melanin-Synthese) und charakteristischer Mausurin-Geruch (Phenylketone im Urin). Ein Gen, viele Phänotypen.",
          hints: [
            "Pleiotropie = ein Gen, viele Symptome. Welche Erkrankung zeigt ein breites Symptomspektrum aus einem einzigen Gendefekt?",
            "PKU wird durch Neugeborenenscreening erkannt — der Enzymdefekt betrifft die Phenylalanin-Hydroxylase.",
          ],
          difficulty: 2,
          tags: ["pleiotropie", "pku", "phenylalanin", "einzel-gen"],
        },
        {
          question:
            "Ein Merkmal ist normalverteilt in der Population (wie Körpergröße). Was schlussfolgern Sie über seinen Erbgang?",
          options: [
            "Das Merkmal folgt einem autosomal dominanten Erbgang mit einem einzigen Gen",
            "Das Merkmal wird ausschließlich durch Umweltfaktoren bestimmt",
            "Das Merkmal ist polygen — viele Gene mit je kleinen additiven Effekten",
            "Das Merkmal folgt X-chromosomaler Vererbung",
            "Das Merkmal zeigt unvollständige Penetranz mit einem einzigen Gen",
          ],
          correctIndex: 2,
          explanation:
            "Wenn viele Gene mit kleinen, additiven Effekten ein Merkmal beeinflussen (Polygenie), entsteht durch den Zentralen Grenzwertsatz eine Normalverteilung in der Population. Körpergröße, Hautfarbe und viele psychologische Merkmale folgen diesem Muster. Monogene Merkmale zeigen dagegen diskrete Klassen (z. B. krank/gesund bei vollständiger Penetranz).",
          hints: [
            "Die Normalverteilung entsteht, wenn viele unabhängige, additiv wirkende Faktoren zusammenkommen.",
            "Diskrete Merkmale (z. B. Blutgruppen) folgen monogenen Erbgängen; kontinuierliche Merkmale folgen polygener Vererbung.",
          ],
          difficulty: 2,
          tags: ["polygenie", "normalverteilung", "körpergrösse", "additiv"],
        },
        {
          question:
            "BRCA1-Mutationsträgerinnen haben ein Lebenszeitrisiko von ca. 70% für Brustkrebs (nicht 100%). Welches genetische Konzept erklärt dies?",
          options: [
            "Variable Expressivität",
            "Unvollständige Penetranz",
            "Pleiotropie",
            "Epistasie",
            "Antizipation",
          ],
          correctIndex: 1,
          explanation:
            "Unvollständige Penetranz bedeutet, dass nicht alle Träger eines pathogenen Allels den zugehörigen Phänotyp entwickeln. Bei BRCA1-Mutationen erkranken ca. 70% der Trägerinnen im Laufe ihres Lebens an Brustkrebs (nicht 100%). Modifizierende Gene, Umweltfaktoren (Hormonexposition, Reproduktionsverhalten) und zufällige somatische Mutationen beeinflussen, ob der Phänotyp auftritt.",
          hints: [
            "Penetranz = Anteil der Träger, die erkranken. Wenn nicht alle Träger erkranken, ist sie unvollständig.",
            "Expressivität würde die Schwere der Erkrankung bei Betroffenen beschreiben — hier geht es aber um das Ob, nicht das Wie.",
          ],
          difficulty: 2,
          tags: ["penetranz", "brca1", "unvollstaendig", "brustkrebsrisiko"],
        },
        {
          question:
            "Was ist der Unterschied zwischen multifaktoriellen und monogenen Erkrankungen?",
          options: [
            "Monogene Erkrankungen werden durch viele Gene verursacht; multifaktorielle durch ein einziges Gen",
            "Multifaktorielle Erkrankungen werden durch das Zusammenwirken mehrerer Gene und Umweltfaktoren verursacht; monogene durch Mutation in einem einzigen Gen",
            "Multifaktorielle Erkrankungen folgen immer einem autosomal rezessiven Erbgang",
            "Monogene Erkrankungen zeigen keine Familienanhäufung; multifaktorielle schon",
            "Es gibt keinen praktisch relevanten Unterschied zwischen beiden Begriffen",
          ],
          correctIndex: 1,
          explanation:
            "Monogene Erkrankungen (z. B. Mukoviszidose, Huntington) werden durch Mutationen in einem einzigen Gen verursacht und folgen Mendel-Erbgängen. Multifaktorielle Erkrankungen (z. B. Typ-2-Diabetes, Hypertonie) entstehen durch das Zusammenwirken vieler Gene mit je kleinem Effekt und Umweltfaktoren. Sie häufen sich in Familien, folgen aber nicht einem einfachen Mendel-Erbgang und zeigen keine 100%-Penetranz.",
          hints: [
            "Mono = eines. Multi = viele. Welches beschreibt das Zusammenspiel von Genen und Umwelt?",
            "Mukoviszidose ist ein klassisches monogenes Beispiel; Herzerkrankungen sind ein klassisches multifaktorielles Beispiel.",
          ],
          difficulty: 1,
          tags: ["multifaktoriell", "monogen", "polygenie", "umweltfaktoren"],
        },
      ],
    },
    {
      id: "bio-8-02",
      title: "Genetische Beratung und Risikoberechnung",
      content: `## Genetische Beratung — Ziele und Prinzipien

Die **genetische Beratung** ist ein Kommunikationsprozess zwischen Fachleuten (Humangenetiker, genetisch geschulte Ärzte) und Ratsuchenden. Ziele: Information über Erkrankung, Erbgang und Wiederholungsrisiko; Unterstützung bei Entscheidungen (Familienplanung, prädiktive Diagnostik); psychologische Begleitung. Prinzip der Nicht-Direktivität: Der Berater informiert, trifft aber keine Entscheidungen für die Ratsuchenden.

## Basisrisikoberechnung nach Mendel

Für einfache Erbgänge lässt sich das Erkrankungsrisiko direkt aus dem Stammbaum ableiten:
- **Autosomal dominant:** 50% Risiko für jedes Kind eines heterozygoten Betroffenen
- **Autosomal rezessiv:** 25% Erkrankungsrisiko für jedes Kind zweier heterozygoter Träger
- **X-chromosomal rezessiv:** 50% der Söhne einer Konduktorin erkranken; 50% der Töchter werden Konduktorinnen

## Bayessche Wahrscheinlichkeit

Die **Bayessche Analyse** ermöglicht die Berechnung einer posterioren Wahrscheinlichkeit unter Berücksichtigung zusätzlicher Information (z. B. klinische Befunde, vorherige Kinder). Sie kombiniert Vorinformation (Prior) mit neuer Information (Likelihood) zu einer aktualisierten Wahrscheinlichkeit (Posterior).

Beispiel: Eine Frau hat eine 50%ige Vorinformation (Prior), Konduktorin zu sein (Mutter ist Konduktorin). Sie hat drei gesunde Söhne. Die Wahrscheinlichkeit, drei gesunde Söhne zu haben, wenn sie Konduktorin ist, beträgt (1/2)³ = 1/8. Posterior: 50% × 1/8 / (50% × 1/8 + 50% × 1) = 1/9. Ihre Konduktrinnenwahrscheinlichkeit sinkt von 50% auf ~11%.

## Hardy-Weinberg-Gesetz für Häufigkeitsberechnung

Das **Hardy-Weinberg-Gesetz** beschreibt die Allel- und Genotyphäufigkeiten in einer idealen Population im Gleichgewicht:

p² + 2pq + q² = 1, wobei p + q = 1

p = Häufigkeit des Wildtyp-Allels, q = Häufigkeit des pathogenen Allels

- p² = Häufigkeit Homozygot Wildtyp (AA)
- 2pq = Häufigkeit Heterozygote Träger (Aa)
- q² = Häufigkeit Erkrankte (aa)

Anwendung: Mukoviszidose-Trägerfrequenz: Erkrankungshäufigkeit q² = 1/2.500, also q = 1/50, Trägerfrequenz 2pq ≈ 2 × (49/50) × (1/50) ≈ 1/25.`,
      lernziele: [
        "Erkrankungsrisiken für Nachkommen aus Stammbäumen berechnen (autosomal dominant/rezessiv, X-chromosomal)",
        "Das Hardy-Weinberg-Gesetz anwenden, um Trägerfrequenzen aus Erkrankungshäufigkeiten zu berechnen",
        "Das Prinzip der Bayesschen Analyse bei der genetischen Risikoberechnung erläutern",
      ],
      sections: [
        {
          heading: "Hardy-Weinberg-Gesetz — Anwendung in der Praxis",
          text: "Das Hardy-Weinberg-Gesetz gilt unter folgenden Bedingungen: große Population, zufällige Partnerwahl (panmiktisch), keine Mutation, keine Selektion, kein Genfluss (Migration). In der Realität sind diese Bedingungen nie vollständig erfüllt, aber das Gesetz liefert trotzdem nützliche Näherungen. Klinische Anwendung: Wenn die Erkrankungsfrequenz einer autosomal rezessiven Erkrankung bekannt ist, kann die Trägerfrequenz berechnet werden. Beispiel Phenylketonurie: Erkrankungshäufigkeit ca. 1:10.000 in Europa → q² = 1/10.000 → q = 1/100 → Trägerfrequenz 2pq ≈ 2 × 99/100 × 1/100 ≈ 1/50. Abweichungen vom Hardy-Weinberg-Gleichgewicht können auf evolutionäre Einflüsse (z. B. Heterozygotenvorteil bei Sichelzellanämie in Malariaregionen) hinweisen.",
          merksatz:
            "Hardy-Weinberg: p² + 2pq + q² = 1. q² = Erkrankungshäufigkeit → q = Allelhäufigkeit → 2pq = Trägerfrequenz.",
        },
        {
          heading: "Nicht-Direktivität in der genetischen Beratung",
          text: "Das Prinzip der Nicht-Direktivität ist ein Kernprinzip der genetischen Beratung: Der Berater soll keine Empfehlung geben, was der Patient tun soll, sondern nur sachliche Information und emotionale Unterstützung bereitstellen. Hintergrund: Historische Erfahrungen mit Eugenik (z. B. Zwangssterilisierungen im Nationalsozialismus) haben die Genetik zu besonderer Zurückhaltung veranlasst. In der Praxis ist strikte Nicht-Direktivität schwer umzusetzen, da Berater durch Betonung bestimmter Informationen die Entscheidung beeinflussen. Aktuelle Diskussion: In manchen Kontexten (z. B. pränatale Diagnose einer schweren letalen Erkrankung) wird mehr patientenzentrierte Beratung gefordert, die auch Behandlungsempfehlungen einschließen kann.",
          merksatz:
            "Nicht-Direktivität: Berater informiert, entscheidet nicht. Autonomie und Selbstbestimmung des Ratsuchenden stehen im Mittelpunkt.",
        },
      ],
      merksätze: [
        "Hardy-Weinberg: p² + 2pq + q² = 1; p+q = 1. Gilt für: große Population, Panmixie, kein Selektionsdruck.",
        "Trägerfrequenz berechnen: q² (Erkrankungsrate) → q (Allelfrequenz) → 2pq (Trägerfrequenz).",
        "Bayessche Analyse: Prior × Likelihood → Posterior; aktualisiert Wahrscheinlichkeit mit neuer Information.",
      ],
      klinischerBezug:
        "Im Rahmen der präkonzeptionellen Beratung bei Risikofamilien (z. B. bekannte BRCA-Mutation, Mukoviszidose-Träger) wird genetische Beratung angeboten. In Österreich regelt das Genanalysegesetz (GAG) die Rahmenbedingungen für prädiktive Gentests: Beratungspflicht vor und nach dem Test, kein Testen von Minderjährigen ohne therapeutischen Nutzen.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Die Häufigkeit der Mukoviszidose beträgt in der europäischen Bevölkerung etwa 1:2.500. Berechnen Sie die Trägerfrequenz mithilfe des Hardy-Weinberg-Gesetzes.",
        answer:
          "Gegeben: q² = 1/2.500 (Erkrankungshäufigkeit). Daraus folgt: q = 1/50 (Häufigkeit des pathogenen CFTR-Allels). Da p + q = 1 gilt: p = 49/50. Trägerfrequenz = 2pq = 2 × (49/50) × (1/50) = 98/2.500 ≈ 1/25. Etwa jede 25. Person in der europäischen Bevölkerung ist heterozygoter Träger des CFTR-Allels.",
      },
      selfTest: [
        {
          question:
            "Beide Eltern sind heterozygote Träger (Aa) einer autosomal rezessiven Erkrankung. Wie hoch ist die Wahrscheinlichkeit, dass ihr nächstes Kind erkrankt?",
          options: ["50%", "25%", "75%", "100%", "12,5%"],
          correctIndex: 1,
          explanation:
            "Bei zwei heterozygoten Trägern (Aa × Aa) ergibt sich nach dem Mendelschen Spaltungsgesetz: 25% AA (gesund, kein Träger), 50% Aa (gesund, Träger), 25% aa (erkrankt). Das Erkrankungsrisiko für jedes Kind beträgt unabhängig von den Geschwistern 25%.",
          hints: [
            "Erstellen Sie einen Punnett-Quadrat: Aa × Aa.",
            "Die Erkrankung ist autosomal rezessiv — das Kind muss zwei pathogene Allele (aa) haben, um zu erkranken.",
          ],
          difficulty: 1,
          tags: ["autosomal-rezessiv", "erkrankungsrisiko", "punnett", "mendel"],
        },
        {
          question:
            "Die Häufigkeit einer autosomal rezessiven Erkrankung beträgt 1:10.000. Wie hoch ist die Trägerfrequenz in der Population (Hardy-Weinberg-Gesetz)?",
          options: ["1:100", "1:50", "1:25", "Etwa 2:100 (1:50)", "1:10.000"],
          correctIndex: 1,
          explanation:
            "q² = 1/10.000 → q = 1/100. p = 1 - 1/100 = 99/100. Trägerfrequenz = 2pq = 2 × (99/100) × (1/100) = 198/10.000 ≈ 1/50. Etwa jede 50. Person ist heterozygoter Träger des pathogenen Allels.",
          hints: [
            "Hardy-Weinberg: q² = Erkrankungshäufigkeit → nehmen Sie die Wurzel für q.",
            "Trägerfrequenz = 2pq, wobei p ≈ 1 wenn q sehr klein ist.",
          ],
          difficulty: 3,
          tags: ["hardy-weinberg", "trägerfrequenz", "allelfrequenz", "berechnung"],
        },
        {
          question: "Was bedeutet 'Nicht-Direktivität' in der genetischen Beratung?",
          options: [
            "Der Berater darf dem Patienten keine Diagnose mitteilen",
            "Der Berater informiert sachlich, trifft aber keine Entscheidungen für den Patienten — die Autonomie des Patienten wird respektiert",
            "Genetische Beratung muss ohne schriftliche Dokumentation erfolgen",
            "Der Berater empfiehlt immer die sicherste medizinische Option",
            "Genetische Tests dürfen nur ohne Beratung durchgeführt werden",
          ],
          correctIndex: 1,
          explanation:
            "Nicht-Direktivität ist ein ethisches Kernprinzip der genetischen Beratung: Der Berater stellt sachliche Informationen über Erkrankung, Erbgang und Risiken zur Verfügung und unterstützt die Entscheidungsfindung, ohne eigene Empfehlungen zu geben. Die Entscheidungshoheit verbleibt beim Ratsuchenden. Historischer Hintergrund: Negative Erfahrungen mit direktiver Eugenik haben dieses Prinzip etabliert.",
          hints: [
            "Denken Sie an das Prinzip der Patientenautonomie in der Medizinethik.",
            "'Nicht-direktiv' bedeutet, keine Richtung vorzugeben — der Patient entscheidet selbst.",
          ],
          difficulty: 2,
          tags: ["nicht-direktivitaet", "genetische-beratung", "autonomie", "ethik"],
        },
        {
          question: "Unter welchen Bedingungen gilt das Hardy-Weinberg-Gleichgewicht?",
          options: [
            "Kleine isolierte Population mit hoher Inzuchtrate",
            "Große Population, zufällige Partnerwahl, keine Mutation, keine Selektion, kein Genfluss",
            "Population mit starker natürlicher Selektion auf das betrachtete Allel",
            "Population mit bekannten Migrationsbewegungen und Genfluss",
            "Hardy-Weinberg gilt immer und unter allen Bedingungen",
          ],
          correctIndex: 1,
          explanation:
            "Das Hardy-Weinberg-Gleichgewicht gilt unter idealisierten Bedingungen: (1) große Population (kein Gendrift), (2) zufällige Partnerwahl (Panmixie), (3) keine Mutation, (4) keine Selektion (alle Genotypen gleich fit), (5) kein Genfluss (keine Migration). Abweichungen von diesen Bedingungen verändern die Allelhäufigkeiten über Generationen.",
          hints: [
            "Hardy-Weinberg beschreibt eine Gleichgewichtssituation ohne evolutionäre Kräfte.",
            "Merken Sie sich fünf Bedingungen: große Population, Panmixie, keine Mutation, keine Selektion, kein Genfluss.",
          ],
          difficulty: 2,
          tags: ["hardy-weinberg", "gleichgewicht", "bedingungen", "panmixie"],
        },
        {
          question: "Was ermöglicht die Bayessche Analyse in der genetischen Risikoberechnung?",
          options: [
            "Die direkte Bestimmung der Gensequenz aus Stammbaumdaten",
            "Die Aktualisierung einer Vorinformation (Prior) mit neuer Information zu einer aktualisierten Wahrscheinlichkeit (Posterior)",
            "Die Berechnung der Trägerfrequenz aus der Erkrankungshäufigkeit",
            "Die Bestimmung des Erbgangs aus dem Stammbaum allein",
            "Die Berechnung des Erkrankungsrisikos ohne Stammbaumdaten",
          ],
          correctIndex: 1,
          explanation:
            "Die Bayessche Analyse kombiniert eine Vorinformation (Prior-Wahrscheinlichkeit) mit neuer, zusätzlicher Information (Likelihood) zu einer aktualisierten Wahrscheinlichkeit (Posterior). In der Genetik wird sie beispielsweise verwendet, um die Konduktorinnenwahrscheinlichkeit einer Frau neu zu berechnen, wenn sie mehrere gesunde Söhne hat (zusätzliche Information, die die Prior-Wahrscheinlichkeit reduziert).",
          hints: [
            "Bayessche Statistik: neue Evidenz aktualisiert bestehende Wahrscheinlichkeiten.",
            "Prior + Likelihood → Posterior. Die gesunden Söhne liefern neue Information über die Konduktorinnenwahrscheinlichkeit.",
          ],
          difficulty: 3,
          tags: ["bayes", "prior", "posterior", "risikoberechnung"],
        },
      ],
    },
    {
      id: "bio-8-04",
      title: "PID, PND und Pränataldiagnostik — Methoden und Ethik",
      content: `## Pränataldiagnostik — Überblick

**Pränataldiagnostik (PND)** umfasst alle Methoden zur Untersuchung des Embryos/Feten vor der Geburt auf strukturelle, chromosomale oder genetische Auffälligkeiten. Ziel: Information und Beratung der Eltern; gegebenenfalls Einleitung von Therapien (intrauterine Eingriffe) oder Vorbereitung auf ein behindertes Kind.

## Ultraschall

Der **Ultraschall** ist die wichtigste nicht-invasive Methode. Im ersten Trimester (11.–13. SSW) wird die **Nackentransparenz (NT-Messung)** durchgeführt: eine verdickte Nackenfalte korreliert mit erhöhtem Trisomie-21-Risiko. Weitere Strukturen: Nasenbein, Herzaktionen. Organultraschall (18.–20. SSW) untersucht alle Organe auf Fehlbildungen.

## Serumscreening und NIPT

**Ersttrimester-Screening (ETS):** Kombination aus NT-Messung und Serummarkern (PAPP-A, freies Beta-HCG) berechnet ein statistisches Risiko für Trisomie 21, 18, 13.

**NIPT (Nicht-invasiver Pränataltest):** Sequenzierung zellfreier fetaler DNA (cffDNA) aus dem mütterlichen Blut ab der 10. SSW. Hohe Sensitivität und Spezifität für Trisomie 21 (>99%), 18, 13 und Geschlechtschromosom-Aneuploidien. Kein Fehlgeburtsrisiko, aber keine diagnostische Sicherheit (Screeningtest, keine Diagnose).

## Invasive Methoden

**Chorionzottenbiopsie (CVS):** Entnahme von Chorionzottengewebe (fetaler Herkunft) transabdominal oder transzervikal in der 11.–13. SSW. Fehlgeburtsrisiko: ca. 0,5–1%. Ermöglicht Chromosomenanalyse (Karyotyp) und molekulargenetische Tests.

**Amniozentese:** Entnahme von Fruchtwasser (15–20 ml) transabdominal in der 16.–18. SSW. Fehlgeburtsrisiko: ca. 0,3–0,5%. Fetale Zellen werden kultiviert für Karyotyp oder direkte DNA-Analyse.

## PID — Präimplantationsdiagnostik

**PID (Präimplantationsdiagnostik)** untersucht Embryonen im Rahmen einer In-vitro-Fertilisation (IVF) vor dem Einsetzen in die Gebärmutter. Biopsie einer oder weniger Zellen (Blastomere) am 3. Tag oder Trophoblastzellen am 5./6. Tag (Blastozyste). Anwendung: Paare mit bekanntem hohem Risiko für schwere Erbkrankheiten (z. B. Mukoviszidose, Huntington).

**Rechtliche Lage:** In Österreich ist PID seit 2015 unter strengen Voraussetzungen erlaubt (Fortpflanzungsmedizinrechts-Änderungsgesetz). In Deutschland seit 2011 eingeschränkt erlaubt.

## Ethische Aspekte

- **Selektion von Embryonen:** Wann beginnt schutzwürdiges Leben? Ablehnung unerwünschter Embryonen (Diskriminierung von Behinderten?)
- **Slippery slope:** Weg von medizinischer Indikation zu Designerbabys ("Wunschkind")?
- **Druck auf Betroffene:** Gesellschaftlicher Druck, Kinder mit Behinderungen nicht auszutragen
- **Ressourcenverteilung:** Kostenintensive Methoden für wen zugänglich?`,
      lernziele: [
        "Die Methoden der Pränataldiagnostik (Ultraschall, NIPT, Amniozentese, CVS) mit Zeitpunkt und Risiken beschreiben",
        "PID von PND abgrenzen und die Voraussetzungen für PID in Österreich nennen",
        "Ethische Argumente für und gegen PID und PND darlegen",
      ],
      sections: [
        {
          heading: "NIPT — Revolution in der Pränataldiagnostik",
          text: "Zellfreie fetale DNA (cffDNA) macht ab der 10. SSW etwa 5–15% der gesamten zellfreien DNA im mütterlichen Blut aus. NIPT-Tests sequenzieren diese DNA und analysieren die relative Häufigkeit der Chromosomen: Beim Vorliegen einer Trisomie 21 ist der Anteil an Chromosom-21-Sequenzen leicht erhöht. Die Sensitivität für Trisomie 21 übersteigt 99%, die Spezifität 99,9%. Damit ist NIPT dem Ersttrimester-Screening in der Präzision weit überlegen. Allerdings bleibt NIPT ein Screening-Test: Bei positiven Ergebnissen muss immer eine invasive Methode (Amniozentese, CVS) zur Bestätigung angeboten werden. Wichtige Einschränkungen: Falsch-positive Befunde durch mütterliche Chromosomenstörungen oder Plazentamosaike; für seltene Syndrome weniger validiert.",
          merksatz:
            "NIPT: cffDNA aus Mutterblut ab 10. SSW → hohe Sensitivität für Trisomie 21 (>99%), kein Fehlgeburtsrisiko, aber nur Screening (kein Diagnosetest).",
        },
        {
          heading: "Amniozentese vs. Chorionzottenbiopsie — Vergleich",
          text: "Amniozentese und Chorionzottenbiopsie sind beide invasive diagnostische Methoden mit geringem, aber realem Fehlgeburtsrisiko. Die CVS kann früher durchgeführt werden (11.–13. SSW vs. 16.–18. SSW bei Amniozentese), ermöglicht also frühere Entscheidungen. Allerdings besteht bei CVS ein leicht höheres Fehlgeburtsrisiko. Die Amniozentese nutzt fetale Zellen aus dem Fruchtwasser, die kultiviert werden müssen (Wartezeit 2–3 Wochen), während CVS-Zellen direkt genetisch analysiert werden können (schnellere FISH-Ergebnisse in 48 Stunden). Beide liefern einen vollständigen Karyotyp und ermöglichen molekulargenetische Analysen.",
          merksatz:
            "CVS: 11.–13. SSW, Fehlgeburtsrisiko ~1%. Amniozentese: 16.–18. SSW, Fehlgeburtsrisiko ~0,5%. CVS = früher, etwas mehr Risiko.",
        },
      ],
      merksätze: [
        "NIPT: Nicht-invasiv, ab 10. SSW, cffDNA aus Mutterblut, >99% Sensitivität für Trisomie 21, kein Fehlgeburtsrisiko.",
        "CVS (11.–13. SSW) vs. Amniozentese (16.–18. SSW): beide invasiv, beide liefern Karyotyp, CVS früher aber etwas höheres Risiko.",
        "PID: Diagnostik VOR Einsetzen des IVF-Embryos → nur bei hohem Risiko für schwere Erbkrankheiten erlaubt.",
      ],
      klinischerBezug:
        "NIPT hat in vielen europäischen Ländern das Erstrimester-Screening als Erstlinienmethode abgelöst. In Österreich ist NIPT seit 2020 im Mutter-Kind-Pass-Programm vorgesehen. Bei Trisomie 21 (Down-Syndrom, Häufigkeit ca. 1:700–1:800 Geburten) ist eine nicht-direktive Beratung essenziell, da Betroffene ein breites Spektrum an Lebensqualität zeigen.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Was ist der Unterschied zwischen PID und PND, und wann wird jede Methode eingesetzt?",
        answer:
          "PID (Präimplantationsdiagnostik) untersucht Embryonen vor der Einpflanzung in die Gebärmutter im Rahmen einer IVF — sie findet also vor der Schwangerschaft statt. PND (Pränataldiagnostik) untersucht den Feten während einer bestehenden Schwangerschaft. PID wird eingesetzt, wenn Paare ein hohes genetisches Risiko haben und IVF bereit sind — sie vermeidet den Schwangerschaftsabbruch. PND wird routinemäßig oder bei Risikofaktoren während der Schwangerschaft angeboten.",
      },
      selfTest: [
        {
          question:
            "In welcher Schwangerschaftswoche wird die Amniozentese typischerweise durchgeführt?",
          options: ["6.–8. SSW", "11.–13. SSW", "16.–18. SSW", "24.–26. SSW", "32.–34. SSW"],
          correctIndex: 2,
          explanation:
            "Die Amniozentese wird typischerweise in der 16.–18. Schwangerschaftswoche (SSW) durchgeführt. Zu diesem Zeitpunkt ist genug Fruchtwasser vorhanden (15–20 ml können entnommen werden, ohne den Feten zu gefährden), und die fetalen Zellen im Fruchtwasser können für eine Chromosomenanalyse (Karyotyp) kultiviert werden. Das Fehlgeburtsrisiko beträgt ca. 0,3–0,5%.",
          hints: [
            "Amniozentese wird im zweiten Trimester durchgeführt — nach dem 15. Woche, wenn genügend Fruchtwasser vorhanden ist.",
            "Die Chorionzottenbiopsie (CVS) wird früher durchgeführt — merken Sie sich den Unterschied.",
          ],
          difficulty: 1,
          tags: ["amniozentese", "pränataldiagnostik", "ssw", "fruchtwasser"],
        },
        {
          question: "Was ist das Prinzip des NIPT (Nicht-invasiver Pränataltest)?",
          options: [
            "Entnahme von Chorionzottengewebe zur Chromosomenanalyse",
            "Sequenzierung zellfreier fetaler DNA (cffDNA) aus dem Blut der Mutter",
            "Ultraschallmessung der Nackentransparenz des Feten",
            "Analyse fetaler Zellen aus dem Urin der Mutter",
            "Messung von Hormonen im Blut der Mutter (PAPP-A, Beta-HCG)",
          ],
          correctIndex: 1,
          explanation:
            "NIPT (Nicht-invasiver Pränataltest) basiert auf der Sequenzierung zellfreier fetaler DNA (cffDNA), die ab der 10. SSW im Blut der Mutter nachweisbar ist. Diese fetale DNA stammt hauptsächlich aus Plazentazellen (Trophoblasten) und macht ca. 5–15% der gesamten zellfreien DNA im mütterlichen Blut aus. Durch Sequenzierung und Analyse der relativen Häufigkeit chromosomaler Sequenzen können Aneuploidien (z. B. Trisomie 21) erkannt werden.",
          hints: [
            "NIPT = Nicht-invasiv — kein Einstechen in den Uterus. Das Blut der Mutter genügt.",
            "cffDNA = cell-free fetal DNA — Fragmenten der fetalen DNA zirkulieren im mütterlichen Blutkreislauf.",
          ],
          difficulty: 1,
          tags: ["nipt", "cffDNA", "nicht-invasiv", "trisomie"],
        },
        {
          question:
            "Ein Paar mit einem bekannten hohen Risiko für Mukoviszidose (beide Eltern sind Träger) möchte die Geburt eines erkrankten Kindes vermeiden, ohne einen Schwangerschaftsabbruch in Betracht zu ziehen. Welche Option ist geeignet?",
          options: [
            "NIPT ab der 10. SSW",
            "Amniozentese in der 16. SSW mit anschließendem Schwangerschaftsabbruch bei positivem Befund",
            "Präimplantationsdiagnostik (PID) im Rahmen einer IVF",
            "Chorionzottenbiopsie in der 12. SSW",
            "Verzicht auf Kinder als einzige ethisch akzeptable Option",
          ],
          correctIndex: 2,
          explanation:
            "PID (Präimplantationsdiagnostik) ermöglicht die genetische Untersuchung von Embryonen vor dem Einsetzen in die Gebärmutter im Rahmen einer IVF. Nur Embryonen ohne die Mukoviszidose-Mutation werden eingesetzt. Damit kann ein erkranktes Kind verhindert werden, ohne dass eine bestehende Schwangerschaft abgebrochen werden muss. Dies ist für viele Paare eine ethisch akzeptablere Alternative zu PND mit Schwangerschaftsabbruch.",
          hints: [
            "Das Paar möchte keinen Schwangerschaftsabbruch — die Diagnostik muss also VOR der Schwangerschaft erfolgen.",
            "PID findet im Rahmen einer IVF statt — Embryonen werden analysiert, bevor sie eingesetzt werden.",
          ],
          difficulty: 2,
          tags: ["pid", "ivf", "praeimplantation", "mukoviszidose"],
        },
        {
          question: "Welches der folgenden Merkmale unterscheidet NIPT von der Amniozentese?",
          options: [
            "NIPT liefert einen vollständigen Karyotyp; Amniozentese nur für Trisomien",
            "NIPT hat kein Fehlgeburtsrisiko und ist ein Screeningtest; Amniozentese hat ein geringes Fehlgeburtsrisiko und ist diagnostisch",
            "NIPT kann nur im dritten Trimester durchgeführt werden; Amniozentese im zweiten",
            "NIPT analysiert mütterliche DNA; Amniozentese analysiert fetale Zellen",
            "NIPT und Amniozentese sind gleichwertige Methoden ohne wesentliche Unterschiede",
          ],
          correctIndex: 1,
          explanation:
            "Der wesentliche Unterschied: NIPT ist nicht-invasiv (kein Fehlgeburtsrisiko), kann ab der 10. SSW eingesetzt werden und ist hochsensitiv für häufige Trisomien — aber es bleibt ein Screeningtest, der bei positivem Befund durch invasive Diagnostik bestätigt werden muss. Die Amniozentese ist invasiv (Fehlgeburtsrisiko ~0,3–0,5%), liefert aber einen vollständigen Karyotyp und ermöglicht eine definitive Diagnose.",
          hints: [
            "NIPT = nicht-invasiv → kein Fehlgeburtsrisiko. Was ist der Preis dafür?",
            "Screeningtest vs. Diagnosetest: Welcher liefert ein definitives Ergebnis?",
          ],
          difficulty: 2,
          tags: ["nipt", "amniozentese", "vergleich", "screening-vs-diagnose"],
        },
        {
          question:
            "Die Nackentransparenz (NT-Messung) im Ultraschall ist ein Screening-Parameter für welche Chromosomenstörung?",
          options: [
            "Turner-Syndrom (45,X)",
            "Klinefelter-Syndrom (47,XXY)",
            "Trisomie 21 (Down-Syndrom)",
            "Trisomie 13 (Pätau-Syndrom) — ausschließlich",
            "Translokationen zwischen Chromosom 1 und 2",
          ],
          correctIndex: 2,
          explanation:
            "Eine vergrößerte Nackentransparenz (NT > 3 mm, gemessen in der 11.–13. SSW) ist der wichtigste Ultraschallmarker für ein erhöhtes Risiko einer Trisomie 21 (Down-Syndrom). Sie kann auch bei anderen Chromosomenstörungen (Trisomie 18, 13, Turner-Syndrom) und bestimmten Herzfehlern erhöht sein. NT allein ist kein Diagnosetest, sondern ein Risikomarker — das Ergebnis wird mit mütterlichem Alter und Serummarkern (PAPP-A, Beta-HCG) kombiniert.",
          hints: [
            "Die Nackentransparenz wird in der 11.–13. SSW gemessen — im ersten Trimester-Screening.",
            "Down-Syndrom (Trisomie 21) ist die häufigste chromosomale Ursache geistiger Behinderung — welcher Ultraschallbefund korreliert damit?",
          ],
          difficulty: 1,
          tags: ["nackentransparenz", "trisomie-21", "ultraschall", "ersttrimester"],
        },
      ],
    },
  ],
};
