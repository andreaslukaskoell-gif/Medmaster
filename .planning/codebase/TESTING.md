# Testing Patterns

**Analysis Date:** 2026-02-19

## Test Framework

**Status:** Manual testing only - no automated test framework configured

**Important Note:**
- No Jest, Vitest, or other test runner is configured in `package.json`
- No test configuration files (`jest.config.js`, `vitest.config.ts`) present
- Testing is performed manually in browser console or via integration with dev tools

## Test File Organization

**Location:**
- Single test file found: `src/lib/bmsStorage.test.ts`
- Pattern: `.test.ts` suffix for test files
- Test files are NOT excluded from build (not in `tsconfig.exclude`)
- Tests are designed to run in browser console, not via test runner

**Naming:**
- Export test function with descriptive name: `export function testSubchapterPersistence()`
- Each test section numbered: `1️⃣ Test:`, `2️⃣ Test:`, etc.
- Test output includes emoji prefixes for easy scanning

## Test Structure

**Test execution pattern:**

```typescript
export function testSubchapterPersistence() {
  console.log('🧪 Testing Subchapter Persistence...');
  console.log('='.repeat(60));

  // 1. Clear/setup
  clearAllChapters();
  console.log('✅ Cleared existing chapters');

  // 2. Test case with assertion
  console.log('\n1️⃣ Test: Create chapter "Die Zelle"');
  const chapter1: Kapitel = { /* data */ };
  saveChapter(chapter1);
  const loaded1 = loadChaptersBySubject('biologie');
  const testChapter1 = loaded1.find(c => c.id === 'bio-kap-test');

  // 3. Manual assertion
  if (!testChapter1 || testChapter1.unterkapitel.length !== 1) {
    console.error('❌ FAIL: Chapter not created correctly');
    return false;
  }
  console.log('✅ PASS: Chapter created with 1 subchapter');

  // ... more test cases

  console.log('\n' + '='.repeat(60));
  console.log('✅ ALL TESTS PASSED!');
  return true;
}

// Auto-expose in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  window.testSubchapterPersistence = testSubchapterPersistence;
}
```

**Patterns:**
- Setup: Clear/initialize state before testing
- Execution: Perform operation (call function, save data)
- Assertion: Manual `if` statements checking results
- Reporting: Console log for each test step
- Return boolean: `true` all pass, `false` if any fail

## Assertion Style

**Manual assertions (no assertion library):**

```typescript
// Check array length
if (!testChapter2 || testChapter2.unterkapitel.length !== 2) {
  console.error('❌ FAIL: Second subchapter not added');
  console.error('   Expected 2 subchapters, got', testChapter2?.unterkapitel.length || 0);
  return false;
}

// Check property value
if (updatedUk1Check.content !== updatedUk1.content) {
  console.error('❌ FAIL: Subchapter not updated');
  return false;
}

// Check for existence
const uk1 = testChapter2.unterkapitel.find(uk => uk.title === 'Zellmembran');
if (!uk1 || !uk2) {
  console.error('❌ FAIL: One or both subchapters missing');
  return false;
}
```

**Assertion pattern:**
- Logical condition that must be true
- Error message on fail
- Early return with `false` to stop test
- No throw statements - use return value instead

## Test Data

**Test data creation (inline):**
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

**Patterns:**
- Create test data directly in test function
- Use realistic IDs and content (not just `test1`, `data2`)
- Fully initialize required properties to match types
- Use multiple test cases with different scenarios

**No factories or fixtures:** Test data is created inline for each test

## What IS Tested

**Based on `bmsStorage.test.ts`:**
- Persistence: Data survives save/load cycle
- Isolation: Updating one subchapter doesn't overwrite others
- Addition: Adding subchapters increments count correctly
- Uniqueness: All IDs are unique after operations
- Reload: Data persists across application reload simulation

**Testing approach:**
1. Create data structure
2. Save to storage (localStorage)
3. Load from storage
4. Verify structure matches exactly
5. Modify and repeat
6. Verify no side effects on other data

## What is NOT Tested

