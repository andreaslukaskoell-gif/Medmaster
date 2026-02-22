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
// tv1-t1: q4,q5 (Text about microplastics / Mikroplastik)
src = ins(src, "tv1-t1-q3",
  q("tv1-t1-q4",
    "Welche Quellen f\u00FCr Mikroplastik im Meer nennt der Text?",
    ["Nur industrielle Abw\u00E4sser aus Kunststofffabriken",
     "Ausschlie\u00DFlich der Reifenabrieb von Kraftfahrzeugen",
     "Zerfall gr\u00F6\u00DFerer Kunststoffteile durch UV-Strahlung und mechanische Einwirkung sowie synthetische Textilfasern beim Waschen",
     "Vor allem Kosmetikprodukte mit Microbeads und Kl\u00E4ranlagenausfl\u00FCsse",
     "Prim\u00E4r landwirtschaftliche D\u00FCngemittel mit Kunststoffzusatzstoffen"],
    2,
    "Der Text nennt als Quellen: \u201EGro\u00DFe Kunststoffteile zerfallen durch UV-Strahlung und mechanische Einwirkung in immer kleinere Partikel. Zus\u00E4tzlich gelangen synthetische Fasern aus Textilien beim Waschen ins Abwasser.\u201C") +
  q("tv1-t1-q5",
    "Welche Auswirkung von Mikroplastik auf Meerestiere beschreibt der Text?",
    ["Mikroplastik f\u00FChrt bei Fischen zu einer erh\u00F6hten Fortpflanzungsrate",
     "Meerestiere verwechseln Mikroplastik mit Nahrung, was zu Verletzungen des Verdauungstrakts und Anreicherung von Schadstoffen f\u00FChrt",
     "Mikroplastik verbessert die Schwimmf\u00E4higkeit von Meerestieren durch geringere Wasserreibung",
     "Fische nutzen Mikroplastikpartikel als Orientierungshilfe bei der Migration",
     "Mikroplastik hat laut Text keine nachgewiesene Wirkung auf Meerestiere"],
    1,
    "Im Text hei\u00DFt es: \u201EMeerestiere verwechseln die winzigen Partikel h\u00E4ufig mit Nahrung. Dies kann zu Verletzungen des Verdauungstrakts f\u00FChren und Schadstoffe, die sich an Mikroplastik anlagern, k\u00F6nnen sich in der Nahrungskette anreichern.\u201C"));
writeFileSync(FILE, src, "utf8");
console.log("tv1-t1 done, len:", src.length);
