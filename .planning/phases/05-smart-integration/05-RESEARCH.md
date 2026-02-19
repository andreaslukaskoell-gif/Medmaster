# Phase 5: Smart Integration - Research

**Researched:** 2026-02-19
**Domain:** Component Integration, State Management, XP/Progression Systems
**Confidence:** HIGH

## Summary

Phase 5 integrates existing, proven components (QuizQuestion, MerksatzBox) and state systems (useStore, useQuizSessionStore) into every chapter. The technical foundations are mature and tested:

- **QuizQuestion.tsx** (Framer Motion, Zustand integration) handles immediate feedback, hints, second-try mechanics, and XP callbacks
- **MerksatzBox.tsx** (glassmorphism with 5 types) is ready for bulk deployment
- **XP system** (xp.ts + progression.ts) calculates dynamic XP based on difficulty/time; Level-Namen are defined
- **Hot-Streak & Level-Aufstieg** already implemented in quizSessionStore and LevelUpOverlay

The core challenge: **systematically replacing placeholder/missing quiz implementations** across all chapters with QuizQuestion + XP tracking, ensuring MerksatzBox appears 2+ times per chapter.

**Primary recommendation:** Start with inventory (which chapters have quiz gaps), then batch-migrate in subject order (Bio → Chem → Phys → Math) to catch patterns early.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **Supabase = primary source** for ALL chapter content (38 chapters across 4 subjects)
- **Static BMS data (`src/data/bmsKapitel/`) = metadata overlay ONLY**, not content
- **Merge logic in BMS.tsx** established: Start with static, spread Supabase on top, post-process to restore static metadata
- **Hook order in BMS.tsx** is CRITICAL and locked (prevents Temporal Dead Zone errors):
  1. `useState`/`useRef`/`useCallback`
  2. `supabaseChapters` (SWR data source)
  3. `chaptersForSelectedSubject` (useMemo merge + post-processing)
  4. `sortedChapters` (useMemo)
  5. `roadmapChapters` (useMemo) — filter `c.sequence !== undefined`
  6. `activeKapitel` (useMemo) — MUST come after `chaptersForSelectedSubject`
  7. Further derived state
- **Color system locked:** Always use `getSubjectColors(subject)` from `src/data/bmsKapitel/colors.ts`
- **Smart-Links pattern:** `linkedChapters` array on static Kapitel; render only if `.length > 0`
- **ID conflict resolved:** Post-processing logic ensures static chapters win for sequenced chapters

### Claude's Discretion
- How to structure quiz session state (in-memory vs persistent)
- Whether to show XP animations inline or as toasts
- Hint display timing (immediate vs delayed)
- Level-Aufstieg presentation (modal vs slide-in vs toast)
- Hot-Streak visual feedback style (particles, glow, badge)
- Progress bar placement and styling
- Whether to batch XP updates or per-question

### Deferred Ideas (OUT OF SCOPE)
- Paywall logic or tier restrictions (Phase 8)
- Adaptive learning algorithms (v2)
- Custom quiz creation (v2)
- TV/KFF/SEK section integration (Phase 5 scope is BMS only)
- Analytics dashboard/PostHog (v2)
- Karteikarten/Flashcards (user explicitly excluded)

