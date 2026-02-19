# Phase 3: Quality Elevation - Research

**Researched:** 2026-02-19
**Domain:** UI/UX Premium Design System, Component Architecture, Content Structure
**Confidence:** HIGH

## Summary

Phase 3 requires migrating MedMaster to a "Premium-Level" design standard through glassmorphism UI, Framer Motion animations, component unification (MerksatzBox, QuizQuestion), and freemium architecture (isPro logic). The research reveals that:

1. **Glassmorphism is production-ready** in modern browsers using Tailwind's native backdrop-blur utilities (already present in the codebase at `.card-glass` and QuizQuestion component)
2. **Framer Motion 12.34.1** (currently installed) provides robust animation capabilities with spring physics and easing presets optimized for premium feel
3. **MerksatzBox and QuizQuestion** components already implement glass-effect styling; Phase 3 focus shifts to _applying them consistently_ across all modules and upgrading their visual polish
4. **Amboss design philosophy** emphasizes **clarity-first information architecture** (no text walls, structured "learning bites")
5. **Apple Health aesthetic** uses generous white space, visual hierarchy, and soft translucent surfaces—aligns with existing design direction
6. **isPro logic architecture** requires store additions but NO paywall UI/Stripe calls (auth/data-only in Phase 3)

**Primary recommendation:** Focus Phase 3 on (1) systematic component upgrades (quiz, merksatz, layout), (2) consistent application of existing glass effects, (3) strategic Framer Motion additions to high-impact interactions, (4) content restructuring into "learning bites" following Amboss principles, (5) isPro plumbing in useStore without gating implementation.

<user_constraints>

## User Constraints (from CONTEXT.md)

### Locked Decisions

**1. DESIGN UPGRADE: Premium-Level Migration**
- Use **Glassmorphism** for UI components
- Use **Framer Motion** for transitions and animations
- Use **MerksatzBox.tsx** component consistently across all modules

**2. STRIPE ARCHITECTURE: isPro Logic**
- All content marked as 'Pro' in Phase 1/2 must be actively checked against `isPro` status
- Implement logic in `useStore.ts` to manage premium content access
- No paywall implementation yet, but architecture must be ready

**3. COMPONENT SYNC: QuizQuestion.tsx Template**
- Replace all old quiz structures with `QuizQuestion.tsx` template
- Include `tags` field for Schwachstellentrainer (weakness trainer)
- Ensure consistent XP integration via `useStore.ts`

**4. UI BENCHMARK: Amboss + Apple Health Standards**
- **Clarity:** Amboss-level information architecture (no text walls)
- **Aesthetics:** Apple Health-level visual polish
- **Content Structure:** Structured 'Learning Bites' instead of dense paragraphs

### Claude's Discretion (FREEDOM)

**Animation Timing and Easing**
- Choose appropriate Framer Motion variants and timing functions
- Optimize for smooth, premium feel without performance impact

**Glassmorphism Parameters**
- Balance blur, transparency, and backdrop effects
- Ensure readability and accessibility

**Content Chunking Strategy**
- Determine optimal 'Learning Bite' size
- Balance brevity with comprehensiveness

**Component Refactoring Sequence**
- Choose order of module upgrades
- Prioritize high-impact vs. low-effort refactors

### Deferred Ideas (OUT OF SCOPE)

Do NOT include in Phase 3:
- Paywall implementation (UI/UX only, no Stripe integration yet)
- TV/KFF/SEK module upgrades (BMS focus only)
- Database migration (TypeScript files stay in `src/data/`)
- Mobile app (web-responsive is sufficient)
- AI tutor integration (feature gate exists, but not activating)

</user_constraints>

<phase_requirements>

## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| QUAL-01 | Jedes Kapitel folgt dem BMSUnterkapitel.tsx-Pattern (SubchapterContent + QuizQuestion + MerksatzBox) | QuizQuestion.tsx already uses glassmorphism and Framer Motion; MerksatzBox supports 5 types (merke/altfragen/klinisch/achtung/tipp); BMSUnterkapitel.tsx integrates both. Pattern exists, needs systematic application. |
| QUAL-02 | BMS-Fragen haben 5 Optionen (A-E) gemäß MedAT-Format | QuizQuestion.tsx renders options A-E with proper labels; enforced via type system. No changes needed. |
| QUAL-03 | Altfragen sind mit MerksatzBox type="altfragen" markiert | MerksatzBox has dedicated altfragen type (red styling, 🎯 icon). BMSUnterkapitel shows example of inline altfrage handling. |
| QUAL-04 | Klinische Highlights verwenden MerksatzBox type="klinisch" ("By doctors for future doctors") | MerksatzBox has klinisch type (blue styling, 🏥 icon). Quote text "By doctors for future doctors" needs content audit. |
| QUAL-05 | Erklärungen zu Antworten sind auf Lehrbuch-Niveau (nicht nur "richtig/falsch") | QuizQuestion shows `explanation` field with full reveal after answer. Content quality depends on data, not component. Phase 3 focus: audit explanations. |
| QUAL-06 | Schwierigkeitsgrad (difficulty: "leicht" \| "mittel" \| "schwer") ist korrekt zugeordnet | QuizQuestion uses `difficultyMultiplier` from adaptive store. Phase 3 focus: verify data and frontend mapping. |

</phase_requirements>

## Standard Stack

### Core Libraries (Verified)

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Framer Motion | 12.34.1 | Animations, transitions, layout animations | Industry standard for React animations; supports spring physics, easing presets, GPU-optimized |
| Tailwind CSS | 4.1.18 | Utility-first CSS, glassmorphism | Native backdrop-blur, backdrop-filter support; already in use for glass effects |
| React | 19.2.0 | Component library | Current production build already in project |
| Zustand | 5.0.11 | State management | Lightweight, already handles user state; used for XP, streaks, isPro logic |

### Glassmorphism Implementation Status (ALREADY IN CODEBASE)

Glassmorphism base classes already exist and are in production use:

```css
/* From /src/index.css (lines 42-53) */
.card-glass {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.5);
}
.dark .card-glass {
  background: rgba(30, 41, 59, 0.6);
  border-color: rgba(255, 255, 255, 0.08);
}
```

**Active in components:**
- `QuizQuestion.tsx` (line 63): `backdrop-blur-md` + `bg-white/80` + border styling
- `TopBar.tsx`: `backdrop-blur-md`
- `BottomTabBar.tsx`: `backdrop-blur-xl`
- `Card` component: dark mode glass effect
- Multiple float overlays: `backdrop-blur-sm`

**Confidence:** HIGH — Component patterns are verified production code.

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Lucide React | 0.563.0 | Icon library | Already used for UI icons; complements MerksatzBox emoji icons |
| Class Variance Authority | 0.7.1 | Component styling variants | Enables flexible component variants (merke/altfragen/klinisch styling) |
| TailwindCSS Utilities | 4.1.18 | Layout, spacing, responsive | Native support for glassmorphism, animations, dark mode |
| React Router | 7.13.0 | Navigation | Already in use; Phase 3 doesn't change routing |
| React Markdown | 10.1.0 | Rich text rendering | For explanation and content rendering |

### Installation Status

All required libraries are **already installed** in `/package.json`. No npm additions needed for Phase 3 core stack.

## Architecture Patterns

### Recommended Project Structure (Current)

```
src/
├── components/
│   ├── chapter/
│   │   ├── MerksatzBox.tsx       # Premium highlight boxes (5 types)
│   │   ├── QuizQuestion.tsx      # Glassmorphic quiz with Framer Motion
│   │   ├── SelbstTest.tsx        # Test harness for questions
│   │   └── ContentVisualizer.tsx # Content + images
│   ├── layout/
│   │   ├── AppShell.tsx          # Main wrapper (Framer Motion animations)
│   │   ├── TopBar.tsx            # Glassmorphic header
│   │   └── BottomTabBar.tsx      # Glass-effect navigation
│   └── ui/
│       └── card.tsx              # Base card with glass effect
├── pages/
│   └── BMSUnterkapitel.tsx       # Current unified chapter template
├── data/
│   └── bmsKapitel/              # Content + question data
├── store/
│   └── useStore.ts              # State management (needs isPro addition)
└── lib/
    └── progression.ts            # Level/XP logic
```

### Pattern 1: Glassmorphism Component Structure

**What:** Consistent glass-effect styling via backdrop-blur + semi-transparent backgrounds with soft borders.

**When to use:** All primary UI containers (cards, overlays, navigation, highlights).

**Example (verified from QuizQuestion.tsx, lines 62-67):**

