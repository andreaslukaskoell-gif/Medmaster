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
// tv2-t5: q3,q4,q5
src = ins(src, "tv2-t5-q2",
  q("tv2-t5-q3",
    "Wie ist Sokrates' Werk laut Text \u00FCberliefert?",
    ["In seinen eigenen Schriften, die nach seinem Tod ver\u00F6ffentlicht wurden",
     "Durch die Dialoge seines Sch\u00FClers Platon",
     "Durch lateinische \u00DCbersetzungen r\u00F6mischer Philosophen",
     "Durch arch\u00E4ologische Funde in Athen",
     "Durch m\u00FCndliche \u00DCberlieferungen seiner Familie"],
    1,
    "Der Text erkl\u00E4rt: \u201ESein Denken ist haupts\u00E4chlich durch die Dialoge seines Sch\u00FClers Platon \u00FCberliefert.\u201C") +
  q("tv2-t5-q4",
    "Womit verglich Sokrates laut Text seine eigene Methode?",
    ["Mit einem Schmied, der rohes Eisen in wertvolles Metall verwandelt",
     "Mit einer Hebamme, die nicht selbst geb\u00E4rt, sondern anderen bei der Geburt hilft",
     "Mit einem G\u00E4rtner, der Samen pflanzt und auf ihre Entfaltung wartet",
     "Mit einem Richter, der Wahrheit von L\u00FCge unterscheidet",
     "Mit einem Arzt, der Krankheiten durch Fragen diagnostiziert"],
    1,
    "Im Text hei\u00DFt es: \u201EEr verglich sich dabei mit einer Hebamme, die nicht selbst geb\u00E4rt, sondern anderen bei der Geburt hilft.\u201C") +
  q("tv2-t5-q5",
    "Wessen wesentliches Merkmal sah Sokrates laut Text als Vorteil an?",
    ["Sein umfassendes Wissen \u00FCber Naturphilosophie",
     "Seine politischen Verbindungen in Athen",
     "Das Bewusstsein seines eigenen Nicht-Wissens gegen\u00FCber jenen, die f\u00E4lschlich glaubten, im Besitz sicherer Wahrheiten zu sein",
     "Seine rhetorische \u00DCberlegenheit in \u00F6ffentlichen Debatten",
     "Seine F\u00E4higkeit, Sch\u00FCler schnell zu bekehren"],
    2,
    "Der Text besagt: \u201ESokrates behauptete von sich selbst, nichts zu wissen, und sah gerade in diesem Bewusstsein des eigenen Nicht-Wissens einen Vorteil gegen\u00FCber jenen, die f\u00E4lschlich glaubten, im Besitz sicherer Wahrheiten zu sein.\u201C"));
writeFileSync(FILE, src, "utf8");
console.log("tv2-t5 done, len:", src.length);
