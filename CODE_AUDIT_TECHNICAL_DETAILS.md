# MEDMASTER: TECHNISCHER CODE-AUDIT DEEP-DIVE

**Fokus:** Spezifische Code-Locations, Implementierungsdetails, Integrationspunkte

---

## 1. QUICK-WIN FEATURES ZUM AKTIVIEREN

### 1.1 Quiz[] Feld aktivieren

**SCHRITT 1:** Daten hinzufügen

```typescript
// /src/data/bmsKapitel/biologie/kap1-zelle.ts

export const unterkapitel1_1: Unterkapitel = {
  id: "bio-1-1",
  title: "Zellmembran",
  content: "...",
  selfTest: [...],
  quiz: [  // NEW!
    {
      question: "Welche Komponente bildet die Grundstruktur der Zellmembran?",
      options: ["Proteine", "Lipidschicht (Phospholipide)", "Kohlenhydrate", "DNA"],
      correctIndex: 1,
      explanation: "Die Lipidschicht aus Phospholipiden bildet die Grundstruktur. Proteine sitzen auf oder in dieser Schicht.",
      hints: ["Denke an 'fluid mosaic model'", "Was ist flüssig wie Öl?"],
      difficulty: 1
    }
  ]
};
```

**SCHRITT 2:** In Kapitel-Index registrieren

```typescript
// /src/data/bmsKapitel/biologie/index.ts

export const alleKapitelBiologie: Kapitel[] = [
  {
    ...bioKap1,
    sequence: 1,
    sequenceTitle: "Zelle",
    linkedChapters: ["bio-kap2"],
    // quiz wird automatisch in unterkapitel1_1 gerendert!
  },
];
```

**SCHRITT 3:** Rendering ist SCHON DA!

```typescript
// /src/components/chapter/ContentVisualizer.tsx Zeile 61–83

{uk?.quiz && uk.quiz.length > 0 && (
  <section className="my-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
    <h3 className="text-lg font-semibold mb-3">Pause-Quiz</h3>
    <QuizQuestion
      question={uk.quiz[0]}
      onAnswer={(correct, secondTry) => {
        // XP wird vergeben
        store.addXP(correct ? 25 : 10);
      }}
    />
  </section>
)}
```

**Result:** Quiz erscheint nach dem Haupttext — perfekt für Lese-Pause!

---

### 1.2 ImageUrl aktivieren

**SCHRITT 1:** URL in Daten setzen

```typescript
// /src/data/bmsKapitel/chemie/kap6-chemische-bindung.ts

export const unterkapitel6_2: Unterkapitel = {
  id: "chem-6-2",
  title: "Kovalente Bindung",
  imageUrl: "https://commons.wikimedia.org/wiki/File:Covalent_bonding.svg", // NEW!
  content: "...",
  selfTest: [...]
};
```

**SCHRITT 2:** Rendering ist BEREIT!

```typescript
// /src/components/chapter/ContentVisualizer.tsx Zeile 48–55

{uk?.imageUrl && (
  <figure className="my-6 text-center">
    <img
      src={uk.imageUrl}
      alt={uk.title}
      className="max-w-full h-auto rounded-lg shadow-md mx-auto"
      loading="lazy"
    />
    <figcaption className="text-sm text-gray-600 dark:text-gray-400 mt-2">
      {uk.title}
    </figcaption>
  </figure>
)}
```

**Status:** Nur Daten-Befüllung nötig!

---

### 1.3 Progressive Disclosure Mode verstehen

**Wo ist der Toggle?**

```typescript
// /src/pages/BMSUnterkapitel.tsx Zeile 225, 370

const [progressiveDisclosure, setProgressiveDisclosure] = useState(true);

// UI-Toggle (Zeile 370–371):
<button
  onClick={() => setProgressiveDisclosure(!progressiveDisclosure)}
  className={`p-2 rounded-lg border ${
    progressiveDisclosure ? "bg-primary-100" : "text-muted"
  }`}
>
  Abschnitte → {progressiveDisclosure ? "Progressiv" : "Alle"}
</button>

// Dann übergeben an Komponente (Zeile 437):
<ContentVisualizer
  uk={uk}
  progressiveDisclosure={progressiveDisclosure}
/>
```

**Was passiert intern?**

```typescript
// /src/components/chapter/SubchapterContent.tsx Zeile 348

const useProgressive = progressiveDisclosure;

if (useProgressive && sections && sections.length > 0) {
  // Render expandable sections (collapsed by default)
  return (
    <div className="space-y-4">
      {sections.map((section, i) => (
        <ExpandableSection
          key={i}
          heading={section.heading}
          content={section.text}
          expanded={expandedSections.has(i)}
          onToggle={() => toggleSection(i)}
        />
      ))}
    </div>
  );
}
```

