import type { Kapitel } from '../types';

export const bioKap5: Kapitel = {
  id: 'bio-kap5',
  title: "Klassische Genetik",
  subject: 'biologie',
  icon: '🧬',
  estimatedTime: '120 min',
  unterkapitel: [
    {
      id: 'bio-5-01',
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
          merksatz: "Genotyp = genetische Ausstattung (AA, Aa, aa); Phänotyp = sichtbares Merkmal. Dominant setzt sich durch, rezessiv nur bei aa sichtbar.",
        },
        {
          heading: "Mendelsche Regeln",
          text: "Die 1. Mendelsche Regel (Uniformitätsregel) besagt: Homozygote Eltern (AA × aa) liefern in F₁ 100% uniforme Heterozygote (Aa). Die 2. Regel (Spaltungsregel): F₁-Hybriden (Aa × Aa) spalten in F₂ im Verhältnis 3:1 (Phänotyp) bzw. 1:2:1 (Genotyp). Die 3. Regel (Unabhängigkeitsregel): Zwei unabhängige Gene (RrGg × RrGg) ergeben in F₂ das Verhältnis 9:3:3:1.",
          merksatz: "1. Uniformität (AA × aa → 100% Aa), 2. Spaltung (Aa × Aa → 3:1 Phänotyp), 3. Unabhängigkeit (RrGg × RrGg → 9:3:3:1).",
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
      selfTest: [
        {
          question: "Welche Aussage über genetische Grundbegriffe ist korrekt?",
          options: [
          "Der Genotyp ist das sichtbare Merkmal eines Organismus.",
          "Ein heterozygoter Organismus hat zwei identische Allele für ein Gen.",
          "Der Genotyp ist die genetische Ausstattung (Allel-Kombination), der Phänotyp ist das sichtbare Merkmal. Homozygot bedeutet beide Allele gleich (AA oder aa), heterozygot bedeutet beide Allele unterschiedlich (Aa). Ein dominantes Allel (A) setzt sich auch bei Heterozygoten durch, ein rezessives Allel (a) ist nur bei Homozygoten (aa) sichtbar.",
          "Allele sind unterschiedliche Gene auf verschiedenen Chromosomen.",
          "Ein rezessives Allel setzt sich auch bei Heterozygoten durch."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** **Genetische Grundbegriffe:**\n\n**Gen vs. Allel:**\n- **Gen:** DNA-Abschnitt, kodiert für ein Merkmal (z. B. Gen für Blütenfarbe)\n- **Allel:** **Variante** eines Gens (z. B. A [rot], a [weiß])\n\n**Genotyp vs. Phänotyp:**\n- **Genotyp:** **Genetische Ausstattung** (Allel-Kombination, z. B. AA, Aa, aa)\n- **Phänotyp:** **Sichtbares Merkmal** (Ausprägung, z. B. rote Blüte, weiße Blüte)\n\n**Homozygot vs. Heterozygot:**\n- **Homozygot:** Beide Allele **gleich**\n  - **AA** (homozygot dominant)\n  - **aa** (homozygot rezessiv)\n- **Heterozygot:** Beide Allele **unterschiedlich** (**Aa**)\n\n**Dominant vs. Rezessiv:**\n- **Dominant** (Großbuchstabe, A):\n  - Setzt sich durch, auch bei **Heterozygoten** (Aa) sichtbar\n  - **AA** → dominant Phänotyp (z. B. rot)\n  - **Aa** → dominant Phänotyp (z. B. rot)\n- **Rezessiv** (Kleinbuchstabe, a):\n  - Nur bei **Homozygoten** (aa) sichtbar\n  - **aa** → rezessiv Phänotyp (z. B. weiß)\n\n**Falsch (A):** **Phänotyp** (nicht Genotyp) = sichtbares Merkmal. Genotyp = genetische Ausstattung.\n\n**Falsch (B):** **Homozygot** (nicht heterozygot) = zwei identische Allele. Heterozygot = unterschiedliche Allele (Aa).\n\n**Falsch (D):** Allele = **Varianten desselben Gens** (auf homologen Chromosomen), nicht unterschiedliche Gene.\n\n**Falsch (E):** **Dominantes** (nicht rezessives) Allel setzt sich bei Heterozygoten durch. Rezessiv nur sichtbar bei aa.",
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Aussage über die 1. Mendelsche Regel (Uniformitätsregel) ist korrekt?",
          options: [
          "Bei Kreuzung zweier heterozygoter Eltern (Aa × Aa) ist die F₁-Generation uniform.",
          "Bei Kreuzung zweier homozygoter Eltern mit unterschiedlichen Merkmalen (AA × aa) ist die F₁-Generation uniform (100% Aa) und zeigt den dominanten Phänotyp (100% rot, wenn A dominant).",
          "Die F₁-Generation zeigt ein Spaltungsverhältnis von 3:1.",
          "Die 1. Mendelsche Regel beschreibt die Vererbung von zwei Merkmalen gleichzeitig.",
          "Bei Kreuzung AA × aa ist die F₁-Generation zu 50% AA und 50% aa."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** **1. Mendelsche Regel** (Uniformitätsregel):\n\n**Regel:** Kreuzt man **reinerbige (homozygote)** Eltern mit **unterschiedlichen Merkmalen**, sind alle Nachkommen der **F₁-Generation uniform** (gleich im Genotyp + Phänotyp).\n\n**Beispiel:** Blütenfarbe (A rot dominant, a weiß rezessiv)\n\n**Kreuzung:**\n- **P** (Elterngeneration): **AA** (rot, homozygot dominant) × **aa** (weiß, homozygot rezessiv)\n- **Gameten:** A × a\n- **F₁:** **100% Aa** (heterozygot)\n- **Phänotyp F₁:** **100% rot** (A dominant über a)\n\n**Wichtig:**\n- F₁ ist **uniform** (alle Aa, alle rot)\n- **Kein** Spaltungsverhältnis (das kommt erst in F₂, 2. Mendelsche Regel)\n\n**Falsch (A):** Heterozygote Eltern (Aa × Aa) → F₁ **nicht uniform** (Spaltung 3:1, 2. Mendelsche Regel). 1. Regel gilt nur für **homozygote** Eltern.\n\n**Falsch (C):** **3:1-Spaltung** tritt in **F₂** auf (Aa × Aa), nicht F₁. F₁ ist uniform.\n\n**Falsch (D):** 1. Mendelsche Regel = **monohybrider** Erbgang (1 Merkmal). **2 Merkmale** = 3. Mendelsche Regel (Unabhängigkeitsregel, dihybrider Erbgang).\n\n**Falsch (E):** AA × aa → F₁ **100% Aa** (nicht 50% AA, 50% aa). Alle F₁ sind heterozygot (Aa).",
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Aussage über die 2. Mendelsche Regel (Spaltungsregel) ist korrekt?",
          options: [
          "Bei Kreuzung zweier F₁-Hybriden (Aa × Aa) ist die F₂-Generation uniform.",
          "Bei Kreuzung Aa × Aa beträgt das Phänotyp-Verhältnis in F₂ immer 1:2:1.",
          "Bei Kreuzung zweier F₁-Hybriden (Aa × Aa) spaltet sich die F₂-Generation auf. Das Genotyp-Verhältnis ist 1 AA : 2 Aa : 1 aa (1:2:1). Bei dominant-rezessiver Vererbung ist das Phänotyp-Verhältnis 3 dominant : 1 rezessiv (3:1), da AA und Aa beide den dominanten Phänotyp zeigen.",
          "Das Genotyp-Verhältnis in F₂ beträgt 3:1.",
          "Die 2. Mendelsche Regel gilt nur für die Vererbung von zwei Merkmalen."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** **2. Mendelsche Regel** (Spaltungsregel):\n\n**Regel:** Kreuzt man **F₁-Hybriden** (Aa × Aa), **spaltet** sich die F₂-Generation in einem bestimmten Verhältnis auf.\n\n**Kreuzung:** Aa × Aa (beide heterozygot)\n\n**Punnett-Quadrat:**\n\n|       | **A** | **a** |\n|-------|-------|-------|\n| **A** | **AA** | **Aa** |\n| **a** | **Aa** | **aa** |\n\n**Ergebnis:**\n\n**Genotyp-Verhältnis:** **1 AA : 2 Aa : 1 aa** (1:2:1)\n- 1/4 AA (homozygot dominant)\n- 2/4 Aa (heterozygot)\n- 1/4 aa (homozygot rezessiv)\n\n**Phänotyp-Verhältnis (dominant-rezessiv):** **3:1**\n- **AA** (1/4) → dominant Phänotyp (z. B. rot)\n- **Aa** (2/4) → dominant Phänotyp (z. B. rot, A dominant)\n- **aa** (1/4) → rezessiv Phänotyp (z. B. weiß)\n- **3 dominant : 1 rezessiv** (3:1)\n\n**WICHTIG:** Phänotyp-Verhältnis **3:1** gilt nur bei **dominant-rezessiver** Vererbung. Bei **intermediärer** Dominanz: Phänotyp = Genotyp (1:2:1).\n\n**Falsch (A):** F₂ ist **nicht uniform**, sondern **spaltet** auf (3:1 Phänotyp). Uniform = F₁ (1. Mendelsche Regel).\n\n**Falsch (B):** Phänotyp-Verhältnis **3:1** (nicht 1:2:1) bei dominant-rezessiver Vererbung. **1:2:1** = Genotyp-Verhältnis (oder Phänotyp bei intermediär).\n\n**Falsch (D):** **Genotyp-Verhältnis 1:2:1** (nicht 3:1). **3:1** = Phänotyp-Verhältnis.\n\n**Falsch (E):** 2. Mendelsche Regel = **monohybrider** Erbgang (1 Merkmal). **2 Merkmale** = 3. Mendelsche Regel.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über die 3. Mendelsche Regel (Unabhängigkeitsregel) ist korrekt?",
          options: [
          "Die 3. Mendelsche Regel beschreibt die Vererbung eines einzelnen Merkmals.",
          "Bei Kreuzung RrGg × RrGg beträgt das Phänotyp-Verhältnis in F₂ immer 3:1.",
          "Gene für verschiedene Merkmale werden unabhängig voneinander vererbt (wenn auf verschiedenen Chromosomen oder weit auseinander). Bei dihybridem Erbgang (RrGg × RrGg) beträgt das F₂-Phänotyp-Verhältnis 9:3:3:1 (9 R_G_, 3 R_gg, 3 rrG_, 1 rrgg), wenn beide Merkmale dominant-rezessiv vererbt werden.",
          "Die 3. Mendelsche Regel gilt nur, wenn die Gene auf demselben Chromosom gekoppelt sind.",
          "Das Verhältnis 9:3:3:1 tritt in der F₁-Generation auf."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** **3. Mendelsche Regel** (Unabhängigkeitsregel, Neukombinationsregel):\n\n**Regel:** Gene für **verschiedene Merkmale** werden **unabhängig** voneinander vererbt (wenn auf **verschiedenen Chromosomen** liegen oder weit auseinander auf demselben Chromosom → keine Kopplung).\n\n**Dihybrider Erbgang** (2 Merkmale):\n\n**Beispiel:** Samenform (R rund dominant, r runzelig rezessiv) + Samenfarbe (G gelb dominant, g grün rezessiv)\n\n**Kreuzung:**\n- **P:** RRGG (rund, gelb) × rrgg (runzelig, grün)\n- **F₁:** **100% RrGg** (rund, gelb, uniform)\n\n**F₁ × F₁:** RrGg × RrGg\n\n**Gameten (F₁):** RG, Rg, rG, rg (je 1/4, **unabhängige Verteilung**)\n\n**F₂-Phänotyp-Verhältnis:** **9:3:3:1**\n- **9/16** rund, gelb (R_G_: RRGG, RRGg, RrGG, RrGg)\n- **3/16** rund, grün (R_gg: RRgg, Rrgg)\n- **3/16** runzelig, gelb (rrG_: rrGG, rrGg)\n- **1/16** runzelig, grün (rrgg)\n\n**Voraussetzung:** **Unabhängige Vererbung** (verschiedene Chromosomen oder keine Kopplung). Bei **Kopplung** (Gene auf demselben Chromosom, nah beieinander) → **abweichendes** Verhältnis.\n\n**Falsch (A):** 3. Mendelsche Regel = **mehrere Merkmale** (dihybrider Erbgang), nicht ein einzelnes Merkmal (das wäre 2. Regel).\n\n**Falsch (B):** **9:3:3:1** (nicht 3:1) bei dihybridem Erbgang. **3:1** = monohybrider Erbgang (1 Merkmal, 2. Mendelsche Regel).\n\n**Falsch (D):** 3. Mendelsche Regel gilt bei **unabhängiger** Vererbung (verschiedene Chromosomen oder keine Kopplung). Bei **Kopplung** (Gene nah beieinander auf demselben Chromosom) → abweichendes Verhältnis.\n\n**Falsch (E):** **9:3:3:1** tritt in **F₂** auf (nicht F₁). F₁ ist uniform (100% RrGg).",
          difficulty: 3,
          tags: [],
        },
        {
          question: "Welche Aussage über Dominanz-Verhältnisse ist korrekt?",
          options: [
          "Bei intermediärer Dominanz zeigen AA und Aa denselben Phänotyp.",
          "Bei Kodominanz zeigt Aa einen Mischphänotyp.",
          "Bei intermediärer (unvollständiger) Dominanz zeigt Aa einen Mischphänotyp (z. B. Wunderblume: AA rot, Aa rosa, aa weiß), das F₂-Phänotyp-Verhältnis ist 1:2:1 (= Genotyp). Bei Kodominanz werden beide Allele gleichzeitig exprimiert (z. B. AB0-Blutgruppen: A^A B^B → AB, beide Antigene vorhanden).",
          "Bei dominant-rezessiver Vererbung ist das F₂-Phänotyp-Verhältnis immer 1:2:1.",
          "Kodominanz bedeutet, dass ein Allel vollständig dominant über das andere ist."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** **Dominanz-Verhältnisse:**\n\n**1. Dominant-rezessiv:**\n- **Genotyp → Phänotyp:** AA = Aa ≠ aa\n- **Beispiel:** Blütenfarbe (A rot, a weiß): AA/Aa → rot, aa → weiß\n- **F₂-Verhältnis (Aa × Aa):** Genotyp 1:2:1 (AA:Aa:aa), Phänotyp **3:1** (rot:weiß)\n\n**2. Intermediär** (unvollständige Dominanz):\n- **Heterozygot (Aa):** **Mischphänotyp** (zwischen AA und aa)\n- **Beispiel:** Wunderblume (Mirabilis jalapa):\n  - AA → rot\n  - **Aa → rosa** (Mischung)\n  - aa → weiß\n- **F₂-Verhältnis (Aa × Aa):** Genotyp 1:2:1 (AA:Aa:aa), Phänotyp **1:2:1** (1 rot : 2 rosa : 1 weiß)\n- **WICHTIG:** Phänotyp = Genotyp (1:2:1), nicht 3:1!\n\n**3. Kodominanz:**\n- **Beide Allele gleichzeitig exprimiert** (nicht gemischt!)\n- **Beispiel:** **AB0-Blutgruppen**\n  - Allele: A^A, B^B, 0\n  - A^A dominant über 0, B^B dominant über 0, **A^A + B^B kodominant**\n  - **Genotyp → Phänotyp:**\n    - A^A^A, A^A0 → **A** (A-Antigen)\n    - B^BB^B, B^B0 → **B** (B-Antigen)\n    - **A^AB^B** → **AB** (beide Antigene gleichzeitig exprimiert)\n    - 00 → **0** (keine Antigene)\n- **WICHTIG:** Bei AB sind **beide Allele sichtbar** (A + B Antigene), nicht gemischt!\n\n**Falsch (A):** Bei **intermediär** zeigt Aa **Mischphänotyp** (rosa), nicht gleich wie AA (rot). AA ≠ Aa ≠ aa.\n\n**Falsch (B):** Bei **Kodominanz** werden **beide Allele exprimiert** (z. B. AB: A + B Antigene), nicht gemischt. **Intermediär** = Mischphänotyp.\n\n**Falsch (D):** Bei dominant-rezessiv: F₂-Phänotyp **3:1** (nicht 1:2:1). **1:2:1** = Genotyp oder Phänotyp bei intermediär.\n\n**Falsch (E):** Kodominanz = **beide Allele gleichzeitig exprimiert** (nicht ein Allel dominant über das andere).",
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: 'bio-5-02',
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
          merksatz: "46,XX = weiblich; 46,XY = männlich. p-Arm = kurz, q-Arm = lang. Telomere schützen, verkürzen sich bei jeder Teilung.",
        },
        {
          heading: "Numerische Chromosomenaberrationen",
          text: "Trisomie 21 (Down-Syndrom, 47,+21) ist die häufigste Autosom-Trisomie (1:700), mit fazialer Dysmorphie, Herzfehlern und geistiger Behinderung. Klinefelter-Syndrom (47,XXY) ist männlich mit Hypogonadismus und Infertilität. Turner-Syndrom (45,X) ist weiblich mit Kleinwuchs, Pterygium colli und Ovarial-Dysgenesie. Das Risiko für Nicht-Disjunktionsfehler steigt mit dem mütterlichen Alter.",
          merksatz: "Klinefelter (47,XXY): männlich, Hypogonadismus, Infertilität. Turner (45,X): weiblich, Kleinwuchs, Streak-Gonaden.",
        },
        {
          heading: "Strukturelle Chromosomenaberrationen",
          text: "Deletion (Verlust), Duplikation (Verdopplung), Translokation (Verlagerung) und Inversion (Drehung) sind strukturelle Aberrationen. Wichtige klinische Syndrome: Cri-du-chat (5p-Deletion), Williams-Beuren (7q11.23) und DiGeorge (22q11, CATCH-22). Balancierte Translokationen sind beim Träger oft klinisch unauffällig, erhöhen aber das Risiko für unbalancierte Nachkommen.",
          merksatz: "Cri-du-chat = 5p-Deletion (Katzenschrei). DiGeorge = 22q11 (CATCH-22: Cardiac, Abnormal face, Thymus, Cleft, Hypokalzämie).",
        },
      ],
      diagram: 'mitosis',

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
          "Das Kinetochor ist ein DNA-Abschnitt auf dem Chromosom."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** **Chromosomen-Struktur:**\n\n**Chromatid vs. Chromosom:**\n- **Chromatid:** 1 DNA-Doppelstrang + Histone (nach Replikation)\n- **Chromosom** (metaphasisch): **2 Schwester-Chromatiden** (identisch), verbunden am Zentromer\n\n**Komponenten:**\n\n1. **Zentromer** (Centromer):\n   - **Verbindet** die 2 Schwester-Chromatiden\n   - Ansatzpunkt für **Kinetochor**\n   - Position definiert Chromosomentyp: metazentrisch (Mitte), submetazentrisch (leicht verschoben), akrozentrisch (sehr nah am Ende)\n\n2. **Kinetochor:**\n   - **Protein-Komplex** am Zentromer\n   - **Spindelfasern** (Mikrotubuli) heften an → Chromatiden-Trennung (Anaphase)\n\n3. **Telomere:**\n   - **Chromosomenenden**\n   - DNA-Sequenz: **TTAGGG-Repeats** (Tandem-Repeats, hunderte Wiederholungen)\n   - **Funktionen:**\n     - **Schutz** vor Abbau durch Exonukleasen\n     - Verhindern Fusion mit anderen Chromosomen\n   - **Verkürzung:** Bei jeder **Zellteilung** (DNA-Polymerase kann Enden nicht vollständig replizieren) → Seneszenz (Alterung, Hayflick-Limit ~50–70 Teilungen)\n   - **Telomerase:** Enzym (in Keimzellen, Stammzellen, Krebszellen) → verlängert Telomere\n\n4. **Chromatid-Arme:**\n   - **p-Arm** (petit, **kurz**)\n   - **q-Arm** (queue, **lang**)\n\n**Falsch (A):** Chromosom = DNA + **Histone** (Proteine) → Chromatin. Nicht nur DNA.\n\n**Falsch (C):** Telomere **verkürzen** sich bei jeder Teilung (nicht verlängern), außer Telomerase aktiv (Keimzellen, Stammzellen, Krebszellen).\n\n**Falsch (D):** **q-Arm** (nicht p-Arm) ist länger. p-Arm = kurz (petit).\n\n**Falsch (E):** Kinetochor = **Protein-Komplex** (nicht DNA-Abschnitt) am Zentromer.",
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Aussage über den Karyotyp ist korrekt?",
          options: [
          "Der normale weibliche Karyotyp ist 46,XY.",
          "Der normale männliche Karyotyp ist 46,XX.",
          "Der normale Karyotyp ist 46,XX (weiblich, 22 Autosomenpaare + XX) oder 46,XY (männlich, 22 Autosomenpaare + XY). Notation: 47,XX,+21 bedeutet Trisomie 21 (Down-Syndrom) bei weiblichem Individuum. Karyotyp-Erstellung erfolgt durch Mitose-Arrest in Metaphase, Chromosomen-Färbung (G-Banding) und Sortierung.",
          "Der Karyotyp zeigt nur die Geschlechtschromosomen.",
          "Der Karyotyp wird in der Interphase erstellt."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** **Karyotyp:**\n\n**Definition:** Geordnete Darstellung **aller Chromosomen** einer Zelle (nach Größe, Zentromer-Position, Banding-Muster)\n\n**Normaler Karyotyp (Mensch):**\n- **46 Chromosomen** (23 Paare)\n- **22 Autosomenpaare** (Chromosom 1–22, nicht geschlechtsbestimmend)\n- **1 Gonosomenpaar** (Geschlechtschromosomen):\n  - **46,XX:** Weiblich (2 X-Chromosomen)\n  - **46,XY:** Männlich (1 X + 1 Y-Chromosom)\n\n**Karyotyp-Notation:**\n- **Chromosomenzahl, Gonosomen, Aberration**\n- **47,XX,+21:** 47 Chromosomen, weiblich (XX), zusätzliches Chromosom 21 (Trisomie 21, Down-Syndrom)\n- **47,XXY:** 47 Chromosomen, männlich (Y vorhanden), zusätzliches X (Klinefelter-Syndrom)\n- **45,X:** 45 Chromosomen, weiblich (kein Y), fehlendes X (Turner-Syndrom)\n\n**Karyogramm-Erstellung:**\n1. **Zellkultur:** Lymphozyten (Blut), Fruchtwasser-Zellen (pränatale Diagnostik)\n2. **Mitose-Arrest:** **Metaphase** (Colchicin blockiert Spindel → Chromosomen maximal kondensiert, sichtbar)\n3. **Chromosomen-Färbung:** Giemsa → **G-Banding** (Hell-Dunkel-Muster, charakteristisch für jedes Chromosom)\n4. **Fotografie + Sortierung:** Nach Größe, Zentromer-Position, Banding\n\n**Falsch (A):** 46,XX = **weiblich** (nicht männlich). 46,XY = männlich.\n\n**Falsch (B):** 46,XX = weiblich. 46,XY = **männlich** (nicht 46,XX).\n\n**Falsch (D):** Karyotyp zeigt **alle** Chromosomen (22 Autosomenpaare + 1 Gonosomenpaar), nicht nur Gonosomen.\n\n**Falsch (E):** Karyotyp wird in **Metaphase** erstellt (Mitose-Arrest, Chromosomen maximal kondensiert). Interphase: Chromatin dekondensiert, nicht sichtbar.",
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Aussage über Trisomie 21 (Down-Syndrom) ist korrekt?",
          options: [
          "Trisomie 21 ist die seltenste Autosom-Trisomie.",
          "Trisomie 21 ist letal und nicht mit dem Leben vereinbar.",
          "Trisomie 21 (Down-Syndrom, 47,XX/XY,+21) ist die häufigste Autosom-Trisomie (1:700). Klinische Merkmale umfassen faziale Dysmorphie (Epikanthus, flaches Profil), Herzfehler (AV-Kanal, VSD), Hypotonie und geistige Behinderung (variabel). Die Inzidenz steigt mit dem mütterlichen Alter (40 Jahre: ~1:100).",
          "Trisomie 21 entsteht nur durch Robertsonsche Translokation.",
          "Das Risiko für Trisomie 21 ist unabhängig vom mütterlichen Alter."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** **Trisomie 21** (Down-Syndrom):\n\n**Karyotyp:** **47,XX,+21** (weiblich) oder **47,XY,+21** (männlich) – 3 Kopien von Chromosom 21\n\n**Häufigkeit:**\n- **Häufigste Autosom-Trisomie** (lebensfähig)\n- **Inzidenz:** ~1:700 Geburten (Durchschnitt)\n- **Starke Altersabhängigkeit** (mütterliches Alter):\n  - 20 Jahre: ~1:1.500\n  - 35 Jahre: ~1:350\n  - **40 Jahre: ~1:100**\n  - 45 Jahre: ~1:30\n\n**Klinische Merkmale:**\n\n1. **Faziale Dysmorphie:**\n   - **Epikanthus** (Hautfalte am inneren Augenwinkel)\n   - **Flaches Profil** (flache Nasenwurzel)\n   - **Makroglossie** (große Zunge)\n   - **Brushfield-Spots** (Iris)\n\n2. **Herzfehler** (40–50%):\n   - **AV-Kanal-Defekt** (Atrioventrikulärer Septumdefekt)\n   - **VSD** (Ventrikelseptumdefekt)\n\n3. **Weitere:**\n   - **Hypotonie** (Muskelschwäche)\n   - **Geistige Behinderung** (variabel, IQ 25–70)\n   - **Erhöhtes Leukämie-Risiko** (ALL, AML)\n   - **Frühe Alzheimer-Demenz** (>40 Jahre)\n\n**Ursachen:**\n- **Freie Trisomie 21** (95%): **Nicht-Disjunktion** (Meiose-Fehler, meist maternal, Meiose I)\n- **Translokations-Trisomie** (4%): Robertsonsche Translokation (z. B. 14;21), balancierter Träger-Elternteil\n- **Mosaik-Trisomie** (1%): Mitose-Fehler, nur Teil der Zellen trisomisch → milderer Phänotyp\n\n**Falsch (A):** Trisomie 21 = **häufigste** (nicht seltenste) Autosom-Trisomie.\n\n**Falsch (B):** Trisomie 21 ist **lebensfähig** (nicht letal). Trisomie 18/13 sind häufig letal. Autosom-Monosomie ist letal.\n\n**Falsch (D):** Trisomie 21 entsteht **meist** (95%) durch **Nicht-Disjunktion** (freie Trisomie), nur 4% durch Translokation.\n\n**Falsch (E):** Risiko **steigt stark** mit mütterlichem Alter (40 Jahre: ~1:100 vs. 20 Jahre: ~1:1.500).",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über Gonosomen-Aberrationen ist korrekt?",
          options: [
          "Klinefelter-Syndrom (47,XXY) ist weiblich.",
          "Turner-Syndrom (45,X) ist männlich.",
          "Klinefelter-Syndrom (47,XXY) ist männlich (Y vorhanden), klinische Merkmale sind Hypogonadismus (kleine Hoden), Infertilität (Azoospermie), Gynäkomastie und hoher Wuchs. Turner-Syndrom (45,X) ist weiblich, klinische Merkmale sind Kleinwuchs, Pterygium colli (Flügelfell Nacken), Ovarial-Dysgenesie (Streak-Gonaden, Infertilität) und normale Intelligenz.",
          "Turner-Syndrom ist fertil mit normaler Ovar-Funktion.",
          "Triple-X-Syndrom (47,XXX) ist letal."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** **Gonosomen-Aberrationen:**\n\n**Klinefelter-Syndrom:**\n- **Karyotyp:** **47,XXY** (häufigste Form), 48,XXXY, 48,XXYY\n- **Phänotyp:** **Männlich** (Y-Chromosom vorhanden → SRY-Gen → Hoden)\n- **Klinische Merkmale:**\n  - **Hypogonadismus:** Kleine Hoden (Testosteron ↓)\n  - **Infertilität:** Azoospermie (keine Spermien)\n  - **Gynäkomastie:** Brustentwicklung\n  - **Hoher Wuchs:** Lange Gliedmaßen\n  - **Kognitive Defizite:** Leicht (variabel, Sprach-/Lernprobleme)\n- **Häufigkeit:** 1:500 männliche Geburten\n\n**Turner-Syndrom:**\n- **Karyotyp:** **45,X** (Monosomie X)\n- **Phänotyp:** **Weiblich** (kein Y-Chromosom)\n- **Klinische Merkmale:**\n  - **Kleinwuchs:** ~140–150 cm (Wachstumshormon-Therapie möglich)\n  - **Pterygium colli:** Flügelfell am Nacken (Lymphödem fetal → Hautfalte)\n  - **Herzfehler:** Aortenisthmusstenose (40%)\n  - **Nierenfehlbildungen:** Hufeisennicre\n  - **Ovarial-Dysgenesie:** **Streak-Gonaden** (Bindegewebe, keine Eizellen) → **Infertilität**, **primäre Amenorrhö** (keine Menstruation), Östrogen ↓\n  - **Intelligenz:** **Normal** (keine geistige Behinderung)\n- **Häufigkeit:** 1:2.500 weibliche Geburten\n\n**Triple-X-Syndrom (47,XXX):**\n- **Phänotyp:** Weiblich\n- **Klinisch:** Meist **unauffällig**, hoher Wuchs, leichte Lern-/Verhaltensprobleme (variabel), Fertilität meist **normal**\n\n**XYY-Syndrom (47,XYY):**\n- **Phänotyp:** Männlich\n- **Klinisch:** Meist **unauffällig**, hoher Wuchs, leichte Lern-/Verhaltensprobleme, Fertilität meist **normal**\n\n**Falsch (A):** Klinefelter (47,XXY) = **männlich** (Y vorhanden), nicht weiblich.\n\n**Falsch (B):** Turner (45,X) = **weiblich** (kein Y), nicht männlich.\n\n**Falsch (D):** Turner = **infertil** (Streak-Gonaden, keine Eizellen), nicht fertil.\n\n**Falsch (E):** Triple-X (47,XXX) = meist **unauffällig** (nicht letal), Fertilität meist normal.",
          difficulty: 3,
          tags: [],
        },
        {
          question: "Welche Aussage über Deletion-Syndrome ist korrekt?",
          options: [
          "Cri-du-chat-Syndrom entsteht durch Deletion von Chromosom 21.",
          "Williams-Beuren-Syndrom ist eine Duplikation von Chromosom 7.",
          "Cri-du-chat-Syndrom (5p-Deletion, kurzer Arm von Chromosom 5) zeigt charakteristischen Katzenschrei (Larynx-Hypoplasie), Mikrozephalie und geistige Behinderung. Williams-Beuren-Syndrom (7q11.23-Deletion, Elastin-Gen) zeigt Elfengesicht, supravalvuläre Aortenstenose und hypersozialen Charakter. DiGeorge-Syndrom (22q11-Deletion, CATCH-22) zeigt Herzfehler, Thymus-Hypoplasie und Hypokalzämie.",
          "DiGeorge-Syndrom ist eine Trisomie von Chromosom 22.",
          "Deletion-Syndrome sind immer balanciert und klinisch unauffällig."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** **Deletion-Syndrome:**\n\n**Cri-du-chat-Syndrom** (Katzenschrei-Syndrom):\n- **Deletion:** **5p-** (kurzer Arm [p-Arm] von Chromosom 5)\n- **Klinische Merkmale:**\n  - **Charakteristischer Schrei:** Katzenartig, schrill (Larynx-Hypoplasie)\n  - **Mikrozephalie** (kleiner Kopf)\n  - **Faziale Dysmorphie** (rundes Gesicht, Hypertelorismus [weiter Augenabstand])\n  - **Geistige Behinderung** (schwer)\n- **Häufigkeit:** 1:50.000\n\n**Williams-Beuren-Syndrom:**\n- **Deletion:** **7q11.23** (langer Arm [q-Arm] von Chromosom 7)\n- **Gen:** **Elastin-Gen-Deletion** (ELN) → Gefäß-/Bindegewebs-Störung\n- **Klinische Merkmale:**\n  - **Elfengesicht** (kleine Nase, volle Lippen, breite Stirn)\n  - **Supravalvuläre Aortenstenose** (oberhalb der Aortenklappe, Elastin-Mangel)\n  - **Hyperkalzämie** (infancy)\n  - **Geistige Behinderung** (leicht-mittel)\n  - **Hypersozialer Charakter** (extrem freundlich, vertrauensselig)\n- **Häufigkeit:** 1:10.000\n\n**DiGeorge-Syndrom** (22q11-Deletions-Syndrom, Velocardiofaciales Syndrom):\n- **Deletion:** **22q11** (langer Arm von Chromosom 22)\n- **Merkspruch:** **CATCH-22**:\n  - **C**ardiac defects (Herzfehler: Fallot-Tetralogie, Truncus arteriosus)\n  - **A**bnormal face (faziale Dysmorphie)\n  - **T**hymus-Hypoplasie (T-Zell-Defizienz, Immunschwäche)\n  - **C**left palate (Gaumenspalte)\n  - **H**ypokalzämie (Nebenschilddrüsen-Hypoplasie, PTH ↓)\n  - **22** (Chromosom 22)\n- **Häufigkeit:** 1:4.000\n\n**Falsch (A):** Cri-du-chat = **5p-Deletion** (nicht Chromosom 21). Chromosom 21 → Trisomie 21 (Down-Syndrom).\n\n**Falsch (B):** Williams-Beuren = **Deletion** (nicht Duplikation) von 7q11.23.\n\n**Falsch (D):** DiGeorge = **22q11-Deletion** (nicht Trisomie 22). Trisomie 22 ist meist letal (Fehlgeburt).\n\n**Falsch (E):** Deletion-Syndrome sind **unbalanciert** (Materialverlust) → klinisch **auffällig** (nicht unauffällig). **Balancierte** Translokation/Inversion → meist unauffällig.",
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: 'bio-5-03',
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
          merksatz: "Polygenie: viele Gene → ein Merkmal (glockenförmig). Pleiotropie: ein Gen → viele Merkmale (z. B. Sichelzellanämie).",
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
      selfTest: [
        {
          question: "Welche Aussage über Epistase ist korrekt?",
          options: [
          "Epistase bedeutet, dass ein Gen mehrere Merkmale beeinflusst.",
          "Bei Epistase zeigt die F₂-Generation eines dihybriden Erbgangs immer ein 9:3:3:1-Verhältnis.",
          "Epistase bedeutet, dass ein Gen (epistatisches Gen) die Wirkung eines anderen Gens (hypostatisches Gen) überdeckt. Beispiel: Bei Mäusen ist cc (Albino) epistatisch über den B-Locus (Fellfarbe). Die Kreuzung BbCc × BbCc ergibt ein 9:3:4-Verhältnis (9 schwarz, 3 braun, 4 weiß), da cc immer weiß ist, unabhängig vom B-Genotyp.",
          "Epistatische Gene liegen immer auf demselben Chromosom wie hypostatische Gene.",
          "Das epistatische Gen wird immer durch das hypostatische Gen überdeckt."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** **Epistase:**\n\n**Definition:** Ein Gen (**epistatisches Gen**) **überdeckt** (maskiert) die Wirkung eines anderen Gens (**hypostatisches Gen**)\n\n**Beispiel: Fellfarbe bei Mäusen**\n\n**Gene:**\n- **B-Locus:** B (schwarz, dominant), b (braun, rezessiv)\n- **C-Locus:** C (Farbbildung, dominant), c (keine Farbbildung [Albino], rezessiv)\n\n**Interaktion:**\n- **C_ (C vorhanden):** Farbbildung möglich → **B-Locus** bestimmt Farbe:\n  - B_C_ (B vorhanden, C vorhanden): **Schwarz**\n  - bbC_ (bb, C vorhanden): **Braun**\n- **cc (homozygot rezessiv):** **Keine Farbbildung** → **Weiß (Albino)**, **unabhängig** von B-Locus:\n  - B_cc: Weiß (c epistatisch, überdeckt B)\n  - bbcc: Weiß\n\n**Kreuzung:** BbCc × BbCc (dihybrider Erbgang)\n\n**Erwartetes Mendel-Verhältnis (keine Epistase):** 9:3:3:1\n\n**Tatsächliches Verhältnis (mit Epistase):**\n- **9/16** Schwarz (B_C_)\n- **3/16** Braun (bbC_)\n- **3/16** Weiß (B_cc)\n- **1/16** Weiß (bbcc)\n- **Gesamt:** 9 schwarz : 3 braun : **4 weiß** (3+1)\n- **Verhältnis:** **9:3:4**\n\n**Erklärung:** **cc** ist **epistatisch** über **B/b** (hypostatisch). cc maskiert die Wirkung von B → immer weiß, unabhängig von B-Genotyp.\n\n**Falsch (A):** **Pleiotropie** (nicht Epistase) = ein Gen → mehrere Merkmale. Epistase = Gen-Gen-Interaktion (Überdeckung).\n\n**Falsch (B):** Bei Epistase weicht das Verhältnis von 9:3:3:1 ab (z. B. **9:3:4**). 9:3:3:1 = keine Geninteraktion.\n\n**Falsch (D):** Epistatische + hypostatische Gene können auf **verschiedenen Chromosomen** liegen (wie B und C). Lokalisation ist nicht definierend.\n\n**Falsch (E):** **Epistatisches** Gen überdeckt **hypostatisches** (nicht umgekehrt). Epistatisch = überdeckend, hypostatisch = überdeckt.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über Polygenie (polygenetische Vererbung) ist korrekt?",
          options: [
          "Bei Polygenie beeinflusst ein Gen mehrere Merkmale.",
          "Polygenetische Merkmale zeigen diskrete Kategorien ohne Zwischenstufen.",
          "Polygenie bedeutet, dass mehrere Gene (Polygene) ein Merkmal beeinflussen. Die Allele wirken additiv, was zu einer kontinuierlichen Variation führt (z. B. Hautfarbe, Körpergröße). Bei zwei Genen (AaBb × AaBb) entsteht eine glockenförmige Verteilung mit einem 1:4:6:4:1-Phänotyp-Verhältnis, wobei die Anzahl dominanter Allele die Merkmalsausprägung bestimmt.",
          "Polygenetische Vererbung folgt immer einem 9:3:3:1-Verhältnis.",
          "Polygenie ist identisch mit Pleiotropie."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** **Polygenie** (Polygenetische Vererbung):\n\n**Definition:** **Mehrere Gene** (Polygene) beeinflussen **ein Merkmal** → **kontinuierliche Variation** (viele Abstufungen)\n\n**Prinzip:**\n- **Additive Wirkung:** Jedes dominante/großbuchstabige Allel (A, B, C, ...) trägt zur Merkmalsausprägung bei\n- **Anzahl dominanter Allele** bestimmt Intensität des Merkmals\n- **Kontinuierliches Spektrum:** Viele Zwischenstufen (nicht diskrete Kategorien)\n\n**Beispiel: Hautfarbe (vereinfacht, 2 Gene)**\n\n**Kreuzung:** AaBb × AaBb\n\n**Phänotyp-Verteilung:**\n- **AABB** (4 dominante Allele): Dunkelste Hautfarbe (1/16)\n- **AABb, AaBB** (3 dominante Allele): Dunkel (4/16)\n- **AAbb, AaBb, aaBB** (2 dominante Allele): Mittel (6/16)\n- **Aabb, aaBb** (1 dominantes Allel): Hell (4/16)\n- **aabb** (0 dominante Allele): Hellste Hautfarbe (1/16)\n\n**Verhältnis:** **1:4:6:4:1** (glockenförmige Verteilung)\n\n**Realität:** Hautfarbe wird von 3–6+ Genen beeinflusst → noch mehr Abstufungen, noch glattere Glockenform\n\n**Weitere Beispiele:**\n- **Körpergröße:** 100+ Gene + Umweltfaktoren (Ernährung)\n- **Intelligenz:** Viele Gene + Umwelt\n- **Blutdruck**\n\n**Merkmale polygenetischer Vererbung:**\n- **Kontinuierliche Variation** (fließende Übergänge)\n- **Glockenförmige Verteilung** (Normalverteilung)\n- **Umwelteinfluss** (oft erheblich)\n\n**Falsch (A):** **Pleiotropie** (nicht Polygenie) = ein Gen → mehrere Merkmale. **Polygenie** = viele Gene → ein Merkmal.\n\n**Falsch (B):** Polygenetische Merkmale zeigen **kontinuierliche Variation** (viele Zwischenstufen), nicht diskrete Kategorien.\n\n**Falsch (D):** Polygenetische Vererbung → **1:4:6:4:1** (2 Gene) oder glattere Glockenform (mehr Gene), nicht 9:3:3:1. 9:3:3:1 = dihybrider Erbgang ohne Geninteraktion.\n\n**Falsch (E):** Polygenie ≠ Pleiotropie. **Polygenie:** Viele Gene → ein Merkmal. **Pleiotropie:** Ein Gen → viele Merkmale.",
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Aussage über Pleiotropie ist korrekt?",
          options: [
          "Pleiotropie bedeutet, dass mehrere Gene ein Merkmal beeinflussen.",
          "Bei Pleiotropie zeigen alle Merkmale denselben Phänotyp.",
          "Pleiotropie bedeutet, dass ein Gen mehrere Merkmale (phänotypische Effekte) beeinflusst. Beispiel: Sichelzellanämie (HbS-Mutation) führt zu Sichelzellen, Hämolyse (Anämie), Gefäßverschlüssen (Schmerzkrisen, Organschäden) und Malaria-Resistenz bei Heterozygoten (HbA/HbS). Dies ist ein Beispiel für balancing selection (Heterozygoten-Vorteil).",
          "Pleiotropie tritt nur bei X-chromosomaler Vererbung auf.",
          "Sichelzellanämie ist ein Beispiel für Polygenie."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** **Pleiotropie:**\n\n**Definition:** **Ein Gen** beeinflusst **mehrere Merkmale** (phänotypische Effekte)\n\n**Beispiel: Sichelzellanämie (HbS)**\n\n**Gen:** β-Globin-Gen (Hämoglobin)\n- **Mutation:** Glu → Val (Position 6, GAG → GTG) → **HbS** (Sichelzell-Hämoglobin)\n\n**Ein Gen (HbS) → Viele Effekte:**\n\n1. **Erythrozyten:** Sichelform bei Hypoxie (niedrig O₂, desoxygeniert)\n2. **Hämolyse:** Vorzeitiger Erythrozyten-Abbau → **Anämie** (Hb ↓)\n3. **Gefäßverschlüsse:** Sichelzellen blockieren Kapillaren → **Schmerzkrisen** (Knochen, Abdomen), **Organschäden** (Milz-Infarkte, Nierenschäden, Schlaganfall)\n4. **Malaria-Resistenz:** Heterozygote (**HbA/HbS**) → partielle Resistenz gegen *Plasmodium falciparum* (Malaria-Parasit)\n   - **Mechanismus:** Parasit kann in Sichelzellen schlechter überleben\n   - **Balancing Selection:** Heterozygoten-Vorteil in Malaria-Gebieten (Afrika, Mittelmeer) → HbS-Allel bleibt in Population (trotz Nachteil bei Homozygoten)\n\n**Genotyp → Phänotyp:**\n- **HbA/HbA:** Normal, keine Sichelzellen, Malaria-anfällig\n- **HbA/HbS:** Heterozygot (**Sichelzellträger**, Sickle Cell Trait), meist asymptomatisch (leichte Anämie nur bei extremer Hypoxie), **Malaria-Resistenz**\n- **HbS/HbS:** Homozygot, **Sichelzellanämie** (schwer), Schmerzkrisen, Organschäden, frühe Mortalität (ohne Behandlung)\n\n**Weitere Beispiele:**\n- **Marfan-Syndrom:** Fibrillin-1-Mutation → Aortenerweiterung (Dissektions-Risiko), Linsenluxation (Auge), langes Skelett, Arachnodaktylie (Spinnenfinger)\n- **Phenylketonurie (PKU):** Phenylalanin-Hydroxylase-Mangel → Geistige Behinderung (Phenylalanin toxisch fürs ZNS), helle Haut/Haare (Melanin ↓, Tyrosin-Mangel)\n\n**Falsch (A):** **Polygenie** (nicht Pleiotropie) = mehrere Gene → ein Merkmal. **Pleiotropie** = ein Gen → mehrere Merkmale.\n\n**Falsch (B):** Bei Pleiotropie zeigen Merkmale **verschiedene** Phänotypen (z. B. Sichelzellen + Anämie + Schmerzkrisen), nicht denselben.\n\n**Falsch (D):** Pleiotropie kann bei **allen Vererbungstypen** auftreten (autosomal, X-chromosomal), nicht nur X-chromosomal.\n\n**Falsch (E):** Sichelzellanämie = **Pleiotropie** (ein Gen → viele Merkmale), nicht Polygenie (viele Gene → ein Merkmal).",
          difficulty: 3,
          tags: [],
        },
        {
          question: "Welche Aussage über Komplementierung ist korrekt?",
          options: [
          "Bei Komplementierung haben beide Eltern denselben genetischen Defekt.",
          "Komplementierung führt zu einem 3:1-Phänotyp-Verhältnis in der F₂-Generation.",
          "Komplementierung bedeutet, dass zwei rezessive Mutationen in verschiedenen Genen sich gegenseitig kompensieren, sodass die F₁-Generation einen Wildtyp-Phänotyp (normal) zeigt. In der F₂-Generation (F₁ × F₁) ergibt sich ein 9:7-Verhältnis: 9/16 zeigen den Wildtyp-Phänotyp (A_B_), 7/16 den mutanten Phänotyp (A_bb + aaB_ + aabb), da beide funktionale Gene für den normalen Phänotyp erforderlich sind.",
          "Komplementierung kann nur bei monohybriden Erbgängen auftreten.",
          "Bei Komplementierung sind alle F₁-Nachkommen mutant."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** **Komplementierung:**\n\n**Definition:** **Zwei rezessive Mutationen** in **verschiedenen Genen** → **komplementieren** sich → **Wildtyp-Phänotyp** (normal) in F₁\n\n**Prinzip:**\n- **Elternteil 1:** Gen A defekt (aa), Gen B funktional (BB) → mutanter Phänotyp (Produkt A fehlt)\n- **Elternteil 2:** Gen A funktional (AA), Gen B defekt (bb) → mutanter Phänotyp (Produkt B fehlt)\n- **F₁:** AaBb → **beide Gene funktional** (A von Elter 2, B von Elter 1) → **Wildtyp-Phänotyp** (normal)\n\n**Beispiel: Blütenfarbe (vereinfacht)**\n\n**Gene:**\n- **Gen A:** Enzym A (Vorstufe → Zwischenprodukt)\n- **Gen B:** Enzym B (Zwischenprodukt → Pigment [Farbe])\n\n**Kreuzung:** aaBB (weiß, Enzym A defekt) × AAbb (weiß, Enzym B defekt)\n- **F₁:** AaBb → **Farbe** (beide Enzyme funktional, Biosynthese-Weg komplett)\n\n**F₁ × F₁:** AaBb × AaBb\n\n**F₂-Phänotyp:**\n- **9/16 A_B_** (beide Enzyme funktional): **Farbe** (Wildtyp)\n- **3/16 A_bb** (Enzym B defekt): Weiß (kein Pigment)\n- **3/16 aaB_** (Enzym A defekt): Weiß (kein Zwischenprodukt)\n- **1/16 aabb** (beide Enzyme defekt): Weiß\n- **Verhältnis:** **9:7** (9 Farbe : 7 weiß)\n\n**Erklärung:** Nur wenn **beide** Enzyme funktional (A_B_) → Biosynthese-Weg vollständig → Pigment → Farbe. Fehlt mindestens eines → kein Pigment → weiß.\n\n**Komplementations-Test:**\n- **Zweck:** Bestimmen, ob zwei Mutationen im **gleichen Gen** (keine Komplementierung) oder in **verschiedenen Genen** (Komplementierung) liegen\n- **F₁ Wildtyp:** Verschiedene Gene (Komplementierung)\n- **F₁ mutant:** Gleiches Gen (keine Komplementierung, beide Allele des gleichen Gens defekt)\n\n**Falsch (A):** Bei Komplementierung haben Eltern **verschiedene** genetische Defekte (Gen A vs. Gen B), nicht denselben.\n\n**Falsch (B):** Komplementierung → **9:7** (nicht 3:1). 3:1 = monohybrider Erbgang (Aa × Aa).\n\n**Falsch (D):** Komplementierung ist typischerweise **dihybrider** Erbgang (2 Gene, AaBb × AaBb), nicht monohybrid.\n\n**Falsch (E):** Bei Komplementierung sind alle **F₁** Nachkommen **Wildtyp** (normal, AaBb), nicht mutant.",
          difficulty: 3,
          tags: [],
        },
        {
          question: "Welche Aussage über modifizierte Mendel-Verhältnisse ist korrekt?",
          options: [
          "Ein 9:3:3:1-Verhältnis zeigt immer Geninteraktion an.",
          "Ein 9:3:4-Verhältnis entsteht durch Komplementierung.",
          "Bei dihybridem Erbgang (AaBb × AaBb) entstehen verschiedene Phänotyp-Verhältnisse je nach Geninteraktion: 9:3:3:1 (keine Interaktion), 9:3:4 (Epistase, z. B. cc epistatisch), 9:7 (Komplementierung, beide Gene erforderlich), 12:3:1 (dominant epistatisch). Abweichungen von 9:3:3:1 zeigen Geninteraktion an.",
          "Ein 9:7-Verhältnis zeigt keine Geninteraktion.",
          "Alle Geninteraktionen führen zum gleichen Phänotyp-Verhältnis."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** **Modifizierte Mendel-Verhältnisse:**\n\n**Dihybrider Erbgang:** AaBb × AaBb (2 Gene, je 2 Allele)\n\n**Standard-Mendel (keine Geninteraktion):**\n- **Verhältnis:** **9:3:3:1**\n- **Phänotypen:** 9 A_B_, 3 A_bb, 3 aaB_, 1 aabb\n- **Interpretation:** Gene vererben **unabhängig**, keine Interaktion\n\n**Geninteraktion → Abweichungen von 9:3:3:1:**\n\n1. **Epistase (9:3:4):**\n   - **Beispiel:** Fellfarbe Maus (cc epistatisch über B/b)\n   - **Phänotypen:** 9 schwarz (B_C_), 3 braun (bbC_), 4 weiß (B_cc + bbcc)\n   - **Erklärung:** cc überdeckt B/b → immer weiß\n\n2. **Komplementierung (9:7):**\n   - **Beispiel:** Blütenfarbe (beide Enzyme A + B nötig)\n   - **Phänotypen:** 9 Farbe (A_B_), 7 weiß (A_bb + aaB_ + aabb)\n   - **Erklärung:** Mindestens ein Gen defekt → kein Pigment → weiß\n\n3. **Dominant epistatisch (12:3:1):**\n   - **Beispiel:** Gen A (A_) epistatisch über B/b\n   - **Phänotypen:** 12 (A_B_ + A_bb), 3 (aaB_), 1 (aabb)\n   - **Erklärung:** A_ maskiert B/b → gleicher Phänotyp\n\n4. **Doppelt-rezessiv epistatisch (9:7):**\n   - Wie Komplementierung (beide Gene nötig)\n\n**Regel:** **Abweichung von 9:3:3:1** → **Geninteraktion** (Epistase, Komplementierung, etc.)\n\n**Falsch (A):** **9:3:3:1** zeigt **keine** Geninteraktion (unabhängige Vererbung, 3. Mendelsche Regel). **Abweichungen** (9:3:4, 9:7, 12:3:1) zeigen Geninteraktion.\n\n**Falsch (B):** **9:3:4** = **Epistase** (nicht Komplementierung). **9:7** = Komplementierung.\n\n**Falsch (D):** **9:7** zeigt **Geninteraktion** (Komplementierung, beide Gene erforderlich für Wildtyp), nicht keine Geninteraktion.\n\n**Falsch (E):** Verschiedene Geninteraktionen → **verschiedene** Verhältnisse (9:3:4, 9:7, 12:3:1), nicht gleich.",
          difficulty: 2,
          tags: [],
        }
      ],
    },
    {
      id: 'bio-5-04',
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
          merksatz: "Männer häufiger krank (hemizygot, X^a Y). Töchter meist gesund (Konduktorin). Keine Vater-Sohn-Übertragung.",
        },
        {
          heading: "X-chromosomal dominante Vererbung und X-Inaktivierung",
          text: "Bei X-chromosomal dominanter Vererbung gibt ein kranker Vater (X^A Y) sein X^A an alle Töchter (100% krank) und sein Y an alle Söhne (100% gesund). Die X-Inaktivierung (Lyon-Hypothese) inaktiviert in weiblichen Zellen zufällig eines der beiden X-Chromosomen (Barr-Körperchen), was ein Mosaik-Muster erzeugt (z. B. Kaliko-Katzen).",
          merksatz: "Kranker Vater (X^A Y) → 100% Töchter krank, 100% Söhne gesund. X-Inaktivierung = Barr-Körperchen, Mosaik-Muster.",
        },
        {
          heading: "Y-chromosomale Vererbung",
          text: "Y-chromosomale Gene betreffen ausschließlich Männer. Die Übertragung erfolgt zu 100% vom Vater auf alle Söhne, Töchter sind nie betroffen. Wichtige Gene: SRY (Hoden-Entwicklung → männlicher Phänotyp), AZF (Spermatogenese; Deletion → Infertilität).",
          merksatz: "Y-chromosomal: Nur Männer, Vater → 100% Söhne. SRY = Hoden, AZF = Spermatogenese.",
        },
      ],
      merksätze: [
        "X-chromosomal rezessiv: Männer häufiger krank (hemizygot, X^a Y, nur 1 X). Töchter meist gesund (X^A X^a Konduktorin). Keine Vater-Sohn-Übertragung. Beispiele: Hämophilie A, Rot-Grün-Blindheit, Duchenne.",
        "X-chromosomal dominant: Frauen häufiger betroffen (2 X). Kranker Vater (X^A Y) → 100% Töchter krank, 100% Söhne gesund. Beispiel: Hypophosphatämische Rachitis.",
        "X-Inaktivierung: Weibliche Zellen (XX) → 1 X inaktiviert (zufällig, Barr-Körperchen, XIST). Mosaik-Muster (Kaliko-Katzen: X^O X^B → Orange + Schwarz, nur bei Weibchen).",
        "Y-chromosomal: Nur Männer betroffen. Vater → 100% Söhne. SRY (Hoden-Entwicklung → männlich), AZF (Spermatogenese, Deletion → Infertilität).",
      ],
      selfTest: [
        {
          question: "Ein Junge leidet an Hämophilie A. Seine Mutter und Großmutter väterlicherseits sind gesund, sein Vater und Großvater mütterlicherseits sind ebenfalls gesund. Welche Aussage zum Erbgang ist korrekt?",
          options: [
          "Der Junge hat das defekte F8-Gen von seinem Vater geerbt, da Hämophilie A Y-chromosomal vererbt wird",
          "Die Mutter ist Konduktorin (X^A X^a) und hat das defekte Allel mit 50% Wahrscheinlichkeit an den Sohn weitergegeben",
          "Der Junge ist heterozygot für das F8-Gen und zeigt eine inkomplette Dominanz",
          "Beide Eltern müssen homozygot rezessiv (X^a X^a bzw. X^a Y) sein, damit der Sohn erkrankt",
          "Eine Vater-Sohn-Übertragung ist bei Hämophilie A der häufigste Vererbungsweg"
          ],
          correctIndex: 1,
          explanation: "Hämophilie A ist **X-chromosomal rezessiv** vererbt. Der Junge ist **hemizygot** (X^a Y) und hat das defekte F8-Gen auf dem X-Chromosom. Da der **Vater sein Y-Chromosom an den Sohn** gibt (nicht X), muss die **Mutter Konduktorin** (X^A X^a) sein und hat das X^a-Allel mit 50% Wahrscheinlichkeit weitergegeben. Wichtig: **Keine Vater-Sohn-Übertragung** bei X-chromosomalen Merkmalen!",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Bei einer Stammbaumanalyse fällt auf, dass ein kranker Vater **ausschließlich kranke Töchter** hat, während **alle Söhne gesund** sind. Die gesunde Mutter hat sowohl gesunde als auch kranke Kinder. Welcher Erbgang liegt vor?",
          options: [
          "X-chromosomal rezessiv, da Männer häufiger betroffen sind und keine Vater-Sohn-Übertragung stattfindet",
          "Y-chromosomal (holandrisch), da der Vater das Y-Chromosom an alle Söhne weitergibt",
          "X-chromosomal dominant, da der kranke Vater (X^A Y) sein X^A-Chromosom an alle Töchter weitergibt",
          "Autosomal dominant, da sowohl Töchter als auch Söhne betroffen sein können",
          "Mitochondrial, da die Vererbung über die mütterliche Linie erfolgt"
          ],
          correctIndex: 2,
          explanation: "Das Muster **kranker Vater → 100% kranke Töchter, 100% gesunde Söhne** ist **pathognomonisch für X-chromosomal dominante Vererbung**. Der Vater (X^A Y) gibt sein **X^A-Chromosom an alle Töchter** (→ X^A X^- krank) und sein **Y-Chromosom an alle Söhne** (→ X^- Y gesund). Die gesunde Mutter (X^- X^-) kann nur X^- weitergeben. Beispiel: Hypophosphatämische Rachitis (PHEX-Gen).",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Eine Frau ist heterozygot für ein X-chromosomal rezessives Merkmal (z.B. Rot-Grün-Blindheit, X^A X^a). Welche Aussage zur **X-Inaktivierung** (Lyon-Hypothese) ist korrekt?",
          options: [
          "In allen Zellen der Frau wird dasselbe X-Chromosom (entweder väterlich oder mütterlich) inaktiviert",
          "Die X-Inaktivierung erfolgt zufällig in jeder Zelle (~Tag 16), sodass ein Mosaik-Muster entsteht (Barr-Körperchen)",
          "Das inaktivierte X-Chromosom wird vollständig abgebaut und ist im Karyotyp nicht mehr sichtbar",
          "Die Frau ist immer symptomatisch, da in 50% der Zellen das defekte X^a-Chromosom aktiv ist",
          "X-Inaktivierung findet nur bei homozygot rezessiven Frauen (X^a X^a) statt, nicht bei Konduktorinnen"
          ],
          correctIndex: 1,
          explanation: "**X-Inaktivierung** (Lyon-Hypothese): Bei weiblichen Zellen (XX) wird **1 X-Chromosom zufällig inaktiviert** (~Tag 16, Blastozyste) → **Dosiskompensation**. Das inaktivierte X bildet ein **Barr-Körperchen** (heterochromatisch, am Kernrand). Die Inaktivierung ist **zufällig** (50:50 väterlich/mütterlich) → **Mosaik-Muster** (z.B. Kaliko-Katzen: X^O X^B → Orange + Schwarz, nur ♀). Konduktorinnen sind **meist asymptomatisch**, da das gesunde X kompensiert.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Ein 5-jähriger Junge zeigt progressive Muskelschwäche (Beginn ~3 Jahre), Gowers-Zeichen beim Aufstehen und Wadenpseudohypertrophie. Die CPK (Creatinkinase) ist stark erhöht. Die Familienanamnese ergibt, dass ein Bruder der Mutter ebenfalls betroffen war. Welche Diagnose ist am wahrscheinlichsten?",
          options: [
          "Hämophilie A – X-chromosomal rezessive Gerinnungsstörung mit Blutungsneigung",
          "Muskeldystrophie Duchenne – X-chromosomal rezessive Dystrophin-Mutation (DMD-Gen)",
          "Hypophosphatämische Rachitis – X-chromosomal dominante PHEX-Mutation",
          "Trisomie 21 (Down-Syndrom) – numerische Chromosomenaberration mit Muskelhypotonie",
          "Y-chromosomale Myopathie – holandrische Vererbung mit Vater-Sohn-Übertragung"
          ],
          correctIndex: 1,
          explanation: "**Muskeldystrophie Duchenne** (DMD): **X-chromosomal rezessive** Dystrophin-Mutation. Klinisch: Progressive Muskelschwäche (Beginn ~3–5 Jahre), **Gowers-Zeichen** (Aufstehen über Hände → Knie → Hüfte), **Wadenpseudohypertrophie** (Fett-/Bindegewebe ersetzt Muskel), **CPK ↑↑↑** (massiv erhöht). Rollstuhl ~12 Jahre, frühe Mortalität (~20–30 Jahre, Herz-/Ateminsuffizienz). Inzidenz: 1:3.500 ♂. Betroffener Bruder der Mutter → Mutter ist Konduktorin.",
          difficulty: 3,
          tags: [],
        },
        {
          question: "Welche Aussage zur **Y-chromosomalen Vererbung** (holandrische Vererbung) ist korrekt?",
          options: [
          "Das SRY-Gen auf dem Y-Chromosom kodiert für Dystrophin und ist essentiell für die Muskelentwicklung",
          "Y-chromosomale Merkmale werden von Vätern auf **alle Söhne** übertragen, während Töchter nicht betroffen sind",
          "Deletionen im AZF-Bereich (Azoospermie-Faktor) des Y-Chromosoms führen zu Rot-Grün-Blindheit",
          "Y-chromosomale Vererbung ist die häufigste Ursache für Hämophilie A und Muskeldystrophie Duchenne",
          "Frauen können ebenfalls Y-chromosomale Merkmale erben, wenn die Mutter Konduktorin ist"
          ],
          correctIndex: 1,
          explanation: "**Y-chromosomale Vererbung** (holandrisch): Gene auf **Y-Chromosom** → nur **Männer** betroffen. **Vater-Sohn-Übertragung** (100% der Söhne erben Y vom Vater), **keine Töchter betroffen** (erhalten X vom Vater). **SRY** (Sex-determining Region Y) → Hoden-Entwicklung → männlich. **AZF** (Azoospermie-Faktor) → Spermatogenese (Deletion → Infertilität, Azoospermie/Oligospermie). Beispiel: Männliche Infertilität durch AZF-Deletionen.",
          difficulty: 1,
          tags: [],
        },
      ],
    },
    {
      id: 'bio-5-05',
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
          merksatz: "Autosomal-dominant: jede Generation betroffen. Autosomal-rezessiv: Generationensprünge, gesunde Eltern, Doppellinie = Konsanguinität.",
        },
        {
          heading: "Gonosomale Erbgänge im Stammbaum",
          text: "X-chromosomal rezessiv: Männer häufiger betroffen, kein Vater-Sohn-Übertragung, Diagonal-Muster (Großvater → Tochter als Konduktorin → Enkel). X-chromosomal dominant: kranker Vater → 100% Töchter krank, 100% Söhne gesund. Y-chromosomal: nur Männer betroffen, Vater-Sohn-Übertragung zu 100%.",
          merksatz: "X-rez.: kein Vater-Sohn, diagonal. X-dom.: kranker Vater → alle Töchter krank. Y-chr.: nur Männer, Vater-Sohn 100%.",
        },
        {
          heading: "Wahrscheinlichkeitsberechnung",
          text: "Bei Aa × Aa beträgt P(aa, krank) = 1/4, P(gesund) = 3/4. Jede Geburt ist unabhängig. Die bedingte Wahrscheinlichkeit P(Aa | gesund) = 2/3 ergibt sich über das Bayes-Theorem, da von drei möglichen gesunden Genotypen zwei heterozygot sind.",
          merksatz: "Aa × Aa: 1/4 krank, 3/4 gesund. P(Aa | gesund) = 2/3. Jede Geburt ist unabhängig!",
        },
      ],
      diagram: 'pedigree-analysis',

      merksätze: [
        "Autosomal-dominant: Jede Generation betroffen (vertikale Linie I → II → III). Männer = Frauen. Betroffene Eltern (Aa) → ~50% Kinder krank. Beispiel: Marfan, Achondroplasie.",
        "Autosomal-rezessiv: Generationensprünge! Gesunde Eltern (Aa × Aa) → 25% Kinder krank (aa). Konsanguinität erhöht Risiko (Doppellinie). Beispiel: PKU, Mukoviszidose.",
        "X-chromosomal rezessiv: Männer häufiger krank. Keine Vater-Sohn-Übertragung. Diagonal-Muster: Großvater → Tochter (Konduktorin) → Enkel. Beispiel: Hämophilie A, Duchenne.",
        "Wahrscheinlichkeit Aa × Aa: Jede Geburt unabhängig. P(krank aa) = 1/4 = 25%. P(gesund) = 3/4. Bedingt: P(Aa | gesund) = 2/3.",
      ],
      selfTest: [
        {
          question: "In einem Stammbaum sind Generation I (Eltern) gesund, Generation II zeigt 2 von 4 Geschwistern betroffen (1 Bruder, 1 Schwester), Generation III ist noch nicht vorhanden. Die Eltern in Generation I sind durch eine Doppellinie (=) verbunden. Welcher Erbgang ist am wahrscheinlichsten?",
          options: [
          "Autosomal-dominant, da beide Geschlechter gleich häufig betroffen sind",
          "Autosomal-rezessiv mit Konsanguinität (Verwandtenehe), da gesunde Eltern betroffene Kinder haben",
          "X-chromosomal rezessiv, da sowohl Männer als auch Frauen betroffen sind",
          "Y-chromosomal (holandrisch), da eine Vater-Sohn-Übertragung vorliegt",
          "X-chromosomal dominant, da mehr Frauen als Männer betroffen sind"
          ],
          correctIndex: 1,
          explanation: "**Autosomal-rezessiv mit Konsanguinität**: **Generationensprung** (gesunde Eltern → kranke Kinder) ist typisch für rezessiven Erbgang (Aa × Aa → aa). Die **Doppellinie (=)** kennzeichnet **Konsanguinität** (Verwandtenehe, z.B. Cousin-Cousine) → erhöhtes Risiko für gemeinsame rezessive Allele (IBD). **Beide Geschlechter gleich häufig** betroffen (autosomal, nicht gonosomal). Beispiele: PKU, Mukoviszidose.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Ein Stammbaum zeigt folgendes Muster: Generation I (Großvater betroffen, Großmutter gesund), Generation II (alle 3 Töchter gesund, 2 Söhne gesund), Generation III (1 Enkel betroffen, 2 Enkelinnen gesund). Der betroffene Enkel ist der Sohn einer Tochter aus Generation II. Welcher Erbgang liegt vor?",
          options: [
          "Autosomal-dominant, da der Großvater betroffen ist und das Merkmal weitervererbt wird",
          "X-chromosomal rezessiv mit diagonal-Übertragung (Großvater → Tochter als Konduktorin → Enkel)",
          "Y-chromosomal, da nur männliche Individuen (Großvater und Enkel) betroffen sind",
          "Autosomal-rezessiv, da ein Generationensprung von Generation I nach Generation III vorliegt",
          "X-chromosomal dominant, da die Töchter des Großvaters alle betroffen sein müssten"
          ],
          correctIndex: 1,
          explanation: "**X-chromosomal rezessiv mit diagonal-Übertragung** (\"Springer-Generation\"): Großvater (X^a Y, betroffen) → Töchter (X^A X^a, Konduktorinnen, gesund) → Enkel (X^a Y, betroffen, 50% Risiko). **Keine Vater-Sohn-Übertragung** (Großvater hat keine betroffenen Söhne → Y-chromosomal ausgeschlossen). Das **diagonale Muster** (Generation I → III, II übersprungen) ist **pathognomonisch** für X-chromosomal rezessiv. Beispiele: Hämophilie A, Duchenne.",
          difficulty: 3,
          tags: [],
        },
        {
          question: "Zwei heterozygote Eltern (Aa × Aa) für eine autosomal-rezessive Erkrankung haben bereits 2 gesunde Kinder. Wie hoch ist die Wahrscheinlichkeit, dass das **3. Kind ebenfalls gesund** ist?",
          options: [
          "100%, da bereits 2 gesunde Kinder geboren wurden und das kranke Allel \"verbraucht\" ist",
          "75% (3/4), da jede Geburt unabhängig ist und P(gesund) = P(AA) + P(Aa) = 3/4",
          "50% (1/2), da die Eltern heterozygot sind und das Risiko bei jedem Kind gleich ist",
          "25% (1/4), da die Wahrscheinlichkeit für aa (krank) bei Aa × Aa immer 1/4 ist",
          "67% (2/3), da bereits 2 gesunde Kinder geboren wurden (bedingte Wahrscheinlichkeit)"
          ],
          correctIndex: 1,
          explanation: "**Jede Geburt ist unabhängig** (kein Einfluss früherer Kinder). Bei **Aa × Aa** (autosomal-rezessiv): P(AA) = 1/4, P(Aa) = 2/4, P(aa) = 1/4. **P(gesund) = P(AA) + P(Aa) = 1/4 + 2/4 = 3/4 = 75%**. Die vorherigen 2 gesunden Kinder ändern nichts an der Wahrscheinlichkeit für das 3. Kind. **Wichtig:** Genetische Wahrscheinlichkeiten sind **unabhängig** bei jeder Konzeption!",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Ein Stammbaum zeigt: Vater betroffen (Generation I), Mutter gesund. In Generation II sind **alle 3 Töchter betroffen**, aber **beide Söhne gesund**. Welcher Erbgang ist am wahrscheinlichsten?",
          options: [
          "Autosomal-dominant, da das Merkmal von einer Generation zur nächsten weitergegeben wird",
          "X-chromosomal rezessiv, da keine Vater-Sohn-Übertragung stattfindet",
          "X-chromosomal dominant, da der kranke Vater (X^A Y) sein X^A-Chromosom an alle Töchter weitergibt",
          "Y-chromosomal, da der Vater betroffen ist und nur männliche Nachkommen betroffen sein sollten",
          "Autosomal-rezessiv mit Konsanguinität, da Geschwister betroffen sind"
          ],
          correctIndex: 2,
          explanation: "**X-chromosomal dominant**: Das Muster **kranker Vater → 100% Töchter krank, 100% Söhne gesund** ist **pathognomonisch**. Der Vater (X^A Y) gibt sein **X^A-Chromosom an alle Töchter** (→ X^A X^- krank) und sein **Y-Chromosom an alle Söhne** (→ X^- Y gesund). Die gesunde Mutter (X^- X^-) gibt nur X^- weiter. Beispiele: Hypophosphatämische Rachitis (PHEX-Gen), Rett-Syndrom.",
          difficulty: 1,
          tags: [],
        },
        {
          question: "Eltern Aa × Aa (autosomal-rezessiv) haben ein **gesundes** Kind. Wie hoch ist die Wahrscheinlichkeit, dass dieses Kind **Konduktor** (Aa) ist?",
          options: [
          "25% (1/4), da P(Aa) bei Aa × Aa immer 1/4 ist",
          "50% (1/2), da heterozygote Eltern zu 50% Aa-Nachkommen führen",
          "67% (2/3), da von 3 gesunden Genotypen (AA, Aa, Aa) zwei Aa sind (bedingte Wahrscheinlichkeit)",
          "75% (3/4), da P(gesund) = 3/4 ist und davon alle Aa sein könnten",
          "100%, da gesunde Kinder von Aa × Aa immer heterozygot sind"
          ],
          correctIndex: 2,
          explanation: "**Bedingte Wahrscheinlichkeit** (Bayes-Theorem): **Gegeben:** Kind ist gesund (AA oder Aa, nicht aa). Bei **Aa × Aa**: P(AA) = 1/4, P(Aa) = 2/4, P(aa) = 1/4. **P(gesund) = 3/4** (AA oder Aa). **P(Aa | gesund) = P(Aa) / P(gesund) = (2/4) / (3/4) = 2/3 = 67%**. Von den 3 gesunden Genotypen (1× AA, 2× Aa) sind **2 von 3 Konduktoren**. Wichtig für genetische Beratung!",
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: 'bio-5-06',
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
          merksatz: "p² + 2pq + q² = 1, p + q = 1. q = √(Erkrankungsfrequenz). Konduktoren (2pq) viel häufiger als Betroffene (q²).",
        },
        {
          heading: "Selektion und Heterozygoten-Vorteil",
          text: "Selektion verändert Allelfrequenzen durch unterschiedliche Fitness der Genotypen. Beim Heterozygoten-Vorteil (Balancing Selection) haben Heterozygote den höchsten Reproduktionserfolg. Das HbS-Allel bleibt in Malaria-Gebieten erhalten, weil HbA/HbS-Heterozygote Malaria-resistent sind (höhere Fitness als beide Homozygoten).",
          merksatz: "Heterozygoten-Vorteil (Sichelzellanämie): HbA/HbS → Malaria-Resistenz, Fitness am höchsten. HbS-Allel bleibt erhalten (Balancing Selection).",
        },
        {
          heading: "Genetischer Drift und Migration",
          text: "Genetischer Drift bezeichnet zufällige Frequenzänderungen in kleinen Populationen. Gründereffekt: kleine Gründerpopulation trägt zufällige Allelfrequenzen. Flaschenhals-Effekt: drastische Populationsreduktion führt zu Allelverlust. Migration (Genfluss) gleicht Allelfrequenzen zwischen Populationen an. Inzucht erhöht Homozygotie, ändert aber nicht die Allelfrequenzen p und q.",
          merksatz: "Drift: Zufällige Frequenzänderungen in kleinen Populationen. Flaschenhals → Allelverlust (Geparden). Inzucht → Homozygotie ↑, aber p/q unverändert.",
        },
      ],
      merksätze: [
        "Hardy-Weinberg-Formel: p² + 2pq + q² = 1 (Genotypfrequenzen), p + q = 1 (Allelfrequenzen). p² = AA, 2pq = Aa, q² = aa. Bedingungen: keine Mutation, zufällige Paarung, keine Selektion, große Population, keine Migration.",
        "Konduktor-Berechnung: Rezessive Erkrankung (q² = 1/10.000) → q = 0,01, p = 0,99. Konduktor-Frequenz 2pq ≈ 2% (1 von 50). Konduktoren viel häufiger als Betroffene.",
        "Selektion (Sichelzellanämie): Heterozygoten-Vorteil in Malaria-Gebieten. HbA/HbS → Malaria-Resistenz, Fitness ↑. HbS-Allel bleibt erhalten (Balancing Selection).",
        "Genetischer Drift: Zufällige Frequenzänderungen in kleinen Populationen. Gründereffekt, Flaschenhals → Allelverlust, Fixierung. Beispiel: Geparden.",
      ],
      selfTest: [
        {
          question: "Eine Population befindet sich im Hardy-Weinberg-Gleichgewicht. Die Frequenz des rezessiven Allels **a** beträgt **q = 0,2**. Wie hoch ist die Frequenz der **heterozygoten Individuen** (Aa)?",
          options: [
          "4% (0,04), da q² = 0,2² = 0,04",
          "20% (0,2), da die Frequenz von Aa gleich q ist",
          "32% (0,32), da 2pq = 2 × 0,8 × 0,2 = 0,32",
          "64% (0,64), da p² = 0,8² = 0,64",
          "40% (0,4), da 2q = 2 × 0,2 = 0,4"
          ],
          correctIndex: 2,
          explanation: "**Hardy-Weinberg-Formel:** p² + 2pq + q² = 1. Gegeben: **q = 0,2** → **p = 1 - q = 0,8**. **Heterozygote Frequenz (2pq):** 2 × 0,8 × 0,2 = **0,32 = 32%**. Wichtig: **2pq** ist die Formel für Heterozygote (Aa), nicht q oder q². Kontrolle: p² (AA) = 0,64, 2pq (Aa) = 0,32, q² (aa) = 0,04 → Summe = 1 ✓",
          difficulty: 2,
          tags: [],
        },
        {
          question: "In einer Population von 100 Individuen gibt es 49 AA, 42 Aa und 9 aa. Wie hoch ist die Frequenz des **Allels a** (q)?",
          options: [
          "9% (0,09), da 9 von 100 Individuen aa sind",
          "21% (0,21), da die Hälfte der Aa-Individuen a-Allele haben",
          "30% (0,3), da (9 × 2 + 42 × 1) / 200 = 60/200 = 0,3",
          "42% (0,42), da 42 Aa-Individuen vorhanden sind",
          "51% (0,51), da 9 aa + 42 Aa = 51 Individuen a tragen"
          ],
          correctIndex: 2,
          explanation: "**Allele zählen:** Gesamt-Allele = 100 Individuen × 2 = 200 Allele. **a-Allele:** (9 aa × 2) + (42 Aa × 1) = 18 + 42 = **60 a-Allele**. **q = 60/200 = 0,3 = 30%**. Alternativ: q² = 9/100 = 0,09 → q = √0,09 = 0,3. Wichtig: **Jedes Individuum hat 2 Allele** (diploid), daher × 2!",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Mukoviszidose (Cystic Fibrosis) ist autosomal-rezessiv und tritt bei 1 von 2.500 Neugeborenen auf (q² = 1/2.500). Wie hoch ist die **Konduktor-Frequenz** (Träger, Aa) in der Bevölkerung?",
          options: [
          "1/2.500 (0,04%), da die Konduktor-Frequenz gleich der Erkrankungsfrequenz ist",
          "1/50 (2%), da q = √(1/2.500) = 0,02, p ≈ 0,98, 2pq ≈ 2 × 0,98 × 0,02 ≈ 0,04 = 4%",
          "1/25 (4%), da q = 0,02, p = 0,98, 2pq = 2 × 0,98 × 0,02 = 0,0392 ≈ 4%",
          "1/100 (1%), da die Konduktor-Frequenz immer viel niedriger als die Erkrankungsfrequenz ist",
          "1/10 (10%), da Konduktoren sehr häufig sind bei rezessiven Erkrankungen"
          ],
          correctIndex: 2,
          explanation: "**Konduktor-Berechnung:** Gegeben: **q² = 1/2.500 = 0,0004**. **q = √0,0004 = 0,02**. **p = 1 - q = 0,98**. **Konduktor-Frequenz (2pq):** 2 × 0,98 × 0,02 = **0,0392 ≈ 4% = 1/25**. Wichtig: Bei **seltenen rezessiven Erkrankungen** sind **Konduktoren viel häufiger** als Betroffene (4% vs. 0,04%)! Beispiel: ~1 von 25 ist Träger von Mukoviszidose.",
          difficulty: 3,
          tags: [],
        },
        {
          question: "Welche der folgenden Bedingungen ist **KEINE** Voraussetzung für das Hardy-Weinberg-Gleichgewicht?",
          options: [
          "Keine Mutation (keine neuen Allele entstehen)",
          "Zufällige Paarung (Random Mating, keine Präferenz für bestimmte Genotypen)",
          "Dominante Allele sind immer häufiger als rezessive Allele in der Population",
          "Keine Selektion (alle Genotypen haben gleiche Fitness)",
          "Große Population (kein genetischer Drift)"
          ],
          correctIndex: 2,
          explanation: "**HWE-Bedingungen:** (1) Keine Mutation, (2) Zufällige Paarung, (3) **Keine Selektion**, (4) Große Population, (5) Keine Migration. **Aussage C ist falsch:** Dominante Allele müssen **nicht häufiger** sein als rezessive! Die Frequenzen (p, q) können **beliebig** sein (z.B. p = 0,2, q = 0,8), solange die 5 Bedingungen erfüllt sind. HWE beschreibt **stabile Frequenzen**, nicht deren absolute Werte.",
          difficulty: 1,
          tags: [],
        },
        {
          question: "In Malaria-Gebieten Afrikas hat das **HbS-Allel** (Sichelzell-Allel) eine hohe Frequenz (~10–20%), obwohl homozygote HbS/HbS-Individuen an schwerer Sichelzellanämie leiden. Welches evolutionäre Prinzip erklärt dies am besten?",
          options: [
          "Genetischer Drift – zufällige Frequenzerhöhung in kleinen Populationen",
          "Heterozygoten-Vorteil (Balancing Selection) – HbA/HbS-Individuen haben Malaria-Resistenz (höhere Fitness)",
          "Positive Selektion für HbS/HbS-Homozygote, da Sichelzellanämie Schutz vor Malaria bietet",
          "Migration – Einwanderung von HbS-Trägern aus anderen Regionen",
          "Mutation – hohe Mutationsrate von HbA zu HbS in Malaria-Gebieten"
          ],
          correctIndex: 1,
          explanation: "**Heterozygoten-Vorteil (Balancing Selection):** In Malaria-Gebieten: **HbA/HbA** (normal) → Malaria-anfällig (Fitness ↓), **HbA/HbS** (Heterozygot) → **Malaria-Resistenz** (Fitness ↑, Vorteil!), **HbS/HbS** (homozygot) → Sichelzellanämie (Fitness ↓↓). **HbS-Allel bleibt erhalten**, da Heterozygote den höchsten reproduktiven Erfolg haben. Dies erklärt die hohe HbS-Frequenz trotz nachteiliger Homozygotie. Wichtig: **Selektion**, nicht Drift!",
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'bio-5-07',
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
          merksatz: "Still = gleiche AS. Missense = andere AS (Sichelzelle: Glu → Val). Nonsense = Stopp-Codon, verkürztes Protein.",
        },
        {
          heading: "Insertionen, Deletionen und Reparaturmechanismen",
          text: "Frameshift-Mutationen entstehen, wenn Insertionen oder Deletionen kein Vielfaches von 3 Nukleotiden umfassen — der Leserahmen verschiebt sich, alle nachfolgenden Codons werden falsch gelesen. In-Frame-Indels (Vielfaches von 3) entfernen oder fügen Aminosäuren ein, ohne den Leserahmen zu verschieben (z. B. ΔF508 bei Mukoviszidose). Defekte DNA-Reparatur prädisponiert zu Krebs: MMR-Defekt → Lynch-Syndrom, NER-Defekt → Xeroderma pigmentosum, BRCA1/2-Defekt → Brustkrebs.",
          merksatz: "Frameshift ≠ 3n Nukleotide → Leserahmen verschoben. In-Frame = 3n, Aminosäure fehlt (ΔF508). MMR-Defekt → Lynch, NER-Defekt → Xeroderma pigmentosum.",
        },
      ],
      merksätze: [
        "Stille (Silent) Mutation: Codon ändert sich, Aminosäure gleich (keine Folge). Missense: Codon → andere Aminosäure (Sichelzelle: Glu → Val). Nonsense: Codon → Stopp (vorzeitiger Abbruch, Protein verkürzt).",
        "Frameshift-Mutation: Insertion/Deletion ungleich 3n Nukleotide → Leserahmen verschoben. Alle nachfolgenden Codons falsch → komplett anderes Protein. In-Frame (3n): Aminosäure fehlt, Leserahmen OK (z. B. ΔF508 Mukoviszidose).",
        "DNA-Reparatur-Defekte: MMR-Defekt → Lynch-Syndrom (Darmkrebs ↑). NER-Defekt → Xeroderma pigmentosum (Hautkrebs ↑, UV-Sensitivität). BRCA1/2-Mutation → Brustkrebs ↑.",
      ],
      selfTest: [
        {
          question: "Eine Punktmutation im β-Globin-Gen führt zur Veränderung des Codons GAG (Glutamat) zu GTG (Valin) an Position 6. Welcher Mutationstyp liegt vor, und welche Erkrankung entsteht?",
          options: [
          "Stille Mutation (Silent Mutation) – keine Proteinveränderung, keine klinische Relevanz",
          "Missense-Mutation – Aminosäure-Austausch (Glu → Val), führt zu Sichelzellanämie (HbS)",
          "Nonsense-Mutation – vorzeitiger Stopp-Codon, verkürztes β-Globin-Protein",
          "Frameshift-Mutation – Leserahmen verschoben, komplett anderes Protein",
          "In-Frame-Deletion – Phenylalanin 508 fehlt, führt zu Mukoviszidose"
          ],
          correctIndex: 1,
          explanation: "**Missense-Mutation:** Codon-Änderung → **andere Aminosäure**. GAG (Glu) → GTG (Val) an Position 6 des β-Globins → **HbS (Sichelzell-Hämoglobin)**. Folge: **Sichelzellanämie** (Erythrozyten sichelförmig bei Hypoxie, Hämolyse, Gefäßverschlüsse). Vererbung: Autosomal-kodominant (HbA/HbS Träger meist asymptomatisch, HbS/HbS schwere Anämie). Wichtig: **Einzelne Aminosäure-Änderung** kann massive klinische Folgen haben!",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Ein Gen hat die Sequenz **AUG-UCC-GAA-GUU**. Durch Deletion eines einzelnen Nukleotids (C an Position 5) entsteht **AUG-UCG-AAG-UU**. Welcher Mutationstyp liegt vor, und was ist die Folge?",
          options: [
          "Stille Mutation – gleiche Aminosäuresequenz, keine Proteinveränderung",
          "Missense-Mutation – eine Aminosäure geändert, Protein leicht verändert",
          "Frameshift-Mutation – Leserahmen verschoben, alle nachfolgenden Codons falsch gelesen",
          "In-Frame-Deletion – eine Aminosäure fehlt, Leserahmen erhalten",
          "Nonsense-Mutation – vorzeitiger Stopp-Codon, Translationsabbruch"
          ],
          correctIndex: 2,
          explanation: "**Frameshift-Mutation:** Deletion von **1 Nukleotid** (≠ Vielfaches von 3) → **Leserahmen verschoben**. Original: AUG (Met) - UCC (Ser) - GAA (Glu) - GUU (Val). Nach Deletion: AUG (Met) - **UCG (Ser)** - **AAG (Lys)** - ... → alle **nachfolgenden Codons falsch**. Folge: **Komplett anderes Protein** (meist nicht-funktional, oft vorzeitiges Stopp-Codon). Wichtig: **In-Frame** (3n Nukleotide) → Aminosäure fehlt, **Frameshift** (≠ 3n) → komplett falsch!",
          difficulty: 3,
          tags: [],
        },
        {
          question: "Die häufigste Mutation bei Mukoviszidose (Cystic Fibrosis) ist **ΔF508** (Deletion von 3 Nukleotiden im CFTR-Gen). Welche Aussage ist korrekt?",
          options: [
          "Frameshift-Mutation – der Leserahmen ist verschoben, das CFTR-Protein ist komplett verändert",
          "In-Frame-Deletion – Phenylalanin an Position 508 fehlt, Leserahmen bleibt erhalten, CFTR fehlgefaltet",
          "Nonsense-Mutation – vorzeitiger Stopp-Codon an Position 508, verkürztes CFTR-Protein",
          "Missense-Mutation – Phenylalanin 508 wird zu Valin ausgetauscht, CFTR funktional verändert",
          "Stille Mutation – keine Proteinveränderung, Mukoviszidose entsteht durch regulatorische Mutation"
          ],
          correctIndex: 1,
          explanation: "**ΔF508 (In-Frame-Deletion):** Deletion von **3 Nukleotiden** (Vielfaches von 3) → **Phenylalanin an Position 508 fehlt**, aber **Leserahmen erhalten**. CFTR-Protein ist **fehlgefaltet** → ER-assoziierte Degradation (Abbau) → Chlorid-Transport ↓ → zähes Sekret (Lunge, Pankreas). Wichtig: **In-Frame** (3n) vs. **Frameshift** (≠ 3n)! Vererbung: Autosomal-rezessiv. ~70% der Mukoviszidose-Fälle haben ΔF508.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "UV-Strahlung führt zur Bildung von **Thymin-Dimeren** (benachbarte Thymidine vernetzen sich). Welcher DNA-Reparaturmechanismus behebt diesen Schaden, und welche Erkrankung entsteht bei Defekt?",
          options: [
          "Mismatch-Reparatur (MMR) – Defekt führt zu Lynch-Syndrom (Darmkrebs ↑)",
          "Basenexzisionsreparatur (BER) – Defekt führt zu allgemeiner Mutationshäufung",
          "Nukleotidexzisionsreparatur (NER) – Defekt führt zu Xeroderma pigmentosum (Hautkrebs ↑, UV-Sensitivität)",
          "Doppelstrangbruch-Reparatur (NHEJ/HR) – Defekt führt zu BRCA-assoziiertem Brustkrebs",
          "Direkte Reparatur (O6-Methylguanin-DNA-Methyltransferase) – Defekt führt zu Gliomen"
          ],
          correctIndex: 2,
          explanation: "**Nukleotidexzisionsreparatur (NER):** Behebt **Thymin-Dimere** (UV-Schäden) und große DNA-Addukte. **Defekt → Xeroderma pigmentosum (XP):** Autosomal-rezessive Erkrankung, **extreme UV-Sensitivität** → **Hautkrebs ↑** (Basalzellkarzinom, Melanom), Photodermatitis, neurologische Störungen. Wichtig: **NER entfernt UV-Schäden**, MMR korrigiert Basenfehlpaarungen (Lynch-Syndrom), BRCA repariert Doppelstrangbrüche (Brustkrebs).",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Eine Mutation führt zur Veränderung des Codons **CAA** (Glutamin) zu **UAA** (Stopp-Codon). Welcher Mutationstyp liegt vor, und was ist die wahrscheinlichste Folge?",
          options: [
          "Stille Mutation – gleiche Aminosäure (Glutamin), keine Proteinveränderung",
          "Missense-Mutation – Glutamin wird zu einer anderen Aminosäure ausgetauscht",
          "Nonsense-Mutation – vorzeitiger Translationsabbruch, verkürztes, meist nicht-funktionales Protein",
          "Frameshift-Mutation – Leserahmen verschoben, alle nachfolgenden Codons falsch",
          "In-Frame-Insertion – zusätzliche Aminosäure eingefügt, Protein verlängert"
          ],
          correctIndex: 2,
          explanation: "**Nonsense-Mutation:** Codon-Änderung → **Stopp-Codon** (UAA, UAG, UGA). CAA (Glutamin) → UAA (Stopp) → **vorzeitiger Translationsabbruch**. Folge: **Verkürztes Protein** (meist **nicht-funktional**, da C-Terminus fehlt). Klinische Beispiele: ~10–15% der Duchenne-Muskeldystrophie-Fälle (Nonsense-Mutationen im DMD-Gen). Wichtig: **Stopp-Codon** statt Aminosäure → Translation endet vorzeitig!",
          difficulty: 1,
          tags: [],
        },
      ],
    }
  ],
};