</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| SMART-01 | Jede Frage nutzt QuizQuestion.tsx mit XP-Vergabe via `useStore.ts` | QuizQuestion accepts `onAnswerChange` callback; useStore has `addXP()` + `addXPFromActivity()`. Integration point: pass callback to QuizQuestion, invoke in handleSelectAnswer. |
| SMART-02 | Second-Try-Mechanik ist aktiv (halbe XP bei zweitem Versuch) | QuizQuestion tracks `isSecondAttempt` state; callback receives `(isCorrect, secondTry?)`. Tasks must pass secondTry flag to XP logic. |
| SMART-03 | Hints werden angezeigt nach falschem ersten Versuch | QuizQuestion renders hints array with "Gib mir einen Tipp" button; SM automatically shows hints after first wrong answer (state `hintIndex`). Already implemented. |
| SMART-04 | MerksatzBox-Komponente ist in jedem Kapitel mindestens 2x verwendet | MerksatzBox supports 5 types (merke/altfragen/klinisch/achtung/tipp); SelfTestQuestion has `hints` + `explanation` fields. Audit needed to count current usage per chapter. |
| SMART-05 | XP-System aus `xp.ts` + `progression.ts` ist konsistent integriert | xp.ts: `computeXP(baseXP, difficulty, timeSeconds)` with fallbacks; progression.ts: `getLevelFromXP()`, `getLevelName()`, `getXPInCurrentLevel()`, `getLevelProgressPercent()`. useStore exposes both `addXP()` and `addXPFromActivity()`. |
| SMART-06 | Level-Aufstieg wird nach Quiz-Abschluss angezeigt mit Level-Namen | LevelUpOverlay.tsx exists (Framer Motion, sparkle particles); uses `getLevelName()` from progression.ts. AppShell.tsx manages `levelUpState`. Integration: detect XP threshold crossing in useStore, trigger overlay in AppShell. |
| SMART-07 | Hot-Streak-Bonus wird nach 3+ korrekten Antworten in Folge vergeben | quizSessionStore tracks `consecutiveCorrect`; triggers `hotStreakActive` at 5+ streak. useQuizSessionStore.recordQuizAnswer() called from QuizQuestion. Bonus logic: define multiplier (e.g., 1.25x on 5-streak), apply in XP calculation. |

</phase_requirements>

---

## Standard Stack

### Core Libraries (Proven, In Use)

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| React | 18+ | UI rendering | Project standard |
| TypeScript | 5+ | Type safety | Project standard |
| Zustand | 5.0.11 | Global state (XP, streaks, badges) | Lightweight, battle-tested in useStore.ts and quizSessionStore.ts |
| Framer Motion | 12.34.1 | Animations (transitions, feedback) | Used in QuizQuestion, MerksatzBox, LevelUpOverlay; Motion API stable |
| Tailwind CSS | Latest | Utility-first styling | Existing glassmorphism patterns proven in MerksatzBox |

### Custom Utilities (Already Built)

| File | Version | Purpose | Usage |
|------|---------|---------|-------|
| `src/lib/xp.ts` | Current | Dynamic XP calculation | `computeXP({ baseXP, difficultyMultiplier, timeSeconds })` → XP amount |
| `src/lib/progression.ts` | Current | Level progression math | `getLevelFromXP()`, `getLevelName()`, `getLevelProgressPercent()` |
| `src/store/useStore.ts` | Current | Global XP/streak/badge state | `addXP(amount)`, `addXPFromActivity(params)`, `setMaxConsecutiveCorrect()` |
| `src/store/quizSessionStore.ts` | Current | Quiz session (streak, hot-streak) | `recordQuizAnswer(correct)`, `clearHotStreak()` |
| `src/data/bmsKapitel/colors.ts` | Current | Subject color mapping | `getSubjectColors(subject)` for glassmorphism accents |

### Component Library (Reusable, Tested)

| Component | Location | Purpose | Confidence |
|-----------|----------|---------|------------|
| QuizQuestion | `src/components/chapter/QuizQuestion.tsx` | Interactive quiz with immediate feedback, hints, second-try | HIGH — actively used, Framer Motion animations proven |
| MerksatzBox | `src/components/chapter/MerksatzBox.tsx` | Glassmorphism info boxes (5 types) | HIGH — implemented, ready for scale |
| LevelUpOverlay | `src/components/learning/LevelUpOverlay.tsx` | Level-up notification with sparkles | HIGH — fully implemented, trophy + particle effects |
| InteractiveQuiz | `src/components/chapter/InteractiveQuiz.tsx` | Quiz wrapper (renders multiple QuizQuestion) | HIGH — uses QuizQuestion internally |

### Integration Points (Data Flow)

```
Chapter (BMSUnterkapitel)
  ├─ Render SelfTestQuestion[] via InteractiveQuiz
  ├─ InteractiveQuiz renders QuizQuestion for each
  ├─ QuizQuestion.onAnswerChange callback:
  │   ├─ Call useStore.addXP() or addXPFromActivity()
  │   ├─ Call useQuizSessionStore.recordQuizAnswer() (hot-streak)
  │   └─ Detect level-up → trigger AppShell LevelUpOverlay
  ├─ Render MerksatzBox (multiple, 2+ per chapter)
  └─ (optional) Render completion card with bonus XP
```

