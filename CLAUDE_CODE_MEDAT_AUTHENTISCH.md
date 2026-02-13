# CLAUDE CODE — MedMaster Authentisch & Konkurrenz-Killer
## 100% verifiziert gegen das offizielle MedAT-Format

Du bist ein Senior Full-Stack-Entwickler und MedAT-Experte. Dein Ziel: MedMaster zur BESTEN MedAT-Plattform machen — mit **exakt authentischen Aufgabenformaten**.

**ARBEITSWEISE:** Führe jeden Teil sequenziell durch. Nach jedem Teil: `npm run build` prüfen. Bei Fehlern sofort fixen. Die App darf NIEMALS abstürzen.

---

# ═══════════════════════════════════════════
# TEIL 1: KRITISCHE BUG-FIXES (sofort)
# ═══════════════════════════════════════════

## 1.1 Karteikarten Flip-Bug

Die Rückseite der Karteikarten zeigt Text **gespiegelt/rückwärts**.

Finde die Flashcard-Komponente und fixe:
- Die Rückseite (`.card-back`) braucht `transform: rotateY(180deg)` als DEFAULT
- BEIDE Seiten: `backface-visibility: hidden`
- Container: `transform-style: preserve-3d`
- Flipped-State: `transform: rotateY(180deg)` auf dem Inner-Container

**Test:** Karteikarten → Karte klicken → Rückseite muss normal lesbar sein.

## 1.2 BMS: 5 Antwortoptionen statt 4

Im echten MedAT hat JEDE BMS-Frage **5 Antwortoptionen (A-E)**, nicht 4. Prüfe alle bestehenden Fragen und stelle sicher dass JEDE Frage 5 Optionen hat. Füge wenn nötig plausible Distraktoren hinzu.

---

# ═══════════════════════════════════════════
# TEIL 2: BMS CONTENT-STRUKTUR
# ═══════════════════════════════════════════

## Problem:
Jedes Unterkapitel ist EIN riesiger Fließtext-Block ohne visuelle Gliederung.

## Lösung:
Jedes Unterkapitel bekommt diese Struktur:

```
📖 Lernziele (3-5 Punkte)
─────────────────────────
## Abschnitt 1: Überschrift
2-3 Absätze Fließtext
💡 Merke: Eselsbrücke/Key-Fakt
─────────────────────────
## Abschnitt 2: Überschrift
2-3 Absätze Fließtext
📊 Vergleichstabelle (wenn sinnvoll)
─────────────────────────
## Abschnitt 3: Überschrift
2-3 Absätze Fließtext
🖼️ SVG-Diagramm (wenn vorhanden)
─────────────────────────
🎯 Altfragen-Klassiker (aufklappbar)
🏥 Klinischer Bezug
✏️ Selbsttest (3 Fragen mit 5 Optionen A-E!)
[← Zurück] [✓ Gelernt] [Weiter →]
```

### Implementierung:
1. Teile bestehenden Fließtext in 2-4 Abschnitte mit eigenen `<h3>` Überschriften
2. Styling: `border-l-4 pl-4` mit Fachfarbe an Überschriften
3. Fachfarben: Bio=emerald, Chemie=red, Physik=blue, Mathe=violet
4. ALLE 159 Unterkapitel umstrukturieren

---

# ═══════════════════════════════════════════
# TEIL 3: FRAGEN-DATENBANK (211 → 2.500+)
# ═══════════════════════════════════════════

## KRITISCH: Alle BMS-Fragen müssen 5 Optionen (A-E) haben!

```typescript
interface Question {
  id: string;
  type: 'single-choice';
  category: 'biologie' | 'chemie' | 'physik' | 'mathematik';
  chapter: string;
  subchapter: string;
  difficulty: 1 | 2 | 3;
  question: string;
  options: [string, string, string, string, string]; // IMMER 5! (A-E)
  correctAnswer: number; // 0-4
  explanation: string;
  tags: string[];
}
```

### Ziele pro Fach:
- **Biologie: 800 Fragen** (40 Fragen × 20 Themenbereiche)
- **Chemie: 500 Fragen** (25 Fragen × 20 Themenbereiche)
- **Physik: 400 Fragen** (20 Fragen × 20 Themenbereiche)
- **Mathematik: 300 Fragen** (25 Fragen × 12 Themenbereiche)
- **TOTAL BMS: 2.000 Fragen**

### Beispiel-Frage (korrektes Format):
```typescript
{
  id: 'bio-zelle-001',
  type: 'single-choice',
  category: 'biologie',
  chapter: 'die-zelle',
  subchapter: 'prokaryoten-vs-eukaryoten',
  difficulty: 2,
  question: 'Welche Aussage über Prokaryoten ist FALSCH?',
  options: [
    'A) Sie besitzen 70S-Ribosomen',
    'B) Ihre DNA liegt frei im Cytoplasma als Nukleoid',
    'C) Sie vermehren sich durch Mitose',
    'D) Sie können Plasmide enthalten',
    'E) Ihre Zellwand kann Murein enthalten'
  ],
  correctAnswer: 2,
  explanation: 'Prokaryoten vermehren sich durch binäre Fission (Zweiteilung), NICHT durch Mitose. Mitose ist ein Teilungsprozess der Eukaryoten mit Spindelapparat und Chromosomenkondensation. Alle anderen Aussagen sind korrekt: 70S-Ribosomen (A), Nukleoid (B), Plasmide (D), Murein/Peptidoglykan in der Zellwand (E).',
  tags: ['Zellteilung', 'Prokaryoten']
}
```