```typescript
// Source: /src/components/chapter/QuizQuestion.tsx
<motion.div
  className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md rounded-xl border border-slate-200 dark:border-white/10 p-6 shadow-sm dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:shadow-md transition-shadow"
  animate={isWrong ? { x: [0, -8, 8, -8, 8, 0] } : isCorrect ? { scale: [1, 1.02, 1] } : {}}
  transition={{ duration: isWrong ? 0.4 : 0.3, ease: "easeOut" }}
>
```

**Key techniques:**
- Transparency: `bg-white/80` (light mode), `bg-slate-900/60` (dark mode)
- Blur: `backdrop-blur-md` (12px blur standard)
- Border: `border-slate-200` + white/10 soft border for definition
- Shadows: Subtle outer + inset shadows for depth
- Hover state: `hover:shadow-md` for interactivity feedback

**Browser support:** Chrome, Safari, Edge, Firefox (with flag). Graceful degradation in older browsers.

### Pattern 2: Framer Motion Animation Sequencing

**What:** Use spring physics and easing to create premium micro-interactions without jank.

**When to use:** User feedback (right/wrong answers), state transitions, reveal sequences.

**Example (verified from QuizQuestion.tsx, lines 164-175):**

```typescript
// Source: /src/components/chapter/QuizQuestion.tsx (hint reveal)
<motion.div
  initial={{ opacity: 0, scale: 0.98, boxShadow: "0 0 0 0 rgba(251, 191, 36, 0)" }}
  animate={{ opacity: 1, scale: 1, boxShadow: i === hintIndex - 1 ? ["0 0 0 0 rgba(251, 191, 36, 0)", "0 0 16px 2px rgba(251, 191, 36, 0.25)", "0 0 0 0 rgba(251, 191, 36, 0)"] : "0 0 0 0 rgba(251, 191, 36, 0)" }}
  transition={{ duration: i === hintIndex - 1 ? 0.5 : 0.2 }}
>
```

**Key techniques:**
- Initial states: Set entry opacity/scale for smooth reveal
- Animate: Define target state with conditional easing (pulse glow on new hints)
- Transition: Spring-like durations (0.2-0.5s for micro-interactions, 0.3s default for page transitions)
- Chaining: Use `staggerChildren` for sequential reveals in lists

**Performance:** Transform-based animations only (`opacity`, `scale`, `x`, `y`, `rotate`). Avoid layout-triggering properties.

### Pattern 3: MerksatzBox Component Variants

**What:** Unified highlight component with 5 semantic types (merke/altfragen/klinisch/achtung/tipp).

**When to use:** Key content, exam tips, clinical context, warnings, study advice.

**Example (verified from MerksatzBox.tsx):**

```typescript
// Source: /src/components/chapter/MerksatzBox.tsx
interface MerksatzBoxProps {
  text: string;
  type?: "merke" | "altfragen" | "klinisch" | "achtung" | "tipp";
}

const config = {
  merke: { icon: "💡", label: "Merke", bg: "bg-amber-50 dark:bg-amber-900/20", ... },
  altfragen: { icon: "🎯", label: "Altfragen-Klassiker", bg: "bg-red-50 dark:bg-red-900/20", ... },
  klinisch: { icon: "🏥", label: "Klinischer Bezug", bg: "bg-blue-50 dark:bg-blue-900/20", ... },
  achtung: { icon: "⚠️", label: "Achtung", bg: "bg-orange-50 dark:bg-orange-900/20", ... },
  tipp: { icon: "✨", label: "Tipp", bg: "bg-purple-50 dark:bg-purple-900/20", ... },
};
```

**Semantic mapping:**
- `merke` (amber): Core concepts to memorize
- `altfragen` (red): Exam past questions
- `klinisch` (blue): Clinical relevance ("By doctors for future doctors")
- `achtung` (orange): Common mistakes/traps
- `tipp` (purple): Study strategies

### Pattern 4: Content Chunking into "Learning Bites"

**What:** Structure content as progressive sections instead of dense paragraphs (Amboss principle).

**When to use:** All chapter content rendering (BMSUnterkapitel).

**Guidance:**
- **Section heading** (h3): 3-5 words, clear focus
- **Opening sentence**: Answer "Why does this matter?"
- **Body**: 3-4 sentences max, one idea per paragraph
- **Key concept**: Bold or highlight using MerksatzBox
- **Clinical context**: Separate callout or klinisch MerksatzBox
- **Visual aid**: Diagram or chart if available

