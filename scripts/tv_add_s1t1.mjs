import { readFileSync, writeFileSync } from "fs";
const FILE = "/Users/Luki/medmaster/src/data/tvTextsExpanded.ts";
let src = readFileSync(FILE, "utf8");
const NL = "\n";

function ins(src, lastId, qs) {
  const marker = 'id: "' + lastId + '"';
  const idx = src.lastIndexOf(marker);
  if (idx < 0) { process.stderr.write("NOT FOUND: " + lastId + "\n"); return src; }
  const closeQ = src.indexOf(NL + "        }," + NL + "      ],", idx);
  if (closeQ < 0) { process.stderr.write("NO CLOSE for " + lastId + "\n"); return src; }
  const insertPos = closeQ + (NL + "        },").length;
  return src.slice(0, insertPos) + qs + src.slice(insertPos);
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

// tv1-t1: q4, q5
src = ins(src, "tv1-t1-q3",
  q("tv1-t1-q4",
    "Welche Schlafdauer empfehlen laut Text Experten f\u00FCr Erwachsene pro Nacht?",
    ["Mindestens zehn bis zw\u00F6lf Stunden", "Genau sechs Stunden",
     "Sieben bis neun Stunden, wobei der individ\u00FClle Bedarf variieren kann",
     "H\u00F6chstens f\u00FCnf bis sechs Stunden", "Drei bis vier Stunden in mehreren kurzen Intervallen"],
    2,
    "Im Text hei\u00DFt es: \u201EStudien zeigen, dass Erwachsene im Durchschnitt sieben bis neun Stunden Schlaf pro Nacht ben\u00F6tigen, wobei der individ\u00FClle Bedarf variieren kann.\u201C") +
  q("tv1-t1-q5",
    "Was beschreibt den Hauptzweck des REM-Schlafs laut Text?",
    ["Die Aussch\u00FCttung von Wachstumshormonen zur Gewebereparatur",
     "Die Regulierung der K\u00F6rpertemperatur",
     "Die St\u00E4rkung des Immunsystems",
     "Die Verarbeitung von Erinnerungen und das Lernen",
     "Die Regeneration der Muskeln nach k\u00F6rperlicher Belastung"],
    3,
    "Der Text besagt: \u201EDer REM-Schlaf hingegen spielt eine zentrale Rolle bei der Verarbeitung von Erinnerungen und dem Lernen.\u201C"));

console.log("tv1-t1 done");
writeFileSync(FILE, src, "utf8");
console.log("Saved, length:", src.length);
