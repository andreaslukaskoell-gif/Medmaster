import type { Kapitel } from '../types';

export const bioKap7: Kapitel = {
  id: 'bio-kap7',
  title: 'Ökologie',
  subject: 'biologie',
  icon: '🌍',
  estimatedTime: '50 Minuten',
  unterkapitel: [
    // ──────────────────────────────────────────────
    // 7.1 Ökologische Grundbegriffe
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap7-1',
      title: 'Ökologische Grundbegriffe',
      content:
        'Ökologie untersucht Wechselbeziehungen zwischen Organismen und ihrer Umwelt. Ernst Häckel prägte den Begriff 1866 (oikos = Haushalt, logos = Lehre). Ökologie gliedert sich in Organisationsebenen: Autökologie (Einzelorganismus), Populationsökologie, Synökologie (Lebensgemeinschaften), Ökosystemökologie, Biosphärenökologie.\n\n' +
        'Die zentralen Begriffe beschreiben Organisationsebenen. **Biotop** ist der Lebensraum — der unbelebte Standort mit physikalisch-chemischen Bedingungen (Teich, Wald, Wiese). **Biozönose** ist die Lebensgemeinschaft — alle Organismen im Biotop (Pflanzen = Phytozönose, Tiere = Zoozönose, Mikroorganismen = Mikrozönose). **Ökosystem** = Biotop + Biozönose — funktionelle Einheit mit allen Stoff- und Energieflüssen. **Biosphäre** = alle Ökosysteme der Erde — von der Tiefsee bis zur oberen Atmosphäre.\n\n' +
        'Die **ökologische Nische** ist die „Berufsbeschreibung" einer Art (Charles Elton, G. Evelyn Hutchinson). Kein Ort, sondern die Gesamtheit aller Umweltfaktoren und Ressourcen, die eine Art braucht. **Fundamentalnische** = theoretisch mögliches Spektrum aller Lebensbedingungen. **Realnische** = tatsächlich realisierter Anteil, durch Konkurrenz eingeschränkt. **Konkurrenzausschlussprinzip** (Gause, 1934): Zwei Arten können nicht dauerhaft dieselbe Nische besetzen — eine verdrängt die andere. Koexistenz nur durch Nischendifferenzierung.',
      merksätze: [
        'Ökosystem = Biotop (Lebensraum) + Biozönose (Lebensgemeinschaft). Die Biosphäre ist die Gesamtheit aller Ökosysteme der Erde.',
        'Ökologische Nische = „Berufsbeschreibung" einer Art, KEIN Ort. Fundamentalnische > Realnische (durch Konkurrenz eingeschränkt). Konkurrenzausschlussprinzip: Zwei Arten können nicht dieselbe Nische besetzen.',
      ],
      altfrage: {
        question: 'Was versteht man unter der ökologischen Nische einer Art?',
        answer:
          'Die ökologische Nische ist kein Ort, sondern beschreibt die Gesamtheit aller abiotischen und biotischen Umweltfaktoren, die eine Art zum Überleben braucht — ihre „Berufsbeschreibung" im Ökosystem. Die Fundamentalnische wird durch Konkurrenz zur kleineren Realnische eingeschränkt.',
      },
      klinischerBezug:
        '**Malaria-Verbreitung** hängt von der ökologischen Nische der *Anopheles*-Mücke ab. Temperatur >16°C für Parasitenentwicklung, stehendes Wasser für Larven, Luftfeuchtigkeit >60%. Der Klimawandel verschiebt die Nische. Beispiel: **Höhenausbreitung** in Ostafrika — Malaria steigt von 1500 m auf 2000 m Höhe. In Europa: Potenzielle Wiedereinführung durch wärmere Sommer. **Dengue-Fieber** breitet sich nach Norditalien und Südfrankreich aus — *Aedes albopictus* (Tigermücke) findet neue Nischen. Vektorökologie ist zentral für Krankheitsprognosen.',
      selfTest: [
        {
          question: 'Was ist ein Ökosystem?',
          options: [
            'Nur die Gesamtheit aller Lebewesen eines Gebiets',
            'Nur der unbelebte Lebensraum mit seinen Umweltfaktoren',
            'Die funktionelle Einheit aus Biotop und Biozönose',
            'Ein anderes Wort für Biosphäre',
            'Die Gesamtheit aller Nahrungsketten in einem Gebiet',
          ],
          correctIndex: 2,
          explanation:
            'Ein Ökosystem ist die funktionelle Einheit aus Biotop (Lebensraum) und Biozönose (Lebensgemeinschaft), einschließlich aller Stoff- und Energieflüsse.',
        },
        {
          question: 'Was besagt das Konkurrenzausschlussprinzip?',
          options: [
            'Zwei Arten können problemlos dieselbe Nische besetzen',
            'Zwei Arten können nicht dauerhaft dieselbe ökologische Nische besetzen',
            'Konkurrenz führt immer zum Aussterben beider Arten',
            'Nur die größere Art überlebt bei Konkurrenz',
            'Konkurrenz tritt nur zwischen verschiedenen Arten auf, nie innerhalb einer Art',
          ],
          correctIndex: 1,
          explanation:
            'Das Konkurrenzausschlussprinzip (Gause) besagt, dass zwei Arten nicht dauerhaft dieselbe ökologische Nische besetzen können — eine wird die andere verdrängen. Koexistenz erfordert Nischendifferenzierung.',
        },
        {
          question: 'Was unterscheidet Fundamental- von Realnische?',
          options: [
            'Die Fundamentalnische ist kleiner als die Realnische',
            'Die Realnische beschreibt das theoretische Maximum',
            'Die Fundamentalnische wird durch Konkurrenz zur Realnische eingeschränkt',
            'Beide Begriffe sind synonym',
            'Die Realnische wird ausschließlich durch abiotische Faktoren bestimmt',
          ],
          correctIndex: 2,
          explanation:
            'Die Fundamentalnische ist das theoretisch mögliche Spektrum aller Lebensbedingungen einer Art. Durch interspezifische Konkurrenz wird sie zur kleineren Realnische eingeschränkt.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // 7.2 Abiotische Faktoren
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap7-2',
      title: 'Abiotische Faktoren',
      content:
        'Abiotische Faktoren sind unbelebte physikalisch-chemische Bedingungen. Temperatur, Licht, Wasser, Boden, Salzgehalt, pH-Wert, Sauerstoff. Sie bestimmen, welche Arten vorkommen können. Die **Toleranzkurve** (ökologische Potenz) zeigt die Reaktion eines Organismus auf einen Faktor. Glockenförmig: Minimum → Optimum (höchste Leistung) → Maximum. Der Bereich zwischen Minimum und Maximum ist der **Toleranzbereich** (ökologische Valenz).\n\n' +
        '**Euryöke Arten** haben breiten Toleranzbereich — Generalisten, leben unter verschiedenen Bedingungen (Ratten, Schaben). **Stenöke Arten** haben engen Toleranzbereich — Spezialisten, brauchen bestimmte Bedingungen (Forellen: kühles, sauerstoffreiches Wasser). Stenöke Arten = gute Bioindikatoren. Bezeichnungen: eurytherm/stenotherm (Temperatur), euryhalin/stenohalin (Salzgehalt).\n\n' +
        'Das **Gesetz des Minimums** (Liebig, 1840): Das Wachstum wird vom knappsten Faktor begrenzt (Minimumfaktor). Selbst wenn alle anderen Faktoren optimal sind, bestimmt der knappste die Grenze. **Tonnenprinzip**: Das kürzeste Daubenholz bestimmt den Füllstand.\n\n' +
        '**Temperatur** beeinflusst alle biochemischen Prozesse. **RGT-Regel** (van\u2019t Hoff): +10°C verdoppelt bis verdreifacht die Reaktionsgeschwindigkeit (Q₁₀ ≈ 2–3). Bei Überschreitung des Optimums: Enzymdenaturierung. **Licht** ist essenziell für Photosynthese. Photoperiodismus (Tageslänge) steuert Blühen, Winterruhe, Zugverhalten. **Wasser** ist Lösungsmittel, Reaktionspartner, Lebensraum — oft der limitierende Faktor.',
      merksätze: [
        'Toleranzkurve: Minimum → Optimum → Maximum. Euryök = breiter Toleranzbereich (Generalist). Stenök = enger Toleranzbereich (Spezialist, guter Bioindikator).',
        'Liebigsches Minimumgesetz: Der knappste Faktor begrenzt das Wachstum. RGT-Regel: +10 °C ≈ Verdopplung der Reaktionsgeschwindigkeit (Q₁₀ ≈ 2–3).',
      ],
      altfrage: {
        question: 'Was besagt das Gesetz des Minimums nach Liebig?',
        answer:
          'Das Gesetz des Minimums besagt, dass das Wachstum eines Organismus von dem Faktor begrenzt wird, der relativ zum Bedarf am stärksten limitiert ist (Minimumfaktor). Selbst bei optimaler Versorgung mit allen anderen Faktoren bestimmt der knappste Faktor die Wachstumsgrenze.',
      },
      klinischerBezug:
        'Pathogene Bakterien haben Temperaturoptimum bei 37°C (Körpertemperatur). **Fieber** erhöht die Temperatur über das Optimum vieler Erreger — hemmt Wachstum. Beispiel: *Streptococcus pneumoniae* wächst optimal bei 37°C, schlecht bei 39–40°C. **Sterilisation** (121°C, 15 min im Autoklaven) denaturiert alle Proteine — tötet Bakterien und Sporen. **Pasteurisierung** (72°C, 15 Sek) tötet vegetative Bakterien in Milch. **Hypothermie** in der Herzchirurgie: Kühlung auf 28–32°C senkt Stoffwechsel (RGT-Regel) — Organe überleben längeren Kreislaufstillstand.',
      selfTest: [
        {
          question: 'Was kennzeichnet eine euryöke Art?',
          options: [
            'Einen sehr engen Toleranzbereich',
            'Einen breiten Toleranzbereich für einen Umweltfaktor',
            'Eine besonders hohe Spezialisierung',
            'Ein Vorkommen ausschließlich in tropischen Gebieten',
            'Eine besonders hohe Empfindlichkeit gegenüber pH-Wert-Änderungen',
          ],
          correctIndex: 1,
          explanation:
            'Euryöke Arten haben einen breiten Toleranzbereich für einen oder mehrere Umweltfaktoren. Sie sind Generalisten und können unter verschiedenen Bedingungen existieren.',
        },
        {
          question: 'Was besagt die RGT-Regel?',
          options: [
            'Die Artenvielfalt verdoppelt sich alle 10 Jahre',
            'Eine Temperaturerhöhung um 10 °C verdoppelt bis verdreifacht die Reaktionsgeschwindigkeit',
            'Jede Population verdoppelt sich in 10 Generationen',
            'Die Mutationsrate steigt um 10 % pro Generation',
            'Pro 10 °C Temperaturerhöhung halbiert sich die Enzymaktivität',
          ],
          correctIndex: 1,
          explanation:
            'Die RGT-Regel (van\u2019t Hoff) besagt, dass eine Temperaturerhöhung um 10 °C die Geschwindigkeit enzymatischer Reaktionen ungefähr verdoppelt bis verdreifacht (Q₁₀ ≈ 2–3).',
        },
        {
          question: 'Welche Aussage zum Minimumgesetz ist korrekt?',
          options: [
            'Der häufigste Faktor bestimmt das Wachstum',
            'Alle Faktoren müssen gleichzeitig im Minimum sein',
            'Der knappste Faktor relativ zum Bedarf begrenzt das Wachstum',
            'Das Gesetz gilt nur für Pflanzen, nicht für Tiere',
            'Alle Faktoren wirken gemeinsam additiv auf das Wachstum',
          ],
          correctIndex: 2,
          explanation:
            'Das Minimumgesetz nach Liebig besagt, dass der Faktor, der relativ zum Bedarf am stärksten limitiert ist (Minimumfaktor), das Wachstum begrenzt — auch wenn alle anderen Faktoren im Überfluss vorhanden sind.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // 7.3 Biotische Faktoren
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap7-3',
      title: 'Biotische Faktoren',
      content:
        'Biotische Faktoren sind Wechselbeziehungen zwischen Lebewesen. Konkurrenz, Räuber-Beute, Symbiose, Parasitismus, Kommensalismus. Sie strukturieren Ökosysteme und treiben Evolution. **Intraspezifisch** = innerhalb einer Art. **Interspezifisch** = zwischen verschiedenen Arten.\n\n' +
        '**Konkurrenz** entsteht bei begrenzten Ressourcen (Nahrung, Wasser, Raum, Partner). **Intraspezifische Konkurrenz** (innerhalb einer Art) ist oft intensiv — gleiche Bedürfnisse. Sie reguliert Populationsdichte, ist dichteabhängig. Je höher die Dichte, desto stärker die Konkurrenz. **Interspezifische Konkurrenz** (zwischen Arten) tritt bei überlappenden Nischen auf. Führt zu kompetitiver Verdrängung (Konkurrenzausschluss) oder Nischendifferenzierung. Das **Lotka-Volterra-Konkurrenzmodell** beschreibt die Dynamik zweier konkurrierender Populationen.\n\n' +
        '**Räuber-Beute-Beziehungen** (Prädation): Eine Art (Räuber) nutzt eine andere (Beute) als Nahrung. Die **Lotka-Volterra-Regeln**: (1) Periodische Schwankungen der Populationsgrößen um einen Mittelwert. (2) Phasenverschiebung — Räuber-Maximum folgt zeitversetzt auf Beute-Maximum. (3) Konstanter Mittelwert über lange Zeit. (4) Erholungsregel — bei gleichmäßiger Dezimierung erholt sich die Beute schneller als der Räuber. In der Realität weniger regelmäßig.\n\n' +
        '**Symbiose** (weiter Sinn) = enges Zusammenleben. **Mutualismus**: Beide profitieren. Mykorrhiza (Pilz liefert Pflanze Mineralstoffe, Pflanze liefert Pilz Zucker). Blütenpflanzen und Bestäuber. **Kommensalismus**: Ein Partner profitiert, der andere unbeeinflusst. Haibegleitfische fressen Nahrungsreste. **Parasitismus**: Parasit schadet dem Wirt. Unterschied zu Prädation: Parasit tötet Wirt nicht sofort, ist langfristig angewiesen.',
      merksätze: [
        'Lotka-Volterra-Regeln (Räuber-Beute): (1) Periodische Schwankungen, (2) Räuber-Maximum folgt zeitversetzt auf Beute-Maximum, (3) Konstante Mittelwerte, (4) Beute erholt sich schneller als Räuber.',
        'Konkurrenz: Intraspezifisch = innerhalb einer Art (dichteabhängig). Interspezifisch = zwischen Arten (kann zu Verdrängung oder Nischendifferenzierung führen).',
      ],
      altfrage: {
        question: 'Was besagen die Lotka-Volterra-Regeln?',
        answer:
          'Die Lotka-Volterra-Regeln beschreiben die Dynamik von Räuber-Beute-Systemen: Die Populationsgrößen schwanken periodisch, das Räuber-Maximum folgt zeitversetzt auf das Beute-Maximum, die Mittelwerte bleiben langfristig konstant, und nach gleichmäßiger Dezimierung erholt sich die Beute schneller.',
      },
      klinischerBezug:
        'Lotka-Volterra-Modelle in der Infektionsmedizin: **Immunsystem** (Räuber) vs. **Pathogene** (Beute). Nach **Chemotherapie** (Immunsuppression): Gleichmäßige Dezimierung beider Populationen. Erholungsregel erklärt **opportunistische Infektionen** — Bakterien/Pilze erholen sich schneller als Immunzellen. Beispiel: *Candida albicans* (Soor), *Pneumocystis jirovecii* (Pneumonie), CMV-Reaktivierung. **Antibiotikatherapie** bei Sepsis: Bakterien (Beute) werden dezimiert, aber Resistente überleben und vermehren sich schnell — transformierende Selektion.',
      selfTest: [
        {
          question: 'Was beschreibt die Phasenverschiebung in Lotka-Volterra-Systemen?',
          options: [
            'Räuber und Beute schwanken gleichzeitig',
            'Das Räuber-Maximum folgt zeitversetzt auf das Beute-Maximum',
            'Die Beutepopulation folgt dem Räubermaximum',
            'Beide Populationen wachsen gleichzeitig exponentiell',
            'Die Räuberpopulation erreicht ihr Minimum vor der Beutepopulation',
          ],
          correctIndex: 1,
          explanation:
            'Die Phasenverschiebung besagt, dass das Maximum der Räuberpopulation zeitversetzt auf das Maximum der Beutepopulation folgt: Erst wächst die Beute, dann vermehren sich die Räuber.',
        },
        {
          question: 'Was passiert laut Erholungsregel nach gleichmäßiger Dezimierung beider Populationen?',
          options: [
            'Beide erholen sich gleich schnell',
            'Der Räuber erholt sich schneller',
            'Die Beute erholt sich schneller als der Räuber',
            'Beide sterben aus',
            'Der Räuber verdoppelt seine Population, während die Beute konstant bleibt',
          ],
          correctIndex: 2,
          explanation:
            'Die Erholungsregel (4. Lotka-Volterra-Regel) besagt, dass sich die Beutepopulation nach gleichmäßiger Dezimierung schneller erholt als die Räuberpopulation, da die Beute weniger Nahrungsdruck hat.',
        },
        {
          question: 'Was ist ein Beispiel für Mutualismus?',
          options: [
            'Bandwurm im menschlichen Darm',
            'Mykorrhiza zwischen Pilz und Pflanzenwurzel',
            'Löwe jagt Zebra',
            'Kuckuck legt Eier in fremde Nester',
            'Flechte als Verbindung von Alge und Pilz',
          ],
          correctIndex: 1,
          explanation:
            'Mykorrhiza ist Mutualismus: Der Pilz liefert der Pflanze Wasser und Mineralstoffe, die Pflanze liefert dem Pilz Zucker aus der Photosynthese. Beide Partner profitieren.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // 7.4 Populationsökologie
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap7-4',
      title: 'Populationsökologie',
      content:
        'Populationsökologie untersucht Populationen — Größe, Dichte, Altersstruktur, Wachstumsraten. Eine Population ist die Gesamtheit aller Individuen einer Art in einem Gebiet zur gleichen Zeit. Fortpflanzungsgemeinschaft. Populationsgröße (N) wird bestimmt durch Geburtenrate (Natalität), Sterberate (Mortalität), Zuwanderung (Immigration), Abwanderung (Emigration).\n\n' +
        '**Exponentielles Wachstum** beschreibt theoretische Zunahme unter idealen Bedingungen ohne Limit. Formel: dN/dt = r·N (r = intrinsische Wachstumsrate). J-förmige Kurve mit zunehmend schnellerem Wachstum. In der Natur nur kurzzeitig — bei Besiedlung neuer Lebensräume, nach Katastrophen.\n\n' +
        '**Logistisches Wachstum** berücksichtigt Begrenzung durch Umweltkapazität (K). Formel: dN/dt = r·N·(K−N)/K. S-förmige Kurve: Anfangs exponentiell, dann Verlangsamung, Stabilisierung bei K. **K** = Kapazitätsgrenze — maximale Populationsgröße, die der Lebensraum dauerhaft trägt.\n\n' +
        '**r-Strategen** (Vermehrungsoptimierer): Viele Nachkommen, wenig Investition pro Individuum, kurze Generationszeit, hohe Sterblichkeit. Instabile Lebensräume, Pionierstrategie. Beispiele: Bakterien, Insekten, einjährige Pflanzen. **K-Strategen** (Kapazitätsoptimierer): Wenige Nachkommen, hohe Investition (Brutpflege), lange Lebensdauer, niedrige Sterblichkeit. Stabile Lebensräume, leben nahe K. Beispiele: Elefanten, Wale, Menschenaffen, Mensch. Meiste Arten liegen zwischen den Extremen.',
      merksätze: [
        'Exponentielles Wachstum: dN/dt = r·N (J-Kurve, ohne Limit). Logistisches Wachstum: dN/dt = r·N·(K−N)/K (S-Kurve, mit Kapazitätsgrenze K).',
        'r-Strategen: Viele Nachkommen, wenig Investition, instabile Lebensräume. K-Strategen: Wenige Nachkommen, viel Investition (Brutpflege), stabile Lebensräume.',
      ],
      altfrage: {
        question: 'Was ist der Unterschied zwischen exponentiellem und logistischem Wachstum?',
        answer:
          'Exponentielles Wachstum (J-Kurve) beschreibt unbegrenztes Wachstum ohne limitierende Faktoren. Logistisches Wachstum (S-Kurve) berücksichtigt die Kapazitätsgrenze K des Lebensraums: Das Wachstum verlangsamt sich und stabilisiert sich bei K.',
      },
      klinischerBezug:
        'Bakterienwachstum in Kultur zeigt exponentielle Phase (log-Phase). **Antibiotikatherapie** ist am effektivsten in dieser Phase — Bakterien teilen sich aktiv. Zellwandantibiotika (Beta-Lactame, Glykopeptide) wirken nur auf teilende Bakterien. In der stationären Phase (Kapazität erreicht) sind viele Antibiotika weniger wirksam. **Tumorwachstum** folgt logistischer Kurve. Initial exponentiell (kleine Tumoren verdoppeln sich schnell). Bei Größe >1 cm: Verlangsamung durch Nährstoff- und Sauerstofflimit. **Angiogenese** (Neubildung von Blutgefäßen) erhöht K — Tumor wächst weiter.',
      selfTest: [
        {
          question: 'Welche Wachstumsform zeigt eine S-förmige Kurve?',
          options: [
            'Exponentielles Wachstum',
            'Logistisches Wachstum',
            'Lineares Wachstum',
            'Negatives Wachstum',
            'Hyperbolisches Wachstum',
          ],
          correctIndex: 1,
          explanation:
            'Logistisches Wachstum zeigt eine S-förmige (sigmoide) Kurve: Nach anfänglich exponentiellem Wachstum verlangsamt es sich bei Annäherung an die Kapazitätsgrenze K.',
        },
        {
          question: 'Welches ist ein typisches Merkmal von r-Strategen?',
          options: [
            'Wenige Nachkommen mit intensiver Brutpflege',
            'Lange Lebensdauer und späte Geschlechtsreife',
            'Viele Nachkommen mit hoher Sterblichkeitsrate',
            'Leben nahe der Kapazitätsgrenze in stabilen Ökosystemen',
            'Hohe genetische Diversität innerhalb der Population',
          ],
          correctIndex: 2,
          explanation:
            'r-Strategen erzeugen viele Nachkommen mit wenig Investition pro Individuum. Die Sterblichkeitsrate ist hoch, aber die hohe Reproduktionsrate sichert das Überleben der Art.',
        },
        {
          question: 'Was beschreibt die Kapazitätsgrenze K?',
          options: [
            'Die maximale Reproduktionsrate einer Art',
            'Die maximale Populationsgröße, die ein Lebensraum dauerhaft tragen kann',
            'Die minimale überlebensfähige Populationsgröße',
            'Die Geschwindigkeit des Populationswachstums',
            'Die Anzahl der Trophieebenen in einem Nahrungsnetz',
          ],
          correctIndex: 1,
          explanation:
            'Die Kapazitätsgrenze K ist die maximale Populationsgröße, die ein Lebensraum auf Dauer tragen kann. Sie wird durch die verfügbaren Ressourcen und Umweltbedingungen bestimmt.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // 7.5 Stoffkreisläufe
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap7-5',
      title: 'Stoffkreisläufe',
      content:
        'Stoffkreisläufe (biogeochemische Kreisläufe) beschreiben den Weg chemischer Elemente durch Biosphäre, Atmosphäre, Hydrosphäre, Lithosphäre. Im Gegensatz zu Energie (verlässt als Wärme, muss nachgeliefert werden) werden Stoffe zyklisch umgewandelt. Produzenten bauen anorganische Stoffe in organische ein, Konsumenten geben sie weiter, Destruenten zersetzen organisches Material wieder in anorganische Substanzen. Wichtigste Kreisläufe: Kohlenstoff, Stickstoff, Wasser.\n\n' +
        'Der **Kohlenstoffkreislauf** ist eng mit Energiefluss verknüpft. CO₂ in der Atmosphäre (ca. 0,04%). **Photosynthese**: Pflanzen fixieren CO₂ in Glucose. 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂. **Zellatmung** (alle Lebewesen): Organischer Kohlenstoff wird zu CO₂ oxidiert. C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + Energie. **Destruenten** zersetzen totes Material, setzen CO₂ frei (Mineralisation). Langfristige Speicher (Senken): Fossile Brennstoffe (Kohle, Erdöl, Erdgas), Kalkgestein, Ozeane. **Verbrennung fossiler Brennstoffe** durch Menschen setzt gespeicherten Kohlenstoff frei — anthropogener Treibhauseffekt.\n\n' +
        'Der **Stickstoffkreislauf** ist komplex. Atmosphärischer N₂ (78% der Luft) ist für meiste Organismen nicht nutzbar. **Stickstofffixierung**: Bakterien (Rhizobium in Leguminosen-Symbiose, freilebende Cyanobakterien) und Blitze wandeln N₂ in NH₄⁺ um. **Nitrifikation**: Bakterielle Oxidation von NH₄⁺ zu NO₂⁻ (Nitrosomonas) und weiter zu NO₃⁻ (Nitrobacter). Pflanzen nehmen NO₃⁻ und NH₄⁺ auf, bauen N in Aminosäuren/Proteine ein (Assimilation). Bei Zersetzung wird N als NH₄⁺ freigesetzt (Ammonifikation). **Denitrifikation**: Anärobe Bakterien wandeln NO₃⁻ zurück in N₂, schließen den Kreislauf. Der **Wasserkreislauf** verbindet alle Ökosysteme: Verdunstung, Transpiration durch Pflanzen, Wolkenbildung, Niederschlag, Abfluss.',
      merksätze: [
        'Kohlenstoffkreislauf: CO₂-Fixierung (Photosynthese) ↔ CO₂-Freisetzung (Zellatmung, Zersetzung, Verbrennung). Fossile Brennstoffe = langfristige C-Speicher.',
        'Stickstoffkreislauf: N₂-Fixierung (Bakterien) → NH₄⁺ → Nitrifikation → NO₃⁻ → Assimilation → Ammonifikation → NH₄⁺ / Denitrifikation → N₂.',
      ],
      altfrage: {
        question: 'Welche Bakterien sind an der Nitrifikation beteiligt?',
        answer:
          'Nitrifikation ist ein zweistufiger Prozess: Nitrosomonas oxidiert Ammonium (NH₄⁺) zu Nitrit (NO₂⁻), und Nitrobacter oxidiert Nitrit weiter zu Nitrat (NO₃⁻). Nitrat ist die Hauptstickstoffquelle für Pflanzen.',
      },
      klinischerBezug:
        '**Nitrat im Trinkwasser** durch Überdüngung. Im Magen-Darm-Trakt wird NO₃⁻ zu NO₂⁻ reduziert. Nitrit reagiert mit Aminen zu **Nitrosaminen** (kanzerogen — Magenkarzinom). Bei Säuglingen: **Methämoglobinämie** (Blausucht). Nitrit oxidiert Hämoglobin (Fe²⁺) zu Methämoglobin (Fe³⁺) — kann keinen Sauerstoff binden. Symptome: Zyanose, Atemnot. Grenzwert: 50 mg NO₃⁻/L Trinkwasser. **Stickstoffmonoxid** (NO) ist ein wichtiger Signalstoff. Endothelzellen produzieren NO — Vasodilatation. **Nitrate** (Glyceroltrinitrat, Isosorbiddinitrat) werden zu NO metabolisiert — Therapie bei Angina pectoris.',
      selfTest: [
        {
          question: 'Welcher Prozess fixiert atmosphärischen Stickstoff (N₂)?',
          options: [
            'Nitrifikation durch Nitrobacter',
            'Denitrifikation durch anärobe Bakterien',
            'Stickstofffixierung durch Rhizobium und Cyanobakterien',
            'Ammonifikation durch Destruenten',
            'Assimilation durch Pflanzenwurzeln in Form von N₂',
          ],
          correctIndex: 2,
          explanation:
            'Die Stickstofffixierung wird von spezialisierten Bakterien durchgeführt (z. B. Rhizobium in Symbiose mit Leguminosen, freilebende Cyanobakterien). Sie wandeln atmosphärisches N₂ in biologisch nutzbares Ammonium (NH₄⁺) um.',
        },
        {
          question: 'Was ist die Hauptursache des anthropogenen Treibhauseffekts?',
          options: [
            'Übermäßige Photosynthese',
            'Verbrennung fossiler Brennstoffe und Freisetzung von CO₂',
            'Zunahme der Denitrifikation',
            'Abholzung von Nadelwäldern',
            'Anstieg der Methanproduktion durch Vulkanismus',
          ],
          correctIndex: 1,
          explanation:
            'Die Verbrennung fossiler Brennstoffe (Kohle, Erdöl, Erdgas) setzt langfristig gespeicherten Kohlenstoff als CO₂ frei und erhöht den atmosphärischen CO₂-Gehalt — die Hauptursache des anthropogenen (menschengemachten) Treibhauseffekts.',
        },
        {
          question: 'Was beschreibt die Denitrifikation?',
          options: [
            'Die Umwandlung von N₂ in NH₄⁺',
            'Die Oxidation von NH₄⁺ zu NO₃⁻',
            'Die Umwandlung von NO₃⁻ zurück in N₂ durch anärobe Bakterien',
            'Die Aufnahme von Nitrat durch Pflanzen',
            'Die Oxidation von Ammonium zu Nitrit durch Nitrosomonas',
          ],
          correctIndex: 2,
          explanation:
            'Denitrifikation ist die Umwandlung von Nitrat (NO₃⁻) zurück in atmosphärischen Stickstoff (N₂) durch anärobe Bakterien. Sie schließt den Stickstoffkreislauf und findet in sauerstoffarmen Böden und Gewässern statt.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // 7.6 Energiefluss
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap7-6',
      title: 'Energiefluss',
      content:
        'Energiefluss ist gerichtet, nicht-zyklisch — im Gegensatz zu Stoffkreisläufen. Sonnenenergie ist die primäre Quelle (Ausnahme: chemolithoautotrophe Ökosysteme an Tiefseequellen). Nur ca. 1–2% der Sonnenenergie wird von Produzenten durch Photosynthese in chemische Energie umgewandelt. Diese Energie fließt durch Trophieebenen, wird bei jeder Weitergabe stark reduziert — großer Teil geht als Wärme verloren (2. Hauptsatz der Thermodynamik).\n\n' +
        '**Trophieebenen** gliedern Organismen nach Stellung im Nahrungsnetz. **Produzenten** (autotroph, grüne Pflanzen, Algen) = erste Trophieebene. Wandeln anorganische Stoffe durch Photosynthese in energiereiche organische Verbindungen um. Grundlage jeder Nahrungskette. **Primärkonsumenten** (Herbivoren, Pflanzenfresser) = zweite Trophieebene. **Sekundärkonsumenten** (Karnivoren 1. Ordnung) fressen Herbivoren. **Tertiärkonsumenten** (Karnivoren 2. Ordnung) fressen Sekundärkonsumenten. **Destruenten** (Bakterien, Pilze) bauen totes organisches Material aller Ebenen ab, führen Nährstoffe zurück. **Nahrungskette** = lineare Abfolge. **Nahrungsnetz** = alle verflochtenen Nahrungsketten — realistischer, da Organismen mehrere Nahrungsquellen haben.\n\n' +
        'Die **10-Prozent-Regel** (Lindeman, 1942): Nur ca. 10% der Energie gehen von einer Trophieebene zur nächsten über. 90% verloren durch Zellatmung (Wärme), nicht-verwertbare Biomasse, nicht gefressenes Material. Erklärt, warum Nahrungsketten typischerweise nur 4–5 Ebenen haben — verfügbare Energie reicht nicht für weitere Ebenen. Erklärt auch die ökologische Pyramide (Biomasse nimmt mit jeder Ebene ab). **Bruttoprimärproduktion** (BPP) = Gesamtmenge organischer Substanz durch Photosynthese. **Nettoprimärproduktion** (NPP) = BPP minus Eigenatmung der Produzenten — steht Konsumenten zur Verfügung.',
      merksätze: [
        'Trophieebenen: Produzenten → Primärkonsumenten (Herbivoren) → Sekundärkonsumenten (Karnivoren 1. Ordnung) → Tertiärkonsumenten. Destruenten zersetzen totes Material aller Ebenen.',
        '10-Prozent-Regel: Nur ca. 10 % der Energie geht von einer Trophieebene zur nächsten über. Deshalb haben Nahrungsketten meist nur 4–5 Ebenen.',
      ],
      altfrage: {
        question: 'Warum haben Nahrungsketten typischerweise nur 4–5 Glieder?',
        answer:
          'Aufgrund der 10-Prozent-Regel geht bei jeder Trophieebene ca. 90 % der Energie als Wärme verloren. Nach 4–5 Ebenen ist die verbleibende Energiemenge zu gering, um weitere Trophieebenen zu unterstützen.',
      },
      klinischerBezug:
        '**Biomagnifikation** (Anreicherung lipophiler Giftstoffe in der Nahrungskette). Beispiel 1: **Quecksilber in Fischen**. Industrieabwässer enthalten Hg. Bakterien wandeln es in Methylquecksilber um (lipophil). Plankton nimmt es auf. Kleine Fische fressen Plankton, große Fische fressen kleine Fische. Quecksilber reichert sich an. Raubfische (Thunfisch, Schwertfisch) haben höchste Konzentrationen. **Minamata-Krankheit** (Japan, 1950er): Hg-Vergiftung durch Fischkonsum — neurologische Schäden, Ataxie, Sehstörungen. Beispiel 2: **PCB** (polychlorierte Biphenyle) in Muttermilch — Anreicherung über die Nahrungskette.',
      selfTest: [
        {
          question: 'Wie viel Prozent der Energie werden typischerweise von einer Trophieebene zur nächsten weitergegeben?',
          options: [
            'Ca. 50 %',
            'Ca. 90 %',
            'Ca. 10 %',
            'Ca. 1 %',
            'Ca. 25 %',
          ],
          correctIndex: 2,
          explanation:
            'Die 10-Prozent-Regel besagt, dass nur ca. 10 % der Energie von einer Trophieebene zur nächsten übergeht. 90 % gehen durch Zellatmung als Wärme verloren oder werden nicht verwertet.',
        },
        {
          question: 'Was ist der Unterschied zwischen Nahrungskette und Nahrungsnetz?',
          options: [
            'Es gibt keinen Unterschied',
            'Die Nahrungskette beschreibt nur Pflanzen, das Nahrungsnetz nur Tiere',
            'Die Nahrungskette ist linear, das Nahrungsnetz umfasst alle verflochtenen Nahrungsketten',
            'Das Nahrungsnetz hat nur 2 Trophieebenen',
            'Die Nahrungskette beginnt immer mit Konsumenten, das Nahrungsnetz mit Produzenten',
          ],
          correctIndex: 2,
          explanation:
            'Eine Nahrungskette ist eine lineare Abfolge von Organismen. Ein Nahrungsnetz ist die Gesamtheit aller miteinander verflochtenen Nahrungsketten — es bildet die Realität besser ab, da Organismen meist mehrere Nahrungsquellen haben.',
        },
        {
          question: 'Was beschreibt die Nettoprimärproduktion?',
          options: [
            'Die Gesamtmenge an Energie im Ökosystem',
            'Die Bruttoprimärproduktion abzüglich der Eigenatmung der Produzenten',
            'Die Energiemenge, die Destruenten freisetzen',
            'Die Energieaufnahme der Konsumenten',
            'Die Gesamtbiomasse aller Trophieebenen eines Ökosystems',
          ],
          correctIndex: 1,
          explanation:
            'Die Nettoprimärproduktion (NPP) = Bruttoprimärproduktion (BPP) minus Eigenatmung der Produzenten. Die NPP steht den Konsumenten als Nahrung zur Verfügung.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // 7.7 Ökosystem Wald/See
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap7-7',
      title: 'Ökosystem Wald/See',
      content:
        'Ökosysteme zeigen räumliche Strukturen (Zonierung). Im **Wald** unterscheidet man vertikale Schichten (Stockwerke): Baumschicht (Kronendach), Strauchschicht, Krautschicht, Moosschicht, Bodenschicht (Edaphon). Bietet viele ökologische Nischen, ermöglicht Koexistenz vieler Arten. Wälder sind die produktivsten terrestrischen Ökosysteme, zentrale Rolle im CO₂-Kreislauf (Senken). In Mitteleuropa: natürliche Vegetation = Buchenwälder, vielfach durch Fichten oder Agrarland ersetzt.\n\n' +
        'Ein **See** zeigt horizontale und vertikale Zonierung. **Horizontal**: **Litoral** (Uferzone, Wasserpflanzen, hohe Artenvielfalt), **Pelagial** (Freiwasserzone, Plankton, Fische), **Profundal** (Tiefenzone, lichtlos, Destruenten). **Vertikal**: **Trophogene Zone** (euphotische Zone) — Licht reicht für Photosynthese, Produktion > Abbau. **Tropholytische Zone** (aphotische Zone) — kein Licht, Abbau > Produktion. Grenze = **Kompensationsebene** (Photosynthese = Zellatmung im Gleichgewicht). Temperaturschichtung: **Epilimnion** (warme Oberfläche), **Metalimnion/Thermokline** (Sprungschicht, rascher Temperaturabfall), **Hypolimnion** (kalte Tiefe). Herbst- und Frühjahrszirkulation (Durchmischung) transportiert Nährstoffe in trophogene Zone.\n\n' +
        '**Sukzession** ist die zeitliche Abfolge von Lebensgemeinschaften. **Primärsukzession**: Beginnt auf unbesiedeltem Substrat (Vulkanausbruch, neue Insel, Gletscher-Rückzug). Pionierpflanzen (Flechten, Moose) besiedeln zuerst, verbessern Boden. Werden ersetzt durch Gräser, Sträucher, schließlich Bäume. **Sekundärsukzession**: Nach Störung auf vorhandenem Boden (Waldbrand, Rodung, Sturm), verläuft schneller. Endet in **Klimaxgesellschaft** — stabiler Endzustand unter gegebenen Klimabedingungen. In Mitteleuropa: Buchenwald. In Realität oft durch Störungen verhindert.',
      merksätze: [
        'See-Zonierung: Litoral (Ufer) → Pelagial (Freiwasser) → Profundal (Tiefe). Trophogene Zone (Licht, Produktion) vs. Tropholytische Zone (kein Licht, Abbau). Kompensationsebene = Gleichgewicht.',
        'Sukzession: Pionierstadium → Zwischenstadien → Klimaxgesellschaft (stabiler Endzustand). Primärsukzession auf neuem Substrat, Sekundärsukzession nach Störung.',
      ],
      altfrage: {
        question: 'Was ist die Kompensationsebene in einem See?',
        answer:
          'Die Kompensationsebene ist die Tiefe, in der Photosynthese und Zellatmung genau im Gleichgewicht stehen. Oberhalb (trophogene Zone) überwiegt die Produktion, unterhalb (tropholytische Zone) überwiegt der Abbau organischer Substanz.',
      },
      klinischerBezug:
        '**Eutrophierung** von Seen (Nährstoffüberschuss durch Dünger, Abwässer) fördert Algenblüten. Absterben der Algen → Sauerstoffzehrung durch Destruenten → **Hypoxie** (Sauerstoffmangel). **Cyanobakterien** (Blaualgen) produzieren Toxine. Beispiel 1: **Microcystine** (Lebertoxine) — Hepatotoxizität, Leberkarzinom-Förderung. Beispiel 2: **Anatoxine** (Neurotoxine) — cholinerge Krise, Muskelzuckungen, Atemlähmung. Im Trinkwasser: WHO-Grenzwert 1 μg Microcystin-LR/L. Symptome bei Kontakt: Hautreizungen, Gastroenteritis. Schwimmen in betroffenen Seen verboten.',
      selfTest: [
        {
          question: 'Was beschreibt die trophogene Zone eines Sees?',
          options: [
            'Die lichtlose Tiefenzone',
            'Die durchlichtete Zone, in der Produktion überwiegt',
            'Die Uferzone mit Wasserpflanzen',
            'Die Sprungschicht mit raschem Temperaturabfall',
            'Die Zone mit der höchsten Destruentenaktivität',
          ],
          correctIndex: 1,
          explanation:
            'Die trophogene Zone (euphotische Zone) ist der durchlichtete Bereich eines Sees, in dem Photosynthese stattfindet und die Produktion den Abbau überwiegt.',
        },
        {
          question: 'Was ist die Klimaxgesellschaft?',
          options: [
            'Die erste Lebensgemeinschaft bei der Primärsukzession',
            'Eine instabile Übergangsgesellschaft',
            'Der stabile Endzustand der Sukzession unter gegebenen Klimabedingungen',
            'Eine künstlich angelegte Pflanzengemeinschaft',
            'Die artenreichste Phase der Sukzession vor dem Endzustand',
          ],
          correctIndex: 2,
          explanation:
            'Die Klimaxgesellschaft ist der stabile Endzustand der Sukzession, der unter den gegebenen Klimabedingungen langfristig bestehen bleibt. In Mitteleuropa ist dies typischerweise ein Buchenwald.',
        },
        {
          question: 'Was ist der Unterschied zwischen Primär- und Sekundärsukzession?',
          options: [
            'Primärsukzession ist schneller als Sekundärsukzession',
            'Primärsukzession beginnt auf unbesiedeltem Substrat, Sekundärsukzession auf vorhandenem Boden',
            'Sekundärsukzession findet nur in Wäldern statt',
            'Es gibt keinen Unterschied',
            'Sekundärsukzession beginnt immer mit Flechten als Pionierorganismen',
          ],
          correctIndex: 1,
          explanation:
            'Primärsukzession beginnt auf unbesiedeltem Substrat (kein Boden vorhanden). Sekundärsukzession erfolgt nach einer Störung auf bereits vorhandenem Boden und verläuft schneller.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // 7.8 Umweltprobleme
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap7-8',
      title: 'Umweltprobleme',
      content:
        'Menschliche Zivilisation hat tiefgreifende Auswirkungen auf die Biosphäre. Wichtigste globale Umweltprobleme: Treibhauseffekt und Klimaerwärmung, Ozonschicht-Zerstörung, Biodiversitätsverlust, Verschmutzung von Luft/Wasser/Boden, Übernutzung natürlicher Ressourcen. Diese Probleme sind verknüpft. **Nachhaltigkeit** fordert: Ressourcennutzung, die gegenwärtige Bedürfnisse befriedigt, ohne künftige Generationen zu gefährden.\n\n' +
        'Der **Treibhauseffekt** ist natürlich und essenziell. Treibhausgase (CO₂, CH₄, N₂O, H₂O) absorbieren langwellige Wärmestrahlung, strahlen sie teilweise zurück. Ohne natürlichen Treibhauseffekt: mittlere Erdtemperatur −18°C statt +15°C. Der **anthropogene Treibhauseffekt** verstärkt den natürlichen Effekt durch erhöhte Freisetzung von Treibhausgasen. Hauptquellen: CO₂ (Verbrennung fossiler Brennstoffe, Abholzung), CH₄ (Viehwirtschaft, Reisanbau, Permafrostauftauen), N₂O (Landwirtschaft). Folgen: Globale Erwärmung, Meeresspiegelanstieg, veränderte Niederschlagsmuster, extreme Wetterereignisse, Verschiebung von Klima-/Vegetationszonen.\n\n' +
        'Das **Ozonloch** bezeichnet Ausdünnung der Ozonschicht (O₃) in der Stratosphäre (15–35 km), besonders über der Antarktis. Ozonschicht absorbiert schädliche UV-B-Strahlung, schützt vor DNA-Schäden und Hautkrebs. **FCKW** (Fluorchlorkohlenwasserstoffe, Kühlmittel, Treibgase) setzen in der Stratosphäre Chlorradikale frei — katalytischer Ozonabbau. Ein Chloratom zerstört tausende Ozonmoleküle. **Montreal-Protokoll** (1987) verbot FCKW — Erfolgsbeispiel, Ozonschicht regeneriert sich langsam.\n\n' +
        '**Biodiversitätsverlust** (Artenschwund) ist eine der gravierendsten Krisen. Hauptursachen: Lebensraumzerstörung (Abholzung, Urbanisierung, Landwirtschaft), Übernutzung (Überfischung, Wilderei), invasive Arten, Umweltverschmutzung, Klimawandel. Derzeitiges **6. Massenaussterben** ist 100- bis 1000-fach schneller als natürliche Rate. Biodiversität umfasst drei Ebenen: genetische Vielfalt (innerhalb von Arten), Artenvielfalt, Ökosystemvielfalt. Folgen: Zusammenbruch von Nahrungsnetzen, Verlust von Ökosystemdienstleistungen (Bestäubung, Wasserreinigung, Klimaregulation, medizinische Substanzen), verringerte Resilienz.',
      merksätze: [
        'Natürlicher Treibhauseffekt: +33 °C (von −18 °C auf +15 °C). Anthropogener Treibhauseffekt: Verstärkung durch CO₂, CH₄, N₂O aus fossilen Brennstoffen, Landwirtschaft etc.',
        'Ozonloch: FCKW → Chlorradikale → katalytischer Ozonabbau. Montreal-Protokoll (1987) = Erfolg. Biodiversitätsverlust: 6. Massenaussterben durch Habitatzerstörung, Übernutzung, Klimawandel.',
      ],
      altfrage: {
        question: 'Was ist der Unterschied zwischen natürlichem und anthropogenem Treibhauseffekt?',
        answer:
          'Der natürliche Treibhauseffekt ist lebensnotwendig und erhöht die Erdtemperatur um ca. 33 °C (von −18 °C auf +15 °C). Der anthropogene Treibhauseffekt verstärkt diesen Effekt durch die menschengemachte Freisetzung zusätzlicher Treibhausgase (v. a. CO₂ aus fossilen Brennstoffen), was zur globalen Erwärmung führt.',
      },
      klinischerBezug:
        'Klimawandel hat direkte Gesundheitsfolgen. **Hitzewellen**: Zunahme hitzebedingter Todesfälle (Hitzschlag, kardiovaskuläre Dekompensation). Besonders gefährdet: Ältere, Herz-Kreislauf-Patienten. **Tropische Infektionskrankheiten** breiten sich aus. **Malaria** steigt in Höhenlagen (Ostafrika). **Dengue-Fieber** in Südeuropa (*Aedes albopictus*). **West-Nil-Virus** in Mitteleuropa. **Allergien** nehmen zu — verlängerte Pollenflugsaison, neue allergene Pflanzen (Ambrosia). **UV-Strahlung** durch Ozonloch: Erhöhtes Risiko für **Hautkrebs** (Melanom, Basaliom, Spinaliom) und **Katarakt** (grauer Star).',
      selfTest: [
        {
          question: 'Welches Gas ist der Haupttreiber des anthropogenen Treibhauseffekts?',
          options: [
            'Ozon (O₃)',
            'Stickstoff (N₂)',
            'Kohlendioxid (CO₂)',
            'Sauerstoff (O₂)',
            'Methan (CH₄)',
          ],
          correctIndex: 2,
          explanation:
            'CO₂ aus der Verbrennung fossiler Brennstoffe ist der Haupttreiber des anthropogenen Treibhauseffekts. Weitere wichtige Treibhausgase sind Methan (CH₄) und Lachgas (N₂O).',
        },
        {
          question: 'Was verursacht das Ozonloch?',
          options: [
            'Erhöhte CO₂-Konzentration',
            'FCKW, die Chlorradikale freisetzen und katalytisch Ozon abbauen',
            'Natürliche UV-Strahlung',
            'Vulkanausbrüche',
            'Übermäßiger Einsatz von Stickstoffdüngern in der Landwirtschaft',
          ],
          correctIndex: 1,
          explanation:
            'FCKW (Fluorchlorkohlenwasserstoffe) setzen in der Stratosphäre Chlorradikale frei, die katalytisch Ozon abbauen. Ein Chloratom kann tausende Ozonmoleküle zerstören.',
        },
        {
          question: 'Was sind die drei Ebenen der Biodiversität?',
          options: [
            'Bakterien, Pflanzen, Tiere',
            'Genetische Vielfalt, Artenvielfalt, Ökosystemvielfalt',
            'Wasser, Land, Luft',
            'Produzenten, Konsumenten, Destruenten',
            'Morphologische Vielfalt, Verhaltensvielfalt, Stoffwechselvielfalt',
          ],
          correctIndex: 1,
          explanation:
            'Biodiversität umfasst drei Ebenen: (1) Genetische Vielfalt innerhalb von Arten, (2) Artenvielfalt in Lebensgemeinschaften, (3) Ökosystemvielfalt in der Landschaft.',
        },
      ],
    },
  ],
};
