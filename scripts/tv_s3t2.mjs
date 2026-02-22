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
// tv3-t2: q4, q5
src = ins(src, "tv3-t2-q3",
  q("tv3-t2-q4",
    "Was versteht man laut Text unter dem Prinzip der Verschr\u00E4nkung bei Quantencomputern?",
    ["Dass Qubits physisch miteinander verdrahtet werden m\u00FCssen",
     "Zwei verschr\u00E4nkte Qubits sind so verbunden, dass der Zustand des einen den Zustand des anderen unmittelbar beeinflusst, unabh\u00E4ngig von der r\u00E4umlichen Entfernung",
     "Dass alle Qubits gleichzeitig denselben Zustand annehmen",
     "Die mechanische Verbindung mehrerer Quantenprozessoren",
     "Dass Quantencomputer nur bei verschr\u00E4nkten Temperaturen funktionieren"],
    1,
    "Der Text erkl\u00E4rt: \u201EZwei verschr\u00E4nkte Qubits sind so miteinander verbunden, dass der Zustand des einen den Zustand des anderen unmittelbar beeinflusst, unabh\u00E4ngig von der r\u00E4umlichen Entfernung.\u201C") +
  q("tv3-t2-q5",
    "Bei welcher Temperatur m\u00FCssen Quantencomputer laut Text in der Regel betrieben werden?",
    ["Bei Raumtemperatur (etwa 20 Grad Celsius)",
     "Bei 0 Grad Celsius (Gefrierpunkt)",
     "Bei minus 100 Grad Celsius",
     "Bei Temperaturen nahe dem absoluten Nullpunkt (etwa minus 273 Grad Celsius)",
     "Bei minus 196 Grad Celsius (fl\u00FCssiger Stickstoff)"],
    3,
    "Im Text steht: \u201Eweshalb sie in der Regel bei Temperaturen nahe dem absoluten Nullpunkt \u2013 also bei etwa minus 273 Grad Celsius \u2013 betrieben werden m\u00FCssen.\u201C"));
writeFileSync(FILE, src, "utf8");
console.log("tv3-t2 done, len:", src.length);
