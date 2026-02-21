# Claude Code Prompt 0 — MedAT-Bibel-Fix & Lehrbuch-Vertiefung
# MUSS VOR PROMPT_1 UND PROMPT_2 LAUFEN
**Laufzeit:** ~90–120 Minuten | **Modus:** --dangerously-skip-permissions

---

## KONTEXT

Die Stichwortliste in `src/data/stichworteData.ts` ist die **absolute Bibel** für alle BMS-Inhalte.
Jeder Unterkapitel-Inhalt muss exakt zu seinem Stichwort passen.
Alles was nicht im MedAT-Stichwortverzeichnis steht, fliegt raus (außer es ist als Kontextwissen
für das Verständnis zwingend notwendig).

Außerdem: Jeder UK muss **Lehrbuchniveau** erreichen — das bedeutet:
- **800–1200 Wörter reiner Fließtext** im `content`-Feld (keine Bullet-Dumps!)
- **60 % Fließtext**, 20 % durchgerechnete Beispiele, 20 % strukturierte Übersichten (Tabellen nur wo sinnvoll)
- **Alle `unterthemen`** aus dem Stichwortverzeichnis müssen tiefgehend abgedeckt sein
- **Klinischer Bezug** in jedem UK embedded — nicht als Anhang, sondern im Text
- `merksätze`: max. 2–3 pro UK, nur echte Merkformeln (keine Inhaltszusammenfassungen)
- `sections`: 2–3 erklärende Fließtextabsätze, nicht Aufzählungen

---

## SCHRITT 1 — Lese zuerst diese Dateien

```
src/data/stichworteData.ts               ← absolute Bibel
src/data/bmsKapitel/types.ts             ← Kapitel/UK TypeScript-Interfaces
src/data/bmsKapitel/biologie/kap5-klassische-genetik.ts
src/data/bmsKapitel/biologie/kap6-molekulargenetik.ts
src/data/bmsKapitel/biologie/kap7-methoden-der-genetik.ts
src/data/bmsKapitel/biologie/kap9-evolution.ts
src/data/bmsKapitel/biologie/kap10-oekologie.ts
src/data/bmsKapitel/chemie/kap8-chemisches-gleichgewicht.ts
src/data/bmsKapitel/chemie/kap13-naturstoffe.ts
```

---

## SCHRITT 2 — BIOLOGIE: Strukturfehler beheben

### 2a. kap5-klassische-genetik.ts — KOMPLETT REWRITE

**Problem:** Alle 7 UK-IDs haben falschen Inhalt:
- bio-5-05 heißt "Stammbaumanalyse" → Bibel sagt: Mutationen
- bio-5-06 heißt "Populationsgenetik" → Bibel sagt: Vererbung des Geschlechts
- bio-5-03 heißt "Geninteraktion" → Bibel sagt: Nichtchromosomale Vererbung
- usw.

**Lösung:** Datei komplett neu schreiben mit den **7 korrekten UK-IDs und ihrem richtigen Inhalt**:

| UK-ID | Titel | Unterthemen (alle abdecken!) |
|-------|-------|------------------------------|
| bio-5-01 | Mendelsche Regeln | Uniformität, Spaltung, Unabhängigkeit, Dominant/Rezessiv, Intermediär, Kodominanz, Kreuzungsschema (Punnett) |
| bio-5-02 | Chromosomentheorie der Vererbung | Genkopplung, Crossing-over, Rekombination, Kopplungsgruppen, Genkartierung |
| bio-5-03 | Nichtchromosomale Vererbung | Mitochondriale Vererbung, Maternale Vererbung, Plastiden-Vererbung, Besonderheiten |
| bio-5-04 | Aufbau des Genoms | Eukaryotisches Genom, Chromosomen, Karyotyp, Autosomen, Gonosomen, Heterochromatin, Euchromatin |
| bio-5-05 | Mutationen | Genmutationen, Chromosomenmutationen, Genommutationen, Mutagene, Punktmutation, Frameshift, Deletion, Translokation, Aneuploidie |
| bio-5-06 | Vererbung des Geschlechts | X-chromosomale Vererbung, X-Inaktivierung, Barr-Körperchen, Y-Chromosom, SRY-Gen, gonosomale Erkrankungen |
| bio-5-07 | Krebsentstehung | Onkogene, Tumorsuppressorgene, Mehrstufenmodell, p53, Rb, Metastasierung |

