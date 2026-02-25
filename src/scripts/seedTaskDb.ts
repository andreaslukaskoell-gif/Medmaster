/**
 * Migration: Offizielle KFF/SEK-Aufgaben und optionale Generator-Batches in die Task-DB schreiben.
 * Ausführung: npx tsx src/scripts/seedTaskDb.ts [--generate kff-figuren 100]
 * Lädt .env für VITE_SUPABASE_URL und VITE_SUPABASE_ANON_KEY (optional).
 */
import "dotenv/config";
import { saveTask } from "@/lib/taskDb/storage";
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
import { OFFICIAL_ZF_EXAMPLES } from "@/data/kffZahlenfolgenMedAT";
import { OFFICIAL_FZ_EXAMPLES } from "@/data/kffFigurenZusammensetzenMedAT";
import { OFFICIAL_IMPLICATION_EXAMPLES } from "@/data/kffImplikationen";
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

  for (const t of OFFICIAL_IMPLICATION_EXAMPLES) {
    const task = implikationToTask(t, "official");
    const result = validateTask({ ...task, createdAt: task.createdAt ?? new Date().toISOString() });
    if (result.ok) {
      await saveTask({ ...task, validated: true });
      ok++;
    } else skip++;
  }
  console.log(`Implikationen offiziell: gespeichert (insg. ${ok}, skip ${skip})`);

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

async function main() {
  const args = process.argv.slice(2);
  const doGenerate = args.includes("--generate");
  const domainArg = args[args.indexOf("--generate") + 1];
  const countArg = args[args.indexOf("--generate") + 2];
  const count = countArg ? parseInt(countArg, 10) : 100;

  await seedOfficial();

  if (doGenerate && domainArg) {
    const domain = domainArg as
      | "kff-zahlenfolgen"
      | "kff-figuren"
      | "kff-implikationen"
      | "kff-wortflüssigkeit";
    console.log(`Generiere ${count} Aufgaben für ${domain}…`);
    const result = await fillPool(domain, count);
    console.log(`Fertig: ${result.saved} gespeichert, ${result.discarded} verworfen`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
