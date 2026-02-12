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
      content: `**Kohlenhydrate** (Saccharide) sind die häufigsten Biomoleküle auf der Erde und dienen als Energiequelle, Energiespeicher und Strukturbausteine. Ihre allgemeine Summenformel lautet Cₙ(H₂O)ₙ — daher der Name „Kohlen-Hydrate“ (Kohlenstoff-Wasser-Verbindungen). **Monosaccharide** sind die einfachsten Zucker und werden nach der Anzahl der C-Atome benannt: Triosen (C₃, z. B. Glycerinaldehyd), Pentosen (C₅, z. B. Ribose, Desoxyribose) und Hexosen (C₆, z. B. Glucose, Fructose, Galactose). Glucose (Traubenzucker) ist das zentrale Monosaccharid im Energiestoffwechsel. In wässriger Lösung liegt Glucose überwiegend in der cyclischen Ringform vor (α-Glucose und β-Glucose, Halbacetale), die sich über die offenkettige Form ineinander umwandeln können (Mutarotation).

**Disaccharide** bestehen aus zwei Monosaccharid-Einheiten, die über eine **glykosidische Bindung** verknüpft sind. Wichtige Disaccharide sind: **Maltose** (Malzzucker) = Glucose + Glucose (α-1,4-Bindung), **Saccharose** (Rohr-/Rübenzucker) = Glucose + Fructose (α,β-1,2-Bindung), und **Lactose** (Milchzucker) = Galactose + Glucose (β-1,4-Bindung). Die glykosidische Bindung entsteht durch Kondensation (Wasserabspaltung) und kann durch Hydrolyse (enzymatisch oder sauer) wieder gespalten werden. Saccharose hat als einziges der genannten Disaccharide keine reduzierende Wirkung, da beide anomeren C-Atome an der glykosidischen Bindung beteiligt sind.

**Polysaccharide** sind Makromoleküle aus vielen Monosaccharid-Einheiten. **Stärke** (pflanzlicher Energiespeicher) besteht aus Amylose (unverzweigte α-1,4-Ketten, helikale Struktur) und Amylopektin (α-1,4-Ketten mit α-1,6-Verzweigungen ca. alle 25 Glucose-Einheiten). **Glykogen** (tierischer Energiespeicher, v. a. in Leber und Muskel) ähnelt dem Amylopektin, ist aber stärker verzweigt (α-1,6-Verzweigung ca. alle 8–12 Einheiten), was einen schnellen Abbau ermöglicht. **Cellulose** (Pflanzengerüstsubstanz) besteht aus β-1,4-verknüpften Glucose-Einheiten, die gestreckte Ketten bilden und über Wasserstoffbrücken zu stabilen Fasern aggregieren. Der Mensch kann Cellulose nicht verdauen, da ihm das Enzym Cellulase fehlt, das die β-glykosidische Bindung spalten kann — Cellulose ist daher ein Ballaststoff. Wiederkäuer können Cellulose mithilfe von Darmbakterien abbauen.`,
      merksaetze: [
        'Stärke (α-1,4 + α-1,6): pflanzlicher Speicher. Glykogen (α-1,4 + α-1,6, stärker verzweigt): tierischer Speicher. Cellulose (β-1,4): Pflanzenzellwand, unverdaulich für Menschen.',
        'Wichtige Disaccharide: Maltose = Glc+Glc (α-1,4), Saccharose = Glc+Frc (α,β-1,2, nicht reduzierend!), Lactose = Gal+Glc (β-1,4).'
      ],
      altfrage: {
        question: 'Worin besteht der strukturelle Unterschied zwischen Stärke und Cellulose, obwohl beide aus Glucose aufgebaut sind?',
        answer: 'Stärke enthält α-1,4-glykosidische Bindungen (gewundene Helix-Struktur bei Amylose), Cellulose enthält β-1,4-glykosidische Bindungen (gestreckte Kettenstruktur). Der Mensch besitzt α-Amylase zum Stärkeabbau, aber keine Cellulase zum Celluloseabbau.'
      },
      klinischerBezug: 'Laktoseintoleranz betrifft ca. 75 % der Weltbevölkerung und beruht auf einem Mangel an Lactase (β-Galactosidase), die Lactose in Glucose und Galactose spaltet. Unverdaute Lactose wird im Dickdarm von Bakterien fermentiert, was zu Blähungen, Bauchkrämpfen und Durchfall führt. Die Galactosämie ist eine seltene Erbkrankheit, bei der Galactose nicht abgebaut werden kann und sich toxisch anreichert.',
      selfTest: [
        {
          question: 'Welche glykosidische Bindung verbindet die Glucose-Einheiten in Cellulose?',
          options: [
            'α-1,4-glykosidisch',
            'β-1,4-glykosidisch',
            'α-1,6-glykosidisch',
            'β-1,6-glykosidisch'
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
            'Cellobiose'
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
            'Glykogen ist wasserlöslicher als Stärke.'
          ],
          correctIndex: 1,
          explanation: 'Glykogen ist stärker verzweigt als Amylopektin (α-1,6-Verzweigung alle 8–12 statt alle 25 Einheiten). Die vielen nicht-reduzierenden Enden ermöglichen den gleichzeitigen Abbau durch viele Glykogen-Phosphorylase-Enzyme → schnellere Glucosefreisetzung.'
        }
      ]
    },
    {
      id: 'chem-kap11-2',
      title: 'Lipide',
      content: `**Lipide** sind eine heterogene Gruppe von Biomolekülen, die sich durch ihre Löslichkeit in unpolaren Lösungsmitteln (lipophil/hydrophob) und ihre Unlöslichkeit in Wasser auszeichnen. **Fettsäuren** sind langkettige Carbonsäuren (meist 12–24 C-Atome) und bilden die Grundbausteine vieler Lipide. **Gesättigte Fettsäuren** (z. B. Palmitinsäure C16:0, Stearinsäure C18:0) haben keine Doppelbindungen und bilden gestreckte Ketten, die sich dicht zusammenlagern können — daher sind Fette mit hohem Anteil gesättigter Fettsäuren bei Raumtemperatur fest. **Ungesättigte Fettsäuren** enthalten eine (einfach ungesättigt, z. B. Ölsäure C18:1) oder mehrere (mehrfach ungesättigt, z. B. Linolsäure C18:2, Linolensäure C18:3) cis-Doppelbindungen, die einen Knick in der Kette verursachen und eine dichte Packung verhindern — diese Fette sind bei Raumtemperatur flüssig (Öle).

**Triglyceride** (Triacylglycerine) sind Ester aus Glycerin und drei Fettsäuren und stellen die wichtigste Energiespeicherform im Körper dar (ca. 37 kJ/g, mehr als doppelt so viel wie Kohlenhydrate mit 17 kJ/g). Die Esterbindung entsteht durch Kondensation der Carboxylgruppe der Fettsäure mit einer OH-Gruppe des Glycerins. Die Hydrolyse von Triglyceriden (Verseifung mit NaOH/KOH) ergibt Glycerin und Seifen (Natriumsalze der Fettsäuren). **Phospholipide** bestehen aus Glycerin, zwei Fettsäuren und einer Phosphatgruppe mit polarer Kopfgruppe (z. B. Cholin → Phosphatidylcholin = Lecithin). Sie sind **amphiphil** (haben einen hydrophilen Kopf und hydrophobe Schwänze) und bilden spontan Lipiddoppelschichten, die die Grundstruktur aller biologischen Membranen darstellen.

**Steroide** sind Lipide mit einem charakteristischen Viering-Grundgerüst (drei Cyclohexanringe und ein Cyclopentanring, das Sterangerüst). Das wichtigste Steroid ist **Cholesterin** (Cholesterol), das als Membranbaustein die Fluidität der Zellmembran reguliert und als Ausgangssubstanz für die Synthese von Gallensäuren, Vitamin D und Steroidhormonen (Cortisol, Aldosteron, Testosteron, Östrogen, Progesteron) dient. Cholesterin wird im Blut als LDL (Low Density Lipoprotein, „schlechtes“ Cholesterin) und HDL (High Density Lipoprotein, „gutes“ Cholesterin) transportiert. Weitere Lipidklassen sind **Wachse** (Ester aus langkettigen Fettsäuren und langkettigen Alkoholen), **Sphingolipide** (wichtig für Nervenzellmembranen, z. B. Sphingomyelin) und **Eicosanoide** (Signalmoleküle wie Prostaglandine und Leukotriene, die aus Arachidonsäure C20:4 gebildet werden).`,
      merksaetze: [
        'Gesättigte FS: keine Doppelbindung, gerade Kette, fest. Ungesättigte FS: cis-Doppelbindung(en), Knick, flüssig. Triglyceride = Glycerin + 3 Fettsäuren (Hauptenergiespeicher).',
        'Phospholipide = amphiphil → Membrandoppelschicht. Cholesterin = Steroid → Membranfluidität + Vorstufe für Hormone, Gallensäuren, Vitamin D.'
      ],
      altfrage: {
        question: 'Warum haben ungesättigte Fettsäuren einen niedrigeren Schmelzpunkt als gesättigte?',
        answer: 'Die cis-Doppelbindungen in ungesättigten Fettsäuren verursachen einen Knick in der Kohlenstoffkette, der eine dichte, parallele Anlagerung der Ketten verhindert. Dadurch sind die Van-der-Waals-Kräfte zwischen den Molekülen schwächer, und der Schmelzpunkt ist niedriger.'
      },
      klinischerBezug: 'Erhöhte LDL-Cholesterin-Spiegel sind ein Hauptrisikofaktor für Atherosklerose. LDL lagert sich in der Gefäßwand ab, wird oxidiert und löst eine Entzündungsreaktion aus, die zur Plaquebildung führt. Statine (z. B. Atorvastatin) hemmen die HMG-CoA-Reduktase — das Schlüsselenzym der Cholesterinsynthese — und senken so den LDL-Spiegel. Trans-Fettsäuren (aus industrieller Teilhärtung) erhöhen das Atherosklerose-Risiko zusätzlich.',
      selfTest: [
        {
          question: 'Woraus bestehen Triglyceride?',
          options: [
            'Glycerin + 3 Aminosäuren',
            'Glycerin + 3 Fettsäuren',
            'Glycerin + 2 Fettsäuren + 1 Phosphatgruppe',
            'Sphingosin + 1 Fettsäure + 1 Zuckerrest'
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
            'Sie haben einen besonders hohen Schmelzpunkt.'
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
            'Progesteron'
          ],
          correctIndex: 2,
          explanation: 'Cholesterin ist die Ausgangssubstanz für die Synthese aller Steroidhormone (Cortisol, Aldosteron, Testosteron, Östrogen, Progesteron), Gallensäuren und Vitamin D. Testosteron, Cortisol und Progesteron sind selbst Produkte der Cholesterinumwandlung.'
        }
      ]
    },
    {
      id: 'chem-kap11-3',
      title: 'Proteine',
      content: `**Aminosäuren** sind die Bausteine der Proteine. Jede Aminosäure besitzt eine Aminogruppe (–NH₂), eine Carboxylgruppe (–COOH), ein Wasserstoffatom und eine variable Seitenkette (R-Gruppe), die alle an das zentrale α-C-Atom gebunden sind. Bei physiologischem pH (7,4) liegen Aminosäuren als **Zwitterionen** vor: Die Aminogruppe ist protoniert (–NH₃⁺) und die Carboxylgruppe deprotoniert (–COO⁻). Es gibt 20 proteinogene Aminosäuren, die sich in ihren Seitenketten unterscheiden und in verschiedene Gruppen eingeteilt werden: unpolar/hydrophob (z. B. Glycin, Alanin, Valin, Leucin, Isoleucin, Prolin, Phenylalanin, Tryptophan, Methionin), polar/ungeladen (z. B. Serin, Threonin, Asparagin, Glutamin, Cystein, Tyrosin), positiv geladen/basisch (Lysin, Arginin, Histidin) und negativ geladen/sauer (Aspartat, Glutamat). Acht Aminosäuren sind für den Menschen essenziell und müssen mit der Nahrung aufgenommen werden.

Die **Peptidbindung** entsteht durch Kondensation zwischen der Carboxylgruppe einer Aminosäure und der Aminogruppe einer anderen unter Wasserabspaltung: –CO–NH–. Die Peptidbindung hat partiellen Doppelbindungscharakter (Mesomerie zwischen C=O und C–N), weshalb sie planar und nicht frei drehbar ist. Die Rotation ist nur um die Bindungen zum α-C-Atom möglich (Φ- und Ψ-Winkel im Ramachandran-Plot). Oligopeptide bestehen aus wenigen (2–10), Polypeptide aus vielen Aminosäuren. Ab einer Kettenlänge von ca. 100 Aminosäuren spricht man von einem Protein.

Die **Proteinstruktur** wird auf vier Ebenen beschrieben: (1) **Primärstruktur** — die lineare Abfolge der Aminosäuren in der Polypeptidkette (Aminosäuresequenz), bestimmt durch die DNA. (2) **Sekundärstruktur** — lokale räumliche Faltungsmuster, stabilisiert durch Wasserstoffbrücken zwischen C=O- und N–H-Gruppen des Peptidrückgrats. Die häufigsten Sekundärstrukturen sind die **α-Helix** (rechtsgängige Schraube, 3,6 Aminosäuren pro Windung) und das **β-Faltblatt** (parallele oder antiparallele Stränge). (3) **Tertiärstruktur** — die gesamte dreidimensionale Faltung einer einzelnen Polypeptidkette, stabilisiert durch hydrophobe Wechselwirkungen, Disulfidbrücken (S–S, zwischen Cystein-Resten), ionische Wechselwirkungen und Wasserstoffbrücken der Seitenketten. (4) **Quartärstruktur** — die Anordnung mehrerer Polypeptid-Untereinheiten zu einem funktionellen Proteinkomplex (z. B. Hämoglobin besteht aus 2 α- und 2 β-Untereinheiten). Die Denaturierung (durch Hitze, extreme pH-Werte oder Lösungsmittel) zerstört die Sekundär- bis Quartärstruktur, nicht aber die Primärstruktur.`,
      merksaetze: [
        'Proteinstruktur: Primär (Sequenz) → Sekundär (α-Helix, β-Faltblatt, H-Brücken) → Tertiär (3D-Faltung, Disulfidbrücken) → Quartär (mehrere Untereinheiten). Denaturierung zerstört 2°–4°, nicht 1°.',
        'Peptidbindung: –CO–NH– (partieller Doppelbindungscharakter → planar, nicht frei drehbar). Aminosäuren sind bei pH 7,4 Zwitterionen (NH₃⁺, COO⁻).'
      ],
      altfrage: {
        question: 'Welche Kräfte stabilisieren die Tertiärstruktur eines Proteins?',
        answer: 'Die Tertiärstruktur wird durch verschiedene Wechselwirkungen der Seitenketten stabilisiert: hydrophobe Wechselwirkungen (im Proteininneren), Disulfidbrücken (S–S zwischen Cystein-Resten), ionische Wechselwirkungen (zwischen geladenen Seitenketten), Wasserstoffbrücken und Van-der-Waals-Kräfte.'
      },
      klinischerBezug: 'Bei der Sichelzellanämie führt eine einzige Mutation in der Primärstruktur (Glutamat → Valin an Position 6 der β-Kette) zu einer veränderten Tertiär- und Quartärstruktur des Hämoglobins. Das mutierte HbS polymerisiert bei niedrigem Sauerstoffpartialdruck, verformt die Erythrozyten zu Sichelzellen und verursacht Gefäßverschlüsse. Dies zeigt, wie die Primärstruktur alle höheren Strukturebenen bestimmt.',
      selfTest: [
        {
          question: 'Welche Aussage zur Peptidbindung ist korrekt?',
          options: [
            'Sie ist frei drehbar und flexibel.',
            'Sie hat partiellen Doppelbindungscharakter und ist planar.',
            'Sie wird durch Disulfidbrücken stabilisiert.',
            'Sie verbindet die Seitenketten der Aminosäuren.'
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
            'Primärstruktur'
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
            '6 (Hexamer)'
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
      content: `**Enzyme** sind biologische Katalysatoren, die chemische Reaktionen im Körper um den Faktor 10⁶ bis 10¹² beschleunigen, indem sie die Aktivierungsenergie herabsetzen. Die meisten Enzyme sind Proteine (Ausnahme: Ribozyme sind katalytisch aktive RNA-Moleküle). Enzyme sind hochspezifisch — sie katalysieren nur bestimmte Reaktionen mit bestimmten Substraten. Diese Spezifität wird durch zwei Modelle erklärt: Das **Schlüssel-Schloss-Modell** (Emil Fischer, 1894) besagt, dass Substrat und aktives Zentrum komplementär geformt sein müssen wie ein Schlüssel ins Schloss passt. Das realistischere **Induced-Fit-Modell** (Daniel Koshland, 1958) beschreibt, dass sich das aktive Zentrum bei Substratbindung flexibel an das Substrat anpasst — Enzym und Substrat formen sich gegenseitig. Der Enzym-Substrat-Komplex (ES-Komplex) wird zum Enzym-Produkt-Komplex, und das Produkt wird freigesetzt.

Die **Michaelis-Menten-Kinetik** beschreibt die Geschwindigkeit enzymkatalysierter Reaktionen in Abhängigkeit von der Substratkonzentration [S]. Die Gleichung lautet: **v = (Vmax · [S]) / (Km + [S])**. Bei niedriger Substratkonzentration ([S] << Km) steigt v nahezu linear mit [S]. Bei hoher Substratkonzentration ([S] >> Km) nähert sich v der maximalen Geschwindigkeit **Vmax** asymptotisch an — alle aktiven Zentren sind dann mit Substrat besetzt (Sättigung). Die **Michaelis-Konstante Km** ist die Substratkonzentration, bei der v = Vmax/2 gilt. Ein niedriger Km-Wert bedeutet hohe Substrataffinität (das Enzym erreicht schon bei geringer [S] die halbe Maximalgeschwindigkeit). Vmax = kcat · [E]total, wobei kcat die Wechselzahl (Turnover Number) ist — die Zahl der Substratmoleküle, die ein Enzym pro Sekunde umsetzt.

**Enzymhemmung** (Inhibition) kann reversibel oder irreversibel sein. Bei der **kompetitiven Hemmung** bindet der Inhibitor an das aktive Zentrum und konkurriert mit dem Substrat um die Bindungsstelle. Der Km-Wert steigt (scheinbar geringere Affinität), aber Vmax bleibt gleich, da durch Erhöhung von [S] der Inhibitor verdrängt werden kann. Bei der **nicht-kompetitiven Hemmung** bindet der Inhibitor an eine allosterische Stelle (nicht am aktiven Zentrum) und verändert die Konformation des Enzyms. [S]-Erhöhung kann den Inhibitor nicht verdrängen: Vmax sinkt, Km bleibt gleich. Bei der **unkompetitiven Hemmung** bindet der Inhibitor nur an den ES-Komplex: Sowohl Km als auch Vmax sinken. Irreversible Hemmung (z. B. durch Schwermetallionen oder Nervengifte) zerstört das Enzym dauerhaft. Im Lineweaver-Burk-Diagramm (Doppelt-reziprok: 1/v vs. 1/[S]) lassen sich die Hemmtypen graphisch unterscheiden: kompetitiv → gleicher y-Achsenabschnitt, nicht-kompetitiv → gleicher x-Achsenabschnitt, unkompetitiv → parallele Geraden.`,
      merksaetze: [
        'Michaelis-Menten: v = Vmax·[S]/(Km+[S]). Km = [S] bei v = Vmax/2. Kleiner Km = hohe Affinität. Bei [S] >> Km → v ≈ Vmax (Sättigung).',
        'Kompetitive Hemmung: Km↑, Vmax gleich (Substrat kann verdrängen). Nicht-kompetitive Hemmung: Km gleich, Vmax↓ (Substrat kann NICHT verdrängen).'
      ],
      altfrage: {
        question: 'Wie unterscheiden sich kompetitive und nicht-kompetitive Hemmung hinsichtlich Km und Vmax?',
        answer: 'Kompetitive Hemmung: Km steigt (scheinbar geringere Affinität), Vmax bleibt gleich (durch [S]-Erhöhung überwindbar). Nicht-kompetitive Hemmung: Km bleibt gleich, Vmax sinkt (nicht durch [S]-Erhöhung überwindbar, da Inhibitor nicht am aktiven Zentrum bindet).'
      },
      klinischerBezug: 'ACE-Hemmer (z. B. Ramipril) sind kompetitive Inhibitoren des Angiotensin-Converting-Enzyme (ACE) und senken so den Blutdruck. Aspirin (Acetylsalicylsäure) hemmt die Cyclooxygenase (COX) irreversibel durch Acetylierung eines Serin-Rests im aktiven Zentrum → verminderte Prostaglandin- und Thromboxan-Synthese → schmerzlindernd, entzündungshemmend und gerinnungshemmend.',
      selfTest: [
        {
          question: 'Was gibt die Michaelis-Konstante Km an?',
          options: [
            'Die maximale Reaktionsgeschwindigkeit',
            'Die Substratkonzentration bei halbmaximaler Geschwindigkeit (Vmax/2)',
            'Die Anzahl der aktiven Zentren',
            'Die Aktivierungsenergie der Reaktion'
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
            'bleiben Km und Vmax gleich.'
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
            'Das Induced-Fit-Modell beschreibt nur allosterische Enzyme.'
          ],
          correctIndex: 2,
          explanation: 'Im Induced-Fit-Modell (Koshland) ist das aktive Zentrum nicht starr, sondern passt sich bei der Substratbindung flexibel an. Im Schlüssel-Schloss-Modell (Fischer) wird eine starre Komplementarität angenommen, was die Realität weniger gut beschreibt.'
        }
      ]
    }
  ]
};
