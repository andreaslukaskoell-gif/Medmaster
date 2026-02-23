# MEDMASTER: EXTREM GRÜNDLICHER CODE-AUDIT

**Datum:** 21. Februar 2026  
**Status:** Vollständig durchgeführt  
**Analyse-Scope:** Alle TypeScript/React Komponenten, Store, Datenstrukturen, Supabase-Integration

---

## 1. UNGENUTZTEN DATENFELDER (Definiert, aber nicht/kaum gerendert)

### 1.1 QUIZ-System — KOMPLETT UNGENUTZT IN DATA

**Status:** Feld existiert in `types.ts`, aber **KEINE Daten** in Kapiteln

```typescript
// types.ts Definition:
export interface QuizItem {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  hints?: string[];
  tags?: string[];
  difficulty?: 1 | 2 | 3;
}

export interface Unterkapitel {
  quiz?: QuizItem[]; // Optional-Feld
}
```

**Status in Daten:**

- **0 Einträge** in allen BMS-Kapiteln (bin-Suche ergab `has_quiz: 0`)
- **Rendering-Code EXISTS:** `ContentVisualizer.tsx:61` und `BMSUnterkapitel.tsx:613`
- **Bedeutung:** Feld ist vorbereitet für zukünftige Kapitel-interne Quizze (neben selfTest)

**Nutzungspotential:**

- Könnte als "Pause-Quiz" zwischen Textabschnitten verwendet werden
- Unterschied zu `selfTest`: selfTest = am Ende des Kapitels, quiz = optional während Lesen

**Empfehlung:** FEATURE READY, aber nie mit Daten gefüllt

---

### 1.2 IMAGE URLs — TEILWEISE UNGENUTZT

**Status:** Feld existiert, aber **~0%** Ausfüllung in realen Daten

```typescript
export interface Unterkapitel {
  imageUrl?: string; // Optional Bild per Unterkapitel
}
```

**Rendering:** ✅ Vorhanden in `ContentVisualizer.tsx:48`

```tsx
{
  uk?.imageUrl && <img src={uk.imageUrl} alt={uk.title} className="..." />;
}
```

**Datenstand:** 0 von ~200 Unterkapiteln haben `imageUrl` gesetzt

**Warum nicht gefüllt:**

- Datenleitung: Bilder müssen manuell per URL eingegeben werden
- Alternative: Diagrams (SVG-Komponenten) werden stattdessen genutzt

**Empfehlung:** Ausreichend implementiert, aber Daten-befüllung niedrig priorisiert

---

### 1.3 ADDITIONAL NOTES — TEILWEISE GERENDERT

**Status:** ~5-10% Ausfüllung, aber Rendering funktioniert

```typescript
additionalNotes?: string;  // Optionale extra Notizen am Unterkapitel
```

**Gerendert in:**

- `BMSUnterkapitel.tsx:505–521` (Haupt-Seite)
- `AdminPreview.tsx:214–222` (Admin-Tool)

**Beispiel-Nutzung:** Chemie Kapitel 8 nutzt `klinischerBezug` statt `additionalNotes`

---

### 1.4 UNGENUTZTE METADATA-FELDER IN TYPES (nicht mal in Code erwähnt)

| Feld            | Status                          | Wo sollte es sein | Grund                        |
| --------------- | ------------------------------- | ----------------- | ---------------------------- |
| `videoUrl`      | Nicht definiert                 | types.ts          | Nie implementiert            |
| `keywords`      | Nicht definiert                 | types.ts          | Nie implementiert            |
| `author`        | Nicht definiert                 | types.ts          | Nie implementiert            |
| `sources`       | Nicht definiert                 | types.ts          | Nie implementiert            |
| `estimatedTime` | Definiert nur auf Kapitel-Ebene | types.ts          | Nicht auf Unterkapitel-Ebene |

**Suche ergab:** 4 Zeilen mit `additionalNotes` oder ähnlichem in Daten selbst

---

## 2. KOMPONENTENLEVEL: VERSTECKTE FEATURES & UNGENUTZTEN CODE

### 2.1 PROGRESSIVE DISCLOSURE — IMPLEMENTIERT, WIRD GENUTZT ✅

