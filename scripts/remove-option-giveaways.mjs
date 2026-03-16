#!/usr/bin/env node
/**
 * Remove parenthetical giveaway explanations from biology pool option text.
 *
 * Rules:
 * - Only process option lines (indented strings inside arrays, NOT question text or explanation)
 * - Remove parentheticals that are >3 words (giveaway explanations)
 * - Keep short synonyms/abbreviations like (Cerebellum), (ATP), (DNA), (mRNA), (H₂O)
 * - Keep (= short synonym) if ≤3 words
 * - Skip biologiePoolOffiziellStyle.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const bmsDir = path.join(__dirname, '..', 'src', 'data', 'bms');

// Get all biologiePool files except OffiziellStyle
const files = fs.readdirSync(bmsDir)
  .filter(f => f.startsWith('biologiePool') && f.endsWith('.ts') && !f.includes('OffiziellStyle'))
  .sort();

console.log('Processing ' + files.length + ' files...');

function isOptionLine(line) {
  // Option lines are quoted strings (starting with ") inside arrays
  // Indented at least 4 spaces, just a quoted string with optional comma
  return /^\s{4,}"[^"]*"\s*,?\s*$/.test(line) && !line.includes('text:') && !line.includes('id:');
}

function isShortParenthetical(content) {
  const trimmed = content.trim();
  const words = trimmed.split(/\s+/);

  // Single word - always keep (synonym like Cerebellum, Chondrozyten)
  if (words.length <= 1) return true;

  // Abbreviation patterns - keep
  if (/^[A-ZÄÖÜ]{2,}$/.test(trimmed)) return true;

  // Keep if ≤2 words (e.g., "Vitamin D", "Typ I")
  if (words.length <= 2) return true;

  // "= something" with ≤3 words total
  if (trimmed.startsWith('= ') && words.length <= 3) return true;

  // ≤3 words AND no explanatory function words -> likely a name/synonym
  if (words.length <= 3) {
    const hasExplanatoryWords = /\b(mit|für|des|der|die|das|und|oder|von|im|am|an|als|bei|durch|über|unter|nach|vor|zu|zur|zum|eine|einer|einem|einen|wird|werden|ist|sind|hat|haben|kann|können)\b/i.test(trimmed);
    if (!hasExplanatoryWords) return true;
  }

  return false;
}

function cleanOptionLine(line) {
  const match = line.match(/^(\s*)"(.*)"(\s*,?\s*)$/);
  if (!match) return line;

  const [, indent, content, suffix] = match;

  // Process each parenthetical in the content
  const parenRegex = /\s*\(([^)]+)\)/g;
  let result = '';
  let lastIndex = 0;
  let matchParen;

  while ((matchParen = parenRegex.exec(content)) !== null) {
    const fullMatch = matchParen[0];
    const parenContent = matchParen[1];
    const beforeParen = content.substring(lastIndex, matchParen.index);

    if (isShortParenthetical(parenContent)) {
      result += beforeParen + fullMatch;
    } else {
      result += beforeParen;
    }
    lastIndex = matchParen.index + fullMatch.length;
  }
  result += content.substring(lastIndex);

  // Clean up any trailing whitespace inside the quotes
  result = result.trimEnd();

  if (result === content) return line;

  return indent + '"' + result + '"' + suffix;
}

let totalChanges = 0;

for (const file of files) {
  const filePath = path.join(bmsDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  let changes = 0;
  let bracketDepth = 0;

  const newLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Track bracket depth to know if we're in an array
    for (const ch of trimmed) {
      if (ch === '[') bracketDepth++;
      if (ch === ']') bracketDepth--;
    }

    // Only process lines inside arrays (bracket depth > 0) that look like option strings
    if (bracketDepth > 0 && isOptionLine(line)) {
      const cleaned = cleanOptionLine(line);
      if (cleaned !== line) {
        changes++;
        newLines.push(cleaned);
        continue;
      }
    }

    newLines.push(line);
  }

  if (changes > 0) {
    fs.writeFileSync(filePath, newLines.join('\n'), 'utf-8');
    console.log('  ' + file + ': ' + changes + ' options cleaned');
    totalChanges += changes;
  } else {
    console.log('  ' + file + ': no changes needed');
  }
}

console.log('\\nTotal: ' + totalChanges + ' option texts cleaned across ' + files.length + ' files.');
