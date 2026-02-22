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
// tv4-t5: q4, q5 (has q1,q2,q3)
src = ins(src, "tv4-t5-q3",
  q("tv4-t5-q4",
    "Wie viel Fl\u00E4che der Landober\u00FCfl\u00E4che der Nordhalbkugel bedeckt Permafrost laut Text?",
    ["Etwa ein Zehntel",
     "Etwa ein Sechstel",
     "Etwa ein Viertel",
     "Etwa ein Drittel",
     "Etwa die H\u00E4lfte"],
    2,
    "Der Text besagt: \u201EEr bedeckt etwa ein Viertel der Landober\u00FCfl\u00E4che der Nordhalbkugel.\u201C") +
  q("tv4-t5-q5",
    "Warum ist Methan als Treibhausgas laut Text besonders relevant?",
    ["Weil Methan 10-mal h\u00E4ufiger im Permafrost vorkommt als CO\u2082",
     "Weil Methan \u00FCber einen Zeitraum von 20 Jahren etwa 80-mal wirksamer als CO\u2082 als Treibhausgas ist",
     "Weil Methan langfristig stabiler in der Atmosph\u00E4re bleibt als CO\u2082",
     "Weil Methan ausschlie\u00DFlich aus dem auftauenden Permafrost stammt",
     "Weil Methan direkte gesundheitliche Sch\u00E4den beim Menschen verursacht"],
    1,
    "Im Text steht: \u201EMethan ist als Treibhausgas etwa 80-mal wirksamer als CO\u2082 \u00FCber einen Zeitraum von 20 Jahren.\u201C"));
writeFileSync(FILE, src, "utf8");
console.log("tv4-t5 done, len:", src.length);
