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
// tv3-t5: q3,q4,q5
src = ins(src, "tv3-t5-q2",
  q("tv3-t5-q3",
    "Welcher Neurotransmitter wird laut Text beim Musikh\u00F6ren ausgesch\u00FCttet?",
    ["Serotonin", "Adrenalin", "Cortisol", "Dopamin", "Acetylcholin"],
    3,
    "Der Text besagt: \u201EDabei wird der Neurotransmitter Dopamin ausgesch\u00FCttet, was das Gl\u00FCcksgef\u00FChl erkl\u00E4rt, das viele Menschen beim Musikh\u00F6ren empfinden.\u201C") +
  q("tv3-t5-q4",
    "Welche Gehirnstruktur wird laut Text beim H\u00F6ren angenehmer Musik aktiviert?",
    ["Die Amygdala, die f\u00FCr Angstreaktionen zust\u00E4ndig ist",
     "Der Hippocampus, der f\u00FCr das Langzeitged\u00E4chtnis verantwortlich ist",
     "Der Nucleus accumbens, der Teil des Belohnungssystems ist",
     "Der Pr\u00E4frontale Kortex, der f\u00FCr rationale Entscheidungen zust\u00E4ndig ist",
     "Das Kleinhirn, das die motorische Koordination steuert"],
    2,
    "Im Text hei\u00DFt es: \u201Edass beim H\u00F6ren von als angenehm empfundener Musik das Belohnungssystem des Gehirns aktiviert wird, insbesondere der Nucleus accumbens.\u201C") +
  q("tv3-t5-q5",
    "Welches Schl\u00FCsselelement der emotionalen Wirkung von Musik beschreibt der Text?",
    ["Die Lautst\u00E4rke und Intensit\u00E4t der Musik",
     "Das Wechselspiel aus Erwartung und \u00DCberraschung",
     "Die L\u00E4nge der Komposition und ihre Wiederholungen",
     "Die Anzahl der beteiligten Instrumente",
     "Das Tempo und den Rhythmus der Musik"],
    1,
    "Der Text erkl\u00E4rt: \u201EDieses Wechselspiel aus Erwartung und \u00DCberraschung scheint ein Schl\u00FCsselelement der emotionalen Wirkung von Musik zu sein.\u201C"));
writeFileSync(FILE, src, "utf8");
console.log("tv3-t5 done, len:", src.length);
