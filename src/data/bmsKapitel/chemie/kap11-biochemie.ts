import type { Kapitel } from '../types';

export const chemKap11: Kapitel = {
  id: 'chem-kap11',
  title: 'Biochemie',
  subject: 'chemie',
  icon: '🧫',
  estimatedTime: '30 Minuten',
  unterkapitel: [
    {
      id: 'chem-kap11-1',
      title: 'Kohlenhydrate',
      content: `**Kohlenhydrate** sind die häufigsten Biomoleküle der Erde. Funktion: Energiequelle, Energiespeicher, Strukturbausteine. Allgemeine Summenformel: Cₙ(H₂O)ₙ — daher „Kohlen-Hydrate".

**Monosaccharide** sind einfachste Zucker. Einteilung nach C-Anzahl: Triosen (C₃, Glycerinaldehyd), Pentosen (C₅, Ribose, Desoxyribose), Hexosen (C₆, Glucose, Fructose, Galactose). **Glucose** (Traubenzucker) ist zentral im Energiestoffwechsel. In wässriger Lösung liegt Glucose überwiegend cyclisch vor (α-Glucose, β-Glucose, Halbacetale). Wandeln sich über offenkettige Form ineinander um (Mutarotation).

**Disaccharide**: zwei Monosaccharide verknüpft über **glykosidische Bindung**. **Maltose** = Glucose + Glucose (α-1,4-Bindung). **Saccharose** = Glucose + Fructose (α,β-1,2-Bindung). **Lactose** = Galactose + Glucose (β-1,4-Bindung). Glykosidische Bindung entsteht durch Kondensation (H₂O-Abspaltung), wird durch Hydrolyse gespalten. Saccharose ist NICHT reduzierend — beide anomeren C-Atome an Bindung beteiligt.

**Polysaccharide**: viele Monosaccharid-Einheiten. **Stärke** (pflanzlicher Speicher): Amylose (unverzweigt, α-1,4, helikal) + Amylopektin (α-1,4 + α-1,6-Verzweigung alle 25 Glucose). **Glykogen** (tierischer Speicher, Leber + Muskel): ähnlich Amylopektin, stärker verzweigt (α-1,6 alle 8–12 Einheiten) → schneller Abbau. **Cellulose** (Pflanzenzellwand): β-1,4-verknüpfte Glucose, gestreckte Ketten, H-Brücken → stabile Fasern. Mensch kann Cellulose NICHT verdauen (fehlt Cellulase für β-glykosidische Bindung) — Ballaststoff. Wiederkäuer: Darmbakterien bauen Cellulose ab.`,
      merksätze: [
        'Stärke (α-1,4 + α-1,6): pflanzlicher Speicher. Glykogen (α-1,4 + α-1,6, stärker verzweigt): tierischer Speicher. Cellulose (β-1,4): Pflanzenzellwand, unverdaulich für Menschen.',
        'Wichtige Disaccharide: Maltose = Glc+Glc (α-1,4), Saccharose = Glc+Frc (α,β-1,2, nicht reduzierend!), Lactose = Gal+Glc (β-1,4).'
      ],
      altfrage: {
        question: 'Worin besteht der strukturelle Unterschied zwischen Stärke und Cellulose, obwohl beide aus Glucose aufgebaut sind?',
        answer: 'Stärke enthält α-1,4-glykosidische Bindungen (gewundene Helix-Struktur bei Amylose), Cellulose enthält β-1,4-glykosidische Bindungen (gestreckte Kettenstruktur). Der Mensch besitzt α-Amylase zum Stärkeabbau, aber keine Cellulase zum Celluloseabbau.'
      },
      klinischerBezug: '**Laktoseintoleranz** betrifft ca. 75 % der Weltbevölkerung. Ursache: Mangel an **Lactase** (β-Galactosidase), die Lactose in Glucose + Galactose spaltet. Unverdaute Lactose wird im Dickdarm von Bakterien fermentiert → Blähungen, Bauchkrämpfe, Durchfall. Diagnose: H₂-Atemtest. Therapie: laktosefreie Diät oder Lactase-Tabletten. **Galactosämie** ist seltene Erbkrankheit: Galactose wird nicht abgebaut, reichert sich toxisch an → Katarakt, Leberschäden, geistige Retardierung.',
      selfTest: [
        {
          question: 'Welche glykosidische Bindung verbindet die Glucose-Einheiten in Cellulose?',
          options: [
            'α-1,4-glykosidisch',
            'β-1,4-glykosidisch',
            'α-1,6-glykosidisch',
            'β-1,6-glykosidisch',
            'α-1,2-glykosidisch'
          ],
          correctIndex: 1,
          explanation: 'Cellulose enthält β-1,4-glykosidische Bindungen zwischen den Glucose-Einheiten. Stärke und Glykogen enthalten dagegen α-1,4-glykosidische Bindungen. Dieser Unterschied erklärt, warum der Mensch Stärke, aber nicht Cellulose verdauen kann.'
        },
        {
          question: 'Welches Disaccharid hat KEINE reduzierende Wirkung?',
          options: [
            'Maltose',
            'Lactose',
            'Saccharose',
            'Cellobiose',
            'Glucose'
          ],
          correctIndex: 2,
          explanation: 'Saccharose (Glucose + Fructose) ist nicht reduzierend, da beide anomeren C-Atome an der α,β-1,2-glykosidischen Bindung beteiligt sind und somit kein freies anomeres C-Atom für die Ringöffnung verfügbar ist.'
        },
        {
          question: 'Warum ist Glykogen als Energiespeicher schneller mobilisierbar als Stärke?',
          options: [
            'Glykogen enthält Fructose statt Glucose.',
            'Glykogen ist stärker verzweigt und bietet mehr Angriffspunkte für Enzyme.',
            'Glykogen hat β-glykosidische Bindungen.',
            'Glykogen ist wasserlöslicher als Stärke.',
            'Glykogen wird ausschließlich in der Niere gespeichert.'
          ],
          correctIndex: 1,
          explanation: 'Glykogen ist stärker verzweigt als Amylopektin (α-1,6-Verzweigung alle 8–12 statt alle 25 Einheiten). Die vielen nicht-reduzierenden Enden ermöglichen den gleichzeitigen Abbau durch viele Glykogen-Phosphorylase-Enzyme → schnellere Glucosefreisetzung.'
        }
      ]
    },
    {
      id: 'chem-kap11-2',
      title: 'Lipide',
      content: `**Lipide** sind heterogene Gruppe — Gemeinsamkeit: löslich in unpolaren Lösungsmitteln (lipophil/hydrophob), unlöslich in Wasser.

**Fettsäuren** sind langkettige Carbonsäuren (meist 12–24 C-Atome), Grundbausteine vieler Lipide. **Gesättigte Fettsäuren** (z. B. Palmitinsäure C16:0, Stearinsäure C18:0): keine Doppelbindungen, gestreckte Ketten, dichte Packung → Fette fest bei Raumtemperatur. **Ungesättigte Fettsäuren**: eine (einfach, z. B. Ölsäure C18:1) oder mehrere (mehrfach, z. B. Linolsäure C18:2, Linolensäure C18:3) cis-Doppelbindungen. Doppelbindung verursacht Knick → verhindert dichte Packung → Fette flüssig (Öle).

**Triglyceride** (Triacylglycerine) sind Ester aus Glycerin + drei Fettsäuren. Wichtigste Energiespeicherform (ca. 37 kJ/g, mehr als doppelt so viel wie Kohlenhydrate mit 17 kJ/g). Esterbindung durch Kondensation (Carboxylgruppe + OH-Gruppe). Hydrolyse (Verseifung mit NaOH/KOH) ergibt Glycerin + Seifen (Na-Salze der Fettsäuren). **Phospholipide**: Glycerin + zwei Fettsäuren + Phosphatgruppe mit polarer Kopfgruppe (z. B. Cholin → Lecithin). **Amphiphil**: hydrophiler Kopf + hydrophobe Schwänze. Bilden spontan Lipiddoppelschichten — Grundstruktur biologischer Membranen.

**Steroide**: Viering-Grundgerüst (drei Cyclohexan + ein Cyclopentanring, Sterangerüst). Wichtigstes Steroid: **Cholesterin** (Cholesterol). Funktion: Membranbaustein (reguliert Fluidität), Ausgangssubstanz für Gallensäuren, Vitamin D, Steroidhormone (Cortisol, Aldosteron, Testosteron, Östrogen, Progesteron). Cholesterin wird als **LDL** (Low Density Lipoprotein, „schlechtes" Cholesterin) und **HDL** (High Density Lipoprotein, „gutes" Cholesterin) transportiert. Weitere Lipide: **Wachse** (Ester aus langkettigen FS + langkettigen Alkoholen), **Sphingolipide** (Nervenzellmembranen, z. B. Sphingomyelin), **Eicosanoide** (Signalmoleküle wie Prostaglandine, Leukotriene aus Arachidonsäure C20:4).`,
      merksätze: [
        'Gesättigte FS: keine Doppelbindung, gerade Kette, fest. Ungesättigte FS: cis-Doppelbindung(en), Knick, flüssig. Triglyceride = Glycerin + 3 Fettsäuren (Hauptenergiespeicher).',
        'Phospholipide = amphiphil → Membrandoppelschicht. Cholesterin = Steroid → Membranfluidität + Vorstufe für Hormone, Gallensäuren, Vitamin D.'
      ],
      altfrage: {
        question: 'Warum haben ungesättigte Fettsäuren einen niedrigeren Schmelzpunkt als gesättigte?',
        answer: 'Die cis-Doppelbindungen in ungesättigten Fettsäuren verursachen einen Knick in der Kohlenstoffkette, der eine dichte, parallele Anlagerung der Ketten verhindert. Dadurch sind die Van-der-Waals-Kräfte zwischen den Molekülen schwächer, und der Schmelzpunkt ist niedriger.'
      },
      klinischerBezug: 'Erhöhte **LDL-Cholesterin**-Spiegel sind Hauptrisikofaktor für **Atherosklerose**. LDL lagert sich in Gefäßwand ab, wird oxidiert → Entzündungsreaktion → Plaquebildung → koronare Herzkrankheit, Schlaganfall. **Statine** (z. B. Atorvastatin, Simvastatin) hemmen **HMG-CoA-Reduktase** (Schlüsselenzym der Cholesterinsynthese) → senken LDL. Nebenwirkung: Myopathie, Rhabdomyolyse (selten). **Trans-Fettsäuren** (aus industrieller Teilhärtung) erhöhen Atherosklerose-Risiko zusätzlich — seit 2018 in EU weitgehend verboten.',
      selfTest: [
        {
          question: 'Woraus bestehen Triglyceride?',
          options: [
            'Glycerin + 3 Aminosäuren',
            'Glycerin + 3 Fettsäuren',
            'Glycerin + 2 Fettsäuren + 1 Phosphatgruppe',
            'Sphingosin + 1 Fettsäure + 1 Zuckerrest',
            'Glycerin + 2 Fettsäuren + 1 Aminosäure'
          ],
          correctIndex: 1,
          explanation: 'Triglyceride (Triacylglycerine) sind Ester aus einem Molekül Glycerin und drei Fettsäuren. Option C beschreibt ein Phospholipid, Option D ein Glykolipid.'
        },
        {
          question: 'Welche Eigenschaft macht Phospholipide zum idealen Membranbaustein?',
          options: [
            'Sie sind vollständig hydrophob.',
            'Sie sind vollständig hydrophil.',
            'Sie sind amphiphil (hydrophiler Kopf und hydrophobe Schwänze).',
            'Sie haben einen besonders hohen Schmelzpunkt.',
            'Sie enthalten ausschließlich gesättigte Fettsäuren.'
          ],
          correctIndex: 2,
          explanation: 'Phospholipide sind amphiphil: Der polare Kopf (Phosphatgruppe + Kopfgruppe) ist hydrophil, die beiden Fettsäureketten sind hydrophob. In Wasser bilden sie spontan Doppelschichten, in denen die hydrophoben Schwänze nach innen und die hydrophilen Köpfe nach außen zeigen.'
        },
        {
          question: 'Welches Steroid dient als Vorstufe für Steroidhormone und Gallensäuren?',
          options: [
            'Testosteron',
            'Cortisol',
            'Cholesterin',
            'Progesteron',
            'Arachidonsäure'
          ],
          correctIndex: 2,
          explanation: 'Cholesterin ist die Ausgangssubstanz für die Synthese aller Steroidhormone (Cortisol, Aldosteron, Testosteron, Östrogen, Progesteron), Gallensäuren und Vitamin D. Testosteron, Cortisol und Progesteron sind selbst Produkte der Cholesterinumwandlung.'
        }
      ]
    },
    {
      id: 'chem-kap11-3',
      title: 'Proteine',
      content: `**Aminosäuren** sind Bausteine der Proteine. Jede AS besitzt: Aminogruppe (–NH₂), Carboxylgruppe (–COOH), H-Atom, variable Seitenkette (R-Gruppe) — alle am zentralen α-C-Atom gebunden.

Bei physiologischem pH (7,4) liegen AS als **Zwitterionen** vor: Aminogruppe protoniert (–NH₃⁺), Carboxylgruppe deprotoniert (–COO⁻). Es gibt 20 proteinogene AS. Einteilung nach Seitenkette: unpolar/hydrophob (Gly, Ala, Val, Leu, Ile, Pro, Phe, Trp, Met), polar/ungeladen (Ser, Thr, Asn, Gln, Cys, Tyr), positiv geladen/basisch (Lys, Arg, His), negativ geladen/sauer (Asp, Glu). Acht AS sind essenziell (müssen mit Nahrung aufgenommen werden).

**Peptidbindung** entsteht durch Kondensation: Carboxylgruppe + Aminogruppe unter H₂O-Abspaltung → –CO–NH–. Peptidbindung hat partiellen Doppelbindungscharakter (Mesomerie C=O ↔ C–N), daher planar, nicht frei drehbar. Rotation nur um Bindungen zum α-C-Atom (Φ- und Ψ-Winkel, Ramachandran-Plot). Oligopeptide: wenige AS (2–10), Polypeptide: viele AS. Ab ca. 100 AS: Protein.

**Proteinstruktur**: (1) **Primärstruktur** — lineare AS-Abfolge (Sequenz), bestimmt durch DNA. (2) **Sekundärstruktur** — lokale Faltungsmuster, stabilisiert durch H-Brücken zwischen C=O und N–H des Peptidrückgrats. Häufigste: **α-Helix** (rechtsgängige Schraube, 3,6 AS pro Windung), **β-Faltblatt** (parallele/antiparallele Stränge). (3) **Tertiärstruktur** — gesamte 3D-Faltung einer Polypeptidkette. Stabilisiert durch: hydrophobe Wechselwirkungen, Disulfidbrücken (S–S zwischen Cystein), ionische Wechselwirkungen, H-Brücken der Seitenketten. (4) **Quartärstruktur** — Anordnung mehrerer Untereinheiten (z. B. Hämoglobin: 2α + 2β). **Denaturierung** (Hitze, extreme pH, Lösungsmittel) zerstört Sekundär- bis Quartärstruktur, NICHT Primärstruktur.`,
      merksätze: [
        'Proteinstruktur: Primär (Sequenz) → Sekundär (α-Helix, β-Faltblatt, H-Brücken) → Tertiär (3D-Faltung, Disulfidbrücken) → Quartär (mehrere Untereinheiten). Denaturierung zerstört 2°–4°, nicht 1°.',
        'Peptidbindung: –CO–NH– (partieller Doppelbindungscharakter → planar, nicht frei drehbar). Aminosäuren sind bei pH 7,4 Zwitterionen (NH₃⁺, COO⁻).'
      ],
      altfrage: {
        question: 'Welche Kräfte stabilisieren die Tertiärstruktur eines Proteins?',
        answer: 'Die Tertiärstruktur wird durch verschiedene Wechselwirkungen der Seitenketten stabilisiert: hydrophobe Wechselwirkungen (im Proteininneren), Disulfidbrücken (S–S zwischen Cystein-Resten), ionische Wechselwirkungen (zwischen geladenen Seitenketten), Wasserstoffbrücken und Van-der-Waals-Kräfte.'
      },
      klinischerBezug: 'Bei der **Sichelzellanämie** führt eine Mutation in der Primärstruktur (Glutamat → Valin an Position 6 der β-Kette) zu veränderter Tertiär- und Quartärstruktur des Hämoglobins. Das mutierte **HbS** polymerisiert bei niedrigem pO₂ → verformt Erythrozyten zu Sichelzellen → Gefäßverschlüsse (schmerzhafte vasookklusive Krisen), hämolytische Anämie, Milzinfarkte, Schlaganfall. Therapie: Hydroxyurea (erhöht fetales Hb), Transfusionen, Stammzelltransplantation.',
      selfTest: [
        {
          question: 'Welche Aussage zur Peptidbindung ist korrekt?',
          options: [
            'Sie ist frei drehbar und flexibel.',
            'Sie hat partiellen Doppelbindungscharakter und ist planar.',
            'Sie wird durch Disulfidbrücken stabilisiert.',
            'Sie verbindet die Seitenketten der Aminosäuren.',
            'Sie entsteht durch Oxidation zweier Aminogruppen.'
          ],
          correctIndex: 1,
          explanation: 'Die Peptidbindung (–CO–NH–) hat durch Mesomerie einen partiellen Doppelbindungscharakter, der sie planar und nicht frei drehbar macht. Sie verbindet das Rückgrat der Aminosäuren (nicht die Seitenketten) und ist keine Disulfidbrücke.'
        },
        {
          question: 'Welche Strukturebene des Proteins wird durch Denaturierung NICHT zerstört?',
          options: [
            'Sekundärstruktur',
            'Tertiärstruktur',
            'Quartärstruktur',
            'Primärstruktur',
            'Alle Strukturebenen werden gleichmäßig zerstört'
          ],
          correctIndex: 3,
          explanation: 'Die Denaturierung zerstört die räumliche Faltung (Sekundär- bis Quartärstruktur), nicht aber die Primärstruktur (Aminosäuresequenz), da die kovalenten Peptidbindungen erhalten bleiben.'
        },
        {
          question: 'Aus wie vielen Untereinheiten besteht Hämoglobin?',
          options: [
            '1 (Monomer)',
            '2 (Dimer)',
            '4 (Tetramer: 2α + 2β)',
            '6 (Hexamer)',
            '8 (Oktamer: 4α + 4β)'
          ],
          correctIndex: 2,
          explanation: 'Hämoglobin ist ein Tetramer aus 2 α- und 2 β-Untereinheiten (Quartärstruktur). Jede Untereinheit trägt eine Häm-Gruppe mit einem Fe²⁺-Ion, das O₂ binden kann.'
        }
      ]
    },
    {
      id: 'chem-kap11-4',
      title: 'Enzyme',
      diagram: 'enzyme-substrate',
      content: `**Enzyme** sind biologische Katalysatoren. Sie beschleunigen Reaktionen um Faktor 10⁶ bis 10¹² durch Herabsetzen der Aktivierungsenergie. Meist Proteine (Ausnahme: Ribozyme = katalytische RNA).

Enzyme sind hochspezifisch — katalysieren nur bestimmte Reaktionen mit bestimmten Substraten. **Schlüssel-Schloss-Modell** (Fischer, 1894): Substrat und aktives Zentrum sind komplementär geformt. **Induced-Fit-Modell** (Koshland, 1958): realistischer. Aktives Zentrum passt sich flexibel an Substrat an — Enzym und Substrat formen sich gegenseitig. Enzym-Substrat-Komplex (ES) → Enzym-Produkt-Komplex → Produkt wird freigesetzt.

**Michaelis-Menten-Kinetik** beschreibt Geschwindigkeit enzymkatalysierter Reaktionen. Gleichung: **v = (Vmax · [S]) / (Km + [S])**. Bei niedriger [S] (<<Km): v steigt nahezu linear. Bei hoher [S] (>>Km): v nähert sich **Vmax** asymptotisch (Sättigung — alle aktiven Zentren besetzt). **Km** ist [S] bei v = Vmax/2. Niedriger Km = hohe Substrataffinität. Vmax = kcat · [E]total. kcat = Wechselzahl (Turnover Number, Substratmoleküle pro Enzym pro Sekunde).

**Enzymhemmung**: **Kompetitiv** — Inhibitor bindet ans aktive Zentrum, konkurriert mit Substrat. Km steigt (scheinbar geringere Affinität), Vmax bleibt gleich (durch [S]-Erhöhung überwindbar). **Nicht-kompetitiv** — Inhibitor bindet an allosterische Stelle (nicht aktives Zentrum), verändert Konformation. [S]-Erhöhung kann Inhibitor NICHT verdrängen: Vmax sinkt, Km bleibt gleich. **Unkompetitiv** — Inhibitor bindet nur an ES-Komplex: Km UND Vmax sinken. **Irreversibel** — Inhibitor zerstört Enzym dauerhaft (z. B. Schwermetalle, Nervengifte). Lineweaver-Burk-Diagramm (1/v vs. 1/[S]): kompetitiv → gleicher y-Achsenabschnitt, nicht-kompetitiv → gleicher x-Achsenabschnitt, unkompetitiv → parallele Geraden.`,
      merksätze: [
        'Michaelis-Menten: v = Vmax·[S]/(Km+[S]). Km = [S] bei v = Vmax/2. Kleiner Km = hohe Affinität. Bei [S] >> Km → v ≈ Vmax (Sättigung).',
        'Kompetitive Hemmung: Km↑, Vmax gleich (Substrat kann verdrängen). Nicht-kompetitive Hemmung: Km gleich, Vmax↓ (Substrat kann NICHT verdrängen).'
      ],
      altfrage: {
        question: 'Wie unterscheiden sich kompetitive und nicht-kompetitive Hemmung hinsichtlich Km und Vmax?',
        answer: 'Kompetitive Hemmung: Km steigt (scheinbar geringere Affinität), Vmax bleibt gleich (durch [S]-Erhöhung überwindbar). Nicht-kompetitive Hemmung: Km bleibt gleich, Vmax sinkt (nicht durch [S]-Erhöhung überwindbar, da Inhibitor nicht am aktiven Zentrum bindet).'
      },
      klinischerBezug: '**ACE-Hemmer** (z. B. Ramipril, Enalapril) sind kompetitive Inhibitoren des **Angiotensin-Converting-Enzyme** (ACE). ACE wandelt Angiotensin I → Angiotensin II (Vasokonstriktor). Hemmung → Blutdrucksenkung. Nebenwirkung: Reizhusten (Bradykinin-Akkumulation). **Aspirin** (Acetylsalicylsäure) hemmt **Cyclooxygenase** (COX) irreversibel durch Acetylierung eines Serin-Rests → verminderte Prostaglandin- und Thromboxan-Synthese → schmerzlindernd, entzündungshemmend, gerinnungshemmend.',
      selfTest: [
        {
          question: 'Was gibt die Michaelis-Konstante Km an?',
          options: [
            'Die maximale Reaktionsgeschwindigkeit',
            'Die Substratkonzentration bei halbmaximaler Geschwindigkeit (Vmax/2)',
            'Die Anzahl der aktiven Zentren',
            'Die Aktivierungsenergie der Reaktion',
            'Die Konzentration des Enzyms im Gleichgewicht'
          ],
          correctIndex: 1,
          explanation: 'Km ist die Substratkonzentration, bei der die Reaktionsgeschwindigkeit genau die Hälfte der Maximalgeschwindigkeit beträgt (v = Vmax/2). Ein kleiner Km bedeutet hohe Substrataffinität.'
        },
        {
          question: 'Bei kompetitiver Hemmung:',
          options: [
            'sinkt Km und Vmax bleibt gleich.',
            'steigt Km und Vmax sinkt.',
            'steigt Km und Vmax bleibt gleich.',
            'bleiben Km und Vmax gleich.',
            'sinkt Km und Vmax sinkt ebenfalls.'
          ],
          correctIndex: 2,
          explanation: 'Der kompetitive Inhibitor konkurriert mit dem Substrat um das aktive Zentrum. Dadurch scheint die Affinität zu sinken (Km steigt), aber bei ausreichend hoher [S] kann der Inhibitor verdrängt werden → Vmax bleibt gleich.'
        },
        {
          question: 'Worin unterscheidet sich das Induced-Fit-Modell vom Schlüssel-Schloss-Modell?',
          options: [
            'Beim Induced-Fit gibt es kein aktives Zentrum.',
            'Beim Schlüssel-Schloss-Modell ändert das Enzym seine Form.',
            'Beim Induced-Fit passt sich das aktive Zentrum flexibel an das Substrat an.',
            'Das Induced-Fit-Modell beschreibt nur allosterische Enzyme.',
            'Im Schlüssel-Schloss-Modell verändert das Substrat seine Struktur.'
          ],
          correctIndex: 2,
          explanation: 'Im Induced-Fit-Modell (Koshland) ist das aktive Zentrum nicht starr, sondern passt sich bei der Substratbindung flexibel an. Im Schlüssel-Schloss-Modell (Fischer) wird eine starre Komplementarität angenommen, was die Realität weniger gut beschreibt.'
        }
      ]
    }
  ]
};
