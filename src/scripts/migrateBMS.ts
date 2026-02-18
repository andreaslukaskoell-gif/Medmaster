/**
 * Migration Script: localStorage → Supabase
 * 
 * Migriert alle BMS-Kapitel aus localStorage (Key: bms-chapters) nach Supabase.
 * 
 * Nutzung:
 * 1. Stelle sicher, dass Supabase konfiguriert ist (.env.local)
 * 2. Öffne Browser-Konsole auf /bms
 * 3. Führe aus: await window.migrateBMSChapters()
 * 
 * Oder: Importiere diese Funktion in eine Page und rufe sie auf.
 */

import { loadAllChapters } from '@/lib/bmsStorage';
import { supabase } from '@/lib/supabase';
import type { Kapitel, Unterkapitel } from '@/data/bmsKapitel/types';

interface MigrationResult {
  success: boolean;
  chaptersMigrated: number;
  subchaptersMigrated: number;
  errors: string[];
  skipped: string[];
}

/**
 * Migriert alle Kapitel von localStorage zu Supabase
 */
export async function migrateBMSChaptersToSupabase(): Promise<MigrationResult> {
  const result: MigrationResult = {
    success: true,
    chaptersMigrated: 0,
    subchaptersMigrated: 0,
    errors: [],
    skipped: [],
  };

  const client = supabase;
  if (!client) {
    result.success = false;
    result.errors.push('Supabase nicht konfiguriert');
    return result;
  }

  try {
    console.log('🚀 [migrateBMS] Starting migration from localStorage to Supabase...');

    const chapters = loadAllChapters();
    if (chapters.length === 0) {
      console.warn('⚠️ [migrateBMS] No chapters found in localStorage');
      result.errors.push('Keine Kapitel in localStorage gefunden');
      result.success = false;
      return result;
    }

    console.log(`📚 [migrateBMS] Found ${chapters.length} chapters to migrate`);

    const { data: { user } } = await client.auth.getUser();
    if (!user) {
      const errorMsg = 'Nicht eingeloggt. Bitte zuerst einloggen.';
      console.error('❌ [migrateBMS]', errorMsg);
      result.errors.push(errorMsg);
      result.success = false;
      return result;
    }

    // 3. Migriere jedes Kapitel
    for (const chapter of chapters) {
      try {
        console.log(`🔄 [migrateBMS] Migrating chapter: ${chapter.title} (${chapter.id})`);

        // Bereite Kapitel-Daten für Supabase vor
        const chapterData = {
          id: chapter.id,
          title: chapter.title,
          subject: chapter.subject,
          icon: chapter.icon || '📚',
          estimated_time: chapter.estimatedTime || '',
          order_index: 0, // Kann später angepasst werden
          content: {
            unterkapitel: chapter.unterkapitel || [],
          },
        };

        // Upsert Kapitel (insert or update)
        const { error: chapterError } = await client
          .from('bms_chapters')
          .upsert(chapterData, {
            onConflict: 'id',
          });

        if (chapterError) {
          const errorMsg = `Fehler beim Speichern von Kapitel ${chapter.id}: ${chapterError.message}`;
          console.error('❌ [migrateBMS]', errorMsg);
          result.errors.push(errorMsg);
          result.skipped.push(chapter.id);
          continue;
        }

        result.chaptersMigrated++;

        // 4. Migriere alle Unterkapitel
        if (chapter.unterkapitel && chapter.unterkapitel.length > 0) {
          for (let i = 0; i < chapter.unterkapitel.length; i++) {
            const subchapter = chapter.unterkapitel[i];
            
            try {
              const subchapterData = {
                id: subchapter.id,
                chapter_id: chapter.id,
                title: subchapter.title,
                content: subchapter.content || '',
                order_index: i,
                lernziele: subchapter.lernziele || [],
                sections: subchapter.sections || [],
                merksätze: subchapter.merksätze || [],
                self_test: subchapter.selfTest || [],
              };

              const { error: subError } = await client
                .from('bms_subchapters')
                .upsert(subchapterData, {
                  onConflict: 'id',
                });

              if (subError) {
                const errorMsg = `Fehler beim Speichern von Unterkapitel ${subchapter.id}: ${subError.message}`;
                console.error('❌ [migrateBMS]', errorMsg);
                result.errors.push(errorMsg);
                continue;
              }

              result.subchaptersMigrated++;
            } catch (subErr) {
              const errorMsg = `Fehler bei Unterkapitel ${subchapter.id}: ${subErr instanceof Error ? subErr.message : String(subErr)}`;
              console.error('❌ [migrateBMS]', errorMsg);
              result.errors.push(errorMsg);
            }
          }
        }

        console.log(`✅ [migrateBMS] Migrated chapter ${chapter.title} with ${chapter.unterkapitel?.length || 0} subchapters`);
      } catch (chapterErr) {
        const errorMsg = `Fehler bei Kapitel ${chapter.id}: ${chapterErr instanceof Error ? chapterErr.message : String(chapterErr)}`;
        console.error('❌ [migrateBMS]', errorMsg);
        result.errors.push(errorMsg);
        result.skipped.push(chapter.id);
      }
    }

    console.log(`🎉 [migrateBMS] Migration complete!`);
    console.log(`📊 [migrateBMS] Results:`, {
      chapters: result.chaptersMigrated,
      subchapters: result.subchaptersMigrated,
      errors: result.errors.length,
      skipped: result.skipped.length,
    });

    if (result.errors.length > 0) {
      console.warn('⚠️ [migrateBMS] Some errors occurred:', result.errors);
      result.success = false;
    }

    return result;
  } catch (error) {
    const errorMsg = `Migration fehlgeschlagen: ${error instanceof Error ? error.message : String(error)}`;
    console.error('❌ [migrateBMS]', errorMsg);
    result.errors.push(errorMsg);
    result.success = false;
    return result;
  }
}

/**
 * Prüft, ob Migration bereits durchgeführt wurde
 */
export async function checkMigrationStatus(): Promise<{
  localStorageCount: number;
  supabaseCount: number;
  needsMigration: boolean;
}> {
  const localStorageChapters = loadAllChapters();
  const client = supabase;
  if (!client) {
    return { localStorageCount: localStorageChapters.length, supabaseCount: 0, needsMigration: false };
  }
  try {
    const { data, error } = await client
      .from('bms_chapters')
      .select('id', { count: 'exact' });

    const supabaseCount = error ? 0 : (data?.length || 0);
    const localStorageCount = localStorageChapters.length;

    return {
      localStorageCount,
      supabaseCount,
      needsMigration: localStorageCount > 0 && supabaseCount === 0,
    };
  } catch (error) {
    console.error('Error checking migration status:', error);
    const fallbackCount = loadAllChapters().length;
    return {
      localStorageCount: fallbackCount,
      supabaseCount: 0,
      needsMigration: false,
    };
  }
}
