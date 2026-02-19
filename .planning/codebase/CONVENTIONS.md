# Coding Conventions

**Analysis Date:** 2026-02-19

## Naming Patterns

**Files:**
- Components: PascalCase (e.g., `QuizQuestion.tsx`, `ErrorBoundary.tsx`)
- Data/logic: camelCase (e.g., `bmsStorage.ts`, `kffStore.ts`, `useKeyboardShortcuts.ts`)
- Directories: kebab-case (e.g., `bms-kapitel`, `spezialthemen-chemie`)

**Functions:**
- camelCase for all functions (e.g., `handleSelectAnswer`, `generateSubchapterId`, `removeDuplicateSubchapters`)
- Prefix patterns:
  - `use*` for custom React hooks (e.g., `useKeyboardShortcuts`, `useQuizSessionStore`)
  - `handle*` for event handlers (e.g., `handleSelectAnswer`, `handleSecondTry`)
  - `load*`, `save*`, `delete*` for storage operations (e.g., `loadAllChapters`, `saveChapter`, `deleteChapter`)
  - `get*` for retrievers (e.g., `getProgress`, `getWeakSubtests`, `getCompletenessScore`)
  - `is*`, `has*` for boolean checks (e.g., `isAnswered`, `hasMoreHints`, `isCorrect`)

**Variables:**
- camelCase for all variables and constants
- SCREAMING_SNAKE_CASE only for true constants (e.g., `STORAGE_KEY`, `STORAGE_VERSION`, `MAX_OPTIONS`)
- Prefix for state setters not used; use `set` function from state management (Zustand)

**Types & Interfaces:**
- PascalCase for all types, interfaces, and type aliases (e.g., `Question`, `Kapitel`, `KFFState`, `SubtestProgress`, `WeaknessEntry`)
- Prefix `type` for exported type aliases (e.g., `export type KFFSubtestType = ...`)
- Generic type parameters: Single uppercase letter (T, K, V) or descriptive name (e.g., `Record<string, unknown>`)

## Code Style

**Formatting:**
- Tool: Prettier v3.4.2
- Configuration (`/.prettierrc`):
  - Semi-colons: enabled (`"semi": true`)
  - Quotes: double quotes (`"singleQuote": false`)
  - Tab width: 2 spaces (`"tabWidth": 2`)
  - Trailing commas: ES5 style (`"trailingComma": "es5"`)
  - Print width: 100 characters (`"printWidth": 100`)

**Linting:**
- Tool: ESLint v9.39.1
- Configuration: Flat config (`/eslint.config.js`)
- Extends:
  - `@eslint/js` recommended rules
  - `typescript-eslint` recommended rules
  - `eslint-plugin-react-hooks` flat recommended
  - `eslint-plugin-react-refresh` Vite plugin rules
- Target: ECMAScript 2020, React 19
- Files: `**/*.{ts,tsx}` (excludes `dist/`)

**TypeScript:**
- Target: ES2022
- Strict mode: enabled
- `noFallthroughCasesInSwitch`: enabled
- `noUncheckedSideEffectImports`: enabled
- Module resolution: `bundler`
- JSX: `react-jsx` (automatic runtime)

## Import Organization

**Order:**
1. React and framework imports (e.g., `import React`, `import { useState }`)
2. Third-party library imports (e.g., `framer-motion`, `lucide-react`, `zustand`)
3. Absolute path imports using `@/` alias (e.g., `@/components`, `@/data`, `@/lib`)
4. Relative imports (rare; prefer `@/` alias)

**Path Aliases:**
- `@/*` → `./src/*` (configured in `tsconfig.app.json`)
- Always use `@/` prefix for imports from `src/` directory
- Examples:
  - `import type { Kapitel } from "@/data/bmsKapitel/types"`
  - `import { supabase } from "@/lib/supabase"`
  - `import { useKFFStore } from "@/stores/kffStore"`

## Error Handling

**Patterns:**
- Try-catch blocks for operations that may throw (e.g., `localStorage` operations, file parsing)
- Always return a safe default on error (never throw from top-level functions)
- Log errors with context using `console.error` with emoji prefix and descriptive message
- Example from `src/lib/bmsStorage.ts`:
  ```typescript
  try {
    const existing = loadAllChapters();
    // ... operation logic
  } catch (error) {
    console.error("❌ Error saving chapter to localStorage:", error);
    throw error; // Only re-throw if caller must handle
  }
  ```
- For storage operations: Always return empty array/object rather than throw
  - `loadAllChapters()` returns `[]` on error, never `null` or undefined
  - `loadChaptersRaw()` returns `[]` on error

