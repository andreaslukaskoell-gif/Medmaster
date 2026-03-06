#!/usr/bin/env node
/**
 * Add imageUrl fields to Unterkapitel that don't have one yet.
 * Only adds where a good topical match exists.
 */
import fs from "fs";

const MAPPING = {
  // Bio Kap1
  "bio-1-02": "/images/bms/bio-tierzelle.jpg", // Prokaryoten vs Eukaryoten — cell overview
  "bio-1-08": "/images/bms/bio-mitochondrium.jpg", // Energiestoffwechsel — mitochondria

  // Bio Kap2
  "bio-3-06": "/images/bms/bio-immunantwort.jpg", // Immunsystem
  "bio-3-07": "/images/bms/bio-lymphsystem.jpg", // Lymphsystem
  "bio-3-09": "/images/bms/bio-verdauungssystem.jpg", // Verdauungssystem
  "bio-3-10": "/images/bms/bio-niere.jpg", // Harnsystem
  "bio-3-04": "/images/bms/bio-herz-kreislauf.jpg", // Herz Kreislauf (check if not set)
  "bio-3-05": "/images/bms/bio-blut-zusammensetzung.jpg", // Blut

  // Bio Kap3 - Entwicklung/Evolution
  "bio-4-00": "/images/bms/bio-mitose-phasen.jpg", // Gametogenese
  "bio-4-02": "/images/bms/bio-haematopoese.jpg", // Gastrulation (not perfect, but differentiation)

  // Bio Kap4 - Genetik
  "bio-4-04": "/images/bms/bio-homologe-chromosomen.jpg", // Mendelsche Regeln
  "bio-4-07": "/images/bms/bio-blutgruppen.jpg", // Blutgruppen AB0
  "bio-4-08": "/images/bms/bio-dna-replikation.jpg", // Mutationen — DNA context
  "bio-4-10": "/images/bms/bio-haematopoese.jpg", // Hardy-Weinberg — population

  // Bio Kap5 - Immunologie
  "bio-10-05": "/images/bms/bio-lymphsystem.jpg", // Ökosysteme — no direct match, skip
  "bio-11-02": "/images/bms/bio-antigene.jpg", // Antikörper-Gene
  "bio-11-04": "/images/bms/bio-blutgruppen.jpg", // Rhesusfaktor

  // Chemie Kap1
  "ch-1-03": "/images/bms/ch-atommodell.jpg", // Radioaktivität
  "ch-1-04": "/images/bms/ch-periodensystem.jpg", // Massenzahl, Mol
  "ch-2-01": "/images/bms/ch-wasserstoffbruecken.jpg", // Intermolekulare WW
  "ch-2-02": "/images/bms/ch-loesungen.jpg", // Löslichkeit
  "ch-5-02": "/images/bms/ch-periodensystem.jpg", // Periodische Trends
  "ch-5-03": "/images/bms/ch-elektronenschalen.jpg", // Elementgruppen

  // Chemie Kap2 - Materie
  "ch-4-02": "/images/bms/ch-aggregatzustaende.jpg", // Phasenübergänge

  // Chemie Kap4 - Reaktionen
  "ch-7-03": "/images/bms/ch-chemische-reaktionen.jpg", // Stöchiometrie
  "ch-8-02": "/images/bms/ch-enzymatische-reaktion.jpg", // Gleichgewicht
  "ch-8-03": "/images/bms/ch-enzyme.jpg", // Le Chatelier

  // Chemie Kap5 - Anorganische Chemie
  "ch-10-02": "/images/bms/ch-ph-skala.jpg", // Säuren/Basen
  "ch-10-03": "/images/bms/ch-ph-skala.jpg", // Puffer (pH context)
  "ch-11-01": "/images/bms/ch-chemische-reaktionen.jpg", // Redox

  // Chemie Kap6 - Bindung
  "ch-6-02": "/images/bms/ch-kovalente-bindung.jpg", // Kovalente Bindung
  "ch-6-03": "/images/bms/ch-wasserstoffbruecken.jpg", // Van-der-Waals etc.
  "ch-6-04": "/images/bms/ch-peptidbindung.jpg", // Bio Moleküle

  // Chemie Kap6 - Organische Chemie
  "ch-13-01": "/images/bms/ch-aminosaeure.jpg", // Aminosäuren
  "ch-13-02": "/images/bms/ch-kohlenhydrate.jpg", // Kohlenhydrate
  "ch-13-03": "/images/bms/ch-triglycerid.jpg", // Lipide
  "ch-13-04": "/images/bms/ch-nukleotid.jpg", // Nukleinsäuren
  "ch-12-03": "/images/bms/ch-dehydratation-hydrolyse.jpg", // Funktionelle Gruppen
};

// Process all chapter files
const CHAPTER_FILES = [
  "src/data/bmsKapitel/biologie/kap1-die-zelle.ts",
  "src/data/bmsKapitel/biologie/kap2-anatomie-gewebe-physiologie.ts",
  "src/data/bmsKapitel/biologie/kap3-entwicklung-evolution.ts",
  "src/data/bmsKapitel/biologie/kap4-genetik.ts",
  "src/data/bmsKapitel/biologie/kap5-oekologie-immunologie.ts",
  "src/data/bmsKapitel/chemie/kap1-atombau-periodensystem.ts",
  "src/data/bmsKapitel/chemie/kap2-materie-und-zustaende.ts",
  "src/data/bmsKapitel/chemie/kap4-reaktionen-gleichgewicht.ts",
  "src/data/bmsKapitel/chemie/kap5-anorganische-chemie.ts",
  "src/data/bmsKapitel/chemie/kap6-chemische-bindung.ts",
  "src/data/bmsKapitel/chemie/kap6-organische-chemie.ts",
];

let totalAdded = 0;

for (const filePath of CHAPTER_FILES) {
  let content = fs.readFileSync(filePath, "utf-8");
  let added = 0;

  for (const [ukId, imgUrl] of Object.entries(MAPPING)) {
    // Check if this UK ID exists in this file
    const idPattern = `id: "${ukId}"`;
    const idx = content.indexOf(idPattern);
    if (idx === -1) continue;

    // Check if imageUrl already exists nearby (within next 200 chars)
    const nearby = content.slice(idx, idx + 200);
    if (nearby.includes("imageUrl")) continue;

    // Find the title line after the id
    const titleMatch = content.slice(idx).match(/title: "[^"]+",?\n/);
    if (!titleMatch) continue;

    const titleEnd = idx + titleMatch.index + titleMatch[0].length;
    const indent = "      "; // standard 6-space indent

    // Insert imageUrl after the title line
    content =
      content.slice(0, titleEnd) +
      `${indent}imageUrl: "${imgUrl}",\n` +
      content.slice(titleEnd);

    added++;
  }

  if (added > 0) {
    fs.writeFileSync(filePath, content);
    console.log(`${filePath}: +${added} imageUrls`);
    totalAdded += added;
  }
}

console.log(`\nTotal: +${totalAdded} imageUrls added`);