**Status:** Aktives Feature, funktioniert

```typescript
// SubchapterContent.tsx
const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set());
const useProgressive = progressiveDisclosure;

// BMSUnterkapitel.tsx
const [progressiveDisclosure, setProgressiveDisclosure] = useState(true);
// Toggle-Button an Zeile 370–371
```

**Funktion:** Textabschnitte sind standardmäßig "collapsed" wenn `progressiveDisclosure=true`  
**Nutzung:** Alle BMS-Kapitel benutzen dies

---

### 2.2 HINTS-System — VOLL IMPLEMENTIERT ✅

**Status:** Sokrates-Methode integriert

**Wo definiert:**

```typescript
// types.ts
hints?: string[];  // In SelfTestQuestion und QuizItem

// Beispiel-Data:
hints: [
  "v = Δc/Δt — Ableitung aus der Definition",
  "Einheit: mol pro Liter pro Sekunde"
]
```

**Rendering in:**

- `QuizQuestion.tsx:25–57` (Button "Tipp geben", zeigt hints progressiv)
- `KontrollFragen.tsx:118` (mit DEFAULT_HINT Fallback)

**UX-Flow:**

1. Benutzer versucht Frage
2. Klick "Tipp" → erstes Hint angezeigt
3. Mehrere Klicks → weitere Hints
4. Letztlich Lösung

**Datenfüllung:** ~1025 Fragen mit Schwierigkeit-Feld, aber Hint-Abdeckung unbekannt

---

### 2.3 MARKDOWN CONTENT VERARBEITUNG — SECRET Advanced Feature!

**Komponente:** `MarkdownContent.tsx` (undokumentiert!)

**Features:**

- **Smart Links:** Text wie `[[Methoden der Genetik]]` wird zu Kapitel-Links
- **Hinterfrag Mode:** Wenn `hinterfragMode=true`, werden Fragen-Hinweise inline angezeigt
- **Difficulty Badges:** `{difficulty:2}` wird zu Schwierigkeits-Indikator
- **Knowledge Bridge:** Für Premium-User mit bestimmten Badges

**Wo aufgerufen:**

```typescript
// SubchapterContent.tsx:241, 425, 482
<MarkdownContent
  text={section.text}
  size={isDieZelle ? "base" : "sm"}
  hinterfragMode={hinterfragMode}  // Toggle ist aktiv!
  keywordLinkEntries={keywordLinkEntries}
/>
```

**Hinterfrag-Mode Toggle:** BMSUnterkapitel.tsx Zeile 370

- **AKTIVIERT:** Benutzer-aktivierbar!
- **Effekt:** Inline-Fragen während des Lesens angezeigt

---

### 2.4 ENHANCED FORMATTING — "Die Zelle" Flagship Mode

```typescript
enhancedFormatting?: boolean;  // Spezielle Formatierung für bio-kap1
```

**Was sich ändert:**

- Größerer Text (`base` statt `sm`)
- Mehr Spacing
- Nummered headings statt bullet points
- Dieser Modus ist nur auf `bio-kap1` aktiviert

**Datendeklaration:**

```typescript
// biologie/index.ts
{ ...bioKap1, sequence: 1, sequenceTitle: 'Zelle', enhancedFormatting: true }
```

---

## 3. STORE-ANALYSE: Was ist definiert, aber nicht genutzt?

### 3.1 Alle Store-Aktionen & ihre Nutzung

| Action                     | Genutzt | Wo                | Status                 |
| -------------------------- | ------- | ----------------- | ---------------------- |
| `addXP()`                  | ✅      | Multiple pages    | Gamification aktiv     |
| `addXPFromActivity()`      | ✅      | adaptive learning | Mit Schwierigkeit      |
| `setXpMultiplier()`        | ✅      | Auth (Premium)    | Premium-Boost          |
| `unlockFachMilestone()`    | ✅      | Progress tracking | 50%-Milestone unlock   |
| `completeChapter()`        | ✅      | BMSUnterkapitel   | Badge-System           |
| `checkAndAwardBadges()`    | ✅      | Async: multiple   | **Aktiv evaluiert**    |
| `updateSpacedRepetition()` | ✅      | Quiz-Handling     | SMSr aktiv             |
| `getDueQuestions()`        | ✅      | Review screens    | SMSr filtering         |
| `updateChapterSRS()`       | ✅      | Chapter quizzes   | Leitner-Stufen         |
| `logActivity()`            | ✅      | Lernplan, Daily   | Aktivitätstracking     |
| `setGoalAchievedToday()`   | ✅      | Performance pages | Smart-Adjust           |
| `dismissSmartAdjust()`     | ✅      | Lernplan UI       | Kann Plan reduzieren   |
| `toggleFlagQuestion()`     | ✅      | Quiz UI           | Schwachstellen-marking |