**Gaps in coverage:**
- No UI component testing
- No hook testing
- No store action testing (Zustand stores only manually tested in console)
- No error condition testing
- No async operation testing
- No performance/benchmark testing
- No accessibility testing
- No visual regression testing

**Type safety compensates:** TypeScript strict mode catches many errors at compile time

## Console-based Testing

**Running tests in browser:**
```javascript
// In browser console
testSubchapterPersistence()
// Output:
// 🧪 Testing Subchapter Persistence...
// ============================================================
// ✅ Cleared existing chapters
// 1️⃣ Test: Create chapter "Die Zelle"
// ✅ PASS: Chapter created with 1 subchapter
// ...
// ✅ ALL TESTS PASSED!
// true
```

**Development setup:**
- Tests are exposed on `window` object only in development
- Run `npm run dev` to start dev server
- Open browser console (F12)
- Call test function directly: `testSubchapterPersistence()`
- Return value indicates pass/fail

**Advantages of console testing:**
- Test real localStorage behavior
- Test actual data flow in browser environment
- No setup/teardown infrastructure needed
- Direct access to window/DOM APIs

**Disadvantages:**
- Manual invocation required
- No continuous integration
- No parallel test execution
- No coverage metrics
- Manual result inspection

## Test Coverage

**Estimated coverage:**
- `src/lib/bmsStorage.ts`: ~70% (persistence layer tested, error cases not)
- React components: 0% (no tests)
- Hooks/stores: 0% (no tests)
- Utilities: 0% (no tests)
- Overall: ~5% (only one small module tested)

**Why low coverage:**
- Manual console-based testing is effort-intensive
- No automated test infrastructure
- Focus on TypeScript compilation for type safety
- Testing happens manually during development/QA

## Testing Best Practices (When Tests ARE Written)

**Based on patterns in `bmsStorage.test.ts`:**

1. **Test one thing per test case**
   - Each numbered test has single clear assertion
   - Test `createChapter`, then separately `addSubchapter`, then `verifyPersistence`

2. **Test data isolation**
   - Always clear state first: `clearAllChapters()`
   - Don't rely on previous test state
   - Each test is independent

3. **Verify side effects**
   - After saving, reload and verify data still there
   - Verify updates don't overwrite other records
   - Check edge cases: empty arrays, duplicate IDs

4. **Clear reporting**
   - Every step logged: setup, execution, result
   - Emoji prefixes for quick scanning
   - Show expected vs actual values on failure

5. **Fail fast**
   - Return immediately on first failure
   - Don't continue testing after failure
   - Boolean return indicates overall result

## Common Issues & Patterns Observed

**localStorage quirks being tested:**
- Serialization/deserialization of complex objects
- Storage quota exceeded silently
- Corrupted data recovery
- Storage not available in some environments

**Pattern in storage code:**
```typescript
try {
  const raw = localStorage.getItem(BACKUP_INDEX_KEY);
  const index: Array<{ key: string; timestamp: string }> = raw ? JSON.parse(raw) : [];
  index.push({ key: backupKey, timestamp: now.toISOString() });
  localStorage.setItem(BACKUP_INDEX_KEY, JSON.stringify(index));
} catch (e) {
  console.warn('Could not update backup index', e);
}
```

The test validates this works correctly with real data.

## Recommendations for Future Testing

**If automated testing framework is added:**

1. Choose framework: Vitest (fast, Vite-native) or Jest (industry standard)
2. Configure in `package.json` and add config file
3. Add test scripts: `npm run test`, `npm run test:watch`, `npm run test:coverage`
4. Start with storage layer: `src/lib/*.test.ts`
5. Add component tests for critical UI: `QuizQuestion.test.tsx`, `MerksatzBox.test.tsx`
6. Use Zustand testing utilities for store tests
7. Mock API calls with MSW or simple jest.mock()
8. Aim for 70%+ coverage on critical paths

**Initial test infrastructure:**
- Install: `npm install -D vitest @testing-library/react @testing-library/jest-dom`
- Create `vitest.config.ts`
- Move existing `bmsStorage.test.ts` to use vitest syntax
- Add GitHub Actions workflow for CI

---

*Testing analysis: 2026-02-19*
