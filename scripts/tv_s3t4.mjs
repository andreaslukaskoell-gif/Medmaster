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
// tv3-t4: q4, q5
src = ins(src, "tv3-t4-q3",
  q("tv3-t4-q4",
    "Welche Arbeitsbedingungen herrschten laut Text in den fr\u00FChen Fabriken der Industriellen Revolution?",
    ["Kurze Arbeitszeiten und gute L\u00F6hne f\u00FCr alle Arbeiter",
     "Arbeitstage von 14 bis 16 Stunden, Kinderarbeit und fehlender Arbeitsschutz",
     "Strenge Sicherheitsstandards und staatlich garantierte Mindestl\u00F6hne",
     "Ausschlie\u00DFlich erwachsene M\u00E4nner arbeiteten in den Fabriken",
     "Die Arbeitsbedingungen waren besser als in der Landwirtschaft"],
    1,
    "Im Text hei\u00DFt es: \u201EArbeitstage von 14 bis 16 Stunden, Kinderarbeit und fehlender Arbeitsschutz waren die Regel.\u201C") +
  q("tv3-t4-q5",
    "Welchen doppelten historischen Grundstein legte die Industrielle Revolution laut dem letzten Satz des Textes?",
    ["Den Grundstein f\u00FCr die moderne Chemie und die Physik",
     "Den Grundstein f\u00FCr Demokratie und Menschenrechte",
     "Den Grundstein f\u00FCr die moderne Wirtschaft und den modernen Sozialstaat",
     "Den Grundstein f\u00FCr Kolonialismus und Globalisierung",
     "Den Grundstein f\u00FCr Bildungssysteme und Universit\u00E4ten"],
    2,
    "Der Text schlie\u00DFt: \u201EDie Industrielle Revolution legte damit nicht nur den Grundstein f\u00FCr die moderne Wirtschaft, sondern auch f\u00FCr den modernen Sozialstaat.\u201C"));
writeFileSync(FILE, src, "utf8");
console.log("tv3-t4 done, len:", src.length);
