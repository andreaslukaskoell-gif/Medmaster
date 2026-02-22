import { readFileSync, writeFileSync } from "fs";
const FILE = "/Users/Luki/medmaster/src/data/tvTextsExpanded.ts";
let src = readFileSync(FILE, "utf8");
const NL = "\n";
const T = "        ";
// Fix: replace "}\n        {" with "},\n        {" in question arrays
// This pattern occurs when two q() blocks are adjacent without a comma
const BAD = NL + T + "}" + NL + T + "{";
const GOOD = NL + T + "}," + NL + T + "{";
let count = 0;
let pos = 0;
while ((pos = src.indexOf(BAD, pos)) !== -1) {
  src = src.slice(0, pos) + GOOD + src.slice(pos + BAD.length);
  pos += GOOD.length;
  count++;
}
writeFileSync(FILE, src, "utf8");
process.stdout.write("Fixed " + count + " missing commas, len: " + src.length + "\n");
