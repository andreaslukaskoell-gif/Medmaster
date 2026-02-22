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
// tv3-t1: q3,q4,q5
src = ins(src, "tv3-t1-q2",
  q("tv3-t1-q3",
    "Was wird im Text \u00FCber Endorphine im Zusammenhang mit Placebos beschrieben?",
    ["Endorphine verst\u00E4rken den Placebo-Effekt durch externe Zufuhr",
     "Placebos k\u00F6nnen die Aussch\u00FCttung k\u00F6rpereigener Schmerzmittel \u2013 Endorphine \u2013 anregen",
     "Endorphine werden ausschlie\u00DFlich durch echte Medikamente freigesetzt",
     "Placebos hemmen die nat\u00FCrliche Endorphinproduktion",
     "Endorphine sind f\u00FCr den Placebo-Effekt vollst\u00E4ndig irrelevant"],
    1,
    "Im Text hei\u00DFt es: \u201ENeurowissenschaftliche Untersuchungen haben gezeigt, dass Placebos tats\u00E4chlich die Aussch\u00FCttung k\u00F6rpereigener Schmerzmittel \u2013 sogenannter Endorphine \u2013 anregen k\u00F6nnen.\u201C") +
  q("tv3-t1-q4",
    "Welcher Anteil der Placebo-Empf\u00E4nger berichtet laut Text bei Schmerzstudien \u00FCber eine deutliche Schmerzlinderung?",
    ["Bis zu 5 Prozent", "Bis zu 15 Prozent", "Bis zu 30 Prozent", "Bis zu 50 Prozent", "Bis zu 70 Prozent"],
    2,
    "Der Text nennt: \u201EBei Schmerzstudien berichten bis zu 30 Prozent der Placebo-Empf\u00E4nger \u00FCber eine deutliche Schmerzlinderung.\u201C") +
  q("tv3-t1-q5",
    "Welche allgemeine Definition des Placebo-Effekts gibt der Text?",
    ["Die sch\u00E4dliche Wirkung eines Scheinmedikaments auf den Patienten",
     "Die messbare Verbesserung des Gesundheitszustands, die auf Erwartungshaltung und Glauben an die Wirksamkeit zur\u00FCckzuf\u00FChren ist, nicht auf pharmakologische Wirkung",
     "Die Wirksamkeit billiger Medikamente im Vergleich zu teuren",
     "Die Reaktion des Immunsystems auf inaktive Substanzen",
     "Ein statistischer Fehler in klinischen Studien"],
    1,
    "Der Text definiert: \u201EDer Placebo-Effekt bezeichnet die messbare Verbesserung des Gesundheitszustands eines Patienten, die nicht auf die pharmakologische Wirkung eines Medikaments zur\u00FCckzuf\u00FChren ist, sondern auf die Erwartungshaltung und den Glauben an die Wirksamkeit einer Behandlung.\u201C"));
writeFileSync(FILE, src, "utf8");
console.log("tv3-t1 done, len:", src.length);
