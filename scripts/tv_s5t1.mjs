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
src = ins(src, "tv5-t1-q3",
  q("tv5-t1-q4",
    "Was schlagen laut Text einige Forscher als L\u00F6sung des ethischen Dilemmas vor?",
    ["Die vollst\u00E4ndige Abschaffung der Aufkl\u00E4rungspflicht f\u00FCr \u00C4rzte",
     "Die generelle Verschreibung von Placebos statt echter Medikamente",
     "Eine kontextsensitive Aufkl\u00E4rung, die Risiken nennt, ohne negative Erwartungen \u00FCberm\u00E4\u00DFig zu verst\u00E4rken",
     "Die Durchf\u00FChrung von Nocebo-Studien an allen Patienten vor der Behandlung",
     "Das Verbot der Aufkl\u00E4rung \u00FCber seltene Nebenwirkungen"],
    2,
    "Der Text besagt: \u201EEinige Forscher pl\u00E4dieren daher f\u00FCr eine kontextsensitive Aufkl\u00E4rung, die Risiken nennt, ohne negative Erwartungen \u00FCberm\u00E4\u00DFig zu verst\u00E4rken.\u201C") +
  q("tv5-t1-q5",
    "Was bedeutet der Begriff 'Nocebo' laut Text w\u00F6rtlich?",
    ["Ich werde heilen",
     "Ich werde schaden",
     "Ich werde helfen",
     "Ich werde leiden",
     "Ich werde t\u00E4uschen"],
    1,
    "Der Text erkl\u00E4rt: \u201EDer Begriff leitet sich vom Lateinischen \u2018nocebo\u2019 ab, was \u2018ich werde schaden\u2019 bedeutet.\u201C"));
writeFileSync(FILE, src, "utf8");
console.log("tv5-t1 done, len:", src.length);
