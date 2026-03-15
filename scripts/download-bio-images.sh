#!/bin/bash
# Downloads Wikimedia Commons images for biology UKs missing visuals
# All images: CC BY, CC BY-SA, CC0 or Public Domain
# Run from project root: bash scripts/download-bio-images.sh

set -e
DIR="public/images/bms"
mkdir -p "$DIR"

echo "=== Downloading biology images from Wikimedia Commons ==="

# Helper: download with proper User-Agent (Wikimedia requires it)
dl() {
  local url="$1"
  local dest="$2"
  if [ -f "$dest" ]; then
    echo "  SKIP (exists): $dest"
  else
    echo "  GET: $dest"
    curl -sL -A "MedMasterBot/1.0 (support@medmaster.at)" -o "$dest" "$url"
  fi
}

echo ""
echo "--- Kap1: Zellbiologie ---"
dl "https://upload.wikimedia.org/wikipedia/commons/a/a2/Passive_vs_Active_Membrane_Transport.svg" \
   "$DIR/bio-membrantransport.svg"

dl "https://upload.wikimedia.org/wikipedia/commons/7/74/CellRespiration.svg" \
   "$DIR/bio-zellatmung.svg"

echo ""
echo "--- Kap2: Humanbiologie ---"
dl "https://upload.wikimedia.org/wikipedia/commons/9/99/408_Connective_Tissue.jpg" \
   "$DIR/bio-bindegewebe-typen.jpg"

dl "https://upload.wikimedia.org/wikipedia/commons/6/68/Scheme_female_reproductive_system-en.svg" \
   "$DIR/bio-fortpflanzungssystem.svg"

echo ""
echo "--- Kap3: Entwicklung & Evolution ---"
dl "https://upload.wikimedia.org/wikipedia/commons/2/23/Endosymbiosis_evolution_diagram.svg" \
   "$DIR/bio-endosymbiose.svg"

dl "https://upload.wikimedia.org/wikipedia/commons/8/82/Directional%2C_Disruptive_and_Stabilizing_Selections.svg" \
   "$DIR/bio-selektionstypen.svg"

dl "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hardy-Weinberg.svg" \
   "$DIR/bio-hardy-weinberg.svg"

dl "https://upload.wikimedia.org/wikipedia/commons/3/37/Human_evolution_timeline.svg" \
   "$DIR/bio-hominiden-evolution.svg"

dl "https://upload.wikimedia.org/wikipedia/commons/e/e7/Egg_cell_fertilization_-_Zygote.png" \
   "$DIR/bio-befruchtung.png"

dl "https://upload.wikimedia.org/wikipedia/commons/3/31/Gastrulation.png" \
   "$DIR/bio-gastrulation.png"

dl "https://upload.wikimedia.org/wikipedia/commons/e/e0/Neural.crest.cells.migration.svg" \
   "$DIR/bio-neurulation.svg"

dl "https://upload.wikimedia.org/wikipedia/commons/6/67/Embryogenesis_in_vertebrates.jpg" \
   "$DIR/bio-organogenese.jpg"

dl "https://upload.wikimedia.org/wikipedia/commons/c/c8/Placentation-ca.svg" \
   "$DIR/bio-plazenta.svg"

echo ""
echo "--- Kap4: Genetik ---"
dl "https://upload.wikimedia.org/wikipedia/commons/9/96/Co-dominance_and_Incomplete_Dominance.svg" \
   "$DIR/bio-dominanz-kodominanz.svg"

dl "https://upload.wikimedia.org/wikipedia/commons/8/82/Autosomal_Recessive_Pedigree_Chart.svg" \
   "$DIR/bio-erbgang-autosomal.svg"

dl "https://upload.wikimedia.org/wikipedia/commons/c/ce/ABO_blood_group_diagram.svg" \
   "$DIR/bio-blutgruppen-abo.svg"

dl "https://upload.wikimedia.org/wikipedia/commons/7/7d/Hallmarks_of_cancer.svg" \
   "$DIR/bio-tumorgenetik-hallmarks.svg"

dl "https://upload.wikimedia.org/wikipedia/commons/f/fc/Epigenetic_mechanisms.png" \
   "$DIR/bio-epigenetik.png"

dl "https://upload.wikimedia.org/wikipedia/commons/a/ab/Polymerase_chain_reaction-en.svg" \
   "$DIR/bio-pcr-gentechnik.svg"

dl "https://upload.wikimedia.org/wikipedia/commons/6/6b/Stammbaumanalyse_3.png" \
   "$DIR/bio-stammbaum-analyse.png"

dl "https://upload.wikimedia.org/wikipedia/commons/9/92/Amniocentesis.png" \
   "$DIR/bio-amniozentese.png"

echo ""
echo "--- Kap5: Ökologie & Immunologie ---"
dl "https://upload.wikimedia.org/wikipedia/commons/3/3a/Ecological_Pyramid.svg" \
   "$DIR/bio-oekologische-pyramide.svg"

dl "https://upload.wikimedia.org/wikipedia/commons/8/84/Competitive_exclusion_in_barnacles_eu.svg" \
   "$DIR/bio-oekologische-nische.svg"

dl "https://upload.wikimedia.org/wikipedia/commons/6/64/Symbiotic_relationships_diagram.svg" \
   "$DIR/bio-symbiose-typen.svg"

dl "https://upload.wikimedia.org/wikipedia/commons/a/a7/FoodWeb.svg" \
   "$DIR/bio-nahrungsnetz.svg"

dl "https://upload.wikimedia.org/wikipedia/commons/f/ff/Logistic_Carrying_Capacity.svg" \
   "$DIR/bio-populationswachstum.svg"

echo ""
echo "=== Done! Downloaded images to $DIR ==="
echo ""
echo "Licenses:"
echo "  CC BY-SA 4.0 / 3.0 — most SVGs (attribution + share-alike)"
echo "  CC BY 3.0 — OpenStax connective tissue"
echo "  CC0 / Public Domain — fertilization, food web, pedigree, gastrulation, neurulation"
echo ""
echo "Attribution: Wikimedia Commons contributors (see ATTRIBUTION-WIKIMEDIA.md)"
