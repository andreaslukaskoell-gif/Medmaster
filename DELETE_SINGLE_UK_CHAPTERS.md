# Kapitel mit nur 1 Unterkapitel löschen

## Methode 1: Browser-Konsole (Empfohlen)

Öffne die Browser-Konsole (F12) und führe aus:

```javascript
// Lade die Funktionen
const { loadAllChapters, deleteChapter } = await import('/src/lib/bmsStorage.ts');

// Finde alle Kapitel mit nur 1 Unterkapitel
const allChapters = loadAllChapters();
const singleSubchapterChapters = allChapters.filter(ch => (ch.unterkapitel || []).length === 1);

console.log(`Gefunden: ${singleSubchapterChapters.length} Kapitel mit nur 1 Unterkapitel:`);
singleSubchapterChapters.forEach(ch => {
  const uk = (ch.unterkapitel || [])[0];
  console.log(`  - ${ch.title} (${ch.id}): ${uk?.title || 'Untitled'}`);
});

// Lösche alle
if (singleSubchapterChapters.length > 0) {
  singleSubchapterChapters.forEach(ch => {
    deleteChapter(ch.id);
    console.log(`✅ Gelöscht: ${ch.title}`);
  });
  console.log(`✅ ${singleSubchapterChapters.length} Kapitel gelöscht`);
} else {
  console.log('ℹ️ Keine Kapitel zum Löschen gefunden');
}
```

## Methode 2: Verwende die neue Funktion

```javascript
const { deleteChaptersWithSingleSubchapter } = await import('/src/lib/bmsStorage.ts');
const deleted = deleteChaptersWithSingleSubchapter();
console.log(`✅ ${deleted.length} Kapitel gelöscht:`, deleted);
```

## Was wird gelöscht?

- Alle Kapitel, die **genau 1 Unterkapitel** haben
- Kapitel mit 0 oder 2+ Unterkapiteln bleiben erhalten