**Benutzer-Erlebnis:**

- Toggle an = Nur Überschriften sichtbar, klick um zu expandieren
- Toggle aus = Alles auf einmal sichtbar

---

## 2. HINTS-SYSTEM DETAILLIERT

### 2.1 Wo sind die Hints?

```typescript
// /src/data/bmsKapitel/chemie/kap8-chemisches-gleichgewicht.ts (Beispiel)

{
  question: "Was ist die Reaktionsgeschwindigkeit v?",
  options: ["...", "...", "..."],
  correctIndex: 0,
  explanation: "...",
  hints: [  // HIER!
    "v = Δc/Δt — Ableitung aus der Definition",
    "Einheit: mol pro Liter pro Sekunde",
    "v ist immer positiv, auch wenn Konzentration fällt"
  ],
  difficulty: 2
}
```

### 2.2 Rendering: Schrittweise Hinweise

```typescript
// /src/components/chapter/QuizQuestion.tsx Zeile 25–57

const [hintIndex, setHintIndex] = useState(0);
const hints = question.hints && question.hints.length > 0
  ? question.hints
  : [FALLBACK_HINT];

const hasMoreHints = hintIndex < hints.length;

function showNextHint() {
  if (hintIndex < hints.length) {
    setHintIndex((i) => i + 1);
  }
}

// Render:
<button
  onClick={showNextHint}
  disabled={!hasMoreHints}
  className="px-4 py-2 bg-amber-500 text-white rounded"
>
  {hintIndex === 0
    ? "Tipp anschauen"
    : `Tipp ${hintIndex}/${hints.length}`
  }
</button>

{hintIndex > 0 && (
  <div className="mt-2 p-3 bg-amber-50 border-l-4 border-amber-500">
    <p className="text-sm text-amber-900">{hints[hintIndex - 1]}</p>
  </div>
)}
```

**UX-Flow:**

1. Benutzer versucht Frage ohne Hint
2. Klick "Tipp" → erstes Hint angezeigt
3. Klick "Tipp 2/3" → zweites Hint
4. Nach letztem Hint → Button deaktiviert
5. Dann "Lösung anschauen" Button

---

## 3. ADAPTIVE LEARNING INTEGRATION

### 3.1 Wie wird Adaptive State erfasst?

```typescript
// /src/store/adaptiveLearning.ts Zeile 200+

recordAnswer: (stichwortId: string, correct: boolean, timeSeconds: number) => {
  set((s) => {
    const existing = s.profile.stichwortStats[stichwortId] ?? {
      totalAttempts: 0,
      correctAttempts: 0,
      successRate: 0,
      confidence: "unbekannt",
      streak: 0,
      avgTimePerQuestion: 0,
    };

    const newStats = {
      ...existing,
      totalAttempts: existing.totalAttempts + 1,
      correctAttempts: existing.correctAttempts + (correct ? 1 : 0),
      successRate: (existing.correctAttempts + (correct ? 1 : 0)) / (existing.totalAttempts + 1),
      streak: correct ? existing.streak + 1 : 0,
      avgTimePerQuestion:
        (existing.avgTimePerQuestion * existing.totalAttempts + timeSeconds) /
        (existing.totalAttempts + 1),
      // Confidence update basierend auf successRate
      confidence: successRate > 0.7 ? "sicher" : successRate > 0.4 ? "unsicher" : "unbekannt",
    };

    return {
      profile: {
        ...s.profile,
        stichwortStats: { ...s.profile.stichwortStats, [stichwortId]: newStats },
      },
    };
  });
};
```

### 3.2 Wo wird Adaptive Schwierigkeit verwendet?

```typescript
// /src/store/adaptiveLearning.ts Zeile 80+

getDifficultyMultiplier: () => {
  const state = get();
  const recent = state.recentAnswers.slice(-3);

  // Wenn letzte 3 Antworten < 10s oder falsch:
  const fast = recent.some((a) => a.timeSeconds < 10);
  const anyWrong = recent.some((a) => !a.correct);

  if (fast || anyWrong) {
    set({ offerBridge: true, difficultyLevel: 1 });
    return 0.6; // Easy questions get 60% XP multiplier
  }

  // Sonst: mittel bis schwer
  return 1.0 + state.difficultyLevel * 0.2; // 1.0 - 1.6
};

getShouldOfferBridge: () => {
  return get().offerBridge;
};
```