---

# ═══════════════════════════════════════════
# TEIL 4: KFF — AUTHENTISCHE AUFGABENFORMATE
# ═══════════════════════════════════════════

## 4.1 ZAHLENFOLGEN (exakt wie MedAT)

### Offizielles Format:
- **10 Aufgaben in 15 Minuten** (~90 Sek pro Aufgabe)
- Es werden **7 Zahlen** gezeigt
- Gesucht: Die **nächsten 2 Zahlen** (8. und 9.)
- **5 Antwortoptionen (A-E)**: Jede Option ist ein ZAHLENPAAR
- Option E kann sein: "Keine der Antworten ist richtig"
- Nur Grundrechenarten: +, −, ×, ÷
- Nur ganze Zahlen als Lösungen

### Implementierung:
```typescript
interface ZahlenfolgeTask {
  sequence: number[];        // GENAU 7 Zahlen
  correctPair: [number, number]; // Die nächsten 2 Zahlen
  options: [string, string, string, string, string]; // 5 Optionen als Zahlenpaare
  correctOption: number;     // 0-4
  pattern: string;           // Erklärung des Musters
  difficulty: 1 | 2 | 3;
}

// Beispiel:
{
  sequence: [2, 4, 8, 16, 32, 64, 128],
  correctPair: [256, 512],
  options: [
    'A) 192, 256',
    'B) 256, 512',    // ← RICHTIG
    'C) 256, 1024',
    'D) 130, 132',
    'E) Keine der Antworten ist richtig'
  ],
  correctOption: 1,
  pattern: 'Jede Zahl wird mit 2 multipliziert (×2)',
  difficulty: 1
}
```

### Pattern-Typen (mindestens 15):
1. Konstante Addition (+n): z.B. +3, +7, +11
2. Konstante Multiplikation (×n): z.B. ×2, ×3
3. Wachsende Addition (+1, +2, +3, +4...): Differenz steigt
4. Fibonacci-ähnlich: a+b=c
5. Abwechselnde Operationen: +3, ×2, +3, ×2...
6. Quadratzahlen: 1, 4, 9, 16, 25...
7. Kubikzahlen: 1, 8, 27, 64...
8. Primzahlen: 2, 3, 5, 7, 11, 13...
9. Zwei verschachtelte Folgen: gerade/ungerade Position
10. Differenz der Differenzen konstant
11. Division: 1000, 500, 250, 125...
12. Addition + Subtraktion: +5, -2, +5, -2...
13. Potenzfolgen: 2¹, 2², 2³, 2⁴...
14. Dreieckszahlen: 1, 3, 6, 10, 15...
15. Faktorielle Muster: ×1, ×2, ×3, ×4...

### Generator:
```typescript
function generateZahlenfolge(difficulty: 1|2|3): ZahlenfolgeTask {
  // 1. Wähle zufälliges Pattern basierend auf Schwierigkeit
  // 2. Generiere 9 Zahlen nach dem Pattern
  // 3. Zeige erste 7, verstecke letzte 2
  // 4. Generiere 4 falsche Zahlenpaare (plausibel nahe an der richtigen Antwort)
  // 5. Mische die 5 Optionen
}
```

**Timer:** 15 Minuten Countdown für 10 Aufgaben. Zeige verbleibende Zeit und Aufgabennummer.

---

## 4.2 GEDÄCHTNIS & MERKFÄHIGKEIT — Allergieausweise (exakt wie MedAT)

### Offizielles Format:
- **8 Allergieausweise** zum Einprägen
- **Lernphase: 8 Minuten** (Countdown-Timer)
- **Pause: ~40 Minuten** (im echten Test werden andere Sektionen dazwischen gemacht)
- **Abfragephase: 25 Fragen in 15 Minuten** (~36 Sek pro Frage)

### JEDER Ausweis enthält GENAU diese 8 Datenfelder:
1. **Vorname + Nachname** (Fantasienamen, 2 Silben)
2. **Geburtsdatum** (nur Tag + Monat, KEIN Jahr)
3. **Medikamenteneinnahme** (Ja / Nein)
4. **Blutgruppe** (A, B, AB, 0 — MIT Rhesusfaktor +/-)
5. **Bekannte Allergien** (2-4 Allergien aus Pool)
6. **Ausweisnummer** (5-stellig)
7. **Ausstellungsland** (echtes Land)
8. **Passfoto** (Platzhalter-Avatar mit unterscheidbaren Merkmalen)