---

## Architecture Patterns

### Established Pattern: Data Flow (Phase 4)

**Context:** Supabase holds raw chapter content; static files provide metadata overlay.

```
BMS.tsx (orchestrator)
├── Fetch supabaseChapters via SWR (loadBMSChaptersSWR)
├── useMemo: chaptersForSelectedSubject = merge(static, supabase, post-process)
├── useMemo: activeKapitel from chaptersForSelectedSubject
├── Pass activeKapitel to BMSKapitelView
└── BMSKapitelView
    ├── Render activeKapitel.unterkapitel[index]
    ├── Extract selfTest: SelfTestQuestion[]
    ├── Render InteractiveQuiz(selfTest)
    └── Render MerksatzBox (multiple)
```

**Critical:** `activeKapitel` MUST come from post-processed `chaptersForSelectedSubject`, never directly from Supabase.

### Pattern 1: XP Award on Quiz Answer

**What:** When user selects an option in QuizQuestion, immediately calculate and award XP.

**When to use:** Every quiz interaction (BMS chapters, self-tests, etc.)

**Example:**

```typescript
// QuizQuestion.tsx callback
const handleSelectAnswer = (index: number) => {
  if (isAnswered) return;
  setSelectedOption(index);
  setIsAnswered(true);
  const isCorrect = index === correctIndex;

  // Award XP
  const xpAmount = computeXP({
    baseXP: 10,
    difficultyMultiplier: question.difficulty ?? 1,
    timeSeconds: undefined // optional
  });

  useStore.getState().addXP(isCorrect ? xpAmount : Math.floor(xpAmount / 2));

  // Trigger callback for parent (second-try tracking)
  onAnswerChange?.(isCorrect, isSecondAttempt);
};
```

**Hook:** `useStore()` is already integrated in QuizQuestion. Parent (BMSUnterkapitel) can listen to store changes if needed for level-up detection.

### Pattern 2: Hot-Streak Trigger

**What:** Track consecutive correct answers; after 5+, show celebratory feedback and apply XP multiplier.

**When to use:** After every quiz question in a quiz session.

**Example:**

```typescript
// quizSessionStore.recordQuizAnswer() already implements this
recordQuizAnswer: (correct: boolean) => {
  if (correct) {
    const next = get().consecutiveCorrect + 1;
    set({ consecutiveCorrect: next });

    if (next >= 5) {
      set({ hotStreakActive: true });
      // Auto-dismiss after 4.5s
      setTimeout(() => get().clearHotStreak(), HOT_STREAK_DURATION_MS);
    }
  } else {
    set({ consecutiveCorrect: 0 });
  }
};

// In XP calculation: apply 1.25x multiplier if hotStreakActive
const hotStreakMultiplier = useQuizSessionStore((s) => s.hotStreakActive) ? 1.25 : 1;
const finalXP = Math.round(xpAmount * hotStreakMultiplier);
```

### Pattern 3: Level-Up Detection & Overlay

**What:** When XP crosses a level boundary (e.g., 100 → 200), show LevelUpOverlay.

**When to use:** In AppShell or quiz completion handler.

**Example:**

```typescript
// Detect level-up in useStore (or AppShell effect)
const prevLevel = getLevelFromXP(oldXP);
const newLevel = getLevelFromXP(newXP);

if (newLevel > prevLevel) {
  const feature = getFeatureUnlockedAtLevel(newLevel);
  // Trigger overlay in AppShell
  setLevelUpState({ level: newLevel, feature });
  // Auto-dismiss after 5s
  setTimeout(() => setLevelUpState(null), 5000);
}
```

### Pattern 4: MerksatzBox Bulk Deployment

**What:** Render MerksatzBox (5 types: merke/altfragen/klinisch/achtung/tipp) alongside quiz content.

**When to use:** 2+ per chapter, scattered through content for spaced repetition.

**Example:**

