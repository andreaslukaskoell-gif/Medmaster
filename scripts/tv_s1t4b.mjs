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
// tv1-t4: q3,q4,q5
src = ins(src, "tv1-t4-q2",
  q("tv1-t4-q3",
    "Was bezeichnet der Text als 'Trilateration'?",
    ["Die Berechnung der Satellitengeschwindigkeit aus der Erdumlaufbahn",
     "Das Prinzip, durch Messung der Signallaufzeit zu mindestens vier Satelliten die Position zu bestimmen",
     "Die Synchronisierung aller 24 Satelliten untereinander",
     "Den Vorgang der Signalverst\u00E4rkung durch DGPS",
     "Die Umwandlung von Radiosignalen in GPS-Koordinaten"],
    1,
    "Im Text wird Trilateration als das Prinzip der Positionsbestimmung beschrieben, bei dem der Empf\u00E4nger Signale von mindestens vier Satelliten empf\u00E4ngt und daraus L\u00E4ngengrad, Breitengrad und H\u00F6he berechnet.") +
  q("tv1-t4-q4",
    "Auf welche Genauigkeit kann GPS laut Text durch DGPS verbessert werden?",
    ["Auf wenige Millimeter", "Auf wenige Zentimeter", "Auf wenige Dezimeter", "Auf wenige Meter",
     "DGPS verbessert die Genauigkeit nicht weiter"],
    1,
    "Der Text besagt: \u201Ekann jedoch durch erg\u00E4nzende Systeme wie DGPS (Differential GPS) auf wenige Zentimeter verbessert werden.\u201C") +
  q("tv1-t4-q5",
    "Welches urspr\u00FCngliche Entwicklungsziel von GPS wird im Text genannt?",
    ["Die zivile Nutzung f\u00FCr Autonavigation",
     "Die Vermessung von Kontinenten und Ozeanen",
     "Die milit\u00E4rische Nutzung durch das US-Milit\u00E4r",
     "Die Wettervorhersage durch Satellitendaten",
     "Die Erforschung des Weltraums"],
    2,
    "Im Text steht: \u201Edas urspr\u00FCnglich vom US-Milit\u00E4r entwickelt wurde und seit den 1990er-Jahren auch zivil genutzt werden kann.\u201C"));
writeFileSync(FILE, src, "utf8");
console.log("tv1-t4 done, len:", src.length);