### Implementierung:
```typescript
interface Allergieausweis {
  vorname: string;
  nachname: string;
  geburtsdatum: string;     // z.B. "14. März"
  medikamente: boolean;     // Ja/Nein
  blutgruppe: string;       // z.B. "A+", "0-", "AB+"
  allergien: string[];      // z.B. ["Penicillin", "Latex", "Nüsse"]
  ausweisnummer: string;    // z.B. "48271"
  ausstellungsland: string; // z.B. "Österreich", "Deutschland", "Schweiz"
  avatarId: number;         // Für visuelles Unterscheiden
}

// Daten-Pools:
const VORNAMEN = ['Anna', 'Florian', 'Maria', 'Thomas', 'Katharina', 'Michael',
  'Elisabeth', 'Johannes', 'Sophie', 'Maximilian', 'Laura', 'Daniel',
  'Sarah', 'Lukas', 'Julia', 'Andreas', 'Nina', 'Stefan', 'Lisa', 'Markus',
  'Eva', 'Martin', 'Petra', 'Christian', 'Barbara', 'Wolfgang',
  'Claudia', 'Bernhard', 'Monika', 'Robert'];

const NACHNAMEN = ['Müller', 'Huber', 'Bauer', 'Wagner', 'Pichler',
  'Steiner', 'Moser', 'Mayer', 'Hofer', 'Gruber', 'Fischer', 'Weber',
  'Eder', 'Berger', 'Schwarz', 'Brunner', 'Winkler', 'Reiter', 'Maier',
  'Leitner', 'Fuchs', 'Lang', 'Brandt', 'Koch', 'Weiß'];

const ALLERGENE = ['Penicillin', 'Latex', 'Erdnüsse', 'Pollen', 'Hausstaubmilben',
  'Bienengift', 'Katzenhaar', 'Nickel', 'Soja', 'Weizen', 'Eier', 'Milch',
  'Fisch', 'Schimmelpilze', 'Gräser', 'Birke', 'Ambrosia', 'Roggen',
  'Codein', 'ASS', 'Ibuprofen', 'Kontrastmittel', 'Meeresfrüchte',
  'Sellerie', 'Sesam', 'Wespengift', 'Hundehaar', 'Pferdehaar',
  'Haselnüsse', 'Walnüsse', 'Cashew', 'Gluten', 'Sulfonamide',
  'Metamizol', 'Duftstoffe', 'Konservierungsstoffe', 'Formaldehyd',
  'Chrom', 'Kobalt', 'Lokalanästhetika'];

const LAENDER = ['Österreich', 'Deutschland', 'Schweiz', 'Italien', 'Frankreich',
  'Spanien', 'Ungarn', 'Tschechien', 'Slowenien', 'Kroatien',
  'Polen', 'Niederlande', 'Belgien', 'Schweden', 'Dänemark'];

const BLUTGRUPPEN = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', '0+', '0-'];
```

### Abfrage-Format (25 Fragen, 5 Optionen A-E):
Verschiedene Fragetypen:
- "Welche Blutgruppe hat [Name]?"
- "An welchem Tag hat [Name] Geburtstag?"
- "Welche Allergie hat [Name] NICHT?"
- "Nimmt [Name] Medikamente ein?"
- "In welchem Land wurde der Ausweis von [Name] ausgestellt?"
- "Welche Ausweisnummer hat [Name]?"
- "Wer hat die Blutgruppe AB+?"
- "Wer ist allergisch gegen Penicillin?"

### UI-Design:
**Lernphase:**
- 8 Ausweise als Karten nebeneinander/untereinander (scrollbar)
- Jeder Ausweis sieht aus wie ein echter Allergiepass
- Großer Countdown-Timer: "Noch 7:42 Minuten"
- Kein Weiterblättern möglich bis Timer abläuft

**Abfragephase:**
- 25 MC-Fragen nacheinander
- 5 Antwortoptionen (A-E)
- Timer: 15 Minuten gesamt
- Keine Rücknavigation (wie beim echten MedAT)

**In unserer App:** Da wir keinen 40-Min-Gap einbauen können, biete 2 Modi:
- **Übungsmodus:** Direkt nach dem Lernen abfragen
- **Authentischer Modus:** Timer läuft 40 Min, User muss in der Zwischenzeit andere Sektionen üben

---

## 4.3 FIGUREN ZUSAMMENSETZEN (exakt wie MedAT)

### Offizielles Format:
- **15 Aufgaben in 20 Minuten** (~80 Sek pro Aufgabe)
- Oben: **3-7 einzelne Puzzleteile** (2D geometrische Formen)
- Unten: **5 Antwortoptionen (A-E)** mit fertigen Figuren
- Option E: "Keine der Antwortmöglichkeiten ist richtig"
- **Rotation: JA erlaubt!**
- **Spiegelung: NEIN verboten!**
- Teile dürfen NICHT überlappen
- Fertige Figur kann größer/kleiner dargestellt sein

