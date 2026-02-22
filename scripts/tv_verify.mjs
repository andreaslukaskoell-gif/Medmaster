import { readFileSync } from "fs";
const src = readFileSync("/Users/Luki/medmaster/src/data/tvTextsExpanded.ts", "utf8");

const expected = {};
for (let s = 1; s <= 5; s++) {
  for (let t = 1; t <= 5; t++) {
    const key = "tv" + s + "-t" + t;
    expected[key] = ["q1","q2","q3","q4","q5"];
  }
}

let allOk = true;
let totalFound = 0;

for (const [textKey, qs] of Object.entries(expected)) {
  for (const q of qs) {
    const id = textKey + "-" + q;
    const pattern = 'id: "' + id + '"';
    let count = 0;
    let pos = 0;
    while ((pos = src.indexOf(pattern, pos)) !== -1) { count++; pos++; }
    if (count === 0) {
      process.stdout.write("MISSING: " + id + "\n");
      allOk = false;
    } else if (count > 1) {
      process.stdout.write("DUPLICATE (" + count + "x): " + id + "\n");
      allOk = false;
    } else {
      totalFound++;
    }
  }
}

process.stdout.write("\nTotal questions found exactly once: " + totalFound + " / 125\n");
process.stdout.write((allOk ? "ALL OK - no missing, no duplicates!" : "ISSUES FOUND - see above") + "\n");
process.stdout.write("File size: " + src.length + " bytes\n");