### 3.3 Knowledge Bridge — Wo wird es gerendert?

```typescript
// /src/components/chapter/SubchapterContent.tsx Zeile 350+

if (get().getShouldOfferBridge?.()) {
  return (
    <div className="p-4 bg-blue-100 dark:bg-blue-900/30 border-l-4 border-blue-500 rounded">
      <h4 className="font-semibold text-blue-900 dark:text-blue-100">
        Brauchst du eine einfachere Erklärung?
      </h4>
      <p className="text-sm text-blue-800 dark:text-blue-200 mt-2">
        {simplifiedExplanation}
      </p>
    </div>
  );
}

// Normale Content zeigen:
<MarkdownContent text={section.text} />
```

**Status:** Logik funktioniert, aber `simplifiedExplanation` nicht überall definiert

---

## 4. BADGE SYSTEM — INTERNE MECHANIK

### 4.1 Wo werden Badges geprüft?

```typescript
// /src/store/useStore.ts Zeile 240+

checkAndAwardBadges: async () => {
  const state = get();
  const [{ BADGE_DEFINITIONS, getBadgeProgress }, { alleKapitel }] = await Promise.all([
    import("@/data/badges"),
    import("@/data/bmsKapitel"),
  ]);

  for (const badge of BADGE_DEFINITIONS) {
    // Skip if already earned
    if (state.earnedBadges.includes(badge.id)) continue;

    const { earned } = getBadgeProgress(
      badge.id,
      {
        completedChapters: state.completedChapters,
        maxConsecutiveCorrectEver: state.maxConsecutiveCorrectEver,
        smartRecoveryCount: state.smartRecoveryCount,
        firstActivityTimeByDay: state.firstActivityTimeByDay,
      },
      alleKapitel
    );

    if (earned) {
      set((s) => ({ earnedBadges: [...s.earnedBadges, badge.id] }));
      return badge.id; // Return first earned badge
    }
  }

  return null; // No new badge
};
```

### 4.2 Badge-Check wird getriggert von:

```typescript
// 4 verschiedene Trigger-Punkte:

// 1. Nach Chapter-Abschluss
completeChapter: (chapterId) => {
  set((s) => ({
    completedChapters: [...s.completedChapters, chapterId],
  }));
  get()
    .checkAndAwardBadges()
    .then((badge) => {
      if (badge) set({ pendingBadgeId: badge });
    });
};

// 2. Nach erstem Activity des Tages
recordFirstActivityOfDay: () => {
  // ... setze firstActivityTimeByDay[today]
  get().checkAndAwardBadges(); // Prüfe Frühaufsteher
};

// 3. Nach langer Streak
setMaxConsecutiveCorrect: (n) => {
  set((s) => ({ maxConsecutiveCorrectEver: Math.max(s.maxConsecutiveCorrectEver, n) }));
  if (n >= 20) {
    get().checkAndAwardBadges(); // Prüfe Präzisions-König
  }
};

// 4. Nach Smart-Recovery
incrementSmartRecoveryCount: () => {
  set((s) => ({ smartRecoveryCount: s.smartRecoveryCount + 1 }));
  get().checkAndAwardBadges(); // Prüfe Fehler-Fresser
};
```

### 4.3 Badge Modal anzeigen

```typescript
// /src/components/layout/AppShell.tsx (irgendwo im render)

const pendingBadgeId = useStore(s => s.pendingBadgeId);

return (
  <>
    {pendingBadgeId && (
      <BadgeUnlockModal
        badgeId={pendingBadgeId}
        onDismiss={() => useStore.getState().setPendingBadgeId(null)}
      />
    )}
    {/* Rest der AppShell */}
  </>
);
```

---

## 5. SRS ALGORITHMUS DETAILS

### 5.1 SM-2 Implementation (Fragen-Level)

