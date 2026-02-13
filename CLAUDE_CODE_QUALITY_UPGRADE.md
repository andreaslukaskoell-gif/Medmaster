# CLAUDE CODE — QUALITY UPGRADE PROMPT
## MedMaster Lernplattform — Premium UI & Content Fix

Du bist ein Senior Frontend-Entwickler und UX-Designer. Führe ALLE folgenden Aufgaben durch. Teste nach jeder größeren Änderung mit `npm run build` dass keine Fehler entstehen.

---

## TEIL 1: KARTEIKARTEN FLIP-BUG FIXEN (KRITISCH)

Die Karteikarten-Rückseite zeigt den Text **gespiegelt/rückwärts**. Das ist ein CSS `transform` Bug.

### Fix:
Finde die Flashcard/Karteikarten-Komponente und fixe die CSS 3D-Flip-Animation:

```css
/* Container braucht perspective */
.card-container {
  perspective: 1000px;
}

/* Inner card flippt */
.card-inner {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card-inner.flipped {
  transform: rotateY(180deg);
}

/* BEIDE Seiten brauchen backface-visibility */
.card-front, .card-back {
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
}

/* KRITISCH: Rückseite muss VORHER schon um 180° gedreht sein */
.card-back {
  transform: rotateY(180deg);
}
```

**Der häufigste Fehler:** Die `.card-back` hat KEIN `transform: rotateY(180deg)` als Ausgangszustand. Dadurch wird beim Flip die Rückseite gespiegelt angezeigt.

Wenn Tailwind-Klassen verwendet werden, stelle sicher dass:
- `[backface-visibility:hidden]` auf BEIDEN Seiten ist
- Die Rückseite `[transform:rotateY(180deg)]` als Default hat
- `preserve-3d` auf dem Parent-Container ist

Teste: Öffne Karteikarten → klicke auf Karte → Rückseiten-Text muss normal lesbar sein.

---

## TEIL 2: BMS UNTERKAPITEL — STRUKTURIERTE CONTENT-DARSTELLUNG

### Problem:
Jedes Unterkapitel ist EIN großer Textblock ohne visuelle Gliederung. Das ist überwältigend und nicht lernförderlich.

### Lösung — Jedes Unterkapitel muss diese Struktur haben:

```
┌─────────────────────────────────────────────┐
│ 📖 Lernziele (collapsible, am Anfang)       │
│  • Ziel 1                                    │
│  • Ziel 2                                    │
│  • Ziel 3                                    │
├─────────────────────────────────────────────┤
│                                              │
│ ## Abschnitt 1: Überschrift                  │
│ Fließtext (2-3 Absätze max)                  │
│                                              │
│ ┌─ 💡 Merke ──────────────────────────┐      │
│ │ Wichtiger Fakt als Merksatz          │      │
│ └─────────────────────────────────────┘      │
│                                              │
│ ## Abschnitt 2: Überschrift                  │
│ Fließtext (2-3 Absätze max)                  │
│                                              │
│ ┌─ 📊 Diagramm ──────────────────────┐      │
│ │ SVG Grafik hier                      │      │
│ └─────────────────────────────────────┘      │
│                                              │
│ ## Abschnitt 3: Überschrift                  │
│ Fließtext (2-3 Absätze max)                  │
│                                              │
│ ┌─ 📋 Tabelle ───────────────────────┐      │
│ │ Vergleichstabelle wenn relevant      │      │
│ └─────────────────────────────────────┘      │
│                                              │
│ ┌─ 🎯 Altfragen-Klassiker ───────────┐      │
│ │ Frage + aufklappbare Antwort         │      │
│ └─────────────────────────────────────┘      │
│                                              │
│ ┌─ 🏥 Klinischer Bezug ─────────────┐       │
│ │ Praxisrelevanz für Medizinstudium    │      │
│ └─────────────────────────────────────┘      │
│                                              │
│ ✏️ Selbsttest (3 MC-Fragen)                  │
│                                              │
│ [← Zurück] [Als gelernt markieren] [Weiter →]│
└─────────────────────────────────────────────┘
```

### Implementierung:

1. **Erstelle eine neue Komponente** `SubchapterContent.tsx` die den Content strukturiert rendert:

```typescript
interface ContentSection {
  heading: string;       // z.B. "Grundlagen", "Aufbau", "Funktion"
  text: string;          // 2-3 Absätze Fließtext
  merksatz?: string;     // Optionaler Merksatz nach dem Abschnitt
  table?: {              // Optionale Vergleichstabelle
    headers: string[];
    rows: string[][];
  };
}

interface SubchapterData {
  id: string;
  title: string;
  lernziele: string[];              // 3-5 Lernziele
  sections: ContentSection[];       // 2-4 strukturierte Abschnitte
  diagram?: React.ComponentType;    // SVG-Diagramm Komponente
  altfrage?: { question: string; answer: string };
  klinischerBezug?: string;
  selfTest: QuizQuestion[];         // 3 MC-Fragen
}
```

