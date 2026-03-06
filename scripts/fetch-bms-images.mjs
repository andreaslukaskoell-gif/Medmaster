#!/usr/bin/env node
/**
 * Download OpenStax Anatomy & Physiology 2e illustrations for BMS chapters.
 * All images: CC BY 4.0 (OpenStax, Rice University) — same professional style.
 *
 * Usage: node scripts/fetch-bms-images.mjs
 */

import fs from "fs";
import path from "path";
import https from "https";

const OUT_DIR = path.resolve("public/images/bms");
fs.mkdirSync(OUT_DIR, { recursive: true });

const GITHUB_RAW =
  "https://raw.githubusercontent.com/openstax/osbooks-anatomy-physiology/main/media";

// ── Image mapping: local filename -> OpenStax filename ──
// Curated: best diagram per BMS topic, all same textbook style
const IMAGES = {
  // ===================== BIOLOGIE — Kap1: Die Zelle =====================
  "bio-tierzelle.jpg": "0312_Animal_Cell_and_Components.jpg",
  "bio-zellmembran-phospholipid.jpg": "0301_Phospholipid_Structure.jpg",
  "bio-zellmembran-bilayer.jpg": "0303_Lipid_Bilayer_With_Various_Components.jpg",
  "bio-diffusion.jpg": "0305_Simple_Diffusion_Across_Plasma_Membrane.jpg",
  "bio-osmose.jpg": "0307_Osmosis.jpg",
  "bio-natrium-kalium-pumpe.jpg": "0308_Sodium_Potassium_Pump.jpg",
  "bio-endozytose.jpg": "0309_Three_Forms_of_Endocytosis.jpg",
  "bio-exozytose.jpg": "0310_Exocytosis.jpg",
  "bio-er.jpg": "0313_Endoplasmic_Reticulum.jpg",
  "bio-golgi.jpg": "0314_Golgi_Apparatus.jpg",
  "bio-mitochondrium.jpg": "0315_Mitochondrion_new.jpg",
  "bio-zellkern.jpg": "0318_Nucleus.jpg",
  "bio-zytoskelett.jpg": "0317_Cytoskeletal_Components.jpg",

  // ===================== BIOLOGIE — Kap1: DNA & Zellteilung =====================
  "bio-dna-makrostruktur.jpg": "0321_DNA_Macrostructure.jpg",
  "bio-dna-nukleotide.jpg": "0322_DNA_Nucleotides.jpg",
  "bio-dna-replikation.jpg": "0323_DNA_Replication.jpg",
  "bio-transkription.jpg": "0325_Transcription.jpg",
  "bio-translation.jpg": "0327_Translation.jpg",
  "bio-transkription-translation.jpg": "0328_Transcription-translation_Summary.jpg",
  "bio-zellzyklus.jpg": "0329_Cell_Cycle.jpg",
  "bio-homologe-chromosomen.jpg": "0330_Homologous_Pair_of_Chromosomes.jpg",
  "bio-mitose-phasen.jpg": "0331_Stages_of _Mitosis_and_Cytokinesis.jpg",
  "bio-haematopoese.jpg": "0337_Hematopoiesis_new.jpg",

  // ===================== BIOLOGIE — Kap2: Anatomie & Physiologie =====================
  // Herz & Kreislauf
  "bio-herz-position.jpg": "2001_Heart_Position_in_ThoraxN.jpg",
  "bio-herz-kreislauf.jpg": "2003_Dual_System_of_Human_Circulation.jpg",
  "bio-herzwand.jpg": "2004_Heart_Wall.jpg",
  "bio-herz-oberflaeche.jpg": "2005_Surface_Anatomy_of_the_Heart.jpg",
  "bio-blut-zusammensetzung.jpg": "1901_Composition_of_Blood.jpg",
  "bio-erythrozyten.jpg": "1903_Shape_of_Red_Blood_Cells.jpg",
  "bio-erythrozyten-lebenszyklus.jpg": "1905_Erythrocyte_Life_Cycle.jpg",
  "bio-blutgerinnung.jpg": "1909_Blood_Clotting.jpg",
  "bio-blutgruppen.jpg": "1913_ABO_Blood_Groups.jpg",

  // Nervensystem
  "bio-neuron.jpg": "1206_The_Neuron.jpg",
  "bio-neuron-typen.jpg": "1207_Neuron_Shape_Classification.jpg",
  "bio-myelinscheide.jpg": "1211_Myelinated_Neuron.jpg",
  "bio-synapse.jpg": "1225_Chemical_Synapse.jpg",
  "bio-hirnstamm.jpg": "1311_Brain_Stem.jpg",
  "bio-rueckenmark.jpg": "1313_Spinal_Cord_Cross_Section.jpg",
  "bio-hirnnerven.jpg": "1320_The_Cranial_Nerves.jpg",

  // Muskulatur
  "bio-muskelfaser.jpg": "1002_Organization_of_Muscle_Fiber.jpg",
  "bio-muskelkontraktion.jpg": "1006_Sliding_Filament_Model_of_Muscle_Contraction.jpg",
  "bio-herzmuskel.jpg": "1020_Cardiac_Muscle.jpg",

  // Verdauung
  "bio-verdauungssystem.jpg": "2401_Components_of_the_Digestive_System.jpg",
  "bio-gi-trakt-schichten.jpg": "2402_Layers_of_the_Gastrointestinal_Tract.jpg",
  "bio-magen.jpg": "2414_Stomach.jpg",
  "bio-duenndarm.jpg": "2417_Small_IntestineN.jpg",

  // Atmung
  "bio-atemwege.jpg": "2301_Major_Respiratory_Organs.jpg",
  "bio-trachea.jpg": "2308_The_Trachea.jpg",
  "bio-alveolen.jpg": "2310_Structures_of_the_Respiratory_Zone.jpg",
  "bio-lunge.jpg": "2312_Gross_Anatomy_of_the_Lungs.jpg",

  // Niere & Harnwege
  "bio-niere.jpg": "2610_The_Kidney.jpg",
  "bio-nephron-blutfluss.jpg": "2611_Blood_Flow_in_the_Nephron.jpg",
  "bio-harnblase.jpg": "2605_The_Bladder.jpg",

  // Haut
  "bio-haut-aufbau.jpg": "501_Structure_of_the_skin.jpg",
  "bio-epidermis-schichten.jpg": "502_Layers_of_epidermis.jpg",

  // Sinnesorgane
  "bio-auge.jpg": "1413_Structure_of_the_Eye.jpg",
  "bio-ohr.jpg": "1404_The_Structures_of_the_Ear.jpg",
  "bio-cochlea.jpg": "1406_Cochlea.jpg",

  // Endokrin
  "bio-nebenniere.jpg": "1818_The_Adrenal_Glands.jpg",
  "bio-pankreas.jpg": "1820_The_Pancreas.jpg",
  "bio-blutzucker-regulation.jpg": "1822_The_Homostatic_Regulation_of_Blood_Glucose_Levels.jpg",
  "bio-calcium-regulation.jpg": "1817_The_Role_of_Parathyroid_Hormone_in_Maintaining_Blood_Calcium_Homeostasis.jpg",

  // ===================== BIOLOGIE — Kap5: Immunologie =====================
  "bio-lymphsystem.jpg": "2201_Anatomy_of_the_Lymphatic_System.jpg",
  "bio-lymphknoten.jpg": "2207_Structure_and_Histology_of_a_Lymph_Node.jpg",
  "bio-immunantwort.jpg": "2211_Cooperation_Between_Innate_and_Immune_Responses.jpg",
  "bio-antigene.jpg": "2214_Antigenic_Determinants.jpg",
  "bio-antigen-praesentation.jpg": "2216_Antigen_Processing_and_Presentation.jpg",

  // ===================== CHEMIE =====================
  // Kap1: Atombau
  "ch-elektronenschalen.jpg": "0201_Electron_Shell.jpg",
  "ch-ionenbindung.jpg": "0204_Ionic_Bonding.jpg",
  "ch-kovalente-bindung.jpg": "0205_Covalent_Bonding.jpg",
  "ch-wasserstoffbruecken.jpg": "0208_Hydrogen_Bonding_Between_Water_Molecules-01.jpg",

  // Kap2: Materie
  "ch-aggregatzustaende.jpg": "0210_Three_Major_States_of_Matter.jpg",
  "ch-loesungen.jpg": "0346_Concentration_of_Solutions.jpg",

  // Kap4: Reaktionen
  "ch-ph-skala.jpg": "0213_pH_702.jpg",
  "ch-aminosaeure.jpg": "0218_Amino_Acid_702.jpg",

  // Kap6: Organische Chemie
  "ch-kohlenhydrate.jpg": "0219_Three_Important_Monosaccharides.jpg",
  "ch-triglycerid.jpg": "0220_Triglycerides-01.jpg",
  "ch-phospholipid.jpg": "0221_Phospholipids-01.jpg",
  "ch-proteinstruktur.jpg": "0223_Protein_702.jpg",
  "ch-nukleotid.jpg": "0224_Nucleotides.jpg",
  "ch-atp.jpg": "0225_ATP.jpg",
};