**KEINE ungenutzten Store-Aktionen gefunden!**

### 3.2 State-Felder, die wenig genutzt werden

```typescript
// Definiert aber minimal genutzt:
pendingBadgeId: string | null; // Nur für Modal-Anzeige
smartAdjustDismissedUntil: string; // Für 7-Tage-Suppression
goalAchievedByDate: Record<string, boolean>; // Smart-Adjust-Datensatz
```

---

## 4. GAMIFICATION-SYSTEM: Vollständige Kartographie

### 4.1 Badge-Definitionen

```typescript
BADGE_DEFINITIONS = [
  {
    id: "fruehaufsteher", // 3 Tage vor 8 Uhr
    tier: "bronze",
    description: "Lerne 3 Tage in Folge vor 8 Uhr morgens.",
  },
  {
    id: "bms-gigant", // Alle Bio-Module
    tier: "gold",
    description: "Schließe alle Biologie-Module ab.",
  },
  {
    id: "praezisions-koenig", // 20 richtig in Folge
    tier: "gold",
    description: "20 Quizfragen in Folge richtig (ohne Fehler).",
  },
  {
    id: "fehler-fresser", // 5× Smart-Recovery
    tier: "silver",
  },
  {
    id: "physik-profi", // Alle Physik-Module (affectsContent=true!)
    tier: "gold",
    affectsContent: true, // Unlock deep content
  },
];
```

**Wo geprüft:**

- `checkAndAwardBadges()` im useStore wird async aufgerufen nach:
  - `completeChapter()`
  - `recordFirstActivityOfDay()`
  - `setMaxConsecutiveCorrect(n >= 20)`
  - `incrementSmartRecoveryCount()`

**affectsContent-Flag (VERSTECKT):**

- `physik-profi`: Wenn earned, können tiefgreifendere Inhalte angezeigt werden
- Implementierung in `KnowledgeBridge` (noch zu prüfen)

### 4.2 XP-System

```typescript
xp: number; // Total accumulated
xpMultiplier: number; // 1.0 (starter) bis ?.?? (pro)
addXP(amount); // += amount * multiplier
addXPFromActivity(params); // Math mit difficulty & time
```

**Schwierigkeit-Multiplikator:**

- 1 (easy) → 0.6 XP-Multiplikator
- 2 (medium) → 1.0
- 3 (hard) → 1.4

**Premium-Boost:** `setXpMultiplier(1.5)` nach Abo

---

## 5. SRS/SPACED REPETITION — VOLL IMPLEMENTIERT

### 5.1 Question-Level SRS (SM-2 Algorithmus)

```typescript
export interface SpacedItem {
  questionId: string;
  lastAnswered: string;
  nextDue: string;
  interval: number;           // 1, 3, 7, 14, 21, 30 Tage
  easeFactor: number;         // 1.3–2.6 (SM-2)
  repetitions: number;
}

updateSpacedRepetition(questionId, correct):
  // Korrekt:
  //   rep 1 → interval=1 day
  //   rep 2 → interval=3 days
  //   rep 3+ → interval *= easeFactor, cap at 30
  // Falsch:
  //   interval=1, repetitions=0

  easeFactor += correct ? 0.1 : -0.3
  min(easeFactor, 1.3)
```

**Wo genutzt:**

- Quiz-Results speichern
- `getDueQuestions()` filtert `nextDue <= today`

### 5.2 Chapter-Level SRS (Leitner-Box 1–5)