2. **Teile den bestehenden Fließtext in 2-4 Abschnitte** mit eigenen Überschriften:
   - Statt einem Block "Die Tierzelle ist eine eukaryotische Zelle..." (500+ Wörter)
   - Mache daraus:
     - **"Der Zellkern"** — 2 Absätze über Nukleus, Chromatin, Nukleolus
     - **"Membranumhüllte Organellen"** — 2 Absätze über Mitochondrien, ER, Golgi
     - **"Weitere Zellbestandteile"** — 2 Absätze über Lysosomen, Peroxisomen, Zytoskelett
   - JEDER Abschnitt mit eigenem `<h3>` oder gestylter Überschrift

3. **Visuelles Design der Abschnitte:**
   - Überschriften: `text-lg font-semibold text-gray-800` mit farbiger Akzentlinie links (wie ein `border-l-4 border-teal-500 pl-4`)
   - Absätze: `text-gray-700 leading-relaxed` mit `mb-4` Abstand
   - Merksätze: Gelber Kasten mit `bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg`
   - Tabellen: Zebra-Striping mit `even:bg-gray-50`, runde Ecken
   - Zwischen Abschnitten: `<hr className="my-8 border-gray-200" />` oder `space-y-8`

4. **Wende dies auf ALLE 159 Unterkapitel an.** Jedes muss mindestens 2 Abschnitte mit Überschriften haben. Der Content bleibt derselbe, wird nur besser strukturiert.

### Beispiel-Transformation für "Prokaryoten vs. Eukaryoten":

**VORHER:** Ein Textblock mit 3 langen Absätzen

**NACHHER:**
```
📖 Lernziele
- Unterschiede zwischen Prokaryoten und Eukaryoten benennen
- Ribosomentypen (70S vs. 80S) zuordnen können
- Bedeutung der Kompartimentierung erklären

## Grundlegende Unterschiede
[Absatz 1 über Zellkern, DNA-Organisation, Größe]

💡 Merke: 70S = Prokaryoten (siebzig → primitiver), 80S = Eukaryoten

## Ribosomen und Genomorganisation
[Absatz 2 über 70S/80S, Plasmide, Chromosomen]

## Stoffwechsel und Zellteilung
[Absatz 3 über Metabolismus, binäre Fission, Zytoskelett]

📊 [Vergleichstabelle Prokaryoten vs. Eukaryoten]
| Merkmal | Prokaryoten | Eukaryoten |
|---------|------------|------------|
| Zellkern | Nein (Nukleoid) | Ja (membranumhüllt) |
| Größe | 0,1-10 µm | 10-100 µm |
| Ribosomen | 70S | 80S |
| DNA | zirkulär | linear |

🎯 Altfragen-Klassiker: "Welche Ribosomen kommen bei Prokaryoten vor?"
🏥 Klinischer Bezug: Antibiotika und 70S-Ribosomen
✏️ Selbsttest (3 Fragen)
```

---

## TEIL 3: SVG-DIAGRAMME OPTIMIEREN

### Probleme:
- Text-Labels überlappen mit Grafik-Elementen
- Schrift teilweise zu klein oder schlecht positioniert
- Labels sitzen direkt AUF den Organellen statt daneben mit Linien

### Fix-Anweisungen für ALLE SVG-Diagramm-Komponenten:

1. **Text AUSSERHALB der Grafik-Elemente positionieren:**
   - Labels sollen NEBEN den Elementen stehen, verbunden mit dünnen Linien (leader lines)
   - Verwende `<line>` Elemente von der Organelle zum Label
   - Labels bekommen einen weißen Hintergrund: `<rect fill="white" rx="4">` hinter dem `<text>`

2. **Schriftgröße und Lesbarkeit:**
   - Minimum `fontSize="13"` für alle Labels
   - `fontWeight="600"` für wichtige Beschriftungen
   - `fill="#1f2937"` (dark gray) für gute Lesbarkeit
   - Weißer Halo/Schatten hinter Text: `<text stroke="white" strokeWidth="3" paintOrder="stroke">`

3. **Bessere Farben und Kontraste:**
   - Organellen: Satte, aber nicht zu grelle Farben mit `opacity="0.8"`
   - Umrandungen: `stroke="#374151" strokeWidth="1.5"`
   - Hintergrund: Leichter Gradient statt flat color

