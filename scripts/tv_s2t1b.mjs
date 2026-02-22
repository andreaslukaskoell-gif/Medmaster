import { readFileSync, writeFileSync } from "fs";
const FILE = "/Users/Luki/medmaster/src/data/tvTextsExpanded.ts";
let src = readFileSync(FILE, "utf8");
const NL = "\n";
function ins(src, targetId, newQsText) {
  const marker = 'id: "' + targetId + '"';
  const idx = src.indexOf(marker);
  if (idx < 0) { process.stderr.write("NOT FOUND: " + targetId + "\n"); return src; }
  const CLOSE_PAT = NL + "        }," + NL + "      ],";
  const closeQ = src.indexOf(CLOSE_PAT, idx);
  if (closeQ < 0) { process.stderr.write("NO CLOSE for " + targetId + "\n"); return src; }
  const insertPos = closeQ + NL.length + "        },".length;
  return src.slice(0, insertPos) + newQsText + src.slice(insertPos);
}
function q(id, question, opts, correct, expl) {
  const T = "        ";
  return NL + T + "{" + NL +
    T + "  id: " + JSON.stringify(id) + "," + NL +
    T + "  question: " + JSON.stringify(question) + "," + NL +
    T + "  options: [" + NL +
    opts.map(o => T + "    " + JSON.stringify(o) + ",").join(NL) + NL +
    T + "  ]," + NL +
    T + "  correctOption: " + correct + "," + NL +
    T + "  explanation:" + NL +
    T + "    " + JSON.stringify(expl) + "," + NL +
    T + "}";
}
// tv2-t1: q4, q5
src = ins(src, "tv2-t1-q3",
  q("tv2-t1-q4",
    "Welche Antik\u00F6rper besitzt laut Text eine Person mit Blutgruppe AB?",
    ["Nur Anti-A-Antik\u00F6rper",
     "Nur Anti-B-Antik\u00F6rper",
     "Sowohl Anti-A- als auch Anti-B-Antik\u00F6rper",
     "Weder Anti-A- noch Anti-B-Antik\u00F6rper",
     "Anti-AB-Antik\u00F6rper als Kombinationsmolek\u00FCl"],
    3,
    "Der Text besagt: \u201EBlutgruppe AB hat keine [Antik\u00F6rper]\u201C, da sie beide Antigene (A und B) tr\u00E4gt und dementsprechend keine Antik\u00F6rper gegen eigene Antigene bildet.") +
  q("tv2-t1-q5",
    "Welche besondere Rolle spielt der Rhesusfaktor laut Text?",
    ["Er bestimmt, welche Blutgruppe jemand hat",
     "Er verhindert das Verklumpen bei Bluttransfusionen",
     "Er spielt bei Schwangerschaften eine besondere Rolle, wenn Mutter und Kind unterschiedliche Rhesusfaktoren haben",
     "Er wurde erst 1950 entdeckt und ist wichtiger als das AB0-System",
     "Er bestimmt die Farbe der roten Blutk\u00F6rperchen"],
    2,
    "Im Text steht: \u201Eder ebenfalls von Landsteiner mitentdeckt wurde und bei Schwangerschaften eine besondere Rolle spielt, wenn Mutter und Kind unterschiedliche Rhesusfaktoren haben.\u201C"));
writeFileSync(FILE, src, "utf8");
console.log("tv2-t1 done, len:", src.length);
