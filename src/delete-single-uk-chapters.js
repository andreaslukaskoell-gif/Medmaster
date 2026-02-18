// Run this in browser console to delete chapters with only one subchapter
(async () => {
  const { loadAllChapters, deleteChapter } = await import('./lib/bmsStorage.ts');
  
  const allChapters = loadAllChapters();
  const singleSubchapterChapters = allChapters.filter(ch => (ch.unterkapitel || []).length === 1);
  
  console.log(`Found ${singleSubchapterChapters.length} chapter(s) with only one subchapter:`);
  singleSubchapterChapters.forEach(ch => {
    const uk = (ch.unterkapitel || [])[0];
    console.log(`  - ${ch.title} (${ch.id}): ${uk?.title || 'Untitled'}`);
  });
  
  if (singleSubchapterChapters.length > 0) {
    singleSubchapterChapters.forEach(ch => {
      deleteChapter(ch.id);
      console.log(`✅ Deleted: ${ch.title}`);
    });
    console.log(`✅ Deleted ${singleSubchapterChapters.length} chapter(s)`);
  } else {
    console.log('ℹ️ No chapters to delete');
  }
})();
