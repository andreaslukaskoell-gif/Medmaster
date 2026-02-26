/**
 * Prüft, ob alle BMS-Stichworte in den Kapiteln vorkommen.
 * Ein Stichwort muss kein eigenes Unterkapitel haben; mehrere Stichworte können
 * in einem Unterkapitel abgedeckt sein. Kriterium: Thema (thema oder Unterthemen)
 * kommt in mindestens einem Unterkapitel vor – in stichworte[], title oder content.
 *
 * Ausführung: npx tsx scripts/audit-stichworte-kapitel.mts
 */
import { alleStichworteListe } from "../src/data/stichworteData";
import { alleKapitel } from "../src/data/bmsKapitel";

function normalize(t: string): string {
  return t
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .trim();
}

/** Suchbegriffe für ein Stichwort: thema + Unterthemen, normalisiert. */
function searchTerms(stichwort: { thema: string; unterthemen: string[] }): string[] {
  const terms = new Set<string>();
  const add = (s: string) => {
    const n = normalize(s);
    if (n.length >= 2) terms.add(n);
    n.split(/\s+/).forEach((w) => {
      if (w.length >= 3) terms.add(w);
    });
  };
  add(stichwort.thema);
  stichwort.unterthemen.forEach(add);
  return [...terms];
}

function main() {
  type UK = { id: string; title: string; content: string; stichworteNorm: string[] };
  const unterkapitel: UK[] = [];
  for (const k of alleKapitel) {
    const list = k.unterkapitel && Array.isArray(k.unterkapitel) ? k.unterkapitel : [];
    for (const u of list) {
      if (!u || !u.id) continue;
      const stichworteNorm = (u.stichworte || []).map((s) => normalize(s));
      unterkapitel.push({
        id: u.id,
        title: u.title,
        content: (u.content || "").slice(0, 15000),
        stichworteNorm,
      });
    }
  }

  const covered: { id: string; thema: string; inUk: string }[] = [];
  const missing: { id: string; fach: string; thema: string }[] = [];

  for (const s of alleStichworteListe) {
    const terms = searchTerms(s);
    let foundUk: string | null = null;
    for (const uk of unterkapitel) {
      const contentNorm = normalize(uk.content);
      const titleNormUk = normalize(uk.title);
      const allText = contentNorm + " " + titleNormUk + " " + uk.stichworteNorm.join(" ");
      const match = terms.some(
        (t) =>
          allText.includes(t) || uk.stichworteNorm.some((sw) => sw.includes(t) || t.includes(sw))
      );
      if (match) {
        foundUk = uk.id;
        break;
      }
    }
    if (foundUk) {
      covered.push({ id: s.id, thema: s.thema, inUk: foundUk });
    } else {
      missing.push({ id: s.id, fach: s.fach, thema: s.thema });
    }
  }

  console.log("=== Audit: Alle Stichworte in Kapiteln abgedeckt? ===\n");
  console.log("Unterkapitel gesamt:", unterkapitel.length);
  console.log("Stichworte gesamt:", alleStichworteListe.length);
  console.log("Stichworte, die in mind. einem Unterkapitel vorkommen:", covered.length);

  if (missing.length > 0) {
    console.log(
      "\n❌ Stichworte, die in KEINEM Unterkapitel vorkommen (thema/Unterthemen nicht in stichworte, Titel oder Content):"
    );
    missing.forEach((m) => {
      console.log(`   ${m.id} (${m.fach}) ${m.thema}`);
    });
    console.log("   Gesamt:", missing.length);
  } else {
    console.log("\n✅ Alle Stichworte kommen in mindestens einem Kapitel vor.");
  }

  process.exit(missing.length > 0 ? 1 : 0);
}

main();
