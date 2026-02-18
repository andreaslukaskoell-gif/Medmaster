/**
 * Stale-While-Revalidate: BMS Chapters
 *
 * 1. Zeigt sofort gecachte Daten aus localStorage (falls vorhanden)
 * 2. Lädt im Hintergrund von Supabase und aktualisiert Cache + State
 * 3. Bei Fehler/Offline: Cache bleibt sichtbar, kein Error-Screen solange Daten da sind
 */

import { loadBMSChaptersFromSupabase } from './supabaseBMS';
import type { Kapitel } from '@/data/bmsKapitel/types';

const CACHE_KEY = 'bms-chapters-cache';
const CACHE_VERSION = '2.0.0';

export interface BMSChaptersResult {
  chapters: Kapitel[];
  source: 'cache' | 'supabase' | 'cache-then-supabase';
  error: string | null;
  isRevalidating: boolean;
}

function readCache(): Kapitel[] | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed?.chapters && Array.isArray(parsed.chapters) && parsed.chapters.length > 0) {
      return parsed.chapters as Kapitel[];
    }
  } catch (e) {
    console.warn('[BMS] Cache read failed:', e);
  }
  return null;
}

function writeCache(chapters: Kapitel[]): void {
  try {
    const data = {
      version: CACHE_VERSION,
      chapters,
      lastUpdated: new Date().toISOString(),
      source: 'supabase-cache',
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn('[BMS] Cache write failed:', e);
  }
}

/**
 * Stale-While-Revalidate: zuerst Cache (sofort), dann Supabase (im Hintergrund).
 * Gibt initial cache zurück falls vorhanden; ruft dann revalidate() auf.
 */
export async function loadBMSChaptersSWR(
  onChapters: (chapters: Kapitel[], source: 'cache' | 'supabase') => void,
  onError: (error: string | null) => void,
  onRevalidating: (revalidating: boolean) => void
): Promise<void> {
  const cached = readCache();

  // 1. Stale: sofort Cache anzeigen
  if (cached && cached.length > 0) {
    onChapters(cached, 'cache');
    onError(null);
  }

  // 2. Revalidate: Supabase laden
  onRevalidating(true);
  try {
    const chapters = await loadBMSChaptersFromSupabase();
    if (chapters.length > 0) {
      writeCache(chapters);
      onChapters(chapters, 'supabase');
      onError(null);
    } else {
      // Keine Daten in Supabase – nur Fehler setzen wenn auch kein Cache
      if (!cached || cached.length === 0) {
        onError('Keine Kapitel in Supabase gefunden.');
      }
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Fehler beim Laden von Supabase';
    console.error('[BMS] Supabase load failed:', err);
    if (!cached || cached.length === 0) {
      onError(message);
    }
    // Bei Cache: Fehler nicht anzeigen, Cache bleibt
  } finally {
    onRevalidating(false);
  }
}
