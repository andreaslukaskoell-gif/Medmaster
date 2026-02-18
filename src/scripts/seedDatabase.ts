/**
 * Seed-Daten nach Supabase (einmalig ausführen)
 *
 * Liest BMS-Kapitel aus den TS-Daten (bmsKapitel) und KFF-Aufgaben aus
 * kffWortfluessigkeit, kffZahlenfolgen, kffImplikationen, figurenGenerator,
 * emotionenErkennen, emotionenRegulieren, sozialesEntscheiden, textverstaendnis
 * und schreibt sie in die Tabellen bms_chapters, bms_subchapters und kff_tasks.
 *
 * Voraussetzung: Service Role Key in .env (SUPABASE_SERVICE_ROLE_KEY) und
 * SUPABASE_URL bzw. VITE_SUPABASE_URL.
 *
 * Ausführung (aus Projektroot):
 *   npx tsx src/scripts/seedDatabase.ts
 * oder (mit ts-node):
 *   npx ts-node --esm -r tsconfig-paths/register src/scripts/seedDatabase.ts
 */

import { createClient } from '@supabase/supabase-js';
import { alleKapitel } from '../data/bmsKapitel/index';
import type { Kapitel } from '../data/bmsKapitel/types';
import { wortfluessigkeitWords } from '../data/kffWortfluessigkeit';
import { zahlenfolgenTasks } from '../data/kffZahlenfolgen';
import { implikationenTasks } from '../data/kffImplikationen';
import { figurenAufgaben } from '../data/figurenGenerator';
import { emotionenErkennenScenarios } from '../data/kffEmotionenErkennen';
import { emotionenRegulierenScenarios } from '../data/kffEmotionenRegulieren';
import { sozialesEntscheidenScenarios } from '../data/kffSozialesEntscheiden';
import { tvTexte } from '../data/kffTextverstaendnis';

// Env: Service Role umgeht RLS (nur für dieses Skript, Key nie im Frontend nutzen)
const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error(
    '❌ Fehlende Umgebungsvariablen. Bitte setzen:\n' +
      '  VITE_SUPABASE_URL oder SUPABASE_URL\n' +
      '  SUPABASE_SERVICE_ROLE_KEY (aus Supabase Dashboard → Settings → API)\n' +
      'Beispiel: SUPABASE_SERVICE_ROLE_KEY=xxx npx tsx src/scripts/seedDatabase.ts'
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey);

function difficultyNumToText(d: 1 | 2 | 3): 'leicht' | 'mittel' | 'schwer' {
  return d === 1 ? 'leicht' : d === 2 ? 'mittel' : 'schwer';
}

// --- BMS Chapters ---
async function seedBMSChapters(): Promise<{ chapters: number; subchapters: number }> {
  const chapters = alleKapitel as Kapitel[];
  if (chapters.length === 0) {
    console.log('⚠️ Keine BMS-Kapitel in den TS-Daten gefunden (alleKapitel leer).');
    return { chapters: 0, subchapters: 0 };
  }

  let subcount = 0;
  for (let i = 0; i < chapters.length; i++) {
    const ch = chapters[i];
    const chapterRow = {
      id: ch.id,
      title: ch.title,
      subject: ch.subject,
      icon: ch.icon || '📚',
      estimated_time: ch.estimatedTime || '',
      order_index: i,
      content: { unterkapitel: ch.unterkapitel || [] },
    };

    const { error: chErr } = await supabase.from('bms_chapters').upsert(chapterRow, { onConflict: 'id' });
    if (chErr) {
      console.error(`❌ bms_chapters ${ch.id}:`, chErr.message);
      continue;
    }

    const uks = ch.unterkapitel || [];
    for (let j = 0; j < uks.length; j++) {
      const uk = uks[j];
      const subRow = {
        id: uk.id,
        chapter_id: ch.id,
        title: uk.title,
        content: uk.content || '',
        order_index: j,
        lernziele: uk.lernziele || [],
        sections: uk.sections || [],
        merksätze: uk.merksätze || [],
        self_test: uk.selfTest || [],
      };
      const { error: subErr } = await supabase.from('bms_subchapters').upsert(subRow, { onConflict: 'id' });
      if (subErr) console.error(`❌ bms_subchapters ${uk.id}:`, subErr.message);
      else subcount++;
    }
  }

  console.log(`✅ BMS: ${chapters.length} Kapitel, ${subcount} Unterkapitel.`);
  return { chapters: chapters.length, subchapters: subcount };
}

