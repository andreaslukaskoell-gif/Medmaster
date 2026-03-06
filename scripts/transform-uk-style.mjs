#!/usr/bin/env node
/**
 * Transform UK style: merge contentExtended into content, strip meta-text.
 * Strategy: Line-by-line state machine — no regex on template literals.
 */

import { readFileSync, writeFileSync } from 'fs';

const filePath = process.argv[2];
if (!filePath) { console.error('Usage: node scripts/transform-uk-style.mjs <file>'); process.exit(1); }

const lines = readFileSync(filePath, 'utf8').split('\n');
const output = [];

// State machine
let state = 'normal'; // normal | in_content | in_extended | skip_extended
let contentStartLine = -1;
let contentLines = [];
let extendedLines = [];
let currentUkHasExtended = false;
let pendingContentInsert = -1; // line index where we'll insert transformed content

// Track which UKs we've seen content/contentExtended for
let ukCount = 0;
let transformCount = 0;

function transformContent(raw) {
  const lines = raw.split('\n');
  const result = [];
  let skipUntilHr = false;
  let inMedATFokus = false;
  let inZusammenfassung = false;

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();

    // Skip Einleitung section
    if (i === 0 && trimmed === '## Einleitung') { skipUntilHr = true; continue; }
    if (skipUntilHr) { if (trimmed === '---') skipUntilHr = false; continue; }

    // Skip "In diesem Kapitel lernst du:" blocks (until next ---)
    if (trimmed.startsWith('**In diesem Kapitel lernst du')) {
      while (i < lines.length - 1) { i++; if (lines[i].trim() === '---') break; }
      continue;
    }

    // Skip MedAT-Fokus
    if (trimmed === '## MedAT-Fokus') { inMedATFokus = true; continue; }
    if (inMedATFokus) {
      if (trimmed === '---') { inMedATFokus = false; continue; }
      if (trimmed.startsWith('## ')) { inMedATFokus = false; /* fall through to process */ }
      else continue;
    }

    // Skip Zusammenfassung
    if (trimmed.startsWith('## Zusammenfassung')) { inZusammenfassung = true; continue; }
    if (inZusammenfassung) continue;

    // Strip transition paragraphs
    if (trimmed.startsWith('**Bisher haben wir gesehen:**') || trimmed.startsWith('**Bisher:**')) {
      // Skip whole paragraph (until empty line)
      while (i < lines.length - 1 && lines[i + 1].trim() !== '') i++;
      continue;
    }

    // Strip "Worum geht es?" intro lines
    if (trimmed.startsWith('**Worum geht es?**') || trimmed.startsWith('**Warum für den MedAT relevant?**') || trimmed.startsWith('**Welche Fragen werden beantwortet?**')) continue;

    result.push(lines[i]);
  }

  // Clean leading/trailing empty lines
  while (result.length && result[0].trim() === '') result.shift();
  while (result.length && result[result.length - 1].trim() === '') result.pop();

  // Remove consecutive --- and trailing ---
  const cleaned = [];
  let lastHr = false;
  for (const l of result) {
    if (l.trim() === '---') { if (lastHr) continue; lastHr = true; }
    else if (l.trim() !== '') lastHr = false;
    cleaned.push(l);
  }
  while (cleaned.length && cleaned[cleaned.length - 1].trim() === '---') cleaned.pop();
  while (cleaned.length && cleaned[cleaned.length - 1].trim() === '') cleaned.pop();

  return cleaned.join('\n');
}

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trimStart();

  if (state === 'normal') {
    // Detect content: ` start
    if (trimmed.startsWith('content: `') && !trimmed.startsWith('contentExtended:')) {
      // Check if single-line (content: `...`,)
      if (trimmed.endsWith('`,')) {
        output.push(line);
        continue;
      }
      state = 'in_content';
      contentStartLine = output.length;
      contentLines = [];
      // Extract the part after content: `
      const after = trimmed.substring('content: `'.length);
      contentLines.push(after);
      output.push(line); // placeholder — will be replaced if extended exists
      continue;
    }

    // Detect contentExtended: ` start
    if (trimmed.startsWith('contentExtended: `')) {
      if (trimmed.endsWith('`,')) {
        // Single-line contentExtended — skip it
        continue;
      }
      state = 'in_extended';
      extendedLines = [];
      const after = trimmed.substring('contentExtended: `'.length);
      extendedLines.push(after);
      continue;
    }

    output.push(line);
    continue;
  }

  if (state === 'in_content') {
    // Check for closing backtick
    // The closing pattern is: ...text`, or just `,
    const backtickIdx = line.indexOf('`');
    // We need to check if this backtick closes the template literal
    // Simple heuristic: line ends with `, or `,(whitespace)
    if (backtickIdx >= 0 && /`\s*,/.test(line.substring(backtickIdx))) {
      // This line closes the content template literal
      const before = line.substring(0, backtickIdx);
      contentLines.push(before);
      output.push(line);
      state = 'normal';
      continue;
    }
    contentLines.push(line);
    output.push(line);
    continue;
  }

  if (state === 'in_extended') {
    const backtickIdx = line.indexOf('`');
    if (backtickIdx >= 0 && /`\s*,/.test(line.substring(backtickIdx))) {
      // Closing line of contentExtended
      const before = line.substring(0, backtickIdx);
      extendedLines.push(before);

      // Now we have the full contentExtended — transform it and replace content
      const extContent = extendedLines.join('\n');
      const transformed = transformContent(extContent);

      // Find and replace the content block in output
      // Go backwards from current output position to find `content: \``
      let contentLineIdx = -1;
      for (let j = output.length - 1; j >= 0; j--) {
        if (output[j].trimStart().startsWith('content: `')) {
          contentLineIdx = j;
          break;
        }
      }

      if (contentLineIdx >= 0) {
        // Find end of content block
        let contentEndIdx = contentLineIdx;
        for (let j = contentLineIdx + 1; j < output.length; j++) {
          const bl = output[j];
          const bi = bl.indexOf('`');
          if (bi >= 0 && /`\s*,/.test(bl.substring(bi))) {
            contentEndIdx = j;
            break;
          }
        }

        // Get indentation
        const indent = output[contentLineIdx].match(/^\s*/)[0];

        // Replace content block with transformed contentExtended
        const newContentLines = [`${indent}content: \`${transformed}\`,`];
        output.splice(contentLineIdx, contentEndIdx - contentLineIdx + 1, ...newContentLines);
        transformCount++;
      }

      state = 'normal';
      continue;
    }
    extendedLines.push(line);
    continue;
  }
}

// Handle duplicate contentExtended (some UKs had content listed twice as contentExtended)
// The second contentExtended without a preceding content would just be skipped

writeFileSync(filePath, output.join('\n'), 'utf8');
console.log(`Transformed ${transformCount} UKs in ${filePath}`);