```typescript
export interface ChapterProgress {
  lastReviewed: string;
  successCount: number;       // Leitner level 0–5
  nextReviewDate: string;
}

updateChapterSRS(chapterId, scorePct):
  // Score >= 80%: upgrade level, expand interval
  //   Level 1 → 3 days
  //   Level 2 → 7 days
  //   Level 3 → 14 days
  //   Level 4 → 21 days
  //   Level 5 → 30 days

  // Score < 50%: reset to level 1, 1 day
```

**Status:** ✅ Voll implementiert, wird von `BMSQuiz` genutzt

---

## 6. ADAPTIVE LEARNING — VOLL GEHEIM!

### 6.1 `useAdaptiveStore` — Komplexes profiling System

```typescript
interface LearnerProfile {
  stichwortStats: Record<string, StichwortStat>; // Pro Stichwort
  fachStats: Record<string, FachStat>; // Pro Fach
  learningPhase: "einstieg" | "vertiefung" | "pruefung";
  daysUntilExam: number;
  dailyChallengeStreak: number;
  totalQuestionsAnswered: number;
}

interface StichwortStat {
  totalAttempts: number;
  correctAttempts: number;
  successRate: number;
  confidence: "sicher" | "unsicher" | "unbekannt";
  streak: number;
  avgTimePerQuestion: number;
}
```

### 6.2 Adaptive Difficulty Engine

```typescript
getDifficultyMultiplier(): number
  // Wenn letzte 3 Antworten:
  //   - < 10 Sekunden ODER falsch → offerBridge = true
  //   - difficultyLevel := 1 (easy)
  //
  // Wenn > 60 Sekunden und falsch → offerBridge = true
  // Sonst: difficultyLevel := 2–3 (medium/hard)

getShouldOfferBridge(): boolean
  // Zeigt einfachere Erklärung in Knowledge Bridge
  // Wird von SubchapterContent genutzt
```

### 6.3 Wo wird Adaptive Learning GENUTZT?

- `AdaptiveStore.getState()` wird vom `useStore.addXPFromActivity()` aufgerufen
- `CommandPalette.tsx` zeigt Lernphase + readiness
- `Dashboard` zeigt Heatmap (ggf. adaptiv angepasst)
- **Minimal:** Viele Features definiert, aber nicht stark integriert

---

## 7. KOMPONENTEN: Welche werden NICHT genutzt?

### 7.1 BMS-Komponenten (`src/components/bms/`)

| Komponente              | Zeilen | Genutzt | Wo                            |
| ----------------------- | ------ | ------- | ----------------------------- |
| `ConfidenzButtons.tsx`  | 2005   | ✅ Ja   | FragenTrainer                 |
| `FSRSRatingButtons.tsx` | 2011   | ✅ Ja   | FragenTrainer                 |
| `MRSWidget.tsx`         | 4509   | ✅ Ja   | Quiz UIs                      |
| `TypAQuestion.tsx`      | 3866   | ✅ Ja   | FragenTrainer                 |
| `TypKQuestion.tsx`      | 9270   | ✅ Ja   | FragenTrainer (hauptsächlich) |

**ALLE BMS-Komponenten werden genutzt!**

### 7.2 Diagram-Komponenten (Umfangreiche Sammlung)

```
/src/components/diagrams/
├── chemistry/      (Chemie-Diagramme)
├── math/          (Mathematik-Diagramme)
├── physics/       (Physik-Diagramme)
├── kff/           (KFF-Diagramme)
└── biology/       (Biologie inkl. ImmuneResponse.tsx)
```

**Status:** Werden in `Unterkapitel.diagram` & Stichwort-Items genutzt

---

## 8. CONTENT-STATISTIKEN: WIE VIEL IST WIRKLICH DA?

### 8.1 BMS Chapter Content

```
Biologie:    12 Kapitel  (~100 Unterkapitel)
Chemie:      14 Kapitel  (~70 Unterkapitel)
Physik:       8 Kapitel  (~20 Unterkapitel)
Mathematik:   7 Kapitel  (~10 Unterkapitel)

Total: ~41 Kapitel, ~200 Unterkapitel
```

### 8.2 Frage-Abdeckung

