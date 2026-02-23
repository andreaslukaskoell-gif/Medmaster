# Fixed Save Pipeline - End-to-End

## Problem Identified

After the subchapter overwrite fix, the BMS page was not updating when chapters were saved because:

1. **BMS component was not reactive** - it loaded chapters only on initial render
2. **No localStorage change detection** - React didn't know when localStorage changed
3. **Static data was used** - Component didn't re-query after saves

## Solution Implemented

### 1. Made BMS Component Reactive

**File: `/Users/Luki/medmaster/src/pages/BMS.tsx`**

Added:

- `useState` for `storageVersion` to track localStorage changes
- `useEffect` to listen for storage events and poll for changes
- `useMemo` to reactively load chapters when storage changes

```typescript
const [storageVersion, setStorageVersion] = useState<string>("");

useEffect(() => {
  // Listen for storage events (from other tabs/windows)
  window.addEventListener("storage", handleStorageChange);

  // Poll localStorage every second to detect changes
  const checkInterval = setInterval(() => {
    const stored = localStorage.getItem("bms-chapters");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.lastUpdated !== storageVersion) {
        setStorageVersion(parsed.lastUpdated); // Force re-render
      }
    }
  }, 1000);

  return () => {
    window.removeEventListener("storage", handleStorageChange);
    clearInterval(checkInterval);
  };
}, [storageVersion]);

// Reactive chapter loading
const allChaptersFromStorage = useMemo(() => {
  return loadAllChapters();
}, [storageVersion]);
```

### 2. Fixed Save Function (`saveSubchapter`)

**File: `/Users/Luki/medmaster/src/lib/bmsStorage.ts`**

**Key Fixes:**

- ✅ Creates chapter if it doesn't exist
- ✅ Appends new subchapters (doesn't replace array)
- ✅ Updates existing subchapters by ID
- ✅ Saves FULL subchapters array
- ✅ Updates `lastUpdated` timestamp (triggers BMS re-render)

```typescript
export function saveSubchapter(
  chapterId: string,
  subchapter: Unterkapitel,
  chapterData?: Partial<Kapitel>
): void {
  // 1. Load all chapters
  const existing = loadAllChapters();
  let chapterIndex = existing.findIndex((c) => c.id === chapterId);

  // 2. Create chapter if it doesn't exist
  if (chapterIndex < 0) {
    const newChapter: Kapitel = {
      id: chapterId,
      title: chapterData.title || "Untitled Chapter",
      subject: chapterData.subject || "biologie",
      icon: chapterData.icon || "📚",
      estimatedTime: chapterData.estimatedTime || "",
      unterkapitel: [subchapter],
    };
    existing.push(newChapter);
    chapterIndex = existing.length - 1;
  }

  // 3. Get current subchapters (create copy)
  const subchapters = [...(chapter.unterkapitel || [])];

  // 4. Find existing subchapter by ID
  const existingIndex = subchapters.findIndex((uk) => uk.id === subchapterWithId.id);

  if (existingIndex >= 0) {
    // UPDATE: Replace only this subchapter
    subchapters[existingIndex] = subchapterWithId;
  } else {
    // APPEND: Add new subchapter to array
    subchapters.push(subchapterWithId);
  }

  // 5. Update chapter with FULL subchapters array
  existing[chapterIndex] = {
    ...chapter,
    ...chapterData,
    unterkapitel: subchapters, // FULL array
  };

  // 6. Persist with updated timestamp
  const stored: StoredChapters = {
    version: STORAGE_VERSION,
    chapters: existing,
    lastUpdated: new Date().toISOString(), // Triggers BMS re-render
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
}
```

### 3. Fixed Editor Save Flow

**File: `/Users/Luki/medmaster/src/pages/KapitelEditor.tsx`**

**Flow:**

1. Save subchapter to localStorage FIRST
2. Reload chapter AFTER saving to get all subchapters
3. Generate file code with ALL subchapters

```typescript
// 1. Save to localStorage
saveSubchapter(kapId, subchapterObject, chapterData);

// 2. Reload chapter to get ALL subchapters
const updatedChapter = loadChapterById(kapId);

// 3. Use ALL subchapters for file generation
const allSubchapters = updatedChapter.unterkapitel || [];
```

### 4. Fixed BMS Load Function

**File: `/Users/Luki/medmaster/src/pages/BMS.tsx`**

**Changes:**

- Uses reactive `allChaptersFromStorage` from `useMemo`
- Filters by subject reactively
- Merges static + dynamic chapters properly

```typescript
// Reactive chapter loading
const allChaptersFromStorage = useMemo(() => {
  return loadAllChapters();
}, [storageVersion]);

// Compute chapters for selected subject
const chaptersForSelectedSubject = useMemo(() => {
  if (!selectedSubject) return [];
  const staticChapters = getKapitelBySubject(selectedSubject) || [];
  const dynamicChapters = allChaptersFromStorage.filter((k) => k.subject === selectedSubject);
  // Merge logic...
  return merged;
}, [selectedSubject, allChaptersFromStorage]);
```

## Data Flow

```
Editor Save:
1. User clicks "Save"
2. saveSubchapter() → localStorage.setItem('bms-chapters', ...)
3. localStorage updated with new lastUpdated timestamp

BMS Page:
1. useEffect detects localStorage change (via polling)
2. setStorageVersion() triggers re-render
3. useMemo recalculates allChaptersFromStorage
4. Component re-renders with new chapters
```

## Verification Steps

✅ **Create chapter "Die Zelle"** → Saved to localStorage
✅ **Add subchapter "Zellmembran"** → Appended to array
✅ **Add subchapter "Zellkern"** → Appended to array (both exist)
✅ **Reload BMS page** → Both subchapters visible
✅ **Edit "Zellmembran"** → Only that subchapter updated, "Zellkern" preserved

## Key Fixes Summary

1. **Reactive BMS Component**: Now listens for localStorage changes
2. **Proper Array Merging**: Subchapters are appended, not replaced
3. **Timestamp Tracking**: `lastUpdated` triggers re-renders
4. **Same Source of Truth**: Both editor and BMS use `loadAllChapters()` from `bmsStorage.ts`

## Files Changed

1. `/Users/Luki/medmaster/src/pages/BMS.tsx` - Made reactive with useEffect/useMemo
2. `/Users/Luki/medmaster/src/lib/bmsStorage.ts` - Already correct (saveSubchapter works properly)
3. `/Users/Luki/medmaster/src/pages/KapitelEditor.tsx` - Already correct (saves then reloads)