// --- KFF Tasks (Tabelle: kff_tasks) ---
async function seedKFFTasks(): Promise<number> {
  const rows: { category: string; difficulty: string | null; data_json: object }[] = [];

  // Wortflüssigkeit
  for (const w of wortfluessigkeitWords) {
    rows.push({
      category: 'wortfluessigkeit',
      difficulty: difficultyNumToText(w.difficulty),
      data_json: w,
    });
  }

  // Zahlenfolgen
  for (const t of zahlenfolgenTasks) {
    rows.push({
      category: 'zahlenfolgen',
      difficulty: difficultyNumToText(t.difficulty),
      data_json: t,
    });
  }

  // Implikationen
  for (const t of implikationenTasks) {
    rows.push({
      category: 'implikationen',
      difficulty: difficultyNumToText(t.difficulty),
      data_json: t,
    });
  }

  // Figuren (FZAufgabe hat schon difficulty: leicht|mittel|schwer)
  for (const a of figurenAufgaben) {
    rows.push({
      category: 'figuren',
      difficulty: a.difficulty,
      data_json: a,
    });
  }

  // Emotionen Erkennen (Szenarien mit Fragen)
  for (const s of emotionenErkennenScenarios) {
    const d = (s as { difficulty?: number }).difficulty;
    rows.push({
      category: 'emotionen-erkennen',
      difficulty: d ? difficultyNumToText(d as 1 | 2 | 3) : null,
      data_json: s,
    });
  }

  // Emotionen Regulieren
  for (const s of emotionenRegulierenScenarios) {
    rows.push({
      category: 'emotionen-regulieren',
      difficulty: s.difficulty ? difficultyNumToText(s.difficulty as 1 | 2 | 3) : null,
      data_json: s,
    });
  }

  // Soziales Entscheiden
  for (const s of sozialesEntscheidenScenarios) {
    const d = (s as { difficulty?: number }).difficulty;
    rows.push({
      category: 'soziales-entscheiden',
      difficulty: d ? difficultyNumToText(d as 1 | 2 | 3) : null,
      data_json: s,
    });
  }

  // Textverständnis (pro Text mit Fragen)
  for (const tv of tvTexte) {
    rows.push({
      category: 'textverstaendnis',
      difficulty: tv.difficulty ? difficultyNumToText(tv.difficulty) : null,
      data_json: tv,
    });
  }

  if (rows.length === 0) {
    console.log('⚠️ Keine KFF-Aufgaben zum Einfügen.');
    return 0;
  }

  // Batch-Insert (kff_tasks hat id UUID, kein Upsert – bei erneutem Lauf entstehen Doppelte)
  const BATCH = 500;
  let inserted = 0;
  for (let i = 0; i < rows.length; i += BATCH) {
    const chunk = rows.slice(i, i + BATCH);
    const { data, error } = await supabase.from('kff_tasks').insert(chunk).select('id');
    if (error) {
      console.error('❌ kff_tasks batch insert:', error.message);
      for (const row of chunk) {
        const { error: e } = await supabase.from('kff_tasks').insert(row);
        if (!e) inserted++;
      }
    } else {
      inserted += (data?.length ?? chunk.length);
    }
  }

  console.log(`✅ KFF: ${inserted} Aufgaben in kff_tasks.`);
  return inserted;
}

async function main() {
  console.log('🌱 Seed startet…\n');

  const bms = await seedBMSChapters();
  const kff = await seedKFFTasks();

  console.log('\n🎉 Seed abgeschlossen.');
  console.log(`   BMS: ${bms.chapters} Kapitel, ${bms.subchapters} Unterkapitel`);
  console.log(`   KFF: ${kff} Aufgaben`);
}

main().catch((err) => {
  console.error('❌ Script-Fehler:', err);
  process.exit(1);
});
