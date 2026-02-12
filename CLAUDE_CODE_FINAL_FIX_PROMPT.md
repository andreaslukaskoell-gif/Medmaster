# MedMaster — Finaler Fix-Prompt: Alle Fehler beheben + Content auf Lehrbuch-Niveau

## KONTEXT
Die App läuft. Ich habe sie mir im Browser angeschaut und ALLE Probleme notiert. Dieser Prompt behebt ALLES auf einmal — Bugs, fehlende Inhalte, und Qualitätsprobleme.

**WICHTIG:** Kein Backend! Kein Supabase! Alles bleibt Frontend-only mit localStorage/Zustand. Wir machen das Produkt erst PERFEKT, dann kommt das Backend.

---

## TEIL 1: KRITISCHE BUGS SOFORT BEHEBEN

### Bug 1: Umlaute werden nicht korrekt angezeigt (HÖCHSTE PRIORITÄT)
Überall in der App stehen "ae", "ue", "oe", "ss" statt ä, ü, ö, ß.

Beispiele die ich gesehen habe:
- "Zurueck" → muss "Zurück" sein
- "Uebungsfragen" → "Übungsfragen"
- "Faehigkeiten" → "Fähigkeiten"
- "Textverstaendnis" → "Textverständnis"
- "Ueberblick" → "Überblick"
- "Grosse" → "Große"
- "Pruefe" → "Prüfe"
- "Staerken" → "Stärken"
- "Schwaechen" → "Schwächen"

**FIX:** Durchsuche ALLE Dateien im Projekt nach Wörtern die "ae", "ue", "oe" enthalten und ersetze sie durch echte Umlaute (ä, ü, ö, ß). Stelle sicher dass alle Dateien UTF-8 kodiert sind. Prüfe:
- Alle Komponenten-Dateien (.tsx)
- Alle Daten-Dateien (.ts)
- Router-Labels
- Sidebar-Labels
- Button-Texte
- Überschriften
- Beschreibungstexte
- Alt-Texte
- Platzhalter

### Bug 2: SEK falsch benannt
Die SEK-Seite zeigt "Soziales Entscheiden" als Haupttitel. Richtig ist:
- Hauptbereich: **"Sozial-emotionale Kompetenzen (SEK)"**
- Drei Untertests:
  1. **Emotionen erkennen (EE)** — Gefühle anhand von Fotos/Beschreibungen identifizieren
  2. **Emotionen regulieren (ER)** — Beste Strategie wählen um Emotionen zu regulieren (NEU seit 2023!)
  3. **Soziales Entscheiden (SE)** — Ethische Dilemmata, beste Handlung wählen

### Bug 3: KFF fehlt "Figuren zusammensetzen"
Die KFF-Seite zeigt nur 4 Module (Zahlenfolgen, Allergieausweise merken, Implikationen erkennen, Wortflüssigkeit).
Es FEHLT der 5. Untertest: **"Figuren zusammensetzen (FZ)"** — das ist einer der wichtigsten KFF-Untertests!

**Was "Figuren zusammensetzen" ist:**
- Man bekommt ausgeschnittene Puzzleteile (Dreiecke, Quadrate, Kreise, Vielecke)
- Man muss herausfinden welche fertige Figur entsteht wenn man sie zusammensetzt
- 5 Antwortmöglichkeiten (A-E), eine ist richtig
- 10 Aufgaben in 15 Minuten
- Erfordert räumliches Vorstellungsvermögen

**Erstelle für FZ:**
1. Strategie-Guide mit Tipps (Umrisse vergleichen, Fläche abschätzen, Ausschlussmethode)
2. Mindestens 20 Übungsaufgaben als SVG-basierte Puzzles:
   - Zeige 3-5 Puzzleteile als SVGs
   - Zeige 5 Antwortmöglichkeiten (A-E) als SVGs
   - Bei Lösung: Animation die zeigt wie die Teile zusammengefügt werden
   - Timer pro Aufgabe (1:30 min)
3. Schwierigkeitsgrade: Leicht (2-3 Teile), Mittel (3-4 Teile), Schwer (4-5 Teile)

---

## TEIL 2: BMS-KAPITEL AUF LEHRBUCH-QUALITÄT BRINGEN

### Problem: Die aktuellen Kapitel sind zu dünn
Ich habe das Zellbiologie-Kapitel angeschaut: 3 kurze Abschnitte mit reinem Fließtext, keine Grafiken, keine Merksätze, keine Lernziele. Das reicht NICHT für eine ernsthafte MedAT-Vorbereitung.

### Neue Kapitel-Struktur (für JEDES der 12 BMS-Kapitel):

Jedes Kapitel muss als React-Komponente diese Elemente haben:

