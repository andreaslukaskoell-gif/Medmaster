# Subchapter Persistence Verification

## Fixed Implementation

### Data Model

```typescript
interface Kapitel {
  id: string;
  title: string;
  subject: "biologie" | "chemie" | "physik" | "mathematik";
  icon: string;
  estimatedTime: string;
  unterkapitel: Unterkapitel[]; // Array of subchapters
}

interface Unterkapitel {
  id: string; // Unique ID: {chapterId}-uk-{timestamp}-{random}
  title: string;
  content: string;
  // ... other fields
}
```

### Save Logic (`saveSubchapter` in `bmsStorage.ts`)

**Key Rules:**

1. **If subchapter.id does NOT exist** → APPEND to `chapter.unterkapitel[]`
2. **If subchapter.id DOES exist** → UPDATE only that subchapter in the array
3. **NEVER replace the whole array** → Always merge/append

**Implementation:**

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
    // Create new chapter
    existing.push(newChapter);
    chapterIndex = existing.length - 1;
  }

  // 3. Get current subchapters array (create copy)
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
    unterkapitel: subchapters, // Set FULL array
  };

  // 6. Persist to localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
}
```

### Editor Logic (`KapitelEditor.tsx`)

**Flow:**

1. Check if chapter exists
2. Save subchapter to localStorage FIRST
3. Reload chapter AFTER saving to get all subchapters
4. Generate file code with ALL subchapters

```typescript
// 1. Save to localStorage
saveSubchapter(kapId, subchapterObject, chapterData);

// 2. Reload chapter to get ALL subchapters
const updatedChapter = loadChapterById(kapId);

// 3. Use ALL subchapters for file generation
const allSubchapters = updatedChapter.unterkapitel || [];
```

## Test Scenario

### Step 1: Create Chapter "Die Zelle"

- Input: Chapter title "Die Zelle", Subchapter "Zellmembran"
- Save
- **Expected:** Chapter created with 1 subchapter

### Step 2: Add Second Subchapter "Zellkern"

- Input: Same chapter title "Die Zelle", Subchapter "Zellkern"
- Save
- **Expected:** Chapter now has 2 subchapters: ["Zellmembran", "Zellkern"]

### Step 3: Reload Page

- Reload browser
- **Expected:** Both subchapters still exist

### Step 4: Edit "Zellmembran"

- Edit content of "Zellmembran"
- Save
- **Expected:** "Zellmembran" updated, "Zellkern" unchanged

## Verification Checklist

- [x] `saveSubchapter` appends new subchapters (doesn't replace array)
- [x] `saveSubchapter` updates existing subchapters by ID
- [x] Editor reloads chapter after saving
- [x] File generation uses ALL subchapters from reloaded chapter
- [x] localStorage persists FULL subchapters array
- [x] Page reload restores ALL subchapters

## Data Structure After Saving Two Subchapters

```typescript
{
  id: "bio-kap3",
  title: "Die Zelle",
  subject: "biologie",
  icon: "🔬",
  estimatedTime: "",
  unterkapitel: [
    {
      id: "bio-kap3-uk-1737123456789-abc123",
      title: "Zellmembran",
      content: "...",
      // ...
    },
    {
      id: "bio-kap3-uk-1737123567890-def456",
      title: "Zellkern",
      content: "...",
      // ...
    }
  ]
}
```

## Key Fixes Applied

1. **Fixed `saveSubchapter`**: Now properly appends to array instead of replacing
2. **Fixed Editor**: Reloads chapter after saving to get all subchapters
3. **Fixed File Generation**: Uses reloaded chapter data with all subchapters
4. **Added Error Handling**: Creates chapter if it doesn't exist in localStorage
