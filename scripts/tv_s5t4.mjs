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
// tv5-t4: q3,q4,q5
src = ins(src, "tv5-t4-q2",
  q("tv5-t4-q3","Wo befindet sich laut Text der zentrale Taktgeber der inneren Uhr?",
    ["Im Kleinhirn, direkt neben dem Stammhirn",
     "Im suprachiasmatischen Nucleus (SCN) im Hypothalamus, direkt oberhalb der Kreuzung der Sehnerven",
     "In der Zirbeldr\u00FCse, die Melatonin produziert",
     "Im Hippocampus, der f\u00FCr zeitliche Orientierung zust\u00E4ndig ist",
     "In der Amygdala, die emotionale Reaktionen steuert"],
    1,"Im Text steht: \u201EDer zentrale Taktgeber befindet sich im suprachiasmatischen Nucleus (SCN), einer winzigen Ansammlung von etwa 20.000 Nervenzellen im Hypothalamus, direkt oberhalb der Kreuzung der Sehnerven.\u201C") +
  q("tv5-t4-q4","Wie wird der SCN laut Text mit dem Tag-Nacht-Rhythmus synchronisiert?",
    ["Durch Temperaturver\u00E4nderungen des K\u00F6rpers im Tagesverlauf",
     "Durch Licht, das \u00FCber die Netzhaut aufgenommen wird",
     "Durch Mahlzeiten und Schlafenszeiten",
     "Durch das Hormonsystem, insbesondere Cortisol",
     "Durch k\u00F6rperliche Aktivit\u00E4t und Ruhephasen"],
    1,"Der Text erkl\u00E4rt: \u201ELicht, das \u00FCber die Netzhaut aufgenommen wird, synchronisiert den SCN mit dem Tag-Nacht-Rhythmus der Umwelt.\u201C") +
  q("tv5-t4-q5","Welchen Beleg f\u00FCr den praktischen Nutzen der Chronobiologie nennt der Text?",
    ["Chronotypen k\u00F6nnen durch Lichttherapie vollst\u00E4ndig umge\u00E4ndert werden",
     "Bestimmte Blutdruckmedikamente wirken abends besser als morgens, weil der Blutdruck einem zirkadianen Muster folgt",
     "Fr\u00FChtypen leben statistisch l\u00E4nger als Sp\u00E4ttypen",
     "Alle Medikamente wirken morgens nach dem Aufstehen am st\u00E4rksten",
     "Der Chronotyp kann durch Schlaftraining innerhalb einer Woche ver\u00E4ndert werden"],
    1,"Der Text besagt: \u201ESo wirken bestimmte Blutdruckmedikamente effektiver, wenn sie abends statt morgens eingenommen werden, weil der Blutdruck einem zirkadianen Muster folgt.\u201C"));
writeFileSync(FILE, src, "utf8");
console.log("tv5-t4 done, len:", src.length);
