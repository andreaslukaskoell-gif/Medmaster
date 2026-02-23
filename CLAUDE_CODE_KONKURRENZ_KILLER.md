# CLAUDE CODE — KONKURRENZ-KILLER PROMPT

## MedMaster: Von 211 Fragen zu 3.000+ | Von Basic zu Marktführer

Du bist ein Senior Full-Stack-Entwickler und MedAT-Experte. Dein Ziel: MedMaster zur BESTEN kostenlosen MedAT-Plattform machen — besser als StudyMed (€69), MedGurus (€380) und medBuddy.

**ARBEITSWEISE:** Führe jeden Teil sequenziell durch. Nach jedem Teil: `npm run build` prüfen. Bei Fehlern sofort fixen bevor du weitermachst.

---

## TEIL 1: KARTEIKARTEN FLIP-BUG FIXEN (5 Min)

Die Rückseite der Karteikarten zeigt Text **gespiegelt/rückwärts**.

### Fix:

Finde die Flashcard-Komponente und stelle sicher:

```
.card-back {
  backface-visibility: hidden;
  transform: rotateY(180deg);  /* ← DAS FEHLT WAHRSCHEINLICH */
}
```

Wenn Tailwind-Klassen verwendet werden:

- Die Rückseite braucht `[transform:rotateY(180deg)]` als DEFAULT-Zustand
- BEIDE Seiten: `[backface-visibility:hidden]`
- Container: `[transform-style:preserve-3d]`
- Flipped state: `[transform:rotateY(180deg)]` auf dem Inner-Container

**Test:** Karteikarten öffnen → Karte klicken → Rückseiten-Text muss normal lesbar sein.

---

## TEIL 2: BMS CONTENT-STRUKTUR (Textwüste → Lehrbuch)

### Problem:

Jedes Unterkapitel ist EIN riesiger Fließtext-Block. Überwältigend und nicht lernförderlich.

### Lösung:

Erstelle eine `SubchapterContent`-Komponente die JEDEN Unterkapitel-Content so strukturiert:

```
┌──────────────────────────────────────────┐
│ 📖 Lernziele (3-5 Bullet Points)         │
├──────────────────────────────────────────┤
│ ## Abschnitt 1: Überschrift               │
│ 2-3 Absätze Fließtext                     │
│ ┌─ 💡 Merke ────────────────────────┐    │
│ │ Eselsbrücke oder Key-Fakt         │    │
│ └────────────────────────────────────┘    │
│                                           │
│ ## Abschnitt 2: Überschrift               │
│ 2-3 Absätze Fließtext                     │
│ ┌─ 📊 Vergleichstabelle ────────────┐    │
│ │ Wenn relevant                      │    │
│ └────────────────────────────────────┘    │
│                                           │
│ ## Abschnitt 3: Überschrift               │
│ 2-3 Absätze Fließtext                     │
│                                           │
│ 🖼️ SVG-Diagramm (wenn vorhanden)         │
│                                           │
│ 🎯 Altfragen-Klassiker (aufklappbar)      │
│ 🏥 Klinischer Bezug                       │
│ ✏️ Selbsttest (3 MC-Fragen)               │
│                                           │
│ [← Zurück] [✓ Gelernt] [Weiter →]        │
└──────────────────────────────────────────┘
```

### Implementierung:

1. **Datenstruktur erweitern:**

```typescript
interface ContentSection {
  heading: string;
  paragraphs: string[]; // 2-3 Absätze
  merksatz?: string;
  table?: { headers: string[]; rows: string[][] };
}

interface SubchapterData {
  // ... bestehende Felder ...
  lernziele: string[]; // NEU: 3-5 Lernziele
  sections: ContentSection[]; // NEU: 2-4 strukturierte Abschnitte statt 1 content-String
}
```

2. **Bestehenden Content aufteilen:** Teile den Fließtext jedes Unterkapitels in 2-4 Abschnitte mit eigenen Überschriften. Der Content bleibt inhaltlich gleich, wird nur visuell gegliedert.