```tsx
// Kapitel-Aufbau (am Beispiel Zellbiologie)

// 1. KAPITEL-HEADER
<div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-2xl p-8 mb-8">
  <div className="flex items-center gap-3 mb-2">
    <span className="text-3xl">🔬</span>
    <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Biologie • Kapitel 1/3</span>
  </div>
  <h1 className="text-3xl font-bold mb-2">Zellbiologie</h1>
  <p className="text-teal-100 mb-4">Die menschliche Zelle — Aufbau, Organellen & Transport</p>
  <div className="flex gap-6 text-sm text-teal-200">
    <span>⏱ ~45 Minuten</span>
    <span>📊 Grundlage</span>
    <span>🎯 Häufig geprüft</span>
  </div>
</div>

// 2. LERNZIELE-BOX
<div className="bg-teal-50 border-l-4 border-teal-500 rounded-r-xl p-6 mb-8">
  <h3 className="font-bold text-teal-800 mb-3 flex items-center gap-2">
    🎯 Lernziele — Nach diesem Kapitel kannst du:
  </h3>
  <ul className="space-y-2">
    <li className="flex items-start gap-2">
      <span className="text-teal-500 mt-1">✓</span>
      <span>Den Unterschied zwischen Pro- und Eukaryoten erklären</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="text-teal-500 mt-1">✓</span>
      <span>Alle Organellen und ihre Funktionen benennen</span>
    </li>
    {/* etc. */}
  </ul>
</div>

// 3. THEORIE-ABSCHNITTE mit eingebetteten Grafiken
<section>
  <h2 className="text-2xl font-bold mb-4">Prokaryoten vs. Eukaryoten</h2>
  <p className="text-gray-700 leading-relaxed mb-4">
    Alle Lebewesen bestehen aus Zellen. Man unterscheidet zwei grundlegende
    Zelltypen: Prokaryoten (Bakterien und Archaeen) besitzen keinen Zellkern
    und keine membranumhüllten Organellen. Eukaryoten hingegen haben einen
    Zellkern mit Doppelmembran und zahlreiche spezialisierte Organellen...
  </p>

  {/* VERGLEICHSTABELLE */}
  <table className="w-full border-collapse mb-6">
    <thead className="bg-teal-600 text-white">
      <tr>
        <th>Merkmal</th>
        <th>Prokaryoten</th>
        <th>Eukaryoten</th>
      </tr>
    </thead>
    {/* Zellkern, DNA, Ribosomen, Organellen, Größe, Vermehrung */}
  </table>

  {/* SVG-GRAFIK: Tierzelle */}
  <CellDiagram type="animal" />

  {/* MERKSATZ-BOX */}
  <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 my-6">
    <p className="font-bold text-amber-800 flex items-center gap-2">
      💡 Merke
    </p>
    <p className="text-amber-900 mt-1">
      Organellen mit <strong>Doppelmembran</strong>: Zellkern, Mitochondrien,
      Chloroplasten. Alle drei haben eigene DNA!
    </p>
  </div>

  {/* ALTFRAGEN-WARNUNG */}
  <div className="bg-red-50 border border-red-300 rounded-xl p-4 my-6">
    <p className="font-bold text-red-800 flex items-center gap-2">
      🎯 Altfragen-Klassiker
    </p>
    <p className="text-red-900 mt-1">
      "Welche Organellen besitzen eine Doppelmembran?" — Antwort: Zellkern,
      Mitochondrien, Chloroplasten. NICHT das ER oder der Golgi-Apparat!
    </p>
  </div>

  {/* KLINISCHER BEZUG */}
  <div className="bg-blue-50 border border-blue-300 rounded-xl p-4 my-6">
    <p className="font-bold text-blue-800 flex items-center gap-2">
      🏥 Klinischer Bezug
    </p>
    <p className="text-blue-900 mt-1">
      Mitochondriale Erkrankungen werden maternal vererbt, da Mitochondrien
      aus der Eizelle stammen. Beispiel: MELAS-Syndrom.
    </p>
  </div>
</section>

// 4. KEY-FACTS-BOX am Ende jedes Abschnitts
<div className="bg-gray-50 rounded-xl p-6 border">
  <h3 className="font-bold mb-3">📋 Key Facts — Zellbiologie</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    <div className="flex items-start gap-2">
      <span className="text-teal-500 font-bold">•</span>
      <span>Ruhepotential: <strong>-70 mV</strong></span>
    </div>
    {/* alle Key Facts als Grid */}
  </div>
</div>

// 5. SELBSTTEST (5 MC-Fragen zum Kapitel)
<div className="bg-white rounded-xl shadow-lg p-6 mt-8">
  <h3 className="text-xl font-bold mb-4">✍️ Selbsttest — Zellbiologie</h3>
  <p className="text-gray-500 mb-6">5 Fragen zum Überprüfen deines Wissens</p>
  {/* 5 Multiple-Choice-Fragen mit sofortigem Feedback */}
  {/* Bei falscher Antwort: Erklärung WARUM die richtige Antwort stimmt */}
</div>
```

### UI-Komponenten die erstellt werden müssen:

```tsx
// Erstelle diese wiederverwendbaren Komponenten:

// 1. LernzielBox
interface LernzielBoxProps {
  items: string[];
}

// 2. MerksatzBox
interface MerksatzBoxProps {
  text: string;        // Der Merksatz-Text
  type?: 'merke' | 'altfragen' | 'klinisch' | 'achtung' | 'tipp';
}

// 3. KeyFactsGrid
interface KeyFactsGridProps {
  facts: { label: string; value: string }[];
}

// 4. VergleichsTabelle
interface VergleichsTabelleProps {
  headers: string[];
  rows: string[][];
}

// 5. SelbstTest (MC-Fragen mit Feedback)
interface SelbstTestProps {
  questions: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;  // Warum diese Antwort richtig ist
  }[];
}

// 6. KapitelFortschritt
// Zeigt am Ende: "Kapitel abgeschlossen! +25 XP" mit Animation
```

---

## TEIL 3: BIOLOGIE — Alle 3 Kapitel vollständig neu schreiben

### Kapitel 1: Zellbiologie (Die menschliche Zelle)

**Abschnitte (jeweils mit SVG-Grafik, Merksätzen, Klinischem Bezug):**

1. **Prokaryoten vs. Eukaryoten**
   - Vergleichstabelle: Zellkern, DNA-Form, Ribosomen (70S vs 80S), Membranorganellen, Größe, Zellwand
   - SVG: Beide Zelltypen nebeneinander mit Beschriftung
   - Merke: "Prokaryoten = Pro (vor) + Karyon (Kern) → VOR dem Kern = KEIN Kern"

2. **Pflanzenzelle vs. Tierzelle**
   - Vergleichstabelle: Zellwand, Chloroplasten, Vakuole, Zentriolen
   - SVG: Tier- und Pflanzenzelle Side-by-Side

3. **Organellen mit Doppelmembran**
   - Zellkern: Doppelmembran, Kernporen, Chromatin, Nukleolus → rRNA-Bildung
   - Mitochondrien: Cristae, Matrix, eigene ringförmige DNA, 70S Ribosomen, oxidative Phosphorylierung → ATP
   - Chloroplasten (nur Pflanzenzelle): Thylakoide, Grana, Stroma, Fotosynthese
   - ALTFRAGE: "Welche Organellen haben Doppelmembran UND eigene DNA?" → Alle drei!
   - Klinisch: Mitochondriale Vererbung (maternal), MELAS-Syndrom

4. **Organellen mit einfacher Membran**
   - Raues ER → Proteinsynthese (hat Ribosomen)
   - Glattes ER → Lipidsynthese, Entgiftung, Ca²⁺-Speicher
   - Golgi-Apparat → Cis-Seite (ER-nah), Trans-Seite (Zellmembran-nah), Glykosylierung
   - Lysosomen → pH 4,5-5,0, hydrolytische Enzyme, Autophagie
   - Peroxisomen → Katalase (H₂O₂ → H₂O + O₂), Beta-Oxidation
   - SVG: Endomembransystem mit Vesikeltransport-Pfeilen