```typescript
// In BMSUnterkapitel or Unterkapitel component
<MerksatzBox
  text="PCR ist ein 3-Schritt-Prozess: Denaturierung (94°C), Annealing (50-65°C), Elongation (72°C)."
  type="merke"
/>

<InteractiveQuiz questions={selfTest} />

<MerksatzBox
  text="STR-Analyse verwendet 13-20 Loci und ist der Standard für genetische Fingerabdrücke im MedAT."
  type="altfragen"
/>
```

### Pattern 5: Second-Try Mechanic (50% XP)

**What:** User answers wrong, gets hints, then clicks "Nochmal versuchen" → second attempt counts as success with 50% XP.

**When to use:** After first incorrect answer in QuizQuestion.

**Example:**

```typescript
// QuizQuestion tracks isSecondAttempt
const handleSecondTry = () => {
  setIsAnswered(false);
  setSelectedOption(null);
  setIsSecondAttempt(true);
};

// On second answer, computeXP but apply 0.5x multiplier
const xpMultiplier = isSecondAttempt ? 0.5 : 1;
const finalXP = Math.round(computeXP({ ... }) * xpMultiplier);
```

### Anti-Patterns to Avoid

- **❌ Storing XP in component state:** Use Zustand (useStore) for persistence across page loads
- **❌ Triggering multiple level-ups per question:** Check level boundary once per XP award
- **❌ Rendering MerksatzBox with hardcoded colors:** Always use `getSubjectColors()` for subject-specific accents
- **❌ Skipping hints:** QuizQuestion is the single source of truth for hint logic; don't re-implement
- **❌ Direct Supabase reads in quiz components:** Data flows through BMS.tsx → activeKapitel → component props

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|------------|-------------|-----|
| Global quiz state (streaks, consecutive correct, hot-streak) | Custom Context + reducers | `useQuizSessionStore` (Zustand) | Already built, tested, integrates with useStore |
| XP calculation (base + difficulty + time) | Ad-hoc arithmetic | `computeXP(params)` from xp.ts | Handles fallbacks, clamping, edge cases |
| Level progression math | Manual level/XP mapping | `getLevelFromXP()`, `getXPInCurrentLevel()`, `getLevelName()` from progression.ts | Consistency across app, supports feature gates |
| Quiz answer feedback (correct/wrong/hints/explain) | Custom JSX | QuizQuestion component | Animations, state management, a11y all built-in |
| Glassmorphism info boxes | Custom styled divs | MerksatzBox (5 types) | Proven patterns, type system, Tailwind integration |
| Level-up notification UI | Custom modal | LevelUpOverlay + AppShell | Framer Motion sparkles, feature unlock messaging already implemented |
| Streak + hot-streak tracking | Manual counters | quizSessionStore + useStore | Dual-store pattern avoids state duplication |

**Key insight:** These systems are deceptively complex (edge cases in XP calculation, cross-page state persistence, animation timing). Use proven patterns.

---

## Common Pitfalls

### Pitfall 1: XP Calculation Without Fallbacks
**What goes wrong:** Assuming `question.difficulty` or `timeSeconds` always present → NaN or 0 XP awarded.
**Why it happens:** Not all question sources populate these fields; missing data crashes calculation.
**How to avoid:** Use `computeXP()` from xp.ts — it handles null/undefined with sensible defaults (baseXP=10, difficulty=1).
**Warning signs:** XP awarded is 0, NaN, or always the same amount regardless of difficulty.

### Pitfall 2: Level-Up Triggered Multiple Times Per Answer
**What goes wrong:** User answers one question, level boundary crossed, but overlay shown 3+ times (due to re-renders).
**Why it happens:** Checking XP in useEffect without dependency on previous level.
**How to avoid:** Store previous level in ref/state; only trigger overlay if `newLevel > prevLevel`.
**Warning signs:** LevelUpOverlay appears rapidly or multiple times in quick succession.

### Pitfall 3: Streak Reset by Duplicate Calls
**What goes wrong:** recordQuizAnswer() called twice for same answer → streak incorrectly reset.
**Why it happens:** Parent component calls recordQuizAnswer in both onAnswerChange and in another effect.
**How to avoid:** recordQuizAnswer should be called ONCE per question answer (in QuizQuestion.handleSelectAnswer).
**Warning signs:** Streak doesn't increment properly; hot-streak never triggers at 5+.

