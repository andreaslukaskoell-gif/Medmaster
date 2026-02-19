# Testing Patterns

**Analysis Date:** 2026-02-19

## Test Framework

**Runner:**
- No test runner currently configured (Jest, Vitest, or Playwright not in package.json)
- Manual testing only

**Test Environment:**
- Browser console-based testing for client-side code
- Example: `src/lib/bmsStorage.test.ts` exports test functions for manual console execution

**Run Commands:**
```bash
npm run build    # TypeScript compilation + Vite build
npm run lint     # ESLint validation
npm run dev      # Development server with HMR
```

**Note:** No automated test execution. Testing is manual via browser console or by running exported test functions.

## Test File Organization

**Location:**
- Co-located with source code: `src/lib/bmsStorage.test.ts` sits next to `src/lib/bmsStorage.ts`
- Not in separate test directory

**Naming:**
- Pattern: `{module}.test.ts`
- Example: `bmsStorage.test.ts`

**Structure:**
- Test functions exported and available for manual invocation
- Example from `src/lib/bmsStorage.test.ts` (lines 10-147):
  ```typescript
  export function testSubchapterPersistence() {
    console.log('🧪 Testing Subchapter Persistence...');
    // ... test steps
    return true; // or false on failure
  }
  
  // Auto-register for browser console access
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    // @ts-ignore
    window.testSubchapterPersistence = testSubchapterPersistence;
  }
  ```

## Test Structure

**Suite Organization:**
- Single test function per file (not Jest describe/it blocks)
- Name: `test{Feature}()` (e.g., `testSubchapterPersistence`)
- Steps labeled with numbered emojis: `1️⃣`, `2️⃣`, `3️⃣`, etc.

**Patterns:**

**Setup:**
```typescript
// Clear state
clearAllChapters();
console.log('✅ Cleared existing chapters');
```

**Assertion:**
```typescript
if (!testChapter1 || testChapter1.unterkapitel.length !== 1) {
  console.error('❌ FAIL: Chapter not created correctly');
  return false;
}
console.log('✅ PASS: Chapter created with 1 subchapter');
```

**Verification:**
```typescript
const uk1 = testChapter2.unterkapitel.find(uk => uk.title === 'Zellmembran');
if (!uk1) {
  console.error('❌ FAIL: Subchapter missing');
  return false;
}
console.log('✅ PASS: Subchapter found');
```

**Teardown:**
- Not typically needed; state is cleared at test start
- Tests verify persistence, so no cleanup between steps

## Mocking

**Framework:** None (no external mock library)

**Patterns:**

**localStorage Mocking:**
- Use actual localStorage in browser environment
- In tests, operations interact with real browser localStorage
- Clear before tests: `clearAllChapters()` calls `localStorage.removeItem(STORAGE_KEY)`

**Type Assertions:**
```typescript
const chapter: Kapitel = { /* ... */ };  // Strong typing prevents many errors
```

**What to Mock:**
- Database calls (localStorage interaction is tested, not mocked)
- External API calls (Supabase integration not in test scope)

**What NOT to Mock:**
- localStorage operations (test them directly)
- Core logic (type safety handles most issues)

## Fixtures and Factories

**Test Data:**

From `src/lib/bmsStorage.test.ts` (lines 20-36):
```typescript
const chapter1: Kapitel = {
  id: 'bio-kap-test',
  title: 'Die Zelle',
  subject: 'biologie',
  icon: '🔬',
  estimatedTime: '',
  unterkapitel: [
    {
      id: 'bio-kap-test-uk-1',
      title: 'Zellmembran',
      content: 'Die Zellmembran umschließt die Zelle...',
      lernziele: [],
      sections: [],
      merksätze: [],
      selfTest: []
    }
  ]
};
```

**Factory Pattern:**
- Create test objects inline in test functions
- Use spread syntax to clone/modify: `{ ...uk1, content: 'Updated content' }`

**Location:**
- Fixtures defined within test function (not separate factory file)

## Coverage

**Requirements:** Not enforced

**Strategy:**
- Manual testing focuses on critical paths
- Storage operations fully tested: `testSubchapterPersistence()` covers 6 scenarios
- Type safety via TypeScript provides static guarantees

## Test Types

**Unit Tests:**
- Scope: Individual functions (e.g., `saveSubchapter`, `loadAllChapters`)
- Approach: Direct function invocation with test data
- No isolation of dependencies (integration-style)
- Example: `testSubchapterPersistence()` tests save/load round-trip

**Integration Tests:**
- Scope: Operations that span multiple functions (e.g., save→load→verify)
- Approach: Full workflow from storage operation through retrieval
- Uses actual localStorage
- Example from `src/lib/bmsStorage.test.ts`:
  - Test 1: Create chapter
  - Test 2: Add subchapter
  - Test 3: Verify both exist
  - Test 4: Update one, verify other preserved
  - Test 5: Reload from storage
  - Test 6: Verify unique IDs

**E2E Tests:**
- Framework: Not used
- Manual testing in browser sufficient for current scope

## Common Patterns

**Async Testing:**
- No async/await in storage tests (localStorage is synchronous)
- Example: `loadAllChapters()` is sync, no `.then()` or `await` needed

**Error Testing:**

From `src/lib/bmsStorage.test.ts` (lines 95-98):
```typescript
if (!testChapter3 || testChapter3.unterkapitel.length !== 2) {
  console.error('❌ FAIL: Update overwrote other subchapter');
  return false;
}
```

**State Verification:**
```typescript
const testChapter1 = loaded1.find(c => c.id === 'bio-kap-test');
if (!testChapter1 || testChapter1.unterkapitel.length !== 1) {
  console.error('❌ FAIL: Chapter not created correctly');
  return false;
}
```

## Invocation

**Manual Browser Console:**

1. Open browser DevTools (F12)
2. Navigate to development app (after `npm run dev`)
3. Call in console:
   ```javascript
   testSubchapterPersistence()
   ```
4. Output in console shows all steps with emoji-prefixed status

**Expected Output:**

```
🧪 Testing Subchapter Persistence...
============================================================
1️⃣ Test: Create chapter "Die Zelle"
✅ Cleared existing chapters
✅ PASS: Chapter created with 1 subchapter
   Subchapter: Zellmembran

2️⃣ Test: Add second subchapter "Zellkern"
✅ PASS: Second subchapter added
   Subchapters: Zellmembran, Zellkern

...

============================================================
✅ ALL TESTS PASSED!
============================================================
```

**Debugging Failed Tests:**
1. Check console output for specific failing step
2. Example error: `❌ FAIL: Update overwrote other subchapter`
3. Inspect localStorage: `JSON.parse(localStorage.getItem('bms-chapters'))`
4. Verify function logic matches expectations

## Current Test Coverage

**Tested:**
- Chapter creation and persistence (`saveChapter`)
- Subchapter addition without overwriting (`saveSubchapter`)
- Data reload from storage (`loadAllChapters`, `loadChaptersBySubject`)
- Unique ID verification
- Round-trip save/load cycle

**Not Tested:**
- Error conditions (corrupt localStorage data)
- Migration functions (`migrateSubchapterIds`)
- Duplicate removal operations
- Deletion operations
- All edge cases in complex logic

**Adding Tests:**
1. Create new `.test.ts` file co-located with source
2. Export function named `test{Feature}()`
3. Use console logging with emoji prefixes
4. Register in browser window if needed
5. Document invocation method

---

*Testing analysis: 2026-02-19*
