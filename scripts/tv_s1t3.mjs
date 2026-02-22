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

src = ins(src, "tv1-t3-q2",
  q("tv1-t3-q3",
    "Welche Pers\u00F6nlichkeit wird laut Text NICHT als regelm\u00E4\u00DFiger Gast des Wiener Kaffeehauses genannt?",
    ["Sigmund Freud", "Arthur Schnitzler", "Stefan Zweig",
     "Wolfgang Amadeus Mozart",
     "Alle drei \u2013 Freud, Schnitzler und Zweig \u2013 werden genannt"],
    3,
    "Der Text nennt Sigmund Freud, Arthur Schnitzler und Stefan Zweig als regelm\u00E4\u00DFige G\u00E4ste. Wolfgang Amadeus Mozart wird im Text nicht erw\u00E4hnt.") +
  q("tv1-t3-q4",
    "Was wird laut Text zum Kaffee im Wiener Kaffeehaus traditionell serviert?",
    ["Ein kleines Glas Schnaps",
     "Ein Glas Wasser, das unaufgefordert nachgef\u00FCllt wird",
     "Ein St\u00FCck Kuchen nach Wahl",
     "Eine kleine Portion Schlagobers",
     "Ein Glas Orangensaft"],
    1,
    "Im Text hei\u00DFt es: \u201EZum Kaffee wird traditionell ein Glas Wasser serviert, das unaufgefordert nachgef\u00FCllt wird.\u201C") +
  q("tv1-t3-q5",
    "Woraus besteht laut Text die Wiener Melange?",
    ["Aus einem Mokka im Glas mit Schlagobers",
     "Aus einem doppelten Espresso mit Kakaopulver",
     "Aus Kaffee und aufgesch\u00E4umter Milch",
     "Aus schwarzem Kaffee und einem Schuss Rum",
     "Aus Filterkaffee mit Sahne und Vanilleeis"],
    2,
    "Der Text beschreibt die Wiener Melange als Kaffeespezialit\u00E4t, die \u201Eaus Kaffee und aufgesch\u00E4umter Milch besteht\u201C."));

writeFileSync(FILE, src, "utf8");
console.log("tv1-t3 done, length:", src.length);