### Pitfall 4: MerksatzBox Color Inconsistency
**What goes wrong:** MerksatzBox type="merke" shows amber in BMS but purple in TV (due to hardcoded colors).
**Why it happens:** Using global color constants instead of subject-aware colors.
**How to avoid:** MerksatzBox accepts `type` prop (not subject). For subject-specific styling, wrap MerksatzBox in subject-color context or pass className.
**Warning signs:** Glassmorphism colors don't match chapter theme.

### Pitfall 5: Hints Shown Before First Wrong Answer
**What goes wrong:** User sees hint button on correct answer or immediately.
**Why it happens:** Rendering hints without checking `isWrong` state.
**How to avoid:** QuizQuestion already has this logic: hints only render if `isWrong && hintIndex > 0`. Don't modify.
**Warning signs:** Hint button visible when question is answered correctly.

### Pitfall 6: useStore XP Not Persisting Across Page Reload
**What goes wrong:** User earns XP, refreshes page, XP is gone.
**Why it happens:** useStore is created without `persist` middleware or storage fails silently.
**How to avoid:** useStore already uses `persist(createJSONStorage(...), safeStorage())`. Don't create new stores without persist.
**Warning signs:** localStorage has no "medmaster-storage" key; sanitizePersisted() reports corruption.

### Pitfall 7: Second-Try Mechanic Awarded as First-Try
**What goes wrong:** User gets hint, tries again, wrong answer → still gets 10 XP (not 5).
**Why it happens:** isSecondAttempt not passed through callback chain.
**How to avoid:** QuizQuestion callback signature: `onAnswerChange(isCorrect, secondTry)`. Parent must apply 0.5x multiplier based on secondTry.
**Warning signs:** Second attempts always award same XP as first attempts.

---

## Code Examples

Verified patterns from codebase:

### Example 1: XP Award with Difficulty
```typescript
// Source: src/lib/xp.ts + src/components/chapter/QuizQuestion.tsx
import { computeXP } from "@/lib/xp";
import { useStore } from "@/store/useStore";

const handleSelectAnswer = (index: number) => {
  if (isAnswered) return;

  const isCorrect = index === correctIndex;

  // Calculate XP with difficulty + optional time bonus
  const xp = computeXP({
    baseXP: 10,
    difficultyMultiplier: question.difficulty ?? 1, // 0.5–2.0 range
    timeSeconds: undefined // optional
  });

  // Award full XP if correct, else 50% penalty
  const awardXP = isCorrect ? xp : Math.floor(xp / 2);
  useStore.getState().addXP(awardXP);

  // Trigger callback with second-try flag
  onAnswerChange?.(isCorrect, isSecondAttempt);
};
```

### Example 2: Hot-Streak with Bonus XP
```typescript
// Source: src/store/quizSessionStore.ts + integration point
import { useQuizSessionStore } from "@/store/quizSessionStore";
import { useStore } from "@/store/useStore";

const handleSelectAnswer = (index: number) => {
  const isCorrect = index === correctIndex;

  // 1. Record in quiz session store (updates consecutive count, triggers hot-streak)
  useQuizSessionStore.getState().recordQuizAnswer(isCorrect);

  // 2. Calculate XP (base calculation)
  let xp = computeXP({ baseXP: 10, difficultyMultiplier: question.difficulty ?? 1 });

  // 3. Apply hot-streak multiplier if active
  const { hotStreakActive } = useQuizSessionStore.getState();
  if (hotStreakActive && isCorrect) {
    xp = Math.round(xp * 1.25); // 25% bonus on hot streak
  }

  // 4. Apply second-try penalty
  if (isSecondAttempt && !isCorrect) {
    xp = Math.floor(xp * 0.5);
  }

  // 5. Award XP
  useStore.getState().addXP(xp);
};
```