3. **Visuelles Styling:**
   - Abschnitt-Überschriften: `border-l-4 border-teal-500 pl-4 text-lg font-semibold`
   - Merksätze: `bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg`
   - Klinischer Bezug: `bg-rose-50 border-l-4 border-rose-400 p-4 rounded-r-lg`
   - Altfragen: `bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg`
   - Tabellen: `divide-y divide-gray-200` mit `even:bg-gray-50`

4. **Fachfarben einführen:**

```typescript
const FACH_FARBEN = {
  biologie: { border: "border-emerald-500", bg: "bg-emerald-50", text: "text-emerald-700" },
  chemie: { border: "border-red-500", bg: "bg-red-50", text: "text-red-700" },
  physik: { border: "border-blue-500", bg: "bg-blue-50", text: "text-blue-700" },
  mathematik: { border: "border-violet-500", bg: "bg-violet-50", text: "text-violet-700" },
};
```

Verwende die Fachfarbe für Abschnitt-Überschriften, Progress Bars, und Badges durchgängig.

5. **ALLE 159 Unterkapitel** müssen die neue Struktur bekommen. Mindestens 2 Abschnitte mit Überschriften pro Unterkapitel.

---

## TEIL 3: FRAGEN-EXPLOSION (211 → 3.000+)

### Das ist der WICHTIGSTE Teil. Ohne Fragen keine Plattform.

### 3.1 Fragen-Generator-System bauen

Erstelle eine zentrale Fragen-Datenbank mit Typisierung:

```typescript
interface Question {
  id: string;
  type: "single-choice" | "multiple-choice" | "zuordnung" | "reihenfolge";
  category: "biologie" | "chemie" | "physik" | "mathematik";
  chapter: string;
  subchapter: string;
  difficulty: 1 | 2 | 3; // Leicht, Mittel, Schwer
  question: string;
  options: string[];
  correctAnswer: number | number[];
  explanation: string;
  altfrageTag?: boolean; // Markiert als typische Altfrage
  tags: string[];
}
```

### 3.2 Fragen pro Fach (Minimum-Ziele):

**Biologie (800 Fragen):**

- Die Zelle: 80 Fragen (11 UK × ~7 Fragen)
- Körper des Menschen: 120 Fragen (14 UK × ~8)
- Fortpflanzung: 50 Fragen
- Genetik: 80 Fragen
- Molekulare Genetik: 50 Fragen
- Evolution: 80 Fragen
- Ökologie: 60 Fragen
- Immunbiologie: 40 Fragen
- Weitere Bio-Kapitel: 240 Fragen

**Chemie (600 Fragen):**

- PSE & Atombau: 80 Fragen
- Bindungen: 60 Fragen
- Stöchiometrie: 60 Fragen
- Säure-Base: 80 Fragen
- Redox: 60 Fragen
- Organische Chemie: 100 Fragen
- Biochemie: 80 Fragen
- Weitere: 80 Fragen

**Physik (400 Fragen):**

- Mechanik: 80 Fragen
- Elektrizität: 60 Fragen
- Optik: 50 Fragen
- Wärmelehre: 50 Fragen
- Schwingungen/Wellen: 50 Fragen
- Atomphysik: 40 Fragen
- Weitere: 70 Fragen

**Mathematik (300 Fragen):**

- Algebra: 60 Fragen
- Geometrie: 50 Fragen
- Analysis: 50 Fragen
- Stochastik: 50 Fragen
- Prozent/Dreisatz: 40 Fragen
- Einheiten: 50 Fragen

**TV Fragen (200):**

- 20 Lesetexte × 10 Fragen = 200 Verständnisfragen

**SEK Fragen (200):**

- Emotionen erkennen: 80 Situationen
- Emotionen regulieren: 60 Szenarien
- Soziales Entscheiden: 60 Szenarien

**GESAMT: ~2.500 neue Fragen → Total 2.700+**

### 3.3 Fragen-Qualität:

Jede Frage MUSS haben:

- 4 Antwortoptionen (A-D)
- 1 korrekte Antwort (bei Single-Choice)
- Ausführliche Erklärung (3-5 Sätze) WARUM die Antwort richtig ist
- Erwähnung warum die häufigsten falschen Antworten falsch sind
- Schwierigkeitsgrad (1/2/3)
- Zuordnung zu Kapitel + Unterkapitel