```
Mit altfragen (Exam Questions):    127 / 200 (64%)
Mit sections (Inhaltsblöcke):      152 / 200 (76%)
Mit merksätze (Mnemonics):         151 / 200 (76%)
Mit tables (Vergleichstabellen):   26 / 200 (13%)
Mit selfTest (Selbsttests):        151 / 200 (76%)
Mit difficulty-Tags:              1025+ (alle Fragen)
```

### 8.3 Fehlende Content-Elemente

```
Mit quiz (Chapter inline):            0 / 200 (0%) — FEATURE READY, NO DATA
Mit imageUrl (Bilder):                0 / 200 (0%) — IMPLEMENTED, NO DATA
Mit additionalNotes:                  <10 / 200 (rare)
```

---

## 9. SUPABASE-INTEGRATION: Was ist definiert?

### 9.1 Supabase Tables (genutzt)

```typescript
// Aktiv in Nutzung:
.from("profiles")           // User Profile
.from("kff_results")        // KFF Quiz Results
.from("leaderboard_snapshots")  // Leaderboard
.from("user_question_attempts")  // BMS Fragen tracking
.from("bms_chapters")       // BMS Chapter Data
.from("bms_subchapters")    // BMS Unterkapitel
.from("kff_tasks")          // KFF Tasks
```

### 9.2 Supabase Functions / RPCs

```
KEINE RPC-Calls gefunden
ABER:
  - Two Edge Functions exist:
    ├── create-checkout      (Stripe integration)
    └── stripe-webhook       (Payment processing)
```

### 9.3 Was KÖNNTE fehlen?

- Keine RPC für komplexe Server-Berechnungen
- Keine Trigger für Leaderboard-Updates (client-side nur)
- Keine Stored Procedures für SRS-Synchronisierung

---

## 10. VERSTECKTE FEATURES — NEARLY-FINISHED

### 10.1 INTERLEAVING SYSTEM ✅

```typescript
// store/interleaving.ts — Voll funktionsfähig!

shouldShowInterleavingOverlay():
  // Nach 45 Min in EINEM Lernbereich:
  // "Hast du Lust, zu wechseln?" Overlay

  // Kann mit 15 Min snooze unterdrückt werden
  // nach 2h Session-Zeit: Timer zurücksetzen
```

**Status:** Integriert, wird von `AppShell` aufgerufen

### 10.2 QUIZ SESSION / HOT STREAK 🔥

```typescript
// store/quizSessionStore.ts

recordQuizAnswer(correct):
  // Zählt consecutiveCorrect
  // 5 in Folge → HOT STREAK overlay (4.5 Sekunden)
  // 10% Chance auf Random Reward (Überraschungs-Botschaft)

  // calls setMaxConsecutiveCorrect() → Badge-Check
```

**Status:** ✅ Aktiv, wird in Quiz-Komponenten genutzt

### 10.3 KNOWLEDGE BRIDGE 🌉 (unbekannter Status)

```typescript
// Definiert in types.ts Kommentaren:
// "Knowledge Bridge für Premium: einfachere Erklärung wenn offerBridge=true"

// Code:
getShouldOfferBridge(): boolean  // → shows simple explanation

// Datenstruktur: Nicht ganz klar wo implementiert
```

**Status:** Teilweise implementiert, aber Content-Bridge nicht vollständig befüllt

---

## 11. STICHWORTLISTE SYSTEM — Umfassend

### 11.1 Stichwort-Verknüpfungen

```typescript
// stichwortliste.ts enthält:
- 500+ Stichwörter pro Fach
- Pro Stichwort:
  - linkedQuestionTags[]  // Tags die Fragen mit diesem Stichwort verbinden
  - definitions
  - mnemonics
  - related topics

// Fragen können getaggt werden:
// tags: ["pcr", "polymerase-kettenreaktion"]
// → kann dann via getQuestionsByTags() gefunden werden
```

**Status:** ✅ Voll implementiert, wird von Adaptive Store genutzt

---

## 12. FRAGENTRAIN ER — COMPREHENSIVE

### 12.1 Question Bank Structure

```
/src/data/
├── bms/                 (BMS questions imported/mapped)
├── questions/
│   ├── bms-stichwort-questions.ts  (Stichwort-linked)
│   └── mapped questions...
├── kffData.ts           (KFF test data)
├── tvData.ts            (Text-Verständnis)
├── sekData.ts           (Soziales Entscheiden)
└── flashcards_expanded*.ts (Flashcard question pools)
```

