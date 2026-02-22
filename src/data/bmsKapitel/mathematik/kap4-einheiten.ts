import type { Kapitel } from '../types';

export const mathKap4: Kapitel = {
  id: 'math-kap4',
  title: 'Einheiten und Maße',
  subject: 'mathematik',
  icon: '📊',
  estimatedTime: '45 min',
  unterkapitel: [
    {
      id: 'ma-4-01',
      title: 'Länge, Fläche und Volumen — Umrechnung',
      content: `# Länge, Fläche und Volumen — Umrechnung

Die Umrechnung von Maßeinheiten gehört zu den häufigsten Fehlerquellen am MedAT. Besonders tückisch sind Flächen- und Volumeneinheiten, da bei der Umrechnung nicht der Faktor 10, 100 oder 1000, sondern dessen Quadrat oder Kubik angewendet werden muss. Dieser Abschnitt erklärt das Prinzip systematisch und mit klinischen Bezügen.

## Längeneinheiten — Die vollständige Hierarchie

Die metrischen Längeneinheiten sind durch Zehnerpotenzen verbunden. Das Grundprinzip: Jede Einheitsstufe unterscheidet sich von der nächsten um den Faktor 10.

1 km = 1.000 m = 10³ m
1 m = 10 dm = 100 cm = 1.000 mm
1 mm = 1.000 μm = 10³ μm
1 μm = 1.000 nm = 10³ nm
1 nm = 1.000 pm = 10³ pm

Eselsbrücke: km → m → dm → cm → mm → μm → nm, je Schritt Faktor 10. Für größere Sprünge: 1 m = 10⁶ μm; 1 m = 10⁹ nm.

In der Medizin sind folgende Größenordnungen essenziell:
- Menschliche Körpergröße: ~1,7 m = 170 cm = 1.700 mm
- Erythrozyten: Durchmesser ~7–8 μm
- Zellkern: ~5–10 μm; Mitochondrien: 0,5–10 μm
- Viren: 20–300 nm (nicht im Lichtmikroskop sichtbar; Wellenlänge sichtbares Licht 400–700 nm)
- DNA-Doppelhelix: 2 nm Durchmesser; Glukosemolekül: ~0,9 nm
- Atome: ~0,1 nm (1 Ångström = 10⁻¹⁰ m)

Das Lichtmikroskop löst bis ~200 nm auf: Bakterien (~1 μm) sichtbar, Viren (~100 nm) nicht.

## Flächeneinheiten — Der häufigste Irrtum am MedAT

ACHTUNG: Bei Flächeneinheiten wird der Faktor QUADRIERT!

**1 m² = 10.000 cm² = 10⁴ cm²** (NICHT 100 cm²!)

Warum? 1 m² = 1 m × 1 m = 100 cm × 100 cm = 10.000 cm². In ein 1 m × 1 m Quadrat passen 100 × 100 = 10.000 Stück von 1 cm × 1 cm.

Allgemeine Regel: Wenn 1 Einheit₁ = k × Einheit₂, dann gilt 1 Einheit₁² = k² × Einheit₂².

Vollständige Flächenumrechnungen:
- 1 km² = 10⁶ m² = 100 ha (Hektar)
- 1 ha = 10.000 m² = 10⁴ m²
- 1 m² = 10⁴ cm² = 10⁶ mm²
- 1 cm² = 10² mm² = 100 mm²
- 1 mm² = 10⁶ μm²; 1 μm² = 10⁶ nm²

Klinisch relevante Flächen:
- Körperoberfläche Erwachsener: ~1,7–2,0 m² = 17.000–20.000 cm²
- Alveolenfläche der Lunge: ~70–140 m² (enorme Austauschfläche!)
- Dünndarmoberfläche (mit Zotten und Mikrovilli): ~250–400 m²
- Handflächenfläche: ~0,8 % KOF (Neuner-Regel in der Verbrennungsmedizin)

## Volumeneinheiten — Der Faktor wird kubisch

Bei Volumen wird der Faktor KUBIERT:

**1 m³ = 10⁶ cm³** (NICHT 10³ cm³!)

1 m³ = 100 cm × 100 cm × 100 cm = 10⁶ cm³ = 1.000.000 cm³

Wichtige Beziehungen:
- 1 m³ = 1.000 L (ein Kubikmeter fasst 1.000 Liter)
- **1 L = 1 dm³** (ein Liter = exakt ein Kubikdezimeter — Grunddefinition!)
- 1 L = 1.000 mL = 1.000 cm³
- **1 mL = 1 cm³** (sehr wichtig in der Medizin!)
- 1 dL = 100 mL (für Laborwerte: mg/dL, g/dL)
- 1 μL = 0,001 mL = 10⁻³ mL (Blutbild: Erythrozyten/μL)

Klinisch relevante Volumina:
- Gesamtblutvolumen Erwachsener: ~5 L = 5.000 mL
- Herzschlagvolumen: ~70 mL; HZV: ~5 L/min (Ruhe)
- Atemzugvolumen: ~500 mL; Totalkapazität Lunge: ~6 L
- Tagesharnmenge: ~1.500 mL; Perspiratio insensibilis: ~700 mL/Tag

## Der allgemeine Umrechnungsalgorithmus

1. Länge: Faktor k → k¹
2. Fläche: Faktor k → k²
3. Volumen: Faktor k → k³

Beispiel (1 km = 10³ m):
- Fläche: 1 km² = (10³)² m² = 10⁶ m²
- Volumen: 1 km³ = (10³)³ m³ = 10⁹ m³

## MedAT-Fallen zusammengefasst

1. 1 m² = 10.000 cm² (nicht 100 cm²!) — häufigster Fehler!
2. 1 m³ = 10⁶ cm³ (nicht 10³ cm³!)
3. 1 L = 1.000 mL (nicht 100 mL)
4. 1 mL = 1 cm³ (identisch, nicht 10 cm³)
5. 1 dL = 100 mL (für Laborwerte: g/dL, mg/dL)
6. 1 mm² = 10⁶ μm² (NICHT 10³ — Faktor quadrieren: 1 mm = 10³ μm → quadriert = 10⁶)

Körperoberfläche (Mosteller-Formel):
BSA [m²] = √(Größe[cm] × Gewicht[kg] / 3.600)
Für 170 cm, 70 kg: BSA = √(170 × 70 / 3.600) = √3,306 ≈ 1,82 m²

Die KOF wird in der Onkologie für Chemotherapiedosierungen und in der Intensivmedizin für Flüssigkeitsbilanzierung genutzt.`,
      lernziele: [
        'Längeneinheiten von km bis nm über die Zehnerpotenzen-Hierarchie korrekt umrechnen',
        'Den quadratischen Faktor bei Flächeneinheiten anwenden (1 m² = 10.000 cm², 1 cm² = 100 mm²)',
        'Den kubischen Faktor bei Volumeneinheiten anwenden (1 m³ = 10⁶ cm³, 1 L = 1 dm³ = 1.000 cm³)',
        'Die Beziehung 1 mL = 1 cm³ kennen und klinisch anwenden',
        'Medizinisch relevante Größenordnungen (Zellgröße, Organvolumina, Körperoberfläche) zuordnen',
      ],
      sections: [
        {
          heading: 'Längeneinheiten — lineare Umrechnung Schritt für Schritt',
          text: 'Die Hierarchie km → m → dm → cm → mm → μm → nm folgt dem Faktor 10 je Schritt. Für größere Sprünge addiert man die Zehnerpotenz-Exponenten: km → cm sind 5 Schritte à Faktor 10, also Faktor 10⁵. Konkret: 1 km = 10⁵ cm. Medizinische Größenordnungen als Ankerpunkte: Körpergröße ~1,7 m; Organebene Millimeter; Zellebene Mikrometer (μm); Virus- und DNA-Ebene Nanometer (nm). Das Lichtmikroskop löst bis ~200 nm auf, das Elektronenmikroskop bis ~0,1 nm. Zellen (μm-Bereich) sind im Lichtmikroskop sichtbar, Viren (nm-Bereich) nicht. Merktipp: Das Auflösungsvermögen des Auges beträgt ~0,1 mm = 100 μm — alles Kleinere braucht ein Mikroskop.',
          merksatz: 'Längenreihe km–m–dm–cm–mm–μm–nm, je Schritt Faktor 10; 1 m = 10⁶ μm = 10⁹ nm',
        },
        {
          heading: 'Flächeneinheiten — Faktor quadrieren',
          text: 'Wenn 1 Einheit₁ = k × Einheit₂, dann 1 Einheit₁² = k² × Einheit₂². Anschaulich: 1 m = 100 cm → 1 m² = 100² cm² = 10.000 cm². Die Alveolenfläche der Lunge von 70–140 m² = 700.000–1.400.000 cm², erreicht durch ~300–400 Millionen Alveolen. Klinisch: Die Körperoberfläche (KOF) wird in m² für Chemotherapie-Dosierungen (mg/m²) und Verbrennungsflächenberechnungen eingesetzt. Die Neuner-Regel schätzt verbrannte KOF-Anteile in Prozent: Kopf 9 %, je Arm 9 %, Rumpf vorne 18 %, Rumpf hinten 18 %, je Bein 18 %. Ab 15–20 % verbrannter KOF droht Plasmaverlust und hypovolämischer Schock.',
          merksatz: 'Fläche: Faktor quadrieren! 1 m² = 10.000 cm² (= 100² cm²), NICHT 100 cm²',
        },
        {
          heading: 'Volumeneinheiten — Faktor kubieren',
          text: 'Wenn 1 m = 100 cm, dann 1 m³ = (100 cm)³ = 10⁶ cm³. Die wichtigste Merkhilfe: 1 L = 1 dm³. Da 1 dm = 10 cm, gilt 1 dm³ = (10 cm)³ = 1.000 cm³. Also 1 L = 1.000 mL = 1.000 cm³. Daraus: 1 mL = 1 cm³. Diese Gleichheit ist in der Medizin allgegenwärtig: Infusionsmengen in mL, Injektionsvolumina in mL, Harnausscheidung in mL/h. Die Flüssigkeitsbilanz auf der Intensivstation wird stundengenau in mL geführt — Einfuhr minus Ausfuhr ergibt die Bilanz.',
          merksatz: '1 L = 1 dm³ = 1.000 mL = 1.000 cm³; 1 mL = 1 cm³ (exakte Gleichheit!)',
        },
        {
          heading: 'Klinische Volumenkonzepte im Überblick',
          text: 'Gesamtkörperwasser (TBW): ~60 % des Körpergewichts = ~42 L bei 70 kg. Davon: Intrazellulärraum ~28 L (2/3), Extrazellulärraum ~14 L (1/3). EZR teilt sich: Interstitium ~11 L und Plasma ~3 L. Plasmavolumen ~3 L plus Erythrozytenvolumen ~2 L = Gesamtblutvolumen ~5 L. Infusionslösungen verteilen sich unterschiedlich: Kristalloide (NaCl 0,9 %, Ringerlaktat) im gesamten EZR; kolloidale Lösungen bleiben länger intravaskulär. Beim hypovolämischen Schock (Blutverlust >750 mL) ist schnelle Volumensubstitution lebensrettend: 1.000–2.000 mL Kristalloide initial.',
          merksatz: 'Gesamtblutvolumen ~5 L; Gesamtkörperwasser ~42 L bei 70 kg; Plasmavolumen ~3 L',
        },
      ],
      merksätze: [
        '1 m² = 10.000 cm² (nicht 100!) — Flächenumrechnung: Faktor quadrieren',
        '1 m³ = 10⁶ cm³; 1 L = 1 dm³ = 1.000 mL = 1.000 cm³; 1 mL = 1 cm³',
        'Länge × k → Fläche × k² → Volumen × k³',
        '1 km = 10³ m = 10⁵ cm = 10⁶ mm = 10⁹ μm = 10¹² nm',
        'Alveolenfläche Lunge: ~70–140 m²; Darmoberfläche: ~250–400 m²',
        '1 dL = 100 mL (relevant für Laborwerte: mg/dL, g/dL)',
        'Zellgröße: μm-Bereich; Viren: nm-Bereich; Moleküle: sub-nm-Bereich',
        '1 ha = 10.000 m² = 10⁴ m²',
        'Körperoberfläche Erwachsener: ~1,73 m² (Mosteller-Formel)',
        '1 mm² = 10⁶ μm² (NICHT 10³ — Faktor quadrieren!)',
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: 'Eine quadratische Wundfläche hat eine Kantenlänge von 3 cm. Berechnen Sie die Wundfläche in mm². Erklären Sie das Prinzip der Flächenumrechnung und nennen Sie ein klinisches Beispiel, bei dem Flächenberechnungen relevant sind.',
        answer: 'Berechnung: Schritt 1: Fläche in cm²: A = 3 cm × 3 cm = 9 cm². Schritt 2: Umrechnung cm² → mm²: Da 1 cm = 10 mm, gilt für Flächen 1 cm² = (10 mm)² = 100 mm² — der Faktor wird quadriert! Daher: 9 cm² × 100 mm²/cm² = 900 mm². Alternativ direkt in mm rechnen: 3 cm = 30 mm → A = 30 mm × 30 mm = 900 mm². Ergebnis: 900 mm². Prinzip: Bei Flächenumrechnungen wird der Längenfaktor quadriert (k → k²). Klinisches Beispiel: In der Verbrennungsmedizin wird die verbrannte Körperoberfläche (KOF) nach der Neuner-Regel geschätzt. Ab 15–20 % verbrannter KOF droht hypovolämischer Schock durch Plasmaverlust. Volumentherapie nach Parkland-Formel: 4 mL × kg Körpergewicht × % verbrannte KOF in den ersten 24 Stunden. Bei 70 kg und 20 % verbrannter KOF: 4 × 70 × 20 = 5.600 mL in 24 h. Die KOF-Berechnung nach Mosteller: BSA = √(Größe[cm] × Gewicht[kg] / 3.600) liefert die absolute Fläche in m² für präzise Dosierungen.',
      },
      klinischerBezug: 'In der Onkologie wird die Körperoberfläche (BSA) für Chemotherapiedosierungen genutzt: Dosierung [mg] = Dosis [mg/m²] × BSA [m²]. Die Darmoberfläche von ~250 m² ermöglicht die Resorption von täglich ~8–9 L Flüssigkeit; bei Resektion großer Dünndarmanteile (Kurzdarmsyndrom) ist die verbleibende Resorptionsfläche direkt lebensrelevant. Die Alveolenfläche von ~70–140 m² erlaubt Gasaustausch von 250 mL O₂/min in Ruhe und bis 3.500 mL O₂/min bei Maximalbelastung — dies erklärt, warum schon kleine Atelektasen (kollabierte Bezirke) messbare Oxygenierungsstörungen verursachen.',
      selfTest: [
        {
          question: '1 m² entspricht wie viel cm²?',
          options: ['10.000 cm²', '100 cm²', '1.000 cm²', '1.000.000 cm²', '10 cm²'],
          correctIndex: 0,
          explanation: '1 m = 100 cm. Bei Flächen wird der Faktor quadriert: 1 m² = (100 cm)² = 10.000 cm². Das ist der häufigste MedAT-Irrtum — viele denken 100 cm², aber der Faktor 100 muss quadriert werden: 100² = 10.000. Anschaulich: In ein 1 m × 1 m Quadrat passen 100 × 100 = 10.000 Quadrate von je 1 cm × 1 cm. Diese Frage wird regelmäßig am MedAT gestellt und ebenso regelmäßig falsch beantwortet.',
          hints: ['1 m = 100 cm. Was ist 100 zum Quadrat?', 'In ein 1 m × 1 m Quadrat passen 100 × 100 = ? Zentimeterquadrate.'],
          difficulty: 1,
          tags: ['flächeneinheiten', 'umrechnung', 'quadrat'],
        },
        {
          question: 'Wie viele mL sind 2,5 L?',
          options: ['2.500 mL', '250 mL', '25.000 mL', '0,25 mL', '25 mL'],
          correctIndex: 0,
          explanation: '1 L = 1.000 mL. Daher: 2,5 L = 2,5 × 1.000 mL = 2.500 mL. Diese Umrechnung ist in der klinischen Praxis täglich relevant: Infusionsflaschen haben meist 250 mL, 500 mL oder 1.000 mL. Täglicher Flüssigkeitsbedarf eines Erwachsenen: ~2.500 mL = 2,5 L. Für die Intensivstation: stündliche Flüssigkeitsbilanz in mL/h erfordert die sichere Umrechnung.',
          hints: ['1 L = 1.000 mL. Multipliziere 2,5 mit 1.000.', '2,5 × 1.000 = 2.500.'],
          difficulty: 1,
          tags: ['volumeneinheiten', 'umrechnung', 'liter'],
        },
        {
          question: '1 m³ entspricht wie viel cm³?',
          options: ['1.000.000 cm³', '1.000 cm³', '100.000 cm³', '10.000 cm³', '100 cm³'],
          correctIndex: 0,
          explanation: '1 m = 100 cm. Bei Volumen wird der Faktor kubiert: 1 m³ = (100 cm)³ = 100³ cm³ = 1.000.000 cm³ = 10⁶ cm³. Anschaulich: 1 m³ = 1.000 L (da 1 L = 1 dm³ und 1 m = 10 dm, also 1 m³ = 10³ dm³ = 1.000 L). Ein Badewannenvollbad fasst etwa 150–200 L = 0,15–0,20 m³. Merke: 100³ = 100 × 100 × 100 = 1.000.000.',
          hints: ['1 m = 100 cm. Was ist 100 hoch 3 (kubiert)?', '100 × 100 × 100 = ?'],
          difficulty: 2,
          tags: ['volumeneinheiten', 'umrechnung', 'kubikmeter'],
        },
        {
          question: 'Ein Injektionsvolumen beträgt 2 mL. Wie viel cm³ ist das?',
          options: ['2 cm³', '0,2 cm³', '20 cm³', '0,002 cm³', '200 cm³'],
          correctIndex: 0,
          explanation: '1 mL = 1 cm³ — diese Gleichheit gilt exakt per Definition: 1 L = 1 dm³ → 1 mL = 1/1.000 L = 1/1.000 dm³ = 1 cm³. Daher: 2 mL = 2 cm³. In der Medizin sind mL und cm³ vollständig austauschbar. Spritzen werden in mL angegeben (1-mL, 5-mL, 10-mL-Spritze), und das Volumen entspricht der Angabe in cm³. Injektionen i.m. sind typischerweise 1–5 mL.',
          hints: ['1 mL = 1 cm³ ist eine exakte Gleichheit per Definition.', 'Keine Umrechnung nötig: 2 mL = 2 cm³.'],
          difficulty: 1,
          tags: ['volumeneinheiten', 'milliliter', 'klinisch'],
        },
        {
          question: 'Eine rechteckige Wundauflage misst 5 cm × 8 cm. Wie groß ist die Fläche in mm²?',
          options: ['4.000 mm²', '400 mm²', '40 mm²', '40.000 mm²', '4 mm²'],
          correctIndex: 0,
          explanation: 'Schritt 1: Fläche in cm²: A = 5 cm × 8 cm = 40 cm². Schritt 2: Umrechnung: 1 cm = 10 mm → 1 cm² = 10² mm² = 100 mm². A = 40 cm² × 100 = 4.000 mm². Alternativ: 5 cm = 50 mm; 8 cm = 80 mm → A = 50 mm × 80 mm = 4.000 mm². Beide Wege liefern das gleiche Ergebnis — immer auch durch Direktrechnung in der Zieleinheit prüfen.',
          hints: ['Zuerst Fläche in cm², dann 1 cm² = 100 mm² anwenden.', '5 × 8 = 40 cm²; 40 × 100 = 4.000 mm².'],
          difficulty: 2,
          tags: ['flächeneinheiten', 'umrechnung', 'wundfläche'],
        },
        {
          question: 'Welches Volumen in Liter hat ein Würfel mit Kantenlänge 2 dm?',
          options: ['8 L', '2 L', '6 L', '4 L', '0,008 L'],
          correctIndex: 0,
          explanation: 'V = a³ = (2 dm)³ = 8 dm³. Da 1 dm³ = 1 L: V = 8 L. Ein Würfel mit Kantenlänge 2 dm hat das 8-fache Volumen des Einheitswürfels (1 dm Kante = 1 L). Verdoppelung der Kantenlänge → 2³ = 8-faches Volumen. Klinische Analogie: Verdoppelung des Gefäßradius → 16-facher Fluss (Hagen-Poiseuille-Gesetz: Q ∝ r⁴). Kubisches Skalieren erklärt biologische Wachstumsphänomene.',
          hints: ['V = a³ = (2 dm)³ = ? dm³. Und 1 dm³ = 1 L.', '2³ = 8; also 8 dm³ = 8 L.'],
          difficulty: 2,
          tags: ['volumeneinheiten', 'würfel', 'dezimeter'],
        },
        {
          question: '1 mm² entspricht wie viel μm²?',
          options: ['1.000.000 μm²', '1.000 μm²', '100 μm²', '10.000 μm²', '100.000 μm²'],
          correctIndex: 0,
          explanation: '1 mm = 1.000 μm = 10³ μm. Für Flächen wird der Faktor quadriert: 1 mm² = (10³ μm)² = 10⁶ μm² = 1.000.000 μm². Anwendung: Ein Erythrozyt hat eine Fläche von ~140 μm² (bikonkave Scheibe, ~8 μm Durchmesser). In 1 mm² = 10⁶ μm² Blutausstrich-Fläche passen theoretisch viele tausend Erythrozyten — diese Größenordnung hilft bei Zellzählaufgaben.',
          hints: ['1 mm = 10³ μm. Bei Flächen: Faktor quadrieren: (10³)² = ?', '(10³)² = 10⁶ = 1.000.000.'],
          difficulty: 3,
          tags: ['flächeneinheiten', 'mikrometer', 'umrechnung'],
        },
        {
          question: 'Wie viel dL entsprechen 350 mL?',
          options: ['3,5 dL', '35 dL', '0,35 dL', '350 dL', '0,035 dL'],
          correctIndex: 0,
          explanation: '1 dL = 100 mL. Daher: 350 mL ÷ 100 = 3,5 dL. Der Deziliter ist in der Labormedizin wichtig: Blutglukose wird in mg/dL angegeben (Normwert nüchtern: 70–100 mg/dL), Hämoglobin in g/dL (Frauen 12–16 g/dL, Männer 13–17 g/dL). Umrechnung Glukose 100 mg/dL in mmol/L: 100 mg/dL = 1.000 mg/L = 1 g/L → in mmol/L: 1.000 mg/L ÷ 180 g/mol = 5,56 mmol/L (Molmasse Glukose: 180 g/mol).',
          hints: ['1 dL = 100 mL. Teile 350 durch 100.', '350 ÷ 100 = 3,5 dL.'],
          difficulty: 1,
          tags: ['volumeneinheiten', 'deziliter', 'umrechnung'],
        },
      ],
    },
    {
      id: 'ma-4-02',
      title: 'Zeit, Geschwindigkeit, Beschleunigung',
      content: `# Zeit, Geschwindigkeit, Beschleunigung

Zeit, Geschwindigkeit und Beschleunigung sind die kinematischen Grundgrößen der klassischen Mechanik. In der Medizin erscheinen sie bei der Berechnung der Herzfrequenz (Schläge/Sekunde = Hz), der Nervenleitgeschwindigkeit (m/s), der Blutströmungsgeschwindigkeit (cm/s bis m/s), der Beschleunigung des Blutes während der Herzaktion und in der Notfallmedizin bei Trauma-Mechanismen.

## Zeiteinheiten — Das nicht-dezimale System

Anders als metrische Längen- oder Masseneinheiten folgen Zeiteinheiten einem historisch gewachsenen 60er-System (Sexagesimalsystem) aus dem babylonischen Raum:

1 Minute (min) = 60 Sekunden (s)
1 Stunde (h) = 60 min = 3.600 s
1 Tag = 24 h = 1.440 min = 86.400 s
1 Woche = 7 Tage = 604.800 s
1 Jahr = 365,25 Tage ≈ 3,156 × 10⁷ s ≈ π × 10⁷ s (praktische Näherung!)

Besonders prüfungsrelevant: 1 h = 3.600 s; 1 Tag = 86.400 s; 1 Jahr ≈ π × 10⁷ s.

Medizinische Zeitskalen:
- Herzfrequenz 70/min → Periode T = 60/70 s ≈ 0,857 s (= 857 ms) pro Herzschlag
- EKG-Intervalle: PR-Intervall 120–200 ms; QRS < 120 ms; QT-Zeit 350–440 ms
- Halbwertszeiten von Medikamenten: Adenosin t½ < 10 s; Heparin i.v. t½ ~1,5 h; Amiodaron t½ 40–55 Tage!
- Gerinnungskaskade: Fibrinpolymerisation innerhalb von Sekunden bis Minuten

Frequenz und Periode: f = 1/T und T = 1/f
- Herzfrequenz 60/min = 1 Hz → T = 1 s
- Herzfrequenz 75/min = 1,25 Hz → T = 0,8 s = 800 ms
- Herzfrequenz 120/min (Tachykardie) = 2 Hz → T = 0,5 s

## Geschwindigkeit und ihre Umrechnung

Geschwindigkeit: v = s/t (Weg durch Zeit). SI-Einheit: m/s.

Umrechnung km/h ↔ m/s:
v [m/s] = v [km/h] / 3,6
v [km/h] = v [m/s] × 3,6

Herleitung: 1 km/h = 1.000 m / 3.600 s = 1/3,6 m/s ≈ 0,278 m/s.

Merkhilfe-Tabelle:
- 36 km/h = 10 m/s
- 72 km/h = 20 m/s
- 108 km/h = 30 m/s
- 1 m/s = 3,6 km/h

Physiologische Geschwindigkeiten:
- Aorta (Systole): ~1 m/s
- Arteriolen: ~10 cm/s = 0,1 m/s
- Kapillaren: ~0,5–1 mm/s = 0,001 m/s (1.000× langsamer als Aorta!)
- Blut in großen Venen: ~10–20 cm/s
- Nervenleitgeschwindigkeit A-alpha-Fasern (motorisch): 60–80 m/s
- Nervenleitgeschwindigkeit A-delta-Fasern (Schmerz): 5–30 m/s
- Nervenleitgeschwindigkeit C-Fasern (unmyelinisiert): 0,5–2 m/s
- Schallgeschwindigkeit in Gewebe: ~1.540 m/s (Ultraschalldiagnostik)

Der erste, scharfe Schmerz bei Verletzung wird über A-delta-Fasern (5–30 m/s) geleitet; der anhaltende, dumpfe Schmerz über C-Fasern (0,5–2 m/s). Das erklärt das zeitliche Muster der Schmerzwahrnehmung.

## Gleichförmige Bewegung

Bei konstanter Geschwindigkeit (a = 0):
s = v × t (Weg = Geschwindigkeit × Zeit)

Umgestellt: v = s/t; t = s/v

Beispiel: Blut in der Aorta (v ≈ 0,5 m/s im Mittel) legt pro Minute zurück:
s = 0,5 m/s × 60 s = 30 m!

Die Kreislaufzeit beträgt beim Gesunden ~1 Minute.

## Gleichmäßig beschleunigte Bewegung

Wenn eine konstante Kraft wirkt, entsteht gleichmäßige Beschleunigung a in m/s².

Die drei kinematischen Grundformeln:
1. v(t) = v₀ + a × t (Geschwindigkeit nach Zeit t)
2. s(t) = v₀ × t + ½ × a × t² (Weg nach Zeit t)
3. v² = v₀² + 2 × a × s (Geschwindigkeit nach Weg s, ohne t)

Freier Fall: a = g ≈ 9,81 m/s² ≈ 10 m/s², v₀ = 0:
- v(t) = g × t
- s(t) = ½ × g × t²
- Nach 1 s: v = 10 m/s, s = 5 m
- Nach 2 s: v = 20 m/s, s = 20 m
- Nach 3 s: v = 30 m/s, s = 45 m

Aufprallgeschwindigkeit beim Sturz aus Höhe h:
v = √(2 × g × h)
- Aus 5 m: v = √(100) = 10 m/s = 36 km/h
- Aus 20 m: v = √(400) = 20 m/s = 72 km/h

## Klinische Mechanik — Trauma

In der Notfallmedizin beschreibt der Traumamechanismus die Energieübertragung auf den Körper. Fahrzeugkollision bei 50 km/h (= 13,9 m/s): Bei Airbag-Auslösung (Verzögerungszeit ~30 ms): a = 13,9 / 0,03 ≈ 463 m/s² ≈ 47 g. Sturz aus >3 m Höhe gilt als Hochrasanztrauma. Dezelerationstrauma der Aorta: Scherkraft-Riss am Aortenisthmus ist eine klassische Hochrasanzkomplikation.`,
      lernziele: [
        'Zeiteinheiten (Stunden, Minuten, Sekunden) sicher umrechnen und für medizinische Zeitintervalle (EKG, Halbwertszeit) anwenden',
        'Geschwindigkeiten zwischen km/h und m/s mit dem Faktor 3,6 umrechnen',
        'Die drei Formeln der gleichmäßig beschleunigten Bewegung anwenden (v = v₀+at; s = v₀t+½at²; v² = v₀²+2as)',
        'Physiologische Geschwindigkeiten (Blutfluss, Nervenleitgeschwindigkeit) in Größenordnungen einordnen',
        'Den freien Fall mit g ≈ 9,81 m/s² ≈ 10 m/s² berechnen und auf Traumamechanismen anwenden',
      ],
      sections: [
        {
          heading: 'Zeiteinheiten — nicht-dezimales 60er-System',
          text: '1 h = 60 min = 3.600 s; 1 Tag = 86.400 s; 1 Jahr ≈ π × 10⁷ s. Das 60er-System stammt aus dem babylonischen Sexagesimalsystem und ist in Wissenschaft und Medizin universell. In der Medizin: Halbwertszeiten von Medikamenten in Stunden oder Minuten — Adenosin t½ < 10 s (ultraschnell, bei Tachykardie i.v. gegeben); Heparin i.v. t½ ~1,5 h; Warfarin t½ 36–42 h; Amiodaron t½ 40–55 Tage! EKG-Intervalle in ms: PR 120–200 ms, QRS < 120 ms. Herzfrequenz f = HR/60 Hz; T = 1/f.',
          merksatz: '1 h = 3.600 s; 1 Tag = 86.400 s; 1 Jahr ≈ π × 10⁷ s; Herzfrequenz 60/min = 1 Hz, T = 1 s',
        },
        {
          heading: 'Geschwindigkeitsumrechnung: km/h ↔ m/s',
          text: 'Der Faktor 3,6 verbindet km/h und m/s: m/s = km/h ÷ 3,6; km/h = m/s × 3,6. Herleitung: 1 km/h = 1.000 m / 3.600 s = 1/3,6 m/s. Merkhilfe: 36 km/h = 10 m/s. Physiologische Referenzwerte: Aorta ~1 m/s = 3,6 km/h; Kapillarfluss ~1 mm/s = 0,0036 km/h; Nervenleitgeschwindigkeit 70 m/s = 252 km/h. Diese Größenordnungen helfen, Aufgaben sofort auf Plausibilität zu prüfen.',
          merksatz: 'km/h → m/s: durch 3,6; m/s → km/h: mal 3,6; Merke: 36 km/h = 10 m/s; 72 km/h = 20 m/s',
        },
        {
          heading: 'Kinematik — Gleichförmig und beschleunigt',
          text: 'Gleichförmige Bewegung (a = 0): s = v × t. Gleichmäßig beschleunigte Bewegung: (1) v = v₀ + at; (2) s = v₀t + ½at²; (3) v² = v₀² + 2as. Freier Fall: v₀ = 0, a = g ≈ 10 m/s². Nach 1 s: v = 10 m/s, s = 5 m. Nach 2 s: v = 20 m/s, s = 20 m. Aufprallgeschwindigkeit aus Höhe h: v = √(2gh). Klinisch: Sturz aus Bett (~80 cm): v = √(2 × 10 × 0,8) = 4 m/s = 14,4 km/h — schon ernstes Verletzungsrisiko bei Osteoporose.',
          merksatz: 'Freier Fall: v = g × t; s = ½ × g × t²; Aufprall-v = √(2gh); g ≈ 10 m/s²',
        },
        {
          heading: 'Nervenleitgeschwindigkeit — Klinische Kinetik',
          text: 'Myelinisierte Fasern leiten durch saltatorische Erregungsleitung (Sprung von Ranvier-Knoten zu Ranvier-Knoten) viel schneller als unmyelinisierte. A-alpha (motorisch, propriozeptiv): 60–80 m/s; A-beta (Berührung, Vibration): 30–70 m/s; A-delta (Schmerz, Temperatur): 5–30 m/s; C-Fasern (Schmerz, vegetativ, unmyelinisiert): 0,5–2 m/s. NLG-Messung (Elektroneurographie) unterscheidet demyelinisierende Neuropathien (verlangsamte NLG < 40 m/s, z.B. Guillain-Barré-Syndrom) von axonalen Neuropathien (reduzierte Amplitude, normale NLG). Rechenbeispiel: Reiz an Zehe, NLG = 60 m/s, Weg 1 m → Latenz = 1/60 s ≈ 17 ms.',
          merksatz: 'NLG: A-alpha 60–80 m/s; A-delta 5–30 m/s; C-Fasern 0,5–2 m/s — myelinisiert = schneller',
        },
      ],
      merksätze: [
        'v [m/s] = v [km/h] / 3,6; merke: 36 km/h = 10 m/s; 72 km/h = 20 m/s',
        'Freier Fall: v = g × t; s = ½ × g × t²; g ≈ 9,81 m/s² ≈ 10 m/s²',
        '1 h = 3.600 s; 1 Tag = 86.400 s; 1 Jahr ≈ π × 10⁷ s',
        'Herzfrequenz 60/min = 1 Hz; T = 1/f; bei 75/min: T = 0,8 s = 800 ms',
        'Aufprallgeschwindigkeit aus Höhe h: v = √(2gh)',
        'Kapillarfluss ~1 mm/s; Aorta-Fluss ~1 m/s — Faktor 1.000 Unterschied!',
        'NLG A-alpha ~70 m/s; C-Fasern ~1 m/s; erster Schmerz schnell, Dauerschmerz langsam',
        'Gleichmäßig beschleunigt: 3 Formeln — v = v₀+at; s = v₀t+½at²; v² = v₀²+2as',
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: 'Ein Rettungswagen fährt mit 90 km/h zu einem Notfallpatienten 3 km entfernt. Wie viele Sekunden braucht er? Erklären Sie außerdem, warum die Nervenleitgeschwindigkeit klinisch wichtig ist, und nennen Sie zwei Fasertypen mit unterschiedlichen Leitgeschwindigkeiten.',
        answer: 'Berechnung: Umrechnung: 90 km/h = 90/3,6 = 25 m/s. Weg s = 3 km = 3.000 m. Zeit: t = s/v = 3.000 m / 25 m/s = 120 s = 2 Minuten. Der Rettungswagen braucht exakt 2 Minuten. Nervenleitgeschwindigkeit (NLG): Die NLG gibt an, wie schnell ein Aktionspotenzial eine Nervenfaser entlangläuft. Sie hängt vom Myelinisierungsgrad und dem Faserdurchmesser ab: myelinisierte Fasern leiten durch saltatorische Erregungsleitung (Sprünge zwischen Ranvier-Schnürringen) wesentlich schneller als unmyelinisierte. Klinische Bedeutung: Die NLG-Messung (Elektroneurographie) unterscheidet demyelinisierende Neuropathien (verlangsamte NLG, z.B. Guillain-Barré-Syndrom — autoimmune Demyelinisierung, NLG teils unter 20 m/s) von axonalen Neuropathien (reduzierte Amplitude, normale NLG, z.B. toxische Neuropathie). Zwei Fasertypen: (1) A-alpha-Fasern (motorisch, stark myelinisiert): 60–80 m/s — schnelle Muskelsteuerung und Propriozeption. (2) C-Fasern (Schmerz, vegetativ, unmyelinisiert): 0,5–2 m/s — langsamer, dumpfer Dauerschmerz. Der 40-fache Geschwindigkeitsunterschied erklärt das zeitliche Muster der Schmerzwahrnehmung nach einer Verletzung: zuerst scharfer Sofortschmerz über A-delta, dann anhaltender Dauerschmerz über C-Fasern.',
      },
      klinischerBezug: 'Die Nervenleitgeschwindigkeit (NLG) ist eine zentrale diagnostische Größe in der Neurologie. Bei der diabetischen Polyneuropathie kommt es zu Demyelinisierung und axonaler Degeneration — messbar als Verlangsamung der NLG unter 40 m/s. In der Notfallmedizin hilft das Verständnis der Kinematik, Verletzungsmuster vorherzusagen: Ein Sturz aus 5 m Höhe erzeugt eine Aufprallgeschwindigkeit von ~10 m/s = 36 km/h, ausreichend für Wirbelsäulen- und Organverletzungen. Kinetische Energie E = ½mv² steigt quadratisch mit der Geschwindigkeit — Verdopplung der Geschwindigkeit bedeutet vierfache Energie und vierfaches Verletzungsrisiko.',
      selfTest: [
        {
          question: '72 km/h entsprechen wie viel m/s?',
          options: ['20 m/s', '200 m/s', '0,02 m/s', '7,2 m/s', '2 m/s'],
          correctIndex: 0,
          explanation: 'v [m/s] = v [km/h] / 3,6. Also: 72 / 3,6 = 20 m/s. Merkhilfe: 36 km/h = 10 m/s → 72 km/h = 20 m/s (doppelter Wert). Alternativ: 72 km/h = 72.000 m / 3.600 s = 20 m/s. Diese Umrechnung ist am MedAT häufig gefragt. 20 m/s entspricht auch der Größenordnung der Nervenleitgeschwindigkeit von A-delta-Fasern (5–30 m/s). Der Faktor 3,6 verbindet die beiden wichtigsten Geschwindigkeitseinheiten im Alltag und in der Physik.',
          hints: ['m/s = km/h ÷ 3,6. Merke: 36 km/h = 10 m/s.', '72 ÷ 3,6 = 72 × 10 / 36 = 720 / 36 = 20.'],
          difficulty: 1,
          tags: ['geschwindigkeit', 'umrechnung', 'physik'],
        },
        {
          question: 'Ein Körper fällt aus dem Stand (v₀ = 0) für 4 Sekunden (g ≈ 10 m/s²). Welche Fallhöhe?',
          options: ['80 m', '40 m', '160 m', '20 m', '8 m'],
          correctIndex: 0,
          explanation: 's = ½ × g × t² = ½ × 10 × 4² = ½ × 10 × 16 = 80 m. Die Aufprallgeschwindigkeit: v = g × t = 10 × 4 = 40 m/s = 144 km/h. In der Notfallmedizin gilt Sturz aus mehr als 6 m als schweres Hochrasanztrauma — aus 80 m ist das Überleben ohne Fallschirm nicht möglich. Die Falltiefe skaliert quadratisch mit der Zeit: doppelte Zeit bedeutet vierfache Fallhöhe.',
          hints: ['Freier Fall mit v₀ = 0: s = ½ × g × t². t = 4 s, g = 10 m/s².', '½ × 10 × 16 = 5 × 16 = 80 m.'],
          difficulty: 2,
          tags: ['freier-fall', 'kinematik', 'mechanik'],
        },
        {
          question: 'Wie viele Sekunden hat ein Tag?',
          options: ['86.400 s', '3.600 s', '1.440 s', '24.000 s', '100.000 s'],
          correctIndex: 0,
          explanation: '1 Tag = 24 h × 60 min/h × 60 s/min = 24 × 3.600 = 86.400 s. Rechenweg: 24 × 3.600 = (20 + 4) × 3.600 = 72.000 + 14.400 = 86.400 s. Klinisch: Langzeit-EKG (Holter) zeichnet 24 Stunden auf. Tagesbilanzen auf der Intensivstation (Flüssigkeit, Elektrolyte) beziehen sich auf 86.400 Sekunden. Medikamenten-Halbwertszeiten in Tagen bedeuten 86.400 s pro Tag.',
          hints: ['1 Stunde = 3.600 s. Ein Tag hat 24 Stunden.', '24 × 3.600 = ?'],
          difficulty: 1,
          tags: ['zeiteinheiten', 'umrechnung', 'sekunden'],
        },
        {
          question: 'Ein Zug beschleunigt gleichmäßig von 0 auf 72 km/h in 10 s. Wie groß ist die Beschleunigung in m/s²?',
          options: ['2 m/s²', '7,2 m/s²', '0,2 m/s²', '72 m/s²', '20 m/s²'],
          correctIndex: 0,
          explanation: 'Schritt 1: 72 km/h = 72/3,6 = 20 m/s. Schritt 2: a = Δv/Δt = 20 m/s / 10 s = 2 m/s². Diese Beschleunigung (2 m/s² ≈ 0,2 g) ist für Fahrgäste spürbar aber komfortabel. Ein Sportwagen beschleunigt mit ~5 m/s² (0 auf 100 km/h in ~5,5 s). Erdbeschleunigung g = 9,81 m/s² ≈ 10 m/s² als Referenz.',
          hints: ['Erst 72 km/h in m/s umrechnen (÷ 3,6 = 20 m/s).', 'a = Δv / Δt = 20 m/s / 10 s = ?'],
          difficulty: 2,
          tags: ['beschleunigung', 'kinematik', 'mechanik'],
        },
        {
          question: 'Die Herzfrequenz beträgt 75 Schläge/min. Was ist die Periodendauer eines Herzschlags in ms?',
          options: ['800 ms', '750 ms', '13 ms', '1.250 ms', '60 ms'],
          correctIndex: 0,
          explanation: 'f = 75/min = 75/60 Hz = 1,25 Hz. Periodendauer T = 1/f = 1/1,25 s = 0,8 s = 800 ms. In diesen 800 ms: Systole ~300 ms, Diastole ~500 ms. Bei Tachykardie (150/min → T = 400 ms) verkürzt sich vor allem die Diastole — weniger Zeit zur Koronardurchblutung und Ventrikelfüllung, was zu Ischämie führen kann. EKG-Mess-Formel für die QT-Zeit: QTc = QT / √RR (Bazett-Formel).',
          hints: ['f = 75/60 Hz = 1,25 Hz. T = 1/f.', 'T = 1/1,25 = 0,8 s = 800 ms.'],
          difficulty: 2,
          tags: ['herzfrequenz', 'periodendauer', 'frequenz'],
        },
        {
          question: 'Welche Geschwindigkeit (m/s) hat ein Körper nach 5 s freiem Fall (v₀ = 0, g = 10 m/s²)?',
          options: ['50 m/s', '25 m/s', '250 m/s', '5 m/s', '100 m/s'],
          correctIndex: 0,
          explanation: 'v = v₀ + g × t = 0 + 10 × 5 = 50 m/s = 180 km/h nach nur 5 Sekunden! Die zurückgelegte Strecke: s = ½ × 10 × 25 = 125 m. Kinetische Energie beim Aufprall: E = ½mv² = ½ × 70 × 50² = 87.500 J = 87,5 kJ für einen 70-kg-Menschen. Diese Energie erklärt die verheerenden Verletzungsmuster bei Hochrasanztraumen und Stürzen aus großer Höhe.',
          hints: ['v = v₀ + g × t. v₀ = 0, g = 10 m/s², t = 5 s.', 'v = 0 + 10 × 5 = 50 m/s.'],
          difficulty: 1,
          tags: ['freier-fall', 'geschwindigkeit', 'kinematik'],
        },
        {
          question: 'Aus welcher Höhe muss ein Körper fallen, damit er mit 20 m/s aufprallt? (g = 10 m/s²)',
          options: ['20 m', '40 m', '10 m', '200 m', '2 m'],
          correctIndex: 0,
          explanation: 'Formel: v² = 2 × g × h → h = v² / (2 × g) = 400 / (2 × 10) = 400/20 = 20 m. Aufprallgeschwindigkeit 20 m/s = 72 km/h aus 20 m Höhe (ca. 6-stöckiges Gebäude). In der Traumatologie gilt Sturz aus mehr als 3 m als Hochrasanztrauma; aus 20 m ist Polytrauma mit hoher Letalität zu erwarten. Die Formel v² = 2gh kommt aus der Energieerhaltung: mgh = ½mv².',
          hints: ['v² = 2gh → h = v²/(2g). v = 20 m/s, g = 10 m/s².', 'h = 400/(2×10) = 400/20 = 20 m.'],
          difficulty: 2,
          tags: ['freier-fall', 'mechanik', 'energie'],
        },
        {
          question: 'Wie lange braucht ein Nervenimpuls (NLG = 60 m/s) vom Fuß (~1 m Weg) bis zum Rückenmark?',
          options: ['ca. 17 ms', 'ca. 60 ms', 'ca. 1,7 ms', 'ca. 170 ms', 'ca. 600 ms'],
          correctIndex: 0,
          explanation: 't = s/v = 1 m / 60 m/s ≈ 0,0167 s ≈ 17 ms. Diese Laufzeit ist neurophysiologisch bedeutsam: Reflexlatenzen (monosynaptischer Eigenreflex) betragen normal 20–30 ms. Bei verlangsamter NLG (Polyneuropathie) verlängert sich die Latenz — klinisch erkennbar als verzögerte oder fehlende Reflexe (Areflexie bei ausgeprägter Neuropathie). Beim Monosynaptischen Patellarsehnenreflex (PSR) legt das Signal ~50 cm zurück, Latenz bei NLG 60 m/s: t = 0,5/60 ≈ 8 ms.',
          hints: ['t = s/v = 1 m / 60 m/s. Ergebnis in s, dann × 1.000 für ms.', '1/60 s ≈ 0,0167 s = 16,7 ms ≈ 17 ms.'],
          difficulty: 2,
          tags: ['nervenleitgeschwindigkeit', 'neurologie', 'zeiteinheiten'],
        },
      ],
    },
    {
      id: 'ma-4-03',
      title: 'SI-System — Grundeinheiten und abgeleitete Größen',
      content: `# SI-System — Grundeinheiten und abgeleitete Größen

Das Internationale Einheitensystem (Système International d'Unités, SI) ist das weltweit verbindliche Maßsystem für Wissenschaft und Medizin. Es basiert auf sieben Grundeinheiten, aus denen alle anderen Maßeinheiten abgeleitet werden. Für den MedAT ist das Verständnis des SI-Systems fundamental — sowohl für Physik als auch für Chemie, Biologie und klinische Laborbefunde.

## Die sieben SI-Grundeinheiten

Die sieben Grundgrößen und ihre SI-Einheiten:

Länge → Meter (m): Körpergröße, Organabmessungen, Wellenlängen
Masse → Kilogramm (kg): Körpergewicht, Dosierung — EINZIGE Grundeinheit mit Vorsilbe!
Zeit → Sekunde (s): EKG-Intervalle, Halbwertszeiten, Reflexlatenzen
Elektrische Stromstärke → Ampere (A): Defibrillation, Elektrostimulation
Thermodynamische Temperatur → Kelvin (K): Enzymkinetik, Fieberdefinition
Stoffmenge → Mol (mol): Laborwerte, Osmolarität, Reaktionsgleichungen
Lichtstärke → Candela (cd): Ophthalmologie (selten klinisch)

Merksatz: m — kg — s — A — K — mol — cd

Wichtige Besonderheiten:

Masse: Die SI-Grundeinheit ist Kilogramm (kg), NICHT Gramm! Das ist historisch ungewöhnlich — kg ist die einzige Grundeinheit mit Vorsilbe. Massenleiter: 1 kg = 1.000 g; 1 g = 1.000 mg; 1 mg = 1.000 μg; 1 μg = 1.000 ng.

Temperatur: Grundeinheit Kelvin (K), KEIN Grad-Symbol! Umrechnung: T [K] = T [°C] + 273,15. Absolutnullpunkt: 0 K = −273,15°C. Körpertemperatur 37°C = 310 K. Fieber: >38°C = >311 K.

Mol: 1 mol = N_A = 6,022 × 10²³ Teilchen (Avogadro-Zahl). Molare Masse M in g/mol. Glukose C₆H₁₂O₆: M = 6×12 + 12×1 + 6×16 = 180 g/mol. NaCl: M = 23 + 35,5 = 58,5 g/mol.

## Abgeleitete SI-Einheiten

Kraft → Newton (N) = kg·m/s²; Klinisch: Gewebezug, Herzkontraktion
Druck → Pascal (Pa) = N/m² = kg/(m·s²); Klinisch: Blutdruck, Atemwegsdruck
Energie/Arbeit → Joule (J) = N·m = kg·m²/s²; Klinisch: Nahrungsenergie, Herzarbeit
Leistung → Watt (W) = J/s = kg·m²/s³; Klinisch: Herzleistung, Metabolismus
El. Ladung → Coulomb (C) = A·s; Klinisch: Defibrillationsenergie
El. Spannung → Volt (V) = J/C; Klinisch: Membranpotenzial (−70 mV), EKG
El. Widerstand → Ohm (Ω) = V/A; Klinisch: Körperwiderstand, Impedanz
Frequenz → Hertz (Hz) = 1/s; Klinisch: Herzfrequenz, Ultraschall (MHz)
Radioaktivität → Becquerel (Bq) = 1/s; Klinisch: Szintigraphie
Strahlendosis → Gray (Gy) = J/kg; Klinisch: Strahlentherapie (60–70 Gy)
Äquivalentdosis → Sievert (Sv) = J/kg × Wichtungsfaktor; Klinisch: Strahlenschutz

Ableitungsketten:
Newton → Joule → Watt: N (kg·m/s²) → N·m = J (kg·m²/s²) → J/s = W (kg·m²/s³)
Newton → Pascal: N/m² = Pa (kg/(m·s²))

## Klinisch relevante Nicht-SI-Einheiten

Druck:
- mmHg: Blutdruck, Liquordruck, Augeninnendruck; 1 mmHg = 133,322 Pa
- 1 atm = 760 mmHg = 101.325 Pa; 1 bar = 10⁵ Pa ≈ 750 mmHg
- cmH₂O: Beatmungsdruck, ZVD; 1 cmH₂O ≈ 0,735 mmHg

Energie:
- 1 kcal = 4,184 kJ; Ruheumsatz ~2.000 kcal/Tag = ~8.400 kJ/Tag
- ATP-Hydrolyse: ~30,5 kJ/mol; 1 eV = 1,602 × 10⁻¹⁹ J

Molekülmasse:
- 1 Da = 1 g/mol = 1,66 × 10⁻²⁷ kg; 1 kDa = 1.000 Da
- Albumin: 66 kDa; IgG: 150 kDa; Hämoglobin (Tetramer): 64 kDa; Insulin: 5,8 kDa

## Dimensionsanalyse

Prinzip: Die Einheiten auf beiden Seiten einer Gleichung müssen übereinstimmen.

Beispiel 1 — Arbeit: W = F × s
[N] × [m] = [kg·m/s²] × [m] = [kg·m²/s²] = [J] ✓

Beispiel 2 — Hydrostatischer Druck: p = ρ × g × h
[kg/m³] × [m/s²] × [m] = [kg/(m·s²)] = [Pa] ✓

Beispiel 3 — Herzleistung: P = MAP × HZV
MAP = 100 mmHg = 13.300 Pa; HZV = 5 L/min = 8,33 × 10⁻⁵ m³/s
P = 13.300 × 8,33 × 10⁻⁵ ≈ 1,1 W
Dimensionen: [Pa] × [m³/s] = [N/m²] × [m³/s] = [N·m/s] = [J/s] = [W] ✓

Das Herz leistet in Ruhe ~1 Watt!

## Metrische Vorsätze

Giga (G) = 10⁹ → GBq
Mega (M) = 10⁶ → MHz (Ultraschall 2–20 MHz)
Kilo (k) = 10³ → kg, km, kJ, kPa
Milli (m) = 10⁻³ → mL, ms, mmol, mV
Mikro (μ) = 10⁻⁶ → μg, μL, μmol, μV
Nano (n) = 10⁻⁹ → nm, nmol (Hormonspiegel)
Piko (p) = 10⁻¹² → pmol (Schilddrüsenhormone T3/T4)

Klinische Konzentrationseinheiten im Labor:
- mmol/L: Elektrolyte (Na 135–145; K 3,5–5,0; Ca 2,2–2,6 mmol/L)
- mg/dL: Glukose (70–100 mg/dL), Cholesterin (<200 mg/dL)
- μg/dL: Kortisol, Hormonspiegel
- nmol/L: Vitamin D (optimal >75 nmol/L), Steroide
- pmol/L: T3 (3,5–7,8 pmol/L), T4 (12–22 pmol/L)
- mEq/L = mmol/L × Ladung: historische Einheit, heute durch mmol/L ersetzt
- mOsmol/kg: Osmolalität (Serum normal 275–295 mOsmol/kg)`,
      lernziele: [
        'Die sieben SI-Grundeinheiten benennen, zuordnen und klinisch kontextualisieren',
        'Abgeleitete Einheiten (Newton, Pascal, Joule, Watt, Volt) aus Grundeinheiten ableiten und die Ableitungskette verstehen',
        'Klinisch relevante Nicht-SI-Einheiten (mmHg, kcal, Dalton, Sievert) kennen, in SI umrechnen und im medizinischen Kontext einordnen',
        'Dimensionsanalyse zur Formelüberprüfung und Herleitung einsetzen',
        'Metrische Vorsilben (Giga bis Piko) und klinische Konzentrationseinheiten (mmol/L, mg/dL, mEq/L) sicher anwenden',
      ],
      sections: [
        {
          heading: 'Die sieben Grundeinheiten — Systematik und Klinik',
          text: 'Meter (m), Kilogramm (kg), Sekunde (s), Ampere (A), Kelvin (K), Mol (mol), Candela (cd). Für den MedAT sind m, kg, s, A und mol die häufigsten. Besonderheit: kg ist die einzige Grundeinheit MIT Vorsilbe. Temperatur: T[K] = T[°C] + 273; Enzymoptimum bei 37°C = 310 K; Q10-Regel: Temperaturerhöhung um 10 K verdoppelt Reaktionsgeschwindigkeit. Mol: 1 mol = 6,022 × 10²³ Teilchen; Laborwerte in mmol/L: Kalium 3,5–5,0 mmol/L; Natrium 135–145 mmol/L; Glukose 3,9–6,1 mmol/L. Ampere: Defibrillator ~1–2 A bei 200–360 J Impulsenergie.',
          merksatz: '7 SI-Grundeinheiten: m, kg, s, A, K, mol, cd — kg EINZIGE mit Vorsilbe!',
        },
        {
          heading: 'Abgeleitete Einheiten — Ableitungsketten',
          text: 'Newton N = kg·m/s² (F = ma). Pascal Pa = N/m² (Druck = Kraft/Fläche). Joule J = N·m (Arbeit = Kraft × Weg). Watt W = J/s (Leistung = Energie/Zeit). Volt V = J/C. Die Kette N → Pa, N → J → W hilft beim Ableiten ohne Auswendiglernen. Medizinisch: Blutdruck in Pa (1 mmHg = 133 Pa); Herzleistung in W (~1 W Ruhe); EKG-Potenziale in mV (Membranruhepotenzial −70 mV, Aktionspotenzial +30 mV); Defibrillationsenergie in J (200–360 J biphasisch); Strahlendosis in Gray (Gy = J/kg).',
          merksatz: 'N = kg·m/s²; Pa = N/m²; J = N·m = kg·m²/s²; W = J/s; V = J/C',
        },
        {
          heading: 'Klinische Konzentrationseinheiten — mmol/L, mg/dL, mEq/L',
          text: 'Im klinischen Labor werden mehrere Konzentrationseinheiten verwendet: mmol/L (Molarität): direkt aus mol abgeleitet, heute bevorzugt — Natrium 135–145 mmol/L; Kalium 3,5–5,0 mmol/L; Kreatinin 53–115 μmol/L. mg/dL: Massenkonzentration in mg pro Deziliter — Glukose 70–100 mg/dL; Gesamtcholesterin <200 mg/dL; Harnstoff 15–45 mg/dL. Umrechnung mg/dL in mmol/L: (mg/dL × 10) / Molmasse [g/mol] = mmol/L. Für Glukose: 100 mg/dL × 10 / 180 = 5,56 mmol/L. mEq/L (Milliäquivalente pro Liter): historische Einheit für Elektrolyte; mEq/L = mmol/L × |Ladungszahl|; für Na⁺ und K⁺ (einwertig): mEq/L = mmol/L; für Ca²⁺ (zweiwertig): 2,5 mmol/L = 5 mEq/L.',
          merksatz: 'mmol/L = mol/m³ × 10⁻³; mg/dL → mmol/L: (mg/dL × 10) / M [g/mol]; mEq/L = mmol/L × |Ladung|',
        },
        {
          heading: 'Dimensionsanalyse — Formeln überprüfen',
          text: 'Die Dimensionsanalyse prüft, ob eine Formel dimensionell konsistent ist. Methode: SI-Grundeinheiten einsetzen, vereinfachen, mit Zieleinheit vergleichen. Herzleistungs-Beispiel: P = MAP × HZV. MAP = 100 mmHg = 13.300 Pa = 13.300 N/m²; HZV = 5 L/min = 8,33 × 10⁻⁵ m³/s. P = 13.300 N/m² × 8,33 × 10⁻⁵ m³/s = 1,1 N·m/s = 1,1 J/s = 1,1 W. Dimensionen: [N/m²] × [m³/s] = [N·m/s] = [J/s] = [W] ✓. Nützlich am MedAT: Wenn man eine Formel vergisst, kann man sie aus der Einheit der gesuchten Größe rekonstruieren.',
          merksatz: 'Dimensionsanalyse: Einheiten links = Einheiten rechts — Formelcheck ohne Formelblatt!',
        },
      ],
      merksätze: [
        '7 SI-Grundeinheiten: m, kg, s, A, K, mol, cd — kg EINZIGE mit Vorsilbe',
        'N = kg·m/s² (Kraft); Pa = N/m² (Druck); J = N·m (Energie); W = J/s (Leistung)',
        '1 mmHg = 133 Pa; 760 mmHg = 1 atm = 101.325 Pa ≈ 10⁵ Pa',
        '1 kcal = 4,184 kJ; Ruheumsatz ~2.000 kcal/Tag = ~8.400 kJ/Tag',
        '1 Da = 1 g/mol = 1,66 × 10⁻²⁷ kg; Albumin 66 kDa; IgG 150 kDa; Hb 64 kDa',
        'T [K] = T [°C] + 273; Körpertemperatur 37°C = 310 K',
        '1 mol = 6,022 × 10²³ Teilchen (Avogadro-Zahl N_A)',
        'mmol/L → mg/dL: × M/10; mg/dL → mmol/L: × 10/M (M = Molmasse)',
        'Herzleistung Ruhe: ~1 W (linkes Herz); Grundumsatz Mensch: ~80–100 W',
        '1 Gy = 1 J/kg (Strahlendosis); 1 Sv = 1 J/kg × Wichtungsfaktor',
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: 'Ein Patient hat einen systolischen Blutdruck von 160 mmHg. Drücken Sie diesen Wert in Pascal aus und berechnen Sie die Herzleistung (Watt) des linken Herzens, wenn HZV = 5 L/min und MAP = 110 mmHg. Kommentieren Sie klinisch. (1 mmHg = 133 Pa)',
        answer: 'Teil 1: Systolischer Blutdruck in Pascal: 160 mmHg × 133 Pa/mmHg = 21.280 Pa ≈ 21,3 kPa. Normwert: <120 mmHg = <15.960 Pa. 160 mmHg entspricht arteriellem Hypertonus Grad II (ESC-Leitlinie: Grad I 140–159; Grad II 160–179; Grad III ≥180 mmHg). Teil 2: Herzleistungsberechnung: MAP = 110 mmHg × 133 Pa/mmHg = 14.630 Pa. HZV = 5 L/min = 5.000 mL/min = 5 × 10⁻³ m³ / 60 s = 8,33 × 10⁻⁵ m³/s. Herzleistung P = MAP × HZV = 14.630 Pa × 8,33 × 10⁻⁵ m³/s = 1,22 W. Dimensionskontrolle: [Pa] × [m³/s] = [N/m²] × [m³/s] = [N·m/s] = [J/s] = [W] ✓. Klinischer Kommentar: ~1,2 W für das linke Herz entspricht ~20 % mehr als beim Normotonus (MAP ~100 mmHg → ~1,0 W). Chronische Hypertonie erhöht dauerhaft die kardiale Nachlast (Afterload). Über Jahre führt dies zu linksventrikulärer Hypertrophie (LVH, Wand >1,2 cm) und schließlich diastolischer Herzinsuffizienz. Echokardiographisch: verdickte Wand, eingeschränktes E/A-Verhältnis. Therapie: ACE-Hemmer/ARB, Kalziumantagonisten, Diuretika gemäß ESC-Leitlinien.',
      },
      klinischerBezug: 'Die Herzarbeit (Joule) und Herzleistung (Watt) sind physikalische Maße der Pumpfunktion. In 70 Lebensjahren bei 70 Schlägen/min und Herzschlagvolumen 70 mL leistet das Herz eine Gesamtarbeit von ~3 × 10⁹ J. Strahlenschutz: Die Äquivalentdosis in Sievert (Sv) gibt die biologische Strahlenwirkung an. Ein Röntgen-Thorax liefert ~0,02 mSv; CT-Abdomen ~10–15 mSv; natürliche Jahreshintergrunddosis ~2,1 mSv in Österreich; Strahlenschutz-Grenze für beruflich Strahlenexponierte 20 mSv/Jahr nach österreichischem Strahlenschutzgesetz (§ 42 StrSchG 2020).',
      selfTest: [
        {
          question: 'Welche SI-Grundeinheit misst die Stoffmenge?',
          options: ['Mol (mol)', 'Gramm (g)', 'Liter (L)', 'Kilogramm (kg)', 'Dalton (Da)'],
          correctIndex: 0,
          explanation: 'Mol (mol) ist die SI-Grundeinheit der Stoffmenge. 1 mol enthält die Avogadro-Zahl N_A = 6,022 × 10²³ Teilchen. Gramm (g) ist keine SI-Grundeinheit (die Grundeinheit der Masse ist kg!). Liter ist keine SI-Grundeinheit (Volumen-SI-Einheit ist m³). Dalton ist keine SI-Einheit. Laborwerte in mmol/L: Kalium 3,5–5,0 mmol/L; Natrium 135–145 mmol/L; Glukose 3,9–6,1 mmol/L.',
          hints: ['Welche der 7 SI-Grundeinheiten quantifiziert die Teilchenanzahl in chemischen Reaktionen?', 'Mol wird in Reaktionsgleichungen und für Laborkonzentrationen verwendet.'],
          difficulty: 1,
          tags: ['si-einheiten', 'stoffmenge', 'mol'],
        },
        {
          question: 'Welche Einheit hat Druck im SI-System?',
          options: ['Pa = N/m²', 'N = kg·m/s²', 'J = N·m', 'W = J/s', 'bar'],
          correctIndex: 0,
          explanation: 'Druck = Kraft/Fläche. SI-Einheit: Pascal (Pa) = N/m² = kg/(m·s²). Newton ist die Einheit der Kraft. Joule ist die Einheit der Energie. Watt ist die Einheit der Leistung. Bar ist keine SI-Einheit (toleriert): 1 bar = 10⁵ Pa. Klinisch: Blutdruck 120 mmHg = 15.960 Pa; Augeninnendruck normal 10–21 mmHg = 1.330–2.800 Pa; Liquordruck im Liegen normal 7–18 cmH₂O = 686–1.765 Pa.',
          hints: ['Druck = Kraft / Fläche. Einheit der Kraft ist N, der Fläche ist m².', 'N/m² = Pa.'],
          difficulty: 1,
          tags: ['si-einheiten', 'druck', 'pascal'],
        },
        {
          question: 'Wie viel Pa entsprechen 760 mmHg (= 1 atm)? (1 mmHg = 133 Pa)',
          options: ['101.080 Pa', '760 Pa', '7.600 Pa', '1.330 Pa', '5.700 Pa'],
          correctIndex: 0,
          explanation: '760 mmHg × 133 Pa/mmHg = 101.080 Pa ≈ 101.325 Pa (exakter Wert). 1 Atmosphäre = normaler Luftdruck auf Meereshöhe. Klinisch: Arterieller pO₂ ~100 mmHg = 13.300 Pa; pCO₂ ~40 mmHg = 5.320 Pa. Bei Hyperventilation sinkt pCO₂ → respiratorische Alkalose → Hypokalzämie-Symptome (Karpopedalspasmen). Berechnung: 760 × 133 = 760 × 130 + 760 × 3 = 98.800 + 2.280 = 101.080 Pa.',
          hints: ['1 mmHg = 133 Pa. 760 × 133 = ?', '760 × 130 + 760 × 3 = 98.800 + 2.280.'],
          difficulty: 2,
          tags: ['druckeinheiten', 'mmhg', 'pascal'],
        },
        {
          question: 'Welche Einheit hat Leistung im SI-System?',
          options: ['Watt (W = J/s)', 'Joule (J)', 'Newton (N)', 'Pascal (Pa)', 'Volt (V)'],
          correctIndex: 0,
          explanation: 'Leistung P = Energie/Zeit. SI-Einheit: Watt (W) = J/s = kg·m²/s³. Joule ist die Einheit der Energie/Arbeit, nicht der Leistung. 1 kW = 1.000 W. Herzleistung in Ruhe ~1 W; menschlicher Grundumsatz ~80–100 W (der Körper gibt so viel Wärme ab wie eine Glühbirne!); bei körperlicher Maximalbelastung bis ~1.000 W kurzzeitig möglich. Ein Ausdauersportler kann über 1 h ~300–400 W aufrechterhalten.',
          hints: ['Leistung = Energie / Zeit. Energie in J, Zeit in s.', 'J/s = W (Watt).'],
          difficulty: 1,
          tags: ['si-einheiten', 'leistung', 'watt'],
        },
        {
          question: 'Die Körpertemperatur beträgt 37°C. Was ist das in Kelvin?',
          options: ['310 K', '37 K', '273 K', '100 K', '236 K'],
          correctIndex: 0,
          explanation: 'T [K] = T [°C] + 273 = 37 + 273 = 310 K. Absolutnullpunkt 0 K = −273°C; Gefrierpunkt Wasser 0°C = 273 K; Siedepunkt Wasser 100°C = 373 K; Körpertemperatur 37°C = 310 K; Fieber >38°C = >311 K. In der Biochemie (Arrhenius-Gleichung k = A × exp(−Ea/RT), R = 8,314 J/(mol·K)): Q10-Regel — Temperaturerhöhung um 10 K (≈ 10°C) verdoppelt Reaktionsgeschwindigkeit, erklärt erhöhten Metabolismus bei Fieber.',
          hints: ['T [K] = T [°C] + 273.', '37 + 273 = 310 K.'],
          difficulty: 1,
          tags: ['temperatureinheiten', 'kelvin', 'celsius'],
        },
        {
          question: 'Welche Einheit hat Energie in SI-Grundeinheiten ausgedrückt?',
          options: ['kg·m²/s²', 'kg·m/s²', 'kg/m·s²', 'kg·m²/s', 'kg·m²·s'],
          correctIndex: 0,
          explanation: 'Energie = Kraft × Weg: [E] = [F] × [s] = N × m = (kg·m/s²) × m = kg·m²/s² = J. Falsche Optionen: kg·m/s² ist Newton (Kraft); kg/m·s² = kg/(m·s²) ist Pascal (Druck: Pa = N/m² = kg·m/s² / m² = kg/(m·s²)); kg·m²/s ist Drehimpuls; kg·m²·s hat keine Standardbedeutung. Die Dimensionsanalyse: Energie = Leistung × Zeit = W × s = (kg·m²/s³) × s = kg·m²/s².',
          hints: ['Energie = Kraft × Weg. Kraft in SI = N = kg·m/s². Mal Meter = ?', 'kg·m/s² × m = kg·m²/s².'],
          difficulty: 3,
          tags: ['si-einheiten', 'energie', 'joule'],
        },
        {
          question: 'Welche Molekülmasse hat Hämoglobin (64 kDa) in g/mol?',
          options: ['64.000 g/mol', '64 g/mol', '640 g/mol', '6.400 g/mol', '640.000 g/mol'],
          correctIndex: 0,
          explanation: '1 Da = 1 g/mol. 1 kDa = 1.000 Da = 1.000 g/mol. 64 kDa = 64.000 g/mol = 64 kg/mol. Hämoglobin ist ein Tetramer aus 4 Untereinheiten (je ~16 kDa = 16.000 g/mol), jede mit einer Häm-Gruppe und einem Fe²⁺-Ion. Molare Hb-Konzentration im Blut: ca. 150 g/L Hb; 150 g/L ÷ 64.000 g/mol ≈ 2,34 mmol/L (als Tetramer). Jede Hb-Einheit bindet bis zu 4 O₂-Moleküle (an den 4 Häm-Gruppen).',
          hints: ['1 kDa = 1.000 Da = 1.000 g/mol. 64 kDa = 64 × 1.000 g/mol.', '64 × 1.000 = 64.000 g/mol.'],
          difficulty: 2,
          tags: ['molmasse', 'hämoglobin', 'dalton'],
        },
        {
          question: 'Was ist der korrekte Ausdruck für 1 Gy (Gray, Strahlendosis) in SI-Grundeinheiten?',
          options: ['J/kg = m²/s²', 'J/s = W', 'C/kg (Coulomb/kg)', 'N/m²', 'J·kg'],
          correctIndex: 0,
          explanation: '1 Gy = 1 J/kg (absorbierte Energie pro Kilogramm Gewebe). In Grundeinheiten: J/kg = (kg·m²/s²)/kg = m²/s². Sievert: 1 Sv = Gy × Wichtungsfaktor w_R. Für Röntgen/Gamma: w_R = 1 → 1 Sv = 1 Gy. Für Alphastrahlung: w_R = 20 → 1 Gy Alpha-Strahlung = 20 Sv biologische Wirkung. Klinisch: Ganzkörperbestrahlung >1 Gy → Strahlenkrankheit; >6 Gy → letal ohne KMT; Strahlentherapie Karzinom: 60–70 Gy in 30 Fraktionen à 2 Gy.',
          hints: ['1 Gy = 1 J/kg. Joule in Grundeinheiten: J = kg·m²/s².', 'J/kg = kg·m²/s² / kg = m²/s².'],
          difficulty: 3,
          tags: ['strahlendosis', 'gray', 'si-einheiten'],
        },
      ],
    },
  ],
};
