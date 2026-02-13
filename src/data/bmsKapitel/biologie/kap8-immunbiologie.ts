import type { Kapitel } from '../types';

export const bioKap8: Kapitel = {
  id: 'bio-kap8',
  title: 'Immunbiologie',
  subject: 'biologie',
  icon: '🛡️',
  estimatedTime: '30 Minuten',
  unterkapitel: [
    // ──────────────────────────────────────────────
    // 8.1 Angeborene Immunabwehr
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap8-1',
      title: 'Angeborene Immunabwehr',
      content:
        'Dein Körper kämpft ständig gegen Eindringlinge. Bakterien, Viren, Pilze, Parasiten — sie alle wollen rein. Das Immunsystem stoppt sie. Es gibt zwei Systeme: die **angeborene Immunabwehr** (sofort aktiv, unspezifisch, kein Gedächtnis) und die **adaptive Immunabwehr** (braucht Tage, hochspezifisch, merkt sich Erreger). Die angeborene Abwehr ist evolutionär älter — alle Tiere haben sie. Die adaptive gibt es nur bei Wirbeltieren.\n\n' +
        'Erste Verteidigungslinie: **physikalische und chemische Barrieren**. Die Haut ist die größte — ihre Hornschicht (Keratin) ist für die meisten Erreger undurchdringlich. Der Säureschutzmantel (pH 4-6) und **Defensine** (antimikrobielle Peptide) töten zusätzlich ab. Die Hautflora (Mikrobiom) konkurriert mit Eindringlingen um Platz. Die **Schleimhäute** produzieren Schleim (Mucus), der Erreger einfängt. In den Atemwegen transportieren **Flimmerhärchen** (mukoziliärer Apparat) den Schleim mit eingefangenen Erregern Richtung Rachen — du schluckst sie runter. Im Magen tötet die Magensäure (pH 1-2) die meisten ab. Speichel, Tränen und Nasensekret enthalten **Lysozym** — ein Enzym, das bakterielle Zellwände abbaut.\n\n' +
        'Überwinden Erreger die Barrieren, greifen die **zellulären Komponenten** ein. **Phagozyten** (Fresszellen) sind die Hauptakteure: **Makrophagen** (aus Monozyten differenziert) und **neutrophile Granulozyten**. Sie erkennen Erreger über **PRR** (Pattern Recognition Receptors), die konservierte mikrobielle Strukturen binden — **PAMPs** (Pathogen-Associated Molecular Patterns), z.B. Lipopolysaccharid (LPS) gramnegativer Bakterien oder Peptidoglykane grampositiver Bakterien. Nach Erkennung: Phagozytose. Der Erreger wird aufgenommen und im **Phagolysosom** durch reaktive Sauerstoffspezies und lysosomale Enzyme zerstört. **NK-Zellen** (Natürliche Killerzellen) töten virusinfizierte Zellen und Tumorzellen — sie erkennen Zellen, die keine oder veränderte MHC-I-Moleküle auf der Oberfläche tragen.\n\n' +
        'Das **Komplementsystem** ist ein humoraler Bestandteil (in Körperflüssigkeiten gelöst). Über 30 Plasmaproteine, die kaskadenartig aktiviert werden (wie Blutgerinnung). Drei Aktivierungswege: klassischer Weg (über Antikörper-Antigen-Komplexe), alternativer Weg (direkte Bindung an Mikroben), Lektin-Weg (über Mannose-bindendes Lektin). Funktionen: **Opsonisierung** (C3b markiert Erreger für Phagozytose), **Chemotaxis** (C3a und C5a locken Immunzellen an), direkte **Lyse** durch den Membranangriffskomplex (MAC, C5b-C9 — Poren in der Bakterienmembran), Verstärkung der Entzündung.\n\n' +
        '**Entzündung** (Inflammation): lokale Gewebereaktion auf Schädigung oder Infektion. Fünf Kardinalsymptome: Rubor (Rötung), Calor (Wärme), Tumor (Schwellung), Dolor (Schmerz), Functio laesa (Funktionseinschränkung). Ziel: Infektion eindämmen, Immunzellen rekrutieren, Geweberegeneration einleiten.',
      merksätze: [
        'Angeborene Immunabwehr: sofort, unspezifisch, kein Gedächtnis. 1. Barrieren (Haut, Schleimhäute), 2. Phagozytose (Makrophagen, Neutrophile), 3. Komplement, 4. NK-Zellen, 5. Entzündung.',
        'Entzündungszeichen (5 Kardinalsymptome): Rubor (Rötung), Calor (Wärme), Tumor (Schwellung), Dolor (Schmerz), Functio läsa (Funktionseinschränkung).',
      ],
      altfrage: {
        question: 'Welche Zellen der angeborenen Immunabwehr sind die wichtigsten Fresszellen?',
        answer:
          'Makrophagen (aus Monozyten) und neutrophile Granulozyten sind die wichtigsten Phagozyten. Sie erkennen Erreger über Pattern Recognition Receptors (PRR), die Pathogen-Associated Molecular Patterns (PAMPs) binden, und töten sie durch Phagozytose und intrazelluläre Abtötungsmechanismen ab.',
      },
      klinischerBezug:
        'Bei **chronischer Granulomatose** (CGD) ist die NADPH-Oxidase in Phagozyten defekt. Die Zellen können Erreger aufnehmen, aber nicht abtöten — ihnen fehlen reaktive Sauerstoffspezies. Patienten leiden unter schweren, rezidivierenden Infektionen mit Bakterien und Pilzen. **Komplementdefekte** erhöhen die Anfälligkeit für bakterielle Infektionen, besonders mit Neisseria meningitidis und N. gonorrhoeae — ohne Komplement fehlt die Opsonisierung und die direkte Lyse.',
      selfTest: [
        {
          question: 'Welches Enzym in Tränenflüssigkeit und Speichel wirkt antibakteriell?',
          options: [
            'Pepsin',
            'Lysozym',
            'Amylase',
            'Lipase',
            'Kollagenase',
          ],
          correctIndex: 1,
          explanation:
            'Lysozym ist ein Enzym in Tränenflüssigkeit, Speichel und Nasensekret, das die Zellwand (Peptidoglykan) von Bakterien abbaut und so antibakteriell wirkt.',
        },
        {
          question: 'Was ist die Funktion des Membranangriffskomplexes (MAC)?',
          options: [
            'Opsonisierung von Bakterien',
            'Chemotaxis von Immunzellen',
            'Direkte Lyse von Bakterien durch Porenbildung in der Membran',
            'Produktion von Antikörpern',
            'Hemmung der bakteriellen Proteinbiosynthese',
          ],
          correctIndex: 2,
          explanation:
            'Der Membranangriffskomplex (MAC, C5b-C9) des Komplementsystems bildet Poren in der Membran von Bakterien und führt so zu deren direkter Lyse (Zerstörung).',
        },
        {
          question: 'Welche Zellen erkennen und töten virusinfizierte Zellen ohne vorherige Sensibilisierung?',
          options: [
            'B-Zellen',
            'T-Helferzellen',
            'Natürliche Killerzellen (NK-Zellen)',
            'Plasmazellen',
            'Dendritische Zellen',
          ],
          correctIndex: 2,
          explanation:
            'Natürliche Killerzellen (NK-Zellen) gehören zur angeborenen Immunabwehr und können virusinfizierte Zellen und Tumorzellen ohne vorherige Sensibilisierung erkennen und abtöten — sie erkennen Zellen mit fehlenden oder veränderten MHC-I-Molekülen.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // 8.2 Adaptive Immunabwehr
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap8-2',
      title: 'Adaptive Immunabwehr',
      content:
        'Die adaptive Immunabwehr ist hochspezialisiert. Vier Hauptmerkmale: **Spezifität** (erkennt einzelne Antigene präzise), **Diversität** (kann Milliarden verschiedener Antigene erkennen), **Gedächtnis** (zweiter Kontakt → schnellere, stärkere Antwort), **Selbsttoleranz** (unterscheidet körpereigen von körperfremd). Hauptakteure: **T-Zellen** (reifen im Thymus) und **B-Zellen** (reifen im Knochenmark). Man unterscheidet **zelluläre Immunantwort** (v.a. T-Zellen) von **humoraler Immunantwort** (v.a. B-Zellen und Antikörper).\n\n' +
        '**T-Zellen** reifen im Thymus. Dort findet strenge Selektion statt: **Positive Selektion** (nur T-Zellen, die körpereigene MHC-Moleküle erkennen, überleben) und **negative Selektion** (T-Zellen, die auf körpereigene Antigene reagieren, werden eliminiert — Selbsttoleranz). T-Zellen erkennen Antigene nur zusammen mit MHC-Molekülen (**MHC-Restriktion**) — sie sehen nur präsentierte Peptide.\n\n' +
        '**Zytotoxische T-Zellen** (CD8⁺, Killer-T-Zellen): Erkennen virusinfizierte oder entartete Zellen über **MHC-Klasse-I** (kommt auf allen kernhaltigen Körperzellen vor). Sie töten die Zielzelle durch **Perforin** (bildet Poren) und **Granzyme** (lösen Apoptose aus).\n\n' +
        '**T-Helferzellen** (CD4⁺): Erkennen Antigene über **MHC-Klasse-II** (nur auf professionellen antigenpräsentierenden Zellen — APC: dendritische Zellen, Makrophagen, B-Zellen). Sie koordinieren die Immunantwort durch Zytokinsekretion. **TH1-Zellen** aktivieren Makrophagen und zytotoxische T-Zellen (zelluläre Antwort). **TH2-Zellen** aktivieren B-Zellen (humorale Antwort). **Regulatorische T-Zellen** (Tregs) bremsen überschießende Reaktionen und erhalten Selbsttoleranz.\n\n' +
        '**B-Zellen** reifen im Knochenmark (bone marrow). Auf ihrer Oberfläche: membrangebundene Antikörper (**B-Zell-Rezeptor**, BCR). Nach Antigen-Bindung und Aktivierung durch T-Helferzellen differenzieren sie zu **Plasmazellen** (produzieren massenhaft Antikörper — bis zu 2000 pro Sekunde) und **Gedächtnis-B-Zellen** (bleiben jahrelang im Körper, ermöglichen schnellere Sekundärantwort).\n\n' +
        '**Klonale Selektion** (Burnet, 1957): Jede B-Zelle (und T-Zelle) trägt Rezeptoren für ein einziges spezifisches Antigen. Bindet das passende Antigen, wird genau diese Zelle zur Teilung angeregt (**klonale Expansion**) und differenziert zu Effektor- und Gedächtniszellen. Das ist die Basis des immunologischen Gedächtnisses — und der Impfung.\n\n' +
        '**MHC-Moleküle** (Major Histocompatibility Complex, beim Menschen HLA — Human Leukocyte Antigen): Glykoproteine, die Antigenpeptide präsentieren. **MHC-I** kommt auf allen kernhaltigen Zellen vor und präsentiert intrazelluläre Peptide (z.B. virale Proteine) den CD8⁺-T-Zellen. **MHC-II** kommt nur auf APC vor und präsentiert extrazelluläre, phagozytierte Antigene den CD4⁺-T-Helferzellen. MHC-Gene sind hochpolymorph — viele verschiedene Allele in der Population. Die MHC-Typisierung (HLA-Matching) ist essenziell bei Organtransplantation: Je besser die Übereinstimmung, desto geringer das Abstoßungsrisiko.',
      diagram: 'immune-response',
      merksätze: [
        'T-Zellen: CD8⁺ = Killerzellen (erkennen MHC-I, auf ALLEN kernhaltigen Zellen). CD4⁺ = Helferzellen (erkennen MHC-II, nur auf APC). B-Zellen → Plasmazellen (Antikörper) + Gedächtniszellen.',
        'Klonale Selektion: Ein Antigen aktiviert genau die B-/T-Zelle mit dem passenden Rezeptor → klonale Expansion → Effektorzellen + Gedächtniszellen. Grundlage des immunologischen Gedächtnisses.',
      ],
      altfrage: {
        question: 'Auf welchen Zellen kommen MHC-Klasse-I- bzw. MHC-Klasse-II-Moleküle vor?',
        answer:
          'MHC-Klasse-I kommt auf ALLEN kernhaltigen Körperzellen vor und präsentiert intrazelluläre Peptide den CD8⁺-T-Zellen. MHC-Klasse-II kommt NUR auf professionellen antigenpräsentierenden Zellen (dendritische Zellen, Makrophagen, B-Zellen) vor und präsentiert extrazelluläre Antigene den CD4⁺-T-Helferzellen.',
      },
      klinischerBezug:
        'Bei **HIV** infiziert das Virus gezielt CD4⁺-T-Helferzellen — über den CD4-Rezeptor und Korezeptoren (CCR5 oder CXCR4). Die fortschreitende Zerstörung der T-Helferzellen führt zum Zusammenbruch der adaptiven Immunabwehr (**AIDS**). Ohne T-Helferzellen funktioniert weder die zelluläre noch die humorale Antwort — opportunistische Infektionen sind die Folge (Pneumocystis-Pneumonie, Toxoplasmose, CMV-Retinitis). Bei **Organtransplantation** ist HLA-Matching (MHC-Typisierung) entscheidend: Je besser Spender und Empfänger übereinstimmen, desto geringer das Abstoßungsrisiko.',
      selfTest: [
        {
          question: 'Welche T-Zellen erkennen Antigene über MHC-Klasse-I?',
          options: [
            'T-Helferzellen (CD4⁺)',
            'Zytotoxische T-Zellen (CD8⁺)',
            'Regulatorische T-Zellen',
            'B-Zellen',
            'Makrophagen',
          ],
          correctIndex: 1,
          explanation:
            'Zytotoxische T-Zellen (CD8⁺) erkennen Antigenpeptide, die über MHC-Klasse-I-Moleküle präsentiert werden. MHC-I kommt auf allen kernhaltigen Körperzellen vor und präsentiert v. a. intrazelluläre Peptide (z. B. virale Proteine).',
        },
        {
          question: 'Was entsteht aus aktivierten B-Zellen?',
          options: [
            'Nur Plasmazellen',
            'Nur Gedächtnis-B-Zellen',
            'Plasmazellen und Gedächtnis-B-Zellen',
            'Makrophagen und dendritische Zellen',
            'Regulatorische T-Zellen und Effektorzellen',
          ],
          correctIndex: 2,
          explanation:
            'Aktivierte B-Zellen differenzieren sich zu Plasmazellen (produzieren Antikörper) und Gedächtnis-B-Zellen (ermöglichen eine schnellere Sekundärantwort bei erneutem Antigenkontakt).',
        },
        {
          question: 'Was beschreibt die klonale Selektion?',
          options: [
            'Die Auswahl des besten Antikörpers im Labor',
            'Die Aktivierung und Vermehrung der B-/T-Zelle, die das passende Antigen erkennt',
            'Die Auswahl der stärksten Immunzelle durch Konkurrenz',
            'Die negative Selektion im Knochenmark',
            'Die zufällige Produktion aller Antikörperklassen gleichzeitig',
          ],
          correctIndex: 1,
          explanation:
            'Bei der klonalen Selektion wird genau die B- oder T-Zelle aktiviert, deren Rezeptor zum Antigen passt. Diese Zelle vermehrt sich klonal (klonale Expansion) und differenziert sich zu Effektor- und Gedächtniszellen.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // 8.3 Antikörper & Antigene
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap8-3',
      title: 'Antikörper & Antigene',
      content:
        'Antikörper (Immunglobuline, Ig) sind Y-förmige Glykoproteine. Plasmazellen (differenzierte B-Zellen) produzieren sie massenhaft. Aufbau: vier Ketten — zwei identische **schwere Ketten** (Heavy Chains, H) und zwei identische **leichte Ketten** (Light Chains, L), verbunden durch Disulfidbrücken. Die beiden Arme des Y bilden die Antigenbindungsstellen (**Fab-Region** = Fragment antigen binding). Die **variablen Regionen** (V-Regionen) ermöglichen hochspezifische Antigenerkennung. Der Stamm des Y (**Fc-Region** = Fragment crystallizable) bestimmt die Effektorfunktion und bindet an Fc-Rezeptoren auf Immunzellen.\n\n' +
        '**Antigene** sind Substanzen, die eine Immunantwort auslösen. Das **Epitop** (Antigendeterminante) ist der spezifische Abschnitt, an den der Antikörper bindet. Ein Antigen kann mehrere Epitope besitzen.\n\n' +
        'Fünf Antikörperklassen (Isotypen) — Merkregel MADGE: **IgM** ist der erste Antikörper der Primärantwort (Erstinfektion). Liegt als **Pentamer** (5 Y-Einheiten) im Blut vor. Aktiviert effektiv das Komplementsystem. IgM auf B-Zellen dient als B-Zell-Rezeptor. **IgA** kommt in Sekreten vor: Speichel, Tränen, Muttermilch, Darmschleimhaut. Liegt als **Dimer** vor. Schützt Schleimhautoberflächen (erste Verteidigungslinie gegen Erreger an Eintrittspforten). **IgD** kommt hauptsächlich als membrangebundener Rezeptor auf naiven B-Zellen vor. Funktion noch nicht vollständig geklärt. **IgG** ist der häufigste Antikörper im Blut (ca. 75%). Wird bei der Sekundärantwort hauptsächlich gebildet (Klassenwechsel nach IgM). **Plazentagängig** — der einzige Antikörper, der von der Mutter auf den Fötus übertragen wird (Nestschutz). Opsonisiert Erreger, aktiviert Komplement, lange Halbwertszeit. **IgE** ist an allergischen Reaktionen beteiligt (Typ-I-Allergie). Bindet an Mastzellen und Basophile. Bei erneutem Allergenkontakt führt Kreuzvernetzung von IgE zur Degranulation und Histaminfreisetzung. Spielt auch eine Rolle bei Parasitenabwehr (Würmer).\n\n' +
        'Antikörperfunktionen: **Neutralisation** (blockiert Toxine oder verhindert Viruseintritt in Zellen), **Opsonisierung** (markiert Erreger für Phagozytose), **Komplementaktivierung** (klassischer Weg durch Antigen-Antikörper-Komplexe), **Agglutination** (verklebt Erreger durch Quervernetzung), **Präzipitation** (fällt lösliche Antigene aus).\n\n' +
        '**Impfung** (Vakzination) nutzt das immunologische Gedächtnis. Bei **aktiver Immunisierung** werden abgeschwächte oder inaktivierte Erreger bzw. deren Bestandteile (Antigene) verabreicht. Sie lösen eine Immunantwort mit Gedächtniszellbildung aus — ohne Krankheit. Bei erneutem Kontakt mit dem echten Erreger erfolgt eine schnelle, starke Sekundärantwort. Bei **passiver Immunisierung** werden fertige Antikörper verabreicht (z.B. Immunglobuline, Antiserum). Sofortiger, aber nur temporärer Schutz — keine eigenen Gedächtniszellen. Beispiele: Tetanus-Immunglobulin nach Verletzung, Antiserum bei Schlangenbiss.',
      merksätze: [
        'Merke: 5 Antikörperklassen — IgG (häufigstes, plazentagängig, Sekundärantwort), IgA (Schleimhäute, Muttermilch, Dimer), IgM (Pentamer, Erstantwort, Komplementaktivierung), IgE (Allergie, Mastzellen, Parasiten), IgD (B-Zell-Rezeptor, Funktion noch unklar).',
        'Aktive Immunisierung: Antigen → eigene Immunantwort + Gedächtnis → langfristiger Schutz. Passive Immunisierung: fertige Antikörper → sofortiger, aber temporärer Schutz, KEIN Gedächtnis.',
      ],
      altfrage: {
        question: 'Welcher Antikörper ist plazentagängig und bietet dem Neugeborenen Nestschutz?',
        answer:
          'IgG ist der einzige plazentagängige Antikörper. Er wird während der Schwangerschaft von der Mutter auf den Fötus übertragen und bietet dem Neugeborenen in den ersten Lebensmonaten Schutz vor Infektionen (Nestschutz/Leihimmunität).',
      },
      klinischerBezug:
        'Die Bestimmung von Antikörperklassen im Blut ist diagnostisch wichtig: Erhöhtes **IgM** deutet auf eine **akute (frische) Infektion** hin, erhöhtes **IgG** auf eine durchgemachte Infektion oder Impfschutz. IgE-Bestimmung dient der Allergiediagnostik (spezifisches IgE gegen bestimmte Allergene). **mRNA-Impfstoffe** (z.B. gegen COVID-19) enthalten mRNA, die den Körper anweist, ein virales Antigen (Spike-Protein) selbst zu produzieren und dagegen eine Immunantwort aufzubauen — eine neue Form der aktiven Immunisierung.',
      selfTest: [
        {
          question: 'Welcher Antikörper wird als erster bei einer Erstinfektion gebildet?',
          options: [
            'IgG',
            'IgA',
            'IgM',
            'IgE',
            'IgD',
          ],
          correctIndex: 2,
          explanation:
            'IgM ist der erste Antikörper der Primärantwort. Er liegt als Pentamer vor und aktiviert effektiv das Komplementsystem. Später erfolgt der Klassenwechsel zu IgG (Sekundärantwort).',
        },
        {
          question: 'Welcher Antikörper ist an allergischen Reaktionen vom Typ I beteiligt?',
          options: [
            'IgA',
            'IgG',
            'IgM',
            'IgE',
            'IgD',
          ],
          correctIndex: 3,
          explanation:
            'IgE bindet an Mastzellen und basophile Granulozyten. Bei erneutem Kontakt mit dem Allergen führt die Kreuzvernetzung von IgE zur Degranulation und Histaminfreisetzung — die Grundlage der Typ-I-Allergie (Soforttyp).',
        },
        {
          question: 'Was ist der Unterschied zwischen aktiver und passiver Immunisierung?',
          options: [
            'Aktive Immunisierung verwendet Antikörper, passive verwendet Antigene',
            'Aktive Immunisierung löst eigene Immunantwort aus, passive verabreicht fertige Antikörper',
            'Beide sind identisch in ihrer Wirkung',
            'Passive Immunisierung bietet dauerhaften Schutz, aktive nur temporären',
            'Aktive Immunisierung wirkt nur gegen Viren, passive nur gegen Bakterien',
          ],
          correctIndex: 1,
          explanation:
            'Bei der aktiven Immunisierung wird das Immunsystem durch ein Antigen stimuliert, eigene Antikörper und Gedächtniszellen zu bilden (langfristiger Schutz). Bei der passiven Immunisierung werden fertige Antikörper verabreicht (sofortiger, aber temporärer Schutz ohne Gedächtnis).',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // 8.4 Immunerkrankungen
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap8-4',
      title: 'Immunerkrankungen',
      content:
        'Das Immunsystem kann versagen: überschießende Reaktion auf harmlose Substanzen (Allergie), Angriff auf körpereigene Strukturen (Autoimmunerkrankung) oder Funktionsschwäche (Immundefizienz). Die Prävalenz allergischer Erkrankungen nimmt in Industrieländern seit Jahrzehnten zu (Hygienehypothese: zu geringe mikrobielle Exposition in der Kindheit begünstigt Allergien).\n\n' +
        '**Allergien** sind überschießende Reaktionen auf harmlose Substanzen (Allergene). Klassifikation nach Coombs und Gell (vier Typen):\n\n' +
        '**Typ I** (Soforttyp, Anaphylaxie) — IgE-vermittelt. Bei Sensibilisierung (Erstkontakt) bilden sich IgE-Antikörper, die an Mastzellen binden. Beim Zweitkontakt führt Kreuzvernetzung der IgE-Moleküle zur Degranulation — Freisetzung von Histamin, Leukotrienen, Prostaglandinen. Symptome innerhalb von Minuten: Heuschnupfen, Asthma, Urtikaria, anaphylaktischer Schock.\n\n' +
        '**Typ II** (zytotoxischer Typ) — IgG/IgM gegen zellgebundene Antigene. Beispiele: Bluttransfusionsreaktion bei AB0-Inkompatibilität, Morbus haemolyticus neonatorum (Rhesus-Inkompatibilität).\n\n' +
        '**Typ III** (Immunkomplextyp) — Ablagerung von Antigen-Antikörper-Komplexen in Geweben. Komplementaktivierung und Entzündung. Beispiele: Serumkrankheit, Lupus-Nephritis.\n\n' +
        '**Typ IV** (Spättyp, verzögerter Typ) — T-Zell-vermittelt, tritt nach 24-72 Stunden auf. Beispiele: Kontaktekzem (Nickel), Tuberkulin-Test, Transplantatabstoßung.\n\n' +
        '**Autoimmunerkrankungen** entstehen durch Zusammenbruch der Selbsttoleranz — das Immunsystem greift körpereigene Strukturen an. Ursachen meist multifaktoriell (genetische Prädisposition + Umweltfaktoren).\n\n' +
        '**Organspezifische Autoimmunerkrankungen**: **Diabetes mellitus Typ 1** (T-Zellen zerstören insulinproduzierende β-Zellen des Pankreas), **Hashimoto-Thyreoiditis** (Zerstörung der Schilddrüse → Hypothyreose), **Multiple Sklerose** (Zerstörung der Myelinscheiden im ZNS → neurologische Ausfälle), **Morbus Basedow** (stimulierende Autoantikörper gegen TSH-Rezeptor → Schilddrüsenüberfunktion).\n\n' +
        '**Systemische Autoimmunerkrankungen**: **Systemischer Lupus erythematodes** (SLE, Autoantikörper gegen Zellkernbestandteile — betrifft Haut, Nieren, Gelenke, ZNS), **Rheumatoide Arthritis** (Entzündung der Gelenke durch Autoimmunreaktion — symmetrischer Befall).\n\n' +
        '**Immundefizienz** bezeichnet die Schwächung oder das Versagen des Immunsystems. **Primäre** (angeborene) Immundefekte: genetisch bedingt. Beispiele: **SCID** (Severe Combined Immunodeficiency — schwerer kombinierter Immundefekt, fehlende funktionale T- und B-Zellen, "Bubble Boy Disease"), **DiGeorge-Syndrom** (fehlende Thymusanlage → T-Zell-Mangel), **Agammaglobulinämie Bruton** (B-Zell-Defekt → fehlende Antikörper). **Sekundäre** (erworbene) Immundefekte: durch äußere Faktoren. Beispiele: **HIV/AIDS**, Immunsuppression durch Medikamente (nach Organtransplantation), Chemotherapie, Mangelernährung, Stress.\n\n' +
        '**HIV** (Humanes Immundefizienz-Virus) ist ein Retrovirus, das CD4⁺-T-Helferzellen infiziert und zerstört. Das Virus bindet über sein Hüllprotein gp120 an den CD4-Rezeptor und einen Korezeptor (CCR5 oder CXCR4). Die **reverse Transkriptase** wandelt virale RNA in DNA um, die ins Wirtsgenom integriert wird (Provirus). Ohne Therapie sinkt die CD4⁺-Zellzahl progressiv unter 200/µl (normal: 500-1500/µl) — es entwickelt sich **AIDS** (Acquired Immunodeficiency Syndrome). Opportunistische Infektionen: Pneumocystis-Pneumonie, Kaposi-Sarkom, CMV-Retinitis, Candidose. Die antiretrovirale Therapie (ART/HAART) hemmt verschiedene Schritte des viralen Replikationszyklus und kann die Viruslast unter die Nachweisgrenze senken.',
      merksätze: [
        'Allergie-Typen nach Coombs & Gell: Typ I = IgE/Soforttyp (Minuten, z. B. Anaphylaxie), Typ II = IgG/zytotoxisch (z. B. Transfusionsreaktion), Typ III = Immunkomplexe (z. B. SLE), Typ IV = T-Zell-vermittelt/Spättyp (24–72 h, z. B. Kontaktekzem).',
        'HIV infiziert CD4⁺-T-Helferzellen → progressive Immunschwäche → AIDS (CD4 < 200/µl) → opportunistische Infektionen. ART kann Viruslast unter Nachweisgrenze senken.',
      ],
      altfrage: {
        question: 'Welcher Allergie-Typ wird durch IgE vermittelt?',
        answer:
          'Typ-I-Allergie (Soforttyp) wird durch IgE vermittelt. IgE bindet an Mastzellen; bei erneutem Allergenkontakt kommt es zur Kreuzvernetzung, Degranulation und Freisetzung von Histamin. Symptome treten innerhalb von Minuten auf (Heuschnupfen, Asthma, anaphylaktischer Schock).',
      },
      klinischerBezug:
        'Autoimmunerkrankungen werden oft mit **Immunsuppressiva** behandelt (Kortikosteroide, Methotrexat, Biologika wie TNF-α-Blocker) — sie dämpfen die überschießende Immunreaktion, schwächen aber gleichzeitig die allgemeine Infektabwehr. Die **HIV-Therapie** (ART) hat AIDS von einer tödlichen zu einer chronisch behandelbaren Erkrankung gemacht. Bei konsequenter Therapie haben HIV-positive Patienten heute nahezu normale Lebenserwartung. Das Prinzip **"U=U"** (Undetectable = Untransmittable) besagt: Bei nicht nachweisbarer Viruslast ist das Übertragungsrisiko praktisch null.',
      selfTest: [
        {
          question: 'Welcher Allergietyp tritt erst nach 24–72 Stunden auf?',
          options: [
            'Typ I (Soforttyp)',
            'Typ II (zytotoxischer Typ)',
            'Typ III (Immunkomplextyp)',
            'Typ IV (Spättyp)',
            'Typ V (stimulierender Typ)',
          ],
          correctIndex: 3,
          explanation:
            'Die Typ-IV-Allergie (Spättyp, verzögerter Typ) wird durch T-Zellen vermittelt und tritt erst nach 24–72 Stunden auf. Beispiele sind das Kontaktekzem (z. B. Nickelallergie) und der Tuberkulin-Test.',
        },
        {
          question: 'Welche Zellen werden von HIV primär infiziert?',
          options: [
            'B-Zellen',
            'CD8⁺-T-Killerzellen',
            'CD4⁺-T-Helferzellen',
            'Natürliche Killerzellen',
            'Neutrophile Granulozyten',
          ],
          correctIndex: 2,
          explanation:
            'HIV infiziert primär CD4⁺-T-Helferzellen über den CD4-Rezeptor und Korezeptoren (CCR5/CXCR4). Die fortschreitende Zerstörung dieser Zellen führt zur Immunschwäche (AIDS).',
        },
        {
          question: 'Was ist ein Beispiel für eine organspezifische Autoimmunerkrankung?',
          options: [
            'Systemischer Lupus erythematodes (SLE)',
            'Diabetes mellitus Typ 1',
            'Rheumatoide Arthritis',
            'Heuschnupfen',
            'Multiple Sklerose als systemische Autoimmunerkrankung',
          ],
          correctIndex: 1,
          explanation:
            'Diabetes mellitus Typ 1 ist eine organspezifische Autoimmunerkrankung: T-Zellen zerstören die insulinproduzierenden β-Zellen der Langerhans-Inseln im Pankreas. SLE und Rheumatoide Arthritis sind systemische Autoimmunerkrankungen.',
        },
      ],
    },
  ],
};
