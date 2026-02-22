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
// tv3-t3: q3,q4,q5
src = ins(src, "tv3-t3-q2",
  q("tv3-t3-q3",
    "In welchen Bereichen wurde Mikroplastik laut Text beim Menschen gefunden?",
    ["Nur im Magen-Darm-Trakt",
     "Nur in der Lunge durch eingeatmete Partikel",
     "Im Blut, in der Plazenta schwangerer Frauen und in der Muttermilch",
     "Ausschlie\u00DFlich in der Haut durch Kontakt mit Kosmetikprodukten",
     "Nur in der Leber, wo Giftstoffe gefiltert werden"],
    2,
    "Der Text nennt: \u201EStudien haben Mikroplastik in menschlichem Blut, in der Plazenta schwangerer Frauen und in der Muttermilch gefunden.\u201C") +
  q("tv3-t3-q4",
    "Welche Ma\u00DFnahme der Europ\u00E4ischen Union gegen Mikroplastik wird im Text beschrieben?",
    ["Ein sofortiges Totalverbot aller Kunststoffprodukte",
     "Die Einf\u00FChrung einer Mikroplastiksteuer f\u00FCr Produzenten",
     "Ein schrittweises Verbot von absichtlich zugesetztem Mikroplastik in Produkten, das ab 2023 stufenweise in Kraft tritt",
     "Die Verpflichtung zur vollst\u00E4ndigen Beseitigung von Mikroplastik aus Ozeanen bis 2030",
     "Ein Importverbot f\u00FCr Kosmetikprodukte mit Mikroplastik aus Drittl\u00E4ndern"],
    2,
    "Im Text steht: \u201EDie Europ\u00E4ische Union hat auf diese Erkenntnisse reagiert und ein schrittweises Verbot von absichtlich zugesetztem Mikroplastik in Produkten beschlossen, das ab 2023 stufenweise in Kraft tritt.\u201C") +
  q("tv3-t3-q5",
    "Wie gelangt Mikroplastik laut Text in \u00D6kosysteme, die keine direkten Kunststoffabf\u00E4lle aufnehmen?",
    ["Durch Tiefseevulkane, die Plastikpartikel in die Meere schleudern",
     "Wind, Wellen und UV-Strahlung zersetzen Plastikabf\u00E4lle in immer kleinere Fragmente",
     "Durch spezielle Bakterien, die Plastik in Mikropartikel aufspalten",
     "Durch die nat\u00FCrliche Verrottung von Plastik innerhalb von zehn Jahren",
     "Durch chemische Reaktionen zwischen Plastik und Salzwasser"],
    1,
    "Der Text erkl\u00E4rt: \u201EWind, Wellen und UV-Strahlung zersetzen Plastikabf\u00E4lle in immer kleinere Fragmente, ohne sie chemisch vollst\u00E4ndig abzubauen.\u201C"));
writeFileSync(FILE, src, "utf8");
console.log("tv3-t3 done, len:", src.length);