**Example (from actual BMSUnterkapitel pattern, lines 442-469):**

```typescript
// Instead of:
<p>A long paragraph with multiple concepts, clinically relevant details, and exam notes all mixed together...</p>

// Use:
<div className="space-y-4">
  <div>
    <h3 className="font-bold text-lg">Primärer Lymphknoten</h3>
    <p>Erstes lymphoides Organ, wo B-Lymphozyten entstehen und heranreifen.</p>
  </div>
  <MerksatzBox text="T-Lymphozyten = Thymus; B-Lymphozyten = Knochenmark" type="merke" />
  <div>
    <h3 className="font-bold text-lg">Klinische Relevanz</h3>
    <MerksatzBox text="Hodgkin-Lymphom: Riesenzellen im Lymphknoten → charakteristisches Histopathologie-Bild" type="klinisch" />
  </div>
</div>
```

### Anti-Patterns to Avoid

- **Dense text walls**: Break into sections. Max 150 words per visual block.
- **Blur without contrast**: Ensure backdrop blur doesn't obscure important text (use `bg-white/80+` not `/50`).
- **Animation jank**: Avoid animating non-transform properties; use `layout` prop only when necessary.
- **Missing glassmorphism in premium modules**: All primary interactions should show glass effect consistency.
- **QuizQuestion without Framer Motion**: All quiz responses must animate (correctness shake, wrong-answer shake).
- **MerksatzBox overuse**: Max 1-2 per section; reserve for _truly_ important points.
- **isPro checks everywhere**: Gate only premium features (advanced filters, detailed analytics); don't gate core learning content.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Glassmorphism blur effect | Custom CSS blur + background layering | Tailwind `backdrop-blur-*` + `bg-*/*` utilities | Native support in Tailwind 4.1+; browser-optimized; handles dark mode automatically |
| Animation timing curves | Custom easing via cubic-bezier strings | Framer Motion presets (`easeOut`, `easeInOut`, spring physics) | Presets are audited for premium feel; spring physics replicate real-world motion |
| Highlight box variants | 5 different component files | Single MerksatzBox with `type` prop + config dict | Reduces duplication; easier to maintain theme changes |
| Quiz immediate feedback | Manual state tracking + setTimeout logic | QuizQuestion component (already handles hint sequence, solution reveal, XP) | Avoids race conditions, async bugs; component owns its feedback UX |
| Content chunking | Manual HTML structure, varied spacing | Consistent section structure (heading + p + MerksatzBox in `space-y-4`) | Enforces clarity; easier to scan; consistent visual rhythm |
| isPro content gating | Conditional rendering scattered across components | Centralized `useStore().isPro` checks + Paywall wrapper component | Single source of truth; easier to add paywall UI later; clear intent |

**Key insight:** MedMaster already has solid patterns (glassmorphism, QuizQuestion, MerksatzBox). Phase 3 succeeds by _systematically applying_ what exists and avoiding reinvention.

## Common Pitfalls

### Pitfall 1: Glassmorphism Blur Obscuring Content

**What goes wrong:** Setting blur too high or background too transparent makes text illegible, especially in dark mode.

**Why it happens:** Designers often push blur slider higher for "premium" effect without testing readability.

**How to avoid:**
- Light mode: Use `bg-white/80+` (80% opacity minimum) + `backdrop-blur-md` (12px standard)
- Dark mode: Use `bg-slate-900/60+` + `backdrop-blur-md`
- Test: Verify text contrast ratio is ≥4.5:1 (WCAG AA)
- Fallback: Add subtle inner border or gradient edge to define container in low-contrast backgrounds

**Warning signs:**
- Text appears fuzzy or hard to focus on
- Color contrast fails accessibility checks
- Looks good in light theme but breaks in dark mode (or vice versa)

### Pitfall 2: Framer Motion Performance Issues (Jank on Lower-End Devices)

**What goes wrong:** Animating layout properties, colors, or shadows on frequently-updating components causes frame drops.

**Why it happens:** Engineers animate too many properties or trigger layout recalculations during animations.

