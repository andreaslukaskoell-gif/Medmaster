# Coding Conventions

**Analysis Date:** 2026-02-19

## Naming Patterns

**Files:**
- React components: PascalCase (e.g., `MerksatzBox.tsx`, `QuizQuestion.tsx`, `StatCard.tsx`)
- Utility functions: camelCase (e.g., `chapterOptimizer.ts`, `bmsStorage.ts`, `optimizeChapterContent.ts`)
- Store/hook files: camelCase with descriptive names (e.g., `useStore.ts`, `useSyncStatus.ts`, `kffStore.ts`)
- Page components: PascalCase matching route names (e.g., `BMS.tsx`, `Dashboard.tsx`, `Simulation.tsx`)
- UI components: PascalCase (e.g., `button.tsx`, `card.tsx` in `src/components/ui/`)

**Functions:**
- camelCase for all function names: `saveChapter()`, `getKapitelBySubject()`, `recordQuizAnswer()`
- Prefix with verb for action functions: `create*`, `load*`, `save*`, `optimize*`, `record*`, `generate*`
- Prefix with `is` or `get` for query functions: `isAnswered`, `getProgress()`, `hasMoreHints`
- Async functions explicitly named with async context: `optimizeAllChaptersWithAudit()`, `loadAllChapters()`

**Variables:**
- camelCase for standard variables: `selectedOption`, `isAnswered`, `hintIndex`
- UPPERCASE_SNAKE_CASE for constants: `STORAGE_KEY`, `BACKUP_INDEX_KEY`, `FALLBACK_HINT`, `ALL_SUBTESTS`
- Prefix booleans with `is`, `has`, `should`, `can`: `isCorrect`, `hasMoreHints`, `shouldShowInterleavingOverlay`
- Descriptive names over abbreviations: `correctIndex` not `ci`, `subchapterTitle` not `st`

**Types:**
- PascalCase for interfaces and types: `OptimizationAudit`, `KFFState`, `Kapitel`, `Unterkapitel`
- Props interfaces end with `Props`: `QuizQuestionProps`, `MerksatzBoxProps`, `StatCardProps`
- Avoid single-letter generics in non-generic contexts; use descriptive names: `Record<string, ChapterProgress>` not `Record<K, V>`

## Code Style

**Formatting:**
- Prettier configuration:
  - 2-space indentation
  - Semicolons required
  - Double quotes for strings
  - 100-character line width
  - Trailing commas in ES5+ (objects, arrays)
- File: `.prettierrc`

**Linting:**
- ESLint with TypeScript support
- ESLint config: `eslint.config.js`
- Base configs: `@eslint/js`, `typescript-eslint`, `react-hooks`, `react-refresh`
- No custom overrides detected - uses recommended configs

**TypeScript:**
- Strict mode enabled: `"strict": true`
- Target: ES2022
- JSX: react-jsx
- No unchecked side-effect imports: `"noUncheckedSideEffectImports": true`
- No fallthrough cases in switch: `"noFallthroughCasesInSwitch": true`

## Import Organization

**Order (following codebase pattern):**
1. React imports: `import { useState } from "react"`
2. Third-party UI/routing: `import { useNavigate } from "react-router-dom"`
3. Icon library: `import { Dna, Atom, ... } from "lucide-react"`
4. Component imports: `import { Card } from "@/components/ui/card"`
5. Type imports: `import type { Kapitel } from "@/data/bmsKapitel/types"`
6. Utility imports: `import { getKapitelBySubject } from "@/data/bmsKapitel"`
7. Hook/store imports: `import { useStore } from "@/store/useStore"`
8. Local relative imports: typically avoided in favor of `@/` alias

**Path Aliases:**
- `@/*` maps to `src/*` (configured in `tsconfig.json`)
- Use alias for all imports: `import { Button } from "@/components/ui/button"`
- Never use relative paths like `../../utils` - always prefer `@/`

**Naming in imports:**
- Import specific items: `import { cn } from "@/lib/utils"`
- Namespace imports for many items: `import * as React from "react"` or explicit multi-line
- Type-only imports: `import type { Kapitel } from "@/data/bmsKapitel/types"`
- Optional: rename on import to avoid conflicts: `import { useStore as _useStore } from "@/store/useStore"` (seen in BMS.tsx for safety)

## Error Handling

**Patterns observed:**

1. **Try-catch with logging:**
   ```typescript
   try {
     const result = riskyOperation();
     return result;
   } catch (err) {
     console.warn(`⚠️ Operation failed for "${itemName}", Original kept:`, err);
     return fallbackValue;
   }
   ```