// ── Download helper ──────────────────────────────────────────
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https
      .get(
        url,
        {
          headers: {
            "User-Agent":
              "MedMaster-BMS-ImageFetcher/1.0 (support@medmaster.at)",
          },
        },
        (res) => {
          if (
            res.statusCode >= 300 &&
            res.statusCode < 400 &&
            res.headers.location
          ) {
            return downloadFile(res.headers.location, dest)
              .then(resolve)
              .catch(reject);
          }
          if (res.statusCode !== 200) {
            reject(new Error(`HTTP ${res.statusCode}`));
            return;
          }
          const stream = fs.createWriteStream(dest);
          res.pipe(stream);
          stream.on("finish", () => {
            stream.close();
            resolve();
          });
        }
      )
      .on("error", reject);
  });
}

// ── Main ─────────────────────────────────────────────────────
async function main() {
  const entries = Object.entries(IMAGES);
  console.log(
    `Downloading ${entries.length} OpenStax images to ${OUT_DIR}...\n`
  );

  let ok = 0;
  let skip = 0;
  let fail = 0;
  const failures = [];

  for (const [localName, remoteName] of entries) {
    const dest = path.join(OUT_DIR, localName);

    if (fs.existsSync(dest)) {
      skip++;
      continue;
    }

    const url = `${GITHUB_RAW}/${encodeURIComponent(remoteName)}`;

    try {
      await downloadFile(url, dest);
      const kb = (fs.statSync(dest).size / 1024).toFixed(0);
      console.log(`  OK  ${localName} (${kb} KB)`);
      ok++;
    } catch (err) {
      console.log(`  ERR ${localName} — ${err.message}`);
      failures.push(localName);
      fail++;
    }
  }

  console.log(`\n--- Done ---`);
  console.log(`Downloaded: ${ok} | Skipped: ${skip} | Failed: ${fail}`);
  if (failures.length) {
    console.log(`Failed files:`);
    failures.forEach((f) => console.log(`  - ${f}`));
  }

  // Write attribution
  fs.writeFileSync(
    path.join(OUT_DIR, "ATTRIBUTION.md"),
    `# Image Attribution

All images in this directory are from:
**OpenStax Anatomy and Physiology 2e**
Rice University, Houston, Texas

License: Creative Commons Attribution 4.0 International (CC BY 4.0)
https://creativecommons.org/licenses/by/4.0/

Attribution: "Anatomy and Physiology 2e" by OpenStax is licensed under CC BY 4.0.
Source: https://openstax.org/books/anatomy-and-physiology-2e/

These images are used in the MedMaster app for educational purposes.
`
  );
  console.log("Attribution file written.");
}

main().catch(console.error);