**How to avoid:**
- **Use only transform-based properties**: `x`, `y`, `scale`, `rotate`, `opacity`
- **Avoid:** `width`, `height`, `left`, `top`, `padding`, `margin`, `color`, `background` in animations
- **Test on actual hardware**: Use Chrome DevTools Performance tab; aim for 60fps (16.67ms per frame)
- **Use `layout` prop sparingly**: Only for list reordering or grid changes; can cause layout thrashing

**Warning signs:**
- Animation stutters on mobile or lower-end laptops
- Performance Profiler shows dropped frames
- `Recalculate Style` or `Layout` tasks dominate Performance timeline

### Pitfall 3: Inconsistent Component Usage (Old Quiz Format Coexisting with New)

**What goes wrong:** Some chapters use old quiz format (callback-based) while others use QuizQuestion.tsx; inconsistent UX and XP tracking bugs.

**Why it happens:** Gradual migration without coordinating across modules; SelbstTest and InteractiveQuiz keep old patterns.

**How to avoid:**
- **Audit all quiz components** before Phase 3 start: Find all quiz-related files (SelbstTest, InteractiveQuiz, Kontrollfragen)
- **Define migration order**: Phase 3a (QuizQuestion in all modules), Phase 3b (optional: enhance SelbstTest)
- **Create deprecation notice**: Add console warning when old components are rendered
- **Verify XP tracking**: Ensure all quiz paths call `recordQuizAnswer()` and use `difficulty` multiplier

**Warning signs:**
- Quiz components with different UX (different button styles, feedback timing)
- Difficulty field not used consistently
- XP gain varies unexpectedly between quiz types

### Pitfall 4: Learning Bites Too Dense or Too Sparse

**What goes wrong:** Content broken into sections that are either too short (feels fragmented) or still too long (defeats purpose).

**Why it happens:** No clear definition of "bite size"; different authors chunk differently.

**How to avoid:**
- **Define target range**: 3-4 sentences per section, max 150 words per visual block
- **Test readability**: If you need to scroll >3x to see all content of a "bite", it's too dense
- **Use formatting consistently**: Heading (3-5 words) + body (3-4 sentences) + visual (MerksatzBox or diagram)
- **Amboss benchmark**: Compare against Amboss content structure in public previews

**Warning signs:**
- Users report "text walls" in feedback
- Mobile users need to scroll past multiple paragraphs for one concept
- MerksatzBox placement feels random (not at natural concept boundary)

### Pitfall 5: isPro Logic Incomplete (Auth/Gating Mismatch)

**What goes wrong:** `isPro` checks added to useStore but no actual gating UI; or gating logic diverges from auth system.

**Why it happens:** Phase 3 handles arch only; Phase 8 adds UI paywall. Disconnects happen in between.

**How to avoid:**
- **Document isPro contract**: Create `isPro` definition in `useStore.ts` with clear comment
  ```typescript
  // isPro: true if user has active subscription OR is in beta group
  // Phase 3: arch only. Phase 8: UI paywall wraps premium features.
  isPro: boolean;
  ```
- **Single check location**: All premium feature gating goes through `useStore((s) => s.isPro)`
- **Flag content in data**: Any content marked `pro: true` in Phase 1/2 must be checked against `isPro` at render
- **Test harness**: Create test route that toggles `setIsPro(true/false)` for manual QA

**Warning signs:**
- Inconsistent `isPro` values between store and auth system
- Some premium features gated, others not
- No clear data marking which content is pro vs free

## Code Examples

Verified patterns from official/production sources:

### Glassmorphism Card (Production Code)

```typescript
// Source: /src/components/chapter/QuizQuestion.tsx (lines 62-67)
// Production glassmorphism applied to quiz container
<motion.div
  className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md rounded-xl border border-slate-200 dark:border-white/10 p-6 shadow-sm dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:shadow-md transition-shadow"
>
```

**Breakdown:**
- `bg-white/80`: Light mode: 80% white background, 20% transparent (lets background show through)
- `dark:bg-slate-900/60`: Dark mode: 60% dark slate (lighter than full black to show background)
- `backdrop-blur-md`: 12px blur on background (Tailwind standard)
- `border border-slate-200 dark:border-white/10`: Soft border definition
- `shadow-sm`: Subtle outer glow
- `dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]`: Inset top highlight in dark mode
- `hover:shadow-md`: Interactive feedback

### Framer Motion Quiz Answer Feedback (Production Code)

