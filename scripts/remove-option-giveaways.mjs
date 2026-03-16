#!/usr/bin/env node
/**
 * Remove parenthetical giveaway explanations from biology pool option text.
 * Parses the file to find option arrays (arrays of exactly 5 quoted strings with
 * nothing else in them) and cleans only those strings.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const bmsDir = path.join(__dirname, '..', 'src', 'data', 'bms');

const files = fs.readdirSync(bmsDir)
  .filter(f => f.startsWith('biologiePool') && f.endsWith('.ts') && !f.includes('OffiziellStyle'))
  .sort();

console.log('Processing ' + files.length + ' files...');

function isShortParenthetical(content) {
  const trimmed = content.trim();
  const words = trimmed.split(/\s+/);
  if (words.length <= 1) return true;
  if (words.length <= 2) return true;
  if (trimmed.startsWith('= ') && words.length <= 3) return true;
  return false;
}

function cleanOptionText(text) {
  // Step 1: Remove long parenthetical explanations, keep short synonyms
  const parenRegex = /\s*\(([^)]+)\)/g;
  let result = '';
  let lastIndex = 0;
  let m;

  while ((m = parenRegex.exec(text)) !== null) {
    const fullMatch = m[0];
    const parenContent = m[1];
    const beforeParen = text.substring(lastIndex, m.index);

    if (isShortParenthetical(parenContent)) {
      result += beforeParen + fullMatch;
    } else {
      result += beforeParen;
    }
    lastIndex = m.index + fullMatch.length;
  }
  result += text.substring(lastIndex);

  // Step 2: Remove trailing explanatory text after a kept parenthetical
  result = result.replace(/(\([^)]+\))\s+(als|mit|für|am|im|und|der|die|das|des|durch|über|nach|vom|von|bei)\b.*$/, '$1');
  result = result.replace(/(\([^)]+\))\s*[,–—]\s+\w.*$/, '$1');

  return result.trimEnd();
}

/**
 * Find all bracket-delimited arrays that contain exactly 5 strings and nothing else.
 * Returns the positions of those strings for modification.
 */
function findOptionArrays(content) {
  const allArrays = [];

  // Find every [ in the content and try to parse it as a 5-string array
  for (let i = 0; i < content.length; i++) {
    if (content[i] !== '[') continue;

    // Try to parse this as a simple array of quoted strings
    let j = i + 1;
    let strings = [];
    let valid = true;

    while (j < content.length) {
      const ch = content[j];

      // Skip whitespace and commas
      if (ch === ' ' || ch === '\n' || ch === '\r' || ch === '\t' || ch === ',') {
        j++;
        continue;
      }

      // End of array
      if (ch === ']') {
        break;
      }

      // Start of a string
      if (ch === '"') {
        const strStart = j + 1; // position after opening "
        j++;
        let strContent = '';
        while (j < content.length && content[j] !== '"') {
          if (content[j] === '\\') {
            strContent += content[j];
            j++;
            if (j < content.length) {
              strContent += content[j];
              j++;
            }
          } else {
            strContent += content[j];
            j++;
          }
        }
        // j is at closing "
        if (j < content.length) {
          strings.push({ start: strStart, end: j, text: strContent });
          j++; // skip closing "
        } else {
          valid = false;
          break;
        }
        continue;
      }

      // Any other character means this isn't a pure string array
      valid = false;
      break;
    }

    if (valid && strings.length === 5) {
      allArrays.push(strings);
    }
  }

  return allArrays;
}

function processFile(content) {
  const optionArrays = findOptionArrays(content);
  const modifications = [];

  for (const strings of optionArrays) {
    for (const s of strings) {
      const cleaned = cleanOptionText(s.text);
      if (cleaned !== s.text) {
        modifications.push({
          start: s.start,
          end: s.end,
          replacement: cleaned
        });
      }
    }
  }

  // Apply in reverse order
  let result = content;
  for (let k = modifications.length - 1; k >= 0; k--) {
    const mod = modifications[k];
    result = result.substring(0, mod.start) + mod.replacement + result.substring(mod.end);
  }

  return { result, changes: modifications.length };
}

let totalChanges = 0;

for (const file of files) {
  const filePath = path.join(bmsDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  const { result, changes } = processFile(content);

  if (changes > 0) {
    fs.writeFileSync(filePath, result, 'utf-8');
    console.log('  ' + file + ': ' + changes + ' options cleaned');
    totalChanges += changes;
  } else {
    console.log('  ' + file + ': no changes needed');
  }
}

console.log('\nTotal: ' + totalChanges + ' option texts cleaned across ' + files.length + ' files.');
