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
        'Das Immunsystem ist das Abwehrsystem des Körpers gegen Krankheitserreger (Pathogene) wie Bakterien, Viren, Pilze und Parasiten sowie gegen körperfremde Substanzen und entartete körpereigene Zellen (Tumorzellen). Man unterscheidet die angeborene (unspezifische) Immunabwehr, die sofort verfügbar ist und ein breites Spektrum von Erregern erkennt, von der erworbenen (spezifischen, adaptiven) Immunabwehr, die erst nach einigen Tagen aktiviert wird, dafür aber hochspezifisch und mit Gedächtnis ausgestattet ist. Die angeborene Immunabwehr ist evolutionär älter und findet sich bei allen mehrzelligen Organismen, während die adaptive Immunabwehr nur bei Wirbeltieren vorkommt. Beide Systeme arbeiten eng zusammen und ergänzen sich gegenseitig.\n\n' +
        'Die erste Verteidigungslinie der angeborenen Immunabwehr sind die physikalischen und chemischen Barrieren, die das Eindringen von Pathogenen in den Körper verhindern. Die Haut ist die größte Barriere: Ihre verhornende Oberfläche (Keratinschicht) ist für die meisten Erreger undurchdringlich. Zusätzlich wirken der Säureschutzmantel der Haut (pH 4–6), antimikrobielle Peptide (Defensine) und die natürliche Hautflora als Schutz. Die Schleimhäute (Mukosa) der Atemwege, des Verdauungstrakts und des Urogenitaltrakts bilden Schleim (Mucus), der Erreger einfängt. In den Atemwegen transportiert der mukoziliäre Apparat (Flimmerhärchen + Schleim) eingeatmete Partikel und Erreger Richtung Rachen (mukoziliäre Clearance). Der Magen mit seinem stark sauren pH (1–2) tötet die meisten aufgenommenen Erreger ab. Speichel, Tränenflüssigkeit und Nasensekret enthalten Lysozym — ein Enzym, das bakterielle Zellwände abbaut. Die natürliche Mikroflora (Mikrobiom) auf Haut und Schleimhäuten konkurriert mit Pathogenen um Nährstoffe und Bindungsstellen (Kolonisationsresistenz).\n\n' +
        'Wenn Pathogene die Barrieren überwinden, werden sie von den zellulären Komponenten der angeborenen Immunabwehr erkannt und bekämpft. Phagozyten (Fresszellen) sind die wichtigsten Effektorzellen: Makrophagen (aus Monozyten differenziert) und neutrophile Granulozyten erkennen Erreger über Mustererkennungsrezeptoren (Pattern Recognition Receptors, PRR), die konservierte mikrobielle Strukturen (PAMPs — Pathogen-Associated Molecular Patterns) binden, z. B. Lipopolysaccharide (LPS) der gramnegativen Bakterien oder Peptidoglykane der grampositiven Bakterien. Nach der Erkennung wird der Erreger phagozytiert (aufgenommen) und in Phagolysosomen durch reaktive Sauerstoffspezies und lysosomale Enzyme abgetötet. Natürliche Killerzellen (NK-Zellen) erkennen und töten virusinfizierte Zellen und Tumorzellen, die keine oder veränderte MHC-I-Moleküle auf ihrer Oberfläche tragen.\n\n' +
        'Das Komplementsystem ist ein humoraler (in Körperflüssigkeiten gelöster) Bestandteil der angeborenen Immunabwehr. Es besteht aus über 30 Plasmaproteinen, die kaskadenartig aktiviert werden (ähnlich der Blutgerinnungskaskade). Es gibt drei Aktivierungswege: den klassischen Weg (über Antikörper-Antigen-Komplexe — Verbindung zur adaptiven Immunität), den alternativen Weg (direkte Bindung an mikrobielle Oberflächen) und den Lektin-Weg (über Mannose-bindendes Lektin). Die Funktionen des Komplementsystems umfassen: Opsonisierung (Markierung von Erregern für die Phagozytose durch C3b), Chemotaxis (Anlockung von Immunzellen durch C3a und C5a), direkte Lyse von Bakterien durch den Membranangriffskomplex (MAC, C5b-C9) und Verstärkung der Entzündungsreaktion. Die Entzündung (Inflammation) ist eine lokale Gewebereaktion auf Gewebeschädigung oder Infektion mit den klassischen Kardinalsymptomen: Rubor (Rötung), Calor (Wärme), Tumor (Schwellung), Dolor (Schmerz) und Functio läsa (Funktionseinschränkung). Sie dient der Eindämmung der Infektion, der Rekrutierung von Immunzellen und der Einleitung der Geweberegeneration.',
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
        'Defekte der angeborenen Immunabwehr führen zu schweren Infektanfälligkeiten. Chronische Granulomatose (CGD) ist ein Defekt der NADPH-Oxidase in Phagozyten, der die Bildung reaktiver Sauerstoffspezies verhindert — Patienten können phagozytierte Erreger nicht abtöten und leiden unter schweren, rezidivierenden Infektionen. Komplementdefekte erhöhen die Anfälligkeit für bakterielle Infektionen, insbesondere mit Neisseria-Arten.',
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
        'Die adaptive (erworbene, spezifische) Immunabwehr ist ein hochentwickeltes Verteidigungssystem, das nur bei Wirbeltieren vorkommt. Ihre Hauptmerkmale sind: (1) Spezifität — sie erkennt einzelne Antigene mit hoher Präzision, (2) Diversität — sie kann theoretisch Milliarden verschiedener Antigene erkennen, (3) Gedächtnis — nach dem Erstkontakt mit einem Antigen wird eine schnellere und stärkere Sekundärantwort ermöglicht, (4) Selbsttoleranz — sie unterscheidet körpereigene von körperfremden Strukturen. Die Hauptakteure der adaptiven Immunabwehr sind T-Lymphozyten (T-Zellen, reifen im Thymus) und B-Lymphozyten (B-Zellen, reifen im Knochenmark). Man unterscheidet die zelluläre Immunantwort (v. a. T-Zellen) von der humoralen Immunantwort (v. a. B-Zellen und Antikörper).\n\n' +
        'T-Zellen sind die Hauptakteure der zellulären Immunantwort. Sie reifen im Thymus heran, wo eine strenge Selektion (positive und negative Selektion) stattfindet: Nur T-Zellen, die körpereigene MHC-Moleküle erkennen (positive Selektion), aber NICHT auf körpereigene Antigene reagieren (negative Selektion → Selbsttoleranz), überleben. T-Zellen erkennen Antigene ausschließlich in Verbindung mit MHC-Molekülen (MHC-Restriktion) — sie sehen nur „präsentierte“ Antigenpeptide. Man unterscheidet: Zytotoxische T-Zellen (CD8⁺, Killer-T-Zellen) erkennen virusinfizierte oder entartete Zellen über MHC-Klasse-I-Moleküle, die auf allen kernhaltigen Körperzellen vorkommen. Sie töten die Zielzelle durch Freisetzung von Perforin (Porenbildung) und Granzymen (Apoptose-Induktion). T-Helferzellen (CD4⁺) erkennen Antigene über MHC-Klasse-II-Moleküle, die nur auf professionellen antigenpräsentierenden Zellen (APC: dendritische Zellen, Makrophagen, B-Zellen) vorkommen. Sie regulieren und koordinieren die Immunantwort durch Zytokinsekretion. TH1-Zellen aktivieren Makrophagen und zytotoxische T-Zellen (zelluläre Immunantwort), TH2-Zellen aktivieren B-Zellen (humorale Immunantwort). Regulatorische T-Zellen (Tregs) unterdrücken überschießende Immunreaktionen und erhalten die Selbsttoleranz.\n\n' +
        'B-Zellen sind die Hauptakteure der humoralen Immunantwort. Sie reifen im Knochenmark (bone marrow) heran und tragen auf ihrer Oberfläche membrangebundene Antikörper (B-Zell-Rezeptoren, BCR), die als Antigenrezeptoren dienen. Nach Bindung eines Antigens an den BCR und Aktivierung durch T-Helferzellen (CD4⁺/TH2) differenzieren sich B-Zellen zu Plasmazellen und Gedächtnis-B-Zellen. Plasmazellen sind hochspezialisierte Antikörperfabriken, die große Mengen löslicher Antikörper sezernieren (bis zu 2000 Antikörper pro Sekunde). Gedächtnis-B-Zellen bleiben jahrelang im Körper und ermöglichen bei erneutem Kontakt mit dem gleichen Antigen eine schnellere und stärkere Sekundärantwort (immunologisches Gedächtnis — Grundlage der Impfung). Die klonale Selektion (Burnet, 1957) erklärt, wie die spezifische Immunantwort funktioniert: Jede B-Zelle (und T-Zelle) trägt Rezeptoren für ein einziges spezifisches Antigen. Durch Kontakt mit dem passenden Antigen wird genau diese Zelle zur Teilung angeregt (klonale Expansion) und differenziert sich zu Effektor- und Gedächtniszellen.\n\n' +
        'MHC-Moleküle (Major Histocompatibility Complex, beim Menschen HLA — Human Leukocyte Antigen) sind Glykoproteine auf der Zelloberfläche, die Antigenpeptide den T-Zellen präsentieren. MHC-Klasse-I-Moleküle kommen auf allen kernhaltigen Körperzellen vor und präsentieren intrazelluläre Peptide (z. B. virale Proteine) den CD8⁺-T-Zellen. MHC-Klasse-II-Moleküle kommen nur auf professionellen antigenpräsentierenden Zellen (APC) vor und präsentieren extrazelluläre, phagozytierte Antigene den CD4⁺-T-Helferzellen. MHC-Gene sind hochpolymorph — es gibt viele verschiedene Allele in der Population, was die Diversität der Immunantwort erhöht. Die MHC-Typisierung ist essenziell bei der Organtransplantation: Je besser die MHC-Übereinstimmung zwischen Spender und Empfänger, desto geringer das Abstoßungsrisiko.',
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
        'HIV (Humanes Immundefizienz-Virus) infiziert CD4⁺-T-Helferzellen über den CD4-Rezeptor und den Korezeptor CCR5 oder CXCR4. Die fortschreitende Zerstörung der T-Helferzellen führt zum Zusammenbruch der adaptiven Immunabwehr (AIDS) und ermöglicht opportunistische Infektionen. Die MHC-Typisierung (HLA-Matching) ist entscheidend bei der Organtransplantation zur Minimierung der Abstoßungsreaktion.',
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
        'Antikörper (Immunglobuline, Ig) sind Y-förmige Glykoproteine, die von Plasmazellen (differenzierten B-Zellen) sezerniert werden und eine zentrale Rolle in der humoralen Immunantwort spielen. Jeder Antikörper besteht aus vier Polypeptidketten: zwei identischen schweren Ketten (Heavy Chains, H) und zwei identischen leichten Ketten (Light Chains, L), die durch Disulfidbrücken verbunden sind. Die beiden Arme des Y bilden jeweils eine Antigenbindungsstelle (Fab-Region = Fragment antigen binding), deren variable Regionen (V-Regionen) die hochspezifische Antigenerkennung ermöglichen. Der Stamm des Y (Fc-Region = Fragment crystallizable) bestimmt die Effektorfunktion des Antikörpers und bindet an Fc-Rezeptoren auf Immunzellen. Antigene sind Substanzen, die eine Immunantwort auslösen können. Das Epitop (Antigendeterminante) ist der spezifische Abschnitt des Antigens, an den der Antikörper oder T-Zell-Rezeptor bindet. Ein Antigen kann mehrere verschiedene Epitope besitzen.\n\n' +
        'Es gibt fünf Antikörperklassen (Isotypen), die sich in der Struktur ihrer schweren Ketten und ihrer Funktion unterscheiden. Die Merkregel MADGE hilft beim Einprägen: IgM ist der erste Antikörper, der bei einer Erstinfektion gebildet wird (Primärantwort). Es liegt als Pentamer (5 Y-Einheiten) im Blut vor und ist ein effektiver Aktivator des Komplementsystems. IgM auf B-Zellen dient als B-Zell-Rezeptor. IgA kommt vor allem in Sekreten vor (Speichel, Tränenflüssigkeit, Muttermilch, Darmschleimhaut) und schützt die Schleimhautoberflächen. Es liegt als Dimer vor und wird durch die Epithelzellen transportiert (Transzytose). IgD kommt hauptsächlich als membrangebundener Rezeptor auf naiven B-Zellen vor und dient der B-Zell-Aktivierung; seine Funktion ist noch nicht vollständig geklärt. IgG ist der häufigste Antikörper im Blut (ca. 75 % aller Immunglobuline) und wird bei der Sekundärantwort (nach IgM) hauptsächlich gebildet (Klassenwechsel). IgG ist plazentagängig — es ist der einzige Antikörper, der von der Mutter auf den Fötus übertragen wird (Nestschutz). IgG opsonisiert Erreger, aktiviert Komplement und hat eine lange Halbwertszeit. IgE ist an allergischen Reaktionen beteiligt (Typ-I-Allergie): Es bindet an Mastzellen und Basophile; bei erneutem Antigenkontakt (Allergen) führt die Kreuzvernetzung von IgE zur Degranulation und Histaminfreisetzung. IgE spielt auch eine Rolle bei der Abwehr von Parasiten (Würmer).\n\n' +
        'Die Antigen-Antikörper-Reaktion folgt dem Schlüssel-Schloss-Prinzip: Die variable Region des Antikörpers bindet spezifisch an das Epitop des Antigens. Die Effektorfunktionen umfassen: Neutralisation (Antikörper blockieren Toxine oder verhindern das Eindringen von Viren in Zellen), Opsonisierung (Markierung von Erregern für die Phagozytose), Komplementaktivierung (klassischer Weg durch Antigen-Antikörper-Komplexe), Agglutination (Verklumpung von Erregern durch Quervernetzung) und Präzipitation (Ausfällung löslicher Antigene). Die Impfung (Vakzination) nutzt das immunologische Gedächtnis: Bei der aktiven Immunisierung werden abgeschwächte oder inaktivierte Erreger bzw. deren Bestandteile (Antigene) verabreicht, die eine Immunantwort mit Gedächtniszellbildung auslösen, ohne die Krankheit auszulösen. Bei erneutem Kontakt mit dem echten Erreger erfolgt eine schnelle, starke Sekundärantwort. Bei der passiven Immunisierung werden fertige Antikörper verabreicht (z. B. Immunglobuline, Antiserum) — sie bietet sofortigen, aber nur temporären Schutz, da keine eigenen Gedächtniszellen gebildet werden. Beispiele: Tetanus-Immunglobulin nach Verletzung, Antiserum bei Schlangenbiss.',
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
        'Die Bestimmung von Antikörperklassen im Blut ist diagnostisch wichtig: Erhöhtes IgM deutet auf eine akute (frische) Infektion hin, erhöhtes IgG auf eine durchgemachte Infektion oder Impfschutz. IgE-Bestimmung dient der Allergiediagnostik. Die mRNA-Impfstoffe (z. B. gegen COVID-19) sind eine neue Form der aktiven Immunisierung: Sie enthalten mRNA, die den Körper anweist, ein virales Antigen (Spike-Protein) selbst zu produzieren und dagegen eine Immunantwort aufzubauen.',
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
        'Das Immunsystem kann auf verschiedene Weisen fehlreguliert sein: Es kann überschießend auf harmlose Substanzen reagieren (Allergie), fälschlicherweise körpereigene Strukturen angreifen (Autoimmunerkrankungen) oder in seiner Funktion geschwächt sein (Immundefizienz). Diese Immunpathologien sind klinisch hochrelevant und betreffen einen großen Teil der Bevölkerung. Die Allergologie ist eines der am schnellsten wachsenden medizinischen Fachgebiete, da die Prävalenz allergischer Erkrankungen in den Industrieländern seit Jahrzehnten zunimmt (Hygienehypothese: zu geringe mikrobielle Exposition in der Kindheit begünstigt die Entwicklung allergischer Erkrankungen).\n\n' +
        'Allergien sind überschießende Immunreaktionen auf eigentlich harmlose Substanzen (Allergene). Die Klassifikation nach Coombs und Gell unterscheidet vier Typen: Typ I (Soforttyp, Anaphylaxie) wird durch IgE vermittelt: Bei der Sensibilisierung (Erstkontakt) bilden sich IgE-Antikörper, die an Mastzellen binden. Beim Zweitkontakt führt die Kreuzvernetzung der IgE-Moleküle durch das Allergen zur Degranulation der Mastzellen und Freisetzung von Histamin, Leukotrienen und Prostaglandinen — innerhalb von Minuten. Symptome: Heuschnupfen, Asthma, Urtikaria, anaphylaktischer Schock. Typ II (zytotoxischer Typ) wird durch IgG/IgM gegen zellgebundene Antigene vermittelt — z. B. Bluttransfusionsreaktion bei AB0-Inkompatibilität, Morbus hämolyticus neonatorum (Rhesus-Inkompatibilität). Typ III (Immunkomplextyp) wird durch Ablagerung von Antigen-Antikörper-Komplexen in Geweben verursacht, die Komplementaktivierung und Entzündung auslösen — z. B. Serumkrankheit, Lupus-Nephritis. Typ IV (Spättyp, verzögerter Typ) wird durch T-Zellen vermittelt und tritt nach 24–72 Stunden auf — z. B. Kontaktekzem (Nickel), Tuberkulin-Test, Transplantatabstoßung.\n\n' +
        'Autoimmunerkrankungen entstehen durch den Zusammenbruch der Selbsttoleranz — das Immunsystem greift körpereigene Strukturen an. Die genauen Ursachen sind oft multifaktoriell (genetische Prädisposition + Umweltfaktoren). Organspezifische Autoimmunerkrankungen betreffen ein bestimmtes Organ: Diabetes mellitus Typ 1 (Zerstörung der insulinproduzierenden β-Zellen des Pankreas durch T-Zellen), Hashimoto-Thyreoiditis (Zerstörung der Schilddrüse), Multiple Sklerose (Zerstörung der Myelinscheiden im ZNS), Morbus Basedow (stimulierende Autoantikörper gegen TSH-Rezeptor → Schilddrüsenüberfunktion). Systemische Autoimmunerkrankungen betreffen mehrere Organsysteme: Systemischer Lupus erythematodes (SLE, Autoantikörper gegen Zellkernbestandteile) und Rheumatoide Arthritis (Entzündung der Gelenke durch Autoimmunreaktion).\n\n' +
        'Immundefizienz bezeichnet die Schwächung oder das Versagen des Immunsystems. Man unterscheidet primäre (angeborene) Immundefekte, die durch genetische Defekte verursacht werden (z. B. SCID — Severe Combined Immunodeficiency, ein schwerer kombinierter Immundefekt mit Fehlen funktionaler T- und B-Zellen; DiGeorge-Syndrom — fehlende Thymusanlage → T-Zell-Mangel; Agammaglobulinämie Bruton — B-Zell-Defekt → fehlende Antikörper), von sekundären (erworbenen) Immundefekten, die durch äußere Faktoren verursacht werden (z. B. HIV/AIDS, Immunsuppression durch Medikamente nach Organtransplantation, Chemotherapie, Mangelernährung, Stress). HIV (Humanes Immundefizienz-Virus) ist ein Retrovirus, das CD4⁺-T-Helferzellen infiziert und zerstört. Das Virus bindet über sein Hüllprotein gp120 an den CD4-Rezeptor und einen Korezeptor (CCR5 oder CXCR4). Die reverse Transkriptase wandelt die virale RNA in DNA um, die in das Wirtsgenom integriert wird (Provirus). Ohne Therapie sinkt die CD4⁺-Zellzahl progressiv unter 200/µl (normal: 500–1500/µl), und es entwickelt sich AIDS (Acquired Immunodeficiency Syndrome) mit opportunistischen Infektionen (Pneumocystis-Pneumonie, Kaposi-Sarkom, CMV-Retinitis, Candidose). Die antiretrovirale Therapie (ART/HAART) hemmt verschiedene Schritte des viralen Replikationszyklus und kann die Viruslast unter die Nachweisgrenze senken.',
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
        'Autoimmunerkrankungen werden oft mit Immunsuppressiva behandelt (Kortikosteroide, Methotrexat, Biologika wie TNF-α-Blocker), die die überschießende Immunreaktion dämpfen, aber gleichzeitig die allgemeine Infektabwehr schwächen. Die HIV-Therapie (ART) hat AIDS von einer tödlichen zu einer chronisch behandelbaren Erkrankung gemacht — bei konsequenter Therapie haben HIV-positive Patienten heute eine nahezu normale Lebenserwartung. Das Prinzip „U=U“ (Undetectable = Untransmittable) besagt, dass bei nicht nachweisbarer Viruslast das Übertragungsrisiko praktisch null ist.',
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
