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
// tv1-t2: q4,q5 (Text about dark matter / Dunkle Materie)
src = ins(src, "tv1-t2-q3",
  q("tv1-t2-q4",
    "Wie wei\u00DFen Astronomen laut Text nach, dass Dunkle Materie existiert, ohne sie direkt zu sehen?",
    ["Sie haben Dunkle Materie mit Hilfe von R\u00F6ntgensatelliten fotografiert",
     "Sie messen die W\u00E4rmeabstrahlung der Dunklen Materie im Infrarotbereich",
     "Sie beobachten ihre Gravitationswirkung auf sichtbare Materie, z.\u00A0B. durch die Rotation von Galaxien und Gravitationslinseneffekte",
     "Sie analysieren die chemische Zusammensetzung des Universums durch Spektroskopie",
     "Sie berechnen die Dunkle Materie anhand der kosmischen Hintergrundstrahlung direkt"],
    2,
    "Der Text erkl\u00E4rt: \u201EObwohl Dunkle Materie nicht direkt beobachtet werden kann, zeigen ihre Gravitationswirkungen \u2013 etwa in der Rotationsgeschwindigkeit von Galaxien oder dem Gravitationslinseneffekt \u2013 dass sie existieren muss.\u201C") +
  q("tv1-t2-q5",
    "Was sagt der Text \u00FCber den Anteil Dunkler Materie am Universum?",
    ["Dunkle Materie macht etwa 5 Prozent des Universums aus",
     "Dunkle Materie macht etwa 27 Prozent des Universums aus, w\u00E4hrend gew\u00F6hnliche Materie nur etwa 5 Prozent ausmacht",
     "Dunkle Materie und Dunkle Energie zusammen machen etwa 27 Prozent aus",
     "Dunkle Materie macht \u00FCber 70 Prozent des Universums aus",
     "Der genaue Anteil Dunkler Materie ist noch vollst\u00E4ndig unbekannt"],
    1,
    "Im Text steht: \u201EWissenschaftler sch\u00E4tzen, dass Dunkle Materie etwa 27 Prozent des gesamten Universums ausmacht, w\u00E4hrend die gew\u00F6hnliche, sichtbare Materie nur etwa 5 Prozent umfasst.\u201C"));
writeFileSync(FILE, src, "utf8");
console.log("tv1-t2 done, len:", src.length);
