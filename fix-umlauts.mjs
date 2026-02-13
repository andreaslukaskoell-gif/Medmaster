import fs from 'fs';
import path from 'path';

function getAllTsFiles(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...getAllTsFiles(full));
    else if (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx')) results.push(full);
  }
  return results;
}

function fixUmlauts(content) {
  return content.split('\n').map(line => {
    // Skip import/export lines (file paths, identifiers)
    if (/^\s*(import|export)\s/.test(line)) return line;

    // ===== STEP 1: oe → ö =====
    // Consonant + oe + letter (but NOT after c: Coenzym, Coefficient)
    line = line.replace(/([bcdfghjklmnprstvwxyzBDFGHJKLMNPRSTVWXYZ])oe([a-zäöüß])/g, '$1ö$2');
    // Vowel + oe + consonant (Hoehe→Höhe, but careful)
    line = line.replace(/([aeiouAEIOU])oe([bcdfghjklmnprstvwxyz])/g, '$1ö$2');
    // Word-start Oe → Ö
    line = line.replace(/\bOe([a-zäöüß])/g, 'Ö$1');

    // ===== STEP 2: ae → ä =====
    // Consonant + ae + letter
    line = line.replace(/([bcdfghjklmnprstvwxyzBCDFGHJKLMNPRSTVWXYZ])ae([a-zäöüß])/g, '$1ä$2');
    // Word-start Ae → Ä (but NOT Aerob/Aero)
    line = line.replace(/\bAe([a-zäöüß])/g, (m, after) => /^ro/.test(after) ? m : 'Ä' + after);
    line = line.replace(/\bae([a-zäöüß])/g, (m, after) => /^ro/.test(after) ? m : 'ä' + after);

    // ===== STEP 3: ue → ü =====
    // Consonant + ue + letter (but NOT after q: Frequenz, Sequenz, quer)
    line = line.replace(/([bcdfghjklmnprstvwxyzBCDFGHJKLMNPRSTVWXYZ])ue([a-zäöüß])/g,
      (m, before, after) => before.toLowerCase() === 'q' ? m : before + 'ü' + after
    );
    // Word-start Ue → Ü, ue → ü
    line = line.replace(/\bUe([a-zäöüß])/g, 'Ü$1');
    line = line.replace(/\bue([a-zäöüß])/g, 'ü$1');

    // ===== STEP 4: ss → ß (only safe patterns after long vowels/diphthongs) =====
    // After ö (long): Grösse→Größe, grösser→größer, grösst→größt
    line = line.replace(/röss/g, 'röß');
    // grosse/Grosse (without preceding oe, just "gross" → "groß")
    line = line.replace(/\b([Gg])rosse/g, '$1roße');
    line = line.replace(/\b([Gg])ross\b/g, '$1roß');
    // Strasse → Straße
    line = line.replace(/([Ss])trass/g, '$1traß');
    // äußer (from aeusser after ae→ä)
    line = line.replace(/äuss/g, 'äuß');
    line = line.replace(/Äuss/g, 'Äuß');
    // Gefäß (from Gefaess after ae→ä)
    line = line.replace(/([Gg])efäss/g, '$1efäß');
    // Diphthong ei + ß: heiss→heiß, weiss→weiß, reiss→reiß, beiss→beiß
    line = line.replace(/([Hh])eiss/g, '$1eiß');
    line = line.replace(/([Ww])eiss(?!heit)/g, '$1eiß');  // Not Weisheit
    line = line.replace(/([Rr])eiss/g, '$1eiß');
    line = line.replace(/([Bb])eiss/g, '$1eiß');
    // Diphthong ie + ß: fliess→fließ, schliess→schließ, giess→gieß, schiess→schieß
    line = line.replace(/([Ff])liess/g, '$1ließ');
    line = line.replace(/([Ss])chliess/g, '$1chließ');
    line = line.replace(/([Gg])iess/g, '$1ieß');
    line = line.replace(/([Ss])chiess/g, '$1chieß');
    // Stoß, stoß
    line = line.replace(/\b([Ss])toss/g, '$1toß');
    // Spaß
    line = line.replace(/\b([Ss])pass/g, '$1paß');
    // Maßnahme (but NOT Masse which is correct)
    line = line.replace(/([Mm])assnahm/g, '$1aßnahm');
    line = line.replace(/([Mm])assstab/g, '$1aßstab');
    line = line.replace(/([Mm])assgeblic/g, '$1aßgeblic');
    // Einfluss stays Einfluss (short u) ✓
    // Fußnote, but Fluss stays Fluss ✓

    return line;
  }).join('\n');
}

// ===== MAIN =====
const dataDir = path.resolve('src/data');
const files = getAllTsFiles(dataDir);

let totalFiles = 0;
let totalChanges = 0;

for (const file of files) {
  const original = fs.readFileSync(file, 'utf8');
  const fixed = fixUmlauts(original);
  if (fixed !== original) {
    fs.writeFileSync(file, fixed, 'utf8');
    totalFiles++;
    // Count lines changed
    const origLines = original.split('\n');
    const fixedLines = fixed.split('\n');
    let lineChanges = 0;
    for (let i = 0; i < origLines.length; i++) {
      if (origLines[i] !== fixedLines[i]) lineChanges++;
    }
    totalChanges += lineChanges;
    console.log(`  ${path.relative(process.cwd(), file)} (${lineChanges} lines)`);
  }
}

console.log(`\n✓ ${totalFiles} files modified, ${totalChanges} lines changed`);