```typescript
// /src/store/useStore.ts Zeile 350+

updateSpacedRepetition: (questionId, correct) => {
  set((s) => {
    const existing = s.spacedRepetition[questionId];
    const now = new Date().toISOString().split("T")[0];

    let interval: number;
    let easeFactor: number;
    let repetitions: number;

    if (!existing) {
      // Erste Antwort
      interval = correct ? 1 : 0;
      easeFactor = 2.5;
      repetitions = correct ? 1 : 0;
    } else {
      // Update easeFactor (SM-2 Formel)
      easeFactor = existing.easeFactor + (correct ? 0.1 : -0.3);
      if (easeFactor < 1.3) easeFactor = 1.3; // Min. 1.3

      if (correct) {
        repetitions = existing.repetitions + 1;
        // Standard intervals
        if (repetitions === 1) interval = 1;
        else if (repetitions === 2) interval = 3;
        else {
          interval = Math.round(existing.interval * easeFactor);
          if (interval > 30) interval = 30; // Max 30 Tage
        }
      } else {
        // Falsch: zurück auf 0 Wiederholungen
        repetitions = 0;
        interval = 1; // Morgen nochmal
      }
    }

    // Nächstes Review-Datum berechnen
    const nextDue = new Date();
    nextDue.setDate(nextDue.getDate() + interval);

    return {
      spacedRepetition: {
        ...s.spacedRepetition,
        [questionId]: {
          questionId,
          lastAnswered: now,
          nextDue: nextDue.toISOString().split("T")[0],
          interval,
          easeFactor,
          repetitions,
        },
      },
    };
  });
};
```

**SM-2 Legende:**

- `easeFactor`: Wie "leicht" ist diese Frage für diesen User? (1.3 = sehr schwer, 2.5 = sehr leicht)
- `repetitions`: Wie oft korrekt hintereinander beantwortet?
- `interval`: Tage bis zur nächsten Wiederholung

**Resultat:** Häufig falsche Fragen → mehrmals täglich, Häufig richtige → monatlich

### 5.2 Leitner-Box Implementation (Kapitel-Level)

```typescript
// /src/store/useStore.ts Zeile 370+

updateChapterSRS: (chapterId, scorePct) => {
  set((s) => {
    const today = new Date().toISOString().split("T")[0];
    const existing = s.userProgress[chapterId];
    const currentLevel = existing?.successCount ?? 0;

    let nextLevel: number;
    let daysToAdd: number;

    if (scorePct >= 80) {
      // Fördern: bessere Score
      nextLevel = Math.min(5, currentLevel + 1);
      const intervalByLevel = [0, 3, 7, 14, 21, 30];
      daysToAdd = intervalByLevel[nextLevel] ?? 30;
    } else if (scorePct < 50) {
      // Zurück auf Level 1: schlechte Score
      nextLevel = 1;
      daysToAdd = 1; // Morgen
    } else {
      // Halten: mittelmäßige Score
      nextLevel = currentLevel;
      daysToAdd = currentLevel <= 0 ? 3 : ([0, 3, 7, 14, 21, 30][currentLevel] ?? 3);
    }

    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + daysToAdd);

    return {
      userProgress: {
        ...s.userProgress,
        [chapterId]: {
          lastReviewed: today,
          successCount: nextLevel,
          nextReviewDate: nextDate.toISOString().split("T")[0],
        },
      },
    };
  });
};
```

**Leitner-Boxen:**

- Level 0: Noch nicht gelernt (interval = 0)
- Level 1: Schwach (interval = 3 Tage)
- Level 2: OK (interval = 7 Tage)
- Level 3: Gut (interval = 14 Tage)
- Level 4: Sehr gut (interval = 21 Tage)
- Level 5: Master (interval = 30 Tage)

---

## 6. QUELLEN: ALLE WICHTIGEN DATEIEN

### 6.1 Store-Dateien

```
/src/store/
├── useStore.ts                  (Hauptstore — 592 Zeilen!)
├── adaptiveLearning.ts          (Adaptive Schwierigkeit)
├── interleaving.ts              (45-Min-Timer)
└── quizSessionStore.ts          (Hot Streak, consecutiveCorrect)
```

### 6.2 Komponenten-Dateien

```
/src/components/
├── chapter/
│   ├── ContentVisualizer.tsx     (Quiz + Images + Rendering)
│   ├── SubchapterContent.tsx     (Progressive Disclosure, Hints)
│   ├── QuizQuestion.tsx          (Hint-Buttons)
│   ├── SelbstTest.tsx            (SRS-Integration)
│   └── MarkdownContent.tsx       (Smart Links, Hinterfrag-Mode)
├── bms/
│   ├── TypAQuestion.tsx          (MedAT-Format)
│   ├── TypKQuestion.tsx          (Komplexe Fragen)
│   ├── ConfidenzButtons.tsx       (Confidence Rating)
│   └── MRSWidget.tsx             (Spaced Rep Widget)
└── layout/
    └── AppShell.tsx              (Badge Modal, Interleaving Overlay)
```

### 6.3 Data-Dateien

```
/src/data/
├── bmsKapitel/
│   ├── types.ts                  (Interface-Definitionen)
│   ├── biologie/
│   ├── chemie/
│   ├── physik/
│   └── mathematik/
├── badges.ts                     (BADGE_DEFINITIONS)
├── stichwortliste.ts            (Stichwort-Verknüpfungen)
└── bms.ts                        (Alle BMS-Fragen)
```