### Implementierung mit SVG:
```typescript
interface FigurenTask {
  pieces: SVGPiece[];      // 3-7 Puzzleteile als SVG-Paths
  options: SVGFigure[];    // 5 zusammengesetzte Figuren (A-E)
  correctOption: number;   // 0-4
  difficulty: 1 | 2 | 3;
}

// Schwierigkeit 1: 3-4 einfache Teile (Dreiecke, Rechtecke)
// Schwierigkeit 2: 5-6 Teile mit nötiger Rotation
// Schwierigkeit 3: 6-7 Teile, komplexe Formen
```

### Typische Lösungsfiguren:
Pentagon, Hexagon, Heptagon, Oktagon, Viertelkreis, Halbkreis, Dreiviertelkreis, Vollkreis, zusammengesetzte Polygone

---

## 4.4 WORTFLÜSSIGKEIT (exakt wie MedAT)

### Offizielles Format:
- **15 Aufgaben in 20 Minuten** (~80 Sek pro Aufgabe)
- Gezeigt: **Buchstabensalat** (6-10 Buchstaben durcheinander)
- Gefragt: **"Mit welchem Buchstaben BEGINNT das gesuchte Wort?"**
- **5 Antwortoptionen (A-E)**: 4 Buchstaben + "Keine Antwort ist richtig"
- Nur **deutsche Hauptwörter (Nomen)**
- **KEINE Umlaute (ä, ö, ü) und kein ß im Test!**

### Implementierung:
```typescript
interface WortfluessigkeitTask {
  scrambled: string;       // z.B. "IEZNIDM"
  solution: string;        // z.B. "MEDIZIN"
  startingLetter: string;  // z.B. "M"
  options: [string, string, string, string, string]; // 5 Buchstaben-Optionen
  correctOption: number;   // 0-4
  difficulty: 1 | 2 | 3;
}

// Beispiel:
{
  scrambled: 'IEZNIDM',
  solution: 'MEDIZIN',
  startingLetter: 'M',
  options: ['A) I', 'B) D', 'C) M', 'D) N', 'E) Keine Antwort ist richtig'],
  correctOption: 2,
  difficulty: 1
}
```

### Wörter-Pool (500+ Wörter, OHNE Umlaute/ß):
```typescript
const WOERTER = {
  leicht: [ // 4-6 Buchstaben
    'BLUME', 'SONNE', 'TIGER', 'WOLKE', 'STEIN', 'BIRNE', 'DECKE',
    'FEUER', 'GABEL', 'HAFEN', 'INSEL', 'KARTE', 'LAMPE', 'MAUER',
    'NADEL', 'OLIVE', 'PERLE', 'REGEN', 'STUHL', 'TISCH', 'WELLE',
    'ZANGE', 'DRAHT', 'MILCH', 'KRAFT', 'GRUND', 'PFLUG', 'STROM',
    // ... 100+ weitere
  ],
  mittel: [ // 7-9 Buchstaben
    'MEDIZIN', 'CHEMIKER', 'BIOLOGIE', 'ANATOMIE', 'DIAGNOSE',
    'THERAPIE', 'CHIRURGE', 'SKELETT', 'MEMBRAN', 'PROTEIN',
    'REAKTION', 'MOLEKUEL', 'ELEMENT', 'SPINDEL', 'HORMON',
    'SYNAPSE', 'NEURITIS', 'PLANKTON', 'MINERAL', 'KRISTALL',
    // ... 200+ weitere
  ],
  schwer: [ // 10+ Buchstaben
    'PHOTOSYNTHESE', 'NEUROCHIRURGIE', 'ELEKTRIZITAET',
    'CHROMOSOMEN', 'STOFFWECHSEL', 'THERMODYNAMIK',
    'DOPPELHELIX', 'DIFFUSION', 'OSMOTISCH', 'KATALYSATOR',
    'REDUKTION', 'OXIDATION', 'POLARISATION',
    // ... 100+ weitere
  ]
};
```

### Generator:
```typescript
function generateWortfluessigkeit(difficulty: 1|2|3): WortfluessigkeitTask {
  // 1. Wähle zufälliges Wort aus Pool
  // 2. Mische die Buchstaben zufällig
  // 3. Generiere 4 falsche Anfangsbuchstaben (aus dem Wort, aber nicht der richtige)
  // 4. Erstelle 5 Optionen (A-E), eine davon "Keine Antwort ist richtig"
  // 5. Stelle sicher: Kein Umlaut/ß im Wort!
}
```

---

## 4.5 IMPLIKATIONEN ERKENNEN (exakt wie MedAT — NUR MedAT-H!)

### Offizielles Format:
- **10 Aufgaben in 10 Minuten** (60 Sek pro Aufgabe)
- **Kategorische Syllogismen** (NICHT "Wenn-Dann"!)
- Zwei Prämissen mit Quantoren
- 5 Antwortoptionen (A-E)