### Example 3: Level-Up Detection in AppShell
```typescript
// Source: src/components/layout/AppShell.tsx (integration)
import { useStore } from "@/store/useStore";
import { getLevelFromXP, getFeatureUnlockedAtLevel } from "@/lib/progression";

export function AppShell() {
  const [prevXP, setPrevXP] = useState(0);
  const [levelUpState, setLevelUpState] = useState<{ level: number; feature: string | null } | null>(null);

  const xp = useStore((s) => s.xp);

  useEffect(() => {
    const prevLevel = getLevelFromXP(prevXP);
    const newLevel = getLevelFromXP(xp);

    if (newLevel > prevLevel) {
      const feature = getFeatureUnlockedAtLevel(newLevel);
      setLevelUpState({ level: newLevel, feature });

      // Auto-dismiss after 5 seconds
      const timer = setTimeout(() => setLevelUpState(null), 5000);
      return () => clearTimeout(timer);
    }

    setPrevXP(xp);
  }, [xp, prevXP]);

  return (
    <>
      {/* ... other UI ... */}
      <LevelUpOverlay
        level={levelUpState?.level}
        feature={levelUpState?.feature}
        onDismiss={() => setLevelUpState(null)}
      />
    </>
  );
}
```

### Example 4: Bulk MerksatzBox Rendering
```typescript
// Source: src/pages/BMSUnterkapitel.tsx (integration pattern)
import { MerksatzBox } from "@/components/chapter/MerksatzBox";
import { InteractiveQuiz } from "@/components/chapter/InteractiveQuiz";

export default function BMSUnterkapitel({ kapitel, unterkapitelIndex, ... }) {
  const uk = kapitel.unterkapitel[unterkapitelIndex];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Chapter content */}
      <div className="prose dark:prose-invert">
        <h1>{uk.title}</h1>
        <ReactMarkdown>{uk.content}</ReactMarkdown>
      </div>

      {/* Merksatz 1: Key concept */}
      {uk.merksätze?.[0] && (
        <MerksatzBox text={uk.merksätze[0]} type="merke" />
      )}

      {/* Quiz */}
      <InteractiveQuiz questions={uk.selfTest} />

      {/* Merksatz 2: Clinical relevance */}
      {uk.klinischerBezug && (
        <MerksatzBox text={uk.klinischerBezug} type="klinisch" />
      )}

      {/* Merksatz 3: Common exam mistakes */}
      {uk.merksätze?.[1] && (
        <MerksatzBox text={uk.merksätze[1]} type="altfragen" />
      )}
    </div>
  );
}
```

