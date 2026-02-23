#!/usr/bin/env npx tsx
// Run with: npx tsx scripts/extract-bms-data.mjs
// Extracts all BMS chapter data into a single JSON file for the playground

import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { alleKapitel } from '../src/data/bmsKapitel/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, '..', 'bms-playground-data.json');

const data = {};
let totalUK = 0;

for (const kap of alleKapitel) {
  if (!data[kap.subject]) data[kap.subject] = [];

  for (const uk of kap.unterkapitel) {
    totalUK++;
    const wordCount = uk.content ? uk.content.split(/\s+/).filter(Boolean).length : 0;

    data[kap.subject].push({
      id: uk.id,
      title: uk.title,
      kapitelId: kap.id,
      kapitelTitle: kap.title,
      subject: kap.subject,
      words: wordCount,
      stichworte: uk.stichworte || [],
      merksaetzeCount: (uk.merksätze || []).length,
      merksaetze: uk.merksätze || [],
      lernziele: uk.lernziele || [],
      selfTestCount: (uk.selfTest || []).length,
      selfTest: uk.selfTest || [],
      hasAltfrage: !!uk.altfrage,
      altfrage: uk.altfrage || null,
      hasKlinBezug: !!uk.klinischerBezug,
      klinischerBezug: uk.klinischerBezug || '',
      hasDiagram: !!uk.diagram,
      diagram: uk.diagram || '',
      content: uk.content,
    });
  }
}

// Build summary stats
const stats = {};
for (const [subject, uks] of Object.entries(data)) {
  const totalWords = uks.reduce((sum, uk) => sum + uk.words, 0);
  const under800 = uks.filter(uk => uk.words < 800).length;
  const noMerksaetze = uks.filter(uk => uk.merksaetzeCount === 0).length;
  const noStichworte = uks.filter(uk => uk.stichworte.length === 0).length;
  const noSelfTest = uks.filter(uk => uk.selfTestCount === 0).length;

  stats[subject] = {
    count: uks.length,
    totalWords,
    avgWords: Math.round(totalWords / uks.length),
    under800,
    noMerksaetze,
    noStichworte,
    noSelfTest,
  };
}

const output = {
  _generated: new Date().toISOString(),
  _stats: stats,
  _totalUnterkapitel: totalUK,
  subjects: data,
};

writeFileSync(outPath, JSON.stringify(output, null, 2), 'utf-8');

// Print summary
console.log(`\n=== BMS Data Extraction Complete ===\n`);
console.log(`Output: ${outPath}`);
console.log(`Total Unterkapitel: ${totalUK}\n`);

for (const [subject, s] of Object.entries(stats)) {
  console.log(`${subject.toUpperCase()}: ${s.count} UKs | ${s.totalWords} words (avg ${s.avgWords}) | ${s.under800} under 800w | ${s.noMerksaetze} no Merksätze | ${s.noStichworte} no Stichworte | ${s.noSelfTest} no SelfTest`);
}
console.log('');
