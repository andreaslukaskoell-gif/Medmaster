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
// tv4-t1: q4, q5
src = ins(src, "tv4-t1-q3",
  q("tv4-t1-q4",
    "Welche Umweltfaktoren k\u00F6nnen laut Text epigenetische Ver\u00E4nderungen hervorrufen?",
    ["Nur radioaktive Strahlung und chemische Mutagene",
     "Ausschlie\u00DFlich Viren und Bakterien",
     "Ern\u00E4hrung, Stress, Schadstoffbelastung und soziale Erfahrungen",
     "Nur physische Traumen wie Knochenb\u00FCrche",
     "Epigenetische Ver\u00E4nderungen entstehen ausschlie\u00DFlich zuf\u00E4llig"],
    2,
    "Der Text nennt: \u201EUmweltfaktoren wie Ern\u00E4hrung, Stress, Schadstoffbelastung und soziale Erfahrungen epigenetische Ver\u00E4nderungen hervorrufen k\u00F6nnen.\u201C") +
  q("tv4-t1-q5",
    "Was zeigte der Tierversuch mit tr\u00E4chtigen M\u00E4usen laut Text?",
    ["Dass Stress bei M\u00E4usen deren eigene Stressreaktion verbessert",
     "Dass Stress bei tr\u00E4chtigen M\u00E4usen epigenetische Ver\u00E4nderungen im Nachwuchs bewirken kann, die dessen Stressreaktion dauerhaft beeinflusst",
     "Dass epigenetische Ver\u00E4nderungen ausschlie\u00DFlich bei Nagetieren auftreten",
     "Dass Stress keinen messbaren Einfluss auf die n\u00E4chste Generation hat",
     "Dass tr\u00E4chtige Tiere grunds\u00E4tzlich immun gegen Stress sind"],
    1,
    "Im Text steht: \u201ETierversuche haben gezeigt, dass Stress bei tr\u00E4chtigen M\u00E4usen epigenetische Ver\u00E4nderungen im Nachwuchs bewirken kann, die dessen Stressreaktion dauerhaft beeinflusst.\u201C"));
writeFileSync(FILE, src, "utf8");
console.log("tv4-t1 done, len:", src.length);