4. **Responsive SVG:**
   - `viewBox` richtig setzen (z.B. `viewBox="0 0 600 500"`)
   - `width="100%" height="auto"` oder max-width begrenzen
   - Nicht breiter als `max-w-2xl mx-auto`

5. **Interaktivität verbessern:**
   - Hover-Effekte auf Organellen: `className="cursor-pointer hover:opacity-80 transition-opacity"`
   - Tooltip oder Popup bei Klick mit kurzer Erklärung
   - Aktive Organelle hervorheben mit `stroke-width` Änderung

### Überarbeite speziell diese SVG-Diagramme:
- **Tierzelle** (`AnimalCellDiagram` o.ä.): Labels mit Leader Lines, Text nicht auf Organellen
- **Pflanzenzelle**: Gleiche Verbesserungen
- **DNA-Struktur**: Klare Beschriftung der Basen, Zucker-Phosphat-Rückgrat
- **Mitose/Meiose**: Phasen klar beschriften
- **Atom-Aufbau**: Schalen klar nummerieren
- **Alle weiteren**: Gleiche Prinzipien anwenden

---

## TEIL 4: PREMIUM DESIGN-UPGRADE

### 4.1 Farbkonzept pro Fach (wie StudyMed)

Jedes BMS-Fach braucht eine eigene Akzentfarbe die durchgängig verwendet wird:

```typescript
const SUBJECT_COLORS = {
  biologie: {
    primary: '#059669',    // Emerald-600
    light: '#d1fae5',      // Emerald-100
    badge: 'bg-emerald-100 text-emerald-700',
    border: 'border-emerald-500',
    gradient: 'from-emerald-500 to-emerald-600',
  },
  chemie: {
    primary: '#dc2626',    // Red-600
    light: '#fee2e2',      // Red-100
    badge: 'bg-red-100 text-red-700',
    border: 'border-red-500',
    gradient: 'from-red-500 to-red-600',
  },
  physik: {
    primary: '#2563eb',    // Blue-600
    light: '#dbeafe',      // Blue-100
    badge: 'bg-blue-100 text-blue-700',
    border: 'border-blue-500',
    gradient: 'from-blue-500 to-blue-600',
  },
  mathematik: {
    primary: '#7c3aed',    // Violet-600
    light: '#ede9fe',      // Violet-100
    badge: 'bg-violet-100 text-violet-700',
    border: 'border-violet-500',
    gradient: 'from-violet-500 to-violet-600',
  },
} as const;
```

**Anwenden auf:**
- BMS Kapitel-Karten: Farbiger linker Rand oder Top-Streifen
- Unterkapitel-Überschriften: Farbige Akzentlinie
- Progress-Bars: In Fachfarbe
- Badges/Tags: Farbcodiert
- SVG-Diagramme: Farblich zum Fach passend

### 4.2 Typografie aufwerten

```css
/* Kapitel-Überschriften */
.chapter-title {
  @apply text-2xl font-bold text-gray-900 tracking-tight;
}

/* Unterkapitel-Überschriften */
.subchapter-title {
  @apply text-xl font-semibold text-gray-800;
}

/* Abschnitt-Überschriften im Content */
.section-heading {
  @apply text-lg font-semibold text-gray-800 border-l-4 pl-3 mb-3;
  /* border-color wird durch Fachfarbe bestimmt */
}

/* Fließtext */
.content-text {
  @apply text-base text-gray-700 leading-relaxed;
}

/* Merksätze */
.merksatz {
  @apply bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg text-amber-900;
}

/* Klinischer Bezug */
.clinical-note {
  @apply bg-rose-50 border-l-4 border-rose-400 p-4 rounded-r-lg text-rose-900;
}

/* Altfragen */
.altfrage {
  @apply bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg text-orange-900;
}
```

### 4.3 Karteikarten Premium Design

Die Karteikarten-Decks und Lern-Ansicht upgraden:

**Deck-Auswahl:**
- Cards mit subtlem Schatten: `shadow-sm hover:shadow-md transition-shadow`
- Farbiger Top-Streifen je nach Fach
- Fortschrittsanzeige als Mini-Bar im Card
- Anzahl neue/wiederholte Karten anzeigen

**Lern-Ansicht:**
- Größere Karte mit mehr Padding
- Schönere Flip-Animation (0.5s ease-in-out)
- Frage-Seite: Große, zentrierte Schrift
- Antwort-Seite: Strukturiert mit Erklärung
- Bewertungs-Buttons: Mehr Abstufungen (Nochmal / Schwer / Gut / Leicht) wie bei Anki
- Tastatur-Shortcuts deutlicher anzeigen

### 4.4 Allgemeine UI-Verbesserungen