### Die 4 Quantor-Formen:
1. **"Alle A sind B"** — Universal bejahend (A)
2. **"Einige A sind B"** — Partikulär bejahend (I)
3. **"Alle A sind keine B"** = "Kein A ist B" — Universal verneinend (E)
4. **"Einige A sind keine B"** — Partikulär verneinend (O)

### Die 5 Antwortoptionen (IMMER dieses Schema):
- A) Alle C sind A / Einige C sind A / etc.
- B) ...
- C) ...
- D) ...
- E) **Keine der Schlussfolgerungen ist richtig**

### Die 19 gültigen Modi:
```typescript
const GUELTIGE_MODI = [
  // Figur 1 (M-P, S-M → S-P)
  { p1: 'Alle M sind P', p2: 'Alle S sind M', conclusion: 'Alle S sind P' },        // Barbara
  { p1: 'Alle M sind keine P', p2: 'Alle S sind M', conclusion: 'Alle S sind keine P' }, // Celarent
  { p1: 'Alle M sind P', p2: 'Einige S sind M', conclusion: 'Einige S sind P' },    // Darii
  { p1: 'Alle M sind keine P', p2: 'Einige S sind M', conclusion: 'Einige S sind keine P' }, // Ferio

  // Figur 2 (P-M, S-M → S-P)
  { p1: 'Alle P sind keine M', p2: 'Alle S sind M', conclusion: 'Alle S sind keine P' }, // Cesare
  { p1: 'Alle P sind M', p2: 'Alle S sind keine M', conclusion: 'Alle S sind keine P' }, // Camestres
  { p1: 'Alle P sind keine M', p2: 'Einige S sind M', conclusion: 'Einige S sind keine P' }, // Festino
  { p1: 'Alle P sind M', p2: 'Einige S sind keine M', conclusion: 'Einige S sind keine P' }, // Baroco

  // Figur 3 (M-P, M-S → S-P)
  { p1: 'Alle M sind P', p2: 'Alle M sind S', conclusion: 'Einige S sind P' },      // Darapti
  { p1: 'Alle M sind keine P', p2: 'Alle M sind S', conclusion: 'Einige S sind keine P' }, // Felapton
  { p1: 'Einige M sind P', p2: 'Alle M sind S', conclusion: 'Einige S sind P' },    // Disamis
  { p1: 'Alle M sind P', p2: 'Einige M sind S', conclusion: 'Einige S sind P' },    // Datisi
  { p1: 'Einige M sind keine P', p2: 'Alle M sind S', conclusion: 'Einige S sind keine P' }, // Bocardo
  { p1: 'Alle M sind keine P', p2: 'Einige M sind S', conclusion: 'Einige S sind keine P' }, // Ferison

  // Figur 4 (P-M, M-S → S-P)
  { p1: 'Alle P sind M', p2: 'Alle M sind S', conclusion: 'Einige S sind P' },      // Bramantip
  { p1: 'Alle P sind keine M', p2: 'Alle M sind S', conclusion: 'Einige S sind keine P' }, // Fesapo
  { p1: 'Alle P sind M', p2: 'Alle M sind keine S', conclusion: 'Alle S sind keine P' }, // Camenes
  { p1: 'Einige P sind M', p2: 'Alle M sind S', conclusion: 'Einige S sind P' },    // Dimaris
  { p1: 'Alle P sind keine M', p2: 'Einige M sind S', conclusion: 'Einige S sind keine P' }, // Fresison
];
```

### Generator:
```typescript
function generateImplikation(difficulty: 1|2|3): ImplikationTask {
  // Pool von Begriffen (abstrakt, NICHT Alltagswissen!)
  const begriffe = [
    ['Seen', 'Meere', 'Flüsse'],
    ['Metalle', 'Elemente', 'Leiter'],
    ['Säugetiere', 'Tiere', 'Warmblüter'],
    ['Planeten', 'Himmelskörper', 'Sterne'],
    ['Quadrate', 'Rechtecke', 'Parallelogramme'],
    ['Rosen', 'Blumen', 'Pflanzen'],
    ['Ärzte', 'Akademiker', 'Mediziner'],
    // ... 30+ Tripel
  ];

  // 1. Wähle zufälliges Tripel (A, B, C)
  // 2. Wähle zufälligen Modus (1-19) oder ungültig
  // 3. Setze Begriffe in Prämissen ein
  // 4. Generiere 4 Schlussfolgerungen + "Keine richtig" als Option E
  // 5. Bei ungültigem Schluss: E ist richtig

  // Difficulty 1: Einfache Modi (Barbara, Celarent, Darii)
  // Difficulty 2: Mittlere Modi + ungültige Schlüsse
  // Difficulty 3: Alle 19 Modi + tricky ungültige Schlüsse
}
```

### Beispielaufgabe:
```
Prämisse 1: Alle Seen sind Meere.
Prämisse 2: Einige Seen sind Flüsse.

A) Alle Flüsse sind Meere
B) Alle Flüsse sind keine Meere
C) Einige Flüsse sind Meere          ← RICHTIG
D) Einige Flüsse sind keine Meere
E) Keine der Schlussfolgerungen ist richtig
```

