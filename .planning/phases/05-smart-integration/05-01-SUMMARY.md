---
phase: 05-smart-integration
plan: 01
subsystem: learning-mechanics
tags: [xp-system, level-up, gamification, quiz-integration]
dependencies:
  requires: [SMART-01, SMART-02, SMART-05, SMART-06, SMART-07]
  provides: [xp-award-flow, level-up-detection, second-try-mechanics, hot-streak-bonus]
  affects: [InteractiveQuiz, AppShell, LevelUpOverlay]
tech-stack:
  added: []
  patterns: [zustand-state-management, framer-motion-animations, multiplier-stacking]
key-files:
  created: []
  modified:
    - src/components/chapter/InteractiveQuiz.tsx
    - src/components/layout/AppShell.tsx
    - src/components/learning/LevelUpOverlay.tsx
decisions:
  - Hot-streak bonus applies multiplicatively on top of second-try penalty (1.25x * 0.5x = 0.625x total)
  - XP calculation happens synchronously on answer selection for immediate feedback
  - Level-up overlay auto-dismisses after 5 seconds to avoid blocking user flow
  - Level name displayed at text-3xl to make progression more prominent and rewarding
metrics:
  duration: 127
  tasks: 3
  files: 3
  completed: 2026-02-19
---

# Phase 05 Plan 01: XP Award Integration Summary

**One-liner:** Integrated XP award system into InteractiveQuiz with difficulty multipliers, second-try (50% XP) and hot-streak (125% XP) bonuses, plus level-up detection with auto-dismissing overlays showing career progression names.

## Tasks Completed

### Task 1: Integrate XP award logic into InteractiveQuiz with second-try and hot-streak multipliers

**Status:** ✅ Complete
**Commit:** b51b97e
**Files modified:** src/components/chapter/InteractiveQuiz.tsx

**Implementation:**
- Imported useStore, useQuizSessionStore, and computeXP dependencies
- Updated handleAnswerChange to accept secondTry parameter
- Calculate base XP using computeXP with question.difficulty multiplier (fallback to 1)
- Apply 50% penalty when secondTry flag is true
- Check hot-streak state and apply 125% bonus when active
- Award final XP via useStore.getState().addXP()
- Updated QuizQuestion callback to pass secondTry parameter

**XP Calculation Flow:**
1. Base XP: computeXP({ baseXP: 10, difficultyMultiplier: question.difficulty ?? 1 })
2. Second-try penalty: if secondTry → multiply by 0.5
3. Hot-streak bonus: if hotStreakActive → multiply by 1.25
4. Round to integer and award via addXP()

**Examples:**
- Normal question (difficulty 1): 10 XP
- Hard question (difficulty 1.5): 15 XP
- Second-try correct (difficulty 1): 5 XP (10 * 0.5)
- Hot-streak active (difficulty 1): 13 XP (10 * 1.25, rounded)
- Hot-streak + second-try (difficulty 1): 6 XP (10 * 0.5 * 1.25, rounded)

### Task 2: Add level-up detection and LevelUpOverlay trigger in AppShell

**Status:** ✅ Complete
**Commit:** aad03c4
**Files modified:** src/components/layout/AppShell.tsx

**Implementation:**
- Imported getLevelName from @/lib/progression
- Enhanced level-up useEffect to include 5-second auto-dismiss timer
- Added cleanup function to clear timeout on component unmount or new level-up
- Pass levelName prop to LevelUpOverlay component using getLevelName(level)

**Level-up Detection Flow:**
1. useEffect monitors xp state changes
2. Compare getLevelFromXP(xp) with levelRef.current
3. If newLevel > prevLevel → set levelUpState and trigger overlay
4. Auto-dismiss after 5 seconds via setTimeout
5. Manual dismiss available via onDismiss callback

**Edge Cases Handled:**
- Initial level set to avoid false trigger on mount
- Cleanup timer on unmount to prevent memory leaks
- Manual dismiss clears timer early

### Task 3: Update LevelUpOverlay to display level name prominently

**Status:** ✅ Complete
**Commit:** 6cd5244
**Files modified:** src/components/learning/LevelUpOverlay.tsx

**Implementation:**
- Added levelName optional prop to LevelUpOverlayProps interface
- Created displayName constant with fallback: levelName || getLevelName(level)
- Enhanced level name styling: text-3xl (up from default) and font-bold (up from font-medium)
- Level name now more prominent than "Level X!" text for better UX

**Visual Hierarchy:**
1. Trophy icon (w-10 h-10, amber gradient)
2. "Level {X}!" (text-2xl, bold)
3. **Level name (text-3xl, bold)** ← Most prominent
4. Feature unlock (text-base, violet badge)

