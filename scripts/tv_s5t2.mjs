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
src = ins(src, "tv5-t2-q2",
  q("tv5-t2-q3",
    "Welches Beispiel aus der Sprache Kuuk Thaayorre f\u00FChrt der Text an?",
    ["Diese Sprache hat keine Pluralformen f\u00FCr Substantive",
     "Diese Sprache kennt keine Begriffe f\u00FCr 'links' und 'rechts', verwendet stattdessen Himmelsrichtungen, und ihre Sprecher haben einen bemerkenswert pr\u00E4zisen inneren Kompass",
     "Diese Sprache hat \u00FCber 50 W\u00F6rter f\u00FCr Farbnuancen",
     "Diese Sprache unterscheidet nicht zwischen Vergangenheit und Gegenwart",
     "Diese Sprache hat keine Zahlen \u00FCber f\u00FCnf"],
    1,
    "Der Text beschreibt: \u201EIn der australischen Sprache Kuuk Thaayorre gibt es keine Begriffe f\u00FCr 'links' und 'rechts'; stattdessen werden absolute Himmelsrichtungen verwendet. Sprecher dieser Sprache verf\u00FCgen \u00FCber einen bemerkenswert pr\u00E4zisen inneren Kompass.\u201C") +
  q("tv5-t2-q4",
    "Welche empirische Beobachtung unterst\u00FCtzt laut Text den linguistischen Relativismus?",
    ["Alle Menschen denken in derselben logischen Struktur, unabh\u00E4ngig von der Sprache",
     "Sprecher von Sprachen mit vielen Farbw\u00F6rtern unterscheiden bestimmte Farbnuancen schneller als Sprecher mit weniger Farbbezeichnungen",
     "Kinder aller Kulturen erwerben Sprache in denselben Phasen",
     "\u00DCbersetzungen zwischen Sprachen sind immer verlustfrei m\u00F6glich",
     "Grammatikstrukturen aller Sprachen sind universell gleich"],
    1,
    "Im Text hei\u00DFt es: \u201ESo unterscheiden Sprecher von Sprachen mit vielen Farbw\u00F6rtern bestimmte Farbnuancen schneller als Sprecher von Sprachen mit weniger Farbbezeichnungen.\u201C") +
  q("tv5-t2-q5",
    "Welche Version der Sapir-Whorf-Hypothese gilt laut Text heute als widerlegt und warum?",
    ["Die schwache Version, weil es keine empirischen Belege gibt",
     "Die starke Version (linguistischer Determinismus), weil Menschen offensichtlich auch Gedanken haben, f\u00FCr die ihnen Worte fehlen",
     "Beide Versionen, weil Sprache und Denken vollst\u00E4ndig unabh\u00E4ngig sind",
     "Die starke Version, weil sie nur f\u00FCr westliche Sprachen entwickelt wurde",
     "Die schwache Version, weil kognitive Unterschiede immer auf kulturelle Faktoren zur\u00FCckzuf\u00FChren sind"],
    1,
    "Der Text stellt fest: \u201EDiese starke Version gilt heute als widerlegt, da Menschen offensichtlich auch Gedanken haben, f\u00FCr die ihnen Worte fehlen.\u201C"));
writeFileSync(FILE, src, "utf8");
console.log("tv5-t2 done, len:", src.length);
