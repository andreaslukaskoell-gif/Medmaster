/**
 * TV-Übungstexte (offizielles MedAT-Vorbild) in kff_tasks speichern.
 *
 * Verwendet die Übungstexte aus tvUebungstexte.ts und fügt sie in
 * kff_tasks (category: textverstaendnis) ein. Bereits vorhandene
 * Einträge mit derselben data_json->>'id' werden übersprungen,
 * damit wiederholtes Ausführen keine Duplikate erzeugt.
 *
 * Voraussetzung: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 *
 * Ausführung:
 *   npx tsx src/scripts/seedTvUebungstexte.ts
 */

import { createClient } from "@supabase/supabase-js";
import { tvUebungstexte } from "../data/tvUebungstexte";

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error(
    "❌ Fehlende Umgebungsvariablen. Bitte setzen:\n" +
      "  VITE_SUPABASE_URL oder SUPABASE_URL\n" +
      "  SUPABASE_SERVICE_ROLE_KEY\n" +
      "Beispiel: SUPABASE_SERVICE_ROLE_KEY=xxx npx tsx src/scripts/seedTvUebungstexte.ts"
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey);

function difficultyNumToText(d: 1 | 2 | 3): "leicht" | "mittel" | "schwer" {
  return d === 1 ? "leicht" : d === 2 ? "mittel" : "schwer";
}

async function main() {
  console.log("🌱 TV-Übungstexte seed startet …\n");

  const { data: existing } = await supabase
    .from("kff_tasks")
    .select("id, data_json")
    .eq("category", "textverstaendnis");

  const existingIds = new Set(
    (existing ?? []).map((row) => (row.data_json as { id?: string })?.id).filter(Boolean)
  );

  const toInsert = tvUebungstexte.filter((t) => !existingIds.has(t.id));

  if (toInsert.length === 0) {
    console.log(
      `✅ Alle ${tvUebungstexte.length} TV-Übungstexte sind bereits in kff_tasks vorhanden.`
    );
    return;
  }

  const rows = toInsert.map((tv) => ({
    category: "textverstaendnis",
    difficulty: difficultyNumToText(tv.difficulty),
    data_json: tv,
  }));

  const { data, error } = await supabase.from("kff_tasks").insert(rows).select("id");

  if (error) {
    console.error("❌ kff_tasks insert:", error.message);
    process.exit(1);
  }

  console.log(`✅ ${data?.length ?? rows.length} TV-Übungstexte in kff_tasks gespeichert.`);
  if (existingIds.size > 0) {
    console.log(`   (${existingIds.size} bereits vorhanden, übersprungen)`);
  }
}

main().catch((err) => {
  console.error("❌ Script-Fehler:", err);
  process.exit(1);
});