### WICHTIG:
- Prüflinge müssen Alltagswissen IGNORIEREN ("Seen sind KEINE Meere" — irrelevant!)
- Die Prämissen gelten als WAHR, unabhängig von der Realität
- Zeige nach jeder Aufgabe: Erklärung mit Venn-Diagramm welcher Modus vorliegt

---

# ═══════════════════════════════════════════
# TEIL 5: TV — TEXTVERSTÄNDNIS (MedAT-H)
# ═══════════════════════════════════════════

### Offizielles Format:
- **5 Texte** mit insgesamt **12 Fragen**
- **35 Minuten** gesamt
- **5 Antwortoptionen (A-E)** pro Frage
- Textlänge: 75-300+ Wörter
- Themen: Beliebig (wissenschaftlich UND nicht-wissenschaftlich)
- Antworten NUR basierend auf Textinhalt, NICHT Vorwissen

### Implementierung:
Erstelle mindestens **10 verschiedene Textsets** (je 5 Texte mit 12 Fragen):
- Set 1-3: Leicht (kürzere Texte, direkte Fragen)
- Set 4-7: Mittel (längere Texte, Schlussfolgerungen nötig)
- Set 8-10: Schwer (komplexe Texte, indirekte Fragen)

### Text-Themen (abwechslungsreich!):
Naturwissenschaft, Geschichte, Kultur, Technologie, Philosophie, Medizin, Alltagsphänomene, Soziologie, Linguistik, Umwelt

---

# ═══════════════════════════════════════════
# TEIL 6: SEK — SOZIAL-EMOTIONALE KOMPETENZEN
# ═══════════════════════════════════════════

## 6.1 EMOTIONEN ERKENNEN (exakt wie MedAT)

### Offizielles Format:
- **14 Aufgaben in 21 Minuten** (~90 Sek pro Aufgabe)
- Rein **textbasiert** (KEINE Bilder/Fotos!)
- Situationsbeschreibung (1-3 Sätze)
- 5 Emotionen werden gezeigt
- Jede Emotion: "eher wahrscheinlich" ODER "eher unwahrscheinlich"
- **Alles-oder-Nichts:** Alle 5 richtig = 1 Punkt, sonst 0

### Implementierung:
```typescript
interface EmotionenErkennenTask {
  situation: string;  // "Maria erfährt, dass..."
  emotionen: {
    name: string;     // z.B. "Freude", "Ärger", "Scham"
    correct: 'wahrscheinlich' | 'unwahrscheinlich';
  }[];  // GENAU 5 Emotionen
}

const EMOTIONEN_POOL = [
  'Freude', 'Trauer', 'Ärger', 'Angst', 'Ekel', 'Überraschung',
  'Scham', 'Schuld', 'Stolz', 'Neid', 'Eifersucht', 'Mitgefühl',
  'Erleichterung', 'Enttäuschung', 'Hoffnung', 'Dankbarkeit',
  'Verachtung', 'Bewunderung', 'Liebe', 'Langeweile'
];
```

### Erstelle mindestens **50 Situationen** (14 pro Übungs-Set):
- Medizinische Szenarien (Arzt-Patient, Prüfung, Diagnose)
- Alltags-Szenarien (Arbeit, Beziehung, Familie, Freundschaft)
- Ethische Dilemmata (Entscheidungskonflikte)

### UI:
- Situation als Text oben
- 5 Emotionen untereinander
- Jede mit Toggle: "wahrscheinlich ↔ unwahrscheinlich"
- Timer: 21 Minuten für 14 Aufgaben

---

## 6.2 EMOTIONEN REGULIEREN (exakt wie MedAT)

### Offizielles Format:
- **12 Aufgaben in 18 Minuten** (~90 Sek pro Aufgabe)
- Situation: Person erlebt eine **NEGATIVE Emotion**
- Ziel der Person wird beschrieben
- **4 Bewältigungsstrategien** in Ich-Perspektive ("Ich würde...")
- Wähle die BESTE Strategie (die am besten Emotion reguliert UND Ziel verfolgt)
- **Prozentuale Bewertung** (nicht Alles-oder-Nichts!)

### Implementierung:
```typescript
interface EmotionenRegulierenTask {
  situation: string;       // Szenario mit negativer Emotion
  emotion: string;         // z.B. "Frustration", "Ärger", "Enttäuschung"
  ziel: string;            // Was die Person erreichen will
  strategien: {
    text: string;          // "Ich würde..." (Ich-Perspektive!)
    score: number;         // 0-3 (0=schlecht, 3=optimal)
  }[];  // GENAU 4 Strategien
}

// Beispiel:
{
  situation: 'Dein Kollege hat deine Idee in der Teambesprechung als seine eigene präsentiert. Du bist wütend und enttäuscht.',
  emotion: 'Wut und Enttäuschung',
  ziel: 'Die Anerkennung für deine Arbeit bekommen und die Arbeitsbeziehung erhalten.',
  strategien: [
    { text: 'Ich würde ihn sofort vor dem gesamten Team konfrontieren und klarstellen, dass es meine Idee war.', score: 1 },
    { text: 'Ich würde nach der Besprechung in Ruhe mit ihm sprechen, meine Gefühle ausdrücken und eine Lösung vorschlagen.', score: 3 },
    { text: 'Ich würde nichts sagen und die Situation hinnehmen, um Konflikte zu vermeiden.', score: 0 },
    { text: 'Ich würde direkt zum Vorgesetzten gehen und mich beschweren.', score: 1 },
  ]
}
```