**Validation:**
- Type guards with explicit checks (e.g., `!!(ch && typeof ch === "object" && ch.id && ch.title && ch.subject)`)
- Nullable values checked before use: `value?.property` or `if (value) { ... }`

## Logging

**Framework:** `console` (native, no logger library)

**Patterns:**
- Use emoji prefixes for visual categorization:
  - `✅` success
  - `❌` error
  - `⚠️` warning
  - `🔍` search/scan operations
  - `📝` updates
  - `➕` additions
  - `📖` loading
  - `🔄` migration/transformation
  - `🧹` cleanup
  - `💡` hints/info
  - `💾` save operations
  - `📊` statistics
  - `ℹ️` generic info
- Location context: Include source function/module in brackets: `[loadAllChapters]`, `[saveSubchapter]`
- Example: `console.log('✅ [loadAllChapters] Loaded', validChapters.length, 'valid chapters');`
- Use `console.error` for errors, `console.warn` for warnings, `console.log` for info

**When to Log:**
- Operation start/completion (with operation details)
- Data validation failures (with reason)
- Migration steps and results
- Cleanup results with counts and IDs
- Never log sensitive data (user IDs in auth context, full objects with secrets)

## Comments

**When to Comment:**
- At the top of files: Module docstring explaining purpose (see `src/lib/bmsStorage.ts` lines 1-7)
- For complex functions: JSDoc comment block explaining parameters and return value
- For non-obvious logic: Inline comment explaining "why" not "what"
- For migration/cleanup logic: Inline comments explaining each step

**JSDoc/TSDoc:**
- Use for all exported functions and interfaces
- Format:
  ```typescript
  /**
   * Brief description of what it does
   *
   * More details if needed, including context
   */
  export function saveChapter(chapter: Kapitel): void {
    // ...
  }
  ```
- Include `@param` and `@returns` for critical functions
- Example from `src/lib/bmsStorage.ts`:
  ```typescript
  /**
   * Generate a unique ID for a subchapter
   * Format: {chapterId}-uk-{timestamp}-{random}
   */
  function generateSubchapterId(chapterId: string): string {
  ```

## Function Design

**Size:**
- Small, single-purpose functions (typically <50 lines, up to 150 for complex operations)
- Complex storage operations allowed to exceed due to error handling and validation needs
- Example: `src/lib/bmsStorage.ts` functions 24-28 lines (ID generation), 440-508 lines (duplicate removal with comprehensive logging)

**Parameters:**
- Use explicit parameters, not option objects when <3 params
- Use object parameter for functions with multiple optional parameters
- Type parameters explicitly (no `any`)
- Example: `function saveSubchapter(chapterId: string, subchapter: Unterkapitel, chapterData?: Partial<Kapitel>): void`

**Return Values:**
- Always specify return type (no implicit `any`)
- Use `void` if no return value
- Return safe defaults on error (e.g., `[]`, `{}`, `null`) rather than throwing
- Use type narrowing for optional returns: `function loadChapterById(id: string): Kapitel | undefined`

## Module Design

**Exports:**
- Named exports for functions, types, interfaces (e.g., `export function saveChapter`, `export type KFFSubtestType`)
- Default exports only for React components (rare; prefer named exports)
- Mark internal functions without `export` (e.g., `function generateSubchapterId`)

**Barrel Files:**
- Used for re-exporting aggregated data (e.g., `src/data/bms/biologie.ts` exports all biology question parts)
- Pattern: `export * from "./biologie_part1"` repeated for each part
- Location: Typically `index.ts` files (e.g., `src/data/bms/biologie.ts`)

**Immutability:**
- Use spread operator for shallow copies: `{ ...existing[index], ...newData }`
- Avoid direct mutations: `arr[i] = newValue` is acceptable for local arrays
- Map/Set operations: Create new Map/Set rather than mutate: `new Map([...existing])`
- Example: `const filtered = existing.filter((c) => c.id !== chapterId)` rather than `existing.splice(...)`

## State Management

**Pattern:** Zustand stores
- File location: `src/stores/*.ts`
- Example: `useKFFStore` in `src/stores/kffStore.ts`
- Structure:
  ```typescript
  interface StoreState {
    // Data properties
    progress: Record<...>;
    // Action methods
    recordResult: (param) => void;
  }
  export const useKFFStore = create<StoreState>()(
    persist(
      (set, get) => ({
        // Initial state + actions
      }),
      { name: "storage-key" }
    )
  );
  ```
- Persist middleware: Uses browser localStorage
- Getters: `get().propertyName`
- Setters: `set((state) => ({ ...state, updated: newValue }))`

---

*Convention analysis: 2026-02-19*