```typescript
// Source: /src/components/chapter/QuizQuestion.tsx (lines 120-237)
{isAnswered && (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className={`ml-0 sm:ml-11 mt-4 p-4 rounded-lg border-l-4 backdrop-blur-sm ${
      isCorrect
        ? "bg-green-50/90 dark:bg-green-900/20 border-green-500"
        : "bg-red-50/90 dark:bg-red-900/20 border-red-500"
    }`}
  >
    {/* Icon + explanation rendered here */}
  </motion.div>
)}
```

**Pattern:**
- Initial hidden state: `opacity: 0, y: 8` (slightly below, invisible)
- Animate to visible: `opacity: 1, y: 0` (fade in, slide up)
- Easing: `easeOut` (starts fast, slows down) = natural deceleration feel
- Timing: 0.3s (quick enough for snappy feedback, slow enough to perceive)

### MerksatzBox Semantic Types (Production Code)

```typescript
// Source: /src/components/chapter/MerksatzBox.tsx
const config = {
  merke: {
    icon: "💡",
    label: "Merke",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    border: "border-amber-300 dark:border-amber-700",
    title: "text-amber-800 dark:text-amber-300",
    body: "text-amber-900 dark:text-amber-200",
  },
  altfragen: {
    icon: "🎯",
    label: "Altfragen-Klassiker",
    bg: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-300 dark:border-red-700",
    title: "text-red-800 dark:text-red-300",
    body: "text-red-900 dark:text-red-200",
  },
  klinisch: {
    icon: "🏥",
    label: "Klinischer Bezug",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-300 dark:border-blue-700",
    title: "text-blue-800 dark:text-blue-300",
    body: "text-blue-900 dark:text-blue-200",
  },
  // ... achtung, tipp configs follow same pattern
};

export function MerksatzBox({ text, type = "merke" }: MerksatzBoxProps) {
  const c = config[type];
  return (
    <div className={`relative ${c.bg} border ${c.border} rounded-xl p-4 my-6`}>
      <p className={`font-bold ${c.title} flex items-center gap-2`}>
        {c.icon} {c.label}
      </p>
      <p className={`${c.body} mt-1 text-sm leading-relaxed`} dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}
```

**Reusable pattern:** Config dictionary enables consistent styling, easy theme updates, semantic HTML.

### isPro State Management (New Architecture)

