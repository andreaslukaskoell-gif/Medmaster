import { readFileSync, writeFileSync } from "fs";
const FILE = "/Users/Luki/medmaster/src/data/tvTextsExpanded.ts";
let src = readFileSync(FILE, "utf8");
const NL = "\n";
const CLOSE_PAT = NL + "        }," + NL + "      ],";

function ins(src, targetId, newQsText) {
  const marker = 'id: "' + targetId + '"';
  const idx = src.indexOf(marker);
  if (idx < 0) { process.stderr.write("NOT FOUND: " + targetId + "\n"); return src; }
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

// First add tv5-t5
console.log("Before tv5-t5:", src.includes('id: "tv5-t5-q3"'));
src = ins(src, "tv5-t5-q2",
  q("tv5-t5-q3","Test q3 tv5-t5",["a","b","c","d","e"],0,"test expl"));
console.log("After tv5-t5:", src.includes('id: "tv5-t5-q3"'));
console.log("tv5-t4-q2 still in src:", src.includes('id: "tv5-t4-q2"'));

// Now add tv5-t4
src = ins(src, "tv5-t4-q2",
  q("tv5-t4-q3","Test q3 tv5-t4",["a","b","c","d","e"],0,"test expl"));
console.log("After tv5-t4: tv5-t5-q3 present:", src.includes('id: "tv5-t5-q3"'));
console.log("After tv5-t4: tv5-t4-q3 present:", src.includes('id: "tv5-t4-q3"'));
