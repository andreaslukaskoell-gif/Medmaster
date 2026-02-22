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
// tv2-t4: q4, q5
src = ins(src, "tv2-t4-q3",
  q("tv2-t4-q4",
    "Welcher Anteil der Weltbev\u00F6lkerung lebte laut Text im Jahr 1950 in St\u00E4dten?",
    ["Etwa 10 Prozent", "Etwa 20 Prozent", "Etwa 30 Prozent", "Etwa 50 Prozent", "Etwa 70 Prozent"],
    2,
    "Der Text besagt: \u201EIm Jahr 1950 lebten nur etwa 30 Prozent der Weltbev\u00F6lkerung in St\u00E4dten.\u201C") +
  q("tv2-t4-q5",
    "Welche Probleme entstehen laut Text durch schnelles Stadtwachstum in Entwicklungsl\u00E4ndern?",
    ["Unm\u00E4\u00DFiger Ausbau des \u00F6ffentlichen Nahverkehrs",
     "Zu viele Gr\u00FCnfl\u00E4chen und Parks verdr\u00E4ngen Wohnraum",
     "Informelle Siedlungen ohne Zugang zu sauberem Wasser, Abwasserentsorgung und Elektrizit\u00E4t",
     "\u00DCberangebot an Arbeitspl\u00E4tzen f\u00FChrt zu Inflation",
     "Zu hohe Bildungsausgaben belasten die Staatskassen"],
    2,
    "Im Text steht: \u201EIn vielen Entwicklungsl\u00E4ndern wachsen St\u00E4dte schneller als die Infrastruktur, was zur Entstehung informeller Siedlungen f\u00FChrt, in denen Menschen ohne Zugang zu sauberem Wasser, Abwasserentsorgung und Elektrizit\u00E4t leben.\u201C"));
writeFileSync(FILE, src, "utf8");
console.log("tv2-t4 done, len:", src.length);