### 3.4 Fragen-Format Beispiel:

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
    'Sie besitzen 70S-Ribosomen',
    'Ihre DNA liegt frei im Cytoplasma',
    'Sie vermehren sich durch Mitose',  // ← FALSCH
    'Sie können Plasmide enthalten'
  ],
  correctAnswer: 2,
  explanation: 'Prokaryoten vermehren sich durch binäre Fission (Zweiteilung), NICHT durch Mitose. Mitose ist ein komplexer Teilungsprozess der Eukaryoten mit Spindelapparat und Chromosomenkondensation. Die binäre Fission ist deutlich einfacher: Die zirkuläre DNA wird repliziert, die Zelle schnürt sich in der Mitte ein. Alle anderen Aussagen sind korrekt.',
  altfrageTag: true,
  tags: ['Zellteilung', 'Prokaryoten', 'Altfrage']
}
```

---

## TEIL 4: KFF ALGORITHMUS-GENERATOREN (Killer-Feature)

### Das ist der GAME-CHANGER. StudyMed hat das, wir brauchen es BESSER.

### 4.1 Zahlenfolgen-Generator

```typescript
function generateZahlenfolge(difficulty: 1 | 2 | 3): ZahlenfolgeTask {
  // Difficulty 1: Einfache Muster (+n, ×n, Fibonacci-ähnlich)
  // Difficulty 2: Verschachtelte Muster (abwechselnd +3/×2, Primzahlen)
  // Difficulty 3: Komplexe Muster (quadratisch, kubisch, mehrere Operationen)

  const patterns = {
    1: [
      (n, i) => n + 3, // +3
      (n, i) => n * 2, // ×2
      (n, i) => [1, 1, 2, 3, 5, 8, 13][i], // Fibonacci
    ],
    2: [
      (n, i) => (i % 2 === 0 ? n + 3 : n * 2), // abwechselnd
      (n, i) => n + primes[i], // +Primzahlen
    ],
    3: [
      (n, i) => (i + 1) * (i + 1), // Quadratzahlen
      (n, i) => (i + 1) * (i + 1) * (i + 1), // Kubikzahlen
    ],
  };

  // Generiere 6 Zahlen, verstecke die letzte
  // Generiere 4 Antwortoptionen (1 richtig + 3 plausible falsche)
}
```

**Ziel:** Unendlich viele Zahlenfolgen auf 3 Schwierigkeitsstufen. Mindestens 15 verschiedene Pattern-Typen.

### 4.2 Gedächtnis & Merkfähigkeit (Allergieausweise)

```typescript
function generateAllergieausweis(): AllergieTask {
  // Pool von 40+ Allergenen: Penicillin, Latex, Nüsse, Pollen, Hausstaubmilbe,
  // Bienengift, Katzenhaar, Nickel, Soja, Weizen, Eier, Milch, Fisch,
  // Schimmelpilze, Gräser, Birke, Erle, Hasel, Ambrosia, Roggen,
  // Codein, ASS, Ibuprofen, Kontrastmittel, Lokalanästhetika...
  // Pool von 40+ Vornamen (österreichisch): Anna, Florian, Maria, Thomas,
  // Katharina, Michael, Elisabeth, Johannes, Sophie, Maximilian...
  // Pool von 40+ Nachnamen: Müller, Huber, Bauer, Wagner, Pichler,
  // Steiner, Moser, Mayer, Hofer, Gruber, Fischer, Weber...
  // Generiere 8 Personen mit je 2-4 Allergien
  // Lernphase: 90 Sekunden zum Einprägen
  // Abfragephase: "Welche Allergie hat [Person]?" mit 4 Optionen
}
```

**Features:**

- Timer für Lernphase (authentisch wie beim MedAT)
- Verschiedene Abfrageformate: "Welche Allergie hat X?", "Wer ist allergisch gegen Y?", "Welche Person hat NICHT Allergie Z?"
- Schwierigkeitsstufen: 4/6/8 Personen mit 2/3/4 Allergien

### 4.3 Wortflüssigkeit-Generator

```typescript
function generateWortfluessigkeit(): WortfluessigkeitTask {
  // Echtes deutsches Wörterbuch (5.000+ Wörter)
  // Wähle ein Wort, mische die Buchstaben
  // Zeige: "IEZNIDM" → Antwort: "MEDIZIN"
  // Frage: "Mit welchem Buchstaben beginnt das Wort?"

  const woerter = [
    "MEDIZIN",
    "ANATOMIE",
    "CHIRURGIE",
    "DIAGNOSE",
    "THERAPIE",
    "PHYSIOLOGIE",
    "PATHOLOGIE",
    "NEUROLOGIE",
    "KARDIOLOGIE",
    "ONKOLOGIE",
    "BIOLOGIE",
    "CHEMIE",
    "PHYSIK",
    "MATHEMATIK",
    "STATISTIK",
    // ... 500+ Wörter aus verschiedenen Kategorien
    // Medizin, Naturwissenschaft, Alltagswörter, Fremdwörter
  ];

  // Schwierigkeit 1: 4-6 Buchstaben, bekannte Wörter
  // Schwierigkeit 2: 7-9 Buchstaben, Fachbegriffe
  // Schwierigkeit 3: 10+ Buchstaben, seltene/Fremdwörter
}
```

### 4.4 Figuren zusammensetzen (VERBESSERT)

```typescript
// Generiere SVG-basierte Puzzleteile
function generateFigurenAufgabe(): FigurenTask {
  // Basiformen: Dreieck, Rechteck, Trapez, Parallelogramm, Kreissegment
  // Generiere 5-8 Puzzleteile als SVGs
  // Zeige 4 mögliche zusammengesetzte Figuren
  // Nur 1 ist aus den gegebenen Teilen korrekt zusammensetzbar
  // Schwierigkeit 1: 3-4 Teile, einfache Formen, keine Rotation
  // Schwierigkeit 2: 5-6 Teile, Rotation erlaubt
  // Schwierigkeit 3: 7-8 Teile, Rotation + Spiegelung
}
```

### 4.5 Implikationen erkennen (ERWEITERT)

```typescript
function generateImplikation(): ImplikationTask {
  // Voraussetzung → Schlussfolgerung
  // Aufgabe: "Ist der Schluss logisch gültig?"

  const templates = [
    // Modus Ponens: Wenn A→B und A, dann B (GÜLTIG)
    // Modus Tollens: Wenn A→B und ¬B, dann ¬A (GÜLTIG)
    // Affirmation des Konsequens: Wenn A→B und B, dann A (UNGÜLTIG!)
    // Negation des Antezedens: Wenn A→B und ¬A, dann ¬B (UNGÜLTIG!)
    // Hypothetischer Syllogismus: A→B und B→C, dann A→C (GÜLTIG)
    // Disjunktiver Syllogismus: A∨B und ¬A, dann B (GÜLTIG)
  ];

  // Pool von 50+ medizinischen/alltäglichen Aussagen
  // z.B.: "Wenn ein Patient Fieber hat, dann hat er eine Infektion"
  // "Wenn es regnet, ist die Straße nass"

  // Generiere Prämissen + Schlussfolgerung
  // Frage: "Ist dieser Schluss ZWINGEND gültig?"
  // Erklärung: Welche logische Form liegt vor
}
```

---

## TEIL 5: TESTSIMULATIONEN (1 → 5+)

### 5.1 Simulationsstruktur (authentisch MedAT 2026):

```typescript
interface TestSimulation {
  id: string;
  name: string; // z.B. "Simulation 1 — Standardschwierigkeit"
  sections: [
    {
      name: "BMS";
      duration: 75; // Minuten
      questions: 94; // Bio 40 + Chemie 24 + Physik 18 + Mathe 12
    },
    {
      name: "TV - Textverständnis";
      duration: 35;
      questions: 12; // 12 Textaufgaben
    },
    {
      name: "KFF - Kognitive Fähigkeiten";
      duration: 60;
      subtests: [
        { name: "Zahlenfolgen"; questions: 10; duration: 12 },
        { name: "Gedächtnis & Merkfähigkeit"; learnPhase: 8; questions: 25; recallDuration: 15 },
        { name: "Figuren zusammensetzen"; questions: 10; duration: 12 },
        { name: "Wortflüssigkeit"; questions: 10; duration: 8 },
        { name: "Implikationen erkennen"; questions: 10; duration: 13 },
      ];
    },
    {
      name: "SEK - Sozial-emotionale Kompetenzen";
      duration: 30;
      subtests: [
        { name: "Emotionen erkennen"; questions: 10; duration: 10 },
        { name: "Emotionen regulieren"; questions: 10; duration: 10 },
        { name: "Soziales Entscheiden"; questions: 10; duration: 10 },
      ];
    },
  ];
  totalDuration: 200; // ~3,5 Stunden
  totalQuestions: 181;
}
```

### 5.2 Erstelle 5 Simulationen mit unterschiedlichen Schwierigkeitsgraden:

- **Simulation 1:** Einstieg (eher leicht)
- **Simulation 2:** Standard (mittlere Schwierigkeit)
- **Simulation 3:** Fortgeschritten (über MedAT-Niveau)
- **Simulation 4:** Schwer (Herausforderung)
- **Simulation 5:** Altfragen-Mix (typische Prüfungsfragen)

### 5.3 Features der Simulation:

- **Authentischer Timer** mit Countdown pro Section
- **Keine Rücknavigation** innerhalb einer Section (wie beim echten MedAT)
- **Pause nur zwischen Sections** (nicht innerhalb)
- **Sofortige Auswertung** nach Abschluss:
  - Punkte pro Section
  - Prozentrang-Schätzung
  - Stärken/Schwächen-Analyse
  - Falsche Fragen mit Erklärungen
  - Zeitverbrauch pro Frage
- **Vergleich mit vorherigen Simulationen** (Fortschritts-Chart)

---

## TEIL 6: SVG-DIAGRAMME OPTIMIEREN

### Regeln für ALLE SVG-Diagramme:

1. **Text NEBEN Elementen** positionieren, nicht AUF ihnen
2. **Leader Lines** (dünne Linien) von Element zum Label
3. **Weißer Hintergrund** hinter Labels: `<rect fill="white" opacity="0.9" rx="4">`
4. **Minimum fontSize="13"** für alle Labels
5. **Font-Weight 600** für Beschriftungen
6. **Responsive:** `viewBox="0 0 600 450"`, `className="w-full max-w-2xl mx-auto"`
7. **Hover-Effekte:** `cursor-pointer hover:opacity-80 transition-opacity`
8. **Klick-Details:** Bei Klick auf Element → Tooltip/Popup mit Kurzinfo

### Überarbeite ALLE vorhandenen SVG-Diagramme nach diesen Regeln.

---

## TEIL 7: KARTEIKARTEN UPGRADE

### 7.1 Mehr Karten (48 → 500+):

Erstelle mindestens 500 Karteikarten verteilt auf alle BMS-Fächer:

- Biologie: 200 Karten
- Chemie: 120 Karten
- Physik: 100 Karten
- Mathematik: 80 Karten

### 7.2 Bessere Bewertung (2-stufig → 4-stufig wie Anki):

Statt nur "Gewusst" / "Nicht gewusst":

- **Nochmal** (< 1 Min) — Karte sofort wiederholen
- **Schwer** (< 10 Min) — Kurzes Intervall
- **Gut** (1 Tag) — Normales Intervall
- **Leicht** (4 Tage) — Längeres Intervall

### 7.3 Karten-Statistiken:

- Gesamtzahl gelernt / zu wiederholen / neue
- Lernstreak (Tage hintereinander)
- Durchschnittliche Erfolgsrate
- Schwierigste Karten (am häufigsten "Nochmal")

---

## TEIL 8: PREMIUM FEATURES (Differenzierung)

### 8.1 Einstufungstest verbessern:

- 30 Fragen aus allen Bereichen (BMS 15, KFF 5, TV 5, SEK 5)
- Erstellt automatisch einen personalisierten Lernplan basierend auf Ergebnissen
- Zeigt: "Du bist auf Level 3/10 in Biologie, Level 7/10 in Chemie..."
- Empfiehlt: "Fokussiere auf Biologie (Die Zelle, Genetik) und Physik (Optik)"

### 8.2 Lernplan-Generator:

```typescript
interface LernplanEntry {
  date: string;
  tasks: {
    type: "kapitel" | "fragen" | "karteikarten" | "simulation" | "kff";
    target: string; // z.B. "Bio: Die Zelle - Prokaryoten vs. Eukaryoten"
    duration: number; // Minuten
    completed: boolean;
  }[];
}
```

- Berechnet Tage bis MedAT (141)
- Verteilt alle Kapitel + Übungen über die verbleibende Zeit
- Berücksichtigt Wiederholungs-Zyklen (Spaced Repetition)
- Zeigt tägliche To-Do-Liste
- Anpassbar (mehr/weniger pro Tag)

### 8.3 Statistik-Dashboard verbessern:

- **Radar-Chart:** Stärken/Schwächen über alle 4 BMS-Fächer + KFF + TV + SEK
- **Trend-Linie:** Punkte über Zeit (aus Simulationen)
- **Prozentrang-Schätzung:** "Du bist besser als ~65% der MedAT-Kandidaten"
- **Heatmap:** Aktivität pro Tag (wie GitHub Contributions)
- **Zeit-Tracking:** Lernzeit pro Tag/Woche

### 8.4 Duell-Modus erweitern:

- Duelle über ALLE Bereiche (nicht nur BMS)
- KFF-Duelle: Wer löst Zahlenfolge schneller?
- Leaderboard: Top 10 der Woche
- XP-System: Punkte für jede Aktivität (Kapitel gelesen, Frage richtig, Duell gewonnen)

---

## TEIL 9: QUALITÄTSSICHERUNG

Nach ALLEN Änderungen prüfe:

```bash
npm run build   # Keine Fehler
npm run dev     # App startet
```

### Checkliste:

- [ ] Karteikarten flippen korrekt (Text lesbar auf Rückseite)
- [ ] BMS-Unterkapitel haben 2+ Abschnitte mit Überschriften
- [ ] Fachfarben sind durchgängig (Grün=Bio, Rot=Chemie, Blau=Physik, Violet=Mathe)
- [ ] Mindestens 2.500 Fragen in der Datenbank
- [ ] KFF-Generatoren funktionieren (Zahlenfolgen, Allergien, Wortflüssigkeit)
- [ ] 5 Testsimulationen mit authentischem Timer
- [ ] SVG-Diagramme: Labels neben Elementen, nicht darauf
- [ ] Karteikarten: 4 Bewertungsstufen, 500+ Karten
- [ ] Einstufungstest generiert Lernplan
- [ ] Statistik-Dashboard mit Radar-Chart
- [ ] Keine Umlaut-Fehler (ae/ue/oe → ä/ü/ö)
- [ ] KEINE TypeScript-Fehler
- [ ] App lädt ohne weiße Seite

---

## REIHENFOLGE DER UMSETZUNG:

1. ⚡ Karteikarten Flip-Bug (5 Min)
2. 📝 BMS Content-Struktur + Fachfarben (30 Min)
3. 📊 Fragen-Datenbank aufbauen (die meiste Zeit — 2.500 Fragen)
4. 🧠 KFF Algorithmus-Generatoren (Zahlenfolgen, Allergien, Wortflüssigkeit, Implikationen)
5. 🖼️ SVG-Diagramme überarbeiten
6. 📋 5 Testsimulationen erstellen
7. 🃏 Karteikarten: 500+ Karten + 4-Stufen-System
8. 📈 Einstufungstest + Lernplan + Statistik
9. ⚔️ Duell-Modus erweitern
10. ✅ Build + Visueller Test

**WICHTIG:** Nach JEDEM Schritt `npm run build` prüfen. Nicht alles auf einmal und dann Fehler suchen!

**KRITISCH:** Die App darf NICHT abstürzen. Wenn ein Teil Probleme macht, überspringe ihn und mach mit dem nächsten weiter. Fixe problematische Teile am Ende.