```typescript
// Source: Design recommendation for /src/store/useStore.ts
// Add to AppState interface:
interface AppState {
  // ... existing state
  isPro: boolean;
  setIsPro: (value: boolean) => void;
}

// Add to create() function:
isPro: false,
setIsPro: (value) => set({ isPro: value }),

// Usage in components:
const isPro = useStore((s) => s.isPro);
if (isPro) {
  // Show premium feature
} else {
  // Show paywall placeholder or free version
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Heavy shadow-based cards (Material Design) | Glassmorphism + soft shadows | 2023-2024 | Lighter, more premium feel; better for dark mode |
| Hard animation easing (linear/cubic) | Spring physics + easing presets | Framer Motion v5+ (2022) | Animations feel natural; reduced learning curve |
| Dense content blocks | Progressive disclosure + chunked sections | Health app trend (2023-2024) | Better scanability; reduced cognitive load |
| Separate quiz components (SelfTest, InteractiveQuiz) | Unified QuizQuestion.tsx template | MedMaster Phase 2 | Consistent UX; easier to add features (hints, difficulty) |
| Manual content gating per component | Centralized `isPro` check in store | Freemium trend (2024+) | Single source of truth; easier to add paywall |

**Deprecated/outdated:**
- **Material Design shadows**: Replaced by Tailwind's subtle shadows + glassmorphism blur
- **CSS-in-JS for animations**: Framer Motion declarative syntax is cleaner than keyframes
- **Quiz callbacks in page components**: QuizQuestion encapsulates feedback logic; cleaner composition

## Open Questions

1. **Content migration scope: Which chapters need content restructuring into "Learning Bites"?**
   - What we know: BMSUnterkapitel.tsx shows mixed patterns (some bio-kap1 already has section structure)
   - What's unclear: Should Phase 3 do full content audit, or is that deferred to Phase 4?
   - Recommendation: Phase 3a plans component upgrades (quiz, merksatz, layout); Phase 3b handles content restructuring prioritized by chapter size. Start with Biologie (largest, highest impact).

2. **"By doctors for future doctors" tagline: Is this locked for all klinisch boxes, or customizable per section?**
   - What we know: CONTEXT.md specifies clinical highlights use MerksatzBox type="klinisch"
   - What's unclear: Should tagline be hardcoded, data-driven, or configurable per box?
   - Recommendation: Keep generic label in component ("Klinischer Bezug"), allow content-driven customization in individual boxes if needed. Tagline is aspirational branding, not operational requirement.

3. **isPro feature gating: Which specific features count as "premium"?**
   - What we know: All content marked 'Pro' in Phase 1/2 must check `isPro`; no paywall UI in Phase 3
   - What's unclear: What content is marked pro? Are advanced features (Schwachstellentrainer, detailed analytics) pro-only?
   - Recommendation: Data audit in Phase 3 start (grep for `pro: true` markers); create feature matrix (free vs pro) before implementing gates.

4. **Learning Bite size: What is optimal section length for medical education?**
   - What we know: Amboss emphasizes "1-2 minute reads"; Apple Health uses generous spacing
   - What's unclear: For deep topics (e.g., immunology), can we keep bites to 3-4 sentences, or does that fragment understanding?
   - Recommendation: Benchmark against existing high-performing chapters (bio-kap1); test with 2-3 chapters as pilots; refine metrics based on user scroll depth, time-on-page analytics.

## Sources

### Primary (HIGH confidence)

- **Framer Motion v12.34.1 docs** - Verified transitions, easing, spring physics from installed version in package.json
- **Tailwind CSS v4.1.18 docs** - Native `backdrop-blur-*` and `bg-*/*` utilities verified in index.css and components
- **MedMaster production code** - QuizQuestion.tsx, MerksatzBox.tsx, BMSUnterkapitel.tsx verified as working implementations
- **Glassmorphism CSS patterns** - `.card-glass` class from `/src/index.css` verified in browser (lines 42-53)

### Secondary (MEDIUM confidence)

- [Tailwind CSS Backdrop Blur Docs](https://tailwindcss.com/docs/backdrop-blur) - Official utility documentation
- [Creating Glassmorphism Effects with Tailwind CSS - Epic Web Dev](https://www.epicweb.dev/tips/creating-glassmorphism-effects-with-tailwind-css) - Community verification of Tailwind glassmorphism approach
- [Framer Motion Transition Docs - Framer.com](https://www.framer.com/motion/transition/) - Official easing and timing documentation
- [Apple Design Resources - Apple Developer](https://developer.apple.com/design/resources/) - Official Apple design guidelines
- [Healthcare UI Design 2026 - Eleken](https://www.eleken.co/blog-posts/user-interface-design-for-healthcare-applications) - Current healthcare design trends

### Tertiary (Verified via multiple sources)

- [AMBOSS: Medical Knowledge Platform](https://www.amboss.com/int) - Product overview confirming information architecture approach
- [Designing the Knowledge Tool for Physicians - AMBOSS Careers](https://careers.amboss.com/blog/designing-the-knowledge-tool-for-physicians/) - Design philosophy verification
- [App Design for 2026: Trends, Techniques, and Tools - Sphinx JSC](https://sphinxjsc.com/blog/app-design-for-2026-trends-techniques-and-tools) - 2026 design trends consensus
- [Apple Health Redesign Case Study - Medium](https://medium.com/@cudzinovicam/apple-health-redesign-ui-ux-case-study-65401f78e0e9) - Visual hierarchy and white space principles

## Metadata

**Confidence breakdown:**
- **Glassmorphism & Tailwind:** HIGH - Already production code in repo; official docs verify patterns
- **Framer Motion:** HIGH - v12.34.1 installed; official docs + working examples in QuizQuestion.tsx
- **Component architecture:** HIGH - MerksatzBox, QuizQuestion, BMSUnterkapitel verified as working implementations
- **isPro architecture:** MEDIUM - Pattern recommendation based on Zustand best practices; needs data audit for content marking
- **Amboss/Apple Health principles:** MEDIUM - Verified via official sources; design philosophy interpretation may vary

**Research date:** 2026-02-19
**Valid until:** 2026-03-19 (30 days for stable tech stack; Tailwind/Framer Motion rarely break between minor versions)
**Reviewed:** Glassmorphism CSS, Framer Motion 12.x, component patterns, accessibility guidelines
