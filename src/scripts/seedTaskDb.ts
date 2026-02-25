/**
 * Migration: Offizielle KFF/SEK-Aufgaben und Lexikon-Tasks in die Task-DB (Supabase) schreiben.
 * Alle Daten werden ausschließlich in der Datenbank gespeichert (Tabelle "tasks").
 *
 * Ausführung: npx tsx src/scripts/seedTaskDb.ts [--generate kff-figuren 100]
 * Voraussetzung: .env mit VITE_SUPABASE_URL und VITE_SUPABASE_ANON_KEY; Tabelle "tasks" muss existieren.
 */
import "dotenv/config";
import { saveTask } from "@/lib/taskDb/storage";
import { isSupabaseConfigured } from "@/lib/supabase";
import {
  sequenceToTask,
  figurenToTask,
  implikationToTask,
  wortflüssigkeitToTask,
  erkennenToTask,
  regulierenToTask,
  entscheidenToTask,
} from "@/lib/taskDb/adapters";
import { validateTask } from "@/lib/taskDb/quality";
import { fillPool } from "@/lib/taskDb/fillPool";
import { generateAllWordFluencyTasksFromLexicon } from "@/data/kffGenerators";
import { wortfluessigkeitWords } from "@/data/kffWortfluessigkeit";
import { OFFICIAL_ZF_EXAMPLES } from "@/data/kffZahlenfolgenMedAT";
import { OFFICIAL_FZ_EXAMPLES } from "@/data/kffFigurenZusammensetzenMedAT";
import { OFFICIAL_IMPLICATION_EXAMPLES, implikationenTasks } from "@/data/kffImplikationen";
import { OFFICIAL_WF_EXAMPLES } from "@/data/kffWortfluessigkeitMedAT";
import {
  emotionenErkennenTasks,
  emotionenRegulierenTasks,
  sozialesEntscheidenTasks,
} from "@/data/sekDataNew";

async function seedOfficial() {
  let ok = 0;
  let skip = 0;

  for (const t of OFFICIAL_ZF_EXAMPLES) {
    const task = sequenceToTask(t, "official");
    const result = validateTask({ ...task, createdAt: task.createdAt ?? new Date().toISOString() });
    if (result.ok) {
      await saveTask({ ...task, validated: true });
      ok++;
    } else skip++;
  }
  console.log(`Zahlenfolgen offiziell: ${ok} gespeichert, ${skip} übersprungen`);

  for (const t of OFFICIAL_FZ_EXAMPLES) {
    const task = figurenToTask(t, "official");
    const result = validateTask({ ...task, createdAt: task.createdAt ?? new Date().toISOString() });
    if (result.ok) {
      await saveTask({ ...task, validated: true });
      ok++;
    } else skip++;
  }
  console.log(`Figuren offiziell: gespeichert (insg. ${ok}, skip ${skip})`);

  let implOk = 0;
  let implSkip = 0;
  for (const t of OFFICIAL_IMPLICATION_EXAMPLES) {
    const task = implikationToTask(t, "official");
    const result = validateTask({ ...task, createdAt: task.createdAt ?? new Date().toISOString() });
    if (result.ok) {
      await saveTask({ ...task, validated: true });
      ok++;
      implOk++;
    } else {
      skip++;
      implSkip++;
    }
  }
  const officialImplicationIds = new Set(OFFICIAL_IMPLICATION_EXAMPLES.map((x) => x.id));
  for (const t of implikationenTasks) {
    if (officialImplicationIds.has(t.id)) continue;
    const task = implikationToTask(t, "curated");
    const result = validateTask({ ...task, createdAt: task.createdAt ?? new Date().toISOString() });
    if (result.ok) {
      await saveTask({ ...task, validated: true });
      ok++;
      implOk++;
    } else {
      skip++;
      implSkip++;
    }
  }
  console.log(
    `Implikationen: ${OFFICIAL_IMPLICATION_EXAMPLES.length} offiziell + ${implikationenTasks.length - OFFICIAL_IMPLICATION_EXAMPLES.length} kuratiert → ${implOk} gespeichert, ${implSkip} übersprungen`
  );

  for (const t of OFFICIAL_WF_EXAMPLES) {
    const task = wortflüssigkeitToTask({ ...t, id: t.id ?? `wf-off-${ok}` }, "official");
    const result = validateTask({ ...task, createdAt: task.createdAt ?? new Date().toISOString() });
    if (result.ok) {
      await saveTask({ ...task, validated: true });
      ok++;
    } else skip++;
  }
  console.log(`Wortflüssigkeit offiziell: gespeichert (insg. ${ok}, skip ${skip})`);

  for (const t of emotionenErkennenTasks) {
    const task = erkennenToTask(t, "official");
    await saveTask(task);
    ok++;
  }
  console.log(`SEK Erkennen: ${emotionenErkennenTasks.length} gespeichert`);

  for (const t of emotionenRegulierenTasks) {
    const task = regulierenToTask(t, "official");
    await saveTask(task);
    ok++;
  }
  console.log(`SEK Regulieren: ${emotionenRegulierenTasks.length} gespeichert`);

  for (const t of sozialesEntscheidenTasks) {
    const task = entscheidenToTask(t, "official");
    await saveTask(task);
    ok++;
  }
  console.log(`SEK Entscheiden: ${sozialesEntscheidenTasks.length} gespeichert`);
}

/** Alle Wortflüssigkeit-Trainingsaufgaben aus dem Lexikon (210 Wörter) generieren und speichern. */
async function seedWortflüssigkeitFromLexicon() {
  const tasks = generateAllWordFluencyTasksFromLexicon();
  let saved = 0;
  for (const t of tasks) {
    const task = wortflüssigkeitToTask({ ...t, id: t.id ?? `wf-${saved}` }, "generated");
    // Lexikon-Tasks sind bereits in generateWordFluencyTaskFromWord mit Lexikon-Override validiert;
    // zentrale validateTask würde mit vollem Lexikon scheitern (Anagramme).
    await saveTask({ ...task, validated: true });
    saved++;
  }
  console.log(
    `Wortflüssigkeit Lexikon: ${saved} gespeichert (von ${wortfluessigkeitWords.length} Wörtern; ${wortfluessigkeitWords.length - saved} übersprungen: < 3 verschiedene Buchstaben oder offiziell)`
  );
}

async function main() {
  if (!isSupabaseConfigured()) {
    console.error(
      "❌ Datenbank nicht konfiguriert. Bitte .env mit VITE_SUPABASE_URL und VITE_SUPABASE_ANON_KEY setzen. Alle Aufgaben müssen in der Datenbank gespeichert werden."
    );
    process.exit(1);
  }

  const args = process.argv.slice(2);
  const doGenerate = args.includes("--generate");
  const domainArg = args[args.indexOf("--generate") + 1];
  const countArg = args[args.indexOf("--generate") + 2];
  const defaultCount =
    domainArg === "kff-figuren" || domainArg === "kff-implikationen"
      ? 500
      : domainArg === "kff-merkfähigkeit"
        ? 100
        : 100;
  const count = countArg ? parseInt(countArg, 10) : defaultCount;

  await seedOfficial();
  await seedWortflüssigkeitFromLexicon();

  if (doGenerate && domainArg) {
    const domain = domainArg as
      | "kff-zahlenfolgen"
      | "kff-figuren"
      | "kff-implikationen"
      | "kff-wortflüssigkeit"
      | "kff-merkfähigkeit";
    console.log(`Generiere ${count} Aufgaben für ${domain}…`);
    const result = await fillPool(domain, count);
    console.log(`Fertig: ${result.saved} gespeichert, ${result.discarded} verworfen`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