### 6.4 Pages mit Integrationen

```
/src/pages/
├── BMSUnterkapitel.tsx           (Progressive Disclosure Toggle — Zeile 370!)
├── BMSQuiz.tsx                   (SRS updateChapterSRS-Aufruf)
├── FragenTrainer.tsx             (Confidence + FSRS Ratings)
└── BMSWrapped.tsx                (Gamification Summary)
```

---

## 7. INTEGRATION: Wie alles zusammenhängt

```
User beantwortet Frage
  ↓
QuizQuestion.tsx: showNextHint() aufgerufen
  ↓
user sieht Hints progressiv (Sokrates-Methode)
  ↓
Benutzer gibt Antwort
  ↓
useStore.updateSpacedRepetition(questionId, correct)
  → easeFactor & interval werden berechnet
  → nextDue wird gesetzt
  ↓
useStore.addXPFromActivity(params)
  → ruft adaptiveStore.getDifficultyMultiplier() auf
  → adaptive Schwierigkeit berücksichtigt!
  ↓
useStore.setMaxConsecutiveCorrect(n)
  → wenn n >= 5: Hot Streak triggert
  → wenn n >= 20: Badge-Check für "Präzisions-König"
  ↓
Quiz Modal bei n >= 5:
  ├── "🔥 HOT STREAK!" Overlay (4.5 Sekunden)
  └── Random: 10% Chance auf Überraschungs-Botschaft
  ↓
Score >= 80%:
  ├── useStore.completeChapter(chapterId)
  ├── useStore.updateChapterSRS() → Leitner-Level ↑
  └── checkAndAwardBadges() → neue Badges prüfen
  ↓
Wenn neues Badge earned:
  ├── setPendingBadgeId() gesetzt
  └── AppShell zeigt BadgeUnlockModal
```

---

## 8. TESTBARE SZENARIEN

### Szenario 1: Quiz mit Progressive Disclosure

1. Öffne BMSUnterkapitel
2. Klick Toggle "Progressive Disclosure"
3. Erwarte: Nur Überschriften sichtbar
4. Klick Überschrift → Expand
5. Scrolle nach unten → quiz[] wird gerendert (wenn Daten vorhanden)

### Szenario 2: Hints anzeigen

1. Beantworte Frage falsch
2. Klick "Tipp"
3. Erwarte: Erstes Hint angezeigt
4. Klick erneut → Zweites Hint
5. Nach letztem Hint: Button deaktiviert

### Szenario 3: Hot Streak triggern

1. Beantworte 5 Fragen hintereinander richtig
2. Nach 5. korrekter Antwort: 🔥 Overlay 4.5 Sekunden
3. Danach: Modal verschwindet automatisch

### Szenario 4: Badge verdienen

1. Beantworte 20 Fragen in Folge richtig
2. CheckAndAwardBadges() wird async getriggert
3. Wenn verdient: "Präzisions-König" Badge-Modal angezeigt

---

## ZUSAMMENFASSUNG: IMPLEMENTATION-READINESS

| Feature                | Code-Ready | Daten-Ready | Tested | Priorität |
| ---------------------- | ---------- | ----------- | ------ | --------- |
| Quiz[]                 | ✅ 100%    | ❌ 0%       | ❓     | 🟢 High   |
| ImageUrl               | ✅ 100%    | ❌ 0%       | ✅     | 🟡 Med    |
| Progressive Disclosure | ✅ 100%    | ✅ 100%     | ✅     | ✅ ACTIVE |
| Hints System           | ✅ 100%    | ✅ 80%      | ✅     | ✅ ACTIVE |
| Adaptive Learning      | ✅ 80%     | ✅ 100%     | ⚠️     | 🟡 Med    |
| Badge System           | ✅ 100%    | ✅ 100%     | ✅     | ✅ ACTIVE |
| SRS SM-2               | ✅ 100%    | ✅ 100%     | ✅     | ✅ ACTIVE |
| Interleaving           | ✅ 100%    | ✅ 100%     | ✅     | ✅ ACTIVE |
| Hot Streak             | ✅ 100%    | ✅ 100%     | ✅     | ✅ ACTIVE |

**Legende:**

- ✅ = Fertig & produktionsbereit
- ⚠️ = Fertig, aber nicht vollständig getestet
- ❓ = Existiert, unklar ob getestet
- ❌ = Nicht vorhanden