1. **Smooth Scrolling:** `scroll-behavior: smooth` auf html
2. **Loading States:** Skeleton Screens beim Laden von Kapiteln
3. **Breadcrumbs:** Schon vorhanden, aber mit Fachfarbe hinterlegen
4. **Fortschritts-Ringe:** Statt nur Progress Bars auch kleine Ringe verwenden
5. **Micro-Animations:** Subtile `transition-all duration-200` auf interaktive Elemente
6. **Hover-States:** Alle klickbaren Elemente mit deutlichem Hover
7. **Focus-States:** Tastatur-Navigation mit sichtbarem Focus-Ring

---

## TEIL 5: CONTENT-ABSCHNITTE FÜR TOP-5 KAPITEL (Beispiel)

Transformiere als Beweis mindestens diese 5 Unterkapitel vollständig in das neue Format mit Abschnitten:

### 5.1 "Prokaryoten vs. Eukaryoten" (Biologie > Die Zelle)
Teile auf in:
- **Grundlegender Unterschied** (Zellkern, Größe, Kompartimentierung)
- **Genomorganisation** (DNA-Struktur, Chromosomen, Plasmide, Ribosomen 70S/80S)
- **Zellteilung und Stoffwechsel** (Binäre Fission vs. Mitose, metabolische Vielseitigkeit)
+ Vergleichstabelle Prokaryoten vs. Eukaryoten (6+ Merkmale)

### 5.2 "Aufbau der Tierzelle" (Biologie > Die Zelle)
Teile auf in:
- **Zellkern und Erbinformation** (Nukleus, Chromatin, Nukleolus, Kernporen)
- **Energieversorgung und Synthese** (Mitochondrien, ER, Golgi)
- **Verdauung und Recycling** (Lysosomen, Peroxisomen, Proteasomen)
- **Zytoskelett und Zellkontakte** (Mikrofilamente, Intermediärfilamente, Mikrotubuli, Desmosomen)
+ Tabelle: Organellen und ihre Funktionen

### 5.3 "Atombau" (Chemie > Atombau)
Teile auf in:
- **Subatomare Teilchen** (Protonen, Neutronen, Elektronen, Ladungen, Massen)
- **Schalenmodell und Orbitale** (Bohr, Quantenzahlen, s/p/d/f)
- **Elektronenkonfiguration** (Aufbauprinzip, Hund, Pauli)
+ Tabelle: Quantenzahlen und ihre Bedeutung

### 5.4 "Mechanik: Kraft und Energie" (Physik)
Teile auf in:
- **Newton'sche Gesetze** (1., 2., 3. Gesetz mit Formeln)
- **Arbeit, Energie und Leistung** (W=F·s, E_kin, E_pot, P=W/t)
- **Impuls und Stoßprozesse** (elastisch, inelastisch)
+ Formelübersicht als Tabelle

### 5.5 "Prozentrechnung und Dreisatz" (Mathematik)
Teile auf in:
- **Grundwert, Prozentwert, Prozentsatz** (Formeln, Eselsbrücken)
- **Dreisatz und Verhältnisse** (proportional, antiproportional)
- **Typische MedAT-Aufgaben** (Konzentrationen, Verdünnungen)
+ Beispielrechnungen in Boxen

---

## TEIL 6: QUALITÄTSSICHERUNG

Nach allen Änderungen:

1. `npm run build` — KEINE Fehler erlaubt
2. `npm run dev` — App muss starten
3. Prüfe visuell:
   - [ ] Karteikarten flippen korrekt (Text lesbar auf Rückseite)
   - [ ] BMS Unterkapitel haben 2+ Abschnitte mit Überschriften
   - [ ] SVG-Diagramme: Text nicht auf Grafik-Elementen
   - [ ] Fachfarben sind konsistent angewendet
   - [ ] Merksätze, Altfragen, Klinischer Bezug sind farblich unterscheidbar
   - [ ] Keine Umlaute-Fehler (ae/ue/oe statt ä/ü/ö)

---

## REIHENFOLGE DER UMSETZUNG:

1. ⚡ Karteikarten Flip-Bug fixen (5 Minuten, kritisch)
2. 🎨 SubchapterContent Komponente erstellen
3. 📝 Top-5 Unterkapitel umstrukturieren (als Template für den Rest)
4. 🖼️ SVG-Diagramme überarbeiten (Text-Positionierung, Leader Lines)
5. 🎨 Farbkonzept implementieren
6. 💎 Premium UI-Tweaks
7. ✅ Build testen und visuell prüfen

**WICHTIG:** Nach JEDEM Schritt `npm run build` prüfen! Nicht alles auf einmal machen und dann Fehler suchen.