**Populationsgenetik/Hardy-Weinberg** gehört in kap9 Evolution (bio-9-06 Evolutionsfaktoren) — nicht hier.
**Stammbaumanalyse** gehört in kap8 Humangenetik (bio-8-01) — nicht hier.

---

### 2b. kap6-molekulargenetik.ts — REWRITE + ERWEITERN auf 7 UKs

**Problem:** Nur 4 UKs mit falschen Titeln (bio-6-02 heißt "Transkription" aber Bibel = "Genetischer Code").
**Lösung:** 7 UKs mit korrekten IDs und Inhalten:

| UK-ID | Titel | Unterthemen (alle abdecken!) |
|-------|-------|------------------------------|
| bio-6-01 | DNA-Aufbau und Replikation | Doppelhelix, Basenpaare, Watson-Crick, semikonservative Replikation, Helicase, DNA-Polymerase, Ligase, Okazaki-Fragmente, Reparaturmechanismen |
| bio-6-02 | Genetischer Code | Codons, Anticodon, Degeneriertheit, Universalität, Start-Codon (AUG/Met), Stoppcodons (UAA/UAG/UGA), Leseraster, Leserastermutation |
| bio-6-03 | Aufbau eukaryotischer Gene | Exons, Introns, Promotor, TATA-Box, Enhancer, Silencer, Polyadenylierungssignal, Vergleich Prokaryoten/Eukaryoten |
| bio-6-04 | Transkription und Translation | Transkription (RNA-Polymerase, Initiation, Elongation, Termination), mRNA-Prozessierung (5'-Cap, Poly-A-Schwanz, Spleißen), Translation (Ribosomen, tRNA-Beladung, A/P/E-Site, Elongation, Termination) |
| bio-6-05 | RNA-Typen und Spleißen | mRNA, tRNA (Kleeblattstruktur, Anticodon-Loop), rRNA, snRNA, miRNA/siRNA, Spleißen, Alternatives Spleißen, Spliceosom, klinische Bedeutung (Thalassämie durch Spleißfehler) |
| bio-6-06 | Genregulation | Operon-Modell, Lac-Operon (Induktion/Repression), Trp-Operon, eukaryotische Transkriptionsfaktoren, Enhancer, Silencer, Epigenetik, DNA-Methylierung, Histonmodifikation (Acetylierung, Methylierung) |
| bio-6-07 | Proteomik und Epigenetik | Proteom vs. Genom, Proteomik-Methoden, Epigenetik (Def., Vererblichkeit), DNA-Methylierung (CpG-Inseln), Histoncode, ncRNA (lncRNA, miRNA), epigenetische Erkrankungen (Prader-Willi, Angelman) |

---

### 2c. kap7-methoden-der-genetik.ts — UK bio-7-03 ERGÄNZEN

**Problem:** bio-7-03 (Genomanalyse) fehlt. Es existieren bio-7-01, -02, -04, -05, -06.

**Ergänze nach bio-7-02** einen neuen UK:

| UK-ID | Titel | Unterthemen |
|-------|-------|-------------|
| bio-7-03 | Genomanalyse und Bioinformatik | Gesamtgenomanalyse (WGS, WES), Genexpressionsanalyse, Microarray/DNA-Chip (Hybridisierungsprinzip, Anwendung), Bioinformatik (BLAST, Datenbankrecherche), Genomdaten in der Medizin (personalisierte Medizin, GWAS) |

Lehrbuchniveau: ~900 Wörter Fließtext, klinischer Bezug (z.B. Tumorgenomik, BRCA1/2-Screening).

---

### 2d. kap9-evolution.ts — UK bio-9-02 ERGÄNZEN

**Problem:** bio-9-02 (Endosymbiontentheorie) fehlt komplett.

**Ergänze nach bio-9-01** einen neuen UK:

| UK-ID | Titel | Unterthemen |
|-------|-------|-------------|
| bio-9-02 | Endosymbiontentheorie | Mitochondrien als ehemalige α-Proteobakterien, Chloroplasten als ehemalige Cyanobakterien, Belege (eigene DNA, Doppelmembran, 70S-Ribosomen, binäre Teilung), Lynn Margulis (1967), primäre vs. sekundäre Endosymbiose |

**Wichtig:** kap1 (bio-1-06 Mitochondrien) darf Endosymbiontentheorie nur **kurz erwähnen** und auf bio-9-02 verweisen. Kein doppelter Volltext.

---

### 2e. kap10-oekologie.ts — UK bio-10-06 ERGÄNZEN

**Problem:** bio-10-06 (Umweltschutz) fehlt.

**Ergänze am Ende:**

| UK-ID | Titel | Unterthemen |
|-------|-------|-------------|
| bio-10-06 | Biodiversität und Umweltschutz | Biodiversität (genetisch, Arten, Ökosysteme), Gefährdungsursachen (Habitatverlust, invasive Arten, Klimawandel, Übernutzung), Artenschutz (Rote Liste, IUCN), Nachhaltigkeit, Klimawandel und Ökosysteme |

Niedrige Priorität → 600–800 Wörter genügen.

---

## SCHRITT 3 — CHEMIE: Nicht-MedAT-Inhalt raus, Tiefe erhöhen

### 3a. kap8-chemisches-gleichgewicht.ts — ch-8-04 bereinigen

**Problem:** ch-8-04 "Katalysatoren — Enzyme als biologische Katalysatoren" enthält Enzym-Inhalt
der in ch-13-01 (Naturstoffe/Biomoleküle) gehört.

**Lösung:** ch-8-04 auf Katalysatoren im chemischen Gleichgewicht beschränken:
- Heterogene/homogene Katalyse
- Wirkungsmechanismus (Aktivierungsenergie senken, Überganszustand)
- Katalysatoren im Gleichgewicht (Gibbs-Energie ändert sich nicht)
- Technische Beispiele (Haber-Bosch, Platin in Autoabgas)
- Biologische Enzyme NUR als ein Satz Querverweis auf ch-13 — kein eigener Enzym-Abschnitt hier

### 3b. ALLE Chemie-Kapitel — Inhalt auf Lehrbuchniveau vertiefen

Für jedes der 13 Chemie-Kapitel: Lies den aktuellen Inhalt und prüfe ob ALLE Unterthemen des
Stichworts vollständig und tiefgehend abgedeckt sind.

**Besonders dünn — bevorzugt behandeln:**

**ch-2-01 (kap2-mikrokosmos):** Muss abdecken: Unschärferelation (ΔxΔp ≥ ℏ/2), EM-Strahlung
(Wellenlänge, Frequenz, Energie E=hν), Teilchen-Welle-Dualismus (de-Broglie λ=h/mv),
Lichtspektrum (Wellenlängen nm), Photonen. Aktuell: zu dünn, zu wenig Formeln.

**ch-4-01 (kap4-aggregatzustände):** Muss abdecken: Alle 3 Aggregatzustände (molekulare Basis),
alle Phasenübergänge mit Energetik (Schmelzenthalpie, Verdampfungsenthalpie), Phasendiagramm
(Tripelpunkt, kritischer Punkt), Dampfdruck, Clausius-Clapeyron. Plus: Anomalie des Wassers
(Dichtemaximum 4°C, Eis schwimmt).

**ch-9-01 (kap9-elemente):** Muss alle Unterthemen abdecken: Wasserstoff (Vorkommen,
Verbindungen H₂O, H₂O₂), Sauerstoff (O₂, O₃, Reaktivität), Wasser (Struktur, Dipol,
H-Brücken, Lösungsmittel), Kohlenstoff (allotrope Formen: Diamant, Graphit, Fullerene, CNTs),
CO₂ (Treibhausgas, Kohlensäure), Stickstoff (N₂, NH₃, HNO₃), Halogene (F, Cl, Br, I:
Reaktivität, Oxidationsmittel), Schwefel (S₈, SO₂, SO₃, H₂SO₄), Oxide.

**Für alle Chemie-Kapitel gilt:**
- Mindestens 800 Wörter pro UK im `content`-Feld
- Formeln und Reaktionsgleichungen direkt in den Fließtext integriert (nicht als Aufzählung)
- Rechenbeispiele wo sinnvoll (Gasgesetze, Stöchiometrie, pH, Redoxpotenziale)
- Klinischer Bezug in JEDEN UK eingebaut

---

## SCHRITT 4 — PHYSIK: Alle UKs auf Lehrbuchniveau

Für jedes der 7 Physik-Kapitel: Alle Unterthemen des Stichwortes müssen vollständig abgedeckt sein.

**ph-2-01 (Mechanik)** ist besonders umfangreich:
Unterthemen: Newton'sche Gesetze (alle 3!), Erhaltungssätze (Energie, Impuls, Drehimpuls),
Translation, Rotation (Drehmoment, Trägheitsmoment), Arbeit, Energie, Leistung, Impuls,
Gravitation (Kepler), Reibung (Haft/Gleit/Roll), **Dichte, Auftrieb (Archimedisches Prinzip),
Bernoulli-Gleichung, Druck (hydrostatisch, Pascalsches Gesetz)**.

Die aktuellen 4 UKs (ph-2-01 bis ph-2-04) decken die letzten 3 Punkte (Dichte/Auftrieb/Bernoulli)
eventuell nicht ausreichend ab — sicherstellen dass sie drin sind.

**ph-4-01 (Wärmelehre)** muss abdecken:
Temperatur und Temperaturskalen, innere Energie, Wärmekapazität (spezifisch, molar),
Wärmeleitung/Konvektion/Strahlung, alle 3 Hauptsätze der Thermodynamik (0., 1., 2.),
Entropie, Wärmekraftmaschinen (Carnot-Wirkungsgrad η = 1 - T_kalt/T_warm),
osmotischer Druck (van't Hoff: π = cRT), Gasgesetze/ideale Zustandsgleichung,
Anomalie des Wassers, Phasenübergänge (Schmelz-/Verdampfungsenthalpie).

**Für alle Physik-Kapitel gilt:**
- Formeln in Fließtext eingebettet mit Erklärung jeder Variablen
- Mindestens 1 durchgerechnetes Beispiel pro UK
- Klinischer Bezug (Blutdruck, Beatmung, Optik des Auges, EKG, Strahlentherapie, etc.)
- 800–1000 Wörter pro UK minimum

---

## SCHRITT 5 — MATHEMATIK: Alle UKs auf Lehrbuchniveau

**ma-2-01 (Algebra)** muss abdecken: Schlussrechnung, Prozentrechnung (auch Zinseszins),
Bruchrechnung, lineare/quadratische Gleichungen, Ungleichungen, binomische Formeln,
Potenzgesetze (alle 7 Regeln), Wurzelgesetze. Mindestens 3 Rechenbeispiele mit Lösung.

**ma-3-01 (Geometrie)** muss abdecken: Winkelarten, Winkelsätze (Scheitel, Stufen, Wechselwinkel),
Dreiecke (Kongruenz, Pythagoras, Winkelsumme, Flächeninhalt), Kreis (Umfang, Fläche, Kreiszahl π),
alle wichtigen Körper mit Volumen- UND Oberflächenformeln (Würfel, Quader, Zylinder, Kegel,
Kugel, Pyramide, Tetraeder, Prisma). Maßstab: jede Formel mit Herleitung oder Merkregel.

**ma-5-01 (Funktionen/Analysis)** muss abdecken: Grundfunktionen (linear, quadratisch, Potenz,
Exponential, Logarithmus, Trigonometrie), Eigenschaften (Definitions-/Wertebereich, Symmetrie,
Monotonie), Ableitungsregeln (Produkt, Quotient, Kette, Grundableitungen), Extremwerte
(notwendige/hinreichende Bedingung), Integralrechnung (Stammfunktion, bestimmtes Integral,
Hauptsatz der Differenzial- und Integralrechnung). Mindestens 2–3 Rechenbeispiele.

**ma-6-01 (Vektorrechnung)** muss abdecken: Vektordarstellung, Betrag, Einheitsvektor,
Addition/Subtraktion, Skalarmultiplikation, Skalarprodukt (geometrische Bedeutung: Winkel!),
Kreuzprodukt (Fläche des Parallelogramms, Rechte-Hand-Regel), Normalvektor.
Alle Formeln mit Rechenbeispielen. Klinischer Bezug: Kräftezerlegung in Biomechanik/Orthopädie.

---

## SCHRITT 6 — ABSCHLIESSENDE VALIDIERUNG

```bash
# TypeScript-Compile ohne Fehler
npx tsc --noEmit

# Alle geänderten Dateien auflisten
git diff --name-only

# Zeilenzahl der veränderten Bio-Kapitel prüfen (kap5, kap6 sollten deutlich größer sein)
wc -l src/data/bmsKapitel/biologie/kap5-klassische-genetik.ts
wc -l src/data/bmsKapitel/biologie/kap6-molekulargenetik.ts

# UK-Anzahl prüfen
grep -c "selfTest:" src/data/bmsKapitel/biologie/kap5-klassische-genetik.ts  # → 7
grep -c "selfTest:" src/data/bmsKapitel/biologie/kap6-molekulargenetik.ts   # → 7
grep -c "selfTest:" src/data/bmsKapitel/biologie/kap7-methoden-der-genetik.ts # → 6 (bio-7-03 neu)
grep -c "selfTest:" src/data/bmsKapitel/biologie/kap9-evolution.ts           # → 7 (bio-9-02 neu)
grep -c "selfTest:" src/data/bmsKapitel/biologie/kap10-oekologie.ts          # → 6 (bio-10-06 neu)
```

**Mindestanforderungen für Fertigstellung:**
- kap5-klassische-genetik.ts: mindestens 1800 Zeilen (7 UKs × ~260 Zeilen)
- kap6-molekulargenetik.ts: mindestens 2000 Zeilen (7 UKs × ~285 Zeilen)
- kap7-methoden-der-genetik.ts: mehr Zeilen als vorher (neuer UK bio-7-03)
- kap9-evolution.ts: mehr Zeilen als vorher (neuer UK bio-9-02)
- Alle Chemie-Kapitel: durchschnittlich ≥ 600 Zeilen
- Alle Physik-Kapitel: durchschnittlich ≥ 500 Zeilen
- `npx tsc --noEmit` ohne Fehler

---

## QUALITÄTS-CHECKLISTE pro UK (intern prüfen bevor Datei geschrieben wird)

Für jeden neuen/überarbeiteten UK selbst prüfen:
- [ ] `content`: ≥ 800 Wörter Fließtext (kein Bullet-Dump!)
- [ ] Alle `unterthemen` aus stichworteData.ts abgedeckt
- [ ] Formeln/Reaktionsgleichungen korrekt und erklärt
- [ ] Klinischer Bezug direkt im Text (nicht nur im `klinischerBezug`-Feld)
- [ ] `lernziele`: 3 präzise, prüfungsrelevante Ziele
- [ ] `sections`: 2–3 echte Fließtextabsätze, keine Aufzählungen
- [ ] `merksätze`: max. 3, nur echte Essenz-Merkformeln
- [ ] `selfTest`: 3–7 Fragen (Qualität > Quantität)
- [ ] `klinischerBezug`: 2–4 Sätze mit konkretem klinischen Beispiel
- [ ] `altfrage`: eine typische Prüfungsfrage mit Musterlösung