2. **Silent failure with fallback:**
   ```typescript
   try {
     window.localStorage.setItem(name, value);
   } catch {
     // QuotaExceeded or Storage disabled - silently fail
   }
   ```

3. **Error message extraction:**
   ```typescript
   const errMsg = err instanceof Error ? err.message : String(err);
   ```

4. **Type validation before operation:**
   ```typescript
   if (!content || typeof content !== 'string') {
     return content; // Return safely
   }
   ```

**Conventions:**
- Always catch and handle errors, never let them bubble up silently
- Log warnings with emoji prefixes for visibility: `⚠️`, `❌`, `✅`, `🚀`
- Provide context in error messages: include resource name, operation attempted
- Return sensible defaults on error: `[]` for arrays, `{}` for objects, original value for updates

## Logging

**Framework:** console (native browser API)

**Patterns:**
- Development logging with emoji prefixes for scanning: `console.log('🧪 Testing...')`, `console.log('💾 Backup created')`
- Warning logs for recoverable errors: `console.warn('⚠️ Error message')`
- Error logs for critical failures: `console.error('❌ Error message')`
- Include context: function name, resource being processed, timestamp info
- Avoid logging sensitive data (no API keys, no auth tokens)

**Example from codebase:**
```typescript
console.log('🚀 [optimizeAllChaptersWithAudit] Starting comprehensive optimization...');
console.log(`📚 Found ${chapters.length} chapters...`);
console.warn(`⚠️ Optimierung fehlgeschlagen für Unterkapitel "${uk.title}", Original beibehalten:`, err);
```

## Comments

**When to comment:**
- Non-obvious algorithm logic
- Browser-specific workarounds or quirks
- Important architectural decisions
- Warnings about side effects
- Explain "why", not "what" (code shows what it does)

**JSDoc/TSDoc:**
- Used for public function/type interfaces
- Document parameters, return values, and exceptions
- Example from codebase:
  ```typescript
  /**
   * Creates a backup of chapters before optimization.
   * Backups are NEVER overwritten: each backup gets a unique key with timestamp.
   */
  export function createBackup(chapters: Kapitel[]): string {
  ```

- Interface properties documented inline:
  ```typescript
  interface OptimizationAudit {
    /** True if chapter was skipped due to error */
    skipped?: boolean;
    /** Error message when skipped */
    error?: string;
  }
  ```

## Function Design

**Size:**
- Keep functions focused (single responsibility)
- Utility functions typically 10-50 lines
- React components often 100-250 lines when including JSX

**Parameters:**
- Use object destructuring for multiple parameters (seen in all component props)
  ```typescript
  export function QuizQuestion({ question, questionNumber, onAnswerChange }: QuizQuestionProps)
  ```
- Optional parameters use `?:` syntax: `optional?: string`
- Provide sensible defaults: `type = "merke"`, `size = "default"`

**Return values:**
- Explicit return types on public functions
- Example: `function createDefaultProgress(): Record<KFFSubtestType, SubtestProgress>`
- React components implicitly return JSX.Element

## Module Design

**Exports:**
- Named exports for utilities: `export function saveChapter() {}`
- Named exports for components: `export function MerksatzBox() {}`
- Default exports for page/route components: `export default function Dashboard() {}`
- Type exports: `export type OptimizationReport = { ... }`

**Barrel Files:**
- Used for data organization: `src/data/bmsKapitel/biologie.ts` aggregates questions
- Not used for component exports (prefer named imports from specific files)
- Example: `/src/data/bmsKapitel/index.ts` would export from subject files

**Organization patterns:**
- One main component per file
- Colocate related types and interfaces at file top
- Utility functions in dedicated `utils/` files
- Stores in `store/` or `stores/` directories
- Keep related utilities together: `chapterOptimizer.ts`, `optimizeChapterContent.ts`

## Constants and Configuration

**Storage keys:**
- Descriptive, prefixed format: `STORAGE_KEY`, `BACKUP_INDEX_KEY`, `medmaster-storage`
- Defined near top of file with comment if behavior is non-obvious

**Configuration objects:**
- Const objects for variant/state mappings:
  ```typescript
  const config = {
    merke: { icon: "💡", label: "Merke", bg: "bg-amber-50", ... },
    altfragen: { icon: "🎯", label: "Altfragen-Klassiker", ... },
  };
  ```

**Tailwind classes:**
- Use `cn()` utility from `@/lib/utils` to merge class strings
- Store variant mappings in config objects, not scattered in JSX
- Apply dynamic classes via template literals in `className` prop

---

*Convention analysis: 2026-02-19*