### Erstelle mindestens **48 Szenarien** (12 pro Übungs-Set, 4 Sets).

---

## 6.3 SOZIALES ENTSCHEIDEN (exakt wie MedAT)

### Offizielles Format:
- **14 Aufgaben in 21 Minuten** (~90 Sek pro Aufgabe)
- Ethisches/moralisches Dilemma (oft medizinischer Kontext)
- **5 Aussagen/Handlungen**
- **RANKEN von A (wichtigste) bis E (unwichtigste)**
- Jeder Rang darf nur EINMAL vergeben werden
- **Prozentuale Bewertung** basierend auf Kohlbergs Moralentwicklungstheorie
- Postkonventionelles Denken (universelle Prinzipien) = höchste Punktzahl

### Implementierung:
```typescript
interface SozialesEntscheidenTask {
  dilemma: string;         // Ethisches Szenario
  aussagen: {
    text: string;          // Handlung/Überlegung
    idealRank: number;     // 1=wichtigste ... 5=unwichtigste (Experten-Ranking)
    moralLevel: 'prekonventionell' | 'konventionell' | 'postkonventionell';
  }[];  // GENAU 5 Aussagen
}

// Beispiel:
{
  dilemma: 'Ein Arzt entdeckt, dass ein Patient, der auf der Warteliste für eine Organtransplantation steht, seinen Alkoholkonsum verschwiegen hat. Die Richtlinien schreiben Abstinenz vor.',
  aussagen: [
    { text: 'Der Arzt sollte den Patienten von der Liste streichen, weil Regeln für alle gelten.', idealRank: 3, moralLevel: 'konventionell' },
    { text: 'Der Arzt sollte mit dem Patienten sprechen und gemeinsam eine Lösung suchen, die sowohl fair als auch menschlich ist.', idealRank: 1, moralLevel: 'postkonventionell' },
    { text: 'Der Arzt sollte nichts unternehmen, um den Patienten nicht zu verlieren.', idealRank: 5, moralLevel: 'prekonventionell' },
    { text: 'Der Arzt sollte die Situation dem Ethikkomitee melden und deren Entscheidung abwarten.', idealRank: 2, moralLevel: 'postkonventionell' },
    { text: 'Der Arzt sollte den Fall für sich behalten, weil er dem Patienten versprochen hat, vertraulich zu sein.', idealRank: 4, moralLevel: 'konventionell' },
  ]
}
```

### UI für Ranking:
- Drag-and-Drop Interface: 5 Aussagen in die richtige Reihenfolge bringen
- ODER: Dropdown A-E neben jeder Aussage (jeder Buchstabe nur einmal)
- Visuelle Warnung wenn ein Rang doppelt vergeben wird

### Erstelle mindestens **56 Dilemmata** (14 pro Übungs-Set, 4 Sets).

---

# ═══════════════════════════════════════════
# TEIL 7: TESTSIMULATIONEN (1 → 5)
# ═══════════════════════════════════════════

### Authentische Simulationsstruktur:
```typescript
const SIMULATION = {
  name: 'MedAT-H Vollsimulation',
  sections: [
    {
      name: 'BMS — Basiskenntnistest',
      subsections: [
        { name: 'Biologie', questions: 40, time: 30 },
        { name: 'Chemie', questions: 24, time: 18 },
        { name: 'Physik', questions: 18, time: 16 },
        { name: 'Mathematik', questions: 12, time: 11 },
      ],
      totalQuestions: 94,
      totalTime: 75, // Minuten
      weight: 0.40,
    },
    {
      name: 'TV — Textverständnis',
      questions: 12, // aus 5 Texten
      time: 35,
      weight: 0.10,
    },
    {
      name: 'KFF — Kognitive Fähigkeiten',
      subsections: [
        { name: 'Zahlenfolgen', questions: 10, time: 15 },
        { name: 'Gedächtnis & Merkfähigkeit — Lernphase', questions: 0, time: 8 },
        // === PAUSE / ANDERE SEKTIONEN DAZWISCHEN ===
        { name: 'Figuren zusammensetzen', questions: 15, time: 20 },
        { name: 'Gedächtnis & Merkfähigkeit — Abfrage', questions: 25, time: 15 },
        { name: 'Wortflüssigkeit', questions: 15, time: 20 },
        { name: 'Implikationen erkennen', questions: 10, time: 10 },
      ],
      weight: 0.40,
    },
    {
      name: 'SEK — Sozial-emotionale Kompetenzen',
      subsections: [
        { name: 'Emotionen erkennen', questions: 14, time: 21 },
        { name: 'Emotionen regulieren', questions: 12, time: 18 },
        { name: 'Soziales Entscheiden', questions: 14, time: 21 },
      ],
      weight: 0.10,
    },
  ],
  totalTime: 250, // ~4 Stunden
};
```