5. **Organellen ohne Membran**
   - Ribosomen: 80S = 60S + 40S (Eukaryoten), 70S = 50S + 30S (Prokaryoten/Mitochondrien)
   - Zytoskelett: Mikrofilamente (Aktin, 7nm), Intermediärfilamente (10nm), Mikrotubuli (Tubulin, 25nm)
   - Zentriolen → Spindelapparat bei Zellteilung
   - Merke: "7-10-25 Regel: Aktin 7nm, Intermediär 10nm, Mikrotubuli 25nm"

6. **Zellmembran & Membrantransport**
   - Flüssig-Mosaik-Modell (Singer & Nicolson, 1972)
   - SVG: Lipiddoppelschicht mit Proteinen, Cholesterol, Glykokalix
   - Passiver Transport: Diffusion, Osmose, erleichterte Diffusion (Kanäle/Carrier)
   - Aktiver Transport: Na⁺/K⁺-ATPase (3 Na⁺ raus, 2 K⁺ rein), primär vs. sekundär
   - Endo-/Exozytose: Phagozytose, Pinozytose, rezeptorvermittelt
   - ALTFRAGE: "Was ist KEIN passiver Transport?" → Na⁺/K⁺-Pumpe (braucht ATP!)
   - Merke: "Osmose: Wasser folgt dem Salz" (zum Ort höherer Teilchenkonzentration)

7. **Zellteilung: Mitose**
   - PMAT: Prophase, Metaphase, Anaphase, Telophase (+ Cytokinese)
   - SVG: 4 Phasen nebeneinander mit Chromosomen-Darstellung
   - Merke: "PMAT — Phantasie Macht Alles Toll"
   - Ergebnis: 2 genetisch identische diploide Tochterzellen (2n)
   - Interphase: G1 (Wachstum), S (DNA-Synthese), G2 (Vorbereitung), G0 (Ruhephase)

8. **Zellteilung: Meiose**
   - Meiose I: Redukteilung (homologe Chromosomen trennen sich) → 2 haploide Zellen
   - Crossing-over in Prophase I → genetische Vielfalt
   - Meiose II: wie Mitose, Schwesterchromatiden trennen sich → 4 haploide Zellen (n)
   - Vergleichstabelle: Mitose vs. Meiose (Ergebnis, Chromosomenzahl, wo, wofür)
   - ALTFRAGE: "Wann findet Crossing-over statt?" → Prophase I der Meiose

**Key Facts Zellbiologie:**
- Na⁺/K⁺-ATPase: 3 Na⁺ raus, 2 K⁺ rein pro ATP
- Ribosomen: 80S (Eukaryoten) vs. 70S (Prokaryoten)
- Lysosomen: pH 4,5-5,0
- Mitose: 2n → 2×2n
- Meiose: 2n → 4×n
- Mikrofilamente: 7nm, Intermediär: 10nm, Mikrotubuli: 25nm

**5 Selbsttest-Fragen:**
1. Welche Organelle hat eine Doppelmembran? (A) Lysosom (B) Golgi-Apparat (C) Mitochondrium (D) Glattes ER → C
2. Wie viele Na⁺-Ionen pumpt die Na⁺/K⁺-ATPase pro Zyklus RAUS? (A) 2 (B) 3 (C) 4 (D) 1 → B
3. Was ist das Ergebnis der Meiose? (A) 2 diploide Zellen (B) 4 diploide Zellen (C) 2 haploide Zellen (D) 4 haploide Zellen → D
4. Welcher Transport benötigt KEINE Energie? (A) Na⁺/K⁺-Pumpe (B) Phagozytose (C) Osmose (D) Primär aktiver Transport → C
5. Wo findet Crossing-over statt? (A) Mitose Prophase (B) Meiose I Prophase (C) Meiose II Anaphase (D) Mitose Metaphase → B

---

### Kapitel 2: Genetik & Molekularbiologie

**Abschnitte:**

1. **DNA-Aufbau**
   - Doppelhelix (Watson & Crick, 1953)
   - Nukleotid = Phosphatgruppe + Desoxyribose + Base
   - Basen: Purine (A, G — 2 Ringe) vs. Pyrimidine (C, T — 1 Ring)
   - Basenpaarung: A=T (2 H-Brücken), G≡C (3 H-Brücken)
   - SVG: DNA-Doppelhelix mit beschrifteten Komponenten
   - Merke: "Auf dem GC liegt's gut (3 Brücken = stärker)"
   - Chargaff-Regeln: A=T, G=C → (A+G)/(T+C) = 1

2. **RNA-Typen**
   - mRNA: Boten-RNA, codiert Proteinsequenz
   - tRNA: Transfer-RNA, bringt Aminosäuren, Anticodon
   - rRNA: Ribosomale RNA, Strukturbestandteil der Ribosomen
   - Unterschied DNA vs. RNA: Ribose/Desoxyribose, Uracil/Thymin, einzelsträngig/doppelsträngig