**Level Names (from progression.ts):**
- Level 1: Pflegepraktikant
- Level 2: Medizinstudent
- Level 3: Praktikant
- Level 4: Assistenzarzt
- Level 5: Facharzt
- Level 6: Oberarzt
- Level 7: Primar
- Level 8+: Chefarzt, Klinikdirektor, Lehrstuhlinhaber

## Deviations from Plan

None - plan executed exactly as written. All tasks completed without blocking issues or architectural changes.

## Verification Results

**Code Verification:**
- ✅ InteractiveQuiz imports useStore, useQuizSessionStore, computeXP
- ✅ handleAnswerChange calculates XP with multipliers
- ✅ Second-try penalty (0.5x) and hot-streak bonus (1.25x) applied correctly
- ✅ QuizQuestion callback passes secondTry parameter
- ✅ AppShell detects level-up and auto-dismisses after 5s
- ✅ LevelUpOverlay displays level name at text-3xl font-bold
- ✅ All imports and function calls use correct signatures

**Integration Points:**
- InteractiveQuiz → useStore.addXP() (XP award)
- InteractiveQuiz → useQuizSessionStore.hotStreakActive (bonus check)
- AppShell → getLevelFromXP, getLevelName, getFeatureUnlockedAtLevel (progression)
- AppShell → LevelUpOverlay (overlay trigger)

**Manual Testing Recommendations:**
1. Open any BMS chapter with InteractiveQuiz (e.g., /bms/biologie/kap1/01)
2. Answer question correctly → verify XP increase in TopBar
3. Answer wrong, click "Nochmal versuchen", answer correctly → verify 50% XP
4. Answer 5+ questions correctly in a row → verify hot-streak toast AND 125% XP
5. Accumulate 100 XP → verify level-up overlay appears with level name
6. Wait 5 seconds → verify overlay auto-dismisses
7. Trigger new level-up and click X button → verify immediate dismiss

## Technical Decisions

### 1. Multiplier Stacking Order
**Decision:** Apply second-try penalty before hot-streak bonus
**Rationale:** Maintains hot-streak reward even on second attempts (10 XP * 0.5 * 1.25 = 6 XP instead of 0)
**Alternative considered:** Disable hot-streak on second-try (rejected - too punishing)

### 2. XP Award Timing
**Decision:** Award XP synchronously on answer selection
**Rationale:** Immediate feedback, no race conditions, simpler code flow
**Alternative considered:** Batch XP on quiz completion (rejected - less engaging)

### 3. Level-up Auto-Dismiss Duration
**Decision:** 5 seconds
**Rationale:** Long enough to read level name + feature unlock, short enough to not block flow
**Alternative considered:** 3 seconds (too short), 10 seconds (too intrusive)

### 4. Level Name Prominence
**Decision:** text-3xl font-bold (larger than "Level X!" title)
**Rationale:** Career progression is primary reward; level number is just a metric
**Alternative considered:** Same size as title (rejected - less impactful)

## Known Limitations

1. **No XP awarded for wrong answers** - Even with hot-streak active, wrong answers give 0 XP (by design)
2. **Hot-streak state not reactive in InteractiveQuiz** - Uses getState() snapshot instead of subscription (acceptable - value changes rarely within single answer)
3. **Level-up overlay blocks during 5s window** - User can dismiss early but overlay is modal (acceptable - rare event, celebratory)

## Next Steps

**Immediate (within Phase 05):**
- Plan 02: Integrate interleaving detection with quiz sessions
- Plan 03: Add adaptive difficulty adjustments based on performance
- Plan 04: Connect badge unlock system to XP milestones

**Future Enhancements:**
- Add sound effects for level-up (low priority)
- Persist level-up history for "Recent Achievements" panel
- Add streak protection when level-up occurs (prevents double-reward)

## Self-Check

**Files Created:**
- ❌ None (modifications only)

**Files Modified:**
✅ /Users/Luki/medmaster/src/components/chapter/InteractiveQuiz.tsx - EXISTS
✅ /Users/Luki/medmaster/src/components/layout/AppShell.tsx - EXISTS
✅ /Users/Luki/medmaster/src/components/learning/LevelUpOverlay.tsx - EXISTS

**Commits:**
✅ b51b97e - feat(05-01): integrate XP award logic in InteractiveQuiz with second-try and hot-streak multipliers
✅ aad03c4 - feat(05-01): add level-up auto-dismiss and levelName prop in AppShell
✅ 6cd5244 - feat(05-01): enhance LevelUpOverlay to display level name prominently

**Self-Check: PASSED** ✅

All files exist, all commits present, all tasks complete.