### Features:
- **Authentischer Timer** mit Countdown pro Sektion
- **Keine Rücknavigation** innerhalb einer Sektion
- **Pause NUR zwischen Sektionen**
- **Gedächtnis:** Lernphase → andere Sektionen → Abfragephase (authentischer Gap!)
- **Sofortige Auswertung** mit:
  - Punkte pro Sektion + Gesamtpunktzahl
  - Gewichtete Gesamtprozent (BMS 40%, KFF 40%, TV 10%, SEK 10%)
  - Stärken/Schwächen-Radar-Chart
  - Jede falsche Frage mit Erklärung
  - Zeitverbrauch-Analyse

### Erstelle 5 verschiedene Simulationen.

---

# ═══════════════════════════════════════════
# TEIL 8: KARTEIKARTEN UPGRADE
# ═══════════════════════════════════════════

### 8.1 Mehr Karten (48 → 500+):
- Biologie: 200 Karten
- Chemie: 120 Karten
- Physik: 100 Karten
- Mathematik: 80 Karten

### 8.2 Vier Bewertungsstufen (wie Anki):
- **Nochmal** (Intervall: < 1 Min)
- **Schwer** (Intervall: < 10 Min)
- **Gut** (Intervall: 1 Tag)
- **Leicht** (Intervall: 4 Tage)

---

# ═══════════════════════════════════════════
# TEIL 9: SVG-DIAGRAMME OPTIMIEREN
# ═══════════════════════════════════════════

Für ALLE SVG-Diagramme:
1. Text NEBEN Elementen, nicht AUF ihnen
2. Leader Lines (dünne Linien) von Element zum Label
3. Weißer Hintergrund hinter Labels
4. Minimum fontSize="13", fontWeight="600"
5. Responsive: `viewBox` + `className="w-full max-w-2xl mx-auto"`
6. Hover-Effekte + Klick-Details

---

# ═══════════════════════════════════════════
# TEIL 10: QUALITÄTSSICHERUNG
# ═══════════════════════════════════════════

Nach ALLEN Änderungen:

```bash
npm run build   # KEINE Fehler
npm run dev     # App muss starten
```

### Checkliste:
- [ ] Karteikarten flippen korrekt
- [ ] BMS-Fragen: ALLE haben 5 Optionen (A-E)
- [ ] BMS-Unterkapitel: 2+ Abschnitte mit Überschriften
- [ ] Zahlenfolgen: 7 Zahlen → nächste 2 finden, 5 Optionen
- [ ] Allergieausweise: 8 Felder pro Ausweis, 8 Min Lernzeit, 25 Fragen
- [ ] Figuren: Rotation JA, Spiegelung NEIN, 5 Optionen
- [ ] Wortflüssigkeit: Anfangsbuchstabe gesucht, keine Umlaute, 5 Optionen
- [ ] Implikationen: Kategorische Syllogismen mit Alle/Einige, 19 Modi, 5 Optionen
- [ ] TV: 5 Texte, 12 Fragen total, 5 Optionen
- [ ] SEK Emotionen erkennen: Textbasiert, 5 Emotionen, wahrscheinlich/unwahrscheinlich
- [ ] SEK Emotionen regulieren: 4 Strategien in Ich-Perspektive, beste wählen
- [ ] SEK Soziales Entscheiden: 5 Aussagen RANKEN (A-E), Kohlberg-basiert
- [ ] Mindestens 2.000 BMS-Fragen
- [ ] Mindestens 5 Simulationen
- [ ] Keine Umlaut-Fehler (ae → ä)
- [ ] App lädt ohne weiße Seite

---

## REIHENFOLGE:
1. ⚡ Karteikarten Flip-Bug (5 Min)
2. 📝 BMS Fragen auf 5 Optionen updaten
3. 📝 BMS Content-Struktur (Textwände aufteilen)
4. 🧠 KFF Generatoren (Zahlenfolgen, Allergieausweise, Wortflüssigkeit, Figuren, Implikationen)
5. 📊 Fragen-Datenbank aufbauen (2.000+ BMS-Fragen)
6. 📖 TV Textverständnis (10 Sets)
7. ❤️ SEK alle 3 Untertests (Emotionen erkennen/regulieren, Soziales Entscheiden)
8. 🖼️ SVG-Diagramme optimieren
9. 🃏 Karteikarten (500+ Karten, 4 Stufen)
10. 📋 5 Testsimulationen
11. ✅ Build + Test

**NACH JEDEM TEIL: `npm run build` prüfen!**
