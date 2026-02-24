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
      stichworte: [
        "Uniformität",
        "Spaltungsregel",
        "Unabhängigkeit",
        "Dominant",
        "Rezessiv",
        "Kreuzungsschema",
        "Mendel",
        "Phänotyp",
        "Genotyp",
      ],
      content: `## Einleitung

Die klassische Genetik bildet das Fundament der Vererbungslehre und geht auf Gregor Mendels Kreuzungsversuche mit Erbsen zurück. Sie beschreibt, wie Merkmale über Generationen hinweg nach vorhersagbaren Regeln weitergegeben werden. Für den MedAT ist das sichere Beherrschen der Mendelschen Regeln, der Dominanzverhältnisse und der Kreuzungsschemata unverzichtbar, da diese Themen regelmäßig geprüft werden.

**Das Wichtigste auf einen Blick:**
- Drei Mendelsche Regeln: Uniformität, Spaltung (3:1), Unabhängigkeit (9:3:3:1)
- Genotyp (AA, Aa, aa) vs. Phänotyp (sichtbares Merkmal)
- Dominant-rezessiv, intermediär und kodominant als Dominanzverhältnisse
- Testkreuzung mit aa zur Genotypbestimmung
- Autosomal-rezessive Erkrankungen: 25% Risiko bei Aa × Aa

---

## Grundbegriffe der Genetik

Gen, Allel, Genotyp und Phänotyp sind die Grundbegriffe der klassischen Genetik. Homozygote Individuen tragen zwei gleiche Allele (AA oder aa), heterozygote zwei verschiedene (Aa). Dominante Allele setzen sich auch im heterozygoten Zustand durch, rezessive nur bei Homozygotie.

> **Merke:** Genotyp = genetische Ausstattung (AA, Aa, aa); Phänotyp = sichtbares Merkmal. Dominant setzt sich durch, rezessiv nur bei aa sichtbar.

---

## Mendelsche Regeln

Die 1. Mendelsche Regel (Uniformitätsregel) besagt: Homozygote Eltern (AA × aa) liefern in F₁ 100% uniforme Heterozygote (Aa). Die 2. Regel (Spaltungsregel): F₁-Hybriden (Aa × Aa) spalten in F₂ im Verhältnis 3:1 (Phänotyp) bzw. 1:2:1 (Genotyp). Die 3. Regel (Unabhängigkeitsregel): Zwei unabhängige Gene (RrGg × RrGg) ergeben in F₂ das Verhältnis 9:3:3:1.

> **Merke:** 1. Uniformität (AA × aa → 100% Aa), 2. Spaltung (Aa × Aa → 3:1 Phänotyp), 3. Unabhängigkeit (RrGg × RrGg → 9:3:3:1).

---

## Dominanzverhältnisse und Testkreuzung

Bei intermediärer Dominanz zeigt Aa einen Mischphänotyp (F₂-Verhältnis 1:2:1). Bei Kodominanz werden beide Allele gleichzeitig exprimiert (AB0-System: A^AB^B → AB). Die Testkreuzung mit einem homozygot rezessiven Partner (aa) klärt, ob ein dominanter Phänotyp AA oder Aa zugrunde liegt: 100% dominant → AA, 1:1 → Aa.

> **Merke:** Testkreuzung × aa: 100% dominant = AA; 1:1 (dominant:rezessiv) = Aa.

---

## Das AB0-Blutgruppensystem als Modellbeispiel

Das **AB0-Blutgruppensystem** ist ein klassisches Prüfungsbeispiel für multiple Allele und Kodominanz. Es existieren drei Allele: **I^A**, **I^B** und **i** (= I^O). I^A und I^B sind **kodominant** zueinander (Genotyp I^A I^B → Blutgruppe AB mit beiden Antigenen), während beide über **i** dominieren. Daraus ergeben sich sechs mögliche Genotypen für vier Phänotypen: Blutgruppe A (I^A I^A oder I^A i), Blutgruppe B (I^B I^B oder I^B i), Blutgruppe AB (I^A I^B) und Blutgruppe 0 (ii). Für die MedAT-Prüfung sind Kreuzungsaufgaben typisch: Welche Blutgruppen können die Kinder eines Elternpaares I^A i x I^B i haben? Antwort: alle vier Blutgruppen sind möglich (I^A I^B = AB, I^A i = A, I^B i = B, ii = 0, je 25%). Das **Rhesus-System** folgt einem einfachen dominant-rezessiven Erbgang: Rh-positiv (DD oder Dd) ist dominant über Rh-negativ (dd). Klinisch relevant ist die **Rhesus-Inkompatibilität** bei Rh-negativer Mutter und Rh-positivem Kind (Morbus haemolyticus neonatorum), die durch Anti-D-Prophylaxe verhindert wird.

> **Merke:** AB0: I^A und I^B kodominant (AB), beide dominant über i. Eltern I^A i x I^B i → alle 4 Blutgruppen möglich. Rhesus: D dominant, dd = Rh-negativ. Anti-D-Prophylaxe bei Rh-neg. Mutter.

---

## Dihybrider Erbgang und Kreuzungsschema

Beim **dihybriden Erbgang** werden zwei unabhängige Gene gleichzeitig betrachtet. Die Kreuzung **RrGg x RrGg** ergibt über das **Punnett-Quadrat** (4x4 = 16 Felder) das F₂-Verhältnis **9:3:3:1** (9 R_G_, 3 R_gg, 3 rrG_, 1 rrgg). Voraussetzung ist die **Unabhängigkeitsregel** (3. Mendelsche Regel): Die Gene müssen auf verschiedenen Chromosomen liegen oder so weit entfernt auf demselben Chromosom, dass sie sich wie unabhängig verhalten. Ein häufiger MedAT-Fehler ist die Annahme von 9:3:3:1 bei **gekoppelten Genen** -- hier überwiegen die Parentaltypen, und Rekombinanten sind seltener. Die Wahrscheinlichkeitsberechnung nutzt die **Produktregel**: P(RrGg → rrgg) = P(rr) x P(gg) = 1/4 x 1/4 = 1/16. Bei drei unabhängigen Genen (trihybrid) ergeben sich 64 Kombinationen mit einem Verhältnis von 27:9:9:9:3:3:3:1.

> **Merke:** Dihybrid 9:3:3:1 nur bei Unabhängigkeit. Punnett-Quadrat: 4x4 = 16 Felder. Produktregel: P(rrgg) = 1/4 x 1/4 = 1/16. Trihybrid: 64 Kombinationen.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Monohybrider Erbgang (3:1 in F₂), dominant/rezessiv, Genotyp/Phänotyp, Kreuzungsschema, Mendel-Regeln.

**Ergänzend vertiefend:** Dihybride Kreuzung; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Phänotyp-Verhältnis in F₂ bei dominant-rezessivem monohybridem Erbgang (3:1)
- Berechnung von Genotyp-Verhältnissen bei dihybridem Erbgang (9:3:3:1)
- Testkreuzung zur Unterscheidung von AA vs. Aa

**Typische Prüfungsfallen / Verwechslungen:**
- Genotyp-Verhältnis 1:2:1 vs. Phänotyp-Verhältnis 3:1 (bei dominant-rezessiv)
- Intermediär (Mischphänotyp, z. B. rosa) vs. Kodominanz (beide exprimiert, z. B. AB)
- 1. Regel (homozygote Eltern → F₁ uniform) vs. 2. Regel (heterozygote Eltern → F₂ spaltet)
- Phänotyp-Verhältnis 3:1 gilt nur bei dominant-rezessiv, bei intermediär ist es 1:2:1
- Unabhängigkeitsregel gilt nur bei Genen auf verschiedenen Chromosomen (nicht bei Kopplung)

**Prüfungsrelevante Zahlen/Fakten:**
- F₂-Spaltung monohybrid: 3:1 Phänotyp, 1:2:1 Genotyp
- F₂-Spaltung dihybrid: 9:3:3:1 (bei Unabhängigkeit)
- Testkreuzung: 100% dominant = AA; 1:1 = Aa
- Aa × Aa bei autosomal-rezessiver Erkrankung: 25% krank, 50% Carrier, 25% gesund
- AB0-System: I^A und I^B kodominant zueinander, beide dominant über i

---

## Zusammenfassung (ultrakompakt)

- **Uniformitätsregel**: Kreuzung homozygoter Eltern (AA × aa) → F₁ einheitlich heterozygot (Aa)
- **Spaltungsregel**: F₁ × F₁ (Aa × Aa) → F₂: 3 dominant : 1 rezessiv (Phänotyp-Verhältnis 3:1)
- **Unabhängigkeitsregel**: Gene auf verschiedenen Chromosomen segregieren unabhängig → dihybride Kreuzung: 9:3:3:1
- **Genotyp** = genetische Ausstattung; **Phänotyp** = äußerlich sichtbares Merkmal
- Dominant-rezessiv: Aa zeigt nur dominanten Phänotyp; **intermediär**: Mischphänotyp; **kodominant**: beide Allele sichtbar (Beispiel: Blutgruppe AB)
- **Testkreuzung** (× aa): bestimmt ob Genotyp AA oder Aa vorliegt (1:1 → Aa; alle dominant → AA)
- Autosomal-rezessiv Risikoberechnung: Aa × Aa → 25% AA, 50% Aa, **25% aa** (erkrankt)`,
      lernziele: [
        "Die Mendelschen Regeln (Uniformitäts-, Spaltungs- und Unabhängigkeitsregel) erklären und auf Kreuzungsbeispiele anwenden können.",
        "Den Unterschied zwischen Genotyp und Phänotyp sowie zwischen homozygot und heterozygot beschreiben können.",
        "Dominant-rezessive, intermediäre und kodominante Dominanzverhältnisse unterscheiden und Beispiele nennen können.",
        "Die Testkreuzung (Rückkreuzung) erklären und zur Genotypbestimmung einsetzen können.",
        "Klinische Beispiele autosomal-dominanter und autosomal-rezessiver Erbkrankheiten beim Menschen benennen können.",
      ],
      sections: [],
      merksätze: [
        "Mendelsche Regeln: 1. Uniformität (AA × aa → 100% Aa, uniform), 2. Spaltung (Aa × Aa → 3:1 Phänotyp, 1:2:1 Genotyp), 3. Unabhängigkeit (RrGg × RrGg → 9:3:3:1, 2 Gene unabhängig).",
        "Dominanz-Typen: Dominant-rezessiv: AA = Aa ≠ aa (3:1 Phänotyp). Intermediär: AA ≠ Aa ≠ aa (1:2:1 Phänotyp = Genotyp). Kodominanz: Beide exprimiert (AB0: A^AB^B → AB).",
        "Autosomal-rezessiv: aa krank, Aa gesund (Carrier). Aa × Aa → 25% krank (aa), 50% Carrier (Aa), 25% gesund (AA). Beispiele: Mukoviszidose, Sichelzellanämie, PKU.",
      ],
      diagram: "blood-groups",
      klinischerBezug:
        "Die Mendelschen Regeln bilden die Grundlage der genetischen Beratung. Bei autosomal rezessiven Erkrankungen wie Mukoviszidose (Aa × Aa → 25% Erkrankungsrisiko) ermöglicht das Spaltungsgesetz die Risikoberechnung für Nachkommen. Das Verständnis von Dominanz, Rezessivität und Heterozygotenfrequenz ist essenziell für Pränataldiagnostik und Carrier-Screening.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Bei einer Kreuzung zweier heterozygoter Eltern (Aa × Aa) für ein autosomal rezessives Merkmal: Wie hoch ist die Wahrscheinlichkeit, dass das erste Kind erkrankt und das zweite Kind gesunder Träger ist?",
        answer:
          "P(1. Kind aa) = 1/4; P(2. Kind Aa) = 2/4 = 1/2. Da die Ereignisse unabhängig sind: 1/4 × 1/2 = 1/8. Jede Schwangerschaft ist ein unabhängiges Ereignis — vorherige Kinder ändern die Wahrscheinlichkeit nicht.",
      },
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
      stichworte: [
        "Genkopplung",
        "Crossing-over",
        "Rekombination",
        "Karyotyp",
        "Autosomen",
        "Gonosomen",
        "Heterochromatin",
        "Chromosomen",
      ],
      content: `## Einleitung

Chromosomen sind die strukturellen Träger der Erbinformation und bestehen aus DNA, die um Histonproteine gewickelt ist. Der Mensch besitzt 46 Chromosomen (22 Autosomenpaare + XX oder XY), und Abweichungen in Zahl oder Struktur führen zu klinisch bedeutsamen Syndromen. Im MedAT werden Karyotyp-Notation, numerische Aberrationen (Trisomie 21, Turner, Klinefelter) und strukturelle Chromosomenstörungen häufig abgefragt.

**Das Wichtigste auf einen Blick:**
- Mensch: 46 Chromosomen (2n = 46), 22 Autosomenpaare + 1 Gonosomenpaar
- Karyotyp-Notation: 46,XX (weiblich), 46,XY (männlich)
- Trisomie 21 (Down-Syndrom): häufigste Autosom-Trisomie (1:700)
- Klinefelter (47,XXY) und Turner (45,X) als häufige gonosomale Aberrationen
- Nicht-Disjunktion als Hauptursache, Risiko steigt mit mütterlichem Alter

---

## Chromosomenstruktur und Karyotyp

Chromosomen bestehen aus DNA und Histonen. Das Zentromer verbindet die beiden Schwester-Chromatiden und dient als Ansatz für Spindelfasern. Telomere schützen die Chromosomenenden und verkürzen sich bei jeder Teilung. Der normale menschliche Karyotyp umfasst 46 Chromosomen (22 Autosomenpaare + XX/XY).

> **Merke:** 46,XX = weiblich; 46,XY = männlich. p-Arm = kurz, q-Arm = lang. Telomere schützen, verkürzen sich bei jeder Teilung.

---

## Numerische Chromosomenaberrationen

Trisomie 21 (Down-Syndrom, 47,+21) ist die häufigste Autosom-Trisomie (1:700), mit fazialer Dysmorphie, Herzfehlern und geistiger Behinderung. Klinefelter-Syndrom (47,XXY) ist männlich mit Hypogonadismus und Infertilität. Turner-Syndrom (45,X) ist weiblich mit Kleinwuchs, Pterygium colli und Ovarial-Dysgenesie. Das Risiko für Nicht-Disjunktionsfehler steigt mit dem mütterlichen Alter.

> **Merke:** Klinefelter (47,XXY): männlich, Hypogonadismus, Infertilität. Turner (45,X): weiblich, Kleinwuchs, Streak-Gonaden.

---

## Strukturelle Chromosomenaberrationen

Deletion (Verlust), Duplikation (Verdopplung), Translokation (Verlagerung) und Inversion (Drehung) sind strukturelle Aberrationen. Wichtige klinische Syndrome: Cri-du-chat (5p-Deletion), Williams-Beuren (7q11.23) und DiGeorge (22q11, CATCH-22). Balancierte Translokationen sind beim Träger oft klinisch unauffällig, erhöhen aber das Risiko für unbalancierte Nachkommen.

> **Merke:** Cri-du-chat = 5p-Deletion (Katzenschrei). DiGeorge = 22q11 (CATCH-22: Cardiac, Abnormal face, Thymus, Cleft, Hypokalzämie).

---

## Genkopplung und Crossing-over

Gene auf demselben Chromosom werden **gekoppelt vererbt** und folgen nicht der 3. Mendelschen Regel (Unabhängigkeit). Durch **Crossing-over** in der Prophase I der Meiose können homologe Chromosomen genetisches Material austauschen, wodurch **Rekombinanten** entstehen. Die **Rekombinationsfrequenz** gibt den Abstand zwischen zwei Genloci an und wird in **centiMorgan (cM)** gemessen: 1 cM entspricht 1% Rekombination. Gene mit einer Rekombinationsfrequenz von 50% verhalten sich wie unabhängige Gene (auf verschiedenen Chromosomen oder weit entfernt). Die Kopplungsanalyse war historisch die Grundlage der **Genkartierung** und wird heute noch in der LOD-Score-Analyse zur Identifikation von Krankheitsgenen eingesetzt.

> **Merke:** Genkopplung = Gene auf demselben Chromosom, werden zusammen vererbt. Crossing-over bricht Kopplung. 1 cM = 1% Rekombination. RF = 50% → Gene verhalten sich wie ungekoppelt.

---

## Pränataldiagnostik und Chromosomenanalyse

Chromosomenaberrationen werden pränatal durch verschiedene Methoden diagnostiziert. Das **Ersttrimester-Screening** (11.--14. SSW) kombiniert Nackentransparenz-Messung mit Serummarkern (PAPP-A, freies beta-hCG) zur Risikoabschätzung. Der **nicht-invasive Pränataltest (NIPT)** analysiert zellfreie fetale DNA aus mütterlichem Blut und erreicht für Trisomie 21 eine Sensitivität von >99% bei einer Falsch-positiv-Rate von <0,1%. Invasive Verfahren wie **Chorionzottenbiopsie** (10.--12. SSW) und **Amniozentese** (15.--17. SSW) ermöglichen die definitive Karyotypisierung, bergen aber ein Fehlgeburtsrisiko von 0,1--0,5%. Die **FISH-Analyse** (Fluoreszenz-in-situ-Hybridisierung) erlaubt den gezielten Nachweis spezifischer chromosomaler Regionen mittels fluoreszenzmarkierter DNA-Sonden und wird für Schnelldiagnostik bei Trisomie 13, 18, 21 eingesetzt. Die **Robertsonsche Translokation** ist eine Sonderform, bei der zwei akrozentrische Chromosomen (13, 14, 15, 21, 22) am Zentromer fusionieren; Träger einer rob(14;21) haben ein erhöhtes Risiko für Translokations-Trisomie 21 bei den Nachkommen, unabhängig vom mütterlichen Alter.

> **Merke:** NIPT: zellfreie fetale DNA im Mutterblut, >99% Sensitivität für Trisomie 21. Chorionzottenbiopsie (10.--12. SSW) und Amniozentese (15.--17. SSW) = invasiv, definitiver Karyotyp. Robertsonsche Translokation rob(14;21) → altersunabhängiges Trisomie-21-Risiko.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Karyotyp (47,XY,+21 = Trisomie 21), Chromosomenanomalien (Trisomie, Monosomie, Translokation), Geschlechtschromosomen (XX/XY), Aneuploidie.

**Ergänzend vertiefend:** Mosaike; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Karyotyp-Notation interpretieren (z. B. 47,XY,+21)
- Klinische Merkmale von Trisomie 21, Klinefelter und Turner zuordnen
- Unterscheidung numerische vs. strukturelle Chromosomenaberrationen

**Typische Prüfungsfallen / Verwechslungen:**
- Klinefelter (47,XXY, männlich) vs. Turner (45,X, weiblich) — Geschlecht durch Y-Chromosom bestimmt
- p-Arm (kurz, petit) vs. q-Arm (lang) eines Chromosoms
- Balancierte Translokation (Träger gesund) vs. unbalancierte (Phänotyp betroffen)
- Trisomie (3 Kopien eines Chromosoms) vs. Triploidie (3n = 69 Chromosomen gesamt)

**Prüfungsrelevante Zahlen/Fakten:**
- Trisomie 21: Häufigkeit 1:700, steigt mit mütterlichem Alter
- Klinefelter (47,XXY): 1:600 männliche Neugeborene
- Turner (45,X): 1:2.500 weibliche Neugeborene
- Cri-du-chat: 5p-Deletion; DiGeorge: 22q11-Deletion (CATCH-22)
- Ca. 50% aller Spontanaborte durch Chromosomenaberrationen
- Robertsonsche Translokation: Fusion zweier akrozentrischer Chromosomen (z. B. rob(14;21) → Translokations-Trisomie 21)

---

## Zusammenfassung (ultrakompakt)

- Mensch: **46 Chromosomen** (44 Autosomen + 2 Geschlechtschromosomen); ♀ = 46,XX; ♂ = 46,XY
- **Aneuploidie** = falsche Chromosomenzahl; entsteht durch **Nicht-Disjunktion** in der Meiose; Risiko steigt mit mütterlichem Alter
- **Trisomie 21** (Down-Syndrom, 47,+21): faziale Dysmorphie, Herzfehler, Trisomie-bedingte Intelligenzminderung, erhöhtes Leukämierisiko
- **Klinefelter-Syndrom** (47,XXY): Mann mit Hypogonadismus, Infertilität, evtl. Gynäkomastie
- **Turner-Syndrom** (45,X): Frau mit Kleinwuchs, Gonadendysgenesie, Herzfehler (Aortenisthmusstenose)
- Strukturelle Aberrationen: Deletion, Duplikation, Translokation (Robertson: 14/21 → familiäres Down-Syndrom), Inversion
- **Cri-du-chat** (5p-): Katzenschreien im Säuglingsalter; **DiGeorge** (22q11): Herzfehler, Thymusaplasie → T-Zell-Mangel`,
      lernziele: [
        "Den Aufbau eines Chromosoms (Zentromer, Telomere, p- und q-Arm) beschreiben können.",
        "Karyotyp-Notation lesen und interpretieren können (z. B. 46,XX; 47,XY,+21).",
        "Die häufigsten numerischen Chromosomenaberrationen (Trisomie 21, Klinefelter, Turner) mit Karyotyp und Klinik benennen können.",
        "Strukturelle Aberrationen (Deletion, Duplikation, Translokation, Inversion) unterscheiden und klinische Syndrome zuordnen können.",
        "Die Nicht-Disjunktion als Ursache von Aneuploidie erklären und den Einfluss des mütterlichen Alters kennen.",
      ],
      sections: [],
      diagram: "mitosis",

      merksätze: [
        "Karyotyp-Notation: 46,XX = weiblich, 46,XY = männlich. 47,XX,+21 = Trisomie 21 weiblich (Down-Syndrom). 47,XXY = Klinefelter (männlich, Y vorhanden), 45,X = Turner (weiblich, kein Y).",
        "Trisomie 21 (Down): Häufigste Autosom-Trisomie (1:700), Inzidenz steigt mit Mutter-Alter. Faziale Dysmorphie (Epikanthus, flaches Profil), Herzfehler (AV-Kanal, VSD).",
        "Deletion-Syndrome: Cri-du-chat (5p-): Katzenschrei, Mikrozephalie. Williams-Beuren (7q11.23): Elfengesicht, Aortenstenose. DiGeorge (22q11, CATCH-22): Cardiac, Abnormal face, Thymus, Cleft, Hypokalzämie.",
      ],
      klinischerBezug:
        "Chromosomenaberrationen sind die häufigste Ursache für Spontanaborte (ca. 50% aller Fehlgeburten). Trisomie 21 (Down-Syndrom, 1:700 Lebendgeburten) wird im Rahmen der Pränataldiagnostik durch NIPT, Chorionzottenbiopsie oder Amniozentese diagnostiziert. Translokationen können familiär gehäuft auftreten und erfordern genetische Beratung bei Kinderwunsch.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Welche Chromosomenaberration liegt vor, wenn bei einer Patientin mit primärer Amenorrhoe der Karyotyp 45,X gefunden wird?",
        answer:
          "Es liegt ein Turner-Syndrom (Monosomie X) vor. Merkmale: Kleinwuchs (fehlende SHOX-Gendosis), Gonadendysgenesie (Streak-Gonaden), Pterygium colli, Schildthorax. Die Monosomie X ist die einzige mit dem Leben vereinbare Monosomie beim Menschen.",
      },
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
      stichworte: [
        "Mitochondriale Vererbung",
        "Maternale Vererbung",
        "Polygenie",
        "Epistasie",
        "Komplementation",
      ],
      content: `## Einleitung

Geninteraktionen beschreiben Phänomene, bei denen Gene nicht unabhängig voneinander wirken, sondern sich gegenseitig beeinflussen. Dies führt zu Abweichungen von den klassischen Mendelschen Spaltungsverhältnissen und erklärt die Komplexität vieler Merkmale. Für den MedAT ist es wichtig, Epistasie, Polygenie und Pleiotropie sicher zu unterscheiden und die modifizierten F₂-Verhältnisse ableiten zu können.

**Das Wichtigste auf einen Blick:**
- Epistasie: ein Gen überdeckt die Wirkung eines anderen (Verhältnis 9:3:4)
- Polygenie: mehrere Gene beeinflussen ein Merkmal additiv (Normalverteilung)
- Pleiotropie: ein Gen beeinflusst mehrere Merkmale (z. B. Sichelzellanämie)
- Komplementierung: zwei rezessive Mutationen in verschiedenen Genen → F₂ = 9:7
- Abweichungen von 9:3:3:1 deuten immer auf Geninteraktion hin

---

## Epistase

Epistase bedeutet, dass ein Gen (das epistatische) die Wirkung eines anderen (des hypostatischen) überdeckt. Beim klassischen Maus-Beispiel maskiert cc (Albino) die Fellfarbe des B-Locus vollständig. Die Kreuzung BbCc × BbCc ergibt statt 9:3:3:1 das Verhältnis 9:3:4 (schwarz:braun:weiß).

> **Merke:** Epistatisches Gen (cc) überdeckt hypostatisches Gen (B/b). Verhältnis 9:3:4.

---

## Polygenie und Pleiotropie

Polygenie: Mehrere Gene beeinflussen ein Merkmal additiv (z. B. Hautfarbe), was zu kontinuierlicher Variation und glockenförmiger Verteilung führt. Pleiotropie: Ein Gen beeinflusst mehrere Merkmale (z. B. HbS → Sichelzellen, Anämie, Gefäßverschlüsse und Malaria-Resistenz bei Heterozygoten).

> **Merke:** Polygenie: viele Gene → ein Merkmal (glockenförmig). Pleiotropie: ein Gen → viele Merkmale (z. B. Sichelzellanämie).

---

## Komplementierung und modifizierte Verhältnisse

Komplementierung: Zwei rezessive Mutationen in verschiedenen Genen (aaBB × AAbb) ergeben in F₁ einen Wildtyp-Phänotyp (AaBb), da sich die funktionalen Allele gegenseitig ergänzen. In F₂ entsteht ein 9:7-Verhältnis. Abweichungen von 9:3:3:1 zeigen stets Geninteraktion an.

> **Merke:** Komplementierung (aaBB × AAbb) → F₁ normal, F₂ = 9:7.

---

## Weitere Formen der Geninteraktion

Neben Epistasie und Komplementierung gibt es weitere Formen modifizierter Spaltungsverhältnisse. Bei **doppelt-dominanter Epistasie** (duplicate dominant epistasis) reicht ein dominantes Allel in einem der beiden Gene für den Phänotyp aus, was ein F₂-Verhältnis von **15:1** ergibt (z. B. Fruchtform bei Hirtentäschel). Bei **dominanter Suppression** unterdrückt ein dominantes Allel eines Gens die Ausprägung eines anderen Gens, Verhältnis **13:3** oder **12:3:1**. Die Unterscheidung verschiedener Geninteraktionen erfolgt in der Praxis durch Rückkreuzungsanalyse und statistische Chi-Quadrat-Tests. **Penetranz** (Anteil der Genotypträger mit Phänotyp) und **Expressivität** (Ausprägungsgrad) modifizieren ebenfalls die beobachteten Verhältnisse: Bei unvollständiger Penetranz zeigen nicht alle Träger eines dominanten Allels den erwarteten Phänotyp, was autosomal-dominante Erbgänge wie Retinoblastom oder BRCA1/2-assoziierte Tumoren betrifft. Variable Expressivität bedeutet, dass derselbe Genotyp unterschiedliche Schweregrade hervorruft (z. B. Neurofibromatose Typ 1 mit Spektrum von Café-au-lait-Flecken bis Plexiforme Neurofibrome).

> **Merke:** Penetranz = Wie viele Träger erkranken (z. B. BRCA1: ~70% Penetranz). Expressivität = Wie stark der Phänotyp ausgeprägt ist. Beide modifizieren klassische Mendel-Verhältnisse.

---

## Mitochondriale Vererbung und Epigenetik

Ein Sonderfall der Geninteraktion ist die **mitochondriale (maternale) Vererbung**: Mitochondrien werden ausschließlich über die Eizelle vererbt (maternaler Erbgang). Mutationen in der mitochondrialen DNA (mtDNA, 16.569 bp, kodiert 37 Gene) verursachen Erkrankungen wie **MELAS** (Myopathie, Enzephalopathie, Laktatazidose, Schlaganfall-ähnliche Episoden) und **LHON** (Leber Hereditäre Optikus-Neuropathie). Charakteristisch ist die **Heteroplasmie**: In einer Zelle existieren normale und mutierte Mitochondrien nebeneinander; der Schwellenwert-Effekt bestimmt, ab welchem Anteil mutierter mtDNA Symptome auftreten. Epigenetische Mechanismen wie **DNA-Methylierung** und **Histon-Modifikation** regulieren die Genexpression ohne Änderung der DNA-Sequenz und können transgenerational weitergegeben werden. Genomisches **Imprinting** (elternspezifische Prägung) bewirkt, dass nur das mütterliche oder väterliche Allel exprimiert wird (z. B. Prader-Willi-Syndrom: väterliches 15q11 deletiert; Angelman-Syndrom: mütterliches 15q11 deletiert).

> **Merke:** Maternale Vererbung: Mutter → alle Kinder, Vater nie. Heteroplasmie = Mischung normaler/mutierter Mitochondrien. Imprinting: Prader-Willi (väterlich) vs. Angelman (mütterlich), beide 15q11.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Dihybride Kreuzung (9:3:3:1), Epistasie (9:3:4), Komplementärgene (9:7), Geninteraktion, modifizierte Spaltungsverhältnisse.

**Ergänzend vertiefend:** Kodominanz; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Modifizierte F₂-Verhältnisse ableiten (9:3:4 bei Epistasie, 9:7 bei Komplementierung)
- Polygenie vs. Pleiotropie unterscheiden und Beispiele nennen
- Heterozygoten-Vorteil der Sichelzellanämie erklären

**Typische Prüfungsfallen / Verwechslungen:**
- Polygenie (viele Gene → ein Merkmal) vs. Pleiotropie (ein Gen → viele Merkmale)
- Epistasie (Gen überdeckt anderes Gen) vs. Dominanz (Allel überdeckt anderes Allel desselben Gens)
- Komplementierung (9:7) vs. Epistasie (9:3:4) — beide weichen von 9:3:3:1 ab
- Additive Polygenie (glockenförmig) vs. dominant-rezessive Einzelgenvererbung (diskrete Klassen)

**Prüfungsrelevante Zahlen/Fakten:**
- Epistasie-Verhältnis: 9:3:4 (statt 9:3:3:1)
- Komplementierung-Verhältnis: 9:7 (statt 9:3:3:1)
- Sichelzellanämie: HbA/HbS → Malaria-Resistenz (Heterozygoten-Vorteil)
- Polygenie: glockenförmige Verteilung durch additive Genwirkung
- CYP2D6-Polymorphismus beeinflusst Metabolisierung von >25% aller Arzneimittel
- Duplicate dominant epistasis: 15:1; dominante Suppression: 12:3:1

---

## Zusammenfassung (ultrakompakt)

- **Epistasie**: ein Gen maskiert die Wirkung eines anderen → modifiziertes F₂-Verhältnis (z. B. 9:3:4 oder 9:7 statt 9:3:3:1)
- **Polygenie**: viele Gene mit additivem Effekt auf ein Merkmal (Hautfarbe, Körpergröße) → stetige, glockenförmige Verteilung
- **Pleiotropie**: ein Gen beeinflusst mehrere Phänotypen (Beispiel: HbS → Sichelzellen + Anämie + Malaria-Resistenz bei Heterozygoten)
- **Komplementierung**: zwei verschiedene Gene müssen je ein funktionales Allel liefern → bei Defekt in beiden → kranker Phänotyp (9:7-Verhältnis)
- **Penetranz**: Anteil der Genträger, die den Phänotyp zeigen (100% = vollständig; <100% = unvollständig)
- **Expressivität**: Ausprägungsgrad des Phänotyps bei Genträgern (variabel = unterschiedliche Schwere)
- Klinische Relevanz: Epistasie und Penetranz erklären, warum Familienmitglieder mit gleichem Genotyp unterschiedlich erkranken`,
      lernziele: [
        "Den Begriff Epistase erklären und das modifizierte Phänotypverhältnis 9:3:4 ableiten können.",
        "Polygenie von Pleiotropie unterscheiden und je ein Beispiel nennen können.",
        "Den Heterozygoten-Vorteil der Sichelzellanämie als Beispiel für Pleiotropie und Selektion erläutern können.",
        "Das Prinzip der Komplementierung und das F₂-Verhältnis 9:7 erklären können.",
        "Abweichungen von Mendelschen Verhältnissen (9:3:3:1) als Hinweis auf Geninteraktion erkennen können.",
      ],
      sections: [],
      merksätze: [
        "Epistase: Epistatisches Gen (c) überdeckt hypostatisches Gen (B/b). Maus-Beispiel: cc (Albino) immer weiß, unabhängig von B. Verhältnis 9:3:4.",
        "Polygenie: Mehrere Gene → ein Merkmal (Hautfarbe, Körpergröße). Additive Wirkung → kontinuierliche Variation (glockenförmig, 1:4:6:4:1).",
        "Pleiotropie: Ein Gen → viele Merkmale. Sichelzellanämie (HbS): Sichelzellen + Anämie + Gefäßverschlüsse + Malaria-Resistenz (Heterozygoten-Vorteil).",
        "Komplementierung: Zwei rezessive Mutationen in verschiedenen Genen (aaBB × AAbb) → F₁ AaBb normal. F₂-Verhältnis 9:7.",
      ],
      diagram: "blood-groups",
      klinischerBezug:
        "Geninteraktionen sind klinisch relevant bei der Pharmakogenetik: CYP2D6-Polymorphismen (Epistasie auf Medikamentenwirkung) beeinflussen die Metabolisierung von >25% aller Arzneimittel. Synthetische Letalität wird therapeutisch genutzt — PARP-Inhibitoren (Olaparib) sind bei BRCA1/2-mutierten Ovarial- und Mammakarzinomen zugelassen.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Bei einer dihybriden Kreuzung zweier doppelt heterozygoter Pflanzen (AaBb × AaBb) wird statt des erwarteten 9:3:3:1-Verhältnisses ein 9:3:4-Verhältnis beobachtet. Welche Geninteraktion liegt vor?",
        answer:
          "Es liegt rezessive Epistasie vor. Das homozygot rezessive Allel eines Gens (bb) maskiert die phänotypische Ausprägung des anderen Gens (A/a), sodass die Klassen 3 (aaBb/aaBB) und 1 (aabb) phänotypisch zusammenfallen → 9:3:4.",
      },
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
      stichworte: [
        "X-chromosomal",
        "X-Inaktivierung",
        "Barr-Körperchen",
        "SRY-Gen",
        "Gonosomale Vererbung",
        "Konduktorin",
      ],
      content: `## Einleitung

Die geschlechtsgebundene Vererbung betrifft Gene auf den Geschlechtschromosomen und zeigt charakteristische Muster, die sich von autosomalen Erbgängen unterscheiden. Aufgrund der Hemizygotie bei Männern (nur ein X-Chromosom) manifestieren sich X-chromosomal rezessive Erkrankungen wie Hämophilie A oder Duchenne-Muskeldystrophie fast ausschließlich bei männlichen Individuen. Das Verständnis dieser Vererbungsmuster ist für den MedAT essenziell, da sie regelmäßig in Stammbaumaufgaben geprüft werden.

**Das Wichtigste auf einen Blick:**
- X-chromosomal rezessiv: Männer häufiger betroffen (hemizygot), keine Vater-Sohn-Übertragung
- Konduktorin: heterozygote Frau (X^A X^a), phänotypisch gesund, gibt Allel weiter
- X-Inaktivierung (Lyon-Hypothese): Zufällige Stilllegung eines X-Chromosoms → Barr-Körperchen
- Y-chromosomal: Nur Männer betroffen, Vater → 100% Söhne
- Klinische Beispiele: Hämophilie A, Duchenne, Rot-Grün-Blindheit (alle X-rezessiv)

---

## X-chromosomal rezessive Vererbung

Bei X-chromosomal rezessiver Vererbung sind Männer (X^a Y, hemizygot) häufiger krank, da sie nur ein X-Chromosom besitzen. Frauen sind als Konduktorinnen (X^A X^a) meist gesund. Es gibt keine Vater-Sohn-Übertragung (Vater gibt Y an Söhne). Klinische Beispiele: Hämophilie A, Rot-Grün-Blindheit, Muskeldystrophie Duchenne.

> **Merke:** Männer häufiger krank (hemizygot, X^a Y). Töchter meist gesund (Konduktorin). Keine Vater-Sohn-Übertragung.

---

## X-chromosomal dominante Vererbung und X-Inaktivierung

Bei X-chromosomal dominanter Vererbung gibt ein kranker Vater (X^A Y) sein X^A an alle Töchter (100% krank) und sein Y an alle Söhne (100% gesund). Die X-Inaktivierung (Lyon-Hypothese) inaktiviert in weiblichen Zellen zufällig eines der beiden X-Chromosomen (Barr-Körperchen), was ein Mosaik-Muster erzeugt (z. B. Kaliko-Katzen).

> **Merke:** Kranker Vater (X^A Y) → 100% Töchter krank, 100% Söhne gesund. X-Inaktivierung = Barr-Körperchen, Mosaik-Muster.

---

## Y-chromosomale Vererbung

Y-chromosomale Gene betreffen ausschließlich Männer. Die Übertragung erfolgt zu 100% vom Vater auf alle Söhne, Töchter sind nie betroffen. Wichtige Gene: SRY (Hoden-Entwicklung → männlicher Phänotyp), AZF (Spermatogenese; Deletion → Infertilität).

> **Merke:** Y-chromosomal: Nur Männer, Vater → 100% Söhne. SRY = Hoden, AZF = Spermatogenese.

## Vergleich der Erbgänge

| Erbgang | Häufiger betroffen | Vater-Sohn | Beispiel |
| --- | --- | --- | --- |
| Autosomal-dominant | Beide gleich | Ja (50%) | Huntington, Marfan |
| Autosomal-rezessiv | Beide gleich | Ja (25% bei Aa×Aa) | Mukoviszidose, PKU |
| X-chromosomal rez. | Männer (hemizygot) | Nein | Hämophilie A, Duchenne |
| X-chromosomal dom. | Frauen (2 X) | Nein | Rett-Syndrom |
| Y-chromosomal | Nur Männer | Ja (100%) | AZF-Deletion |

---

## Sonderfälle und klinische Konsequenzen der X-Inaktivierung

Die X-Inaktivierung hat wichtige klinische Konsequenzen, die über das Kaliko-Katzen-Beispiel hinausgehen. Bei weiblichen Konduktorinnen von X-chromosomal rezessiven Erkrankungen kann eine **skewed X-inactivation** (ungleiche Inaktivierung) dazu führen, dass bevorzugt das gesunde X inaktiviert wird und die Trägerin milde Symptome zeigt. Dies erklärt, warum einige Konduktorinnen der Duchenne-Muskeldystrophie eine milde Muskelschwäche oder Kardiomyopathie entwickeln. Die Anzahl der **Barr-Körperchen** berechnet sich als Anzahl X-Chromosomen minus 1: XX = 1 Barr-Körperchen, XXX (Triple X) = 2, XXY (Klinefelter) = 1, X0 (Turner) = 0. Beim **Rett-Syndrom** (X-chromosomal dominant, MECP2-Gen) sind fast ausschließlich Mädchen betroffen, da die Mutation bei Jungen (hemizygot) meist letal ist. Die **pseudoautosomale Region** (PAR) an den Enden der Geschlechtschromosomen ermöglicht Crossing-over zwischen X und Y während der Meiose und enthält Gene, die nicht der geschlechtsgebundenen Vererbung unterliegen (z. B. SHOX-Gen für Körpergröße; Deletion → Kleinwuchs beim Turner-Syndrom).

> **Merke:** Skewed X-Inaktivierung: Konduktorinnen können milde Symptome zeigen (z. B. Duchenne-Carrier mit Kardiomyopathie). Barr-Körperchen = X minus 1. Rett-Syndrom: X-dom., bei Jungen letal. PAR: X-Y-Crossing-over, SHOX-Gen.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** X-chromosomal rezessiv (z. B. Hämophilie, Rot-Grün-Blindheit), Stammbaum (väterlich an Söhne), gonosomal vs. autosomal, Trägerinnen.

**Ergänzend vertiefend:** X-inaktivierung; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Vererbungsmuster X-chromosomal rezessiver Erkrankungen in Stammbäumen erkennen
- Warum sind Männer bei X-rez. Erkrankungen häufiger betroffen als Frauen?
- X-Inaktivierung und Barr-Körperchen erklären

**Typische Prüfungsfallen / Verwechslungen:**
- X-chromosomal rezessiv (Männer häufiger krank) vs. X-chromosomal dominant (Frauen häufiger betroffen)
- Konduktorin (heterozygot, gesund) vs. homozygot betroffene Frau (X^a X^a, sehr selten)
- X-Inaktivierung (Dosiskompensation, zufällig) vs. Imprinting (elternspezifisch)
- Keine Vater-Sohn-Übertragung bei X-chromosomal vs. Vater-Sohn bei Y-chromosomal
- Barr-Körperchen = inaktiviertes X, Zahl = Anzahl X-Chromosomen minus 1

**Prüfungsrelevante Zahlen/Fakten:**
- Hämophilie A: ca. 1:5.000 männliche Neugeborene
- Rot-Grün-Blindheit: ca. 8% der Männer, <1% der Frauen
- Duchenne-Muskeldystrophie: 1:3.500 Knaben
- Konduktorin × gesunder Mann: 50% Söhne krank, 50% Töchter Konduktorin
- SRY-Gen auf Y-Chromosom: Schlüssel zur männlichen Geschlechtsdetermination
- Obligate Konduktorin: Tochter eines betroffenen Vaters ist immer Trägerin (X^a vom Vater)
- Barr-Körperchen-Anzahl = Anzahl X-Chromosomen minus 1

---

## Zusammenfassung (ultrakompakt)

- Männer sind **hemizygot** für X-chromosomale Gene (nur 1 X-Chromosom) → ein einziges rezessives Allel reicht zur Erkrankung
- **X-chromosomal rezessiv**: fast nur Männer betroffen; Frauen als Konduktorinnen (50% Söhne betroffen, 50% Töchter Konduktorin)
- **Kein Vater-Sohn-Transfer**: Väter geben ihr X-Chromosom ausschließlich an Töchter weiter
- Beispiele X-rez.: Hämophilie A (Faktor VIII), Duchenne-Muskeldystrophie, Rot-Grün-Blindheit
- **X-Inaktivierung** (Lyon-Hypothese): zufällige Stilllegung eines der beiden X in jeder Körperzelle → Barr-Körperchen; führt zum Mosaik-Phänotyp (Kaliko-Katze)
- **Y-chromosomal (holandrisch)**: Vater überträgt auf alle Söhne; Beispiel: SRY-Gen (Hodenentwicklung)
- **X-chromosomal dominant**: beide Geschlechter betroffen; alle Töchter eines betroffenen Vaters erkranken`,
      lernziele: [
        "X-chromosomal rezessive und dominante Vererbungsmuster anhand von Genotypen und Vererbungsregeln erklären können.",
        "Den Begriff Hemizygotie verstehen und erklären, warum Männer bei X-chromosomal rezessiven Erkrankungen häufiger betroffen sind.",
        "Das Prinzip der X-Inaktivierung (Lyon-Hypothese) und seine klinischen Konsequenzen beschreiben können.",
        "Y-chromosomale Vererbung (holandrisch) von anderen Erbgängen unterscheiden und Beispiele nennen können.",
        "Klinische Beispiele X-chromosomaler Erkrankungen (Hämophilie A, Duchenne, Rot-Grün-Blindheit) benennen und zuordnen können.",
      ],
      sections: [],
      merksätze: [
        "X-chromosomal rezessiv: Männer häufiger krank (hemizygot, X^a Y, nur 1 X). Töchter meist gesund (X^A X^a Konduktorin). Keine Vater-Sohn-Übertragung. Beispiele: Hämophilie A, Rot-Grün-Blindheit, Duchenne.",
        "X-chromosomal dominant: Frauen häufiger betroffen (2 X). Kranker Vater (X^A Y) → 100% Töchter krank, 100% Söhne gesund. Beispiel: Hypophosphatämische Rachitis.",
        "X-Inaktivierung: Weibliche Zellen (XX) → 1 X inaktiviert (zufällig, Barr-Körperchen, XIST). Mosaik-Muster (Kaliko-Katzen: X^O X^B → Orange + Schwarz, nur bei Weibchen).",
        "Y-chromosomal: Nur Männer betroffen. Vater → 100% Söhne. SRY (Hoden-Entwicklung → männlich), AZF (Spermatogenese, Deletion → Infertilität).",
      ],
      diagram: "meiosis",
      klinischerBezug:
        "Hämophilie A betrifft ca. 1:5.000 männliche Neugeborene und erfordert lebenslange Faktor-VIII-Substitution. Moderne rekombinante Faktor-Konzentrate und Emicizumab (bispezifischer Antikörper) haben die Lebensqualität drastisch verbessert. Bei Duchenne-Muskeldystrophie zeigen Exon-Skipping-Therapien (Eteplirsen, Viltolarsen) und Gentherapien erste klinische Erfolge.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Eine gesunde Frau, deren Vater an Hämophilie A leidet, heiratet einen gesunden Mann. Wie hoch ist das Risiko, dass ihr Sohn an Hämophilie erkrankt?",
        answer:
          "Die Frau ist obligate Konduktorin (X^A X^a), da sie das pathogene X-Allel sicher vom Vater geerbt hat. Söhne erhalten mit 50% Wahrscheinlichkeit das X^a-Allel → 50% Erkrankungsrisiko für Söhne. Töchter sind mit 50% Wahrscheinlichkeit Konduktorinnen.",
      },
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
      stichworte: [
        "Autosomal dominant",
        "Autosomal rezessiv",
        "X-chromosomal",
        "Konduktorin",
        "Stammbaum",
        "Erbgang",
      ],
      content: `## Einleitung

Die Stammbaumanalyse ist das zentrale Werkzeug der klinischen Genetik zur Identifikation von Erbgängen und zur Risikoberechnung in Familien. Durch systematische Auswertung betroffener und gesunder Familienmitglieder lässt sich der Vererbungsmodus bestimmen und die Wahrscheinlichkeit für das Auftreten einer Erkrankung bei Nachkommen berechnen. Im MedAT ist die Stammbaumanalyse ein Klassiker und erfordert sicheres Erkennen der vier Haupterbgänge sowie die Anwendung der Wahrscheinlichkeitsrechnung.

**Das Wichtigste auf einen Blick:**
- Standardsymbole: Quadrat = Mann, Kreis = Frau, ausgefüllt = betroffen
- Autosomal-dominant: jede Generation betroffen, vertikale Transmission
- Autosomal-rezessiv: Generationensprünge, gesunde Eltern, Konsanguinität
- X-chromosomal rezessiv: Männer betroffen, Diagonal-Muster, keine Vater-Sohn-Übertragung
- Bayes-Theorem: P(Aa | gesund) = 2/3 bei Aa × Aa

---

## Stammbaumsymbole und Erbgangserkennung

Quadrate symbolisieren Männer, Kreise Frauen; ausgefüllte Symbole zeigen Betroffene, halbe Symbole Konduktoren. Die Doppellinie kennzeichnet Konsanguinität. Autosomal-dominante Erbgänge zeigen vertikale Transmission (jede Generation betroffen), autosomal-rezessive zeigen Generationensprünge mit gesunden Eltern und kranken Geschwistern.

> **Merke:** Autosomal-dominant: jede Generation betroffen. Autosomal-rezessiv: Generationensprünge, gesunde Eltern, Doppellinie = Konsanguinität.

---

## Gonosomale Erbgänge im Stammbaum

X-chromosomal rezessiv: Männer häufiger betroffen, kein Vater-Sohn-Übertragung, Diagonal-Muster (Großvater → Tochter als Konduktorin → Enkel). X-chromosomal dominant: kranker Vater → 100% Töchter krank, 100% Söhne gesund. Y-chromosomal: nur Männer betroffen, Vater-Sohn-Übertragung zu 100%.

> **Merke:** X-rez.: kein Vater-Sohn, diagonal. X-dom.: kranker Vater → alle Töchter krank. Y-chr.: nur Männer, Vater-Sohn 100%.

---

## Wahrscheinlichkeitsberechnung

Bei Aa × Aa beträgt P(aa, krank) = 1/4, P(gesund) = 3/4. Jede Geburt ist unabhängig. Die bedingte Wahrscheinlichkeit P(Aa | gesund) = 2/3 ergibt sich über das Bayes-Theorem, da von drei möglichen gesunden Genotypen zwei heterozygot sind.

> **Merke:** Aa × Aa: 1/4 krank, 3/4 gesund. P(Aa | gesund) = 2/3. Jede Geburt ist unabhängig!

---

## Penetranz und Expressivität

Bei der Stammbaumanalyse ist die Unterscheidung zwischen Penetranz und Expressivität essenziell. **Penetranz** beschreibt den Anteil der Genträger, die den Phänotyp ausprägen (z. B. BRCA1: ~70% Penetranz = 70% der Trägerinnen entwickeln Brustkrebs). **Expressivität** beschreibt die Schwere der Ausprägung bei Betroffenen (z. B. Marfan-Syndrom: von milden Gelenkbeschwerden bis zu Aortendissektion). Unvollständige Penetranz kann autosomal-dominante Erbgänge verschleiern, da Generationssprünge auftreten, obwohl der Erbgang nicht rezessiv ist.

> **Merke:** Penetranz = ob betroffen (Anteil der Genträger mit Phänotyp). Expressivität = wie stark betroffen (Schweregrad). Unvollständige Penetranz täuscht Generationssprünge vor.

---

## Systematische Erbgangbestimmung und Ausschlusskriterien

Die Erbgangbestimmung erfolgt systematisch durch Ausschlussprinzip. **Schritt 1:** Geschlechterverteilung prüfen -- sind beide Geschlechter betroffen, ist ein Y-chromosomaler Erbgang ausgeschlossen. **Schritt 2:** Generationenfolge analysieren -- Betroffene in jeder Generation sprechen für dominant, Generationensprünge für rezessiv. **Schritt 3:** Gonosomal vs. autosomal unterscheiden -- keine Vater-Sohn-Übertragung und Männer häufiger betroffen deuten auf X-chromosomal rezessiv hin. Wichtig ist die Erkennung von **Neumutationen** (de novo), die einen scheinbar sporadischen Fall bei autosomal-dominanten Erkrankungen erklären (z. B. Achondroplasie: >80% Neumutation). Bei autosomal-rezessiven Erkrankungen erhöht **Konsanguinität** (Identity by Descent, IBD) die Homozygotie-Wahrscheinlichkeit; der **Inzuchtkoeffizient F** beträgt bei Cousin-Cousine-Ehe 1/16. Für die MedAT-Prüfung ist die Kombination von Stammbaumanalyse mit Wahrscheinlichkeitsrechnung typisch: Produktregel bei unabhängigen Ereignissen (P(A und B) = P(A) x P(B)) und Summenregel bei sich gegenseitig ausschließenden Ereignissen (P(A oder B) = P(A) + P(B)).

> **Merke:** Systematischer Ausschluss: Y-chr. → X-rez. → autosomal-dom./rez. Neumutation erklärt sporadische dominante Fälle. Konsanguinität: F = 1/16 bei Cousin-Cousine. Produktregel bei unabhängigen Ereignissen (jede Geburt unabhängig).

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Stammbaumanalyse (autosomal/gonosomal, dominant/rezessiv), Erkennungsmerkmale (z. B. X-rezessiv: Söhne von heterozygoten Müttern), Wahrscheinlichkeitsberechnung.

**Ergänzend vertiefend:** Y-chromosomal; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Erbgang aus einem Stammbaum bestimmen (autosomal vs. gonosomal, dominant vs. rezessiv)
- Erkrankungswahrscheinlichkeit für ein bestimmtes Familienmitglied berechnen
- Bedingte Wahrscheinlichkeit P(Aa | gesund) = 2/3 anwenden

**Typische Prüfungsfallen / Verwechslungen:**
- Autosomal-dominant (jede Generation) vs. autosomal-rezessiv (Generationensprünge)
- X-chromosomal rezessiv (Diagonal-Muster) vs. autosomal-rezessiv (Männer = Frauen betroffen)
- Konsanguinität (Doppellinie) erhöht Risiko für autosomal-rezessiv, nicht für dominant
- Jede Geburt ist ein unabhängiges Ereignis — vorherige Kinder ändern die Wahrscheinlichkeit nicht
- Halbes Symbol = Konduktor/Träger, nicht halb betroffen

**Prüfungsrelevante Zahlen/Fakten:**
- Aa × Aa: 25% krank (aa), 50% Carrier (Aa), 25% gesund (AA)
- P(Aa | gesund) = 2/3 (von 3 gesunden Genotypen sind 2 heterozygot)
- Autosomal-dominant: ~50% Wiederholungsrisiko bei Aa × aa
- X-rez.: Konduktorin × gesund → 50% Söhne krank
- BRCA1/2: autosomal-dominant mit unvollständiger Penetranz
- Obligate Konduktorin: Tochter eines X-rez. betroffenen Vaters ist immer Konduktorin

---

## Zusammenfassung (ultrakompakt)

- **Autosomal-dominant**: betroffen in jeder Generation (vertikal), ♂ und ♀ gleich, ein Elternteil meist betroffen, 50% Weitergabe
- **Autosomal-rezessiv**: Generationensprünge, beide Eltern meist gesund (Träger), Konsanguinität erhöht Risiko, 25% Erkrankungsrisiko
- **X-chromosomal rezessiv**: fast nur Männer betroffen; Diagonal-Muster (Großvater → Konduktorin → betroffener Enkel); kein Vater-Sohn-Transfer
- **X-chromosomal dominant**: ♂ und ♀ betroffen; alle Töchter eines betroffenen Vaters krank
- **Y-chromosomal**: nur Männer, Vater → alle Söhne (holandrisch)
- Bedingte Wahrscheinlichkeit nach **Bayes**: P(Aa | phänotypisch gesund, Eltern Aa × Aa) = 2/3
- Symbole: Quadrat = ♂; Kreis = ♀; ausgefüllt = betroffen; Doppellinie = Konsanguinität`,
      lernziele: [
        "Die Standardsymbole der Stammbaumanalyse (Quadrat, Kreis, ausgefüllt, Doppellinie) kennen und anwenden können.",
        "Autosomal-dominante, autosomal-rezessive, X-chromosomale und Y-chromosomale Erbgänge anhand typischer Stammbaummerkmale erkennen können.",
        "Vererbungswahrscheinlichkeiten (z. B. 25% Erkrankungsrisiko bei Aa × Aa) berechnen können.",
        "Bedingte Wahrscheinlichkeit nach Bayes (P(Aa | gesund) = 2/3) anwenden können.",
        "Den Einfluss von Konsanguinität auf das Auftreten autosomal-rezessiver Erkrankungen erklären können.",
      ],
      sections: [],
      diagram: "pedigree-analysis",

      merksätze: [
        "Autosomal-dominant: Jede Generation betroffen (vertikale Linie I → II → III). Männer = Frauen. Betroffene Eltern (Aa) → ~50% Kinder krank. Beispiel: Marfan, Achondroplasie.",
        "Autosomal-rezessiv: Generationensprünge! Gesunde Eltern (Aa × Aa) → 25% Kinder krank (aa). Konsanguinität erhöht Risiko (Doppellinie). Beispiel: PKU, Mukoviszidose.",
        "X-chromosomal rezessiv: Männer häufiger krank. Keine Vater-Sohn-Übertragung. Diagonal-Muster: Großvater → Tochter (Konduktorin) → Enkel. Beispiel: Hämophilie A, Duchenne.",
        "Wahrscheinlichkeit Aa × Aa: Jede Geburt unabhängig. P(krank aa) = 1/4 = 25%. P(gesund) = 3/4. Bedingt: P(Aa | gesund) = 2/3.",
      ],
      klinischerBezug:
        "Stammbaumanalyse ist das zentrale Werkzeug der klinischen Genetik. Bei hereditärem Brust-/Eierstockkrebs (BRCA1/2, autosomal dominant mit unvollständiger Penetranz) zeigt der Stammbaum typischerweise Erkrankungen in mehreren Generationen mit frühem Erkrankungsalter. Die korrekte Erbgangbestimmung entscheidet über Screeningempfehlungen und Gentestindikation.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "In einem Stammbaum sind ausschließlich Söhne betroffen, es gibt keinen Vater-Sohn-Übertragung, und Töchter betroffener Väter sind alle klinisch gesund. Welcher Erbgang liegt am wahrscheinlichsten vor?",
        answer:
          "X-chromosomal rezessiver Erbgang. Kennzeichen: (1) Männer betroffen (hemizygot X^a Y), (2) keine Vater-Sohn-Übertragung (Väter geben Y an Söhne), (3) Töchter betroffener Väter sind obligate Konduktorinnen (X^a vom Vater, X^A von gesunder Mutter).",
      },
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
      stichworte: [
        "Hardy-Weinberg",
        "Allelfrequenz",
        "Genpool",
        "Populationsgenetik",
        "Gleichgewicht",
      ],
      content: `## Einleitung

Die Populationsgenetik untersucht die Verteilung und Veränderung von Allelfrequenzen in Populationen über Generationen hinweg. Das Hardy-Weinberg-Gleichgewicht bildet das zentrale mathematische Modell, mit dem aus bekannten Erkrankungshäufigkeiten Trägerfrequenzen berechnet werden können. Im MedAT wird die Hardy-Weinberg-Formel regelmäßig in Rechenaufgaben geprüft, weshalb ihre sichere Anwendung unverzichtbar ist.

**Das Wichtigste auf einen Blick:**
- Hardy-Weinberg-Formel: p² + 2pq + q² = 1, wobei p + q = 1
- Fünf Voraussetzungen: keine Mutation, zufällige Paarung, keine Selektion, große Population, keine Migration
- Konduktoren (2pq) sind bei rezessiven Erkrankungen viel häufiger als Betroffene (q²)
- Heterozygoten-Vorteil: HbA/HbS → Malaria-Resistenz (Balancing Selection)
- Genetischer Drift: zufällige Frequenzänderungen in kleinen Populationen

---

## Hardy-Weinberg-Gleichgewicht

Das Hardy-Weinberg-Gleichgewicht beschreibt stabile Allelfrequenzen unter idealen Bedingungen: keine Mutation, zufällige Paarung, keine Selektion, große Population, keine Migration. Die Formel p² + 2pq + q² = 1 verbindet Allel- und Genotypfrequenzen (p² = AA, 2pq = Aa, q² = aa). Bei seltenen rezessiven Erkrankungen (q² = 1/10.000) sind Konduktoren (2pq ≈ 2%) viel häufiger als Betroffene.

> **Merke:** p² + 2pq + q² = 1, p + q = 1. q = √(Erkrankungsfrequenz). Konduktoren (2pq) viel häufiger als Betroffene (q²).

---

## Selektion und Heterozygoten-Vorteil

Selektion verändert Allelfrequenzen durch unterschiedliche Fitness der Genotypen. Beim Heterozygoten-Vorteil (Balancing Selection) haben Heterozygote den höchsten Reproduktionserfolg. Das HbS-Allel bleibt in Malaria-Gebieten erhalten, weil HbA/HbS-Heterozygote Malaria-resistent sind (höhere Fitness als beide Homozygoten).

> **Merke:** Heterozygoten-Vorteil (Sichelzellanämie): HbA/HbS → Malaria-Resistenz, Fitness am höchsten. HbS-Allel bleibt erhalten (Balancing Selection).

---

## Genetischer Drift und Migration

Genetischer Drift bezeichnet zufällige Frequenzänderungen in kleinen Populationen. Gründereffekt: kleine Gründerpopulation trägt zufällige Allelfrequenzen. Flaschenhals-Effekt: drastische Populationsreduktion führt zu Allelverlust. Migration (Genfluss) gleicht Allelfrequenzen zwischen Populationen an. Inzucht erhöht Homozygotie, ändert aber nicht die Allelfrequenzen p und q.

> **Merke:** Drift: Zufällige Frequenzänderungen in kleinen Populationen. Flaschenhals → Allelverlust (Geparden). Inzucht → Homozygotie ↑, aber p/q unverändert.

---

## Anwendung der Hardy-Weinberg-Formel: Rechenbeispiele

Ein typisches MedAT-Rechenbeispiel: Die autosomal-rezessive Erkrankung **Phenylketonurie (PKU)** hat in Europa eine Inzidenz von ca. 1:10.000. Berechnung: q² = 1/10.000 → q = 1/100 = 0,01 → p = 0,99 → Heterozygotenfrequenz 2pq = 2 x 0,99 x 0,01 ≈ **0,02 = 1/50** (jede 50. Person ist Carrier). Bei **Mukoviszidose** (Inzidenz 1:2.500 in Europa): q² = 1/2.500 → q = 1/50 = 0,02 → 2pq ≈ 2 x 0,98 x 0,02 ≈ **0,04 = 1/25** (jede 25. Person ist Carrier). Für die Berechnung des Erkrankungsrisikos eines Kindes zweier nicht verwandter Carrier-Eltern gilt: P(beide Carrier) x P(Kind aa) = (1/25)² x 1/4 = 1/2.500 (entspricht der Populationsinzidenz, was die Konsistenz des Modells bestätigt). Bei **X-chromosomal rezessiven** Erkrankungen gilt eine modifizierte Anwendung: Männer (hemizygot) haben die Erkrankungsfrequenz q, Frauen q² -- daher ist z. B. Rot-Grün-Blindheit bei Männern ca. 8% (q ≈ 0,08), bei Frauen nur 0,64% (q² ≈ 0,0064).

> **Merke:** Rechenweg: q² (Inzidenz) → q (Wurzel ziehen) → p = 1-q → 2pq (Carrierfrequenz). Bei X-rez.: Männer q, Frauen q². Immer prüfen: p² + 2pq + q² = 1.

---

## Evolutionäre Kräfte und Gleichgewichtsstörungen

Neben den fünf klassischen HWE-Voraussetzungen gibt es weitere Faktoren, die Allelfrequenzen verändern. **Assortative Paarung** (nicht-zufällige Partnerwahl) verändert Genotypfrequenzen, ohne die Allelfrequenzen selbst zu ändern (ähnlich wie Inzucht). **Gerichtete Selektion** verschiebt Allelfrequenzen systematisch in eine Richtung (z. B. Antibiotikaresistenz bei Bakterien). **Frequenzabhängige Selektion** begünstigt seltene Allele (negative Frequenzabhängigkeit, z. B. MHC-Diversität beim Immunsystem). Der **Genfluss** (Migration) gleicht Allelfrequenzen zwischen Populationen an und wirkt der genetischen Differenzierung entgegen. In der klinischen Genetik ist die Kenntnis dieser Kräfte relevant, um regionale Unterschiede in Erkrankungshäufigkeiten zu verstehen: Die hohe Mukoviszidose-Frequenz in Nordeuropa wird durch einen möglichen Heterozygoten-Vorteil gegen Cholera oder Typhus erklärt, ähnlich dem HbS-Malaria-Beispiel.

> **Merke:** Assortative Paarung ändert Genotyp-, nicht Allelfrequenzen. Gerichtete Selektion verschiebt p/q. Frequenzabhängige Selektion erhält Diversität (MHC). CF-Häufigkeit in Europa: möglicher Heterozygoten-Vorteil.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Hardy-Weinberg (p²+2pq+q²=1), q² = Erkrankungshäufigkeit rezessiv, 2pq = Trägerfrequenz, Anwendung auf Populationsgenetik.

**Ergänzend vertiefend:** Selektion im HW-Gleichgewicht; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Aus Erkrankungshäufigkeit (q²) die Trägerfrequenz (2pq) berechnen
- Voraussetzungen des Hardy-Weinberg-Gleichgewichts nennen
- Heterozygoten-Vorteil am Beispiel Sichelzellanämie erklären

**Typische Prüfungsfallen / Verwechslungen:**
- q² (Erkrankungsfrequenz) vs. q (Allelfrequenz) vs. 2pq (Trägerfrequenz)
- Allelfrequenz (p, q) vs. Genotypfrequenz (p², 2pq, q²)
- Genetischer Drift (zufällig, kleine Populationen) vs. Selektion (gerichtet, Fitness)
- Inzucht erhöht Homozygotie, ändert aber nicht die Allelfrequenzen p und q
- Gründereffekt (kleine Gründerpopulation) vs. Flaschenhals-Effekt (Populationsreduktion)

**Prüfungsrelevante Zahlen/Fakten:**
- Rezessive Erkrankung q² = 1/10.000 → q = 1/100 → 2pq ≈ 1/50 (2% Träger)
- Mukoviszidose: Inzidenz 1:2.500 → Trägerfrequenz ca. 1:25 in Europa
- 5 HWE-Voraussetzungen: keine Mutation, Panmixie, keine Selektion, große Population, keine Migration
- Sichelzellanämie: HbS-Frequenz bis 20% in Malaria-Endemiegebieten
- Geparden: Flaschenhals → geringe genetische Diversität
- Mukoviszidose-Rechnung: q² = 1/2.500 → q = 1/50 → 2pq ≈ 2 × 49/50 × 1/50 ≈ 1/25

---

## Zusammenfassung (ultrakompakt)

- **Hardy-Weinberg-Gleichgewicht**: p² + 2pq + q² = 1; beschreibt stabile Allelfrequenzen ohne Evolution
- 5 Voraussetzungen: keine Mutation, Panmixie, keine Selektion, große Population, keine Migration/Genfluss
- Anwendung: Erkrankungshäufigkeit (q²) bekannt → Trägerfrequenz (2pq) berechnen (z. B. Mukoviszidose 1:2.500 → Träger ~1:25)
- **Heterozygoten-Vorteil** (balancierte Selektion): Sichelzellanämie-Träger in Malariaregionen → beide Allele bleiben in der Population
- **Genetischer Drift**: zufällige Allelfrequenzänderung; besonders stark in kleinen Populationen
- **Gründereffekt**: kleine Gründerpopulation → zufällige Allele dominieren neue Population
- **Flaschenhals-Effekt**: drastische Populationsreduktion → Verlust genetischer Diversität`,
      lernziele: [
        "Die Hardy-Weinberg-Formel (p² + 2pq + q² = 1) anwenden und Genotypfrequenzen aus Allelfrequenzen berechnen können.",
        "Die fünf Voraussetzungen des Hardy-Weinberg-Gleichgewichts nennen und erklären können.",
        "Allelfrequenzen und Konduktorfrequenzen bei autosomal-rezessiven Erkrankungen berechnen können.",
        "Selektion (insbesondere Heterozygoten-Vorteil bei Sichelzellanämie) als Abweichung vom HWE beschreiben können.",
        "Genetischen Drift, Gründereffekt und Flaschenhals-Effekt als evolutionäre Kräfte erklären können.",
      ],
      sections: [],
      merksätze: [
        "Hardy-Weinberg-Formel: p² + 2pq + q² = 1 (Genotypfrequenzen), p + q = 1 (Allelfrequenzen). p² = AA, 2pq = Aa, q² = aa. Bedingungen: keine Mutation, zufällige Paarung, keine Selektion, große Population, keine Migration.",
        "Konduktor-Berechnung: Rezessive Erkrankung (q² = 1/10.000) → q = 0,01, p = 0,99. Konduktor-Frequenz 2pq ≈ 2% (1 von 50). Konduktoren viel häufiger als Betroffene.",
        "Selektion (Sichelzellanämie): Heterozygoten-Vorteil in Malaria-Gebieten. HbA/HbS → Malaria-Resistenz, Fitness ↑. HbS-Allel bleibt erhalten (Balancing Selection).",
        "Genetischer Drift: Zufällige Frequenzänderungen in kleinen Populationen. Gründereffekt, Flaschenhals → Allelverlust, Fixierung. Beispiel: Geparden.",
      ],
      diagram: "meiosis",
      klinischerBezug:
        "Das Hardy-Weinberg-Gleichgewicht wird in der klinischen Genetik zur Berechnung von Trägerfrequenzen verwendet. Beispiel: Mukoviszidose-Inzidenz 1:2.500 → Trägerfrequenz 1:25 in europäischer Bevölkerung. Diese Berechnung ist Grundlage für die Risikoeinschätzung bei Carrier-Screening-Programmen und der genetischen Beratung von Kinderwunschpaaren.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "In einer Population beträgt die Häufigkeit einer autosomal rezessiven Erkrankung 1:10.000. Berechnen Sie die Heterozygotenfrequenz (Trägerfrequenz) mithilfe des Hardy-Weinberg-Gesetzes.",
        answer:
          "q² = 1/10.000 → q = 1/100 = 0,01. Da p + q = 1: p = 99/100 = 0,99. Trägerfrequenz 2pq = 2 × 0,99 × 0,01 ≈ 0,02 = 1/50. Etwa jede 50. Person ist heterozygoter Träger.",
      },
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
      stichworte: [
        "Genmutationen",
        "Chromosomenmutationen",
        "Punktmutation",
        "Frameshift",
        "Aneuploidie",
        "Onkogene",
        "Tumorsuppressorgene",
        "p53",
        "Mehrstufenmodell",
      ],
      content: `## Einleitung

Mutationen sind dauerhafte Veränderungen der DNA-Sequenz und stellen die Grundlage sowohl für genetische Variation als auch für Erbkrankheiten und Krebsentstehung dar. Sie werden nach Ausmaß in Genmutationen (Punktmutationen), Chromosomenmutationen (strukturell) und Genommutationen (numerisch) eingeteilt. Für den MedAT ist die sichere Unterscheidung der Mutationstypen und ihrer Auswirkungen auf das Protein zentral, ebenso wie das Verständnis von DNA-Reparaturdefekten als Krebsprädispositionen.

**Das Wichtigste auf einen Blick:**
- Stille Mutation: Aminosäure bleibt gleich; Missense: andere Aminosäure; Nonsense: Stopp-Codon
- Frameshift: Leserahmenverschiebung durch Insertion/Deletion (nicht Vielfaches von 3)
- In-Frame-Indel: Aminosäure fehlt/eingefügt, Leserahmen intakt (z. B. ΔF508 bei Mukoviszidose)
- DNA-Reparaturdefekte: MMR → Lynch-Syndrom, NER → Xeroderma pigmentosum, BRCA → Brustkrebs
- Keimbahnmutation (vererbbar) vs. somatische Mutation (nur im betroffenen Gewebe)

---

## Genmutationen: Substitutionen

Stille Mutationen ändern ein Codon, ohne die Aminosäure zu verändern (genetische Degeneration). Missense-Mutationen führen zu einem Aminosäureaustausch (z. B. GAG → GTG: Glu → Val bei Sichelzellanämie). Nonsense-Mutationen erzeugen ein vorzeitiges Stopp-Codon und führen zu einem verkürzten, meist nicht-funktionalen Protein.

> **Merke:** Still = gleiche AS. Missense = andere AS (Sichelzelle: Glu → Val). Nonsense = Stopp-Codon, verkürztes Protein.

---

## Insertionen, Deletionen und Reparaturmechanismen

Frameshift-Mutationen entstehen, wenn Insertionen oder Deletionen kein Vielfaches von 3 Nukleotiden umfassen — der Leserahmen verschiebt sich, alle nachfolgenden Codons werden falsch gelesen. In-Frame-Indels (Vielfaches von 3) entfernen oder fügen Aminosäuren ein, ohne den Leserahmen zu verschieben (z. B. ΔF508 bei Mukoviszidose). Defekte DNA-Reparatur prädisponiert zu Krebs: MMR-Defekt → Lynch-Syndrom, NER-Defekt → Xeroderma pigmentosum, BRCA1/2-Defekt → Brustkrebs.

> **Merke:** Frameshift ≠ 3n Nukleotide → Leserahmen verschoben. In-Frame = 3n, Aminosäure fehlt (ΔF508). MMR-Defekt → Lynch, NER-Defekt → Xeroderma pigmentosum.

---

## Chromosomenmutationen und Genommutationen

Neben Genmutationen (Einzelnukleotid-Ebene) unterscheidet man **Chromosomenmutationen** (strukturelle Veränderungen ganzer Chromosomenabschnitte) und **Genommutationen** (numerische Veränderungen der Chromosomenzahl). Chromosomenmutationen umfassen Deletionen (Verlust eines Abschnitts, z. B. Cri-du-chat bei 5p-Deletion), Duplikationen (Verdopplung), Inversionen (Drehung um 180°) und Translokationen (Verlagerung auf ein anderes Chromosom, z. B. Philadelphia-Chromosom t(9;22) bei CML). Genommutationen entstehen durch Nicht-Disjunktion in der Meiose: **Aneuploidie** bezeichnet die Abweichung um einzelne Chromosomen (Trisomie 21, Monosomie X beim Turner-Syndrom), **Polyploidie** die Vervielfachung des gesamten Chromosomensatzes (3n = Triploidie, beim Menschen letal).

> **Merke:** Genmutation = Einzelnukleotid (Punkt). Chromosomenmutation = Abschnitt (Deletion, Translokation). Genommutation = Chromosomenzahl (Aneuploidie, Polyploidie). Philadelphia-Chromosom t(9;22) → BCR-ABL-Fusion → CML.

---

## Mutagene und Karzinogenese

Mutagene werden nach ihrer Natur eingeteilt: **Physikalische Mutagene** (UV-Strahlung → Thymin-Dimere, ionisierende Strahlung → Doppelstrangbrüche), **chemische Mutagene** (Alkylanzien, Benzpyren aus Zigarettenrauch, Aflatoxin B1 → Leberkarzinom) und **biologische Mutagene** (Insertionsmutagenese durch Retroviren, Transposons). Die **Karzinogenese** ist ein Mehrstufenprozess (Initiation → Promotion → Progression), bei dem somatische Mutationen in **Onkogenen** (gain-of-function, z. B. RAS, MYC, HER2) und **Tumorsuppressorgenen** (loss-of-function, z. B. TP53, RB1, APC) akkumulieren. Die **Knudson-Hypothese** (Two-Hit-Modell) erklärt, warum bei hereditärem Retinoblastom bereits ein somatischer Hit ausreicht (erster Hit in der Keimbahn vererbt), während sporadische Fälle zwei unabhängige somatische Mutationen erfordern. Der **Ames-Test** nutzt Salmonella typhimurium-Stämme mit Histidin-Auxotrophie zum Nachweis mutagener Substanzen: Rückmutation zu Histidin-Prototrophie zeigt mutagene Potenz an.

> **Merke:** Mehrstufenmodell der Karzinogenese: Initiation (DNA-Schaden) → Promotion (klonale Expansion) → Progression (Invasion/Metastase). Onkogene: dominant (ein Allel reicht). Tumorsuppressorgene: rezessiv (beide Allele müssen ausfallen, Knudson Two-Hit).

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Mutationstypen (stille/silent, Missense, Nonsense, Rasterverschiebung), Punktmutation, Folge (Aminosäureänderung, Stopp, Leseraster), Spontan- vs. induzierte Mutation.

**Ergänzend vertiefend:** Splice-Mutation; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Stille, Missense und Nonsense-Mutation unterscheiden und Beispiele zuordnen
- Auswirkung einer Frameshift-Mutation auf das Protein erklären
- DNA-Reparaturdefekte den entsprechenden Krebssyndromen zuordnen

**Typische Prüfungsfallen / Verwechslungen:**
- Frameshift (≠ 3n Nukleotide, Leserahmen verschoben) vs. In-Frame (3n, Leserahmen intakt)
- Missense (Aminosäureaustausch) vs. Nonsense (Stopp-Codon) — beides Substitutionen
- Genmutation (Einzelnukleotid) vs. Chromosomenmutation (Abschnitte) vs. Genommutation (Chromosomenzahl)
- Keimbahnmutation (alle Zellen, vererbbar) vs. somatische Mutation (nur Tumorgewebe)
- Transition (Purin↔Purin oder Pyrimidin↔Pyrimidin) vs. Transversion (Purin↔Pyrimidin)
- Onkogen (gain-of-function, dominant) vs. Tumorsuppressorgen (loss-of-function, rezessiv nach Knudson)

**Prüfungsrelevante Zahlen/Fakten:**
- Sichelzellanämie: GAG → GTG (Glu → Val, Position 6 der β-Globinkette)
- Mukoviszidose: ΔF508 (In-Frame-Deletion, Phenylalanin an Position 508 fehlt)
- Lynch-Syndrom: MMR-Defekt (MLH1, MSH2) → Darmkrebs-Risiko bis 80%
- Xeroderma pigmentosum: NER-Defekt → 1.000-fach erhöhtes Hautkrebsrisiko
- BRCA1/2-Mutation: Brustkrebsrisiko ca. 70% Lebenszeitrisiko
- Knudson-Hypothese: Two-Hit-Modell bei Tumorsuppressorgenen (z. B. Retinoblastom: RB1)
- Ames-Test: Nachweis mutagener Potenz chemischer Substanzen mittels Salmonellen

---

## Zusammenfassung (ultrakompakt)

- **Stille Mutation**: Codon ändert sich, aber gleiche Aminosäure (Degeneriertheit des Codes) → kein Effekt
- **Missense-Mutation**: andere Aminosäure → Proteinveränderung (Beispiel: Sichelzellanämie GAG→GTG: Glu→Val)
- **Nonsense-Mutation**: Stopp-Codon vorzeitig → abgebrochenes, nicht-funktionelles Protein
- **Frameshift** (Insertion/Deletion ≠ Vielfaches von 3): gesamter nachfolgender Leserahmen verschoben → schwerwiegend
- **In-Frame-Deletion** (Vielfaches von 3): einzelne Aminosäure fehlt (Beispiel: Mukoviszidose ΔF508 → Phe fehlt im CFTR)
- **Transition** (häufiger): Purin↔Purin oder Pyrimidin↔Pyrimidin; **Transversion** (seltener): Purin↔Pyrimidin
- DNA-Reparaturdefekte → Krebs: MMR-Defekt → Lynch-Syndrom; NER-Defekt → Xeroderma pigmentosum; BRCA1/2 → hereditärer Brustkrebs
- **Keimbahnmutation**: vererbbar; **somatische Mutation**: nur in einer Zelllinie, nicht vererbbar`,
      lernziele: [
        "Die drei Typen von Genmutationen (stille Mutation, Missense, Nonsense) unterscheiden und klinische Beispiele zuordnen können.",
        "Frameshift-Mutationen und In-Frame-Indels erklären und deren Folgen für das Protein beschreiben können.",
        "Physikalische, chemische und biologische Mutagene mit ihren DNA-Schäden benennen können.",
        "Die wichtigsten DNA-Reparaturmechanismen (MMR, NER, BRCA) und ihre Defekte als Krebs-Prädispositionen kennen.",
        "Die molekulare Grundlage der Sichelzellanämie (Missense) und Mukoviszidose (In-Frame-Deletion ΔF508) erklären können.",
      ],
      sections: [],
      merksätze: [
        "Stille (Silent) Mutation: Codon ändert sich, Aminosäure gleich (keine Folge). Missense: Codon → andere Aminosäure (Sichelzelle: Glu → Val). Nonsense: Codon → Stopp (vorzeitiger Abbruch, Protein verkürzt).",
        "Frameshift-Mutation: Insertion/Deletion ungleich 3n Nukleotide → Leserahmen verschoben. Alle nachfolgenden Codons falsch → komplett anderes Protein. In-Frame (3n): Aminosäure fehlt, Leserahmen OK (z. B. ΔF508 Mukoviszidose).",
        "DNA-Reparatur-Defekte: MMR-Defekt → Lynch-Syndrom (Darmkrebs ↑). NER-Defekt → Xeroderma pigmentosum (Hautkrebs ↑, UV-Sensitivität). BRCA1/2-Mutation → Brustkrebs ↑.",
      ],
      diagram: "dna-helix",
      klinischerBezug:
        "Keimbahnmutationen verursachen erbliche Erkrankungen und Krebsprädispositionssyndrome (z. B. Li-Fraumeni: TP53-Mutation). Somatische Mutationen treiben die Tumorentstehung (Driver-Mutationen in Onkogenen und Tumorsuppressorgenen). Die Unterscheidung Keimbahn vs. somatisch ist für Therapie (Targeted Therapy) und Familienberatung essenziell.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Welcher Mutationstyp führt zu einem vorzeitigen Stoppcodon und damit zu einem verkürzten, meist funktionslosen Protein?",
        answer:
          "Eine Nonsense-Mutation (Punktmutation, die ein Aminosäure-Codon in ein Stoppcodon umwandelt, z. B. UAG, UAA, UGA). Das resultierende Protein ist verkürzt und in der Regel funktionslos. Klinisches Beispiel: Viele Mukoviszidose-Mutationen (z. B. G542X im CFTR-Gen) sind Nonsense-Mutationen.",
      },
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
      stichworte: [
        "Doppelhelix",
        "Basenpaare",
        "Semikonservativ",
        "Helicase",
        "DNA-Polymerase",
        "Okazaki-Fragmente",
        "Codons",
        "Degeneriertheit",
        "Start-/Stoppcodons",
      ],
      content: `## Einleitung

Die DNA-Doppelhelix speichert die gesamte genetische Information eines Organismus und wird vor jeder Zellteilung semikonservativ repliziert. Das Verständnis der DNA-Struktur (antiparallele Stränge, Basenpaarung nach Chargaff) und des Replikationsmechanismus (Leitstrang, Folgestrang, Okazaki-Fragmente) ist für die MedAT-Vorbereitung fundamental. Besonders prüfungsrelevant sind die Chargaff-Regeln, die Funktion der Replikationsenzyme und die Bedeutung der Telomerase für Zellalterung und Krebs.

**Das Wichtigste auf einen Blick:**
- DNA-Doppelhelix: antiparallel (5'→3' und 3'→5'), A-T (2 H-Brücken), G-C (3 H-Brücken)
- Semikonservative Replikation: jeder Tochterstrang enthält einen alten und einen neuen Strang
- Leitstrang: kontinuierlich; Folgestrang: diskontinuierlich (Okazaki-Fragmente)
- Telomerase: verlängert Telomere in Keimbahn, Stammzellen und Krebszellen
- DNA-Polymerase: synthetisiert nur 5'→3', benötigt RNA-Primer

---

## DNA-Struktur (Doppelhelix)

Die DNA besteht aus Nukleotiden (Phosphat + Desoxyribose + Base). Purine (A, G) paaren mit Pyrimidinen (C, T): A-T mit 2 H-Brücken, G-C mit 3 H-Brücken. Die Doppelhelix ist antiparallel (5'→3' und 3'→5') und rechtsgängig.

> **Merke:** A = T (2 H-Brücken), G ≡ C (3 H-Brücken, stärker). Purine (A, G, 2 Ringe) paaren mit Pyrimidinen (C, T, 1 Ring). A + G = C + T (Purine = Pyrimidine).

| Merkmal | DNA | RNA |
| --- | --- | --- |
| Zucker | Desoxyribose | Ribose (2'-OH) |
| Basen | A, T, G, C | A, U, G, C |
| Struktur | Doppelstrang (Helix) | Einzelstrang (Faltung) |
| Stabilität | Sehr stabil | Labil (2'-OH → Hydrolyse) |
| Funktion | Informationsspeicher | mRNA, tRNA, rRNA, Ribozyme |
| Lokalisation | Kern, Mitochondrien | Kern, Zytoplasma, Ribosomen |

---

## DNA-Replikation (Verdopplung)

Replikation verläuft semikonservativ: jeder Tochterstrang enthält einen alten und einen neuen Strang. Helicase öffnet die Gabel, Primase liefert RNA-Primer, DNA-Polymerase synthetisiert 5'→3'. Der Leitstrang wird kontinuierlich, der Folgestrang diskontinuierlich (Okazaki-Fragmente) synthetisiert.

> **Merke:** Leitstrang (Leading): Kontinuierlich (5'→3' in Richtung Gabel), 1× Primer. Folgestrang (Lagging): Diskontinuierlich (Okazaki-Fragmente, 5'→3' weg von Gabel), viele Primer. DNA-Polymerase nur 5'→3'.

---

## Enzyme der Replikation

Helicase entwirrt, Topoisomerase entspannt Supercoiling, Primase synthetisiert RNA-Primer, DNA-Polymerase III/δ/ε verlängert mit Proofreading (3'→5'-Exonuklease), DNA-Ligase verbindet Fragmente. Telomerase verlängert Telomere (TTAGGG) in Keimbahn-, Stamm- und Krebszellen.

> **Merke:** Telomerase verlängert Telomere (TTAGGG-Repeats). Aktiv in Keimbahn, Stammzellen, Krebszellen (Immortalisierung). Ohne Telomerase → Telomer-Verkürzung → Seneszenz (Hayflick-Limit ~50 Teilungen).

---

## Prokaryotische vs. Eukaryotische Replikation

Prokaryoten haben 1 Origin (oriC), eukaryotische Chromosomen haben viele Origins. Prokaryoten replizieren schneller (~1.000 nt/s), Okazaki-Fragmente sind länger. Eukaryoten benötigen Telomerase für lineare Chromosomen; Prokaryoten haben zirkuläre DNA ohne Telomere.

> **Merke:** Semikonservativ: Jeder Tochterstrang = 1 alter Strang (Matrize) + 1 neuer Strang. Meselson & Stahl (1958): N15-schwer + N14-leicht → Hybrid-DNA. Antiparallel: 5'→3' und 3'→5'.

---

## DNA-Reparaturmechanismen

Die DNA-Replikation erreicht trotz Proofreading der DNA-Polymerase (3'→5'-Exonukleaseaktivität) eine Restfehlerrate von etwa 1 pro 10^9 Basenpaare pro Zellteilung. Zusätzliche Reparatursysteme korrigieren Schäden, die durch endogene (reaktive Sauerstoffspezies, Depurinierung, Desaminierung) und exogene Mutagene (UV-Strahlung, Chemikalien) entstehen. Das Mismatch-Repair-System (MMR) erkennt und korrigiert Fehlpaarungen nach der Replikation; Defekte in MMR-Genen (MLH1, MSH2) verursachen das Lynch-Syndrom (hereditäres nicht-polypöses Kolonkarzinom, HNPCC) mit Mikrosatelliteninstabilität. Die Nukleotid-Exzisionsreparatur (NER) entfernt sperrige Läsionen wie UV-induzierte Thymindimere — Defekte verursachen Xeroderma pigmentosum mit extremer UV-Empfindlichkeit und Hautkrebsrisiko. Die Basen-Exzisionsreparatur (BER) behebt kleine Basenschäden (oxidierte oder desaminierte Basen) durch Glykosylasen, die die beschädigte Base herausschneiden.

Doppelstrangbrüche (DSB), die gefährlichste Schadensform, werden durch zwei Hauptwege repariert: Homologe Rekombination (HR, fehlerfrei, nutzt Schwesterchromatid als Matrize, erfordert BRCA1/BRCA2) und Non-Homologous End Joining (NHEJ, schnell, aber fehleranfällig, ligiert Bruchenden direkt). BRCA1/2-Mutationen beeinträchtigen die HR und prädisponieren für Brust- und Eierstockkrebs. PARP-Inhibitoren (Olaparib) nutzen diesen Defekt therapeutisch aus: Sie hemmen die BER, was in BRCA-defizienten Zellen zu letalen DSB führt (synthetische Letalität).

> **Merke:** MMR-Defekt → Lynch-Syndrom (HNPCC). NER-Defekt → Xeroderma pigmentosum. BRCA1/2-Defekt → gestörte HR → Brust-/Eierstockkrebs. PARP-Inhibitoren: synthetische Letalität bei BRCA-Mutationen.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Chargaff (A=T, G=C), Doppelhelix, Basenpaarung (A-T 2 H-Brücken, G-C 3 H-Brücken), Antiparallelität, 5'-3'-Richtung.

**Ergänzend vertiefend:** Z-DNA; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Chargaff-Regeln anwenden: Aus A-Anteil den C-Anteil berechnen
- Leitstrang vs. Folgestrang: Syntheserichtung und Okazaki-Fragmente erklären
- Funktion der Telomerase und Zusammenhang mit Krebs

**Typische Prüfungsfallen / Verwechslungen:**
- A = T (2 H-Brücken) vs. G ≡ C (3 H-Brücken, stärker) — Verwechslung der Bindungsstärke
- Leitstrang (kontinuierlich, 1 Primer) vs. Folgestrang (diskontinuierlich, viele Primer)
- DNA-Polymerase synthetisiert nur 5'→3' — liest Template 3'→5'
- Purine (A, G, 2 Ringe) vs. Pyrimidine (C, T, 1 Ring)
- Semikonservativ (Meselson-Stahl) vs. konservativ vs. dispersiv

**Prüfungsrelevante Zahlen/Fakten:**
- A = T, G ≡ C → A + G = C + T (Purine = Pyrimidine)
- Hayflick-Limit: ca. 50 Zellteilungen ohne Telomerase
- Telomer-Repeat beim Menschen: TTAGGG
- Okazaki-Fragmente: 100-200 nt (Eukaryoten), 1.000-2.000 nt (Prokaryoten)
- Replikationsgeschwindigkeit: Prokaryoten ~1.000 nt/s, Eukaryoten ~50 nt/s

---

## Zusammenfassung (ultrakompakt)

- DNA: antiparallele Doppelhelix; **A-T** (2 Wasserstoffbrücken), **G≡C** (3 Wasserstoffbrücken, stabiler)
- **Chargaff-Regeln**: A = T; G = C (folgt aus komplementärer Basenpaarung)
- **Semikonservative Replikation**: jeder Elternstrang dient als Matrize → je ein Tochterstrang neu
- **Leitstrang**: kontinuierlich synthetisiert (5'→3'); **Folgestrang**: diskontinuierlich als Okazaki-Fragmente
- DNA-Polymerase arbeitet ausschließlich **5'→3'** und braucht einen Primer (von der Primase gelegt)
- Enzyme der Replikation: Helicase (öffnet), Primase (Primer), DNA-Pol III (Synthese), Ligase (verbindet Fragmente)
- **Telomere** (TTAGGG-Repeats): Schutz der Chromosomenenden; Telomerase verlängert sie (Stammzellen, Keimbahn)
- Telomerase-Reaktivierung in Krebszellen → unkontrolliertes Wachstum (Hallmark of Cancer)`,
      lernziele: [
        "Den Aufbau der DNA-Doppelhelix und die Chargaff-Regeln (A=T, G≡C) erklären können.",
        "Das semikonservative Prinzip der DNA-Replikation beschreiben und das Meselson-Stahl-Experiment interpretieren können.",
        "Den Unterschied zwischen Leitstrang (kontinuierlich) und Folgestrang (diskontinuierlich, Okazaki-Fragmente) erläutern können.",
        "Die Enzyme der Replikation (Helicase, Primase, DNA-Polymerase, Ligase, Telomerase) und ihre Funktionen nennen können.",
        "Die Rolle der Telomerase bei Seneszenz und Krebsentstehung erklären können.",
      ],
      sections: [],
      diagram: "dna-helix",

      merksätze: [
        "Chargaff-Regeln: A = T (2 H-Brücken), G = C (3 H-Brücken, stabiler). Purine (A, G, 2 Ringe) paaren mit Pyrimidinen (C, T, 1 Ring). A + G = C + T.",
        "DNA-Replikation ist semikonservativ: Jeder Tochterstrang enthält 1 alten (Matrize) + 1 neuen Strang. Meselson-Stahl-Experiment (1958) bewies dies mit N15/N14.",
        "DNA-Polymerase synthetisiert ausschließlich in 5'->3'-Richtung und benoetigt einen RNA-Primer. Leitstrang: kontinuierlich (1 Primer). Folgestrang: diskontinuierlich (Okazaki-Fragmente, viele Primer).",
        "Telomerase verlaengert Telomere (TTAGGG-Repeats) in Keimbahn-, Stamm- und Krebszellen. Ohne Telomerase: Hayflick-Limit (~50 Teilungen) und Seneszenz.",
      ],
      klinischerBezug:
        "Defekte der DNA-Replikation und -Reparatur sind mit schweren Erkrankungen assoziiert. Werner-Syndrom (Helicase-Defekt) verursacht vorzeitige Alterung. Bloom-Syndrom (BLM-Helicase) führt zu erhöhter Schwesterchromatid-Austauschrate und Krebsprädisposition. Telomerase-Reaktivierung ist ein Hallmark of Cancer — Telomerase-Inhibitoren (Imetelstat) werden als Krebstherapie erprobt.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Warum kann die DNA-Polymerase den Folgestrang (Lagging Strand) nur diskontinuierlich synthetisieren?",
        answer:
          "DNA-Polymerase synthetisiert ausschließlich in 5→3-Richtung. Der Folgestrang verläuft in 3→5-Richtung zur Replikationsgabel. Daher muss er in kurzen Fragmenten (Okazaki-Fragmente) entgegen der Gabelrichtung synthetisiert werden, jeweils mit eigenem RNA-Primer. DNA-Ligase verbindet die Fragmente anschließend.",
      },
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
      ],
    },
    {
      id: "bio-6-02",
      title: "Transkription",
      stichworte: [
        "mRNA-Prozessierung",
        "Spleißen",
        "Exons",
        "Introns",
        "Promotor",
        "TATA-Box",
        "RNA-Polymerase",
        "Alternatives Spleißen",
      ],
      content: `## Einleitung

Die Transkription ist der erste Schritt der Genexpression, bei dem die genetische Information der DNA in eine mRNA-Kopie umgeschrieben wird. Bei Eukaryoten durchläuft die prä-mRNA anschließend drei Prozessierungsschritte (Capping, Polyadenylierung, Splicing), bevor sie als reife mRNA zur Translation ins Zytoplasma exportiert wird. Im MedAT sind die Unterschiede zwischen DNA und RNA, die Rolle der RNA-Polymerase II und die Besonderheiten des eukaryotischen Splicings besonders prüfungsrelevant.

**Das Wichtigste auf einen Blick:**
- RNA: Ribose, Uracil statt Thymin, einzelsträngig
- RNA-Polymerase liest Template Strand 3'→5', synthetisiert RNA 5'→3'
- Drei Prozessierungsschritte: 5'-Capping (m7G), 3'-Poly-A-Tail, Splicing
- Alternatives Splicing erzeugt Proteomdiversität aus weniger Genen
- Prokaryoten: keine Introns, keine Prozessierung, gekoppelte Transkription/Translation

---

## Grundprinzip der Transkription

RNA unterscheidet sich von DNA durch Ribose (statt Desoxyribose), Uracil (statt Thymin) und ist einzelsträngig. Bei der Transkription liest RNA-Polymerase den Template Strand (3'→5') und synthetisiert RNA in 5'→3'-Richtung — ohne Primer.

> **Merke:** RNA: Ribose (2'-OH), Uracil (U statt T), Einzelstrang. DNA: Desoxyribose, Thymin (T), Doppelstrang. Basenpaarung: A-U (RNA), A-T (DNA), G-C (beide). RNA weniger stabil (2'-OH anfällig für Hydrolyse).

---

## Ablauf der Transkription

Bei Prokaryoten erkennt der Sigma-Faktor den Promotor (-10 Pribnow-Box, -35-Box). Bei Eukaryoten bindet TFIID (TBP) an die TATA-Box und rekrutiert RNA-Pol II. Termination erfolgt prokaryotisch durch Haarnadelstrukturen oder Rho-Protein; eukaryotisch durch Polyadenylierungssignal (AAUAAA).

> **Merke:** RNA-Pol II (mRNA): TATA-Box (Promotor), TFIID (TBP bindet TATA), weitere TFs (TFIIB, E, F, H) rekrutieren RNA-Pol II. Syntheserichtung 5'→3', KEIN Primer. Template Strand 3'→5' (Matrize), Coding Strand 5'→3' (= mRNA, T → U).

---

## RNA-Prozessierung (nur Eukaryoten!)

Drei Schritte: 5'-Capping (m7G-Kappe: Schutz, Ribosom-Erkennung, Kernexport), 3'-Polyadenylierung (~200 Adenine: Stabilität, Schutz), Splicing (Spliceosom entfernt Introns GU...AG, verbindet Exons). Alternatives Splicing erzeugt Proteom-Diversität.

> **Merke:** 3 Schritte: (1) 5'-Capping (m7G-Kappe, Schutz + Ribosom-Erkennung), (2) 3'-Poly-A-Tail (~200 A, Stabilität), (3) Splicing (Spliceosom entfernt Introns GU...AG, Exons verbunden). Alternatives Splicing → viele Proteine von 1 Gen.

---

## Prokaryoten vs. Eukaryoten

Prokaryoten haben 1 RNA-Polymerase, keine Introns, keine RNA-Prozessierung und gekoppelte Transkription/Translation. Eukaryoten haben 3 RNA-Polymerasen, Introns, alle drei Prozessierungsschritte und räumlich getrennte Transkription (Kern) und Translation (Cytoplasma).

> **Merke:** Prokaryoten: KEINE Introns, KEINE RNA-Prozessierung, gekoppelte Transkription/Translation. Eukaryoten: Introns + Exons, RNA-Prozessierung (Capping/Poly-A/Splicing), getrennte Transkription (Kern) + Translation (Cytoplasma).

---

## Die drei eukaryotischen RNA-Polymerasen

Eukaryoten besitzen drei verschiedene RNA-Polymerasen mit unterschiedlichen Aufgaben: RNA-Polymerase I transkribiert im Nukleolus die ribosomale RNA (rRNA: 28S, 18S, 5,8S) als polycistronisches Vorläufertranskript (45S), das anschließend prozessiert wird. RNA-Polymerase II ist für alle proteincodierenden Gene (mRNA) sowie für die meisten kleinen nukleären RNAs (snRNAs) und microRNAs verantwortlich — sie wird durch alpha-Amanitin bereits in niedrigen Konzentrationen gehemmt. RNA-Polymerase III transkribiert tRNAs, die 5S-rRNA und weitere kleine RNAs. Die CTD (C-terminale Domäne) der RNA-Pol II ist essenziell für die Koordination der Transkription mit der mRNA-Prozessierung: Phosphorylierung an Serin 5 der CTD rekrutiert die Capping-Enzyme, Phosphorylierung an Serin 2 rekrutiert Spleißfaktoren und das Polyadenylierungssignal.

Für das Verständnis der Splicing-Regulation ist die Zusammensetzung des Spliceosoms wichtig: Es besteht aus fünf snRNPs (U1, U2, U4, U5, U6), die zusammen mit über 200 Proteinen die präzise Erkennung der Spleißstellen (5'-Donor GU, Branch Point A, 3'-Akzeptor AG) und die zwei Transesterifizierungsreaktionen katalysieren. Fehler in diesem Prozess führen zu Spleißmutationen, die für etwa 15% aller humanen Punktmutationen verantwortlich sind. Beta-Thalassämie entsteht häufig durch Spleißmutationen im HBB-Gen, die entweder die normale Spleißstelle zerstören oder kryptische Spleißstellen aktivieren und so zu fehlerhaftem beta-Globin oder dessen Fehlen führen.

> **Merke:** RNA-Pol I: rRNA (Nukleolus). RNA-Pol II: mRNA + snRNAs (alpha-Amanitin-sensitiv). RNA-Pol III: tRNA + 5S-rRNA. CTD der Pol II koordiniert Capping, Splicing und Polyadenylierung.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** DNA vs. RNA (Desoxyribose vs. Ribose, Thymin vs. Uracil, doppelsträngig vs. oft einzelsträngig), mRNA, tRNA, rRNA, Stabilität.

**Ergänzend vertiefend:** RNA-Editierung; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Unterschied DNA vs. RNA (Zucker, Basen, Strangigkeit) nennen
- Die drei RNA-Prozessierungsschritte bei Eukaryoten erklären
- Template Strand vs. Coding Strand unterscheiden

**Typische Prüfungsfallen / Verwechslungen:**
- Template Strand (3'→5', Matrize) vs. Coding Strand (5'→3', mRNA-Sequenz mit T statt U)
- RNA-Polymerase braucht KEINEN Primer (anders als DNA-Polymerase)
- Prokaryoten: KEINE Introns, KEINE RNA-Prozessierung — direkt gekoppelt
- Eukaryoten: 3 RNA-Polymerasen (I für rRNA, II für mRNA, III für tRNA/5S-rRNA)
- Spleißen: Introns beginnen mit GU und enden mit AG (GU-AG-Regel)

**Prüfungsrelevante Zahlen/Fakten:**
- Poly-A-Tail: ca. 200 Adenine am 3'-Ende
- Mensch: ca. 20.000 Gene → >100.000 Proteine durch alternatives Splicing
- α-Amanitin (Knollenblätterpilz): hemmt RNA-Pol II → tödliche Leberschädigung
- Rifampicin: hemmt bakterielle RNA-Polymerase (Tuberkulose-Therapie)
- Nusinersen (Spinraza): Antisense-Oligonukleotid korrigiert SMN2-Splicing bei SMA

---

## Zusammenfassung (ultrakompakt)

- **Transkription**: RNA-Polymerase liest Template Strand (3'→5') → synthetisiert prä-mRNA (5'→3'); **kein Primer nötig**
- RNA-Polymerase braucht Promotor (TATA-Box) zur Initiation; Transkriptionsfaktoren binden zuerst
- **Template Strand** = Matrize (3'→5'); **Coding Strand** = gleiches Vorzeichen wie mRNA (5'→3', T statt U)
- **RNA-Prozessierung** bei Eukaryoten (3 Schritte):
  1. **5'-Cap** (m7G): schützt vor Abbau, ermöglicht Ribosom-Bindung
  2. **Poly-A-Tail** (3'-Ende): stabilisiert mRNA
  3. **Splicing** (Spliceosom): Introns entfernen, Exons verbinden
- **Alternatives Splicing**: ein Gen → verschiedene mRNA-Varianten → verschiedene Proteine → erklärt 100.000+ Proteine aus ~20.000 Genen
- **Prokaryoten**: keine Introns, keine Prozessierung; Transkription und Translation zeitlich-räumlich gekoppelt`,
      lernziele: [
        "Den Unterschied zwischen DNA und RNA (Zucker, Basen, Strangigkeit) erklären können.",
        "Die drei Phasen der Transkription (Initiation, Elongation, Termination) bei Pro- und Eukaryoten beschreiben können.",
        "Die drei RNA-Prozessierungsschritte bei Eukaryoten (5'-Capping, Poly-A-Tail, Splicing) und ihre Funktion erläutern können.",
        "Den Unterschied zwischen Template Strand und Coding Strand sowie die Syntheserichtung der RNA-Polymerase erklären können.",
        "Klinische Bedeutung von Splicing-Defekten (β-Thalassämie) und Transkriptionshemmung (α-Amanitin) benennen können.",
      ],
      sections: [],
      diagram: "transcription-translation",
      imageUrl: "/grafik-16-zentraldogma.svg",

      merksätze: [
        "RNA-Polymerase liest den Template Strand (3'->5') und synthetisiert RNA in 5'->3'-Richtung — ohne Primer (anders als DNA-Polymerase).",
        "Drei RNA-Prozessierungsschritte (nur Eukaryoten): (1) 5'-Capping (m7G, Schutz + Ribosom-Erkennung), (2) 3'-Poly-A-Tail (~200 A, Stabilitaet), (3) Splicing (Spliceosom entfernt Introns GU...AG, Exons verbunden).",
        "Alternatives Splicing erzeugt Proteom-Diversitaet: ~20.000 Gene -> >100.000 Proteine beim Menschen.",
        "Prokaryoten: KEINE Introns, KEINE RNA-Prozessierung, gekoppelte Transkription/Translation. Eukaryoten: Introns + Exons, RNA-Prozessierung, getrennte Transkription (Kern) und Translation (Zytoplasma).",
        "Eukaryotische RNA-Polymerasen: Pol I (rRNA), Pol II (mRNA, gehemmt durch Alpha-Amanitin), Pol III (tRNA, 5S-rRNA).",
      ],
      klinischerBezug:
        "Alpha-Amanitin (Knollenblätterpilz-Gift) hemmt die RNA-Polymerase II → tödliche Leberschädigung. Rifampicin hemmt bakterielle RNA-Polymerase (Tuberkulose-Therapie) ohne eukaryotische Polymerase zu beeinträchtigen. Fehler beim Spleißen verursachen Erkrankungen: Spinal Muskelatrophie (SMA) beruht auf Spleißdefekt des SMN2-Gens — Nusinersen (Antisense-Oligonukleotid) korrigiert das Spleißen.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "In welcher Reihenfolge erfolgen die posttranskriptionellen Modifikationen der prä-mRNA bei Eukaryoten?",
        answer:
          "Co-transkriptionell: (1) 5-Capping (7-Methylguanosin), (2) Spleißen (Entfernung der Introns durch Spleißosom), (3) 3-Polyadenylierung (Poly-A-Schwanz, 100–250 Adenine). Capping und Polyadenylierung schützen vor Abbau und sind für den Kernexport erforderlich.",
      },
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
      ],
    },
    {
      id: "bio-6-03",
      title: "Translation",
      stichworte: [
        "Ribosomen",
        "tRNA",
        "Elongation",
        "Initiation",
        "Termination",
        "Proteinbiosynthese",
        "mRNA",
        "rRNA",
      ],
      content: `## Einleitung

Die Translation ist der zweite Schritt der Genexpression, bei dem die Nukleotidsequenz der mRNA am Ribosom in eine Aminosäuresequenz übersetzt wird. Der genetische Code ist ein degenerierter Triplett-Code, bei dem 64 Codons für 20 Aminosäuren und 3 Stoppsignale codieren. Für den MedAT sind die Eigenschaften des genetischen Codes, der Ribosomenaufbau (70S vs. 80S) und die Wirkungsweise translationshemmender Antibiotika besonders wichtig.

**Das Wichtigste auf einen Blick:**
- Triplett-Code: 3 Basen = 1 Codon = 1 Aminosäure; degeneriert und universell
- Start-Codon AUG (Met), Stopp-Codons UAA, UAG, UGA
- Ribosomen: Prokaryoten 70S (30S+50S), Eukaryoten 80S (40S+60S)
- A-Site (Aminoacyl-tRNA), P-Site (Peptidkette), E-Site (Exit)
- Antibiotika nutzen Unterschied 70S vs. 80S: Tetracyclin (30S), Chloramphenicol (50S)

---

## Genetischer Code

Der genetische Code ist ein Triplett-Code: je 3 Basen (Codon) codieren für 1 Aminosäure. 64 Codons für 20 Aminosäuren + 3 Stopp → der Code ist degeneriert (mehrere Codons pro Aminosäure). Start-Codon ist AUG (Met), Stopp-Codons sind UAA, UAG, UGA.

> **Merke:** Triplett-Code (3 Basen → 1 AS), degeneriert (viele Codons → 1 AS, z.B. Leucin 6 Codons), universell. Start-Codon AUG (Met), Stopp-Codons UAA/UAG/UGA. 64 Codons (4³) → 20 AS + 3 Stopp.

---

## Wobble-Hypothese und tRNA

Die Wobble-Hypothese erklärt, warum ~45 tRNAs für 61 Codons ausreichen: die 3. Codon-Base (Wobble-Position) erlaubt nicht-Watson-Crick-Paarung (z.B. G-U). tRNAs haben Kleeblattstruktur mit Anticodon-Arm und CCA-3'-Ende zur Aminosäure-Bindung. Aminoacyl-tRNA-Synthetasen (20 Enzyme) beladen tRNAs ATP-abhängig.

> **Merke:** tRNA: Kleeblatt-Struktur, Anticodon (paart mit mRNA-Codon), CCA-3'-Ende (Aminosäure-Bindung). Aminoacyl-tRNA-Synthetase (spezifisch für jede AS) belädt tRNA (ATP-abhängig). Wobble: 1 tRNA für mehrere Codons (3. Base flexibel).

---

## Ribosom

Prokaryotische Ribosomen sind 70S (30S + 50S), eukaryotische 80S (40S + 60S). Die drei Bindungsstellen A-Site (neue Aminoacyl-tRNA), P-Site (Peptidkette) und E-Site (entladene tRNA) ermöglichen die schrittweise Peptidbindung durch die Peptidyl-Transferase (ein Ribozym).

> **Merke:** Prokaryoten 70S (30S + 50S), Eukaryoten 80S (40S + 60S). A-Site (neue Aminoacyl-tRNA), P-Site (Peptidkette), E-Site (entladene tRNA). Peptidyl-Transferase (rRNA-katalysiert = Ribozym) → Peptidbindung.

---

## Ablauf der Translation

Bei Prokaryoten erkennt die Shine-Dalgarno-Sequenz das Ribosom (fMet-Start). Eukaryoten scannen von der m7G-Kappe bis zum ersten AUG (Kozak-Sequenz, Met-Start). Elongation: Codon-Erkennung (A-Site) → Peptidbindung → Translokation (GTP). Stopp-Codons rekrutieren Release-Faktoren → Protein freigesetzt.

> **Merke:** Prokaryoten: Shine-Dalgarno (AGGAGGU vor AUG), fMet-tRNA (formyliert), IF1/2/3. Eukaryoten: 5'-Capping (m7G), Kozak-Sequenz (GCCRCCAUGG), Met-tRNA (nicht formyliert), eIF1/2/3/4.

---

## Antibiotika (hemmen Translation)

Antibiotika nutzen den Unterschied zwischen 70S (Prokaryoten) und 80S (Eukaryoten) aus. Tetracyclin blockiert die A-Site (30S), Chloramphenicol hemmt die Peptidyl-Transferase (50S), Erythromycin blockiert die Translokation (50S). Mitochondrien (70S-Ribosomen) können ebenfalls betroffen sein.

---

## Posttranslationale Modifikation und Proteinreifung

Nach der Translation durchlaufen die meisten Proteine posttranslationale Modifikationen (PTM), die für ihre Funktion, Lokalisation und Lebensdauer entscheidend sind. Wichtige PTMs sind: Phosphorylierung (Serin, Threonin, Tyrosin durch Kinasen — zentral in Signaltransduktion), Glykosylierung (Anheftung von Zuckerketten im ER und Golgi-Apparat — wichtig für Membranproteine und sekretierte Proteine), Ubiquitinierung (Markierung für den proteasomalen Abbau durch das Ubiquitin-Proteasom-System) und Proteolyse (Abspaltung von Signalpeptiden oder Aktivierung von Zymo­genen). Die Signalsequenz-Hypothese erklärt den cotranslationalen Transport: Ribosomen, die ein Protein mit N-terminalem Signalpeptid synthetisieren, werden über das Signal Recognition Particle (SRP) an die ER-Membran dirigiert, wo die Translation direkt ins ER-Lumen erfolgt.

Die Proteinfaltung wird durch Chaperone (z. B. Hsp70, Hsp60/GroEL) unterstützt, die Fehlfaltungen verhindern. Fehlgefaltete Proteine werden durch die Unfolded Protein Response (UPR) im ER erkannt und über ERAD (ER-associated Degradation) dem Proteasom zugeführt. Versagt dieses Qualitätskontrollsystem, aggregieren fehlgefaltete Proteine und verursachen Proteinopathien: Prionkrankheiten (PrP^Sc), Alzheimer (Amyloid-beta-Plaques), Parkinson (alpha-Synuclein-Aggregate) und Huntington (Polyglutamin-Aggregate).

> **Merke:** PTM: Phosphorylierung (Signaltransduktion), Glykosylierung (ER/Golgi), Ubiquitinierung (Proteasom-Abbau). SRP dirigiert Ribosomen mit Signalpeptid ans ER. Chaperone (Hsp70) verhindern Fehlfaltung.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Genetischer Code (Triplett, degeneriert/redundant, universell, kommafrei, Start-/Stoppcodons), Codon-Aminosäure, Wobble-Hypothese.

**Ergänzend vertiefend:** Mitochondrialer Code; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Eigenschaften des genetischen Codes (Triplett, degeneriert, universell) erklären
- Ribosomenaufbau Pro- vs. Eukaryoten vergleichen (70S vs. 80S)
- Antibiotika-Wirkmechanismen auf die Translation zuordnen

**Typische Prüfungsfallen / Verwechslungen:**
- Degeneriert (mehrere Codons für 1 AS) vs. ambig (1 Codon für mehrere AS — das ist NICHT der Fall)
- 70S Ribosomen (Prokaryoten) vs. 80S (Eukaryoten) — Mitochondrien haben auch 70S!
- A-Site (neues Aminoacyl-tRNA) vs. P-Site (Peptidkette) vs. E-Site (Exit/entladen)
- Shine-Dalgarno (Prokaryoten) vs. Kozak-Sequenz (Eukaryoten) für Translationsstart
- Peptidyl-Transferase ist ein Ribozym (rRNA-katalysiert), kein Proteinenzym

**Prüfungsrelevante Zahlen/Fakten:**
- 64 Codons (4³): 61 codieren Aminosäuren, 3 sind Stopp-Codons
- 20 Aminosäuren, ca. 45 verschiedene tRNAs (Wobble erklärt die Diskrepanz)
- Leucin: 6 Codons (am stärksten degeneriert), Met/Trp: je 1 Codon
- Tetracyclin: blockiert A-Site (30S); Chloramphenicol: hemmt Peptidyl-Transferase (50S)
- Erythromycin: blockiert Translokation (50S)

---

## Zusammenfassung (ultrakompakt)

- **Genetischer Code**: Triplett (3 Basen = 1 Codon), universell, degeneriert (mehrere Codons für 1 Aminosäure), kommafrei
- 64 Codons: 61 codieren für 20 Aminosäuren, 3 sind Stopp-Codons (UAA, UAG, UGA)
- **Start-Codon**: AUG (Methionin) → Translationsbeginn
- **Ribosomen**: Prokaryoten 70S (30S + 50S); Eukaryoten 80S (40S + 60S)
- tRNA trägt Aminosäure und Anticodon; **Peptidyl-Transferase** (rRNA-Ribozym!) katalysiert Peptidbindungsknüpfung
- Ribosom-Sites: **A** (Aminoacyl-tRNA eingebaut), **P** (wachsende Kette), **E** (austretende leere tRNA)
- Antibiotika hemmen Prokaryoten-Ribosomen: Tetracyclin (A-Site), Chloramphenicol (Peptidyl-Transferase), Erythromycin (Translokation)
- Mitochondrien mit 70S-Ribosomen → können ebenfalls von Antibiotika betroffen sein (mitochondriale Toxizität)`,
      lernziele: [
        "Die Eigenschaften des genetischen Codes (Triplett, universell, degeneriert, kommafrei) erklären können.",
        "Start- und Stopp-Codons sowie die Wobble-Hypothese und die Rolle der tRNA beschreiben können.",
        "Den Aufbau prokaryotischer (70S) und eukaryotischer (80S) Ribosomen und die A/P/E-Sites erläutern können.",
        "Die drei Phasen der Translation (Initiation, Elongation, Termination) mit Unterschieden Pro-/Eukaryoten beschreiben können.",
        "Den Wirkmechanismus der wichtigsten Antibiotika (Tetracyclin, Chloramphenicol, Erythromycin) auf die Translation erklären können.",
      ],
      sections: [],
      diagram: "transcription-translation",
      imageUrl: "/grafik-16-zentraldogma.svg",

      merksätze: [
        "Genetischer Code: Triplett-Code (3 Basen = 1 Codon = 1 Aminosaeure), degeneriert (mehrere Codons pro AS), universell, kommafrei. Start: AUG (Met). Stopp: UAA, UAG, UGA.",
        "Ribosomen: Prokaryoten 70S (30S + 50S), Eukaryoten 80S (40S + 60S). Drei Bindungsstellen: A-Site (neue Aminoacyl-tRNA), P-Site (Peptidkette), E-Site (Exit).",
        "Peptidyl-Transferase ist ein Ribozym (rRNA-katalysiert, kein Proteinenzym) und katalysiert die Peptidbindung in der grossen ribosomalen Untereinheit.",
        "Translationsstart: Prokaryoten nutzen Shine-Dalgarno-Sequenz + fMet-tRNA (formyliert). Eukaryoten scannen von 5'-Cap bis erstes AUG (Kozak-Sequenz) + Met-tRNA (nicht formyliert).",
        "Antibiotika nutzen 70S/80S-Unterschied: Tetracyclin blockiert A-Site (30S), Chloramphenicol hemmt Peptidyl-Transferase (50S), Erythromycin blockiert Translokation (50S). Mitochondrien (70S) koennen auch betroffen sein.",
      ],
      klinischerBezug:
        "Aminoglykoside (Gentamicin) hemmen die bakterielle 30S-Untereinheit → Fehlablesung. Chloramphenicol hemmt die Peptidyltransferase der 50S-Untereinheit. Diese Antibiotika nutzen die Strukturunterschiede zwischen prokaryotischen (70S) und eukaryotischen (80S) Ribosomen. Proteinfehlfaltung verursacht neurodegenerative Erkrankungen: Prionkrankheiten (CJK), Alzheimer (Amyloid-β), Parkinson (α-Synuclein).",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "An welcher ribosomalen Stelle findet die Peptidbindungsknüpfung (Peptidyltransferase-Reaktion) statt?",
        answer:
          "Die Peptidyltransferase-Reaktion findet an der A-Stelle (Aminoacyl-Stelle) der großen ribosomalen Untereinheit statt. Die wachsende Peptidkette wird von der tRNA an der P-Stelle auf die Aminosäure der tRNA an der A-Stelle übertragen. Die katalytische Aktivität liegt in der 23S-rRNA (Ribozym).",
      },
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
      ],
    },
    {
      id: "bio-6-04",
      title: "Genregulation",
      stichworte: [
        "Operon-Modell",
        "Lac-Operon",
        "Transkriptionsfaktoren",
        "Epigenetik",
        "DNA-Methylierung",
        "Histonmodifikation",
        "Proteom",
        "ncRNA",
      ],
      content: `## Einleitung

Die Genregulation steuert, welche Gene in einer Zelle wann und wie stark exprimiert werden, und erklärt, warum verschiedene Zelltypen trotz identischem Genom unterschiedliche Funktionen erfüllen. Prokaryoten nutzen Operons als regulatorische Einheiten, während Eukaryoten über Transkriptionsfaktoren, Enhancer, epigenetische Mechanismen und RNA-Interferenz ein hochkomplexes Regulationsnetzwerk besitzen. Im MedAT ist besonders das lac-Operon als Modellsystem sowie die Grundlagen der Epigenetik prüfungsrelevant.

**Das Wichtigste auf einen Blick:**
- lac-Operon: induzierbares Operon, Laktose (Allolaktose) inaktiviert Repressor → Gene AN
- trp-Operon: reprimierbares Operon, Tryptophan als Corepressor → Gene AUS
- Epigenetik: DNA-Methylierung silenced Gene, Histon-Acetylierung aktiviert Gene
- miRNA: endogen, partiell komplementär, Translationsrepression; siRNA: exogen, vollständig komplementär, mRNA-Abbau
- Enhancer können Millionen Basenpaare vom Promotor entfernt liegen (DNA-Looping)

---

## Prokaryotische Genregulation: Operon-Modell

Das lac-Operon (induzierbares Operon) wird durch Allolaktose (Induktor) aktiviert: ohne Laktose blockiert der Repressor den Operator (Gene AUS), mit Laktose ist der Repressor inaktiv (Gene AN). Glukosemangel steigert cAMP → CAP-cAMP verstärkt Transkription zusätzlich. Das trp-Operon (reprimierbares Operon) funktioniert umgekehrt: Tryptophan als Corepressor aktiviert den Repressor → Gene AUS (Feedback-Hemmung).

> **Merke:** lac-Operon: Induzierbares Operon! OHNE Laktose: Repressor AN → Gene AUS. MIT Laktose: Allolaktose → Repressor inaktiv → Gene AN. CAP-cAMP (Glukose ↓): Transkription ↑↑. trp-Operon: MIT Tryptophan (Corepressor) → Repressor aktiv → Gene AUS.

---

## Eukaryotische Genregulation

Eukaryoten regulieren Gene über Transkriptionsfaktoren: basale TFs (TFIID/TBP an TATA-Box), Aktivatoren (an Enhancer) und Repressoren (an Silencer). Enhancer können Millionen Basenpaare vom Promotor entfernt liegen und wirken via DNA-Looping (Mediator-Komplex). Kein Operon-Prinzip.

> **Merke:** Enhancer können weit entfernt vom Promotor sein (bis 1 Mio. bp) → DNA-Looping bringt Enhancer + Promotor zusammen. Aktivatoren (Enhancer → Transkription ↑), Repressoren (Silencer → Transkription ↓).

---

## Epigenetische Regulation

DNA-Methylierung (5mC an CpG-Inseln) stillegt Gene ohne Sequenzänderung — vererbbar und reversibel. Histon-Acetylierung (HAT) lockert Chromatin → Euchromatin → Transkription ↑; Deacetylierung (HDAC) verdichtet → Heterochromatin → Transkription ↓. Beispiele: X-Inaktivierung, Genomic Imprinting.

> **Merke:** DNA-Methylierung (CpG-Inseln, 5mC): Promotor methyliert → Gen AUS. HAT (Acetylierung) → Euchromatin → Transkription ↑. HDAC (Deacetylierung) → Heterochromatin → Transkription ↓.

---

## RNA-Interferenz (RNAi): miRNA und siRNA

miRNA (endogen, ~22 nt) bindet unvollständig an die 3'-UTR der Ziel-mRNA → Translations-Repression oder Abbau. siRNA (exogen/künstlich, ~21–23 nt) bindet vollständig komplementär → mRNA-Abbau via RISC-Komplex. Beide nutzen Dicer zur Prozessierung; miRNA zusätzlich Drosha im Kern.

> **Merke:** miRNA: Endogen, ~22 nt, 3'-UTR-Bindung (nicht vollständig komplementär), Translations-Repression/Abbau. siRNA: Exogen, ~21–23 nt, vollständig komplementär, mRNA-Abbau (RISC, Argonaute), therapeutisch (Patisiran).

---

## X-Inaktivierung und Genomic Imprinting

Die X-Inaktivierung (Lyon-Hypothese) ist ein epigenetischer Dosiskompensationsmechanismus: In jeder somatischen Zelle einer Frau wird eines der beiden X-Chromosomen zufällig inaktiviert und als Barr-Körperchen (fakultatives Heterochromatin) sichtbar. Die Inaktivierung wird durch die nicht-codierende RNA XIST eingeleitet, die das zu inaktivierende X-Chromosom umhüllt und die Rekrutierung von Histon-Deacetylasen und DNA-Methyltransferasen bewirkt. Da die Inaktivierung zufällig und früh in der Embryonalentwicklung erfolgt, sind Frauen ein Mosaik aus Zellen mit unterschiedlichem aktivem X-Chromosom — sichtbar z. B. am Fellmuster von Schildpattkatzen.

Genomic Imprinting (genomische Prägung) beschreibt die elternspezifische Stilllegung bestimmter Gene durch DNA-Methylierung in der Keimbahn. Das väterliche und mütterliche Allel sind funktionell nicht gleichwertig. Klinisch relevant sind das Prader-Willi-Syndrom (Deletion der väterlichen Kopie auf Chromosom 15q11-13, mütterliche Kopie ist geprägt/inaktiv) und das Angelman-Syndrom (Deletion der mütterlichen Kopie an derselben Stelle, väterliche Kopie ist geprägt). Beide Syndrome betreffen dieselbe Chromosomenregion, manifestieren sich aber völlig unterschiedlich, je nachdem welches elterliche Allel betroffen ist. Imprinting-Fehler können auch durch uniparentale Disomie (UPD) entstehen, bei der beide Kopien eines Chromosoms von einem Elternteil stammen.

> **Merke:** X-Inaktivierung: XIST-RNA → Barr-Körperchen → Dosiskompensation bei Frauen. Genomic Imprinting: Elternspezifische Methylierung → Prader-Willi (väterlich deletiert) vs. Angelman (mütterlich deletiert), selbe Region 15q11-13.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** lac-Operon (Repressor, Induktion durch Laktose, Katabolit-Repression durch Glukose/cAMP), Genregulation Prokaryoten, Promotor, Operator.

**Ergänzend vertiefend:** trp-Operon; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- lac-Operon-Regulation mit und ohne Laktose/Glukose erklären
- DNA-Methylierung und Histon-Acetylierung mit Genaktivierung/-stilllegung verknüpfen
- miRNA vs. siRNA unterscheiden

**Typische Prüfungsfallen / Verwechslungen:**
- lac-Operon (induzierbar, Laktose AN) vs. trp-Operon (reprimierbar, Tryptophan AUS)
- DNA-Methylierung (CpG → Gen AUS) vs. Histon-Acetylierung (Euchromatin → Gen AN)
- HAT (Acetylierung → offen) vs. HDAC (Deacetylierung → geschlossen)
- miRNA (endogen, partiell komplementär, Translationsrepression) vs. siRNA (exogen, vollständig komplementär, mRNA-Abbau)
- Operon-Modell gilt NUR für Prokaryoten, nicht für Eukaryoten

**Prüfungsrelevante Zahlen/Fakten:**
- lac-Operon: Allolaktose = Induktor; CAP-cAMP = positiver Regulator bei Glukosemangel
- Enhancer können bis 1 Mio. bp vom Promotor entfernt wirken
- miRNA: ca. 22 Nukleotide lang, über 2.000 bekannte humane miRNAs
- Patisiran (Onpattro): erste zugelassene siRNA-Therapie (2018, hATTR)
- X-Inaktivierung und Genomic Imprinting: epigenetisch reguliert

---

## Zusammenfassung (ultrakompakt)

- **lac-Operon** (E. coli): induzierbares System; bei Laktose → Repressor inaktiviert → Gene AN; bei Glukose (Katabolit-Repression) → trotz Laktose herabgesetzt
- **trp-Operon**: reprimierbares System; bei Tryptophan-Überschuss → Repressor aktiv → Gene AUS
- **Eukaryotische Genregulation**: Transkriptionsfaktoren binden Enhancer/Silencer → DNA-Looping → Interaktion mit Promotor
- **Epigenetik**: Änderung der Genexpression ohne DNA-Sequenzänderung; vererbbar
- **DNA-Methylierung** (CpG-Inseln): stille Gene; Hypomethylierung in Krebs → Tumorgene aktiv
- **Histonmodifikation**: Acetylierung → Chromatin offen (Expression ↑); Methylierung → Chromatin dicht (Expression ↓)
- **miRNA/siRNA**: posttranskriptionell; binden komplementäre mRNA → Abbau oder Translationsrepression (Therapeutikum: Patisiran)`,
      lernziele: [
        "Das lac- und trp-Operon als Beispiele für induzierbare und reprimierbare Operons erklären können.",
        "Die Rolle von Transkriptionsfaktoren, Enhancern und Silencern bei der eukaryotischen Genregulation beschreiben können.",
        "Epigenetische Mechanismen (DNA-Methylierung, Histon-Acetylierung) und ihre Auswirkungen auf die Genexpression erläutern können.",
        "Den Unterschied zwischen miRNA und siRNA (Herkunft, Komplementarität, Wirkmechanismus) erklären können.",
        "Klinische Bedeutung gestörter Genregulation (Rett-Syndrom, Fragiles-X-Syndrom) benennen können.",
      ],
      sections: [],
      merksätze: [
        "lac-Operon (induzierbar): OHNE Laktose -> Repressor aktiv -> Gene AUS. MIT Laktose -> Allolaktose inaktiviert Repressor -> Gene AN. Glukosemangel: cAMP steigt -> CAP-cAMP verstaerkt Transkription.",
        "trp-Operon (reprimierbar): MIT Tryptophan (Corepressor) -> Repressor aktiv -> Gene AUS (Feedback-Hemmung). OHNE Tryptophan -> Repressor inaktiv -> Gene AN.",
        "Epigenetik: DNA-Methylierung (5mC an CpG-Inseln) -> Gen stillgelegt (Promotor methyliert = AUS). Histon-Acetylierung (HAT) -> Euchromatin -> Transkription AN. Histon-Deacetylierung (HDAC) -> Heterochromatin -> Transkription AUS.",
        "miRNA (endogen, ~22 nt, partiell komplementaer -> Translationsrepression) vs. siRNA (exogen, ~21-23 nt, vollstaendig komplementaer -> mRNA-Abbau via RISC). Beide benoetigen Dicer.",
        "Enhancer koennen bis zu 1 Mio. bp vom Promotor entfernt liegen und wirken ueber DNA-Looping (Mediator-Komplex). Operon-Modell gilt NUR fuer Prokaryoten.",
      ],
      diagram: "dna-helix",
      klinischerBezug:
        "Fehlregulation der Genexpression ist ein Kennzeichen von Krebs. Hypermethylierung von Tumorsuppressor-Promotoren (z. B. BRCA1, MLH1) silenced protektive Gene. Epigenetische Therapien: DNMT-Inhibitoren (Azacitidin, Decitabin) bei MDS und AML reaktivieren silenced Tumorsuppressorgene. HDAC-Inhibitoren (Vorinostat) öffnen Chromatin und reaktivieren Gene.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Was ist das Operon-Modell und welche Rolle spielt der Repressor beim lac-Operon?",
        answer:
          "Ein Operon ist eine Transkriptionseinheit bei Prokaryoten mit gemeinsamem Promotor und Operator für mehrere strukturelle Gene. Beim lac-Operon bindet der Repressor (lacI-Genprodukt) ohne Laktose an den Operator und blockiert die Transkription. Laktose (als Allolaktose) fungiert als Induktor: Sie bindet an den Repressor, verändert dessen Konformation → Repressor löst sich vom Operator → Transkription wird möglich.",
      },
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
      ],
    },

    // === from kap7-methoden-der-genetik ===
    {
      id: "bio-7-01",
      title: "PCR — Prinzip, Ablauf und klinische Anwendung",
      stichworte: [
        "PCR",
        "Denaturierung",
        "Annealing",
        "Elongation",
        "Taq-Polymerase",
        "Primer",
        "Thermocycler",
      ],
      content: `## Einleitung

Die Polymerase-Kettenreaktion (PCR) ermöglicht die exponentielle Vervielfältigung spezifischer DNA-Abschnitte in vitro und ist die wichtigste Methode der molekularen Diagnostik. Mit drei zyklisch wiederholten Schritten (Denaturierung, Annealing, Elongation) können aus einem einzigen DNA-Molekül innerhalb weniger Stunden Milliarden Kopien erzeugt werden. Im MedAT werden PCR-Varianten (RT-PCR, qPCR), die Berechnung der Amplifikation (2ⁿ) und die klinische Anwendung bei COVID-19-Diagnostik regelmäßig geprüft.

**Das Wichtigste auf einen Blick:**
- Drei Schritte: Denaturierung (94-95 °C), Annealing (50-68 °C), Elongation (72 °C)
- Exponentielle Amplifikation: n Zyklen → 2ⁿ Kopien (30 Zyklen ≈ 10⁹)
- Taq-Polymerase: hitzestabil (Thermus aquaticus), kein Proofreading
- RT-qPCR: Goldstandard für COVID-19-Diagnostik; CT-Wert korreliert invers mit Viruslast
- Mg²⁺ als essenzieller Cofaktor (1,5-2,5 mM optimal)

---

## Taq-Polymerase — Warum ein Enzym aus einer heißen Quelle?

Normale DNA-Polymerasen aus mesophilen Organismen (z. B. E. coli DNA-Pol I) denaturieren irreversibel bei Temperaturen über 50 °C. Die Taq-Polymerase stammt aus dem thermophilen Bakterium Thermus aquaticus, das in heißen Quellen des Yellowstone-Nationalparks bei 70–75 °C gedeiht. Sie ist bis ca. 95 °C stabil und kehrt nach der Denaturierungsphase bei 72 °C sofort in ihre aktive Konformation zurück. Dies ermöglicht die vollständige Automatisierung im Thermocycler — kein manueller Enzymaustausch zwischen den Zyklen. Ein wesentlicher Nachteil ist die fehlende Korrekturlesefunktion (keine 3'→5'-Exonuklease), was bei 30 Zyklen etwa eine Mutation pro 10 kb bedeutet. Für präzise Klonierungen wird daher Pfu-Polymerase (mit Proofreading) eingesetzt, die aber 10-fach langsamer ist.

> **Merke:** Taq: hitzestabil (Thermus aquaticus, Yellowstone), kein Proofreading → Fehlerrate 10⁻⁴; Pfu: Proofreading, präziser, langsamer.

---

## RT-PCR und COVID-19-Diagnostik: Schritt für Schritt

SARS-CoV-2 besitzt ein positiv-strängiges RNA-Genom von ~30.000 Nukleotiden. Der Nachweis per RT-qPCR erfolgt in drei Phasen: (1) RNA-Extraktion aus Nasen-Rachen-Abstrich — Lyse der Virushülle, Bindung der RNA an Silicamembran, Waschen, Elution; (2) Reverse Transkription — die Reverse Transkriptase (RT) schreibt die virale RNA mit einem Random-Hexamer- oder Oligo-dT-Primer in cDNA um; (3) qPCR — zielspezifische Primer amplifizieren Abschnitte des E-Gens (Envelope), N-Gens (Nucleocapsid) oder ORF1ab. TaqMan-Sonden detektieren die Produkte fluoreszenzbasiert. Der CT-Wert des N-Gen-Assays korreliert mit der Infektiosität: CT < 25 → Patient hochwahrscheinlich infektiös; CT > 35 → kaum Infektiosität, möglicherweise RNA-Fragmente toter Viren. Die Sensitivität beträgt >95%, die Spezifität >99,5% — deshalb gilt RT-qPCR als Goldstandard gegenüber Antigen-Schnelltests (Sensitivität ~70–80%).

> **Merke:** RT-qPCR COVID-19: RNA-Extraktion → RT (RNA→cDNA) → qPCR mit TaqMan-Sonde → CT-Wert. Niedrigerer CT = höhere Viruslast.

---

## Mg²⁺ als essenzieller Cofaktor

Magnesiumionen (Mg²⁺) sind unverzichtbar für die katalytische Aktivität der Taq-Polymerase. Mg²⁺ koordiniert die Triphosphatgruppe der einzubauenden dNTPs und stabilisiert den Übergangszustand der Phosphodiesterbindungsbildung. Die optimale Mg²⁺-Konzentration liegt bei 1,5–2,5 mM. Zu viel Mg²⁺: erhöht die Fehlerrate und fördert unspezifische Amplifikation. Zu wenig Mg²⁺: reduziert die Polymeraseaktivität, kein oder schwaches Produkt. EDTA (ein Chelator) hemmt die PCR durch Komplexierung von Mg²⁺ — deshalb darf EDTA nicht in PCR-Puffern enthalten sein.

> **Merke:** Mg²⁺: Cofaktor der Taq-Polymerase (1,5–2,5 mM optimal). Zu viel → Fehler; zu wenig → kein Produkt.

---

## Klinischer Bezug

PCR ist Goldstandard für Infektionsdiagnostik (COVID-19, HIV-VL), Genotypisierung und pränatale Diagnostik.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** PCR (Denaturierung ~95 °C, Annealing ~55–65 °C, Elongation ~72 °C), Taq-Polymerase, Primer, exponentielle Vervielfältigung, Anwendung (Diagnostik, Forensik).

**Ergänzend vertiefend:** qPCR; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Die drei PCR-Schritte mit Temperaturen und molekularen Vorgängen beschreiben
- Exponentielle Amplifikation berechnen (2ⁿ)
- RT-PCR, qPCR und RT-qPCR unterscheiden und klinische Anwendungen nennen

**Typische Prüfungsfallen / Verwechslungen:**
- RT-PCR (Reverse Transkriptase-PCR, RNA→cDNA) vs. qPCR (quantitative/Real-Time-PCR)
- Taq (kein Proofreading, schnell) vs. Pfu (Proofreading, langsam, präziser)
- SYBR Green (unspezifisch, jede dsDNA) vs. TaqMan-Sonde (spezifisch, zielgerichtet)
- Annealing-Temperatur zu hoch → kein Primer-Binding vs. zu niedrig → unspezifische Produkte
- CT-Wert: NIEDRIG = viel Template (hohe Viruslast), HOCH = wenig Template

**Prüfungsrelevante Zahlen/Fakten:**
- 30 Zyklen ≈ 10⁹ Kopien; 35 Zyklen ≈ 3,4 × 10¹⁰ Kopien
- Denaturierung: 94-95 °C; Annealing: 50-68 °C; Elongation: 72 °C
- Taq-Fehlerrate: ca. 10⁻⁴ (1 Fehler pro 10.000 Basen)
- COVID-19 RT-qPCR: CT < 25 = hochinfektiös; CT > 35 = kaum infektiös
- Mg²⁺-Optimum: 1,5-2,5 mM; EDTA hemmt PCR durch Mg²⁺-Chelation

---

## Zusammenfassung (ultrakompakt)

- **PCR** (3 Schritte): Denaturierung (~95 °C), Primer-Annealing (~55-65 °C), Elongation (72 °C) → exponentiell: 30 Zyklen ≈ 10⁹ Kopien
- **Taq-Polymerase** (aus Thermus aquaticus): hitzestabil, synthetisiert 5'→3', braucht Mg²⁺ als Cofaktor
- **RT-PCR**: RNA → cDNA (via Reverse Transkriptase) → dann PCR; für Nachweis von RNA-Viren und Genexpression
- **RT-qPCR** (quantitativ): Ct-Wert invers zur Viruslast; Goldstandard der COVID-19-Diagnostik
- Pfu-Polymerase: langsamere Alternative mit Proofreading → höhere Genauigkeit (für Klonierung)
- **Mg²⁺**: unverzichtbarer Cofaktor; zu wenig → kein Produkt; zu viel → Fehler; EDTA hemmt PCR
- Varianten: Nested-PCR (maximale Sensitivität), Multiplex-PCR (viele Ziele gleichzeitig), ddPCR (absolute Quantifizierung)`,

      lernziele: [
        "Die drei PCR-Schritte (Denaturierung, Annealing, Elongation) mit Temperaturen, Dauer und molekularen Vorgängen präzise erklären",
        "Die exponentielle Amplifikation (2ⁿ) berechnen und die Bedeutung der Taq-Polymerase begründen",
        "RT-PCR, qPCR und RT-qPCR unterscheiden und jeweils zwei klinische Anwendungsbeispiele nennen",
        "Den CT-Wert definieren und seine klinische Bedeutung am Beispiel COVID-19 erläutern",
        "Mindestens drei weitere PCR-Varianten (Nested, Allel-spezifisch, Multiplex) erklären",
      ],

      sections: [],
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
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK bio-7-02: DNA-Sequenzierung
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "bio-7-02",
      title: "DNA-Sequenzierung — Sanger, NGS und Nanopore",
      stichworte: [
        "Sanger-Methode",
        "Next-Generation-Sequencing",
        "Kettenabbruchmethode",
        "Didesoxynukleotide",
        "Nanopore",
      ],
      content: `## Einleitung

Die DNA-Sequenzierung bestimmt die exakte Basenfolge eines DNA-Abschnitts und ist Grundlage der modernen Genommedizin. Von der klassischen Sanger-Methode über Next-Generation-Sequencing (NGS) bis hin zur Nanopore-Technologie hat sich die Sequenzierung von einem Milliardenprojekt (Human Genome Project, 2003) zu einer Routinemethode für wenige hundert Euro entwickelt. Im MedAT sind das Sanger-Prinzip (ddNTPs), die Grundzüge von NGS und die klinischen Anwendungen wie Exomsequenzierung und Tumor-NGS prüfungsrelevant.

**Das Wichtigste auf einen Blick:**
- Sanger: ddNTPs als Kettenabbrecher, hohe Genauigkeit, für Einzelgenanalysen
- NGS (Illumina): massiv parallele Sequenzierung, Short Reads (150-300 bp)
- Nanopore: lange Reads (>10 kb), portabel (MinION), höhere Fehlerrate
- ACMG-Klassifikation: Pathogen bis Benigne (5 Klassen), VUS = unklare Signifikanz
- Exomsequenzierung: Diagnoseausbeute ~25-40% bei unklaren genetischen Syndromen

---

## Sanger vs. NGS — Wann welche Methode?

Die Sanger-Sequenzierung ist für gezielte Einzelgenanalysen nach wie vor die erste Wahl: hohe Genauigkeit, einfache Auswertung, keine aufwendige Bioinformatik. Typische Indikation: Bestätigung einer bereits bekannten Pathogenmutation (z. B. CFTR-Exon 10 bei Mukoviszidose-Verdacht) oder Sequenzierung eines kurzen Abschnitts (PCR-Produkt-Sequenzierung). NGS ist dann überlegen, wenn viele Gene gleichzeitig untersucht werden müssen: Gendiagnostikpanel (z. B. Kardiomyopathie-Panel mit 50+ Genen), Exomsequenzierung bei unklarem Syndrom, oder Tumorsequenzierung. Die Kosten für ein klinisches NGS-Panel (~500 Gene, ~200 €) sind heute deutlich günstiger als die sukzessive Sanger-Sequenzierung von 500 Einzelgenen.

> **Merke:** Sanger: Einzelgen, hohe Präzision, kein Bioinformatik-Aufwand. NGS: viele Gene parallel, große Datenmenge, Bioinformatik nötig.

---

## Variant Calling und klinische Interpretation

NGS-Daten liefern pro Probe Tausende von Varianten — die meisten sind benigne Polymorphismen (SNPs), die in der Bevölkerung häufig sind (>1% Frequenz in gnomAD). Die klinische Herausforderung ist die Interpretation seltener Varianten. Die ACMG/AMP-Klassifikation (American College of Medical Genetics) teilt Varianten in fünf Klassen ein: (1) Pathogen, (2) Wahrscheinlich pathogen, (3) Unbekannte Signifikanz (VUS), (4) Wahrscheinlich benigne, (5) Benigne. VUS stellen klinisch eine Herausforderung dar, da weder Diagnose noch Ausschluss möglich ist. Datenbankresourcen: ClinVar (klinische Varianten), gnomAD (Populationsfrequenzen), OMIM (Phänotyp-Gen-Assoziationen).

> **Merke:** ACMG-Klassifikation: Pathogen → Benigne (5 Klassen). VUS = unbekannte Signifikanz — klinisch nicht handlungsweisend ohne weitere Evidenz.

---

## Nanopore in der Klinik — Ausbruchsdiagnostik und Direktsequenzierung

Das Oxford Nanopore MinION-Gerät (USB-Stick-Format) hat die Point-of-Care-Sequenzierung ermöglicht. Während der COVID-19-Pandemie wurde es für das ARTIC-Protokoll genutzt: SARS-CoV-2-Genome wurden innerhalb von 6–8 Stunden sequenziert, um neue Varianten (Alpha, Delta, Omikron) frühzeitig zu identifizieren. In Ländern mit eingeschränkter Laborinfrastruktur wird MinION für Ebola-Ausbruchsdiagnostik eingesetzt. Die langen Reads der Nanopore-Technologie erlauben zudem die direkte Phasierung (Haplotyping) von Heterozygoten und die Charakterisierung struktureller Varianten, die mit Short-Read-NGS schwer zu erfassen sind.

> **Merke:** Nanopore: lange Reads (>10 kb), portabel (MinION), Echtzeit, hohe Fehlerrate. Gut für Strukturvarianten, Methylierungsanalyse, Ausbruchsdiagnostik.

---

## Sanger-Prinzip im Detail — ddNTPs und Kapillarelektrophorese

Die Sanger-Methode (auch Kettenabbruchmethode oder Didesoxymethode) beruht auf dem kontrollierten Einbau von Didesoxynukleotiden (ddNTPs) während der DNA-Synthese. ddNTPs fehlt die 3'-OH-Gruppe, die für die Bildung der nächsten Phosphodiesterbindung nötig ist — sobald ein ddNTP eingebaut wird, bricht die Kettenverlängerung ab. In der Reaktion werden normale dNTPs und geringe Mengen fluoreszenzmarkierter ddNTPs (je eine Farbe für A, T, G, C) gemischt. Statistisch bricht die Synthese an jeder Position einmal ab, sodass ein Gemisch von Fragmenten unterschiedlicher Länge entsteht. Die Kapillarelektrophorese trennt diese Fragmente nach Größe auf (Einzelnukleotid-Auflösung), und ein Laserdetektor liest die Fluoreszenzfarbe am Ende jedes Fragments ab. Die resultierende Sequenz wird als Elektropherogramm (Chromatogramm) dargestellt, mit Peaks in vier Farben. Heterozygote Mutationen zeigen sich als überlappende Peaks an einer Position. Die Leselänge beträgt 500-1.000 bp pro Reaktion mit einer Fehlerrate unter 0,01%, was die Sanger-Sequenzierung zum Goldstandard für die Bestätigung einzelner Varianten macht.

> **Merke:** Sanger-Prinzip: ddNTPs (kein 3'-OH) → statistischer Kettenabbruch → Fragmente aller Längen → Kapillarelektrophorese → Fluoreszenz-Detektion → Sequenz. Goldstandard für Einzelvarianten-Bestätigung.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Sanger-Sequenzierung (ddNTPs führen zu Kettenabbruch, Fragmentlänge = Position), Didesoxymethode, Kapillarelektrophorese, Leserichtung 5'→3'.

**Ergänzend vertiefend:** Next-Generation Sequencing; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Sanger-Prinzip mit ddNTPs und Kettenabbruch erklären
- Sanger vs. NGS in Bezug auf Durchsatz und Anwendung vergleichen
- Klinische Indikationen für Exomsequenzierung nennen

**Typische Prüfungsfallen / Verwechslungen:**
- ddNTPs (kein 3'-OH → Kettenabbruch) vs. dNTPs (normale Verlängerung)
- Sanger (1 Gen, hohe Genauigkeit) vs. NGS (viele Gene parallel, Bioinformatik nötig)
- Nanopore (lange Reads, portabel, höhere Fehlerrate) vs. Illumina (Short Reads, niedrige Fehlerrate)
- VUS = Variante unklarer Signifikanz, weder pathogen noch benigne
- SNV (Einzelbase) vs. Indel (Insertion/Deletion) vs. CNV (Kopienzahlvariation)

**Prüfungsrelevante Zahlen/Fakten:**
- Sanger: Reads 500-1.000 bp, Genauigkeit >99,99%
- NGS Illumina: Short Reads 150-300 bp, massiv parallel
- Nanopore: Reads bis 2 Mb, Fehlerrate ca. 5%
- Exom = ca. 1,5% des Genoms, enthält ca. 85% der krankheitsverursachenden Mutationen
- Human Genome Project: 3 Mrd. USD, 13 Jahre; heute: Genom in 24 h für ca. 300 EUR

---

## Zusammenfassung (ultrakompakt)

- **Sanger-Sequenzierung**: ddNTPs als Kettenabbrecher → Fragmente verschiedener Länge → Kapillarelektrophorese → Sequenz; Goldstandard für einzelne Gene
- **Next-Generation Sequencing (NGS)**: massiv parallel → Millionen Fragmente gleichzeitig; Illumina = häufigste Plattform
- **Exomsequenzierung**: alle kodierenden Regionen (~1% des Genoms) → Diagnoseausbeute ~25-40% bei unklaren Syndromen
- **Nanopore-Sequenzierung**: sehr lange Reads (>1 Mb), portabel; für Ausbruchsdiagnostik und Chromosomenstruktur
- **ACMG-Klassifikation**: 5 Kategorien (pathogen, wahrscheinlich pathogen, VUS, wahrscheinlich benigne, benigne)
- **VUS** (Variant of Uncertain Significance): häufige Herausforderung in der genetischen Beratung`,

      lernziele: [
        "Das Sanger-Verfahren mit der Funktion von ddNTPs als Kettenabbrecher und der Kapillarelektrophorese erklären",
        "Den NGS-Ablauf (Illumina SBS) von der Library Preparation bis zum Variant Calling in Grundzügen darstellen",
        "Die Nanopore-Sequenzierung vom NGS in Bezug auf Read-Länge, Fehlerrate und Portabilität abgrenzen",
        "Klinische Indikationen für Exomsequenzierung, Tumor-NGS und Pharmakogenomik nennen",
        "Den Unterschied zwischen SNV, Indel und CNV als Variationstypen erläutern",
      ],

      sections: [],
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
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK bio-7-03: Gel-Elektrophorese und Blot-Techniken
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "bio-7-03",
      title: "Gel-Elektrophorese, Restriktionsenzyme und Blot-Techniken",
      stichworte: [
        "Gel-Elektrophorese",
        "Restriktionsenzyme",
        "Southern Blot",
        "Western Blot",
        "Microarray",
        "Bioinformatik",
      ],
      content: `## Einleitung

Gel-Elektrophorese, Restriktionsenzyme und Blot-Techniken gehören zu den klassischen Methoden der Molekularbiologie, die trotz modernerer Alternativen nach wie vor prüfungsrelevant sind. Die Agarosegel-Elektrophorese trennt DNA-Fragmente nach Größe, Restriktionsenzyme schneiden DNA an spezifischen palindromischen Sequenzen, und die drei Blot-Verfahren (Southern, Northern, Western) detektieren DNA, RNA bzw. Protein. Im MedAT wird besonders die Zuordnung der Blot-Verfahren zu ihren Zielmolekülen sowie das Prinzip des HIV-Western-Blots geprüft.

**Das Wichtigste auf einen Blick:**
- DNA wandert zur Anode (+), kleine Fragmente schneller als große
- Restriktionsenzyme Typ II: palindromische Sequenzen, sticky/blunt ends
- Southern = DNA, Northern = RNA, Western = Protein (S→N→W = Zentraldogma)
- SDS-PAGE: Proteintrennung nur nach Größe (kDa)
- HIV-Western-Blot: Bestätigungstest, positiv bei ≥2 Banden (gp120/gp41/p24)

---

## Restriktionsenzyme und ihre Erkennungssequenzen

Restriktionsendonukleasen sind nach Typ I, II und III klassifiziert — für die Molekularbiologie sind **Typ-II-Enzyme** von Bedeutung (schneiden innerhalb oder nahe der Erkennungssequenz, definierte Fragmente). Bekannte Beispiele: EcoRI (aus E. coli, erkennt GAATTC, 4-nt-5'-Überhang), HindIII (AAGCTT, 4-nt-5'-Überhang), BamHI (GGATCC, 4-nt-5'-Überhang), NotI (GCGGCCGC, 8-bp-Erkennungssequenz, schneidet selten → für große Fragmente). Statistische Häufigkeit einer 4-bp-Sequenz: 1/4⁴ = 1/256 bp; 6-bp: 1/4096 bp; 8-bp: 1/65.536 bp. Sticky ends erleichtern die gerichtete Klonierung: kompatible Überhänge hybridisieren spontan und werden durch DNA-Ligase kovalent verknüpft.

> **Merke:** EcoRI: GAATTC (palindromisch) → 5'-AATT-Überhänge (sticky ends). Je länger die Erkennungssequenz, desto seltener der Schnitt.

---

## SDS-PAGE und Western Blot — Proteingrößenbestimmung

SDS (Natriumdodecylsulfat) ist ein Detergenz, das Proteine denaturiert und proportional zur Polypeptidlänge negative Ladungen aufbringt (~1,4 g SDS/g Protein). Im Polyacrylamidgel wandern alle Proteine als negativ geladene "Stäbchen" zur Anode — die Migrationsgeschwindigkeit hängt nur vom Molekulargewicht ab. Der Molekulargewichtsmarker (Protein-Ladder) enthält Proteine bekannter Größe (z. B. 10, 15, 20, 25, 37, 50, 75, 100, 150, 250 kDa). Klinisch relevant: Bande des HIV-Hüllproteins gp120 bei ~120 kDa, Kapsidprotein p24 bei ~24 kDa. Im Western Blot werden diese Banden durch Antikörper visualisiert.

> **Merke:** SDS-PAGE trennt Proteine nur nach Größe (kDa). Western Blot = SDS-PAGE + Transfer + Antikörperdetektion.

---

## Southern/Northern/Western — Merkhilfe und Unterschiede

Die drei klassischen Blot-Verfahren unterscheiden sich in der Zielmolekülebene: Southern Blot detektiert spezifische DNA-Sequenzen mittels markierter DNA/RNA-Sonde nach Restriktionsverdau und Gelelektrophorese. Northern Blot detektiert RNA (typischerweise mRNA) unter denaturierenden Bedingungen — liefert Aussage über Transkriptgröße und -menge. Western Blot detektiert Proteine über spezifische Antikörper nach SDS-PAGE. Merkhilfe: S→N→W (Süd→Nord→West) entspricht DNA→RNA→Protein, also dem Informationsfluss des Zentraldogmas. In modernen Labors wurden alle drei weitgehend durch PCR-basierte Methoden (für DNA/RNA) und ELISA/Proteomik (für Proteine) ersetzt — sie sind aber für das Verständnis klassischer Diagnostik und Prüfungsfragen weiterhin prüfungsrelevant.

> **Merke:** S=DNA (Sonde), N=RNA, W=Protein (Antikörper). Merkhilfe: Süd-Nord-West = DNA-RNA-Protein = Zentraldogma.

| Blot | Zielmolekül | Sonde/Detektion | Gel | Klinisches Beispiel |
| --- | --- | --- | --- | --- |
| Southern | DNA | Markierte DNA/RNA-Sonde | Agarose | Genotypisierung |
| Northern | RNA (mRNA) | Markierte Sonde | Denaturierend | Genexpressionsanalyse |
| Western | Protein | Antikörper (1° + 2°) | SDS-PAGE | HIV-Bestätigung |

---

## Klinischer Bezug

HIV-Western-Blot war jahrzehntelang Goldstandard zur Bestätigung positiver HIV-ELISA-Befunde; heute teils durch Differenzierungsimmunoassays ersetzt.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Gelelektrophorese (DNA negativ geladen → wandert zur Anode), Trennprinzip (Größe, kleine Fragmente schneller), Agarose-Gel, Ladder, Anwendung (PCR-Produkte, Restriktion).

**Ergänzend vertiefend:** Pulsfeld-Gelelektrophorese; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Wanderungsrichtung der DNA im Gel und Trennprinzip erklären
- Southern, Northern und Western Blot den Zielmolekülen zuordnen
- HIV-Western-Blot als Bestätigungstest interpretieren

**Typische Prüfungsfallen / Verwechslungen:**
- Southern (DNA) vs. Northern (RNA) vs. Western (Protein) — Merkhilfe: S→N→W = Zentraldogma
- Sticky ends (Überhänge, gerichtete Klonierung) vs. Blunt ends (keine Überhänge, ineffizienter)
- SDS-PAGE trennt nur nach Größe (SDS maskiert Eigenladung) — native PAGE trennt auch nach Ladung
- Ethidiumbromid (DNA-Farbstoff, mutagen) vs. Coomassie/Silberfärbung (Proteinfärbung)
- 4-bp-Erkennungssequenz (schneidet häufig, alle 256 bp) vs. 8-bp (schneidet selten, alle 65.536 bp)

**Prüfungsrelevante Zahlen/Fakten:**
- EcoRI: GAATTC (6 bp), schneidet statistisch alle 4.096 bp
- HIV-Western-Blot: positiv bei ≥2 Banden (gp120, gp41, p24)
- SDS: ca. 1,4 g SDS pro g Protein → gleichmäßig negative Ladung
- Häufigkeit 4-bp-Sequenz: 1/4⁴ = 1/256 bp; 6-bp: 1/4.096 bp; 8-bp: 1/65.536 bp
- Western Blot: heute teils durch ELISA und Proteomik-Methoden ersetzt

---

## Zusammenfassung (ultrakompakt)

- **Agarosegel-Elektrophorese**: DNA negativ geladen → wandert zur Anode; kleine Fragmente schneller → Größentrennung
- **Restriktionsenzyme (Typ II)**: erkennen palindromische Sequenzen (z. B. EcoRI: GAATTC); sticky ends (Überhänge) oder blunt ends
- Blot-Verfahren merken: **So-No-We** (Southern=DNA; Northern=RNA; Western=Protein)
- **Southern Blot**: DNA → markierte Sonde → Genotypisierung, RFLP-Analyse
- **Northern Blot**: RNA → Genexpressionsanalyse (welche mRNA wird exprimiert?)
- **Western Blot**: Protein → SDS-PAGE → Antikörperdetektion; HIV-Bestätigungstest
- **DNA-Microarray** (Chip): Hybridisierung von markierter cDNA/cRNA → gleichzeitige Analyse tausender Gene → Genexpressionsprofil`,

      lernziele: [
        "Das Prinzip der Agarosegel-Elektrophorese mit Wanderungsrichtung und Größentrennung erklären",
        "Restriktionsenzyme, palindromische Erkennungssequenzen und sticky/blunt ends beschreiben",
        "Southern, Northern und Western Blot in Bezug auf Zielmolekül und Ablauf unterscheiden",
        "Den HIV-Western-Blot als klinischen Bestätigungstest einordnen und interpretieren",
        "RFLP als genetischen Marker und seine frühere diagnostische Bedeutung erläutern",
      ],

      sections: [],

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
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK bio-7-04: Genetischer Fingerabdruck und DNA-Analyse
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "bio-7-04",
      title: "Genetischer Fingerabdruck und DNA-Analyse",
      stichworte: [
        "STR-Analyse",
        "RFLP",
        "Forensik",
        "Vaterschaftstest",
        "Genetischer Fingerabdruck",
        "DNA-Profil",
      ],
      content: `## Einleitung

Der genetische Fingerabdruck ermöglicht die eindeutige Identifizierung von Individuen anhand hochvariabler repetitiver DNA-Sequenzen (STR, Short Tandem Repeats) und ist das Standardverfahren in Forensik und Vaterschaftstests. Die Kombination von 20 STR-Loci erzeugt ein statistisch einzigartiges DNA-Profil mit einer Übereinstimmungswahrscheinlichkeit von etwa 1:10²⁶. Im MedAT sind das Prinzip der STR-Analyse, der Vaterschaftstest und die Besonderheiten der mtDNA-Analyse prüfungsrelevant.

**Das Wichtigste auf einen Blick:**
- STR: 2-6 bp Wiederholungseinheiten, hochpolymorph zwischen Individuen
- 20 CODIS-Loci → Random Match Probability ca. 1:10²⁶
- Vaterschaftstest: alle Allele des Kindes müssen von den Eltern stammen
- mtDNA: maternal vererbt, hohe Kopienzahl, gut für degradierte Proben
- Polymerase-Slippage erklärt die hohe Mutationsrate von STRs

---

## STR-Polymorphismus — Warum sind Menschen verschieden?

Die hohe Variabilität von STR-Loci entsteht durch einen Mechanismus namens **Replication Slippage (Polymerase-Slippage)**: Während der DNA-Replikation kann die Polymerase bei repetitiven Sequenzen "ausrutschen" — der neusynthetisierte Strang bildet eine Haarnadelschleife, und beim Weitersyntetisieren entstehen mehr oder weniger Wiederholungen als im Elternstrang. Dies erklärt die hohe Mutationsrate von STRs (~0,1–0,2%/Generation/Locus). Ein Mensch mit 17 CA-Wiederholungen an Locus D3S1358 hat dort das Allel "17"; ein anderer mit 20 Wiederholungen hat "Allel 20". Die Kombination aus 20 Loci ergibt ein statistisch einzigartiges Profil. VNTR (Variable Number of Tandem Repeats, 10–100 bp) sind größer als STRs und wurden bei der ursprünglichen Alec-Jeffreys-Methode (1984) verwendet — heute durch STRs ersetzt.

> **Merke:** STR: 2–6 bp-Wiederholungen, hochpolymorph. Polymerase-Slippage erklärt variable Wiederholungszahl. 20 CODIS-Loci → Profil einzigartig in 10²⁶.

---

## Spurenanalyse — Degradierte DNA und Low-Copy-Number-PCR

In der forensischen Praxis ist die Qualität der DNA-Spur oft limitierend. Degradierte DNA (durch UV, Feuchtigkeit, Bakterien hydrolysiert) liefert nur kurze Fragmente → ein vollständiges STR-Profil kann nicht erstellt werden (Dropout von Allelen → falsch-homozygotes Ergebnis). Lösungen: (1) **Miniaturisierte STR-Kits (mini-STRs):** Primer so nahe an den STR-Kern gesetzt, dass Amplifikate <100 bp sind — funktioniert bei degradierter DNA; (2) **Low-Copy-Number PCR (LCN):** Mehr PCR-Zyklen (34 statt 28) für Spuren mit <100 pg DNA — erhöht die Kontaminationsgefahr erheblich; (3) **SNP-Analyse:** Als Ergänzung bei sehr degradierter DNA. Bei Mischspuren (mehrere Personen) ist die Interpretation komplex — bioinformatische Deconvolution-Software wird eingesetzt.

> **Merke:** Degradierte DNA → Allel-Dropout möglich. Mini-STR-Kits und erhöhte PCR-Zyklen (LCN) helfen — aber höhere Kontaminationsgefahr.

---

## Chimärismus nach Stammzelltransplantation

Nach allogener Stammzelltransplantation (SZT) koexistieren Spender- und Empfänger-hämatopoetische Zellen im Blut des Patienten — ein Zustand des **Chimärismus**. STR-Analyse des Bluts erlaubt die Quantifizierung: Vollchimärismus (100% Spender-DNA) vs. gemischter Chimärismus (beide Donor-Allele + Patient-Allele). Bei gemischtem Chimärismus besteht das Risiko eines Rückfalls der hämatologischen Erkrankung — der Anstieg des Empfänger-Anteils ist ein frühes Warnsignal für Relapse. Technik: STR-PCR mit Fluoreszenzmarkierung, Kapillarelektrophorese → quantitative Auswertung der Allel-Peak-Flächen (Spender-Anteil in %).

> **Merke:** Post-SZT-Chimärismus-Monitoring: STR-Analyse misst Spender-Anteil in %. Zunehmender Empfänger-Anteil → Relapse-Warnsignal.

---

## Klinischer Bezug

Genetischer Fingerabdruck per STR-Analyse ist Standard in Forensik, Vaterschaftstests und post-SZT-Chimärismus-Monitoring.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** STR (Short Tandem Repeats), forensische DNA-Analyse (Extraktion → PCR [STR-Loci] → Gelelektrophorese → Profil), Vaterschafts-/Tatortgutachten.

**Ergänzend vertiefend:** CODIS; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- STR-Analyse-Ablauf in Schritten erklären (Extraktion → PCR → Elektrophorese → Profil)
- Warum sind STRs als forensische Marker geeignet?
- Vaterschaftstest: Ausschlussprinzip erklären

**Typische Prüfungsfallen / Verwechslungen:**
- STR (2-6 bp, modern, PCR-basiert) vs. VNTR (10-100 bp, historisch, Jeffreys 1984)
- mtDNA (maternal, keine individuelle ID) vs. STR (biparental, individuell eindeutig)
- Allel-Dropout bei degradierter DNA (scheinbare Homozygotie) vs. echte Homozygotie
- Random Match Probability (statistische Einzigartigkeit) vs. Identität (biologische Gewissheit)
- Chimärismus (Spender + Empfänger nach SZT) vs. Mosaik (verschiedene Zelllinien im selben Individuum)

**Y-STRs und X-STRs in der forensischen Genetik:**
Neben autosomalen STRs werden auch geschlechtschromosomale Marker eingesetzt. Y-STRs (z. B. DYS391, DYS19) werden paternal vererbt ohne Rekombination und ermöglichen die Zuordnung zu einer väterlichen Linie — besonders nützlich bei Mischspuren mit männlicher und weiblicher DNA, da nur männliche DNA amplifiziert wird. X-STRs ergänzen die Analyse bei komplexen Verwandtschaftsfragen, etwa bei Halbgeschwister-Identifikation. Amelogenin (AMEL-X/Y-Längenunterschied) dient der Geschlechtsbestimmung in jedem forensischen STR-Kit.

> **Merke:** Y-STRs: paternal vererbt, keine Rekombination, ideal für männliche Mischspuren. Amelogenin: Geschlechtsbestimmung (AMEL-X kürzer als AMEL-Y).

**Prüfungsrelevante Zahlen/Fakten:**
- CODIS: 20 STR-Kernloci, Random Match Probability ca. 1:10²⁶
- Vaterschaftstest: Paternity Index >99,9% bei Übereinstimmung
- mtDNA: 100-1.000 Kopien pro Zelle vs. 2 Kopien nukleäre DNA
- STR-Mutationsrate: ca. 0,1-0,2% pro Locus pro Generation
- Alec Jeffreys (1984): Erfinder des DNA-Fingerprints (VNTR-basiert)

---

## Zusammenfassung (ultrakompakt)

- **Genetischer Fingerabdruck**: basiert auf **STRs** (Short Tandem Repeats); Anzahl der 2–6 bp Wiederholungen variiert zwischen Individuen
- Analyse: Multiplex-PCR mit fluoreszenzmarkierten Primern → Kapillarelektrophorese → Allel-Profil an 20 Loci → statistisch einzigartig
- Vaterschaftstest: alle Allele des Kindes müssen von Mutter ODER Vater ableitbar sein; fehlendes väterliches Allel = Ausschluss
- **mtDNA-Analyse**: bei degradiertem Material (Mitochondrien 100× höhere Kopienzahl); maternal vererbt → keine individuelle Identifikation (alle mütterlichen Verwandten identisch)
- Klinisch: STR-Analyse für Chimärismus-Monitoring nach Stammzelltransplantation → steigender Empfänger-Anteil = Rezidiv-Warnsignal`,

      lernziele: [
        "STR (Short Tandem Repeats) als Grundlage des genetischen Fingerabdrucks definieren und die Analyse in Schritten erklären",
        "Das CODIS-System und die statistische Aussagekraft des DNA-Profils (Random Match Probability) einordnen",
        "Den Vaterschaftstest auf Basis der STR-Analyse und das Prinzip des Ausschlusses erläutern",
        "Die forensischen Vorteile der mtDNA-Analyse (hohe Kopienzahl, maternale Vererbung) im Vergleich zur STR-Analyse darstellen",
        "Drei klinische/forensische Anwendungen der DNA-Analyse nennen",
      ],

      sections: [],

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
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK bio-7-05: Gentechnik — Klonierung und Vektoren
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "bio-7-05",
      title: "Gentechnik — Klonierung, Vektoren und rekombinante Proteine",
      stichworte: [
        "GVO",
        "Restriktionsenzyme",
        "Vektoren",
        "Plasmide",
        "Transformation",
        "Rekombinante Proteine",
      ],
      content: `## Einleitung

Die molekulare Klonierung ermöglicht die Einbringung und Vermehrung spezifischer DNA-Fragmente in Wirtsorganismen wie E. coli mithilfe von Vektoren (Plasmide, BAC, YAC). Rekombinante Proteine wie Insulin, EPO und monoklonale Antikörper sind das Ergebnis dieser Technologie und bilden die Grundlage moderner Biopharmazeutika. Im MedAT sind die Klonierungsschritte, die Blau-Weiß-Selektion und die Unterscheidung der Vektortypen nach Insertkapazität prüfungsrelevant.

**Das Wichtigste auf einen Blick:**
- Klonierungsschritte: Restriktionsverdau → Ligation → Transformation → Selektion → Screening
- Blau-Weiß-Selektion: weiß = Insert (lacZ unterbrochen), blau = kein Insert
- Vektorkapazität: Plasmid ~15 kb, BAC ~300 kb, YAC bis 2 Mb
- cDNA-Bibliothek (nur Exons) vs. genomische Bibliothek (gesamtes Genom inkl. Introns)
- Rekombinantes Insulin seit 1982 (erstes gentechnisch hergestelltes Medikament)

---

## Blau-Weiß-Selektion — Elegante Identifikation rekombinanter Klone

Das pUC-Plasmid-System (und viele moderne Klonierungsvektoren) nutzt das lacZ-α-Komplementationssystem. Das Plasmid trägt ein α-Fragment des lacZ-Gens (β-Galaktosidase). Die Multiple Cloning Site (MCS) liegt mitten im lacZ-α-Fragment. Wenn ein Insert kloniert wird, unterbricht es das Leseraster → kein funktionelles α-Fragment → keine β-Galaktosidase → keine Spaltung des farblosen Substrats X-Gal (5-Bromo-4-Chloro-3-Indolyl-β-D-Galactopyranoside) → weiße Kolonie. Kein Insert (Plasmid religation): lacZ-α intakt → β-Galaktosidase aktiv → X-Gal wird zu blauem Indolderivat gespalten → blaue Kolonie. Fazit: Weiß = potenziell rekombinant (muss durch PCR/Sequenzierung bestätigt werden). Die Platten enthalten IPTG (Induktor von lacZ-Transkription) + X-Gal + Ampicillin.

> **Merke:** Blau-Weiß: Blau = kein Insert (lacZ intakt), Weiß = Insert vorhanden (lacZ unterbrochen). IPTG + X-Gal + Ampicillin auf Platte.

---

## Kompetente Zellen und Transformationseffizienz

Nicht alle E.-coli-Zellen nehmen Plasmide auf — sie müssen zunächst "kompetent" gemacht werden. Chemische Kompetenz: CaCl₂-Behandlung in der Kälte verändert die Membranstruktur; ein kurzer Hitzeschock (42 °C, 45–90 s) öffnet transiente Poren → Plasmid tritt ein. Typische Transformationseffizienz: 10⁵–10⁸ cfu/µg Plasmid-DNA. Elektroporation (2,5 kV, 25 µF) ist effizienter (~10⁸–10¹⁰ cfu/µg) — wichtig für große Plasmide oder schwierig zu transformierende Stämme. Nach der Transformation werden Zellen in flüssigem Medium 1 h bei 37 °C inkubiert (Recovery) — das Ampicillin-Resistenzgen muss exprimiert werden, bevor Ampicillin-Platten verwendet werden.

> **Merke:** Kompetenz: CaCl₂ + Hitzeschock (chem.) oder Elektroporation. Recovery-Schritt vor Selektion wichtig.

---

## Rekombinante Antikörper — Von der Hybridomtechnologie zum Display

Monoklonale Antikörper (mAbs) werden heute überwiegend gentechnisch hergestellt. Traditionell: Hybridom-Technologie (Köhler & Milstein 1975, Nobelpreis 1984) — Fusion immunisierter Maus-B-Zellen mit Myelomzellen → immortale Hybridome. Heute: Phagen-Display und Hefe-Display erlauben vollständig humane mAbs ohne Immunisierung — Antikörper-Gene werden aus einer Bibliothek selektiert. Rekombinante Antikörperformate: vollständiger IgG (150 kDa) für therapeutische mAbs (z. B. Trastuzumab/Herceptin gegen HER2+), scFv (25 kDa, single chain variable fragment) für diagnostische Anwendungen, BiTE (bispezifische T-Zell-Engager, z. B. Blinatumomab für ALL). Produktion: CHO-Zellen (Chinese Hamster Ovary) für komplexe Glykosylierung, E. coli für nicht-glykosylierte Fragmente.

> **Merke:** mAbs: Hybridom (Maus) → chimäre/humanisierte → vollhumane (Phagen-Display). CHO-Zellen für glykosylierte Therapeutika.

---

## Vektoren — Übersicht

Klonierungsvektoren unterscheiden sich in ihrer Kapazität (maximale Insertgröße), dem Wirtsorganismus und besonderen Eigenschaften. Die Wahl des Vektors richtet sich nach der Größe des zu klonierenden DNA-Fragments.

| Vektor | Kapazität | Wirt | Besonderheit |
| --- | --- | --- | --- |
| Plasmid | ~15 kb | E. coli | Standard-Klonierung, einfach |
| Phage λ | 20–25 kb | E. coli | Phagen-Infektion, hohe Effizienz |
| Cosmid | 40–50 kb | E. coli | Phagen-Hülle + Plasmid-Replikation |
| BAC (Bacterial Artificial Chromosome) | 100–300 kb | E. coli | Für große genomische Fragmente |
| YAC (Yeast Artificial Chromosome) | 200–2.000 kb | Hefe | Für sehr große Inserts (Chromosomensegmente) |
| Expressionsvektor | variabel | E. coli/Hefe/CHO | Promotor, RBS, Tags für Proteinproduktion |


---

## Klinischer Bezug

Rekombinante Proteine (Insulin, EPO, Wachstumshormon, monoklonale Antikörper) sind Grundlage moderner Pharmakotherapie seit den 1980ern.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Klonierung (Vektor, Restriktion, Ligation, Transformation, Selektion), Plasmid, Restriktionsenzyme, Ligase, Anwendung (rekombinante Proteine, Gentherapie).

**Ergänzend vertiefend:** Expression; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Klonierungsschritte in richtiger Reihenfolge beschreiben
- Blau-Weiß-Selektion: Was bedeuten weiße vs. blaue Kolonien?
- cDNA-Bibliothek vs. genomische Bibliothek unterscheiden

**Typische Prüfungsfallen / Verwechslungen:**
- Weiß = Insert vorhanden (lacZ unterbrochen) vs. Blau = kein Insert (lacZ intakt) — oft verwechselt
- cDNA (nur Exons, aus mRNA) vs. genomische DNA (Exons + Introns)
- Transformation (DNA-Aufnahme in Bakterien) vs. Transfektion (DNA-Aufnahme in eukaryotische Zellen)
- Plasmid (~15 kb, Standard) vs. BAC (bis 300 kb) vs. YAC (bis 2 Mb) — Kapazität steigend
- CaCl₂-Hitzeschock (chemische Kompetenz) vs. Elektroporation (elektrische Kompetenz)

**Prüfungsrelevante Zahlen/Fakten:**
- Rekombinantes Insulin: seit 1982 zugelassen (Humulin, E. coli/Hefe)
- Hybridomtechnologie: Köhler & Milstein 1975, Nobelpreis 1984
- His-Tag (6× His): Aufreinigung über Ni²⁺-Affinitätschromatographie
- CHO-Zellen: Standardproduktionssystem für glykosylierte therapeutische Antikörper
- Transformationseffizienz: chemisch 10⁵-10⁸, Elektroporation 10⁸-10¹⁰ cfu/µg

---

## Zusammenfassung (ultrakompakt)

- **Klonierungsschritte**: Restriktionsverdau (Insert + Vektor mit gleichem Enzym) → Ligation (T4-Ligase) → Transformation (kompetente Bakterien) → Selektion
- **Blau-Weiß-Selektion**: weiße Kolonien = rekombinante Plasmide (Insert unterbricht lacZ-Gen)
- Vektoren nach Insertgröße: Plasmid (<15 kb), Cosmid (~45 kb), BAC (<300 kb), YAC (<2 Mb)
- **Rekombinante Proteine**: cDNA (nicht genomische DNA!) → Prokaryoten können Introns nicht spleißen; Insulin seit 1982 in E. coli
- **Monoklonale Antikörper**: Hybridomtechnologie (Maus) oder Phagen-Display (humanisiert); produziert in CHO-Zellen
- Anwendungen: Insulin, Erythropoietin, Impfstoffe (HBsAg in Hefe), Antikörpertherapeutika (Trastuzumab, Rituximab)`,

      lernziele: [
        "Die Klonierungsschritte (Restriktionsverdau, Ligation, Transformation, Selektion) in der richtigen Reihenfolge und mit molekularen Details beschreiben",
        "Das Prinzip der Blau-Weiß-Selektion erklären und wissen, was weiße vs. blaue Kolonien bedeuten",
        "Plasmide, Phagen-Vektoren, BAC und YAC in Bezug auf Kapazität und Anwendung unterscheiden",
        "Mindestens drei rekombinante Proteine (Insulin, EPO, monoklonale AK) und ihre medizinische Bedeutung nennen",
        "Den Unterschied zwischen genomischer Bibliothek und cDNA-Bibliothek erläutern",
      ],

      sections: [],
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
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK bio-7-06: Genomeditierung — CRISPR-Cas9 und GVO
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "bio-7-06",
      title: "Genomeditierung — CRISPR-Cas9, Gentherapie und GVO",
      stichworte: [
        "CRISPR-Cas9",
        "Reproduktives Klonen",
        "Therapeutisches Klonen",
        "Dolly",
        "Gentherapie",
        "Ethik",
      ],
      content: `## Einleitung

CRISPR-Cas9 ist das revolutionärste Werkzeug der Genomeditierung und ermöglicht präzise, gezielte Veränderungen im Genom mithilfe einer kurzen Guide-RNA und der Endonuklease Cas9. Die Technologie stammt aus dem bakteriellen Immunsystem und wurde von Doudna und Charpentier weiterentwickelt (Nobelpreis 2020). Im MedAT ist das Grundprinzip von CRISPR (sgRNA, PAM, Doppelstrangbruch), die Unterscheidung der Reparaturwege NHEJ vs. HDR sowie die ethische Diskussion um Keimbahn-Editierung prüfungsrelevant.

**Das Wichtigste auf einen Blick:**
- CRISPR-Cas9: sgRNA (20 nt) führt Cas9 zur Zielsequenz, PAM (NGG) nötig
- NHEJ: fehleranfällig → Genknockout; HDR: präzise Korrektur mit Template
- Casgevy (Exa-cel): erste zugelassene CRISPR-Therapie (FDA Dez. 2023, Sichelzellanämie)
- Ex-vivo (Zellen entnehmen, editieren, reinfundieren) vs. In-vivo (Vektor direkt in Patient)
- Keimbahn-Editierung: international weitgehend verboten (He Jiankui-Skandal 2018)

---

## CRISPR-Cas9 vs. klassische Genomeditierungswerkzeuge

Vor CRISPR-Cas9 gab es zwei Hauptwerkzeuge für gezielte Genomschnitte: **Zinkfinger-Nukleasen (ZFNs)** und **TALENs (Transcription Activator-Like Effector Nucleases)**. Beide erfordern für jede neue Zielsequenz die aufwendige Proteintechnik — neue Zinkfinger- oder TALE-Domänen müssen maßgeschneidert kloniert werden (Wochen bis Monate). CRISPR-Cas9 revolutionierte dies: Die Spezifität wird allein durch die 20-nt-sgRNA-Sequenz kodiert — eine neue Zielsequenz erfordert lediglich die Synthese einer neuen sgRNA (Tage, Kosten ~200 €). Dieses "Plug-and-play"-Prinzip macht CRISPR extrem zugänglich. Einschränkungen: SpCas9 benötigt das PAM-Motiv NGG — für Targets ohne passendes PAM wurden alternative Cas-Proteine (Cas12a/Cpf1 mit TTTV-PAM, SaCas9 mit NNGRRT-PAM) entwickelt.

> **Merke:** CRISPR: neue Zielsequenz → neue sgRNA (Tage). ZFN/TALEN: neue Zielsequenz → neues Protein (Wochen). Cas9 braucht PAM (NGG für SpCas9).

---

## Casgevy — Erste CRISPR-Therapie in der klinischen Praxis

Casgevy (Exa-cel, früher CTX001) ist die erste behördlich zugelassene CRISPR-Therapie (FDA: Dezember 2023; EMA: Februar 2024) für Sichelzellanämie und transfusionsabhängige β-Thalassämie. Prinzip: Hämatopoetische Stammzellen (HSCs) des Patienten werden entnommen. Ex vivo wird per CRISPR-Cas9 der Transkriptionsrepressor **BCL11A** im Erythrozyten-Enhancer gezielt ausgeknockt. BCL11A unterdrückt normalerweise das fetale Hämoglobin-Gen (HBG1/2) nach der Geburt. Knockout → HbF-Reaktivierung → fetales Hämoglobin (γ-Ketten) ersetzt die defekten β-Ketten → keine Sichelung. Klinische Daten: >97% der behandelten Patienten schmerzfrei nach 1 Jahr; bei β-Thalassämie >90% transfusionsfrei. Preis: ca. 2,2 Millionen USD pro Behandlung.

> **Merke:** Casgevy (Exa-cel): CRISPR-Knockout von BCL11A in HSCs → HbF-Reaktivierung → Sichelzellanämie geheilt. FDA-Zulassung Dez. 2023.

---

## Lipid-Nanopartikel und mRNA-Therapie — jenseits von COVID-Impfstoffen

Lipid-Nanopartikel (LNPs) wurden durch COVID-19-mRNA-Impfstoffe (BNT162b2, mRNA-1273) bekannt, sind aber die Basis einer breiteren Therapeutikklasse. LNPs kapseln mRNA oder siRNA ein, schützen vor Nuklease-Abbau und ermöglichen zelluläre Aufnahme (Endozytose) und Freisetzung ins Zytoplasma. Alnylam Pharmaceuticals entwickelte **Onpattro (Patisiran)**: siRNA in LNPs gegen Transthyretin-mRNA bei hereditärer Transthyretin-Amyloidose (hATTR) — erste klinisch zugelassene siRNA-Therapie (2018). In der Gentherapie werden LNPs für mRNA-basierte CRISPR-Cas9-Delivery entwickelt: transiente Expression ohne genomische Integration des Cas9-Gens (geringeres Off-Target-Risiko). Leber ist bevorzugtes Zielorgan (hohe LNP-Akkumulation durch ApoE-vermittelte Aufnahme über LDL-Rezeptoren).

> **Merke:** LNPs: kapseln mRNA/siRNA, schützen vor Abbau, ermöglichen zelluläre Aufnahme. Onpattro = erste siRNA-Therapie (hATTR, 2018).

---

## Klinischer Bezug

Casgevy ist die erste CRISPR-basierte Therapie (FDA Dez. 2023); AAV-Gentherapien (Zolgensma, Luxturna) revolutionieren seltene Erbkrankheiten.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** CRISPR-Cas9 (sgRNA führt Cas9 zur Ziel-DNA, PAM-Sequenz nötig, Doppelstrangbruch DSB), gezielte Genomeditierung, NHEJ vs. HDR, Anwendung (Gentherapie, Forschung).

**Ergänzend vertiefend:** Base Editing; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- CRISPR-Cas9-Mechanismus mit sgRNA, PAM und DSB erklären
- NHEJ vs. HDR: Konsequenzen für Genknockout vs. Genkorrektur ableiten
- Ex-vivo- vs. In-vivo-Gentherapie unterscheiden und Beispiele nennen

**Typische Prüfungsfallen / Verwechslungen:**
- NHEJ (fehleranfällig, Knockout) vs. HDR (präzise, Korrektur) — beide reparieren DSB
- AAV (nicht-integrierend, sicher, geringe Kapazität) vs. Lentivirus (integrierend, Insertionsmutagenese-Risiko)
- Somatische Gentherapie (ethisch akzeptiert) vs. Keimbahn-Editierung (weitgehend verboten)
- PAM liegt auf dem Zielstrang, ist aber NICHT Teil der sgRNA-Sequenz
- Off-Target-Effekte: Cas9 kann an ähnlichen Sequenzen unbeabsichtigt schneiden

**Prüfungsrelevante Zahlen/Fakten:**
- Casgevy (Exa-cel): FDA-Zulassung Dez. 2023, >97% schmerzfrei nach 1 Jahr
- SpCas9-PAM: 5'-NGG-3' (andere Cas-Proteine haben andere PAMs)
- AAV-Kapazität: nur ca. 4,7 kb → begrenzt auf kleine Gene
- Zolgensma (AAV9): Gentherapie für SMA, ca. 2,1 Mio. USD pro Behandlung
- He Jiankui (2018): CCR5-Knockout in Embryo → internationaler Skandal

**Base Editing und Prime Editing — nächste Generation der Genomeditierung:**
Klassisches CRISPR-Cas9 erzeugt Doppelstrangbrüche (DSB), die zu unerwünschten Indels führen können. **Base Editing** umgeht den DSB: Eine katalytisch inaktive Cas9-Nickase ist mit einer Desaminase fusioniert, die einzelne Basen direkt umwandelt (Cytidin-Base-Editor: C→T; Adenin-Base-Editor: A→G), ohne den zweiten Strang zu schneiden. **Prime Editing** geht einen Schritt weiter: Eine Nickase-Cas9 ist mit einer Reversen Transkriptase fusioniert; die pegRNA (prime editing guide RNA) enthält sowohl die Zielsequenz als auch die gewünschte Editierung. Dies ermöglicht alle 12 möglichen Basenaustausche, kleine Insertionen und Deletionen ohne DSB und ohne Donor-Template.

> **Merke:** Base Editing: Nickase + Desaminase → C→T oder A→G ohne DSB. Prime Editing: Nickase + RT + pegRNA → präziseste Editierung (alle Substitutionen + kleine Indels) ohne DSB.

---

## Zusammenfassung (ultrakompakt)

- **CRISPR-Cas9**: Guide-RNA (20 nt) führt Cas9 zur Zielsequenz neben PAM-Motiv (NGG) → Doppelstrangbruch → Reparatur via NHEJ (Knockout) oder HDR (Genkorrektur)
- **Casgevy** (2023): erste zugelassene CRISPR-Therapie; heilt Sichelzellanämie durch ex-vivo-Knockout von BCL11A → fetales Hämoglobin reaktiviert
- **AAV-Vektoren**: nicht-integrierend, serotypspezifisch, vorübergehend; Beispiel: Zolgensma (SMA)
- **Lentivirale Vektoren**: integrieren ins Genom → dauerhafte Expression; Risiko: Insertionsmutagenese
- **Lipid-Nanopartikel (LNP)**: transiente mRNA-Delivery; Basis der COVID-19-mRNA-Impfstoffe
- **Somatische Gentherapie** (erlaubt): nur beim Patienten, nicht vererbbar
- **Keimbahngentherapie** (verboten): würde Veränderung an alle Nachkommen weitergeben; He-Jiankui-Skandal 2018`,

      lernziele: [
        "Den CRISPR-Cas9-Mechanismus (sgRNA, PAM, DSB) molekular erklären",
        "NHEJ und HDR als Reparaturwege unterscheiden und ihre Konsequenzen (Knockout vs. Korrektur) ableiten",
        "Ex-vivo- und In-vivo-Gentherapie mit Beispielen (Casgevy, Zolgensma) unterscheiden",
        "AAV, lentivirale Vektoren und Lipid-Nanopartikel als Vehikel der Gentherapie vergleichen",
        "Ethische Aspekte der somatischen vs. Keimbahn-Gentherapie darlegen und die He-Jiankui-Kontroverse einordnen",
      ],

      sections: [],
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
      ],
    },

    // === from kap8-humangenetik ===
    {
      id: "bio-8-01",
      title: "Stammbaumanalyse — Alle 4 Erbgänge mit Beispielen",
      stichworte: [
        "Autosomal dominant",
        "Autosomal rezessiv",
        "X-chromosomal rezessiv",
        "X-chromosomal dominant",
        "Konduktorin",
        "Stammbaumsymbole",
      ],
      content: `## Einleitung

Dieses Unterkapitel vertieft die Stammbaumanalyse mit Fokus auf die vier Haupterbgänge und ihre klinischen Krankheitsbeispiele. Die sichere Zuordnung von Stammbaummustern zu Erbgängen und die Berechnung von Erkrankungswahrscheinlichkeiten sind Kernkompetenzen für den BMS-Teil des MedAT. Besondere Aufmerksamkeit verdienen Sonderfälle wie Antizipation bei Huntington und die Rolle der Konduktorin bei X-chromosomal rezessiven Erkrankungen.

**Das Wichtigste auf einen Blick:**
- Autosomal-dominant: jede Generation, 50% Risiko (Marfan, Huntington)
- Autosomal-rezessiv: Generationssprung, 25% Risiko bei Trägerpaar (Mukoviszidose, PKU)
- X-chromosomal rezessiv: Männer betroffen, keine Vater-Sohn-Übertragung (Hämophilie, Duchenne)
- Konduktorin: heterozygote Überträgerin, phänotypisch gesund
- Huntington: CAG-Repeats >40, vollständige Penetranz, Antizipation

---

## Der Begriff 'Konduktorin' beim X-chromosomal rezessiven Erbgang

Eine Konduktorin (Überträgerin) ist eine Frau, die heterozygot für ein X-chromosomal rezessives Allel ist (X^A X^a). Sie ist selbst nicht klinisch krank (das zweite, gesunde X-Chromosom kompensiert), aber sie kann das pathogene Allel weitergeben. Söhne einer Konduktorin haben ein 50%iges Risiko, das Allel zu erben und zu erkranken (da sie hemizygot sind: X^a Y). Töchter haben ein 50%iges Risiko, selbst Konduktorin zu werden. Eine obligate Konduktorin ist eine Frau, bei der die Trägerschaft aufgrund des Stammbaums sicher feststeht (z. B. Mutter eines betroffenen Sohnes, Tochter eines betroffenen Vaters). Bei der Hämophilie war Victoria I. von England eine berühmte obligate Konduktorin.

> **Merke:** Konduktorin: heterozygot X^A X^a, phänotypisch gesund, gibt pathogenes Allel an 50% der Söhne (krank) und 50% der Töchter (Konduktorin) weiter.

---

## Huntington — Besonderheiten des autosomal dominanten Erbgangs

Die Huntington-Krankheit zeigt mehrere Besonderheiten: Erstens vollständige Penetranz — jeder Träger des mutierten HTT-Allels (> 40 CAG-Wiederholungen) erkrankt. Zweitens spätes Manifestationsalter (meist 30–50 Jahre) — Betroffene haben oft bereits Kinder bekommen, bevor sie wissen, ob sie das Allel tragen. Drittens Antizipation — bei väterlicher Weitergabe nehmen die CAG-Wiederholungen oft zu, was zu früherem und schwererem Erkrankungsbeginn in Folge-Generationen führt. Die Prädiktivdiagnostik (genetischer Test vor Symptomausbruch) ist ethisch belastet: Wer möchte wissen, ob er in 20 Jahren erkranken wird?

> **Merke:** Huntington: CAG-Repeats > 40 → vollständige Penetranz, Antizipation (Repeats nehmen zu). Prädiktivdiagnostik ethisch komplex.

---

## Kreuzungsschemata und Wahrscheinlichkeitsberechnung

Die sichere Beherrschung von Kreuzungsschemata ist im MedAT unerlässlich. Beim autosomal-dominanten Erbgang ergibt die Kreuzung eines heterozygoten Betroffenen (Aa) mit einem gesunden Partner (aa) eine 50%ige Erkrankungswahrscheinlichkeit in der Nachkommenschaft. Sind beide Eltern heterozygot betroffen (Aa x Aa), steigt das Risiko auf 75%, wobei 25% homozygot dominant (AA), 50% heterozygot (Aa) und 25% gesund (aa) sind. Beim autosomal-rezessiven Erbgang ist die klassische Konstellation zwei heterozygote Träger (Aa x Aa): 25% erkrankt (aa), 50% Träger (Aa), 25% homozygot gesund (AA). Wichtig ist das Konzept der bedingten Wahrscheinlichkeit: Ist ein Kind phänotypisch gesund, beträgt die Wahrscheinlichkeit, dass es Träger ist, 2/3 (nicht 1/2), da der Anteil aa bereits ausgeschlossen ist.

Beim X-chromosomal rezessiven Erbgang muss zwischen mütterlicher und väterlicher Weitergabe unterschieden werden. Eine Konduktorin (X^A X^a) und ein gesunder Mann (X^A Y) haben folgende Nachkommen: 50% der Söhne erkrankt (X^a Y), 50% gesund (X^A Y); 50% der Töchter Konduktorin (X^A X^a), 50% homozygot gesund (X^A X^A). Ein betroffener Vater (X^a Y) und eine homozygot gesunde Mutter (X^A X^A) haben nur gesunde Söhne (X^A Y) und ausschließlich Konduktorinnen als Töchter (X^A X^a). Diese Asymmetrie — keine Vater-Sohn-Übertragung — ist das stärkste Kriterium zur Identifikation eines X-chromosomalen Erbgangs im Stammbaum.

> **Merke:** Bedingte Wahrscheinlichkeit: Ein gesundes Kind zweier AR-Träger ist mit 2/3 Wahrscheinlichkeit selbst Träger (Aa), nicht mit 1/2. X-chromosomal: Keine Vater-Sohn-Übertragung — Väter geben ihr X nur an Töchter weiter.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Stammbaum + Krankheitsbeispiele (z. B. autosomal rezessiv: Mukoviszidose; X-rezessiv: Hämophilie; autosomal dominant: Chorea Huntington), Erbgang erkennen, Beratung.

**Ergänzend vertiefend:** Imprinting; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Erbgang aus Stammbaum bestimmen und konkrete Krankheitsbeispiele zuordnen
- Konduktorin-Begriff erklären und Vererbungswahrscheinlichkeiten berechnen
- Antizipation am Beispiel Huntington erklären

**Typische Prüfungsfallen / Verwechslungen:**
- AD (jede Generation, 50% Risiko) vs. AR (Generationssprung, 25% Risiko)
- Konduktorin (heterozygot gesund) vs. obligate Konduktorin (Trägerstatus sicher)
- Penetranz (binär: erkrankt ja/nein) vs. Expressivität (Schweregrad variabel)
- Huntington: vollständige Penetranz, aber spätes Manifestationsalter (30-50 Jahre)
- X-chromosomal dominant: kranker Vater → ALLE Töchter krank (nicht 50%)

**Prüfungsrelevante Zahlen/Fakten:**
- Huntington: >40 CAG-Repeats → Erkrankung sicher, Manifestation 30-50 Jahre
- Duchenne: 1:3.500 Knaben, Rollstuhlpflichtigkeit im 2. Lebensjahrzehnt
- AD: Aa × aa → 50% krank; AR: Aa × Aa → 25% krank
- Konduktorin × gesund: 50% Söhne krank, 50% Töchter Konduktorin
- Victoria I.: berühmteste obligate Konduktorin (Hämophilie)

---

## Zusammenfassung (ultrakompakt)

- **Autosomal-dominant** (Beispiele: Marfan, Huntington): jede Generation betroffen, 50% Weitergabe, ♂ = ♀
- **Autosomal-rezessiv** (Beispiele: Mukoviszidose, PKU): Generationssprünge, 25% Erkrankungsrisiko bei Aa × Aa, Konsanguinität ↑ Risiko
- **X-rez.** (Beispiele: Hämophilie A, DMD): fast nur ♂ betroffen; 50% Söhne von Konduktorin betroffen; kein Vater-Sohn-Transfer
- **Antizipation**: CAG-Repeat-Expansion nimmt über Generationen zu → Huntington manifestiert sich früher und schwerer
- **Genomic Imprinting**: Prader-Willi (paternale Deletion 15q11) vs. Angelman-Syndrom (maternale Deletion 15q11) — trotz gleicher Deletion verschiedene Erkrankung
- Seltene Erbgänge: mitochondrial (maternal), digene Vererbung, Uniparentale Disomie`,
      lernziele: [
        "Die vier Erbgänge (autosomal dominant/rezessiv, X-chromosomal dominant/rezessiv) anhand von Stammbaum-Merkmalen erkennen",
        "Konkrete Krankheitsbeispiele jedem Erbgang zuordnen und klinische Merkmale nennen",
        "Erkrankungswahrscheinlichkeiten für Nachkommen anhand eines Stammbaums berechnen",
      ],
      sections: [],
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
      stichworte: [
        "Polygenie",
        "Pleiotropie",
        "Penetranz",
        "Expressivität",
        "Multifaktorielle Vererbung",
      ],
      content: `## Einleitung

Viele Merkmale und Erkrankungen folgen nicht den einfachen Mendelschen Regeln, sondern zeigen komplexere Vererbungsmuster wie Polygenie, Pleiotropie und unvollständige Penetranz. Diese Konzepte erklären, warum identische Genotypen zu unterschiedlichen Phänotypen führen können und warum Merkmale wie Körpergröße eine Normalverteilung zeigen. Im MedAT ist die sichere Unterscheidung von Polygenie und Pleiotropie sowie das Verständnis von Penetranz und Expressivität essenziell.

**Das Wichtigste auf einen Blick:**
- Polygenie: viele Gene beeinflussen ein Merkmal additiv (z. B. Körpergröße → Normalverteilung)
- Pleiotropie: ein Gen beeinflusst mehrere Phänotypen (z. B. PKU → Hirnschaden + Hypopigmentierung)
- Penetranz: Anteil der Genträger, die erkranken (vollständig vs. unvollständig)
- Expressivität: Schweregrad bei den Betroffenen (variabel vs. konstant)
- Multifaktorielle Erkrankungen: Gene + Umwelt (z. B. Diabetes Typ 2, Bluthochdruck)

---

## Penetranz vs. Expressivität — Ein klinisch wichtiger Unterschied

Penetranz und Expressivität werden häufig verwechselt. Penetranz ist binär: Entweder zeigt der Genträger den Phänotyp oder nicht (Prozentsatz der Träger, die betroffen sind). Expressivität beschreibt die Schwere des Phänotyps bei denjenigen, die bereits betroffen sind (quantitatives Ausmaß). Beispiel: Bei der Neurofibromatose Typ 1 (NF1, autosomal dominant) beträgt die Penetranz fast 100% — fast alle Träger zeigen irgendein Symptom. Die Expressivität ist jedoch sehr variabel: Von minimalen Café-au-lait-Flecken bis zu multiplen Neurofibromen und kognitiven Beeinträchtigungen. Selbst innerhalb einer Familie können Eltern und Kinder sehr unterschiedlich stark betroffen sein.

> **Merke:** Penetranz: Wie viele Träger erkranken? (0–100%). Expressivität: Wie schwer erkranken die Betroffenen? (variabel/konstant).

---

## Polygenie und Normalverteilung

Wenn viele Gene mit kleinen, additiven Effekten ein Merkmal beeinflussen, entsteht durch den Zentralen Grenzwertsatz eine Normalverteilung in der Population. Die Körpergröße ist das klassische Lehrbuchbeispiel: Hunderte von Genloci tragen je wenige Millimeter bei. Dazu kommt eine große Umweltkomponente (Ernährung, chronische Erkrankungen, Hormonstatus). Zwillingsstudien quantifizieren die genetische Komponente: Bei eineiigen Zwillingen korrelieren Körpergrößen stärker als bei zweieiigen. Die Heritabilität (h²) der Körpergröße beträgt etwa 80% in westlichen Populationen. GWAS-Studien (Genome-Wide Association Studies) haben bereits über 3.000 Varianten identifiziert, die gemeinsam aber nur ~25% der Varianz erklären — die 'missing heritability' ist Gegenstand aktueller Forschung.

> **Merke:** Polygenie → viele Gene mit kleinen additiven Effekten → Merkmal normalverteilt in Population. Körpergröße, Hautfarbe: klassische Beispiele.

---

## Multifaktorielle Erkrankungen und Schwellenwertmodell

Multifaktorielle Erkrankungen wie Diabetes mellitus Typ 2, koronare Herzkrankheit, Schizophrenie und Neuralrohrdefekte entstehen durch das Zusammenspiel zahlreicher genetischer Varianten (jeweils mit kleinem Effekt) und Umweltfaktoren. Das Schwellenwertmodell erklärt, warum diese Erkrankungen nicht der Mendelschen Aufspaltung folgen: Die genetische Prädisposition ist kontinuierlich verteilt (Normalverteilung), aber erst bei Überschreiten eines bestimmten Schwellenwerts manifestiert sich die Erkrankung. Verwandte ersten Grades eines Betroffenen haben ein deutlich höheres Risiko als die Allgemeinbevölkerung, da ihre Prädispositionsverteilung nach rechts verschoben ist, ohne dass ein einzelnes ursächliches Gen identifiziert werden kann.

Der Polygene Risikoscore (PRS) fasst die Effekte von Hunderten bis Tausenden Risikovarianten in einem Summenwert zusammen und wird zunehmend zur individuellen Risikoabschätzung eingesetzt. Für koronare Herzkrankheit identifiziert ein PRS im obersten Perzentil Personen mit einem dreifach erhöhten Risiko gegenüber dem Bevölkerungsdurchschnitt. Epigenetische Einflüsse (z. B. intrauterine Mangelernährung, mütterliches Rauchen) können die Genexpression dauerhaft verändern und über epigenetische Vererbung sogar nachfolgende Generationen beeinflussen — dies wird im Kontext der Dutch Hunger Winter-Studie als transgenerationale Epigenetik diskutiert.

> **Merke:** Multifaktoriell: Viele Gene + Umwelt → Schwellenwertmodell. Polygener Risikoscore (PRS) summiert Effekte vieler Varianten. Familiäre Häufung ohne Mendelschen Erbgang.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Polygenie (viele Gene → ein Merkmal, z. B. Hautfarbe) vs. Pleiotropie (ein Gen → viele Merkmale, z. B. Sichelzellanämie), quantitative vs. qualitative Merkmale.

**Ergänzend vertiefend:** Epistase; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Polygenie von Pleiotropie unterscheiden und Beispiele nennen
- Penetranz vs. Expressivität erklären
- Multifaktorielle von monogenen Erkrankungen abgrenzen

**Typische Prüfungsfallen / Verwechslungen:**
- Polygenie (viele Gene → ein Merkmal) vs. Pleiotropie (ein Gen → viele Merkmale)
- Penetranz (ob man erkrankt, binär) vs. Expressivität (wie schwer man erkrankt, graduell)
- Vollständige Penetranz (100%, z. B. Huntington) vs. unvollständige (z. B. BRCA: ca. 70%)
- Multifaktoriell (Gene + Umwelt, häufige Erkrankungen) vs. monogen (ein Gen, seltene Erkrankungen)
- Heritabilität (genetischer Anteil an Varianz) ist NICHT gleich Penetranz

**Prüfungsrelevante Zahlen/Fakten:**
- Körpergröße: Heritabilität ca. 80%, >3.000 Genvarianten identifiziert
- NF1: fast 100% Penetranz, aber hoch variable Expressivität
- BRCA1/2: ca. 70% Penetranz für Brustkrebs (nicht 100%)
- Multifaktorielle Erkrankungen: Diabetes Typ 2, koronare Herzkrankheit, Schizophrenie
- Zwillingsstudien: eineiige > zweieiige Konkordanz → genetische Komponente

---

## Zusammenfassung (ultrakompakt)

- **Polygenie**: viele Gene wirken additiv → stetige Normalverteilung (Körpergröße, Hautfarbe); multifaktorielle Erkrankungen (z. B. Diabetes Typ 2)
- **Pleiotropie**: ein Gen → mehrere Phänotypen (Beispiel: PKU → Hirnschaden + Hypopigmentierung)
- **Penetranz**: Anteil der Genträger, die den Phänotyp zeigen; NF1 ≈ 100% (fast vollständig); BRCA1/2 ~70% (unvollständig)
- **Expressivität**: Ausprägungsgrad; NF1 variabel (wenige Café-au-lait-Flecken bis schwere Tumoren)
- **Antizipation**: Repeat-Expansion wird mit jeder Generation größer und tritt früher auf (Huntington, Myotone Dystrophie)
- **Genomic Imprinting**: Gen-Expression abhängig von elterlicher Herkunft; Prader-Willi (paternal) vs. Angelman (maternal) bei Deletion 15q11
- **Uniparentale Disomie (UPD)**: beide homologen Chromosomen von einem Elternteil → Imprinting-Effekte ohne chromosomale Deletion`,
      lernziele: [
        "Polygenie und Pleiotropie definieren und mit je einem Beispiel erläutern",
        "Vollständige und unvollständige Penetranz sowie variable Expressivität unterscheiden",
        "Multifaktorielle Erkrankungen von monogenen Erkrankungen abgrenzen",
      ],
      sections: [],
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
      stichworte: [
        "Genetische Beratung",
        "Risikoberechnung",
        "Heterozygotentest",
        "Neugeborenenscreening",
      ],
      content: `## Einleitung

Die genetische Beratung ist ein zentrales Element der klinischen Genetik und verbindet Risikoberechnung mit nicht-direktiver Kommunikation, um Ratsuchende bei Entscheidungen zur Familienplanung und prädiktiven Diagnostik zu unterstützen. Die Anwendung des Hardy-Weinberg-Gesetzes zur Berechnung von Trägerfrequenzen und die Bayessche Analyse zur Aktualisierung von Wahrscheinlichkeiten sind die wichtigsten mathematischen Werkzeuge. Im MedAT werden konkrete Rechenaufgaben zur Risikoberechnung (HW-Gesetz, bedingte Wahrscheinlichkeit) regelmäßig gestellt.

**Das Wichtigste auf einen Blick:**
- Genetische Beratung: Information, Unterstützung, Nicht-Direktivität
- Hardy-Weinberg: q² → q → 2pq (Trägerfrequenz aus Erkrankungshäufigkeit)
- Bayessche Analyse: Prior × Likelihood → Posterior (aktualisierte Wahrscheinlichkeit)
- Mukoviszidose: Inzidenz 1:2.500 → Trägerfrequenz ca. 1:25
- In Österreich regelt das Genanalysegesetz (GAG) prädiktive Gentests

---

---

## Hardy-Weinberg-Gesetz — Anwendung in der Praxis

Das Hardy-Weinberg-Gesetz gilt unter folgenden Bedingungen: große Population, zufällige Partnerwahl (panmiktisch), keine Mutation, keine Selektion, kein Genfluss (Migration). In der Realität sind diese Bedingungen nie vollständig erfüllt, aber das Gesetz liefert trotzdem nützliche Näherungen. Klinische Anwendung: Wenn die Erkrankungsfrequenz einer autosomal rezessiven Erkrankung bekannt ist, kann die Trägerfrequenz berechnet werden. Beispiel Phenylketonurie: Erkrankungshäufigkeit ca. 1:10.000 in Europa → q² = 1/10.000 → q = 1/100 → Trägerfrequenz 2pq ≈ 2 × 99/100 × 1/100 ≈ 1/50. Abweichungen vom Hardy-Weinberg-Gleichgewicht können auf evolutionäre Einflüsse (z. B. Heterozygotenvorteil bei Sichelzellanämie in Malariaregionen) hinweisen.

> **Merke:** Hardy-Weinberg: p² + 2pq + q² = 1. q² = Erkrankungshäufigkeit → q = Allelhäufigkeit → 2pq = Trägerfrequenz.

---

## Nicht-Direktivität in der genetischen Beratung

Das Prinzip der Nicht-Direktivität ist ein Kernprinzip der genetischen Beratung: Der Berater soll keine Empfehlung geben, was der Patient tun soll, sondern nur sachliche Information und emotionale Unterstützung bereitstellen. Hintergrund: Historische Erfahrungen mit Eugenik (z. B. Zwangssterilisierungen im Nationalsozialismus) haben die Genetik zu besonderer Zurückhaltung veranlasst. In der Praxis ist strikte Nicht-Direktivität schwer umzusetzen, da Berater durch Betonung bestimmter Informationen die Entscheidung beeinflussen. Aktuelle Diskussion: In manchen Kontexten (z. B. pränatale Diagnose einer schweren letalen Erkrankung) wird mehr patientenzentrierte Beratung gefordert, die auch Behandlungsempfehlungen einschließen kann.

> **Merke:** Nicht-Direktivität: Berater informiert, entscheidet nicht. Autonomie und Selbstbestimmung des Ratsuchenden stehen im Mittelpunkt.

---

## Klinischer Bezug

Im Rahmen der präkonzeptionellen Beratung bei Risikofamilien (z. B. bekannte BRCA-Mutation, Mukoviszidose-Träger) wird genetische Beratung angeboten. In Österreich regelt das Genanalysegesetz (GAG) die Rahmenbedingungen für prädiktive Gentests: Beratungspflicht vor und nach dem Test, kein Testen von Minderjährigen ohne therapeutischen Nutzen.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Hardy-Weinberg-Anwendung (q² aus Erkrankungshäufigkeit, p=1−q, 2pq=Trägerfrequenz), Voraussetzungen (große Population, keine Selektion/Mutation/Migration), Pränataldiagnostik-Grundlagen.

**Ergänzend vertiefend:** Inzucht; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Trägerfrequenz aus Erkrankungshäufigkeit mit Hardy-Weinberg berechnen
- Erkrankungsrisiko für ein Kind aus Stammbaumdaten ableiten
- Nicht-Direktivität als Grundprinzip der genetischen Beratung erklären

**Typische Prüfungsfallen / Verwechslungen:**
- q² (Erkrankungsfrequenz) vs. 2pq (Trägerfrequenz) — 2pq >> q² bei seltenen Erkrankungen
- Nicht-Direktivität (Berater informiert, entscheidet nicht) vs. patientenzentrierte Beratung (kann Empfehlungen einschließen)
- HW-Voraussetzung Panmixie (zufällige Partnerwahl) vs. Inzucht (gezielte Verwandtenpaarung)
- Prior (Vorwissen) vs. Posterior (aktualisierte Wahrscheinlichkeit nach Bayes)

**Prüfungsrelevante Zahlen/Fakten:**
- Mukoviszidose: Inzidenz 1:2.500 → q = 1/50 → Trägerfrequenz 2pq ≈ 1:25
- PKU: Inzidenz 1:10.000 → q = 1/100 → Trägerfrequenz ca. 1:50
- Bayessche Formel: P(A|B) = P(B|A) × P(A) / P(B)
- Österreich: Genanalysegesetz (GAG), Beratungspflicht vor prädiktivem Test
- Neugeborenenscreening: PKU seit 1966, heute >30 Erkrankungen

---

## Bayessche Analyse — Schritt für Schritt

Die Bayessche Analyse ist das wichtigste Werkzeug zur Aktualisierung genetischer Risikoschätzungen anhand neuer Information. Ausgangspunkt ist ein Prior (Vorwahrscheinlichkeit), der sich aus dem Stammbaum ergibt. Beispiel: Eine Frau hat einen Bruder mit Mukoviszidose (AR). Beide Eltern sind obligate Träger (Aa). Der Prior, dass sie selbst Trägerin ist, beträgt 2/3 (bedingte Wahrscheinlichkeit unter Ausschluss von aa). Wird nun ein Heterozygotentest durchgeführt und ist negativ (Testspezifität 95%), ergibt die Bayessche Formel einen aktualisierten Posterior: P(Trägerin|Test negativ) = (2/3 x 0,05) / [(2/3 x 0,05) + (1/3 x 1,0)] ≈ 9,1%. Die Trägerin-Wahrscheinlichkeit sinkt also von 67% auf etwa 9%.

In der Praxis wird die Bayessche Analyse tabellarisch aufgebaut: Hypothese 1 (Trägerin) und Hypothese 2 (Nicht-Trägerin) werden mit ihrem Prior und der Likelihood (Wahrscheinlichkeit der Beobachtung unter jeder Hypothese) multipliziert, die Produkte normalisiert. Dieses Vorgehen kann iterativ mit weiteren Informationen (z. B. gesunde Söhne bei X-chromosomalen Erkrankungen) wiederholt werden, wobei jeder gesunde Sohn einer möglichen Konduktorin die Posterior-Wahrscheinlichkeit halbiert. Die Bayessche Analyse ist auch Grundlage der Berechnung des positiven prädiktiven Wertes (PPV) bei genetischen Screening-Tests und erklärt, warum selbst hochspezifische Tests bei seltenen Erkrankungen zu einer hohen Rate falsch-positiver Ergebnisse führen können.

> **Merke:** Bayessche Analyse: Prior x Likelihood = Joint → normalisieren = Posterior. Jeder gesunde Sohn einer möglichen XR-Konduktorin halbiert die Posterior-Wahrscheinlichkeit für Trägerstatus.

---

## Zusammenfassung (ultrakompakt)

- **Genetische Beratung**: Grundprinzip **Nicht-Direktivität** — Informieren, nicht lenken; Autonomie der Ratsuchenden
- Risikoberechnung: Mendel-Regeln anwenden (Aa × Aa → 25%; Aa × aa → 50%); für seltene rez. Erkrankungen: Hardy-Weinberg
- **Mukoviszidose** (1:2.500): q² = 1/2.500 → q = 1/50 → Trägerfrequenz 2pq ≈ 1:25 in Europa
- **Bayes-Analyse**: bedingte Wahrscheinlichkeit aktualisieren nach neuen Informationen (z. B. gesundes Kind senkt Träger-Wahrscheinlichkeit)
- Prädiktive Tests: Beratung VOR und NACH dem Test gesetzlich vorgeschrieben (Österreich: Genanalysegesetz)
- **Recht auf Nichtwissen**: Ratsuchende können entscheiden, ob sie ihr genetisches Risiko erfahren wollen`,
      lernziele: [
        "Erkrankungsrisiken für Nachkommen aus Stammbäumen berechnen (autosomal dominant/rezessiv, X-chromosomal)",
        "Das Hardy-Weinberg-Gesetz anwenden, um Trägerfrequenzen aus Erkrankungshäufigkeiten zu berechnen",
        "Das Prinzip der Bayesschen Analyse bei der genetischen Risikoberechnung erläutern",
      ],
      sections: [],
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
      stichworte: [
        "PID",
        "PND",
        "Amniozentese",
        "Chorionzottenbiopsie",
        "NIPT",
        "Pränataldiagnostik",
        "Ethik",
      ],
      content: `## Einleitung

Die Pränataldiagnostik (PND) umfasst alle Methoden zur vorgeburtlichen Untersuchung des Embryos oder Feten auf genetische und strukturelle Auffälligkeiten und hat durch den nicht-invasiven Pränataltest (NIPT) eine Revolution erfahren. In Abgrenzung dazu findet die Präimplantationsdiagnostik (PID) vor der Einnistung im Rahmen einer IVF statt. Im MedAT sind die Unterscheidung der diagnostischen Methoden (NIPT, Amniozentese, CVS) mit ihren Zeitpunkten, Risiken und der Abgrenzung PID vs. PND prüfungsrelevant.

**Das Wichtigste auf einen Blick:**
- NIPT: ab 10. SSW, cffDNA aus Mutterblut, >99% Sensitivität für Trisomie 21, kein Fehlgeburtsrisiko
- CVS: 11.-13. SSW, invasiv, Fehlgeburtsrisiko ca. 1%
- Amniozentese: 16.-18. SSW, invasiv, Fehlgeburtsrisiko ca. 0,5%
- PID: Diagnostik VOR Implantation (IVF), nur bei hohem Risiko für schwere Erbkrankheit
- NIPT ist Screening, keine Diagnose — positives Ergebnis muss invasiv bestätigt werden

---

---

## NIPT — Revolution in der Pränataldiagnostik

Zellfreie fetale DNA (cffDNA) macht ab der 10. SSW etwa 5–15% der gesamten zellfreien DNA im mütterlichen Blut aus. NIPT-Tests sequenzieren diese DNA und analysieren die relative Häufigkeit der Chromosomen: Beim Vorliegen einer Trisomie 21 ist der Anteil an Chromosom-21-Sequenzen leicht erhöht. Die Sensitivität für Trisomie 21 übersteigt 99%, die Spezifität 99,9%. Damit ist NIPT dem Ersttrimester-Screening in der Präzision weit überlegen. Allerdings bleibt NIPT ein Screening-Test: Bei positiven Ergebnissen muss immer eine invasive Methode (Amniozentese, CVS) zur Bestätigung angeboten werden. Wichtige Einschränkungen: Falsch-positive Befunde durch mütterliche Chromosomenstörungen oder Plazentamosaike; für seltene Syndrome weniger validiert.

> **Merke:** NIPT: cffDNA aus Mutterblut ab 10. SSW → hohe Sensitivität für Trisomie 21 (>99%), kein Fehlgeburtsrisiko, aber nur Screening (kein Diagnosetest).

---

## Amniozentese vs. Chorionzottenbiopsie — Vergleich

Amniozentese und Chorionzottenbiopsie sind beide invasive diagnostische Methoden mit geringem, aber realem Fehlgeburtsrisiko. Die CVS kann früher durchgeführt werden (11.–13. SSW vs. 16.–18. SSW bei Amniozentese), ermöglicht also frühere Entscheidungen. Allerdings besteht bei CVS ein leicht höheres Fehlgeburtsrisiko. Die Amniozentese nutzt fetale Zellen aus dem Fruchtwasser, die kultiviert werden müssen (Wartezeit 2–3 Wochen), während CVS-Zellen direkt genetisch analysiert werden können (schnellere FISH-Ergebnisse in 48 Stunden). Beide liefern einen vollständigen Karyotyp und ermöglichen molekulargenetische Analysen.

> **Merke:** CVS: 11.–13. SSW, Fehlgeburtsrisiko ~1%. Amniozentese: 16.–18. SSW, Fehlgeburtsrisiko ~0,5%. CVS = früher, etwas mehr Risiko.

---

## Klinischer Bezug

NIPT hat in vielen europäischen Ländern das Erstrimester-Screening als Erstlinienmethode abgelöst. In Österreich ist NIPT seit 2020 im Mutter-Kind-Pass-Programm vorgesehen. Bei Trisomie 21 (Down-Syndrom, Häufigkeit ca. 1:700–1:800 Geburten) ist eine nicht-direktive Beratung essenziell, da Betroffene ein breites Spektrum an Lebensqualität zeigen.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Pränataldiagnostik (NIPT: ab 10. SSW, cfDNA, geringes Risiko; Amniozentese: ab 15. SSW, Fruchtwasser, ~0,1–0,3 % Abort; CVS: 11.–13. SSW, Chorionzotten, ~0,5–1 % Abort), Indikationen.

**Ergänzend vertiefend:** Triple-Test; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- NIPT, Amniozentese und CVS mit Zeitpunkt und Risiken vergleichen
- PID von PND abgrenzen
- Ethische Argumente zu PID und PND diskutieren

**Typische Prüfungsfallen / Verwechslungen:**
- PID (vor Implantation, IVF nötig) vs. PND (während Schwangerschaft)
- NIPT (Screening, kein Fehlgeburtsrisiko) vs. Amniozentese (diagnostisch, invasiv)
- CVS (11.-13. SSW, schnelleres Ergebnis) vs. Amniozentese (16.-18. SSW, geringeres Risiko)
- cffDNA = zellfreie fetale DNA (eigentlich aus Trophoblasten der Plazenta)
- NIPT = Screening-Test, positives Ergebnis muss immer invasiv bestätigt werden

**Prüfungsrelevante Zahlen/Fakten:**
- NIPT: ab 10. SSW, Sensitivität >99% für Trisomie 21, Spezifität >99,9%
- CVS: 11.-13. SSW, Fehlgeburtsrisiko ca. 1%
- Amniozentese: 16.-18. SSW, Fehlgeburtsrisiko ca. 0,5%
- Trisomie 21 Häufigkeit: ca. 1:700-1:800 Geburten
- Österreich: NIPT seit 2020 im Mutter-Kind-Pass vorgesehen

---

## PID — Voraussetzungen und Ablauf

Die Präimplantationsdiagnostik (PID) untersucht Embryonen nach einer In-vitro-Fertilisation (IVF) vor der Einnistung in die Gebärmutter auf genetische Erkrankungen. Im Blastozystenstadium (Tag 5) werden wenige Trophektoderm-Zellen biopsiert und mittels Array-CGH, NGS oder PCR auf die gesuchte Mutation analysiert. Nur genetisch unauffällige Embryonen werden transferiert. In Österreich ist die PID seit der Novelle des Fortpflanzungsmedizingesetzes (FMedG) 2015 unter strengen Voraussetzungen erlaubt: Es muss ein hohes Risiko für eine schwere Erbkrankheit oder wiederholte Fehlgeburten aufgrund chromosomaler Translokationen bestehen, und eine Ethikkommission muss zustimmen. Die PID ist keine Alternative zur PND, sondern eine Ergänzung für Paare, die eine Schwangerschaft mit einem betroffenen Kind vermeiden möchten, ohne einen Schwangerschaftsabbruch in Betracht ziehen zu müssen.

Die ethische Debatte um PID und PND berührt fundamentale Fragen: Selektion von Embryonen, das Recht auf Nichtwissen, die Autonomie der Frau und die gesellschaftliche Bewertung von Behinderung. In der genetischen Beratung ist es essenziell, dass alle Optionen ergebnisoffen dargestellt werden und die Entscheidungshoheit bei den Ratsuchenden liegt. Die Unterscheidung zwischen Screening (NIPT: Risikoabschätzung für die Allgemeinbevölkerung) und Diagnostik (Amniozentese, CVS: definitive Diagnose bei Risikoschwangerschaften) ist klinisch und ethisch relevant, da ein Screening-Test trotz hoher Sensitivität bei seltenen Erkrankungen eine beachtliche Rate falsch-positiver Ergebnisse haben kann.

> **Merke:** PID: Embryonendiagnostik VOR Implantation (IVF-Pflicht). In Österreich nur bei hohem Risiko für schwere Erbkrankheit (FMedG 2015). Screening (NIPT) ≠ Diagnostik (Amniozentese/CVS).

---

## Zusammenfassung (ultrakompakt)

- **NIPT** (nicht-invasiv): zellfreie fetale DNA aus mütterlichem Blut; ab SSW 10; Trisomie-21-Sensitivität >99%; kein Fehlgeburtsrisiko
- **Amniozentese** (SSW 16–18): Fruchtwasser → fetale Zellen → vollständiger Karyotyp; Fehlgeburtsrisiko ~0,5%
- **Chorionzottenbiopsie (CVS)** (SSW 11–13): früher, aber leicht höheres Fehlgeburtsrisiko (~1%); vollständiger Karyotyp
- **Ultraschall**: Nackentransparenz (SSW 11–13) → Screening auf Chromosomenaberrationen; Fehlbildungsdiagnostik SSW 20–22
- **PID** (Präimplantationsdiagnostik): Embryo-Diagnostik vor Einpflanzung im Rahmen von IVF; in Österreich nur bei schwerem Erkrankungsrisiko zugelassen
- **PND** (Pränataldiagnostik) vs. **PID**: PND während Schwangerschaft; PID vor Einnistung
- Ethische Prinzipien: Nicht-Direktivität, Recht auf Nichtwissen, Schutz des Embryos`,
      lernziele: [
        "Die Methoden der Pränataldiagnostik (Ultraschall, NIPT, Amniozentese, CVS) mit Zeitpunkt und Risiken beschreiben",
        "PID von PND abgrenzen und die Voraussetzungen für PID in Österreich nennen",
        "Ethische Argumente für und gegen PID und PND darlegen",
      ],
      sections: [],
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
