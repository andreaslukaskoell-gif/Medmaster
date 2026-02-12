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
      content: `Die **Zellatmung** (aerobe Dissimilation) ist der zentrale Stoffwechselweg, durch den Zellen die in Glucose gespeicherte chemische Energie in Form von ATP (Adenosintriphosphat) nutzbar machen. Die Gesamtgleichung lautet: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + Energie (ca. 38 ATP). Dieser Prozess gliedert sich in drei aufeinanderfolgende Teilschritte: die **Glykolyse** im Cytoplasma, den **Citratzyklus** (Krebs-Zyklus) in der mitochondrialen Matrix und die **Atmungskette** (oxidative Phosphorylierung) an der inneren Mitochondrienmembran. Die Zellatmung ist das Gegenstück zur Fotosynthese — während die Fotosynthese Lichtenergie in chemische Energie umwandelt, setzt die Zellatmung diese chemische Energie wieder frei. Praktisch alle eukaryotischen Zellen betreiben Zellatmung, da ATP als universelle Energiewährung für nahezu alle zellulären Prozesse benötigt wird.

Die **Glykolyse** (griech. „Zuckerspaltung“) findet im Cytoplasma statt und ist der erste Schritt der Zellatmung. Sie ist anaerob, benötigt also keinen Sauerstoff. In zehn enzymatischen Reaktionen wird ein Molekül Glucose (C₆) in zwei Moleküle **Pyruvat** (C₃) gespalten. Die Nettobilanz der Glykolyse beträgt: **2 ATP** (es werden zunächst 2 ATP investiert und 4 ATP gewonnen) und **2 NADH + H⁺** (Reduktionsäquivalente, die später in der Atmungskette zur ATP-Synthese genutzt werden). Schlüsselenzyme der Glykolyse sind die Hexokinase (Schritt 1: Phosphorylierung von Glucose zu Glucose-6-phosphat), die Phosphofructokinase (Schritt 3: geschwindigkeitsbestimmendes Enzym, allosterisch reguliert) und die Pyruvatkinase (Schritt 10: Bildung von Pyruvat). Bei Sauerstoffmangel (anaerobe Bedingungen) wird Pyruvat nicht in den Citratzyklus eingeschleust, sondern zu **Lactat** reduziert (Milchsäuregärung) oder — bei Hefen — zu Ethanol und CO₂ (alkoholische Gärung). Die Milchsäuregärung liefert nur 2 ATP pro Glucose und ist daher deutlich weniger effizient als die vollständige aerobe Zellatmung.

Unter aeroben Bedingungen wird Pyruvat durch die **Pyruvat-Dehydrogenase** zu Acetyl-CoA decarboxyliert (oxidative Decarboxylierung: Pyruvat + CoA + NAD⁺ → Acetyl-CoA + CO₂ + NADH). Acetyl-CoA tritt in den **Citratzyklus** ein, der in der mitochondrialen Matrix abläuft. Pro Umlauf des Zyklus entstehen: 3 NADH, 1 FADH₂, 1 GTP (≈ 1 ATP) und 2 CO₂. Da aus einem Glucose-Molekül zwei Acetyl-CoA gebildet werden, muss der Citratzyklus zweimal durchlaufen werden — die Bilanz pro Glucose ist somit: 6 NADH, 2 FADH₂, 2 GTP und 4 CO₂. Die **Atmungskette** an der inneren Mitochondrienmembran ist der letzte und ergiebigste Schritt. Die Elektronen von NADH und FADH₂ werden über vier Proteinkomplexe (Komplex I–IV) auf den terminalen Elektronenakzeptor Sauerstoff übertragen, wobei ein Protonengradient über der inneren Mitochondrienmembran aufgebaut wird (Chemiosmose). Die ATP-Synthase nutzt diesen Gradienten, um aus ADP + Pᵢ ATP zu synthetisieren. Pro NADH werden etwa **2,5 ATP**, pro FADH₂ etwa **1,5 ATP** gewonnen. Die Gesamtbilanz der aeroben Zellatmung ergibt somit ca. **30–32 ATP** pro Glucose (nach neuerer Berechnung) bzw. die klassische Angabe von **~38 ATP** unter idealen Bedingungen.`,
      merksaetze: [
        'Zellatmung: Glykolyse (Cytoplasma, 2 ATP, anaerob) → Citratzyklus (Matrix, 2 GTP, 8 NADH, 2 FADH₂) → Atmungskette (innere Membran, ~34 ATP). Gesamtbilanz: ~38 ATP pro Glucose.',
        'Glykolyse: Glucose → 2 Pyruvat + 2 ATP + 2 NADH. Ohne O₂: Pyruvat → Lactat (Milchsäuregärung, nur 2 ATP) oder Ethanol + CO₂ (alkoholische Gärung).'
      ],
      altfrage: {
        question: 'Wo findet die Glykolyse statt und wie lautet ihre Nettobilanz?',
        answer: 'Die Glykolyse findet im Cytoplasma statt (nicht im Mitochondrium). Pro Glucose-Molekül werden netto 2 ATP und 2 NADH + H⁺ gewonnen. Glucose wird dabei in zwei Moleküle Pyruvat (C₃) gespalten. Die Glykolyse verläuft anaerob (ohne Sauerstoff).'
      },
      klinischerBezug: 'Bei intensiver Muskelarbeit reicht die Sauerstoffversorgung nicht aus, um die gesamte Zellatmung aufrechtzuerhalten. Es kommt zur anaeroben Glykolyse mit Lactatbildung — das Lactat senkt den pH-Wert im Muskel und verursacht die typische Muskelermüdung. Tumorzellen zeigen häufig den sogenannten Warburg-Effekt: Sie betreiben auch bei ausreichender Sauerstoffversorgung vermehrt aerobe Glykolyse mit Lactatproduktion, was in der PET-Diagnostik (erhöhte ¹⁸F-FDG-Aufnahme) zur Tumorerkennung genutzt wird.',
      selfTest: [
        {
          question: 'Wie viele ATP-Moleküle werden in der Glykolyse netto pro Glucose gewonnen?',
          options: [
            '4 ATP',
            '2 ATP',
            '36 ATP',
            '0 ATP'
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
            'An der inneren Mitochondrienmembran'
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
            'Es wird direkt in den Citratzyklus eingeschleust.'
          ],
          correctIndex: 2,
          explanation: 'Bei Sauerstoffmangel wird Pyruvat im menschlichen Muskel durch die Lactatdehydrogenase zu Lactat reduziert (Milchsäuregärung). Dabei wird NADH zu NAD⁺ reoxidiert, sodass die Glykolyse weiterlaufen kann. Die alkoholische Gärung (Ethanol + CO₂) kommt bei Hefen vor, nicht beim Menschen.'
        }
      ]
    },
    {
      id: 'chem-kap12-2',
      title: 'Fotosynthese',
      content: `Die **Fotosynthese** ist der biochemische Prozess, bei dem Pflanzen, Algen und Cyanobakterien Lichtenergie in chemische Energie umwandeln. Die Gesamtgleichung lautet: 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂ (unter Lichteinwirkung). Dieser Prozess findet in den **Chloroplasten** statt und gliedert sich in zwei aufeinanderfolgende Phasen: die **Lichtreaktion** (lichtabhängige Reaktion) in den Thylakoidmembranen und die **Dunkelreaktion** (lichtunabhängige Reaktion, Calvin-Zyklus) im Stroma des Chloroplasten. Die Fotosynthese ist die wichtigste biochemische Reaktion auf der Erde — sie ist die Grundlage nahezu aller Nahrungsketten und erzeugt den Sauerstoff in unserer Atmosphäre. Die Bezeichnung „Dunkelreaktion“ ist irreführend: Sie benötigt zwar kein Licht direkt, läuft aber überwiegend tagsüber ab, da sie auf die Produkte der Lichtreaktion (ATP und NADPH) angewiesen ist.

Die **Lichtreaktion** findet an den **Thylakoidmembranen** statt und dient der Umwandlung von Lichtenergie in chemische Energie in Form von ATP und NADPH. Das Licht wird von **Chlorophyll a und b** sowie akzessorischen Pigmenten (Carotinoide) in den Antennenkomplexen absorbiert. Es gibt zwei Fotosysteme: **Fotosystem II (PS II, P680)** und **Fotosystem I (PS I, P700)**. Im PS II wird Wasser durch die **Fotolyse** gespalten: 2 H₂O → O₂ + 4 H⁺ + 4 e⁻ — dies ist die Quelle des freigesetzten Sauerstoffs. Die Elektronen durchlaufen eine Elektronentransportkette (ETC) zwischen PS II und PS I, wobei ein Protonengradient über der Thylakoidmembran aufgebaut wird. Die **ATP-Synthase** nutzt diesen Gradienten zur ATP-Synthese (Fotophosphorylierung). Im PS I werden die Elektronen schließlich auf NADP⁺ übertragen, wobei **NADPH + H⁺** entsteht. Die Bilanz der Lichtreaktion ist somit: H₂O + NADP⁺ + ADP + Pᵢ → O₂ + NADPH + ATP. Es gibt auch einen zyklischen Elektronentransport (nur PS I beteiligt), bei dem ausschließlich ATP, aber kein NADPH gebildet wird.

Die **Dunkelreaktion** (Calvin-Zyklus) findet im **Stroma** des Chloroplasten statt und nutzt das in der Lichtreaktion gebildete ATP und NADPH, um CO₂ in Glucose umzuwandeln. Der Zyklus besteht aus drei Phasen: (1) **CO₂-Fixierung**: Das Enzym **RuBisCO** (Ribulose-1,5-bisphosphat-Carboxylase/Oxygenase) katalysiert die Bindung von CO₂ an Ribulose-1,5-bisphosphat (C₅), wobei zwei Moleküle 3-Phosphoglycerat (C₃) entstehen. RuBisCO ist das häufigste Enzym der Erde. (2) **Reduktion**: 3-Phosphoglycerat wird unter Verbrauch von ATP und NADPH zu Glycerinaldehyd-3-phosphat (G3P) reduziert. (3) **Regeneration**: Der Großteil des G3P wird unter ATP-Verbrauch zu Ribulose-1,5-bisphosphat regeneriert, um den Zyklus aufrechtzuerhalten. Für die Fixierung von 6 CO₂-Molekülen (= 1 Glucose) werden insgesamt 18 ATP und 12 NADPH benötigt. Pro 6 Zyklusdurchläufen werden 12 G3P gebildet, von denen 10 zur Regeneration dienen und 2 für die Glucosesynthese abgezweigt werden. Die Gesamtbilanz der Fotosynthese integriert Licht- und Dunkelreaktion und zeigt, wie Lichtenergie letztlich in den chemischen Bindungen der Glucose gespeichert wird.`,
      merksaetze: [
        'Fotosynthese: Lichtreaktion (Thylakoidmembran) → ATP + NADPH + O₂. Dunkelreaktion/Calvin-Zyklus (Stroma) → CO₂-Fixierung durch RuBisCO → Glucose. 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂.',
        'Lichtreaktion: PS II (P680, Fotolyse des Wassers → O₂) → Elektronentransportkette → PS I (P700, NADPH-Bildung). Calvin-Zyklus: 6 CO₂ benötigen 18 ATP + 12 NADPH.'
      ],
      altfrage: {
        question: 'Wo genau findet die Lichtreaktion der Fotosynthese statt und welche Produkte entstehen?',
        answer: 'Die Lichtreaktion findet an den Thylakoidmembranen der Chloroplasten statt. Es entstehen ATP (durch Fotophosphorylierung), NADPH + H⁺ (durch Reduktion von NADP⁺ im Fotosystem I) und O₂ (durch Fotolyse des Wassers im Fotosystem II). ATP und NADPH werden anschließend im Calvin-Zyklus (Stroma) für die CO₂-Fixierung benötigt.'
      },
      klinischerBezug: 'Die Fotosynthese hat zwar keinen direkten klinischen Bezug, aber indirekte medizinische Relevanz: Herbizide wie Paraquat blockieren die Elektronentransportkette der Fotosynthese und erzeugen reaktive Sauerstoffspezies (ROS). Paraquat-Vergiftungen beim Menschen führen zu schweren Lungenschäden (Lungenödem, Fibrose), da Paraquat auch in menschlichen Zellen oxidativen Stress verursacht. In der Pharmakologie werden pflanzliche Sekundärmetabolite, die durch Fotosynthese-abhängige Stoffwechselwege entstehen, als Wirkstoffe genutzt (z. B. Vincristin als Zytostatikum).',
      selfTest: [
        {
          question: 'In welchem Kompartiment des Chloroplasten läuft der Calvin-Zyklus ab?',
          options: [
            'In den Thylakoidmembranen',
            'Im Stroma',
            'Im Intermembranraum',
            'In der äußeren Chloroplastenmembran'
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
            'Pyruvatkinase'
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
            'Aus der Luft'
          ],
          correctIndex: 2,
          explanation: 'Der freigesetzte Sauerstoff stammt aus der Fotolyse des Wassers im Fotosystem II: 2 H₂O → O₂ + 4 H⁺ + 4 e⁻. Isotopenexperimente mit ¹⁸O-markiertem Wasser haben dies eindeutig bewiesen.'
        }
      ]
    },
    {
      id: 'chem-kap12-3',
      title: 'Schwefelchemie (NEU 2024!)',
      content: `**Schwefel** (S) ist ein Nichtmetall der 6. Hauptgruppe (Chalkogene) mit der Ordnungszahl 16 und der Elektronenkonfiguration [Ne] 3s² 3p⁴. Schwefel kommt in der Natur sowohl elementar (z. B. an Vulkanen) als auch in zahlreichen Verbindungen vor: als Sulfide (z. B. Pyrit FeS₂, Bleiglanz PbS, Zinkblende ZnS), als Sulfate (z. B. Gips CaSO₄·2H₂O, Schwerspat BaSO₄) und als Bestandteil organischer Verbindungen (Aminosäuren Cystein und Methionin, Coenzym A). Elementarer Schwefel bildet bei Raumtemperatur gelbe, rhombische Kristalle aus S₈-Ringen (Cyclooctaschwefel). Schwefel ist in den Oxidationsstufen −2 (Sulfide, H₂S), 0 (elementar), +4 (Schwefeldioxid SO₂, Schweflige Säure H₂SO₃) und +6 (Schwefeltrioxid SO₃, Schwefelsäure H₂SO₄) stabil. Die Vielfalt der Oxidationsstufen macht Schwefel zu einem wichtigen Element in Redoxreaktionen. Schwefelwasserstoff (H₂S) ist ein giftiges, nach faulen Eiern riechendes Gas, das bei der Verwesung schwefelhaltiger organischer Substanzen entsteht und bereits in geringen Konzentrationen toxisch wirkt.

**Schwefelsäure** (H₂SO₄) ist eine der wichtigsten Industriechemikalien weltweit und wird im **Kontaktverfahren** hergestellt: (1) Verbrennung von Schwefel: S + O₂ → SO₂, (2) katalytische Oxidation: 2 SO₂ + O₂ → 2 SO₃ (Katalysator: V₂O₅), (3) Reaktion mit Wasser: SO₃ + H₂O → H₂SO₄. Schwefelsäure ist eine starke, zweiprotonige Säure, die in zwei Stufen dissoziiert: H₂SO₄ → H⁺ + HSO₄⁻ (1. Stufe, vollständig) und HSO₄⁻ ⇌ H⁺ + SO₄²⁻ (2. Stufe, unvollständig, pKs₂ ≈ 1,9). Konzentrierte Schwefelsäure wirkt stark hygroskopisch (wasseranziehend) und als Oxidationsmittel. Die Reaktion mit Wasser ist stark exotherm — daher gilt die Sicherheitsregel: „Erst das Wasser, dann die Säure, sonst geschieht das Ungeheure“ (Säure immer ins Wasser geben, nie umgekehrt!). Sulfate (SO₄²⁻) sind die Salze der Schwefelsäure. Wichtige Sulfate sind Natriumsulfat (Na₂SO₄, Glaubersalz), Calciumsulfat (CaSO₄, Gips) und Bariumsulfat (BaSO₄, in Wasser schwerlöslich, wird als Röntgenkontrastmittel verwendet).

**Schwefeldioxid** (SO₂) entsteht bei der Verbrennung schwefelhaltiger Brennstoffe und bei Vulkanausbrüchen. Es ist ein farbloses, stechend riechendes Gas, das als Reduktionsmittel und als Konservierungsstoff (E 220) in der Lebensmittelindustrie eingesetzt wird. In der Atmosphäre wird SO₂ zu SO₃ oxidiert, das mit Regenwasser Schwefelsäure bildet — der **saure Regen**: SO₂ + H₂O → H₂SO₃ (schweflige Säure) bzw. SO₃ + H₂O → H₂SO₄. Saurer Regen schädigt Wälder, Gewässer, Böden und Bauwerke (insbesondere Kalkstein und Marmor: CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂). **Vulkanismus** ist eine bedeutende natürliche Quelle von Schwefelverbindungen: Bei Vulkanausbrüchen werden große Mengen SO₂ und H₂S freigesetzt, die in der Stratosphäre zu Sulfat-Aerosolen umgewandelt werden und durch Reflexion des Sonnenlichts eine kühlende Wirkung auf das Klima haben können (vulkanischer Winter). In der Biochemie spielt Schwefel eine wichtige Rolle: Disulfidbrücken (S–S) zwischen Cystein-Resten stabilisieren die Tertiärstruktur von Proteinen, Thiolgruppen (–SH) sind für die Funktion vieler Enzyme essenziell, und schwefelhaltige Verbindungen wie Glutathion schützen Zellen vor oxidativem Stress.`,
      merksaetze: [
        'Schwefel: Oxidationsstufen −2 (H₂S), 0 (S₈), +4 (SO₂), +6 (H₂SO₄). Schwefelsäure: zweiprotonig, starke Säure (1. Stufe vollständig). Kontaktverfahren: S → SO₂ → SO₃ → H₂SO₄ (Kat.: V₂O₅).',
        'Saurer Regen: SO₂/SO₃ + H₂O → H₂SO₃/H₂SO₄. Merksatz: „Erst das Wasser, dann die Säure!“ BaSO₄: schwerlöslich, Röntgenkontrastmittel.'
      ],
      altfrage: {
        question: 'Welche Oxidationsstufe hat Schwefel in Schwefelsäure (H₂SO₄)?',
        answer: 'In H₂SO₄ hat Schwefel die Oxidationsstufe +6. Berechnung: 2·(+1) + x + 4·(−2) = 0 → x = +6. Dies ist die höchste stabile Oxidationsstufe des Schwefels, in der alle sechs Valenzelektronen abgegeben sind.'
      },
      klinischerBezug: 'Bariumsulfat (BaSO₄) wird in der Radiologie als Röntgenkontrastmittel für die Darstellung des Magen-Darm-Trakts verwendet (Breischluck, Kontrasteinlauf). Obwohl Bariumionen (Ba²⁺) hochgiftig sind, ist BaSO₄ ungefährlich, da es in Wasser nahezu unlöslich ist (Ksp ≈ 10⁻¹⁰) und den Körper unresorbiert passiert. Schwefelwasserstoff (H₂S) ist ein starkes Atemgift, das die Cytochrom-c-Oxidase (Komplex IV der Atmungskette) hemmt — ähnlich wie Cyanid. In der Pharmakologie enthalten viele Arzneimittel Schwefel, z. B. Penicilline (Thiazolidinring) und Sulfonamide (Antibiotika).',
      selfTest: [
        {
          question: 'Welcher Katalysator wird beim Kontaktverfahren zur Herstellung von Schwefelsäure verwendet?',
          options: [
            'Platin (Pt)',
            'Eisenoxid (Fe₂O₃)',
            'Vanadiumpentoxid (V₂O₅)',
            'Nickel (Ni)'
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
            'BaSO₄ wird sofort über die Niere ausgeschieden.'
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
            'Saurer Regen ist ausschließlich ein natürliches Phänomen.'
          ],
          correctIndex: 1,
          explanation: 'Saurer Regen entsteht hauptsächlich durch SO₂ und NOₓ aus der Verbrennung fossiler Brennstoffe. In der Atmosphäre werden diese zu H₂SO₄ und HNO₃ umgewandelt, die den pH-Wert des Regens unter den natürlichen Wert von ca. 5,6 (durch CO₂) senken.'
        }
      ]
    }
  ]
};
