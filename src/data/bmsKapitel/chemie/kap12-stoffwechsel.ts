import type { Kapitel } from '../types';

export const chemKap12: Kapitel = {
  id: 'chem-kap12',
  title: 'Stoffwechsel & Spezialthemen',
  subject: 'chemie',
  icon: '🔄',
  estimatedTime: '25 Minuten',
  unterkapitel: [
    {
      id: 'chem-kap12-1',
      title: 'Zellatmung',
      content: `Die **Zellatmung** (ärobe Dissimilation) macht chemische Energie aus Glucose als ATP nutzbar. Gesamtgleichung: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + Energie (ca. 38 ATP).

Drei Teilschritte: (1) **Glykolyse** (Cytoplasma), (2) **Citratzyklus** (mitochondriale Matrix), (3) **Atmungskette** (innere Mitochondrienmembran). Zellatmung ist Gegenstück zur Fotosynthese. Praktisch alle eukaryotischen Zellen betreiben Zellatmung — ATP ist universelle Energiewährung.

**Glykolyse** („Zuckerspaltung") findet im Cytoplasma statt, ist anärob (kein O₂ nötig). Zehn enzymatische Reaktionen: ein Glucose (C₆) → zwei Pyruvat (C₃). Nettobilanz: **2 ATP** (2 ATP investiert, 4 ATP gewonnen) + **2 NADH + H⁺**. Schlüsselenzyme: Hexokinase (Schritt 1, Glucose → Glucose-6-phosphat), Phosphofructokinase (Schritt 3, geschwindigkeitsbestimmend, allosterisch reguliert), Pyruvatkinase (Schritt 10, bildet Pyruvat). Bei O₂-Mangel (anärob): Pyruvat → **Lactat** (Milchsäuregärung) oder — bei Hefen — Pyruvat → Ethanol + CO₂ (alkoholische Gärung). Milchsäuregärung liefert nur 2 ATP pro Glucose, deutlich weniger effizient als ärobe Zellatmung.

Unter äroben Bedingungen wird Pyruvat durch **Pyruvat-Dehydrogenase** zu Acetyl-CoA decarboxyliert: Pyruvat + CoA + NAD⁺ → Acetyl-CoA + CO₂ + NADH. Acetyl-CoA tritt in **Citratzyklus** ein (mitochondriale Matrix). Pro Umlauf: 3 NADH, 1 FADH₂, 1 GTP (≈ 1 ATP), 2 CO₂. Da aus Glucose zwei Acetyl-CoA entstehen, muss Zyklus zweimal durchlaufen werden → Bilanz pro Glucose: 6 NADH, 2 FADH₂, 2 GTP, 4 CO₂. **Atmungskette** (innere Mitochondrienmembran): Elektronen von NADH und FADH₂ werden über vier Proteinkomplexe (I–IV) auf Sauerstoff übertragen. Dabei wird Protonengradient über innerer Membran aufgebaut (Chemiosmose). ATP-Synthase nutzt Gradienten → ADP + Pᵢ → ATP. Pro NADH ca. **2,5 ATP**, pro FADH₂ ca. **1,5 ATP**. Gesamtbilanz: ca. **30–32 ATP** pro Glucose (neuere Berechnung) bzw. klassisch ~38 ATP.`,
      merksätze: [
        'Zellatmung: Glykolyse (Cytoplasma, 2 ATP, anärob) → Citratzyklus (Matrix, 2 GTP, 8 NADH, 2 FADH₂) → Atmungskette (innere Membran, ~34 ATP). Gesamtbilanz: ~38 ATP pro Glucose.',
        'Glykolyse: Glucose → 2 Pyruvat + 2 ATP + 2 NADH. Ohne O₂: Pyruvat → Lactat (Milchsäuregärung, nur 2 ATP) oder Ethanol + CO₂ (alkoholische Gärung).'
      ],
      altfrage: {
        question: 'Wo findet die Glykolyse statt und wie lautet ihre Nettobilanz?',
        answer: 'Die Glykolyse findet im Cytoplasma statt (nicht im Mitochondrium). Pro Glucose-Molekül werden netto 2 ATP und 2 NADH + H⁺ gewonnen. Glucose wird dabei in zwei Moleküle Pyruvat (C₃) gespalten. Die Glykolyse verläuft anärob (ohne Sauerstoff).'
      },
      klinischerBezug: 'Bei intensiver Muskelarbeit reicht O₂-Versorgung nicht aus → anärobe Glykolyse mit **Lactatbildung**. Lactat senkt pH im Muskel → Muskelermüdung, Schmerzen. Lactat wird später in Leber zu Glucose regeneriert (Cori-Zyklus). **Warburg-Effekt**: Tumorzellen betreiben auch bei ausreichend O₂ vermehrt ärobe Glykolyse mit Lactatproduktion. Genutzt in PET-Diagnostik: erhöhte ¹⁸F-FDG-Aufnahme (Glucose-Analogon) → Tumorerkennung.',
      selfTest: [
        {
          question: 'Wie viele ATP-Moleküle werden in der Glykolyse netto pro Glucose gewonnen?',
          options: [
            '4 ATP',
            '2 ATP',
            '36 ATP',
            '0 ATP',
            '6 ATP'
          ],
          correctIndex: 1,
          explanation: 'In der Glykolyse werden 2 ATP investiert und 4 ATP durch Substratkettenphosphorylierung gewonnen. Die Nettobilanz beträgt daher 2 ATP pro Glucose. Zusätzlich entstehen 2 NADH + H⁺.'
        },
        {
          question: 'Wo findet der Citratzyklus statt?',
          options: [
            'Im Cytoplasma',
            'An der äußeren Mitochondrienmembran',
            'In der mitochondrialen Matrix',
            'An der inneren Mitochondrienmembran',
            'Im endoplasmatischen Retikulum'
          ],
          correctIndex: 2,
          explanation: 'Der Citratzyklus läuft in der mitochondrialen Matrix ab. Die Glykolyse findet im Cytoplasma statt, die Atmungskette an der inneren Mitochondrienmembran.'
        },
        {
          question: 'Was geschieht mit Pyruvat bei Sauerstoffmangel im menschlichen Muskel?',
          options: [
            'Es wird zu Acetyl-CoA oxidiert.',
            'Es wird zu Ethanol und CO₂ vergoren.',
            'Es wird zu Lactat reduziert.',
            'Es wird direkt in den Citratzyklus eingeschleust.',
            'Es wird zu Oxalacetat carboxyliert.'
          ],
          correctIndex: 2,
          explanation: 'Bei Sauerstoffmangel wird Pyruvat im menschlichen Muskel durch die Lactatdehydrogenase zu Lactat reduziert (Milchsäuregärung). Dabei wird NADH zu NAD⁺ reoxidiert, sodass die Glykolyse weiterlaufen kann. Die alkoholische Gärung (Ethanol + CO₂) kommt bei Hefen vor, nicht beim Menschen.'
        }
      ]
    },
    {
      id: 'chem-kap12-2',
      title: 'Fotosynthese',
      content: `**Fotosynthese** wandelt Lichtenergie in chemische Energie um. Gesamtgleichung: 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂ (unter Licht). Findet in **Chloroplasten** statt.

Zwei Phasen: (1) **Lichtreaktion** (Thylakoidmembranen, lichtabhängig), (2) **Dunkelreaktion** (Stroma, Calvin-Zyklus, lichtunabhängig). Fotosynthese ist wichtigste biochemische Reaktion der Erde — Grundlage aller Nahrungsketten, erzeugt Sauerstoff. „Dunkelreaktion" ist irreführend: läuft überwiegend tagsüber ab, benötigt Produkte der Lichtreaktion (ATP, NADPH).

**Lichtreaktion** (Thylakoidmembranen) wandelt Lichtenergie in ATP + NADPH um. Licht wird von **Chlorophyll a/b** und akzessorischen Pigmenten (Carotinoide) absorbiert. Zwei Fotosysteme: **PS II (P680)** und **PS I (P700)**. Im PS II wird Wasser gespalten (**Fotolyse**): 2 H₂O → O₂ + 4 H⁺ + 4 e⁻ — Quelle des freigesetzten Sauerstoffs. Elektronen durchlaufen Elektronentransportkette (ETC) zwischen PS II und PS I → Protonengradient über Thylakoidmembran. **ATP-Synthase** nutzt Gradienten → ATP (Fotophosphorylierung). Im PS I werden Elektronen auf NADP⁺ übertragen → **NADPH + H⁺**. Bilanz: H₂O + NADP⁺ + ADP + Pᵢ → O₂ + NADPH + ATP. Zyklischer Elektronentransport (nur PS I): nur ATP, kein NADPH.

**Dunkelreaktion** (Calvin-Zyklus, Stroma) nutzt ATP + NADPH → CO₂ → Glucose. Drei Phasen: (1) **CO₂-Fixierung**: **RuBisCO** (Ribulose-1,5-bisphosphat-Carboxylase/Oxygenase) bindet CO₂ an Ribulose-1,5-bisphosphat (C₅) → zwei 3-Phosphoglycerat (C₃). RuBisCO ist häufigstes Enzym der Erde. (2) **Reduktion**: 3-Phosphoglycerat wird unter ATP + NADPH → Glycerinaldehyd-3-phosphat (G3P) reduziert. (3) **Regeneration**: Großteil des G3P wird unter ATP → Ribulose-1,5-bisphosphat regeneriert. Für 6 CO₂ (= 1 Glucose): 18 ATP + 12 NADPH. Pro 6 Zyklen: 12 G3P gebildet, 10 zur Regeneration, 2 für Glucosesynthese.`,
      merksätze: [
        'Fotosynthese: Lichtreaktion (Thylakoidmembran) → ATP + NADPH + O₂. Dunkelreaktion/Calvin-Zyklus (Stroma) → CO₂-Fixierung durch RuBisCO → Glucose. 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂.',
        'Lichtreaktion: PS II (P680, Fotolyse des Wassers → O₂) → Elektronentransportkette → PS I (P700, NADPH-Bildung). Calvin-Zyklus: 6 CO₂ benötigen 18 ATP + 12 NADPH.'
      ],
      altfrage: {
        question: 'Wo genau findet die Lichtreaktion der Fotosynthese statt und welche Produkte entstehen?',
        answer: 'Die Lichtreaktion findet an den Thylakoidmembranen der Chloroplasten statt. Es entstehen ATP (durch Fotophosphorylierung), NADPH + H⁺ (durch Reduktion von NADP⁺ im Fotosystem I) und O₂ (durch Fotolyse des Wassers im Fotosystem II). ATP und NADPH werden anschließend im Calvin-Zyklus (Stroma) für die CO₂-Fixierung benötigt.'
      },
      klinischerBezug: 'Herbizide wie **Paraquat** blockieren Elektronentransportkette der Fotosynthese → reaktive Sauerstoffspezies (ROS). **Paraquat-Vergiftung** beim Menschen: schwere Lungenschäden (Lungenödem, Fibrose), da Paraquat auch in menschlichen Zellen oxidativen Stress verursacht. Letalität hoch. Keine kausale Therapie. In Pharmakologie werden pflanzliche Sekundärmetabolite (durch Fotosynthese-abhängige Wege) als Wirkstoffe genutzt — z. B. **Vincristin** (Zytostatikum aus Catharanthus roseus).',
      selfTest: [
        {
          question: 'In welchem Kompartiment des Chloroplasten läuft der Calvin-Zyklus ab?',
          options: [
            'In den Thylakoidmembranen',
            'Im Stroma',
            'Im Intermembranraum',
            'In der äußeren Chloroplastenmembran',
            'In der mitochondrialen Matrix'
          ],
          correctIndex: 1,
          explanation: 'Der Calvin-Zyklus (Dunkelreaktion) findet im Stroma des Chloroplasten statt. Die Lichtreaktion findet dagegen an den Thylakoidmembranen statt.'
        },
        {
          question: 'Welches Enzym katalysiert die CO₂-Fixierung im Calvin-Zyklus?',
          options: [
            'ATP-Synthase',
            'Chlorophyll',
            'RuBisCO',
            'Pyruvatkinase',
            'Phosphofructokinase'
          ],
          correctIndex: 2,
          explanation: 'RuBisCO (Ribulose-1,5-bisphosphat-Carboxylase/Oxygenase) katalysiert die Fixierung von CO₂ an Ribulose-1,5-bisphosphat. Es ist das häufigste Enzym der Erde und das Schlüsselenzym des Calvin-Zyklus.'
        },
        {
          question: 'Woher stammt der bei der Fotosynthese freigesetzte Sauerstoff (O₂)?',
          options: [
            'Aus dem CO₂',
            'Aus der Glucose',
            'Aus dem Wasser (Fotolyse)',
            'Aus der Luft',
            'Aus dem NADPH'
          ],
          correctIndex: 2,
          explanation: 'Der freigesetzte Sauerstoff stammt aus der Fotolyse des Wassers im Fotosystem II: 2 H₂O → O₂ + 4 H⁺ + 4 e⁻. Isotopenexperimente mit ¹⁸O-markiertem Wasser haben dies eindeutig bewiesen.'
        }
      ]
    },
    {
      id: 'chem-kap12-3',
      title: 'Schwefelchemie (NEU 2024!)',
      content: `**Schwefel** (S) ist Nichtmetall der 6. Hauptgruppe (Chalkogene). Ordnungszahl 16, Elektronenkonfiguration [Ne] 3s² 3p⁴.

Schwefel kommt elementar (Vulkane) und in Verbindungen vor: Sulfide (Pyrit FeS₂, Bleiglanz PbS, Zinkblende ZnS), Sulfate (Gips CaSO₄·2H₂O, Schwerspat BaSO₄), organische Verbindungen (AS Cystein, Methionin, Coenzym A). Elementar: gelbe, rhombische Kristalle aus S₈-Ringen (Cyclooctaschwefel). Oxidationsstufen: −2 (Sulfide, H₂S), 0 (elementar), +4 (SO₂, H₂SO₃), +6 (SO₃, H₂SO₄). **Schwefelwasserstoff** (H₂S) ist giftiges Gas (Geruch: faule Eier), entsteht bei Verwesung schwefelhaltiger Substanzen, toxisch in geringen Konzentrationen.

**Schwefelsäure** (H₂SO₄) ist wichtigste Industriechemikalie. Herstellung: **Kontaktverfahren**. (1) S + O₂ → SO₂. (2) 2 SO₂ + O₂ → 2 SO₃ (Katalysator: V₂O₅). (3) SO₃ + H₂O → H₂SO₄. Schwefelsäure ist starke, zweiprotonige Säure: H₂SO₄ → H⁺ + HSO₄⁻ (vollständig), HSO₄⁻ ⇌ H⁺ + SO₄²⁻ (unvollständig, pKs₂ ≈ 1,9). Konzentrierte H₂SO₄ wirkt stark hygroskopisch (wasseranziehend) und als Oxidationsmittel. Reaktion mit Wasser stark exotherm — Sicherheitsregel: **„Erst das Wasser, dann die Säure, sonst geschieht das Ungeheure"** (Säure immer ins Wasser, nie umgekehrt!). **Sulfate** (SO₄²⁻) sind Salze der Schwefelsäure: Natriumsulfat (Na₂SO₄, Glaubersalz), Calciumsulfat (CaSO₄, Gips), **Bariumsulfat** (BaSO₄, schwerlöslich in Wasser, Röntgenkontrastmittel).

**Schwefeldioxid** (SO₂) entsteht bei Verbrennung schwefelhaltiger Brennstoffe und bei Vulkanausbrüchen. Farbloses, stechend riechendes Gas. Verwendung: Reduktionsmittel, Konservierungsstoff (E 220). In Atmosphäre: SO₂ → SO₃ → **saurer Regen**: SO₂ + H₂O → H₂SO₃ bzw. SO₃ + H₂O → H₂SO₄. Saurer Regen schädigt Wälder, Gewässer, Böden, Bauwerke (Kalkstein: CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂). **Vulkanismus**: große Mengen SO₂ + H₂S freigesetzt → in Stratosphäre zu Sulfat-Ärosolen → reflektieren Sonnenlicht → kühlende Wirkung (vulkanischer Winter). In Biochemie: Disulfidbrücken (S–S) zwischen Cystein-Resten stabilisieren Proteinstruktur. Thiolgruppen (–SH) essenziell für viele Enzyme. **Glutathion** (schwefelhaltig) schützt Zellen vor oxidativem Stress.`,
      merksätze: [
        'Schwefel: Oxidationsstufen −2 (H₂S), 0 (S₈), +4 (SO₂), +6 (H₂SO₄). Schwefelsäure: zweiprotonig, starke Säure (1. Stufe vollständig). Kontaktverfahren: S → SO₂ → SO₃ → H₂SO₄ (Kat.: V₂O₅).',
        'Saurer Regen: SO₂/SO₃ + H₂O → H₂SO₃/H₂SO₄. Merksatz: „Erst das Wasser, dann die Säure!" BaSO₄: schwerlöslich, Röntgenkontrastmittel.'
      ],
      altfrage: {
        question: 'Welche Oxidationsstufe hat Schwefel in Schwefelsäure (H₂SO₄)?',
        answer: 'In H₂SO₄ hat Schwefel die Oxidationsstufe +6. Berechnung: 2·(+1) + x + 4·(−2) = 0 → x = +6. Dies ist die höchste stabile Oxidationsstufe des Schwefels, in der alle sechs Valenzelektronen abgegeben sind.'
      },
      klinischerBezug: '**Bariumsulfat** (BaSO₄) wird als Röntgenkontrastmittel für Magen-Darm-Trakt verwendet (Breischluck, Kontrasteinlauf). Obwohl Ba²⁺ hochgiftig ist, ist BaSO₄ ungefährlich — nahezu unlöslich in Wasser (Ksp ≈ 10⁻¹⁰) → passiert Körper unresorbiert. **Schwefelwasserstoff** (H₂S) ist starkes Atemgift, hemmt **Cytochrom-c-Oxidase** (Komplex IV der Atmungskette) — ähnlich wie Cyanid. In Pharmakologie enthalten viele Arzneimittel Schwefel: **Penicilline** (Thiazolidinring), **Sulfonamide** (Antibiotika).',
      selfTest: [
        {
          question: 'Welcher Katalysator wird beim Kontaktverfahren zur Herstellung von Schwefelsäure verwendet?',
          options: [
            'Platin (Pt)',
            'Eisenoxid (Fe₂O₃)',
            'Vanadiumpentoxid (V₂O₅)',
            'Nickel (Ni)',
            'Manganoxid (MnO₂)'
          ],
          correctIndex: 2,
          explanation: 'Beim Kontaktverfahren wird V₂O₅ (Vanadiumpentoxid) als Katalysator für die Oxidation von SO₂ zu SO₃ eingesetzt: 2 SO₂ + O₂ → 2 SO₃. Anschließend reagiert SO₃ mit Wasser zu H₂SO₄.'
        },
        {
          question: 'Warum ist Bariumsulfat (BaSO₄) als Röntgenkontrastmittel ungefährlich, obwohl Ba²⁺ giftig ist?',
          options: [
            'BaSO₄ enthält kein Barium.',
            'BaSO₄ wird im Magen neutralisiert.',
            'BaSO₄ ist in Wasser nahezu unlöslich und setzt daher keine Ba²⁺-Ionen frei.',
            'BaSO₄ wird sofort über die Niere ausgeschieden.',
            'BaSO₄ wird durch die Magensäure zu ungiftigem BaCl₂ umgewandelt.'
          ],
          correctIndex: 2,
          explanation: 'BaSO₄ hat ein extrem niedriges Löslichkeitsprodukt (Ksp ≈ 10⁻¹⁰), sodass praktisch keine freien Ba²⁺-Ionen in Lösung gehen. Es passiert den Magen-Darm-Trakt unresorbiert und wird ausgeschieden.'
        },
        {
          question: 'Welche Aussage zum sauren Regen ist korrekt?',
          options: [
            'Saurer Regen entsteht durch CO₂ in der Atmosphäre.',
            'Saurer Regen entsteht durch Reaktion von SO₂/SO₃ und NOₓ mit Regenwasser zu H₂SO₄ bzw. HNO₃.',
            'Saurer Regen hat einen pH-Wert über 7.',
            'Saurer Regen ist ausschließlich ein natürliches Phänomen.',
            'Saurer Regen entsteht durch die Reaktion von Ozon mit Regenwasser.'
          ],
          correctIndex: 1,
          explanation: 'Saurer Regen entsteht hauptsächlich durch SO₂ und NOₓ aus der Verbrennung fossiler Brennstoffe. In der Atmosphäre werden diese zu H₂SO₄ und HNO₃ umgewandelt, die den pH-Wert des Regens unter den natürlichen Wert von ca. 5,6 (durch CO₂) senken.'
        }
      ]
    }
  ]
};