3. **Transkription (DNA → mRNA)**
   - RNA-Polymerase liest 3'→5', synthetisiert 5'→3'
   - Promotor, Terminator
   - Eukaryoten: Processing (5'-Cap, Poly-A-Schwanz, Spleißen von Introns)
   - Merke: "Introns raus, Exons bleiben (Exons = Expressed)"

4. **Translation (mRNA → Protein)**
   - Ribosom liest mRNA in 5'→3'-Richtung
   - Codon = 3 Basen = 1 Aminosäure (64 Codons, 20 Aminosäuren → Degeneriertheit)
   - Startcodon: AUG (Methionin)
   - Stoppcodons: UAA, UAG, UGA
   - SVG: Translation am Ribosom mit tRNA und wachsender Peptidkette
   - Merke: "AUG = Start, U_A/U_G = Stopp (UAA, UAG, UGA)"

5. **Genetischer Code**
   - Codon-Sonne/Tabelle einfügen
   - Eigenschaften: universell, degeneriert, kommafrei, nicht-überlappend
   - Wobble-Hypothese (3. Base weniger spezifisch)

6. **Mendelsche Regeln**
   - 1. Uniformitätsregel (P: AA × aa → F1: alle Aa)
   - 2. Spaltungsregel (F1 × F1 → F2: 3:1 phänotypisch, 1:2:1 genotypisch)
   - 3. Unabhängigkeitsregel (Dihybrider Erbgang → 9:3:3:1)
   - SVG: Kreuzungsschema-Gitter für jede Regel
   - Dominant/Rezessiv, Homozygot/Heterozygot Begriffe

7. **Erbgänge**
   - Autosomal dominant (Chorea Huntington): Jede Generation betroffen, AA oder Aa krank
   - Autosomal rezessiv (Mukoviszidose): Überspringt Generationen, nur aa krank
   - X-chromosomal rezessiv (Hämophilie, Rot-Grün-Blindheit): Mehr Männer betroffen (XᵃY)
   - X-chromosomal dominant: Selten, betroffener Vater → alle Töchter betroffen
   - SVG: Stammbäume für jeden Erbgang
   - ALTFRAGE: "Rot-Grün-Schwäche ist..." → X-chromosomal rezessiv

8. **Mutationen**
   - Genmutationen: Punktmutation (still, Missense, Nonsense), Insertion, Deletion → Frameshift
   - Chromosomenmutationen: Deletion, Duplikation, Inversion, Translokation
   - Genommutationen: Aneuploidie (Trisomie 21, Turner 45,X, Klinefelter 47,XXY), Polyploidie
   - ALTFRAGE: "Trisomie 21 ist eine..." → Genommutation (NICHT Genmutation!)

9. **Blutgruppen**
   - ABO-System: IA, IB kodominant, i rezessiv
   - Kreuzschema: Genotypen → Phänotypen → Antikörper → Antigene
   - Universalspender: 0, Universalempfänger: AB
   - Rhesus-System: Rh+ dominant (D), Rh- rezessiv (dd)
   - SVG: ABO-Kreuzschema mit Blutbeuteln und Antikörper-Darstellung
   - Klinisch: Rhesus-Inkompatibilität bei Schwangerschaft (Anti-D-Prophylaxe)

**Key Facts Genetik:**
- A=T (2 H-Brücken), G≡C (3 H-Brücken)
- Startcodon: AUG, Stopcodons: UAA, UAG, UGA
- 64 Codons → 20 Aminosäuren + 3 Stopcodons
- Trisomie 21 = Genommutation
- Universalspender: Blutgruppe 0, Universalempfänger: AB
- Mensch: 46 Chromosomen (22 Autosomenpaare + XX/XY)

**5 Selbsttest-Fragen Genetik**

---

### Kapitel 3: Humanbiologie (Organsysteme)

**Abschnitte:**

1. **Herz-Kreislauf-System**
   - Herzaufbau: 4 Kammern, Herzklappen (Segel- und Taschenklappen)
   - Blutfluss: Rechter Vorhof → rechte Kammer → Lungenarterien → Lungenvenen → linker Vorhof → linke Kammer → Aorta
   - SVG: Herz mit Blutfluss-Pfeilen (blau/rot)
   - Erregungsleitungssystem: Sinusknoten (70/min) → AV-Knoten (40-50/min) → His-Bündel → Tawara-Schenkel → Purkinje-Fasern
   - Merke: "Tri-Mi-Pu-Ao: Trikuspidalklappe, Mitralklappe, Pulmonalklappe, Aortenklappe"
   - Blutdruck: Systolisch ~120 mmHg, Diastolisch ~80 mmHg
   - Klinisch: Herzinfarkt = Verschluss einer Koronararterie

2. **Blut & Immunsystem**
   - Blutbestandteile: Plasma (55%), Zelluläre (45% = Hämatokrit)
   - Erythrozyten: 120 Tage Lebensdauer, kein Kern, Hämoglobin (Fe²⁺), Bildung im Knochenmark
   - Leukozyten: Granulozyten (Neutro/Eosino/Basophile), Monozyten → Makrophagen, Lymphozyten (T/B/NK)
   - Thrombozyten: Blutgerinnung, 5-10 Tage Lebensdauer
   - SVG: Blutbestandteile-Übersicht
   - Immunsystem: Angeboren (unspezifisch: Haut, Makrophagen, Komplement) vs. Adaptiv (spezifisch: T-Zellen, B-Zellen → Antikörper)
   - Antikörper: IgM (Erstreaktion), IgG (häufigst, plazentagängig), IgA (Schleimhäute), IgE (Allergie), IgD (B-Zell-Rezeptor)
   - Merke: "MADGE — IgM, IgA, IgD, IgG, IgE"
   - ALTFRAGE: "Welcher Antikörper ist plazentagängig?" → IgG

3. **Nervensystem**
   - ZNS (Gehirn + Rückenmark) vs. PNS (Spinal- und Hirnnerven)
   - Somatisches (willkürlich) vs. Vegetatives NS (Sympathikus/Parasympathikus)
   - Neuron-Aufbau: Dendrit → Soma → Axon → Synapse
   - Aktionspotential: Ruhepotential -70mV → Depolarisation (Na⁺ rein) → Repolarisation (K⁺ raus) → Hyperpolarisation
   - SVG: Aktionspotential-Kurve mit allen Phasen und Ionenkanälen
   - Synapse: Elektrischer Impuls → Ca²⁺ → Vesikel → Neurotransmitter in synaptischen Spalt → Rezeptor
   - SVG: Synapse mit Neurotransmitter-Freisetzung
   - Merke: "Sympathikus = Fight or Flight, Parasympathikus = Rest and Digest"

4. **Niere & Homöostase**
   - Nephron: Glomerulus → Bowman-Kapsel → Proximaler Tubulus → Henle-Schleife → Distaler Tubulus → Sammelrohr
   - GFR: ~120 mL/min = ~180 L/Tag Primärharn → ~1,5 L Endharn
   - SVG: Nephron mit Filtration, Reabsorption, Sekretion
   - Hormone: ADH (Wasserrückresorption), Aldosteron (Na⁺-Rückresorption), Renin-Angiotensin-Aldosteron-System
   - ALTFRAGE: "Wie viel Primärharn wird pro Tag gebildet?" → ~180 L

5. **Hormonsystem**
   - Hypothalamus → Hypophyse (Vorderlappen/Hinterlappen) → Zielorgane
   - Regelkreis: Negatives Feedback
   - Wichtige Hormone: Insulin (BZ↓), Glukagon (BZ↑), T3/T4 (Stoffwechsel↑), Cortisol (Stress), Adrenalin (Sympathikus)
   - Schilddrüse: T3/T4 brauchen Jod, TSH aus Hypophyse, TRH aus Hypothalamus
   - Nebenniere: Mark (Adrenalin, Noradrenalin) vs. Rinde (Cortisol, Aldosteron, Androgene)
   - Pankreas: Langerhans-Inseln → B-Zellen (Insulin) vs. A-Zellen (Glukagon)
   - Klinisch: Diabetes Typ 1 (Autoimmun, Insulin fehlt) vs. Typ 2 (Insulinresistenz)

6. **Verdauungssystem**
   - Mund (Amylase, Stärke → Maltose) → Magen (Pepsin, HCl pH 1-2, Proteine) → Duodenum (Galle, Pankreassaft) → Jejunum/Ileum (Resorption) → Colon (Wasser) → Rektum
   - Enzyme: Amylase (Kohlenhydrate), Lipase (Fette), Pepsin/Trypsin (Proteine)
   - SVG: Verdauungstrakt mit Organen und Enzymen
   - Leber: Gallenproduktion, Entgiftung, Glykogenspeicher, Proteinproduktion (Albumin, Gerinnungsfaktoren)

7. **Atmungssystem**
   - Luftweg: Nase → Pharynx → Larynx → Trachea → Bronchien → Bronchiolen → Alveolen
   - Gasaustausch: O₂ aus Alveole ins Blut (Diffusion), CO₂ umgekehrt
   - Atemvolumina: Atemzugvolumen ~500 mL, Vitalkapazität ~4,5 L, Residualvolumen ~1,5 L
   - SVG: Lunge mit Alveolen-Detailansicht

8. **Bewegungsapparat & Muskulatur**
   - Skelettmuskulatur (quergestreift, willkürlich), Glatte Muskulatur (unwillkürlich), Herzmuskulatur (quergestreift, unwillkürlich)
   - Sarkomer: Z-Scheibe → Aktin + Myosin → Gleitfilamenttheorie
   - Knochentypen: Röhrenknochen, Platte Knochen, Kurze Knochen

9. **Fortpflanzung & Entwicklung**
   - Menstruationszyklus: Follikelphase (Östrogen↑, FSH/LH) → Ovulation (LH-Peak) → Lutealphase (Progesteron↑)
   - SVG: Hormonkurven über den Zyklus (28 Tage)
   - Spermatogenese (ab Pubertät, kontinuierlich) vs. Oogenese (ab Fetalzeit, diskontinuierlich)
   - Embryonalentwicklung: Zygote → Morula → Blastozyste → Gastrulation → 3 Keimblätter
   - Keimblätter: Ektoderm (Haut, Nervensystem), Mesoderm (Muskeln, Skelett, Herz, Niere), Endoderm (Darm, Lunge, Leber)
   - Merke: "EMS — Ektoderm außen, Mesoderm Mitte, Endoderm innen"
   - ALTFRAGE: "Woraus entwickelt sich das Nervensystem?" → Ektoderm

**Key Facts Humanbiologie:**
- Ruhepotential: -70 mV
- Sinusknoten: 70/min (primärer Schrittmacher)
- GFR: 120 mL/min, ~180 L Primärharn/Tag
- Erythrozyten: 120 Tage Lebensdauer
- IgG: plazentagängig, häufigster Antikörper
- Atemzugvolumen: ~500 mL
- Blutdruck normal: 120/80 mmHg
- Ektoderm → Nervensystem + Haut

---

## TEIL 4: CHEMIE — Alle 3 Kapitel vollständig

### Kapitel 4: Allgemeine & Anorganische Chemie

**Abschnitte:**
1. **Atombau** — Protonen, Neutronen, Elektronen, Schalenmodell, Elektronenkonfiguration (1s² 2s² 2p⁶...), Ordnungszahl, Massenzahl
2. **Periodensystem** — Gruppen (1-18), Perioden (1-7), Hauptgruppen (Alkalimetalle, Erdalkalimetalle, Halogene, Edelgase), Trends (Elektronegativität, Atomradius, Ionisierungsenergie)
3. **Chemische Bindungen** — Ionenbindung (Elektronenübertragung, NaCl), Kovalente Bindung (Elektronenpaarbindung, H₂O), Metallische Bindung, Van-der-Waals, Wasserstoffbrücken
4. **Stöchiometrie** — Mol-Konzept, Avogadro: 6,022 × 10²³, Molare Masse, Reaktionsgleichungen ausgleichen
5. **Redox-Reaktionen** — Oxidation = Elektronenabgabe, Reduktion = Elektronenaufnahme, Oxidationszahlen, Redoxgleichungen, Merke: "LEO GER — Lose Electrons Oxidation, Gain Electrons Reduction"
6. **Säure-Base** — Brønsted (Protonendonator/akzeptor), pH = -log[H⁺], pOH = -log[OH⁻], pH + pOH = 14, Starke vs. Schwache Säuren, Puffer, Henderson-Hasselbalch: pH = pKs + log([A⁻]/[HA])
7. **Nuklide & Radioaktivität** (NEU seit 2024!) — Isotope, α-Zerfall (He-Kern), β-Zerfall (Elektron/Positron), γ-Strahlung, Halbwertszeit: N(t) = N₀ × (1/2)^(t/T½)

### Kapitel 5: Organische Chemie

**Abschnitte:**
1. **Kohlenwasserstoffe** — Alkane (Einfachbindung, -an), Alkene (Doppelbindung, -en), Alkine (Dreifachbindung, -in), Benennung (IUPAC), Isomerie (Struktur-, Stereoisomerie)
2. **Funktionelle Gruppen** — Tabelle: Alkohol (-OH), Aldehyd (-CHO), Keton (>C=O), Carbonsäure (-COOH), Ester (-COO-), Amin (-NH₂), Amid (-CONH₂), Ether (-O-)
3. **Biomoleküle** — Kohlenhydrate (Mono-/Di-/Polysaccharide: Glucose, Fructose, Saccharose, Stärke, Glykogen, Cellulose), Lipide (Triglyceride, Phospholipide, Steroide), Proteine (20 Aminosäuren, Peptidbindung, Primär-/Sekundär-/Tertiär-/Quartärstruktur), Nucleinsäuren
4. **Enzyme** — Schlüssel-Schloss-Prinzip, Induced-Fit-Modell, Michaelis-Menten-Kinetik (Vmax, Km), Kompetitive vs. Nicht-kompetitive Hemmung
5. **Stoffwechsel** — Glykolyse (Glucose → 2 Pyruvat, 2 ATP, 2 NADH), Citratzyklus (in Mitochondrien-Matrix, 2 CO₂, 1 ATP, 3 NADH, 1 FADH₂ pro Durchgang), Atmungskette (an innerer Mitochondrienmembran, ~34 ATP), Gesamtbilanz: 1 Glucose → ~38 ATP

### Kapitel 6: Schwefel & Anorganische Spezialthemen (NEU seit 2024!)

**Abschnitte:**
1. **Schwefelchemie** — Schwefel (S, OZ 16), Allotrope, Schwefelsäure (H₂SO₄), Sulfate, Sulfide, Schwefeldioxid (SO₂), Vulkanismus-Bezug
2. **Elektrochemie** — Galvanische Zelle, Elektrolyse, Standardpotentiale, Nernst-Gleichung (vereinfacht)
3. **Chemisches Gleichgewicht** — Le Chatelier, Gleichgewichtskonstante K, Einfluss von Temperatur, Druck, Konzentration

---

## TEIL 5: PHYSIK — Alle 3 Kapitel vollständig

### Kapitel 7: Mechanik & Wärmelehre

**Abschnitte:**
1. **Kinematik** — Gleichförmige Bewegung (v = s/t), Beschleunigung (a = Δv/Δt), Freier Fall (g = 9,81 m/s²), s = ½gt²
2. **Kräfte & Newton** — 1. Trägheit, 2. F = m·a, 3. Actio = Reactio, Gewichtskraft: FG = m·g, Reibung, Schiefe Ebene
3. **Energie & Arbeit** — W = F·s, Ekin = ½mv², Epot = mgh, Energieerhaltung, Leistung P = W/t
4. **Impuls** — p = m·v, Impulserhaltung, Elastischer vs. Unelastischer Stoß
5. **Wärmelehre** — Temperaturskalen (K = °C + 273,15), Wärmeenergie Q = m·c·ΔT, Aggregatzustände, Wärmeleitung/Konvektion/Strahlung, Hauptsätze der Thermodynamik

### Kapitel 8: Elektrizität & Magnetismus

**Abschnitte:**
1. **Elektrostatik** — Ladung (Coulomb), Coulomb-Gesetz: F = k·q₁·q₂/r², Elektrisches Feld, Spannung
2. **Stromkreise** — U = R·I (Ohm), Reihen- vs. Parallelschaltung, Leistung: P = U·I, Kirchhoff-Regeln
3. **Magnetismus** — Magnetfeld, Lorentzkraft, Rechte-Hand-Regel, Elektromagnet, Induktion (Faraday)
4. **Elektromagnetische Wellen** — Lichtgeschwindigkeit c = 3×10⁸ m/s, Spektrum (Radio → Mikrowelle → IR → Sichtbar → UV → Röntgen → Gamma), c = λ·f, Energie: E = h·f

### Kapitel 9: Optik & Wellen

**Abschnitte:**
1. **Wellenphysik** — Transversal- vs. Longitudinalwellen, Amplitude, Frequenz, Wellenlänge, Schallgeschwindigkeit ~343 m/s (Luft)
2. **Optik** — Reflexion, Brechung (Snellius: n₁·sinα = n₂·sinβ), Totalreflexion, Linsengleichung: 1/f = 1/g + 1/b
3. **Doppler-Effekt** — Frequenzänderung bei Relativbewegung, SVG-Visualisierung
4. **Radioaktivität & Kernphysik** — Aufbau des Atomkerns, Kernkräfte, Kernspaltung, Kernfusion, Strahlungsarten (α, β, γ), Halbwertszeit

---

## TEIL 6: MATHEMATIK — Alle 3 Kapitel vollständig

### Kapitel 10: Algebra & Zahlentheorie

**Abschnitte:**
1. **Grundrechenarten ohne Taschenrechner** — Kopfrechenstrategien, Überschlagsrechnen
2. **Bruchrechnung** — Addition, Subtraktion, Multiplikation, Division, Doppelbrüche
3. **Potenzen & Wurzeln** — Potenzgesetze (aⁿ·aᵐ = aⁿ⁺ᵐ, etc.), Wurzelgesetze
4. **Prozentrechnung** — Grundwert, Prozentwert, Prozentsatz, Wachstum/Zerfall
5. **Gleichungen & Ungleichungen** — Linear, Quadratisch (pq-Formel: x₁,₂ = -p/2 ± √(p²/4 - q)), Systeme
6. **Zahlenmengen** — ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ, Primzahlen, Teilbarkeitsregeln

### Kapitel 11: Funktionen & Analysis

**Abschnitte:**
1. **Funktionstypen** — Linear (y = kx + d), Quadratisch (Parabel), Potenzfunktionen, Exponentialfunktionen, Logarithmus
2. **Trigonometrie** — sin, cos, tan, Einheitskreis, Wichtige Werte (sin30°=0.5, sin45°=√2/2, sin60°=√3/2)
3. **Folgen & Reihen** — Arithmetisch (d konstant), Geometrisch (q konstant), Summenformeln
4. **Grundlagen Differential-/Integralrechnung** — Ableitung (Steigung), Integral (Fläche), einfache Regeln

### Kapitel 12: Geometrie & Vektoren

**Abschnitte:**
1. **Ebene Geometrie** — Dreiecke (Fläche, Pythagoras: a² + b² = c²), Kreis (U = 2πr, A = πr²), Vierecke
2. **Körpergeometrie** — Quader (V = a·b·c), Zylinder (V = πr²h), Kugel (V = 4/3·πr³), Kegel (V = 1/3·πr²h)
3. **Vektoren** — Addition, Subtraktion, Skalarprodukt (a⃗·b⃗ = |a|·|b|·cosφ), Kreuzprodukt, Länge/Betrag
4. **Einheiten & Umrechnung** — SI-Einheiten, Vorsilben (Kilo, Mega, Milli, Mikro, Nano), Dimensionsanalyse

### Mathe-Tipp-Box (für JEDES Kapitel):
```
⚠️ ACHTUNG: Beim MedAT ist KEIN Taschenrechner erlaubt!
Übe alle Berechnungen im Kopf oder auf Papier.

Nützliche Werte zum Auswendiglernen:
- √2 ≈ 1,41 | √3 ≈ 1,73 | √5 ≈ 2,24
- π ≈ 3,14 | e ≈ 2,72
- Quadratzahlen bis 20²
- Primzahlen bis 50: 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47
```

---

## TEIL 7: SVG-GRAFIKEN — Die 20 wichtigsten erstellen

Erstelle eine zentrale Datei `src/components/diagrams/` mit folgenden SVG-Diagrammen als React-Komponenten:

**BIOLOGIE (10 Diagramme):**
1. `AnimalCell.tsx` — Tierzelle mit allen Organellen (beschriftet, farbig)
2. `PlantVsAnimalCell.tsx` — Vergleich nebeneinander
3. `CellMembrane.tsx` — Lipiddoppelschicht mit Proteinen
4. `MitosisPhases.tsx` — PMAT in 4 Bildern
5. `DNAStructure.tsx` — Doppelhelix mit Basenpaaren
6. `TranslationProcess.tsx` — Ribosom, mRNA, tRNA, Peptidkette
7. `HeartAnatomy.tsx` — Herz mit Blutfluss-Pfeilen
8. `ActionPotential.tsx` — Kurve mit Phasen und Ionenkanälen
9. `SynapseTransmission.tsx` — Synapse mit Neurotransmittern
10. `NephronStructure.tsx` — Nephron mit Filtration/Reabsorption

**CHEMIE (5 Diagramme):**
11. `PeriodicTableMini.tsx` — Kompaktes PSE mit Gruppen-Highlighting
12. `pHScale.tsx` — pH-Skala mit Alltagsbeispielen
13. `FunctionalGroups.tsx` — Übersicht aller funktionellen Gruppen
14. `CellularRespiration.tsx` — Glykolyse → Citratzyklus → Atmungskette Flussdiagramm
15. `BondTypes.tsx` — Ionen-, Kovalente, Metallische Bindung visuell

**PHYSIK (5 Diagramme):**
16. `CircuitDiagram.tsx` — Reihen- vs. Parallelschaltung
17. `LensOptics.tsx` — Sammel- und Zerstreuungslinse mit Strahlengang
18. `EMSpectrum.tsx` — Elektromagnetisches Spektrum
19. `WaveTypes.tsx` — Transversal vs. Longitudinal
20. `NewtonForces.tsx` — Kräftediagramm Schiefe Ebene

**SVG-Design-Richtlinien:**
- Farbpalette: Teal (#0D9488) als Hauptfarbe, Amber (#F59E0B) für Highlights, Red (#EF4444) für Warnungen, Blue (#3B82F6) für klinische Bezüge
- viewBox für Responsivität
- Beschriftungen auf Deutsch
- Saubere, professionelle Linien
- Hover-Effekte wo sinnvoll (Organellen anklicken → Detail)
- Mindestgröße: 400x300px (Desktop), skalierbar auf Mobile

---

## TEIL 8: FRAGEN MASSIV ERWEITERN

### Ziel: Mindestens 300 BMS-Fragen

Aktuell haben wir viel zu wenig Fragen. Erstelle:

**Biologie: 120 Fragen**
- 40 × Zellbiologie (Organellen, Membrantransport, Zellteilung)
- 40 × Genetik (DNA, Transkription, Erbgänge, Blutgruppen, Mutationen)
- 40 × Humanbiologie (Herz, Blut, Immunsystem, Niere, Hormone, Nervensystem)

**Chemie: 80 Fragen**
- 30 × Allgemeine Chemie (Atombau, PSE, Bindungen, Stöchiometrie)
- 30 × Organische Chemie (Funktionelle Gruppen, Biomoleküle, Enzyme)
- 20 × Redox, Säure-Base, Nuklide

**Physik: 60 Fragen**
- 20 × Mechanik (Kräfte, Energie, Impuls)
- 20 × Elektrizität (Stromkreise, Magnetismus)
- 20 × Optik & Wellen (Brechung, Linsen, Schall)

**Mathematik: 40 Fragen**
- 15 × Algebra (Gleichungen, Brüche, Prozent)
- 15 × Funktionen & Analysis
- 10 × Geometrie & Vektoren

**Format jeder Frage:**
```typescript
{
  id: string,           // z.B. "bio-zell-001"
  subject: 'biologie' | 'chemie' | 'physik' | 'mathematik',
  topic: string,        // z.B. "Zellbiologie"
  question: string,     // Die Frage
  options: string[],    // 5 Antwortmöglichkeiten (A-E)
  correctIndex: number, // Index der richtigen Antwort (0-4)
  explanation: string,  // Ausführliche Erklärung WARUM richtig
  wrongExplanations: string[], // Erklärung warum die anderen falsch sind
  difficulty: 1 | 2 | 3, // Leicht, Mittel, Schwer
  isAltfrage: boolean,  // Basiert auf echter Altfrage?
  tags: string[],       // z.B. ["Organellen", "Doppelmembran"]
}
```

**Qualitätskriterien:**
- Jede Frage hat EINE eindeutig richtige Antwort
- Distraktoren sind plausibel aber klar falsch
- Erklärung erklärt WARUM richtig UND warum die anderen falsch sind
- Mix aus Wissens-, Verständnis- und Anwendungsfragen
- Schwierigkeitsverteilung: 30% leicht, 50% mittel, 20% schwer

---

## TEIL 9: KFF — Figuren zusammensetzen VOLLSTÄNDIG implementieren

### Neues Modul: Figuren zusammensetzen (FZ)

Erstelle eine vollständige `FigurenZusammensetzen`-Seite mit:

**1. Strategie-Guide:**
```
Tipps für Figuren zusammensetzen:
1. Umrisse zuerst vergleichen — passt die Außenform?
2. Fläche abschätzen — die Teile müssen zusammen die Figur füllen
3. Markante Ecken und Kanten suchen — wo passt welches Teil?
4. Ausschlussmethode — eliminiere unmögliche Antworten
5. Zeitmanagement: 1,5 Minuten pro Aufgabe = schnell entscheiden!
```

**2. Aufgaben-Komponente:**
```tsx
interface FZAufgabe {
  id: string;
  pieces: SVGPiece[];     // Die Puzzleteile
  options: SVGFigure[];   // 5 Antwortmöglichkeiten (A-E)
  correctIndex: number;
  difficulty: 1 | 2 | 3;
  explanation: string;
}

interface SVGPiece {
  path: string;          // SVG path data
  fill: string;          // Farbe
  transform?: string;    // Position/Rotation
}
```

**3. Erstelle 20 Aufgaben:**
- 7 × Leicht (2-3 einfache Teile, klar erkennbare Form)
- 8 × Mittel (3-4 Teile, gedrehte Teile)
- 5 × Schwer (4-5 Teile, ähnliche Antwortmöglichkeiten)

**4. UI-Features:**
- Timer (1:30 pro Aufgabe)
- Teile können angeklickt werden zum Vergrößern
- Bei Lösung: Zeige wie die Teile zusammenpassen
- Fortschrittsbalken
- Statistik (Richtig/Falsch/Zeitverbrauch)

---

## TEIL 10: TESTSIMULATION REALISTISCH MACHEN

Die Testsimulation muss den ECHTEN MedAT abbilden:

```
MedAT-H Teststruktur:
1. BMS: 94 Fragen, 75 Minuten
   - Biologie: 40 Fragen
   - Chemie: 24 Fragen
   - Physik: 18 Fragen
   - Mathe: 12 Fragen

2. TV (Textverständnis): 12 Aufgaben, 35 Minuten
   - Erst Text lesen (Lesezeit)
   - Dann Fragen beantworten (Text nicht mehr sichtbar!)

3. KFF: 5 Untertests, verschiedene Zeiten
   - Figuren zusammensetzen: 10 Aufgaben, 15 Minuten
   - Gedächtnis & Merkfähigkeit: Lernphase + Abfrage
   - Zahlenfolgen: 10 Aufgaben, 25 Minuten
   - Implikationen: 10 Aufgaben, 10 Minuten
   - Wortflüssigkeit: 20 Aufgaben, 20 Minuten

4. SEK: 3 Untertests
   - Emotionen erkennen: 10 Aufgaben, 15 Minuten
   - Emotionen regulieren: 10 Aufgaben, 15 Minuten
   - Soziales Entscheiden: 10 Aufgaben, 15 Minuten
```

**Implementiere:**
- Wählbar: Volltest (gesamter MedAT, ~6 Stunden) oder Einzeltest (nur BMS, nur KFF, etc.)
- Echte Timer pro Abschnitt
- Keine Rückkehr zu vorherigen Abschnitten (wie beim echten Test)
- Sofortige Auswertung am Ende mit:
  - Gesamtpunktzahl und Prozentwert
  - Vergleich mit "durchschnittlichen Ergebnis" (simuliert)
  - Detailauswertung pro Fach
  - Schwächenanalyse: "Diese Themen solltest du wiederholen"
  - Zeitanalyse: "Du hast bei Biologie X Minuten gebraucht"

---

## TEIL 11: KARTEIKARTEN-SYSTEM IMPLEMENTIEREN

Erstelle ein vollständiges Karteikarten-System:

**1. Vorinstallierte Decks:**
- BMS Biologie Key Facts (50 Karten)
- BMS Chemie Formeln (30 Karten)
- BMS Physik Formeln (20 Karten)
- BMS Mathe Formeln (15 Karten)
- Medizinische Fachbegriffe (40 Karten)

**2. UI:**
- Karte antippen → Rückseite zeigen (Flip-Animation)
- Buttons: "Gewusst" / "Nicht gewusst" / "Teilweise"
- Spaced Repetition: Karten die man nicht weiß kommen öfter
- Fortschrittsanzeige: X/Y Karten heute gelernt
- Eigene Karten erstellen können

**3. Kartenformat:**
```typescript
interface Karteikarte {
  id: string;
  deck: string;
  front: string;        // Frage/Begriff
  back: string;         // Antwort/Definition
  tags: string[];
  nextReview: Date;      // Spaced Repetition
  interval: number;      // Tage bis zur nächsten Wiederholung
  easeFactor: number;    // SM-2 Algorithmus
}
```

---

## TEIL 12: KLEINE ABER WICHTIGE VERBESSERUNGEN

### 12a. Einstufungstest auf dem Dashboard
Der "Einstufungstest starten" Banner auf dem Dashboard soll funktionieren:
- 20 Fragen (5 Bio, 5 Chemie, 5 Physik, 5 Mathe) — schneller Querschnitt
- Am Ende: Einstufung in Level (Anfänger/Fortgeschritten/Profi)
- Empfehlung welche Kapitel zuerst gelernt werden sollten

### 12b. Lernplan-Generator
- Eingabe: MedAT-Datum (Standard: 03.07.2026), Stunden pro Tag, Vorkenntnisse
- Ausgabe: Wochenplan mit täglichen Lerneinheiten
- Berücksichtigt Spaced Repetition
- Priorität auf schwache Bereiche

### 12c. Analyse-Seite verbessern
- Spinnennetz-Diagramm: Stärken/Schwächen über alle Bereiche
- Zeitverlauf: Wie hat sich die Leistung verbessert?
- Empfehlungen: "Du solltest mehr Chemie üben, deine Quote liegt bei 45%"

### 12d. Notizen-System
- Markdown-Editor
- Pro Kapitel eine Notiz möglich
- Automatische Verknüpfung mit dem aktuellen Kapitel

### 12e. Preise-Seite anpassen
Aktuelle 3 Preisstufen beibehalten aber realistisch:
- **Kostenlos:** 3 BMS-Kapitel, 50 Übungsfragen, Karteikarten (Basic), 1 Simulationstest
- **Premium (€14,99/Monat):** Alle Kapitel, Alle Fragen, Aufgabengeneratoren, Vollsimulation, Lernplan
- **Ultimate (€24,99/Monat):** Alles + Schwächenanalyse, Prioritäts-Support, Duell-Modus, Offline-Modus

---

## ZUSAMMENFASSUNG DER PRIORITÄTEN

**MUSS (sofort):**
1. ✅ Umlaute fixen (alle Dateien)
2. ✅ SEK richtig benennen (3 Untertests)
3. ✅ Figuren zusammensetzen hinzufügen
4. ✅ BMS-Kapitel komplett neu schreiben (Lehrbuch-Qualität)
5. ✅ 300+ BMS-Fragen erstellen
6. ✅ 20 SVG-Diagramme erstellen

**SOLL (bald):**
7. Testsimulation realistisch machen
8. Karteikarten-System
9. Einstufungstest
10. Analyse-Seite verbessern

**KANN (später):**
11. Lernplan-Generator
12. Notizen-System
13. Preise-Seite anpassen

---

**WICHTIG:** Alles bleibt Frontend-only! Kein Backend, kein Supabase, kein Server. Alles in localStorage/Zustand speichern. Die App muss auf localhost:5174 einwandfrei laufen.