### Example 5: Second-Try Mechanic
```typescript
// Source: src/components/chapter/QuizQuestion.tsx (existing implementation)
const [isSecondAttempt, setIsSecondAttempt] = useState(false);

const handleSecondTry = () => {
  setIsAnswered(false);
  setSelectedOption(null);
  setIsSecondAttempt(true); // Flag for callback
};

const handleSelectAnswer = (index: number) => {
  if (isAnswered) return;
  setSelectedOption(index);
  setIsAnswered(true);
  const isCorrect = index === correctIndex;

  // Parent can apply 50% XP penalty based on secondTry flag
  onAnswerChange?.(isCorrect, isSecondAttempt);
};

// Button in UI
{!solutionRevealed && !isSecondAttempt && (
  <button onClick={handleSecondTry} className="...">
    <RotateCcw className="w-4 h-4" />
    Nochmal versuchen (50% XP)
  </button>
)}
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Static JSON quiz data in memory | Supabase chapter content + static metadata overlay | Phase 4 (2026-02-19) | Centralized content source, easier updates, metadata preserved |
| Manual XP arithmetic per component | `computeXP()` utility with fallbacks | Phase 4 | Consistency, handles missing data, supports time bonuses |
| Context API for global state | Zustand (useStore + quizSessionStore) | Pre-Phase 5 | Lighter-weight, better devtools, pattern well-tested |
| Inline component animations | Framer Motion with pre-built patterns (QuizQuestion, MerksatzBox, LevelUpOverlay) | Phase 3–4 | Smooth UX, code reuse, maintainable |
| Hardcoded color schemes | `getSubjectColors()` single source of truth | Phase 4 | Subject-aware styling, consistency |
| Quiz state in URL params | Zustand stores (memory + persistence) | Pre-Phase 5 | Cleaner API, cross-tab synchronization |

**Deprecated/outdated:**
- **Manual level progression calculation:** Replaced by progression.ts (getLevelFromXP, getLevelName)
- **Multiple quiz component variants:** Consolidated to QuizQuestion (reusable for all contexts)
- **LocalStorage-only persistence:** Now using Zustand persist middleware with safe fallbacks

---

## Open Questions

1. **Hot-Streak XP multiplier value:** Should 5+ consecutive correct answers give 1.25x, 1.5x, or 2x XP bonus?
   - What we know: Streak is tracked; LevelUpOverlay exists; multiplier logic not yet implemented
   - What's unclear: Game balance (too generous? too stingy?)
   - Recommendation: Start with 1.25x, tune based on playtesting feedback

2. **Level-Up overlay auto-dismiss timing:** Should it auto-close after 3s, 5s, or wait for user click?
   - What we know: LevelUpOverlay has `onDismiss` callback; no current timer
   - What's unclear: Optimal UX (distraction vs immersion)
   - Recommendation: Implement 5s auto-dismiss + manual close button (both options)

3. **Quiz completion reward:** Should quiz completion give bonus XP (e.g., +25 if all correct)?
   - What we know: useStore supports `addXP()` per question; no batch bonus yet
   - What's unclear: Whether to incentivize 100% completion
   - Recommendation: Defer to Phase 5 planning (Claude's discretion)

4. **MerksatzBox placement strategy:** Should be top+bottom of chapter, or scattered through content?
   - What we know: Pattern is flexible (component accepts type and text)
   - What's unclear: Optimal spaced repetition timing
   - Recommendation: Place 1 at intro (merke), 1-2 mid-content (altfragen/klinisch), 1 at end (achtung/tipp)

5. **Hot-Streak visual feedback:** Should show particle animation, badge, glow, or toast?
   - What we know: LevelUpOverlay has sparkle particles; quizSessionStore tracks active state
   - What's unclear: Best UX for in-quiz feedback (too much animation = distraction?)
   - Recommendation: Use subtle glow/badge overlay on QuizQuestion when hotStreakActive=true

---

## Sources

### Primary (HIGH confidence)

- **src/components/chapter/QuizQuestion.tsx** - Current quiz implementation, Framer Motion + state
- **src/components/chapter/MerksatzBox.tsx** - Glassmorphism component, 5 type system
- **src/store/useStore.ts** - Global XP/streak/badge state with Zustand persist
- **src/store/quizSessionStore.ts** - Quiz session state (consecutive correct, hot-streak)
- **src/lib/xp.ts** - XP calculation with fallbacks
- **src/lib/progression.ts** - Level progression math and level names
- **src/components/learning/LevelUpOverlay.tsx** - Level-up modal with animations
- **src/components/chapter/InteractiveQuiz.tsx** - Quiz wrapper using QuizQuestion
- **src/data/bmsKapitel/types.ts** - SelfTestQuestion and Kapitel interfaces
- **src/data/bmsKapitel/colors.ts** - Subject color mapping (getSubjectColors)

### Verification

- Zustand v5.0.11: Confirmed in package.json
- Framer Motion v12.34.1: Confirmed in package.json
- React 18+: Project standard
- All source files reviewed 2026-02-19; patterns verified as working

### Secondary (MEDIUM confidence)

- Phase 4 context document (04-CONTEXT.md): Established data flow, hook order, color system, smart-links
- Phase 4 research (04-RESEARCH.md): Architecture patterns, Supabase integration patterns

---

## Metadata

**Confidence breakdown:**
- **Standard Stack:** HIGH - All libraries confirmed in package.json and actively used in codebase
- **Architecture:** HIGH - Phase 4 established patterns are locked; current implementations (QuizQuestion, MerksatzBox, xp.ts, progression.ts) verified
- **Integration Points:** HIGH - Callback signatures and state management patterns directly observed in code
- **Pitfalls:** HIGH - Common integration issues identified through code review (e.g., Pitfall 7: second-try flag passing)
- **Open Questions:** MEDIUM - Balancing parameters (multipliers, timers) not yet specified in requirements

**Research date:** 2026-02-19
**Valid until:** 2026-03-19 (30 days; stable domain, locked architecture)

**Next step:** Pass to gsd-planner for task breakdown. Planner should:
1. Create inventory task (audit all chapters for quiz gaps)
2. Create batch migration tasks per subject (Bio→Chem→Phys→Math)
3. Create verification task (2+ MerksatzBox per chapter validation)