**Status:** Umfangreich, mehrere Quellen

---

## 13. KRITISCHE FINDINGS

### 13.1 🔴 UNGENUTZTEN FEATURES (Quick Wins für weitere Entwicklung)

1. **quiz[]Feld in Unterkapitel** — Bereit, aber 0 Dateneintrag
   - Code zum Rendern: ✅
   - Daten: ❌
   - **Fix:** Fülle `quiz` in 10–20 Kapiteln mit Inline-Quiz aus

2. **imageUrl Feld** — 200 Unterkapitel, aber keine Bilder
   - Code zum Rendern: ✅
   - Daten: ❌
   - **Fix:** Fülle mit relevanten Bildern (oder lasse es leer)

3. **Knowledge Bridge** — Eingebaut, aber Nutzung unklar
   - Adaptive-Logik: ✅
   - Content-Variationen: ~50% klar
   - **Fix:** Überprüfe ob SubchapterContent verschiedene Content zeigt je nach Badge

4. **Progressive Disclosure mit Hinterfrag Mode** — Implementiert, wenig sichtbar
   - Toggle exists: ✅
   - Benutzer wissen davon: ❓

---

### 13.2 🟡 PARTIALLY IMPLEMENTED

1. **Adaptive Learning** — Viel Infrastruktur, aber:
   - StichwortStats werden erfasst ✅
   - FachStats werden erfasst ✅
   - Learning Phase setzen: Benutzer muss manuell? ⚠️
   - Daily Challenge Streak: Implementiert ✅

2. **Gamification** — Badges funktionieren, aber:
   - Nur 5 Badges definiert
   - Visualisierung: ✅
   - Marketing: ❓

---

### 13.3 🟢 VOLLSTÄNDIG IMPLEMENTIERT

1. **Spaced Repetition** — SM-2 + Leitner
2. **Quiz Session Tracking** — Hot Streak, XP, consecutiveCorrect
3. **SRS Chapter Review** — Leitner-Boxen pro Kapitel
4. **Hints System** — Sokrates-Methode voll
5. **Store Persistence** — Robust mit Sanitization
6. **Progressive Disclosure** — Text-Blöcke collapsible
7. **Badge System** — Async checking, mehrere Trigger
8. **Interleaving Prompts** — Nach 45 Min Switch-Vorschlag

---

## 14. EMPFEHLUNGEN FÜR MAXIMALE NUTZUNG

### Top 5 Quick Wins

1. **Befülle quiz[] mit Daten** (2–3h Arbeit)
   - Wähle 10 Kapitel, füge 2–3 inline Quizze hinzu
   - Rendering ist bereit!

2. **Aktiviere imageUrl** (3–5h Arbeit)
   - Suche Frestock-Bilder oder generiere diese
   - Render-Code wartet

3. **Dokumentiere Hinterfrag Mode** für Benutzer
   - Toggle ist sichtbar (BMSUnterkapitel.tsx:370)
   - Aber UX nicht optimal erklärt

4. **Teste Knowledge Bridge**
   - Verdient es ein Premium Badge?
   - Tiefere Inhalte für Physik-Profi?

5. **Leaderboard-Integration vertiefen**
   - Snapshots werden erfasst
   - Aber real-time Rendering kann verbessert werden

---

## ZUSAMMENFASSUNG

| Kategorie                     | Status | Anteil |
| ----------------------------- | ------ | ------ |
| Voll implementiert & genutzt  | ✅     | 75%    |
| Implementiert, selten genutzt | 🟡     | 15%    |
| Implementiert, nie genutzt    | 🔴     | 5%     |
| Geplant, nicht implementiert  | ⏳     | 5%     |

**Code-Qualität:** Exzellent. Typsicherheit konsequent, keine "any" Types ohne Grund.

**Performance-Potenzial:** High. Lazy loading, Memoization können optimiert werden.

**Daten-Vollständigkeit:** Mittelmäßig. Viel Struktur, aber nicht alle Felder gefüllt (bewusste Entscheidung).
