import fs from "fs";
import path from "path";

function getAllTsFiles(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...getAllTsFiles(full));
    else if (entry.name.endsWith(".ts") || entry.name.endsWith(".tsx")) results.push(full);
  }
  return results;
}

const replacements = [
  // Koeffizient (Latin "co-" prefix before vowel)
  [/Köffizient/g, "Koeffizient"],
  [/köffizient/g, "koeffizient"],
  // Koexistenz
  [/Köxistenz/g, "Koexistenz"],
  [/köxistenz/g, "koexistenz"],
  [/köxistieren/g, "koexistieren"],
  // Koevolution
  [/Kövolution/g, "Koevolution"],
  [/kövolution/g, "koevolution"],
  [/kövolutionär/g, "koevolutionär"],
  [/kövolvieren/g, "koevolvieren"],
  [/kövolviert/g, "koevolviert"],
  // Destruent
  [/Destrünt/g, "Destruent"],
  [/destrünt/g, "destruent"],
  [/Destrünten/g, "Destruenten"],
  [/destrünten/g, "destruenten"],
  // Substituent
  [/Substitünt/g, "Substituent"],
  [/substitünt/g, "substituent"],
  [/Substitünten/g, "Substituenten"],
  [/substitünten/g, "substituenten"],
  // sexuell (all forms)
  [/sexüll/g, "sexuell"],
  [/Sexüll/g, "Sexuell"],
  // Michaelis (proper name)
  [/Michälis/g, "Michaelis"],
  // tetraedrisch / Tetraeder
  [/teträdrisch/g, "tetraedrisch"],
  [/Teträdrisch/g, "Tetraedrisch"],
  [/Teträder/g, "Tetraeder"],
  [/teträder/g, "tetraeder"],
  // zueinander
  [/züinander/g, "zueinander"],
  // Individuen
  [/Individün/g, "Individuen"],
  [/individün/g, "individuen"],
  // Kooperation
  [/Köperation/g, "Kooperation"],
  [/köperativ/g, "kooperativ"],
  // Koordination
  [/Ködination/g, "Koordination"],
  // Koagulation
  [/Köagulation/g, "Koagulation"],
];

const dataDir = path.resolve("src/data");
const files = getAllTsFiles(dataDir);
let totalFiles = 0;
let totalChanges = 0;

for (const file of files) {
  const original = fs.readFileSync(file, "utf8");
  let content = original;
  for (const [pattern, replacement] of replacements) {
    content = content.replace(pattern, replacement);
  }
  if (content !== original) {
    fs.writeFileSync(file, content, "utf8");
    totalFiles++;
    const origLines = original.split("\n");
    const fixedLines = content.split("\n");
    let lineChanges = 0;
    for (let i = 0; i < origLines.length; i++) {
      if (origLines[i] !== fixedLines[i]) lineChanges++;
    }
    totalChanges += lineChanges;
    console.log(`  ${path.relative(process.cwd(), file)} (${lineChanges} lines)`);
  }
}

console.log(`\n✓ ${totalFiles} files modified, ${totalChanges} lines changed`);
